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
    "57cUFUuQzzEorVajSjproQvZju3uJkeuQhtEobFJFRrpRdEW8NX2qfhgAZjNL3Nwgy1D31KWwsJdNpwJQVKkwnHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ko9hm8aPVz3a97jZQQE2MFA5asGSm6yV5HQNj5He5ZWgMAze3daGgn82RaVvGjL17Sfnjg7bhk97nyWbubaEPNF",
  "key1": "4xeHoQtXGnoRKUV8dC5LEtjQfaBAVbt2qA8oi3eqhr6a6abCRCTALkMSF227P3ov9WszbSTVur9gFNHbNmKp8Wgh",
  "key2": "22Fhe5xFGJHZkpma4c26xV6SWTePm7r5MDXht4dERHw37aFHaEHTiTb2hoNNT47Fg33gLmSzyC9jNePxDy1qjMwG",
  "key3": "37jLxYmqHRZ2nSFsBqz2iP91opVhdtQnrkAycpK9aaWpUCQrxCWmfv9aqT5VCgt2EQF4N6mEt62KrsQrNQXvfJUS",
  "key4": "4NUwQFyr1v4Q1sEFGnZNY3GsTa3eLuYcUc5PUyZue13t1z6XnrsDSMpw5VDhLFMiapK2NBq89PgbSU1LR4YeqZoP",
  "key5": "63pCnmfFkX7QYKWQcz5hPcTV7z6THPnLVzezWYAsd8rEzsL7jzVRB329CXztcvzbMC751bNGpES6tkM3P5knJBK",
  "key6": "2QoEccc8Aru7kbMv5V4GEEievexR2ocbjBtGzQvxpehFbNuRchUh7E3uXbaz9yZV2f9FCQtoZ7Za4AqrKCN2efpp",
  "key7": "31UcrCd7geSeu6xRc5gtRDQmJLwMZBXTCgkF1hPsPQv9jEr5jn14FsdBM68nToHYyaSRmDVPe78XbuauG1LNg3qo",
  "key8": "32GKowg6cbQUG2hX8bjfSGckaypCNmRRSpevWkvBAPfxjkZVZsLZsw3YCjewx8Nxh7neGFnGhxR8BPXCRBHsh6d",
  "key9": "4EYgA8gkbXqLsTtHE1jmXrZF668inbw5jv8DaSAmXMoQ5PDom5KaKCafqpeE7ZxrXTGm6FG7gA4Tcq2jd4wjVakq",
  "key10": "5bzcmsmXqMNZwpHq2hGaG3nEeRVCtPE98bnrLwfkDv256twoZeEW1SekCQJD9rAwfYyxKvGn7WiQQa9QaRtHnu7U",
  "key11": "2BBcPoaii7chTftjUQ95vrai8SPWm6ZeUGYgVb4VUyQL3HNZg478hGeo4juas5pz5nUvFQmUQ1ufL4P8aQWygpmS",
  "key12": "2SFTdjZ1XerHu8x2CiuYYvRy7jibFXppoh39mJTyCY9QwfCSdFnDirAaA5PzWp1FuwBgJj1tcjohTSU1p64aWRVR",
  "key13": "4qS3PGydN7xJFh7jk2KQ5RLnU6PZhY95oMMaG2GSXPQTkxu2rZQLeaGH86mkeGNqf9nzcrwz79c1jMpktqDHCM4M",
  "key14": "ejg9cEc4guGLAxTWQWnbHMTGQk4eAVC572HjhMrFWFtigi2zBdsKgnLs81LkmKrL6gd4Xx1m28hvrCpchaGfVqS",
  "key15": "27ZHWa564JSw6YTi8NjXTB8yYd5xtUkwQZTvL6b69eC41XJpEuLStascCXcy85bQ99tSDHM72ksaHyvVrL5yPER1",
  "key16": "2RWeZUFX9ALT2MpvVnYWpuJq2a2V9diFHEFbuyVgdv8EziC113gua1WPLTzkWBakTEZPjXFWnHjZVeRPr3abdxmh",
  "key17": "2CiJhYSxC8dcfAVSJmyUL8fPcQNAgHxXrveqsi4TSzCj64suKKbfLVcBxuM4rrDsVAjBJJAERLkMeNxBHkZMTWq9",
  "key18": "3cD8HT5JNQBG1RwsVAf3nVDasi1ZBbk9qkNDrX6mY7wWJg3xqR4jH3fvF1XsYJxttT6PgsMp8yF7TxFeEYiwR2eM",
  "key19": "3JfTHmoFejeG1t3RghpYWxHaQbMypVhoJjnF58yk9WSQFa24jZcbjWXS2Uwuj5j59JRWR9HibefokxRw5Wx6GfTZ",
  "key20": "4KBtLLDSUDVhkcC9jnRP7woVC8617J3iwao5KFkGwzMp4NYNEV9EsYD51F29aPYYdWywu4VdQtn6syx3ThhFoW1j",
  "key21": "3HjK7WwF4PB28vtPGQRrbB4qqpbpecWsWEY4FnMWNMRMuFA2qDWmH1QUYnC1FqgTBjmM6Rrf48MQQVPoky5GHYku",
  "key22": "43nktrV8rRpETfUkqXaFj6wzSfjJDAmNTJmA7SzLUH7YY7V6n4KsDhpC2dT2L65EenphUqBmjBxy1n4uwhgiKYoc",
  "key23": "36ziS2DbYpTxRmZpJXKS5RfSBqhm5rXQQHXxt6Q3imgXmGSKw3i72vtZhN1mjcQFfMfFZj7G6T7jEeWMEGyZZkan",
  "key24": "5ZQCtBiodHxLe7abRhK1QcXzg3xaQ3Xgva4CR81aqxJBXWbwPEGaBQBhC9XY51zstNjTHTVpvK57JvMctB8ZBetd",
  "key25": "5u1B5LovbMKdBwtjWCCH3PcCTuss7EUhWz2jNUnbFpmtoSNVtUfMnUxYCbiUK4sRqP2kHCC7ja5emG11To45KhmT",
  "key26": "4wASFfkX9o5ZzkpR1PN3LP1xq9D1zpsPbn5eu83yutrpv5c9zNeSwhCyRKbqCTyV8fiQ7RTsVrLiCkYWjFgHrzWf",
  "key27": "4Gemcp1bpRJNQ6TazA1TbXgoHezq6XwckQvtqnyHYZr8Pwh3gzEBtptmL7MJAVg3zf7QBxbM3e5AAG5GFf1fBEJe",
  "key28": "34LF2jsxX8tMyWqoYYeqDb3RWoiPDZkcbvCwzV6fgxRf9Uf8tC6GQy2CV8P3cH7LYexUqS5L4hNVKrkwppVVRHEH",
  "key29": "5WpncxT93VDKRF1vM5NUTbQS1BZaEfd6ZNFvcqcqWAeaqxCfVzJ8fWApznh88Z6GZMgizFqCvoo79nRwpPuXGBFT",
  "key30": "YUM2TowkrZsEHxRb3qWvqkyeQona3FfDykQkvvfQ13uVtq32LPjm7hWb7RLHffuT8USv9Xmp5eet9pADBAvkQsK",
  "key31": "2CeKmgi63z4FTgMrjWvNPnzYNbJqoxoGaJMH31A9H6pvrNbsRkaJ636VDz7idBo9BBUgeYUEqUQ1zE9KYupruYEo",
  "key32": "3uoAzqrHVnRFToQWXHazRKyfUxhFLagMeCRTQMyHzy35upAKArg7K6xRShddQkxfZ9FhyeSwanhnMGV2DUS1rLAt",
  "key33": "4xXf5rDxecaiJ6a7LNLUXXAZyGqyizxFLwaYzAy8Dw87jfKJkT3He2EuYZJMyfw5SQjMnMGtXbqXv7npMSVnzm3Y",
  "key34": "4yuRjbv4XmrygFQMpNHvnXX1PcHJpSEarEjapDmQq56dtHm4duHwG6eEQyKSbF5QqGdH9M9GWoNmiN5jiRX3tjK3",
  "key35": "59NSWnzo6gS2ujW4iE4Kn1UdtiE5AsnYUEeakiq7TD2nNLRnNpVyo1x2jYL1PKBbEjBzQN79r55mM6FFfuhoj7yv",
  "key36": "AZn65jfLcWYYUWieLTGU4rDTas4hobptG3gPRobhs4x7mC9ig3BAHzfac5C3tSwRg6JgaKCZRWFXNdGTrQXCHSx",
  "key37": "3cC1xVfXRz9x3tMVzqBK9gmcMcJ5x1ndCjTYZQBfvETZoXZX4LZRxRveJiR21QppqgAQ38bqRD6Y5dMb9VxwwtqN",
  "key38": "3gFE1cZ7yLBcrW6TBXeXy5eG9Gfvf57vfwwNRLGzWuvep9WwLLHcVtCjWWSUzdpmQGNYt96cDZcqw2oxR9HqL6Wn",
  "key39": "TAoq17Qen7Dio3Az4b1ABjBnWSDTiVUpo3i8kmQTAvtoxwagr1nT1T1ik1kC6WKrKCbnLY6iA23cawvswoTkxZW",
  "key40": "Tnpq6pRu99KLBTV3qgEyodThDXAvsgE8FayY6zLVa328WBAwK6qsLdhrg7cRzPrBaZ9kRaoJ6Yxhxe34Eeb82We",
  "key41": "2BEWGjCMQc2ZRDohaw1Qa8bUtDv2iCZ6YcKiBzDZm322VrehxpbpDcvpmw76Kryo3qEHGqJ23uRoWS6JXTRcrsar",
  "key42": "3Ekm7FbP74fM3t6FMC9vc3hjP2FbMVXej1xYiUptnCjsarcnRkUzphLE4rxEGN5xxkEzHhozmDgZ3Priek81GEkV",
  "key43": "3T94i1RjeoDmeq1m3JZLUxo9rJhdu1uTXpKfirKpKg6sbsw4EEeqpW4a5iTXtZVAhx6TXnssWrv9wztB9FFPH2z2",
  "key44": "5MpTWsiyiZs5hwuyGK3c6WqRu3oN85yKStmKFScTtNSembKVPZDyqx3jDATg8aGe3CpoRGpoh7TFFya8K3484qxc",
  "key45": "2rYKYxb84U7i85jhrcP46fqpvd5uuAd4YSQ3Cp382Eqm3B8h9FcbTb71Ro1vsdVDCXnUeC8kQHFWxS8TKmPySFLw",
  "key46": "2fgo5yq2dKDB4fD4U4WW1Ee5BVign8KG5P4jV3VVqC4vgGjEEQQSQx6okp7QfjCRxudSF4rdbpHYacPMPQ7e4FX5",
  "key47": "46vpsU93kVct8n372r5uM2zpBWU99JUKDbT3w3GyXnKbDM5jFfgNQnZoe52gL4B2qUQgT9zQqkitR9oVd1hby5zP"
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
