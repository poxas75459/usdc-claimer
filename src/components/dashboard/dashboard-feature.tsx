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
    "21xaVvx7dwzmiDNzb2HqBtwqqeqNyLYYXZvv6tbXvcdWiyBcWaTjQPuoACz4pQhA2BQ5HFmguK8QsYH9gHWtmRXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TuSZVW2dk1VxrbfoD2oJYzgpjZdghVr3ToV1KMhW7yhL4rx5cCGBgBC3MpgTaRk6EyqfvDEo3VcQBAYMpbgGQC",
  "key1": "38w8MmuF8UNQHod81rJq8m5iswChbT1hY2mjdju16NxsmREkJaYQAw1Fjma4JHDod5pFtKu51ivhbmC1mmwty14E",
  "key2": "42TbymEg1Q92QZnkT1jsUaVtRe28vdpz9wyuJ65p5f6HpTmNHSohkdHCQ3yQVvnsjXHSVE2mzHugaCJzPzoKzcDr",
  "key3": "2JtNKEwp1PWw1Dwa8reqfgGSS9dzheTtd7WFr11QHuYY11etfssoAgPm9dX3NQvPL9tZDVoc1teMw55XAertTvDd",
  "key4": "2HaRiabBZT86tx6qLMeWmFPnyAvdzeo8Dv97wydx7rPgBg2qnp1ehiTZhF2mp71A6kTwJxteftFUsGEzupK1S8d7",
  "key5": "29q1cN4n77mJD3raw8ULeeeArMrrLBnCcXFxZonVPL7ZtHNPFDEdGFVwezzd65NFev14WJwD55JuFoeXwBTr26e5",
  "key6": "2zmWWEZg88XYFNUvAkzbYvZPNpuxpzozqXFncgthPnveQEBGXAHxqrid3meERbH7xNm6jfViVNDFTaDi3v1eg96J",
  "key7": "43Wxz2AYCAK9ebhBi3yFLxXM5ZT3697JiCWampyD4sVe1JdEMM3ow836mCZn2uGB2MEycmDQNAQSyvmz4QsnVaEn",
  "key8": "GiwkDQAksgAgCXodJJyDaZq9gBYHcDkqGPPeWJsAoF1wkdEibTxnWP8bDDT3ecU7vtZBqV6u5zXsXA1dR7vodS1",
  "key9": "5Na5M7RtfZJJGjrnqQG1sPjQHWkQNZSd6VTv8E2pDL9SCKAEpGyoBZuC9aMx7V4pSGMnPZb9oiB4FojaTGbRVNNi",
  "key10": "2zgboJkuJvnVi4ijpxXzQKQbEsq7rVtvjS2UxYS7dpbsBzgTYFa7kY8ZNsedyCPSyqGGxNkL2xVUkg242KdJ9Vxv",
  "key11": "UhTog584CUPEZKRx18g3bRUgSUfWR3XJs5APtTGWG6RPVNmcykF9NdgLWPXZJ4zFtKgEaSvTtABjt2BPbpjeAKc",
  "key12": "5pLBNuqzewkMsCfw2V525qPGamhPKaZK4zut5P34nPA5FUg8r9bcBa21eWDC1FW6S5dc3ANdULyJBoWRkpeoHM9C",
  "key13": "2Kjn6S5f9d8btf36gABcZzgdepM2S3dWWZKSpGvHWksrTp5cmsWCYuaZeCsnkWCEAPo2DQMota1jB3behe6jVGV",
  "key14": "28qkx623u4qHhKMsrsiQoAB3RinnpLN1fvqayq3BJQqrkXS8TWREC4izL1kbVwnnYjCkXGzp9UudbP7atatdT9dq",
  "key15": "4k2wbsrENhagv2eg1RPpnGXdLKxxtxaPU2E5wuvPVvLs2ZFuwWoYMjXsVonBMUpqNPBCFEtCVY2DUCwDs85vgcyk",
  "key16": "2Ky8136it9achgueKFviY3R8YvLFtiunQhrQgcoL3kNgAsM2ubXEwqiFwsmfR7FeSyQg33GzXnZxPiVScpwnX5t",
  "key17": "2F7DgvSRsq2Ar936uV9x6tFKc2agYzxJPoRFtQvB4Ng2LTuZRvGSgs2xeMcmGxEfVsJRo2BD9GvsHmdRF2CQxeAL",
  "key18": "2L7H3hYBTWxBVLQrXWCAWcsbcJ9bTQBmBXiWoSFYPyw628wnrQ8kb7VqKtLd7kq6Lwj4NjBo684rK2iQaneEgbyX",
  "key19": "2TnUHhQtWZJTXNaa8YnhFwFtbd1VDJKZJFhPZGRb5K1JEiAD2TjqGsPKvxUTqBjnWjT53fXmJg1hPhvsLhbwuVLa",
  "key20": "GuYemVK8Kaxi4NAVW9Ch5SrcNRZ5htPTmb6aDYkFE6YxqZ5aPpogZN7wX1a9XTi5YMKtk2QW8pv1Kt25XQsw9Ax",
  "key21": "S2wZtQaj57qXiUAGtmtYFqHQtHiKDXHbwva9oBfFajEKbBEEuRNgmwe1dF92d2t6iXsXrFiRkcf3n9MnFt9Yfvy",
  "key22": "4SC4B1VqW8NDmx91Xo4a3AU7uXw4L98TyC9S5mZRDBYFYnEnxP2Q9NjTEwEMwcHCHVAPdxkKPfagvm8JnPmgsHCr",
  "key23": "3CFF6ni6sRjituDt7vJAVu1XUoMRkxKFpRwQsTAYDS3WcvGvhzoRr3trqypDkvmj7Xjeni2X4cPXbyfMs7Sa8gTw",
  "key24": "VcQMjruYxvP4PZnwba9oPT8XT4nBKG88FpEfMPGpEv2RduxGJhHB3K3aJQbNknN4rqcqELQTqWXXs25exgW6D5P",
  "key25": "5nLvPjTwdLw9gBZ1oLw6mTDGnVsRMjzRNtj3q8y3bHER1bXQjCWvhjHZgT2Y6bwUv2RpPPtAe7vKUgyF9HdNe65m"
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
