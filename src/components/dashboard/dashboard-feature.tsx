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
    "62sP1kzdsw3YBpf1sinr4yJ9xQ3VR2ccofi2Zq7LF9Yd3KG9H9AiqKvbGkNuymnV99hpydMCa8Syurs7XDq3wC57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eUNCEfJqJDPCqBDBYFTAh7PwhAwDmCtBKU9WdSeQsxYnnKzta5eZs9cZsNqGswpcbGRGy9xkB9LJfiu8ptX1c3q",
  "key1": "652ukQjEzFuphs33E5765xAv8Ccf3rzXxRPKkc7eryUp2Zd1zEyZUPSiTsEpGSSApb1JKPgrPegKCXmt2Ac6vekE",
  "key2": "48GVx5Tm6H8eieuFHXtpQNK62pLYkGmqoMb49dXAYFSJi2foREzwVRvUb93RY2i3JK8JeugYHaJLiEY43m1Mg7YL",
  "key3": "2hKEbYVXvu6EL1UsfuSGvbwsCMYoJRiD3TxazRabuW8rhgMipFHcMjoTn8uWhig1bkak9sG4GfdGVC8gMkchLSvL",
  "key4": "32CfD6YBTtdLa1LjgaBCEDgUMqnH5xAvDifEC6LJCPeXhRJWJjjTw4joJqYaMqufvWaanjk6KAmTCsLrrRzX6Ccg",
  "key5": "2Laa5PT1XNNjhNpWdpgjziLRCygbyQpAh8zw4nRzTsc6ttT4kaTevgc7dk7qAvVmPxdjv5c6TMy53SgqdZJoeYzj",
  "key6": "3F8jd6qjooW3qhc6FghTA2HqiHqnQ3bQGgL5DYWxajMiGTuzfgrMUXK3EK6RLrdeWuBiGfFT1BtZ2ipyYVAdgaBz",
  "key7": "5EAhTfVo3Yc89b5D85gRGeKGNapiTBthAsXAg7vcwZqGiF47kPEPKKKZ1WbuoDmJr7ZTjPXWvxYjpjCPHJUAtPxQ",
  "key8": "5WfQnHPLGu6sufWpYiDBTjyuXfH6Fuf3Rs4WvEKANcrG9xzrTSFGFZo9FhTGN26fYei5DhVsgB3WcXXubomZe8vA",
  "key9": "7PV9cGWSQLjPi8sSS4VLfqsZAGmaYU47bQppkPNVxDoHKszJpfJqjs9sbEo9CdD88FMnC9eMW7uSb2sRrffjCVT",
  "key10": "21JkVDyte6UmjzcvDyBiNhdeY4WT8FgHLc7eqbExB9jr3ZnzVZvEM8TVB7nLHt3h5mDYGoaePfymypH7cFE6ynpZ",
  "key11": "4pMfs85ft4PWmVyCidHmAgb9FsAbwGTufKzp12QnZyYK8ZszADMtRhsrYNbx29d2WCYQKHNWzQXpTiMKagjHVf6G",
  "key12": "215r6xAGuR5VBz1DDmVT9H4Yd4sCZN4DJWG8cNqpgooZkDru71geZAzaSUtftHLrdZJqVAzNsbVo3NeAM5W2eX9d",
  "key13": "4tTQa1MJ1654a7QkNpFXtffK1uerQub15rbWdwxQ2yoEXpknFWtR6DMaYAiiVoMRz1UmjT7pASjoo7PJEyvMNoEg",
  "key14": "vTtwbKoWVA6eKkqxUsu2u22M4R33wd3oz2cSQ3FhmygJ3Nn82nukDyW3QBNNXKWNimDgNv7KouuN9etMnuEjdwX",
  "key15": "3ws1C9cUpz9aRPghUG9mYJvVAAEpwesVEoNsyYmsyGiLb6NEyQyd1aUYAEa9KS5cuv3tyeWNs3XR9PkDLi6k34mE",
  "key16": "2TqZvK4Fugjb6KjvqmMfUvBumDx2Xw76DXgCve863HGRTGrfgRqGPLFRB6ouR7PTqZAYMrd49yJ3kAn7AdCdce22",
  "key17": "4q3XLk2hWxWWrkdGkMztL6uoduSHWANRCsF3YaAXUFjwceg1vdEnGoJhx75kpvJydB7EwEF28Gud8aBRgWGaDG8P",
  "key18": "2EJ5e2UnubsceezFNXLwXkHniuU7nmafq6LwiZuBztUW7XedHT9zJWeU9x3HUHJe75Z3MXksNi5JxCdp6GxQzbHY",
  "key19": "5jjF3Q2NzQCS3G48wk8cSqafzH96PDenaJREJwhoFuWtwuiru124aZdS4Lfv9FZLAEBUZeQwABwK7KK588ECYwG3",
  "key20": "39zwdbbrvCv5iU6j1yC7xn8NQCGYVavqbNRWXSN3hzjgsAmKgUuSyiFk4Tq7nwDprGN6882sFa9AWejFq9rug44j",
  "key21": "36JEKHttRNJinLXBLdnCWiR9bZwawYFk6tvQ4VNW1wMfCwtR7PuXCCC8Zs7JHvteEHMbmUM4cSfKmMC4o1PARHhY",
  "key22": "2wi1MSjaXdGih65un3Nf6iHfLzVY5SdrhAgNLwn8oJ97K4CvoiQ13H1LyCBdNNFpA3bZ7FDxYnkN9HyrogjwnFTd",
  "key23": "4Gba41LkEDee39AcqJnC5inbg65Y58ew3xHbSwzdqFUU9DUoMwwYYdBRYBHae86uP8j6jKkdXneQMiTJnPgXuz8",
  "key24": "48w3GnxbooxMgLgjYfzJRLroeBKJtknjYuuqvXDjf2z8rnsGZ2W8ABDwhB8F26GJurUk4MpWJazXgPuPh7XpfK94",
  "key25": "5nJJfZkU2dqR1QdYhzbSaHw7UZMK1Jsaui1FYU7ADbMdcs3jDYC3hDQHiAVGi1thPpa1wwv1x4y9mBSgtDc4mZJ4",
  "key26": "HpQqRztAE4mDMq39uHvAbMbEU8Hu2kL9Cx5rBT9ptjrQsKtfqwN2UKSTfo3wYZ9nwATfA93MHgBXdDo1yEMpmqq",
  "key27": "4bhEZX6FijrQzJUQHoCzW5im1DdDofrZU2SaHNQ7xmre8PGJZQoSUBUcCwqEE3fdAbnxhifotkJczPSC6x9kGY1d",
  "key28": "5nfRkyg2VJ2qgdqx4oabYxtec3G5GTzE734y6C7YYstXSrVuceLytPnrkBywHdxjXJgYsF62Hium5cDzybEMND5L",
  "key29": "3JY33VSHWJnxEHraCxNA3JpL758oEysw6k3DsGqEkdeqhJFDN5YmiAC2Sk9tYwUz4oPEGKUnRQVB4FuTzTbJLWJg",
  "key30": "4qBWFskNRfuwN9LAMuJS2X9J5v9Qw3SadtS13nzvRbopQfLfR5qiTzXEBVPUGwqq5qwxzihKnu977AuRQLj2eJtc"
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
