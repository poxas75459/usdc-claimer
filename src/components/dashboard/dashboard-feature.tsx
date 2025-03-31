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
    "xcxdwBzRbAHje3K2r6gKo3Js3dXq9viLxrPXcD3nMPmc3T73C6xBiuyDTJMDsBrfuxjKUKixi3Gudzr5KczuNpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XSGR5hEGK6mgrNYE2ZFHdih2hB4fLFY3EVAFD1Dqn1oDfqrYtvs8qo77x7xHna4p2vVFKJwV87Ee8b5i5yRfZiJ",
  "key1": "27D774HmGZRRRC1NPHfEKhk9aYZpJfR6xWsQmuz6Ck1XYbLPSv9tBKt7LFVPfo71hVpMLX4jvXzemcW3E1VXD8jY",
  "key2": "39Zed7jeQYe5QDnk98g3AeG1tUvjuCfwuUeZQbzTEZ9wmn2fMf6BqrWGDH8FJ7qrMa4xKADJ7nnN8VbKwTkPXgyt",
  "key3": "5krUSAWpWWuK9A3hoA7fCWXNftZGWMWYDPW7AutnMbENbfkfujkLTGVaSMBnKMD2UvKCozfgwbxeXvmfqD7jEunu",
  "key4": "6nTVFv1UWpoR6oAnm3X1fgF3FnERAcRWNJdffqzwyGcFLnu8XSsmgjW9FdUGzHFa1gRSuPB1gvLAYq7QMMPULfM",
  "key5": "kTFrDnhy8RDn8DQfbyZXW73SiAp2rGGafKyuYMRMBqvpcz7e64RcxxK2dsuTUCR4wVsyNC8LvcZzNVtmPdnLEL3",
  "key6": "Qazt7drit56ZQSAd57LSfJS8rkphSVN5V2nZQsPmRc1vcHokjzqxjnWZXkLmeSKjLFTyNiPyFaDD5D56HLAW1u2",
  "key7": "2PRWYCKiAjrdZQJcwGYiz21p77v5FRgcfSUoaSwZ8BubUdYyQtmgJyeXMB579rCYgkaQo2oDmiSKpWt9dHFPzh1w",
  "key8": "4kHQe9LogzbKpJ2fakCaW8zRMvZgXu7FtLsrkb5YmBgNydrWVJVB1ao5X6gidVUJksuxAoYP5iTRVye5Vd2L16cc",
  "key9": "2RpovFdUEWYvjSvrFyxCDJYUDzr4wrbM2c4HDhETHXGMR7Db9SHwhSxNMjjrzN99cBj66cFyQHCbTDRKYBweK65p",
  "key10": "3SDj5pPATHd5V4FyHRnAy6p2iQV9bPuHVePBJvqRkHKtu19hwB3jFwypr25D4DknCEoBB1MZPVLrkbTNzp1A35Hk",
  "key11": "3Si1j6kRXRZiKDjuGzJ9poHjVWm9bckzJqj7MiEKefSMYSS6EXikubQQPs4G4V2coe2PiZBTxhav3fzCRMn9sApk",
  "key12": "BLv62tHy1maixSw4EPvzYiWRkaAMnJD2VyYhWqEg1zSGiw7y1LUHLZnJvzb1BC4pk6tz2sLsHHcDKWsC2a4fo1e",
  "key13": "4gSopeNjQbaz8FQqbTMRSGuShRPnWj3Y3M4NM5zaRd26rae2VyAB9HVXSeDCg6CZysp9HAGzZQVBbLePC3WLEtDD",
  "key14": "3wYmncHYwSnCbsNBbVu4CjypR1ZK6CbjjivnxFJ3QAH6K3LoaFoV5uXJErbfGFCcxkwnK9WoWyAVVHtzGAU6KEEa",
  "key15": "5nYbPqjpP4CQifp1ADHtfRPh4sJWHnnBhD8PJiMpL4en1qbAJzSJnS84mr4xDZW1gQqyGdPtKTiwnKo3V19Pt2oz",
  "key16": "2JnNvTHtkLBiezbBK2NPgu6RnNx3rYi8QoYt5hjSP4LZhToqm7KNQ473s2jdAMymE5ca4en9G2fFpReJUVhLfKik",
  "key17": "4ewuWzUD2BXCMBuuSHN7DJNjS9Rc4i84zcZs15fzDVTeSVmDZh4FmGFRb16ncybL1A9o1xQD8tzRZ5YMGyTMNs39",
  "key18": "XT3sFVpMkWS4s7wy1sG8C9yzzJXTZzecQAWPifkHgkV1ajQypjXu3sRmPMwQnewykMTYF5DmBPX9bpze4SaVKSS",
  "key19": "4gJRrEYxjtyWDrtCAQVybCM7VvrgoTx4QV4RqkiLS9SYLSATZtP3NgnUndhjnxntUewM2XNNSgpu7Zf2GQ6DhpQ",
  "key20": "3YqdNF5Bmf2ZxjPAtt1TJDSbDomiwNDNYuMGC23ADh21npR8LTDYyHycGvd3xDcsn1hvRSYYAn5fcowU7Dm8rHnH",
  "key21": "4mRDctcpzRfcF6sZAt2jkVfDLD3qhsNdaQTyEwnVaauCB4XZ1YhmxwpQdGTTP77jTzNgugAPX1oZkVGUok41sfh6",
  "key22": "VN7TUvaJFboRypSj33yp8cVUPv88x7wKQG3L4pWKwzAFuRxpEyRa5tjkeaiiFUQJAyCj8WNny5uoYtwt4KM7ykX",
  "key23": "64rAaaXP7vWGqFRxHqQhkgNP7XFQashiqTWC5ZGFCqHZnwpqk8G6LWWPJnbYeeJjJy7LKW2YpZonBFttvNHdZYx5",
  "key24": "3RB7KLzNWAoSGEd5W3ZAKF9CzdCy2YjBb8eh6HK3xg3i4DZHLpeagqrLdJp1nwVc4szTr3BnrzEjwJWszFU53Cye",
  "key25": "31x3pTHghZY4fS8AkGWcCy1MUn8bnUYmoE1Ecff6bYoM7JjsGKh3AtrEQ9Lwyj1eKqvRyAxvyRJZAtYdrWGvEiAU",
  "key26": "59LuCzYsxYgpE7HK6KVTQrdaQxVsEVDZSYPt5fK93xt4x2tzSy2YQ5vcqeBaFRe8q5cUrHTUW329zqJ16sDS8yUw"
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
