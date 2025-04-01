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
    "3xsATjkgR7ZSbhkY6zEykM6LHGNnrY4LqFRN8CmhPJt7GteWxT9mmgjHhmu8jPKTxT8rH58MTCkzp95q6hmdFnmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oZAU23X53mZEcaDJ7k5tEQMpsFDqVYkjUjJjky18Qy7qbHMC856QUvGYJkij9bmzv2qdAJXJRBgZybrr4Ya3n6B",
  "key1": "5grxnBVCNzfXxonUHpHEL6jQHFEoH48oHqqGLMYjPqE1nuRYtteoNJLgdozqEqSGkHhyXfwoPKLLKsxZx4MqpWug",
  "key2": "7RPtMBctdBvC8PaNGydFc3Vw33PdvEzuYLYW1mKkSLeYCiAMn7kKikfXhwavJbcWCAQSaDEntiayGPASLv5HoaJ",
  "key3": "2gGzVdJE2Qoev2F1sWbUdALdb6ucsjfhHgtagBYABwZMGjPwojir2TUVUvvVpAT1EtznfUqC24XakhADUWUn8KZd",
  "key4": "3kQRTfsuPTJdtRw7Tzq6khSYJYihFixv8WTR6hY8cmfYd24kNzRemhtgQRd4Ct1bqTGDV51DdehR8zAyWLXv4nYj",
  "key5": "UNSGZkiPkVeitCBJQ7F91rnkVAMN4orKagfu7HpKkrDKZvweexCpwx5Hv5DLrmNpdFZoMYWizgJiXTWBCaiZm7r",
  "key6": "3auGJL6iDQY5H5v9xqmWFoJy1JaNKK62GPVgypxDig9APbd7kLv1mYLKneTYjwLK4cvq8Z6VohPyYKkuLFciT8ab",
  "key7": "3jP5U3sEJZQf4pdjv1cpcioru2xjGNAWHkDdXvwmCqWekDqqKjG59c5o5vVVpMTUhvQFkXmRmN78cKeN2Cdwga3M",
  "key8": "CszkijRbQQpcc8Qn8uVPzJ9oYRL6wW5UfzoCGMJPygMHmYHJcCaqxXthdmFge9qm3fbP358jX27daM2JbhZrpfq",
  "key9": "3vGtgVDEndxdXW114258YCnAqXH5UTzcmvUayrFMKJYEinxsRcWqA9JEvdRmdZecq7uJ4B9R7LqjXHHwxw2vZ2x3",
  "key10": "3HxiBtEBnUgYb89ARnxC7YWjNFYU7DN63wZxcwuEiUcCbV8xWnMtkuzCgXPxXpNxkSJYJ6nf3bv953oFzAjTMntv",
  "key11": "jfHY6L2BA8bC6BGoKpGX1c3YSwxMUqprzCq3A5vrUEaACQbaxsgNUhLaqWRgeKyk343gKZqwQQQcRsCVY3TYimt",
  "key12": "5nn8ooqNm1XVNFn884HgYjxdUrTkBkVqssxDg37MmWiX4zZNh4bJUA3JTYiiQiovgowuXUHXngUmNMRievKLFnXb",
  "key13": "zbphbQWPpQtXegaBBVpA6o3P3FYegqi8av8KcuKfGhqAhRNwSr98ZgMgEz3d9AkSWpEezGhkMHXy6xUUd1bZarU",
  "key14": "4PQzQNSTySSibNUv3z2RXCzask1bUPzY2tPWguBMJsLHGjk9Adeqw37huzCHiwER8seyLh4GHxNVESdbQdPkBreQ",
  "key15": "3Ly4CePXFNhH4eQ8G52cGGNXBhpygD3KeyKr236ozy7q7ProfwWjDZjAZUPBCdupjXXZvUYYtpRRX8vbP7d9tGyP",
  "key16": "3Qayjc14ZaXuDxq58wK5REyYDry673nhdUeDmw9183gbjRPe4hYFFzpnraHyPNPNb2BG7ySSCVo4ZNn85ZW5RSkn",
  "key17": "2PALtirMhytAHdCYb2LDf9FUiN3dBgv9ZQkM67isa2SjmHx8jm3EwUjSY6g68g8cHWti7jo3ksMqhu8XjAfmHEjy",
  "key18": "ESLn4GnWc1rKYZsKKEBboSq3Nhf9Smk9DicD61Acp9BhT3vLWMudUvdFKAntb28Bet3e1ysi42ouVR5Pk6QqYrT",
  "key19": "3zU1FGt2yzJFbJchsK8khc66B6NS4CipErUeYhrQerNyS6RXNz16BusFTgduxsLhK4SXNem6QeWEpi4iTa6g1dMt",
  "key20": "H2Bf6S7q5p7PF4tXA2VQMYXDyJWjNoBivkjZoMNvcaPKka1rQQojAvHH87Jz62E7g9JTj6b6ywgfWwXfHLGUwoQ",
  "key21": "43Y5mWRFULFHfBWgoacpXuvt2uXzW5NUugTp1fp5p73tUXpSZifkZrkwF5VGH1K8wWhp1KJQwSoJvXqzqyN3Y7F7",
  "key22": "wguZtST8czV126n8MevdAB8JEj53b9kCggHLgP6fg19rG7zMayiAeEXbiFf52AsgE7xkpPH66iAX1dt7pDWx8Z2",
  "key23": "2LArCJVCgFfVhk2TxMz9icW1P4HNpHcvWjAMf5Xt6yC64iycUus9ypsUU3XeAaZHG9Acxve1Rj5BK5JrB9zcVcc5",
  "key24": "4wfq2kYroacJDjTdLUowWyKkjCUfjTdEq1hoL1crpW7Dr24tfv9zZ7Q1jj4aCsn9Kd72Ey21FoRfPoDcRND64tjj",
  "key25": "1Tkpx9J5FTZ4jLsfWYS5jnqz82P6cYEPCA25dTqx1FSKYATeErCP2Jo7gAQFp9uC6T82P8uSYiCbMfwD1k2Z9Gp",
  "key26": "nEJUK1ocZnqFo8wAjoxW1r2Y56QhAb1PzoK8neR9JS4UEAfWyAp8oLqYebSsaLsDyFoPwt5G1STXf1fj6m2TRjc",
  "key27": "4hoYLfkAxf9eJ6sY2p3KjTsswzvW5HSHDyHw2KzxEYyLf7BZvKDp43n7gmxENTjUsaQLa2VbaWGXxmaW8mmZvxa9",
  "key28": "5wq4qmjpQELUbTYXVfQGdUrTmyDxLGyq9FeZoQve7n3ynto2iEDPPTgAXv17AFSDwb85ky2jq9DBFuYSvgfvuAMB",
  "key29": "3k2vEk5ja9dZwGTGKvofvn95NA9ibDa9vDFKRhDCHfrZUQaoJtcf58EeC21BCAxLz53x3JsHd89NiyZ6ywbTmPFS",
  "key30": "3Nxt3Liy341yrEHUeLw2yMeWhNfaGUFfRJzB54PMDn2xbUwyETJJoVY26MJcTMMujtZi7r5eTdAKukRooaGHCFnj",
  "key31": "29Jsi79eHVqENf33GiK59wrvYnDTHfMXm1woXZE34TvsDCiGT83Z2tB8s7dZVJox41z4rTfAU7QRs2JZo3KXFn9x",
  "key32": "5ExMHKGdUY4XexLbmoT4EYLtwZiVrwWb4yguExt2TLTyo9yW3uraGE4hUdvwSYnL2E8JGxtBzrgoJmLJ4VxxMxoJ",
  "key33": "3gcjhcgUdZ8jh8yJjSTezXrSjRLtxWXrgeeqB9pTasEfGZq91U31i9E24j6ZGwtkSFDMaKTf5sXCEzVVT69APidt",
  "key34": "5WyCVwQvWHPwkvX43uLFn2upTKxQGFJ8dBSswjLAkw585agzF3jWf8y1e2F1LLEf1LBhrZ5b4LWwNYtoGZWzX3PH"
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
