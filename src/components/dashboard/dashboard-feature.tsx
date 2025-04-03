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
    "3bqmjAUPds8CqtpT6gmFchBzhDddyve4DiqiYSHcosgQrJaUEbfroQhKLYYNpDbcFcMhDUm77FTB2WUxBxr89Eyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YCt9rfTniQfAYbCVzLEE16Erpq4tJqC12GkikMCqY1TFPtqj1mUpzPZ35UUo1WVVWihm5quKPjeBYW6PY9RcTVG",
  "key1": "2J66csRi492xgsqPDCWzt7Vhhte2EmD2nDrMEvS7KV71vR5V52ErMoa9J8RPtvt2s5QG2w6gzqcTmn27DaFzLB1h",
  "key2": "3n4Shc4jVA2xEVtfMVUQRbiQscJGNVTrvAjW6YxPWMb2L4K2nkiMwe3jda3UkChvWRA59i6JyzYpdeUWLNuUyDVc",
  "key3": "5Ky7pEWnS8QsXz119pGTijcPu44hmVztsfCqRuzXmCSyUhrfpTnmWeVUcKdcKADsVyZmVizoC6hf7viie3VmkqNR",
  "key4": "2baAnezPytBbjgCHtKCEa8Q74hVjCEDs2v3kYXU8DYuNkx56guvecm8Mu7oAhBfEDs9W92uhUmmdP8uSmDtNCWGw",
  "key5": "4ouudaJkKRVLV9jPU95jpEPJGYsBc62nar5FPJ3rGf3hkjRwGzqHo8Cq6LWNSxEAvsUAgjHxWoeySyXXXqTNE4U6",
  "key6": "45ykzjyLVLvCGzqXFDMHdWPU4LigMu3VCWK5BWUHAgEN9S8QySen3NJpQ2qS2gjviPe4sEZ2sH3ehEq6cBX8eSXW",
  "key7": "2f72j6ADcPpW97ooxMGSr4qbZy9Pzd7CM3Y9ArT1UGhgizvDjK1Lbw254yMrXUeF3BDyK24hM87DqZL9tA52p3RU",
  "key8": "3NEXZqRtV9sazfDYCGNeddVsmeJmfgeYB2AuoSH4WTCfqPsLhe7AxPF6EQdSK1o6m8UBdDTnGHPvznm1EjLfVAfN",
  "key9": "2ygDDYxt3hq9Sg6ZxZAJKB1BcWQgjreNCQVUTXz5AoJHjHGgmCMsM575WQJi1M8qArV6Q8BSWFN6rdgCJYq7JiAQ",
  "key10": "4YzgkCVvkzAe9PCqqYNAtX4rku47C4R2RHgSyqmEcnpZTnDu5T3fCMSFm8wCQsDgqni1ukTWuiNWxaE5Bps66PRr",
  "key11": "53My1vx2KHKHDfBkUuz2WUqNF8TS1cVCynK3DtGBfBLhxj2KEwA9Pky8u8qyr6gAVNEuWb3erdP1H6eVurxbeHU1",
  "key12": "k9HFGBhTEt8Z9VSj4VBBAPpYr8e8UxSAr3TArkvpYFnSrM6Fat3TwUUTvqALe2WsAWnjZrFmjYX2fV8qXeWEEgU",
  "key13": "4jm6Eo7Am27wBMDQDHyJhu2maHvcjuxP8GgcREy2VossjxhyRAASTxGUkwr8ZEYu7dn4gcYBtKv4rVWQQp4EWu4W",
  "key14": "4DxEL8omcLELeUfotMWpsYZCm2Pgr64UztbcvUqXAdRffTS1yfMbotdxHAjEF3gwo8f3fopEu2u9HSBoWTS97H2C",
  "key15": "2EKs6ynPaW3PacPBtqCNdmMDFksReQDSzBQEBh86AztngCDvzpB4GsZYigdjfWZzntfhoaAymU6yVcCQeJ5cNrah",
  "key16": "4ghhur6Fgr6UmrW2y5YFjq15FEyEovQDXJBLzNkYjzTQLUQZbdkjeSrmKa2UPhceLUimUBps68k23C2D8GgwAUnm",
  "key17": "5fk5qu4sbXcGKogZm4hSUiBLKUu9MQ4X3KvmGDSP2D3p3Xbm5dtrWNbydnY5979JxSLa7xVKs3481nRuhqfaSqkB",
  "key18": "2Dwef3Lcxk8HaaS71RsJdqntep5kV1wUQ5g51BHGLp44qSsNYQ45frxrH1jtiq7vyqQ3WJpJfKPaidrehHC7tVNk",
  "key19": "3DYCfWNqcnWT1sD6cVHT6rMKL4MuKLLkCJZFy9K56At6VfdMmkrx39qb1ieNE9rAuYri15suBGTPFQfH9NrD959",
  "key20": "EzUG8ArzXjr1oCbfPzeRbmSy7okS22pHGrTaeLeQ18kJYj2uae5ZzZDz8UtZkGdAvsyV7HVt8PUmDSrcxdcxQk3",
  "key21": "5hwFYqBSP7i8gaXvETC3oPgpWYN6mEAVvzQdi3P4PjoyhsqUAP2rVyDxGxfhYyuTH2rg5b54jvNPKVMf1UA5utZ2",
  "key22": "2ZS1Du7ky3KakLKeWhpBzJNV9Ag4M48QpTfn9RjNXB1E3UWyVcViSbRZx1oSfkXMZAFGwWhjqUNrLmqqN9ALrDqo",
  "key23": "3HygMrGrAeAi5Zo25ueUux8eG9feKJEBFEeTtiAQ3JC2r76cYw86hE1SnTvpMnc7pxzToumeX7rW5nTWfLWe9Kcz",
  "key24": "5hNbLJzQwFgaTihAe8UPsfR4YSKgbqN9HeiPB3qv8UVioi7aJNyuVdhWZDh2yqrRnDAidhG1cpTffmAYekSXv2qH",
  "key25": "5fv9hizTjKnQQcNjoKaWACxP1RdN5P9oZLcTDApMtBGjBj8igp3wo7KNe3wJe4LrWWo7pQnZtWDHPE2uqnKpDhpe",
  "key26": "3LhaLCpkAfrSTBuqv8YtePcon22DqBEmkJAeMBU7unRwR5wngTJk3j6AMX7yUzukh42t46ga8AVGMtnMftQnpU6x",
  "key27": "67XJj56GVnoy2mVbgCxr1JYt1kNeh9R4tVMupiFDBsoxfHyN5SGE9UpNssoitPWA32DFf2dE2FygFjZu2qTHJT7W",
  "key28": "38iWqTx1jgEUrigGXQ8PgoiUFMTrDYHqTycguubtFTgLUTwJZ2YDtfXT46JvMKGHHbeez4dMdkdrrken8Tn6Fh63",
  "key29": "3r9NaR7L6hpiDZgQn3BiWhX5sWHRHhRzw4it2wiVhWNajUgNtrifU87mu2cSuJ4rJsaxrkv5cHhTFfsEWNgDWjca",
  "key30": "4zbrTwHfbCf3Ni2nNhKdE1s7hJH1NngGTPbW25NUcYpxBt9p9H3KSCddpCA197kcFhMWYmoFmMVEgFJEQ71QnfM6",
  "key31": "3ZGrDqbn2D3B4QYq26XqJXPNg77Du2HXciFfU1QGt1ec7vNE4qaxwCnpL5tkKJRkZ4XKJtWnqPskV4nFXFT4eKsW",
  "key32": "DRt98o4r6G7DMVTqtyhzHFJrL2aCUScBCF5kheN99Gui9WSqxwsiwae6ajXi683zZ2ZXT9mhHDbBRxgGKpH7osc",
  "key33": "NphUig5xvLoVJfmncPzZs7h2dWnV41eLpKtPPcTBLBwEDwNvndiUcGLjdJDrPwogEP6AApmjUVt2jENedcxcrma",
  "key34": "5ynUFFv2u7JSAX7b14cDhUKHQP7DXJPvpLuSpAf6kpwVri2JQAZKYYgjnuSm1SBdYFnskM8S9gAm2r1qujXT2QkL",
  "key35": "2C89yCiRRo4vTyTohASw32s1Hi8tYbyMERtpZoGB7kWnTTAi8Qnrnz3jhnidDug6kBHtbUVvXU64d4NeKf5pJY5V",
  "key36": "mTEXLv7P8jYZzTXBjcmJYxoRH5u9aNYzMP1io3ok7RXSCMgWR6XhtLCbwRmzSvMf65U5oDvuVVBbTFGa8fDrRYv",
  "key37": "5k8vqSBxa1hrQeJ3uCQ5oZ5yHxjZdN9LTApkHct8WN3K6nm6bz6TyxSzgG1iP1rqkxs3SfbBa2mRv4KSnwA7qYow"
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
