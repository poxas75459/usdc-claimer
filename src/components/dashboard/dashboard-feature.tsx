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
    "3jkdQhYbVk5EbnuPJ6kY6egiBTfvPBfk7K1rVFMq8Semmyxjaxtz4TiVy9m6kTFQYNyUqj2enPg5mB6cVpYJbkEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66bptZbdjih6cZhVYcM74w4JbxR5pUYG8AyXVj8pgJ1zoPUwQg9vGAApzUDo934o9rHdTGanfs1pquXrtjf5thY",
  "key1": "cxfB3VJhea7bCc1M5pMwjFMSHoEgfk1L6eLkskuQkDUuo4btsZ6WKZh8L5Ho2P8SoZyL533BtBdfSne6muHbscm",
  "key2": "5rPhWUJigwB1SbrCdi9BxAYQDpKCf2xBs4ZWX9Tzgz1nxtXTcb8GcCszdQ21sirCJzGzEArX69Nq4RmDW2wMNCSN",
  "key3": "3fzeJmzJPQTECufarKDdNq6YuZGueXkM9b9TLp1dcD84FgjSdURQgkTH2oqPEMy38kUkWEfAM6pn4Rf94Fq3spZC",
  "key4": "5KkwZ7YSVxmTsU87BbXzwUhgZsAkT6r5YGxFuRCVg8fpBz9431RWzg3Yfdg7yPPePXoHcvFEmzdPMKZZHn9yiYHP",
  "key5": "4C3Qa3jGQ3uKSNFVHR6Nhhn2vANzZz1G3p71C2CnpMRLMjFFBR88yrWLw1PVHFTVZ9YVHgnRdTXhXVUEEvZ7YKTB",
  "key6": "3FBp9AAwpF1HNukFPFhyzfLYC1tCjvLxUEKBb7n8ZTmd7bF91343GryvFcbc2GMGTW1afMK1HE4GwfhZUWXzZeYk",
  "key7": "4yfCeQomYUdwPfgfxe3uen6rxervHyx3SPdjdt14BGJV7yeHGz6F4VN4kutDp1PwmS4zckgmJ6UhTbCMVDLjdYm3",
  "key8": "2WvFmVJMrjeU7n7mNRCuRREdT3QDQaQAaLr2dnGgXaWfyJxBmk2Ahn8omHSVdMQS3F5BfkzCTHCNcHr5HpE1578N",
  "key9": "37tRBMLmUbqSADTj1xiBnyfYxH7YdTkEnW5f5UVnYqBB4ta6NVAdBcMm9USFNZ1vUTtQvysiuJMMrH6JsUcFujDs",
  "key10": "5FjmuxbcNfQdqjSfDAMGk4ArzzMdJpvHuVXLHoWmCKcSiTSBXDKQwnW8m5yyVubqLH1pYjUNUUUmYMG58R6HJht1",
  "key11": "ssbzXP4bTnyz4fd4fYauqpQ4JBqTZvnWvmXBQj4ztBHPxrJWJL9XkBM9QVMogQVt9ZJ3etkLkZMH2DtZiQXb6MW",
  "key12": "5ptVx5L7BvjcnRGpus9W78XkTJvE8zptdztsvfb5KgZ6fPivndyyynkdSyJLvPshvG4q8xMpkG6cs9nZnGKnSJqP",
  "key13": "KyXs2Nb5PU1iboWtNKjhVLaAxtWU74ngHvkEEAMLNJX8rwdYob2j2Mu4CGJf4W9cPcMzsWKt3YZppb8sugyGJ5p",
  "key14": "4ynKuqs78iVx99zT1UV1uEgjJNY7hssD5g2pf7A2np7HuHeqRCDB3vWQ1A7SKHgmyKKFzwBmCY3yCV62GrQnteC9",
  "key15": "2PNhVZd5ZPJpCLi8aTEa2LvqVFYQZFU9CGVyKLWguBouK5A6nXxV8dPd6uGh651PLgZLGYPMaK5k1Ut44QyypXw8",
  "key16": "5Fvz6wmGoLxSWu13ybTRRwczvXG4UUywJCFf1RxXfRf5RLd9ZocxZTwbUgfaRc5m3APcAPxxx9DRdCEf4kQtdpXX",
  "key17": "4DDqaLrkrxq4wRaHckPTT4bcYbLPc3Lz1mB39D7rjugKEYbb5R5sZasNz8JSpGvMEYoFswxjRoCKP8E2vCeDEHdP",
  "key18": "4icvpzPL1aseqAPi3sCo1xphgp4mW5JRuiuCEsq2mSXWQhin2CXqDdAvx8Us2T2rfAcNmjerb98AAquUwXzTkdin",
  "key19": "4FjrNpyGUAkH1kuC7XaA4jKYhEcCJnuiSyDduasrTyX2ozQHE2VXoJGdN9H4GLtQCF7iJi3bpdf7aqajEEvB2kyT",
  "key20": "2ZxFNSyFgZdBpDwN3YgUFHz2AmXxfK3QT3bfmPfVcHoL2BUm5m2MVUyMqec2vv4S6s64sd6VRary8AeJDd4LxGvE",
  "key21": "2iLf1rxMJeEyJVB5c31eYYP1tTkRQMicmRhyxsh3n5Ua1Hd7aUAinwNe9ZP2K2G3hUjbps8BbuKo63wwMVymuoau",
  "key22": "5ouqLtkQg8rYbwV71Tx2Fo7qT1GcuL9swH3aT9D4ckPhjFn3obzgdpYn3vC96TJ1cwWD4RYALUdTHGSLAD3zEcns",
  "key23": "4mUaw44XyXHWhpqKmy3fLLqa1n2Zvf81rEfDMsW9c4gaeZxb85YTBeaL9a1qdyhVBtaHAZhzEznQn2zHXei2SCGw",
  "key24": "5H2vXzpktuAkx8M4QEpDtb3mEe69Bex9wrEhQdg8RRdgVX9tpigivpz69FyYdusB5TeYkgCU85t4ychVB4aViJSD",
  "key25": "2bkSQFNS2Q8WLafeUAcs3nDW9RhzVRGycw29pf2HiDbRzFbGB3sRBeyce42aonrzsd8m29WaoiNquPsWMbxZ2fUQ",
  "key26": "2hL4tn4jN8kCyiWp3SVSypoP1ZHs4gMnkcLviVtQmE5GwKLgn3Z3nQ6gwfrMr53jrxUsub8Ute4kPiRwG6tiH586",
  "key27": "3vDUjncDFGB58E6n3WBsnDDUWrjT3HU38QjtmwvEs5kzDPnYEJ3BDDAj9VFPe7WiEBAwTK4xC7gig9karZoAqTTk",
  "key28": "3SW9snqwNdnZLBq7EuByTAPDT1geNaFmDQE64AHeC9AHTLbTE6xsShTzwnCqrTfeYsRDrkNX5vCvtJCMnRfc7Khe",
  "key29": "7CfcwAFjZhPU9wxu2tMvau376gmwCr4WFfy4YgXPcfao46VP4Uz4QR3ajWGpVsjBQpoe6iSe6UwzPa2x35LoKK3",
  "key30": "31JSatVvhhxi7jjvo64Jko3HQTfdpbtNekutx5TbPKJdTCkKS8HebhtC52YPeFcsUUZD7iHvaDVaaHTKQKtpTDa8",
  "key31": "5w4TTq8by7yoesy1FJyJJnPLGDEfV1YRpqPD4LYtfrTNz7Ax94eNMps6ZyxfP21tpDZUVjZsGuHD5iac5WRgBMDt",
  "key32": "3MUeHBpaEBaMbFJTMKdH59UqoEZyeQZbWM3XiThuhpK6ek9TXgdcMKV8A4g2DSLLm6hcw5HBXYPuN3TP76dV1Aux",
  "key33": "4QVcCsUtcGJeMnVFm2hS4YQT9LCpj2rDvfD4fzGy6cw1DfsKifRjTZ9msfRcYHnyQ1zEG3GttR2uDsr6hb9z2hcH",
  "key34": "3LkPG7RFgL7ogTyn1v5oZCvNHbLTgp3sv4QrmdEqDz15ysvoKUg3i2ZFDNdHimSQAKG5sz9HkojBRdYeqjiJFw5y",
  "key35": "3Ei5eyG8EN8a941NusnSZLt7JLrY1dbMaDSMExybSH9pU29SFDAkaMKG3ihneGsqcmXfDkhaq39Li27vkP3YycKM",
  "key36": "2as58HnqqURLFRBWqcHeRoq2RpKDyv4uxpMMCwAh46d7cA94Qwo7qHmfFyfWjQTSY6o3A7TV36hMuRDkaerALGrs",
  "key37": "3Y2o3n89J88SV7pA1QSany9jWooGPA6wWGLYurnotX25TH2GWwusS2L4QTDKkjiPZHEFZem5y9wuBnGZxTXmCEwz"
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
