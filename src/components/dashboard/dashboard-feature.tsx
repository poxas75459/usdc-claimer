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
    "2BYK5epdYyGzKW6dKza9pDh1PzeSpnDe7m5EezGAf2a1stzLesUZ5HSEDA81Y8jF4v88ey7bYvtN6qd7g9RCdG5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oC8Ev3nYpQeez2PokULCWbTsFHFbCE4C3BVuQLtgYocWq93u9MRM2CZrn5jxbx6NDnZCKXDF9WmayJQoXzDLZtF",
  "key1": "5crNNQv2QTRPxbb8coLAs3MQS5TgTp9gymX6NB9XDVFeYrXFSuziNcM8mmoKxvbJrxt5iAyg2EbXDHdqG5gab3eY",
  "key2": "2LCyRic79MXPbaMcSH45xojnD4rKN4yLu7tZ1JbCXeKrd6BDsbaviraxi33KGzgjYxhX3AcAudLyNEHguPd4MZBg",
  "key3": "4sygLQbkzkLVmwmDip88GF7rGLB7qRsF3PSxmcMLr4RWAfo9YLhB3dqjXoH7QtiXbxmi6KnNwEEKJqkn6QnXbr3q",
  "key4": "P8jVvyYNKEgoWan5BR49B9Bk1tsBt7hmMFz7HFWrVZBbDaufVKrXJ4F3j9iWAnrtABvoNbFpVXNU3xbnReKdomE",
  "key5": "3GqVbhS2P41BHYm6m1mwyksMQZvrXHpHD7rrbKM134pWpgWq98tdsNUQL3Qytkz7idmu8tBCbmgo6XmUAecdWvDJ",
  "key6": "3zgjRKwteoqu3NG452wF4hXUBectQsVzytRjZtsoWTTzuXgubXyWm8ucLrwDyhpR7PTsyRxXwRXevrGZSTsD3ihn",
  "key7": "4XtrbjW8WWKDoF1MFRaTGq9BEe87nXVoscJ5e27TncPApHLsGrWCmMFjFLvhfrCDcg14NPiXFRGZnveNcHdzDsBu",
  "key8": "2RQ7o66igXYa9NEVz8hmP2yJHSdDPt9Dg8k88supdheyx8uwoFmvkhV4RyiXphtS9TLvgkxn6kGeZF8SYg9snjG2",
  "key9": "4AXBsGdpiVjA6tHEnmWLuhMbci2gPBcpCXL9MeVV7zPPAer1xHC1kbrwxsTnd7JxLxp763pAwAudjpwrXGMCsHSd",
  "key10": "5HP65DyYRZXtnbP8AVbTFVzBQgEmiqnXh5UCAsstkG71oMBSoS2b2drJphw4MtNRmbEueUM1pc42P48sTpRNiZMD",
  "key11": "2NxzSQw2skSV93cg4RFfnGS3ubj5Maa1YaQWb6bbLRpwNunGMmRU5Lhax9Mvf4Tqmof9CD5WKUMLWPDuPmj8FgMd",
  "key12": "3SHpGcfTKnANyUc3oEoY4tfyG3zDvtRMwu5d8BnwagkJoTDURCtGD2MXds9GvFixDVRcFoARZnwL985B56nMHxmi",
  "key13": "ppjBX4u8UXGWLBMHZYFM1jdRoV8o5vM7XBTd5DFksMyJ5FepBGAcxcopsqPzJRShdRBjUC17ieGfVeZbY8rp7FZ",
  "key14": "3uwUKa4MKrPYU72t85j9ZC4P3sipMK6gBtALukLJhUohsPyWw6rHQjtPuM5dJR3YphdtEvr8B4xZC3NGotSVfA1J",
  "key15": "3pT7QU6FgM1pbazJ2MD74A84cqF6fEZsT8MJjEKWfe8Wxr3nqYuRfmxiDKHgSD39qinHifvcNddLsgNt87cHPwKy",
  "key16": "3vTbiHKodCTx6tsN66mXR7jyJdz6J4StRHQ9ghJpzSbUF21XN1i9NmrwKqyjuUXcZH9s522gXjZvtCHXToZKWrEn",
  "key17": "4SvhV81Aib22GGvgEXU8o71xwGf6dSiF27dbXzKLvLRPP9i1Pu9yhuJS9SLQtAPM7DaFbq2DzDhY7K5xxVP7WzHA",
  "key18": "rg6GWRbYhCJvkU8G1tkLH2srMCqkSYS8pvyS4EfVFRqWgFou4czwDy2MEniQx9YactceSPcMRV6Q9KPyUtjS38f",
  "key19": "fs2umFNCM9b6cV75pi6tkVRLYV8YiVS4u8z5ea49YtSBPVLTETxuxaSKtQPoyNQP8z2ahAgdB1QXURi4WisoKRn",
  "key20": "4D65nGFm9oSCdbpSFbcfWnjTJH3jiDwAn2iKCZrN7NusZU4Kn2yqpoNz7J3oHcZUPSLiZvZpYXkUKsumQCagsmYA",
  "key21": "4VzgqfjZ92ihCbMcp45kEe4rLiVD77BeuQZhdqmfW2j3RQAt4YdcApCYaisEPASPEBxy9wb6kpKkVcCwV6wn9R76",
  "key22": "5hTsnkvk1PrPNp4GfPQRtUJJeWVfXnCPePG141NGfwGNGcN8yNRkakTp1hoPv996dvsdHdwcGdGdnNMB21HeVzSQ",
  "key23": "5YuoXFF2G5Ch75XVHGSQBHgaqdJhBPqmVfwkXpBX2d6bofnodSkTzdWZMvosjtiGRnzuccqftMXSddBkLThhAwRa",
  "key24": "3mNpdMFfDpjuRU86CzKb1Mtgan1v8C5AnCwzqWu8qAozNJ6WjEEE2NGZDfE82BsxKsUAbZ18tY858HZn7NkZi8mf",
  "key25": "4T6JaYZw9RWLZnX9BtF9RvUE2vRD9ru4uzj8odY8Z9n14gvaNPeVPv5bdouNi1WyvjpBL4EjjUpsNaF5Bse4VZ29",
  "key26": "X6XM2NtJsKXAYbWGGKGtfpNuezpaXS6KbMueXaNtCgE32tUqbZ8H1jrZqAk4Ph6YXEomb5Rc8sypWETZnV4Qhym",
  "key27": "K3ZYoy5y5835N4wZzFA4pxfpk7Q8f1wiKFou6Gbp4W75vQ9Ng5bfZZ7nsms5o9TKiBK1ybr8wKeJRCGWytRhxVa",
  "key28": "AMHK7MHp5kMD9pg3tFJPjFeBTz9SzaqcrxL3SvAp1gUgauiRvwgdKFQ7CFQmADe7jJpqTLVKwr7dK7J98Kasg9n",
  "key29": "4DxwKs7yu1cH5NUKRnsw4vzZBSW8BogUVk3Ce5BHrWJWCxmVP38YQfwQDKJ86nNRBsXvuvDQfUdTZKyYCHtxhM6T",
  "key30": "43aWhE2XVx6t1HST2Sc6jfBxTdgXPQs2qYNPV94fKftSwuhDnySRJqGmTmvYCrAe6Q6xjEj3Ve5eMdkx3HmttBCG",
  "key31": "3KqQm82DKdZmYT4R4pfpmrhoz2U3GB4HsvrBiCuBak6H6VDQ4zNk88G1tem8hEkvPNj2JZEDEf1taF8xvhXFeoQ4",
  "key32": "35UkFDVZV6tZT71o8J1LDhgauck1YGTabLwxp1kULKnYmz2Kk4VXQc7vYAHF867VPjSsT2NgHqHpUuLUGi3xpqq"
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
