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
    "3AvAMzY2pK1ZMZBTu1LJBFSdRBdqhHkb5Q3aw1HwseqtVMHJD4tSHbNAqFTo8xbTk4G9KHNu3VpBdexdCUQWjpgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kBN5u4iKnw3apEQ5soPUdPJo9UdQf17hGjdFZ6gWnFgGQQkVqwgE7iQ1rQyHtx61RL9qkFvDiRdqYzdWTHBj8zq",
  "key1": "2XVAhtpgd4E6Ra8HCdF7QNtcvm3k5pRHwTn7FPFR8dFs1325hhMc3TuZ67aoRkrcWgKS5JnaZkKMCQVKqbqRCFcx",
  "key2": "5BgUp7VTW8hx6Kc68HNVsshWrHCGRm9cDfK4HB35fFtf9x3pLw716BGfnzMVDFH9U2qzfo5kARrFeWAtsmRjghPM",
  "key3": "5Zo6HyTx3LAmun4VHQZk9uA39xQcmpm5nYCjLpMR9QazvxYYqN3EVffxWjGhBHAF3Cojkama6sphFRvvMTVyVfxQ",
  "key4": "2SFcH95RnzhM2xppbWEtwwz5RK6yk7oQ2udRwtvAVt3Nsno13csvoBJZb63uz55T4M7QagzGyBGxivt9HR9musyy",
  "key5": "rdnBAG6hJLRvVeNNeUn4EejHsn9nXjtjRvjTGP8uWkMQCt2PGQFJ4Qx7sRd1tSms6oFP5s8JYrSEvzjzEgk2xJr",
  "key6": "4KooSoBzdPkAydjNLa5bEcFDNQqaBfVXnguohFRVWmVurtSKZfNRgb2te1ipuBU6PvKxesYuMXju9xNFrt3iZdmF",
  "key7": "38xomEs3drfKukA1ttNqzQ39wZPrG5M3grQvcobMDgAs1thGgFLU2Nx4xUE5saCsTJdFBCpwo5CjEAYNLDjpYjvd",
  "key8": "3EikM9qq6L2rHHGq4QspnNd2iLAwQYrwpTC3A4XJoxE8Acj8Khat72G7J3p2x7cnVxrJdYiw2owRg3R4vZ8uuLoq",
  "key9": "bmtsJwj9LssUtF7vSw6pyNY6E3zSa3dX6Gm6YCaByK9gepYM7ezvjH2v5Y4RfFMpNxxcpyppUWSyJ5fkz8z1Qwo",
  "key10": "3siKzTic1L9n5zv6NWH5V2afeU39JPgP8jzcwGwpViUN51jGBJKehDFoTYu2vwXmEGo4tsfS2Hu3xnGVA37z5LGm",
  "key11": "qBbfJEBW6Lp8hVjdcuvPXQJWQ8Y3baryqva3MmTeSsSfsUZjjQZDDuZjUNWbeY4mzmsBetTkoxKeuUpvByKVprY",
  "key12": "5jeMW483DsxRpmMWsPfyb1DQbndMqTnx5n2EoHg7CN2Z17dr5TvmuEACVSGJoUVGipexSfZ4o5uAdUceDPib9r1e",
  "key13": "5wLcvuUiPiQsrMMFoo6zihiHb5H9x9TDkgW6MkRyq7rZzyPERC9aTojDJxpUkqs5B6Z4oxBHmekiaDFTJMmS9NpA",
  "key14": "5d4L9cxCNHqSeuyg6tbctfZNWs2JwNaa4LQTtKGq7NLWMc9gexdWKofLTEVeWLCSWjxHaTN6SGsKbRnEkypiq7ce",
  "key15": "VELDwh2jgrWCZVzczZcqDzPWgGXc92vcM45AVTKGKrX6foLYoXbapftBFEeQez5oxBmu8WMLrEE11M2V7DNcCMq",
  "key16": "356AoMF7KemDi1oZUM1GcSDvukmQtARSAjyhRxuTEjwAjHhBrT5r4tey4mR5oKhJbmD2Z5mMiY2ULqobXmwHBcQE",
  "key17": "477EKNkC8UbKGJf4NFjrHDRoiJGs12p7eyCo3Ftc5oKK9To1k4wFK6qPnJFqpYAhJsWHqjkSGm5PpH9TVrHBib9Q",
  "key18": "5stYzwHmw23iDjVzfmXKHjtcKxj9RsMHDrQhbHr6GHF8SQS2jMpbHZ21fuzdaTkSZHJcETinQKbU3YgrDSpXFQxC",
  "key19": "4N4cumXYSAqdSzfe9ZvsqpsdUNhJYSqs7FG4VWeGmcxpS4Wc4u7yAHZsGCkcu9gCwZsm3uQWgpgsHmdHZqcLPTBJ",
  "key20": "2w8MGhWhGY2ueSb1jh1zy2JuqFwU5A3etRKFpEYrCQfBCmJx2nYhG3eGP3gjEnzN8RqHTJpVxXzQpvgRoV92PkDH",
  "key21": "2KPqJTWpuaMZDcxRFKyf4r7KT4DPSpxmTJNVCRxmPocJbaUXwj4Nimoyu3LkPgDofjVh3vDfDz2zkRZCMUXsewjz",
  "key22": "3rKudXmT2i3SfxNwuSDddBpt24v78vPMDitSsjsorAj1tjj4QJMyqp4E5pznVRPMP8eLFyJcc1FrvviPkfqQmppo",
  "key23": "547f6TmNB95yDT8UudWWpB8tE16KUy4MxTfBbZvtCjDWxezgaNTUZ6GgwXmcyehyCd3MUnhJptipbP49pqpCCQFN",
  "key24": "4m78VW8kesVy4pxPyoAgpfuUgXkn2aZLPoHtdfP88WKsqMD1BncKXHVUiZhqGwSDWVhrkiYmRqNVccKWmeokYpep",
  "key25": "QCTxSFaWdPahJeT6HhpzMBfsVU3P6R8Yj44n4LxJnJ3GLvzKhBhNBchfbsJgXTgbe3xyVCQ1xwxnGrbe3cJ46Ay",
  "key26": "5wyrsV96dpy3Du9KnQhfnt3KrvZkTeM8rXmsAR5yyYCapcDXc8Ydd7qRZcpCV2LMemTuEjB3etFVoqbauK8Lgk3e",
  "key27": "5se8JH1vcj8b4XUmPgwotZUHbd66nByfMUMmMP42wVSSt5KcSN4aUTFCG5NPmB167KnHbSP3CDwJT1XXSC1rw8eC",
  "key28": "PooNdmJDsQ8Ug3PoVMqQcX46NniULQeTAWcDEdNGknBH2uqdk1xjsytrnXAh2b473xxdFrgwuksF4gFkpd18iUc"
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
