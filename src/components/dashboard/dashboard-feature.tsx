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
    "29v8kYhkcv1jPr1s8oMe6GpXFG5hxKEs83sENXaqFqBpSDroqZZqCJpZwX6ZXBSJ4Q6cgzu76Rft7HKVhzSnU5WS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cq4GgufMc1TmuyxkPFR7QhnLWMcNtS6k29X81q1sWovksGcitzpr8w9mspUEbCiu1Sq1fJXay39hxZhA7u8kVwv",
  "key1": "4veo9kvMfjp8xZe3benEACno9FqvbeCTM9pncJiSCMP167ssQLuWSmdNkr5NPTz32BG6NE9JDsWmEbKEpJdVWkws",
  "key2": "TxBQhdqYEsM6pCQvgnoTLVPZwMwAS1hoFLW67MpZSjPxUYDv6sYEbdm59VfWTWFJQJpDBjkdsDEJFBD4NMwz6E1",
  "key3": "5JEDtUbc7W3RTHQGqCjCG5AtR9c4CDRV24MdtSxLDwct5165VnW8LfwqXpBmZwqN5LyCdttQBrK2YrdGSEQHdTZr",
  "key4": "67Rj3udhk23uoChezsUEh9LdcJVRUec5jSEoFcWwH3vTqeKjkw2H5kofatLbnxU2RQzKSRVyUpGbALw2Li6UTMcu",
  "key5": "3xQnEBz5jAy3yTLJ7et7wj4rtJuaSd1rEwgLMV3gwdcHvbuNE3vDoQXp19KBk5AFoGrLsEuSHJudLhG3zRgRHcBi",
  "key6": "3GUKdH9JuGETTXggmVj6jmXALLswzicJcNT29ZhffezXbEE6UWdh4vUWEGkwUctLxwLUVUi1p3ncw1TgwY2BeYUa",
  "key7": "3nr3EjXSjE8EBHCZCn2eq2ELcvFajj1ybgno2u2H8531BZn9tJWRKteuXJ6aB7CxYH7puMtACzY4SfbZYuG4TbU2",
  "key8": "3xxH2kEeewWhd4bFWd9vedJfQN35eTLT8LGU7GWACN3LA9cNtU2MUhAAKod3WEfXyVkfXPQQ8sKZNwMd5VMCMyGp",
  "key9": "neSPfmrHWWcJcqvRg2vMhfA8HFUE2wEwdzQ3ZKxR3ppaLiJrxx6deqTqNkhiNLPzuyxkgANsLu9kqhzsH4Sp2me",
  "key10": "4mNvZndytw6uaQYnA7QPB3jmdvRru9gJ9NTP27p5M4UKuoNiA5Ma4uxYFxNDqe8qDcDAdGJPJQP2GsJ4AxBbmNNr",
  "key11": "f7Nkm1r8ACpQnjj8Z1Eq68hAiocXnpsWNnH6jSnc2yQXBdfQn7WSqCcK5KjR9hVFRMbc7LM5due3AcgLBSoeXB3",
  "key12": "4h1QJPptdiGgAfp3c5sZVt6qp1JBKv4aHhJvXHnfWJW4mhDw3jvD7CbDozdEqJNABUsRkZTyxocw6XeGUBGuXLYb",
  "key13": "2crtJ4iZVr4vHT2Z1H4ZjxQCF5qLS2akzPSAzbDQ4CZ6DTm9Bqtdd2BwV3F99SWrmjPpcQmLYKNnaWbVsQDpryid",
  "key14": "59UCz59tTJ3AP4aLhqcGqgQa9L1dRJL85Cw6tYLwrfWcpvT87S4xeugDoLNrMJoYfLnnwT7535YBoedcSQH3eq5o",
  "key15": "TQD421335yevuXFHMmuwWK3znofSKjt3TCNs5ZkbyXVgQyVMCyLHhgtkK4C7k5Cs9EeNNoDb6Cirfog8WFvtHrx",
  "key16": "52sPuxa4TCpX9gDfe7FTbMrtGjBX3tp5i5CKxEpRwCZBciR4t4pidJSDFZ2Fff1QsbXq3fsdwWFBjH2m6252sBXf",
  "key17": "27D51HEYkyW37ji49Aw9VcUp5ExVoi7Qv5ES4S3mY9TEg6WrvqNpmSH9vKw3YgG8BU7sf2sgxUNLEiGLmfKGTQRx",
  "key18": "5zU1wFPkEuGVqsSzNerdALBecgKsmBhcuKavKsh3f2uF5dgLzcRMJrv8PSJ3sa4Yv1dcEUHBvcBiPUQj7uZJJVVg",
  "key19": "XNdnPmoKTMxcaQDRHG3R9Skzdj4MdVAjoway5v9cEqjFABj5wMXSr3TehztSBWnTrXJqf1TnmaX6inksD92j27a",
  "key20": "1v2Cxyp4BezXLWz5oPBXwfPqBR7o2dN3pP7GYKJmUTL36Q8KxtbfTzEuuyYfRhBr9NBkTzyxbFUZvmwdJr1nigC",
  "key21": "2PE6WnPYhTby8Z8jB9jez2ecUrLGvY2nvs4WQd14QjnwHCBBXEe3CBsRxMr7pmjmtafVRuYhEjueZU1siUpB1Vzq",
  "key22": "KVcgMzbFwfKjGdHKqua5W6N2BbdTn6jUVZSPS97FJ6hdiKytg1qZAA9cYHNWSXEUwe6W1hfbwcjJ8p4tkPxhcz5",
  "key23": "2ZfpZM4Nja4NwPrmwDCCPUbzV1RQp39ZZt9VstVWoJAyssAXCg33pfjH2ZbT1dGFD5N3ULaCBi49Xywyyo8qdczp",
  "key24": "2eMgc82Engec2PKAYjTsukKY3YkaugZDEpXivKViX4LWUNAATQ2vzCuRD6gnwVnimrsqnxDPY8CWJhxvyoaXJPnn",
  "key25": "4cdrQbrkkWaNF3MBS3pQXHkx9Rxnz6q6fpGmnPQqiZWiugfy4dzPCEMsY8ZDx2uZYfFgXChGfthnTSF7noGHmRHC",
  "key26": "465KX8DySczSQeyYdvmzn1zBgwz9JN674tR2yJoUbd8MuJfN6pR418uKwPigz7ethsHPX69Z9gQ3n45kzee8fKac",
  "key27": "56bDkrWz9Wqcy362fHmeEpp3KkbbeT9ux5sGNM9EM7j2HY3rgVS4RDvjb2aptBmx6a1YLtkygaPFnn4t9iDioNYb",
  "key28": "23VfYwFw3MatX5VZLnavpv2aWjFy38NybsNfCQTicAfZhafxpNqQAHZzer2V4F4wEyrWNgvyTjqXaEUTfWNPrVsp",
  "key29": "5YuX5S9r4zJHtwkx2eoQab6fS9Q1r1Pk4sEHaeCYbRkhtyFXN2pdDn1nK49Jxc2C8o9N4ZpZyDMAiaUavWbVYu5Q",
  "key30": "5y5793DJkCuttLgWBcWLRs3K8ze8JuYiFou8d9c8VgXCLC3GUKitCrfNyhSoCZJYGQF7JDvY5t8mUK8Xz2JGai3h",
  "key31": "5oRXXYn5pGwqaAyYkxsAqqcNtr1PhtbCbXXZ1ujHXszuEt6xcQC573hDVwt4UuJqe351uPzVGu4eZTcuve94cjxA",
  "key32": "tQEFKmgfd4pgLpceiatPNykenrAQSziXw1XfzvLESASfmswytMRqo5DnFwiVFPjYZioSyY1cyTfRtb3BLYgTDZW",
  "key33": "37idaXqd19Na2iyzuPRVQrpjgBkvvWLPhZ8AhTTNFzqL7ACtCtpRGSTGnLoJiRnH2KbCFb7pyPQK5k2bkMfNPcBf",
  "key34": "2WZbMXy7Tk1PhEuwASLzfrmNemjqz6VhkL3f2XNqoXaeYH89nzh843S6hx8Wm2YFgSWt8JHg3p9cm6D2yfhXuXtw",
  "key35": "3hGAx96qTAUPjgYiS6EBemtD22R2KVtASTaT12yZ5gELPZ2fFW46HghGF8ig7yr3S1KayaZWvUn1TvVozrXeu4ni",
  "key36": "2bb42cZ86XYQVKYyZj9Crt4RfUuGWUG698ExqvDPWQJVNUVLfrihwrpZ5PvQ5Y8r6p11uZ9HUXxbSaBw8cQNxHVE",
  "key37": "4uTJeSS9CPDohgtDdAD6Yn6DGUSF2QXhgAnVbMuU3dPh9xoxv17eM7LAXsEDM1nq5sqP7C1fshC5A6T63NDDskRo",
  "key38": "3ddhaABsnfgWtj1N4kWYZMKqeQA68VH2cc7PJPdAGFrfF1UmFfj1D6kbJ8WdGptMuKKHW3LWswndBgcgFoQBgkvg",
  "key39": "3qhr3vEuYX3YSQh78oRtWzhuzmLNq4gjVtzyX4kiSzv5zcaDvJfAfXE4LLU5u6NudjxDFu5bJmDWs5vEnfTht1sD",
  "key40": "BxvxruXtweoK7RdAJ78zFuzGqN2M8Wunb7npnbJQqbqqdHM9MP9nWbmzw1RzYmsPtDUExxuKWbGm3pJ9VUCzRQ9",
  "key41": "jQdp9YcwtL92yuLi6Vm1csn74DpFrN9QqwprCKmrXNQPrpCxL4sSfi9VQnxQnrVweEkvLgFshhuARVsERiLir7R",
  "key42": "2Fm9y3eTRfT6byr5QTtZhoG5VU3GvVcLKsJ9nqzULKCqivypG6evicLTr1QH4LeVQs6NhECtnz14P8awW9G43gAs",
  "key43": "3nQTiNvLvmgUAwWpMaJQg6Fx6KmnWtNFYg3LJ8aajHnonUKfJnrpiCYEGADB7hur32UobdDHEZDUHHPpirqUXmAF",
  "key44": "4MpvwKVo8Gy71yQMu9b8UWJeZBYdwLJfZ3kStSuvwDTFzHmAnQrNSNE1wCvXcURkUZgNYKYmnWfohV3RRYZaTkJW",
  "key45": "FebWq6a2RiE1MTnpSSxcM7sz2QbmXN5xAxgqHXm28ffwiPAHnApY6JTNrB2ecydDrTbjt8g8nKZBAB9Qs2MuvfR",
  "key46": "4A36Xi96UhPxW37k8hZHiJxpSNT5Smnv5uaocgNevUXGzHrJkw6vSiErDW59Yjo4jzMop6AM6jads6FuWxrEQt2D",
  "key47": "3EW1d7H6obEgLPLNEL6LpxVUYop9QUw5geEZ3doSyVPHjjjWiomC1WHdcJaGmVap37GPZuuLL7pGVaGJ1U9mW4Lv",
  "key48": "5j8zLTF5dWA1GdDfRayTtqWQ2bbhfPrsMgpoErDq72eniPnEQarNvfdzBMmSZ7MXPXECbmhZVsCDCnwcKy4bYkL1",
  "key49": "9F7fLdzPEKmXNUr9RrZZBSW259tQyMrtRU23b93ztGuMjEoTX4uzfEKeYe8kGykozLBgjLJb7bcjmxRNQyc6oNU"
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
