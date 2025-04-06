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
    "2nQ5iFKo56TQEdqaHacDzGEpNvw79JkDpoUMdJDiAbzwmWxQdHHpJJ42aBcGh7oHbqnaCdyDuMXZ1HoxJkNhuiV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xKHV9qcpaDQdNDD3NHBtW2yKeiTjMvqam7ew2ia8TZxJN9nMbGPit5Nmk6F8H6CeHLXoRgfmCgxk1sbQvJ7pBSe",
  "key1": "3LvkBkHWoBzNoy1eT7BYLKJ881j8uJ94CHrjnAiZuXJqHqkPArJ57hQnasqbHcmpfYEkiHST4xo6JiZ8E7TxnHNE",
  "key2": "4qrE1HUXyFAzDM4d5uWqe8UcezP1Eje7GWReHJGYVGDU4RacNB4tXn7BHTYGA35FkQHxZEDSkiC2kQweVTmzzVzT",
  "key3": "2TBf7xeojgo36omsrqQtH98C6xWXLYQqj3WYekQVeubPNca6DFPtExtEF8B4Xrg5c1gC7QCULK9uKdxfX16yPgEo",
  "key4": "59TJA9pVMX8g9T2qz8EW3L9QoxWW4mMRnHaXhSGpmUUJ34zHZDppxMQr9s7hntwDDLX1EnrufcUPpmVrLaSxCvrR",
  "key5": "2VU2cUzx3X7XAzd1EGyRJYbhm5TjomsEHymkk7F6KYcX22bNb3k6RbhftsVwP7gH4JA3Ys3Q7kPHTJAKMVvHSDz5",
  "key6": "3BsR7wuZakYmtwnirz9FTuiTzAFT8njippvf9CFgU4oiz7suBrWeWtcbHaF56N9sEtNmCBMdMMVUsNPT7eqyxhtP",
  "key7": "3MLU9taQpyRgPoWTb6DdotBYqZRyj3qNY7LXnjoGEXKnSgNrPcyWvb2CeZZ4em23NskWDTPePt3pSPd2bXHpkoc9",
  "key8": "z8n4YcV82vtLCusnLtHZ5PJj3D46sA7pVTujgbfyzfDaETKbAufyFjhN38WAcQoYgSdpY3xMeoh9XCtPqisXwXu",
  "key9": "5SitZPz7fmJWqrcobXGXqRrcaGftnL81CiU1sFwFiwSgGVuzVef1hKEJnRmtF3mxQ9T9DhB3Dpd2PvqcTJ5ZRmiq",
  "key10": "tqiLZUAEdAaefC75YvkBciurxQoWAktMWRtguqapHar1zv5aQvX897QKhDMk6ay2Eiy59hWVBUeETLMwoaMCWJJ",
  "key11": "27Y3b6DYay8tnhHs88jKgcZWRUuSyXL9de9hA1kpG2DGZfEiVNoAo6mf64Yn8Gw1LzvnnfWXLkqbGqWW99H6ncEX",
  "key12": "5vYUgHJMLcYj8W69xbLg32Bpo64idvTxHWbEjqbcgwtVX1X91L273Tzr6tbXwASn6LoWLkjCNgBQv8KhAEhuVUdW",
  "key13": "5XPfw9E8YRb4Dat3qYKAbh6a6r7ujH8czQ6DpJYafJS3PJVBgq6gvBXqox9GhVXGHrbtHaP6YWKhCtvYEDdvfPnY",
  "key14": "2pLHn6w1CSgA8aqLPQfW8KxYBu1rjCVTDkZKBSf7Bb6yvQodbiziAMmFSbthCYmcqGPTZAaCARwPe43DQDvgbdhD",
  "key15": "5KwPBAeVncsPPFMs5Vg98vvrEMeeEoBuio9qpHs1xqzZcWjNdvKDQReLYMAddmvC2gsrH3W5V1yFrUJh6oXerM6W",
  "key16": "4WPAFwnDB2Q9f3qTCXtr7BvxoV6LhmyYoQMssp613KxZCUGQmCsub3WfeT2jZ5ccuJsHHFeE7tcJTYAPGBPep6Zq",
  "key17": "2qvVqud7gH66Z3rPWpnA9ws7WNDTZzTPFGu6JhQecJsNtXtUZ4ApJwcq1RFTcM8gZniw6dddBJuY8FH6GHri11t9",
  "key18": "YT9CDp7NTF5yrjTtZr9Gusy2WNSP8NchCmLrKVi9pG9k2G3ToDFsdYH86Ao6Tq4Kews91b73BWJoDAnnMCdCgtB",
  "key19": "3wPKw6Q4u53cnQYNwNk87FmKaA7VAVLmg7wDNc7ENegxjqGe4tG88YsALuU1SbiuUqeDCPut9WuVVhS8J9G6WmT4",
  "key20": "UPdWzCDYiLicogbeW2U53QEvBAwMf1jTL5VecvZ1Hf58BsPEYFtdDYjYhfEhEDVTi8BZkiLsLcckC38dVbpJ71L",
  "key21": "2wQiubz3AfRsBiLHMkCRjP4TCHnvp3HopnUHF1NXm7wKwSQCatfzmCQ7VuKpRPYCxecNkgUN93DDAgrh53pkVeM7",
  "key22": "3whJuRDG25WYwTVXyJ8RPWwKAzTGEVJ8Rqku5c36EGmGran52gGkuQfJvqDC7bWtbThMxMefQNa2dsMYVtVQzWMN",
  "key23": "2XHLqY9daBJ91UQrUyuoRwyDBdEYHbdGdrbdwtBBAa3UnTDn9KrMYmj7CeUdChHYVTwkxQQMtMovYbVo4HBV55L9",
  "key24": "3raLx6A62mK6mfA9bQ5npbRkPwpuj3SreuqsATQtwYU8aNYACKWkJL47xZ4Rv8vmC2rDFpUxz6YshR7Pq4z5EYzj",
  "key25": "4XJCqtPVAT4rkTHV9WaftD5wLdhZbcZgaAueoSLKMDEd6UGhjYLfzqZwFG1usSeyZYvM62E1N7bvyjsBP4Z3ag57",
  "key26": "4hjwuUxcqX2GLU2z2E4x9f2dNnHva1SJjPnSQR7aKBcHkSfkzMtpY2BHBhVKxu5QrMDcXTyo7uqoAzdLu8LE73NE",
  "key27": "3QaBDZVw2Zc3o4XFhaZPKL7hXv3Xwk1VUw1KzcqYtNZawtLN1Ea3uWMB1WeFSLCSeKwHKRV7oboArj2bx4r9GYbA",
  "key28": "NKSVi5UjEQWUuXSKjSD49GcC1tZnNSRYaUUoHTdJa3frktc7D6KwLTS5ZZmpxEJGTq3ytXrEAZdJ4K76cTPA24N",
  "key29": "4p4rE353eRBZnf2Gy1NX2DQNd6gkNRphgRGfRKcVvyWS8ARqh8xbM1seRgJ3mHM1YCZGbLqECJCePieBHxLM6xYd",
  "key30": "4CB1V92bwcqR2FsFGLR2jpUGaCRzuZH1wPRcsqbYMdJUJWrN1gJV4CNtMePGhwfNfWWQ6jCkbhYExiZp19VYxHoY",
  "key31": "5nqCJxTPoBWzS1tRgEVmwfzD3LpfbbA3qDmR1SX17tZjyZkQbvQMevgwMcGVJvbuQHgkFSSSZrAVkNrwY6uaBJKS",
  "key32": "53Cfr9uRXSdADz4n9Jhudt8cYjbGobJXbGDk3ZxR5QmyP8sS81WHoLomAKiDZqdqMeW3YtXZYYZUM7nU9eVj385c",
  "key33": "3VJwrWdRWb79eJ5rAo5QQP4NWXqf7GsEf2qH91xjSNvf787U94TbReTVY1jYMQtRKpaqi4MVzQdupPCEsW9e2Kog",
  "key34": "452QKkLcVQs51qyj2s29NfAV71UT1yYH6iDHSTZG5WxWbSFTmgfjZ4ahvKTDwapJX8EgWmReixE8dBm9xttETRQJ",
  "key35": "3Zyrc8HJ66k8qxtWtGoyMf8xRvt9EP5rnXQrx6XhtjcAUoWUELSFAdHGJRAC3VX7bsZa52SmCVVMWYTJW8y5dPDC",
  "key36": "61phuw9ppcmNRAE3pEycihjjLjuWpVdBFi9o4ywpvBFyXhNmCzfs3yuxTe4C9rbwxmLPPbck1MVbJSLUrk8Du3yY",
  "key37": "32hsCFshDTCnzzUsnLBjwECxB6CeSHarCetgWpfRwGjX4Zk3TDNnSRDgZhWDwULMFrsZ52CWncMJCLmoJQKE9wpF",
  "key38": "5Hm9i7N9RimtjpHaTKEuHvU1hpM68JeNFa7iREm4ish4kaybmJbu3VybThGVvUQqeWDNzYgD7gPQUstiVBN1jfv7",
  "key39": "Bu5JrrLAv4qASad2vz1AsaKShVTRVid9h7MPDAXCQUgzUt5M8iJDYzWJiC8s7BSXuruSo8uZEUZcGQHyU2t1jR5",
  "key40": "2ZacRJDmi6d6x1y5B2FYW63nnzU247nHY7AtFFc7Jw1Kt6sD7K8FW28uQXjyEf1ejdfeo47Ts25zfLmqS9ZhorqM",
  "key41": "4QvATbBo9D3zveW7UrShPkTZ1cxe5y3v2jSq3oRZeiJKUnGgqR5GQVC2TUhujbgPcjWKCJmg2sGXqHbhQGqEn73g",
  "key42": "BFbJRzf9aiCXduD1YDios2JDJNxqwDz5ghpJq4NxkRiKojcd68fSEq4VkwjmBmpsjNj27GoL5Zvm1RENgjJWukn",
  "key43": "5LFwLhiDwXYAp74i4WCpjXKHVyNZ4rgs4txcREMCqcEeuuEibdrJMMSNaW1werU5xxJbdxZRx8KaRsuv3tuqGngE",
  "key44": "29BQRsyM5knLRhg1tFXMZDgatHL6Bbj1AxePGt6JpWH2vQPpVK1MYRfhhePJC97W1W9i34bGKhBQujkCSEuy4w7C"
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
