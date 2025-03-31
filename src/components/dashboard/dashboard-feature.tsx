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
    "4dGtMQvDicjYQyXvYeNV4FiErq8hRqEkAEajm6WghrC5n9tctDewpLSYSoWGdcrti61tiLnNJD7g6pzWrfbShJAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WwdmX3JCrieUVdQRgFqd7aMKePxs47D9TzrDEGy33TfBvy87kBYdwqdrA4xRRBd3un4ikWSX7vP3m8hVbGYmVzu",
  "key1": "rDYqcffyL295zTfEXUJKfufQKth6FK1QmUGHB14v9dxopi9Zm5YCpAJGRykgEJV6dAUk3fdNtqPojnUJEE8b8vh",
  "key2": "koGZu6g1oE9g4bpjj9kE3KrFZ4hPDAAnH7F2zp9iDugpxdmsuQHKCmAWcQbV7FZj1LxSRacuB8MQGcoZr3WNx49",
  "key3": "fcj3VmvtTRmhYwy3MvtS95Gjy36FxcCNtRp8buihXJn3fgv3ULwe7eRJEMZMCoeXxFunRBSGFejtmGuVffmEFNR",
  "key4": "5JU3Y6uCyKHTYtDajB5v7YNCUJsBJXB2cuWsnAvJnpMqPrfgaBM9i7R6g8PTsrWmjLFvU5pgeHvweAta4wFEfRSp",
  "key5": "K1Jjf2U1mcMFRV5si82j8b19ELozPVkST7L9hVerJZFayjUogs9uNJex4hNWKYjqv7p7botpduPZWt17AEDK5mE",
  "key6": "3W8LMjYKjvwmNY5umNgRSy5XbgMPpStdSe3c6GaLqN22ffJnMFtefR3tCC7c9hmVdFpfZ4EcZARbDYWHuZw1WP2W",
  "key7": "3QRLSmnZd3d7TFWddoDWmRc49gtnyE2VcjLzF5maFciGYkpgVwDCAG6n9gEnaFAiX5MPTWTAbxzKvJ4tW4Ctkf8G",
  "key8": "5aQJHjx7XXGzovxM4fYywpztnPmWKt2zpLmUravwL1vmUP7thGEiGy5pi34A2J5iJgqDTTKPNNvobstfw78peMFd",
  "key9": "4BWjku4LRXvGsszTgjDftnaJ45LRGRqtTRFiea74vcWRb4HNXr47vezbf7snWN9dZ9d6eKvtY129eGmV8ny3yaPP",
  "key10": "66U8vidGkXtD7xRSmYXdJezbvw7vBqKFhVmfYMwxzHYnjrtpu2vYwm8rpJ2rjmC9Q9EEDTjd9ojq7mCiTuuvAfBR",
  "key11": "2cguFHU77xvXgkdEGkAWQpKjrm6VvPD81veyBB7ff87uBtaVHLbP47YHFoTzSLK9qv4NVZH5H867RXKmKLLsKkVP",
  "key12": "39ZvB2fNcJMemiLZZViLQvWsqmQcRjowCfvQBMqs2jTstdGyNJgEHkA87q6fHq7cnFxiyv4YzydQoDDbKv3U4AoA",
  "key13": "3H3o6EDiFkGHscVRoU7DgjqNt38ChM3AefA1t2AxskiQTWUGH1akGn7pYN7uoXuA6nwV9wbGDxvRAF67vMhGr4J8",
  "key14": "3xJjVwMf1hYusFRgJi7uxJuPCDoF6ShpGHpnCwadnPtX5LYjSZGtypLrKF1DwwyJLzSH9UN3KvQcXPoTekPKMaou",
  "key15": "56Y1tCo11fZzehd9gJPa54GNhk7kpn3mfcG2njui1e89BChTEwsf1gt9BGZ6ncdRVzdRqh8og2jw4wuVnp6jQbYS",
  "key16": "4jDB1dAPAYLYanm5anpx1HMJQfJogNEFqZjZdCtsrCfHknsyGFzRGgz4NwXJ7qDEMzE1tQGGbDErTcsQHaiyun36",
  "key17": "3gCb8wEqviMjr3CF1cM3NLp7sYrR3s87MV4DBrYcYMKvT5MCG1EE8WfTAS2o43NEinvyf3TS6Nf2hpaWh5xtUUdX",
  "key18": "22ez66v31rj48qDA1swhZZAtPsnM85mTx7nMzPDqTMLn9ZSkfbqgZfS4xiUan8WTfPV16JD4ecLjKu7GfSWFDDFQ",
  "key19": "58Mj7Ua4ddyySNg8crE72ZCKJgXbJoQtf5mK3g7nM4fVeqcudz1auFcRrT5ZcbDpR126vqmwPDQznVCKpQESfXyZ",
  "key20": "fN97VKdD54rawCTYR32xkU498gvDv9ARcFeSjus3TuPTgDVK9q3vW4HoFJ4pT6iZPW9a59DQqd6Snf4Z3ob8USb",
  "key21": "3mLBVNwRRAJQPXDiRPmAYV73AA9kCua2ccitbim728Zhado6V2dMN9gA3vZ1To46obvuuT3LExJkFiknfmAUiwiK",
  "key22": "52a4dmYWYPZMit3NFZtFxazFZGiKnrMvahBn2qgNXKD3shhtRmDDHch6Sr3JfmngAbZF2GRso4gzqAgdHfjHWRBm",
  "key23": "9F97tMWRBQG2ifXQFwU8Ui8nijw23i4LK8EuxmTcSvxYUMXg74VmdsEAE387GH9nU9jf8SzV6j4boPZyZjZHASC",
  "key24": "4hdSSkUkVFH3nSWp5cBYwHWXseKFDdmonMKAQM5LR7RMNPxn2FTzzQzM4XUkFhkF2s2cib6scqQMtCjsugL3ZihY",
  "key25": "sgsHE4EnpXbXaVGXd3mKJdnTj64UArraEJADEVXQMFP17uYyLrim8vykskAWBrUB56cyGHFrMnwNHg6T17mAtSh",
  "key26": "46kMBPnqmycfPweW5RX4vTgPicu7AfGgUVwcKVC7jeL2YcWtYWCFrqyrJDwU2T5ffXQfz2htAySyghofhYiJgonE",
  "key27": "aS7p9pYExXBWtfownetPd5cTDVHtRhF9fgTC1ndcwbcKYN1HB5pkfjM5XMoW2NPiqEcbQwgpdtdpYhUSzwLZEqM",
  "key28": "HesXwwepz7fBVJUjhqhNyGqGkQ1p9WRwRGDSGeVXX1RhLjdZEM12Ji45jt28TFgnv8Jt8Va71t14E4zXw73FFaG",
  "key29": "ryfqaNB6EL6YEbGwYL6YwapjA7tnGfytKL5WYqDwsgezZepWCCVi4gemtD9hwwLg1YFL4jMKFkidCwy4XDdxhCe",
  "key30": "3RqPayfs7WbyDz5N2KCtp3bCsWv5wG9AuM8mq4DmZv2ZGGj9CHYM33nh88GZHRV1NDjHbynUb3z4D42y61jmLEWv",
  "key31": "5C3nQY2ziNE7ioGsM5ppvcYaHY48v3JFeJn2PEpwHndRQrpNeRkLR7V6WUzf8rkEpQSbbQY2ZErUFSMrXw37nmvj",
  "key32": "LazYNfGZhEejpnadpmkGnBkpcrY3o2f3udtDqVhErSbMGYZ9SURxyrWACFofXQoVWTtWPMFdmjuJXPEBMUbSnyd",
  "key33": "3Q2EWpAdEvmmHSLnmDUG4DmDHdAxukK6ZknH5Xguyxw5UEyWTisYqa1LdeSqj8kkC9gBJPMGZagyA5rjj59ASLeE",
  "key34": "3egntQUzBpPQ1PsASX5pXKQmxwg11TdfVFZptNhNFWwoMF9NXRvYWz5zjqbCdYgox5qVPhTaPGBCD4Jqjio1wgec",
  "key35": "2VVggtphLwGS5wCPTHtgX15KBmS9r6kTLbbykyhtihwPpw3e1VCFB4t2f1ka5kRodqg5XyF4bJDdyRuPeQJpfcpV",
  "key36": "4QV2oKLpnNMDEYvBBeQ54g3mCNeeYUFbv5sf3tmmGdH5XLcYEuSZpE9xajb47PwZbbuRFWz61tRyFU9LnG3VZHBv",
  "key37": "5yj2Z9mPkpUA78peQ9d8Un9iARryddyYPGQAae5JsVEkk21cHnqAySic9zeaFN2RKbnPKKqzq3U8fg33zAZHeKzx",
  "key38": "66AFD3J4gC6YWXyYxeKkyCfnV5wbGUWKUnNckZUurijJsfPpyxHo244jg4Jo9Bdvjv5kRYHEStQd9xDawfRVEd9c",
  "key39": "64vJ9ehKg7tXHQbg1QTiChajnDfxQqn2PXsDhhXT5ZEgdKJv3SruEUkCopadR3NtCf5hwGKe3dsfSeYCEtWSQdt7",
  "key40": "MPptqiwgExZ8MXhiHDGBw4ya9Z7ESSimAs16fsbu6FskXaSDK3m4Vqd13fe3M61FDTCxKVXW1tGiNc5VaaUuHP2",
  "key41": "r1tTVFPdvjAUkdUHG3zAjygsM5zx92EhqgFGQHNJektdxG7m9SntYrNAfRU93vH7UknRq19wbq2xmqnMeQ9fYnT",
  "key42": "JGFu8phgLSDgCbLGy1maSN4BH2KYg6cAJPADW8Kq7AEV5exPGWL245SA65SVtJNPsUmySZZw5x5WAUCTe1DiidB",
  "key43": "woZbdDbAfBznykr7Yw1ZYQzdpaQJ6LEhC2nBqTTZ4q52f3Yxh7dQ37xGrrp45hVaRqin8DHfZikVJiFqUbMHUqG",
  "key44": "3NugQVGX1nuxSHJm9bXyp2d9Y3PrWMsP1gcUuoavqmxdoExfdijGPuf944Sn1wYwRu8nKC45UkzzvULkjnzznhkz",
  "key45": "5kyNUinjQbq64EQHrYkFW3za164bsSQ3hwAszYmH57XDmkaY8LRFTeqUb8e74jXdM7vmejYfv5R77HB5suYm2kmk",
  "key46": "5FsQhvAqckbgoddu66Ch6GgxNFcA179PSJ8vMfhEijaeCth4XBCnFdABKSSq37JaoqLrhFLyg6RaH7cJCXKTLPoc",
  "key47": "3BoadoRS7o3WeFy8nLrgPt7C1iZNigL4kynfhusL1Zc6VWynUJBUmEm1tcp6etpqrBXjzx6JPv8LFM2shjbfFejV",
  "key48": "o11AhfTejum7V3YgSbGzFDUQFk7YDFX5nEvfShKkh7N4K3mi1obNyZLFbDgi9zff66Z42SqeJcZnjnUkkyPJoLg"
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
