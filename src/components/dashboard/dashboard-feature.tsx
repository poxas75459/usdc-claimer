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
    "4k7QQWtErV83dJfWRnfm7dcXSFjofYqjyGq69bPEnUyhJTUL9bprbdvd76HCJnxzqhTEmg3CoNXseaSg77WKNTtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mxKPpc6RmYiexH8xuopo4VttYdiZ8vKn6ScdRcxiZNPJvm7UdrAxtPSHm9eDVkMmKSacYP2bkmxzbRduAAWQXyP",
  "key1": "3u13iUxyjyXJTZeFqrd1u2h9iRcQETjh3YzrTn2e7xkb51wXrm8fT88GtNYHJUrGqv6gNgSZaadWpiNQvfVH7ywC",
  "key2": "q3Go3HetFrcsREUSKVkoYNhYkUc2Yz5BjcywJ6Qe394k7SL3YNchU8S73yNoewNxYa7gYYy7ZKhNiYAnL132mb5",
  "key3": "3PQ2BVJt7VcQtws9GybpZYrUon3pEKUkhmEL6wxsKXnhvSSKkXVeng5XsH1fb95iyeYUm6ZWYSekKxx2y2sGNgc1",
  "key4": "5Jd8kB4aPJsSbBcryamevRoExdXvJ7Xucqemkpx26dfgKUDKexpppoVvcdcL2yDCFLBbnquA26mRADMM8rrFbFNX",
  "key5": "4coUt5gRexvK8LPkaVZgvNV6in5xDkezyLac9or8c4SJuaEgDUVZWEbSbwh6nxELFoucvsrktbbkz69Bu8C8Lzc1",
  "key6": "5QWmB4wjFm8ZGtFwZcmbaQBwRx1ZVgrpnL268c1armJMhiAzSfLRjLKCVoMX4iwvojjGaYxjcWrtHq3JbqyrX7Ec",
  "key7": "2xJYQ6VRnSvcEShnP2cu5zrgGCwGQVYaPn8KgnS9VGBfgDBhkwVSyZMbJai9h1yA8MBpkJVYSwp3x9Sj5aiLwxcY",
  "key8": "AE5mMGvv7G7xCdhJKNgWNEFm1xeYSdUbtRwWqA2eMR1NxLScBFbzeHbwmxe262pCUrwB9C7Fh7sbvQBM1wk7i76",
  "key9": "48GoGykJx2BTGbJEkewDWtWQhDBrQTfMaj3yHvbRaKKAxVToKcvUFxao4rd5wscVUsGknJV25QiF7LfPSRWVC37W",
  "key10": "4wWvAFebVHkFsnWRGDZPTATjkRmnQH7SjtzXk2yK69NEgvw2WLMrxNunowrEr2GuivWaf3SPMKf3jA9jrxu4A9tc",
  "key11": "2DVhMGjyteYGdj71TZFVkYhg81UWmYPq7cJEYD3LhS7PUubd9UissuKJbCE3TEDvjPrCucnUk55swEs6EAhWGDuW",
  "key12": "3g6Ptie4rbBN5TwwBRghJxo2Cg4RnNLgbVm6gnTrvfH4daQCzJWA3iRmpL7QyVfAXemKJec7wLyDxkAdxhbt9Qa9",
  "key13": "dE9NJFWnfKkvwAz1sJRAbzmDW7Kncid6pKTmVyKMQuQkvqkBdd6HzR7XDgRZZT94TyhqGrJHEnzVaK5hDkJA72V",
  "key14": "2iipJnAoLqBmKEy3Kzn61GJoU8AHwZHAPZuSHgMi3HsYwMrqG9d5Ahro35x74adXfdnsMSC4XLVhQ7QcM6ZHrB4L",
  "key15": "2ZowNLho6Pe45nMWvLUtWXjqzBH7JML6qXhhwYQiv68T4jY6D4hsSZ943D1hQTvFD2PDqiK1dkJW3RwEc9N94yJS",
  "key16": "3vi1QX1GABMrpvC47eS1Z1BZWwkZtDwG3fcvaAvQ4Vn1JKa9pCHkRo5FAV5YheuHhvKHkEfHnGGj7tg1xiVNGSmJ",
  "key17": "4FJweY51r8u8w8ft4JbPGnqixew5ANSaCe5iC5RtMVjHssx43Xgg3fkurYpVKQ32eksF1Kz7qykg8dzh27Hc8WTD",
  "key18": "3U4HXrSmP5gcL6U7Qz1ins8NM4VNjTYLiepkBFiB59fE6o6zNHu3sd824CsPNWsJq2yi3N9oq7YMYawCcqbkukbH",
  "key19": "4rd6gKW4zzd7sWA6dMfuWRttdJ7sFvVQofBXxHvBpdi1L1cxuMn2i2nGW74yMJqbhwPdb6ihn2RZ3fBda9J4Tq9Z",
  "key20": "2tkv1KitLhbWFcZrYdSYNawFyt4fpNMZ6rXUPFYeeXjLNAzczZGuwHQM7A9SucHWGvvXC8kYMxjJNxBXUgWsK2UR",
  "key21": "45WiJ7drTrccXMUJdZXg1sJBms88dvZcS45FLDNZn6X8BvPffW2QC5TMC8rSQSjAXV4ptnR8WLGP2GyhScfuvoLz",
  "key22": "2Tj1yEkiJbTTGYgGjZDXWp8r7vWmvimoMAnhyuLcXSujet6kVbDiow4wQYVMsYKotHwGgkvsGTUzWhNEzrEQ6VH9",
  "key23": "5ipLjPoRoc37KgEZmQdHCVoLMe3XNpQcDTjfVaPbRhzminYsqJDGupD5r84U8UcoWdJYEr7QKVYDiJ47FBGxj1rc",
  "key24": "3AEL3ppDn2KqVvca8Vq88WgEevxU8g2MahpLn2UFwjUMeHc7CC4NuQ8BTfFwErpjGGpR68Mgfbj4SnbRZPhyujcz",
  "key25": "3VNH5FjnMBHCLVZ2G7aBXRcqCskFtZZknBhBhFHHU92eJK1cFL51seu8kuRC2PkS3Zk4NkqymisQR2jrFLMTWuRZ",
  "key26": "4RvBLEqqihC5dB72EZxtfjbzzLVQPsRsmVfwbT2UDxuAZxbpqbq3Wh8DEdYYjtucAEFeEXqMrFqjwqJxyEosoyo1",
  "key27": "5sB4UvxsHNrLBFw8wuUC7C9SjVJdprcJvLQys3z3Aq4rubFbucPuaYc81jooCMtW94hF4uJqef7a7jFGAwiiEgDK",
  "key28": "jgDFSexSJ5wFaVSiSmQ4M8w9KSX4RQxY8vnZgT1ac2iPEdtW2QJq3AWacRQpUf536vDFy28gTNtfnPPYfMRUPbJ",
  "key29": "2vaa6HDDJBPyFvfP85qwypDzMV32MQU1y3mdX476jiq2jpDYpfxzAAkBX7Eh2Y8UQbMC17ojJ9Cpmh5pVBSE1DG5",
  "key30": "4SZE27yeB4NZqWHCmRsDQnXYggmV1qYhpjhRkwM62MypaxFbZpHNwzCPJNVZMBPUhErUmCPJSxjV99DEQ7MpX8Dk",
  "key31": "4ZEFLiQCvd7BPSjLJ7DDpTsC2YyLvUgFw27DvRtTspcsPexyAYS7WBE5pC7hxxtrM2Bt2WKWqc28SwQJK9yRT4d1",
  "key32": "3MDJu4ggfeRW6pHi5ZTh97sC27m6xqfowyPsioZQDueNo8KyrDDCqCZ68Liao7PekCNdYZ1G9Q51azATaw5fwXtd",
  "key33": "2L3WNr6c2bhu4smx8Z7ik22F1bPJeXsg3HcZSqGkTViXrZoEmXeEfmNQqYPbB7Hf8j4Lt8LJVjEVv7mVyPcsjqxH",
  "key34": "mS23vkyiECmkF917thN9qLLbVZ9NsJG6eGyDWURFJBpXXi47dHPGJAvaEHUtjGU5n2ithF7ejXwxTnva9NKkyV8",
  "key35": "744gozkKTgVTvAu3bre1tsxdnzimT4sPK1sPMcZfwsyzuMsNg4yKaJ7ZiT2JpW6v7Zeti31hNja9aVxVpYn3nNM",
  "key36": "RSDU5nZKb7ZEPGnjRrooSgBqam8CJJDXZtcorxujoKxLjjF35bNfBz4ScbicMDpmLVAAGi2AgZPHsUJjtX4dGMw",
  "key37": "4TRevQNUkL1vfhdzXso3SyUb6AthEJ142uWJNRsLf1YgqyZaPBQ2L7sEmyJFm78nMPV8GfcsZ7wSeRsziFR1oTZ3",
  "key38": "54CP8cqicAqbnN65URmQ812PCTCpfoKqw52Dsuy6WAhAMgJTrGm9gsXF2qNQMMg6BqddPD8vRVz1CKjBowiW57JD",
  "key39": "63oyFyKPxxTRX6ma3sPTxwaASrqdbq7rhtb7PoiyozHiW2bStP6PTx6gZ9J1xnvBfntYfBBrsQ9o23J5FkQLoBDu",
  "key40": "3fgjg3NATxs9RRUBexokQtCBUHEJo7j5UWqqciaQGdLHtkS6bdxj9FSZ3PD3qLAMeeiWT4ZKhBnyLSpVUNqp3jYZ",
  "key41": "5VjrAVAATU4mVUJEoMX9iY8nzhsir1qqW5wFbY16Cna8oY5PTU9U5pDr18pFKJk2ep5NBHgxf1oDGSBZ1xQz4HkH",
  "key42": "5GVFrKDL5RPEPUQF9bgLyxJo3khxUwJGmbpGDjog1tyGDTwQ6ssAwu6wHJKCxkUixvbCEGStSPhgimAUWQ3fQ47t",
  "key43": "36VETbSxNkjsnbq1CNwVKShpRbKt1wtn3ZCSgitKd5x6tAHUqy1ZhARdQiozwrUSWCsdguijUy71dDQnrXTj5Lgg",
  "key44": "TZJzVg4zCBXQZxZtkZaZ4Q6a9GbqemVPVeRssJTaATfDQnNTk5JHRrgXMggN7q488ZxH9jY22ZknHrsukAayQ3C",
  "key45": "4xvgbqwk1emX5yLDdDT38UcfKMBTTst8Rhd3PGsaysCYYpXdwxq4bMiAkdkvx1PXUxS2CjykUhXV46PZhmUg3ews",
  "key46": "2RyBj2hDp6gsYuRsEAgFmYBVnbNrkm7oGmvXJeD8JBHPDFLbYtusydHBDSnh1CPaM641FHmyfhHiEtptRwANLE7H",
  "key47": "65xR2CaoyMe9jHYs21BrhuHZfoPj3sqwYd4SFU9K94gMkUQSmruQJDLeMVjq89YjsRZZLeB2Uys3uP1xhyezDPf8"
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
