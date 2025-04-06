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
    "4oiAjnpHS9EAVemuRwkE9CiTBsz4ZQixxnezvuMJCMXBjh8nHMcPLEt4t3Xrf9yMEyZZCdgh6fFZVu1iUEvJthEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MLRek3m52g1if4oLQQnhNLJMz4Guj9bqcgcjZ8raNSsKJ14bv2FnxHgvwsip6iSCc1dfbYL4ugmPejemDVpUr3N",
  "key1": "2sQj536W5u2Fgs7byvuMRJCZ4NxuKP9xDsFPRusaW6MLbQDxkrCtYHH1SwEScxaYoStGy8ycvx4p7N7W6nXBfB8",
  "key2": "5GcU3daHcVPUqFwPQUyxUWkwkzLmnHNFDVNuPDxCsXrAsFNnmQfHsXeLPRCbzyay8Kw5KeaqFBVTgtmnT4Xxq7b4",
  "key3": "4mLCpP3tYWqhQXzQC8RBENbeEQkCZVS9SmRHgohk2erc9naZpLuhNbeQV89orRBPLL4GK7Z5JUbCezuW2CFmCjMx",
  "key4": "5Sz3QVL1iY3cunPe1uwgdcyb9Z7jsSxQLK9xXznBKqt4Ev3YmR1WTC7vZbUQ92DzF6P8HTZm5FyccEFVjYsTi41",
  "key5": "3mizUATx9x481ofAX8bDcnxWuJ3ER8TEUqK9DECPbJQEpX2katbWGT4ShJTeCHXRqdXLhXt2fmj2APQmLwgvwcWJ",
  "key6": "PxhVJobqf7xsihugkz9jmdZWQ7an3kwqDBPZwmWfueZx4G2USpTyyjiCKTDksGMXsLc97qEXXZjb4xvRQXjrE4Q",
  "key7": "2aVieABxax5wuY8yWNDDmwgWYd5HuaN8kQdsF587xZ7MsRpyM5HD4ds424BUSjwnTZ3aDGBgFFyVW92fdxJo2JTR",
  "key8": "5eKqpCLKXLmtSZt92s9MQLYAWkkoskwNYBkHqX2cJ5qWKfnFCUvknnecpGGGQPYQCT8Z7wroBtzewhNF8JZySTmm",
  "key9": "2G5EruFd5F19AwujxMiivMYcBGuzcxCspDXknMZJBA7nL8iextYFQB2cBJc4iHQzttkytHBbWv9qXNr8VKBsHduL",
  "key10": "aei7rgWoqZhXTkwkmhBz72M75xvEUKhdK1JDmhWKTCPZbjMDXamN2Q3cub6tFWB8jGPYa9N8ASi39qRyGkfLGcr",
  "key11": "sAd9zyU7QYPyoEHRvnakqsho9cC35b5ak6EPo3qBndBUGyTkekuLAwPEgiJDnQi2wMVmHhEshF6dD6h1vLJa5jj",
  "key12": "5bMtRFX36CEw82xsRn4DN5XrtcDyoWJ1yEPWdaPQGdZBw4CBgyo1o937WvjLCgiwHZqjkMBK9Qdm1gC2AB26DrZJ",
  "key13": "3EaJX3LjimpM2foZYHaBC5Vxp5cnktqYXy4rvqnGJw1RV5PVQE4R24mDrp4Khbuoh9C6FdCCXBfuW7WXbQQjSrLL",
  "key14": "orWtKXVEDJmFZULJ7nTabvhq49dpnSpCTFhBnp7HX2wFoWs75Ck8bzo6w1KDukCidAeLiwAgQ8ihCh5eg7mpkRA",
  "key15": "3sMuUq3j43w7yBYbDEaRLATJ8QW1cbRpomoMo5iM4ie7hifhF6SSn6UnRRPn5bxCL462V5CuhzuqAzkfdvCDpQyh",
  "key16": "2bXGsasoMu28mgvpxgZz4gzRBCALSriaNyX4kzsFBp2SE1bLMDPg5rPwJc3Jw7w4YnBrmAx9kfRFHe49tfD6cs5U",
  "key17": "4bqS4XUKE5zQDjLeAbpXpsYPZ9UgiUF6DgBgmMUmjEAKSs8ykZf59JVmMFAthNaCa7WXVmaWoLQX4ZYN6tFW3R1R",
  "key18": "2oHWzsMGQ84y1Wua8LERKDRFrxfznBswKentoMmVWNcEpqHPJwREWga7MaHYGNV8jLgiQGQndqJZEN22XFnznHRz",
  "key19": "4aUBVihbKqQT4rK2enCbBaNjyZ9LSrcBCBETs59WFMJkd9PGVNJXGet2zpueZin9CbHx9oSbPaxfuBMkhKGgTyZC",
  "key20": "1nYB6TZg9GTnMdKqPY4iVjCmz9eNvVLvRKXxgkvcn7RxRxsCxvMd4DxkVzbesvqJhLN8B4HTD1fgvERUVQGARQZ",
  "key21": "3ZyRXN43A2ZD8FfKJHpLdbgMbsauLQkgDkDC7pXq2z1iPmeCrzAqKnmJw2CQuVkr1F8G9ury4icP5KZe9wT3Yz3Z",
  "key22": "28jSCeNGxDz3GTa8mdBPbLhkEjPtdb15TfGdfx1rcBpVcsMGk3i1VwiYfgtrRty9DSfAUB3UZtakpF6GkQ8MLToK",
  "key23": "49H27bhrE8n8SJ4kAABjndNXakkJFktPcxhYivdtRRjBF3aFZ1vSMXPWANroeRZ81sgyPci5EVBL1SKzPPQ52Gh5",
  "key24": "5T4tAYjwfJpFcCHFaqXn1JEMmBk5HjP5XtQZwmHhxzhZgQFGwbV92wgx4Dbup85rWbGGAesCfvHonzcrjGStqTBw",
  "key25": "316EvBgEmnCRybufnVMr29nsmpb24QEddYDyeNRB5hKmhBi4R544VsoDRAfbdFuXsR1EmpeeEwEcYYBVrAt6mGKN",
  "key26": "2u1g2tM8NAQeezD88B794YXmjfpXgw3FDEx6yy8JRARnbMSsa9GzL79nZUuGEzxDtuAfVLEgbBtdpL4GqWunHmB8",
  "key27": "2MEycZbmG4kEz8NG6NUyJPVAssRr3L8zpuRYane7hpX3SdWWgfbzwLp3RLjixr4hn3km7R6NiRVwDucGiQMpr6Ko",
  "key28": "3GmhVwaUdN9iDBFZhCsAqqTeBo5Et3GSaeBY28ucQBwTCQQaGhdtdD56UtrHY6GxZTyax98FdDStANyRtVPKZxyC",
  "key29": "3trZmwo8SNcYh9UNaRR5DMVsf2MJ9NbZU3zEM8fT6QwHi2L5xnSEoNRdSttyAftwGY81VdzmQQpkf9LZrip6cLiR",
  "key30": "28fsk9c8WijcUmNFRaRiw8SoW8df69zgEjV7SB47mzZi5rMmuFYbkhpuKHLpcNKxDHP2A6A53r2oes31xUFKTUUd",
  "key31": "3jaeHkNRLMqtGg156r7Lr9LG4FRYmM2HyaydaXugX4yV6U99UNDT9MjxVJABQaTPUqN7EzF4UVSiPK2UFFc8PLFK"
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
