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
    "34W29CKCxZTjUPXdU3pYTkbdH1TmM7hucn6SGP4p26FTatVaiderPkFYfq3qhH6ofedqFai6xsocjgygFeE74WL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MvRemewWx31HqnDUWSfZJSw5GypMddmKTXwx39RiD1NZRXw3rSvR4aMEQJYaZ3DMoeySaSEdoH8rJCFaUMPGXno",
  "key1": "9NGfHyPVEV857iKYWZGxBJR7b5v5U6kF4hsEYRUhyDHDK5tJaR3T7S9DRUvvzFpKyt3ki6Wqy1f8HQ7fsdHXWMs",
  "key2": "6BA8zBqbtnkDwREFAhMS6cHjgPT6k1KyGKgC9iMUD3F8H1SYtSbG8JgmjeB1CQjrEYaX6gm2LwdVwPtSRWrAV7H",
  "key3": "3z18bNZ2FsRikWURZCR3DcbzTZsU5ri4aKc9bXgTnHHKMat8G6GBdkm6Zp3UAMDRSSu4KCJJATNTQdkwakBnqiQG",
  "key4": "35a8PUDfsnaqJxqv9iTdNvy3mcfgwutRKwKNrJagjpGLawFc2iK6kvAUx1tZumMELWy9BDTV5TCfYfT4d7uoh8GB",
  "key5": "2XSb1MFaTU4XfUGFV79pGigLhcamiHfSkn7oQPCUL1EW8UZSkWJdo7W1k73ZvWrBfKhcd5AhhyF91d8ErKT3QjJX",
  "key6": "4Kf59u9XrDqK1Xdt4jEk98KPyVZdW25dXQkXvHaGfCXkb7cVUefvssLL8YEhEw2f4sK4J7mfH8GYSbULweiX6a2z",
  "key7": "3GzgRpqHvx5FZXUgoU6hFLPapBUaRcyTx5azE4EUq1sc4rMEKuqKA7DL3JJt1YLUtwpop6kC1vAXRYg4LcX6JQeV",
  "key8": "5LrRuPqWfx9uwqmyF3MHbUKtSXS8fN8VLdpiLFFgCGjpfBBGznc78sgJMnfVYdNWv9J5QJ7oyyhDEbgcZUzgmiP8",
  "key9": "2YfasWjYbJ9tVKmLAV73fcX1NpJHSPksdwfRSFra8P4bCHUz2aumZSVAhUjpkQGoXjDjAX8E75jxdPrhf4bXDuCX",
  "key10": "233cd9SF1wxhYhweKvy1ZiQSp77K89on9WJnAcrRWJWHkDm8cQbaUWwJ5Dcraop4NQp7g3aB2JhTJQEVb4twZBZf",
  "key11": "282Zz5J2EzyPLCUyRcwMxC1Nh7vE4TSwk3oanVsFdDcDRa6SU2EnUxg7Ah3HFzr62uuER65yFP3bSEkSy49pugrj",
  "key12": "4FMymBZH5P3vpHjZrM88WrF9e39kwtV6DcgDigbb74po4BzvbSdD3nS7GEpV1KJAih296kVqEyBEBrvsXCd4vA6r",
  "key13": "2i3wXapUZZB5xtendEYgDTEZbekszcso536HEHYACEY8mSvPSmASF7BXVtG3qdrgGLbvkrvcgudctWCnD5Tfrv11",
  "key14": "4vAdzLD8jkCU5AR4TwFknm9VSq934GNC8NVxBohqaBvyj2KamgbBmy653EGw3TxJqA6C13vP5Lnwdu4ysDjDVByu",
  "key15": "36zv7epd8KxFTxAiWxsXMwz5br53a4nZ1NDNBM4k38dV3pmbWEGnYvgeN9rGQmfqfBDGck2prjQ9uXvVHEdCsgwU",
  "key16": "4kzh9zVEQu28WgZXBHKcgeQxjK8w3DLrTe5mSjNoeP6oveZPwDqVDoKeFcCZw9Wja92RnDaa9DjyzrRtv4rub5Rs",
  "key17": "XMJzfQABCsbKEegdFaiPhRNAwmXwAh9bj7kcB1EJfWR911aaEMpEEfCTfoq5jLk5xNABzFPXtZisFwWxjQU6BPz",
  "key18": "2cVH14W8D9rTR7m1LGf2cvbvCu5MDSPSDnpagHfxRdc2TxRcThevpKFZbg2KXLwWCymmDvFksQPEAHqdG3crP5YG",
  "key19": "2SEVn2U2puqjcTYJTLAw29AJ6HFeV3Gwix3PDtdFnsYzp1p7CL9p4Wn9KyFrDjLV65z12eRDzBNmK1zrVoM2wJQ1",
  "key20": "HKun6a3SKtXLzzYkWtdGs5f8q9WS5dMXKPWGPb3cZWHRC76a8XHYjRLPwyrNUwkWbupwKGns4s6YrFReZM7EVG7",
  "key21": "4vjmcbK6yaga8uZ3845CCqvNeerRHRc62wXurxmNPKJPCDhr6nvtmrCRUiLiZBDp5WKquYqGh7SQeCw4R5JCBLWB",
  "key22": "55e93gtAWYmg6GJwvBKRsPYxJNT5cwSacVbGyQecbWxCmKRcUCuWjqpptgoJzYUpu5TM1pWMcsuhCBzhvgJmS4iB",
  "key23": "5LrBcVMo7AnCgDfkKKwDGi6oStVupxaFYfSmKxhAGCMXRBrpXcEPP9i9EeaSQDo22oBrFRssNHYGXoQKPMRW7xJ9",
  "key24": "5T6xsftMdmSgvadSCXKKhnK4yAgePhoxkw3rkto1TxWJ6xNNDi742FrFGhcyrTfrt3dyLcsWJXcseY2jbbVhCJ1n",
  "key25": "DypjdCSLxrcxCogrqEBU6iwHS4WjogQbyjywehbSCsftVMEovjsHYwRn6x8qbhYahRLo56uemJiR67W69S5DSAH",
  "key26": "3qiWhJyR3SHH2UAFyWTARJb91jz3wjjVg5TuPEsoJFRrBT9iMSkfxw2LRwhtqa22ovs4vz3kkKKHWWuUR4BMEtTk",
  "key27": "29CBg7zsJLacfcD15CQbS9Y9ZMXcr4KGe94XVmbXNwKtsLL8UaaeRnCViLMd74gmMPPgVcTyNKx33YAXckZ8Es3D"
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
