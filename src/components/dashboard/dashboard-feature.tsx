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
    "4KFtDca6HEsap1VNpxqVocCCtu6zRzvk8SZbDuSbiEyWcwHD9dAbZjGXsboFpExscuEd77c2guCSzHkcnJwrkdwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "426iqwbPqakYGxHaYRkUHeEy81m1bCC9Tpx7e4Bi1jZmoGD8J4tb8HD1SJ5uUiR1AecQxC4hExtK2bY8KMsDHMnB",
  "key1": "5U9EbRHbWLp4dV8rNUo9fn7qi7AvkAAnzom1D3uUf53rFRMKeomEFr1AK3eZhEixW7vnbewcPApaPyxYEkq5jRCj",
  "key2": "2G3kAZ9Wu7QmnkSSKZLgSxFmbawQasrNjU7oxnSqDX4aZsNX3nuoANj4YeBXDgJUoU53gWEQmazLkp2PEUfo6bek",
  "key3": "2Hxmi3LvbxEHsuzAX6p5zc8HhywHQN9By8xNn3kewgdcLdgfNEhu3aMQxgacvoLP2518crMNrcaSJGcSGHXGm15d",
  "key4": "2wfihVoqiJN2wdQBvuGc7kqkw3yA1GKF9LCtykgX41gBVVeffF5fj3ivkqNxtfHF4shMAAEpGUahnad9ZF4pizK3",
  "key5": "LR7Sd4cXP5j7U5R3UT4UZVHG6SUrCEvCqAtt4rqm6voLfx2NTJy94aUZ6moMYSzqsWgcoroXbQUay5U2W7GDaqF",
  "key6": "4eajKUJ3TZzFgn7ea7F9uwfofzsb4QqwdsBPosawG7oyXp9qePs2QnNwqYJqNcZKv9RrhAefMTaLFtDWrKupgaiX",
  "key7": "43NxK1ywnjMyJZuaCCX5ZLgR67JHBC92p9xUF1Azyr7p6HWYpP5uCniuM9GFeEmeorXKafMrZa5964Ys8nnpZW5",
  "key8": "2Z2nSyWEcUh4SB8tGUyfqdWMFVgJpkpkBe77f9bbWkCzoVcyMVBMA6u2KDf6tbJ4wYxfPkSaEyxnDkKPssBdVPrP",
  "key9": "4qswwNFeDEHPyaRXvGVZRtbcrC4iiapHnyBZkrMvP4QV9oYd1NakdwHfxwm9VGx9YphzJSa6Uh3eWzyGfB42qRTM",
  "key10": "5km7z52HuGhwzQLWFk4d1zMX8gfsT6PeXyQLqaL5T9sxVHCE5iUBBo1Me3kdqwvP5QY4Khfy7dU5Cw84VWSY2faV",
  "key11": "3hkRgnWUiDLfFViaCs4ntNWVpyF1vESLo9gKPzT7owCLZX9em3upNCPF1E2DF8dPqCTfzkC73FYDBGMVFrwR77o1",
  "key12": "T3tmJf99kUqkn9i56h5KUyrDD1CHDoEoG2dsLRaPSZ3RuaQ32FucfqgRr3KPhDgaw8Saq4yLMiaFdvNnFE8tCDE",
  "key13": "4crKTweHrSS3gDrXQipuKhAYidqFyj9bvW8MbqjvGbVUZA1ASsB9PrUAXSt3ArEN96DDzH1RYGaKdsquFrFt3p2k",
  "key14": "4qhq4mKcWk8E7DNrUZzGYfLF8X6UJodaSmoNGc61z4DTFH7V6qoh71PChq9kftF25fWLZjgXtNaTVqVCGcY5bH83",
  "key15": "5g57nKeP5y68xxBbJzCLd8bKuEUSvzj452gdjh4CYxP8nSWbCtn5rtyhEULozhReKrFR6ASa2seFVwHFost83gd5",
  "key16": "5V6vAn6Px9xkvjgLdHpXNaBFSjeiiUuumU2LWmvTrs54k3VepVKctK9Lh4wzERAJgnwFE8JFkRZ9rZaJjBTaRWym",
  "key17": "4JCtf4BMSUoYCtkAFkMU1s7qWcVZrqz6YgDZaP2Pyop2aav97eU7g2PLDTbgpFYsWAm6YUAjmNdGjVcN4ezEkwFr",
  "key18": "2wWQHDZ3PTyW8EeQRSj2MYDJx9LiDf193eegk1LpVECVS3GuUVkPfG14vT2JzYny2nYLGD661Maeo4BjyAmkP8n4",
  "key19": "Edp3yEwQaxF7GbnHV67V2hqLere3GGxWFhin4HdeEgQEtxTFVyBSWCAbh7QL9syrhz3yXwYaiZEy89ieQ5nLUFK",
  "key20": "44fh9Zy9rTyGG5YbsRvpkDhGNU88gpUEnsaJz9b57FBMrUAS1SD8Du7QDniz43zT15sYS6BfBD2KS1UmKUFKf8XD",
  "key21": "WhzsV2AEaL39LWh83ggqnDNqFQ7NDgcJpUwL539No6EundkZNNSwtN3ca1upupF7EJCrnL9fGJKkY91FWaoSXW7",
  "key22": "3VABHvvoCWCLQhLiz8k6PH4cunkuj331YmHp9iwRbo7f48guzU1jSDUvuXwUDXTJfXi1dAcksNjHmwJq18tUbqtv",
  "key23": "5DyzvMa918RYPbkLc2MxH8WsgGktqBD1SAwyzAErjH3L59F9VaWp1cvZuSfbBpdPXxbVFjKe31iT8tP65ajEpWmt",
  "key24": "3Kn63DBtYqmG38eT8mR6PdW7rtN8rcR3uFZfM3STo7ADao5xHJ6HARw6jSzEMAED9DQiQRwfDqAHfk8hs3Yk5zHA",
  "key25": "2VMKqSgedgUTgqrjBLZKFNmqobzQzSZMxL9giBxX4iHsGXbbxKPR3TN6rbHapmXj83tArozdPGJbEFZUwX5f72jp",
  "key26": "tpZrz2Risw6uAqVyBDYf2qzrSwMm9G8qVR3cMS3MDd9cHEKx7D8t3jsaruTYrTcCgDFvUjtf9hTfbjYCavUmwvf",
  "key27": "616dDweaJhvVbvF7ESxcyxWcMttugEWjzioN5141TiEhVSSEd5qTZpfKhNkqPVf5uCsc2rn1mh4tyVBtwCttgtTk",
  "key28": "2bYriE93jcKBDMJ8i7uhytFdEGJv4Yh9tZSMi1c1MntdH5szuqpHf6oxjnRFVPfYhFSK7A84ao3EeYaDm9nEDmn2",
  "key29": "5uQFaarktZbSXeLxMuvicinF95okLLS42CjAPUwxZuzLLF7d2ZwiPMjL5zVzC5J1b6qG9dFHY4Rv3Av1P2kDtCGF",
  "key30": "5VeRTGs1L5Snys27aECry2YJpZBFRHP8DNU2WmaWfiEUjcJ5LvRMQUJTgxAhzzpdwrA9rLjQyZTGtWfiSdaq8kfP",
  "key31": "211348w76NTogqAcbLjjRt1Rn7hsTvDuiaGHJKej1gUYgxm6dXFF9VBhqdRRLVvLkFqQ9R23ixP4rN63QPZuNQUJ",
  "key32": "2NYdHbNHiNkmRMJR4vt9sqF149XhWyCt8NHGokxy3zG74JkxSAsCSikanVnZkw1A1e2X3wEN4aer4KyphRrmoRic",
  "key33": "5CuKDahC5CuPF6m1YAV7fYvafoNs1peZfeTd3W4ke8mC64PntXo1t4WR3TLuNtnFxr17JPf9BLxqiKmHmxKUER5u",
  "key34": "gjhPKAiUqmMZqfEpbMxRPypKxmcqMxdq9LmSvEEMDrJ44o6ofTdgpAbiRNFLHju6iHJdbVvjyyYzVbUevKnFXyz",
  "key35": "2E71F9bewPwzQ9mHPLzsHyE9diFhf1BNED3nxp29N5pKNf4DQsyrR8c5d5wVQ3kP68iyX15vRpgZBjkkfxEmdfZ1",
  "key36": "gRZgzteYKMmBdcAepMFWgwiodvHnrmxMATgZqmyxhdwfu8yew3SZ2VTYBiXKjahKNPEG6jXKJYZdsgrvXjDtqg8",
  "key37": "GyuSat8nH7kghU1EQ2DrvtD9bEnW3XPrhXq8MFSgqabvPUAKL84HCmLZSfH2cebjAj4mDzqRMxq6wrNLdwASGPz",
  "key38": "2BNvKNXwGwmRi11Cfq9Gjaj1MiN2sUSMbBQzshUA9unP84Xw1FLKdxMVDdbi8aT3qdPjdXPB1bhFH6yXowx4F9La",
  "key39": "517usZGcE15wit49pVCfAwzCiwpnYLCXsNYpqECyB52qpQ32eybESmzMqVBnKZeRoj2GR8FJEr1fpgZ2Enx8dNZY",
  "key40": "4yUN8ckFNUPy5DVgda1RR8PqLpFTPfrfL5rDwPPP1QB2gnUN879DCUmdwbmgos3tpfXJTZkxV6bj3BPfDEswfLgu",
  "key41": "RVD3yy9JhLWRKN7R93ALrAGz38QYegw6JZPdvZNU4se3asrXgf5LEiYUU4PfHkeNaQ9mSicYarFi2KEfPAn1vXr"
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
