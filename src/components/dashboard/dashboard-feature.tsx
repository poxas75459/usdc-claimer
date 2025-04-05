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
    "2yXFU1AdpcMeDx5yKs7iSTWxHvyXe2UUTunSDVL34DcNaM2rFP8s3a4APNmtExdnhG8DYRTSwajZ2qiM39XnggHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rdpZqxEFJYPWjTzafaFzNqMiLCtqhnvKG3fSLnbxsehaQDMnMeEU45cA9NjwyXgAoycb5nVdnNpZGLvoZviSqEu",
  "key1": "2gM1hndRLiNQSPumES46KCB99P2Rdek6ZV54YRxC7bmgGHrdpYC4wvFh9nEKjxRtSsr9r7gn7wueX2YjTCuru6Vv",
  "key2": "2PSwq1JJEz4xBUcnGdKrQfaDZLrXVECG2qFrnC2qXP7dnTt1rewmwWHHSPm9KWhpPooH1hctDoyBK2TYuHNfnLiU",
  "key3": "5MJ6QC5tg6Cm4836sf5zjE2xujiDpU4B9GHf1bjcrSNA3Va9jSC3CTk4U7YHJq6pqrTFNXjPapFuSJbNMSbVNgb3",
  "key4": "41uHGDA2BNReftKJLwLMPffA7LxtUNpVkMgvbEYc9DatREGEb1MkCBHUYZ9Nw1iEHZV1tK21gw7GmThVSsgWdaEt",
  "key5": "28NoeVL7WZ62a2SjHu8jyeL9yDexbD5hFr8r1NLhCydVxzonrFTppUzNZYbo9XL62WhpFTVhbNjdpbAkZWFXWVpW",
  "key6": "UDopKqoC5V2qrCURQA2VE9RaaoU5PYpg9yM7ubjqeGnmwn3Mx4o4sWtUSfiesYQezqALKuWvWG8Cp7dXcg4VwVv",
  "key7": "3zisNdEYesuEsRi74YXg6wu7FHFLTuY1Z4Pw1HwDzfWMgvCpJ8kx7FjaDH9yPn32Wr81nsQsQXaANwBE6vgL3JMq",
  "key8": "53cAA7snwFo8rL4dDASjHrzEcpHgKTZTCB4mMaZGjpbye12YR9rBGW62wTwjEgcQTVfbAJG3FJVga5BdBN969LCd",
  "key9": "6sj2exajjXFjyiSzQMqcpZMjDqUksoHgcJ81NXY6dghe6Q9SWGbySobCNoqGzKwKFbiBzds2JSyNeZpd57YARD6",
  "key10": "2pyUd3tpFmb4nkHoefN3cNn8mHeBWCgB6jD9wxEQcqRoX5dsuTpKmvXmXVfUDpTAgMBxe5vb6q17b5b9XMjNeMgC",
  "key11": "e2ba62YVpv5j4qhnFpe2KdVkr4pPgV5nC2qfnj58zHo7W47jq6686T5qbZCYL7moWmhneJKykrSFb89RaK2ivPb",
  "key12": "5oGpTcXZ8dPL7khz9JGcohymZAexM1HrwWcdY3nfudbCcvHMsVRBKkQ5s4c6t4FU9B7YWCL6V6N2DFBaK71nXyP4",
  "key13": "A9pDivtJ95NxQiLseofLBnJtGeWiQGFrdhUCpzxfHBCksdGzrFscRDatFdM62dvPKmn3MzefMv3arqKj3WKvBTV",
  "key14": "3kYPqGRB6tZhaSPpHdCGBRLqXkcwJNYHNwXWEn7ECXU4WZtNBdxWuY176SQKYMHrAwdz5BEWcxzTwx39CpUPtC4f",
  "key15": "22oJksex3mQcmUWaZV5Evk9SeVLCeNmXvb4oTWSb3rdbSQTLrkUsjjcp9PqUWBQiLDWST2P9UZXjso6uirYs4sph",
  "key16": "5FJCHBQgotfaGU7ccChji7JgoXt36jbaLesoXQvzbJuiLs1NJZxG3HtW9N3Wq5nq1a8ZmJFYGL2MdYm5H4uQx9xw",
  "key17": "4QxjQTcjAr8xJ3Qcgbm4rDz89a5P28ao1BbQVeqgDiSJrtmB7AbuziwQx5omSJHsiwK8dsL36e3fFSQVsUnfio3k",
  "key18": "4bX5JufqNkPvJJnYBPvC3XokLG9dqqxnNsCj55vd7uGNEKC8hwUb3Jr3YpSNghDYHpDMHN2BVdJe7oZVEDyBg7Dh",
  "key19": "2v1TwALqeDqYRxnhErWZhtsWZxC7NtL8mhkpyoCfn6MKuuZdGLYJGXnYfgFAncWbsYr3ERFdbHESHEyBtutpFJWw",
  "key20": "SNSS2LCkfEqBKKUm6Rpm6TTqtoRG73ec712KCnkh3ASt7romiXYpuFd8ZdH7wbajJQNCEShU6xHAWchZHUrYush",
  "key21": "56AXnLXmHKnF68vgc6QNk9wygTagmt8UyuRrScYcbquXu8MBHhEF3XqWh91KdvD2UqVNXNmduWkEzYNNz4s4P4Mw",
  "key22": "zS1Q8tgbCBRa48ubdcqp1p2VUMx5rgeKz8LXEyScCCWuMXokcb8Y3gzGDJhUNzGp4BHwe6c5JokA2QrZfcczE8R",
  "key23": "3FyhkHYKFQNsYdjfE8hzJcrRAQWuvwcCJoB2EzXJWA1Pz5K3xJxhMCGeE6CJzXUWhFn8k4EzG5gKMAtgi2krzmTm",
  "key24": "1eQXPnqFiX3RmkeUFsbV4fy4JY4rWnqd87VZ5ncoAb3qFRu4Y7pyYH2RbKgdsBpUf4o2ss7iG7VLKbqhgsqYtxE",
  "key25": "4b3fWoV8nKVMq6hFaopdREuZ8ma8CpQvopE2rAP96NndUSGp5ojRKPi6yBUmapWRx4nLf4r8a7jd5wbxvwmhtsoN",
  "key26": "5TjQfVLEmUj5oFwWgTAcdNKYEMBCJ8R8eNAx81WoPnk6PTqi2dRrdrA9gr9rZD8DkFPgky9fzRSqBZXPGgE57w3m",
  "key27": "3HUDQ3XEd43csGaLq3HdQbeRV8za4AgfssX4zmkJvexwvDhQojwcbEFqQF9b2e2n7g616xif8k43S1GQGqV7jFwT",
  "key28": "Zymvq4F3hMRQNLALyLH3Ecx2aLq8E7FRBskamrPBsSaaSMfBXymVK5ggVmrX8exhyV5ZCh8SZkykcxvaaAzy8zk",
  "key29": "5GuPy5741zGRvUL7vayLFo4VnFNoroctiqJt1W8Q8enmZHbK1Y9GXuMttRwzxt7JygfhVqPqfHLtLzC6tvVsNhk7",
  "key30": "429vjcycum7StPRqPvXLmVHu7WLkwC1BbAtsoKPV2mmWqYnZpeFnxbb5ts8o7FQJhNDo3Hh2PEbVipZEDpNEpGVY",
  "key31": "26WSpKYdPY3cegX5kLgJC6addab7sTDiZ2Jkuz5ijtY6xPDUE6sh63QvwKQ78KsBR2YZPfZXDczaPCVeVqGunGJa",
  "key32": "2FG7o5qAJV5R6XWLZdwtFDZHdM2mKBH8fdKajAys5jXUSLRr8yHYXCLtvpitCSvGx5KzPxdGvZvKtgomQqChy636",
  "key33": "4weTGkhpCHZEiPNSTZPyXcvsRsyFhshsoeBNnmTSJzFmKWodZ4jsNTbm3Tv5SF5ocWBcXpjvgjCLDn46si9hpoPC",
  "key34": "wYpuqjyY43kJpn9V8B115HX3Xe2vcHvPqNpbHfnWV28DsRFWyMKh5uFF6fSn4PBm5UTcNi7gM24UhPBK8fDMcKp",
  "key35": "6AgWkGVyf8TV1Pk6N5sMAgwYBK7Y48ADkhcZ7PEsyK6mHrsJpS7Hnfx1FsxLWFtZheA8T4f8WENAZ3HuS3wbPQ8",
  "key36": "5uQszH1KTtmFN1nRkVAhv1gUXT4veJZj65Jb515wsr5P7rZYSN3DzrXWKCbc2fbNwF3d8jHBDw38qADL49iPmUmF",
  "key37": "3FGZV38LTtfs24FoLKFKatDsbEgbuZETFbXYz1id5B1nRnebGMT2onHYU5qLx5xdYNaTtRBKh4UtvKLij1pGq8d9",
  "key38": "4CydQRaf4yiYERhDTtruERaGc7FkaSDj3xUWDYo9UQ31QFvQoHwD2gFvL8xqiSii12WCU41Dq84EqHkFZ5oZzCe6",
  "key39": "5xV5pdE1fpEMKhNVqwchMn3B8J4uzmaQow5SFouAH5rySnhzvasQEmJz3VA62wYngrzqZKAbhhoy9nbKfbiCJLin",
  "key40": "4HTrCLXysH3zGH6o66PEf7NpMAiw5ZRiR6NVe2ee8EpVagKwSkDWT4eg7nHJu1e5PT7FVhbseN4981e7pNcmtvor"
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
