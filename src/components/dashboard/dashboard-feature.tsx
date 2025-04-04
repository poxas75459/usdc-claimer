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
    "3A39iwQLTy3rqF7TbG9RvD5wQkuVbCm5YsfKy152gP6HRN5Gc8d7g4pXFbMn52CJ6BrVvXcZeRVPukPgu4WeWsjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51jLw419NDb5pywCGQ9QAhzZF6BzRpsZ7AzJGKPFFCNbR5q8S9GU46Pbtbx7xQHwnSFZnuzVsbipJAE2Bh3Kv57J",
  "key1": "44j35aKno6uQHk7F233ZbiqaawuGTHz8DduPm1xU4ZG6LSMgori2BkNENKaVUNoLmaNz61u7TiLYgXXXYviZroGd",
  "key2": "3QQ5xAGQS9AJDbnh5DPn6dJtK7T6Xah2KLn3Etaq4Hb2xuHEUY8ERbjs9ECEq1JRwRVyDqfJqVvRHeuQqrFTHFBU",
  "key3": "4p7A4fooBSYwbSzWfn2KMFztg3swVc1dA3S3Kv6h9AMeYmah2JpNSBxS3tkdxpazmJB4K5MdGK58oxM93zv2eZ9h",
  "key4": "5JQFGQeiuCP6jVTxyT5iENMPvYzn2DMdBhNNFXh63BAKNWsdafGir5zyoGX5nXNhLC4CQGnxEbuFb1xeCA6QZ7x1",
  "key5": "4LdXnC4rwjUi1GRT6rxKHCm8Y5MZWFBep7NN16cvQmV7NN47ufrkrjt1Bi3AqRZcZMkrMxyRdyQ8a413UyfMDpuk",
  "key6": "42QQNQbKtbHPLw4ag48uTn4Mst1K4gV1sAFiqCHX1e2MoipZUrCZuEvWePu5wpoz7VgCV8qooBXejt6Vo6XDZ66S",
  "key7": "4e7noWHfRLczfBBG57HXHKPWWziNykf4ZW8xJLbM2rJCSQGRDoEuB4r3Az4oCL1KesTYF1iiiS4ivE3fTmpujMmN",
  "key8": "s5mbNjzLghmg2As71LgA33nV9J2XJr9P8sBngQEoR6hK9GyjaHoqeF8Ecf6J8oqSmYQDMRDEBJheCkiJSo2YNdB",
  "key9": "Ls2hnQJ3w75MBo8AyWMjEAhBwrCugNUN1rhHYcHjtp4wiA3jap25iyV1BAhnfNLrTV5fg6ovbxridnEwQuHRYT8",
  "key10": "4hsAak9gkDuj89aHTDwyR9sWaQEdTYnC9U59W19E4h9k8YoZZ6U8UKQo47vDvX2HmKfSAWjCWAEPjYfxsBnQA5pt",
  "key11": "3CRy8Yp1DKYXgc92q3vrUnpfKSrqaTff6bja4EwNBAC285UqebvjzVRd3cy5qQDXNPziz2gCc6V1BSXu4EeqBb8F",
  "key12": "zfQ4vziQCjUhK1EUW457V7qXJ4j2ZaYbgufAGz6G2RCDrBb6CG1QmL4khjhAgs64GaNVg3F2HXdc8Z8yuePtmqr",
  "key13": "52Nf2R6zd3mZimLShir27trw9XvntLxnAGuPTC8ru9uP6jPVvQB6kQghhWMANXe8cbxiEVeNsweVHpp88GpVzr2s",
  "key14": "51NvLQGDSk3gNXVLpBMFGz2MpgdhoMuJ2cRJ9Uic4nJ7bZwRXMciQtAoG6t15Fw9hviuLjwdXd7PKaMuGPgSEeth",
  "key15": "2w21EeNmhrvuJ39NMT55QGyTUqDXwkKrTxXYpBFWQtD9Zj1Jhos3ThJaQniGs4zgz3RSX4sMPiXpUwwSn6us5vYT",
  "key16": "5uPM1rncsExcbeqoN299DBXtiRwfKnJiZ4HpSFz4J22MarDgt4SzANFEHmBTYUT5r69VMBVk7zFAsKcax3W5Dj4T",
  "key17": "dpHPepkkqJFE3mtHsAyBkYYBE9SGqABk6H7n6Cuq2cMTAN2N8SyqBR1ZN8hixif5qGWzeqswAAiw83bFyWoYqwJ",
  "key18": "8bUCzXvHAgUGDKurp8AGLiTn2SVY5apbRKEMK7hVPEfnPYK3twHYRV2KDCHUfZSPgobXFdAJaSNKTWRXrGcX2gN",
  "key19": "HXcb7tnHweDVDaUfWqEKvtFoP12gQoLkeNcoMQ3r38sKPbGpzhNm8xskzuPUqk6tKRfMMs3HosWDwS7LEaTFZmU",
  "key20": "3ikBVGkZLLvn1hGoQXxHQ6jfBN2fyQN3gzVnRR5tMX4UZB4vpFxjj9zkKQNJgnmXSANLRaknnvRSyrXxvxPpUeW1",
  "key21": "3md8RPUvFRLvsXratCqApiJkoJXNCQdqTLxxbu7QZSEnorQvtq7UrbFRwvReFUKZPzkvU8AycWJH4BjB3NnSqJ7q",
  "key22": "2MyUgdhFfoKtM8Az3U1gXZ6hUkXmQ1fuEiiPvk9xVryNZVz31QrfkJCPCAwbFerLvxScQKLEan77obZHeRWy7wyD",
  "key23": "5VJXfE9djF4ZJbiyNaGVNBfYqKNt6W1duKxeHrUA8ur1wSZknsFZqCgFDpCLCGbA6TbfjKfXydM7c3tUpXci1eNE",
  "key24": "EMgGUthR3odF2o6ZY8MUS63cajg7Vd9r3gbXss1xtPrrMBuoh1HdbKwvGzyhSaH4U2tFkGDMZfnxyrTdcucATmt",
  "key25": "3YVQtMXLKwurTkUfMmoKTEa9UaYBu6ESZe7fPUq5E2wX8fhLSQ5KAeg5EP1FNgvMhVgkSsk4qFHMGfJ9bUG1nxyo",
  "key26": "3YNxBFjDcEbuY1DkhWRMrQ19TGFpNYrcDcqbvQuV7YfPYJZqDxgJnDUqa2M6xCAnEsfizNcV5pnsYeBv6eTZoRkZ",
  "key27": "3StnGPFj1a3R9qgSCipkeiAw1tJWuJ7YKHyjwzRTXcggc4QUYAaSGfR4V34aB7HsYWpFob4TqaQQ4UPxwjpycMvk",
  "key28": "DN2cdtfhhnthXAf3zgWqoYqN9ekQzHkPrSkDP3cWSaqeZC5M4odc5Jz1eqsKYLgAGj3M3nwUC7KRBsFb6Jxufzz",
  "key29": "89E1iuf9ZaC5XMjmVVFktD8XX9c7ZHJxhnYVHmH9gXJisD8jkr9vSYDetPht9NQ6h5uywm1GTx1svWtkxGCgi27",
  "key30": "3vALZXQLEhoFvU6G6frsX5j7zvANBLZu7qYoHyX3dRyhmGUZbCjXQqHhXzD6xpgNRSRfxRvXzRJj8ngFfXFvF4DR",
  "key31": "kkrLNixhXJGG5MryDofePR6fbhdzv5UBBSCPxAkGnDd8cwxkpjHQWDYnzFJ5eyAmCh7vqyYUgDbB6EJFfnzSpb6",
  "key32": "3VGFeH9CAkmhhzhoXnCN4YuWkmUcQ5Rob9mXyfLr9duF5S6qCyvspe4yzwr6MNFmwgpuEnTZSr683n18XePrVHaJ"
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
