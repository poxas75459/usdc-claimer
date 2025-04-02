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
    "41Pw7NtS6mapm38gSAiWkyDnh2inMs97Nw4wjjJ39XoyuhUVogwbNh2zc5Rk3nG6HsiGDpZzh2bNNANbMNb5H8Vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SEHUdn9hk6PbLrs4p94unu2Fx6GXGbxKkrNH5fX7hY6mQEgd7RQSBhQBGuU7iJc6URMZaboDcpDkDJNAXmJVw8F",
  "key1": "4qhurFRGuqjF16proWjYXANGWs7ruNpnSKhRCFzeRnLfSBojsCBHnZxvV6Jh66YUB3kTXPH9o8UcFLMrw7tDnhYb",
  "key2": "4kkigcZG536sAAHjM6tnfcs12BepFGEsJWcte9n8sZxhoNvPRSpUVa8BvSC6xBS7QA3FH1mat5LdZi2s8RZGTH8G",
  "key3": "5rXygWq8Tyt612zv89AM3wCchUXPt4YRx6RquucrWK8JimT5mXAaQS9E1ndKWVQpcTAogrBbsFpcrwP9cui8u8AL",
  "key4": "2JR7xvo9PMo8bep7BqhW5U8xx1jimBMvoDGpvrGYxpZrJBcvHay3JwBmE5rx8BfT236bLe2ZXsGorUpaMDkVGL9A",
  "key5": "5q5QRhYYFibkCfMCRjfvU2Txqaow6ecovr5E1QHLnc3D7Sr1h9hoTCCsRS93GBe7RrhAgmdf7DUaWcK9G8SR6hNh",
  "key6": "3dSwqhXnFEfxSH464jfSdGkNhkk8A2PT6x91N9eK7XK1ucm36fvYPhQ1Lx8D9kmJRH8KSPndSwXAj1vRQnu2rptL",
  "key7": "Jy9GURgTKKyiTHgNPZEX9cdvdV1yKRbTLBrg2djmCGRGZXeCUT8TnqJwzZNtLr7fyNBXGWwtjGMRVWY7C76dSXf",
  "key8": "2DTFx49KdGYAHvdPtwMuWVedyRc7uvxBvto9Y4TAxd5atnjuH862zry4XMy4vM8oF3NE29EVMH9oFWAMqkbscqNG",
  "key9": "5qV6yT5XmhTussEq65fZ6UZkPLhLqfxUxLBfjdWk3ySubsx13nRE3oXUonCTfFjeZMo8jmr2zZCqN4X3omaMYVg1",
  "key10": "2AojqXB7Abdtw3P7cdFs8p3zQLegZU89bnRx81yWJfgzKwTHEEqq5gGnzkG1eBRoHUypwtDRp9w5ceSTu1uaxN5f",
  "key11": "3kdh3KeDHKUGuSs2TmUQrvQV6ckFkBJksqLPmaYbxHzwvsH6YtyYZimFXgpECtD28eyRwiH4UkGEcynhujxZV4EZ",
  "key12": "2k97Z3x9Jecpv5swFX7MiCXmXfsJed6ZqFy2sR6q1mwbmGgp8qfsSuBE7nCN11cLTgYa7m9zgjparheHLt6KNBFS",
  "key13": "5tpZTYEw4NsGoWF2YrryCUaBkyegAGkinpJGGHDam6LAoFkW2VTP3RDNQb8PrgeX3Hek9BB2fa5iyd1RZAbaU1Aw",
  "key14": "35ghcFuyC3eWeNavEvUXTySBgQaUVWnvi5fKtCjDiyynUdTqthpyuuASCLFDToy4M9KnWho4vPkfJVFsdn8StM8P",
  "key15": "5QKfqzr16xZJ8fcHHDtphkgybRmFartycgQTm5zwSxbcBTVVLqEocDmNMDn552i91c6qkXQ1YWw5WQgZKTuf4g9f",
  "key16": "57Lt2ZQADraoNTZisExUvTXEXipUP3tz6J4ydW4Fpo2yxHTRK1R6V1M3rsG3N98dJvDZ2WdZTBtHnePjHfeoHepd",
  "key17": "3By4s7mX1YCfgQHFjGwMLhWVpkUtqQ7GvA6WcxePvi7UbCmpMEt8VPy5pq2zDwEoimidxe7g7TnU2TMqzJ1RoSry",
  "key18": "5Xn1WKLB4hitYZ157AKyNq461axNLGvZcDrNcYxp3Gvsbn3qmY3ZmJggiS5nc8fc4iHhDunK78eKCkcEk8Qzf4gi",
  "key19": "5cBy7xCT6diu9uHy6TQnKq7gdiWuAyduCjdzzuw2WgdPvo7Czc8XZuVszqkEzME4y3bfQSE7SWX6Y4eHVJN2nupn",
  "key20": "4zL4CFiB6evk66cU7UKtVr5u1KdvfHxS1TJmpGuYz66GkrK2CjQ4PNojyB8BgWb36pw8zHwsCiYwz5CQxfmvDCuQ",
  "key21": "5p81oWqAtA98LX4zPVNoLUjm3wueDreEwDarSda1qC9NsPEcrX9imJ8Na5BRhEFcCTSCUtuz2ufvRkMDupqd8f3N",
  "key22": "3ZhNJoQokzvoyKShbLQWpQFvWVHUcA5VyoJUuUqYbQMfcfhs6LoaUC1Nsn67XQW2XvNHFVLimgD2rG7Hscf6D2M7",
  "key23": "4vwxwN6db9Lk6QVsVFYmoXybkGhzM1Lj3aLb4CNXr3f1jt5fPjWuK87icFKpSH8YT1HTKvpGHbhSR6h3Q2aBwDVL",
  "key24": "2msPHJKkhUnsWTiCr4ja54DTJWEXf9t8gXUD8rPRHCPGXZHywLc6mX2fqYWGMcaz723oNd3xoWuuwZMd9NzSmKuC",
  "key25": "4Cva3p3pvYn97RrWnu5i3PJgKWdHDRypdxAbaywBYZg9TwmmPndKtqpJ7Ysykkojq8SpJWVhqubVxDboJFZAv8KS",
  "key26": "3T3r7Y1tURnpNjLG3TK24CHtw5JgVEtSB1htji5LuXHZYGa2bC2eqjomTYKjzrbS7hikUBqQVjzbB3mFvPTpZds2",
  "key27": "2Kk8RKnEEZATiqgVUZ3M9MqhASrxyjWRVjmW2C5c8UnKPC89KhcyvmYDT1s2D5TixqYHYJmsxPk1bxVdbekiEwRz",
  "key28": "5tcxfT559Bo6JVLXEaDUzTDZepGb37Vu8Gh951FDLQSnu9Wa5JP9bBnSHv2qVE5WbLDuKu7KjZPxiCChRve7WEm",
  "key29": "3J7SMVUqbCnur3tYeevFsiwUxkMCfvQsdHjgVDNmRrMqFuKWdtMVnN6ddKAs6yi2FouESj6UBudZqUUNxfzJeaES",
  "key30": "AGB6rGDh6J3dzqXP8MigT2hUVENApvLfyEzBfX49XxAU3ysCrCJBVZ3P6dmwXUqCVxdGwfFuSUgyQLArLmzUDx1",
  "key31": "2pNDouQiz2XuMbdpbK4v3NgrNkP71f2s9MMRW7h16MAJLJ1fS4h2273bgwYDC1svJKwtbVnQw2o9nyUJaEnHikE6",
  "key32": "2G6Ni2pBi45eCtQSK6wSvZ8R2ggGr123v2tesCQ3TAYBN9jptRhSXsNJdPmoS3dFny3sHSZydCuzovoiiRT7hnch",
  "key33": "5mV6cE87mKgmQ8doAhRjZ6FPd2gf97cmSvAgi3vZjU9n2RDrSAzFECdiw7UwtDazxYXShbg1Us6xhMsHzmGLqxkc",
  "key34": "4pd2J9FaH44vX1Ga5DRJijbFdsHnwamReWJ4N1U94RzkPN2p2fidV5mqFSBxHAD7EFJQGWpjLNDJKjFWafyvFBRH",
  "key35": "5dy2kabTs7HDXfo7twrAYDs5FDQTDL2wZXh6CZk5NKd8aGp5r4h9bnvmGkPEeZECUrqmnWqoKVLuGVpFEVtzwjHH",
  "key36": "31cjChgNTYP75DKkCnvuW494MxaowA8ZEgPcGyAWYFF6KxzSCLQotrxUFHWE8Snieb42diNkqGjK35RM6Zno8wXL",
  "key37": "2yZqGSsn9Vn9kpugkieMzVe2bndEiR7JvtK8skyaZueJhg9fwJDCmYjyWPHPeyv6Qq1RRgKkM8ttCE6arReukK7R",
  "key38": "2fhF1S4ZkMxRaQ5mLjfHDZL8tvwQnQckpeCrfbmjqUE1hrokonUZNnfV5qxfTMfT9GG9wKt4B36V4zb2wSywAG1V"
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
