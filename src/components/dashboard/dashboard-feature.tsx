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
    "4iPbL9846za9oPdJtH5ijbrFmiqwox4T7WThLhm32f6xTK18oGSrn8h4k1ePmCMy3c65fi7cYHFY49ipU5FJiPiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ukaZ9ukU7Pz2nGASUNfk8TLYJHsFV6xsdd5ocjXPSB31z5UzffYgKXkgHPzqK3jx3XpgV5T8CvEbQ9ampV23p61",
  "key1": "TzSe2zTotyfC3ZZqgxFFVG9SFqhKnhcC8hRQjGG9S3u1HSWW9oi3tYprv7uwS46y2neShP2t5PHSTzFdvDibiPH",
  "key2": "4ujsZdVGFtXqxU25fj8zyBHmUVQxU9NZC7RphYrEh8zB3XrLUkctyV92yaSmJSgrsTQ2EZXKyeicKABV6SRPsn27",
  "key3": "5Cwgm7i2VXzhJTKUj4yVoxpSewdiXkZb891TEB5KF99t5VNAE4krVnEkj3FeJhURMXisM2UBRa4XeY4YZWTshgt6",
  "key4": "4UBso68yQPAuRHYDW6H8xzehag42cYXSWfBnputmmbK9wMaRWLfXc6SgoWx9ysNrA9EkNpNnZiHDx88XDSiPDN7",
  "key5": "AbJ77DkEvFXW1c6Sd4Lps4DR8WPKGtrec5Y3jnxtV8G8mry2Nq4Jvimm86agh5JLSAVAw4KDvA5tMqKaRsv7oaE",
  "key6": "4NoWGeYKSHk5gpB9imbMQTEBAx48STRrmRFdQwefKGhMRyASF2oXzhjBYJL587g2TS6C6W3A9GeQw4bUq8dahMWf",
  "key7": "4WiWSPmd3QHCHek8YPtBtVfZSGoguxCWvZSBHKL9uHapL86nRn5H3t1XxSncgu2UVy3GurwoHxpekyn59rFUZvQW",
  "key8": "3W9Bp1Aspr5nqrTid2DL45iwEf7omdyV5tTn8C61jMvvDSJw163BSMHBaG6LB4S4QGtjvDj2fBUHQkppWfo21CYT",
  "key9": "3qyR23E784JSaaKuRF1dd67GnJcHhj8Df7FaDDwF6nyKo4Drg1tdL4cy3jtJzb33DEN4wrRdsNZ3bkcjPGJgoaJH",
  "key10": "2iX9P3DW3BAa3eV4fNU6PKADx1doSrwbpZ1o341vMHbAd1q227QoBA94FixduQDpk2qG1yhj1hQsE6utnRvHoCnQ",
  "key11": "597pKgMdJUatpsfhUEVitng7i8Zu6gPxf5FZGLaNv7ZaMHuEtJnqTHx2rxtqx47kRfVeRnzNM9AbrENysrXdH7jy",
  "key12": "4kpGtsBchRdw2AGY6CY7xYBy789WmmNvbZPEgFFBvy5YgwqaevTPmHXXvg49qErGmkE8tZzGsq1rWqy5t1xiQb42",
  "key13": "5vZJiJvSZ9s94diR3xyA2i69EUrM72uarQqpqTmCKu3wQ6tUcJY7Bn8mzsjTzsEUxoPwhnDpfqqJLCad9qj1MAD2",
  "key14": "4WNz9dRVU1iKZyf891XKWN3FdSRcFu69N44XWwsJuHS94cpFaYetX3VqWuLvWs8aEAtGNkBDyDFBbv1LmPWTVSwj",
  "key15": "3aEWZYayt33BvYDAMTFp36sKzhBaHkfpyKt6tWDVxJAiVQXYKK2ZcpbTFWSkhB1iniDo6U4yPzPQeFvw7VddE5Nr",
  "key16": "5AtqtMhctBCx1S4HBabgCqswsf3aQQHioM3SjEnigchiRhTAwLNpGLt4MUKazngL2fLkAAhRbyafwrvvo1ScdvbW",
  "key17": "4otBRHSjmV4Fk9o4sqSmziAqGhFvGPaTErmk4RAHUwtKPknUn6UeZVVLoGSBX7icgQTpCHszzwWgLWkrRQNxSUAz",
  "key18": "4DgKLzvQXo5mgCruHpGDJKCxeCw1grpQmQLRx6iHbVHC4KrLA11Uw4WBfCV36bbm2PrKdQv5ygP91fx7nXa2EQ2t",
  "key19": "hU2Pu92VBmANnjov1Z4qhZSvsYoP4siwjMGTEDoUonnrrKGBB87ZZsmYcnPijtZoJ5MCek6fRbxaevNqdXwtTCU",
  "key20": "5BXcaaDfB423QaBst5e6MzsqCzMYpA7PBbJStmdjPZoYF9mbiVsTx8hCQ44Rs3vovFUkHaPUfxHjZtKtJinQJWSX",
  "key21": "5L5hN5My6Km6NA39kmg6T4sR2SpDSKkc5PFHgXEWZf5i5gbV19a1BTC1i4d2Vjfdq6ts1qDHBE3crhEBus1m2DV1",
  "key22": "3wX2baHq97JNLa5jem5ApzMPMxu4uuoQeW4FnnwFgxoFycsAeYPtoPUy8cCayabCFJzGLKmSH73Wuny4TfWgiA9V",
  "key23": "3VcdK62yFQJJEujLB9cA147NMxHsXdz4BykddCZMMNsrQ27KJTGXxPRALyX7UQNdMoApDxCBMnwm2QovJjjBGPLT",
  "key24": "5HBnjKuxHidrAknf2EmRj1NaCZGWLh3NNkZyuxWVwAcEChyg3wJK2GLvTbSYcnBbStFWmKYKzTKcToT1BW8JaopR",
  "key25": "464SLWeXgL63XWXRKyJyccKmPA6qLDGN5wTXrGS8C8E2DKdn5KtbkFkkZLhk5a57BT6TSkgGHqeqoFbgJnc2ig7L",
  "key26": "29nZeyBGH4kzwR6TSVdaJifSjTgRS7YGBxiijjQP4GAx7UjHoWKDwM8G8xqSVutNKukuyaK8CB5Cj7poKgGPJHaz"
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
