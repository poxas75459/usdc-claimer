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
    "2XWL3C1YjaZxKMEmw8rxHYpBMisdQD1auSR42YJHmdVrUqmxgDViqNiczDZ9hQrke7mCmJCXdaH1dM2wSqFbKgSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTtNf8nnixZAcVfxcLy4SsTVVMzTvSd4JvNn8YkCuEqPDoqefBabDJbJRgiEJvA2XhtEvCbh2bbRuWuuKzWq7oJ",
  "key1": "5PQn28ZQLCSpYQ3bk3BXxndYpXgCgPiqEnjJtTXHFa1LUGbn1ENaPVbjJ199oxbC92Uheet83SMERo9DjLvz1CeS",
  "key2": "XLGthshMGCj5QiZJf1PQYcXCMSDdoC4RB1r5Lm62H9g2vLMEnVK79CpxJFd7eNNRaqjP2oZQ8Tenmgm1HWUZBCF",
  "key3": "4Ao95TmXw1bTwDcPy6gwGbepDLMZhnbTZS3PwnKKh5cMMd5FWuvoNYaSf6tXwrHcjTejix3vAZdRQ45AvkVKgEHw",
  "key4": "2fRTkmBPBq6RK8CJw91ZjwguVKU2MC4q7Co8JDkPSbzvEinkPysNr1F3bcqPQpuEtwGF9UU6yKujXftwgMuf4tHn",
  "key5": "46VaVfpLNctyX5mWBXo2MUi1UxjsxFjAHY7PViTHi63DCWKqb2Sg4T54vrNVU8n2ivsUy6TDRHFtpoKHJ3nLhSRs",
  "key6": "5svY6dCjs8rPGs9tVBkMCwFC58CUsVkaviBt2PeibBijuiBi1z8eXXE9qswyzsZoLFk3ysBQaZP9VFXMe9GY6MRu",
  "key7": "49VD6V18unVK3axW3nVprLyPZPc1stS9Ns1EcKZwTSRCrQLZwEaKYoPbbue18CZ6K3fqHM7aUzyUpwYs7MZfsTc5",
  "key8": "5EffR9rsQr7mnAh5TCw72Nk9W6nXzh2efk4E2don5R1VXmZi4Js3xyQZr8oxoVBE3eTBkSzWbuJu79JUW4BguRKk",
  "key9": "gKVawT8hFAnEenMLqva5YsUVq6Esdbyws5NpTRa81HqsrsXcgJHm3BpJebtvbEEG3TPvcAhS4wkCZXPrW19vGmu",
  "key10": "4gKG5QsgWnpcLb3xqW3kFduwF6xUARTFtvK634TPVsuVLAxWDELpS3orjvTgCvkH15hEwgJ1t6KcsAZKEiMG39np",
  "key11": "4oqc1cSE2MbeCBcLSadYoVxpFznLphpEfKVSx3yz9De3bbDTX6i15ay95ewaHweTpH5Aj4KnVmMk2giEvu1Fvfgb",
  "key12": "3Cm21c6LXCSVC4DLD855Et3XaBXevAjntCeo455K2gm6X4B1QDrZ6ZEGb85qnYrdZ17FbF8c112Ki5fBDeBAXvfP",
  "key13": "sGPr8YMG63Gr7UKk8mJgZgzsKQbHimQpiuqC8hjSobyGuaPDoY7B9yn8oPKt8qCBb8NHN5T4EqQ39qRhLKSkBWw",
  "key14": "5pJLStsapyNBaV2H2nFnnpvSTX6vkLYfVGmVo9hEsV68JnepwM2oryL6uk35CCiNmwd7Pc9FPskHESSAy9BSSBCw",
  "key15": "5jf7oWhgzEvWJgcM6j5WeviCuYCfcBxBvGtNyynANjPpyPPvEuEMHfjbf7uzWzVxFQMZQUh21GUF2QTwEDjfoBx6",
  "key16": "21TkM34Dxrjbb2WF5PMqx1eoqw9AVLehUoKxLKuspN5krN2kprYkVoNipLX2GaaWwukWLtZkPusrQDEyyhiqMh53",
  "key17": "4DJcPZtk8B2UYvLasJJkWen5rhTzDXoY2t4BacdbBrtVhVxRwg3kujbJZ3tDr6iMZNPXnUqAWcZdHVjFGxo68TXs",
  "key18": "4gpQR8oLXCjPspFCWFuR2MY1kTKWhfLEj7GSbKhyYzZztx6E2CM738fSfX2resKYqDftegJz9sQ1QpCT3vHHvXYE",
  "key19": "56YbDEt6HeiPx9uxs42oknUZRy772Lp8yWTEDSNm8KfoAZSShd2pmaAeTev79qsTNfDtySmQDb1ZFrPuxs9KDHmC",
  "key20": "2wAA1PGYiNPCXTWYvqvapdKAwpJfqfQoQLApkUCtViBn6339Xj4uNQ4YYnn8Pqr7NQtAQu2jCfYd7kzWzV9gFRzd",
  "key21": "S9Jz3Jv7HaiUHje3KGZXQvS5dUHLrF8P1gR4a8YjZv24FTu3iNe2igrPS3pDmyQppvbzxMDAm2Y7gsNhgqW1HSj",
  "key22": "2hWshHU87xtUBqETRichijGGSaTyBvb9hQyemsh1HpgHBc7x2VggFTL5axrA7U57nSkhqhv6psXt79sBk6UDyEio",
  "key23": "42Uw2vpTwrEM1dqhG9gK2pNbPJjzmMPXugfK2rnEhgdUWsu6ynXhMzzmSxEujRBQVzByx9h2ahtZHQg8iAsFLzDh",
  "key24": "4hyBdWbEYgqVWPgnQ3gxauLqj72mVxvtrrZQzufWAmgmJJnxAAHehX7yjJZ2DRp1u7cz4pPhkFtTki1hsw8oAEMy",
  "key25": "4hdHxbyetpXahgJ6recwY4SUKn5VuhfygptKP7SrGLWEiSkn5qZt8zkUThkoz5st69SkgdNdNcHvsb2KBd6A9DqS"
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
