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
    "4HH8HChy1Ynr6JnVKbPxjbHtDuMTFoLDEwuyJT6x1B8CLM27hsgWXv8KrbLtDLFdcXRyZwRBPv8t1n1Egh6g8JSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VQhn81UaWdY7hzwpj3t7q9ydgZ8s6ns6sP2aDiUu3j4wQuWfs1ko85xN7Qs4EvU37RhWzA9voHaD5echm1RSTqR",
  "key1": "2ge7NYks6VAq8y2urRbLNoXEXovuQq6MB7uXejJ9YQYgfsdeTh3ComWqFjm6xuoExkwsUuLbcPaipQemwr1H4abm",
  "key2": "4gniYRzVjNjfqD1ptv5KhRCLgjHmL3PDt7RSvqTfTcRgxfRmSrEmhoKsU8c3CuxkE8HXFLg7twaJLnP3assq7raR",
  "key3": "4AEQdM34k1n9euMaXrS6utZSv1DYw8rEJ9g54eQu6ffABCdPdnQ1dVtGYUa4z6FGDsD61mhGkW8JWjH8PjpPnTeG",
  "key4": "3gdHaNe7AMLchPCcxA2Q7ssXJJvXA41vStL8YKw16ELuQrfiWVP7gTysYFmvyXnim1duRjYAtuXfJqswPhPpsHqK",
  "key5": "5Wg7ue2UQ7NvuB8RbxKVLmp6Cg66jcKqK5xb6ZFCnu3EKGfjpUWxeepXjB4kph2rZydS5nUdm5JktpwbnHcB88ys",
  "key6": "3xEY4pUhGrkxqtaQ22NSk2hwsdpX4KrHUKHLmcHVwLbEacqfq8f3VMg1SLD5twjeBTAVRb1WgygCKYt6TQiwBjMn",
  "key7": "3i9Dxz5rpjgT6jhi18AFsh5knLvQnTTDvLuBTu2UFp5Fg2QaJZCnDtjZ9jFksimX8CdXR8rzB12wtPXNwDJCqCZ8",
  "key8": "55Cc2ijDK8JiDpsdUgUMjvToNZ3VfvkXNX6bZjyp82i3HwWXLHyPL3uiHczE2Jjapnzzyf9FytQ1gFcKkFpAXrNf",
  "key9": "3FE5cYqdhgapWJ7gX5kZaVxoJeF4tL6hWHVmsBW59YZdzYJo98Ky58GP74Y1gtQWWc31EBA2vQ5LSntX3N2BQ5qi",
  "key10": "k3JSJPNYso94sQ5VbPKEY4tdEzRW2NZKhGgF7TCjUQqbVcYA5R64UwznxhBGitjxdschiTYLEJkdCwYJnnSBHH1",
  "key11": "4aRZjLjkFheSZsRXkiL6zbAMVD11QMjXeU4zvJRcJ2GpNsN39ikEQxDxy58gjkcHaeUAc5ydNCRgJsaDz2zVwj6w",
  "key12": "4Wqc1idXM7zfYoQF4xV946oCTLb5ZCTfMqPQ4EXVvKmofWCfjuZdmBS84mM9Pvw3ppPY1DaxcYwr2YDdGExS4ibV",
  "key13": "4wmUVuYANuTpUJqBZQ2SXm5QkWJeYgQ7cptTKe9rJVJnG3vwdmAiSJN7grzo62R4k7E4AchiqqUsHdZpKSiM5TSH",
  "key14": "2KSQRasGE3YeTVvqXZoFJH5VGXKZpkNo717jDwps6H2enA6VKMDCK3hFPoNSKFyBWLGt6km4g3pFNUaQzCL1W7r8",
  "key15": "3v32wm6cGqmHiMn2psJLUAk2emZxzUKvY9xjjaE8DyP3FGXqVGJF3H4cua7Qd9Qk4YYhSpKuW62e9NogADBV2ppz",
  "key16": "24Axh9NPn1j45AtsWZj821NmBaFKWsuXfgXXAUJxgoVh7KSVfgeor24XMaWezh3TzMh2MXPbG6hkieJuYsd2DAco",
  "key17": "45VfQpg2w9gSVaUpBwXuUQzcmeK144iwmq5RmRbyy9fXGdfLhqTd8HuzuCT5hVqua2GhX2v59EwrSTJAhwpVa6FT",
  "key18": "4JP5M5bax4Yh4ejxHFx5JhZwdr2jE3v34iy9571JGfZj3VqSx3omhCVa5n6odd4BGKa6XAmgbTx6MvAWRRVpHuD4",
  "key19": "5qqYHRDSreDcUZDgm6qukiByMTwqEgFLxBR8ceRDxMLUmZ8Yes98RTr48J1UhvxeJR3fPuDc8pumfGF5rC1Rht8k",
  "key20": "4LR4nZ6yCAfHNsSbcc4SoyMHjr68dKfKwEBVCvYQT8h6UE3N1dTNH4do1pBE3ycsgJ6jeKDJnEZ929RZVmDxELww",
  "key21": "4HUUoAnudZ49xj1tYbUhYmj9cBmfCM2vLEN8imwAfK1FLnhy4KeTqLZ8ZRRs6UQ5RkQM2SknxiGy6Fx1hdjJbjtz",
  "key22": "5LV3E8ecee6nSM7GaTfARsEjC3Qjrft4C7PWeB31N6MZbzZYoKYi9yZ2qqcjdwrCnMvXu72PFF7hLrooUKteitAY",
  "key23": "483p5orBgEJQqaNBPcPNseaTgwUkbRkgsMjX2CZ6UefUR9yBgAqFCmsQMLBVWF24NuRPGXsEPruMQg6DvTsD7y3G",
  "key24": "4AmnBopn9cGhSvLbZnUcKkqQE7WocURou52JCTor9sKM1HX9eiJpxR2qvGcBY1g3NqZsSvkaRvPdgtQcUE3MJLgf",
  "key25": "4YZqM3jAeTX3icTBjMzKzNX9tdK33do3Kyzydrtr9APVypZ6CFUQMrjfdTCgsXyV6x5ES4d4SknBk9kZJ87M1maw",
  "key26": "3Ca7UuqWb5EbBBFcrv9S15pgqZS6RPctW8yyMNrQmkEHqjyzvdQ861jZ28GvTAyCVbcdM3mZPPX5243wi8bTLPZz",
  "key27": "2N4aXEuCdHNjhcXcpZYKgYSnRj6wo1CQ1LdDroabVDYBXQqyAQ8Pex1sHzF3SaE6yXkCN3gU2BCrisZoZHAuzU6f",
  "key28": "57fb62bSR8q5XB544kSrHSJ2zo6F52CoMiBFhdyceZG4sHgFWmUVMwV7eNHPo69nrcHhu8NdcYNGPWtqL833t2f1",
  "key29": "GHW9F67gvCzASi9qvjAQ2ZLCMgodczsL4wHtyNmU8jKtD85bY2VrUTMG3GbxQfqKD25aFDgtbd2DhDUg5adk4mN",
  "key30": "4Von5agUwk1GPMK9ySVpJxtRHHk9VayNgcmoRb2uPFMqLhBkb8JebN5XqNawiSLECacemzE9ZaR4k7XhaerM877s",
  "key31": "2DRCtFn9dgU4yGtNmKCLa56qBsbMqKaCtdywZqhr8HddfNgg8emJxSaMLxhjzudTwsDZG4mmRr8D5go8t6t6Eubj",
  "key32": "2WZh5RJXmvC6WkJtDdntB93zqgqnKxwetax7X2pEniGu7GXrhHSRMG6aWEWSBdcTn9feVDGzqAFtVuB67MhwTRCx",
  "key33": "3sgonsTMQmjKVnMw1Vco8jgfCYqmXrBqeHo6pT9WsMFk9681E6F1sQ9M7qypMPRSfZVgzmC7mUZHyMaQVavHRyDM",
  "key34": "otJJ6gayN43qeZrayjLb8iM8PhgXG8Y1oKdowLsZk22XncngCxWg8DZYc8YyJ9TKHNCCdjo8rMsnwSwyLe78vu7",
  "key35": "4r3TgY66DxSwxfsYkU3gr6PMVTLvs8kVG7jmyeL9UWuU8yAVjTRCKR99MGvVTvfcriVNXHSRwRDem6t48WEra9yj",
  "key36": "2spAvGMCPtSsHcER2szsdpTiRWCdQXMRKp3PARMeNPoptBTqHfG5bfxy6pvV4sng7VuJqFYxGuX4Ry9QEnGxveUH",
  "key37": "3sDDN7gUxg5dScqVRrePZi9ytNFB4gVtzGMYkVyQxietZUtGaAxGBmAC7CMwM4TMtZGaQ4LnfVUEzNQSY9noa7ki",
  "key38": "2eyKHFkqZpCx8QTm1nd8gzqfSfRz71Aa6SXRkU9ngN1XJg4T1FaHNuTAzenAUhEdsgFnmwFFbxXzJUMgCaNa1Jpu",
  "key39": "5GE87zJcNz5vY2QWLKhLunLsCoBC4vzsATZXDbzaFd3zX8eMQVFpS5LnweuDs2xqvGPoBZ7pW3jCdpEsjWL2RWau"
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
