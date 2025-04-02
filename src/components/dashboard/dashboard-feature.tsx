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
    "FUGte4h3K9eqGMzN1LsEHq8cqXmTrE83taY1bwSUwtxc9u2zfL2RQNhZaeT571eEo3nfpRas4C1VHrcQW9y6F4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F2WTmMmwJqgQXMKmFGoBgsmHKGCrjHLBNFuGLvf2udYnzz6LTs1ZQvLDxfQ7YpCk1KWoFBwGEsiR31gpPkP7xa2",
  "key1": "63KQr2Z7T3qHvhJV1XRbuVo6BquEyYi8Eq9FN39QW1LRKFrmdTUBARgYF2WpkwQnQ14x9mUB5UYcfcv9roseDq27",
  "key2": "4K5qutRyhqmZ4goqD8eiE6LXEQxJPPPPxysjYTMiHSnDy1mZSizeP75EoqVXDSkwNi4xL3obFn2FXnj6zAT9r1yW",
  "key3": "4uBPC5TYnAiF9yCEWE11UBCyvXcQVzV5WLE5EY4AuJz1uwaRcXpb8g91w4qSPt1UP3WRbGB8NZoEyC3wnqagPNe1",
  "key4": "3usRFUjhQUyrNzJJGMvyBHQ7U6Ld36mR7Wa668Xwqn5AYLt1edwxFxDKtdggHUbqrHFwce7uXD53tRT6SMJbc8Pt",
  "key5": "3N4tnPAevyN4KxX7oomrzzK1i3TqziHvup27Dn4Hy63V8LDAyFL5LV5BXEUkwa5rJdtwHnZUuX5jmVXELbQQULnS",
  "key6": "oH23TuPRVncuJeS9Kt9zojGrZ13Ls51ckTwQTQJoYVRUQAo1kBzpV7FDyF1wjCu1w4HhCYfTxjL8ddyNqZ81UmK",
  "key7": "3dYqsvi2R1UHmxGiY3WoEaTyRG5sYHMGdPexVuTKKBbkPUpvBuqnrYKkhA594TVBymujVCF34UkLJ7TBJv2Mw6ST",
  "key8": "127Lb5tLT6osg6aLnW6ACczaSX13rLtbg6BMCjPffupuBT3hH53R2dLtfHioyWS97ExwGZjkGsoGBeYiR7ZtwAZ3",
  "key9": "55DTZK7himycqCAGP3sry8At3hPwVf9Jd3MziaiHhQa95kUPmudSoAhecuLgpZRzupwTSfxP1RtTK6fysAcKUihR",
  "key10": "5DbhTm3yVMdm7U8QYd7aR6aQxtUx5hmpfJsRGwGmhaEyZhMa6oFPWN3ESyWp1bCpPhPTJyLqESRztHp8JLneLAm6",
  "key11": "hVZ4eeW2jiytVZEPRAKnuiz9TEX1WwJRTQPgb5wnyU7yWCKPD2K1PCytm3fxvcT2eHRBgniBZARM9qzg6LiKhEJ",
  "key12": "4PdjjqKGdXdst3YJqUsY8Sku44aNBnjhrD9CidKc1mkKzGSd3yuRZgNYBVuXiiuQmTF51WDKJ8ikucVyb7sYGxvt",
  "key13": "2jfjsheTJwikUgMYWQChgah86WobzXE6QdxK2ScKQKBm6Lv7FJKA7ewPt6EvNBi7K29MiDvb5QFWs2sNgkb8KWDy",
  "key14": "Qwjgz1k8uTCz5A5FSECsPyR3MREQub9U7s8tftA6KtXQF5TFN89saQbmmTiS5UN9QTd9dKDHjyBv2QJidK8T178",
  "key15": "24mPBfTqEg6w3uSbrcRPyqhL88obAuzkM6kyLbbwn3qCo46RbfEz4jtjk2hXZRredVmySoWCweaxf4N7ezjVY2fX",
  "key16": "UDJ5C38TQWCt1dyuxioZPXQfr6PhBhv9to1DYLyz9zvZqgDcKt8Cy9AjkjiW7bTLkpeaGeCZvoUHiNxYLGjuqev",
  "key17": "5NtykQExDq24EF7TbSgQYPHcLyYYEWaciZLeWXbPw11mZm5t6W7EPxUTU11n3mjaUcXzMHxAUL97Yo8wmPTxVD4z",
  "key18": "5afK6zKUDZLfUXgqwKW7KCp99GxEWEiTLbfQMoU2zErdBj3afLzrd6ejKC16pHwU1GG19FdNs7PLmRZw3BxSoEuZ",
  "key19": "2RajCfBKzTuS9DNApwTWyddxos9YerLyd3KjYShdbP7SALjE5MbBYt1CjoVYPjTJ65dq31mzhPfwS59iiK988jSE",
  "key20": "3ySCNGvKUDYUHpyTFEy9p64yQoep5bFNRm6uLFfsVMyRaPr8mmsqiChnRtKparTu43uDBWBfwHn8A7HD2nisqTce",
  "key21": "63dtUCPib4X1HMfjp3M5FRjr8XQZpRnT1kVJWCZ6mfZDEygve3bV9GEGLuNqBUTdbi3osVNZgVKoRJ5pbwkXYJwp",
  "key22": "4xFgQCgty7sYVn8rTf2rccuB8fgLcGwwYAUeXnt6cmSQ5YQ3XTx2kkSHgk9cwZsStmbbpB1SkRvHv9k3tEu1xwyx",
  "key23": "5cgX2wEGzp24ZaE6raRPMnwhtv1FKqSnFfXpLc3Dg5tZPuHL77tpqFqzyVdKb7bAsRYeTHLkNnW8UFnYbgy8JeXU",
  "key24": "2Cfg7YDpEbCKfh9uqzJbGyN2C3eLMKyfBjCT9MDnrQTZXfHTxoPE2DAPpXuz4Eyp5J9UqsJtpSkFRHCYZG5mP48b",
  "key25": "5WvN4eaEV4WAA1GoNRMohU7exzykr77VKNcXs2jp69tRWR5hogTmgXt1XMmggLTVhftxkV8a8RdV4CtCbLoWFzhu",
  "key26": "T6PwgQv7KaTwiR3MfZBN8pz39UH7mgKJRx89NUWmeZxXke7FB4Urgb5SdFJLbHR2eS9L8qwURDPVr5P9q5E2Pi3",
  "key27": "5dW2zDsxFNSB9Kgq19hZkc9FYEw43WkdKPU7LdCnpGDAosc418hgLZZ14UYk2V9fnFJJ383sMgMjTBmzwBq8iD5s",
  "key28": "4Gh933uVV5S28PFNQw79DE1kLUcnpJTWdAHS6te6879F8VYZ1Ze3G1ziWL2yCVzCVW55Li5BUsFLhuspwAnwP2jm"
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
