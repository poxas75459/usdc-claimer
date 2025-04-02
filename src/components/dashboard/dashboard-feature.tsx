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
    "2PWntqqxkRyoskcrUxQFJqyXavZZV3dHePjxFZHsq9pBQaK6cCURnZvCS1CwbbaRs1wCsQwq5H1BPA2x9RKGMCvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K4k9byDiVM7Pxwwsx2RpBTvXh8ZsnJXDbZr7FMTj4fhTciA8HAJGQ7FqQLZC6ggBFeoaJdLSySmL9xpjb8j6DBr",
  "key1": "61AyYqRDbEeqDN8RaD5r1G6AuR9yhX7EixLnMcGLJtsCNC2ZZRqQqUohgKtdvwmu9cooYbmmV4HLqQwy4QHDoDxP",
  "key2": "Kju5aMFNDMgw9JKi9dQWxRJNVUfiwoeiYL1XDzJ2nXyEhp8kmGLBw5y4oSQWMEzAcL9wC1ah3K6KcBjvWVpsFFV",
  "key3": "2jKqbiu6DvknbbT4961iCNkiquzKvwiuyVU5TLVPttc13oN8VPyQJcaiSodDVwjDt4igV14vqR6AcTYd5Jetciur",
  "key4": "4EHsRKzRpD7P8qUCM9cpcJ467KcjR2VWT4FAJV9j87Yva3Y85Q3UWmhSqd7QZ818kSVs3oWPQnmZPq23UySEohv9",
  "key5": "4G2sMJ3QcvpawgnfsdXzXvPSP668omgNyo3n3PG34TdXTcpK3DnEXPhvz6437sD8on11HEgy5PDSBJGEQqRYSLex",
  "key6": "mLN3TxULeu8QiPDZVWMaBmJxfd5gkMvRWCVfR1dRrFRFHcrVoRa32YyuRw4fhc3eKnZyJRER54aA4gP6K4CoffB",
  "key7": "2ko7HQPSSH8YnepoPWXE3g939ME1SreTGr8rcrP3v3yvTJ5YFVrg7jUChfcsf21xqxxTTpFXz1BcSrqXshJXB5wv",
  "key8": "4CTTMt95FD8s6EYRsinTQaQdAw5wCZpv9JiCJgGKAq2puieodc8fXwetYm9WZxk3kSfhmxCx9qy16LKsXsBBe7DU",
  "key9": "2BrUsf7UhoqPwrPxCoaTFKBiyYF51NNVXzD8b2JZZceEodDGw5oirt9ToQigbih7YKZMPLEqdiAVAoRGrKZS2p9P",
  "key10": "2og8Lg1KPxT5JQz9QM53hk6WvtQKkNcvL2VhJhC3QTGCVT33PfCShxTYM2uSuNagFaeMgNmBu3EMusMyzj7N7acC",
  "key11": "22KEkpXcaeBaPjLQ7TCvSczKCSZ84wmPYptkEZunG3gfpChBHArLfgoW5pCM2AxPcTko4jbENfd1oHALoGEp1FoF",
  "key12": "5NZhv1ekmqXyUKfziV3qo3Wmh6W7LafAVjB8D4XoE1fd3yyobcQp1L2bH6jAforhnPZe4o1YUTFUTNSqtpXh2w3U",
  "key13": "4s4pW4zmXQevXryDWFUcAFmCoHprNkb5Kax4o4HSgEeQvSUszTNfnwihZ14XiqupzbWpghXoS88DTmUjrrdWppwb",
  "key14": "opSkZ5GRRLvukxJHYBUg27taCEdgKqEJjN539sbGBvHSXfQQ5VcvQQecPXXdnrMFHLiuNMd2GbpqbuUNjaG6hdS",
  "key15": "5DcA3D4SwP4Hf1fu6hFD4aGqN8FShM7FoBkq36W5EjGfkmrwDgr55UdxoLMXqRDgm6wYWpweTJqGKVPqEZJyuhMw",
  "key16": "5UoXDeNwsyy7ATCDFqQZypp5K9H53TH7ZLMfXfZv6qgLEk4ysQtuBfsKBFZb1umwWwh77oXrHtTFMjxUQZD5xDqV",
  "key17": "28hHXBtkkjvF1Xf1eRjfFLPgmzHsng2V3quu3THzXSnQcorgPJRbSDBg1pkBsw32t3CU5WiVFFLRaGxoJJ7U1BkU",
  "key18": "33oqoQE1YPTtKa2Pdk43SnuqacpPFEdJqwKazeyz4xu6ZgNTftKQn39dycCsgHd7LFbv5ytjQrUPBJAMd8Esbchr",
  "key19": "4hnuS8WNkSke8pn9keaCwzE78hBHsJiUCVR2E9uirL1UctiF2ZBgCfqkWhzRRnJW93HD2QS9NwdJ6rhsxq31wp68",
  "key20": "5uGLYnVrpZsNPJbkhEdBHHFjwCuRta1QdZZJ5ThXszinAXpx7QsHptdycX6moWd4JRQiGZbVgQWmK5FYrp2wmLSm",
  "key21": "2CJHyDuh58dboX3QMVGFdeod44DYWYqpZ4PHrAHf2GBzB6xiikq3n6WR3PThsdoSAV7iz9sAKSdhUBQphqoByBn5",
  "key22": "3CVwvvv6Nr5fFhDHXEFE2i5AVyWCxxHhrDDuRBSU4S4vt8J7doNRZTCuDLwsaLory1jCH5nE6UqcYPhW2kyXPMXk",
  "key23": "3SmycAQcqxxHsrK2Tt5sELXSqRshjcRvGjKSq97Ro3QXoEMgA9ddccvRss768MqmocCVs9L47Hf3EfTuzzinDJsh",
  "key24": "3hTSNJgjHtYFWEAryQVNJvucm85yXn4ySYVvBa6o1k2EdMoZ3t3GK6QzgAJ39agkYNWByC36oh5ciWKtnhVmYMA7"
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
