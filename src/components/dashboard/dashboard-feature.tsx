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
    "3pcsjA8rz6ga7pjrZfvPxxJLehrYCmKN5nncr6JKAUNnhmLM4KLy5HYYZpwsku1bBGFVKTAkVTDLLyCWEiwtaKhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QKsVhY1FJyFAj5vVD76MYxkoyxhAxoJbPayFB3ENKV9QXUKPCbCfc6wgv1gxSt9tFiYA3NMMVatVGzSNgtS6wGr",
  "key1": "4qddcN4pQmrynPqWeDMQTmSfsE6KfmC2WZJb22LxBzfWdpyfBFkjDJqDuQWZXejPcqgr51b16qTgvm1n3SDDfuZe",
  "key2": "4YQEd3Fx3Kx6TzERbksVvc4k7oLd3C1zcdZSTUFhKjMhNsCBhxqjTBqiryGZt6HZPW252PPp9F9SWXumLDaAQkP2",
  "key3": "4V9EiDCmT1qHZACQYESA9nVzp6nBHaKkvDQDkZgFfBG8sww1WrsMZeyTLWB9a8RCZv5wUVmZuzmfz2GFbk5j4vQH",
  "key4": "3xXTDFEu1NoezoTAgtzt5JKxyfXiWnjzpHhYsHx36himrXpJ5P2BscPNFQNFBV6q4BTnDzWYhhWDR2bHWxof8LhA",
  "key5": "2ZRBuoD3XF5tZD6sdGPreEP2yXCBASG8T2im7Nmz7qFbCfSX7JgKvCJmTKcM4a6tL7Hbemn1LqDG6GJv2kPHLq1K",
  "key6": "3U3LEbCFekcNQdQJK3VjR5KtNZ6vsf8H5RGGNvXSUMQPUoPrxp35851c68RciG5ajbJxntto9r98S3Njgcr9pEvR",
  "key7": "2h5xDAVrHX49smN9N5xz1CAGgnztVi1jY2BmcBi6JMhouTZK3krpekiAtPPho9qmam1xyz83sCzxx4HEN1zirytP",
  "key8": "5UtF1AoroWrVQxTcvnp6NPtCxgPooZsEtdy5httGRkbJUi8ovWNqFz6SRw8Yy95YugmXBMPGCzpHWQ7E4UUUhbmZ",
  "key9": "4juRSSLdyEf1ExcBrHthNUW26KV8QaxmFGJpFrmfvtU6dTUEmr4eY21AiZkX5C9n6TySGLHbMsQ1uUa7hQcWciN7",
  "key10": "2MCJMaUEkDdH8u4gVveX7H7meANNwN7aEHC3QXoDCM42BMkGuos3YA5LXbgig2qcVZLzRx7ABr2QJ7GRvN4Amq1Q",
  "key11": "4AFh35ZtNwnyXT5zWApAq6fH6EnCgSmAV3tyYVirxuB963QG7p7te8iuzPGBSQZgjQqNgeGignS43VV7mLD2wt7s",
  "key12": "2NrU7MmX5hCskxyhkYd5CizuPeDaBJLgHoLbfyShpXPAypu45wUfJnAj9PNj5WXQxTwUiq6VeKpF4RSYfrPmTzJZ",
  "key13": "3F3qkCGcdb67AJVotEdoxY1qNANf8yp7cncxar1PhCnAKvC3H4d3ZB2NTr4zNmmSkSj8dEzZpZn3PXid4eERa7iP",
  "key14": "VKJS8BS7M9GKaiiAMFx4kXoSHyAyYJfjxi9XLR5tbbxCki64qy3PRSehMQJDDgFGjbEQF8dKHVUmg3tADZ1BBTp",
  "key15": "5ex3RgUJ4mBa3NoX19mzfNZBkuRQHC5sdPNDk2Htccax3dCNzQXZp9eb3LyczKD94kyhSzcgbjmwptmnwbTQ3M2q",
  "key16": "584Qp4cZUC8JVtjZiikGHhf821YXs85UrQQkZ3XA6CXG5vM7jzGBtftjZj1ULtkaRcUN3JbDXZ43WbjW9SzC1km6",
  "key17": "21MHhqxUwgHFTKEksCVGAV68EHJEnPAr6iKGs61pfJHgtizdjNVB46vuu6roGa1kKhM1epseq21RaeU8sPFmGUeC",
  "key18": "3hKBwrxW2cLR6M26DFtKRcRjKSpb8bw2cTdsu4cakF81jC2zmceDizG6bXZBt8YkJCmzHWzBReszaTT7cqu1ELz6",
  "key19": "3fykrJiKG7ZaHphb2izJgn7VULGsbxnQxw2tYZ5zWPTu3j6PzQXHZc9PF4UtKMeD7JCkyyZVWPSfpxE2CUVNRUyD",
  "key20": "272hAXL5t7GuC14DYBnaKxqnuFYEkwPAH4dq1HL78nGRpfxqJ9PcUbfw8APiWEF18g7mRdn1FYuRrCXrJs9Dhaoh",
  "key21": "rzkdzRJGaEsh3BafotzBWbGywZsEm5xP5A2kDmxxakfvmJZKGEkskYsmx5XCuWQAjkEykzfp3VZt3v9ns9FB6nh",
  "key22": "4dtH1jETFhndNdtvR7Gm9SPdsAWyV9Avpii6YSVM3fEmvaHSV9pk1Awdao4U8hEQTuqFwSkbQxBYftb3R7DGZP9E",
  "key23": "5XZbLogLwyTmYKmnHiTRaxyxHyKgdHD4Ro5rJ6NvUgrtwufb29KmcEEGr7qFnMfD3Gmen7hZLaGq923jNeJrqjQx",
  "key24": "3wFVFGuCTJNrGt83L1ZLhAk1hcSrp7seUCUhWrvhvnbhNP7pA8RHsQgKWpmehx94igJQMvx9CCjA4b9ifsapkaeh",
  "key25": "57nxXA5nxPjrUjE1kDc7y12mpr4HXeRxzscp5KxtJMQe6XSWwNv1KXizPsbkowuDoDJ75kEqy1FetYLnjieToWNn"
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
