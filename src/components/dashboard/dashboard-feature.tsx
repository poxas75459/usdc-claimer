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
    "44W9xZZx2maACGQ7DNDJBKVM7k679nYGtMcXGvZEw4wSYitZo7JyFbotFMZ1XndKhNXw8AbWhvQn97Gz7vWDwMx1"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2qdtfMk19PV7MPA2qzRVBkbCrF4Yx96zMphsdrHNfZoyCPVNhVsNRaaZW1Wvw1DxyqTrPX6ojUi7gAnyWvrzkPh9",
  "decoyKey1": "RQrPEWkEQxgSA8s5izaTKRdvj3zH7NBKQ8uFWVNoSgde1DgVAstTv8j8R4ttd7m5y656NAwnoAKBzLysqVAcQEL",
  "decoyKey2": "8v9HbsFJNWUU7MotuNCcQQN2mk5ZH53hGWV6x93yo61fJchSfPDH14ufXb8eCkDfZU2LFAq8wekkffQg5ac7zTX",
  "decoyKey3": "2Uk6YDStxUABB9S2E3TYuKH7m8EYg5mNk7EjmMK823n8SM1mcYARx9JVn2b7Qt7wJfcRY1oX372nUdjeQwehja7N",
  "decoyKey4": "4iujN6me7KpjecqcpvpVRXumAQhsT8xuevKTqZ7Etv5HVrjihWn8YJs5cFkhRkcdY18EEYwuznUTdTyrrpf3hywD",
  "decoyKey5": "5yHkvjDgXG9MCfsbMMEkPXZy1RFG83oKGMCseVJ9Q3uTLodesnEkQi5R5urnyHzn5kMLLouq5dSC1Aeo2hk3XzZQ",
  "decoyKey6": "3MBpjoZBSU236qiGQdULtyKF882m8p8UGt9QCuyEeszCzYBc4dsi8xzNce1sXpBQik4UTgsainXRSCehNaojRJrG",
  "decoyKey7": "4b7Fjx9rGrSJ8gppifxkfEEDspU7R8ztQDENpKs76e8Z5bimtncThpaFTFwPMBimDhtsJUSvKbHvpbGHyrPA5Yv9",
  "decoyKey8": "5SwGX6Cd4s7UikkVMqgwpcwvUZQTV5EGcteSazq1wj2GA4foijsbBuV2xUEePzDUtFyFLNW7KbCzCDtkMXTF157t",
  "decoyKey9": "4386k9X6PDcSmjYwrjdnyBt6w5QvTK8ZNJjMwEebD8J3VV3ATFh3XHBzY64sQVaobAM4jx1z5LiCDVN4BmWUVK3a",
  "decoyKey10": "2hzJ1vbjDwn5amteBaiMDE4mgtRBCJmifyGg7j867KEFpqhyH44pWwk3hREbdcaofFr1Zii85KjKXJjXiWqswcon",
  "decoyKey11": "4iMet3AvVSyhYHdLTHwwsfKhbTKX6NqNspL6xQeMeK535BB6iLZEQLJFHFNZpARBzevsscwCmSRRSMLs73WpJ1Jr",
  "decoyKey12": "XaGbnjoYV9AEPJGpDKH33tQAtbcicMzNKNE9eXAaeUYvf23WMtzHgndhKdrZFGD5YUrxELzxH3agvci6vfPwLgv",
  "decoyKey13": "47nh7nDLfML6uUpkm1ZuZatyJkCZm2vuZZtGDVAmZEsRBTkwidnZTubfKGjHuYLtvhpND69R3aZuzypZ7ojecuTd",
  "decoyKey14": "4bheVp6PhDRarQe9A7UKAKBkosDFfnhjn1h9hyrA15X8hWaeHAsJsevTBpkosieJwLLXPgPo5z99z2MPtfRgtj9G",
  "decoyKey15": "5QVrwCh3RRtukoM1uDmWHpiqhpmbQ24GsPtHb57iXzvV8Fj4Vix5EJaa9sSQKuVmeGwnxnh85hMtZf3wphk5aBXz",
  "decoyKey16": "5Np28wUaFtrXkTuZdN7u9fuhfRenbyF6jQ4Au9g6sAuSCE7dpWTuXUssJWDvTLNphDY7rHnWggfvYdiW4f2vM6CN",
  "decoyKey17": "sJnXxxh4iebTMsV2RS9eveHS7tebgmxZ58FwXZZ9NqJ5kbnTJhZhofXzD9Sm71tkHKUX47Vv3hvxWwpNP4GNBj9",
  "decoyKey18": "5zj3rvY61FwBEv8HZiupsQiHctjdSSbSHpSzimAjajoTtLMYaBQSpHTDuGM1rfWj4iMHdy3Ec5GJTDksAM7qisZw",
  "decoyKey19": "5j6Zv5YUVfbGj9fGECG71QHPnpukgxYzuL576PatD2rtDfSjyerxd5qUo2WwqGXtHkpmU5TE53gfJQdzH4fRST7t",
  "decoyKey20": "2wx6maKdTcy6rHnyu5KHHb6pEchHdcgZtZwSDjxs1a2qDnx1GdxKJ6ZFUB7noQaTEjwnh3MpCBkoytuPw8c8FCR2",
  "decoyKey21": "VRo9nPrpYuagoU2tfrsqcXCfSHf3GUDRWRebKHomTRztvfSrgUiXdMmJ34qQKdkUr11bfX4T9SFi7NGPDymocR8",
  "decoyKey22": "545AtWqGXdPA8aFVvUxUcybFSZhryjB5htDp14P5m85zkaEatCBiV2uHVxMofLuzuC7wPCunYgPPf4KCwKttEPyr",
  "decoyKey23": "5SrC5XNVMqNf7FLDL7r7hLqoTqbMcf8QMEy6s5QyguYqoHqKSpZKuQFk9RE68guu1rH1QRVz4MA4DHvqeot3JnPp",
  "decoyKey24": "csVyGgYizuFfpEEoBKo5ZtEB5NCjkBSvUJxT4zPYVBtXQAvr9GSu9aBGKcrGwZTgmPjDsd6MvJ84NmXPYvpzs7W",
  "decoyKey25": "NEMzekqVLdLZaMGdBVDbTDP4aYVk9nFYHiMSjeZodVBitxCPveeuzWUZpYDCSXDLYzbhNuweBbwgdVjjpZcaAuc",
  "decoyKey26": "47TZQBx2kQ7Wu8zpDDC8jX7pHLX9tHaKDiZDHWDm8qzXchXDQKxPCAwH7o9hLZrXynWHkHtkjGwjsdnB8o5nDf87",
  "decoyKey27": "5fTfDsR7h81taaUk2sdUxWyzt3sL5dVdQA7QTC8VHhBuxSfPBsirF5cTXr2T777hHpDvi5V7dc7Z61mAV1fnnRXQ",
  "decoyKey28": "4HESsD1CvFPyZXk2iNeo8dk9pcpsV9moAYshRoojno2xLaJRJ2uFEmQ3HPfpi2RGJAnqvest11uvVzJMdwSgmbNp",
  "decoyKey29": "5RPTgsmHYzr8dDBLNLpJYWt9gUafWSQrjEAZsAnEbPacLqoKWopZswRw3G5tAHUGjQdh6e8PgKp9L1Cor7BKjQf8",
  "decoyKey30": "2pyTAAjmH8v2JcF3owaMgchkiHdXLPpXoPZJx8KN71nUhHhHPiDGQ8AXQMNJPJ5CxvpLbtnpsJdgQNKzEBTBrf9v",
  "decoyKey31": "3hhg28NV4kvTeg6krJwKF7DB8cda2baXVDL1iFmLbotQjHrVgDNwBRmhTJ3zWGQ5qXTgtNY47G6mFJqk4UxvjbdP",
  "decoyKey32": "4UkGRTngyLd1owTD1WHMdGyDBedqtJcHDyfCh4t8QPX1HM6pdbdnEzfDXKWQBYh7QHtHtHtqdiPDEGRVNXiNiFig",
  "decoyKey33": "5ACQdhwSPBraKrPyWtziCXoCMLdBJ99nivKGfY5B9aYzp9xXXfMvecTqR5LPn7LpZQw5iqqYXERH81kXRfzSF4XV",
  "decoyKey34": "5vdoZyDphH5bokk9WjUniqWHcxvswzKvau5bHzPrsCcpfaSMX7miyq2TxN41wcvPaLKgwqKXBnFry8aGqLMLYtRp",
  "decoyKey35": "51FUe8sTBJQRTe1dSx3VTv79ajw3fZriyuN5ixBHAtuSc5kuZFFXK2weDBa72EjubtgVZaccDxWjgxaMnuhD3XcA"
};
// DECOY_KEYS_END
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