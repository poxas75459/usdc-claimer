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
    "ebJ6XjcBbPHkuWwK4idLZr3iimpP3tJMw9kwsoWZvuzdykjP5PQp57fK5TaafJ3uSwiQnJMFUSzGZaTEBvgYyPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e4U1hTERq5Kk3QG3KijT41ZKrizjB2ksXoHXtMMDJLU2qvacmECNU34rZEnxWPgT6YtYDqAPtF2ZB9C2A5Z1E5D",
  "key1": "5tRtwdbC7Zs4Rns15Lmum3CBiDShtRwceMr5cmVU1HBoSyAeN3wEJSvYP7rLebS5MdhNJ9qYoD3gTLfM4wbMcb9N",
  "key2": "4hxDYE9eWkaTiUUUx9ig6PfuH1Vnmcrxqe8pPjNq1Fb8ScG9fSbqfFgpN5QAEwqnjPg2Gd8f8W6fw8ubd8UKQhua",
  "key3": "31RYSnTG2EpSQqHDJHs2yUPk77w4G5uPkdVsRT1ALbvFkdB4x49SayJSK6tDd6Di5uYm6WTdCWne4Qy78uqY6av2",
  "key4": "Zc8WrPuMRv7jGtiSUZv689fiwd466PqCDjrD14HXLZTDzaEeL3EDRGsBoL7sqktJqJG4ekT7g1BLhyUEk4a1JBG",
  "key5": "2EBw5TzHEtFZFjPzsdVa7e4cxQhjP2CAYNff4xkDsMbkcXEWgQDMsSpjMBtTMhPqCko94Qf45CvhtVEkJhqAdquA",
  "key6": "GRMwTiVmdbqvxXArMispFBrMW3WwftEgnxbsCJux8U4ddssgtRhobY8mYnySFKKYTYEJzoYDCMUY5xqTGbKyTr8",
  "key7": "3ukexspkpS2B67osTUdrHxM7HnLKpA74zHDpMHZwNyPm6Yd3JBFpKusUxHTLZgzaZZmV7mFBMCRezJmM8bAuQjnv",
  "key8": "34vgqrMHDmnThA4nsuGaM8qYTEeWT6wWkJQnV1JDpSJWjRMqTcVVKsS7zitDAZYiko4ri4ucgWgmwZp964aXUvbH",
  "key9": "2bNBVAVXDs8GvWFDnHJXrzMtd8GCjqC4U1Z9pDc8o8CJSvACqoLdGFPYpB9H55giPjTeX2oTakAoCgpkSmnYqUDw",
  "key10": "BZxARLXxrS9YG1MnUWY9XGZHCtt9Adk756WX685muuyuizJVjatx4ToZVdkL9cgNmzV5Jy7zTWztC4tmpAYibbW",
  "key11": "3m78UMRHt93XCbuPQxJchcXUWzQvn7ref8PquP8rmYDqZmT6B9mVCtfaFkBCVui5aRMoTjukU94MvRVEHfP3nMe5",
  "key12": "5r4wwnWYZkkC5c6cZ9BDAtvk1irxT6VerxnDYmPkCcddyTL3RbqmcLh1JqHcwmj65RY5a7PPNCXxrDGtKnWLgbPz",
  "key13": "3tpaDwhZ2h3QSToQdo2Qdnfdcf7f46Np9p432RnPS6HZzrURcqTebTtrLnic1JeHjz55Fb2Nc2zWToH47n44T5jV",
  "key14": "3JkJ4SJWK1JUvAqT5mxi1PvP5T62na2wrp1mqehagg8kVnF7Eo24afatFZXknfkPx4V1PLHJ284TpkmF7pGUj9vi",
  "key15": "2f2TeBF2DW9CPHirDK7NpZ66LjSGLoNmqWqfHYotRx53vowx4j8XF9W3ycFF5BrR41NvKJu9uxKiyVPakZkfVGMW",
  "key16": "381na3LvC7cHNwdfF44ViQMmeCdkRkuNDBEavPvkCwRo1xp7AkK4rLCeXV46wDdcQu8JF96RUki7DVEEmU5TKbvN",
  "key17": "5Bcai3C6Lut9zMniM3NdDDoK3G7Gv3nGJ7xE3ArrEBYPyps6FkgKAVCtRGxG3wBGoAhHVLaeqUpCiTHoAWXFuc1W",
  "key18": "3CJkXVreXLA5TdwG7y6qvXmYMqU6b3jeSwkE2Nnys4z4ya54GAyJy6yaCjX9c6za1AjQyyr5S1gq7QxGBoAppkzX",
  "key19": "2X92A5fU4Fxu6PR6U1UkNVpxafCu2ZnLSLKBi4WfVeWN6t5QE3ABXfMeWXsbrFFPSHppNhovApK2fEGbXFN3p2Hi",
  "key20": "5o8fam6YEmQCFjLKB4fCNyCXQfrHwsMQkP6mmQFnkHRKGCoXUckUGmybxXwFtTRbJQoKoiQScShuVQF3anG5fvPp",
  "key21": "5zKeNMjKrzV2RpGYZfzUJxiYDNnKWEtJFjWXLbeJmMPrGBLM727NweRxfFEUqb2FzvDd4tgyWrMciCZtmAbkUpuW",
  "key22": "2PmKcqzMxCqyUrrgBVUVmo2QsRcjfoprmMPQHMPyzrJL1gdfj9SZeE8HhTKBSvBigM44w1JsqZYaJDkKKM6DvZ2E",
  "key23": "5JHeXLd8tRt75nvZu5yJfvRMkaiJyaJyg9pCabSGXLrdwuZAPjn2rZJABwYEk47NoSzvQ6R1j8bAc5GHLpHzE5mD",
  "key24": "3B9TXWQ3jzL537q3y3VTYwc8FdtVdswBbwqpUr2LBCQztKfukX83wNPfk1mzNCbwSLdU3vfDeN8J3U2uCnFGdaA8",
  "key25": "5kJvanQaFtV4LwaJRdue9FWj5iYueUamtjB31ee6U3EDJURwFzsUVeq4XKPB2fCScWaRmDFiRYW27FrexRZ1yqjp",
  "key26": "5NjTRepJWHGqzxGpb5oYhs4ah8JLkT5p2SzMoFLKZ4TM6wtHwcSjVArbsZzWyzBeoQsReKgPX1D1NSQd9rWBViBW",
  "key27": "4STWsdtqHxdo83nCYpP4GuJnkVeaMFrh8Hyin9EWTHLVKMmA22Nwfn7ujAnbVXWVz2tduWs65FwWsuENE7nyYhR7",
  "key28": "3mvsBq5H8xhSnQE3PN9wRWRSxUwcQNZ5trvNrZArsYB2wWq9oRuSwVECePksVCMxdHhGa5syveuGVs73AboK9vwd",
  "key29": "4bqn5Jg7r56xKZyhGuBcuUNuhrUTFUKBpmQgkX7BZkEDXSh3rCEjhN8YxoevWEN4er1rMuE6ssQTB5xQLBBs2KUj",
  "key30": "26QzL7cvKHhZbNg18UoXwn8niAmtfTrWxHq1QUNSRr8SbwL5YTFWJMzUsBQPvci15dNTcSto8pzJtLr9fz5d4Xyr",
  "key31": "4PT6ftRnt7NuXavnhDfk4diR4rsjzS77RojfHG7xgzn9AcsfbTBnFrhZa2i8K2RMEfuL9FY5HEFm9ezFV37KwamF",
  "key32": "22ZmLAUQTD3RJWUYtzw9SqiFE2TqkPtDo24t5Z1GZ9uairZf7tWEN8qE3g7vh5BVnrkeadSid7EPzbatpNQrDU8E",
  "key33": "5VqppGbDyaptrYVRZSpF212xkKgcbUGiWQfJG5JDEbMz9Y4tusQzUfNGAwFdXnjWa9rKjwBWr83iDhGXNHNRyek5",
  "key34": "eaCGFShBBQw4xKrw9VAmYNTi2Judouh5sRctMjgdmix4FkAjvQEow8XCFLiuiBcvvdc7yof2F43gfV4N3wsgs9M",
  "key35": "4EBppTHoE6V8888mkut5UZmvMBBZFiWq3ayQ1pWi2zmyQEMUS42fLyy8v6qZ9JncjrrqjVMm6TnjrFk8nxXsn3ba",
  "key36": "2NmgWrKtgXyzKNK8uR8ga7zY6qKok4qiVR5RL1AMUWMCQWnM8WUFaqB72mMMc9tUbMTjgqui9PDAiZpvjaNjE3dD",
  "key37": "327JTnsExGbK2K5gFYnWubXGik1fjKQePR2DXPnuzkSxCuPsWrotZZ56n6Nh3D1ZqsM8xVSvsWqBskZXHCvEaCyx",
  "key38": "41CLhNxwsyuyRuUuRhcS34MPrr1uzQq7B2aGNSrBRoqg6gkyCQAta1NoZF4jccvH7n7m1CZSeVMfwDUPxNFaaSYG",
  "key39": "3jZx2vrYeEqAZF881Nvf2eH2oR51mrNM1t4MMHji78oHjCdVECrNxiwPwxMVQhnEWmWWwxwDPAmbex18JAt9nxdt",
  "key40": "2EgtHa8TfgiRjg93MdJEFGBQahH1T4VoVZ5gPS5rCkvFHFm249uskvA2JQV4SZjAs6q86a2iFGUFJC93N3zeWEiC",
  "key41": "27nS4mUpAmpJNd6DWTAtwyJeyyZSFb6PBMS32XV2MvTu99F9DsV7kh3VEEyCArtAt1Wo7Uk7UmdqpsvwRnDSxUYZ",
  "key42": "aNmm11y375LYXybaW83dqgcr9MTa5n74FcdbNZTW6RofrNwhiG1fP65F6uWxUVimohssG6DAzbL5tke4eEPNAQC",
  "key43": "5Kg7kqpjeXsQqduEWJthm3eJrtJSWmwXSdNrsjgX4jEjyraSiU6qQG3UQAvzaKwFoyCv7wsMGjRpjJM3dANYVYDk",
  "key44": "gC3YkH6Cvpn8RS3kx5Z7C5395CiKFXaeWBxKjPs35GAMtZMr5LdXajAcwfJtYPpG5ZPTr6Sg4y5WPyETDT5uC7H",
  "key45": "3TjiDEDdUEZMXqQ8A25xTLSpZmhGhDY9NapfkKQtsxYudMY1NLVvmwK7NwhAgLhKf3GM3szp8h5sTMWTmvDSVT4P",
  "key46": "575BhxzpM4HXR8aa7f8oR6zMWhXFqq8D9YL25yWuTDRZNRej9hg3AbEaMwQE3RM4gvCCt3o1y1ycgdckVoRpF17",
  "key47": "qCX9M2PUL5mG1XVHCkyoqtPbvTHssh2hnArrjTox5EnfrocsmzBgTJGYxZtfk82gfAgwdWCZNyqhAZwATGd9fp6",
  "key48": "58zeB4wt6BD8YyqwTothfrmubou3BKNZAdJnAueX4rpPivVUuQaZq78eZxV82JW6rHkEdS6jp4WVh95nz5M2WhYy",
  "key49": "5Qd3xnHeBebxQANvkcggu7wHVMKdER1cdh8RGZ2UqbmB6tiYddpzSshS6puEzDBU4dXHwDHbAuS7aXcymYx4AJUd"
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
