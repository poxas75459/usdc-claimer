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
    "oHdMtaQuVDry4vSihTnA2nVFa2zeNUv2G8SSd36aAUjrfYM8czVLX3nPWLF8myM7TeGqaGvbDPi8MuXHqiViwfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z6xJA2mCddDo8WBcrJfeW7f7E1WmHPKqhm3gsng435i1hZK2LrwtDfgMtSF9YSv1uytYLWKeNppFZufA9jWemjw",
  "key1": "4FiJEDyYhMrFX9scLLfjJXnSqoaRU8C5LUkXfCpW3eaDydYJkpRAjCxF5ZS7tDeY7WrnNJPy5NQraC2BnsDDjymA",
  "key2": "49UBiNgGNHvHgtrFYSojRgbWGCngXphP1UjRgzXNBWAtWJC9PmEi5PDr2dWTYuMQxVChT9ybiyADNT5g4VBF3ocB",
  "key3": "4s2xVD8f6fZMeQQTskVGeq8ZC4VRmdLyLtEba9XdE6GavUdkfBTCuoRhG2a16LMW2pPiLgq1Wxe3j16MjvRrkBvr",
  "key4": "3taz8DZsutYuQq3fkLi2BNrcEu4CPQJQexg9n3Lk6TkWpNDoxiq9DUd7P9Nk8vcYUABL1gp8n3y8cRgEg8pXh87z",
  "key5": "55jdem7JNVXkHXQnEDpMUGSiQJJ782CWuWDkKrxNDGXnZc4TZe3uNr2jbo8WTknKtK2fo79h84Er9vqmDWPWn2FD",
  "key6": "5V31grRPetQtfxLUAPE3Kko1b6zdVZ34UdAq8fkkWCMVB94NQxecK84nKo5duVBvmuYW8EKCMgDY4eNGyAqb3WDZ",
  "key7": "4u9GokYcrwfvv1y3JgZmdNkfZT7ke4CuXUCohx5VwX2SYxFtaEAUPzR73JGWrMgW41nTEATEZjw4KUGVe1w7GP4n",
  "key8": "39rG4rwEptLseP7yekYNQZkmcJMTGhFbgUTuozEFSVrka3KrGpyaEGC9M8W7YeWquikR2rgmWHDF3ioVmYVsG47H",
  "key9": "4zqpSag5YNvdyQKZkV1qbLrciW1agBbQRFEG7vTL5YPr8enmEsRvjNshm2XsaggnNo4xtJqGtkNVcjYnShi8uevR",
  "key10": "5Hg77fVZctV3LLqWSQVqwcyKfruGu8crDtfZV8QodCmj27yhGP38AUzWCmuWN9V1pkkhx8NUkmAE2xng5x9akPR8",
  "key11": "4U5ZRPVPvbhTY5VfparGHmJSjoymWwmFqWD2mv5dtjbJun5ckZnvnCtqXZf6GidQf31fjfa3TSwX4UZ95p5P3ny5",
  "key12": "2XwuPCuGRNYEpQpkWRArfV3LKWEr9GpdsvgnzKMTrEg8NzJX8vHAs8kMGUP9AxyVyv3mZGunw9KkR4UrAGKBXtzd",
  "key13": "621cLt4nBz9dLbtXwFBvLD3cCnKLMwhVQQuHjM12oVq4sRLzBnnXEo1QC3EYYtbVcvLZFpCczWeRsmvBPUzSe9jZ",
  "key14": "33Uxx1xWvKGzSZ1kZ7PuNPtPiwZkmM5Ga2zwRqt5sm8pper9GjbooWMLZAzdxWxSXiMfbv5LoyY7UUAwWzf2QtrE",
  "key15": "aK9KKcfUNuzj1iTSc1MevsMYsgDWQUtVaQkCNx716ot6GgjXt3NfYiiAqutRoUhZTnumKfa8Jg5Ave1qF29Bdrb",
  "key16": "RQEnpfKRq9hx51CTtzYqkG5tMEU71xHz1U6PME53jGKyJdUtitVwnYRh5GsZwxge315JcjpgMAskWWvFNNe1KcH",
  "key17": "DLng1BFG7LRRPkSASHNQ19i4LwFJRxejGCzfvQxihgd8QPTyBTX4ann6tTYhvYTauE4B8zdNJrR4eFhbK5DTC2A",
  "key18": "5mbgSh2WHGjQzPaKbTKR922KggHsBRnyiAsUoHLdAc2mGkxJ4e9kWH8sQDrw8mkqzp4rz5KULdRgKuU1N4cLCXVz",
  "key19": "2hyPt8A9NW3EEnvbWQ9U7xiaZk3SEVqjJ8i1miALLNHaQ5atGB1FjzFD6ATzh62zojeeDiYemi3fLcVUTGvGXM6U",
  "key20": "3DWm4MjE8XqG8zo762ARyByTnnkuPz7Nbukr68LY9NCaKaybknnqXYH2xYQRDR16oyBqRuJswsBnbeCCBud7xkgu",
  "key21": "2po66WbqRcP4onJjU5msXjJ8dcicddfbDTsUoCZftEYJybVes32Uh8pcfz87hj13oojTAC9Sz7C3bAcGmazHxxfb",
  "key22": "5G3P3AUB1L8K24wbjMLwVNSNv2gqitAAUA4uNm1PuK1ztktyLGNxKApW4PiRsZ1iai6XWZH9DZMD44acupGV66WR",
  "key23": "4SL4TKVWztX5Q82WBTmyEKvqbd4g9BAnD21AuJT5w3TVZrWdEtp2H9vdTDpRvCBzVGRVY5oYKHaEAB3zGeXCHRG3",
  "key24": "5N77E7zGxq69YmRug9YKGL8rFNidQ1SACJP5Jcpbqux7RfQS8kSspNNgDC8UssW6QeS7kMpVxvH6oudhSyG7eC7A",
  "key25": "3zMewri2SRMJRUSxU7wLmVcEK2gZ7YpkntCvQ8bxFubgmBpQE6PSgAzxuxJDfgzUHTPHiKHyNKhRvjSJF1aDVEFk",
  "key26": "3JWt5jy4kqZUcwCZgoCJtjYcQu1FSPsZK45b9joxWBGZeXWmLraXEyooyAk4ZDiEfqBYacKSwXMk2Uet9onB52Wv",
  "key27": "2mXmVvQRp5N8de4i7NUKKBVukxVk99KywnHxKeM3En26kxZWJzp4aBLqjhP9m3MMGGkrXuF4e1qwYSeLKwagZLqD",
  "key28": "3NXSco2TgMb94WZsgZWkeBP2x9dQDCfg9DGDAQwkTUDB74JuM8kwYyRJdMjrWVeKcJ2qzUgmmsZjEpAZUKAtdiLS",
  "key29": "3bCsMhRwvF25p5NxTiN7XGT7Geyr6B3YcPk8x88ThJTnNUDuY4yo7JezVdDXe1eALMQoA9jhVTTNmrkuwV8vnhdY",
  "key30": "ykbZtVJCku6PjcrzH4V11B21c8yfFakcy7in6cArja9GeBt8UH3cM3q2uzs6ogeT2jZce26zmnc3u8mzHy97on2",
  "key31": "2jp8MmYSaUyB5Abgp3Vo8z41m68cBS27LmzpAziQSmvKTsZazdwNYZmwFP4CGaVkrFL6kdbeAigEXiPDiWLZN86t",
  "key32": "5Kk97hTKtQEXbzx6Gpsthrj3qwNz4SfjqCB8GS5hmWBhhChPkSjHTyy2RkzgZhaXaTFdazE8yrXdULGyWZBD3CEe",
  "key33": "3VLq5JL6UAu4iGvRCT8GPAh4yPrwQ7jaqqfjZezUsUfYQju3GvuGVzCgExwQxpVTBzfoX51zVfUgNmskHtK556We",
  "key34": "bAzqvJ8VR1iKD25LtYHNMrCE63Kx8qMqQkaKjHzyu5xr8UbVMJBVass2PUV8Z1FtJYUwVH6XSj66ByQ634J3M3t",
  "key35": "4LxFTivBxakkTeMQPTdosbGcscemT6e6pn6PMkjrHpnTFkpLR568Wai35EdVCaMCxFZz2EVhHvf58GXnzVDmiYrv",
  "key36": "5xVpX8HX39XZS3XgNJUWTp2QyoFfoQzauKzw51ukEtV9s6KU2gJKJTfgbof99YLGwYRUnse6852RRWZZu5QTbfLb",
  "key37": "4GvX1Cij38VYaqJsLA6DRHJCyWJFcgVJvAH8jU7wHva1Q32TWwgMkRjUXpSSKdRdTYewScqFgZxp99DX11b3VAg5",
  "key38": "52EWh9u8zXCENHJaQxvWmJ5kzJubGgmX8cyQPNS8mHZa6T95khvqyZvRT94hjrwZnHZnkvXJeTQk1pRNwfcoKJA2",
  "key39": "k54NjXeojMXXAhs8g1Ri9rqhr1gZfqwjhbRJQAmUyoZW4uM1nHHjQN3wUiHAum1aUMV1pYCME22X436kpcTaaPs",
  "key40": "3KT9CETwX286VsSBS38nLPNqo5Z6HZXxymVwyBu3PsVceMcgfwS1KMBNeTcagdfy6o4FoyBS3ZPyjeamasDMAauQ",
  "key41": "5TymcgzhG4PcrRc6FxDA1ij2oEc1HNYeGjq9koPCAHqz32F86rK3CKoMwh4tTYQeeCuTdcUoDtQiS6h2JutzY2wj",
  "key42": "28g1wmRkNFARRiwrEiQPRH8sy1pHMwdw4ohELU8oWTDauqD14LKFC7V1cazXtSGmGX69MDEhoC6K3FpQbcRh6r2M",
  "key43": "4Y7MzP5LK5xHBrWG65PwnuEg7x5gRzbk3BtxWwAYXXYY9ZXuiFwC69XRvYcz44kvgSBLDXJPtwpizKehYdzXVVR3"
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
