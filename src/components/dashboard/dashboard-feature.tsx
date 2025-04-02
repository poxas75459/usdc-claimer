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
    "5FcG3TTpDtQ7BbDXfty6irrGYyMmeVEXEDk9PeJcrJmjSfgtTpndoHgfKVLZUAgAHUiEamSBkURaGehDwhh1pEJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FCjvEKS9SgWJ6GNMuMgjC4KHbxdVVDceuH8VLbTCru5G6ErrpGCxq5MBK8UnnvjkLX6KSGHFQNVEPNjCvRPS5vs",
  "key1": "57Wh76bcBSjUi4qbBJeMC51onXUaPUUsrwJi8E2BQTQnbftR7Cnh5nfKCeEDAzcJefLs5cWT3RUTx7BdxqaCX6L6",
  "key2": "5Cbq85zWW5okYUBprzF25BFfz3yvrkgr7RUxRstjEFuYtcWtxgV7oERDZ3pGBJB2WLroiDGmz56kAFkcDurHxTtj",
  "key3": "kZ8hK8iWi4Nj5nokbcdYo3RJQttVMxaju8gN92VoDNxD4mxXTbkybwVggTDTHVNSJMYrEtTZrnJrfHtBXfj9BGW",
  "key4": "5QmaJpTUwBjwHTbVpBAxM5g1z6wueNvtNn3XGpCua9NXdJgEhLXqCvyNFJLZek9yMB22M7YE47DrsPdJmoGTh3AJ",
  "key5": "3hhQpsKFF96AStyRXaBQSEHAa9ZsfMWwsiae4LqLKdQ1B3jyXqbdb6Y2KA7Ka6gPPqSehcc54qApXSDUdjqTynnS",
  "key6": "3BFZMLtade7o31TVvbRAMGxEXce7yzMC4c5t5YWBRK8GhHPoQyUYmQdAnD2LnPTAmNt2cjrBJx8jNFG6BsqGQtuH",
  "key7": "4QhdR4tXTWiRfSLbLWnZUeuCfNU2rzV9NZc3PEfbcVkKa5p5rB4MUnoq41mcZJQnTcGUTeGfT5ZynKFyed5Z1V1e",
  "key8": "2pR1QZffjaAX5X2oaGLJqrRzbzNibsNXK2dj8om8pJw8iFYR9UEQpvXnZ8eAKbg1mYd4U5QFFDJzqYqVmEMmH9Ws",
  "key9": "2suqyLSbPbii8ttzm7QnK1ut1yrzCwdi4A7PQPUyt33Vm6yREzikV6LDZdM1o7bBAKrV8xSKLfjybPpCQ6U5Qrds",
  "key10": "481zBSUqB4Ss5U6LKccBxTVFeWj5Hvg6R7db38kuZmJJ2fjxXAz5YQmXZWqyETkWacSmcKAxfMKX7QvXQen4iHjR",
  "key11": "472WRDTf3jk6fFWnZs6aQDZcnMk5KpwBXdTJmnT7dRawWMAzqhyhEKYrPiVQ6GpcQXdyAKdTUzWfK1HAFkGFMumy",
  "key12": "4y4r85DodfSRasSVH8umN6Wa8dqUFEpUFHdyTK7UBMpjK74WuZhGikBT6XimCW848tEDmza5dfVzL14xR7nMtish",
  "key13": "3kVkXeE2RL2YHHdEdxKfN5dHmeScV1EYJQe4N5ax47ay5uH9jKPmpw3PBnEddd4DL37PVi9jQXW51Ajpbu1zTP8Z",
  "key14": "51XPX4QJHWFkMGM5AWEMsjgEcQpG5wJwWhCiAjvnnZaX4ng3kr7ky318jUFyNTDNipjBvyCX8zMpVErGayTkLfr3",
  "key15": "ZVStgH6VZ1PeuNQ7gH8muCj85UX3zYBGUK8ntsK4DY2pRGJczuEzRPqGG1Mv4b3rgoGLADuMrJGBqFGHFoucjKB",
  "key16": "3YJaRLDFrLzNA9rxHte7JW3KtaG1mqfRXAN9eTyUNbz75dGL62MVn7Ka4J7cMGTwMr9BnfQkVxzpDGb1EtVjxJZL",
  "key17": "4KqQc1jjpprHXyBpbE6acpTedkP4tS1DRcbK7WXLDCXg3vt9zgzreWvvzx5iBXjHYtKxJntGxAJGDJYrfTgq4KXz",
  "key18": "27csk8q7CWZKFHX1p74bxafjwSVSxze9ju72AmSbya4Twbo7ub5aR1VJGhysMWCW9Hnd26C8cQfcecjNFjbiHbRn",
  "key19": "3LnpX53EMX2sVkE4Ugs2AJ1gtUVEktD2fvNTtnGEtg9x2yZUf2KA2pD9y4TYx3ACf3YB3aujMwdEeE7DtJNwk3su",
  "key20": "5zkAcgPDyaiasyjnaqyagzDLs6BkuhY4zjupYypPYUnEBSwWF6orPDsDZNDewpXdgQeKsYggw8eQYeB9XQcAYAxh",
  "key21": "4wESB4refkgcUGDkYrPkiqbjV1tG3o9r5kiedsEuZ9CUqqdS7yMaBfZMpTUDyGM7qnmyLpcF52mpvk8XD28m1crT",
  "key22": "4ePRb7E7v8zGdcD7ZCC6MGyVsZUxX21PuKDMgecvz3M9TnznMWou9YaQjxHkzGSLpBvhsWuoqavf7gEMVubjFLU7",
  "key23": "b5yZjFwywP6YiYAs2cCjapKo1QHjqd3YNeU3MbvA5wbjqB8gjtiqmET3FCzZSXo8pkxf6mFuraGviQzpdz37ioS",
  "key24": "67cu41NvSRnx8myWjei8kssfj6nuu4BYAnPtx99SEHbx551wzoJdrfMdkYaTM4SdS4DJDRXp7CTEwXaH6Bb1dMvN",
  "key25": "4iEnUXaNBpyif771sBKzaK4Ho1c5nerAr1G1hMpSwwTaVB7t17NV5VFyf5MvJFabGLivgx1ZWfdMXsbfjt1eQkY4",
  "key26": "458Bky5ZiaqmY5hEK8w3cReQPgnXydi7g64zvJgwGJCxp7Lj8wwPSA8TBNEHeiqCrfjxoiSWTwfcBn3qpYaADnh",
  "key27": "2ig8xFr5PH56WisHn8np7CevUQAH1sVF9HiTnz1c7T1GukrP4xrhGGZZkPKR8U2Et31cpXZggVWzFS3tN1QypJcH",
  "key28": "3QUUFmKEoiEtrjp7t8DG79nX6BP5B6JZrF8NHP6B2zgi3M1kZ4DtGGsJeGpMmJ3wDxiVCLY6bzPLsTo4x9jdoY9r",
  "key29": "PPDooMtEFMAhku8y2vsU8ZBQxnP8Ud2jC81fconBgMDc6rYpvXAqKaAQyNMxTHVNajfM9vssCYjLnp8DuRhC6e1",
  "key30": "5YbuUmcarChqTP8J9Ym5XpFHpUWrMiYCM7tKLuvVoF2dtspYdBjpApShJjutJPBFK2fkTKzUgoUMZ45SiM1NkHLt",
  "key31": "5b8yBQ1eKaiCxyvwpjQpJen6CccdASQFuRb858z3AReArrAAq2u2LetT9irg4jEqcapV63zxHcPvZiocus9tFkpR",
  "key32": "5bkdt6sKrijqBE6PWEc3GnQe5mcjqPWGfiZSjz72TbTSYJ5aW65FUk93sp76FGRdRguAMsF3C9DgxTHD7t3ZZ3oc",
  "key33": "3fEG8X1h3VC9iJki1ELVNXD74zpfarAQSESkmohLm9pqk9QfUavhKuW5BRkhwmBeiMCL5g1iGF2uWxwVSFkNFAVe",
  "key34": "4rdfLmCJFeFQjWr13Ru1WhfDqMWrjk1LLeqynfj7KJdrQMzQoPjowrZF5u8XJsAdHUixgzmtWRRceb3HZwZ6pn7g",
  "key35": "2hRF88v7yZC8hhAdzn9svjCgpyNr5kqz5HSJ9Lnyu5FKnsSin98XcMiFCXNUNb4ci8GcZrW2RLzaukTJhMfeMBkU",
  "key36": "43YfnAzbDvNDp5786pAx96p7t2QmjeCnpX4fPzUzCSaF4QimH1UrQkvHf1vH3es7JUsZabzuYSLmHjPFs4qGdGVX",
  "key37": "2gTquGyBPxvzKntCPqXv52u7ZFXT98QjmAQmPaacczksnqu9og74MJHxoWn1AsqT5KsXBzeHpGPDpZiXxu7oTRW4",
  "key38": "5zhXsKFekt1dHd3Kv6QhhehcswVKM71JmoiiTr21cZAVRgJBgi3EjxqH4gWaqaW7wK6FusB5qmBW7KDYoCRo6c6L",
  "key39": "25RHjBwWS4d81jndqN2Zw8V9yuPAiTQMQtvBoCrUJZEKzrEHSvhWfhkuXDpcpjFQVdLi1G5o9fs1M9mVERRoXvQY",
  "key40": "62HjuMeNWrvGHWSMDgbj3VRaPqdo6zQJBYhkfFcWSeDcrN7V696QU8GwETk9iXzsDwctqgYZR2iWVHcFKzfio8t4",
  "key41": "2qHGzLwFZSeBtLigxbtA2fH6Rip9mvEE5ntENSNTuda1izX2hsR5VyU8uU4RQMEPPS7qxU7E1mncru2J2spzkMVc",
  "key42": "4UP2bfnJu2eYU49h5P4TwqCU7XWdxbBDVRLX3vjBA6gP4HFzXZVgGscPXVCHKrSd7bPKJ97NpFUgzQTCSGsupgS1",
  "key43": "3TLeXAQjFZnT3Hx98UeP9EnURoGzEhZY8tK9SfoFuE5zti7KYvgXN3nVFe2mCctCrUuP7UmgkvzKGTPjGmVmoeU4"
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
