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
    "VF545epzPDc3PuiK3EuVZEeNS1s5mPPLBvF2b9bG3U4LzfRPiWyPiWuwutFruJJooDHyd6H79fseD222Qe2JiwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BXbxUg47tn7AQnJS2Yr5q8AV2DohW3i7GWgCXcEsATTnwde3TG9NsZTqYRAdpWhi47Z8EKhTqTujavzSy34qr58",
  "key1": "4jqx76P6f7Xgb51WTxdaJaci9Acm1KR4EwPkG3E9wHZTX8ii8AXVR5X47KQRf8dAE8Sht2eXP3aazQVGpUVLMyM3",
  "key2": "2epTaS9ZiDAA6GVebqnEWvrx7qTYoKDuWKUpjB9haGuxC2Q1DXauPSXuid6oEZw4DnvsAa1K5kCgMBABCthSEMTF",
  "key3": "4J4dPFnUsybEfivGsYdKn5XAtz18y9jHifrbnu9uMHgw4SCw7ufbhvvG4rpW66SyUraZoLytdvoM9bQrCB29FgWT",
  "key4": "3QKS1tQCKTxiqAQsVy86hB8HDgshk8CYs2fVCXxnxec6NDpDF1mSqhZ1FzkqCvxB4mJHi6TsvCyB4QGx7g3cmYuZ",
  "key5": "675sZGMBwgyYp6WoWFbbhsqGuGaUuzZjAkUvjc9ndiDB9Er11w4TPbss4Q1QXWwtj2sWTnZj1uwk7HhFWKrMKB2D",
  "key6": "dLbhS6K9a7gfWUynjuzhqPqtkAxd6UmAYt4feWnyLcorkJQN3qRkvgQJmetFkrXUXfcCDkTyKNAKk6BCpCa9yYW",
  "key7": "5D7CLgRdiqWFkCwz8FvfcxPyfjLFMpMpsEWa9ZveZqjyUBvrgcWV9PfJBfayXe2XNoYx3QRDm8pqphDjj4SyFB7y",
  "key8": "5JzK8izQ2mVvrHZwMzbNSAzrCtRBRVSZWAnrKA61R3hDFqXhGQp9U1W14EoAzW37aAYh4KGDongTsZ36vuWRRKaW",
  "key9": "5BxbHN6RCB3YEpBkbeifgxZEb9hjQk9GCQvypEMmMwn7ew8x5JQyp7RsQAVKaPPfqdWzsN3cWDjJHZL8ux4RC9Xq",
  "key10": "5BCeFcTgErAeNXqQMPdDdweidcSHHZ8nwLs7FHcbDPZfnV8pCg8WrUWBvfhWPUonXVADgPhjUz7CGJNThH3xNfhJ",
  "key11": "5jxbMP8FxDBbu5oAJ8qrfuaojNzHqz51a4bTHNaW6mG5kcTEBeJkjPhvYyUF3BNgsxTLgtVQqY8UJN6gjdNDwbGk",
  "key12": "4Lrp5NKykhk4bDXt3ErsPabg36Vy4Guyj2tjt5RWuDsAmWTLsUBvJzVJziy9VMn47xHzTSEnCAR9pU1EXxBLexpx",
  "key13": "5D89WpCCkp2SxEKwVv9EWvCBvkmVvCV5dtiNhdCZj2aCrTuxBnxMB5LfF4ndZk9PyxbEv5bWoN7HrC4yheN4eoMd",
  "key14": "4qDnLM92qxChvjKb9MJXwycT8NGAtR8zNcxnwGNXU7b6AYP9LC9eSrHwAMi67wotrFfJP434ymwsoPvtnMozuHpK",
  "key15": "oWiqj2DWC67G7AZNeV75mRZvnY2yYjy8JgajHz7nFNwqp7pVjMbR6iaAZ41uPK577RRFGbVMu5fdU4xwSwMLhqm",
  "key16": "544YRezkpMQDoHo8MbzVFQ8UDGrPjgopDYbfzrGhAFamQNnU2CLoDsM82AZspoz8wcMSCErW5ppZRDzroowR8YBc",
  "key17": "4V3AhN2s72om3KwawwUYqVNYUv8j5Z8RhTGs4nZaeW8xTx7ChMHxYijUGVmDpCMsuDTJWC2zG9BXvJVchbeifjCp",
  "key18": "oAbnUVLHv1oYgm9A2JCKjfW6zi8GS6NLzTH93weUfp4Hsv8j7NTGtURgVGizHqmk2ML8MF5XL2LYaqRUCoKaidi",
  "key19": "3r5r3UnG6bAfJ7zY4nCK49k8U3c1Bz5hwttv6KA4by61rKdaFVaW9MCrQuSr4j7BTvi7L4CKhLHrRP9XSwFaDvS8",
  "key20": "3d6FznpyFgG8qmGSUr7eYgSEwpxi4QEZtiY5k1B5CJyiHZz32s3WGgyP1aWZv7kV7A6yZZpdp5nBhFr4HRBZVQbz",
  "key21": "36RXaYuatVdxiWEQQauNR3qTGeL6TSBREDafPy3VbiBF3LdorFqd7F4U7UDjQ5PM3dhASKL6f1uxaVMrkH6XfgBu",
  "key22": "5N84Y5mJziYE2YyM2aiWrxhoNrVodCdabs5RLS5XTVuJHtyhw96jZv4txqGi9UojqX65crwDBiq3nxxif3whTSLk",
  "key23": "2DzBVGiKVy8msNjYer4kbMFVfuMQxMH8EdHQSDrmVheU2SjnBJ7AKr76VQsnynNZM7edVdyWKmgPjHESSnD18VUq",
  "key24": "KC69XGvQG1xjwe9yd4ePNYXahhx99tBnAeSnQ5PeNYcMcKFmqDcjZPDaNZEqhZX83nnCxL8qHdwE8iCCwMkJKrh",
  "key25": "bWKVnVfABLyvpX2BgzEW3yjfyHf1tWHtS41w71Ld5CeQiwJNkSUnVwANAiUuGAXomQ3arSCPx4opXR24R9iJLUS",
  "key26": "3c3jCnGGJpDyTJVYKCzCtKbRtx77rorc2sVFTTxFU9dAwADea39XDkSzqU62k2x6oxTs5P96rvnUXZposoVm3wct",
  "key27": "47U9x55gZTKefapgA4HdHCYtmcaj4vgL2JDtxZ6sxmG9mVA9g4jtMznsEGvnPzQtxp5J7DhQASJ81aWizJNLmPMs",
  "key28": "4uuLa4kk9Gg1MPteSovvEZ1nobhXcPfKqCiV4U9PTNAdZc28PL55cnFASsbTDaGJ5ipMXBGcrKmcXKWHebPbYscp"
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
