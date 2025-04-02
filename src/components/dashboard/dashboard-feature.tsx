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
    "2JagKnEGKt3WrdR5sTPugYgsY9FdkBnS4ZC47AVCpzNHtDjBvQ5yNxYTJqax26YGA4dNMLav86Jsz6Pr1uy42NQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53YzNqCJftvuKzaXc3ujuRb112T6Z9FTcehvR5MSQ8THn75dHFL3azRGi5yqUWbZE9U7VDJxcEb6ouD4s8R1hYVJ",
  "key1": "2kp4oAGEXMwx7FqAcAkuBhZCiRRaSuMf1XRiYFgHiWZphJMZtDWJ4oFG8PSeHF56ZMWin43Rv9xAN76uG9udT3TM",
  "key2": "54gkepbBk5ynp9DgjUzkVP3Dft7ivwfCUoBnMgaUkicr3PBUh7vT5eYv4ySvpbQWS1AkRXNwcKYtYbQpcTfcRnzi",
  "key3": "5UFRfHd6ZTq7C4BNMpTrsPk217rLtjVEXkfWUpHR77tP2k65ouBnx5oNiyUUvPLmQXCYCuSWERpM8vqVcD9CADxM",
  "key4": "2VRs8jXJZGhKQZH7sBNr25vD4iggovwKgDe6H7u4rzzAG51whPet6iJnfvicb5RmVTN7GkBHCjvqPfN55Q6MTAwo",
  "key5": "BgfV8iZuSPuSipea2PCjKcMiYb9co1sGs4aV5pwaEt6rbzZePRYFqFNeSkgLzaM5NRbawAYh53T8jfbcyjhnGmP",
  "key6": "3QwUQyayhYDuSHoLQgePQoJRYBiE9hyF9oh4YxsNohhr6VLtDVuohMEBkgScEdQDL3baAsi1fq8JCj9sddfkioRq",
  "key7": "4dicZj5Kwarj9BZX5xMeG7or2TGNebz8qNqxdatMboF7cKi3XPf8pQYbqPGef5cxaGFgxLUEX2He9iMitpWumq1M",
  "key8": "5CicEnp8CsLPFNXeusQqbg3Q8Mr6ByKwXptWeZgoB5JtN2opsjuigFfTLDdbnZoo78U6FLXNnAWa3zkTWznDsnkB",
  "key9": "3k95yNpXJsuwCXJPdXt5QbE6Ec55VMuwSsfpHU3LAc1AqEgXpyDVtaU55f9EENisET9JZkhaTTwV2Pp2rXgfvF3q",
  "key10": "5kW6vBaNaFq4iXHb7pczWCvoQRwbDdjnkuri72CS86KhhKCZYx3dstVE8wwVHi7SiyiZ2u2nte76bMmiLKtnsnrX",
  "key11": "2cuRH1zmxxXgbAVKmhrDVgaT2bWQrRZ8hCVB4S3FWactGqUFjYncUnsKj89AY8iHUDbz9mp6HKGLkmpmLZdhi2KA",
  "key12": "FavT5JjJHKpTcmCbqrxdGfWgZMchN423rD325qHCfoxzM5GyGTHDE72rSt6TMoiF2VgjMEbqVkpkj8p1qdwLQsq",
  "key13": "4YeZu13w3cEggqraBK6WMRf1Z3kDJGxEKLPbAGtQz6tUdmUi7MnjrxjVLm18m7YzXdcy9T1fYU73dctW7T9HwRyt",
  "key14": "4CBY2BMRLvXbzBWDpgngRvz4zkWeViL4yyiF4V6dMnak4BHrGHkRUJd3Q8pW69B2qwboYrZxwcTNaAMxwMZWWmcR",
  "key15": "5Y9ZZV8ktM4CHx1LB1CBp5QgxuVbisvABcgU5xFjY9bf8NjddGEn6Hnb6nouAaegM5fWapT7ZGAa9KzGTbXaKXVS",
  "key16": "52dAGxX5zccbp1GZCMXHmTLCm3SD5JHpCxoKNEsGGgNiR1N3kA6S4W1bnuqQ27eBM64Vuj8yhuuMfoen9b872aPX",
  "key17": "3nwAdUygfVt589r1Phq6xza6V2VLRfq8Xv8KekjJBQ9mV3BTAMk3iRxf4DUK6Nc6HwHbygVc6GDiWqPdr3CfQARp",
  "key18": "3u1uC3Vc2Y1j5AkkRWoYjTTAzFz5Vb8DCpWeiZrMqeE1Qg8WfwQBxaPFMKGrLUw53NzW7rNDrnqAJhTLAXfgebEB",
  "key19": "xLR57WAaJGMJBr64VXC725e8xQmvcX6h7HKxg7odM9znGuJCe4snSyF1nmtS4vKxhinctdZsxhrnRTF1NtUGiWH",
  "key20": "57Krczuex4oKmbCW3bxyBbCbMq6PPUtZLMTKGo69UePyquGGiFqDFkY392KsD151EFmFXPot7nsnRE7PwZbVRsBV",
  "key21": "5tFvAWA2qc2YqkMXPjXYdtwEiEasCQfdWRiULdzA4nhcVcpK1BCwfTtvDb5gQtzWtaKPxw2dghaC47A5G8XDvQr8",
  "key22": "3JsvaFdGQGVHpw2NJXFmaK73Gws7Au5zJmrEJyALWfUVzgivk7qnK1fTpsWznkz4EwwppGdqTjHZfvsbKon4fL2A",
  "key23": "3w92wSWpuj28xNiEbAkA8j6jtUh16cgAk2EW4U5D121qNVRE4TH61DcctVDnKUakwu2jGh4rmfnj8sqpVhUHimEg",
  "key24": "3XbvKkPQYR4cKVc6WjdNNUAy91DqaXX8k13gs8qUgsgnb1Uqv7L1TkYTKQF6sLjY2gvc3UQpxXQNvsQw4Na7MkWo",
  "key25": "fJFxhUPTUCfV1U9F8SkugZ8dekoQm5pk4CrcitbQ5MZR9iUkPpo9TTGed6BUhyu6kAhC9vupNStjsDJepKPmY1X",
  "key26": "uCWMqHVS8Fp2NRmRnLPAWhYqbYqKGKvUaNEqKHhyVczGeJoYnSiosm4XVD5LaE5XjDFZfYqvc8aABYfFQakkhpL",
  "key27": "HRoLAK8tcGrxtftyJjJjygACrWCcFJvnKDU11b9qyyoAKXQf5oUk8Nvna6oTWSJt786PH5FZZmifmDHYKL8yPTi",
  "key28": "5T6QkbYddTg4w6kuGF8eaGJbWQ1DUg1TetnaKorJdw7puwWhboTEWaE7gC9qXUFUEC5SDuLkFNvT9Pt69UqRhBmC",
  "key29": "27QXvAyiVgJg5JSV6S8GM3PbD4nKjUrZeG2z4dkikrfCN8f7ohy5XbeanLjnL5FREAAbzZQzoJK2HJPbvBqhA6cp",
  "key30": "5kpyt6uFvdqWQntDnFjhNxCVanxhto7UCsZep5fBjC1Fqih3iMD5svFouNuYLSiozhA1ZCBiK3nZtYekPJn7NWER",
  "key31": "hgRMaBnMvcbZLRfDex5LyWDjd1tHxyTtmwPL5YMCPbL4vu8CvNaX8XrfSsNmnVw6hSta8oAeX4nnQaegqDZ5EY1",
  "key32": "28DyUsm2bdJUvCVV8Zd3GD9gzYDn6hVUozoSvS1NzwnoAu4hbNnuANHVca88zQjweSWFJcbNeD9mQ8kh3p3wDumv",
  "key33": "3TWeByRFVv4oRTKeP3RRoMBev7ZpkKWzp62APAnQuXinMw4Pe3LwN7UqR32GPTHHFxg6qooayPMF1hENDTfGCbX1",
  "key34": "5dFwrP8VYeTSxavP1KrmbMn8LGAjxuSDJzQEZKUubsmJ8yrgxdgeQi72e6SDNqzWB6qyKTE26pjpvaJR2ro8F1Qc",
  "key35": "5HG3EFr16Uht36iHdN9i7btffria9CekjmTAVfLh8cz4d1KZSC76rtaR8YuvvUpiVC42bVuPAuKEA64XEDsMhu55",
  "key36": "49feQZGX6onQYnGgHqcvWXTushdi9uMYAwFDYEPZDbmRdsbmcWLMq9qhmZeB3jEqnUcQNozkqxq68qw8bJf9SKxz",
  "key37": "3Cko7bYmHsU7rKfMHiMNpaQGendtZQXdTKG5v3SYAqFpVcabfdys66zuUxRNpVaWUAcnwgTZ7TvtufsH7gD99WMs"
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
