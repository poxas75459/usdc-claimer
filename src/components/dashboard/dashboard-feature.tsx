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
    "tLvP5ePwi4HMLNQ8p3sgg7NX7MweKQPcsVph6HYAxRpBsMLjD7drZ5hvK1KM86NPNMa3PYoNAyGbhw21amx7KfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65QsRBqFEwpLMfEda4hYJuGPKqw9pXGmCA9uLxs3P45PMPRJna8TBsy8fm4dn76dNvHgPgw6bVfA6GgttoDsBzub",
  "key1": "5Ch5mW8ywux7gL615nkwPfSPVMGn7MCmxR9UJVuuLhRwHqgNbp2gf53iEoYkgE2qo8mN5f82LUCEUoFGE5eska5k",
  "key2": "3VvTUFjTpvsqaRJduxipXjFgLfgaxBumGg9BVYPnY92aEPGg3et3V4aKdZ6cYTNpwS6Vz2kQU9Rk3o3HVVznF4Td",
  "key3": "TbSCtmsEVixDYF9cU5n9XGBq7G2M4jDEk38HqLUyjYcADwr3oqyXgZ4FrMPNvJNtphhN8FWumiA5HcYyjMvegf1",
  "key4": "4dG5JK9c25gbZWFKxBSjPD3a8SwDhypcyDubCSP4agHRMha1UdzSVbPcfqHNDzi6Zwq96QYicUed5fnvaWQb7qGL",
  "key5": "3wRyMzr3KzvETHAMbcfdGSaMc8FE2MxYxQzSvZHiqp26cgiQdCAmabLoYt6u6cHUZhDxUtGhzpn1kcJHS2Z5uFhE",
  "key6": "5QhMfVDRZ4XdadThCgML7UnrWUi61fbBs9cEm5EaBKyFUDTQGATWijJxLWdFYTfzJ9fuLujVpD6ofWz5KNQzXP5K",
  "key7": "2Z3BjMgyErq51BTGDhxxXgU2QFx4gXG31jnRJq2UHEqUuvV986qy19BmnxeAQiiEUz8vzH16BJAABuXjzJtTR16W",
  "key8": "27HvQYdoDiNGDnWYYNi7ZTRwBXN8GvDg9g8VouED5zXeZLnvayRcSNMCASEwtfAuWrPi4aWsD3bRZLfvXs2BUsGo",
  "key9": "z7J9qAMUSFDEJxeXmZmLSXUyK2iEDXZAz76HRye54bLH1XteTpBNXDyGFDSQpucZa4qq1cDpkMXtZSBpzB6ep6D",
  "key10": "5DGFWsr7uheSCz8s2Tpy2kUeqmNWqMidqSX1y81yHEvba9YMTmJmwuJRCoXPKuuvwXQ7iJLYsChZxzWKf4c1T7D",
  "key11": "4w4v7xzhcknAL2yQiwmj8idRrZkBmWScUUTSYbX8KwppmFTkFiDJhLWTBJ4WfkfLbLvN8VxzrVQFpTYjDcCNmdQo",
  "key12": "2z1FysXJmx1r1qwvDAQfUifeRmCwzfr3jtAevTxhXUsot3XUXhXYsrd7kKJZEfN2sv61qgBzDGCk7K2xoQV5KEMs",
  "key13": "JUanNnmESQeQNtRy8DbyoVcpMfAPTg2eUxyNdsU4WJiGU2b6Wzjrvxs9ae1skj4Nabai8Aia6niUhF3iyhWcq47",
  "key14": "2MaGMtzcHnwBRi273EFp6wmXVRFoe84D5f36QKfcwpuErvq3LauHcdmEwda6HF6kFYSbykrw3zAQh5vrGtUffZ6R",
  "key15": "5QAVqQKbbRt5mkPP6qmzz56hLjPFAiMXJDWn6waPDfnNe8q1Rgg73vniWt9WET9a4tu1DspvkFZbHAPdxGZBwsUz",
  "key16": "48hkoS1K36wfxKoTv5j2PV2aUSaZdW78GLRjD272JfX85LunE3ufbKjtp4RUBPVw9utZSUrNXWLCTsGiM4EeJgYD",
  "key17": "5RU6enE5wVgd9iJCF3WZ8Rfi6732Gz7fG7sZxqjV9PafBPVDSqyxpMh3HWfeBaRAXx6LEQFymJGRnti7v8oLERrL",
  "key18": "eTiqaQZyNLeD5omAzB97Say6u5b2QgAz9brhEQ2Gg8cVAeCFoFKo5w9nNJVFJky7G66ym8VJBFAW8XMhqSemwJ4",
  "key19": "2GxVmZJGJNcybbpikm4VmBxYMCgTfRu3Ls4ABoNytksoiYy6x4mRx58otWn8UF5Uh2AF6NoPSepJuw1opFdcZb4N",
  "key20": "px7PAMD7vmZXxz7kViXj2ae1gGBSCNMqDtUPXhR7cqxHB3MNBp7Yow1g7XyiHrkc4f1W56F7RM8FxF8HZdCt3jD",
  "key21": "2Ju8fMtwfuPUGpBAAknXaUoMuiAh7t3EjugyCzzWcXcecL22gw2fQw97ZRNTvJqc4szoMxFhEpaqoyZ1b6zjm3bW",
  "key22": "2tw3tT1ykiPUStVf9b57WKTo8eEBZmGM3ZJkhxREAMwxPiwWG6sdXeMLehbrYhKdoZZbm2HzrFsuan2TvCxiN8xu",
  "key23": "4UMcp5jT2Wntk6YZ2MwJafAARsjjjAojNq2xBnacJwvAW8pKGBKDrjqJzGtPGq7BeV3KuoWaNsewmryxKrpihEGe",
  "key24": "4Yhy94gd5BYfWNYgrhCJEd7JVsjQytso3kdnee2ds3hrwmWbbL5UnQMHtGYxNB47ZFBWDwAwez6g43iGcSGJENpP",
  "key25": "JL1uFqz9bXXFHoDTpT2mmQoQUsguxdyvPofYNL84LCUafueeHautp72vwLed2JC6rnV1cBcavDkkPDxvMo4C717",
  "key26": "UyCE5txVWUVqxR1YTovC4NtFYP9818Kq26YPADyuGWpPWvmVyqHJT9EDXtXbYbr28H87zx5PQAeKuoH2AqEPksB",
  "key27": "AE5RWR3Mt2xFv1z6Tt7wiheRQjDeygwaxds6v51bCVfazf43swfuJKYLVFxPYW5XqqtyCNS1TsgSTJjoYnktG67",
  "key28": "4tWv4RJYheQucCMyQ5oWYGr16bpwC8fnSin613hx7af5WDxe8o1usw24tTEctmowcun2ifQzpLwKqoGdzv1dBpd6",
  "key29": "678T2kqVXCwrFeoABEE9v2ttBDXC8DejqQPsbLhUJjDXsLZt9C46edcYjmfbXWCTcwxQMepCro9rDhvM2JVzzo9W",
  "key30": "2NCjnBGSxfvKJgAZ6k6FyMzHgVS13FVFffcz4bdu8tyM73zA1caM3gh4JGLhWeJCgabDqFtoZj95cPNRPwJwwoEP",
  "key31": "3mZ2X3mC5ie3KFugp2b5tiRyFhym6bb2vvvwEE6TaiLFf8LtsB5f7q2KhV1QHXbMr6xb4QHiQXzSvkpHRTA2er5H",
  "key32": "4TgTQEDSziMSKyPqqCUVjJtYPYYz7rxSAabpSJ3zULUQLjR8dCs3dcwPXkKs8LEEiTPcSSFpBdYBtmsg3ASJpzpC",
  "key33": "5yzM248Dp2UVT62s5tfVzwtgdy4rVXwNeDgbnnJBu3DvhqsYyjRGafUpQ92Apos1Kq9S7KmQKov6bVw7xbbm3knJ",
  "key34": "3dKd3QBkiYYcYZrwpSX9fcintwbUfsk1cuBtWqf97AH4uBGzPi4d5uWoaKk3amhtW4HUcssiWyaXrjAv5URUs3NX",
  "key35": "4ntz82F9jNH9pqNGGhMAePHAwQkQjpbQgzwmVgQRjPv8Hkja3GqYpceG2BDYKm5EHNjmsuN7QDKzpYbdWLaAttDV",
  "key36": "676tAshHUbQCUTQvHAYo6f8cmywf4AHG7aEvSTsunXztQtLQYaMoqerivJXM2psgGfwx7qRXFBPzq7J8f94JAyV7",
  "key37": "4N3YBX7TBBSCVQprdQN1XFccxmzpKfp5rJKGFSVZahTRt74LL5a2yVFTJhqJAjTg4bHisQvuFDNgj1njF654F1ML",
  "key38": "5TzzwKvW63yHAbS7cg7rmsHoKvqXQpkk4oSotBNjGdtvxgaM5YLuqhHNW4R613f6EP4SuR4yWouXo95irDSUJsH4"
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
