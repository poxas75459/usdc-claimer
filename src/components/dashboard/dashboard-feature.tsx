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
    "38FrcxSbq8sSFFKjSTQYf2gf7zfkvk9r2Ybqkwa3dywN1Np51kTrXzfraBUSeeLZC6ftyy4pesmASYSqBrC2woTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFu7fjBowzEdkSbjio8YYvhDcXcCXETAbM5w7ToonWhpuiyko42ieKNvkgTiM3HnMggpYyiWYjJ8EMh1gFDGjL2",
  "key1": "28j4rMD94t5fd8ND45ZM5W8iX1zueTmMnxHMFH71zBGtNEBWa3EjjCeqDE8SBqHJsH8WAPhTV6tRNz9yg32Hxfsk",
  "key2": "4GsD6k5JSKjSrQ8VPfmNJUjMiiZfFmi5vHf7iuryj1TYNLagaouh8TAiDx6shHWvvvhAFNNkPsgcpuaKCG7dReNN",
  "key3": "3QwEDEpXLTsFM3tidiUz9LC8Fg3b6fsm17FXFgGpYuWUQwruBSYTVvQADfRWdRocT9Wa6v2FGiUJY3MVWaj8t7os",
  "key4": "2dBBrvmph3gvQX4jFcUnyJPoatnF7oXUrwB2LoUb3nXixFWSH5UofMErpYMwBBKELVXSg1QuLDFRA5eqMhTKfibg",
  "key5": "2aUAhcc9MyRLCh1tqjLvgL3iYUFNyJr7qagn35C5YXT39Q73ZToEujYgG9dE68MreFteFpZuwhym387bNKDqDg7G",
  "key6": "hom8DhwVuqZM3ioJ76dExZTSK6X4tZpV8KyMZY6qnNyV2bo1Fni5RdpdH2fGph2JAaqyFwi9amiL65EG6aunAjZ",
  "key7": "5wG1SKkwB9CShN5qRCjgif4LqeznECmf5Giu3sNsqKE6LPcaogz2V9hRgicYbA7E7EXUZxWwsDM9f3cZoct3qjX6",
  "key8": "41WNZivaju9jCf7avKnZ4LCNM3S4PyxB2uEJG5AiCDpW2fRg5AmV51yRrZi2V5AKX5vX2nusBWsnxtRBiGb7aR5R",
  "key9": "4qppdtBsQFmtAFs7Zq8bVmhV4dcWD24d2atL8RyMWLzwqUUvcDwvt44ryhREttkXcUePkLpB89q2jMH1nDKhcfPw",
  "key10": "5KoX26jVVwFjf8Zw9P3At3BswcBLir7XyjkzC1cAX9Q9UfxLdkCKU5exzq7Kf7KDDkqzGHUpHp1BU5qXcbuSMSSY",
  "key11": "5WobXB14pxWNHsPH8kkMNCVTfHRk9Tzku9gRhD7GJQMruNELx8hEukUmwWPUgYrSydTUWZtnG4hnDpsn4Hq287xx",
  "key12": "PUMC21rYLMhFwiumUbREk84uFd21dzGnpAsW3tWK8FFfXYG3tTfBfNB4ZDSxytHhvDpACW3md1nMAH7hsNnmvja",
  "key13": "VyspJEBuYnjEFkS1Nezm8CHWQYBZyaoXs98RUWnTPkq7Y6f4V3nGbDfn1nyULEb5V88i7AXZeS49qkrRCePFEyD",
  "key14": "4HQdfiyKanwTnEVNhXPKRSdt3yzs1Hj2mhnBYqqSkLFAr5DVHcaRMFSwjxATNppJygyMUya9wG5Rv3ib39SnSGHm",
  "key15": "5NRCc5WfZcN8jzQmh3fYo2BRSK4vkDEycEwXBLr3C3EFusGVKSi5orNqx4zhQYeZPq3BT4xx4d61NJhaihvHe9m5",
  "key16": "7XFj27dChv539bAjPhi49FazaC5EPrNhLosGkkZsi64HupdREkXQU33YQ1TyJDN9CF12yipLt3maPkch6MzYUbE",
  "key17": "mSLQBsLK5iK4iDugzf8UGKnQnL6qKjdsLJwzG3DRPviqYx1oK8F8FHzpvjNiFDFWivBujBXyFTwWa3U5b8TUrfx",
  "key18": "47iyfwckkE5PmV326EMMe6bZYxgnd5w2cZYsWpHpG5MpmiYk7Wrt3g5XuEqhVa3oKE4uHwA7QZAGezWjxpeuZUAk",
  "key19": "3iTf1zvQ3bjHoxJZN3ayo7tCtHTdg9yFKB4uTFfJSMqQa7s8LTZhbgD3AB2wzdEisFjcwzKjq8kmE2YTZXDEAfCH",
  "key20": "42zziAWr94AZ9BhSymuL9KzSjxHVPVuejy54AoH83aFaishMyF2AkNcDnsnyWdpAbBTgAijJRvd2QXnf4SXA9T9Q",
  "key21": "4WCFTAxZcss19Ng1MPtsd98zfoABFr4zHkJ1eJsYzDAdFW13spPzMrramrTyspfzNtRfcN9eUUdRP1bhug1nkeSq",
  "key22": "4Eq6XuVagdsm7GJdiFL9sr1993o64GHvRPSNrXMmeMfZh8v2g8mS7CY6i3zQ6D8Xvw8ZxvyMFieDsXbnTVzotWGL",
  "key23": "3tGnMpKgPXpoHCaXVSvcQiKf5yk7HtSKYMonq5cHfvjvGdv2CrYhkbmCDBAJ4QpsZ1j2Sf9i8kzafCzqTe892ebh",
  "key24": "4BfsxudtF54uJd9Ds6KRMkPtn8xG5dtLsGdPJxeUMw5XTix1NKhscdTgiS84ocPe4qY1F2ShTJuJsaanSzEPC3X",
  "key25": "fKxrCT5hHt4bs2z1PX7o2fhrx4SDHuQDmHpinSkMw4TjqrhPhzLZUjSDReLPMCrXm79K3wtS1sCVhXJrAyUhf1j",
  "key26": "2SdFsTW7zocV1g2T4VC1iHnKRoMBVo6FX1mcrUhLwmu7NUqwLzjMRvN2P5LWinA1xrd2ZLLw2XjJPHoejZAGGdXF",
  "key27": "WJXpunChp6nvaXFwpoZioHEM5fhCRjEDEcxUPA5jKyVePVCAxytWHjQxjEHNsyBc2GjSBRjfLXNWDpGNnRBTjim",
  "key28": "4p15YQ3FyL3ZuzCVsKZmNVVwCVPWYfdpaeJsxX44ABbeQAigV3QDRKtnTiV6nAC9dxoXRfdCbPFi9THqbJZzCdgX",
  "key29": "3wUDESRoFA1csKyCquHx822LRpzzWiPRYsJ5DCipkYUSsZ8aTWqe4dypkzjdACEwbcyWAzGNYJRpB17mHwLtvfvQ",
  "key30": "23Pan37o666sPamrXVZ4uvViDxcNPMebaJMGF3LsorWuuQzPKahkFdczsuv4KQbLwfaHav9T7LQbco8MQ24fdhp7",
  "key31": "3YjndTMjiVfPHeiwyEHhknmtp1NWfehUv9wULTGbebS6kGGjykgNaYk1HYkghja4LvEqqtRVfUviGnmn8Af1JBXr",
  "key32": "3XwjXjuBPrh33iniichYwJTuDS3rrNEvXJgHLxGoEHqNnQDBb7AKQM6xhAxnJbhtfGyXYbY298ZyhgwRG8H3NimT",
  "key33": "4HhH5hsaBg59zntzqoHapZEzqK86pLdPRZviob3hweFMFyHgi8k6vC8T914dAjNtaYnnvV9nBwt7NpkdCoSNj7mN",
  "key34": "3gMic2rZ4kH4CoFWrGy5KSgLuHFcE7ePRmkZkBWL3HMhzFDctMuKtY9x1dd7c5VjwsfCetafgWWmcNw4bJaVrwhT",
  "key35": "ZhKs6yinSdhN8ctASDuZNEbCzYrDxfSWyHktEh51GcTubAyb6jyhqHnafwmf7KKLMdNXpzujRjAQ8SPqKCu4zBM"
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
