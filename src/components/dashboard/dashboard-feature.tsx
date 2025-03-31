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
    "gMtRkZ5379qW3pfQnhjWy42hbXM23rAXnvduBa8ifjYQ2yJHEgkUym4FmSN6EEmxBZn8BEeqVfF3wZ9oXrnZR3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGFe6SD3hjpFH1uGMHFZrAsZsHvgjww1BEfydmuNNemgiPV76Ed9ehUrunxcGaBq7Gq9CTnUac6MWHKMTKFyCRQ",
  "key1": "5boUSqSRDD8kZSqopXABACtRiaptood5JbDwe3zNQ5wvKSVnZ6gwmx21hEv1hhd78NUCh8RT4ndLxzM8pmLLtmEW",
  "key2": "2s5ujw2PAi59CuPq4U3BxrYKjUUxDG1T6GrsjjsL3qe26UvjH55X4omxRSFUDRqZDNgUt8ihnDnSranGsZ2A7WQn",
  "key3": "2VHrFzPEyShsUCTzpMgnyy1CRWUgdRJwArtkmvH7xXFywHCgVvJuk8RXAVyQtLHcNCmhXXZKMG9XceCG74bzpfZt",
  "key4": "3waN9mTei3TXdE2qjLqi39sr4a9WGccBwzAy5G5ryJNCGVxo6ikHaKpybAx9u49fVpqMQ6mjmJGTR8yRah5GWQHr",
  "key5": "YPubHRZ75XJ15XbY1YbyyzvFmPoCugMwv3ZbCNW3Z2nwqwbadfGmqEG8Zui8seREbML3uD4dRqtzHFZS2CzVhHs",
  "key6": "3cznBrScHD3gY9zfWwbSXgeUaV132EKZbwmpgzJ71BFRz8JyzK2ekaZULHHwDDRr8p7RBDWRBR1xG9TF4ukTdQ3G",
  "key7": "2XAxuf4QWu39YnF14g1LypaF5qgLWfuT5EvgrVrBVAcWffNnB4KSa2kUJzyARfsyY83QhysJWkgeTZehorVXa9dC",
  "key8": "5MQ2hUHwUq6jj4JBti97aCfrD7Wa7nFR35yFZFR7zwv7FeVMEoj1XrBZjMmr8Tx1LaWrLW7yhZPr8QgLQRMe1Tx5",
  "key9": "3kCYSY413BFuEPg3qj4VR4XsyPKcgcLe7tnPm4ziXj3oV35h1mBbPAZVugwCWaU19m14tzD118BtnVKNYhHxMTGe",
  "key10": "3ZoJ93TtSZZog3285ZXNKeVczJ3kpp9dojG8qL4pRLMLP5vCPJWZoNbaTGCS95keZQbdh2rAtvPPGZt3YGNPR1N5",
  "key11": "5qdzLKdsV7pNaPMsLCVDvj8ramqw3A3cSj9ctHdvQyBgUMDtSqj9hwpCikgPbsSRjL2u9rww4WKkqNQz3yTDhAbo",
  "key12": "51CqNcmb8cmY1Psp6YvTQZd4ZV8BjY3Ws2wWZgqSRXNBAFcVbWivHMUu3VfBBSkjLQFhiv2St17siE5SBm1Y6PEm",
  "key13": "xswSVc1K6sSFx8x8dMgELfHwXcuq8KU5aZAjQtyiYxPg86sXiyNrZBnJjFbKFPUsso9P73yiB7yD3cRTKo4o6pA",
  "key14": "2yLuUSJEReiDdNcEDxpw3PZYZWMnqdZ1x58rc96tdz3YYDBd6memQ6ntsGqUR1jiGJGxPJA8dmS5aQJUBz4ifo2W",
  "key15": "4Ghfzvx5Uv8PvcBhJXKNHuoMsM2DPKsakXHmmnigxiZYagu9zutGkVLYm7gZJHCd1m4ZjyVwhvEMQGA1aXetMK8k",
  "key16": "3FTHt8hj9WhL4AdrJLoaGGUT8dTqeedEX9h7HJA1uQPHbvuA2vrf7885hp7r3qp5KgVDfxqZMcuLSKCvBMa74u3e",
  "key17": "26uuGvAmeqHaV6B4GHitRu4GPZmm4c1Jogh4ibkcuCN2wa7oJmvsSjFXHWY2sj2xx73hsk3jfKUjFTmW2HK4FE7x",
  "key18": "587ryhY7jRnBCTRskQa5njkRKdzKDwh9yyb4s2iZegd5i639272wioCtpfF8BM5C1udbnU9esdxyWdqZJD6J1ByQ",
  "key19": "3v34Tt4i9qJavcf3BZ5RBXANdxSjTk12WFGQvSkgzG9CynTg3J9LEHvTu1uDTYsnC4pMDN3e8dA4Cc3HhZoLXUp1",
  "key20": "5FrQz9e2i4FpJ1cMLKByjuASW98U9pCbijt2njd4UXtzwBoyNUCgxLKhDPWUEJ6ig9nbxR89LAeXGPVvEoHvrBVZ",
  "key21": "4G3jBG5BJdLcz3f86RJA9Zmt6yAeqyQQLzPU1qUVf3SwKdJ9Sfdk5epktxSVhnmHhX4hZ6ysVwYNsAizYhpaCrbU",
  "key22": "3WYkDVd1DSm7WQ4qHxg37ksiQmwfeiTqWti1pEy1AAbKRqCbwHTsmKVPmCbMEvkTxG2ybviPQacCAFqHu5D4BxSV",
  "key23": "h18PCzxMiADEVKLmqcxrfX8iSgnAgdbPavM4Tmt5VFzqhuPLqSuPHBD8ByrohgwABf8ftFiHtQy5ZgegqUbjHYt",
  "key24": "5hag5b8B9SXuBnSptrqCoYTUdCPkxE929nEjrb8FG1jE8TQ4Wcy7MRRfFXdTwSHguTTUx3tHTd113dS1LFwGHFXD",
  "key25": "3RovrhSqHcdeZfahbaknW6nKvSciEMWEBT2bKgy7rGEFFUKpBFgPTQRJjri7PGHkW8vMB7mk3jedWeEdXNrhDRuE",
  "key26": "4wW7Uujt9V2GD1tLk9w6EZD1yMAmKpvMfrnjjj7ZQxDQZN7ja4BcVPanDu5MvWAkP86RtsKM8haH1oMEHK5zdZ3Q",
  "key27": "pB6ND8tt1AoTsuGF4kgekwfBeFj2C9QjZnhHW7dyKCs82p6LN65X8jAp97U3fpVb1pyvMFyk4zWbsxkdzCuug9i",
  "key28": "3bNFvai6ocr9YnZ8mpGziC3xK4KhnWK9K7opMLnNy2Pagq8Nrqf1J33EV82WEJ1ALupZz2ZPWyJnuUMrKSYpwxkN",
  "key29": "645NXbCU3DnzzvYRGw3zyQgeQwXgE82QwfZtAqsCmYgYjdvKPSAc9A36eKsMjfpruBABTNjpxirEyY6oBKi1Seu7",
  "key30": "47cJbgobsRc2zizx4zFUQ3wkCp9GfbzJkHRnVr7KSroCcDCxUweYH68gX4CEKrvzVZQdWuhm5JtibgS629Px9see",
  "key31": "4Dp4KoLTdYuqwz3NQX9t98cc6dm1rWgBxhJj9fTgxW4gUVkvUC4Bxh2ExazHnB8EQMgueZSoVVKFUansrAmRFBh3",
  "key32": "3Xtc7mH5oAhC3sM2EvBmZryCwSjVUfg3cNEQb5Gf2sUtGzMcDYbxmu7s5jYLKNKBoghfUS7iCVyfWbskz7NnyZ9i",
  "key33": "2SmdvEcVXK59RDrEobE3KNWfB1rd1466fDP2trbj245cHjq6gTvPd9Msi5PSzbr8kKH1G3f75DyAdTCL1a6gNLMH",
  "key34": "44XcdcypBrMvxSU1U6gPopZai7X93ha589vWASsshE5hUzo5M61XkEiFNFkf9zUwDVovmxcZp4hCb5iUNwpiNNuV",
  "key35": "37mLJA9FBGmEu4tUNqbLoKiQ64EJ5dcKzqce3jkACMDa1dRxYF9QvCUKfHDGCcmS564fgUeKvd2GYsFe5bNrJB4M",
  "key36": "3QDCd23ajkyiM5LA5XE6RKuY14ANHhzzAyCZHh6jhym3M25nFjmSzkJ316aWq7kbwnRGJvF1x5xeZTFHaPLpgg4B",
  "key37": "3L1vYoEPU71akwR2qLx2de6b4wZgjzhp2fHnWnTPspuSumAU38v57NN6PHCmYyhmw3p5kCm6AMrUNWQ1oYTg5YYr",
  "key38": "5FfCbqjkhZynqN8Th9eXw1CCBJgR97MW9ztx8153fEQJD61BUAN7ooo8yysteKffNVHYFDyTYAvPyKELqyXMyn3C",
  "key39": "4njuuKT2ae4CVrt8edLcYasDt12phYdDBJLcLkgQzgUeJ7NNkmAdqbcPQgqw45fGiqVZiYZ5QGmAug3gBM1t7Dc3",
  "key40": "22buKgG79YcbjYWEfSZMe2LejyiQ4h4jhRZcThwv2PDqKigQjZ6ex14KkY1NpDieFFLvZpeQZuAMjeyunUvzShN9",
  "key41": "5jAG6nvfNHzjqRSA6HrjfPTKjqgxjczJFmDMYdGwtyPboSBKHaThVLUaqWL6pRbAEm5MuNytDXa55XGWihkSPvdr",
  "key42": "2AX9uBmxz6B5Xq6Rwj81wiSumwvY79ES8uzvJi57pUW5TVe5w1fafZuZ3tgSptpf6aYQLZjKCrqiaQKeJnELnGRA",
  "key43": "2yR1mfxbtQVSjNwZFAbtkA5vJiEUfH9DGLAgWfAsWonspJc5d67qtTbMFft6bDXpurbGQWbW3XPWRVqVsYD67gWH",
  "key44": "496jGTndptymWgK2CafaWTrrJqVptN2hXUE5rz7JDXfC4w3HxuWbTFSFTkUux1Z7j5NiHiK2xHb3BYgCKBzvQUPB",
  "key45": "2uc9B8Gsdi1bcWWUBep95KqgwSZJ45uaEVVtrC9C2fdgyZs1pbeRNpHyrasPPpHVMvFiDuoHMYXU3EegaSEseRDB",
  "key46": "4XSm3zYStGupeXXYnBzDntp7Ff2C2fCVELRNSFZ9R1e7gXPJPpMkeGDf9N4mJXpG5xNUHHYXrZ6PJzhEFaF432k",
  "key47": "3dF6HantScMvbec8FgqE3TCjeg3c1gmrNKeVqvFERjPHWXHzvmX2g797yfniqdvXQ4QnE9i2pj8X7U2VhF1c1gq9",
  "key48": "2WzYDQbn2zvfVzDZfbC4AX6GUJR7LY1SuZpbiGxjHLVQ4toBxgVEPbfBtohSvNbBBsWbGViZ3WG82SHd3Ea9MxCB"
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
