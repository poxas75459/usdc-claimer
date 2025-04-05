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
    "28zTbxXTKhMcuNwHE5EJpoH1hBCJ6mNZ9EPJoh1mMq4TNPETcJwWTH2cvaVRcSendLcAYe8TWdAChSUw1F1pxXfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LpbxwpsBJNMak2bP7KSfwpTud8jnoV8uFam1tfadu6Xs1o41d9erCLYxRH2wtEZwn8vkKhpqNmptEGikJ2gMYhZ",
  "key1": "P9wugkUNWaVx3Fp1QL6zV6XdSGehBiR2qXi37kMN9UUd6gebXKv9z2m5NirZtUPBpY23bbPdtfB2RhtKUH7aMWj",
  "key2": "4bSCnobgR8tu4N8BNvUfvFFUARM5yFvCCqCCmxfotmByupqMQgeNdXpHuH1c6SwWwB5ueFFwnVpiJhFeGojreNVB",
  "key3": "4bGCNkztHdMALD5KU6Ma8BFr63SyFzjSaZpFp9w1iBwaSnXUKBEtxNsoN83z5BB3HSrjYj1pKLNcfaR9kEMcSY6P",
  "key4": "5VhWmCS5zrKdPPC3h52BuEweFJLZEVdtJKHMLY7DWjhMq2jtCgpgHy7AX1UQL1qAwdENzw1KNdt5vNLrPrxuV5cq",
  "key5": "55zsPagcc9yKbgthEFvQqfz9tJjHU5qonnvzJbZCj4LfXRbTFPHwp6nyzMxuFJt4ibmnsnVjN6iWnSWfRkxy5LGA",
  "key6": "3v6o5qppoypYWKNEDHNpVv1kMj8kPuNQT2G94nSoegprHyvFiUVYDy9o8ArFhofD32SA7BQVFwnNCEmS69j42FAX",
  "key7": "3Uu98e8BdmdWVvGsPYmYeqjMEqceJxCW3iM37HSBCXejAf3yAgSKrQ5KoXHjaF17Kmi6WTZGEdgR8mad8SSUosmR",
  "key8": "4fwgzY7iJDNKL9GEfKqMUbTcnTdGoSrJxbmwwM6gvazQCN6TdS3nNngMRFkb8EeAxai2LxYwwKMgy3Av7GyTe6Lt",
  "key9": "4roKSCXCam6tCSobHJ2AJnQGuHLZi9Bt8daX37dxFcctmZWabGgNYTTX7zSYqHxxr5P9i2vq1KM2ZebX7ubJFaso",
  "key10": "BSe99Kw4f6nF7uwSsSKc9BehuVeHjcKCdgq51fwqfdiFcz1hYg2dKjcE6edceA1qWGMGsiM2ppJzpFF9YJ2ura6",
  "key11": "29jz7rADaHpuHrGvjGT1hi3uSKZGDyFKZVeGdCDTPyvYeWY8xedpqp1AhPoiGK4KqUXigruhua3aAa17ibv2RpKg",
  "key12": "5GUfcse8mP3EY1H6BDc4cMXzx7LF91J2hVDH7WFVodJBqA3qNsV1FfDhD6Hq73Gi9D4Eu3govUZK43K8Q1yeT6n2",
  "key13": "23gFaD2HTMoPqHqJHsvYqQvdavsy52LtASgevFcQBtHmGGBDFZAvP8P4GP5hfXSm5C3V8Am1VcxYjPLbvweXtAmA",
  "key14": "Qybv591J3dmRMyGKCBKKE6KZgseQ1ycrg2hANQmrBF1BCMkNA7m1eAQMtdeAjFojSjfKmscH5HtuF13kC3aPReU",
  "key15": "2RY73gcVYfctdcHry9MZgAPvR8KDnF5dv2eNPDmhLAnbyED22mx7E4spHwNDPPzy63QDihNHVSssjgEZkDJduVze",
  "key16": "2rWrrpB1QDifFZPSiVv9A1MHep28zz3rki86c6toXB9r5SrwMqBQnTNMFYdpS4TUTRfn7tJMe1hUUNTbkPnA4WZc",
  "key17": "oTpLQ5T82WoETrDwxjnfEwZR8yETfRSMogfjxMpnkzxd8hFrW9X9thbaSo22qsZLXSZ5taoVv8QFJLQrcviQYiR",
  "key18": "5GxkWSaq6cngrU7WFWpnzKH9AjGQjZZz7a7G47msowZajscJ41DMEA9AHoTSoXfLJz1RzPPDh1s2M9XFTLJUjJBx",
  "key19": "FLpJ4cYK8bVVGsCcoDyrQEFWW2SHdS6FVLXNDKfJ38vKP6APSqZG67F7vnv3S4SVkbhyzMBE3SENVbk84xHpkno",
  "key20": "51jcNMZwWwJcLAm4S8ETDy7zQjkGJ9y6cJuLwZzZG3d2x1bY7JBJYgpmWZVmWMxSRdsTRAaFQXZg4MdRrvzs1RpL",
  "key21": "4t99fBTQnGU8yeEBV61aKBSGaec5t3HRe9S2VLe7Er3UqNCJoQ7DSrCu1E8AvLV4pTUoRPBc9bhipsTw9vNnorkP",
  "key22": "AQZEb95PoM9e4qZiXjBmAg1LfXWczNtvwa85bq8BQiqU5XWoA3VcmZU8fVv61Pnw3CasCo1ZgXfrv5NhEWGYJRB",
  "key23": "3dP7g67EkwQnQjMdJFA7C2oCSpVkKsgVvugETnZSkT5faDNPWrgESnT4tgi5Afd9F9EhJTpY1rvKjfppovgXCVJ2",
  "key24": "54fZSSXYDuGowPFYHx7gZJDgTc1oBtitgqVAmJr1SFWH1AdBnxkh7AkcFzz7qWa2AtNPt13n6KTZHk1Qksg2dz3T",
  "key25": "2MFN4i5g9vusAcqh5kN3iv9GDHTqWWjTq9E1P1aDs12VEHHcECGLqtJNxms6LQrGgk4bbMq1fWNJnHr684aZBEUe"
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
