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
    "24JJXB27dcxjNVLiRGRN96GRjp646WDmiXaxKrjBzroXY3Nuf71SmcBhpsMhHMEtkGEzEd2tCwUGrx7StDVdM2T2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XGLWZa3PbvBggig3RLzyNw1X7bk1SwfjPsrcc1TwMZ7feVPBEQFQw8v5nLKpMroosUjdMHq7jMoPGqjvRXudyDY",
  "key1": "3dg99fdGBBc6WRYsq2WZ86jMFwUpNTbLPKYCknWyU9sjUfWFCBGtNnBPWn5isGETw9sqz2pjAcZ9RGcYbbSxvTV",
  "key2": "4gB7dPwZ593qieEiWuRisDPAiAdsqN56mJqVd6it4LxSxGNLVRF5FNcJLrApbFNZYBqEDgoFGRsxfeqHQCRvoP4V",
  "key3": "5jftC8EaMyyYit3BDJLswDo2s3Z42E1Ur5coNmi7Rs2PV16wgQx6Ykqr73LxZ8BW7MmSN6SfoBkHkGpfniMczoba",
  "key4": "5Nk9oFCNNRqP3TAfGEPtr6hCEnWxrjYzYpcmHPCCsuPZXG1CYrHiTbBYforkWbWq74Z4b5jNZEaX3JmeZ4BKKegS",
  "key5": "3zKAofrS16BhL2xbXitvntHSYyh2S3n9n2RwZySwJ7SptZAurDo9GMnuZaMTr3Rz4AtdLpgAD8PhqzzLdannyckq",
  "key6": "GiLYQ7hvdptkmju8ynavgHU3ctPktzntoNGNHxqUGgp6SXbG8RsxF2YhVf1KpYpFyhedaFEBvzy78vo8NWMk8Jn",
  "key7": "2CZ8LzfkJ9sfLNCsyb9gFjXuo2v25HkTu2VoZtqAj8ugGPSVsgCqV3aVtfekUHu3j4X3CDxuqJJ2AZ52Z1j34EmJ",
  "key8": "577mDoHeC729q9fWdDRAFctLfA85wv57PCLd8rxwTR6i5gNkfPrL45GGRU22RL5qmTjXLs4zupMmjdgVhtqwUm86",
  "key9": "1tEgXdBab7ZeNeqWQiu8rd1fn8dfhMAiS6zscsb2163EVkJgJbrdSFERbRSN4or2GuG7278fWt7SscFB6GSF29s",
  "key10": "3w4fXKMRcvGrLjnzhYL6c9XrBht5Hftm4Vd2euGbhBawVREy8GBe5rKp4Xjj1U1iktQdXhS65TzARU3SxFwihxts",
  "key11": "4sTgLCYjfiBErGn8XWzYJWcPEg1iPNRtoH8idAZZdqkSytV1VJYHtVjoPRuWJzdjeewpn76ED3NM3mwFQJjLQVBm",
  "key12": "4aVKDwjVmn58e2DX3qtkRNGrk6ntG1UHo2MqGCiox4xp9fUXdp3xUPxWdavWsLDnanhoTeFkdiFQ35hJC1jcn4Yn",
  "key13": "2v75MZjZ1evXPct5tPHp5w1YXMPasfDbqgTxdWu22jHC5ZV8zkBXtwWcyjUDks3vsLuX2rndLLK9N25ueaR4XjrJ",
  "key14": "NZ4eRRAoWRodWrkcKYwCBSSeBmhvcN8GHn8hiwGRMPQ4hB1coYNsmbG5U2tueTts7iPbTPgXA1zTMJnNPowXMgn",
  "key15": "27GCZHe8NCEYcdn7xQnYq52KxrhziXdEbWKEpibWvrXQMosM931Kkk5HWbJnj2DZmWjsaxRccRdH1xFsmVYvLCCg",
  "key16": "314YpwT8fofPvsQS1bAHEBGuerGMqcgKMV2M2B3qY7iQaruruSdv5F7aeZJFqpTHCK6fu5FEh639anbxNkX6moyL",
  "key17": "5KmVQVamQti16zvJnXeQkpB91sHYEZpenVn58a3GUiYjZonXLUWVzbXpdvCRqepJtqn6gPabgQMDBQn5u53TVsk4",
  "key18": "4oPS9FSsMZrCGQ5VhSuHH5ufVvrMcQ2jbHsKdpEQ3WKx7djrcza99tf87AjoXytYqTnUoonW92TchHvQNkVyuHhU",
  "key19": "54RUyyUxZHJvUFcvJ2qDNQKBtb25N2hodbY2irFLPUbCdSMs1QUtuqpyWgjh4BQM6y5ippgFr6quhsM3wUUHdAtZ",
  "key20": "24T8XG1dGMpDQjeGQEnw45THhiVdHZqwjQXufXepUAe3xLTGupLaXGRMCLdXQCxnTSfKwkGKA2p9Ki44LjbvmuZb",
  "key21": "VyDt4P9ZosguV2DZrVJP1CuZ4f5FPD1VWREqvM9j4HjW8XoCxi8PPUSkPpjNunkz1D4GH5hXQnCGddBwm1dSFng",
  "key22": "LUegLRJ86y546A7rMS5vJTSNArypb1YCicfdUBh76GkqZvUPSSpj91srACEm8pZMM4XaqGfE7jZS1cNmNfASxm8",
  "key23": "xQAK9eDgJvTTuVz6yHRSYj7f2HFqvjVEr6BJgaPhzjE5APAAots7ykwu5moqGgxENiQEkSMQ77VHkTDzqZcPdiY",
  "key24": "5idfRKk9RuG2LnQSQUUET47wmacNzNUza5k5Rvy9Dz16dUqFL1euRfFeCA7ToQ5XTtymh7QmsSFFqa9WTyUgCaD3",
  "key25": "2yNnQhGzNhnwz9qWrJ9aMhXaKmhabBcXf8VaZTzWdv28Y6pV1ocPLQjfmjA2m1cftV85sHdvkW49E2ja5Kriq3xg",
  "key26": "2bkXsma7rtb79x1wgjchoNnzTLX8zy2tD2pzsAj74hi5QNzCeePSe6P3XTBWcLdhqretE7BbpsKpRsMjBGkAFiYR",
  "key27": "4E75ieZTc95aXfVLzCQkk9Be5zrHYjMSoS8WFCFYgujQv5nG13aX17JS2TQgsWgTfzpk95Ui21jn15w7DYXy4KHt",
  "key28": "4MA5wiQ5mNniqEArarCWYPjyZbsGdXtzEC8ay3RZRwVnnEmk1dF2H3jViWB8uYU8Et7NPTezBvsrmj9W9ydsLCHv",
  "key29": "ztEUG1JGtkoNsXfJKdjE6kjg9raEU1B6Xjf2vYx9E7GC3CJCMmTiCBjSUoTrEsNJk6braWrQ3w9thyKWmdpmhCq",
  "key30": "2dWAQRyZ7mtMqgGQChLDa9Bqo8tTpQ9GE8emmvYCPVMtJ1pgmBFdnSEaxSBzhcSAtgRmB9zwAjsWHjG5YHLQvsAY",
  "key31": "LtXMjk5Hm8BDyH9cpqZ7osTx4wYDAo7cXbjkjiphcQXTL2nPpWAw4J5EbqdiRUKy9ypbJhbAzUEbkno6qNNs9YR",
  "key32": "4mhUXgDNQbf8JT1keGDjp94g8HoZsyk1FnjyxjwfyU8Nv8dSzjwmtkFwrnHjup4nCiTFuMfymfwHzg6MpVm3TNUv",
  "key33": "3XaXH3pZ4GUFyrebF8nbpswJjozCTd9pZdwa3o8pVaZdA5gmXBbosZfy2S823NPJXpa2YpoXF7NYj5aR3t9spUQo",
  "key34": "4GzBYmYqXB6GdiDanVJwEEqK2t7z9QzUL2YBEKN547CafVHLvhxsuNzodNwRfX7oNEZraf3uxQtJXHbaX9KZugPx",
  "key35": "4KYKnKVkFwopmoDGZKN3XBQAcsumGjeoomCe8zLLxQ45fE5SupBhsnhjFJRDmdDQSV9k2tfpTpUXsMPKxX9uKG73",
  "key36": "ZQ8JJsyszTTBH7tmp5UpAVxTMk2p46JV9Ut1pqp5cN5dBpzqjJFs6agJ5T4SkZCERdbknrismKVpqbPcQL8Lrx2",
  "key37": "4LL5ceeanzRau2vURudDAUiVD7vhJguRpXtnRMepHdQJbqXkRwAJSCrLMRS5gyPUGQb8J9to7eD3LE6KnKBAj34i",
  "key38": "565fEY6txW4bEGJeLPYTnBRzsuRMhbpNyrCXWEtQ8eaRcDaR18iAisw5WSWe6RY4XjTpjhbTproh3pgoKYWHwLDS",
  "key39": "4ZxDTVeMC5AMMNpfVHBBr3KSMyzf6QkMnG1UFGVDwmu5wTNW8nt5BnoZv6g6pMLWhGrBULisv7QBDuYstZuahxTp",
  "key40": "w6jy3pG5h3GhhELhNpHpi4uvVZE7KTrV622V1GjoL88vjkQheJ494vsFSJKzQKjx8PtbfesPFYF68tyC1J8C3Hb",
  "key41": "23w41JtrtZU6vXoneWiCZ6WrCzuHrGZhHBj1DT5FLVm3ChUjvrTzf4WCdsVZ54eWmirayPDMyGbAY6brdze15oRC",
  "key42": "4ACtzHtSQTLeWfW9saftUJU2KFYcmzkUtffAVcXUrtXRYxRtz7TGa35yoffVtZtua1kHrFatdLm2TtbPJ5WYN9p4",
  "key43": "3Phuy4RuaGJKHon9Awzo4qp3M5KZYc3SoFNi8h3q51SyF4okGREdh9UtBKC9wTznWXmxj1h9yMpAKqqcacMmWGPe",
  "key44": "4aKCUKPQK6KY37CLCNFiteoJkNRnwGJusSNbgLfT89buTLpXFv8YzSetKAJ7ZM2nYnMnRtqDghfgYjbX9c57jsyA",
  "key45": "3JDfCwYLQnwRrkwaVnvfS4TP3NDtHca5XfiUCMztrWWhKhU1hjrHtwV6TUcFAgEZpF7MRitgBfL2U5LXfeHxoyVR",
  "key46": "3ifXifXcWeRuyiM99QmfRr3oJ387Bys8HuvkU8qsN5si5VgLuR588CaGD8MCrKnNjsJ9aRh5e4C6tQU5xQtveniH",
  "key47": "58neLv9pXHVoTo5kRBB4xh5BLPMtHKw8dgSDdQXKWRvphWVvRybddwYBLTBdHwJkwMZzmyFgS645wqbm6bL2G7Wu",
  "key48": "5Jr76qLNQwao9E9LhNwQJuB5h5FaJmbgM2x1StMiZrGNm7Dy7L8kxc1rseiqYMzAL76PPmq3U5QZR4YqG5ZA8zVT",
  "key49": "2fybDJdZiLNdnjywPHVZPnzqEnHF5zBLKn4x7kAEdaaxTjqJPyPdyoXiz8TSamUYckN1uqxRwK3FV8z2ZnbyvQkk"
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
