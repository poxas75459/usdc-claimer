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
    "2r8G3yzpSMbnPnqbdAqtjyuH4kpKY1e6wFqAG9fqCmW92rRNvL3MEELTfStsEkdSrexTzBym2HqNDVjDpcDrqiQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MGrjSDSj48WQE4vcNupkL63G95x58nTDBryWk9mmAoAtQxEdjH128H2gi6gpbn5fWKtgin25Fo9pE3ir9vTCC8H",
  "key1": "3ZY3myPY5dbXwkzipseZVBPfX1vWEp2MwNSQPNK4bR4GpTFfKxvNGCU8Q4ZncbUarzQxxRmw2PRiyZYobYG4bxQx",
  "key2": "5j798KXVTFSfLg8ziWxkwsgZqTRv3iPEgHhgTeoYRv3NbAYuvXqB4uX1dntoJM5p4NmjKt4k6rSQ629G3JcXdqrp",
  "key3": "2kDRVEUwMmCbKxqLu61EuqLWRz9SEkew277k1MGA3xZG7nDaJjz1m4ymq1GWvi6UgDP4SncjqjUDLXrLAoYxRsf4",
  "key4": "3ZB896RdtTuHAtABsxVo5y9RwcYjBC6uFatUwpEHGD1AKDPh3j3eSMCciLXjHgndJCisdyrrxizzzeM4UxoKYf8f",
  "key5": "3N8cNuuVeWDUmPH2497kvXdwDt6xaKqLSpMMB35cTLn74PcwobMSiR4bxEHEJxZMd5rQsvW9XUTZzHtYLRr5oztT",
  "key6": "EKJRrFbxtraYQzHNtyh3uSPE9LFLd2NvpNfAsR8MuxGWgYH6pdLqjaKXEfMDuD1YZbMEGeeHXDqP4xDpzzktxrf",
  "key7": "3HCsPnLwBPdjyk18QLq9ZMyDeqB4K9t4gMKRqW8nZ7oNe5XhRR2bNC39t5BSUwsr8EzFV2nSuEVzJ7n9pdSQ463q",
  "key8": "4ziyjyU52SJJEseq6tUoV85F6DD7UKXq1ZkPS9VJj7J1rFDYohy5VaRXRq5C347o2fRXpWGbhGGCFB4JKDYZhzTX",
  "key9": "5UVMuJdXSaCzchqxrurdNExN5AwAa4eTuP6enX3tzP5y79CwsA2eJDUGLMTzqLTPo14cxukqoyvkMVddgdNfojqS",
  "key10": "5h9JhzHYYQniaYtvdbb9rrWNn56ZeUR4dKa2nc3ZucRnRzVxX1SojeMgWe1BFkJK2R2JcjPm7g4TX7X3VA25kxYE",
  "key11": "tt9MErkotWpgNGnmNn2HnzsoQs1TituAPS1pqNjr7tfqiEEGj1NXqUuYjSks9mpKnc3gmkyBDyURu6XYXUkS3H1",
  "key12": "2tRppJw5meoZ9CcechSeTZ99ZDf9734Q44vBAdmmm6c1cdMsXHqsaTnVx9DWwgWWXWCGtWzN5dtvQD3D1nHBxPnS",
  "key13": "2qq2frxDXrPP6RmtQ4WnNQ96A2mNGzxqKJS3GX27N7GfbVgws448iKuxBi9z7Gm5kNsU3zvLuCFF7CCiPasDM4nR",
  "key14": "2AnDDeUVrY1cNnejZQzE2CsXDhdPYoh9MHSho5FiXz1uayZvNkfJzpDxN37rjPp2LyGZtLmBrpXmr5TwWoCyc6nA",
  "key15": "67o3L5kfyTHMqtnd6THwsFDM3UBpczDbJtkvHKro78Uv8GRL4Lr4puxp6gA2LzsfavCMtyUiT2QamQo5KgX5VtW9",
  "key16": "4S3YWyuY9JhD6VZn5x8RHSdN4v2ziwFEBoVXYYMdvV6Hq6X52aTDBUqje4rVE9HtMimhWNGz7LnVF9vmFXPZjz7z",
  "key17": "28Pqz7sF43J88QJKF4qfudLTMJbMAcT9pENz3dxmShdhmJxK7XfqhJzTZvj2iNzzHgMe6G1sp4dAGPuCSLaic4Ci",
  "key18": "28RJ9pWKMRqWRoJyqD7QPvvNh1zNX5hxgnTov9fmk7EenkMHas15PfRDrAYFcZajHPVsbV3PXSoZS9w1gTohUg5V",
  "key19": "421UmcYcwrtBcvaCqSki9qmFfrhNxu6HkpkTrweQGNcDSnvv7wukvkpsBRzMJr1zGCkwVZYhBEMbuQMeX69wXm6Z",
  "key20": "4aRy5AsvUgDchVSZRNubRRBjb2sbTQg1AkeNpqDCzvubNzJpdRaYvsnXJQvNmyTWPeqdVXDirqGdc5nxrh1Z523o",
  "key21": "28EgwoZmCy1sWg7Ls7NW1hmgUV2UcfDqf6jmspz6QLTiSmEKZX81ZuLPQV1UJgx5gqzcnM7vbuz7wU8vwfemP4Li",
  "key22": "2fAQjD6m6dx25jdKAy7w2CFzhAYbvomCC8ZQ2Gwg3HmNbe343RQWgK3S9gwQmHfresyoygkQpDG2FndHqmUb4DHb",
  "key23": "4vr4bRXNGvsTFU5PBqaReSGr4tzoC1Emg4nbxU33YoUZMhDfnPBpzGY3XdMYWbVCpscfRGGC3mTfcKNcnx3js3Nx",
  "key24": "4MDX3hg2ZKFp8y1FLyHJRQWvnnMjSAWGdb2DdLHULkmMg1uL2o5K3UEvBg7LAs9K9936YpG9h8LEA6KQzz5UJQf6",
  "key25": "4sSSw6u2cw7bMPQJgzcyBdoZ5FsydSe5JPo5KEzNyQuADmKp785hAEnMHc1AsFn4p44UB7HZmV8NotUwhNPdWDCz",
  "key26": "4HhRAxe2egvLssNHWMrUZYeP455NuzaSgCa9f8MqBRjUJrjxhT26DsCo36Gm1J6HGPsi827d7m9NQFirXutZwqd1",
  "key27": "4zHMnw5efd5MVTRrkm1rJbDBy7pLDBva1Asc1FJiCvwDDNPBJ6Gy5GZJjds54fJCYEV16Ww5WAZm1xmPHSwS4gsa",
  "key28": "9eeceuZtnZwGGKjzJt7zvtdbEcJ1HwcreD2H8a5GrjWBxNmyzNsvJfqcVwjsCoEamiRY4hvpQspsFgL7FHa7rgN",
  "key29": "Skf4Gm6Ckdef3TNb9Ju4wfUy1NKRDavvJkh4QANTn2T1svFEjQCVAizFz3KDxKpMCFmvhS9G1ikQ5ft3jiwe5XX",
  "key30": "21UUXA6K5mQqhKgGeuAv6YACAXuGTRn3hbFgFExVmot5mqF7t6UqxjQbrJgnaKVtcytg77XkkbmoW9fPFzNK5V6U",
  "key31": "5LMHmw3bnnhZncdRDvMhyaju6A6VNpAgfNg1k8b3EGWLpuuL4LCQ4xCsqNV77U4snGE1tqR8Vub2Bk7NeGQXtpP6",
  "key32": "5KjsvjMP2xmhnvydYZoiRFFutJwHDwBMCgF3KFtzDdqbjPVHCMiG43NCZwjQcaKxzjW7S1iwDAX4ioR93ZBB7ZdN",
  "key33": "43qjzFTBYEgCfvhSz6bYbK82sBJ1yQgMi8arh6SC6piAxUAuLLwDhgLD46SuLzVfj3EAVRaJQGDwxD8j8EKYFUJs",
  "key34": "4GE1wiUXzPhwUmiqHs2FioMgRjN4AoisrREwUhe7WRgGoDy2tt1Yj1knywhrFX5bbd8pHTftwP59jpzSS1mXYsjB",
  "key35": "4uuYqyeEhH2wHsDtEfu9QFrkJfqVppPNBKAbtxKExvtj2gW5eEREzuCvcp2xFCrSv7xUKGMNXrpeMzvgCisRhvaE",
  "key36": "3QdxzdDHQbsafZBLLpJRhYC2siSh9uC2jfy2oUadCq59aMUDfdERtcYNaWTfShvjJcet5SMnPF91rxCAXZNjhNYc",
  "key37": "63EC9p2v4qHoh5PvZ3Ho9r8J94Z3W5TxcCkY9XFDvaUvTE6DANCaZx6vBdYxZcFUKbAT2TdPTy8zed8XQPxKeaHa"
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
