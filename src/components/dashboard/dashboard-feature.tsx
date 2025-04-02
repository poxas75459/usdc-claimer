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
    "62UBbk22F7n6SMbj3f5h2uvAKA4huVFTh7qFyRgAkMGTeUQVXfLp32qA6RogyqsghR4GFwpZ3VXj5kbHTGUpgCba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "twdK8NM1MapdWVA8gzaHjsC7nfsjmPFUheVWwy5z5FNSXWmxnwh2yx1tXDwjwLBnuJDfmC9EUAUuwiyLVJ33skP",
  "key1": "4j7x7jDwP8M7fbtpfYdaUaqCHGiRzkEv82J1C4Q4s6sgJHg88tEJrKy11cEVWvRfjTjySbDi38YDUiHm1nf6UdRR",
  "key2": "36xe5WP7R5PJ8QYvQ3cCfUphELniMkBNBPppR5hsvVxJM8h51skWUSWmqFeXeTAfmFwRrpzAaBx5MGjJ2zq1yRg",
  "key3": "24639wDXgszcaaLsVbbXVasBUFXTxQDbZnwfudEHnciLYJ82hC5sbxiWHyec8zWZNLRVrJXYG6dowT2i2tFFR8cG",
  "key4": "ygqXdAUax3773aotzJfxWxwqVvvDfU5uDb1on2Y64ducwvFp6JqQctsWqYbANPubxMToKxKu3RUudSTf4es7fZs",
  "key5": "2BRvTtu3ipBm6tg5BesyzAnNQDy2GuV4zPx6jZxLTabLVAeRSya2gDga1LCKh9M8TiDvVxWLcMTkNDVctGGHeBLF",
  "key6": "5oYrg1T6yDKydphwP3N7KteaQaEVKPjUvfwrPGM1JZxcARhsFzj9EVTezUUokoM1LuRup675KBT4ibERJPTCsG57",
  "key7": "5xZkNj9PXoJ4NAcH3yzrYcEpKLns38McSSzQNLWsCz2vd3xMLuTKfeAE8hTwZUo6KPKrX7ocaRTKtmEhtMzoza58",
  "key8": "4StZHVfrdhGJRnZKvcwczSzFDedAUuj7etGqzyXQ5hiR5dizyeCb3Xr844mPbYRZuSSgaHq85cG4AJCpcYnavJfv",
  "key9": "WdWx13hVod9ddfcpW9QmWt89tJCs5gRMwgj1kTifQWSXdsCg1e4KsxYGCzsRWtG35Xv2fM3NrVJLoDWksiKp2xx",
  "key10": "mnfMWKVY8T5FDB4Md5TVGqPsshTJjryz7m3APLynYH8K7Vj9BnzEKEx6RnDpPCVeJX88ShgnNwhd5isigAxyDsS",
  "key11": "3YKCdgMjoh1gJYbbEiosQmBziQpz6V6gkxTByHwZufmdKcrJqNFPsRYcXdwrhg8mPVJKnj9EqhCS6iaRHRnB2Dv7",
  "key12": "VwzwKdRUrZPNR6ZsWn3iEnsFSGqEN6pgrXHJFWdXi8YhE87YtVKu9huzTPyKPhTcrLARaVS2zjEdGqLKp8PmGSm",
  "key13": "4xVNfGWDXaf4a8mx7q4iUvQsTJgR7Nmq48Ev2co6w5HER6q9stmCW8nNrhnqMioR2gnPM5RHRb68nKmLEgb3Q4GB",
  "key14": "4G9ZwWLkifxLeHKJ7UxDDYJFMJpscpAFTeqr47FqXhmC2VhphAZiqMQLCb6XxoxMFAi4ZyBgMvAoF3U3NKPKn2qD",
  "key15": "4pNxzN3UAxZcfEbKXqZdbWJc3asyLMaRHQToQARuW8wgR7TFueYonZ847XpZ9rLjh4Y2VJ2rAfyPjAnTmqSem4DZ",
  "key16": "63BKn5j3spbPMTb5xHY3KBfRhsT5iKdyzBibJmDeUydH2brSCfToCJshccxwEnozgcei7nM5mTFkcPNr3Q7M549r",
  "key17": "4Kq6GHo66dN2sc2ZaSbXs28YVKbUf7ZhtgqH5kwYhRwppyjymNUSqVVvs4ciKZrUL74X9MmizNU2EfxvT9gde5dk",
  "key18": "5ZjmnGboPY5KuCDfevmNxiQCXHfJCB7ZuzwWerYKX5SiaZTii5r1CwTg5VZfXDV33qx6ML6Uf9hxYvMSiEoB1hN1",
  "key19": "2dRmKrenazZ6G3zWrkSmRs91TU6rjDFrrkVhfQsELKbToTZUQ2xbTPh7E6h6xQZzj39pGpfZDJqmfy3YrBv3jj1j",
  "key20": "2hK9o3BuMJ1A3uwMZ3GSXC9ssWMF5H6uHRrhjh4XzV5RsD6fyksRcQX5s4qek8h2HhTb9d5XtcADRDHnKRmaPcVr",
  "key21": "4eNz24fwVVqZtbkwiHfSq7ajD5V8r5vZ39WS2SrX44hCMrdMGV6aMHbX8B7jbzqWSaDo5SFDhm5zecEKyivPXpYW",
  "key22": "4j3nDw2sJUaGRimnZzrDKFyHLavVdSLEamJisKLohg1tWD96e8N9FfV23geX3ug34TJ8GaUyFx1ggXWcWYiJM5Yn",
  "key23": "26nTZ8vTSZ46FeigXmKbFxgPURGL74C54PfzAsXQbmruWBDZPbAj3v86BWEdypep38ecrwRwpWCzizzMuLmeX1d6",
  "key24": "2J6K9yqrobW8zs8a2w1B6QyqxbkoWqrT1aRxfz5251HQsGJCdVALzniLsWi6pu2iQPj7336JkWm6pA7dLza89uLi"
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
