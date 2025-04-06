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
    "2fKs7nzPpUaadVkHmUKpEdc63a5XmsqTm7m69xeE1udCxGKUoQiPmkQTaEf2weBTZ3g4reSnWmAePPrL6baBNMtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJX9ANA9gyqpcSt7q5jX2TadqfcAmYHrP8BhBx1prFBAZAQag2nMJMiqCMmEiUFqfVTdZzg8JDYRR2gkZvyhkLn",
  "key1": "3paL3ouHcF4gMhBNvojesRsCCjo4Z82ypcwTi7HG9qaHBLLFCF9GW4MxDjZmZYw5YntnW54ccHdfsDqActF7aUr3",
  "key2": "tmyjy7UEnT1Y5oZExCnLQW4YFzcSjZkfyuwabPNjprXVwybjGRG9A3swBFQa7pJ5cEUjYV7TYa33Fd97oGijWHC",
  "key3": "5JxqRh2xt8nD4yGYi1Jz2WKXoZJTRDPvDmFqw4aaBPahqKeqvNSm2h3kToViZWQRUnDgZMAyWeTbqVnoHN2yeBw7",
  "key4": "5XRBuVE4ExR4Vf6FLcNk6PiKRwbaGspqjA77WS6pxGP9WwDqKVFXPMv7jN5DQB6Rrmvp1HNhFqMS9r1635cH9t9E",
  "key5": "63WmwQjyGStaJMpZMZn4wqR9rUdWQ33oQYFt8urSkzZNY3gobt7kQ3BuVBe5UFyJTih613DnbLz7bKNRQRXZhkvp",
  "key6": "62xquZxBFQPjJJ8a47SbD8HC3nnyFRpXERNo1RAqthDjS6iU27k55iqiQVcY7MtWd67a7V37YF7pajCVGw1m2c9F",
  "key7": "3FAqCANemqpHtPUy9uvtv8iLLW2cgr39TtogrkzwLKfJmE5VHCqs4oP8dXKXWwPQ6C5w25zbbD1qYDQF45Uuworx",
  "key8": "3gLispThz9uyrFavW9bu85YuwkY3YUxEVPVkcT8MNQVuRdCS6z9agE1zhiQDv9CGDD3ynE2jhrV4aet7wnEXtbcA",
  "key9": "3svjBHvWDoLMcbVbQNv4fVGbpkrLLcBfzdVm6B9r339Ah9XqWSKVovcHRMV7iM5ZZwERMFGiZaxsYv5DTQT9LcmU",
  "key10": "eK6PaWahUx5jtDckNqcHmG1upS39vwSgANj9aZUS8iFNsVDpdikSTPjfPCPexsDAP7fSnkS2LFpTqACyqt4G8R9",
  "key11": "8vUALJt3WB89wmtLqzYJwPYFmRkfZXM1dujiDAwmH5dBEbhozKTt9DXepVv7BcMUkJefL4WSZn2YbDi13szPPeb",
  "key12": "3Xf7KF1anwBjZMrJLZaBUnmAwXyEASi5okYxJPeVSZJ5wM1vcmVkGPf2PYTyrG7mcDZGGrGQMXbPRwDRda5QRtnd",
  "key13": "4LS6htPLkjKMZqDWYzcQaGQbJvZsbxfM69aeYvwELFxbpcN54CAdLUrd3q4hMvPsrcqH4v5o6XigfqfKzjF6rcmv",
  "key14": "5tNkipwh2v9RhWe4FEr7pdQAWhRaWrjfdoEJWhULAuJYeRM7X89GhVniVdGYiikD1uzeTuNpWPDczoZA56sKcukF",
  "key15": "N9HAAjqu5pc284KB81m6xbHXP1yQPibdSLyp5amcoQmkpETQcwVGHpC7YjnDCPxrSx1SinmrwMPhhccziXDZwSw",
  "key16": "5a2KJebLP31fzRaK2KHMuyy8prvPcTp5UUn6cHYFhuafTLxvWakyrHZvrSRjUePDWwxkL8Yp2dpgn9haBD9FP64o",
  "key17": "po3cMtvstzm1S38TiCiZ7NQ2NYbCdV9A8ZogihaANajoAp2rrv2kENAWSEurs2LR7Zd2KMvdU3LbGTSZ7HJD8Ub",
  "key18": "2bDZnv21d54nyiqm7cUSstWd9ToZ2xejma5psD6uJLaz3NzmZDXoeELTPkyjb22pYKZoh1ALFYQSQfbSKQjoerFJ",
  "key19": "SFFqMXCRCVb6nNaZoMD7PX7GnqmrGHQTqLHtX9oM5izCJtN3o4sQ21y9PqZqB27pi5j5EW1BZgRZTfxfwuNb5dJ",
  "key20": "5AMm2rowUCiEvsRQwaW2sWS2CAPAaqJ9EvB9bxfxBpWw2e1q9Au12rjPnfPvandbgUGNVKFR2uoZ1bPZvjEXthPy",
  "key21": "9aByifdbVRb6k3f1sGWuKk3cq4HeucwPRgURerjTPcPKXJS4atYVWz3u2BbR2X4rJ9mRtUkaAk3L2rMQvPCazk1",
  "key22": "4Vda8vF3UkAmqyCFfUk95RFLK4CsLKSSPeDA35Dq2KP4VwZ14hw79RAEibXi7bACz4VMbBcwPmVREVrGah1mBxdX",
  "key23": "jk3dzjYQsstCXjQAgNBC9oJKAoj1GdDCXPvdrgHtLkvVLrH85KbnGbWNBfMVZ2mM8GG6vfVbHFjg7fmr2TWREP1",
  "key24": "ioKDqiPdqg3GHyrTjHJ8mJk9SNRsb4q9aMqqGAQ5byWLSi64CSSG7dz3EY2TFpwwCfwnGtQLwGrtKze9W1VwxzX",
  "key25": "4dMFf9xqtq2ZMd9YgkRmNLuHDcvTH3zJVCw95EAhSDJmWxk3Dcy1yhujsJRpuqQJxLZbvoiJVMhcChTJ8qX2tsL4",
  "key26": "5uC4Wk9iCzjP9K2SDje4RybtBzupzPCt78orkTAE4xiFxPXVaTBe4Qwm4Ws3GtvhJaf5b1HNpt8mXgj9BSL5Hv8j",
  "key27": "TdnsDKVxqi84LCGhqeFsUCzxkgn2QBMxCCSJqpTB5NuT93HUgqpkHTXHAcqke9Q9pLgGnpZBYdbPHRs727tMW95",
  "key28": "dZ3sSPjYVQJ82pFveM8qBLfmGwkFa2L4KuFyKT4rkpTges4rvDiz5ZKnnYuZpMe9fHPsME7bc6sNTLQ33vERTki",
  "key29": "2cT4cMaTKscfQgts3cYZGo3h8Me6jQ3GQU227KbMBQAWFnHFBPqJPbtsHPCBzHqxh7xihJwkgQz8tKDFh7jP2vkB",
  "key30": "45yEj19PDR3oVPme3G6VE5yYu9E3NpDnFFb4gbvnLA6jghJFoBKqpguG4JF6vGvEVpeZvNubD6KLsHZY71pdUtvQ",
  "key31": "3Mn5awbMY8NCiDP5yFmUD7j4hc6tcrZJNj55psy2sajYXCuPHZB6sbrzLbbXyKUPAy2Rapktuqp47K9RnMEMZrpC",
  "key32": "5DyqzXWaPsPWdqey5T8bSKWqet29pkKVmreHFSefwAABzGtwpr41Ti7qfLJwiD664GJiossQ76Z3As6NY3EkD81f",
  "key33": "5Zpz5sD4bVr2hw2yidoVc6fBgxvexDL7zjfKozVnYA2maytxq6pk51iqfZ9ipyX13nQLYwvsU4SjgvJCdFCci2VB",
  "key34": "3zqrtfj16Nn5nYrNoX4M4FGgi2NzrwsJejpF6EZ29LY1JkoRR4RZExVnbdgx9vuHCWsozKgtEgS2yjTb9hsMBNwT",
  "key35": "3rX8YvSwLuBjAPgq9tmXFJiaHmHdZCKWybWeWGZKCobQhwGeFs1ewuRiC1gktXz1bfg3STevwpeDGaYkfFrQ6dFv",
  "key36": "4NzJRswBV2NVHXFoWeVW712hNDpGNTJ1c4be5DcDJChZMuiFN3TzU4TG6D7NjuQ1Jp8fqZMHWNwuiYbudLVkX56j",
  "key37": "4Gi37PSdwn7dn5xWJyPuHjuCYP9Hjyw6wPyNSBoLGuXQm1dB1AqsynB4CuE2Mo1n4ZqaTUYgVEb6rcDvLBjRQ1xy",
  "key38": "3eRKNNNR9zQE4qcbNrZL8nEwj546AafMy4JLPrZgzFLp3LcpraBhb1ykNcgyW5NsYgMrfvx3ePJDPoXAeNYczfL8"
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
