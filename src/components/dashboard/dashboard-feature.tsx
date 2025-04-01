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
    "Zh6ZnQhhM3tb4QdLMwuogjRY8HbcheZ3mXuak1FJ2mx3UqkHcAJXSB9LPhP7kYoZYASLTSXzxXrd3Mz56iav2bZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qgr3oGKYGJ4ZSHTy9pBQZHDZ43knivH5T3QyyfsyDrxkAsRrBpuxuForQWpyq4iaXzzYwsBuxAhVXqWRgwW3fpN",
  "key1": "6741A7WRLoC99dRNzdN7yc2PePvXdAb4UuSgg1r3sPXdduSEanDJtAtiiaA2tey4sY2CdJGzRy7fqjhwkyFts74N",
  "key2": "qHy9wE9HDGwaKX5YZeDKa5pfQEjtbJWGHzeHyszrPS83E121AoXeQ1Xi9ZeYYS2bMuLdx2gbEhtTLtbkuAxxodp",
  "key3": "5RdeqjWymW2zNxgMHxyYzky9QY6nRAfosMwT3uFggTS3w3AgvTFDfEGsX2BkK8G6H42Twpufb1QY7ZLMWNkGK9wi",
  "key4": "kiu3e1T5v94zJ6P39wH8z3oAFuBTyw1dFUjg3iPdUhdRoSC2ymsWCd2QMc8G2PanQGFqPAoDH4oQBACeFz3pmaN",
  "key5": "5C3LD161ugmiSW1d3jbPWuWECbzvPaHK69AV1XGfwd3Ek7n14P8AgNC3R6eUzt9XoSM88GWaZrZm5TrP4KYkYj5B",
  "key6": "4pqYVXAK4N9Y8RKBYMxXzMYNcUymAxaCg52vWqrqDjNskzgE17WwBHvqhDvFpjaVrFHiwPhiHnzPKc9B2MT21Qhj",
  "key7": "4E2KoDgcmny4zG1rWhZ39p8q6iUyZzcigKjZoGivZiRajfxzvP53txrz6WaMNveuyYyFuqfE87FRaRSupapRjRXF",
  "key8": "5a8tFQGnEsMT9EgpFsLKy3Q9iz547HSUriDouK3fkrt3ifNnK7vxhTgFRw9v3TpuJt4Sqf4iTgE8iDtfGyymsa3h",
  "key9": "nyGDxbWa4Kf6ddcSxHewiPC1nvCGTQ661Z2atfwFs5eEUpffuQwT7CUtbMEUqZ7XpDhkfCueC2sA27ZVETm37Mk",
  "key10": "9WYfYyfEwc2sKjW31zSQXtpqeJ9r7SpUn2zCFEWJFfd14zpX63ivRX1nHk4pNqbJao7Ch9igQn4w5R8DMVttyaE",
  "key11": "4t3ktgrz7dPfMCwvsTAwpbR4YhFcFnpUEE1EjhcCgreAqQwoRt66WYNPMcoTvjGwcK4yhvfD1Y1gdMXmkebYkCJc",
  "key12": "2H4SQVFaMM3DME1tRMU2Rxr3BN9EPeFeKrmUmAeQczJymdYW4PuiDn22KHBXyeQ5nuZKUwonx2EN2DDyB6ihR7qo",
  "key13": "34aNgHVpbpfq5RsbVNCFeTL2yGDWimmxgHXVJbz9tDENRM8HeKZVfmJpP3e33VFcAhqUK37aPUHp9vZDt97yFAv9",
  "key14": "2KKLUcZxDshx2UWzjemQ4Gd2fpUxsWUjJbdynp6DQ4uYVQXUcVxozfPxobMJFNZb8N5aE1vWwcoawJ9FvJhPzz4v",
  "key15": "5nSrrBsBZ1n8SHRhgju3moU9xCiVhQe2ZPfuCDVTSLdT2YfZuq4pKJAtQuANwp2NSrkdKziQBGYGHvtk9pRHNYEc",
  "key16": "YLJbKzmk1bzQf9ayt3AJJjg7NQN6TFPenVPGEouaFGmrDGoFXWk3XtX8jk7BqFczEWr4Yq5RiFB79mXezAaTTXn",
  "key17": "2iRaaUkBK4g8H1UcAAdaEEzgCCA8z1vDsgMpcJ1gaCmAsw3yghsJCXB24kRUN12YE6EypT44b2nEXvY1NTeiMEpa",
  "key18": "5kNLYB7sns2TCPFbdAFirZkvYKu1ETXnb9GYZhfFQoZrJpWapvciMGBNwb2vaPgtSoW8s3CvF8UDo7jiDaxzm5Tv",
  "key19": "2QBQV1CpeEQoZz7m68ps6rAa6voozwCEywox9Q98QrqbUQDNQVF1TXW33Q27BJVX9vWV95ciKLiKGFfHu8q1ycJy",
  "key20": "2sw17CnfYtNbvZHbJGo4bh5BoqzhTkppdCWctcKowQqnPoS7ENUftgEP57E4w1hZM5tqLF5pkeeCAyKjXr5JzxW5",
  "key21": "3uFBtxym1L8B3zPbMT67AW1QxwMoscC11Q7j3pmBpjvp2rnTXUrmvKAKmwUekL7gPHWmP8ZywzFcL7iZujLDPMjn",
  "key22": "3ZPpuNnR6yABu1XP94ypkCDtDKvh5XLMaXNjkxhbdiMSKAuB7nsTsboi2zZZ6RormmtHufkeiQRJdKtbWtog3gMQ",
  "key23": "54fNjrvfjYtfXSZSXwBu4UEcB8jFqbXmVke4WGkucKT2To7uYKN9HmKEJkV1Dtf9ENPRr7ievT6hj56ELBVTUEM7",
  "key24": "4RyVixUV9gD1Qd2x7r4Lg9CNV1BpvVAvSn15sH6SqmrAtmQmpmZGWmSUefRbnHSs5dhCL3Z22MKD4Lxi9ChBn9wu",
  "key25": "3EwfHjssamZHaTFXQp8efmvc61xirMEsKy4dGA57ru5FAPc84rnYba6BNqJANVzYeJB5VkqXfcSzF9gPspA9w8ip",
  "key26": "61bBD8NgsodqjxV6nfQFKKHWKW8bdCpAPyafMMTW2cQusNSbjhiWkZ3xfo8eu1go9gRcnxoqoeHbVuhNcPmYKNx3",
  "key27": "281WByFkNPWcFqbJnftzGaFszPLX34BZdkceLPEt3EnbFVsRedeQQ2rffRgTNp3WVmvrKB1Fv6ChMErHrfJZymL9",
  "key28": "3HRHu3nipALgcE812tpHsJqptXFXV3hhJDnvwnGCdmMs1VqeSms9JdPzsg1xfjkmVK629gSAMThou4wCnCVZ1TVr",
  "key29": "4hCBMZ7ZP4YFmrzCRxA9aigpujfohKSSnRNNWTvwBtweYRKskKiUGFr8k4BgutwHNy84p9nen3nkHpiJthGK7Tgd",
  "key30": "2oeC5xTFikaTdJ4EsVvcJUwhrXtryL17Jn7WCA8BVSWtAz8CgCZzvWJtri7N3qe75ThixAk9ncGpurYVzZ4spV5B",
  "key31": "5anCpnccDrePYpaeBKLGsBQEs7nDPHeV9iZiY9JtJ9BPAWB6v3vf8CNhmzjyMQQtNJ4WJoH5XHxCq4YaUzJ9LYSv"
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
