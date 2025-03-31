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
    "4HkQCXoABFTf3ipnDd4HnMJVNkG4GfT1Wfh3DRdMSwuYYig96fYqpuM4caA9A8r8WpTLbm97e2kMTRLb9MzLhA7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LjddCRXRy1k2HbcVh9AkRPgf3CpzPcKDDfG85pjmsRRBfmrAm6hAvS8XiCePYCBjGb7kXQnogYZzm12bP2urvUd",
  "key1": "2Yadg4EkPZYaaPFzptCXBVRmFftP9RPXjK6HmSdirFkxUKArFbzVpCnkBowBdGHgt5nQGAJznxA5P8hYVMm7BYFj",
  "key2": "3fmCTLVCZf2ewMUtecPbjPYigT7TAt1aFHeAtNh3GVi8gYCrsf8M2HAvccg9KnG1DGQU3T9Z4LDBQ2nua4HGoQK4",
  "key3": "2tkrc6LFGJy7bigFqECmQK5JKNctBccDzMorXie9PzZ1affZ3LunDUUUAWgYQxJmY9Ew2CUzFSafk6qdDDCKPu4P",
  "key4": "4bGyGYJxEahLg23sZeNrVWnqZxyLFksM2D31A8ZSawFqcFm9NKVrHdxvynokRCPgpMyqqqP8mDeugLzBELdB2sr2",
  "key5": "3wCEZjUB18r2EWbyAeJNLT59Y7RuKKu7yZTR62WiQhGwHGKdTEiUELFfMzTtdqw3vzZCj8sa7LCKN5CRX9LSbk3U",
  "key6": "pxSwufziYYwYnem47uhTEHDtbeawQS6vr3bkW5bk4dCys5mU6ALpeea8k33YeSBUBdyZTNi9RaqDdWw8tbY7Yex",
  "key7": "4FtThpkytDBWDpYzUSq5MDe5mSdRRpGVs8BCY2QUoFeSBkXk1rYHHkYxR97mj9jLtKAkYUoaQnMame3WeXnUimRr",
  "key8": "5aahadc6GdyFrLEQjZahC1Xpybt1pbR5fn6tGY5tnesrLwXBKL8Kax8BfWr2ZvXpfR9dywZo9yXfqPyVZsPE7zTK",
  "key9": "4uurFQ33ySVAnvYdQpb9y1WBabuJzAyuxojuPpHi7zG4xfiFPR9jPMvwMDttWVs9CcPvWYGwgWUVPpuijukSdc1",
  "key10": "4hAuQxBUB2AABGgVgwUCSdjRMQh829pAVDAw2Usww6bfCaqAXkN5q8g84oMTRUBzh57FKMjmsHcQ5uJwrjQRfQYw",
  "key11": "2Yc1Bsf2dxQbyK22EzEiT2HWYPXgTwjyi9Tkoa6CU2kZmHwVczm9quo1NP5xRo9aUTq2f6Fy4CVXLmFUh57Yy9qF",
  "key12": "5KeYJ6puW1ChE1qiBqXqR6vgtH8Nd92ZCKpDop6z4ufToGTihBVLWarWT7nJekVepsYskakdGyPSQyiqZo7DJhgK",
  "key13": "2W5urg2yTFPv1RTvXUdtK9QLc6EaxkLGhQ2bANHSSWL5UspRrjUqBCfB3wsGgTVgzUkM8YeVdnP9eiFayQNuqsJk",
  "key14": "3p9BeZoZfy8Wp4fMcAHc5ckGaAMvMr4sfkGmWxKwDwDD5K6w8DNC1WdqtGxuMKG5J6JJJVnz69zcLPuocvE43iHb",
  "key15": "2nKkkvis7Xzoiu9dyNfVjBtcM7VPG3HE6X6nRw7ui9MetysieTvGS5WEynZjPfDNU4NuMMSRXoaD2EUbAAvQKSpm",
  "key16": "nDHnVdTUKA8UvBpZP4LgKXiRcEG4MiTEphG1a8VX4vUWks4TBNhQQwRexkxP3sJpqkhpnPP8Y3zngfo3EnNHzMN",
  "key17": "3DktXoLUWgYeiRzQsBPuyFADm2TdfnjhkS69STQXKHnRndusfTuXVCf8CZXAgyM8zJqt2fepqEzbwZGMwxEBj6qT",
  "key18": "2faZvre6CtB35ah2UJBSPEiEzS3rnKTV9BybPS2M1HxAhqUuc369T79mcAHFWzjJQP4oA6SPh6SLrNXUNJzotyYF",
  "key19": "3zPcXSGwNj8eHVzDsatSocbKYXWZqytK9v2LRy4Ea2dvmg4ZeHs8pkE1kb5yQojRxdBqnf4EGhHaPcGoHrSzR1Q1",
  "key20": "4RTeghjiYf5PZUNWCvMZWtZDDA4JkgWft53gScPLErvimSd6dFGzcUZp8LXPCDZvEW6TwiA8xSrzeznS1YhQf73i",
  "key21": "2U9VEzXvok1zaqyDRfByj9T91sEFeM1caA5R4grA7KnVo8FJv14XMXYrErEy3gMpRSdgLWVVWTVgXnDkx55WVGiq",
  "key22": "5BqAmtxvHCTvXfB8urkfsqvvBacpDjDnmENo2T8ct1S5FoiJEYdeeGwzCzTtecY1RrwjB927Xw59tF5u1gH5sBMi",
  "key23": "Z5Sn6kR3uYJrKvYtsXx4WFEtpXjguTEoqb8HZUc4V2ZRbA2wqs5tNZGU2ceRMUqfe2Cwt7357xw3gqcKx41jjMr",
  "key24": "49JtFAd76vAGF5NKmj2AzCms5r5ux2k3xZDqpAg6GYhSVv4iTZTxeJdnRGcfYy1RHVVnPjaeAqVjHKEUb7CeHqgZ",
  "key25": "2TytZNACE4B5Ju9Ys5eJ3xs3CPBTubcEcp7von4hQemQfeSSGtwZNgYcWvvS3d71ta8dxHPFkE6ka6KA4cucCNpm",
  "key26": "24AM7JSje8A67XmSRyJeHmPcJFG9P2c2x57FEe5CULEMBQnUT46FttCZeU1DnA29SmuJ1c1fxYht3NHjHkksxrK3",
  "key27": "4Mfm3DFJ5dMg4DwhWapMU2sref2XpsAqCDNaj3Y9E5f5So2rmKUDjiHs5bH1SCi7tSjJhraHT13TkxkfWX6rnpXy",
  "key28": "SMDgQ1r1Bq3zjCiHnGrPavXNuJtZC6mh58JsVKPtsYyeosS3TFsM8Eyw697pS9zupbqkc3QmNiov6CKcBZ7LUzs"
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
