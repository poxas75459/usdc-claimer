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
    "4GHSnwBdxPB9fLJ23rcLiePRwT6SaC6VKK5M5FE9MgGDCbZMUytV5XiPP1cofS1WzPdygxZVQugpYG7TbGYHvPBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qQxwtREWJAa4STWxvpqiBhTT6Mkwj2Wbxj78mdQK1DbvzcvrSNaRchcF9Jh8e1PnjNVQARC2zU9Bh6eFLB9kCY3",
  "key1": "2vWxTA3FjYrQaCBWDnQtW19qNa6AioajoFUZZB3ce7LRBGfquMmqQUdP3WuF9htoeE7hSHRwfyUFW6xzXcFWEbX7",
  "key2": "5E8PPRWWjwUpL75vwn1pphLraXw1THcKrEjph3UAZPtCGTqnSGTp8Yyc1oJear5JKNmxU2DqhN6orvvXe88h9nxF",
  "key3": "3CCA9wRv9nFs5evm51DENzPRV4AB5yMeGKP2cz3Ebw1HFo5UqPdT2vCrGz6hwePD4kjKQVXNsxnSKguYtDiNKwKL",
  "key4": "2yV5pVLsq2g5LzJM2C481u9E9cKKBZkN4Q2CCQ64rMASLm7sgXWsQq4hghKvqcRtZc8UcxD1XWqFbfph4v2hqKoU",
  "key5": "3m5tFemC59TGiU38Ni3FGX7nPHtQ1D1yoPN1X2cz5sXjfQ1oWq2w7KUUdRvdyDPoZwAkadTT3fKqZ2Wk9cx77T9K",
  "key6": "5SpJaefCx6APLW1RcruTLuVGs7Yn4SbPk59WaoiEeycTBqig2bqeyrMNsXPyBg6knA4ucAJib3siP7q4XJiyxMcL",
  "key7": "2b4XqqXhLGocUGpgFEjYGrVmCcvey4d7ft1mwY3pFfzsapw3uMBgGC5Y6FfUsxXA9GcAKs5PzKeNoD75QBBMgnz7",
  "key8": "DT99CgiXmsRtZyUZhFQ4gKhSEy7T5BLeXvh1PmfgBizmhPRZZB5dwd9R12ySruWkVPd3AKBVMcMYgDAqouuidkf",
  "key9": "215mhK7XFjBQjTf25zkZdudootpHJPDwXVvAPLkU6evK5dwrQ4Bigkoip9dQBehiWqGFaQCtXmENUM6Rgsu6JKNN",
  "key10": "aArcCQiByUUFofce7LdtFnkcdFS8q9WZy1umW4jdPri7ZLJuH4TCDj6jNr8NVZN6r76urMwMU5dz2FQc3Ej4X3n",
  "key11": "2BxqmHSmUkApByu15v79mAeB52HhdG7rWyC95iE7DEueLG37BfsjUD9k5ei24PHBAg6fNsnjgsoUP92sxULMN7Cc",
  "key12": "BZbA1qck7TME6dPva7Simru6ZxL1TXyne4i5mLz7FuhKuAxuP3S8LxfRRLKRoMBgFfRPZkS2GyHV339NbsfN8HD",
  "key13": "4fBMn5QdeGr2bfjn9CWTgyoftnbuphEneKvZYTgPHQuZYJBYiq9gt8mv4bQ8U8giMUHqxXB3gfrfDAtniCkUfRBP",
  "key14": "2CcgNvGff6gsmWdTkVoVLGsHRUsihHCcZTzm6QQ9826caXXi81VG17mH89bV5PabChdVpZ3fZetyfLZ1Dy1MCjRA",
  "key15": "4Rya3btCsPdtj9Ghe9pXRacumu6jDPK774FBEkjpCaHecHo9p2uxZw3HSv1nqYU8BKqhPhJa1G756Y4Ds6wec54G",
  "key16": "2tRVz6Ged2cYdsoyfEMSRavhFwUeLoiYSS9XHhvDZgfTK7YN1grcUeekEtt5KVCXpQ5tEfyMpKBKbxHzd4AKP5Ty",
  "key17": "FDw2cGZ5VdFxBrmmmCvQMkCKhsuPJb5BXq9BxNbikDmpXsUZFoGH7Nh6uc6BBNBATkf2nq94dmACCLpkjYdMSYC",
  "key18": "4WHR5hJXJY8Q1FKyACpCWQQ67Ff9BFrtEsCrFXz5R2WXQ1KY6aNEFz9JjXG4tj5GhXtJxkNnrEiEMG7gFsc74hiV",
  "key19": "4PAAJ6Fs3KCvbnEC1RWE3TBAkLHQuCFGijZAGUiT2uju1zF7NBKnFeTg1AHZPpfFiCB5S9Lyfv7gHnAjuZcfHfg7",
  "key20": "kkBrDgBwR35msY2foQwmEd7ysLLoEg4FSp8HdCLwXUNGDq9ea1LnqwTm2kXPj2H7Ee7HSV7F8ktgMSqrWHEwCD6",
  "key21": "2Rn4ZqjiUbSCJDJSJ7L5Qbnc56c2rHi16z3nnWgadz6Y6LLceh37gZjHY4kfLVBJNuDawmkMkdLFTiVgDxN8uUmB",
  "key22": "2jy8stE42hD76YL35Hrbwno9zaHMJ5f4F4BjVELg4L7SP1Vye6FghoV7YF2PegzxwuAbkv6tJqUQrHVeMvpy7PZs",
  "key23": "egCkkeYhqn13XzHd1nuDTKFgCCT1bfozcwBNYb26x8b7s77DKVifc55Lo3hteih62PmwH2VnVk1FdHsCqqZ4SBq",
  "key24": "cDeRidM4a9nFajRe7zGhbgtVsopk5KieeRMTsem9csH4fmLJwtP45U122Ep5nnCMwphGpdAqnbiEZznMeds9sGp",
  "key25": "2M9CK3VDqiD7NyevJqDrVXzy2UWgg2zy1Hu8KCsXZqinQrRV6BTpKqqFUW98wgNTiy9pRHBR8JowEdUQ5YUNVwaL",
  "key26": "4JJjkBs439utKFmtAT1nqk3L2T95amNxvaZk65RoigcivowfjBpbyKrjw12y3Rpn1YKmVWskS95zeyxZgHqaoYs2",
  "key27": "3TXXHW4vKUoCHf8Tv5qbVRjLf1iuhFSHnh3Z8kw8c9xF4fY4SGeryqF9fkFptnBjPfdLsj1mY51pZKPBAwTUrsW9",
  "key28": "5uqiZPKjhRqQLVcpLnTJG2GMSvqVF35XepZbJtfP8CFMZ3kc1YfwnEo19dH9nGFV71G1dNhaFBjFHYmXUWXgMY65",
  "key29": "3xoFm2a9FDHZ7MePjPpFGJMAG3E4p4HbXtmHGjWHC7Aw6VQ2R9vjw4v1T4tsnHsMo9WvZssPrvdNr4Fxw7a4FQ9s",
  "key30": "63LuBS9CEjRGYbCdFqD7MbK5Cs7q4FQsBBB7cRsnAR2rQek56WSqpDPBpinSXp6XsoP6oQ7aTWAfx9PB1hdEYjjn",
  "key31": "2wzDG6pDN4q2PnwJAYn1pV8aJobaKvYdYms9MFoPqvAAuKRwYJ7u1X5y1Ac5WBQDJELmLYiRxLq7Pmm3UYuybT9X",
  "key32": "3LAbEYc3a7HWXKEWd8hpyDHgyCuEdcoH5hCFHkgdN6qX7U4Q4GTQJdx4PZ1wHEWaTibxj8VrMDXUZAphDptvgDef",
  "key33": "sbK224VaySguUtGntKedyFazCvtexTKJEsCFexj8qnYRi8EM3n7C1ewdMZLs4WXTsTnVqUzR9ETsNwhCmBokSrm",
  "key34": "3dR4F8S3xBysFSaqzgm3FXUQEmr9HYQ9YKoUS13WVQivQx3MwWUUTngLEtzRweDBm3dqw5a8tukEGbKMGpv1LGQp",
  "key35": "5hLakccF9LnoPmQcMbuBnznrdRgmG9mQ4MGwiLH8zWVCLPhCgcxdj7kgDGuHzcg4ApSQKdk3vcvPpZVUYD4sT6fe",
  "key36": "4dJ5xFdkuCBfLxR2CrMu83Qw5e36x2UesKQ2sKM476dHqSSnodxpMYW14KtcsE81c8r4CDELHnKAAqeJkMs3eeZ7",
  "key37": "5nVu7iJqLp8fhmauKCXEbKQJB37qmTygMnHpxnpbYGe8A5HX3CdvzMruySbxPu3pPTnTUCAzs5ZksNjGPfDK9VwR",
  "key38": "9YPLTAFeF4Wt7FwBARn89Zn4b3h4anjsgFtq1jj92Uk6rEwQsXksPSmyQKKaFKUmRJKEiQd2mJvwJFk5gGc225E",
  "key39": "4YJundcFM7xPvZWJhZDQo7shrGJpz1oasGb4gKUctVC3wxgAvoFMtgUE4mg6379FgbsoWmez3V5e3qLsMCcdFm2w",
  "key40": "3y95dz72XCcawqe2yTqnkSa9uVwt3DfKbvX9wUQ7U2N4cQ3oXkqkYEkp3c6CZoumAHmtrbp5qjqZDrJbpEveomhK",
  "key41": "4LN4nJhyBpqP1jSbzcdH4NbM4Z4Vxbx89vvSvD8TmDpy3715cerCnvxJeKxa6pS55LGFfDVdK1zwojoZi1cvgBXu",
  "key42": "2CmEGizzVZ7uvRZux2rg7UR7ptN6QithufmdVqtHM5GnPyTU1nAdWAz9PRQDZju8AFERZoF2KEtNd9BpHM5Sn7rC"
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
