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
    "2AZS4aC2AgPtEqhJRGgjrY5YYWSdzLHbnJSYdKRx5hqUiiffM6iHKC8LsVCyMpSMKunFKGPTGVN58y7SMSP7MJrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GHTRWURifwk6bya6QrG2JdenXNDh6WpmMBHvrKb6gJ3jDuVQMywQoiGF1rfUWPU6MPj2dB71XzN6Wa49hG2Ld9p",
  "key1": "4PKhP1XJfdANCgo74HXuNW2BqSfnNzQGEG3b1E56z5uis8RPnttP2zrBgYo9qCrFfAStffGAnDWYqztH5m2U85Sj",
  "key2": "VGDYeWNBKxowvpq3DrC6NEfgtqwktfxSakNktmZfyaCALKb4WKyL5dqBiorqTQYFBECqYyxB822XStT7BngBuqj",
  "key3": "4GpUQczGSAJVvzmwQ1a8aueQNLcMpYrc8KAJyEH3tgNYAyS4LTbZNcsAcms96uUAiyQdaN1pEYH2NkZcV6scpwgz",
  "key4": "xVcQwvwz1CL8t5xTr8aPnVWaQd4XL7Xhnje2PisvPfNebY9UBtXSxpa9h8fMe6YRQhehjGF3fQsybef4xhvGXya",
  "key5": "2bAF5jreZ6xpaGA1hKrC6aV49aToRy8A4goDT1DxtkerBZbQGkEcVGqGbmWC4Vv15CaMZfvuRM5bwKSCDZLAXZm8",
  "key6": "39HXEgHGU6MRZEUMfB53eNTR3iMLwmcMq2cjEFzMbK3wb3dwS1XMp1D21Vt1WQmxk2oCWfQk9fz2WBKydVu1BJQ4",
  "key7": "5HKiVgLBeqnoEksqaqxth4oCD8fNSzJmUK8fPiqwrua3B2KnBjPRpYmz4YZCgTe34iDuoRgXQHSzMjcrsAWVijAa",
  "key8": "4dUFPFSqVh6y7dW5Sn8NchLcYDTXYkw4R5XMte7Qt4zRKYtZKYQLx6ss55bTfRDBGNnC5KUoSY1hnFY26HotHpix",
  "key9": "2MkuuWXRYCWawJWYgdQrHh1LxXJtCUMsQR8wFmBmKmtEK1VUKsPo9FJ8s9N9fdUBMBZ97cPHMhf5o5L8TEzeSd1",
  "key10": "5pffRfACK8WhRhDVqqneXVAk2j52mwsnt62yWWWAZJa62oWgWJdfVPEBoE2bKzb9WRC23D1aEpJFXBXEvbYzgCR5",
  "key11": "4cwqHZGVrw5G5gKrKHFnVDTo438Rxdq7bQYEvwoFWe5YM5H6xoRV7XGVBYe9MKVEULcvo4PcAVVhUXgRsDJ9TFdN",
  "key12": "4gcqwL7Nm5XrqPLwWYkFwUAGQ6oV1nbj7sxpFMSx1XwfHfPnQfbksiux9hL31sJ3Q3rzfcJ9fuAp5FUDSbsPxtgC",
  "key13": "5hRg2mSKzrEbgLnY75K7wfabRQiLGUpv5g2DBPbvvTzjU8nWP1hnsnQv5RRjP6ZsARgn6wAsvRSYXgizkeAX86Jc",
  "key14": "5qAScWr6XZq5ozFMiGbtHpCQHzo98B1JXjZvFfhRM1BSVrij8kRYgdF51HsM7yucC1f3unoMjgQtCUo5VYNVRJnB",
  "key15": "3RGDYsF4xsM3GjAEofJyiHSMC53395qVaJkfgBcqFDYzhuW1JEkxha9MhF2CWynbZeykxPjpGMbZ6uFNsdTrKFQU",
  "key16": "2GHMGXfiLn8JpS8n1ZWU35TVkHeqXTGLNzuZpuf4WmLWYvd3qgJfaL6VsqPvgwwjWhTzscAnA5f72xYELhYDu2EJ",
  "key17": "32UgsY7CFp27JL53YseBUqZLd1zYg6eyBiD9FJcmbpJaqYv5w5BZ24PZK2s5MYgMPehDQwY68nn9VrH4RfVnhoqi",
  "key18": "gA2ZH7tTzTQWtcAUqhHnxzgeR4UgG9pk82hywM7WcmTq3x6Ddk7ifM44TkkN9gii6Jyf1ZvU4FtqADqWtKRCsa5",
  "key19": "2pRy5QaNzrACUbhR5Qi6qESJf8XHDWzNLQsg5GaXW1UzeryzjbwM4nTMGauJ6sk4edmuxYU8gBQgkHM1JNS9axzg",
  "key20": "4YD1zHUuAFXJqKSYm1ADDDDysTXRHhXQYYkNtdz9mKJb3aeBhXzsU5v47HNohAQVZ99KxvMk2NNhrRVGr4KdLkCY",
  "key21": "38PsDwPmMyUAiLvmUBMvQjom7KzDDkdrbKquUtgZVLgRJYJz3J432qo6oiK85EK4oVjjgWyE7DYLvMp3Zj7B4qJ4",
  "key22": "Neoh2cLbqzAMbnuQQwYLfZNKcgQNyPPPr1CkrQVbMR5vZA6LZfNnj8vm14F5JvoFwjhNhNBWDGjyf1ucRk5wnHb",
  "key23": "4E9pj46LjczDrCkxuiVjgZRFhfdvohDpsxU9nYLpqLLKj2Fz529McR1ugDHkzCtf8586RN5NQWMwcH7uUHC7C9UB",
  "key24": "2XEfxjvaJNA4LR7gKXvZAbBGa8rcZia1o8WCisQ47dNgze4NxizRBGQriN44ANmg34Zjr9CnSdQ3LWoG1uN5Ye9j",
  "key25": "C8RibxpX6asBBH1c2trAVZRFPENkKzywqcZ6BomMzjHkcuTZ7AeczuVoqcXBvGZuaEVPphZ4Es7H4DuAcNuYRnU",
  "key26": "23Ee3wXPAXKXTYxcNSqUt49Rf2nfqUKtYw9pqygUqxHDVdhYUDkHkZdCfGPFKvpavsZCatdw87sgqxBYE1vpvs5y",
  "key27": "oXKYhJqnB8sLJByCSdMpmCdD7VkYJ3h8zyyQZxp16u5pBcVoRyBEMYWmAzmwBovhKgr8Ymf2pCGX7ohGdGB2Jfa",
  "key28": "3FDus8ooTsXioc1NDezQ731j4FherzEC7cNT7iyLHpVdG3LT1SNJ8uq34WhFAfWUhxZxhMkhcNppijr9EGCy66MR",
  "key29": "5QCGwL9GijXDLbo3N8EpEuCQeWf1dbKa7TWGZEAW8cuW4m8vFs8nU2d6vSpYLYfzFbUVKqzBxZwn8QVVKtiuDB3x",
  "key30": "Jy2NVyrmDtg8iXxRehMSYbkv2WYi7W4nZ8Goz1FFT4Wvq8KgmofiQ86vXPacTYePhrypQVuAeWCkNT5pTXdun3b",
  "key31": "4Md5hg4FTWwecV9gmj6jdeNUw4SWdZFMC7NWzUBC9zpoupnAyt4khGJQSpdCiVZDxd2UhEkENtCV6abQMB3EgWNu",
  "key32": "4z5n1hzTVCrYnByeMcP6jU8ViaDkjLZeYHXJQWFUAK8joCpmkLFGzuSxKCNDXruMrcWBMRTm2kUGCktSn6FCg2ZY"
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
