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
    "4r7inQAcA2pGZNKowbM9rW3jajdz8vXBqjcEhFbRsgkhfPBVqBEpN7GbcpgRYz6Fn75nnfHYpT8tWhq3LTcMX3rJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yr3FLk1ABXZtPxEhZ9sCdLBs6HTfKqkyXMZTZjWHGC5Mw4d8CoCH2brCc3wcMxTwu8VqdLqZJyjMYCdtm3RoD1Y",
  "key1": "3g55vKZ8hbG4xKQcbasMfSCPDevSCaTahWV29xubgF4dZpxV9agiKF3J9XF49hmcjaoQs5646eSiBwkHmRT2dJWb",
  "key2": "479nW8sRTZmQqtQTTjZBgvjeGKXBZ3MM91Dwura96evoXvddyUb1sYv1C5A8W7TjxtMdBs2m36V5YUeHtmRXzuon",
  "key3": "4PD8rYNRsvEeAqLALB8yu2PGNjEtjMs7cHSEkuhoeNRkiEJwbYgd4f4mZsAjWntuL6fLNEfsvMYynQNtCmQRzStj",
  "key4": "2ridiYYzsYdh7VoKGoSVzcRGavu3KKHWPhihx6HkRxCJJJTwbpzjjTmx3vhhr88D2rVH5tcS9kzEY2Bj4iUmArTe",
  "key5": "4CR1ULa5FVL5QPrABQiyvMX5BCt7pyktdkGn3znCgsboLiKqWomch8rsSXzifNjPqXaUMwJhVpqFMhereoDC76N2",
  "key6": "2Cfrjsgnb4ZmwrhGh1q9qKQfpTCZPJmCXEbeLr3z4KUX9SSfSoDYfS3MJuepZkk8aQSc1KiAVnqRRyWEhPUPMrNX",
  "key7": "5SSGidy95N8BkyzZqDi7oZdrgxNKttvkk7sRWffsc4xnYxnookmFzMfE5r667yDdDjB7z7G7RMpirQoTeitmKoC8",
  "key8": "29KMEMvXmAdkGq2eQHrryZ1wutNqRmDoDmPqi7vYDu4BdGx8xLD3K5Sx5C91urcnkTGiKUJbxd44ZJwPihgAufew",
  "key9": "3iDJC2sZa87wcfw9mRt61nokzFDT6Vk6zASfL5jh4ewUFRz1unZ179NEhQyTLQLQqDUEjWRW82KNeHZEkQScUt7b",
  "key10": "5BqB9EuuYmx88AwZs3v1hizbdqKz7cAFykKxe75PDfz55bkf3L2WVciZzi7iW2ESNv8C7uUr7u4XkM9x8tKtMMMK",
  "key11": "4C4cf3sUbu9cKkwmxrgeRDuyJNnVL9QkBtGGRgWFNehDqn7f8gggp4cdg9n4m64xtyKZDQYjSK5Bish56kuHNBnU",
  "key12": "5kBhdKLqBL7fG9mSLUZU6Fiv7qE5WPtmhgvZ3R5YPD3mboz4EPxpKn7L289QFGstL7FuF8BLNccSCpexSp5xDeoF",
  "key13": "3skU2EC2qKGZNzSjBnhW5p9HsPARumiX8CSdFBXAiN7v4doi7p179WDqDtVMUvxdVMh56gFQ7nQbEdQZwgwxARwZ",
  "key14": "4GG1i9ZB9Ah9BQWJHjCVEMTMH7njHgcoTHdEAQTLYvtxFGNzY7qnTDusWzJg7bwatcF2D99tYedogMkguDEFUz7Y",
  "key15": "2o4VHeQeciPtJXSeA5UpRZNuoZVcmCcZJh1mkgNbbHcQ1SpUxVmVvo8HQ3bMBXFpg4ho6jHxaRpjqnHnXo5CzpUg",
  "key16": "26Y89evtrPn3QdsENzTnAaRF8HNFudFa6UHaNNZ63bvjrutYKoYaJR5Sd38WDifvnAvN9ixLFrXmK1HKje7Svwsw",
  "key17": "47Wq9HE9ygZXbwoj3Wtm36DWBgYVPuGJ8UG7aTGWpqdNV7VoBrfPH3zLUDCJBVsD4cM5YRScetbYjqCCCf5QJ2X6",
  "key18": "3rxZuYBeaZzXWwGggbkg1Us15BU6W1PKy9EZ5jaHZKNRvJ8w1ZtT9sDU3Bkt9uQg2FzQuCJCaLZ38QepL4dW5vWZ",
  "key19": "Z6HgPzVaMnMbgRbHGp82cyVFKpDspcEHwy5gdbDe2wWtLnjvTV7KF4EXKGrWW6G7NCVbLd8GbQuQNaBAvr3LZB5",
  "key20": "4WdHSrq3mYYF54xvkRricRR5kxfoSpDvKtbM96ABfyhFeGNVQa5BpW23See5Leq54JVFguN8A2z4SZDaa5uy5rhW",
  "key21": "3FpnH8jNyufjkf88ckvsb8icN2evpSPCdAXxuNjLvzzaJvvFLoMQ7HLHPCP9qrj2eXT4FWiTfXLEjtNshBfthizB",
  "key22": "4mGJCQF2FNmBQctTJJrBiyEvGW6tTc8A2sczN5V15uZpeeFQWGvGhdeCv7fQW44vJ4WrxPaqYe6nucZ7R3f8JD5n",
  "key23": "5sC9bDXTArPzWMy3qQTu62ki93P4TaE9EwK1dAKtejsjJCEyKdeTMLS8XEUTAym42VSeqQbBeyDHGLs9fwXj1yTc",
  "key24": "NyGrabPNGu95qwNRwnVRqsCWkbGqF7wiDbJEc9merBAxrLvHxjosXTiS1fPXB3vNjbVJECdVesYGdqH6t2Ev2Pz",
  "key25": "2SWRZDqZ2U2ZuRdPNdaTJ9XrBHZMTC74Vw2y2pxYAebu3AfJHftT2EZuWHi6YzwWLRiL7AXVeMhQS5tfYJAzVN2m",
  "key26": "23bdQuduBg53amqCopnvM8QG77TDtHZN2EUzCqVvKSGaAnfci7DN6WNbP9uScEsTTnazEPavd9ofQLsHQRZW8GhL",
  "key27": "4v39mFGxWgzqKH7KFjjCFiTzfDdGwHMKFPqsWGWeQSsnraq3BXnDSvvMrrkBJXAZVvQ19W4dbyziKD86E16R1iNo",
  "key28": "5SmjiZZR5t1va9s74WVDJATESFfz5H6znLQc7GUUsrLVXWZJwJZQwebxXB1KYQ2YpJ3yFc8HPeKaZEJ1iYbFLXUR"
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
