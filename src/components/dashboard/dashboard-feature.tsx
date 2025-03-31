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
    "2B4pdiqEkTc1qdXF7QFora1ndQTMQCdiCZAXLfgpARw3aTzCQdxioc2ZRDg5xaGaonBJq2WZrrkBpFGZhX3DgEZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aVtixPZ8Ft1MSA6oVxP291GozEGD49h5w1GLatJPYe1dJ7kohxmWRDCNuq7M2eQraNN1cCLP4m4asu4f3d1ca8L",
  "key1": "3RovFvHy3g3MTUkFw21zRGThfx7zMXmsjYwc5HK2iTM8hNn5KLxLCHicYqWnsHppfJ594pkj4tJ9rHy6RyFAGZJc",
  "key2": "51oLH6gVcav1CpJ39yc8P95HzTJdrsLrVqj7jW2v83WURPtrvwPwGd277LtpcYeFsKvG8F1PS5aXjc2FmipL9T78",
  "key3": "3GJWC7CMJVxCYwsLGVHZCwXatkkngzEe5uAKRLxh5R1FzCREGV7EX7ah2Qi4bPAzXNPGvTbSTNZt4KfNs46Mds5c",
  "key4": "48Cpr6a6JQn3CJASrxzyNBHspgrF56jkNqrJR5cVNN4vSHRuaHxUGv6KSGGyx2658VBY7kVQ7Tz4jXomfRrnDoyg",
  "key5": "5T2t2iNcuGCPrMWp9DNBHHhiXCERXG9TZ5GtzRWngSzYsEJpTPomYrcBB3edYoj2bfq2pBRWvR3hRXnGCRhppiAV",
  "key6": "3wQTL4oLUPx5ysp2BrPbAzn6Lv2JdRKHxmfztXkFjNEvN1EezWkitbN7Xd9fWFE1pM6awbEbL3xyG6gFgBE6rMLU",
  "key7": "2btLj5kf5gc6Yh4jjGgW9CZ8b1oPNQmAyAHJBY3CD91y1Eg3MGwSi5t3evufs6donKUWoKbASY4xcyfrgeRNqWbQ",
  "key8": "5GHBeYtHbCBrGj9xs12J1Y7Y98mLKfwThdhZvqiGeduQNHs4FqbeYPvcUtQoLrb7U1K1fZx92Fo3RWxWa6XUpkAW",
  "key9": "2ivMEaMYKrtYFrRXHF3vHLxA51sWGBPk7wL27dmhjURHxQiFKQoqCsPYvaEeAKEeopRzAqLT9pAJeFKZgSn2bjtZ",
  "key10": "4qyXAJYkpdGZ4ruHvTQDvXgLCmzWKTwS5x2yLUwVQSLeLYC5aGxf3Asj3gL9yWs9Kaj2Fj7wLwof8Ky1374KmWQ1",
  "key11": "53KNqwZqosmQM8SVv4uHqYFFNQqwiih6Bo1B8rBSoHp7hEHgJ6cWV4JL5UZd847HWFSgvRDAvA8VKExkT3aFfcLn",
  "key12": "4QvgmqsQALgRXrNpJazcEJKF5gTvPJ6k4bTsQfwHdnzFsphbd8PP4NCJe7t34ExRhtNHCGrvc6avB5hdFNrfkK5u",
  "key13": "5jKA2PjXWy54UQBtQgeQKsuY5t6kw47QNSrRxHc8zsmaxtTLnHwiTU7BephBjpw2KyrnmAUn8g5BVeSsR4e6xFoQ",
  "key14": "39tgmVhEajBaRMv182RV4PraE5YEQccrSrLPt8HSBbmC9cPLpaCbQ7rTGRFohg6nFTJApLHQv7MTPJbGbzxpw1YX",
  "key15": "3767oVfu2BUCH6bhBjMoLbQDbxSvnKU2i3oSjnzPg6afCdTt7wZfZJpxvhHanej7TQZaAbWxtwb9SZ7kzrxD3WgV",
  "key16": "5ARSWUP2RCdW19PLRGPwFeuTGbc6mcT4r2XaBegnQNHVcejYdxGUzTssAehQPq4zEqsCcpDpyJEmcEVUxwj5rs51",
  "key17": "3oAq1WiYqYrX7vKasPprtmAJpTH5ovtKPsDwXjJgLYZH38ExyFDMxyz427huSd7PSKFPpHUojj8Mgypgf7bjswAM",
  "key18": "2kjmTZi832eFvhUymvdzRyGJPwNRqwPr7irmxRLmVT22TCCnnqwhvFsSb3uTADANCDFYDpNyPWZamnqYncwtWrkh",
  "key19": "5B4EREvcaViQ3EMovLZKXnk6yeybp8nU7mi61dRqvdhUebYwVxeiYqfomyNZzXczTHdKmGaxTBEFAgNCKvetawXe",
  "key20": "WmkQh38dRe46vVVSd3R8Tzox4gqNQGdimZcmwMpbAuvSasHJBgZmXdDu8vqfUMkk3Pjw2JhRNh9wAdYAp5yiUBS",
  "key21": "3ybopUAT4PLEjMtUPVttUfPmsmSPP9FWCSH2FpFBt1TQPqn4LvqLftNUq4kTHcovcib4HPG8BMEAw3DjraE77peA",
  "key22": "59zbyKJyejK5dAR945jvqukAHiMvGBPEzQwkvqj21qwnQxbLJfwXNUpWQW7rpF41tzrz6JV49VKynwbu6ZNAb7tM",
  "key23": "45DJbsLJgVs9PXpPHs6AU3mrBaWeRVfYy8Z4TTaqf3WUUJaPzbmzVF4ctejHDDoMHjVWeZxJfzg5UzhQkQXATVod",
  "key24": "4FjAfCruyoToztxnTGPMuCA7fPWP3U9zFx6h7DiKi2EtBseaLfK1xT83MToyfjSjSUupUiLocYzKTjXMEVQKzudX",
  "key25": "2RAxBoGpnVoGxEBwFHFMGWwJfvWmGYnkC4tNwdH5ueALpqSfBXjDrHXLTg8fGHkcEsVX2PUbeonyHHK6ut8RXYDf",
  "key26": "4QFF9isyPsdHCMUZzu4Gmm5bvF9szUqqHEwVw3noNFqResTmrRddo4Cv53ftztDnuG3JPs569jxM8KyPido8QUQS"
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
