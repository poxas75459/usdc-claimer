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
    "28zhDAFGFvCFLdD6aXuB1PATRvYmZpaG2NAXYY1CVbKMuy546wEceSCxdoajCQshzc8K1iemHUskQHHeJdFqavSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dSvh24birc6992L8FSdtCCPW2ZQN3NjsvaJg7eSmiV4Lm3EoYd5kPn28zd615BmDMmewEXm3aCksfxvycz7MaqU",
  "key1": "3z8LSjGWDKgs9SHsy3qXdCYEtV3oEXMWkic6hcoUNLbgLGY8N8yjBVsvxNZwBQXiuwAiMXKLp3deLcZjgeJg6Zcy",
  "key2": "2pyjTEqP9aLJXXX9hemZXXxrSkrL6f5SwpPxbjic8J5KBGtD2esqfD55K56b6i53KHdh1aVN2vHHzuHjuuogCxgw",
  "key3": "5dKLqPKp6kUX24ZY89mLDAfbh5cAfGfuqiHyv8xb4FZUhsk5fCxemTrtBv5sqWwq7MttKLiXxPtGE4fdtaRFXSBL",
  "key4": "45eqFzKnNNZLdq5tcMWSn6Lt5BtoKtZpkBCyiQiYg2VBpJgPJ37FPjZtDqYTmZcSLxoegctNPavifR4hd8HhSTCw",
  "key5": "3hKUJnauR43FEbNeXmWYczxTsxiuq7Dx34UMBcUAj9kjt2b9HEFiEFyVFXTD11K85R2q5Uufax2KYTgYfouMCVhU",
  "key6": "65hfnKq1ucUJmgydWXGDuVFsVyxfwt1v3E2ETR2jTjZxQKCNjU9CSHPmSTgmpsuSNw9oj2pB2gyYGk1TAd7UnP76",
  "key7": "62w4C58VQ7c7jjfHwrpFwut23govBw6nPgZFGr9C56hEiGJYvHwxXjZbNiAPHv9fHNUr5JR255frPyELTnS7jJo1",
  "key8": "CA7sof624bYDXjv37npfy4tYuG1J4fXSFGyDeJ2KnqbqKbWxtxi3GP9mSbR75nNvMhwddnDSSKVJFnYsDjUeDA7",
  "key9": "4vayFuz87zuM13gBn9uV8NkoaxwcFa2Zj7Q394wyM3KcPhKjLcvQHKbQ6juk8UCTLEGh1joQeGBZy6LhGvV1KhFC",
  "key10": "43rN4Avw85Je2WjtLjvStZxobzw8tEW1WAV9QXPFwicSKxvyLqLdgP4m6VTsYSYiiKnmf7nK4i5GEVPcRtoUpiAw",
  "key11": "cWttLtYDFWhj8mrgNb9rh6yxRUyTLpsXrr72LawdghXU4gHj7sWR5TwV1cx6mCcK87VDJeEpEkaAjfP2rDyfhPp",
  "key12": "2okFhLi7f5tZWa9ufgW3WKvQqtzNNc77YZzmsSRYoEgHrCdHWTrGGZh4TNtLDAmo29XafbWz46cwpkR6pBr7A711",
  "key13": "4SnATEEsVNKPbCT63MFNriBkXU6jR7qSuMLVdfwsy873tyn5JqQLT8SDeHKNkkBy52b9YJXsuHp1qzJZWs7u9rUV",
  "key14": "2ucaMgnxm4k8hSpV9tTadnHfPweKPKLpi4UjYvypPQyo5PCi9bHtGzd9k1dMVotzW29RqfBrYLXeowKvHW9vtUi5",
  "key15": "3ArRU8EboQnRPxuhTmtdfDUH9JH9RUDCrukyaHAS88FC7ig7EybpaVXrqMSbQsspCbCwoB1kwLqwT2ny7WxtjRRe",
  "key16": "3x7MvhPzbKtLs656ZY29JhWroayJ8A5feyG8efhcVsYC5BvubDkYmpHqquaQxwDevcBG75mdqiuH6YgxUYWrRDPU",
  "key17": "dk46TaH9cKdw7jkYeaTNcYPsePwBqyiowJ4vkG1YbZbAFy4nePD9TqywYTsNu8RaY4vf9jp24ZY9iWW6C8VCGQG",
  "key18": "4YAnFFYpzE8x8PabUXYuzBHEFbp5VgFAYRWpShuLx1ytmX9xCQNvJua8h9jgD8msd8PgWQboULkpHDooKwECqZBF",
  "key19": "4dUppMCeQ8M7snTcaTw28EvV81c1zd5mKFaw13Pf1KtUMa8e37opJ1cmyVSqkpJVgGvijxjXsqVybS62ZRrYxgf",
  "key20": "3qUVe7kg8oSiA7fXLRmhDdkVzzevEfBZmx5iQdSgEmjHnJcHh7Xry5oBH5t6Kj5omSLbYjxtuxJDN1iw6q8aR4YN",
  "key21": "dcKHF15XtaannS9wDZUJkh8zGxvx2ZEZ9VjeCoWZ2E8xSAHBvJECvUapvvsaBd6qtrReGUXttmhXRSAb3obHxdE",
  "key22": "C7kQ7TmPC4e5ucinGkbkFSghJg1MFZoDVkAZCCZJfvTzYhnMCGCAedmUM1M1fcc2RRzdbEdVfyh9RbzmoET5cHo",
  "key23": "4vQhAMVB1EnEcx91jW2ysEvW6hKzjnyCjWBgt4u2dkvyfBzUir1dkuMEqQr8hpW8Tw7W23pXHXbDkjZi5H8cdT1N",
  "key24": "4aXiYuqjMXdvFdpSCQ4Wz52vAGbnsLLxLRRSMRZarmNQSJdqjtkdm1VNd1wTSTrz4gqzA6gvu2grTQpEgoWdwxBm",
  "key25": "5oFwdCcSwbpRhtPbEU7ezJMUCkFqwZRK3gaoCCWgc8PYGZTkMBgaR2Bqg44y7aH1CLR7Wkcq51eZWjgoRjPbNu37",
  "key26": "5wKvgbgtrwftzoBHeDezhY3eFUws67RRvpif9nnCVbd7Dew2E9t9tcePLcQVFgGmkLW1PS1QFfPcXNvMmT2UrZXd",
  "key27": "3NhNccaQSpqU6xt6ukcam8mr1i9FmYHq88Du4JWy7YcXKeCn19xBUe63FZhwwYpfGAVF3y45tmT5YRkngpV8cBRr",
  "key28": "2fxPmrMJsEiUQsjADZyXdRPdFeNHnqwFyEexmCSEGqJ485u7JPDw8FpSZj9L6cV9ksB2txNjZDAYSG58avViBiar",
  "key29": "3H3QfsLywzN3iuUMFnLVBsViw3c7wYq3Qrg2CmyJu3KKHSWKTXsUQ372Nqp36z2M5HbhC78EcnfYgD9GAkECrpLb",
  "key30": "2GZeq1MpDmVDf5NTmvpoCanPH4RF6dw8e2ZYYfSoSQwSziu4Y4enJ9tn2UUy7piNGfGncHTpQC5fLDgxagCxW8GQ",
  "key31": "3Q3mGC56yKPbeytiFDm9uzq52tc4oTa4r4Mf8CFDWF1sdM9drwGEmqU98Mp8197QLM4VsRH7JaLAn4DWRtDo9kTx"
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
