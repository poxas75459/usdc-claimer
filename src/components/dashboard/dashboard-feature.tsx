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
    "49nwWuhqPHRq86EqYPMUbVhxN9xWiMVh6zw7LbaiKCbxNotdqhPVxs832JEdfhDtTZuz6SnkahQK8aNYdJTioT7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YUhKQg6DiMUHfrZ8K2A8KJ2CYCjwHYrLo1SpyKDqMARPD3ecCAumVt7UsH1BkrAaFKDN2SJt6MhVMDFX2nd4o84",
  "key1": "4fDwiMqctJvGMoZeJQBeiLZ52srcT8YdzFVc73SXCzh58w9MieqkAEXx2wTQRYXV6rY829qVuJNaCHmzbAGBFJWU",
  "key2": "391eqwa1Fg9QDP9iBGwJ1j1uDT2cuTGMxoN2s2tt42Ca1DpmbrhWbj28DmpptgzsLHyECX6emPhJCkZM73WzcvE9",
  "key3": "vjv5jDAP2YgehpR5THZQgD1UemFT3NhyGNrJXE76uHybnfE2YNprMahgrUfpzEuyn8ifQ5ENQCfSNgwb1tRUK5F",
  "key4": "4Crwxs152JnBecv4i6wBiAYr8Ve3VfCExGsKnFmr3ZmfRXfoTwPeUsh9xmKbgd4yLGtE7mJJnSZUEvsCziBsmo8y",
  "key5": "5xs5q1TN8gsCfGXi9umPeR6GYpsa3168hEfyDtdNx8PiqLGbptWAP9d47zGDq4Pd8PAgPgQPpUyaTVsE9bRadUUN",
  "key6": "4CnjxqJeRGWT2U7hj7EQh1Q7EKUwxPuNr5xoY3KtoZBkPyK7d9hBnM6uri5vLfBYhBrzSjZHXi82JsNg1SmStTdE",
  "key7": "4gn8NUzv2D8xEgMu76JkNNrXJxSmybS8vk3WtpeNHcmpg17kzYAcXEuMFBXouYVDzxZcAvVCM8JoSnhSon4tyZiV",
  "key8": "2ESRcDuZ3rk9mhhmngioWDDM2s4Q7onJnjGQfcNvmbzaGH6j3uiwVum9FcBv8daJbYBv474BvdDXWtJHwQVF8RvH",
  "key9": "JdDAbBxLDGikBzexxur2U9aBFJLDzMhMhVMoajXDjPbNNddqxHm3jKc8sqD9k6YAhZqJngzUNmQhaxYfasmY6jY",
  "key10": "4uXjKriAkPnFGzVkgn76d6jXivzVDiKU6pGjRghqLgtZfBbTzQ492x519G3geENgbTncucUswjFoWzWvRBhrXJY1",
  "key11": "2NCMeXTm3Go1MUDSYbEhC6TFPcn5wvX65m8ZikjKSrWJRfZRTvLuk4YTFrW4hFR4sBbXHnN5U1gG8FxndFnGsMZk",
  "key12": "5nsuYwRj38j2NveneAKrWLzv2Yez88Y6rfuc2WB72mbdSRULBEj1eS28MJCeJ243zPdweArXeQPFatQTJUqmohk2",
  "key13": "mvpmLLK2ctSdg2r4h3eVZxgGTZz1RZEE17bLjzfFEUatsEikX7JynRdkoXzTRwJ2uSaqpn9vhrzHNtkx2Aa1WFx",
  "key14": "4iiNJoXcMevgGH37MetByqYx5UwwuCeNd6jHfzrEvaTFBm9LCVY7TTN5j9jzjN11H9rxtraFj8yQf2NhNfvx7zQ8",
  "key15": "2JPPU9F4v45KjB793GTVXP5L6qZzZ2MGBh98ZxAYkJnntz1HK8DfMuiF5T3QPfFs5cytEwFfCbqvPSLxgfuMfU7P",
  "key16": "3oAAoPBod4WovfaYdBqJXDBb51NmaRsvhSpbZzByFVDUXL4d1Gki3wMbTdtVkZnRE65z4BkVsfHvUysQTSS1TJcC",
  "key17": "2QFPwU6Mw25pLfdkqZ5JCYGuWiNs9rxtgNTHmjSLhBkNuAnkCNDcyNUQAnZeUa3oggmLvPye7EgUNhwTXqupmCZu",
  "key18": "4GkfV148Xwee4wA8vUiPQ6LCcKdbSwP97DDDXTV3Gig1oh2vU2K6tYmeHiQTp4mLEQnWC2BsST1Gy3veM4dKaniB",
  "key19": "47saqzd2oivFjMEVC5RoFzLN21gnNJdQh5GuPcHG6HakmtyQxMnmP3fjwDpZicMpfDvmLdjf9yxp7JDbdcnLnewk",
  "key20": "2rUQoySjkLS1C84GBp8yUGaPB5dhxVb85kLrGm3iNWwdKSFWAPPRkJfRjzQWkpjDra4ZaWc8Df7YugyuM6fSQB5Z",
  "key21": "S34AQkrF2DcWtrwpVbUxuFTXfyeSW5o3dZkEn7jmUpZSjh4cPJrBW8nLYXRww5kvYcP13cAZk3wc8tbCDCEX5EX",
  "key22": "4nWEro5U59K9jhc4meqUnN3NreyWyvGUFisQUbBvVgozwLgvr3BHGwfWXo9KC6GsFrs7es9qUZqnMnBs4TsSaVgi",
  "key23": "nzSYQujyUb7VrH1tYUPUv5RitpyvWSnnXWFPxCQdpcw3qNXsnDTdUhPQQRgYfc7Yy2cWLuU9P62eik1GzM1XvHb",
  "key24": "48gVxfPtroA1ZGnwV9tUAwVhfBL4CPC2wVJPn1rUswvQEDSyBXFvSk9Fbp7mLAEbnzoxTkRw67Pb6eztM1raoAL5",
  "key25": "3fXGR17P15ZNYDki16XAuckuswpq7gNhfzTyQ4qGXGvkSJY9VkfhRwj27ULkss8qqdTk17RgGRzqaqqrCZJCxVr",
  "key26": "3WhZRFH24P5HraMeXAPJePBJnMhY8dN7L6WwoWxcGMySWrtrJEyj4jPdiho8zDnFmk4HwZqZvGHgfP1JbguEXoJv",
  "key27": "4gzEi62qcbtHhpiZbNNDMqvNj3vUnqQk2rx3Uc5BVfzzNqGCG1azS9cYnEekW3WaBriSfDihrAtzm3kgdMKuNVxZ",
  "key28": "5G7RzzBisNunNjDWjim1DRgDQB9V8rjnjmHjZmp9sWGa7KiKVqaebQgsxCkDCJQpsDvN1rkXMxcCryHm7rkuUb7o",
  "key29": "4wqLbNyo3Ks9sJggnBBZzqN2t81A4vFtpn4EnVVjds23y3Cq5zY4xdkmisTDfoTB67GXjCx14cQNcD5UXjiKrRpX",
  "key30": "32sArPtxLpyuwMfy7T4JCnxJkGSozRHGTPhRrQHbwsBRkECJNcv4ChDLT3W4uQpb9qADH2mmGEdwEjqRKBm6KBHH",
  "key31": "5wgFT8F1sftVTNbFnSBamX82RBG4ozq7dzgsZFEyuuvxoBpf4eVeVtZhsiFtNz7Rp8b6zHwyGGb522wbi9JbYqJo"
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
