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
    "37mjFUK12Qp6W3oRpi3HwAjkDGXMVACjAAb9HKvvSxj9sWfXppSctQp7Hsp6xLoqQCWPyN4ATKb5CTnDM757N2nr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XLbM5k3k8f3QQrjCZFNSb5nYmKzgapqzhapNrBARwbgef3F6iXf5toQwr3G23aJWUrT7s9J5oQqYo6Zz9o6atc6",
  "key1": "2B3H7xEBS7YfPpAnayk2S3pAW3jMQhLGKCoorwqTP6hXWpjX6SxgBS8X3c8MooKJdND7x7QXPRTR96TnxWNHEAQZ",
  "key2": "4hF629kce7Tk8efxrL4VuTQatSRhEJdGq9aGCLdasjuyszJhXLUuv1Po5v9vKKMLXk3FVTvBomDAw9A9p4HyYwTo",
  "key3": "4ZigttnYkZYG6HYCoqkos3LTxmm5wTkPHLRrDQmizKiWQVaNfvLkwqDwnhGqLVm1DCE4vN5wM7DiVbz5XHYaLN8r",
  "key4": "3z69qT72Exj9E4FPwTwPxfZjS7otz1T4wSMKGHf3Loz4uzAEJknqnmFJMtQ9arK898h5DoJZrY88sK3FRzmXssF2",
  "key5": "24hzG6U7sK4tb9FKukprWqLNq5YCeHAz7WdSy1c5cMLmnxkYSEJvpoDqVD9T4oCKWYEznwmccZWG2sJYiGmds7TP",
  "key6": "5GmTxVWih2NUquYoeVvZVx1QPMGaBRRSjX6AeiUUjkwN4TifGD3PLmwFtci3k7SiuJNqduyFYNYcALHTUVKcAjWM",
  "key7": "2suFKygsZACPZSK5cx5e5fRwpWADGXsB6Ymd7JjHaGHTgLZfJRdgiBJ37oPt1ps9fQBztruXoVr1BWyiRyczzRgy",
  "key8": "EimZ1kNbS5gzwfedh547ShLmKLiFj3sGCK644aH8ZuJtZy3uSMuEdxVvNmYcjhkbtYSomrs5yPZkVhmgVGfHWjK",
  "key9": "3Ambvio6asZNe3qRXKo7aKysQZeDrYwoX5krfAvzHtTFPryvS8gLagSyd9pyL8fDz8tusTD3U99Xr3yvDL9qoGFP",
  "key10": "3rk2bcpBzxyNc1rv4Y6vQArqfhdAUk4JFpWNzQtMTr9JEqR1gMPLgYsMHaZotSxVJ4aQJPrLDcANvBHamot1kL82",
  "key11": "2pDFKFk5vznanWEzW5fJy8F31YGWN9GpiLJxJPcAwn226ut98935HjCvSCcJsB2oANzJ4EFy4iUNx8bxLaVfixEp",
  "key12": "583A3yBv68PwKwApHVvqe4ZNu7EKr1LYEnB8YGsNXgowns3w2LozTFvP29mZ4UtJCeSPjJ8BzmfVBdRwJZxGLkoY",
  "key13": "2HLKpDs1omKAsyZyh3v9K2Fh35QaoXhYf4wD34f2SAwrpqAprTbLGFy3iQ11dRbJv2S79NUxSn8yvNSxVs5rQLS8",
  "key14": "2q2ekBK6FbMX34frREWfE9PfcqGWkDKzG2MWCD71UY5uPnT5YYCjRk8KjgmdwLVKGXFj1AxqP47WqkiFWLCF4Gsj",
  "key15": "7FhL2td56nF9rXmVv8hpcpU86oZKJDZQQDBhm4GzunGS3rGz11JCNU7KDJ1i7ZCvmWavciqjFHZDJ9DBaymSJEu",
  "key16": "3ivivEL831ZzEgZUwUUA2DkZ4ZrPECwi68qNmKKYtZCiB7nrz6GSvMYyKNfKyz8uCD1tArYPjjd4PnVtXT9V4kje",
  "key17": "3RFqoyrv4oC6Zt9ujHzcQrWUGjkszsQcMLUnRaPMf6SDciBjvaVWWToKV3J2bRYfJpbMa5Yf7UNTk7dPrPs5XRy4",
  "key18": "42aBx9ZUcU74QNpuCCfE3AKWoc27ZQEH2R8Fvav8qXm2iSn7KMcPDjXtQeKdpNn1wTjtq2SngVMrAPAxkW6qtDdQ",
  "key19": "4mvUdnUQiax6JBDVjuyprvpM98QcPamgTpT3oCUzNDBChAiaRf6chC65Z5STzPMD8QSCdsfP7tDivXV3XGjpKhuX",
  "key20": "58kwZNbJRrnLAMTisHkLWqtAHM1zYcwNiUaGHZ7snSHRv1A2fWaYskD5ZqnaZSM1n8MAngD3XN9WUDraVqd8kosh",
  "key21": "xUyzCLCEcFsNe9DqWAJoYFandSGMzs65RohQVA9XoHXdirKCUrQzPPER6k4oGnpY6uZUNXCzVSuGgDhctzA6czz",
  "key22": "2QaQqkVK4bnsz3PeHs8GRjNhEgE7LJ1owQkAXe3bC7anSmuCrvFa7d7S4jKE86T5eu3EXkx2Ley8LcDdW6fuL2km",
  "key23": "5PVho6Uija8cyunJVa9Y8Y2yF7Ur9xpaEtyf1HUYw2Qsf6NwMwezJmzLv1vxQgkLA2tPsd4EeJqDV7X838KhLptN",
  "key24": "66edjngPCWtT3jg5EQwoAde4oZNiq5rfU1XiEN84Z88Kr8XBXKahKYDgfxaw54nNmZpw3dm84vpVf8MM36UryL97",
  "key25": "3gg8q4LSWKHM7u7u4bjh6nAgneMhELqRQJarBLhQxcSswdYZ5pz49UuF6FXenmGvPQqFPzJgADGyMm1Py1AM85YZ",
  "key26": "4zGrDdGRKumuevygCGZsmyu9rA9uRJ1HQfDn2jyZKG38wgWawxRPwYijyg69MxLmM6BioWTjMtZzsaDAANTxKbGh",
  "key27": "2WWxJoA9CoKBMcph8a4kgsbdTMw4uw1e8yyk2XyyHBDkbG7BB11bgVJhwExP7LesQBXSz16Y4p4Ce6B8P3t6MGLt",
  "key28": "4dpeTCJq9WdA3kBZ9r6GpMBdTtU9i1LXKYYKzurL2j2FwJCh4VfeiT72ZN8Nviu8ViFRyWmRCWqWaZWsjmjt4n4J",
  "key29": "2HyzSM9PLwxYstuX84WkgRCigoxqnT42DPDJBsgtBeLSVmREqEm4EPK1hsCVHZY6usK3B8YovhRH1qMrLP5s7mkw",
  "key30": "4KfD5tpYSvXE2Si9BkH4aHhK3rpLZ8YhfcKeoehN7pew46huzBK8b2mR5md3UzSrX3KDT9L7iLNx7n8wLpbvnxrS",
  "key31": "56p458rxXz32Q7NYYWuH7frezE5sNLPGLxWLs3hi7tJv6jbNHcFah9GaqzZAqyhUW4VohUQmYqF3vaKYsC4bD6Jv",
  "key32": "4C5PEGjgXXSqm6rwuCYxSwP2HE4x44MvS6x92U3aYQS95QmiNzmXs8k842DiRkUmJXENreJPKevBwNpkDzxbPYYh",
  "key33": "5kbxWFps5UkuUdF1UsnndDe8UmUpz1QsE3HXhYAn2b837vqbdCr6QmDuRhALPaVSb5f339k2Djx6jhUeX9Ws7cWq",
  "key34": "2u3d2mgKPRbBhXywWkAE6nWmoD5sNHQPqMFUcoNLYGPHq47enCq3qJ79sDtyuY8VMT22KzV3uPgAJzavQuJQnkVR",
  "key35": "3Pis7XYUU5gY5t5uMU8wTv1NVrKp5hbSuZe2N6oS6BEZZaCY8j8Jgt4BtsPLxsYaAodMGmcbG71q6e9mghjTnM2H",
  "key36": "5cmJMbLuF2dcWYV6nqFJbCxmy4Wg9GT6Zva5LjZMcRLCMFCimGPQbH6CwwQq3SZuA3MoK4fxT79UN4uLRJhDXNJF",
  "key37": "kdh4vHqRTUDLxgq2LPLSFuJ8fqZatRwN9zRpNpQkmmkgcLhoNK47e6HJx1AyTj48qPfqPKL1gQuHUGPdkoUdAMF",
  "key38": "3NjdiQP5CA5B9SXdwttoymnZjQWXdtMRvumUDc4WB79r7YrFTzv7gfvuSBNDYpw1XnLSxjQhPYJA2Mtm2oDMbvHZ"
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
