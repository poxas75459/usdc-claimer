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
    "4kqvtSGkNYPVjhuugPwwUisSKeaKqdM2DW6SHnckx8TdsN2M5urmhNehRZtTUSrR7i2rW81spw8mGXAuFJ4Akxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wpbzwUaheUPvJT9pofZzb7xCpzukiwc5bqCfSYEF6V3YmFA9BhStj1WyzCnPhVvm716RsNVY8nJcPX98Azs77Ep",
  "key1": "598RZVjELnuYvgfR51KjpxTSWpNawwzyWFCTsNdzZGExozecWNKyCMRXzqZbj5QNZ9W2i9Cd4hJBgJmnH2cmyTdS",
  "key2": "2t4R9Crnp9LjzFdGz5QKdFiDC2wDPmZTwxZQ8ufQkpu2LmH7bS39LRW28krRNh1X9pa7ok8NNkJwZwqiFG9xRAjs",
  "key3": "4mrQkh7CcvEcCjoD7MdNxEEi8C4TbC5TA6K8gN7SJoEqG51D1Yd8SKdX3M9pribS7hZbSL3Dk5nBgWLpya9D9HF2",
  "key4": "5cA6r87KNYYwn6febAUAAc4V5j4f3NaeNtfnFXuZcW4xAH6VpEdNv7cKvRrUkpvgFJcyfDkhFRbEwBTF8HSiafmp",
  "key5": "2PqHbhwLid3HmfP4bDLzRBy8k45t6DqmFYCnmjHRDwwGPGQ4RojAmpQ7SsFEFcvurA1ZzRy6cZERo1bQuGAzZ3uk",
  "key6": "3Tp4wBHtrHvLbvAeFPqYiibP9R3cipPQVCcvh6g5bhqKcKRfXqVYPmkH4G14m36rRyv6V87oT3gDTMf7QkLr6FHN",
  "key7": "hR7HomLc5RXCsh8HAke5FTMdFZYQ71NZKFMjgJM7qfBAWmErWn55ssFiHtVA9X63LVPv784eLEvwejmN3rb1CJM",
  "key8": "5aiaG5b27cn3wos2tgfNZRyvCu6wfMzi7SeRqbHZxeEBe4221e13DnZTPk41wToibcNRotEQB1J3XF7YKwpxuiQ3",
  "key9": "3vpbMESA1BXjKp2bZ17pFmAgQryKCws87YxgtAEtDUuU3E378C61cqMGXhEcCLRu1BnstpbzQmEGcYq2v5PS9eFe",
  "key10": "4JYfsNHPygnuueVrLUEcNVMnRDTh7GMsyA2hRxHVfqEsE4LEtE9p49Au5ebymkcbjcoEWKESTXWUMuccqJgsxB6i",
  "key11": "49ckX8ErT7fLnYxwsM28AoBKEevkbVPD3j5Zho12aNCcSZswp4Cmims2RgPUHKdfXYHTH1Qux6WPp8f43gDLw21X",
  "key12": "JzzDMhoh53fLQV6u1r9vu3odzqr4HR2G4z8NWaRXNmUQSxgFgwkEtQ9oqtrTtD92TW6N6AzeQJqVExm94519jvs",
  "key13": "qG1CATtv2iFtqoWVJec7WZuNdaDnwSBx7y4aoBfTuKmriH8xB5ZUnhFGfQcxFszcvDbrQXhqiumQiHBugCXPYrJ",
  "key14": "5UQ7ofeLr99MHcbP2bcY5wWwMZy588Jfq3Cd9MVoBQS69U5kVeca4CHkKmFNuEN6QSEeur3RyJbEEsMUyAc4czTj",
  "key15": "4DubT2f1cR8cjWXTNWke9K6BdD1gAiW4WqBkPFampwZaVxYxjgFeCrquw9qAkAHtvmZBA671HpcVyXcUryZmoQKB",
  "key16": "rwR9tKPgyCWEmr6pxXDsXZrUK7ZRK22AaqqM7gwS55JsQwcFUy4oNFuE6idaVmw7rujPhRb8gg76sbm2nDStusr",
  "key17": "5xbgVrRYxAhfxBBnk6EqDBRbj52nty76eTjnJPStZH3htULKnvf83knsMU8tyjJcAuWLwHT2mdKM2Rk1WxHvVR9W",
  "key18": "2gubBzghymqSHGmiRd2KDixSB6DNC1zfcTxoERtkkFmZ2V8j4ecYj7HnDC453QMKWLg5kncJ9pb3yPxE4zNW76Ee",
  "key19": "2KbWyKegKsQxth3GHdjgqePTDVjknXXeizwzQWxpvHbvY7cTRYCKPDQvtu4ZnndLTaRbm8FfaLkWF8XYuWPhWow5",
  "key20": "4si3C44oYoTAnLTaegoGy98jM7w2TJfCc8NTV7Gmi2pkEMmUSZDLug2WUdfLe1TBnWH7rRG9Rn3gxsa7G6RkPiEg",
  "key21": "5XxHXGbhZx6RzBrxw646EgAsBkkBJfhtByxpbt139W8Qdo8SYWD31DLzeS3AosVPRCQPz9MbbdtEumxmMz2s8R86",
  "key22": "5s83XVHLmkMpLrHu4ueaH8xn9qTJ6jZkniZt3s3gGdheCDqGJpbD5JDJau55Ttvj2KK735NmenTp3rai8dpwR5Fb",
  "key23": "4hEdWkeuTudfdaiPwMD4mG82qqm8enSLcHihpXsAGNyh4Ui7dyUuRY3scJdqQY7BG3r21FqXUzT4dXYaiWRUny5C",
  "key24": "TLGAKeu2m7LcPXZbK5H3zpLx6SWaHVtnmBjDkQurEZ5TxRL8xtLXf6zW84Xp61CCTm6zJvwb3ifTkCJxqMPXFZg",
  "key25": "3i9TM5qzAWs55XXZcZHsjPBW4N7Z3Wo5VHsYBAirnKVrK99dA1RRRvHUirdvpeTNbyh4S38STH2ReRg34AtF3v9p",
  "key26": "4SnTVaECLzEckbe4rbqhBn9ht81osAtzTSH79cWRVdgmy29xzkx9mUA22mQBpiKkeXQufYp5bEtdEGPe6Lee8T2g",
  "key27": "ap2dkNrrY9xb37XrYTUPW3n3ZWodTGKNroApPthq6hdtHuPQf5Vw4iMuGARswJsGppV9uF2huBBwfmf5g6o62iv",
  "key28": "hKDniUJ3VCDudKbWYdGJmktEKi3VVahaFv9fqFoSmXkaL3dh3e9d1NF6YQLN6ZXq8jCYE8kjtEvdtZZYyKfNKLx",
  "key29": "2F2YL67YRbaGZftER2WDGd3wBS7taGty3Armhbj94cqcvQs8BnENy9EQ3Fq5E4Y7Z4URo6GcGATTQ1f82XL1zBQH",
  "key30": "5JMVgTYA3g5u8sNAgk47q9VKBoymWmYN1tJ7WadHzxJHBAcuZG3DENseuaLPdWKDP4fjyLMPMcmHtMAWkKE2wFrZ",
  "key31": "3VWf1ubZNMwbnVZw1yA5nY2U52if9VvpkFj16HE35CpUNQhSENMN9ZnvA4aPLp4MFDEvEaepVNHLSmM82xrcGdyS",
  "key32": "4QJi5U8bKHU5ETFoodph4Yq68Hk62HLXPYipwyC78RdX3rwNZb1DNwNHexkqNWuQbjGpwVxXd794QmmgereCEBVv",
  "key33": "5qLooo1jsFBAzWHsmfgCZo3JPGjfWhR3G2PLMAFwh1KC3d12kGXiKho78v7C9UHvkyvyqbdoBeWsTQzu5cYZczTs",
  "key34": "3sRomnE78BMmAjcY2m4eHjNLQH9Usz3ksHMYbXQ7wRgfarGRXVozyukic8URvjqEzx89E8QXKVWjSaUYeRpnWfa8",
  "key35": "4cNUQKcGWtwfoM3G6RhLAs9biH8vA7nEHD8M3pFWMXzCD8AFgDsrWVssXNXjSWSr2wH9Zb2G7udh2F5pjVntDM7e",
  "key36": "52PwALg5L7XgxJzKHNSxgpv9xswoKzb6jyUVpfVzBeKKYZLxAEBJcaDMf3wyJk1ceppvJ3U5mYkKtADRBGrdYwWi",
  "key37": "8wjvQqN1EWi2AvSdJGodxYNSybAkPq9PBgqRL1eNFmAvPk6UwxYp28fUzf2Q6A6Z7fahcEE4oFgU6u38YW6oXhT"
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
