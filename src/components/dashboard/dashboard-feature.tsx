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
    "5u3VFKJuqPBQrQPktADKpUyPuCi19nDQJksEurZjGXJmahMEuVKrhudmtePfKhLdW4v1bdviKRSc9htE8DXpDx3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vW5N5it8ZJEAJbu2Tkz7LjWQdGmwYeh6MbsurpMSbcvrukoEGCFa32KM13Hi3qMyLGiMxFnTqzwydVmcTRKJEGC",
  "key1": "2GoLvhgws2QicY7YBq71CbgsFW9acYMSov9zJxtoVvZt8nRjUv9PgZAnSdBY9fvi7ivraV8tHVPXj3QGQKYxRjCq",
  "key2": "EYskjoxHuAzJwQkkJb4FanMZQUKWomC6twDYy1mXNFTeN4PcXBhVFr7As5QMgyckQb5c8zn3DVbWFLyz9T654d6",
  "key3": "4AYXQc7suFhoY5izXjw2o76fwzT28xH5zBqaCCxTU3veDUzbd2Tmn2eQWjVgW5i9ziVvYgCYP1NeHKT1M5K9mokz",
  "key4": "2UyFrjuroexYbexpfuwiWmJPiiKxHPrcdiP29fKhoTQajJeCDCxJGTvQD8EF78DEDghqhTPRjnyh1eP2R9oxKYQg",
  "key5": "3GhCFysnCAuGDQ6LfgcY85J72uoR2oYYicDEYiBB76Wieot5NfXwbZrQqqZFtuCjb7t7HYZhasiMYQAdApDPPKqX",
  "key6": "5J71Hz9Ha738Cn7mycYeZDmxZt2RTWX1zaomrToW9UmMMGXTXSiR29HeF4bd4FNDPDxJMNWWhKnGkq6tPv7CGtND",
  "key7": "5xRzM9JpZ2by9fGhpVAfLaxLLY5Z3ZLX58LnUUgYseXAvhkLPWw9vhwovDaUUcqCKqEqnZTmJqZxFcdoACDjFS2y",
  "key8": "3TNedbBGreJ94UvfWifpn2MXNhAnzqMkHMt4ZayQuCU4LnR9cjguvKbEhfSatXNzsCp2iaP1dYd1pwSTdBURfSXo",
  "key9": "2Z6776J9yEmo2woYhJ7JhW9N5ssMxZ8R1kQyTkDiMqePV2bLSa4ZnphuwjjBk5yZZAKWcei5reHCBDZArnuoUGV7",
  "key10": "2BvrG1DjLXTGpqnWQG8jDyy8ix3uUpnaeEunM6SvH312V59oaiH8Li1TJbvidSMaqHYFfkNNGSdDdxke89gLjUSR",
  "key11": "XuV48fkxS5818NPHP9hvkWQWHrUVkXHDPz3FECjvZyscqeHycAcMNrK9yDFFTJJtP4VW2Y9cUt7dFNW4G9eFjKN",
  "key12": "4fZxVZ4xhEyNh8ingPGtZhW82y4Pw91f5L4ADp2gtz77tSRBBsf5GsehwTzec5UDkHZmPTv7kNjuQD2FfsFwabxg",
  "key13": "2EH4hFKxjpT78f6BCiaveeiHh3G536nf1GKmpjpxrDgVnY8DN7kaHmSArqNbMqeuhZVdgrEB3P4QSLbQjFTGRuUv",
  "key14": "2QH7JSpu5RYY156LVab5pgf3eaB6WtXsa7PAKBizr4Y3UNNJGEvJZbwR7CQThJKguZK45PGavzKACzG2PZnkmbTY",
  "key15": "5zhXCzL4qGf7m7o9g2r4aoNvb9wjkfUjEAU4E3NoJrCEVxWZuUAsWzqWztsfjqSN3tXp2k7ExKRBszL8roXgSq8Y",
  "key16": "2jhxgtf18kvUogUaUqb1sNtEDHMJAcqu2PzKp4CcfiU3tD8ikuWyaYzLpeMXCxit5oDPwhperWiY1bAgfgfidXfY",
  "key17": "2Zk1mthL714wv5hBubKBT7Uqbe7xyDMSUeLLareKF75LQQkLF6DfMyxiwfGbhLXbiKJxCwYLCRtjMuFQaj5Ws3jA",
  "key18": "5Nwje5W7aDphmpRUwVa44mTwYqrCz9ypuuREon6RxBvciwiPENzgiSvttj5XAP82iLAewVEJ2vRwKiuDgQtjKz3s",
  "key19": "3AGstwuQMwLGZLRF1h6oR6agHq1nehEKfeutbrY5tqsHjed5rgLNYBKW6E7mi9PEYro8D8XpVZF4vxX6e15oMuKk",
  "key20": "4aZC7dCuoLWVeoNxYcYxs5wpg1Y24RzCBjQZU39H55tqNQHpBjtWpQErjEQCmyaSu3rz8zcrbWk4c5cPUcvP52Y9",
  "key21": "EXTQ5QMuY1WioCYo9wNA5gswCxdDWat8Wdo2jCnJmXMZ8g9D4oG7AJN1gQg4Cf54B1MWZ95D9wjGaxo4zU6wrcj",
  "key22": "4F1hMiWabyCTbcvSCkaqWtTPZnvNUtzVGHzuQNEA8542rPYVeD3qsAEYTi5brAVYL38FfhMpVyoiZsPnqVUgZV9m",
  "key23": "31ss2Ex1x5FLpwiQsHEHgYp4W1eWWASHW6Taat5Ma6jcZ6Q3p38qZfWgvhnYNV9sEj7xhsEovtVhhm2XNEambQX4",
  "key24": "4YVWXQSK7yoeWu9v2Sz3Uimb34UqxveHZwpTNBUSSDzoWHovpLhFAc5DRmXVWGt2cQhpoZgsMPPPNmei8v3jGPwu",
  "key25": "5kLWXMbvV8fszJKAY9nUxBmWwgCvLVde38vfvn3J89rdGHZXmGdWYEqMfTasFZMhRJ1G8ht87QBRnY4eX5gDPyeK",
  "key26": "2TAiK4MmiH2vCQnTxbbZCyJVfUebUgFicCzEC1baFiAoEzSui2wuQ6YiLuhg45R7yQSzD38ALAK6vhGWNgAzLUG5",
  "key27": "4kRrTBFSyY4x1QJPBgrFTLz91DhpDXvDzwWCFSuon911R22st3HKS1RE5eWhvzyrBrzDyEEmjkH9AuTG1YBjhCqs",
  "key28": "wEQxz6qvQB7o55N2hmfpp9o8BCbhK1gjnMgmiNE5D756yz1EvsQY7YpsfqwHWTew23HHVNCqor9FD8ksMVBR7DF",
  "key29": "4bPkApygUqFJKSfTrKvceoLv13hVUiSjksfV1dPub78vto1zm9g1v1FW8iSyDgqYBFy2cbGJPHFHaxRLaV6rxKQs",
  "key30": "uz5ce5FAPfN2HP6gCqeZcW5ikSuqrvafzCvJK6VyQjY1qbBaWMBxfdH3x9iEuEV9hTVcnfczG196PXt46v3LEK9",
  "key31": "3rur1F9hTTWPK8bXqLDCMrPFCMLpqBKHoFr6Tx4v1euWjLoqwxPjeEPGMGYCP7ZcRdsCLPbdrXEtkDVWFYESKeXP",
  "key32": "46c8rMPmjhvmLz6RdvdpKyZJUv2dsE7Bv8XTWGox1UVs1SxmrYXG9dhTQ2txFxas2HkBbPGQgHjAQj7T92QpnjbD",
  "key33": "2VxGYiU3zFYC5efG9WFsAUL1j3w984JcY4TMjdmEn2nKgteTWhrYaCBqDoqbQSvm3QQL5s5BfZho9hcWzxyCDy32",
  "key34": "48nb9f93qA1UebQybvtDMGhdgk3GL8AgzvAYZAPuQn9TYScrGHNxBYTDTuq4SMfctJ7ptLhX5m5862r6D7WPF7qn",
  "key35": "C7bvTB4r6RH5mDMp5XCyuBf5EWNLN7MWdQ6kHZaZPt4ughq77zy2ZDUo9DvPw68ksxYG1w5i7Mw585CGVEcsGy4",
  "key36": "5cXoxu6xRm9VUu8S2foi6E5zsZAqsuGhAebuBJvcHese43GCh2eJ2asw1xz2EcdqdNa8gaFJ86tswyCKd7nX4vKe",
  "key37": "4rWuZdXBwnVHWCyjs4tkUE9DcoRLjKnySFMTevkZ68n5159xSpmZyHmUaFGZpgZaM9FWEeNWuhnUZa4sfSzzcxb9",
  "key38": "2iXFLUKJdUrnGyEjwsBDfCM5GKxGFHGStSZjZkwkKu7FwJur9anZBuZgvy5tGh9KbG8RDtVvxxeZ23mGbw5XwwDV",
  "key39": "2VZnyzMVCydopwerZBtDeRysNxBWov4MBuC3oGPs7MWLqykp5CtSUzcrrKcCDrah3w1sVgn2d9meZv5BN6ntUNLW",
  "key40": "83z92c6f9mZv8B4NP8qcnCzpiPaLJqUjkpE1fusaH1A6HPwDsgaNq7ptpyRdHmpJsJ9FrHdfms2e1gZJcsxJysZ",
  "key41": "4X2ziQoUMRUPvM1UYGc6VRDMfZyqYZU2oeoSNLiBbjeA4RbAFMBnGWNvRRBeHLsRR9xM3mQ5hJk3kCEhDzceHNRy",
  "key42": "4qMjmCvKaaWLVxzPsxfoQeog5gmLr66yLfzxE4vowYu6Zd2Mnx7D1hJUVnLRoBQ48bMmCRKuvcwnpBAW3cjcUojd",
  "key43": "5v7Kzy3m5BzVi8PxARL2mzW32sTLmRWJYNxm3fdbShcuuumYn5EgaXePvMfUWBCLA9YCJ5Drgj1Be2zD58cLqm55"
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
