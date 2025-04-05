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
    "5nigi5PufaU8pD4fJEQ4BXhfdCEvagvF1pUgHa71Py1G3se6Fkyd623s9n2XY12kuvtPhEkPLiGZguXRDMuLtLuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mGao3DYgjMubSHbuaaCkBhqPa7DTdMVaBzvUjeEwrjM5FNMaJFebXMwEWeA8ifcjafPRt3CxessSzyRFrAtixbH",
  "key1": "3srcjontaakNBotteyd6CyCWV8Qt15Q6PuC5SJjyEUR9vBfyPoH92unA3DGB6fPNXCTM3DJjaarj2puPs2eGsfiz",
  "key2": "5ut43tup4wKkC6Mp4mpZDz5t2HBgTzfvhGgqJGJuAWMzKDT4xLpa4FPrRs5fgGhtwjT5cHKCASbHMo7S3nmCHg1C",
  "key3": "3BD93PhAMqykQBKdvyE1YVLjRkiN1838Y6A3zeMTNshTFvVCM2ZtXCQA8p6k5nv4dUnb5kvcuuMhdMtqVst6Ksjx",
  "key4": "qLbDY2vHft1mbSPFxFhvCTiAMNWNusLJSiN3am4EeX7VV89QgBqAEHdhGsZq4fTnAakPDLK2bRWXd2yQaHCRT5w",
  "key5": "64ZByzazTkeF9GSWd437YisW9XuQQgWvPgY4i5CpUAMVQ6fqBMvydG4BptejvaeuGJZHwEeby1U2uqGFhGspdiZa",
  "key6": "rAAXD5gbypp6XYCP5xRP4vFFja9596gR4jgLLuMDyDZmBoJatnott2P92LBjeTqBgg3Cs3apk5CwYpn42gNdS4f",
  "key7": "3fd2HjBXiKm3c7YakDUTZcqixgvqnjg9yZpJ9t44q6SttSSRnYNS3Zxmd2r7TtiMRhFttC7RngSUjAHC6cthQCD9",
  "key8": "KyyXyh9VNLY4iNDmB5yu6ZzS4fnKRCJ3L5tVDf44nXF9KpMY54dvqHYBXCabf97EL67smrtd1kQQqrqSXvY4tW5",
  "key9": "4evgPMSH7ZGeJWVZ8BMMZiRombPqSmfmtpcfw4SQSGSLoxCgtGiMcmvRKgH5QywKWH9W1myW6ciEfyQw8DpF2qFy",
  "key10": "4AufJyn9VamEoJKnz4VYbnLYPaqjwWq2ecNjLC7xHxAw8EAMr8F5jxZvxRGbzdctTCFtmvaBUfTZfXeV6n2VNwbY",
  "key11": "3FBP7kwR4waVxpaYzLerj9HBGir59raeeB7LXRc3wzBzVLhckGmJqpuoeb9WBUxVW3iY7cburN27E96939SCniQ9",
  "key12": "LLXBDnc72dfJi1kyusrFzb7CvGQuMHHazxfS7PQesc46BuZMRSi7mKn7SmdAo5WeeQSdLdsLwWDQvkPfXWbG2vK",
  "key13": "WZpGipozRstwFoSU9CJ4jwGKKGLFFRBShXXUakMu2UED6n2uHzetF7kDkWZsQEYTUacnGU2HstPFBffaBCKXEfa",
  "key14": "5pfsADxJ4biazEerbJFZ12aeh7TBaY2R2JaeTpEZ8VWt1odLt3V4rFXysck1BJfnwAD2ZfSyb3d13nm6Q4qU4MZk",
  "key15": "2d5KqRGpzLidhNP42n6bUxNsNoAkL9j4m4XsGxBwtxuFToUgE28GHrAX2hogXkZ4EU5r6WtdLXKEW7btoZECTtsL",
  "key16": "2XVJKHSbxwmkWNQVA9VuTK2d8chFDSEMagXuHsr9UNx6weAVFwZszF3BcFSrzK4LxRkNTLjxqK5UViVxXPAB2rGk",
  "key17": "3u5LpVNs5WmQxZZAwFdKcaqQv7iB4s1t6yD5yeqE1qJgGxmCMBUEQpyqoVXC5jN7eNv4fXe6SwYjSwodRAknYWaK",
  "key18": "4SGfYNXKTqStMBJLZzmK9fxDbLJdviLKTJHe8cGNYXyEq6DyBjxYrzfDJBQJfweCeu9B7a27QSQygH96HNGbGdxs",
  "key19": "22LY2XU9SxuyPX9xFzwfYmE7z3RQCkde17y4ZZaUsR64WDoqbVNyT4oB5ZT2YP1Ls3GMazbAQib6meTE5jyhzGa8",
  "key20": "3HzQx2UvNCxoNHHhjjdMz1W6MxgZBuejTeoqmzBkJuWreQv9ya2HpjvrBvHkc1wwda5zvDmkgrcAqcraqVWrSCmA",
  "key21": "5cdRnFMXWZ5w2AcKJcHw5WFhUJVPT7jz3QgaX3QxWh7C6PmW9MX91MxdKwvxVot7aR11SCY6ETGUhaYa4T7zpDkR",
  "key22": "3tZkYwYXKeGxNXRA5aWWFrNW9NafCggJXtYcq2W21wY6J3JB6EguZXUmmBQev7VBCo3KQ7mQxUHLUctfhrwS8Qdt",
  "key23": "2J9A1g5raZEqxnuRh44vjCQQZ92e7vzFexWtC9j2FwfXpuYSHRz2SVHsrCuSPWUopLTkecTNfBq2EXMVfHhrXUqd",
  "key24": "4EYqQnzfjSXXakz5UUUwKNVXXVLip7RVJrkSkvhQTkQX2Km2nNwvteyowdfJczkVNPCwVyDN3DxCbyumwu7GuhGq",
  "key25": "5LqRgWvCswEfrWsnNvNTeNQnMrgVGJENRzz7nXGz1N4YkERw8MopxmmneiZ8tt1wpWbpogEbqg8L9NbdYopuTHMU",
  "key26": "2paaguG7bZraLpUKL1LVfU6uy36EAbiXBGj9uCNQW6AZMdAY6Brg8QGAGYX8rWZ6JK8AzFHK53vvY5T5ft1PL2jx",
  "key27": "38U2Xbq6fyvUieAwRKmaou6PEqkx6X7auHwfkjZy9S8TUAMjA8VfQx6VyvPNJKMfV23TZYKBxhzdBw7oLC9KiP12",
  "key28": "3DxmZnuDdZPQbXEYb4YEYUbYAWvdzbzaM4wY5yiNELnwSF88eV5MvwzpZKbLnK87mQjrFTdmjPDX6fgVFJPU4dwR",
  "key29": "3DLmfWFHQ9WCQsQrat5uCUZ9bs7DpLJn5darJ5c2e4y17tEhywtJz5XQSy7aN47DtcWZSwuB1V26Mzqoh8VWdYvr",
  "key30": "47CrSKemD9o25wJqwGqB5Dn2ivXfDdZCuNjbQfC8PzEXuqqEF7FgssnEktUqiFYKXASvegZfTrJpBkz2RcxrRnBd"
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
