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
    "5vrkLZNxNVc5xzx5yUUWhSPYwNiTzU6JDirDeW9xGWLeynfUX6KqCtsCyj1QwWj5MWQ9Wn73ppZ1oeijcGwPDi2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkWigzt1yzWvQMRGYi7mgtgNc68LWQwQKiJQRZBNycc95dh64BZcvbryZYgkszUMYDnj5wpJK8FH1UvMcwDjAho",
  "key1": "4XA4a4m8owTnmPvQdkyhKs5UR7o8We1kAjgCBUqCdjWoaGMQKeKbf6ssekVWKCbvMFhH6HmPtcAQRoWS9eKSKiGH",
  "key2": "3KNjk3YPmhCrHtuXThLwfrqFPMmVq6vYHoijnaxcnPaE3CzwX7nvw3vEbLPX4pJmrPCaxU7yM6CnUy34nYCR2mPJ",
  "key3": "mxCGYq6zaxTMPU9mnitxX6SPBoVU4D6TNfx5jzTZoV9PtAzFtfXWDyG5CmBhiAuqpQkhpMeT6vqdDkmgKoKK4md",
  "key4": "2LHAgPkBUzU5bUNJHJtbubW4mNGURy6n895kJDM9nkmfFpuQYiaVtStsuMHWpvk7PECDm29JX83WUqTEcKVj3BPU",
  "key5": "3k1hmU2JhEKq4dmEqzE1kbANdeTi21S9J5h2guPuebTyTbe5cxNVbgHhhNNnpzsfy86kWwT4K4UoHDGJxrTmyL91",
  "key6": "tRX2T5WkUvEMMj8PvC6U6twDccpo2r3eWRtLJHKfgbPDEBqEJzDU558vUGomF9nojtKm39bFQCHVEonigHuUs4s",
  "key7": "5N2KSoEMJ5vrwdncqwydiosCbg2oMvEiGxtxBntPfTpX21s1w3RD3w8HgjJwzXxq2U9X4C2tqMh85dVSnZo6DZXk",
  "key8": "3UZmi27N4n9J1Pb48EEY9oBdWaw6m7Rbhp3EyqKAGbQudqZ17eP2HgLCsscPC1rnssRBjL8g45SdVg9cztjV7gdJ",
  "key9": "5gbqZnuNBNeuUNB96yWrGWJcsHyxdsDZPtAJ7MDA4NViEoJ3F8285oanA6ppcFZhgCmVRypSnXKWQdJSDzKfqUBM",
  "key10": "44u5ck1JirfU9grD7HSB42wE3smkEGzoevrLDkuRrZCUfdivty5mAcnVvKKMvj9wq9Y8FSotG1yDQDseuheGCj3w",
  "key11": "5tTjTietfcejV9tBGS2TDVoZepAd7QTuDaPrjnXvZ8eNHrofqbgtHYBMN9pD8atR6Cv3aVmzBF1JD8k1xmdJWhcJ",
  "key12": "SAHtVwuiMa9nwjxbmTKxdxJqmTC5buyUtKQYupQrXwd1ENmtSHu8RBgtHfYfLEeNaq8pU4Cn2N1zWzHS3kGs7ns",
  "key13": "3byA3msSg93wEzH3oH593GbEGiNQr5JEyVtTDqSLPpAPpBi1j6tbm7X8EbYvTfjqZVFYTwHHLx2MACXwZNSfjz5d",
  "key14": "2qnjUkHNL5G6paUe6aR9JkVSvfG9b8ZCiykUUc3sbrGs6BSjMLFcdBdVck5Roh97qpEh4Qpn4f6TdC2msWAFK2v",
  "key15": "D8LvS6Gh8HUQuCgkvsUdj7Gbo3W7abN4Li7iYS3TtnpTfrJMfMmUHSRSiSM5dgNVGNV2LZaynRzSgGGGyj9bb9G",
  "key16": "22xbKjD4XkZRSvQKPCebPVggtetrgoyy7SatCMw4SZ5ozRSYg4oyiJdSvyPkGJmbZN3nZgq52Lfht4adCq2WVrD5",
  "key17": "2FgFN3PDD6y5VScS8keKxG5YtNmsSmuisMNhLtTGsWvKTXPF8tJwNrsebUvh9LMF8ZSJgqrCHV56pR9hHEccYXrz",
  "key18": "45gurLix2TWmWwVeZirQtHWqCTYQ7f9gzWvURYJakfY6PzTusqdCNfawKpPvHAaytsPvf4mPBYw2G5MXyyqAyoto",
  "key19": "3rTLDiWBGDznGoYnBo28isoaMNLjvMZM1vSM8VaPzd4AR2Dqo5cr9fw1SGBnNXpjbkcDpGNBqyigmm3X4hAQk7g3",
  "key20": "3sSGtTR4MYzBDz9A1d3sFtDrKXpoGdEUdCZniQgvLYsHQhZpCis68zFhcZbBCNjSSFcuBFibkzUJqJY7DCJxiDkQ",
  "key21": "51BaKgeFAJ7qTUuiF3HMguuUiNEU4zLsXrM5yKnQ7oMBvRFyU7qKvonibxadMyhNTPrrTWbu5mbhzAaC9hrGE8gH",
  "key22": "3ogoiKZFbgjLArFXQaKbCTRLYVa9e2QeXMZevvSXcmkHWXKWJmaT6fBhx9X2B2H3uSkFHWwoJgUMT9SMPGJCe4RR",
  "key23": "4FZdxjBq9BZCivBB2j2DWEi6RQHSX8HpKstsT5AhR7mTXMHeL2JLCqm3Cs6MeRgjNfFXddxNjm7u2oymoH9P1tYd",
  "key24": "TZyLeXt2uNx9ovdomfiHLMzEtPBHYo5dw6BuWRPuwDSb1JV7va1hoXkBrqDs1e6tweVcUvFQzcZ1qGW9TDbqrud",
  "key25": "4Zi2SjdPv1JsYKkgqjQ1bCxbC5t2DmGqXrNi8FZ33c4ZTo9BDuTTr2FTYHapq8Qasht3sgHZKi4GExisPLuYuTQb",
  "key26": "VUSdGcu1HDTfjfeLPfAQ6WTrNTUmP63TBL1rcgnpBeh6YLTX2k7CJ8bihgjxYvitg7hNmvrHRWuseppypQTLHwn",
  "key27": "3xxMChUzy2Ch7X8rryHjR5VVJFrVJMZtn29vQJ6jh4XCjeHK8pxF8cQECZpXCLP4wQD98bQNvLpP67xikGBRpFbW",
  "key28": "4vQVc3P4ZLispbMfDnDBTZpvVSNiuoGYCupS8EyrBuHWsYLtdXmVoeeiU7vLXKBRyD6apXpoaC9DskGbTNHKHXX2",
  "key29": "38kqn44yDVDBHwvaR9pYxHygjYKcxhqjKEp9mTyTF2WiNat3Rh2TfbQ98jNitY6XUM3ZAZfJPFT2qEzhDeiFNjbq",
  "key30": "5nBUCxmEx28kgYNfV9p5MWB74fzDTgwdxVSSFgnYscCE7NsY5Eb4soxqcnpmxCSe7hXm27kCBZ3bxokK24ELhpbT",
  "key31": "3XjAnWqCpgmicRDgZvx9rzFeKbZb41GPe7TaevYyBeko3wV92NTA8d5vp2mhw2Vpp5X8BWKjooJV7X7rBNc2p3Cx",
  "key32": "4zytzvKoN7XEGvA56AGdijmJ7Swntr9fRpw5ruHdTMv5HWEfpBvZD83PJnphZQ4Qhqf3Xmgw1aQTjnWTuDddWprM",
  "key33": "2mePnFpZ6dzh5amragrjZ47R5VVDNcvW8Ume1mFZ1z3ZmVaCBcaUebsZcD8sdG6XDRZGTvwMUj6oiRr7yEhpvAVA"
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
