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
    "3PkikQfbrj1RfphVzEfRupN3ibJY1hVx9yar83BsgfDYEy3DCERiz6SA3uGaK85oCB82vefugW97SpkcXYWGAV4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DnARi5mPTCG7GSejuVD3SQGeQTwohUYhP8RWrKaLSg9qKvWdwq7gu2zU2CVoR9sxHF6rqB8vTnmpq8KCw6KzWwJ",
  "key1": "4cZgx8Cq1w5s2G6oM9uQvZ2fEiDPA4vnSNJ9ENdAprgyH1Dse3LHHNw9bWm4Kze8YLqSAAefGtMzvn7uRa8jVaeT",
  "key2": "5rRFRAbqSVL4eaqm2vPNySw6H1e9pNDhJirqhfwCFamSwmcgsm2DyaeEguicYEKnXDzNuJwDAYwmmFZ8gdHF6MqU",
  "key3": "3LkqR8EAAsW9MMx8wFzq7RJUKzffVaiURJm9RRvpL7xUzFZEvJmyRSUB8NsNsNwXrUW1az2vD8CLUgetdjJRqfZw",
  "key4": "4FMKxUDqxnGNqhtXQHxhibcZa9y8d26L4QxYofaP7wZQNeVsjrC1vQRnWGzwPMDuQJYke8Yxg91H4G2rdjeYTdD9",
  "key5": "3dkHXXNWty2cdDBMDt584dXFjmia47uVy8hh1tfxbJgtpZ8cRB6qCvMAKFAFxz7Prs7fNCvPXaZb3DZ5ibrhJEpv",
  "key6": "5ZxN4A2kKS37QVWctEhoHarNgKAXWNsW7AUQguwXs5h21mdc6RNWWCwKLoJB13puH4vASE7W4Spbzok14ENXzjzj",
  "key7": "3AUUPWgFhehvUfn7sZ1G6ohB1aDZzPrcAyeHefZBXDhFCCcNh99jbVU43J3GoL7YFfvf1eWaW17xHACSte71tVEj",
  "key8": "3Za7qhpeYViiW22pTAxxWEMSVUR5npmsoarQ6Pa4ZTvTQBzJJXjB4M9Cw5YqPtwXFfUXt7Mf9cKQ1vz1wviCKGvy",
  "key9": "3zPPdetT1icCTinVioJycTaKitXZ2pUcHqDjxN8Xn1rQPWApsxRbpSECFZBcWAUY2v8pPwfUGSsBRYfNFBfm4E5k",
  "key10": "2sRQqVYtHeVBjP9DinVeMkk4fvTQrKS7jGVXAvqBqF9bWqo9viEDf8EwN8XvkPnTrPSrKAGVGJWY9Dw5BXTjnHbW",
  "key11": "XY5eWJ6PC5GSqJ7qgK7KDpwMZQmx4LWqssiA1mDD35JqaYmbCf51ifDLA8kfXuPoo9fjjnPLZkLZethGMqYJGpV",
  "key12": "4wTtZKsuhpWJyycdiA45WqWBneMVVRAwAsGte7sh5busnXmr95PGJUXT9m28p5ipHnnqRTzdcLUqrjJMoCqFT8E1",
  "key13": "Qr1u4mftarXad58RwUbo7DsQ8QL3B2q4bCzvtEUTXj7PjVmiM9H49PfZ4nagaP5iuGJMAZaM62GjvR172JDXNdM",
  "key14": "2ovySQpKpuuC4toJf2q37DVvxsPBap8x7YuvJYTvAbsDbeidfwLuLw7vCSheefQ1fxsdVtq2dp54tRWfC1uBySyL",
  "key15": "2z5vVkkEzRz5pSLzDqvjk6RbZsvg5Fjre5ufgtiZ7KoeQX2bU2UuLmnZDJQ1NpZMA82D4z2Su9afWrbMvV5vH3JY",
  "key16": "27BRZuTFGVuaptEGueCiSCYUzWzJK8TUYfV3LMrrp4sSAu2PFBhmeEuxDypFNTht4rnZhpaimLcKaTj2Senw8yTD",
  "key17": "5E7EVpYQchZGbPCD3g82gXmaE86LQXZSiQVd89f3ZgXuDXNeFNUemYKygjhUgWf2fKpBcjfASFf68CB9cK7nkEjd",
  "key18": "8yDf1ahUCR5pDa4ensHc6VdGaNtJJjCnY2LYH9sUqYhqBiTbnnSiZ2bLJ18h4pWFBLNSrdZvEey6rtizcF6nNV1",
  "key19": "2ehh8ns923xHhCvxMK6VSmo1sNbsSekNZxD6PCX1rGeHBCDiWkeWDXYqftgi2t8pMJzVDF9n2BKUs4E6v73NJsnx",
  "key20": "3qiXiJj1YHUBvLnpurSXMmpD1NqzYRQu2syy9qC5MDh3SmidFKUri3Kxno8WiefpxWvQduKY2VCMcDpDGn7eRnEc",
  "key21": "3Kq6h95niQuovZgvFUqAE7uLe7Z9r1NMYXyzfGUExMVi5L1BVQbaYiwRhhqy7UKWqA1vV7XGmSJuAeNEsnUhLfQ9",
  "key22": "2RwKn7JkwhKh47oD6z3w9zFMAXN3JUm9tJvrsU2xf6yp4E2yAommHuL9dZWzjsd7CiXzF7tqwdDJvSWVUKkSKUbz",
  "key23": "5QzBE2wZnMox1wRYtW4PPeJAaabT8tgGbci3V9B5gTw5DpQPzofxcmamBAHz9vBK71q6MLQ22HWXgQYo54opFKAB",
  "key24": "289EMfn8xvD99cvTUfobCaykfPrg6mar3UAfVGgGDXJAeEYYcYAnt96FDH5uTW9arnQPCLbHM9Y2jHbXMZfzSYuE",
  "key25": "2QVv7PjwYWPv9R9BwSL2vhk6r1AVaTt7twWmDxVY8t5Bzhx9ca9ZgwnWWLKzaV3acg3QsNKbMxkLVR48BAiSow5M",
  "key26": "qnZksiqLh1Y9JugYEkgjPrbYobEwgrDgp3XbUryoxqEmBrzEUB6UwUmjpBd738gKDExchZFgA2NsgTVNPGkMnny",
  "key27": "2boGrhDMDW1BUZzBxQnWcptGou92rEhFYN5rPwpFhhnr9RhH2LAoeEivNYJdzbrHEJQLcyBj1mXq87q4CVAvXYVY",
  "key28": "55ZULjDzAKUskqpuTuE75cTEuhMeadAaibX1W2X8W6CPAVpCY8b7hnaBiYfhUaYKcohZEUZJBdZUUo3i7GuRuqGf",
  "key29": "5thgdQCv2pdJL7TNL1jdj7QkdbNt2H6cf4AEKFsWYHcMALNkGAsvZmHKcQEegBNL7TftpSR5V86FfhPwsSGwWW2x",
  "key30": "3oDgYWeMwxoM5iucTRC4hAE9XJk4Y4BJc8XB2ABeK2878d7aMBW3veXkZ9RF6oi6VYcLx73EWq9eE1KtVCWPurjJ",
  "key31": "3B4uVBQRcga41bnLr8jN8V5oMedSYUUros5DbLCZEjJdaCT7YFKPL6uTmDYbV6VX51mvfad4YZjDwhDZY9k5GKVH",
  "key32": "5tbmGsXGLntbKqfY3zeBTkbELmJ61aC3s9cHV7Ndon8XthAThr5xpPeBcUEJDivEW2ZRV3KRJRt2rMnHPHzgRUu3",
  "key33": "2WDEDc527AntbhcezDf8XCv56NV9w9rztLvw9nSCWN1F3sz2zimyYa4GafvEdG7Hx6sVNACaBZ14mv5T3MhJESdq",
  "key34": "3FNuzy4fAthxz8X3wGgfKzUfUCVEnf5jNypuETMEvpDYQcrLshnxbgvQBAQApB9FbHq7r4y93Br4gZKW7ymS2L6i",
  "key35": "3uTenndRLfn3kbibu5v5ZtCwtWrZDjhkCG3DHPmE7f9ZZMhtDWaD8fA9PBcqoCNMrmWw8oCBbgzx5XgfcnPPUiB4",
  "key36": "2B4ceYiDsv5rYJMpm6ze38uAzQSw3R7diay4FinPkU8fFarWgFtrXWDKfYdWA1tBmsGzDp9zUXtFt3Q2Njghj6aP",
  "key37": "2hvtpoejdWCijWhrB9w2ugac9GJVZtkHKtsuMqmJhhGWGHJuuQ7DbqnD5gcoAyH5JanQ9VP1GEVprsMzJtCUhHTb",
  "key38": "MZvuxaCjeZL16qwtyYHvxipvRm9fVF63T47cz4PFmkXh9UbJiVRpjxGYnX6hvM7hvR7urpMzQTSiJs3D2nLjLcm",
  "key39": "3S4iQexWJVJwYz2fA6vPt4j8k3Frpa1rbvu33iMH4iKMXGRU94PrsY8aichyDtW3SR2jpjeZc9EDHF6t96NxjvNd",
  "key40": "3qfMdaWqYWd4pskeDaMEoso2sktSnoY8LFj5RSKSFEbNZv2VSSojMqcWC3mjzCx36onRHxjYHdLYK1zhVRYeWMnV",
  "key41": "4emkuUbbgkwPh6LPUqyofCbqDsBYHadJGR5T63XYc9Ej39cQHoi2djYaz6QU2b5W2sT2VUn5u6iPUemSJ82Wb1a4",
  "key42": "4VKGNghUZ3X8JhLhNQXsECDsDLmPZmusaYKHtMDMqWWSN4jJLd1nvFEw3sVpmJurkUBv2UjidkcWL9f99aDZ1XAR",
  "key43": "5ti6Ed9DU7V58gUrdMuDEKutATRChqtv2GoKR9e4yJxWKb7pJttrwLWmxWiCreDMxWqDyNBpaWt23ir6pqqtx8hW",
  "key44": "o1VVRtpcwWxJbZ4o9pDz4nqQb9nQ1N9w19G88QZsZzfZRxzvJpcHNbLC78AWSaMADmH1AyvosjZPYCUmpKszEya",
  "key45": "4FdAs2Cxa87WBAtRkhT3Jtbwnhap2coHgkpxneapUcK2L41eRTBNgqikeAgssHW6Krk8ejfMmqc9hAMC9uNsDXZy",
  "key46": "8pmfE3BFaXAA7PU5iYvdy4f5raPEuvRoR5cC8FC6yvFFhFh1iH5Yf7axArtp2EFYk9xXPWJFhTjnzcBQe5ni5SJ",
  "key47": "2sGJLx3bZkgvRwEmhjQi2zzxMUi6q7yuWXVmkPZqLELRjHMeWg6EQ4DBY8fmpi1Sb9ZzUGLGZabKJjPdLhYJ5me8"
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
