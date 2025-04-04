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
    "okFcuncc6DNsGTeeiruuM3LoDpBrvQcakg124HV5MsXaSbq22o1w2YNjf4VsLwrGmPVDmdG4R9vLeY7PWrjae5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b8fFZNRFkSM3xqKHe5TTRNxcak3eGMY4hVqP8Vdh2RNc2m9aMb6N8cqrBUR6xMpgeUbrWU4o8zdRJfEgmxASo3R",
  "key1": "3oZMA4qa6YVMyRmKo7haSSMKv7RcN1iAwviuQzPzCnSk1NTrghDUUi7vyUpzEpHrFJuf59SiUy4yDd7Jr1oqRNct",
  "key2": "24GW5GG9LH96rNhMVbRHAbuEyUmRamGL8NxLGDJt8DTsoegUfDJyx3HSBdrdEnUBKpwVsRm5dd6Txs5nnP3dgEn8",
  "key3": "8GWJpzQ5nBJWjK1JH6CeTV188Lv9yF7Y6jVCcEU41pd7VC9XbbnviGiekYEfmZDAyzKJTpy6nU9sETUqawahc4m",
  "key4": "3j8uB3S6QfwH1PhB2kDdxkGXixLsLGh8zTa5zm5Kh1BYo3XQALG6NVeBZ6TMUiqS1RV9R54r8TEwYiopVQTtGNeN",
  "key5": "2cxrZzZd3k9sQFQXeP2tGD98Niehi3swmEeAXXtpHxQUYM7AWYeRxTMhkyBx15VAnCtH4shYuUt3VSba8BPvQqkA",
  "key6": "3MacV9GCxWK3TXacfUmFfFCCWVka5vH82g9AAryzcpahjqXAwCHjFBuQi9QgGr5pN2aBdDuUXP5a8cBL4LTwCv1U",
  "key7": "4PTpC28wM4VD9XBxgyBV8Mn7Rr77pgfeDJJ1TeQmxUaYZBrYKfaAVzZotrHUbgdqv3AUMyV5BubhGPSyvjM5ZRcE",
  "key8": "5D6auJz8Ez4VC8rYtXo4btSnDG3tQHFk9FaL3s2quzVfcdBDXQPTdfDcYa3CRGv82yEaWw4W3npgyVAwpMz3TQqZ",
  "key9": "3WKht8Z66iT3EJL2Bgeg1EnE9HkodPvAoJsZp2cq8821yfyx1KNdnJLdB49uKYsV4EDmX7koSVmKdhhPFPNvZAqx",
  "key10": "3Fe2wrvvN5UL2coT3KZS5B9gtEBkcRD8oC77yZN5UfdM7u1zukwg5HC73Q1dUftKRMNDMt3V4aGxpzkddMPZWFm",
  "key11": "5sapi88PHowkXxsRPJP8Hnd4pWXSnWagvGfKNNuoFPWvyYAKvZSzfwGvp2eb25kQpydsjv1JivmW9A1kvbcSSgRx",
  "key12": "3zmXf7D67wFSTXob4YsW5jHxjNLstnSeknqMGppLjJ7fE3DTmckWv7q5Z249ahhHzV6hePgLi7rDaDXR9mZZsJZ6",
  "key13": "XCWoRbYZV8rwY5DaemdgUZ1xzuwfYDViHowPfisAdY7qmu4vTnFziJWhsqVRGv7osGBuJdsks3yqH99G6WjQhFn",
  "key14": "2HQ7wo99cB6vrwMYc88W2zh854krymR3y5YvRgVeNiikxNCm4jsLrjvtATtbUTWe2GbLug8yhBEAYBSqSvRBqwL",
  "key15": "4i62BgF4uPeqgskBvQk8QBfRebDSiJih34cM4oDYrpk8xEXCnBNLcj5pygr1G3yCDfQQCRm2CGm42k81XNYcwqnp",
  "key16": "2eVyoS8AAcbWzkpFQkfTG9Hc52fECKioqGjxa3tvAfi18h21m5dMRT4Z9Ek3BZcAULRGbU2rU9WpDCVvqcRUcTzg",
  "key17": "GU8qJN2LgoPJHuF94eArTBY8eRkmUY9j7xN1yRLkmAbuxdfbY8SyZpnenGift2YoTjRDdrsTwVPZqnyqxMcCYSH",
  "key18": "4HjgNz3SjdUiGpwWgtMoFCf7HuaSSYeoC7Ayd2SY2JeadMj1hef3zGFSUZzATuN9EnBjAjWzbTyhXWxJihMcnU6Y",
  "key19": "fRKagJw6NtWbJicNuGp7neSYew8b4zTtEAwV1X7AihmaKKdK4FeB9vXME7GGtUkk3UUd1N23oifuocGzSTj7g7b",
  "key20": "4JZL142Tsy1yAEokZMZ1ZQV895pjnZNa5CMqiuMLKPXX6ctYjsdLdNQM7m51ek7LjHB9u5KbkoKeqV4SNriDAHVE",
  "key21": "4zu6rBmbhyPh5Rv2nwXvB34SzXdrGjYSPfXjtfsBxEbUn5GvCQQdL5YbY4hVVWHrKiosVgjTs9GzTUbqAJrzSBM6",
  "key22": "2cjkwX6c8xXsXKdPU6SVvkunx1q7ys8E8gkoS82pdzqN3i5scT1z3sx7N7DxVDypNCfT97fcZAzLa3f1R7F7tszG",
  "key23": "578p3R2QCGGVqMimmkPbFJdpEoNUVXj3GjyiFPyowxXz4SJjRuBM1Vz5UgjPwM3sLdAeVbChnDvEAM2iu98ZVaHY",
  "key24": "3s5ZQ7mEeKN2cWePG7AbbkbnmJeP6znU1HAWJEuf4JdAn5ZpEJKp7UuuNfcfTM5UcdLiA6qMDXvSWNLSSM3qU8BR",
  "key25": "xt24iEkaRWzTSwf93oJwdM27b6g292T3aykpHm21Am5RSe2swCw9zpBHzFZs13omCEuyPfbi5chKBr532DitmxR",
  "key26": "3JP6cMjf78fRh9rwxZqTXAuUP1D8eFuTDsm1FebD9fec3xESiwEmqcA9gaszvVMnrgUqKRi1bQh4bHCAkqJtdzwC",
  "key27": "4Xk3gMERfrrnUJSviQ5r1cfabyr5kurBF2WuTdXruhri23rp61uXYZ3izU3rfxhX92mHpCsgFNaPfJdJcBAZpd4s",
  "key28": "36in5SdwQcQLWCgX4PKth4ZZbggmf6DaYckaNV8RUQEk5tqYXoJTrtYuwaJuXHC2psidnn6ivcfn1nroCsubtvc3",
  "key29": "5V1Bv2dxiQeVN4BJ6c7LUyhwekuFYzGtXPDj2HTjaupicGzHd2v7dFVL4eHxEPuwLTEMjwP2d9q7t1JgEKXtK6t7",
  "key30": "4ztEbcciY46MiY4xPgxbxdyUFGf4MZm5Yosk2je8174etwsoJLQocidt7sFKT1rgyp22enpGw62N5UGvFR3uGqfp",
  "key31": "wtNHM4EMFr81zt22YoNrwVss2rkdLk5WzTBRFF9YqoRWKyAqKrJsAfhhFPnTqV3nKoN87rW8YPmnBFSeSeWBo3u",
  "key32": "5yjesD8aGpJMqYSPRU1RSt9v74djfU5ZAFWy4f2AicEEBUYDube4MV8xArzTBcnSBeLghmTnzdDsKm1NBz6xkJ5R",
  "key33": "JAARrztZ5vu3vjegSbCRubr7HRXDTqwjkgHbRY9ijMx8dVdo6n2UQH6KPvJoe18Tvj3aqiy2QjHXNocbTcvAPD8",
  "key34": "3kSTCwPSyUifirzqvFRFS6SJoxak2QahtfCyj89sWghRWJSpfANd7PhgX326f1cWZHwK78yUXt1VYmZFszanTdq3",
  "key35": "4w922wdnLXJjNpmAMd8KmHy8SZPDyEZzGFmYHBPTiJ9EaGGfMJkw4AXUZT4FBKc8nejLuKwEhEjqKsX45GUhNXAR",
  "key36": "2x7dVxi3aE9xbXSeQ2aD9LWKGqD5qs2C4LS7kHkzCekZmkMZQCW5eNNmpzodmo4JA9eN8DVQiPqJDTXkTQ62Erfd",
  "key37": "5ZSTkJxkT6a26bnXDRZYkTfEQcNYJHWoXMJwMkrGGDeRBMbvAewDLpe5qg7bJedMs7usDGH3uutDPBC26MA21vNG",
  "key38": "3dDEA7RNSvbbYfyJkJjEpYkhQEgtYb7B4BQ2pDPhrGpvFm1Yr6ttj3kNt7MCWbWTb3dXJmpveL8HK6C9PKtSCEk7",
  "key39": "5pcbvjjUdvABagB61u1pQcoV7iT2L6pDqT5hWifxSsz3HhY9FvqKqacHBAtcKnHx4gXifPSfhLf6cmVH5FWjrSNL",
  "key40": "3x3XKxJpRxkMRpwrbwjA6tJT1N79V79tFYas5VgisNyp6TapZcrJmba6NMxySVGbsBsonx4YYWVao15Ao6VSG2sG",
  "key41": "3nZMNsF7viJ6i8nTg7HcfyzTpweDUeputqEtrGxGg2NpdmQ7TzG91RBLu8G7Ht5kGzQosidrg8u1X37VEWkNrgep",
  "key42": "5j5MxfxAKhiiTy4YCdoNcmGhoon86RssEHhECNzpTvrqHnvi6BfKFKnfpkHDRa73oTm9EPgVh4zq7UF9Y9bWCHQb",
  "key43": "4aacDCxe3LPJa6UXeGENFUFEZu1MNb5RAq4eGyV9bKZkJKuprhDnSedFCvq7ULZZu6y1n4psWQNwgNMCkW2LNEmm",
  "key44": "5c6gP7YUqihYp4i8Rgsb5Zd9YJaHKYKyk6JQThQEYfZNZVKbWd6W49obGsdkovUQoTsQo7YipfNV1iYp5pGy5Mvh",
  "key45": "pT2MdN39NY9SxHSBPq9XyGBzDiAkLAKZJu4DSsTAELkbNasfqaBWFVHr23eCbvKc7e98WM3S1RJmeo55nG6uauQ",
  "key46": "3dD4e6FkwrodheF793Dh84Vhi8qnjR3s9RDxwKtfJocPMm56LZkcTMt3QCVe4597JBWeJZfU7bmzze75Pem4Zb6W",
  "key47": "3QnaSomFa2gnZFDjBFg12gSzKijN6kMqTuwUbmRtaJmkqGz3Gcmc38HgbJKukLGMRtkwbizyQr8spYD6Gn38vZQ2",
  "key48": "yJqEFLUDkX3oRnhX59TJR4akyY8JmLjBRnT39c9VEc64LXG66nNt7uDJtxvrfJ45i6tqzT5mrNr7j6UxnkN9KX8",
  "key49": "4quJtDvnHN2VdDmeZxdZ7NwEZvrWJce1kejXCdRJM6WCqZjS65B6SPd77wQsUQb6gKNwqDXTYRCqcZXfsZDg1S7t"
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
