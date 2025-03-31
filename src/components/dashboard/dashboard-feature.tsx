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
    "4PG28spku2qCuZpp9RqYCBZjSJf9YzYNaa1XxHpcN2KawBRfSaXeEVZ4i29FWD7deYygFxuTKMhk6yksBByLkKRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ADoMiydfFXeVBcYZqLuLGjoychzVK2dHAcXZsXAGQLTFuCDmHQANUXXHQsX5z1g4524UifLmUx9ZrjMTzcQo5XD",
  "key1": "SQjg1bZudNQ2xCauMNSCGqAA8iyzosWAoVfzp6h8NmZsuT2Z5YfRFNCLdgBBxfRQKbKKQzC9gz1GZWv678xYhFX",
  "key2": "35Yw2Ld96NfLzrsLvcYk4ox7DnvjWUC8ib3WaCiWJPXemcoJiFyTmPJgnjukK1yDYKw7sLNQHahg7cRpAt9ZVkTa",
  "key3": "4KdcxvQNM9wbPVbWmfUD45aAVUHtCGvT4XJUEty8YhwG2iZybgauY3BERwr2Fupn4HSrsLkyAPEiAwGKzJeqmQoN",
  "key4": "2cyArxWCq7BVQLCTHKR2xCsb5k5tLhAp4WZnw7ks67odairKQPc9V8kPii6iUGi7mGjQozTDrz8WFmgsYRrTZdtc",
  "key5": "568hhNtNcictKvuhtrEz2cZX2jEmAxb8XYQPfuBpdW9QADov43LKjQXC1fWdwhNhmSfxbFHwmBamRmKZcTRnuJUZ",
  "key6": "5TqrFCqhGktg4RrKWye2pxztXsdfdfctkSjs3bMthGF6uzZjyDRqtcYrEpDDoNaqTTokxc5cRLV8pGWiBr1hMvQM",
  "key7": "2qeNmAUjGy86v4o38n26NCnfeRsBp4LARvzSUemK1QyzS1TWgk6G2VV8KKyGppNJwmZBNFVqkTBs85Yg7dCw32KR",
  "key8": "3ThKZcDUptjY36o75vmbPR6ZaMtD51RRZ1ki6kKaTvuFscAJHamXV9kWjRpRHSkfH1d18gu55XCAPYj7DHnr1mN2",
  "key9": "pncqRMM6MCVjgBgVT6QRLSpMdaZuVuFeTujJ42mKpu4E2Co2u4mcJEkn71vPmiBmh4FYRVcBp814uHJM8H7PhTe",
  "key10": "1kyWXkfsZmMn9tgMkhDVyGVRdWvnrFKxuauBJFSJvpq1cFh1JxrFneRqSXcSCmTpqQv2jRuwKBD6fsY2G4gctD4",
  "key11": "Cb553xAPrf8MMP4J9k5eTS53YhVLob5ypRAtPUyS5nLtAKGptUaBqi5gHLwbCLda7pbsyJsTsbtuCuwLXsF1Min",
  "key12": "2jWopt41bdYaS4aH1qgWfrt2Ek1GwJZAqRZaY32VMnbB2zHSFBBE7BVCj6Rr7jijPo1sfSaiku3iW49DtACk4jw1",
  "key13": "2wDsmz2Qi7EoickSNY1omDwwHNYdXjkXPzbKZEZnKn2LjeRnbWkLyZDvzv7bHETPZryXgEV8vYuGpk1Ehwsr1MgB",
  "key14": "3aKb9WaKx4p942F3AF3BcQDGLebgcQR1dgA8AQnpDLAPnPh6uyc9SAUFtuGWnRzRMd4ogVCBkhpti5NH84rZjwFf",
  "key15": "5sxfAPsCy2G6cW5qU7EmQ4KJ18QBqhYNVKU3FsqdoDpM1dwrJFCHrKG14ffYpq1NVJ2xH5aiDmNJS1fjU1LkhVHu",
  "key16": "21hVdTYS9iCWGwdg5dr8HoZPMCDUbSdvgDHbsqUBjRwGFRhvnmh2EsfapJFTjJM7Qcon2AmeJT6CgkmoyRhgq1Qo",
  "key17": "3c6YtDGApaG7BcgwnMeBBRuFwVAt9aFYS8qqGKLjRBdAavTJ8gp1rjyGCzpF32ByE2cgPhV4SEMuFq8jGz1w5Kdk",
  "key18": "5FZowsn6Qpg6xTEh9mp6yaJifhbmZNWHfMxbaYTYQuAjPkV2BnS8NAZWGgRU8eTqSu6qYFWcTUntWwNYMiqaEaZy",
  "key19": "gGJi9kGS8Y26W6h8C56srmQEm7wCWY3RfNXJFNsNzwaiDtVe9CabLQijxcmhwfbr8BGSFPG5sWwKHXSQ8b4kQcU",
  "key20": "UqACUMzMYiDJejWWGXoSodzbXiEmJxLZwvvnwjfbyEDhjAhhuJa9pzQ5RHJ9osp8FnMG7XJ4MdhkRmfpTF6Gq3m",
  "key21": "2cNkzFdFZekdbSUm6826xUSo5srdVs1cqKWqixECTaN327PCqiBrMuNBxehyG5jxoZkgUNzGXjbjJkt5dhY79f8T",
  "key22": "5giVBvFBcKJBNKzEPGJgMam93PxjApTeGNgMcEBvUdnGCb5pXr4DbAcvDMqvGDEMoxUJyFZ9MWiFKgYE1ohGSCJK",
  "key23": "3N1kfdauDNpN26rXVkEx7xZBecM6GgKb6pwnXF1aVftPFh9mLnpWjukWUFcnR2TciUJqXSZiKVWLdd721etfTnCm",
  "key24": "2rraxQPiCfq34uqGRuoDsv3rcup7PweRuVLH8eEr6n7qiVM9d8aKv4UvVCLFkpFrk7Vxj11S2NtGqd49iU3kssct",
  "key25": "2dQppJQcczeGKFDdaC6jGcpxRzuyPBRwbvQrkY8FhB9HL2Cnjbx7Uz1bvDMQADuRNvffikGF6DeyTo999VyqDFGR",
  "key26": "2cwZ9bZd8YcVBpMX8oyqw3EPYTzPNCsTYRggyPE4kVCTeUNehupGwqCWjgapgGztvFx5Cfdr8PLeDb7xMDjEKkdm",
  "key27": "5evifYCsKjnvPV3QC1EDCepzRaS3vcwibgfdt7yRKfsqc8gevX9oAyUbYe93XhJiyr9VNB5Y1auJWvzPGYwj2p4t",
  "key28": "5JaBMAdUqQ9TeM6m3wSFFMpLVkZZ8N1ehWaGmwFjtQPzspgwh45BHBFQ2tCP9qsLFx71sA9Z29HamDFCRkBNwfe5",
  "key29": "2MPMho68mbGVzB7gAdEcEa9qcWCN4H9vFBGVLQWCPSpbKAWFdQdjpqfbUAyPfLwaVW3EdYg6qP86WUTSvzKdYAap",
  "key30": "2u9vhiEemzREMKMy9x6wN4mjEGDdP1QCzz3YtXTkabFakvkUupPALKXZ3akkfQv3EePtQt7iGRGdFphQCd1qFaFZ",
  "key31": "wAR8yrLUWqE7pq6qNekWpuKsSjp2rWkn4o2WU6kVNxxTNWnU7mg1cS4MjmsqQioT82XshacroGPkCP4xLDzVPWw",
  "key32": "5ZHWJE6t6DNV3gFguDkPX6vJEfR23f6WrLHVLrs6V9JGP6KFB8vcLxvphr8nF4kLMWRAquDJSPdXCq5En8RJPuRE",
  "key33": "2QG8MbWMppztbCstCspfv579phFrNtxD8Hn8oATCTaufD8SWRg2DjTqmcy22rxFWo6XzKLJZEZ5YGmZiQKpmCS7v",
  "key34": "2LEAGbYtcd6oDVtKVeSoEktVuAQrHjNoZwfkYjsyyVx5u2dgVTiw16Cpb5PEdV1cSSBDqJdKGzD3H9V3qtoeYhCC",
  "key35": "fa8MR3VFn8JxqLjf1vyJ5GtQcXZPJG4KNkzYQRtZhbJTHRxfk1qqqZaQU2sGRSjy2fMYCWpefZfQsdaepmMo3mt",
  "key36": "tVnCvr6rRfY22WhewavWgzc55cvpLpvzTt5yw2gESs4Vj9TyPKpRbuW76WQxQ5y8mT4wMYMxFvyeK41nTdPFpqD",
  "key37": "25D9wT2fYVqmZo3vW55nkbsa4je5g4JB47bq67K3Hnzxpoa2hNY4CHs3MSafJABm9hWE1AoKqNqzKLRYSHcocZ9h",
  "key38": "4RMnczeHiCiBdDmYMH6Yu2sWHRmzaD5BDxjEkZUHnxwVKtvRfjneS1J3VrCz9duPBNfdFMoQtDGytK7hqwUznU2b",
  "key39": "4VBWewfxzV6u3iDmWSF3wMLq323jgiazvgshaqkG28hFiCMTYYQW1AZAeGwzi8SSKeFGrLUjG3HE98bkeVRe9Di9",
  "key40": "5oMKeU2D6nc4VCGMR9aMNirLnXsq2E7eAaMdM1XaydNi9SEXpeUHisjoWfN78B98UYyAxaid3cp5fzUh3abwAqhq",
  "key41": "2d4fDrWCXfHbHKatM74QoaRHkMjRJUmXZHWXXyADvjHjMpY6v1YW7sJwHHBZU3XibGD34C1Qsa4RTTSA7pdfUGzq"
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
