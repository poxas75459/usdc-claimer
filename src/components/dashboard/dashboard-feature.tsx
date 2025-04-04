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
    "1aQnmBF1VeFZrtkibu2Vmqx83qg3UGDp5gzVrHz6G4gwjFdXvNs5vTTpKfv7PtKw436tPrZ2ZnFHv2T4Doo96Sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXfLjRzp96RXZSf6N6EG4NKYjK3ZNRNBkSkHwXnta17tGQ3o4jrDByePFqNiXJgRmVGCiBVhh15UYnWzbBsdbyK",
  "key1": "3WVKp361fxBn5iNd1DVzsbnb7W9LPtq3SDDqEzhvL39YMN5Xxvc6AzCaZXiWwu7AL52Ty9h15qfdXu6ZhsWHEjQp",
  "key2": "4QAYqvFBPxu4DSH17Zr32F6Pm8hTebfeuALNZXJRMZ3Lu43Ai8ozdVdBX4gcwjyACBTnxwa2CCp7rMz2T16ibEqB",
  "key3": "2NG1jrk7jW2u8EqdUewqDPDoG8v94s6TkeCAzNJnpbvxArk8yxRNsQJGYt4Axc8X5XYT3mJwt1bbnTVGQhEB2HdE",
  "key4": "4WYx81QUEf5WAYF5CdPiA4crnvLbHPtodz7fyNtAyD6gppNXdHk9TSXivts7d8feqLfaAMBkUrFMbrdGzXatFhPW",
  "key5": "fodUZVugoTrgK5FJ1ng8mUHJmTE2TUZf5TtJMR17LdKEnWPEqKB3ta4mrzq6xm7cJqc2QHiPduQgUj3Eftm9aSf",
  "key6": "25XGR19JPJuHSDFTsQ7WVPeSbyeVg8FQpnZCwivfUH5EQwqco3FenjvafcWxzgaRU4tecSvLzPiNge9T2n9PSzhf",
  "key7": "4GyriMRWFeYPdrLwY42PzZs7jHNWktaJ2UUETS37JHkKpmu9jvjNT2rWGg8sB3SMFNVfeQtAuJi5zkMJVwLvDymR",
  "key8": "3r14fRo3PuGu23gaDdKbMy5hJX4Sasq3NNXahyjcBJRJLNK2JpsaHajt3gM9M7WPPhSFzaDjS71ThqYVazqDMw8E",
  "key9": "4jnJe9nzaAwPzs9JH6TGrSipSGdJ82XKdG6GzXBynix1GW2CwqrTd5ckYJ6Urw2Cq5AwxniVHgVHy3RJx4DwVwar",
  "key10": "vyiwzLpDHS1SrCG2voB5AYiBKQ8Yz13hdWYYYKwf4mhG7gGENvX8qNnv1dbXzDHG182VStqxrDVmZojBDF2xN8d",
  "key11": "3gekvL3GmNDbZ8qdDYBNS33f5fYcUXDxY583kjs7iTWBTirsKQWW5RUuaBWRJVd7WSzbmLa2fFRr9yhRrbLeAPE8",
  "key12": "5MGHuCVBpYfwtDU9iN4pmmVnRyq4r6zE8EKts3E6r6xy5SpsRVkynyao9WxBj2XvuZRzcUJdt76Np4XrqBKgZyP7",
  "key13": "5RT8eLMidsp6tHDMuRXducdeBCte8NbYHsqABUSnC66iUgzbyEwcSNh51Jj9Y8WC7rC2qn36nnLWWV47bouG793N",
  "key14": "DnGExnn9nBsHD3B175biuEnfwMUg59emFCYDckWiC51HoD3zxpfkUHVacRH4d3CAraZBF2gAEpmyyE9ZJm7vEDY",
  "key15": "TdDeJhW5Ako83NVXRyv62c9gyvFdmtdJewSFZE61rD33M6tBffqmZCM22UkjfmQED7hxGmLEs4WFHeHHyrxSHfq",
  "key16": "549tijGneJhJXseFyLWSLayQ3bof58jZ1hWiD62R7RUEBxBAzY3QNQ6QjYhW3i5eSjQ3ZaF7ZfdJMqnBqGmUCv2n",
  "key17": "1JaMx2AVhnvE4dB5yEp5dcxqKQsZnQyaLn8z5aFdrmPgtJEzRPCGo3im8FQMymxL2yL6u8gvmJfnXMP9CA5gYYT",
  "key18": "5MazHsSpqcqcEDcDsM93BANaiPcmQCYWQWcWVmwDHgm7BVfbFRig2vq6KCCF5DigUbARUo1BWdZMkBmmGq2SK7NY",
  "key19": "3EXsifkmfNZRnPZksxFGJtrAgkDFku93QcgEf6NeqYNpd5yazaXgrEAtsxDmB57KNkaoJ7Ywqna76bXjeZERtiU7",
  "key20": "ZhqmuVpjPqtbv4pnQc9CrGZ94QqgfCGhDegZAGzTdqCzjgbYX8d4RM2Hk3g5LWfpc8kf1tuUEp4XW3vTSo32Yn7",
  "key21": "4PhmNPTkpE1QGsgkTs8p6WTKiND3hXd5eeZkdmwavn5L4BJECfd2cjaRSDJyAhDqSRrRmVE5R3D9UtGJvBV4kG18",
  "key22": "3SUot2sgtTccabRDo4jkyy62ZgtKbSRDkFfnMWhWHM2KN3PW2oZFZ7bPnVfcAZ6WzcGFR1DxZWXdQ2JfFLjbFUA7",
  "key23": "iCvmsHU33CQH7wRmSn4UpvqaumVjT2LeRUhCRtJzoaRdvgNYNGj7W7TCC3JPHTtdtD4gydCbKNruNfMqEwZEe1L",
  "key24": "VjSiPif6VddErPdd3sTfN8FUUUH6qVUK7F5RfcZrnQ8W3znjnJEbuNQ2XWC45FSynrZiDBk4QQxSwsVPJaYxszR",
  "key25": "2NCef1Yap6kdAk6wLDjFUtxsY2hyrh1dHYZC541XGxv74xZUbg63geZHo82w6yGaxKQUPoRxwxqbnGG8ruccruqf",
  "key26": "3VFJm4K3pj3yovYLUuSrUoQHiWnCxGNKBtuKYVajS9Z5eW44wj32t16mYKBuHscdfx2pPWJRh2mzPByWrHCzGj6R",
  "key27": "5gYXdM462JAUmgj5YGpq5msxBPQtMDKfTP42atDHb42RXggjdAuVxwfv8vCJwJV27TiRg7WkNnMqZnWvQbLAfWrP",
  "key28": "4doM8wHy1S5FNePvniFXxvMmPzcDfHrTDcHpWCnBoNZVS1HeoAeeJ27rXZz4NbcuMM1SqmJSgZYJwYisQWN7dDpA",
  "key29": "2aK6XKkV9tGiHjUa2towJZ2vriKm96u2yjjHyguDDUZHFa7AYZ9LGNVHScGvMtEi8YJkrG4yw3QQzZYL1cYjX51x",
  "key30": "465Nqu3gwghP7rtGoupv53bUWvyr5Q4re5nj5thx9ejJctG1bFDq9qSRzu8Pm19f5RudArN52wMRzZysHuSQtgKb",
  "key31": "3ity9WMSXWxQjSD3jQ8tgCqUfbnTeWKTZcG6LD6YKhJ1ZW4dLJxPcjr8nF56x6Y2CZiAHaryaykDmftZDBz3nycY",
  "key32": "4iaf9mcpWptshcrx6FnAqn2V9ALjZh6vxgueF7cfN5rQqmXxW3zpJg3gCuwuBuA5ZuA31nSkRyeViXW1AHD4fnKm",
  "key33": "5CYHnWb3aemyiYGAfQkTfbZd1TQDiGv1TLDV9qCGMRkAh7LZmaaR72hmuyrgyH8XprU3YWboV3HYorPXDHdBZmr",
  "key34": "4vLVDdSLn4hqh1rF7hXS8A8bnFFRAWFE7bZYxnaD3ymxDoshCGsA62ZYJanz4VuTpCFg7BVngXw9WdiAxzRwZKDN",
  "key35": "5YBe2Fjhc5naDY2Q8QnsHchfz3G7JXnd18By3wFUAgVJCuH8VWe5swC7r8Rc46umKV1Ng7Jf9JdM5aSVtJHeJHtD"
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
