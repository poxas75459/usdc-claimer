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
    "52spQ63x4SeGzjbuUbzX6rw4a6hnkCTk3sTcPCgx8RLgt9H2TjGYfz5vRvNVaseEJwUkLjECBEh7ngh9XcBCB8UB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vXiGdcYZ2Qqwz4Zpe5iH2DSbWAv8KUAosTBFvBbLU43dEANZGfAmpWbfbQ1n3kArWgcvGZbdK2fbEqhxwACLvcB",
  "key1": "2z4C88VVuRdUkizpKVTrG1egDHRAENbP24iWCoyzcXnHqFcpuAcAE2aqTbxB3UtsxnC6qdzn3T2ZvoTPnNSYpfEB",
  "key2": "2xwzY1tx1BgSNmwCKaoQrPuG3DGRiwK5LLvhGxthcobRwZJh6AhFGnDN3FytHAr14cAdRJMTyo8jS52LEXM8kGJ6",
  "key3": "5GYQBhhf6N2NBkqu7X2XnkWtFNLnH1LJ2v26DVr6VefUP4YcUDhfpgLj1WkLsPk3CPt5LnwyNPwdzGGyhUAyX95z",
  "key4": "vd7mRLqhKANrzUS1euMfYJPbzPwJb2EEgdpurTYTVHvoGD6Rant26rAoYyJJNh9gPJdgQ6XwfoaWrrkwy2D1NiJ",
  "key5": "FpEAkEoPvXc3xnRRPngv7YKFFNND3qc5gbNx6zQkMqWy4iPQoDtV5wVrw8MCxfHp5JypFzK7kaTeWofRHgPY2wM",
  "key6": "FbirSeVeAdXCSh9L3SyA5GcZHQJvXEAkDu67LqFfbQnQ5dokT46gmdU41KeGqZRnF8t3tkTMNTAMU2gFB8nV2HV",
  "key7": "4oUq1JcYufMoJwUGJBb1AxFPvjoUvhJ7gW3rZyD16XV9Rj1rHSg322jPq3bHt8H9gC3yyiXv6PoHhWWqM5sRmW8V",
  "key8": "2d9Y1chp4kdLz9d3xJuF4YX5iYJTfGi5jkW33BXAH3zoGmbk73hTqeN8ymUUnoABjUXW5CeQAvfH2KLTHVM64TBg",
  "key9": "3biPCuRfHQjKfTd6RDj6Q6Qee7XfDm2x5fNNBJtpAb7mavpQ3vQge66ij7oW2n9d9BNet9RRguJP78wEA7wzRb3d",
  "key10": "52EX1p5dPM1HobKHvbLkKaZKTXXfrWmb3mA9q4y9u9c7mYb2FWHSgFZpTN2mG1v8n7NUr4BqnFFdY3HHoherCQau",
  "key11": "2vGDWnQog9bxjVJc8RgZoRVdX82DW1RgLXutBq2jqJNw4gQoYq9Ek1vuuisjrHJTQXyo5kuboNLhr7CFRo7BNj3j",
  "key12": "2T3oBjQY6jQXCw36ChznTDRsX9Aijqceq4dTV2va7QWqa6ApwdZHuNqxCacHg2MUrGB5pTmrxfgNLiJiKBJW7bmx",
  "key13": "3JofnXLdD4ekt81kadsYvYbUdHWcE97cQy5Fr7m29pb8HYjBKNVQgw7rwyDDGZAMUQMtTfpjjarXLz8V5gVgJE36",
  "key14": "5YTcTyWm6kiakF7deoFYi6HBWgDcMTkTe57RvR12UR7goonytvxRuPCpftUoRJs99PySsGRmoSLsuXcFbaGW7Ng1",
  "key15": "55D6PQiXjspYGLzcEatci9wxLQKpe5DdqSkbnGjrKQXE2h8UzwkF85z1g7MEr5M1nJ69ZPJ6sJz4KuL5rBzjKZFB",
  "key16": "4FpvWHDgfANDdk3y1hGhynPYGgCUAmEWMYM7YS6tzzTNPANzvqBjQTPTPhEZREVWp7XzLXWfzQ6z1jHyE4XtqJGk",
  "key17": "3QTYn1szp8cMnDMqH3yNpD9TFphLyueB5gN5Uxx3F36DKhNVG9qZnM1RxV4TfyjLYHapTgEo4T77YhAbLLbnAqFU",
  "key18": "2QSaRMAcDGiECMZ8dQ5SRD4UeVWq4neCSZzKKoSJ7wDSmm9EWxdymSwQEng1sxzd66k7YELFnWgCxurNzekUggVz",
  "key19": "572hj2jYTJbEw2x8o5UmnbJFe3Ttg6FrFnZMv5AqjTqdMbKZwyFDR1HkhZ9h6kEMxni6dZ1mNYMDMABu3Ydrmc3k",
  "key20": "3NGJZiVqW43JwpSnuKdWvPEYWM4FAbJ8G5wbhfKzmHfkUdTu6Q2Y8JuhCPtD5AScsAnF329A2RMbAnoNkZMSjbsR",
  "key21": "2u1RMUsF8f5HRz8xFGHbdb3o4A8BU6uu7Noz4kXfEv6ha27qc5v9ghauH3rXgJQW372uoyKWR2SgwUWauhgH6m2K",
  "key22": "4tvyLz1CvnB6H7b9KD359JKdJe4sovUbpn52pPsEQGHweKqV2M37H8fKjAY1oqeYKygs6VDeJyT2fx9iyPLkQfFS",
  "key23": "6BFrSxm9sxg3fmYv9zgthunZFc2CW5mb7dNfxFC41BBaQMAk7Va1jmo3cAhZSneBuXoewAfPkD5ercd2R4WNyt8",
  "key24": "4Doiy9G3As9i5PkcrsiR97UutYgupsLztSYc3AvSvXpVXPPwPAQ6RQBqw2nYCdcueKxBkSexbbPWQpeFgqwBttj2",
  "key25": "2Vtvsua1PbEZuFUw6rLsnyJwaTnhe531pXyqJjBGkPCZ3UtakHj626SmdSrqeamnWGF2Ggyx5RX7qkw61W881noE",
  "key26": "4KkTcbkkjKqgpniKRr5yBppqpw3pkQKTGcqHcCL3uNK4RPo8fwkDz5Em6MdQvhomcqdEbTUXF8BGB3GocSRFLsf9",
  "key27": "5ZNHEh3ocPggpzqYws3Nz1ECe487VCBXuDHEpzu1iDeVwCxPbUVHD5Dp8cbMX2EjZSdkJPgm4zJSs9w5UmJeNwt",
  "key28": "29JCBhebEfYy2nBm4j2gMARN6mXAzYqes36C9yZtdFv3o7vpY8rLUExyjDrxSs8Cr37S3uPzkcg8smmUWmY2K7QE",
  "key29": "JVWEFNugfXdCTHit22QYFMqgURxQ6yWCu254xnbsTYME7jpgME35ruYcS65YPESABAR9wSXc3wbhWwvxn1pzAXP",
  "key30": "5rBmKiWB2D83SqrerGkUbpWcDM4wR5V9zzfsK8pJAeH4t8Pcy7FHtvgn3mCsTzt1KgNgMen4nZ18Sa9jHq6RwE6z",
  "key31": "3RL2U9H7DgwEWY3mcyog2iS6tYXSw88RN5wtueofvPieqzo5GzPEzQycDCQgu54FhkKUN7NigXtPoyynXp5zoHk1",
  "key32": "53DJ1XP9JwTPJagUdWoq8PBbBLcBJkPDUohkB74Luu1sdYGhuSTmZELyxVeqRynSygtvNLfFZK1nYcYhLAcPGGHc",
  "key33": "3w9smukuGQNMdfwargVJLuVfEsQnovfXHtVhMd1CKPpJqt7JA5e6WkYJgGWcHPamESpqiW7PwXuwo8ZY3Tx7kirD",
  "key34": "3HtjJbUEkGKs2EN6gpfCey5wAj8LKQ4JdSqA7fc4SMoEtSScpFF6qJY2Get8FmdZvwipDzPJepCdxJ8f4RBia4D1"
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
