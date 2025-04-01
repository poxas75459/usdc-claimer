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
    "4TqsXmFWdM6yF68KuURdsQXqq7t7nK52WNXifuGSep3meViHdz1aqpNiwicUEj2RhCsyPgEBbcTGUnRvtMxGLEtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24zVMTMeNUpF1MxrpaxKPLxFmZycWYgDpWf8a8s1Bh3AuAEg8pkS82wXrJxUUd16PYMMhzQ7h9YhyDUigGnoXpvt",
  "key1": "5R7ebZrDspDRHCXXYR1o1MXDmMYjNUSaLUsnBjsLMEsypG4TANjMmggKDTMYNxWoBJq9UzPrQTKrgTe69GUkiNrb",
  "key2": "3NMFYbpED5Em5A8aQqhFuFeZAFUYQoD2rRdYRJGSQUMHDzN1wJj9AzSrTWMDkqAvcBaLiguQ6eXYExnrYUNsnCrh",
  "key3": "2f8onBYJaNxQ332MWJdjGorjEg7DhW9FLBpY1mkS7ngdiYDY69xX3NarP3Ysrh7At9K87iwzJhPoqtkRoF6eQ7ja",
  "key4": "5JRjDvzSXp3guJezR68SnJPP3xP7fcGDexwuMKCe4ZbEN4mi5VDvCYZLEqbW8VLnsXGN9SUn4CAuuZK8RXnuqfbJ",
  "key5": "5QrjBtRzEK1Qgmm9uEtKuKnTJuPhQQfcYuGC758Sxy2uQsgfZrLS78LdVAx3Y3EWjKx3mHuWMUXcvWegR4irgfhd",
  "key6": "2z1JmV2uSESEMCwT1R7m2KRBYM5xVqnw3GXqDcwaqQFmbsjo5BUU7ZNTnxEuaQ2E82U51YPzhhKMJLaLeVETFMJS",
  "key7": "4RCKKPuczzH45W18haL7Kv8t2osKjQeqWXQpRe3QTjN6jZnvqZ5gEQ7ogPGmBSX4MM2o4AJtDLVgmG1nupp39gh6",
  "key8": "2aQXxPs31YPsvk8oZECFqKXwQRYU7ZU72ttyF8cGoZCdib5Pgdiu6kPq7dP8SpnXon6yywboZfi5uyTWYzTzPtFg",
  "key9": "5AJYMJqkvMAZXjZ7sLSsED7DAYojmAVTs4pZA9TEWho6uTsXmqh83fTyYZCvztCBwgUh8mru2Q93F734xMUVXG2P",
  "key10": "4qEKrsiELJcp8d8uE1TTWnsueB7LmsnDnnbB3WQ3haUGS8bFo7mzHh2SwbYX42VNy7zmWnYTNiGQugPLWqibjuAB",
  "key11": "5RJdFBvPe3GyLwxYJ8GPm7Eo8z1GB6A3BYLqjoABB3D8i9cvLCCpYKdKts6pUUD5P6vhCpWZ6r7KXZ4VAWPyP7Fr",
  "key12": "5inN5DBLqCqVg6jAo8E4zmx5ugCMaaoj7LAwVhLUM5xMqWZvYMsuiFndyKHhhSndiJGWPFF47Jn3cCwdvmQHXKPa",
  "key13": "2R2pkuvmTA6WjweRadCnQFXR1LhvY68JSocxvVXK5FH7atuqz9wLUuKeuHGFAhVkXY9s7TzxQyTJPzjxfnSFYz7r",
  "key14": "4KesybkkRMAEuMEWvea1vQi8onGbqHVRzD4t4P14sbbr3t7eiPrzBjeAFoWPxXq4HcvMaAGcSQFhuA1FdZgFj2Bq",
  "key15": "vVi78gDr9LiUzHz8D7g1VHMDqvLeTN1PVTMjsXmQVoZUsCAhT2Zbpp5E9NAYqJXFgaRsNLSACwvGcEz57rdpEEW",
  "key16": "2AMRAWedY6hGG4t7C5GEEAnRQW1N8vXfoZv1LMf83YMseRq6UqjMEGNT5Y9xz4dfyxVehQNnMbbiwZ1t141tFvDB",
  "key17": "3YG6CqXqPjuKVYwoBnMmqBo9oRrwRh8S1VkiR6rJmASgjDqd27gt9HUMguet61aQVUqN4BoXCfp6ZBwcCQUmao7t",
  "key18": "3J4qJNis5ksE4vuRwuQEZAsmhbJ2dkKo8H4rucAVJBgyGA7aSFwExkbYp8aUQvNE62VCxu87GaWhhRxkmD5AjzuX",
  "key19": "Vby1X2SnP9Ba2tu3rTZ22g47Jx5Q28gMkuNrqrit8eeUHxAfecCynGD2MYCHAkCmSdz3GGWcoDZrT2ofPb7LEwe",
  "key20": "5fm9rvzFnpU3FWhW9FM8HNgDG96FEgSojK2i3X5EupRKGvQabkRFJ7k1cMeddGBvWFHrN8UtYed18iUS1hnkCs4X",
  "key21": "XUY3BVD4Cxz912P4WVTMuD7wW45CzmiGuyyhUueLULzV6eM4SN7qvpkKkNeKZw7H5Q5JJfULGKG8GfXyFPBAquz",
  "key22": "2U2kdZoSaUqNL1bAW635kPyaD4DryUY3dCpgtaQdBjkzRwruMkMTKggvWrSQtcQWjYG7ityCUQTR5Vvfzo8xKCWU",
  "key23": "3L7SrSjFZcBDM6xfJSoKTwKUvG2ysqkWLUjBFsLAUHf7bFrjnDbGf8SazMQiYpXwgaNasFEEUzXeSw5DAirJVfXD",
  "key24": "2Mjf5eE4oyqrCqNrMYu8TJoR95sSLNgvKhJLBu2AMSY8V7EQpDqAexdKpi2YXHyhNt7rt8EYm9erYKbxuUirXBJF",
  "key25": "6wV4PDw5Z1RFaHKQ3aTJrLzxMd42ZABPSvDWEPmp9vnUxAjC2nYtxm75MUmPW8f4kHZatfEEnNpieGczwRDaLHX"
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
