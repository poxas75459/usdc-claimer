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
    "p6V8AGGedpJEG5DMjtvW8jSn29fA4Jd4dpPQccN7fADus6gzwLGu65dG1n2k2uFEMvH7ysfuinLgUum7UQM1Boa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GTSQGtgjjAhqrha8G6C8AKunTXDbMbvRRaGy9GqkYX3YBmw7vgZzh8VUFD4G2hh2dghtkdYxanCCzheqbRdMyft",
  "key1": "5uiXmbmzivuw9WFNea42EAnvU3jqmSAfNpaUuXYgaGKK7BWgkjzFVjSob1Ue8WkanCdJgyTwMsPEmhkBYWnsUPPQ",
  "key2": "4cHFcr9zdLfXfdwwKsaLigZ2EZrbuTFWKpGh5j3BYevP4PW5zLpgw67zpL8hSj3SyK5RbsZ6LwFJujq9BdfSXs1U",
  "key3": "91gzQCMxnVtz9xpYBTUAat7tzfMDqJMvvvLErQM23tcej5zEUGcJVQSZ66SZhYEMzTm7CxuaTdj1dgsYc1YY3mo",
  "key4": "4rWX4qMsrQ91GnFsjhBZ58YAEVZNVgrCzs7T143cMv4tLdBsxrSgX1mHtM6jdR8FHoZdaGfoFtJiFnELYxca4qcC",
  "key5": "4dMdbDyyqqhZ2KW2Kx4rM2i4emAyPkMTiDtNqMD3zpaQCoNenWEeEwz6oHTrY44F3DjBd1VRauoKfweug1mBuGB7",
  "key6": "1Usj2733q19d31QFBJKfauUpqbpmJrZTGn439wJefvbDKVnPKJFbSjESVh8q19P3sbJZ5JPMrmiud1LZFisdCsm",
  "key7": "31R7YuJttz4dPToVwdZZdssEXNYJhEhVCPgoXCMfTC31HjVFgxXgk1RdbBKE42AGPCeARBeGwnZkugvffGV2JmRx",
  "key8": "3nC4JmGE7BD8N96WT5fs4TD54FdzHTypYSZDZ5qrhLpfJV8F2wsAQneg5DNP8HzhjGAJVzN5PBEm8tcesjwzMnut",
  "key9": "Bo1rZf1ipURTFP9T5vvVTtf6mRgtaDz8yjnKB8s94RwbHy197ubYvv6uYvuP96KbAVteiAEwvuzrzkWKsoYStWe",
  "key10": "3bHsjfCX3BiQoNihh1SAtuh2b6vJn8AcTjK7QVhxfZiHAStoEnw2MQpotWgcWA2rghV7LSSKk3k5UhLvAMyUuPfc",
  "key11": "5W4FyNbyBmWYn2iYkSNZvSFH6UQCXJXACdrcdt1BRX2UAsav9N3eEPvh5Ec3iU6fsxu8ZncHMcR4Le5krQNJupG3",
  "key12": "5nJVVF1V7iTHKFHHPR7UYV9tb4bvf6BcwM3yF2oV4XM2t7xQM1qupwSV7PBTwXyrmHXppewMgt2C1ysjrLKv226q",
  "key13": "3XCuShi6Jnuw7YGeZt1ZLcddchoSWmRfh1MaJSxudRAL2F3QaX9HC7K6MX8kZjZKdJewaCB1kmw8HPp8h3JCyGg7",
  "key14": "5NNBnXR3iRJ7YdHEb1WSW6QUtEiCD4aCXwQ9XXdwRde7voiVqC3BmtMcTYY56GDFertipBVSZCZzQBSx9fZ4DvrH",
  "key15": "MmmYbJLerZi6zpbytRxUV2qZuzTZnDY6kq3dNmXMUPdeM9HzAUH887erJbMV6FP1tVXS3ty2FWEtNABwDj4WZjU",
  "key16": "5MY1PFKXDCCCDT2yYSvf3YmkMoAfJWa1LCjmm7fogVA3ehzUML1CVRWNDetxoQ73ffPBJA6XTfJNUzN9on4LrmU6",
  "key17": "5skc8M3NxyWxK4qX7UuiK5txi76QTg4GdRgkQ7a9ARmJmmtXt4XTTA2fUHL2akqoFLVWGEM1QqPRUxkp49XxvPzD",
  "key18": "2APUWNytAJxjBE2M1NiNb1XFPHe69UQemyADzCMm9nNbgjBhfJYuud1HnghRR8i7rQDfKd74FT4VovhFsKkhuRYQ",
  "key19": "58ZotyvXLAw7yLDxGbRfvFMkAo2jaTTPprGPphWbbYGEhpvzVqzoEFTJmNWKaavp5Jyh57kKnfuT9MoGdCx7bwei",
  "key20": "3ugsQSF58HyrZPCJjmVgzkr1Rtd6W6PPqxKXDFor924zZieeYPUgcwyRScUpyQmrGwyR1JcnYAPNo6S9ze6EoioY",
  "key21": "3FA34GVPX4b8o2JZNZHFscNFVQwvAkFMAYLH9Egoq5xmehXthHAwcQPqkGwhYAWYdmpqJTNjXgRbizjjH9Jkv1ng",
  "key22": "3hD66LDKKicNTS1Xyh6HdV5nayJGvGrHxUnrbeeDR3Kp3wde3sRyWveB8hpnm9GmaHx4Cc1K7wnuUuQSVCSyrHUF",
  "key23": "XueLrWaJsSvPjF9UAePZ7qhwXRLUWVhdfWgLRmFf5Kid2XVMwdXmUd4As5FLPu6edRBhL3mrGp8Y1UoFYbbps42",
  "key24": "4x7gCLDq46kJuShz3JjaGeYLSajJuDsmLzEffNa34FzwkzPu5S9R43grz61xhZLb9KXibBVBwMGmCP6eVKwg8SZ",
  "key25": "4RxXi9yXf7vALafHn8H6j4AJAi7VRdRfCEqeVfwtBdowvKeMQpXdvNgTdKtGFjbxvate3vy475NSbqCuxp8tgCCP",
  "key26": "3gpLgzqKySiQWNHZXPdvpk9wfN5sSiE5dWQ7Qz2bjxTTcBXzuSKUvHjyPmgMM7uMiJbZsxYMEH5tcpPP1FnRHGJ7",
  "key27": "88LbULzs5hgXwP8E2ZLa1ZNAu1eNHtGP1FTHRo7HdD97F2n38Mx1ivZ9TrTKZysSJaevnX2e9PTWohy1vUTNq7P",
  "key28": "2sohsbYonghPLwF4UvFbVUqVWZ9hnesp3qCfiT12kjaBAELsb9qR766QbKQ36cuHkKmDfV17jKX5GPjSzUSAEZ9c",
  "key29": "57WvStc54s5dMjLmCSwv282b5kwk3wm3gEyuastQG976SaaeR7uMj1b8QgFf821CqqR1irppThj81vYj3Fr36ArW",
  "key30": "49zxeSnbxRZYvxN7Tc3HHQZbBKSSpazYDEYGjskeT3eFzeyEPGurPPBmLzwzFrugwVokq9NasRphfuiNbrUT1ehv",
  "key31": "8gPRD5pZHcrdxT3Uem73ZyzqQkVzJsmRzSM2MjoLb3BUqCnah6vcd14Md5DpJ7QP5VxjNrgDg5ERSMicpSh7UEb",
  "key32": "46xskmExPpQ66a7RChR2Ke7U6rsYo2DZLnvTrZZovGsT8VJ2arggCRuwDtrzRqhwq2M7mQSzfapBjtPVV6haEk1m",
  "key33": "B3gkZenpUSuzDe7UouoZo4nuWe7sjck14nthVNp57gHUzpHtjzgXK6saaPMZjP826KT8tg3GjrpZTnNrHW14CWu",
  "key34": "4ZXPYewEtvqVuNtW7KK2QWhVahUeoDHFLoZLCE5bXR7miEFs5AX6g7mbCEAupxF3Hs6Xp2AvwGo1uXapaiiSycno",
  "key35": "5EGYf6xzcUANN7Ukj3MwxrGNqedpLMQZUz5BmYB9Fkc8wT8n5cx2yqDYnkGX9kespEuQsbb13u5ABjTBnaL7Crap",
  "key36": "3eqTLx9vuWmJfwGyK2VF5ZGRMuuWUVEfCLeo7kttyKtBujgXp39xFqKX4tDhGPjxtuaRiuCqNdKSzDueQ9Vy6Wyp",
  "key37": "XUc4i78pF1RBqGnwtrhCkcXgnn2Zz34xgYo8yEq7RcstRdRcEPsAncgjgRbQXSGU7k9mh7H3czEhHk6GfyrVFC2",
  "key38": "2Tp97LzD8MNAVRmUq3TCVZ45nMLyFSj8s88G4ucgCsSkeMiQKkeHeAGgEvXjFbtrw9SmyGi4QQAjacecCmJqYAAG",
  "key39": "3vpvnxLPrp3wroK8j3eoyL6jRCHF3YEa3T4qxNUPvtve4HXSsT3bZffcFGxi3yJpnEY1DqA7rejoyiV3Eo8SVLQK",
  "key40": "9fz2qY8GAfcH4QugNE3q1TdUmfzPWNZwTAAQpJD3z8cvbuBpmHXGvXguqnyiJXmQJrKzPTwtp9gKKaA6Nn3c6VM"
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
