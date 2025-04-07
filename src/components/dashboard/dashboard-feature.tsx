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
    "RzmVNw4B7sprGtvP5i7AgToTLCkY7tytEb3bnt1iwuRhdRmFx7uhsAQZt5eob8VriJ1jXyScErMLfac1cgh1WXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QPerSufddLrRvRhpjdkz9WbBN2rqVtXWYHzS5ebhBRsSFCVVB7TXjqSZMGYE8XYae2yBg3apGgLTAhKSuSSijQ",
  "key1": "2kq7TLpoSbbHLuzkbt7fkPGkJedFNHoWxkcAXgNWwiFFqTrE7rz1qcieAY82nt2thSR4zHMfzoomtmyx9aGjrMA2",
  "key2": "5yzy2FRditLHP9XYrUszcTZTYRWSTRQkGQszM7giC689mTV7riSpKmyatjDKh9Nx4hsTWsiCEUJy7xVR38DL2vRK",
  "key3": "2hv3fyMnfSP9auRC5i84uFALS551NcqZpJ6qwH9kzy5aQkWZFSXQQDyCUa483bTccCitLJnHWwEF8X3KmEYRhyvg",
  "key4": "h4gAdtshb2ov1irkuZ7sYRHqV5L5QEmf1esiez52WBhHMeFob1HViVzQwW3GbeNL4SmA6o11ngCcKYj9xGeE752",
  "key5": "4gbPhHxnbNwYXct9dfkUXgo8mdhj1gM4mL3VXqaK8rphpRjTfxZUcV9ffJ1y5L68yWzoy3ptq57tyAWyHMsu6K8k",
  "key6": "3z4Ahxid6FzuGZJ53wVWSbLGBYM4BS56zCsxcwYxvi9JFW5DtBSeExMr7cpxqqJgEdyN7emX3UnPPUYqytuVzRwd",
  "key7": "4TqToZiuiDbaSLNn28iNG4m3LY2m7jRELdYmNSRm6ZcX5AZpNq596jDcgsaRZaaZXLTuPheqCMouVWGAJisP2YTG",
  "key8": "2Yo2NdRuqyYut3qHCVuiBBEKkoJfYABN3A9iAkoQRniGPrsJQAWyNvuubXuruR5LwqUC5KZgyHYV4uLv9KPtp7Dq",
  "key9": "26mueRYDKMjrAYsDsoMhsXM7jy9M5e6M9SU3o6C3r1xMLs7CJ4HXo27aHiJnyspoAXjTAk4VrGTq9qHNrbajqMap",
  "key10": "47GvxWizZqb7LfsUwkynLptavQoexM3xLBk754y9FzQvgwVrcMjSAVS1PNKwD4oV85Pt9bTJZtACokUmXPwk3ChH",
  "key11": "4TD6XmLzZn2m6KfCrMYM2f53jyH2NJoH6s7aK62KQqwdxXd17S3piD5buN3fXHCe1zSa24vkjcPhSwiUAhWzT81f",
  "key12": "3fd2pCkNxVZp94wGZzrNmvdchtMveaJ72Sfyrvo7h3pUdx85LgB3af5r1xD96SaHFApVPoV441Hz1VbnwVMrg1f7",
  "key13": "3BNhv4WbuDtcbc1HKroqnePwUVK5ZahaDnyD9KeSkfzEB6UTNkTyiYgBqYeHc4f8PaiEAN1VsGU9oivdBFQss4X1",
  "key14": "V9K8Q4gum8Dua2TUB8AXGLqBSHEYa27iYmk4Gr6V9yK4JgfkPb14MmBjsCH1nYDBNxBmrLDwHoxGAy3YrwApf3G",
  "key15": "4K3mQ8ZPehbvXBh7zHzTx3i7PvVfm1Hdb2uus9QNyTgC7W38tMYywSCaTs3tGq2mN56WSGHtET2EqVDavitdpahu",
  "key16": "4jVtdmfHdMSSyTVeckbwJxt8T28HqYvRDgughvQZqo1D89DjQpsFZhoyaHE4vFrCxtCf6Ds18w9yhegYfwEGxQ3g",
  "key17": "2j6QCuTE4sB3ZzM8JzGdVz5Bx8rq8S4mxjt85LQbQjY7DBpMnCgEKYXxej1W9dVHKmTxkC6RPqEnCPTQxLfbfHjc",
  "key18": "3DUgZYNW7vUAtoKVXtjyXb9gyJAVY3Fzc1rSA12jSFzi3Cdww7D6yz2yqAheYr2y81p653cZXnXH5QFRz8WF2y2H",
  "key19": "47zdkkwLLQ2ePwJNFd6qnAC6VKHzrB3T7Pn1uMoksUh2UfvanToqAhfsL1QuY9ggspCzePK7uEctCVM5aXNBuT2Z",
  "key20": "m2fhkox5QnguCqV5Ry1kA4EcmfzG5hcBuumxUVMshML9eu69h3yiEcenYhqyDqjZgL9ctUP77Uz19FhULSon4Fc",
  "key21": "3Zwp2DPb5511tcQ4GMQ3HbttNhzW1DK5Eo5pzAFi8PX76wJueizimgKaSDWAKsjyD2njVfzMNAR9TC1bVYN3Umgc",
  "key22": "3jTSGBRq9UVDF7v27LUSpdSpYKPKpSnEcTf6Tz43GUKoGWkUwpShHEgH9XtbskKp5V1mHFhkGXwKE55fMwKhZSeN",
  "key23": "3nKbHvaVFnrbUTuUdyAMvRCN2NtGLEvyK7VJr4uKgkjQu8BA5NktUogSXp4pcGM3YNN6NA7WuuPTyeRRroUeA8i",
  "key24": "PYpGCxNsnA52bvH8w9F1BKoTHd7ujJ2gVwjDVVGRyQqhXLuEa5pY8GmHNHeC2wUFbLe6esw8zuKAfaEfXP8q8u2",
  "key25": "LYn1M5rPBMTNNCU47WBZLLKTxnwY5P63MsXhwMootb1n5tVNboFA8kET943esHrfWAqwD16CuvrX3RWVxFvURtW",
  "key26": "35CUTLpHPQ4pLQtUYmRiRwWr4swewRj3VpfgTcVHyXU53d7FcMWZgT5AXU9W4uDB8tp4JS8Dd7orCn1U72BeENgK",
  "key27": "nDRKfmZMedWsFehPEGu4Yeyh4nvU8M9RUcLFtZCrxFd6H6xo289KfkPMYCHWMKkWJPHeaftyw13uBSv6HSk8ZfY"
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
