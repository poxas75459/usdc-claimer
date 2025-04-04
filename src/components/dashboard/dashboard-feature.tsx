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
    "27KyS1bPhLuVeJyPD3nwa6kXeyADMMix2C4fuqWsGKdWb5V2eSurHygFXRnaXG43EwGgX8kYJfg7inJ1zJo7NFZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X4QgYme7mi7ey4oqB6tGXZc3x7jCpxuQMMHrSJUPy5wnKKBeobaTudV3rJyRq3Jiw7vVDTeHgUTFeRghe9Bzs6x",
  "key1": "3wEyWMuKky1czmFWumKuC6i7sY57qumHWNmYsvUtAtzBh6Mb4SbNdBV6G7kZur8ngmVhMYsdVTCiQKqT6FRtquN8",
  "key2": "3RZ42UTSjGRW46DsK243m68i5vWYHrG7o5YnqPKYbK2fvfdGtKcQqSY1Dc2YfUVVZhLAeisqaFat4NNdgKfHmgpS",
  "key3": "3X93m8mQMaYX8equmJNGffTHdx3FLs5qD1ESQvSvBwTdT8nf7GHeQhdiuBLocjsVUKhJQXsTDTwFHTFw7XK4cF8j",
  "key4": "2UUyZwuTAmjYfTkbU8ohtpPe5RVXgjp2n7CPRPuQErmfjHC6HeWqTZFc3naZjaiM9VKBTZUV59gtKj9DXeqAE4fT",
  "key5": "4UHnTkrDBYxRay7AjVS2fi1JVrU4o53FfHsvMsGgYCxvrMw2QPMy72hK55dw2cmBMUFWEzhDiUVTJPJx5vDpkS7s",
  "key6": "3n3whxG4GWgcK4Uy4dg7APnxqusK3eobRGrLqzYXU96eUP2DHbKhLCC7MUaZwtFQLJ9owQE92gRNHWTi4G2R6kjz",
  "key7": "H6T9JLDbZRaC44UQuHY1Tvu6f1bCHiWkLBoAw18s4kwAdqEyQcLpqp1rbKaT8KcMiq4VAEsctupfbsiZnnjpwqR",
  "key8": "YaHgesvUduWK4Vk2TQ2vZMsogRdVVvR9cHYeWB83qw9V8d8u7qJ8nj62inM7Gh4TEtRwP8ZaJPwXTqnXAhcyW67",
  "key9": "2zP4uUDQNm78uKRnZhw7SYJGmRiZU82DW62UYYG2yciGotWVRkdXQLnmJKfHvoidBreGp6hf7McJ2cuHqRzafWC2",
  "key10": "3JjaigKPgxbjG4ZtRasur8pnrExyuGQUYdCbkk8UVtvbhH8Ea2prxuA2B4mmbghWxLjcSaQwUioL4KDvGZEgsw1V",
  "key11": "2Pog9SEnayBvW1d2T1o4VS3xN1P1uUmtLcqQDjxQGZBghJvYs1fCKTdDkWyU7zbgFsLUrfCFnGgJFwouxEmgBStd",
  "key12": "qeMQztd7TB1Hh4Jt2Z7A3jLV7RDNXeSWHiEYNWBg2pdtUR9nC9uQpBZcKLJFjuJUKq6Fm642VideR54h464Kbn3",
  "key13": "2NQyykfyuayMWnz8spAGjKDL1dSymEfDvyNQFSobNzi1QPF3VB1VbxfUtzUja3vWYxAboZZZ56mPcakCh9vzQEuy",
  "key14": "Jj5pGXNnzwEDquXoYJghiTpysyq13c8snRBjDdjY2aaZuCjDKHLm5FR8Lw68PW54g9rYdNEWVbbGZH8GMZZNWhT",
  "key15": "uZubqvGnmGuJLxRsLzkWvVA5d33ciN4px5hWYDcJARBj6bpcsCFx9nc9hp4PtrFHs8oN9pb3qmqYew6mFxQSrRG",
  "key16": "2gDAcin4VJoTtQT3Ck12durkxV1LPZadfKVEnbwPAS2hMF5DVUdULhesdFMSpDhc9kBM3U6PFbSjQ39TiNTLb7v6",
  "key17": "66L1mc7hWjwjhQrHoTDF315GTGBHJa3TfBieSGEQZPLPm3bt3XByb3xWDWJGVNbP3CYAmSi86dzBtBHMyNQQ2gAV",
  "key18": "2NvrvcL8MYKNsTnbPTy9krphtrEqL4dUpp6d6Kq7iCY22UUdwvt1MgkD9vgjmuV7BTNkrV7h3ZFyDbzqsTjvPoAS",
  "key19": "2BUqyBtcftu4k5st5kgVydRiRS4XtaNVBTBEHMBhLU2yDqeXz9hz8KaKqnMvBtauy3BPpQs6gwTyrYH6UwxDNG21",
  "key20": "41C2oXPL544YoY7Aj6uW77hw71wJx1N239XT5QjR79fc9Dn5dwkCeXFZQN6in6kvRXmJ7LT5Y9PVGvEMqALbwvRM",
  "key21": "3vyLxScRSvxFqe85Nano4eiL71E6enwAN5Bh9mbEhNNZjATB7zSawtqQZVRVWozq68tnqAS6mhbEdXymxLQLnxXP",
  "key22": "42my1vbYkhgLbUpSQpepELywT6zVoZ7A4wYDpEDQLXppGEuU8YHyYgMsMGB3DRrGVUNuHfSLNdWhWhFeNzxQLPW7",
  "key23": "5k9ZMXHTSoW3YPbKGYAEWWQFrpnuW1tQQB7EgQdrD8B48HuN6jEE5HaCc27MWdc56DkLARuPsLAwC4Rt4NBWjm66",
  "key24": "3NDSp8nysPw4ftAnfTPCq8c6qU7vPueQzDTdCvegZrGmsbsk1CR5u88U3A3z3uehH7qoa2LZ9hoBPtit5NhMHfAy",
  "key25": "2YsjCpy47XRB4bpnbDXgHey5eZR3aHHdXjDUTFPWGpo65MFH1bvvjo9uegmwEYxsZEzji4aSsdNZxdXYjentHrzs",
  "key26": "4LMAH3HcbC2BgMo1C2bgpAHZbqzeSRPHvABrVots1V9SE36tbLfzvQp7hCy6xTcMC9EwY3CDCRk5JKdZwPKRmyFz",
  "key27": "rEpk7F39r8vqgL6MCpJWmgogmCtp34YBmYRfggXE77aj4stKpJE5dS8cNrCVnnhnrB1f79MxgK8StLSFC2wdoSq",
  "key28": "5xpSuVrjRNPBmzJirwnxyDwRwbxUSZjERnJe1BF7CUXQpnjVsZqT2xPA57QtcZYwedUYbS5Mj5tV17UJNMn76xQi",
  "key29": "52NR2GNxAbsLJcxNTBhhmd8szdSqkng7NAQfx6tAQuMV9R23Cqg7jwoUqTaYWTxrVnF6U9Q6386ZEmEeLNPWix8Z",
  "key30": "3kw14NP9GaiNHWVUFPghRPunrPoKWkNuqU3R2fkSr8QZ5hBa8thYN9FZvj2UECmxAjkjT6PMCGhV7N7FwD83VnK6",
  "key31": "5xeNSt6WgK75h3GR6oZHznRrisb5kZ2qTCMjVKxz9qSHyfoG6JFXRsCEiWTXpy9dP8VSTDhuFycGZhnJHkVGGyDh",
  "key32": "5Q7B49sxiBZDcXvcLCZX3wa9uerWnUBR46tWs1vWy6t93s3ZoRVbJryoqWrbHaZKby9X1hJh2YtHpHQ4BAMvp4WW",
  "key33": "2efpL75GsiggPQ41ribZXNum5MiCk7KSqKsW6pZiuxWcEXhDSoPyWTvfNTp6rErjbpNGGTBvioMtuwWNuJbYCH5V",
  "key34": "5bst18nvDHB8WQYC9neWXYBdGH4dJB3J2ApXc8YzwmJWdhUMFt2xLeWQXo3rhLjDD9m64ucv9aFV1WAZ9GeQN3W1",
  "key35": "4WF8NWG5nEwa4Q4ARxdpzsFaQuxHxDfuxos9mRDPDzDNK8nCEx5cFit2nNJQ6gdKHVZas5gFbzzjqu8ADYQhMtqr",
  "key36": "5Nb2Q214h34AD6qftfhEoNRpHXjExNHBoynuyhhwRDQzZLyWV2YQ65tZE4KsSNbNJz7Eg4Y8FRMo4D3Fzzbu2xyZ",
  "key37": "4eeP6zQ7XC89oK5E83REyvu35cCHFzRrBu8hE5P1zbRmvJ9D9NpyRe32WnrTsy7zsdZZuRcR6j5papc5iTbjBfNH",
  "key38": "2pSSFdE7W3dVvprAdzjsw9KQ5ZaUk4NQpKtgZv7ZaouKnVPzFGg3Z6VH3LfaD8rUXwDheQo21BzN7XaDkKRkCBfk",
  "key39": "3dKA3ieUf39Dfmfs5W7aY45moPJnoqPNw6RHEWv5zjRW27dFT39rR4y4vHUE5xJcF1EDiFiXEE3KCdHkaJthAyS6",
  "key40": "2zt9HPFYKEmNJnnjmG8bZmcCzUbW7MWzhvv1EA9rzCV4JUmvAZdXvPMWkZJWQ5boedZ93DspMPfJQZBBMCBDBzNL"
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
