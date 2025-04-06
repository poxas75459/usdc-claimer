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
    "5VSy4kKgWJm7U3cwR8Gn3YyFyB4ZcWKFwkSsiLE2aQ5uFGSpdGCdRdEhevyHUan9QVREXu7FpBMTZiD48QGg1du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZnevBx89w26nHMeygByNmpxK4NXBQQoMmEFnkNhsKhLYQgSCThYNTmi2hRmdoTxupMXqmPrDgjXULMSSLTiYvjr",
  "key1": "4Dhazokgv6RJLV4YQsP7mnwYo4qcpqfc8AuJZ1XCmyA7DXQxzKmV32jpphmRfv1Rhbs3ciS41gkoaiLW2QU7GGPd",
  "key2": "3gppMZsKqF7zst4qcMyR4g5q4sig3TE7Qme7eVNF6d8LR63kf1DUCk5j43ZLQBiVQAidB6AEA5UpSa1PsxAdVQPp",
  "key3": "2uM66mtPPQeeZ45YUrzSfcs3qnaXdFCJdy78i73i1PM42YaKa1bfk1TX88918QMkWnTqWmsmqbC6GSa8J598rvZj",
  "key4": "5whZfH2hGnuPtT7nFq4Dswy5uXdGNknGKh8yN56MJirvthxYRSBzahCBMoD1ToacUetZ1RYuTiWxgB1VcbUAMcdU",
  "key5": "3z6Q9CSkCEDvZtaFR9Gs4Mjt8rByhgecty87ZQupbEtoBU5fmm3DY9MACupBjyHeWv4TfsytVpBhsSYhWamRbUqQ",
  "key6": "3wSxaLcgtxYZgT7mKbZVzEXASADe3uqPdT75ZHcz6Z2JkCimdM5GSFmvPVtcBb25pGxbrKuYBbDYiiahAZPTfwDz",
  "key7": "38t2cDayjDkbiVV3tqSPJNu2RSYkbLtQYXZQXkDoqa7qH8HEXvuVWEi3SeNyFfyud7RsrKPeFw1fJcfQq665Q8ii",
  "key8": "5RTVUWar6Ri7aKu7T15wT1DfvReR7Tk9t732gwqk78mWa9gwmwM7W2sSAAz7C8UH6eYiU3DwjDdisxEU6meNZn1F",
  "key9": "2pw1itLdBGDgiYXKq93ak9boHEubi2CpU3fgRTGFNdzCDBtLyny6MsNeSMeAga3ViNwiJegG5G1WpXvJSudjWfFz",
  "key10": "3bAdTCYyVPtLWsfbYYyXoz8NaBpW3J7QEdFp4XikFxCXuLQmewLHaXeEjFnMQ9ssR4ZviXK3vDFswxj5qKHrTHhi",
  "key11": "T6wGsP3gpaaJS8ZnJxRWa8VEjkUrWoduox2vWuMJ9KMjYvAR21HNAWFWE8hFoLCZRkiwYo7HV2QJRbRUHC8esvQ",
  "key12": "44VXvoimv6eT6PHDcKcMwaBA75VS2Vj821kWguUKp29KNeDcAiGwCnZWPSc7bUx6dGFpnK1ZfppZEghRSkmAJzzA",
  "key13": "4kAoRoXb2p157HiCySC3udVHMM13bNTLcQaqdcTzdHBQWKgxi69BAYfW7c37zfbmU4Msh7tzs468QujcWVRajRWB",
  "key14": "5xa3MkUiuto8izkx7knkmkXw8t7fVWqRaTLBFiC1G1qWJFky1xTm7nyQAuPUU6MjPTUYLL4pUHtSVpV5RLr6aRrM",
  "key15": "3vNriBygyspbRi2J2dJHeyQZxpv3QkNu7GTsn3S3pyY3jwMHAnBmqx2MB897SArpyU8vSRrRW7NfPH5LWbTg4r17",
  "key16": "3FPScWDobdTBLzUZjZjYg1i6s3rcjX5UBk6zqfYzQkXRKECd9F5nqiTduaFh4VGQGso8cXhoZskqWN9UXAd9Epnf",
  "key17": "Hqk1bgVNxYXvGenVSv7QEUqL3KmbuHKhCCh4SM74aZjLACbvCnme7VDjQBi1Bed6tm51hyAKDaXjmQAyqy9Vcbn",
  "key18": "3hhFGcfMiy4D5yxEL2nqDr2WxMwQu5JLb2YVgGa5nT3hsf4BrdjejVSXsgVvAgfKhkGmLDnr9B4KRSexG4CkpYBs",
  "key19": "4aJzdRcpLXLa99GjnngJFYfaXvjxWmtRngyzsy7vipXYgqVzhwZ9aQJJc1MW8ejJcuJ7dbUp4u2r6LpbMM3212N9",
  "key20": "5XeXmDaFbivreaR7k7jvshz5LS81SsPSXKdSNKa4d5nP7QjxojW5KaGeNJPT9oB9ZAHpueET6FWRrYhut6Q4Rfmn",
  "key21": "2W5ZRBd6BT93qWCjs6EGmryqbRAaF8BLYwDRUb3sWFscBktMHz8xA1LgXY8GrerzxrrXo2B6X8CcAF5FjDzgofnN",
  "key22": "42KLa8L7ZhpEDNLC8LcmFWUSGbDPKUr9c562z8iMM21WYrdQfGhNRZRFYxwydYgSjirkUf58oaxHGQbeY7srkZjv",
  "key23": "3yiTUcneY7zUv2YPT5D2wFxTn6CAT8J9oe3fbmKqQP9Y1kcgZLMHxwUu7vFXSiozzx3aXXZ5DpPd66iatCM3RMbB",
  "key24": "2pxpojZWfPyQ8NR3x5mNnYHgcvGkLhtUNAJZbRL4ppGY9WBY2FLzgS5d4yqjad5bZrq8vG8L3na3xqX2ycv3WYiZ",
  "key25": "udvQx2LBFABVBTrVu5zZMByTXiCFey6uQYxeesaLpZdiAArom2W2fFXLpbsngAgv61X26jwXghMCxXWB2n8Qpbb",
  "key26": "2Dz4RmykGAcoET1Lywbvi5dfuG3gk4MHQ7eWXhukAwzMpWeVq3iJE5TDQF2E9Nb3mfsscVPibY3Z1TFTgWjTuk5L",
  "key27": "3b8phx8hTxfBQMHXKSyPrjwDJPsvrp21dsKDK5bbvToQm3RjphC4oe3GfAQMdJZWVHiSFavzBhUCjjiyFpMzxkfx",
  "key28": "3Hjh6zi9ibtzWYgj9aHooJkn2WU2odPcjxfpY5EGrdj67t3VezfP5pttvcTvt6uACsFRqXHrYZCK8ypkA5uhfSLo",
  "key29": "3zFEBwnW9N6rDWYLqnw5LQyRUf5fjRsaR8f17ZJUBnPUaREnAmYFK51hh1XQJpnirgMiarrFQtqATR3mva4R3NSL",
  "key30": "4U4dJe85aTBopm4ir86HKvebSSdURKhBJT15LpzczkEqqfgmRE5SKvvenEGFDKZBsp8iy4wFhRUuUDkXLwpVkqPH",
  "key31": "2UqitrCyWPp6wh9rDTcgRdyRfsezWFwzxP7PXGaFWTNdHNBQRGYmjfxMVrozo2qhPC1GgnrcvkhAhN3o6R8Xuz7D",
  "key32": "AA7ycT9j3NsiiguWJZYmb8vyjEfTzPQpVNK8KnxoBvqeq4hV7oSqu42UFUrw6EmcvB8wyaEENz5MdZME7Bsp3UW",
  "key33": "5YhB43gH3RKfcLhXGtv8sRcf5m7BXREHzoR97iocmLmfqapyTjcZu9PfZriXwG2fDUgA94WrwTKEj1h4T1c5PsuK",
  "key34": "66ArbbWB7689mJtNrWdpAisNgbKqruaeWzxFCLjp1Co1dwByY6cE1e75hDEWkhZb6HrrhwPd7oi3dcCNSD6zYjaQ",
  "key35": "efTJN2EuoYd4ex62GZyZmg8bo8XbE1FYvz2KE2ExqRxKWsqWoV3bjt3Hyg8xxpqz7DmYqEcP4mxWZBH8HzU5kSw",
  "key36": "39LcHJJ75D4jfukcqoLyGRgQGa314TDcKRJyNHpYY5NbeZzrZQpJriLLSotNECE3hiGmyADy1baqtNEB9ABmnDWU",
  "key37": "5JutwoXendv7LLSwB3whMQRwpJABgdrGUhcxYr6ke6u876cEESqixFUfXc4PFy7saUX8iCHNFsNSMDhm6UpTqrgs",
  "key38": "4LvEfpSyzD4xnxzQRjQA6MVE1XNW6bCr6puDazxVefMLdMhLXgpPoqLwkiERwqkBjiSPhukyNq6TDNpyCuass7s2",
  "key39": "4Vn1mqu4THpcFTRbQyn77yiYwJo8vcjMgA5ggXiD3JYmWBgk5pJtdkUJAunCuYY2oYu7ebs64gE1M35YswyJpNAS",
  "key40": "4Z5QBhQgHpcneAPw2su8Eh8aUzyX6Vgf9QSjrWCDQAj7CS8vejwX6LhRyHEjBdhTAmewh2KwnYgafJhyMaKaXsCa",
  "key41": "4ZyQ7xyUUGj5oidTWJTLart8Kp5WAymfNu3zV16YvNATc7eX9eeV45CAtikK16A8WoDRRMWTj4wvqpQwGXEcogG1",
  "key42": "o4LuA2N3FzqNeSGRUkSjYbtZ1yYBxmqGUJmcYwSw2en25r7KafgrqL9rFQ7spFaq4Qs4pPuzLhHXa9r7FjLWbJW",
  "key43": "JgBbxJHVcR5TtPJQTRSKzkraZKEkM5Evi7Td6AGRTKcF8nv4b7495ifLrNra7kYTTNqz9hbsR7fKD7wzNmfuN6a",
  "key44": "PFDsgDLsEavvaLTqRKRmAyhSTn6YfvPVeTNgG58dGCtbHxCAofxKs9FmpmwzQnu6Hubt4BxhLSCfRKbdo4fDPbT",
  "key45": "52ZgbVz8NeL3uHw2xMSWESBns5FcZMQ1fEszK4Kzz5ZuhAthZNM2kR4mUe7YLsi24rZXScsXgNJ7j8pUZM2A7kBp",
  "key46": "49pfdessawhzUtdL6tH29wwU5kvpKWSrTeoJC4kFqoqjr6jaRgskkufykAo1aruxLhBwjE3bce3G5vynzXt6jUmZ",
  "key47": "4N4jujgMCoNPP1oqWuvBSnEzHSPvCmgmsBdFfQpmTzAtJnuqirfkW5Sbn4DuqJJFB3XeEAVYsu3xkdDR7CaCAEaX",
  "key48": "3MgjKTWcMb75Eg7yhtfU9N1pXM1k5PF9LJkjWaYrSF7eWvDCFTPpCZfXxthYC9jLxXgmcjCyCtwt9oAWFwRTALR4"
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
