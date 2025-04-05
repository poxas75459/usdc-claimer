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
    "647ZKu386xnDuwfQMHo7Z2XTCw1E182tNkeCGuebvLPzR8ptgCoPV19bahCisbWMa5twxai86nFBaDdnt9or7utA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBhCdvKHfRpV8sZmkGzVxFVp5YLDGxPXc2hGwy4ALgTvaKfEbwYBRdaLxXP2piPUmy38jhWHw8aDeHSNckxbE8z",
  "key1": "4SftBDmYZV6MSZLSSEfpM1jzGAAesBi9ZwdhJwukXx1QRqp5wFx4LArTYzbmPWpULdiNAXi9N77BsdzpMM2yFwys",
  "key2": "3YPuhGZtNP9NQgFpmbXj1c6rcSSYdRLCbwny82YPPfJX6n1ZdBA6eYcH2JDAQinqwMXZNdyjUdZqq9LE2hJ6DxZN",
  "key3": "4aJPNCLVPxV7renXX8HEwxCbiru9HjpgP4rMaRPhycviaYrbBaCEMhxjfwHxp9afbahWxm5V8q87724jMCaAhqBk",
  "key4": "63X6fVhLhG3TM6TLWTGprd8Wx458i1XRDTrFGKEu4JEYSm4fvNBDZ9DwAMykVFDYNUR4n2UQ4dHah4dmgAbjgK3u",
  "key5": "4E3rAKijdudGJCqx8Tk7jshJ2MZGrWUHnPoQ7x88nNBgZdfNMnR9ZBpkbAggQ8FSjKEiU3Jf9zoC12xYkC2Gmy6T",
  "key6": "Atu1kseDrftTsorcLsCkWMWN6Y43ZueQLdnSrsUHAPsuS4ncugrSHX9avHL1gcSvKLNJ8YmJ5n1P5VMQxAs14vg",
  "key7": "4d8an4FWFYiiQr3Vubpq23z8VSwBoyPJR4z7UJBxSzHgThFmuUXh3zHws2dVfda7denMg9E6qdzpxCkSCa1K1Epf",
  "key8": "3afRSxbxomeXaLhLyQYQtnFViZTB6REELFnvLj4aTnKPaYFfrzARt1JbPqyopVLH14NewVS2CqbFgpHDZQzdqoJy",
  "key9": "69uvoawTwxh5MzA65oR64qYFJyo2sfYBD4ZSbhF16CgdU3scZqMBAQasxJaU78wjaXpHoH8KgKvzbpTKzs6XBmi",
  "key10": "2UChkKY4Rz6W5ydGjdNmaF95ydD295ri2NW6u7rk9LcBoDwsvksAaDPXaC1CLkkGQ8vwE5viJUfGjzT9ophNNusv",
  "key11": "4TJkyEYww5XsYvDCCGgSamJZ1mLsMPj41tW9N1JFS6MnwrfvjXjyQoURWkHk8z6kbtptEfRTHgJTjs3bFYjThiPQ",
  "key12": "ERpj2vKJ9etD8tr5dS1TE7zVQ1xpXwUsxKbe5v5K4dsdFJRaqH1HqC3w5CsPfBnxrbubueCxKsMrgkj7n31M82H",
  "key13": "23MA1CN3qwZA3CHvXWrQhH3TehA8bWtjVnmoWj9mKocP9N9wgYfuNpw9meNGKMQiA195cDNf32PGRGGkGdzDKA4F",
  "key14": "5SgX6HTCYsYFTNFY5BijcEiT3XxF7qfjo1wZXMkuQm4bwfXTvMZiaCmevKwu6QpxCd6RttaHV1GXm9Mi9KFjQUmz",
  "key15": "5yfWguYYiZGo3p9dZsAkiHmBJQTRV5Zh6gBP7BFWtMGPigxtHM499BSTYAXgVTUVandzL4LwJ7MKodCTGnKmfLr4",
  "key16": "2uWbjmvkwBTw9A3rH3TAHSaCgcLKV4UuRmaSUwug7vzBuWXcRu6YC8mc6gZdstXDAUp682EbJ44Dhn6BVhm9Grgw",
  "key17": "f4kcmq6P7VDAFMJELQUcyL6vPARVcuqDTADZwr4QmpaGUUM4JoSNMyiWdEfjSpF9FWwkamQz5hs77ZHSfaXWCJA",
  "key18": "5gHfbD1VsZCypZKDnGcLLJA314N7QrH8VMonRNf9i5BkjUXZwwsV3vG3Qo9TR3M2FAYaiy3SfKgkFRQoTdH49fbi",
  "key19": "nRHPd8ZunQUb4MgBkpKmUP9DZhdatnDSyo8xBR46eJr7zfoVzpov9ZFYRdaQ3J41gDfQuPgFJEP2iCFAsEV9GeZ",
  "key20": "3G3X91s6TZoXku9tWGFKFMQDKfCYcBi4t3FZqG2mbYsKeMdc8ruyTgoGEysYxwEqgDHRktzeLK9zPLmgE1azz6kc",
  "key21": "UTA8kQsbVd4zXjVfm34siuxreeiTV43QCH517fPSw2eTkyKudY6tgrtpGKytRjaYN6rFitNr5mEcZNMo9EjnTz5",
  "key22": "nyHEz1Abb1iCxsDgHYNLbhaftfQS4ySaszMMisWaCrQXqeLai3cwNSf1rMBVnE4Adq8TEwWENPkAmSdsuZ6vfay",
  "key23": "3SLNNkFFcW3g9PqXp2VrxDpp1oqfWJR82S5GTpvA8eRFcBfheV6Fv9HLHFF5okufNwRHpufywb8huQfdciRo1uq3",
  "key24": "2fBDaQwjVGHJnSxPPgbLSQBnEPmcZUT5NRK5PoaTS4BZ8TpYaNh1PyyV9jw4fgK5xpAFqe4GRRpnC7Tx7dLYE1AD",
  "key25": "5KqPzgfqKmWG2M9zSkbPkRbzrcV4SR44FXhLiLHxwbfVgh6SXx4HyFkKzzpZQjNvdx8DMG7EpLaYFFWQq4AYwHhe",
  "key26": "3EtkoarRZgqVqY41K9ddFb7JiX9xoLoLWnoCeU9Rg6y67AkHhES3m9gjFroo411TggPzVZA8hQJm1CWcacMPYjKb",
  "key27": "FrPA7JGbEgbiVukqabAoujagVexfo8SwcQ4EZQ7vrPTHPLpmJrkHyTu9W4aBNa7BATJL9ouFaMpB6rfuMNJGh6c",
  "key28": "2BPgDnCHT4uHz8qd4qZBZ23eybkqiK4YgJAk6omG8V8zLBogKq4wTCAG2hfpH1rbng381AxPovjHdBVVzPyVYftD",
  "key29": "4z8ANMJEYv1gzZxAHPQ6TgkFfaunkMWoUqauQrH5sbvK4nGpV9GjPnjR3MRvbhJzHu7Cg6PSUtC7xxZnEVhgxcXa",
  "key30": "WxZNJB3rxifzTwy3aYDYn2SgKoobK6HJq8555YTJNm7ZFZZChqCQa9BjTqnuxPVwVwGtb2VMk1Fx8zYn3K8QaZV",
  "key31": "RA1tRZby3TZpxRR8qW4tRxoPDB1ZHgE4eeoKd3PTAT7wJs9kivBeCdyRf1MnwRuPDwGBiw3faQR8R26jatNafFN",
  "key32": "3YqyNEfAfVMpZriFMsq27YZYYycrJ3sWXQ8tEJZg87SxHMKTa8zHbf5ZZ2A37rts31EFoVHcKitD2r2zfLvd8qNN",
  "key33": "4ncb6u9GxsHDGDfAtjXLzbPWDhQ4h63HTaUugt6DtLvGiHwW4WGqBTCLBL3mPB66FDbM9hRPh8ZPFq7aoYfiVtMp",
  "key34": "7Y7WPsaB9yCYQGVHtLTgJsK1EpvhgHP46oTWLTVpRHGwd8MubXDnQVdcFdnnshuDyqLomzDA7UK1vV8HzTTdEps",
  "key35": "5151V4dKcbuGRQLs5VGXG4BuckpcnjLQRziho5agUr51JsmDLsC8onPfLuVsRybESUEzHsgJUSDdkhFUtWzQM98y"
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
