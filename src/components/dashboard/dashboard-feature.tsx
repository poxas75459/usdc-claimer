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
    "2Ug9wJjDtPFuS9CoNou1chn4b5k31GzW9oxu36vzCt8EdkspPmRbWwRnPwH8BTJaA6Fvec5hYq2uu83ZikYXYeWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uMsGLwDQnGgjXgK2UtkaB9rJJ8xqYfeMPxAEPJ1ts5w3tRr4UBAJQ7HLNVFhXxDYe2jfQNP3Csys9oDsyRLvhBU",
  "key1": "eigSVsSBBPKs4SrqeawFgaHczJWfxF8t18R9KiDKUz4UtJb9cMzNoHVpyvN8zJTLAk6z3s57Bo18dPQcc12u6Sx",
  "key2": "3ghGtHxgSZRm9nhjFQ4q585MmtDpGLaeZgdNjDifUCrDFq51Vwz4xeMswrScwt2uPbK2AYWcygSWzceRQwYbXT4g",
  "key3": "4SjW7L6D2KgHfAE3jhZ9taAvsEogb7GV5HPg7AqfJYYTB2FPuczGi1pZqDfisegMULCdkWWqydzc33bYoVr6uKiq",
  "key4": "53QZbhKyqYQvVrEHpJRf4gFYxJTtCnuTJ1n3eEtNEdC4UxRX7rD8eTjrqF25DP28s3PqnQQr3EJqEKS9T5yFFZps",
  "key5": "3jD8pcEfoqJtE9dUEWjzbogs99k44vPDnFgnAjS1g9iWLZDXQxM4D24FKzrbiwA2YsvRiRXdKWnK4KNZo6h4XfGB",
  "key6": "5FowMNcfSswpKWbe2MqCSUHTL6j2tc1Tq6N5cdMu4jgAnm7HXU3ph6kzmFUtNswuWJmZFHDNSkPa74WC6NKALKsL",
  "key7": "2gPcV7DW1yyATzWBLtAUup53tWmuyR3rza7VX2fhkkahyyfbLrkVrjxmS4LPznnF8on9HsTMVdk5HFKorP6bjQx9",
  "key8": "xiQrcJsDs2ui8JpzSpJ7zQVXhURhMSHveiB5LD7HvumGvVWzQtQopvnj5UgurA4yjuKRkqSnVa7GTD9wQCh8xZt",
  "key9": "4MqBjj4anKjN9c7RaZXxiLQa8XE6XVDzBcjXncdrLLN8xSvXER1yUuXcF4qGBDVbxKGsfts4kiRkPSpPTrbAJ63f",
  "key10": "4bKFXLLW66ryMiDEdcv1x5JV3eDQnt2aBs4JNRQRvGJ1RqwTtfvSJnganfRe6rvozHqgiFrBtpKyh1yqqW73krZY",
  "key11": "4WE5vvnTQfpYQC9Ga2W5dw485TuTgQGyxscQET6pSZT1DjGkD43t7P2kKfkpCq6fTG4YpkcxyhoPfNHCnyPkPaoq",
  "key12": "3NQzB1rUGoYHEakpTRicFtUkMU3kraqFZVgRKLdJx9tFrKHvz5GEKj4imC3K19sci9LYN2UhxHcopda5WGeWmAka",
  "key13": "3xhK4CzBDA7LQzLKE4ah9hZvmWEUXZtsS5gm1qX3sjDcir6vi6TZ4WKpvLd87yka8juPPkzg2a3x2sGufSWLq5FZ",
  "key14": "5e2xujWMcomW9VpWiwSKEqXKXt91mWjwAShFLxxPc9qivC4N8YghJav2ykzCsSeTpoYgAk19vLvKVFYRbDYADQmr",
  "key15": "jViKbpADap49zTXaAH1Zh11p5RE2bGQ4fzBhdNRgJMNPhSk9brmCS8vXdHgqd8yqBh1SZsyFGwhDzYaTXAuc91P",
  "key16": "2CUm4S5MD8edqQ8VuxSUvuqEstLipJ2j6KAUeKoH8Xh3PsvwRkTrnobfZPLC3EnrZKsMHhi3ETvKHipsn1kJe2eQ",
  "key17": "eVHvGi8jJPtpj3dwDxYqqCMsC6zgXTyQqZPxtoCeR9AiSCN2GYe6c3UL7NLchNhVDcA1R8eQDnq3oVDtYmsgtWY",
  "key18": "3KfuSLdb8HcTgLx6NfTprLjJfZPwMND22zMBhzkHkAJ6Mk93LcNp8DGYTT7SH6x356goc34jFFtk1DrQg1L9yFRG",
  "key19": "2k48nHgKX9tf68yLDTogyA8gTqddrSwXLUR3TaAuPCBzL2zG5JLN86mMpR8zVbxJ3jxVrSKDZVnt6j2DCw5cTxRc",
  "key20": "4sy6Hqc5oTS84WidD9iPrY3hGcf7Sv4F1oAcR5Hn2NfstG21J2gWJYHGTtFFDBHpvarHCjLjNTRLv1RHh9E8KrHh",
  "key21": "goeUa2BkQvX1TJv3cGzpKtL86k6HKVYLJbZkN2r7RGBZ4QXpgDGYw3tErJPAW27BLvRTHAVuLZ2dSK6544jzRND",
  "key22": "JAJUBCLeJDvsdFU1TiSUfxsdFWB4tNDRJSffvdDQ1UCETAJcpP3xkxQvHgKCQFBuuoB86SKPhzSxUtC1BoJVJ3x",
  "key23": "2EtvgGGW12spTQGwV3mZVBtswMBGnbdHJccEk9cgpBQLpxhQcvdSnYtVYKh56Q52hvimRBNMuVwe853v7ALaDbxx",
  "key24": "3KMCE9hfHizgKAivbQkuUUda6MZH9pFcq4ZiJxmMLZqhFEf5qytD92mXGt93LNH1ABSXvNDHX9B96mskBBN3vyNE",
  "key25": "4nfL35H8ovr2ncB6pFZAgB1ZsrVdbZjfB7FCKNZdsyeayhGb5fU6ZVprMiE1U2wYJy2rnsW2kbf6oK4YnLo9JwFT",
  "key26": "2nHdcaaNY6Ak4JoMtrMpEJg9aw2n4VhFodw5YFnstCbregoMCanFUYMTE892fnLFdP2tbGXetBGQvpq9qRsmwzrq",
  "key27": "5aSnpHWwenLCVvjAhKpT94wUDPysc6tFia3EZMaxU43RgX7Uh4r8hJT74BExNnhaVajoWgWQoeXyzGMpgyL4KcFS"
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
