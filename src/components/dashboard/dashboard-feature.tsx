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
    "3hA1HkbQoHn9sYzy4WhTMwNKwhUrcBSUqodb1gJbLVRmLqiGjghrvqhU62QzbcbebUSoywXBVdqAvesMBwK6QABC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aHbRTg3bQVk8cXw8eYf9pkPgQXQpNGagm9CSENZyoqhWAKkaMaJYKQTVpgxPcp7sb7zVE2cSGR6QEjjAkDWPR9D",
  "key1": "4aikZg9YLQYDR2rxia4yEFQ6cUbfc3KHh3RF8uA1AEQ3XK8AzsxAA6ctLabDu43nZKfmvmtkgqtwqrfZoiA2Pa8K",
  "key2": "2b3gNtY8r2PeABEKZ2XyfV2GhkWBTzwMLPu1Bhcfspp5y4Xdv8vGu9wpL8fhtRokhKcJDU7m8yGaZsniPnwMDDkN",
  "key3": "3xvAf95YCYMPANXKifPJHrpJPZWvgDrbjzuqXRkqLsuQyAXypmBzUCu9aPwVix9x3VwcekDMaCXjdW56MrsnDGEb",
  "key4": "5nFXdcpCP6RuV5CqodvYiYfoy4ogMZmpd1JGzwZwHYABuGswYAbQP8Di81PWn2g2wnXpRrVwZJooWp98cuasQVNx",
  "key5": "497Ng9v9jztqwp5Zqd5ECdWQosESywan9Cp9JHTJG68cNCFZRuXLWVowRa1WQdZa9jgq8iPYEJU25XiG61FGbny1",
  "key6": "5M9E3kuNf6KSqfbT5ZQmhXAqPkqJWAHEwNcUWjBcKjRqkEsJkxf7dxn8VGUmJiNPEMhMDZwkRhZpJFWhGiPQNtMc",
  "key7": "3j7EW6LhBn7De5fiiZm73jHyS2UY48aJmDCqjpQkMnHtWHHjXyFVmWMTbwbXvTjpEfuCVYkNDRgvrq9jq3j6Stka",
  "key8": "3cVjbYjTv7QcgXarn3G57NS4BaHCYqoUEBR7WkKad5uciGwki1Uy9vxt5i4MVyRvQ9sxkAYa5HEeUnY671wy3eeV",
  "key9": "xyuz2tDXbMN5nZsViuJZ1rdV9vowuu3y1T6Vn49Pd7wAG3X2TQhKeaGvyCqXSasgWxJA5ZZs67gd3VbfptoZBXA",
  "key10": "3SBKUUThSqVjnJhHMRfzoLNFyaqzFeZVtMFZzXEna3rTNmTKNaqovw14qTP8ZNovoKMXwScz5euNt5tQKCfXW7Un",
  "key11": "yEoTWtzZK3cVVtb6iuPKW7BKBK4EWg91HXUmg84n2v8T9F8qson8qwEz3wHQLu7cirsU27UAGi6b3zqQ3TR3Zen",
  "key12": "3uQTxVo5w1gLhNutej7pM932rhcLtM9FX7W76Gzycq7dnR2V2Jn53nxAs8AMSxdYK1Ak9sYb91xYTArtNfapFyJH",
  "key13": "2zF1Vo6iXQ4MMQjxja6Rn6jShh5TxkvFjJEVgijhYKTeQncyB1g7j75e3CGjjyfF7cUX8yaaDJgdC3hzA7bS5FmT",
  "key14": "4XajwVoTANMnVH6dTThkwWMGxUiZVUdjcxv2DfmjJhDAukydoHowCvErXocidV1ckVDnCEFta9AimdHSiZ3XSXDt",
  "key15": "njGYQq8w5b7YHWG5Cp7UvK2E6qirS61PKxGhqMopSP6thXxH4XinNLx3CRWrBx8d5cCNzAkpvug35xdyDXhY7Yp",
  "key16": "3XHjs2rvvVENZXr4Afkwn5JxWHnRsZBgwLkjEK2EZivqzi11BpmTmxmxh3ff8C3MmYJ96fCAhqEtykN9XQS8RKXX",
  "key17": "5qh8jMpnGQmaGp8SdpfvvXZcmGJDWUN8G5WiT9cyzHJuGPTKxgye6u8iEYbE7VGCmkTMYv9URwSt6gF9ATCdSmya",
  "key18": "2Yh5237SkpMZTmZp7ocY9U8YUV4xq1gomdpqLAJL8qnqhEqxwAtyS3yqQWmWxEqaWpxh3ewzpzrG2iN9RHn2YJNA",
  "key19": "3wEQKwDL5n6BcV3sdxzCtw4cLdYphnAFeQ5LqaoxNtLpKDKpqULDFjSVjbUbP6gZdAxoiYqvwBT5WR3RkMS9sJzH",
  "key20": "5n3VHt2dc66QcKs5oNJY5DP4LzMA77PZvdU3Ujn71ADtkxPPLEny3d8b4dwBmX1AaTCe69CrqGfSgaxzVCfZfViu",
  "key21": "2ymkqNsjiancmtXnAUriXjPdgXMrJPqYz5hTtb57aR3xPPgQ6LZVmaog7KDsucAiKcE3hoBcPifenGFVEz8EX2PL",
  "key22": "3eVKrX6n8qJKb1BdhuDnaom6qwmb9uF24E97Y9Qz8Qpi42ryTbtQeS5bJejrAyJpEnA9p7GC1DKVSyc3J6LpARNL",
  "key23": "2MKLmPzaSUMXFsv77RnihaefDZoQFYm27LQnUd2FNWGG7a1bSjFrRtvS6rAhvTg6NzckRdDQyJ1HEgY1mcaktDfs",
  "key24": "QpmuLmuC6fmXUBRevHgiNii1peodFrHDux6Qn7BJodGWg3Z5oDGcArhmxYFf6RmrK9R5C9qUfSHdJNiStrPfgF1",
  "key25": "5fLZXTn4dce2jqSjezJvnyno6rTkUyaeaFxG3B5F15dNSmTSt1YT3sn1z1UdNE99udBVbc2YSzzB5Ei3aJi8BUnN",
  "key26": "2RVCup7paBJZbQXSsWYDpqYYLTp3DMHGddP5gWYEoNMcZqmBvwy821nTzsUZRgQqYzgeHGTNn2Rdrhy4K7FTXh3k",
  "key27": "3VsSSqB7cWHKgA7sY9a3qabFRLBEavStHHuSGKH7gSmQD7aYXiKYfLSG55xKVjFN8FhuuUi83uPkg8tozwg45KFj",
  "key28": "3yhbGrSDcZPXdVvAqbwjcy1dyEJuJ4wbuPMcwwWyVFvYQU6yPPaW81yvkqYeYpm3SwjPKeNx4ibgx58R4hne4unY",
  "key29": "5mTwvn6redMDmzrQxkxDN7ta8dA9Nb1sGYWfEtjakVCheSmDBuMy7LqJ8ESWQyakviiK8eK2rHEqQM718ksjmEsU",
  "key30": "2JW72Y1HZ9pZnGB3Awe4djhgz7hvUdsexU5hvJhJBDXK2oq6a9cY3uetyebwRaN7fVK4MrcN27UzRt1cdRMKL3sj",
  "key31": "3bR4Jjq9KNMZtEk18V6VjEswDKsrT8VW5W11eVKPBRWcLxaRXdqvtLHTunYFwFGL9FWP4vuBus1jguUMC1bqSYig",
  "key32": "2pH65PqkZybUuxa2irsBXMwEjifxZwqFJdkdV23MmitNNFZPd6RAFB1zFBTZCTVzdM72xhqdRyuREWed8asEf7eN",
  "key33": "4nVBkmtxTqTR5AuhdeE8wJQv9WKuwLgceTco7PecX1aGVK8aaG8Fy2rhhncMUjJFD1zPGE99L1ZNppKxpeNeGsqC",
  "key34": "3mbDzYut9zVB6WrypEmpSTBFnix2z759eYC58iiHiSPjzgYrZGPwPXgCWeGHN8dskr6fKM3Vj1vT49NJogcq5Mru",
  "key35": "W6uTFrgiqiFqQ5JwF7Upp38nuaHkM4ZFCvyB6ULb3Jth8XcXzncf6iC5ZiW4JAfXxhimwGKRDUJzNY2c7dCDcJQ",
  "key36": "5KbEaeZRbM1cFEronUAQ4LMoN7GA9sWJeqr1yaJsyJENeUf1TeyZdQnqKkUGAWreQZt8UJfoK5ZTb1umijM4HvDM",
  "key37": "2ugqJZ975kErvJ11UCLfuJYF1be13BVjECCQ5eZmHRLqJSZADNxYuCBa5fp7zDGChqiEMAzJRJ6a3qtZAfNbjjs4",
  "key38": "65b9AubJ7fQ3HnoPjvEPzoanNKK3FLe8cyRASw8CrMSY2iAv9UCsQnogRsf1kZjs7f2MH9dBCha1Z9Kp5ZomPFjL",
  "key39": "2M4zoY3otcPvcHiDEma2PebAR36i2Hn7DFZwvUmijBWAbbzM4Y1saGpuDXRLBvijtSnjzi3iJ54WJ1DcCfng7xaA",
  "key40": "3CVFjbM6MQGvq1EEo1zwhQbGcGYe8PkgHoye2KGyHSXQzDYPsVhhNRUfKu7sn2u6QnbNfX7TnhrueM2KhanxWZaK",
  "key41": "2uPh1gXjsMBemGdYtWBQbTn7ZULEExAn452W5ZPHywMgK1WmnYkVzQsCSwGcFA1V5QpKrumkNx4wRaL1dL6AmgwE",
  "key42": "wvSgB3mEx7Yz4YtfHxKkaThZMDdfEZxKpENfFFwj2KU4HjSzMRaCMnk6SmX2vcmiRtFtY9NSCeYWCRacrwkT2Mg",
  "key43": "5rbcJUkpEzZ5b7HSWsYDU78VkmEbFmmHdEJVfXhu9a27Ec43Xi1fb2SU1sJsNagbMTqCW9SbbkLiyHWuW9XG2XqU"
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
