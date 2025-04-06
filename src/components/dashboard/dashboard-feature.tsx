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
    "26p1cfqUi41sQAiRvNGMX4NpWwHuL5WTbnt8UYYZbc6LVSovHPnSP5S2fxhLTFV5DpusNapgukS6yAep7mEAnu2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fSFx7BMqDN1iE3usXrp9gSDkKBXh3XTy44N936Wf8jitZUXe9u2VU7yCxJa8wn9b2iqaQwPfFy9cF4QRpwuZmMq",
  "key1": "5mxWXL9PDVmsz59XRocGjZ8c4WZUoY1RL8uoMtG6NiAe5D5ZtQJNKRxAxMA9WTu5A5RmHTBhBkGf185B9K3FYDKS",
  "key2": "4engikew972yPLgCodiUHbm8GPUrBYNpDMrXfxPQLBbWFff48Z2aCaYm4t6hrogDzmbi2PRvBkB3qT1ZjzrW7o6r",
  "key3": "b5yu7t8SEaoQfR88KpXLvXXuxWtvvr2Gh8tM2sQGdZRRXKRW5pRsJXCzhwbraWVqkEAV6omnS4dccABpa2n33tu",
  "key4": "66avPyqF13KnExpeUJsby44zH2YUBLz2wBtTAevnfttoCagCzMfQQSzdWMhohT87gtsrr66KisWXKKGKmgy58SD6",
  "key5": "3NSSFwLcfuP86QgBAPUVQMSvfRwDzEGKv8qTcNYKm8jLNSaZvhaH5ATCYQnvbeYxfjCpNJjwgGDwxLbYu6BnRJM",
  "key6": "5qdibzdS3j71RgDCLBrExb6ZFgMQybrmEqGqcFadDioKHUd9C5a9cJ8Xm3s1rmeVUzWJMTurLWRNM1vgrCFdAVK6",
  "key7": "33TN6NjGqyRyRSKi6hNjUKMRHmmiD3HodceGuWxnf5EyPkD9fmB31GgVhTVtwMURCy3SyjbpocbAb1hzsJsrs8UQ",
  "key8": "hu7JeL9ViGpvZiwadL7ibKcN5cMfG6WUoKKeRZtvwnVAw15ar12na1vHKpZ4fHsACCAzLG9voqoXVDw1J3oTXSF",
  "key9": "3PKiNqHnqM1NKpe4q9JFFkHd782cD7KPFvZxk2zdcFkpK4BfbkyC9cddn1zQ9KwbXPMLnw3iE1J1xU7pbezJ5dHV",
  "key10": "3kp3SH58puV5exgi5d39fbfxneBXhgDnCfZwuYgz9bNjQhE7S3qr72oX2s1zzLjgtyADwpps5rZr8Uxk62JAjXLT",
  "key11": "3nTVdiTKAFynh8h2KxgnyhkHksXR2iFJnwLBqJQ1di66Qyr2kL7rvXW4yDJhYxYgC9tUEdU9KwPKjZ4W3mGP25J",
  "key12": "2A4NjLcj7bdQy8oLebWvJ2a6VE71Sg4uzTHd5oQf6Fz6tDU6X5AeqcqNFwWv8ubXdiw38CH4m55XortVSz65bACB",
  "key13": "4n7DmXz3sfu1pFVFbpsC8otSN71K9UepdHiqJutkXhibw4xaFQLz3pwFAwq6CvmxoLZuhEGiDVzTsHCUXAxHeCPD",
  "key14": "Me6moFuycjKdmNuGtynhpoYvvtMrRvnUiMbE9tVUxaS1QhEXBxqmFyRdqCiGXj2Mz6uj6ucqCnFXGyJ38Fh2co6",
  "key15": "2ZLj7nzuQycLqdvAEtGUfGG4CYezsCagSuRASQQ1qy259qHzWQfT1Zc6tDDxQuK8rokvrhm8YotcBdeA3C5D4NKH",
  "key16": "XsZAvcuWnhQ7oSq8DDoPrPsUCdERQAqDbsrm6yHE4CQZ6qGgvKysSwHxhSeKeBxnETY2gdygvqPLVZSx7Ys4rPf",
  "key17": "44ba37Lky99jvcw3gwVigBKqesTKKfKxF5gmkzZBphPTbRBfNewU1XBDqDuaWSiVMUvgy9wvH79N1ofXvUZUrFkM",
  "key18": "5pv8P5cAtt5jmpEqXLxAwXw7wuoHzfn57Ct6tn9vQ6qzWzk5TWZ9MUH5LLsazm4dtmqRVkACtCfTMQtc9oHReis3",
  "key19": "4v5Tb7bWvXxKAypH2cigLy7HZDYWRbfYXhWuxvGpnVwgJ9jRy2icBjBpPguSMciSzdMTatDtp4KVHs1UreXk8Ev1",
  "key20": "bcr7X8R8SxiBNcmmkLot2seqEvuCierL1djxFcs8EbkQGZPvxyUS1hmqegRmGbejXexRJGudcCnngxAuPhR6Rsz",
  "key21": "33HfdsRQuKL2D3QyNQbPBo6MnkbNvvR1nWfcmUjUEDCpumDMxpcBzSYagouZsJzoxXgoFd7WQ6sMJVMq2eC45w3S",
  "key22": "4stQxfKERJoNDxuzqN5yC2KVr6FHAZ6BXnxnCGKVZkUfstc1Ap6WsfJxmaxMRDuK749hV4ua1qN75UDXRTNEi6pW",
  "key23": "5KCSkLFrkoMiytuVZnhTqMW486qZbwcF2kco3zDmhWmT3B3o6XXXaBDEV8Y3W5EwkV6MHZKV6quBQ3qy4LMxqYxA",
  "key24": "5PnynLUzq5J78fedaPsW6HBNN93wANWWaYuGJ4W3D1Q6D8o4ZWvTFwEpcuqDwcA9fkpCaj2rR3uUrMdwdzkETgje",
  "key25": "TsPyyphKGwgaGm4iHCnEhSgKE95ESSr9cqwGiPMbn7oxWWM2nKimgRS3mKFMiXqUAXdgZLrahLXuijQ8kGnFEcp",
  "key26": "5vaEBosUcXXoN5PphrGrs9SY6acAFMs4mDdpWXzTtGvEkXgKLetBqnm8WYUs9y3jXrNVRUnfQDd3DkmZrd8ACwmR",
  "key27": "2rYrRuTps9QVoPhEshrscjspvduXrRaF2V1RHaYzYemb4oDH29QBPzM5bt4stoJuaoXkP85qKrQeX3EcaxDTYtnC",
  "key28": "4f6hdxXhbpXmThpw6sxVY57RGDCoDcmsRNWzqN3AK7zZZMimyVesvnw6kB8U7HXiKLWwasceDK46Xx8SFcCwZDTR",
  "key29": "3jHDtJ6kstxMZSwfq5kXie94pR4fAm9bUhsrHMjtgHSu3Z7d43jVHwqhaLCoBfJxJ2YenqtNwNy4QiusxgMz823k",
  "key30": "3zB6KQruWRDdCaBQoYouUBeM3H8AHCYMS3cRvM1hMSiADnjCtJujrcSk98yUMHy8gKmW6x8ikNMdFhBRVZkPtrrf",
  "key31": "5VeAa8joyLCpMbuq3wfpAC2baQF2LqM9f2445rsjTC2qmYz4z9rDF5Pt4koQH18KTav7AWsD1Pu3bfuaKDLheox",
  "key32": "3QtRfWY3eL4MsWLUdRhbBsLiJSnuprgMwHtn4RKFxTobh1mN2aVi6trQW4A5NoaZGCPGEnY4sdHgAzNYmgaACyFo",
  "key33": "45YGMfmwN9NYs4f6iNBoAT6wpAVge3DVWKYwErS4uyh19tvrp1U7d1CUMWNzNnVdEoCfZxHm1oDmR75FqbEFZ2vQ",
  "key34": "dGwWHJLwwAe7ETABhY193hfQ8dTWFo91fq8kngh6acdEm5PGN39hRjmxdDw2VnrXQXqJPjhJuGfDfmJGxyAVyJG",
  "key35": "SoZ7MNJedK4ur7dr6wduWcqsCZrLRD3SfHcyn5FruqgQCoeMyz7TE53EroPy8zKmXoCvN9zZ8hio5d8w2umcmTR",
  "key36": "3oxMBk78LGCFZSBo5SSYiyTrjxucaFrdVFYooi6GZLhLecYEB1XmfsLCLWS5f6jwhpacUVWoapoTKkyN8aUCNR7k",
  "key37": "5QUdWxcnn6PQPtBpf12uRE6WQkB15gHFYDDnNo1tL9bgyvAymVMseXLxuw7D3D1YPDspG3VbBX4FsrywQs6x3zz3",
  "key38": "4S2A5x7UHavKx3CYmVfHjaAdowRcTNs4o4ZjZWBTwHRuGxPeFsDWC6YmH1gAp1423uk4GyXY6rQZDFhicSLCW7Th"
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
