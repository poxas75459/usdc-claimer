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
    "3i3PC5UcjFLbGRc5ditDeuFHH71gbBCj1mVHZMXT8T4BmGutEgDL7AXNEzPtSfC4xUQdn8HMJtQvqUNNoA71WGip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LgvsT186YZmNNuZ7u7rwTmqxLdoJ1CD5hGBv1FxtWhjpERp2f9gC3h8iUJxsEUjxdcxzXGJZvCX5ozxtyAzAwWA",
  "key1": "Y76HyjSJV6t6Rhvg4uXwGwa9mEixUXDa4NwUJoSTgQQQx1BW356gcRYJamKwyJnzAggEQwHdg7jSeAvC7UohjVA",
  "key2": "5vUUsE52t6QmudsLtn38MbJuixh4KaSAD1JbG3ZJppMUuV5jY793jCKXUzi4mvibENFKjgYmKiYwNWBhWUsJ6FPb",
  "key3": "4LLi5QcjnTQRbDdArRpus1bNu4PNocVf2FWe9pVMtLVJX5tSgtiigSzL5ASmWCZLEPqdYB57fNVoezddWfhQVUFW",
  "key4": "574pLn6uCCXiUckfSbsX35RYqFHNfFzevgDPobM2wXqPRQUqXtzWwqjruVHc1EYbyVBhTNxPj1ZjrhTWpPbqvAFn",
  "key5": "4HmvqLs4CgL1Twbd29JSkeNpu4JLv2aqzZsiV6UH1d6JwfeNG4uCrqv6ehLfWLCov4iLb1SCV4DheK13xdUb6dPi",
  "key6": "pBkqSVaoSqT2RgXyN56WSLEWAXas6w4vXGjVYkGE6eUx99i8huYzYRFhrtDSpxGeZWHz3zh8vvbJQ2KGaZG431E",
  "key7": "2n58GM5pT8sEULrGNCAmmo3djFVLgC4fdspFjJUAXRPoYghDPwGmumaKtFRmr3CHPS5YLazbHtUPbLjNeSv45ugm",
  "key8": "4avriK6KG6FokKu62SNfUAf6XRKxxbttuw9VPiy2GEMy3xoUQtTUgf2r8UwJ4R1b3x6tsoUhMupGR3GQ3VymMmqs",
  "key9": "4JM9EEydA5U41ffTKMW8ncdvZBq87cEfDAjExrFFT7hSRtwHskf8B5yNh6N6g2kbsdTW5LVWxhVxY5BEAdjxeaJC",
  "key10": "CeKQRC2ajDeLBtv54k9aJDvNx77kb7BovenZX4y58fAmCfGxiHJP8G13woLJ6pD3C2JLvbSVyr5FonFD1dfaCAQ",
  "key11": "qxbMApgFeikKjLS8B5dqc5tq7psaJtAJAVSwuYN58f9EJXo2NVh87dSDnoShN5kNwRJ4UL133DJL99kTDb1NKxk",
  "key12": "5yQstEi2zocAohCeG4fosU2Dto2J2wgQRegcKMbeLatDJC2tdcpkyYAfgt1UsTbkaGdekMiHxAq51Ae8nFb1t62U",
  "key13": "4pSU5XFCDLPeojcveqq88VQW7hsF765U4X1r78gsiAdkfQ4wvKYLHEPdMVdGPz2gKSYKfQfjsZoCtxcNer2UWMYX",
  "key14": "4PrVaK5GwHjqvFD5tVjWGmsaVTQQY4goSYFQhAbe22ebJBzzoKfnGUxNEnP86JgUvQZegANMXoYNan8VaRpx3CS5",
  "key15": "5Qp7QYptdWWGXQrgdckGFsdzyao96Bcf6oFYD1sD39kHyvRjpNHJ1WcipWKLPsy9SJpycLFy8xCweSu8mAkPsER9",
  "key16": "2yxTgcUYQcfBMvGywG28aZWdsLef8cetEfgrZAGnbTYZ6NZtLYkcZPDyVKrKRXKZaqBXVEpSRvTnuChXzxUFxiV1",
  "key17": "2eAb5Dad5dK7N4xgoGqH5h7cSSeKsqDs2yKz6xcgWe8Une4jRK65zhdZRx1kMz7erZoTMHQHsqXWcjJi5EKsspEZ",
  "key18": "ytzvt8AMvpZ4GHw7qfWAX7Cmgy29BM5V4vURmHGiSyQ3E33t1z2QUmJMHmK9mcKAN65KdkjQScdQW7wk9J2YDQN",
  "key19": "3iKiaTywiUK5dxsCg8Amt9Ph6wps4nzKxWejSM3DJUR1Zt88ZiN5DC9xAAy3t5jJSxRjH2z15aD8PCkVcKYAcRzr",
  "key20": "3peeS3x8mdD6iFdiR4MEF3rUM2yUwYE1F95VEcm35YLe236F36orUXWJ9nw4Y8aD461SYP2EQ3j4dgcsLqPuHsAB",
  "key21": "4R5drhKsArMyQ8VmpbiGZtZybT5sAQmXmKC2hbuJux8TSiYD3zBKnnnWs6itgUTH4TuZiZpyehoTM3M88pxCRJZj",
  "key22": "wdZ833sajRxxyFx72aQSodnKHMx12m74PH5YdSY6ZndpXgeZFKsHa81YYPGAitfWKjYt934fBTWRu1VUr9Uq4oz",
  "key23": "3PxaKkWgzqLD7QU2JG1vu1bYFo9LLv5x3wswPKuEy2Ng1vwybuhDx4TaWxun4JoB7PHBeirRHJ8LopgLJ9nC8hv2",
  "key24": "56wMvKM9zTHyE86e5nyDnZdbELthWdPGp2yRSMPYTinQXWfLrfZ3Yu3LXtpHberZkEsxg9Uo8frEDe4JgRVT8nsc",
  "key25": "25chDFT9wfTHKARZpfKkXf2orQ6RKBRdFP2JBdthfaG7AvpyfnEmzp5n5BbnencnJbpjZ8TThnve5XTfMdiPLmkp",
  "key26": "4Hk1qfhvypidmKEnbX9hJJV2n3fXk86kT14km1WVmXbeqyWxaX6xHBXUaWzLAdUMZPyEoNXe7NRRnkw4fSD52qde",
  "key27": "3YctDZfjvZ6qtw2CsAoJNtKxpk9KQHXPBfjWr1id1kqoYQjziXDyKU3trfcSZdkGLNEhg4kbSg4GAeBKWQs13h8U",
  "key28": "42VuwmSoNygah4HdpBmNcH5s4nX6tpMJKJb3YwnqAbXRZViYk4PFCsXavjQnGdLUoavSiv1faWnfYusZThWvzPz7",
  "key29": "5U2okFzgTos9ZRxms3413g4VQbujhgft2N9apQ6mQywyEubbY8sKuXcPfMLyS3bpM3YwHnxMWURh5z3XJFbR7Gmh",
  "key30": "YR9WkqUVVSEXUCZSJunG9aDSDDzMCQRwWJe6n689jngFuXuoDNZir45Kx8itXy25B5y7nJDpzd1JBJJDBAjnET5",
  "key31": "3TKszCbwpKBHqps684Kfn5RdukoMxJdfpT2QmNGSrPtgNJuDkTjAA319rDzPQvwa1sd3dAE59kxL6YJHAjECzapX",
  "key32": "5qEp7g9AzZgtHHnaohsP29LbMMj1FamHggSGeZEu1xzmrGc97hTu5y8f3qwUcrg6QfogrLGaadRfXyeZeEdchfJx",
  "key33": "5AWEcn7WaauuELT6uxdb95QCqQgYLTqCBXb6gCEFoxDRpRoTixHR5GVTkLQaGBBxm6TQjU5D1gfSSuP1TK8VuJx6",
  "key34": "R5rQGVGR15W5hH1F6iEGB2USwSU8gHBTZmNJDb7REo8U1bPbfvLXs48LNL5itTzW97jXVECZh7nGwnpKTm1rrXa",
  "key35": "4HYTTZAPB5ExDZrH8frw7ZFUxYo7zPrFdCByxzy29SwvVwL7tZXzozf1RszeF5stUFy3wgSNPJprahXXB2GJ4U13",
  "key36": "2f5P8gjJeTn2kqMAqoPHCna9ZsjxaBKd9Xf2MrfinF37rhDyWU34MW9zRaqnWarbabzhimnXBFN1tShZnxjcRBNC",
  "key37": "3SYJtN13ZAsfrLC6gRUKH1eL5T9n6cCTEESLExEHhTpq2ixdLF1gcmpp8NQ7bhxx3cTGWxs7EtzByFXeW13LNUXb"
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
