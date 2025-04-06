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
    "5rViG5hqfZnzQt8PnDKLHJh5z1ScAv2td8FFDa56Qfhg2xcS1yTPsE1RJNRPfvzegtzJp1Qd5qoUt7Ljcs4KLD4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ztspcdW7w8b1AgWQq5T3cdEVU7f6gxGpnx3kj6sdBqYmn7TDPeMNhjd2Kwp6De4zuTmgsHQnGRW7r4p4kuJQ1CF",
  "key1": "4h28ork3S75TkWuTk9zPUZY3DevSGWqffFZxyPnpDMFYXCJ87WhjTcpEkoMjB4s6dYR6bT4bqe4rHaXpTEe7HJK8",
  "key2": "25Wd3KJRWykjQKBcWEwQVFBD9hQji6SnnrgTVv6THzKtTzvCEK1tkQqyGeoiox4cr1vJNe2JL9t5ZZ9eSsarfmGf",
  "key3": "4NBxu4XuChbBrUSahdxwef5K2EoSVENDTgyJPb5KLVNyLord5eocDpvUUjjxwuJQGYDGjLzGaFc4RudjhZwowR7e",
  "key4": "4UpGJXvhsQWikEqFWDjjjx7kfjrtsgE5GnTQwVQU1RBSCXWajPJxoRTVdui7zKeieHqKb8TWhhhkdD7EyEb3WNUc",
  "key5": "56goAbNinyi62Z5KP7knZT6uMwGUpnx2JzeCTSWW9Kj2hmoh46SfQXkJYYK1XJdfMn1DRJnNV8ZYK2uUBREdgtsi",
  "key6": "CQ8uu57CYNNRQxRHvUfdvK5sjTnhXU6janH14Y1uoiZhiYByNhMN2nZRJ8si3o5K3MPvZ3j7EUaEXzvMaTmrNKZ",
  "key7": "4scFTShRv6s4XoREZmag8MJGCjLTrx2hLJ4UkQ4dyrgKmF88w9yoibi56EFEN1acK2Cy3YiCscxXABL7eTof313g",
  "key8": "3DtzTpRkgEgybVMMnwPAsmUM7YXMDkWo1gWYC8yS7rKuYTzSe96svwT95BqdKrPZSteXcEjAaWp2aDvfTG8raFjD",
  "key9": "2jawTC8zV6bgYtBPSbZijR19Qvs8HmhSRCyNmAb91z1p5SqTuy2yknZmBX1KDV5hr7DiHNazm3QmTURCeR7va36Z",
  "key10": "Cu515mHAt315DJ77vR8eAdEsmKpvjYekYPxRmyZ3kxLAFtUfNLbxHgU4BhTJk3k2QoFZQPaSHfbJKpAYbsrCvNE",
  "key11": "5wXfy3j4N177qk9SRiRo2Hhjz9agfztLsDziKQoLUZTMUpRqyqfCAPq9VKGXfpkAJwcdsiSe8jYkYGHhT6SZ3QHj",
  "key12": "B82kXNWLgLHEwcgarmgoM6VyuUPH9UhjB3rnYgbphQzvqX9gHczHpUX8Nr7eQxPELZ6krnNL8g86sV6kznyk9zq",
  "key13": "43VWtzMp4APmyXuXtDqShrGPYtPWd6KZnJZptTcfJrYRPNRdq4QbsEtN6pzBmjDj7iPGyAreBv7QZcH3jyu9nq2n",
  "key14": "5YCFpYsKWugDWYnQHxAbnTPNraY6kJQNSeuentRbvWZyWb1LkDjwnRZ4jNoJsZSVXS6abqdY3ee2Bk3mKgQVYNAH",
  "key15": "5knMDnDVGK5EzePbDmFu4kaYcbCHgduJrSk1ACKa7aPzgDtPb7XnGMRUNyqmcfEcc7qbjjhJLvLz93cefKdzF4Yv",
  "key16": "5BYoaHY13P3NBodZNDs8fFc7FHDLtV5QFr9M2s1cpxgqvEFWXRPMYcZqoVTuPjBtcdAM9QUTdS6bPgmhRaYhp9pe",
  "key17": "2sKXjAAjo4oL8aLWKBQMNfPdjzv8YZ4r7PV39CMDeuPejhJJ6yQQoNUPMRg4zwwUVURkhN4c2oQXfyJZc6qm1KBJ",
  "key18": "5tyz7cehAjWLZapiPqsizyNBKzRavy3bDgWdTJYuEtUMX6QB8potZXUmoDJThD2wrca4nSJxA4jXFqrpyzkakJn4",
  "key19": "4JyoAJboUHxumsCmhn51iGkzwbjwVpX32pnJaUgBLfHNNz627bv3Wqn91XgEHn4SJtFSWemTryUZrJph1cDVegr8",
  "key20": "3wKUgJmq9KkgWPSoq4sDzQh9SmZhUKH2FMnbzuLeU64NDDVZ1p5X2BLrdLCo5RvLxnyWEUNvmBdYouw6YubwMcvM",
  "key21": "2fxYspxnMrkUNzcwohrzLwYFTLWP6QJiznQF9dp6T5n5ReKZoyqDTfCVnUV9Zc9wmnYUpDyw6aPKbXgYBRmyHjrn",
  "key22": "2wuXNTBEf1ca1Uwhyk5Ce5NniP9DcMNPctknVLX8zNs8pN7LiQ1x1vbjRCJPEfPNrYXAoYYEjjQqdotTDErSnvXq",
  "key23": "4uafZ7RQnfLjbyZK17moksY7S7apPdssaaoBah2yx7HqkBoickFkmNzgpEmkKMmQs4RFtNBfau2CsJzkqzUzbrkx",
  "key24": "38QiPC9xLWPkdvsLna4dDFq7FjiLVKRyokovQWpsT3yeJeGptSZ5YkkT9DCB7ibVm19zXPkTBFzCBYxRAcpi9AXH"
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
