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
    "DyuSTAwpueN4pVh8wscQNo8xvjDZXkD9dkMFtJNM4a5FwAdtfojGUVRE6MaakA5ZkXEAqW3EfD9m5aiCtgz2pSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "csyjBy51oaURekuBiwg6xb3J487dSjBTdMW3kYVi4z1d5oKuctKVyvsiTXX5ZrQvx5z37kgtubnnjbTr4W56U7o",
  "key1": "5osFZQWX17zFnfUXpCfMDEG2ZEagTWhccxtGkxXXJUWNyDT4BLc8WbPfMCcpL9sJkZNaKt7uko1HqRZpxwedQJoR",
  "key2": "XGvUhE2uZBVqWsZ9ZsMQNju7ujPyYbvC3okQr2cBbywSDw7SzqUBcdDa6aJWKsv1mBfEkjTierfxxFqgUc7RTfN",
  "key3": "j6CDyiwHQshVzvcmftvScM2Y4o3fsD6VM6kNgjDuLXS9bpLZ4v56LEUdNAAUpLVi2LoxYhBPRfW86bBr5iztfNB",
  "key4": "73N1MkQ7HJUkxbbRrw4By8PMyUtqSFrZGKaA28i483cAtLJXxYRqNQTVeu3ZZXNNdA3mvYFP1TGX6PGi4CrMMB2",
  "key5": "4SZHdSsxm7F9nBspQwu7TaRCpVTxkvRijQiqp3Gzm7GG2auRHsEEgopQvEsipF2oZxGww8bhBdp6jtY4jX7tyyqb",
  "key6": "5dFDXhJqoiQkGykZPuHqLvk7VsTkj4hmDQMiyscRAxnmajyJ5fD7sUwgwNs2gUeTM8qiVKfL9hM9SNHd6C4i6Ght",
  "key7": "3czdDWcbZmmsKfmtjYK3iut1RuV6hkKK9iTmLAGb3YAfzkZrikBCEE3dDBp5Z6QjcxEY1sGfuFs4MwWp4TZshtj6",
  "key8": "5hCrrrm3jptw5fEkggN5QxnSZLTNUBtfsucDHuRcrquT71dPirCbowwrC3WmkirfKe9cFEd1qRLcL9PEUwNnrTfw",
  "key9": "39EygguJBMHt1GCxfJtoJv2uwGLm7fusmxU3xo5Csu4SWtqnh5cTdMQbUWThHJouGertP2UpDidQ4PP4Q9TCrAfJ",
  "key10": "3wEBnVQc7SYwsik41vi1ejux7qt1SKPL1PF5qjzft8sXqReahxLcPiFbyZVkVjCFiXaDW6YgWVkedLGcwSQ65uUB",
  "key11": "ZzgjpSQo8yTQiy1BXxnWGewynnWhuowH82DTQSrg2FpUJFZZWKmTCPFtvWjp67Ty29bwsAzLv7QBHLwPYQNk1fg",
  "key12": "zoynDbPw9rxUrQ2QuM1GsFNycfqkPo1Rch8Y9zrK9iZ733EVZvxCmeWkjBDDhXVg9VPBCKYyMSV6b1NTT2gN4ui",
  "key13": "3WH5oPynCEKgvkd2aakAVxdnZ5nns34MD92qD3xVJoLVNut9yhPVX2LP7JBmgo1w3Ux5QmPWmun7cdciZfsirGXk",
  "key14": "65PvqanrfAgAKEtinbLArhQALJUpPtLFfjnRzeRns1gkxBNwLabPA7SMRzyWY5paMVdGhwfsN2J2HdKjaws6aF2k",
  "key15": "2s7dSQJoMuqtL4Fs7suJpgV8gtzmUzNqM3SYQsNBFWHbYm9UNiR6kzLUgwokQjuJWnbUkLaAkM3fzRm3ZBJTtuQv",
  "key16": "398yBCah8fcBw5eEyRAcvWg1sDWF3sARuTTh8fAjTEhhszvPLye3Cxtwp7oBhqYwNJdcJkFbaB3bPHXzPJaAmsHN",
  "key17": "4RWPVLBYs6qu4TD1iCT7m5nZRrkkwvf6a1vTbFLL7Uf4SnPnrSkRM46ra8zXiqsr3PVxpyhvF1gQjXpHW2ixPsBs",
  "key18": "2VJBCqxB8JPKo91xR6CPFFdKJknamWJoTCCcGixJBhDKYWq2TqV8VoKFe6WBmmHhD5EhKJ9yLjAtnGNGmbf1nTpK",
  "key19": "cU9R288nXPkNJqbKqi79HmVkTnAgogxTWW9CnzxoQ5543i9LnAhUppsrtY2KjUNWsa8nNW2bnW7vgHZdwf6JERj",
  "key20": "5HqwduCn42ahYvBdiwa8S4T6yxbHMpX1EiuSgtM74d2TE3gpJWZ4xUo2uzTqKcuhzT6VBwJSSu25JGmtxmBzPZ7b",
  "key21": "DrMHx4SCFKqjpwPx7zdGWk4vGFuaVwZmjtLCGBmnfZhE3WBJFBaM95CNh8pUKU5sLE67e2LQj54JPfENtDu4aUg",
  "key22": "4Z13hsdaWg2uCpRdTTDRBVkLnoAUQ8CohK8SBHTfa45F1SKHposDh5TsZqko26QTR1R8TB6Trzg3xtDXiSLg2gcY",
  "key23": "5d1EzXnakVkwrxFiZy9NYqDpG7WnQDShajMJqGCUWEXrsVAQtCAb2NpuTQVkoi2CFutycqtv6AY9n6bpEMfupWLx",
  "key24": "5VvTYVzjhjhdsKb6o3yqtwCUghUiHzLNGDu8wZNzAgLzeKawwKCa6hRu1MpsK4Hoi8ksEymrqNc2hr8K6ZGD6zMr"
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
