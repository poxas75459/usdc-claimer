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
    "4T4n45PtT9iGbLqP7tk2TLDPUaCdUYpeiksVWfvoqZdN6w1YJkVTYL3vvk7AFvoq5WCYJAmwCfA4RdC4PfHSnEdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d7gtSrw7HpKM8eeeEa8HTMt3u699foWQQhDPHPTHj4A6UAfPg1PbXLXYtqLAD3GLuT6mdFhAGxCprf2A7vZZcgA",
  "key1": "5GMcC8sh87jDhJXCvtvHh6kZuHCVoAwoRERP2AjMyW6Fkd18KYCoTuszZE7UWrLHHgVG7LDxU2woNHko7MhvSP6L",
  "key2": "2MfnemVpZvzz5GTUs1zjHo5Rxx4NVgDPdRUt9cgCM9VAK76avHLMUncwKuPJPcHnxho85j1AN3qVsXZL4jkye3hf",
  "key3": "4E8QMuvfV7y5YWgcMbTmovpisTUj1SpAET55njLrZrRgtTdL7NozqtQZsvvnC3kF1fK1UMEjtS1pFyCQkAbPkVoy",
  "key4": "432z4WdoegzmXyYWFfT7H4i17y7sCPmhs8P1FNvzwq99KjRYjt7wtpwsnvmLQhJ537nDkdZLZATrxNVtETKMpBQ8",
  "key5": "7hitZEwWDLye6vtNVcxrmod587E7KqcQ9qs8U2U9GcW9EGGEy5YwZazQTwsZCu3HN8rwXUTmCvv22YdabSmf3sr",
  "key6": "4e4F4hH8myi8zsy6j5ze7DxrAxZ6PSMuwS9K6sTzxkzMFuYmB25Yjy6bMcpaQiyq3zSoVjoHyN6uNn3uVAY9j5Yt",
  "key7": "4pM3B9j1YeNdFFU5cANLfvzZRBXKNs9PihKxY1nVgBfTmHBFVzoYamLzaxA7cuyDQdHMABebfDs7SBdtWix8Pvgu",
  "key8": "FzhPjkPxnK9Vqcan7kQfSRi2qWTLUaKqbWfjt3CN5soyvpWXRBFfBVNPE8DNr5dHkCgiY4JU1Rr9mTDLyzk3Sd8",
  "key9": "3nxQQdBLqNg7nDrJ7Q7eWW4f17xjFxG6FjiHbP2Ai1TZHyd4tTqWLKTGSnhxeoQ2Jg4NYb2APaHdffHAvQVBYfQe",
  "key10": "2ZbSvf9SQk6GCFtdYFxQ3gFcazKzBPrZ6oAtTxoDL5EKj15R8unNNLuhCugcgQxLUvXpDD7AgYfbfkf9tDTBuUcq",
  "key11": "3JdhMWn2yE4XhqJb7yBGvTsrCuFuPRMdmsyeVdotnvy471iWxsQRe3UWN1wteTKoU3bGnb3WMa4HtsS9QSvocsee",
  "key12": "3FTEs8TUwcoHK2nyhoXj2GvzdNVzcCdCo6dbdgm1K2kq38kndk3XnSmnRtUaKhGqfW3fNH7EryDfnrdnxsdrxCLG",
  "key13": "YrXhDD4f3uDrZmqEjckyk9Z9rYAuD9eSHeAMHDesVLpSqcxFhsZzVHZNesLnL7w54SM6jbt4KRGb9Kh3DRB4U4B",
  "key14": "2sPDt2jvRQFqKSF1KoH3qJGTocBj7DFSvmFqqNF7AseNVE5AziNV2vwxiZAE1iAB2oC2dkKk8Rov1Wv9ZJ4hhjAK",
  "key15": "3M7zY8FGjkkMrGHGD1LmpkkpQo5rMjByM3Lswi2cXQeAXw6h1k82TQVYyRQUxbXpP1Y8g8ipjCsuYeqs67yWz45n",
  "key16": "3n85rfh73XqHFvb7vT1AvubUbHbMTT38894tZFbf4fd4ku6GPPZj6qb7YxWgZDJAVjJJtFRYRSHFMZtkqfeA7ynA",
  "key17": "4bYMkWXJeoqzATSAGc2wKPhBG9pvhwbXQ3bo6e3CceYdXkuer7zmton5wJbcji9VufpHREtRnC6rqrAyQejp5HB8",
  "key18": "4aunHHfQ6viqzfc8cPswgUgBdRTnprfkYQ16grdf6JJxLMfMFYKBGLDVTADoPDxSvhDhLg3HkSr37GBvJ1JhxW1J",
  "key19": "3XKEJPtqyLTWqJLA6vtdfysGowzDwzvDcatKSZoRG2QMvBox6Awr6fyNmwJddMKVs68xaK2ow86HX3mrct5K2KdT",
  "key20": "pxyrx9u3Aed6QQnbnL7KeUKV4aKdkgyZKPuqzdukSmqefdxbuzipjNVLgcGbbHZgFjjtDoGf2XHzWpQy1pLNwzS",
  "key21": "4DzuZYA4zDSvzF7kmwAiGiqPdymShEpBsbjzn64sjy5QMdeHs1Y16jCiLyrxviDQ4miydGquRrgQbDLDJj4j396r",
  "key22": "2FKVfM6DymeiP2e4YiBoiSk9HRurwa1WbaTbKi7ykF83tvUdDvdxBcZLe4NMaGJrfbRf67m5NxbYdhikNXWBerde",
  "key23": "afD89S8nLfpGXLdTJWYanqC1EQkKFShj1Vq6VRWBDcFVeo9fWcCK2cbBP7FRGZBSDuGzk7jNQUDGmE4eyw918Jw",
  "key24": "39Cc6YUzgEZdBBiHuF72tgR6H6SA9QnSUZGH15F4XxMXPCidEUTtb4288mzvspnViJ3iGBG5wg9KN1sJMxKXwNqa",
  "key25": "UEFSPHNvBNd3ruvi5mjJjgr2XCcXTJFMHFi5jc5KxdvTudqLk2Nj6a6ZQTfYbC6n3bf5uejFELiDyb3yoAmFPqU",
  "key26": "3j2YWfYzFgLYavTqncrBkkWy6NpRvuoGgCfBSGEPJAprM13i5eFPyR5dW4x9Xpw3iaJ4yT59wRysXxzhmnexvgLT",
  "key27": "4c8qz9M1MDUa1sKFNMQNNeokfGiRFNgKTvnJsiodYj1Wwz6xaztswTSkLx6SahyfqEVe1FhJzoBfwALpuzYjPHBZ",
  "key28": "334T3MZX22XzSNKmhCrKCU8xuZN9A1W2egFVN3Whv4cRrMhgndRnJqxC2nk1HGZ74sUwk7PEN5uTGyESQj1V3MX1",
  "key29": "27mTzxvhrXPQBAbVnaAnABZPoDptui39co3WnY2t4kgixrgyMFAGRgAELzRKqH5HQAPzcan5AL5FENqoZa49xT2q",
  "key30": "58Mu36yvwgvrp5AzynVMxRBE1PveQYs1TwdQg2WeeVTp8wgiz7woQ61ukHxEbv2NW3CxPpb8DmyRytMqbdYsFiRL",
  "key31": "5u61EDwtSKLVDEyuUA3wrn46wDKWvJSfVtmcqjX1RH1WV5WJjnrQzW91YyiZMSv36bKjK2w3y97DijCTp3fBkugR",
  "key32": "pqip1GcZjDajvAx5AiaZvRXHc3orzS34mCnJX9zrpLZvi7kJCpV5Rxxco7Fbbs4wf9To6kZzWogaigWrSbKDiYP",
  "key33": "3SEFncUiGkbtKnxm4iGwoZNwNyxyyqEAuA9znYprmndMcmHFNM5TnZQ4Yw5SF9f4EykTyp3BtfbNc7JxmeyDe8hm",
  "key34": "3b9CT1ptmh4Q3QsdcPgz6pEAsg367PRNvzd797foERvT2GAFihRbPsYbxtCh4z4o8EVwY6bF1i8Cp9pqqck3Gfb6",
  "key35": "2JBvMrDXJFRiDURXsVXgFKUDXexdwpu3iM6VBBkgGs9phwHzEkaTjM1q3iLQeZjdcefZDF9JH3REERrSPLBW6R7R"
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
