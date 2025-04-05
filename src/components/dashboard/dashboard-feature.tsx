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
    "LsidUdLXi3AsXUdV2Z2M8J4QSQCyRZzN78AKY48dcybKK2GuuRFJL5Erxwh8rPxBi6Lntagd1Xq7NXDzAaGK4Na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QbtD6hT3Qrfd6MhYMuioM8jX91xni11Vy1bp7J5BWY1v1QYuQPdxX8s9q2yYC4rFp3MJG8HFoueBdNsCfkWgVEv",
  "key1": "5JGk5NLEm5jD5ekQDQagxm7Bvtz4PXfYrX4PeKjJ5oipaSsCuV8GuhRV8Pqgjp9s7FNoE2Kxzzw8vAyju92q2HmR",
  "key2": "53mDpTeJ3d7gr1ZKHeQgaCw9kLscmyqAhBWaumJTNw9tR3xXjVK65mUAxyX5kcmFNyAAtofGWfMj1KxqpQ85N2pg",
  "key3": "5ttR9DDKLpoVVM1qaufKs7bqD4Q72J8U1pSanYHFnRew1UbB5u19dqwQfcSCU2ZtTydmJDSgYvUANtRzpq8aEeuT",
  "key4": "2SSmvfDSQ6fDszBmWNutVtqtLjaeTypPKCUUKXoJBz8JsGm1pYaDbZ77f6QgG3RMzpmnCCc6k7wsdR3JtedPMTHG",
  "key5": "64pgdpiigRBfZpf4vnkDK1TSaonsPHW91RhNTs5Dtbowero4qu37N5avZZZeHMixe4UFJf36deziLan8KmH1nmnR",
  "key6": "2dH6dAZBs1VnCV2d86uywiVCWhs6AuYgnUSDVhs3Aw7n5et1nxbeVDo6fmmSGoqCTBdDC47DjasZP7BKo3idkuuN",
  "key7": "q4N7QVQKEpLsNU1a6PzDdAusKa66wNEXmCfRDM1DFWZJJKrCyBzujvh4dCAcU8bj8ccZ5XabknF5by1HHnzCRqb",
  "key8": "5CUeXLjbryxo6MikqUzfLcQCXtowv8S1smZV37oA52vLWMH5ztSpHviAr8wLgShXyats9KWQfCqQdWAUWZoxnTrB",
  "key9": "5zsV2sBkLqSdXYEtxuYTw6gvH4SZcEgHjrmNqzi25iTqqRtnqf8hJ6FyQs4J3e232PDJx6D3jMLCZPscCD6FMMWE",
  "key10": "4ScYtTVhuz9avbscRUMM7cwaLQnbk7zVofedydZVvzxNrcQoAFvXy9rDXAkFQyoUVJXAQFaiHZGeiXww4oS45EuB",
  "key11": "411iQzAK3couGVPrvnfSZXHUeVLaSJH9HbuFdPgFrnFLQEAXTpyuMDwpDN1ag98BuXppUiYRdJxTpHs7arTsr9W",
  "key12": "4RjYoxrsdAN5Upry5Taoj1oQ1HvXkovwAtxbW1ZPkHyEhakYqa1fx1UCE3UJZFzsdNBZBTEdrFEAo6ZxcDVRBtcq",
  "key13": "DLNBVE4CK4sGc3NTVUXUw3KoWtUKdtoHua21TFubbdVLZifrdzQu1qWTJMZv7CR4ZcAT9t1LTSwU3dBLNRfWYnK",
  "key14": "tG9YwBaxjZivZcDXbo6s6zi3vQZB912VCNYjEHbfF4CkCQSxyJ6A2YCX9REDkHojSbHpPV8A48SFZqFwHYdecMk",
  "key15": "29pdyXAkrbKeceJTnQdSaSadu6JHJgHTYo1qQFPafvG1DomMjNjZwV6YPZfDgxYE94kA1MGmS6kyfgxFEAD98BJX",
  "key16": "4QyWSJqcsdGw6FwP44J3DwVKG7up4mt1JpVcYmB7KgBKu2HBHeeHTdfBSYUP2VQo8CT4ZeBoCo3RCiaFAxeP33xo",
  "key17": "5v3ztygf4sCauBfVpS4qQ4vKVweozwFYNiEPwtVvhxCwreAVeuPHWaMmzJSwPaTpHGx6yVLtPDmvv4SrhgkCHMyF",
  "key18": "4voctXuBwPSt6UGoEJXVn7CrTpa3EDAgc8P4a9BcgKgi3dVDQQHhLnwDBMioPwyKttYvhpjdeDuQTkLUXHfEwJZE",
  "key19": "vRaJ36BqqxhPSpT2heXjVqwdH8eWNvFAawxfzerjEP6jUA8LKNdApd745fTWbaJtb9Vimj2rsyxsZJwSf6tSJv5",
  "key20": "2TXbowuzJtDz7GbpCAwf8xRLFV9WXV7TXePTHEeRhdvkmaHjdRPPCxT2Q9rGWqvarMX6ekReQQiy2cHG1ra1GueK",
  "key21": "37H9Hqk1dQ56yfMkGeDf3uYm6Wpn6p4bfDny3g8EVcrjEdozmbuX3n411Z4RVaxtxYKBAG3b3xFxsYrtSGA5eEBH",
  "key22": "4iMoAsBtTjX1H1zt5wRf1jZmUt4KRcrUJXFiZx67NSdSnPBMUyRfN3YGav9Z3ibYAMzfFJkJVofFSJgNpPjvTUXw",
  "key23": "5jmUFAX1aR9u6EGqe5MsV9Yed9JquM5rZJUq7cpt4iUUdm7Az1p7UKhwHew7xwY4rURd3zNLnJ7P9gEMtVuYjDZS",
  "key24": "45wahoYPmPfwPvS7Fb1GaqhD19K2DA2LoKQbpxVJF3wmnru8fbd4LFUtSMcWGgyYP9mJcKzw55fDLeJcQJX3AjML",
  "key25": "266jR8JFECwZBNNpeBXL3sSKT9CXxPFmtt5nKPGfrp99hNWEPNXbBr5r1jso34BEEaxv3oj1L71pkBokq2qgTu5t",
  "key26": "xFnid2Bj8DW18De8GAfo4G69XAch18RuXtcNg4c3Az8vC8foiL1nrV2RwygQL3ifFe3oBWJ634Yr1rbpgwVeVZz",
  "key27": "iA4VKSUh8wAfQFFwzvVnP5cZrB66j2THfXtASA9pkxPNeYM8b6Pq4GEihNB9bx2BMKxvtdqNntTNkKKRr6Y5G3V",
  "key28": "4xQckQxqDxYgdkcbv71ruf2vXdLTEfSKhSaPuywvJ6WYoSKEXav488VaCbR9hvwoWjWcb4zfZf8KKFu48huE2jES",
  "key29": "3dUVNfPd9zHGQBnuMUB7g99RKsqsnj9mmjc6opessTCUXFBNcMpHCHiuKh8sv2rsZmX838NCHDQkJnuh26RZc7wA",
  "key30": "5aUqjfXriL7t4fcJk3v3ZjhNs3DiwaPmiPvcraT82dbQeqBo7SQzTXFDsM4ayL4WqaEbyWX4cHmGqD6EYT8YMAVv",
  "key31": "vooRPpmzwiJHFZUf72V32Arn2cag357YA6wTbgEUqz2B5Ja4oz2mL8gctG22qF9zjoo3ugWqir5Qq1qAVdpxeYN",
  "key32": "2ApSgePhagxoWwtxVi8QvP8wqxbBEAGYudCFgWo9aztL6ggfHM89A2CKDRJkk71sVWPbSv9HkhhL2irQaQCwusN4",
  "key33": "2eg3KZD6AKF1SAxckFKFpLdAsoXiXiahP4j4z8dZbQeFXiPEK83F8YzDx8FF2SarXUy42qjwvmMu1LDxZ1yFA4j8",
  "key34": "324TfkTrJ2bCjekzFNLEu95xXidom8yKh7WuTJaz2W1XVnb1uborenJfNgiefU3RvTCfvmTVQpcNf9R9THzD38Bt",
  "key35": "9H6vVRkRBj2VvBdHxbUh3sfk42sZcdtPUcb6VpMyv9X8kDVpUu9fwngPXnH8CZ1R23a4MDWYwis6HfzPQZqPF1v",
  "key36": "2uAhFm6srpSLzu79PBZLmJshhaoFtDfcKJFLwjK5pdhMTnnPLAnRfqAsX6u1ya9qPkLaBcRWeftu2GnMWFdSVnSQ",
  "key37": "2tM1WW1qRUoGU1mhG8jFFmcuFEWoFTwdxNZLHLSm7KiC9b19RgimqwruT1gDu32rYTBgZDfndSe49w7bnzHMjmc5",
  "key38": "AdPTKFen6BjQPRmt27u3ze5UNpzYyusJggwayCjqqRwFsc3Ab3biMfP8ieddAUUBmCZn57aTwu4Cp6haPXiueMU",
  "key39": "2G2CD69B3gjzKKhywejVpF875c4shhakCywWSUieFTfQc4gHsFX1iG1UWPXq65UXmnCQphe1hdRq6rWQjNjTAfvu",
  "key40": "3C2Y5EJCfDUdfpDKy1VxUzhrsG7cPkQpXuRAPkKKzdtok2G6m7Ym23Kf3nUrTJs6G2xdnqqbQsAS9muUZxtu4bpW",
  "key41": "2qRek9HZ1JM2WejHwTtSKVQUGjCZjv1NYqNkGMqc56nZTkHhnkyFm356LxcrSqakcExsnbv9Q45BXhzrsYdFyYmc",
  "key42": "Cq9voVw7v5rz5opZp6gPuJaANRZqLWRHbXnnxgBSfcGkBwH8RrPbcJZ88QG1tUBLEwHh4RAEpm4wDSmPRqUYzyK",
  "key43": "3AY7uiuXuXHqeb18MAoyqKv41KYn9hKcARGHpgsX4Wn87GNzBoLqGE6TF5MXJWjrUW2n2t8httzHLUF3GbtXpfTD",
  "key44": "4i8yb7hjN38ffYuWBd6dXgUeLcUgUuFBesxSVNuTDzXdsFZnXw69EYFA6MwffwghTbcL4qYLPyeAFXkW8M9HortZ",
  "key45": "ePmAjkJMK31QUCs69zJi8a9kZUcx7mWcQtJdRuHwuXxsSzvLsuiAjw4Znxzp5XMuEfwA9cukLWUMgXB9bnd8U7c",
  "key46": "5ke1VY79u4zhCHoNwVeo8yiQD1cGGQnQmZhQYKZDh4d8hwc5M4qs5Aap9MVEr6PhQq9ycv27zkkg29BvxWKMHymQ",
  "key47": "9TzCxR3jVjqGvX62EJxtYF4ud1cxE76TKSNs4q6zsyMwq4h8YmFHjhPqti99sa28qW6whgbLeLFMWgMZS4NjPQz",
  "key48": "2dUaKBD8QBt9CMSXAn8Jot7heZNJhR2c3uzvUdLrNmSrGtuYz5izAChgnaiTpKmvW44RDf24soaYSv3XdXF1RR2b"
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
