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
    "2oeBTP5woB7mEujU4zV2bv5wd4qFZsmJ6HiAG4HqijM5USa9j2eebC7Jm98zG2TWj3CwGTbxaC2AkoZMbrdb4xsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TE7GrHtdvydxhcNQDbv2NWCctrzDWfjeZWVDbcsvg8Tws3RMy1rnQbxcoNw3rofnduryCQfNLrtrdwqZgw4iDkU",
  "key1": "2iUHjpibEKmL3qtjSDpcyXD32ZFRX5caNxptLvuShwndPTzokL3V57E2tWGvMfJZAWW8xY3uzkaiie1Q9uwMQpvv",
  "key2": "2rjhguGNhBpS1adTk34m4C11WttvWLbKUS9jY8KrEWTuydV3JfDmfeLm747XfDmiSzoNboNxm5NafYjVwPQpJVre",
  "key3": "3N5HFspGDa12zYKztpUms6gEU1GCqXT2bjN39ujfx6994MG19khLw9Jcf8KkrDDcuakxSRpVxTyqQMuVHDDpF8LL",
  "key4": "2ne3n1omtCqLmzVYE4jcJbhgbhbvDukJoBc7uuWp24GdxkBMmK7VGjr78k7dqaczkJzoPKrGRn2NCoGhvVDVwH6H",
  "key5": "3ZHsJt3wbHA6Nb9QfbkDhhF3mPtB1xFHwdJVBCpoeyx59wz3cEy45PziBWQdoU4a3gz64LLjTMXbNmPb47RD5ayA",
  "key6": "VtGurT2NEcWdfsNR9HWpLdZi5GJbMbYepvGBfRkgLaXjpypDMjAYr8d29EaX1yKGp2JYiPM3tj5zFhZxMWJ2Eg8",
  "key7": "2uWTZB1paDa5AkDuXQiDWTC8z54zqfBaabx34CHYmP2Rr2MFNmaxKdoxHmYsdWS6Y4WYYv6pDUGJceXaQqL436oP",
  "key8": "vpdBLNiME4yGDeeo1ngKM14VD1A27SRfnF2yqgtkc6eUNnxXfvb5Hq3pZV4YGNZtR5ie26jPUEYVmtJoRCeg6wX",
  "key9": "HsiB4xthVwLCt4YNeTRN8Nqm46GahWGbwB9ZrrbJo72kx4mDX7kt9axr8BGMyS51eUr24u3eXCe78t7SKLwBNk2",
  "key10": "36P1JLTU3ta7yjxSDtA4gpKefTrtdrirbLdfMgSeBTSYwFbbXnaMWfNg7XzxuwP3rXfMKGufT56pPGKdD65uFoxc",
  "key11": "4MEmvpRmGQzHT1n2PAJcAa4DXvTNnXNng2tF3UgLwu6aC3iS782wX5v8QYB5DUmTMWVVQzpyzA2BuoJKGyJYDdd1",
  "key12": "3puCgxrLgMyZNBy7Y2XTi9j7aPsKMCsRD4Qd57wpNuaZSdPLSadp9DuZXDXiZY8XwUotg6hAfUgBsRsLoastuJSp",
  "key13": "F7oZTmnEGtq9nz1Rsfn1FNrDwSzSYP7XyKqeqoicw3dz2Gye731SDHYGq47N7Bf2wXxTKekJvRAFwnKsGP7yyEx",
  "key14": "63cQy2EGhy1ybvw58EcAnUpWzCFg64kQxM5Zso2RxvDT4ch1mXcNtrUxCuqLJpw8qZKbftpDvuNmSKJDfuWnefTr",
  "key15": "36WXuRmkJRSd3DSP63R6uNpjTyCvLvAj56mP8UEXAbCBgkc1pNVyg6VNBRcvUV1ugvAV7WBXK4jaQpVYsASiw2yK",
  "key16": "5G8198MaSiMZwHpMFwmYpxUWqeBuHsH7hfUzKrakBQaHAvoBRn1NgXBW2J1ZyJGRTtHpEWkmsx7rHN5JMcsXYR5A",
  "key17": "5zVLYyAsEvEBR8Cd6xHg4KEU3FbpwXj6pwdUneBHW4R5HASrjneVZ8tZX1fmXtn3vd8CDz4Vt83niUrTW6Pqn6xt",
  "key18": "5aT9n9WEC8qRzg7YoJmSUMRWdyHduBLRaY2FnydMv7F7swmDDeXrWggWLg8hX51zXL3kqRGzz6ciBUnKahPMp5Tm",
  "key19": "4E5jpFkLEB9PGiVYWWyviW9yrsv9bqygojEtybfwngDYSDhYGQb2DeZaBygVpHTkj1FL3LocoE9ej3Aw31tmVkKr",
  "key20": "2gJQ2zmCfsAtyJLb4QrWYDP6yBcFcmSSKyEJUhvvdrUoDTtnvhqhHSgyWPxtS1xXsZC17to59F4QvwMsMFxYKHyf",
  "key21": "UynsFkM4vNMFRSzuhPs3ozAAwqY35PPcEMdoEmWWbV2VsdrehDNSmVPzMdSk1tcLn7WpqCr6Pdgkw8KL9gWfo9p",
  "key22": "2NR8YLsQVDvafMvZkRoCC5ir9HqLWsQhacEMeLxLDiYRS6CBXW57R5kM6AnLhatKEmnpD3GtbZaQpDu1pH871Jzp",
  "key23": "4atooQ8mF5VNsz9YaqzvumQx7mFkaMk6nqQG3k6CVHkr762HHpG8yurkUpgmdLX7Qy4oQAKoeYEB2arYNp5M4dGW",
  "key24": "3psD8q8ivWftygTgeyD9tQZYXQFB8LbvWb1wHwYvE7JkB5XuKFRqJkg2664sXZySBtnkPaWnsdRpJQRjxkVgBn9B",
  "key25": "3UFrLSZMxuisfJAXwR2xdcaRPzatCeuyVJ3kVS2gffjjCvs2jTyuiPXsvSvYEGcmHti4tiFS5q2ckvQkebEc91MR",
  "key26": "3ZWgEcmCt4BZhgwLwwHjkU2hxCo7Vw26Y9ZSFbfTaWiWvXtAts1uNQZTokhHndjtXbA5iRbJs86t5fwBBFfuaKdH",
  "key27": "3x3vme5wQi8pfXAJMzS6SDnJK9W21rZbCr2ZRaeenMZZR897o59ZQCesk5zmzg4fLU4wxoPhkESwcpjnHGSEHNnw",
  "key28": "3LKvyhbM75CcEEs8agRVJb1EFK9ZNWc1AMhN1UW9HV8XJbcxzHf3WG2PdVSA7ypojMM9sN8jCsaKWLBkVit2xPP4",
  "key29": "5LqqCZMqfs2oarGxC6WhBKVpJKPFzQyj8Q8Ed6hMySbuLXRm2gLDD5CWAeHN6CABsQn7Fr1x11ZEq2m7KZ24VcFR"
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
