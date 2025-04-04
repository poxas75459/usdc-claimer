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
    "SkBsbo7knt9vtpfxtxsJL4twiabEToGwrajnjpye14gEVFHhrhi4icJ4UkH7BrQjnJpoV6murpntprWq47La5bD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QNJtQUnzgmiA8oxfCbJ6HwkL8Et6LeZchFw86rbX4kKNwAVdtfTbSsU1feuv8Hu688cbjok24PuyJ81yugnnxnv",
  "key1": "5zH7UbPEHG12ZKFe3kmBhjYZ36PmjWP7ABsbny7RxV3KBJtzotFNVVRi7uoULaEnt1ASvupujHeSxE2ZAJbzYnXa",
  "key2": "4wvjVdgy4dvALwns2hkSLYSctCTV8KvirnmmBdVbfmeZU52x9FunqRz621ZaPMhyEQgkQRcoHQc96QAgFYDeVSjx",
  "key3": "3wrdjya2bDJJPJWmnWqvkSZ714iFHQev4bAbjV84EceCud1d11xuSZGMxevfPiqia9Vg9jADij4jkuNt7KD4K6HZ",
  "key4": "ASWNnoMHfQ233onsUPJkWyd43ocJXA6nFDaZmcQvsEYwpnhdMKxEnXdFKHAdxcqgmNUQ9FBMTYq6cCfLdo8BqMw",
  "key5": "2NYS3sJrrH7Q6iLQZCk8C3wdXpp9rxwsixensRiLw2UGLomnvVP7Y6v167sDeGrBBvUkr1msH2K9RrrGmv3YZx2x",
  "key6": "3HRKvJnxNdf4EeYyBTw6MMmv4MveMX7YpUXoeUFMFMg7sdNtCaEWyxyc2u4t3xat2vbYYooGcCBbEGwxDebzWfqa",
  "key7": "X4FEURV4YErFZ5Sz2VgQ3Vm5KuDhvGPqSDjXFeo5zhXBLRswojsntPpDmG3iMuND8RgLFueS2dmgj6Jhhau6hee",
  "key8": "3UCABPwjfcEJY3xC95gFuUgd665NPEhBovDNUTh5b1NGgXRLDoNs3XSRr6WH1i8ioEZLagDkq2Gc5yRSuyJhx7V7",
  "key9": "33Grd236tFfGY6g4MAWjFUs5XFNSKR9RyrxeCZYmCVoQ8kG8azND7EF6uavRWvucQBeQyXtbBWL7E5ucVNPXW6Sv",
  "key10": "2KkT2sFuXNn28oRgN1gQghGndDugH1xPdBKaLwYna1UqJpv7GZ4WHehRsrPmGFNL7ecbLEzyiu6ZaBtRS6nd8L93",
  "key11": "27USko1m6tARr1WhmCpqABcQwHGFr9Wi2uXi5kU1zog9zCujKzWnW5ArqxXZe5Z4vxJnGdCgpEvK1EezYChepWLg",
  "key12": "2uNDHheBT8XpkmFQau7YN3CiXy2GEPESgmwyr9mVVwwVbo7FPsuxBZDAwsNv4UWtfRPQws2eeC9Y9kogRdSKYKSq",
  "key13": "4ZURcfQcCQRYeKUbiSawadGwpXQcrAxuYqne6f1ZT5mybE9FYgrUhfBp4MGLqcitqcdC6onQZ3DoCZzFJhB598YK",
  "key14": "2JKopTuhBYb5wfAQAaDoAQUFe26CTYLTc3BVkzxD83F6zED782NhTEqpBdQhMqxCTAKTirqDrzvi2ki5sUoMMgoz",
  "key15": "mhix6kS38L8DNZFTw1qt9xNJ6C3NaXiTHtBxpHoa7oiCn69aEgtXWpWe4AwRBHr5X42Hjsf6Rqz2FWAFrMbKeeH",
  "key16": "4weDz5KGJb1Gp3vFVERVNG3mh9YBcAfhwN46hELioHvwiB8KszcfdUW3uu6bmaYJfwepQbjBwNMT6KnU3czhVqhY",
  "key17": "4BB1pHrxhWsNGCz3kUg2fRWKUMhUaxuGELDZxVKr3bvCnYqc8uXv3gkB9rBEmYqm87gAwNev9vEJxin7ye2quLfv",
  "key18": "4MJUqk8UL8Rdr4qmyWaxFNZ5WkXjUY9TjS3RK5XD8hJw1xr36DMfMLdi9XK2hd3qAbaYKMzQxgL6d12YmaCNZkYf",
  "key19": "538BqCGrVvh9v1TjDtWvGps2XNgj29CYxS97EDuvTK6sQn6d4Nzg9ZGvSH2cEmLYwZXTv94WCrxMdiTAJ8X3deTM",
  "key20": "4aVe6n6obykxEMtAGVHZUQjhEK7esJg2EQUea7WBfyVXM12faXRTFZedgLKqr6hnpnmqv18CsCGQNqJT2ALkm2LG",
  "key21": "3mHGjux3DC5ZANsqZApZPFbDZRA2QnmvpQQH9LTZUf6r31PkpB7xSNtqhQExYS3N4WbkWtHgJR5NvYw8YsuydZn1",
  "key22": "27eRVmLN7FZzTdrvwjKWTpFUWgM1sS9t1kq6ws34MbvPh3Z4nQCxtXMsWarqpriUUVPkJ46vpqBreyoFZVUHeStu",
  "key23": "L36aRHvM8px4Z8iXvXuKkR1Uduevc4NZRtA4edHJfy7XZk6PJFp17KSqDBYRk5ZnJEMF4CkX9Z5C5Feyiq2y93G",
  "key24": "4fFwPwUyPdrWQZh3jzrhAFAd2KzhYTogiFDkoZFVXGJAxu7ePcdLH7WjRUQRKcoMPuZTt8yma3CGuoFn44M5J7EK",
  "key25": "3M4VkutTkWbisEkBN8D1Czbn31csbpdA8qEdiVJfKsYmZnXQnhCChbk34BtHhf6N6VXr3NEFLsLsXJUGmW1QynUX",
  "key26": "2Pw1NPLB8xFJEc9PtUocQ2PGq8mxYPHsKtSHJaECuvJqw6zGc7NrgJz4aaWzzwvRg4pSH8MyoixDcrnfct3nZUzA",
  "key27": "2yCGtLEpeaEH55rFTpD1VY7ZjRqfE3LxT8vamWsEhLouuM6GiQ8ND13dH3kvMcSa4nZFNpHn7JNWqcWHV9vyToks",
  "key28": "29emN1BNSN4rPN3JXPSm1K83jo61Kae2MEVdThHMyKxemcP76jcGUu8Do3eZShPpYzgv3s5QQz5YuCUJ72Z4ofop",
  "key29": "Xj1xU4t2oVKpRZ27Du6VxvaMwL3Qg2mCndYXKDfdhYdFkuSUgC5P1Be4urK6e8fPfc9eHvNwZjRdGo8cJ5872e9",
  "key30": "33eVUCGGSZE6LN8fG83jXbDZCtSjCrp5iJpHjuyLEb2WRysh1kV6bMpqgiuQe9owgDJkCHJCMM2MExZKDCXfimP3",
  "key31": "1ZJkTUnsDmjgEsD2F6FyniYQrRe3Z9wypRaD2RacsTR9m4cR1qX353U67gSzizr1P6cs2i8Z7zqVZim23atZNYe",
  "key32": "2bSSPuBRQ8LNjybdUMBFqtUb1PNEf5Eqy63Q63XmeL7mdrA7u9pLSVAax4mrxaT8NELyCief7LUccWKT8wzyss98",
  "key33": "2zyvfYB2fMCrwuAuJdgSEsngWzEkCwun6VKfd41AW9xDb1ALp1VLBn6ZPgsoqwozT5GQBZmPNxpz9B6zBVm8EqBz",
  "key34": "5PfLYTsLeSysJsL23Ur3S2mJq6NTMuHG79kEsJ1QL25cobfNSUEWjBZQupXJjLUVmnss8reTdBg4ZFCXXQ8uqDti",
  "key35": "3BPTkseTuL61rkL2AuRT7wfMSHN4B9iHXvYj2LecCmc1Ac56BUdMNQBAxRisQ8iZjWkesUxfEEaDqLEHSwNjsh5",
  "key36": "4Qyf5iAWLXMivnsQSfAJtwHaJTUzX5TQgPJHfZUxXXdD4951afwu6753DdD1uw6jzGwhCbQG6QYctp4oYca2St7T",
  "key37": "jBcspgxAhdce8BoA8hDH9AH8N9CiEYMNDbXp5dPAdTnyYuFuQg9tVWc8pAgUHN5FjLQCbSytaTGYaRrFVWBPPNi",
  "key38": "59WYYbFtNJUUcjTDcVHVgLQ8o6VehbD9KF5KafjeBMcakAfvGTkjHgYERn8np3fef74FNWH2aPbLeQiyzjc2EMCN",
  "key39": "355xB3D4x9JsYYZMdY4RJngdFDAGgnuszY9PNEfW5VC5G8oYxYrkETT1txdDVjP8VtcvoVV3Trjh6wUoFFWV5ydu",
  "key40": "fpYA88oY774SrgWfHTZx4QkSiDgXfBBVbaT9E8ekcFAhciNMFHbRGsNwW7KGcyrucA1FxLzWMRyspmUo6gsvGeD",
  "key41": "2DDw7djsu6CR34QHp4nC6ZWsYaEuNAeDAVf6jBf8iwyroP2e2oguXRHXCPRCJSRx3KgYCb24yWByc3cQ7zGr1XvC",
  "key42": "5JsEcSw7R7VTQhGz8UAU9ZLvNJ2D1jcgX93pkmaEGK8GJFA7P1fgm2eDWaQiG9hc65i4DJiX3J2eo7mHkinPR16p"
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
