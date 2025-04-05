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
    "33Xy7oVan9XP4UMMyk11VuustiSoMKSzmQhVTY9menFRio1PaePPis3njtUewmZFFKFqjha4RPUiJq5za6z4Q282"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UTdjao7cM2yshJ4svd1ixiDHs6k1t8EsbFB4V3DzXK8UVwJfHtLmnsJK7tNevY4px7hM1KZaVGRvzRyBPkbw1DD",
  "key1": "2f1Na1eYZDdHVUG54kBeAYEKw1MixEsxNrcHMKz4VjLCAjMbyZPH8WbDGabUSDWiLHB2LcpwCYhhtktL3BUeTr5h",
  "key2": "31H3a4Gd6c8Mss6sw86zeueaorPimrRKWojD4LmbCFdmiofBveDUag1WREKZLZN9rfUMReWZwAQ8K3U5NYVQFtkK",
  "key3": "4GXWkRSADCy2TtyA6YwHBtJzHAg83qvTx7GCMrsj6dfB4biQ2M7VfX1BSf7Fi2BsT9mogS8enVHHcdeeZFfM6mEm",
  "key4": "29MweYKhofEF8PRcdnSmvvGK2qWsD5qNjz38SkvAfXCxmz83HcJ4s87qKe9HdvwfEdqECNNcYGqs9nTsk2wmyjFN",
  "key5": "4KeFi4NX87oqo1Xq9ZxrbCH9qmNUdJSNWGZjemb6LPefCGWxsA18qydLq2MMqvFjC9DMMyPAyqLUDP1owBbwuHpv",
  "key6": "48qVQdYBHWxEHgP69Khj1aqpFwjJfQsUCXUxRQKn59rFHLWpCNKVQx3LfhyVthp6VkhBRj7PohZm23cqGrFSg6LW",
  "key7": "46rg5uqWgVaa7NMXNnLTupzrETSAZmHAsbK6YJMa9oXRkKseMo84XQoLf4fWvg5oQXiDsJtb7P2KkuaYYrqGASBo",
  "key8": "62c5bhtryQ9N3LDaNAGd7egkA8VNXfe6wKm2DgD4CtuX3dpHui9s6LXkBe2VCdaWaYCu9Vz42VHi6ugUYd4qXGNn",
  "key9": "2WCjfKMtn1SkcF2FAQTBE3n6zTLYFjcth6Rc43ZBNsPRYKkFaLSvPYu6sodXKGL65MSKEj7NWvTK1vVh3z5sF5Cp",
  "key10": "Wgt5HehKxKuJpL7RCsEYDdrmeRRWcfezSEcChpYRsstDyMj3aFkNCtuKGWLYQc7TnFVY8e7bSRzbkEwibUS8TtB",
  "key11": "2VqHNAG19UBnSCDghfGi3zKX99yqZBAwbT8Yp8ZwuXWWKBBRqPbXuF5exnJFcrggBK8p21VMjd9Vn48RxjBRuiJL",
  "key12": "WcB6hM1CQC98seuL6HY3JjECdKaqWGrJoRBY7UJJNMiLHvYqZn5XRDGxK4BuEhg2zYHw8yNHhKsdSJ74naEB2E8",
  "key13": "3qaY9ej9oHKhwCCnReUaC3ygNxdnFXAmVBaiVWiv6fMUeGWV8kQXKCccbz3z31i7zJ3V5gmhmbqA9MgDL9KNsnRT",
  "key14": "3TmpdFpLEgLMWZsG5icQj6XCUiiQjsUJe8DgZoPSB6xHVJ9TtWUrSXasCpKNvxvbCU2LZCs5SatVBPYR3cWYA6wq",
  "key15": "4MLZw9cHAgvpn81sgXyB7XwzEYSscyj6FiStVoSxZigcAdRvXA2w9guVLeNwyb1uJpMmBxCLEzWKS1i1M3aBMY3L",
  "key16": "3PdFkZjy9zoURc5E71QbPu8xqzGzEUMbd4HN4CmrFnoutB9wQNYMd7zVfgmEXukxjEVbAVtXzdDdWiGBKkdZ2CR8",
  "key17": "3PQM56zVhutoo7jb3gAQYMUn5KotmWSUW8F71JMKDa7yMASomMRpuKwpWZvBtKrncQmAFX7t9Gf6cVQ8WGkiyGHN",
  "key18": "SDGtYPzfZe8WLLp26c66XMVCiZrEJw7wRzhqBMkBrKYppNxfn81phKmuX33eBJxHKYPu452yv3AtWNmbtEz5Znv",
  "key19": "4hxU3wTrxwkZT5UpWgetNKPqz6t68PMzr6968ziU169sySR5swX5LUTZWNNjTzRAbzrsrdrRDFrx8shGWgVtxB9c",
  "key20": "9tntyp6imGJS5cC8nbKkTzv3VFdjHzB3uf2w9tvhbccfHauG2kH1obDdh1XvoHey2FTmoYCX7Ajsa7rjSyyN2uJ",
  "key21": "2RATvX8dUNuddDXuAsA98LqKyip1tmR9aNAdJbBfdDk8REbQdMH8TAP5wqcz484KybJ7FH1vzXb4E1pkMUWR2Zx7",
  "key22": "4UxvNYnvYRrGWaFeB2jhAmeXz1xJWL6fGW5YWE6HfudQSojKCryeVPhS3tnJKCa5jnEJs1iVrJzQJXNQ5xigzm2x",
  "key23": "53SNURSKbaRFevtJd6twtWdJGXrwF6w3Fdfa8PUSk5b1fDTrH24rkeDTG3ASzDQBRvKsjczzxWcheNFUWuMfyzDj",
  "key24": "cCpZ8bRxBCaBJQzzqshuaie8Jhd5jy939iQu8xwxWhYqVJowMnAwX3xzWMTVgyyxiUkaVvBcsyXEVKkvWkRDrZq",
  "key25": "8XpkF3DZz1ofQkDTbcjCKveMMgdGQ67inQcQ57jnkq39EME7angmnujvAKoBSLiQi724qXeFTp9tNYfGmpD1yd1",
  "key26": "296mkxm1FXdxKFCLRF3CW6fMEAFZu2CvBTSFDBMxZcsXU8kw4DzTs7Q4thgAv4NaZUkg8KJGHVBBCFbt8p7Fqi1b",
  "key27": "57yt5vYcpXV6ncp9R1pMVc6ra4uUnWniVman83zyHfCjd56hB3QdSAZ4LHhPkK4pASJbfL1A2e2JHtbKbicZc9R7",
  "key28": "4kW1JX2XvGD4tsqo5zqGxiMMpy6LXk7r5xnLHtSBWKVLB9V4DfdU3RbeHnHTV9T6BoMXzkodSYq4PcQc1bTCBjZK",
  "key29": "Kh7iXfarwDLoMntRe8H4acXvJJ66DrXcfpwt5gjjFSpJMA9XCkSJBkQA78PfM5eAEWS1FQKdhv27kiJYwfAeF4v",
  "key30": "2iUwaVcky4setDYisTpfP8b6y8wURTC1KkyXpVD8odwuviZuFvYaWRpVYu8j63WgokAeigZQdk8sHLsEYCcRuRyV",
  "key31": "4vijzSsdFG51xL6LWt6hPyF9BR1odR27fRvgTYAcMVwi1EyrdjEt2aWo24peGAJPpQ7Sm1jAQvAyUSJr9dqyrYY7",
  "key32": "4hFuguNVVYSmiKxcVTUAseksFiZBKnqPWVd7vDnFsbagRTpqGpYa1CSisAXTxA5aQkdTM7RfPmXGmvcZJ5SHKyZG",
  "key33": "4qBVNFzoVECxGkqBejtLkrF8z9ap8WGtbmBu2iP7rFzMc1YrHUZRSaUChbFeKdT47fRrTvojHMYFQMhtFeF9Sn3c"
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
