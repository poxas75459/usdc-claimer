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
    "5Ahteehor4ppAU9McYgwWNpV2idxn1E7dExsRVdaEKPaSRbRJmrf2a2hapiji3L9EaCYicMJEXVhT8svnHnxckLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g4a5xPb1swejrwmhuC4cZ3sFPZz5vNVku6GCVygYLzmPrSk9sQJcYTfZGfNy3NkGAS7UVt81fkv1gLQr9koEzn2",
  "key1": "2mFXCeiU9GuLXvMch9KUVjAxTh1pHBYu5GVyAmAXduKcaH6AnZbxj9tLsCYQeJCws68CZcafLKPMRTQ6EccJvxoY",
  "key2": "5Y7ErmpDhGboZ2Hbvyc5tjXzzFhNwve6egic3nP7KFbGYYydrQDMy13313htFtMSbhniFvEf4UVq8tJ98D6nAU1f",
  "key3": "4Ntw46Ag5qKFSZVUKEqtWQkH2amFz35ozP9Gv1HofUomoTA2b1obM5YmWQ9xG3CsiQaYRoKpEX86QALQpsVL8vb3",
  "key4": "5shrQkNrzSr8opuoEXza4G8RaxXiXDyU6XiK1F4NTqMCq3zmrBHidK2QDRJx5XU1TdpKLykQb5QJR6uSTwggng7A",
  "key5": "4W8zeboiuUTTaSHmCG6TLRP7KPgoeWgDbfMweutXbG6LbVdPKPWwJSwrsV86L4gdfDmTsWfyYfDP3uH886urkSuu",
  "key6": "33rNgVfKq22b8DA16uoik84kJvFfszWFmfkezur4f1tht251NkYd1yV1ryKbu8gYfyRCZ7YHBh2ZstEmnTiE7Z7e",
  "key7": "4gLLiA7qJduQxmT4WfyPqpHXz3vVdATU1bBA2kuDVQeD2s4LaCqbK4iThw3C6P9M3EaRUuM36SwQsBXrHQaGi9Zu",
  "key8": "3FwFSgGkYebCBpVMAvQFPuYZwpM1XFcooSq8prxoktFRTW4gxKb99aYZg6cDL8AEg13WmKyCAX99GWw6jqYtfWYa",
  "key9": "5brHdVz9c7PdjrF9Wx8rMySB5RfKHwn6FmP74GeNJs7WGcfGuUKB5WPofnemmhk7B1ezJmpD92VTUDCYY6EQ3kJv",
  "key10": "5xR9nGuaAuwT6VSE3ELxwdB4iaqZGMtH5XL9ef76VoWhapy8V4wfUu6SzX7ZvGcCZqH7JZWnswrx1xzbbmZN8ygU",
  "key11": "3WViH9Ay3FjKYJs7uAayBLvg8YDH55YsaTVoUqiNUgAmjcM4S5Ub8WzMWXmPLHZPM5rtE6aCDxHrfMPtDcgYaGbT",
  "key12": "GUn7FmqSvA9vXjjQmdByK6oKbyKXneBokMvKq834gZkUTujNJUp5o7MTuKGafojoxV4VhCfcwZPMRBroCQG8d2u",
  "key13": "2oZaAwJBZP6KMBtpRPU7DrfBMLCCHReTNSV2c8gGmRsDmSsu7S7Z7RgAMM5dWMkSMXBhXYhfzqLqyBDA13296cFh",
  "key14": "5LTXyveuJdfAbF7yFKNA7U8bMgM516rM1BQamdcEpucLCcBfq3x5z5Sjc2xU4RCxMgayuUMzkgW54DLZDUdbWQfA",
  "key15": "3bJNaUv5ohT7d94j7HKN49W9qydQBQVfaNKoSwbKbA6hrx3CEagMyx1ejVqrdX7FSRHtfTcyegeEk6tNry7uHgcE",
  "key16": "34BxRZ46KeX3Chbs46W1yX3ygxinantf7efd2RqKr69pRWuGW5x716FiLhyD7rApajpM1FgHSfbtbZnRy2raFYFA",
  "key17": "4VfcSc7zHnSzfkcidrbcjYmLJ4Kv6UPcKNsNctVvjwaLhbYHVceCN2vuLRB5dadGQYJqHn2ShkiqUt1BLT9rTqkd",
  "key18": "5w5x7zNFvFKcCXa5sxjd7wYpztn6xQ4UwdypajX5LdaJwdn8dWHSoEuwEpdLaCVwguM6Cu5Nmu5cmK8UEZPD8r4S",
  "key19": "cByFonpiVt6uWwNXhUJhfshQQHgJyfKcY17RhwDokxpi2dpe84h7TJ8DVpuoRGo8muzymFWJJyfzWAkF8FaRWLM",
  "key20": "2norMX5od9E5rRkpqNL1RJ3Rr5Hdscrnex4X3em1Qo1Zvzs1a5F4gw7vvimapXKkf5xQCfuiDXoviV1t8phCCZdm",
  "key21": "5f2NTa52CMvmmfmL7NgvR91ykUnuK7ZEciaACQRe6t3iwEfMhjkcrsv9m1JZLdMRhatxJwxJyxAKfrrqgkYdDvVC",
  "key22": "2nPzwdeqzSykMGCopGYGoQsnEn5xPCqZNN3xZGGnHfuiPH2uTeozu3xRRVcwZpyBiDHC9dabAp2UuuML5DftnsxP",
  "key23": "2qZ3jqPnESkYhGQr8vtYytpEBojn8vfDqrasHNqrEKHPHp7GPYscyGuSHaZJyAekS58VuQgiqQFegGHSRzau3hya",
  "key24": "kf996Bv2kX7S42EYBSu4RkUyUvPpixyHr36so9cqYL6NPxq7mp7s7wnuJ3mRHKmHoGWQM1mU1gQH6MPqh7VDbkh",
  "key25": "5pGRQ6TwHo6eBsjgHgnu8EbrGUHe9srosnu5uY1UVqkT3SCsnde1wUxg6XLANUHS16eD2je486X6ANFGcvokuimw",
  "key26": "3KZAfYCDErPrsCheUHhfN4xadNLUDf8LYrtyLQbJ5raAP1gCuS1vV5CRkvZM5KD3sedwhcBkycbwbAv4RWUVEGDz",
  "key27": "3BRv7fDx73eyHH8fcKXV7uD8BWekkqe9mJsTgjhd92PQtAGqsJkZuqThH98LnxriAAty4cmjTEigQtfXY2vE9bGg",
  "key28": "4sf3tnNV7Ty5yxMvg5PQw35g4FiT9CYNEPVDt3uMj5q4ZmjwqteWFUvijksd4R9zicHCWJM7zaUV1cmARS1PYA7T",
  "key29": "5wpaRvC2VmEtRyDV9c8Y2cuahnGTq3R1uLC28Y1dSK7jtRUXepEjLrK1kNevaLk2ivbmdiuGt3zJiw8mFGsVQmbn",
  "key30": "4QnEJyPJBDVe2AHKNLS6CtdqBsZDACciaWT9dYzDiC5b7aiDf96mMZDDTnguAqYAHSTADRj3L89HAmnzCwg5pzcC",
  "key31": "2iP4U7USxjMnnGyJWeQkQqrFHEYCSyhTM6eeULzhRPVVFNCCbVsSZNhDKo2GM8FCTsEtbq9EDEEEuUwSvhHNEHjP",
  "key32": "5j3RudKz7C5pNaaj6PXkUPS9FAEReBrTEeWRMjAhEPa7n2KfSy6Pn2VDQTYU65vMGarezvSAhpALiG5CXm2wexaU",
  "key33": "4NXHYRfXZFCauQsNx4AKXqGewtRiwNdJrkPSHUgtmuxs2QLy8CDx8n2QHz187YzvMZspDEKnmhG8XUcZdNiWmuiC",
  "key34": "4ZUY98CLd9msanxP1uAguzQSqDq7G94sZaVb1ykgrqUEztckHaVayj9vAFsTcEphJa3hH8dvt5L5aoVurSADRAUk",
  "key35": "3RhRp7t8iTd8hYUy9UbzRPe71cUFm3QJvqfH639VTWCSKotiWBdFeMZNsuGZt6xnigzcT9yuaUSggix1mXzW92Qw",
  "key36": "4yrxGCMMfnLDvqfHxPoevdoK3FMqHQDFsbx4x3QfUzy3ubvfF6tFcNEzdWZJ8LmeD2nBJ5jCkXo8R3LskLcAmp3e",
  "key37": "4uexgnBNR8iFahvbyCe1MhmfJPrWP7KoTqwijwuET4khnr7UgPdszgBkAE5B1WhaqhAwtSrr9TgFQoGG4YkzNgao",
  "key38": "3w38B4wYAjx1KH38hjjKmksktH2qwKXhEXmkqfre1HWeheXxqRJ6PkpTnTzGDdFGXsE5NLrJw1cas6Di2G2Zg3ei"
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
