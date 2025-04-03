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
    "3Vo6CGb6iBZf34XKsPFYYxTwJN6vvhAxTX2EqZsRxeiFuymyny8Hy5Q7XQntgeL3d2iecXZBNCG7BNpmF2XP2riy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDUKW4QZGFD7bxuQGpnF35YHtD9D5fRcX6uha5gkXYj7feDSiNTSE5W8jDMS48wraBzBWCz3MNwmNJN7QGAquCq",
  "key1": "4t1UwDgHKdWWUhLYkMw4u1dRGLEDnUVWravvS2SoDiUhXN1ep626magmNjQ5UqRCBMsRCeTQH9RZpJC3bp2usnKj",
  "key2": "3JuQBXgnbJd19Se6hdUyC4cx48PrgbH5YU9Q2JeNX6UotWMphbiEa9ifAcUUTxTbKooiDid25DShbB3psdcTBqf7",
  "key3": "craTe3MJfkMiSZYDCV6JhictGNfj5Ft5uuf2urtjTEPsSovDskMfz2jKEaoJb24P8gHAcHCmCV8AK7oDtctNokk",
  "key4": "QgzpHJQbHgJFPNbDa2B1h7RDYs1Lbdaf8K2HwTrA3Bovd8R57tCL21nexJXf43m8NhTNVdEgipfUiU7NMWKA1Yo",
  "key5": "2PvQsHjUB2wFRJEkYLk4tU2YMsQk3E1sLBx5FirgtYubRAUDLdVvU6yXqVdDxvgtemvBXxvWJz9jyc4S5FzupCUV",
  "key6": "59VY2jQ2mKfsvWvf7egwNuFfQoXqcgmN84RUv5f55JesQhTJrmXSv8ato1a6wQh6ruKWtTHPVk9HevPU9NaWfpWm",
  "key7": "bPHBKV4KuKTspBaqTpkhW1mo8f3jXmYFZe5gXb5uegLVNhYP1G43UBjvc2DZZBQcWDnq971bGpw9qXg4okjtXdu",
  "key8": "2A6jHmp1QXNmRNXZV4Nah5mrp6dsmGThahKzqhkGHnZLygmXjE4wZSGH444KrbBYzvRuJ4vucAikJJyrMhpCFPPU",
  "key9": "59iW7Yxp2vniBLZfAYxHMmHZMpr8tXyNwbS2N1bkogFcEASZ3eNXokFv92diTq5N9HbTrQVXLbtkX3p9aYcpvTiU",
  "key10": "2yYvmcLErQtvaqDRfne5j971FSmoWfJU1yNmDobtP2Hg7MnmWKL6YSHQ9Mj9833rLnyAiETmsssYiz8MDXQzDahF",
  "key11": "5oC9FFomQj83CN1qjaLbm3kHjKuGzSjGCoZqhAQJUzq4zKsP5RBo8tjGGcRa4VV329KqomeFTGRNTiTmT3DaKe7C",
  "key12": "MMbG7w1bQTeMaaUuKMgF5dQt4vUMezwpfBgWHZLYe2N412wgc8UgetQF31scfhjJwsMdPFVoPC5bFnyGzGksc6N",
  "key13": "3cuVsWJwHM1kdrzxZCA1hSBacAvuEbLy8HhhXgTHjeLKyNMLRnrzJfLYYor8ZevrFsR1oNYxj4kpSAzjnZ2JYLvi",
  "key14": "2iEB1drNsU92XoZsAZTCLhZYVCmdrF7N5ykffr5tP6KHZy4tZh3dqKgYk67Mh2MAcex4zq3vs5a3S5UxYRyXMfwo",
  "key15": "27DeQpeh2PcxFJd8Dohm5EdXd8Z4b1koFoUEbvk37Bugta1XV3mjQbhucfP3UTL3Y2uydR1Ju7QdawvxyK5cT4Zg",
  "key16": "iaeFDHoHJTsXijHofzeGvka3oiwK6ReUqGraVn2bK2Crh9fQiX8A1sH299UedntNgNysiHiNiJN3N4wM5u3DGuj",
  "key17": "4xKoGSdV3vpdFLxJ4Z1EhGrbUauvJVTdm3txBoc6LaRibbZZWDnsi2NE6GF9wLLsXGMSv8qe6ut7wGxFvF2ffgGo",
  "key18": "ZJLyaoA3sNRaDSfkLdHC8FpojKGksvF4D4nMfpmRFoiNiP7FMeTnrgLNmV1X5My8WT6tcKzTgSUCLqoiHoCF1Us",
  "key19": "5mt5qcUYwSPbrW72xEbZQ4WQVGy7B6hfjL7dpcRitDwBVoNKcpHNAe2b845TMJ6mbjs9Qx9XN98TGCeeDWdZtua6",
  "key20": "3hJGYx1Z5XBdeDzKY9nRpWuWpdrMDwVyBrBmDGEjNZxQPfJmDxgsuo3TmaTrZDrdw3Y7N8YWXNWpbTkPkLbzoT67",
  "key21": "5TJghSGJqtbmfM6ad5ytuuMTHXdRhBu1GB5JzLSeB4YZJYpxkvNW79FF9XApMZ5Y9TZ9ENZcBx7ambvW3VJZdUZe",
  "key22": "uYCLgAEuZBHoewPofEdBpFaZU71qas2K7NtYVHSuTJiaSTr97xriQ5DKM8ZVipeg7LPiuetgsCqdeX8NgP1HJZo",
  "key23": "29VT94jqQsKZGGY5Mx7pD2f5iVL45NqbCPYoP5ww9LUxSb9Rg1Z8PX2fzZ7NcDhuD4Eqt5jkJLuRN1n7rD2M4xnN",
  "key24": "4qUGiUAA213Q5uBMXdsq33bAkT47bDfBvtGyczivaKovmCt79R2dnE4xgCe37G5yiLm3yNzNpxhz3o56sX5WktJQ",
  "key25": "2ZBP6NFyLqjr4M2tdSEFSArqSPS7ty4gmhk2gmanPN99NUWaC7ossKxxoi8Pz4DjR6VWz9AWEqynmQp7gnohYVQa",
  "key26": "2vVN5UvGsszsz9SfkgcDEJhSpVuywQzqozueFLZgFPpY4EzC6Gxvbr6MDvEUv3NoyDKs8eXknQkH5sDev8fdasHd",
  "key27": "35s5mXuU8t7xTyhrGkK8on97oiayyQdLAqSm8z1UtS9DzEmWps1jHH4ykdXehouCPay4bDHvvk4Hah5n9iFrTVrZ",
  "key28": "55pc6ewuoQAGQAvhMzT6Lq2f5V5snWrFqaVPuZa8zdgDjFcpbAe1Zeucp1QNrMA762qyjXXj53iqDSgnX5EYqzrH",
  "key29": "4aEbRtgxhW8veiVEkG66SXaAHayBSGwxJfmwTCEk4ZA8MBUbEFEtg9aKmmjUe7SRczVXqHxteCGsBg4Hf5N9bVeg",
  "key30": "5QrkJMVodfBhWVBGPCw8veV41SZyZKwEJKskWHqzkSfPeGK1tAfEm8FdjWpBBwMsZvsxZeVDbQac8rYrDu37pjiQ",
  "key31": "Q6fZSoKLSAG2dRK5DSfGwQ6vvb8Zbtruh9gSerqgN2mLthG3uMFCyuQk22UQR4PLAyF83kWB4CbKjAWBAt5KdLe"
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
