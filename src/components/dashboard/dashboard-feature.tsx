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
    "UCPK2youUnJY9nCaevmMDQYhkWkP3ie2xeFVfgD1N9n4keah3xrB3zGkGojkjdSuGM8caUqdG2JF57E6h1tg4Jd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H22ZVSWNEA33ryk5rTWE8pFPWvwkHovHFe9EXjUXmSAgvGHK9sGqJUNcy1snvLXfRyL2FY2ksaHaox9xnXXKkJ",
  "key1": "2mYJxWHXjQRzxy7qyCGC3MKwmstkCKDRu9Jm5tgPk49qrcPTPVWhfPacFowYs6PbUKcpRZBRK42RhYH9hrtZofHM",
  "key2": "26K4X1nw6aF6tfu5KCG9wKE4FhTjyy6F7mT8K4uH1zzr1yDebT34MFT2fyRTpML2yUcUhtsKSacHyiiebaJTqZ7m",
  "key3": "4YdMCtnouxMfEZgv9KEQ1g1CoQtCXVqTV4dVEW3LZdh2XpuWiwdKLfnh1jHyZ9L4553TmBURXvZNmrSvyt1bWiD3",
  "key4": "4hQ5UNXXrnvSGaPgU2BBB8641KRHsrdwD2hVym9XUgoaKhetqUzoEmxQYAugoAW5igj6sGvwUywR9s54Bvf7TaoG",
  "key5": "5T5R5mikspKhf1fhpTStFE91KRb3XtXsVmEhqaBsf3kbFzyE2XACxEHWArWSiYcFHyCrPYn4hLGaaE7JNnBbAXL8",
  "key6": "3sZmE7qnddbPsXKf3mmfzRpHn7ZmvpxVNAz52b7kspTaGrvGkpa9K47yTt1dWFwaTdzeG5WjLTntPtJ8FS2KkTwX",
  "key7": "3yjr1gL28DigQfZW2Lj4HLq5vhS5TE6twYYqWvQJGTiGoNjouZy5Hq85trJUZteXznmfCTXu17euVNt97jTniXhf",
  "key8": "4LpntMKk4Lmtdr495X2675mjW2xZ5wvk3cvU1KPPaXrFLWtoNQUM3omnFghJW1QvisyjDFZFTbw5CVJxon8UpqQc",
  "key9": "2KFoJ52FiKATZ7WN6UAeP3VeyZgEwMqk8Pxn5QmjUYHFDAt7Xzm6djthwoP9eKNA9oW1BmyphpdKbz77r6Tao34A",
  "key10": "2CKiP1JEYEmKedrmcqxdLJqJQsV7JDkJMZdeSiESxMTSDwCNfzew99hi1oJmcXN5KuzGcNo3RFJXhuuAkoj91K41",
  "key11": "3JtpMFM7PP28V17hhMcNitu4Ach8jQ2KMwU1o6vVQQ5wZ5Udt9GKMLqng17911zraSagCCu5cyp4aSaHvxfD8RA6",
  "key12": "DtmfJJXh3sH2hKftxE34oGhCUVJGs4YNJzGiVT1qUWPEAQLadCTbHmNMLf5h4yu4MgWJoZFZdnxWYs1osAMFD1Q",
  "key13": "3mCGKkNyaYVYrWtcryvcYsu4wtrPiXP65VvS2QcAywqgdfYtWUPMhVbNqNSjJQntBb8an3kw41m1GztSNz8wdmXZ",
  "key14": "3J69gYUhHejvFnKXcKi1EP4mfwPS39PLkEf9CvFfaWheip2xSYWDPoUDGKrFL4P6ZJGLuQyxruFSDkC7Hvn3bj4b",
  "key15": "52gXBqWaE1f6N66yqQz1KJXo8Z8qyCbA4Z8NbXkMsaGoA8hEtXZW5aRq1nCYDY9h8QZgchEroA1EijymC3hiFGrj",
  "key16": "SdMZpwsNZbD8rHLFhZSgtTDF1Mr7eRyqDqRaMqT65jGnx6eFp9AZKhQzVQLj7DgpxdC1nGKkQDxowQdPphERB5N",
  "key17": "AZP5dWoCUoSYQnweKJCg8JFFSkjfUU5eVii2FS2bUjztQVU7QcJ9AaVt4ZbQtmhHcmM5WEH9zyjoWhh2pM1qFKD",
  "key18": "4ARNTukJ617zEkarLVEdirMeqY7J5qFtcFZ6AHCJsiXi2HkUcjVen4ZkJtbocqpsLCsH6D3rTuu896FhU12XEPbb",
  "key19": "4XSzHEZ2GVb3NCZpgHZ8fyqktYLtBLDxDdxJ9VSsmiZR42pgE8KYaV2bDvAv6viYUPzR4nncMAh4jjUY7KUM6KMo",
  "key20": "4ethYAvGYaDT8PAewBBVEAwpS88ztJJ3u4bkknC2fSio5AuT6sPL4bDkA9X6DFACYH46zGpB4y8bjzc78gfjYHdW",
  "key21": "3TWKmB7GF3k4TMgvB2sYoSDLtQCgXkVVDQVTP7ubrG51q8SM9g8UVDLj4xVKFVeYByJAkVEM25TtRhPFrs9tqgZT",
  "key22": "3hRXisMr5JsRSHEVcYYmNn9pYWS7epr8CCStXqpxF2KyhnWj41DZjhP9B3e7n9c5TNCc8yyX1EhuyRZ7q9m1B6Fj",
  "key23": "2HpGiVkzwpfMNmiFkuCtu5WSM4CuSoLmxyNyhuy6wwTVZ8H2uV68DV1rui1M1hmzeXikQD2SLXdCF7rNCw8mSAiV",
  "key24": "423AviKeCERSnZQueU5YsGGda921yTpTccEqzWhKXsu57xCnvQdE69hc2ukyTLgR6yg8P1RNVvfi85HP79nfJYzZ",
  "key25": "5hDxB9nBazPdjfEg7XPk4yQFuCpNZAEXWSU3qEL7VqoYeyFhZsnUXVNQWVqKaqXgkumNPfLMA7HnwUQA4CRSRL2C",
  "key26": "3zNczhdoMuPnDk841K8YMXfNBGzVgNUqUDqVQfrRTxN3zhkNshhQg7DtfrKAvpY8XjABzfRNcDdASURz3D9hoshT",
  "key27": "4M3JUqqkF5NJAqgGHHkSQdq4TTqTdchwSotqmiQsJfdz4S1vg9Ly5uyXk3uPiTYSd49a9NQ6jMskmBJNz4mbd9Dh",
  "key28": "C11b7d7NpeMPekdMdRpWYga8YeSb3uMWLBtG3mRTeLL5XvVL7RnN2cjVuhPuJt2j4T1Pp7dA6QdBLSyDs5nKwbb",
  "key29": "6194bgAP3WCCgSG9ovn5iMogKy58UbstCxJkFwh4KSKF7WMn9We5nTZBUX15ox9G5S3PnM8AsBQKcNa4xJXbSpFv",
  "key30": "57WPVVQCu5JccuCYwnRS3q7UyzXbxpn2HmX4dP6bRkiUJ28Vo6guzS3rPFWYrNZqSY9HrJEWEgxu6rE69QhJs53M",
  "key31": "4ybUAhtoN1aQUqU7h8RdYzPNtCzLNQQENyp3agBv8tqwVqVC5UtbVbAZ4HTu69vMbEJkzdBwJysFM7yEYZ1tRM5e",
  "key32": "CvKKYGTqb9ay1nBE8R8CceD4CTpXTpJGHs4zEpbk1nBC9DGqbxHX6g5css7MwQRt8qKMeT4UrFHt5wTovRANeyP",
  "key33": "4kdpsRN4xBkdUto1HmEtokZqCNE16zd8chu9RYoyA4SyLGraTbc5SxsZj2PPRRJuSQH9r886vHrxZYZ3gYaNJHhx"
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
