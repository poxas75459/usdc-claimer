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
    "25sF2dWaSWaqhxBAnfoeHMWCoAaPhVdCZ4Sc8n7wWYwx6yd1cwbFBcS5y1UkkTDGznDSb2HoMfpxFJ2VbMoMJpuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zq1BLXFyxiZircktCKq1P5HDSR965HMBvYGuVAu3kQSjhPdR8XzFxM5CRZoVu1LveWMnU8xEJCXuF8tjfEz6EjS",
  "key1": "24tQQpGzNpx87PSMyLdfrbcfcYFF2HBmsdi3vzqAMSyTwbWtGHtyCydTXP9xsXkyHbNM2BMKZM8XTuaCmgeahNUF",
  "key2": "2VacB1gmVwbQuDtWqhxz3BZBHCwjyiUxuefKRNJ9iLnPNj765zsLABGzUzMmRnVFpnNDNrupDdKGY9sE26BjQG6x",
  "key3": "5d7vxYiTf7uMxMPyFtjRcUwnyGPSiFnRF1aK3RSaV996hY9UQ26VQcgY9tM9cFr7yFCgAn2F8DMmwUMya1HFA9sH",
  "key4": "4ih6yjM6LoLVsfDo23Hv6RFeeYkr9MFQAhqi3iXUpL8WiMmfsY5u99Wke2FiJFd24UrheBV4bZ5QQD8i2NWBSYq9",
  "key5": "6xehY2QgkShYVdHY8kD98sWdgCXTLAwQh6xY3TNoLABWe5RxbDcbVvFrmnybepQ6UpyDZDtCsvXruGa5TPekzps",
  "key6": "5JviPkLvCHMpqmUgTJp5t75fyuHVQkva6G5wBzkeUSDWubzXKAYtANuyXmDGscdPh9ojVFJmgkAzAnXwQWnxbia6",
  "key7": "4FMufZCQUwb8CetxD76oW1WskoT9hKViAbbpBzny6UyVdRgGkBHVZ5jjQxGSR4dhxDosHvegfbfKRqag1bFKRZqp",
  "key8": "5YTgFDv6UYg9sYK43QNk2asgpPjxu6jHRGHHc6o5BSKhfrXDjw7oVXjFCmE7LswU9PxX479Zea9PAvWXGL2436j",
  "key9": "2BNjyHDLn9fgxf6oQhBperk93FMhPwmnFEnAUP6Wmc5qtkdZUoLPjifhXRuvyxkYBnPdiSkQLUvZaWUzkKKJqKD5",
  "key10": "2c52LRcA76u4jdctxKVUjrU5Qd4rHNSLyxTcGwB84kvTcgDv2yZxxZUKfVuGxcCSAiQvTdWg39w5um99qLRCLHn7",
  "key11": "54vuaGu14pSheaahJ4JZhFLycBBcQ83FpkB9Si6d25pLE1GQNKnvGL1XUxs3x37jK62zsJ62x1q6pCDNdiQgAcrG",
  "key12": "3gMMkyHpWFpf2XybTGHepvNaQuqp8JpX7KYYNSyyJWJf5mU2SmNTfHfcQyArTo5sVCqMUNqQUwQ4ckEqrRMGFbk9",
  "key13": "4EnFTZqvtSF6NGqnG9zAyEHhnB7iA8UKJmHvq1UDpYjdkfbzRZGuKD8SrLVBfodYyPZud1BP9vuMVBs3dLoKbNNJ",
  "key14": "5zc3greoGMRi1jhM9fkv4Jx2p24gA6AKnkus6CxzWa6ykcA1mj2Q9NvN5JELSJPdB2JjQ3g35uc4byP1WBs7WhAY",
  "key15": "SbKYEptBkbducAHZgtb4nkomdwXJ9aJc9gJXj5Jbe7xH6f4uLpKpAcjrJSHHBp3HR5N8mL3kShKYkLd1CbZhvmL",
  "key16": "4R3H2aw6XELDrSq2vFNLx7v4F9r1WYCaNANU8aZWnZ7uCfrjpsaWrAS6vYhoEfhzyv3z9Ck89dbAmvXC628wepAN",
  "key17": "3gpA9CBBrUxWNP3wzB3nzfHcWxrGsDFdLjHNitNEgruMXt9Nu4u2ayVi4qXf3RWmjY5wutaLyChfUgkKuE8edBHC",
  "key18": "395j6knRkyfJc1GsLRR7YmCDD2JU2aew4ZMguRahm852LxDVCd3qwgRaXocCxyak1HwypVcwTGmFYTKk8eZkSRZc",
  "key19": "4HoLf7wdNGsFHjtTEb8Rcy6KbDHsTrLKa7VdD1vy6KibrSy3B3ZWWguLW2NQ8M79m7Cya6U1MpreXwGsq635SssW",
  "key20": "3Fm79URJFTdwdLTG33yrFEQiEDFvEToVsmRZwWrHmkvjTZDVtqwn9ZSC3GqkUXzBh4dJfChWssW556NBjCQySfvu",
  "key21": "22dSvRTkXoWtLNHyQPeNHMgxsedu56vuhjVQwkfnt3SXUodWePWUpZ5iDhP2eEHwGy7tQfm7wfrt3KXFdFmWQ1F8",
  "key22": "5Gp7HjyiUQDZMyKwctMbB2W4addP2vDHgQCG9nYEj6CA8SRFVDtx6bbiM4uH4jZiSvY1uztquvsnemSmAEbaVU8Y",
  "key23": "hfvqvP4oe7UnAzRfAPM1gp9DGNQH8prTe55RNBZCCPx9npA2rSLU2jkuxYbZXaJTrEjWFm6hNX15yaC5H3fLnCZ",
  "key24": "3UJ4JWpW4UaMNDN93Pd3rD8zh8uLpJKAHVExrfcTe1FbLBeK55Bdza8HB8xXvjDuzgiqyCFmDepKNLVirtJ7YVxD"
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
