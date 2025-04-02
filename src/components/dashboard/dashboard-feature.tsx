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
    "63ZqUhWZcq23rkguk6mExpxmGWJGxeVLeXZPgcfpGywrYrindL12DH11R78tEEMY26KsKFGL2Va6X43tekpdN2VR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cXzwKAoZEpsprzvGYuG1ke4K8BPfxtruYTtZWCgPK5YAfC6HJmq5emZzV6SuNxYcaYuP7fZrkKvkDpiiWSyq1Sr",
  "key1": "5nbs7mC5dffMC26RnZxE283L6ex5zBy9kpawy92UT62vigNsdUQzobum137KCS9s3Dt2vwo1cVsbq5QoPr942DRV",
  "key2": "31hW4uLXF9kad5Q9oHeECTrsoDjN3oYjrMjP4p31EBub2qz9xugP29pC2hpf2ES7aeu19e7rSJFGQJdF6kpC5jrD",
  "key3": "39ifL7U9vMH6VZajaf15VBsZAXwrno4EsT6fq6qXVyDdM7UH1D3Gdo2KuKwdpmvJNkzyzm3LXZTsKbANdfZgJkkm",
  "key4": "2MUKXf5hC9ijVUY9kis5q5QBfBZ1ZqykNHfbMGnavy43NkZnR4WNRw1Q3spbZCg6b53iK7Er6RNCZMXCwkuUoZqC",
  "key5": "4LMapzwGCbdyL2nupuSjBf8kQxb4NcWimNwpvVFzriDyRuULnzWLCgvBNCrjXsQFwHWGpQBNx2HefRKPGESxHcdZ",
  "key6": "vSFjxBmgWRDV1f6r7Q22HJEpvRwygBBNHLBufBdcAwi28N9NWUG2tQsDTZamHtkgwTUPkjue1VLZtTTGBNa7yCT",
  "key7": "2Bp682eCbT4znWyy7aVYqZRart1h7TUvnaANvyFpUEed87xEAoEKcZYuQVLP5WYmFHp7Lnv5nqF2HPBnzKJcjcAN",
  "key8": "2KKRJS77QGZMucbsuoUyDRMeZu56umjTKK6p3Xphzj8NgwW7GCMyLLJoj1oTd43p35S9fmsRCGam5TQEttNysX8V",
  "key9": "tGQHk5kosq3z3z8bDmch8wf33Evn3DKr7MnEoPAcKWVkkMC9oUDqhUgGYddiQyuNvvLmE7j294ziXB8SoLtn4dX",
  "key10": "3WJGtvQF8n7eiSs4Jf1EdR2SmuoQT4WZp2YUWG63WZwq7RmBGPPJceDQ1PFGRwErjrQK9qmRRHDjo6ExeyV7uw5T",
  "key11": "fY4TEUepquVNK7gWDPHcsqnDVfmpPufABCnuunoP11F7kgf3aQKfqH8fzPHq4zdxy35sxzyBMtFnTWrf9nRRgod",
  "key12": "ixLx1WzTTzJkELZPFR4BRBnRC6ZuJnKqSNuScpbVAw5YcoVPo9xDnkXTsFsZaBeDzmNoHVKVFFwSCgFdHkGK1aM",
  "key13": "5UWMCTkeEzA6PSMpo6RQHCvxHYF4m6D4ac8nQp8TT1NhQv2UrfweVXA2RF8tEnRZ1FY7JwULpTV2BQrYTzNcKWMU",
  "key14": "48eyzQfLdtxtx3KVF14EF5wSn7HUT2kf3YTqY3Z72VzQUAKMGNFagKHp5SW7j9fHS77spym8x5SJPJ6MEQZwJpNb",
  "key15": "458STECVBHqHosBTAg9NF6k2NvGZDL9ktGMbds5Bzp4P1Zv6dfK58Q5mhyuzpXTUcmrT4Kmy799w2vuD8HSncujD",
  "key16": "44TPWP75ZU5iTLedCLtHQXNZZ76ym4WSQZDatnGHWKpsY9C5jQ6QWA1BvqzUs2KY4MKKyo4ezocMf4sNPSYCDpHE",
  "key17": "3jyh5UhiQSE23qGMq5H9KumPm3dc9Rh2kSUGNy91v4mvk7BT5Rtf7CS7GcxmdzSMf37j5hpAjo5UJzkob8wzVRrp",
  "key18": "4YUj27sFN5p4nxgy1SGhY6LTRfakD6eDWGRfNAng5R6mGW4cbQwVC5EzH4g7vutR8TZHQHqnFWd3BsJ2Bgn4tGvj",
  "key19": "4YYG8har1NmuX4Eig8Ki8uJoj9LpyPgQmBXteS46qshvsv4TYM7d8h9kxeK5BtkE2EXGYxh7w3eF2qS3qZ3CneDB",
  "key20": "5wxtv2bdZAF6JjpPvqrSYhjtAwqEph7fZWsKNfkWxZyziV8HRr9NAWG7avoLdD2YXSd3RJFJJWTba8qY86SfQNvu",
  "key21": "4CmV7qztjc3ibFFByXYZZbRZyFDcKEaRz4a8hMytfsn2iYEobyVFLG25EBWEZZipJqBxctj8awUstwBqwtFEMhiZ",
  "key22": "2VX1PdLxv6SCC9aKnGZ3ug8thX36oCeDd3HAXcBezKVNnYD3S7ARELmmEZqrjbenbb1irKvfhkahJXiJ2bo92gxM",
  "key23": "4QKjJoqRNdWcri3yCvoSgFwDQ1SH5788jMs8ND12SkenX4zC7LXBCJWJCwoeD695xzQazmrL2NEWpYaLm9YHWWEJ",
  "key24": "3ZeZCjdDWPNpMmLG6dbxXH7cYoKRaqtUAFwGh4nT9ezzfcqgQcAbuchb8nhWFKUjQ8fmqk1Fkh1u7ExjYrxH2Ygt",
  "key25": "24LrUmr5iHiRbNDQf3foNiyftLtP45eBwjeRbuffbP5SFV1zw9ryn7tAu8VmAWb8tVE7p5A6DR28WHa8Qepvbznm",
  "key26": "4DanMYeVAYkuHPyawBfaKXEw3ZoABA92ZK4fBv2TqJRuC4fBcBPRFSbFZKL13MV3PAE2JC37jVzxhXDVF8aLm8eM",
  "key27": "3AFJKV7PN2XQJt3K5sPQbRNGMDWqEonNQxjF1SSzwDwCjj2Ycsikphsb5kmDa5vGSt4Rv5ARp8YdHcV2JiAVvpFV",
  "key28": "5AoknGpLWfDTyNnsAAotXyPEd4srtj8BkoN9ESf2kFpAzwGWoBDabd3wApSTgwtzp9d3PRaA2kSX7uAaxmggzG3T",
  "key29": "2c7N6LQNnaPHUj5h7M2TCQRjADVo1LPmfmeBSuqXshufw6RUAX89FArkuZBUogLvYHcGmt8HebNmtaumSn1r7iTv",
  "key30": "4VfLXjsGWJgXs7BEocXGGMBybwNRDA22SFK1NChpqXH8HT1eDTkwUME6WVp1tU5Bm2xNqRaan6Q35xLDCpX4zgVY",
  "key31": "gA8cvG2i6sb26DGVavjjt4xMuvU1QbWf2RixXzSuQakQHyKy2qmDs9z9D13aNQzbHMsTRewko5NiAQqAcmSpnXM",
  "key32": "2JaYW2v1tAoSoq1crZG5eBB4yt7Zu8UzPKB7eM4U8UaDxvEB79J85EhsTp68rTijaMUGgTHF5VNAgGryLgHFFEnp",
  "key33": "38UuKSrLyXrTqXyisNJyJf6vhRSe6WU2ecAdjQhACNhzFvo3vDZdaWxhTWvj8S1J3GA1MLnkThNpTrrK95AFW2k",
  "key34": "4MQd5y6VhF8iMuimdFWJJ4v5qLiT4vuzvwSTzdrRiHmA96dYNJ4sfQVZNsSkx91VRXJdpTBPUnaLtycD8JzH5LBo",
  "key35": "2HFKzUHt1M8NNUTgyS8YUECAdcr9LPCFkHqw1HoQd1Z7AT1xageXPfi6e7XdiNN2uxwSshCYM2bAfFpGDpgESN8H",
  "key36": "4L3gryuLGJQdasGUeLQWXjfRz7cfGSQgtbqrS8i1emd493CvU75gHM6qzAQ3jd1QDkTX1Yj8dUJ7eEaXhCtBJYT9",
  "key37": "27H84LVvnQBgoJKMkiXZ241xQZEsujxiE9FMC5tb8CUToG19hTMfzge6js2NiNW2CYiXL5VqxYgHjMfy8vap3eNa",
  "key38": "SgWr6cRezS4T1Gni8WX9NCEgqcn74id5KfT1Zew1eVA5yXnc3465HCCN55ywU7xFFXYkt9HG1bS6tWwGbHaB3T7",
  "key39": "4JS5FNC4RnbxrYPYGAVCxjoYDggWkeobv6zaAzUX5xXojssCQYJNJtk9g6TCyhpsyKA7yPByjcdwu5jSbtgvuhSW",
  "key40": "3TSg2srGAfmrxuDqDbriBNcjWDK7RvK5LjAJvk2XjckFPPLQ58kPxsxcfUepX7LoXApBu1hfLTcK5b94YSKMxXC5",
  "key41": "4gzDNDBehM9MTGg5pvLfCqBK6yqCZXVtLCwPVh2iLEZaamMNaEJ83sBn8nG98hTMMuhP249dk6UJGLpoQcDHHQbA",
  "key42": "27W33FhcJkQ6DV7JjjTdhCutRfDmRvyC5HBbz71krz8jzNj1FAVsCDRT9Mm82TmHaxgCWQcrz65829LSsp8qMiPt"
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
