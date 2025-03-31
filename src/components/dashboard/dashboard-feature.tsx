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
    "3fxi6yjD56RjJ54iH6JaMcJK8yfuMRRtedp8s1GUx2N5xJGP3uX9Sc46qmm1FKM8c4nWiSfDqUXrhtnbAUTtG9Yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fejFoeggJYmQgrUjkKh64gZXUQzqx8ywWsWdMYVfP32sve43GPJyG9kffTnG78hzAR2ktydLGjyiZ8sHuZEpHt5",
  "key1": "49XZfkK1sJSjez9NaQ2NqZxgscWecwa52vUBFRUaNX2BDTxXTTUPtKyAGKrPH1ZcnEDmavqH4KQUL3LR23WCWmRH",
  "key2": "3jawG7X9Yz1fBBNF8cRj7Uqk7HaqqrbKmYozWbTtLajAgQzrtT17gLYe67cTHB3oFqnkehUNrgJotNF7pBzDxGuW",
  "key3": "4snrwRjvgBSV56MHzYnxZsqLS97xDgXFVoRFsRw6aQfPgwwVeK7fTcx6ietXzk4A6hCLKf7NwZ9rKvxpvpaiKyM6",
  "key4": "5mFjYh74nTDN4NBASJYpKM53juKwfR1o6QuKePDoe8eAUcnQHETePBof25DGtfcmqHwgzerbpxABy3J4be8GVQBA",
  "key5": "3MnLt8b28sg93wmUSHz2FK1SSowNJA2ExeinCpDhTiHDcXzKX5Tng1PFzL1sdjgYMGxRao7aVaaqHgdAxCk6RtDQ",
  "key6": "z61okCrd6BPKmxP6KvzbgirjvNu7vq3v5yzWUM9XZPuCXJhgTrAALY86b8gm8D1hd8aqZWuUyq8LaxD8goT69TZ",
  "key7": "TkvffRM8oigq7YCT52NZAj5XggD3rH7n36vJLNTx5M6hcS8ECDcj3Fvyq7utJbSs7UBdxeELNEUh1wcfP4z7yVp",
  "key8": "2uGE8sAVnUtetJH6fTwC9Sb14UZf7X6yRfNiQV88uxNT3X4fBxFEbVoUbRQPwCEcU2KFd8eJXaGVfWF757ifjLvV",
  "key9": "26XzfC4Bj6HpLnkfShHeaQ7wKYGQdB8XeC1JPHyxcytRMbcxJenivs1AUoHivWiZFaG1bFGKPiu6VQ21Qz8P2gNC",
  "key10": "3nwyDoXMFut9Tk9Gn2yLESV2W6GZUY8M9ZDWwz9cYHsXX7Uqdazkv12DhfBkTgSLQtCV4DMK7q9dvcVsvPHGyte",
  "key11": "5o3qePqXTbyS6sbCasDh2Zcmtpm6GcaaVpz1v3z3wXUjmGsoWRgwQprxeAr2vbSdUTBPwtg9NEs8ngGpmzrHsXXp",
  "key12": "3Lgr3WVCBZSMSKjXMLRUeRPvvYBTB8cuUezxtf8ek6Kp2Pwud7ag9Ee6EExJCrAYKNbm7vi3pJvjnPPfuviAoo5m",
  "key13": "fEeiLQsP9CwadjEFs5RmuYVAwfavUjXLLPdF4tFAZUpFqNcY771R6PYu8DCLSPLNp9TkSDtVrVhc1CKxTMttZTm",
  "key14": "2xMNJ8HwngyxJk5uT88xvTbMb2QXTM3s7nystb8mgaMTt5gQHbNNpKH6zHwTYiays31gaDZWgdhHEpjm3bbXL28C",
  "key15": "5hv6KkY6ktWagGNieryDXUm6RqDhJJFJUZM4auoHpu547dukk8wG8CTHJ2rJNizszLh2j7QmpT6iur7bEtBo9UXN",
  "key16": "5P26VC18PE5MYJsDCoLLLmKLpcq7WPv4DHiKdYBKzeNqmRDiDN8WED4imWHmJ4tTXKsKbaP9yeyb2boEDkSPbeSr",
  "key17": "2h2FnVjrG5U1Gu616mhrUF8EZtF9MbHaLZpLwk9m2WEcB9Lm4DNw9AvREt3jqmu8HE7KianDtacT4srxRCaMXjvZ",
  "key18": "4H9pd5uTQ6SU9UJu4xi62gpX45Xv3bcojr83JRj3B3hkaFnwd5QED5gQxG636mUJC4XfjhMJBUsyVhTmnGqdtUUM",
  "key19": "42399y4QZHBnKsdRL9GXPyeQsNBLzxUjxvbsBGM7NhR5DV3tYNrDMUKoM7A9GgJVvfaBFhboMeTTV1nV3GYMiPwy",
  "key20": "2Li3EHUa9cLQrBT5bBmSb6EkKTUu2i7Uxr29QobuW5ksTiRShfWrc9k7JjEFQVqZcpH9mXF3erqr4jnT5i4UmkLP",
  "key21": "4YZiGAv9J4o2t4zsTvCqWvbgn3kfcfRGomMgAfxyUmzP4yPDttSy7skTJb47EYRL7N1Knj2gcsBSFX1VCUi8UT8o",
  "key22": "5wQww1XQzUsJjDWmKmrFdUGLgGq1KBz2Xv8pK4G6nPhsfAoMLNyrrtK8FoZKhaaWrTf5RxSK1Hi9Li3Q2WrF3Lw2",
  "key23": "hRKRq8QKo2czVav7vCddfzpnNcTzcRnR8rrWfP5AiFBuQwv5X5nUnQmK8R3dXzr4rhotHbWcHutvGA4RZsWVWS3",
  "key24": "3xRGkyHxuURJoCAtbDAHUMq6BtkAFhdLx6Ke9oLvbAkiMFBRAhwS7trtaZ3LuZYp2T5ciZ3W3oSfp6y1qq6YEiTF",
  "key25": "299rygDHDNPGdVF5LrN9daHeZczRanp9vVjqqZ4iAgq6ayPWuZ5Bt1bYdGVjLjM3JJcpx168UBvoN3YegDFi8sDe",
  "key26": "62xTZNmhrJpy2hBYbrYMYhy1PW94Mjv9GaurvppxsEBS3Fyk8roWDvqBpVFUu8HBym5zGZkmxUqb5rRwncYN49SV",
  "key27": "21WgTLv2nUGUgnVJpetaBtkxLqRYCghiDp85CToeUDLfhwHQtz1LSb6TnP5qioSrVHeShUeTMrGAGKB1jxddywPc",
  "key28": "3kiTG8TeLu758hXHnqZsF3jsKXMiZq5Tub3JjEwGZdxFHxZAtFqDSkN5hHGSZ5JnxkUQ6CgpZFQ2UL2owxGLViA5"
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
