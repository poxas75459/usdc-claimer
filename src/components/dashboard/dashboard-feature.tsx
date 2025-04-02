/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3amYvXuWuqr4xG9xsL9oJyEwKAtn8vnpRCwBfCuknWqzdryShztzYGRvviyKEDaG1zDCK6EnREDUkGUnGnUYH8Pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t221Rg6TGD6CEnHmjF2E1twE9QVDFhk7uWwaUhKFbYWgBq7vv6Di8tN82RZoZnvs6VQ7vZ9sPQd3Gq1USHdnFau",
  "key1": "on4C45zoJkfEQSNMW9pRbW9Vs74DU3KT8cW1gwaQb6gZfTumBj9pSw2TwBSo6eRkFZ7G7u5diC6LJH9LV85JzYC",
  "key2": "4YTeU9V9766emWkQLutNL24CyMSs5S3cP1EEeaYNFkUpcSvyuturg1m5ccrwwrMrhR3wQnpMw9zHsT12ig5LkHc2",
  "key3": "UF6TtBKseB85SYufRtprJzdB7mEZ6zUYC9w4NDo1bYo6HwC9bmrJyKh7gG1iJZYRzjxpcTazkzrKuAsTBa2Cr1N",
  "key4": "3H3mFD1oi5eoSpptnUmuFuC3HocyH2tyttugYCA9pM6P8hzUysNjBi8QPWjjmoBe8osS9uAW9X44qU9umyyBSg9e",
  "key5": "4LNXZrdnmdmA7VXjpMgazJ5DkgC2v26mTyrhnL7C7Ry77buidTR4N4YxgkqP4osfxZ4x3uPQ4YiZewrJvpKjqVYH",
  "key6": "5bybpW2dxDsWBohpKMFu7zqTB4fmxHoGB7fkme7SL2XXF8SsJ6b3jf3urEWA7tYLc1KqX2WB2811LyhP37ZnPsE9",
  "key7": "5y57A3Wb5gMJT72jHDu5NR6gpyq5dfkME27jQe6scADJNyG6grSvXAA6vNjvCAQprXRcA8tuYUSZHpS5nipxkmAz",
  "key8": "3wgQq4rR6tarbi9HK6xhrq76BAqp99XNcWhaXXKgkgdP9eyr7s2VCGbFBPF2yFgwsSbuyfmcKYV4h3m1WePZTcbL",
  "key9": "3Rh7mEbcP23o6RZAbwMGpTmjWZZN3E8iahuTRQV7aefnoJssn4MJK5CjFFH5B87RNWXBFZjgz3eqbwNTE8XGXFRz",
  "key10": "322VPxEQ1Bp7UVjz8nuyXA4ujhrPJdqmnHd63c1Pr9S78n577tbqBEUpCpXypsD3UTNnXrUrFnq2JvarwpK4r2uY",
  "key11": "3JxBfvpMPgh7Kw2RdxXqiVcPqHpKyeete7ZFGUeof7VSYF8wmD1oeu3kYRW7oPLBFAXNjRZF5WLH6DnrfSsF8Wa2",
  "key12": "42aF7FQoewXzvSe8CZz53CKZxzRAdijT7bD4ZiLG4xLbhc1gguVACtuB62MLARoofjbLiTr2wC38LfV7VfqKCdH",
  "key13": "47fwinKukJxcNQoLdUvzXofr3BzqaPExtodNNyPoDE1p2nWUSt1JWosHwanLXa2hc4uGUNUdvjAspfgBmNqRgFgA",
  "key14": "57AFyKV1MNeHHinwdqXYAiqzjLyLHsQ6qjTxA3T7MxTuUt5EK2HkXR7BAJxiQRaHG9Vm9rNJgsEhb1piRA17DUPL",
  "key15": "XVqzkM11AF8tBWkqgzAYDnPXepC3gBJBvmRy9wdVRoZxvc77BFS2Bx5JBFdHaXHXgEaVugC8wiTVTGdX25kbRFe",
  "key16": "324WrpqgrxdPoWXEkdYcLemLU7oLM4FwCdZMhVvrGYnXUHD7e8MpqNegEbuyxjZPVqntxdgzu68RoP8DtbBKVc6k",
  "key17": "5uASLiwpyv8nNBGWSZFkzJCLB47uALdwXMNhc2gyNP9hbgP9P5b7u2VYVWtAdhsyQnBLJTLZByfa89BeRw8HFk4N",
  "key18": "NEwfSREse5BrSJQnfCXaDP5uZLmY6eWaWQjcUGrxW771niWvrGbbRCK7Z3oWpYq7WdrrLPkGbog4yJeBZkVPq3S",
  "key19": "2DktTw1ahGRZE4QXippSayaYwxoYFwNWojy8GSoUY5bB5iXXjC9pgudjmh1wcbCYxpNJGytJVV4YfaTZ5hJ8JeMu",
  "key20": "4LmSDFAwDDyxgqabaWYtesLDXforHzvTbe9ukSLGUKLwbrnpJPyDDnvuBqFnCg2qaYFf6QszBDBd4bhH959rjtaK",
  "key21": "3e9SgWhKaw7Nm2E2BXXEuX8C8PZ2RHkxbRVaM7DkSyxY5KdRVsjWKk7yFa864pHqRhdFGZAh3AUy1uShKJKiGURj",
  "key22": "2be83DZS7g6DyJ6qPMFpkLZUhEvtaAZsBy9azLjfvMRVzCq2J5dgEomFHHRo4TeVaHtJk8VLYDoFZ1Gw62cKEp6z",
  "key23": "b7Bq4K16VAdv2Rd38br99Cm1TepjU5haML4BcneBJEbngQSNs8yh4D7WdfqdkiYFzqnorqtEMyQsWLCbAVhxRE5",
  "key24": "3RGuutS4np3MoicvAuxSEEihT9GmAxY25ropb1ancjxP9Rx5iAgWbjGCHQ7dymgVoD3r2wLLmWfNPipaB7C9DqJ5",
  "key25": "BrTqMPJgVYnyFjbce5EfDNtp2PKXVjXtTXCFPYxvY9ssnJv2FSdThHYZ4Vo16CU59vvqMwzYwAwHRmsp58MZrae",
  "key26": "25KV9NrWwb3z299RHAcxDyWiYW2VpVgqVdwBHUACTA7U5VkqovHcLKDvL9f6TUTkJsweeBJSoXPD3nkNfTzvd3EN",
  "key27": "4rPcdLXEcxnM67XRBQJhdHm75T389ZbRNPfdTZekTmXS9VcVH7KLrBcWukD4AXkiuyNt8dELiCqHvYaUqSF1G7Gq",
  "key28": "3xCCFRqyY5VVGAhzhA3yxNtkrUjA7YNhTJraGsjAJEsNBh9eoX9XB8ZNgDSxZDwB1fzAvWK7nYaqF9KmjYJn9Bcq",
  "key29": "3uFeUHeYu7ED6thc1XhkVFBqNfD6tbixGbvJcNtYUpjSpbiBZDBk7G7uRoqKxR8H7Wtkn295PRz135AjgmhoSphh"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
