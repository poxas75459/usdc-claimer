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
    "2hbr4FDfEQpb1nGFLhEvboUdbc2AkT3vqFNUteUwNL4JQ87Aukap97jcYs5FQxJmHcVJJLvXaLDG42GYWT4WereU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WZYfKmW2UW8R6DHHKeKcJT23yJGKvZipe4VhEF1bwJXS5RRApHR77W6PCaRRmUG7MiyEqws2BMbwKhDygwxxPKE",
  "key1": "2ktLCLptPHVxCJUKScj2KvhqvbyUXvFMEWnw9N4LWzHLLYe23g4WfamDntSHq5TUUgfxKabAinv6FHyntTmWrbG1",
  "key2": "5zb8yp3v2aqshETQdR47pw7y2U9DFoJaGn5QV5U19SCoLwRizGAh7L5XDhe5HqPgj1EK3hWMbbG5YjZJmEnzdVit",
  "key3": "4ov8q49XoJPL8CiYh65z7o8rbt6db9iQSN37VULfL9FiQiwQ7bMWvy9czWcXBvdHdvmD8uX5q7hGs9LMzkGvMFwx",
  "key4": "4QJ9Lk85Aq6MJRM7apTttap4P2SCmtWxmQZZqiAVr8Rken3mkZrFKTHVYDDhv72LVc16dj14tgQ2n52yWKcwSm8S",
  "key5": "5nmKcxiKL9axEHx1Bpmi3ktBEVpTL13bCeoUeBDiAAG81hDfstyX143TLpM3xMULeb9CuLTHPDaQUA2EXWHr8AFc",
  "key6": "4n48t3EVhaob2LphT6TcJHfsLu19btjQDMu7x9LBh5MM3d8FXi38yPWneQy6fpCZZtXyfCxmk9nrAifZHcex6itb",
  "key7": "3xY7UBgRXMA9yvnqJ1JTZXpLV44UQRVR5P3evtiw91j3T4yMsnxzvLbUZ8QFvcAtwKBWqgjNQtqB1uHaB3zYTaD5",
  "key8": "2jNarUs29Y3dRBoirNjPAdTXiUAHDnNKDKwjqFuBMfmmQvqxMpUcaCc7CXHLncpnyCrkUNTsy4Y4ExxqsaC7kXES",
  "key9": "CzqRMNwzCRKsVjFYAecEPAwDEZYV7fpLiXkwuYv8VkqgZU9ZaavtY2oZ5XnD2hKLWkK1T7dXfbZHLARod7mBs69",
  "key10": "QRSJN3eyKxTqMVM4yKB7e7m92pYCTkFaUhKHW74ytTQo5XeTniSLBQL4CTeUNH675nBJ4oV8kL7B2c3isWvMYpB",
  "key11": "3CjcSM1ik55D6Yfz3FL8WM2e7EwdhPKq2S9i1zbfsmExMzvvm9SSJTjXMmvHCZyAKq1pg4wHsQMTz6rLQSDJGS4D",
  "key12": "5NrbqCT2e3hmUm2x7j6YdLh1EqARsFFCRoiDgfuu4apCyT4saNm5AWLdyHC5Eq5kUZyVPZBdTX1EmsSMpzKRNsMt",
  "key13": "hvoVsrk2mTGeoTw9oai2nrduWGafKsZXm8r5TQWL7JPmP4V3GZJsFczN4DhKsQbZKf7FCGxxvqPZZ3bAae3roRB",
  "key14": "4jgE2BDf82sbiHjCvMTP8VFfxeoLazqNNUo76rSZRxtjrvTZaozHZKMYVftYvMakXaAAwGigre3kK3HeD2pFYKdw",
  "key15": "9suwiRPxrBYkWDztYoHrusb4LWNxRRaP7gbdKRdqtqqsm7d3WgsyzvSqv3EgVhDxop7teuW2efZk7UUWyik6NW5",
  "key16": "aLk2kFGhFNkWMfKW5gsNU5TFiVZYwnXt8gY8PWNUw19jZnY3oGprATfEeH6hnGNLnhF5M27wtzQESMVrBqzAe5c",
  "key17": "RXew5Kud6UisaJSeR8aHnMbEyYEsLXfkTaruhHp8vFgLFqs15xbAeQbgcyNWcQEi15ce8Ssj8N6uG5hYrdJHZrh",
  "key18": "5HbsgfGSVeZJLLm8RSyEkHxf8DkuweUNUyHXv8csnAboF1QPVxv1ut8rn7ZTFSCGoqxDvA3NeTbfcXCNwA2F83cW",
  "key19": "J3DMpmDXNzeWrARMFR4wSVqdZMako7T7FuWoiis2VytmLWtSXMK3wQ4Pg6B5TXCUvP4T833UZvcJ7R2QK3LNC5w",
  "key20": "2kUnsCmu7QGGri5UtUfEeRsbbDV73eotdaaj9XnyecFyjeL5Xc5SeNkBfDXNx3qrVdDYdgzNSPb3SDbSqjxaYGQr",
  "key21": "4Y5w3KSXyocb6Rk4ccCECGLEfpKqxH52bzPBecrwsRRmfewLo5xH6SWybSQzcrLqKrVqdRbrTQZyuLxTWpxen3Ze",
  "key22": "31U7NN66igqZGsgo837NvmK8RxiiNgqnbKUheNVD4DkiUEsHRq5X6w1c7GCs5R6RwwLEYjchc28uGFUpANfLYa1D",
  "key23": "3cpGEHsUNjxcKFKA4gnkfmhUh2YywTYbh3NfBNDGB4k4Ye1Pn6Nm6ESH8ZwghXsBxUJYvYmCdYmP62P93pzqxrtx",
  "key24": "45TYcW2dDVtenwN3KhdYKAApFJRmCCMUXKgANChDcjHvsxQu72dHfGm2XViTxwjnZs81X3iXPs419UgCNNUwsbAw",
  "key25": "3cJMhRNhozWtkJY9GWNvhCdPF44fKnKWDL9pA7WRQuULxKcB7sn5F17KypBFBUnP5N8GV4Tt7ygRsUWPRs2jWYXG",
  "key26": "3pGMhXTCei8SEb9yd5jtEh5AB8TrmfS6yE79VgBVTS45fuLQHZu1ADYoYYhffJgh84syjgLztCiDq7aPHnoDx1dA",
  "key27": "1eSvMJrw9LTzvviLXjg8rKdeVVGroP4RgFkHFLm5A4DSoFHTmjmPdKDmqhQAdku3VkQYNWLfcFopr1kWpFJdNHc",
  "key28": "2BqiELHqH3jeZFaqyqYVpRZQmi3CwrdW3ZYEvFAjZMEzHziiCHGEjwjx6JGYwyZ4Tmw8KFjVnX482rkjzEyX4goP",
  "key29": "3KKi45rCKuDnqH8RG7Yw4wA31Gwq4HJFrnmE8Px2h5CJr2R6ZoVpUpSxMd7ab17ZoWRt9tMrBSRheNEZwAKSVkzq"
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
