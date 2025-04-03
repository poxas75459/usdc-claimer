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
    "61JB3qp4tde9t1Ujwm1mp7g4c4GRubB8fJHJHUuiYL3jSuRUZqak5x9R746xd7wiUbWQymdKtp1dCGGX7YKrCuzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQjy28BKGSWPFfawV1CPvsQg5sXkw7APuDb3c4AX64B1dLojYuG8KdHFzbFgtrnUXQqFmu5yjCvvA5rg8boHMFV",
  "key1": "P7nGPdwtxu76G8gA3f7q3HNX5wFLHcgwR84BhRhKrMMbtgehrumpuMK7Wpk6W24sG6ftBXcPw71oQJPrNqqyvjN",
  "key2": "5XTP6u1GqVwuU3qDPKX1WPbThymfJJSxpYRZjJnsL7D4A4yqX6A2MuyLHsCxxyDVhBXPjhzniEG7YgHXDbCyv51V",
  "key3": "5QZhJFR3QybLmg9vEzvypGKpicXR2yPZAjpmEdCF5xpxT9mrHT7uJ3z7UfiLKi2E65oqvLp6GzjfvFFqw9iC2iEe",
  "key4": "64ddA26E1FH6LEJw5u4psv4QFxhK6uLrPWvsdd5RkSNYYJuKF5KPdsj126NEFJRzPVMJuqTFLjx8FHERnH6KNnDv",
  "key5": "5YTumgh8dw8nnWfeJYHFQBqLjJpfr6dNJzdVc9Ki6seKkN1oPSYdh8NqD5dPhqFfx3DtD8ne4FHES2k8DhTqnJkD",
  "key6": "cP8ccPKSDz5sS33ELzRhLCQQdu5w9Hu1cDiEoB6KjerhcVfEkyuiBpMgbkJt4csqj2RhX2uSrvgrgpLJtZi8ne6",
  "key7": "65QxCV5NCXrniVf8Jb49UgmXJ2VgMeoeprjxGFBpbp3fLR8z7CqUxoKBpjiKDEkr7a2UbH6Kt8jwJFtpLiSCAbvo",
  "key8": "mPEBosUwJRDMkW2ZFsy6RRxJaagv9vFxi7JGuJ85rzTA6qdtzdB5WvTB29Tc8bF5PeXeYNuHREU1usu21NqGQSv",
  "key9": "2MLS4ZF6wbQ7ra27hcTJCwvHKyiS1SyoPaz6DiYwX28yPppXyWpm57Ujn4L2i91zdeL4AsPtT9FntnZYg6VgazNr",
  "key10": "2UP9EHp8scoPoSqQbto1LCCYid7ioDqG1yrgrpnfQCSNw7rC8kLMKb977ZZQe1LwZwkh5x1tvCcwWHEGwDMDMHrp",
  "key11": "4U7AYFakvmxvfGVYhru3iUSdLEd7ZF6Gy2MDCaSAnsBiZgCxXH2xKv7B4irrtb34e8bhK2PvbjuoBa8QnxmpXdEs",
  "key12": "5gCzQ4gnABipkz1VNJU5VifwAVsy2PzbtBmUkJbQPGp274E2bbcmZTT6gc6tqyryP5fapmqeCNRhfLyQFpdRspVf",
  "key13": "2vaAQwXzXx5MHUiGAjH44f5GMWuE1nqACacmfYzLSD43yvUs1xQ6nNtRKGz7PyusX6Vtjj8qCi6JDvxipXRfLKVK",
  "key14": "5xtX6n83KVs416pPjxqqS8QCGapSqF9cbL62cfz7Yikpx2JgEdcgpFm34VxqmWc3dZnwE2btXkW4gEgJuuKMdPGp",
  "key15": "54A7CwcLK18KAo41Lz9YKMMzXqdG7Bp5x3g5BE8v4jQ35C5ujgymfd1ZoRSGmcNcy2Nao1vWkjriCnWh9rFuhrCg",
  "key16": "QUvQT6jhPpUQ8Ciny8AN2ovd7qNF21ARdx6aBd1gPdDrwpX3NWQpt3cLsjinbZPKrB3kJ4iZFSdJFBUcpB6ZTmX",
  "key17": "2VbUUap1j9Bw2ezGLc82yQCUptvP3uS8iYKnb45Z7L2k3xE7sRSmxhgCBK8sokxxs9pQEzKntV919xGYm7w6iFCi",
  "key18": "27qW9kGY4RujgPrRZiZQSrYmDt3bRe6oEB1H1ftZJrEU3soT9EcWbvq26mnG8TE9KmmkKRZr1TE3Qs7FbNrhj897",
  "key19": "3ooKRSdi2GdCUsubioKAwhn6ckLkRN5cq9LT4CzjukGa72gaXCFdJmzhnMnBd7b6kRJY2vf6p4Kb8gpFZ1wLsYDE",
  "key20": "5SkcX7wHSrQsVcVwEroDXTLsrKiR7gyA1phCrektXDcGcua5RqhkbbYTz13vYDfMJYYTqfvw3sF8KaKBionjiKK3",
  "key21": "5Sss6afhsqzRGetpoXHt1F5pnDbNri1eXNtGjPdanqQiaTVYVhd9ifWZDLxqCqGjRJM7PdmHw4W4KgpdyUJGcADL",
  "key22": "4QFVpdFwhA6UCPJr3msKoBtYDpvoQfnWBDNNQrmukENrnEApRduzdaJxqHF6wqjkKCXDtXro9SFb5CptoaUtLB8c",
  "key23": "2dQ4DLUjoXRuNUoBLUyVEHeLVYWyf2HmJNPmmyBMhV6TmBsUR4gjrCre5HG7QYQ1nZvkxBopVrcxzjeVGPVSk5ZU",
  "key24": "3qLF4yhZKqUJmcziRZexmZeP5TX1EGL3PwQH4seyCK5LkLXUwbsQ9RmpNvLQUs9A5m37Yj52XJbUYRPaJRNR48eN",
  "key25": "2jrYUuTvPE1u9pdC5CKtgjz74VaBZCZSbGk7ig95yZDzXoz9dB18nuFkkKS2LVzfmTY7wVNcJ7GGLSMpGRLB6dnk",
  "key26": "P7gHLfZhtNguzXGp7AaW8Y77zszv2ZH3ZruyHY1whdtQq1ATsBJc3PkDkm6xsiNXwMtiH497BBWqTpoxR4mqcQJ",
  "key27": "59M8aE1YTke3Pj11d3fTyRZUdLRPL7rJbgKz7DAHYZY6VUHXpRuVeiGN7kvoWTKQU7WNQ1Nv2UrJPJ8YYwG6Pgmi",
  "key28": "4cVeucaj5n1gjc9nqoQsV24yX2rHr8WjmQREKEQ1EztibdYitpvSsisJA4ZNMJXKoSJWX6cL8JKLWGroFZSGnNja",
  "key29": "4zZ4eW2ZrH8E7Ze5Vvk8XUszwsKRi8VwWXYvkow3QaXJMhd6zctKPCeSEoFAsDV18pLfy5XzzHDakzaLPZcL1NKj",
  "key30": "XCqiVPZeEvrRpJauXHbbgARJM43GKTe89V58PmC3F7eoi66TiKAfFCpYbpCwsZa3Up4XLPhdwLzVqwAS7rQDrhK",
  "key31": "mpWcS8ppBJATwM1Lm9ykcVB826TjSvfKkvKoX45iED6rLDLiDQ83mekmczLZSYH8TosrFXQ1S8L6MJNF8wKNvq3",
  "key32": "HNgqXrHCxRfmddjRksC2MvjXdWt6RWwMryyGsgRjq7ARpTTF82t1VEhrYnKpVzLujAJc5ytj3tEhYs8SZwt4cFv",
  "key33": "3yMKcd7Frg9eHZhNePvjFJHUabsGni93acBtW3hbwqsopN3yAzQg8DJ46rpQFgjekhVgWz1yt6isZeEixyuzcuQh",
  "key34": "2RXrRKY8Lg3dQrC3niffU2vqkQVN9P1KHAuh75QYtMboMh7tyuhc6Ts99CZxZHrRAzh91hc5go5J2CxYtPboVMKk",
  "key35": "2Y5bTZYnfMtFE8TsjD13n5eXeoHkhiEuzqhGaLnd1GsXUHQBMe4DHTMbfVq4A1EKzZQLsn6oU3dbxjBHof4wfd1y",
  "key36": "2xBMyg9uS6zZDsizTwdFCYaGxfYgmNQvWHneh2soKmuvoy7yENs7nS33EwqTxuUGSWa8CMjckqQ4oDvKC7s7YRQg",
  "key37": "mJPD3LSu6WFfct8PMufnBh2cbyXmvqMzECnxrqs8sbizgcrjHKqjLm5qHhmRUFfTokXahJxL4Y4iVDCCcf1ViSG"
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
