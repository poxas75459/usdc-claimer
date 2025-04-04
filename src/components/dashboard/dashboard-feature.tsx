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
    "2esTmyCjSPQ5JZ9CDitco5WrLdMav8pBqiwCLmk4gGcjx7JMaahY95A3qtYQSD8N9inu6AjYvnTHJpdRwDgHctL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CXz7vKnpQa1x6T7YxVPh1eQfb9FLDMGghSUHdGtuEw1oWuqkcFZ9WFjwQXDPBaKxWUNcmMuUqRLCKiS8dSyTRZJ",
  "key1": "5QrYcTtQPsUTBZTyQMgpFTruujMdz2JBiY7U6D1GkdSbWYkEegYLZ8fNLKmGW8PSc5SE3Q1qkgx9zLsLXNPJFjbr",
  "key2": "HcvX5fhimX2hLPcqDLyELfQckxkKWrsCWgkuJ2EaaMkrkJPtVU2DuxwJ9wDSiipWMkQdsh7yF13YdGFRvA41Qrz",
  "key3": "5Mz6UVyQ2eCgyKz5VQMYnCbSEPVStkiLQbpyTTDb68C5cWmyRA4vxqfWm48YJKBhrNETVamXGsRhYLnfwpjKTAAo",
  "key4": "4QatjXY1CQd7os97T1DwgWrvqg8YTZUtxuseo5c2ckAo3xDoKqsQeXEJT9zCdL6YJx72G52hYFztfqweTyuEMns5",
  "key5": "2LpFgam1sA8oVJxM4cHyWU9cjp9vLC9Jut9u2We9m5hucjEEnD2D4qmpFXJswGgi3kPDfmrELLpk1UehJD4vdcrU",
  "key6": "4PvAHkiMFMbMWcxmz4i2Wjp1Nz4HWm8XZ5T71PfDu89QjjtRxrheAoZCCvSF4QVTGMwTaYw6mtgqTmBoBEDBDBhK",
  "key7": "3duCxFzuNukuS6TnfPE7jiKhhNq53kkpsiMMoHYXrkRiJ2cTSArTMfkVkJGYMHVq8rSgGNsyrwoHSxcUqjBUq7rM",
  "key8": "3p2NAXFEXoCJyisNTsWbD3wEzYEjuPpKPgspX9fkfy9fJ1PAj7B54JonfQNHwgbWwyXD5Zo8jq5BPPdPnpF1pM9q",
  "key9": "3ZWJc5LNcmt5E8AgNrTBviuZTCCwMxPGzswETuYEzEL4CNZXL9Ac4K4NHGUhvPVZxSzJ7Y9JQSwqNuuh8fbfW9E5",
  "key10": "16P5wLztnvzrZWaftF7VGR1bockvtJk4uWhVowjfkUPwWQsk9fg2M7sWKcLWoS8jrhrxmUn2Ekn8xFNX4sdrVEk",
  "key11": "3sRvwTFsbKCBHVYenqnPisctBWp6ZyTKKVL6FKajUZvUhq8a97RZaxKjYzBc2785ikyFv8wmFpq38DBYENttQej",
  "key12": "2cHpeCKhoDE5vq21mZYVPLXQRx5azvejK3Tynrnbuj9pRxihATWKTeTz3RBycbgFJfXx4vaTXWYay8HNBjfrAWZi",
  "key13": "hw2daQVugP7rkWUv91S8AgAUxPJL5Dpj2c9EqmTPPbwqqHXRQkm3a9fr3p7n59dBEuepKdfr6WsbXFyR247oqNB",
  "key14": "35SbTEndv9xYFznc6EQCiSouaKpGWvKmpUhXawYj8XreCcUQEgpByV9FcPWF7hcC2wKQZhUCmNvuoTHaMXhVMPss",
  "key15": "3M6AnjaQY3egEEc3XxxXseZg7tnsQ1v4bsgvyJrNUbnpjKLhq13L4emzmVwkVPVNJoCqniyJTS9y3qELcz9ALzqQ",
  "key16": "5aMAVjUpaZ96BHrUUC97K9Xsqai9dy7KU7ThaYC4pEZAFyfFFH4PqoDpCmNFZFXHohrB6NNeZijxZcgBD8ChndTv",
  "key17": "54NhhyZQWLteqCZ6nCjPrqZ5kkDTm8LQ4TgqjiBs2VhfZqoauvtbjCfAJ69YQJnhz9vv59QKhD6EcxR1Y19xKANv",
  "key18": "R5xRsbUoejxCnkmswq5k7tJCW8Wv4D6jiiq86Mrr5QqHH5FC2UWP6zKKqFX377Wehfpjttg6Mq2MoKAZZzpnX32",
  "key19": "3oKYYFD2WScxteYi71an5AiuTuaYypHzYtAF28UMaagwoJH6NzjXaoJjMAdTciZy9UaVwhgz6X14AqchrDnYHmtg",
  "key20": "5heJDqpcoZpLVuXvoGLjVaRXs6592N6vrQKDeHZqjDYXGrCn231CpAAkYQMwQPQbf2ziVSCgiqyy7msTjiGtnK5G",
  "key21": "HRPrCwnsp7b9eCVjwMvPYgJ4dmhSzKSFxwZbJyvTHuVDcEKvCq4QcwitApuHGFvD8arqG3vbwupu36bsZmi3TeQ",
  "key22": "64fBcEacD955f6YPpzFYFcmGU29QTcc4GeJNyPBJ3oyWAnZPw5nfXLiqQD1UDtz4F5QTeZw4CDyDWqEnCvmeFYYR",
  "key23": "2GKtKQ9oP7GvJziHhf4A8SEsEbz3S4j4iPvHig899dEcf7XqgnYkAUYZHiGUgdqd3o9uXwVJ58dYZrqvSxnd5f4o",
  "key24": "5g8ikvxnPotvWNR4ZmUSvYGLGGj3SopNxWdFmG4ueDx74dz5sygjyB4Xs7fqqNtsQCVaP5NLYwwAVWi271ma7LXS",
  "key25": "2XB8cxwVG3XnRA5Nwn4jSTowFYpqSH8eWHUUwFTqxkJPegV4pY8bQZYg61nFmtDcXHpjgvyiYbSAyxYQtzFCDBxj",
  "key26": "2vLLgFkwBM3hqBJZLvu5GT7ZMbg1zRdMxBTtvggjJPdkx9Ziw63NyxPXGhrgnuSCyomD74KiTSg4aCb4QEWf5HPJ",
  "key27": "4EoPSR5182NAzv6mBagDT9tABvyhv4ALz9RpCpa4HpPWoTg66fj4QHUKnTjip6yCy4ASQDgo6w5UL24SaFDBwtSU",
  "key28": "53SAGm6Sww8Mjt8V1TjJo4Pw8Fo8yhbBk23qVurX89756gUeACGBSKNaXQjZZsCNF9jqoC8baaW9yZBXHHKQmQhd",
  "key29": "5o8YtPs73TKW4w3tMcgmQhg2WxApuSJCYYDHC1CWSMXkoCQPo5wnzxkiqFL8NZmcJ1BJ4W1qCGadVgP8ZT78zT34",
  "key30": "2KU832xj5NfTizU54xdXCxUpDu7qUGzC6NwPVwahe9pHnLj9Lz7ebfJqTGpsgnbdYXqSygv8sQGuhW3UbjeYAGLC",
  "key31": "2dgJBAZ3yvW79no7YLpNgLRBejt22qr9wCN2afKQRJYRsBa2TqJcS19FkqffzjGs7QWSTtnaEFkPs1vwTohEjafi"
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
