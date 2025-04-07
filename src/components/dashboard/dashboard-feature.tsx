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
    "3dxh5Ryb1ni884jsegZfoWWR7ApaPEVx2qiH6bkabPh87jBQWmUL4XpsAXkRMNbbooAsfcxTLYNxiSMk3GrPn9dC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4vHyavFiwXSqPzWq1bWHCTzDnee6JDzBUNXhe51wF1vb9Rm6KeB3hf5EMAAk47zft2yyM6vrDsTradN8Zao27x",
  "key1": "5PV4C6PWDg2Hqt5GrncKDe9zq4TCPZ6VnXQMZ9pJMJ7BfovjC3rRTDmJ8iMNXMiWBZo24JKWS5aieymy6cM1tvvz",
  "key2": "5wFs4fRqDL6Qz5LHtDhAXtXAggkHxDSPT4EDT8SeVJqH7acyCNWpKXjmzR3WoTbRLGDorxwU8XAwmeFYKNe8YQuw",
  "key3": "56AP8uTx6tU3FLXm3GtNVoytN9NNEqzubg33PLfX91nqe2n99qQE7SEBiqKn27yttVwf7oyvS58ww3Y7XzsZj6kc",
  "key4": "3MGBuRPokPVUehXVPxmRbfp5BXZgogzTeve63e9X3xiMsvbBSsNQP5jqY8XMqwMhtqTfqHd5HSz85dtwguYgYZQn",
  "key5": "2xsN7abQ1qmD4Ajk8CoYtDttMEgGUfRdrdUTqiwJ42mAystyzbs6XogLMcYqQRJiTSSf4erjq47s26zQsKEE9oRQ",
  "key6": "3epYq84XUZu8BiZSrm12D5wRmtNBPvtoFV3PtfCnaN2pMEYjbTDiA5FX18sAQ4Xb5v8BM9Jbizsq7KPo5X4dGF7z",
  "key7": "27eTG7uytGeHGKCZTde1WczJCYHsT19Q7vLyZNpATF8fomKnzG7cUUcxKdvmuY4XEiKNzEMVBvDB3SdTmfxTCqTu",
  "key8": "5ydQmeu27FWQg1z5SB7PNf8WPWLrTivMesMoq2YTxxxSoxMqRD5Ke4EPH4XV7c3T2uSzxnRFiFxkjKUdBVdC4nij",
  "key9": "44VvmZ784JECTRXSQ8yMBZ56KUWAk3WmkWCAytQNbNYjhSiRSkUxUwcgXqJ4odQm7wQek5LofXjSAqCX1ZocHAgb",
  "key10": "oGJazythBgZ62qB78PG6Ndw63XS96U4GhfE3xnz2fpMMViqhtF5WrBeSfTR8f1CZoKZjuCBAbjwJwkooLAd1Qsv",
  "key11": "45yyBw2TSMrNhqPpo9zA15DDDdLtjVPrVzLiiD2hvj3DJ8ARbaepzNXD6WYV471Cm1DM54XvyUcQfrdsp5RNSyuA",
  "key12": "EvE3UYajn6YK34wEJYVYFgQCsU44RsrUkubxLJcvbkSp4wvfCGSZwPbMPiAHaLxTgWB3KgbS6bZ3ru2zqb8WYE3",
  "key13": "5JM5fp1EpTAcpxx7jrncQbYPW65jmTuvpedpJwgmR9f7iREYS1y6qgc6bBzEuzuAK5jVwqVHcToFMD4rmPg1Txrs",
  "key14": "4i8PV2k3Xd23H9hdJgv3mHPnM9AAewkYxmoDB5WEZu5RtS7jTosyECn7D2DgRMQBdZbUExiQHqGgAc8yza3dPCx",
  "key15": "345cZMk2rWsSVvr5KWQZMbTQaxA7GVAHwdPmzhA1QC5yUwefnykq3TFmTyuzJFFV3bkYuqBEwbXX7w8TA1dx2fUV",
  "key16": "BhrAnXH47hi9McjYruGPpuL4dDyz9jhtPaGViCWaGRZsjuTW2PeBYK6LCKRv47dJJVU128sLSbaU2B5NdfhEmag",
  "key17": "5ZWM56dSSs16fFnamY7C9nMWG5FSJBSPQ8jfApU1XuvswwBDz8TnGqRXtj7CRRtYmwYE8Cuw1yFSxTq96QwNtqTq",
  "key18": "2wa4LC4qdaCUy3C3t2baNNXs7GQnJoZm6SpsF2z77v9uyed2zfjiuqW9ozTd2qG1UmewjKhZArPk9cmQH628rqqB",
  "key19": "2WhTB1qvjcGfFocg3QFGvRWg5Uv5UJybnjsbZYWdrtaqujPYNe8mEAxhgdciWnhLG1QsYaWnJHWfsgqQwi5Q5BqA",
  "key20": "5xvZDFTf65P8nshLfT5rKSRhEam799Fnbvr96RJNv8WiZVxsQzpEzHseRMqrwkN1779mMcuapf3uLKDuReuYqDMw",
  "key21": "AsoTpssszXCUU14sWL52TGrVAAyxxxDKSyUrRsnSAoxv6n6H4JqQRZZMkPvywsWnmWNTtC9kmY2Gdy33AGGBZzK",
  "key22": "34CHgvibTo8FWNA5rcZfNfb7rqQyNitqPCU9CjRDc2rHKPGBpCGQzMPNJwAaUoT58UNMiHAF8Fdn6dpjpFdojGnq",
  "key23": "rvhgfeCvgHxPTGuSBhU4ou6zs9wdwYh4Qj7pEQzBGQy2vqyUdskogWE7mqVB41zDyLQsSckQChPJkssgMYmNAD2",
  "key24": "2ZSK2m99FNYBPg1sJ918WUJfwFckPkpNNpNNUFLprDksRAmn4aokNgNcNKpBof8JadgBTZNR5KzrjVUXy9zpvVkn",
  "key25": "2v4HXnZRQtsF4ctCy7kSt8QCC4rZgvHi96BHtciHicfdqDeVYk1A2brvLCBoHbocVCwg56zhdWcCaeVDBQDMuN81",
  "key26": "4PW7jVsWTQSmmCHKrKsd6pckC7wD7C1rFB8unL3MX1ovSJa3tfZdbzdogQ72WmhZ3rrmHwbbDckwiSXgVN4P4qAs"
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
