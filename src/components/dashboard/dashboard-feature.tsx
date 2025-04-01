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
    "5ejmVSTN7x4eEnVedcMxhGXd3fickLUtjvAehfJ6r9K2yPMbPVFhaDxFSXEaK39YE5NYmyu3kUFJWkTxgxKjZQxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4juUqnSHqZ6nLgoFdZDXTiQFcBR6A9HdmHrvgi4XohQBfBXArm9UijaFVD2KfRZeFmA1SvVegV27TYafDEPEzZ77",
  "key1": "4Rdpy275cZDDAnhjqA8p2mdz4suDZ2zNpQHfF1naHH4zeMv7sKWuCKi3vjJg4AzqkgyPCjVifpr2yAMucRhwqN1",
  "key2": "3JeRi3oabQM2ikKMwUeZDq4m659xqy5QiJmJhrFXQ9obSs2Q3DRqYeEXGNvJpU3SKxcwEVWEWA5BWc6hF4pNLZsZ",
  "key3": "3rvbaL16H7wP3DRFuKRkGLd4ZV4p6rLrfmtosscAANiCdMHdAGMxY5vs3sSMEtX1JH9fADXiXAxeBBCGVYkCm7QA",
  "key4": "24g7i9W7GYtARkGxHukvjWCTrFZKqvPSRPWa5hEWtx8QwwY9vWeW2Rc6ceGM65TRZYUTtYKZxKu5syH6pqxXQc7H",
  "key5": "3vf7jwgo3wX3YTAsFS8kJSNoCqTQfoH94WZRg3ynrYYSYTGwWpW5SoUppMXVKdKzaXQEAoRiZnAM8kjy3xiWpxEo",
  "key6": "5w85Xa1RfHDzPQzmYMisKQtdxsf1CaJGyvE2oTaXnV7SozxtrYSnwmJcSGmz8166N3C6hXTXyFyMs9HtbhvsrCf",
  "key7": "JGbpHsQVR7uaHnCCRPx1Nkwp8genef3i91erkEtmLKTS75K1nQkL7bEJw4sjghyaLmW3RTYgR8XDxJsWdMFNMMp",
  "key8": "4BoNroP3mNzKS3KrWCf2fegQgGhSkhjk7YQfRakqHhJPRYqApeDQmFT7xxKU3Vgqd5tfBd9sUJE18TJLKgesiTbf",
  "key9": "3BdGoDGtXSqfD126Fe846Lc9ZMfd6ov4FBhhvCHNy3Jr4S315FbWWdg9zFiySQVh77Dt5ZvyHh9CY29KwMTBYmsC",
  "key10": "2ZEmdTBTx5CkT9epu3qQy3wTEmjDtfYpX2TZDxEXHtBzE5RQRbc2YDwoXaEWMARiwz5Y8UAAzVXsQkPXm5e3dpft",
  "key11": "475wFdaTGKv4iKvYZNMeWDM5jrxFTUnJEji7DvEf3kSqh9vCVqVvvzuHqvrh1W84WTig6BVwxLkdNwyAooQ1rtNT",
  "key12": "3cfoFKf7oy4N15UPnJuFKhhFofEjM1nUPvwmofkdun9GxMTvo1whfvY8Jx5nQcVd2VDF9z8f93ESVYgwmzkNWDeV",
  "key13": "529GB9HvxkTnA7hGrejQfEVs4U4aBRYnHXz77kLBS74WKwKdJdpFLdoB7hVwY573CX94XHLUZayjKBWWPV69B2wW",
  "key14": "5d68wcwtRtH2mXTg74MHKSBPJ27bENtmaW6XNcYb6ChVuKUhMr5bgoDCpsYstyNEh9ktzrBbajZK2kCWjxTnjpzQ",
  "key15": "5wfa33qhSc6EEbBw4r6qBadBKLAXKME3ycBxb464BZ83BV6XC8nJSN2AJZFAdv3vieRG65QhJ5byeF8SHKkWeXkd",
  "key16": "2icjQnSxH1Uyd8S7iQP7eetTTg5gdQKLtoDJiMGNBeR4bndeUkd7rgfkGbC5Zzoq6MbxxGrYmPM8PzhB81AiiG2d",
  "key17": "366tZfveQ5abHPqExGUuQjgNoVuNufKsqedqQXZDbCJz9jhyYe4CaV143gMMtr7tgver7RhE9C24KxiAp1Phz1MJ",
  "key18": "3hCHeHRb69TLmGBhzYU346Kc7eAvRALJLTV3sfyPtLxVwdz5RSrfUnhejZxZrKxkE37awEaoUCZQcKKhL2i5PsNy",
  "key19": "2YYbuHkggUgW2uGNw3pz5K6b4Xu6ifc1uskAy8yW5JXeAffwLe6cDRhsV46V9ueGsjtPCakAhF8dAZiPfzqs7khJ",
  "key20": "orfhXJP4nL7YT12Lr9sDTVqoYUsNntgHCJcgMZ3BhfQQbtJ1qhXH2PXDjgftEvpkYYXT6uqThgoByStoyUJfjg3",
  "key21": "4vEHH6Q2Nt2hVBNdwJS4beX9eY62zEHgukk2CeiZFpV15P2PMdEbS5L9ZdPY3rspMNrcxX6bA1nqe1vsGUVNjxVt",
  "key22": "2pA4erywiJsyf8Kwkrk5iA2nx1WjKCyiXYzs8Ea5eHkjVP9zbziddn63rC8PaKXCADUEdASppvmJ59XtSKbcYJFj",
  "key23": "4cWxS8Fe9cE7UECwmZKLALR2NVzUw2TsjwHY5dhx4tfAa3AZPw3UVtBnsUT3NtCfKwyZLouFxmMuXWc8FsCnjc1m",
  "key24": "5L1LXBFSrs7RiCWCivsAtejgmxrTaQHReEYKuwPuq6H6RYjh2CFzTZb1NGJdHU8kZUGF9ahLV4JEUqHvCJmWd1Si",
  "key25": "228sCoCN3aUjW9iCDvPz1F636db8TQST75cpi8WxDJmMMDfvQvExECA9Wi7eDjPWSziK75k7s3wJ8a91ui1aS2jL",
  "key26": "e4CMHmRNG7QTejeQHLBdnAMzeX6rGPkTugxzhfJsMdrLYWEbvBYLcA9rD1r2m9sNNBYtzQuu17eEy7sK63ddGZq",
  "key27": "2N5AXvndmnJ3e1P7W4Ky3irjwoGMGzhjgrNSbW6rZXpzA3CPVS7GREo44rbfg3Mx6AHZEgx3e9cZGSE2VXUMVHiQ",
  "key28": "4jXo17yZB8tRPoYogWXZCjdXAqnFqEyxW4hpoEjjWjUpsSZQS7tR4J83YciWr2f788ArxjMUB7Fbshn6tg3GiqeV",
  "key29": "2GxuKdj3pMPbP2EMzu2abqQbgRwepcLmZfdeQVdibr5zrXiN756DYbDWEyYjphrxLHVHrdELFbNwFr47Jtdvvhr7",
  "key30": "5oQG36Vam7PSwgPHJBaBfjWmqPXtdViGKYvqqt7tWqjyGgT1MAwSJULfikDiUDoZTYDdfZb8QJGgzvz77H9Divfm",
  "key31": "2fgcSHAqa5TgJ6zXLvK7YJ75qRGPL1k8WKy1THAjRY1Gkuhvoozrwa27JmygzPAcV6Wsqpor3jWSSFtg5msNRwY9",
  "key32": "UfnfQxo31NCsjYfBdytvGw5QjA8EdMDPbU7obCTVwUwYnfgZ2xkaco4mfrfBM9h2QukgpNWDtLHp5mYPoY3qWj4",
  "key33": "56ta923vhpzC15piBekRdCbChqf9nhrYhKeo3SFw9t2M8aUDBwJhSEmc477ZoCqXNhE2g8Bps27KjJLrRLTSBJgR",
  "key34": "4Dd4EJXvVSaQGpCcb7pCJg4nAjATxu1Bq3L8BGHkPBMmMKcovS3y7B3iT7ZqZAx5f4JaJxvQffXgkprwiWMcHUQo",
  "key35": "2kaAwauknasvy39L1shGhyqCRoqdZYSAGafCLAiGx6LHBabGQYUkS2Pb9oDgDFFDgBPzMVF58GjqZWWSjG75yUic",
  "key36": "2btcTeFEswuGvbRQJnJHmL5ua9i6RwY3ZDrLVHghaNrKCmKg4gvQmnAvEg4CcadvMVQoTY2Pka5hrC1GCiSL7Jab",
  "key37": "2VMogkJH5GTL4rdDTgeJe6d7vtYuRyrVZAHD3GQ87FS8MegVez9jTLz3bTHWEUmy2SPazTBLDoiUVmv548JxgVwD",
  "key38": "34KhbxPwkaJoHMayUgHH5nwMgWB99NJZKkVBCr76AXKWQVpDkcMAgkux1U6VM1BEGYhvM6g76qFdXWRoiJfjEBbV",
  "key39": "2HBirGX2pcVUMyGLSkomXbRdZ81kgfnFqVgN5rAaDADfftFBTCaKCEmCQZQXNCdLoXEpFMJRP1RzQphed9KMzA8t",
  "key40": "4eo54ESpGfoG56JJYNwXT98RHyW9F3xbrRM1PFZ5BinaG3MoknybmvUBeXgsjkFKmZ9KMFDNyWoHgEt3NVzMrtXF",
  "key41": "2tt5c8rPhFJbW4Tx7uAoKSMNLHrhCNGz56zH7CYyQtAZd7gqNBKKqwpP4MtgfFHhj8LoBywetdz5U7w4FBV85zhH",
  "key42": "45Gre5V6scc7o8m2DwQkrnBJqWREB2E4WjUD96aj2M8JtAGGa3tC99F8thnERTjEoWmWU2VNJmPzmnH74Bo2t4tU",
  "key43": "Nw81ezzfmQXaYwQSQbKb8wMuZugDNNtPkz3anspsPh99ehLLPL2ofcbFQzYkHs9VzM5gwYenkM7rj4H89tsu35J",
  "key44": "3CVc3r5d1qpx8ru7TDcJFRdNTj6QEYbYoGVvLiBsbJA5ZesKK6pLxRM6TccmxQH96CXqSmXCNpAshWXzJyr3fMbk",
  "key45": "4TDYoY4KCEzs9bUS9YUyebsrFjNSFecfVi5PqarWHXUTpLGUK7GYF7y64ZzyEsLtWmjPBciYLjvRsCuALHLmzxvK",
  "key46": "2MRvBAwbco79VEb6qQStiKb81CqaoEPdNi4edvDWLRkaj9TJqzLbyKgqSJdj69vYNjGfAU8kSAe9d7diA3BKshk6",
  "key47": "61amTMmRfGPL1YtPJi4BTgMjL9jCTxGtQ6yreGGVcdXdX3R7vFxfFK4Ah4yh6eDnPssXLpHmE6qN8N68cydbFcFq",
  "key48": "48umd5qgqM1GHnmWQoRC2E1sD4LTvRLSRNsgvJHKpvm2NbVVmHK3SXsDEVcd3Aw8MVB1gWahHnA4rb2HWv2SH3W4"
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
