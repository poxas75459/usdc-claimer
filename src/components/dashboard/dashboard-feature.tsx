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
    "oBRhjHEyCQnjvjchQ4h7hVoZXhm7yPQKRR6M8L9YQAxQssbqnwTHSsBp64FhXbSEWyQLLFfywEBR2qTHSnNiMTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3811J4HF8VMQL9tYtP7Jgof7sfQDQ8bKC2hm9bcAwAoFxvsbNfmvVJiNErMLsNrmRNcL7giKJJNFVBZqdwAiR7iw",
  "key1": "5vqvfcbrzP2MGzMwAwbe85DPGqyoKjV4orD5A5S9XFAJ1h1bejqct2R3U6hCaFUrq6dY1XP9mv1uSYLPRugWBzaU",
  "key2": "5qbithWWN6aszBfBhAvLQw4EmavFWCYpP8AR8axif63fVuw5FysESNPtyaPemKMtgCcDdTt6wJv1HuAdYgibY5ig",
  "key3": "2pGtzEnDcnQFj6jYS97zVXKm5NkPxtv1z1QZ82w7dq8XX5qoyzYFZE4Bo66iXjuB31eb8B9aNg5y3g3j7Yus8fWX",
  "key4": "4Z3jPUcQbZsYeDFGv4Cv9q37gjd5aQF7CVTYcaGkKLLHPVs19yvEp44znAVKKpSdhfJg8XUxzkkdCeC6Wh6Nb3Vo",
  "key5": "5xiQ9pBXRtbqDACFHMyTF87EEcVT3ycQTuaHcU4c7sVP1Svacgn8JxGkwSVo8fRQMrsq7pYUyxTjfHCFswLgSe7h",
  "key6": "47cs1YqjUQMwza5d3QQmFm4QHZTh6zhFc9SFjbLG11CcS5Lh9wyR4dhmo2hG1JTREgX3SJwdbhFx2f4B63qQgM84",
  "key7": "5quguQypWWYBGVEiV7ioeL7tt21tsx4QVftUCnFvEwZwjHLRB2U22AyBkvCNjQqo3nxVfAEzRU7BtJTyqnqBJ43L",
  "key8": "3yrgotnfekCxgv2YCxa5BPajJVHeZryqNMhSRjXRQYuWmybd9wLKrC5jDesN5z34Jx6uxKHDvEMDRLhoZvyVpNxn",
  "key9": "5rd8595tWDRP7SZXg22pc396JsqFVtwckSUhVGyKdkoTCTw3ZyTdsnfaXJPeaEva1xaVpXgL3Nu6quBNyGg18NJ9",
  "key10": "wSBJC5LejT74ifhxwp8gtHw37B1WQVQtJyzczLKRq8kb8UENJ37fYsBCgJEfvkE3K59WRNbEkvg7euHhV3QELwL",
  "key11": "2zMD1g3See6M59LCx2yJLAbS5dbHuLskE2W6k6DM8VX4caq1L8AQ9ivpr7syfXZ31wDbRFXpYAB5VfTs98BdyiT",
  "key12": "44NRXvVvK9r7UXNbZJYcz2moTgN6KGPUNJaZWLn895FZcNVEWKCX8Ys81PDW9frqHSYXniYmf49HovULqzqqU2Rk",
  "key13": "2GpwJamhYkqWAHzoDTxW1cBMawaySs21JpPmMZAnxQaiDeLu97RTUbZLN5iHk9ArDzBu9gPR8RtMAP54ttBdumCF",
  "key14": "5mN9W1i4z9M4YG53QwgEsdRm1tM5gn9JexR4ffZwCTpZ4iiSY13qVA7m3d3qTvYKyburfcax7FcEzZEb4xw6MrHw",
  "key15": "2Lh3T2yCm8tcvR91xsaoHPP1LnBmKKFwkHVHUxYJtq5mpbqyAP3TSqzBMfneHK8ZWKTqC9bwRopUZBXcdY1cdZP2",
  "key16": "42GC4xRB6cE9UmWcvbgT3MkZmM7kt9bb81evfKwaLRJf47MZRJaVB3qdqyGhmqEVVdcPwfCAsvMuGMzrhV7hSCQw",
  "key17": "QnAeRxqaCVhrmUpN8ZYMYR8YvA63u16CLmRpdCJj8yd4Ww2HQHooZchAoiKEZEjMM1NcBFL1jf3zfmyZe7pyMyy",
  "key18": "5DpuJk1dba7GjD1mZ89kWZuYnc6kc5ARtr8xsjwiWNZqwkdo9ZrMpU5yVy86LXDoAMsNkcuzzb7kVXNESoGcgP8Z",
  "key19": "5fgf8WdRk2Fa6of9f4yQP1QnsW4uQJQ7W8tzBY6QXvHATdaudyt1Hpy1qjtYS2YwM2wkNXdrrs1qxpHwYAReKWdQ",
  "key20": "ERismKkCUwfxLQZsz3XeZBBbgvFtdNm9aVgozmcbTsR5wxq1TUy75ha27fiPeaJkUrxFdQVgxsTgC3RqS748oE2",
  "key21": "5r3mPVf9kfpPqewMsasSK4pfcFyXDPmVRTkzKH3RyaJz7rMMxWeN7ZRkpyysVWrpfQKq7HrFwBcq4joWRxfNpb8a",
  "key22": "2CEKLJRaBcK7ge6vBByXAPhRMoyeCa5RHxRwJyLb46LFVbxQwNVWgHWDxA4fq2a2FAwsgLEqB12Mj5Q4wKVZVFMR",
  "key23": "2wYjBdiXXn4X72kxBLar4cBQFLsj6PcBQiyqAipebZ4fLv5iLqWnSdKF9ScZrr1DtSFG28sRW81Hw4F3qaaHLKMj",
  "key24": "HKmKmGLt5BF5TASwpyExECcAfJdSPrDMTNJsUrghBi9cUDvyc6NH95E5s3G4ZqL36BWtMw8gMyzxwtmc3UF6oAr",
  "key25": "3fpBGeoEe8is4QztrsYu2KPVDKkvcPng9PSNTZ9WtE4AKM1ad2uCDfkY8xHhPJYvhXrLf4kHr1Sa3J74SWQukQuR",
  "key26": "3HHRnhjDQHqN1E2tpSBBKbj4xafuo2V5oyCuXjEw2E2woAvMJEPEkhNbZ4tckoFXTk325DWNZJokH8m3Wiprcbt6",
  "key27": "4efuz1BGNEfhwsFoRg3eCg8HXJEMwBmkHZaHzsmuiv6PGpYANtghFtd1WtB74FD93hpQvUotzPjvPhmWvrJUY26d",
  "key28": "5yHTSn7vUYUEKVv9vyryUgxN4JbxrfyFiC7k7MTN6iTYEsRY2x5kUDxmAvk72rrkvpL3u8bEKpqCKUcrH4fVrPAN",
  "key29": "5EswQPzkHwdBbmWLpaDar5SPbTXpJheGc2RmzwF7REKmiAfCQnvgJuwduksFcPGDPCdFtDxMBEHuaANfaC1ZqewG",
  "key30": "2yb5e78cn3ZThQciccuLQornG8MQKy3iQaLfJvKeLVBX1iTyQrhPs69rXehRqpwcDTwie5UEYfxhn1TDd3NNW7Nr",
  "key31": "5TivCDY1cia68bdcgUHup4VxhPoshg4yzS4gJ66GrQu6sr9m5gBFt2x9CAhYj6wAGNMCbcZWujdQhSzvUPufHYwK",
  "key32": "2cB2SgBfrVYZbbg4X1pLdqxBiCBesEwLNf33cnjpdW7H7f55DBC6my9uATSVzQHUbxZWbz37Likt7QRbNNFjsKc2",
  "key33": "3d1UrNnQkFgp9XpfiwMiwMLBt4MiD7utCZttkbVZNWCcvhhJB2pewfgaCY1YXCGv3847qP9fcktJt5sMWVXv5N5J",
  "key34": "2bNsFD1CfEvFT9SjJyJoDFhQKrVkgN9cTzUgotGJ5HVttNU2pyEhSwnMCFzJkDMQkPgk9VPyLzhgazc4fkY9zFM",
  "key35": "3en4KBdbuKBxrMTtbxuoPpsPV1H2mnnD9Gakhfp1QarGtuzwd6a4j5JTqHpHX7V4WDNAjr31esZ5wJPYDFQxTRD8",
  "key36": "7HfTiUQRzkYzyfg4E4fMoGJKrvqueuMgfgK3W75MsBTe8fmou3HftbyywQMViNGwXvi46CGpcAm9EWEP89C6gbm",
  "key37": "2SF18GtE2LTUS7u6urR5gcheYNpSKm4Gu2pdUWdhFdxQBpNUXyJJt1AVV3KNCJNkbAmD7eQx2qw4s93PnxBdizPx"
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
