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
    "4JjrW4uTALyW4wurWkFaL4PAuAe8zZDCc2Lr7hLjBP8ie5CeNuq7SQ65B2k1jjsGgzPcradTkxiVGdeA9vs7qawc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iAjFTKrne2XXo7zWyYnwhzpswo1mKzKqXA51TUpp7Xc8kaze8nngNvBWDRvRPpv36kyMoASxA41WMkgEihD6A7d",
  "key1": "3eATodxqsskgPVkicjUQtaMmr8zUedmDs9CVaVotqaAYCMVA5JU9xFnZk4bsLoX3RAMe3VKbcqnLRGdxTqvMvTLP",
  "key2": "4iJpmVwFykjzZRcdHs7ab5RQRbVZMKhxCcvFqHeNc5fRmPQgQdfiJMc4rYYw4r9ho6JSjrbsrVURuyftR45VUa74",
  "key3": "uMwLRpr4rg5P9PSpZiBx3QiEM3tDmymderQMUVQE5sqkzABagH5vmJKXkxNiLXCUgo76nN8p7yvVUnagTsRYeGM",
  "key4": "59QaYow6XAavxK5VwrbKPHEo3qfPhr2KcLFfaaeWpgsjn68yG6YJVs2Xx7HZJ4X5wW9LKP9iMRDe4r7pv5x8NuX7",
  "key5": "4Sx8LrKYTqsCiL2rY8JZ1tH7p6n3fZCmLu28bW91n3pPpAMQnx1STHTkd83cR63KZGywU7HhP5rMFQCPgfycXPJF",
  "key6": "4k6rmsy8DqKAkottj4Vn3jSwmXDn5s11q93DXzQJV4VjmXuoMxfmFYFS512strqq6dajHktKvCiHz5LzMZ9gmm7U",
  "key7": "xJY3yLMzbRMiEP2d3i5Ff6srKzwR2UXPvPqkZ3TRUM3xj7eHfCgUxdwdbdxu76Z6McvW7re591zcX79uz6BTR5Q",
  "key8": "62CNS7oQkq9B4J28RqDrjWsMyot9Zsux7fkeKF8MrD6xQ5TKzSXZ6f2A4kkGMTtfwv1upZAJve9bmq8BomSAcLPT",
  "key9": "2gGBCbciFFSLk4RqemHd9QYfVkogMJDT7g3kDGhvA6AT2XMrHjv7mcXPPZrj8HWeXS1rpWsWRkRTEUjrAwbAkfe9",
  "key10": "5eEQGbaszTcKMd9uho27fnq9KQLHuypUKWaLYA7qYAb86yKzNMZ4qWEGELx113gfCwMnXSoUP5Dpb17Uz6FD1Z7H",
  "key11": "53aWVTakyWcgaQyoyx96aa7wwX3NYgpoVt9MDVToiA49DQGDARy8oZPCuotkevDXwq8UgdKJd6U9a73r4QKbvYpK",
  "key12": "4HknaSYUFrYmyuSVkWMGT5c7zDW9ErLni2DzHc9bxkEUDV1ZRXqHwbdDR3wuhi2K22bVND3HafQV1Fo2JdU4y7rz",
  "key13": "5pAF22Zdk3A7ou3nmTQEGoqE2SdbrGWPeBnanqjagUPus6AqvpDWQJNn7XsmnhModazVuzAH2upt8HLmknA3qMGp",
  "key14": "2BsguxuuiazHis6GTLviEYLRTY8KYCK9eGciSC9z9qNWEsxmV4Mq138vL54fLYiK1brzybJoQWJb21stB7DT9ZDQ",
  "key15": "3842A2hHimcbTXGPw9xou8ADrBJxc4Tv7GWqL2rtU4T6YUq3EHc8kZEx73J6c28Fwj6o5JkLvczERrWbDRofBhCq",
  "key16": "46wHjxYfkJBjsse3dveL284oj5gbTei5gSdoyLiV5RNzGncx1gka7JdrpYT1a6NXCRzCYXg4b8LeBgsLc3yRgzpB",
  "key17": "5z2eeTev1aEA9RbRT98gdxR6Q3GZsFS3Pt8ECRjFWLBbviCanopHSpsRaZsYkB8HzLBU6JwxtmXNHXcoyV5HKQ14",
  "key18": "ppN4ZJzQZZWhq6xxGbyXuLBW1wbUgafgBiTLw47qqXPMQSeF24Y5tZXyXmp6V27PBZHNiNHzM9UJm4MwDU1emA8",
  "key19": "GNjnjNs2jn5rf8vM3JrhPSR9xFdNHVUwi1YTmByJEBBAdEzPHYydMq7MyqCRGwzYieRyHoAprY8EerHeswmRYRJ",
  "key20": "2KRFiU7xtqjNMeaPMFQbdDP9SAHUaTG7ky4pQJgQxG5ZLr9m91UW5WY3R3qnZL9Nn1kyLyMbCvKKoqC3Gi5o1mN1",
  "key21": "kc3xD9gQXEawyvwB2WckW3kTfiprrPEAUAsQvQvdBzDr12FWrD64ivs1jWbtwwgfp4oCuc7tEob7tDWKKFfnHs9",
  "key22": "2jSUfvDVkfsWnwCTZVg6aHXZBhMG187CZKhnj3SsebprU2BGDDyycyhF7K5B5pr1JPfa82r878Hhhw3DK16zRaYC",
  "key23": "3RksNAFz2Su7fn1tmZ1PSVMHKaQjr58ysSLsJFvVYh7GkYBV6dAbvw6FPDCUzH28XzETSgWPnomQun1kPino1pKt",
  "key24": "5H6meyZQu1HRQRPv1XpoMZ4hmBQ1M2CJREhQZ62qCTkPH4Hh4vGQ2RirZg25L6Vsw5dtkoBjCbrVECvfjdRX9xGH",
  "key25": "2FBMF28E5gFu8VNqxGk7DWH2ZcexGLkiecwqKKhuVmtmSxqTpt9VbcfpA56gNjXDSBdAKBcYBWd2JRke2RLCoFy6",
  "key26": "4dfYJE5KhtfJjSs8VAZqd4AW4dh4hwhA26esWBXEgUMdWkgufatQVVfBqPpEdmQcKso1cvfDc8jKvZ4jyuqvyuyS",
  "key27": "3Mdf2JAxXjPir8NYdc1JFaDSMfQCgwzrb7A2CzVQnRVFZKZKQScNV3CsdVvTsWcPEWyPLAQz4DroAdrV2w1gf7bk",
  "key28": "37G6njBLBjVbvXV6XijWJdSgch8XAdhqieNymzrd4pUcbNmWNwRdEsj5YH2kdfmBuBBSJ9Qxvgb91FmbMcSwYh5",
  "key29": "5Wgkh6m6MRSZqSeafpjFHeuvxAwsNxkxVUKJAwptEfh3jzPqvTsGnELR1UZGUEijPkEPxi1hZtFz4TaQcVZC2gLh",
  "key30": "Mwp32UFq4g6aY2hEi1RiRoLBsEWHD4ddVnErMQ6UGGk8Sp3Gd4hc6qVcSfjnToRwCQzmchH27mYoV6ST4cDkKbH",
  "key31": "55bU2sqtKiSnamkftbwAtdsXQ4nnaJBybNgsaDsJYBTvBqq6p24PZZdkpZHG8ZUAEHrpghzX7xqoD63YW8muRYDy",
  "key32": "88S9QmgZbywdSDx9bhRyFerD7PKwDKvR5u8us2U4sLQjXS44r4nxDmacQj4zNrWFx8ksRzVChhtqhhaLZrtgfJR",
  "key33": "3SnvGCNzbnHXhUMdXVdGN9MfWzUcRb1kupjQFhPdY4HNpjHwWarqLTTu3NwrRkDMY3BaY8J8KxSzXEC4ErNS8KSa",
  "key34": "3vV3ptmp4K1nqDSvif6NCBmDBFw4LPDd56X19QS9VpHEHURSpuFfaf49GoUw5cW9gdd2CU6AMsCtLmpNKjTDQiZ",
  "key35": "5xZLvWaR4sooMa43kvVxPU5WifgvhqmRiQj9FebrLndz6YEYv9tyePSwCckYYsL2UKeJKio4VTY4bnuX5EZt94Ae",
  "key36": "4ioVtGZU3pgQToyU7owre9EUa9Y5oqcxxCrDQaAeCQV5dZNV8f5uCDBwk1QpvJyJxv7rfeKwHbJJWdeyhKADG3Eu",
  "key37": "4MzcwWZdWZy9WDj4d5X1FytLfVNbxv4iLzyU47VW3tFxng3euCEXazRxDPVyS3zMKezfa21gpzNibj5PzEiAg4s1",
  "key38": "3L4AdiNaYLuFqVKEL5Eg1vhjaNXk5eFFDno9oD1ziZiBJnQxZoNF4ytaMzdvLRZdz7G4rC55iH7rH3VxyTNh763U",
  "key39": "4UJhkKdULdGWrAnZLX4p3D1rydXm9YauVCD4tP4B7Vzopyac3jo4VstRiZEzUYnhHQn3PC21VDbXdQvNxop9HsAW",
  "key40": "5DCsvZXf6Xi59hLd23xF6ktez5yt6XaseiHY4eKrXMRR1X5YTkZj1A6qRnQdwugrso2xPuFW4iAJvEC4TX3JGc4h",
  "key41": "2er3w9PhujFafhvLw6T1wRmwN2HDP9iaZBXoUa17MCthabyWP3zEpHfEUgM3ahyXA9y23uozhsGcAx8imHw6r7JU"
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
