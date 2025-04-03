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
    "NPY5DqHkirmr3Vx3uJzcSSnCSZoES1972ArDtkCeb5BUsMArGJAivN6Wjukr4ESgji5LeJT6NDS9mn5UtwNQaJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NJdcQpJBYC5Kf8r4nyZ3SMC6XN36CKuJSSttneqJEN8o6yNGS522aN82Ye7mZjV4Gzh916jpXYF4b3Z7e2vRrnp",
  "key1": "5zBUSQsqtzYdj5Mh88JjsqLuDHM2Wo9W3eHo2yZfN12WXiL4amWoTroRiygzziX7Wk2spiJacLRDqpQLMxy7jHvY",
  "key2": "5kwkNRSzQj7pEnm2fK7oFXhtb32BFhX9NFkg7LXRDyJcNzN6Wm7T2ML3bg5p6M2p5Je3svTu6cNKCxpEKRx14mge",
  "key3": "wwVH3tKfzgx2P5fxL1hNWSxtiQMSShLCTgdC3GmcuK5KdrnjUKVsG8JaWMAtnAUG1RczyWpcarRWPKHeebAjd3X",
  "key4": "f9u2dZ9qehJKcdRpwSr1pBq1v5KYFRoHAACP8jGsFgn6U4wFqcr47S5fWRZ1UCjPmEfSVDJueftK7roEeUTqBHx",
  "key5": "4GfCbAsbLwQUsuXUHdy2Xp6Cix6nVmp2gHHPWjAAYaipYrhtYExK39ZBFa9RpzeUmq63Au3AtziYWxieQF9SiN97",
  "key6": "3D7QTQtU2tW3PdKnNXjo4jqcJ5jA5aWXsqV28AK5meKBCNgGmRYvJMtCGgZoF1DPmeNznhersx58kBqJ62qFMW5r",
  "key7": "2Pggk1A9FEwZygyURXE46ekrndS2ew1kD1kG54Dg5ezPrbEXGus9mWPfvVZUPbeDKAoLmKeZakzqFj8WBcTBZBNt",
  "key8": "5LfM4BGevnrM1TBSbjiCpEH7dnyZhEG8XCHJfbo392z5ZuU9vCHibbFaaqYaefsKVugUaD9crQYPA7StRXSZpMXx",
  "key9": "21UaGEML77vCXkN8EkVesi11xHyxFPRYoQ9JXWh6QWWFnp6nSeY6V7QNi2gk3V3KZtAQHDnxrrbCSGxifowhJb1X",
  "key10": "7ecxAbSyZ9Tnud6zV91UTs7CcEJCnCRhVfbN76Z5K244g1EEjr8KYuJGwscoaH9WKoWnDvoz5Wx2V59YePXyDFZ",
  "key11": "BBSLquaBtcxw2h2zr4592r9VtHcLvuRuxPTECUqEPxS8H8JvuB8sFe4g1YBovTYMeHKGpGafcF3uPQXET8oyi33",
  "key12": "4sAkHAHN23i2ackF3d9KzuULxyiP87H3v1yHFGxfHhCTHd5ShGtQhFmHL2MoZUra859XK6nzWjAm6yjvU1SiMJG9",
  "key13": "59dioSzkVGy6VNnMPfxKJXewACE9ke4joKV6abtd7VUL9QzW53mJ3DUpLhze1pPrUtiGSR8WP1YCPen5C9xGdmph",
  "key14": "qHt1eQ2kni7WFoTkbD1nm2mzyjotVR2CDLUS22nhbsZY498j22R4sWZKumnagbYjUeyLCsXFrGjhQAqWLPP2EF6",
  "key15": "2cZuNsCPYXUJwymjTjkBvP7t6ETPBb9wAq9vXUraKZvM8Urq3rVwKg7UCYgqm2sWtBhN9YQoRceJUx8iYUJ7fmaW",
  "key16": "2eQzZBFKU8Rra8DUe4Uo5QrxjVDWavBxBXwmwDPmA6kFGT5Xxam1HH9fJoYtfXLmx7tWebAGKZ1gaAMKGk3Dg2QP",
  "key17": "CYXQX973eHJJ3dAdNCoJuxKgPTbhNVTh9ABpYVexaCZ6UG4pqHMNoBYQ5kzKehzNbwdUQ8N9nUSfQrPxtyjpdcK",
  "key18": "uskNiHnD9ouqJ3QLexha9qR6J7vYH3z5Nx7p9hZ6sBvVrB9xgJKyE93wRSBJGWXAvv7BXLHTLzEMudL1jchAfP5",
  "key19": "5n97oLtBRPMBdSXntvEAcGDQiG5w9xkuJBtq9bve21ZNXduJuegtEhu5KKQQhSp1M6FL6tKKqHCPLjZz6MrU4xKb",
  "key20": "4M3z6APykTymJ6V8hXCuicr71N8WGJVyjfZKcyiPexV2LNarCZu8Qjzj2cnjvGDjQ5DsEaJwFcWyjTHvsGtDLzBa",
  "key21": "5yck7WGBybN23tSXr3zXBZXHQwX9Cr3VsiYhixGUAJztCgs1PKko48XPfFobQXq2rn4bBq9wqEqzZoaSS3nT3J3G",
  "key22": "5yfdCE6uVfDxvBwJbkFthuGnt6mw4tFdDSBBomGnav21GXavqRnWcKPaxT7j5Mtc3pA5jggXdKLt7SejUrQwmdhT",
  "key23": "66FJyvvjcwqStxX8Nj3A2ErHMhzs17GmAPKc8R4Si5Pv1jqjZNWuQXMZJFtgKMJKBSF8kogv8vZuq2er19pT2fm1",
  "key24": "3HTP4V2aNyDoRT9vnyxnv3Y9SRcBjf5BHKH7aha8ZNYKu5MZCJGCPpi16VsuDPRQRxSdJQEY98xRirmKbAzNaa32",
  "key25": "2tiGx9MQsmPcJSMuFGQwe9cZ6AKzjf2V3q5T4KvmzpHucpotxSVX8vSvgkjtG8wQP3aEF74UmU9pFihfGj9qWkiX",
  "key26": "2MVL31sZjCpJ2u5F6fHrWesYsuqEFoTcJrEH2oaaghXuS5srUK8Nnj7mcF9ouw2NSjfd3TAsUiAvYysWUKASFb9",
  "key27": "4R9NLRFnvAfWjVA5Yv3vFp9arUdVMvyqqQ7fo2bN3JfhGtbxWhSSkrth2AysRK9ZMiN1E1wQTS7orhaWsUC88rcg",
  "key28": "4ZJ4Kjv5wf2E7TXzLSLZvizQbtZ6YxTbyWAWqW43wpuYzef9J6vnWBHBbX15vsjgjjaT2GqJzesEhMZZR3forxib",
  "key29": "47psbS5jabbykymzGiMX2XYHYZaeyr2q12vKiUM4WKvtMeokrHZ8uqsF2UwnzMDuyHziThV2AhC2RMMi79AL95Ks",
  "key30": "2n78xfNpw8G1Tg7yWYEN6v4NRdyCoQdfAmJ26XE7U3mnad47VaL64whSsHG3ACbDP8pKPZd6dLhkhYzysku5Srbv",
  "key31": "oRm2Hn2QGNeVYAXxHGv2ELvzuwHcU8Jtb3xv15wseaSptdTZfpQvUbtA66fytANFkC66xBXcgCbNcTE9hfC1jQg",
  "key32": "2ekS2DnmV4Q9JU5s6u2iTQu313cxYj5k9atjRBvd8hvwNQvPdzPu2CpdyB9e3K1P5FnCQrhkQ76pQuHxLUyweUPv",
  "key33": "pTNmooCqU2B2n8eZYnwpAnAcFY8Y2Whgn1U8ASdbtjNoT3BDxzrd4foCnGDe6JLDz2VaDhawp8yRonjvggx426E",
  "key34": "36Zqo7yDqDhd4YYvL31irXnmjwUytpkZhJJDkgQa6Mgi5YDZ1L442hzXKLbKJVXMDavWJvDg1thPRpAytMTQCQoC",
  "key35": "5puZmPdspsKE5rKRdSuZvS7eL37E6MKrjvYeiaqmghPoAJSsvQSoUnCe92raeTKYeVMdZMLuA2ymPYUMr9DmUE3y",
  "key36": "4bWuyq1YLE93xKywGKUbaR53YeNUBNcPMQ8BhDcjuzTVS9czttRC4Uc2mDudbwK87oMmqJsv1EginqCTZgicm8qY",
  "key37": "2VMAYFgnfTJJNS4prMAPeVMtWPiJK1KntfNowug45oMfWWeGhfyENx8dL4ukiYRvt8beozrNoUgcuuEtFQzACcfe",
  "key38": "yrWC7As7yU3n1u2r7LCknJgdTd7285eW6FTqLKm3m78mi5bncx56NVFqXLL7QfUJb5LnWtxQyArYYchrYYLWWfB",
  "key39": "3oaxbCqjJwChb641VH28gTj268HL9R4751ZPzQ8WrZJmg3Kia6ExnzPiVw4YDpJ9Zv3d9aMTLFYPYFpAF9MuxciZ"
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
