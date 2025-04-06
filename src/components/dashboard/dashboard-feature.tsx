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
    "4E6x7ADUaXrPBoFcPnrpRQ4oF7DvcDSe92hpa1SMNkkMUnV9R6i2Pv1LFxzFy4Y6rDNA6afqzm8iGTMFHPtehckR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ezy35TqZ236w9CMn8VkUrBGojzrD2g69h6TSAXuHoTidbq4f8TSxkrTVS6bmbNYqi5TzDLPA3U9hhCQfNxXKCb8",
  "key1": "2C6V5TLhqbsagk3v9KWV8b7mRZjmdmHJ4UcJmDAYbq1Ad9V9aa6yfEgpaTeDhnCW2mxLaXcKijDzcAXZng3odq4b",
  "key2": "3msDrFpqtW5ycps1NgFngm8NATdafaAspFtdUs6YT1UC5KMEVW6ur9sPLh9bMMj1DccDRM8eJ7YKPt825MWyBeVN",
  "key3": "4huaQ8df98117m1ZTqj9GHkdBxK3yxrouo8xTyZvKpfgcX8CyhwZFdTTbvmvKScGpj58pHuhKiug61RLYFpbD7Lu",
  "key4": "5rSsY3a2Pt8eSgAhkC9EFEZ2ky49NN3zJ97zYuiWXFE9bUgJsrWTbWRQJT72hpZwV9rN6EXJKA12DbwTzNyybrR3",
  "key5": "3M5qAQMVECKie69B6ChzSsf7NcQy2MhKH8Pf9sRFgXYs3R3CvuLeQMNoYy7Wg6bsoYR6h6mdcDVYyxBHUJoF7UHF",
  "key6": "2AV1MkqmvpbLGTqahzgaADdrkhBg3cAtwMTzA1ZFHTz8sQ3dY4zEG47kkeGqyqWdtvdnUB4DK9wi3NLLN6zRMC2U",
  "key7": "yHdiUmAWDHP8sKdSbLiVDJLC1rRsKyLa7cNMyMAA2ZoaVw4Cj5CXy1GfbjG4jeFDtLrFWHVxQYHt7C1dfCX5w7u",
  "key8": "4xoBXc4uTfdRun3x3uGRLy1RjzzgRr4CiA9TpUMz7G9V4svH2R6xoPWipG1Lz1gdgpKRdfs1Km3AtDzsazzSFB7E",
  "key9": "5PVb38N9vWsarnSwUun2dHEHAYFK7LEbJRZ1SivSjpvVfhWUSPJuurBhUdLArKi22iM7wSHsNvpo2pULsxSZPZ91",
  "key10": "4h1DxQSg889MHr2xndBQ5VTwz2ze5vyGnzJ78Ly7tbYkBaxSi5Ws9GJ41AL42CBzQLzrR8aQ3ZWDV4vBZBZj3fXe",
  "key11": "5xb15t1iKQdZDz8p2nyyjmQkZFksBu8o8F3rYSBvvfHEnyct76L6LBgcdfY8LPycvAFiEKaAD597RbrCppDUpDW4",
  "key12": "UQE9xjSHxRWSxNQCF2EgiH97vsQNhHxTgeeSBb1VKVfeVERq3PbVgihAhq4z64iiVTTJK7b4KAFsxXj2v4GevpU",
  "key13": "42yiXAXH6DeoJ991tZpkazfpjTgsYXiL4PFXHy8wPAxS2rkpkjRo5M3rzSD3u5RMNDkRb4bPVBvxtiCFunismTDP",
  "key14": "4EXgTrxCDnevHo1CND68NVw3eXkyZ4ojDoz3hCamvjnLeUvm6tJ8n4QsCxkwjDpRe39eQTYSQPWDwvvzYUPVu3GA",
  "key15": "5QdGHgvYLLh9FrTNshG8gLgPTPjKZGmvD5vgJzr5D2hTdTPHvUCwbEkjDYfGf6C24sLZMPNh4cuGd3npBjU7PBB4",
  "key16": "3LwfFJWYrwgfTW19ocM2Wc1kepVGhRRhnLVD6gXXYA2DLPifN829bphaphABgiNo1YkZcEMNFJxsz8MkpeSBFTfp",
  "key17": "26LbdxHhFbsh4C7cP9Uc331rPVh1EBu4Hou5Vqsn64WYvKFCGYGNd6zuAhQNeyywds3ho7oedBonerJdbUoCRrD8",
  "key18": "228WE2dQt8WBQi5g9WttdEFNSWLgjKo5Cq6TjzRbYPk6qPKRYm2zfy5CvXbMgpazvGt2h663Uk2639gopaMjAmB6",
  "key19": "4oxhfBugNpxCUKX5bY9KTHFypMEtdGAhrXTNm86rX1e19maR1yXDBEnzqmNvmiRciFnLSNUbxsv2DAUYra7iuohD",
  "key20": "37QRGdxE8izGwX2REoW3JeAdwanac9ShCDudcT7AYLDsRSV3MjAfe8B6qCfmw4ftRXydQvbHPtNHEHRKvgyrGaKL",
  "key21": "4M913JyS2zKJdFsgCPZAGjSAmjSTRmqqkWiui9XMRaQBPSvPZMtJaJx8rZ9Z6xiQVMoqmemLvS41jDmNy8HjUWV1",
  "key22": "4q371dBZenXspwAPd8wvmRoTTfBxYr1msZQxQ3dvT3xeh9qroDewKhiNJmqBcYG4uzmZJfcoeCLKgWUKHhFW2tJJ",
  "key23": "Gq8urc67F8HVSg2YVS4ex8T5PFHLty9xknBTNsZPWZypcHD6sbkg2bRZkJVKjLh2PUDLEB3FE2sCFgCYuptj4ZE",
  "key24": "4j9pqFUtCReWArG9mpqyqfBUJPMb4U546zpkubWSq8p45XnmgjdG1WTVEVuryUVZ7zh9pFdoiPpyBfnDoZTvpSE2",
  "key25": "2eHturL84yp4bLM6Dk69mM4XoeDb1boybCmrFVjAVEBLpgPG14kqWwDoEhXak1pcgnV31uFsQMqirAuN4zCs8F5a",
  "key26": "AWhx1nJcUtsrgwaoWNurUj1yjxV3XY193BqtGcT5y6RhzgvCXinuZxuGyxP25nCr1CjwtT1wTir2SN8hRbcPo1m",
  "key27": "3BPxPj1ksETcBQ8ejsqUJ5S6SrXGq9mzzDBRVYLC6pVXsMyeUMUoEyqFsXbajT6e2nAD3BT872kWYUgYozXbo8e6",
  "key28": "3p3o9MCez4B5Tcq6kUFEmvhrXY4aH1h7zBYXY7ym7qiX2YLosJKdKwxP1QuSwpCcz5MWUW4jvGZDy6RCgHeR6y4b",
  "key29": "3XZ7msxLgYBTPzPTzFS784eNWNEEBtPTTbZd4E39Fmr632EXAgHU9VPwctc7f48vt2dSG4cWQpoxYT2wTJooZQSv"
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
