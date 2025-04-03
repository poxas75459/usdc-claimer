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
    "2Tsaiw6xi5YiNegaJUXVqtnFZLtmqtiYQPTUvCKU3KcZQDBaJn6uTGgFqsWdRzsfv2pJ1ZMJFt7xM8Yeyt35jMFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjZrK5sBZrM7c1ZxTcRiRVhqZFT1Jn7TZguShMSzLJSNXWpp5gjqoFHJEG3tJb1nqvmQ1PvBJJpgJcLQoLj57bw",
  "key1": "3TCqnyLjRtkuYnrtPE3L6BcPDTS2ExNJ8eqmcyYXcEgqis91g4zp2nvT3hHtQuWPbSFu1yCvPSJvCspVNwXJwtbf",
  "key2": "4EmCwMJBJrZPn6tRX1SAV2maMiGmWud23XeuYkm3e66JF91gjGXBZtpSwCPiZNqxz9qRp72mfL2skrGaBPzZPWGr",
  "key3": "55kUZLtpb6cN3zmJpcULkDfidQoeRe3pDx4NTbB7i13w9Lr5UXqM1qdLWoodvHfbcqyDS28a75fL24TjR9pt1Ge5",
  "key4": "xa1Csu4gMw7XJ1WfCicS9UxesWhgk2hj5UwXHFbfCGLvcZSr1p33fzj3AgPTP7YhkE1pdYgz9WemMwsyHF8FMLv",
  "key5": "2iUv9Xob6ab6f1tWVcV6idhNjRbPQPvkTXS8LZV3n4WSsbXWMu5uPKRYUfuSAT4snuD4wNWvw5Zpnpra9z47sq7C",
  "key6": "2ZNTKDhYiFsGAT9Mm9pkGF6otCKm6NQn42cMgyrTHke63D4AHog84fmRcno9pZ5vnsexsGQ3SHnEHPdoj4tk8j1b",
  "key7": "4bvatvt3FkMRbBuX8LekszWNdXMqHzZJ1WWRJk1UnrVKEoQyFaRWsmaTodafQZkvJPKroZ8XcXUTVbwYEQLwoJxw",
  "key8": "4CRNxzTzT4FvtLTngv1e9eYdPUTqAkGQCf7kiVnomdZHk31g4UmrnX8XPQGdCPi5HNXgLZGcMxYn8ajLh3i2NeXC",
  "key9": "cQyszk6Q7ehsRPwyLKTTN9nhoNeP26HDuAFAR1sKwShnptmJ6qkDAdmMV89cvknVt9oeKh66eKjrAoSw4Bp52Qz",
  "key10": "3kyQk8HKVJ5k1FyWm5Zt7x8MGKSNRp7PSNDsBFjJe3RpJmS7jYfcivqYtTJWvqXo9tEQ5zkshrZcbraxnRpQLMU",
  "key11": "5URfDYQGXBEhgJj7q8oTMBquZwiHhCFxu8JjPP5Q1sPhewS1WNMD1B5wXoR4JmyZr7AwwuUxUFXGF2T4zqcWV8qc",
  "key12": "3AAwSmdWqo6tn1gpfhHADH7Sa22jYMGyJe8UPP8WzK7ZZxbA67XEDPP83Re3wBTG3ZjVVxqqHyZuYEzPK79kBoVC",
  "key13": "qbYKekNvYEgRydRP3TdDfywDE3Vk2uUdBM7A9JzfHUMg9VRytgSzSLb5jM8ZZL7WtCgfJY2gz2zW3nhBttr6NZ1",
  "key14": "3Hb9WRRp3t7Fj4GFfwxZYDfFEukNhVSPPsXpuscStPPnrjiEvwdjjAkEdqhqs3xr1ZHnG9PpAuAWH7RAmRW6udZQ",
  "key15": "u4nqsmPiwDPkvf3BKq4WmrKKKgnQw2CVNWGXo1cNHqFEScfygEqBfs344A3sUq6YUfTrWV7ZuRVwWhJnk15N92G",
  "key16": "pSPfAu7vUKUT7zRowgujPCjmbgDoF4HVqpzFKFnRTkUTGcdsjZQ8UGxVyahWfqAyWZzhrXwWmK9MPrUpjULVtJL",
  "key17": "3hWAK5cU94udchqJXmMAFwkico9Gkf8qKCbNgw6pfyk9zG8i8W6MMGtoLV7aP2CfvNKoXeNPjzzrLKxKVgYXMCDV",
  "key18": "2sfRM9BnNMhfP9gvh9ZZUD9GQYz9RoLKTsRALax4tsMMNjwuXhUywKEroMYKZE5nBEcuLrMmYaFkupqRJwyfYhMn",
  "key19": "5dqvkzgd9hTdWsBpUde8QcDkDHqja7W5AKoSUj9rPssjTwGSUHspb6aeSmrdps8witeUNrYB5XsH5CiSuq65Dr5E",
  "key20": "3MJZufBKyMyijKKCGzxRh696goJeQgyHy1GFHEsfJD8Pz2UMgUbBYMYWRMRJtEUsBBf8R41b5bNBzF2mHdWfhofg",
  "key21": "5ErcXdWD723ztCvDFXVGA7vc5EqbhApg6ohM2XCri974d8yLjYfcGDZoueH36rBxZKgqPX7jK97bgrDwPxAK8ps9",
  "key22": "3PkdVELMKZZkAtyQx6ovKEgnUCz1sNJEbioEzLJnpAEB6yQ2KGG29GLaErSHLariXvvpY1u5oUeTAd15F7SEYLur",
  "key23": "4e17AuURhbD67k946CNNtLkzW56W177ZcAKrxaLEzjCFfzHgVBtDuB3zR1pFdoonFGMtYS5bLfj9RxQP6TcSPs7z",
  "key24": "5r831X74eBbt2GwwsvaJRns3p15kr5KAgsgy992pNsS2GLMkLD6pczbtqRbTdr9LdLEQzhZygbErGKrLZ9cogSEd",
  "key25": "fvGmrnQy2XrsGp7dncn2bJ6iS9XGzLaXyhpgxHcZr4TQ9iyPoPi171uM4raCYFCuEsLGesyJVZrxCPB7mvhApRd",
  "key26": "2qGVbhcxkik6zPRatEBiCS6FqdigDPnL6P2YhXgh3yVPmuUtGYfna6T34RLJbVcb2vXtJejuAUkpSZPcUdFtWCgr",
  "key27": "22YcHHVgoA6XBLXuhtL5d8gQUGtzx9XgUJFC8FEJQMuiJ3bXiZE5Jav24QXx3TEavG8oiPr3RViXoh6EksYXsGTP",
  "key28": "3ojfdQWuXosycZJuBuaKPF17sUpGVPSdCqRHxHS7DrUTTA4V8CneWLt3oSS8wVY4ZpNrGwUijbdKRDTKr23K8hYe",
  "key29": "5C3YEg4UWWYiHHcQnRSnb49tiokpK9MNQQoWiAKDY8ERskLCx1SELRX1DbtXyYyEbmRt65cPgJRGgwrobZ45UaYX",
  "key30": "5B1peukcak7AoAG3qYS8Gyou9EGtWo6KDG2Yvm4p6q8cL7ucayAJshYA15wknPSVkwH7KUDbtR1F27nio3bLxkGr",
  "key31": "2YeV8VXbEfEjPXQTqJmiNY1Az6sYJEQa4hWGRGYKMvA6jmiiST9RWpjhTbaL3xuiuG2mx3FZyd567W6sxaRxam9T",
  "key32": "EqtWMtQkcANvX5qTV8EzLat81bPAL8tB5Hadst7TAVwLAxxyGBDeBZbV78WmrkvfZu7nS8Hmg2kjC7aoA8y99pH",
  "key33": "ZgmVt4g48VfYquFGx37bktU6T71ZFRGuCAjpy3ZREhBrVQVQGj4KJjdvWRX3w7dEZRgdgaKjPFbZErCPFSrfqk9",
  "key34": "3JTeTqWgBC882EiZYAQJdKXcjX8NqNVQiRKfYTeiWM7LfZJBPps1EQS68CQoxicT4ujkwCo7xfWRy7fiiu1Yi3xE",
  "key35": "2Bgb5qheUZ2sE1SAyGzV9DWjBeJHU4ATnvMY55b2tvUr3St9LrhFz9M4dMUwxkrxg5e1cVxYxFCUdpDfUKPCCQgV",
  "key36": "3WrD2utaSuLXEwtAZUnCJTNZBfbLTQMRrNBZPdo4NSvc6EZoD2xPYGdg4Dk5bHVNq5nBpTCEesaB1kDyNX2hHjdP",
  "key37": "26FGJm6obzgdr6cRgGTZsxYtwSoUoDhGVPKpegpyKHTdGyZu53DauFxH94UDWhoN31xxPeCNhYCgkZsbR7jpPVpj",
  "key38": "oNkejdAj2ukWFyYs4ezixtiVjnndy1aPLu1CgyWWrXnN5R9zsNpX6yBfujN9js6TMNypyroLzM5ysXjeRPHZ9Pi",
  "key39": "4MSxsFchfpyhKuZ5XDEN7XHdkTg4RVFchRAT5YTemiLpnKwQ2BrQHC9p1zTwjGCp4AuLFVov1T8XsgspHwzLyvzC",
  "key40": "4WTud9ySGagMQEY1A3NvQft6inE8sEJkVdLcdkVF33xLVZ1DSAfBTsbSqMWSphNuZZwYNeMPUWNDt3LNofkJrwHg",
  "key41": "41jz39GPaTUBn632nX4yAiYVa7D1SmyLk22rAPP6mvFsyE4a6hiixksRpBq4ppXohb5HertaCYr3ywhQtnBrGR2b",
  "key42": "2KuacCkYB7xhqXLcWnugJoufzEccMz5pEQaKQSVyYGf8jUPeW2HwnKpD1QZA59ecRznm1BD88v9ZbXjswHZNfK35",
  "key43": "8FkpQjJybZwD3Dk2ghgGfaTZ6yS4iHUHszerDFxjcBDcG52oqTtBcStCCbiSr2LbM9P2HKFXnonGxsnEwvQTfrf",
  "key44": "3Evm7Tg2d1rdnN4rfpN9F2UdgiFgh5SSDVtC2GS3k7rHBUuyu1mHRbSeZRri5tcGwfGPT34DZAstAExC3UCvQCzR",
  "key45": "29tmvhershMwU9fGEty1j1X6PvW7X56e25gegdjY1jUfVZ5LvZu5qXHPYaVcxhDNwSYpnKb1966WtWCUaSzPzNgq",
  "key46": "52kdX5rFkAmw1bhEdfbk39uVanuLVsELRZpoiC1eJw1yL1VnxbSWsK6GdhXxdm9Za8io4qDzJi1VMnCifLrNr8RP"
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
