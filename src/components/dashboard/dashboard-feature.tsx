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
    "3Q3kArEmLi8HEg33MQCA1kRTk6nW8A6nBy1hLaX2TMKXMHCtaN3JN63YjhAHMJJsJPvBUif1QyNXK5S5ZGM3duvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xGdGtgo4hjSR1ee7uRYAXm526QAzMBMSx1aWhoCXoXKdPneaTnMfdF8zMJt7vYPPE9JFpHd2TqM2es2kkmnPBwS",
  "key1": "24W5Tv7P3RrWG6oDPd3FFpi7q1uYWspuA8JV3HNP7tD7Hvof1NEevjvGSumvfaozEz5F1rEgxwhEd3kvhNwWW284",
  "key2": "27M7d4niX89oWiNpQxRPniqSbbPuU3iS2vsmBR6L8HxkQt6ia3yp1ghFwcPU3d3ShQDTae1Vwb3z2xMQV8kxYTSB",
  "key3": "KfNHXaBXND1VMTRKpTtWLnZ3azmjjSDNojVfrUnpXRLT9xTfrLT8J4GFh4NVjKLFXagpsAkw5HAL3SDtC6UVA2H",
  "key4": "2KKpx1xPUAXTansZ6QHdaqA1SKvpBoaTsYCDxPRbckFJnydZK8a7U2H8UBzX5TgqDbF5xn2is8bSSbzTsQEVHWxc",
  "key5": "4Chq4WrXp8mo1ajiNP6VApY7kHX5rP4jfBpLAn9mq6dc2kbFKBkYzVwqbN7aWbud9kpdfqPKj4F68nEgXKTm83Tv",
  "key6": "2RRSDd46mETWoJ7oBCfwZuzDfyywqwns4gcjbz418ZY6odAyA82xeLmFzNDXqoy1uk9KpvVN9qrbgD4dgDAq1RGg",
  "key7": "5WrZ1iDTtSnsz11iNcbdGynbybeAUU9hxgSmD4kmoLZTEPZEetREVF3KTrgtvD5jyarbxZcC4JaLmyTkXpzCNLSM",
  "key8": "2PXYCu7sXiLCftrHHEst4aM3WHvrcQ7PdiJzGR2vBJg6xozwZnbuFDwL9YHQehk7yThagb8YDwEqGr6txJ543rND",
  "key9": "2TaiYww53MBbySW5ofXmDLKnkPKcATVATmAwmJUZZ9YT18DhBXwgU5hycNLocpbTschaG4f3eqofZs6ErYDdWyCo",
  "key10": "4CnCdUZqPMfXx6xw4QkMBRrqf9yZsregh5CEtF1vn3ejj8AwuvYPSuWBNFhQU5NiCyYh3sEPPLUJJZV47riWnjH2",
  "key11": "4Q2cDLyapb3iCUpED4RTtBfsiWD2tXx5aSeDEE7VZMwrqL7NffNhzqZFhQr7PqsL1wWvugupYTNRprpJczUPFNU5",
  "key12": "52vGMq75eJ8xiGqBs8T8c6YoFgfHMMPtsp9cdhWnh33kP2fBmreGvJ7ig5JogTU2RBszNRgL5oLgqCVmDNM6H4kE",
  "key13": "58jgoZ2BVKioDsRasnUECS7A8SgjBuaHyoUogoH5Zs6wFbnuxB9XSonz7SSUDnfA1eajaLRfQMxyMhMLAmE9kwuf",
  "key14": "568hccBWa9kBkvrWBiEAnXvQqEuTLneQJyr4Q7pop84mWu1aqwmVZPCK9LHNUQLXduvmEdYxyoXJYqcCawqTQ3GC",
  "key15": "3LXq9ng7Px4o8XoJkpBmyiBuTTNpx2SoP8bjDNqm6qCgJu2Q1WBwcbEDquJ6L5bQA5SwKEpjMN6s8KUdbvo7vuuH",
  "key16": "5yyWFH6p3rgwSvR2hn9ARMM8zHre9pFV1zzaYnEM6bVhczbJ2fgZSNJDo9npCRahwRdVRxXJExReYYFhZSHuxw4R",
  "key17": "4wfB2pHeqtNaw2mgiGzp99RN78cFCAbex36eXvG76Bvys8LMs5Tcps9KKkfLKRGs7szZ1erWrds3rWmYrd5xx6ci",
  "key18": "64RpFJ227pAz3DW1RAtNKS3jSTXC6TJrUAEdWnNMCP7FuU8m9baeW2ZvKrWgZai3MbpQ8GwiQippEFpmX2HMuEa3",
  "key19": "3fVQnMdrakgrVvqXgtp78gMmBcsjazeXCmcsM5f6VmLEvWR4Mwpaq5vczC61yxjaKc8CrvYzH31ruMkNgbVTMWKC",
  "key20": "2Te8UaSCkr3g9GQR994khQK58259WE3NvtaARWR1hjYfsz2yc74wYGqEWxxWTGmu7xJSKLtBd1Ca55McvdT4vMWZ",
  "key21": "2QpDRBNirTRfPbmLbmHU3jGH1udoewNFq1a93GrBJWjKNNs35EnVtzNs998SzWK6C36GnNVTfVThwDrU8GRBq5Wo",
  "key22": "4cRBSJUbEpQFPf5mZwH8Ht9pZxchNXWV2PmWPsMhzAjyxNn1MYxPaDgs5e1z1hzWqiKzQkQSnB24Z9KfCGCDCxW1",
  "key23": "35PkQFod28VVvEMWut7rfQdAJkkPdcFD5ck64ovx8JhNV8iD4WfWnFGqm2LzaocX2CzPk2YnWGmtvoN3Ya9gQ494",
  "key24": "3ygpUCYmQ86ckZSwXugaFTUG2ZF6YYdqiBfkvTmhLnokJfLYjQoRfPUQcLEkCQaX7foq1JF4ZkBTAxGS8F9D2FWJ",
  "key25": "r44kpzZHJcwNZUzV5zNpYtGFtKhCD3hCX5A4fCy8VVq7S2ofSNvd3NzbWtaAShUu2eeRHgm52WMG7pmtYFWEsAN",
  "key26": "5J1qgK2ddw2qbGdTzjexBbrrasc7GCP6TdFxockZn6iHUBS9Jr8ud7EujEWwDxakkvzXDnvk3tppthibiKspHpQR",
  "key27": "5yhvX3c2iWcX8jzYSVUYAFumg4bzBwxECE2RbpTcswpyrJUXeVqbpX3HvBi2kD6jALLbMQKXmtxfKHe1dkJnTDM3",
  "key28": "5p4grhRtRAzGs55giUhcikHuEt22nVHyVMjwLtFfgLaqmWxsbhUkSMrztYhLLV1TJhCeB5SZzMoU8kmypLydzzCJ",
  "key29": "J7VVb3D7gbjGftU7gdNJovcs1Ujq8JmcT4RsTHiPfhSnE1iymVwomvJFGNh5QqxLMM5gRiHsecnLhQtxyTugSeY",
  "key30": "36YCp15JPjkmNWZZYhtTLzVY1NbuSTW9RT5VKaa1HYGhbR8HBELTsqsed4iw49Gt5RsyiJNJFoWeEpZgFqN7X4db",
  "key31": "3oPim713efVam2NB5NvBNc4DcL5JQ5fTmdq1PS9aQ1nu5wJeDXG9e9RkfLRo3DPjNvp7rS6tWtTMnoEdHcoun6kQ",
  "key32": "ZsdPhdwaNSjzePTk2taPPeszpjjfBQyReDX7g5MHG7StVstpFbYAG9tWmv7MZk9YQMnVxwBwxzP324HiXLMZ9fQ",
  "key33": "o7oeJPJVq2eD6LLvFdNzyAU7YMYWUwBhanYnrviYQUcXuusRtCVzh2rpiM1G6iM9o8FbFARTis9cNhr1eT1y9wz",
  "key34": "2iwaqzLFVqnGQyAamhaPfCoFzbduEYH4KNKoMZioGhpLNAYuFXxaGTiCn78RmaZwWw6EipxW5vRu9oi62osdfT1g",
  "key35": "3MJVnFFazzR9JQasHfRnWVsWWR3mB49xw78KuZmsK3T6Q4jpHzPxPp9SKbpb1jScd97DJVn3TB4z4RMBtexdqEz7",
  "key36": "66gYHfBLqqu2DjvNH5nYh6Cbobz44TYRGMVQPZjUwAtNtYfkqzesyZTQzruwcau7NKHbDiZFQUMKRegUovX4Cqhi",
  "key37": "2tDWn2S2s2bAnnNaHQncWsaixLUhMr9BLgAbgJkotgUfS29rpho7oSG61cJazesYix4pmYNpDUAbyPcEXuwC5Dux",
  "key38": "21R5vXHUYBata7Pi6CVMdCdarvnsYcnT4J4Usq46JEnbVevcyxebbNpuiepcDXvqfvf6bxLvZ8GyCUQJJspUfKoY",
  "key39": "3FBBDDX51R9wALsrSDepuF9DCcFzNaohQYtj34vSXP9cupW7T9C2ZGD4gt3Aybg7XA98iK729PWbQ12Bht774y7v",
  "key40": "2GGoSHphm1TXff3eK4BpLwP6XMnvp2BGBKJEpFFHDzzGdQSmJAeKwaxP8Srs49WQogJWvGM8CobVfqHZxRJB8Y1V",
  "key41": "64BotrGYeXqrx368DYTYKwqRShfnjoKoKQRmtuBjNjd3CNZw7oqUQD5katsNwiAGhm4nVQUTAzPrngAJJDTL4C2v",
  "key42": "4UxpeVyXg6dfsbBpJcixQF9eUzDHLgvfK7SUMimBgQksyjtZHn2dk1t7iriB9zFPBwg5qzHuoztcqfGmKviEJXtr"
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
