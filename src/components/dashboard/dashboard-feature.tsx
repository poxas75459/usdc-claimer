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
    "3a5x3VZqwMj2cDD2J9bp59cWbh2HAAZwbkfeQStDKjDLp33d7E9tzzEoTCThQe3y8kQvpHPUnrmM2PfiZsAi6Hem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wwRUwbBtN9FbmHEsZQK5Xq7Zvvzx2WqEr5uNnk499awBDkk6QHk9WbnHynMTNXHAicgi1gEk2NbwedmmoPWrR3V",
  "key1": "4nFLoxT5rMUrSsC2xvvT5mWNW1kmEYkR6CWbRAmurTSSyGVka5u88KawNTwjn6Cw9rhy7RTYSM9aCMgL38CPHPH3",
  "key2": "uWdr8f94g9WwkzCU73Ki4BvZBfn86q3oGn3jmENRveM9brynGLRxkXN2EDLHmmQyYJWALqKGz64mY7pDJmHigoG",
  "key3": "53S3Mwa5z6xLXoT7HxMHqRXuyoRimM2hRWkQvvpLhzDAbkzKCuutpbAx2BriZggJd2SzQZTajs1gJxfkueF7yHLw",
  "key4": "39dG9R8tgrjbB6sGpqmgzLwS9SHA6FjG46X4xkx5NFUdM5uYaeCrtvWS4QSCDSfthpyByTPKfwhFMi3WZ9RwABJE",
  "key5": "2xzZnVdwGmXyhLHBwrfu7iQzERpK1ePUcrSPmGesXqizJsqfa2f1wVYKrnNLwJtVncYHqx3iotiCJLuzkHF3Mkmk",
  "key6": "qHwgYdZ5MRKLn131ULYjDCK2c8vspVvQVKHoV3EW7wYDSxTBVF82QFPvmb7gpws7cRUBmd5y3U7MUiWMjYX2EK3",
  "key7": "2RN2w5piHVBLAAWdnmjnY9yzKVWGVngwtCxtHT1uKjFrETmyoDdvgydNLKG3RixR4qfgtL8qpi4QWD48nav4aap1",
  "key8": "4p8hm4dQCGczhumszRREntmH9WWoC96ZyuU4tDdAv7GdpghNKQ9qj49nsYgDV2qbhVcM2aqcJ24B8xYFUUH8KosG",
  "key9": "3nvrpq1cGDhuuwRa2kDCEz6mZyPiwsuvouqPQm83omQNaR9mJfCpgaxvuhT9Z4vxoQ1Xf1s1KcKVXeDYHydbcLY2",
  "key10": "2ZTUzsDuGsnqy2BDP3GALJ99ASgcpjGF5wKBqi2wQeKg9xvkwMakowcXW2Rtp56mmgftrPujyoGvb2xdXsEvAUW",
  "key11": "2XXdDVhPu3DXBACxLMX6YcDnsZeZKGdDhkuWhahaJc3Xvq74ixg3GbDB35JERE32bwB893VEiZWsUGbjd9rzKQDE",
  "key12": "5pRqgMTzWdiituveauvDkHA4VyWVzAsDH2BwwiENGyNj4Ep7MHdtKBGYukuiNimpx5kaCDZ5LiSURRe5Ldwg83bg",
  "key13": "2PC3hLcdYLQrpz3cPaLDZqiUR8bxmTgnDFKaPPdQEjSFX4knv9UePxnjuY8i2XyHEoXF3zuwzFAoaWDFPbEbxm4u",
  "key14": "5Yy7iT2sTwuzwPTEHUjCX5sgTgr1KxcaEqnr3J9JbQLnKMKmQ1a4WgdHin6ZcErfwSSL8UVVSkpL4vsKTPLMN3tR",
  "key15": "FhB8LbhDqBYuPTuDAmnzHAC9RwqLYFQTrmhteM3qk33s5pBZSgW3t3V3JtKyjf7nTyiiFXXfnXPq7pbh4qgpnmk",
  "key16": "3mKGYWWEaKfVDr6oUdBDbuP5ReQYZPXpoJtxAeshPiEh835uLPvzCCZ6nJ5aXcuGLV5JXejtXA8gFiviM4oE3ZYG",
  "key17": "wTgJu2PtyJqGeqkbrLC2SDH9ftJz58UAZKpajVSfJtCTA664dA354MHrgJFtCus7F7pdqPEUtZ96q1xpbWjq8ZH",
  "key18": "4sNiYpZH8W9DnL8L869LhZr49q9HXBJt3YCN4P5om8V274B9dGmmyP1kiVQSci5TEJBWMg3oNLrCy7BTfcyXKr5i",
  "key19": "4u75wooDqUhV7wJuWgtSycUUSkxvQD5zLNfxYNWEp7XRirMUBUppA9pnpcAKjAWGq4YvK4prAXH2iVZk7LWbRCGX",
  "key20": "3pxuEQwvJ5TBwCE6r4RZz5TpVWY8KEyke4Wh1CsdoKBH23pnoGZWPF8zb6nkxgu5j4WxJmfMYu3zDkNXxJBoyMQB",
  "key21": "ucF7vMSnMFd6LfH7Z9azz4vrAqt7yCmiy7smQS8GtmCHAuv9vWuqVg6VacyDxaFsCboBWQZBdRrb1e2zwc7CZbp",
  "key22": "2PyitfebHXhkK4hVE41RKs2ZAjhE7rbdrdk3U7uxUuMnkL5mPfVoSzDecG9wHLJ6cVnmqw74Fs2dvV7N31Bc4arS",
  "key23": "3uXRkxWBB7S5mu6tSkNSdRXDQKjrxhYXMb2DJHFRg3MG1PS7YnMLh1XpKrrjNEV8oHXur1nbtF4ZQrU8rmMJKJQ5",
  "key24": "4r8FHtQRaKoZc4b3E12SjLUBTQfuYdqGzC1wqLujhoWdNe4B6NSjiacQBwiv6SB9EV6L5yRj3jmwYxAuvAxiyVAi",
  "key25": "3MpHGp3FbfFNFiFmcsvyRDQGCKevQ3bSzS8gkVBZby4HiEc3fydBgr3Q8J3QGrgYEKLaS6AUHrbUX7UC5K94NLVc",
  "key26": "sEAiAUJqwU8iiWj7xvNqtsjGJaoRKf62UsqvPe7xyGG31XmGXYuukLHdV9k5UfePKhUdMWFcDr4oTzigrQgavhM",
  "key27": "2sN3eLXEJkL64Z8jaTnsKcoWKCCBuByhDyKtUHH5RviR6pzsVvZPHzqN4mB41NRx1nUqpyJXyh7gwh7Md5eQbgip",
  "key28": "4w9cP86TiB3WzV6EsscjtpZ7yr5absKvo78LHaKs4JERtMpy2MiFJefRiz4T13yw1sRipWRTFc7TTmvikGrEqPff"
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
