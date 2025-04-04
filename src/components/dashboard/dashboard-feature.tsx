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
    "fucQDfsu3ChvSB2C9igvpMbt5XfGT5Tt4UJMKX7jbv7vXdNEQusAvLJKndTUBJe9QHTH5Bo7r3Ryq8a5XerKsJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2df15bu8XVKTffFPhbWk6Q9iRJuT622cJZgeJhfGBxQDugHKD3h9x9EWE6gnBYKp6FRKMK3cEoHkXEddc3JNKW42",
  "key1": "ZQhrE5NG5M5KCM9ypXyTNuK71h2oBNCEJCbUMCS7386qtJ4eGvGvrMt5w7wPYebTRfTrMuaB2KDfRjoMdEdN1cv",
  "key2": "3xh345HdVJ2DE1XVqK8LPVgG8H1jYnSiYgPkgp5meS89btyGkMCZAJrBz4ULVe1FqJAm5fyvZqGfz6B1VAfxZs7j",
  "key3": "4ohAt11r3mPkE9q64zVhBsyNipzhkWUvEXLa38nVUE1yPV7rCiAUDQmGxzLky8n6uwP8TcoAN4iZMunBSJkGYHre",
  "key4": "3d6p1wsdSkx6yNLjc5VZ8KC71qqfqfFhd4B7Xhe2iSWTKpe3P6aLjZnmBPE6Z5dHUqWx1U9TWm8xbJ5guaahRVXv",
  "key5": "3B5LqqGR4P2FHUmh6W51zdEBT91XWKzUoxR1LXZxEtHPW7F5Gs9iXkosBjudKwPtQEvg2hPSbbkXVUSJ1UsMa9kC",
  "key6": "yZr73PdMJ4PSJpqw8wvJPMf5ouCTBacLnvoetiTuFKHaiovJjHJcDPATe7xeJWmrvbEoREac1tT44tQ7jBQezCR",
  "key7": "3Ww8db9vpguamdMdct5X79Y3gCYJ2DTqTwCtsjGVurhxpYU9KvR34B2tVJGxeYHjCwpydLDi7Vx2GQZyE7Qrh3M1",
  "key8": "oSRbE4hF8eXY6ToEkD81TZS3QMd5PNmsEm7zzKhU3kKnCqzYB8fQegcCCJZYtM1rPBaeLMcK1wWtMy7GhaX3ZfA",
  "key9": "wJcj2nMhMu41cwnEmzYHoaUdihXnHR9ptS2daTG6UotJSKDKrYdfoDJ9ayvfgB89mfg8rsrMcGaSPAsqQEXzbiK",
  "key10": "rFXfjU3k1GyMtSyhR5UPS7rgT2KNLmxc3kS3UDYVXUHW2rX3vHCj8S1RW6mRmYamyCbTiHHjW82poSe3JYmB91N",
  "key11": "3Lh4X35Vg7ofwCfGmbykWCgrxChTrTTqcFRjeVTRfkXK8k6QVaBa58He9BZHqHN1iv3tndfxd4Bn5WfFpjK6tEbs",
  "key12": "5Eb28jH3M9LyEKYK4VU2ExoaueT463euX88x6pLZ6trcw5s55fXLSsghQ4c1H4aCE59gYURjPMS3aJp46omoChNo",
  "key13": "bXz9xMm5WJCjHG32T6eKSdPd4tQaqRqs7JgEnEQnPhQQdGQHNPVVmh8h9Rkw8wdtmnBMwF6RYZt3NCqJYgSmZjb",
  "key14": "4dx2ExtX3d7RTFgKZ6DpNsztGRosiS8x7VxVt2gtF2ZMm1wq9KDk85eQu6u51hsuYoDRQcCLRB3kpxEq6fYv7FjW",
  "key15": "2WkniCDxdFxR5p919AZc4vfpq4RY2tDFtKHRQXW6QSMm1G5wvZTVJNMciXSTGbdpJH7kyAZfdDRbbJwsSzWU6Qqr",
  "key16": "5q9ftz27gSmy75dn9vw1wVs4kSvXAiR1KKrQiu6AUoYLTqPFKbY6WYmE9hs8EXhecfHHWRz8M8hacSw8fUjWcpEE",
  "key17": "41hVdL2bCGtcG6ogD4J4yjKMxwZhMcLVaTV3PYHUbXuQzBGWR2iMA2DsheoyanrnMFycUFKM8zUuVLamv5uMSw95",
  "key18": "3rsrwpRJt6MrP26sr37UsqfiAiKoCDAaxuVZjrYdmcUppZ8dijjnXT9kUvxVXJ4b7jz6uMR1rKZ6fp9J1KvKY22h",
  "key19": "3k6WBBg8N1NdBrgwsVQ7SYrqy91tLqFett18Z6wUiLG419JP8U6B5dngGnMRNaDvHfr8LU516qCjA48sKnf8Se5U",
  "key20": "4dyM8iFJi1FrK9j9ZeFecKHtwWBYxGEVJo2haSB9CvDsviyLMDXiStbWw6W2tKX57LV8AVR3RH3xjKAkPWzyZnwV",
  "key21": "xi4gqQafxVTsD9EWwmNw8JE5ceT8E6paYkUJWG298M7T4sRTzFnSkYkQG2RdUeoTzqwUtpZtA5kEnzfQvZJ4fes",
  "key22": "3Yp1MwQq23EAWwjALPcniHgEt4veEWXJz9Wiz4QAZGeTGnPrQjr4uw5CY95en3rhVhAwppHGnKEhCWRyr3r7LEYX",
  "key23": "3AVdjkeC9xkGyN61MfN7HhzuambpGSHjJZ9k6ByGwxGgrzqjzH7AfxjV9ymjgdhJwjwfUqcVMFqFz8aQqy5Qa3TL",
  "key24": "p4x9B1Z1L9k6KAhWwqS9v9MLkPqXnU8SJ9CFbdBQxKKWNejKrdiepyatrKuLMfgxNmiUvGKCfPQDgGUwRc1tofb",
  "key25": "5pWoqFFxvsR7s6DwpcbHcyS18b6Ur9bbXyDj7CPBz1jiX7fwtmEUkM1JJBP4eSH2LPR4ttSNWdHFkonLfhRa24Lr",
  "key26": "3XYKbp72rDX4chdBBDPd6V4ppiHTEkJRovZRTzHYwDZYQ2HgUMeVC55NXbMexFRL6mTgbcrum84DtsECpRLTimFK",
  "key27": "4sR1pXs9jgidKPSLAQ248FVgBQM9YgkBdt5X45cDVveBbv9TLyvFbzSbMYGxh8Ab2AxXv9TtasvDqSZ9uogw6Q9c",
  "key28": "2aUNBuKTbPxtGm2LvKCSXVjZQF8xiL9SWJjSEo3AwZbML9f4e5VN67XKJaZyq9AUsnH87LweNJmB9QkExtGC7Hko",
  "key29": "3AwyT9w9vN1kWcJCWDrps6nL5ELQ1sbJQJSaADdPEs4ADf6y79sjxHnK9LbNS4Fj6rMoEFXXdpr9y4Nnw6bHNj6A",
  "key30": "8NrL6hbLGM3YaFm3w7U8Tmg7oZK4xH7zVxMs9ijuLwhF3WpHTFmka5N76yPFBvQQv54afzrmhzHTkWPxz739kFJ",
  "key31": "3MjtA6CQBRL6A9o4TF1wYimmtggTVPxrZyqKexuonh96b1dAtBY8XP8q3f7TQ3HHJfNyRYC6kWU5pz46NEsWm8a3",
  "key32": "48oLRvw4JL5rBaXqUBaLLWwwUGscWGcJhtZGpbrafQnDA4mi13fYgpRmeDSqD2cq1dCLSan2mAUYyjUAM3kCZHuX",
  "key33": "5mwnEN23QmAb7Hom5hsdhKU2fWhcHBfFnfdz4jCfAPmeRNMvVBzpTDoWAoaDoEJGcY2FK5Uaae5rcT6SNcPEhvoG",
  "key34": "4CShLqd6JHvZxyRTgxq7CJXMRT63MHw9GFyy1JmQM1Sz9e7iVhqRPEYLWEtAdg6KSTWzPPVeezqyRWv2Dh28U72c",
  "key35": "2sjNqTExXfdfQ4dAHvN3jrP39bQHdC2WVMyjGTg7DEbkxR8gxzs8Xm6M5u3jdWun8w4RoyZqyt2EhDCX5iCHkSUP",
  "key36": "2Y4J1Vqn5fgfGTgQLGGZsUYuTNei2f3FbezrLh1FcR18UfPEmyMoyLghRXhH3JiB2QejpunPH2eNXBU7vGUoTmzB",
  "key37": "3ct9mtYXL3dbiapWRNyUYCiEdEaqHEh28YWRX6QGYQkuNN43tz86URtexZ2DATm3odDXwGUeDdt1Vd3MWSt9a2qB",
  "key38": "32FXnyTbDauNP9nVXbYPNpLTsVQbnkEBn9DZHfhe5RNPLf9zSqYoimSHVfBzAkQH6dHJvWGkC7PxyRwbGnUW4yPQ",
  "key39": "23cV9yNaxFokHVPpaQrRxuxPqYeEdyKWTo8mDCGMU4cZVG2QmqKLqfasGE5MSbXddf3JvpiboUMtbMD2TpB2X6ZH",
  "key40": "3HDufsqsjCD9mc1L62NgdG43m4BbktmzHxRUVDfdAgjxJRMEnqgHnxehWoXbZqcxXugJqkFPGYQ7z8w7ZTsFrbB8"
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
