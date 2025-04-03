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
    "2oPpTxf9qpRgYnHBjoR4RvFossNVTrKiuL2ynbBPwvYrHYFxQLP6gnp5LPuXeo6ox6zypb2AvzVmziiHCgn48jX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JfcTQCofXZT2BLxebYbT3t7c2ym3jimMBoQhzstRDdmuDAqGSXx8d5WyawFQDAp15142FgngUBWy5mtu3qhKECR",
  "key1": "5Ua1xvQ1SFYyQdWR6Vqmr4s5onNG4WYq6XCECfJaiVtpH6hcFS6zmvW8RK4iK3ZxoRG1dw5M9dP6eeYdcgCVTcrj",
  "key2": "2zQNcagZ9FPW5BASPiE7Gzf6L41Rch1MqUYhnCXcgFYshGmHHrmF5h3baxLQbP1gr8HUHKAQS8yvw7imhoBZV5Wz",
  "key3": "3XSGV85azFTKprjRNUxZR5dhfmvbi7G4S9Em6DEdvhBdB6TAbFkjJMyoHCPKdcpVb3CfhPFpWZxr4TfbsDjUrkot",
  "key4": "33AmQoDnR7atEALXc488DT7dDyUQU9hPHmFhXb3vcL8zVR8msPLgSu8PCDrPUZYN6xZ9janpWeCz3KsQNruSACYU",
  "key5": "3Ykr6METVLLgQfaYLui22vBsrg7f7wVqpv2ho1zJfW5hyjG3SvMUHePs2YsneVU1JyXzzNg7xoihA1tPTs56Vy9f",
  "key6": "3Htpf5ZSFejcbW34WJWvjU37dShEL1FMx6tNHir5ATemKfYKpCyDdQJsVZHKJUD7r2X1JgiU7UVhFhqtwEdJghXk",
  "key7": "n7EzTYXR3aKJSpwYCVnGpz3tD4E2SLC3YALhXkDyVEfoSHsEFYiw4ofdDgy8pL8ACn7JsRK4NZxzD4Qr97vV7jT",
  "key8": "4NQW99eMpvq7tQVJx3onyRP9BKXH6cChVq7DUBgmNsKUgWiZxrE6SDtWWc2XbyReBg2rNaE6mxweTN1bnFXtw1LJ",
  "key9": "phztFwKsJJ2N5QLFeYghqS8yYyuMWc33zZpPsgicb4gZ8Uy8mcA6fpq5n6jfg2Gw987mNGHaotVGbTWtTxbPYfQ",
  "key10": "5PcrvKUyicfpf8XpjjFqJTGUrLbEM9PQswhwbnK9KbUYP8rr9a2N7asJJxiSDkQsmTyNqSouuepeCq4tGpc19euQ",
  "key11": "4LXZJqFMapgMQMsUQ9HMTAGqdjL17HknM1fbW65PBwpMbRqxETvA5nnUEXYz3d3QN9nu3QHHGEmBfGsiQCZCiX59",
  "key12": "3FGUHzcywHygMaZVwBC9ShM8onYdJmvKhwPzE86C3QSTJgUgbrKbJQDKKsCEBWBfUUciuRDAgmRcoSSjA2LNvowM",
  "key13": "5UtwUiymi8J5vvanxzuh7A76t1sFMopcXZD4rKbgLWLexbuJuESuUrCEtdHyCKs3u8sE33pyMVayw7YLk1eHzC18",
  "key14": "32prjyMC7ff217E7z5G9ZuxUBhDgk8BRfCtbrWrrfLfsuXaPtehuRAG5YFH2PXaUqQCi3ZMF5AVTzaxiGRrc4vqg",
  "key15": "38Na9oQpRu56s84zR2HSrcdKSdbZzrb135W59xkRZoiF1ghPCzu5WL49BjTbBwwaPvztn2Nde25oGXvHhjqQTWsc",
  "key16": "3kNzHrW4FLCm9LUnxZoHVpkDz7Ubc7bJ7yD2nY9Mmo1JDpgBA1fdmo2tWKRfKET5fi1wBbShrBmZzxa3GLE6va6g",
  "key17": "556Tvm949mi5HdtNckYSLCnM1Jj86G9mH65diqDSfDRHWXV3wXZvJ7WEDKuWsifFTDp6XTKhUTX5KLLJ3uzyTXxB",
  "key18": "65EzNocQdbjaLJBsiSiN9gZDAzdd8ErckM1vkyWob2BqXniNBMKkXkbbCEfr64fhGknYpej3sb6gZTej3uqW5Ffo",
  "key19": "3nNXxP2Wb1mQEXFgzyURyHaPjJSsgTBtVqcZsd8au5Po7L17nvQzG9i2DPcjVPxrR1amusjZKFW4Qskgg5wDCiCr",
  "key20": "64WNRL5vAGonEr195tP2DJru2u8d9TWvGZVTtEEwfBz9F6dMfnM2P1dJMsVLj72NN3eryzv7pk4288Xfzj4zHevg",
  "key21": "51nYJQkwzu8zJycpXFyrhs9TtufnbRFyo2rwBgE13edWkxQf4RTb8N6hqsev645YdsovmHSKB1NeytWBP6LGi5rA",
  "key22": "4che96pGTSKukwXVV7vc97uVXBUZcuXhwhk4ZymepbMroZPnTmYFgLHbLYBxEZxMVKwrbbAQVJZyEJP9CJAZt7Jz",
  "key23": "5TU48WrCJFqHoW8RXy2hZUDeMLZUexGWeB7NXZcNYdYBmsMYTtP68waNgmJWUzXGNkinqrDdHJwhtjse9twDtUoS",
  "key24": "42CVYf5HHo9FMmPcdckKa9j8QG9feYw4R8Fw3pVn8f6RUPytKGwq5oDFnNvdy1a79qJ4zYxWwD8BaFQXoQtwKe6Q",
  "key25": "3CQiD7t2n5Qyif4Af6o9rmyLWjrfs2mr7rGymDynj8c8Ek2z6f6dCkYbsWEC6B9zmmMspAzuXsZKy9LMBz5aWpwQ",
  "key26": "5Ht6txALmzrEeMQiJFsSmntHjtbfBVsy4VeWXvMzf4KcNBW6qLpgHx2zKSd5y1gTrzvL99hq2krrYjyJmrrejNoH",
  "key27": "65NYC8GYyz1f3XPHaUW5q5UayWSWf3xNyX898oSXKviFzUXdUDt9Mx9sRrfZNbFUNPPv7UtARTkYP9HPGyDz5Wub",
  "key28": "4srVjnYXsiaKgtNQXaZrokFzAZ85YWcoZbTPyW4fi3LDaMj3Et7w7tjKjPeSwoJB81YhshmWPYKtUGJKV6maBCG1"
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
