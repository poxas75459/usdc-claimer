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
    "2w6jkF4nXhvKAesXXhnDwjpRLWNfxF7LxXdxHLWsG2AeeqhDajcYH51x9y6DNqBNipj14846zgmAmLuU1wsnewsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37LS2LMDQoQRKNX88asb395NA9S5FYDF2zYkiTB1tgW9dXnM1nG4UViGGbMhicCJZJiUTSCW5EKB8WXCqtbUUnyy",
  "key1": "4x6ffoRfhedTw4p8y2PXAkpDvnamNAmjTj6n6ztLhRMfoKGnuywv7mgFbRxfoAYDhffCeRRZZ1U385NVSedQiTEV",
  "key2": "43hCpGfxWSx1q49qZLHHf28a1spBMdnJ3pZxh3uTGExgcAr7baiD5a5v8byBZFHkPRXwU2WUTNFMeP29Bigm5Nka",
  "key3": "YqUnDQkND3ytJ8jZWMf4XoGLE1rPnN4ymoJoUuqT1gA4S4cuFgMY7KnX6yZnucJEdx5JoFLXeRiM3kPM7cnZY1s",
  "key4": "2b3Dki7XyHDDcJ45MWGaqBNek7JNrFn4jjRqf4QWqhPeBcoMDDVYHUUW9bQJVH4cadThucLiDns7oKEXZ1WLe36i",
  "key5": "3xnk2NoLfqsSwAvGJGRVTCJaLfx6F6eA7VSnYkwexJVP1wbjjJ1q7iyPcHtMQFAWySjxL4dUbrqDAu7akeGeDg9L",
  "key6": "8cAqX721g1QGdMDo4vUwKHeR1zsB7nLEbfA7pg88MD73o9gcsKnqygUEYNAuRNuAvDdVKK9rkk5ANBbgWfEJNUp",
  "key7": "2chmxjaj4VmBPDh9j6aTYk8j5i5mL1PzohTXmYk4gBwSV9JTrxrR2HG1wYPJQAcfvXyCTC9ZDVEfhCqKuLGGYheK",
  "key8": "4YscWYSKWYEoPrKSBPp6cg8ofRWFGxnucmbbAxGsJFJAvE8UP15Zx9vFYy2XzgRKoPiauJq7GLbk6iTm3bVjbry1",
  "key9": "4cBWrKsHYMptuFTzwikaQXJNeKaYofW4BmmojpQQRMDWAXANVstFKcZG9tLfYZp7w37umaL2sSGDWPCen7Rduso2",
  "key10": "3h57rBAQawSHJkJ7atc1RcJUpzHJrTSgXg7kExTafA3sqiD67sJ7yru9Nh8UvRUi3y9dRiWfC5U5ysn32i4ZyCN6",
  "key11": "N2BEiCp2j1qDagSs3Q4jjDBYjBoPhrLJdseSnfbTvSLbVEh2o7x5YrC6TMpNuBvCSiCqG4hA3ympKTMHzLsmsPJ",
  "key12": "57KkoG8zFcoRfE53E8msumqKP7AK5EmmPPrHZgTB3o6NvkyMSvsJPoByZBwBbNfniztbXmmpbrqCCtLN7YJibgiM",
  "key13": "zqrSkfWVVs73RVwChLWdmToabpaV4ysjNeySbUNtviGtp53AaM8Nk3TZ3BFDgf3zrV2i3yEx63an3Eci61ugaBm",
  "key14": "CUii2anE2FHNfX1MHVeSjiqPL5VaYgRPG3nKwLPLiKG1jMyKYjc39BuWryD6PGBZJ7teWZJJ6ZGkBRLQ3dQ9tWB",
  "key15": "3tmZkYPcb55Xcyj9KUUCNaCKvdAggYCDxcKc5m3gPDS35Fqw9c5fBiQULLCBXTkrQTPMhY9qXHqEvaDQ4b4yRMy4",
  "key16": "5Nvx2mFzhKbS6hkfPjXwPToS6ckfdhUFkTvSw8JSHJfEALHT5drzQjoyUtAmJaqPucuBU1U2HZN2W9Qvo1HNqs54",
  "key17": "3hGBA3xrZ7QX1yvBgWtnXENqNSzp35VmcfhLEmA6ofWa49hA4fuhSzHoyzJ6eY1NMVQG2oc7io1FrXs62fth7q21",
  "key18": "mgf9b7z4cS3VktnCx4whQ13mseo3LQFJJ5dPfoiCiPoF5mLK872u1tQHAxJT8mxB7hQSAPiMqUCao82S8updNHM",
  "key19": "4HKS3NFNn4Au2Shh9evdYAsbToup5gjK6EmRA6bWpWi2hQfuA4CRZ1Rmk3DFthN5nmRdHPVwBBFFQNDcjBE4P9M3",
  "key20": "2KAS2gpfhMiP8x4ZkufhYCKr9nVz8ELK5vJvWd4srnTsVgVtm7BAiLcgsS7NH8NdqZmQSmNSdWE2uJeesgzXp2LM",
  "key21": "3qYTP3iZEWeJryNnipTJwHpgcp9cKs6y4t44sTRVG2yxbsF5ZjuazykccxupBUpBjtPpTPNm2WQrLbTp3M5Lkktr",
  "key22": "5io4B5VV2i5ywNaswHomiE33RB8wBe6nseXm5Y6vE94qssfEp5tDfYSG8ZA9JRpiqmGrjwuzP34qnRYYhyDxKEMB",
  "key23": "5sfGy17XmLPudYLYVGm3mXUttcKWYzk7DJvpaCWWHnjSUX4fQsDAajeay2rCY6X946YvfH8gJ82pXGRjhDGibGNX",
  "key24": "39ff5FW6Sh5cT61huf6UuvfRdxTHcQXnfJgp5bjFPmMUn5aEpEVcoDE26GbCADVhta4EWnGAFjw6Mbtdx7ckSSeT",
  "key25": "3csBtWVT9qEenteJofWEzqAzrieKYASQnrmEVqpLKga5ix7Efqo51LtyLkAznp6d1cJyL6vbNGXqFUm74hXE1rGh",
  "key26": "h5jTpif8ZvLzJqwg55MTmiEZVSMDfPuU2TvZteSzshmjKhKJEqkWMsFaEVvmqJk7DBoKthaRdm74vCyh6cRd6TG",
  "key27": "4nnrTDvBUbi7CgruDfhUtkM3e2qJv7eKAbp583FooiSBNoaCzgKhoK6B1UadRGGBQWBxPTNKm4tNBEp8AAe63NLK",
  "key28": "65A1yntnJYGhZ3Q67ze5piN3FCMskb3KRT1ySnT9kXogCKRTVENd51Jfx25mDt2LfJ8fQ74QKPWJGZJwRPAkeGeB",
  "key29": "5vUBJcPD7oAmFuk9T64bNrheLLVFtWY5mCtAdBBXfh2ZH6yUqoQXmtRTSYU4fqi5t6Z8rHE5UKZFmxNepzBN7grN",
  "key30": "5mzF1LNtLEQENgSPwvkSBD73hDkkuELEhV1pWMRb3m79RdYbdv7ykn42k47pxBq8UbAnmoFqRBGsNrU1v1uKo3ov",
  "key31": "2ZYGKybHPXWjzLriU9pZemtBAP5NX8QixRbxtYhLmQgTaxqn6FMfHFPE9cxGV9XeKeFfjjsJRQsThvHimGAfSVbr",
  "key32": "5R3BU9ztw4GapnUDYqkqoY4bwwQg65uf9JLxztKBwt5Gu7gJv7gQ7dHVW9hdAEJ8Uzzh8mhpWB8yCL3tqkD4zx3J",
  "key33": "3pAB1KiqRNHAMk5BRuR5i8wyQ3VPMqtHw75sgHUWXpgea5BgWBMfPtswE9ZtAzqdeF7Q62KeMq1Mh3PNagb82cjV",
  "key34": "GrndgFpcA4rExX8ZHgPwGm5n198Ji8r658rD5miHTf81dCmUinXs7khexLodqsvZQo6bZdy7oAt1xXZREFeZRCd",
  "key35": "3EXf9YSG7uiGSPtmj5F6GtjrDP5UWgDSeb2EZdwUF3g5gs9NY3QwzMcdcNBcMDSqoWJAMQaic4xjp9JHWM5R7xCU",
  "key36": "5WwWQvb9JSLiAgxaU6rQUUN92BdCBukNgVvZEXFCneTFwcDAwbAgzkqYqGDtcvP2LCXttce5K9EJDHCjvRLGkEbL",
  "key37": "TnWV3wdUM2ydjAGNUMfgV6sUs2fuTWYMPLSBEuKisPfa7syhjtHKu45sH7zPNTKp3eKBAsJy9hQcrYCvpPgnm6Y",
  "key38": "4hyXCNgjMmdAqvZPEaPcFGByER7kLLxxstLjeVfffujqJrC6qJTQuYcEx3FDesrKmoBvqgwfHVd9bBjfzpQJPPvv",
  "key39": "u1PMpQe4LBVoSPgKNXdQ5ssABxqcwQw74hknXmhAAscWLbEHnMQFDmPTF4hcy745kG4JH9H7cXwswGVJ8wohPES"
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
