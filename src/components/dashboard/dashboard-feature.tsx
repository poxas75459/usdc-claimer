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
    "4GLkCDjqc5mdpo7ZLfPPy8CTpZEHdQCTWLxjKdoYeSLnAKfxA22GUSTATs2cbJ53QAX4Af3at5SmXHJv3FS6Q6So"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iJkm9MjmUwjU2vKZzoEpePhBHVP87ys7gVTC8RGqKiHQkZiqLBiLYhdDcuSTDawsvDDJDdgNZcU8WCAsrqergXE",
  "key1": "5zjEbhyhgqfJEdZAFCZebAoixAVHUu6kASxvQownxsm9gAtmgjxZ5JMjcw3BrbpWqZBA3v22WddreasS9aTtetpj",
  "key2": "5ac8HhaBGVDAhEKZ545jFFmiwBhVVyKkragrNHQxXmQiBoAceVEBgFKASqBAGdKn86fWhQNXCdowguh5VDym5Ggu",
  "key3": "2Bkj8z3gxqjpg2Tt5THVQ6CQJSWjNC2Q1Q1auH7UebYjCx77eKoHRcb5MXmceBsXT4ZqdRjY6nJVa4XCmVDv8Rej",
  "key4": "6128BWCEPGKjQdYkHkAJJ7afaT4k4CS9KXgJUGnLpXg9byJ8X1796BBkSN1A8kFixo97x9TYEiSauCbbKnsgEHBR",
  "key5": "5hQRtbuvtYhy5mQUUjdBnaAcUyyLbKspLHhNWwvnxBqGxrr4NLXxxg9h6jGoDmvut9YKnTDrDBG2JY7Jhd9sNgqW",
  "key6": "4gG3LRzRJUYu4h1hQ3PgEbNz9JAmhcKV6mGz2smVa3CciExkd1ynLVWTWr2yXTpHPtUmRZPJpCEKik3qi5nfgrQR",
  "key7": "3U667cEzhZbVU2CM17HRiBup6iDsS7WngJhfTx43TtfKjmPBCSgvUJLtDSGL7ucf246nanKeQYkm4CZDMN785kUg",
  "key8": "63PTXkTkfGgDeXxZfUfgHasS1Kd7jRiEei8PWPRYK9k1xTf3ART6wsvzhK9KcR8sjEiozM7i8kJUsGW5YpYGEKmz",
  "key9": "5Vo8h3nTp3WgxNSe2Tvg5nvLHZPZ4czvJrB5p3eRvyiERikv58CbHX21eqoCMQjnJnBrVG59HZTBXi6367S7znkb",
  "key10": "2hjQoMYQwDboPDNjf69UZvxzJ87PVBREqrxsNR613h47XPSnsq62sRYsQz7JsTjMCpqA13yx2V99nBoRtsVupudJ",
  "key11": "5cesaLDDxGT2KfTfkrnyZzRA8XN7j3f7SGTk9XQfKKfYfBtWzoZ5CXH1kXr5jKPnmSQEnvjDurpy7CjKKLMVyxvy",
  "key12": "3jBX3brURhrsCiMFVz2tGiiiaWjDZt8pKvEMkuW2JmJRcutW1t6S8B6YSsVN7ibZ4NFXv3DhS3cBKupR59eFJpHk",
  "key13": "97hgnCERRAdMbKZZTUAG8j9QxE2HoBoEfZTG5bpBX1k55tbXN67Pu3ARcDXQU7FwfJCwxAF5eaqcr2qGux64zJg",
  "key14": "mrQDYUcpJ8hSNjNMtBdPuo64qLq8SWuZjz7E4Cjq2UANMHmDLRdhfcjTXjJ2uygNYxWvaPFoco7yyAHKcMa8QZm",
  "key15": "2KNB78zje9Qa9eMftZkkiJbjUjD9S2Bho9pMe1Bb35hVy8ez925J8fy7zB1SzdK9FFxRHC1QpyTTsphFAq4eV15g",
  "key16": "4MPf6Rf1S8BQQrtmkEjjxfwP3ZiP6qiWFZUTyfZsmJR1VRDqWUCi6j7iMrj47FhsYemtS7Go8cB7W25opVwVhZ5v",
  "key17": "GeskCKhW172U7tNoNQMiMwWmxKC4wEU7tKSvtHsM71wDBzK3BrhoPDjeMx3f3g2MKs4QMuB2AEhFRBji11ZF4uz",
  "key18": "4TLRDERjgnWtfBMX4nt4GxymExA7AHSohc62STBdyC8GFWEgpae1HVTVNYPbXsNGEyaoqdEDVd8UKFXZmJTo8vFz",
  "key19": "4tqWtbeoNQRdQSppSYkL9Z8epcFhkhSCmSgEDckxcUWkW8N5JR5G3rzvwSfXFzES2LnnQcJ3vAE9xxqjdWzUp3L6",
  "key20": "5xpmvYMDeGtjB96pNhcDcKGXD4jmkzR3jAQHygC7GSESGVa7LChhtXSBBDsPTEAACyE8yce1D7qwqA8SSm9RiqVo",
  "key21": "3W8HnGxXAfqdqLExbPqy2KbKgvE1s6ynfqMcmk6m8Mm6T4xZgSzChewrYmXMzH3Wxv7tQqHeYsK5zGq6Y8NaGAw8",
  "key22": "57NCrhmnwc3MxwfWdnziR42wK6nyMmgbKA6jrJdkjZMnt3kTb4S1T3pGEXnhcDB4mhjDYnHUk6vQviMpjtJALAMU",
  "key23": "4EaYNSLaPnKUq7R1Sxc528NBKBdAYRzXVqCDAAR3mqKtDiqTpFHxkvqUTnHuuCCMKCTZfMVJLkocCUUVnPfjyeGk",
  "key24": "3RVKvat1t3sT9798G2fWZ6JRvJxa8Dz9EjtEEVVQzKWaEcCjqB4mrndCWpoiagZJaiP2Pi8EsWJh7Ec6VW21aJDt",
  "key25": "3jcxN9SgL7nx4DckXmE6ZWYmureT4zrvJvMSiodN3riF4hDr1RowKUDzpMP9jiAcs73mkDdcCwve6At9p94msygY",
  "key26": "2AocAh4c1JxBQCtFu2gwMws98s8AQSYcCSW8NVfjQdGb4hBDbGN1SeG1ahHbyhHbnpjHbcHcV9uAawFg42sJTaKX",
  "key27": "54Bz1EZCcFJFAkJe8u89if1z5RBnvG2Lz8F9D6T2VixiTGD6UFtAWBmBAgLWmJZE6zotgFfKmQMRsY89UExdU7T8",
  "key28": "42EXBDa6di562iZikZEYb9XK7sg5vu3QGS87wsSiHNhHM3GmNtjYf6okanqwSFWVyisChjJZSWNydz3CpvvnZoVw",
  "key29": "3k1si6r7Uivj3PvNaszYGGFhy8Cfqb1kBxtybquFMkWYEz9GUu4ZPn4G7J1rq3nNYTn8x9qgqeF2d1tVQBkWwho6",
  "key30": "5zvm8zj6MDmwgQisghsbNXY3MKoynBS7dMkzAscg6m5BCRsPLhv5Jf3NKKNsvqMaLsUUFKxKMSW1xgFEv9BsaKvT",
  "key31": "53HjJq9wT8ik24jeQSxGwDjP248utbfEUfMoQVbR56MLAtFYACLFMN2VGZGN76zE5sqrNQz4NodzVrccdMe8rH5n",
  "key32": "4aUPxUhLURwioxK2dazauVwvKKbfscWSMA75zrPtpFAdGxJZ8BgzrzALVEquDqsYDd4MfcAJ4ucs9FZbm1vzpg8f",
  "key33": "ZUfp56bF9WF8C4sALNvTusQZfewgv6euer3aTwpPmJvBKyp8DG1xyGfW55kqLFKC4Hb3gBRzxKWfDT85y4WbZmS"
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
