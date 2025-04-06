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
    "4KKmLoj8DVsDpHUqyNb3Ff9H7X7SF5dCT4d7Ym4mnivKPBmqb8HETFDe2VEmRtyCsCV3GsMiWpqkxYtzKEWo6zSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B5fYX6oNF6Z3j1NG1GkUrxEQDFa5fxezheZDPsf4nCBGuwVFJhYr986Cfhzj1PfEvFEx2RDLb1e36j1cn2hucqn",
  "key1": "4c526wvTCk5xyEAusoem79HL5VCEn99JZjuMsDcgW9rGBnDypfQBM8JD9pi9CqXrMzHycKv6EbhJE2EWnNQJq6Z8",
  "key2": "4DLVJ1upYQwctt7PjnnYCAjspSLQFWZoCa2pKGdR8ueki1FLy6zJpigdJZGsvRwZ5RE4vERXmpXSnW7RZKEizTsd",
  "key3": "4hn3Yz9WSgFYK4CS1nCeV6p5okPdDbAd8ZkCzLvbntYzU99scKHt7mdVMch8cAVxpk4DhzrhQ8BMFaW5TTmBLrcu",
  "key4": "xs85xgdWB1i6KMjqV95xzjCQ5a9PfiDTWbbkEsz1QgfPjkBWCd3temQ1eu6MFxrxFU72KhK2G3QmHDVSr8fjp8C",
  "key5": "FsvZ2xFoKTTkbcoRq9QbHRAaX2Tsxp5HUrcRHwGFUTY7UJip1FhYBtjMo1Wmak63xHWpRNgzm9Z8By6c8eUiMed",
  "key6": "phiEhUfz2pshLcKo4un4PF89ttHKRaCVPu9T7N3aXBUPsMsApHbHYLYnf7Zg5ZXv4q4xDbeXte7nA68tzWsCnwp",
  "key7": "5oztGnNVF2hUXMnBGfPwBH4MyWe85codB5REoqwgXUQTf9C42scN6iqWBbekBJDXE2VUN3XcyJ45Hui8a46U193i",
  "key8": "UNmZcoibemGtEfpM8fEDqFF5u4QAbbK9yti7qAXhgTQ9SzEAc2jNJ4FmmVyfeBT3CMzHyh5tS8PGyF93sGmH96o",
  "key9": "WZ3zhBpVe3RCFqgf2Y9U5B9LBzsY6puaCkZFWxVhMCakEXutojWczaiKy8JsKVRVZhyGN8GJFSebjmkgeDi4j9p",
  "key10": "23KSMRmgWX4H66wb82Xr1Gsubn3ULdkiizRhQd9NbeafSaVUKY1sQoF6dhDmPWjWVPnyGsz8C8MXnDakBzec2KY4",
  "key11": "56co1R7Yr8YkYsuSrcuNv4C68y7782ZZxW3RAPyuVTRjRkaKMWKKCUsaMm63vwx3SMsbWUyJ2xCwQTcWs7zeRKKt",
  "key12": "322QMwCoBYj5We5wXzU2CcqWUjfDw6BZgree5Hx4u671HJgYTuvFkFRT2yaBTxuhGz2K8sEJq6CftiHnw2q33gfE",
  "key13": "4XGJXMHjxyMcd7fNrd4P64Kt3ZYqGbkNJhxGzYaayP5s4Ki1pZBXmCDpaXv1thMFS1E2aPVjePXquW4MLf4p5F5K",
  "key14": "5iU4W1mwcaBWiMgkfr9VnNyAmXMBL6kTGJBhAL8aZa74htu7PfKee3Zpc7Q1TxkUjBiJdzfrFgK4W5CfoU9UAyUh",
  "key15": "3YQZYLau6oGgj41yiBjoZ61FJHJFAkUUsznbKWTAFN9HHYuhAdnwNNwhPHA8qSxcZPZG1ZYAnvBm7HeXDS47PCw3",
  "key16": "5vQoJcVpvx8pC4MybbPfjejhF673bBJse3391xoMq8TyWbsmzbAcMEFkVSPChvAHUEdNYqMmPHBZUuQfWu2GpdBM",
  "key17": "5Q2ZcJwqP2eA8CB6nvN9JT5ho8VwzNDKNk567NSnoWWoRrW9mhFN8XAyGnEMgF8EtYGW88G8AonXuAfdh6BAhZrc",
  "key18": "j2WSyGTJWxUtZPbLQ7dKvBAm3haLNxe9BhQq1pm1J9P3sqwERHhZNSBRQHnhE288eU3em7zxPwa4YXPGr3zU65g",
  "key19": "3Ks5R57qVCvZA1kkrrJtaCCFSfiTcrhFQGfPcotVhbHpYcAqDw4KdNYbaJDNv58ub6aYAxVm21x1cVQVbNsiNB7b",
  "key20": "2r9Jacxrrdt8myzsDJ1fBGu19FdMPaxi6s8Wg9KF5Yfbb92KEnAcwJmrzCq1NE2uQ7kFyq4nZ8hxiMciWx1JSkSF",
  "key21": "8aH4cP6GJjgwkiENQZKsRDSHy3FYwPrQNHDVuFqnQCJZd8hnbp5ZniEoKfEDvdUMu3hLFmujkwTyawz3RXkogfg",
  "key22": "3RxKLnEgpy6U2sjW6s7JWtYmm39sJUWMB2VoLXxTgMpYYkGUGUqcmfRCtjAdLDRTk1VpSM3NQKcTM8wqnnvAVmwL",
  "key23": "9QkkG7AdCFRYSKTqBT9VsKh4nGT1yzB4PmQ2wSHdzkzq9vXuonG2YFtv9Tdh5KKgM9z3pp5GzAa5uPEgy7pJK37",
  "key24": "KPTzewEQXReckwKSTTJ5uoAogHKyHMe1qDPS8UaY3AQiKFm42wR9P6E36As4jHmmv1y7sp4JDvjeYosUPZG1c4h",
  "key25": "5KiZeuKoknNmNCsrRV8j3tSr8mbExQxBn7DgfZaAHQdkr8MUbrNwWFZd9uNf1KE2EdYsvinFmLKwuaz7nKwXHTnN",
  "key26": "33z77pDpbVKkxXhGM86fdUMaeAc7VmVrCHLEQMmFSqj2wN2AfcUJrk7EgmYJnhHbGoBi3Pxmz5TJT4LdiXpEWvSG",
  "key27": "K8bcJYJa96UeYdFTGgGTDRghigsdna25rBCS1ANrtURR78EXQBn4K2D86sWsPKhJTD2r8VL1DBBT7Tz7vRunqQj",
  "key28": "wAVFYUfArvk1hhca7KtNBeC24RzWJifRU9kBW5V9pYNYrhBeFLgmY2wK6tWPqhKJh3UjZnzn117a9RU1br39wQ6",
  "key29": "5yLDBGrv3AWHyH8bek6QPvzfHqgU1FkJFdyoVtvfZTfpzPGwQ45kzrgo6JG2HAZ3AGbaD3gMxdpvqrWZa4oqYpJ4",
  "key30": "3APDLwrYYJ99JRfLiAr3MBvL1zYYERBKiByzKbX8U3kETsuZu6Y35qscu9qCJtfFS9NjVJiQ6F26nu8EEQy52eEE"
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
