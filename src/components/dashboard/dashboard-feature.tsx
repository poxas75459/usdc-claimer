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
    "3Z2ZoMPsRFppjRVgFi7hpvDqZB6Gf2Eg5CE7TF7Gadq4kr7XwFHKxKwi5FfQPENr7JCwLy5NGQQmdxguyKEfxNZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PwepVvC8zJsAhF9z1TwjBDaqF8rRZERiPpt3zbzP6gVBBe8wzUmkHEPunwb9AjEtLxhTXguDZgof9ys6AJXizzb",
  "key1": "BcpCGrgxjvC7GJapojN4fMhmnHfXKQETXn8aHHN7zZ4YRHaorKPg72fUxUtb9awhFzsS8oXoz4vaXtwh6Cmasrh",
  "key2": "4nUcy4jTTRG4AfHTyZYogaB3D5BvTXkhTd31u7HST7FAtpWXa6CmnJ7JHsUxXaXXNF4hmxaQLbPLAEzxL48BE662",
  "key3": "4aV8Rwe2DHq27QnzJN5JuFGFqZypVi9fddrFBWBoPzCMmD6ry5Xjd24TBEoy5eNMREXbf36jyRnHxUJVvyW4wQia",
  "key4": "wCXQJm4iyS1tPzwV3Ae9YCqEtckdrVES5jwKV4hDoiDqis6vDswBQH6YkjcXzqYpr8yszB5bF2fjA44Vi2R2hEL",
  "key5": "4vXnCorhgGsfZagYFsdwPKr4dxhazrA3w1JobLnP17RXVedAA9agtkgLYzCZzLpH5Dg4Jhisi37eeGwEYexV5AwN",
  "key6": "2nESbKCY17otUm7b4MEejQANQ8wK9VWoJynY1UYSynBpqvJ924Wvg7hZLssQLmgQTeEMNbv6HNPtePRBu2pzqjNo",
  "key7": "2oQUoBFTR1FT8rCULEGUnUCFFS6cA37ttbBfwnADFKmb4PGpdenmnmyK18mVWZY5kepSv4JEAwxRVvEPG9MgQ5x4",
  "key8": "38T2itHdEW2ZKcngYQd6RbnF1CHsU1WqkSqvxsPFStv9i8s12UqgELy9rARwUWoGx4c5x7iSd8s723f6BCaqBnsm",
  "key9": "9XoQKhGyPt7AywyQgNtFM2Dju9bppEiAR6c5XYpkYDwjX1BcHfxqG9eySxKQ9nuQeFeMNu1RtYRHt8Xe4TWBfcU",
  "key10": "2614Yp3zQ6QWAQDt1BN2pWTXNhTsw2YxLEPf1EWH9NMZM8bPiQT1dmAQt2g7aieiHnk8Db9mDPhYooL3MfGtQKfG",
  "key11": "5SvorK54mXZitxRr1kBXSjSw6HTjWKmA2f8oNn4wCwDdwFcNG6x1CJWrq45N4kAcrX8UoeY6rxiqnGmoT7BufAsx",
  "key12": "4jBy5ZJpzxV41kbD1A7Uuw8Bay9SSRxoSMh5xoTMwLizXA2YtCJmKwyXxpfDTmRtdKih3XSozCaNwhD8MCEC95dj",
  "key13": "4cuLKtd1EfY6NhHXDNmpjN8gvkqdWgmWDT3TPPFTznFLyB4jjatv4eMTDFRfLsVMWpBfAxzYqRqZd2kLMpnUJN1L",
  "key14": "51QAJEL5VqxSKtKSXNLHw7RsknyYJGBpgVkkLQ31aoPG5JfqugcABtFPT2BAMPzfEqN1eETJfjrVnY5dPJfpcA6j",
  "key15": "4NejFQ2RdqVPnD7W2ntFhWgdTyvqu1MDeeicj2vRDiq1KQnePCWQnTnB5x7wBWtHbf32Hw96dPyda5HxDqDhYLA2",
  "key16": "3s3dJpraN9L1pB77E1zTnUAPqoTqkE4MtM195wTr5bxrj7a6KytFDndGcvKsdizHqMSKunBzgofVYgxvtJJYTfRS",
  "key17": "WQAFvrNU4zGkvQ9mamVUTSFwie5soq5RtCuxnNWNz9Bu5PbWZ1VBqZVA2AyDFrMa7Cq4nkjpnofwxWtZyn5yEKN",
  "key18": "38itvQvjiZwnc8vVJmD2LGBp6kbgenPo1Bt58PUEr8EBhbriVmyUxJBShqtMQDrdwuS367FwfaJG243E3yikTpe4",
  "key19": "4EgiYBobj4HMAFoPP8mzq3mKRFxJwgQ1XumYc4KVsSEzEigBs4zgVNSPdm3F8vTR4XkfGtkmbbk33AiEACN2jmpN",
  "key20": "5Ca3GGnrjWn2HB5c8rpR9c4MsTKqRdLaYEbrHFiZquTmaojdqRxKr8dbmMwf4JPv9diRh6GecKs28adLN92dw3bx",
  "key21": "3GA2siaPqSWcG3vTvm1gaaFRsK8Mm6WQSugbmn45otjRuSfusZLhaLfnm7FJZRp1FvWpbjKC49YC94nCpEYhdkHR",
  "key22": "5z8eAutGHkDbJn1AjLbHqk3ZtbgbogERLP6dhfSxBAEQMhBf3NLNoCixKjLH19RnTJrZw3kR2hByU7ghYewEeupx",
  "key23": "N8YMo6kXqw7ueCai2Gi6oLiqLL23veFGEpuBF9jpoWUCisydgDtJGe94zPHnvYdVcDznpq3g8DioBfH86CAMadZ",
  "key24": "bvbtvApyyufLvBJZsBkGXiPwSBY2hSkrvKA7eggKFGd2FeBfehfz3WcMnUaVvTAM5r4cZKhxNVhu4ZvquXLPivp",
  "key25": "3XB7JH74xYHPk5HRjRVKmxFwZkvMQWixmoqoAg1gyNp5PwhvnUrG56W19VL1oL8qJwpNyD8My2sceX2tztHUa2Ki",
  "key26": "5MBhMhzHkiRtiZizRVeHSBDoDhjTaM5fvs1EuvR17KE7mvhDpdXM4Q1QHbpCYcmLukPr8bMtkyN65WcGHDw7RiC4",
  "key27": "3EK1sGixv249sC4m68Ro8ypAYCHC2xcYjuPuHKEwSdwftc7zhi4XKz1yFSeDrgrZRibBPCWnaJ86zps8rak9Uztr",
  "key28": "3LWps3XQWYRmnPoigQEpNMWnD39T5aCDyjKq8rVbVuX7zicP1WZzPiwqG3yb4FbJxmBd77irAVFHZw31DQAozeaj",
  "key29": "4okUBN5QMHngWU9hp9BbCXqXwXDVPCbTERCbsetvFVnRRjWRVKNQpVNZ4XSBdRaEEATTQYTVHMvdy7WYsMGxpzxc",
  "key30": "5toj5PCcdM5ceb6GgZhtBNfuEhJir9ueGVhZXK4txeU8smgWQj6kmC6rLtzeL3GfmJu6VH7chrkUivyoYmJ6A6PH",
  "key31": "2CsiNavtHZvATxSXcqK4afPqSVRWgBXoek9it9R8Y7u6ptsSrv5aQausQ7DYott4H45bZbZTMQ9EcEcvJY3h4GqR",
  "key32": "3mvTXJW11xhuF4czCajuqEFCr27P4x3dxx6wZ4uazrRPmzWtEfWYnJY5gQZm38cYHoeWdyB9i5eKfufvuuCJ9XKq",
  "key33": "65jmDZPeHkwPv7NPREoC7j1pFZNwiicyPXuvXj3vY8dnAPsSjpBU8oDbxhwgmBaVCUuwWYfz3pFtY5ZK9jQGZ2v8",
  "key34": "4peCyaKgu3q64dFtKB74eodhkLPq1VJZq5zXiCDrmNAw1YNoA9EJvVrGpHXgnNUNfvUR6e26N4eQPwVkLjMoq9YY",
  "key35": "3nKju1Uo4HFWUjZLb1H53avETfEHNuigh5EWMtFbuFPnkXHrvGomLK5PbUr63YQdita4LsfNtahwxJijEJfZXNB8",
  "key36": "32y7cERP28MrcHdDW5d4z7UDfESgVPV94pwnMxHt5S8Nr93yBSZb2NuCXdNSJxTYT9PUGY3AAw2RHRvg5avMARv5",
  "key37": "2PHWUQ4bVkAvDqi3Y8ZeR8RgzkXyjgPUUTWnBktuLpbQuURwPoEfvZTADdPNN2W5R2vFuomquYYAXNF9LyFEZk1K",
  "key38": "4hbnXLZRrC6zT7BNb4k9kkhj1FosPhmYmUCrUJ6iN6ieHTRWLhp2tjBhcLAtLtrbjZ1M7BxSRaJ89g7WWUiwKbD9"
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
