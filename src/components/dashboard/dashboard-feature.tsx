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
    "5q6r33pFqqFDQivaFB5ci1MWKNzzH4XfzPKWM4UGk54WdP7Mn5msn5F477xkFuhsbewP2ouxPYXskHHTeKWn62ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45qhbaNdHxHMmf7Z3FvaujV2KTZTwVwaRVorNTQpSsPnB3XqrX32tdkGnuDosMXenUU2SCPGxAYn3QNateYtErt5",
  "key1": "WGLqQ2Ps8NJUdcdEGzwdhJTqj6HYX6JGw3ZsQnZaG7oLr7gGQ4PkTwTaowjEDSh8sHPEwgPHcLXnCZPaPnShQVG",
  "key2": "34UgmHRtNBftreZQFQzuTijETS4daMpqCettFBtaQawLM8DozPo7XuuT6YRc8RMfTNnR9WPyBGUdnwH6AhERAK7U",
  "key3": "4aQBucZCKgD7viQxg7hXLgg84YQkajhRXdCVseNSNvcYS5fAgnH72s3cqyCpAefDG69SRJMktbkSppgN9DysYm9X",
  "key4": "5AQZScXGYvQ4aiwkprgZbL5WgWa7kTQqyfm1cPYnCmzwiJWKq3wCyKssqEyKbgFnuxkXrZztdRA5isqCFiV5NwGB",
  "key5": "4WQyZBfmH2KDrzvxzy13ee8cyVcBcqvXKhuQ34RpjESBdBKGuzvYqeg5Cx8p7GsDyL7DWP2kGted37j4JsotynFu",
  "key6": "2cXVzVhqPgyrNm2JyU9eFC5Ddc75186oxtVDHS8Wy88mUBZpxxoc6wGYp8Nbv8A67ccUg17MfVDJ1TVDRXe8U4RZ",
  "key7": "3fbPexrNGQq4JKJTfxTQrX6QioBdT1dyQhdd1pidv2giovQpHnpaNecJcLfqzWqM8NmbLXFUo63EHghT4M9hm49T",
  "key8": "5rKH4i7y34wRqdmHyDxbMdsZcaC2Hb8VV71Hpd7iaJcVuGYB2dmgZY9sNqShNTZ7t9cJg3RzqGwzzPfKD8qBHvGW",
  "key9": "4hCxnWmQd6XAQ2WuwGqmWNZTmvaiTJ2Wd46FVEWjJCirArsoRP6wXP68mXNJaT56qzEjU9uSWpWN9UooRitRBXNx",
  "key10": "2bFpAaDbYdd4j7SvTXCT5xkDhgNQAZLyVKWGcgTSmBQ7b2BZsdni3CZouWGpdXZKp4EQHYgETcDXkVRGRJJs2CTk",
  "key11": "3y9zsXXrMrbSLg8H8rUVAzuwqicijLQzc2epWoGhBZ1b7ggH3zbWiEB8zLwJkawLCN6j4QxofTVdj2orgTKdio1S",
  "key12": "372X42CzTgHUgMc5oBPqo4kud9GsJqbpoKv8Cj3bUN3DkWo4Gb2fHan8HUGE5SLi78DjLBPNqGjvmVuPELsrTgGw",
  "key13": "4LYSfQobwmpwteo7tcyUM1hLJjxuT3GCdnpgzYavYLsf7EonVUQQ7CoydcmjvyRsQdAGgpgQw3E3vsfXzTbK1dSq",
  "key14": "3oBP3yEfUzT4QWp6FJ6qXB3k89RiCpc3YUDXXqsPQTcLXKejiyYK6zT1jxdWr69stKA6DQu9eNFjPozmb4gonLiW",
  "key15": "35rERB5pHQHn5jFLZ9NszSDqcpExCt2TFK1CggauhHKxU4CwGfCLEYc17yzzkEsG3zPyZpP9yXSSvs23ZP4mrbBY",
  "key16": "39qG5FEnimQGbEe2ubpKN1ByiFjBAYkcJ27DFttker1bLh1VWzhNtj9fjb8RL17QZNtysSPT6jezSUqaJqThCegA",
  "key17": "s7y1hKSKqsxceBU2V1byD1VmUunYgZnwaGjho4x73ysKDeNFCF6aHsHfPwYwEuXsQj4zh3XQg7aSKiyatrLuGFK",
  "key18": "nke7QYd7saofHjhQUkG5w17mCLAQKnt5hEQJun3JPdKbwYzNDy7wVDZ8PoL36T1yggUXZDupDPXeqFr5eLmBxW3",
  "key19": "2Kw7pLiRzhPZZNPXKygZdm6vdCNtcDixZw9grxJ1HyNAGGvf294KxEzZqPh35WHtYUG4TFwu9W5mHsaPs8yrMgun",
  "key20": "3Zc56ybSySCBRNqWRNX8iu2DgYPv8mtwWNL1DvJGViiY5DpVr3Ut1zL23NnRX1X25K6mZYoGNj3rVxz4MQ99Fh5F",
  "key21": "2HFMU4fsiWihYWr3sf9jESa6nDpTu1v1Wb79jj7J2nYfLyRPgWAh98Yfvo9WYHKVxg3Ah348DRbxVwCVCZb1aaRJ",
  "key22": "ENs6B2yRhccvuUyyBgLSxeHe1gYhL5RdcxUH54nSfmeFxC3wmquVTfPTjBqWa9dVKhANBX3fw9WJWEU8M9Audxu",
  "key23": "fDNvkJJyXWWrXcQPRK8KZCdzKcm43a5eCXiHDACgqXdmWtYbcasa6cTP8A7mYtetaaR6NdwbgYC9NzXjgLCM3LK",
  "key24": "YtXhJLh72zHEnBdNMUW9pMiBmWahTENMkP7RXMwy2rqU5ELJUtQf85Zo4EPccnSiDBcnSVs2aDWRCKPQxJZYaqQ",
  "key25": "AjnFmKJUBsb88WpWtAzkFRHCzF1x7HaMpDfNTYX788D9NYGWnhqozgfzcJ6EYJatHNtzEqSXj2q5XQRSva166Nk",
  "key26": "51QYHsvmcHXg5nJ86YuDGGCVb62zygfsEZTrQ9pNFKQu4Em3mqatCPExS7z56W8XH3MUEFCdaJih9AEHAHvw2BUK",
  "key27": "4bAxNgcbqbcGa2DKxYnn2aWBtYKiM5EM82ZcJrgHnfrS3exWN2v3BEVz5zqe3KiagWpjW9pSjNXyGdYRoCyska6B",
  "key28": "3iEtiGvJW6M1NxfyWnaPiNpzFp1JkEJQCJ4kjv4Lw8Tj9e6aD6RVvPNLmJVu37qCpbQDJf19rdP46nuNSDeyzz9T",
  "key29": "3prXdgHVstcqQXcVoqUYaDDDwBxkfprKGmTp9mDLcm4JAN7vMbpU4mycZZxz29d3h1VQXMjMiDVVCRtRab8t2K1T",
  "key30": "3ZQxtjMh4p5DcDdALkc5g6pRHyBM9CLfX65wx5b5W17MQK4RA9VRBcnUWRZZQLXruwdNuHk718uhkVLLUD3eN5R3",
  "key31": "3RxcRmDXdZzCZ6Su6TqnhEB4wC8UuQ21Suzbex2aqtmCGkccZmzL2bc2vPmVqsY71dLhKmjor8fhiGcRJDBrw8cA",
  "key32": "4SgP5WLrRHt9ReMLigJXSNZWqRLH35K5teZMKHCYF3r4ddNWFtv7krSvkS7ATb79n96FU8JuhYP68VBy56zoQVBN",
  "key33": "5WDaFebZCBHErXx8cjeYRoH246zcGEUz67VVPoHfopd3yK1gSJFBogkN5YrxEJYSS3LkuEKXyQXSjDfzF44ZwHo6",
  "key34": "3UcsczpHpFzjgBNchbobuoRdwNjA9iHKcbtok8Xsh51d5jcrdNH1zPgPkwsSBee5p5NX8Nn6oVFa2sQzDG4H32YG",
  "key35": "GrEyCzVVjcDWEFDnp1umBcQX5SWxvuoxhP2oQFuu9GnQg529f4mhMgmi66GgsdbiqP8QQBctZNWVHnsZ3G1xS4z",
  "key36": "2FSnjUceKqvoacu8p3A7XcYj7C8cxEpVDGqtvqA2xuzQEzmAAUfwvnRm5mP9CrT2x48r6sZ7rw8aBm2epDVWr9NM",
  "key37": "pSobwaAYQ3hrwjSuDSsELoHp98XX8UQMNT2ecc5tsEApPJN1RYY1xMmZj6kwjDWhnKDsHmt7RNBUywFEMjqngDE",
  "key38": "4iKfdLPrV6SEU2riiVhAPvjKhSiDD4jsVgvQS6LyBeZ4AuTpxTzLUyqdPZzjGTsKdistarNozLVecBH3qEyFqFg8",
  "key39": "5giLoDiwY3RCdVduD9otDjSCjeEXnmNSEL1HiCZsjUA4SZ838yWPsCk8Fjpbh9pzWfh8ikYaavx746BEWTGDctLH"
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
