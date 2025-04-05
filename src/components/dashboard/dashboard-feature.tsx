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
    "wo2Fne4hTZDanAfnZCPY5v2YRkYuuc65uiFRdGcR7yafmusPavrh6kEhnrKLPdWcuojCiky3zpoztDETbQbrugc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RDt1FW8zVfebQN2bRcq6fFjwdv68YfpgHMherpGrC4iXJ2gX4n1jtjuRqTDyUPKBv6ALPFH3hcvBHAxRvnp9dQ7",
  "key1": "31v5Ye7JUKCuxnEipyt42RSJjsajNpwn3DSVPAbqBVUSHifBMBX56ycuJr2ywTmmF3Y8W3qbg1sc3VH1DqFpLs3n",
  "key2": "3Vo63FXjuLvEN85G4Vr5x1o8b6Hz1pJvmeEaFj5pL9vK4CJfd1gip6VSKgQqYDECxX2mtxchVYFeTCzETnTMz1SE",
  "key3": "qshNaAWPThBUzf4qpMMAWjhknqGd5YQKsYdY9PV76vFy9QFMNoxHb4NMmNVKi6G8fLBrRQAmDDEFi5d6dyLdPbA",
  "key4": "2a8rmRWRpSuBFXGLUkR1LHSNHPFmKeYYm4QHT23Ah6btp6AkinHQTTeEHiiGVNJtztUGEU5dWG9MAMb7uEsc1VMQ",
  "key5": "46LECe8Jrsiuxvyzp9ggMjEkeZGFtw3Prf2K8xiPiCs8Se88xh8ZYP8oeETZtc5GRuamAdUAk8iA1JSYHNShA31X",
  "key6": "2sMqKCTntLFZHpNsZYxp3BJAb7bwqdCrQ9sA5Vmi8RroxgnZyE88sPy2fgXDrcRQBNgYNkuXKsmT9HuZyWexUQWQ",
  "key7": "2cg8TeAe4KeLxFQHGGmjQhkjN2xZmENRhcf58ZX3jXfFdzu35igvorjw4bcn5YSsT1kHMWkzB8Hz6g3KBg5HXn5q",
  "key8": "2S7hHu9zEnGLeHxpReww91JDbtJKYrw8FpfxByyEX8iph47qvii5fySHx3bvKc6zZe8j692YzASvk3uYPDsuTcAy",
  "key9": "4ddCWYDk9T2DcMvDdu67kEGc22Vdi6KUx4gLnMpcqR645KqK24SimNK6zcpE6NQWYKqUNM4tJv47DAXXtvLk8re1",
  "key10": "2no2cSkxjqM4orFjfkGXn9utJ2HLJzqUVZhqmHHuEsBkG2J7gEeCN2PkTw1tSMJpYeq1qithjp1vFvTqSatSDahD",
  "key11": "4vxSNwbquTfKg4jpU8QNzjBqNXhXYZor5DSs9SvwcCTmMavG1mqZTa5svgrorKNJF3F4V755rCa27WhGdAxeALxE",
  "key12": "4C6dFUsYfbJcz3ccnEnKg7ueY8nKKu1fPzNPxgNySggTtuWmvhPbeutM7qKMnTr8x54gK8RHrJGjEz1rfnf2jPyr",
  "key13": "4vhkWVz2mHHTNRkF8QNEADYm6HJXBNCa44JGFgLm81g2c81DuAp1vQX27ZUnDhxt5JUsydLJtWTwn5LFCqzdLFsg",
  "key14": "29XejmNTejwBUAi7SNoMFdjB6qqnTxwfLy8WLi4NAsbmeECEKRNpY89jEDBy8CcHiQN9viepVmrfi6uYyi3sFpjD",
  "key15": "2Nbhv4o6UaoaUhQXf8wFy6PcNGFEQLwCyB6kxBVjizcgsWbTQYCnvjGede4bs6xgBFXiFYDfVAzRyvPXHSGXr6j",
  "key16": "4MxYonmyAPHkPK86e3bHCE4aXrr48bzFpDMey5xqvn3FA1SSeXz4ac5pkiQuTxrT2d2krVDs5eoKFsNvzCt1zfJ3",
  "key17": "2SnJHC41ktLrQeyxV3pY2Hg4YzNJ7ynaBExrKym4EndsESHv2CCZV33xX5JrMSNyhCkNZftje6bShNXtVcgH4Ga8",
  "key18": "5ieWksHyGGhjsiE8Dbfw3bY33kQ5TiKUGYYkUh84tTSW4kHgRskWswBkvjnGh6uv9EJW29Xc2YqTErdXqqezhaQc",
  "key19": "3HPeAgKpGyou1MMyoprFvpVD5A6Jnb7myGZH1TT7AT5d2XEK7djse9Km7zRt6j9JwKrgU3idKtN8jiu1wTUQVHjE",
  "key20": "4p7M6jCsqBLxqQJBYrJE2xEpQvuK1FWQhNoBEsPHRzfJjmD5h3qni7u954MPyg3qkX1S7fQ9GTSuUTG3zYQrEWV3",
  "key21": "niSLzxaRVdJbXxfsW7wfgkS6DDPPTwBCJ2npeEN8nTUAwD5c4Pw6Y2UPYUmQF4rvAo1YGsATJ6xJb6wgjkzzsnA",
  "key22": "1DbqBNSu1CwCmciaKpnzpM5BPuvyzH9uR9DFLrk83VntwJprkiEqY2QFx3iY6yQh2q3kCMSBzwDYZQYD5efgd2B",
  "key23": "3BccimGot2pso5E2YCAp6dYd2muAPqGTNrSfX5qLv7ZwH1LkGTxMp9wKTa91LQ1m5i1FyCvNfvTAsJsVVurDS8To",
  "key24": "4RrLPRPQ26aRjLV99YrKvi2yLZSno5LbGZxe7T3hWYQif9oBf4RJPohmUUz1YvT8uKpSiiwMFRQTJ2VGv2Zb86YV",
  "key25": "569dWWxKTyBb5Y171xkR6W2qXPPn1JwG7Cpnv4SnV3bXR7g3ka9SkyCvDejGaX4D5uAxnSZvQKhAhsXKhdaUCgAj",
  "key26": "5ueCTvLGd1ptvQ8dVQg22BwRV6f4pnsWRfymqfZqGtYrVbG7zb5AzBUjytKXnGhLKww1Qq29wWqVRno57xCDj92A",
  "key27": "5oUt3UpAifpSEx4ZPMD92L3qfi5Y8XsT4nS4DAVH31GiW7GENjX8YShLDzDrTxaTi4pRDrkFFznWhp1giQ79ammL",
  "key28": "Hm7ENmuAiBKzvw4zQjBvMUx3KArPtEGo6qw1q3DP5EodtJjtUjneRBZTWCvZZgdhL491grXkouKQnKiUoi3Ph5P",
  "key29": "3z7wVECr8WagYKLAxy3itHuY3NjY8k8WU682doHuXkFkGMmYvZhutgqXBZVxTVn9GxvPYYrUUCgo8PmUu7xnS26h",
  "key30": "26UeRoB4y5GJzG7ACkwPK5QdMzqW5cLPeCKgX8K1rw1hK9yJVqnaro5AYjcdRusGxMp5QSsvUprBVqGwH8D2efDP",
  "key31": "5dhRFmSNDH5QrDXwbjmmpJm6cDfrFPaxrTJkYh6hsZH9L3ENVHsmzPWVGj7w9Da5qTYS8CncBxeXbmgdqNmvxFwP",
  "key32": "4SoFAThHg3RBvRMTqiHfchEu4GG3qcaP8c3Ltfc13w2mcz1qk3dLFD2ZNx1vx7wMDiKic1qVAT33cCcimCTgjUko",
  "key33": "43MtamBmVDZ2n7pAPxouaxazn7z9nrSzQAvJxBKZtscZkAjbMng8m3TFDhzeDHuTZQsVZsC2oRZTu2Djk7uhxde6",
  "key34": "3wvFbGUJkLC5n1GuQ7EgZH3ZUr23BbRPZVbxUSrkAY2QbpsjkZ6nVJ4CYLmw1W6uCKCccvYrmzLW9FJxFvEfmtpZ",
  "key35": "KLenYbqKtpRVrh9tNNWNcLY38BSUMEv9uCQ6cLNc9EZ7wREFeQVBuH4zMwLzEwmdzTP6di9aWZjMqiCctYdzQwm",
  "key36": "WqKFgbvwCXPgLvr12UfEKFBaxpEp9kfmExocMAbzrEcWXikXukDxmryK23t77ymN5LWk3jEhENMHr3qTKA31zW3",
  "key37": "45XSran1XGBsufLxPHf4Rc35eikQu5oShKvhtJZZ7LqeH7EwZAhjAromfpApsf3Bvuu9MAtp5kx84bm5uY4DZtm2",
  "key38": "4KSepcnrv9t6juBAKKFbJs65UDPzvviqFUu3aFtTEGxUA4nSg6do4chJsFvNHxVFZcJMQenGWctQDM4DsyqVTh8R",
  "key39": "49PCJ3WV1ALDK9fvEVwbqX3c73CHmNAS8xHpeczhYRzBbAo9K89E8WRQr4YiZQ4KA97yXXoMjgiiqHmu3DFysY6D",
  "key40": "4AQv2MzSz5xZeNU4Z63JJDVNY4FerV3cXF1BQJJ8RiTm2f6j5kvBw6SvKEpUemU6n4guqVpuHN6idnZ4XTzTXNHp",
  "key41": "5ApSjtEJuB4HtYh8NfYdXvKwJqoSa5gbfiXw9pgDmyFDH2Z48YM12YFWhrsEVT7NuXvQPkrxTDaqE9u4zv8JxCMx",
  "key42": "4xMsXDeaVh67Qa3cAnoX2RcjtykyJydVbSvZBnbezrEdsZyMGcSWzcerAdfs3y7ZxpgLSAxTZji1y4BNbdeL2Kft",
  "key43": "ScRwSqBaTYigDDejRQjqFSxgDwhxXxDJ7T4EdWUVVmRj958qTuVMJKxSzd284GkGQvbVY43N3EKZsxTDUTTL5CH",
  "key44": "3LyHEXobs2MQdXBHVm1TUckfDwyX9jBQPMu6ASgm1S7gpwGXT1zx6s7tGh5MMMYBpdfAEJSbYT8VjKeoEUhk71wR",
  "key45": "42akBCgGKaMY1EvjdGN2fft8QXVnUzkUGLq71xx5maz1KmHN6Tb9fPxBLqLEug9Npkx9KJ5GkFzSLyAfwJGzx8Mh"
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
