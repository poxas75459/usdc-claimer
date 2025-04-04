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
    "5xraF5GRzffbrdx1zr5kQzqjfxaZej7WMSDNNbuLM9YUzLHR2kJ4yTq5wAN9fy7mUfQccLZtPfHoDpervxYHhdb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AiEFjFhcLrRJdXrYfNbo2L5z5upQkXFK87sLUumQgnSLpiwhuRfTcc8REWZSCYB6aV89NBTuSdPrFAueZ1thbjB",
  "key1": "2uz446PAkG5Qn9NRowTjMRnNLLQYsnz6kXMpK3MaM88aUmyW6zTmWbPJaXvt7bKnwP4oozAnRV6CWwyi9KLj6Yxv",
  "key2": "3tGwApX3pVo9WC4s5jiLejbZCsuSNVnf8nukfuq9Xkf8FoJH5fiyK7fNR2spaN5QgiMSAci1z4x1X8MKtT6QfwrM",
  "key3": "oPa3Sb5dyW3S5gL35otsxkqdnLk9pWKwtBGbkmiEhFbLkR7NsMWhtHihrPsWh6FctPRiT3B7NicjPoaTx6tni7e",
  "key4": "5EZkrefcFT7YSrFN3DrpeMW1tV6bvGLy5McevTC83oP4wRB42ABLW2yQTfd9kKrABMHf1hPY1WaEhDaWp7Vr3GEN",
  "key5": "8y2xJDoxgYib9Ciugdbjz5QwnKsRChGR1vqSZN8ccUbjLNnAcxy8pJpTPe1TFWGiRKZ7WmzUKeCDRNTYFyryNSj",
  "key6": "4MQpn3gJYxWY4DrLyx2wiKDpTYLJ59yJmS5xVXbex77prewHGv1enDnXrxh2gDEYjXEdekjL7rqN8geocFcpEPWU",
  "key7": "5ja3TwF8762qKM3f9pMiycvfmKxxZdCtPj4SVy1hHVD2H74Yoc4mWRUUMr3X8zzERAK1DCMrczzZRMzpgUopWbaL",
  "key8": "2qfge6RxxrJ8txpMVF7ed6QE5vkrZnNchMSyEU2QpD2iVeh3RQQspJNozgfSGpkoTxpzGz3KBkGWNJxRe82XArmt",
  "key9": "iKyrL52scvFn3SoWN4evsxc5FJzUbtGEths6c9XP8L9Mcthzv8uaGMGmMNW8YCbbpDsdbGt7fkcKEvxZZeEXMKR",
  "key10": "2auma8DrjXzRgitcmpwWVAZNCLwD9xEt1EbSMAuRxMH7StwqYMMVyzzQKiv2bf9iY2ZNmr5Xac7SvMf1iLV7ak7P",
  "key11": "5PMt4Kv8wVTv1L27Gz4vT1gTxY2PABVU9KkmG2LickP8NacX7kZZA6UzEXW1SkMhaYj898zEBdQ3WsfPYaGPzQpy",
  "key12": "5NXHGET9UqSCyTyDYPEaGfFSfbtjNPQ16i3nS4GRpKte2bgdWzfoNdUTRhvxz2cx8axqRL41oaeAQjYLqqFeAH6a",
  "key13": "4UfEmVYbnNGGHfSvXhNPGw4Jmyi3WPZRAckYmL4PNkhqd8ctbwZ2EvTziYDc4Gt9mBLcdQAX9e5A12XvzdUmUTRZ",
  "key14": "4pr1TL8K9nTJCyMdjPaTU8bu3SpHiGvH1TKtscQd3ChrErqb6jSvb8quwY8hb1qE1XPYaSUvp5Vpj9nb6ogLDfCm",
  "key15": "4pZjwZzUuiRRFPJtbY9pc5bfv9JdvViJ9X8MR1S5dzwYSKhSQtFpb1hGcbvYN5B4WXLP6UjRsZ5to8gnuXEkp9kL",
  "key16": "45xdBXA2q9Cajp32tvGUVZUmbDo4Gori4EST6HrPGskWBUTCbpcLTYn2CQTL3QsqvHUwKgfx6oYFHZRVLrvH2U9E",
  "key17": "3q4jPKMLpmAKAR8Ray5RqPDfB7YqsStJqbzPN1xYuVzqHzNoTXTj67a2yoH6M5aKAu6fdo4H81jCxaK8ECfkSLq4",
  "key18": "Jk9CyxdvaefWXWHxsCBP59ogXxvDK9GZLm6tqqnPpNxaB7KFo7k3JE89NXxrpTRvyq1evZPRA432LjKum8d4csx",
  "key19": "5JQqqJUvMk5zNu3eG9nUWVyv9Hixz14ZfViamxTz8dfSz8nWM2ybf5d2z6dP8uCV8M4mc9by9oKwrk1xN8PVpc6S",
  "key20": "5WqTXGvd45JpFkm6hKpNP2KzsdxX3455Vz5LE5Znn54eiTpXtHuGXygoZQo1Dh18GdQgCEynQQyHKiK8ZMoWFRkH",
  "key21": "3Z5LGQVnfKf35SxWcSDK5gihC6tnP8aWkWHLD2Gg5y7iD5qxjVqkwKQHSfs2QRviDCCGuvH5yNumomFv6zcviTK5",
  "key22": "K5q5bMfAcFZoG8qQii64RqMtRwuzLtQp1xoHLQrF4xYbcFEfXd9EwtU2LTeCjTEqyCKcoKcdhhZWQmhZWhgGQDs",
  "key23": "2F6GgUAwt2BzdQwVcy7Yj3hzM3RorCQJEyotoYwHPJBMqgxjFVVRyVt59X2f3eJe9BX2JXGBfj9c4pDEhJyo7PD4",
  "key24": "4k7PEUmDo3e9QXs8aQyhZoZnHqpUgKDiPGoXMeZ8ugXLd9N4KERQCHpG7KWYVXd64eqbFpfegTK2MC12r2GsNruD",
  "key25": "2MDa3yao87g3nrmXmQAA8jjq9vzfRgtF5kjG76tmtqsCcrFiU6rzFKYJJGnYh7ZxSWdYBA4CarddVTUM1dK5hTyh",
  "key26": "4LbVukEG2HRT1Pyw769bA2thRi9UaQhAn7UGQ9TACshCFhawNuMuAZnmrETS1zb2r1wq3K2FMCyEvjZdd68esauU",
  "key27": "2MPLJHRwfXXGeShzAiWMXj5aQH1t9s8WoLyBaG13Hx4rPXvbrXP1uPubam1tA8q4yqVjsEt2ZZYhcdVSLGNHsZqR",
  "key28": "363KwcuYX6uo5s3UP6VCNssXJGDnYoNfDZQ9SCKzGuPRmPcyc6QsrxSyHDzh3ocKUnwWhc6Vv5QhAprmLeUDSUYT",
  "key29": "34bDWMM6SFXkxFDjj4kMRDZSbqb8kZfgmPjpNqQ97VrBbPDpv87TasKEjwqpxfGBL7CCmL4G1uCUiQ1wE8wQzf31",
  "key30": "2Gif9AQATVdpxJWNn86gKuczSbxW5aaEMPwNGDRy48vxT9v5e3u85qfk7HQJhriJRjWWnmj9YvVxi43RPd2dAch8",
  "key31": "rfkcibe3g7CUsARtcRFwJhaVGMdZ8tj4ifZR7GidrodvCjTZZpJyotxdDdF8ggYYCBetTyPDHr5HxSPuzNH5qz8",
  "key32": "3kvfnFKCqr8yVqEvXyzBZMHVAUUEjVye92Fid2FR5MZLHFwXN7JYQCGsM9gEQGZgVs5yNWyhHQmnWu9GsRyg9FxT",
  "key33": "5uy5Rqxcy4o9RatGZ3EJnhpU6gRkbzitJ9BPJSpUFsowwKBbesfihnCMKEyEPwPLMPWKXrMo7puQfasQvxK9GaWr",
  "key34": "3SEuzgkx486wWpBXYKbTiTp6BsDZ292gmeCh8bkE8UNaD7Ks3PWUpbHphuopfrsg3RVA47mcXjJ1hHD1z6s6a6an",
  "key35": "ecfNGMkyrtGK2nTD9dgm9E7CAUJ4PT577h7LvBnFju7XA3Hy5gjd4vQhJiwANC5VTVyqUmwaBqUmV5KGwtd7q3p",
  "key36": "5W7sFXLbkyigKqixJgRF2GUWTzLmQmCutQYcvQgEcgGaD2qs4goZDDyWDAAwCZctNer1fBdxBcxdxaRAtF7QSxt6",
  "key37": "2mdDEoHV3ivkBKP21KpcRAW6gRGdrWWZtu8cxuMtvSG8qPbAjo1HwA2hV49bLZuFn71f9s4Yh85BBskhiioQVVYh",
  "key38": "3BtmzsKxG5H7CjoSwhdzTHCFfPAPoCiRM6T7cU4DUoCokpmKzu1FJiJAcyBbGuCmr7iJGawEae2rTSQh9WGLtkTp",
  "key39": "24kh3WVJqnifZ7nkpfZoBTrZL7J1jpN3WAEZ8Huon5CBXTeSkQihjpwqdSz934XijfSaK5iPn3iNWbWD9quJfZTX"
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
