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
    "3hieHy9DvvqCksTuL2bStmmZKMaL6sEbokUj3UgF83hkcUAPFdeq1SfC2NiG43QbqEtmZbvykBfapyYGxjV6Kmpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xj9GW8UZ567P7sVShfsqKoAQcQ1JbLfBuM7NxD3cVqmwURZtyNZ16Notx4CeERerfQYXV64CdMuJeRjjwFyCBH",
  "key1": "pJ39j3ib65QbNm9gbkf5NsQxcGqf9gwo7L9wHJWtWVuDjsY6RmyMkYUKETYsdRmC78oeWHHhEfhBqSMWBWe6Vsi",
  "key2": "4GJeRzQJvFhzfhgbPyu9KQumnYUFWv7FoUcmgXsUaugHZrfL78DLvk459hkQxFPoF6vJ5X2wvxYHk35JytV2kFAc",
  "key3": "2cydCnTwFzxSYcPtwnMmPgD4j77LWoqRPB2KQxELKAL6V8keHV2RG6Z4UJv5A4vovTStv2wp2mH8XshCgVZDSxgW",
  "key4": "1qptkHff5xNBJ4GE1GWLejTjuGhipMqcbFveXGHCK6yQnYaAoxArE68JHy3cSSUFmXfv4M7Z2aF1zvcwHALqYX2",
  "key5": "4rcWAVFSCPCihVupMWLg98HPrK36CmowHGtcAskXxPD2HbrwYKTa4aaWx9HaSa1AV3DhDrJjkAn3GYeMfguXAEow",
  "key6": "4t2wVDsDMw6ibAoSYX1TNSruBcFgaKqYPSQ2RLiSwArfBVq12WnenBU2Hk5daaug2Ye1gUoBLuKZaHoyJ6gtZ1Yn",
  "key7": "5RQ7ncGryc7NikPuSfTyHRG9XBoCp6iL3VEdA4ur5ME5us5HLKSn7YacPQKvWxC5i17m8e2qkj9pEYgkCBbzyAn7",
  "key8": "3kvtELhvHdjgBmWsmdjDYRegFBj2Zb6G6XnJzgYfB5TFHksSwLj5w6CPDEfXsuczhMBc9KWWEfkMfhXLUVVkVQHg",
  "key9": "rLTNofc7tEG4UemTgkv1TmxfeKgqsS4US7oUtqxVC2MFKc49wBDytaML5ZTiwpy88xaNmcmMT4dBePpmuea75qy",
  "key10": "5a2NguenxYjWwRMrapPb4d5dWxGYDyZLg75ZiuRyJiDqeXbQVkt6UuUVMACwdHPMNRDSNmgsQfeFrSWCb8gk5PG8",
  "key11": "437kzCPgo9PdXN6ggGxo92rqN8HqpzDeraQgTNJyW5qcCYNMZEWBcscjk9Ry1jFQPB6CfytKdv1F7ivDetYXaA8T",
  "key12": "3mPuBJi6KuznGSKk4yQphWRroS7fBAEMdbvfmBQRaMHEeHmiwmCQE9PRLJM42EZSsLrprSoSkKTVP1FKyFhaW1JD",
  "key13": "5ih3jErHpvDcv5FxG8dBuz41ZJyNYTFmf7AnTahuVrWm2aayAYq7dukv3FL4u2JrPpQ1YW72v7J6WwKgJzadVV8G",
  "key14": "5idfWoWxifX6fowXTWgsTewNACh1gXUvLwUy7WLNsx2k7HffQSYmLaytxJpHPYoX2jyuRa63NnwWrNBWE5v3L4wN",
  "key15": "2uf6Bnq8sP4S8yZw7vSvoJnFrcBLD6AbQkkhH16s2RguKPGzB1Lg8jXuhZ6dmzgBgzNaF55ioPiGXMKbmHsreCj2",
  "key16": "3WNCC8dnU8wdRnkBoa4yBScmcLVJgj92iCezRukJzyvAYE6vqxCfube2wKvrnyCdLQwwguUTM2jKo3qY9Kk2U2Zk",
  "key17": "GFD1AdQ4sNZVxnK3gXs5cFXuvAoJ9p64G1JYp5V2uVtw4eZNGGcFkCGmYKZGRPNarBjxXnP81wqrRTkc1ipY6EM",
  "key18": "Eyi1EKgTnMUkgMXWaAdF9KuFhRrvBpbRtTyYwhfudXEvArJCaKX6tmKw48YZ6rMo3pBw2qJbTLBv1fPPhFg5b9V",
  "key19": "4wyLGzdVqbjcXHWaee5BSCogBDRKy79SwUr2J2vYn8Ze5hoA4guNKXawkGofyeRwknP12rdMRGL8TN8w9AYtoTMV",
  "key20": "obX1G7hKz1nUY61LZZJeeCXFNqfhKsDEpxCUjjBsYXE7PFLq6Wqm8dzCL2ti24HFbL3z3Fr71PR2N1N5tsEFwbf",
  "key21": "2QK9n1h3UmGbBE4QeTVrgFbZdP9aZtM7mYuAaYfU6k2fiY57yiBitfMCCBLtps9cTT81xoppEZzwyQNmZFAsaKG7",
  "key22": "4VCCeapef3LzdubK9skSzcF4kbyhRgPEDQAQTHmC6VqqoNBu5Vk1Hhq7MUXBus7dcAWv6ybWbCT4H6tjpkW99iJL",
  "key23": "5pT3DoGegLLQh1w63CJxRJCrWBF7JtMYPRByeNcokLUruiskmL7DpwbykvUB4DEe8237kCuWMCPN8PJma89nhUDR",
  "key24": "jc9umvyAtJjVkyudSZqTSLikga7rAspqqSy22JUiNy4pK3ShopZuCfJ5GixHdBKJnmmZzZzD9oZDbZVpNEcFwTy",
  "key25": "49fK3KQxTMA71QCJP9p4ux2XrzkzFAbujHjoW4GiVUgYYhVuh18G9HPUdG6W66YwvLT2eFn6LcV9MMvTfEfkZ2BH",
  "key26": "3Vuj83MPJ1xyUzbZjeHgvCNGAJkUYtb56Q3MSbVf8v6Y2T7psg9M3pBLDaYYUK8yRqeknWZ1pkfM4XRk8oDdNDYw",
  "key27": "59JbvGAKgUDvVTqSCPAkZDhVXviYknvTRUscVRkegHuvBcTY3k99Kas28ew5MwYVEntPqBuQwtH9wGib5ZwL7KEv",
  "key28": "5NBwuZsBS7n4eDsqw3JL4FAXdMvabo8AtHUuZ6f6ATb6F6EZissUxQwD5JarmEiP6joJtSqiosdVhJobPCjy8KEW",
  "key29": "tAMrj5zyZoh4aXHFjd5jDGBctpdSXNQBTbiZhTLZCWiYu7zaZF1VGp4yEnWstz98311ktoYfnuHn8d9qtbmbZ4D",
  "key30": "2tWyxUceTParDogF8EXpfZUxBEQDq96P4XQti3vUvjwXuDn6aYn3FxAyJkLRBRiPuRSGYDgBkJSqdS37NtJovESN",
  "key31": "2x49Qs8ZBAwzsRBL86JiZSdpr9nVFZSTny3FfPho4KWEyPfHtzou2mAy5S8mqBfZCTAXqcs6yvSURirUeZkVuMiq",
  "key32": "3Nzw5QDKiPLHpoUfiAsFjvP1nM7LXyEPcxPoaiXVSf14mx7YqZ7Fy12H2KH7V3GKq3uVgvAaw3bJxsvicWVhWnac",
  "key33": "3xS9zEXvCytRfTdjaSE6EzR9vhy6AqLSLozVzbCzs7nkEeuWGHggJKHLqyANzFM7yD8XDbAxesJWwa4LV4kkbpUr",
  "key34": "2MZMqdX2jz63Wvm1ubbKmdeTjAiGnwHi6NCiZM88DuN2wUYckrvqMZyftVk6eN8jspv6JVcDGrZmiQSP98HnTrwV",
  "key35": "4V7BGiwtPQRPgYSHjkU1p9euhwWTDGCHybN2wkp49eow6dkjHKj7MdUPLy57eZfRHhSggaN1hk9Ke2Bu3iQWwVs9",
  "key36": "36XZjL3MW7zegqAAnQuBBLJP1Xs5BqzjnxuJ7rTXVKuua3dEUisBUiun2fknAYpezRxpEUd2bEYa9FMfed3ug76D",
  "key37": "2RGWAWXBpn9afAWbFcdzV79QXx3KcVGdFULPsg4UNcpDwj7DDShDnADUNGDyPjSxqQr6yZdm3gjSLXgkXtsG9xfm",
  "key38": "FUjMWW7E2ddSAeYJvW8NAxC24yccE2f1ZovivRBQD7x3qBwPfZZfag8Gwx3h3NPDUDgLx4SS9ENNMx3LkkRQnHe",
  "key39": "Vd8RYHPnEbVjnrDqAiAmg8jGBj8R1Rwe5nBTS3x4CvKWw1n7vvfy3jwxVRe3GK9k5CC5CM4mNpZdHhAje1T1q6n",
  "key40": "5cMETShtemMoxxUSgQWmw2QG18YVTQGCPNPLu6pcsyApSF4yXs46RGkhoUMYaPy7DnYEMB7QF7A3ikuHyk5WPDoq",
  "key41": "3WuRM4nNVSn4WFVRfg4Ksi5FvCixVc4WjLM9Z3GdahuG1yJdwjRZvhWX3NUiTSKveVoFpLXhM9oLaJCLumfFCU5s",
  "key42": "2FGi45w4HgJ7dMjNYbU5ASU9XXS3hSvz14Zt5nP9iRM1wyPfU1agNddeSKjcHdNfT4z2XPfLmykWPUPyP8CZUr5Z",
  "key43": "5y5kyk7WGDt9QRAPiBYpMX4QXoFfmvMVG8DDaWNCAWhWNDw3oT3bnUeSRimBdxTLKqr3Cg2SNL2sZqCtkNkWRwMd",
  "key44": "2Fst2oYtJQB1iz6avUajYZa3J1UMKTfeU1gisq1msuXzs9or6no1YMopQTztFLP8EpnnNSCJ63Qxz8D3eADAXe9H"
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
