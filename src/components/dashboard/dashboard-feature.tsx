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
    "2ZqXq27dYVVQ9JreYKECVKhaYrwuJiymB165RL4venHWVVKiqQ8KjtvmtmxTKm83TEBZHwm36ddQ21gpk9NHWv8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tm8mfp6mAYb83ZC6QkdTmfNiQQ2KyRithw9XEVqBwGDbdnWXo1ZCybvt3KgymZVcVmcKtjWNkxffcAm4zgYKAzH",
  "key1": "47aw8Cfe7UNu3a2Qb3PSytwfkPh6KPzLya5AWm2nfebhC5wJNXGWFpBk7SHgLb4iFtunmYHMtDg3QPFixiQ2j5DH",
  "key2": "jeV9dKK8cmTHkdFfUtyMuLSzehuUtKf3iSvrtoHaFaD4yXXAgSri1zaQa6TbjAGLarRcxYY5UzeiSZZzspqXpHQ",
  "key3": "4tPu6HfUjmD9wMZo3gSAeKUiczb693rKG98CXH7fN2UL3wMc9MUoQuV5XdvbTzDNt3puDxvfiGcuLAUuigaBVVPa",
  "key4": "5AMbX7KEPNiyG16dcT6wkvHVDuxiGoMeUbbFokzcRRreLCWo35J5RApu1FGCUbKvbCHqqKAsNNtatyiFvjyq9iKk",
  "key5": "45WwyamtuL5CeNuL6VfcJj6CwJifPHN8x4J9QrzCu5w5bdv5fuKhYTAorr4RyRBz2hodrZG6RVitgTVn9RjF6VsA",
  "key6": "48aQE8CcgXQ6gbFi9B9oDW1qAaEfsDGL62P7Q18NzaPLwGwQf5DUtDxeZ1do1iTiZJogJrhfoVBdEVFe4S566qHX",
  "key7": "4GuqiumxhXGEym9hPqcpibUtZJ9A8wErYeUGrU3ZAhwtMQpsaCHU9NcxJPKu2FR1xxHxHbMe1EkyqYRHBWMn26xP",
  "key8": "4bhT69ySwfjQhiRGU412JuUydDME4g7NLuSLGjxaPLNoMWLYgCYr1zXEsReJsN97vtnXninyETH2h7omHbG218RV",
  "key9": "43mGghpNscQd3MWVJEA7YVKaAGGts3mFMnDrPLoJnHa9QZMs9RodLqc6uztiTLF6nzgXJZqbVdK312e3DJdD2z61",
  "key10": "Zv9nNwGAYFrFPjHPwaFwkQHttjb1oW7atUrEykqG3FBgGeH69hTdPWVYiZmp631edoP4djcs51SdrvZ5ZJHS7uP",
  "key11": "42BYssQuygo593ZYreqVsCYc3K9kYKXZYpb6Eegm7JXjCi4gW9yRnJ6Sk4o39bdmNuvBd2HEpirxiXi7ZcB9LsXz",
  "key12": "2neF3xj3USrjHTB4CELhbVdUxuNPzFtYHbs6LNeX2rVrha1JTdpBPRm1bss8YkUHhohNGm7jZYuT4cCtFHybcukK",
  "key13": "6eBKPio8pUvgmiyFVs5rvrjB9RM5cwujft8UrYiCduSwoxkwhq4A5ESGBt55NsFgQFwnbTaQGiAr6MYD2nbWSHx",
  "key14": "5Rrz2BzZcB3KKertuzGv25BULCsgX5vNf9H6BCS7mcssLaV3zr2vM6eKDgs3UMYqj9hTkjQ4mitdJp8PzpXRpTZD",
  "key15": "5ebpv8umysh8pZifWpNAvbqNWYSSiXEL1i5d2ULZhkyB3vFMu3kJSov63J6v8XDfFGZeFnQLnt3YXdFhZwxRLUcQ",
  "key16": "5yBiHBfbgjUPKaKY2Mj854SbvaqvPKr7PLATrqGC5vFcWiiTLNw6oc2cueMH4FebbvngsGVhwHtdaMabPEf25ZXx",
  "key17": "4jvDoQtP3ZsS9Hv9BjE6mprCp6XVker1RyLPx1GsWkyVnXFTUvVLVC9KtdYB3az5a6iXzP9Wskm7CqAfUbHs6E9K",
  "key18": "4dqbLTxhnx1cFK5auo6PZV9NvGt384yVH5Mu9yYhyi6w6NidoWahiF3coJsdCeNuNfMzU5pYDnpCL9X3eJnf8roN",
  "key19": "4GkWjvrzR8GS3pK4MhpJJ7MpUFbDT9t4Ts9ywGF8pyFFWP8NRoPbhzEzQGaMBJ7LnnyaJ42KXfYHmi9auyYXTeub",
  "key20": "kk27YYkfHk3rDt1QRfxtTKFcamH3pECxFhHZvcqXr2DMWsV6fFokjxvjhM5i5EvzwHgEXKXF6AKRcbtqr4WBrBt",
  "key21": "61UPpgMM4vFjqqZN5QYxSuhuntDsFuqvuydYWE89kaiGSvoUBg3a39BbzvyMW3hFq5x4aBvCmBAuufRiS5KiG7oT",
  "key22": "2qsvrMsCZR61Y6NT4g7dhmfrscScPgZ3W9ZeuypqXLA4EYJDs36EKce2Q8o9sjucoQUMoZNiPMBMGpVRJoiAvvbg",
  "key23": "4Zp7PNF2SNA8vZdQPcie3t2e4Tszsvo4e5QVDYa5b7p2tohS4uYwQ9Kk9ydkfyqjNVUXd5RvFHrr1ehkNVZxSfXe",
  "key24": "5uFujg6bETCeGwbXhbRE5RB1LrwvDyeCRbwrPfioZV8NaA2scrN6zqpSFadXg9ujQcyrd5LcLFjDn61fWAUj7TyV",
  "key25": "3hfDWuHd2qkg4XyYubXQaYqfkEFhPsuhmBigU62QDAFyG6eEiwfEHTdswyrV15umFtPWnrbN4WRzCXVgkfPAEVKP",
  "key26": "hkjturvCKDYQhdPcX7NJ4Z9b2VBqh1GCvLKZru2DCNDbaHeEsH3mYBmDgU7Q2TxRrdYk1Upf98xLTDZSawzDXAg",
  "key27": "3z5eoNA58HMK6KzhVKMqJHUjWVn3BTt4JvMhi8d81EH6FpVyFTibsKRiSmzgjKEHq6XDz21wMA4TNXUuYoTWWri2",
  "key28": "Q38Tfi4Y4BEkQJSgJbij7zEhTGonBMeSbTBKqSoSABMZxeQtyNb4LDJ1k832v8fnwQADeM8F6vfrDrMbhp18xg8",
  "key29": "4cVfaJqKtuR6ec1xXsYjpJaaCE5FsVtLpJJjjv9jVTFyRHa7pcCWdMvp1H9WAQrtFT9FNQaMmttJa8Dq38X2AHGk",
  "key30": "4nyD1AMWZ9t8JJKNscE6MMZNNwtXu38Vy9rao73GRRSQfgFWqJXTwvq2SWZSQwmH7d11GjtHbnvHziw89ZcBtHrh",
  "key31": "4uy9T2etUZDZ8a6JH3A3k8espbsduzggKeMqAcypSEejJn4ymXh1e8Scwtct25LPFsd4W76e9GdW4Ja4ooY9VC1T",
  "key32": "5LSbKfadrf2nmTWuRfaXG8isnSyxCf6PZSor4CSE82XPU8qcy7BaawJSdDFNSHxbPzcvPfpuqQ9jAuWKKrviHq1r",
  "key33": "5wcJMFHXaki6dX1AxL54SnUuEXdzbX3speKDd2w29VkHLc9EwAGHZtjyhc5vZLLmrnDmPh7bsbWK4pDWMVdo17cD",
  "key34": "39qBRu3nVagCrXz11w59gq7AeMmJZAHgEjywtgW6YAUHWmfikU3CkFV9KFAzCH1kWwVJwss3zMMT9Hh7VzR8V2u8",
  "key35": "5GwpqHPXw7R48DzUimFsTms8KYijaA6wrNCbJHdZ5yjGEyKVTpsRcggidhfVkmRpyxowQtyv2hFJg511BNdb2nzW",
  "key36": "AfDkkJcw81u1VJbrK7jmucb4PW4sWPLNieCmTTC9EkCEtFGgHwqVfYz5q3YN52WRDbvd42gQJUw7AutKwf2oNQH",
  "key37": "uuZ13gXeasLPfPrSTcHXD95HRKPGARChsFDWMvKfsFSUvyS2eSpvNNaxZLssmWxkSPLqPMp4Nfx5eCGytUXFk8N",
  "key38": "2kHgocTQxb2mv7kdKkcGDHgFxNX2puKWuVmw3GW5KN1CgvrVKnGQjtGx9kuJCShm4hAh1vVTSW5nJXrBHSzESAv",
  "key39": "5fcVkQNvh4spygyEAtTPkZFgEs6LYfwquz5LXgGhvxvp6DnzJTykbh8HHEgiReWfDWCvB5qQ3Y9Vq3kFz1r5scdy",
  "key40": "jAaAotUeEHurMZuzdhpaxjxbKuyvYfBY9h2Jn8HvsRSu9aLArvdBoTa2GvEUQwv89u9dGcfYXFUc9avuMa3BH8a",
  "key41": "4GmgvCKZF83nRczHTwJBAGWDLwqtTXNn7ss4xkJbwfhVW1sMUzzzn6vF5mVXDp6D4zG4CvK7EDndJ6e1sKrJvoH8",
  "key42": "2aoiNzbcq3UjJ5G3NctDdW3y1q6duzSHR97zoCxmwtBgeUpYRoRRM4QVqUgMU9DpC3YawePEF72ECxgacZjWTPQp",
  "key43": "4qwHRoXg3PfBwrsembpb8y7cpqUUSxDmBSRdbGm2Gfw7YVPodZtENMdBxWZm2BGMT6Y86HHubiV5fNLftV7ATKrK",
  "key44": "Lv6siJqR7nveH6VLJ9bamhvpg23GABcsDwEffhLGYUudMYC5uZ6dv3frx2W89URuEgJvWBgpGZEkXQb6ZqaPs3F",
  "key45": "3stFfQ3hm2bGKfJ4addU18roUtqcUdgGHAhLwyQdoYgxs1fUsNZMqRwEkVU1Fns1u1gRSiVYLsejFDir9SRWaXFF",
  "key46": "3fzcXGqZPEEQmnd7tovo5JQBh16xRuiMpxHQiHYyNUVA4hKed1hXhwXHKs1sg72rx12axz2FmHgLrh9TqGys5yv9"
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
