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
    "2otEYvhhLZsvHBSx67zr8GBHdhjJiDfBv2iXNRyMPRgPxE3JDLur98tT8VQjhVeMzvbAhZ481XSCb2Rjdwk42uTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Utzy17btyuDqaCvFTuhHPQzr9kDLR4fCdDEH2QgrYkgCSvBCykcgdb5uNheQcBR6HLr71A6kQHqUSiKvdgPyfqG",
  "key1": "5LafKNHd7TyMnjFdfd7p6iMhP4jgkngdznZXdHvg6pVzr2ZrkrnHv5pmnH6SdtueRQNPuDfqK1TSv3qaQkMkYNic",
  "key2": "49GPrXaqRgun8qw2nrbM6fCHvEVjeULLS53Rit49f8xB2rJT3svrbLCZR1VMeGPs4HRoGeQE8wxtaaWCRfwAnP1J",
  "key3": "tvAzzFyvsmvB6iqt8fa6DobXkjZdmgeZjY1J6UXTCbRDpLzfRAv5zE64xXgBkLtsrGUrhiLcYemDrHzRkpcbmSs",
  "key4": "61n9Y5ByZcRh4mH7NrMJfvx3a1KuDDCVYUjbJ1kaqjGMc9yAqwLZEnybouf7dFccaviBkxPXvGRKHsWJcFZKwEcM",
  "key5": "3HbY37TRiv1xsJzC36AWS4NgvWUUujmbnFikBVru7MDJr6rUHFkUALkxBmxfqrun71UJyn9wJuS5WzqfPdc931VM",
  "key6": "4hCEWosC7KKhvSMvoenZ7MGniegFyCyhCV9cqdrqBLcHMvFnSkVJn1U2s5Fj1nkBCRMCBLgpfX55ZJnARbV6uS2J",
  "key7": "t69XUG1L9PHGp3GAEVtP1zQ2EsWVnLnQgDENFYjVCysnFP6eZFukeq1BRnhPPrKeNUsX7cP2isJ4LmKFwgPXdLG",
  "key8": "5z4QXZZW7Rv1oWwVKSH89EGzwwyXnkJZM4VfWjrZqJykTjF26oSpxhFgdhoejtu4aA5m2aSE5R7RPMFzPUhZWNsD",
  "key9": "yvCReLGT62dYhz96WJGK4EEwVBMwgc1Y1JKqgehsH5ZNiCesuewoKZBdbBhCeK4dSgSfWP2u46SCiQoKFYgAt8W",
  "key10": "fC3nbhgJHkSMYNMuWBHQyukSgrme3knr5evNDgTgNiNkLZgXtvqnWRYMVrh5VWEXPMp6LsFe9DhYktMtxcLXh3A",
  "key11": "jDdj9N55qnqUqsJL5pMoqNqWVmkhGmZDz63jTY8Lrvg2Y7ip2voQjNUAP96a5yHNfGuU9ANyyUvwWH5aX5haLwN",
  "key12": "4YLAvzUr2vo2DykoXuyKVzMHYDmYQPgYbwgvMxwLt67bMJHeuFw57VyaA8jfrgzyL4bfrTXv7BEQWaw43ARxkcqo",
  "key13": "5NHYmvY1wqVo23pCvEJJMum3dWvJHjkzJpSHz9mhoeZG1CELA31atf1EVMQ9SyBmqkBMPRTnRHgnW3FuMXE1JPQ2",
  "key14": "5eDiofD9dz3qNUoLUAtpfyU4F18jAE3ci6CSEaHzsZoqh9jdCWhdm4K9jrsZGRMZoQULofzRPipbiZWHZWr5ebfe",
  "key15": "5mG634gKWFD1V1DxxWmQ6L71zetmDncW3ofZsonTBJgamNNmpUoo7qFkqmZ5cTn18JvZdQyQy4MxD6Wr93mvP3Gy",
  "key16": "4RKdsaXdy4KFw5U86EvxFeHrpcxrRC2vnaRQyp6uoQmwL5MgfuNkyanp79sY8sSsy8b27KFpzKdQohXTvzYLB3o5",
  "key17": "2EWkaXAqi1iGDnuBGzofbzMUM4nmYPGZ5xUWGG7nJMXMsJh1SddwraSA471r5wrx4asnAU167hfTXyRmLbPpkT7C",
  "key18": "2nNuSuU6cmwqGkBaSQZ3Ev9wPStxMHYbMA3WPKZQ8egqAkPHjfDDwV93R87mZgWuTsjisEySxNVkmkLf29nKHwqW",
  "key19": "5AKjfnnt6jkTP4NrqSQCSVryYCPrViy5VK7CG3cU1NfDfRaUEe5DEEBerDyKszrmTyaZGyzMaTXkm1CEvthW4DLz",
  "key20": "3FF1Goys1TrsKZVZ4pLjN1t1XQXMbAj8y47JV79J3EB4pYEXp8f4Hg4und3LS2kU6hqAibwLDhti942De1qXtKBR",
  "key21": "3FyiHe3hkXKY3nrAtWcwNMTpkVdJSXMcXu3hqKNrFgiaToz56Y2kMULXKPHtaG5SxUU5Z6VxbPMUsC9raEkTDuBf",
  "key22": "32AgAEtFopfxkyCNrsLEDpw8htnaCVrZCXar2Mv4RNGj9SqAsG7sZXn2du8j1ePZdEvQA5A1oWusx7aodCCGEEnX",
  "key23": "4rV3F4ipoq6bRrpe5rDFWPA6tG8nmmMakT86D2548SmPyKbu9s1DenBEqXQpUq7ujivYwo8NV89ZPcTiJs7Vr7Ky",
  "key24": "2sUyK9iNvhvY1sWtghQhNj7bsNNJMva4h1YLtQXwfuN1ecN1cMZ8dNcC25jNsvUdDuFopzxUDpcvbZd4Jmo8NDXF",
  "key25": "2BZAjRyfHHabHUfVcvARYhAUeqEyFEuDzQMeV2EW6MDvixMPV3sVJaz3FubtAqnHmGt4VY76N2KTLnAMJjHfMqJM",
  "key26": "5SYHLvnpjX7wte1hPZTXsaXLmJsLQ1ryQbzhiwnQp67RSRXUUDSSMuuZGCrBbydbq2FwzedDoK2qGLg4o9rmBD7G",
  "key27": "5C6Kw4VVvFK5tZU7Ev5ujb5vggk8L2s7i4GgKmJhCpYKLo431xnaFD9TFcCucmjcs1SKKwrSs7hjUoK9XPPdDmZE",
  "key28": "YoeZNBnMM7qQJdFk2SAG8rjQWThJ9YpxzjEHoezSHozdk9AXx8zLiVUQPe8FzSkCQEJzgqFtoUqfXNtCLnE67mf",
  "key29": "3beedzmA5EjXmQQSXahGSkhVrmJ73QSPRwXy4GwdsJpvjJsf2n8hMggYE7uyP4uEtcJZ57WUbFesd3AxFSXVo8D1",
  "key30": "5sciTMbEiYkXrBE3GbNF3ow8xyTJAeXTo3zDiGXHapYpGoHjTtYBu4KVz3TvarAmxD1v1jVK1Y1emELvE4JYwgkw",
  "key31": "jEKrJPsQhDMNyvW7w3TiRRGNGRiCK2kzDtXtp84vHHutEtEbxD7fVcTdvwRmjykZX2xrfhi6NZdzckKB4NEjbTq",
  "key32": "3iUXg8EqPfXHQBSRr6wWPdUPQszveWTHtPDSXXSNE6ne5TcSVKckVhEj9MH3QVGE1EmimKzmkdc9nMZQPKfMoFQV",
  "key33": "4Tff2MXvpZANyjyxHZJQKDicLHnp6xGdq2TGEeipNkwKDaSNizsiSnGxifE2jEnconT4UcghRXFXqHaY2HnPrnWx",
  "key34": "2H3btS6rVgAiRetugrYov1y6rLXTNaGLy748LSaSrs9HzzkWbw2q6rehhEqBpKqs488k3rSMH4Y6nVN9KkoPMEMZ",
  "key35": "4YwLfjukXZgQmq94uwpsRaRoBg4xfqV9CSFKvjA1uBKPbRpVdLr2d6f5tstJqvX81y6BjquPFRCjpPhDW8sewdms"
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
