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
    "5bvZWCs8SpZkEfdUgvR8bnugKFhgEvUBh4t3EU6yVbXHzTUDy9iK3sywJ3yHTpcLLusXPwGpRSsft9FfPB5ckKh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MBSt8VxpttrrM2khxR1Njawhttb6DHFgR3aDhPpstM886A4dQxe1XiUp926CorxmFi3EsKQr6JM4rx7e6J4SjV2",
  "key1": "3bt4VGeKj3vDEnkUQN1K8ZfQgKr54yxFzAgyWHWrvvZXhuQdMFBgb3kZFKNXZ3ZiN26Zpd8uEnv7D5nzUjQGLYPj",
  "key2": "T4bR1iJ3evvcgowcRUfjAFHvLvhB9J1rkzhrU7f6G2SM8QhVRV5eTnrui6FoeyH9LdLpuaL6VVNM9Bz7xtJvPq5",
  "key3": "2qBCqtZWdyKcmKx2GL2aerb1tv9pEw2bpgtgpQ7CvYEr6aMK9THxtQU4AzrDEyrd2tsjjDAac9zDQ2CFsrjqHA5z",
  "key4": "3vWKdnombFYz9eDtYczhcrSp1xQSTAUNJV4nytxrywJwdgWmwiq8zGiMLHA55ucekQFsxgdp1mdG1DzNu8URcqcE",
  "key5": "wq1xbra9X4wuymbq1mfaCnGEKXLPMCRd2k3LQcAtt1YqBQeFCAUdYaYonraREbonHMTMDMW8UaGgw4Uay5sDH9T",
  "key6": "YAAFMYPURRtcUs49JAWRSPEzLkocNwDj7TLTmeg2ZzgXmMXDuMvusjGPw6kKEQ6CP2F3BhAnu8tknvLEmQ6ZVqY",
  "key7": "46VpME781HUQsezYUvAuBERkEXSRjELGnp2G3yfTwiPofjttA4GmbXMWNC9rMbZxxFPdtkuYXXiMRULsmyGq75n1",
  "key8": "4GgRwQJsc65K1inAYrSx1AyESRwnxHyyWYJfnVDpkf1khsDhibhZuMbG2zhdmeGMn7KNnTBAGt31XoHWqZFEtLBW",
  "key9": "3NxsWpRs6rdaodcBe6syCkzkZW1Ys1eryfVYQhpP8aJgE1UAoYR9nbFgVo7nZMaJivhGxJvpqSRjDhzELmHdM4Tw",
  "key10": "8xvaDidBeNDmnKSVydEEVEX4T8cCgAapHwN1MNucLZCmexmWY3VdsViLaJCmhfA9ay6SpR8idPPPsj3PmEr7tZp",
  "key11": "127U8W8Wngb7dk9acdnBcLcfuXaF12AC7DbGcoMqZoanSSnd7EMPmQKjHqbKxrA9gRdZFg3gcSkaUXjpfkvJK7BQ",
  "key12": "em3GUJ8dPAwzMqHunEwNK2k7t5CRkwxvUwCQpNjUzq92TvkASPnHRegMNCu6h1k2jvsKpADsviYmRgn6CtRL4yh",
  "key13": "3SrKBXA8uAvrjhhNkuVqDWjVuoc1CenzcjRDZnontjjTjCuwBL4Ns8UEf4JCDnR8Jwd9KtS9TQX77V7K7hXmbmQL",
  "key14": "FVfGHGhNVFHsB6K6fCX9kXg3FC28f6jB66YkfJ7hQiUJ7KnkyijSTztP4X1R1XbA7AVPBer5ZDGQj5hsshQ3DBg",
  "key15": "4Z69KN37hhsUXe784R7HG9MXWvBsAjiHhSEh9fzfu8qkRLDK73PrCyGzK1CedjoTD6qYncxNTzJ1ZTU3pBwBwuxi",
  "key16": "4UhSYXUXiyV4nP8og8TcA7K3gTj2g9g9nnH8J8p1Fdvn29knuAj4pYvJ5h9s5Mhow7KvNJGwRY7dgviZEtMcf7qU",
  "key17": "2E9tPJCRxQCoR3W8BQpCuKCDg7uupxAPPvUjCcfRvbDPS67No8FwximFvRVJikb46QTn9CmAZ3feJzkGMiVzyZDg",
  "key18": "3XicNdFc83gfwWzbpUy3yJBXK9THPS8DymPHSo5afGCJ2Puf3ZpvpcyzQZ9ixUjqAtxevEo1isgzPr6y4y8gzunh",
  "key19": "287MY85MRdL214KstkwaokjCNb5mwXvKHjEMyt22rVfM94ii6oa44BTgBBuhiBCEmiRP163P8JTforYTSJAqfJMa",
  "key20": "5LeiFWH3XYgRUi6CirS485U93ie3NoupC8BXpBbr9h32Ah63YDKNmsxPJhUonnGj8bemiWrTxzP2uDzPVr8xN3xS",
  "key21": "378vRUWxaXtsmMsX4FpL7nCt5Ew6G8YzKyHosANjCTkPuqGk7UMswGTvN1B4g5zSCMEmvKuhBnPE9db7h8359FR8",
  "key22": "3dVcV5SYXzVtroYZx2dUSBB6eqCPPyPszuFYsRuxajFXxpXUUtcqNFBFGXRkrFkz57gVe8FdGJptqKLm3QhGESex",
  "key23": "4SLUXAzypNdVSgZ34Hp5qdGa4vWiAfduJq2bqs9qWHedGCrJzugdYNHtnkYvwfMdraATB1DDvyLNkwMZZCV2TnTL",
  "key24": "57p19YM7KsTmEW46cgTiPPzA598pgL9grhFfFzUYWJpEr7y25nQaKE8vJCZBXCN5SxpH2dd72WS1iBawSvVubT1D",
  "key25": "2Rwz4YRELgAx6mZYuxyh9zdbMxMr5EsuM3R1UQ32w1dkBNVPe7ftmHd5GzKkoFhEbZztjwet18rAtDtuFvJSCYo4",
  "key26": "3TpopwJVp91C4cdN9XvsJcrKvwXHEdttHz1pVuRqCaagnWb7LgHojbjUt2fJhLaYbNwGZJ76CbejsnXr9Hkr7sbr",
  "key27": "6oH1pgWJN3G9Yyi24DScFYGjxFUbUZtjG536b2PhBfK2MsgjpoaeM7DaTtEK1d65jSnQFcNeSR2TNxAt5oZoZkd",
  "key28": "3sSwgcwgjgTjaE2wGmrXev8PiGsoYE7rce7HU1eXPL1bwk1TQKsNAmecPdxJyMc3qUQ8rGMrSk4LuLZ6hkTX2hPH",
  "key29": "4wPXYovGCLRZWSV4d8JswruokigN3dxdyouudNp5Donusg6rfvLjw3CL6LjgHs3ewSoGiZtCDisuCkLgvrewiteW",
  "key30": "2ZS1rCi67KKTLexL7M62BMU7NBSLnuTmZ3G3gURj2jXb2fanw1pkWYPQ9wHWEPiqax7Mgf4QnGcYLvYg785ENNTx",
  "key31": "34upNstcsaWk88Q2ppGVxPv6PBPMspQAt7Gmzx7uFZvrjtb7DgnZk4ifL6sUF5piTTFbFepDzAuS7JaVtJx8A56t",
  "key32": "5GCHA2Ff5yoYr1kRPTDwpnzi5VSBHXKEvvWKd4Ydh3pcyVXKz8BoNrvxMeXLxA8wxjUsR3PoQwMDonxYa7jgRn2h"
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
