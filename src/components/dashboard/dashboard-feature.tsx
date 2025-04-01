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
    "67pZpvoWGv6JhK5Lj6GWLLvfGHgtUbw65YZ4ztxexfuNrWmu3oRy5CdjnjBrf44UdaRkdMfqCsueHdB6eHC3b5Uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LyoJUuCB3iVXFcJ8qc126YmRCgnSNA5ur2NujgVsmUXWzw8LQd3UiowRUjab1xjcwBZnyLa34GZSY61QqsUkSDA",
  "key1": "5Pc8sgkcSu2sopMDfnwhRr7Cr9zek9XnC9c1vFAYZ3hF5aAgaRNP3P9tp2NbhPZ6wfyJzjpDTwHzqbnCV3pCys1N",
  "key2": "3M9KnzMWarVdT7FMxUQhb1W1UCrPdRxu5MopDnbvn4gaMzq13xh4prDnJm39nvXFneAdppkjGT7mXyUYvCVA4eki",
  "key3": "K2M3qAm9YmZkx6NW232kHzJp1THUjHoGS8peGyvuEQZVP5GvP6ZQmeM7eh9L6anWEHXCSmy9rqBBscSjn4VaU4k",
  "key4": "5c3FJzA45q9YEoMXMhsi5eSgS4Dkt4RFSkqF85Wjh8VrK8bfzuHwCNKCzprXyQyV4cYmNB2Z7KY7ie1XseQHjFrB",
  "key5": "36zbPckeQLJ7ex2Ny5RDgnEzNFcZUHZs77mymYhQmbaxQY17kx9qhb3PNjv7dXqEdJcD4JqenYgrV77sDaQjCURt",
  "key6": "nV7Xu9WbgUqG1GWSGE3GPtjwTUQBvA8qwRUgnwQRdyXyWrt2fdK8vviw6tw5MEWGdRRvffdQPCKbFg1soyANSii",
  "key7": "4ZyJ3DDrCzfKuuPxq1Zc3LYvAdHWpB7JdcBRihiU59YfKnZ2ht34bTbxLPPV9qRe7YyVc8i6nrqKXXnLGqj7PsEJ",
  "key8": "3dARRNYgAVZwPgwrM4VfcnbXsLdsYd5wNGyYktFDFJNHhsbKmhN5igrRPywFpRLtfeE5vtP8pst7YTry6zGcg2nG",
  "key9": "RaKAhB5TSf8eD7wtCZcJE8nYpgqCUx2cNEsfz1hFyJyXXsfkxcqGuFT9MVWUkQs8hLDZ46aKN1FVVvNRqTEuW6g",
  "key10": "5EGonAsCjDf2riEVY9E2uq9L8Am4xwFkt1RBH7dAB7j2nLE3iHZjkm2xRVZXLNPAA3rtuFiFbW9i4S9pmsbkrqZb",
  "key11": "De42Fj2AbWVcVz4xNjZWZpHDvzcbAEwvxQyAhHn588btWqyAgMSU4XdSX721Q8DeTX7ADnSyuRHtngCMFCv7Fqc",
  "key12": "cE4ECyKSjw4bvc8ncfMxMuiDCS6MLsWoeEkWJWtXA6mMvNJiEZco13chn8a7tc9LkYRJacMn5AniP5c3EBK8yNf",
  "key13": "57taEhHtVwiaoSUVeVSCBmHa1RufiLijBFT6QVcGovFEwAJy1Qaaa4TgRePd2GqFhzimrw4LqeYy5kiSFviA6L2h",
  "key14": "5Lbk4Ft5BYXaKKTHRB9GJ5nMxJs4HXxSGa3Dd3cLn5pTCcuqGK9v28p4w2BfyexCtMjx8kE7BBPQ158mhVrU9HEK",
  "key15": "4rU9GCN9v95WNjZVr4tTVxDErJ6yehCkRnBvDHErCdQSCZA6CzkCU2g42heiPeRRNXKTxUtdWMCiby7r4CooT7kV",
  "key16": "2uV8WevwCdPwWArGMmfkgkid7A96aMSCfXpc9xtbgtkXRuab6VEGcvaNnP76q4a4AnxqwucNxG32ZK3oAPUiCY4q",
  "key17": "3UBCZ59ipTLrJjRh2BMeYMKJr8Hd9sjNj8VCx3K3FLAq4sUC1Y3347qsF5WHF2Lnfns1VZXdpakSY9vLcyde2QoM",
  "key18": "33WorU5PSaPA6mSbHPbP13ZSvLEhoP4nEG7HJs4CvHTakkyuDGGd9BwhysLn5vs4F22q2Qig13xhsZW3Beoz7smn",
  "key19": "TCeDKk5rZRqrwKSxHk8v7j8FnSbQAmLUdfq9j6J5WJEMyzTu4hXSiurmYMSWP2KShQzGeA3fZ556zbXcfKjutPP",
  "key20": "3Y1Q4ZYjsEYVHJzC1vpAmWDeutW6nq4tzVexw8u82mhREHth5cnQCJC34uBy7LL5smRftqozyfqpTL19qxbfgLNQ",
  "key21": "5uKGBKtywzq4oqJWEvJnwUNctMoN4ivHrjdR9uk8phzPVGDraFH8uxYrjJAZwWVjmaX75SKAgWm6BWqXyoQfrRg8",
  "key22": "2MjoDMHXfLzqoYu2XJqrEVYJiQKFEfBToFxxMAxCVyK9hXbNqxMF5HmpKmYHV1PtzTQey4kFtwwSc9W7mbc1y95x",
  "key23": "BrDocRLqETFuRadDgBwCmhdYCeiL5uLEUJDjpSKSAYkaBUEKmdJ4Dj3948KasbWNgar8dFPR6isFz6VSC1zwqYN",
  "key24": "4qRJMe7C8oqGQ4uw2gsEavd86YXbcL2XuJv4vRXERrEQpyfMwjqMWUYPxv52aLb46qFCyc2hyrKc9vE4sureevTU",
  "key25": "2q3k7wheNPdvcYQT6btJ7VrfHoWrGSWr3hDsUGwC9ScPZ5KuxktyWGAtdnyHP5br3oWnGPp1DmJHaTbi2cL43PkA",
  "key26": "2ChX4kAJWtzYEqEYc7Tb4eZGhektouqEHec8juAUEVdfjSyTaeADhJz4nYdwpd39x1GfvMTbphYn8jwzQVjiHzch"
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
