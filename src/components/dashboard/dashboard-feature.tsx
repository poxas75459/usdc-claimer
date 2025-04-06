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
    "3mDgSyF3xDduFRw2iTfwRpej1uWRYNNp9emRUu7EiHCWTWsb1KU8WixKa6NMDifwPLnFXr1sGTKa5VVanrb1ZgW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nyky3ghf3q3yvcdLCxWegM1C5LNC3wb6MJqHhhBpuQddM8Ki5WSBdUJzSYCmanEmmQ5Q3uaxp8PpvDPpxMRd98D",
  "key1": "56h9V49Y2j3KLw66JPTWN2gCPDqCnu71jUj42yZBivzxukQZMLUtCJy9t7w6PgBP36qnz2qq94jbJXTc2prKcw3i",
  "key2": "38YvXVVWcZXC95p2zY1ZwdizPHwn9NvDxYiTUC3wCbJXDz8tEHPdKVJ5YdW6yMLhRe8LbexfxqoEkJSctbwR5UL4",
  "key3": "jCGPY8zH5gjYDNdAuQwC2fjisuFDY4G8cbiT9tA69wav6Z3YbnCXiVRQDjGAVphbt1rJXE1xcuZwBbzr8MVrWZe",
  "key4": "66KcFKT7pxtD7YkXMEAM83fhLpHAvyfqyFCazvbE5RjvSxboJ4CnrsUR2S7imdknQF8BMYgYqBpAk6ouAZtJ9wV3",
  "key5": "5BGTy6bZeHLp9cSCk23eVvfihmpg422JxkDoNA7TQxM5UEDMfqtRnNy9WxcXfLsYPZmJPBB6c3jaTT6UnwADhbnh",
  "key6": "31MrXcHQDaAJQA2FDgNVbK1ExwRaWEUWFxmMQ78kGznm5YMWoYa86DrEcNauzB4A3LLS4wBVXT81yboPckQJLURk",
  "key7": "3duWvEk7KtTZVJdoRPRqTVbZ7jnDvAbEVffyM43DbR5iwaeow9TG4S7bVC9Wd8tTJhGdWbMupT28UjD6jVjm2eXf",
  "key8": "38oHfi1Uc9qSKSv565BQeTLDKnDH7voqwx8btCEeBZVcuhzG5TveXuExmhtFCp8YhyVp8tv1DapvAVPk7qAS9rJv",
  "key9": "2GrFGhr2Vq8Z6Mo9t9tx5xbHCAder5Q4JQKhBXadsveaqbD28rzdFzzK1oX6YEtSbjWoDjaW4DM8PZqHZJHZ5ke3",
  "key10": "5Jd9ntzMcU2M1tRM4byEyrKx947iJLm4nWk357NuLCzJWqFVnuVh5FiLyPPUSEuahdWSrbvzhRdWkW3DU2VWnFQw",
  "key11": "5M3MpYfzJifDVkaNmRf3ELu2ZRSwi2eVbcA9pPmcB7oeD5B5fogutLqZmKSkyXFqqnMrutWyYyFhp4jkQmsPXfm1",
  "key12": "4SjG16jfXrvQfZ6hM7QgQJuuUr3FMRZADHHu6Kyq5eDZPNhBBaeYU9yy11YpQCAVMFhEMcJtbViVjfieQERAAvED",
  "key13": "u6Q2PXg3tD3THTjkmvx7ULph5kaw48TbUbVERxaoQpr1nsfaPGxMhxjXvXpAPJ92tP9fh4CbYK5TeytZWy4bYa1",
  "key14": "3BdeuVSMhxcgCwexaRffuXfM1FyKUCXUnJ93Xi9cZeECujdZHNjtY2tCJP2uXMyHiLEGxHj4S7dsXr86zmJb3LmR",
  "key15": "jzYcqs2TSgSgA9Yh5bTR1kA2T4UhmwgEEnLdWepBhXRQwEGjwjoFFJuokq4ZAaeC8LrP5GnCCAUyMgUmzguSBee",
  "key16": "CRwbYiVDoYrzqA2mdQFGJJVBDc3SpUYqxDFMqdowdLH4soHpm7QMsHYTp8HLuPTdNYk5vBrFZjaEVDJJUDjdLiQ",
  "key17": "2iz8Za78zgprsVno4RjL9vPgBNyPj8QDc7aDTMZddesiBGbtMpXEMpQLQQ3oMmdPCL7niTQj26rWSMFhsxrLzwba",
  "key18": "4qZheGwBj5FSVYpKDCWRfUbYoBfq1BA6yAXb1pCYRd8i7i3bUPcQADJQv3J3bz169TfgAGTyTkEUs5vtL3G5eBiK",
  "key19": "36qq8qeBr81dMbt1CnoTvu7QdveQG5zEjgG5Gwonwpr4xHt8T8GVqSL2faaqvkTnJV2ThXRjSViP5UyEq6FuwTU7",
  "key20": "3m7YEKWo71t3UmmKBEr6q3URRcgLPgfCc72XhiE1bcD2MV8XZT2J6gaGLmn7aP9fDBVksfLovm6z44szmkbJqAa1",
  "key21": "431PjYpg2RLVPgeJz3s8eEKwAb8Jp2nh8ZSgE3jL3Xu494ekNh83URnDLSmEBVVBE7pQEwGTqhVYAbkdLoJTknDJ",
  "key22": "3KEj8DDZ6WEzt6EkG43wXZgBHCitAoJnaXgjSt6bPsFXDq1S2aSfpnfMCbr4ixmFWTYrYLDhnTwbbUSpMmgDWro3",
  "key23": "A7zjzSFBxcyhLw7pCoWLCR14BfudhZj54FJHitdmVKVvF2pNq5PgoPfi9M6ne1zgwuJWaRjv1Pw4zSCVDGWYs5J",
  "key24": "3nJR9oNLo3yNEcvdCYvrv5An3JNfeTijeetKn3D85kzqgJqdE8dtvoAM2UgvS5CHXbHMiH82FmJ8soNhfT9XpJm8",
  "key25": "UxzoYArazm3tLzR4FGG6LdG2guN73rZsRtG3KHHUdegutPrxwVXykUsXAgu1hyoirAWrj2QBk62z8ZNDJMvzN5p",
  "key26": "4SFWd4CGauvCpfWTmifGWvt62rJrdPVJDi3uZg17rxLJkEmyE3RPK1bvUGnFQmxGWYvGycbpsBaeCzsrNHDP3NQ",
  "key27": "4Uht5kYpzRNnKvVK2EW8MQBUxdPzZAXJhUjPBCwHt4qwkz1zTX6be8JsiDbJAvasKbRRsQuV7ZXfhQ27Kj6qm5iL",
  "key28": "4dZ65wrLxQ2xbCuJp33Vm8zhzZn6S2wHD4qtrVLWbSXDnCVR5JReDm7Qo3oiSWSntLNKWt86TEorqXJo9oCL3hcT",
  "key29": "2NtGXoZPqkyko7CJ3RKRYFpSXVENZ1AThb6KFUjgwLVWejfrdpneRoybH4NcdDhS9gFGYed5YovxQ46L6mQ97GN1",
  "key30": "4cG472x9xEsLKGJM6VsQd5sCpALWHpBJeprKPuRomoB7kFKSBgCg6cp1g3qs2LKjdzsb6vvxsbj8Ff6abS4XubgP",
  "key31": "S9n3hH7wgyuvh52u9S9cLVbzwSkXECbYUdfW9zuBD3jG7ZtuR87NJpuKZsLNrbZYhJgsbLf87wGixm2bBBQoVtt",
  "key32": "5vJTPraZRdE3fMtNg1mfioHK2bN3ukYSJ59A2CQM28aCvZfEomcSooFCaSGEEMZqNpXZgPHHin3VfwkaVJZ92cEQ",
  "key33": "4m3PXffBa7q9RmU1dMxVqFduAFwaVrRhiimvqsbjSZEgNAMzgKLPXK8A1zJ8jQP3NykrPAYd4EkegsVeQjvNpcsZ",
  "key34": "3ZkXo3TaSkN5xBAWezA7LXFSAmHEhkLRdph1k36tBjqPjUfyMreQHLHSq87YG1C6oKpBcFsjJYxs5Us9Xh7v4XGH",
  "key35": "2B6YgqqWmFnQrFgt9n57hy3fnp23VHDB22hYXWMk7hMUvimeJwsrRnkWEEQJRxYQ2pcCn6tfHL6FnghJhAxtj7w2",
  "key36": "5LyHRgs2TFPTJBMFDEtdykKkZUteKqRaQ93Yh3nJh6MpLTz9MdG7btWMSU5wFpTFyv7DD9hieeHqfCFRQNRnrgAA",
  "key37": "Q15LUtjv4q4wNCoGGx1R2mHuW1T91wUbaoX3DqwWfmcdYUdPBqjuh1ymhDPKDMnhMHwBsostkApBqunSv6TjqGm",
  "key38": "CTofPXgh1Yk4edik1kGx4g49A8UH72vxwb2zzLiqk9ziUTxLnjSetmJE9gAXtxCnBW7LuARf2coDRvn9sjgTbSK",
  "key39": "5FemD8mt7ebMwkrGxedfd3Mn7AcmCiPThuhomyUAKJnZK6LuwaFp7NA4x2Rmp8eD66pEngkaxWWWs12FmM2zBXqr",
  "key40": "278zKRrWF9dGD1468YWDhJUzR8DkrrDX3LzgDas7ZCkj32oSGWEn5fdzKQpbARw4PGtp5jrbESDxqAmsiv4G5dmp"
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
