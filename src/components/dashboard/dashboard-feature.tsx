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
    "53adXGWF1Gt7TbYGcqBYDb73UUgHroa2pBpdFr4WJgMrMBUPKJyXfam6sEaEju9CjRWjigbKGBEYuty15QKNH84E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UErrfTyUtcSbCLeDD7qPmGAJU3vhQ9wiAdByRBEybuySyS2BkzLQZeuzHA9u3WCxPBFri7qufjpo7zwSKZAb3nb",
  "key1": "4eokAR1SAiAanCtx5Un5gVhAfyuVcrdYqgzzyea6taUPC8Jodh2ivvJFtAk251JKtFJssHE9DBxv7JVfZG11zFSz",
  "key2": "3ZsHdJ1s34k5nWFRYv5ZS3kgWbD2hvDW9tCuFbDj3w2joinu57p2BwYQmqEHftkH39epLT255LLWJRQWqrVz71vN",
  "key3": "T2XFSXHLt15xmPqTKptFS57a9Fky1KFqC6dt3Z3GTGFwU1j33gWJYxz1qZe6BebNNzMHxvEfykaVaPY3DJ8Xp8w",
  "key4": "4b1HAadANYZP2PQq4DLK7N23ji4mCygq4jPtgjSNdyKQHCD6xkbWuTUrsmydGCYE2nD2U66x3hPi952h9doTYpU7",
  "key5": "4GTTvd6C16D2bYUrbge2WetZ1THZWACuWJUXRZtFk1heHeBAERfPDqqL4GGVoenmpDHkv5FcFE4xk1vCgaprP8gM",
  "key6": "YiN7duaVKHFXFLUodzsJQKmGtxpsgLrfuPkvYoVYzgZ8FpF1KoufLHNhuaUS6qrDiHKo1JXLz75Sxd2hvJERyuN",
  "key7": "2U7pQ4tPqfQQwifJRWKWS7RT5XAraU4xJgGN5QjanWFCb5bZaM51K1bGTwMvj6UHuNcTJtmzVvoAodRp8ePfpDuw",
  "key8": "3FGg7iYUUxkrGrXfyQ6iM4piDXZjS87RceasWUqrdgWNhnGHq8XLyNGfTDYDPALC7aetrF2ymFGrrThWGuUDDmX",
  "key9": "gi4tARdLCRTDvq2VEuRejd7FHEzA6GMRh8MqnJBrJ2efUYCQc8TPbB6sAPuEaPHNQe2jwZyqddsycboophwh8sF",
  "key10": "47CPze7kjKPAiwDhi6zGEnUYuGPa8YhPa2rmSG1gYhEXNRjd5Q3HEm8ZmkvGR1zKf3XEsZhuWzQshH5HtZ1gs7kS",
  "key11": "5rqokKjyx7NFK7Se9aQ4j7gQTw3dgChThsJ7aVoiRryZBkJLwDVfAa2kCgUiHzsoJueEZaZqcUPzbvNZCXfwvUkD",
  "key12": "4N6EtSi967UkXt4xm5fELhijTrkFSCPEguYTFYG1PRDPmXxDMfwfG7k4yy5HbpuwRa9dLCPA3Xv4iD43BpWntygA",
  "key13": "XA4LvVvt8bE4ituBt56L5yH4d1qxAbkXFei1Cub3ZfKXguh3b6AGpBYxshvPGzUfyHHEDFxDvU5WoL42Ly9DkrJ",
  "key14": "3PJQ8yiVar2VnWnoPwzMw1LgYtuZUCcGUc5eBLrd2uoEPhNgPapsFQemkPict22tBraLST9WmrCa6kAAjT55Vpbs",
  "key15": "3pp2yq5iZ5XVevScURQvjZWLUB6nCSe1LAjCvoRtEEiZtw7wHBVAg3LjHb3NUqBV4EtuJQ92cWn7VvNsRuzXieuk",
  "key16": "2Jo51j9aAmyfN3NWwWYxUjg4qCiSQHZf7mpYRPRKSdi9n8MrAYqw5CkPR1iwaDkczSxJaLQAjj6777NVayjvocnA",
  "key17": "59p5FYxQq12NGb7Q2LoxipZdB3N2MBfEdVFSqUeb6F2TyTwpXBeAu5gZgbuEUTVdZuEs4p1YnRPmCi1waobfjSHU",
  "key18": "2iYQYKVuspaBBCkhvuxPB4pjHTKC3NYTkxqjCSBo6KhUNtdpDLx4QtyA6RXV5Y5SbzPoryTptHf6jSKKBVCpgHaD",
  "key19": "4YgiZqhPZuxBSzDbk3L8F12HZ55V2KGwnybjX7FGVXw2wcE2GPWwAM5WCT5ogscFi84g35RvEZpuiAYvqBZUTFJZ",
  "key20": "3BGGS5s7uykY7cnZzEf3tK7GSmiCsKu3qQv5k1njSPFhKqYCDYSVE5MatB5QhQmuZugiWXRtJBPDCWtPT1kCWN5R",
  "key21": "3kc93BDpZbrPZsxeZCCuZKxSC6T9pzbkjZh6Vhp7qfQMud79mrrzn4ADPvREij2KgFsRvjzHff8Mx6RB2u9kVhNv",
  "key22": "49YrTtT3gsSQiec8rcn3jDQdUQP4qFBNog8KJw1nPqyguX6NdnELnZP2Fy8TfodGvCActSwwMidrtxacWmat9mMk",
  "key23": "4gRfS8TeRU29o8beTAU7PdChyJjSPZHtyq3VAxHXR8cLS4ZyypABoVZhqosw1rsUbNtVxSjcxT2BNioP4MJdKNX9",
  "key24": "3UygdVd9d5MyYYXhBBEs8eDvpWaikJKG1hUm8MQZgKE6mP5ND6bE3GK7bkukNt47Uu8TS1YyryFN2oYF3thcfaPM",
  "key25": "33vJK7PGRYR18XAaHtkHRuqBAZP6xbQz5ES2tDxkRmwr2UNpNLrPxdQeL4NhKqDdbYT8ooebuuXSkRPENpPEkdpM",
  "key26": "3dZpb16mHJipizbyaPwo97s7bPZzGneXnit5fptY9HceYop75tk99efiXUkAtdtQsKfbkSnZXHsERXBQU5XrqF1A",
  "key27": "9n8JYS33MFj19812BN7d9UMgHDhAmcZ8CivpFPguW7Zm2UXNW25cBuvk9wK8VzLWyTYdxTrks2G4HNSndJe91pN",
  "key28": "5HAQraDgEjzasU23XboziTeD6CvD3vqCyfdqpSbb8DeqdUKo7jJi7zS7LLMEnX1sgJ4CpSTAdtJtBQRqGGEHgh55",
  "key29": "3i8sxYbLVsM5eZSYvxmE1jYNvFYQ3KbeLkQ9Zd6dyC9GGj3um5KBetZma3cz4D3c9UJuJeHiD4QbP4JUf14SRTmR",
  "key30": "5HYtmdzNvK6gMjToCYDoxcJRzzDufEEmuGmGFqcdqsYM3xYxSmwzDbyqUyTAjhBfRWLr5bDcsX2B1vpVCGmG5wDF",
  "key31": "2Xss79UcAjyKLri7tZokA1tnqPym4oPi8mE3rkvAqKyvCb4CXXLvXFZ8Epb6LHTGAJVmwfKYebh1ur1opA3BTkkp",
  "key32": "45PTFMCTDQbA7CBmbGkt5UoTngQgdKkusC9fL5UQaBJ9vaL5i2EQZUkYzqrr2Ny9QqpHvjMUfWq8MSnVzav4rqDk",
  "key33": "GCaduEznX7yUB2RWuTJMGmnpCz2DBf4recDgwAHsUbime4znvpCGJJSAUTuFnNtJd1BkfkX6xsnBcCWyKH7yCXc",
  "key34": "2fQD41jaqsRBRkU9MAfKtz8Xh5JqUeo1UCV9gaYZbh7CBJNkELfeNBPGCzBGANjQL6sXiSTmHcc97pRo8KV2129f",
  "key35": "2wytkgEqMHfA26d7BrnXyk3r9r7u7nHvgP8r1kQC1z9HR9co5mVWeXsNzB6RYcDoqCQxtw6jLsDVaz55755w5w57",
  "key36": "x9h2QaFvZ69DEs2kqcA2bKP9XgZMG3LSP3kaLoc38YJLGHFq9WtYXx6A7pWxtzMWu1svL8xnVpNxtLTRzUrctBq",
  "key37": "2cMjyezZe22wj8XyjAgazFJZjWdThabgVqP6n28GVib36aoZmh6eSoVUqsAJUXPVUWmsWqds33AUpgeabYEScgkH",
  "key38": "9YwKk7HGcqh3nJFG1PpShgwPUQMz6hgYbgJV3976mWsYhNG9vQ66AuXk21dTF7vU4rKTWnkxG8RMNJonCR7vtaU",
  "key39": "3GZ6U2xUYJssy5PnHectsKLvW37ycr4a1Z8QJhNYYqwNAAbv2khPhNFLmiXCCG4qxW3iNvKM7Fh2m3EQuHhFC8KB",
  "key40": "6UR5gaDEqi5GHdC2EZqdw4aNk44rn798JSqo9q456JSE9yoPUxPW8cMXqyKvkz9TLXYA1TLv3bCk5uYK78JNjzP",
  "key41": "38kRpkiLivKKXaCSPxwFLS3bkm9LSWHnzD8mtjE4CvSLBwxuebNfBqcuB7NJASbJsZsCjTavuok1ARXrW4swfgVj",
  "key42": "3X5MpYTBUrkJ82dqrsJtbex7KAzX54cJFUUdEya6tBvceVGeb5YkZ5WeBwXhdvGyFruHnWRrqDJjBVn62aiMjnaa",
  "key43": "27bvZBoS445Qmq3Pdz99ppqAF1o5STnYZGd7xiyCvUoYyx7nSfqwdHn41XwL5NC3zbAi3tRMcxKm1EHzmz6kqkvg",
  "key44": "55wEW8YYydNfy6fUkL6mLKr5pMJqCkLhwPuQJrrkC3XvD51fic5JFHmieu7WLQbjCVfmb8F8s7sEUTKTgZdCYktP",
  "key45": "cz4i2Q96Etv4T1BjiP9XSWCgA7ePCKaqLCrzkLWCXEfosAnwnjCUbro4ffd8bcvVuCw5n5iASV7z3qViaoenB8U",
  "key46": "3uqHSvLAp7aTrA5MM2ip3rX6Czh8CNRjVs9i42Bcf8oze2Z6ZzEJnWcEq9LBKH7GUKjDMTNPbxvXnUwdnVxA7tN3",
  "key47": "57kqmzxm7wLnAfcv2firKoU6idaBz2ozuvLu6vXczJca4YS9EzUHBgYjjdg64dZK8FKeBXZzWaAdqMuUTysUbdwo"
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
