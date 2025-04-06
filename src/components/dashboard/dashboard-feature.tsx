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
    "2nzq615zuTQ8HR4MtyvrxgqLJqTYzQjLY25D9YoGAckKNH6qXd2Ek4dLfoV2AGpoQQJRAYrSkaiVujYzL59wi5fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bfJ37HUowRmurLWqrk3hVe9t4uiAuz24weaix5wps4GDuuiiTMSQzciyXV6uvGqX5uSnpMThwJJdw2z64hcYXju",
  "key1": "5VjzfHFd5q5qmJvw2AjMRxWtqVwwBCtDB5W6JVbgtQhMMUkBKyKPvh1wg4uXvswnKrnho83d8KtvczXciXZr2Q3Y",
  "key2": "2oTqbuzcGUjXQK7HJd8K6F2Dh2bXVUdis98i9Ciuvnn1xdxExdeinSjRFycvW6sQVX8xM9QDEKZfGRoFxhFtBwRF",
  "key3": "Dk8RVeh464yYpDtHEkn4U5rW7FhTSLZz6kmZ7njbfLbjpNYbUjKoPozPu1LSYV7TrHSC9MgDHbqqUbL6eWsKS9i",
  "key4": "We516mX6y2izyn2PNrBc926s1HPfMAmvfBq4NwbUavpaMV7TQq7gvE7SxDLx4wZkaU1Zg5q39hb3WqkcYVJEo8x",
  "key5": "gKooM1FwQx8QVdgx3KeyqAaUN5NcTRmxcvcMwfr8qhyqVW3XsxrY7z2pd6Ck6PeYsSVH4MwQZR3W9hV9eoMNv1e",
  "key6": "3LL7LkD7GYNdAwAbbhBf8dgiADnGtHRxRRrPH8jwCCCjvPZNNcpSczbzMVbGidzoa9FkQj7s6hah754SY6ZAU5KA",
  "key7": "iA5e9AofWCdR4PQjt5aNcyT2WgSKTkRXHqHMT7mmXTeFuMg3n2WtXCHVSt6UjupiB7vyFfzyas22rgf6DgYpJd6",
  "key8": "3tccUy8aJRnYnRH7Zy3UQmd6wXLeoQyFvFLwAzofmRteLzMzCSgLFMASLikh4gcRvJnSjKFzrRYLvEv49zfCKpyp",
  "key9": "4h3oTQAMnvb5iiH3q9qXe7JVPXcF18vN5ZVxdH2WgxdujqszCgaph4Rctp7bWoLgxUYeCJ6cDVghwVB28qHJHVj4",
  "key10": "4CeoXu8aSeXuAMhAdNyed94j7YYfaYtenYfuCTiaPskf8Qajh5yFUWWpzXKSs8V3Ybi1fnB9DeQX6bEFbFEsmBk2",
  "key11": "2pL7a2bQQBniTQfcpgjdJUKWTbmMKpcL4phm57HhCNKsbmtpBeoGUQ569EG5j63xV2zRoeXDJjWP3CDh4YkcMweA",
  "key12": "3VM2fE4MvAJmG9chouhBm5Qae6QEYB9Tgf9QaatJTuabS5ddV4cg8RgMSQNCBeKdMMdyc1rEeYMYBKuKaKVFYGoi",
  "key13": "4m9UooDEVAQYJsmbYsF6vEKhhDbWyP9aLS5ftr8xna8dUbUT2S97eLnTBUhTSzMtrDtc3k1dXmCuaJeV72xhSXao",
  "key14": "2BRW5fTt62229GasRZDzny3DuaZHtPP1geyYXz7Bmd3EC3anefbdcYyAV7zdFuzv7wu3AQF9cc7K2yeG38FDi2Lf",
  "key15": "ae9P6D5X8tbw8zSRNbPya8vVSK7JVnFhyiNDmLh3zU1ihxQ6eUCLAGFNpvUEE4f6PfU7YTeBQ2LXPHXhm6EMvrv",
  "key16": "4FHdrtqBCeJBxj8538dxdzqMxSmkVisUpM8jKxn3cn6XXqBt3mnRwpufu7gg3Tt6poo7v9mLMTFXTLCYKDeJN6PL",
  "key17": "4k7ZxGdoKD6172rVofSkdPoufjwu2vkSKQn73mCkucnWoiiRdkxq27r7w6tWfKMgqi1dxEQ7mjhza6GMeP9W37vC",
  "key18": "543TpYoQ48fBxSgWc2DpZ9zT9ULkrBeptre9nxnmcdvVbrTSNad31JsXZe49M187xHUNFGSMvGJQqTS3X7p6sU4",
  "key19": "3Y7iZJisnMgwsvK9h1iHiDEiBp84xyUNnXPHak8aV3SKNgEAd1bMGDxdFS1BKNHnBtbZxgjPZ9vWDaGcjXs8dPj4",
  "key20": "38PM9juXbxUd9hF2uoTB8uaqZgWD68i8xL8FEGRtuWNmPJn7AwKjNYBrhFV6RAizYSKPKLt1Rxnc4rfb5YJUBHQv",
  "key21": "3qCRkutLNYrtEsLmMRoMVxDUFxdCFeYtkhNpx1HBymqu7LsUgv7Uxq2WhSoVQAhF1f7B8UTZsT1SG1nPmLohfLSU",
  "key22": "4Y5KU92FLt1SThvtCPA6ZsrdQCAvnscLKsZNMsCdrYZhj6cVktWHuiNJgM9Zs8xxw4yv4BjBpuJp53HmmkdDzexQ",
  "key23": "4tw5253ig9PkNHFPSUcogbx64x5KUwBQJqQjwJBSdq9WDx8Pm2Tk4fyRThdNMcjxsV4BgkzDHahww5rZMy1CSXjC",
  "key24": "bBsPCCyXCvnjxTu5P4ZNwyL18BgqP3tKv3uLnZRtPAUpW4tkPXxFwdHVQ1LjGSXWnUAdMY4VdFzwX2CzbNa73AZ",
  "key25": "2mgv7JTS7mTyaCV7gvYiVzHSCe5JeGaoCZYnxT87pz3ch5jo5c1PFQFhiyrRAreh4eYTAyzCbai7wymTyeuurh6d"
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
