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
    "2BGZR4kC3UvJ7ZWA6TuA1GioakTEDsThkfahSsp7mSzRpEzx1jynsXVLQsc34xyfKqnM6rm7hEibecdHZJkVmjrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63pXbpzY5TrwprKJ7srcR4cmaeknTHCNrM1KbkCXdDA2MgQvkZEiztugC1YDnpwAhvXwK6XDbfMrzwY38BJqAGZD",
  "key1": "37STk37RdA2AdfLTenSeqs5dAfSTbGJCGsJVWuRnmnW2UhC4ZUJMbiDcK3Rdv5nph3qqo7HLMjewYMGQLEGeufop",
  "key2": "61kppVbcHXjcp2W1qhDQjSReZzNsm2jykG76ADbC8vpozuZxqTaiTG9vBob5LcBX9xXdcMGgXY7CzXULgMT9y1rh",
  "key3": "2HcNjooxKoSe6QXtYr2ReJTFMTvXeL2eXXL9MGfAxwfBdL6QR3d2zfncZSLabsTyUdcFkD6ARTT6gjkz2t9Y2iXM",
  "key4": "5yozG7LDfwWaecR86cQNt76K8MadtAzMVw8dbsgBhgE1ia2e188jS38nccDghWPemUcKmJ6tBA5hZ2kC75XiriSy",
  "key5": "2hoqaYYvuSLjrBMHbB8ZGg9nxEhB3udZMXR9dU4e41AW9QyyKcguWZB2JGWaqqFNAcBMTQdDr9Z5s3eMthZMng1D",
  "key6": "3VDe7uBc8T46HZbGB1JyofkiaZC1g7PiqWmpoz4dy3s8BwS6tbNWcJ8NawCYBdRQzfhqmBr8jykSZnzaqEcj3FQZ",
  "key7": "dunGT5WU5rH59PD6sFiB4SnatdxCA2bCJwoi35DXk6hB5NTErpHMH8Ed5fb2Mi3rFhEyNMW4bBU9sePfhq5KMTQ",
  "key8": "2EuAP9HssB7hPfuaRfan3V4Eo5skYZ8fGQQzuiewXvzbxAmxyWW1HMr9wUu53nHqcbf73YD17bFgGQr1TU7CxsFH",
  "key9": "A9NP5RgJbD99EtStHkHFe8kuX62AN92w6nm9FHF4ECsufHbqrtJqAzib2xXwzeFDXU9mgfRCMa1zxoadtbXHCpN",
  "key10": "3r3kNHwQVqTt9GEHC5R1aNykEx5FYsHNco8YAjxUiSTcJTbaUMEtuQdya8c1QALBP2z2wBL8gM6kJRz3sPQcEQJp",
  "key11": "senwXUXHR2B8iTWrYgVCmEXFQBcWSfUoxyoTAxyaMFfxrnixMcm6gcN17YqXVB5U2xeF3inDFi7yeKATYndvJdt",
  "key12": "4EXmZ8EGqnqse1CtZjZnbJmcCy6d8a1BvdiEGxGPFMn2H5vmDbytzfEPTRCE4SsHbpKcamNMuZnGCnAyrVogjUyu",
  "key13": "4xysAMHnwiP5mwvNBoWuuAzWGHJ3wdU8bTvzWagaxJcqk3WbHUad3YKjXZyjoUmS1D59Tucs5rxCn8TnPvaydJuW",
  "key14": "2vLTjD6DyD9YFngR5mqhvEdtcJeccPit1cECsCVbxpvtj21GFC1Lviw9h4onYPVrPs5jGFtxY84Jx6M3Da1vVMQ",
  "key15": "3rtnS7oAKNxjnXzZExmJdfZy6xq2dg8kZvD9n4P49AKQh3wLFkuK8svNU9KvMBdfLJDwJpbMHRwut33Napn9tUJf",
  "key16": "3ZyasvwnQFqarwYQ9Fhe4ukPAjrfGUFKqusS8buzMr76wu9mQJv8Wiv3mv4TDEcuBmC2n3YCSkNBFGXtpE13esZ8",
  "key17": "4tAHxHv5xLxo6dJ36k1Ugc37D9y1jeEMHRcqv1N9BvX6YupEWddEKHBHhexAeskECtc7HTBKdUQnvaAqoNSaMmUE",
  "key18": "4PT7utaR2YmchGvGZCW27F2Le6iaw3FKazSwsGmdizc4SmVJXqefg2NY5RkkAbZSfmAAWVahpH1U7RVdmUoKUoJA",
  "key19": "5Qu8hzp2tsE2VQ8Zu75QsSi1crfdj8RJ7ajV7gXbDxTbVBzzeWFKiwLPxYuiuBrRE8EwVHZoH7UBqRHU8f7CcC5D",
  "key20": "3dbAHgoWoemTBVV29cxPHyT69sHVLn8YsSPAsDfbD3KaLvEG1TNSwriAVH1F48erjP9G8JcsAkozvNkCd5LK64PB",
  "key21": "3gx7FbmiHupVFN1aFVVoC85EGG7bwkQkWn5EPZMxHfLEBZkkfBEbRKUF1R5NJY2JHxRC5fLtNS1HMiqpKDNowCMt",
  "key22": "5JSuqkccaGDEmeFGTnEh7g3QHTjQ8cKbhuSJbsJuah2HQckC8Yx797G1t2iga7BZG5TqCeDE1bSzQeVrfQvyyvaH",
  "key23": "43S8oxBx8R29nX4A67ZDPvVHdRtJMpts1ZLRiNwjtjZbKAJbjNvK8ASheAHxFcixQUgCz4FwCQUzDzTn4jfGWKiS",
  "key24": "4ucVzrARYQtfWjkWmjpn9j3ADmJNJVi6bRKYkq4JgqB5moPsQ4DHovxdo33frzNV5X6CZLnEWAS239BdPCnNNrZ",
  "key25": "49EEHbRykwmvqAnJYZXbt3jq8HErCEL6HrvXKgcXyqBababK9ZFMgQg5KBUzwRfe7oaLTh34H5NCgT2bh1NssSzx",
  "key26": "2DZ18HhfCeiHVWrShnkQQaGMzfpV5sFf4JDBZLPu5FnssMHxetY9S52PBvaxXYev1R4LFW5cEiYhqafk4jgyXavc",
  "key27": "52TwYBkK8Jrwg8QTbg82UA9cQx81TYgNiPyCfiYKmbsxNg3rE8BvMqjdX7Gga8gRjjEawd6WtgcLN75tkrBfaQuw",
  "key28": "2hbxZjor4S8gHfLdyFh4HxeTkbVWPHLn6qSYCPNJJGNhDgnU17EvtLyqEtByYdbp1ep4vEN3kkdW2joguXRQTT4M",
  "key29": "57weicCphpdbwRau7tQTfnoajYbXf8dZ9nVHR9wqV8XQuaevHeq3tS2s5pPr3cnL6XeJHrXbgehjcMAwE12UTbEU",
  "key30": "MCUwMSJ6cC4eF1s7PZ7Pbes1WVPQdURrUWgjqPqJKRg3RT7ZkdmWa6gQbyvRRtzqQP5dqzXqXhrnFhMxdc2T97e",
  "key31": "581h3vhfq7CW183HBPFqGjoELfhTjaUEneTqLFmwsQVw3x3EtdZ7PXqsSBJWLkC3rB1wkNY6it4i1hr7aHzH7u3i",
  "key32": "2idgCfmAqqibuA1nWEhsxyKA2mS38PjpdxJzsaVmTKkKBUnxZytKSih88SUmQt5KzymP7goFgiWiQ6LuEvsPAnJT",
  "key33": "Y45d1oR5FVewDrwc862J2V8wWf687aXxMHJZN62rg3Cete9Edw8V3zaaEd8UpecoVDNYBfGQ7UyurpwbjvVtxL8",
  "key34": "4xfmwXq8MkERzoERzrbfsdbNLnSJhgxLvWcChHhNhgt8ts8S8AdWkVHyNUbzUh2bssFqey8YTdykq2FTrbkvASb7",
  "key35": "2S1J7NZcaCvLVYzctNPWMMAN2RNvkKt1pRYHWzq6CBssj9xWC2oJgBti91dkW44KNx8wPUHn4WoZGmDyjCzg9n6X",
  "key36": "2qtVkNKLuEqzJCLnKufJha5PP2gFW4UXH7s8Y1m3PzZ856yZqFUYBSTx2U61Xsh77eY9AJTXqqw6ikRXrSp2KBTK",
  "key37": "3bQEoAUUQt3xUpxxdr7Rf1BE9xftASYVn1wv657mACMHWCWAqXvQmmf28MQCasX7XSBzGC8cCkEfCF8DzgyJvRsi"
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
