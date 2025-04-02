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
    "4ivcsR9gJigrKNYaDGti6DhyseFKYoXsupzVpQEDqDq7evPMHhobe56eXDSHwK3UyrmHohJWXLXffuWpFVB9TWnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JP4UBqRsDcdJcWswTuem1FwrFbwee2ULe65P2iqevG6yYyJZezhDan7z33dAUWYQiRTvvT7w8RUj6FeXgB5Ve31",
  "key1": "52KHKa3XKtzrXjEqvwuY3hxYCy8EX7WSVQZnQHyKghVjxoCMT43eUoR5TTNvbrCufH7QAbCAg24hCkzZsDpwyfrv",
  "key2": "24HEFQqAape9mzek4JbdU4ddETYioBhNbvWBAVTPjfrrxd5u85vB115gY1T4E8xesnuPLdcXG2P3bbBxNgQyfgU8",
  "key3": "4sMdQosewppMgrUidp78X8qRwcGNRkvM3K6r3xdJPmaLddXosgdrWoFbPXp63xqEQttEfV5bdfM5KEegA3cXywam",
  "key4": "4UnGSUeSxBSfhJefPRgfSDzhy2iUWUqujvKiJP9582vpxGrZhscqa45jy6m38K62wJ88nfgEKTwe7QxdqroKhLXJ",
  "key5": "3VhDpkQy3EUUhExkxnfeuZ7Xu8NtRQcZXqT8R5DakZkVNXoT1L7dTpGBXeX4U8z3qz1ffczmX9LLMWHwUTYaVqeb",
  "key6": "4DGkySYbqaNdJekgckdnigRgiv3yJ9d2JD1gAsTqyqVwwnzDtA46cmdKp52dsXiEnvTbFZBpBY291AtaF25aJ6hY",
  "key7": "4f8WuuJ3iDTwieVRZE3ZkpxSnQwzSLwECERHyqjaSfsuaSDzBnj8Sd9CL4m3NLFLyVkVP95mxsehWD6nJuoZn8a6",
  "key8": "4WbRyarCRoTRuVFd9xpK7FyMD7SdoQpsKNreT2mSoTTcteUFYTLb9bjM6fRke4AyqhhZwPU3PB1Jc6srDQAPd5fH",
  "key9": "31e5bifq2o9uqjjBJiEmzJGbpmCTdJJsSuaGCi5gCTkonbpAnm9LZ8UjtBPvW2PupLTLgpNJaibnEdhJca9zAjfP",
  "key10": "3jingcD4VsZJkdKqoNKn2JcoTpzWgTjnHaJDSTquE8UDS49ot8eiRRarGDotKz38kd5JCMsp2jWgjhoWPytcGkFF",
  "key11": "5GGsL1x3YWWd7D1ZdHVuN93eh3U51d6i85MkTnnLVH5bZCuKMi15W8CjymfPRtgrXow23WLWQ5KsuNTqb1jF5GC8",
  "key12": "p2tds4yVRJajst3a5TFUJWNoYW68JhXyB1Kc6D4JdhRDauX3XMmcYWAGWBooZhGUAkQKpCVKfRx3tG86xEvx1x9",
  "key13": "3JPzxSjkAo6B4r4kepU9g9wZ2772abJrsC8Vuz3KYQYeLF6Nx2Byqegb2fUCfqoc7iiPpGeXLR65a8sFw2sSMxA4",
  "key14": "mAYWkCHDbG4fvJhVFCMLdYSHdRa458rNecPg3oJmyADDLVRysq2KZs7G34DE74THbv8SFLrLdN9y2mL4dcgGNzX",
  "key15": "5Ms1VikGebSdrNfju9dqKuCoxywaMauxQkPHUaUBDfKzySTxjNSfyeftZ46uRqZ47J5pVR6P3x2DhcfQ1Wbe2jns",
  "key16": "3wNBQSqm5gdjbJZEUKdntQ4LB3gutYacYgyXAZbaK8RoJkiNvpZk2GkeZnwNjcSoWG95VAUXRQ6v6gjkJ9f4EYF9",
  "key17": "3NVFEdYjNfpvj3YXfbefJfWDESGVM2EQK4NCcqNDFkifbSGoHTkMFPzUJDADLYoAzEJCyoZZG86h4EoVymobwknG",
  "key18": "2cayMeE2NCnDzwR6kw48a4hBX729C8wpBstVb44xmWPLregPeWc4qKsAVpn7E3ZfYhvS7R64koCxfe4weL1GjqMU",
  "key19": "5HEniCuZ7C7QXHzuqoMWGpxvTFTFKsgkErVMKuHvGCbXiiQNYxNJ9gLrB4bQvvCoxbuQYUUJ1AfoZvSx9Yi3hLCN",
  "key20": "4HSWFXwkAEFrKigu6Z7E8NNLdPsQGq4Jo8ngWkRingqzzVRR2kEUKa5qhQTU3K7SkiijTNQ46EU6vNkq74xyf1Qi",
  "key21": "2Fn3SR8fhKZzCMA9LMthPoLSWHiBw3rXks5QrfvPHkBjs2CRGYyfp2z7MVwt8WdHVVZSyhuBN5Ysysh1sTQga1Bm",
  "key22": "4QaD7styznir3FYXvMGw9U3cvRmw3nnsqBWdfcvAi9bgNkWWfxpyt2iF93ZMcZHdQioCV24yrWqCG7fX23uinGRw",
  "key23": "643ajCNXsPXYQKziXhXUbiADpHpN2TaX6bTrayS9KTNyFH8h9UfTvoNdBB95JDT8XE3Er2wJwgpNaXQkFVoJVQAv",
  "key24": "4XiRNKRnSKDARQWsktBds3pJ7doSPNb8wvZ8i3eYEL4zptVqmNBqtEp3LFNry1dPjNNHDMxkT7dXm3rMsGCreVsH",
  "key25": "uaNMdmGYrXTU4GbLgRtJHmNqHG9Ztd4qBPHvdEyuoAnYJ4jRzmoLRWZoVuZLP9UH4FKkHRbkPqkzeKuik35kMCh",
  "key26": "YuoVAsLumVcTSwdWjkVVy6JCjdzZV3DTziqYz4T3FWdv1pm9Hyi5jLYKCWu3kLWfsUDfro5PAs1ADUjUds5PJw6",
  "key27": "4WmHNJ3kp58URXL6XhXdWnZtdWbvEy7rt8JKEXk4KK1shMPVKYWiZJZHFPKA9rsqCT8NRy7Nvp7wpm77Tj6TzqJr",
  "key28": "24cqPngZPghdxfYcyuF4fTDAeFrdkwTzxpm9zQJBkJCVMfrRW3pKAadNBJyz9cg9jyAFUkGELdhyAYNnS7dR2mfy",
  "key29": "5oEA87h4kgiqNPF1JSwdg7yvo7sj8CshFhsJ4Jm4t7MuS4u3EDp3qMqoUtiBnpT2QtEFUxLfUnnTAGuMPRu57Ra4",
  "key30": "YMWqTgHLSgPjN1sNs73FZLptaMDDNrLGwwyomUFFuVAqGzhCcoKeSJXHcrHAjoKvnc5xfq4LxgLb76hFQZsLdL5",
  "key31": "2nuJ6ZroZsU5ngaAUWpKf5qi6p9r3EWLCQgoR7xy5QNfSkzkiyzFjyUo4UZdahkvuxpe9BVeZYiTCUGFB2YX1Ptn",
  "key32": "4N7rJHyU1GJSCsNpc9YqSE1eoEAXf9SYzS5B8DZVkRmzsjDmoXbye9iTxphMzhZbqMbKaWvTAuBPnrhKmnGjzAyT",
  "key33": "3FS6K43w4UmCF3X7PzjkesauBasFN6ozFoFqSkrZNLerbuZBDJFRr5C2CuCdpaEAxhWFG7kg67erY6GtwmNBFzby",
  "key34": "65g7D9iJpDrCB3CGcAPkVko9gqpmjQTxrMYH34jWXor69TTV79JmtAYspWiZfAooSuEJjkUovwL7MymCo6Mq3aHK"
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
