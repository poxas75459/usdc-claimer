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
    "ujCVuHMeJYpzvveqUWnhddy6pHTNWNFdp5dRZJx3xiQ9L43vEHpMyCJb2uFwT9vW2MPVmr1sL44Hup7FSB8VYip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVRtVyiMik4WqQSC2LEpnLzFS1C5YCLoXC7YrzfneH5Hg4kKtvL5GyXV6hFj27CyXS3wqmPgaetWqk34YfQXFQc",
  "key1": "2a9JtVvyXzbLUUEW9LgYmvwWeTpHEroPZ1YHA5NNPNEyeJmciPHkAMWwbiKVWZLytbYSSKaNVWB1G1MGh3LvytHX",
  "key2": "5vwTBWAuzTZqax9zCStbRLpDo92Hta25h2pHeBZdTZzKTFd3jmumLhvQQWJyYDSPXhQsVewgrD8ZFBRq75nYue3i",
  "key3": "2Po5akAPnNLNESd9JcqBNGmnhFJVZYqGEx1YNgKjhxhwKfiDaXphLYP3D9B1jNTEPfME6k4PRmgMGKCuq67vnc1H",
  "key4": "4iigx4mPDYZeJ3UfUkuZ9huqc27YExEbgegkmcUGPLz4XhgMUWZmesKqb3shuf5pAmvC2fek2gEEyQ7HsGkKyB6z",
  "key5": "4jvyDabBtEzqGLjbuvTGtooNnosU1amiuY1jHuBZpngPYAkNERsLsufCPrkAYYomJ4ZpX3Pwwc1oKBnY6XZLYRsc",
  "key6": "2xTuu3QfWj1ik7avi4ZNHTfxKyB3ePmywXtcxuotekJP6AGyPRBpjVWSpdo5QcMJrAJ8VBnpZxxCMpFiidHS4u48",
  "key7": "3K5fH21a7rCaR3iUZi61CfVioKw5Sn5RpJKM2sG7M37ymHNDqMRo3SJ6NtU8yVyJRpkGF11X4MRZVRdDg88aMnvG",
  "key8": "3jUo1mSy3PAXH8FaqftinTTkM82UJ7kmFMFiQzZqYsQEqJacD4b1S1wJHnLJ9KH8ob8eFoehvT4E2yeBXCvdhofd",
  "key9": "5CCa8jR6PUUXFDXmVN7ZwyNV2WZ5F51HhUekuC75ufPPjzs6UNXtAH52XJ5XrS8mR67keGMyooJvqoUmfkq67tVX",
  "key10": "27mzeXtcMwgEVbkjcKR7oLcwuBZzDV2m5jLyLhyE6eHneL5FcMEtofptrYBE4UrLfewboki1pWdz5KTpqYGVjs17",
  "key11": "5oVUchEy1KUVd4YCVZL4qRisVVWCtu7cgwKxmDbg5aG8RsL1evNiBPRL5Rw8VcbrEGD2PLiXg892i9RZuy7gcqU4",
  "key12": "3mvbuuiXisTqvkSjeyMUDhMBRg8xAuLFyDX7XafmCuZSZwBuZHKUS4Tes5a76XcZhvorqznNhUqVMboh6E1HLkNw",
  "key13": "2qPfJV94bX2cDBLby762VGZ4RDcnctNPYFucSPkCDoZ32Hr47srbiqiUJpeifVxa3st3VwCX1iqcxkdd63PSfXBo",
  "key14": "4J1LtUnFffimHmFLYxvVZ2MWng8x6JTmMg88n2SgJrANdfPc7vCVmntLaNsFwa3rhyGqTih2stxuAzN5pjm7MoP8",
  "key15": "2uSNt9KMRJajkXhWr1m4xNEb9GXu6dU5AhY6HbGxbNbmcDHetUAbtTXuzNEKkWjHL4Xqu35UBM4pYNq4TyCQqyig",
  "key16": "3C9iUJopLQL3Qum12mLnVAQuy5tATBZoWAwG8HKG6c8EKutwBn4r8qANf5JdgEAxxx3ANgqQHR2tdVVbkbdUHF8X",
  "key17": "28TERWB2KfoFrk8Fh8Hr2kda5PNLEJZK6Zios8wxxGmhD1TzXVUpzbGPeuryWthPXBdc2adjJJuyeLKEmoBV34PR",
  "key18": "3rrrRERSyu4BuxTPNk9dTKXFTWRLr8pdmgJmU2mUwRCUhHasZ7jX82TSzRUEi5j2vTP23irpfGzHWCGKqehwFAaz",
  "key19": "3hpMituNSWBq9MrzgVb2TZP7E8a8XfBUk3AxSf5Ry6nQnBMUgptw1QZpctwHAqiMhzS9v12YcX9cPuszDkToSQ5B",
  "key20": "dAAqbByAvKbwtcjbSxBAXaV6AmBj7V5noGcF2h7TnctPcyrgdYhLaQb82KtVsb8mc3xnU1iYYSaafQ4qhA1o6Bi",
  "key21": "4UvPC2mGukCDztzuC2HxijcfTE4k7xTW1hw1nCpCqtSxnCwXu3JsfRGw6SpPvCLumqL9kN3aVFHtAXUvvqTBbUMs",
  "key22": "21MuFkCynJ4e7auuTDkv7PqHrrJHZaZugmPvTE9iyf5ybwPg8XkeLV6djkvRMqRmbjQoganAaBK8FjTSE3A1eYJZ",
  "key23": "3WpEWsCDDcxjCFsF6bWX44QvoVoNpeUXpLQi9D1dUDpbaNZToXvKjCX5vfodnofSDQwbyEd9QdKJCangBveiJYCM",
  "key24": "4f8m8nYY26FkQJkc3z4QcxaoS6hEu5gqNUEaw9xsW43kPCHibMt7hPES8oPZXLPMwAwUmm5vALnvdbyTouDmG54E",
  "key25": "4P9M9tWtzUMqMRh71Gk6u7pTfv45Wkj63DhSD5G9un1Hawvmo4V8nzMrxKzCSVoXiuFSLURMeV8nHg45QjgTgmSa",
  "key26": "2V9WhYAsbkpGUEfmxJHQ5oRNVphwfjoc4prytuCQyFby9fA4PV41y8wRdDcE5m5pVCXjpfxA7C4QWaH9oHvuHNZ8",
  "key27": "5Wiur8c5KARfn7BgyLBZRZLaemU9ZCWCTK1SX3hJQQaNAn2oFJE6AyXqcsiVtRNRpXs2YaSrbirEdQ2fQP1HF4jv",
  "key28": "KU2uWgUCjfPR8a395a4ctK5DVTQt4jG3ESVAtry5sheRvjmE6Xgz4nhobzYmg1kMhLzMdup5eQTDzyyd8WNpQYK",
  "key29": "5xQMBa1ghfW7RoZNb3hR3rYHGSVr8DH8MpyRUjG3SY3ErFVf1hcoTWJz9CoUYge69ZenqXTeQBjPmoK2mC4eeH78",
  "key30": "5WdxDYSSskC3Q4LKmWjyizjUAYbRLAUvR91299FYXQEC3ekqZTPgwUier5oEevJjizcx2Dzip8oV4DsM5oKam64q",
  "key31": "2TWzn2iCo4whmSfVvjmJefzbkfy9zY8DurCjFRQQnCQBDXeLbUpeSckXdjxWruoruXW1xaydWVygVwMvtFviUF1g",
  "key32": "4L8cJop1C19uaYHCsZPsKzWZEaHefBYrPYbkT64r5jp9yqad898gdXD21DMFFia81FwdUzi6AintudUdxsC9piEY",
  "key33": "4vPjWTEpBPCdjEAVAwJoSmGK8ZF7x6HMmacYqYx6yDYJBCAn2dVcGhAsa27dvr5C3bimyNRAaDUGyb2YsL69bqbs",
  "key34": "5ZXYnCzzu9Pf5ABRUg5bVubCZ9pWV2d6xSgLmjEi3hAvFexMNA3dMUQmbnRvi7TBV3NnfqbLESe3PmQaMRvTnCGy",
  "key35": "41jQPbYEDBbQgNmWuo3tJzZyGqfzN5jrWrj2K9C1By1P9UtxjetbDqNHTmXqMBJnKVWhmQMY3pb5c6a86L8UQFsK",
  "key36": "XZSa5TWTPPB5ixwc2Bxpsbee9SDokv1woqsU2QkCPQWEfG7gGo8KFxAqUBMsKbD7nXoLjw5LzVU1uUNHJMQKZ6M",
  "key37": "XNbXFsJvR9v4i3vJhjqb77rLmfVsnFair9MG6CJhtWS9VZfzgrNJcw8RWqMv4bnnxQj6Ab8Mh6MNcUtTVanEV8g",
  "key38": "2FoQwxVn4TrrX1L2iGMu13FXeZ9H5EyvDsVMsfnRJTFFYfpQKv8zrhVoj9aNnvCXdAaDwg7wvuh8ubxTqCuSMKsC",
  "key39": "X7NnEAx8ucKpoYshinKm5sF1UgiowrPmp1d7kzWxbKAQA5ikfWXhzYbaWqweRnSYUzVxi3AwzfffPvtn41bS74b",
  "key40": "4kTPN6kefG9JTCdCTvQAkoBZ2JVtVxdHXQzBbWJBi9cP47jehNdzEtppi2qnzdbD23QB8u3yDTFX1XrnaP4tF6W8",
  "key41": "4FZqD36tpff89k5WRcdwXaYkxagiUoNd8dZj7ahydb149pYSHPhwzW9YVd6TS1e645oZBf53r22CxVdMkbjzceKH"
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
