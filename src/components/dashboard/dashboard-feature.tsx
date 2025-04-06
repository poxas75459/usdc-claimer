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
    "2tSGBbz7pTafz2FpCu4ev2DSQ3VQbB7nSidL7aHzh6tapzGzu2E2xYt1Fgnx8nauxgGxvmP4px6kZjbuSBTaEe87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yjZQziCcomx7g8BcWEBCZfeUTowVM4XGENz6TUxVQH7LtJ5kw7BDoHUmvF1WT8dVMcEzbt7Mb2mimAaSbb3z3AK",
  "key1": "roqhJ3Eo3nFe7y23zsER153UbQtuhPzz9o5BVWEEFunAfcfdH4fBA7922kkdYPo2uNG1zDUdnhk61hWGq2BmJWV",
  "key2": "28dTPNWdkS5yFV3xL6jvUWAMx8fTNYF9VdAMaHRdpsFqmgpSdVEnUrNrAY9Drf2ZrZgGCNgv5NdYc276ieWy51ew",
  "key3": "4qS5iFeoqvG7uaFYyozQNBXUzKvYKs5gHUHBXpw5Bj8vCXB1G4sLqoHobE3yg67K6KeRwEnoCYE81HSEngAgaX8C",
  "key4": "4Zw461p4c42Lc5gyxSv5sSJYk14wfzb4478Hriik2KzGmJs31Uhcv2w46WbMLrfQnj268jBxqFFxtxK24HQJNNNK",
  "key5": "5fESCQcR7HCuiYg7XmaE5Tb6QAmNPj1diVtvvkytQpgdX6XTK694psrX2jmxgwmebCVbqdew2CSHBaByFeqc1YBA",
  "key6": "3znjD6BAtgAiYPkHgyPR3guHSLGb1GtrRkt93piAg9Q77wkoNAF2z5q3KtSoLmHiNpt4MhYoywj2VBtLwGVGoP7u",
  "key7": "5M7TgjqZXFzZMDe67mT3uGegDAWJ6uJNCEeFVo6MMwhMGga8p7opEhb2W3GXRkY4B1yUMnX2XuWUybRbYwebfiae",
  "key8": "46MTqHKdPTzvYGL8r24vADXQNssEGdoASDRvZK22hjcg9FKwoKcVCJymP9Dw1BSvzhZMYXFiojJxFmcQgSAko2CE",
  "key9": "3M3V3PNSPuWtZ4HegyLqzAyPVmv6L5fgTAp9QgW1VW8cGaFG82PhEJbiZRz2wka8F7BDVD5TXc37NxNzezqsx4FF",
  "key10": "4CQGuF7mJF41wTvNBHEBBUQB1zE2vUSUYe7ZP6C2KpWTUyXsXnkiDMfU3jmLvE5AmnFDRBuG1tbFCPm4v63zt2Um",
  "key11": "65VoLEiusihpJJ4sxMzs8sKZjnwtJXNf735pGAEdrTNba32RMAbNpUccQJxPECe9AQqhV1FdbEH35GBobgyfLzDf",
  "key12": "3aVvzt4eGfWbGS939CsVzH5gLkoZmHnKj8fXN2ikQTATvGpNEuwWD84UZiSnukBQtxemHFs8za55RT7A536CZ7gr",
  "key13": "51ZLT9AhfpwuPje2n3C8wKjWNZLhNjaHKnJzjvbvyPfqguwFJ8UZZ6myaBknxorniqP1nMyqTAGREnMXXYDXjWee",
  "key14": "5B4qf7N9avpvX7VDRsQJHJHhxDsiPurbt4hdEXQiL4iVV74RAhpMC8D7MGqePtRVkvDsFPjvpG7RGrj6AvExXfcY",
  "key15": "3UL9VUWEShkzkur2TnaSxWuwzdo45eR3M9aHY7Xsviw7nzUDAdjM94g9AkgsyHGr6XsxtMHuMzhrg48g2CYGdGNQ",
  "key16": "2HzCTprFF2TJPv8WY7ywf9e6n5k254tY7RjxNxDthcaKY4UpD6rTcNCBDeYqrsRUh46L85hZuEZxUznA4pd5wamF",
  "key17": "5BaNpfyJ7Gk1q2srvzRKy2bndGnimisv2ooGC2VyutNTv73jsuE7Z9Jv3r4NB7WXX3nX8EuSgcVyzn8iXsz1P6yN",
  "key18": "3azeLgbihwWPjpsPmm1DKoLVWQzydsBNtKxuptMvCmzVRL6HaxbGxcNfNvTrjk6GhBZagw6p8xHf25ebQyXNUSyr",
  "key19": "21QQdaoJRRda3vquyUpYyVp5tq2xWhUiFWghbAL8iUUquEmzWZyqvLymxQa18uJ6Uyna9GdBjEcrUjotDtRrPU7W",
  "key20": "4kov1cPMFPZB5fjEheyKneiTgHJ1W9pVkjhPjDhsJe31U6B5SgCSVhymhQfzdfyZ9YPE7pijj3EVX9E2sPWQA9dj",
  "key21": "5sEXoq9anC7RH71FnykfNgiwjAcA6TttwyPdjmqKkFoPGzDYTKRAefiM8VuXmkmNAog3h1WFKczFh7KR9vQo8Zbx",
  "key22": "3zFCaaGXKETjqwBHcgZz4yvXDjKfwXTWAV2BDKSJ53F4dhWPYYPkay4CRayLj7Kzetr5Dw9o8NhurYGbU8zyuheb",
  "key23": "3SX7xeSRuhDjoLnqXmnpSJAwdVw5ngUj2zAzZPYhM5cdDVfMw7WZdjuGx2SpnopsX1uqGVnr71ZdW7vReKvjpZD8",
  "key24": "5Ee5U1QiR5QF7zkqXF7VhrpooqfmXV95utWeqbNFkRKFWLvK2sKoWVBzwCM91eC5JXHACfzpv7dx4oHcj1iSFX28",
  "key25": "2nD9yqijmpr1Jw7x9Zbs22u9YgeVMcQ24HSk9E5Li7kur3czxGoUXPZrAHkJ1UiZVim4PTBpvk61SQUk5UNhYrZp",
  "key26": "3r4f3wDFNotVCtQR9AecWkAhu6yT21NpRB23LYtc4KHsSwFHiknUBoda1JwES7EZgXzjg8mCGAz5aY2K6FpE4cea",
  "key27": "2hSVib3pNfc324HPY4C8EkPyaWsxH32LHN3HnBeQhm3epPrqZUtRNYYE3Ly54a4tPiZT1wDs7VsZmSzc2x559Mdi",
  "key28": "5Lr3Wcjk9TuRzcfBXcNNzo1v3ewfoPtsRiwgAeTsSwGWnZRt6EtYQDPqybLTgW4oBJYkghq96meeSLhFca6pXrBK",
  "key29": "3J37zsVgt1dEFqsSQ6hQ8aJk4ZGqrzbNCZLjHjpbLfBqELrb3GEKNybpuD2RL4LugbTEAyea7S2ffvE8cQhcGbVb",
  "key30": "2a6diAUqFSgTvC288QqSsqdrkjMVkMg56Ls5DSyJtJnT8VhZ9YH7dpQETtx1sS5f51Hr1rodWQFG2ReYsgLxHZoj",
  "key31": "3GZWSqzNmfzA6ouFWssjx7zkiu1H86SrHjw4rTQ3YQqBZVeMwL2xjPCnNJgQt7MsZxh2msjer7Akh49dc9Ybz67B",
  "key32": "53xyhH4uZmuwwbErvScgADBvvz2xGiLX2EtVrVSfCrktmWAcvrA31ncPDJSUADN1WydMKSSfFa15ppHq84qdtg5C",
  "key33": "5PtU9aPVxafoccPk1hi3Wfv3iqeo43oTUHULmswaSAgFXMCXvqp79DWNJhBduZcgwX1X8dtdWkpNawZLLnReB8bn"
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
