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
    "2wkzqnAJmLNwKsLBpv6QiELLhQga9M6cMP2QJLYz8YsFg6YQsFgcE2J3pv1y1Ks8UGEif4fyupDLQSZx373P83ry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jaU1A5xt31vRZ3qhdWA77YeLBmHQ2FPtyhACfYWHGUNLjpWwqFYWUA2uHqaHDQAjeXM5M3fUSsVhXjxuk3Z2gsT",
  "key1": "2WktLG7KdShwdXHtyZA7YWdSVG5zEXhyrLmLDQReBozdjXtBPRx21iHwSWM4L9EHsMnEW8HJwiaFum83aWiBjrpG",
  "key2": "3eFmNWad7iL9XKA8KssSkJEqxF9kNZkwXQ96RQZskZM4qgkkmvHRSBDyUojhenwhzPhcjwFjh4bN6KBqpXx3G4Fi",
  "key3": "3STMqhzWUx2K5ahixvxf97j7UtojxY9rTvViSrqDLJTNaLBw9Em6tKAQ17hyRwKTXURaefSDFXN6FMGy3fuBmouS",
  "key4": "5npaN8gZn4pHdUR3oe1z6TdqK9azGhk1kLDtKASNkBawcq2qBBfHQrAFWvvn5HW4gxe9LaXmUH3SyVXnhEgRFLJX",
  "key5": "3xKYXq2W27Dh2aGMaqD4s33qTopC9oTMJsh1WjnURjxzhGsfpPfPquGmtKgcg6B8P6srynAYLh6XDEZyGCmaEaSU",
  "key6": "Jg5dos6WHGYkRAkz2qeWVFWuiAA5kheFXoxph8vd4RTUTuxxruKZJQQm3Q54zgp7KeLT4knGioJJpHBNKvjedRq",
  "key7": "3VRRTv7Uiimu5VW6MKDjD2p8HQEnhFzV8nzceG22Lcuy1g4NhBuqgGuxgBb8TYmJTmmNFn85BQFDw3Lk3MPeZcvy",
  "key8": "37Xpu4B3xK8vxNCkrrcvRGN52bTB6nRnt8zd3H48GMwK65xYXutgkPb4a5vhCYRmjkAjHrA8QATRBG7bT2kqx7pp",
  "key9": "2XT69C4MxhQcfYnipRHhS9QgnqFbur9mBJ3krqEtabkc94RGvS4JbQFATN2MKbYU7QXo8UGjFfFikeGBVskPSBHP",
  "key10": "4AZDeeHVoStShUHtz5h3Xm1aqGBXWa9KdNiMLh1q8hTbP1DvHcMXsaT6uWP1bzWKBGXV2sZJ1EJ6bEBE6GeYPVo1",
  "key11": "2BaRSyQy5C6UhXoB4AY5WR6QfsqKzNA9LUJYG9Mx42KDAt8PCXkzHwjH1NVDj5yNDKbanu3gtzVJbHNEwPyVGAen",
  "key12": "3v5JPRwhEPVxAs9Rp4RsQoBCXjsZ4dps8HgwzttTJHUCGJpsw6G43daS4VRdz8ccmj414v7DPYP5hPik4jcJnHZ",
  "key13": "BiP7boueHM4vJp2v5eY41ucYYXhtk21yibWdwQb4d3hZC44VcSHukTQKrG3ZUuNSGwu1gdLrveeVratojPjw898",
  "key14": "5jnmzwVKb8RosAHJSJX1CYcGpAH1UDaSqp5vxFtbfJga9htNB6Lxtvn78RaQ2PuEUvNwGShFqZ4DV6Xgpoc7UpsX",
  "key15": "4df81PUQEQbhWrtoabednHqE8UUVJyyBNmRSzgiDa2MNFJ9yEcBQ6j3CBFzzcZ73teWzQejv4zfcMi9ntjiokEXK",
  "key16": "q3qfGdXFtvS9NUyxAus5m9vd7pQipLG9fD22XjLQrvdFxS4N8EfgBr2jwSzK4w6qhKXxdpNrcr3CuMWdxfmXuAX",
  "key17": "5pekQmd4Ki5HVXu5huXpkPPWHx1J7hZYFmDw7nTCJoCJBTEA4xeqckWNiVSSJTJ1RwSp6RVLRXLEngpbvbXXS9vN",
  "key18": "2QN3Gd6n6zB44fxQRKe34tgWyXusU4JU3FREZqqBt39uTdRo1E6xDboj4ZVz3xxHsdwyy3ovNLrCRMeNgGzs2ZA7",
  "key19": "5ZeBBMfzeKhRTDVWyw6iQRUcPw9vcPV47KZKy2BDNB2ax124PAgMU4ZhkG615JRKQnFhhx78vgfB87xCxiAoHE4d",
  "key20": "5r5CMcxUaWnyEGWAbiwf5mkeFZcybSYn1dVCTCkZMwNcpWr7CUkcxJJv78YEz9PPmy3S5BxiwMJKB8aUDmmBKPeW",
  "key21": "qYZiLRcAM56DbD48dU8v1kiLz555bMcMtvJmX3EwJsS36sw2xrmTYVMHckXphDv5MHnQzQt85Q1AmovZkVpmAZC",
  "key22": "4Jcgo3tRCzwx71sTMzRgsoFfGEC5SGVu3fKYXd1QDJciyAzgbUoowiF132dnjQyoa7bBHRFJVWU5mA5dupFuJn3j",
  "key23": "mR4AkifZhGMCfE9iwEZYq65Br8T6TwHkemDHdXEbHUsk5ALuXvnnziQi6EVFVsTn7brBNjXzaRX1s4MZ3MaZGMR",
  "key24": "5XW9EmLkVHXp5qaB83nsoh8CdTYE4QCHe6bZaFw5fGM2PHZPVQFAQCEVYsJxSAHyC6BzC5dwFDeH3eJsZY7zpQVx"
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
