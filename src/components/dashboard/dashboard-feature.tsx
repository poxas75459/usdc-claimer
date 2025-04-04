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
    "3UVopidkZxvL5m2A3VdKFQAdR7bUG18G7SfjEkzANYpVwNRV6kYV477HegTDJ2EnXBRmnbTqzavRTuHmkCjAmBji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AoT1vne9J7F9NDA4edxGNxjvtn5foEFYtt4FVv5usjvrVEHsF3QQmEPqqcbV8yncU9hgoZRvztgQFpkTU8kM9LQ",
  "key1": "2X5v23YbpjPyxUVaXpyRCcdjLGdU1cdyfyg5saf3BhYM9VwVvkdqDjxfY4m3Gd6xZudShCpEgqFVa7J62EUDguBN",
  "key2": "5Te9QVakBT1WRWxFMt6jRYqSH29CkWsRKKm5KcUKdpu51VdcA6hhiDAgvWfLeEbwYh7ZJuok7BL42MBa5Aoraa9y",
  "key3": "3Jf38YdQay1XTRjFS63nt9YNpkQQJbcw5CWZdG6KFS4VGaiBEFEvuzBwN2TtsZ9G6CBvASueFf2WFhWVTWdfGnrZ",
  "key4": "483fZxFbhYUu7aMKAWcaDVArCc99SCorKmxjHq1V7JL8S5suRzbzfqyTUDNDiaZ5o8DrHm1hZpN2X3wo144rJS8n",
  "key5": "4o6KuMDH3LU3pSMagkf4XqRx8tTFAwPyyeQyidN8gFJfuVQs2sroQUmKWRW8AGnbB3TdQUhrxTSridPEU5yrjtpB",
  "key6": "4NGkaNUJf6AmSGk8wkbZgGtcGLCVF1mZsgZGDzYBCmW7mVu3RQ1GNgK8rte7LADSWehL5c9M6r25zPcUjGatv6Nk",
  "key7": "3Mc1ELaD5k5PhPapdgZAuzmszKr6J6Ye2MzY8tRhREKdMbnr9bCHdaudR8PP9mjjnaYScLusFbKMZE8h1vm8KzjZ",
  "key8": "42LMrfdCkjGZJE7cgv9whRLgtUKgxHtCN835TDMqJycTZtJDBNCEp2gid4J1z2rtbUYMMXUm4eqGuAaHipZ3p92H",
  "key9": "2gyQFghP9RyX4Cd5Y9Z1ah56rifPeuTwq8Mf2aT7g3D9RUsBrpHNLpm1jWUz3pQ4VQ4m3r3T8GjextJerWk9n2rJ",
  "key10": "49iGtZ4psaJNwvtfzirjYoJC1M5ExtiCTcZL7DjtbQ2VZ48fDax5Uor3haNdkFpmgd6ff6p8fFzXfDpbXhWEt2w2",
  "key11": "vhN4gh4oa9rwfe5C6HMpvomCBSjqRQs9DEzdYvwB9xmo6r133jZPPTor7B54sp2ApLSn6iuUMd6fRUqhG77UL6E",
  "key12": "5zRrAnF5puaTLSAdM9enW2QAUXxymWCVttu1epLhkdKUdytexsuqpHhs9sMFzhZMhm5142kGfqbqXsnVS7ruykp5",
  "key13": "58jTwKmXX4FvRtrQQt3kBa7hQ6sTXkH47LsXAHa1Yt7VF8VvVBPwRQkTqfSrrKNrpKAWjxoqzr827abtcDGLLgyG",
  "key14": "TANdiM5EYYZLmUa47sFAWZJ8rjZLQePEhUcWofvNUr35QA6EKpBwgmdicZF76MvV2Fu4jdyGfD9Y7nUq2MimvZ7",
  "key15": "3SwE2Js28Ww2zyng46Ucy73Pv5oBPdXHSgBxg8ki6QYkRYoaxxbkyHRt5ELSrVnWjShzhsvj51rivyuXBvZnxNAb",
  "key16": "36kEbLDyzZ8fK2Dbu5KURwcKB8CTfzsHNZDweDDD1B3GXjSTZuD1278Ehx2dvFpVYAjPRhhAGrDbkzo9y1AP1cFd",
  "key17": "5hWHiMDEeeunUEwAPEX4v5JUaoFpSN5nWhLEzAtN2BmG2g4aP8Hmfd9LrWxhvfYvCrzGuSmHodefDWDiSfmQQSW5",
  "key18": "5ye5CFq7dXKYqYrRNiRB1CCv1gkJFe7HG4x1kuffhxierz3UxL2TXA9vAYjR8f8NtXNwADgeatHTConsKSeNY5z5",
  "key19": "2iURCSVqWxGWrRstXTBbvbnrVeyEYtvUvHGvNti87SmBRKiikeGCgM8mb7xFpFLREWFyNZUGDiYQ3S1EZvrLYfpc",
  "key20": "31JtvCFENGb3vUPkoAKngXy3zmNTFhwwfWDJuPyPtKZqhc63BfrPR2AdqsWUscCRLvoouZRSNyiyytcL71U5FZNm",
  "key21": "3xGaBGmcysvpGvnaGpq5uTJhB8pXD9Pmp5KTjaGTrMKn94xqw1LAYAub7RH51p6xu2U8TChYeoQpM3UVnkV9qZ3R",
  "key22": "38pkusU5grDvuvXaxcyXNZqpnDiawu98xGxHi5C1XH517x94hfAyBkTdm3cQp56mnvRkodG5VcVs19pzNpA1GM66",
  "key23": "JvuAccVLfak6no3gz1RqqnqkH3oRoJLVyu5de1RADrTVcAZsHna97e87ybrmVnxahfVeAgt9o8RvFFQEF15XhMS",
  "key24": "5JVfwyBWb2cSPeEiR5FGYjsH9PFXyPgqNyeXyc6PsLy2CTHD5yfy3o6ZrDCVtpKWYV4AmmprSYC4Tp3scvqtkph5",
  "key25": "5GaFzabT5e3xYFAnoqQjmMFVGWXfauhLyNvDZCRe3tCHCdQnkmCbnkhA1KMoZAUyHwVptGjBFVYfj3uR6hbGj1ZS",
  "key26": "4T3zasktCuC1aD2EnLBddDBDq6mo7gYAnKgcR3zW2Hy8Y2L6CHa57T7WaJXCiUcQ1bedGUqwDPteCdaEuGwbCKyp",
  "key27": "wMRYSWZtd9qE5uitaQWkBSaXfrueQdUoLkpRxor9S1vssCgQbEEod8Uyo7rTcMchh4LZtM6BNqAfvEyZYtP7WVa",
  "key28": "4asZTDuNj1pfCNjjKH38jdpV9YteHgpMortAjUTikuEJ4bHXHa8ZMotgQUaBUrA2neLvZPdAhRpYYvB5b8r2NmEh",
  "key29": "z1BwFHkzLX7bzMYGRhriwTTsz6L43AxCPieMfRrCBUL41iWUv9qPGJEVBPnoQZKyR4nh8oxBzgRfGsvhpNPemcW",
  "key30": "45TShV28HT9UnU2NP3iY6uqCLuxwjvJ4tPjUEbUp7gixC3cpnKq5vgFpJ6bnfJadF9cxq5afuctTV7ERjjcKe19E",
  "key31": "3kxoDs2hCaq3NnbeNpwsoZHhnBBBzRSah68VVzSvnvyVDC1bNF9HZh5TaRK1XhQ2pZaHpdk1qF5WiSDJSWC1zQBm"
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
