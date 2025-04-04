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
    "4RQz8uFgAxQH9AeLozwB7hTP4ydfbAg77X3sY4xGJcRXDsayWC6VRx6FFxQgrYKrwE6cfmUpY8cq4jP1aBsUGDYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qxezHEsbXX7Jf3gkGybsf1pRqTqNn8kbrWDwGisZbn7SEymjNWz85ZCP4FYRHfY8oCTutX9CPJYDRuswGU2he2T",
  "key1": "3dpUc8LyKsVefKeAhnBuezVvdSXnbBPmMo2EdEFzyMu3zRsTawiZD2bXHSKH4h8hoJuV9FHWTmUsdjUR5xBx7Tri",
  "key2": "3Z8dQTVRqb534Sqdse3NVCzPhk7xE4YBRBymxEcSrHGA2nttprijHys8JUZL3CqVx21mq9FFGQBvPsWBWQiSgYpE",
  "key3": "639RUxqRM7LXgoGAXSn9DQChS4ta67rAmq3pE13eSBaiE4YqYED4S4iHWQLPF4Y63xYH4d2AHZbrmZgcTG2BQaCL",
  "key4": "3dmMR8LATd5rRHbWPPEBj1X5d9hX7aSrWwyAVff6nqXpskgqCjKm2CUxurss4zQHqdu2Uxz6Z7DWM2F8rWadzxJa",
  "key5": "5gg8PSoLAxJGLkdzGeXBh1Z7v3Ct6fFCKDgwiEt68ZXKvDKAJCCxUnKgbPQjMUF1SsSg4PEJLUpg9Ub9KHfE7kHt",
  "key6": "3oCfyHf5Hcb5vmgCtJr97kHw3XLr2bJJRANFB3g9QVbfmNeJ3dKQXDzbdqQ4n8DwMdtC94iuEZXry5CavTRiUJnB",
  "key7": "3wVDR7HvW1CDeZ7n2ZszKsRhNtECVeVEQzygmGeDFkxxnsRGvQ2o1HrVdECWvPEHxcidcM26pKHkZtEboLDR7zuE",
  "key8": "4kVoEfWDaU8FqRj2WWnBs8mpNt1z1JEcBuEgmnfctNpWDbspJkUZyyTpuEBLWeTzbwwdkspggMopxcG3hxxATAaE",
  "key9": "45ovEXKWa3NRrjALn9cuAnby6CPHULk1hLGaiRvf9dfCqM71P5Ng6quiudzjJXofJJzu2Y8AG6FCucyrw6ZgxnhP",
  "key10": "3brho3TSQc7NhvBib1XRT1cLRChosdpjSmH8tU9horaaYkwBziBS98BUyJt6X9yVhEeVMxvmpRjsMMCoHiMh2PMf",
  "key11": "2RLEDk3yxFMqiV4atZ3wLyX3norNn87FNXLRxhAQbY9WpfbRuMnDNamdBeCyiakGHbX378SKH46KgY99Bgg241Fv",
  "key12": "52VA63cffUSYjfY94BvFK6XyquXQn3vt7EbNxi8WtcxhwH4rEonKYPtew6aUvZKs3BcyQpVeRDHDrrcZSasVcVSQ",
  "key13": "4qtahtQtdcvybXtFV7Zz7ubxhMmkbNREMvfyyFu37FWaJPGBEQ6fh2bcKSpbv8G9GF2j2zJoeqRbwbuTotiaYrAj",
  "key14": "4gXjZtwhSSUGDXwnoFoUQhvdc2KxFm92PNTAJXhZbjCTiAtc98UUv9kg21wcfTSaBH67pJmCTjAuYQ2ppKiVGYzp",
  "key15": "2FTjjcKPF4rxbz25ouMVHoizRckffm8D4gQfDGCHYwX7TPUys4qaChaN8amhxVXnVWdjPX8iLne1gQSLTf8opBKX",
  "key16": "4wXVCM8RCbbV6HA9Ngjy4f1Aaaiv9LMq7ruiPDLMnE9aMNx5wgdtwVHKq4zw6bX6bE9J8Z66E5mzZeKyxJupkECc",
  "key17": "3T6rpQg7rxbqJocg7fQkR1GWh1cuKnrgLkfaqS9TyYZPh2Ak3tNwEyiNkzfQHyL2VhJPFMi4PEWx7QQzhNgibSMP",
  "key18": "2HkxYgGxPsb6j2c7PccNVsry4yKR9LC5jeccjsRsaKpHDwHAkJNMN41hrEYaKQrowVhxMcstTMu24dNr2dmHddcB",
  "key19": "2UziRmHFM4CLjf7uNhNF2BQfmrQWWD9asGZeMxtydkGLbagzKxX7Esfim7ekoYj9HDzKDf1p5iojRxupz8ywsRuU",
  "key20": "542jSPEeLxKky1xB57tZrFH4MyyLDPFyQKitrWN45pFsFarsrBiZbPjhSnFzDKCC4xvkkmzp3HbJe9B34idaSyyE",
  "key21": "2fRnzeAXmXaR2pHnTwBfTGuNsyEjCSH9QJyWhnqbvHhnfqSLApsTGKsbYDvTcoZovUkafoxYVi2JzsACecBXN6cW",
  "key22": "48aKX5B6CPnnm5nzWu9D8MMMhqciC2NTiWaGwzZJ6b6N9UUoVknwD9NdR3UxmYSXWXp9BrzkwHcn2KAgi7JBCBGh",
  "key23": "3S7vNZSSentk5EkYRyBMWeUfJ85FkZXsLZy5aTiEemGQ5zmZxpFWxrUZVvtpURH56vfTU7dNBZS1CkHrKG7LxrS6",
  "key24": "4VxuZ47GGhmt8JfXGYwzuGki2dGhmM2LS9fUWi3qNUvJ4mWpuB4NU6HSjtiQfELz5gxX4fZap7K67X1eBijYabjc",
  "key25": "2Td5tiEZmzxJqdasjSMTthXpctPTU9B1TSxnn2er7izFyGMHrUMbaB2wbtLidkZhngYDoCBtHoVvkQMn9XSHVW5c",
  "key26": "2vkQaGygWHXFAYdv8FfttcT3X9cbXim6VFdc7rJmthFSgWc6ZrjXHviMKWqifWfWfnFjiNpcm5K5EZmLo2quZZva",
  "key27": "2ytjUrTkjEe41QHVcfUqfUW1jLZrpxphHPkUvvTKZKyV2t2i7ZRcZvQ7Npqxcu1bRwdjWew3BC1Mwk87PR9VDfZi",
  "key28": "Ex1epgn5YxDv2gxcwrXvhTvYrBuiJjQWX4tUpJKGNu1uYKSZ5vVNKAhddgrLgF8dAuSmLSuitbkpGEp32b9MdaV",
  "key29": "5KDXQczHdbUwLXu1yAU5iN4FqXFGqUhj8N8qFGqaatzbYtKxMdcVwsWyR8xuTVjbGiXYS1Jg5qiNTAWgaFjpt8k6",
  "key30": "4JUYLJRnSCPo7Q9XEY8bt4WaGnUj4yU9pw7vgmjUWMQMB3TcGSnnBPD11K73wzFKL79ipZNGCRTj58cKrBTgvotk",
  "key31": "5zY32cVvncpzQq8Dnc2zyiXF6W3mkJphDuZ2Ep6LpgYJQyLgugfBUobQoKBqPmkidsbXeSSH4Jry6NaN1YDtUASU",
  "key32": "3KZ5SQoWRGKFZvc6JV8Qa9VMwfqKbbxZ74ekL6eRzuXUNj6ijPZHGYmoBbha7rQsMBFoyKLiFdufZWw9Pa5wpsUr",
  "key33": "3i7Es8R9uVXqYjee233fWqNvjjB5uPyfZ7sjs132cUXhb59Fw3WxVLJe9NyztHZVd2YcjbfhtgtVvJwMgV4FqDLd",
  "key34": "4vYXsA78TDpGPjX1W2VTDBxEJRZyy8ySfpjZfLn98HQzMXA1bcAU4QnkHZYUpyUnfKc7hoXNpZ7GTG4g1XgQdJTh",
  "key35": "2VHVjTFC29bu32831PuSeHhPqmxHo14JynXL86GiNFwKesZvyaeXdXryeRAMzteGbqWmABP6EgbodErxCvNespRg",
  "key36": "5voMicgoGGcNhajYQoskgmiQXmPboDPgCVGZQmfeiC3BEiJEx9t11pN8nEz6xgugxdenKYLVHXvcRi8PSavbQD6d",
  "key37": "5VtCPNUH9w1HpKf6Y4xVaHi2st94PtvNDeYfghRQXYfzFdN2hqCTqXwJPr6BzhX4SZjgG11iCBzYq8zySmwopxGh"
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
