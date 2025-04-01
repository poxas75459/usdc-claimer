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
    "4reynhbdVb4Wgcp7Vsh2vcFs56UrFJtXYxch9fv1xUgL9Cn32NE8CiAmWhbTMEDHtNoB93FcP3aNoYPoXH1wfPgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2phJcDyvobhCLNxowrteY9qk87uVPzT8AQJsFq9imWiPZF335LwNbkT2gGFS276rF7Gupc8P86btsTjSc3n7DwCN",
  "key1": "tioLmAx6zavwaN1AaGa4CsvJmrcC4dKuAriZKB1eXNoTyTvKwLUmECWrnS1kjZt3FukidMTXQwppML8evyXdYDo",
  "key2": "2SwbhyLmMmHx43yFg2afaWvrdqoSzqsXyxx5RtvdHKDvapkbjQhgAdQdGmSfhvD2BF5RXVZnzw3knaPnTetRGJCx",
  "key3": "5M7k2qsr9SPo3ZjZWeBKGuj1XqTjQMbzgVS6k6FYiuzttn5wjXsZgZ8PDvKwmd3nrXuRv9RESuY4HX4MvCkDE6W7",
  "key4": "47mdjBjpuHXV9KfeuyxVh9zUWJRyeE2ajTS72T8hb7nWCQGqRQi9wKypptVCMLZJYBieuXCfq1ZnNM5YvepH4yGi",
  "key5": "3ZmvLJxqoKjrDrPDj4ZpdrV2zGFzWwNoyKWETeWwicyKfJe3TxRet7bPTomWHbJTJToNiJMHE2exukdhVdwJzJjZ",
  "key6": "2PASwTAikfrHRyn3uffgf22sPeCE746i4d1HZkegkkJS5vPXYErmSFErGk7oC83fzhbbGF5USbVCwXZ53BTpbLoA",
  "key7": "4sRpwEGvKr87adforLQjMjUPGPqDtnFcTqqbcVDosEaQrxBKC7rufJtKMgG7pDVNCaBXBCTg4vMqnryjUxrdjUUs",
  "key8": "fDVGthziMcqHX5u32DK9cikN4FUF6xmycDEd1Y6f6waSf563R8qND1GrDGVdg4tmdhTXVERXS8EVCD4Ya6srQD8",
  "key9": "3kX8M2qmhjwPDX7NZzcSVcoZmNT7pukSQrcsQBRefu5k7GK5ACwdJjZCpszUjoNvdM4vHHK5guhr9HSr16nfyF7Q",
  "key10": "38Y8kb5T38JradLcaJ2CdwivjN4yMPdEqYiecAEEhFvcaaTjM6qgjwhZ4Wi6cxqLkqV4RQFz3pDHnFV45ELkvWGk",
  "key11": "3cxPMAPqb7C1Q2WcEQ4eejssejMsRwMi2T1L9pUYGCHeqRm4qyArGcLUQP9xGxxZ5K6XBYHvpeiDAebSgGBxsWfX",
  "key12": "63CXAjxVGeGy1bvvL5317wqXEeWN5eDgAaKVYENDo8gf2oqXpBfN2JpU9X9p1UcVYNhWTE3o4EJXTCpnHCNnZndL",
  "key13": "2Ytr3YUaQGNJmqs9nUss883YmXdHXt1xUqotqTkt3fRHT1zzC8xGfk661FuYe5RpNHMGreBj6L7L8sTFz8qnhS3S",
  "key14": "3g9p7wgurkZEuoa89NRjhaSVjGyq3fP27B1FC9sKgTbKHM7QNoLXWUGJT5xwU9r5cYP1pMsXoaHnganSEEGKWiuy",
  "key15": "4pXD15hd6zKVquBysWpn995YZNZAiDg1GsxywXVLi9sXFqPYWi7YWPJKzhNnVvwU2QkXvM2EsqqXNEvEkXqXSvQ4",
  "key16": "5XfeseMR2yCr1imh2VnDA5z7TgsvtoxWqieVDueebFDcxhvb4eXo68RBGtxoESWv8QQzSuAqsq1kEQgjia6Sp7By",
  "key17": "2YvWWTMQwoZgtweNexXGPueqAPZhULTT6GxEzTgYZiunxmAByksu1616zZcyDhYSKoxQngpzwfC1zVxByCYyPQXV",
  "key18": "2Dj3hChMfkh5Dtce49UevNGm8NEU6rhNL6KawnVE9HDnTDQyf1xrRWxcftneUD8cv8jdA62Dxcz72t5T72DosnHv",
  "key19": "61fFqJuDj2aMd42vF63KPRKfmZQhFHDTn4Tgmc5HxGyHRygXzyMapu5ZuCSMNgKPG1cHvT4TQD5Zj7HDij65unv9",
  "key20": "8vituJJwq6YpERAdVuBKah4XJi5AgWWQy45KzHoyAKaHoy7PyGU4jsVW9zHKw5ah8vhZR4WbSUxJgEkaj46MseL",
  "key21": "S1sAY9omch4Aq8ms8q8KBbCkvPafvWCSZnrzLSJE1gBR5Xdsxqp4vmFyATvBubtBsYiSd4yAALteUd3L3LZgezF",
  "key22": "mJZyRH2a4auHrY1kzzUFTckUmb7E9ctDSuxiW7q9x8iNrDsCsDC3jCTFYpRMG1hg2LjDZh1Bo6yQcNT7y1KnGUV",
  "key23": "5DucSt2KRBqzaBzU8JetJjoymiG8mEm2VXxBwYh1DbhdRf8sWvWRZi68zB99FxgQsjX9YndJo5UYww5CHaF2zFwh",
  "key24": "5ZX5vcedCfsXrdQnroxLvDuxQ2twfXac89nZdhrXYUQA1CpkUbEhvm4yZGpu5xbB8WQuvjQKNr9KWEsW7MGFWMiD",
  "key25": "onDzsmVFgghFvpoomk9nFqte1zyi2A5xeS545rhxDZoM4VCixKUiU69CYTtQogQA9na5u7Z46827QxyQPpYhtnw",
  "key26": "5GjiBnZSBkcc7Fy3EojqFWk4RK13vXV4xZyf2WiS6pc7wjjo377f1oYhWn7Bd8qeY69GDwWQRwmV14pHWCQrS8Rd",
  "key27": "3rtFaesDC7XYCk1N5BXk9KPbotLk1MZ2imFkZ4wZfYRdYkhYFZsg5kxz2dJVQ1DJYuoLTj5XCddvi1nCEAvQuqjn",
  "key28": "heuE4grFynYDjA1iso2XC56MQmoeLnC1LvpJV7U6ZXLScgBaPDKr3H3hcaHZ2RwZ3mieBur187G8wJYzH4cG3hu",
  "key29": "26PKnQMkwVeQYBBRDiRewJW4H5SCQ51w1AECaHPeQDs7s4mnDgmpjPpPSoJs7YMAEZ8ZRrosp89j7vo1MPPcLxHP",
  "key30": "21eiG9hXfw8TZwjbizGZNDW7JFgF2XxdrCNvVAxsq8cNYTzS34Fo3XV9m7xExXhnLqoV5sdZDy2sfNR5puu4TTHk"
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
