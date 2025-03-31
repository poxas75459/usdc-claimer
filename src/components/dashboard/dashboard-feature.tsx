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
    "5HC98ZpDAxyWnavLaJqMezWPgFep438qM5mfoassAuhksKgY9AXqGAxchzC87eGLSGsSvBPMZ2e3uUR3TfQVVWw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJx7upuuCdCqPz3kZ6ETN8Sir6c2EVone758mRM5sNsJyEKgmzAZa8G8dUrM8w5BXdGPKYPSxe1oPuEb98Aq1Hr",
  "key1": "445JBSXBW27dLeFiuyZ8CtNXCZqUG7bQxBe76FBrwb2k16sPmHiADwcrYer2oYMUaxKAcRKpZiwUsewKE6MQQGvh",
  "key2": "34JnLMoK9BzRr3fZbLv3o3wnCx88zwqf8RbFqkPfKvQtcTx8gU8qnwYtbnemEPGdbj5APmnToU4U3vbVa2VxS7mM",
  "key3": "38FG12CfX8BGtC56SExAPcD9jjeLSnsc62g3m8X3kWU6ps15Ganr1A6BSLPuSvHXztegRyWXQEjbTcxaNkc4UCSx",
  "key4": "5NUA8bYK1N2k9L2csZgaGbeKGVY3sMB4Jv9qEMUnj48DfjP9sZHvMcUhWhwvi7TgyM3FDGqdZx56mQRmwmBmVvTR",
  "key5": "Z4p5zwLkHChMLdZN6TJCDSApfZowJWgmXXb5erBRPnUN2KgYuyHtbCgqFmrHbmz7LYb7FeusDbrtoRe2Av6d2jQ",
  "key6": "2TDsjef73i2FFGgW6GNpWS1aL4zGchxaKiTRqB3G27BsiQ1HpDeTSGkEJb2utQ1psjddsgeeo3rfP59E2AiGFWi1",
  "key7": "2Yi6wZMbxmRCc22MMkRWRUgJAPcz4rFUDZTJMqgtSGVYhcz1ohbEfmrqrrc2VJovmyBh99QWWpatUznQou8PivZM",
  "key8": "4jirZH3LJBkZbnqkkG6PuUe5RSi2ReBJzKMHMQ9KUjSNuNw8ZMPdZs1sidZRUkvhFoKJEsQZQ2UNaJaX4EQbgWex",
  "key9": "4vJEVBakm9jozosJY8rxZbExvRWAS3kxbz5L6Vtn7uqgJGEw1dxYY25u71pnYYsNapyGKngYsywKwwp6mBvJCEZc",
  "key10": "2L2jWGCpSVsWDZNYamCo5Xap9NjW16BGo9MzS2QkqZNjoCaAJz1o2bhBeLskMtEq7RaqYYz3rjZ5pdYQCWXhydZz",
  "key11": "jzPE2brgtmNP6YsgWApLtFLFQ3Wezu9ndZB2owns3EjYytXBxdZY3N1MxJBJtxzG5LpYnzQ9yXw2dnxYrdJeKDf",
  "key12": "CroznjVi6g6pqzSy7EERQzFHaorRhFfVqAH2jDjFx1xU85RJg7ey3qfm2Uvc78YKL2zGF7Pq343zAGxSj9WPybM",
  "key13": "4rdHckanZiBQGokgVqNHMELhRYoxxuHRCd4RtPmTC9kTDqWYjX73apCwhf6vhGzsMLkEHiKkuxRYnDjgUauSyDyg",
  "key14": "WN4GiP72w3pFxtzxEtymuLXYdoMDZSSTWXJPdYjMUkqMANWDXt7Ybf2EHYhKFtQWHejUxM2Cc3znLxA78nbi1MZ",
  "key15": "3Lq7gMFyA8VdnUGqkrDenZfwbJDq3p693JRo8hLo9fsH4Z3zbhmWekKYG1bX9VR3tF6R3VTfgz8anjg7EzdBNxke",
  "key16": "5BNbBvomeA7D51JeF3Gb8JvMeozHFp4mDxWyC91Mb2T4SdhbqJSQYLWWySUyp68DBV1CmL7Pr3sNsVKRCafaqEN8",
  "key17": "3gJvfrUXJoHuFBpdo4x9BiLBo2XdMGST5RmzAPozRyL7c7vUeDddauHn3z2FNrqEAVvFwX8q5Er6cMEB16CLCLCJ",
  "key18": "3dnRUDddFZ88pGgmk6wTMU52FwQVQCgsDvLNqZY6e1wWfxhcJpc5hrW3XEimYtZ9wu37fDZyvhJ6RnQqfsY8ffcy",
  "key19": "5oRkS7ikiMVRbVgqsLenhGkPdo8thvfnPyfrx16u1vxMUmM9Vv9w16ArjkWPvPnFN1fBC4T6f7pasmSYQNSXLWx8",
  "key20": "5Rh2Sr4QUM9ZYhZTuCPRYXVfuhW8AovAYAeEbEfM5amSsbiHF2xohTvQR2QkkSS3td3dijccyd3ghPLU781sezL9",
  "key21": "26wB2vZS5tHh7XBkKLyeXYrzcc7pGt4Ffg82UytBHvuMvdDnvi5ZnvetzRXqdvKsyH19Ut1HsisdWgb3givNqtjK",
  "key22": "3Vtb88WJsV5sfvoEjGJxYC3gbSCrZwPNxU5CMRg8magBCNaENSZ4QoMR4fZuNc4847NZuHNPrgDDPe1s8CdNJmBh",
  "key23": "3k1Chk6uKoMmqkQK1ZyCx3R1WiHFiu3A2zdEVuz8m9wzxn7jvsgr8u5giC6v1MpezG8LgKGQMvtjuKs2WECb9tnY",
  "key24": "5knxaT81qttVeQaLSU15fPnn2YinDfRa39iXmEZrNQFbM2aWbPMBw6yW57KpuMfYh4YebZLzrXaAysq1Cb3H7X2Q",
  "key25": "3FAHd6hz9evGfbzbAST1AEU2jhHcL7XQsC5jHYAd7DALRXUtuNrN1JVL56wLjy4wgYutsEgNxcWU9w6ZHdkd6z34"
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
