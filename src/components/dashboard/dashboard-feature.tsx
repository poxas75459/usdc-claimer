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
    "36uiDK2qBZXU3sP2V75cqZfyCs14pochVHnBb6D534pQsWPTGxoVyaFjhEpDntZfDUHTntnNMgbBvDgcgrENueRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CHdupw9c4xFaQdt1F8wHjDDTZkahBv7i3QgjctvcpRqGq6ims4ZgtDbGuBySVTzxQZcdLuAbN4CKpsexvLFHdUq",
  "key1": "5rGhy6dp7gt78DmdvTTAuxDYyKmWjLzgQ7zepAPktJdpjQ9pGg4BDKcoqFj5DeLEC57rCyWBQfdQf82xkWQQqD91",
  "key2": "vCmZUXDq7KFD5ycmunfKJcnqqMMZ29y5TjNs8FVFukSV3Mv1Wa5hXxnNtApCZSCQ1MXNiMkzPvMSBciCZzrHfQH",
  "key3": "5Lxs7nKFyi8u6NLkc2To4QNbSE9KsQdoPCvAGVRYgTBWFWry2KEc1fxDktEU3U6un66Rp3xbFjobk1PC83edEA1P",
  "key4": "o6FduwPYDuKzKBppVPmUUuJcztSaxCrnu3NtUSV8CM4StvYT3ZsWztffHoqzuS7pVKEtiuq8YM2ia7rvN1bDeBu",
  "key5": "2dT7UkGXpDKFSvUJFoQFKz1ZVkvKFq5okja5VkY9rDfhnFe1moZVyaj5QvC9UPYU2EKvmkKsSLFCcd5HiUAyf8Mb",
  "key6": "4StR5nLfEmr74yAacyebhsHSWUHy7gBd2J46CDJWHvbFcmWaAN5Mp7dajjAjefJ3mzdo3ukDVZZ4Wd3nvEbRmAXS",
  "key7": "bTvUbfLrQfHf2pz5xrCLF6dBLFTYoy7cHsXNsC5HT3cStjNLgLWrFjd3GcZMa29tF4we1vAzUKffnwdxr2utNBZ",
  "key8": "LUdDmsQsqQjWyUDmanWjLrktkZwt8UkqYjbhT3A8Ss1Qgmw9a6gfcocwpZkD4eQdHaP4ib7WcxUGBnsQqb2XRRp",
  "key9": "2BoUWH2TENtReX2VznAWi1i5mYQCtMoBWQ5PsynpZKrDoYahEodnoZBtaKXQZQGaeUd1S1ycJnDwSxDhS3GnEgXC",
  "key10": "2r6DWoGkqzYPvzxcKjZkkXZNEwjkruzckddkXkNm1T2sEk6bMMDwbyrVZBiBoHiovNxtDLkUdcf7HhBqr3GHfjpp",
  "key11": "34SAiTt33J9VMtpAxKoEePmzMLjXpEXUTVvUxAEzSPaXcHtFiZjWaMJTZhaktMSphmB4TpFTxgLbbdKKi1mJE6Kj",
  "key12": "3DF2dV5XzWGgW7BwAQQ1o3eti3B717Na9PH2fsp6MEDCrSDAq6NsqFN4DhX1JxzsEwdx8wek82P4TXF85jxmFekP",
  "key13": "5eWJpQimTuLgqrkZTDprnKxgEyYsH4SNChy4YCkVYer9c3YiqrmZiPa52W2jwjBGY2eTvgQnM5Dqnc1V9TnMiWYw",
  "key14": "65WiQxrwKfXLzao5CH8LyoYrbUz6QCHxdsv7SReZxqht1dzCiScuEYvAjcYuLMJoNt2hNECRXsLXqMoH8XAZtuY8",
  "key15": "FoChP1KH7Mp5PNgTLh67y5avbWUqGoJcJQuouQZCprF6PBT5EyeNzug9BHYyA4fmMxTBdFSe1bhU89q11hkR728",
  "key16": "3h6rF8bhma1oZg4shCteiCgvivvsJXzVtVNpXCWTcuwTQ6a1U6N8ENpCit3UEygegJzjJfjXCExkiuURySmyzVPv",
  "key17": "5urf539kDe5LsdF5PR9WBCKvHcCLVzMRgRahz2CiaGefTtAevuw6YhFRBBwbQCdwKxtSdXMmg2UJByWRfAVGk1Hv",
  "key18": "5dhzSB46BJxxviasCryYAZdfdSJoqBLgyQVJNySwHmJ6aj1AyKwWNfcbPtcHa5Go1rsFg1GEzFn2iYzHqwi2MjXh",
  "key19": "v5LCiaqo6b4ucowBetiK2qLoKg3Fps3ASejWZLupFwTK7EddVU1gtpamrDbC5HKWVYB5APB7bJK3sUEARmbiR9Z",
  "key20": "UDCCiabHXgAuiQcRQKSqBSwQj4x5x9SF4BSqdwRGTQdSb2o2cwzqFXPHcoW5Cn3R229t4nfcv2YoioMou6aAsNk",
  "key21": "8eMwY17S4m8caWC3oNXAmEKQDHN5HsxmKViiJYCYVVBspDLqYTtErUh8J6qVr97bMLHLugEDSSfkpMaJ3b19LrF",
  "key22": "3STwLqwaJrrQyzZMzoubUEjTgox1fs2biHFZym4rK1cBs9B1LjpMxc7TuB2N6mzk8ugxep4ToR5YjhBW622AS1be",
  "key23": "5HjoWrCEBCNtmmT7qe5LFmDDavtts98YsRhENqFKN1N6Z2QVUr54h4udSKFBMaSPZcSviqSKcKZtnhaijd1dqV15",
  "key24": "51yruFKNhEgGxuNDbQcfDDagep7RaRJa7acs5PbMgNzMBZuPTWUQtjgD15xLfJU1KF4pZacgnhv3izU1n1nbAPp5",
  "key25": "4ZodTUFZAL488zCiT8W1pxRhjEnnAT5xHhFpknek2nBgqHvKtr3B7UxBso2uMkftVAGXDAhvt3vmUZDFTRj9ZKe7",
  "key26": "4wfVs9SGfkyLP1azMxUkDKLgCugma24Q7SGiYGmG26WUhrkVrHyBeW27e9fsAsYd1Lc6kL6Mj1bPuSXzP8RLL22b",
  "key27": "5Cdx8HDb3DjH3b64XSmwXEyFxeDY4CvgK2naPBYF8vWvVm7MkUWnpFLmpEwgLqvDanbwSCZ9Juy9gtzoEoSsUiW8",
  "key28": "4rJ664BY1PqqvKA4J1iXmWztj5MoRzx2a5sSf9p8pWwUbwRVKU3wTh6Yzw1gQFxy2d6EqY3ijBuUPTGWuKzfD3g4",
  "key29": "4ftBe4m33YuRbAS5txjD8HKC5CfrasQAuyaqLHjVsBHhiavPYDdLXcD8jqJj5fte6Up3BhVDtHpQP5jZtSvB7j5W",
  "key30": "2QUBzwUTEXAya7YjzmxonQRqG7rfXuTkfuYDAqmfXGqdeRWVuWVoc3z6xBgF7CLA7yf9nHwthrAoN6P52itUSpBD",
  "key31": "5vDt7bEMweFWRMV3mrQG8U6VfTUQ6gfseq9ghi5FpT8hfmzhRGAeCKJJiGYonkXAmDiR6sJykFhVgsYFfZMmNPLM",
  "key32": "61QspWGo7ZyuAG1BzYn2VvfHuDVEQcyQJtGg98edqsNUMD95tLP9E8A4e3wKXYUsZQzKGogsUUaZjqxmCiQWMSpi"
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
