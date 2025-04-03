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
    "2nSsyUCzd27wynEH9qWFaqaaGc2XZPAqxsLoZWTqXrzx37YM43zSz7puQKndqUYm4FFcq7LrHC5LQsGSqwcTeGTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDSb64BFfDQngBXcvWjbQGKqbX4AZULS1mdVmC6TJesEC8qjsoCAf4x3Ks8j2X94AgwLAcAEq1xoyqdggj2aLL8",
  "key1": "2PCZXw8mL8AaqZLYoAHMFchqCzhuuWhT63MEu3LC3Eda6DmQvd6nDzoSdHUF2Z7VPwh2oy76nG923zo9LcNgEKw7",
  "key2": "4ZbDBV9mScSaGo3D8HR3mpTY5P5X5dCKQTDuxaQdESEmTdq7seU9GysADsy2NxJnusXeT1XYefr9fDcgsJsH8pzh",
  "key3": "7sGUwtLn2PNtoFgSMyLEM7mzT49eKLhr6XHD83GK77PneLmC1W9KTPd9hcnvjs7mX8vVoXjyzBvVprWaf61uU71",
  "key4": "f1BWAN7BYq27uw5zSRhxLdWpmw1Rr7oNeh3swNZ5zLHcHEnbFc53fbz23Gu1qwEjj4LSiCSNRNJQ6xyLbRWkcZ9",
  "key5": "3CuQf8buhhZnHM4nDRnYRLELt4cyzXB6XmdPbjcKyJCCtaQwkiQb2AcWztt3v8j6Fy7jowUqce6hPAh8b9PTvuur",
  "key6": "5oApd1CjpHagzTEpsdZB5Em45sZemCZDADWwCuC2NKoohjwCFAE5goQpqXE9Zz877vAbuoz6pSXbcVZdBazAXWss",
  "key7": "BzoTw42DBQwZJGcyHRfwRBN9cukaG2XWmQSwje9cqLDkCaaNKJwhAwk314aVUVdzEA13gPxFehWeEfgSsy5Ei47",
  "key8": "63MnN7dqYjWTmupDMTBWMtXe8mizZThz9UaTY5MtZKqYDqhbimvHpL8vgNQUr3F6DmGWfMF7EXAX8ce4CREpXa4N",
  "key9": "jZjXK19L3XFezLSU3XUSZmSthxyRf1XsuTHLmN1KUQ8tvMkBZMzpHmDRoCJSSdNgnAGtH7S47j9hVdsneVo5MhM",
  "key10": "DLs6WtaxmAYqYqLsd2yqh7AmuRMndARhWYmskbiHGjjQLT2Eph6ny5cgH9ukRD1EGUnfRSsYQVMuZukpyiZQPED",
  "key11": "2RHy3cbQ4rQfqZERTVjxw7gRGZowyWFBz29yd1quNP7cM7scSuDhZbUHaoh1e2JohDufoMN663n51YMg45EsPFir",
  "key12": "3QbDaJhDnxZzXUUa9xD2zxjL51UjBEYKbyxHqNZgMTwWvoNPwDkjFtNQV1tLcvN8SLLMuJusawMM3WKd4fh18EQp",
  "key13": "6C4wmWfHbfszQQf6in6EqXk9T3BeNfB8GsPF6qDmJpJLT9LyqxYxbAR4ozMZb1tNPVkzGQ2zAqGcbKTAAPma1M2",
  "key14": "64rph4fbRyC7pUnszMLhPkYTqN7bAfk4J64zz6j7G75S2ZWAWy8hqSBrBarL4vsHHuCv3M8b773pge1QQZuCCvFM",
  "key15": "4vvVGxKmSVQJu3QDFxCkeu2C9o14voZPzeudqndVAmwA8SQtS1D69hRPBvdPxNUNia73oxJYBfTvaSfj3pQTMQaW",
  "key16": "5ieDhCNXymh6p4A3BHVu9jHNAefbwKtrpsjQassQunhfYokxjaYBku87pDW7TK9mjNXPYwbWcoRb63QTK46gC7qW",
  "key17": "4HTpEKbhPkiTHVKqstHFCeZbAbTAw8rwgqMbEJ2wQvNgzeABrzyU1uhtpMPjMG3dCYzSU18MvRrX2hiZitPWWxLr",
  "key18": "5wkqFquwPB9w4ULTcGbzp4fvEwDg4x3QmDGMkU4ge7WHKbzQCq1dBrgmKN28oYmRQxgcydRKUmFQce7Cdhjhzz3U",
  "key19": "3r3oZNp2KUQ4CxcQBkduTJohaKs6erd28M6fbVjZFF4WoPmoS1kVPd1r3hNTkFg12L2BWbg6DM7bWLKiLuYqUP6D",
  "key20": "5QQE28LviAHzAZGGyb7MW8f9qf3eV8JA9mnTRpLZrP8pxrrKqLPG7Gb1zwsQ8SzSSq9nMTzQGw7S49SMJVfgtxV",
  "key21": "3DLD21p9AYhVjsdtyrH2fWn7z7xiovKakCrrctBF6xsEpi67Noozc2JVvK2noTTDUxDgDdNZ6tpeoh6hyCsnkaKd",
  "key22": "c3c5cpLHA5cZZGy3igsTE8yhgoUKL8sYrh4M3sRzuYpdMmGrFLjK3TpZxjS4BA17Q2dEfQpoR4Y5K5ijS5Jp5tf",
  "key23": "2ptX8w2Shg7BbufuqjubvvjP2wQXYDMEBQG95xzujCbQNLdS4p25zQ6jrhbrti8HWm1p3M6uAdX52YBa77CknWt9",
  "key24": "jne29nSBrBrtbJ3HtiXavQ7t4V3rg9Nh3jVA6ntr8Wfj3hEbpzTTidME1fhFLZm4PhhFYfSnLswT9PkJUxPEjz7",
  "key25": "47ZdBfsEbo2AVMinhGHSTXTMypdCdDrjZKwFGQj4xyDvUSo3WeqEbwHETeZiHqPLJmLdRPUrNaShtW2Tp49m2AeA",
  "key26": "5gXUU53NfeKM7QZFB6YR9czTpP9HFCz7HPQtF6teA3bEsLk4agRxV7iGQakhyNeYmUkWuM2Qif62mYkEFbj5z7cm",
  "key27": "4VaL18z3bmDhwzjdNi6KQmTDMtLiiT3W83MdUVMnTDTgZ2N874dQu8wTtGcndC8rAdWjEAMWkkfHrnVKtV5s18fA",
  "key28": "2ZFMNeXDSe93DAHoLb5XQW95fGzWZULbcKLrqREQPftfxM5jumXsoaWwn4eW51mSMkA3ibnzNu1via4yPnmpDZ62",
  "key29": "2jn5R9aRTZ2DuyjQihyhkevDP3kiaSEDNpJwB9Foufn3oxhnAiTDYDZJJy4p1khEGY5erbAg6qtqhivzXr4NvD8V",
  "key30": "5wUfbE2KVMPAnFGRwe4zkQ1GsUyMe9emzkfe6DL268RmyJ4rQcq9srxh7qzp9hnusyRdRLaEd8emG2sw3huFC8xK",
  "key31": "4ZHskkBL7e7osA4cwT88fGxee5MBuKA5d8h9txVjdtj2zz74RZc9uqR46kobxQcdRKE4dN7KDZq6bWQXAVXeYuW6",
  "key32": "zypM8k1ahrs5oqcURnPucX1BoZp1YCg5FZcJ2vFVBEJ4ELjFXoo9ZRnLZrNboXxgwJuuegof8N5hKUu3qEZ49Mp",
  "key33": "3QGzUomnCzndr43JWZtk5fFTCyTwTkgrdDfCREzvb8ZZtCMuUhmCKAp6hMyxZ3bV1rDsg3zemEgcUxCyeXRkYk44",
  "key34": "2FPrXBubE7vYegM5CQK3XbCTuZmSp6szsyR14MW5XLf2s6BG7cEEfWpv47U8U4pQGqngRxPK7wmP4EMwJknbeM6z",
  "key35": "7ok7m5H5iTYtAbwKovVNVD6teT3ViucvGwbNgnTzDHYD9KB9WyAxZPpqVAU5poyyNNQMAdzYpo4PY1Wv3teTQM2",
  "key36": "4DF7dkRC6sNZW8TBZWTbTRQknxHzRNfEHnm2vWu6cRqedTGUgCNHSVssWbkjqbm1DTXL2R852G7hTCLK37wnDcvj",
  "key37": "mSzcYUnmbhT12UWeYMQbLzDJojyzdt4MQuCUvjbegotDMuNJi9ZDMfEQz2DrtUd92bVVDqHg1wMVX1nsnib3tnf",
  "key38": "38beVYc71qJTPKFee8P1FtbKse1gHZjRPAXkB6r5iqM1bFPNrJv72k2otEvALPXGP3CW26uytEbypXAG11LAj14r"
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
