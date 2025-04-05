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
    "5tF6YTxsRPcGzMAdTKD2suUXJUXvEwaZ9mZKZb6tobctdGvfvVk92bEruHMntWU9hgmqpkfeDDPHr9LxzHhC9fes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26dyoaL577wJRfs5LBkoYGGjHyo84dKmwxvVirnG27njPTZ4KjDfH3DFFTSPSjh1FRe6Ts45PhixGZ92WgExKT3D",
  "key1": "5HTnRHfM6uUKy51e1d8PKVHmXHNGmh2QUoqMxyLgQapbtHv18zpUxF5Tt5J4Fkno4yg3cv6LnsuKpB9JaAovtjYx",
  "key2": "564kFXzHxNzLGfwHAnXEj1bgpDqTYvBMYZKtCkCFtxnZtvQxVjmxGBiVZ2R4v9pjr9van2VTyrekH9WSb6C3HLs2",
  "key3": "3JnXECSTRrioLhbBD3rPr3PudVpwin1kYxKoeR7dUMcindyA7Nv3cMm3nDCk4vhG8P2wa7vndfGvgZk6C1N2X4Qp",
  "key4": "2qpP3ovWEgFdj2Qq3jnD5LBHN2djTeqFCS7CUPKJd8rcH9vGD5HjEoFGAMJJtCTD4yRLKferqMffaDHoncqyPDyg",
  "key5": "3txZnX5kKF97VdebmDKQehUyPrgPaueno5y16JzGjvgQu1ERpekj3S4LyM8Dyp7WAeoB8ES7xR2odGmAbAd2awLC",
  "key6": "5XFpF9aLtWZZKhm5ss4jR5zUAUeo1MfJ78dAjjh6Bd8USgCQXCz66xQXU7SibcdtxFqB97dJZWn1hm7uMeXvLN4r",
  "key7": "YxdEogyzNjSKMBKyRBfsH9QATKY3Tn67vdZfbeCKwm9otfyXFCxFbMaHF3KGJo3zEqY281r8moAwh9ap2tgQHEK",
  "key8": "AnkCToaHWLiy2KwRWUFL1KYtDCk9MQ945HrJzAQWJ8s1Re7Unn6q9krMdUXw8RhhepbESvaVs6QY6eaJvKDtChb",
  "key9": "5FrzpFfwQdioPVZV2AH9z97EFdByHGmMTjJuSwcD1YdXwHDkirQsk75SQY3GEAxjNLPMADcP8AEBVqY4AY1ZP7B3",
  "key10": "WLsBzAkkvkCeWaBnyVqAjTPFBnMvUbznn99wmCgLG4tVsGiScVddXx1Kvm1ja7kiqgcSim6g8pEK43p8wiodQRv",
  "key11": "g6MTK2AuKNXXsZ5knUV1MHfXEGpM5jYMhdDGTVgzj2qBBzGUqE4kgL9aSxkNnoHDfnZyaE68KXyDmFpXgKor4xX",
  "key12": "2SZEnJtD1Qrmnzmgj78DesvZyAZbHWMmqbBvUzDtpeXdYZNisAEB7bJYrx6uHYWXb8ziSvFWccBpkJhYC8WLWSk3",
  "key13": "5Ed6gWyASteTz89t96n5WZVEzYmCExRmsUTAiDxJjgkRaEQQ6ZjBHtuTVoMidL2zx6fn8L6UHfeFVwRbFHeqUrZ2",
  "key14": "5xaLCGsby1YGGH2U83148XydRTovDzviAApWGPpV5jVgfunfEXGfHdNpw8htFNzJSKm5eJgsmzX6G9SQSEyhhbqN",
  "key15": "3hdiXA19A7hUwoRjz2juBBTyJd2R6PZryuB1XAdUQc7YrUhtRqyGZUaLjXcbtJ6KEK2SRknXeAS3K3RrfwEZyK4n",
  "key16": "4K9k13SPr3ALJTpgxBfrGm8JqEiFjqMLFEpP4zxLrefQYQASFMT5Ck1kd4qmunPmMVcdgcJAnHZoky5gMnNgw1CS",
  "key17": "2gT52JsZi6UemCFptTE1AcWx2XRRj5o6Kx7wmVVUZnmeoFAN1GAy931kuH8Avjym8eSThQXFhonMnG6X1URPCu9E",
  "key18": "5uLNN1LwJd2ek1QcPHps2Gyg2tfoJFA8SezgYxovjLFxykPtRnqHzNwydap76JyQXp8RZuKwmSjJGbKMp8Zrs73K",
  "key19": "64JYwb4zZRHaGtxfCoFqjtLCohbjqj1ZreZMfa1coPt2abgzfbYY9LEwtqwEwAKEMCebyZd6DD6p91nrQnghLfvr",
  "key20": "4eisQcUBmUKkVyjSkwEsSMAvwerNvVNVgSqVfJFogFAtmDSqFQbshxgmEgQweuuK68qGhFXwGoWYuhMgk5oDHRkR",
  "key21": "289uWKNj3jsEkqpp4symn9gTaqt67T6mzSYhPZEZJyez54bdmnNW1jt3ZiMztKuyNok4jv73fF6faALNRXoWh47K",
  "key22": "5MFmYSjoLKM76AwocTVofWae2WzJ1qiQ8fydDYtEYQh2v4x5MWfBSJKGYB1bvPXTgdywfwBjh7gWa6drM5CshW6r",
  "key23": "25YMz3w8xDCML1VUY19FD2U8RrrxooKaSbSTwNWZir6FYEd2DPo5oX9AuHR6xWf4XY9qcZFZr7kkpBFrukeH6rTa",
  "key24": "3hCDLqq3QypahPXenWcJb4y6SciGbBShguh2AFRmjSeKrKG7zEgoGAHzQzPz2HwuD1Kc6smTnda2vKkRvMVYiH6g",
  "key25": "5SsyeskYYjG2m4kmTSm6ePeU5YTEC6hrqAu7HuRaMsEn3HhHR17xci8QUDbe18KyV8qGFSJn1zmPK4jzWsRUKJVa",
  "key26": "3gqQHdNjaeVmQMS5SVrCeq2wjH5hwzfEExyL946NZyCzDiPYs7TubVWw2f8yk9NTknpTWZHWpRiKkL7fFSFpCcap",
  "key27": "4ufS3owekbU9BkcpcrfoKXwdPDDpP4RbmMwEntRrmSeh4aSFj8hweiJ3kvuYX5qD2TYpLceH1dFzVJjgrsKh79FK",
  "key28": "3h6Ma71TB23Ba2WzgZrykZWCYosLbVeAjBX9PuKXZwNKK4tpE4XDXSU6WEcAZSzfay9RdbT4GLJYE364qRiJv746",
  "key29": "2BT2VYqHtjn7rt92ecvpTRsQ5RttWG5Zscm8zJj8mUydpnQTEf6hZmeg5xo3H85SUa1iBM4jgqNcvmhCMYPumyhB"
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
