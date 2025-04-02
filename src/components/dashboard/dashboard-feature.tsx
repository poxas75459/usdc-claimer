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
    "2harQp9b4FAZhjBTyZjvKao51Y5WM5W3r3TEDaYHQCg16sPUPvpjBNx4QTgXpVGneP8twFKNuWQaJBvpiq5TQwxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5awCBtutehTLsa22dA4oZVTbLorq12DeHK9TDm4MMbDnXLrU48NnGPKwzRwcReK24XNPFRHj2YZ9HzeQK29LiNKn",
  "key1": "4rTBAk3RvgVQpfKXZ1RXCFWUcEmvp79K512PgjXXhiYRPUJEDJUzz8GnzDjZCuzcdDKKgtUnasQSz5K27E75BD3d",
  "key2": "2pczxCW9oxxc6KpQrBL5roTU7ceP4a4h7bgAyAZXgxsYdpvChSbf3FWKWqxXqfXBQ8SdXPbx6VfSQD1QDhQ62FLQ",
  "key3": "dxzYA7RSTcyty4x2WbwyQzqTcNMGkd31VrZuHzLt14TXrBzNYHDr4egKrDbqxKKT1D6Fn4TQWwMtqwCUHVnKBDi",
  "key4": "2Kv2ehDXpqXBvxScX6CsvmLNT6BNX5xonkRX1gQZqy1kxBn6V5huBXNFqdmCSDj9YScahzvaTTrDBjrvofXGpGC7",
  "key5": "48D53ZQC3jdtqKCofAcySqn3wXyFZVGMjxVVqkGUqGd7p6CNT3zUuwyB8iPkjmzCqVghYPrXX6XWP3yPDtKcLrtZ",
  "key6": "5pDoansztANtoa3HYvHUGykthfsPbHaB9nFszVctkFdnPHdA4CrJq6XhtBbDX3dYKp57K7A5eVYHnNwL33mXu24J",
  "key7": "5uwaanRqLe1KFzoCRW7mJ5WLTzvG7tfnwMvKfr4emN921D1nFvYyzypVQwZxFDEvWGHrwwRnHHyTtpLtHXGG5ji2",
  "key8": "5mFW1o5LAgyWyMaUMYuRJVMCHPREKESgVdgyCLv8tKz6YemE1fieTCjCkPfkQKbzJJoLLp5iYmHAnMAc2yAvwd2u",
  "key9": "25ku8LC6E4NWdZf6znN22g5hj7AextH9oY58gYzf7gdrnYwt9UR7MjazwWNrvNRQThoFxrAVEFmVTctQPjS8Uq2n",
  "key10": "2UAnrZuAh8mLDbi2fBUpZKMLaUMEYCECtGvB16wccs8e98Dz1V2k8DBtmzim8AMGRWweie38BZSwxJjJdTWZdHmH",
  "key11": "2tfhoVUrqMWd53Z2E15r5MmPN4b55SHR6xMUdHNd2oDoPdu4p4zwNJHX4YbkfdXSGb3Ye4MDAtNuuy7Q6rXgV5HB",
  "key12": "5vRxQwCjd8P8dUT7kjWd29KZnBZV4vDDCLyHn9TDaCZ5Tigx3sy1GV1MjRYKNkkG7qGDpujuThY4Q89eV1sobYc5",
  "key13": "xDq2yfFXwoCkFZFGPkSSw9uuBxcoeXqK9p5x28cEReSERrbJP13WGBVNt8FAs5TJRpvPCZasj4Ab3z98LpRdqhg",
  "key14": "Z6pvDFio4rySepoEw8k2RKLEfpcdC14oMetkuVSZich3wvhq63nanpZF5YNstWfvizqp1TPnETNHxQ1AUf1NEod",
  "key15": "ox1Q2f61jtCTZMhmjebNN4QMn3MBoextzc3VU2aTngZnSR2JcPbuEpFrxYno8tBNEabMy8neRTrdTRPrUsnmo9i",
  "key16": "5oAo7ExtKnGffhRvnAiuWmqCBtwbVma6uT6z8iukALAkb3UrW74v4RMLXg25yNXFgxhsypgdAxBmNcW4NpNLBzct",
  "key17": "3DiHcnzoRhbFac4tAuRg4M5AF8xtLwX934JUrkaHvR7FRPkKghXSwourrq9C3edULPB3oNdV8AaGP7qhBTDePn9N",
  "key18": "2Jnx3VDEWuqGaCh3Rg47JYGpYjp4W8n3BH1SeKQmAU1K2aqWGr7NkuQ1BqcCkqanhYaMNUJ6ntfScvwaChW3LLpo",
  "key19": "61ZdFa6VHgmYs5tnCDMfowd1nS1tn1rMTsEZeqnp3yyQ771jVHhUeGfWF3RLMbuKVQn2NKmK7tT34Rxj9EEhBXyK",
  "key20": "3fKUJYAUuVpRZowUNMYPovWNfQfDXyJz7VE4fZKeBKZCJzaANtU84zjSFVMaQ2LpHSujyo7pfjAdnb1ziPYirDQR",
  "key21": "AkgMLEQ56NShvqnCSYv9sTbmADuAqvwcNLdYVJ5f8mgDSQDnDMnk8JnqPUvbq2tnoPLH7GVJuLGxfTZWBRYNtm1",
  "key22": "4WAdGauQihhBifhfePfxSiQLRVkS93x4FbT8SxWPk2Cz1sSSaQaekgZVFBJUasc4XjybndoBM9p3zd1BB3ozhyA",
  "key23": "SDYu11Yhv3ZBYHsJhWRm2e4ZTLsyE44toQMCYpUBJaPfmPGa14xERW1AB8thW5MAGTkvCWXb3xLp62hkQcMCoWo",
  "key24": "3RWDGJuwHggWpLCv3mvY5af6drdoZBekFY6UXwVpjr75J643BKGaEWSs8B7N5UdRemmh6bZXLN7eYdL6qUo3iTYr",
  "key25": "ZzKyh6wCRvu3Rhjfr8vDe2yn331Qs3dxmUWPzagyLvmFtTsDD2KtfgkNCEAQzNaNEYs8cnWzJdoNeDmqPuFioYp",
  "key26": "3CKL3GTKicsaYSXjt4VHMbsNWKWtoog653zUgdUS7p5PymE7YqJcByB21ZecqdLu7eMeV8nd2aXH7mHdEh7hBmmY",
  "key27": "3Qjtqwmd9hBwzAMsVpzt9bvzgjXMKG1GogsoqCBtxCvYXYYZpJhiiLFk7EtiFHHBhsDtWWv8CksqcLYhdjQHF7dq",
  "key28": "3TMNW5rUdmc2BUyD3sJSfBbdeqLideinfRURWvCUc5oz7gVZt8nP5DdcKiFgqiP9cgb4FL4rF7g6SoosUbxPjjmQ",
  "key29": "2JevG12FuasuR3bP9p4CQtf8pzG45NJ9mnR4gXERUupUJcK2wkc6EdqnjQ45exmcLS8YQaRkKofwhFHjDHJPYVV5",
  "key30": "2MAgfwyZwmqo47xMwxKxLLMCTqrDGLQWd9JZtXuhRxi4FnrmVMHm4qDHrD5K51JBgPsYX5vcUkLwt6sYPKFdLwR1",
  "key31": "62Ds3Dnx4NbS4xPrkoDAontKf4x1PTRPe1YH3X8qm3csedjmtyn4ff8uzS9iyDiFQ6H1uBSiEfE89wpYi7GA8WqJ",
  "key32": "usk5ZjFbax5pf9QoEV6Xr28Vm9XpiFbETMxLgLSmSm9mhc6WrfMvWntYDFxPDhXpeXPn1VQbz4hjhf3BXcJrcwD",
  "key33": "3GyjtTFTG3o6RvLatWuaEjYj9xUgVJbhrXwpnRzeYYYieX4c2i6dB6zRz11po8sZ5W1SgPdCFjcC2AurcQxmuP6n",
  "key34": "4WryqGQUtEiX9grfCBqMqQvgwnGbdo3tcrsb88txTfZdpMiNEHsbk7xm4RCyp26LCtEded9fYCxGctUjyjAZJ63a",
  "key35": "2R26n5kkScYt1BYQZdyZcsD6zUhkSt2SqLi6EzpWuaxX8NWyQpGjFmKCQMHaJGaDe7scNibJetEN4FoJdorsGhp1",
  "key36": "2UisiYnBC88LqB48CSQUvDPAUBpTM1w6QsyBow9Ciz3u8JF74jrnwB4hModJDY7gwNh5VwPne93CWi2fWcgxxT9d",
  "key37": "b8tumuMh3inv48eNjR7BnoC7ZAFzs24GhvbVAyeXJdKM7rXrdnFAMybiNBTB3uWhseSNauqefmri8cQWFLxpdJK",
  "key38": "3a9yvjREb3DS2eH3dse513gVU2MZmw1KCHPmYW5e9vP2xmVAd2u4iKra6PXY23MtRpXUhTNncXB1L9J3e1yoraUW"
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
