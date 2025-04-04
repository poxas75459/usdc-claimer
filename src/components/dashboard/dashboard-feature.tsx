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
    "5wrERgeHeBAv2xyQipgJR6KATgfS1BafGCFk5ueLo5xq2YNvK5b2cr1ZNpEFU4K2Db8i1NNeno5Jzf1R5yTkQJJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5udYvDJyMTNbQ4varSsNXHByMYoGmr3PpZDGaHUmWgto1b7MdHh7zPbDSkwugVnteRRQGnvpnCx5aFSuJyPSXZpb",
  "key1": "33P9UrsQ5Jq7fnYmkevZ7YfUZXU8U8ztM7c3EpTrKGuiEniarAwXVpP89hwxxrTSxRYKEi15cbYHGfanjep7Hp2q",
  "key2": "4ECRkCTUeVrfdY2RAziGaRibTnQQJEdLyzEM3zGfwbCUY1VA5TZtAmz8RQ2gQk6Y4yssUXHGnNznKxoWtpEG4xE9",
  "key3": "5n8coY4L9nZ978Bj2VQa5Lbt1mzqZcbdJiB3G9AqcDyRRXg2LvLQb7KzLsK8A3KSLRzbyGjzbj8qA6a7wFu1eX2t",
  "key4": "4KFpPW1e9BYDBTFHGGtoXRn1FfqgdBTwrXbwgtEdnjFcenquHkczBoj7QZrukSXMzfjK6LFK2Xc9wnqhZFTPh6zL",
  "key5": "HAkPzLksDRtB7AZ24CHdLkMudvpGyDp9uo4SK5AVwNarn9ZSaLW5aKRaUjquNa7NL6XjpB9WvqhgbrqinyJaBnn",
  "key6": "4YcUKQqoJjgHRbqMSNgoM7asF1TSDJKeQ8o2gSzA9cV4KRxKhNM7H7xXrX55ezurRXafGTufGVJxtu9s62wcbLn8",
  "key7": "4PrMwAtttfhZn3QUPH3r5kwL8V6MsNLXC8ka76Yyj35FdabgMSCLVMLnKXQyPsJQLGMqNkWrVQShUSq1NfZ9Pecx",
  "key8": "5EJP4CYfmLvvSqQbEN7hm3gmkzerMQum99DcytdFCHHV4BhNx4H5nM5gg7KxNHUF7vtxgee3ZGpjVKte4LmCb3sX",
  "key9": "2uCefnUhuNzJDxxTjxwPczjbEMQRXPK14MeSDvCChXxZ92pNgYCk2L3chdSExG727zf78iNBGjEGs7H56YpBXH3S",
  "key10": "bBoZdobAQuLYZyUEG5PBWMG2FJ9WGP6xoYch6g7rfA4grubmg5f8BD6UiFfBVyzZJHvmUbNPteANVPFHQPkc74m",
  "key11": "jrcVCqxogXfJGi6xZpGjkxjbMkuqynTtwLZzL5VcQ7a9UaHLZdsx4zhSHdJ1r8cKcYvQqQoeNARCtr3pVFivfta",
  "key12": "ozKz1xXqU2h4h8nDvgwLjxPeuqNwqDAiBNvfowPQjNJXZRNwZoRQS8vsojZ3rbiqu4xzhADAbY8vstEvMCV1jGD",
  "key13": "8YwdwADQcAoTmh2yf6rx66m2pkhf8FK3KB7smQFVsTU8FUDTCn6CmdjWbuDsZDwAhTPz8SDywdbUGzk2HMbLmrt",
  "key14": "5piR15QwkmwjbvXbT8FguxEkP43RNqEAAZvvL6kTepqVAjoLgXAsQsuTe49vDeT3rnxCrzGCtVb741Serj8khurk",
  "key15": "56o4Qe8CFtednvykitNYNpfip6xpS3NqisbHP2WKNNKeejnG3TZEZzMC68kFe9XA2c8w8nRBm7xjBFbtuHfFvnTp",
  "key16": "4QicRfP3ydGkWuk1jyvF4H2fLFzSHLqBGJUoKQgWrjNcEduzAMHbLHjv47ZsoMnNUxjm1VgJ23nKKzZnrXM954Dp",
  "key17": "2JcgHagSw9XRN1WtehmV77UU7DnuMb9vVJDAiSvQ8cHY5Q45tRUfQd4s4fskr1u31VLPhgHQ9RRoLhQGNW8hT22X",
  "key18": "3Y9192hdgt8dvdPigdAZBKhVjT5gL3ZSDBXf5aCMJJvgmRaJcZE6vhXLpsJSz1iZv2N4keyjuN191pAFSKf3hdq6",
  "key19": "3R595B1TaeCnnGPtjG5Z3YpgU4yRUqtaJxbgWwvo6b5Z88yxXVnkaCoNyXbvnhQDy5KFJL3E8wiLodNxeHFDTuoH",
  "key20": "2sLjyYotNX2N7AoDtUzwhxJH9XZvoSYA2fBfHqpAUZqLH4y3rGKWQCztQ7phvE4WKWiFhRbHMsb8AFJnudN2yVcD",
  "key21": "2rXpi6W7aC7LP6i7X4EyzR8NRzxuiJm5PVUejES3X7Ao4JfHm8v7K142JR6AgAcep1mLm7Ccgmjs3dcEsx4abHe2",
  "key22": "2itgtibeQwS8x34yxB5iJ9npz6v8WyvxJefyY4XSvJmopVHYcXVWz8rte74F5a8XTmBgPgFXJivu4K7uVaDYxrbK",
  "key23": "4zBMxdzW73s9i1aDvX2Paj88Cn44xVpkYoWPiHvL91xkkWKTEg8Zz3qaFrHSNfVLUdto7Gpaw2yT4PYunvn4aBpo",
  "key24": "z23YEbwSHBun39AQa1EqjoQ1qUHcBh4AvMTz3sQeLaYnYsfEJXbLQu7tRsiZsFQP3EPAhSzHfLLV2nFMUx74rvz",
  "key25": "3e6zx2UYgrpcna1AnZDQCiqFa8XTp8kzcKF8tNCUR4bZqnVDEnSKD5C3BJNSEWY56kjaZdQdKrqPci4vcViWCPws",
  "key26": "3dSTmymYDu46FhCx44oxqNsWbnb7kG3GNPaSSYP9gBQgQXpuqeWSmFL46pJw1V4jWD681ywuP24VxGq2gQHNWprV",
  "key27": "DvdZxKufxxGS6ADAYeDYzHVKK4dH3FUfaGk6fVddBFpoJg1GQBYE1yC97uWNggLMkMFewZnJLQ1wGGHhmv3djQs",
  "key28": "ZaNsetFHiFnj3yTTnA9k6rK12C9hTioLPWXDZEANjMCWtUcUGrW63Z3UxG2JGRXMw24AZXguihd9bi3zCCUz7f9",
  "key29": "CxuCPhVXDqpbv3DbSW7xc3FbEAYDV1SxFHEQLNdLyopacDruRDsaGheRqocuW1bD4w8qiMCvwQsJUjZyfLDi6CN",
  "key30": "5XcpCV27CQZhn5vLcBXGBcJ46cYLuBf2FQn8Z6RVj73DszZQXK3qTZHB9WJS3fC57dgY11BQVWgrcuMdwoDd3idm",
  "key31": "3ujCdpiejNZETxa3cEH3adzLhZYr2HUdAcjgsUyWwqzfUBZLtRJY3ho8pd8MTqPDyf5mNUUatW1H3yZyCcAzuMZX",
  "key32": "5NXNUQaiNsR9Dg1eFTPpjhoGUrvfcGRJFvSGHm4Vevv4GDmvDSVUcgQhym5SwpBVAY4HsWNe5B5Sw2eaHoQfPcwo",
  "key33": "3PoYKW5XPKsYM8AfhfuyMs5BfNEjvZqXdPvmkaehbviQY8drfmRFUsuBQh8FG5kfxgceUQGKuayBN3L4b34B6AWj",
  "key34": "PUHXzXJg1mE732AdmcMiAiQLCrUjCkV3msLjr1s4zoepnqnpN4TY3iaY8LkEPB4C4iX8ujzPwB5SSmZ1TCji855",
  "key35": "55HEVnLmgdPbr7BmtmP7FG6So97MjefNzwtDULijr4pC3hRJTYHU1zgQi8wqv8vwMgD9hexMD47V41NyrasK66po",
  "key36": "3r8kaJrS1kGvSLeShQYd7GWpFre1mUwgLunNmjmWVf1SX9hAioE9oorxdMsNxLiokgtnns7TaDi99gcaLJgB5ntd",
  "key37": "3W5YHMQR9kCv7dYL7afBZTR86tsBrXLNXiwD89YhjhgrM1iCRwepGj9ad4GHoq3hEfAJqN3nnafBwK4apLHf9kyM"
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
