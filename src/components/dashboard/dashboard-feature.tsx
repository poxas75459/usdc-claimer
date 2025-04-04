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
    "3Sb8wcQGzidY5fwMuNimnVGB3riAVewuyfBM8GNyVmxn1kQF1sTp1v1MqWaPMcyGvhxZDd2w7DzjTHh8fakAzBAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33JTbn2z547GMFVQu5LzBZRTpegTSxjXPjRzPX2qgAuCYmSHNimdBVC67BkF5J9fGFu7Br8e84WxZs9c8PmuM2jq",
  "key1": "3jVugcfLFNzM55yidHc5AiMqh7tqjW1UeZoyreLAoX8GNCB5ZFEiKApXrjLBmYvmsjkRd1Q7zNaiwqJwsTVaZpxJ",
  "key2": "5yWM1GuNgaTRENhcxFEgwa3wrVhs4eCKf5TZqW8K9mPXY4cdQYnur9ybWCAbUAQDBtLV9UyBxCfrRjhWhGp3TfcT",
  "key3": "3sDxEct2m1mjwKHUM7MWZ4S5KZTZvqP3JNC42XMoyTM8TnyhLDjrNYf7NHxHDyBzo8Sponk7B42Hykks5QH93jLv",
  "key4": "2tS5Emju6W4gAZMkifvMyakTF2DuwzNrwntBSrjdiy5PoHZiNb33PUTESPHPcGvh1zSVBWqD1izE2Jk7GkTuXPSy",
  "key5": "3DHErNzSkq5jEgD4rv2JxN8fTMp6XRkepVMxf1q1WiVvZMmdH6E1f2z4sSqHbhMiNjMHMpGBiuZqLkLoCt5cdR1F",
  "key6": "3pJHBgYTsNxNjHEYix7hFx16e4BJ2Jw1tEGVnX5Wx3nqU9P6W45Aq6VQz8y52pbRGdb8ENVzmTWEfsRJtxk4G6sA",
  "key7": "2hD7DGyoeF3MSTCdpKNtjzdPCnH2M5HhfKz3LPGUPCbPs37CWtkVcdSgtqC3eiyAs8VcRxWcN5DFohzWnBK2AdCH",
  "key8": "7tciPgvCFd17Jax7VMCPcwCythbUvxw4ypT6HGNtwqqeT5eqs5Sb9tFJZbWNbYZxx9Q7egnqG1Mf6tXYQRRuGGR",
  "key9": "3TM12qTJBvsmo7fLZnQF4RNe5WUszQY46eng9RUWXXwu513oxSpk4ivxQLn5gXAtFbZq9ymDVnZhx6NxHknizP6d",
  "key10": "2BBXraMS57wJDJa42ryn2fThearykHNP6pkMTGdUr8vdZkYf9o4XczP9jeLzsfH1eXzkHgZkuoS8javrogwT13yg",
  "key11": "4P5voX7MydRXds4e8XQ8ZMu38RvojJVrYDfJHcEQxJqsRpZB7AFWG9Vb7TQvspFtSvT1Ccg87SCXtauNov6Jugp4",
  "key12": "54PVyR5Zpp7DA1MpTZUKe3g7oCWNi47VtJzcVnAPYLRFoggzVk2TgaJPZnsK9oVQ34BzBYsUu6ZGNaWxoWUSFG68",
  "key13": "3V7P44UMSfkgp1JDiieGFHFFuW1QHVp7n1neTK4t2u1XZYAUMJ7VmfekXRxysuSW7SxjtEEpj4bHSBWz1o8HG8Vn",
  "key14": "2zJg47Bts4iigySDHSumVhAsjKB1uVzYBvVNGSDHHys3k2bgy3owBg9gJ3MfoPwDA9H4vutm4jMN23kV7Tzj36vH",
  "key15": "4xKbvqycrNjJhcVn2bAE8N9ffzHqoeViApzmsZkKaaDR56z56WoAhD2TxpxAkVmG3cS4gET6EnsLoyBv1ge3m7BW",
  "key16": "8RwjywS7ZoVf2rWgUsZDb3JtVTD2jeFn76TCMQQLDGtyrkqfYATJh2GZPiMyCK7Kjfv213q5SYtcEwzcdNShHNs",
  "key17": "66LMoST38E9HVvhrfmbDYVoCfF2jBhicQJWt2ztAwdmMdbwm6iArW5PsPrDromXinVbpLn4iv24zkwzTGNsA26No",
  "key18": "2vPvKRUQjgMK1o3J2ezw7rpEeFwKTEwmZa7QNY6KM8jFc2iYdJ2RCwJe4F6MjoD5WTLK3cFtHbvFZpng8FmUdQUn",
  "key19": "2JsosbnKRR6MzJSs9LUMz7swf3rUofFbSA1FzD3A1gQZ77URwyp3H3MPh7p6q1iZasCyDVTZHbLkmyoUhEWgvNXK",
  "key20": "5t5Hw5e717yEi4yxNVwRiu6nJdYKrMApFM9PyzWUsbz5fmTZGg6YyY3JXchu2qXLytQwDykbYZCW8AqMP7bxS6pD",
  "key21": "3hsfbsK3Kk5tDgTVUUkmZCWRezqkZBq4GfqoHbyY4skKa4FzrrgLzUMYtVhYbkFLtYjKhv8ZTjFvVJ3ZQAtf3ceP",
  "key22": "22jDGt7wnt9vB1SPMesuMnzfS4xMZZSyaHygQjY2QiDtLpq9Ga4FV4BZZnCm1jnAc4JisW7uq6oCgEXqHYDJXTHi",
  "key23": "226ncF1ea1GsXL4NPvBeMVC4kn8rByDMNaSowboje3dmTXRmRi9HV2qahv573dutwTQ3QWsZJRH7s1R58e7MeCiV",
  "key24": "2d5nk1dJRdvLmJHedjFu5u38od4fF3bfqZpBbHBk2W1iHtw1t8WCLXfxfQpUdK7JjkfAKDeUshdmVBKVR5B3sFik"
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
