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
    "2PwKmk4WRUtsqkYjJ6BM8f5kGVuAQ2nT55rUWPGpCqxQcgfDEmDvrKGTMafUWYyE3CEKkUbxXBVepFgeobGjZ7Da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54FwyErgcCpTxQMUnPwzkbQ88z7TTJNyHM2XqVfE9o4FRjskSzkdt9ot8uDRASrBS4pkEMEacHUERMaP28Qo8C9z",
  "key1": "2qNuhGquYdu67KSYaAZu92snRwotExJiqiFZfpafbdRAXnuaZ6dxued2r4TJ7jhT3r87C381CwYRbD5ZSBvukyg5",
  "key2": "4n986MeA4fEXGAdDvg6UjPxLuPuy5mNzsNembnmMLV1KQdmRWrPpSkRVGvSVq6i11gsDrFTTEpXD5sqrV3uKjSQL",
  "key3": "62KcUNLr5Gm7Ag4zodRhB5Jv24gcVTZR2sgSUPSAux6GdLDfmwFFiyrfBEXcb5dK1HNjpfGZ5yg98SrJcmRixt17",
  "key4": "4BoL2whXBSt2wBpGwxNY8eZ4idvSRHUnnYNJZouYWXiLeTLMP1RKTnzQUGMeoZxkVTLdtZYXKeCg3Y33t5TDcP5K",
  "key5": "51eyquzxcaqUu44QaKH9zy3bsNiNsVi2NRjcS9hWjuJMuzLsveg8UMGLk1nrNU5PQ6tiGUgDBpvpTjAQ5ajZ3V2n",
  "key6": "2g4swS8VV76X9HnTVuWPZfSQzoFjGr1pULo5CjgeeXxWE3t6qQFta5BgbgHJipJrHSB1gayeUiVaEteAWffGuBKb",
  "key7": "3tjC2wmKDPLANeTzy3kEfkPEqrbNakXURkAXjKoZ1iqyYxRgtkqULDHCvSb52SB6vmFbtBjfVMZ5ywiGNMZax5L1",
  "key8": "3Ke8qTo3qhdyrzhLdcmg5eCt99ihbqe5mphs27E6q8xsN1fhdTUqaaebfTvE9n2Pja2D3HDdFzrf7t4Zq8YqtTGk",
  "key9": "5a4B4jB6NKhiMALgBRURjtZiNTdrm4qP5ogAW2q18j1VsBnuQ5UesETv252QY1SGLTYES3hYghcwEQUk14LcZNyC",
  "key10": "4w4XQfHv8v8TP7reji8JfHEiY5tWa6HjgkaAQHmKn9Kds2YB5ZhMDPyzhrWydR3ZpZ1YZQKFiLYd7qsCE2drbKp7",
  "key11": "3jN4iXU4Njwrk6xvxUKfP5FyXrpkLmA9NjcPYhT7Dr2mEP4agcxBX9CSB3yrnTZ7BC6y6PRVkTrMuxianwRdjq5j",
  "key12": "4yZHVWf5oyJTFfUdCSfD8N4x6twPjeLC3jTkStySUyzz1d4fCVD74cU4p54UjYKjNg3KJs5xU83C4t9JtnVcb64e",
  "key13": "5YAmTYAMeSte2G4qQw3U5dc5VsZMxycWBTgZ6MbCA9RVMuaqdNjTTJUDGDD3o78Ng3Su3DN9Jeb75kAGedsPyQyN",
  "key14": "2yodcuj998wpU5qQ18oueAbXEnNPRScG5KDoAThmQUUVeLs4KrQMQ4LvaPjUDuVKLtEMgYBcgsV5zFYE7p5rsxdi",
  "key15": "3SuH6ExWeWHUGN8sUhrJnd7sNo3wTsAPwnVzHSpaJKKcCuCK7gJN2zN5nXpzTyujwaAQt6gE9vCFfJzPrNzYyQPJ",
  "key16": "wLWHZDAJcH7M5nR3JsPEMPgFKbmyqhydjxPAAPRygCJZwbWWvNFXvxx7f5L2qwCWhTQrG4msUgdkBYMSc2MkjJD",
  "key17": "536KxE9KAaHWYpAZwyTCrzVKpkmgQQ9jMaCw4nGHbwm93tFVBQ8XLUdT8wcCYSJneKrg6Z8DEMF7s87hsu11N4J2",
  "key18": "4i5QCgjFCpopFL5yC6KrxhdnYH3v5xBXbULsRYori3eFH5M5475MHPyAJfMMcaT8W1PDwRuzgQehT2Dm92rg3yC4",
  "key19": "2wsNc562HHagCt9aDD2mBvQbxmJ7zQFyKDYpzDaht8GF7Mpy3CLpqeowqtrqFvJZnfWvfFiGkZ42WcPYtgb6EuFB",
  "key20": "484CCG4RShBHFLdXwYPEYVQEEnEE2eJFr249Jw5t3LWer2K5MpGa2MgJHYo7MaoimDyWEUSmjAnV49tw9J9pisbP",
  "key21": "65cxRgHDyJCcRS5J4mezZ6CNtdMxC9nvvkAbJb26qgPcRanZq21QbkLjVP9eKeE118urNSAEDffgVRoAsF4GnouS",
  "key22": "PZkvLGvceCyiTWoTKGcmgAhxkYgyeEahJsN2NKwBBWJzeES5J6KxSavM6phEnDtmn4PL4vDPH62Gc6tkMpXuX2v",
  "key23": "eYhY64BB4UNgY1eFbWDMg8comi9XN5ETbS5kLsiMMQapbEYtx3dvTsovF3MzSd7U9GPRSsUyTZpRvQirBAXGmYU",
  "key24": "4rbFpGY8dQd7odzVS8gsFEMiBSVKcjL39gG4iQaTWxjvuVqYrFBuAzTZiwUpr9TXR4RitKDVbTvxKNgqiveVBTdq",
  "key25": "67BiGaQrsj86vEgxAnQ9q41FP8yBPx14QeDyMFbPt5FM7DGX9iE8QvjZs3ykcJXExoN5hMWofb5FNMdfizJr9Fn9",
  "key26": "2oSukxnn99LWesdqkefPhMcff4Q2jJVpWxqrAe1xRuy4qcu9oBBk35TAunxoai1b6VC57xqnA43ex1uGNvrpqf8n"
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
