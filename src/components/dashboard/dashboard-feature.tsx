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
    "66x2VGP1Ff1M5r7GQoxSTSNufSr4j9LCoYgtifaMGnzDEuasVb4LMLwbrsNW9epe7KWj7inLA3jAjHDeZMZ3ntse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9G6WgMbnZCiX8KcBLxxB7ki8NcBprcq8sUvNMjCyP4xmuRx7giC1BRHL3734QueL6A865BDXvkh2WzhHqaiNV5F",
  "key1": "5VFADJRr8WS8Yh1ensNYuzvME9xXyLnhUVcn76z6Yaocp7LD861z22b2NaUsutBM4LSgzdFBncm4iddSnLjQzL17",
  "key2": "4XSohxy2FJaz491zdiwGWEDEadgBih54Wp97NACbcNJzNNpytuA8rKzYhfyNVL86LRf5uPKjiRBQPkbTG2yV3VUw",
  "key3": "3ugZbTGssMNodd62hyZFgNfNwWHY6k7HZA3sJ3LYYbN4bfYxbgAYbdC5Ek5Yy6REUN6se4S1CzytvZ99r9YGhACo",
  "key4": "s4huN8vtpoyRjXTt6PKFDvAkAPhYPo3np9Wx56zqWXs5zH5o9NFj8EXm4jozZphHwzmhTtNTTqoBj9eees5EhAg",
  "key5": "26Hga5qrvJScjDmmwp5kVWmu9Df82uFqt9qvR4any5EZuieaRHe5bNxDVZ2Uac6avaH7Q8pxdduS115DgFEWfDU7",
  "key6": "2JuZW7oPw2qzVya4e7JfFhvQLKFTDdb9NjGX2yWegZSWdHxb9S22orYGG74eCr6skCFBTLAX4RmNPcPkfYE6LYba",
  "key7": "4d5YyjDHswzMFBbyakjZKqBRheocLZeKq8UgTUk3Tw4ZyJNKCjLVvnPpfFswjPuV77m8DWHtQAJEWD1vZfK67bUr",
  "key8": "2qy2AowXRPCSPAJBiBFL8SsP53Xc3sjAy298x6xjGNVFyTeufkUs4ntybyWS2iDR6sF1rCgMt442U1JJqA7YRbaT",
  "key9": "4bpFLExEsMMcPucWZzr6EdoBvYSNB1Vxz4auNPh9YZCFP7Uu5MfqVH6TAHsV3xdnR7JB95bzkcmbbxWLwyCXQL6i",
  "key10": "2Zu6ZNdVhQyyn4sWBcucoXFzYAdDCht2GjmyHWfZkcngTDRUb7KRwz5sZ93zKJepdwkf5TK1o5k3DFj1zmoaVqcj",
  "key11": "4AVjjWH5tZZJ8JpiN7p5tmMtY1nsWk7iy7TshDJYA2n3uSv5muesU3e36NUdbXmMR25hrTCSeHdi11z9Y7ab4xgJ",
  "key12": "29QQGq4d1YnMubvyAjzXboanQU48U3mhXXSbXHJwpSMmHiupsCZZCrN5uERwcQDH53pZWLjEHZGMa4J5qgfPpErk",
  "key13": "3CWbbgqWz57Dr4oo8ggEVBNkZmzDggjPdcJd8eQQvi2T2Aw6QrvDxeKitfWjBpLh5N3FxkPrzw5BnLVcfYuuRoTH",
  "key14": "3nf2XjTj1Y1Pktc5sGkizJ4C54FskFjh2hSgcbANkqUeBjiSbKoq7YVbicWz89yoKUSsgpVW5RMV76Way26wbFb6",
  "key15": "2HgWkuHZ7fZiaSsDbTnDPv6Jv6kuGMGDdULTAFLN36wSXCVwiDxaXS7esKPukME4cMGFDonr5ZmPkLdnvXkwKYpt",
  "key16": "2YTSRDAchu1iNbTWAbQ3Ly7BhrTR6v74qewRkyi9sNnkCyo7CjEEoRjNw7jC4hq9AgNqom6ko2KUgww6Rn97rJmz",
  "key17": "2eyTiEeYTYpajvMKiQ9di8vVvFcJQCDw8CKszadnUpmWBpaGFTaCZfTd6ooCHCELadYyCotkY8DmLesDSJ6oD1Cg",
  "key18": "R5H8zi9T7aVS8hqSJ3NURfPGm7jXQn4sNMz8HckhBc21tiHJWNMy5zv8e8tNYRHGPsWhjGdMjWSiEf1a4RdY8ip",
  "key19": "4ndcVi3yuk9oZuGAjoVwttMm7zFwq5kvGjCffaKk8P41Pjk5vf8ME7tP3PxKcKaEanNds8c1gxjtNEwrMaJtR4UA",
  "key20": "3WRAAqerbv7kqwPqmBpuLVv6r4nLgNY8TZpy74R3kkwVVkN8Yxh1fYg9hxTt8NjACYR8tswaama7VbgzV7caEVq7",
  "key21": "4pwoL2pS3nF74L83P4wSoBxKBT4vLMSoS8BdmFAJmcmgKzzhPof6BXa5m7Arm3DgMuy6EVW6an9tvdDSPVBGCGog",
  "key22": "5efeYBfnxHPR6ZV5DA5u8u9XxECNYx3kZqpA7hmmEWvMLTAMuYKYNaNYphi5BZqntEUrxGB5exedFQRePSzTLYa1",
  "key23": "3HePQeB6kGDxv9LHFMWnxVh2iD7rvu7nnkjRYRANnsz5tJNKYJMVydohme5JsojjNaaHHm77Le3wUAREQDv8hwuj",
  "key24": "SSPTfFRfTsvXzPvPQQZ2Y1AVTNEoRTKNMtT1Q8YS5Zp1P5b6fFv69pNj47iTUHxLHribqKaT2DRpKWaTGn7835h",
  "key25": "21b31HAYTnTNYCum3xRxNZddZ8BVEfAxYEQaDXdcGPzwaHZiuuCjgV5Ys9Zi8c3ZctVuXu34LeSB7Ug57BkswWWU",
  "key26": "t9bYdh16KixVJ8YX7Jpu6y4p8hvwvXFj7WLj6S1HGpCVF3wrZPZaoPcyZ7B9nMvEziPh9CKtv6MYCztRHkdeeFy",
  "key27": "3rXGA8JLjmCKE6oGLAQmKp5PVSxZcrMKzCi52cidCsrGrvCf6hhMknzhyfkpvxo5sJ4UsAU2i1a2FCmacYP5HEiD",
  "key28": "asc2JGRHbQR4QfutFKbjtLekZfDnc7sxfZzCcnHVhpeihb7Q7sYSETx8XJNLxHGQWt5jVQhc55G1iJeh5wA382S",
  "key29": "4APoPaCP2dvGHNyrFhn8utsgteAxVb1P7foh32gD838BiPUD9WRN6QYU2D6SNgLz9DsC3neR4CKMDs49qrZ3NwV7",
  "key30": "3R9cm5qLTh47Koe5DPn59ZB9ZjTpHmZoueSzLGNgNcds77yBJxHL6z3Vd7BoGBdS8r3xGBwq9qQziP16YbcEyVNd",
  "key31": "4DJvDdKHgXbkKV6PicTXZgifJ3GDL14caSUM4gcU4V4iVYDGjC9jQjCq5PitRtJ69LFHwKKJEHGDijuM6TEcfZKq",
  "key32": "2qiFovX2Z4GRZx7dFiEQkweqXsUxVrjN1pkKh9Ca3K5G37Rc6wkaGV7QhRQhyPAxxzyN4Nwfni8AV5UnDGZa1x9p",
  "key33": "5L6wJnozDTdimRqY2RXZTENuGTJTacwPpmmjQSh6KB5XPDSAoKu8541j3WW7WmFsmhtpuSkxLSQCz3bwWeJFevwb",
  "key34": "4DXtaQphscWqJRJ73GF6R5nwLBKA9EKwurStcGoQnkqUx9MnVG1b3LXMo8cFgAz1NrcdvtJBhtS5Tjp9eBN3EyAG"
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
