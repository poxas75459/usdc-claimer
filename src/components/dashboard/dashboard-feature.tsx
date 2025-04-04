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
    "46w2QsRx6UaWf9uc6yMTs3QR3uXAQhdVaDmf4zsEZoVidzyCGnGbQrqtuYcTiBK9qvdTGUjf4XRvjZxAyFGP8dr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o6DzdXAcGcXvGAz1g9yNApQcEjqJYHhmUJuC74Ya3FaKktqWg1rLW5cMW3PEfXoaRNPUAxr9g2jiSxrBorZAdE4",
  "key1": "4fqdWrQwSExwvyKtC1sfPrzMs5xsVCE859KYpWaQavj19hpjbL4TS7KqLSFcLMv3C5PhzwRMbaqxkfoGgp8hdscW",
  "key2": "2Ky4Sr9tRFCUXoktPp2sxcwwxw86JQyD7iuvr1aTqPgaaGmBcyde3NVEvu3ER4rJUNLKYeDm6yYZBLDX7RhfRmoN",
  "key3": "51Ej16oqbbtxwqmyLzYCJu9jsfGDndDZrpv964uv9ma5uArj62RgecJx9vqoLoYMh1vyVidy5ffU2qS4P9drMwp2",
  "key4": "2ur6yBj2x8bgphwPB9i9f8bd5dvnLmKqMi3XyjrYxsYnC4rMczgPYeU5ydd3T3bG6ycMnZTVYHX7ckJ3TLzWaUD4",
  "key5": "22RvNAGmUX2fuGwMEeiePho1JhfqUm88B9HBJJYJia5biRSmz9p5j8oUUfiPvHTsSiWDvNELWccjJ8VkURtVSPDQ",
  "key6": "5WpudevKdWbdcNZaoATAKwxX3CNyfibrQ25nMLJ5CFrKUKV1xpY6A1j3FZ5cFCdi4qPfLMQCtpNWxgoVcZR5eH3q",
  "key7": "4GSGEzcjXZdgprgWe395oe1g2xHBuRJVAMvmJdkhC7h3TNMaWv9WPwVBosdoc98Avm6bx2FmZ5RuxjmsR3NMjokw",
  "key8": "3TcadigbXU6p9jHZjphGbUZnCbCkiLnDshj1VLFKYGs3VNqM39Cdr91WyaDYQbGCwWp9iSmBMxPvwoLFszZsXpwb",
  "key9": "5vBA9xHxDxEXLaAXVyG65D9sauDMt6tSmZDfzDBYCFCKiRK4c1s1aBbYGKSDthWLHBaqDtF76TQHxohufAfLciAJ",
  "key10": "Kw5qHDmrHmcTqBbncAp66HnNmo2HBnsbhjUADaqTjEQjXAgBG7uzd1jtHt3pPkr4ZHjeqXWiAhNWwx8YkBB5QNu",
  "key11": "3PVQ7rkiPiU44Nqm2s3EgrgTeTSeDYZcs7vsraggEMV1CNma3JtCqbiZVpXzeme2rQv8bW3jBWeupgaVvENax8Lk",
  "key12": "xJVZYmu1jALUFxuNyJhT4dqrF77jNs115BjE8aeQoUbt8ckCzgPP3xMgW4TaHNnnZDiVCKXizWoLkRoMM2PNLXx",
  "key13": "2DmfmzAg9rgKcpkF23btUXmyP4bCfsJS4nzv81ePrfcH7vMucXgxA1oXVdFBW4TFhJtfom4g2PyGE1GQLvTunM7k",
  "key14": "4M1ZtDqA2uLQarzez5gDvWXbT9sdEjaWSeKQQf4DwwSrzp3ALfnEPByd8sBJ5VxXLEwakhny2EpPKP3jb62M3tqt",
  "key15": "61UYvmEzhGbHwePA9ZrXCKY8oovNPb9Bynras26vqB8oWuHujiJntaPKwjvHF6sCCVuQeehRdAuiH5xjmD2Dthe8",
  "key16": "3hugGKGT2dx4rurf6GF3qKDi6eFtyzR1VHT1THrGQ6MDLvvfLZPoFEtb4ehVrXaKmCzE8P6c1TnaJUUXyfMviGaL",
  "key17": "5vs87xLE5mXVesvQqu5sf89h2m9jWMumndvdkuyq5Ykact4jCFpXFL9kZT4W621gCAH541zcjRiYYVg9k7Ga8YWT",
  "key18": "2D23rQD2ZpWf9iooYajRqbxbyCVEYfywsHT83CWUtA19b1ywxyUTpAFq6WAPLUZFdFQVNN9oKHWtKgUATqQEVi5M",
  "key19": "3dX9MwpHouFEMkbpCScNXgvDKZErQjEzfodHrYPTdSbDkM4pbtnaSU8m6LevnM4x4HUbctjwF7xYqjCsN9WLDacR",
  "key20": "37jNbU3z4fMREqF8aYz8brNnMVHg7i4ftAfZeA7n15VUQhVopAMWmpDqyxDs4c4YkCS9Bv36pqgbPeRNibgA2MgR",
  "key21": "54wxfc7N2xjXfdZ51sFhdHRtVArXFdpotzmscK2L6rpAHoCYwZAHmY6DFLifb4YqoZJdSXPHLXsZGW92d4aiVQAq",
  "key22": "CzXzmgWJgBsS2su3qHEvsnqq48rPKuG9x4kPqkP4yJKtfQGhCMccV4AYWhoon37wYZY9w3yBrmXcB4G6vvAzMEW",
  "key23": "4UNnXYfvu6zw6kAJY12EV8Rebuz8ibPfLnQEWLNFMytdP6uiarYAcuKqvkrFPbMNaMBhpMFPopfJEbHkejCj8yvY",
  "key24": "5Abvz6GJKzYu9b6qnKWXVYEtX92qWkee8gQEzMgVw3cT41gqQMWtFEBxyCFKzscUKR9ydUvQ2wjpmcXPfMTGqGuB",
  "key25": "5S2nREcvm5HHuLZb9VLUXqxVVY6oUFmGGT9LkwAPUb16kLBYyCraZhR5ypigiX37cxhmVDy16Wa1Z1eyqiDR7Rkr",
  "key26": "3hqfxbL3V4L9LpSWoQCn3nBP8AqmsHsxLVtQNb1iLx1t3NpCLqeohT18PjDeFYqXWhYRLTSCWu6gAgzpaEMGHRxH",
  "key27": "dUYoorr31eupGcVsC2YBjcrwXPPx2XCgUMnX1yfcMzPKJpxramvkk1TTgNWp9ZN8j78jqqtfUNBDsXurJBqAVau",
  "key28": "3KsxXg1YMzf3jiEJcy14QSfzbjZQdtxKg6h6LXMsyQMRPNmvibgtBj6eb3GyJMgGt9nP6KL576JyHrdAhabxzzFS",
  "key29": "3atdSFebwufDZ3iM6QkEVEVuHJMcEUkycotpDZXTiA5vc9qniDaQDENfQmKh7fkLQcERKggo4Enn5fTw1JDf9hVo",
  "key30": "65FAsLWppXWgspF5uaVA47BTxp31PxwboXZVwzhgmaRj2LUFVhSXRoY26FfzPFSo9N8vdzG8GJfjoNyVrZxjfgNt",
  "key31": "494aQGLnpE9wDdmnpVqhDzmMejFEz1cRJLkBPhXKTfg3r5ts8TbaKmBp4FZye97fDahiytULGA4pDgar2r65dYmv",
  "key32": "4CmCcVNQ1jT4vaq2MM3AyZeEukLMHMfv8MS3dvAPEGSLU1LY96sVqoQ8AXDVEyu6B9UYg74y756SmefWFNzxWEk6",
  "key33": "52N2JP6utPXXuvFewNcuKYSmR8CuSbdPsBNhitqA5hHtndG1XBKq51v1PyLKAg3sFb1e14Tvp7naUKkwa5FTnEBe",
  "key34": "5sPPAEG1pCAqGjhuwGdb7ZyhTMmfCjo6HR5rvYmi5w5oQmd7CvEnn4dwTAXp1CTh1KR2k1FJD1KPPJt7yZP8VUfN",
  "key35": "545wDf87WHqVrEA5jpHP1M2yimftWJ1zecjHof1FS9fRtDodWX78JrW2vJMF512CLUFwGW2g6A4NjcCU4txVGqzK",
  "key36": "5N9t3e4YgMo77t5PiDRfYWCuqP8GFyndtZVia4yhxCo4dPG1AWuBT6iZ1dvLw7n7skD6P6Vvi7sgSw6e841jNAjA",
  "key37": "5oeMJGALNhajPGB3EsktRkq2twdKoaPAeXqwZGs8YNHLkmDGrAjYCmJGvanfpjFDnszF4XXEZ8hzMHc1BRVyocW5",
  "key38": "52ioAfPZUieLq6PwcEvJRnGcD9tcAJ3Zvxo5qYR4iUxjeSKbS1Smd4BaPDpQ9KRVsjQbWimvruq36a39kstybpd8",
  "key39": "3DcoXQs2AZwAVepBMfUiRjzzD1mwU13nCrogvjGfkjQWQhwZ7Cmo7AxdF8eK92hVaSoYDfPgL4s2h1wEyCXwear1",
  "key40": "m749gHP16XGUZYs55TQphWnfXUqHiCN2v2xFK2U1Xwna3jXvV5jRUhdrRQ1k3Gmv4WFaHXVeV2vpFEt2EemffnX",
  "key41": "617Ws653ee85zP72pUa9qVTXqozPACGANczaqzP2EdCaePT7brWMxAYBgKqofZB81YhbxUTGgNXFrYdp5sEhoWf",
  "key42": "5zsQZSSc9cxVhh6oqB3ofzkahi2hLR9MpR12k79XSKSchyY1qXk6JKxtyDvwL9rxVh61AmdQnzQsamQT3ZveAzmv",
  "key43": "3u691rmvjhu4BKT6yfR2VJp4VgaS3Ty6M4GgThCibxc9icu9pKrvMrgRZdFTrwZNJGZKWtBTqgs3qFv3FBf7ifkw",
  "key44": "61wRt3WCPQmHdJPGzULoMFSXdDF9t7T741Df6KYJdhcffFtusNvygD7m3UvbM8AwLs3wCxnbASbPbmTRN7NVMsXh",
  "key45": "ztJ5zDfdtrMCLzpA8Q4sJziiq12hjCeNY2qh9QyTab2SD8cLe55txNHqM6pxQJGBLPsRTE7iKw6tbzFX4QaK2n9",
  "key46": "msA9ycPF829PPYyPsbvX9ST5Sm4k2CYhFotoneTrPrsJR6HsxmH1DcMxBZiXUtn1Qq19swBSZsGzFEVYLpx864p",
  "key47": "wqpyi76HzFtD4AVkN7sP6ESunivpdh51jMq2ozEHYDGByjA7SCZ6ibG1SAp8n4sfnsutpFEpWCvJ3jnjnSkedGX"
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
