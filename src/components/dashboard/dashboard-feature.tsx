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
    "5onztFaoQ22tYgfq13s5qoae5VyxHqLRVWLWAM3iG3HTfmArtEV9rST8uajcofShVWZ5teDG9CJGDKf1o1yxgWAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YT8YjvuhAxAQwE4zXeskDHUzUFKmd3dikGLy5aPDcftJHMYaQRUTeefU2ErSgp57HEM4KLF3bfak7RExrUhFvPw",
  "key1": "36XqWnhvDbgvgNV4HfLyDwtiVzsFiBEaKWEEZemAFPmSNmPGFBd5GC7tbSAo5gbuQgVw4GM4C6yFAW4uPGakizFt",
  "key2": "5de7UUTqMDbKE9sqwf1MFBETKAZJ3MqAecnUw5MvMcvJcsaQuizBxHaFt6eXmrxUMbrULJF2xowvRBp4SdZ4ANCJ",
  "key3": "2nnShedqFPtFUuczRxwn7mbkppX6C1NPJzRszZAb2tByCLiNCNW2vA2U4CPX7BhG1K4XbVfhNJgMJL7bv6D1VatW",
  "key4": "2A19Ry9snViJoCHCg557h8L684pWUhzkL8guyT8ArosGEzRnYDyZwab7dHqmGYiCxu4vgYHxdMpAc8vSHHBgwBZv",
  "key5": "5KefkTGifZMRY9aaGqXEiG5hYkXgX5nkTEezUYpxpKF37gUApapz7mSAfjNwYoGCFnfuymCUcYNDMxngVPUkQQsh",
  "key6": "2su3LGevFD937E9MSyv1A5KXGj71fi1HYneG8bikZNNG9zaNtYA8jt65EEXHuKtGhTu1x8oZ4ywuNcPMSsqde7Rg",
  "key7": "3nnmRSv6qhThfMpfgN8LHsaVfFEGn3NkEL2ZnAu4x78zCfHU5cjkzvTkHr9QCgbg4V8fjRoxumknFvQSSrmza4mc",
  "key8": "2eV6rb4JmTH7QwyKmxDFwDzEyCb4kLFFmLDFaLNJv8RXNuTwRha1TTUPTMCZWr8jTeA19JGcUzgTfrqJgye6LwQe",
  "key9": "7d8tWsim9S9YgWijf9VbMLJzHAESCKrBkeBBa8BbbLGyZ2LZQi6C3nLZrnwgy4WAo4c5G61t4VvSJPYBNcwknok",
  "key10": "3Cd2wuT2oYFEkpjPSMGW11JXrxxEcWDeRUgkqjva7aveC6FARK3woKmkCq5cxX2tyzoBKUsmo9mSsPod7puoMgcA",
  "key11": "2UkwguDC1xm61ZAVDC5vUVsYr7PYvVLHWpcjRfEGjF1AzFTkZu1TNisRPVbTbzVuDhfj61ZBrKimWDRKCLEKUPF7",
  "key12": "2fEe9eQ1fBtAfmNLxs99tYwMb4U6Z9BWWY4MKtMnDjawm1uMaHzxfr1CnRza5rJqhsTfecXPUjbUts6ER5Ryu1sG",
  "key13": "4MoPbMFPBgH7kaooW7cxZaGwkZfrsUfKjNmcciuAGAkVeyFS3GY1Y2YJeasgNRrnGPwnxn4XzYRMMSESFaRSyNqG",
  "key14": "534VWDxwJTJBa7Tvci5N3ToZrNhaPcjm2mbbhsvrWZdVW8qFQ7gvcbGLeWZGiY69mMGuasn2bEcrDUW6jL8irgC2",
  "key15": "51UoMyRSNehMgDrpsoqeGtjFpRtWDNBe4XChFuR2JdA4G4V9gtbWcSTnay5m5B8pygvRebiK3uBMjJCukumLH3Ad",
  "key16": "3tyTYAEv2dJZ27RXeFJA2RQnbofGae1wYuCoZuNfUYbLuikQp8AoM1FDXumbV5EVJvGFCxTHHaosb1yZTpw3n89P",
  "key17": "pLeGp3J8hSAvAtKUGDa1LoyUrjkQzuUZ5uB6wAvMKD8LoLa4rtgaU85ErL2Kvuo3hpooKsF6X1dY1FaBgcZP7kG",
  "key18": "4EQR6T32gsTQJQDopPzCka4tUFCir5Ekok6ExLz92QxxGXH32A1TjyduYbVPyKFfSfJsvCVVH95QKiJkUZcMj8FW",
  "key19": "4pWp91poxo4iBfWTvBKZB1sVP3fu4oosDcx68ucZShNrTqJ3d83h3cWwNjNiywuugfmQFHmJdBwQ2EXanKU2rdad",
  "key20": "5ueXFCeZdx1WsgwgqZPRQ9mq52a39euwj3pEgi6bcg21jaVkJ9QKq6TsQVxFkCBcpFcsKfZQV5vXCBMQT1PuQLGk",
  "key21": "bQdf8jAAADddTJGzh77JyzbC8KjXtNd2hxWLvCtNzPjdYqHuMmqqBCR247gB2CrYonUwZi8wLFzSjVFm19ZVjEs",
  "key22": "4dFi52ut7ojfUHyn7snwLvMYPy9rd8sHYYrpgqUazMMwHeqzGXVFBHfj1bbGncmDMcv4Vib6tY4MfFUV71FTXDw8",
  "key23": "61rLhJVPjeFr744NGta51ZuvxukAV86omRQdgeGEjHuXNcwStU4PBSMNhixMgmL6rcvsAW5t8YhMeVRkggabbKUU",
  "key24": "35QCDHgrBcr1tHdYgyQBC4QkMoCS4TcVjqYXg7CCRUzCZxWgh8RAYrYNHB7CsDEofWqthZQUXqtLyqRokdcGNd5i",
  "key25": "5nAMjqmhAdupjHcZZ2Mda9dWmFCMVszq7iHw4QMMM6R6JPoZwDWWyusX8BJQe8Q3x12im4N7DqiCZgMf81DMKwy3",
  "key26": "3RWYVB71dbwFAQpxGxELtTtbMgdFRaA9ZEXvUNecwVYsVvcqAKYd6hgPLUsDMSjagHqdW5SyKWUwD3pDTKL4zcHF",
  "key27": "WfNJydsR6w3cydN2D1MHtVxmhFAH8dmYpe1gom49FR9yvLt7Dnqr63E9i8DEkWLzSgQcCZVvWdqbm8jSdBBwWkZ",
  "key28": "SkDwJsWUgduAXNK5VsiAyVyTYxrckc5w2VpyznnquYsU6DfU4MAdgvAp9V9BR9dJorJzNndoadvg8VTRKmCSJHN",
  "key29": "3chbANxJVYS6xoVVZnjNYCDq3Wk87YADEaknXJEwG38m25YipcY1kveD9AXXSocdgaT4gF3zrL5AX2HEsJgkqESA",
  "key30": "5MKsJuT7vwKLyhNEyz58tKuxKhbRa4sfYAXhip3HQVa5rprxdfZ3TxQ3RNh7ZneX5cMi453odoMPEsBavG3cvWHQ",
  "key31": "4eZrHJmLwfkmoTCrf7xBUiXDx7quBxHTaCDMTu5MVZU3cMF4seP9wxzKqXYpQ51ZPQ7AibMCJjsj3LVb8UaSgA63",
  "key32": "2r6KsR88S6fge25H6middYrmjQsQDg74o7xCvk8dFeNSkCyNBV7WNjDvAhV1piNtThum8Xy41ZMtRDFjrBrnT7PR",
  "key33": "5HLbJKi9auABhV6Wx8RWaXRhsUUgmzgidqpezinoC2m4vDuVZmxZ3eGB8NFUd5AU6gcLTZTd7kjotRxrZwCEtABA",
  "key34": "4Wc2jFkedDkrPs8FCPG1KiVRfJuiuqC7KH8ib5sWaUeFt1dQMvqP1XiRh2EeLsDCAiVmcsetiBsJy1RWWRJcNJxj"
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
