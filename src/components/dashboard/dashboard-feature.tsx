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
    "2ZsVHVXzV2NrRMo3x4WqRyiSH1VFXAeFxEjPbU5Su32RSedWqngrBCgG9dYf52ARAH68cNdvEFt9WSQgnt5SKVse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64y8dMMGQedVP2B4qJ5ZkR4c7iHNFHDdGpukPyrp8W5ZsBoxew7oV2kFdK73NVFoqmhZ5U95tJbfLLRHGwnr48yf",
  "key1": "3rvU7PJMQf4UvkCWutXLfxQMMZU3b5VYWUXBXKDo75C6qqw3KiL9nHnTqVFiFkRqVdcghE3oa2YASQuvLUgiDVL4",
  "key2": "5WSKWXpe89e1bXLZBDKckjtzB9yw8fo9zcQS5UdaRJNR83ivmg5oFY3XFXDor2HHVtdDPF47mFEAu1w56EuSn9Rt",
  "key3": "5uiV47eVxsEyXh4U3LndvCstf3QYWxXtBGxzANppwdH8Ytkh5Q7BKaot34wMZN6PENMSNTaGjypTxdwScth7nM4L",
  "key4": "4UkQ3wnjHZN5btvKtgeVHUF5Xg9xKXZaAvAjdXpMg3VuDjRS6yzFuf9a5HChTa3K3fqdrvQxTwCt3WRMSZpqhrrF",
  "key5": "5SYRhP36tDtgL5LHHung3ibU3exDiayAMVjdYYntnhTaEcDmTyoQPsLNz5jyyqXvBhBQ1t3DinFXxxyc3iUMyoX5",
  "key6": "46Bc4oDowDTd4rydWRJxeEGqTVKtsESYsNuzfmQHJMAB3JangmBMvwFtYDY8jxafMpqJSUmCxGJcFXzjzNqcViP4",
  "key7": "5qZW9Rp3WkDCiRRcZQqj8kxUYfhpy4eLzxx7sBsRYyHwFMRrrFbKFYXxWNSbmWNvcJK2WgEsWqunJmZ23pJZqbfz",
  "key8": "GAfdUyTUkf1RV35zH9tRKrdn72HqCoe43rTHQoqfRwwZiBweMkKJKYakHMoBZ3Jc3rBFu4PxEki1TV9NT8Ydqhu",
  "key9": "6Z3YkjPCogE59rUqiAwrWWRjF6rZfbAuFJeNVpXTiNdMfXcQeyMpkN2Z4TeQKShznEgKpLCsmLoMo8CJVT9Vekq",
  "key10": "uWkjRMqM22rZARJvMbUDNcXP4cq2oqweSePtqPUTofUpXkGdCWJADmCXUzawMvJYWHVFURjVwCoUDcZgcwpmUxn",
  "key11": "4UZuJrrM6GDQoSct44h576vD75muX4Sm56LwJZUiaz61BLQcGbFYCF1wag1ad9KuwxpdHk6jQCcpwyrMSWn4SJgb",
  "key12": "2EM3V3XpuzeJ9XbpmWTjJ8nqFT86eS7c19bkGFFmXprn6FZy9TcFebLJ14Cf6BLwBBnrkZNbDCdiJVrvoakk6gqm",
  "key13": "4qXrQB57E21WJbqyTdPkZzbukgpRHkNcSRpvsRnSxPSvjM3HS8EXkgnpVmL91mx7VfFeXdoyN9WG7hCewxpwGY4D",
  "key14": "3UCJQ3G994AdQqPyh4yF1vP31SPLd5RWzkXq913FypfbrrDp2Roaj6j4orGsyxHLPdRkiNrbG5uPJgCBdCoBuMWG",
  "key15": "s3uz2SmcQh8n7WFqkBvAHGGJ9Q9Jns5haCjvxBmy6FVhDr4e5x3hBTpS7jawVNiPqcW4zsmdgQ45Hr1VtWU5Zv1",
  "key16": "5k32j6KkCb5CpCFnA9R4C4UVc6GWcfn12gSNbkvVM68HqLDxe8beyyg45pe85fajqEbcg92GUWBRLiXoYQzGf5ex",
  "key17": "2rSCVBDkt6imNSKk9uA3FU6Ui8YrTi6VeaZTxzBRL5M6LEPd13mhmcH748nzotRLXrAckSaYcC5N9ALUaxP95KZ6",
  "key18": "5JYtGWGncnjHUoZk8TVao8QS8AAjfVH358HU17GZC3gmuJYsbmuGqkCiD6oKUK75Rx99Mrv4RS1mhavQi94gkCY6",
  "key19": "2VnwiLydcaLqmRBuNs2FbkqZ6jxuSnJMLuH5HW4wXthKaCZFTFYbPS3JCvfxY25YAL4p45xEqLshn5UoKfuorn9X",
  "key20": "5xyPwkwY8Jp4CuU6yutGTFFbGDVAMiXixLaX2rPKbsfneadWEHa1iLtAraVJoe6Pkr3jkmpYBq4jGMDveeUFgFgH",
  "key21": "GDUtdUXj6Cmh3bQtSDnpDMR725SnM2u4eHwnAhdgK4nZLHoDVrFUm1TaUxxjr1A8c7xNLgLAeRqtpX1yqpagkxY",
  "key22": "5fCMbVeRSxcH7QxtDHZGkNa4tsKzJuH5L45xkoikieUqvg1ope4KHGbUi3w8aP3aMtrhofhQgF5LQkKw4cyTcDpA",
  "key23": "3VveuZbae66mKN6X2aVjCrLZvSUBTpHKDKit6U5hcjDUdW9CqUBqbPMYvWGCdUe17Dsf9bLykSpyyTF93UYDXZkg",
  "key24": "99oykwx5uUa2g5qLscZkTzZkFhsyEc91vhJF9tBLKgVa4YvVhmvkn7mFyB2d75r6PYPMY7WcBu5ngdhL4BYMYsY",
  "key25": "4NNKHrGRDKnJoUWzPpMmBrpdenrJoyBjMrsVMkSna4PcfMJcZ4KhVz3J4AZva1JiXJiPN22b5KRrQoXrLZBsUR7f",
  "key26": "5ic5CooXGwMZ513EZscjseZ3XfepFguPNtWn3CGUrBfjURy3Pf71EmbabLNsfLqk35tUXTdc8jamxeb7KGhQt8By",
  "key27": "4MmTxq5EtchaAR5pL9Q5itEKcyY6rVCgz5dikTeyMZF2BkwUXccjFy62kyZ5DLHb4v7Z2TRsn1DZNZNWBDCscpt2",
  "key28": "2WkKp73JvN8jqVE8Yc38Z64cU3D5ocbcyr49KtoKBYDpSUSPzhQsoezQpwSJCC6xG84H3LZjyyKeqocBaKjoNGc2",
  "key29": "2gvsb2bqWEuz4DLjtjbMj8n94pNLWt49HdFbKsLYjPKKpDHPdYP2GqigacjqXqcbnft343YLAMSVDeNn89Vg4f8P",
  "key30": "539w8gE7uMGbrEhGRcdHWRaTFsfGsyK8RuXgNBULdw6eBr8PipK9eTjNoVL44n5boW2ipYosqPhbWUPW7y1F9hjg",
  "key31": "3MuSgN43JrtfhPfo8XteB5gQ4h512iAWcqanyVGQsDTHJb9Dq2XLUq1T3dp8yB9rKnKcZVv8Zy5JaMhrpecJ54Vo",
  "key32": "5SPw3Zz8geTkP2NDEq9e7M84CxEmWHkXB1QkYFME35jwxwD4YvxJHRELK5MzHx9G5KrWzZmmCXxkuTqXtSSocEbz",
  "key33": "q2Ex1PWoYcPJDubsuq6stBcUBkLSrsTq9J8ercdEg69QchWQwF4PKd1mMwmVLK3WLqyreGWei3zmxmuX2WwjQZz",
  "key34": "2PHm7jWQnSvY6JJmdNEjm7uDQJNVDV6wysno545rKDhRQ1fBmTw8KqbWvnJFpjKwfyf5ESoGsQ9J7GZXSSmo9NJ8",
  "key35": "JhwmDt5w8Cc6YKDbpxRuVey1ppfwoJA8iRbMG1SgoxBaZPQBj5GFMzHtgy81sdn6rRj6iihZ6kFGuuVRctjMMJe",
  "key36": "4sXYZHvuiUNS2JHPDpFxxCP9VksWCJuJmcLfEL23rz7wJ9nAoBMkVbjg1y23q3PBGvNWvJe2YrsDfPpPKDNTreiN",
  "key37": "nW6ed9CXrLvG87rQxTrcnkUQ7XNTkw3YkdM1Z7cM1cY1fLZtHTb7R23RUC7KQ45oq4Mkqw7axMLJX6fBu8pkSe7",
  "key38": "5WGRGbMRvCkdkFN8zFipRsroM2KFsR5UT2bCVEkBD97J2H59VdZbu6fSrKAzrAy9jKfRh262RzmubeF21ZXczTi1",
  "key39": "2f1zugmxYLarBsQRcsvqyu1k1CWuJgMSG9GA3j46UqmQaPKQmF97pkzytkDToXXxTZZrbFBD9Mi7Ukvzg71bKA8H",
  "key40": "3tYFMqKQApv9TwMG9H2JYsyoW2c5ZNoUbDK5HppGW6tugXNZhzpsVTfvHiD32hNsF8kz65R3Q7Txn7c8b1Ef9LAL",
  "key41": "4F1v7jQ3VGBYg4pdRrM2LazS4u6hsJ4eJTipyBrDzCi7JqE6g7KX11qhcgoNC5rUuRtzQzQPa6nYmsEz8gTWn1vr",
  "key42": "4SLuTRT69E7DtLV8n2hZURoq1ArjR5bCm9UjDgcHN2WuadmcTjYmFb4hWNsEPbSACHupQSXytWVfi3kk82a8b5SR",
  "key43": "5SxrMHfZD4on5GHeevWnvNKw5XQ32jLdKA6okaWYqiCyeAKsw8siXBRqm4v6NeY7cR6q8RMqEYqTYxRJ62hkETHx"
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
