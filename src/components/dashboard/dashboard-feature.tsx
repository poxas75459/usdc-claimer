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
    "3JFv2UgrxSNwnkqyay8ub5sGUYHafotgjT7hyokdiXwSFCZsuHE9josgpUxcZAU9GWNYQnRHJa47gRzDvxLTaZcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63nc2Gm1wjoU3GyxABoC9VpXC61vDYRCPPrT161JELH8U41V4zDRXjRUqUgqakiyfg7ak2RmimsD5vTQWEN5LKqU",
  "key1": "3z4G4CKWZGtLx5keZtnMhSUV5WLNYhE49NtukvCbBqT1NNd2aM9vNNGdptmvwK2mgzgnvLCQv5tkEeYss4hWuEGj",
  "key2": "4iQpFcgCiRgpMvin2qYXTbLYf8u3wnnX3GTs8H8L3koqmjJ1K6a4J6AM35sRv3N9wtevMe6fJPFCMo8RZFdXj5zR",
  "key3": "2hLGzt5t6bpqFUv2AjmhzszA72rVjQS9H2sAqUbq5SJVBv4VrQH72G39wq2gAdqHRvFPXghj92oWHekFyAc9MsL5",
  "key4": "DghKDh7BfmdgGr6RZXJoPSikFw1xcVHyKt14pUbRwLXqouqr2q3Xsn8PZfbiCYCBcsXb56AhXMkHto7ofctjZhj",
  "key5": "3ijFbEm8ZbHdFYvTvg88bCKthaZxMCM9Up4U8k8toNqQ7y52vNyuC93rPUbCAYKRHznZfZPVpoe7JpyTjbAp8a6G",
  "key6": "5Z1cpKEssdx3xBKZt38Wm9ZJBUdRJQMB2xHGCcdqNbMTXLMXD9otafdK36BLuFAtXADLQBCb8apU2TjZ66pegrF9",
  "key7": "43h5cVNPUXNmjjNoD5mXa3bkTXgNQf32r1HBuuqbwMweTSJDYyvu3QYW6E5UUUU5TFH7rLW6EQeUecpyxdVZKY7G",
  "key8": "21T8XXzrAmk7r5i1ai2abu3JfN9rjhHeSNvkPdMizpPeaCKRbrmCgZrMhWZZoRyjfRaMKGTYfXLpdgG3qJapaPHX",
  "key9": "RAATUDK4WwrF1mXfz6vVnCm9pKwExshYLyTbcUPZHtW34HcMMSxPCdEJFhfGY3iBAesj1N9PDC2iifV3FA7sZfY",
  "key10": "5DzBz41jdBesRB3VAiyWB8sq2Nh627PkDHZjAcL79eVaMfZhLNGuPvBFNXL5wA7TDd7Jxyowekj2H3RX1wZZBxYW",
  "key11": "LWfRe87MUUcnhenEonBmHCVbHrB9RxKrfYzWkGPAij5rKi8txXoyr6U1SBMaZRywfjgvC9YKPsHMaaFESNsyyVM",
  "key12": "3KAoUUVRHCyNVcBk9AKa452Hu5HHiQevECudAXjuhjqUJ8WqKqhUU27WQp3LkH34kH7qTc9XH5R4mFdNUQJwSRsL",
  "key13": "4gbmESerQ51LUTKxYFurcJ39UhzN7t9RadUSdtWZtYqAXnnq59FANDrMfcjxY7tBcdqzRRsYJLSU12c2qc6AAWo7",
  "key14": "29K5wFKgRZ13VZZTAqM1F5sVVadPjDP5DXFGNTVq9CwJzYLUtzLQLYCSQE9LAuemeiJaLJSBbMs2kYt6v25K63eQ",
  "key15": "4JmeQHfkU6AFGe5Xc4irPeHXzQ95o2JctmE5cfJ7TptsWMrCUKp6MXNoEjMvfafjALJeq9mfT37wuf6YQti3hJ66",
  "key16": "2wXvazQN519GBw9d9g4Uu6QPfJnU7kKsXVLYGAXy9eDoJa3GMmcRDLRSt1HSS67bAMbScQvfy5a5ucVaWxCKNoh6",
  "key17": "5roEd8U1PnHJZNS2jW24KKkRW42GSgSah8scxxc2f8epvsqz9NUm9KHEJJhJ27CG79VbsgjnmqsVvLpaJQ19guN8",
  "key18": "5UuyHAGZze65xp94wMMjSHEBEJ9AGP2AFkGWvQxWpMvvANgtnysVbfPgaAQT7t7DV8y4kXzLLt83RJxMjkqmRDUK",
  "key19": "5g4h3Qi7NQqZGJchL2tLKU2CMcuwsj27jMxjPZirBeMpXktfAGKWkLeTn4FkDhoFem4vDsvyWBLLwpc1nVAUmLEo",
  "key20": "5Xz2NNNpJdVjjhDrvcTmDnYEf2oztpjMd3jXD6nwWnWWoL4UrZRgcop8b39Yx2HsGjHmSvZARS4Yinq6gmG5vWZR",
  "key21": "3rpFhwLB7U3ZSmQ6UtrQAJkTnnSGPuqXeWt9TiaDLGbMiGKpB4sbUbyiBJeRaz8cSgK873p176JqcxeuLGfoaZTs",
  "key22": "3cQvFsRDKgLMcZygGKmCjeJ6GUSyYw7ZLVF8LuKv5FzPNofUsziqUXimGatKJpr7HNJwwCmPGA1LweQeq1wtTriV",
  "key23": "WG2nm6Zp5F96ym2csGE3frJVS3EnrxfwHhD91TFtD2GejgT7ERSnCfaeBqTFd5d5QtZsdcC2TSzyVmUo9UDix9j",
  "key24": "JdjvaYpoorYArj75PTjP1XDEMcBJ9ddDbbGgavzaYnS7Mb9cGyxDKvzXMtWenRa2cs1rLc5YrNiJCfxVXciRXLt",
  "key25": "FHC16QGMp3eRy1KKvdCGN5ghoUCbL1Yvw3gYAP5VzCU4bt3fPFJy4Br8BcUis5NYWkqcTBugPdcM3dmwcZ1Snj6",
  "key26": "2vy9uuEJ7rgihVq2jZ5NFGmPoNuCyHrGkJAgxmmunQy5yqxRaJQJLEzdFkAqnCMTMTkaZSnfudN7SXvtDMjFEWzp",
  "key27": "vSHscWJ766Ld4AVVy5je7yGuLAQadAKqxLKQGizh9EWZ8iyr5VQeJxp63mQDVaaErX547bQVLsUbGFRmYgZsdT9",
  "key28": "4vQ4mgLSG1drYouMQTjJTnyuSjLtBQ7ZnoGACu5XNpWsrw5ypPNzJyv31Zd2A5HDHmWo3PRnv1va4ndhEgfg3M8k",
  "key29": "WtsLgsUBXziBoqT3JWLqLoqZNUkzZVXZ19oeSvTyDurje7RiJtDFtZqd6z6KER2JJabwXqb9cS7hHx6qtKSL9r8",
  "key30": "2FdAWnbMGbkn1bezQabanafrJhAAtRLs7BzcVjxEbco94KS7K8XUWmbFwDS55UspUCVitTndzq6N2tcEuziddMCE",
  "key31": "3h49itvt1Ujer6XsnoUbpKPFDTG7rGT79iGyUGowYJ6C4ED5QF4tax56CNwZbKRQf6MCrMjiTqyK6e65GubRbKWV",
  "key32": "4XS9cqS54HiKPsoG7ikzvfRFx9WzBWZsWn1FZgt4zgJ8Khv9aW5AzfxTVBdSNNkvfzRXjBsSdC7qpbUG6ymaD2Bv",
  "key33": "3UjGyvWwaDkstvX4MjG4E5ZiD4LjFv2yeR427Z3o2goticRtJXcRovbVDB2RkKnG9u1VA9kTex6iGZ13u8fozrAH",
  "key34": "6ZFC1Eb8FDjGaXHCWo4r3ExTJuQQiB1bESo1Ka386wURq3diiyBwpfd2MuQikg7ZDsVtkPEeRS3t2oyfoYqaMsp"
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
