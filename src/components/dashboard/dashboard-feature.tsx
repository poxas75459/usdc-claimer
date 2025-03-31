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
    "ic2obritXxic5ViU7NksWW4xprSGPsKyicX8dqZTf1K5uCg4anafE8GaFDgP6NDY197rJtzxSRrm74LM9dYCKyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U3JkzVZcWa3GX6kyXNcJfMF2fTbAqq5MyUeVQMJ4UHSCyqfLYXA6RLvbncbaxoSibWpFBfL4rYxEwS8gvXsxGJ9",
  "key1": "4Ns96bG3CTivXQrYAY56d8pR1j9Kj4bnbnyAoLQGxcut3Jqm3wh8T12aFFxSC4mEUJ7GHGUtTZ4DHJKBBM3ANYGN",
  "key2": "vhGERE4gsQ5p3kZsrVZD4Jqj4bZ2Dr1LvbVzQahpjJZhoNdTP6K1BTWNqw93rh3pmogiGVw9PGYn5w7W8nxXAG6",
  "key3": "2BdFwjQE9DVAGefgrkaSNe3jxKitKEQwXcVTFzHEFY1pZLRjB2JaDKRTYdwSXut7RAtjAm2x9XpRyqDfL8p3nSGv",
  "key4": "5kpsGaPrSwYGkuxUmAtgsffQKgXDNxZyKEgxYdqgxk3qwF9ApFhYXCrJ3pHg9ZmynFaTDFNYamvWdLqYSkk1Z2At",
  "key5": "57opGJuH7s9jRRHAmSDDgdxJQ4GfPwCvhx8RbfvFHbAhga2Mr61Ed21DGwK2uBm7KrKhtQZQP7xG1QwwHfHV82cb",
  "key6": "3LwndonZwfKtr3LVxaG2YZwvkqTysa1oNp2L78KVKHw6jATGt7QPLg69XKW3NQV7t1faCUttiYD1A17NF4hHzdrE",
  "key7": "3S19U6Xu4qqUmGt6sjCt5KQ5BVqE2PB1sjGuNbg6oUELSh9FiMcJS5PwgHH4nD9C3zw9WbiDgjk5biMTiGHp3zF4",
  "key8": "5AuFN2t19brKSLGqc58yvD1KosGTJqMZL4AijXso3D7Pae8NbpFYKdsww6z23BAPxcoVNGFnmsGr4LCbHfpPXWiG",
  "key9": "2BRA22quidPNw4TN46htKiWvX5GEk7iwyJnRg7cs1KFtDSy3cCmXKY3S61cVpdfAYhDqsFyr7xtBVCe2XcJYTiob",
  "key10": "5UVX2ie9JWtqUDQwNEdQuTXXpUUKpRGo1KkLDZZDAsjtx1mYn9FBzxLHMSjaYJdwfwrAjNGenbAdECXusheAovrx",
  "key11": "423P1ay7ETAPvSjTxFc4DxaBuynwaNHGEUSQMfYnyFtERYYvZ8QX11vTK7UBvRVrr4vLhct4iLtDQoShQpVjFrZY",
  "key12": "4vDShQj6vceS7oT1evvRV587hMsvTjfdH1yxvBFgtFU6qtgA5wBjs8xwGpjqujBa47iXGLXBPs7LurnMFgtvHbxS",
  "key13": "4NnUGBi4ZJ5WbJpwPNghJkd1zqWkmF2ne48Nf92EouyXtguHyN5MdaeyTNXrZAT7MoigvfTGhxtkY9KJxsgnuJ5x",
  "key14": "2hYLLuuZt5wQ7vZ3HWKLJQVP14oR9eZhtMufUafkAXMCyEmyU68BsopPksH9ofRvkDtHwjci8WioNwUNj1JnnSNq",
  "key15": "2EJVYDf6jeQUyfpnVJrAHP4eZbuXp2jVew1KP52JQWWzxRi3xVWcfQTf1pcTX7ia3qDgaoUtRrPb8ytZqEfHvfom",
  "key16": "4sceyQBn1HYQ4yth9wurEb5XryUWSUkbm8LorvPf13uBdwFwK3u2CunEuvKG6VuMCAcHD3tB9dwY4K75KsXaniQs",
  "key17": "3ZUxQ3AYGKf4bi4hw9QFKodGYgHJBZ1kTVP1qnaSmSngMZpPEy8Fsw9H8RGmL9G3C5wkFy73K2ka74noe6qybSzq",
  "key18": "4V5E5hJ2bQJCyQXWMWiTvey4C2Y3odrRcFnEe7fhEqFxCEAZM18UtnHzyay4Rk5z46DUxCf9GnKkaMcmK4bTjVXu",
  "key19": "3xbJVDKsUtpHh8gLwx8N7asNSpv6a7A2NELk1D5KxUTRihbRr9JVX8tjM1jJvEggXJGsF7ACbRxunbYqCfUZvtyF",
  "key20": "4cSQ5ebW5jkEH1h2p3B4zKRtUFP1b9nyfZxavz8o4zq5e6XKnPqmWRTHhrbkMVaercRTVoCPU7s5b5M7PvsBePpz",
  "key21": "4HHyq5J59orXEBFtkx45VnXXvWRVXJ9mRFTfzxnQSgTwWatiPWqvJ6pti4vmRGL8gj6GvnBJM4CHP2SPfVtQLrqt",
  "key22": "4fuD9GivpcQoKmUnQh6XLtGuy3Ka4AaS378PF9BKDYuLyHQjji6Hfgqf2Qf7LhhEmoik7Td1drhCTAf2LFnU2AAA",
  "key23": "27PthbFjivtfx7ehtTKqrGEK2QnG4WLHaz2jxpAEW2bEV64uEj4VMGMn9UwBV4iaJjWqNU1SgekpwfywN5mMpaLg",
  "key24": "A9K171ph54atSV7dg4VZjxFQWQEjZXJiNbi4YE1YUt1kZw1vHiqs58NWBTthfyfPMnnuQs2p5ngQXxnzrPaJWoa"
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
