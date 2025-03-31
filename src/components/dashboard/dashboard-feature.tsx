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
    "559yttVQ6btdpxbXYyv2qtbB66MNz6XuH1xgYQ7hsd1z5MiM8z8mS3AVcanjDStZcWddAiWkNbmefvfyN2e6vYBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UvkkrMAh6yvPMReGJr1PBG1pTnRZNvuUSYK9nCWH2dHzBHL4mNAeC4w5HfaGi6m9K3Fqvs4MHUTmyBG9UpDiW2K",
  "key1": "1USyRFzh9Yc5CcKDuSy4wNbNfwutCCMCbjWxUKUZfqNiuiEYR8cZahpHKZeVcusBKFPPtSUQWQEZEd31i5yZmKA",
  "key2": "PXDfwPP46yBt53j2bNvMXRhCE7b3U7C5UdiF2v9yB3xzeGhkWJQaPrqrYTspQF19yq2mw13SK8WsXXZh7AWcU4v",
  "key3": "A9RgTTwCoykqszd78F3vFweePDGxkCffrJS4HuzCeH55Z94JVsn9C6eBnwgASD5AE6Dr8fD6UAmQLMXqN1y7t83",
  "key4": "4W7MzEZjRKcA1swMfKm2DeLYJus9rK8VYDj8WetPnsSQHtRjyo8aSfpqYoUSn2EnMGD3ds4HG4abwsbvZYEL7qnQ",
  "key5": "SuvMRMdb3fwmv5vM95m7qRDJchyYgkwRqqf1U9NV72PHWX8wj1Gqkd1jLne5h72ZKSNZ6zs9f5tTfA74bg5ES1n",
  "key6": "59qD7F6k7fbsqeEazaViRu73wJM5cDT15EcGwEJyM2ZbxFyPA7nSomghsFoUQDN7WD1b5BCTDcsRK5ngK7Dk94DC",
  "key7": "Jojf5TTFJZSvxjE9rw6tYkvk3YfoxVWvxyfbZYiEnYu8Eze5GT8dVFvBQGCS7sYmBHhjRxu5r2gWzj5R3LwZXfh",
  "key8": "yt6oYa1ySVNtXmCzNVvUMTjnTjqy6srj72aRWB2krgYqc5yhJW2Qc9RDVRM73pvoTeefTDnLQvtwc9yqbMiKfQb",
  "key9": "2yWJuFy3usZF5Jhgsy7rAGYcjm4Up5yfdnndhYsobfYjUhUZafhRDZDY6fHCarjiv9qofcJDcDqCvhx63SpVWfJj",
  "key10": "5fkcx7whQx87KumvaXuoVdSKALhQKXN5a1mB1HZQy12WSS3RmRsigsSfLgQzkaL8MN7SrYTW4RJj1kESMgQYdxW7",
  "key11": "3YcGkGtCLg4Tw71vRunEMxRr5Pi56i3aAY6qY6Z381YZHGdpVPsx8gWJMyuJuXgRUNLw2rzyLGdqzBRvyhadw6LL",
  "key12": "65VDT2fRxdqMydH5Ksumz37EAUdjcn8K5TXhCE3Z8VknbGdy5Vhe929Xqaanmy2NgfeizkfFX4tzdtURwx3tdwmd",
  "key13": "4CeTjXcJ8pHqJPjNtPf1KqEBUhejM4b5VLD5fJco6WE8wYJ8tLmoF6Drvj5xz3j4cqmrmh9JcXiRnRHVv7Xz3sVq",
  "key14": "5vLJRdZ3aSSUhVMWYVKL3oaxn2KvnUcsz8HCAyp1CU6CCkys6CmfTZcNFEC7Z9J2UNb3g61goZ6SRZD1bqsujGWa",
  "key15": "3Ji4ssvvczMJArUT2bkongryEbLmVmJG9n3uteLsqjQ1cQQcEpJyktD38D2RH5FmE4NCbFMKFCqL75NZAKH6YecY",
  "key16": "3jLwwTpsuZVqwjNueubciyLX9R9anVYDFnAa6SLWwjSPoBFHEDBYmjt1gdGBUTsfeqCMtbACpyFmdt6kiFoKmZmp",
  "key17": "SxTUqcBkNwu1Juxdf1QfbFZSqSadkccdkNQGoYNLqQ9LXhe5TNqfMgr3Hbfoq5ZiiyX5QJ4jHbHC9pqEE7ErUDz",
  "key18": "dKYCbX79k3AumeZjBCHHgAxgcdyc3E8epLwsdpbviAfnzkk1HqrvuCva8DH43vsVUsnECVKvzmGfJGRXH42TGZ8",
  "key19": "2369XKwxW1KvgWx6oP5ZiKN4CfgWVW1z7DRk3hNonC4JUT77GAyQuQ8E8ThhLzwd5uadUKLPwsZ65BwChSLjK4yp",
  "key20": "4LZV8TrBvGn3XU5pXawU3aLU6stpaSmLgsSKKbsQKeipufnk1HEzmYowRkGqkH9RP61qnxGJeqGFCL3gtHnxcMMD",
  "key21": "64W2j6cZAwf14hA8r3yDSiU2v9ZrWewgciBreo5NRHMGuQkHqrw4rThY7REE6dbjDkPnQFedQ6xhhavPBL9dNRFS",
  "key22": "3zPnTRtf2D2hh3EwMS7F26TXJWZGyv7KfiPN9ExPj63T1WiGEuZFV6jRdsqUnACdWL6NKFgYN4cKsm1p6dw64rFQ",
  "key23": "2FgdJtF7bnLRqgHkkkUWmBPU1tNatwbvAzmWvLXfiddJfYirzjT1GTJbmBEFxMVterBQ1JMeggZuTsvRxEgXmbU1",
  "key24": "3F1kJPZknpUyTkNWzfZqaTbtS2pJ2JMCEF6hQUtB3w6DJjcWBTe7J8p8iNP4Nxc6iFxYPEsr4zGVdRzKS9Uuk1m2",
  "key25": "4pSXAvDkKocZQYSky9j2x9GkdLKocj84sR3N4Q7zkW1f1oKTJH9DVgvptFVJyEbxDHMu7x6SCwG7EwNZLvJgoLMF",
  "key26": "5GCheKUX8mBoctSynbnMua17T9azejycNd7HUuxUoFMAg29czSHM8LqLdANBYwK9LuQ2NyKN8HfTJ3fo1osytSxC",
  "key27": "4U6frTXse4AbsRiHFrVfH3mnNMKJt4JQ7e8T2ivaTQ9Tqizozcts1ErHSTn3xrHK1G7vnen13D4VfkFxR3UZtij6",
  "key28": "517XKjKMvbchRw1boU4HjJJ8gj7ihTVDXgp3BtrzpY81rV9VVHeHSJYesFwfCuydHB5MfgAPgnuKF1WjcQSHki3y",
  "key29": "3WUuw1yLf7ujiZwEKb97REaSPF93AoKhcxZHE9P7LP3usavSmMiWJNPejUvioaX8bnkHeQ36d1pCXepEnwGKVvS",
  "key30": "5RJmtyz9qsS7MTFS9rfq15y5nfsprHwu7aG7v8GtCZ47275yQmUEhgUQhwuxRvCouzmJhz9KH8BB5tYouTxQd5NV",
  "key31": "4WG3KUbezEdNMr3vuhv2zQo9YbFcoWvpJnKze3AbBJ7rGZtNsX9VFTSKX5kEJ1EFebGUtQrNJcKbrfXV8uv425eW",
  "key32": "3QEFqA7mc1yy4Pepe5T1uUA4nb3zMArVb35nD7NpfacQnHrjovm9uhytGyth39CBUWchnjQiiegirL5ucKjHSieW",
  "key33": "2JoqcZgTyoex9iWwhVywxD44KZdBD2pvYM1KTrtRivKvyZwEPg4awRhT8n2HjjP2vQsDZEpT7xTCJuHMrw8v4pVw"
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
