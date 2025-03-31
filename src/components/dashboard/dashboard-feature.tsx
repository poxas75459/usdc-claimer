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
    "36Gsw8MS3rpFaLDoaAf4hzDKYgfhvM3kArgmqcRE8XKzX6Aw66GmUUnhn5CF1tHWrCKgBaenSng1NMGP9wdVV9iw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ncqG2yfxBqma7UHtYoGaW9fh4P9inVGUwMye728J7i4U9kSDHJerKaVJ3Arzee6giiNW4UiQ7T5QBdRENWToEN",
  "key1": "2WcafU9qoAbeBmvVwsEQLG5pZgjU5HusKNmmFiNqwEqPrvhjDyNBzbi1Qay577WxEaXx6fCHqxZtbuyJRRj3of6s",
  "key2": "4sc61pdHrbjzUHDZiysGLCYGjpsX2TkD2857j85mc4RYmnho59x5t12WYqeF62Hwxdd5VwQ1w4hE2pS5Ybw8gS9Y",
  "key3": "rc9ga3eA8vkzmhudJ75yAr6rsZtVeB4YkQSkm1zaoxruag8z4oc8Vk9fJxhfu2TfmsiqTzuwA6MwwtxQy3aqRn3",
  "key4": "5xbyRCLxxDZTsHTSxj23Uxn6Y3eieYSkFpSExfsw2PcWJyk8RNk8USnD28ASKqBCguRVK4pNxkNi5QeDccp4mrm3",
  "key5": "2tPNQompzgrTRsCM3z4KDfkWwcAjoAU8phQDfjYUQZG4ioFoE3ESgcLLeniVgqzQGLvk5ki3b9GuuNTy7xkXmWz",
  "key6": "2pkLW3QTzh6ybJUPBDto6gXTtujNieCugrtVLhG3ZLk6NKn2HXzdquYCZQf7PVyotoZgdLuZxr6sifW64LNniMPi",
  "key7": "2tnsqMiXjoukfbPmr2vQ6ubzZAfg79EcDB3v1AWx4d13FUrpAmLEbBwMrtSMW5FX2tkk6S3A3Amc46A22D618B2p",
  "key8": "5A7ZbCNWEkKwQcYPzscRZXYEDz2fqXKdpk94MDCTrDoR3UFuKs6qVw16oXBsuF88e3PFVrUSB4q9DLxeFcnP4R9T",
  "key9": "yLDja7wRVfqwkoaG7a5fa7Shfro8kZsTXj6BjhDDJ7ym9FjAxYhSnorceDFQTE8zjfT1Fppqicwmo9n8bPQqkPa",
  "key10": "2QAgtTSKfj3rbCdCEc7ysqASUScM15WACGryKWZfnVGd6mpmb3HSwsHCVvNnxgZWJGJw29uZQ1HJvAV4cPSshKSC",
  "key11": "3HkzqMAwbCvaRgasaKCUsdqa8KRJV9oFFqpuouCC1Axz5J3SLD91cn3SHnupZN1bgmRFajSdTPUZEwqtKxdhGFym",
  "key12": "5pdVKvNpgHieqWr3coUPwS6e6TG51kCjMsiWzoAjhquvJBqAAMDwqHNjDtkZzukKaiUUsy9j6ppt43QKBU73jxaS",
  "key13": "5Ux9Zzb8wEEEogG9igMx2oH4hebLPu6KZgWNiCvYCwh73YjRCYsrUjfKi83kCtAzmqAwbh38uGyoXaUDwtPgovvp",
  "key14": "42ymfQFgYSqQB4QBx6pu5k6LgnUCEpJVr2mskh3qAXeab7ZtjhoKKgRQFZ6SrW8amGJWKPbPQ8KS2geCsQEx64R2",
  "key15": "2g6eqwLn5dGpNJSAxqAjCpesaiH9CS7AgyE7SuKHXL29N1bVmo6xTFR18JyeLNq9TAfNZrbxGMDA3fUjz6etFMX1",
  "key16": "3rXAspAunkhqzvMRGnfPPApzh5QKBRG7vLFnTwp6iADNv2ttvAqxogj9uxmUPuZXZRgAmWYTd4G7uhsxH1Aq5TFR",
  "key17": "y2gWhxKkFKN5htHnjeTt6snfp5bBDQg7qVunjmDvGQ5tKNAvd4uL8TpKurmqwU8Ms5BSFV1TEKoGak3UmEeMoNm",
  "key18": "5S9NTWd24xjsuHimy6Lgvc6fa3ySSyEoSCMNcuQf6m7meDPdB5jFX7bL58mpRB8a6Z4TKmyRTWW7qtg8CgSPkQ4",
  "key19": "4gjmfarUJTZJTKrhmQwZi3iZ8TUp8yP9z2Kj3KXDo8nVLfnBYTVoF66m8CtrgCTr8HAecKMN2SkcbXYLngyR3TcU",
  "key20": "3PPXoZPRvBZPPMBAitQvdNavYQkXYxgVFbeptW4oUDKLA74RcMbvvepogqF2srAw7c2iUyreTyJ2whf14WZcG2A8",
  "key21": "dKu4yaPkfCQdM3RTM8td1orQF2453K5o1Lxyg5jKagbdm2nohzUJLoa6sjM3uS66ZtfvjzejT1YJs94ggLvdsN6",
  "key22": "63NsDQqHPymrVfDVLojP1WbJAoh5pV9DFGdKNGNtKEuLyMbfbSTiAsZ3Mmmnfg23DMZ9EJs7BKsfsYc3HkGcZdVb",
  "key23": "5zbkSPmczLuJ7xYTeASj8gkrDC42tLMK9uMQneBxCbe9GK9xQxe9LSHEsfcH6EcL5evxv8rkWHqkNTJJmeAo2EBH",
  "key24": "kQpgA7q3PQE979REDAM1jzH56thq8WT54PzZWCz28yGHR7SoYVAcBxYb54PUwGEipuzWgYmpr8r7WyEBduzB1N9",
  "key25": "47i2dYrB7umStGgBEH84ucjBk387FzrGZipJyjRypevoP11vmmFPYGbrcihVtnkN9rs1dLF8nJKuUqwq1w2ponsa",
  "key26": "4JGwfKPZRd2rb6FUD3m6KyVCtfBe69pcjcLywm1mWHP8oz5o4YD4H48murTXQdMFrXy8kaEjSqn6Dk9PkZ9pkArw",
  "key27": "4upCUmDrZxoA98C5ADoEKEiR2s9Kv5USzhiQYQpvkgcQz2baamR6Dgicv1xwsQDWQypg5nngv5RXUdrNAHAcp9Pd",
  "key28": "p92Vmqamsi2STcBsfXHSmZ2hiuNiYjoan1J5FhbutMUaDaCrc4ScFaM6vpsep9US4cKNLzsVkgGHbR9ctPBvxbL",
  "key29": "5E8tdaDGU4vWGpXnFj7eFjiSv9FwfGcvdNU1erTB8sPqeFwUr9MErFTbwhdcSiXV7KrMqFiBa6x2pARoPB2SNkW6",
  "key30": "32TY4dJzVSKrqLrUuFWG8HtyetafS6HGABpMQgG9ZYck5P1vbJCVc7VLtQGXy8u5bKJAZDUjWszp168XRvvAA53q",
  "key31": "2c6QXTzrE2An2BVGp3ChM1tjy7nqEBCAT4bREnpF5MepePpBnJUWLNh6w3EGiTaa2cHoXHEUfopvouq5LtBFvh79",
  "key32": "5xcM1kqktoMcCpasHb9i3Nf6TYGGQdVrMZdhGbj1PdNghXD6F3P5tficwn2WstHpjUoujdQKfPYtUTtmm1Gk3eyJ",
  "key33": "VXLx37Xa3XhDbGpNZq6kgKPbjFKanUSgJFjaTvhqUQnDCiFXXQ7Py1YXp1frWt9XauK7LhMSbqSdZBLubf6qWAA",
  "key34": "hGWs69PXSYszTGyV6Ybkm9hFCztYsPoRx9v7HFh4tEgvYjGWxkdgHXxsu8qhPvvpuWM6NdE2HncwumVLGR2HE71",
  "key35": "2mTMpZRwmwPrD8ERB8qLcuxWQFuAbptzWuYmfALeuQAsQUWEhqSfnMumiPqd9tMM71SSGjj8q4fxXLQBW735xVA9",
  "key36": "414Bz7zEbvKJhkyuco2sLymn8rksmMcGMJYyDuNspoXUvscErf4jTJFQsqhsXGXCCEx4dvFaeYJsaPiDou1rhz8i"
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
