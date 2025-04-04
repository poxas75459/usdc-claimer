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
    "4iCAG3QPczWk3qxMTd3FvNvpdVCVV4uhQ7FGGw3n74hDXPLamDD1Lt7gU4xjRCC5jfhpPbdbhDMMVPTfbYVSAUPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tXTzeoLz8V3DfXTPbuoGxWCPaA6Q5HmEEK7FJ4MdDmr6Cbi55VFWnXCKFAya1g16uciKBj1KC9B3dbLVgr9j2Qk",
  "key1": "5eFLTGWKEYGrNDq3iMP1Eoxj947fnpRmwALigvfAJAxAT1vKdMf1xmeFwr75ubNnC9ogGLGPDQxcdjzJyo3cLgQe",
  "key2": "4ck1Q6dD4pMTBd5FZmMiLkbNq9PbqNa5kxK8zka62spVHppWhYyx1UV5jUgCKwr2jCz77JkwZrw1VnwuNU6WrrVE",
  "key3": "35gPg1eZ1ZHfD2k47r5ANQ5X5crPwfUfpcrp3TmD5xTqNhuEgEm5aT6RnjLMxS7xm9aNR61CtCVB9Bdn4USyRbio",
  "key4": "53zXji4Kra7FtDdH7BXgYMZmE5RPztAxC5ucEhFGaPbZj1QA4Jcxx2vejgLZuahmsShKENAmiPjgcj5yBSqDifXf",
  "key5": "35ZYostnfncUa9txGjZyF1jFLF6P7zrZaRPEkZr33gA6rEoLDMTpCR776pyzdLjZF5upDjUaAJCS954EXNYucqky",
  "key6": "5UBpE7U9Hbm3V4Jfj3eXnzhxNnnUGgNsQNFoeYCeKP351zbH1ZmUCVDKuTK1MiCC5utoXDwTMcb6uLwSvcB1LJwY",
  "key7": "EfdcSJQXQUV5jGH41SKjeEgj6fzCvPWn4chkjgKxYi9PGDEi5yWERUV5ikSnFH3KtdQ64J2CX5AvkFR1kensHYS",
  "key8": "5TpjmPxFVVGe3DUWUpQpVyphXm3XPTnRQReBfgHUFvRexqWo6DB7bg7G8YvcvwhS4hkQpS7r1ncRd1GjzgwhKqFH",
  "key9": "29kYeCQUVDWi5MYsgaePKoZT6d1AvCEqmg1n8rWMJdrBRZFJajPoyMnycQSWMqdmv2sQTgHYt3G6u4XgGmHJiHSu",
  "key10": "2qEDPqSg6oo8ep39FwaQrhMgi558ys6tJVgwYWorxjxJJAToGfMHMDSHzKG8mz2nRxQ4746MHcvbnffxG3zLN1zm",
  "key11": "3o4b8ZmfGhpmKkEf3R3Esu9cBiBbcRLVFtVLPBN7tvcgbf4bqk1o9YhAKiQuxMfptzt7Woe7GBGBehKnzyJo5w3Z",
  "key12": "5og3TMoV513iYqhEuC9dt2CDAD6o8P9mMMRUkw1vVweJuU7k8vJuofpMEorxsm9B5E8K4H1PYRYTTH84oXiYQ1Ly",
  "key13": "2vXG4UfwXaZqFH7hLQUeHcarxBzwzWtSRPL7havFf9Zo3FFe36XFapRAc3KEtv86n2Vee4tUAV2zZiQmt9tG2fqr",
  "key14": "2CT9Q1fkVJquKGPpX2nho4XRnWQcjGursnCAzZC7VGpNcBLEtk1xNaPGbL8tcogKtHm51D9HN3gQri8hWJ8d3ipz",
  "key15": "5J2F9Nu9bj6TunnLHg6zQ73XFB5DuRX8b7mXZMALynJWgZbBvPK55P9MdygxwkWbGezwjDDTvENHJamNrv71X2T1",
  "key16": "Qugt31YbhMba28KWnDQ7v4KCFQV6zK8DAszfKPepB7LagWZKHcXza88kcd8JwjPhc4G6wts7anngeZjunx9PENf",
  "key17": "4K8n2SFpm3WZ2vbNJRHKAbUh1HaYNRMyvDKomEzJphLcPTTSMC1rnj2JtxdcAhZ2TuKPdCjkA2N64RyFSMrd7rnW",
  "key18": "2uZcso5PZ5MLivA6Rqk56kBroAnxAYxUufEuMTZNj6bMZX5GehSmpctnNiL2hrQLAwd1WenDvwf7xAjqnKfKLqDW",
  "key19": "37T8aGbRm8Cypc9eLEjLsxLW3bPyHfr26DNiZvp128pcHPQXTwByGh5UNf3Cx9dP4zA5VHhkTzcqRCkMp8CetxV",
  "key20": "41HY8GyVaUEpk5D7Kf1yDymvAHtpqZkWQ2d26ihJ5sbGmM2YyupyM1Yo9KRYxJR5CvT7GZhArDRGtk9TwwEVTtkL",
  "key21": "5Mxhg7XG3tBpggGhayhg4onsTNc3oAGXZMfGYcpMafYHHkMWq7K6CCUwQqnHNzKaKFYpUKrzrGDLbPXJh9Nh3B44",
  "key22": "5AKB7w71ZVmYrwbqy2fNwPbMYg6PmyxZMY9Qug9JzSWfjoHW12eXBsReH1UJkxAggMWxaWVoysAqQbsX3Tajs2Nc",
  "key23": "4xoWGGyg6ZYxC576qQKzxsfK7QVWUVJiE5GUVxZoHEqPMC1GvoSWnJNZM1scJkmu1wQS31vfCgZLAQPLQUw7RiWi",
  "key24": "4KRCyyEE7UtqLJq6st46kDh8RHFpwquPg64EPVrWB8eDA7smG5jBbRUdKrRfpKrYN6qSDUEYCCvVqu4Pe63QLDos",
  "key25": "3JKZ7oTEwCuHbv5nprJ7vsyFEL5Ksa7MvdLprYkkWzmy438ysXh9Kg78giYvsNHEJcJvB2Cz7gEW5KY3zP5nHwH6",
  "key26": "5vXBAosE4Uq28Ju9yubj7etHMMRk5u5pXyG9EXtRDsGKzCiN76y4hPVHWnpNoCr28gyQCN9bKFYEUkPBmiod7hyE",
  "key27": "2iq4qinK8h4zAUd1KL6UepHwpEaVBg9EcngiiPGHVhF2r7RcMsvXiUBjrinCAcdEFcdH5CsVho4YEZmrsYofeuVz",
  "key28": "37YRve8wKz8Fin4XHRMJgTbQFfFnfPEs4eaEP5Qdbr2CJop826UvRejCK1nnA9hS6bwZ5CNaUxx58eojCZzikXym",
  "key29": "DXsVqbuKPPhJTUGF6YBF9h8Hm3n2E6KTkQG7xYgNgDRiQ9AR5qb6ryd6gDyDnSrZKn7Uip1Qrkm46dvLRnQneyP",
  "key30": "3zLiSNaNVNUeV2CAc3hvxraYxxEaEGM7YgiZTDvtqdXok4H7qZFyFfMvzcRSZNfDQxPYJHwNwQNBGLbKhoLhjtwe",
  "key31": "2Nb3qo17MuvUQ2qSQgC3RhppwNGCVRacT7JYbVVrRmbBB87VaBENdw66y9URK6F4J9kc2KLBH6kNuEdVpB4Ai5Rt",
  "key32": "5BsyAZVdjd2PWXBYx9FXzHNxrtbkrh8iS7x1VZSVUNiVquoCp5ncCLLLV1VXvGro7yfk18y3pNppLdr9cN8Gt1CV",
  "key33": "4vSQ4B98PPGHoh21xwyWU8HQJf8gnDayiePS3ykBZcjJ7WX8nxiMUQwdt6A3ogS85s3KKznMvNvYMXJ44uPv8kDf",
  "key34": "5NHEvWic3ng6xnP4MVo1Q2V9Ffgca62dsXQGQ1Mj5xAJBdeZSE9VMsC56vApaDsnZ2RqHDpuRdFTmU9zwz2uZgWf",
  "key35": "4gPdFtHWtebuB58jBKGYU31eRjGWTtDYHdsy8DG4pPwu5hhvs9SVBPUK1tLe4PgGHvxTFZBRbtK5Rqv51a2yQkA1",
  "key36": "3qWg9jT1wWoyfNNinjDE9soujnmydVWYHVf195NGaM524zsLk9FqfQorjBxjDJseciGcojTAmSbohkDdTZrq9JKz",
  "key37": "32hfnBRqrEaemA9ppoHUXYnBpfAq4wKmZPcjjBzjvz6fTDQ1Z48iRCULAgrszC7Vo2ccR9SY3vaaGYKciZcfkzai",
  "key38": "3ZTHmNE3uaKKCWfSQbPHzWsB8wvpf7tBYaP1nun3xHb4KLVFFcfscmBwSzy1LuUYtXTt7BahWSZgiGdYwKtVKdG9",
  "key39": "4h4fi8m3jGkbKiqC7VGXJSpHbPxpbX2xyQC3PVZVyAbDgxqoTmZG5WshT73Wf2JcfSGkQUYge6Tgo2jSSPEcMi4Z",
  "key40": "3Pk66GSPdTFpE9Q8tBsNN7hUtbXixUpULrpnDqmitxHXkntxhtt5HQGpXcFFZN9PjgJvZzTFyGRf91cN8c6pCHmA",
  "key41": "5JFYf8bDy12DcLFB8kFuYLbAqve7uiYmUSFoZvfi7Xf3z2xBf4tmygJ6ivNBpPL22v5VMox5kBbezSM1KvraXNFg"
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
