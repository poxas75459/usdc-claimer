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
    "54KhwEcDeFy2asqB7J7HYLcbJo2aFvkxciSwooZiP8A4EN2UAWgk9B8NVfT56Ld2LPvgKojpv5k8reaiJa4XiDE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p8aUnzCUqeDNLtgedNZTNqGiixVxbrtkJcLjTHPeK7VdBjvYC1m7dLFyDoxJSj1nae3SpxFitgyxcK6SS3voq5C",
  "key1": "2qyyiJPUCYNHE3qRCKqYpEVQRcSm3B5TeDpAqMydSZFvaUSh2AxnQrMoNiQNnZ57JKwx5xX812GyuxXbruFztF5B",
  "key2": "4GkzhejXFr7ShMvHa2DJe8jikkeHzykZNRURcYyS3fiUsknDCH66RijBNKidrsmYAW8Z8zo9DYJithYf7SbVzZCY",
  "key3": "2Ubp2ThFP8qWosyM36UGpHg7cxAkkQEWUhwgGApUPB2LxJN4mLGqrSmjVoTdKrBW2HJpSctd3syBJ64JksWcrrRj",
  "key4": "42qUhh64gwjdK8w5oi4AnBBw5QcEttGpxo6gS5xviTs1MpfkgkzTaUuqJ9cWJ1BJea9PFd7eNc2y1nujhNR2qksy",
  "key5": "5J8e2zyzAzt6CpV9sSuDq2Sy85mqTUcuTSgXfduiCndgoYjGDFHGJgS3eixRWdzDrFo4FDMBv3FzjLQ2ZJP3zjdh",
  "key6": "23A6cCSd56AWyVWh4HexKExNW4w8ziE94G35ZffGmAWkcxQ8HWSHQuLkJZRjEBCdt1on7NyU5QYjp2CofsboBPzp",
  "key7": "5Lcs1ZhJUQxAjrGekXGPgkep79S6RaN3HB2i1zUtA6bCVad7gpNtHHf1SiMA84tBK6EWsEFFLMUmUN1ePPKqN8SC",
  "key8": "5sRTDq1r31xv3vmTr8TpZ7WV4C2xpcwUt3xttX4tNJNCRekMTJ9rnRdEjwgFiiM7uHoea71D95fSoUu5pCgpcEuC",
  "key9": "35Urk65EKAhd4ZKiact5t8BHkKJuT581Gei98mLa99jp6558JGRegPspgKMWAw2er6k98VcK7kpAq9wYW4AEVhTY",
  "key10": "k1MBenSwRvQ89Dq38rMWHJAJfSHZJ5PeqXQNdLtPW6tmjfzEQ4Joc9Cv4UmEqUYoy3RbLk3JTu6NwMzrFLFWrPR",
  "key11": "3rxECjJDnsGMN1i4KdwLHXdMDpP66AYRhGZ6YaEvVZuXpnPR64AbiffriM6D8WbUmVLVWXV3KfxiwrNSWfRWqT1g",
  "key12": "55MJ6vLRiNiNvHf4BG2jn9s2nhh2eiNxQfNzxwPR9jDrCVPWQd91B3MJXGC34uLKCHx8Pp4KPvKEkcB67UM8GAnW",
  "key13": "5HPjoHeWXTBNZKDMeeV7eWnVDWZPL33Buiyzddd2Aq6sogCkjZdJsqCnhMDivk6gvyVoFPB7tnQyLHEnjuu7s1km",
  "key14": "4ZqGUavyFp4vgkdup4n6TqqYbQb8eWcoC6SpibPwWLHbvRcYK9McBDw9gh3KMKfaVEwRgbizVYuhqRjBTmUNxEuK",
  "key15": "5GLivs6rUkz8R5rMJwPHs8GY1scLzzLgFt2WfR6eMP9rzePxoY9EdqNcA6ifufXGs76DhF9gQuLy2tgC1p3T5GD3",
  "key16": "3wBMGEhN5pptrPgxH3x6tf8UWy75vtKiNhJgNHjTVvDyHP9v61G6eKWc67aRKJvsxWDx9L3qn643UULE4VatsMUv",
  "key17": "4DvKYHNzCKfQnVFsvWM2BqxwARTUzVBUoPzV8T6YUWpxPNmUqpqsyJXSRtw7oMxRreGLdWLSZxgjVYJ5Ap4ANEZG",
  "key18": "3fTG1KSThiStxDmnvntamb7PWoGWMyCXphrPjsTSeH8XivLx1APR5hRBKqxNXMQk3eqtgQK6o3Aj361yhmkZ4gqS",
  "key19": "cCoAphC6gGMn8RHptyM19BRzDhuhqF44oH4mzhDQ3Th56QzfhwgASK7QFxcL9FLCM8tDVESpYXvv5YTtFhWLidY",
  "key20": "3JpuPSHfABgzHX6pqqRUyAiHgbzKRJyuKvms6nGQ96WRsCsHSLmNzd9ZvnjRxEysmGhNcrsK7Me9ziQzoSbXjwQU",
  "key21": "3zzVzPBxNuz9957jHtYBN7o1LH4bgoMBMcLmSXZ6eNPz71g84PmyhkUTvGmehT2hLb8svqWqFy8bkudx2D3E9kdg",
  "key22": "ZNZGrBjmH9qCQ2uWkyFvmWefzeuRGTe4doQwQxqH1pDLzG1ZCaKuerKxKjbBU3KcU6wsEPWQF7xNk27Y1xTZdZP",
  "key23": "jQUTnPqwdsW97dv4ZsV1PLbudkQAeEAfQgV26KmRwk2M8vr9TBabwKMUDwcEifnyJ8kqT5YNM6SvRmJG7ive4ne",
  "key24": "2im56s9ecVaZpAuAN2HA6jELQEAP3SQNZ9XxMgL52WHbFJ2xVmFzw9iSAnwuxS6L58H6XsdUZrJmRGGJ8w9vnAR1",
  "key25": "5QoAYz9j5JLXpE7HfsfVxxgAzXddUgd4eSwgXWTMCSkCpccXyVieGt4M9RbT19saAjV3cDKnwKK7eZ8ERNQ3dVGU",
  "key26": "2JGqYAS6ipTbdyf5aEB7Cp4GSPf8a41bV934x5La86JAyJUJjEqg37skJQaD8pfBJMASvyENVUx63RiMmatqxqMz",
  "key27": "45PLfEa6vq48UShJw7xL51Lwo7CX3UXgYWcRk11ZiyVXJxoyWahUUtuAAfQFT5iz4umnB9BCsqVL424b3CJWe4PE",
  "key28": "3S8PAkzaH4J7XB3KtVjc3fuHzfN18HmocYb3eYiKq8pHNrVvyZQad1mEfosrNDjX1Qp9cqTbUgC8cpDzhCTQmGX",
  "key29": "4NeyNUeQJhP8eaVMiUauqb4fAcicJhtqWpTQo5xLCCfwweEWDLts4UDFPrmcuSDRWYaDNFwb6qW86mXaGSDJFkFj",
  "key30": "3SpNXE2kmbdJdvqA4wxxFay7wwh74H9tYFk4huQk6fmbEqLgeCN8eXoM91JGEm5oDtDhxsQLMMP9DXFPb4fkLQEg",
  "key31": "GCeXaqkdDtjcYpmGgXzVUuPmNGW22dnEhGrKXiiVeqGrT2KmNXF7KWnkPKF8t7L9q1WfSkWXR9oYjrc1rjDXo1a",
  "key32": "45EQuucZNyk1YP6GnRkSRXZTwoNM65SLde5AJUtCZEHDx8EZUbj15b9Po6u4hwmsYJYow9FF6p69D2f3nojAmQ6v",
  "key33": "fui7xF8TA8CztBB7uqtqzK5ZwRaJyU6Tqgq8VXyaNcwdc8CgJ6K21Ck15acuEoMJR2PUXoRmFt7gPi3GoHG7Bj3",
  "key34": "3d9MwAjK3YJRMQT13j1DzRMuysiU7ezfcnR4PNkuUMdsjXMWVtJxzZ4WPsyYv3JFeau7fL8geyfE5XAwtqS7dQrv",
  "key35": "QZYBTAb7BuJYURYAgHksroNrvCd9FZdG3gKgnH2VYLXGN3ghdRB1VVmsy4NcawkhsdVkMzb5enCyBYAaqYwRizw",
  "key36": "vehbw4JXpFGVF4gskPDdkcMQfLgxkc2xQ1fp2xBbiMD8UjFbfTok1Z3xc1qQxmNo6E6PH4ctsSxvXJiQwbQkUn9",
  "key37": "3HSrSZbWv144CkjvS7Rbe3QhfqR55Z3TbuC42tNFN6zCEdRtbVyHtABc9YpYXHWtwaisDziZJktYhUZgnyXfZmZR",
  "key38": "4SJc6RyV3FrW6n8LC5ZES9Ae6rbPKb4GXbEY5YVQTg1Njpg5GZqFaFGaDETmPSdBG8hfHnLjnsGzzacUmMXu2Cvh",
  "key39": "5zV1bRBbxsBcVq2fEQY55CXJqWF8x6upQm9AzUQW5HfJxoDGFWGiadDwvDudiTEeF5iQqyvnB5cc52HMxJwCkBp7",
  "key40": "5hi5JJQihGQ2CqCUtYehEsgbxvujBzkhTniDSj42CRVraxuP9BKgKYrzFd9ypZE8RJcVmbN7a3w51nhHdWBiXMSY",
  "key41": "CCicR8kHpfXeipitMAmmPRmH5aEeFiLEQgCv9G74eURtbEGmRcpNpgmMcP7JcRuVWzNrGawMevEHH6S1neSb4Jb",
  "key42": "4VCLyU3PoAJJrF2nxiWb1EksNCxW9pCvC2SG18ZRZDdP3HruYkYCYCoRTQXvM4KkkpkjcQwHXqybB21X9nWgnNLA",
  "key43": "3bgrEJ8cSMJZopgJSRtLAxn8DpuDPqSA6Nwivd3xXCo2rR6P8knpA8uEdjsu9zGo4rKjkzHe7edcV5b8LgnN46V4",
  "key44": "3QHHwXLo1cKD5nwGZSJ6Q7qLDQKuzMTMJYewyKvpApYEJS8CnUxKmmyrnN8uKWP2gdQsJJTsYxqJcxKXfWLmikWJ"
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
