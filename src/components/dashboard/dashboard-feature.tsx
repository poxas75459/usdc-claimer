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
    "55sxBh5a46Xgu4uAUtVjJBCrdToTeD82cY7ZNuTyHKzUrN7KCg65JYUVtQh9BLNcBEBKj2aT8LyGQnPJ9fbRqhH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vY9cbaEMBXoYB8DkHUVabsvgCLQJbRVCm8eMmDKPELAsid9MCL2Z3A8ynoz9L2kRjSqLmgDFp4ajfDzeA2ihdx8",
  "key1": "5mh3tjcnUAEeQe3HScq1wef3XZ1wM5fMQGzdJQGL6Jk6CnEzaqby14pyX7nrjDeS1Zr2QFyvuUy8yVAS7E45tEfL",
  "key2": "66uGYvoYQezCjqSyvPEwyuwdTAqwWUXVnSK8VJhDZmK2JSgqXQFQgFjqvb6QR1sSLBKs7Hr5w8zn5yyc6ywTmV78",
  "key3": "4bA6rhpdbUu2nNxBMPuHG4qDx4MrVcD6HoSGT2KfifACoLjaoYC2nF2Dwzg11ppRvWJMNcqVGKqZpmNCayHu6WNJ",
  "key4": "N4sifq4AU65a5Y5GJaXnti5efdWzMCJY39vi6HMYU5SixBrmujx7V4ejyc9nVZyKj5Z3y2VrcUo3QVGTzNxgyEs",
  "key5": "2Zue9AcQm3Fy2JWMh8UTUjrJBEWPjFaePcMsZxE5xNH7tLBCnxDkAa8URtGRXeummdAVz2n7GjMp1JwEURMMyo1k",
  "key6": "2Fhb95BZnNSmBbj9vZECCmowJhbUho8fmNEiuQ4GB6WrooUpJFMeiETTQyrya9MUuf6QuJeKpQSxqSa6Tp4FBLJ5",
  "key7": "4DgcF88vkrvgjyMZFa72r7j7xAgpwXJqJSw4voMsnCU1vbqh9CFEpexcqaAxT4WwKuZRJp3ckEszNbZJFwsJn69H",
  "key8": "2Z9gUfJ83RWHhnQ3GLx5unY2oXK3KQE8UjBpUNgiHt1WQH5z2QzkVmoLyqPCgoTaru5kxZ4C8MEsGe4EoBt3drop",
  "key9": "566veFrWSUQK3rVQRxt4M7qTJ8tj7J2bgoNnuidPBZfy8heKuJuQwLBo2Xep8FaLBYqGxYxmWSZz4xg5BrVd9auE",
  "key10": "2grprc9j14nseHW1TVxHLckbZyY2yUVCEezv2AfQ8zjft8jnMKQJ8aAVUH9tdd9wVLFn3zpvV938TdqRMsejk963",
  "key11": "3GAzN6zV4cWxN4ucx82rwtsXaTmmqaExrpN3oSaRRbGsbr1tDsDuLq2RLiTEWTCuQCUmesCUZUajmZi5jK4SLbXg",
  "key12": "4BZSF2q972DmmHGem6is1jB49mPLhoy3cBQFr5DqUfTyEVT2XXatTtYbbhZiGP8mc1mJizyt7t2Xwm3TCQ6PvcmT",
  "key13": "35y7jr2mKApSyDg5j52Kuk47Kt1b71WpqQZzvSs7Btkcd5vJNeMyENALVJndoMwTyz8PQcL2jYCs5QYk9q1nV4Yq",
  "key14": "3fhcKZvuvHmCm1X6uZUdtSqq97WwReTKp1FRZpLBcqMZoH5gv876ohhKHrhFLNP4Rn9cR1PXegqFrdjz42wid9PW",
  "key15": "eyoYwowGFHTCgRe4oqpJUQbMWQnXPjPQ5UUMKkKa6Rk3kxatTJuRbmRXwGFHzN6cc63agS3QMcxLD9bahySThB7",
  "key16": "VntjW79nXryn7mgdGPDaAKEzpyUzsM14hA1WaVbWtkqVsnNC2M3sdiu717ECRRTXF1VWsaw12R29NZz4i6oLrEJ",
  "key17": "2U9P4QVekH6HDA4A4UnUJdJAfHssmF6jX9sLNmVkmYkvHTZFNSzFhjPnsMU3qB772VA2wWXzZYah2AD7Eixvgshr",
  "key18": "364eq9gwe14737ntw68vNJjYCARV2GtqjGzXhTsGgDvvCWhKXcKN9GkSAwoPbjckWszNw9no25Ctw8A9JS6A2U86",
  "key19": "5Gybwa4fhpi54GVZ9uwB6cXyv7P7VxVRey2QfzgSxKDVQFqQBGYtifpzjTZYU12ZG2CK9hCfaoymf9zUFmG2nggJ",
  "key20": "5TZxTgffNc1TNx2HjdBvVWKFJPhWwXRaf8BwLg2TEcR6eThnexFYzSAkaRA5JWZH6fdfEs7mL1T1PHqriP5bNo2D",
  "key21": "3C91TmyxZn6hw7cy54vZre8yedfrfgbVmG8UJxZqLbpyVjrKvgyFBqhd8nT2X1aaKuUNHduGFyaQWeGxE81YkqWF",
  "key22": "2FGEhEto149edBzN1d65ex9S1mKoQGSAn9tMJAPfK9L283ZAvNWSkPujJqwgMNVjLpjwdqyprWxPWBrA8TS2MzZu",
  "key23": "bGCdrKb4ubNygiLJoFrULs2TsqCYab3HoNbGjJToaycqBQw9wcVAy9oiX55VZXUK7WjdHAw7UmFeiFRNv5pWQSs",
  "key24": "3mUMfvcdcVC7kFpRSsEQnz59cNKdzMv6PzYbgS1JZFVPgkR27wX7ifeqSg9GbDW3SS1Ceof5nCgqCX2CdMum97q1",
  "key25": "4wZ2GKLgiq7ZCveut74MNimhU8fVNcrj6xooAsXUpmHXrx34PHvBHDquzzWAiydCLWo9WPJ94YJrok8FZJK6k97d",
  "key26": "3vdVF77A65uKu8RXt638U6Abn9toHaDWrRojZsEWssyq9yBKR2UjjyxRuRdwk9u5LMvJah4dGBgze28nryKpp6sY",
  "key27": "65ze62rgD6T6CKQgcPTs4YGKWEANgCW6mnGQdQi7YRp5x4bAhwQsWvBJnoKkXmduenkJuKbmriGEep8xRsFJ46Gm",
  "key28": "y6oEkWT8SChL2Yxan78NjeRvfoqXm9i1TYDkZ8JcvZVzF5s6u5d1dPLBXHBviSe151CCZoGUXSRx4qKSzbf62UR",
  "key29": "4sPnLJsdAkp2MP9tTyhCWJoyr47idhttcqyee25rnsrSFdURKfTC8BWZz2vo6sWJgkG8tm27CeLn72m9wUGPWQan",
  "key30": "kbzyEFQN6yMhJT3dKKE1ebChGhHhY9ESDZjFqFgMWtVCf8wWEmUy2Vn598UY2rsJGzyE3D2Hf5mrAv7ijhr1SC5"
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
