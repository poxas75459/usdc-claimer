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
    "4GcaGQtzMrJgc7BmuaQ59ac2ifgJDu39GhdxADxLMnHpekzsWTZqnXDVs1hVcEPzmFBU4zzmA3H31fQJfWTpvEXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mvUyYFvtRRqrrprJKcLsj1yrytEeGXKs4WHeimD1srGmPDY8N4tqbvTqRgzDgyJnPNyW4oRb65mEyK2fpHuEwLF",
  "key1": "5tXRtkjgiLXApHewdB1nwPWdWsTTG9Cef7K2m8yK5WY9Uzs1YVKa8s3V812er7myMFw68FneMHeHQrPJM9TXgCxd",
  "key2": "AP2fTGSWpturWyHLDnbgnvy27QpCcHGNGLd2N6BeH6VtQi9MRf2vWBBG6kRZwgDGJSiB6XXapdvFfD4QoYqrKGo",
  "key3": "4GGFMfRufmYU4gkE9fA2zbbwpvhmpzWpCiJ2edjykcEVq1LuZCeNbwVaugYtcUidpyg7YvFY4RgAx7T6e7Wxkwqk",
  "key4": "3gzUgm1VQKpGAZBrJqRoM95GVAcZubL2GAhagEXrfjcEbSaGhExxRWyWgnh6FcCzWkvnJX7SNmNK4TvJMg2nn8Bp",
  "key5": "mVHHm2pqgij8Hcuv2MbZwy1wGEdVUaknxxSR7qrFiUSzmzD9hSqkXmq97qZYyVftVtJNVvn5uu2ZB57ZDmv3w1X",
  "key6": "WYvZF7aUEYPj91j61nHj6YdRtoouuREj6ofep1fiCy82XqGtH1FuRvEf5dZaAzFUy62szsw13VesutoDanhqSe7",
  "key7": "2GoVjY8GSauPbUKszBAaN6H3uLf6oQAEhb7ouy9zhMWjsz9mXaZrCLBHkenmEMMCBiqgnBFjMVSeoLBxEE57gBak",
  "key8": "3eQEaiRt5wbGarmRBLarqS83dds1HupbnAXvC2c3F6H6NoYY4uh4sk3nGEb3rx318NfjFYDyQX5x1CYoGtCrov1S",
  "key9": "3W4XJsJ5EVHsVH2VtrGcgdfSjLhr5Ds666MDPoNin2kNkLijEKztPi9DHxpvALFUU68eJPFn4R1pNEat3DAKVhT9",
  "key10": "J3FC2JqJFEohog8YehvF48CpK7WTCNhe9rutwXzfmPU4WgjRvgQN3fyETxoM3N7fLgP3gzy7ZCRmejdtXhaE2ia",
  "key11": "MbGnsojTXndqgtTd57ESyidvUq5cS5eeJTGfQiyY8frAe5hgLsEMBo3e5peJWRPVX9wXPYP1nCHjWHd2PonnEF3",
  "key12": "3Re1TLpZU9KzKSYXRwqinSZ8Rar5oW7fV7fwsV4B3UhT4h5fWU4U8Pgax6iJVnxPcMhCjHheSDCLTmaujQ8K3RhJ",
  "key13": "4cKfq9Bh12UL2Fmd9BY9Bb7hUVNWFQkJuGBdzN1xDetsZkbmMqvGUTCtyaN6W1rqvvxftnRVNHvdT2d9j5XqdZq1",
  "key14": "5aSdV3TBStE1Dof5Rkrm7gBvVnvpADDu3U9UDhnMurouZKidsJDTaDh6Xsv5wRQHfkFcwby9F6x4rpk8iKjoRxC4",
  "key15": "5maWDcCcGqhYB832zSkdXN5KAqmzeE56biaAEszK8BN4Q6fXq4Ls4d3tWifgX6CF1eSoUpvpNbyyDoPm4KRqJqqe",
  "key16": "4NLHYRiytKJJS3BTJDmGPPXm6tpV1ihDWD1RVXZx49TcW8v4jzAi49o3eWrnj4cCs3tfVEtfKuUab39zpeX3Apzb",
  "key17": "2BMX2T4qTQLda3tDxkjTENqAnQMUSE72YeSxLGL71FkPRMiLi2K1P1xJqGGp91M4RDE58Yczxf24zUCjjcGQLVmr",
  "key18": "4Y2wQXQn28P5v9X7FpW9jTzv2T2vygoio5bbpuH5DGeP5E9bBUec6gbhKUpzfSSbvsWMeNSmzzepyJfYBk4yKgx3",
  "key19": "4k8WPUXH7y4pF8h3ttwEYhHBun1tQJfUAv9CKD7RRn1bPpHECk926sWQEsWXbveg1yf3uVXvKK43nqPTCAsAmu76",
  "key20": "4wxPfTQqjHKQpc2XBR1Wv7vbp4E4v2aKBEb79HQ94rEYeBxLpTHLHjMccFfrkHvK36Moq5JhjuRtE4ksHJCxqW2c",
  "key21": "PgqeYNAS5iWTsMtezt5c8RoRmBzugLqDrrja2duhsvbaght4fHr8ywPm8STD4LSJUgoQAck2JJhBEHZp6K4JxMd",
  "key22": "3gAraDbpV5F9Gutuhh2EpZR11iLRcgehFjBZa6JECuQzDgfHSE55F8mza5vZQiQDcKFf2Hvgg8QizP4GWspkaBmy",
  "key23": "3pjxMGkj6gKMdp1QD7MxQm9tTAYCrGc3cQA4rQkbyFTPfHqaS5jMuPh5Gto1UCk2KJ56nBqV1befXwGB62YPephU",
  "key24": "mpD5pScWfYWQ4yfr5hTudKYmnkj9jm2tML6rHy7GFoy2c6UNX8egKY71husmQhiFsonNPCikgRbVEajedYgTT38",
  "key25": "N6PzENPxGQUC4mfBbDwXtHniVVbvb4eM54GoPcfYUDrsNRzrykuViXF1Eyr2RBtGdtUL4qgkBBGxgDtbpMQzdX1",
  "key26": "4S8UPMe3DNuF1k1yycvtWK8aXihuiMiVNTgSd8uUbk6NpD4YF3HGVD7b5P69yU1tyyvMWQLNyVNfiiMyeaBBoy29",
  "key27": "26PAerfti7qiR3WvCPNY5QPvRtGD4vZjYKomy624YjZSpg1LVWptKHQu45qLQLz5zgT1mM6Yyex8WCz9hJCGFFSp",
  "key28": "djfiucWyp1CGGV9um6vq38NC5Bpn3ZcQRKd8WAMQxmxPnENeKfJVACxzJUcrg91GUgr4psDcEgQn2aoY4BoE3Wh",
  "key29": "5QR4TN7wMmHtzbwEVm894yh55Jz5nMa3pTfLMNQuHNA2Hvh6EwYG13Eh4S78b2WVZL8dXYoMmZ8Hmj61ZkVVzFf2",
  "key30": "cu9Dg6hJ1E9qKyc6JXwKsjKhVaBkJouCWy7emFwuMrYwFmD8ni1xq9hk4tPZLduw8j1o3s4gVTz32dVx93ACkji",
  "key31": "vPbRppnUdPCvmppVqf1UmhmqrscYThbnb5SDCmNmUBSnqs8DnQ7jVoPUnCoVJvctTPdTQgwq6PCbjvDW5k9jFb1",
  "key32": "3nXT2fozGHkfXSFurq5wvuqQqZhwNxG92FxmAfb8Tr3xYWj9tC7gAzZCT1hxLaUyxLwJfhawtyKnfAKMuhxjANJD",
  "key33": "4VuB2W59FmuhZMmtcGjChNmv76uJSvG6jLiHvrMPbLkPZzQSHG1rUpzqQQgbvRbB4BRPmuaiyrJZigfFW3ppbgVS",
  "key34": "2JUi4RNPZkS4mnvhPK8uJVP6BXdkSubxWpAigvc8TaX2sSPHQviLDX8mJ3K3VwSPMDiuFzbCPK5FPAWiyGrYjoSH",
  "key35": "4w3yuCDAPtZUeH8kc5McLrToFJg8epsiGDmGQKdEjsxvx5134L688Kji1xqXZYn5MZyQT3hiNA8ucyVCy1C7SrtX",
  "key36": "sPMMpsmMrhga3Akc9M793nYvagQqiozMy3kxj1yCJw2WQnrVeyrdocViemPH4ug8MszSVQ6jn76nTwu3hYitVJo",
  "key37": "5wCVh3K6oadhd6AcWsd9n73nhMxJGJXNM1fw3Ev9BXCosmPiFX5tS1PFTqSq3vJDtD5eZzCrhiCp4AHpnSSQuzZY",
  "key38": "5MrZNPFtQY53QnQiFz1XAM67jYeUrGqJ8rqKQxt5Bq4vCncgmAKFgX1m7VTARwDovxJGTKZYxKtvfw8AzLUA5NkZ",
  "key39": "4CNNWwUdQpuf9hne6haekc2kSrm48YD7gufTSEJ5dPqafo1FzdVMkVEtyiXpePCh2ezBDfFfU95F9bTyuk6SULap",
  "key40": "25LnW3tfdUw1651Xx6MWEA13K6EjHYakASqW8qehpBBYjBrgX9ttLnU6tuMBJQUvZJZ4r1xzNvgXQhE1JPj5DB4g",
  "key41": "48FKMNBHpK2dUCbBFm9Ta5VNbpRTj2hTsJCSnQs2Wia7tdkn99MfvNhw8QJMwuAJjQupJb9LChjCDxTGkvF8GkM4",
  "key42": "7g7UCxVffvQwx55SwHifWxEWhhgPK6fBr1oRXrz8CABcTaVNNxPPQFxJvqmAzc2Mk1ki1Sih38uA7HHz6x78s67",
  "key43": "5GtsnTy6p7m89G5LZJArs4V5Lq2J2XeeNRiDtRDN6A6ZTEKwcmhuyUvNzF98CBF2MEn8XveywEVVKLNihT4NGGcp",
  "key44": "3UA3qpWPtErwg5mWw2DJfp754RvMfso6iMs26Ga57DKo9govgQeED9SAgwDyKm7CxkYY8JHjorkhuTGfzeEgvpd4",
  "key45": "3aaZyzsKKGRqDMSUiM31ZQgahrmuFFMZyMRTJpm4qq8bcUbJkA9tURmm2jY6VZmSqSfDAGF9VnGaBqCn2XiNsi8L",
  "key46": "3LKmnfpDDkYnJBfLbiYEBQJ8AJyDMV5NeVqhan9jg3kcTtx8HRqWRY6VBgbaAHTAS8Hn8LFw2ndLCHCyjJgwFSA1",
  "key47": "5Ptbyuy79ToG6e54DeaWbSM6yz9sNVNxYzscSh8qh5Gpr3GZemzNQiVqjFtPbeDiEPvgTCYudFbubYm3xZdFp8cK",
  "key48": "3EipzuZF3vG8CCim9itgZXUecKfTjeoagbbbRiXZtxzBcvX4gDXpggEjTqKACS2B8mYKsZAQYtuWSytSRi4RcCUM"
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
