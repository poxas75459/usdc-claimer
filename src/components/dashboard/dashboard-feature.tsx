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
    "3yHyPMDk8bMRXNpvFuhsE3ewuJd9w95RsgZbVajU3GdVggWS6wkYeSiwsLHkgGqZb5MR3kqSQERxWBe3j6qjeABo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "97ChqhBhPkwHer7Aq2hMJWbwznoEWS1qbprViHi22hfJzzWeYnuBU6cwvJD4cUBZcm1yTav2TQCxA5HynH7qefh",
  "key1": "4Pttjo89Fh1WEkcMYAci2PvPe8WyQsUrb3r4N594fpipJuiJG1e7fqexed9yzmMSAa8vpwYLhc5AqxLov8Hh5nk3",
  "key2": "2EipLnRP7dsKHYZaHyyMTSbRTvv7VUweTra3KCLgiR5CgLq6v1wn4hnmNJWh3yNocp36jaMufM279HL4aPHM4Nq",
  "key3": "3gFGj7p4YwUanaG2tmZXJ7qWpqptWRNLY4FApfSkfAawdL9UtyxTsjCyW2ZxKDkHzCSJv5QnrTn7JzjD5pMb7RUM",
  "key4": "bPVwDsmeGcUJoqGj4UYJ54CdEvebJV3Yn9A7frYdqQ4oXJCPf4cp3ysCb8wyZtSY56yRDnG4FouM3ZKZcqy29wn",
  "key5": "2aN6Mf6twFwY293WiJi2z46yk1yag8wboKpTbwFMyNF1QXVyTmVcuveQHKZ8xpk5MMtNuDQ3Y5YRXUr8RUp9TPmQ",
  "key6": "ZhRwoVqGdQ7XBNfVhP8p1LubvTuYfD17MipYizFv8tBCFh3gLskdVj4mwrdukVuXugFnGdzgJgvJL4vqBaCiAYa",
  "key7": "3WkE436ehxxRi9bKoyHcH1vTEPRcYX1uKA66JxnLz1hKuKFmZ2pSRMfbxckfANUUbaP3cv9BzxRgrwEpuqtzmcsm",
  "key8": "zW1wyQuUZbLjJ1QTQ7r1eNYUjiaT9aEwxxpMfX8qZt9E5ZKQxhifKwQLoXBFs3mqkCUEpHGR3A9No4mehEFXQfx",
  "key9": "5F1jRTfrRpoQYo22rUVpkDny269MafrTS2iaRhJYqLp3soCH6DgST3irRaQBRJRPniKdTsWnc5vt6uA94srJocxU",
  "key10": "48fFN1NKW9spDRPRTgG81xyVniopWWM7jQVs9v8wPqNWn2PyEB9necRop5qaRmBHXH6WgCD15Q9QGuqSwRx71qex",
  "key11": "ZkQVTAfkGHpjZwKNtUyD1dVrNK9Vt1Dkwy6pCnc8RVNAfZUfgoTsouLWiAXkAxG1yXXJS2cwvBDw6ekK8mC3FnV",
  "key12": "5HVanunPEDo2NL4nrdzFZxKrpSfqYguWtESNqEYmsw7obqabkdcQ8GDxDt8oBda9P7Y8kAF4nX9h2bJKDZab1hmB",
  "key13": "269YQw2M4VoazUA6jNLMKRYGc4WzU3ZhTAuFtbrUdnKcqHuvQ8xZM9fR2QoedsrGKRaEVXsfK1jLuer7BACSSVDv",
  "key14": "45mohHf6FZwTrW7QpfBQKWs2VCY5Hme2qZXc1HXYVFjmmRpKDRsWJiDtg9Xc18c9ExGeE4yZW9XjBLNGXbh4fog2",
  "key15": "33KSohQzTHtm5WuukCnzU5H7gfoKVWYjJf6Z9wvzWtqaYmNWiDKWEtpib9eWFBkHvYYTwUYBuKKqMagm4aZhNv3M",
  "key16": "2pPGEaQvTbsjHhK1FaSdxmSMWHNhzbeTMkzXkN9Cr979DZm9qPKtCacP4BduhbmaP4bp4e96TdLV7C533EBXofzb",
  "key17": "3USgaiBJFHSj98z98Nr5jQKntZkdK3yJn17iSx6JHn9RFmkQJGYpPe2BqmMK2mr2BKBnrP4dvKgA2WG5P4FUe1DR",
  "key18": "347nDpGMUm28GPWwyrVft2jgmFNfbY6Vi1KJTGAkZB8ppRcq1dgxE9vr5P7PnQChPA5znXGcMSaqRHEFcJuwG4Fr",
  "key19": "4Z2JfnqfwwoLvvM8vZnWF2Es7wnuDquAAJzjaeSXWTiwWMjiTA5PYrN9NZLsLPxqeq4We2Mj9zZRKFsoAgpgF7aK",
  "key20": "2KLxKGB1evGfW17qbLiGZxV3ophr3EdnnyazxUsnWSE23KqTFdTfoY1oZNXAStEukBD6yZz7B2baBRz4Z6TCSZhT",
  "key21": "2spWFj8beZroLPeNGY19JVRTiWr1cKqdDEMaYteWN7wLLmoPeagqJkS7ZW6K7TZdfRRWTMPUZrpBhdNX1JYZ9r4B",
  "key22": "2pyBMuMDtTWvrg6ynKWSGupNKpwbb2P218UgvPNsmCbwSLwkNhGLGMKc6bgW2QieSNsQvtdVBZ6iXVPh5DrEcMCW",
  "key23": "4utz511xbPDK3vRojWTgy2SbA72uWdyikfYYQHCKzSUwFCTdJSMy2XLA66pWhRAqHcxnoUVnFunpJ6hCaPfwHyJB",
  "key24": "3UN5SDqyX1fUojMKouadrSb5KYvYeMKAC2yPe5HejtFtVprq4QsyrqXGw5vfkxBvg29iNPe52xzEaFDvPhJiyw9E",
  "key25": "5ybWeM9KgUmyNGFdbKL6QuzJ6pZwBLwGdKSNYiwrjZ9BLKm9PK9iTQcCJVuBZo7LCxBWprg8ZNnkp4Rs1GF6snq5",
  "key26": "4CpdztjuicjGz3syvMqxJPfHPTFaV1k53zhak3iAYUkMyJp1KUrtAQwDL9EYXequ5nF6k74zQ67iZ6tX2zxpdx91",
  "key27": "4j3ySR4uajysQMbA3PX93D3y6jkZMVyesaHtTh47BuMYoWqUdB6EkhnajsP2odMnBE6fTpGv4gJpk1XJfCUuZ2ww",
  "key28": "4LESnztzKakBDidRPVQoZ8VTGBh5nMwkK86BGfAjfGyLS1NdtKnCnMWogVWQVPjT24HQ5Bnfo2xJ6ATSwsKF2Rp9",
  "key29": "5hPdVK6dXVRBmDuSPk8WDUfDsVshQrYTEj4nMhw3Lf74izWnz3JPjB7Afc1C2qewwXwhA4W6XLzYjStV75Ppkm6r",
  "key30": "1RcYwowZK2prcVSMLBtzXJNg7VvnCrfB6nfmeM5JGkQnBhhX5YhWcxemDmShSNgtQq7KrTWaxE6R2yyin4SieVx",
  "key31": "3TNj2YfB8UnA2BSkrV9fuSTN9tu1YcpXpg3Pk4Tq1p6mXZPVdY3RgJvFhxgHBcK19dQ7uVj4fZnvhgarnHJNU5jj"
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
