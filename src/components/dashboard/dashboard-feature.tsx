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
    "5FFomNjTSVRHG3nGBtQVuVv9Zr77vca5HNkCBQt9dHNhJckwQTBX8SqhzdACbeZXPdAA2cTZTS8gmP6C9SGg6MNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoWebcAJSJHhdxfnQHYiqXEQaeuspGA1wk9L7vhewH2sjjU31mS8ZnY6EEni8FykEVkDu9X24npgzXvqvGQSMZC",
  "key1": "5iEQqPqHEPhkLncgMAiZv5hHtshjD5ujeFSnixd3CFpc2EgEySg4oMooAdeUUfZrYaZwATwVLJNPeAcz3DiHNSz9",
  "key2": "4XREzWqRbZ5KxQaQzNer7v9gECZQbzY3vRZtqURteucVMtfMk69E6PvWejWBfNkT2eECYsJiqDRqH35NhKByDDKN",
  "key3": "2UfnJZTAHA8RUpMYTSFFyV39eGZ63Hu79zEhkmmgV7WNA6yDR3JVFsnTD594Jef5ZHPGjSKJ6kypSLNb44ghtVcH",
  "key4": "5ynQDVKU7gRtThrmxNBm4DLjybSksyUXiywknhoyCGd1rAdydqzZDyxS7aJepGSXscdaAaWb2Tq2W6TWcvyAoQVJ",
  "key5": "4Qprbt4rkWzJzdo9GvPnHyyCjcYutSNsha5xUHGztUEYsWKcHJNTV36wV81Yhi81QpJkK8Uv4CYPEyiG5WxwMtGF",
  "key6": "47suvDxTcb9vDPVeKfGRy9bprCE5HfpXcXSXf4NJZEBPm6cBjtJ96TytwebHBAnCUo1F1UV5GcY1W8XcRU8wfzUx",
  "key7": "5ForQGJ937SGgsZJjoayfUd8tgP4mNW88QgPTw7robZw3nK8ACnwiY2zxhrLXxD8rQjhP8YXqyGDLk744QzvVhQ6",
  "key8": "2Tjgyhe5YokohgdvDJEZPS2dQBTxGggkdZN6MMw21QJiJxb4CMrUfC2hcZjRfLsnAS464njzdeizhVfn7BQrMnMZ",
  "key9": "3LC16KeZitKcKKx8rLi1v4CC4w3Gzac3uRFkKswURa9DqLap3ZqNA8XwMDtWEr1vGxNecWAemDMFWYZqSnFYnSDN",
  "key10": "5VRJNt7cFa1BWFJbJnSAFZcHjQHcYcjpvitS81dqKoJLTaaGE3gGZ66y7vx1trdh7RFFs3V7wGRzN5mSDy4TzSSe",
  "key11": "3b9eu8cYz3FVcdTc73yBxfVZtvj9dCvDjR6iwyBLDkdYhPzjwQRJxFVCqgYFPhmwBDJMFnmQmo7jywMgipsNRjrr",
  "key12": "4wZXNFJNGsDUi56FuEzgS929yG6mCPrubGihZed1gNrT8LhwQQp43jfJej3i8FRmcWWLgVhvLVnGS45jcV9bVQUY",
  "key13": "349V6FN6X3jnpieXcRPVZi8kKcje5PBiDRpmZGnTQA5WtFWm92czPDYyaAhiHbTLmJzvHSznHvV5F6Q5BvmRbDyb",
  "key14": "55y4mHqyuvKPj4E3rhBX6xTdDCbrooHLFdTVoW9ev7KuBQjuV6inTDGHFbE4K5A5Yb3bvS9WSvt2UZFGjeH48JK7",
  "key15": "5te4mdYcDTyV27Tdd2iUh8xgAY8Hq5WyppiitLxhBUVmwQ4HT4S92cFEZVZSYF2nGrRBh1K72mT2dFw8oUXzfp3d",
  "key16": "39qHCAUvnUxQFStEi5dTe5VW6TExjxPLQZBQJHYskP5hFBC4JomasKtpCvYggB6Bp8tM3gH1zqVShmV58GhMekVk",
  "key17": "omonwiqAHgCYaJdVeKDa1t7c2R8kiYkhPLvY9FkWAHRsGLpdboyTqUxBs4brkLYD2qB2giGRUU5FRVq5azpFj8f",
  "key18": "2heAkQYbTZ77dUoYQDm8GRL8GcEQTnhnXdL5EYv1YijjRWnHemTpuMFpApkxNc3Tex23x8bT5RJxWjKduGSqHtyg",
  "key19": "48eTg2G6DW9fJXeK4pGtU5iYLtJm5FWmDiGGkamnErjH2CaRxEoP3v2FySFfBw1Fqg6QC2uzABJe8mvqxBLHR3Qt",
  "key20": "3cUicssNs8QxW7i3nBYp7VcWCFKTf6D1JnoHpUyNp2iabLAanurQLC8GWKENoYvHrqQ8DrgUMi6njuVbPcBvZHd7",
  "key21": "4T3fbk7w9VQuR429VoWph3rKE7rA6XDKS2mFTvWQujpB98M3MvXeGY4zmajp8vsD61MBcSdw49gTjerdiyEktVhF",
  "key22": "3N2ngrAux9wgBhqvRTEcaHC5PgS174ZsrSAattSjNE9ZEJFevupSzzha3JATbLfpEhFdpvzxTvhNf5xCNcBiEUvX",
  "key23": "4diB4y5iQ8YQFiFPjDVLmFgFNQ4zUHvxf54BY4MqeDrDvnN1ukBtQNtSFiZ7iQgFtPMtAJ4rYZVPv1rxLZKbPiSV",
  "key24": "3Z5EGum2hYFLFN1C4VZHMftLPBu4fYYrdtmCHaNRcDHDciM7ESXY96N8WKeFGAkQYLUxMp7aUk3zTSvztnYtfcKC",
  "key25": "TvNZonS9otU9n69NVrdyK2Gz8fuLstu8czY3aY6HZhsY3uf3XTR11NKyU12XT4hbGp1GnEeF1NcMupTX9jAMBvB",
  "key26": "3DiKp1MP5rz6WAfzR9hMwxsp3kcaXLRynYu6fDdF2s3DpmaoM84At9nhawqoggtSVk1ikDq9S2hoDspxpwuuPz8f",
  "key27": "2DUWvks2QeD2u3pchL4wpWzU55UoE1KSrNmMLeSbrY9j8MCqJJzLaQP2tc4fNYysMLHpRu7dUnDBptKPhtQkadnG",
  "key28": "3PwhtGb88Yw2DZ7ATTRvNs3rJWvStCRAK4PkxWd5Tp2jFirPhfXeXbT8UtZy3nL4H97gtheaQGKMK5GzGgxf29Yw",
  "key29": "4KvL8AzCssuMwJtXzpd4mK5EHBCEEJ6pHAdfpf5gwXfKoRpBs7gjKpSFgpUhkmavFSurBCpobLay6tcMNWWdSpcj",
  "key30": "29p6wt4GfvRQH6w4FtBorT94N4VvdwhqzZfjUur6QBZq2DDLjZVcxZUGapYHiiBvk4qkczBoRdcAfiSGkTDf6YTF",
  "key31": "5tR2Cjy31C2HDhPJYWo7HXdvfEtTFRWgLHRAQikA6Tbd3rExLGYtr581LYEXKYGPpJxX17jGZFNzinqYqyvKQacE"
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
