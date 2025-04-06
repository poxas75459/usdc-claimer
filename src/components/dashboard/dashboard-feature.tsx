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
    "JytXkv2pd3xuJHBQb5vmWbeqiZn4YwTpnyae9YY9j9s7M6uHarNZUX64jrUoKdGrwtRYPWLEMDa8X3f6kbPA2Gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cqhW3UgqSqCS1XMSSEeHKa4dDRaKnErXAes4pAifFoMMaWCxnU2rMZoXyTUTHdKebnHH2gcnEJ5FKdRsMHMDNoE",
  "key1": "3fzjsVGrvznugFWjEbXS3CkRZEceaZPrkepRTG7XyBuf4osJzwMgo6uWkKuDpCkKAERpAA8c9oV1MVg5u7w42zyL",
  "key2": "2cFK6dXqXttqAULgV8LcEepJwiPZSCAEYc8Xj9YNGtVuu6xRFLV6vMDEeZ4NPZuoVm2s8xn78iFvCxoW5EqBjNpr",
  "key3": "u6Z9M3bFk5xiWgEohuACEtkcPfAH9MbSZaW2hXir1Xt9MZeR9jbLpb1XcB3zZJp9b7Eq93L39P29wF5wrB9RzwN",
  "key4": "Co68M6ZuN4BAWj1WBxv8b3yTMaCFmhUu3vUUL9DPLnia6DV3ZEQh764FUzx2xdCBdmdR7XoWNBNML5ERVqncaAF",
  "key5": "4tqWPvjKJ4CqsPvQTerknpa2MvXaeFyyEvzAxt6qGBfTqmZ5UqRfvBt2MPtmGXYFtY1b1mQFBpfcLdGyRZa3mV3A",
  "key6": "5DzPZtKz7crsi7Vp3SSk7FWdkEi7VGMWJ3rWPficJtPKx8bZnWuGsx82MP32UgeECqTvV2Uwh49aPLSeoBYJRgWA",
  "key7": "BaZvtEMCjpismk8Rxg6uKP9VhycGZNUtzFaGi4d7BhsPvRb9WJqGB3awtKKBEju32x375A7EU5k7VRZh9rfBqpg",
  "key8": "YrPVEeVoUu1rAWDRUrDBeidPJYqdPjievkdPW4GQVvGHdBmTMxSUaidiQdwex2MNrF3383baukFLR5cYFPdFQhj",
  "key9": "26Xf3h66dAwAhhAnar17fuXQ8swwsvjnJqDCV1skPoKRk45R9WPt9KyqhQLukj7UJeZDMKyUVyikdBPYzQVoqggw",
  "key10": "4fmkrALpJVmQtsxu2wgVXunv8xFwfmsPMGutbkt98EufNVzFEgsy4jqZ9pUiRj5SqSBgNngQRJaXUwyxW6hm7Mtr",
  "key11": "3tNA22Q6oXid4SRZAiFFMtqTV9RXMeWDdZjJnYrwW88xN9Dq8Fz3sFZ9Dmt1wibXBki7XCAHJg6rWtSPn9GzynDR",
  "key12": "3jCAiboUngEKH3hrgagB91ZPN5SajvkY2CiNWp39mYKaA8y7cobhvgA63VH9WR6sUbQMCs1SSoVyZB8fkKi2hKZf",
  "key13": "25hiCf4QbdT2j6Wnx1eu8XxWG3jZGaBaahrwNNyvn6KG69GK4qUNwMhqqrYp9VDtABX6CzCWnp2wEPxFDTc91upA",
  "key14": "JimEqj8AxYFLaC6cK4MNDNzSBBA81Poa7jAAaV2Wqh1bXHcgaDrgDcCUv616d4rjsEhcgk4KFgqohYQSxh8u4Lv",
  "key15": "abtm3aMmYdoGTqFL8rbTyFxutRYvatd5WrBoPMYKtbXnEbqc4ZYpcbJBsTh6BjCzGsCZEyzjJ5i7xL6vtQA3gCy",
  "key16": "edYJ3ePoBwZMnZ9VfJSVEWw9gccL7SFcPj8D74qRPp4vrSXzZ6hXCSccgcLdMoRJXf4xni8cNaFkpWebK7T1wfQ",
  "key17": "4bKv6iuUifbWFuuJtqeeQW4iV2ZTv3198VHWdKvJpJJZYx8oxG7ZTmfnSMfk3Pf6ApKuL1KUtFtvzhUVY1CdeEpH",
  "key18": "2H19RmWj134V4c9s6GY2QGSFwiDntNvDR9CYqZ2LMF6ULp3UPQJCgf3UzDa8u5iHEp5MhhigF8etr7JsPwjxPryv",
  "key19": "Gx9ejqS87qUXN8bMthGZ1iRZogzaezwV8EF9gXRvbihmTPG4FFfAZtyXQSU4VJVm2GEULFv5jstoVyvUAqbs2NK",
  "key20": "2rKYmg7riWBJKHHieRjoaiVHh1ead9BA4qMXBiY5qejtFHqmx2dFpmFqjAgBbrT43fv5eCibQgapEje4LsZPEaeY",
  "key21": "5K2cvhNUG4rXciELbP3fXAmPHGMmuo2VJXyfZcz5cDxWhBL5QMr6q24tbFexFeXmx1gA7tT7zHEvr6rvTJYJNhKF",
  "key22": "BQz2QT3dzbAWCwG5n2rzMtBV7DLQn7XjSaxNHQbn7MLmLw9BSmSmW6DvGnbkZM7JyU7FSWMitw4dbhDgeYDWHnf",
  "key23": "5u2LXaE9po94p1G2dcb7qQaG98TNRSpAPhdyC24ARZayfCfrVUUjCjCA1xsiCieAE5j2FBFCtXqekmqy3kpvXJPp",
  "key24": "2gCzgPwiAm93RJowAex16Rh3QdUSU92pki8WH5TXR72wZMQdaNz5KSkBVLFqC6Z9R9JAxXxNQByJ1qGPpPqot8Bo",
  "key25": "2oJFs8k4q8mo4rTHq5iMZCrdCm6FomyFf9LvhBuK5Yj5TRg8sxdSybWPcxnM1zcDT3g7yqWQavcWJShJ4QuJjv2m",
  "key26": "2BkaYexUARe32ngNnSrvAucR1o6eCZtTbtVjNcNRhdA9B88gysGb2bWWfwz49VXfJU9PjpSYgz3sG932H5AUXvkG",
  "key27": "LLtB7JecBQ1LsAuFG2yTXt7ApdMB8xEzjZ7t2JCJdr5Ry6nFZTcfsReyKPmLeMb69y4p33cWSPQuBiLqqvKpqQb",
  "key28": "2av9TLLGEQocy2No4ZL4T29wwDVFRujH9dH98GvZB9NfVzZWUzx8Yz8eMjTj4uNGNXNSf6eSGvzukcCsXYy2jVeh",
  "key29": "tHKZBzbN2cgA74tzS1yZAbmF3duZT8dmPSpZREyk4yWLCcpN4NstkK7Ld7ebn1UpyMmRTw5Dj1nWUtY5JN9TpoN"
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
