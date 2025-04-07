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
    "38gUzSpQ47on12iZtZjFvyNqab4QGxVjQKZ5Y4D1kduJCXGx5b1rzhaBv5M9uDtzHS1jYjNhQTEeuY38VT2W4vke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BfouGwz2aLPzYFnQnpDeFjRjAHUmbRUSCbrjVdJuFV4f2QGgaY8jGwFPGRCt8TpCzVzzn5FTvz3h5XdWBHhh5qa",
  "key1": "3ADRbykmVML1Eg1PhBdXARkvnn9AeJfD3c3hxKbjLpoxxc41FNfWu3q9oFzS3wMkANqMvcxGqk3dR4ctn5AtmQwh",
  "key2": "3gXFPS4btj289GWydMqEMH1e6wi4UscF4d4iEZAX819NvPxvs7CLdhAEC3HCeXAWt1YHwLkv1s7cGnd7QLdGnmPp",
  "key3": "3RjyoLuef5Y62SkT8U3r3djRx2QrugBMKpg2d4Xr68iPxmXMgR7nsMjH2qw1y92UPxN2uuULqjb11E4uZJPAbB1Q",
  "key4": "ZGA7e5XEsWpYBkXGASymR1jK99WxbjCmqmPz6P1F16g6GaLLRWVJR8z4wfm47PZm5oLpyNmwSh4BcgP7eHvyFyG",
  "key5": "TAg8a4JvCA1Fuzg1SxNExNRwyu7qbSQEbRYLafEzCGoUQjmfd6W2rJ2QJ2Qe1dKRWd4xUckZRU1WywtHwnspydj",
  "key6": "2M2mhzniJD5PCWsEmoerztL1Q773J8No9AdkxgWRaZa7CeJNrNWneNCZcjZfFxapV8CGvek8AvwpSpFRF1Zzmifn",
  "key7": "4RHPsKx5eemV1HPx7aTHp4B5y5ZADi5Z59BaeENEsjhMa7SL51sAB2a6mdyDPKgvSTsXkMKYzYH1U11V5GXhhvDf",
  "key8": "3QjkhtViuWqf8RHW6furRntgA7Hk6DJAk7TqM7PpMNYjW14TZAbKbT83neh1Q25ePAkYxcDNH1AdSgNZLxkjMiKf",
  "key9": "W3Mzthyzin2m3CyPFaFuZaKL66ZuY4L2oBYnjkZNTJ3QTsa3DkMnd3ThRjoDJu7sbYHc8KLWbgdPzCp8SXWn3rg",
  "key10": "2BS5C5Qdc2vuvR6E6X8HbJdq8ZDagANzU4s7WqQ1o9UTGcPNxsunfjFXjVZ7Z2wosX5RXfxTEst8eUoPpMcwYJvH",
  "key11": "3VnTpjHFwhP1NfabeaXBhygZaCrUH2quDsMmsMcSaw8UrgpGKfB4PvvYQcY5XUrMVjELqTc7RJsehU4fQaNX1ip3",
  "key12": "3EEpp6zZPrZCwVwvYVFENL31NK5Bixx7sQfa1soda6fzY4Mn4TFXbjhmBg2TVnYVDtdrrGMjvZPuPHqwjsuHo14d",
  "key13": "3DMiNncgq2fo1Snwmf8dYGdEpLve6sCgYtvEJJ9GaCozPBZkGXm3uvHgVnpNFirQRi5GrLPCqSbaME5VqGhzgqpD",
  "key14": "4juVPFUiTnMEePwnheabwqjUMgkKsCfrTH57p7BuUXePyYNcp8MEBmyx9hQLuE8NW8iX83M95cUmuhF7pdA8QTpN",
  "key15": "2YEnpFDQrYvtSgSFWoxF5yZA9ZCPjZAohghoJ2e4Tpuz7iaytswWQysjAyFCBKG6JD6tg5xXSTHDADR6hJxFqbYw",
  "key16": "5cNHK15J64bbPazcEJ1zyF2V9ryEV37JeYRFMuBrzyEtSPnF2TvjZUpZV5LPKCjmFQKUoGMYDQDjaQNjkFTw3k55",
  "key17": "2Rw149uGF99ZgpJ6cBDxiZ5tbnAYaL7qyTjvK7mnFuqGYVfJwt9w8xnLHYd5xxdqwCvdb1Yj8xEtvoD7inHWcC6F",
  "key18": "5vqNCzrTJhRxbC6HTP2ZGyx88B42a3Kyh55iVTLdKGCGfCC68p5LwzrCLYNGhK9DJu3BGthiJhb3eLnfnmDitHx3",
  "key19": "4wSDikwUZYydg6q8ruy5yWxPr9xGLRt7UPZUJSkQFz4pkz2b9mvUFX3C54AYLshKTGGmvUcYrQ33bWs3rs7Q38tN",
  "key20": "572vd1nbkZjH33ACyhcQsA3S4bwddVeZBpT1GZVHrsBGSmZ5tGJNeB5GMM4F5AJD66oBvdCUbsNHbf4xVPQbeFex",
  "key21": "2sHTLtx1jEtpPbiY2ER2c251ouUnp3JdDeQUW9xKBuA2rihKcTwACT4Dbajt4S8TniTu8wHLgc75KXZtEMWh1wDQ",
  "key22": "5gkrVKXTVwy31WriJ14u2e6FzhQJRdidi556rbhAkWJbY6s9TX1gegaAxwq2jUFAunU4rsSfBXE9mPTHbwjrCsNb",
  "key23": "g1Lut87H7RQ73z6oHmfXtvVXSrTLhcKFE1DN5wP62W8TcyeWqYrnaYHcy9cM9hj7zSinmQsw4jmVVrTDgaTpzQu",
  "key24": "5dfivhXEGubWU1S7kWm4XYo3Ec6FjNXM9fNv57SLmYU1jege2jEXctKV53jXDmDMdYHNwp7X3rQPYGcBQyLF2HDx",
  "key25": "zRC6Ga3p8HmPTboUJSYcT8hLWLUgyprkuKocJD2Br8ZZLsYyfaBtW8xk7mofPMQvAk3SkmDCeQDu25Bu6AjyzKi",
  "key26": "3WDgfywQ5btYuFMxQiNtZ4qjB2AnWHVP2R8qKugVGudNAJQJ7Eogn4enUkbUUekeNA577bgtERUkjSaNXKypPo9P"
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
