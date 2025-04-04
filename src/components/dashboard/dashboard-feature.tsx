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
    "3GSd4kWzt3Ptn4d5Mx97GBAmL3xLygcraKGfzEV9fwPaF8RRxYAcMQboKWLLHS1iDp1AgtCqb4fZxKyEfWy866wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fP8BRFqRh24AyxkumREk9gRsxuuSfbvFcA2J5zzS1tcGj5a7gGZJieq4WvnX9yxxBkAv4Rb2vMzWkxhSeJGoqyH",
  "key1": "4CEq4KgW5KNyA1h8dnNu8m9sKoZAF3xWzDyUdNFvNGNKW1aqDRn3RmTJeny4SB2z648pT8cGbHP2BCFHS1e8bUfB",
  "key2": "2aafFEHrgZWNWfWU91XzF6che8Grfg7JmhYhdGHrf3AKJVX3jVEjN6ge1wSr5iYf9SS5ZXqjhAhAwd8jmV5BVp1R",
  "key3": "4wb8SLarNKG863EPxtaiSRcbqLJEvYjEsdzgJWBn71zX98jPdDTN95Adg3bZa9yx27Frt6MbBfRaZ59uVrtHnxmo",
  "key4": "37ePi9pTAk8Sa2c8rsf2x82DHKQBnBNvEhAGx9kM4EiRHVJJ2jmJ3hY5dxWQkco21dvxpRLE2XxEEN3tk9B5F45C",
  "key5": "3Ac7dTo4hzfuazZmMnj6PYBCqD5MdmeUqpqDbr5e1ykCa9D4LwH95vFqZQif4hjLwaAoBgUDySCgdYVviHBJH8ww",
  "key6": "2pHkUsAanFdEy4pRa5KkdDoWz3CtwftDN7vtSR53idv8aLQAaqVvhNiC53vxpcJPbFiyPxebcEajVP7RBUsf5RNz",
  "key7": "Nk3uQ3JxHRgyiDkDjFUVXRkxTs3DdrLqdo4QpiHyhawcmGmYroRqGQUZjMApTsGtBnqWiTCo6dmfd7zdeNoWca3",
  "key8": "4oxam1DVouGpRGXXrbWE4AadnVjNtGLa1xang33FzozonpjqG4XsndjLaLkZBWqU2orMJkjtmpdnZag5e2ZHYZHE",
  "key9": "4ycDGm9ABWQNbCJyuoFK9GWFdkhNGdtp7CRZp7Y3dqJVZFkwbcXQ87WDBVPjXkyhC1eMZQgo67qrRNMrKfGokwdR",
  "key10": "3JZ11vM8XKgk66LthJtLjAsX6CDSQekhNeitXaw9dBNWTBs3PpCNzgpha9e3ZAVoKZL2Vzihket3fmRZJ7WyQTQT",
  "key11": "h4vgvKUAQcnj16j3KdSUehu7jot26FZTWkLwEeAFBGzjt7vf4LA66AYHekQusGutLYn2kWJn1FX5SB9Y9sryL45",
  "key12": "4CP9Xscxv9JAJsQjzxcAcrGvnZEMLqRwmm7ezh763HirMaNfJwD2nTnL3B6dbK4Mf9ZKr47MXjvkYCffauzibqSn",
  "key13": "5XXtxpYtK14Fx6VCf9URRJ8kSwjfzy1oceXGq5otmCZk7Rc6HFhaYLbAsAjjmYY3pAg3fg1savKCJpaVXEfFTTZb",
  "key14": "36jcd2bQ4aDCc25jgkLBY7M8b9RwdDtdD4FUXupmhWNJAARSzPzqWBSGdHnVTvY97wFDKACEsyALcPkpWTWu1qzh",
  "key15": "268SdpvPXoAonjyDvHDKDzFpQanMbBpMfbK6KNoXpscwnnfVu4BvZcrsbPzhwepBFCmHicCLJmHDD28H6kzmMhGy",
  "key16": "2BHQUgHSUKUyf9js8uQNCQfdhFAX9McPfHPdVnXqqX58cpJd9T846kiuxd7ZJGKVQzhFXx6vvw4bot3beF5EeYiZ",
  "key17": "4LykpSwtfRQongRgwYRj8WVCrG34XZyMNuPGX6nNMFUZBYCLBfAQBce78nC688CvXbniXQUxwoKAwK2MaLEoUjsc",
  "key18": "5DsbovRoZmhAbXivTH1SEqqspbsDnRz4wZpbcKGkq4fp5otEqziJsXZoao64xgHz53qbHejTnw2Bf6jjdtxaXZgo",
  "key19": "TQN7sf9zvRQYT4ogi1y6d9btm7UUG59qpdok1nwyKQ5c4vpbwUroBu6tatfdb6fu8vnVGzbwjEq1mcsGaz2XFbr",
  "key20": "H41xBS93nC3WXGp3n9TZTj72og6KucFPbPUuvuxwSNxscYUZchjoKqyfDiP5H2Xgwew2LRE7dNLfLKu9QRfQsCz",
  "key21": "2Jf8xXpJkL23YrsMPD345vXzEa119vNj2GTeEsaXtaTFmBuU2T1rRcXS7DzUyy69UAHw1So3QH4RT7y6d7obzDDV",
  "key22": "5NWQwVwDQJkQBZuPAYVWByYZFsetNiWT2MRbvSyjjEcFDjw6K6TxFi4XWw99FCee7KEBnf6tMVT8wDBrkosFBeQo",
  "key23": "eHf4cipvpEvB8kD2tQBSJBvtxdMngpf1xj7hnfEYVh4DqWgqpPHhTUxSSetdWmPTTfvC7qsMNfrJ5uJdXAmhwdF",
  "key24": "2z2x4BATNaJcBP9KgYMWPTcFAvsVde2k1QgrrrxMccUoLCdHZehbMUeTsk8cPF8XLdh6BUAbsR5AtJHNFAoTzYz",
  "key25": "5ooTaWrbJhAtH57qobK3DheQ51NrF79uAy5mbruKa1CCPP46i46jjQtBSn4Dkm9rNgHhDKyZ9jvvuXjKtgQV3wj7",
  "key26": "56Z7YAic47c98tYFoSEXAvmRBq28NL53Wi8JRReX9Pjs4m7kAPQMMcXuhFjSesSRMgE3BLZKTT3P4Lu65HegWfBk",
  "key27": "5QwRCFYP6LWZ3AnAjtCQtP2dVyj3ZkoKXKYaKqSgWvnsGDzSsg6tjj1fHXWoang9WGiFf4mYnUrPdL82UUZVm63v",
  "key28": "4jPk1JBBJW99xwzwnvkUGnMQDeakfF2rnVpCidiPpuKiZx9fzXhAZaSvBR7umP1cDkgc28wRbUhoK4wZgxiFsf1J",
  "key29": "QqvZ4zDyUt1maemDdPDiYX89tdF1m86EngLVKCgCeCnWgCVtAaKYYt4KbW2mpDCgdCpnLqoWgqh5USTP4i2tk1W",
  "key30": "3rDo7QnDuZCj35NwYVA5Dsx8EkCtAiSsPASEZdNhnhn7sqHisQjH5o7R7ztcHKbASwrqcXLAN19jQp3BFt7a6GAs",
  "key31": "5XHvsmKja7T9e1DXQnHLsXTxQuLJi7LrLbBrHV2GnDP1yJHrtYTbRF5GkCewzTBBV5bqfqgqgawZLwm4EBoC8x7a",
  "key32": "55w9a6gYwbwLnwFcSV2q7dNCnw8ckn8Zk99gFWsGUgqYcQMg5uhfnYbpkB4xKyAqJYWpTPt33eizp76pKYkyoGzD",
  "key33": "2fpiyUQP8ucAExuDJeLCaMQmkw7gg8EDJmee1tRudsSD9UrE9BktgEhBhrKZX5Gz45aRBRwBenUft67ibMxVuK3G",
  "key34": "562Y2qmJ69SJvuA5SCEu55wstVfByRL3CaW7zKSeUhaUExBDxXHVqLGaCu4cXHrEN8CKawk6zaYx3tnfBnup5mdQ",
  "key35": "3N28vviuNC1PLr2vhfDrPL3u589ZcUJPQEtvvh1YQHBNzfbowPeDk8VUESMLMuJPf4C2SZeevFz7PiZRTFnbAQ8M",
  "key36": "4qW4r4Nc5C7KceQEBz9ad4M5SLCewjSJwSBmEoeSSmyd1eUXMvbjbDDXXTnLALPz6m8fLuhJVbzHxCAKYrKnGsxP",
  "key37": "3Uz8eXCamnMWN1p1NGVuszJRVgGzJkjintvNm1hVYDf6jnKswr8hgi8fhxbJ8cVSTYf3728UVWtQyQxCmds4vmhT",
  "key38": "5fgAnYSqc99RJKzBhLjJdY1bNp6vfj31XQu4gGf5hyazF93xgY64xHrkbvjmahLaU574LmsNQ8VEHpv439kYyPqT",
  "key39": "4jAjCRUW9m3LbK8e7bdud4764xunxLEMePGFcQT7LybukdcLGzbNt3cFTbEpfSRM1tN44JPyGw9vui2DoTQwSYpo",
  "key40": "2VUfdg5rAmNzqJ8SMUS1wnEhxHjFJ2gw1bQkGsvBpTY83BqLsskfpAVUw6BvR6aPtnGnC7kYjbcDyWqsUTUsyCXm",
  "key41": "k4Aqm6GxaHvT2MxAqkfjYvnuDLQVy95domkGz3H4vAYzga9RtFiRB81zdhoomhqDTRtCb63FUxUu79zpVshmUFQ",
  "key42": "eKMfgoQRKkV48BKj2Deri8JX5R9VuVbcbmrcarb5Rev4Yim4QRcAK5LFG7XKY3Br9SRjpX2DhUANVbSN8pJ5CgD"
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
