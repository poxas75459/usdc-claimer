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
    "2fpWs2mACm4CiNrgXcPdv5KaZCtRUD3aejbrJ2AyXrfiAm2xtkP9CpgnZDpCaoa9YzGCnH9PUt6Woa4HcRycpvEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ijsmJmuMh1oD931fFRGh1wjrRvbwm75CyMu5JJ4pcWMzNZ9wnpoXsPZHPinJ3E9bT3Em5wL3XMDdPeHAZ8HhCvP",
  "key1": "5PrjVHbJYwSvRQLnPcsdff58Jx83ue3eczRaeF4zApXsDpKKNBaefhqmmisDa7Gv5eeH88YQvZEfoSoTGv1kSrMR",
  "key2": "3kGu88kwbrXcBqhM7T9V17R28KgJpS4D7EXnSiVTENdA7EMD6wxE8tqtK7WUMtTsQn1VaDgbXm9bj2Bkyhp1yujJ",
  "key3": "2kiq61Z7LBPHUMwMLTX5v3Jrdp6sR5FsgskyNnPcbyGnsoUw1YkhMi9EdnovchU2C1sm6h5BXCvhKgeeVHq34Nft",
  "key4": "3rgumUw7wTcNSz65ziUKd7a2KSUrXT5r53KQsGh2hqsqaArWaVYMvJCtUQ3sZnxKrZjfzQZv67odQJcCwGv3AxS3",
  "key5": "2K2LVuXjLWKxNNXtCWDnMmsewZz14VGzh8CYWFfhigaKTVX4zmdkMYzz5Vgkd3wVTuofDhbgn2ZPxxGEYTzsSsSS",
  "key6": "5A5v9kbUhEp5fgeGirfqxCHdFJVBpe9MynDyWWNTitmGxagKwkJ1Wzt2raPB1VWJGAXUmUBkhARodGu5KdULu4Dk",
  "key7": "3mFHCaPd9tkaPCgB4w234REZmo2h8AH2nfbrx8gYYp9y8niahtm957bwcdQSRAbYggirmJWMmsm99Wt4sCWiAJhH",
  "key8": "4WpTaxmbAGNFDwKMUrRqJK1bRp6UoSKrGmzExSEYUa86gKPwSbTbpggyDpfDAe6EfsyaMd9z53NbPFF5jP1CtNNA",
  "key9": "4u2a5uCwUZhBZPqnqUSZryBkwTUYxaC5BsVK7XGVQqcS8wP2qtvkFHsvynV31ctMWwDM4XwmAYCznr4JhoKKgGN9",
  "key10": "28PaVN9U4jmv6Ym2ecUpGbTytDSNJHVcrHv4tZqroVfgoMD724Qytt31c7QBdH4eEQrKVSxdf2jst5EPFW6cyELT",
  "key11": "4pCe9gofNLmY4zHrbewoMjbxhP1EuVftFrKssUCs6tkwSfP2owSyANiLEikab7gKXohdFkm1WfyGonfZ8SkAEyN2",
  "key12": "5ZySefxDs8KqCifwaGGwML5vopBMCihmDKZWxRSrA44eE9CxZmjYY3VJe7oBVz7dYzY67rzbwQiYgQXXdmUhx5XW",
  "key13": "3rohwQxRkTEZTV1M2XcQky1wRRUNMHkoYZ2TH1GRQaM1fYjrssdshR2vShWxcxpNWA9X41juG73smTCViCL1b3LT",
  "key14": "65tKwaFM5rukHK3ZhAKYW98n4Us1Q5KefW1bGa5fnW6dta7fwRxsJVCbmk92Lju3zJH4dgkKipwny345Ubkhqpgo",
  "key15": "5U4T3PRaz6Q8DC8rbZFdUqdPwTgg3ijqseZuYdr93HNXoU83S2mWJYbNavqKM9L4nDGj2EQUdWKEeFNVZyLYu8NP",
  "key16": "49Pe5ca2bLPNvzr8Cd7YC7X4JjBJ2rbGjUcghUBbmpgbVdkNdHNEo8n1NsYub3a81bGcLy7K5EJA1FxSoukJCKMV",
  "key17": "sxsecTLckRHRZLR5sud2g8g4MZVhtqVQEqUC3CqkQTq36C95eB2ABcJETjZohvvTrUAC7oEdPFnP3ESFcXHthDW",
  "key18": "5YLwVCUfrdHUkktwVj371YBYKwxSSwr1XxskWoio7cWPnPkhz1DRUG28amZ8R4f8ydQJF59XnviBFzBsvkdGzDiQ",
  "key19": "528cNwYRnDGyYigYU2C91qhWLP2iaw7ussHAQc4RqGqKuzS5VVwEnc1ynmCEkrcXuKj8jBJ3nKkWWHFQzLtXYZfF",
  "key20": "3kiDtg5rupHoLTdd6MrfBLJBVa5Tmr9CLR4V9cE7MyKN4cYkPDxoaatnMNGFvWmpU9BPhwPLerWig9w6rizdGRxJ",
  "key21": "5XE14kHYotNLiMMkqq7rakbMqEh8ScXAJs3zxkJ9GGW7JKLwxLaLWNhvdkiCfDrih5irDRzYdp2erNZVG7iMoM21",
  "key22": "SbJZotV5FQGpn9x3T98qE6pH911JERFZHdeBHeVALAkLjyHvUYkhrmVZuYGqpdSoXxAsz2D5g4p4QW68bsxocVH",
  "key23": "3N5i5xFEgVwSipJ371NrKnswoRxME73Ko5h7E7V6y9L2E9t36Xa2BBPh9PoPvUUTqc3aBJnGwTpjwjuxZKXNC2f2",
  "key24": "3WtJUoXesLmptH7jUX9Pifa4VQBbi66i2fHBE8mifmhiyNenAVfmrStyMxgvzeK58L5d4Xx6j3RY9Qwu15VYhJU1",
  "key25": "47sVFX7Vjpp2KDmw77Sdm16LfnA6SsAqSNmLyvJLerCQzfSXomkueH7mjYtihBvDUE2MDSwT6ixNWLxFRSZstXy8",
  "key26": "4ZDRuLxm8BeuYdMm3eQM5rGJzZFTyxX6JP5a3pDohJFcXXRKWGjUpSgD9EZHM47i7yYbSaYBSN1QzgSwz7KHsoYb",
  "key27": "mxusTYX14Ytrq7qphRdfnJTTHJHKmfHjnto47nzTUWT79TLx25GxZaG7QpCYC7HqUPGvDuSmGPPoV6np8t4W1GL",
  "key28": "4cbVSZmdEcFL6dXCUTi6QEpw9TY7XmgVrwGrMMY7fVfRARmCeWZ27dAKSH89wDgxG9MXKQTupQP79jH7RRADx75i",
  "key29": "5yS1B9BV3ksXNtBthaGKnm7qGKM3BePGzdsVq4uqrVUg8DdxZnQfMz3JqimtNYV8S46tmkxgZzN8JSWtEM87WmLk",
  "key30": "3Ekhw4KBwUYnfnDebEijZD9Ve1xskWmi8sUTAtGww7yzMRJnTtweKg5ERbkXkLC8PXRnzoQeHm4CcU4zMQypemXo",
  "key31": "3oNEuXE2rsNqGeKNs8zmnnAUpbn5h6HQUpNkL6FyMskukmdB2tk6WikNi1vbgmKn3uvRAWk5JgW8UZUXHFG4u3yZ",
  "key32": "3U4THPeeRkf15U8N1PGTjS5hPth4QBoh9Nz5g97osTkTMQyu7mSGmU8bum7XvnBqs62FdYELqRyLBySf3B3vW9J7",
  "key33": "2sgSFyn8JVMfgpR7DjZhqwh12fH5VoUKMtDvohnCZirmYX7bYZQN1cF7uXybwPC7Pih52fSxN6S6eddk7QAp4UKB",
  "key34": "3K5ru2KxoqK4XQJEcncdYZYa3Bay9SDM1HXNiXoFevbpiK4R3nrzhwDvD2UABBPqcV2sXNkFQBTayfKX6B8aYb2f",
  "key35": "fpSh87fYF8acgW8V7wk9NeZRtp1KXy6efTqNHz2s9vySdysSqTtuv4Hj8BSCiJQvGuku9CL6jBEQUA4VXEBzpc6",
  "key36": "44pWsmL3vX8t9bbkSKPumTDenX9Bcen98DRdmX19nzWzQFRNoJzFH6qPNSbzdHzsn6Mj6mz1UBu7P5NRNz1GBe9Z",
  "key37": "5UpJXVjQLBqxVfY9JskdHiLtSXxcTML1gKUwCCZ82gaxRLcAQh2FYGTui1eRpf3LwdwNUPwah6WBkgxUgaYmAuRk",
  "key38": "3sE48FmpJcH5RuATCUV2oLzPbHWRF14iD5fuy6ks9yBYTFDSMXb2t4A4p5YUBVuQjAqoL75jNqQdTrVpiMfjawsH",
  "key39": "2jdtgXF5j3GMcs7Lq3toJvmVGBac6BdA2iY5UaZk94MBQsbJZmuV5stT46ZnastQnjoH17fU7ZRkr1icpvQbGzsr",
  "key40": "4GgKFA2fEdiD29SqsNqAcnaPc26mJrSaSmKADxXTjvVq3m4QoJnCNMB8RxvSmoRaArv2seBJyV4cEzwE1h8GpqdK",
  "key41": "2N2jntn62pwxck6dZByWgBwJDqBycWCjd4dVDckXbxTVzkMk4U1YAVZ2fRgy36yqn48ZadncpkJBW6dWcjMTMaiv",
  "key42": "5ZjeUqe8zJc6o3Mpkk23NUWuSCf5DiJiZwRfZqBuNE38YtY8KzHYDusmTV3C6KwdeYboRQZFHb1zxyaHtfkzraE5",
  "key43": "4DTZxLsxCKJEFRDfjJm1Q6CLTWMNi6H18kZRS3WsjjfSmDaDYUNF7aBpypFBRoL1UUMu7ULqZkPwtcVdQNmPPqRw",
  "key44": "cWwtFMyJdqN1srS3z7spkomgeFH72TWQZAGqHihn5nvh6gSWcknRmxcNZhpfALfyNdoXfWWDwRRAwuQwmwWMVnZ",
  "key45": "3krYZPYTAXy4UxaiDYwo57M91X12kxoytNvHPXLbXwngsyxPNxXMzdGANvxADNu4hv11GB8QjeEQQx7fqk6sfcws"
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
