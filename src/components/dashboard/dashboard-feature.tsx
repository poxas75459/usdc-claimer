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
    "129HBZKZJcav7sxTpSEiYZm5UDbsACGyfXNiEeyQ7waJQ7nMxXcb3jDWxHdy4TNazRjaUw2eW5ga2s4mzVfFR5EX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wbcG9ezZACeFPwvteUtsNXNLgkd8s7XEzTjsfN23jRzXD1EtmKLGNTcn71UxzghF8EyjLhrHUXWpJQfZXxtnyDj",
  "key1": "q2UEN5BnzfR49WyRZWEpZcU2pP6djsaX16VhGoEHAqpJabf6PGtUGaQUZXowQntJ17QzoM5yhjP4c59UwGzH39Z",
  "key2": "26H6xqnoqs7qGuxAaE7zB42sEXVHYZyvrXamWYBVtwdHMuxq1QakuXbEZ2S7d4BhpMcFUFPKZeqErajqPt7WHP9V",
  "key3": "4gdEs9jLWs5EycTSX38XcpdZuP8cXMWJ9KtPrH6347HhveBGiivHW3jkk7TR9fiJCV4pzCapZcT4RSYodDX4NMTa",
  "key4": "NnBSfVj2vUq1ayvMtSX9rrCvXijg1T567VxLFm8g61VE33vNqHRbURUrKKnWxy8s8fga3dQgzwHk3KA2bnr4X95",
  "key5": "3cRVPxHmJQRKP4xzvJkg8qrpK4JfrQJs8XhUDgTLvc2SPzsJY5cfR6orP9htPfUjn87ibVhR8ziGm48bziKj4Xvs",
  "key6": "42CcTxX592oo1wwJWhGLDcD1zHU7gvCoxUFoRg5Y4rr53r46c2Cz5CPJeJnwtyuCwy4R2Mmdc9MsfcunWSXWrR7u",
  "key7": "5KTLd5fYpbXZTnV9TgBCPrdR6qsudEF9sgFCwpCqpziyDEKNtbexNLVhDkLw5WSqRZ2SbEqHL5pXitRyhin42ioN",
  "key8": "2GFSGkoiGSBMsP63dN4KSEB7V5CKFFKLsxfbbGQ6rSo9feKwjt83DYtWWfYYVgVCvY2EYDhCuJtWRBWKek7F9roz",
  "key9": "4eAF5qrPQxqUhfE4mFkjRajBD2kLJgBN8aqHPc7BXu5RqMM9ach4pa5uWBd6MgCprPXKh82LMhKcytBzavwcxFjx",
  "key10": "35oHbhFRnNQVWjc6SMouJom1zzhG18mPXeqQKLFNKkFYdhy7PSYbujsqf3FaTt7gBApUm3PYVpBTHu4tZEFdxF5H",
  "key11": "2BR3AQcn7pXseAKakRSML7Tm5bu8Vuxi3oocbL4tdQMFLUFHsB2Pbiw4dLE3bhBPyDJRoizgywVFY8mFwiWREGKR",
  "key12": "2v75kUkWjsnpdAHnnxeYF375jY9BsSbsZNsvyhHCoqWKP1LAFrNXY4zdUy2qGg4dHo8JsznWQ2GAxxZVyx1scwvk",
  "key13": "2Z7urxQEybs64V1sxnVrXdpT2avz2QXA6wcJeJEi6DBg4kgzwwE76VBvLrVenfh2ULDsvettpmrY6tDEwgN4Vk7U",
  "key14": "E5GFGoUWy5sWxe95b2RwNk7FzdQizKQEwdGF4KBrWxgk2uiPRhLazVtCmJniioJDG5fZ7gikj6FeGGWhvtyvoPZ",
  "key15": "4m8wTUWWHTMVY8i8PaadPEq87iex3j5sJhabd4X18bxRwBNMfM76GXfJpiTubVjgwtKJymKREz9nzoh5gmZwCXKA",
  "key16": "2wECim6QRjQP52h7AfC6YWp2AveWnQxAdxXfVmsAqsWjBkNkKXv838gVwpnUbXuuScwjvAzeavSBsjSq5pZNTZij",
  "key17": "4bBqvbFAoH5zGG2ohZy8G4mTRtvjUuFJncEtiFQ4MfDacJnVzZ5WkVW1H3kBSKqVmXhDVBV7Kmw3jfPM79vVD2b8",
  "key18": "3AHLDFTocojRwUXP4JXRJjaLQiYnVrb7EWwADyDCAe6mDY4WNfvsFuay2ZnbpbohPZjv159hDM9s4QxV86YYkUb7",
  "key19": "2ErqLKuFKHsNUkPHCojiKU69kC3WCLhBwQTKgvZU9sv5kP3teyBx8BDtGjTMnaCG55jBK3ZoN69h1n419aTrySdE",
  "key20": "HQDbk8CFN1Yz42M3ifqUxATFWmyj1N34gnmtdKcpjta8FLeguPuPacuTrueEjtBcM5LrNxhe5HKnaTpSHbjQP23",
  "key21": "9z1qQy9Kp88zQPspGUhnNye5PafWAs3hU2CUN7jvTUxZfUAcmjvgixVA4xT3qn5MopTkvnKf2vRPwrNGn9itKGY",
  "key22": "5Gyhq6EtTECidbJwKVRRNpDKAxYDedGjLbRgHwUZ3aGgHDzsnaQpw5txofUsSvUrUK824XCXdoqkPXCeTAD69NqH",
  "key23": "2pCSuWQpaHGJewngbCysXsCGj3wzWEfapmUGsUCcKVtTj3ZwPQVk6dXWRFXU6qi9GZbkzepzkXJjYH7eiUacto5V",
  "key24": "665wuVbguA2WxvDEC3XFeHTMf43nyybsYfd8TaWpb14fYbQFjJrnMr7KZ5FHxGNmxrtHqcjdy1VHzfxcyB8GbFLv",
  "key25": "55GYiqYL5yzxmS4tt6pT2TaoBfvx6AJNSH8TBNffVyEos1YYU4NPZYxifZ124HDSbDTi8qucW57BHa42iifRnoud",
  "key26": "2X1w24EeLV9hoHnH23RuXSNGN17askBdvtfD86KLETk5VNcZnr4a1dcDLYrZZybZspMgN9ds6XrT9uXdAqUfcXX7",
  "key27": "3VagXLsbvDGAfF2zGrwYDGEct9WxYA9qzRpSFTncFtaehRZSbZNUGhkK2KyRHoke1D2nTNUadhrHVBu73Mz8bEE4",
  "key28": "QNduu3R4SgtZ6htCpt8TvKS1oBJ5TPUubq7fwLCtuD963GYFHDiPwBs6Emmng5MQDaRRH5ABai8TPKLyoN73SjC",
  "key29": "NVgwuKnzpJd8h6oapmNTr5TVNiFSrAuSv7cmHMYMGfw1Eqhkknwo8zeE2L2ugaCBqp1AeMVfDbA838m9L1WMrZv",
  "key30": "2ouNytrsox955iLcsjThcP8HfBadBXzNuSFJS9tqNet8GVAu6yAazBbndeTE6yoCNYkXAa7UAJMeJRtPXYccWQVr",
  "key31": "3Tn2DDLo8Vr4PRXyvCD7tknXM5wyYxRsmx5g9WAj7MV5D2vYr5Ldn8rKGbYQd1CQWRckHie7po9Pjz6mTo8xg9hf",
  "key32": "5Vn219bMZo6xErxF3Jx4DEU1HcStCYc68DbuyTcfmwJ8C3fTwKRDwtcvWeCQTD5TjuvN8LSpULwjLyCij1TcDpbA",
  "key33": "5tcLCzQhs9wN7UWqQSq7ikuMiE97R9rFokbTgHqVt3hydTJ3icLjzd51Lxrehtt3MHtJb3wyHykN762rZWZ2Aogy",
  "key34": "2hPA5qNKTazPHLANQrYpzipQw1S2c4D1aNgosA9RucWx7SPfY97UiPsmYJJZWQxmhihggeS3q8gE3ivP9R7gHpCe",
  "key35": "3PYzzP4YRycbLbokDHC7ep4MsmcnpmACKRLrbgUdikdrPGrPoUhgUC3U9yVrf1jixTLqv4cS2az8QW6hmxxqzK18",
  "key36": "3syuXrLcnWDa4VDCXLBKxmmMiV56uCsjiJAfVNUt6b5gH8WgidncrKdhasgmzY31wZVcuQ9eHLHRkrRZ1rP38YAT",
  "key37": "3xs9ow3RyXSXKfpwQv3WA8z6LGPKNmMR1XQTgv3D6ezs3FRpm56ntyHnioUTzSTEH2mjNYu2CN6WaG6fkk9okY3o",
  "key38": "iYW8sKVH3wSkMod3iYeFTvFDByxguwN63nXWz4Atx7PrcNf4aHi7Cyq4m7hicG8Tj9vTDRSev5VtPZvmqFpVPoh"
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
