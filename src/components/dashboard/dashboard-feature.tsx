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
    "5PPPcGmsc9osyFM2LNfsg2iA2hwVExmsRGgGMUHSFRTnASEnEKPdtdkjnyKVsHbRw1BRac8AcJVmR7UftXwkZbgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQ2QzatPS78pdJdnP59EF2aGeXNhKtqpXhPUr9uCk3ffFF3hD3Y2EAWub6TD4Uxx2T1fYxXb5hS7EiUDL5ikwzp",
  "key1": "4ZSHK1TE5DwiaRgA3moZRt1Q9r5DR4mvf3rS5rZjsqc4hkJKMiK88z8reEWNo1wABpU7jp2WehULVyBDLq7qRaHp",
  "key2": "4TMumHzEMTSBCHmkKgc4zaqnq1Bt3y687MzDK6agGDjCmumJH9ZupGLGpgAqUG6kESebNtb5LwCy52RSQnuDx1oK",
  "key3": "mLANAhr6y7toNTi72qqtJntBiKLiAsC7UCkgkUXuGM98gkKtPoePcaiJYpy77eXR6ezKmYet8mihiFWJxnN1aLg",
  "key4": "5meP9y4bWEczXTZvJvbxcRx3b7SZLdHqJvhmUiDsspzvURg9t6fn6Az8nDyRakWZcC84KaLHrWzHrRr3QHPKfqaT",
  "key5": "3E61kDhGUHFhAUQCYpeknFvxDphUK2FBDiYa2hX5cYXae66zFKiJbPKhDL43YT2mtbyZhEsv1Af17h8uepgR1XzL",
  "key6": "2M9D8sYyAxAcaAJcYF5F6a17hvSsd2BYmmSvAMWv5ZioWK2237jkcjq9bhXfd81wCwNDdqPYAUQVrY3mRDs2Jpd",
  "key7": "4VpW8Fiz9mzGAfiSRmCcMVfdMXuawXWZnz59tCdafdhmVrWEBFBLcRfmMPCALTkYBtLXsrwXzEUAcYWrqrerUapS",
  "key8": "uSq732JM3CLUTTYKDsuNT4A49XLvw19TEXrB9KLTfCRDReeQwXkuBd5NngrVePZN63pNELwHT9cjXEDpD4igKrm",
  "key9": "5aCDP67eiZAAV8NXcmqaZuFTNfMfuyaKbNn8ttVZYYb162VQKF2VWF7mJtffX8ngyvvxHYakpLw9Lob3L9SgaP1D",
  "key10": "5L4iSVQ3rrqHhr25HhR4RiizyjMXNuEdWo3g95cd9GNBY3Ky1wpLsKguFyxhCCArnyWuuE2DjNn5xatnRZ3WhFWX",
  "key11": "63ZJBbe9guvDM9iSchsDJnvFAZWQ3KSxFnzQUmeY4xDBKYgxjDF5v312Hxpk1a88uKfGZqZZMM4zbX9ZxGB9yJsL",
  "key12": "2s4iUmyh7ANYG9w4GQVh8ENe5WT7EN7jUmtFGmhPmpLMuyCT3q6Z7zyf8ZstZdKCwocENoKEajhLUU7grzUz4xtg",
  "key13": "2WWDrQa8g8uWE8ovp4MPuRBAWrx3J8Jocf1V1b6pByU88tj7h44ft6MhxdFK4PvCmvfsELPKa3iAEZLnvNr9hEaJ",
  "key14": "Qk6EZxV5CiE8HqoMtXfm6q2exBuu1m8t7ZELxiuRTYoch8TmpYTZhUVK6hw4dtWwZ4EeGZtNCav4gSdcmWEnWNE",
  "key15": "2WkmRmpQUoSTA1XgUzdAfYhzuZvzcVkrkD9jCrH6VwhE3FhcVKzR5BwVZDLeKDpkcJafBqXq6gyzvSaBxSpFs6Q5",
  "key16": "BCT5uMxXDLBDmjNJaKiM7oj216MuRiiBQMYCrpTQF2wthxqhuSGNHTAiYCqfLnqjjbpXTsTdp9iSnwMeo8F8UAM",
  "key17": "5JfCxzrFMHEFngFoWVRE2L1fjPo3mAqptCXqNZiGBcpuBpubdC2qFQoiTEXSiNFijaWF4TUzuAVYGFcP44CXH2H6",
  "key18": "31nP1RndQs8dZ8guAhTf6U5cMWsLiK73n6twz69WH29jTS74QjHy4n8TGYcx7gGDjn4tBUf5374YbdKpekh6qRKb",
  "key19": "2dJNJxNL9i469JEFqtCiyJFxLqrpNMaEAdJyzSD9pBAXyGDJnGXT3dZtjKk29NdvsMnQVid8dczM8Rprz53Thvw6",
  "key20": "tCuwfd9LSsjae2iqEZByj5y1stMP9WHiV25feS7gmrMKpWAHuUQ9YrghNPRdYCRqY67jPmdg8g77ZxpUqjb68r4",
  "key21": "3CPnh8eLtjQuKdyFVR2tBZfpQ5iEWZjdnwzqQKuvCCzQ2TcLJN2frhnGCdNwMXzbhdgqWgXgk4TZMMqpQqpCwair",
  "key22": "2y9GXCh2CikGWPiuARgyXhao4fwgNMocTMV6eSDiTPATYr7eodMJhQyhakZyaW97p2MNdDnc6a3hojgTieHY6bBs",
  "key23": "351sFM4rZi7cuzmeYQaUm4KbgapssjhjKEPbdZz7rajyjga5R94cd8e88VfeRUKHRUrAe24E2AHPFbzSBa3ZHUJR",
  "key24": "XdVsDu994yzwUxyPxoNoZEfwzmR662tDjiauHXe4hFoFDHKHDhZsWpgZq3kEajzFsA53ckGb25viD6cYAcCReny",
  "key25": "3cJA2GVxRzEYB9tqdSDaQMXJmi43RUYJjSCpHdqULdWMnFwZvrv2Q9Ba1FXG3ofcebSXb96YF8syRCHJY12HW49n",
  "key26": "Qfa2PNFijf6XZxuSzKZ9M17wxM4saRz11AGrg8mwpqt65Q6oHN6fH5iA1uGChaLUJ8ceevztMC6uRV2CQpRMW61",
  "key27": "35ZpqAodm6NCp35DdBW6JXZzvuvFMEDY7v8ZTPLGTyRnNJQAzd7w9VWVuiQVr9VUTT7aKsMDmpWstdNDr2Qv6Hw1",
  "key28": "2rmisrbDLx2TCh5GNvwLXVdat4pXw5extY8bQzH9HZhMA6LWTxkg9gSyhG3iQ6oJTwdGWuebrZvaR472orwZNsHh",
  "key29": "42pyMEyCjEZNopxWe4QKUP1kDe9Jxw9SFZUADpCmTHHu7dy3DeXF6h4AvdwcCiWsDjnJ3mjaNbjVd8oe9xnWz2iU",
  "key30": "3qyLdRHRnLmiKF617Qgr2dofdiSj3AUeJdhR91f8DaJCkk24sD2ZsTSV8CPC2fFuCiGo9XZxygcR9AbtDGwK3ECm",
  "key31": "h75v1uewjas4Txt7kXdLFd8EhAkfsnspz5TujQLXbWckem3kuAnsLvrmV3YKodbYVmxB8gv86HAzFLrLMfpYh5L",
  "key32": "4Ntrxe2sh9KX6ss21pZuS4Lf1whQtSL3Rzunt6HMKSXhVrRpd7fBhBopUUGq3c6NNDyK3b7Y6GLbXRaNng1wkJxx",
  "key33": "4CSVjFKEmAAmZqjqNGVYAM6MXpL8ZJCWTxGkGqu9vBiji8Mv8Ry5RL4zMjuP7LuowvQ7Yq4kFc9Wgij3obZGMzN8"
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
