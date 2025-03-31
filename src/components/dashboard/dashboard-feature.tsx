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
    "hjchEqMVK52LUHtym5EWvuxk3myyocy3rwMdLpFVp8t5qEPrXVz3qmreaVhDW5VwzZ1vGLG7ns2S3m557kjhfKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TYeKFSK3rUBJsyZYW1TAPbdqNzV5vLas5qyN1UN8btuSBYFRpzDFQvrHvnzUBiwzzorHkn7hGYauALsZ39cCT3T",
  "key1": "kgSWEPwQ2rtYLkuESQSVjYf9QNrmEqDDVn2JeYsmo3sCMU24xYbDHJkcta3YeZYtLqCZqus8eTF9caXJZk233wn",
  "key2": "5ogVEmJPfgcyXu2zFVgEAqyncFzWJ2Ue7RHXUo4ANS5K5KN1pP4YDRBeux7DMgaBGkUUZwqsW4kRyGBNH5RGJS3C",
  "key3": "5Met6U9aDwu9GekDC51HsHXMH3KcwejAxXzDsgJoCGtTyfH5r3M375PPHwdHoLBBiCJopCzYeHVtfdmVEUdGU9f9",
  "key4": "hKq1CTJEBAtt6dWguL1nxHdayNX8mp8qdm9m78RtE4j9ERhJLZcTcTYmuSFjbJct7iPTgqoTuJhEzd6Y1rT1ito",
  "key5": "YUcthKhv18NxJbqWpS8nWm4JnbBDfrhigXZn77P9HojP8Txyi6vK2aKvkupBWr6Mh7ARryvCjLAFScN4eoLma7T",
  "key6": "eNaHMGbLKmorofC6ZizeFHzVCup3y1p8Ju2ZYNK7cjc7u8mr8QYh7es34SA1mg7PXTcEcALNqH2YuuxNU69kikN",
  "key7": "45M83NyhZ3UYsEh1czSU7WixnUMCZeAjLYvKyLFeFDrT3MBmBFn2jkd2W8L3wyVSvv72C55XrWApTxdAGCPA7ch3",
  "key8": "3gqnrGyvGkA6A5piT4P9Rzv3U9KVkpgFgFjYstePSAzdPfMWVkc6vQLveGcTY8qj2BtAgDb4p22nWcgmmo278VX",
  "key9": "3MAwDM7fgzvw9dS7pZWmVWDqQQTTuqmpy9FaH7x76vs4LYEwssYVjJehvtZzfYuokq3dqa4JH1niQ4ZqodNmCows",
  "key10": "4i7YARKCdxUSxaVnnixioDxzQ3GoqRULeMRxwhYsg3PMw7aYVH3tKM2vF9r3u3HXDoLkUoDy8pAZPAK9rK5iF7fL",
  "key11": "4tpXZHEgsCMJdffsfwU2BBwD28kHWpJsMCfMpHbQrcCe5UkDXe8dEyCqPD7h9m2eyb2YMr1hS1rEiWJkLrbVHKKK",
  "key12": "4wJCDVLe6WpRawPwfuqgQiCtYxtbz3vx36rqgRorKTCLnAah3yX7iX8HyT3tXCPiEUGZT8nAfSS7BYTaVo3fLZFe",
  "key13": "58i3rjapmtsmxAxug6gETqZDrG4D6ZU3vrAwyfjht4z6UkYERav2d5SnzANi4XEp6YwzXPRqHvzCmXUjTmjt7Y4y",
  "key14": "54YGMKFBC1b37Z1z72E5fr4Dr8C4dbGTzWejrBfEyBxUfnsjwCT5Mmc66j1bGSVc2G8nHHRn1FzxqS23xBQk2qbe",
  "key15": "599ehHBonTZdUr9tB8xsQGY6tQZjBqELANkacmNLV5MGmPckLPm65drcKN5RgKVrddoCDYMPsmPxQtPf7EH5TPb9",
  "key16": "2zL2JARu2TBA3JuPPTnCfFvUo3t29xFDG4FuuANKWCHur2Xtd4YeD5gWXG2XA8BaYajzV6Nh7QVjcKsyLgrpx3Fe",
  "key17": "4JEpWDgGxyYycexPbWqan1seSMNNsCuCGXGU5ExgLcbkJ2rnT72gCNmLUHjkL2ueirHYQ57B2su9RR6dVEw5hJH8",
  "key18": "4zwQdujhmyQKA8PratR7P3fZN6feeD2VCnmV5iGZqSkgRdSpwTNdeCCbVWSstuQ7mGBW67qqFbVrDzEPoVuD5iP1",
  "key19": "H99gxb3PttdAdA6GAnYjryUNsQhB8UZzeBsAa1MMwEkVfhPCW6wHwaAKTVZkcXyqKDCfa7Csqp5xB7GVwZZkBUS",
  "key20": "4FNgGt2SeghjzGrrsqj3EQsBQe1KbkHEUjyGNT76ywGjwCMs9uWvvaatiYvbR7GiSbN6r3Pfig8cPKzg8tesbJvK",
  "key21": "3vDPfXjexCtVtrnAPA88xRWseja5h2sqRje7VB9wBXqoPssT7seGgUg4gXnjYrBqnsb3CYSvbFgtWGA9iE1hUqjH",
  "key22": "4zTtUcTUbbtb6r8bprVUy73yb456y8kHxg1Xndk5bKatSMSE3dFHNzMoskox4wXD9DATeYB5GJZYRiQNprHLYtMR",
  "key23": "2cj23mUhp2CzsGTPBLYLjrh58vhJnVmZ1i1H9WYp7xK9XgW6Cphhu4ot5UcEAhpdJmGGFeKciXhVHVtNbNuNRq14",
  "key24": "5GQkZukYzwexdmoHPa3CAjor7BKY358YdgyKKLttrACKkcmb6DzxdtaEThfyB1NFMePwGLJKMhY4SdpSftSGqLJ8",
  "key25": "3i1zc1EJnTgEteB22DTtTPy8vVJuxMMSoNycUvVpwdp3yRFejn8nXASPWjYQbmbYD3wQUiW2Pf9rzPPnjVXJmbJs",
  "key26": "3MWjezTWe7nZzG5qYS1mixvAxRc4auXGUxDmz5gefKLB9ZtYFEic65arLzRgfnk5stapgSrsUTnBph6x6NzZWbv1",
  "key27": "21SK8kinTLrjdj2AS77v6Q8g9zoWesvBEjcbRy8CafWgJaCnj1MeSXoUD94XbTP1dW4TzU6Gn9xyTT6WT3RwVh73",
  "key28": "3PJeeiZdT86ThsD93eofTLNwK7pqyssuEtJhSsjY6J6GVYZ7ywpNxnYUCma5fstZjRifXDphnyxn87THFNj7vvrj",
  "key29": "25wg4k3ps3Pp2fmPeJsTJmCoyw4mkybqHU6NdKeqwUhsrRCCy1Mhoads9YGLF8766VfhSDoXhYgGybsRrxakpAFU",
  "key30": "4sqB6TLDpFa8B3zpE1tRjAgrFehX9c4Lk7HUMA4aczgAzPKNF9DKPhLdMjbFuyQMMbPLexb4pkKnrD82Fncnf7LW",
  "key31": "VXN8YzSn3pkgRn2gp6ShNaVbrDZT7pPV3outLvGeHBf2tydvTzeug5UppE7EsC9JYLNnNDLcqeqZGJbCnPvqtBX",
  "key32": "38mjodNQqRwP8W4Z2JLPtX2xcQtxWCBkkffV1MhtKeDbhaQwudwV9rE1cN1zYP5Rc42jgW96YkKYkeZKqM5CPN6A"
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
