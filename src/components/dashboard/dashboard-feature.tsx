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
    "3ij7bGCwN2B7h6cyY52wT34VZEGW47v4Z9EPQGoidaPZi8EwzV2B1MpTdY7oWKiQxPY1ZJ3mr79iALu6JyWqobLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EBZPQMusZ7CzWFkRGqWXUcVSegaQTDuewYBBmah4C2q8jDa3dCWkriTLVceMAF7DwPWxD8mXwSfZ1c9n8W1RQvS",
  "key1": "wofETYoFjCXZxPeABYThxrvrg9qWiS8n1hqJW8PfW7Tb3AoMoL268QY5Dt27Lqdh7NEU6AvCxH9dsuWVHFYRe7Z",
  "key2": "4fSypbE8EdUuLJHZsV69UzF5DYF44RNnEs4zVB4JZTNSJFDjB9wf1Uizf627nhkfDyUXzK26K9BvTjvRJY4itz88",
  "key3": "45LnBNUFPmEUCWfcke795hYLX84RWwsHZzTFzbBKGDN56ULioos685FA1jvzid3wZJHnzPRPRn6PyF8TqE6vbCJj",
  "key4": "5sQAu49eqHGuqm9NKvXpGDsNhh3scgvpncdES5Z58stBs7oKyvByR66zBLip6sdBsAdgsoCDAXawMBzgsTomGNyC",
  "key5": "5Kg1oNpTtuFUkqn69Qw2yT6ghCUvEzgerUF1vSpfgb9y5fKX6Rn2H7j3DYBcCRGSMkTTJoP1jKZf8owLoEUZafm5",
  "key6": "4bQSzcEPB7hz2x5cMLbJ8qwYzFcj6kCuRdt21DwUbLn7XyzmfyGMfHVniXwNgcJBK9hQMg9ixxExW788Upt8fzch",
  "key7": "JbuG4mCynGC1TKYvWD3WGdWBipLMS67aopD7J9uaWMM3WmZGoULQv9pgmYVH9KXMfaHQ138NKXNB6SmZRVXMC2J",
  "key8": "snWUdhNsbtRdqBidD3H9KLUdQwtorHeKQfTRAQ7RP8p1Vqu8x4Xx8M4tVbWj3ckXtvs4ToVYTmAa8SBrR72buuk",
  "key9": "2Kre8YJ3eAgGWsdYYuMBV35gMV5FjbegptJGeujP1btwpyzDqRic6HrbQdonDXostJNpBRHHfzVY7rA4oJo3xkFr",
  "key10": "4UpEYJRj3wCzd6GrzuZ6Q2SC3r5i3o6HjuE5ZqXCGK1Nm7DDQtKV6CZgGxgyqj7372jD4AFeMs6Fg4LCT2Y8A8Ji",
  "key11": "5BeshwsdXNBcG5FtxTvRTRngHeNdJji6BA6mAFyA2uwisMEnJj4GnTpvZic9c89degANJgmYiR5BtV1R6HdZzAng",
  "key12": "3CYx2ScVMewcwbwYuZUfdxWesXdKM1tPzvt9hvKoGK3jXos1fhfRM4KUzU4hjiFiqE43JBcU9D5ENNsAVptSAwPv",
  "key13": "KGMMXSAqS9FYCVaJyV5L2gzzy82p69McUHhzcFZ5g6awYhe85AiahN1EgZrL1mNtcRjeiUyQqnWKpRuSEGbhrXR",
  "key14": "5aNZBp6UkPtAYc9v5CGAgXr4L1oFNrqS9KtVg6FnAFoZ7TfxngCPTZvXwnDc7HLVWzbw4JCXQiLnjVmH5MZcaahD",
  "key15": "4Ca3brVqGsSrsyrVCYoaj6mBsrMRTwJEfnicjyNNXzrBxwSERpjLGjNcFJ1ZiWmNraTEgGrYjgb1K4bF84u1WAXw",
  "key16": "5QCERS5cBLDw2FEx4mjuDvutnYDSNBrZkejwM8Uq4dLRtY5y82E6ZMzB1P6h928boZL2ZjBxz8MKfVwjpkkfVNoE",
  "key17": "4eavYWYagQUKQB4UuVZDRpkuziwGc7ywHdZVDhQkwxiRPF2J5jFzTbyn3idMMSwkdDgsgaK5Qi33YohLex3tvyrb",
  "key18": "wWkxw8PV3mYyxw6AKz7596qFKTBykMUn71n1gVWUhf2wvWjmxUvqfBQzL52rJeFJjzKzUC82BoM42PTYWpDYc41",
  "key19": "52uTGK6SdxcbAc94gfxAjdFsRrHBHaYmYDtjYpiQe3vESot7uATBUSQfQSgysaXaAeBxpJ7FMSjdCiu3PSnAjM8y",
  "key20": "p3VehhsrFa7fHZk7rsmZn2j14cY5nbygG64ER1KNSVtbWUs7VRQ17BdLmM7SpusUmd3NrsugLtxp67YmauLjxsr",
  "key21": "sRoqGFGtKzDjXFYvUCp6Znqd9Y4bMiserYXeS84V4eFjPAvB9jKhG89pN6M5Vwkks6XFFfWaB4PwvwhUKxyT59s",
  "key22": "2z2DZ9149f8Qd1smWrC7xbzHHDcdT3kB6BQhDECZLvgAncCYhTe2Yt5hXzoSERu2HAcXDX6rJqPwXJmEcnP6axD2",
  "key23": "5F8Yx31GT6AkyjponxWcmyES5czFXdwseSanZcY1CCj4j6sZWpUsscJL6L3UKieGY6smqhtRQskcnVGRMVzi7AVK",
  "key24": "4gpJF3YyHGC7VUy4wPGC97bSJLyqkpX4wKaHjitsG9uubDrAkLnwdEAo9TZJ5BtcUsr76rJC9JzxcQrV6gAPtBFY",
  "key25": "42oGeo9YrKgEqkwpNYfMHfBHYp7bgqPFkYevXqoPJqHVcF1tMtG2rcG2V6KakpVS82EpkZj2BX7kV4aez6w9XvRW",
  "key26": "4UfpAZ5xFX5KP8qHZQczz2ruyKdmm3chDP4bphs1gPjjHqt2bEvhRGNErwcYgsf6K9P7ovZ9xSKeonKkHYtMCeHe",
  "key27": "2B82wSgDtaEPa3XkNwAM3c89SBBSN7V5vEWGrRJSsCLymNAy2pmKJY1bDEVGhewDgBjmpb1bPa5aA9CVkHBjm6yK",
  "key28": "4jFKrfi7HoH5dwVRSLhE4kmNGnyadnUdcKjbPYdQ6hf2wThw7zzF4zjpgcnrkHvWGpXkRx6zqSwUJ1ara5G2gLpX",
  "key29": "3ywYcpdy8c4xkZecaUjZtc7v1oyGrV4mLnpbSnKydw2RyCKNdNwB1Am3qqZVBbACLLgCgTV5zk8JVdPxukxLJ5zj",
  "key30": "5M4YjDkz66bERoH2pn3thvziePQ4jS8bVywNmz4wLtszmZb3FxR11RTY1MruQPGVi5dFi7EgR3tZS2S6iLNGSpU",
  "key31": "5zdqjsQ5RwDgakwbfEuNC6pqctkX8hoD4KqYAHCB2k7JfE8p2wfxFXsgQyh4Dy3bnub6kPAX29DNfRkZzu8M1n7X",
  "key32": "4bBULqkF44Jqg6vSjDecEFBz36Pc1ZGFbrfYT8L7twUCJkd1pDyknNoCTxfUNL2TSti1UTD9ZEw6wjV1niNjyNt8",
  "key33": "4VYUpU5YJ7sDEz86DVxC9oXzLnzASG9LAmqsbpqYG3Bj638gQ7CHp6ktSAfhBPxhzCRkt8sV5yvJVhwsLfZpiJAQ",
  "key34": "5tfes9JcDU9w1vq2eMpTxWmKp1CdcKjfYaL2B91eoq8ondGrjiWiZkZ7wCm3Pjy1BWtwR2hXvbecBKQayerc2wEw",
  "key35": "2igKfNwrD2i99SKv7e1o1Urp6FoLUKG9JatKAP2GFYA8eoMHrgJsWCRY5dUXufqbXGstA1D67m93CFiU96w2yy5J",
  "key36": "5EgdfWxbjGLEom225hVjLnHbubF4xAGVeHJNHTkwKd9Eb2eu91n39xyG9sS4DQbRTKfP6ZRPQ4cuoFwWAZEqvzBh"
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
