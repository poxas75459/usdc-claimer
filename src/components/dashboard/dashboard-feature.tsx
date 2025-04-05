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
    "5CCzmDcNXztXPnwf1VARpz8q5yPoiLTXgfMkPzAua4X4PqbE3sJxzLgoWbo4Rgvq9XhM25ujZvWVmeqxSMgRQjN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NhMbuGn6HmLydJUzd5RaeL8n7tiEtqkuJDcaHurAmjvRC9x3cPFCVWc6CBFWLiEnrmK5cneQEaa7edgzCpnVXom",
  "key1": "3oCPAUjCDQt9WAZVtdZbrTQtjkQFZWmu8XULDa3ZSrPMWaPt6UEyaCoeUqk7xDbR2i8YpAdaFLQMRsUuaHRSc371",
  "key2": "tfWhgVBXCxdJ5mscWt8PB734fekmAqc8o228vFxxVU4hWnZsSJ6Ehorfa4SWfr5HgyxkrBN7st26S3kL7vxe6Q1",
  "key3": "4zx8W36gRjRtdTBVySVdTzWTFmJMSUA2aURmK2p6Jf3RZqH68TnLDns62NbeJv8BRFR99xgML2U7cmJ8okxhsbz5",
  "key4": "5PM19XD1EDgCr97kjTSQEGjXzFV5zE9A5k4bzt9r2ZymQirh6WjrTdtDK3PLHTy5uMYYgyMoKkPbLP7tbGfSUwL2",
  "key5": "oyDQ3yRqHenVKUyCBe3eLD9nEzDTdx3PmMZ1JEoMhweZBJ4p6f9ucozfG1gbUZTCm7SkpPd7EwnPNNzU2otibDv",
  "key6": "4DFP9jtQ9SVCtYZshwpDHoZKT8sRFAt5VGED39hdDxsHUoZYKv6VDi9kNJSc69uZ85mhJCfAW5yGf1RTm8VYnGLq",
  "key7": "4D5fb4oAXAyrhPNFMTHHmBQVV96Bs6pUipDGCpVnTkfbroADH3VEgVEkT3JDyBvnDLbv64c1bBy6DrbQjFag1PJU",
  "key8": "5xjTayxkrTEnwhxLG2sREhW1mYf2cJG7ENXbJDxtV2c7CKr9CjtuFYe4rBUHjjTfxkvFQRGtnoMZphc1m5gakEa6",
  "key9": "364QyTqQXcNGCVUe3MBz3oTfjPCs5EHVkS1VjMPcQzuPJSZDMpMR19WWkKWJrZ1tppogEhDvG7sWx1pKXQeV8Tqc",
  "key10": "4bzhYEcQnv3pLsmerxCHoXsVa6TDA1a2kf6uzkTVt2rEFRuiUQswDVERbWR1cPgoC8fwoeCnNGXK6BvMGMSCpVVG",
  "key11": "5wvUK6LEgRDU3CDicQTcmnGuggWCZA3EDMf6d6BZpHH3rr3VkBANPABAgA26yCpmtwgndqVrg8presDaDjLk1cEu",
  "key12": "31PeCd8Vorfj5yeYMrz31hDZY2rZ3kA2MKoVQpwKTZkToGUgv5V72AtBZU7Rciqq2CSc5jyo9DY3gJdz4QMPShXf",
  "key13": "nXMDLXvVnBtZrUAds8feovS2E6aABFf4fywJ37qh3RtuB5yswwE4PiSveyxEWbJfQWisNqtnPJEuSSQaw7BWysg",
  "key14": "67ib94b9N36Qi6eUHVHp2mceXGKi3emFyeD7tQ4uN91ie56XdGqVk7TkdWtp13mzDcmHwAev4hvsYEEzFSduXC5J",
  "key15": "3phLmbfTLSb2i5kgLz5VbjvtU85vDexHs6hqCPvjJ8bNxeK9JdwtPNeE87Cp8uczqrxFTgbwdSkcQ7JchoWefo7",
  "key16": "5hkJSoHhnKaEwPzyvum5qssXdFCywVNhQCDHUnvmniDQ5L1mnpNNzjg4zrsqaQHghLajWE9bdXi3egFZP5sNAGWV",
  "key17": "3RVWaK3Q6nHtiNgNWmypHqswykzrdHRr3JZfYBmQoHokHfrUpDeUZQmnheKHrYvAxY7We3q5QrYz82dCejUnDSZw",
  "key18": "44jA5yq1g9KZ2pSTP9AhWhTZRvch4x3ubuqYt94jwiNgBjTSBdB5EXzqJjbJe9sz6bkHmJDjbLk7NLbZ9kevSm7v",
  "key19": "48PiB5hyFdBTr9H6x6BpqCDqDi9o4XziWr532Rp4hLrXfRdeJmFWPdNjTJqsuTU9wAKMnRWYsJC9HZHkBNg7EM4k",
  "key20": "5H96muZjKJEMepAy8rN9zbdwFhq43fUevUBwy6j6dfrvFgjNgq9pqmmrPTgY2ysriXeUE7a7jxw6nvUqEvnShw61",
  "key21": "4sit2pToH6VdRUZXT2KGY6nVue55K98L3ZTYChBhhpNMrwYeuJv9Ykx3oWuysEXfGVsFCSbK5KcKhBKWmVphgExx",
  "key22": "2q31Faxu9DfW2no7HWrCNSD8uKhEjx5NCAqy7YdtcWnMgbeDS8E9SZ6tRgZFgdihfCwxDnhmPNUggfxjhKGubi6E",
  "key23": "32qc6gMdqzgckAqA2G7t2AQqzz2zy86Cr1PyGLWmhVjEEDA9AzcCKAWbNkq5qf6ooWvUdwC1wweT2tRhGZxMfjcw",
  "key24": "28xegXPEhqTQjFnaH29vXpPQthyM4jYjKj1JZNAynVryPGTAWuTpZqoKzMLTapY3UiTbzu8dFWmtVYyLQyMcqxdv",
  "key25": "khEi53jX3Py69oTdS47CgbhBxYCxnc2iMsDUEm7p25adyR9Qwm49EMGkkwFAgcueGc1JgduXaM2gRzQcRU89kmS",
  "key26": "c2zcNcW6cnT1ZsR7tisFWzGrELWC9rdKfeouApckSmuK3Tr3kAvRR7oBpkjRf4xTa7gZXk3Y8LgEyMQL2LcdB31",
  "key27": "6LeyUSqRteswaqPpqAuainkciW7MpY2rR3wXzRHCeb5W1cDCf8GizRXocTvL8JGoLUvKnLdctV279mPNUMUDAwM",
  "key28": "BRCRr4FHzbANa6nsAbzQJpCVarS2Zf1qi4xDTopm5bMUbsSrgu71QhrQYTPhv2QKXyB4bNgQcCRvfVCxnkgjU6h",
  "key29": "62p4N2XiA7xvVFFYcvRePGQdPi6XKQT1T3KBeU496G6dWS4w6YEcZ8R9NeMrLfd1nnKR4gV3SMmynDcAVAXVGf2m",
  "key30": "46oHRdArR3ovTBnJ32iJqtpJLX4jBxGAVFLhkfzZmxZoei3kDQYYSdDvgRFJJZqXwgtatoczo9h1vYztp6Srbbdo",
  "key31": "5oXdNGQaDvJ1kiuxV516Eq1p5NL8bie2552F3LSVEV1Qz9GJP6BkRw1HTCCaS4RoFCzHC6n6WLUXLv7rwTM61uai",
  "key32": "639srBoJhxsV4fStvzRcn6MkLifYGRd9z8r5Rk2LU7WpjAGswH63eRbFp191gzA6CW4t42BpHvz6uWspMwfMyWrx",
  "key33": "2j2HsuYyiPPQo1JUx1NbWsmA7LYkvsHe1WppSWktRVxAtz6ERoFAs3wnByiP2MUPnFag5wBe3dhNNN3qM4r8LMJG",
  "key34": "4uGxamz5kdmXgybwFocfMLvSmEf3PxuBS7P83FpqymR94Kzu37aJp4zGyctYHz2esYyz4qNjeDREDUbTszhxr7wS",
  "key35": "3ehUE1fBTdvyB3WnxaxhBSDvy8WsrLYqxeJiw2L11fvhZwL8MqnCgkojVJJeHbXsgfMRwHhYHXiD8tvWACvwjxuJ",
  "key36": "5zJsw8hrH1RAykeFYMJGsnU7FRhVxvdBvQaEtuotcEF8AYD1xG5yqDEAS6qiE5D37vKCvqs494p8bJgUWRfdvow8",
  "key37": "61J3Zkg6iiSj6VnV2QyrHFPcEEDou5xPQX7FfYae3ZeFHvCNaJLiy9tjCWFCnivhrBU4jMW9jjbkXrZrTeHA8cmd",
  "key38": "3NPmR8nzBh3jGiU7mKDKymP4K9pMTGA4tv9kAGCgxZyE1XGwvkh1gPBtecADgQMYhUcEYUUdN98iK2z92MJGwyRn",
  "key39": "4ckinb3JfxU4i4mv94nPjubJBw79bpHAwGNMdNCQZD3ryYCCeLqDiNb9Jo6M3pLgxoT9Mj2BRb45aQG2rbzVHw5a",
  "key40": "5JqKcUjKh7FZEcCb3ytbEyJcwYAZnbEHzEeRVX2apnmDjKiW2LFfBJzwkvedCsuz4CQpSYJADc8xesDzmgr4jxmi",
  "key41": "3jFWt1T1aVCSWWKnYwXeRbKUoP1LegFbMnw8w48LREbtdWbKjczBfHMf2NKZnPzYauqn7yfA5yHDiC2CXrRKRTU8",
  "key42": "5L2w3ZNLazNqUj9tS5Cyqu5ngTztbnhZQvtzXPFNwuxfTFnJ8zemuvmkCXAdzyoc1iFCegNARfdBrqyf5vMQzhwR",
  "key43": "2ATqbddVyxH6RuWJ92ZASQFU9cMLY3pXi9CJsbwX5ymuWoBnfEo3N2WvLFHxUqDXztoJ6hZSjALw2TQfaXJ1wh6m",
  "key44": "5RSYEWT1hz1VoJ9V3Gwb9TRhxeeYEusY7taRVo18cERq99oeFUax3wfbFRGdWWtjtyVGDaYTVd8ohuJYVFmX1HZv",
  "key45": "4XBwvn74rXkGJKfNKHSLweGEZvYX3aTvducnqTPiQ8aytQXUZqxp7x8qE7sNv5N5zaocZsk6d1aLxpSfDjLD4ozC",
  "key46": "HXtfztMpB3rZkaWAckKN3gPTmjQV1tJotRUGF7jkAjUcrT87zrBxK8mCrmQxWBsPVz2yStkE52XhezUuraCEuFP",
  "key47": "3AmDUC4asUCGYX39M9iGWUNESmgxsq35bwm7XXBZRec8zMuPURRoJoBZhPHmVYJqbdctR3wA8xbvng85aHMyPXkd"
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
