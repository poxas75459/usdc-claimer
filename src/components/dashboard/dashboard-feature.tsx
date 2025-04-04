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
    "hsTaAcDcEXiTnbYAHZybvqas9iKU2uvQmAcbozDmnwxb4HApRpuyNSnF8oFZ1MQHU8EiCUyKwvaRVdWMfquHjUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UqrHBoTRQ9z2L6RJJqxUocEupSGnve3v4BqwM7LfBscxLqkgwLGDo3LqH5Ht52yR5uHe15HNf9dzkqMWVAmLuBD",
  "key1": "4pqwtgxspz4h5r4ShJDPhw23XtedLvTeQU5KLdk9qQNM52BQG6AyrKcRXaWoyjSQzwedyM2Zrvk19q9p5WFyn7U5",
  "key2": "tAEa1u1sXJV1z5TCeVomMJgNF1xiuPDogcDYyoeGTVKHWqfvCACkg4jXYPggSQBa2x7jDAwJfWXMhus35qa7fPb",
  "key3": "n9VYEYqo9UpVinr1rKkutYqyvXMBsfi5V1mFPTAXfPSWBEEK3o6qkk3uEUgTm73L4utQVdQoyaUh2WCmubaFLaN",
  "key4": "CuaEdscmbG3HGm5VhpZQoFNfqGuijGiRhaa1GUfuGi82qR778513Sf8BKCQtPM7A3NoF4vKnkkJ1Ao49E4ZCqQr",
  "key5": "DNwzJR8Hfspu31GqiG3AfBxk5HFGyZcmJHsy8BtXG4yZzMbtStEscfwHygafq7RtmXCK1RBdZrdH9QBbpudSCGm",
  "key6": "4twkgvtAiu9PXrwCACM9KLUMHt4KNUzBJaHRLyKByUsUCAwGG1TkoqAqwHa2QeED865HJ9sQELFUehdJLmCYWf6G",
  "key7": "owghjrcYbHHnckfBzhHCkf6YD4TMDRcstVweeYVFZrbLeBC8ASHKWKPQNdqnD3EQev8kBfcCSBaezq1iQ9pu1kj",
  "key8": "5qzf4ecj6TYu3T5CuKmuRgdJL2uByvRur6hHgtYi3xBk2RhpG8i7UZoQqFqu8zYarKfBKPeumu6TSPnqMy9na4A1",
  "key9": "jvpsmjfG85vwrzBm4Uh6P3ecS4UcaiQHJ6k8xEKaKSbi4XHv4L8tnRqU3vU2dp7bt4GNtz7HV7WrnWXn44bSwAP",
  "key10": "2JSdo5gBeXjYFW8zA7DNvRfRMQQiTkLXcPMGJkZ8FezTh78MLcdsKqH4sMCUPXsDWEAGNf1ECAdHT92w8q2HzoeN",
  "key11": "24bCNzZXqSuKVp5wjQRPU4Q5VEKAjZ6k2KBtVHFuha2QppWjN14Q6y5eGQNd5kp8w46yPsB5CNZgSS9H5KXAzdiA",
  "key12": "3ofgpMq5rq1hJeLaBNYWfrR5T5XdsLogrKeoz9HeJK1d6PYpQMhhWNDCyjZaxCNFmnbmryaoTSB8zSco9Zdp6z2N",
  "key13": "5dLpn3JiyeKwikEkGBz43LJYo9aiyrYenS9j2vzsC6pq3tiDzoTZMCvsnq7wU9J6LKCSZKatx86jZ1KjDAJjNE8w",
  "key14": "4Ry88kHx9m38honuN9k4cE17o1DoJUiNHnz5zPWqa8wcb7PRzrAvLQmf9Kr1XvbmEoJ1NcT1GSLAFhXQjqMedTtB",
  "key15": "YxtoE1HvBzZKQmNuWEE7XEBs3ZzXkR8sLZWHHXEoW8Y3VcFzd73FBGNdoHDt39wQLfRdZYoMLfxsdfo1WKUFfXN",
  "key16": "5gwwehhS8YWAFpb4kKAY1FPjYpX1fiFJx2nWGUYAXUrK4hTfAFmUyZu9DtJgApXpMQTAM7a6WYKaKZMs6H3Ct4YP",
  "key17": "mjQGvbNdiLKemvDNfJjQHJ71Bxpb92hHj1XZEuoCEytLkkXCx2NFM3gu4gVs5hKBmW3JMo3e8yUj8RFjau9aU91",
  "key18": "5QhEYeHJE58FLYVSQiq1TD6HvXg5XujheHniHpN4ZcWGZv3fTeB2DKTxbMxKDnqmVis54aCu2244Kq1CbxXUKaQj",
  "key19": "41ZUnmcFJMZk1fZWnE11K8ET8V4S9gJ1PLW3ZU5KaUVCd1nNG1YE3NtRTpkU8M6g4MwVpvy8h6Y67YZrMyKBggHX",
  "key20": "5P9r4zbxV4FtVY1SDXX9RwKNwM2M9bTrFTbg7vafqWaLfeeCuF8ivAg64scnT6jM8kKKLqkY9Fmymm4kaEtXdgww",
  "key21": "3CZQtp114vvU9AyYpsWKpXBzY41LjYUuNCiQHLruUSunkvLZgQuG9XkRmjC5r3WEUPsmvznjC7NJsALV7KUHGNGq",
  "key22": "DtpaNaMiHzDurrtvTheJBQyvShi7cK954Yf97uoSVTVNs8xGBTnAKBtRw9hHm5yoHdjDyMhFhdexM84ijZLJmHr",
  "key23": "2qQvDkYE5r3frnzB5UFXZuKrRi44bv2iNUKyo84gnAYNTQRJKwpsMmHu3ciYUMLRcnbPSFhvCNLjwuuxSzNY7xzB",
  "key24": "XD9QDAPhrfdrxxEkjrmPo2MV5e3W9cQSGnsQ1itD7Zxg3wY34LvWHaNWX5AVTWTLb49PzHVA5wKBdH7PbTep2mv"
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
