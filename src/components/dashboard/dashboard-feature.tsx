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
    "3U4xa7LGCvJJTiMUSABRXTkiFdNVF5LuWoFfy55ZCCPhEzqPdAZmDWJ2vD7CtrCZtXr6UbYRHTqeuBaN66aJz55Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ed6rXZN1Qh4gbCxKiuJrKvPNeS6QSNq3Y3aK5zfwF1uW8vTmiGSPDGUJyMnnJj7a1vwCdPh7BN1sU9DRuD5vM2b",
  "key1": "z3R3RHiYFvZf91RMYWVr7s6v57c7u3t5BDBb61DEvfaUNgzJJSwwP4v81eT7MEYMagt9nnof8ptM8TUHG1QUbVb",
  "key2": "5WRwDN3iJZ4VKAfUxP94YNj1uBQ952SPurXJK1R7XLMSUWGDdExAoR7FGbezVcaYwS4JNQaEPJs1UR3FQ95k3j5X",
  "key3": "4apSbr71YEbvAYtDasy8mNyMKSpmovgHc1exc1EksHLYAvGWwDpdy8vzpsu5Hc38pthxth6jzDeUCsymXgL7mb8d",
  "key4": "4RCqwsW3GqWC5XbKASCbW9pW5qUCvReemfLeGspdM3UnwrCi5qzEvA9as4pp66yAGXMzMocN9j7aY624dmA9V8WE",
  "key5": "56CwPpu96UKFJEZmo78GFSKC6ncx7aDXLqPPWD5Tewriw5z58VkN2pber8Svyk5PxfEPRhZL5c3EcmiPPmm4dgGW",
  "key6": "5gwZy5PvATZMn5YGWDBAmtYMTAGTsgbSjv4ZafgUTmTBdTjgs18kegUwNrBuDDP93n5CN88jJxs9JNogfPrEXqyA",
  "key7": "4PBpgTe43Ae63RcVtceiSV5V4a8WANdEQaWTPJziti5hBqN5V59iEk2LMWGnFwEGMgWTKzFSwi7mieVczEyqSGvW",
  "key8": "3x9oXQxQUhvtTpE4RKZBpn1YmwND7ytfRGBh9Vj7h9UTA6oAVjLAAnCZWhR7xvLBGjeXEtNzctk7T1FaUsQQDi6a",
  "key9": "a8ce47V5CaoQTtrGBevmAPQKS4brn9Y5P7BbvyasJDvPwYN3mgMaLNN4Cy3e5UFzGo459qYVtiYHePtd49cTxq1",
  "key10": "2yLsmeoXHJEpNrJWUq85QjK3ys5upjPzitNbhV5wuAsgCtLwGMQmg2KxLcpr5HCEyWszdQBx4MxFPBoYv4Fw3ujE",
  "key11": "iRzBi4y7J3WRMxGE9y3MANWuBJQv7y9fRfgXzycpvden6B2k56GpP1vQr2nfKfC4D37TvGuKRn9JqSLVGPUHdC6",
  "key12": "3Yv955UjX2Lqkskw5NiXtTb4J1fnnFodTi5ZXDEngHPDiDppa9UXkKmqXtjvE9f2MxEX7Ki7CkDrJR32UMRHRCio",
  "key13": "yFvV278KpJuZre4mYhmN82eDkG4QhkNxbAX4VYV2SxVsnLexxMmg1hnnTrd12p3DqYAsF4PBgk2c4CymDrFcWPw",
  "key14": "2humfSeze1Lvh79eCQyDWLNZbuHBDguCHro2qeDwS2n63SJc7Gqs3nXuC1uHj8YyZgZfA1oVFTt7TMrX8zyDo4CZ",
  "key15": "3HUVSMc3hfY9awdEhy9J4iMFvvYjn1pYwanTro3ATHfCJyody36ykdsagG1rHG6FRouefqRfPq18z8F1i64hAQEW",
  "key16": "iy2tBRd5TTW5wAZDk5CKBhM5bBMoVpY2uzCHm2W5FDNBQkxLN8V6739W4vziNYJ7Vb8QPJ5hNyEbLXeQxyv78jb",
  "key17": "ufXMzmmFJaGRZk6NK7cJDApyzxFxM1aAqcsiNJwZKzfZGLRG936HiW8M3G4KVteyNGKcrWwNM5f9qqgmXzVNi5L",
  "key18": "4cZr6UNLXrvVSd5Ha5sL63uUnNEQK2Ks9yfyuq1bzFHZJyYCeERWPZGxetF2svvVSHXLPFAcwQwMwS6Pupbsy7zz",
  "key19": "537UwA6GUAiWKsVqDmdQqdXjGjYkuftMFxPXdt6PkWkqZCgpbbeuaGfHzAnwpFg8pisgGQUYyzSrfadpMLksK3FP",
  "key20": "4Mx3YTktggYLcsfxDgbJk89k8jD9CAAfGtheF4zdPViT85F7kzXWzLdHSv3fVrpPPggWQgxtsAuH591gw2Cqnfek",
  "key21": "4fE9N3oGDDmHMWorfvRbrcfh4CKY3JxJ4PR9QVXZSTfuNjtiz5jYKsnuTHTz2FTDGQof9ShTL4zComJBM2QDFAQz",
  "key22": "5QBipNodit4U7997mGdQEiL7qfGHq8rZnRZJtbCnaVjqFv9dnyj4pnVDaPgwpq2X1QPwxrSsbjcZWc7xoVUfdKjM",
  "key23": "4QnmPDztNLB4DqK3soTK796LgPhDwNJRiPoaZ56PGJL5igdJ1kbLb3nBWjsipJoG7frKtMx7BW13nVScSwpxzm37",
  "key24": "Pf6quZtXDq4GKcwLmessLh2wn1GnQQrWzpKGpDMjnJwtsAisAUmYNKt7rVgPAeSSym6bxc5yZ1UxC3asaMCueok",
  "key25": "24J6iGe9YgbVCqq9R3PdgXKT2E1CXXs3ZJbhYaonu8S6eCVebzq9fxsDusYbFGER4KmmStwFJV4nyvBucAQxWFQ9",
  "key26": "34DcepcWzv6X7Zwanu25cMueSaRZcTVw3aFY6HKqWbA6o6Y27aFfAc76jv8ShM6HjR3JqtLAstiHPn6coUwhXRS1",
  "key27": "3fP9FpshJjfCt2jJFahBjtukYdcXYLAFf3oQaruCtgxfftk6qxyBozy8xCJZPvqDVEuBi1uu7jpQqNFRcdMcWzke",
  "key28": "4p1oK8q6cr48yyxHp4EVh6Zs1hc565z7Jkjh2XKgRSVrpjZYd6wHHcPSsyjzmKXX8WWvRCat5Zh5wge8bhq2CyCm",
  "key29": "21FruxdPW7juMiD1iFWZwieMA18jFYWPCLt73pKtjb23qvp89MLucZpqk3X3aWtmbyRpaQm9eHW9dp6MSSLhBscH",
  "key30": "26neQ1qkGUWs4Kzt4P6BtkgLxwcFfD5ZhTDcMn3UurLuMiTSSXcGQHQCHav53BJbbSQbpps79HJGWvnjUZbnbn8S",
  "key31": "5caozFW8zjh4fbcCPA4rmrnNPmerdvnVrwiXUDcvBYksYHf41LktX35jrhPm6381FvUsnybgFJin8TjmdAZZuWPU",
  "key32": "54Fwvo89h4GQZNTgXonYFS8HCjFxqnUjq3HpsWWQwJ7247dMcDsgVokb2aDMUgWfUMVDE3wSKLvjL3vS9P8WTP3v"
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
