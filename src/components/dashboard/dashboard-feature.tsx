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
    "xJwky5ZvC5jUKVBTRbRnayGYupgg2udvF1cPpyHA6PferR3yFovHDFZJpo7w8r1vPqUum5S7D78rrM3aJXUzoDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZoBtViCnYtesw3c2VaDjhDxJG1McuX3Ftvu9GS1uf67ZQbcMJ5U6rgLxSnKm61DLwJWQz1YrzxbobMZ9shH5L9V",
  "key1": "dYqC2mRibDtbvypYR9Bae6zhcxPyHc9xmiEJ1szQn5J81LEvKp788Lb28q82nBDUF742ZtDtotNN2pyH2BZo3t2",
  "key2": "3d9qUdRHbnv8XrGFjEzHs2srqs893FTR1v7ZEr5e5x2h7NFc8P4HRDvu83gx5UvhbvYVvds6hsyqSPbLg2pv2wvc",
  "key3": "rQYQ4aUrNw8iW2WjUDab1LfM4VPsPkJF6nTD8tmMKM8nmh1iV78cfg4qR1dKUuhbQR9NsYKL4deEto7ioTgN2yQ",
  "key4": "3wt3rXddjCDCAuTmbEsmAKP5LjTAkMvSdCEN9juCLau6tZMPuUtZvV94fYtFXLEEw53TKMrLc7FD6EQSxA4gk1Et",
  "key5": "2VhVp3Cvp7WqTg7oAfPFXWLz7MYPsLTugCuEM6F2paiY8xrzawHWUmzuGP6KhjzJJRzqhb4qxcA7kFKYsLu2barm",
  "key6": "5kGo3fq5xxaknjsCxqLJsxW7d5vozK6XE3VDLvTrGgc3NxketeK4zG4gMcEWq6BTFwoH2UDa2eQy7KxzU3p3GMJC",
  "key7": "3e1io294Z3WzgRzGyv2z1YmEHcNTG7J6jwzJ9axQD6aYcwSkXfb6DrNYbsEsF48wE9AAjNHXbnh9nD3ftGAH3XNp",
  "key8": "2811y8fmtVmt7V9vJWZGL3w2ze2yFZuMKPNLV8H51gJPw4eyUBDEUoEVBh4FP5sa8QCjXWyttNyYdnfM1qdEZmph",
  "key9": "4gjBCExQgSqyHqDyPhYrcPoRedvJs91HR9bwoBvcRnd4CXdreWLnJrerf7SCp15UzisqyyrmjQPZ2rstk59ox4L",
  "key10": "3gxQpamSEbPHKqjMkUp9AUvMjuUMWRvBAp2G9RwqVbz9yivVHyniHPVyCkSzsDZY5fYZ7iwtPsYeZ2RhHcbE6VV2",
  "key11": "oSfxhN58AWFgNjB3ad76rRthGse7M6JEynP2FpC9x5wSYiSQrzUnJy6W5w6wmuC7KUKeGiajU6RUDDTEGyMdCyX",
  "key12": "5nanawKybH2gszV7ZoZzfWYkBPgD2eSBiYte1C21btiV8bt8hseyWeYzCGQrkmWMBzu4v6iuVQ7KnvPkqXDXBUQv",
  "key13": "5Rpd2eAr94UMXy1geX6xaQN3KrAKTyJhcg1mfs8uYMgqkJ44gkU73U39G6Hg33n28KbF5qHfX6dGY1iWCUVMgumP",
  "key14": "4AcgDZZT51opDHVMtrr2YXasVAcY7pz1oJiQB6c2NRHBWwS499ivskcgtzppBvSE8kfrxrv47E5C2gvLmNNYvy1F",
  "key15": "4cNAb4zCD3WpbUL9wcjKjA1XwY8t2nzbhabxnMHdvMQHMA8k5cCVo8zxKqUK44zaLch1xNTo8p3HJrh6jmraTiuV",
  "key16": "23vpHbbBw9FVg3q8ZAj4Jitf423PwxTYf6rNQZgc5ABU8E4fHcTcEdd3e6vAt5WVqCvqUERWW6zoTmZmuLrhvMD6",
  "key17": "3izmyQKEWmbuWptP6BXCu1SqrW9FJAgD415Zk9miTgp7ZwK4DjiwC3sxGqcbkTmGkX4Z6bU9ztiQxHcbNCvb7QF5",
  "key18": "3QGqMky6enZFxu3pHtkfVqLYkDUhH5dXEnvY2Bib1C5rPKCDp5BgN9CDZrcWk4TVbWcLFNhFDT752DPtyFUPmRyv",
  "key19": "2YP8w26XCuXXq1zPd2QJme7jxsUc36dH3Df4kHJwaMXN9HSthtwPp7LMEDaGpfFScKDAubjCXmx2GKJy953V6QFu",
  "key20": "3GNmeSR6U75NBR4WagvghzCgctQ95LqXcx7Drq9tGeBTMrF5dSMkZLmwQ48TBBvr3HhWdAbvmz5RWWmThz8wpFzr",
  "key21": "31dqfEUPudtir82xVsKcYH2vQBFoEbGvkfZzxvEcU9dLCqAptrdxxhjFNETh1w2zG3NTNk3dsE9mshxvYW6LWMbV",
  "key22": "2VeFR8XQD4PFzG5fccwX5XgUBrqx4cPnBrod7PDJojQnauPkyew6th7W5dxhnV7uSjZktzVychixMkurqTnhkKZJ",
  "key23": "4xGjqaGiX5UPw8Rym6pWfJcUp9rp3FxuPYm2Jn7JcV1RdmyfA4igBr6A3Gmi4yVzP8EmNCetPJwZKK2KsArMkgPf",
  "key24": "3f6hvLhiYAj6ZZEARL7PEGXxbMruvjitDvgi9RkffgPUwNRQqGdsXSaSWtA5pChbXUbD2FWPUxKQZN5ekoJrnkgG",
  "key25": "3YUDuYH4974LppNdhxregR7b5Yhpuezp5szefJB5Liu8euVuYAFCgZ7xK9QHPUgcfsC7SaaaKc3neuXbLifBteLa",
  "key26": "4YjCWfwy99SYd62cZfQYptiesTmtrXEW9DBivyJv8LHiHnmvHF9AZRtz3Rw4YxGGS2kCs5q2qdJ3EdjWrT6Zgvto",
  "key27": "2R4RpMjSVEfyKGo2tcNErAuxGrqDxmXs9EEbicuTeSknmoC6f6wAoKyCkww9E6NniPYQZb3jsnM54BULS73maJR3",
  "key28": "5MujLsuzxbMVued81X4ssN7zYphzTBQrVeBkHgaaLATxbvUFTWjreUseG24YKFiYvCR6npad6wbgDx7XTAoDWYmz",
  "key29": "rm73BmqYUADGUNb2QkZVLPWMRem2jkpWANP9KjuTXZuoEFiJiHyLu62zF92H4NzwWcq6WmqXGE6ZQ1fyNmttLXn",
  "key30": "5e1PwCKqzgbQjLKySzKvKV7N5umiQEXyugaG51RTDbzAN4KrPZna6DeJ4zeBebc3udoWBGmtaNMmNE3a9krve4WE",
  "key31": "4JZbJ2xhZxYjd6kz4VmduAAfoafPvVQjyVSYJLEadKQgsdbDRPxBSAYjE2fkFT6hW8962fxdrvb3HHSHYZ6HV95L",
  "key32": "2k1yLdTES2s8iCyF7E5fmeXHjfnadEh6KCGfnJjSigyhPSSE6qYVwbnciA4FE6MdaMyQD14yNeXcV2AugzpiUC5S",
  "key33": "TAdxyNBsR9yR48UdU2n1PU6kjbmBHcxpS1gFDeijXEP1bFNzrBEF81Z9fgiLGWRd3m51xpWNod9iqeJRpyNL8Us",
  "key34": "5MsaKVSMdwY65jqdMSsMUG1ATgWJrezeS5Q8cq9KwygsvQJkS8Kw6LWSfEfiZRQ54RJ9WGpZCiXoYG4JWZc5H1ku",
  "key35": "PHo8XGnyh1wo7apEg5h6fZTvk38gbXqLeD9zeTR6ykqCzS6pjP7UbKZLKD9VsqsgArUD46DuWc5SxthKgNWSHDp",
  "key36": "y1NXd1BhczNibZeeimv4vB5QhnKhKrtem3DT3Kga12YWVXeFPE3KCLRQbtBr8zVFmsDz677GgWBveY1xeQQ8JB9",
  "key37": "4xwaMWY8GrbyvZCX3Yhosti7KMNgsDnupu29tvsynBmxH1hkxxc16Jif1z4LLBQ6D7pPGUez4QvZEUHNvgZKc8MC",
  "key38": "38rSNfYxjGF4GxFfkVM7GCNJkzE8nCcwQhKL7fZHbNjDUMtriQMque5rYzf6vALtRAucvTbo6kbQ9YtCZGSqVRr3",
  "key39": "3ukqfQ91hhw7p5jixjKTP3554MSLs3VQhj8EjLzdEq6XyFNTbYWWPXBrd31F1KY6YcGtPwKgpZLhV2twu5XqMhtp",
  "key40": "4MPHo8hNWPGwAABsbXGyNCUwJsCADX7nppaTfxxhJbxaitKZY4PsJHRYaQ23hAUxQLTHbEjBiZkksXAHmVSvhLCV",
  "key41": "Tx3BpqAn3zf1Wmz6yd8EjHowgfNS8s3sbQYHJKWrRpmh9DZBbKadSTDWW4MTvsusCRJAiftu5wK9FatSaKJWGo6"
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
