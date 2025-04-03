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
    "4qa3FABNUkASWw2m289Ld3BWg2RoxL97HEavjC1kAfUCPU1nHJAFS8MmvXeT8rNNC6qQ2ET21KzAGG3o9UL3pDiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61eQSWVkK5YNHRu7VeuRvo4Xwfyg5VbL2fMue69natcHegHVVbthy6pnjXKL85H42HaSC9xnRCPj4zbdxczJTwwi",
  "key1": "29QFU7V1vjBFyTmbnQusUJvMWQ5YeB5mPgSrWQXVmi1JFnecm9udcXpRkjFKEusqsREvbvAcmPZXKcZYoch2wCCp",
  "key2": "4YEC1MXprzvW3sjcDgZK3zqwQfpoMhnzWT9FT58owBVio8Dz8gVhjape9J3kxErij6Zk89i49EtCnCMJydPnftof",
  "key3": "127ufpCQTQdBNQ3XNYCyKcMAzgULAt3XTzx8EH3MNJsmZ3pQJEXSapDyzYR7q3AGaoawQc2AZLidmQTTWeVRwuQ2",
  "key4": "256eMYFe7TGASFjy8VUMJqjHBPPQkN7eowxxYhxtwXpd67EuB9bpyFrQkqLRx4Lw2XQ47rQS4FJqiVQGkUGALpAc",
  "key5": "5t8uSLSzcdEkNe9zwPCDzt6bo3ceQpXRAVPh7pmz456aYspqGZTJQuK6CxBaLMUs7eZKYyVYwXEWafyoWuAWz8pT",
  "key6": "3wqLsBE7hXrmw3W824aob5nHXGHBccXxZ8znemM489Z1aLEKfzHspxh61ZuB1o9Avv6H2nEkoF2AGpacafKrTTPN",
  "key7": "5aW8RAZqqTfW6GwRrd3rGvY5eW53SJMmeXM7dKnYh8EBTX8Gf52FQeP4g3TWHFEBezBYsY6m2Dh7Sn7QzYouJt6z",
  "key8": "3RqHFmPwNaaiy7ccTH3jgaEBWfLaVKdnqCZaQtoyKKZRxJ2Fpje1Zh7eM8Y7rjWztch3roHMAW7uQhRSYrERepLD",
  "key9": "2fDEaFN6zHvrzDNsBah3veyhBsTWMXamAZZnYi6Sz9SKgWDvaSsf9QVRbG3UXTw1kSVLTZBVx39atSGSzMzED6eJ",
  "key10": "29wiMcXb8BRJq8MbVnqCDr74iMV1VtQ5vScUowb5JQtktw9S9RdA4N2CZv2C15abtRx863hUtzyVVZ3PKzFVKLy5",
  "key11": "2AT4cZ5i5vvWu4apyuyoqFaXuU5PnU6rZLBWKoPnaHtpAo2rxVjbn7EFnKCDYBatHLi1XZQRh1iiM23JUktueBPL",
  "key12": "3sho4mzjYh7Fj83h5U8JP1zZnCxi53xWWfa1cyq1TvrtjkJDnUGKz8jtWrtB2AchD4afnJaBdDptUtKEdTbauEMR",
  "key13": "28dSAhTm4D6wDygsBWeeVgUuemSdp29pa18spzLLMhNkhu9cbmPFKNwy3QzTwYeaP547DpaN9RefKsACz6aS56Xu",
  "key14": "21bU5keEecSRbb4C8umTv4SSj1oeDQ5ws6oF5gSSaWsRtjxvdNHGk2pwn6t99fDwE8Q6zyAVyLZRYTxJq3nmWAJj",
  "key15": "5nRHgviutANNUs6rUybUHKcYtLnT7AtKi4EQtCDCBhqhepZXASYDjnmmNuREbL5Jp6Ym4skm75UhuoEc24N34WS7",
  "key16": "5nkW7vcXaaP3UY59caMRpAJ5XUqc4yfxUHFU3NH2SdoVeuweiCUZ9KQBotnmxxcN2rt6pbvZhFhVdXhS6RCuAaka",
  "key17": "4qGHnaDmLg6TJjbbZBpzospZJ7JBVkRFteaBf7d8FN3H8nisNg2bQNq5GbJU92aE2FGnjCUW3QEgbvo2uYVDf8S3",
  "key18": "529sQVfKr8bZCVKixJ4jGeCpu6AiBcSVpyjsogC9qivuZadwm8HYqF4jYNdNX3jHdoDH2eBVVwjC1M59bZH6enxS",
  "key19": "32RWJxYLYkt9TcxjtNiGuxmdM8cTYFVbZJ8sZELTy6CgeNw3D3CodP3t4imZ8RdkhGoFRJAgCiyQmoRFMq1DLRuQ",
  "key20": "5Pr2RwUhRBrUjuYnSdTsKU2Me8YrycDHbPN5z9LPYzcmU2KinYjcbJZWUVySbBAxj5RPTpboDQo27WPQQQ8PjMDn",
  "key21": "jNMkcm4j7kV6QBxrsW2r6h2YX89rMEHcuVsHi11ViPENSh94f9JTpCqNtUNoGX9poSpZFXwqPjJ7DG8DXeJ5hoa",
  "key22": "66PryCh2ysmodMuTDrpHdwApm9dYggZ2Gywa8axXqjhf4KtVeiFdXbE5PSaZECwwFQzjvseJaXNagL3nnqVqiZF2",
  "key23": "5PQ2wvE3RoMF1zvXRjfEvoKZiLMJJfPZrUwrCWt88kpwRmaQmUDsBXR2SCwtAoPqGtiqHxRQb3fVGacbSGFZVh8E",
  "key24": "3T383rxHBdXGEp25dDmMPpd6SU9UKBv5kSW4uGVMwVqiytQVA7QhPjXyRiTenMQ4CrNo7uSmU6jCzz1ZpswjGomN",
  "key25": "5fAX3vpbC15aAd3awrJxYUSFjnfwaX29k97ovswUeXu7RyvScD9MsxQgeB6FpdUzVJusNde4R8okHtkZ6PVN5seq"
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
