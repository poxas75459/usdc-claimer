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
    "53RPbXMMDiT3e5KtExx9EodpoeY3UDk9aUz6A6zEdf9kquojQDx9BRGMP3zecSTk77BzcNv74fGP7kHPJE9X5TgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K2Wbyk1DFAmDCyLDarJQwdtHkDrEjCF4UZn8QBYXpEPUY63KHnJbL5mzr2wKxE6anzr4Q8C57PoJt4BhMCzjSyz",
  "key1": "2JDQCFZesX6KrQYTcy8N4uKXSPNR3iJHfs572YtXH94bKepfMmj85p7Lpd1F8tm8CqJCeVLukfyxzctdxgJaNTMM",
  "key2": "5EYRyhJXuxoGrPuk6LWUJXVeNP3iK5PR25ZpRbxPEnLMHCKmv2JeQFmamyZopZTJA5ssjSS4VZz93S2dXA46cJKP",
  "key3": "299B8U4bjPr1yVzfej2nXmVfHgSvxpodLc3ShdhyuG5gmKGw2hvkyCxNxnbUC1Xs3ovZaL19S7MFWBpefJYiyLC8",
  "key4": "bUKwSe6csyPT3RVLwPqrC6oytv57KQvz537CFFF2hBpkqksMhyyKL44GotHBLL39jg4PCTkpjGB6S2dGj1FkGpM",
  "key5": "3WKpCaiyEjQkp469gm9LHMHrMWZpQg4WwoByHxp4i2b1DSs9PoSLxtmUK2WcUpz63sWCQE5J4mfJ67cprjQTwi2g",
  "key6": "2LVurRtAnkcE8DdEBFUh23Awh4cQEAdZV4djiLapHswCddU5hanxN2gCobaZTCanf2YhuTPkaJ6Adh2MSzcxNaxV",
  "key7": "Fx8dtb5yLQ6qcRyxFJGyooxELaCVvuZ32hFJ1MYLGPs8J5p9mcK7paMumu8G6SSKz4N4MERhw9NNoKe46hbvirX",
  "key8": "5vjqK6uXrMAP47RKbogzVvszT1GJbR1bzBGkuik7nuHsLr2ya8cAfru5HeWZMAEWm8UuAt92v6vuzRT3hMFortXE",
  "key9": "5AtuXJNq88pyNzcS93dWvarUYh1qwntDjcdmrhM3t79cDSHgYzpiyRpPyMah84oFq2ekSZGwj3eZZ9DdyuUZT3w9",
  "key10": "4LD2vurwXGkoMN8fwXuXoGJUPB1TCgs4rwedAqo2q8BYbpxTA172nEBsjNa2RCXZRMaq7pVyJSSKGp7uZ5rojCfw",
  "key11": "2vaAngcat7YTLapX3aQoLyiiB9SHaozgSXmxB9VhRyX1g1aozzRLs9XpSCSLyzktjoHLsDG6XGbnwt86QwdvZd87",
  "key12": "3P8shRUxmnAdXswPX8R3LKUAWYBFTDkCucd6KWmJjgRSiTEJNvYpUKpT4TKpFTCVgdEwhF4qaQaQ6P6bpbAbCHzm",
  "key13": "22NRbw7NmZJSoE1e9xWDPvd9gNkTs5EJUd3HnvWyKvcc9t8A748XWGcsjnQz4rogWVyxcuiLa4xPFKYqX1WyFw8t",
  "key14": "2zkEqFmh4wsrFAXmwSBHHfWHCJtb8XcCY53qx16HotqwyKQUqrmqVHfnBY7fJK88U6zuSkMqrCkEznWomVKkDjQm",
  "key15": "bxCrMb6LVPdnxqiXyyv9eZGnzWFV3YquF2HwZxVnbZpXkz6Rq36AKiwfmKFjPuXj6EwDXLqUEX8vySUJdzZjjXx",
  "key16": "5EKzpJFN2Wkmgx7hGqTaLvokbAoGbkNDQrSS1w1AhFcvfeZXs47UKr4XUDD4RRWZxQhykabzsSXeckY7Gc3bqtQT",
  "key17": "Z3zy9pLuKKXdDtmG1oFSe511zRHJBAsuDUyqXMVMz1vbatsNriezG9m9TKA5r5DpPmGEsBdrkQMztGu61a1cxZX",
  "key18": "rMeK93a4YAs3DVshuKHqVFQk5HzpBoCCbqJgetkxWhkBzGggmgmtu2TbpUpY6xKbMuPVZpVFD9FF3iw6izWm8Ds",
  "key19": "57ha7Gu4k6Ewjuz5ARvbu7kx6VWgUeaXLYLJ2Bs3kkqYoEApiM1i1qoh54U1BufSiMSsFumsPTCkzcuWE1m1aLi2",
  "key20": "4yD28FGcUkjkAPaVng7ragKMovNedGGEGhgFuh7vuLLkgjCFdjB3YNqN2NMiWAp8mkmdGbxn8x2WS5fVHaT5Hvfr",
  "key21": "4rGRhWbcrhRDz1JwWkmnJZNsdQPyCaWbvLkVLLbh7eXJVRPZBcWmEn6wQctR9dyjqiQhNLhAeuHWiwvj47Bqq4ee",
  "key22": "562cYGADuCFEHobV2JjKeL9e5MkW2QPAZz2RLpBhDZYhWhyXrUq6wcUJaEByoetpSGRGzpZDqBFPBhVdK6yNV1bx",
  "key23": "DcPe8xXzjY4PQi2wjfKKLY2o8HegZk8bnyj1TYDzvdSqoPEGfy1x9C3f2qGCrPKcCcQ73r4wy43ggueoCehMv5d",
  "key24": "2FkuJgWwfbv6CBEPg27eYmKpoF3KfH8z1JhmG5AbWsw8bVWvVdHMKuicTJvvHuhqLpD4ThbziZNgCNSEfXy947kR",
  "key25": "2G4BTP2NPk1zkk864Hga2qhs8NaKNSGCHsF5uxeVtMtEQXqGTNR2EyKNh4toBCFvBT8fuz7zp7jN4GuV7Bw4iZTw",
  "key26": "4sUiL6Ta2mntFgbKJcBnTgKYZc8WywvyyfaWJTD5MoyxhgNtFmPEwHvtjCm3M75hBm5THQEUe4FVVWFh5FcTZtFo",
  "key27": "2oYSBfbAX6gjisfz21gsczd9CPZYo228TgkvtWHA7qYFZG7xtJS9ShkFzdBasSxQHTyumcoJ6n9BvuNxbdFLHtt5",
  "key28": "36a6vdAfHFs6fvNvRykF7nrme24U5qiBUnXb2XY4FFtmhMUvt5rH4V84v6ugTvR2ayLZ7jYRNqEjNmJu6ZFJRymF",
  "key29": "5coGojes5E4mSAUrowWdFLDRGgMCwRhhGeGs6H1FRBWdGexfYVme8BowPN4pCVXBnRJN5KxoS7SFduHKHAFWAYB6",
  "key30": "3UgAoZYKvFcgPFYYWzc2LLfMYKbbnuVCo1NsLAHEQTFJVp8ZfF3E5zBxHe9HeP9ZyS3Mjtr4EcfXZYLkazd5iJ43",
  "key31": "sVi44wfMTH6beTptodJSsTGD7pFnq85tej1zyTh17Mx92qrpynF5tDJd1p4muKKBrai48ra2XJrFNsBNPZ7gXKW",
  "key32": "dxyKHQdndT1w4KxurKW1cHef9aAMLGJeu9rHQz5obJ9fqT39PwcEJAVuoZLCkJJorJgRuTJokyKfHx24bS886ii",
  "key33": "2kZZLYaNEEwQz1p4eHGqw91zQ3pQyX1iqXrn5imoTKyBzPV9jnUNQPBEN8nVMNhm4TZbLtyDVvMRSDMt61frHvyk",
  "key34": "3VeL6GYCJWbGojsCHd1snNLiegumcqqy4zYbpVoNkVHWPNTcvNMRBDTuGVJPjdjfVfyVahmnkyGFZdBaPi6DZM1H",
  "key35": "3g7iqZpWjo6Pkivgxgc7pc29Z71D2HBWE4k5qHdnfU2iF1A7qiRqyEngGLiWrfDQevSKqny3yLbVDzfgWowwVPGw",
  "key36": "2UqEfFXiwQDUdq6SMiJzb5ufjz87sW9AVPC5N4LJ7xYXuLZHeKHrSDwjtLPqBCCXhRW6xDkrGW5iyAmj3MkFiBpY"
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
