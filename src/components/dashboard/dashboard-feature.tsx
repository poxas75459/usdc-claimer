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
    "5mFA6oH2Byn4hJjtfmhNwqdftwhqPVqro8HvF3Q7A64zMtpLviW7iCi2AvHMLYQooAH7njrjwKH7UbXusLa9DuLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TsnwJPM8uG73csyRgEQBQ1RNbTFHRok5spUDoj3YHpygrEgohNCQg2vVr2m9Crp6Whd3pzcEfbKbHEQAsv9EkGa",
  "key1": "4WYzbfcrbm9Mo8Aa5Vt8zrNSQ1nYzFwkmKksiceKiaxgk283DftHwz7L5ChnnEmHjhxy33y36iMxT3azwox7m4tF",
  "key2": "64mx8WxZnf6E7ApeooosNBWcUgg9aJWaJtg7UXybWsvnATymX2yg9GJoBWVan7nzwsbKLu356bX2YJFEspgAvBFW",
  "key3": "3r2aWjUvZoVEDSBcKGJfBaeKygNPJGvVhiL5ribiGgPdsrMaut29pyEko1s9PzKfYMXM53Pg4TNEwx4Q7Uus1eUX",
  "key4": "4M4C5EMm3C9TUCFrkVdS1cVy9x9pUo4D7DL2W1TciZT4hPPiXbUks7xrkqigjtM6qsC9ZniHurghrBcyMyoUnGR6",
  "key5": "2cRAzgPnikjEErcEMM61YKtV3vqJdz235ncqj6gMdHi2oBi1xzPBL7vjm7UMVCwKG9CzMYGk7A6NyUnKCYgbS9do",
  "key6": "4xQtEtWakenmUHL9m7qZLDJFfYdoXe3TuNCJTS2Ask84xWWe2mSpwpvgEgH8Q9zTV6m2HQmoY8ZRFBWAnEd9agsY",
  "key7": "2fYHSMB2YEbqtYo9vVBWkSofvn35p3pRLqqJN5orrHU7Afwcipk2zGEM37MYAqmVUVNogw3uHmToMiujPFxDMxQQ",
  "key8": "4AUWYvCE2EQL1zNUuG9CiAki8MtiAD7heFBkQBe7n4Nea7Z4oCmJRhfJdpFupLpmtxD44BhLTHaJjzXdp4yTf4Yc",
  "key9": "2ZBZfeJhrNDSao5n8FYHCYYC6SkP4feqinp9MTbBm2CjjL25qpvPseqXyFYccNCEZAiryDfBRZVAXs3ZSwE53bXf",
  "key10": "U12jV9pqkyQ5kKx1BgaCzZaAEsoaESipBtdNM1DGsFTZPUxZPXCCaqfZBo6NXVCVSUU1YcLiCUhA1pfJ3pRqimt",
  "key11": "5PiQW5wyeAM81Hvj296fcgJtmLkJ2n9fFGWhokaLG2MsVS2UgZWjbB54JWmXsePCvRKkJFee2ubZStw9EFtgLXv5",
  "key12": "2pMJ1BXFLs1X2AY9nj4nFbBLKcwCTvhQuKrkwPF5FKxRPsq8pEYjfz8bZUHoFRTUbTRYuxtPb1XmcMkkrUTFbmTv",
  "key13": "3UR8ijBafqevpsBhEn2hcQM2QNE5AE4nBXJxE9wCZZqt8rv9rVZcEnx8KBSoBvUmfRVvQ4SUFRUXQkRMbaoqB4zj",
  "key14": "43sTWrW2mUKSFpCrMzhWQMqa8ZAnTLGn87xB85Fte4ALyN6rVdt7oGzfANGqR3veb883grw1EkmgeyXT1zdNGvLR",
  "key15": "2H4ZiXxD5RqsQGxhLDoZXBxaLc8ZZuz6dBa7du1RWYAK5uM9Lncaec3YxFdn9qAcU7in1TawtMpXhiW59rjHToe9",
  "key16": "5buw9MkYYhYSK2Fv1nehBZqWMhBm8xTUXntMhqcw3PtNXRpH4THv3ijPLXGzvW2wd3CDxVtD9Xn53oWPdJWNFomh",
  "key17": "2Xy41FajDNy9U6ANw68AEfZkabvRFggmmhRDZZ9rNCu6mhPzonK8NQjJ8KNTGsEcQkiJ5Dza9MiU59jksZXJYcha",
  "key18": "49mVQAnnNHHPPeMK63RCBbrUkX8DwNDdshSVJb6UZWk7mch6dJFabfkR7QYXkUtmyLMJwBEGdi9aqUgVF2CY1str",
  "key19": "NHNLEWL4EzhkU8zD7xo1d8E53idfcwJcJCiVzvmx6GPW2L8nAkT5dThnKVQuc4VBWd2mbgptoY8FZnvjqfDSEaj",
  "key20": "LunAL7PBpEeow9J4q5WxzmyXAx4Phya4oRMu7GrTzyckYiXNrGg8ztfgFqMCcNfSSFGWkBoiNmPekL8ALQUEr3D",
  "key21": "5MyQ52aoK5R1ApUsWJkXaPj54SVnBVicSE5CVnQQVX2GpitZVw2NS1z4T6QzPBg14tkTerewP7NpaJg4aGLe3dJZ",
  "key22": "3PyZBZGS7q3ESzfnMHNNgXawZHk4PtmZJcXgzB7eheJvzsA8ZvQVevXg1JXtpuLhzLhQQYwjiAxtvh7GZDwgR2tV",
  "key23": "47MFHFGY2Wkx73HjqzxF418wdz4MFbKaMPRX8YsBNZM3hC4JCN9qkjnh77oKCp6VhFj37ssan7My5v9dNAXTXSNT",
  "key24": "4E6keF16pd5bsunRPJGk6hBp6t23xkwsKdWttKN3c2DqgBbxtYijsoZW9xBY7JXovN6gqSfHSPk1rJha47LL4jHc",
  "key25": "3MLjAgxVSnu7Jkd5JkXsy3GLhbyEcu2o8MLXYR4zW5g5aSWygdv6tZTa3TK9JunfuQeLupz4aCDqqahKZnTLXJbi",
  "key26": "3waSuZfGkWSs65BRi31bcxx6JVJWH6ezcCD6Z4e7XGvCWRw5Xbmu5DYV475p9MwBJ1bftzkGZQ76R8hjaiGc6snm",
  "key27": "bkDwUHbHWaDFzB52NRS69xdD8Q1GoRbEKGqBTZ8L6ExTiHqmnYTAsHtmhXUoYL577D41dS9spP2RyehU1MbJA2g",
  "key28": "45zbSB58tVCtympXUrXD5K1rztWzP4A3Ni3mwuXGpz6ku2FgQJ7RmtSBDRckWjdqNp1reyG3rQvCr1Af7XWmyAhm",
  "key29": "37c5eDia4FR5wPGPNRAxUpQQh4UHqdtGvqKo2WoYgt3obKe3djv466WgboD8ehs5LCAKEWnqJaQSMZty6Hxhky96",
  "key30": "4AkfDVdycu2H7fHXjuqafYuVZVVbhyQSNDExPZvgh322bTWWUb9v4bwk2PFjbmWN7q37ftqNWLdoLKwrTu6c9rzy",
  "key31": "u2xUGUix9WNTR3xwLhSVQ9KutYJ6TFvzoUUH6Svx2R4J7z7opAXCKGh1pTeaEgA3u3W4iCpbpgBT5LKkn3fZYnp",
  "key32": "VgoZUn5skPNxKthm5HzN3ydzqUaU5gApsGaoTPwHN2941AbiQ8NwzVNXuYg2cpGtSD7WdK4JhJbyqUpD7SaSiMY",
  "key33": "3cGz4rG6Siy2PgerQMsDXdkbWeg8a5HgAGUFHdY8J8UPCEJMCjNoFMtVSQU9SwHJLnUeVDNJMQcLmYFJqsai9tWc",
  "key34": "4zGzpxQvfVienESrNUhReLXDjWedw1RjP6vLdo1C6tGC69jH5x6V7go4EMrfTRB2WQ2qx4mKnYmTiKLnBsdY4Z9z",
  "key35": "3nSfEk2VBFmJS7gDGu9HQL4SDdFFpRTsaWtpc3hSpxqjYjFvvNrqQYxEzypGGoku6KS7PQbeKZ44feXpN72cUxUf",
  "key36": "34FCzY26GYYJBQfkdG26B8GsezC4yrJSPK7wsEdoire4ZbK54B7Xz2wSfRzeDkoibByiCSQd4kDcNFjRoYns7wkZ",
  "key37": "GzjbpVRMYoW2ZAJxMVDy3tWqv7jZRwGepExRWFpCDRtzMG6zAVTW1VKJtbjpsnGvJavmnC3avFbRhLhgumZTjkB",
  "key38": "4RE5hhSGk6rdxxGd2HZCY3ChEbuEbtkgqmnD81jQ3MJtm8QuESSCBqpmxaMWCkMc3yefEgCoW2MkwZZk9X5LDcn7"
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
