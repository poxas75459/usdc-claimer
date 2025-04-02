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
    "2NTfjNZPQRFXzFS1rYDh8vTUrnobyP9uNuQMJ5AJUPA7tpx3YodBiDjxQVnsB4n1erQc22bKxG6VvwE1LrbbWWeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28wPt9wCbecYFd1mnC7cPoQKJ9aJnuCBZyG28r4ULVMLE5GzC7hzkiZRWm1zQ68Gsj2MDd4bDiEVAE5SQNEbJJha",
  "key1": "43TkzpERUA6YgqJdmRu8fmPKfvns6Cm1vr24ag1HsmnSWJeaQH6J3MenWbxvA7uyGJN7G67rUPDxdx1LhcGEzFxa",
  "key2": "EUc2y1fceQ4SJ488VDRiX3rb6EAHL627u3J3e36anMvkD9YhrgNKrnvmtAcFYxp44dkG9wZZY6HdcEenBS4j6Uq",
  "key3": "2ehZzNxbSicAiDSJwn93kpMCxYzXcZPFgDuVuYSE8Aimr57X448PsAFhQkuVvKCof1X4zQrkTmkqxcH79mjDJFLE",
  "key4": "ZJ44RuV938QfnsJMPfmFtEdo2V7ucvFtrTGNuXn4YTa42QFrTuMK7GwjVFdn1kcndfbebfV4XmzEpCWxH3cX4KA",
  "key5": "5eMYhUZ8P59bmhQaohaaYUxAp6zoJAYQtf2WMq7NZE6XJ8Tk3TpcF6f5c5r1nNnvNQjqvfu4S6MKdHbnenoLUHi7",
  "key6": "dskiRuhp8cj59aWXF7ji3dwgxov3YjChQZkyhpY1Sz38GZU3urUnmmmmVh2ekELMyzXBDZ2xyq8rkDSvh8QdRvi",
  "key7": "47vNmMwUi4Ds7pk9Q8pJEDxBL7VwTowShezArgaLbSnYHEvzdnFCL5CRgmTz9Bfh4muKhJmHRN1e8BWYWJHJD6pm",
  "key8": "rsrpUBaqGjg81anU5azKxtJrs5HMFK98LdZof3KnQaEED8yCjvqF5yVTxCNRKhqxVJMUZWZmxW88oQL8UQoLhy9",
  "key9": "5L8J9uRHhsr7NvQwqfZiYKg5gPYv2LKncDWaopDxLFvqWJjqRR2ZTshNmh1HLSrQf2ra6qv624zbxU3bibtVzRao",
  "key10": "5L72hdh1dzubJCpefrrJkmz4RYVuWR6Wm5yigbsHad4p4euVExvEC9bwaPW6rSpkrhvnzPy6RSKD9rhwerRGzzY",
  "key11": "5v9ajjdgZK5NH8uTX3gZ9r2MComhzba29s6TS3FuWMDnJ5yPAsDtzpJNuMTQy2e6zwMqh1Csu6g71MtndfLVmkXp",
  "key12": "PnAUn4ctGdSKrVZ7RxyPkJgsgrWPz9i1RJ7K7RnTx11tFHj9KvdMYK9frjBMkk24KAvo7Ugb2jNZdjRFD9LPipe",
  "key13": "2Zd2hQuaMLvSo9ntAgMoP8koqHxSBKiGYKtLiJsS7sB25gJzByVnup3ggp9Cz5EF67XuLByYaYqKjxBcdepR1BgN",
  "key14": "3K9WmuVMap5ggkJdwbMqjCzUfrgF4AnYE1sqAVb2EynrY2TxnRbXtPd8myb3simKKZ9umKx85Td8nXL6dqWifJA5",
  "key15": "5BJMD5Z4UoVn6qf5CN7Xb57aKwevwqDn3LDEW9uoewoQ9yKck7zu143aa19AZm2WiSV74DcWuMxtFx9mpyGkKeBX",
  "key16": "3jTLrL8p7F1qUqBjr8M3AXmBjeXRUQyJJW44x2jHCZ7aHFEFRvUvMmWjoP5g2BQz7RExLKkq18c4s81LeYX94pkN",
  "key17": "37vNyikQWjc9fBzXjbZ4fpxnZruoBMFfCURYibeSTrKDJAwVGrMtGbjXwUxoqipnqFGKDNDMQqkVRvp2py3ntkeR",
  "key18": "3a79rtZnWrUvAUcexNiNW8c77SppqcXbjHDBAVUozpNi4pM9bjVZUr9sNYiNTcPfBdNGgh8KcpkyXwNNhB4Dn4tV",
  "key19": "rCCWok35YsAhvaegiqX9xh6nVJmQy3wE8GYFeXRYNXEZPFUQtpq8v3UWmWbhvgJvHm6an3ujYakVVfggwxAoHmq",
  "key20": "ptEPcgNrmU1n87NwCxKtnxBqpiQ2mJE8Bti7wRKsW71THwUh2LN1uvh9jSaCNxRw4Tuqdr96bgBGZrimzYyGeDM",
  "key21": "7Gah2wo6PGw6AQ3YU9LUGvuMB118yn5aKhJi2aTRJxJo6NTyDJ3KBRqqqAfd5MrGzfRk9gasPzELzBNVA9uZJMv",
  "key22": "4ofGQ3PpuzM1UBr7Dt6fQTvj9pK3KKRdevXSQT2uVoxPCYtBkCKxC464YKri1ybvpDW887vuPyCWmRC8JiLbqQNS",
  "key23": "3BR4NxDNFBTeGYNoonEbNfwez9yxgPcUC3VsJ9MGKnMC7AGNbFiBPQ7yQz8znJjjfMJJ2iJDePcxGCwC2oaP7Vzx",
  "key24": "2XnJJrNimp1iNY9QG5zA55oEsngHXKskTHuLwZPzu8S9sSxoWPyhHY1YTqKzdSDLXXZ3eXQgzTN4dtGdsMYSLrKX",
  "key25": "WkEiKiUiKcnXJndXD8SBuwhRwoyvmPFGuPpNt3A8CZJ2xReUqoQJyD7zHGtq1qPwxr5Ve7wiQ8Qod6YxvGpxwj3",
  "key26": "4SN9WbSigUn2RdEy6UCEsjSX4fdGaawbKsJDR9BCuRq5G59V3pkFPAce9bcXV7if8qSNPST9fYEAZioRCKUDPNdR",
  "key27": "4T9kCzdPNnJguLDd6xaJUCs8QCDrTQEn17sswRwqY47o6rMSot65poxTNv9fcYtwwUDKWjYmFTbNsE3dgWaydqWJ",
  "key28": "z6iNqNJ4YEkRt2cQg6S1musvm4SRVPjSsi9bcaxVSwvqse1WHkRhuSwgxAcvhRNjBG95MX1kteSWTKmZge9Wgrg",
  "key29": "554eYoPELUgbeEJHVskd59tM3UNXVcLMDS5iVEzdwX2btdeduA71T6QdPGjX7d6XAF77NS8T4TzPnXB2ctk5Fcvm",
  "key30": "5prwvvfLhaJWvVYAsJgNX5cjdY2fujYSjAUXjoiMnq2unxBNwSLvZ5dvwv8vMWR2EXm5JqRRTTyEeNfdVzYtFDdo",
  "key31": "27j1egcTkm2JkxJNhb1KJvxPzmsmWRYWQuaqf9grH7VBAV92qUGxzVFtEvRd97ovVWoC3bvWTGwPSKQ89KuDNUGN",
  "key32": "46QTqWVWPoJCv4Q8Usnc9mXSp3UaaBBRqzTneiLHCckk2Vm5x3coF1FU9nchFmHHmAvUKGJExZr9GDqePYvcUgDP",
  "key33": "51TcQo6kLfSTqJWHJCbyo5QuJMMXjPXsWgJ8tBHfySBeD8prnNmChiMjAabjSNvWiMLSmPRAcHuvQhaVCnXYpANu",
  "key34": "3fyvyZfvjAsSdRW7UjvLAy8QcfANidgBH6ypEqb3zWBW6qXeBs2eXGKr84w3QghzNRUprkZTWeS7BGfh4teghiHn",
  "key35": "5QdHSf8XUMXM6oXEq3v84f6wk8uF1QGtHtGGLteiymzvwv1A4KYfmSr5hwY8FCqfRcv6CL8fG3Rymt5QU6ABHoK6",
  "key36": "t7LfJinFCnuKaFaddYCuLuqWSLRCSREVVt2537FVzNCRGGNQvsNJpDCvV3rqPGKDKp7LsVeF9BkFNQvS87Xkhq5",
  "key37": "Mi9P7ThnfcNuzqBzFu1Cy3zUUBwcLKf2zRjVcBa8SpbUWhgLjgzcKHYXFzAcndTkXkXrzgYiZHkYRXnGD1FLBjA"
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
