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
    "PdSFf15j2Q2mHizswhbv1Fudea5tY5WcX2rW5T8atPPHgRkyCV9nWbn4evGsnVLuvZghAPZU7jhRQ9DyGp3kyh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrYmLmpkYBmjegpYTm2SjK27w4w5VTqDhate3KsK2zDeUFk3cCjfwDc1MC6cXaRvB2zmKrEK2r2R44ndNcjr2aJ",
  "key1": "4rSjS9BWZynuLNFFKC4mJGPUn1h8g1biiVK5zrWKDRzQYtufqU5E2gz4UxavZUSi8xWaorvH1dLeebPxF7FBfe11",
  "key2": "5m6aHt9ijBGsgfZfm25rcmT9aYPgZHJUDYQrdzqNLqmA8cLLmUY5SAAc6JxnfaSpdDjwafoHJSZFyffgXzxnU4WG",
  "key3": "4hRyu5nBuXwh2XVJNSXhuS4eicjhZ85xoHoP2WdgugvrYL992uGx7wHLSW1mAiRoFXGRoqqDqaNMmpuPkFw2gRe8",
  "key4": "3inyeMUm5HQxDqHdiLGmj1axQ8icsvuBHLNHi5ZkMLs3Kx4AhciVifuB52dsS8qPVUNsUfmP1oGUiX84gnSsn4yJ",
  "key5": "279jMRo1K9XyJKUpQTB9mRDucQFTdwyw1CLKgnTFbDQcEVwBSPKr9pWij8k9h3ZnpsVNGXKE7M68FHZoAjQsj7Xw",
  "key6": "zppusnNSFNCUdoq45JnVAtgaZxhFM2NL2b7PbEyh9ZMtt4VMbPXFPiGhPeyYMJcJEhzm5CurqzVdU1dU6NLQwF6",
  "key7": "TtqxUk7GwSLCb6vLw9QdgsLFnZYoAEzm8duDfBMfnmsSaEYRjHvW397KaDAuY52YUHHuWR85sKqXnL4VwYEB7Xa",
  "key8": "2hUtY1KBi8AB3LiD2MDTH5eENXBFz9oC1d1jWipcgnz3VSB9KbEhKZbFbAF1DyCTio7KbUbnu5e7STypgTfQaUcZ",
  "key9": "4tVhEKkay2WYpXuz8Q8T3W1ydWyy6bpbsXvvtcushceewnX48VEjNCkau7phegmAR8L3cdsazFPrKCzC35H7wvEj",
  "key10": "38iSeVC6sCm7WEMff2imB372yZgXJro51c3gb6pezCvwtHr1B11wKx2eN87qtmnNii5YDYgFCBpi2FCd2MB2KcZV",
  "key11": "3XZ2EaDwRBZpCteQhykzBUnUVLMdYSEZYoe8eUumsZJLPKnS4b3rQqgTG7577HQHQnmZu3mnB3nz5bB7fkewexRD",
  "key12": "2uswACxDwV2cFCo4mp8xjvNsjvnnSYA2H7Vakk8nx5aoJdAnrhQfSgwFBhzNXt75vxMMjBMsXwZmxUFChNANm8KA",
  "key13": "4PCZMPXY1eEaQhAESMCr4FEcQLnK9ocNTeqbhUiHd2QprrPBvvTvKxVPhiCjusSmCDb8DQcZ6oXyYpUCupCFyth4",
  "key14": "5cGuJZq4YezCwAdeCr5Ux4sSYx96MPrKLFZ96cejHESXnARhw3QiXAnptHE9J3q2SgNBASx6PJW2qTbAayZ8y84a",
  "key15": "3yJG9KPcjFw4iSppcSarzwkZjFS2xjiDZf7JZjQzB5WbxnnbEe11gyi42yBs9uEBer4GWQbDxJrkNMDveEHR1MWU",
  "key16": "vnP89NdwKXbvRwREQV5LiJKEyyEoXfhpMbAi3bs8eciXBiNa6v82p1vbXqNSb6jUM8QCkXzuDELLwNv1Y5tgJNM",
  "key17": "5LSzB6M2sZHeU5z7TseXAZmwPQkAfy2DSZAaNhff9ntpFMscEAfy5drYDqTHuL7fYmT63wgmSiG2BdnQTvhcYM2q",
  "key18": "2RogVj3tumn6mcnbmi95iEia688bDmaiP2UUMe28M75SExcnGdbKZbwHNMwxibycYWLqtSyyeMZfi1YxRMWPUL5w",
  "key19": "yWFsfE1aRQJiVTGJ7Pqs6PFG7W8VsLf5MM7KAreMPM3SbHWMnd7Rq5TMcUDHUj25CwmKDGVxAiVAV5CSpAdp6MP",
  "key20": "3jndvjRGQhG8mERaCU68QUFiK7MCDqgpuDJR77vJDtrSksGBxj3PcPfhqEs79UpkgCLK6pm68mBZW527f81GKyuk",
  "key21": "2zWLURn2gfhaMKUnJGba9xe3crEsRVnCnbYPJEK5yJMRTkZHXXPqEKUyMKNbXH6McQD79tEC4Q8pCnxMmmPvRwT4",
  "key22": "335nbc9x47uATSyeMJoX9Lym7DmFiWhrnwhkpNsThmeaDKJDsZLWwfWUmPGjeggwkmnpeiz1tkD2gfjdNdse259y",
  "key23": "5hbY6Y8bHUkbJt5Ptfo764BUi3Siv4Uhz5U2s9N5LXF3FZ2V57yAoFEFtKKXd2QMJMjnQeH45Ae28uqW2T9KbHEm",
  "key24": "5De7kGQXJzHxrsS35JMJuCKeSYCD5CAKqye4iKxj7q6of9Gws2GPB2B7EyAD3vQV5ETfd75GF2SRSMo3EDeRYV85",
  "key25": "S2Fe7Ee2AAMGhFRaYGEkuqeLAe5mn9uvAGSEDfiUMUZvgPmDskp4S3choe1Y88aiDMVNQz7mQSqA87SRyByPbt9",
  "key26": "4xM6T9HgDk3tmHCZ7taYEhEgE6JAdnDwQoRyAVP9Ly42dUPNnXx3NfKJEHaijRton1K8rgJa9HdKtjb2dwy4YyVR",
  "key27": "4KZNhGAMb8waUhPNGxtHwzbF88kA5pfGfkdKP3b64CdTtwXSvkz9n6KAuTpEQixejs5pYEj9mRQHknuARfta7tVw",
  "key28": "4XnW2w58KUKbr2PrVruEhoQ8KHvzLUHoMCDBAdiQMvC19BT6UqQ1W9cG5S5Ht35ZosYnRohM58aFkt5TQQym44Ef",
  "key29": "wg4DAsPJMfHSbemTQki9dn2YjBUEC6kL8yunhBT8ei9aFSuP7bLQUv3Kq4F5rszxxXpR4cA3JKQ8n6BBAdRJNim",
  "key30": "3AxMvFvxNCA6pxbYL7JfxBAenvvU4QDJuzqLi9RTtf1HJH8QvKYYw35YeP4Xcpg6KQnqdx2uvkBBVxv3a9Dbenqw",
  "key31": "5ZTbqpgxPEzvUb3oXUD7ZrNWqGfK5kgHGigpfzXBitW8HYgBQH4dccb6jNzPWrrdL2Y1h4cRvwns2jGM3mcGrAWx",
  "key32": "5UnjYwqWVTPEW3nm4jjKq2AhULKU6H6jLWN411CkHCvQbgDsoD76z8TVtvRFhik7BMAcLTktPrMvHJcN258R9xeo",
  "key33": "hkBpz1RxcWSkC2hkfo7DdPCTUu9haN8WzqmViGjiNZQvFhTJJDzVayV1NEynoqfHsy7T1siSB3weSLVGxNHRV7a",
  "key34": "32AukHmwXrMEipVAtWPmofWsNadeQTdEzx8RdzVbe3XKUznEwK7Kb8bUHkxDbxTNSMXiWsFJYQRd58nbxs4xbFYA",
  "key35": "4bcibYWTAa6REdEa3aCpFDWDrQMWckDbsvAMEHx59pyZqvdezPdb84THddbbQecbFUJ6TEi4J2W66YhsvLyD7KxV",
  "key36": "3QToWXh7D841VUBSsVndJWSQhoSDF6WVHYugJ9Z3NVninimh5A6129doXTrQ84XB5xtVFwhk67MEiyK2LJpGoZor",
  "key37": "4mtsr4TrKdADDNdMN4CRrbiqU7HMNfrCkQ6s3aLfz9LUAfV9W33HeJ8EmmkHgr7gWjSXZ8a3gPJg4A5FbHVCvW7t",
  "key38": "2WBUTRyZsrvYvkHaE9vzP5id9PNLTgbkMqWnRZ1H1y6yjHiXnAYBrAdFbZSsCWBz2xhpWEzxPzdke29kYLLxQru",
  "key39": "4yMK3QxJK7gcqGdPoYx7wmpzRpBUasfHkefuhbiqB566eUwhvhTMi9R6qAxuRXM143M8dagJcaVEtLsN8UWaxrNk",
  "key40": "2SYTMvv9DSr8zwPFJb47aT6FniUkPhFX9RqQXKvutDom3Mo9vMavfzAH354DLbN1sG8rVu71sxJytBGywBQKAN8e",
  "key41": "5PX6mwYutcRVJYC163WJ3DgcboENBvDT9QDcCCFMn6gLCQSS9Vs2qqPfxuLxeFfBnKAZ7Ng86mFkRLSCLk3Qpx84",
  "key42": "2iFoyShB8tf5y7vnztSeHaAoKwdts5FBpC6n241fgndJwaVCULBxrGLopiuy6E3JqSh5uBKigWNgY1VEs1meBPst"
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
