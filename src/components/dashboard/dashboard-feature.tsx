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
    "4gb5bNG8tb4nSRgichSUrrYmjP4sNWMe9ct6zdpbg8fSNBmsd5L1cUQN4AbVg8H5PzBTXrfknSBj1keuea5T8BLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uaAtxQhTGcgVTMj5upiVo87wM9rnGbz9fWGvxybxj1uXfy47StGeAV5qgTxoVoGzB2H3XeJL3TD9BYUkqmxtiuX",
  "key1": "5KEWSKf1sPiCfQR3bXGYj6ny5YJZF5kQwHnFrf4Au7EcVQyobRkSsYedVeWwoZX3QenhEGkt62frjAwB7uSamprr",
  "key2": "59XR8oT7zdMtjSeg5CUPgj9Lvv8kPZSL37sMVGzcv9FU4xq7vc3Toj5CZLgiGFUqozfX5rgBfGtByAgqTin9DVri",
  "key3": "52URHqRycymoXPx2FbJHK4gpCtqmDt9qyJbSnJAZU9dc4d3xsY789zXVXCgSntofPFkxejZiEmkjaytMuZigVVZw",
  "key4": "48mjYGeYXGutpC2st5Vwm9GiW9DD2Udv5Ssf7bbShYkwTxfUbU16wMBEiy5pJZSwiGhKVR2h1ykqEoqYGdqRdcmG",
  "key5": "3j9qPDKxmjwb8frBcsnnq9u8pYLJLLEMZoSQbKUg5kxp8qwgXVcFF9dkxxExXJ3HneRipMkWaC8RaTqjpdJgcpQq",
  "key6": "YA8oJf9PVqLJcg6sydUHMk3J4ERgWbLWNSgJoKpjXzSyrcv7aDjaNMB27ke6ZeMuwD291nSragyVcT91SfvghBP",
  "key7": "DwUeQtKF1W3Ygw1KCkW5x6Yy3yT5v2rxsxwjsJUyb5PK35qUVivUB774kuF1sntRitmEy3gq2odqgZEeU9d3E9a",
  "key8": "26EAkFMR55cxMUZ3qSBDf8gDf6x14T8QHSx6osQs1W8Tg3dqqJL5BKP32yUmhdotmBKDHM5RJvKTADkqa1f2uTFo",
  "key9": "5kukC2fNLBWukx98AtdDHVYEyrSQpoZMVzQQukoQTNM7xPLTiaz1t2XsadjPJ5soQ5A9U6MmSaFDQDY3PgsFa7Kj",
  "key10": "3QV9FKjX3NLU7DzbRkS9cCKgEiuZD7iDB98dwGKHHZKqo1JTvk79rbKtsxqLdxx2i3aUdnzWCrDp7y6ee5uBE8NL",
  "key11": "3BiTnTDLN9Jtkrd55P6ySVnvXn5ehAzB1wYKy6sJ1XLLmFsij1vZfQ7GvzfBaksZooq9tsgTTCC4osXC5Si4eeTd",
  "key12": "38tTrsQwn7SYjkKp6JgFcxfniv39ozUPy38txBmJEDx9mmEiaEhjU4iReAWuVSfwabSeKHRS29eBngyHr4X3k216",
  "key13": "2TbdougZAxc5o2tvELoZEjGNuVFvFt6hVsWwxqrp7qkG7bampRqx9nRtFjvsPTvFQkxKxM2LLjLKgpb3CdBW85vf",
  "key14": "3Eoi1SKHsvWvP3hK8ha7kT5Cus9VtpnMU5jNu3j6tdRm3njbuTFm1Qu7GRQ4TcGFhSc6mAdHKY97sRnmiyowo5ui",
  "key15": "31qkWaoPU1ZZ4YB5DLaEyKuiUp7JEZ8p8Q3sGEeFTND3MZ71yhLR3htj27XzCyZWrtk9L8XjkHnaoBo6MmGQQs2v",
  "key16": "4ckvEK8jkRYdszUte8MSHf1E7MjJu5AjuZ8v12TLYtrUqtiW1GRQZyJkrGmR5qbiZnNtHYXzPAhqrn9YAJfG59yD",
  "key17": "5n7rhazLCqjd95GictyuhvhuhaZG5T58HZr22G1NDiER7rEWpgkFQCGtjc3DA6mbuZnGrsc2cSddqaAugLx5hk8o",
  "key18": "sABb9MkdNL4Se7CdDtyk8oWgmzLX1n9Xv6618axZZwEqoFFqHm8JDgapJdrVmW7gcCxGhN6rgMGeFV1VKTMVfSi",
  "key19": "63J3ACuMpU59RefUvwLA1b1zCnfPbc93t6R9PZxGLjWUmkQaqd7cXi5qmcQEu7HX7HTqbmpPoctMHbyAs4TY87Vw",
  "key20": "gn8qhn2T1mGsXfhHsgrv5nmRfXTdLFtFmb1Xgoj82tEia271gdN86upFs51ks6U9yrxpDL62nxVe73JwtQwR34F",
  "key21": "2DD3TJz3CHdgkH9jPqSdu9BubanggSktFSEZbT1Sm8VokxUg3NHFyW8kQBc9BkcmtJaVqeUeYLC1CEhbVhAm3NmM",
  "key22": "3u4B3jyhAWnraP8CuwzrfVhBG95Fe1AdSJhsjLwMKQwysEwiS2SRpr3eQjVHLx68MGN1r2qPcSHEXv4tkuN1dCqh",
  "key23": "4hoYtpJcT5tnH4nyHqLfnVuSxKSjHqzDMbNV8ZiQRsgNKqNxJZUDdfSLXCje1DMrgxpj1zmWy1YAEuwe9oHo6NG5",
  "key24": "5VARV8ZGe9C6xfkVXTwCH7VMNDqRYGTtrh69ZCEfz7KunUpDL7QsK9SeDd9sPuPn6qAqL9bPd9XfXKqyLkbLKwv7",
  "key25": "1oois47UPJLg4B1DC8vzdLshQUnWqu2pcSEgEFNgqjTERaX8ydzvS7rev6aAUQji6NTqNfRxEUU1RZkoDsRDChx",
  "key26": "3xAhNSvmy4vXtwCSaVPKPd8CPwz3bqezKQ91MSwCfWfdCUTaWh2nKwG5BzJsNY9TcsvL78YVzba7qSBY4FxXXD7y",
  "key27": "c4gVtuSSWXs6R9Di2jVNLWawMwoD7WP6HBN5SkpSZsVLLZXATR73teLxHsrcpSeQeMbrLWQp2fYcf2zMPr4bQuR",
  "key28": "5mSazHhHWh9PZ24qqTXsj8ECiakGATbBkZ1hmSYHVYgJWfBH4pWFjPDoU8opA8yMZHsbgHL4TRtGGbHf5SALL8Cw",
  "key29": "21TFBRvuCuq5Ervzv7iztYLTyS2gQYK9LdB159wZsed7Q2oDqcWMts9Wq5KQAwPZmWuGHsAPGG1Yhi66vPfBNqri",
  "key30": "4z1mUCU1FKbLgvYxjcvP2P8Agk3XQB6CkkWPwQHVcKuKMNz34eet3A6ngfFVHHK32Qz9pu6T17FYsmZG4N3WByUw"
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
