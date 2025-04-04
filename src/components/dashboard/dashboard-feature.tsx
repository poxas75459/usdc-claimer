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
    "2T4zXhxn4W78MJ8euJ3zQ2AAu84T34TaUG39st6jyssDbB1tKtDf3XTTCs2N8mznRyB6LVdSxNg9CzFcmezVPQqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36r8SuB8xqpzUgRQkrQabNG7Vh8FCxeAthdRtPL9VQRmFP1kKL6ZnYS3tTKdnJQ8TrD6uv6N1wQCxQByvqS85vum",
  "key1": "25SWYmxtNHLaJunUTNbHzCsx7ApTVLtcUu9hhP4t7XKoUG67ZN7XNiuwhgWGigFMoTifBQkNxsEhi9NRCrLqGDDs",
  "key2": "K59NwSBp3ckkzn3HbVufiwRSjYQTRPjxPdkVg9Boq16K5HPRpAiasiQFTCGWe4SqK2dpA7s9ArMbGUkhGRFqJvj",
  "key3": "BpSpPz6yQukzUoJMKtnWVNJpAWZSsi839b1gE4K73rEXQP6vzMZ8hGjKRgSJVMB88rKYxjVoVfTRPfNZqf7VTSH",
  "key4": "aVbwupNBnWoUhDAV6ASJeJGEo4GSSAAiD41y45Cz99YwdkBoEVRTBp5YEYYLVAfncU1ZAHXis4S83ZQQaDei1ws",
  "key5": "4upvnAijU1KMMC2VZUFSsR8v38Kv3jBqbv2ngSm4y2GVz8K81t87XdgNdCrMNMUhxptuZWbBfGqZWrZZ1SUxTnNx",
  "key6": "2tkidP7rDZvpwhSjuUpmfU8xStrVAWN8pQSWYfggvCXJsFPn9jLHQfrSAKZivd98HQ7nrbYsS1oJdEit9iw8h37Q",
  "key7": "3f7oUqk4w7QivyvaPTxbVe2oZPSNiPCPy2Jbeoek6GWHopDJtS2muD8uT1TkKEPMR8ezBZ5Nw7gCx7cSnHh1my76",
  "key8": "5kMPACAGuJifQLkaXscR68jXDjEa64TYRUXAaWiNuUXSaUbLBAHc72CwMbrbAAFPAgx2MbMKcUQHpWV4pcQUSxZS",
  "key9": "Se5GtXLDUaVjHBpxnuE3UtKFo8czoYwHxKNLSXoo3EvynwLEjvYLMcoTzXhg2DevG9MtgdYJBJerzwaxg67cpaG",
  "key10": "4gu2wtU9XLNMVtY5zXsakLvjaLKahesuf6G1CqwkhPVbT2h43EdZSHZzSTxzgXt7n2bxNuvjD8o4JXcUqLmXdpu3",
  "key11": "4dSMVJs1ypDsmeaoqAZGd491av2vGodmTVVf2dhkEiBzqnJU6tVFk7owaRRCRGZ9ZeQwELZXqczDAmKJfbHka8WJ",
  "key12": "5xvPKdLG2h87mfuL3XbzqCbXQ54dyQkivfiCSifndAgpDAXaBPuub9MhFiqKcoi2DX8pApEDyLANDCsPGT3bY4KR",
  "key13": "QAthDxC8PSVaxJm4sk2Z8iPXwkE3He4cXLhenYDz3mV5YTUpFrmM6hNnJpNQHwUGT3m8jPF8duXtKVAUCETrfKH",
  "key14": "5fbq3EAheRbx7Ub1Mxz1pHerFdWgXSn9PjQ5HEY5gwiDsGR2HBAyMRZg8sg6MfAEMcpXt8jKG15ooCsYJNorRYQY",
  "key15": "5G2pHtbZqsqqUmh2CZ9ZB5UWg5oP51meo2dEyLZyS9sdEfa3sktD8536vBD9sNUGU8CheT9X7B9pbcwEDhYcd55T",
  "key16": "3tDvPRLp3fTsQBAteQ6GYXKXuuzWyLfjUfEq6oifJ3G4ahWjwBw1hS1aKMu6SjrGaQQbuddjM4D91M2kPrqiYRYR",
  "key17": "2dLM3jgcYiVp8aS6xhpMZgY47f7WqSmUr18GiECi3UJUdGtNsEfetGrWaNtE4MbSqrK9JHhne139VxRrszezf6Vx",
  "key18": "MPLz3HGbX2mkAPaquYFinETi8REVg3dNsuJAqzajXHavBx5wGiH9WDJQXpLrpS1UGyUH4ieZD64iuqLqogj7AeT",
  "key19": "3aXahmTkE4TyzuD9FHAaLdAiXrZPyn78ArWdFqwVHrd81r9iz4AXcP7i6wLD8FyFQnu6tWcsDNEXRskEWffrrpZ9",
  "key20": "52gkbdhPan8eSZqdnkPpL8R2THV5For7BPtsMbdv4HgjgvVwHhhTyk8STRWRUomQA3wqCybbdaAFWHvEWZs3yY2D",
  "key21": "3wZPUqNEqr1n4BG7jQNmPuDgognimGznStUP7DeXPqmnzb89M5KSwbWbeES6v91m3CM7S7D9P2qemME6UnpoXmZP",
  "key22": "5ixR6YhZB4k4P4mLNRsk7HqLhBq1zBrLWc8oZqsm6zDFLiyx49ACCcVCY4TGxLu3dEQZhN7U8y7oqzipUzBqMqsX",
  "key23": "6WiLbmMwZXqqM5zHRrqeBpE4VgetcdT5A2iDEBLNJDkovFh8rrytZPBUXjnVtKg4roUEHzBdZ3NCyim9vqPa4Aq",
  "key24": "24PDsw6voJSPpRKibkPAa2YRYsQX5CiCSAonyhnAjJdu6BcpkM1Y95Sm6dbkHKythYYNUNSfWQ9xTAvLrSnNHBum",
  "key25": "3xnXD1rTWM3AxE3xDYNwbW2T3vYQDdfhcmTGpwCyc8bo8Krjzw821EzDAXpt6gsvhpmdVQ7z4qBog3jfE3nBB4sg",
  "key26": "K4Q9d49f257mqbCijYZb4QNxwc5LTRSNs1iY1H48523pvzaPGcubraWkJTeBJG1oFZDLfyVx7YnUdmPkU4VHRb4",
  "key27": "4B7DiSnFhEqcGxUi6GiPfQ8inZPkNsdJWwf9moz71XqfWni9MPfBzCgu4qvGgFesPG5E4j7evN6hsW2NXkUx6Pyx",
  "key28": "2wNFf1t1jgbmPFQALi7CqyG6KZMXQd1HfZQvPuVeTXVFKnvUibvz9d6AZ7efFXgpFuH13wgTLThAYdZF9utFjsWJ",
  "key29": "5jPKjbmLsdXpH4pNU4J8qVXm6jzM1H55VoaJFzBXdCFgp5R7UyNtPkzLS3nfovNBNLpYNXYMSzWCG74wo3GNYz4C",
  "key30": "4bczkdWN6eMuLoVCCZqGH9f969bZLhNPb9YaEeZqHcXXaMMGhNu3L2yXbeXn6pbJ6DywCCQUJsv8DKfY7is72fwe",
  "key31": "5qG1DFyQcEgNzoisEC832FrCYuvMp2xLWQz7tMmztZr9bgqyqaAfEgutrizCyWycwJFMHxu5bCptaN3vqkutW2ku",
  "key32": "pbTUzxUcgF6YTQ7Te61UJBNpTN2VfmFmHSRdBoeiLShvdk4YzB4B7mGC6CtNTMmUn1P3v41S7HdCgCGFQ6QQFk7",
  "key33": "55N3zfTuVv8hZruEBFHPYxUsaW82Se7d2XFFjiTceVwFzHVjbbDjmGvaAYtBjufRRB28zs9go3sqHjsrtgWsP2zQ",
  "key34": "2mPuensjkw23enjaRM7RmgVY5w8khVdKfL2pyMvCBRWdJhSXbF9sgL6qMM6XwZS9GzcZ8RyD2JFczkhu7iFRztNa",
  "key35": "2dhFVvFb3V283mTsf8QBG7SvMFuqyuR43AxgNZGCrhUMvr4ADVfcY4DyHDsHu9LFzoS8mUWEt8kfKic4zCMEBdLo",
  "key36": "kHyJnVN1gn7P8JUZ1qZyiFeK67Ew4ngzuwQnL56FqmDZ7MKmtCHdH6gHmidfHCute8FBNkYSufbGPgwpcRaoi8g",
  "key37": "4T7gLtugj1XcCzPkrip21xU9YNLr4hkuq7iPLrzptwx9KU2VLDMaRw4fKohnshD3MftzhEGeRMKj8eHNVxFoXvyu"
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
