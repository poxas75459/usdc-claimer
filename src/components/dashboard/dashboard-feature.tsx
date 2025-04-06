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
    "3fccq5bZGH9MMMVn9h3yyYGtBFb5Z7ZuVT8FXExRo2hn1qMcntsaZRbqupf5o7AnW7KTj12SbfowV8VT9xsjTKCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MzhcSKx29N4hsoSvMpd8UvFjFKVpiTVAMThES8PhbtKiNbQ6oA6ZbxnVBoKFmYghfDK3zEmLsYhmQgVvvousggi",
  "key1": "51QDQ67ytUepYwNBmEyd1XDMoxuFhrX2j3sxAz86PxH4dL3bpaSZt5yQ868NxQH2zjaZS5Qkiaxy7fZ9SGZLH5U4",
  "key2": "4TbTRb8K39VRgJKBh6T7qRaVKXPoPK3AtCtdNr9dtqndD5AAGXS29zpuK67txaMXXYE5qi25AMB2e62KqiVCaoF",
  "key3": "3jK99KD37Yb4TZ8mGYTKntyMFYMeTfGPYTofefqkojnpDuUDZBUmQEb4N4LPXTjhz89c13uTsMyTb2Z13LjrW7MZ",
  "key4": "4eSBy28qzyLQvJr8uBKuUjdqZBD4rySJDBo4M7DA7uu9rgCKfYWDWadD3Xxgd8fU1BtM1wdiMAtVtVh1UgJJwbwk",
  "key5": "32fPvpFitpbWtw9SYdgzwmoPPWB59QnfQzJ2NVEgWHPqkHH3zJVowhRiLX1NibFjs883NisnXpVpXCEHMdWdPEoJ",
  "key6": "4wFmcrxVmPXf5GhvrMKFuKfdoar8CjQkoPjXum58cqdEV6GPs4rD8ysVrtqGxGSvXJuyPPJcnPfuCx8z4VwyzGv6",
  "key7": "3RkNdVH4R4pshE7oWE91WD9URk7h9xSLW7CYkxpEeLSeC5WnysstUZyxzaVFNn24ALcSBPcvXy81QYVVnFs2wbAy",
  "key8": "a7UWMhRZyNd29KFPBjbwSBjGgrRmc4wVq5b1hHgsr4AH3J7KZWthS4Hvy7pGaQkkz3D1FXm1usB8mScHHhcCSeh",
  "key9": "vEKsQDXzq7SSCmxfsrDXfAqHJEDXaKujfVfNRUh1kGSLPF17azUSb2iZEVn8ynnZ1wyi2etWHg54dkNoJn4p6KG",
  "key10": "5WB5wcXEL1BBPda3qgeYNdauo3zZY2V3SqDU3M45ir6AjAGYS3bwiKX5hgd17vwCYYmwMX1pVZVcMh5kcaxuxCwe",
  "key11": "57qy3driLXQ2famAdth6G13ykYcR9hUWoQmzTotmuFvyv54e19e5NWuday3PfKGFcxzKU4xkhQ7NNnDZkgq1afq5",
  "key12": "4zFCUkZPTXQeAsmpFd1NhCwChURCrDfiFaYL7uc7nS9DZZCE6a9325kb3Ss6ENP3u6Yjnxb7CZ9kd9tSFtZZj1xN",
  "key13": "524Me8NJfuSFfWesdnb7WJCPUE1bBo9QU6uXYfaAzC14mKsHeZSDwah9ckzmurJ3sUarcdPXbhxmyqeWa8NKJ1Vs",
  "key14": "xuMJzZmur6vtPee3uGUyxSyiwhYJqZtRq4ugGqBy74KBFn5wckLuFF6XUFXCWLdq1DQFKYWHezbNYfWmK4hwaMM",
  "key15": "2mN5r1SN1Grfzj881Mvfrqq99zqKV1GSQwoyExCJbnMc7Anwk8am3d2r85r4EZGHZdp4HacSQfjDkuq52PjxYnYg",
  "key16": "59G49hERBaBurYcgQnn5nxmVDwu6ytRQrTky6zy9nmGehz73HCuF6fnP3VvQyRmGh7q7E8aGsdrJt5io3BcmVgFf",
  "key17": "v2V8m7vzG9rkV3J56QE3LR3qqxkp9Wecz7SuKuAA5Sf4A1CPKAVXzGVz4M3a37GMNVCBSpVwRvfDP8CQZ4D2ydJ",
  "key18": "5dq7wwbFv4VWU2uFE8w1HJa59pvgy2XcweB4RKFiPc6qWfnVAmibw1wwKQ1SDDg744EX5pwS3UvgRKcZgscMSxtc",
  "key19": "5LQakNZm1ZKCgusu5bV7ppRbJXKqdS2DP4WBgJ7wYDvbZtWwg91tM1NC9RbcndETJ62jtdGKMGjUhoiz9hS3T4s4",
  "key20": "3qESTNmmDDJK29Xh2PR98mEvG4N9jen75uR1bfXPKuVidTjCrXx9tERKe4DEk3gnbKqEFAuMmG5hMX8zkZxn6reT",
  "key21": "Cd3yfa1kNTFccFUSvSij1xMUzxPshYW1BmqePMUftmSVpQjpia5teMSU8FqB9g4Rz5v2z29HT9SrsDnqsdrkaes",
  "key22": "29kBrJVhVHFARVQJENmS4CbWzznxKSVw82RQ6UruXzpuMrDULwffWPw3HabDg6gmx4Hk8QdwMokmwXwvBfigPKz9",
  "key23": "3ekmdyEtqYwu8TCtvTYzA4sCNhncHC5ikUPZLUUmCLmKfMxdJNBChEqbBHYttQtXhrRdo2YbqyymdPGMHZdFUefy",
  "key24": "5Z4rPV6Suaaxis9xgALj8NSjYEQLiKLUQwRTcqgGeKfTvwjMM53vrDbyC4KJZN1dLbaTR1HCmWbBqTVNGAsiAGst",
  "key25": "4Uk9F4PPhTa3vXB8nDypuBAHizKARgjWcnqUZf72wgW1V377gv2vW7BgZgiuoeSXBWnhmfmmsX2PnNqtuiYAJSP7",
  "key26": "2S4dBWb3fK6LwUVe8KbgyZ6etonhqTxw7zw2NbNquu3He3TvcEEKan9ucbz7uLeNqB1bvWeoxoehg8W95Lwv37oj",
  "key27": "4Yb3UAtgAuaBg19afsdxV4rE8R5Ujhux6XfKJSPZ4n7kGtbUb8xqwBPZy1NNzBf12VfbktS2B15RT7gwh4skDwnC",
  "key28": "5xZukMaxCtpb4kcpjin25HLJvqFjKrP2LzC7PxWcbeTSgRQVMaXzKnxVvQp7KfvLZs1kVM8G7wqzHkZqiNdbic8X",
  "key29": "4bCbGnoQAmU1XCxZnNi73is55DDLyEtqWaFuhdFTMyPHfbMF5x6MTvroQnHT3C2sNH15c5F2jm1FMZNrKP6KtKuD",
  "key30": "jRKQewQSQDEs4UezrkbHTjBa5JfUTLEuM21nGspaL7cVJ8sN15we9BXV2smtWgXB7jLURtMeuXKkrrKZa4581La",
  "key31": "53sGYkrDMYR4ofRMHWypjcxvNiQR3dLuzF113QNhJG2becnkxEyfaKXu2qSnqArmG1qZSE1Ro6AKDo9KrbbyWFWM",
  "key32": "3NJPUEd7q9KM7LsnywCG6xcSnYyn4T13u92SiVgs2dWrCEt5PU5T5KmyAokmYqXMT3Hgg8UkeKZ6ybhroUxugv56",
  "key33": "N8BgGCufqocRDvdcZ1ZSivjzfv6621hf76Rsn1A1SGd6eCZjhcfuYetzmEJTeSDQBTXqsDZ9ZVkwMDMuy9zjYc7",
  "key34": "5gDzT76AvTbAANtvBeEAvS4PeVHSzHqzD7L6emYjdsWLDGBsyYugAsbT6S7545kTmUnGYXFMrjTFS3h35W3GBABx",
  "key35": "63ddDHARSNbkfbtfpaPPnUJfY8Y37NWgeVEx1virZcZbk7qyCjU5bLRUQLN9PCkzmDynQdQSfLheUD9xHgeXKyCH",
  "key36": "5rSeRQikzHC1kd1Mgt6pGfpJC3DyZKSofvLdCequ4wGFmxfZWyXsQWSNxPie9Swt5PULsRwvPR9UTr4h2mCqxzs7",
  "key37": "5e47Uc83mSJZ9NQjycjDSyuV8Yheq2hK8KVVDvfwrj3pNXimJj7J6gtdBLcWHSaLhKeacLxPk52JcMydA1bLGpTf",
  "key38": "3SR8hNwLmdHCgF5pEdjitDcqyYGYxv5p7NGke6iZLi58h5p8A6wiHa5sHKsfQQ65TqhK3GfgKnT4fXf6VjbRxBUY",
  "key39": "BGKPY35mm8nv7FAiUZqeSGX6AbNdXqXHHyDeuY4pPzQ93eQLSo6vezMb1HrnRhf8iGVcUbxtvjBcWdjt3G8cou2",
  "key40": "2Qc5B9SRwvp2EZWpvwQm9iCaWr3izz188aPYhkPYP1LvdB6Qkh5RLB7KmDfYQLi3WkbFkJQkKrFDzAJB28UBmTdm",
  "key41": "oBhY9Ga4RAvCYn6bA1dmxdBa781TUGesZSBkR7NcEZDexPZifMcVbfuALQGjc55dgQjVQ5smSFWPnqk86fCKfzf"
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
