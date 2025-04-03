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
    "29nWihLhaknW5Tjs6yR9w2RFDgKREvm5SHdcRN8QQwgMR2rKC8FwWpiFFTaV44ZFVxmYZF3oMpu1YFPGTMME3Mud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zETiqB3gBPdzGQqGk4Kjf62Stj6jjYwPbtnRpaiqBwLkZJiBjsSNrdvdqQdCFREkjTu2Ks2w4JaHmLUG1B2kcra",
  "key1": "2ERDUKbnR3AZ4eh5eqs3dLqd94fzNQGvc78iE4hyeNRpK8v7mmQ2FV1rhHwE9ueahU7V2BUSmFDLJdJay3gbwKqU",
  "key2": "3objZSKmBoSX2BC7yXcyU7HDAguaP1vyHXnWpDYg9nmc92n1k4VZMt47o69Auskxdu6MF88Yt3T8wtPm6FSKXmex",
  "key3": "5ujkUWKppdtHAcHcvzXgYhSvE3AVM9vmdoa1pinJgVf47eUEGGxAx5w1XouPhAnLpcKrFQW9fDevT2Syn76MbbJE",
  "key4": "4SaR2CvVsPSaJvSt7cKfQooXnz6cAsSC7FJcHy15jbAJpaxhVUXjLRUV6sXCPsR8zXsk7qpM1aHk6CTUoXLGfwXX",
  "key5": "58BBt6JfLfCtmty9doAJAjvSCikyKwjDxR9HDVj8M1J1xnbAu9EmdPWFYo1vxaGAk6hcdP8rnWHsqxpiyG5QUpdd",
  "key6": "2W4Axu4pxGjUpjRbCVBh3qxCMFruAy2s8jWpTvTQAFkTcSx3fvJiXhPcbYunvNZy4vc9MAnqidwagdtn7t84kZa9",
  "key7": "Yhp32huEhQF1porxr96bm73twdQmJ74bi925yfJyQoK1gcmHDPyeNgK1DSDCmzew5HXC9vFGGc9YLjohACE2DUr",
  "key8": "5k8bgMG5yQNWSTL3EqiboMUNteU8bp2teuN7ft8TYZjtjarjLM7ANrWKNPpJvABwsubFakYm5YSmV6wFyp8CLmU9",
  "key9": "5adYHaGbubtcV5ABVh25bn5M7rKKmQW7neCzyX9majCP3DK1SQWt7PdBfnCjfnDCB4HRAmaN9ZJnsyx19ZiPFFTo",
  "key10": "bMFAhGVEkdLAs789YMFGZrXWB6P6GkVWSAGnLu8k26NyZfetuELYUEYZK5dRvC9RT3Ba1fDYdyu6Q23LWtnk8Mx",
  "key11": "5mU7cK6gMjjunsjkS1pT6AoMoZqPAdDzR6xW26jMBzbRKPHXiWgqxZLg3gaVoaCmNmJbLxm4UHjUVCjQ5BNhX9CF",
  "key12": "4uvyUvJvb5LixS3VFpWMzYTQgGugpq7qPqvMBg1h67WqWNnpp9G3quDJ9AcbYCtXHEbG7YWGmwEJZzMZLtcCadxB",
  "key13": "4z8mc667x7P6iNdb8r4beXe4WD9ghca3N9h312LUVfxq27eBUnT8hpd4DXdbYUdLp9JgVZSyGaYhZYnKToziy2KX",
  "key14": "4zW4k4rGuFWnRz3XiR96K3ZGsWSEhAjHP4tUyRqbLfWKNUEnGh6Zhpaf3DbT5mGuqkZvc6RhsLtdmtquLuuBekRw",
  "key15": "3LDB36AAHFZ6rf3cq8aeVLCaFDJB79YSzu1wWXbfLEjpjXQkW9TeQJPq6NjfD2kV9CvTRMxjcbcfR3kbXP8joSyQ",
  "key16": "vu2BCJZ89KEvG9iSANLT3uNQeHQJbuYcsvauWF4YB8VFKF2d9Kf9KpqcYNRYf2hbxMh2fyRTfqwq3WcgxLJr3dG",
  "key17": "5CXNbzjtT4yzChzM4gyJCwURBFnTUwjFvBQzCHCtmDQg5f1VaZjr6TgoUUyPcwaGYVTohBEYjSgznRojijF3doGM",
  "key18": "4SyK9DzjBXR1jff1Bf7Es1ydbdHGvMKkn2NXDyjjynu3LCLkHnKM2yLLZFRZTaBrKNSvLqbpucbtUVYzehcXKs2b",
  "key19": "4aatmjnGEVMy7beuNHh5gmhPSUcdKNfZZ71JpEbFxc5125i3zvJax8GR7v68Ra7UZgs57gdchxsj4r4PLQk91nF",
  "key20": "4Rg94RU3ReLd3q94pskeqTQXaSDXww1mj4VQmY4G2QEU75yUeyEzRvXGyfqwSPirBXsMc5TEdT9u3V1d2d2ZEdio",
  "key21": "3kAxYCDPsw7io1ExPu4PsxH3gPZtvXmXF9gQf7rwZLNtFD86gUxw2f1LmZLCnA1RXJqeujWb2fxPhgbwW2w37fqy",
  "key22": "3R34H4WkSSjX4GwFh6pMW6PenJmvSwtmHpKDTgR5Q3YJ7QZSKXhcm7oAu5Zao9ZTJSnEC5Guhc1Rkfvg6SH3R2qe",
  "key23": "2E1eD2Ymy2yTrrCR29YoEkoEDM9Vi2pmuJ6bUyn2Ze3rutXvWvq9HFg4irGLhfXHo1EmqwYWDQ5CnFNmfRhZqw4F",
  "key24": "2wXzFmbFkk3bEMTFz4BFSEkdZW2GpXe8wHScSgKxzUN8br8MqUWxVvQay7xf4D3GjRDTUVG3aKPAfaPs9PmnRmaB",
  "key25": "2Kc3QctefNTc2NwvrcHsJfqzuv69RXgzM428ckV3mteWVWm12NaLeV62JEN8DmWRWBSxVbyYCQxCb1RRWzd5v6y2",
  "key26": "3DQAdZaAFVD32Bew9RzZVVXM1fvUSGBDrEkjQtdkEu58bggzPe5an87mvhPkbuQ6NQHL9WjYpX3CCAZYgMbpyiuo",
  "key27": "21r35D6Ce4CVNbqeVnLVMB4qypMyRYSL5WxLai1GCbyS8ghxB1av1cerQdRvKdYU7NfkydZHWRdwgqRh6wKr1C1Y",
  "key28": "3kTSRG61GXZQvmZqJ9sJ9arKWBUhvek2kmdPfpy5caFp5LK7XH3U6Y9oc9WvPechuWoBmXiyQokv1dLFJSyuBMT8",
  "key29": "5vSEYi66dypxQoHe88noKmGbhrUqGWbD8peqMUwMHQY9fkydLJbc9R6SwvHS35zjTfNn11rYE8QeUhvrw15T4feY",
  "key30": "23kxWW6m5tChgQAZwHPRBuktsmLTtajkizhk65yvB7geYJ1z5SqotF6Htec3VbpfR546H3Hok1TxjByn5VB5bLxG",
  "key31": "BvjeLkcNaJs2C3xRC76AexHaniwhb1BitS1ADnUMGooDwkLsYKbpVSDvdDnE6gnNn8JuJSBfTroZ984Gp1cQcP8",
  "key32": "3zZCxgtyXeRuiQVYB6fBfjdtHbNn2k5w1Gh7cuViV7sMosrBxVrDfcuRPafjVeMyjuUoev7oaRQUJbbSVLUnxNrf"
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
