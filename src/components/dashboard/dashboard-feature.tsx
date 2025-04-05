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
    "2wtHyPNkJXiTPVrY3frWscb67Xo4oT3DyNqefrCqZ13vRHZnDLYMbqzCC7M5gYv4184DCHHZHn2zz8Th42GszbVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVtCRA9H5aydgyPfosovKYmN1KTjUyysHCbBtRf2rNpvGZYA6fFHmm5PfxDNuk8Y6e4fwgcRbmvks9EwQU2bU7r",
  "key1": "3p7FJ17PNMD2rsw56SMaF43fY2WSLykjSQVjMVY8gytywhuMdh2nP5QgYDdCr79SJfTtB8VEZWy6Q493me6YNfqY",
  "key2": "5rcxjD9komC5dk4VJkzQ1F6UjsVSfdCpgC1kZW8qUDbPfYgjj5E5LZMtQzprm9rcqGY15EJq3BCCCKe8B4RdNoSo",
  "key3": "5m5dpbZ3ZfYJMrMTf79KnpKw6DHiXBQV9R9v2KoWVotdzmu4eMSHohTMSUWgnzZ184i5apk9ssZbbNQgzoAbWR4v",
  "key4": "4ur9R5qJsz6ACgCdbTtG4xcdBUi6Da7S1VwRPEXddngqizoHjbrduyreAdRevfRJ2K3rwffeojw5z23a5fBiWZXH",
  "key5": "3MEegQ9PQkikG48ooK1oU6Nv9atTDRJX5E9HVQZpwxvVA8s5BtMf6U8iNS9BL9cJgXF7tYadgrEoGp8mzwvxQ5bV",
  "key6": "58Co8JMfc2yqa4V1pERMP9dGEtHpUD4zQKdYyirruYSGpuA3qareJJqpVfbPPqyiZbFpPTJwdwboojaY3WNPctdt",
  "key7": "2Mmk8FCAzCTjMibyuAgs3D9ryDX9pW9VMYPWK62YKv7dP46K32TWu85qgdeqUkzPVovK1at6Ypim7WDNrNtFpgqV",
  "key8": "5v15hKZgQDwA5spkyTsA3CBcCD4ts9rJ4L3N9nyKh5kFGLCcR33JG1qBnmdjyTZAAM65gVLXkYC2Gd1ooav8Goh8",
  "key9": "2D9J9Lu1cmfe2MxiW15pqhNvLaTG6Q4U5VJ9AYVHDB6ywP7xrzzZNo2qePYfkaMSKy3Ru6C5RWgiaNAQQDWhiuTx",
  "key10": "26heiY75zzb2RuR3cBsGCqf25sPpgk1R7cvJ1KFpzgYdqXSrWumXEdpUsLbzwJAEVXg9XzPnPtEhEsGnW1KGA1Zh",
  "key11": "3Ha6KTfVMvHuTtFhcy7EiR8zeQ5o6sqqnJ2GpFc5qhCbKd2DgbTaZdQSLqxGyhYtHeMRxL8QfNXrF8jq7HyYn9SL",
  "key12": "3yEdN379Sku2MjiN3L8wEeUJvMPmkoVgqgUYG45sXJ9dB8S39AhcvLi5X8MKxowqcjwAa8zxANcHFob5uDDv8JYy",
  "key13": "5hHBQCZf6kui3BRa6utkAZ7FWT4XZGwDJDRUnHvAmVbjRPQj8D3J5WL5fegEShKRZPnRfZZqTPKN6GsC4ZLjdUnD",
  "key14": "3po7CdSZSD4T5VDBC3uU832tBDjTWDUeExphEQxtnDTSr9bHrZNrTLPFfkhZWQwdUAKjobaAeKi1emsTrHS3GdJT",
  "key15": "4i8dB6V2wrdN4nMv8kHRzP8Kxucsok6UxcQY7wt8WYQ8mhmuKQf6Pq3x7CgYatZENJDJa6n36FaP7iWLDmi7hue1",
  "key16": "cbt649bN4L8BhGADUFkQ1Cfcvwquo77mNDCxPHecNrQSFb5bAvSih5y99RRUexo2axzxsL8rMAQa6DUETnj5mAn",
  "key17": "a89LfjxvM4veg54WuU1yT7sw93X5uxSLUBUHFShWVna1rnpj5X47hBRktbhVbvtbALM1hEgTHW9E7xvzo3b7YjD",
  "key18": "44sAcN2HyWRamDy2ZK2BGL7FDYoGfkFUUz5CRrcTH4QxLkwebsTZojktdgsegnXmCBfu7S9txLcdZL8t1rfXnJaz",
  "key19": "34S5wkLY6hhW6FuX49oGGpdgimfyMGPWfkSWGMxYZRSCJDTJZU8hiTfL8mEHXxYkQ2U6pAxZR5FUgH3etBhN2Mtt",
  "key20": "4vvF8V8EAPJzrnktzEB7JxZAjnENnDg7BpEonfSkedbRxd35yCAAiwWXfnehLBTxBAA4mnwcrLCtpWyFnhhKbTFH",
  "key21": "3vYEaAvHMqXyvfKkygi49v96jPrmHKTrKvzroq25TbfH4Uspdw6wagDJqGN6cSox7fnfkqjKFY5WbgjYD9SFSoP2",
  "key22": "29UsxunP9xTcdHvrL6SLAWHBLBGZr3jXJKfgAzvsfNDdT47mi6UwENMEutsYgDVNWUCaQujiW4gLS31Su8pBFHRv",
  "key23": "5M9P3cFWPHM1sLB6yFhEohru6nC8ecUprBtEv6tn2ykNLHAi3mVH5zDYcwNAt1otuCyj1chzUBYLp3NHTBckafuc",
  "key24": "4itvmiobMFiVHEEfyhF26NnpFoQX6gE4RkFpB6azo9Ko8aYph97kf68LiXLNnD2XA5g1LLc7CuK8iJfAinVaDAWy"
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
