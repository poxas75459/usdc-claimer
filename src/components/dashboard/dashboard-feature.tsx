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
    "4RtJkwoVXrUwXkA7UaZjpUjtbyWHjcxgdxJd9SEHUNy7wtP5fZdgAMW4z1whw14Hy97ybc62S3sECpMFypNXh6B9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ls9M3KC1QW2pkZKtwL7kcPZ9asuVY7LMuyvXPPZvbJSLTbJjh6Kcyv9UjVbdWGhyxYhTMU3XyFH1yiLiTW5aVDB",
  "key1": "4s5z1fWVRZNaGYw6PwW7HyLP5FrjYH6JsT6sZxSfcFd7v36ywCMNBSasoSAjq6rhKW8B7sSiwm91m2FAjwhjmGGB",
  "key2": "2EhW6rswT1SdZqu5UJt61pDEj4j5jbzzaVvyyYaUsKrE1nWrKRRYFkVEN5ZgPZUfTy4hq8BypHumrSt6s6vmWVue",
  "key3": "3pmdbGnWFEiBLugPVPyGGbK5d4tH7xKzzeXj6jrpHw4ZjZZC86GrjsFmdQH5iNBbnJoY83kws4hiDQXJ73WZg5fa",
  "key4": "2zEWrWFDKpE36FidnnjrSEKXSeTdTEEQzAgsMZNATefugATLjiDM1oxc53VN5tXpNMF1Acw5kVm9z5QgXW6WY8ke",
  "key5": "5xk3r4iQic14LSMVN4541GwgvSMoqEqbTzut1Q9gLUrX2MjgSdC696zyAZeGUfuwnhG8e3YxSm3k8tfr2w1AEogs",
  "key6": "4VAw5sMtddjMTZnrLDZ5U8HyL5BT5UKYYvkVFywTTBg6oAs6X1jZ9DEyTNsP81tQ6ty5wkXMZnRj5ZdDDtEBgkQN",
  "key7": "4VEm1GD7MKwL5ufKJa28hEPbWzbD3qhSYd7nSSzL2csy18w2bCWyReBwiDqVmXekidvJVDVjez9D49FutV8sJjx5",
  "key8": "BSXPtBtYbZvgtfsb5CPi34HhAQ5ViKL1CbvRk3aWASdnjaQJN4ZJkEJEdeeUUKSYxaHCaxeBBT5zGYR5yeHS3z3",
  "key9": "i6GvmW52yuqPpUVB6hLFjnfxZuFwfMchhy7cScP3MRDwMMgfrf5N18Pxy9Qp82GG1LtQwaiaE3p3Nf21veZLcrg",
  "key10": "2xQRs6tsJ2GrAsF2HtYauFEnCTk9tHreXJZ2JY7CUADs8dJDJPpycA7ECY3xYYziPv3er6rVmPJ7qUQrZXZdPNHs",
  "key11": "5Fb28yJAZwXpN9FQyYYXCEXAbL8ongTjdTRZkz538sqMjrnj2u5RTdeVngi113FqZiYQyJE9SSaEBbyxsqkbCaYZ",
  "key12": "4WhXsVdV5jDAEAdpZ4RFNC3YQjWiEfiWacUzBuvaZ7J6qdWpuiEJRcXE8oc67RC9u8rYNrHGzUBHcC3eDw25igmc",
  "key13": "3rMVdsPvduTmcW985Y1zx5Z7nwCkRYgs2FXggGZXJi3VMuEh73Mr6JiY4bWPfHgybE95Y4LvJ4KNNj1tn9wwkwu5",
  "key14": "2xJ41XirbHc28ZqWLanX28oe1QiuhUJofKhcKvQSpoHyLWKetFi1bzKR5bM1wdwpoccAVZcBWnjyYB56vXUJK9h1",
  "key15": "5EeP32TN2CybhtDrd7fmfgTQPkWnykxBzYngL9zYHykhccnQWPe82kZY2Ue7u7hyQGgYgYBLEWDRyzg4KCToJv1e",
  "key16": "2QAhTPuibp4ekpayQhkTJqKh9Jpv9SxbuberPwe6526dZwbh9SxfacS7WzN5k6P41LuaKHS3U5f9LhHKV8mWriTY",
  "key17": "27LuTF377z9B2SNgMubgkY7R64cUuYZPKmx232WGHNVLz8gMpw33wKqsmMQDBLDVwUz9st1pwZuLd3CGmabEDjoe",
  "key18": "3efWpTZpDR6bVfCQZCbRGjWGmZbpayyaY1ax1oY3bFLtzAUfpFSkHiRNzFMAMqD2zeV9U6mcS3PYZLXxRuPRdDb8",
  "key19": "5u6WAQXyYCavp2PEziFzdBF6rQLKb1DoVXdi2xFtcWGFifi5fbuqMd69fcQXs7KpqaetomuybcDf3yZ5QNDZKncm",
  "key20": "4zcufRPNsVkaZShrMbgDtpyuKciJKXrCwHNiKL7WodAKDQ89nHj2e6xk15EkTVp2N34jCLpKJa5CzbHySKLa7WXi",
  "key21": "gBoAr3sGKyiXr8C8kRiJkWKZgJ55Vt2SjeSuV9whDjdktQibUPQyAFMgivFxQs4fmEqBqQ178BsqPW7UZwe3tSg",
  "key22": "5AcsVQDn3i2TaCVf3npZ6szrRzXjvJMtLSxf16iBfKbGSfTDUUeZRDRujwf5Fu9jwbjk3puFVqASGZLKQZrAQkri",
  "key23": "4gRTonDyiibcYCpQTrDua4WY6UZ5hjFcdiAKFa8QxqW6rHGKXtZ6PaWTmAthmFccTQsVo1x7u9jT6nrDdX5B26WS",
  "key24": "ypiTFFtKs3og6xx27cbBhL2mBZHExcdg9tzxKhdMi3FRwnHXUMmBUPUKcNESQGFwXS5kupTEhHUw9J5yFjJaQLp",
  "key25": "4LmvLipJqtGpnR2pja3Q6hyjBB8LmrP65ytNzVfT1Gjmh24SAkZY7aeUBy13N4WRFjw9MYdX9XuExNYnYhBMGDiY",
  "key26": "qbpfWmZhNyUBt9273a2xgiUrJMMPczNMJJpvw8UygxZqAYdsKDA8ha8yABAPmwPLLUEadCC8arSX9eNWsdsuoKV"
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
