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
    "RBhe8nRhcP8UEDDbqqoY8oWZPVcCTM9Yf7sMzWVW33TEeLnv997UAV6fXkhh9Zap1b5W8GpLBerxoWzP5tULqQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BXn1LwdiurMRGcQw7oEk5UiPbW2XFYydq9QZQZ8KjsY55qb9WiLkiZJaJ43vpQeUcmGby6a2tXkoUm1dyrSwjrB",
  "key1": "3tCkdx8QWpMjyyKNJcsV8r7Ksb225sSd9xU884mwWpqRdQEF4V8cVYEkpjZDdVNsxRyLSQmCzH11qaTVZtgWthjZ",
  "key2": "4ffd61LxFeFjFqMPNMWzqd6RabNAxdiM4XFnastgCvV3W3SfpRyjGzhUqHbRZLGAiHySAig6fUbDeSooMesgxqpK",
  "key3": "3RmGtGCZHCEutouG3WuJySF5zeqoHF9UTGap4tyjCA5C4me2ychwzKdJevcGrCikPBdiqQA6ePaha967bEYo9MQt",
  "key4": "4jzXcqgnxWjFV7sDciKFXVVSfkh76Xx42UifRZmQzUuqJ8mnhfbDTk2QKqMFV4mjQygUZQCbtztJ5cmZwa5VHRNv",
  "key5": "5B1GwtyWuxhjGn56wHCoagqBySk5DAsCVBkbULv7KFmibHShEYenVVTPnmYkmyiFvwoAzb5W7P6k9x8q3rvhSNAe",
  "key6": "4J9amX7txbNgTni3ySshUVowhS7XprGekxrVCMpfrnWrE2vZLQq9fkcCsR4B17bhBRPo7tK5cWkEA42eJ8YrpM7m",
  "key7": "4uqn6SjdFifGgAez6exWV4Z59CCbqMaeMn1MPzRusqXQBDNcKyc4HLjyw3fNTeMkajCQiYfpkHD9Z9CUbTmDfMS3",
  "key8": "4SdcgS1hydnAt23CgPhCWD6zrBJGgN7vHuPqpqjFNwdDe5ofG5JV9pvMmot4s3aCfkgMDFwSwB3846BnZ2WYKjQo",
  "key9": "5AoZR6BaBcFmB1hGRMexrZGmxZiuD3jfPkaVoKJMNTrftyHSkv66u1aR9Z15JoECQkjrMijB5QAaxsR3ML1EjA4U",
  "key10": "2SgjxsAi67aJSDZ34ywD28hvscQiGKG1hDzPfWeXjnGtBs868YKNbt3ttdRYjQgdDEcAGkKcLBRAvm8ZYecBoXuZ",
  "key11": "5owuKyyBRxsShBqMKNgprniBrVfpRFcaNnXMie7qZj5uYKRQN6ywDdGVg9ZQKmK7m3WfZ6PhjHP23ctk7xW5bNK",
  "key12": "3ZPp9e2XiKUWe2w8Xkp4YXbUXb2dkmvcca9dHrWhL4vfqWcbFpJRom1MsAgua5WwLdXzqfkSwPbvZKbte1WCociw",
  "key13": "8v1ygTGEcaGfqoWV1H5GikC9iv7q2j6xny9PsJ7AKxee1GzdJZ3vjWpfyCyWLakK2L79Xv8zVXZeWrCuhqkFCUk",
  "key14": "Bga3FUuhnTpkb1mtYkmbKEocov8UFAW9p1yrHzFvSs6VodP9QCYm7AuobaBpV5Uv8xTbM3EmstRi3V9awxm2vVc",
  "key15": "3KhoBLxeBYw2WaPJcz9TkLc7iAA7QZVeyPsDPuXcKd3sge7pKxhP9mgXL1RFwLgxxfom5hfSVYxk67VCrjZiRw3G",
  "key16": "4ub1SJGQJ2gtWo4Uzdf3QxiBEkGC9642GNCLH7fGS4ZVmry8ajHQVmLAth3LpSA1CvedunGd71fmx28xmSqEMyQF",
  "key17": "5JaN2iMWKnMCR45PuFWtrtAMgt7hosdmfQU1MjHMfzjzKAxQT8RTZVjL4TsPdQkQzVFcsK57Eb6qggJZyY6jQXC6",
  "key18": "55szfNs4PYKqj6YSiHDm8tRPAfW9P5tE7ydkEA4M4e5AcLcWvRm8sxg4hQznkYV4YZ2dpzSXe8MGqpFMvELJ5wRX",
  "key19": "23oMX8opeXK1cHUWiEF8Y2EcWsMdzgizrm8TpHvzpcHfo8BBMq1y2ZZ4pyrH3yK6HUpXG2eja8Msofv51dxgRwLK",
  "key20": "4MEx7ht7zpmDLNqFrx9JMv1UZDfDPpWtZVUeYMri1sQKmjz6j7PTKzXbWGPDMZ48Z9dSHrsTcp1y4KyvZTk3NFe2",
  "key21": "23bVS85zoJav4nhyDzwpHRjhxPVC65FHLZGMcE1uiyhcFrRcwdBJfrk14UJutwCDieud4WNefHLyMuCUSphPufJX",
  "key22": "1iFyaxMKxKU2UBvoJrvVHKaYV5GejexRY9odMRcNM7eEcdxNskdAApcAemywJefyRfUTWsdb4K956AzGWHPZfxr",
  "key23": "5JK7wokqVgDgqDetUNA1zQTuvrXqgG33qDs8FyD8zPFRUGva5pqRSSaNFA1TuEW2ePYgCM1Dcy8uU6y3i9PUNCaH",
  "key24": "3gbSFSWzkh4fm9DHhBzQeGDrbYH5emVB1G3Hw1QwtwsJ4SGYvrH7jHJpUGBqUjaiNtngiudKTenNrjwhpexxQ2T",
  "key25": "yTHkqyYU7ZWnagVZ1Cyrb49eRmnC7ueq5Rr6aYng94haPVYh88MvmRSGGQEKCdxJXPUQMnVj4Ym2g6SpsAj9uHt",
  "key26": "2Latmnweo1tbBEemd5Zzp9c77QzYoMdTDosqFVSbs69zqFqKRCSZNchcDSChLRcsYGmpCtRKux45nFkwZ9xKeXre",
  "key27": "58tf23u3HTckhkX3jUVdUuvJdpf68pE6MRdBzwFLQH69eV67RZoQwdDZ4ZRGERp31Uv17sTYw1VFDaZAR7a2jxSy",
  "key28": "2QQZZeBqTohR4ruyBmFEBnX6ecNBvJeTViehHgaAhTwNGnmEqRwwEPiybikVZAWTi49KSUtRoVCGxscPq49a2Gur",
  "key29": "BWqVXNqkzUAAxZiDhgAM3BSdyaQmFW6CC3eFRiW8ZBxunp1biGWjYSnLrFLUBhJEpRPvHLeB3cmooAkUhwjwCHP",
  "key30": "43U1bDk3jZZjUTQ3cyLZr8SgJV6vhnXeh4HVZPgSM26VB8n7URmpr34xiGarn3orwUcznWMWn5bo3KEEkrGa4Sdf",
  "key31": "EWHHvgc44LfR8JxaqN8W3nDFxM6E5WFZSKaJLf2BkjRLiVWYeXfg4dJCgwNJDLhvk5gPoq6uzJ7Cv4RwJ8cMXxS",
  "key32": "57EU9LbwqhLgbCeJaGkEZnP1KRoYwJPprbBBucQp7G3EsgT1QW573SXK2SaS18CnX7L1z8jZUu4xbEo1tNnUirUm",
  "key33": "Wj9sLZrhuJsYJSvLDhMvTnvoB6hTiBMf5buMxg3vM3yWXZRUS3XWp4ZK2jDPiVafygQyjcpiW3VbuHbqZGKGWvV",
  "key34": "27JP2ac93ZXesBYmh673VBD4UMj6CFfx87mVihCeh4p6KW5n82mw2Q9ZxMqVG7EzjrQe8K8egFuze5vHpWTkdGkU",
  "key35": "PFDA6CQ8qNeDjqtjAiReXwY5atuvsqYqN5V55mizEtPhpuNsnCU8pdBaAeU6FsmfAmxRxCSf32pEd5o6AK4YSPB",
  "key36": "2gRDBdjrJKfiitTu2mub7sVekKkQ99qCnxNmJ9YJXXKiiPSM8cDeffjgaEub2NwW2ybYrS8eAhpRn3B7W6yG5Bvc",
  "key37": "3GoqrWLTUzkERucuEDFA2ftsPStL71xmTDKNqvzXoStgM7uFMfSKmKpxvwXRVgXB6azhcB59qjvDBxiPL3C4CN3V",
  "key38": "5bE8LL18wRcNLkV58sjC7P1WBwmwkFJuDuLsuaTf2UAHqR5EDE1m1L5hqoHwPWYzJXTwEuoDZu4AYuF2yi2TKrvz",
  "key39": "5HSuKcGJE1FQZyBdMh8hWCCGkxiC1M5JCwq44vKz5ctUjnYtLKvtHSBEqvytt6ZJ6BmiPWBvet2pGJ5QVgpa8Zi4",
  "key40": "4RQyHDdSTWa2XDT6wktWZTcJJrVi9gauU1imrGtZW8KgDSn8FoGmDmtjCQpBFxKZTNKjqTDKxii9hKKohnLkSS8W",
  "key41": "5w9PS9M9qTDV5urZUzjD4HE5geFx7JvfyGbaDg9yzfDekBS4fWrXUsysYXMmPA8hcDsNLyWRfpX7ht9zfcka6QLw",
  "key42": "4MwiJkRa278fNMJRYLXZ9uJzwQMyZuk5K5c5YncemhDQgfotd7oS9jhfvYcA2VZMWAi8HtzGfpbjemCSnp8V8ixm",
  "key43": "mbs13wiMoPfzrT7yWDgbAMUuX6qzMtotQap3UNFKdZsxFe3Q1tqqRBAgKojQTvW1SMjUXTgg7RgYtXQxw4Esvtg",
  "key44": "365dRbdNr1SDWhGWToyDRsV8pQUcvtJYNNihohQBeLJ6sp5g6G81hk3armpLWLmYPAoe7uCa1eorhXq76ZdjfaF6",
  "key45": "3mvsDfHM4diDd6guSFyoWc7Wiao9WY8mcabpE98ZbiuVNq5i4p6hTyJhZ1jjVdD2oYbLKZUYb5RDgHVQ5sxfVxeT",
  "key46": "2akvUsaG8bSU3HhE6xNUHreMsoPbXPhYoabfHgT3UaByAe1Lp7zHUF2rpBVh8pjG51VFn5naJ9YFogcSRUjkXodY",
  "key47": "KELTpnmoN1goFjQ2goutftWCzavStCEC9VX7TtJ4hRARP1dH8RfkcLoKsCcG3Hu2FKvBL6yxucNGQNo83KcB773"
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
