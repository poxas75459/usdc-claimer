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
    "2nepVcspyo11LVu1ZJUHnW75HU6VfMnb1W8Mt6d2eZ3mFHUSfKPS3xaaAtTyY7HGcBMy7UoZ2jFPKFmndyLfUdCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KotHSJzsU3W3M7NdJLsQN4o5QLRKLJxzjYr5KYzfKMbFgZEm5uK3SW36zJZG3r1eLJ6zy7nbEpEZJJJYz6Hq1Vp",
  "key1": "2kq8LEyc2K5j1QquR4bQaKzo8WasVQgtHbsZeKjkb6gjcrQdgnKAQzCTZ5kGCbUtiRsYEgeo89SBs5cJ2A4Pzain",
  "key2": "5adZwKGDtD7UoTW9gQDekCzXG1CUJth9YBLAS8eDhFgU2yajGCXRUEyijqpAfMy8nAnCZHqjYeybVybydMzhLHGn",
  "key3": "Za9f15Rk7ebxsuczNjQDybwPi46qXiNhJSyUfSkR6PGbcVZCQwSPLqYQ49mGz2fmhFbQ7uqWfWE5cmq5mnaGZGN",
  "key4": "5kPoheW5s7eXYZqf87p61xrDcEpvh8uwTnn7XEV4HBk2fEUkEUVWnmMe85Ebsfp5yYZW7xBccE2cpbZjbHP2xenr",
  "key5": "65LWrRwpX8iknPgTM3UVbqcVAHf2nkC4AqFTUdhqRPxvDw8Hd3xLb7dTDrvumB8oZVYtAJj3S2QUuDA8Hnf1Zcv",
  "key6": "E9QPBCp5Ye5RfUSdKWGd6ddQ1UbifwP8axJUQJTYJbtNYKuvRmLvkc4rCjp742T5i57AUajRuyfYChxtWhNDbyC",
  "key7": "3ph9ctG42eP61XX7imABhu2g8kkGjWr8h2VpGQ58UiTXLBa1ZCWPUksWcFk3LJkUuwUvA99fMVyuJBT3osNY9KQJ",
  "key8": "2745fZcse1ue5X45Hdy2tJJHvse9Es7FFN2aQH77wvf7cQ2dsdJAp4Q8h1RVJfwDQRPzHHkb5L85Q74WeaK5oP6e",
  "key9": "3tPY2E4PHQSE14LP4qQP75pSL9cnDcFtbZBkp9PrisPDksjCcV6R3jWrPo2sLig6mhDUfo8EKM5Xudr2j8o2AL4f",
  "key10": "47fmwTNp1HBy3zmo3N6zchrFrjrZp32JiuYm5g5dF1aP4S8TDZASaBHG4GArjzt2RJxQhAz5gPGohz5VQ18pFPZn",
  "key11": "4xTbDHmkJND4d7Fg1Y1F1E1n5nhUq2WqCbx81ix4PSFHryRZHAo2JBDQrJg8SPWk5jjQ7Q56qH517agVFK1GHxrk",
  "key12": "3AUnpmMHGfmBRQdnsH8cM8iFhH4R5nobuKfXv5z9X3rxc3PPYezL96ccAVqb2w6CuqEhDhRoUnQ46WRS1m4hA4dJ",
  "key13": "5XDPA8wDYcnMFGfJcD4EYXyPwgprTrjfGp4C8kYXMvA5RCDzYAXkWD3Dax279XfrSPjVQF9MM4sDKv8CwQN6yH1U",
  "key14": "2Q9kyan5hGp22V1cRbMdvqvhWWHiG5S8Uki67eM1tqenwLHogZchDcFMwLxiqCjXrzJETgAGkHeUHmm7SX6m4xst",
  "key15": "33AF4SmXigm5k8ePAN1zZw6BeweUx8BwMD4DaX62qaseC37JMNMADaoWexvhbwUzznqhUsx1GDAEaDMZ7K9k6kbT",
  "key16": "5dSmEDaf33BgJioCxjL1VWzK2K3PnfKoB2yg3hfhwxCxyMnnAvpcuNEMPiCPZcqSNPR44RKyJnCMNMtzm8AAwRcY",
  "key17": "ss3Y1YBTKTLbnrApNTjCx6vBhCrSKhwqr73UBGssoMmyEoWg6MfCessFoV98HNKiozVrjpmKiXy1iGZKG8qkBem",
  "key18": "3tNLS1H3isGFovrewAAmWeLc9zrfpffQgib6517tHdJDK69rgsP7bZnCpZLdpVMqAxLbKhVNuLtjgXBGxQrpsfj6",
  "key19": "49G1Uo9ogF3Pm7cTpM4LMmxnYTo1v8XbHs19h83FAyxQvp3cFJKXYjXEZboo7w8uC3R4mvYJGVPoR81cvmKQxuPx",
  "key20": "5KdqPyckGUZppvhWz1bTx9PF1HSwW4tLBB6FsTiTfuPSEJVeZkCaWmPhVazxo1hJTHRbapgUDREMXchZ4STVx182",
  "key21": "y3i6b71yb2Jte7AE558sTNmcN3LyTz498rBNKUyt8PWhAPEQkmUQcrogskfwJojS2EhsBmTZZuwJWSgJ1sHadaZ",
  "key22": "2sjrUDheDSErdSp1DE7G42R1vnmrsPMG8eeorWWBSui3r5mwHDDFuZDMFSqrBuEskwFDkfoGF2NKQjQEe5AhFmjy",
  "key23": "2gmrGyQZ6PyBgmNfvY2PpJtCKXaKD8G9css5TqnxX46bvSdNbTdJpgvFV17k8E4pZ48hCMY7o7bbgpc3drdRk4Bh",
  "key24": "mTqH8u5shroTFmb3fdYwpBoaFQttJZ3Sbt85UpgBFVyrU4w3Qp1vsgfbKJXvjZoCsjmPHGenvd5uh62CjVffotw",
  "key25": "uuUawfr4EZBtr9HnieSuyTRT4SXVX2Ew9zK6d5rW4dJ4vGKFTMKTZQFphd9HSWvD4E4SzV6nR8rqsH6ZKbURXvb",
  "key26": "oYxfdHBYvztGHvxGvHBToMa5Tt5LxPhVvctsi8cjwjfr2Chzbab1SpozoPEQNFohXTGHGnpnu3Vvk2BtZHwi5VV",
  "key27": "5yzynApRBSWhyvTyw6PoXSJsqjT7EoSBfoUyajR8KMqCTw2ZpPvHVXWxeuCoRT1WsDMdRc9PKXqzLeg26PFAU5Gi"
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
