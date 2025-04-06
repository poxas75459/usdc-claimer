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
    "46jPcbjc4vRF9cT1ovfNYr5tErY13grjB4hq7qVcgGQg6L4oznoEsfw4M4QHoLJVnQ5WWPFnXT85AiMqPvkHQKgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QqWx6LfnZzEHfGsZs6o4nNQh2mVSkpoi5H19XVWDAEaTWiC4zDjAvGNPv4bUuaki1oWD4pT3WJM4BKBfnUKia1u",
  "key1": "3zyVXRh16qFyKx8pmGGPLFKpNW4cMZqBxE6Me56nxBzL1dhomJvLxHXtjaG1TrgvL7VbCkP57TcrRSnHx1LU2ktS",
  "key2": "47d7ph2JFy92g8w8Vnn7Qyf3RhEq9rvVuXGLqKxdWqxkJxEPrz52irsCjyBJSoFjd3ki25aN9ECMonLsN2y6HY2W",
  "key3": "2QEuWFhjPyPbBWp8FBtXyDDoGE1SBK84S3phckewWvkSQXAmjYAa2KieHfkFmeFcfYFAbNi6GX53uPGsq1aQg8m7",
  "key4": "213B2Z4u67nojDnDEggf472VHQk9zNGFssoWoMi4xDQouKZHXrLpT7td7xNDzGJZ5gPaR5khmzxUcK48VXZ8A6Fp",
  "key5": "49QuKw7BB8kytTVMMAz7bKSrrbCLyVNi7fQS5ApSHp1VTxbvtdhc55czMi4fyCjeAPN3m2xPCgB4k5S2TVMNSBYk",
  "key6": "jAzU6TRXVp3yPtZjczLZ4TksCBBJZT6MrZGuM42DBXRECK3s6A62zam673wRJZw5V5AyXRBYX6LjVVwQiTqeSMu",
  "key7": "vfdmW6RXhJt5NAYooRprKUUCfsbV1GDc1iecQSgiWPSEB4Cn9dTKYzQCe7uDwPsysqShRLsxmFXUtBAoSaozHXj",
  "key8": "3orvxZPyYEx6HjDhyjfgUPvKEtzGDArHqfdVYAKNxLZSBfCek1b4oNhzXXtKcYv2PUpa2Stk9nQLczMYecDokdVc",
  "key9": "5rw2cTe7gVtmyZq5fuVB8CAMqnAG5iDDKgiDHwjEAtkQPMdCSX9yZDeSvLLnrmYaHePCq2338cNJJH36zXDGBuBD",
  "key10": "2puhhAeRaaDQcHbwsQBtCHfBzLCeT1paSZVkoouJrwFKT7ChpDkAVdNkzGvEyhraJAc4StbPvUuY7MazL8rUpwG2",
  "key11": "4Rh7X23N6XrivJ8YS3doiguopdzp4PJ61fYbCDFnhJ63uKsGH6UgRQE5RA5hkWrg22DEFcQb1xjhf6gAxJL7xnn4",
  "key12": "3dZAuGSAbRKn9yZCMyMr6iQaS8CqED1cZL2NmNdf6e9XymsgSBt6qSY6YX7q6hT5YvdqpBBxaAZ71nTbBqzg288d",
  "key13": "3p3KqnieLCWFx4HmyWf6BVkpBzASf9eos4w73eGgNU2cuXyjfWmYUtJ8osmENWfgVGG6YTwSttYXkaBLdpDbD3qs",
  "key14": "2L91QcQWNXVH2XcP2drP5cNMXp9x4d315Vhkv9DXLNK4aV81pJWubb9eihRFvGy6gKGcmcbHDwajEmMZKfComuYA",
  "key15": "3PqVD657amjb5iN8bVUw6opsijy1rKoE4WTjm9UC5yLMqciYr9ZaeGXSUMsvhp3Z1uCK6uvsKFEZyRv3NyNcTaW9",
  "key16": "Wp57rKV8hiC1RnSnPhoYhQR3md1oboN5DPo84qmN2igLUxZtc3sq3ANVFez9HVpaEEBmB7BQfYYLZkrrYzse6iV",
  "key17": "4uXUJ9DUtvvRQuTmLWcVZRMsUbic61Yr6necxPZ8u6fJXv6XikNbVYHhGei2E2MFQxsdegvxGEUyERGq6uzyE221",
  "key18": "5FAkvAVV3ynAxoBvQ1HVJBi1UC1pfLLycAiKYJUvuVP8UZSM1rKL7CFQxQE29EJyUvWtSRsL1kXkCR7a24pPoS9t",
  "key19": "CuvnU1kLvhmLnzp5MwV1GK56uKwuA9ic5tXpaCanWJHWid1nMXhRJFzcxCNF9DQ2iRZTCPT7UrFdjkSReKJ63UL",
  "key20": "2Wzy1U7f9pLDsp25UmgQ3ApCzPEtf69iqSVv8ajJmJE9b5PcobQrqSHs49BS5FvAWHyEZA78Z25dDoXjm2HCXLbt",
  "key21": "4QWGgo79dNadnzeJhyc86Q8WZiSGkzt1sAPJHyEtNbdRZftDLuy5DGu28GPKcpjLZ6tKX8dYL1K2mYQK5twxw5f3",
  "key22": "5DAeeuQp2g3y7GC75bGCvx5jCtGpGeAGE26vXXTJmGwqWhQbMHzmK2tGkayLU3FxHfi884QJsmFh2nVtNxAzesSU",
  "key23": "2VLRnpNg3qY9jNsXzjS1jm7mxFynpFE71vd9GL37kX3qDqXhKNDqhgAnT5xsTnbw1nRwL8HZSVi8NPeMtEo9Ugna",
  "key24": "63UM2ytqE7yE7z65FWqXpRJtkRF12qKgFwnrgbjDsJpJkVgDZX2dYLnfa2CPxov2fqwrfw9bCkwb7h8SuczivavC",
  "key25": "9GKZifjX6HzBauF5T27UWxM5S14v3CbcNRCFtnTUQhH5zLcqViPnhFfBoJ4u29Lvt74acWVXwPCZ6LXuDjAuJwX",
  "key26": "2HjidKcHCYSi9LpM94uB3JyccjDtTHaUPnoBUxu4ynjKWSaURxFTstBwHWzz2dMd23kTgbtfmeUnD4PzfUd4h8BT",
  "key27": "5DgKxyegGcysmaEvaG2dJypQRaKkndM5aBXZpfoR8wxCYXAonVrGoTiwGy8ad6XQfYbjUivCnUq74gBqRppFDDFK",
  "key28": "31b2i1tWq65FQnrhFDwsmooafjhkqVz9vNsdqjTDtMRtRHHE9vtK6xENEnMFo5UXUrbJnYned8CcgfCawHq1ofKC",
  "key29": "BF9JsNN9FeQ5bHi53irc7D1iC1GYUwRu7dhZ1HTWvFaqpRyNWbip1Nih4f1HJYPQYRo2wyTmqSUJYFYaqMhSUce",
  "key30": "zM1Y3tbCDGiuREzGg4jzEip9YnNZLxAYNXE7B67ws6aC6y6QhiKHMSpuiMnkg1BpF2YFKXFNwQD9Wjgy1Pb7soA",
  "key31": "3gSaTPtTBnjEhGEUSU1Eb1nydQ1Mf7im6gAKiLtEpHnm2RVYoSnoZQZH2452v5tHw7KdWZdvMX2pSQJQwhvnYDN8",
  "key32": "5At1dVYEdiCDNEdhd6ec62jGfNMRS87r8Bjrbt2tze2ZDUzuPfQjckPgWvXmJQ2SgSriC22eZRh53wxke6ZcLSYM",
  "key33": "5XiDtbXV3VBYsQnx49q7xYeXiKDbzAU1t6x5zzjneDZfkZMLAqQZezLp82ieMi6pYJa1AFJx2qCmGCvoWYHCj1fQ",
  "key34": "2D9XeGcmVkteYuEcUhr2NA5oM4ZppwJpPuDzTuw3KbEEhmBPjnqrgezWCxfK3UFLeEXnVh14ADjbeQ25fKoG17S1",
  "key35": "2BuVbFJdixjoP465p8vACTdss2nRYVLq7o9A21AdikTDgkANNu5F9vVyztyZG9D2xtv7TqdJd2mhRktUpPBvNMKY",
  "key36": "u1CKabdb9mDmqARobPCbaBsRUDwNyUaLDB1tfMwcMuFuZL9TbZXq48ZKiq6MVEEi4SyYgYorDWU2S43NeqPDLKZ",
  "key37": "3v1Xw6AguGMDaXGuvovNgwuaWENNRfPWcxrwP2etAPd2ZTVor717wvy7tKcQLeDUD6865mDbPnTUNTaUo3VH1Z1t",
  "key38": "2GK3canMtRRxrk1vxUGqqkv1zWkWHVExppYvFBSDnKHGZLmLiq3UjUuNh36y63gPb53ifXwEhVLLPSwoKfuW262W",
  "key39": "1b6huhABiT3jSgDLcxE39N6qv2U2nffEHUqMH1DiXg92RCuLhdLx4nBMn4kE49vVFtr5xTYgCverTrbpxy84qrq",
  "key40": "5NPwMQATHGEWMv7ScxowARgVRv71xQg8UfdAmzkoUKbCkES9smp3t898ocKxEPzxrgWFJtxXRrR339pozRdrZips",
  "key41": "jaVvR5uDQWmZ186rkccBRGRyN3GLHZNSZBLwPt1vNVsnp9PEBrU9dUcsgWyjZEPXPi6ukfQ6stVA2EBdLvc5by2",
  "key42": "V7nSNbrtAytnACrVGGxx3vwY7jncpbPtT4mEA8pFmz8MAh63EBhFYRaPCxexc8sCJiumq3FDb3cu2SXdKyYiC7i",
  "key43": "rtCqzXLen6JrzZifbVn6vwBh4xERWTuTysmUStCUrbTn6zXbbS7xYhMC9so2c4w9km9n9KFQpN6GMKbPGSRWnnc",
  "key44": "23SrKPEYbNz73wXCDt3ctQ5bXqtHocHmZzfGdB3HEa6yLcform4zBJ9aueKANG1FSZNZB3FV4b2ZShWtKwMDxAuf"
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
