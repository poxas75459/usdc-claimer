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
    "3Ayakeag5fbwoYN9eQHcwXEm75KYgHhqTfznbE6NDTbjAN3NhkT6UyQXxR8gv9nouY917QeHXgu27NVpeujBjGS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6YwetRsKRho7Cd3bf8HbH52fqdn8yH79JDnHkyB7oGrFPXJLsAb52SxewHPnwaseUjVEH9vR2NhtoFMGtGXaoR7",
  "key1": "kWWjQJLbgkGJNJ9ZrUjbzKjjBJ3ceZfKa3q1sxqnwstHWD8NfegMAfLWGobjtdgfsuM4aLErpJ19ctPALDM2VNT",
  "key2": "4tW2n9Xru5niHxMuw9eUWVRtX7ACQUutwM1EDmyR2sdiwHNNeoHhF7Kf8g5WwrvNeoSDTUP45qzuGDzArGZYCxGM",
  "key3": "4jE28Jn81UFdg8mHNjABHN9gNYQKaPAjkYrsnXd9GcVMDbL81t8LCdX8ypfS6FiLSyd9X1kFUvtTTNxVKGhgkmmo",
  "key4": "5MZjqGAx5UPPTYxsEpARxB5v9XsFZh7FobcV16A7BLY7vb7NDt5MnPaMADJ7v5CNFLT7rob1CCrVHeZSKzMNrFu6",
  "key5": "4zwN17y4PVETEp7MBkMYrF9QM1S25Jjk8rQVdxDgvjLLdQrYYpckTxxyezDjJKavzRFMin4jHF7fZrv5vXq6vXjQ",
  "key6": "K8ZxdBbLUBFVAKhbVJTZYuNoLtZgJWwcedtsFSKLcAfPPZf8vtTYRSRVDDu1Mif2WGYA6JeWqtx1Vg6FFP36Sd3",
  "key7": "5SEzk7q7YEAdCbVn9WqZfjpYkuDKAiMdMq3sS5ugy4jfv5WuvSdb8s6R3T5aEqkcJ5aqKNdjjf8t9u8oTxKz3vdz",
  "key8": "21jrs5uUMD2hsADYinWBV5RbdocG9pYDSqRGNJaKSjQoWLuatf8yjRmzM8RK6xyHAfe49sLLmDoS9adxBkakWoUU",
  "key9": "5StRHBup3t1BXLaRBvKdJzMDd9ySEa3oZnT7f2VvN8FcqzqcdRYhj9SxJQbppvyKH5qnPmyQzLBwuJZbQtoQRS4X",
  "key10": "2qzQHBod4cYJz5yF11BsCN4AvrNAWn7889Acg8Bi91uoZCrdw6nYtMRahQQ5k9nTYB6egTWhJ1Hxo8xz3tUJRcmx",
  "key11": "5ZASmdDZUsy3JikagJeFMn9SCrNXp2QYELh9kTvVbQXPqSa6SagRsnHiV9Sfz1ozm4Z1aJ1dKNMP3sBg7WVz4ZLq",
  "key12": "3fzY88qNJKm8KiJxwA4LfxNJJrkjnkY48kH1s1mP2eAqGr13TJ84m2iejaiiaVyvmuyKg87bv6cDvBz4Pj2BwxZk",
  "key13": "2fYehs2xhgCRjMeaQaeVnZjEbevQoCy1V6xkmgAi8rW99evSohVSNgqmwkFVAXwmTGd4xpZ26RfqwK6SSTuSPZ6t",
  "key14": "2KtCBMLDuDwPHfmVq3PbNEopEcRWBVFqjm3WYmUVe6qANRq8aGJHpMGTTtcds3CU4LQ76cptCwY8HUEgT6JpmDYp",
  "key15": "RyJ2i6GJ2Lvt7xag9JhxMJRBDkqcKka7KpvUhuc5dkwaYEEpocnYx8NKYUseG7gKzQRu2XC1YFJnaafHk3TM5ki",
  "key16": "YvqXGEmeZmV2hPHLwvWpTgrSVpPZpvxcv9GHhYzyCMqHPdMSHdm9rdnianCzY6XDZHJxaVt7PxnSjphMpW66Ge7",
  "key17": "5rpRExg3SVH2Nq1BJMVRRysEkbC1sfZvtRdMwTnsQJxeiVjD9GRDoUM5NszhKkfSegfioCpQjeiTtw5cffBGKNV5",
  "key18": "4oz2XkRbM8gQME9nkC5GqPuCDMq9QLTE4sCvxjSiA8zuFu7qRpVi3Kcq7hKEhsAevR3QMQUCiyFqyKFRJAHVvYaQ",
  "key19": "2wL8K35tLxdnSyPuipaqCq5B6R2o9rXsqKJJbw8tmPVV3kavPBCRMZcdti2LSBYdKLK4QwJrwScRjjFmFrndGyAE",
  "key20": "EyXCE4xzi4Hps4w9eiwD5SMUAcVH84CGDdZB5FsvBoxin9dV9ik7kQgTiYyG6Pj2dNkkYDRpoGG9tFb7N4ep1JN",
  "key21": "5VamsaW4DAkB7Ae4S5mvMZBYDbHKgcxFvTVCKc6uRP8ubjhcMrKosAg7D85xtXh3CgthdTK3kfbLYCtXEbELeB4C",
  "key22": "5PqS3Ci1xqtpoP3SrJDDZ7hgTwrbXwByfHinc14PkJAn2Vbf8W96VPbQG2rYppGXC3iTv3mLkBLhuL9rRUkzub3n",
  "key23": "3rQKgp4EL8cKw2voE6uSLP6CGTN69oASsjTWUKo9wHEvNEk3Dj3on2ncPa27KkXDJeF4RDbfG3H5rh41m5KH8rxa",
  "key24": "2pQ4nAXq7eAfuMLppEUHefBeCprph7bPUAS1mwLRwpcdteYXLdUXqYv3VEh5ZV8EsBBipTLCEihdvWHJRyvYMn3F",
  "key25": "4ynSWkJmgDFp6efNK5cMt3DW4ZKLsjmBEDDs1XY8hYofUisaEfMD3xNHw8o7W5SmjhBcdzQjebiB4dVk1QGwoyaF",
  "key26": "FTUpY3ow9obxAtdetjGMs5tFmAyJKCW7iyZPa2vqKEcMPfc3CW1KotmYRtxR4ELv2uza6i2yAU1Y13URyghrosS",
  "key27": "4GQweCKueaVjcxeLBcDYtKhKQTuwwyEJH7jQ4Qn3vxZJpkY1AQwYTs7EZthNB2EiaJUu9hn4prVj4Q5v8YBuQmKJ",
  "key28": "4Bw4m3gkawYDckkEjLcJxn6CEszaNTv6NWdxPXDSHSSjtCYfQVuY2M6oS8fGAvfyMX8fRHfLNksinvWkGzk2gJue",
  "key29": "3qr3BPiRLvewRc2TZuUkyS3Dq7mGQPYUTcpDfzYkNQnVka8U2GZKeS8qsPBXyDCsxKnUP3bgCxDdf59bFcV6frjF",
  "key30": "2UZfQ4yKYBoVk4FiBJx2C439Z6wYEvaeY7N7z6xtEcSQwzDESyWsgBEcAWgiD1EANB4SDcA6RNvxfpTGmhnqxDqL",
  "key31": "LjbZBRxXxaUs2XHrPPqNEe6whcyz2LB1b7vmYfSX4kebREBickqwpivhnTQtCQBQEc819amBLMubhwaZPxjsHQh",
  "key32": "2rSwzDZQJo1xtS66M96Lcewr8GBKsye4CzQu7NxPAgdqpE4tu5t6ji92nVjSrEWQvGP6Tj1EVpzi6RyhadD7k4km",
  "key33": "5bEtJPnN86thxWRRe6Aou9m9CWuZziu3UwZcijZzs71TwxL4x99hynfTgLWCiKBbNJTbXBHCqBRX9Cyeow56ThJ3",
  "key34": "62Q3aw9g8twreni2Pkpy4LgxnH7jbbGp41bNBjocXm1DwDUKSZvVw3B8XFmYMBEn21exy8w1VXaS1rSGoPPKppp1",
  "key35": "2kVLezzjL3XsSgH2mjJne7W6YNJ7rae2yM6rLTELdoxFSZiStxtdKK8St3LRQaByeho96yzULcJm67Nmizgo9S2b",
  "key36": "5vLVekQak1RmmE2cv7hXoe1yniZSdF1FaUEiLTGhEohq169weufM71sH5RfUhA2ZpnMphDyWsB8fb4DfSMzJLZec",
  "key37": "2ETdx7zyFUkmTN3yG4bwDi6n13mXc3EBzKqUtYDHgCcms2yezutaETz8pyF3MNstF2LZHnPBoh1u15U1kTuEYupr"
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
