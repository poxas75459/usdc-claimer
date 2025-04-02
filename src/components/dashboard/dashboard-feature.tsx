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
    "2RcWyQMu7Pcd7aqnZwvUmxv5fNhzpDsFmwh7US3T6MBdjviRRAtrfsRZUvwnuETAYvi4vZjm7NPZnLXbEqeFC2KL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQSEbc837CJkf8VvYvQ7wwtHdN3AXLogjZCPVctux4WNZsHFLLX5hwRobAiBkeiju8dgwgmECX3LdWnTXLWmVxr",
  "key1": "5QLbm95U9uhN1k3HCCZqgm21VLRfyoD5PZaNJ7Z7RNxaUbVvTP48djnYUr9SJwwqihs1DCoBi2mQzQiKNwbhEFcS",
  "key2": "23MB2vpr2c646Bh1ZhabgjKXJ6Dgyneu4Azhr6yRMK7fXWYuBQPSTdmVQLdR99yG6LTq6tKW4fT7WkFHtjHzdmo5",
  "key3": "3hNVEt5GXaPGSyFcPbSh9CErsrBLjz5MoxosEJKuwsafpN5YVvqrvKGNkZ6DcATQnVB7RSM8o3C9bxSLiN5yRWH2",
  "key4": "4AUVMK4kwojjDKm14D81LZtXSvCrogp9oD2qeaFqMHA5KzrVkR5KzyWz8Fk6ztPJAxhmUDkcz7rca7eAK4prfvd",
  "key5": "5s8pUyxMEwBgLFwqYKy9QVCvZ3tMxKLerpFsyjhuZ2FJbwcyrVirWVrykBEVM2EAfzxz15FyUauwyG6Zzsy8to8S",
  "key6": "3Lje7JakekmLReHydRT3jEe9BngCcJvvtyPSe7n7SgufQ3Lai5xxae2Qacgggp7qyLA3zAUTCkrxbKAoey66zczG",
  "key7": "sjUcmBZoEF74ZpGiom2o9nLJknXP4TUuVGagBmAosSdrMzkBLR8W1rYx2a1t6WxuK66yvvvXJWoBXcyYD5357hd",
  "key8": "2JRKXp9pWka3QWkTHiiJqWyAY5qWFkPbWqH7jnQx6p2zkJMb4xtQo4UFbr2RNe6V93uCSd2jXV1bRjtHgdvZGMLS",
  "key9": "5R764DG2SndaAak63bpP21STqgZjZpmxERiPPHkANtBrsgkMESnhNFHmz6k32nLznnPxtwHdnK2KmBYzsCEK4LQf",
  "key10": "2BGfpZ5iT1NgUPawp46638NbcbFd595hXamBg3119V6VZV7m5NB6Mahu5nbjNi5ep7WoS58hJAohoFDykVLbHALz",
  "key11": "5viSssYYnxxYkzqjVu7bpuBgBuZAmLd7JJDdfQdx5MFL9fr54dDott3d5sPVD72RuTiPSrpTU8EV37MXmqZEEJGg",
  "key12": "4HJg1CuaqL9ivK9tVRjJAZTpLYnNxBNjB2BAKZWxUZUc59pBQ9BiCvo9ZoAG3XQHtXs7YimftUw1DrCaZEsfT81J",
  "key13": "2oQhSEjQ7r7vSvf7qoHxowtjJcHiR8MbHY9gWDNfpSG3DTxKyoVX8TCkxEEePEi7DFXpVCCTzdDMmjseJ6xQm1aU",
  "key14": "JqD7AKLPPPCNceu3721Zv6AnVeJb34jr9xqUaiay4p5UkNkQEVNAj2qaiQKNRwUN7SMcoCkaw1emsTuwaNoMRPr",
  "key15": "223rQqM7wDcCEBP5sXtEcxARESZtCpxJkFYU8hp1dGen1y87FoSMATXJDAuZ7zh84b9o4d2nRCVrRf3t1rSACXsA",
  "key16": "2TKbqUbni8Fy1nAququ1ziRjDvtGiXpAXZp9pLd8v2bMyfLdnvAo4Rx3V1K3GXf2gfWwPit49z7dnihhHBNcVg7T",
  "key17": "4EPC588TX1Dhi9qkoitVkeZFYYu7pWDj79icCWmAwCm7oxj686avAvtp6EdLapMN5NdAiWX1MCVetGv55XSgyJ7j",
  "key18": "VPhqLjkzVkRUUGqGrKexJYCd43kLPkEmmBq1MiMFWdvRZLZMiEavcXNUU1Ek4wDj5YCTrwAykifXRgy8ecFSKwQ",
  "key19": "5oRRqSmR1HUNK3rVTbD44AxsyvCTEhBUWVfaxihqGgTzFkZ2CFZDtRRoxyPVHLfBwJu5B3hfMg6vU2UqMupj9fvK",
  "key20": "4eoVpXPfa1gfo9ep59CHZV8oyhsVYRCHy5hiNL5HBZf9xB9pVS31VUipupzrAC6YfqF2xpANWQKRRAyRUJ4NSvH",
  "key21": "5YTYct9VDepUkjoNKFnk6utLqBDcKKHysp8qct3581yvZ9wnsutg58AgBmDzYC5BEphqAfd5H24ZJdRaNo7Mkg2f",
  "key22": "4yfPHpSYbMAQYCQxXADojSfbduEGrsT55i2jFfGezT9fq3h2Z38cHnGmgsh5ARZPCmF46mQJN4bRosS5Sq9LZaoj",
  "key23": "5WeyUbvYynEidQE1eAmgRL8j7HPD5q9pRxjfN7kPLqBbqU4hHtJqpsyQBL2DvmZNcUf1YxEkpNcRoSMJGz55UB8U",
  "key24": "34mHFz4QLoKX1DjQ5XRC7Jx3at2M5RNjDcZ6bBmr49Cp1EvChSqrTqm9EEuutmumdQG21uJPf6niUrpdhpuNdJQp",
  "key25": "2vx9gtNLjguqdYZHjC3XNKEJpE2TXGfpmmgwiSZRXKSCJR9Z92dg13vazL5yrVxfR12Xjn3z6NnzFjLRPAWGw6Ff",
  "key26": "4xFgssmnnWGMGpkMqsWnW8jiUXZD6ezdTATgjgEmLSu4zAQ5QxkHENF2zZwBcU1hzHLudNiwGZePohTATyVxh8zP",
  "key27": "2fJGTf3PX4vam2SmkCWkjtgfyJYgbVEhiDFVP6Vq85jKRMAUbxk8oZE6kH721x25araXRkvK1ryWZYKFJ1trEBwg",
  "key28": "5Arnrk7XJzj2aFJpMHK6hgHnHfDsMqWFdydjkaG6pwH3W1RavZNdX4tD8uk76Wv44tXDKsp67q1edF7riUsSCkr",
  "key29": "2UzfnwtyKQzv1F9ywkUagsJH8EizUzf6YXwWH6BPdhwF3Zsu8V6bjkjspCyNCF7hDDgAnQ7XfeTxyPUeVZeUMzXJ",
  "key30": "4U62HvC61buEoswk626CHpzaBpniEQqaveMx7AEDVkFybCTntJiSW4skrZF9AmkFKBnkNoq3JHLrLB97EN4ynTW1",
  "key31": "3KqKMuQ22QWt7si1UdWXaus4dXdzdFvYZpxtWXawdoD8Q1SpyL4R2BLFKwMJkWU3NYpUNCjbXKEzKJqAhAPDXKxg",
  "key32": "6Nzymucsc4KTmDskgoMSTYmdsV2RJEPxnUqHEKLJ9GuDG75E4FyhHWf1vjAZo8NjoUSJx2HzQBuHHDxhTUdQamU",
  "key33": "4vynwe3TWgpV47iNwQtBRo52Yrg8vPyRrFkeoybAAkGCDaEtVs13FZvaqUueFXJZ8VoV15acAoKjfZBQehTnyVcz",
  "key34": "5gHqyzxkUKfsJEBXAJ5i5tiFYoooXmt7cnKjirY923DGWcAaYgH57FYSwrHpBCHetC1iShC5cAvwQpUQvWzhaq7D",
  "key35": "4Kdme6nmZNQePSMYHozb2REyJKYx8UbbRGGKEHaGeH5AsQ4PxsHxFyexBYkCTMALU6APVr1BHBwgyGyKkdjqZU1D",
  "key36": "5Jk7v7hruRBueMZRsxZnuQHYse4pxCW1qKAbVdnS2oB5Nhz8p9bdyjigRFgsBQMdTAeMqYDPFiBk7rWJgHCK8xeq",
  "key37": "5btQf75i3kB7DjHj2T1UmM6JhJvHsr8hCqtVcMdMSKYunnfU1cXii24c72HRUqGBoNWwzDeFaSrjLUqB8XpvAruc",
  "key38": "fuxN5KXCY9rY6x6k1HnnLxUr4fM2DB2ZPXBELQPBHAygGjT4GGnyEiywKWDRQmKgUrMftZMgi5ekk3t8N4dwEdm",
  "key39": "5vmCQzbuRnTf2NxVtgTX3VKEEbkqkbWokLTxQqEnw6oAKUHPQW2m14TUpDQ3KFDThqM5FuVECWJBihnF9MVCjR5q",
  "key40": "4ZBr5APLM3HtekxUzB58rNQdVWQKW26zqwmQkvSB5FeH4xyeT9UY85t51pA2KQPbSutHJiac5DFrMMYE6nK52NaB",
  "key41": "2vMCJjHcAAVqTFNz578XLLCUyiFUFse8nvcxZcN8y1zYrcunPoBU96qgCjdQqH1SYJtRZUtqmSJKC633mFEnXry6",
  "key42": "NDGrLqwfHinLAUbXKpVNruRpFLx1uYtQxGnmQwNY1Ak22A5FZwZYxkJJJzpRoqGkDPcG3apZuL5ATtDgiBcfMne",
  "key43": "3JqbcqWBf1CBSzDdqbsCngmFHs8DtKTWHXKiShE8xV7Y9QNyuHqCbKWGD1DDn6cA72ghcRD93pwcQCBMBxotm4gR",
  "key44": "5r5jVnR5dEDHueErP4T2XcyhS7KF66CGJi9ptSKXsSyZzrsstrVk7bRNUhaRXrwZiR8u7jRr7jyCjzQWz2Ldu8Cf",
  "key45": "5ctSb1kBBwfBd2id1EWL9C9CusMkmFvCRAAofBS6UD7uigRZtwzpCxDT1wLnDtmraBxDJqS4VPw6a5bbv4oCA7gz"
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
