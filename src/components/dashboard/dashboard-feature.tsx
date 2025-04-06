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
    "5g79MXKFWwqhYidkaNZmj6GYthGShTcXJ1gCfRyBQ9UeyG4MwgBe5Vj7j6E5xcEHRmqpCzKu1bwhJcqGa4J8aCbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a3Di8f7jUsLd8nRUfw8dXa7earykWsHnwvfjKakG8L6A7yTezJ1ZofkuPm7SeY49doT8ojJCXjrPCrTDiPoSUiR",
  "key1": "hEFRGC12PwK93tLWaUXYzqL18eBxNX4YCw6Vki1iAF4XMYx7i19p2XBwYR1Kx6gysWuhBPHtjy1BAPGeHGMp5J4",
  "key2": "5A7R1wVN9ZLYyqxY2GeTbYVkFPJKNQQApRSid3UbjrNAv27ad4sgSZQ1gMCDtbhwMuu4SXiZfj29QCSfNZq5udrk",
  "key3": "48WiwM2eMWYmqxQT25Dt3BRwiEhQFjGiKUeATXJ2cey7tuV1Ch3HaBz9RTzmUhZbReDH2FoNDokswzpeN3SvxaN6",
  "key4": "NxLK3pirrxD3EWDUeiaXoK1qLDw1wQB9j8PEX1zr64ty8juLyqn5ocBGVAAMs6uNJdroGiuB84ifNqcuMQfodsr",
  "key5": "38bsEkdb5ALBHvuFosW2PWC7nXgWYR1qMgjLMPLaee8jTKKFaCedXSz6kbvgTP7ckaasYoiC67ExhbuM7g2PB3KJ",
  "key6": "39McXuyULNamBPyQzpvsM7jt8hVcajFfFJtwLrWiJq4aiYRhkCVYMzPoMNpUPq2xD5d16Mz2TREHdmjXZHobexNa",
  "key7": "2DxikjNiW2cQmmTBZ7KhDV6TkcfPWt2pofAqRw4VEMJvtSR6FPUp51mLK3HgWLbUUXGmmmZw79aQNxnCGznfCCQg",
  "key8": "47zLNfamim4pzDMzAeSgNFubwuyTLEyX9DUXsuQbvjvJoUE3Nx8BpxFjzdg4m4RekZDKoRbMar29yMamTMQViedy",
  "key9": "uUTkzg2meZcJu5UPPpjx9Qddy4qjpyreiD8Zj6PRvanHcUsoDLDu1jUXsyYgxsvciET7yDtsvsHf5svnRiFfvj3",
  "key10": "ynzn4LjdcU3pyMtKdE47FnbCcWGLZjuYcS9r5pmUNNZmg6jRu1jHLVhHsRG4aJWUcD2xpEd8F33m6zb91r8jPL3",
  "key11": "kQ3xPpKz5aRjq7GKSci5TNAfZPcHtbeRL5CHYGy7kmSQ42We8cvR9qa7YftCjmEHhFJtqCCw5JYfpcBifvaPo2n",
  "key12": "4F8r7ATM7nndWpJGXsubRoKaV4BswSzX4xz23YGGzCySwmVfeP9ACDn2uc7fCr12RygPKTkCh3RBRUR3KrspS3TH",
  "key13": "HQDe3VJ9UKPqrFJTgbxYbeouWa8sPj9QdGWbQGJGyw4eHLoPVr1yJfNvjn9zmsZ9iSPmF2ovqyqmpSAQ2srkwDd",
  "key14": "LUGrbXoD1o7ioJjZL2auNPnGZGL6AugDkgfyC2iC8kmDmUXbZswfTrYdiaJJU6fZ5s7G9AUGb4KCDt41MApAiCH",
  "key15": "SyYtbN2JtQ7DvWUUuJewKHYJm1zLjJnCTqJv7DZokoxM9kVRZTgpvCkzCpme6sraVzNJxsiBQVri1b1SgJMD3YW",
  "key16": "2qeiKxQHciQeA1dKqJgJrS1k7z7E7fuB5scwsZmKDjEbfARdFo3bjtZTPJAfCB6EznJxqkrb1CsGCeK6AfxjYbzi",
  "key17": "HMFbFtx1KhRBqGUszLA7kCt7GmcuDgyAFikKZ8MgJnZnyioGgLF6AHNqr48FRxJUG4YVZjnLugeNqjvh7dmxG27",
  "key18": "2U1Me3gKXCbEPMiLwCUpAU5Vyf2maDkS8xWEeSrcmS4tPRNZwLEjbhHzcNpcW35JRxaS8DZMD6dXSD13nYDGGoD5",
  "key19": "4JkQREfLt1QnvDNEzTtoYJzRf5h6rhdk3FAtw2V6PZ39ZSYTEmefPJCV5SxaoYvxs16b9d3KjmbfQLaKczeKekmt",
  "key20": "2q1kZXtN6hJKnwNJzGsgtuDVsqwfbq3Gur1q2JYW3gwJSRHGC1r1aQ8gcJWADLmfFiuCCCujdjjDuiXqWcqdCWie",
  "key21": "j88ZDoLS4VFxFLoHH8GwjvqsPfk2HtuoSuTmmY4s2vHYZdWpMd5woNK2fg7ooyDBGv15KHhJ4jUbTnZAjSJRHpn",
  "key22": "3MPQDFunx6nwcXGH53xZj2ncs98EbLbEZnHCnfNbYK7uEtRTiEo1ZCMPGz826gCzZUWVMNRM4EzYEgV7Rw9tQ3Q6",
  "key23": "3VBhfuJKZZchzcSQgsnFMjbwzozxGgeP4aeHj2RjEasQLxSEyWMBgvcy9bKiP21Q8m2twbJjrAryBMvMUCz3VYFZ",
  "key24": "5pR9b6id9t4awWaG3XtKokXwJJMQhbcUSRbL6Jn5khbNfhYAzamsu2kmuQGjZxLD1voym4poQ5UZGQRkq1apHCHD",
  "key25": "5eP1EsNrcWHUDLoqkEN7Kf5q5djaUYKPhTnLjQXj7wHvoqNnakvdPguPprdyVeN84mR7DZS3ptSm7XoQyYXD9xq7",
  "key26": "5KuAH7YzVJJEXPFsGu8thpk6ciCfQau9vXFXs3rsNgRRb48dmc5WYTftDL6t49XtFChDSW4rNd1PS7YNFjdQauxW",
  "key27": "5a52uoUASg235CSwsdfNJx8ht3jbMwzdJBrgXZnd1VJfYLxZaguRbZRC5Ve3KU4JDsj8HiYhXj8zQDAJuztXuTCK",
  "key28": "2bffMjHPeTdJCszMtCmGgLw7nTJnyF8Gr8f6RVQpK7k91JEtfRtj2JrEuZJYvZJm6ZcMvo5KJX6nkoacEhaUYWqf",
  "key29": "3SrFmKFNSU3Hgnw1zxi785QSq9QiyMTcbs5LLuhqmek2BnSmeMRTHzy8SUP5JcBegKpfruKFJf86jKtRiT1gfsii",
  "key30": "hrBM7Q7nHgjTQcbJUv5xKaTXdz82Pi4yBcLNWRnN1knRYTFhg6zm6SEKZgBrFVmk8zKn3WuG1Ezj5XQPhnu462p",
  "key31": "4LnEEaysVcnqED6yisJqfP1dX5weLetBvgN2d1UiRjrbXsHjzj4Wd8gcu3nzfp99mHG5Dmm3nsD8mgLRj61XU1MR",
  "key32": "AcqypsbEU4VtvffwqKPy6MSEZsGvzmVaJmLy3tq3CyM7fT3JFWiWfACVMcDwdSmDR42ggzfJkYYLqy3x6pUoVB1",
  "key33": "61Dgu3d2DZk4xSPBvrv5PC4dQ8bLhkZV3FapGYzZxZoTmNu9JErSHyTmGmZ88KXsyvp72F956PAcBBSBrZR1demo",
  "key34": "5TvTDUcYYY7MCpuTGkjNUVXjBP4Mit2SsXEmEfzSX6s8cx2mJLTR9wojBmBc9SsWphKkwCNweXAVweRiPpj4rwyA",
  "key35": "5GQrrcikfKAkXaezNcKRU9B3dh98KWn4YbuC4qLaFiG3RXdbHtzMcmFfkBWMjPiVSSmxVYb6DHuDxV2DSr3yS71L",
  "key36": "2jfWjHmNHU7Db2zsP4Gk7E4mNFcQXxeCRFWW4BF27xSYAtyH2VW37jUrnRqGKSqfzoGzfU1qKeZbQDmmsmeDzZTr",
  "key37": "5zRZiDbCGerRVDfqBw6FZMAeGnvJdjJLHpJ2bC2i4Kw1cdYgFA1nKuTgFEStemk4UrWvJnisfjRufP9YA26pxKw3",
  "key38": "5JzpJL6YKCdZnMrd4Yj5LWvDVf7NtK1ZdTxkwgRkTygxPGhMUA15SgUA9SmJcHYGo1JF2yzNUaLWPHdPisK5KoAB",
  "key39": "dc4TZNjuSWVZ1VQQofx1N1s5YFPCgvLDe6QgQBxfzAWkqJNeeVP7oxcARzAyuJXo4UXjrZ4aAxjdc7BdA2YUwr5",
  "key40": "2orvTY1xZmsdHAr5iRvDeRi2fjYFkjUfdagc2iW1mbTN9g7guxberoEZKZaJ5L8eNLrpngfbN12Y6MHk7RGNUSGb",
  "key41": "5ydUzkZaxWCZy9bvTTiDXrrigAYbjRWMgJUHv6oM5ZTeNWZvb162ypQFcLD1d36Az2DZjVAb5FWDrQm52DG3L8d5",
  "key42": "5myZrpfPx39d9wSi4rfeQmhib7cXhvqddDx1Wt7KL5uGJxLJkRW6tgX9A1iKH3Ej3vo6ziDtEhesDcMseJwM6wf9",
  "key43": "61Rux5juiVncfJgjACmSqjQDXUYAFwbvjK5J4HeTW2xp5LhEjbe5ob5z6mvyWaDTVYqnnnzaX55jFpEHFDZ6L8bo",
  "key44": "rYRHFAUXHEyW619xW11z35UojEo6KBkhSwvxjAXiAvyTyhkvreqMzBq2kKncCZxMC9Cd58FQfcRjTGU2aETnt7k"
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
