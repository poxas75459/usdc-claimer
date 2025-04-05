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
    "4RvAmPq5fFe7AAEtN1DngCaDuYEQjwyACD8FBekfNEPJcjXR5yrd9BxXvQDzAZuR91ErBPNR5gTUsNuk8QrLwGXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6UfuyM6xRzXzF8HPgp5VDePnMFyUP582g9Erir6uDexwsH4hTy5fQBTrTm8z4QA4gBQyzkg5RDD8qftL7vimc9R",
  "key1": "5uufuDcuAkqfkWvzmrN4aQE19Ws1Er6Ui1jFM5tMYoE53roVXuT2V9erUST4aCEtrWMztVn8FUfDdTnEPrqK2pQY",
  "key2": "HUrr6zLeX4T2xqzd85yuGMUEohNjZfMwjwfbDVahEbz1LQQPCJz7J4ZQ3WMKyDMyWCzhmTqUarHvummkXYTBpWw",
  "key3": "4bRmYVe3xeSbbdC8NmbSGvzgtBfcEH5aa1m5wnXvnDae9o8BoTVo5qY21ouA3NEiut5FiNjAQHL46nA6UZ4LEyPg",
  "key4": "3Rc5k892TLrj1WYeDsD4ThkZvUsFyniaU19Ano7YXiSyeNEgU576gPmpxTvC2pZg99PBE6NHx2CJZvJBPmYj61Z9",
  "key5": "4CTWk3YV1G2NoKcCErttiRpRmf2UkW2VYPFLDereMXNjCDcE7cKB5HfozoyAsrpNNiDJfzr6qQ21hHQ35pk9Mfn7",
  "key6": "mgMjCpJUrh2GbUXkA5VTadYrVMVTwNYjh28meGy9KL81KhJvxfWVFdRVEJ39A8waTKdHEpt9KKrwcx86Ds9gtw7",
  "key7": "2bDzySAF1pUL4cBimcKgcg1tB4Ejxifsu3JbEyrBVxC4jcpevcqBuczkgPhPrhv1w1NbGACiDVRFvAb5TRCCtwx",
  "key8": "2Mgww4agHQHx4wQN7wzk4yZbnL8fQYXx6bwh1fSKmGDM6aQZ97gEqjB7ycH2fHhstsVccVJ9wztpcS2DNnVYhFXq",
  "key9": "5Hpn8VEGpG7Ui9JCBpp67W9ihh79Cf7ofDvesQojMsHg42R9Kf1o1ZrBudSETK6ooMceZyswVZjNMzf1faB7ZsAb",
  "key10": "4LFE4gZVoESCbi9vevdRpBp8whPYNB9Xg9DVPPJtqhUDEmMqjXZW4kQyvpbjk2oBtcmLrzMhfVB82AWVyN43yN4R",
  "key11": "2Tz1oj47uG7vUb3gTxhnEqqCCJZT4AKUMvBGzDEFhKaAgUeMfwe9EFLLfozPsdE9kRaehT1p3GvLQGSCHeM9gcXq",
  "key12": "mry9er2qVCQH5ErsFeiZ9i9vQaDX9JjsdUUngVKHtWsHPh3tTMznFaPZcDDMwwXb8agwCTNmbUHagBBvWUUAvqk",
  "key13": "HRU2bMbTvySDiDeRSCsiFDg4gt9CJQgRQerybtMFyWHLrQV4cYMvgEucQvcS8s9B9T54459YtHEvKvRj1nkKoxJ",
  "key14": "5cA8H6ErKWmj3irwHCoX1MYVyN9yiUhKn5WGjzaewep46hssmPAuYj13SFGqM6U5F4wDHyYv4VeMP6RRZnKps46H",
  "key15": "D8EQCTSup16XnuX98EKZmg7nuqii4WR3GCxZ6se5G13aXopgsnge4CBk8dYfp3gXt91Ns5RDAWZMN1CFQ1GJU1d",
  "key16": "3MYFdTNEKQnW7tata2VzKJhUYhpGnHHAGCb5DRXYbHFyNBmUyuK5j6KekTiXKjDpL9tZJNZugGHUhvkZPtJQbKoK",
  "key17": "31YY4fjsLMiEGAkMAaTK8zY2MMZbthu2cgufh5FbiqnR61DPJDnCkRSQUpW2ciW7ziDxWxxsaLAuTWvcY8rEJajJ",
  "key18": "3vWayZvBgXsdkRYKmZYrY6F3Srjg1gxbwycf6cLmKMtrEYKi34er86jSwx6g338qWB7vbWfPEXtvUNSFoe7DZ5rU",
  "key19": "36E6suxZrkLXCx9Cc7afQox8DBd15ap5rGGsYqq5eg5Bh4bH6cCpLp9EGPMT15QKUeUkJuH3SMgoGVxQVTNJcQAA",
  "key20": "eS2qYtrt22yZaPACVDXc35RnqPhbihyXLVsYztksqCXKEzzBzeDqVzMPf28WJgEBLUaauTmP2FtJLD1y24CmXvz",
  "key21": "5WtW36tPMzzSJKABuZ5tjgKBXDKriQuDBdrTrbZdRwtDcmhWti5NNBqfHnGzULMGB68akwtgThdo9dcUG2XgpVBQ",
  "key22": "594YxHQFhnZu1LG4h9Vm8oT9LtvYCiJZXwrREdimi3hTkWExHshimaPX5iLnTCW449HBkkkwNhGYhBgeyaRDuJCu",
  "key23": "3yeB3fpurHE5qqpP5BTp4k6LfpHfvC9E2r1E2oQCeKcHRW3pYCNyG65KX42i5DKmdBfjn8NTCo61KAJZH7dkCiVR",
  "key24": "2ECNU5yjhqYw3WKHnS5YWm9Jd71KQ5Up9UFKCBb6PHNdiPNb7oayuHwKbmfZtukdnJ7sYdEh1ngVzjuTUoumouHi",
  "key25": "2ZpC5GXiVmvtqZsHPsySUCbCsdyeyDP9g76Hg4C8wkd5eQ2apkg72z5BG2vt5yrjusZuLnBbnwJprELkAkUo7P73",
  "key26": "VGq1jS43E22teF2ZqXYYVVcQ7RnLGvky5fsgkrqTmuMxHwYUdUKBDRkUHnebxje2QY8QdUMeCh4LHnqSxmLGU4i",
  "key27": "2jijZfuupUz6owzBorJjr6J5KBT4KXW5Dnh7cC1zfB5AnyvqxYiyXwk52KMx6EvKeNLykwtqy8PFNS4KM6tkxTwd",
  "key28": "xvYARPsGjbymE21U2mnYDCvvLZbSKjtf6pin9TkZhCRY7xHrUrNJa9pj8kNujBA6oziEvT59713FoMwqtxx8Laq",
  "key29": "3139Nj2krYHswRo5SjAe49Wxsayb4NE6JfKAeyYedr3JMHa4RHnh9LWcb92pEioFbqaYgBmtLNypDsy9ME5mQPuJ",
  "key30": "3PwFZZWkkdwnvan2yDmhB8CXdURQF5NECeagC4sR1ChkHf3nPgorb2wT9oXd1UKPKZSdUK5eVLQjSWnCPAAtC19n",
  "key31": "2t97sLLUFqohZ2L3rPboTBHA68BE5cpQyiLYPMJk41sfmCfsyT9m73PwN7poDdoZpynHhkcP8xLEsq1RKagpiGpT",
  "key32": "58EiFBUYC8VxqHMS8XpitFggx5g5zPpbWbhLwPWo726S7qXA2BdgGNxiJZ52EcgGmybbe3JTPMdJTAREXP7rvPsL",
  "key33": "5CSRVRESRZ2WVn6BZgDx9s8aXCHKJMjdWfV3oveWDgSsCxfSd9Y1vqK8qogR8XmccLd3dJuwZtyaE1b51mfaFBcQ",
  "key34": "3BZzQFQVKwYszywPvQ2JmQzfYET94rpGyDsiJfvKjM4mR396KPQdXHSQpu3yAQp5YwXK1T2kuyqUAc2rVPekPR2e",
  "key35": "45kN2ohSy9JH5Th8d1rCJKTkjhPJahrCX881QdNWTTFWyMxZzprg3ejWmWfJo17E5A53pahWwo6oMxhrs8Y8foNm",
  "key36": "63DfYo9MNfqsVcNUcrJWRXumDxMpSjWtFJCYKqRrV5ta8q3ErHHRpBrqt8AixZp2QJJKHx7x5uCqiPfVmcCorgUn",
  "key37": "2wcWUBBje1qteGKWdJ6yxXa8CEnxFhdXFkkEQrcAaNbcrEbxkVCrNnmDujvQmq9Nctc36E62LJVVNjFCMjuKFrGE"
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
