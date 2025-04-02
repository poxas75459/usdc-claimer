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
    "pDo8yNzPZCsN9mDiDuojcSbDGNSbq2yhVZTFTB11gfCMnLkRT21eo66zZT4xYE2j73MVhg6e4Mxb94nAcvTH9Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kqFNLLmUaSVCBhEunAer8sxER7uRqNBL2soY11euqCPa39xngncEMg9CAf3Qt9fwrCbhocJ1YDgL6MMDppUN1uu",
  "key1": "3nuuREiX9BkbsKGGMCTUVsyttpiKzmfboKybEMmrm7DPPoQDu72hmPVJ8zw4vuCKWFK8hoQ2cVe939vK76X5XR7E",
  "key2": "3VKpMeNk3o48XkLj2o8GKRdpR1wnC8mjo2vEJ7U2DB1YnCXEt7HEiQfg6DPQFW4ERBrB3NioLvZABkrXgtg4FywQ",
  "key3": "5JBoh1nnSojWkyjPuSvzbG8z2uQnZbZnxHvmiFX7vScLe5zjx1HG9ASoatqxtMJaCc22sc9nY3rjRAYGFX9TwSyG",
  "key4": "4J1Ja4ksBacbm5MqRQs9A25Ews7m8tSn3sgQJqm8Wk8rN3bNesZWTWdTB8LaNpYnHkg2N75tZ6YfULRCxAQJDMXR",
  "key5": "5B31YdUVVhWFZCsGfheKzKrKyn3VjqDzDTvPggcu9BXTvmREY5u5xs5Nw8HWc76pMUkCm7gMJPXR8QMNP58NQE83",
  "key6": "4BWBfSuRmh39QCVkVYPQXPgd1Y4DUuMg9y6nE8LHmAxiMez6pmjYrk7ZtJQChN9bNxS1pu5dKzsiM6UNtUS9EmrQ",
  "key7": "3R7SJTrqWQtZNjLEL2hKZJUkyMnVSa9h8iaUDZAdMkgQKzokSmdrsFNtY2mBEGpRfy51hC9SXzmNfVXu3LWgvBk6",
  "key8": "fhmSPpxuGWiajCUR7uB4n6dmxshtDwruKMzdZxLMMBxV6g1f3t4YNVgX2D9bD4FejWAckGQEheaCVku5v53hSKh",
  "key9": "3TXuyVdMGUkE8TcaNLtuKE5a29kZrhwoYxeb34b2ZSXgm2GGqFxYtuRyrH7g6AQW3nt4kK6sFqYQtTVgRNjHkb83",
  "key10": "DGi66quS8Tug4Y6KgTMZixcMby7c6qmyeqGCFE4EJtcgS1JXF1XAyC97gzs1APU6JAgArYvkwM16VgcJH2P29b7",
  "key11": "4hyiu8aErQHyCjrrq2cYugA1WE2siLgUcF5JwCsEE8VngRNHfnxcGJFes15KvcgABh6jLxtafYTDzqRHC3wggmPs",
  "key12": "46GiLA8ucGM4wmWRJq6EzuoQ61BTBYCKfjHVeSNDoDzUvhnCfSMC8xwa3P7HdxDGuvgPTa8BNcXN1PVKAqrDPXeR",
  "key13": "fDRH6EzLBAnN1xYq6DbbqJFzCTW5QiAo2zBTRVbABh5nk1yrd71cNYB6A26pAZRsDwcyYAuaCJBdPSsvq7Jvv5N",
  "key14": "ietcXz8aeLPojMmhibbJnbTpmDKeARi675s8UZnEoZ9ChRNvuvb5RxgxhVPFwKsVsPoaLEfJYXckioM2fDRjLp7",
  "key15": "3pKfKCrVnnYqp8KfAQMxSE8k6mvx3eu4SWfHjWVp2HMbAd2HVxyzTxmhysCCtxkvcH29Muey93U9uXhzxDSYU9Yy",
  "key16": "433rQifWqNStDE7NWmiKKrLwEhFxZjqgieQ6wbsmeWaZQxzXch7DTdPmHzfPDNN9pGJReLDAjgrdYFFAcXb7X6zv",
  "key17": "2zkBwecz3J7r5xTjgoYhnSdfWzFSsrDbrx2ma3c56394FS5A8VqrNCRsxK4B29EnFxaKXPBS4Hs5amQpymaiX4M8",
  "key18": "41Cep33Xmk2QRTU3zhmUgTjZn5jvFq7gESQLPPWEbNRQ9bsP92gif91y1nhHgJ2WHxwJ1fNLMsNTkccPrbih7bMk",
  "key19": "2iSP7bkQryYwWBM34fNRTUndmdC5ePjNcHAVH3MJ3PBQF27bGocD4GW4ceRymzRrtGK7JxcnFEwMpb1VXNFPrtu3",
  "key20": "YBbeXSQd9kStTQZXyFa5Y5N83KcmWFnJuxFCdAPSbqrytBMoS9wbL3DXo7K4fxFuWsNTxezF3NVMDzA9RxHoH3Z",
  "key21": "21Vg7Kv5cxcLuWChL1pDg3w7p7uvEQ1zh4YppcaPBEFZ2Xn9C55yJtfyTeanS7UdfNcbZDmbt7KfrhM7XGMDo3mt",
  "key22": "2QU8UqcnbPhd459RYTX7d3HZky2QVgEJzGDo2UFpvBPFnyFi3YyFcS9gt1eM48td1Z9iBqiXfZRPbbVjCuEqhkf5",
  "key23": "5pLYNR7jQFPkK3EHMy1pWr3hDrcnxgWHjdpG8whhoY5KBj3x2TGC4WPdHEG1RBnAA98MoeFtNPWbumvqFL8D5wvx",
  "key24": "4EiwXpcxs6ZzR1AZzCCXJEikMa5CNV4Vy2Wy1WPM7xtPqyxZcJUkqr3r8Bez7dCz79jzxixSFHLjCvUUMDB4Yq3V",
  "key25": "3rYMvEkoUyqojTynJ9tvG38LgYGUBECjxkzXsxWNyCTwNYV8jLv59bAHqBVxkDPPXfkqWrAQ2H1zaURVZK439fe1",
  "key26": "9takV513siSAGJbdXY8YN7oDsKbaoWvsu8A7ye5BLzX6QwhKZD4BinpjqtUpBqx72DAZmCc6b1EJqRV85TFPxnS",
  "key27": "3uZtSN5KezLTy9SFua7fzebHA9YX9DmQEgVTayVt81ZjaNbwbA2xLfitCbu9z57mFe7iWCRhmhcx8gBRAusNeyxy",
  "key28": "3Hz7jPBLizDXPvDtqzY85XLPxUjRUCfmzn5QsMR9TqrJEu5RBakU9CZEyU3BWZ8udbPNWEaUXnBXvxjk9aSdgmn4",
  "key29": "2vPrzvfActMoaAmaV6nYJaJn8jbaAQkRoWfAqqPKTAXZ9Qp1vFPHeRdCVq19qcMpnxr714bVAf9Li3dRM92gEy2A",
  "key30": "iHswFqgbiUjCFaANvhnsWjmUhcQKrCBniaz9LpQpYLfkyD7oLmc7TmhAhSiJLsSoBg9h4hGSFzToZYVxhWYd9o8",
  "key31": "4ABufTHDWR9kgBu4uwvmM95Z1BYdeqoTfHM8DCmSJNCAE66N1g3y8y8WBt73QLSfh4LMWipYBSrzEBc11cbsdBSr",
  "key32": "5CSmoezt9nBTZD2j47BL5oPaTmxjJEtJoRkfvsktHFd4iKyvNWz8dryTmc17n6FQV544mCUXtnJ16kgpZHrdxQvc",
  "key33": "3s1iVeBkqBB4HHT4Gjt5b8oBUZaA33S6zEsNvrpNdurhZEhWcbhW7TdfgRQwdFmDzZgnmDuaTkH4aTSbdKx2FvjC",
  "key34": "45KL1gLYLNguJ76UaNoM653LveLTw5oYiUiertbmY8FDmYQtBcN2hUgUV1i6ghCUGTCpYWVqtq4M3Bw7wQ3dxgv8"
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
