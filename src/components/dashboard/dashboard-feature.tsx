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
    "3KKccwjAXken4pfbvj6y4CytJY7cgUVsFd4si412siKyE6G8XYZ6xzbJngmvRrb1wWdT4Hm5s2cXsnCZeTCAAjKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uXsmX4Ebrvmy3toGW8zs3wnyeJEtcLfUGFf2ZNx4eK9XYJZ2h2bnQdTdCPjHrcow6PUXHkJxkpKmgZBHp3nagkQ",
  "key1": "S5PktXTCeRpsWHW2VDbe9o4RcuM3WMwf4gAu3dvUBQeYgVNLw1RxntjCb7LDs3tNZEnXSRgKzQ5aJsGPz6jYVRr",
  "key2": "5V1nUG4yG31rFzYKYXonTca4XQeQ8M7Z37AAnxSzjkgf8NLvTcMyv9QL93975WFxWewTdFWWtt85v3PSUeiUxfbd",
  "key3": "hSDyd2UYg9k6ZVirDBwqsrxZpG6btpjhJRJtt6aML7Tf4b29ztnCpVcHcEP2Jgkmqt4XwMksMWsP7cWuMWNH8yh",
  "key4": "27XMuBjsM5bML9HwVGb9VVx7v1idUCTnBkyvmNzjCM3usn224Y5bSpojvYSiH7D6N8iVCj2pVbaYVAYeuWTBfCFd",
  "key5": "GTr16BRcjmc9AbRWmvqi9qPFaEKoFfQ4pBnjuHWUakEzLRq7vTLZLFvgQE94mp6Cxb3hMvNVQe1BCaQ3fgTAhim",
  "key6": "4LrfvBDQfAXGK5DUJPQAEhD3vfK4R3ghCWb4wQkH4S67ki1VzcXRxuzLAQ1XVn5N78VnD8AH7TXhJe5LYtZqCF66",
  "key7": "jRPWPkzAQje2AXV7pBTb6RU9Mc96jq3MvmCGuo9v4WoKjXsVWUQ6GQfRgErCspqDjdecMPJM8qRbynLcYtLYBK8",
  "key8": "2WdyYnTDe4FAB6CQN8x2oWS2aa4LoSVfh91w6Df14APrXCjPaDeggFAcFUmU8DqTBna5PguoWBbUUiz98gtqjZ1v",
  "key9": "4sgYqmBkFUDVvvP41BEc3UHyTrbeSnSEUp5168sMgzHwux2rtxrCEJ2D4KZcno9fJbQtsNkZ3FN18XkzUWhTFJVS",
  "key10": "48EexiU6XJtkkGgGiQTWWhEAPCZMSCwR3iot9Cv71mcnDkd6NPq1tobYgp9UsDutLv2nDwUZHWo2uqTxP1nbd2RF",
  "key11": "4bnU8Tfmm3LtEhxmnaLVwWbCEfT5SDynSzhP6QneNgfcQL5ipDVVZ6FpTiqXE5Zi3Ers1hv2mmGJMwVRL9Z8TRxB",
  "key12": "398fH3BqL1JK5eayMvUgKFE9DcXk3UUShTNmWksRNcDnWN9pp2G6y3NF8neuiKL164KSWTodWWfYWzxsM2oaSp8D",
  "key13": "3iabf7AjhHh3aYE9WnP9SMM1dPPzq6oiXmqKobvG7S6nZDph2x7tECjLcawskgcqwMY3MbUhzu5nPsohFSUiGgKx",
  "key14": "46QNEtAgWT7TgBn3to7QtjTjJ4f8vfKkwjWQAPLUvCyZkmV59wCBdmSk2aFDpnmN1TQqLEYFMmws2b2kypJ4tqSe",
  "key15": "3ZjU1qfRN2vAuVFHAH16EDWyNKCCUkXMH6ijWZbocA3Q8mYnJRGB6SesfSswNp6rvDY5tRZqvqMFG41pWBS6FUYc",
  "key16": "36VFhGRow6f38qBKw6x5c7ujLaUEi26bS1qGZr8sapRRXw6HR2Uqn59C44utuM8S1PAzsU6NsDHRDKnsqPhA6Dgd",
  "key17": "4Zn9f8VaJdidbydTvW3bMmGNbCFySAcivUVNMgLRoQNVXkkqUytoUspdwrALo6G3PwX9aEgbauVDtqYtLw3DREMX",
  "key18": "Dr39kcJ6AwHntAfXF2FZKwkd6YDLaWSPhnuhKavrNy4iUNqct7nvoZKy1vp8Bfgu4N9YvVHts1J6kykWnbzgEws",
  "key19": "314rGru4bWt2aqnsJ7jryXG7vZmySAKRHXG3kwLg1jpVWDDNkQ4AMxLTNAMM23Bupshsh9cwy4uFSzhEsZYYfhy3",
  "key20": "62QBJCm9nsmd8SCwu9uzaWWYFJTR3T6zjtmJjVbkWRTBwyUqdSQEhXC7zkAovHzGG6b6cfaSLikbQYCRs4Yh3NHm",
  "key21": "3MZskXvFLRAh1RiadyutoSvQzLWkeAEr3smmbrhVsB3EX1UjtDCXvBouWfAGoefJYw5YnrHwkvKGqzLH7mgcMhgv",
  "key22": "2nhSQ5SPdKP2ruce4CDt7cMhQjXJ3sg5dANbvL58ravyoFJA7q1HPwLGUnAdsxYYR8zSWoissb6YMBuY8MmMkrxz",
  "key23": "2ZEEWUXKtWWfK6hcTNrGZxYa8hKnJ65pz3ikTqBWSNqmHK2ksBu443g9jbNS3Bgq75XUnjw3hLic4nCoinWvTdth",
  "key24": "dYQYKX78PZadMicpz9qADdf9JNhpr1LVmZWibrMTXUjWJWvbkjqFCd6ChsL2MGKphkimdneYxjXW6Fe6SaqQvvy",
  "key25": "4ofYcbw8J2Nzyegn8gjRacvywwGfv4K44asykYJGm2GmkRxaGTjZjWb3RDV6EXtgUSqUPd7wgYcJSiMV6Nr5CpMw",
  "key26": "PXJ1zJiDP2sYpxi3tAaMGrJWVhR8f6caMUjEcxhqtM5YW5UHEJB1Q22RNZgdEJ4bnC8oCpmbFWeoatrcaMrLy6K"
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
