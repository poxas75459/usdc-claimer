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
    "3eczWooUjzrUirSa3HtpXRgbtzPiwBW8Ly4KmTVGZVUfTLGraE1iyR2jTd169zdFi1heeL5acu6gMPChTBip1yJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4brPQvvSCryQodVjyYcZidQMuCy6tchbrT1UzGuL8BNbEEDw9bav55WBNXEUYiewERfhyCDJfuzyjsaRqJ5H5jM9",
  "key1": "2Qicai6SXm7Mg1wVr1MeNnkdNSs9x4pG3yGBkfTPs6M5vKzw4Zw3NFF3xU89iNY3YNe1ZZXSC4yJHs6mFUFNyUtr",
  "key2": "N7zswFvZ4GiLEe4A2k3Hu3tazVPKjJSX6nGN2Txx1PGZT9zpt24ixpzL4P9KMZ558pPqyuJL2YnuaekiTHfdRxv",
  "key3": "4GFoDP82sPQniUFc24nMM9SkjYN4CTrwubdz88JVUfFMaYfKPDHbwHeso3M7YCyBqBKfe2YLUmx5efKoA7xrDJjL",
  "key4": "2iNPq7rEYYWefrvi7ZSHP1BBQnEXoyQPooCwVovtPC44QYvtA3qyEuCiygccCKkKK2vYDZ4SGkTjZ3BtjYFTRDKp",
  "key5": "5NiSNiYqcrg7xfRetu6FqirzMZCPehdweMRrzywenqQgpwUyimL7kZQg2SFWV1DSRGUG6nESzNS6M24ATVBVLX81",
  "key6": "5FtBEECJrfV7uRNTMfQjb6PS2brSCUt7oPf7gMK4v5dLWn8gp6Wdda9nUdrjfu3tSbP2qfLTqLvuezmQxXR8D7UB",
  "key7": "5r9T4E1bKqBoDtBGCGpSoxssp5kjixtwz99FB1KdZG68C2bu8SXWv3RXGwkvxqgyZhpoJzwtLkA7gqU88hHT4gZ2",
  "key8": "57jc3hpV8xvEEkTuUXshmawUFRjHLRYoXjBXJsYDDoq2KXEW8k7sukyLGdedzSzfnpn5NWCVv3NyzKLbWNHrd9xX",
  "key9": "4KDav5BRveqahHJTLHZyRYvSJ8RVDX1RiJdpCsJrLFfsJdMi4Nzhu4D4yeDLoxxG6w9XrxhzZdT5MNB579BKKvhH",
  "key10": "ucgALJzh1kc8tE8jyv4rVY9gnWs37CkhJ2PNSjaa1TJPCnEWdHgtUiUsyshKSLkrMeNXFEQtMUXkcNRDCxnQygN",
  "key11": "2vqy1HtL5g6TVtQAxhCe65n13CoErT5aSCdHEvHCd9JZksXsphgUvoHkCtvUkXzS4YNtUjyNXFopLqXqPhYvq6V1",
  "key12": "4UXybqyVuBbgvcFpJc2eKUcPnbyw4jkYBFKCyacPWEFBSDxtCjZiYkpbfvpkhFbRimogMULmqsP3Hc2R5VhoPEsC",
  "key13": "Vyzwd7smTEL1zpX6MNMt2hStPTtf8qrdvwzt4k61ub1prjFTinrc5bchdoJaQM8ExMjo2WDJgXVo8afC4hahqdb",
  "key14": "25dTg2fF6UEeVnPn3oYoLBSRQjwcPaALbxgmCpkYmrxPdrA1kHtBV6Y68yTtnpWTizax5qac7qNY5vy3zDvssgNa",
  "key15": "45fejajTKk41mgv6BJaVGCXaQGjpBG8Xm1T9FJuQ8MMkbbUGAFnYpoXmgiR912ouMZFaStFs7sU8kcwVqWMWUgi8",
  "key16": "5zCc5Zu4qRNwrAMbeoRs4EWqXUkQnVkYrRxX65Pe3d6qEFvSkhRd5uFmNpVgZhU2GYR4Ajyxmb96Qe9194XNKrgb",
  "key17": "3mYjjjujv4LyfEunWf1QqHtqkBcySPD83t8HMN7oyX9gdoUwDPDiVUiCArPVezR3sPiTzoanYwXzM8FyM6yUj4Qx",
  "key18": "5qWUHJp8pRGBhRXcr15cvQECFpJFntTKPMcizKgesaL7CMKw8yBCDArqgzPt9W6YuTLWtQk1rK379SyJkM9Z5PDn",
  "key19": "3is4xiCe9nN1fhnfpAkhMg7D4WXxNoP2AZh9RUo22RTG4ioqGCa4ZijdEae1AqbmqvCMBp9fZ9ctHRmaj96a6jRD",
  "key20": "coWby4aQTJYAFG4BFxyGgrSV624yYuFBaqpyaZRZqB3WenqdiXaayYRuTDYf7hdcS7BcAahsHeSqeyzeZtT4pFj",
  "key21": "Rt6XmzzLxEQ3cbb5Svue1NXHo69f2V2ED3uVro8fBvf9FPUySZbx7orrkrh2oNAvM4saLLFgn7vMafbvf22UyT7",
  "key22": "3mt2XUMjs3dphucMZLNnbBbfQefkV69qScFdBRze9PmWh3wqLtLjuPxGV4mMEaCMm3f46Vgr1D43vJExBtZvz9fT",
  "key23": "4QJKxYqKXQUwr54xk7Ewa7S7gVJAJmVJndB53oXp1EUfBxUrC7nRSyFViDL6kffhRfJaPxC5wbKMaHfonZ2cUXah",
  "key24": "54AJ4ZF328wSvvVQNv8E6sL3xmrA8Na4ui3fdVgoRPpfvRr6HYYECfzGTLfrmHSAMEqxSzvrPinbsWQvuZCDE14j",
  "key25": "3sHm6G4wYKG6G1bbdVVvVoSm9KDRf3Gd8xZuikL8nn7umnACVTf88b851rgybDoKmK21d3MW4n1tQ5b56QTq1ASA",
  "key26": "gNSoYoB5ZhTt9mjbxcnaN3R7WQT5M9oEEG6gGSyFt6sTmP6Wbz8Jq8UCQcfyN5dfTtFh5dAZZko2pxvMQdugA9q",
  "key27": "3SezoupZVjT8tSNZdCe3vasFbmcvAiXNYf1sTASyWZDimurS3Y25YsUzCnLRFD2KoMtYZCKdKs8C6ZGxk3Agf11k",
  "key28": "4tvMXwq54ne2JMvvNjAMs6s3zkYrLdrG1itAMNwu11DqpcWeYHGnQQmzrDJ4TZ5zybWPxc4t4JmCpfpQgv5tKBBP",
  "key29": "2Sr1cV6Qp45eLWvpAZTzeH8ppASr3FG1JdhAKHm9XHdVK8zAqpdvjERw8YSBYjoqFtW9g5MAeNACpE51Msi1AR5q",
  "key30": "54w1uUHrQmqPpaRd4sXxT8Uq4nxL8e5n6yA2SHtmw7nY3Emc8P3Knp9hBvXnitKmEYhCAfidZfcQ5VJVVbY7XjGG",
  "key31": "5gCQM6fgXuw4co1J3vLZ1XSv9pWU3zLMd3nztbYNBn6qALu6dQKBz266pWVWLRT1jtb9DodPBHzPUw1Mr25G9Jfj",
  "key32": "5gPQ3bfyKBoXqynREiUyuZQfoFk9UofzC362wjVvuhKXbMxmMxHV9NrBAamPej4P1CuaMnWQdyeN1ew7aDEH51GZ",
  "key33": "3tKcnCeTxMMdjCP3wgPaWyfx2RDjXv7dhFTnKbb6uQ6vfbTnU1F8Wc3RrK3BVH5w8XQuYNXHpA9isebveJLLQwpB",
  "key34": "5rjBRLeNWgX2zdwti16oHrMVML1xiLWBDDNgtDACZc9X5ohmxff1UJGbXY7iUFMb6Bd8BA7S5jFxMKGG7ZHzNzX",
  "key35": "3ytrDhhUgpk8PBTfTXDQ9E2up2pdqUwWpgYsbgXqiCHheUEQYG9wgU5mEUAHWdHZmK8jZsEMPccP8V3Kv6zMtB8q",
  "key36": "39DURyJ3ckfnoD7ZwwfYHomy81Z8pysxwRW1qyDHAJZmWvo26pVpyMRHgGgKbfhRWJGKcLMGXGaD7HAVZkFr5Uoj",
  "key37": "52fFNp4ePZsHJgmiV3zPbpws7K1MzoZRy8GxxGY7dWHDutiUGPVn3YeXbXss6NJiXePeuPLHJpDFJCffmhJkmgDZ",
  "key38": "42oWcamAAPwgF1yxH6155TQ1Zujk8Z5ouW1KShbvrUnc8DUpgH3G2o38u475xeiFALhEHT2q4wrNMkURT77bcfrr",
  "key39": "KAYxuFaRNhGX7wsGp23cHX6nhP3goffHNSV8QcdH3LHRVxhjRfjFhqxssBAgRLQfWy58GnDrTinXfvpMVir7tNU",
  "key40": "3MxUR8JNVogb631NEgPtW9E5GFuSv2t97QCoCYyFr3dYGGcN74a5q1dtS57yZir9s8vvZrNxaVt3yYUD1sRM5SpZ",
  "key41": "2Cttsq4jBYqo6BzHYt4D9RiqvoU9wmVwwUtcCoMM6ZcY9iVFPy1KLfHEaQ4a1ujhU5avVsyp7roAJSxi7domH6CG",
  "key42": "4ntYg6L1ej48jqQo56usxXM89W5SfutBQvp1NwqrEWew9y7k8SoTDYdYc2WPy2ggaRDaiHhAdi4SG7gmCx6LLW3z",
  "key43": "e52Qd5kWvApTJSf7YDjGjhAfDoszDLJ2ZE7zDPjQjb73WY2Di4d7vHkdwGTFYRNrgeoEH5YXDvKj1TggrkJp4jt",
  "key44": "4eKYXZZ5Dob6EnbCQMTJqnQ1sT8m7UcutfAmfbpC2eftDVW9AWSqmExJ8ww1URQB6uTtCnUByhjfWut3K7sRZZCk",
  "key45": "4Ty6BAYuYcUZJYSYLRGEA1qapwhdqqPMyhcsYRXqnxY9nKKXtB9JoL3RvpKxtByH3RevGuisgZrANKSUVFuBhnLd"
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
