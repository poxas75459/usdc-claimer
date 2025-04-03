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
    "3CqqeP3eusiMee83QjRUZdQdaxxLnHCBz1VxSsDvNujC586k9H1ZRp2Z9LabAfmj6vtZnGos1MJFG73bntMwjXbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NZwyY3ooyXhsZia3XLXL5Mo7WNRUfwd2m14fqTrE8AUZevaZYSsVqdrsvbkPynLKQfswVEsUfLLn3bsFGjrX7UP",
  "key1": "2SmX9YvCWuPULoZgoQzMhYvx35jhxW2ZL6SANsuF9rhJGq9yFj4oBVQa95oTHhhLXymJCsZmfKMhbti89ueSPy1x",
  "key2": "3RqttSGXAT9ytrEQaSiWrPay5waPkWYTPL3m4ohgR3hFJuWY24uxWsskp4hD2aZuiqBzfTT3Q3mR73GjA6QqLvwN",
  "key3": "MfYE7dkFwWSTAkaVuqLysPSLhtS78ANpMdBPWu3Dd8BN7epJ7kKijJS5vLZCfW3k68wDFDf61XMQ68G1Gh85C3Q",
  "key4": "btNkNXovCmvuXBXK4TBxq3CxKfPgrx6GftbifamFo9Hs9fbo5MLHwB5qdLF4WaLsMHEoE2xTBR6v3DRvmUGoZZZ",
  "key5": "2Lt3fug3M6jzjWrW1AqVS4DwWcr4y5FseR2nGgDaRK4siYvoEZSDsRNiPEdbJL6wmuFwtQTkEhcAWQXGNZPZ5dXA",
  "key6": "G3t8TMYTbNCBJjV1FJiKJ3UzeyFsCUFXNUheud2xR6rpetD24hrvebcxHtcwTGhBGJX3YigJtfnkm5nDzyTMP3K",
  "key7": "5uwMv1EBK9LHDzSTLSJjJFZEh8a66o9rEpUBqnDtYjnJzCHKAgbNatPaQ7ZGexYEDNX6WuoX7nQxpGEkQWYpTUNR",
  "key8": "3LzcNwEasvEq7fN5TT1zyZJb3QDd8oYsqRSbhCbML6Z3pJZYrEnjq7zLMZnpzTgAGUKrb5Sh4hU1akKH7dnX9BZX",
  "key9": "479KGeY5ptDm2vJhLjxb1RjdghdVKeMVTGBdKp3BvhGECu8cDfKevew3F2Jpx35Ci9rp6D4KsTMY6gKGrCB5WP4g",
  "key10": "5XxKpLjFygd5QCQjwJzeRwFF3b6VL66h6N5zNpRf4RPDW9sfrYU1cGc7pFq6aLSiLkJ3BjZjnThyaQVv9ynLX9zp",
  "key11": "3G9HhFZXA78G7N9bqua7eoavDTq3SYKDi8Fmmn7pfucsxMFcMNcjeqqhhXn9JsACyLHGUkFsBQ3WCvPdLvxq3vmN",
  "key12": "3SApeetF5fe2fHbMfzmmZqUhkjjWWdAMnmZyyUcVcGgch79AmZE8uUzzXYoNC6UyasBUGKf1H8TPJG3arSpyrJTL",
  "key13": "GY3TgGnVzd1b6H2EZymY59EcEtEhNkmReWkBXtNbySwXXavS4P6qLdWK1XGQ6Ao2F22JrsUpt7Z3voHMfeAbjfv",
  "key14": "3ZR89UNnxL4Si6ghpPfwAS1a38qABHcQmgZNa6vVw4NsZSr5JKG1hd4NBKieRnkqR8K5wQEiakfx9iWVD5iuCp6F",
  "key15": "3bsFeCovtaUAdUAZF9P6jWTLR59s8vwLHmheEapUjpH2k1A5fCKcSURSmL3QTGTftPer7Vif4j2LppfZPmgwC2Yv",
  "key16": "4rehotFnKXyqPxx2qFbaq2SSGW1gW2gL4jSstvrGf1iVyj6CZdxSGoUCqekB9zkpQoGVSzxuCRPu4RoiGFHHPn96",
  "key17": "3z7ySAL48E5vxAJRhMcsKGZy55jRmtDXMbZNjuVykNiPqZ9msVvfdn6EU91F1rWrX81A2opnbqn2f3QWoEFxTzs1",
  "key18": "4DP7Y2DEvVcFGGafCtCw2KScHYakAeWg9ubmgwomFGZSf4W6LjSPXCq6AnSN48FC4SxhsJQ65VQct8yv5dCVBUEo",
  "key19": "22i9D49kDuk5Z2TViMWWVz56jQKSqJNgqxBACMXKV9Ru1iZAwTKjykyTbPFMzuQG3gPapqd4s5heayd2uHVp5a3V",
  "key20": "4ZyVLNemoEA8N3LmoUpT858hp42WxuMRLSF6AWHXUQzCdxvq2zZYbwfQqqNsPSZ1eFv6asGwpFLxJJqVGb4hVbVK",
  "key21": "4si3TLhPxrTAfDWNbx8r7nXU64ziSeaueFXaBUFPE6eTHHpkRcYqH6pKPt3r2gQheA1hvNoAjbsubeWKiCmweckU",
  "key22": "3kG39qyxK8xawLXUbEXVTgvLsrxoNAUeKVD1RJQFwiot2fzCSPLxoTu6ceZJMmUBtw3yYYDo83grQRVYpsMSvmaK",
  "key23": "2wpFfjr9ikqCXBgmRDJnCftSK4sDB5AkFP433U5YgtS3m5U43NVx3qsSU9WiukV42QQ8fSZVVzGZPcjuvSMDnKbt",
  "key24": "4YopxCfynvrhorWFqBgvezE5LtUg8qrY7A659Rz33gqp3yRz13M6E8KRpmqBUAPfcPCnmjM8me3ZM9YxvsFheZHk",
  "key25": "c1WJC9k2axMTbiBXCcRMpy9qdRsFCnQCs9LaKdbPXygyLcBE1NvhsConDZjBLLwuARmbGjU9gfwHsuu5Gd1Caj5",
  "key26": "4Hq2mQa2fkJ1JNkYJM2kxbv3ZBYJYeGGc7Ad9pNhhoNWXvtEpnUkZgjHtFY4BxuxriD53RY52EKYTCCvoNdn9oZV",
  "key27": "nwLSNc226ze85rU32dYFfiYtBYg4d5TFphw5DS1dJHz9D8v8DV5E9RBPTEJtDAzJCS9i7AJzK5hNFizb7hRHmsy",
  "key28": "2D2wpXWRk8fqBMuaiFuJcje1cVAE4bBm8eiJF2HsksTYXLpzeacic1nt9ZP6BFyq2tbzuJsXxNVZQMWJ3i965neF",
  "key29": "2qkREaCYcDcjqBsBiemMUz76nMwtwqcZk5rzSFLbJmXh8foM7HtrdTTKBwXMxXWwuGCtEsYrnBMsAoR7dbWdHPS",
  "key30": "mJueyGW2PdpFnUouSHxMf9Ct8zbTCkUByPVw7iHAZWkgvEMaEWof4qzrHwgbxshsyfk9kL3aJwZXoeKgsHaH6XA"
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
