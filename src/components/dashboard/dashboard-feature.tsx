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
    "47xUEQcvh5sEfjY9bXALr8zNcYCSaiwdeU9gsY1d5z4mHD9GE1ixTUGY45SXiaQdDVBk6oMqCifM3TaSQmTkWaUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tnAHQLZTTG2uF6Xnu4wKVYFjGtipRFHA1EwtRTbWe9Wj92gvmBbPNeaR8T7hq8fwDPkbZfedaEUQBCBtR3YfyXZ",
  "key1": "5ZEJVCkmnfHDceCVCetKjeKiQ1pjP2mVWK8rxkTd5pUmfihoASqDvzYi6Cu8BibyGDhAEoM7yknLGdKknC7vWuE3",
  "key2": "vMSVpqHyQWihRRWeYwbJEF5ez9Fm3NUnjcGYuhozBiPD3j6rSV89Zfabb3982Z7spqx1ZdjuKSCpvYMXaATtrPp",
  "key3": "58Y6m93dfaHBwGRpPyMj4RaJ9gC4d69DFXxpEfk1GQGzr6zyyCpDQea5kCYsyBE1LTVPsafAi71y8voCf2c93S6p",
  "key4": "ru5DiPFZC6i7R44ubr8Vwq8PFTqTvDdhFMeLAxw5EGJBfDAa8a39qaV8xDfYQtjgd9NUsjVm4PsyuZcScXN2qNt",
  "key5": "4vaoFb7pVfU726cjRWYcV11fkcZHdFsJfkFby8nixj6Ds6Ymf7p3ogDnnsVsji4GdxGDt7aMrBqWtW4cFsTit6Ak",
  "key6": "5H4rkWKDvm6w8wbcVFqvqDTS6ZD39YhGh8Wp2667AQ1ry3majcATDuGqEwRjrs7ydjw9vaJR7jYmyXxA4tTQ6mFg",
  "key7": "24cPJmSU4KZpS7WVQyQ5h5Bd8ZCjcFFzSSg9ZPMYiF8Xpt6CMg3P5jsYvQ1j4xnGbumNxKmnK61iZ4EUjrp3okiW",
  "key8": "3RcF7ACSRieUgMiS11jk82Rot2AdTYKnNf1GuH8GZuMYUEt2YKRa7y7cB8QJTFakwJF8Vo8u6wrMr14xX5PdjYoT",
  "key9": "5ayUPaks2iN4xpZLboQwvN4gRF8Xbj7Xc1hDfPPh9V2eb5ANtq1dY4CMFQJZRBAHZSfQeVnyKW2UYhYdpkLVnYY9",
  "key10": "S6vso3TX5rLH7utt15pfn2nY51H5hkAALH7wrYguzQVXyU4Gf4bErgrqRJGJ6xjqrHH7qLEVKjpJiuUztFCVWig",
  "key11": "3N9rwbf6DqkUK4xMonAnK9ZuomvknuCotT9agZa831QpjGemjCQ1SfmX7aiExrdmUReBFTZZZz36km47VQm9nR1y",
  "key12": "3dELoKL6cqgr3Ss3NtSVcM7mbAsvHp4VKEwrKNMTPbas44h6ieMoDqmof8NygqECQRpFL2jPrZZ7wt9d5jLpZUBm",
  "key13": "3LJ5jAqZ6ii8dTb9YyaMRs32cAFmHZFQcL7xZDjeBtZ5THpFHM4RhkdFyRb98ZaYPaReGNsWLgBWWyQh3J7vf4ME",
  "key14": "3KWpcnu3y9CJrSDyZoYoDz3qf4eUaX9LmyS3HL47wWNNT8VCiGfqAMNcijxAPNxPPDwNckUiRzrvM6McrX9V6y74",
  "key15": "4cp2dMruqSYMHDMB7Ad3bKhwkaTuK4ii2FLdgD8XiiR5MvLRV5tkaCW1zbNXfbZXSSPSMyqg4uHPB1uYz3b5h9vx",
  "key16": "MpGYyucKHWv691AMLd5zhUtX1uTiYAJpGiDhvWnL3tLuYdw5xdZtCam7GHkxDf8JtCDkJpieC8MKe4Ab4hx6aYA",
  "key17": "1gZXHmNhkFzyDCqPqE2LWwgPQtHktSApeykBSXn9kdMSJg4ovE95JJGWxgogPRCd9f4DnrZkXVq8etXx827PYP9",
  "key18": "2dWjN5ipwTxvGDcHxYTXznBvnQFiaczJRGwwzYv9jZfGUoo1NoMYkBw4uhfPVdn6DtY5ndKoxauN2gWC3qrzPDSB",
  "key19": "2rujVUTAd6LSsWHBbDP6Lt8CPF9PBBotHeZMy3nawM3GqPkzLJzu14ukZ5fzXfbg4mxxb4oNnSP76YdQbuw5j3Dt",
  "key20": "3dM9DsUvd7UDykDNXHv5yo6BY4yFh9PLP29dXdQitMtLxA2mqduErUY1QnpiFXCgRQtSjRDe3CKc7rtmfNwBApLc",
  "key21": "rHK8g8DFRuv8i7tV7JbEAekfz3q3MSmQ9rxRUpsTNtYy9geiJQFMVuZxtVPQNJwk435RufvWRDvC5behqNpNd5w",
  "key22": "2U8GZW8kEPRNb5TPUsrxaTkQYfkvHxWeNLTZVz9EqtBeS3eNzZD66Q6fkEiY86MQEky7qrKW7nqdL11dUFZQkbfS",
  "key23": "48Ugd6r4fHfnkj4PjaACnYa9qFsP3G5zHgGqox56tRcWU7LEjLuXDH5eJKajS9coSsvur9fu1Sk6MSM7jJu4RzA2",
  "key24": "3PyE931yu6wQpVazY3ASkthCPREV4PS62fCVCQbsj15qwSwRjgNVR77VGAKz8jDcFyFuV2AmYcPpnfUMtuPYETww",
  "key25": "628SRaBUMJoJsAh2fqScPbxHWNTM7vHeeDTTWWiUbjxCzWU2VFmVPEBYU1nsinTFJ9BAWiUWPVeGgqkDSJQw58A9",
  "key26": "53b8crq28aV83gSr24oeBNscML6nWEvMof6gPNQ8rs6yRXTLddDYE4KhZBF6dcCrbdxL8GEYsCL5aVnjjbbBguBj",
  "key27": "2iyrDmWZf3QcGKHpuLJhp1a1zD2Wwc8ZkRiDyfYHYhC4iXafGZiG6NJMHg37BEJZefAAs1h6dtpG3gJQRAnbrUn3",
  "key28": "Papz6RR8Mgk5DwrpS6351rnk9dnEdaLRtPAAoVNYgGeG9pWgqtuwrfzy7sBFbtk5WrbddjGm8PB3merFf89SNNa",
  "key29": "4fEN7M7AY8EwYgWAR1dy4FvmL1kGWwKR6ZAWbgtq9ywdGrjgQCqaYCTKF9dSFG5CdfwyeMskq7RXD7MAd3CaCzTv",
  "key30": "5b64eNZi8Cca8mVvqDocfeaPZqRgXxsy2nR1Gcc6LfdUPaNkSqrYUCCNFR72NhLtnC5fvUtPmWmhWRAesCBNMuDy",
  "key31": "5mMpEsRSmtt3x4GKfcuuU8gvQhSuiKgWaKPkKGf9wvUXdXqNPbCE1t4Dibr3MPw7BMHmaWd7Ar3jtep9xRHpBrfF",
  "key32": "38gfS3mWLUBjpZ199aksDG5EZzBi85VjY8dfFrckrN36bbbUrjb7b4Z8hQiirKCeE78wc6zTHEVvS6bsLieHvq1L",
  "key33": "5DfCekft9qfS9VFRry7rghPSJx4cZ34TZ5yuMKU57JcjF6Dygd4uDBbEJM8J7aAFzh4Y5ncUM5peqZ2YYNupAiTv",
  "key34": "4M9HWXiVLzkZFSYVznkZgrnZW9pLSzWinpie1oBPoZ4Q9L5WrnMXpj4QcjbJdeQHtBUYLPf8NN4AQqWYZqBvVZWS",
  "key35": "2gvtV4QaN4snSjgtDxaKQ8uKZvtFUEVKwPJrRGyyeJ7CTSXsH4k5NXRnnbaZDYY5m9ASw76syz5CfsiXmtVkTZbE",
  "key36": "67EttjezsiiXGaXK4VRQ4atinZUn3qnM51pDLmY4EaTCRm1qziJeQ6i81GqMnMpNcxTnCPAHMy686zHq6t3TNb5j",
  "key37": "47aH3SmwywG8oKG12HhSkhc2NJxVFVxLp6rMAXSzaHfPw2XQmiJTp19ifMnzCm9LJc4sTyXW46qb1BaYQyjRbkqy",
  "key38": "4kHjXhfacUhD724ZhVs7TGTr2HEM1GcKYRdKZcspe5dMXj7JEhcFJneMhyy5Emg12veKbsvZRezcB9wPrRTdJtTT",
  "key39": "2kSLEkCwcS5eFEp4LZfE9HTyEMMGaVizyHznriL8NLqBfzF6pRyRZNaqc9s7AAsze5pQDimddG7aNJpt24YXx4zt",
  "key40": "bxYp2TBWSuMyS6smgBAM6euA3RnvS2hg8kKxSp58QRUNsv7SBv9c2QhkGAHfaU2GaH3CCN6dhA8r2SWP5Fe71qm",
  "key41": "3uMs5ozygTyJMmESrKXiBeCP5DRCxDon6i97qTqxtLxq4YTxKSn32dZaaqDChM83x8HM5teP5pjV99muB3xCpiC1",
  "key42": "46TnRAWLucmw9ZzmAdbjC4XfCZDKBsciVFhZwnqzxewJJtfMCgrDtbXnRQKJxRZKd52dQbrYhcrWVo66GESBsJx7",
  "key43": "REZ29Lt3EPFAwybCndMJyjEHMsFZfGtuPDdPaMAcmLxN3Tm54txXLGfF2KapxTAEEUnTXgC8Zh4w9bvVHBzeEcQ"
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
