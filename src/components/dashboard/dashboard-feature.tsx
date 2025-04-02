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
    "5sMbZG6WWMnu2LwWX3xuHKg2bS3McdS3ifUHEHgpqMenUkipMqfb23axN22W25jjG9TWeuD5rne7pijak6NLiNPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36KbLGc1ff1vGRJktxgda5j4LUYahZHPzunu1ueNNXJtK4VXKxazHwjsXHNRB6QqDE5tDi6nwc9wqn6B51VrGQAX",
  "key1": "3a2tsG1BnBrcyWjxiXQw5ZzAyjfdW9xFPevfASjuJbBXrtDL8AyexLVi26KrSihHNfYyu559hkriPMXrtYzZJo7A",
  "key2": "4zFQmEXCFoEcJVavjSWHdq8nLKTenSgsLrgdzoU2Pi7AUNQx5bPCDBSUKyLnc556Diw77M5VMMdF1vs8HndgLymm",
  "key3": "4kgrZDXGb5s75zhMC63pA9YC8Pg4mHwoHdoqQytUYvcxYVEpNYVJZZjWgrgTXvfzMGpphU1yt5r3kFvyTtPngztT",
  "key4": "4KseSdPEhDTHsXfkX8L9Sn4YoYocrMNniyMR2YWxSyQuek36342qN1SYrHES862UEqd5RZGXyHDFqx6XCku6s8rZ",
  "key5": "56qLxrCCvcK4ofAT7tLFibgkLhKDhCEGFEZGWqQB33Zex4gqzS4K2bzyorMQawAurEGwdTZ8dEFnAP2ZZ5AhTR6",
  "key6": "vRAqWkX83uUQ69KUybCr392yKnSDvGsNkyGpfd6CoRW8f2n48UHv8zKhMqRg5yDXtmfYafDAxugGgjem2yWcTtd",
  "key7": "3S9yNCqKvV9gW8U1A29293XBhxS6mZzL1bi7HVM9ktaGd89Atew9mSpchZLxo14ME48ziEfyyQeigxCZvVBCtKgH",
  "key8": "b8KHCZJqYUdr5Sxq4oFjicfZ6n2gEPEA53RQpFMJaYYX2i8kzd2wZQV9sMUvZmp15TPtQJQqzCfhz3bdtvz34U6",
  "key9": "3awKxiK3UqcLDkxG8ekPMkzqU57r2wEvuc5VxySo9dem9KB7xLYb7YV2gbeeDg4EXKVo95K1Fmpa79DJvCUMkRSE",
  "key10": "5qinVQk1yif47FmJHR9R9h3ZHreHaY5NknnVq4SwQNZ4vJqYF5BFLtM9m685dM1MrzSWHiAufhcNq2oV8nLnN4XW",
  "key11": "2PHrBbiYhwndyHSmpmtCrBjNbZ5KgkuhHuoYY9GQ4MsuJjoCbKcaFJNLd6XBrJNBUwv5Y1Xr6PZbuqF8pbCNqAy3",
  "key12": "2JC5V8rAYFVXTzxagGtr5Mj9VUsTdU5ozegCd2qFMR57m2CzK5qEcLeSxhLP49CXUu2heGFUgPNKfSfV2PVyYmkP",
  "key13": "63TSdXKTxwMPjri1VhWJjByeFf3YvxVhYd2hrJ2wFGr2gFeLkPsJBCt9Ln8H77cQG9i5zNAVp7EXwCJYfq4oFqR4",
  "key14": "2M9um2uGCCt9kQLhkydSvmSi26V9juq8jiBStmAMrhL7odRatqTjdZuu57zwpmwAp2855erm9kM8tLP5o1RAXi2i",
  "key15": "5FhYAi9EUrvVcmDApKsy7nJ6o3eGvvehERNtV5HYXint1VSbxeQRKXsbxHeA3VaPRQzTjYnrqRv7gRuZkLqfe1at",
  "key16": "Lv97ixB9uf52iwzM9S6AVghYkLmNoRQf8s6JLMxu1VbTAcMDi7emmegvaR7DRpuibwJSQDrLyoP2gJhak68ZJZ9",
  "key17": "JDfF4LHzHFW3oChjcgFYf2LkNEPYYPZV3WS2oZT1kZH6UxiTGiXGB845vxUzWzBfeYQ5GmBA7Xk3HxaaVNkakNy",
  "key18": "56Hyo5LAM9TjZ47xnpesX3irfnZmRHaDW6iZfLKyWN3E3V5WVzKAemq1dWHFZYW7RXcps3kftmNmb6PvyhG2CX6m",
  "key19": "3U2Ca9LNxTbaZmgDfoa1dVf7Ch5Dbvnhi8BaUKRM1ZxgXPzzY8wwSFBvvtUPch7ESUzqc8wasGZfNTLzMTmZNGBf",
  "key20": "4UZhLhPWmZ2jTxZocDNft5UVVQ3BTbrqX99D4tfZM8mZiaDmQzDgojXgb3cd4Ppprb32xmZYjLcAeu7RJX2XkMMc",
  "key21": "63Mgq9E8JKJQtmuvbSy9n71mh6nZAbLThDCzk4213tMUQGYCPdz2kzpynsdqNkctVKQwNh9NxuiDGk5QMvKGjhT1",
  "key22": "4WpgHxVm765WXG6tsaPcdrsfFGLyrj3mcZok8bTokdjLLVNaH5NQm7Hi6qKy1hAemsMHtEb4uGko1RuvaseWPXAn",
  "key23": "5PsHsDsSB5fVNA8GPAs4Z9A31bhBZen6JDTziszJ5z6qXrD4iRnsbCo5rudUSuyVtS77s6A3i4sPWefzGYKxqjwX",
  "key24": "39TAfAB4QbSLiZGvKmpfbiAYAsun5EDcF2MRGxqiuoqq7yoAGCEMo4mDbQZos5x1FY1tN9MymZhUr5Qj7UKL2XbE",
  "key25": "5N4XsiHyeHn4dSag2iomZNvH2sgatTQB2rgreXNNMSSpPNCqxsRwnrzQrEPqe38593A3j7svH3NbdkJ6r1Nsgkfv",
  "key26": "4XjfCW9cyDaUK6wi6ziHpv333uAoHxNmRgbjiDcfAwCYvTaRKcv9BPLuZBmi6TVcgWWCM1tVVE3bA3r7HRNHYNsW",
  "key27": "9pdF7NrVNZCTp9Qo5ovVQYZSrchVPU3ZYVDJfaE8V5ZAq2YY7RVSMmtDvP8GGvEBgn9tX6Fx4QRySsAcQXhvKn3",
  "key28": "3h5XaZLCaNCE5Yrwcbm87F33cAbg3P7z4KLPNwhoix1kDWkoxbYL9Tfsc8KoYxbaQpdi7ySqvD11SDgB4WabfqQV",
  "key29": "4ii3Rp6s8erxS3aYbQEKsWwEgbKzfgHeaefx9hfYMiU6sau6rogYGWpGrhcjKnvZ7A84N5xJE7ScLYvZwrBoAF7P",
  "key30": "3qGAnHHFwEeAWMHETEZzDujqFwaEBn1zMYfZWtyPN1x8ZVA8LfFdb9taUSrmuuSqFQ9wJhkNo6B9Le6F6SAA8byz",
  "key31": "5KzdEeL2qoh8WiGF7du8cwUcCvyfZ4jBa6dr218TsMJD1yckZpkFMg1x8dnYWMRC6k1QjRUA9F8vw9KitDrCihy",
  "key32": "3pL51RbBYVcTApgKoi9mfjqzcxvVG3MPdMaXFKQ5kWGfw6pvmp4QrcFcKbAYuh8BSPmxeESLSWUZnGVGwAecBHx4",
  "key33": "UJp4moLzvFxx32zePd7tjaqCWaVuawutXfEC9K8rmRU357sL8ciCNPe5CYbxPHwiVBuFkUApuFjVwcGjMvwBBkC",
  "key34": "3vKF2QZuQF79EsbaiZGxBGap9YNMpyhn3UumdEsVEoiiibctXQMe2XfngjszHetAMLvDTtC5rr6aqrZFCWk48nb3",
  "key35": "4K2sZUkTkCKkvtYjVPsakUYnYN4ekrs3ENTwyQw19QZvh7s3hwk81jJBUtSTQrd1A89WpTQXpHysHeTgmWTxidMf",
  "key36": "5osEfGJcmQhimFm1pLsU8VHE3JFH3tjuj4TJUtVNidrW4u8ttf3jYwQ2mJaf2WUwf4eL8KKUXNSeJvrBrNCWXWdb"
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
