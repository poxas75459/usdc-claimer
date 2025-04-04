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
    "gWrkdxVFCmuxAKVdAnytuBL6jCnrGxw3n56bPU9UegUuR8vFRRY9FMoNmhMKwXRwPwhtbZyuC5kb3NSAjEa8GUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nmq5qndxNHspjdWAXa3PT7WbpgWxVWaP6KMgaYfpr4i1bLtsoeBtMF9kEFDS5zQ3Pf4P84GEFGvyShaLi1Cai4d",
  "key1": "54LGPP4D2avAYyuExhw7fvps4VdQSMkXgi6H4CkAeEsFQkTcLXDyYMgr5CyWqvgLd32e81QdJqiYYqMYGPjxspQw",
  "key2": "47zhQNPSVxybH6SjC9hqF2tDR8Mxa6VFsKCqv6Jw7UN5wNmmBjAtohSQs8uBmRKHbnPYG3SeDvsoL5Poai2hkRv9",
  "key3": "242o5FdRnEcVxpLxkVgUGcfAtZFyPeM6XFnMCsbUmBuaggnChQaYFYkriFoYoYHjpN2Q5djjovrrYJ9n1JjShpLk",
  "key4": "3uTDmevQM1xCKn6u2YwZVsJGbzgwh2FUozzgmRgLUCb3PgJy55PZ3UK5yXZNb9dpWRKXwhXcqi9gFoQ5cmwz66rG",
  "key5": "31YxaDkUtFCUc5tbjxckWYNMa5J5s7aVjn3MYyPH2L4mZyhPqpw22Pw3Kpi2N7WfV88nDhvEowYm3SAziizL6SMW",
  "key6": "2Xh7VVugPo8ME6VcMrW4hat8cPxrQkA4FVs252PQqSoy8i5bfWuugyUHTu1gfG6YVLvGrm8WE6HEXVC835aXbf1X",
  "key7": "2y4qfQzbZzytFRp3MXs5nCv5S8mnG3MKQeD3K4DK5fs8Q57cLUZHeL8kj9r6Twainac4y2VN9qSvKRbaeL6UUmkc",
  "key8": "5yvBbWBA2o34J5h1y4mqBgtCZxtXioh2vmm12tZ8XeUErEpHxfF8SXo1UQYzBk62TUNztYyTxD6VxNnj6Wt2GM3a",
  "key9": "2fzQDdMMpJzDfDDdSfeYZqZWjXQt4KCeTfQhc4dauU56g2Y6sXvqow8v1kwa1C1Sd2hKmBGuvWSwe64ZMruZZXRY",
  "key10": "3EdsdxHJM9BxVUunYEiLE1Nhowi95kpbF3Uhi4jMn2we4VwUCmcihuFw89yYsDWNMfioGh8AiTT6FWtXeoKYkrTy",
  "key11": "4wxCTFFnDUg8dZ2W46bgurSyHLKarQQ8FUZB1xqiy3nsZ5vr2TDS9tQQRhCwZc91nzoB48NzSLxGMmbsKY4TsRSW",
  "key12": "3YwRMuxHZQ5htNsmNDUcduYtM6bKemYtVwcHLrYmqDRuuBDHA49PNhK1ygG5wr7HDd55rw659WogxZ1s4LY21gTm",
  "key13": "2jv3Uis8hwhPYnFkybhZcZGPaYV3vaasDA9KoS2x6ZNkkCKiVz71VqMTqq4Ha5yKK7WJrvwESgaHiC5dGxdfdfTY",
  "key14": "4VArsrpGGGLS6kqrRyCEwxficwyXcxhvqFmxpMJzXJoDNi2ekRiAmp5cie7fE17JGcH4nHWajhQ76soFtdGewFyV",
  "key15": "RUEJRAFrdFx8ApyhVQi2Z1XwgbW4v1pUsKDN9acrBMSTyPntwQJon8ESVzcVDesH1QiBiWADK2NKVx3AUFQbXhG",
  "key16": "ZS1RzUiNJ83iE395now2XEZMdgtK53CvWN7DX5FSy1LfdkHME9htLXk3nbSpiiK2qKTMYUgq2oiWfokUWQ42XPo",
  "key17": "4rWRKckkaGhG6pWhUo2jADGY2hym6y7u1D1xwNW8FCR1nQ4n6BTRVZiyCBQRYEcpQpG9ncCgV7Yh5s3Yf8oGzYhT",
  "key18": "25eacxoKtnABSUhmkpkMCJcLL4Hbur1SbaEgigQqQRJTZSVw9zswdL1kcqd2KSAHoj6FfLkZzxtBwDfL82UFNxfW",
  "key19": "3ExukkPhZDJSKbNtQusVTv2ztn8iw7aAa8jZUu7He57XK9gFXU86nRmwi25tw5j12qiYty3dVVhkxhaNYw1M7X7J",
  "key20": "5FXCyHq5fyd83ZujLrfUM8MecPfLVCEG358DxVAoKQCRK3JQFGkSw33cL91YpkjR9BLWRZTyfTboWDcCEkZf9jmE",
  "key21": "62G3U176VqfZCRmkebZA2z4yrsJugGS2rzR7a97qQr9mdjBKjeHxrVyug3z2uZzzQ47md6wuhYRuRipRZSt7tdXF",
  "key22": "24hi35WE9xZhJiHe35wSHKKBHbCFufUzmVVcosoSXF3bNJtbZjpeKb2ZryM2WAVou1NjHhzWHAoMEwovzynYK27q",
  "key23": "2ALadW7Gq5XbaToMhPQ44DdNw5ETfM2Tr9XPqGGsniCcdYJBeoWupkfMEdYX152UTRwEhnXA9wDD1yJZU8qq8R5Z",
  "key24": "5GGMaKPXaKDcKFShtyCGtLu4g9htaTsEL3A4Rkaeh7dxqKH9ZkKqtFrmYyL5PPABPX6D8if9BJu8RjLjoQcnqySw",
  "key25": "5Q6BPZ8WzkHtft2hh8sZot21cZwd7kyoobpDE6nj2icwHhi92ULZNXQ6pTmU3PErkACR9XKG3Mvm3U32fkQXtfQC",
  "key26": "3pFRd5kBcK6RAyuL1SZVnAkwK1ZCvUHFjJ8jufU9ib5gRG4y39yd3PknwVzGFe4zUeAEMZXnx4s4GEYwfJgjvzeC",
  "key27": "3oxrbaJApjwzDQHN6gUmWBx45EP5qAT186ruhGo899mZ2WsruKAcj8bi64HbeD5AArdhuQF1Z7Z1ESeymyHbidp1",
  "key28": "r3gAgBD3XLanFtfPJJqStE9qK3PANa84JCx7GiXjbTyeik25qiqdMz8gVHKeCdbT3w1NJa4Q2rZQsEVKYSMJcXL",
  "key29": "5mhW6suhD625u1HR7sTh3Kwgg6Masyn544XukPoDgRxfr2NYBBU3uzogxUxFRTHrau8HFFXCucWd3V35XnYF6Xze",
  "key30": "2W4WqB16vqobcijfKos9QyGartv4CvcfGa6BznETQFPNtn6hWAqhWqmoFR33tuLRNs86SHGXRU61qRmBT2kqCbVJ",
  "key31": "5RJDPnoLtstsWX9WNocCGL4rBwcBV4tEN5RjMbawhN9UeXpRWV4yBTh2kGsdmeNYdjEEWpMWpqHBrDnTwdP72ERG",
  "key32": "niFUmudpr7yrW9nSDiHC9afBksZVryd9F4CsVzYS9psMFzTqN9maSDN4jyWbn2YpJRAHXvboPv8EUUSq1Gk2Ycr",
  "key33": "513u6jTsUHiv2gKEU23rdRf8vJsXwHk64gi8Wfho51dBVX7j1kxEtmhXnDBXG2wmc5xUUyjuDuyQ1SihkwgBnuwE"
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
