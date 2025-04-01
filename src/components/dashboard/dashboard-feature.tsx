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
    "4yRT2w4QxbgEK534ZiJeBZdfktRpVqCJMifBSTtDfXEPptBT87A3JjnQ14WEz8KF37xWmeNEgnA7wwnmjayU6upK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "448yJGL6H9ir8EwMSN27dqPQbYkxjMxLHc9bADtZXjWB8V46CHBhd6fJr3d8Sr8HtkgfxtWoyy5cJ6n5E9XFhFnN",
  "key1": "7kv3ERWXSy78ybm89FXeHg8hznmnSjxhaXufzSQF2632cw4T9Hg1Ad9up2Wh3MX12uVXT5QBiKmo6zbVJsNA4b6",
  "key2": "aS4scr9mQuPBitLjVs37brktQg7TMuE2jBF5Sx6Kjvq21nQLbzBq94uWbEDTPLtYPfeQNUDzb4gDnoJLFzkXHX8",
  "key3": "31Em9V5SZ9dbG6FDjKejbuENgDfPkXEKVfjX4zx1k31vi4FK23gJ98rb2jqQrcb12GQRT28rSCoEkj31TKH4ccdd",
  "key4": "53RJqa9hFX2SwWqGPqHVRk44r8XD3KmSvcuLitkN3wmXYtPzFzXpD74ury7xnXNkGhbDbJN9xcTjvTuXmFAUvo59",
  "key5": "jaa1uSzLGYFtpBoFPxFRkT3xvyeEu2h8fHs2Do4WxEUf9pAa86QmVqptLhJMjiMtd1C4yfhGW8wqt4Axe2U6t4Z",
  "key6": "k6YJETHLnmcmJvxzsErWcvipzwNnLqynvfyH6VTfhvYFEfUxWdzfFXsJ9ND9fudXHmDKJXJ5o4qfD7hr3ZdYtKJ",
  "key7": "3GupjRjjQevn3zG94QpHn9wMbi9pt2MTHwFBk3HHNZH9CUfJN9UYm1AgyqCfYoBLpGZg8tz5aSL9oizvPA79BFy6",
  "key8": "ddEq8hVLxadmBsJ7Co4txi197MgDpBH5zDGPpM16cWW9SZcRPbC81agyw37ZBUKd3U4URNksEc8D9KGFErJBJ8D",
  "key9": "2fJDu1TV8yjNWwdt95VpQudPPRecgEQc1bDvrxtHZ74LoqAinoDhZXBR12J6xEyjZZRgefuNqwYirCf9P2QsHSrb",
  "key10": "5RCMSdBu4qVcvFwJqy9e5QdBuv7Kn8iEVtrd2a3xivGveb5FRcfhNMF2cV6oXZUYziYavjst4g3hyzeiUB5mnPEH",
  "key11": "8UhWC1WiMAwuo6PxbFjcGBmJLBV9c35cy8Y98hM6Ejis4cRBRyKNW5JJ3q5KEfXak4izekd1k71ucbAJ9BQL89J",
  "key12": "4gEegB98CudXmfnt4NHhhSbBp6Ymc2Y5Eof9qttWF7btyqmBpijJ24L3SGPfrgCjJcRPoyDPc2xvdCTJYBJjwKSD",
  "key13": "3mHs3aFMbSuXK47SW61UBBLrqWyKUPQhbuxGEHb5SX4NAC6A2UR8mHYKXQ1C45G3ECa9tJGB29RTFGaFknBTqpez",
  "key14": "mhp1fHP4SfKhEpVc3ZvqDGK71WymrVeagnGRY3zMeqNAqVDUFYWFDwWwPgcozA1Vx1Vkrr2ABe2bWtMbHPtjub9",
  "key15": "4eEV8opN59ZXYY115r7Q6qwpgqFaVKaaN8MRanzbBrg34pzyjPW5eJZNdhrb8PJEGDWJZVeQjzedKb33a6WUVhSi",
  "key16": "WqMTRYhjuMCMYp4XvXrSs2hsDpuwYP88BNnG16t3KqYM26Cr4jARiXoaqAexpQzLBBQ7bjxs1zrUWY9ugvkB9HV",
  "key17": "4NUE8efMS4QWJwBZ2LuGh91WNDzQVxMcsYUmFX7XmAMwvdpME2N6ny6RAgd2FgHdzUq8pCWGRjJmQSULw23jgYiR",
  "key18": "24SgSxqa9N5vDf5F235qbATDVKpinSyVrXKu3MdEvW38RgKpVEoXCDtkjZUWi4ZJbG7urdQPHv8BbSPBWXgLyKPb",
  "key19": "5dfAvJynhjsrAiEsi5ENoNzW6dqQDQC9jZizeyZCwRd6qjL8oZnc2mk19BXgZkkT1xSeB9rLHrKU9LK8weHFuEHu",
  "key20": "4KmAMWzG2fThdNnzcaUqBJGGi8mtQYoXrQYWDzN7fS4Adih2JQvE72thu1abZkEDB6ozxq2e23xkgfsDAjLNN2gf",
  "key21": "K6Sg8wy3GDmDSCdN34oSmT6LE5JKnmxwp9VyczSU1fePuRSiHJgD1edaCMgb1f7eqjen2UAs2hHFoMBNaJV8pDh",
  "key22": "33dBLMNjSberQinabMUxcserFh5yvN43sQU9LngNgQ9Js12QfDRjbne2Jg4xmFP8ciWvmrjs1tLmrqcNCx6zZ6Fw",
  "key23": "4DfxRpsrjNAztSVM67QfakFPNipAzUPf9qb58gdh8tVdDshFnLzmHcjB5Y45BpCthnr1EjkMsMm76sr4SVNEbmHN",
  "key24": "4UGAREcRLPWzrx2rDqPjE1xkN1QDgMPAniK4cVYmafNvmp7T2k6JJu538xMpdEWpTcp43LVbYbXwzCTRDuHAxT6w",
  "key25": "49vuMVGKHuJhJo7FcQzBHXE9EdFcLn1wTAmQxSP1kRiy8MzZA9nGJ7rmyEQQ9wM7o3NcSMSbBuXGPLvAYwKbTgVh",
  "key26": "JviviNXBepYnWBLqQUBa7ntGGxv4EeB7tMg5vb3PFABxuyv9tYViUb87afEPUdbSsnHHM4xsoX5qENiyxja35yH",
  "key27": "2f6LYRRQDUe8VBS8u2YHwZotjzAXbmc8iwFzVkCR1RHtHjipued4f3hzBwSGYfQ5JpdnAQ1dfAGZvDjJBxFMRBP1",
  "key28": "37X7DJ4UgCjdjHgMK3DdFhbc3aBREH5etkCCiaShsvyPogLPtrpQKbJxCFszKWkiTPmP41uE1FwGWu8jqfDkzbzU",
  "key29": "3SpdHqsDnhF4n8AvbynKhneCXeWwyj6dxDnx2mGYuZDQhZvLbnRWZHZTdYyH5YffJydqyTaKxpAZvypWypoBmMoV",
  "key30": "2p4CxpPowC7Yx6kpG5Fpe74P3NrviLnkxdDgN5KCxZxVEXGYaMq35JcUnTJCRsXc1zp1YaEjDGFxwfBko66P9iKc",
  "key31": "2s53kj26C5Nsc5x51CPQStDR7TLcgfY8ZMMkcbtjYWY2CbXtP3bbYjTbPnELCpoeW4aCw1R9skDGKPXbpB9nyef5",
  "key32": "4bj3gHJ6jdaL2cmaNggXpN8Hxp51WSswbCsCeaExUGGgbHvyZ68TiAdQ5nGMdon6SDnR5CJwjdWT9qxmjjwwvFxv",
  "key33": "2QqTumV4cTp7tNYkzGBnxwsBHkcDjkToqXJgCawHAUWxXoEoBb2Mu4djzmhZhjFdhGWKyu7w27psTv6Z8ZZxdymR",
  "key34": "45Q9DCXT9G3DjBLb79QU2ACXfjhhfxLN9y1BMnE6SDQo2SkuQjwtEaPoTG3VLvMBFMqjpvhTxA3ovQu84LMvDnM9"
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
