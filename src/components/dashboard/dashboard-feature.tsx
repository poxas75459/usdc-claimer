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
    "5ByEe7FGo4FXPB5S8VtxsKxze8fzJbpJgJGF6BEYrwmDVp1YQUBiYrsxCq4Sw4j48WKQvwhEppJah2PkKQdJdWWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ymTc4qYR4GyauxiD7NVQNdt1b3r8GWLreUnjAvAoaSrZP1xFYGZup36yr2oWxgGsPsbyb1gQZxGkFGTYsvfSKQS",
  "key1": "JtNwqmxfrzuJPrYXGbGinMm6YFqTp6vx8yr6BqJarmcGuFaniUHWj9cdXq8NRJJ6nj1W36tqXHUvqBNj73WN37W",
  "key2": "odPBHtgtfB9Vii7tFmSSLb63r8qTGMm37WnxQGnXLTNDnHLtc4y1TX5NGNhf4P1iaojSx4FZGTxacNJvhsy69wQ",
  "key3": "3CgF56eySPo1DNiXsmMXLq1dSPrnqRKB37DWMycJ7oJ6xhqdMXjmTwjKvbNYo1b7mLnaMXXTCSYunkipJCAvCByU",
  "key4": "3a7z8JB1bi8VEx2MDEPrUuatqAeD1XwA1FwwhpNZzSzZPrcR9UwVQuqaaLRDryRkB7ngZvb1LNYtusYVC4xRcbK9",
  "key5": "3b4r3zzeoUJMW8bFUMyHB5Pmb6MaQPZQqanyzGLnHyTQfUpxTUrgQqzCngRitQCu2NM97ticDkrwGN2pWKmQ6HuY",
  "key6": "4KwnEUsteq6Aj34A2MQPpJEDoTNJrXp1WMhqAMDw8yyXGVmZFHLdpDqQvUG4uvuu8m2oG9NR8CrZydK9m6qoSww6",
  "key7": "2r9C8i1GwswY1VhwceBn1UoQcz52vLEGxGbeg2wC9oAJ7Xhod6vWt5mCSjwqr7ZzXXuXf5ezkjGZFZyh9BDyjTbM",
  "key8": "2EnCg7uJ3UHYCB4UoFWCBrsPLsL4AXVa4dhLnFemyvJxBWDkZ2PMs573J1dBFfKKrRQ9ExLo1Vch1LZo7t3vW5t6",
  "key9": "5SiTK6rkY4cRPo6mV5zmgtLMr38WkXi5p1iTv2PC8vHLz1BFWicUK7V7SXWd9qaMfUM1hnPhqiibGkk7ZcK7Dc4T",
  "key10": "5f7i39EeGawSSKK16Psp1jrranqfUhqETH19fJ2Jd1EDGnzD5G9SUg8hbAu75ogr7edkySefEDmiPYmcnBo7zZDY",
  "key11": "4K5rArmV7sVf2xXRVp9962zi1gvjxF7CF2mZy2ok6AZe5KEkn7jW5wg91C4aPMmmbKXuAuRPAn8cyrYkkEpZByEQ",
  "key12": "9Hc9e77qK8Dz143469pfwmdzRJi9K7Ygdh9Fpcv9bianmMZNHr7AoKd9XAHXwTyUNFN8LQuWV4oLe2CN1u7JFbZ",
  "key13": "5Hs1LuJ23h926FtmrAZmETnzs5XesHLaBsB8H7ep4XQfctd6H9eaRU6eLMqJpUFtpBGZKSLF4USfo4JzmmJqU9gp",
  "key14": "5cBWVxL2S2Ve6NnqU5xSpJGPsNA3wYx8ovzMaSySvkMeb59rRFD6EvBqN4YwLhRLnu8DehaRAcZbSLpVAwFH9Ycn",
  "key15": "4UWGgabFCEhtbYUiCMZwSBGzMDjZNjTLtGk8ypudPqmYJLX1ABHfK1CcV6ppCpxgcuiCwU888PwzND8uT3jk9gxc",
  "key16": "27xWVfKW6CJceKh2XkXXfgwDuVi5ZpB3tt8ZnLa9HXMs1giEYoJxfA37u5oVZ6vYymw7WwSJpHTjEG9Lc76B3HRx",
  "key17": "3mbNtzoLXY3Sj2hz1mVu4qwVV3mUbZ2NJnkkGSJHvyWWdsyqqWu3a7KJAVjAgrFLH8AwsNh5WYaHsToXcrj7KHtY",
  "key18": "3cLw2zhygXRoPSkK52urFjq5RAcT4s9xhKP7BByo9ssvHWCaLxW42Zn8noQv6vkAm22ctsicqNAiSypo6eucMzNu",
  "key19": "2xGA7jHUyXsTiDrDqF1MhtBCZWovWWVD7DGB4uJTcEwNzux3Tmig2Ubje1E4ejghKZez1ji4rLAjXQZgcmyfjByq",
  "key20": "5e3HhLVZTzywnwWrxGqWQ2Jq9nys7Zv7BDj6d2maTQozo9JxKz36bULradm3nyUVjFqQCSuXb2rv2Dg5qZTA2QFE",
  "key21": "54F4grg6HSZ3YabYhTh7C45Yei6gP6oa3yZjEkiTTE3sVGjqoNEYr7yCEFpM47WSTecSXeoSSTeFFyDJRxhRYQAJ",
  "key22": "rMEdZBHqEhtpzSPuUosyLyfJMV33toHKTV7yQBy5eDSRd3pikXWrrpPRUDXZCY85WnLpnvkUkBt5rgKeDLhidjj",
  "key23": "4x8cA7r6JezLsyZWVnwfYWFBjEsAfsRh1pSdcCLAKx4XF2rCXMJpWpjRHjm8HiA6V6t3LYRytVxW8wzKvThbMXZ4",
  "key24": "3SEmG5p3Y7eZEaViUfJzNM4yJb6moJ77oTEFXb3HGMK2ni6gDw5JyLKMYkTGuuUj5gmE3esqQ6YjcFE7VPJ9QY8e",
  "key25": "3MuRBeVA7DVWph2dqfefUn2j8gD3u8zvVuLWbdASnSa4MbfKyYNSvcbViDYL5B81umZdsoARMXBZnC1aomMeyEuX"
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
