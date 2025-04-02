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
    "LXBi1azpBuWnzThy44xwkz15yDrGQNVCCJeFFZ3UJ41zCo5TofMuTm7cPkFi9wQqJtppPBSoLs76RyJwQNVeGgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f7K8TyiEVT32ak6PQ5DdgntZXpvXuqisx5z7oj3x9ZsGnF61zL34bcR7iShiRxMme8pduwF1Cys6ECJUH4Escbe",
  "key1": "23x44sFQ9mfP2gUdVpxM8DM4JfRPpQJxuRxSrtyE71BhFzVUNuZxvLSAbdgEUAQEQESjZEK6JftSYAASML8TLd2g",
  "key2": "4S4WyRsywWuwnCrfrizzQaXU78KcK2wPCPdQQgN9rJHhDZrHT2SzQowA1E1rAyrvegFFek7rBFnf43pYbJk1naX6",
  "key3": "5yGQM94diSEd1LqM1qWiznBBVYiQwJ4KgcgX5Ag5RERMFBaFbvS8qRy6u8dy4ERBrS7paSagvr22GWxGbGN7mcMA",
  "key4": "5nMVnxYfZGD4cFxht1dKVwBfFjdaL8ALvshL1qQ3GDoGgZxXNvMK7dvRMmYVBsNTTYxNosmBBVkdLx6sWbNzGwGh",
  "key5": "4kuJWJ5vgDYknL53nftSzxaBgnkFv7pGoXj8TYN5isP5DGyL4pRqTtqa4Gr4z4eFRJsB6gq61J6avHrazaB8Eqfk",
  "key6": "63oShqW1sLiqXKwpKR1Ddce7XzU1wff9ntfDy415AvwfLWRfrccHLhJ1BHQPz4VAzvFMjNcn5M66FM6YAr38Moii",
  "key7": "4oWKcmxRSzmpasSfyjDJyCEBhRzD4XKL6U3rS8d1wRp4Y9XeKfWrSPuryxY34TAS69M3WxZiZ4BVuzoZv3ECwk6j",
  "key8": "3s8QmYYkeFFFMLLtf42s7AAt9cFRFNZkeJ2CUPF8Y2wb3KDdw2ud437icdUA2xjQEXhFcZaYKbswn4FhFvWQJn2i",
  "key9": "p42ycwD7scdW8Xmf4Cmd3fx3X7SepaSsjYfhWzrz9Wxk3teVUHcd46UEhaKic9ypkxw2mMq8ohfx2RTxKPfJrQL",
  "key10": "2vSEZbfGnn9aP8YMyR3haQAiYCCE4vrVkmyukqzhBPBKqhZhCUYZzhz5xqvKKAeKsiaCLgyC9jXe92VJUj1T55t",
  "key11": "4UHStqHWZ4u1pUg4wP7zxoHffqLyRyL1x9gXnfgH6pMB2DtGpVjuTbYuN26PQ2BYPmP11NyM2prpACuk6otE6dhP",
  "key12": "3DqRTkwZNfKBx9JwpUk9tSGRdPAzfFBRgqQuZGCPmC8m5YvZwX8DNtVRvTL3QCoHo8KjLyofAAsh25nsG2zqNh9A",
  "key13": "4EzZ55yJNDFe48uiYrxo1iXbPLL6aQzRQg3g89qoQ6eXTx9HaUAErVzQEaWJQwXerYtQapLkwnJqSFBdh6ropwrf",
  "key14": "HBWXDwU1UTSQs13iDinEhHLStD1tSQhJaALL2rxVEDcWEUnL2wg5TPCUiTJVo9FxvrsjJjQdS8f8m1GaBdnvqiq",
  "key15": "338r7v1Vt9xtoGfjG8d4PZZWDEAdBzWMkGdqyc4x41vwxL1vUUTLqbu8jSdUqpBYBFsD8CUTpqFDB8UXyUFGkJmQ",
  "key16": "2dtKiiEVPt9RkMhNhzVPeLMrMMu8aHBUKMY7YFewKn8ak9KjPHgmoqt2hbtRJCvYC8qaoB9FDF9BsSh72vVGtVsC",
  "key17": "3QD5z3nJzLU87zWK68Leoq8YE25NzKZZfyxMQrTFnmey8NeKLUXcGKwuEE8aoemKBSazW3vBQ8dJ6JDWzFEc2Wa2",
  "key18": "3px9bYpCojMiXzffR5L1rXCpmz2MDk4iY1XZw3KHcmG9YGcqiGcqCd1BkWfKZLj13NEJXBhtJLkfpbvXY8EkG9Vc",
  "key19": "5b2mbJFcjmQ4oSdaYZirctvTGJbXFws3Rj4ir6oi7bmbZy68FZo1NveibtwraVdZWSMs9sBR1NSXG4WGkEYpHBQv",
  "key20": "5hyZsBxV3zgVFose8RjLzEuJx11hk2fLHP2xFvGbEQghChPwD7ypU7xQsdAQh7qb7wALDqPiz69T7uRV2wNTUoF8",
  "key21": "2bwCJ3QX7FqQtCCiGKXLquFW91pqaaNoJGadvYwqGAzDw42ZU5fJvgpxzCVwGqHis1q9aGCQW31mauWe3dojnzN9",
  "key22": "3H6N2MsQAS71iUWugvjqiKhGi9twFduGqqE3ECc1xoDNVo3qgsBfRcoTMFzPfdVx7PL5m7nzcbBq2AXzwZCBf42v",
  "key23": "3zrcxtA8WnYzZwgkPK85vyriVLXsB2eoVy4yjkfRcE9wqX5m9A6geWRA29vu5qPMN1sRcram2SBqxEUD3Jbv26Gk",
  "key24": "5E1tznPXw2972ixgnxFjaZRb9GkrMnaGJc2g5qrGbGdEFbp2SeB2NNvPV3ijWB8z6jCTELG9Re3UpJLE29r6wu96",
  "key25": "511dgzVBL2cqGwYtuwrSM5BoJeo47Pc7Lv9dpumGagiLbbuC2wTsZLfpdUND4Lx8YMb4XHpEjMkH1ejYqrB4Jx2A",
  "key26": "2DPB5qtYYJQwENeDgHGkDx9SFSZz4GoEXNaS5Xvf5PDNyJ6CkGYxX2yKt2W9SMwnDpXEojeszLjkQBcjhX7xctsP",
  "key27": "5yhkSCjPX5NoHCaAnket4B3Tujf4SqQakyhVKoj1Fgen6HFZEhGU3JC4dpsPDAtfXWJxGhQ4ft2mUu6c9NM5TT6w",
  "key28": "4kDLyPcPuPGTXRtmBoN2eroawioTLopAKcFHVvGLwovgQxeBkYKumKkS9dtdsZwbVcQst3HKVb2vWZp3L85KcsqY"
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
