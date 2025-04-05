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
    "4mhHbaHGkfW3RRHNMz7pL7Sa9zmwouoMW1mz14iDtWVa8YahHksrv9joPy8fNpCNMB7McC4hoeTM8qYjRp3gFGxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xvq1XChmb5cb2R3YoM5yDP5hFFU3pkQPVYigMYYB4bCffPZDQwSMgR9wj7uxrSxaJDH7buqLdtGuVjkEGC44hVp",
  "key1": "3JVXp8pAB9omWH19c75FN9erQGE2vhxjcRgS4L9S23muwixRWDY1AuGThvAs7jZVvu1BTA35G4EPmf8NDnN5KWHZ",
  "key2": "5cwcEAHZSNGadnrXpGoaAkjGSFfRXUXZdWfezGEWR79qdjPTwest9k8yxH7eLMcDS4CfhzNvNj3gmgH8Lz7mGgvM",
  "key3": "2f5L5TVZsaVZumEAo1ChZYq4gQuNv1qHhEpSJ4gpcgZCRqwfRf6G5XXi48LUZw1z2XhY6pq5c6qdSbFq4Xe9eU6q",
  "key4": "9hekDemLoercvPN3gqEcaYMy4nChAtFgypnNxozaZXnkHSEne6MrLh3Yk9CP7nZhfY2wTNbmyvE8sq5q9XpX9cd",
  "key5": "3Wsk87bAJj6MkX1Er6k5Q9UQEEaNnrej1RN1WEQYH2xV5YxcpbDnPvKu8AURE5cvwfWDnK1dMQ6J6WiiLpvGs9Af",
  "key6": "3UWz135PEaQStf3hyVYVWNV5Qxq7o5ungxJdBae6ewu9AxumEcmzeDJf8Y9XCP5WqBnkgUzh8dsoVezou6wAwtSx",
  "key7": "2vQzG7ZoAmabZa4MhDvnBTzq3ZpPTBy89hKBekTgzEDt4o5VMdCkwkEGzVBohH9XkmfJwyammfheYasSmCKBDyU1",
  "key8": "4yud4H7TUuan7Vh1hwRVfsi2JbbMPJY9xgw77ugXoDHEeSneLzKiP9UwsqLUXX7VG2ybCL8QBZGTXgKnNxkDX9qX",
  "key9": "RJ15imfPYYC8GgdyPi3mqfvh8sfxT8DBfMK36YxRUWNYgjUAaVHFP68ZoLLQSDnzsUiQ6oSV1ntQJvyuQWhHHfA",
  "key10": "CrLaJSZB9FwsKbsLvc9YofypQwCu1ofPgnqT2SSyNfbgq6yE91rVDVQ5rYmEMGmpPmpo6amcwSNJsqa4HnWra2W",
  "key11": "5W7e4ewcAdvZQxtZQX8rCvEhnyUE5anqZbJ8Gs9dpMNMi5RgFMEjLHtNFasV9CqgqXzU7VpyhpaYHtgX3KnzARB6",
  "key12": "4LQb3gFV7grh8uLztQE8dWRdrpedudktJpes3YsL1mVToCXF18M5dhdtRnTtbr1SKVh6JNYFSJm1uKjuz1Eebdu9",
  "key13": "24fDLPzbPX47EmYGGJKV4xq3M47bg8MAGYYZmKbyAoHjaAZRD1m7cgqBJq8Sc6JsJ2yS8841awpUBXpvNMo3WzLa",
  "key14": "4ac1WujgPxfHTfUVQp9du3LATxC3UjimJpWwjSaBa1Hr5EzBiPKxDYWWtsqFetyhbVskBRVvqLRZ8BEwcNNrXJw9",
  "key15": "5s8A5vTo2Puzv8mrRLYRSRk9ZU4b2iRBvQfvoweSX2JfPYXp3ZLeQjvyRdUV6GfU1xSHqnFFcD91mvmbVXthpvKq",
  "key16": "3GMELwqgWdCcBxoMZQajhRwq4v9eyUR3sGB1q318C2UUCpzizWDs5GawoMot7uQE3sjrN7xQwKYapLwy6fH4yDUW",
  "key17": "23SxXUkZedngYYVi5hWpNfiApt1LiDg8XQxQUqpYduH8VYVVos6PenM5ZSy4GibMw1GFZKCkoXEgn5Q4LBEsLtiJ",
  "key18": "5MNudw6ofRASgQYdtTPMz2qJHaa7hLX8jPrgDHabtFZfBjjcjnFjNcL6qL2Cz2vaB24Z26467MutW2iF3Ueoyfyy",
  "key19": "3ZgEcnksHg5ogSg9XWbkVuNBPuqH1dTfLzwsq1zgT63gCHVmMU4WE6Uu8na3o6jgWx9N2YmM3kLw9uGMgwGEM6xj",
  "key20": "5YZWMjWaeYJzv3WxVYastZERhTc4gQ3A6naFSq9WRe6cQM95qq3wf4oAc31VGjooZCuSgHxBBCADVL3EzEq9BwcN",
  "key21": "4wk1EyJaU8RMkoK1F99k6fgQH3A8gX4PdCu2ESGGi68DhWjWWUmNJ7L4LdzPpZf2H275mfQnNbma9rPQ9rrrx6zD",
  "key22": "44qVZu8fDMGzq8EeAUddwCjRCm6mt1V6MtWopuj6Tj2YssTPWBJG8AM13v79Lcsx2LwDvQoRvdY6UPpQ1VUGbvcN",
  "key23": "2VRXondaza3KJx1e7oRtW1hQ6dxqhGuXd6LH8sUJ62LrqwyrVWeDiusTrAtFfcTBBAqRuzFXhwopycsSMhtUx93y",
  "key24": "3DgQkN3889zQ9aRWWtVA1wxuQ91R9CbQxcZf1nLGHHg4NXyi2WAz7LmCtojCWvpXiGiRdNcDFa24816RATPkT1wV",
  "key25": "3DrNLFrt3xYHdcJ9PPLg7RQmQKFBt4XcQqcrSj2gEyCYqzHaYa72cME8hKD77tiHDAxKT9qKdXGkhAEBPhVh4uMu",
  "key26": "4YxdNXRT38PstFW2rxBsc3j18Yqyw7BW3iMZKwVKScynWQJzPKEKWa9yM69ekJN6b6H1LVhEifZfDuedhTnazmh4",
  "key27": "2y7P6eMNy1znA7TzBgjAZvd2mZ4LTA48a8z1gHHThoFxzNrpgeqEMVkMzf8pYjaRdpj6his5rSjdRSPm7eEiBMUZ",
  "key28": "5N9PKHH3LxgpAsKPm2puK9DLQ2bU9hTi1sJxUkTLEdrDsi3TASfDQx23UHSsD2q4tq7Bv4L77n6JnatrixRwaUyq",
  "key29": "5N9Wd3y4qQgE7Q9hduZcL7j2WU9HrEA9GcuN2xrGmzNeGawt5Pk7MVd7q3Ucz8EuwkucmEW9Sm9kAee2eDtSrYxs",
  "key30": "LQyBFwAPp8ohEagoQNYoj2qczQycAN8BCbrCFddaXzPFN3535ftMisc8YMHRUXsR5BkkTBaoW2pc5ve4GadjnqD",
  "key31": "34hF9QzjMfP4CmS3wACe5REkbBL17EBcmqEFgUBDMDqKy4EBkdjouKpWosQvm2r9V5mJVeQR2EQLCSzfBYhCTYQk",
  "key32": "3AJ8YgUuZdwqWTZPjx4cQaZDHcTeSkNcgBA2NestprE5kSCjh78gVHrrk6zCENxtimRWLDknaVMzNjBKZ4hzMsJP",
  "key33": "55fxdZhLq4z2SQhoPfhEFvdpob4GVuC8XpxhtKNnQVjR7BbFvsdgKixa41s2ak7pHiQcukNym9Byc1X5qLtCEpRW",
  "key34": "pKvdbedsDDVuiFezdYZUmnGKjTTw2AiAAX5nut4QE5kTJm3ooZ3kuAeAqiWZkK3brzGidGYTFufVvczqLBvcrPY",
  "key35": "2zE9Z91coEbjZsz453pcjDWyX5VmoGcJmifa9gRR1q2jRLo8GPDsQhCWM3vt8JhoKRDtqy8CAdPMwbdoTmqvkRug",
  "key36": "5WNogWgRdSL2w1ZgrBKMGf8jj3x15mP5SbRVTQZ7Ca6CmfcVJUAHnAxPhsdyhzUvzpGMgSk2k3uSSzJg4k4hLY3Q",
  "key37": "44TSUJ94UJRjgCdPw9MqTZ6eboCrnTvXY5BgyMYroSPCknpcTTdJZSytREb25uAvjwXkYpuxqdqLVvrSvo9zpbut",
  "key38": "k8iTFEZFeVEdiSXWV6oKLXSTDJSv4HgUwJATu7PLYW2BzLiGgUw8n3hEeXqPUcbNM1LkzJPS4UnkN4pvdDztiU1",
  "key39": "3SmHhcp5fpMdgWiMizA7wphqV2iuqn287y3mXP9LDeCEHEdtg187ChPo181un5hfYZqKQt2FoccBkEULVQPpESBg",
  "key40": "BgSUqB9dXLqctj3WrF9wf2nd1CoERu49RQk67d9RudRkHFwAy7BdyNTr8Rmk7VnyYP3p82epQHenhhSACdCAjsi",
  "key41": "oKR8NfPWboqj5kA5nAm4LGrc7WLGnR9xAZfXTuqymAYY4vkkrmn2dBBSWGttS2UDnK8EfNKBaTiha3P4g8dzhsC",
  "key42": "x5NSuuFUdV2ZG52a2Z1ZG4HUpdidUffaPfG4eBvBvpdRA5AiFdbSis8kyJToP4WhBKpF41QmjXju8aG6XtdqDSL",
  "key43": "5RGj5cg3g3KWanniLATwZjEfrVNH2WS62NamsAcw4hvqPiTbYpdK9G8ckmvvArDesW5sLtBPDdCnFQRUUUgYYT8h",
  "key44": "3Csx1BggYFqWzQ6XGPBey1sNitWGR4bD1recPdnGfB87uJxzyY8g4AkY5hLSnj7ehXzWkcfRybhBXsDAN5Sn1cpk",
  "key45": "3mAAnA5AoABDBVzCeeSatRrzhiX4LkXfVBbqYxtoNYHJFr9fWajUKw6vVhGgWMAAWbR8faFHXvnk2Sn29kkak2Np",
  "key46": "2KdmmDF5ZJTdrAJaesPtfJS3prNBmvEzu4i4L4Z3sP2nFpbqwkMuqxQKBhiXE3p7WSh2TcpyDD7e3dwFafXRJ12n"
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
