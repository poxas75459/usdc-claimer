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
    "2VPVnkkhtDqS3YStbVtZ7SCZwQsKAtmAVyi9TYCLMWAF6FWt647Lb9EemqmYhL9maTyj5gcrNU1MHYhx4fD1SJiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GkmcJ68ffbFug9De7YHUywDpp6EZxQ5rGB3TmaPchhPRi69M1qY7DJPvqPhJs85TkKJYHir3Deyh2Y1mkRcKg3A",
  "key1": "5jaBcYXgzo5WjFnwW2fTkNXiXVUBmcoVLTWVvbqtgJLLkZxD9oVFcinBsmmNPSKDWYauwbUaFwTAo2Y8K9urKdd5",
  "key2": "2sHJSwHoF8H6MvCFbqyaFmvoPXLb1Cc83pZBkDbdfT2rFbamTHCo8urz7cxuUbYM6eWk9W7vKkfsmL8RJLZS4NDw",
  "key3": "2ar4nsicgmkKM3h1jLg2qhPBjDej9LS9eFxUbhR1sUwrCYAkFCxsn1Z51U9t7dDaD6uah5erhZFF9U5Wp9S3EohQ",
  "key4": "2nA9p3JXQtuvMRWuhwmJMCAyuNVm9rv28Tv4fpgP1AhB2PySVKCBKwu88zsaPywbqvLCV2L7pFZXtc3AyidbtAJi",
  "key5": "5Tsenyxn7e7oYWSEogDwcyGtu2wqq3bmxoESVT36YPnbNM6BYBqYdGN1BuJxxbixSNsMQ3zSUdBf4dQWajDoFKNz",
  "key6": "2yd4JEseFvGAwXrApXDV4a1iLK8TvwMniR4Sqx1nh1eTjB1rWiTV4otiAKjhHAddeLnA2R6V6pJzFXWNXkfNbmw1",
  "key7": "28LuXX7gDeFsCocYQuEVXaKVUqfkbtTmACkrL7DicL2br8jnK4Hp88Su8HSVXnVjtQFDjk3W8nDP5u53tKa86e8q",
  "key8": "5HWDeMvtfpiPhA2bRs1oLAapLrGz3mxf44bdkxNDkFzAGhqxJsCcMy7iEGgRX9Nx2wbQKJGPdjaT9c6k1iJWrL92",
  "key9": "5jK8K4Z6SgCSUEZhg9dvSijSq2HTNhiWD2DyLv7a9Z2myxG9VFkkGSN9Ryzm3PLgbj6Q5Ayo1Vy2zKGjPFyAXhm1",
  "key10": "4uup8AMT1ewcXjpX5EDoey4AHZNGuE3rVKp6vbqwXGpc6dVpRz66arVrXpwdSADswyAPGix7KBUoN4u4ta2Zf32w",
  "key11": "2gYUCUX7rgKfYbEp74SjcBuE69dnSgHzYuBKPugbg9n6WUofzdcTbgv2kgxKuNd7HqsVz8riGJz32Xa94QsGQeGD",
  "key12": "43HgMMgnfu4V7VRPUMt4qXVJiRkvpUP4FC23yfMSupkxTJPo6shXhG7sx6FjzarMfv5bC9Hk4pBUcyDtgchpQg1R",
  "key13": "432cAGafFD6VQHqZf4vQVT1GXRpAswEr2e2t4yUnbaATg5zeJmYEKmiDZSrfaJ7X22f91Buxm29TtZyt9ihexnvy",
  "key14": "3hHrQ26sQFGPcKQti2XELUAka6VGid26LSqEops7A4K4UPETFqLSsTpt3WQtXEhBoTsv671PXi4ak2xRDF2inAhs",
  "key15": "2XVVTz4G3QtKJWHEnYSFnbKSRybGdEScj7PoGntKdqjryPiMsk7uwYLhkEm6TZ1Df1BPjcSLQ7V7PaZHo1wAdX7M",
  "key16": "5LG28RNG8LP25pWrUzubcxPaPWkwJT61PebZwF8ib3fbKPr2rB1VxApeP7rqDQiNY3K3wMnmJL6umvqjsUbHA26p",
  "key17": "4icytoJ6T1fD77XAgbjaGVHwPnUxUaqPro9QMUyFVxrBcqPFGbWR84DRRVm74VctSUcuMJsryoF2yRf3uXUQ6nkw",
  "key18": "4rA2BuTXVAahR9k2xtNbfBWfWRuh2XLUmbFoxW2BZQphL4Z2HHqw3QVq1HdQCWuV3XEoEUwmeS1468Vz8XE9eMNZ",
  "key19": "s2LuTYgMSSwqDRUqVGb3gikzD8C5vXqy75obVEsWb6gfsRcgv3F6o7me5v4k1KpPa9f8YV7T8kzZJewkGY5LSTR",
  "key20": "41SdnuibuBr9ZLkbPUcsWzwg1RRY3Ymp3QbVsV585WYHybasbjBs9Pvejzx1qBZE2ZhaL86ah5Y4oCV5FcxjsvtF",
  "key21": "23egeJ2c6mitLmV8n9TcAMyy1RoaqBxNiGkvUg1g39H3mCWBAFwqb2vNT7gkDWcPd2Q7B2zAQGxz81phjRgjFmSg",
  "key22": "5C1Rv6PDo1dpwx1NXGN9HKaPKJwjPgBYkHqoGuEgznyVGkNog42tPxykCptj3TtwXwV5A1wpiHmRijQuYJvhdpEB",
  "key23": "4SH8zT4j9aCkm96PFCQx8PYRYD5M2PsNWLvP9EFTf1UgqLiusJyPZuiwLQi1W5kRjaC4zqVuEt4CjZXogaUg1esZ",
  "key24": "2r9RLTSbtagb2tDtoxubR8jDsxp2Kbxwbr4mcEDVvesXd4mdtRh6J3gfvuUi5TbTSdpBfqrJNtjBM2AX1qRSB2B1",
  "key25": "2KpNm6DX3X8VnFBUc98g5sr5oCZJvVuPGiNVQey3ScVSmwegh8TX5mgx67aLoJJduCEZt3J6BSQ3Zgc62XJLHxxg"
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
