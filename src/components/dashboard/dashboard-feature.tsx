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
    "3iAM2Z7bymzJjbVhCZVMGrM6hRHdjWG7zYkyQnSKGkoT5a2LxaUTYieJCBKH4oW6hC6duoVVHPEnHNdVnFTttcvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aPjDCV47VW6ZkJsSALQj27f61ENN4gNow5YrqFJXc2QuG3Rzu6yEdQsFhYGeJ66gRnU5SZvgoGaXjtTQKJAPa2M",
  "key1": "2kF8Yr9E6ZTfqguMz5eRK9tkgBdyZbY4jb7srN3qGNykTPt942VXiiuziumuiCwS4Fqp4PneauT4Ky9WL3WreYsY",
  "key2": "2ReSS9HQg9PHiD8NoEfA1u5qgj93KbJg6U9Kvg4RnuXCfD2eW4MLNp4wZGfLzUdvccQGg4XyQfJnjcfqcnvxu5zQ",
  "key3": "L23vV1GprisSNbjfVXsDhNthkhRKPVd14b15vH1AbMgdgtN5jhdtdrNeyRB6bd3Qc16FQMYCh5RASg1nbD82ReR",
  "key4": "5ZNpeRsujP2mLd2GUYZzNqbyVrwizQLBE3KKqU78pruBbhM82Q9dpNjAcpPJDQYsmjXC6gzv3udPwcb9Z49SKzWh",
  "key5": "34YXTMA3t2X1ECkwHCvNiwX9ZJnE61YkubbzY8ru1sFBZxAGbcGkuHJeZkxkJSVySp5WPzgAjabrAQ8kT4QBo2CG",
  "key6": "3JMEL1y7aJdYMCVTE4JRT6aw9hencbfC9z8V6pXBBxP6EWP8XSZ3CabfMPGHnC7oJKNckCYn7HCdyixgarb5QCK9",
  "key7": "3aStio8zJ7q762mLMfyH2bW5g2KmQKLe2So7TmhDWB4XhU3Ao52hk9pxiKyAAzmjYVCNMkgfSQcaxfMHYmTM11Dc",
  "key8": "48a4kJHgciP5h5nRs2ZowLhSmLjazk4JbzbZ8Suv1HeggQCBA1GGFZo6uZTfoDpTnbaLLmo2xMw1TFAzda5M9w2h",
  "key9": "5fQN3BqHgu2gEL22vKvpBnrEDWrDo1eyFsn8VS3U7x7xrZm1UQBbA5aeyN4voAE5WwZkm5CX5r161niNBCvhsNPD",
  "key10": "2kY17D7sZCAKBSXJS9xSm6EyXHt3dyttMRFME7wvSciSihZaUQmZKwH4YdaArEZ24Xk3K9uoAYyh3k4mMsXL7ZAA",
  "key11": "2yJqcK6cWSzfDY9H3p51HimyXSyiNcJXu498389F5Y1BxPqWLFkEdJtC7VAFKemnNFo8m7Q26F1FcXKbbEPUqjx4",
  "key12": "5P3GbRmC348FN21aFLVzoX3mitW4RQ7PGZXd5efYZShdVzVXzscrBkyukd7v77FRkWXRB9vToCH5BzMhVQgZoZra",
  "key13": "2Bzybnjg8HCrmieyLJbVLCmC4MZwQcNzxsexRCt4dzHQnLa7RjTLBCQ1xDirWS6JTjtQRRpzMkvS11qwuibhJGQ3",
  "key14": "tho8DESPm9fj6kX8ugNmgXD3fHDHbTDP1awpnqG7G2a3m2WKoEg4GGhwW8S6526BuWQLihcsWHs6wfYXCtpBUQy",
  "key15": "qXC73dXcjtBaXNm9ZgFJs7PhMjF3LhFytXbqeCeb9ThvTsycy468ftisxjP1JisaKRwmG8n8J3xQcFG1HqWPbRp",
  "key16": "4BQAtBLVd8evGtdGsswaTznbQLf7SJYYqtYemtDRRmFQ3WQedmUUoAAzp1XMrYpxFM7KRTwC98hzbwYiFVBc64jq",
  "key17": "dh6uKc5FaGapgV9LcqwmcX66kpe4d1ugKpC3ugmgMgFRdVHRQvZUXeNMFC8MuWidZ3VNFA5ZiVyeHw2ocxdjVNi",
  "key18": "62W7iu3HY952mYMN6g1C9nfCvqa9eymZqBHGCWRsQ29WBQNQFTmGcpt6uBkexwnLJx6JBqgwu2WNAihnGeQnT9an",
  "key19": "3E5cKSPKPc8WxDYF1Arr1MJTZbkaEnSSsrtQhNMnupM8TNaGwTVMHMJrQtw5oKA3rna5qAz55SrzZtLfTC16zD62",
  "key20": "4yGXsiJ1PaLWj3SYdZRhjV9rVh6fmQGj5eFU441bEUa8TDwtQzn2iHymP4ST3VJSPV3UmaNqAquarQjH4SChEfQC",
  "key21": "4zPpUxh3NJK6uYw9pAsVmejWB7iX6RJDyrvVezi1uA4WFLQvyXdCeBsTqP3AYnHAz1G2q2FT8uBxFkfdtXuuHZ24",
  "key22": "4WopKpGmnZm5Q6uqHZ9xJPkRLoxzELErbVsj4n6fnBxEUBQRuGxWiZ8jkRncYso3z4Nn5WJfnkdxnkE3jVmHpwho",
  "key23": "5v6P1aqEueYpuExzpJrkpHdusEVborvW3RbdZqec2fFiGzQ8g8htjSKg2mYFatj9RuBnuD62pBfSKyWBDCKRigao",
  "key24": "4TJzck8yqhmb4z9dcUwJKAW9VH6bbAAAHb7xejGuZGbfy3dfVfRYnm7vyxEw6PDQxG4LNhGt4aK4tR6yNh2344dY",
  "key25": "5Taiqd6jVjbrqFv9Wi57uCrooZFcAkfraK6tXgN2XbhPP7Z3nRyVyQoLNQkNfdUYseC8pv7jpLh7ozzzqtPTkCPk",
  "key26": "FxxA5buAJJND3joei5YVfLY1rZTknPmrAogzG3zyz5Vxo8sEPWzinMVLWJMZ6yrTDy6KEwYXyR8fndmEDQF62Ra",
  "key27": "4GuF6YZZGpzguBerVTrZoP8qZWd3b8dcfxCg2C86VRS1BQFidWcz3Wg8mD13Rb8pMdXSdECLoGX4jB6WpyiYzFGs",
  "key28": "2yB8mxGFcLxdAuCoXKLYhL7wH5NmvGSdh9iUvvmNCusCkGW3C5gshXb3mrm7hNQg5t2czbnaksWnLzJLnmbsDyDM",
  "key29": "4bkX5FJJz9JYc23RFvVyBtL1umAsbkFWsBZEoDcjpXx8i69DwDWshyQXAq21xQeYPd3vmtW7DiHLy5w2qM1KJiZm",
  "key30": "4WrEvDAjk8dXUrc4UKqEGB2LhK9yy98GGDd5fotkvmBk47zubjHMJRDNjfBijzutcnXdYSQZHyYh8aSy9J4SHZxt",
  "key31": "3D8FcUoqWW2CGVSWtFcwe6UBLDPXmaFkV22TnCkqcgqfCcYXH7Niwz7tLmW3ZfnkbR1EJpSzCbiXPJ5iyvwrYxJk"
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
