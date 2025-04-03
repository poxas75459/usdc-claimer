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
    "U8Cf62FNxgD4EeEcwnjE8N48CDKdW3wKe5k8fJ9rrTZus9UmbW1ZCFDutMWgdWcCT4CRR8ivDZgZqz14DfsKgKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UiHGXPRiCn1vt9XoFEfXLgrEwxn6TwGQtgJyDtZhazGa441ZdrsSvah8pxSHMFQMmWFC9ve8D8MckGPmpgu1g7M",
  "key1": "3wk9ahCLk7sNTaxCbhCb6qoBGRUWy9CiBeiaKuikUgFG8Tq7jkZ2atbSPurim4dRnrJo8hYYmtFsQtuJH2JHpLBq",
  "key2": "4qoNJtxDeTKxx4GMwgmy3skYACy2cCUb1HTEysWvf8ySMLcasWTwMeGUkJNmuMskrkZMykfXyiCjQ65c2AgDx83p",
  "key3": "3tX28C6dDJsU75LFHE6fDSesgFgXzudY1nVNB1CeDYg5EdXCT92iFdkeYY7htF7F1NnqT1FHWySGVdbT8hMxYJVc",
  "key4": "2NxEXdrXneWqcbi9nsnUqGiU2Yr1gCUjKyv1etuHFau3ikzG4RN4BNG5bF6kVsDpv9CpW8fmqXSdQTTDZCPL7UNS",
  "key5": "d8i5bQfnMonQp6JNAtjVJhzw7qqS23V5KxnmFj6grjNh7Mc6Z4oZZap82fXhMYWmPB5bRyb4ucXvrxeBjosunuN",
  "key6": "5RH9EFdKNmKXdUDkQ62CspCcrumbMFsdNKRNP3uWRRxoTVexTwzEVm761KER78TjUjo84rMDJA3HehMgPaYodWAu",
  "key7": "49bFNjQT74jg5JRckU6MLjPAoeeAhybFy8WtXjvK3ofVw9Pfe5szb2P9AzLGRciRrQNhqqnNMiwf4h8ZsSoQca44",
  "key8": "kEGPfa3DM2fBWenYoKBbWhXULZw8Tc77K758SjfrVivNFp7kCm4XBt5Q1az13Bfz64cjxNrbfNYKEt6K8DTDaY8",
  "key9": "5ZWL7c3mvFBuDm3sRw8axQV38ZVBobizLwRXzMmH9V3PiKm52BrcUP4edqD4ejQFWyR686area4WEN3jmy6EM743",
  "key10": "9FfL1n5SXGUGVWzbfU3Ky9eP8Jw5wCKRuaLopkFCTS2nVtFxnEVne8oHcGFJhqnsEkaW8MooRhGSYW1gCrcjnUG",
  "key11": "5x2vs2yrDVAcfmi7x82w34EiZ9Dby3RxfohUK14Z2hEwg8gvJpD8WVw6k8J4U9hYqDFBa9GZ8nmnVkYQTF6nmyky",
  "key12": "5pnHawZoZHghyDZTzUL6agNqmGpNunk5Y9DiDopGj3oeULbuRuNQinz9ZWotssdYMrK8QhomZJbPDEJMLgbnnxmr",
  "key13": "2zynvZgmc28B6QnLhaQ48GHavsCEDygWkEM2zc3kXV3stLKnckGYSHTuP3YfRHt5bvKWSUtAWoJxeRVjFu22r7x1",
  "key14": "4jConZmMChxgtF1DocWY5LZaoUnJFhw8yduuGbAa7m4To8wrgWTaT1KRCxgMx7p1fGXQsdgaLk7U8DmhXLZTQaVZ",
  "key15": "3eCC9ixyYJDnuJQi37sMFYPW5Lk4ewZVF8K1mXQxK3pUFv6Wtfhz4ivx9wL2cqwArpJvBF74tvAi3xYqkEgFCNts",
  "key16": "2MkU5i8kVwzGP1saqmCoXsmHsvYdeyFphsSsEteLgMQqsogzcPeWYBsusy4fUMXw8ukEpsmL4TzLmo7BgzswEJWg",
  "key17": "3Zdx9BVKVdPiU49cEQrVUCeHMLF919zED6BgKosJpXTUxMS9Z3pvYzQzQjLcCC68vWimd9ZHHB1AdFqTgPLQjbTs",
  "key18": "ckpbhaT9jWWoYFmPJrqgAoN4z1BLLtH9ioLoR3eAW6NPBAag5h5FtrULRbRRzz1DyCEPEh3tRcfguPwycmcJDEr",
  "key19": "5SvBuZessVVFP6YPT6WQ1ihrmyuzSXJUbD8mU2cz85G9KBKJAtQdKt5mLDC1bhteSgzXRtNhpDZ7ubQLfdQKYd7V",
  "key20": "4oovaTrgAgvP5uoFqt9Yf48Xjsc9y3ivHXQtc4jrkJyK7R4Z5rzEWX4fqELPZHHvaxw3wntzTBTbar3xYHtzz7AN",
  "key21": "4dYgV17NvmK3o7mxRRBwP6bA4NNWci1BCt4Lj7xtebwqA9XkdmD4xEBmnWDkY7zAjqQwtVzXgAGPvZrTMiSYnZSH",
  "key22": "iX1ehhyAJguz2MhbvGKJmK7rhrCLRBcCEUSCABbUy2CLSe1p9X8NsLpfhJfL8WWceRtNyhPmD9wpt8EeuXRniur",
  "key23": "4K8PStSZib8dCkchSh8Agwyr3AyKfW6XWrHLsWuh7WM2JwBDxhQrAFkWr4vMogQ2DKrcxYJuqfW6pDJeRgfoS2gy",
  "key24": "52D2j47tGBxDjGA7Xv76PFE3h3Yq54tTF58HHwCeMKXuSUPQZqZ3uQA8rZ3Fg5xBrFzzjo7Pif5rkzZexj8vGZoh",
  "key25": "58SyKC3Qtp8pJKS6txQyTU1u2kisvgvb7znJUBdn3Ca5hujeaefA1LsgWqe5WoTLm65pNiWkpWDWJaDs1c3weJCF",
  "key26": "5Vfew1K76KpubGSohYCgGwjeYwod4SBDwNzy93HGqLz1FpR25EwyUzM3qqaRjToRWyt5tAs9zASjD7UFYwdJXjqj",
  "key27": "59A5r9CHBsAZ52QCLfQzVVxzrpJ5EUY9x21PTM7eWw6qy96TiWyJzurVAuXvLW25z1B8mea5DzmBFGooLyFaWPoY",
  "key28": "61vRfYSqut8ig6RVvdRZtBDLNxX6W5Waq7fAYc879YfaimkeGgbRxXvPZJ7d854wii8sp3BrKKU3gYKhCbB47ZYM",
  "key29": "2RwVp7k1sxenk6argYVWRYzUWV6HPmSBCdLmW72tXnny7HAP5uCz1M12wX5spEZXucLiieYtd7e95cbxwZWx7H6m",
  "key30": "5Npfwk8yyMfyf6eFSDCeBY2jjTU4kVnZhAaBwvUkEJ8x7w7B8uMuASxJpfd4pcAwBhd8yvA6hrBbxkwnskAD9bxN",
  "key31": "4WgDVCvro5kT84JUpm6JiE1E7JymK8smAxVmNLxr7mVsyYeE1Q1wDoPXoQBHwPFAnX64V13DvbJenHjPS1gD2hoZ",
  "key32": "BTX798CcH2MK3RubzBe8dPDayPoie81pKJSU9K4BYADn8kctNgtdxLGa2yfaJvbuQ2sWcddrKuE79HvUfEErCuy",
  "key33": "5eFgjhQRfa7VpbTX8hmSsoBGm2Mxf5jhu419d6wVcBuuerCEmsD3iEiybXifYbPyijkM6fBZk4us3K2gCeUjtRs8",
  "key34": "5MBHtpEv6NQi3D2q5AHq8nxH2bsjTkSKjRtDozH765PvKXsEy2hwQvby6amrE6mhK6w3MaR2p4qrRkNMzXc7K3T",
  "key35": "5SBZXvyQrGexJkyVzHDokvp7nphkbeSKxqXPmfVgZLH1fvtBRVE8VkP69xkowzmPuVN1AyQcjh3Zyw3WbFNgXuxh",
  "key36": "JArVMxrk97HcEAJq655L6f7t9SoPitnCRhSsxoQUa86ozMn3zx3rReNpG1C628syiyDYP7JEL3r3UbBKusZztEg",
  "key37": "4uAujn8pGbWd939acyZDVs6UH58bmtPF7JaaiAeuE66ps4yzqyCCF5KJKd3VgDSDomZZDG2RWTiGjxCBMYMg8Zjk",
  "key38": "57L7UDQzJQu75bMhtES9Ttxp4ceE8UzGFCT715rC1Uo9k4ZF9gCQuEZMVtYX8nyUywV1nduDDSddphTqQYiudfY2"
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
