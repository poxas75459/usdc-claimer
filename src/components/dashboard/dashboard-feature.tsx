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
    "4dkGPf64H3Vr33rtKsAbp74r9eKrXdMPcEm5zdrFrtMH6y1hi1EUKYqhxKwG3gcKAtuMu6nf8h6TAWs6QKpDzTz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4buZpPWp5z3AywT1v6NQiowkpmv23nSFDdwkpVY13vc76u1wJZCF1jnmQMTQq5eLoRygUxbswYm5wWoFBD3TtFEW",
  "key1": "4wbD7kGDhVB7hfg2FXumKJYRwQE3rr7tsCY8nhWpQSxEZ1tTbCPY5n8yMBGGt2drtC1vdXhDtFuW46goC7fu5jNQ",
  "key2": "3TKncTQ2yy6XviCJYZQiSSDQ3t3oeTAkjHNUy5yQ9NMMW6eMk44Us9LppZbv2AFhVSpvamJmBpRyoDuSpEBwf8ym",
  "key3": "2Dby9hSzSKQo9W8VoUhw4co5YFDGCsAhQ8WUaffSxAjCwXKq7vHNv3miHDrBFTyYaM9qtyb6rJ74jP7FkqGT8aBL",
  "key4": "2nFzZ2dxecDwRhcAXt26gsAXuKpRPeecmJ6hptzJdvBm2qf12NmxacefjpEDSH36KLrxCfmef1MHE8RFkDtGRgQC",
  "key5": "2SbqTkshx71CSuXnQi8PhoyuYR1sZdkJohD52xXTdzm4j8GSBSf8ebQFbzexbdAiHodnewLojvbVEof2WGiWg3na",
  "key6": "4quer1aprpWwpcuThtZNG7je8L1xzMsFNvHHqQ1M6rb96MXxUjWSxVzZXp9MZPxdR1Yop4NorRm9gjjTVzK9GPfQ",
  "key7": "5NUnu5woGASEtxL3D4sMEnBqurSkwsqSFV4bpKuqVCVNZ7z2VHBwSp3bk6B8ZJNDFP1hWC6iBZ3dhCtkNM2Bdmqb",
  "key8": "2Ku7S2QLMvWoudE4ESJiRuLD3hULj13DRLERogEFPFoumawpCk8NjovXed2psZYRw3TkNFjiBBVpJWhLqeDdYqwV",
  "key9": "bwaht7kd8VGXdJw7y3oZWycKoA4v1FizdNFPkWyegcraUFfkafszoWnPgtyyW9S8JxhTP3dpJg514YpLL3gYAzG",
  "key10": "5Xjw9zyxwyuywYNEBy7YQdzjg2uknYs4azcCNhSpRXH9dQaP44wxMJvu2h89JvRBJSi7GH2FS44t62ofFdNRjcqw",
  "key11": "2zA7oM67gJZKCWGz6UHYPTRQj5bVSbt8mQ1ZtE3JqMg7C7hdiBmf2bAfNCSEV3PrbT44h28mAJpgrEQ8qJcne2LL",
  "key12": "4L1MYFzTwZSJfR77HTmuFhGx21AzvxmNZGpzHZEMzN1JEXERMPbVPJBVhUhs7tNpUeqkNsKmpNbJPYRgQxDE8tdf",
  "key13": "WtBfwTRtjrViipYGVUZUfffatvgqWgGMDRPRXeFtxJmy7TnxBgUZ7wX6YBsdqHNryd8Z6UButY2syFVR9RwU9yB",
  "key14": "5UAKoLgFpfEpgYrJdmNq858rywWfgZfCV6pFNRT8Q9BByuMNF4nAT2YMs6dXLgDnDgsn1TmGrEP7qFyfKwYvikhz",
  "key15": "3fqeHa3Z7hw1cEtthkRbAJmVBbdCdKPxTFzwCqJVK7fJSvbrgJuExQ5YWGdXw1HKEp1A9pFpxx2ZLWVfwPrXZURe",
  "key16": "3BzgjHyJZGYjaDheXsXAce2CDpbqSmJreBE5sAczxfJ59i87jvKyBhce3Q4FcmT2pgnPuE2rsD4Py44JupfzBNbm",
  "key17": "5rMKfTRdBFFtEgbjhDLUfpBzEiwxHozhKqdfonVaTJGZ6evnGd4jjoR4J67gMoPBkedcgRk52tPzS622t9YXnqZw",
  "key18": "28km1i5vfBQTn5736WsumEnP5ysqV911FU2F2QfZu2HqdKZ1ekqzrh54uL7pS5phjJqwNnzrkQcDhHkr1qoqxgJ2",
  "key19": "3GGQ2JdCwXwtwY9xpRLzNCSaZPwRaubzP8R3BfP9JtEWw7Xk26CW7YuGRcYA46pCP4LSH7hUL8p7d3c4JZRvhFgx",
  "key20": "3c3uAPwcdpmQ3i3vkrGfW9bvqWqGgmLac9BG5xxrBbx6bpYCHSBkrqP4NUByJumkqKfJE6bAvfbzLAqyAGdsyKU5",
  "key21": "52TnbXmDc8AAdLwChZ9ygyXfkehES98hyejzhuHEGKbaxuZTtkSgG8eye7yjJMD1gtdJcZxiQfgmMRoNSmujy7qJ",
  "key22": "4GgbBmpCH7Gyy7aiUpSLcDcGaxNjmZRz1TRcG4Hyvad8Mbo36MBF1U9pZVrth451CNqteoQjqkKtuSdCbaim9Rng",
  "key23": "2sx7Li6wk4W5M3y4cCYiRPMw8KphQx61W8zmw8rUiyxdNcuoYgY5BmGh7xXojYjunHQoAkYCjscxw7zSL6y2LvxZ",
  "key24": "6YhxxEuUneiDCr4HMmSdgCuUffr8gHHBmq4pxysWyJMTHL3pxJ5r7GHRpWh9cUEQbQFrT84qky4BjVwqXGiCHuL",
  "key25": "41c7HedKzqtR4X4s6L7a7aHxhhfG27G6CTnNuUQ9ViScmVwTahDfui9tP5LZpisXb5GcmSXHGWhKZg5SJghcS5Wn",
  "key26": "5ySw3w2gUe4iagLZynahowZgvg3W7kezpvTR2Zn68FyvChp4a83Fr8AHCqhx8N9PafzMr5LaRkpJ6VeQSgdPPZB8",
  "key27": "4uNaEJVcM8LHPJvYSZLPmkk29EuDshttnrRsNz7GWaMrfczawc88Q6TCxweoSEiSV4jS3vrHz8hhYcgYd4Y9ETNA",
  "key28": "51WPSaKPEUdsSJUribaW1gxoG9cezb44bacBbzbqjEwka6iRw6UbrSdTEHCkiFDqLpTpdgC6DK6iB51ifxTts6dj",
  "key29": "JCdbAVdk72hNV2LLb9CsfE26Rw1Cfnyi5nr8X7eYpb41FjoyvmgYGGaDeyBnQVXkW6NYX3MsHx4Jw8GW8ZcrBgJ",
  "key30": "2EqJkXqVvZwwgi6PtPYTbKcTs7LuUyrAmHZJeTfqAjr5oVFeuU8gVomQgk1r5VjWyZgJvH9tmtdxmSaUikQ3YDg9",
  "key31": "3x3CiRZ1wpw9AEEJBYuR2rXiz6pB4XPBpvLrsgj3ZuUATqae2XqNsWnJH44oEs7vygoNdWDnpQgRzMLXjNoXmjpc",
  "key32": "3eSRdBMbm7CDmrv6t2XgZfiyv97phMtdeDQ3AYWT9S17NwoEDZNs87AjWNCNnCvG3qGHggtbGdGSaDWcMGvieGbS",
  "key33": "2iuhbwFCN9SUxqGGJ6g6eRnayMv3abZXyHVWRWhwAMd8soFXNwc6DZn5WfCt5i4pXzikEht5rBq1ppfhWHJfKHUy",
  "key34": "4gKo4kUamxJLaHqG1PCtEo8ybQryMPqNYefrrgwjcveZskZ1WyigELbm58HGhwdTYBjgG8U9tQpot8CPSP6anZbG",
  "key35": "58WGuxDKsK1Ue5QkmpuRHryMdoyHp5Ct5iB4jWkPwQYJPvdFNCb5W8kN48xP5H6knoBwtpeXfCiG7AkYa1t6Krhp",
  "key36": "3m5R1Q8q3271wVigWHVAhc2sJ8f4ygXQrCUcQPgf4Ea9CgG2x1J4TrB52PJ14VZEyUfDp1X8w4wutDEzfPVSnXGx",
  "key37": "2ijeg92RYEA3B2CXUedwnazzzya8PKHV6zNdLUuQPrUqFftmpJocva5BpKobBg7uxznQNkm8fuAWF5RZu2Ff19Ac",
  "key38": "CKkgysiQZ18MASPXe7ztDihQCJ9crLTc6yVJ35NBaxAy2MwTUBGxaBbkmGFyhfHjFNXLqEtCtBthFrBPjkEuJvy",
  "key39": "3xJ1iv5cyH5krtG9C1eiYmGCE6Evtaor9ofv9VKFJ1YbzeiEenETjj25hkCiEvjJHRK17UcYQtkfEsiV45KFF9sv"
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
