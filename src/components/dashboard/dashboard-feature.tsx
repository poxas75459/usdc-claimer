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
    "67DBW5JHpun6gG8eFhtPmQbRh53sJcMjDkMjP4UJCRWGncprH8Y7eDxtzLeRZAUMKndKe3ezspdQw5gUPGtPctcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CP49nEeyw3ijskTq3tQJtvDDKZJAoCWv9HawbxXdUnfhcMEvAW1oRz88mbamC3rbyTBgQxozBDSGcFQGXpqfrHd",
  "key1": "4x9mkf7XeAygYh5Xnne4PpaehzLHEoojwLFXbUchRonJHUqTR1mh8efQrU46ZohokGL6rT6kstsqZYsLuAkcNs6s",
  "key2": "5TDSkpiUg3sThLLY62QPQKUKqVAnHKLbNoEPdDmJT3KWNLoe5GtkPQtz59P6v5UCp97bv2pfmr1AUwzqGDZvwnH1",
  "key3": "8SHpx2b9DAcDNHTKbtt3xueuqzwAmFQJkxqNSp5vVwjH5eQwgc1DzBSTsW4Qfs22yuq3nBhf3XtAgRtPvcJrxPU",
  "key4": "4iH8xcRQWRvbpQsw5X9JmtZi1GsbcBspmC2qme43BSoVF36CW3yeQ9chnM8zuLBP6DsskEZ3LditdcSwuHGVZhT5",
  "key5": "4qqaE9YAHNBMCnPPP7J7bVpVg2eSoJ1hctWv4yqaZ4XZfWqcu2k3AHSaHBXJ6T6tvRmggGXisDm3sC5mXqfBEsba",
  "key6": "fJqgDy3eZ8nQPGEf6r1wgw3UC4wC6VHMkk43BUkmJCqNyFHYLvwc2j7FuEgVQ311LW8NcZukLrZyvVDiyL8uLiM",
  "key7": "4xWQJSzNetvSYAWNYbtWWQQttFZ9zHzYRRMsuBXTrxmUbS9NrNojHpFdfzbkMWnrJF3oJseJVux6Pt9a5ydoDLcS",
  "key8": "3fg4ojoPYbdm5LPrKkVs8jVWhqi1LDBw1yGrUQGfksT63iY6MB89stHjxXzo5Jp5mB6HKx5xVKiP8NhKXGNmf5Vu",
  "key9": "4nmaHVQ2tKfXSVDQdfUspcrmCB7B3w7CBbNySg1W3w7yFfkMb5C6cGgJYJ2ixdcZpEvo8CoKuxGXqJK11U6ZHJrC",
  "key10": "3o4aFYYMPvWoPwbewyUXucTXgw1Z2kiZU2cojht6m2KedDxrRQkqLBCDQipzyopvZtW8tFCzAY1BPgR8ESaMcSqM",
  "key11": "4xeqGAaB9i83AwmND3y27mX3uXG967fBTWMz8NxC93SNj9DYhd97LYNdkruNzbGadugZQWxxbw1ZjXNTk3Y3ji9Q",
  "key12": "4YtqP4TPJAYWgzLtcHJPe59ZENZLGmAeFh4SCwGcN6YsPcH26keMzat2usYuUczTV4qBsAyFPnB8vVA8inZ1YYTw",
  "key13": "43RLgkFMbGcjZSbW6dDyUMRBhG7Mttrdp9TRAQTr9B4YJ8w9TFSywvi4japTHvUgq7irrex8ReVxjttfcErdG2Ni",
  "key14": "AANx7pKWHNDiFvCBr4Ts9kwSxR6U7Af9NjJnfv25WyAk2Ecc9xfpCRHa1HDAaVydDZQTaEFRLVK9GazmVm11YrK",
  "key15": "3YrmRCqFsHJ8uDqunKLB1UQn9miW2wRv54tM9BPgXLXMfhUZaBTkHyMLqTHJcyXuAtp4YHMw6JaE75hyM1bSfiqn",
  "key16": "g4Db9MwT8LvyuXBDh5psnk4x6ak5U2jeQovCKqDHJgqDms2UdzUqoPfzt9huUe45ni8R6msGaokDchpg7T5XfDj",
  "key17": "9RZkGnKzJLBmSoKLuT4XtEYSpcpw6tQ918ySCLWrgKXzvzHojZMBwtRPWhmEasWGMqi3nydhHaiXr2Gw5G7i6im",
  "key18": "FbJiQuGuDVoLcErb5DjAoDmSPMTsSKD6zsEh5sxgUTXwkhahcgnx6zbsQhDEkuFPSY8GPKPUnkcT8M9o4BjR1Lm",
  "key19": "j3Pt94eCyaE5XunMhvE2fa1ZVrCUJi3DB8jevdBYNU1QdPdmBMbPN245Wkr6vYCGhqCgUodjgt2ArP1uy9PHtJV",
  "key20": "5ov9djp47rNYch4iuJxPTGZ3JHRgdghSEaU8MedgkmeQ36Rkksj56miYP3EvVBUkRgHtWNiHEk5c88BtuqqsGch7",
  "key21": "2wH9GVrDauhqE2UPWQD2k8zq38qU7HDfzMw7taFepoM2U8Qt3NxsAYHUCuRdEin1dvKp4M5DYXvFccE9MQ5v5NnL",
  "key22": "3cR9TmyDRZuxs36TfsZcoreRFNnmGHGuqhQv9Ay8g8GsdEuZk1wEhuZZSzbuTQsjXvytpmJM5sPaxKq8j78PKo2E",
  "key23": "3uAZgjzExuT315o4Y16iyKNUk2Z9tgFjQroMMPbRLwB3uBsb5EdT3rbZGgjDtTsKJM8vdhmuV6HpwiU86AjAWwsG",
  "key24": "4juGJ5St1A4Don8xyLE6BNXLAiZzeLrKSZorqRHGCNppWdb4LP7GKtgTenhP5RYgngWbevDqAsk8QRYiQ9FrfBGG",
  "key25": "5rkeyV53T5fNvnbDaKNN26GSqSwMS14cBfoMatVUeMHvuTcwT8cjgPRpD2R2rd2DkiPjkXpnEAgB2zGdgGGzKbsA",
  "key26": "4YUNgCtLADySHZMceT2pgECkNr5pw3kGxS6jTKZtSpHNcmrZJto4VGdov98dcaHJnPs5agtyAmndMkFp8aDbq2HY",
  "key27": "SdrsmxMgVRJgVadNF4JFrMmDbRh2txzKt4ZLHmVHpDrJwNmfr5LBAEPgQvRwMfVZDxXzUzRnvdgaAhpUjxbztQf",
  "key28": "2JDY1vEYBePbjbNyG7sMX2c5ZUN5sK7s6esCXz57xwpRKr4KELauwZsfoksmaNzYHjdW9W9VZYoov9fWsnXRfWGu"
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
