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
    "63kgShjS5yoANwzY8Wc3W1qerw4prFMZrctTUHiWMZtWvbNqQ6P1wQaWtyo5oHTST9o7oXwMgHq86bwKbCMN1WB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uZmSfL3TizmVDYbAY4fugG7rESCBsLWvqYxSKbhv1GCC1bWBZMxBPie82a4HBaFAb6HbDHTtCmZiJmmKMsKyfVR",
  "key1": "3PvaXm8XhGze7WhGtQt7p9K4oxHmnVpWvSAdqPUgavov6G8Fpv2kh4SVghToZDoRJABbi86oPaUYcKYYEhaDVTdE",
  "key2": "5PdFi6znoJ6PEtPG4iS1ZUamwf5RyHEbZnwosFotKPmxpCqxCMKBV5JVGW9hu5CB4mpqF5VrUGPRr9rybuzXyy84",
  "key3": "AqRbGv2cBWqDTxJqtEeaxWWS5uqUjUYT38yHtW24Af6pQHdW7MNMah43FxaizfDQM7Vfq94NDkpqSFon4A9a8nq",
  "key4": "5nBDWfwZ8xwN9kH76Y7juRd5ytMrsihy8EmuFWALoKBDrezM4ppxYWd12cLkFUq2zjifJwGZiB4nMphmf24TAzsH",
  "key5": "4PMxN1oVt9nhKuqbBKmes2Tx47yfq4ysufuRsF42pveuZHRbAHRdtga6t7g6pzHxqYG36ipM7LBpdqeSxJTjzPt6",
  "key6": "2a852XbcyHaqybtisjKeSjC9B7gpAaEn5sJuKg68mENwwodNFq8dUbLRMfJcr2SkW26uUWh8pQsaSUKReCQ2k7Gg",
  "key7": "JtgXZrqzX8EgZ2kpfbvHJwVuZfDDn1VN9a9Ni6EmZZBwLT2nxAYSF2xZsQ4Ho4BF2LufLPBjhqJjPMcuKsoXGGj",
  "key8": "V1bvBBDGRFgcnfg4yeXLXguoGPzXz6RYiXdmyiLNr9cETLQg8gTfcnNvM1wnWZrhdENaAdis1c6dZuAvTNdXi5q",
  "key9": "YLo43Ymqh22y9TP3MeXN5S5WPMZt1TJSLNdXqnF98Vxgam3swRNaaDdaKcd4HYTyZF8riEN6AdnLtef1DschbEm",
  "key10": "3v778DvsAa3RxeUi8F7scqZTobaigMYJ3bZEKBmyY62uRuyPgZoBHCC84T9iMYYxHh2AiWywKgpZ92uw13g1Wo3u",
  "key11": "fJHzDBNvBVos1RoHyB9wmT1Krfst51NysCCdxsoKm51iLMVaeJYoBv5aYaaNnLS7cbDMVj3aEVjVwGYxGiDzH7F",
  "key12": "4FeEBdwaUUvndkVTcxykS6Tv9f12YEAzpHYY2hkJjBhWzmpN5jcuzWkymLkDbB6Uopxuj5dBWkphpn6mM2R4iVX5",
  "key13": "4yWjbfYvfXDrGtZH4wJ21Pvg2QUeXkkeDCx8yH7ZX3ReBfNEGVqVm1FitNUGn4BKHSJsqhjqSxLe7Tr1UCjaiHLR",
  "key14": "54UXeqWiiiKqnmpPQUHx1BUShKZu3EsMpPcegsXyQJSem24KNzTF7ehEAtAMto1DpDkZ7BV6yPNBm2cq6oVY5URd",
  "key15": "U8iQD9cawZi44VFKqYWb2ptuWaGdSr7KkMCBuXkN5S4jA6WdfVKSzG26EfmrzFPE7SgHMQNuQpkAtdRVS9CsTb3",
  "key16": "4BVALbY9ysLkZW4ixAH17r7nZ1eN2ayzvpKEHv6wZJJ3JZgyF1Sc5x8C6XJD9D1VD4wBkmNnnUKQBTD3QEEhXxHr",
  "key17": "fshueKvTnsqCDsC2RgqCgCXML4k2HV3rJJKWcmKsh94oJeAYCWY3ajqL3N58qbN5JcJY7JPtNAsV1PxT5cjAA5Q",
  "key18": "4ywWVFMNeboAguJrhaJWGAEPyHsReYGT1YExKhgVWA1dTeALAegQh7JnSn4AFeGUoUvxH8w2fninhnaTGgS6DSC7",
  "key19": "26p76s4Q9d4bvfwbtch2aywkKpj92CcLjtQCsGoyBNy7oabWNehBJFUsxx8CWPDwM2wqbnyFs2yR3HLMXrqAUL8p",
  "key20": "2YndZRj3swimoEiwSdQEoxc76yfbzZgDnWTydZyepZkzXwNmo1UUkUoGf6i6hNj2ipzJtSPQQbLVJwAegGHrZg8e",
  "key21": "3mZuE4EcFMD4WAxq7op9Zj8k6WpppTE6GWpUNuieNVFimBbTC4YnqKXFX2nn24rVp9MgYuLJYmizokAc1NSfW9z9",
  "key22": "5UXWpB5a78oXZWQ6ZjvsKbgAXs58WGrfxArXiyyqnQa43upfFBCq8n2KfBVJ9Ti2GYP5fSxdAYTkE27q5uJHqVg5",
  "key23": "65d8qtcPZSicJYg851H3Dhe7yfu6SMiJDRALsxPHm17nKRSci48WBjuMQznvnxdox2XUy9ZnwnCxbdPQ3PFtLuFg",
  "key24": "2eZbJ6ZtnwCCY53J6WAvGC3GADXZGyyHj42sXjuzaWmSuTyw33faw4DDHCt2ieko4nZdmjnZRpTTxENzb4QJWECd",
  "key25": "55LTUbdPoVmn2zCz6gCBDkWHGsUd3oxjwVqj4Wq9eKw2wkERtqzemAsGubhjimiTxnvJwPU8TgTp3eUmDW2vxykt",
  "key26": "BshD8BsC9YVNBjdVN6FYmpqZJdLcMkqvtqCVfpSYJUsmrWuEKaP1mKvFSrXmdR7HrixMb8xtbH2iFYB7CkPV4bt",
  "key27": "3eWDStyjq7Y81wPJNaxk7UhXfEaZdpprPJGt4dTaxndUy7HTyJQUi3oKv1h1YfMVMmG8wYyWHsg4HNknAHwT6i5s"
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
