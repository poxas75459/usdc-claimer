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
    "26LXNJ2kx9YVes5D4BURCkwE533vjD5kZWzz9exRnAQ24ZGuyg3AVyMe8CjjGgFhY4QCK8JQGYX7LtmaiqHUfmJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yh4NfRkCqUVcXTC7Vt6Fwfpadxm44SYLC8hgX2uXQpa7cmc7p8y668y5E1ZRpsZXJVy5vCYcGefL7a8QqUfKq8g",
  "key1": "2HvnHYbPR2xnWGB8VdSxWJXyrKH4HUrSg6EXiTKwGa21S7fsGM5zqZ7rxrff6E5NnyaVuHtJ6z2u95wRPtuHfsXk",
  "key2": "376DY3NZJdxuXgfeay6ULuQmBPaqkbSAnvYezERimaaj4UyE2PTwPrR4mD9ZHTeCxCsVYjTmwdmUxpFSUv1Nm7tD",
  "key3": "5kLrQyRPLmf4uj2nvuVHugGku9FhFMqKV2jtSiHrdyDNXa1yN7txt8D7YdYmECXDk1N5mEEkyipm69WBhsnFbRWT",
  "key4": "3RRdMb6o5fCQKpw43s1BejTLNnUroza4xFbPSFgJsx3AWY9uQbcT54zLAY17kNTPMyZKTuX4RjKdQxHqigH6Gudg",
  "key5": "2FNoAiomUuMtizw9HTHL1sCoB6om8qbE1XFmbi4vU6bnXKZztwcx9xxuv3KurCWiF9di3mQGbNuudv1gicjML55c",
  "key6": "2vYXbFchom8BgdEBj4byrNzwodHe253hsj2npHDyRddx5b1dx7Yc7v4Lsu4mmq1pGz2U46HxNFabxKVb2p2Snrhg",
  "key7": "3MifFAv46vpVXQQ4SiyYPAwmk2RZMiZ67JupUmH8sFmVKb273JejLoAoMfH2CATvniD2GDS9neZ2S8ymHtSFFy8K",
  "key8": "2gUw6gUByHJy3fvfnfo8zQs9puKHwrCFThKvckVzzdSjYaBs4NtSyM8mJNTCQtKVw6aEu5p9bhDfY2dDQn8pbLVq",
  "key9": "2oBxUpvuRbFddnxuPtUJ3Ahb2inw6QhKuUVWyxj5kVXqbZrvcJ35wVQ5pQzPDBxKf5V6izqxenmWRyKhKQmBbkbF",
  "key10": "2PFQ2wJDa6qVRgsu83Y9BwR87FaeziHaEFKKtW83utqxTEKBxvJeKpAahVwiRxrExNjjotAFPDkhW8gSBYSUvUxH",
  "key11": "676wCLxEkKE8KriaWG3EPaWLRpnBRUihkfJnPjbfsyP37VpTMvJtUP2D7dHZ3LrEsPneNRGGbCQTUahXJgmDitR1",
  "key12": "63Q2gdVocaMT9L2HFfYoRhsBThVRTxyrJgk9PQMPTbCwYtrLZk5SPbuKfCPQYDtQLJ5U5PCuEV89bQN6wdcTaz1N",
  "key13": "3S4yauQNqXQb1SohLzbNEZe3xHszyNEdmfoSmhaif1qu9VYT4kLaaV4aMT5pqHEfLHy68nHxAFbZRyfeMnJQrUwK",
  "key14": "4FpqQKbZMPL6SYoh6oxt11PHszorgQB2c1j8WxGotsG2bWfkZGkMTpHbQU5yhpbjv8FUphYRvG5Nq4cRXD93vQ7m",
  "key15": "2bHpZ3HCNXTy9AebemvWzFMVxY8kLpH7n4h2iXybKFA3UJGrHj6BBt1cW6siqfUiZEaaoNYiSd5YBnPs11sNgcNT",
  "key16": "3XY3G6NEdU6Bkwz1CoTrQk7uvL9Lw5qxKf7tjv4M981oQfNxrfQaAH7vV7g7V1n5Vwt2SbiRBkJaQzgRkjwPAoqB",
  "key17": "4SXXis2Jfck7de94K1ABQYfzySBxk73o9e1rVfG6r3L3xWodgW49tLq8JLU5DXgxskj6FW1JKCtujg9SeJ9rT7MF",
  "key18": "2yUrJ2uvBUKmJMVBExnQCFrCVMMiZbbmMLvzNnJRFRrjR3wkP8YgAM18Hazf1SUeTwuVJvJafXzgAA1rBD7tFMV6",
  "key19": "3QnKevt7dTpU5eUgaM8JohPCqxY3pUh6JRZowcgp57QzaLJrD32dm4ncAgBzjPo31mUvKraQecMShq47AEn9Eacf",
  "key20": "65xf69x18r8GNHjMizj2kod4xso9HFuSG5gKquXrD9HuqgHM58uSdLT8B6gEG5hGvrYWG2pVYd2eitu1Jz5hkLh8",
  "key21": "4oWPGPYxFeTKkuQwfPTe7cXoZyRnMrE4jcRVSz7wS8EKHZ8XBnDWF9yQNkpTXWzgNrFVUE483GS33RJFxFFnAzuK",
  "key22": "24wuzjbtcdQmToHN3KsydMzV9eygLANfRkEwX8dKpjmnyn6ZVibDavjxkVeQNVsEXyVQkKSAk7HL36JPpUowUiD1",
  "key23": "5P4H3mFc5qZXK24Tic3FBStNFi73cbnXvcteZGV23bVNBmbNpCmku7rGkcLJYyyykMAMu5QVuWnU5YzZCq8vkTDx",
  "key24": "W1JdeQ2rhwektChsef5pZHANqeGJL2rPZM5hpTdhYoeEYpTDfVcWMVpcjrMah2wr71crn5gaHuzyL5kizJ8YFdb",
  "key25": "9tnFDaaGKaUFDnwgozeNF31PsmPVN5Zb82Wa7owVzZJReapB1JNzNKBbnmtjuvxsS6bW6L7knmTVrkXXb8BdEzt",
  "key26": "5kkY9vNBUDyx2AyAmR3yshVz8j5dTQekKdG8vg5C5XFMYgVoqsJ7K6XSCmjTeeTvxAo53Hw4naesmHu9cUKup5Bb",
  "key27": "2j2SR41yBpfdMTGeos4s7hYZSxrM9LFDUchnysz2GqhDEmJe7MPox4Mr6BGbxfF5k8muK5xESL8cZoVWWhQcTs8H",
  "key28": "5xbjpCfYqFxsYqFYwa3fWZJSh8FzzgK3hoH7xv3F7DnApUgW9VwkVQxMNLUXQ1EeV4SbyQLEMrG7mCr43amPczu7",
  "key29": "2kHDDfsnrafhPfYb2VVwt5NZe1EVT7UuNQkZUaqmvFZdPZq2H35J1mc4Hks4f6M3m4a9vafj7V9z4zeG5s1rQxmt",
  "key30": "5X6NeVvz3b2RtP3P2veHciKH4TdYYX81ECCsd6MWntjz91F6wTiZG5GyKS7xwLoTLSuc4y1hfU9jFycGVVh88ACP",
  "key31": "3wGH1tfHVmcZwZfXqnKwLXS8JXXwnFzoqjc6tHRdLQdK5NskQP1nCZ2P8i4U1qGStcH3ahzDQ3asDiaWDd4u524m",
  "key32": "5JzfXWu93vB5MsUR3bYzhxU3Ermurh5EmC4DJDa8e7uCeNqXWNY796BDfZUSFbDGJkiBtvxnesPncHkrPLZt3EoL",
  "key33": "3BdW36Gv5HEN8HtJFTSZ45yrZMrpMZEsEfuMNdkEKzHc1w11giRmz98kjFnsK9XsGJsuFTEpeA1kifrW1XtYQpTr",
  "key34": "zk4dP9M78QTCMAuTBtvJCiLF76kaXNaNuUz6iPyfN2Hdhx7vYDirXRmomvUkeTwev3jdCgyPpBhuTTfFpWiBVAe",
  "key35": "3AQy5xW9L22HpxuDij3ZNhnHMSUZuRcV65KNfpuXhKGbHqiEbj59joJUhFrWGDorth3mUye22CYWu6VSaa12xMtN",
  "key36": "61qqfmYNCBubewNyut22jtsibVw3vLC2c4Y5jUrJiamr375PQdehdGxGWRL4bCX4XFB7xMZsq1CXTEY29RWon7dR",
  "key37": "2wpG97x8g3DCUZSbcsE1HggFd8CqAxmgZFspde2TJ2oFEYNjZZSSbu2UV5RBrXG5UFjkY5PfSHPk25a7nxUS4kao",
  "key38": "5hTGK62kQpcM7HhJJuSF9SWyULd3njN9GUzRKCis82Tfy6gztRm3WtfTCvtuF8XML54JWeqpwiaa4X6WehT7vR2k",
  "key39": "2xuDJPBBz8NBGmL47WSezXTHZGvisinUBtKMAqsGccjKhDx9SriYLJdhNBhnM4Vpjxj2rjFer9BTxHeBHS74Lr6C",
  "key40": "4VaUwJRBhNFdXyByRgPyQZWbwkiGFT8R5dMVjTFp4VJGyTB6TbL75DHWo7dmmgz73WZsPjtdpzEwbwAm17Cuov2W",
  "key41": "2Jnatx6jhpn1FhiSWH5qVrMBi93FpsJS3uRbxBF8YgEx9Hb8E14TtNpxuK78MY2D9G7BmY2ncJgmLMXZfUqKM2in",
  "key42": "4g6sQetDdEseC4E1aGng7Zts1q1jnmRxBSXqQVvNFofFdvCwbKd4J6f4iNe379DC2inm54SkmPeZ5rznhDUGMX4U",
  "key43": "3k1KrjLwV2BWUrdsXt63kifcrubQYGDFNHVpQv8XHRT22w9661yLDHX997koy56T7qRxj8gQQkehgYxXEtuhTamG",
  "key44": "27E7EhaQSb92AGkbxJPrapgArNHEPjcUS8iXbJmnGEb9FN5UzM2vB6BZFnD9qE2qgvJ2mXmc4ETwEZxdUTcp6pjs",
  "key45": "4r9yCj6vo9ThzjQZjK2GkXcoRateSamGgEeJBxifM46UodZdDfxoVN7WJns81mqJFK7ogyup74NjPT99Cad6CPjB",
  "key46": "5x5ZuyKXAbsqB9CSzrq1vJDmJ1QUASD5mLLj5HWziJpCLC1PWpqgrihpmieVba2HyY77uGfAvQMhWWdnySSCd5cc",
  "key47": "2U3okWqvFABx7uhw9Ff4SmEXMvRr27suDAU438t9kLarnPwD1LuHhrde8nvwb1sCgEsZJxvtsQNpQSp82JiV6HFc",
  "key48": "54pdLe2AqJBuhdBrpKD3QA7NH5gxfv7tNLojYyHTAxsNGLtR1i5a4MzBzeRPp35DADWHZ6euSfRGVwh9gS69eYE2"
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
