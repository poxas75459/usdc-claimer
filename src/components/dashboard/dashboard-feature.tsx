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
    "27HDrcPr1KcMKNiMRUHpqhhL3LjoMoD7FU7FuuEFPPXv5zwn9hSpwadut12KgT1YkqDSobe4iZNrRRzFbaenGXSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45VRRwCeCp1SjFa4kDGHTP2CsiJWHvmxZAnf1dz7FKmHbKH1wYRPZyYgu825iHGsr3WqjfXyTSz3F8XcqAqU4eDT",
  "key1": "4GZsg4wA7ru38vpmFLzC1aZGddSmUY7ZStRsVA5HxC5MKsZCA78es5Vx1czTPRNYWKf9bPutU9yogtSjSD31Mob3",
  "key2": "27Dz4thfxbk1A1myf3wbZ1AB5GvQdKZ8xQ7owbMbhPbTT9UsGnDSpoqpBRfQ8pVZa2oooVNXmDB9tMFhcsUTRE52",
  "key3": "3h4G2D8tVSkwvEGhN2z7ghf65ZpTFgf7RXT8bB5a2me2E5s3UShJUB2s5XaLdgQXNZZvN1xa41KHNu3EJH5WthTM",
  "key4": "2yYbnDW5pU8Lhv8Ttb43E12wkEkwiRBEPrqGHMQt186wXk3LVZ2ifXBb8LzNomigt76RTZeqLZTdYsCZoPJHoPGR",
  "key5": "3JEx7TDNBHmHBCbg1FJ9Ve92fzprBWE997UJg7QTwR9CaqD4djEpSDXnRF1ETGPMiB6Si5xQ8xv4XNKjwEkZ8qJP",
  "key6": "4ePqoerxb3pZSAHytNLzkotSVQZc6eRC1B7ikcYzBzPgzrZqdhSaCPkwt4VSSuvb4tA6wDPfPu5bwT7NKVXQNF6j",
  "key7": "4U21NtggNFjhiucjxdZh46j7U8c47PiLLbQyZM3Emgjwgw5xGcUgy8M7ag8SS6fiUEgBE6kQFpDjcZ7zfZifT6A3",
  "key8": "26muUkJ6suZb6ULndNX1uc9uU1esU5uDUQD1WSK4v6LwTXa48uReE7tACCrwPwQrWrgS2ebTDLQJMqqibQBSWvNg",
  "key9": "4DMFAHVLABP1mC86Mc6RNxxapyR9kzV4Pe1iZTbWz7t9p3D2SyhcKEzoCPa4xAT6zGRPwEQVvdUxtgU5y1aCh8VV",
  "key10": "7g4p2hEyLAg9jh2TFBY3GksUUtBtBij6cbo4RcdjNfbhcu6GNJjWwzVHEhbzWucPVxqFbAjts1qmuKecRTgGARM",
  "key11": "43TtdLfRY782oVe9D2mugNu9w3iKCAHVcBKWcY17ymMcS2kuBEkM7PB69hhBWgrdj5RYDvuDvVKyxaLjGXGnjHpG",
  "key12": "4AyZQyHzs1vZBpvp71RHhvj1svbfYAQiF4LDGwuFtbdkKi4a5vmUHe5w1EBZ62Jja4yMKkfqUbQwPZCChJsaNhjo",
  "key13": "3XPm8CkMp5FQKMJjoPWZ6yLHmfLo2XF9hgeG4DpZtF2iKe7xyUF7MYT8rwaPYcoE89kDp2ghC7RQZKFdayH8vpHA",
  "key14": "51KpYHPTkzRgWkXCs5J3Xk65WFuvPu8oaCPimgrcbHPnF5s7UVrq45Uzjn6U3KvrVZhqj8pM1PkcoGD69tfybNmD",
  "key15": "3pJoQTJxnWsLPcWG94oYeqHtywCGDw3wkKzTUqJLbjaqgoUXknco8GDkwsPmmb6U9YkqN3TJeK9An4o5VLckJfWd",
  "key16": "32hiSNADo2xsMWNszoSkzZDL2jA1trJ7RCuKSFurTKZRyzJCbZwzHwYoTFdXsfmyLfSufX6hCV7wobV915VtWMh3",
  "key17": "5a6b6nifLgQMaLEJy6LewoR68dDkyuaZ6zgaoXAiFjD24YBjFGjzHcjz24PMvKuTVkxr6gC59BxAF1qVjPZYF19g",
  "key18": "5eMVxurPdGKYpUjz2FQNGXCoJewu6Zg2ed2dMMXfAGPagfRQiafQfJiqY9A9JnGsai7efZ1QrC4t3BWUro1zahuJ",
  "key19": "4Z3CW58mYYsXvecM3MXdVs171xEJN5xbtg64Z2zfZcEhrVLt7bUdu6iEarKW3gPQLHoVBHT2TeHuCRbuPbzzffck",
  "key20": "53j6sZ2YnkFRqa7LMgq2v5ftaqhCRj81UDqKGC1jdEcrfPPSpz72LA6BKCSXWwBaeJXHV3Mc1gZE2cXFCDSQFDDN",
  "key21": "58RXnXHztikdY9aYn4o4gUsi7k1KSi1X1nk11VqxZqd82BmHSjKHg9fziniRNFrDWeoFKzmsFDSeY5SkCn8R5KLy",
  "key22": "4uLDxtjEm5R9djZuAKwu4E6G9fCwaGKce4NVncAsf3ehwPWvUP7eH2wLnxaSAe4RMg9Tw8S4icAeyLqXAr4fxyXL",
  "key23": "5BCRqrZ8KxdRPEKeoomXquP7wH1DcyEmJDvDtBonb3SGeXxjBrmaV8ThVd6PaV3CGF6EdFnJe75pbzVgvnsLCWBc",
  "key24": "566Sz1VHV5ycEdqbxPAquhpzt4Ku2LwWksfrMWSwhEuWUoLpUt2g3WJ5uMqL8FfBP7jr5kizYassaSdun9me4yLE",
  "key25": "3V617oGyG4fG8tnsKFecGpjm7rXTfxM58cQVxYRGu5amXKuiLjf25HwXKAndzdbPSJiW2CYUAhWUqiJ137BYe9v4",
  "key26": "5Jk28AjpeNAHsDBfZSjKuohqqJwBsCnwKJ4wcsLC895vYiDe99NUrHQ8P5hjw7fSYvKTshw5fforTf1xjk98niXL",
  "key27": "2W4nL5o55nh6XHwtUFTJCVA4hGVydTeGWZ6Hgs1umsdVTi1hgT8vWUS6XzguGvY79UobQ3XW9PB58b68SHyTPuPS",
  "key28": "xAffPLHasKTEphdmh1nmEGekC7jPgnx16JGsFTCkFNq4kMx3u2kpn6RwyzzDViW4Qbmjv48sPZsgP3zFTHMSyRh",
  "key29": "2f3A1EW6kqtC8hXmkkvuEKNETH7RHjh6SdVvFmKYFGJPAs2go3ViFjiG7suNKQo9iCE4ujMYY9tJsXdtLMif7bc3",
  "key30": "5fMNfvMjPBdYV4xXr5KUy1m9kLhJU6kLiStNYYEhfgF1zPGigKrqPm5MkN67RzAWgQMjUJzXLZNo9Sfg1T4FvTsZ",
  "key31": "3EUJYAfF7at7WSi8dKUzdJpd3GKdFHHunWTqt56yxaGiojhgH5855K4koLUJttzaLCub1trcWXsVuK6dYZT6K1zW",
  "key32": "2z47jkfa1uKkyqjHN5cP673uRnEAA6Ruu5qbT9AxGL1bQ4chhYhr1kTCPyFypTtWi4PiFKbu6Uf9rLmamCm6v3Mk"
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
