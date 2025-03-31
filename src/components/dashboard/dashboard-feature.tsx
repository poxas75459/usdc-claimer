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
    "3dbJp9VBFkVHWuyCBf7aDJeUeXgjgCdLyPtGHfaF4AcoLoPrYWbdtK9YwJdaawT5rsNagmS9aQqjAAFTbubUHdza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t5hPHpYwv2y8t8KwtMtYatuENEcb79N9m2rvL7pEDs6zBaB9Gnc5ey8kiBGNEBxy2Wa6sn6LLeUcy9T7Gk9H32C",
  "key1": "QY6ZjUMicXe7ddrXwZGHXd7coQoWhBxvyZeprjMx2xmDVpbpNZF6jHyjP7dzUEpMJqgWckSYpyfmrR6zRYHLFhE",
  "key2": "5XHGU5nnmLgNBeAR3nUorA3NU2LA36jMgm4dJ12CopBefkHL4biAcntd1hHacSJPMsY3PUTPStY7bhUA4uneoLu1",
  "key3": "yFTRgxLyN16kBNJGjJU5kSobdYexNSqYfgE4K96wLVYbVCkGyvbGsQgBqef462Bm3ij2W8B7GabL7xtmCyXmUFT",
  "key4": "4DEmgtwqKGGtAyxwQsoEvcFrG3bauDsEYquT7Yqu7fH6omchvYa83pFpox9wfbtLERB5ADjH7nxN58JGbR3TW5Dv",
  "key5": "22TWqnUGkY5PMdomvQq2NpYpAnc9owAxCdz4BdnU4dRZhdaMUggJs6VqAXMrstuFGqxvPJcRdg7yEXASGQ7DcBv4",
  "key6": "3DnTFdCqziSg88ZcPCya138DEFuwFTbrxG6GMQrinGYaoivhJbp6NLFYWoruu2Nowe4sMHxbkvKqQ65EheHfKCQ",
  "key7": "94GKtHttcTts9UrRSezhLsZL3mDKDK9DNtiprsXEQXwumJwFgBwbfkaBHqceU1HtgqcoQ43QZX2jJuJFdQXbh2J",
  "key8": "2qzqEA44FFySqVosGGYpxKhYpurQRkYg9VqgiWFTSsJK7oK83GyHgKUAo4E6iTdmPx3WtRzwKd5ABws29qqmKJUk",
  "key9": "heZBzzEB5v3TG3eMDxACpKZvDeuf1GwEXAT5eCzS8AvdQhtKHtXMzvzh5iSy9y3ogTuAAxZ2FCrmkrUWddUtWFq",
  "key10": "57ekvXryu1JMyNgkpYk7KNwDR57xuWfxxer2qW2ZhQNWm5yiihtxFTvLvBkF4NmpHqno7MibGNvreRGqviZ7xGdV",
  "key11": "a6pGsjkBzqizjHkPsQPs8ACL6NePVQyRbNfA6y79H7iTi7NcKHQVLgF7diq2VfcjSK1kLygm3rDk2Gden6VT7cM",
  "key12": "37vnp1D1epB6cfNKWcL9LugQvQugEr1GfRcSzPBCJjfRmuabcELxFBoskFvV2tvXV6uwJPc1bMWbU6xLyWCinJ7V",
  "key13": "544wgbqx3TPgpWQ8b1Uws6H6ea2ydJu3i5zvE7Q4DGztgS8bncCPeYNRF6x5vngCpWRrP24HyC1ZX9fpf38Y7itw",
  "key14": "3VrMLwoDc8uuhqrzWcky4EqnzhVmF1WfwPmT8p8aY6QC4uuckc71hLhELbvsAHZq33zK4PdtzbhJ3t6tXUbPELsE",
  "key15": "ksKhoZf7APx67M9yX3NLBqy2sqSmBAtCo29phkgBzcLm1scWGh6mua9FDF6pfjzW4VCxuxZ9RJavnhrBf2GEwQh",
  "key16": "5ianQKGjr1EFbZF78UzKDowMfYVnmaPaDCMaoVPTCVQRn7JhAipbnQZYrU7j3dzUzD8BiEMXJ3MPC9S9EJDmbqvT",
  "key17": "2S7kth3UuHqCoMFha2NrruLBMAFMwmBQJxH482iGuzQefnBnxdKopteuLKkU9C2NYDm2vacLCLdCfv4qhRtzmgUp",
  "key18": "2nXRxnUUDg7ECLv9JXG7U9jHYoPC94stJhpfYAMtUcxi1Ycdz5BiDbhtnbgyY3fDQL4gQdS3b7riRtfRJ41mGZqy",
  "key19": "4qMLHSw3cJ9JptDx25DJVpP7dvs5Ngkpx6B35rv138idDfe5T44Z5XJjpqq5LnqzzmCx6iPS5e2Pt7h2ragQvRfY",
  "key20": "4R9cFtf9UEMaScNiB1q51aYmtQrN7XrZtXedcFosdTrVMsktAAPV5rEDieB289WUteWCsTnzbd1524zYp1NmkGTv",
  "key21": "3Gc72ejJS7mZ8a96w5btaGhx5EX3ui5SjU2EeCwm7MAwrqauvBkuBY4ttrEqEmbbBJrrpkEe863dfrBo5qCYctuX",
  "key22": "HhUSptzsjFedSp7ko3Zgw5JcVPK8nGoYCHNGvVP8UnvSdRtHRVPpR67cBJKbXbC6eNxTWa1ag6rJhmXAexE33Y2",
  "key23": "4gV9xjTidByt2cLqcY5mwDTYZ7oaFNX5s6xVUByn3t8EVwSLHmRYpyHR57MaxgeStuQCyVxYU7mgtkJcfHAukHGW",
  "key24": "3inumcWiESVyDAAzwxsQsYsrsG5a3GA3e5TfY3Qs5YKpRWgnTFYQE9aoCBxC9i8RudaT4yFJPNENEryRAZF54DGM",
  "key25": "gGevQfHaVs7ogqtFXoCDSsn6Q5gpXRxHSaSGU9reTas6AE7pquHjoY5o559i1hEvVdbSMg7KKhrY7roBEHD9i71",
  "key26": "2ncwMiXXQmBPpKHZ5W1UaviuHdf6s18eLskbq7ghNhV3ULtdk8QQXszNVBFbT8bSEzBa6fUHkXoeCbqC3c2SZ4T2",
  "key27": "3QpxD6re7B52vxGEkBe5FJnjc9sgBH7JKUwQe8bRP7Be22mPHg6DKVw4sLdZswUHVRTFQ5h8wmCpwr2nJURWe21z",
  "key28": "1S5DhChrismbfzdaBRj8Mq1BmFV7xyjvJQh3hZViRVKU6VmQm2NrVPNCZzeeeayWTm2Mdn5YvVcTsb2LXP27utN",
  "key29": "2o1KzoBY4xssSEZ3hpVc2uygeTM3mGsA4MQnCKo2BEgtXNtwYLUHDmwmbGQa6tgqtTKWJcYM8pc7Ji1MitS6ipik",
  "key30": "5CEknuGUEBNNgTUBAnuZpUR5E9z422Che5vxJNs8WTxPTFhEhHUFrkuGkoyj5qMpYg7hvsY7d6dCPtDNeVWAwMhm",
  "key31": "4K31AkdPFe5Abwxrm85sRgtcEdjEaf74dNh1gkbWbNiGrPfFdnbo2jcdVyGzMt1n96qEAnhix6L9ZJFniyXmaPmo",
  "key32": "5vQCmEkwoA8BxnrXWgTq6EMpSNydY1mMAtcD9zt2fxGSLHjLaPwT7ApnY3bdEUhHrYMs7FnC4LmJvwspXgKGJWQH",
  "key33": "3Mk1YQbVSuoKUoVLaAeXhCEB7yvDojwMUf6xi3iEg8DPGtu6stGsAPGdrDR18F2sEydWtwYiJpBdRB45u3DgkUZC",
  "key34": "36AKqsQnQ8tMCf2Vfu9eorvs43LtD2FMM5fhda3tQWpyCrhnGG6fmoT2ez3aJ8qde8fkzRtSvBCtao7GTPzuvGrJ",
  "key35": "5jM9Sjxc5oX5KVDnV4rZaU4yeExtTUHzMiFxnfoGq4TprVzFF9aiUW3fFXT1JhXscE1BWNw4vpAYg5QvUuuyHgF",
  "key36": "5rz7EAFfVoDRnqE5at5mWSHgzV5bgJbHKKQUL7fm7za8YQ54f4acrK2qQ5rLNVKkaGx6nmeUXhhTjydKKPkCnCBH",
  "key37": "61ijmPD87ZkiJaQreJstmRS6RAAR9DRz5ZZYrVXEZ2W4N6t2ravJscVCkFcjDm8s4RaQKEeWTMoe11sGXi3vJAVx",
  "key38": "4dKZ59tDkWBJUa6WmnKwuVATSgubRSX1p4BMxfY9fb8ujVp8coKGu5qpfP1EChx4VmGfB7iGXZ5o5quPC3UEgwcZ",
  "key39": "2LjSPXyvPYSmAu2ru7UCZ1vTQckFd9f7AES7JkgY7b2qvr5ohf8wu8SBmbmEsNWXp1uXVr8ahU8nZvhmMq1LX4N3",
  "key40": "2wUMsJcFuGAxWKoeHSnnLb5a8ennkbb1bW3bEpZMgtCMXFQT6mk5nyBRvJ1Pxi6jEvAuMrKgfrQkBhGS2wjh4Gsa",
  "key41": "3e58MSMxQZNbtJ7aNZ6ZhoNd3VXUyCmY7fnwFnTZ9wu6mxDNdNMLmxN8tT4vdAYmHodzYN6cuEArYy1yQtDL6c7g",
  "key42": "YG1C365MKovzgFqMGL2ebPB9xWkm3f9asPNvGLk8qskxmLwfkwy8BzLMTj1sgURVtfebvydCbkVx3uUk7bmKhPW"
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
