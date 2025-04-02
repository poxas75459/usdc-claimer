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
    "29TEo7gAzHx56XiYUQ8ES41MZj7RfUvkW3oJD53ofn71XHyMSLMymUWunanivZdzEHnLPaZt1gQhS6tTPKf4Vx1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XNtLRVeqi7zBuYEbWn2FnijVRiY95x6Vi9uaFQ39A8m4nyJEsb8wDjEFTkh7Fw1XQVfWJxu23VkGijNHvLDB3ot",
  "key1": "4KW7ovdraXzKTUmQzvtCv9h2T8M411CNweu7v93c6yYwJyioUL3xrxpjk9vjsGbP8QViTAmzrkoCPdFQUpo23QxH",
  "key2": "ZBfr9Waed9tHVTb6HhLN1u63cJU8iUD4xnXjKo3AHa7KeCmDtVhZKzGoN3AodbzAd86gRQEHPeBpY1xArx17S41",
  "key3": "4JTktj5AwPtKZZrY3wJ6ZWpmPj6VsbHsPYx1ARBg7nx3Ahr12ksomAqpRNmDeycNzDdE2rVeA9RrmMFTp7GkCUUC",
  "key4": "4BwZWQHv3n4noQopJbcZCzTWGzMbKPPvGdbLFcQwiETnotH6g7N64n4cqVMed6tnfQiwgDhStxkfuRgUkKrZhX5a",
  "key5": "4YLXKbP46vrcx93YvMnxcG62twjhh4wLKv8ZPeYocAXcR42gXxMv7hiihHoSDnkNDsqpDGbUUfeFQFk1TXFhBBkM",
  "key6": "4QPgwg92258vE4GXWC5TfZpTjnibzssNhC2ikJ6cAAhrL64ziw8wdo94JjjWMuUCtisT333kqCJb64inHeNsyoVJ",
  "key7": "5MxFwNH8n1P2s3iYZZ5WUmQCRnmQsCazLHV7qKHgM9doMNKNsPHGFFLJ7kb9R8kU5q2mBTnDBGKyoPL9vt55hLNX",
  "key8": "3jwGz9yzZJiLDYH1Tvj1AA5jdDfk3XbJ3JNVw99znL5ALYj62QsM4t1mmGFpWUXfwQRPGAxQ846hFgea6Rk2EUMt",
  "key9": "2ZoRPMozxjEL4VkYFcgEgtPRsGYbNpMJwfWikujU31Pp25amfgBf71up9NYN4R9rwHviXbcm69iWfpXiQCiqCqK",
  "key10": "66kCThUsbc6ZgbDKxmpHQRryWx1Kgdeizuvy1mKj28G3FPCx95yPfCjogRu2RN3qbcmXy7fhGhrsJKMNwJrh8ANv",
  "key11": "VVGf265hsrm4Jyd4mKKMjaZFtE25tWwxvkgdpcZdUtCz3xBojFqb8nApMuNnd9GHVA16ZvyhoTKTaYRoKBqRafx",
  "key12": "4AKtUCRQa3i18e2BieAdi5MwiT9yPDmArz2MqMYV51XemfyNJeB5h7m9XRPDxsL2Y3sVg5cRYb6cgbKkBobxGFKz",
  "key13": "3F2BBhPYBiSrd9TMvH7MHDTNPKMqz3k1vAPmw1ZSWr8Sh1DT837bKBoW8WtgZoXP3Ep3FYqHLTm9KeqDEj4irbJw",
  "key14": "64dNhGio3rcf4AErFzBsnNLpRAtbd9K5HyxE4berF9aLScLoUaUosvh1mwdLaRp8CWKggZgExRQtAS3qaQw9puLa",
  "key15": "ijvyEZXMF28WSASSFabPdL3vimwmXeRpEvrh8BMjWwx39M8hfMBKiuWwmn4xpgEy5Uyck6ab8x31fRJzr1TU2V7",
  "key16": "27k4N8qer2CA66iwpnGKqdzPTogFTS35NaJPLd5385x4zd7eLJDYuxZwJN5aJZzb8ZRG3LEWXBbtPmTk4DjCsBmB",
  "key17": "wck8ZSntLj29isDdjy1XzjRmP5tyszz1GUHcUzvfpJDrm2oZD4R8JJsRa83fCN2XeZAkZenrHkMiRzAkkc7NaAs",
  "key18": "2FK5rJaqMuSyvFciXUDF8xK3PAWKo5mhkU7EzaYgsmU9CaBD5AAS8ENRF3p7d8kC5E71LfkRXANvNnUF5fK7n6kz",
  "key19": "2NCZbuWauP1D4GakibyrcxHhk5qe1pwqm9ipFhR5gZ7ndBtchVVE1rrENaBAZU91YUmq2ru5wnsjQqxbx276jfHo",
  "key20": "UcJ4Z5CEpnk5BPa6WjxzDSceRRqdUFMheGqh5B1jdL3d6wBi4HU23RwkBLSmpnkjS3TuGa9RzCawoV3joFWF6Ma",
  "key21": "4kiHCKLcEjwDAcAZsUWzgrKbJmW1hCxx9SzzSjR3HVz3mXNdPLgcPguWk2XFomhXSTN9rAmYzGnJEkcranwuHn1j",
  "key22": "2JcvPmte8sxMj183Tr2jhNS5GACassnwgDaCmKTr1KqwE3VVMkugMjUAUqAFSQzCNEzVEQS8MVfcD1Y1e2GHLq4c",
  "key23": "5jNFJbuTnmfoRabFgDhHsZB8ZPRvdLxWZDuz3kCrkn1aT1XNqBZrxG8VY381uEExDi8VBEuPa3zAtFt3PqC9vbWd",
  "key24": "4XybBxrMWaQHUbox6ZXJNAYtq8EKsExrTLqevYq5csMtUMC7JfUySe94QTDwWbJQ6kDRNtiZpk2gtMQZUb4xmtuG",
  "key25": "23fHTTY8nCxvhFfxNQDfHiaiWwiPuriZP2hLA8YW85GPoMCzBt2bvgHnVC1SPZvfDPQY3jR4TC2beTNBUMmTRUk9",
  "key26": "UCEb2jYX49iTGJfTeU8GcNK35zis5xYJVB7MwAKQ7XyRbdDEJmFv3p9qQ98zk4UkNsPxvFUVf3AUAgx9eFJUBbH"
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
