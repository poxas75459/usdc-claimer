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
    "4srLW5yRnTFEatRWuEaeNPrFMADomuqoxkpjvhxxUQFPYNxAZ3HhwSzxtrFY64fh4EmXKs1RfEwt82T5x1LsjFkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DJnYAvHGnN2LfEufWVjMooYy724KvLL6wkgmKkyRiY2MXdp7NkbRLcw3T8WKqLFonCHEHXA2kXsfFV52V8hzWN",
  "key1": "28xmoTDcCUnSAGPFRfpkr3jXfDkQhHgVY6TCpCTYpbboWGmXBFKMSgsXfNz3P5Lfoepf5BfCBFordm8V95ZZ5RYx",
  "key2": "4F71C63YoaS6L6weyPB9Srmin5eYtA5fRfrQ8z9CJSaB7jH8R1q5JDrMqFUmuCqkzt3WiYTM7MSsDxf3fXjTmhg7",
  "key3": "2ZMvAKSUJJCGkDwj96VC59jX47DNWqqei6HFPB7kgzVxbctP3VGn7xq8SVRnhsKJ3G9Xr8W3wWRGu8fxCPLcmrgD",
  "key4": "4oMqJnns7wdsetwRdPfgLFD2T3RoonDEukq9d64hymLbkuPdhtWbo6ZZMDAURUzpghbAyrLJ7z24aUDMXDuBGf97",
  "key5": "3sqCcgBaLrkc9t6sWkxEhRV2Vfw27CnuAomCq6DUed9ZjEJfBgamQmx2YarZ9ed2QEaLstJ9tf7r2KzUbPSz4ckr",
  "key6": "3Z71dNzGXaCn5qetdNGCyXnTTKpDtz7FvGd6qWifiehRoyAiC8Y3GEC1SM221oRT46uc4yWvV4Hq5xraXpYi2nEG",
  "key7": "5ZPuY9ciB1gb4xvYfMNBtXSo5JxdW9vbX6ackQBbvez5ErXTZ2Y327TNFeGpETDmcz4LhHMa6TUjF52KDtZZZBpb",
  "key8": "3Ef12QsxWgQXvcF9tenYE8m1wAtXq5eVTBofJZgMgTfTS3shCovpq9dtkQawjLhsfGReqaGtHQpJHHqB4kfvm7Fz",
  "key9": "2mLGoMyunkcuHzx39wdLuLuCQzssSv6QCavFybHJpeZjkXs9VYbFSr7wwXJSLtPPvgok3QANfvcg8bBwkZoBNypq",
  "key10": "5P5WP6VvjD1makMqzHK7cS72YsHLswaAGzsjsXHupPj9vQNK5p3Pmr7b3kJF271HGYJkaxatWcZo6VeRXC5wj6Hu",
  "key11": "5czFycWn7bpThtvxQqWK5PPfkpUdg2wwKDYGcsDVgkicXB5hpj4S8MTnzJ9CKrSKNTqkHFjSwnZ7LNe5LWcEibnL",
  "key12": "4imMz2SVW8ujZ63ueLL5PAjWUQw3MMH9ujjtFEJc2ofvTNGWChJzS36qaUahM8fdhWyv4zvcEAt6t9hZ2jNrrr9c",
  "key13": "uoX2oiXYqw5TFvLcoM3rj3A7NyfEdJo63KstdrzfoBbBSmuaJx7LbLp7NF3uyLkPgF4WW11THUw62HHpdpnsSXG",
  "key14": "54BbGAYY4zMAWmHs5MFjEz6C4yW3tkdJThpENM1NJDixznBEjTqKpTgaUqiDNbEmLYsCUM2ogXPQcwWZfzoe2QFn",
  "key15": "z5qwVb1rKoN8Tu6V7JTTkFkHKu3jeG7BwRBgZJdcji9NXRX8dQkYMyG614pkWuxLMbBBWvkaHicYZufGNbMS2VW",
  "key16": "3DxsojWwgfnWinQQQ9y8MRG2n75uTjnFHZCKgH4M5ubJ7SyAdUQZxmq2348hNrVCnt8o1juxFgFriQyBuhA4b7rg",
  "key17": "2QTJbXXB5fpjMUV9Rvtd1Zh4qR8isMbKDVAfwqv9sYuRp9aQdK3mzC2H1hSwMB9V2G5zdX78fdsk4pQyniejZfEE",
  "key18": "51MbLYMCVNYnak9pnzGXAShz7v47xz7eCWNRCMYPkU1zusQ4EKPdBcVcQufnLwmJXPTGPo7j37CEhPcaPxhL6puF",
  "key19": "5PGgSacoMRq8KbsBAXjMoG7i9gUoqwpTwoo292d85ghs8tT8UEtN2zG2DYjKCWqnNuvQkQ2uVfocLu8TPyLAZhUx",
  "key20": "5AFpKaxiqCb6SQAbH52PALKGrPQstKVK5FdMqbhehotTiPbzKPoQC3TnF4z2HwRNRcWsZ9MyQ2z5Dh3hArQPp8eE",
  "key21": "5xLx481BmsTxYyaiCQDMVp3pRSkukk3nFHeb2LnGagcxFdibPgBsnmiZJe4PR5N7mxVgyaY1A7UHxvzb1bq1k4yo",
  "key22": "uMrNVUkVA9LfE7Eg9qxaRMgPfLeN56Xo5pYMMQ2kaogHe4ktxPqn36u7Pf4MVYQFs34DRcj5S2bRUZ8fksHzkum",
  "key23": "29vjFZt3ta6Vn1w7x3kL3Uf9LkK9yMRxLMLzNkygYHUUTRgpkrLd8uEcoXk1PLLiNzdpdh9VszmMPxdgNVZGBLNp",
  "key24": "65u1QTsrLeaw67DdNqLsYWs7T4rbFTH9j4AhYmYZSRSqgGUJbEaQtG9x1JWCQn9TVmGVE5sdPmoHuYyqRKpT9cZ7",
  "key25": "3rc1cvHG5QnDAGF7SmpRCTdPV16VeRFDRLHUJgCb68bUJxCfYLU8nB5MmSNQ8abfKzFuB7hqG1n7AQC8TVY6p2Wb",
  "key26": "5s96bSv1s5FH7QokmYtqPhn2WGVvkvecLCzgkRKrhwXdpwaqRUxVWf9nztn3P2qjAwDo3HudbeRVhFKJf5r73orA"
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
