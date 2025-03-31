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
    "34CyW31PdM9hR3r1yFFFEZRz2kfHi4b5B9FrgjVqnSPtMz2kmpnJcwncN6AqnQk7V8ru9ACZzjQewxgidRoLf6Ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FWdyFEccuzedvH2vcHkCRgSU2KhADo8nZFfwDV6nDzYDjHbXqG1k6597BVpXD3CEuaphHJm2ae5VB77RV1aYxKi",
  "key1": "65eL43TtzKWtduSLogYBwcTf1hjZzaDu9ECXkNmTB5p1GM6hMPdnAsb4jsHDqcy5AmmWxxFcW4ZTaT6C7C6Grg15",
  "key2": "2BbGkj1WYnSLBZ2Dj8FFAPvBjUF3cLnjLrLysfEFPm2bxuLqYrepUBqzD4n195bsasFYc2Xg8ctduvDWuCHo3dGg",
  "key3": "73F8NJq9i8DUSmwsRTsV93ZQi8znBqswzcQ2Fa5seBAiFvepZA9DyFyR1NQPHimvPnHrziZtD3UxQwzkGuq9tCV",
  "key4": "NewQ2guDEB8PLvP8SNgZVfsX3gPixfixeNgbz2Ub21sENXiEavsCRdKqUdXmUHc8xY85867YLkg2NEa8JzQ8ua4",
  "key5": "3SDX2ETVrY8U4Us4QDhAC5hJf99ckcDD97Vw2yBEaG9SqzT3ohb9ZPqXrfnbgMuX4kR44MJXaxJbtTC7mqWNBsSK",
  "key6": "4AnxaHqTCWHVFdVGT7Xwy1LZABjocgGBKVgkWoy8NYgNKq77g3UDJumMhZ13wnk4ddWP8ne2CABh7BKACJ4Jr6zL",
  "key7": "2X5t44m7EJESSxqE6s12pmCdDe1pdwk6JJ8ici3qqmLqEWoYjyebCE5RTYeJBsSWwYgzfZH3uRcy8bqNKCximrsq",
  "key8": "DxCkhghCwo21moQKQ2rPcPJfJiY7qFiMWtG1pKFaQjCDY7BYh61WXjqYRmHfjppvHLj4HLZgKa9dcUFJaZnc3xs",
  "key9": "2nqBq1Cya32xfpFdnZ9gvRf6jEWmpwxFMtZpm98meewwfU2cvRwtphU6VLQwWnmZryrqjtLtJort4nbzaG3vS9Dx",
  "key10": "42Ru4sy69XhLz77rbUBXMp51RWk8kMNaPxXSu652N8JKeJDP21Qy3rB5uBNKxswMi3acJBiDH3TDorkHF7na9D2C",
  "key11": "4tVVtvSkAmPwbFD9RRV4X2io5frfKs6ktiJQcVQJE3bNhyvpW6evAmj4WQCSbWSBSmWkCqims5iLGzXpSkcjGreD",
  "key12": "4HaNfZcKkCWKbrTcCHLBH57EQ7ZmUDPz2yNjSUMDWh6qh1bpgoNdVgZ6QCnJ2szYES6ptznSxhXPZtjsDckQSkgB",
  "key13": "4x3ohuHKzcc71Bhu7q7CYsXGBNAHH5JadAFdAboWazAbDCBf2JdN6CQas1RkXXEQAifHGHJPriRwQErFTxyV9dyv",
  "key14": "zxrB2i3YX6MiQJAkL4VpBULWsLdvVqy3Fxfz6BeczGNGnCvGMF5W8LgqCF6gsYpJb2bBhLgDHtdiQSC6xi9Nt7u",
  "key15": "3GXzh2GTYddApEtjEU1gLjk8J82RTxbNJiipPiaxbRTB7MDBZGRh34JpPwevxqVWNikzEocydDeHwdH9AYyUGB13",
  "key16": "46FDoQVyVWRSKsAYnm9h6PcxDDRLVZjDnguXv53dkrQ3X24iEFgw8ehcphvfgN48WWCarmngyVb9T5wxUNf7V394",
  "key17": "4GYb86CR19Ys9HHBNvoZvodFnhM7YySYSQcjX6jfpyXFegL7VJ75AQog2KMiy2NVop8NXmjzDfe6iedVjRjx7M3s",
  "key18": "621fsBZ1sFyJYAYq5AkEzMSTSmF2QGQEnD9UDn4JG9SJTneCtvPWsSwnXTNxDLjAVQ3FL8u8EnHMHDCvpznY9whL",
  "key19": "3VZeJDaJtuGENdUzjcFL5T2f3nNVRAsGHutcwBPLMTQJCD2ov7Mo3s88kDprRU3FRp1dnvLE96hyURYD5YYFJNpQ",
  "key20": "5XuZcLNYca2Nbac5TgtgwPVJeVUY36LKbypd3TJBbmzNeBg9CtZdevcvSMLbQ2c1KyDkhA9GKB8z4FFf3T429HLZ",
  "key21": "4goyBsMZvhnvkKo7kgaPo7fpuTCkMH7rshpgpHoX8nMU7KCu4gNTnY8moRf98p4ZJVEWHPM3xvMgBE1N5r8Nqjud",
  "key22": "25nXhccRgWSy4oEtBb7oTGEou9w9Q8LnNqNPPy1wD8RBdHdN63Hjh5ZJWZZSpKPru9EhhZxSaVRhDeMd4zDErfqj",
  "key23": "4EhCxhN2DzK3kjRHGzSPjUnJyn4r2zhNxbKSTGFnBrsirHq8wA6fP1fKtEjzGLnsWLdqbr8N2Wo6AfEUgidZmGVo",
  "key24": "4ZimRaqkY29GBCd1ttzBf1d2dxUZYmeMG85ZsXK6a8WJv8iozziEeC1HD6guDoGeJmPKLLtXUfSVoK9UKrsQCJq6",
  "key25": "48z5e7q4jgVptrZup336m2L5nUgN8wPL2T4orMECFV1sZfJQimKRg4yqH9iTUG9KxfadmH4AxGDQpbKw6oqhqHK6",
  "key26": "4EGpqr1HzuGnAmfVBRRn2FtbkqEKbcXXpUzv3yr562wJXyM631PyLRKNS2b9H1BjjDjHkj3fBdvR2wxaiKN7jogU",
  "key27": "5ErVn7XXMVRY4hBtj27988Wo6hp32wZCPzzR5117wx9BZeeFCNwFjCCkdQdcxwVJpUhYRtYc5ZRSWdjS6br2BDE6",
  "key28": "2EeCXdsJYRuyryKZ27TWXQUFRQPWd8k8YUhqqzRo6Ag4spEGK47G5P6HyN9dtQVaz5dzfvSPsSMM5L71HtptixCz",
  "key29": "5By24r8ReJBUtg5eiaas1hp4vTeFE3SdMBxCS8ECrZgbGzuobfx1BbNoohQEGiamoCycAEnN4wzZbKSboJKCd6Dm",
  "key30": "2sTXzt5iuMya99sTkZmYFwN7i5syVVHXdhUQe2Khtyro3QUBQaxjxEzacSi2Skzt11FbZgdtzX4kLth77ypCUiKg",
  "key31": "3XUCWbBhs4RJy14nn8TaXVpbV5SUxaD6gkuTnA4pAoPTmkoHRxLxVtNgS5HubNu1fjqmKkVEU2sVJsunAWh49Ws9",
  "key32": "4dJMf3PMTyYxDJ4UpahdvVubZYfawPL5ZwCeYQLY9R1GAeXQircprX2PfEyQEJb6cqqvuYSoPjEKzbttx57NBRi3",
  "key33": "oVtCKV7WaxxNcn1gHhG7z2ns6aWQiyywEp99RQy5FnbMsy5tmXbo1Sphw9LtyAKmtenYc3TowCsGbVTfS3UNij3",
  "key34": "F1JedHMMJVLzbvhT4QuehWkQo7VH6YEzzeotmAJaAtXR1on33VAGVj4kQebVgnEVxzDyAUtjuj86ifSLEi4kf8j",
  "key35": "65nLWEpqgAoHXRA8Lt3JrGDjrWJ8M3yMi2fEZVzMVwvaqnZWJC8on7u1N5czfgjbebbwku5iVuFjgVGoMjavGJfw",
  "key36": "245R8WAWZdXBCiTuJLHW5oTNmWPi1d3AEZWX71pz8wnZAYQibRkr19CX7ZcJD7uZSkUFq3vxFfypBBQYr3YNoXzc",
  "key37": "4rmD5UDVYiZ4JvM3S2PWhGQ7TmygGYZ6BUGGwg7jZ6FLMvYhBThZyTsrCbXSBgB9y8MNeDpmitn3iTkZX4YMgbVi",
  "key38": "2iDWKevwC1vwXvEAfPfACga28a22iJBdMUMcvQs3pRFSc3bmqioqt2hfLtwWfzFnJRKVXmMHEFiAKDvfchnrEpkc"
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
