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
    "AKJutoRWXHVxNYff9Hd4uYB6eo6wgvzJz95nNsu2nSGWFvwW19vJV5fJXjupYFXGoXD1dTMHZCnz7HFMhvqqWfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SeNYnEYLg4j2Mnicm13vikVT9vNRebUUioi1RtUtfB3xTcVg6G98PmSfKgy3Hzr3RvbtkTg8hnYcdvFpR71aKia",
  "key1": "4uSjg21dfkzqjQVumPEXvLCfPJB5zrikRUEt9EjwdmfRX5J42RHFisRXPZFHprUXbUGRudzVdekr11GxRaTYSpT2",
  "key2": "ETNbWBaUsFUsDTVjBDhqvQPjs9YbzMB2VrWwCSWj9yBiK3QMexncdMRVaSPBoGcgdz9DWf9bdfNJuifxjYtFDPV",
  "key3": "5CVcUXNe3Sxi3SXtNTti4AM6b1JexYAe9MNrU8xVvchMFAES11tLCuJcUdwfKk8qY3omChCNVzFwiULg6CDSDeY2",
  "key4": "62qLmDNm1hBfo6tYJCuPTGHnzA2iD66JizXpwo7ba9HpfK1vGUUFnHYv3MSvhgUQ913YKaghdRMPDPruQUc3dMu8",
  "key5": "3qH5UNEQQiXp61gNkNcUnYru9G5SocNbfgJ2AZQYmMn8iYSDPPFevgB1JLnLme83mpeo9UuRZ8Md3SHxRg2VN7oT",
  "key6": "3igym2VQaXtunAXSNgs923aMrVfce6UXYWeckc4Tz218vFNzVfqu35uDDdLepRDV2giRUaigEj9XM6Ck69xA7xvM",
  "key7": "jP1TkSsMhsjf82MfYTPGPi7Wd6CxNPshuCyfCnDdJ6rgv7f4XzRZ5gVXBUKmm8R9cCjyT38aerTvf2M6mtKAcon",
  "key8": "NxqKehvnoGw8aTK3hTfxY1RguhPdf2c53BpQANUY4nkrFoQ9GczTsRoUfpotGMuDgJDC5qEkYFb5scUQmAZSc4D",
  "key9": "4JtCAgCnahaC4gATrRoN4thUAtbi6PssrqqQ5aJSQWy4crny13NiG8yUo4mAk6BxuNKohcnBWBCbijmfWc7QdYsu",
  "key10": "5JMx7ZcYKLYJicidpMkSK69hvn1hRxbjhZd82AgAZcu5VZP6EQGboUf9fRfq7vwqSrHvc8FfV9xYD4Uq7hTkBrk1",
  "key11": "275xrJyMJCMgZ32b2fry5wQVKwNojum1DSRLyMgEK8wqL7Bf2Pnk1roRQHYcLFetwwzRJEALppcYxrgKnxYBjdxv",
  "key12": "4uUySia5L5Bmi3L5fHcR6fbHyaippVhoHAyM6XxZmwLpKz4vEEqFFNBB1Fet7YWNiKtNfGggCXgoaVWBFjcG1Fbk",
  "key13": "PGh4qe81tvjjDcYgzmVcqtRJuggCkThA4vzvf5kp4ddLUUYLwQ46HvaveS7WxV79wuS5h8RejGSSSpqrCRHMwRr",
  "key14": "6ebJ2Hacqo6oW8Qdkp7hes2RWkrconxHc4PB7uNZEJ2GgEJnYneUm2CeJxLdERya3DZY7RvFqDPjoQ3MK9Taodw",
  "key15": "2s8bjGguhMpRWAzPAbBxmiprFs78TRndiKtzxKuoZVstJoeJ33WuHoNcBDvA7NZkMsexxv3X5ok9GNX8Y5JK2wWe",
  "key16": "67DadRpdTvpbFLY2W5B3EE5EE9SZU59rLmZZFsdbeefbGhQuxt76qcsZ4kbnuf3koRc8aY7hNNX48PCTXGBRbg58",
  "key17": "3H8daJSgF7WCPoCeaonsUUN7tuqFfGEXPEWRXXk3edjyux76VX4hAykkEgjqVG5323THxVuAfhCJR3A5BuJLfAm5",
  "key18": "4FpUYcdUi6LfSfxPKGsQLvtbXEeiYnyquX1nvjBnJb2LHpX9yToUMPCySWiEw47rXkHbLB7QUV2PZhrNKt47VotQ",
  "key19": "3JnHsdoeZkG8DbyDT9vuAg7xmkBSfb8keavgyfoYDHGphEdcmzxhHqmQFHv9ZkzjFvwtWfTsKDziBDc5w8gcvXYn",
  "key20": "5Q75r7f6MmX3Dp2eMorgYBgBAJn9VpwbVt2Qafk3fbdA3qvvXJiMKDMDxo6pPkd2gksahnXFSgULm4ejA9s5M3gf",
  "key21": "3rdGUnPweebo8WCs3ZiBx84ZBzsjQ3x8au928hq2aa64BNmBuPMHvvVAm4CP529YFZEzjNy3Z7dd6jD5vZJnEuot",
  "key22": "3Z56YV3fKR4zSv3BAsH4wjQWGECk8KYxmdp1JqwfWSsffnWwiVrPSTezNf5nM8wQXueUG3BXgRx2PX5fbfWnhM22",
  "key23": "jbz95D4b8GauFw66xiTMqseuMpn8VR7vzD4T9C6TLLfrxbRjTAouE7YZtq2Yy8HcL3N3cjyJSt2GdY74epKNur9",
  "key24": "8bTAsABZVfZKZPouTEHakEZr5YKpUAJqMUBR9x5z1TWuN1rRPx39kNv2EAErcw7n5V1oc2t5pyUu3LqdtUW73yW",
  "key25": "5datJCzPNRu6dhDzpdXiSPdmrNz6n6emESgg2thgvzYwYnGhvt58RQmy6aTtUJQopUcZjCeVPCgoAze911nMFdLM",
  "key26": "3HYzzHfVsnq1GATeuuCTiVhrsrFfURMCUvKhNu9bHpkYXhi8ySEL8qCVpxzQKDSwQ2mED7KJ5ovvdVnkye8UnFC9",
  "key27": "2LkAS3r75B49ippofTovQKhz5NZC4BcA3hhKwuc3YNbm3fwwQu436ptR9YuvCPggJbTDqWwDytq3kX98s8ridEVy",
  "key28": "2zaSrVZ2ZK2vwtLx2eZ4Kv7F21oKvWHnbpCpNpUbTQk2tbXCwB6t3zAyeRKkQWSNgiRZXuZcBG21u79ZziPbSax3",
  "key29": "2Yt4k817v7XrBLHYgjnfZ3KB1hdLB6fZ51QqePvamPEi73WaCLQPYPwxTdR9LtBNrUie2WRTySfayEAvj2iKshzM",
  "key30": "5X8ProGF6qgisKW7vF7VByqbbPNtKFzVoqotZ8Lvprc1xXUn3MQ59DEAw6P6fPrM3Px9AoejSGTG92DTbEHdM6y3",
  "key31": "4WdqfBsnCMvzgoXt2YMfUJRuSVYTGc9Wmrp1XrQX4ZqXDvAF2CihsuBjD8HE5ZhPpBhFGZxuwQSum5h4WYMXDk3T",
  "key32": "5BieCDvN9ajEaSzVqXxVnNTYpE6ytRPDEn2SJ4M3eJGuyyRrPtvkbjNMoytHvXGxw8aYdScz5bGTP6ehHQjeamyv",
  "key33": "3UfYqZjz1KarAg2wKX7ASn6sTrE418fCCLLjMxgGz84WWpAi9w3pmZTyaMxvuJv8mtw78vtT1FZ6NkCXDFQ6eAga",
  "key34": "2MajuZq9QH2QDk6WBnk6LCYPc4RFj418iB8pbJHpY856uMxH2oGU5emsq61LbaWyHcSrhuE6MhyiAgAT18kPLUfe",
  "key35": "ZPyVcxqU25GMVqJRY6X87RmG8g9EnkPKtspJcLE1LEaH9GwiNRMSYSMAB3aVw7pm4E82swDnTM3GtkJs932rn1u",
  "key36": "JPA1Mk5mDeNURPbCirb5oPZ13V8otfdjwQb54Q6ruSp41VdFEmTj1y3jc6XZhZAWp3AnAsFWXJdro7VoyJkmSGE",
  "key37": "1rKRBe6x18kmYiwbtkaGNxLFWWWXETr5LhUoNZuEKk8JFyUYLv8auwm2xaEWwL3C9WzdotqrqtEty7ZdF4qUSc2",
  "key38": "3YXKMsGehYQ9WMhPssUsgKtsqVpwxczcNvt8ZEB3PtGqvTfNrjDKTdNhHeufGs95CQwNNeYzwVGidyFQPskBK2f2",
  "key39": "2K5CpjHMB8kPjdyww1nR9FayvJQCFLLMmyt9M7BmuWHdQJsmhqwWmBe6jfRN8qk5ynFsY2HXRLVh5yGXDCVzKYFM",
  "key40": "4D6i7fbaiEdFkSzmHyGNhbU9fmzfA9fHhBAVqdunuiBBfqTQ7ZNAAvMMeGoPPwYySW1Gko9gitHCwPqanoqiNTzH",
  "key41": "ygsceefnzMF5MRQ586WeePToRdJCHE6Gw8qe4Xr6s8uaJus3RYqBbESw4BhFk9m2JfajwWdFVqfB8kdCC8ssdjn",
  "key42": "5xEnAB3fuT2B2Gxbg3Kqh98AzaT9zGvMy9SX2savcFB9WPxScsN9BsDKgsjaeGHTnkJ7XEiccDfRWP1bcZRuqM5x",
  "key43": "4tvv1x72qWDQXjMND4JA1P2ZZxiQvjLNdd1EuPbABADmDtYE2Z4LM2xTkPStrwc8mNGeub6SX295DewJytP31HBE",
  "key44": "3UnrucFdHK8Hn6cTMexnBEfqccrPKNqFJ48tqD3DchmpDDG1CUTtjKJP6RQEvc3ogg2Za22gd61xgd59QVLmZeKj",
  "key45": "5vQZEyqhRpSzazASoaqiGjFgzSUhoDC3NTpobtAXphDnFaYb1SPKotLTadu3h3TSEBxSFbx7FhAcjDY8iuLcfqt7",
  "key46": "3ntzM9jAMxpGGyU5gVZvntCivMeHpsUF5piYVXBp79jfeWyjyV8aTj2k3FCLsuHn5MQAAsBL5KxnRpuGNDE9fpAN",
  "key47": "4JzWwM4w8nB8kyQDPQxaByYR4EJhdQwZZc7gDbJRbfGp2Hv2vAaJJ3F6sTRE92tvKmsY43oc3R5AnBwbvtFw9w11",
  "key48": "5TGToThhZaCJwRGoDXQ3tKVEfRzfPYetzjG2jDPxRERNugqAfQ9cTh3CXGXAGEX29zFQVnKrTk5q2sSn1xDktBFZ",
  "key49": "3LHEkBwKR4tdExew6LvpJfMbyMvLx5z7vKhSnghbFjpF4wyFhBVfJVhLFWxZ1f1uXQBKM3QSwnmNGPa2Q8xVK4kX"
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
