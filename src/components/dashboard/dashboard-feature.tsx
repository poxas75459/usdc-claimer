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
    "3XDumT7HpqRbH1UYYU5FqmioL33hAkUTALngbq4PZrEX7QKrGsgF8aStbzgs6WfbfvRe8FQV2h87wTcMksZ8hwsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54DARVbUVc7748MX5XQQ8AJeqNyjzg7bHhqN25Cgoga3RJC8dM3n3AgvTGUtCVFRcRDZR7g6ytisyHKsMQhRVdEU",
  "key1": "5qiEDsieZdm2r7oCFyK8HtTDNMnffne7ZTuELpLZFaxuWSb5KpVkcejogLX2uK5zURt2ZYXS2MBEcT6FM2uRG4N1",
  "key2": "2awLg2sGGAQEnXNUPaEca9dcRUPz1AR7tRon5idtuMDqujsntFA8rZxCZNWAyVvieiazKXWdB3QYGWEakNRPBR8R",
  "key3": "2yMSET6wnTzwsxuH1yezdBvpFrpNUHAxTg7pgojUBUS3zmbPVHrpiVJXv2U2jEYT1oxGsL3iqLqV5zcgNmTjHh8t",
  "key4": "5vFPsMUDpdhKXT5dcWmxR8pLjw5ZXMBmNBWGayA9dwTvWv1gKhDvZnSzRC4hr7E99UH5F4izLsjoKrthu2HsY9Jr",
  "key5": "RhBvb8sBG6Egq2iCEqBrXHc8V7tJp44jrK4iFCHZHiMPNfdbD89qhoSKZyfMMvCmDdSmun19YJZTaMwNNq4y5fR",
  "key6": "5NAovPbLj332Qzp8cynCkyoMiiefbTBGw6UrY7N9vdPATLe1NbL8zVQw9AZ1r8uavbomjPdA37mQgGadbf8gWbbJ",
  "key7": "51AqQSZ4VacamdoTaRWBEbM1dHSeQoVq4ojSgEfQ1tg8kzWCXfN6W4ziSJW6uZ4rUG7JgFFtefi567MWWH4X9ybP",
  "key8": "5WKBWRgWmD87Y6WfpGyWaQntKxJGYHQVVphQKbmj3QAP3FCVCxErgej6df7VEZwK2zEQEMw4m3Lmdvsb2MZYMPfd",
  "key9": "42DCmPH1VD11H1k3bhYLMmHwAwL9w4x7jEpsrcNkL4Cis4eeG3SUVNB4zXAdYBpp8xw5KymM2RZ7WRsmA4sg98Ny",
  "key10": "3jwqVofR1dMQV7iTh2g5FqAV28ZJKjVDakaPgzRobG5M4TUSpZBnhivivC9K129RShXC5UkCnEPqeB7FrvLqtSsw",
  "key11": "4w8L2eKWdk4RHnxE6uHMy7XiiMGDqHmUn98RE8MFSUBBPTph8u6AMhMx7qLAvGcQJcCfkeByf7zo2hZFwnvcZ6t9",
  "key12": "4jpcVhdVK6TSGWN68Jux4JB8xeMkwzeKHyAPTBacVZ8umNJ1k3a5Wm3x7iccWGec6Rre9LTDoQTnFgd6vBhKxdsu",
  "key13": "4Rw8VfppvjHZHHyt3GEaQNBmCeQAcRXqs9SxKXVZrZkfXpLDqknZJgJh5sTAPs63vtSSNoZ9tKqttcR19fdUjLSF",
  "key14": "BXsjqMybA67fRfQWSRSPtzohUxqE5BfYTyAsUj2i4aSSe1LH5riWanQ2SytTn1qJ4yV8c192oBZUFqn7VQM4pzw",
  "key15": "2eha9RZ685wk9fzMDi1uFZF1awMKo334FVaYvbw4PAhyeLbxTfZQ5MRwubSbMTWiPo55G8Wbhg15tMvXkhhvaUQj",
  "key16": "kgcegwBpGWnvg58o9Grp4HgK9gaBvfLJukKDyKMREChCmZPcvYfpVr8mFEEy3mNi58rYrXRzE3542j1vEAeJUiZ",
  "key17": "3jnCZodvcVR6oUBK62tNPqUm8MGRXM2GT4xedFnfhz3wswx7moXZyy5hpT7UHvY9JnDJybQ5rhBse2DvqW68RQoj",
  "key18": "31fNHzVHcBjvH3FvsGSU5riTZgKk6Wpu3abEJZuE6KSfwhExPedhPyFahWMwnjhrnHDEeMTpBhBVzDxSgb5z1ppW",
  "key19": "4qDCTDYiyQYj623TeLMmkDYc1WnPAAC1M5xPRT9FMkZw2po5AJsHiF2ZFXBwsPN5E6pPw3Dxagg4jVhuM3hRt7Fy",
  "key20": "51cmHRARM9wQNbJgcpZqRSXEBLN6ng7qnMKTHKTYTCQYZ6UK3uYG3LeiDXCpgEuBnAZePyDiWHYKsFn5qKE4r1p4",
  "key21": "64hgFaubtBSe39VGi6AJHW17h2UEohj4ZXxEDgVw1NCppHgqyf2xZjZFVVrckXewsxBtfHcPm1RtYkfmvsg9F5fU",
  "key22": "4CN7i14iDtsUJ2KvVNHseiGwUtvE1x96QGXHYmWUxRjur1VFZi8ZpQaVCf89HRmBqhZc1u382Kwh8UoJj8EcHSsP",
  "key23": "2zDEjVmfVoNSNMvuqWxPvnrBFdfrTxvk5yboEsAoNQ5hJapYDyz3w8eBMuqUECmdweqN4ya8QqgGz7yn547d3FF3",
  "key24": "5K6AYTZXYh2skWZXneqtUm8DYFMQEcdsCaLht16RZMsJCssYj9oEeFfhpYg8TiEs7Sktwn2y4GaD5EUxok67oHqP",
  "key25": "2u4zTj7BPyFky3TCvfx8ihrV7n7KLSzuJDSJJkoTV5xBWDJDuAyzjieExJWfA38P2tXV4VvuK8ihGBaqsKKFqVcU",
  "key26": "5FWiQ8FpodtNVa96doCRX6LjpHds2v1iU31ddtEkymBAuKGnJbuwMQrcsB2FmLTzpMbzV689M5YKVCzeaZXH1ngb",
  "key27": "4h872ezQ2XMMZdk4eNGQ2wYeLQg8cmJUXTFqapc8Bh86dXRcn2qjNLBMYtPy1tdzLzMQ9zuypJjV65aDcGAqaa6X",
  "key28": "3CgT2ykncgztfBdZxtRJvBBNcSEKpowtLsFeKZWzLqYLM7iivQAz9MiqtcaCF1soeKK32eVH44XLYj5Vtmiw1sjD",
  "key29": "u1tfVqVoFbaALntipo8SSy7NTk3efUmH9oLgVvoobv9QEbth9PKNjtGhVAJHqndtJARA26DxskjhRyCocCiC5uc",
  "key30": "3P13KC5C2iwxWjyzj6i2xgDXkK2KGxkQDvX4roeXDXsaRHDGMAieLeRgrA9BXfDmnYE7V8MNAEh28DXrEuC4aXbd",
  "key31": "TPdzCJE8zcgeaJAbkdbEwscVrPWwpek3kc4MB4hgxZcPLoKxkm8TL6CzX7W4GYoL8KQXiESBJK6G97ecQhdVLdf",
  "key32": "386BETVP3Zu3MYTEba24C1SgZYs3Ryw8vHbXdjJiUvyr8WAun7VviA3kz7utxnfz1QkouGJsReoQjA63bbKVdBtc",
  "key33": "4SMYTerBAen7cAC5kbWvDMbWzPug35VvXbAUJZdPvD8BaJMveJ2mwxEssjinn6Hv8QPrWMzKGPgoxNZzNMosbtaE",
  "key34": "4vv75SotPW2YgaY7eqLhaVor4nGFQPRbE5JTE2SeokddvhqiLXrwuzCzJCJ3AiV9BgkqKxjK22qS3rJ5WRw6mDHX",
  "key35": "3otrL7vKCsmtfCmrBzKufNiCC5dpUiDYCiUzjfwD5aWmXC9R6E9e7bHudiyBdh9VNVcWB7E97fFUZVk88KgcFFow",
  "key36": "5XCN4MAmHRMf4wAWxzAG4t6yPzYR39iSQt83nFVG6AxrsZEPdQaMfZvGWZWruavAxgEFyrov3BJycCyLV6TwTnSY",
  "key37": "4oExEebigkbTSvyHj2fvpNcG9h1PDcfqNSoGQmJt5kooRRFYruLe6xRfevRscSmUX9NR6ugrhzwemmZSX1NCvD5M",
  "key38": "2VaydzbkVvh3qbED1F2n6T7L4gBAZimNXH5nBeSVq4gGrS5NVrg1T6ug8grdvW66zJJgV4a5trrJqZHQ5x1rqtmx",
  "key39": "2zhBCk8pLaTdsbWz9oELG9VAoqJxCvjWRtWLhueDDqW7Bzz9F78gizyAtir4UKbgwbetQ2g3pjFzNe4hwNj8GPDK",
  "key40": "4C3zCTsTL6mNDcNv6TcyryHC5bdJTHMPnAZLebyRiqU7ggNeuACsGkWLZtbZHKYUjUr3xJgWeak5sFQNczkWWzPu",
  "key41": "58zjGyq8Y4tyMDkSCi5r818fw1tUGBSTchqDQp4Uwan5Er3D6YFPJxj27LTbnuraDXiVx4kCmzQmyqG1QLj3xRMk",
  "key42": "HUo4gSzYXeVyWeCtZ6FkhuMogMjSj5B43ZKErsosuG4xdknDrYM9R667HPjthd3W87u6YUJG7ZyvT8X9n9HdqxG"
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
