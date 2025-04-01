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
    "5UrAQt6jexKUECA6CwYuPGssNXMZf6QB121A6AMn21Fe6vTwsjxYAf3Rw7M1q6Gvt3fcqtMkds4bqsmP7MJoM6uA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dFQcqpLBGpEMfuz5EnTWodUeB79D7uALsrnLTmoxzdUfATtiJngtAtDskrNBejBK5zmrRveV2goE98mkWvwdSZ",
  "key1": "38ayRwxM5gDQEdTfhg1wRg3uPwdkHv8v4LacZAPggjyPHBhor5kxMvnja6qNqWsWb3Q5YUMDjZFTrSABoFvcCXya",
  "key2": "4DsSkWGmoeSwuHCBc34xNzR5oUXLiLhTm1c3cPxwuMzvo6F7Yt5BsoVrHavB1BnwtbHNuSx2SGKeLTyHpxnPnTJH",
  "key3": "2iFyFZdQa7bqtUThWbRbDYnKJHo5mSgg8jMGrm8FEBVYvzaaZKPSPTWmkRuojFxq2bstMQXEvDgGQJdGsiFBdLyw",
  "key4": "2KU5EJtc8YoEVnYsy1xJozds3kj3doTaad3cXSRhRSrsLzE4rK9B9YmD5uV5XvVxjDiRLfvnycHaem89Yfu25UHm",
  "key5": "5RzqswTBzbHhgswBjVq8djECDJ1umhDB4moj5rH69xe49Z9Zx2PCiuAWcSwRpL1nmciyEAum2dzD4PdYktjmKb1r",
  "key6": "2Ga2UyMsvWds9Q1newjwT3FnCbc22TqW9GimGrLx8sMhMBXxSmXtATHtyjLLdjWk6ZeCJzYVjM3XT21rLZEPvWrJ",
  "key7": "55Swkh9mmncu8XVfezMKr6Sppxf6MZDEQMMaZJXJNEahgnxkg5WgaAUpasqDrLgVGMkLThiS6qEeXEryKSixH2g3",
  "key8": "24DiD3CuzTnZM8tsV6tLKQ5FgFLaCto3B3LcUkZngW2jqNRTCVXrjbEcFxCUVDNjmsYtrH7zCUPg2HWKfowzwUo7",
  "key9": "5k7UfpJzzQaoGrPfj5r1fB7wAD2jpAZvwmyFoycjSioTqNPbtQGmKuaNcMFTvepC36rU5Xfic5tPaTqFj1NZ39KH",
  "key10": "2X9QCDNnrhiYGMg7BCTBQqRhuskehskPd3ZU69CmmDjDSMnMRFKrsmrJwyNv9BkUasLUub8BezLr9VSBh6xcggdZ",
  "key11": "ZzHnFrTd3tx8DxK5k7c7Q8uPEgnVVuFUdVsPvNLFBjHnuyT76J4fmjedmmVRkpqTFnDhhPKG3AbwdAAat7gYuak",
  "key12": "2JtYZVMpHJ4aNhQ3XWVxULQ69mnfi4ELb93jH5XrcZVi23AhJFi9ivwrhuqRtjz1tZE48afcauErZcsezjNfU5EY",
  "key13": "4w7S6nRkma9fHXEwpd7HLURsXPREpKTNjka5e8ZtRLtEMXi79hkS1Q9wGEsTxryML4dVeSXj4xWpACGPn91NzAio",
  "key14": "JuPGc55zTxEnaZzgvQJywxwhPG8uGVu9n3fhMhnvLwV9piYWLEpr5u6JCSEwt2Ac2i5MyNLmWEVEe4FrVs92vLu",
  "key15": "sYv5E4ubQeWLGP6ibyWCSYuZBiLRZH8pnWvRipUEo6tpf7iLjyQJrpxANbkTXm7ixFri6btm5dtgLeWoWY77SsS",
  "key16": "KL5HBbWCxwLQ7JJg8eGpDnuVGR93qgXJWx2VHMJw7nirSRTsZr52iRxu9KqftvtutPWSuyuH6ndNJ8TwzebJEes",
  "key17": "3HPM6PYK4U48XGJQwpuwmMa1xmdTcB6muS4KrA4R7k6EHzz6cuDQDWp8oHsfrQ4oemcTvX5CjK7g1VH7cG56H7rv",
  "key18": "294g6vDu3fqcBgrhvHy8GFjYyVXz5sZ6XKPXvTSrXmp117WGdQYe4v6zHRK4YkvmX67bTyGJgwwMshGBr9S1gUD7",
  "key19": "pogvyjkud2Kqoa4xceMvLGfv7vQg8euRd7G3xG82eGngyaB2A4U7BdkWyAAtaFaetgYxo4FTAYUi9RQPUtGYAxs",
  "key20": "58HZP9GfGajzQrRQrhowMvc8GeHvvgrySdDJbiyiEMUL1AT8SAENkvdpBfFo3pDfdJtFH5j3YQgxCQvDBcpwKN5t",
  "key21": "4bj6LWg9bSxcGQLdGzLT24H18SXLFBEe5v2d3nYYp9eiWTGijhLaiux9Ax8g8HEEssdUek6PamaHJhEk5vdAqBpm",
  "key22": "4W3BfpMQRGfVyV2d9CP6juMwBNdzT7PSr6q68xUATLZKeDaSRHG9DEhS1qvt6HH91iTYoo7pHfW5iyjB9ezuxJ4m",
  "key23": "CEvRpNoBefqKSBoYbt8gvyF7i7ndwh5baJSfwJj7frehd61Co9jGuUn35GcCAaZdb6bD388SS1eVVrqEALHgGre",
  "key24": "5gRmREw8FAJif1HqtyjodLnvgZVnhmCJChhvZ3jPt19osbBmVbA1N5AMR9zM4MVZZHhtx3w31yMKufEcuu74w224",
  "key25": "4Zw65Yqgvw626nWzzJW2byxjkJFRLYXbzC7uYyJ1fptXswtFgrfE1RQN2PuXEBGqSYRBc5tC5Uq6g8iWCXk7riER",
  "key26": "3yREJ7EZYTsEs95xwUX6Fd4dCz3y5skeh9e9xSU5G85JfnUorPfcx68VWsb5ieWPPQmaDc9Vxvte162fzsuAxFkf",
  "key27": "2HgC8F7qbpbeZGRE4WkCYSCtAuVgbvHPWBXFEiAize4TvoLAc42BSuYrwEA8ByAKNuzKfwB7XGyw4qGgBWe4pkGz",
  "key28": "5P8GoPvypSk8w1PJeL494hWfUkgER8qP4TBMn23V3ca5k5ZA1135WeBCqakepWJPU8CQNbyoM2FsuW4o2EscZts7",
  "key29": "2iCWfKTuwum2xfZxkP1h8TydAZzTeqwYxc3XCTbLto82CQT7Jpbx4rNaers1NSjD8TX5NS5RKAnYSbKzG3JKRTz6",
  "key30": "36yeuf9qoFDMNgta34vT2pfysSx9bBKpTgKo7GqVC6j5PWkmM5tPKqCT1JMHZMMD2y7Jug5rbrodkFZcw3VFN3r9",
  "key31": "2hffjd9ekfqiZdRBLXpd1h3SB5sB3o1vVSJ6JcmZPvuba8zohUDBCAHDruoRpsFAk8bQZ3SxNmWC9JDhHJVDL2Xi",
  "key32": "4sxknpHAX9yBUuEJnUEYZNmL9v7AiaNtgg7NHHxv2QvG97X1uDPdhEENHku5V5ZgM9SA9FcpRjFdKb6JmiToRoyw",
  "key33": "5ZnsjfpNdWoD2zoApqNbvWPr2fsj95mMUXqWU64RxajbwmFTq2KtBzUQnGnmEjwaM2LDvLMKTQ162Z2X5WWNpoFh",
  "key34": "LCSPVpuej3zLFuWJT6ozTwntHnv1GbgGLMWgmN5W8FwbRsSuhMYFuFRQ7E2rkEffNrJSqhVwqTvF8b1pd98QudC",
  "key35": "vLMGWS3piYPy7UAkmPprQcb8JwTRjVSbbwAm96A2g4hUk2G7jtR4rr3JbJmDrHBGuLJS6azA7T6924hHVu4Mqpg",
  "key36": "YsYtcVKSLGT6sLLsaDkV6Fyu4MuUpuHZVZgU3S4hoxpZJS3wbfdLjFDGrDV3PNcpV938JdNMZkttA3SjHikyJkP",
  "key37": "3rzdC14ysahky1NJ1MUUNtAcXtC2bvV5QusYsH9Q4vRbsuDUKAgjvYSLPuQAw5LLYRQiiCPz8NacXui4wThBCPSn",
  "key38": "2sm4Q6xEFoVXJQwLyftSkuhPZjHP7w9wWoNw7TFwj6LA5bqmjFpYF6xvLws2CwByHJYKVzDoRTW7EDiyWsW19DYD",
  "key39": "1xstaEW317HE66UdxBbCVEhr4FNdQT1Dajg8Rmuda5G8vvCDesh8RnMTJe3WVwmBxp2rvEtV2aoKh1eYP4g4sgF"
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
