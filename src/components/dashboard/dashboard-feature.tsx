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
    "61sQ3p8vzDYsphGtJoXVY1g5hhb8XcByarXR1puxEbFXEJW336q5Fq4sKoM7HW9TxZEDRL5QheRPRQAq5cJNtL1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44kGwCvUarZBu4aF8gv7vDqwnbZgLs3uTqVSKNwFtAEomtZFmeTBPKT1JKeNFdYanf7WcrUyiMXTe6ZeUVG29zoL",
  "key1": "4HunNzwpHUccPWXpczUWzndpMoWZHxoLESuxjqocbpcGmBmXNaCc5UcUr9ubxuHpgxYc9nz7PXQze7cJiLpNxLkE",
  "key2": "52ehSmbVQ1rTREnXZhaBxNqTC171VeuptD5ZnFijjq1w9EuFNmGoAyKDcp2BVK7NCK67PWzWC45hLT7HmzPKFzcS",
  "key3": "kJL8SomqnVHXwZaVeqnftqJryFG4xySco64mhiseNDVWEWkGmKiPYeFsbbZssj7NNoKDYQr4CE1pGN2SqsJNULh",
  "key4": "392xJndBbgoW9Zien6RKoXAxa6rtDANHCaxwX7LAth5FsruwnPoPjhTMCm9ChQDDHXEUf3UqnDTsjbYP9gevSMcx",
  "key5": "5RH6uYBDUnH1JNGvHv3f3DWGJZ1DJqyiTnfTzLxLD3R6KvvMPTdyAhd7uAtEFsCAYeRVLGTW7PgKKq687D6WnCJN",
  "key6": "3Fqzrk7SsvrMSAB7c1jon3L9L4n1ePv53wm2dwUf2JpEBWqLEzmvEL7ZH9vQEwLDZE658asyfYNZUsQFH2qFyty7",
  "key7": "9iDDapuNXnXQ1xBXL6jF87iYbd4hQ3L75KoqaRy5wrk3Nm7rdpkYFy3C7jubhyMFJQNe2Gi36XVYt4Js1VVgvEt",
  "key8": "4uQsnaCKLPS7n9kUUEJSdvs4VPiMYmYR43m6sbykTYrQ3HAbFyX51hzngLAyFdYmQyoJ7dU6PvviJ2oRYwefT8Wo",
  "key9": "5haeUpQDMK4Xqy28BvHjeTWBFuYtvJuUKeYWGUUKwPmqvNH7Unk2VPpwBchcF6ciRmTvZQt5YdXSpLHxC3iPhzfr",
  "key10": "D6dTynnCwYt3Lph99wmrUB1CgZ9yE7hjBSBuvR6rNnSuLbq2LzfzgUBo8c3DKM86cKhABdUzLJZ2bbHNfRTDMvy",
  "key11": "3wauHw985hTmXx4xsSUT9HXZWE23t2pTsjPf8usgGKcke7qLT3ygdEGy9bZZw2647qVLoTBBGdUw4LcAWKQNzwfz",
  "key12": "42ZVTwdzzWNkyJqmCxLDrUZnmAXxRUBTgyDeXmwjXJFQmRgsDxPM21LR3LaJ5QMonfXPiEHEu4s2skTj7JczXH33",
  "key13": "2eVUDvrDuzAeve8CoWyGucakh9TLYvWAqkmoKmbidvR2Mho3WwyYo3GSVEPjrqe3y2PfWLCWYSvtsqxPwp5SLouj",
  "key14": "2fbjsq87QvLjz8tMVu2KqHMjZfZM7gFszNR3G6j2RnfGU9yzYfxx5REyZf6nK6A5unNGw4eC9b1WLN5UcAiVULwP",
  "key15": "5S7CPSYJ4cGQfbSy4HxgBXMjE179JG9vU85ukxvxQXS7HPqK6Y5vATAd8tXtFzzqRshqBBDbhzp3jYKortgicrCG",
  "key16": "3SfTohRUXmRpYorg3QQFZV6vJpZf2Hd2UpvaQCyaH2xqsZSo8XfCVj26mfmDf3ffCN7Bm2NBYbqd3ssnedeZxspA",
  "key17": "5nWcMAbzKvsb87tVueSRnzvnAYsUu9QqsMvpSyn3KiytRuzw91SEQfMTMxZzBNLPYyjcNbPqi37fLwY3gp8MykuW",
  "key18": "5i17dyoJTtQKbDKd5yrBLEDMAxJjS7t1WrcaBbLeAPSkRd8Ferd4dWkohvzib8mGbtC858gRTzNKDUCMjEtEQ2g8",
  "key19": "EicZgkA3zW12bmwEVCRp7gqkjGGRBi2k9VbqQGgq2mLjHajishjfRmtajWZX6TeDRTF33EBhaS5TrCUmJRJhGAG",
  "key20": "4Lgj13B56AqaUxS49hMkP5rpTVaphLEDhsoQ877PBZcpgterUxBNFZ2Z51S7Qgx2oQtp2RC6jXSZ15rR11NFbK3P",
  "key21": "5C9DX7vyc8cfTBxkA7a5nUceUzdLse5aCm7q6dyXA5E7d6djUWKXWvpNN5iJcsG991aMJxUyyinn52T8uMa6u6zB",
  "key22": "5LiAyhhQ8eHc7Bz8ZRSYDXtXrbWRE9BuU97FhAVdSwAxV8cy7tLhJWowtNiWG1dDXM7pjoYj66X9cW1R2wd355Bq",
  "key23": "4XpEkm2xwt8BX5EnpNhSa394dpf3DHe5wspek9HPBZA6KKvokUgNb4LCi7S3YW384LHCs1pW2eWqQaQCHj41kqLR",
  "key24": "2Gq5Nnhsmpgm7aqshRFxFcdECAgik1iMuDNazxt3ZPfshEuCM8MQWUCvZjkbmEUQHQikbq1qmQDoDdiZ6R9VDBwK",
  "key25": "4tiGhzv25wsVsq5QLHP1zfr1bea9AYeyEYsmcWRpKR7pCasWRm8Ljt8ZPcMFTRf7mwLVCs1ksXjUAbFuy899ywcC",
  "key26": "5iBPbbbRQDTMM3kd76yRTap2zhkDyLFENXuMmrhuN5piawVShtn2S3nExEvZgg2qgaF48yqvA4LXfL2KbPGSoKha",
  "key27": "3zykCqN7XN2yoDvFjmnH6J7F4ikT7go7pjkdzii7z3iv691hRpohZXvbhNaRndbBihuUzZwRVagtHK5N1H4M6VEv",
  "key28": "3vciEPvsgHnmPDBmqeaXwvXrpczHGwjoC3twduTHxrTcuDBwjDKVoQEZ8P2BY71tB3EyFAf4KV2K94n2wUiaevWe",
  "key29": "3R1UQyA53q81guZeuWnkHM8gtQQQV6DFMyMfqmSNwZBMCY9EEHvxDBjvQ8NN1uC3wtDE38cDuXtTZ1n3WPwTF5iD",
  "key30": "eR9QEsnwk9VeeSZebwEBbegaGjELfx7FzpiebrrDxsKBf57YGv9zPkW62GZdnaSwxM674hTtRr6bCvhteSjhi4T",
  "key31": "2qbkP4y6rQnqKRjn8bNpKAYsV7uoH2GZSkrqz3ebALsuN6rJbpV8MUQWu9buXzu4vuPs3XupHapw2AZ6e1TVDgY3",
  "key32": "2aiqJDwGVUiLi4Qqx52tipvSYxNR9wUvsaufA2bdG57QB2nVrNBdfkBkNVXQReo3HjkYNpmcSEgo1ELLa9HuXMVS",
  "key33": "3DZ5QDRfmsvutPkHARRpAV6Zyrrvc2KLRVbjACdWM1a1RzePwdzMYxuBKE37B7FnmwhhvsMme7dZfKpU1BC6xsKp",
  "key34": "243j6grKwAnai1ZP4nqKgTRwwChQqCGdn34D1aD6cvSqnHfkhecThfkPx2oFdW5gRimf8otZkZ6FEPUdPvfZzmzd",
  "key35": "62Z6eY3xN8ehxAVZb2TfSt1MQvUupT4Zkx9nNQGmnYZZjFoFh572RqJyLujhiVytWRorrvPeYXfQUv5GvmEAE36M",
  "key36": "41rRYJipu1afhQXDoG2QJUFnGcj24aRgUSHs9Ve7zD9yPbT6CTcQKLJvNkxE4gZVtaU7G5wENZN56sQJLp3yTU9s",
  "key37": "2dGbUDmwgaVqvXY6NxRoRCZJ16mWZ61mrR23DubtNyp1wTeUdQZnProTcY1uC977zPEGzQnqbXgRzj7sJhbxGDUs",
  "key38": "pFytFbyjzYUEfanP86qvj78GbmABr19Wn9C5z8RnbMSh3b2rT9eyzyottsnzwNsUYHQpUb9mDTeNosu7VR7mTt7",
  "key39": "3FqzkzSws7Qvwnz1Ejz86dkpZG3UBU7QWvWMQxD1kcKNh77SAsLq2vteHnTAmJuMq7KUqUuDQqToDaBMSShQ4YSY",
  "key40": "5eoHfQe8gnSFi99uM1dEKiGvutZRJKK6LPg1Y5P14aj87eFFTHiBrkeQBApQ5RtWJY5aSub9jsaZpsK3BfRTBbpb",
  "key41": "3DR9wC8TT21uLwiz3mKBt6YuarpTbziBExYT33muWbYBgrX9UyBsX2SL8pToM8P4BsNNWb37uesVZyn6kFZJFXm9",
  "key42": "2W4bBokWMvcBwtdi2be9iea3kp7Ra3dbXFTSadAEfdXjtSrth9nCogzhzW2u6FoZc1xqoRW1hczFQGJG7YzuSJWh",
  "key43": "MV6X6ew3Rc56HEeJCfdiJ61EF1zkDCM7TqgQPLoc3aNpiik16TPcHx1NDDkAHbReQBT2vxVsEsJ2rkUDDVV2TUT",
  "key44": "53VVH7tMF7q9jz5WeGDKeVB863mGwuYA1N6uvThAk52apmENpATZK4W1iAgYQemwhQs9EzbgyZCykckyiw2cnqgP",
  "key45": "32Rg23inusCVvytqhRk7BwGzVtj1ce4LkhgoiiVdHB1NQv3f2tnzVo5rkrqgHxFyskoraty3QSjQADCGcm9ezn2A",
  "key46": "4Y6Wxm6dPKVR6Rc57cpKvfaKeYwMxuAPkeC2GoZrQ2y4Q1jCULejnfCJUAFcfxDd4zd3mK7XBL5YcCsXEWhVCrw4",
  "key47": "EojebPR1dq3hCWRgQxNbnAm2AjfgqXkzZ5SDX3TZT48zL1odq9srfg71L2hymCaDxRGEBrLZUEgwajLBwMsZehi",
  "key48": "2gQQjBNaAqtGUraX6AspDELoVwqUbFxgnY7M2A4wLW92hQqGccA6kxeThUH6YDozDBhtU3VdfB6eS5GuQciRhXkB",
  "key49": "vyi8AcCVfTfR36tEyy4LrpyZHuWQsGfF8hbLAxhu6Q9n7WqKxpSZDZTTQ65ejiR1LAkKGvq4H9Hca1c4nyQRTxk"
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
