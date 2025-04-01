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
    "2a4kWqrLFc2wQ3oYSmo66KNuGwSJYjgJfhpeN8D4wFRtouF4XWgZKtEWp4gvvSBMmABcJcurVkoJJ92FpkkzQyNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ASCb3XCcu42Wtug7UCM8WQyGMjyn3ZCfCLztH91rmXU9bXQppKLrq5PsLZSxjL8Z9bGjVgpCQD8Qyvt7kbytTfN",
  "key1": "33e27pJkb4KvqNs1u7j5uMcXqHSefobLeTNik6Men7niGW27TLT6jf9RPLGnzM9wbNUB5XQvtehbwRmKTgPDMNAX",
  "key2": "5v7GgaQvMnfew99qybYrBGqhvDAMFc2txh8GnZxY2BVhp2PJZFFSu7QCtoG2NmLFcxT7sUbgUmGcCaY4fu6GQKak",
  "key3": "2Vsk3AaCdZ3fxkCM2wpMQbxNb5Fn4Frbbsi4AYSo2Y9ZLF196r5MfCnZyUXf8d393uy3dDtNP3LtjqB7SiwxMJDD",
  "key4": "5kdUvbc4c1nLBQPwR663iABE7B9gBokPW4kNWs6vx4iQoFpZd44X29W9pAKrpWKCiVFzqePdYDqWZDKW2Q8JhMgz",
  "key5": "32pQJxat2RF2pvXixHZxus3S4SpgjaAJmQmYiTxnr5VYyrFRb8TXidvAGWCoMMLkpL5Ggfkx4UhThKW3zudPtyDg",
  "key6": "WHcU8B8qxgEY4YKoL3LwN2Aq4hhArMwZVTbudy1cFy9UuFATkP4rz3JnMPhzst8m5iVgHwj1gCZEHRyJ1jZULaA",
  "key7": "3qWEzcYUscsv2SfJerrh7u7BDwzwH2BaXHMwu7YtqLguv8ZBzUXsY3sXv6ETWwHGZZ5JSRd8thQsCx4GrdReE3HE",
  "key8": "5CYHZhcSbeLEM4jPdQjmzg4U5SktEVGDWtdA6A74hpcdTqNyDsbu5NraFJ49h2up2KBvVuSWwvEfFaWghVyKCeTr",
  "key9": "pwYCKEWHWwraQd7146N1qZxG3JuYKzy1ouMS5JU7c9CLEiQnTpocrtw3aeWyDDJPa3kp3LXo6fCpxqKbJNMQgCw",
  "key10": "3xsvk9LM7xpABSjzTbSGSrRNYqmFhG6Ep4JRWUcjdJ28Rw8AHGRqdGWNspLrcyWD5jyYd1ZWXnWzkCDuVSd14SH9",
  "key11": "5RvywSr9eWR4taxcGMuDygKUM7zG5pFgLddyag1ruFRfSJtLENZ598Ujq1FawpPqknBGR1a5cMaYXea2CU1t3uNv",
  "key12": "2zkvCrPq5G8rU2zXtWQShP5C2zXs4UNgF7bqR2CdKXdko27oxF3nsRhWoBSimKWqfjuXvZ8dVAaFaUKr3rJAnjMv",
  "key13": "5t9V6biaGeUjGpdwcxz1yDyzG88thb8uKqHGGdv6x1eksikrF2R7Bey4veETvuTRQAFQs838oxFuaVuHyR5qvrJ8",
  "key14": "4DLHqDAQ6o9KJUqX8pRuNnrmPu76rG2HS5HAFLiVyUTQgP87KMkTsfCCXJWh2ozgv9YU7Jj2VEJyAfpiyEp8zgfp",
  "key15": "31ywkrmyYebp9rJpszRjpNFiVid2k55LEQgudzhPs5oKe4kXJK2rMaCaSw5FvUQxQf6TYFSaJqRbd9bkptcRr5mJ",
  "key16": "YGgmw2z7Y96CLYwNeLjdtt1nGhDgYD5QpVrg3XwggGN5qqXuCu7uuw5htdGEpPxrtezWFPSFRQpVHtmow7c5Fmc",
  "key17": "4QRuQPcydbaz8LzKMK9M5wgf2dFU2PvtFsYfmV9zNhnPK3qbCLLSsANyU5iyVBp83foeLSytQB9hpWG97RW4iuFT",
  "key18": "4B3eiF9EfjTJin44KJaugo1u86e1QVeTJKKMsgaogLD6x5tJQp4n5pFkcRfd3fHhA2RkS8uFsgBYR8TyH3BNr3Ff",
  "key19": "22ASVHbRfJqWMrBhHDbGhXkd3FVy1fruBh4tmrgvYdyH4YX42m4VZgRc7ih4XYDcSZQjUTb5D7ap94TZvEdqadm2",
  "key20": "3Wm2eJoZgcz1iurZAcioAa52EdM1LBrgZRq5ueegSv9XrYD2a21o5b7wumFmLVtE4T4KYk3nCCFq5Q3dV2o27cV2",
  "key21": "43pSQewsEiAA133YRpMRJP2bXDKyJQksSq7PUJ2ZatVQawNGYc6NfVgZDMFVyBfjrUfe6QZnytxEj1efzEWWv2vg",
  "key22": "4NYKVL1JpYVJJekEAUcvpHriHYTBmLRUovtKiEbg4cC1vYxCh7Xxe8jLuE6mgmDMCmGSqhVn5h5d5udWSjn3d6V1",
  "key23": "3uv7cZPCabmsCDTbLGUpUcJYH5E6e3JLoX33BeHzcP5EijGtELHqvhyAqFMqBGFiBdzFzxWXxCwPnBmRnz4EFKb3",
  "key24": "dZ87cqmB1NVWVntWRpdkXtuYi37j8uRE5zFwoVaY52eFE9QtanKcYh2nwbSs2V3UJShQ2RxSWzUsXoRqcs4oRwF",
  "key25": "5b4CrFXhGZNEUghLg8pQYJtyzSZHd3vVS52Zfwbz5MfnNFepzKCY1TMCoASFGLUQQvqKKgSnpH9w1MVex1VB2Pe5",
  "key26": "2sbdQb5r8wuFdZRb9FXUrjrnsvbGMJ89u6Gat5PGVeWSQBuQcLAE7h1d8Sktcfgc8ruhR6QkjGbeH67PfFjaZMS9",
  "key27": "5FeWLt37uP2Ug169zPhHwRT8QgmbADrhMHKCC8Y1tmHRDGDqfqaYUamdTFAAL5CfT6KVhXd8Vh33nTMSgMjD5Bvf",
  "key28": "4f4H8gdELmtNYzZVi88q1kFChHYsuMfTfA7ekH6dSVzs37iTD6X7bN3xSmdkNR48cWCgj1H3czSZ471nC3Cs6JWq",
  "key29": "2h5PeaAZS2VN1ipzXvHUFi2hgM1jRj2axUtnXuW5XAUDysgERrqDL8jWJ4kP1uNYvZEmUjzc8WfbimkWPH32XZBU",
  "key30": "34QAMkF6XkTrcrfbSn3a5oEV9jwDqV2xB1YAZdrDTbcKWcRKr4dXHBrLRxRBgLuHjmiX5qvaeoQmWVLHXgkgsxww",
  "key31": "4opskiAiA3Dy9wygMbcivLWGzcDgxWsKKvUSHUfNotda1aRFZe9xz7qwSy7ZLk9Nz6xmhEUgsKXwj6TFtuP5XPyn",
  "key32": "FPxNF9x22NL3NUKvXSj3sECevWfiJmYhozT2UvLNuj1bcjpDVpp1ZbVKEmoUrGCGttVzpSvUXGC71c3s53BpAzF",
  "key33": "3gYuPFmNJBocag5BrRRBCS7aHr7w4E3kMmxx9dMJ4GSzgcrAWkVR28hnJeeDa3E5f9jEEYc6sCvyGerjXffCrzqu",
  "key34": "5DZ54BMtR5inPbx45KeKc5LkiecPpWgBopFijxXTm9DpUqQ4VjcX828mtygEqmahRN4mbYUJA9WAcvTSVSG3aU4P",
  "key35": "5tABp3mJntDPYrUz22Q5hZ8ennoFqmYvyoDXMmuTFt4XbBhpidHjDRfPeKAkp4CH6tcrdM648VcZWYFypkVW3Njg",
  "key36": "2w7CGDMe1SYPM6eAKsd344cWXd2Jd6PWtiJqdpG3y1KfiEcEvM5VEXdZFaGVXYuHtz8rdVF7PsRNzPmXPnXuJAFM",
  "key37": "5wibMcjRx1GG3QEXBW6rhJkhmhQiYMNRfdWkdCmFnnBhnVx4NvgKBu9pH2T1oB49MzQ7qy4F2yVZLdcsJdjXGgNa",
  "key38": "3x4ffSMYZzNh1Mi8kVuhAYeo7HtdYUwcm8cUyAEhuF38wyp8DZDKBLs8DNV3jgwEeQv31wbZTeM4EU8pWVm93Rqz",
  "key39": "4LkdFiuFvjXhSzvW7ExTFvLTosU4UWg3nni8aEjmqq6hWbzkceGX6V1rhGMV6gkRiv1Sx58kP2DmEiTFfRhxPDSH",
  "key40": "3sBUfzUk9wnMv3qRGnbELEfExQACcJN5Ka9dR5cuprdkKNp2JM2618TMwJ4ZKK4o2FG6x9JEwTdw2y6zM4dZsmPH",
  "key41": "2ixqK28a1z9frtyoYc7GQK2bQSXxawydj7d5zrA6cLRbZdkt9aT3FUjgGDXCmr5z1TaUFQNAdZgkF4GyZLP9XvMf",
  "key42": "3PDEBuGTZPWPLuc6FjZaTNSYuefCy7ZaJC7nBC7w2qQ8BXbsDpunc9nqvY5CEaDEQcVpUvKEcD3rVCTR5hPF8qo2"
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
