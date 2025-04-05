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
    "2GSetHpZFm618ZxUMArQhit7dKHwRQe3asQ7ixgweyfQh7SsDasXK4U53B6VqDuJoWPBj22X7LsjhG2rbsBKaK1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ftoXHkjFax45kqBud8GAm8NiQsW7qHPwC3ff4mDLJWzJ5TixnHE6gvkzi48D7ReXhsj59vLq1ztzsjzGbtKz7w2",
  "key1": "uTz6tkhdZdM2tXY3dYweuDyUa3okTMQMWsxZbyJGAqizbCtvpPUM1K3mCajM3KjPseWinVu51re3KyvbifCuxYu",
  "key2": "3Qhw3i55SUpjLdCANAq3zaBeMn9mniGJWzPPKNJ5SSpVGoiV5R4sph7TZR3xkgFGFyS4MKzG6EFgSKVBY8AHeiSV",
  "key3": "4iqy3d1sAybzWcXNz1bbQmWfnj4RT4MUH9KGLfrcdLi3xWuz9CfQBXpi8Rt89yrN4CEUSvTeqg32RWoHodYSXKyQ",
  "key4": "5ziyGmqSH1Sst1k2XH9fMsWcWTRUX3gek7va2XFRB2rMtTH9NFi39CwRiWxTpJT4M2abCm6jhYyYZMW7JKMoWBGY",
  "key5": "M8bdUuQoCjhdeYsQA1xfoixfxnFmeCTCukS7LHVgkAf7QLwp8mt9YDdPXKPVvVAq52fAmSC5GS4HKB9u2i45BRX",
  "key6": "3c5PEcX8HnTkzmWh6p7KjRfpTBAW131QuGjqEhZPLvFWwpSKZ96CYp9fXLjAFvzob3LNTfx3n1Cj13vwYs2UNWPj",
  "key7": "57njQg7rmB1hhpfzems6CNVaWp12hGipMwXcjpHapnp2D6Dhs6aFd4SjMroANZfBGdnV9C55GSMQB2K1Tpifjejh",
  "key8": "4JueWhxAtZyKHjh1EbXLyoYE5sdMd97yCUgMLvxpNSchFfie35MoP5BQMCyTwUjABTwN2FcpuU5KcztmUALm7KYV",
  "key9": "5pWBisAtEQjAseKuHUKU4nHXMFfV75NdtESzw2hwRxZratwNFcqUKfAfcGxvfvHnUVhzN6dZQC1ek1Nz6J5oizNm",
  "key10": "2N16M7BwmsqUgarCfryheukG6wBsrqv2vTQmenaQqB2ZYPkevuSKPcPHwBgavY23rudUQt5iVVBdDErGDG6A7FGs",
  "key11": "4iQZ3R4B4Hbf24BDdeN1dEHhzqP9HVgkx1EEREddf6RFcr9ahEvdKzqxdXfcizucnQVd8cokgcLqEYmYYuHcTXy1",
  "key12": "3BKh1VYS8bxaJ8jdgxtoPY7tTRZ8MnMBCqAxu2ReE7hzTPLFsDvpMTEWvPnwvvAg9z7rk6rnAutgHUEGEicaC6jb",
  "key13": "5VqJmu93mpv1UW5UbE6RDjExccY2rPxtuKvsvM4LcyvuZ9XBY2EhCudVsSqmAiTQiUFx1TC98p2kc4W4gcCGWN5N",
  "key14": "3TGxVqnapWToG37zbGi89EZkdBGdqZPHAd32j7ZyUoJVGkKaWAnguTL88WuEKqd9AvbrDw8FJpVBx4suvwRfyEz6",
  "key15": "36z97AK8Uwt2TReNKcx8ZmGrZjKmE5JQheko9n1TNgsj5zw3SoZCJiAeRRGaNnJ529vZ6M7YsvFioTeNRzsvJyQs",
  "key16": "2EaYAcEZ5CqRBNibSLwWhuXdrV1vtw8mwKyiJft5SByHAWUNue2QghtpayrSSL6xZEFxEmFqBxmeKPSWfAbuEVsz",
  "key17": "m39MBsHtqupsBsePqwz9gt6XFRvjyBYJNtjFPt7zf9JwvNEbeRNUQTxis31PbKjg5U4BYS9axEREWQURLQgaBSy",
  "key18": "5Jo19iRcpwfcgewGSE6BL6qQvNdhqpznug1mu86vAjAcSm2gwk8xdrMqhN1xy1i7Dvx7snct3btF8UpwkTa36rPy",
  "key19": "2oj9stWsddrPHeW8yoSBsvSNF9FYhLuYAyp5eB7aRXogzXsW8k3UXDkGo2BrLt6JbTNaez9fgcab4i7LJo6yBMBG",
  "key20": "2QggctMYHAtUPyJMWXfqyiJStcE8Qe9cYz3pWZgbXBLiiSGEn6mA1Guo39CPr5nag1fyrCwtHPK2C4FzNttDkv9g",
  "key21": "4t3dUo8bB3TA5fqZrYTuX8iPRVtQKyL7NqwJ1UzTzF5UrMpXKSmdCUw9pmNAAQvrESfdZmd9eAK8j5qZLXYhQATJ",
  "key22": "4YSWYoQGYh2UZDThMCVEyZqvyABxx7UjvN8SGN1FhACnhLM41izKPhDLtBmvS2dMAjgM7HZ72cm215eyxcAHXprF",
  "key23": "4ESqbWFvmDK3ReKNjru6RfSD3X8wUjn4y1Yx6LGXpSrGQMWcepPayNzVFrFikDurnCuoSfdbBeFDFRZGehRCyfdu",
  "key24": "2UUvY1Ju2VcuYm5jucs1pZkijNRaC6BNDDxa461i7e6TZvbDpUvEDyMxM3GRUgmp7V3aW5fH2LhCTZukJ5Yjm86E",
  "key25": "3qrWroBCTCPa8npnCxZgD1YQhUYSaGP9xJpCkYrgFu93oDuXAFDQQyx33zkKRuURGy6AwD2TcZK6GjEjpkZLnUVp",
  "key26": "5sSWd5DssSgN41uQZVZndXWbo9xPgn6snwufzcMR6UyVHiuXv5HD2B6YXhGeHRvPk5YcHYxUFazqTK9diSLD7UK5",
  "key27": "3PcSbttnuwHsWUa7Acj7GByQy5N7yGF6U5SbRCCVHDWyvmHBi8TM2UNGgv78Khb58x5VkNWaniQYqrAyBb3ZkzVe",
  "key28": "ukbPNHZYMhA1uAKCDVU3YizhVFwmNBeYUrsu4aQuaJ2riz14UMuMgxUVP3z9Qp5r7TKwqk8JGKbGfVrXowv3Yyn",
  "key29": "C7ucAoCMNVkv7u8zVEiPb7c719ppkWsfUf34kdeMh8UqG9qgfrS1gkHc3g3nkE5ASwyjoQhvQtYYuWCuhYqN4Ya",
  "key30": "5fHLoTNiXAvWLg24vK1WywVaEApUrZeCpAceu7iKzRb8ymuhbmYbEqdvuch5g3YP7HVEx2JCN4pBemrxKe6s8f2v"
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
