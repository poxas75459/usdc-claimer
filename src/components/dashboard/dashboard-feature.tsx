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
    "2jo2PjFZHRf8AzaMi9BmowqaKGsSfGdjySdXQWbiAjSaDn19FWJRj52ZE6MhxU9Gga4anLDA4r6j3fPCbPZbzShc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m7LLKesRYGM9C9eK19328aZ4MLjwt3BaU7MgMVQ4viXwmLerHBZ6Y56vN6xrWNxYuvRkC3msYRAU9sSHe8646ZT",
  "key1": "2P1ErCgPQ2JZB9PRsnsZoYjSD4oWFoXfSEHBkzWcxvW4xTCDiVGcmRTFhYzFJ7VWeKoSkLLHdYPdZA6zpxCdU99N",
  "key2": "5NWYJNmYdEGcbUKK22trvhQ1mkyS7n7jMBewEtS5GkHT1kJymZei4cHtRxuLbCb23gG2qo4nbQdJdeUP3sASHWRn",
  "key3": "4xkX7dX7xf97vwVeKpWyhvPfQy3QbEZGAftoJ8NaDwVrHa2zgds1tqZpWCRJAev1MMD2AQPGXfkSNgsBKXipiiUe",
  "key4": "3TRhXSzJxcUjXHd4zqM1qQbrLqjm4xRfecv9eE7pbMah4TxFHwjZak1sdPfxZHQBd8DnWoZ4DcPvG36YrWHUCRdD",
  "key5": "2MybCTrTLmQq7LapZ1vrvontG4q6qAGvUzhzVNyb2tMs6JpibBBS1szNarb43JrPz2gApFHy475vQsggUqa42xf8",
  "key6": "344khTgb6wbRinSds6H24x7Ns2ndxM527X5HxiCpPuusXubq1pMS7iLjURV32JVmhv1jFg9RxS2MnZ5qKxaxWox6",
  "key7": "5ze8tHviBjprp175oWRNDz14vpWa7hgTADAkpASxNp1wLUK1sMdpLN2B7A6r5816c9xYKv98Dy3SRZkLJTzkUPv",
  "key8": "5E3Jgbem6EvhaFpsHzZEyMrEw3rq8PGaGHAtJEdvMpShV7kWyfo3WupyzSa3efaGkGgJaLsVWScK3UepR2TppsiT",
  "key9": "2rWf5wwLd54Vh5rbiELP7Ged5kU1zhS5pJjQ7NVGU8SbUjXQout1RN1jyPVJ14a2dDxNR7jjmA76YB9sNMLG3dya",
  "key10": "5PSH4cWfXwu4Q5aUTe5Dpmz2KTbo5X4ZeGDi8SuKzFUuUEvYE9dsBccLdUEvpUiy7ZDJuUM67p6KpfFHVU9qbggE",
  "key11": "52fk3RL1wiJjyFyioQih7adRR8KQ9yQtgbx1DeAGNtJCJE7RR1ePMcjzPa1J2B8FgtVskVk9vx4Mh6mEZXUAhSPx",
  "key12": "3oYqr4YkG6SDjJFfY7xhZsY4aiLc4pPhRoCF5LLYZU11LU7BVH4zyvXiWDPfjK8SVmPzRoQyMydVrWzBn9BYZwGT",
  "key13": "5CJzoFeZaJy4nhwK67VT6UkGyC8B63eGXpXpDyAcZqELHpFzYAfPJS6KxjZPtHUjZJ4Y8LQqLJ68KdbMxRPcNmt7",
  "key14": "5mKZKUDnfnk5nf6oFLksH1G6J8SW6kd1eM1nnR5rktwtHFm5ntL6rEHhmyWJs76ptbVQ8Bh5cRfbV71CVmgG3Tqh",
  "key15": "4WbQyCqcWRf99rp8KPSMePFfBm9sH9Z4pduvwEFE44Ld9sFKqMAfJ2qbLF3P8mxKBiT2xyTT27tVgYP7YUS97Lg",
  "key16": "3VX8bEt27uDH4eti1LHS1yafd2oU4nGaK78SoHaJWctjozYRBs5mWBpKgzsrBRdVkPd9HC3HWEAvnCHamrPvzegH",
  "key17": "27tMLh6xEWM7x31ERfS5cuYC33xgEWzJU4F7ERNn7zkhA733sQKr8BztjZWAEXZhv62wRcSprxQRNXaHGp1eCxUi",
  "key18": "4cUm1S1fw5GEijf6oVTV8vhcuFMGByKJrhrkEvKpE3zVeuZU64U1iwsVbG2btrx8X6jSxbZjw4QyG6WzSGmujDt6",
  "key19": "31SixzQwAG27qhDmiMXLwxGnDYNszFof4pSLQnLS3T3tqLuEZBtCU3968cactVHkEovMd2M9efryys6NeWtAM9gv",
  "key20": "3J2DgEeKqfv6URaLVU6yZNSLW84a5hUTnLwWpaciaYA9NBXLz242xrdoTSzN18h4GEi5vAxotz6Jps37t28FcWTy",
  "key21": "4SfVnmnMdHv5zWqGXMkrih7HqGBsJwv8BwpNngk5BdnkkFC33pQ2gCMrboJ8fW99KaxxaxzVqf8sD9hpP8inj9ch",
  "key22": "2zAP2FsfNAxFkuiPx71iDeuxR1qgfFh4fVpaMk7iNAktco63ZeVoHk9GEHALg7NakMNCPmn5HCiDy6EY9VYvmMX5",
  "key23": "2V5Zz7hfdNRXN4dCv2VR4DYkRV1xKSc1axN3EqWiUTRF4n8bdBXmRcKG4pq5xRsTNTE6GyXFAUt2snQgDVgbPCVW",
  "key24": "2ZD9EMdDYjfgAydEsRGWkHmFdvsSRprHpQDYd2d2faGES2aZpGvNy26HvV84TDBhEumsERD97fNvVjCZ7cnSzzhH",
  "key25": "TFNhuih57L3fW8gYP9hmhnQe3qb59k4rjKvzk3LjnVZeCvjMLUpK6thctegSRPFupzbBYYHixwLc8Z7xxz9X5pE",
  "key26": "3USWMnLswEDV7rvfrDA1T5wbb5YqCVzJZSDGim8sKwgy4LtHVVnxWzu6wwraogrzM1zkWBHs7rAVp5yhVYWUzYXW",
  "key27": "5oR8Q5AXQKWFz5aHskwd5nqcFq2iM8LFHgwP8fpxGLQ5J6UQFhZMjmAqSy83qrKomdRUuBBtS8oDXkQ7RpzMy8sW",
  "key28": "5cNkf5QKF23zoiV1ggoVrWFh8PizUHEqzerXENiBaV5dseXpJ3aFEWRRyUpcuw1f9gwebPXxJtR3J1Aa5QRKQSBt",
  "key29": "2EmiZuTuAASCfCyUNihNRmJ8G9xZbfgxXjQCqqqnrzo3gjwekzyDPuSo2xxKhB4BZXkY5MTcFjrgcuzoADU8FCHx",
  "key30": "5tvwcVWt3Fz3rZwi9oTdtgFaEuiMxTYkdLK8m7xCEotEwbGWUWPVsmmXpZZCixPRUnQFvW1H2TFnEo4DsXkSdBFm",
  "key31": "4VRsMgyzhkz3Ag9vPTv4zFEMD8fKDSgpVSR1z3XPeb8Jn5HNrjLXgiFXD3vpj6UudkcrYF9d5KtnAcX5YBWbV2cq",
  "key32": "47KH2Z8rNcL8wwPcxGj7a3ZfpaeDhkJpHTYRwofKMFKomz4TgDgeuoitUUk4gGTNuJXLRjHj7CSzWC8EBTjiHqmw",
  "key33": "4KEQbkxXeFq4pStCj2UxQghN5J35bfTFNcVNqb4zK2bFakgc6ugdu2tpYHB2opMHYDuGRdjeVFsw4owhGaeVCpk9",
  "key34": "YDv2tQwtG1gP6QSijK2aVjwhdSLJWNj1kKqX2QVGES48EThrmLYPscKpGypZU4xoZn9MuYTcECeDufzABH3hCyJ"
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
