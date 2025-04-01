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
    "5PWCeWnKBN91reXCKt5PjXsjSPXNpoNHquLD2SvAErkdy2zCvCeEfggbPUCazpmjPDHXxzZHb2BFQJ4J9xwGeoA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MRWH7aqViTeiTvg3wAfSK5N8EshS6afsbHVGVw61SKmQuwgvS5K2CZ8ePBMcC545fABuhpnn8k9gm6godfSGt5R",
  "key1": "5j7YvcPHMdzsr41YrfGWSBVnWzbHcXDEidhYrRtRerDZexNcsxTEPqJYNbXP2dHoFaXp6wvTd4vAGdRZ4Q1BnEn4",
  "key2": "5ML27ZXAPEotLKYz83Jh71dJm9m5LDjHv9k5YnjtuCKM7NpiSMqv6tdXAcADnYguNrpoqDJmXx8sXkCTqY2M1u7f",
  "key3": "2UEhmRoZS1eLWiMTM8HFwP8jFkryGaLfjTWczA2DiYTVgbdoEMvNrewpKFb4NRDWpga87Fyspb65YYXiRyfEALjv",
  "key4": "3gujSs7RPosPHRPaT2HiTF2pgX1LKrXgPTQbeyHyWPeBb6jZWwvMYthCdQZ1wxXbThv9ApTfgZvsqT2tpajZb6FN",
  "key5": "EbeTX3CafXBp4rZ2yegfwLY6uL5U3HBN4Zsq9DN26rMtVkNj1sU9TjePWhkqgBjFSVaJ9VdtkCyqdiuh71W44tp",
  "key6": "bFki21pFPHXzvhesk2Hfd4ataxREZm79eUaWwmT2V5qH4AA65RQBSxHPTrTnGya7dzKPAJVnAJDuZ9uomUUPqjX",
  "key7": "2GFL5W4yP8p9NeKX2nodjyMx6CthHwx2nt6WdDfvaDCuuuyRzRGWQo9mPhp9H55b4eefsQqkeJRWEZew9MWWDhi5",
  "key8": "3DFRg3sYfspBMqF9uCpQg7xdNtYHoekN9TJxnLDUd934Zp8XwBfZVZzuxvCcUyo8G1HZYnJHNopkSsR2D4zk6XXn",
  "key9": "3M2wU81hEMJaVhJ43zg1iQTD7wEyi2mtao41MMrkYjx2ThsQTiNQgnbK2vL5Fy9BAit8vwFC76JN58hRrfQS7F2o",
  "key10": "615zAnhvqvHxSmL3oUEbmgtFhBtbdzKh95f74QCFu3rPGvZcYPJmGwh6qxdKZjBs7qcuTRPYmLUCntqbvoeoGM1u",
  "key11": "bmpcMRUx3Dbt1GkhRMKBiLmwZPcibbYA9shKH51p5gKCEjA4JBgHRoNaWwMfqUJLwYyUT3ATBm7E81QFVDCmZRp",
  "key12": "5qVmoZW4TJTxT8LvDD2HjYPyVjB8i19zmTk6qkJvfB5CPdV6fuKSbXuMdgZnaSZi9X9s2oJronK5UMRQiXA75nc5",
  "key13": "55NEexttxdje5ELewzLSkiNVKcVtbWn12FuydnG9iLaySpRhpgVL2EGNFAjGhJXZ7kR91GvTbdwtPkHBuzN4EPwA",
  "key14": "4rV6Wr8Y2kSsYPWhPsdWyjKTdeHidZ7SadodmH4R7MAUK1wDDdKGkcvjbsMSDQeK7GWJb8cNqEjTLbnhsnCRcikK",
  "key15": "4ud1eqhbw1D6Ms64aTMfxgbc3253cfyNEeNWGLjoVnDWVRhbWA7sqvM4Rc3Md4iqxES2HnX4v7wZ7cTmraQK6ghj",
  "key16": "sXaXnN7q2bVBp2KMBSeEEjL5qZTRZucEz9v2uQnfStC5hV5gTvj4UNP2g1twFXuyqCkWSjgKc6nxaQhCvUXsBeT",
  "key17": "Tqoevcv9w3W6Gb8HShWSxhVCZ9fUYohuoyVB9rbjoPNaWadP5orNZ39p9BB6WLPqDMgrY47t7mh1WfvF98N6e7L",
  "key18": "4UMfpPvWtwFJnmxXufN4YCPFSD69tJ3Y64y38pQiKbpzLY41hcNtzb8HKtNMSmWejwoaEW8wQ4P5nAgEZrhRtkaE",
  "key19": "5nMoNzLZRPfWeoeTzT3XSAV5GwACXkqK3xK8nBhkwrQ7Vc6eznLWJqwxZA8bQU4rQhzYDeLHJjwFnww1mGAUtz1B",
  "key20": "2XKpWaPaZgyYFW3Bhyiibz4vCxkkeronueFqTbPLim5uSjfGnxkFuVJQ46TfZhWeY3PwXDSueHRT5EBfNSjo9PLH",
  "key21": "613rEpDNm9Y9Xvuzj4bWeirSEMmziruuu14wrdTdeMnDJEyYwJnrJTVMeoG6iDyahaJgeRfdNXkjX9feYPreH31j",
  "key22": "2gFc674wNmpEgQQS5uY9QFAHSXGiDjdaExPk2hcjbopL3MNHEWubcX85NoZ3FmuNfjpp6hGt2eBw9bW1Qk5X92jH",
  "key23": "3kRXdrz8ZsVedeVU1hAozHyySbQRwbGj3qVf1G3ViynSgteDjoEEKmBxMbZruS7zRkeu8iRSKqRC3TGwf51D7LJe",
  "key24": "3wqXx61PkjWfuAQQv5NFtR4RTbqokx4KvQrnfwxi7zUeGjwHSzy35FGJFzjttmRDx3XQZRvVdJhN2k6WLivBwtyR",
  "key25": "2aHGNjNFFkpqM5NscUhZqrFaYbdH9FeHCqVinQPM7g6kR4Us2Bshwk5t8v5BGTM9oZk9J12anVTrBqdWvtbgWWur",
  "key26": "5WAgyjE4ADF7KXEZ6hw2Ccnc9a26ZmvzTgiSRf8x5oR45QaWGmL3VfSsW6ZgvFZmuGeFxKEDZzWJcnz4V7jsX1df",
  "key27": "TfT35YoDmjmGaV87itvJGchYZn95tRm89gosBatciup4JdgYaiPqk2dFGv6jckFZQgQs8imoV4C7dGWocvRfFDH",
  "key28": "4124T25DZXYinY6pyPugGFhmhQHsakReuFNdQRmgk7GU7J8fLgtLR8YbHmV2tZyte5LbeXhzdiL4MMGXkbfLbQmr",
  "key29": "3yXUoAWNsz7CcqP17YFS8Zqn8PCTxd9NKpPDahVnSL63dAz5sncNkSbyTWLvopwjugAgY5DTPsMrPTSndZs12fra",
  "key30": "3VnZdxTJHJvGUZqFxFSZmqpoM1kDRk1Uqvm2PFDdaNGBzfqxTR1MNPjsiywwY33yRVUCsrp31dX8g7Zgb3E9ZH2A",
  "key31": "5RffoSKVNWDAWCdqQm66MEhdTmsBR8EpBcJb7FXbcs9RvwGs4LWDB6cZarAPXbz3FLPPKR99f7tdpj7ZgUp9XYMW",
  "key32": "5a5JBYPcky2ndBP97neTzsGReTJYM3JQz5fVkobs9osqRQBPgjcf1mYTTL6ySnfYsFPR8vjqxo2WEYtXvJySWh2y",
  "key33": "Zf8wKTE6GNc7yD8nffugrC5XPNcVsZsx7waYbzAjDWbMmPiKtQXM2wEN3ENGDyZaBqit36i4Wiv3YH2q6SLkFwV",
  "key34": "5Ci9dFnmcn44VvhbQ8tjo3n4MTNuPfUmkV8yLLWTS9ymXFiaLgkVZtD7p6siy1FLBreDmuvXkvdNoF2dkBUP7oZE",
  "key35": "5pez2nAZK9vNsmpxFA1vp4zuJEkrzyxJdLxGY8V8eAePWezkgbknntX7qzJ4RqHzoTxcTbiTCuB1oGtJUpV3V6tG",
  "key36": "39jWo1Lj28kuGy64DNQ3tL24uHFVPyS4ywSp56pQMumYCbtLd7KceEVtoUmKmKfkkkKAssshXPxdeXW5L3DTQfB7",
  "key37": "5iSubu6YxG74z2yRD7V1YVQ1qpVQ5ypXLEUnxZdd9uNW6Wnk2tCaNMDD64LyZjSD56hkWwtoKXXaK1cAJT4zjXSN",
  "key38": "5Eci5Bbj55zVH2ve2tgSTK1DXWBAbnvxp1EyoZsvkcw3HAAELyZTjggobwAqUwugTwHPJ3jxreqhKXi16S9o3VRx",
  "key39": "3bjhqzsPcMYue7FBKji78CCygT6ysZ8P3x9XvXTbDpwgxXLpGMdjrt8AUyE5eumwt8BMMJ3JGtqRzfS2vGXGtiHz",
  "key40": "dGMZbSED4a3ZA5TQ5otM11jCSB9fdoAgn873CZdtpGDmf4tTtG8BZLdbVJ3zbYPketggTQ6nWP7yDuHHkmdYUcv",
  "key41": "QwZRC72QF2ftAhshwdbHtUqREjS7PS61sh3BYHQsM5gVBg1xnaPiLBafotBeN5bE5NymWuwFPbWdgsbNuCd6Cro",
  "key42": "3mktNefiaz56cdoPv8HE1G2U9RuDBFFFVUMAJ7gMZLRhps1heD1zULf3aicGu9zNRfBVGGQuYhpLMvLZcweTwz7G",
  "key43": "4BiqsUWGnLQA7uq8ExXsU6EGrAQxa8YXtU1dqsTzC6doHNG8vVZwCZYzKFUBfGsN97Cq5KBMFza75asnaTguHwFt",
  "key44": "5ZDKP1vVAQkdquAVU7PGYJAroDjxdKK8K4eK6Z1Wety3h1tNwqFNgEwTJPcTE7iu7z8c6eANGxfbH6EgHoRSBD15",
  "key45": "5CkEs19kxnihBsXw2AAsMHYjTB7bfuVhRwZACmBBnnoaf2tY3mxBkWyjyVENX1Qg6Y6VymjhQiDxV2GnNhu8ntSJ",
  "key46": "4xkrn1ka6UQqTADHzpvigoP8cSbDzhLxfdtiu9FNJMTXJWwfpQJa5CpbhMgi53u2T1z9TN7idDPZFvMPjRRJMrnf",
  "key47": "2npX7aFWYMUjfpuNhiSPe1Nu5X3CtqrmrLvCoJHJr9shsPBeSb3JhJJ2iFwd6jPpZLY1quQzhQEdTHH56hbqCQSn",
  "key48": "247h4XpsY8wZQ8webVvcCwQfeByAwb5ipbbFrnZZuMUpWebZDDbbfjS85FgZTtFfqYYqgMvURpS6AQqZS3zEFwP9"
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
