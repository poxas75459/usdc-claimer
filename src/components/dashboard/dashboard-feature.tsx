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
    "2Ec233z1QEAvAGGd7Lq5rb9KsYpN8sSeLm6cAfhwEM3sHWXE4w1zDFV8b9DbtsvJhE8gfZgpBX7YvppCYZ592Fin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xuet5RQeJAqqiJas6FX8txUCvJrfVLRV3JnEUhuq1CifAbrJN86hwCRX4Uwu7iUsuw11KNPfDMChbQxeWY1W6Lq",
  "key1": "4drty2yos8GSWgRVVVwMgYdeW8DUbybFEE9HmWQADuL8aML9ur5isyC3g3WD167RP5mS7XHXZa1tNK1U6zUFeX76",
  "key2": "22tnwEVNfVGJceQKGMckvRFMTzrEbHkyaXGBv2KgVwQqCsZ5REU2rxwqXt1QFM8eLDxFoccXjJTNzXLVgSusw5Hk",
  "key3": "4k3UD32tGXXZhvpq1mLXJPNVUkdgQCkdSeRpGzVAJ5Ldxoz3z2cC8hbpxWnM8fLro9rviJ3195SXeaKpmitZ1wPP",
  "key4": "Yo6UdTdkwdU8LYZqnuBDHbHC2qzkxMAKjVjwmPcZwtonYV3EpXur7SaFCYCZdP4QXSbFwqnaYvNpYDeavs9qfLd",
  "key5": "4GrQ9KfX77pzA2CfALMdAaLSqvABsYD9igZXnrwdEQUq7Uq4SwRLybpjA6kjt8kfz6DNxpmQXM6Z9fnChQNvC7Kk",
  "key6": "2nFaMdKiDsno8ncsgxnW32GDtT1skcoJfTY2AVAsR4NTA7jYRk8zF5BM74w2aYQJM1adafPCZWqAKZZVb3BLZFsP",
  "key7": "znkt758cGEmMqGR42zGDiZershWn6rnzKyTkyP3Ba5b2oLkEYdcPys5esickd3tjjNhdZDnUcJ3UTnjEJaaFzmm",
  "key8": "qtBGPBo7FHP71yxeQM7ffwketh8iPyAxnqawExnDGvVUeybNEVFYmtxFxSQoHn5V6KfsCEgKfEyoDUrFkEPjsDL",
  "key9": "4ovBzoXd7nJnz9Jz7twgQzq8o4BnWwDmUtF3CAQGkganpW2zMWfvkUS29LhfRqag75mAXBs8ifyLGSfDtRvJNEZz",
  "key10": "2hhEZj4zYYWAak3J878NtkEZn3hBDsQdoc2pRpyc5HPZNYgoJGQeUaD2tfdA1odbRHdNL9eUeAMnMKCdktvyTd1E",
  "key11": "oDeUAGjhQLQ1Bx5PLT7EV4F3QRVS6h8kDRautEFWQhN2WKJxPd4EfBDBzQibmguenbqTtsoZQyb51mWUfTpXkVZ",
  "key12": "4BQv1kguNhSNBH3jp6tEcggEVAWTFRmjEmpEup5TjtRMrCbaizT2kYkDvihaS9hAFE4TgeqygEUXhCMwmQwbYWVJ",
  "key13": "4MNdpSEBkZpRq7FKQVXRcmCmstgYQLYGjyX6d9epFtMvHfMmqSAGchSNRbLhd4AwLvn8yt8r9pPNnu1XGqaQEuDF",
  "key14": "3rkcoeGDaqFXv6Pc6mPJAWVtbs2DHzDjc3c7ZuE7puSSnmh4BteRsFesTLT1VjVYFbynC65xC3EwC9cywbJMyK1c",
  "key15": "3kkmgRKEV6Dk1jLHD9auH3TN5Lv3cEnkYsyR9pF8FHXSc1rWUt69MNWkVKj8JEwdHabbnVajPhcTPsWJK5A6fRDj",
  "key16": "4Rw9job1pDzVB2tD8NdnDk8BDzQvKtXA2UsJggkuPxTcNuhC8bxfHdbhK4TpoaoqLCGzRf4FKT8QT9x655QDQce5",
  "key17": "MNGqtGdUXMyhYDkxQnsz6DyGkS9k3ucTSsMPJkJTdsdjgmb4QJfwopgr4z2YY2GFUfMmF56xDJmj7h2pTP9aGtw",
  "key18": "3SUViEEAcZqys3T1Jt18CqP5pYrhJ3rEnW7HBhd28843yszgLV7gzrj7m7hRmS3BCkMc4Fc6tpYFXHmeKjVuZoTB",
  "key19": "29K23Q8RCFhC9cH3SPZqvx15Eph6SBqm61xhXdcSh5bN5z36qZzzym5YRR6RyQ4QxKt1b5AKZ5YHuvFk1vAp5Fjj",
  "key20": "2xM47m9VjaZJbo5DtowEbupt6UFUZytWdDFeDY8SZz8ph3mRgRQF4n18D9AdxQwKSpqJVwUus8kBjSzvB1hGHB7j",
  "key21": "54kezyQVw5LNxKJs2FkpbP2nqiiByoCE3J9bTDnx6MHncrfwjUd9sDZ8WuFX8dWAaNBHfjKoHXhHasB6wgQ4jkur",
  "key22": "4Wji447Rc8xzYePkwULDTNU6qQq6F9zmiKebtMJSpBQZmDwrBfp29CFkHNCvSciVdcugcZRWJvcxgQBcp63UfTm8",
  "key23": "2WHeiAuy4CbCXH7fM3S19329ExmZ2x1tS6HaE6ww7uYyY44m4XNhKEJHr6DPxU72JqycSewkx3esDTY1q2vVd9UD",
  "key24": "3tFwa34F4wKFh5ksLnGWjG6JqLJnLYx2ZpwtKgwpb7Vkr9AjBmdN4Ji7sXtLW6fgDNs54yVpRMeZZbRfCmLUmH1h",
  "key25": "BWPZj1A9VazRq4wC3yiizn38bXVAKrAkQdDodPji1PSPmZzPSQm36xEwfbjHNQX84f3JZVGw77tSvLEu5rVL3As"
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
