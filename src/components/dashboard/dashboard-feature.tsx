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
    "5Hzijtj157rRYXkeBbEeJ1VjGh93pj993uVRtanPkAF6JGEW7m3KqNSWdk8fpRhr1sjfLjTuaVMNdZkLBiKQnTf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aem5S2t7S6HUMKVMep5NxEeSev7XvFuWuFFCRQC2W1npfKYNRkko2jEDeSGoYD21fMkJMmTSGinE8HFakZ4ZMG3",
  "key1": "4nYvYSPXyLQeHdNwJwvsRxKYR2R5oiDGMuxiZzcqas1yscSprmG7XfKgz21CW2XEvyCjxCXd7TDkbS1HgJgpzpj2",
  "key2": "1Dg1C3YGAwWEyMwNVxv3vhHJEvCjwmb59TxqfJcHD5JmFuRp2ELTzEYmLBDqJaZHUnSjr4WRJzKs7jEKpqzaC9L",
  "key3": "32aFGPxq1BAfyjcGUS4mXKwb56kTcz4F4fYUDuatkss8SsHrPxNmvURLfi9J8tddfLnsJTonLz3zYrzoQd1ge9Sc",
  "key4": "2N1ib2DS6wgtDRw769CEWYH2Ys659LF5B7VN1ePVxvymrGpCjP4edBL42sfQHNHEzJK4gouxjuUwWaZtoNaPFjRB",
  "key5": "3pojQL4q9KJoZzQnahxcrfnFRwjTpqWm5id3R4eLXdsTC5xZ7wg9XFTKddLz1RDKCVbxPgf26UYwfAbeVStUjqgw",
  "key6": "67Hegzx65N73uZCMN8kQkgpfRbkzpJEVxoiYGbP6vtnLf1FZhA6kkNBW4q68s2EWJ5iubTRmqS8wntz8iH9fNgvH",
  "key7": "23Sy56c458h7cLZ2H2bRs8VvGatgQgHDYoxTipw4v1uRvtkAb8HiAVksqAfAQVyA7UkbYd6GuXKvZWmuy9D2Y9LY",
  "key8": "37QGpnoYMncSUcJAvdTL8346Ea61hvZ1CiRbgFS41FRvLJ5BJqohTTRYvZsoaPNtufoZBz1ANWETXLMF1qpfkzV2",
  "key9": "HKrCnXMeGgmxVCjaFgy4XGJ6CNqWcsLweLaqDUkguizMV9BJg5icBZiDru36iFT8rbBCN14QRLNpTpVQq98pYTS",
  "key10": "3CQYqcezy2kCLEqa8ELNviFDV8uZaHbesBWyoeuYqd88qZ43ntacxYAcE5v7RDJ2Ji3rREX5CsDewBBLGHWr379x",
  "key11": "3uNPAp2AHRb4opUwY6fdZGL5iZLVcPsJuFWhWAftRQ1hgPx1ziUaKwyjDyg6t17VLU3SbF4KTRk86DEMEtyYZeVK",
  "key12": "2ZDgYzUcycGT43s5Je6fegQrLytVMc7Py2KhirFnRbftmYmeT42GqTgbXjoMkW7xz5TkbfLy2d87zmPwuEGg9Z4B",
  "key13": "67QiY78k3stHjxbFJ5TjfasYTcPdQRrdyB3aG85mqPG6tFPFfBMavsP7CCxGKHBv5Zi3Wp8XKF2rEUdtXH8tAK53",
  "key14": "4QUNa4jmWHvM9GZdheFRtfZJiWricp7hVgd9wAFRaK7w4pRn1LgUBKcihnpZPLm4g24u7mDL3xFm6kQH8qZ1mVd4",
  "key15": "2DrJQDq2tAoQcLYYCftukrAq5YhgKujK3m8h685ijGRDXMjybSE3T1XVjcdbRsUDVovTda5ySQUAn8JHafiwLn5S",
  "key16": "2A9LUdJyoy1FaJU3txauAJU3ejXwKGaYHLoxKgdvFYdUom23pmxLrTM9Hn3PLN5gswyLaL4vNcAthvPwH1qAyokY",
  "key17": "3vsTmq4Zp7WeDpA9LGtyviEWJ475aYtbyE5AswpZWweYTKWZ93auRPthtfAtGm9WgkFzPJRVPNpiMt3BaT3N3Dei",
  "key18": "xvqqs11S84vHbXyon53uvnwu1nPoNfMEocYiVHuDSkQEEdcFgQSRKvH1a3tDDBwAvqM4t7sX7c2BsqcWQ1kw1rh",
  "key19": "2J1GeTXfMNgXj3n65Np3K9JgEaPDY7dJXTxuA276n8Kn6X3LUYeEnTq7wuYBDPZDwBidYsDDGHQ2BA3kJRR2pPaS",
  "key20": "i9mDgn4wZH2cwXmsMSrLdLpBBgGfCQFdvvP9eoDQCzwvbVo2pa6kHvms24YSGoiFvf1URFg1qaJboriHgLRQDad",
  "key21": "2hGrNMzJKfd7or8yRfj1tRVhEqyZZyZz1cqLmUM1asis8tyHpgQR4HDNTFxWRB2QnK1FgaKxXPxp7gMnPV1x6bZF",
  "key22": "4srEnK9qdtpmfkhmhcq8Ukzu4BcFpdNT1TtDvUbxX3F854BgnnVKpB7gyCqUwwkrWwh8VMUNveHJcw4hUqiCqGUh",
  "key23": "4wa5U9QFQmR1eckvQEfeSpia55WAUrTRRLtq3Yuv47GZQxUevBD7Apztw6etxf83aYJdLkoUZWXZ38A8nRAD2K4j",
  "key24": "2VeYqWC5wS6XgXeqkfw885QNzdnPkpJ6vSDfX826eFnpxCm4T4Soe9k5qTo26QPjpMY5hJumYqXjoBsroGYGtgke",
  "key25": "4B5ZpXPFZtyUBRDPTUdAzoPvi8jEaZfMYpkbNnrwGH732L5aBtNuu3hs9eyG1jaTSgx2cfEyNJCNSQ5VWFy9prBN",
  "key26": "44tJNQYo8eGWjaC1ETZMDiwrTBAoKR97yUbaX2oAHudJgj8Xbuht3MXMEUm7mAfiNqcBmPVz8nVoT4j8j2MgW8ZB",
  "key27": "3HUgiL8cuSxBt1tmHUvaHB3zvdWJyThpb1ix6vX2wkZ3QSv4MKMrnkygLausmDUuwBgbwZbwoJVXRk7WEMcd21Tf",
  "key28": "3d2iywL4FiDtsMpnz8wAiVQSk19a4hQziFbqEbyZgaoSoVpM7PdYX3xutzYUhMV5w9dYmbTT3JfECQ7tUmXVDWh4",
  "key29": "3D9BtHTpYfLCjcptEGqpMQNRHkvuSSSZJ5BW8Q4ujrmjnXyTT266WkNwKvBYbEsyA3YZtiZK4Kn2T1Q2hqTsjNkk",
  "key30": "7a2rDvwRY7tpnys2DiirHgmjxQpsDLxfQ9VuuZH65qunDtn3pKzNukNthrBb6UQzp8KgPL8FYooJkWGwLvgrQun",
  "key31": "ynaPbK8eyoihZRWJNWt5gPM8bJ1Xwz23eidaiWLhznCgdoPwqC3LaXhX6ESMtwtXQDTNHGLfyJECJWTUNLUXSLK",
  "key32": "3nwdVrxUYBuvTaxzeGxpYwCsGFdDNu1eVoBWcAMLa9ERfJx9M7h6ENWgJ2UhbT9eKp9MAaotDYj7KiUZZTD78SXF",
  "key33": "2gEQmw4ptiR3ZHo1Bid9dBZN5C2pWY9yvDzixHUcXvtyAoQMDFEULquZKwU89wJCFTqvaSvALoUcJtpZdrzeweiK",
  "key34": "4XuMDurXQp3fN29HaLTip8sEYm6XC1rCMXvW92CVBz1e5EFvEv7bzH6Jjn5HwdSLwHfVvvfVMoyDW9BgqmsAob99",
  "key35": "85MYktejifgw954urbBkfTknDtHtqGMeH4CuGtqBJ7KWJ919zMfRpPHvJmn8fhAwt714SJDTCGibrS9YNzUFRcP"
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
