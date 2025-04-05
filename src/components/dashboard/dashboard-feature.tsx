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
    "66LALfwfgyznQJ63EpMZoVb94AhLZgjoZtjbqexXHwCPwDe8agaDM3KzSsE9YtN4rtABiYuG9MjvFwzMuyh7wS9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vbcqb2KjhX1ByiKV2MLd7Kr98pYs4HJj4YxWieyVfU19ySvXEGHXp3RLDhQr1K6pToTXZQTmwUunUySuSey1KY9",
  "key1": "2aYWXwpRbztXD3YZHF9CF4YtWMXDUjnc9LqN2t5XifwvQQk2QaKcTVvE9rzLKhRDK75qdm4mkBJNYSKdJMALyy3Z",
  "key2": "3G8PrCyJFV9oxxXqBzoMjb6tkRZwrdGx2dTz4aHHAJuXCGmU64EBsfhGPr3Rs8mKPjHQ4nb7xmYky8wRG6p7nqFA",
  "key3": "5R3rS2DpKeLXF7p8VQ42n3PX9Do5oWbP3iSALrb89xfvdxwiC4w7NV3DhjRiuxYxM6Ym7n6iXdUYqRqHK1FhQW4v",
  "key4": "qX7qHT2DfWbDQzh3h3MyxM1C1eeVfPipegaGM96hmJYGKKCQmJyKSUdow6gkkYcVfZYj6TcnsHsvD5nT5PdSW5B",
  "key5": "5ZhZUnBuPg4feW5FFbvXHdcGtWD3K9erE4ujLHrpo8ErQgHRTYA1eQUpnXKQ1v3WH4npdNSy6TsFEsZ4inccEyTM",
  "key6": "2PUFiK67YWfTpqoqrGQ8dinsMqMqyFYf2Pyk2JFJUDGWRHpi7U1XwPiRbn3YNsqUmk9dJriHB3C5Rq14FT64sGSn",
  "key7": "5E176cxhwfUWkhzj9cEw4SRkEH6RiPJKC2BViNsk6TTyhMVbzXemQWE7nKvduLux7poxvFnG6kcuB4xBAqEwb6T5",
  "key8": "4AU1sH8xX8J3dcyXwoefZThKXDwR5rQhMpSCj332wfbdQZh5LaY3E1Gqmcnvns7xBG6eH5zCse8y5RVpuohq9X9g",
  "key9": "a2tyqEzdAG7KBQG2tLBiwtrCmvXv8MSik2Gvq2FVvgYmrN8datu9cCv7MhMWJFoYitGpMkKEpjzyShBKcbTzeQM",
  "key10": "ySib7xdtoWjxQB2rbKV14VQswnQtmRwXWHpHCHgdTKbJk6c4Yqm3daXeajg9iE2sF7ywKD8RmVnziwofp4Z5GL6",
  "key11": "2ZGVazhZswRMNjWDfkZw11zkSok4GcmaPyMVjk9PTHQViR4CSnvQaHoEddfN7W3u8MC9PKheFGVJMP2APuCpLibk",
  "key12": "S4J4vK35SwvSKv7mg4UEZq7xtsQhw7h5D5iAeLiuYzmyxTzMozc1KqP6JrJpvB56bfJXED5xi54fFpCLTMQHVXK",
  "key13": "4NHCpGLiMJdhLWatinj5FnvLxjKS6XYqPM9rhb7vx5dj6caEX3TFLMiEP8TsqMYMhYwFiZaanwF7CieS2Zmuc2hu",
  "key14": "2YuGoLkDLy3VhJBsK1ie7yftKH4HERpD9zwYT6G1dbje4RvfniuiVXLqpQoz9sqWtqek4dr3cBMzPza1p3TzRpvc",
  "key15": "3y2ji4Xh2StzuAtUBKyWmRTPL4MyqLto62sYJTAfKcvQQHgRZtXpHXytebzwayYwxK1J7ehbNxkw231hUXsEbwv9",
  "key16": "62vuWKbc4EogHKqB7wL9SHpSjCbupxx42xeuy1NRDHCgqzNBkBAuhZz9bDM39SNMsu8mLhuZZjWn3dU2AXJ4CN3A",
  "key17": "4tKMMfpHHW5RxR1b27T1Hsfe35xiL7WAiyu83t1XQ4LqhAjiw4han2NRJEhTHb1L2HEJonV6oQxV9YUpXGYiYNgu",
  "key18": "5PEFx8GpL6bvuefRM9YVJcJASvkDj9XmGhppNKKFzTLGjPqanUjuoKZABgkj15KPu6o3wmuX2ut13x44AXGhvSpn",
  "key19": "57vH9CQzytSKd5GakaocTfZXMytkF9VaFMA14CzsBU3X3KN62U6QkayKBxBYMALSc8QMjNzF8yGjKnwfkF4Fan9n",
  "key20": "ydqaTe5q2z2jZfyH4HmzgPUJLkJp5LmsEBHU6NzPVNKdQ3vTMjXzYuRtW7rR7MALZqrcSpNM1gtz4bdtL4CDJau",
  "key21": "tpcro7xrDMNjzDLm6ZDCmUz6BADZqqDvzeq2zJrcXMbanEhxRneardE43QpsMcmNjkWvtN8Rgf195KPgTbDteQE",
  "key22": "F8p65gzmKMrb7ibM9J9uNHLsRrMCM461QJGgwmoeXAEq6E1JngGg13LHCtm4JyfcV3fxLHDZy6RMQnu8hYzVH6e",
  "key23": "2zyHUascNeGxFqFHVV72uL1CDhM3NSaEH2Acigrxc3oMwo1afmiNgxPLMCia21A3pryh3oEnBLsiVgTmu5vsEuo6",
  "key24": "4747EXS7YKKPMsCn3HFsbd9yA4a8Sb1DqRdTfSARcZuQosHYXXgacDzNiygFVhPivRuvJB7d3sUhfdF1z64BzhHG",
  "key25": "2N6saXJdqbg36i3wXzMnFcidvKRmYQbu62WJWQkTHxpYR6MJtdKZGrUxwQZetchW5kzhAPMNY2DpiwaR7HZppsqb",
  "key26": "6zzJkSRrcKUbsaN58Rea2d4JthG3tDkTpKh65uirKtBwEPocjTznx8TzAikESi4SCCMKY3mpQzKbdBg5pnSdyAM",
  "key27": "uQrmJ5QVxYzrupVoop46GP3BLqmT9mz9VdAwDbEUdEq4RfUATxv2NykXDwB6S8wpr3NJe5T4EfgM47BQEbEhP2c",
  "key28": "ceYnzD4GjCD6cee5eWHbRoGCn67Z5G7qsK9pcusKcQFF2kVV1A1eVmYhygTiHw2TBt1TdA9nbz185iuHvZ3DSdx",
  "key29": "5a8zh55b9vimY1YTB7wAWGwyrAG791tjBH375dy6CtTPdLjdGRcyieEeuT1Cp596ETD7MLwnJqFvhfC4n94FjN1T",
  "key30": "22bzqDBSyfnCywbeuo4PChSW4y4Lhibvqmcj4Pp2L285xePFuE8HMpnHSykjCPoQjDNm1oDPiGRh9fBt43yiNTbi"
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
