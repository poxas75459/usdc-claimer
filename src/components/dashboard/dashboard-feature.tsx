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
    "5jwgnU6ZanVzVh16cszjBXSPfutU21jN5gdipXHetrLVQp5LVmxBsF29TeXAJYCbv1wEo1N7APNBivuSvoftMpxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2om8tw2FycDWYQgEzs7BeENd9QU37dX9nMBYGfZgL6AjWHbyCas6pJgtCyUvHmx5g7NB1w51UNgQnke8h77XzNqW",
  "key1": "Nm9sjoSRCED6HbuY8c5zwVBZfPktmqzicpJQ5Xtpq96NV6bVy7aN32fxdfpEw4XpaLZA7iBj4ZHydD1vdfkZLxo",
  "key2": "2KzeowcHR8iHLrqBmyvTjupUW9a8Eu45DDsRTESY1urQJrcVrdYyTuvu5BYzYAfs2m1bRAWHTVLbLUKUpgDVA5JU",
  "key3": "5EtfEm1UYkDMGFW1mCKninTuaNVmS9dpgRzAJ6zx2gx3Tw1stpKcdUimzdD23udSb4pB43uR9CKEXkgEKfuR3Wz7",
  "key4": "4QbvgQz6MptszdXrMc91BRVtKjAPh24zkbHvmaoJXLPxKm86Cg1L54kC4SxLXUCe7rFVPPktn1KUZkhHsWeFuKPF",
  "key5": "5KCHKYZE7McVT7oZDY6W6gWjGFW28F6AJij1gxoTpoPFdU1NeW4hGXXQMX1E3LrwFhrtyUfm5woJs9fcRHCpUhUA",
  "key6": "4wUTJrgBz1cUhgbJ1Zg3w9WeJS2DbShpKnj7p3QZmYXrbLBdC5kpM1BLrwwNBuuvQFrP4Kgx5Qkayvxyi2agCRFV",
  "key7": "35X4iQ7He1Zqi6sNYvpdDZDfn684os4GZwg6kZvumFFK66i7U9PL5stpU4DxGg9x89GaGbhQKvS8uE8W6ZnQKQSB",
  "key8": "4g8poAtHqnYFvnkS3Sb3NJJacK5aKKwLxnH78aFycwcz5bbou3sdnMeZzGhhXJydMueUGTTPLNJr4cZhbQ7iozpB",
  "key9": "2kSPAdDKEPNzppP4qXcrGFjcRkpUTFUyvPJiNbD2CY1JU5psTsJNEzKQayTezN3kZSqSXptHz6d5n8HYZJEcaRpY",
  "key10": "2bnobrazApMSvMnm8Gc3ThGMPGsbEhppHkcPbDn5iRKTcmGGVrYdBrZUQdmCofkXn6AFonjUA4e812VuxTsnJuYy",
  "key11": "5httdQu7Eh6JqbevEtkXzcY2ezU35KzcuRbNCEr3qgdLBgRz1RHUSHJo7FU2xVNtnTPWp6pFA5ya8pxTQ3wajDK8",
  "key12": "5TRnig7GovnbyY8ML7YrqPGzaaCB3idH3c6YYXvtoNX8BRTHfp9TE6vFdQgYKj1WdKKNdLf9QptHg6NDkdjTGTmi",
  "key13": "3S9cA1K4ZmcEqrvpwnG52WKdMzg4uYDwP1NitqutDjh6dp36GwLHb1SfntpLLaEuSJJhpAAb8jNPXLH6DwyccNSU",
  "key14": "2Ls2M6gjH62gY23C5y9F3LXmHjxRPuFNnJ9HQAK5BHcKWsxUi4A1cRdhiAM4B1C1CtzkrKgca3YjYVRtyXu3hkPf",
  "key15": "2hQukSwqrMkC8WxH4ibxkok5A3bBym2kDcPYuoYwZEUQGwHN6XBm7KCWUpnv762FvQsssau6HAe49CiGqdvEAxx1",
  "key16": "2RkjoeM8M27Q6XnaJQpzoWVBXKsSUcGkahUith31vTHFhru6nxzPLQrbtJJTgfk6NGYD1YbT1JjNvABp1gDVUQKa",
  "key17": "4RAckLTVUQgfuqQhGdVnQFAZ3Cxa74WLNNB6uaWf5VhqaxZc4f4LcsvCAUZVJTzieZ9AaB9So5ZodQx9CmqBsQiY",
  "key18": "uV52HUtgnMKkJkyWfde1PVvd1CoDUZDTLWsYSCRrHkErFYjNhUdeDZVRubJ8bmwiQEVdAEfc39Hp1wpkYUtdi5M",
  "key19": "RKpVaicsQzQ8vWNYd2KEdMqiSKDpuSGH4RrmxhCf9yNFXxsK7tWPpCiGUEvPux9LtbYmNBQ8c12o9R52rsM6oFb",
  "key20": "CWKCkBZL17PCkSPHghS3UEHPnsWyWycY5fgzGRDJxLFoLiUeEFH3QcpUJTNXUmabgMUBqrGmWLEnZ2vsZLHdUhP",
  "key21": "2w4eFpQkezWnUPcMHs2H8ywTVT7LYSPiTiEKHFEAHQq96cTFai5UaPTXv4hhiboXiAuLGYD87oEz6RJLf5h5TycG",
  "key22": "pyXiTHMtgRE3t1HTdZy6zgYwfpAUzfHKL2LfR8nWQJ8UfpDN3rchRPECjDud5HnKkJvkaXrbqFoLxbfCKYjKanW",
  "key23": "5giL2Yfs9pdNjGsvN5z36wzk3etU7FALB4X5G2ByP7gdWvoYB1nbiBvRRDJfCwjr41qTa55WjYayderRqtDiAHK6",
  "key24": "3S9qMp548FtQp8X15vDkcNwWQpXJbz8HPYPtTky1aojFZJFzxpfWV1YfE1G6G2SXoJUx7sNoUarbmCgJsh5MSZDa",
  "key25": "5aRML2pH5xvpW8x4XAtEGFHbErCsU9Uepj1eZqr4NRiiE56U2V9yoaKi9wpwhpShCCuSEzyPuWmSpPA5MXXphh6p",
  "key26": "22X4MR3YcQF67Xt25jHQvX9q1mMKbe2RtyDuoYNSFvcHFWgAN16sdfndnECStRFdYxm48R9g7HgsX4iYaKYb9sbm",
  "key27": "7iRZeaQm7qA6oM7ZAJBfnAtrVfsBYXTsxuduTEhZgApq4amUYJp4d1GyJveuFp1QGEBfN2sms8V4KT2RBUoptuv",
  "key28": "3oiabJaNj7ockmt5rfe1TkzJWkTciNdQfKFgokEZenEi9Mo4Tq8fnfCVVPsMDF5LY1rjjUWnGzoohUK6BtRaEzAN",
  "key29": "cx8aJSLhy9dcmGdVWneQpXSFaVFQMPaPLnXLzKsZoMniiPrdFwiBTFHc61fLxCDoUbsbHpaMrfiyahKTToHxuU1",
  "key30": "36AQjK8X9iMxfCbquhXantQMSkCdsAgiNtFpU6xUB1wQN1u7HcezfRgaKJvtmJ657WX96gv4fYGg3eQYTmDErH9R",
  "key31": "3arSZ738irZPEBnhmQcqgFwggRPgNch81LgdudAJUW3ptu59TvfR8KtrFCGMgLRrm3fyASAjevqcf3wRgbdXbh41",
  "key32": "4v2SmzWJ1DtAHsxpMywXKzhuJ1szyQg75otdi4R9JnV7wt2cYxxfYzK2hqbE4MPBiZWZWKFs1unRa9eLhjKMrqXd",
  "key33": "4nQQ1dfe7SQRJD71KwCi9TLWhAEAxrooiumgjzLjgrpESDGwVnX9M9zPTzWQv7zb98Z972PhcjTsazZ5c98bvu8U",
  "key34": "53iU85kA8jmDz1xZkTDr2kLw2Eahr51uzMjprx193QeKFcekiQq7ouTxoeMznnPePpq5DCWozgWcQ8RjubNixcez",
  "key35": "3YATUVPXN4adpJAEm53aoUyZqrCCt1mHmwfP6XMeNwTvHTLavKGdUUVfwx9PyzTgyfZaLRiWpMK2gijH518wyKGi",
  "key36": "2L5J6KjKe2sRTF46q5VVzGKHronxMZRwbPM3yJEesjgduLdqjPY7Yap2nfvchK5hX4QeeCQknk3sKRBRjYskdF3q",
  "key37": "XEmpRVyiVgmFDXd4mGLiWRrv7R6EP5wTcxn2XzWw8D2iNnziCGT5Z8CQFHz66JpnbURmqtL5m71ieARBLBTBGCj"
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
