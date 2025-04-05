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
    "5MiMhM2xj7FppVXSTMEpePH8RGP4XTc53g1XqZVLb6sNEFPLj57iq5DywDDjspL3Er4fVantWsfKr7EAisJgvNLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LsjSTuVwzjFrYhULFRez9or2BqjEaTQkKqnZhjeBSLXryVuY11tgQ2GGjidAiEt3veoqRbBSYMm3xFPLg2MeitE",
  "key1": "4peHX9jzutZFLymUL1EvaWLjr67NrLgkqXqn227kvdEPDhEGrUNMg6ZEt1yDy5kwLdvS8UZoBgxvSQy7yDYeMjy3",
  "key2": "US2YByKjzLqKjMK95WU7G9w8GuZSKTPdDMwsViAmrXzN6pF4HxmaX6zUfDHqQqMB3ef6Z2yLi7fgvunEvaUhwzT",
  "key3": "61NftD8gEFkhRzzUQTCmMPQcqdAr4TpgnbisMjjy8LGkQ5bXtDLuuh9HrV2D8CpgNthLkkht3wXMPRgG84AkmjBQ",
  "key4": "3Wgcq4d9tpdN7zWH2iTJ7SAt4u4LpeuCt3h9KjKNnEMqg5DMJGfxob7aYtFMxsabSEmmfWsv7HHPWSHMSqhxjCQE",
  "key5": "2fyaerj8bRu2NVhJMeCRidNdoqFSA9rgJeCS77n19NiBis8hz5zrn2Sz9rEq1UDVr36ocwFQ2xFNnuYqHtoJQzhT",
  "key6": "4ed8nM2YipTTp5ApoANAj1Hqy64YHxEoE4mKiZGDjtqboGF6oCzhsWS9tvsQ2ifTM2UDv3ZW7bhiTfynyDpdff7T",
  "key7": "4QZGnSsFc1RhKzY9Z3VAuxN6ah2jwyWSCj9LpNkVrq9NLzqXfwYR7WHMZCRgwLUt32YrYQd6iK2NJ6YTEa59yST7",
  "key8": "2qJxT1c5tRuAQYYNRuur3e3nVKQsa7aGV5tXeqj5kS3ex6VrxuF34jNsSKkP8d68au53MvMMqFYXrLTTXnB2DLWJ",
  "key9": "HGEawWMv2d4YiD4k6oK85cFrPTSGzAuvLfzsnL2QGNePvyefVgGTgfYjxKEFwCqng8ufC1AZ8pGHgVxmwoAekik",
  "key10": "4o1cgdrjCCuJoi1BjMC8Eo5kJn3vXmvhX1U1jquwTLZGBwx9gBW1fCwXFt2v723GWLt9GY8CCCrnWDQFV7RTSKBo",
  "key11": "39ER3gfsUemgRfEhYZi2TL3W22MFsKPUcbuoQmVa7MVBTAgbxnk4KPmBk1SJyE7Th2MWuBdY6KXbEegw4bQ82ZVp",
  "key12": "4c4g7Dg3xohJVJELXTjjhq8gLo9G9E8wuTXDWUFPbbpocgfNbaBY58tPSP56BkC22rem7AKUjcAMYq3hqFGVZZs4",
  "key13": "3cLuhBFTRtAA7bSJmmMaPQHRZACka6VURbuEopzLgPDoYaCW9wZwqYHk4zseuQZ6VwCPfZqhwQ34ntTSYUnWzU4g",
  "key14": "4oN3PNU6sYTgk9XqPvhAdRvALQAcPRbnZPQSRQYm6eXobgfMupBv3jCziprE2PHUhYCUHqpSdx4N5gDDY1QaUfiY",
  "key15": "b2bzYmVojd6zouVcGL3DFpQNtnLnKsuD16BptHepevvviMqqEhXpYHeMLZC29GwnxRJ6gtFpJHGyxuAaLFeU8wq",
  "key16": "5gBiP5KHSzcgMQ8TDYRfLFLhW5N4JgZPPEXUEQS9NCec83w6GUjZj9nRKWoxStttathsdJJshdZdq8FRz1We8mcn",
  "key17": "34F8Xnq7ViiY8JY1TWT4mgH3DYbeGGLmpxwLkFyhfbverubTcKJqoGS3XaGx2ixsaV1nYjqHQDHgBGSqfvoYgoys",
  "key18": "5F7zfdGD8SwztoCg5QNJm5cksbc89kpiGoUbvWfQeP1JYyw5LmeJdi2hg4zEBxrKNuwyzWbQfjd5EaxqqdTBv7UU",
  "key19": "2rZ6mUPQ91vXFQB1zcWtjNEF9oQFue1DapiFFM2XkeSZqS27Ta8RrAmeBYkJG3DmdwAzSsebUCSxNEnecv3467g7",
  "key20": "3J6M5HM6CP7n4EirXwXkH4TxJ69vzFxYPeDBJMwwVHik4EDHdLLXsoLGVkAPGL9a5Q9w3a8DXN6zNBZxjMFE36pE",
  "key21": "XHFjZ81F6hz8DjUPZCXNpXQ8y9XJ36YsN75kNCxU3Gy6guGooChRRc2JURtE2FVPBuNzVULPerBhDZAkBnRccRb",
  "key22": "kAsP1JkkW63HCJ1aSjyo8oiP3JjMz9TCKuaduj8VJjbiCkaVMqMPCf3yGChQs8jZpfGwj8pMaPfT82TJorMG2wh",
  "key23": "3735cxdsEdhcsxTuAAuuUztcwv8zJwwkay1tKwc9XV6VTDr2VJsi9nvJ2Xab12HAEzCKGt9H7TKkSH6dov7PEr9B",
  "key24": "4YczKSPnM4bkZx85kR3HeV1MbRmqrRq82EgnHLuY3AUqaUpa7Z9QwgSrBrwuYtP2K3JpGDLNAJ2QduuwWSpERqyT",
  "key25": "41YRNmuY3XBaj8Cd7hXM71NNqqMwwYeLVWANnp223zQdTiW8guF9KpVQct1MacQjwfdit4NVhTaqY1pva1Kk21HY",
  "key26": "52Ef13u7aSeh7onMgcjBi1NBmZGhEn9KYT5NxNYan37VmQNNGoqU7hFsFXLKj9m3gqjX1M4BRHjYSRtWi8BexZPZ",
  "key27": "2auotak9KwiG1z3EY232mBsbJdZZVzBypWhXFGnPGYd9RsUpUUsoAmaYyyVbEv5KA76H1ebd5RP8oDB4fet2vBPJ",
  "key28": "492Db3VM5MHxcLLNAvWWGVSL535jVxEN2NRdxUAjSAug6kAoN9cHJcLp6UaYBHGLxrGNzDDcRScL1WQjBkTJGQW8",
  "key29": "3PGqSEPH5wg3sCPAs55Cv31PxjGK2Jvj9Pi4inwjt5XKTY1qyp6zysZoWtmGWR3Cw7ykcxyVxfJAZkT6mufhYvCY",
  "key30": "5dv9BTxeT6uZeQpZZtbyxr6zDUoQustdCD2u2ZYQNgdBDz8yepF8vjcoGe5f5QgRnQZWt2auAWkkTrhB5GEe9Tys",
  "key31": "3Z7pLrWuyXaGtVLjBQwYiaiWzxLV4MpDWMWTjLVv7CYi3eLDPBeM7HXMeBS77LzrFQjSETQQ4HARYn4PYtCMu6ei",
  "key32": "3MP4f2uztd71mvQnAVhQD8Woxh9Sr78CFp96HYYZSArAvt5VSjHwLcPz4bkQh2BzVggPoGWEGwboohbzvWYZbWg1",
  "key33": "2zy2qRSJ5MvsoAmT2ZCoAPb9uNSUtxwZjAPhBaJLM9QVvqNSLTuwJ3aCkr3PF8pBxaE4Uioy9e3f13gRprGwsK9x",
  "key34": "4nkxbnV143NptMpKyBWzXA4Pd1323adqfuUDefxMjAR8yMxt85Du6TmtuQzwuibnp4w4VZo27HoYsH7rUWHU8r2w",
  "key35": "3oG6wPGuhTFc8kFESUjs61Jaz3LrUPfPxmMaGHiyksfzzsiPoK7qYkSYS4TMi1yRMkMCRbJn8xpp4hnxLLXAgqWr",
  "key36": "2fnyAjToQfo7agVVQP8BjTYYbo9xUECbraHzrT4mmnyueXLMuFFgCpQLjGAEf6FSbhYBRT1XLd8v2G41jHmSZyH6",
  "key37": "298j5P7dMHG3GtCBbXQM1eoz5icKmf5p2uicmDRAA2yXShS6xkxX6ANh8ZjH4LAbhNdbVKbGF8qxa8JETmkrthtd",
  "key38": "3eRNLKSSUcfbPrMnrNf2CGhRwpatsVtWDLCqbE5RHSQvoELXXdb8GRCFnBfs2KkAvj9e1nJHM28E5myt6VZVdGPA",
  "key39": "3sWsFA4X4Chh1s8vmerL49KBPC4AJrpZcGD6g1AnhskGdJ1Yq3HMQCbRMt1mYm8K5VibkhsxaPMcRx4FvpaXLdm1",
  "key40": "29BX1sdkoCMasdvsh8KHNk6eauwsnQBL3jRHEr5T2M4W2SSJ69VW37H59zaTGixGywsMuPUeo1GAjCppsjdrCUNv",
  "key41": "29dNU4yqM3qo3UkoHELnNWmGpMiE8wWDvRpq9FqUSaQ6LyTQMGHzftYkr1GvtL3D9v8GRPCFGz3924AofFy543DG",
  "key42": "35t5gS8dfMYbyTeZhUFaRMte6gWq2a5jDrnmE9KZCFfq9jGVb77Ftgyds5hcj3yDEAXiy7HBtMJ4CQMknnPYac3S",
  "key43": "2ghd8ooSDJmNh6b53znxgHSoRtvHW8eUeqYoPN6NRk6Bad8EVsCNtNnKp6EhQY5jDMhuaHQdtvgbxaSSJ2Ehp1TX",
  "key44": "2LtKNEUAxmC4kfxGsSqKR32SLT6CN4rCjHE1GbvSYZbFFLDja6rwtnQM6y48tiiXR2zZLrHQ8npKsnKWgwYqaVHe",
  "key45": "4xsirf9w6ZAjXsKXE17ZZRHYFfoU1oCUrJLeSUPeZE69mxcz4TEkiLbXx59j8q4JoS9zPz3dmpJ8MAH3dmPdfrmi",
  "key46": "3CmGDby2LAZMDC1EAxtb1dDtmCSqCnpWMF2xJet7wjiz59F338evwxcYDNZzKuEYuT8mevpsZJvf2yUCfWAVWKYH",
  "key47": "5MtuVvKSgCjBMFPBGYpsMKipCNvSLNTaCBgW2R6G9mnSUrLcwYczvEpQ28HvwqAX4qLhAjYpTzSbSEg2KbEv4VyX",
  "key48": "39Yik6V15yBzkRKdKaxt6z7rkrD7i76RxYeffJToJJJDXL6wDMZhpbh2YyehC8NoQrQ9BRFZhXEFGsHCoM9cS1Hk"
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
