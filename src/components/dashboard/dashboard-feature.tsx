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
    "5Jzq87ZKMx2oi1iZC5TLAEHeBsw2T1isEBpvsto4Uv5WpD7fBnjeHMmm29gnAqpngs6B5udBo3Abpns6w89vcrMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JCiq7c17ia36DW6ULAHCUPjoEmXyaakJZqNq5dgBH32sV3EUyh5126iF98DdSEb1xux5sdKVZLYLSEJyhD1Ap54",
  "key1": "4qpqMcRRgoAoqJgb94SnRQHqYd71u9tnzVUaFHCYMfQEytT7piR6ixWRitRvCx9QJgamv2YikPbB6m1Umhcy4eSV",
  "key2": "5MRfBWzuVvqARzMiSKjT4hx2Xj1f8cK9Ta8pC9EcaA3YG6DYKWencq1UvXGfuDihBYLgXdJp9VWtmuSNqRtsFZ5G",
  "key3": "2tMckjkDh3FjdarBuBrxgQ7xrzoF4YntsJq674gZjftiJHS9kZ5NX3PrDsAwLexdyFbhgpdwrDAqW7yQAXfWenM3",
  "key4": "3H7NTRBxi2S5wYtDR9bh3K79m5AMJRYM9D9zcgAv9dTttEnHTt9HRxGuNpGCVYbvcEHmvQPEgXZ6jWUJHAczYB6H",
  "key5": "4BRW5cKnhqXxTH3g8AitxL4xzPFMYXJm5QfbFZghXd52ca45WkR9Xofn6t2dyEauzQATaNMNHvrS2ocj1xxn1VB3",
  "key6": "2erUcUZhfBL7vc8ssXSwh1PvzZqP1AqA1DzzBJo9VHqLEMUJfZnVd3Az7DwfXcRbGcX4jpaSSkSLbSD16SkMV2j3",
  "key7": "3LcfWQjSCoqKzorZz6AP8to2rpXwziYxeSvmww8pE9xqNtAt2wYVdNG3MJpNNqkJEctKVW9CckY6zWHEuYZjEPgP",
  "key8": "4wh5ZSJq8ufZhbEE7NqnKdQm239ZnCPnK7p9zozfYVGNqE5SXXDRVyzJcTGvjYvtq9wcUnnjAopeC5TV7QSu23fj",
  "key9": "4x8i93s168uEHrc6nMQ8yj1vGpuxpATCAiNdwzqTejhGG71gtWYyXnWropmCGdccWgDGVkoBQz5Ht7nn37JrmL7w",
  "key10": "4T3xGxBiPEiFdMmSbDRDHvre6PzQBRy6a5qtX129EnKLaC168PUapyY252cyjnL8D6zzAGcrAjF7RVhU4adZ6dQH",
  "key11": "4tRMxiw6nv77WMnrZeTqgJbvwiYgsc1w21DjRD3VhkjUrZYk9j9b6kiwSEisxHEB7y9cxKX4cdqztJYaiYUJbg4L",
  "key12": "5feznAxaocKT7MtrFjPa8C49EKsFSzZoBMfffGzzVNydHrG81qG27z1LxH3MfuDzmfbRuHk6azaZq2tTwmkNQfvy",
  "key13": "3DHKzzbpWou4WkD2QCRXTUM8VLLG9TZ3S5tdtZBr1KxmAM3KsfahitnK69sVMgbg6h1uMsxPZEH3M3uyeFyxxy2B",
  "key14": "577oMyRYXZjDipjjzPmxV4oXBHqgV6ycoqzVNU8am7XnyjgkEtiTisbVTnU857fQYZfGtB9XLC387ip24nXAbVv",
  "key15": "KnAVKTgQicBLP5SmfqAYxadnjHrGB7oAjnSeieGvgRthhVhBfwupJB6pVwM5Cg7s3FhaAa4DwpZRGPQNg2QgsKb",
  "key16": "rdhV2o4YB8ztk6E5yso6vxDN9xi6tbtjFdntQAYpF39mzPJavUudr7NwLajenTRKuCTC46giNNHRNfG6cyJf6Qa",
  "key17": "4AcETLyETfz54DyhqakhJvm64i73zjf7uzMPNkdE1YaDkRRGt6rsBAfUgDG3udt1QNgYVkB9P8MuK2fWXSJanA2s",
  "key18": "4PWrV2oG6iw7Q8khh1dV8YSFTmsQ1gWzJJt8XCHDywdMdwmbo3nXLZMTU6JGwGvapDQoKkTLHuKsM9dY4G4ZZtps",
  "key19": "5V5zg395R3MZ8NbovSSZrMT3WjJwtHxCMjkfKJzYQXBLm56NX9f3F9KBjiJj3MskAZsPfvzS8HgSmmet8CHnHFYt",
  "key20": "nhChRnGm5bbTqVXUF8JAnXWT6y1DPLnDkqgWsEcueWoz5V28hMvkXvG7EmnTmkSKwh6EaVFibDXZC1J4BArqSK5",
  "key21": "5r4ACgN5z3rmDxQ8i4YLa7KxHjDevPDYYz8HyxciKaKit6HAEXwLzKBvbrkpAvbNEsV2jGLhM5dfJMkTUPexyzig",
  "key22": "nfVygjndvAkRtszDTTkQMpbZrgod5n9P9sz3D5ThdX4FoDRFHd5jNixvhSVJxHoXPg8zPxMqNnmTCAYwEpsZPNw",
  "key23": "5pdx83oRtMQmkdXStNajujB3LgxhTvhxnV693kmGt5UJKUpiDWeEmRa9XtyzXKW1KAC2YnYLjVNpfGzJSR8bUbnH",
  "key24": "66RVphwHisG5e8m1L5N4c2tEdfgMEiQ85PuSQUmZ4AHSrBHCAZihkfnXgS31GrDTq3iBgZo9YLaFJaEkiHDkngZB"
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
