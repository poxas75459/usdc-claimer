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
    "27pSNGN9r1AACAoESVxHJETKZWUNHDnEew2eer1UvaNPD8xyLAzzkN3sxo3JBhT78caqpv5P63vqE2uuYWQCDkvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zGs8ZzsyGgvzEXuq8etyUFnp1mXn4ovCTPQf4KsjXiu7s2pFT3Z6PwEnWFzg7ENy4X1G9iteb8Xi5TL9RzRLNEV",
  "key1": "31Q14ojLr2YVU9hSHtr5zPjLox7ZHA7jpS9Gpzv85PM9sfujCBtcis2HpXu7MxaZgjDLcZSrZ44c9q8YrQQCMJTQ",
  "key2": "24ZzVbL4B3vcYR4WbkQHHpaagfWVtVxAxx6yQHCv3NGZ9yCVF56xbBrEYNT3qraajWw7wVSx3CRh9JAxJcYHKLkD",
  "key3": "3cSZwZjCQm4W8pQDy6BRLGZnAvpVfLR212uJN1FmqckiyZWwjZ7epZy1Lofeh9qx2Wn1xvtoXp8BXbLPEvuPHRFD",
  "key4": "2w99Ei4SAcyoBTA2QKPFG2ir9mVLnLCJJGnSFSyVd8hzmYpN5sDdAdT2Ncspjap9wnVKBNnMLLffYrYajrVGLoWX",
  "key5": "3vGsz3EBeQ16bPfPmLDT22dvv2aDmU1cq4CixRvBiXKRuJ6jEApAZwSUxNVfR7LjDmMQmLAsMcwy3g7BzjHxoALi",
  "key6": "MK6xE4cHo38D8FP3sZLmRFn4e8ANgkNwEyLJpc6sMv1WFQdzNWeYB848fi7dWdw6aQe2pffMEAuGssjPG4YDHb9",
  "key7": "2kmZGZDk1SRG5zS22uLNQpdMi1dZBBBc67UzYYvZw6wGY98Mf1XnggnfpbwYUEe5REMu8keQ9LvtfktVYib7kh1V",
  "key8": "5pniVS1EPrnuw8BFGZHcNxjJ14bUc8XyTpfCoTyXttFzQQ87NjpyGKKPE9msSGCELnVmnbxSyhSZnwwUekhvwoag",
  "key9": "2tDrgSJt6eBVmWd5bXZQUZn9Prz2Taphw3D7nrvPLqWkdxKca5tqwejGBZKJrC7vyacGsGbtr59tAGnFbMvGttq4",
  "key10": "4nnbJcGhcEMcAqeAFGrtaXo1G7r4TMeB3BGWyRPsoR3HaUKEJxwx7CDaAo56y8dQDKWC4tYLJjFo2JCnveDqcERr",
  "key11": "5gNJVF3fEL2BuzeQJP4noNT6N53kvzSSYnTPhNbdavRkW8UYqjQLTCr3ZwAJdKC5mc11LKjR9jZnNKetzXc8Frnm",
  "key12": "2dYZN6C9pnFvx7jkyEGb3Thi79kLy4siXyXQTyjjPpRbsfFcahu5sm7qD2uehL9mxokJhzuzhVmoCbJ268ov8ohU",
  "key13": "W2c5LXT7vT5HditNd7WoSpWbRXLgEcMthgc64cmYDSPBYK9mC2oiF6QXAWpngUqHgsV98RENzSuFSRYq4xRTEPF",
  "key14": "SjWoxPq2rcPBHo3QSUUh7WtsUSEjco1nQjHgeMDCCUDG7sFqaFcQEHBJgGp7ExWdgQcZ6cDKvKkrUr18b8QS3u6",
  "key15": "DCq7jUHvsiGAf7ZAX7Mkcr9bX7w3QB3FXUynsW9BjDpVX5ukoDwt1mUuEtGeBTkXcuNu3BA7NGro2x5pWaveNAZ",
  "key16": "S4Z9ZvkskK4f68omHc6kZf2iRhhgjJw65xAk51bSvAhHGDbdnue53zpCfTHcUS7GxW73anhWBMY1NctxpVzRCoj",
  "key17": "Z1ZrPqoAxvAn6bixbXDrwu9TaaEoHb65kq2MTrfskyG9DDLVtWxp4Fupbt7vcDCoN1xaRW1wQ1M7Nmj2uxQ6jDB",
  "key18": "2G54ku7Z8HjZzg1qjNNGRfUbsS53wxPz13Y5sduUrccFKvSpb64qyzNbknyVagBFfdvdQ6vxoLqs7JbSKKxaYogJ",
  "key19": "45ifFJbqbd6whqsKwZGQbqHEoBPuQZHZAQKHw83Lsafwv3BVyM8quKBwn63tMFs7dFe5j9eZVy9bBRFxCB1cBGbK",
  "key20": "25z9t6R4ZAXCf3xf3k84FFBWMND2J17VeVbq9kZm8R7AGX5Dg2V6M44jSSqiRBw4qm6ngDwU6oibgsryEnxWk84X",
  "key21": "5ywNP8YA3L6vC8kvS3bQ5u5gdFfdhj5wkcfrj9RPnnTjRh2GoBLxK6oc5LiYkiDAQk1zVFTM7bgJcBwuohAqiXUX",
  "key22": "3eQxynx5RGKbHGr8kBw3FyDRELZc7hj29Hsd9vAf3gcHNKsiswL7FtwZidHoknrAxHa2bb74SGpNoUeVvCaFPF2K",
  "key23": "4nfT71sKCLFCpfwXbueHC5agRMY3xyNhtMUKGLW1Q5mdChBKT8d67otv7qJt2pM1NguNLreWphQFGrJWMZxcjzdW",
  "key24": "39NXiTBdsMavS6JkTM6P7npBEtGre1AxzEWQNW6T8PJqGiFUgMmTzoiBDbJAwt6psAJwHSEq3C5onXME61TamokT",
  "key25": "aghvj1kWhN4AZXtGxLqv6CnxrLn7EmfyrY1TsG5tSVWc9wTwtSACnLDGrH8bDaQ2ybv67MemE2Vac4Ce1bq6B4T",
  "key26": "2opp5T4CvwJVQtQZUJKTBkNtjTY9pLq3xWYQ4urbP4hFXtAhNR17yz3fp8pHncnDcKg2yEnFbQFhrTTpSfK3GEAH",
  "key27": "37KH8CVkqBCSstcwkuDiyXTtywTnY8PyWmrAuoBHKYEuTcNpRY8VVcoUX6USsJSb6uN9tiEGAhKEStzP4o6gXQY1",
  "key28": "xsdXEPUYBP1T4gSL15nmFUduX2ug2DVsHvJjxEL63XHhTGZxJNZtwZyND6Hq33sUVhcm4gdnVYJGtD5NSfLidPP",
  "key29": "56FAp7wvEZMYmYEribhBj2a8HK1nWe8sEfvzzKWmGs2Z5kWEp8RrXC6B86FjFctdwi8WvYq5xfwxp4sjXnCqYAC7",
  "key30": "2QpXpcde4nh5cpnrFkUefHN598e2HjzNJFZdUFu2K5tPFAkmUNSc4Mx17dPmpC78vHWT6nozd2qnhcaCkPdwVvRc",
  "key31": "3u2VYr2QPzwRWzBBkh3FET7H5LKrF1FVLgurTW1ifft4T5WNANasZ8WPqXdDPXMLxG5NLwV4g7VA1HhHKpcxx8Ug",
  "key32": "4EacfDe8qpnvQZmdbWReJAxYkrcncx8A2hA2v3eFyLAEoRExKo5G3AeacNFEZhZirhhMDYGZ9V8JFNQ5mZzMuAQG"
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
