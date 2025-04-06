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
    "he76M1tzxuy3VEnNgkuiVifMQGNjL4C8tCbxHYH9heW6kMgv8FqWKsvvFsPUZuTqVPKUAMHXWpuEjUWe4AEEJ3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCLNTBt2cJkmfTC4UfaeXmYTFAwo5P5QHexEz35Pq1m1nP6ftPSZ69wANaYcHgSonpyefPtyXJ9VcdLj2xZKBua",
  "key1": "3PSToTuLrDM2ktTCLYxih9hpsAbrEeSWXtyWyHFno2TMAhczJw28D6x6qwi6Aaas2Yk23vMpHKXw39Cj4MxMkP4G",
  "key2": "4ibXR6TcgAKySGPXB2NLh2UPF9xwPZUxTgnwbprECrKtrQdCZjZNXKeE1PFYds7mUN1MSPZwwF6TKCaaLa7SfKxn",
  "key3": "3g7R85WQN2oA9yxJQbB73ZkZHDYhVfTvMPjnNVvxWwqXpFfsRdUVjNKACKwzYyZaQLBkS8siMxHWqMBnuSr3VXR",
  "key4": "3WJTys3YsipCvX864zBerjcs8kLQpWmKg9rBowhVemr9V9hBCU4UbkVUhscUvZg71NQjVkFLj98v7BUAThnReynT",
  "key5": "3NS1UBHrQTNkyyprMfFxVsxofVTjZYbw21fMC5ScxjN1QHFeA7TFGfaGSMUi4bFa7xMMr5FnkHYVxjTA2kryURZA",
  "key6": "5gfSR8VXH3XWZ6m8HVGky988BCrhgPQnTtgXkT1ARMso9e12W1y8m5ZnfyHiqK8HCbd5RTYhSJZV5QLZGqqqLXdV",
  "key7": "2egWUkb8yJRwLDjovfVSFAqRjo2hZ5tHxUS1zoZr484AAndPnSrwMeXAMSpYEJKbD1s8XMLYB1hgeeHtiFqL4S7J",
  "key8": "2fgQe25yw4KHHBCa487euv28LqVKowbsY1W5c54JBBANBX3GR4M1ysJPL7zwctDwvBhKMXdZzj7TSWriHzYhRtiU",
  "key9": "23raLrVY2SiKDy4myKjr5u4GNYYmLDj76U1qpHtrvn2X2M4C6UShenRvLuX8EjS9bCR1pHUeqZbzhEysGMUjAtat",
  "key10": "5WE7kQ6zWMBqjZwK5XPb7CNCjE1iwrJtRBpBsw24axZQbUP9vnKfqVGomE6cmU5HVwSoNMr2rTK4K8wuhEFNDVw9",
  "key11": "xHBoTW31fdFmDfYKw4ppa7wxrGurFyt2n5RHbCAZPTNzhBg8iGo5V32mqKyJgVm1xbAkiPLoQDAyt7U8XxSkiKQ",
  "key12": "A1s3gQUcEQ1QUPbgmjeqUD351kKfKmpb6EwqPirD45SCbs7xZQpfkwaNu9zdNkkdDXC2EDTDfCaYfqLNeFfTSJM",
  "key13": "4ZoodoyfDbbRnyLHYZGr3nnuUn5RfsYzpjkWJR2CSrGo3SwUFL66JCZFYyApPo1aB725n7g42KVEBs32aJNWoh9k",
  "key14": "4p3oTVJdHFPHKc5fMenmkcrK5eSgi67ep7aD9k7kizBgnubjfzLHY3Q6t6YnSfFaKQEAbdm2eu5aoeyEtNPVECni",
  "key15": "4fMAzKuNbS84AMCauAmWkAGcbLKat8YS5ey9PXx31EUfzDrKP1LUQftSsqWxpYW4xPw7Hq267ph1BqibxLyavXL",
  "key16": "2rwuL7GLwH7MsTJfTpPnXjUqyFLWQLSqGRZJZHd7CDN56Mmg53cB7wtE3F1BeD1fkQ2ezSRxW7UjvPjvHsj6t6S2",
  "key17": "4DR5WbdXth5BDMYUAdm7g2dBEmhfHj5n7LFVjhRGd1rSUGV5bebS6kKnpotfP2fvZiDE6WTnUFRWUv5vM9QBeCtT",
  "key18": "415G7WEBgcE4LqVRdYJMytFw2XQgptyLXYxDaTHLh6x5Rcj5eJKzn8ZdPPXkmZgi3EsLLc7XzHtesJArVS7jpGV5",
  "key19": "24qxvQhVu8zb4wo57cptMoWwFFQvp17xVEMNKGYY8AnH8fLVMmF3eL3cogHs9DnSD5VifbUbZXmz4PoQNirDfoSn",
  "key20": "3jnLWdxK2jRjbhTrFy2WygKjFxHSBmBRDUh4jTCgP73NScvf3J1ovcT2wfErny7hEmsDs7MxVkoY3RUbff8Dp6W8",
  "key21": "5xk74W6QtjZ5Gyeh98cZf7JgndhVWwW6GFvL72FRDThgAdEKBKivw1wynYefpja9igrvJTFAT37W4hAKjSEX9cHq",
  "key22": "2rCWNQs15cHh3JbLdiJQmy843Q1cvNBcop8n6mcMpxRoZuVwReAJUGPCHD5J1nRkjqDxERVQPRbN4YaFAd2dz7J5",
  "key23": "5DiQ6FuEyx6aCSGy3XspjHMP5EgnLzxR3EkxTpVr8VLxb8BYuDasRPnPo52CSpnQL5nYDaMNurZzSHxpcCisQ7Bu",
  "key24": "4uaZmcB9gzeXohrHTNEuGbsEYfHRXZWLbJahUpcctfjnKuDriatgfku2RfbLWWCbqy1xxZMVB1F26EEFw3Si6Yw8",
  "key25": "57tprhBJwpxE85fyTfx2HahPqj4sdp4hU6kKrPUSVCuFBjnnTUURZmMt3z3MgHufMMNumpDCiTWf6T9axBoP4Gj6",
  "key26": "4VqHNQZQM6HggResSum13MxkXLZTETGFaSECfj6JuHJTuoxT6VrjaGWYUejz2thk9xdsNkDGVqvhFT52s3n77b3d",
  "key27": "4kc5mqPqV39q5wQ3bSpQofSJjUzRTYmvrW12xZRqerpgog7qcF763MdDgrJDSyLBuSKVSjZY1o4k6SfNYwZHnHxG",
  "key28": "ZTRqWRV5yzGvag1LD8ugNKJ1FE9kqVk5ssZnHNX3D6n699hfc5SyshA3PfWVpNjKnCwwW7xvfVksdSj4S3zVE9j",
  "key29": "5uHHF9vixpvfs1NVRkMYSi8BTephutvQjbv5hNiDShxNo3xH8CfY1TrUo2cQVtkGuPWKh3h6FA3YjPozZ63qctf5",
  "key30": "2E7CeFqCdtJge4FCvcYFbo8hq9UEaPczxPPLJZhysnwzxbDVg2TPvtr8k9ni7npBiXLkSzhrLfRGfssdu7ttDNG5"
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
