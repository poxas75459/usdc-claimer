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
    "4C5AcqRyTatnzpQYqMfyfBRKaKY11Y2AHtawb3wMwV2GSkcdmAszQ4JARtyo7TdVTYXbJgWJPfv2bAvaLd78ZGCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49YjksE5jFm1hC8Rmb85u6VjdUuSVWrZFd8w45MrrZpGtiQLzr1cCaEJGxzc5Apcj63F6gSgUPhsu7XK1bUoCrr8",
  "key1": "3GfUzzwf5jEnEQpm239MYWVPeqCHQTHkVKx6TkeREQ3KhHoVhPW51Sg4hk6T3Z3s8r2kM4oo6nAsMxZafBHKfkpd",
  "key2": "3hzNVgfe7VijwzFkzVCjFvEJcyqZkXUfAgpGij3WwHdbhfWgibD7qLnmXhTXbFeD3XakawjrfB2aV9rwY4hKqAGh",
  "key3": "2hLGaqW73QR8UMsxbJAL1oAEN3ZuYpmszy8VQKwSjJQPfmRAD3ErHDiqS59CnhAH5mwerRrgPnAiyDjBQTXQWWyM",
  "key4": "49J3wq4fvXRomPMmpz29sVorK9VaCPD2Puch53dkmwGVdKCmtY41D4ZbFGP2Jucoeqqz6WBHjTCRPNh2GYYPFgwT",
  "key5": "ucGjRYLi4BLLgVV64ouuwXBbjATiRrJyw6BGvaMp5yksBxjn2xdXph4YvUJHq3LoNtMhG1UxDgWLrXzgo1hqpDt",
  "key6": "4PZNppJPFkb6tvm4PnksUhBNrq8JpVEoyxe8xpbwqpxTvWMbpoxfYvHUsu4owVeVkj6f55EALnQvq6or4h9brKJX",
  "key7": "qiZzQgmEhkkQ3yh2uCK7sKmDcE2hFe3LVvQeRekv3Kv7cB34dVdGoUp4at8CUPcaJhj1Q44bxejGkEaARaSCo39",
  "key8": "5aCeqzcT9sCXBa6oDnKX35ACpY7NudSY1oPcwR4mFhKqRuCuQhfqtBpJRTNivpJZ8YQfsjCs6dMSjgdQYD5po69F",
  "key9": "58anFX61AdYzq66RKLGgFxMM7NYR2KvXRpeWZK8qRJ68TqYcst7uQ9jarAnqDidYFAc1XEUPuWZi9fPg55zNT3eb",
  "key10": "3sLKJP4XmGr8YVtzraoMSpddYGpVggkyarwvNt1LrRJFNpCz8PkWUf5ZkW3nezPhDtjDddDZrzi6wHiTfYZ55yjB",
  "key11": "4HkHjwz41UsYZnc6Rak2vQKUGN7tKKtkz4Lq1PL5k2dfE21oz7vDLxbmAMekWxmu85Xy7KYgWh9QSNPLiQsTqhDY",
  "key12": "4r3evrN25FoJ9stYAcqsvv9bH6obUrxtAnkj27oGVcZsykdeTULhBErnAfPGqzsiyj9FD5irRazL4sUm2aGQq7wB",
  "key13": "2JU34EMNexkw9XMxLVE5DXm3wLgRVEbonf77nbiU5H9a6LxxyzGnRr7nmvofz66xMrK17tmAkSuQWFbgsTRGZKRW",
  "key14": "rPSCuaou8JxmahkSjeadURKoaBafJmo1y9A4VVmf8CYGGAkTe5gvSTbMgCLpwxwxiLUXtFQgrJoCoAKHdfQQ49q",
  "key15": "2zmjwijMyKER6wdum2DiKeF6WFBVkcN2eAhtHQWbqHEoLZfxhZ9kV7nHMnLdKkrg1eEEkFX2FN88KAxcH4gugGjc",
  "key16": "4wagsne5NZeSyxb2shnpBwSS8tUvfmAtm8kLbudEioK7ZDEovx9JZzTjQKbt6Rk5sm2WUqz6is9tFsRuRCAZKGen",
  "key17": "5pRsZBFThnV67BBAKDGP1DJQgoCtmfYB48jXTE7vTq6hVpQ2PzC8mhebEJNtzpLATLYQjktDTrLrUt9njyhCK2vi",
  "key18": "5Ft8fH3yhv58mv5ETxRm7L3LA793QPcVBuTT74RpTF422JgKESf3VomXV1rav91nHwYDvYVsauDFqzk57c9NxsbD",
  "key19": "UnG8RCPRTF8youjjiPDZM5KnJE711m7tzBB6jmBvEPMrPWDDUzRJKHDSs9cAnz1rM8tbTW1uqXYmBv5HsijzTUD",
  "key20": "5W2QbFFLMKXKT1XqvjFnD8WBFn33qrAEfKzV8RXn2ZhSEuWqTrGjd1qqPwTePFvXparwN2swkyx237H7itbvmiE6",
  "key21": "c8Q9e4BfDbiiURQNQ7MjxWZ9Gz9us6rgAN2CXigRGgbCTFKfhCPRXj1Gk6Hi7FrMeSZLpuLv1fAcxohEaFA42zM",
  "key22": "4uggAxsSQUYUWRhxE4nLGiWhiY4mUZTyYqQxCNM6kQt7GtBCdvTtcjfCD4gKa45s4fiCktvaq4dabo4u6uHx4dKS",
  "key23": "4Wm5EGu5Gdx8t1eZWLGFzEAzxL5MfDQq5zrvx6dZKNi7g1ENhCECywVUQumsaU53JyvrN73oVAvJo4U6msrsPLsq",
  "key24": "4WyBMZchiZht4kiDXQ4YtK4iYqQpNB2riMgSNPLAuQmD7eoGh7snpgQabXjqCLckAKRWLbiFkbRbnXKFN3aAQx5h",
  "key25": "56LKG285gUq8KYtiPJ74pjHVU9PJC3w5q4XBwt4znGPARpN9C4oADW6fRSiQyfxKf48Job5roCLaKEZ89YcNsFnt",
  "key26": "38YCJBVdcXji5SUmV3RjE4zSoyKwgDSgrtscpzb1K9jxdRnMDoXg7jMz4sW6aBS7uJNPmzEoo77uy9WR1kj8uoEU",
  "key27": "5bjwwS7moYMSNwpn1JXbhW7SHCzNNmBFQdTm4mPv3m3cmKYQitLLetR6qCvmN3T6AcYXLrvxqMVPgr8grE3Dx2dx",
  "key28": "5GmHsa1rug3Rrrh7UZ3Q2BqGA1H5SHGeyru9zKSn7AvyhBdD683W1cvX5dp21NmcfmvhSTjzWhCpMo1EaDDBivUg",
  "key29": "2QpFU8Lrz7ARvPur7CA4zcWtJ1CEuo3KM8CLEsdts6UpXUPjG6XvgdWmvkXdCVZwYMGdHobMS2tNTKbzshW2n1Zu",
  "key30": "52ExAFUwFE2EP87PejFnuXJoLm4NCLyZF2oke1kdajf7SJGhCw1xSzy9BZxw2ggPwCnDuWDmrf7NX4QRr4ybgSjT",
  "key31": "4JHQrpGk6cDQKhyMAN3uwqB46gYjN6kiRoMGWqPoGzZcx8V7MrwHfA2Vhq6rkd9q8rDrtjjg57fQ5oR6jKznUhY1",
  "key32": "2BGKJponS1qoM9hFDfGB46cWcV4p4pCYXUuMmtjXFtHoeF67f4aQY2AbVZqKgk9weHom89FDU18F51JNbdrqnrNY",
  "key33": "2dt3RVCtg6P95Kn7oNTSYf4AusAjDCpGgKYqVBD3Pm5jRyzXJ5D9gwmHdCGnm5dabG9UoRwxamLDtXoGEbLNWJwD",
  "key34": "5MNDQpJBVVaDkZpTNG57fPV2m4XKsYoXx8MNLyPU9DFRyacnWmrwNKSQRRUu9gLR4nYRK9LHD6Hxp8XxVN5GwesJ",
  "key35": "33xF9n115DzhZZF9dpFKDLxGDFVezXpKyDfgCX32S8duAqZW7cvXH6ckuJTGLiqWaGBtyZ5QXqjhKfRHKovHspdB",
  "key36": "3mv1JTrst8no4FDxBzCQMidf3D7vALMqYrHkDPBw2ePKvC4WQ2Fx3EHJfsgqsNpoRxPQhixwAzKrqgJutsskHoPk",
  "key37": "5fLu9KZQYUYKRr2WbBYXG8iLP2YPPuAu4Zpu7uHGPc3f6cdmgxGic3ymjPdmRgg71GGTkeRg3xCPL7WgR7kgJtHp",
  "key38": "3TTyQubMwBErnUMYBZgidQ4NbnhZdx78Qwi1ym5p96pmeph9cVAzuFZsm7scXtaBBqTWQf1QXo2w5VStRZQjboS9",
  "key39": "57pS2dCfvK1JWyvn8c9D7D9bQLVPEgSfgdjSYHCf2L2rrM3SmdngRh1TjJvWSo5X6H5bJZxWJrL4Luo2E229vEz1"
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
