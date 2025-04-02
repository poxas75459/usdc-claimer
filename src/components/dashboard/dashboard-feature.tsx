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
    "4BVjF8VCUkEDCKbwMidywrg3a8n37BgDGL72cLTXdBEDXw1KNLnQ7F8DiH6bLXfopapP95i5jxigcQqAZZRV1DCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rp9XJ8RBFXpAcR79QxHGd2BDkP6YMu8kkNiX2pSW7AxqT8E3d1KCDdqXkLgfotYd8DESYGaLTLaE24PQvWyTxSh",
  "key1": "44qdo15hzkTsAJqLVtpfSroNRcWV7p8Nnf269DGPabxeWtRJDVj7gpGMT6bNRWjrczR83cKagEKqJBKr3jLg5EmV",
  "key2": "jTKg4aHtdaTnKDBZfyu62ThviJrxbSWmAtNntGuKtgdUsY5VDd8E59WwLcJ4GWu9YHNnhWUxZXyfLNEpzT6UsCs",
  "key3": "nfy7gZtVujsCLXfYAedFD4548qT6Brw1QtmJCEhLTZ1hA1FiqgsrjY7emLa6KVPGCHQTmhxyVZQ5qgUo1WYdwBk",
  "key4": "5usxz76pDyzNi9o8oUH1YDCRcTHyaQLKd665DYeQXTcve5BNbzZMMAPzwSTaqBdkS1XsHbmBPtBi3s6s2pzNPPZy",
  "key5": "5TLXJG6jfMweixirF6xm9i4fFE7hsLBB5hbEjb4PEAeF4htT46xNN2MseqL29vsmnLxcWr83rnzLQ2S8y5xAwcsK",
  "key6": "41kLdXBkdAqRQZNhvMsbvMhZL5vhv4Zdvk8q3SnJZyoh8vxZESGNAtBb8hd2US64JnkvA5ickvGS7jBB41uNaj6C",
  "key7": "4J8ikP4BhuwQC6a9D4w3D2obxuGJ1EhXrL7MsdsEAEoYrRYBzF4qybndrC2GGAaoypfSssGNvPocTWxwrRqFVVjY",
  "key8": "2Hg3Wj641XiJAgGmoWcZ35jWjVzUh22YGtU35z86cnmbkmo8DsK7bzNJULvXnVv2fMBJitB81UPCb38hSciiyroG",
  "key9": "3EVCv8hcUd5enWVwdC5T8gUktKYRRy2bhgqkpQF4deMPZfbbGXG1tb3vxKXm1iyqVkkhAT6bL7F9YxP3UPcrMd7R",
  "key10": "57HqeA9KfLb8oKRh3Cs9nQg498wKnn271QWCGMz9mNKgKZFfVzmRDHb5oXP9t3anvMSkTydr6ykCgCcfCbEscjuc",
  "key11": "2bMbVrNs3StdWkchqMRhWa9zHRNqLCrFKbv6SnkXxmUt1tS8gVrmpDojh9Wa2bHXnrikNXdQGe133hYMTq2fmjBi",
  "key12": "38ntsYWQfHyAmL88puA3DAkxwKb8KZAsUcbcVUpWWvNDXCvU8x7MGocXihmLcAeFehr89fUnnvtjhgK5RAejN6Rp",
  "key13": "5cfUdYd8SjTo4WKECF1FAup6VHPP1BryZB8zo5fcGnpCKPjfhBLaEem81UDshvhNUmzAYzS38u1hxzRFMXxVhW2e",
  "key14": "5oWXqBDfTRGrgVeqBxL4im3ABu25knYgzUvoXPzVtxQrjiZphhWX5QNs7LSJGuLhfwQf6PNY3tQmAee3mAWmKwkq",
  "key15": "5L1W9hV5rnYXfo44khjMTrdmRCRGbwkERHa4VBFZ27aGidyTZkj7oz26aGK9rMDdSixoDkZzcAuEwZU9WcC9eZQ4",
  "key16": "mD7syUAxgytejUNNCvfVWjy1JMueMjJDoWy3rB4aMKFwuDX9uLJPiR8BjsGWcnxMwtDtQhtrwz2KfV4KEvgoR4S",
  "key17": "5QcAYEju9EDD9iTWWaPd7mDU6bQpie8HJt7RicbPw9rzfKMgchYcxGHS8Be94Vc1vy6gXAmjmxfaVusDbo2sHBK7",
  "key18": "3umNkZtPhtgZZ7J8H8P9SoSrERN13Q7wUf8m1G4fXSsWfLVfaBh4eqFHpvqTGRczoFCJFTSEJzd12SUsNrD2PwVS",
  "key19": "9Dq3sX1MGXWf7V6GJh6W3feo4RteGyAqnmsDXRumYhCEkqdygwHoLJbxj94mdnYVGfouJzoNibwj6d95KTxAs1W",
  "key20": "2e4akNMRNXe7rENjTGBuWy1CqhVcm22Q6SoVZhcbM8hPkbn97WSnfTXhcsgeVK5wBSXBbtbv9hMhicqgJXLG434w",
  "key21": "S3AUyYmoqY9APKVXe6C6SHiMPgiaoWj1tKv69sgVKWeEn7FhkbCsQzZq3VPHfnseaRkJUTa9U1JkJRF6EtSfLWf",
  "key22": "4kYJmaex5x8U4MniY6ZAYRCrnfAnrFMWCyecA9AjDEk8eYxwtKKYbhGzc6eeXscgX64vha8k3RefMKedcU5VNgNe",
  "key23": "Crx5g1ro2eWRvfv8RLFt61Hjr8H5BQvTYDu8Wf8RYQv1wJKWMzgRmVfnKpaGomYdKzwSuW1RgdKrrnUdrqhUi9P",
  "key24": "3yBKLjQaM88DHyPbsREMTLhmK7b6opSzmxF8kLbTLCW5m3wCu4zo94THHgBkTyJGNgX8sNN4bRSXK7kFGmuq4nvT",
  "key25": "5rR8YTwbPHZHc17XEY5f18nmJupAe7KJon392JbAqE2CFC3RaD2h19QseXqJ2zDVw9ZoSKDBCPs3yGyWb4KxNqxD",
  "key26": "5Wb6Tcu4ysox2BZwrFfEY6gLwjWw8iTmrWE7nj53pXJphRqz861knyjnzgXDWyp5DfNNCcBfFgX4AL1v67wpnKjW",
  "key27": "3CU9MrePm67GppSUBCzsYbkttq61fFpM9YjfFxqnxPLAMicWaUieDvg2f8aXJvvgg8VZLtQpKwtQy3g4JQXg7Z8q",
  "key28": "2rqfabRCGGDptxyMSgrktj7uc2i9nXu3NSvrfghqnVwkhKbkWhxk2N9XUN4MSEixu7XRM1PQwL2J1VPpQcXJVA9L",
  "key29": "2LRnAH3tX21iappdUiJbsjmqWBG8M12bxwmoo5V5gEjUCn61B3rvLqip4TgasTyTW2Gn7GviLZ77sLMwpR3qFtVw"
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
