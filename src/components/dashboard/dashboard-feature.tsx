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
    "3AWs3VcM47uHXrBegsVSW11ixVRMD65DqQe3AEQLBvSDnj6qYCgo8dWEK5ksAfeEX3DPG3RrC7FrMyNFABiNV7kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "arFwbkRpcAkufFnPc7BzD55fiNMTr5yUqTroKy1TKwVSeVzuND5CptXAUeLh1o5o91qScf7uJsk45Rd5rXKVPFq",
  "key1": "4iDVca6LT5zj8AhWzeATag8eit18MNF3ixEG4TPm9R6q9GkNoX6yPApskvRhQ38Es9EwwraUSt4ecTGv14chuGko",
  "key2": "NBiUmDnpwaEDtj9xeQQA9XXz9cph3egbPGVd5fDicVkkG7s512MmcubDFgpP6PDRKVk49gcefDwy9hWtKPJhDGM",
  "key3": "4pSxNqprbSCDBbhCBbqaWpn4o3xENTchjryVHQPBTaZ4vVxnQyLvTKD23vPTA9DJ8MmaR424tdeJdvxPpCer6gbV",
  "key4": "31wZD4y4qoaC271PHm7MNBWZyg2bMgQGTiQgNvk1EznZCPBEtDfQLd3U3DQFVQzwSa2zFH9iWmrKVreYs284mxjh",
  "key5": "B8Dx3QL7ThjZtxRq1rXYN7eqQqK2EVppiZeT5GM3tyrm3WX3YYU1XiGuNXx2EK9p4uJpqYbuYQaWxuLXrPQma1Q",
  "key6": "H43Bdbzh4oGpGF5xHddXw5tQEAjtkwyqDUQWM3ZQSCwU3gTAJw9dSkkuAsYcGspLEYTqEEkxGTzvkdWarMu6J1f",
  "key7": "m1rYxeNaok6ZLcKHMCp6xSuwFdkYE48vU5tnJHUBMrGzjuVxBdDvLCB3C99RPZPsjUioD45ExByBkr56fw8biqm",
  "key8": "5f7suVWpktN2WUo8wvbu1zcXJ6fsDHjGhg6fhqmQX6FWzosScxUJrBLLoNRJ6n2bxL6syQP3Z1GP7ugapSAmhfHQ",
  "key9": "3cf2ngfKKRpZPRte4BkRwR3wj6JakWuNfpJfCUg6bDy7LsTYbMhPxKrQzgxPwsGijSsJKAXgHxuzdt3dVGo1gTEF",
  "key10": "2hwrj2xdLG3vjjYng4xTe711xyghezBzKo4jKVdZ1jjjtypHJbFHbAsoKgnHncGf11vrn5Dr4gYonHNpCVZGUUvd",
  "key11": "4doT9vWySJaXMxs5gjfU9GZTscbzU55pJx4f3juybxjK6p1APYs4zgKXzBZLDMw8R2JrccdrQFewMmwTMe6n8yBF",
  "key12": "JGbTFgUwZf6ErpvgE6vasV1Keb16FPHAXxpkcmhZsG4tnuU3E8S4bfUiMdeUzMwPgxrhBWaPzrFGErx77QxbkyW",
  "key13": "5SNoKxxaT9J7yUjVJstGWrn2LXdRXwnaiNrM3n2Hsnjw99Nd119XtSfgo91fRmkxxnjfHBMre5nfXfZu2b4fNSbH",
  "key14": "DN2cKVZTnP2YckHEWE9DMJH1kjbkVcJ3W29pwTE22xZf8rv73xQvVbRqgJBVwYT1qUCiazxDoWZ9uJWkooV5Go7",
  "key15": "dJuJHBgptZPLQhAd76z73Wkiwq9XTg2AAJgN3fV48gvoVgp8NYxTyTx6B98c7Xp8G5caEAYpAvGBbgiTgrj17uZ",
  "key16": "3q9KfWwf1HvoQQdzBJnQ13Pu2wPDXu1nohESFbQub7d66NQQMN5ESwcs4NhyZvzpCZ9aEHWXfrnorG1H9rpYGyAS",
  "key17": "X2yrA5DZTrfNu4V7NuiBvRLvTB69r52s5BW2gr2Y1owvyEBhFdcCpypevCy1K5A43FUT69AWRFkLzwCBBhg4qA7",
  "key18": "2Em3XPK71rUS87wvVSGYkDfc9PX7i7DKcuPeNpK4eEXtQKbD5YQJ74MFvBb295et26vdSiFyZj6ikrMdNkYqht66",
  "key19": "2LpnJkZ17bke2HciYEtSKQ4eUXa5UnB7ho91tWFsHJsGFQ7mGkf3TTQwQE5dwu2TXsauEwqZuPATtEmkgKdWKPXH",
  "key20": "dSfK9wZK1WssGAf8adEm5PKpSjyGUdmjvKoz77RfyPhjmU1sMX1tEJ3ry8nmgpPTEEQ9wTaTVJE7DLToNCdG3fv",
  "key21": "32NB5HnhxYgbn9mK1875TQBD4iyt6PcWSxxjEnqtp6LhjnmmKomA7GKE66AF6s6papL9rHu7wdnMEcQsvNbV5QK7",
  "key22": "4oms71M8kaP5zjmcvv9w8RySJ9sK3jzJCeSeSUdLWktMdWb3Zk7nijBMKK35L6HkkbHBTum3sspA4wdSHJkjLjRP",
  "key23": "4jZ4uTpCfeVm55o4ZktBQH1m824sXXtrRzsQnvGBAuyxn3kXXDMB4oJvgUASGgZT2vWcAC3W3LNy7pgJtMLK1C8z",
  "key24": "3z56HGMMe82YxMhuRZFv2GEdrsrSJXPwgoy2L4SkWQZKRxhKxpgiHKi8zW3zttzBeybaTo4nQWj7D6zdHWGpQC9t",
  "key25": "NC7wRyRAY6RUKjCEfkLEH17NRLtyYrUec82ndcpX8zWErrJ3HZ53x1k12Rju6U3NpweDtiepVuZaQZSRLV8Wi56",
  "key26": "54pFbWV9WL8E858BH2qXZrnKbTJf2E8sMYm7Cd4PUbRXDFAx6wyroME8ZYkENKzfTbXBcZeixhEuPozaRQ9wNLQR",
  "key27": "5WK3A55MEFjWwuHvqeSXjaHWxfTjD3W3eoBzjWVWR8bEB8UtioHYBKXhx7PCFaTDcNWwtLyxA5o4BhZo7bx3ZCC6",
  "key28": "ZjKukQyGLtqiqU2kn9eLMDbpPAFkjgmRCY4c1BN6fheX5moX9MwBuPsMCsyZBj9HBFh3eXYrF5wc7GmiRe6Yuod",
  "key29": "Jk8B2wyYqriHSpT8MzBLmsXMyUWooeJxQMnTikwwKAER6bdkHbt7sjnCNfbe9Qx9S2GDhjPEFNE8C4nTYyFxxZ6",
  "key30": "5brf81hidYtcDbNJq5ienkmWe95WwrpkZExACdpQW95Vt5ULikpWC5Q3bLp1n9uHf8x8XJHT4yCgk3tBnzeFrair",
  "key31": "2iXwfQ4NBrf75rvFy11mir6GiYAghAzYsXTQiMWE7PHvqLDXk8BodWTaJLvUSZGZFoKuQEjpKigS24oZKQrBxVsi",
  "key32": "3yTkn9wu4AFbUFhAPyFKzy91rBLiCaTWNkcJ1yP85CzYRtzyiv8MpgjbXSFbxSYaUvp4rHM28YyNu6MX6XGJy8AE",
  "key33": "3SmAHrwhDpsUBEeom1jhGhEiTj9CyPzidfMVCExFkgKreSLCRzviLuxatKzrcgxb4fPyv1H1MgCvpt2ZY578ZTem",
  "key34": "3DRreYsjm99aPQnSnoYh7ANbiCB66umuJjXTtiGJadibS3ceo2qRBxFTZdcnC5arAowfmTNRR1YDouQ9X2y75kgZ",
  "key35": "4ygPXTUaNfJjbzmXN6mouEFB7NphAeNqaUPx4U9UHF8gU1NFbLMWhYoHvDc8XjoDDm5efCmZTjfwZh6GSQXu6XeG",
  "key36": "5hMqWwDJnMSbY9WKV9D9ZyxpaipCERdv9TCc9jga9UcWrT5C4hZ9pGe8ETMPFnwh2SzgGDp3CKUoF9eerJaCEJeZ",
  "key37": "41yqpAVSP9hRXxmGhn25v64FXvEY25rSMXy5zDst3P7mEnqFcaGp7H7e8SxDqVVYgn3ZvkHDKcPiZKqGa9f1DP84",
  "key38": "cqLLzjwELEHSoaqGmUeLmT2mp4jQ3xgiwkCmYfNpHVU8wu2Q8wANm8A8pHvYrMBU1mEVD4WdzxXmio5pGJgSnow",
  "key39": "3dcQzjmQgWVHYmYSpGazQxxZinrk6s6xiwL1VesRricDkFPA3UZqY6UekCByUubuEPmF7RvmgtZS7kQw5sonrpYq",
  "key40": "4oKjbL8bUssbhu3cAbm8mgRJWtUWiiukLc7EJitGiD9bTCk9NyjTWjWmnDAT2174zB4xqqBnHu5UKVc1eB6qhVP7",
  "key41": "4o7Z9BC8QFrPY6AMw12zVQ4ohxMVgrC9oQfMt5VgysYGfJPG9U4zyHTZf6v6zjMSVzFyFstP78uunEkEYCMa2zGN",
  "key42": "5UYZpn4CAHi8KoBpBMGpYcrxpg2MbCgxcCognpVJJAGkEuTy18sh13LT8y4zN4ugYEY2p42QbiKtXqYNGqt3Sqkp",
  "key43": "Vf9i65T2i9YReDt36TZnLJM96NEQZujj1GfSZ9EAADq6ktHSbmL1PugBEzxje2nMfLnVpDW87U5PvBgmabFfGKw",
  "key44": "bKGbngGqmrr9rXUNfeAmmNtteVmt3bJwFjhnJMGR2fk7esAgWzMFfsVS3UkMwMoKxpiKMWWXUorKiwQmd38bS8v",
  "key45": "4EmYq5RWWXvJjfMU8DjDfGtXvgYL62LsVRyiXq1qWdE7FF4ZopSJgi4qd1Y4XgB8FeDu3ukW7Gs8PVgqP7GK8vKy",
  "key46": "52nYcB1XKxx2PK8A2GrjPxshXRYrRbsdbg4WorCn3RrmcoNckwnH4tq2RJQySedjzvb9KbeiXxHvAVoQ1sC4bigH",
  "key47": "6kwnc6uDwR5HK1pdsDoTJC9hoQEQ1KBQJx5smojbsLSbnSFVdNpqKtu5ZzvZVr6Y5GhhaBvnsyQGuByF113T8Pu"
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
