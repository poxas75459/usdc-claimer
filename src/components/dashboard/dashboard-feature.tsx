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
    "4VutM7bM4weuq8Rq6jEJdBettDxKrMQXo3Rm1TKqep3xts3es9NNtFrpt4v3mrw7Jyt7xPWvDeEKij9YaJAsUNzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qu8LXn1a8QvfptJ5v8wLddatVtUv2px96gJWSaBwtxfDVqzKbWZWXD3tqak2H5RkMWeSMFSziWt6CrCJmxeJrGy",
  "key1": "32fBE58gqb1WizUDXKeETSJsip5BkbHiM8P5niQnfwHDiDDJJdpEnMLdMPqdMf4Yf7A3UT9imxDdrKxCeGy2tq3j",
  "key2": "3e5cvBymt8X65wEe6VwinzjUeDgVw3KoFJT23za3aP1TLYjPRBD5oLk6RA4yWmgiDXsWGKDXLfeLqweMzNTw2TuN",
  "key3": "5Z91kyCmWHx9bVjQutj7spqtvMDCHoEPm4uGAKGFWW3Vwdg7qa5iMyXWKugYL9uMTXBZ8kGUzmyx4fbNHBVRtGh2",
  "key4": "4LKTKZeN7iZkA3vP2qKGxSw5menW5RUubBfi9Dn6io6px57ozWodYZnEKtgTWKp9PMYuUoekxqKAQ7nd2oCsWzJo",
  "key5": "1JXKnMDsyQocSf1vByMhfuYmhCn4kfM4YuqQtZ4bmw4DjU9dqJ8JkUt9R6aw9MPaRMQJeDMNirN93UtaeTz319g",
  "key6": "4rqpZeNRkktmZvFVfyCKXN4mZrMx7umPW4rwEB9W8eNSCP6kabn1NQYJ29qqDxUwXKjjVXNY4Ea8tjz1ZoZkVrLM",
  "key7": "377mdDs9GRaJK6bsbZK2HqBMwvEKvLFNGxibuZduEktaQ42Btooe29vj85PcPkFjzzuA4qsEGh6fFVZ3PSRAHdMu",
  "key8": "3zSCxJVShurYWDiqSpp36SaL2QvFQ9KQg82egAKtG8wCt8YkpS9e8b7JBUaa2zzSmizEnEbGxLYP3yKmCmDooKNy",
  "key9": "5jcTLsbGyitEBvdwcpneK3TUYqf5fcsa6vo8U3QNu42jUrQgzLDzQUpXJGoUu1HuTwDVLLEZzQY1ypzFKVdSvRAF",
  "key10": "435ULm4mWc4HrjFG5svFRHWGZf3NyFTsZ6f4VUHXriQRxHfifaZBBge3yig8BfXfudvV9NuymgGZphS81MfoV9vn",
  "key11": "Md9cLSKhsSPCjECNzhyH4c8soHiW3u95LQ7QPvErtpiCAvmBXUVDjcV4zvTM5QFMNVfFqp37zqsVonkXwF11co6",
  "key12": "2FqAAqjzPcuRo99ZWNkk9k1UHYypNQxsUg6voBQqtGNX9hFzuSc1bvoPCoNtvjXcLVy8tubu3uHStnTDoBPNJ5b4",
  "key13": "2Jysx1qYhgFDF8nh3z7RRoM8MERs3uAn3m8JGb9S6gk2ZkqHc6KnbJN7qNsQGMyFNcmVEC7M4UdXVQt8GwitTRAH",
  "key14": "52yQQjHT3LSrPiNqEQoBtJSYsoZnJ2dBt1F1TGDm11PYMdxpYxEMVW3JLbVXkq1y6HshdPj2WLwxd3R8ThFRhx2K",
  "key15": "31Ssw2VTGptghenLB7Z8twtAHvu61rBFRvcReEBJJS6VVUqjfd1QK6T1Su1cX2GRUY8zm1s3GGnJNgqbEyKUEZwR",
  "key16": "xXpGy4LHzzwGWwi1Jo9VSMPRDQ9msCoSJ78xAoFxzfv3G7D3S7ezpAVbEAQc2bdzXBw6mpxax1v3hpPLc6StngX",
  "key17": "37kySAhM6bL1AsbUoByZXgbQLFo1WjLyxSwcbPo79e9iKDnGhPGJcn9C82UyxPsb84erzrZXPmkxufTYtoHyoBQc",
  "key18": "61pG6o3EP9R1CkSkvkV9Hr92QSgnf93De4yxpwsbumLzmFiPkVWrBN2CULAdysJGtMXcMZczz2mB8irgRkvJ65gg",
  "key19": "2zmuAbaWs49ZoKF7nRQxeodDaRK3YUiQtmKBLSTirboniB5a53tbEvN1cGcPetLd5GjVaWk8s5EvkhmRC4aKnDfg",
  "key20": "5cJMiFqwT2ahyawRGY2QbkibRduKSfHZJU8qDxsvFtpcfN9vf4CxZdeRkuGwMAKZxoE5twCZzoEdNSFXyC915sS",
  "key21": "t1masLAZSrSV5Rv8ymo7pspwU22pv77bPdUb3z91uZNyQSdvgV8fu5sdWvLavHRfx7dutxiixjyF9zJMAUzmnd9",
  "key22": "zo2ahLXWQ4v4kA4asUNkV5m7JuyXSmybq12u47Loc3bTHJ4JMyXTPaE5KxJSwF8kKAN4sqiQmKKjJgX5sgqJgfx",
  "key23": "3eeJjY9EEewHYy5nrw5HY7Y5nukAe3jJ7WQJZHVVDKmFtTi9vQScEXm8fPTuVBercwPKuXPBMbqzxz3t6gyRQKez",
  "key24": "1XAktAmN2jsaLLoZPRwqPgHu2cEA5v432Bu868EecFT5LUp23bT2GHDB7jpEDQpjResn1vbKmaf5jJRxwuTTfKj",
  "key25": "vemhqZL6tD63duz5fSxK6jNjy6KrUqJ86i8cQwk2uuRQh7N5tV9yavpzCFyQmwiJ7sNysHDiQp9ARw7C6nUkQgo"
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
