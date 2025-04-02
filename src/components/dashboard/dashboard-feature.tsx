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
    "4DBLLy2EvsBzKHBuBjAzrrHkqbTSapNktmqZa4L6Z1aPXYTPBbXbPWphGEqcfT885oLu7FLZT7GU3oZFHaU5RnUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Do341wC1Y6mTixDcHGZ8jLzYEKzDLXgEMWZpGVxqSn9W7Nz4GYN1nohrWppxtFQVtaYwaTCdqExUvAnX6Kq2c6U",
  "key1": "2dFURDVgHgdPjmDekXh4vR83mQTjQ33E16UUsM8ohE7gpTQrHYxonPb4UAVpZ12624rpZvQPv1qpEjjQa2NL433f",
  "key2": "5BXPPbmFtDbg8SpMFsHKabnKmonvhiegVRG2NzuFyXt47Hbkx9Z8Xyp1Rd7rgQai2ydpAykotHTBTmvybfas4PAc",
  "key3": "544bN4XFjzL7gajWgLoU1fuT3vqAoFxdzigWCR5qL7Eu152GByxyWaAvixZoCtsPcVgtL1ckcZjX4ygDjzU4ELYC",
  "key4": "4Po7outx8KJRhYDPtmJQoBvwgiXzdRmymMY7Dxi88WWvTeR4dpchnrwxt4pX3x8bKLLNMQwR7SqWHjiAUwRJTyn9",
  "key5": "G7RFN2vmPoDz294pvz4ApsXVTmRJUWGk7iVHe22zAcN6PhGJvkL8YyjFJchaay1UyvJWoEqf1Ep2pnqL7isLJkc",
  "key6": "473BP3QAQqHDXgfuXq5msGqxGqSNQAN1LTCQZTMD8kxMX9izAeF2DrGELyQXrsEt2PmqRRsfFZueAtEcdnMFbgpm",
  "key7": "2Pg4UqEXxxemTbpJUB7MB41YSRFi2JWcvzXrUtHCLsQTr8E9MaeHjvR3W3tgwiSifkuanYSgsg5NZBAGBxHpEuzn",
  "key8": "2Xc6SeC6E7jGtpbdnZRGd5fkzWVCN5wQpFsnY52PwVRWHGU3hjdeYjmMdM1aoWki4onCR3qHmwQuRkEBUUkuciCK",
  "key9": "32d7Qm2HGsmzGs3Uhkt194FFYAi7PTKfRWQR18UZN9A5mAcBqvwgycbuytcqvd6mSxLJ5ztX2EQwUCJgiEipg1nN",
  "key10": "2yWFyTQ58UDtp8HSyo5ooKojmjRQq9VfNVVpzXyNiX1Km3j8fwGVvoYu1DdP3eYaqwQHMeWJSrBaMz5zMnZGMZrx",
  "key11": "2EjJc7SSZqLvfhpB1VD3Eh5yJg2TKeL5X9nP8Zybc798cHL4wTVCd1w66C2f2YsCcWA8KuVHYEeo9PXn1QsuBW9j",
  "key12": "5KJGJ2JXE14M5buiYQvsWGficyWV1xxhWq4U1CeXwDPXogKFqgzEsvTj57kvBezkUb72wEx5hu9eUHtVBPUDSTFj",
  "key13": "44SPrsTWYHsPuSHWdDDbK9MtpXHRtpmXC9CWFAcpy3ehHsovsta3cWWxwF7Qz6uwb8SenFWyktLLG3fWkFSF1W7P",
  "key14": "2TGUiMKKeS56rjA8QbWsXzcf2TZFmKWvomR2QdmrCeygF7dtxBCPE3BWaaudUsUw7AHtkF1YzxshpjuHH1ocZnkm",
  "key15": "58DNk7keuUQxDYBQetigXMFRfLYzhVAneKEu1MmpEDefKgZVoKinfKiac3ZoruNxKhdbQ9gSYdpSLFoQ9H1iLYx3",
  "key16": "3i5QAKbsb7MfUxX6A4FT99Z776kL4FZzZwxHR8x2yLFVSWQJDeqBw99aDAixmHd8af38Xfs5cyKdR4hamzpQsGP8",
  "key17": "2GHv8bPM3fvGf5Cr7UgBmsuy17eoxshHmbaMQWu51HCFQ9qKjW43isGotV5We4dhAe5uumEpQMmtaRVcWESfoiHE",
  "key18": "C6QrQVcyJJ1D98sCj6YVTJ7dmEEGtGR3TCzVqGhsdf8YBb8FHXL5Bcru3SyhiaG7f2ybAaSbTEWvpWaGZU6LJqt",
  "key19": "2xzDVHiDvfxjJZsoMDqVmtx4J7yUWEpHMRm15rGQZLV44bctiDP91bkdbhMHb7GZHiCoFEeU4nVabn5aPPHwTdqN",
  "key20": "5AytWrmKxF8LMAeoEjiUwDCpG2hbguYUkgcbVqTS4RnZvXLea4XV93PA3Zxou5ZoJPa8rKNMmyZwdMb5ssStU3ww",
  "key21": "3n3EUz4PnF66XGAodCtdhvGyiNzYm8c14ocSo5g1zEiRT3AStaDUnjgM4FhpeWcE5pqgJtQ9nPEyWZvR71W8ahWU",
  "key22": "2xTPriUr4JNq8KR1q2daWbmUFjw9YKty6vctetBxiZSTBBqt1EtCxgAFVAnWYmQJVrQdPYFSrCGg36HHTYgTAeY4",
  "key23": "4iGHzwCxxvDuxcBt8i8DZ4a3iJcThYScsg858rUbq5im3noiQQhTB1uamBPjSJSq8zCRJP5ua8fHXyPqrqwECkBU",
  "key24": "uqRfAW99nbTh1ue9sXHMQcKnHPvc4dUMVXuKnGzxyVjsKuk1FYSdVSJ51e3gZNwP6Tx4A9DMM1CecaCmQ5b9TVT",
  "key25": "2Xchskgf3eKo2dd3Tw2fko3opGSYZhdovQu1fpnKXp8XaL8DEkuEXLLdkniJNMK2hxBDfbPQwceFoVF6T1yyaR9a",
  "key26": "4wET5eGhfFQsvUPWvQ622Nncjqt16Rk13qTiQP69fpTWxuGLBUfE1tNNKsKpXmgNvZ8R8mM3JxP3oE6kTEw52v7w",
  "key27": "5Yb71B2EH2MMvoDSUsMccL41UHniJuAkHWVFzSkvkpb52YbnJ7i4AnzVza2piwQsGEAzy885eY9Fzrs59mbjuUsH",
  "key28": "3M27b4pVyreMvmRUS2QR7UYK2x5a18ovw5XUTYaAJLWpHkvpF7pYWkFMc6CnqminXWRuga4sTBMUaz5JsZRr55mk",
  "key29": "4uPTuXQrGucL28e5VFKb8cTABwsCzEVLMoLVbrNyvFqjQ83yUNSCXnzN7vzWThNxiiTdSft7fkooHksQjmCqGoLQ",
  "key30": "3LfrSkejxsJtvnGkEKAooBLm5JzWYREHasGmtxasUEo1W3MEiv1j5mJNq1XdMF7NkVz6WztahUjBE7oXp4vzCHRM",
  "key31": "21dy8fJvmoqcTzCfMAsWTUn8tkGt2L3ErFv4B5r5sjEUQVxFjuuox6Q53PhAHRqQtStxqiPKGgkGXfGbDBgNuLYM",
  "key32": "3oCSzoZ786cV99Kkq2P6uZxe3EjzVwwrCTWw9czWj789dGApLN1eLfZpmsbzEESdykSMLqzorQofmgSACgpkt9fz",
  "key33": "2sTMayqECYYTPTFXrPpTZhbGT2vaakFhdMD7N5HwiqR73n3pw5GBMHi9XJ8YUr49xbMjPmZ3J3HP234uGzWwUnm2",
  "key34": "4EPSUmhytg9FfCGxq2ccJNjzRPnqR6YgsqJ9YF9wfFRPfo3vxnEHrXLcwSzUZVcRUHRSFTuiq8qX4kmru7cecCaP",
  "key35": "2GGg7SnTjjrXLtHo6NFcJVVPMH2dTN2iSgW9g9ZEhMufNhWLxSDxSFohFBuNYZHPyJ77yBtemjZch9ykqtSFWS7X",
  "key36": "4qRmQRtq7Wuv2qD8yu2swtAdkrsRoherAkjq43Bmh6EoDnNkNs7XSVUxYU1Cb2czqAoXr7S3YhbrwcF2zSzsxqdc"
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
