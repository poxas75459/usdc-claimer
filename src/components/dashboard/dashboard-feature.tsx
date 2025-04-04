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
    "TzwqPBhcQuiKh19KuFQL5X3gT8nRXCkSbDzs2ZurdMEqRHw2LF7zy2qprzDR8zS9i2aXRUzJLoerRDtMoACCkr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oGMRe8SvHCR4yaJiQry9QsVkD5TrQELGCdZp9F6BNDBcWVj1G5T43C1tc5JQBZSJ9x86YxHqZtw5huEp9R3azHW",
  "key1": "wFam9VELvwYwAi5igYqXYdkZCLTRjBncUQLEFMFht75UnC2YyfUfcwbaQGXYKRQTJJ2JRHDDCqFMrzYMoyBVzYn",
  "key2": "2tG6gRtH43C8pdjHgiHpTRecAD1SgTJrHV1bXnpuLmo6gM9Dwr9yKsLXFYRJ6YakCv41Qes7Yo1GPtyvrsDCM5fs",
  "key3": "4xQt3FyPENoBsSKzZVvcx5WutSWS3cnnXLTq8fqjm8FkSfrvftBvJTVhbeH6cNYF3ysL9h2V5WBcVPL8C6XB246b",
  "key4": "35gbU2vwfTrrF9mTi2xnMoX7iXDUUQi17oBsg1DuRDwJDTjyzKK9fDK1xsPmJu2CqWm2W2ZhTJUrN1m7G5jHMf9w",
  "key5": "2FAPfnY651ZSJf9wULMb8ttaScHoRdseGq5Aack4SY66b6AtKLhVnwnvFAdSeL5xGcYs5Y2TYzZPFhSCTtBRuz5G",
  "key6": "3jPEtua2MCAZ63tC81KFM5vzrsVLQp4UJnQUB73WuwUhfPR2HhtWFnpaUuS4tqBioLK8UPbGNJmq2BvGY7PrfEEc",
  "key7": "WzV6viuqPWHuzPyqcKJLvqkN4wzFzZitiDzzYtjiwPyf7SVYyBH2y4Eq692BdU5hGRpKiNCXzTUNT1AUM4tKGc1",
  "key8": "3p43LScNg9DjcpBcSUXQpk3caad1GHZYARRPZbPQxuvQd7HYdvVAnLg17LMLynjkKacu8CfGgQ8PpRhXjSed9Vc6",
  "key9": "49EFGE7iUjiibJfUxpMLbS3h6KjLtnjadmpVwM74rL8VgqVB5roFXPn3CEnGipKcS3JLjECzfKJrEbqyP7otijLv",
  "key10": "3nUK2TTu5wc5xEvf5PSNEa5GXjUtHDf8XcDHn6fUthJf4VbqC4zRNf5ZC1jGBPv8tLAxEd7ckQCopMh9ZvvDLPUV",
  "key11": "3DfxqoKj6AUNtK63sxmp7JJHjsEbN45nn6MFEN58AwbEDTM3K3xgLN5w8bsnF3UFFVq1vJpkYnL5ugNHCuFKSEvT",
  "key12": "2cH17CjJgUmbfEmHD2LJvkkfPH5nxgTL7xk9C5tiYRG6XXFoKctHKwreAhUusVmk31S5v7VMoeCTfxCNSz94SCKM",
  "key13": "3VZXKBEZtdj1xVnGDdxX6dgeAqbTHgHv4fo1zebzTtWyKyMy15vXUixF31UzmeSFqVSsrnsXoZJ8R7y32TDcrerv",
  "key14": "3RJpDxvCiNHY7sok4e5NBGUqbCovEwd9Q59D8VPHKv6wqPJAekXUaQMSx9Bx9dw5ro1niVB6yf7XasDECaHmuGaz",
  "key15": "7YTevFFSmBWD4Z9jzUQHBCupvs5w3P4Cw9mVRgWKtXPcPZGRZdJYTPXvUG2nVgfViQkcoLy44UKHE3h6yZLXbbX",
  "key16": "1ws4N6bFhEBA3r15dZMj9Mgj7W492nVHQSJyBa7PQbVNpejX1jQYu6WaXh99ewjAY9mCaPPJXgQWykaKsQzhNFg",
  "key17": "3BmmZ5Y22haxXtHh38DSnJ4F7CmETfZdFhSbUowRBfgpeG6r79VSEeKfSNnxEwpnYgMiGroSktytM56FFFiQrcRN",
  "key18": "3sj1BKndFqhbGYhHEzUqwHbL5FQFNFXEp5KDeLbEuGu5c6ovAyMt5vjreqLq2rWiDyf2nJ9jrU5HzLVmZLptt6Fw",
  "key19": "2nx5tZG9nEycseHesbumWmsVqjfiSU5zW6iPTmTpS6dkKgVRErxG3qvmbpnp4jhDEDfq4AhvwA8onepcNWabr63t",
  "key20": "52pF14LwGXboohicAujaxvpzyBMmpLZhjNTk2QPjdPRjdo7agQUUsNdigRGpUm3Pb8SEfxFCuTBdWGoSNPmh9dqj",
  "key21": "65pRP5ix2gDMSEUmxAKzATVh6J9RKzbHvyk7uiNVmKqyqY3MszRV2JkGWufGQ67SyxoJ3gWjJTSV3GHMT3TN9X5u",
  "key22": "5sYGsUr6DKq2z6RV3A3uVKdhgeN7qPdXTmXeNSi7Yf3cRDQmtqHymefz96abFidtRvCjgpnNvoH33NpqTcXoVoft",
  "key23": "5MyE5MonJH21wp1XnVGVEfaM7tGWtK3VrbkpdYetz628eyZNkcjjjTDS6pKSDzNBt7zFPDZP27WodvhyR7sjpWGw",
  "key24": "5pYEpodAvytmD8nQi5wEFSWZvXvk8Ko2eMzjaKuzAfT2xFgQyJA64oZvdVRkhVWLfSJpJDSea7b5SPaLpD3LHsMk",
  "key25": "2mkPsjMX1S7fWdhf1wjjgVxanuQ1P1uJxHCRKo8himpWKMVwkiNuFuBvHU63HEoCXXvJ1gZrF7RceXD8qZKUMnLR",
  "key26": "3a82pBv5jE91vsUJbuRtTWWu2WbdEkvUWYabe85Tz6fskyurDg9aT3EEJq16M6R2XWXVEuYkvhBRARBZJ35B8ZMw",
  "key27": "3x5FfgZ7SozJ7rsDw9ZeYptQ9tELipQ5ZoJCjrJsbkY3Y3F4ScQY9nUyTnCStqMLZ3YbZQ7247He46Qk39TqmxpW",
  "key28": "3pNak4dM9QdptVNQ6tHqXEb2Cw6m4UHHou38MmSScoU6CDv6nSjeLFBBnZdTrY26QJJa9ZpZ6QWWn6DvzvGKfmwC",
  "key29": "3oabJZkmbKDcNXYURYR2ACi35uspENxzkeWBjqhwqYv9eVEAqe7oGwTpQTypYzj236oeKqqQP7VNpyJRgQFMvdP6",
  "key30": "2FxkezBwaoKpuAbN2sbECcAf4oY88gczC3JA1Ht9eWLnLCEn9QENwdbFfxjV9pdAUPcEcMqXoUVNtdjRpYimKwcC",
  "key31": "5vC65bAiTmX3cvbN97eMiVoKQW29AYMs4aRhSmTo4LYdRnPcqSK2491kd2JUYK5kfbirfnuCnPW58faGubLqnq7p",
  "key32": "5kt2MDkqsYk4pTcvfHtLrRtgtUz1hLzjKtudGfn8ijxKxieVaGKbTKhHLDnKAgPqoxhgy65G8kmWAZ9EhoriLv2R",
  "key33": "67AaGLybTe3Q1Ak9jqA8UFPA3qUvJNvk4ise2AbpFYebr1t1sq5VkM5YEdZUpgLef7e7Jcfvgv2rs4Q661qsiRs2",
  "key34": "5ouPAtqn9a4sqq8srFmMC7ALGQPBrVh44LWD9rLQPnKFALbTRQBgYq4NWS3RSrLKSwfNNjUdqeyXp8dZjxU9kExN",
  "key35": "4ujAbiANWtzXTNz5t6DrD4c48xoLwfKJ9ZxkT8et2QoHPafTJgWgJNvScL2Ej6tpScQ4XCQnMq44okfFy5FAbFrJ",
  "key36": "5k15kLhW7WyzbZiFyEPqXWU1fUVKUiWT2nd1Egfdz9pEVSqsQj1hoyTruywAc2dYpU3jcXEmMgJkbAcd7h5UcNs7",
  "key37": "P9m8B75Ho6UFyKUjDEUVYMdg3C9VzrG8ERGBUibKiUwHx3ADTPF7wY6nUhUg59oVbwJqU8hYJY1ZwQdB9hdzyXp",
  "key38": "55tnWk3HaCLpxEPLyvCigxp1hLzTPiFLkSeUXZjYZAgQtfk3bMHeyj89j9hRHeJaDEK6zpTQz2baigq6ipvLjtvx",
  "key39": "4Enzb8dz5CmWjUDhxsufBFXaovVJe2wtXWaB55y8XqY2B8eh76vxmcnPri6ZgSVkoDXJNX4ibVvjuSoeiFEst3yf",
  "key40": "4Q7S4kocW4LWgsXqBUDimbY8UuyUUFjTaiA18DPf8hVDEVbMjX6ZEazWR2GLzBxeDpfs9rzVgU3gMmWGzAVfpeem",
  "key41": "DgNoUVUz5PGub7FXekXspTjjXykui1FJtT5LCuBJL8Ktj5vaQeC2TWiRkMEvSsg7TtgxstCG4WXkTLokXTAGRwC"
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
