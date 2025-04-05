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
    "5BCoYq7139yBcVFAMvpH2pmnQCyiw2bs8SkjCBSvKg6U9n3rQ2fwZiR6Fnb7nyz4GDk1fSgJjukiZNr15kLCABQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZvtUfyw1jHFHcg6pZZ1p6ipvEyaC5dhsiVabQWh4tKRGGfPSVqZUFTV9cmZP7rN9VUzRkVzZyHh8JHBWmrXfffK",
  "key1": "4hD4jERFZzUJ2cQkGmKQyia6gYcNNp1WNDZkYsWDd2xHcKkqZbeDRBGTefjyjpMz2KH11RswY7wnkdsbLh91jtcV",
  "key2": "4yhbbhxWVxK4YQf2wg8471c3B4kDd7qrPwJAEPxp5ijaagL3oPpJ1GBTA4srnBDdzzvf9uDi7LZchygRhuN6vwgg",
  "key3": "35CmaFVjsfeGJtCSkjGdJmSw6iRvjyLgLe6FsRXE2VFQrgGvo5mZ5kZMuVoaRuDAEaDCY6XC8MmWMuuYqtDvoiRd",
  "key4": "7VxFtvVMATcNwAzqZbufZ4MsBJwqLgHZyDUnWYQqyyUZzXNTN9Pvd1uzaNB8RBsLHrCi9s9HppkbDDD8yxb7Q91",
  "key5": "5Ax4yY3tbyXeK6rhfXK49zUi1BgGpPX7ndYDBg2prXBNYkuFKgHfK3GEx5LAionQRXWGEVuwoyiZuWs7PTx5cegF",
  "key6": "5VvEWwJJQTUgR8D254YzYhHf2iWzMydQbHg8PRgnvPRuVE7QxRV3CLTtfeifTUjMLFYX3NsEinarZrFNrretvDnS",
  "key7": "2oi4S96NmwdpdfPqL8bqVH69akXgyBJmhLyJ4hVopwymsMS3Uf9HepZndDLpEq8n7HF4HFWXhFWMQBpjV21mztgR",
  "key8": "2KJw2mh3BPp3HDHLTFjqsmDuugxXgXzLYD1ECxSJutVg7GPetpchRvMShusTD485yvP9k3aeJtPwHsQD2mCw32KU",
  "key9": "4goAGTcQGmrJ4Z8JwLFFQYVifoAnUxtFXQSAh1Sgz1NkCcXzMhSxbPUT657aXFeu4BDdgGHzfYn5X6Gay2fQ1tEn",
  "key10": "CaXuYQakKSP7HPL871fi5da7ycDWW8QCos6Ufb45jo3YWkCHs4FqkFY57ddJiokEt6SvHLSec6WYsUBG1nmAWUs",
  "key11": "2jh57NF1anht2gb4MUSGgy7Huiab94LnE4NXsKf9FKaNZzg5nTdM18koGBqVXA6D3ixtNebQeFJS3ZMEfM5ecRkK",
  "key12": "4N6hLm1GM3tTh5FYZstibBeo9oPPdB3D4yJsoj2aQBXN9T2MQjye2mpwgtj4WSoBRk7tZ3jyazvsQ89mShCdSioD",
  "key13": "3zH8c46sgVDs6dCWdQtsAQ97jnWjFTL3UohSZPKentjtwzwzute1Q9vKv8uBo25zmNvSRhyfnYmri9ohTxyhV4YU",
  "key14": "5eMFzWY9wMmqH1DvPsE4zNo31B6uTnCDFZzB9KrS1Sszdofoe73QQrBU47N6hSQzNnLo7seQNEZVxxJBhneANmep",
  "key15": "2oHte69W7R7YKQnswqStGRRcmpNdkmxJsLh9nJqDpKSXt7nt3Fk3wz1SUjqMWHSAXDGzRdK5JarWSEWwyZGDkTFW",
  "key16": "2S5GP1FLfdbafbQss2FyaAHHQzt2qXE2VRCgnvB78jbUpJq1cFmm64V4tW3B2EYonC3MKYky7uqKtvApJpJiqHNM",
  "key17": "5v6TSHvdfVkc3hVhzoamaW4YomndmTHMGN4eTqyeuQesRJQV97UJkPyLVmuyqUqJNLKtS4m5YVLmLyiPmYgGeTK9",
  "key18": "64dSf9uLKWcpXnTtBn2RuH5jGf3dky5gqEMmH7XSMUSZf27A1WJMCzQtBuight92ZNamJhkdm2Rn4VGX79xEzBKd",
  "key19": "4MeN5mwn9kqQTS3dzoymMmaEr6nnz6Yh4aS5EksomkC4JtMKnqvQHEZHcjAWYNgW3rNUD1v9mnWfcCFZswPZc3WE",
  "key20": "328SeVETBQXDUfPeh425rV9nN4r2ARY2oewvMYzKDcdiwoKd1WpMWyzjJuKnuBcWetp1PhbWtEMbqcFKEy7WmgGw",
  "key21": "4mfa7sKsEHPciXzkSYV24NLZQkQGrh1ajGeG2diEi4ubLBdJuToJvSBVfPYB8E8KeeBRW7x7thcquJSJJ9u4zXjR",
  "key22": "ztmM3n1VSvqwZ1QSdNbLkggzqnBP1muuu6otgCvU9Ms7wq21bufEhCYaCHadFa8MjBiRXnzjvfP8QejsycSy92F",
  "key23": "3CkqUnwfT4ic2idfJfx6iH1TD5i8cavEMoA71mtWpKSdf4BHvh6bBaehT5TH43xPDBYycaBRYsLztBkcRLhpvvb9",
  "key24": "qyMCdCJ9DHuurBjnrSSWNdmZ6g7QP6zry5eLPjSsLj4cL8JgEMbiq446hZr1KBCXq8Zh8yG6mjNWxtXT23z6t5U",
  "key25": "4ZqhDzXSGRU56PMubkjHnYYAEc7subUWcJcApGNF37yhAoTG3t2HV6MKAN7RUF65fAqigVMHeveWi3MzvBpVHK2h",
  "key26": "52L63Ub91SfjdupQ6dhxfJSCRa62LgdymvCaST2WLdYZSmvKCas8p4aVsuaouhzAMrHPEtVE7Qnb1Hz6wSdjNb1q",
  "key27": "PXe1HhtU4PSdYzFtnUnCibD5ZrkgH484Npn9hyfBgVE35i4eoWq4qff33NwH4WzNUP9jcKrDuwpVXGgpGVibNHW",
  "key28": "3DksRPMjBcMJwVwesQ2ECNEvM3nHen8MRvCEffat13rccvAkbKu668k9qGGm2Rgp6Jzv3Hoz4ZLprW2mFNYLBFLP",
  "key29": "5zxf1WL1DU26pQY9moXMUdJ2mXG8TmG11txcpWvYXFYt97oYZSQhiSv4ef4xMiruJZayefh5zN9sLRFaRZc5Qsbw",
  "key30": "5puomd94qi1WCQYJRtUgh2fhmvc6eM4yCfrKU1BZyECvAk6HiEv2KuYepMbCwD6QBEE5FNwdkn6CNXy5LYzeSmgv",
  "key31": "4oWGx5AiqyGT2BQgrtxmDNdCwepqHdYn9RsxdFPPViZp2yAkjpdxwXshbyaS2BzrDDGYrNVT9JN27A33nxwUHTc1",
  "key32": "49Hx4zNaTK92iTdVc2XNqwaPyGguWXvQ22hhDJZaQ6mpNtaDUFtBtGC5u3gWH6qerTMQeMcHPjq9pP3te8tnt73f",
  "key33": "2UeyaTMa38XUV25Uvvkc1yNzybeyUpFxX6q2fPsB4d9NcLv2SV2PFDraWr66JHD8XjYBRGFz25ZXtX6z8yyxytW7"
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
