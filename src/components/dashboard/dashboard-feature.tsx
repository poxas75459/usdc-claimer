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
    "3yzp7AnN8s52WxH5TkkyCgNqqFvFJQ3WL5w3uGBDue2UUizo4EWs2QwYYecu59mp6c2gy2QQUT9oV9V9jPhAENsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jFZvqm5LNyNCraccNgmZ1uKHpKGQNH1iwAWKaq8G1shqauzjd8xcNUYpXd8Fe7STMh6kJWnZmStGzc7ehvQM6RU",
  "key1": "3QB8DJSa5uKzhX8VHkXYnY6YrLkLnMVztCywDBxfXzRRGcJNMttPhcDgfPXYHLFE2gQ9LzP8CTvgwoTiEYwwJzRR",
  "key2": "3XFxQ6PCMXzrgXQpNdrrJmVq1zScYY9E96M8f4qLKbfPH3hbNoaWjud2AwRbD1no1yZKkuo54WznRLU3ewTQWboV",
  "key3": "3aLGjhzivqikBYrP5BUJBg8g7SgzoBvsXWGM5B6SgByMjHux9YtkPZQX2TLBXY4xWgxGaDGJwZ9PXMMEUoTskxfT",
  "key4": "62DonFSySUeMdXCWq6j97mKnbAQxjcLPVdUHgfcgCtdEudk6T3vVmom8R1vfS1Guthp1Tb72LzQccRnpwJrxyLom",
  "key5": "4gwnvtsZet9Nssjo3K7TU4YMpBdbn7BFnfr4arH4ramWhB76xoKfhm9oFZKaWJbBNuB2JxKJCcVEToND9vU81USc",
  "key6": "2hSYTF2DAT86TDYB7K16LcYBGmJ27Nq5cckHuc2m21qhDmp52r63FgdPR3pZjnD8Yw5A8Fk1ZFcNEYmMg9pnQPX1",
  "key7": "qiK87R16zUoc4WVjwCBghaZZBbu3mFqoE1GckCBt3yYNE3g4kF7YLJLzP9dJzNQa9a49cprzg4JtXQEifaSdh2q",
  "key8": "52zrg47buyLw78dYPgrosuy1BdsJBSoGpe1T7mGZb6qYoW6z4xBSd2drynrhZvWZbY9H2cbhWATcPKcWqVxwvXDo",
  "key9": "64qrsZktVESwpTNBcbcKjnKwUuqPZDNb95qCQqV6yckjvXZvYsbeGUkRJnaVhEnPxMwCh1zkcA1GgqnxeJhJdWbt",
  "key10": "3iNMtohTsn57aKEWFKQJtZW4Em7NTrpAFXicJN9u7iGq7VKR7L1uCEHFrxj9BR154t74m5GRtkyiJGb6m4R4KFVC",
  "key11": "3xDXcYnkR8mQdG9NFLrbE99UT28Wa9jizKoZgfjbV43CKw5pHd2D8ad4WAJNYQWKmAM5ypRLfPuo2yDbgNC1CcKx",
  "key12": "3rhG3kNvpEz8xuttTVUYgjefdbUUuQVznGQb7WzPmkQuymd3XMYVYHnd8pwvhZ81hDLpNKQgKj6uWJeKena2JwPC",
  "key13": "3kTq1jZpmhtW7arwnQcc7iwDLEfpGPH8X8h4KW6d1HzNkTM1bNNj7yr3cqoF3oDcGmYZRZQGL2tqQqufK3oarYpx",
  "key14": "F65qThguj7BqohkcHJHrWK8H4rUmjDMSsEbcny7NEJcLXZjmpwWRDHResdnFUZN4yfhD5Jkzf81UQVRxxoFkJYk",
  "key15": "36hYiSVbJgdjE5LTSrv1hWHJwNcQipuRJr2KFvNYUWvUPnMXmaFYQVM1Q8N7KXBz4e5tiWoDjS1Uffg9p15FxXCv",
  "key16": "3PC5Q3hBNeGudeE6V8yERc1uXk7YMwPwr1anPSySdxZ6A3rpDd37WApLAX6YAgxTUr9gBSSBNvoeBYcvghVvXYbW",
  "key17": "YDgiY4P9av8KX7k1CC4hzwBfcj3f8EiZLexcUPezBykpibYCtm9Yp3a1Yj2DZdxCeVbUV8g3FuvAE82BuqCykxV",
  "key18": "2n3zAsq8AJmVzMA6f9RmhtPmUvzi2GM8UuvNaSx592Z1c2WTuWx7wgBneTJ1hLwTym22zJrrbc2dPSATvBQByQBw",
  "key19": "wAEFYfTiXR4Bch5FCy81XPrvLmHaGoPHwEd3D6XG62i5D4bkSxQpMfBrCAJbmp7YYuBKZCYJvPQKB2DeHFKuoUj",
  "key20": "3N4rN1WscBFJxjevCDm5KDEqKPFqJXs2Q47A68eMpeVryE3HTNyBgG6VS9dZBnDTUfHXa4wQ78Yu3NpYhLA6hVa6",
  "key21": "56D2tZTMiAMruMeZzbvuNfdBxipzWzZ3rXY4C5vyNC7wG1uNmLMvZuQuPYvEh5YNemXMH4V7fdpAVAo6ZXeqN7PU",
  "key22": "FfHwJFBGRoDL2HfbnNZLJYy35nveGLgCHw3o3iwt8dGeZt3jjDcUhATtGtUQKmcChhzHtnWovCNmk48RSTiugRF",
  "key23": "ye1wCpNksRhZMFE9E1637uxKSnMcoqvv6KVRvoJTHQ8cc1E8k5ToTAB69wPaQzzEsnfgKQoBgQWXnZPddPC4MSc",
  "key24": "5AUKG9YSwKErTJcDLvBPDJzxWpLj1zDRVEhi9yzfRe3ZXXguW1Yk8PCBBZcvr8n2tyk6oQfKQeW6Fixu63awisnu",
  "key25": "pJSuCziH2gqMfenCE7w7vVx2twncYRBTxCAgZxTaZDhxpDjxywmfTsYUPnXSpa9S7vgkhPMUPBJRzKRjjfg9sk4",
  "key26": "4RoksP6WShjEuooWxju57i22XRr7wo9ZHdsQhZdK56TMR9Fxcz7a5bPKx88u61vT1iE3ieiGm3gN6feVW3tdhzBJ",
  "key27": "woKmmQKf2naYQxfyUKYwkMhjaHtzXFJ5zwh1jy3zYKfk9ZmULSR3E7eVaYek8Jw394zntx89cHNe2NYunuxynkF",
  "key28": "3SrkwPTJvZg7n8qMSvEU6L8SqSwtnc7H9VhHJeouRNJBiFKZCkTtJDTkKbewYPothL4q1k5F2788c72Fhh81wv7m",
  "key29": "37i6cUJ3DHEpkDRp857GDhzjqMPUr44L9gQi3G48RXfsMkQBHDYHzVntMNeT89W34cupBjgRAh9x9tqYZP2rXhxL",
  "key30": "4xAcAodCyPZVYS3DbsreVEy919F8aDVoU6iRvoJYqtNrYWWgbMSnEEuWVH9rHs6BatBHzawG4qUFrQd1V9X1WUkM",
  "key31": "qQmAED4rFa6rggGDGKbTHa953e4mRCjrKkrJ7QM7u9YE21vqExzZFAn2X7ewDo7ss7TC1AYmhpdJJZgPrhUBmAq",
  "key32": "2W7e8fJx8kWU3oZLk4ygXPeCh6EqoTyBfw7JRAu6mrzwxGoLWpxirRAsCwCufPftR7hd9WfKcxEHTt3sJJxT6yAi",
  "key33": "2mNPN3oMizdGGCAD3xg3D313yqyvqcXwrz9s5KkYyzYRnWsZFNJ9oVny4E68zp9UgGbHXyNQ5rc2vd8ZCu8hL72j",
  "key34": "3Z5ky5iyt2MUJ1mDzJ7Em6JyYP66o3bAEXbtwDfkr7aFxk9bVA4c5vf5wSoKLLE6A99L4yysb63FhNwTPk1hLDt2",
  "key35": "g2kpV4EAAPwBiykAAruT4yqgarSrAAyuP26noqSnk3TwufYZeypGA53GPyGnmF4KWKJJRvovGb2BbDsGA7fwFv6",
  "key36": "4vWk9hy8Zzm2waYggdEfb2JXA9kfjcRUXwXjzKQxoUvpjaesS9G1Ei1frWgprShkLnG5hjtgmJs7hxd7B5iLxvs7",
  "key37": "5iQ982s8qTWVgcZuZUZPezs2Gk86WwZ737B7ZzhPgqYqU3kqF4AqQRgbU4rfHXkjvaW6SWwTLhtQ87vEf7PFYiDD",
  "key38": "2cKMkRSsbfJPwzS1mKbWuJtuf2CrVWbKAhfZoqQDECGE35FGGn4JTKEGLMuhAGiDfdGW45LHSkrMXnLUGkDSn3Ve",
  "key39": "5vvGxF9CYoEG1K9PkuK7q1SusrXBqu1ECMWvwGN9yupFaU5UVauRLUbw3cU5VVVf9ZYjmjoJ1XrNmmbgJJJpdNxJ",
  "key40": "4dojWVuxRVqLmevkAp1DbtTndoEUPh9MEg8Y2ygVSnVNAmD6f2UNRKky9NPZr3n1mG33FBUwKdCgDeX7ic1AQRih",
  "key41": "38Afc1VAvb7nai2dgA5bStjiwS8nyYNYdjtndfxt8Qca1dPGaHGEC7P7MbkNmKGmtTtRDV8Ptr8u6cJEXhQVrZ6a",
  "key42": "b1L51p5UtvmiETCcwznqqXDYxt4MyQLzsUkUQhzoo3CQj7xn7HZ5zr6WU398Xxk8Vse4uMpqLfCJRDvoKLFif8Y",
  "key43": "5ffYEP9Kg97a9VWofbujTQTPT97JCVgELALZLAvJwtJuaz68CmfWpk4Zx35rLcueSciyLA6koup7ugV9AWkoeGHh"
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
