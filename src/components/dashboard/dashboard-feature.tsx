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
    "3T9oibUA1JHciJiRf7DguCLc6D9VZ7MDhtPCiti1xPR8Y7961dBcKm4yWgNNL1S1bMroV4qpbT9JhN4xSpQtVsqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2STktSJKmcL5QByuWwxa3x32icDjnGnocEXGRQJZ8RmkPAhEz3QtwN1dqf1GzLDmhPYUrAtEsUhSgbBMYUYvXVT9",
  "key1": "5wbUHwnzNKj5qH4rpHHmb6smY7SARBeB6DjJmVQ36drjUtcRfeWekL5cHn9ohCTYC2eP1iaUNy7DzPRAJiYz8Uhw",
  "key2": "4yUAmSav5zefGnH2XF6MbGiJoXX18423FMsVuyHGArhiAMRfbrgQDWx5NJKYJ7QKcFNoHTrmwfNR8CdkUuQ7hVEc",
  "key3": "21FmweeVhrZTJRCm9CMhWr2LikjK79jxmCfcfte8xaVpZC13mwU977jUDtngFhN5JxDZu9w4twMRdYrorDjnNmEi",
  "key4": "3czSrmuefejaLeBnFc29UiWQV9Sg1SbfF7Jbu9xX2Ez2pdy2FHgXNthXb1Ehs1mYF4f7aRsKsVArTw6cQJct87zQ",
  "key5": "scvxToCVAiJJLkgQxny5PfCAYGx8yJaB4jULHeCixn1mfm5qpoSZqw1o73kJM42Z92xGEreHYsF4rXNefud1zzQ",
  "key6": "2ANPpa2MkfYmWM3tWJcYja4XerzSbp3aAv6JMhPhP78VNxCtmHeCJ3ibvYjTFTNhpWyzxiixSTq8rhpWRvSaAuKq",
  "key7": "2Z953D1oRB6NeCXZPWkYYPm1cFanBPooqdbLocRmfZUJHsiYeeXchoruKJ9am98yxcaPjsvXNqPUrh7RPSWa6dUj",
  "key8": "2JCbo6AyRq815jqEDv7o3iigNYFt2k5zd1pTnyjwgDAT4swXCnTzs4TrpBDvvDgdHMWBi8GeJix2R6sSwQVZNEVM",
  "key9": "yNvtFJtFnYwzSnQcRPeG7YqQD1watt81NmKnVjsWFeGZ9T8xL6V5PePsprbVB8Acsq6hn3AtNPMZMPDES9gn5kc",
  "key10": "KrmzHQTmLF6Dh2YZd6J7H8hXNcUCzyAEpRnR547VX9vofHCpMtafge5ja67a4HRikba5W6WmXFtJKTXua9smxVf",
  "key11": "4XRCkutgfoVKj2Nj73FFWiSzwXLCESQNQoqBV1UBH7ZoeiAuja7o4Pa5KAYWvRv8zfERQ3MMWeNkup3qHKM4k41r",
  "key12": "4UGUt5svberGQcna9bmRrMcEHnnEVEnTskd7JuHLq3FQ3jUYajr51FzMPaK861FDxd482RxKPL62ueNUR23Kqt1V",
  "key13": "3u1SjKeYLaMhWcWiAYSLXvNVbtEKo73wMBLNLjRXBPEKhJXdYJeiAY6TKLzrfRZNmoydmNb1SGuTZQAYoAWupKYW",
  "key14": "545QQgngKcD3V9fNDTzAvEMDr9XZZZxdM72EMViXpSQU724XmTMjDZiL1HNuVDnn4sm9XFdbmuD55AJ2ADyeGNmr",
  "key15": "3x5JxSQXdhm3xLtGPphPw4P49MgYAopY7FUtfXf9aA4X1Q5xWwgEQCs7WSw45BHWbvSVyGGhBurhVmhhrQp6YwfN",
  "key16": "3kemGwwXN7GD41rCk3XZkCJy8f9tRgU7GfqYLmsevTNzZXk9vSLBcBxrSeZZHd5eg9ei69nYiMuUse4Qqu6ptPc2",
  "key17": "5fh2URU4xst16BSVnUjXXcjQc1yUf6DFjME15m7P8KA9oCBJsbS3ZWyTVB8kQiy3aGYcmRXERMhjC5Ksu2gfxfWG",
  "key18": "64VqGvRNZBJXJQfoXngStoXNCWHY36wBBCgHT4R4EkepR7bqWb9R4vcxrT9P1p4m4PB9VsgWEqnaWV85L2kqYsKZ",
  "key19": "5WrFgrCDhUw3Y6pw8fQoCfFLXEUgRjRVhkhUAuaqrMoPRkrsC5QvDZ1EHF6pS5eLrVHkJqFu1kg4MPF4cpPchuGB",
  "key20": "5sH7Z6qkVLBxyhqHvLeaZJnzkjwPnsL1zE8WLtm57sGhNHada1MncKtNJ5wmXhGSwCynZxWggB6pcedPhHrKhLhd",
  "key21": "2MhhYy4J7eLMEn7MinRnjBLzr7xvLLK71uvudCpsmmMsdnuBoFz2wFnxauqDrTKRoXCkxfh4F5RmzkSXeRaCQFvj",
  "key22": "o6bfRKYv8H6di9rYW91wdZ5xQHdec1uUMePgjmA8VUCk9a4ock6LhajH4YxZcUCiEx5r31uMvBSrC9Uaqr1qVMV",
  "key23": "5ZJyiyHTmqa9Hfs3PhamVbirVj243CCzspGSneZuFfoYH9uCMkUtS3cLwK5PmzFSAx1ZnGSSMnuWEtcHGh3WH15C",
  "key24": "51VF5sCiHYyainpeRN97QMXLLbpLZeu5MQYtUWiPdGJ8ugPq6CHzGLqK6Rpr9MVGQzM77iGVdc3XRkQS6cvq68rM",
  "key25": "22gPuZSHhqwp9avJpxH57g8skFy1WuJAgMT5ZXR18GknUoAwhEpoqx53DwDkRt8j5bFDVwX6w4Vjva9c7U37tM8k",
  "key26": "51PyM8zBTqoNmj2brqB8i3MiTxPnxu83xrkhQnp39YBviQJeDy9eGtefmjGD57ZVF6HjRWHSsx9RfC8iiYHPs5Eb",
  "key27": "3GPUHZNPp5kPV2vx9VKLSz9Y3eMhYicnb3oZ2dTjUuqvS1rmdTDguj7wSu8du5eFYhmtWPzc1PkhfBbMCJJmBn19",
  "key28": "3xy5WD8vt9RC981r5TPbTsphgqyo1cMkTb9a7k5wjyJauMnCNxhzVWJiUUzvzSbVbiWLF5cmw19qZstB34AxtvFi",
  "key29": "3uFuz1Lmwhnsp1Gi2ZbvaxdyyfTBNb7qadvuh868wn1RcrkLmYZJciM8vDeUa886yebZrgart9S6XWGAssm1ioow",
  "key30": "2JyaKZ5mR1inCa7Uar93guzgNw9sZ7SNJWc6LvrZj68k3YNsB7hAWotaBCn2QCaBsZkMhQfyNRJshcRohxUx7LqR",
  "key31": "2DYJPtGbMC1DwVtZuHapT32bxJ4B4GJV9jk8JXi1LWs4KKJsKQjohGJKp2sGKaNjkcitkGYEu1CtxXWVPZFZoPXJ",
  "key32": "2v3HxjE1Qbgky2JGcJpb9FLnZdEQubEZdXBNCazkif5Cw28PR6LLEBAKtWLShCkwcxC5BrWb8jnjpdBnFaqgNyW7",
  "key33": "2kfJK3sm7C693x9Q9nvJu2g2E4S4AioP3dhB3nE2bVYp93aFdLKin3q8aUz6TfuWoe52RV34jAe47txGpugrAXh",
  "key34": "2zRnPsyi8MsC5eCTgRAr4pfjCk8LKd9M3saQsFFfwChEqtpmxpNyGoBYeeTbSRLSWmJb46cPY5SZpghjqCNgfLQ4",
  "key35": "35W7MqxBWZSRoPHuvdrDxJUmenttRLKGQ2So2DTiBiu6Hh9k5U7FsLS41EHfKdtNKFGiJwNSrugEHCmnYXc8Ag2K",
  "key36": "3BNRZMMo4v6nMzMAvETLTRh2vmvgxG1Mqw8nnTcyeMNCw4eBqmbts5Cau5tiWonTrxnHEN6ZcydQrbHKYMAPY8w5",
  "key37": "2AmWZxpxWJnuakkqtuM2xnQU4T9AuEYHbM4mTWq3ymLdgFarDbT4Tnz9KaPRPmRsdLgjY6kW7YyVQeC9QwLG7Lqn",
  "key38": "5DdgnVgqrw1q5sKv7fRXKhHnNpJQsWz8hsfGx4taE9DFrvVSwguvEqJrNq3Ni2NcUsWijpW9p4gqcSqWo6Yccxko",
  "key39": "5kk5RGPMa7vffxibhZ6zNCriZWqbeXd4oYg8fkJZKKWdkJxqZrEQn8hiaB5AJvn2kbFkx6BSrMnN3kFEqNZQq8R4",
  "key40": "4RTXFMxgHsyq6VYHnK5JoWKmQYLRKWqrUfV9zqxz7boqAAZP3pWiU8cWL865VHPsdFvXhqaMRuqcMCS6e8WpfeUf"
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
