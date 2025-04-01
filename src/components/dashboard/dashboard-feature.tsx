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
    "4Dp64Fv3FWXcRsEwznzqhzbotn7HgesGC5dQLKX1jjigo1Yv8k4GV24ksRx84RgXiSJfAbSEFusvbFYNeY55Pzga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJNavijZo5pjTmP2eUUwLr1UFvxKbepGSkw8FvKb5TewUT75wDT67FNDbg9GKeaZLe1wAm6ofAjttsSuMkDYuZo",
  "key1": "4Vg2FHNeLLKebRiQeRT7m7BPMAQHWHBWRyMAGx5yvw56V3uZMJH2raJbVE1ioCAnpQpRpPYRknEFW2GAWVUAnQEA",
  "key2": "4BtzAoAtyZQesSQPugLWLmpEDq5Mf5zcx5x2D82pigi5u5qC5VYTo6YkF6fuEq7k7BLp4TyUMDjspQSymKvukW1k",
  "key3": "2w35ekT3XfGM6oacXvQmjhLRmBt93jRXG6QbvGMSsYkvaXmpudbW8ViKF8UEKTx7PWxkKXhDU3LGdEjcJia1pbP9",
  "key4": "4VuyRP2oP5H3C4uG6aBHBN7GU1WtqH7M7a7YNT8KTWxRLNaCRsxjAaEJ2WEbkqhiovUvSu8DDtkv5Vb7wFhLU9yh",
  "key5": "36Fv5b7mKuWXUZ8uYQgoDmRcLEhd4rnTi2QaH84knYU55w47SotX9GGTGsJDNLhXqbTWpLPpMdajKPty2Cgd9YRP",
  "key6": "2eFFUtMRkRcyiVJXotimpMDEpozDfwRaupQETdWWais66TqSFmgKdEsf6mRYecXpx9zd9KsxMgUkN82PuqooScdv",
  "key7": "5ZXFc6fRFdkyAQRGuMMn1TEvnwfAQS5R2Mw9JaKnoUfmujwDdGaZuYjbeUqBE7KaYFBagdXkzTjgiN8oEGu3dw3Y",
  "key8": "hdnX1pRp23Wnv6LHoCaQ9N1MPdLUD2PiAw8BvRdWcBEn29xUPEEWdguvf1a4ENXB3gd2tLFE83nEUeofgVmJzrQ",
  "key9": "66xWCYbHycLBwGG4yVgQm1dKSa63yvNkonWbaETTSTCz7beYaXEMbYqnJAxeivVzfnK5BHBELwB6uDizicB3rcMf",
  "key10": "kbf3wVZtAEz1aZvGAnk5pUsbSWBRLKb8Qo5QEGHKk28CPLYmGr3RgkRuJbCMoHU5WbuPd4BphjhZoneBfesmakJ",
  "key11": "5cShF4KSUjvcxw1Qtyrstuixse1EMf5yR1k8JZVjphx5oFLfS5fBohdZA7Wt5d6DRTw2oKXud3wZzLBSTv16EL9K",
  "key12": "4ULKnADkXjBpv2zJtBPFt3puSiQnH47Vc7fSeLshzxBJuCMSRypRFkXQ1vdGkSkVpu5vQC59Jaqjt7c3Fys9vcpS",
  "key13": "3jqDHUAnoqzeCNK74pY372eskt5nSK9bsAAjJUascyR5djpQucRFzJHCVyXZd9gun9c78MwDh561xRRyzgqpPLSb",
  "key14": "4P9E7SxNZzqMJc2fttP5QhKeNbhuWmdd9YjK7SSyS7o3cKhCyS3XEtWV5mU4EENChxLRzH6StMXtyQm822o2YFzH",
  "key15": "4yFLp4ZBPCqAWzxSUwkwSyFiCFtUjLSKpzG83kdMBLw1Smc9jYcguWjxorq6FTeTbav3zeppWweeewStZZRpa4yx",
  "key16": "4FvxVN2gfrWGDag8UWECizkC7rKuors6G6UyJDE42f4vNfjDzwdENETDA1s92imf6iPQ2G87a493Bgv64bMmWVnk",
  "key17": "3rLTuTC1gUTUiixCL7b1ipSBwMEhyZkbqr6s8PoD8pu2X2zxRe9KHRZ6SEjVnUPponUTpvmv2Drhahfey8guLQhU",
  "key18": "5hzdBwQN3Fv5jaEU8LTKtsnNbfcuQLF7ycfmQSF5jyNW5aavDMHunj26TL2LYKSndDAoXXiGv8xG6MZ2FWKiSgs3",
  "key19": "4SicaZU6tnKYsYKecHx52csaUVjBkuY5HuchTNDZRvMZHS5tRNKW6cCXX3bG6YU9kSf9igd4YM8qX2KC3yPkp3BP",
  "key20": "86iQHC6fksJWUzxwNfT2cRR3G82qvsiQ2ivS27pTVzqWh6pEcNBaFkR5z3qonmAkhkV7i5GCJemnxZJkyucYomE",
  "key21": "2parjz8SjcbDPx35G7tY7wP4LR49Zns2sK1WkHBMPwWooMnVFPhh84tHdBF8uU4SCon4HSJ6TnZ9dbhcd9r1Wweh",
  "key22": "zFnJgqY2wwM1ZEsThexjP6wLjZnscfSC1rg4ahUxY6phVfA5ZUqv1CWgqhp88fKrAqvb18oUhL9RvKRuskhyAg4",
  "key23": "3mMfc4MiTJ7FWWudqgbS2oFJd7tCToERzWzyZwadEd6JwYij4wQcJ3kvMR3oirtpgn1gnPHHfzNEY9qoWS8JP4GP",
  "key24": "5zPsQeqLaF9NAPA1dTw9ALxwnzrCXCv4dDKwWfJtzyvXmxZLqxBG1eHUxK4tJDBTHy7irYvabLyf3oGoiZ9ZBPfC",
  "key25": "5Zjeb2WTYC6H91c8Bs97BHT9AQyRDDckAB12rcNm9fSS1fTNKL5NXB54AvJeKDivX2jAsz7QTYeYcgRBmFAouAuC",
  "key26": "3gYdnPJkRzZtkJjuP6dgArpAVCwJiw4dBDsdRx1GxZCEDW9PFgoGYzDvGzaEBnefqvSXLX6x4GLB6j327MH7FsfD",
  "key27": "4qhLziEQuxqjPT1bAH3pZaMZMr4RAeA4N4mQtoZpA7XnAJH4D2TTXVXgkFKjPKcg9BWbxECPSGCSM2rQ9j435VoE",
  "key28": "3t6Un8F1rWVkGfc97RZdJkU96j4BaRzbfECCyk6XcbYqhHd5PKNToPEzhg8CwerGMhm59QhPMSqz67XjiGqj7j7T",
  "key29": "5Zk47hzquHPe2o5PYEWdLfyJjw6yigNKj3hnThMg5aW6rL7eqqeDz7AGJtMasCyDGdhtNvAZRT3Lwsb33cDgbjcJ",
  "key30": "4uU3bCypS8itiLvRde8gHc2PJemXxKpB1zU3JVa5bhGny6MdSEouDzu3RzL4M9XjbUwvKVBRn8XgifEo9B2DZgnK",
  "key31": "2chFAjzR1xdnFhDN7f6C8n5241umTjHZ9psHfQnC6D97tN4C1CqeW83gdTL1dLGaWnVt5dRodZhi8ahcPCiqx5hA",
  "key32": "58X22GuEjsfunCJiSJiTFeSCgzKcoGvRUefDKzNy9RbVES4DF8tP4MgUrDgiK1x3cgapeZfe7weGKwP1KuiQLdYt",
  "key33": "4eQDeQreoueAePTnwSDhtWvbFSijDPTJpFuFbqxK81fbUaGtArq9bAJ7vscVe3cuhRYtqccAe7ZW1niT27EWej7r",
  "key34": "aSDx558dFNbrvf2gJ7Wn35HduBDSC3uF1PqM1HcYokKWVKEFdJfU28Wdnw68xDCuoYrMWn6ATRbMKHvmJyC6DCU",
  "key35": "58kcinEA1xtLThKVLu3PX4UTfrT3TTteHr8A6ZvmbB4FyJ6nWVZKW8YYFez61AvXJ9X2AHwjdruZ5QEveTGV6x49",
  "key36": "2kCK9mHZsH67AWmAxzN7GuTGZdXSKU9hDSicz8LUXECqqMRsPtvnryQieSGLNTqFDZoah6QVfqMXUWrAP3E2iMMG",
  "key37": "4UwGtHpmVq3koUGtNuBC1a32QCe5Mevgf9bmx3YCNA96XrdUof89whraMYiU75J3LZhoW37NYMBoyXis6gqPAHxg",
  "key38": "3huoNrSdwefbKaLhTXfATxRLY5nZTbATKSHcRCeqNF5RqacgSvfNCxbvY1ccPqQBp2UeNb4NUPQqpAYNd41PpHAM",
  "key39": "4fJQyFphLeKJaJyMfZZSveZeW8T8HBey1mSV5sKryNzq7sSXfvHZV48h3QFX6fvA4wNqCswyVbJLSsZQ476B7Tzp",
  "key40": "4zjEfn16Yrj2z4FPJKyaTVzpZNzzY6hG1vijVWSNNhLn3ZfimQ18d2djyN6Bfs1d2rhHLVJznAVeUnAYAHA9ds8k",
  "key41": "5JHoByWnHgJMgkAjpRgg4XvbDBPFan6XwJ1gax4QwDFirPpaDTkEFhWrvFdbd3U4Ly61qGEmiCQFRwwNoyaF2rN9",
  "key42": "4gs4w9tCQPJ28CxZL9hL68KAooAxV2gm9cuPZxreUZoHGrg4oDtBQEy7BpLdkChJpE5UhgiEZLXms6U1pu2EM23K",
  "key43": "4XGxtqiisU7GoGUzXqy4NMAxJCLahE1MwWh4C6LV6u5v4zW64sKMfkagKo85ppWRq2yCbjVWrnhX3Q2jLYk6H8jm"
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
