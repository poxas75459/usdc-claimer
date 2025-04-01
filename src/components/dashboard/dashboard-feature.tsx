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
    "2i1hKVEcjZ7eKV7QziB9eveLg2zrn9s8LpaJ9Gv6KGKbxpC8XWFS2EN7k6etUKU2rD1LnRpYd9CQ4TrLmwE5gvhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dGsEJW68KSA91E94mzjbnowPaFFVncvjRZPZDer9t8et6d1cexpuXt1N1c3ZMn5ebpSbACnCPYWzD1ADDw5v1vx",
  "key1": "3smC4rC14miBYAJL8wJSfikz6jk4n2YQbskHkMeL3EVkXNUmb2ZbVjjEkSDKFuJ6bS4FdhqwvVFuXnJTopmauUPQ",
  "key2": "5XfxediqYB4gi8mqSC64PzhT9JZ6s2dmEjEksDMg6LtiV7iwcexqVScQ9eVqaQwVz5jVcp7x46p7eQkPwsMdKNQX",
  "key3": "5WLUYhCcMkVMjpKbf4YXTD2BcHzrU1Vtg4MSqxPaMhWaKNZMjboQdKibAcHWDMS6VSz9o1wJbsRZbgyPwDhoPPhz",
  "key4": "67mT81BRuuSrdYDa64n6V79tESPbNcdbzQhSuNgNnHwqxHkdU9f34txCBD4gsFuBLUY2tuiPs4szhEqMxXqKRGj6",
  "key5": "3JN68VP8LqYXQRefPpGS4RGxW3ZhoVwh8jLFMu5Hacn4RN3ZMkDxXanRbww9KX6AZJhGouTGDHa5KPxgmJq6VJTo",
  "key6": "46edBjLuG3EsavY8ttouYGDfePSo8nHPhy8D8e2bRujmf4Kw4te9SGvJnQrAuLXif3Zb4J6wAEs2m7vgbVLhjUFh",
  "key7": "4bhKraLqy35Lv8RjmGHTJJCZDM99Yr55oY5DxooZV37kQtSRuNSCmA6dSLWUjyFcDjf17J1Y9R7RjfnD7NC6qAi8",
  "key8": "zM8TxJaBnW5KWdtQoEhCsBhT2DDniFeARmHHVUjKGfaCJdk4S2VjC2gZkBqDQArUHky7PyHEkhFPbL33rDbfa9L",
  "key9": "49rzp9yV6QuTsHMVvkZQyzT8pMa6bQBkQsy15QQwaR6x3eFi6i1CCSXo51bf5kMEVaZ7xpLBnoAb9ianH1Wo1i97",
  "key10": "4W6tgMZoZqcozXNm944cY4HfbRV6HdLSz3Av8FJSio9LxBou1EvzE83bGo2y1rfkCBbEo5bGt4xvLYW1BwLAbVpT",
  "key11": "4kfEQ8Czq1vTss3f6okxQe32djUrzRavXk91by3WsPFmoNM8HbsHwk92TnGC1s1xHjh5rBGt9m75BbxtwrrvGnM3",
  "key12": "5ARHxtxDBs1ridwEzGEXyn8qeGERwaGwPrnJ5FWZnZjjJbiT4NFWxiWYcymkiTriLewwKxgfZQYFwNKBvKMAbNzi",
  "key13": "JZo81EuWNDYCKMJQQnv5AufE294rJXgnuNhimC2nHRaNkR2dUrf6Zayv8gQzhwW1poRJauNehdYeAKAtNCnQFPh",
  "key14": "54bckD4eDpFf2NRKb35T19yfahnNY4WqHriEK5hR2ET4opoG7Sn7XmAD7Z1rKPswYZvx3SnkzNDRWBwtEwyjK5e8",
  "key15": "2mfpPbMCryT6PYTdUdqgD2jecMZpiCDwzesb9KRvthf7FbJUby4YJpyn7TYH56gUos6Y4r194GYyUpiT3CEuqvAx",
  "key16": "4ior8tguunMyE99FrLmTPshQikoeAikN8zsE4kF7mzZZwBSjZY7jDc5Xs7FKLfFYP2DKcu8QZhMH7H13v3d6Ys9b",
  "key17": "3Dj1Mo9tUunkk6oU9JkmH4mfPcHHM8Js8yx6VLUU5kTZTmCSJk4TDAqDUYsKEceqLNDJhuY4exifCNvbARWNvAg5",
  "key18": "5i8G4VAoLB7jeY6kPHhY1TzL7wL96GUcyPuE89WEDXW8zNnWHAWLCar43PckdZ35vwBaKSV6MGfpgby2q1m3qPCq",
  "key19": "5bzfAUDTsvvHsmWWwrPvN4sXzTuyNqw4tQhrpQUqSdVVBZQBFhvoUwG1ECDczVDjPJwfz4Cx1whDDibKSYfRGTjJ",
  "key20": "3pQHmhKAUEy3Aj6LeEuKr7GNRzreck8nnRxva9EVjRVvLuWTcSNhfi546sdZbfFXZZaodkiGm882jXELmu88HVnn",
  "key21": "a2ubRJLZKvaFFovcAdYftkq9XRoTTmRsm6Rv6UR9ceMQ6MxwS1Zewqpyo5MiCNKWbuxwxJAyBsSfcYMCxkzsDBW",
  "key22": "5XsE9mpJhBMQPYp1kXFaaC9RvP8ZiK6BEfjrcz7JzUtLZGPxxxEusDmyiAQ9PVsKhveesQJMDCdC63YMwpswURL7",
  "key23": "3YQNR5fpRwrKKXJLuxZ1MxExRt4vxdJU2eGSSkKqWHiAjf154QPP32vNp6oxY5iAZVd5iJMvd3sizzY1ynTXCfQK",
  "key24": "4GSqbGiFy4ervQiefmiTKhinLsw4iT6CNpXc34ykZZtXXB2bep9vruEQQ2rfb1SSD7GU7Qd1PonD5RQGGfSjBD54",
  "key25": "7QVd63Lze774bQ9SpaWUQJXarnvu1aMkyye5Af7Hj6jugmDCfVTq7N5gNWBA7nobuS5rmmjU3Kk4u8rUnApP8xz"
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
