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
    "dg3fBn6i7BZDbrUXmrNr9PBQTKQwKYcP8svvqojfGsQhP4TfhXxjBnzycgvVkvnKur8M2gFXG552AhurMVNhALJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s5TdQ7Vy3j5vb46wqzV3a1TnZQ4ZSBrjYvnjmjz5msjhGjuXCtfWEvf4kmkML61mqbRAGR8L6BUtXAcVLYBS8VV",
  "key1": "5oNqUMWEMByqgqMzkfcGhzw6EEuUvKrTktevuWWvHccV1E2c67Kr8oWLUNfjeNbLwVYk2JJq567tX5R9Q2y9qzNv",
  "key2": "5iByhFd68DPLaTYCwW4MQF2U59VqCCFRcYR3zN2pRKaRny5kwT3trZW7rp5kcWTZVsCMtTQPqkdaymvZa9thqymi",
  "key3": "3kgV9wQJxPFuyAGhXKA9zA9Nr1xx821MCWXRRJ5jMJ159tCgG6ncQRkbL2PFzr2t1hWHfzgcJiPZ2wFsP53C1V2D",
  "key4": "4kjTkWdZXGJVkRNwknEk2g4Axnw2BQAy9vAXh3kBJJpoqG5VZiJ77UF6joo6e3gcFiZg9JF3ZvbxcWR9UGrDCTBm",
  "key5": "5YgSDukcjkRJX6WRecwin8whXQ3GRQWdukdY5h3ARRrKTrooXhMSVdYGT1Pvphycy9PNfFasMmRb6eUQfyoCWFbS",
  "key6": "5UHFD1rL1Gy8zQnxPneFXdY3oH9MArR7TK5A3SAPJtbn66bcViQPBopPynpjZ8xftdhCXiTMRn6JDPeTBfc81Z5J",
  "key7": "5KrJiRPLYGBjYk6JnDTRsdirZpXeJDNrZ85npzyUC1T9NQfMP1ev5Bsrbjj9NLgSMdovUN7UkmMFM1iZBDXA2WXA",
  "key8": "5GWVwceK41FZvfXEEhREU8cTPod8HmpsErz9qkL7akrz3YiLHhz3WgYvnCFBofW8tLPZAgFUvRGCfPHb7r6kwHDX",
  "key9": "4tAK1GVTjJ7rEuvSBDv9wsN6A23aPHxfieazUQy1JLhjtGRjLA7rivZcwMMEnwtNTdf9Ad5uGe7NiTNTZmMp6Hik",
  "key10": "5KDC5enLpQsJuQpaw7nx9gcUs3Wjm4L8Uz6BrT5n2sw5gv9dd8LvGAPKzhATBYY1UMyBaFnvuZ5PQJnH6vJifxRe",
  "key11": "2eMuNXzAhJbByLVZZLC5gQ2KnWX3zZezMEzCRwN3vfB31BCURwnEZEyrx13UHBqmzfVjo2REqXCbPC4KTm63pf2S",
  "key12": "5pn875ge2eoN5i145DQHfaHiRKBNzjcfH8GroiGGBC1LcYWKJWvgovUbEqULhLnxhpYPVJH2aHeU6voa6WAyaoiQ",
  "key13": "PkV8Kxyt8Ga2xEKjHT3Z2dxNBkzMjVSi5HEofeAQ9GFSeLU8fT4fq8NCGoYvF4rS5QewD2tnFRNZGwou9G1Kc2x",
  "key14": "3tBbHATH7W6SxQU8mcRwd13HyNqhZUvcHRXPuhdRV15u7LfRUZ7BeToKvUC8PSdjKaZyfkbPKHv4g2SjpS9wv313",
  "key15": "3ryqvaUsW8582iSLmtGxBJhKgMYbLepn5MDQUdAhBw9ScmPduwHUtZ3DUj5x8X2n8tm8Lhbz8ogQDycwCwupR5Uf",
  "key16": "2NvEy9UTxh6m7VCGv2EFEaNi7eACfXAzFi1FCZymUz6Yiscdy2843284nPG3PCusWdZhXzypsbEbkUHZQVx8c3YU",
  "key17": "3dTw4RPEL5nR2SbNpJiZCwom9TrT8P1aZgn3wc3Ju1qAyAH8eXhwiL58kuL2dJZU2VtH4Ywx8ZNKrzUvVgFiCwS3",
  "key18": "VfJ7uZBCExCgzZfCJJzVhjNekKvopqnuAx15obnoB7ZKSLTRQ8Z1g6xAgfe6Dt4jXRctsf7Ay6QwComS6wimWef",
  "key19": "ihtaGG35xd74TuuSKQ6h8Qw7Kt62oAbrLrgKE9fyDaNmesS9a3mUzKzja1fi6zXA7KcRXhpBRZEWqqXF5EvChUz",
  "key20": "3YwbeQmivsmR2zP5MfZ94gCXL7ZDTsjh7Jcxm4uXbJ5hiDKtG6KbVcNehpp97EQBd3p7oYn6mHcdwhE7rFaA8npP",
  "key21": "3BFwxCfvM6uFf1vSxGA629DwiBy6pxhwpupbqXLsBs2JSWkJsMT9Tqh21oWUE32jda9kQQXhZgd8HikxyXAXSCEM",
  "key22": "34rR71Gcp2G8961QZUDAexzgcx1hnZQHoy6JZKVneRKoMTRLnqBN84upx6FWFptdkDZQnw1TBTMRvVVuFePHQQ1Q",
  "key23": "cZ58dDvcZJm7xxLDqBYMjq1YHdF76YY5jMffGcRT8jdUMqxY7e5XjBu8E1Yoi5dhKa3nQBqEEwQCj6uNTGJGytt",
  "key24": "P4BKmoPcjaSxQtwTY29iu1EENryL175xcKaSNQUPM3njhyWeCmKELR7RfUcgNeTSRZCdGzAhqer8BYJSS76AE7x",
  "key25": "35AJf1MrAnomrncTcSH6fFMaUM5JDSNQ3GzmuGmjdLHXFje37rNbZKpdAmdzh17TDYTk6DMSS8iXXuWZ2WPrffr2",
  "key26": "2DACJoJfkCiKSa3MN4mTSQvw2TeTvipyUHJzT4Yfv4TeHzknj5LNgi5auzrJoFbU7nuA7VcKgdPqSw9mcPQ7nPXR",
  "key27": "3VVdfUUysYhbYhAc3hmursXL8e6uWfX5jUvLcMrDVtio6bPLVMb1YPj48gXpc2syU2muLE1Lm2TyNfVTNwZbVmZE",
  "key28": "5FkhWC8MunjExvGgeQ5oCdxryNshCJSkkDAD7Up14eQyjS2fF8RzCCZaAXD9W3UYP3EmHifUkgeNtFuouqkS5LRD",
  "key29": "5UZBaekXcMnmpRESkEc8WS58NuriDtdRm9iPkd7gZWNS4tVKXq6mpHGBAzJ7fQn6pKJJKyVU29kVC9XufrwYmufM",
  "key30": "dRPuHn2sdzAESGpdGLTqgnLaDfmBXKu8f9pQ1uhtFSE5ooXv3fxM34p8hvEbgd79Y5MmoWsQAKh5XzuYhp5gyBH",
  "key31": "4nSnvKfj8Am8teQouvpT2NXACs5Q5NwMBaNggnzaYGVHRoHB2QXh3ZejSYKJSJ7bZmDspp5dfgvWcysPZQwcFEeK",
  "key32": "3L7bnj9vNugJw5zjzYzLTpAX84DCB1Ch3KjiS6D8TaP1c4mUUdR971Hd3a8AwHXAgZn4p76nN6GcygG9n3BjyM9h",
  "key33": "3sp8nuFhSPvaTsZcJmWYqDEGJKk43Zs7NvxBBEq1sbkDqHjs89gQM3pMp21wGuCzpPm7dueA78zP2bbBdG87sdDJ",
  "key34": "ejmASbzfCrRnhiEXFa54VBhda7B2dtZD3eDV9d2goMkEkV4C4osJAgxo88NfDBSDPpnoBno52ZuAWRpfJvAKoAM",
  "key35": "5nXCWyM44VhZra5pvf8g3h7hKN6SLwppJNXBBqmPBLe5FBHGmWHXbDh9Czt2WN6K3gbeTJCDTdM9JoHuAzSKN5yA",
  "key36": "kwhZesGPGjog3ZiYub1h6X1k4jpjpXf4HE5uAVVzSRww419nZ94FVGodEiQNTriFUJK9n8TRaia3wyFHUrRgg9W",
  "key37": "47zvWhmRZVoKxvg4uPQWKfAxuh99muYMvNnMnZEqy6QjvNghGhmt6h3aYiAfmtGhgvMga9AnR6cX6RaemrirW7H7",
  "key38": "2yEuZYFZkXPxediP37xuscSLwVoHNNxucjNeZYuzR2eRHwijrnZEDrWt58wHCGbpZGqCYdS5xdKkKNP3CAbsB7ZN",
  "key39": "4o6G4g6t2XxJQ1KpvqRrGgA9WbTAyMz3eAwtxMztT9QNrR9qj5Vnaz2ZsBYH8kXsDuyiH9U8QvKoAKzPBNzZS6ov",
  "key40": "25ph8f3Ens7ZTJ5VUyJTSPLiCWWU86fppanw5P9q7Wysom1yWzWoLWehSA1wqrTP54qNKm9yDbw6ufmnrPBtDrBW",
  "key41": "5udYEsYM4mVhh3YvRFcy29HV8ww392mP4sCemc9a6fPZrRUPUSBkfChyi41M93uFsVBBjQYBQdH72fWq53AKZ6DW"
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
