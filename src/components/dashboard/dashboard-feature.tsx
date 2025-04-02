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
    "3uTcAmpd36i7YYzg5iSD2NvqH3vNQjhiHSJjM8hV6wbrzscgDrxbwi2hAcYx3hA9tpS2oF5NjapsakWkTpvbsAcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oZzv12csY6L8cBgprk3WaSxfvipVs8G86XNNTzNTcCYN9bsGXWDzFZv9VweQXKoD8d2iPZHv6gbc8WRvgLnE6Yj",
  "key1": "myKXibNZ8N9GzPubVRuo3qsQeHe3tcYL5VHZwFgx7JTbzoW7FgAJkvHx5WUkfcf31bJ3uvqygqXwKJkXUP3Ahau",
  "key2": "4pCEcPfFz3cxH7Gef1zgMjSBi3srQtd969jVis7AZWWkn5nxLoUmG2wSQUAfJ6sgJCkLqDzxT124xxpQFoeequaj",
  "key3": "jqj8bzVAnWD6ucdFQLm3N1T1HTSrkzoBTowy5BwRv1Bgt1Uropyc86x8WjPkhGD2jc3wbrQ6B6xWM4W2MbMp2SA",
  "key4": "4W8BnyGtFpa67zN4c5j5tF8Bwkx3XFH2jsvE3S3ksz5u2fUw7xtSrgzfmidzYyzguCVcibECmGYCmqwmCXAbkHBM",
  "key5": "25c3P2LcPU96VnQvfT1WE1s3A9PVFJ7p5eUrc6gzFFEiqFSUrie2XkKV39J1QJG8AmNstmCPkNtN9ioLhNhDn7Tq",
  "key6": "Y2kVzJLqhwuwbaFKKvxApKV3g4RSWVUTmp8CpHCTwCXhewNy9NCtVGSqeZhMHe8oKhguKxaj4xhuMWJAEv1cBVX",
  "key7": "48CGpziLs4YxRrjMjDuN2449XD984R42EeUMytqPwLMSB7kCHCoAr8bpJecW2Pv9qArbJ7uF9vkr6BSoocX3gpzp",
  "key8": "38HDQ8CFz8vyYrbCsawJAAeMauSe53Ct41gckPut7EdoVssNQ8jLN6RCrnASHdxCj7Uksr81m1CuWR6m32qiVr4y",
  "key9": "m5WheE9sJNhsB6WEQszWH83amjxBxXwGZHtXk97SFcWETtGfnAbghTZaTGja4akP8GSQtwkERzrqPW4Gri9aiJ4",
  "key10": "p6L7ZAj3iG5Tn8QKk8hvQHY3GCYA7WSKKuLfJtbAF1uXjW83MhXnxQvqCdoLAbDoR9NEQguZtCub9XnsoyZTt9v",
  "key11": "4644ZQC3mbxZZjn8gx8HSJQe5yopGqdxjpQ2BnoQeVm7xjrjuukPJagcNerexC9pgAPmt7tVQaos2Fnq1h7QY4H3",
  "key12": "XtC2w1rCs82FzzHV95d75i3xwdDrpQ92Gq1JLDrPmVJL6ec29q5SFo7ofa4o4N379BZthbr94fNryNH7fxrN63F",
  "key13": "2ic74mDKFfXVXVNEe8DMYGvbNhoW5j2qRVuCynGiDQNdDzYzjNWuFvoDS7dfuSHh9JXu7AH5RXWATP6t5DzY81Y4",
  "key14": "3jNDoLbTZAwTrHfw8zMph7GfocmeBRKWmADCQTVCjBfUzjR5xJjG9cs4XxDnbiYF59x2vPnV78925xfk3aQTn2tH",
  "key15": "3iLDwzJB3xt5LNYCn1SDRp1FmtXuJBzpQv5vVA1xrdSumGZukqHDLWpdF9XGivSyF99oW2DM4WvpQ5LACCp7wNKB",
  "key16": "dWN2tb4WYE3bqeohmjqbe5PnR6CuwUXDzbVj8NKw3yfoJCTeNciJ2tCKP5o8S6BZxAZ18PJdfyAcM4NR3eLksuN",
  "key17": "3XSVQojVjydAF71bMCWEaMJsiWcVVd8gqRGiR1uhzECTucmxPuyeX4ftR79rzvHnQPqrxW4HESpZz4TCLseJ32QW",
  "key18": "4yjB3XNR7ymWjJiAkFHKZmixtyFXyw8CKUt8vVjjy6T6KJtYhXUbWwzP5kicp96jUFaMmnGR1QaCbg1YuUJshWuY",
  "key19": "5aAEBPXsBxw5RB8pyoMPhvwg7iV1z9wVpodUqH51vHxvhQ8GhMnrNqx9Abq5LiLMaHuQLXP5PEFLYhMJeh4j85Ec",
  "key20": "5ozApcEshYQCXPmMur9x1cdTBvaGtQu51B4YKFZtCHrpLZdMqRDoANb2JS6gwHM1ukaKPZMNL7625Ls7R3PJfH2T",
  "key21": "wW5Q7jaraRj9heggev5vKP2jk4udW5gxoHWYkMx5DKkyPo7Jk2qJ9F6Ue1J1uBHhPkY6DH6WfoD4pEQo4gr7WXY",
  "key22": "5rRvJQbvnuYEhvWCFN2HAzXrHuodA5KnhLvSkBUn7uPGBw4Ym3VfivgCGFYGjSMXHfwxWYh75ay15s3yTVGqKJtp",
  "key23": "4fSfBsKoK5mmsfBdf5fchBS2q99NKLSsxBc77r1szFMHXi7tGgy53qYZJApkmNX6yxdHU8YVSvCemwtG3YUDu3z5",
  "key24": "2tAHohGCsjY1CzCqvmsWqCHaQuTN1BwL1Y7fRNXacQdfn9H7xdrs2FNgPtr91vFMajynycixTUQ27hTrtCrsybz3",
  "key25": "4VsT2KoPa352EyvPahgpvVH9LtSSkj9pbbdHtKNv4QjBbGg5evXLt2S6LcDj6ZhoXW3TitG9ydNyboqod7sqwtaH",
  "key26": "4AdMKCammNFWnpAvPseZQU17PVYF7x3rcbRZupaSUQ4XG2tSv5BFrG4w9Bs5RDLA9htvfpioKbnGN4wwMinKjkCs",
  "key27": "3K1GB5y5aWY7v838cQY1Gp8U6GhpjjsHabShVATDw6wD8FW9TbHYPv45wXwX3jJAgQjP1TsiRvpTKtcwnhjHcogC",
  "key28": "3ihxc8T6ynC85hN9x6BefjWr8GdMJyTFgdY8Qp4EixYMCh1QpT4FPdtdubhNQHBeWDcyCgQZGoui9cCzH6M8Jjm9",
  "key29": "9ruYPE9wWuAzvJYJ3hsZe1XP9GFkVEdm8F9rkHXHSxiMGgKSZPDrtBe4uQCVQc4NcCGiwqqVYkY2Rc9KC1cuL9t",
  "key30": "4LRNXzrKeJGTTJGaWZ3RiFkdLWHsg7fZsvEYceYUXUp6ENyoo15y5B4wD6uvnXsGoZkQBKZuhY3peLeo2P8VE7x5"
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
