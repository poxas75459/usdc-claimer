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
    "4dA53u1jh3tKkpwHQ3TNfmACqTUArcz8WkPhmT6yf7s9uCVv7bAya5djoxwdBv73ohMu3M5QdGRGuZUWwEXfu2Yf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7FkD7SZ4o4ABkCuWEHzgTgsFfCUxZZUYDaKKzirZbwn8727iVwmG9KRV8SWfFzWASPvwc5KT1GCkgXrxDg4grf",
  "key1": "3bjK7FK9oTmj532gq15C589m3CB9D4WzB2byAaCMUxSuxZF2Vt5DAYRFhF3AStJkKuzZvipLGdvezhNrAUsxkTHx",
  "key2": "jRLydG35Z8dVeS53nKYxNtLXxDtkjpwiBbqhhZTqjw3NFPxfikSi2eJht3RwdhCGPX37vg2UeF36xP9LECZoQcY",
  "key3": "2JGLas88p4RrYMuBo8EoUnU1wE7YVgqiKU6hcseQ5ufQ2VjHRZH7ZTpfXMzYQSeMtVnpYe4mJS8QRuX5b1ARnuQF",
  "key4": "3RKKyZULtJ1j19wCawaErpYeHY7q9EN51H185Vu3HKQp6VSZYbCwvQiVnqLtHjr5sg92b1SUDASMbttYaUPCBpox",
  "key5": "4EZoZPUiVS9wF5sW2f4koqWHcijAKDUL3ojpuB6C5YCT272AcvsTVNxAFTcT8G1ZZSF9RQcvQCyoPXCgFot7RLnB",
  "key6": "64FVFbRJPFLGQj5jFCLhpmu2nqtsoQb2GxgTfDPPhazMrtXbJDXK3z5d8jW5p6yW4UmuwRzS15Q2Mfgvyk3KJbxL",
  "key7": "2zczWPvvHuFfWwjZrm8xTSqxWAVYpvujhbLohwPMF1LydR5yjtUrSzT6AcoR5j3av9uRhtYktWG4HhP4XjAd5ZJF",
  "key8": "2SWCWDHkvsnAS96KWDMMzESMm13a4wtxyeU17FWMbPFSAp3UMURc3CqGRTRqEuh5QsLnGnuq1AjXFfXLGYSeukEW",
  "key9": "5U52CHKHvK4v13ZWzSJyvVbL9NjvWKwkv1U84JFxusqoHW6j8fc5KJZdpMrb6bsrvpPMMfPpvEMhzqzcXrtTAP3Y",
  "key10": "3He1Wu8NYrVoLzVzUngrQzF8F5TFbwxfnNAgjpVXKyDpPesygccrPinSiS5du97ejUivqAND264oBqEAKHsHNg5A",
  "key11": "fUpN6LUdy7boYBpr7JkjxMbJs34TEirTvftkUhYxsp7T1aKEsTNMCo6Eek9RQ3iDbrJq7nmwvhGsZHUUNj9HAG9",
  "key12": "6LKQTYj7wupPAmemJHgoupiPRLZeer4KvHRF8fn8QAcmGySFgoiRakFTKwLBkk1Lk4r5Jx1oxrn1TaNUqMFf4VL",
  "key13": "2xVyxyhNfSRPX8KgYszkHGTA7mCDwDgXPHDXr4Db1JKMfpo9ZtaQhS9g4sbTVZx6eA6AyMG8tvTUX4svcfRcEH5m",
  "key14": "4xCL7ov6L8B4ub7H6MugFHTW49aYdZJSEWKrpYzDRMjFCwwFPTqwFsbADzC6tRJoK7UTT8JECCmJF3YuM1Vgeim6",
  "key15": "4EhpcmSo5xzZv42R5XS4NyYhereuDZaC2DXWHiijm9NQ4rhDWRsJshF2Vka2kU6iUL4jGWVrFF3C5M4pm7QTjL1f",
  "key16": "5LMEPTKUNXDKZPNwwbLjGHGVrnTWFaQSJmwPxVMCbK9Vy54q39KVWu5S8f6xVE9vzA4bRYLMJ3Yz9984TiW8RFSv",
  "key17": "3CQq9YG1MatZwjeaR47QKDSpJgbnCfbjq8SJBjHtznzddQJbQEiMekDhYUU5vfDg5fcYjQUv8gQ8fiWNHsE49pfT",
  "key18": "4KsKPdMziZqN9R8vec1t4XWgqnbi1VXyVpyDcd9S5CiXfWpY38fHAGN4FnJbjLzBR6yKepPq3Ugox3WGQekVjyyy",
  "key19": "5F8cc7qdiCFbJ9kAn7pQ6pYyzNbv9LJ3Nu8HQLC6SUx1H4kEiUJsjkS9xQhJn8UfX16PUnwMvWU4YofBsg2RuJvd",
  "key20": "52TXf8do4nXwFPBJLX6CN3DPur7xEB3xxLWkDMoKkoxGMtmAPP9R5kMy4CAHU5htZdSWdust1nD4QDFVdyq9dEnb",
  "key21": "3QyTDhpEAwMRt27FcWZjzV4azNg6b4au2Ai1wWobFfozYbkx4ScTTkA9XMUoWAhHPBL1RrpEzy511xCvYgXsSQ1m",
  "key22": "EHwQrvxhBsTaB8pyQJdHTnvkRCH6RP5b2GHQoc1chJ8UhGGbDxQQe4Vd5pcWNcREQhzrJ1qFD7MVHjCsB16of3S",
  "key23": "2NvUAxsPuvgLYi2QWHfT1X3cRBCDJUziTe2gbVXuwGqz2EPMctkwjmHD2kENSEtAZgWforTd59Hwjy5oHX82Z5Ju",
  "key24": "4sKouZKcNRaaYqspjju8pD9R9Zf43DJs5ySWN4xG4vDNdiDUJRGuPKTLH91bu1ARrA42tGmwUmLtrXecVyHJRxRT",
  "key25": "4wi9n46kXaMVCtpbDCZw1TdZEv7gJETwB75tVnhjuxzyhEd5W6AAv1GT9P55wSHZundpaszTwwQygSgzZJhMH2wu",
  "key26": "2hAG6Wpj78kh9XHao5J9yYkfsJLWuAtKpqCheWGYeMRApawCFqTkAWwEXaBYr2NQvhcYKv9RykZpwmqYuXHhNpJb",
  "key27": "3gEohyRP8pJvEpNBvDKMd3QwTnmgTERvVu8eEa57E3goArZZxgsL7U1eFnquSNTcdKr389XL8xpT6fJUT71Ue6U2",
  "key28": "2pDm5UAEyLQeTp62pqdiyA8nLTr8Qx166ggDkuvBH6BrKy4N4xVcmfZRAVrLHymQrPBLRUQ4rVNyb6oDwfVrNoPm",
  "key29": "4nWhuMH73LQPmgSqsj4xv9hKAhDaVWjzzmM8QTExbVcivzj1F7htGiUw3Yx3V6y2jhh4qnJX9ZzfCKe2uuwpiJo",
  "key30": "2Y5sfviYHzWwGnwNQDeTXoiD7u4LV2KhUaY5YUqrcRCJgZr6Fnb6HAg5JW7Z2iMUDSTc8AVv1BFt7L6xnZHaeZYt",
  "key31": "4kaymWQigSYQg3af1omqPm9WGERPu6ugtwhAL4JCf4khYom7vmFEaBxNt8Gnpuovofu1Sy5vNgQYHtWeqn4M6pif",
  "key32": "2P1z1jyiN56DphaN4m7a2r5w4LwyFkz1Yhc43NecxNPNUnQU8zpHZVuSxa2JsucvfMRZx4uCURJ4gTLXRtJZzqGD",
  "key33": "4XR6ReDeXKcfWsTxBZ7JD7hSfvsypiSdXa1FjqrnPCMwL5TUC52MBs553h6pXeqkv5Pb4s3cAPnUbNukQcjmPNnD",
  "key34": "4axdx8FhPhNFBjAehBRoQZJVDHJCS5rqC4RKRk97uq9aLbmEucFRzYbLS3StaBooeZh4k9AgMdFSn3LYyPanSqf1",
  "key35": "2EhCazEPCTZQhL4osr6814FvmkguVqyipNBYXPyCgQs4Ev5Hh6xjFuBYZa3saCCgDVCBYXQVRp6ZCtMYTzDwCRdF",
  "key36": "56uASqNz1tmfCWYBjGy2xByL8WZqXNT1LEr7mw5EtPAiWhobLT1U2ay137eJXG9qoVq83BPHJXsqaeBWiMdMJPBz",
  "key37": "31i1SjtPVj1yRPmw2MjmRQvNVzVyrwy8WJ2nuVKZytz3oKxjM5oTqmyxLUBq98zA1HDmQ8DqzWuTXyMJfr8tDJ8x"
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
