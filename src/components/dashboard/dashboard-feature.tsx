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
    "iTorNv1vULeD9eTmkGBXYm6CZE57P2ECEhWBacLTyLMaB9pyTDGCNiNgBF7iUHisAecdEQXmdqUiiFyLpDVHGb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQ92NZcd7dcXuDe1jA99Xhd8Ky8pqUHJ1aY9ZT8GA7uHv7KCGqzh81rSZqnK1qhapTfLKFVC42TDYNQesHneWVw",
  "key1": "2CPeeQoNGgVQArk5sHW1c15LPNENfmyB8sgEnETjQLqtMp1C3HQVnjpvAsUNfWadfAboYRsZVc2MrDn2rGpfBYKg",
  "key2": "2f898SdBJVh5wQ9rH2u2eDVoa836jdpv8dDTUDVnJKkTPyStsfPHb45ouMBHwtXKV4vYd7zRvA14Ps1eQJgRtNhn",
  "key3": "13scvCqk3NRMnTtNbjNZJQ8Kk6Q3usXdg478HCoMDczdMiGCTBh2fsAnUbJbGZ9JJ6a39scaw1xCnsT7pYRXbKy",
  "key4": "63wiAjKfg1TXfAusAjUXEfU1Vma42faXv7yGKCmcodbiJbRf3rpEeX8cnKJoaMXmDasjYBQYtziqiEzGw3no3Stb",
  "key5": "mEMZUj8RMWaoQQEDtfdBDPDzHGes8bzZFrsC9FpMk8bRVzNnnqAtrFcQHUYaJYjru5Had9xxQsUZxr5o6zYcthU",
  "key6": "3i4Ap3VFhMcxgvPBdQ5mraVwGq2yAc5psUFy6tisJ5v2Pj21K7vQ429To1TZVEhh3bBiiFSW6NyujCm8h2efEttq",
  "key7": "26aQJY27KAx9vFLY2oMVrmAXuzkyn7jX4krkr7hf9QpASKL3c87z8RppKuoRhRaVW748pgdmdnYSdx9tnha6DSrd",
  "key8": "28iyvW2rcPZ2zReeqdUjSEDTUoTkV5qo8oUXCsZdSVxDy5sNY3kGPzfhTzwUGHSEFXLpWfcymG9246CPZuXByQdd",
  "key9": "2HmjstFjC5Jag3ngQgyE2c7pjF5YmbWDoveEWLRJQhKdTELT1R7C8EkvijyJsTucjaC4q44yostmzcm75fjGRhtQ",
  "key10": "2TcbFjhY99w5Uu6nLnTeWgADxBGLy6zwaw31JQ2oP1GysEScvhUF3YnRGinxETwieJdaXwDo8poqwvm3vUpq6DGq",
  "key11": "2KoPALP1yB2eBBzheeBLau4Kt6GdKfDF9gaNhPc4x7Eedw1b5BjuUBf8vBBLBzzktxJo2WAfipprahKjgY1PVJFZ",
  "key12": "3k8Ffaa3gwAq6517RSKPC5T3TnCcqsKccniDpT1AGTc7RH8X1AQFLs9E9XfjAs95eVALpageiMgVu1g1rBdeLKxr",
  "key13": "2552UyaxzKYmpcfa6JfVpnrhi4zYGZci9iDNsR767GUDy5KFRKCEFJs98aU38bZDGfKs4fAufarvbHvnYd3XjMGE",
  "key14": "36qEu95Gx8nxEZczNtgroXPAxuc8Vm7QBGxiiHsUoGdZgyiWRWnFmqDpCWpiJAoT3Z2QM71xJAH5dKkedzPoGCkt",
  "key15": "38CjwhHdsy9voC4C1DjxcZpWrdsgFWtsm9ahCGx1kfXQb8LG4ekTPKZ79hsT8FQRGprk1mnE7a7RJzGWGYmPWn73",
  "key16": "4sJBm5BxQS4m8NWhVeU8VjYiAsr44BwGZjwroLL63q69VXvcx6EVrMvf6tLCKyJusJKejgBPNQ9my9xxgXe9iBQj",
  "key17": "bhhvsHc6fsbDYuMKzUfChUTV99CC6smVDPy7HdBArw6bFxB16WA3MhsDW5wad8oderoiGVmzSvAuQxu9deXHakg",
  "key18": "2SXeT8JBEE2JAR3d3ojiCyx5c4CDXABq9goVaJKeHGkdti3JjrXGRNWz8gRrJoP86HQtyfS3zmvqT3sfqStzb6WE",
  "key19": "Ns2LuaZffHqCrM2Sv6XKeVH75mSH4wxrm5t4bi5nYWREX1DQNvr2vDZ7qtKcMdGLBnH6KkQBWPVQBknJtzJBK7k",
  "key20": "5YUgLmq19cxfqpczRjD5P9DEKx1dP3sS4usr2o7smMFmb6A8KyYYHp8CdpzGWRTD6PM9o2wcDk6XjYWy6RsinqE4",
  "key21": "5rP2gKNarLfEGkUNTsFjuPoVRyBQwbXrwvSmUSM8T2tZHpGfL66pNXqZC2P6Z9WaL5U9VpCzFHVEp2GF4bauNxxt",
  "key22": "MZeSn89xgLLceMAC8f6Xyke1SSCNH11uUEWpUfTmFVLfEj3md2AN9Ev8yuiJPr2QxgjdgTe6PCigEXsSH87C9no",
  "key23": "3R9x4qPZz3vYdqhe9NVerNgLsD56DQAEqPLoPbU5fZDTBmvGpceN55pdoGQQd7viunaZCmX88HYwMkLPEhYWDzyT",
  "key24": "4ckXzBzh4XwSK1DVQ2wRHX1AxqEf4N5QnxSTYjXYD2g3cP81vnF5PJQ73vRgprK9jVMM2tVT6MFRkbgt77TktRRb",
  "key25": "aiBaBEo8D5cdoAwQgF7hVR3SeoeuVoZKEw2gtm4qZAi31evMupNXX77gw8b6E91SXFoxkECQVPjJ7XNAw3qV4DL",
  "key26": "2gZWiNgkiFCj6NcCR68zTqvBYaaKtUNhyFp5yuMAyVowVuXknTU81cJk9o9AzNEwcnELU7rmzFoXQoW9mTXgkvr2",
  "key27": "3d57h25ViVwJf2sVEWMK38pwrgyMf4seXieTaTWUiop4nsjJ1NHT3yUksBmKQ2yWVoKUWhY8bpQd5naxoEYcAGDb",
  "key28": "tnqPaLHNdztoNbLDL1Fq1mTkiQeajDGN3rH8yQ25c79bPERKFmaWeJFnR3YtKyWuNPWo5YhTGcpkAZJd2viPuZv",
  "key29": "mF2xh9nKjF2ydBXEuM99CJT4e5HRVtq8AdsX27QZxvEDEb7zjPNiiHQpfZNPbvX34SEVX61iCb159YZTnF9YWkM",
  "key30": "3XfxULwPKLhpGz9h41ptqquYUf6SW9rHCPfts692dzKUAX33uLdErWZkBxFtN9NmM9AwYokyQMRbgd1qTxz1NgT2",
  "key31": "yDhuZGkNj4Mwz73A3PjiKS8yLg7AuRXb5UzSDz5aPh1NbZEZMUZkNaKT6ib6dRVgMLfAPMJYHE3WkikvD5Tcfqy",
  "key32": "4hwEVGBhZiYficT38Pw2SFVXDi4j3W4u2TjKpQrqZctP1Z8MGLQSuu3PnL1p79gYdDcpzNnpmdh6MpM3oeW4CcTH",
  "key33": "5TdnzXU8iQkyiqajaft3FamYw8ehbwNm9im4vh6jyxpnaykAnsgmuKxU9Bb6LDU6s3S5ax6h9xdsYLctSTzxBRNd",
  "key34": "5uT3Twm5fm5i9cuk4GXQKksNZTqNUwLkDNkdNzMtq7mUTCuV35XzvnkPpprWDoqT2CLRmx9jn6DeFHpz795xTTKn",
  "key35": "3aP1JCqTnZ2JJNaraXdAJZe69VN7gRDn4dWTcWC4hf2aviHUTURVhYMb1YpNAKNTszUnJQYV2hdeW5CGQXeaqQWY"
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
