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
    "2TwuXZVMt6uR53Ysy3aJAN8cAkG25wPZRDDotuv1Gt1Po7LkEXBJn3L21DaydNzzAuoksTHTWuZ6dR26w8A1hd1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uAbtWZxCPn31aJoqFjqhLsNRbZdMQ8vaLHRLoK8z1RqYqRXRVKEwW5eTrg6yHJLnVdesfEDZQ4qQ1BDgPNyHWQ",
  "key1": "54NEF8sCBAEcJpdqxkPXsYfNaEAbWq6UYa8z3U4M7UMJGaQ7gJ4KAug9gdDxWb4p8cWqgnaLjhPy4EHk2wK7BZEw",
  "key2": "4vU8hGwn5WVQK5xHHZJjBsaUbPfgxq4TTc4ACmvX4diMN6GNAtFJcHVUXx2WHszRErKeUp47W3RCTnkavjmwtKg",
  "key3": "5FkYzMFbjzpSRoisMh6ftJKTi9WuN9yGQPGeGgWz9VAAEGyodWiq6a9jgQgfdWMhZh9PuuL2aJjcRhUAF27FuCGY",
  "key4": "4YR8JEVpA63CVupcvWUYNCkYxTw65uyH687d2emXvsWu2i37LxvAwbANXBwLFQYLeDivmzz3jQCV8vgjBbggjYYu",
  "key5": "2NUnWguFjVRgQRLLJtiYKpWGL8WMJLxHKedpfEy6RgC68GUUV2AmphzFXxHwo7WkVK7UAmLL1nhu6CXZJTLSy3Hk",
  "key6": "y7PWMjmEJnbhv1BSexBFgxJ5PQKCVHxqUuB5JyEraVoXDhVNkLLUNYZhjaNPkwF7oAeQfkPyuBp1pmWmp5YwyDv",
  "key7": "5A2rbGdXT74Wq6XuE337hzn5LHWYGCUv1t3yeoxawnrhACBV4LvqHzu3KQ82Ez7KQFqA1Ek7gPpcBaje1X7b2UYn",
  "key8": "3PKrdt245VArVWxRDzwNF8BnPjdbtazohcs2PNaaFejzDBb3B1RMvQ83sMJbzNTWun7ccEUkhGMjYoC6Ngqp1TKW",
  "key9": "5RMvtUw3V6wM34oaUhF66joBnGjdPEmhpCAGMZ1A8qZt7NfBbDUj82MCpc5eeYHkYwfuRkC1FeAu9syeLuFHYvCi",
  "key10": "3Q3jouPL78eXi4DBzZ2v7yVj4TJU95LavPZyKWgUQpyqH6Ym5wocaANstFq4ju1NenUB2tdHGqV7pvSXZyZzNuty",
  "key11": "5TSmwoqm3W2oA5smjzPUDM4Hd7RhkuL6pAAFw1vdMfJnvyXSK6QPV7vwdQACGX3ZpdGdWB5qiaHPHP11Gyu44h42",
  "key12": "33NFba69ks4EwNtRmVfSCQaev2ZyqgkYhi8Zp1mdEKMEaKJhAtoVwGaK8NDwy5CJdiB6UFoQRYG8VcYfJEaw6CZs",
  "key13": "35ZwE6Z5mXuCg3fYJWgqtxGHrztDPwpwreXeUZS5aYDFQ4EF29ukaqT86tgFSqHh8XgRunjEtrHXoHwcmNdeijpi",
  "key14": "5tCV19uzAjcCgMGbgmqQahfqM8873sLKF187vJADzCcwCje7P5X7WSV61fVKZmS2v4GdbnrFMhQgsk24s4JsUDhp",
  "key15": "5aKzuFqzcHf8QnAKHWyHoTGDS32iDWLHg3Kja6M8MvLRAv8KqaE4gyPS3GwQgrshxJcivDmqUw82rEKiinmK6QS9",
  "key16": "4ogo9mojBUKAxT939P5MNpgEbs3Gh192gXhHN1uRzF4YRbkK3dy3fy9GW2hG9MLAFND1mHGBmk36apcZZSUvNerU",
  "key17": "26eez4eYsKTQDBiUwR3ZgsadWKzTpdy9Qok7V9dsJs1z8SWck8Jxj12FwPKRyskCjycBFrAhqhCfB9Adsayvhv3r",
  "key18": "41q3LUkdinKd6j5DquMGxev3mqDgL8LnTLUE93dw1CJiByDkZJh1KuJyKnEv3MiVbekYseJ1AzrG1oQr2wPTX6eq",
  "key19": "4fqCHsksq2ZFN2hjm4Gqx7S8cnboEf1SWq4z7HjZxnTwNSHJZKZNVdQvhqzJnDEqRN6r4dKJBGW8nXKtzjoD96tT",
  "key20": "4y3nJNcaiJXAyprra1N2SNckLjZHq83pKtYvFWroQcjqDxbmMZbfVFjhAM8dnc6Ucnezhy9dRfuWys7b8sbi2CmG",
  "key21": "5WLufCsQh9xheLvWbzHz1oq6U5VnNMFMKSaLhVvCMW7L8Ya8hxyPr5akbAFJFRLJ89MUeGzrXQqfmqQSrqf2mxa",
  "key22": "3jATckCSW8DUkzJFu8ngW5m1wuJ37cDrZezYN3NY13KRS7BnciaTrbykwUc6heMcmbc78UdFmqUQNwZK5qazVjtH",
  "key23": "2XAPNauuAewpHyNhZkJNR77SYh1ft9N3pKyuSXnN1rCby1pJKtkY1En1G4hb9kQVYMeN1TLLhKAjxtBNnwuX67YS",
  "key24": "2v9gdHQx76pTNVf5YYdr9zC9Co5zMn43X9ZuyhKrfLJ2fe6oDcmEt2GRro3ziJPKSD4YhdAF39tEfkPBnqbeAapu",
  "key25": "23Mi4FhNstXMv1K65L3QbomxZ72muPGT4EMqrNWWd5See5LhxdJRmUD2KxtjKujcXGRJ2ZJCpQNbKEs8xNeEgEwq",
  "key26": "2KQEYvRTJ2V2FnGMmb2RoaHVptf2hYsMq8a5zxQFXFNxwsE1uf6s7oGFFZGLCs24kaH9uJ96XWwUiCDhaf6rCHrV",
  "key27": "4aNc6gBTS5zUPTxEc8NcDRhiWM9hReZyLezvmymvBbRdstKWNECdxkXvNersrwPgiqkCMLyhqjz7huzWGSmC1Q3j",
  "key28": "Fz7KbaeJNjFTchqWSJ6d5NQRbjrLg2mBzdvuuPPSz6YnDF31gzYUBYYqE5ugCguvcqPLryEmJJ6e4oBAZeDZpo8",
  "key29": "4HSN3X3AptDYqWtQScsGFU341WuqJJqPT8a1qyvaAg4btPuYynUg5BENUVhbELb8i91WdqBvvz57JeETxX3kZ2wd",
  "key30": "49CdnrJtbTCBYiAEvDALxSbJUZCTNT3DcBSQLEKAXCRB4pShyGSqbAZMvZT27a75DBoz474y8ZLsC1M1Q1QcYHC1",
  "key31": "5SgowLoGXDVFXDCwfJFn3ZsDf88b2cJtc33LS8X83SiYoFyRFoA8ffSLgwKoebWPsAsoVscYySHiRwYu6LtbpT5X",
  "key32": "633mi8LWs7WnaC5TyJAv1HrGchq1nqa8YtpBkuGWwZQTgxntwFqpLsWp9LDXaCqqvyVxT61EyQrQwjZ18ye87b92",
  "key33": "K3GwBNQ8E78PbYgNcCfe5J7uzqVERqbMk35bEH7zgy3jn7pyXniy3r1mmsV2gjcdGWvoDEbZAoqGZzZFTeBdaq4",
  "key34": "vnxAprNYrLwdJUAADv25VZpdBQDqhZbZqBKebj99qnaQ6kHiLXUi85HwCAF2AYZd1WbttbXxFQfJiFcS9LG3CET"
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
