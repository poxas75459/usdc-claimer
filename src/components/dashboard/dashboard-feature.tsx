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
    "yEcPvvVv33atieVHtdEjPTYXYWtTUszWXfynXb7SrkWR9gLdwNopgB8DhvkdkiuN6px8WqJUyPS75mTpq4vXMbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kyv65NDwt81GXX227ib8QJxw3E6jNReznQmz5XQHJzAp8iAdwmjcgb2gvBxc3yob46Bmob8AMyKxUbBzEiuAmmZ",
  "key1": "5cHBtFwv1sTvrjREwy9HXJJWZJRF6bFW9NugG6iHYk8Ugjs6ntyTPs6JfPXyudNMD6mXRaD7juZLxpwAQBXUqAai",
  "key2": "3PPcHKcbyCz9TZnX4RYcFA8PhoKW1xbPxMuFSRCFTfXzji5rDyNkgqrtzYAYQNE2i1aSX881FYJtfvjcDNQoc19m",
  "key3": "5S95XcwUQTpPojTaM5J3D5yn6SaFsbgR511Db4Pz3sZzcJhr5DjakfLHeFUuriwpowy4jJr5CbwYKv3ZJvJXooxW",
  "key4": "2Ccjsr1Xk3B3RSQPpoanTVxkwFwfoQtsq6VXNmQFGqhEA1jKUuLvs4qMJAEpCmQshZvt53GnNKc92w7n7hJDeeTy",
  "key5": "5dWrvHpvcmNAiVNf4Q1gDawuktwduEMPDSZMKsGFoLQY9saSZbrNFxKjncP6RrZvELVSGNv2QfnQksNMwFCJpnoe",
  "key6": "4MhAqkzptmEVvhRzQ4Drb92wSUB6udEphS4dCLZynyT263EtB4QAstt6zsd6Tuf1nYauZuSVQfPWh1hofKUeLYu9",
  "key7": "JHLSZJpLcEn6oeksgrYeQFwoPWNKBRevDm4nAuehmA3oEjHNWGUQGiwPTfeWvEywN9AsbpojPCo8ni8dpbCieKp",
  "key8": "4JYAWwWBr78jsCcbEpwcEmrNaj5Lqr8SULfy7VDwRAkPv8wwjj7Jzjuj2W5riTL2BDcUyvbejoMJML8t8mhpD2gQ",
  "key9": "xFJhg9HynoQR3cp1Wh5oHkvwR4NuxWXYPZneXt8MrzyFWi3jE1uEwVQyGMNCBj1Z9Dowvz553hHi2zEiXLkK7nm",
  "key10": "5frzTU7CM25LpXLm4y7rK1gqZZNdLQTnpJM9bE5gnZot5ttrwCU5qjA9QPTKYK3B71TPLgquYhUWFxef2VUtMfCs",
  "key11": "5GzNbEx6GyEnjiK6fZ2QG9oFy4iwv8u7PuNpktRTudUHKp9WKV4d4ppgPMmTKQDwDaecFqgE2WXw8U8hxEBZgKds",
  "key12": "3nfjvKNnFJFFFQBR9qBWT2H7MSyJhnJBmZZ8L53xiPWAGSEe5cVqT46TAZR77RM71m2Nqmu4VjXZ92AUx5qsQ33",
  "key13": "4nPJVya1B2PtP5ZSPzuNbeZTzLpf674NeV84UhoNjEiMxaRzpVqkXyzBy9Z1NehU8HUtYzt9BL15n7SPA7oy8hPN",
  "key14": "s5g8iiSLCaiXEJ1ExWtXAX26LGenyTKUV6vNAAUbHZ2YFd67uGvbJ4qRZffePf6qgAafUK9rM4Rv2433fuYpWQp",
  "key15": "5AFvPpr8zaKDVrfW1Wyjhh2TNviznvaVRMdY1zjaoMdphsFDvqKHjpHTv4geU7MKnjwj9XTgGb3jkhtiCYQS6Kik",
  "key16": "4CPcxkFW66CXw1Dyfe7JYC5eEJQ9wYRsyfxz28svkZH4fUaNvEzYTcAy1Lm3pP5UP7UGBotve4PXmH2dpmxuoZdu",
  "key17": "2MdjDRMV5nvbsAN9ZhqxyZb3bkeFsZVbfSnHy4hTx25bhxBxtcMcGoe5Ubc1Nx4VyoH3UAy2HCESmr2QyxCs3Ygc",
  "key18": "61asmGtE6XnabdnWDXXK6WznLT8jFfHW1RhJMwGjAApTZBXZPi1t845Zf4ybDbvXDQRGYQ5cfaFBvq5SvsEWmbXy",
  "key19": "678bc4Vpftezm3TFVZ3zqvtyPGR3uWHQNpfVwGguewp9YMZXsXvVAUmLt2ixEZBbgPz6sCEZmyoDtnJZbYM3uoTK",
  "key20": "EfEYNWqA3YxB9wpuvx72dgbqWFrgNmAMPwv9y8GGdouRLkyFsuu9ipecyvu8ubvkKaGN8LwaHzqNZzkytK4vdPk",
  "key21": "c9q2reqMEMseAM859nhAL3pcVjCFJNMVzgKXDWwZuw3zYFYDEZsi4QGa1Pi5i7h5uivc3pmDwL2F5MHGX2Z7prG",
  "key22": "4EHtdrX4vrkEQkzu5oMYAryybo2CwiriGjciSgphNkTiCVNam2QhRjLmiwC5nrPjQ9CYHnbHeX4FftvvudgsYWJs",
  "key23": "5KA9uoHEThMXGAk2CVSw7XhjvS4zREhv9NpVVzdipWNv13E7zg2JZyaSyGH1YWyu3cC1rFFWNj2E2JvDgBGh4qvv",
  "key24": "g5As8FS1X8618A76Yzh3G2iYgBF8yND1pzvhpo7m37KgU9wPyAwdGkMRgZtDYws2JvLUaUAWvya5iJMTG9mJuN2"
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
