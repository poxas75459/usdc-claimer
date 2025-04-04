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
    "2ocwnGGrhXd1U54RmUxFrufSzVz94GV7LcKvivL58MZuFpoYx94eTwy6KULsZuELM5SYTVhwdPhEPmHmQg4T9YTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39z4kGkAQrcabs9twhFnhvUJshMpjBtLmK6zhm2GVRe5zyiiAE3Wwjy4Mg26tRaqREEnzBw6yeiyyBFVgxGFSKHk",
  "key1": "VwL6RPUMpZN7HFkm76zBm2ZQEJ9LfoDwXsY18scmkvHH4RBKVkWfff8rrd3C8qiUiSKmeD4iUg7HUjANysDUYzi",
  "key2": "fNYtWrzsQSTHcN9CuurBiXtUb2r4F5xw3vJPVCJNapc3XiJ6R9DXeLcHo6zGVhWzwYLcgPQcGa27nLG7suBJTte",
  "key3": "Kh1AzsVP1pAo3xTNG1NrKgXkacX9EPRCBDZoxgVbDpUBEJRkFwgmshhRSedzHjpMK3edqt4qt89hPXDfFa38A33",
  "key4": "5GbD3gKkdqVVJUYunyTsTVVSPxMW9d8zSHoyNdaHuKmVj9eYc1ch5epMt49cyjAMtRwzhpn4tgR9KpAEAhRNpFSU",
  "key5": "3tGV9aaN2N35jpLq2M9tCLtWSfsWAtJHiBv3oKG43WpDgpVBkA1xdMSfPVg5Rjk2FqwKPUSQBSN5z12AECajBSrw",
  "key6": "4B5myb99Wo1nvCwieWyHP7YS3Rj9mBVFEDB6zo5QrXwdm6ST42fcV3XQPLfxZZ537xsV6sscD5LEfVMyRJ1Pxbof",
  "key7": "3jVHMtLhk5AtFZV1dcCRjhknWAnMGB3VYERw1v2RhmocEVsWxp9hAuBhDxfUAfV42tsfa8sVDXjo6yf1B7PTFCJ",
  "key8": "yPJs4W32KK5jcPxSeYiKBrMyzwua8J3dfN14KF6zNMaxawrxhjVvdSFWX4okxHAXc61Lu8RLd9pZQuG3jW5S2tv",
  "key9": "2sDutnKHNBZSboD712AhdTnUzFHbXM4gPcwiyUS8ipD5Q7xXWqJdeDTYpyfhxm9m4eTNercQc693iaFxwNL3gGbv",
  "key10": "249XwwyyZs8GrkVYcAuyKavgTaT69qR99Ek43AfsFRqSgyBjujGMbFAMK16qst8W5ePjYaKpJi4hTc6Ec5JQk7Xd",
  "key11": "NBqVwxje1aegoWahREo53Eja9of7cGnos3zmfZsP9MyeHNLhrMpqHXJCeZbdWexF1EL72yX3wmiyQPtQim23RZQ",
  "key12": "3ESYRgxYQzuPFSW24podwNf67cHhdNNbfAL9GzSHzAWKYHz3aH4kQmRFrp6FzpsdPmCQUV8swk9me1jS2FHo5czp",
  "key13": "64h2gG76heyZqzWgeeLU47jPD675PKgXKfUkwTUAjATXBdToWGBf3Bc6P7P88HGxkfgF3ueC3KmtFXE1g1xopQ5q",
  "key14": "5QKxDBgenAiWz7Gwm1xz6uX4UNRmKe1HAHSUr4CRewuZuW4rqapoQArZNdE5jpuQEUcczbHXYhb1ZKCgXtaqfGU7",
  "key15": "2kgokA5gWqGb7Wq5kGoQV8udNssyGGquTyvnbN1BgAEj1xo5GrGZzro2CpYeb59USBv2Ehn3BnRvQALWfmafaaG8",
  "key16": "sgEyLu1aXsd3HMQSbt7EnbuySLSV8YHJZu3H2Tq8LcRY3swZfu13hLKKVFChg1BmLdZRs2oLU8ZFbSnbriGEDuh",
  "key17": "Sukko7HLQRPgENebnZKxb1jgeTGn6scktz3Ai7qh2sBL1uFKnCp7jmMWiXCSUfpFH3y8bvgazapdGzKYdrQ4dyA",
  "key18": "661oK9mrKCu94FKZtes9Knhk3VN5HMzz7Gcm2sZAxjmgJ5eQ12YQy2KejuV2sZ5NYVBhmVjpQmbsjYUTvKMGQebe",
  "key19": "kB6T1RTAzxbPxbbHBPtaJ84J1nthmdiKcGD7FumRkgEeo77TdHmG8VuK1A8dg5iZ8vEvtnntB8QmiLuBc8jYPCX",
  "key20": "2QMGpPtVqpU7EisGoFxjMEweUkzVwxBs4KHQmzpd5hbkTTDs8dn9V8XC3GNRe4MxxdzxJyKubTdTzN2A1KXmWiJa",
  "key21": "2muyByUuY9CqEvm56K3FZvMaXR8oRyjqC6ohFv4Pdzr2Wp9WgMQSAJQpDcfbZptnPraDA1MakrXVBXPp1cYcmmGh",
  "key22": "55iWYR87rCa2EBacnQ3tfJ9hT6aDpgJGqEjVon5jcWLQgsrXnEubMBAoFzq4chbrnUrEa7eA5tnv1niFFHa6JkPP",
  "key23": "5ijFUtgSQv6Rx3wdvzfNk3KaB5CxJks9WSVpxoxe53EjW3NLM9RnucT2KM9xoN2mKmgzcjsTPX8nrCm4Sr7o7Y24",
  "key24": "3a6QYMpxvvk7hi6fjAucUZV2v9DsPGVJF2Wdeibo5P7kcqYBHnenQGQjSYgE3nWPoFjyunhWiQYhXSGUtaTU3xoy",
  "key25": "2u21nZsaVPkv9qG5WYSUn636j6Jsg9FHLbWYyDRMsTGc4EH7iPcNQuQedaQa3njHuzssNMJse2yMCNp2MFQ8fkdC",
  "key26": "k3vvpfJjLNbKLAc2yuHLwTG4dy8zrfnGGr4tQrRqi1bVkxv99V5jUz1PtWrtviSiRqZfHUecSGpymTz3sLqvBQq",
  "key27": "stfr7dHPQFEyq5x7PLuXKwwB1UvTzoAdXWKNxUfdwRLSPXhmLheMT4pwRmqVKRixX3xLrTbNgkuPxW5BFKyXCKj",
  "key28": "kw4JTQzoMbsB1Gt3cGcRwNmaX51pjLj1Phq2smG6PKEzZgvwFPYJbnnC6x3zQN2KYSFA1dsrXyJ9Qg5nbHrQ8bV",
  "key29": "39sVrtbAdEASmKx1QQXWKoFmpzL681vHCbCMokTtXqawRMHuNuu2eLGERL9DCa9Y6n4TsaJP6TTjDu6Zk7p88XJw",
  "key30": "3gh36neeniNaz5oxdxC7LMpdPDbW8oUK5KZWwQTimYbnwygntR4jGG27p2iV6QYZQKUCYHDnXXXeBCZYScwsaMjf",
  "key31": "4JiurHnT1UW4M7teNsMaLEXseFFK65kYnJpRXMdkaDeF5pKnP8uws7B41162UhGC6NpKqcnWNJ2dQZ5kgYXd9xtj",
  "key32": "SA7SW5KnwhDwNTFYmR4GiUuX6Fwpq9SBfsrKtC4LfNCj1N8ghxeUGBjqmg7MMFeBWt1q7TCjcUkDi9igVPE595W",
  "key33": "5QXA9s3fkfoaSWjZZGLw3u9RBNpyn49G25rM5Drbz7aQYVJMyVicpnX6tdJ6xFwq3RN7ZgCMicaFAUrGzF57F875",
  "key34": "2LGQhGboCKrf1C7phg3MEYsQWTFSS5XVDk1N9ouHK6p1b8c4gS2Pj29eZeAzeC7ngk7cdDMrfaUL36BRXCKVjWan",
  "key35": "Fq5cjwGZT1afy9kguxkakH88k5Az5B3TFDL9KhSC5KKKrg1s7C5i1jPgdsyPboWffzh9AtXDPPeL4DGGA3fgjNR",
  "key36": "2Byr42TQK55tQ65MHpkjARNu44RkDaX7KMKpVUWrF6tWgxpiFmWeHVvhPqFDnYEUELjt7iQY1ncnsg7cURworxav",
  "key37": "5EDLFV12Kww97hvETsWSJewKaCx5okTzkc2BBu74DMn2myTegHWhNxjrmSXAF7P8nH1DwVZh3k2aAkvm93c8Hxx5",
  "key38": "UUxGL826DaTqJTboQUKVraKa6gCX5oXnR3tjMQDqEJPb8HpQcroVEJMhnUDsD8XhnX5aC73CgfKnjREx6vNqBLL",
  "key39": "5VUFgaPJnS5k1we4ooPHHPNCQbuQy2M1rnCmqd3P1fRw77mvE72Ss1iGRxsi6J3LYhEVLQ1bPwXWp43q2BnaZyro"
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
