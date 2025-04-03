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
    "5X2wVYxdi9cdpKt5bJdJ3UXBzAj35RghUbvn4qVpcxmJ1SKkW8aQHDcLNTpE1LH5wWzEdXpnZUXCjto914b1yZ87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64H2j7SkHpe7ESmvAafWD11ET35TsdD5m83hzRbbTQ14Jg9mXMJeUKyccqBaPFyex6euHYumgkBGBABN5DsN1jtS",
  "key1": "2HXXhHnxUgpaCBnGYtmhKqXtkmmNDeJ4ptjY6fszGQbxXz9kgqbC6TPj1veuBqFJL9N2pSyAxA9CeqkdQEAEkxLA",
  "key2": "zX3MQDjU3XkVcN1fu6puKFLY3riwXDHhVdD3o8B5nTMFAdzUNtnR7iFpW723doeHXjGJXMTQ64tNx85kwXrQ9rB",
  "key3": "3X27DVgYD15zsMgHSr91XzyfUbczyUed3f56rPXBu2ayFPaRGgVw51oQXvTS5Y52hZp1nDqTW9h3hwErdwqSMUyX",
  "key4": "5aJ959bWZiVbLWyEUoTTRARS3BBxytZtj2YnxeHogQnM65jhPqTcYDmMcJgWtXLg5VRkTzti1pYe1LZhGkExwFcA",
  "key5": "26vCBzAbxbrEGCJegerZVLCAbthbLXF13kBjsdABJzotvkZpip21hSU3ND3wXW1rQd6MdCL3iM88yxtjTm93J9hh",
  "key6": "3rwJMyHPs1jRaSUtbfKZGN4NeRaCJWVCpgz4T5tX7eSwjbDTU73KymLQroG3xtMAo8mSBXwChzP83DmNba93PaYt",
  "key7": "5L6d1AaRYjE4ELBktpmY5cFH7zpvvwVcZM8YPM5hckCgTxvaKL6ckUadum51Ahpp3iaEZH7HYcEWWDQ8Z4jLhxTV",
  "key8": "5Smr2xKgysvFjV3q4meMC3qCfNmAqMHv6a5Thtvqm5v8PmUBNPbcMWn1eRcDgqCnks2hQqJuM1MjS2nQBFUrinkQ",
  "key9": "3ZyniW7eeMWFnE86g3fVAYYo7bBufSNFpCUARkXcURNEnq3H8G5ZYLEyFbpM4ByMine7TwhmEgqt1c1kPPwe71vu",
  "key10": "3a7NuF1huxBpLksQH1FhmEuVzt3vggJWff2w6hqLwW4yquJKoB3CLvyJAJxzy14SADddexS62mMtWFBCo2SDNibz",
  "key11": "5K4676gF5eGmNiwpMSv9n1jyktXHgSBx2aS4PMasJUiFKwDoVUhyCsFxPQmzqgmVqJgrHm4nLAbXAauHaRv45DkT",
  "key12": "4bcLXG1FY6GUWfv7r88BXnw4sEG1qz7za8QZHbtbK1gq5tjefwAxm3kQmwidHXMtNv3bVa84jRmVAKXmaSYvFU7A",
  "key13": "469dsxP82314VK6VwE2SfiVSk3D77QLUUxHeVGxPiiR6vtCUsLhnRR8FkMxp8yd8ahxqGUK3BY89uk1pAjqFUwQr",
  "key14": "aq55TsDeTGdiY6vsvvzCm4Pk5pkiSRE8maR6ihpMkc5r6yQPLRmKbzZx8EB3a6XaEzwFhQdq642f8ujN8CGrZFm",
  "key15": "4bSL8UhZ11TgPyD3MEtkcFTPyg4JmSos8cAQwizjeALouZJE9pzzhzeKDgDJUzRcr2aoGfr7wZ3A9g3iZUayCbBm",
  "key16": "2fGUWuviNiZeTBwL7Ei9meswRszKFPPV6fJ8KNswqnboQvNUmRhm54PEfec6VT6vR4m6eoa8T6DS9R366ikCr8YZ",
  "key17": "3Mh5v5C9H4KhZ4NRNwNCshJKjKpzzT5YY3ss5dnCxBTnZcQDybgFFgniqgM4zDoZZ1TQVi2AtZYXQ6Ft156WWhnP",
  "key18": "5iAgkcZehu4orfhvnrebcL5G84Ed2t9NH9487EdGcX67uoR5vU9VbvU3VGPtGi13BZGbG8BjBUm1CxighYXz9xyg",
  "key19": "2fvdVDSpaDrZec1FAhdbyCVuvzxSmZfGRZPA23XQHCQxLkWohdfVocH96WkXphudNtxQ5vS2vyWxgTS63sHD58hi",
  "key20": "3AXbWtnyrmFByvMr1aYukQuNBxnjn7aRm3cej4w1BU5YvXTeA6XMGjeP5cYfrQ88YMzNAuAfZNhMfHuc25UktSXr",
  "key21": "2r5ZTXw8GWLKnWu4SiyKZ8xQuBdKMkv3YCwHCeWCtDBnRfKEmE627d22WUN9XtG4DmhyJjEseEN8rVru9L7ZvT44",
  "key22": "3Qmrv6XQXxAvhEkhm9gPqBAWd1u4wV6Ejrwxw1UQmK96jhFXon971jBhf1ug5Rg6UbwRoekz1tPkBLhe3Vz7P9JN",
  "key23": "rvooJqvg18srm7gG3eBp6cNey62yb5JtYAxMtw8TB3z9QqE8zPyfQobppRdGpo5w9Hyv39iPRSqzqbjrXFEdVXV",
  "key24": "N91RwQw5nxk1mFcqQ4G98LsasAcSx5dsCroGZzwBF8RVjDTutXknJ6JUNNvVE9obFyxod8vSu7trf8Qo6WeaVkg",
  "key25": "2CJpCzosYoCk2enXuaffXEShNuhd79QQthQUUHykxgaWFHhmR8WkpRGAhnVk9yyvyJNP2j1Fejmd2Yjighjw2cK8",
  "key26": "3GGBa2VZQJuJVAgsqQJi8w4LtJ9wX9Np9GvtnkT2yG64Qc7pGzJRsdrp9PVsU62gpYHHuXxWow8ZncbvMN2jsZLx"
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
