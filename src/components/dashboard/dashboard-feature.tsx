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
    "5vV8TqUbcbNeNoiQMZ1rfDfhkDNeUkY6L3ok7JcSW2Qg6uATaEtPbQZxn8Ka42MperUTEpCWYbaoHQ4SyKvfoL4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JYsx1dsTeTqs8iQCPDvU4r5GA5d8GpktT9Mfzah3hPzSKDcLV6BtWEQ3ZPf7BYsJgkuFtEYbzzgFmudigaoSXCe",
  "key1": "4VdDHiWxKRrSMRF8RNmmiFdCAyyKdGJbnWsRRh31a7B48oS9rYyALKgynBEVv9tiqtMeUij6ykSBzik2mW24YMUH",
  "key2": "3ocpBEsLT81C7ekA4MoeW2N5d5nAjxQYaJJtZY7hYMebqAzim35Aat31DFfiZhbr1Uwa3He1zDetGk1AECBNbi7T",
  "key3": "hUJVTHvPc3gz5vLS9rCxsPNa8mNUBcUy82KKRuzwRXgBKqh7d921dkdn2FMhfqk9reonsFrseYLU6hLbwgorrVu",
  "key4": "3twoDJiUd7RTsp6tfDooKYMj3gtbb5GvjxwQD4KtU5ghZiSiSMSCv7rF4rxUvZRN9veC2kh4KpC3FvfgMFtih2Kv",
  "key5": "5hN9VRnsCuKwwPa6N4WbuFRCeHh9gHcEW1WxEpGzCRPCupsrRfqRDfQ8rYnJErQTkTz2tFYFjng3y9uBwZ4EjAxn",
  "key6": "4RJqAfVzAgauW8Gr6AgXTWxPLwE5xZSskYWPdJBAcUwA7FuPWnHaWsaFKwSabE7oQD1mFAnWbQHp1s2fGBQYo7xu",
  "key7": "Ne6Ukrz1yj7MjGPFwVxksCn9MJN9BNFizM5rQxVYUdpVQrShjw1VfmX1HoFHfVWpKVkV86XubwcCGL6GBP4NvVy",
  "key8": "3bErpNEdiiYCYj7JYbw1MTkPXcgALxhaR8hJFfZwnkQHbLvac4uy2DuMUHZjcudLKrotgXnsZED44TtU2oBfzW4m",
  "key9": "3Qc4KnGje8eBte9utft8GM2ioStTaXL7BcFg1KREP92Cb5Sz6rZ6so2aryGSk8AFagPL7BbWgaszhkV7CHh28mKu",
  "key10": "4JeGT79TDkjAPd2ac1DQoEaUCGyBFGHJzdaMD7hCbM7V9FCqJy4s1Ce9atM5wx5EdtERrFx8DtQgBkWGSjU1Kqmi",
  "key11": "3gz7dPq8hFsUShMVquPJSX9ijXgP8HiqueTDJBBKnVzvw8Zz221se3iw71ZnaULVGEsBg9guTKJZHtWDnki2yKrQ",
  "key12": "hrQhc7GfBKUNQ5bsv9Qms8Ls3koqRZZKMTDfiNz63SgaQJhFTmi9qCY1qdRTVfkct1mbEjayjSyvo3ATAmuwpLD",
  "key13": "FgmSRuhZgHtWQhxnt3Ts5NXheaKkevpDfQCwBKSRCLa3AUTuFYtBeLPEYBLmZSDXdFmPmBYWyD5tJTyYcPSsozy",
  "key14": "2USFvV9qGSFzYd5c8S1uZXfVv8cFCHLVgYf679oSh8HduezECwHzSgNu1Xyeby5mRiuPQRLPL27AG7g16cRbmPDZ",
  "key15": "5bnzcb4AWizdJmbdGy1d6eZsY2Q9iVC91Cv4Gi8WqeCopHce19ftdmGWXD44pwNuejo4fZP776LYRP4gEDwHpnGD",
  "key16": "1xf64dqo5AB1xKUK6aBAFP5fAee53hBpgvb3LbUonvE7cebKyFNNtN4wN3DGPSn3k6R7ncFnYYwNaQvMa78zjVX",
  "key17": "3rQ4PAH3zbahEppAiKBCycN7vfgcebJ2xA64w3eDWbEZjzXQoC3TkHccvzzArN7mSfQFExu8p5uQL6zBc1qFe8fM",
  "key18": "3KLkcU7U3JpfNJr7oENNx15zxgkduz1A89Q1bgZfic7Wnm5fu4rng7PUm5WN91WGrdTZUJpJvxoj1eZuQux2tPwp",
  "key19": "3GF6bD8q1wtxDpKHR5H6HyFuGEvnv3ynntmAi7g7h2zu7KE4uK5zvmHw34cWFG7dx6QyeC1PRgSqwdkm6oqWgmvW",
  "key20": "62hDvs6mqjwKxTvK3zfwotzQ7XZz4mhbcL1vb5z95nyrGh7jzgtNQkN8fCmMVqBhPHgMsUco9nZq26fFG6Lu848k",
  "key21": "dHe2tcnpktpAoKtE9HwdXMGhF8bEVA2eASvrhDD4PYd4bx72i4RRgJSQEwyJWBnQrr2kppKqLeCH6ErK4h7qb9A",
  "key22": "3Ais3VRFJzmJrLfRakek9kbMCtspNTHVBgS481uBTnbJiPJmr99Wv2PBJwinHW3wzS4X5tsAhQh7C78tbLrmwsu",
  "key23": "3PJ7Jjaaw7vTxiVMq3QRBFiLcnooiJeYeqxdiYGgpDfShR4cFCsAYwPVmbU24Tj8a7Fi4SvmGVZntkjHifYWjjFc",
  "key24": "51nyCTdSonP7CZjVf5N2XkH3qHMtcLgTGYu21pYSxGiszpPpg83M1xiDRAZgeM9ZGvkDsJeW4NE5ZotnDay4gKTa",
  "key25": "5nit6EcayBBdY4XZGWxSswqbLV5Gdf7yKjxVe7ALbYv5No7ALmN2KcnMDufX9dXx85mEuSNixgcokRuoUDerMjkY"
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
