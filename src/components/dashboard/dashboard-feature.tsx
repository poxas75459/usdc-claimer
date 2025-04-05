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
    "2pTakCmrUc6E7EGfUCmL8MJxvTNormeZZ6Sr1wzuwevwGLSPxoNxNdLw4fUgKkv4fiXKN1YXZ5wkPVbLfiom6WsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z7AoMewrkxkN9vQpMNjSCTyCtgzPF1faKDHpxs7LHjJTrZyviBxCBFZ8U4CEaJUjWnkFqTgBQrMtMu6L5CgsdvW",
  "key1": "3dvxdJZRR3xVWHi9Mzda3HAQ5erWDtU2AnDuDXNhmDrncqTLHd3QTpqzduvCy63x6H6HrjVG7vWDwWigWDxLzt5q",
  "key2": "59DKGsMRTEhiD6AhDKv8fJnSQP1PjAr6vkYt5sCUiEof3rhLxR3WWHSGnuHZv91EYVByXT5zwu4x94DHWngAB9Tm",
  "key3": "2LDzcorMe34C7ggtACNWhTjVgw7nBcV1KwRhh6Qa2GtgtnR6Rbw16VFrxa7jsSws7GuPZCHSxJAFJ53meXpCq4hq",
  "key4": "3ArRqjEDQNWqVc1Uph6EMNcXBNWqr1nexXv48iwQzXuzy4uMRDdUHWbFGiA7xJ87bCTcb8swM1H6nnQoEduveBm3",
  "key5": "4wUMeuovwdXTnPStUGVa3x1CqWrisDSAj7NLgAivZAcWxF2dcZgocQF42rmTVgMgC7VfVVXXn7iGVo2quRRpM8AJ",
  "key6": "4XgbLhKUhM4fi899TtgZHZ4ikPF49ddMxQF8cTbk7SM9DFfpKzzSN85gUZ6EWQaJgZDJGgHX6iN33gDEuYBoksoR",
  "key7": "RUocYp6BZNYq7TbgngEQcUe5ntrYdJK8aKt6yrxV3KPexhe7PbfigsCKvyDSpk41UbaY8vt4m2MZhaSvjwhyVEM",
  "key8": "4hMVqwAjTX6ZFhZTCoduPVqLUWaPebAHuFEpqbAcJcFT8VT6kaDnBAVmoZxjDGtc5VXFcfyKEYaK76F9WKPRatyp",
  "key9": "3XY1nXv4UE3nmHLCRKK1N1JV2oTebMUcggAEMSfHboDf4u9HNmaM1YMoRQzxMhujDd1aezfVAbT7bV5KRseR16UB",
  "key10": "4TJZAnW39DwnSJSi9f4sBVhBVSq3UGEN8WQSJiXToc37NzVyVJsuXeqjd5ABxktXxFYN5TzBk8EmQeUMX28bb9Zc",
  "key11": "3pCNGZ9TzqVZWifDaGybBG3iCBVNCMFiT66dCFxdWrdkYDmyHRLY8wCgotugVJyFK6yBpSMig7zGqycyFVbcYW8X",
  "key12": "1VmREDowfUgQ1bTCqey8cJsGvQ11XQCgTLkx7UbVmCttgJjg5BUSCETrobKWHjf5Yezgi6Xw69mXHKUWG6THLnQ",
  "key13": "3ANL7sXz7yHdc2NMbFuZ3Ny9m59MbYsq4D1zVH7QXPXYHd7VFoBpLKTinbtCYQpjwxSbBxyvK5KduTBfghgnSra1",
  "key14": "2PUc5tJiLjiZG2y6hb5yS5BMkPqjgkg36RvNh713znSEzL3Mo6AUvJ1VMSc8efSpgbyS9UWruy6whCXGokx6rwEJ",
  "key15": "37QJVeJ5wKeJPAQggELZ5aERGv5S75estAUuQFQrE131j1uNGYcPmPKSNVzsbgBy5CW2MRQqumwTnTP4o4bUX56h",
  "key16": "BkbsuipfsVaGXKkogkCF7jG6G1M7Dc3NvtF68tgxFHYLBLdJLPi3t2b6MTTTaRjdAespJNjzrLFxjy1jCKkUDtF",
  "key17": "2UruAtAhbM9fBLpBqn2TMUcHk6tZLvnPxH5P6VWJGajEDjPSr6WXXTQayuCB6kgvAXZBYgEjLUdywZUdcTVhE5EF",
  "key18": "3MyNjkaT7fdeRJXGUsR7ucq65wxCFgW9aZAsWgnGqXFvZKUgqPfv2s2FJttcD8aN1fZNJESBmafvJUBUTF481twg",
  "key19": "3Tuiv4KDBUCm9vEWv14uBBVUTTwHAFXCuMz527kUkbAGgto2QQDbWi5VVRe3pjqNCS4PdDTgEw1SFLNgW8Bqtx3f",
  "key20": "3qXf2uim1bxpzY7LuaNfupMhFXFiiW2AhefosPeDeJRo6RMLBunayvHchSeHiNZixmqqkdG2tr5YsX5MSb3HuNbG",
  "key21": "5sMtN8MerSjkPCNwv4YCLgbvuwfpzD8ZoQSbJeEeRhuxzwU3LsRLF57o9fgqqCCp3zTeCQrfg718oL3rUhBXQwK6",
  "key22": "5bccvEK9wjqeTU75abZfRNA8rMWCfmQdqvWqfqwm3VRwz9Ck7414QeyVLNqGXQsBzDknybPqHZWeVf7qN9Qxy9kX",
  "key23": "5QQwdj6wcJUKxVmFsgkspZR5FvezwozvP1hLpNxku3prfiz5Ce1t7yhL6dgXhtEpCHHzFyGy9pXiRMYkLHUAPL26",
  "key24": "2RF6krPNryezJ5gsHngankr1RyUpgtqCvZFQ4f95eaT8SasayskjZcXuCFkuk8pAymJbqNdH4FPRtwjMUJyxw2bb",
  "key25": "bZVkiQDWxChr3xTmfBMVgHcatZ6MFDdMwn569gamV8i3VNXEFuAkg8do32qXwnwRwEzeCMhwTVEvZaY6PWSKtN1",
  "key26": "6FQTJmLVSibjMX2n4L5QRMbVBsj5S8zXYBKSJqZykNPqj6VGZPKn9R38KfVo15LZwn28stWf4dNqFJa8rybk5bJ",
  "key27": "5SE1bZzNSqEkR2ToUmNd27Fyzy9p298fM9ShhqyTcZqoBUERS1Vck62FYQ9fEm6UeRDt1ejWEANduSFHGpDja1G4",
  "key28": "asjwuwMKSkkppYBi1L7jhavL2LverRGQhoa8hAmCitiWaVUnHaCMQUHH5YhZXpCysP4MmYgDuyLsmjzXkbiqteu",
  "key29": "5wdp31qtGuDCow8q7Kor8x7FtMZYg9v4HXnBYmUEPdKkXHDan9UhjD3EdV6RLYZboFCgKTwFbNNhgh5NK4wt8R7X",
  "key30": "3S7Qy7xeJegGtC7v9oPSNEdPBZaFBQAtAWwqhhYP4Fz71UH4D1Zwv4e5Vsz1M6MRhP59ByWE9USCGn3DmJUJMKYc",
  "key31": "M4hSB4XyaAQxtRKEMU8boRmNYWGxD4kQbBSWPDbvaYEqFRV3vfeRV8uyFYv95aNFiHTESMqe7NpvsvTg9CVfZiT",
  "key32": "4faCeWgc3j4ob8fDawiaz6FkFN2RW8XspXtRq9RLyGvgmiNnGrUgrHzh3AHaH6UbDr2HuAwW6tv3GBwWEnvFCKzD",
  "key33": "23k4wzvNhhHUQybBdiLQ2J9QuN72tvGB1fDtYTBBEJNYsmqWNf1n752Nvkah6WBLrZsQP4T9U2DrqDLHvMTxiDBq",
  "key34": "4KztHkE412mLKzAabxZpHXjcMRKmedWcbNPjkQzzAfebyxewGyeChFx3bp1hG8H33DquuxukVZw8r3hRsM4NbsEW",
  "key35": "57ogaCxCfXyfKLLQxKzaevfHaVRKGwmAhS5TFNvY6DfPAwj2uUae1tRyT4YAxCVbvzYfY4mRMZG3CQuoR7ACru2b",
  "key36": "K9crmK9QeMVL6R1rK4TYMPduyVrwQvP5EeWqm5Xn1v49ksHQ121AYuxXftQk5vN26cVookm2xjPk8PATD5wEZT2"
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
