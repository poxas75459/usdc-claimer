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
    "2waAujM6QE9zZjJvdpFvthptQArCK8ctrpHoSThr55yWP6ToeJVya6kTYZh1QLzfB7iYD7PDR1MSS9GgvU7ecuTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E4qP7gf3QKUxRsZMdgu8V1w6d4xKW4EMnZeUjrBaBGdaZxUU4Powq7fKmQW42ait6DDcHXRKg1Np615P1j47BNF",
  "key1": "TSZjGtYboU4tjcPcqu2uHmkrJa9xn1XnesBfi52JhxCGGNYzr73bPvc5cRsexGAAyMjes3KN4KPQ7is3KbVV4f6",
  "key2": "4goVbafRfnUfWNE96GH5UWxw3cSCHyEJRo1XgRRcJ1Pp9yYwHuMWJfHmEgZroAKB8u5V2nLdwkoWSH1XeiMNRN5k",
  "key3": "2NaBcRo6zVdZrDV4VcX9FjDhPyG5CtaVf37H5cQ4YH8foy8N7qbtVYF4pWTqMXQZuUHHySXoFJpcCzFZAt2WiRqE",
  "key4": "5yyH5jpSqVo5VY5MHiFwh9nLTfttB1D6X9zna5vaNpYbLeUouywPYeMWLtNuZkTATNDEUnNFZfFcNGJMgS36qzCE",
  "key5": "3XLFZ3MxCCZMRLc7TuSMBfZTMgnvrYkMK6T6ZgUpgoJNii5rnikTb2BYiquvSbgEkzERPG6tMYir9mGiTdzzxqHX",
  "key6": "KV3az5pNNUWx2VTCUrbUU5ETJ4rVEoqdidjTcwF1f6xJPuJoLLCD8qqU3FE92SonFuccMf8sA4zPzJCJZHvZDpy",
  "key7": "2gVfuAx7Eej7G38uCGzchWuxA3ZvvnN7LyguzCEKTgEArUTDJbknpbAPXJ3PQoJHajzA98Lgdid47JTWXK5sF4CU",
  "key8": "Pm6T2MydmtTcsH864HxUFvjPuckPbHDZdSpYkXvYSrVkE1aJdDiHn35Tyu8nqztQkuwxYWiqbV9YMvoYmCzMhCN",
  "key9": "ZKTq3JCRDMSMy4NB6dUjad8KMsqgjpwMqfVgUp5MafEvt2aHqk826WK8GTLJZe3rpyafTX3yBqhE4ceTk7BWtUo",
  "key10": "4dFSjBfuBoj7xLcFn43D39GeBNSWjfKBnqnKHD4QtWh8duPRmd1TKqN5LNG6Azj1P5uk5iQ9PUJKtPrNMejjPfy4",
  "key11": "4fxWCKf6krzUxzNpxLd2wHHj5VN78gDZLSmbdapENTpBdpw39MdY2jR4JUHVpTzw5dsdtG7mSFFqZhQHsQFky7xQ",
  "key12": "5yTfZ6FK6zHRjZFjjcz1GEm8JF1a4TizjxRU3v5BiTwiwM91YtX3qYqW19LrdFibhKT4fj8TqzUrd1psoxEfCjN5",
  "key13": "4sxiL2s6KUaiw9ZofSW1QCBsWhoJDDbNtEm72DjvcH3DV99xiLDWeEGg6YRdgBEBzfXgc6Lz3vioXRA3K3YZtQqP",
  "key14": "37PBPRDo3J1SWyWqEELt7Af8HuQyv3gRQ458bHZ6owoKNEdQBi9k9QTMbreJbjkqqYqUtTTR6zepoKWdxLKxmTbb",
  "key15": "4wK4BF6Vc5tGNGpFBAFGVvmN3dZ9EBzzJioJevbHe8YHGNtYdBX2BqyuaWicWKPcxJr1KEGvYjMAo2DQFTdoEvr",
  "key16": "4PYQW7CBksKpumEGUp6hDbLBNX5ey7b55wD2DVw7cpKJS49r17fbmFpSZyGnR4g7XmpCijMvXFfJASorPixicESo",
  "key17": "p9ofnx3vpoq4jjfZpHAL6CtPWBLmNqmqLWfY2XDJJVruxovRJZjLzd2jJXQnLq2MCuaNawLuMn54vm8u1stpdGA",
  "key18": "4enL6sjpShhBkYuaP5iinkmKcSBBFi8uqi9zibsm6G9AsTpofhJfggnj5pKT7EWkbmr6ACS9YC5xafADKeXJa2e8",
  "key19": "2t9MvFH6JW7HWHkqkeM9fZbjNr6cD94EHNvk8jZyx9tRAq2NPFbqhoFUqAU4qzBcVv9R5LjS3TBHhgUA74etN4VH",
  "key20": "3aKTjnuX7LjiVAMzK35VbJK9X46999GY656Ku9DKrCMTnByHnyLGJCuY6vwyvcmYhe9uUTmJdakpUWBCx6yxYRaq",
  "key21": "5wE5LPiu1JomMjSyHNNKn3NV7qKvDKqwXPYJwZiDScKK1NdDB1vSYPcb7ihUokGjZT1w1vE1YUEfFcdBTK3yJYLP",
  "key22": "uCB3WGbKHmEaSgxqWPFApm92zKb32Hs3YsZptBdpANbc9ZGFDrudQvWdk24irWeXW329ASPnyW728CJeDEuZFdM",
  "key23": "2un2z8bE8uKJ8AynjQ3fRjWngbzKYKaJFd84E79twdJSt21aHJAEoyGxFnPHEosB8L4umgFcstyd7Ssb4ZDAY96Z",
  "key24": "FJVNjLVSC49K1nM1w55bgafgzupcGYX1m2F6p8yw1UVKagVRxYR4qEsXzroenFd2S7mE8jgX5eyiYVdYQqSmF7n",
  "key25": "MZCq7HHZmhNmSn9aA5TdRW9DhHgi95oAo496asgkLzZxMKFNp55RApdbrzGqgYPa4AU3htud13vj7p2MPTxPhbw",
  "key26": "33Gazv4JewAexCqZYoxKgj2QNWu9io5b99tKXQBshGHZgsYYSP8L2y7bM9weaMsfAbSouBXnMVadcG12KXxer1qu",
  "key27": "64QtzcGyaDgoHvEzcGRJJZ5Q9pUVNcwdQEajxN5SZsEZnxWfcFwp62Ayou1gmddJu2idsDDFPPhFxf2jQHKrgZWt",
  "key28": "4ReLK2vSL9i8mCqBa2oi8XRowkiJth6bCjQB5EhNiNFed7BsB9737tqMrhoXPAtFAj2w22s5QKrzqaGBxNzmuxDY",
  "key29": "E7wULCSVLLh1D3JCVGA8E94dRz65mV9KW29FkFYwkgGcZYj4epzers9agURCPxMLNfNNjvzXdhQAyvFVA69p4SN",
  "key30": "2FzYHdLFemedmcRe5GprSRnejJhFQVDbmmAK4cuFb3N1EgzwXCs4JUDX21ssARamuDuPUb7Dqw5nqd8paNAbjVjr",
  "key31": "27VbhPcRQmTDehZKL37Y2F3JQvWa5yT1s8qHDZ1ESurQTjPbGg4SMzQqnEDtcQYRDTNQ9vY9iojfN1F6Ja2Lbypw",
  "key32": "kotRXe1PxPWShztekFbbsSxQgKWVvhj26gydNBm4dnMyCVoSmrJF5as7s2Jr1AZ52JswYJQvSKYDh9zuzmZBrFp",
  "key33": "4kNkkpA3LghZ4sDVvYdpcTSVQSD5yWcMZ555yRMkWPiZuJv47cxYZyn8149gbS9Lk5r1rdHiTwZ1wLPzudRJDwa9",
  "key34": "2xURWWBBZqAEGmvWEdc18BLoJqFgWgqYVHDgAJGDJm6fi2rbFxEea8RBdqS4P16Mv4pbZPyQkFQkcbpJZ471KCh7",
  "key35": "iBDuDWb1Tqq3H36gDG3EPqUQmGTTZVDGyh4WiaKtqrN5W5SCyR9wqLBFv33s3vJkkzt5XFYTPmcxBRHmMMdsbQV",
  "key36": "5LHogwApfnvDavjjoYtBu6Z2K9XXAee6XgBWhSQbuAaabsne6jDFJip8EsLCvYt5M5GEHrkbUF2fFV5KmPerC6qU",
  "key37": "2DZcASemKB3afPoEHbEkqzHtfiEoZZyhVWpVatbUTd41HzpW1WRQZTDJcrrp2vGis26K8VEgpkSd95J1G1Gs9Wtm",
  "key38": "u9Y2zXTJ3FGpsy9gWo3bqTmRr7BM9YY8gxWViyDxdrz8Zq6SFfr4iz2oQrvvMyNFEsSWC7MGbgr4yEwJoJMMmnH",
  "key39": "4GimnioikqY7J9Z18SavyD9dYQAjwo6iLZaxCNnvs863RHntXyscR7DpcxLz8aDwXPEqokwTWZmBhrsWsnVJjriA",
  "key40": "4GxPvWJzE487E599akU34VJF1AYtjwVUmQhKgnRfy5whYDRcxLe6gtpSTtKQsX3KkWFXNWCiMsLzs6fUhUPTM2d5",
  "key41": "uicLBPL7radfRPb4PnCBri4iGhwPtedNo1cUBzgL3NNEUwErmwCQQ1mme3sgWcKVrjpyJH5HyeFwfRFAKLsGf5C",
  "key42": "2ssXFTmguX2fhBeGsqLyoVbqX5teqjZaAseK4VkkzXsmyTseKeQdEriinFg3bkuPsXH85MvqmwMuk6N4Rbou9bQz",
  "key43": "MniMddyQfU1NVsCUY3MJkJd3Y281BFEN826eKRBfQd3jXjv9WVmr4aYKkYm8SeyTVbBFfB2Dreb1qVUfuSEdWfi",
  "key44": "4yX4gBhxGq4X9DyRztFQT5zaqc4JdMtXpgM8MMAdLEaCCmVwWvWTpGEtCDT7BWm9xwCNu3nA42z9GfB4EvMEzKfp",
  "key45": "2iXmKq8vx3U3Sh2EwHbttGAAQF8CkH62YWyeGg3RGhKN3e5VLTMYQCohkLvTpb7HyAzUtUjvtLSiY6MeisFMjqHv",
  "key46": "3m8XikNyFVGwmTDeTVakJnqrg6M1JVfmnrZyjhqiP8crqDwy1iZJVh39acfM1AWXdcDi5vmEth6Dz3pjhTJ1xb7S",
  "key47": "4oetmQ1cTfLqh8Y9Mf5RaVQbAxnB8RR8xU5VoafFv9rndhGgSpf27m1BuogiSswbvwiWxjLDXTAs14MYVEhj7e6g",
  "key48": "5t3KpVUsrykb4ZUCDryK76yV2TBqy4ApkdQPRCVpRc9aepuYp4MLqqFbx9tcmngcSeZSFrJiCaskiMzDDrQLjPQD"
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
