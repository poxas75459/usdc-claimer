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
    "4xNw7HBxW7JenUfCejKkDQMHFchwXiFah41Rd4Kq4qCkn4nKZuq56cpL4downpXWdBsAqXaEEbKX2WcEyKqHwVhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sabvmj4AAkAPQm72xHsKTMHs8kMAA3p72tKuCpx8iZZzKTM2BZe5YMe6AMcpr1bGeNNxuzUcJhrf7DLJo6oSt9r",
  "key1": "2Gy5Pxr6uvK7YY7UYABqcNzFmQAEp5VHrngzAX4nfsYYfbyUVZywjNjRNVRx7UxyZXHcmmrXrEB5eLvG4F2ywfBx",
  "key2": "Fr9TEMeXDPKwPS1ctQmcifaz7d4mYvoQa2xThBkGWicidFnVJhEykRmhV4A6GnPSDP3ohVQqxRrS49aJvAfQ8V2",
  "key3": "5n2Ni4f4oTVi1aC2z8J2GTHmvpD111dTJXNS5w78T9jpPXo6MMGnAsB6z1ADnV3q7hy6yTuSiribj266z8UV5gNc",
  "key4": "3MzCB4S6VkcVK2x1UJ4AiReoXPj39SFa26jNv9MFPmU5Wdt7dGqA1Nd41qtBQbKqLKuw8qedFsDo7KBwoGQ6skPz",
  "key5": "2F9rmffdE2fREDspwPdz8gafJjKKpxRZcT9JvMrz6Q1mFUFkTQ9xm8ikAbkMpWE2P2sfYLBGqr9nBQEjdAqnwXwz",
  "key6": "3hkTC3WDhHg7dZ7LiV7ogynWLwzUcbndxBVUricSCc6SYHjouofxYCgLUyzgGhVJbKHarTBFbSyRXBJHMJw2eQ9c",
  "key7": "49JWBBF1rm8mGHYUvKGehQUhd8f3rrVvnCj9j8h4TBwBWTvAuwBtDDV5hk5GK38ooH5JjwNQp2kBFNQ3wByZrK9o",
  "key8": "39vc4cxJkoMkzwnrAKxUaCcAqzFsqTTD8wHxhbTSaXgwkhKHmXSMc4T91uHwAwxv2DVAGaZgMBZhfW2sb1kREDJH",
  "key9": "4xEcWJ7EP43GLUupR6UySL4fxNBjm7YMa84GgbA8xz7DrUN13mLopoKrhzk4uLA7TD1ZDkXMhef8NZr5ouHKPBMW",
  "key10": "48quFp9YxyAfneFoEZUFRv9RShShm1ZqrN9cRS62UPeRTWGGCuYcL2yjVFpzNDBMSwx6A8j7pFh4pR6EMGettZvf",
  "key11": "21mxpZkVQ3F66Y2QVBWrnVPZfcwSR11B85Ytq1gJaHWp7vX4FfknaHMhAvmRztC3mS5PZWY3oCrcEASbLiUGRxGc",
  "key12": "5oZi2XTDQijkn3QfP6mve4RBoCKKrcMJkQqGfvGMugtFwYaNJqRr4sKG66bJfiNupC5UqRSr13z9qpwju4eYsg5H",
  "key13": "5CW5Gbpu8H2oUd8XuavxpscjkTytvb5zbd2buf2g2gWv2dxHuSNjstiWBWZAgwFCpnXwZxEBJpNF67MQhZ8dxAM",
  "key14": "3LszXKaPMFFMXXfuSYgwTmRjwb2QZJuMHSeECBt2FsvH7DkLzcufDHCvwPTiwLUALkkNg69r7CtrC9AJ3Wnrrf6m",
  "key15": "PJoU71cxQGchpcXMJoUa6v8hBJ2MKJcbC4vGWQKQxKP1YxFqnkKVLVB3jbs6Yv4Xknmoam9J6aJmYHYdWaP4Jak",
  "key16": "4siGXeSJccmQYtyLrdATMSWQBjLhwegvY6fgKL7V7mqZWmfh67PP9ZinijuvdvYk6KrjNnk9GTX1wpmDD5oRCCjr",
  "key17": "VA7nd8eXGwiXJMw3FQfthtBnQmEZTCwUxPTfLREuSMn9TrzwduhUC8EhA1qN9y7RzGa3vUa9BNCS85kpSmnMbM5",
  "key18": "5MY32yjLsbXaW1N9DpBiCcuVzUhbCjStBkA6dNv73WLWHDze1C2nTLuEqoQkS6xgpQa3VqNqSoDvjgThx5yeCQ9A",
  "key19": "5k2wpqeMyaMkZ9djugVN1YqsjCUH3JZ13bSoviQ8GYwRXTCwRmnzDdb6jSNgxLLf8ki6gVkgH8ksft6WQ6YqnWEr",
  "key20": "39KCAkR1HXk6spfwwgNQ2k8yQLmz8WxVW5JgXQTm5iE8nsjFAod7JJJPH1gZnH54g1tcuAHevsLzGkfTrCmAqnNT",
  "key21": "LCAKmYfHX6RrBfD6F5Wwxe9Sg3tCXjyGoNPXfdnBVFs1zFJfHhpMyKVLoZR9hEFR2PxDF6KAbdAd8idQBf9wsCi",
  "key22": "adBQcmRDUG5QqTwEA9AFchVxnBm9ZkGLT3DTA6fVUKt9cREuJDjArxPcfBpYvH4rxm3foANEVmCiWLN3pngMsJV",
  "key23": "27jh6FViTFdYHjrexLTbZ78nrtNaQ5mbSiGKLAknDhFhLcEFtHiJzLtg2ukCCUv3h9xZKry8EcU1mMjtrNTreVbh",
  "key24": "3CXa3cwpadV2sPiYiK5fCvWtumnEm7YjZ7kdjsjpSbUCe7AwQ9ur7oMmRxf2YoZ4KD34dvqqsgUQBn3yC482f8uS"
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
