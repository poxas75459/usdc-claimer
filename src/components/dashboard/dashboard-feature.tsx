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
    "61osssAuDpHmvAgJTDEShiA7vtzSPZjiKWc8wY6VjtCPLSJvGmoATqx6fQNpaeRyGQm4VtXKWouc7Qm7v46eXW8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zVF5tKTPTMBB8DqzDKFUg2ZxLeSEx5L4fvtsDLMi8VkBG4R4V2s6YjYorFrAgpcD6oK9MTwd1FosnMvKD1Pjb9",
  "key1": "dsGcmyW5aPT3CnhHcsphdaGwAQc1SRvZhrDLc1j4qwtJYVuRavHNngtPkCa3v5m1ZBJgvEwvcxMAvP32NWjPQar",
  "key2": "3mX7AhcknQn8A4ctV8SNgAScasthKUVab32R5o47XpPgZ5b5zoA6ti5Lr1VWDfnz3B2CSJmA9JhyPqLa5qybMW1h",
  "key3": "5PXsbH7QwYjJWnFqDScp2wyxLKmCV8FXMwe8BH48chRAAwvXynnSk41Rwcyn2fFdUJdibgJK1qkoChW9QBUQrgat",
  "key4": "4zVMc7fYh4xV1cfdK8H3yRwMErzt11FuMha46Z6Jif9mBffe8TQqmhxdSjLUcb3U3amZ5AqzeBM5UKuc4Fp5wUCx",
  "key5": "5vz76uSXGGPmmzFvG62kjsCPTHS9Uzzyv8GiBxYRcLw2QLuYcvAiYj5kko21z8XdRdsoJviFEw22Tuh3hg6WHwSH",
  "key6": "3wDCtf3he7V3chMCQ2JHXNSts9zHfdiVYrSCFrkyXhnUKyQaa6hf7N6hkt3hGQFNUgVZ4zhE2NfeRFm1qhbCw4jZ",
  "key7": "2j1pU4qZqj5EUy2CcryFNAWK9kFTzdkPKh8zFQkXuNZADRxs2RxmcCkMWfSsnG85Zixyv6TknfQtD9ARavqh1qEm",
  "key8": "kj4fc9dyg1R8ugBwF56fB8PyosDxoQJ7pxtqhvPnAYhF9T7me2dX2CW9ZBmjVwwch6qwh3buYCF7FzkXerAeU9k",
  "key9": "LPAYeZtkn9ZtegoZNN8ZAt9tGPPruM9BioFjdU2Fbjg8zcSmYis9M95UQuQimAt1Qh9LSpSup7jAnjRCpFBrKzX",
  "key10": "2t3ybJM985uiJYtk8HXokuYe4mQaxEpfS91KkpNTeDmJKqLw2TDz2wNb3aQzcmM62WhUT1bRRaXoSLPWGozq3AnD",
  "key11": "3z7FgSmyD6AQf7fV52Ysy8ELJXyP1y9jcbpkEQUwodhohSfjSSTDYZVjPHhQvoJ8xUzHDGs5fGRNYFA3YgkQ5TaC",
  "key12": "3H3DvbAkXK6TPV9yHPzcbzoVgPDhDaSxrBaPQWoVyrdSE9NmXLpkfED7k3ZP7F6rs7aUwQbUoWTdLvb1WSUScHvm",
  "key13": "5EUgVxj7fpBbP8mwK96wx4TAAGez1Ag59Y65ai7c2NPUThWWA8MrjLE1aBMmBq9YscCT56nG7U9Juov9KXwF4QMY",
  "key14": "2Ywgt84ifpUV9vcjBrxASyEgVnMz12iiha9QESPkhruyDVtYyxWhn8Fp9r3BNuziw82dmGn7PNxXNSFiSdyqxUxR",
  "key15": "3sh3kmesk4aABxmTzKZY6GKVNrCXf3sNZrVo3o7FSGEdjcBwboawFaLfCHocs8VVprpVJArzurpchfXdbCsBVqBt",
  "key16": "3PMVoURWJGtPV5LtXXUQkEbXxAw7U5cfrqLFmtngzfT5Dz1vWpuSXSH8uUSP8J77VAYBVY2ug5PSjoWBVkevKXEV",
  "key17": "5MdddgsYBT8FcTz6yki7XMPW9NuADC1cRZaHLvEkEjgBRYAKHzhAdyjzw5jAYzDG6Uc6n5yPVNZCYqgCEf43LxzF",
  "key18": "58KMmx37A9GskJiXHwDTQFcYCD1T4bmm9cZXAZcfZkE8LzAPtNMtrUXkpji1Nb42S2RBwe7coqn1FTJGKtM6u4SL",
  "key19": "4Cu7ZdXjwjZW2XkGsbMmdXLqd5HC42K4yMGdeg1mh9PgZcaj2fhtoBLK8KGXTAgrJeHFnXMJTQJM8yR92TnMZLuq",
  "key20": "63oyDxGNY5HqFqi26pN8N6w6BGZNcfaYNNsBjWb1qZgwFAyYyp9UhVyNXyEQWWuiLXZtqhbV4E1mVqiBWVbMCepR",
  "key21": "5WwYwkMTkpSXNR3G7755VQun7Dso8PApaVfSN4A3msam7xtXrynvWJKX49VFXiXyvtv85J892ChLrDExgKa8vU6A",
  "key22": "2aETpk1cNyLdsSxoEzdHPuYXbXxs5aLWXux5XwuW3mFbZdxy56uRJa3dUjhRJt5crDS74ADob1ysivE6XaAKJEVF",
  "key23": "2LLRjWCyt5Gw3WPrB4eNTG4jBgJKqoLJpTW2NLQKSNDzKoz5yWBuScHbdznrsduwF8NKHPzazS4KQvKKVdgrwixE",
  "key24": "XFP4CLdcJ9wzma4Zzd4gQMpFRo75CPauxyijPWKcK6vhY4hg3cpSrYffheTpfwDFSYTN2kWyGpaaxLKrzHpgFpZ",
  "key25": "3EKnFnozocJNWPatMYeRyTqQAwzEahsfVD7kV5MmnsTSscpPqdnFRAsdmQc5p2wunEWhjQsum3Ub5DJzc8rHkjx6",
  "key26": "5PKyD7XTL6BWSCCWDCAngduPQM3Xbi3dw3K85EBnY46JHb8M7AN26bUcY69yfU4bBs2uHxDKJ7WViSAJz8UBUCUt",
  "key27": "322xDMb4tgj9t69MLGt2HWnZdmLTArDmZYwhCPL5PY5wb5EWWELWQbmTVDLHa7Rruyetc32zYSGmBreagaZAYz1K",
  "key28": "2ut7nqW1enoBcp7PSHnEGJdfAzmFHjnadnxSMsf2fgvRNk8aQUBFFasKvTgKqYPEDJggALWnfitjBtUsgSS5boDQ",
  "key29": "b1sijwKrZzZAsvYR4QxdCWyyaK9o9EAn9G4Pf6LFMsNMXhKHEoGxaWJTY3kAT9EwPqTUAj4fRQkitkJxV8NUkBU",
  "key30": "4BdQwptJAkDyY2NqQLy1HwP7U8RuVy9xqvVkdRwPSTFynk5o7mRXaVVTV7jGTy69mVZU61mn7AD6DUXx59BNdgin",
  "key31": "5hR5NCecbGQa7DpW2nAUADYbyuzkXMZeCvxvxttLzNZ74FTHrsdLBH3sGv4WUHkS1QSE2SKfUTkXNpZzimEdUsGD",
  "key32": "4vtPG4WxUuy5dSuc4cppfMvgKYposGdQ6ufQVhewhTUgHUAXGjFpnifn11PezfLfEodcFTjicwPKG5Uwwkd2uRrk",
  "key33": "4H4hSHcFTfDtvZeksZiw5Bx9ik2aMQy5knJKz7uR55zb2xxQLKGx9k7Enoj3SASYDXmJ3t6tJPcua7uNiPimgqNY",
  "key34": "1yDoz1u8bVVDn2MN13o1diXGieqsi7mvFirQuMTWs31Pf7iVN71he6Ps8ddatPae1W4T9iq82MyvcpZxYWpAqW9",
  "key35": "XvtHV2epDCszc8e96ULheGyAu171p1fGNhzr2cB2NiRU7N4cS3GBxnGKfnNG9ADrHdabLaPBVpmmvx88mguqTVv",
  "key36": "4LW6NgCcoGaDD9dZ7m3izbaj49ipiGLH2M2qHX7K4b2XTAEz2KfFjDBrorEFN5wPMaeEyGtihKnnywnG7nCHuU5e",
  "key37": "3UyLFAX3uKpv1o3nmSgkYKGfpZC9iGkpEQ2euodAJt6mp9cuyWsojFKwfkWJMpN8bXFx6uVUyrRpvwoCtr5j5dQA",
  "key38": "2Sb3MHdHJawQDo6BqhCGZUbMX5HJLwEKuQEWoqg3NrqUKtoaKGsUSi95qNvvYj8KoVi6q1gqkRddCAHhaSY1H5Lf"
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
