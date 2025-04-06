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
    "3qbr3XuwajmQHApkVYcPpNXGYvD5kCUgGbRyJsiDum3mh5iV8hkSFY6Goi1tqdNoiXCD6fjjoPzbc2xYcsRw1m6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nGimCGVVeJ8cxGCAKGHswegbmPEvNjNJKpAjifyYLssvRwS5BbsbYQuyuiKyGeQnmgXZS7U3gob7tcGwYWBQrKa",
  "key1": "2tQp6W3ezL8jvJezxY2tVcGoD8ThgfeA93gep5F7nswbcYfepfbwgEmoUWNcSAD75Xm67RDN1buEWZz5UDpFhP9f",
  "key2": "3vfyvGvkinaDPNLhXLB6ou7j8RZeKVSyNjhWBKumS6JqxdP54v9icz7q88EUzyKPhdKHVjnZMVyuPoXDwwqGEiry",
  "key3": "422i8TcNZjYXtYJRHc8GrH68RCuVstxBX9kpopoi7BeeKPVqc8Mh7JY9tDffRAqbni4d4df73LBFNiGomVafEXHb",
  "key4": "23ZNQ3dJt6q5Exp1kzQ3mEp3gMxsMM3FzAeKEAYD1aiMFSuMe7Q4PmvwcW4f9FWG4Kn7JmEvruyJePSJ2jx5Ut7x",
  "key5": "3zpEXaRSCiYr256CW5eFY7a91Ygpusqs7CfR6847dN9g9Ttd1cuFQMfrWaWkjeejhEXubrBrq5WASeaFiCzGuCaK",
  "key6": "2nUdSUTdydFdtFeQTtQ8daG2fABmdfw1fksd5EEBzze9SwH9nFmQecnw6v2aGW55u6k4aKZdn16kaTXvXRoaYsH1",
  "key7": "3fSwH1Tjxa7m519YRf6jGB7LJy6K71rGwXmsmKvJVcx6kMgwKLyraXtiT3K3iSVVS7UHTw7nNVM6pE36v493SD7U",
  "key8": "5W76JyWX87iyjUJVbrBdEF4PsL2rRb7Kedke5vq47tuCG19tMWPzpWhqVuV7f4Et5MJL6JcErYLk6PCpoNYFVmtW",
  "key9": "63baWggQ64U2wv5eUJLspq8UqeSkdjQfrWosQArXgRsBkEf6xUWQEeW323vhKQm5DEmcYZc4RoNj8fAmqLJEimgL",
  "key10": "4wHn43ccZnKqPmakQ1uwdGQPoaWg6dUsRdfetaaPGd4WcYq8qGNYoteXVxYoGuXbE1CzSUf21gRVE8CMB9sN4Gyf",
  "key11": "4Pg8MYZqNP6E4GUvesrwbMRt6cUx6jZUuTBAGoTdu8jcN4J6jWRRNQHxVV5QxxaUR9ZbLoY98d3AWJHWt41AHbph",
  "key12": "Shp3WgNU8hN1Lkk57E5iRVsaL4YzApEic8jqNzhrWs4V1HbKRHBWLaws1WTV9DMayzvxDcjcDznhp4bfKbW1U1z",
  "key13": "2vHPU2Qu7dszqFYNfLyRvRYfy8htkdfZGF87LTwA8hnCRvX4ynz5z4hakjpzSfxLu1tPdK7SgaYt4U4KdJbt3jto",
  "key14": "5JDE8ZjCENGW2nkcm8mQUdMw9mNNb1NMRpUGF3rXgaXzXqYzTMZFktg8s17iFtGdhNeAhzdNpJ8pGzJNFF1z683V",
  "key15": "36SZLBcRLBYouXn4HuqpVWuwNT84sfcnp6tFzrf7yPNwKafQNWAybKkqbR21uiQCnMkcS1HHpFHKqtUw3FciFrV1",
  "key16": "kYKNTyjyqV4RyXDywT1QeAP5i5X3XGnHrNL2UWb3TCD4hiNuPz5xMEhJYyKp3HG3AP6Ad1AMSVfL17Eg3ZtH11R",
  "key17": "2ZYoE96G6smeERyELQfXFQiYHm3ZkkA44QkPKDKxUPvH2dYR9UDjgTbjQn7GkHW26X1hg7jrvSJcpGGrRToPuVoA",
  "key18": "PBQMQXiy77DCyH5NsP8zLqMZcZHCTYUkEaB9MrAvGPvgw82zthESoVyeunEiSLSy8zgdvgfECTn6kVqCr1MZmHa",
  "key19": "5kZ3zsiXNCHuaaAnCxiHZ4HGtXmdvZDUZKvkyiUqXn6om5wdsMSz6eCF2JvGszmUXCXVA7EiiV1wSJjBWJWeJvwd",
  "key20": "4wdbLBkNXynBo3ipuFAcEGFEoVAtKe6fwd7f6xrmoSKbDLsymCGwQUioaoxrXvZ8ARJt3CPX9dndeJ2yiGkBBGJq",
  "key21": "2Ms42dYFAmkPCHjNKd3QhXGxGLqE99wLEL6nCro8bDAEKVPHFyVGJYphFAkB9YFMSDt6k1NoghCexaH98uYbcxgY",
  "key22": "5wv4WqYqdM2DZWB2ma8dmLhKfHGwozDtexcj6T7DQUEsdNjmYmHpggY9g7GxwGaRi7jqQ9umFebnseabwgQfqjaw",
  "key23": "5HK3gdTLCL6NQcqyT8ir5NsjdSjsc47Cpx3dtRbgsX5rJe5XtAeSX8UwuBd6SG6enJrKD9TEhf7NMehTpU4ErVHb",
  "key24": "35yUmQqUJu8mfQEkGN6BkUySGh14EMbty4hzwGgnYA41wizEXjbUk46yWsn8X7RwfL7hrwGLStRZaEkF9MjbtBoW",
  "key25": "PKAciKZ1hdv3xwGtk16QBNfmLVNhf9MuggYd3VrXLUjPdcnB2a8Uo3HwDh5nkgqsEGwcktYcm8g8pwPcsXFVdzc",
  "key26": "2mqLjGHgZbWJjj9JUi8zr6bdfEoBbFmbch7H59yk4PthXYuhp7NGsN8zKKbPTE6NQ3VgcLsbn6D7T11zbL5JAXct",
  "key27": "v3w3VBTtA4dbJFov8wWeiaBuci9C5t6Tqyx4ksUFm46f2Ec6MeYcXvkycVs3DEnGQukg7scAgtnF7QnpXHghbV2",
  "key28": "2XkuMFoWqxrFWEVve7j8qJ9qr4FJmYdBkVX1kgJZ1Q8tXE2dGMNPLgj3Bo66b1aWpaAUeMKoSwqUzE9uCykvRXqj",
  "key29": "5ST9mBc6PPwxjLmLux8EZ65heEH55QJDPTAQDR6UcZDn8JQoanEHF4b9DnUt6M5ZW6bJmmRyhxXHzjao6mjGcqGV",
  "key30": "2rS4dpg5128uj8GBBDXDfvYQpm7B38EbYyZsR3HfxFjW6yTyki1cnSajvpBWRPYAYifRZzaxqShnKoJoXHGBWBjK",
  "key31": "4jdC68qGvyKwffp3bDcpAG9NimFb2wJR684PKWwPXKoS4u4invk1DHLSVoQe6k4TpVsZ76Sy2rkRBn9kry7tc15R",
  "key32": "5Prur8qMSuSAvSBziyesvDsbsrZ3P8vQPy9jtAZvAuRfu1uFyGVCR25Gm5hp4mXAcQcUGAxMBvN7nXxHyQvUHtdj",
  "key33": "4NqxJEiuV6A1B3BCdkegSrBX9tzzrauN5RhxXhQGdzuUTW28HZcqKTo1ReSEAezQLETPkgWuDEMLU25Ephd8aZ12",
  "key34": "48xw5H982KnaCAYZ7MLYMejUbrtRrYXZbuzx77h7PQ1VqEXt8KvTV8rX55dvKkQ6wTdUbon2poVuvWbHJNn7a5pn",
  "key35": "4qtMJC7J6A2ASp3byodTSSjusjgsoyJG3gV4zb8VkWsHNHo66n4U6SdLvTU7dv3QMwkH2sTXE5UZs8Sr3X2wLpQy",
  "key36": "2qefpVwNiaE5ujEYgNqhSZWgj42pSW1iHkUCF4YUvQG7jowwdNDapCD7au7ivmEvMhq521ju7hNpszyNwDereAFY",
  "key37": "3yQ4vVfm7Za3wPXSVhKC1GHinyJ175tfcJx4nsk2eYzcVBsRv43ry8gHZdJqR4E49iz6yfoBDXHuRyTkfhNn2iV3",
  "key38": "4d4k2CkUsGW7eETr26yNUiv9Chk1JEw9q5wycom1Bxe6E2rc1hcyVYd9QcNZpmweUup2o2CVFAaYeDJAZsYSZHuy"
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
