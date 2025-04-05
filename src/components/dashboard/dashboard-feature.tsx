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
    "5L9yFq74QuagYSKN8kMt6yjWs5r3HAfXmdm8gtMbcEtHzwBsMEMSLapPrHvgwnHNPA6BXA9hwdiLeyDKKRUKcz56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ty52p1ZSC325Ev37VPeGn7ez77TSHDy7KSptHXiecXTygT6HXYCa5MMwLtX3KUysRbYBaWyUf3BmNn6dNN9Wi58",
  "key1": "doC4HXzq9ibZMwhEqhWo19DabvAcKuFdSrf1QhKYtBQDzUwAYtvDtrHJqeQPHQa2XvBgpW4sNtCsrjDY6jswShw",
  "key2": "5ew8ew129yEegt2iJzJ3PscK8eDyWMeC7okUY7Pi6pTx8RYAM8b5ibpb2khbSWDyUoE3MGLzqXxAeoqWzyziXpMM",
  "key3": "3rPBtCyES9LXfeWDiyH4euhzidUXdtTTuFPcSq7oZok4Ew1PjpC8eepMrJQNo3Z5xB5wYaZk7abEYH8RxUB5XbAv",
  "key4": "4PB9FXJS3VytipxQM3xmyXg1Jq64F4gDEm7ePdHd2WpuQfu14uTNH52WqS5tyuZzD15SWk8sNLof5ua6Sjk3xMAJ",
  "key5": "cV6Xnb7T88mQtKtcQy6tBe6f6wZ9oWuuPRkni3kdbcXTAqC5R79rncEPFqBSiWCFYwpmMJQGYmErV964q1Bxdqf",
  "key6": "2K3rGrp8C3LNf4FHqyZr7SQWj8RSLipY6jQiFhreucZFWTkdNjxX4fHYgf4mm6VFUQFV8KAFmS35QF4ziKFEQPSY",
  "key7": "3827jZq4mtivgpWEMyE8KPrS6dwdGGnUgVNmZGR2SPRq9vNfHRYNPfHMQb8BXhH8nuhqkjTQJSvUtQkDzRVL9si3",
  "key8": "5Mjvo9ygiWKaMSegrg4YqKKmNoJBdgKMD3uavuYdcDFeZ6RpJnoUCm4FeNwrwEYfz77SySNYTRcSsRUNtXjQT98f",
  "key9": "3WnZ413GKEKd6SLksMR5aMpr6HUp9aV9N6jVbCV5Ws8j5ib6gHDVRShuVWCsgLsuKZuyiNuYvtbRdWdiy2miayRF",
  "key10": "4yU1NWQcGEdpYXRQ7v8KsqoSQp4iEnnPRwbpt4eDHmQ5vzcWeFGDT56AQoS79rFF5mNm1wcLcZ1z7dMwgHP4HwdE",
  "key11": "4g15njoumhmgWg5Hn9VJU8PY7PLnXg6WDHR5CdpCJujdXzsozY1keesPvWG3rgXVyDHTn1r3RBbxmGjnrNYDQvGh",
  "key12": "4CbdSQM9VGqpGffhAKEibhmCcVgU2AmvDfZh4wtpHMEhAKXw6TLZPi2UJj1gak9RuvyKU43PpbWs7wifUAbPSkrk",
  "key13": "4L9KcTpFRfCxerWX1VzTti5tYKUMrFm9nvHfbg3gm7yUQi2Ypgz2A5MWQUBky7VkYeKEiiU61V8JtnKFtvcN9ffh",
  "key14": "6dNn7mGeSypzNXdUWPVmYvwmmej84PSMoWGULWeTjyVimtbkJbJDb6xdw5MrJZVDjRdAiH97oJAu9fSE2G3wkEs",
  "key15": "2bTZWPmJVwUua95cC3xQeVFbJRNGvAUSDgWYYzApyFKnSPSJX7JfQZFVHxq5Kur7sgm7dWAL11dq4oynQZgiqAuG",
  "key16": "2KCkjrg7MEAEEXBk4FTy94QYjBNEu876HH3skVASdUiBjZfjFe8EUZJ8rFkEap9u6cizoV3vp3G7CMCvuoyjiXtE",
  "key17": "63MZwu2SQwZorF4FRKEaP9evYqK8mPQs1qKQfzYLWLbVwd1qoDpGXGH1FtEungCu2bc8iUdLsskdGDyBuVKChpQV",
  "key18": "tnJT6iTjqp9G1ao2rnfWJ4VmMUmfW9SnGyvmMMQWB8FVQT3gA8kdhvLDVaohGZ34jHVF9WM9ZhfKEZDB4m7wp9B",
  "key19": "5WeWQikcaGBin16fdoXGs1qjtNQdFERmPDyA4s9CTVyikiu5QtXKWbJgFwRZFQYQcZk3GFa3g4YetMPssBVsD4kR",
  "key20": "5mmMwNjGxykR9Lgz6peyEdouj87UA69jNbzmT2Nm8XDjak54MuTmQfMt3ZrEdyzZs1hpAmpBpYn83ttWqSkJ2j1u",
  "key21": "ZgA8WEdNC2KJcrkCFuy1NS2B4crqnWVCfrFCdgFh4L2k1oQ9UAj6c4V6MEXBfESyVZ5uyDWwnL8nGNokQyJcri6",
  "key22": "32bQZPDXGc94vPfcWsao3hBPFdqkYg6szEFXYtMif2uRDtmb9DgB4eY4kmr8q8d9m8XoEaUes9n9uB6renr8n56S",
  "key23": "yKrYcjwWEyTKC3ULrLrGmqPcdCmJyvBSo33h7zmhoRFqPKFajXbHW6sEtCw7EKbq7WpRUMPS8x6rTozZMZL666v",
  "key24": "4QqEWipCNktUCoGmnou68HnZ6vsqyL9Ve5Vu9geqZsHP8BZjfRyEd34iGTNFaQuewZrK9ed1F8ihyoTXwmjEacMH",
  "key25": "3jjjd5aBUzZbcvJxSA5ut6w3FVx9hqZFQnRbdQbrK1uNvycJ8Kq8ArbFvgFAo7WGtHADprvYeNbJMKddFSy4Ea3w",
  "key26": "5xFwy3g5BKSohqjsAemd2pYr3kTZjDbSwxwdaYaAzX53qiiNteFHvuMszgdjKRRrn9yQ9yxNtGC1SapbiRLw1C6f",
  "key27": "ubT5fkAcpZcgeKLM5wF86PEbpX3ea8G1ZhcfFnnGD9DR5PLNCBUxnPDkeEf1d2wchBigTxYKRKANRYNdN9KWXkC",
  "key28": "4rHAz7eihp7WMueFEWqYiNg13t1yHHJW9RQ7gx56Gk6LM2DZZhQHycZsfetDduXtwThe52yq6Ew3gFhSF1RCqvGU",
  "key29": "4YAdTQjS64piSgozuKwmwciZFwPYWQRi1kuNPMGMMtcTuQamoQDB8mjd6jtobKdHrM85AmB8UKYiKrf8JotEGxsq",
  "key30": "4pxNd4n5sALz8VyPzNNTB7548nxuV6jFUB1WqLstwrTqtaxAgFNtfGNKBkyq5K96KNjJtVascxQRkcNASDZQJGHt",
  "key31": "mVH3E9nGiLwgWPPTgZVADEfSifQSk4nfsdbxvpQpGzTtc12phxKDD1zMQjxAWaoGdWQ6WHfnpBpKsKunDyhkC9u",
  "key32": "23TftAbgTV2UFT4YagdQb876T3aE4APZH9PMzcnh2yNXrCn1E4FeMp2hk3ZepQgHJL4Qen9ALEHux5WP13MC8MuF",
  "key33": "4k8cZnTBKJbnYeUfPcbdamJexVgxiSoF4tudqKwnvv3jmTmdGe8MSrp1H4STvoZD1szyuRKQKVCK9uRye9yyrHM5",
  "key34": "5bZVVH1kHXahF5wHVqpDVKsnzA4EiPX3EdnKx5DmGQd5Xt8er2gZE3G7FDnmp2VPs19vbXBJwLKGV6PjxeDVmfdc",
  "key35": "uHtjbFrJVWYHNGjoxXZHCQWXxio5JFKWCF5em32iRqZ4N4XRkBdi8LUFqpaaHviUxHoUxnKPAU3K8vGJ7kdrbno",
  "key36": "3Vk4xKswuzDFH8xFXZLrYqV7sDueh3nXRcRBcNDECdbY4XCK6Q9mJnk3tjW6mG6TwKnXjmAkoyBQqJcgmQVmJc2n",
  "key37": "4dbtNSaQqzgWvtrmXxcQspskMJUf9eTaTf7wEqNvtUNLKxfWioQgh5KZinMhwn4LqbnrZifrrL5DzoSGLvYEYejk",
  "key38": "2DNwwpZLBRB4sTvaag2pexv8ZCJ7JmUeCwCpiPouTLVt6SqVC7A4ZPB6xKUuN5DgHwbRs2aFcMUcP1DrnDdyBsYC",
  "key39": "37R58qXbWyZSQWhwMgbpwpWNvkyDdHSaCb1Vk3yZpgiBt1mbMw1NFyjtczyUvvEhHMAdvcgHDK4qtuRLtnqjEEuw",
  "key40": "3W8UCWSGpiRF1njZbEWoZAa4wy7zc6oS3hos7W8rrP5FaMGrAP7Cf8Yw1888cHAtHTBDaKTNM1gYcw6ypvMAo8re",
  "key41": "5S5RWx6AHyzabgm9KPq4rzZfAZZZXxyA57YHFZ6rxTaAkJ7Sfi7QUPBns6mcfpCZpqvvBhhFvwyWdLtBsD4HgrK6",
  "key42": "Swdn8fFbbPun5hpt2QUmR1zx98eSrUL7ZvYw8b9ECpovjEu7oku6r8GhwM9KYZdNS4FjKyWbsGnkdeEFYte3p5a",
  "key43": "5mCHpMQxrEnvxByy4n1Mu3VN3bwWKkNohj2KN9X2DjLUzk7s9FyGFQ17qcAxZB5n4xC6ViCzB3hhZDC32ggwevrJ",
  "key44": "5upDEPgh1w2mEFLu4KrZeACRL8PyCkcYdpE1ESsBZXcYTw8i9N9gGFqL1Vt37HEQJKFy1sbw1PRmPhDCgJ8gPDqr",
  "key45": "3a2WSLPrzGNKnbEYwXLyKgJ4BffQo3frPhCP3T91ULTTqdguSWxHTQjA8MrQApvrRDkjt9Y2LWWa9mNBejiYgXXB",
  "key46": "5japzcQUiBMUP7ePbmT8dfQBXsj3rD5hq8GM1KroaHiHpJfbdZg5qnYtpsXipn53LdUSsV3vpVbX3GgkCeZF8w8f",
  "key47": "4T9CAwy7bns1T6xUbbYnmq2zV2yy5GYj9DXSMZfjjd5yvEWo4Mfau8kTxdaiBu2SQtWjuinnFFwHRanaoDC8JWEY",
  "key48": "3aprzkfXfgjAbqLHJWJCCr18upbgZJXAtA2S2wjk7nBZ3bMRLBLXebhNJwgfreCqmPb1Fb3HYk5ddsCPcjEjdPUW"
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
