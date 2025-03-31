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
    "5EDEbSLwRHXfdz2URiHit39rnmzFXrz18EH4NW5anBoUp1Qst7PgsHcfKsfN6qnw24qhR72zJXYGCRhL9Xghyat4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDeRcSHdivkep25Apq5g4Whje89yXduv96XviA5YfbNmbT1BVFsd4fx5Lv9uDF1Qo8heE7P9tNtrV3rBQ1Lv6Q9",
  "key1": "i5pvuLarQ6s2gefkUbRYLtPvhMMUKc6JtWHBqfRXXaqt3mvW9d6Shm4otu5jVWiigAwm7xVDnHa25Fpc2T8upPW",
  "key2": "2JCbAnCzkcWnDVz6RK3L7wyPuNNwrvRNcHSdFh6V4rPmKvXS2C1uBr1Jxa3JqZGHXD7d2CqPLBazMS91q28YM1w9",
  "key3": "253P43bkNHo6dFYsQVyEVtZ8KgwXpPi7nUrb4RpxZUfavSYFPUQZ8xnKfmPF4YpHV7jaYYkZ1Sh1ks4FUB2jwBkb",
  "key4": "2JTTNo6CVPpRvogK9W9Qg5cjMFJdo8z876EMTHptd6nYokJdMJG5vxC6fnteusq5rbJexyKeNjtra6zysR4NMyDi",
  "key5": "43mTwLo7aurjvRFb7Ghc8BHDh5twPSbD4m7tiRb3pCeAhaKZU1kBPsWgWP3G2HnihwiParb1foEZTpkTAEcQM93B",
  "key6": "5wrpFTzRbMTmaFaUwrG9UQdaMcSvRRaHhaBZfqPAwWuZVH8FVcmwfauvUn6xRZ4SoB9CTLprZrZ2m4ypdVnBLUXM",
  "key7": "4YeJtymSYMG8Xo8ai7PvA9qa2vDjCcnBf1D3GHoLHYZiJhB6xKazK8Nk2YT5HpQravVdQjRRXbkDHSR5AZgSyvjE",
  "key8": "Y2prVVEGg2cGGLifSwMUXd7wCaG1ZkMAmoLnyuWvnd85TJtcbz7fRmNaGAVdJxaU71nNBBrv9b5cMkMnYwG3Tvi",
  "key9": "sipzHo65eLgBP2N6Lp5uaaeWxffftUzGngyjKWn6f1KBaoKqEWY7VwMMAnoT41X5SuKnNjgd1ve8vYdEG4fgseg",
  "key10": "3HRSN41TKbvRgvKVzxzkZHjJEgrAZaFKQ5fUNjFq1LgmWwELnUbchAT3Kguz5v4dfdiUyxhdEqsS2TsLXHAmNE47",
  "key11": "4YMjJUzoa2XbkkRESRRYMgWmS1g4YceUX5rNppb8o4DwgWB1sMwVqg9Vduzi5E2Xa4geskHvFEfPNz1BLBdi3zp7",
  "key12": "4d1nkZ2B7hZxB1hwvj1xWNrCTVzMWPQhPWxC9FeDRXC7eGATRWH7ubjp9BWmN8aWy2XwcUyjFpNQdfVa5eTkWGc4",
  "key13": "3d3AjJkdukhsx94xneyuDRDWqUPvSRUdnWFbjCENagrL3sFRU3UxQfJBnGVjXExAsxNLuUpG6PDujYuwYxnnELJs",
  "key14": "38wYNFK3o5jqomhopvKfKUs5YUfku8ifvFRWWjrsPpNVW5dpxiGym92y6GXp8mcpnyZEDzmj15r69EBcXe2JiK71",
  "key15": "29Vs2DVrXFbQdZmgYmi1NYqAvdPqee8nw826MvX5hM74Yn7j3Cvo85mKU7qgYBWpCVUr2nofBdr365NJFT4nwrCJ",
  "key16": "sZ1oe9vPEKwwUdfCvupV2fKGb4XKgLEyVS6Dg9smVtXPVntfxsv28pd581eKnASExW5UQZLebiZkLqys4jwLPnG",
  "key17": "5p1TiqWPmELTzd5RMcDkQfCNZL1JxJNSZzUwMUEkPAqAUMAZy31QBNrYDCLbX8rbFKwLjMrbCU7b5PzdvMdZXEgp",
  "key18": "3g8EtPm7N6oZvbmp1zrAxuTvNQvJhxywW6Gqr4kPv4o2xQAoF4Hh5as3XWoghPAMLKXC2JMt6SgVVbamq8a3aPEv",
  "key19": "3FkgKAeEGjDfKjhr31LAuNKNw9QdFNM6BWVqVDyxtJVamj2X7wHFBGdPoFj7g9YL4WUKxQgdrqzLCabfEgTo43Z4",
  "key20": "B7B71LiFKwAHwH1dECwWCkSBQdLjgDvonKWUQc9G4xVSHcK2hD3URRG2CewCJAxJwp6FpsaGBYiTJnth8qzRzVF",
  "key21": "44Gopgm4fKsHEhm8YN25fpVSBue2EZdHDyT57kpGRdREKD2e5b8LA5mtCT73RFkmyYBe8BgUUGu6ykaZgDfPzu58",
  "key22": "5vNGdME3ajx4vD44oBxTomHtS1o1vnVd2iZYh4sxoah5EYaXPFdRHvrvvEkaJ34Ay4pDSc4txSs35e8Sx2LtJwog",
  "key23": "5mth1CBJQJRe324qU2EEHS3w62PnsDErhHhd48p4K4igAUJcbpHwuRDNnnmseGHuizrSG1eVuqicdnAsv1cBJDiK",
  "key24": "5jDRnrKGCB2j2EobtX1rx8jvaozdmuv7HavkMyp6hgwpQUdeqFSqWgraJG7jVNPmDMYA4JcuyP4rXyk9FSSnfbEy",
  "key25": "47XJZ67Yj4uG5coAckRM6XvyexSR8eDqE5bEyCdxeASqEgmhzqxjxB3Lp3Y6c1eMFZMvYaFtexk8e7X6uK9TQ7pJ",
  "key26": "nFTqyP4yDaMvakPoAmzxZf5CeH9MrBpJT18TnzmRay1Re2tVpkJrKZZngfXBbD1oT8RXZUjh9KJh9HM9xT5R7vg"
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
