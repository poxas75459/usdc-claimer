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
    "2qeESr76DqnefjE9UFVuEyipdEsMQvfxVUt1DcrN6XdwjXDGtt2euM66Vt2GYyY63EjKUvPcbwQ9c3JZxfLQWkQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TRKcKhB8hayBuegmUh6Jc78FpUTsW8p41GaRPKjBLa1BYyVt4ijWMH46Nrb9WuZYWPmtbNLdvnutfSA3eLgZuSG",
  "key1": "2k9cHg1NHjUxBvwGsB7QDEK9SgS7AF4DP2muKTLefZKQsQ7KXH4TBo5E8oiBbxvnrk1mbZhVgHWg4PMY7Cc2h4vp",
  "key2": "GCuzmP8dUH4yUQhRGh51QCwzc5JScWpNib8P1EYihR6WmwCBKhGYLUs3mEJ2aNtzRp1Xpp9F5mmy32dhScwFXVs",
  "key3": "4C8SD6aJMZg4X9LkYqZAUHXjfC1owZ5FdQ2v1WuFyNEWEST1WJo5TiL41zDPporG4Re9dRYVEHSkK5KEobxfA2uT",
  "key4": "2ShtZGawZgy37YwbDF662eXrNer1DfY8Gap26dfG5AWBCDEwSc7mvymmFkxMvLJAfEwRG4jvtG7NSm2TnCBawtGk",
  "key5": "3o1t4W4jFzXFe6QadE8xqTTeNcXYb3VUajVcj1iUc7zue9hrpCo9cdTfZrX6o1bjRusHuBAqqcZidi4ada8ZmwBA",
  "key6": "55KL7x46nzvyBbpGZAMDs7Ys8vqShGSZZ8ZhStVUeyxJy9ndWKSryLE3QbVdZCbpCGx71Q7eT8BzVHMEEEyoa9Ue",
  "key7": "4Mfn3JPpfb8QT5TFPqga3sJk76YwRPWrURbrzmGpNFhTPMrYYpXneSuL15rSnBuShatZxZbx85wpjCHjqdyFB5oC",
  "key8": "96wrNb6UHLuawvg1hiVk8KRJR1Hka2YCwH6Spw8qdSuhMwgQSMLFTsVFPqnYWgee5ybC58iYqpt3kaEaa9DCyfz",
  "key9": "3FTinr3jdK926QJc5XcgkJgRRD4PgHSPo91m5ycgEe8KD7ApiFqbdzfRQqGp3X6LkT5WsVhJ5cvTo7fTqV849Zq7",
  "key10": "4UP27XuuGuU7XN3sRSRYLHy9gy2U7FhrxCHuFn3D5L7qeFhWdGgBDpPuijeDfgYWnjMSekBVpXGtzoTBKdc135Q8",
  "key11": "5YskwJuknPuZmXhu3mG75eNMwaoC9UyRgN4Twjh1rfuV4cjkezJDRkruvxiii3oymMTMyRSh8igGieYPmjRoKiNY",
  "key12": "29g1CgHG8tXXyieV2ai4FwoUqDYma5Af6VMhDxuUDk3Ds7n2xCDShwQ3jj6uTSxEDuK5fXfcEkYXpatYSa6J4zoU",
  "key13": "x3nwQou9UgfhUHRutWvxAz4xppmE8LKdkeKsez8ReTkd5SdUZhRpu2DBao4yNoA88nmAFvS73fYSVq7v4iRL4ky",
  "key14": "2pUCnFZpCVZEQt86ZSH8NBGj7rM2r1YZqBGW9GzUQ2bZVrjS3ZPB5H8MEaGiWW4tvkAd6eKkdXohbTogvFp1izXj",
  "key15": "3xgsuzM8Ki7xU8yPdnrp9WH7MtpbMH4xLMx8FCU3G4RLSkdPUsaHtcZHDW5nu7Dbf591khSzK2rCGBWuDm3r3Lpi",
  "key16": "4NYSsPwB6daC3q1gZuqDNdfW69APFuWkUXsCWWxmXCvHeJzuuReBpLXsSXvLVkUeyn3324xAzoNN4mfVnkyLBUXi",
  "key17": "3pbpBqZyoBb71QX6FE3UFMU9pF2yRY75Gf7jbM4pqyEjvataL5DapF1nhzG3WoXiWMybnJ7DL2W7eqmURCkisoJA",
  "key18": "5do8ESHPpcAsmo6HhhuwsagQfJFViNqegYC6UsGoYiyGHaMY91TcxuJKVgBsdJjpfARZQYPx8dEryxm7fYEuJPW4",
  "key19": "3TkTrSCTJbD1KjeoUaQmgf9s2oAd66TXnhcTWKtCotFRQAB832PEZygSD8YXsUVNcGRvogNab29f9hWtcj3aHGUC",
  "key20": "4L9LHwGYQ3mGLLBBHP895byK7ayKidy7azgeR7Jdh9nU7sJMWRQsGcTbWC1HUCSzNWp5287ZZdpZQ1WJPvsX1Mi2",
  "key21": "5m2f97Jtso38uNhaHMbshWtJTBsQTzXyEJh17vb1iKuUfGi778EacaWDh5eJky2HSDCAqB4WYYG4KdDVNdhD3dD7",
  "key22": "2CxjGi65xKSURrGRozX957HHX14WRQ4Jk4ESJpXFtnxf36DGUmp17q2f33btMQyJjmwyFSzEWJAgYouzZ7tYZTud",
  "key23": "4cPZFhzUu8EGHrcdYmVb9x2CFi6WpguBRmBxt3ayTmyNKiMQstzUG9wjV92on82237e1px1Tvzd9fvvVf9taZyrt",
  "key24": "2k5hKaeEE44KzdE841UrApodx9dm6sh4MgpqgkLzbEqdTdbkuYVbWq49w1N481CNB1GmkefsG5qAfC7QQEo3DNdK",
  "key25": "2wBTd29sVKExYRfC7WU643QPvpb6rZoPJnGUqkpXBYBo1NwuCnDYka9N3NyCEcYsBGSGvXBtKZWdHTy8ushjyiJy",
  "key26": "67MfbmeTQYNPtwfVFqE7q34t2uWvZ5v51x8i2eEWuuXDXCMryeSJ7QaizkS9S3tF2MyR4A4aPKtzvALrEoQhfdF4",
  "key27": "3sTiigBKASD5vD1KH9bfWhbMqRTTNzHgn4bqQdNPSzSZAbDghMmEcjM1dQkgMhaqeX99atfvqnDJmSzTocbD1MLb",
  "key28": "4PKErM916AkT1PXUrPEbkPjn15zGJvNJb3FDy6d5GCvSHr8SK3g8Uzi4v6b7wbTe8mNGn28wCfmsaXANhGBvK5Cg",
  "key29": "5Uiup97onxXLWMMFNwRx6BK6jyaL5s7zuA1ec4nWEEu48DKCbppZM6k43rge3eh197vnQ6ysPym533yEtfG4wC59"
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
