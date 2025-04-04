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
    "2Fw2EKd6cnXPyB9FsJK84yFnZEWNjXYwtQvLHgMtvERz6J6kAzVdbYumJjGosCrhDMnjbFqFWQEbqUvnYgKYy8iH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xnhv8STU5Gs4UC2vz6xMiHMv6v2gZwdYjvqkJ6XwePkkzyVeCCuEBLsWacRroRLhgKs4e9WAtoi7rnDkqexyiu3",
  "key1": "2o2T2jCbTWzNnYx55vUcrhdVSmCJZARdm5x9BAgSnKatBMDfRyr9qPK8DVNEDF8oGmyHYuvmRPLU5isdNEb3oktm",
  "key2": "4xfGKJJrXcnGj26nvFdozbU3kRYAedi1v7X7tMS7PZSaS363ACqFGRs8fmGhtfoR3XfLLxjpz3WRhU7VSFV1DLNt",
  "key3": "2ihxFoZX1FvQ672yrkv4tsXEYUV9YdesixvFzV4ixzjFN6PdLHkKDJaUsw413JGfsDauAzKXWvs2JPCxLmDQjdvB",
  "key4": "2vMb9eK82bj5U23KkZfyNXo2QeYxphfcsU4FVqFDpPASQUeX9xYq9ZqHwVDgkFPp7JJo5iKPp8dhAGcXFtoJsTai",
  "key5": "49MWx373Cyej4JWYAGhic6Nf8bge4Ba1jaUuCbwXSeiYsxHXd3jUVfwDpahmexeJfLdPkpg4Njnw68LcThDW36Cq",
  "key6": "4JBnH64ubxrfWGrpkVg72xS7BiU6QdvBkkYRk95GbvEQCzGgbRrxVFieCAuzu9TQDQU17LUtvyum2xHqWfjE7m46",
  "key7": "4nDra2ntvdvZSHUcM73QKYXPRK2d76raT9jPhujiZCq1XWKt6F41nobhoVbLvrTvQNh9RGY7KW8M61Ps8AdCnnVM",
  "key8": "3rcitkMcdzz8gHAiXAbCzTF5kYeZVvfgZSwSsmYY7DuZJsGGhykg9C9tYDweE5e38j7gwdjATiLKVMoAWKwEbUyP",
  "key9": "31j412QeydoMTLsKBwwsrkjfKuSSREfEmFgm3WzddfHu5e9qSzppyhZX6XBnFHxMbtNTcB4eiD52fgS919EBZJA2",
  "key10": "5AuuwTcFrW7UHH3z2MicPDbK3ZsUAkm4aNkzWqmf9XbG9ukWJJdwqBJrJ2UhrZfhtBPtSJY22gFs913y4wDacakv",
  "key11": "4pMgY4NzHYZ3a1Uhb9kT5rfEGDY5nANpPxsB36ycftM1Zag97ij5uB6UDinBsvBauzHvYTMiFsr2TtGG7AZTgUWY",
  "key12": "5AFdueTnHJ55YoaChPPfi1u9Ee5mtH81FZHBjA5mXze63TrcZeB3CeYm8jEqvt4DC2mWeZYtJfyX65himvBkezQr",
  "key13": "2ZS4UMoYK8segCW3FBoARyiLZwqqKNbExgcxYFggbpBhRF9EGMSantPUs56YTjozpKYQNy4R1j8rr4dXUhiWtSqT",
  "key14": "24Ex2XgNuyfnM8BNfUKS8Q5hr6MdERFToVPMHNRUbyRvJjWTpikmiVo4VYE479VcUHreWmNKVYwe3ASec9A5VWtb",
  "key15": "LM3rvuNSwcHk2vWZVTWmCwKfcQH7eMYNm6WHvx58EuVNmyYt5uG6pGLkvdXsA8DMv3rAZS6a9DA21itDirov98Y",
  "key16": "2mENxFWywVkM67aPEZEsgTZ47gV3P4Sgc8DyR1fxVGsc88RGKZfv2V7z6w1oKyqWvP6kCmzAJAy5Y3BjwfzfMTkN",
  "key17": "4VwdV3ko98a74msjTpZwaJs2VVQwctxvDiJTDcys2WqjkvhGYLk2vtadYydmeTbxnHho8sHFqqiMQB3cSVjM8Qa5",
  "key18": "2kDYYCq71ndzsNu2ABR3DY2zbxrxPDSstYS7pUrgA7iuVhNBEsCvUt1yj4AuFuXNbtFHYJrFM9QUDbF55ZKfQqoa",
  "key19": "2XfTv68KeFBAmu7gszqNj3pmGdYipXypveDkEtucaN74yhraUTrsexCkrpkcyho4ix42bZahKSQYFaJY6EeBmprh",
  "key20": "2TzCaknE3yApbCGWX1KSi3BUhEY3wLrAFCqYMKGPj658dNTn5iracfiP4QFqUWEfqMEHi4GBVv3bnw4WMY5Twug4",
  "key21": "36rNALdRjHS1Lay43A687N5rD4uerRUA1HRTT9SwKwUDb4i5HXZXqBhfgWy6RSeq5SZYXdbVADErKt17NxvBzfDy",
  "key22": "2z3eTktfoffJz5RNoSVJCkfsi3AFbVvWCjx3BhBmGVwzJmcRut1wGDkHKMk3udc6thPyMTHhyfGigbmxN6Hywxhv",
  "key23": "2eLoh11RSBq66PMynyGW7tsitmMPNCdURXJXYPdiCeAmBD4AfoJGDjTbhNBKKRewwHpdpLfsqwA5uVT6EWUJuwCg",
  "key24": "2ynmUqZAjCkpRbPg2a9hDzKiC8QThc83nDiTzUnzuLDGYXs3cRgZaKfWoJGtYfbYWu4bu7LDsXhZ62kVfLWYahxY",
  "key25": "VAfRcsVmwz2grBtJhS2mjpj7iVmnbGaq8M7tGXHXJVNik5Wo2Tq5TEXG18uLP96xFyPNcWUp9EMaDnifigsQqpB",
  "key26": "2CED3GiqSArbuqcoHraiS8Af35JYXy96cafK3SkXkii6ZcdVTajFZXUJKCsSut7bYwZf2P2c4hNgQJSHdybuxM7A",
  "key27": "4MeGpQpJ87m8jnAs42S8sPBUKBc5rmdYWqXndVirnxvZNSbZALJY2FceRQvhoGgF9TtesHorRGZr5Jd4Vkon566F",
  "key28": "4oNkBo4w7uymBYmJ8BSrCeo4pKkJiYwW92GSHAkRfQ1ULqFVhycqzYq1jtq3Bt91LV5RfM9Gq5F9Ep6RPsaNbodZ",
  "key29": "5JPpuyxprccLHVGQRDbFLdYYnQgqu95u5kvMFku5dC2oUCu3eDjQpcGHVJ6EUgw3qMLfZBhEHwgYawhVuULPSRHJ",
  "key30": "2nZBUZ8BUwiWazD399pi3Ls7VFREv9hZjtJX3UKpQxv14a3cCxdD9UV9dGgTEx7B71TQsVHExULYyhnPTRuoUjAF",
  "key31": "Eq2Y4WtV7CnytxjmjNzqjn6udNyRKMmb2Kgmk2spQf27fqVHEFYoZtJRbDoJ1tv4jHytP5inzd8KorDU2rpJHhx",
  "key32": "Q1Sg1MEKsKt8pZkCWu48RR18oNpyjYV66V8TjpHRg4K5YeA5FeGgNUy3ZbVDPn3oWpSKTWxh7BG7G4gPWphB7pn",
  "key33": "42mGu8m53hx86aDzzbvoKEDvZhGYfNbm4EKJn2p7WvShjRxqdTDRna5W3BZJFJhEaVywUHzL5HFLV1RTVDnn5nsQ",
  "key34": "4Z3LktVjMtJ9YaoTs5QaLYLp29ogqvZB6wpQXTu2km4VDTDKFc7YeZEweRq6zeRkmEQxf1qfqwMNHNwFgDhpDCnc",
  "key35": "GRFfFHnJ5s5LqAWPHtdevLM8Q68S9BAerTUTP47UwHQLJKgbv9C1RGWkjXMT1MGeegWJ7gtV3eVRwu91kvEAkQr",
  "key36": "4XCUYW684FuY12hSevVWFXGGi5fg3xcmDHKSJpCgCiUKNsmeHrpenABNDveU77xBvaPD9PkJC8TZdh1W9f6sztpF",
  "key37": "4QRxGJYdUmQJF5qbtjmYX4QrBGniT8Ka3zAsS4MWJrbZEvBJbG5kHDzenwjiEtFH1GbGUEQZXKtAQt1athCWoYyg",
  "key38": "3vKNohqcWgktCadNUP8vS7GJcNx3W9mLg4C5R87bA12tcjpHUj6BmhjgqrbbmVMjok1MpqSWZcsKmTkZt6nzuk6B",
  "key39": "4ggDUNdJ5wWH5r2rn9wJTUAFFGq3QPjRFuoSc6ukaCphUXsxp992vPRtsVf5LmtaCNjtHhX9L9s7WYnSAi9ip3FZ",
  "key40": "2MRDXouoANL3x3P6ZwzEWr4x16vXg8CppWXxQx82ndi5bbdgm7LURxDxuSmUXdDKGP36LC4HV9TYDj1zGyU6FTJW",
  "key41": "2JwJ5jkHDRzG4uMKevfBTtg9QY1Zohp7tiFHAbZ1obUVXWynWnT1Huy1zbdr66okEc68R9B1FE59pGdwX6neptWU",
  "key42": "2ZFXsyQQd4TXej1qvdoEaqrtPS8dtvt6ovXpNqxja2NZE6ymV6a3WHgzvjZfRX1WwJM1vGvp4FMAmEXtSxjtvo1B"
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
