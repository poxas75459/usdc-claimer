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
    "3YQyU6q3Dn72gPVw7ThKDbZC6oKVYdSQbaSgepNLnkXM18veDefDrueoxJwrdeVvU2tbYCssLxZEsRfFyeaeVjZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uVoeVDREw8gCmJ9Dc1KeAy8jyCKz1SSV5zGWPXqs2Ei9VJ1hmL3aZ8MmjgFpWgxGnuKs5bautmxzfZF9Zt2kZrm",
  "key1": "mfQQCRNRX1JRzwPr8hUhMauf15MDnMunpnRAuSMURowyVNENR7YSVJUfJ6YLa2JWJzPzCSEofNgM2Vyg333eDgM",
  "key2": "k3gY6mHz4srLcvpQjGabxzbjtuhGgStP2ZpffwpnvmyAHWCH5RmF1HXSVXuvXMA2UWnsMTihgpASMEA79dg3x5R",
  "key3": "2URN7doSue6ZsXvWr6awzQwhcUR6NeGEUuTEMcktHjb2eXPsCfifXWtRWPYcHZdN5czYwsU2joVPhN3XDYk8VGjQ",
  "key4": "DPebSrZTtxaYux45gioMnsGguBBaTM4C4gYRSmq2AUzdAbJi5B4L6ucLiwJDRXYqq4C5ZnrEDJQpcqWbEgUgznJ",
  "key5": "2gtFukgU6wDPfa8DnZGZWAbMa2RwAsxipfc5Jpt3jJUVSoPfYQwUk3z3n4UBQFpjtGZMqhevc8hDL7ED9G3YZYVd",
  "key6": "MA8Lufkwty9sQrYZp7SySC3dJexRfawLseWpQqPpVGgQJR3DwKwnsy67B22s47gLdFMF9Azy19mVYeLief5ktpb",
  "key7": "59P5axf86nXLdvJM6AXjjfoRJquohwoWZVkRmMutBVVvgeZvQwcJPXTQpxrJf4tRo4uzPCjcrJJWNHpKHsxi99nq",
  "key8": "4TvWbZSXdjCGXfkRyyuPry2bvSG5K7yEXc5HtErLskFyPxmhes6cCBuxAVNebwrtsPd5KXT9zhRcDtmRyQsBGP7W",
  "key9": "4nyMPqmxtFeocLDn2Ve6uGzLfY3sBa4aMvhfWu62UqrzZPJVokyyU4CXfVD58mxE2RYmfaurKkBzSS3PVTy3pGo",
  "key10": "NoUHdfUCCYzxVinZJfx5zKabGMNAU2ozJSv6DBaeAxZmSh4VSqFxm2E5o8bft2XSFctDhQWL9uYBA6EXGysBDw9",
  "key11": "HsxrUfjMsV7m1E9x8bYWbcy1Kc8Z2bP7usaQeEm4U1K9MbVKXZHDLS1RYcCcCSutQF3EnKbw757scpgaUqGSf6P",
  "key12": "3aU13xq9cvAjkUMeoxxaHVoAZ3WrU5aKCfKXgdchdTh1kc37cSRNn6Xz3Gp9Dm4aR15KpmusnYsp7rgYGFTqhuNT",
  "key13": "ytP2dt1BQiu6GCfbk25LFiyJpngFA9jYPwSaTh5jXnjKWYtd1TwsjKxNSujhDWuh9HYtRDXKk5jr3TQ36Ps6jrj",
  "key14": "5nznA9rWa1DAtBbUEovum8YUZxqwLNcLFvefwPQEfvcLwvciYr4Pp9p5EwMgtEi6R1TxPpbGSHnpWTDYLDHqghNa",
  "key15": "agLmMi99rzsHmqmxwypHcJjsmB1P2ksqijo2pyjEG3HasiD6xNL9LXvpnbATo9f9w4gd3V469qMMD9CxJsVZyax",
  "key16": "5govMDd4368VdyQtNQfRybYj6QqxkCSfnp7wQ13XEUGUbBsNcaXZBVszLx8PQpL8n25qb4d7TSCxzZeSjfZKWffv",
  "key17": "5d5y2jJjnRHsPUNPntMnSfioKc3xZhxVSeijxF18jhfjMDDeTPgefY5mpHdKH6MgtuJynePaEEseJ5FGmvJbH8Zz",
  "key18": "M8r8MUjuQKfZXwRjCBNc5t4EBr1hBLETbMySUAhRvZMLvTVduq8tz2C41aFTeEQAG4uAunVaX8VntyR6aWuqSFB",
  "key19": "23irTKsUFp5GoTFm96p5sMVX7QyBkLVEn8BvcyBsQ2mZxWfPw2TvdyBBYhJtwgHHPTDoHo2vEx8KswcBhbGuZsJc",
  "key20": "41JP7x9CAhBe8etfeT4LGSYD8kLZj5JrgDjNbM2NrfgL5h4ArvBi8Ak4ruwZ8ezYkNyvMhqe3HPUfaMGsaQc7yHs",
  "key21": "4EBsQEk71ypyYuVVGY8MFZStJ9X2rJAUoLeKgVNnC8j3uEFu3uJ9RJzT1BTVQGVdQhFpe9mQS6onCrbtGGJNuYM7",
  "key22": "4JsQU2VfwauRbgy6PV5b58cGCd2JhsHYVHDRkFFbLVm7saxwKn7fUWYVoD25k5okS2DdoGyZ4fJbFMqYXotQqTAf",
  "key23": "3TjHS9LPxASCbBBiduYe1kAVHvNvoRfTPRjCPeijPiLZTQcAKUXE6KXVvYkrRn4zBfGNpnyMpXWpXw5nnFFJyiyp",
  "key24": "3ddZKcGCzL2LqKuxA4txcMnpH72gQaRE1xuio4wCThMUkw14pPDBsW1vgYS5fF7zG67APTieTfxe46pthZDHEUKz",
  "key25": "4WLEA3TcXtbvX8KxDVii2CTLQJwUFzYdcaAxXSLeEQpaBACPYjYBHBM8eo7FUghu7hcLgyU51s75vqCZ8Kej5yyK",
  "key26": "2NaCiktL7iYMUry7qHzWtAEpY8k2Sc635TzHE5Z1CTGuq3epU4wVKCZcWdLQ2H5mwqVGcNqCuxDvDSJ3WbymSJrU",
  "key27": "5jiYnLztioky6DrYPK6P1UJBK1DBycBfYVs9qY84FJkArwK9J2druJV5U4v3CLMJH3o3BYFhCKJ1JEnscthgAuLn",
  "key28": "4V8J4zfB5mrhoaMz5xHTqU88QzbCBmPtXynij3rRuFRUGcWs5XZMPGnPNoCys8b1dsHtDKH3FdEGubyBYLeGHsnP",
  "key29": "4yBiBAsVdx6w896rT83LspfnnJY557WRjLAEDbvj1uAT5dCgcy1n6wUEjGsVQZvRUnr3wqs1m8tnT3GMZ2aFWduN",
  "key30": "2xkea97pRZxztFiRpXiT5R6xmrtbhAz6uWBMhChoKCg8Kyjy4HaDj78WGfQQ2G1bXQMzLoKYopL3xzsFUBmQCv2D",
  "key31": "jv28dqAoiv6Tgy3ppNZG6KewjPSGj3QzcffKxTSVRzPbd7vJmvrvKGpYCq58cs52W6RAwugopxQ9bZm2WFmuXEj",
  "key32": "5h2D5WkSwR1kgBa4tx59CSD6Gmd5qZkqedVJjbsEQqr3Sdro1s872wbqj7fLUQGygBt5eksd5NwEWVWJYXp3qePj"
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
