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
    "E4VeigVQN3bYhvkJNcKwExSVvdfGc66NPeqnVJoRr6Vpkw2zusXLyxwxJKBS2U9hr8pDup1tFsGThCKDDPMcZ6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fuJBtXCpHCYRP4iKhJzQyjNpk2ASQ898iiCVf71mJ98sqL3EBr1nMQmmLaeGw3XLxaTsq2bYq8TYv42tgZj6qTK",
  "key1": "5e3YAoFikbyyD6vPTt3RwLy5KZBNCpNBMrwGfvNMJJmHWd9GFnMypwDFnGTKgHZZetymV3K4gqaMNKMt41bjGQqe",
  "key2": "3wm5P8CpCr8u9AKwjxT85Yp6XyYADgyRSwjP5xG679N5toNfYqe5bSi8HskR9dda1ESe6yLAqumyhCgLFiDJBmGu",
  "key3": "52X1WXgCFiq5gA1raizdeyssVD4zh8v8yKStHLGNXPrpKa1EnkD9y3wwn3Vw4wcjpti9hohxY5QjABMo2RKmNrzu",
  "key4": "2fjqXtXYhrksvGhGQ1RStKg9qnTA6gQ2tUKjU7E92ZnnA4VUtV6KtYVartEjZymnc5yozvaS8dYTiNriPjVjHXCr",
  "key5": "4Zs2UFKRztmSM9LQ9zUd6ucvyoi2NC3DbT3LtUPjm2vr57LfAhkFLHcxq6Cc4XGLM2JZDWXnsh3tVhfGnz5BwQrs",
  "key6": "4ecwvmomEebwaTo969BpCVHeSAXHDidNXNuAzfeUVnMxYU8oZ5ADyAi5RSvsA5EiMKutZJCdJuAUnqd7Ln3Fdfuv",
  "key7": "55VTokRbHrEpVPbwSGH4z9kX4XAek6jC6HuBj22riP8tSK1YgZvXo8CtcvKLsE53phqaNSRabRYLUfnKeTvFfA1q",
  "key8": "5kpS1NqwNyLQdhBwRSa5MvPCbkyo7v1GkiBu6ikLWnnCwCDkheWv4HGnR3fBaUqWVKEwLMBavpXA5MvAcA8qcjKk",
  "key9": "5px4TbD3bxGjS8KAdiTnvKtKxnHWcNoZdN8xjUkM97wAT58fQswuxWPRdPJKDPdTfoJKMiz5cyLjKcNpxhPykfJi",
  "key10": "4kpnh6BwLKnL1zCWhnFWBXg58SvgXXnvMkPAucJGxXUbtnKJ4b3LLQYPfUjnv8hgfofvcGGT9JmH4LJTH1Kzejyy",
  "key11": "4z6UTo6BcZWe97oip82MUjf9PDtcp48EViR7ZjbE3Gh2G8rnTuzM1Gu63k3ohqZzBCVP8M8ZaCf8tTQMefst2TtB",
  "key12": "2qZJ6qEckf4xUnDZcVi8VABCLowyghGQcERsNtNVdPSFZ5mMx6GJYR3EJrS9Yogj68X1WtRZHeS2QLigHbcMvtJ7",
  "key13": "38NXafCvKmCcAPAKLXtbycZLnvSpvy5uRTvXhLoUiP5bEqcHGNWr6foovCdw9yzvB8T5483HarefZ3JuhcMx1u5B",
  "key14": "Wpyfvq9FHHWcwjJtGLCebX2WNMUjEUrWqF2jwP621tixBMc78HMUJyRE5zwga2Cwkb9VmibFDfTP7UvAELc2TqP",
  "key15": "2dGie6GGG9WxxSR1F4yYWXQ55E6YqxBRG7MG4P537bdfjEPUMntScTeyDUNEP1F7HzhutR7B49mCp5x4juZ8Y1bc",
  "key16": "3JbnEiKmrfotJzyyPoji6kjkSadpmvPY6ks8Bm33yY8m8Q3R9kxBUurMMP9r1nKEgD34fJYqKQGxVquUyLkk1qrS",
  "key17": "2rAoMnxJrSfZicbiJqKFEhtUsMn5gXhJk2hyGSMecwR9vQs5pGF2NV1fBkkLiLqXZ2WCcbWM9iybw4oJUBUsZ79Y",
  "key18": "5MS5UfuwMiphicGvPKLCDLVrJzuB2bmdWaQ3hxyaYhoACH8YsvyPa5XH4SKFpMfZ94JyeJdHA4Djq5a1PFCbwX86",
  "key19": "4PgfvUcqLJyeTtjx2i9uTbkSG4ibFTNKJmWSB7b7apNrv7FkuwpYxqjSfPy5mDgigVd1aXshTftQxGpEQE7ZURvz",
  "key20": "5dRsZBfbxAZeqVgXhYMtP3qzemkKGmgExqxRaZCjE4Y2xNYo2LYjyRs6VD7UXfYkn2FouedKWzx7PsvK5WG1CvLj",
  "key21": "4dndNPeDS2Zmt3RuGmJc64pDfTDoCC1FZXr5C71yRXZDXfkQev9VjgnkzC6AH2y4K5JjwbD7QhEXk4MUuxWef4b3",
  "key22": "5yPzf3mXFR1jvxjGSfijgLk1AHgq4df4Y42SPoNMrr7xhpkBSWwtYfE95V4maUJ5VK38ZrXGgoUeLsBZGAYxRx5y",
  "key23": "34enefo8y9Rxw8298AzmuwPh1pKLYU2fZV7geF7v6dhQPiGwDahLqPr3UJjSgmubPAGRKM3cBAsLmnUoRToEvQAT",
  "key24": "5XAfbLEXbJiuEpTzPKFWBDBBTmdKQjmjRJDLQs6pYz1xW4g5RztNmioseoM7bc6Tm53q3iko279PGPuHX5A5p1eK",
  "key25": "5z4RsLCuzgFzPXVrJScSynkNLMDe9RAWx2D6mv35BVQHfc45pH9Bpyc8mQPfcM584rHjYi3uaE5jSpf6Kbd8n1A5",
  "key26": "KUyeqE5MHwFz84jC9g9N67zBLKzXGfeb9kSRXqhMx1JFKMeM7UZqLpMaamswaKDD62wPAdkcNz5HfvHxFnKaPAE",
  "key27": "2YRrkHBbLUtypUjx5mraVKAhhRwhQ3B2Wsgr2cZgtvoKupNmPewGXB3NJqE76isjwHSGpeV4Vd9BffCJuXbtG5wJ",
  "key28": "2mPgojagaK7iHXr4QxrCKqNFRkynZ2ytsCjtek4BEUv2x5WPdihbEZyyf6i4EH8RrTs4QAM8kN527WWSYXHUGQ27",
  "key29": "4YDPgmE8aeyqB1YgH2ZFioi995829XT2MaiCQq6JvLwVYBDHoXfWoBQ7MyKG1Vfj5GdS4oKW3VX8iWh4zPqr1K8H",
  "key30": "Hh8tefuP9AGupqogTbVEgGVBgDrHJtofY5XPrgWgeNV9JU5ZKVjAPzDuDDkFCc9J2mYbdp55Bc1xBL9Dzy2GvnA",
  "key31": "2zBmewCNm5YJpm642cDgUuKzovzmtogabsMuNkZex4vqjJVrvRFF2ZEZ2bPmonixo7m1q7mHrQviN8mzDt1Mrs7",
  "key32": "3AuvWYad2GjhsHkLen8UrJj9DxoDAaVCcvJSXEKzKRn15bJmf7DmDva2Zhv7UvtzvSJDiPXb1ygzVPbCby6ATS1d",
  "key33": "2Q2Fwxn9Hu4aALMyyV54T2EABztk5ZGASwAB9fkrMgM91yWvDAKTtaFSQkFBxg8UfxiFzovQ9JnkbY6BNPbYdLko",
  "key34": "3JPmFgtg7jS9w974cFQWXeooe663JLdooMwbePGDqh8VLGiDZrRrDhhHxRh6hMg199zbTLzZRjBYjGL2pbhWMQu7",
  "key35": "38P6cgrPcrFFgf3TGj8cpWPVRR9Av9fDFFh7YQB78JPKNPkb84AdGVfPcvGR4BxQ2LGC85maTzm9qdNX64M3xsPg",
  "key36": "5km4AcTt6KTw9EyaipxdGsPjD3J5pxYJboE9Z2C5gLote43axs7exV23xELcnqSk3PVbbJ5B8vpWDxvrLum8UWv6",
  "key37": "2qyza4L24DGFCeS5TmCUBd5UT9xHYnu8ruSZefJ2uxBC4mq3Es1Jhf2sAQhWQZuJzEumpLHZwiNQQdxn4gxTWigp",
  "key38": "4NusWWe3oDJT4coJ7aqUXkLnyCqnJga5uRgbCfydn8tdQM54Muv36Pje3iEmqCmBPt1Fv9NneCXGrgUZNYz77ryg",
  "key39": "3awtdyg61x2ozJNYYG5i2eknuytXqShJFsGeuoboTsYiwttngQXsbJtX3yBuLy5Uxq9MZo41PCdixKBDUNkVRszp",
  "key40": "55gsKqXxai98Q3ncxyy8bUUf8xcXHr4jXYDPbkzjAonuA99dCLWv9433oXNhkHwnB6kSCjiPgLkzi97n2ToVzZgR",
  "key41": "64XAATirPVy4dnaue7foQAJrHcHcHVs8gDw8PrLZPwmRyB3W3GCHpjpvZtbSrqcFZ5cadPgecCYBJry8pYUpW4Mi",
  "key42": "5aG13ysaRcj7UD3ZZveGxtPpa9it7Sbh7EHmSq5Z53RVnL7L4arVzKmG2Eu92tgSKsDxxzZ38bETNN1YUG7uJHz3",
  "key43": "2FkQyyMScvnwrz3wWJBc7w1J2JC6FXMChSK4bY1XBVqLfgGy24pM4cCM3Xqff9t2MMX8Byw9Z9NzCpqYJStD8JBp",
  "key44": "4KzsP1p6yS9kY3upLhUBVTeubDoGFVZdXaJeUZaMGDzAGStcYWWLzBJcxFrAMqUmLMenH5E93oEVywBZhdNumPgg"
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
