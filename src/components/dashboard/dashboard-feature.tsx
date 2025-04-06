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
    "3j9PyqGBiBUvP9DLrSrUApctJxGokfquCZJQqUAhRGb7wvLSKfFRTyAX4e3PPuW8NMFJEBqcuBtFVf1vHrrzpFrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LwyGc3K3V4izHzhdJi9NKghfqT3QnsssCkdiBeqE7iZWVG37jj9DnM69gb6yrn7M7RMivdq3FzRDgYJQtRcDczX",
  "key1": "3As6axR7T9FxKeiYF9KAkq5rJGjKFCJEPUaCWgWpmaCAHXHXeG389PDWogMeam2SdeEuCxjQBkkBRczrYAaVzLMn",
  "key2": "3YoEgS2Mu7YSKpXMR4s79f12WY79UiPVyKTS17tLiqtPVqk7e8z3rwenNng8uG2raC9gdJAivEN22pp6zfuZUNZm",
  "key3": "4QYPEfPYhCXsBvXQ9NnPmUKE8fLjkMGG9XCGe8jNYwvp8zxRw1NHmhHCq68KTN5ksq1dj3J5CNod2rt4bfC7UzD",
  "key4": "5JRBGjr3SsUwL4DuShfHMgr1XaJBETmcNWuVM3Xg6E3XXsFoeqi6dnid4AGU4bA8se7uST8vgFgMonWiQCLR1azL",
  "key5": "4yp6K2J24Cj9StgMHRrkqa6TMvZ4PCJP2qXN3jgkhovnPj9HB3Wt4dMMmmt1Jukxz6QSdzsivyTRBMh1ndvGG9pb",
  "key6": "3BrithCFpehFaFBrU1PL8Xk3Y28nVmZWrZNT8UuF7SajQ4e6UomXcB8Fei4igDd4bT1fVnvWJnQ4zmvWXjebaUoR",
  "key7": "4tWV3youcXMnVP6M3yQxC7Bh3BoEHqCV6UbixgFEcHcTRLAMv3LBPL8oQGBA3k1jaA5STRCDTtzj9pwGdq5Y5TKo",
  "key8": "2nLKNAdfCMNPFoNmNXZHuNFm2SGEQSbnXd1CvbHZGxruVsb9zq97Aev7WEGTKeYgd1Lp8DLJdSgQyRqxFi15r297",
  "key9": "2P8am1pAJQ3QvVGejc6hiyUfEaJGJsh9iUSsUHdgbnQxjiQyhgRPy3VRRLheghfyVR1Zh7ifqYWztWF8zzHaZjtY",
  "key10": "3nRsbU2Sm3oNc7sxBHTaP8t2iP8NcSEtrqgNNGujjhdtnEiFiYV1obqiwtL7m35uyJ1A41wadFKMVJ7oSTGdyVmh",
  "key11": "fFMLVBCtBwJJUyfYhgeKUxWBT2r7UaKtbZLiA9K3rVj224jzx7tWrQSa1aCyuZnFMpHxr3JxTnf2cqTgr5h8imG",
  "key12": "Vg3L1mujA4rVamMZhspJjR7JBKZXgE8xuAiWvMynLbNN9SHvChiwvXqzkiYM56bfCPh5XYkc5jDHsT1GFitbX9k",
  "key13": "2PvuLZMZRGRy3AuDKNj2ysb6gaZmgrpsDuRMNFTh14avMGnY8GBs6jaJBYR8bgD9dM9mPF9jwMrmcPf3F6ywicGb",
  "key14": "s31VU9WMJ4AXjBmz3m1CnjDmX1WT5r48ANe2Sp2xmi2YZ5oZFgZGEwYP6P6tbmNW2UcUQKm68eef3Pex97Bac36",
  "key15": "E8asL2kagt9P4SZseGX2GxL9b8vuf5tKeCHzwcF7XjEidXpEuutChFi7X1gR2Afq2Rt7Mru7r3ByA9ka26GHMyT",
  "key16": "2rMjEYqeydiGnEMcL2hxAJcFmnrNipYgbN8h36s4VMgcCyu1485Zm221iWGdA5zpwDYiUUmc2YmDrBUG1pAso6Jz",
  "key17": "4MaDP9v4B3icgkMkvbq3eUEJG4NjqNzqPNuDtndpuwvUDFBmeRULq47oyBouE6LYNy4uxhoYAaBLppDaoavqE3nm",
  "key18": "2tzA7gvXrxdYmWpfToWTAC9mtDwgjHDAATE3HcUdb8v1V7c1YX5YjnJuWaJhixdzQqoLEVRrwKjt26ugdfxAE26b",
  "key19": "3px9m8UNTqhGfNY5SJtkcgLNqkf5snsa5t1L4NJoFFbNGER981LwRkeo35hTwrnWACmK3LH7VG5uFSowzy5wwHv8",
  "key20": "2agfnY37iU8TxnM7RyfgK7EuRyKcTW3it3Gh7W2JG8F7BdM933GnnqR5PQaqpFNoKDehuzpu38LEucXq4VtmZgsX",
  "key21": "3tuc27tfbkCiMD6UYqhRsUPXP1HvfvLXbWvg8qvnwN2tRJg6BUH2SpDNJQSxsyuUSersEqjXjUVfnZvygHZUCNn6",
  "key22": "2dn442Q77s7My9GbM4SDcdNx2piVhLM2nqK16Cz7mqvwd2FG8QJ15zh4VqsPLeT4JBMxM3h4F1aHew3NiWypGxDQ",
  "key23": "v98nbs7mLumzPaBMAdNeWUFqh92gr28eUmWEy4zTbQBx1c3hn3AwshSfXm6HuXjt2awuVdCPDxAnVwo6Crm6fZH",
  "key24": "4udD6MzLN7LGdHkELkfeA6FsuyJXCYcx9r3wWghgg7ZahmeRke8HYfw9i4RCGpFMjnthvERBN41yhKg7Ma1DEH8c",
  "key25": "4Q6cbqGghM9duYBEaPt6hUv2iuUH6ZQKuTPbFbomKJwHJoP89GKS9CDsr9TGLZAH4cJNjPY8RizUE9CojhRGgXCo",
  "key26": "4iRx1GyCGNJPdKqfnYenqUPSyamXSBE8D44gLZ1Li2zD1drE3nY1QDhEpNroJM4F2ARyTZKUpbeitRNBXjt7wV5i"
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
