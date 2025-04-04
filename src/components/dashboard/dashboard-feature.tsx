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
    "bt35kEQHiuDM8XED8dhHPDVmwVwuufbzNEHc3Y52aHPJLQnUsRy4FrJii9Gk5TNWXmL7WoXQjCKd1BjsryVTBN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SaKZLeQ98QLYdfvSfECeJ5W9S4LYZwvPJM5LQfGYpJp7pPc7rMkC1xnmcN7nuP9MAAHaFeTH5XHJg28r1xa8Nma",
  "key1": "Xvdf3joLJVUjLJcJnHmxE2PhyHw3Y35j3M1FokQp7uvQyjBKsWuhkio81tBDgNHfSpNVarWrmqhc4XMXrwo8F8g",
  "key2": "2kjPRQRbaQ6xpsqvAKwjnDNkWCYgdpPTSseC8ztcaWY8D4Sd3M2ykm1fZXiusYpdzhgHREr8madwkJHATHoNjykT",
  "key3": "5g7Mk4u1kJW332o2gihcMNp1sNoCkPYaf64pLqAradggWuDqQhyLB62MPHUS9nvit7yoB3obJD2SYDv6pGu7NDcw",
  "key4": "isPiqek78Ve3Bz7Ny38FSXJZc8WtCmeaRR7nhaPGrv8D1ZzRN7Py2Tb5FY15HkEQWtLqYQMEgA81JzQvttMpMjm",
  "key5": "5nYm2ZbaT3LXPnZRAUMbx1W2e6cE4BUwhqs8hMkrHCuoDGUX4BRTLDnWkLRvDRhNCdURSpPjVaTuBus67w8ePgQV",
  "key6": "KiGbwgpA4dBQmV9J3td4NzsNpUm3GkZD3fj8regt5YsTrYqUApb1cdA1ABfQKhgZfvWCudvDNB88KWiQGbYYbJu",
  "key7": "4heswLbCrj1STzE8wdxqts57kUbwS84DnpavvxBLfH6jmUwasnyoK7xAFsGQvLAegsesQsKE9cqynptEpEri5RHB",
  "key8": "4yDhpQHy515hLAUmpKHFefvgoX43QzYL448oNVGekBf1KxL4ovYNp7jVRBiwmK4kFbWUFd5FeQkBWj23NP7v6Ro9",
  "key9": "3WgBxgfCN7nEhu2JcAJovH7aBQRcy7Q4fZxJ37siy1rY3shw5aq1Ko1CwRBMYrNgvmWPxnA8qii2ZipUrBnX3Ghr",
  "key10": "4HPtHD5NLBAvq3eG2jKphm6MEGSbauMoPqR65MSt9KsEhVQfiBAgBdnFvb4qU4QYKmheAzHg1u88BNWRW82eivQa",
  "key11": "2Bq7kiQRVafb1iKaG7nhs1yuyJrDHkx3Cxjcimgz1zi4vkWNLbVFJLUtRjLMDrirCDDsfcidpD4BEkFXeELADn2M",
  "key12": "debEb2ggcbhwF93wGVYfo3XZqoJhActVvtN6tmYx5soSVDHubZHPSEahZaTdRGAPSXD7NFifj1NrZzNH9RmYs68",
  "key13": "sfiQd7dmn98VWKpx5PVQZXMqqdPZs9H2kLtidN4fwN4mQBinHFMojCSUgAPLzGczcZCVJ1YHetjmwNGKyKxUPsg",
  "key14": "2iohHhtHT88STr5nQU8zU1b1XFJnmQtCBcngB7VFZRr53zEYveRyiCcMtuLjuyARAB4e7YEHsWtuvHWx97yqafc1",
  "key15": "2fx2Sj4Aqq3xAvjhm8HvE7VmHvEiWifg5HBsRs49R1YsdGMPv195LUisKMe8Hfo5vtGXsqQWcs5p9fKtidqds1h8",
  "key16": "5YyPc4zuK1Wh1b91mBhJXPbBR11X8gKbMrsjffGKs5mM58UotGgwKf6NrEBTNZHAdtCgPDJtyPNUMg733Bfypntj",
  "key17": "5jVUSYuGZqe36S8dJwWmmpvN41hY7TTTg2YBiVyVRe55DFWzUmsdPSQVg9g7m9ZcDR4TffhHdMVNNSQcWdBHyErU",
  "key18": "hsfLVNxupiXctf8mscXsVXbSJoyCnMTH1Kovhe2XiQppWrzr8sD1eUaBv85EDU7WvKgqEGXWZn2vdNeCeDKYiyT",
  "key19": "bGmpUtW8yzEVAreqtsQ1B9y9USUDV2tKrJ5PZN9auQWPA7CjoysZd7a4acriPxGhmFbQ6Z86vQka1q2JLcw7jg3",
  "key20": "4o7c6ZQGDsnSTsho1v6UVoqkR7LEytpcWrALEttc522mUp2NsWsma9YEuhD93Gub9nsPtvWGgtpCQnPZSzoiH3pH",
  "key21": "2kyjZZBUDQ1QedupJtkJtHZ1NjGVkG6zEF1TmjVQkxTKMWHoSGq3JHbQVtJ7LA27WdFeSepekBt7t5QCjM9ymQNC",
  "key22": "233c6ZxZsSPdvVjq53MGc3q1uXiAtipWY4QEfEsuV8T3x8qX44o3xPo43KPiHRTDFgxodTgpJvScHhmjsTbVs1pw",
  "key23": "51tXoWG1dUK7ifayZFZFWP9KBetTSdWgptBd7AnEze5ZZJDhvuyiWvT8jujwMopLHCEhRETGWKWoQzPGNva3kxhT",
  "key24": "4eRzvzDfE6FChnDzUZeRUjAbHnAam2JjUdBprbrDH1nNF9dnkYZVaMfDQ8zdyWaMCofRJJdko46kus15Q35v5zGB",
  "key25": "3tpVmQAZWbdFxuWaUFY1hSv6M49TGH4Jo8kxC5tFjVDf2tWzV5i31iHmKuvgeUCwt1AFwEgn2tfUS9eYtb3vWVce",
  "key26": "52Cy6Wyhe9mZiKjvGn5bzD3frn5fgEBtxNsZuYfu5qGyekrFjZM3MTnvdz5U7AqioWmzuFLMVWnh747TgkVtjZLM",
  "key27": "2q3nF6L8FKuWCtmwDebnMW1hHfXLR7PZ5PswR6S4Cvu7uKTi6LyGRznzJeKNoPoDdDSvSwwDS4uJDZNEWGkQTAYK",
  "key28": "3egE1J9gbx59X2Nv1M7Pfra74QXghdPpEwLGxfVx4vaBTbHGVBhWpfakui5ZYVSbaBHBjDscwZN7Jt8hHHwKj4uU",
  "key29": "1EjZFFafdUefHoKP3TABG4RfVvUB22SJ4BGPo9jK6nAWUjuUPTBCgEqhbcpYPazST2WbDFvuES6y4ASbNMxK8jY",
  "key30": "3QNDtgjKbQGpskuoYtkif9hjenMJYfqWVCf3D3dWnt15WJDCk9ikuKNN4aNwhFYDAsd1TFvMEP8zGYeZZ3BP3d4z",
  "key31": "2a3Qk7g1VMNtXfFVE2x1ME2sNybUjb8pQLrPaq746CMquioD1wv7vknGgmm9dvqsuQpUMuqQ2ypKDmRrdtUwysVq",
  "key32": "3zvTf7qHNw9TbMB2AfVCAGZEfU75dJS3bvvf2XA1yRZZ7U1saS4yKRa7isgKjfd2S9kVU486g8ikA6P9AjKdYbed",
  "key33": "41E4oW1aioR68Eb1NZRco5UWb4C6cF7EJVvcUiQLD4QrwbnxvpBq1yo4JBGpfa2z3uvBtpXpMjkmpmcB82dcC6gK",
  "key34": "2zmn21wv6A373kaBv8NeWerVr5YTkMdrXgK2TnVCNXdpBSNmEnJ3C577tt8C7A5rdAdQNeq4DVvmojAoMXGA8Zyz",
  "key35": "26iWTZju3kGtv3MeeyJrZ4FrThtLshAymgheSW8CnBiXrvnUH5X9A5ivnF2j1BdwvgD9CtL1z5E17hXdsGtHX5eQ",
  "key36": "5Qzow94hUkTVj7fjru3grtbQfBLVQqAjsP626Gj86ZQutepHyiKEfFTNyshKcoHCEZP2EKFEs5CatLDtWPs5fE7q",
  "key37": "4vV3XHDM8eBMcTP5ADijKCNThifp3QNi5kYZsNeZFHdVSGTMkpFFvN6azhrtW1kfJ4nWuAJfPa5JzC1ckvb2Rjdw",
  "key38": "KAj8sGjVaEcJ7D5iskXdFGnRgPZqPk3fRXJTapJoRnXCa5LoJWC4aZb28TWjFrAfTXFzuCcQzCXd3wdL4SVscNg",
  "key39": "2xZY7fVHirSNHM5NdV3tHc7t4s9igAR8sVgF31hFnHbvkS85nZ2oTDH71CSUCjqjPC4Rc4MAGzUBRnoNQLHy327B",
  "key40": "13a5P8uAjLV5mb11rpwMDSc2cSsNWDLD9uMjaSxupYjgZCoP426RRDLbkepyh7WnEBMsCbH7DZSYe3sxTR3hshM",
  "key41": "64ysqw7gUBSHQ4Vj94mbfQumt4yfVX1TbWtJDz5qCeDheJmSGamZbYyTc7HgvAaDS9NjBKMBXfw4gZyhf4ib3ecR",
  "key42": "3r5Grn1rVZfVixSiuj65Ed7uqpRym911CNE1NCsVGPpaoCd6qrpdS8LZiCgY3SwPCDFJBwzenXRggosQ69HDRUB2",
  "key43": "3iH4Mo5evFMBUCrAMXHkTanwgWcjpPXcaVtnpeMnxHfWN46PCn2r62XG8i1pmzjZBakBMQogbYjbNkA8q7MxXb9v",
  "key44": "38jgoSVuuoGvDDxdEVudrQSNmVoX23taxVKHfTEAYvc9WURxYqEUu3KJrFR98EyjRs65onrrHfB6hJ9enrAjVrGf",
  "key45": "2FQQRnC53CuY3cAyTj8CEYh1xNDnM2FLhLMruPt2hLojgeXZWfeovzktZPbytLgZvrQWvQpjzNie5WboHY94MEgF",
  "key46": "525tCVraKTahvbVJRdU46edtogB29P8K6vyg7tMWVgLLc1AHYXm7kwYhdu7kRm22vprMQrNv8834gvtpgUWQm9cz",
  "key47": "hfJLNtd8iLzgh67AHw69H5QC3z3rdJPbDVNxnEn7GaLfrAcFgRcwPdSvYk5WBnn5b8vpeJKzqzhpuq8cr4R4yQH"
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
