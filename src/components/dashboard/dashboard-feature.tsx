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
    "3oJg4k7JmYzjmMXTvsyzArNgQuf82DDDGPeM5qHYpLuYZwn4AGUG7EEfw6uKEvcGgZZT5FFWpGPSY7uF68mQbek2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YXYMvTv4M3QntUENAKpgD1LgNqkGxvsv3gzC331EHSgjKvGa6f9F2zQC2srzRdijvHsKCccy7dUEuPeyVit5yDa",
  "key1": "3bqGqHACGHERpzn4KKu5RuHkhtAzySKPidLjsqwPU682jHLFQxiEBsM31uCZG9PFD4dTvKzuYAmq2GCzShM2YXcB",
  "key2": "3LBufL3yM9nePxMH5ZhDrS8on17pDyCN7de3eGCtbb6NjmycQbLKCzKdG4Xex5j5aFV77Bptq5uz8MP7okFXdkX3",
  "key3": "5V8BmJQd53J6ZhprEH2V9wpp2Jbu9podzNwEzRYtPqdGC4mjWEttxP6QyxjiAckn9W7pKbE9rAGm7hkse6WcraDE",
  "key4": "48WJQZVbU7DGrahZLAzTbV5qeqPu4b6hV2rY3mVwWxTi7p3jHpgrvVQBn33SgbMF75rq4cEkjMGgGUyENWusXHUg",
  "key5": "3pRjKvJoVMK5CB7oCRsa2yLtAoLfFKaDehjD8zzpsCjdgjBtwYA1NeFFHySgAxL1BRcYCUMJtv7ixnQBRFbkmrkd",
  "key6": "3nRWVUe6o7jS4ZfpYJPgzEBJuRA2hnTFFApKZAA7xVfTiq6djWwzGFYD4S8gsxxbr1Pv74iLtXttN98UX9jWRqio",
  "key7": "6bJULkYiLhzjb35P9fHUdyDHjC2baimDCh7YdpymMcBqnPXi94SiTQMY4PAd2A8Jm5MPjTJ7KrbvdoFAeejmUdh",
  "key8": "5NoXXHArc4UMf9pKeqDPgM2niSs8c5aLK4yZ1MVtiQ4Yeuqi1LaXCw8zZKNVJGytHbzXavd3DfnKPRUxYYe8a5TY",
  "key9": "3Sa7VVjvnwLRxtpjYoVfaPxHvoWKjQZ73BkLj2qojMEP2hWY5uXrgqomGfpqcH34eAR22vWvqtF5Ph4r7S5FBztr",
  "key10": "pdNyvfGBGjCNgbrFVE4YMY8MZqVs7N8RvKuGv8yPZJJHqVsgFULCPGNF6VFetBaaE2QwhPp48jqZ8cS6wSZyRRg",
  "key11": "Z7STiQx6djgRKAzAw5aRBesR2ipJv79oh6CvUXAfdyPAmrjzdaVpvijYfMMRtvMpn5gLeZ2VLG5BYW99KauQunr",
  "key12": "4r6GXtaMn2i1U2e6CPg3QGs35HKgaHWuoqSYJbh79XC3zdyfTLqPLGXRjxiDnLiXfc8vKj6wf7oUE7mykpmvuFse",
  "key13": "36Xi6CFGBhYaNn1vc98hfCpMjCcsKm3Q6qTwL8fJbvYCxqJZJxvKQNwKVzE9sZ2LHUiBKve5FxjxpdNsv4cErbF4",
  "key14": "4G1gvuAGXgoXhsck1VtaiB2xjgK9JBwWyti5QLst6aA2BXyyL3vtgZyi2WcBJXDnFfL3WnxnHGi974yxWaGzX26s",
  "key15": "22tGyWur7gLiYC2kpeAfmkUbjg5gjaFL1Br3B3L52aSShtEKCXV5sBQuMsTGuYFhqzWUi9qgf85NYjenE3vnGGAb",
  "key16": "3bGdZmS3tdVBEiWPnDFqwf9wF93zwyxLQou9j8do4XZacivQ3EBwJg8SRpB3RPSPCNFnPkxU3nrVWHY1Ykpy2VQF",
  "key17": "5HLBWQD3yiar4TQ3Xwsj7ZkAMAs3oVAArRSczSPpKzoSyLgMPJFphVXZj6bN4DkQtG6GmrzRhGzS1TB14QjSkTmY",
  "key18": "2ncNkP1z3HzvsTZTg113P3RKiY4hkRFzdYsXPv4bQMGMBw2gCBqRjSB8MMR8Yw1CauyDskb96SGw2gASXWL5iXbW",
  "key19": "qbBUgEH65CRQHFAdqiM5HfS8XH8DPj9nkzn1DRHA1FrMZ7dYKtRiogTEuLqaAh44p1fhvs3vx8dXL1DQVwU4fjQ",
  "key20": "4WKCJSNruu5ihTi66DM1BkByvrypzKgsU4CJjmYtQxeGhnLjwiare5FV7zfJZWHSj9UcXgVQjDTTTG7MYkR4ncbG",
  "key21": "2defyvbBU9378gqBMkqNo7RvuiHAoKXiPzXNvuZXYcDyjqxKoXPjXSTg8xGEJDVMJjvf5UpWRgBMrHyAjrYfUwge",
  "key22": "2emEBp3kRpn61KQmCzYjWinX6r1ajxwK4yCSEpPfBxEXoZ3bwGeL7z2YYrUwLt47R6foc75g2b1Zwaee6fR8LzvS",
  "key23": "5QKHZSzdhNPMFZPxRfAmsJuAH1FzKAcbeJSSDaG8SK9NPtfbHyRZu37xqydbM97hcdCKigFVFYRUKjQDSAA9d2BF",
  "key24": "PqdjoY1b1NwKPBU89vFNYP1otsGBejBwihfnbq1f5SoArPJXiz4Ey1fQgkFvK1AGtVmQumi6gC5hqWay3gWMkVq",
  "key25": "5SPF4epzCmnV16dPxDJjdmEjj1hiPcrqJCLi5AuXpsWbi2vZ6xsrjcjx4KUK9vxMoAchGKMHL3jcdyuZrsRFcUeA",
  "key26": "pNrbCSyNDp2krruMb8RWsqckTE2JkLvMK2NhZhFQe9vfSYi97TsA3XCsgbhsimYKfNhDzqseLnwW1EdXRPpxWxZ",
  "key27": "4NvBtZJxRmji55LD4cZn6bsrjFHNTmJoKCaPAmiZYfVeJzFiFu6bg4TyTzcVXEfpv5hQBKediWA21V2upDfuuTZP",
  "key28": "4n2kfwnzio6PRi3hTdi1zm6dd4dbwRjP4TuaggfgjECZ7gtGh45fJEYrbKzBUuPV7WCcXGHxEjHbEUrDRRm7Bvqd",
  "key29": "UiCbLgxXEdWabniKZALt9WJ8UKnKrxLtCf7wJXmGAvm8sRKhd799rHkAuWRNvZNnixfb92R5Jif9q9c4hX1td9x",
  "key30": "2ACgxC1LBgoJhpmGB2tD5c5AzYE75rZBLbw1oeSSXYueE5BHUvHg6pDmrkTsu3VL4XN7nY9gfbXBELngRiexAaFT",
  "key31": "4QCJLchfFG6wjf1TnbHzmAYQuD5VRe2gwm8jSHHEok7xbhS1fXidne9s1R2xqSAxbfHcRi2N1fZKxzngdg6HLrZp",
  "key32": "zVS3hZETn7eVPiFzCDboxYtE6Tupxk2M2TQuUjAnBNTc6Bd9qH3taqjkcciQm2iqXAPJQ8BCgvkjxzPXBk823Y6",
  "key33": "61NdB754rsXo1DTvwSUuD1oYExaMZiXLZhLNjeif7GyH7yaJCvjtN6EhqcQC1r1p2QARazVngv4npmKX18pW4mkc"
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
