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
    "5JEToYccksGsP86fQ8VdkpXUjwjenzJhokWpGnmEuaJTqG4Nb9a3F6iAM1qaShuN84DSoqYpAxXP2kgcbbnkSSWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53pgpBo6BgVKnujqu8Xms6G7a32AJ4GQsTGqXUU2tK9rBc8UyZaT5ayQYeKzDdCi51D2YfDwPXruejpvux5g8Ema",
  "key1": "2qgNbbpKv1QsNw2shACjDUhomizgTN61fRXhP2xUGeyY8b6UkLFvdC5ApKfZPLvHLzWa2SUhK73De9jYV9TVWYR9",
  "key2": "5hmACAsPQUhqRQeL9UXCjkuinU3BpeJZCazum9GaUeRG2fAm46y8YDGZ6CZZxPQDHcFqsx6FKjhJbbchC4YrmnaN",
  "key3": "2Wi8oUNuVGLXCDRnYnruqHyWp7Pho9QyEvE6c1vahFvvNkHBU6DWXZfKXdndnqEbaSMmfGoVY1vYN1dMooz4Z2fS",
  "key4": "4H8ukyzJcL9zX85pAXnX396v7fThxdkz4AezytWnSTZ9fPp9Q2q8p18ejV2K4c6zf9SSiQdK6BAsfUrxWCx7RUPe",
  "key5": "xZ5xqaLWmvmYY5VgkWMfHaWw48K95C5YaCguqtNg7Z3Mxof3PwLy63C6jX8nsgrJ5Kcc3NUzpfFpWTi2jn2L8KS",
  "key6": "5FJEffXKXG1jacRwYjkD3vDtv5DsWrCcLuDKbbiFJWZsdNvmEfC9ZfhDNHYX3A5sjVhq6udmzRhB3yY9DqeDxYtr",
  "key7": "5YzVof8YMg5xWp4WHKxcXoLyoDt5NioE3vZrZTDZPLcHEmPQBDc7dR74Aji94W3G4uef14BbVxyWF9WNMXNJ2EhP",
  "key8": "4gDGFZac1kUPtGgqRbBeKojDzBnnp6WCSry4NQrY1vsd2WZntRAJM1uxHibDTgKTrXzmu4anb8umZDNZdaMTQTPA",
  "key9": "2m6Lamx4wX5ruaL59jW8VhiQr4gLj8ZbBPKG4q2DkVjxK1svjdN4KWEfvyRPCL2XEwzbANy1K8RWFsMBufTapycr",
  "key10": "3uagRRRp9AwFBXPP5UfEBXxGvuQjkBpS4Rt9P47Bkp1jDpggcBHgCzoaSNUzrobkKu8cYqxR1swYE2B8XovGyv91",
  "key11": "4eQiKmhscLAGTKtX2PDqDxCt15qBEYQRryPk6TcBwJfenfzBWkEiJwcvJKD8C2yWqsPZgNQFe3FQuuDvWTryVHwE",
  "key12": "5cg2kFFeQHWJTPYsu4mk1fFkHKJmSHiLyzxVEm9FoaP9qXVevqnxjQ9x6rvUJLkDo7d1HiTENu2yJ4MrQk9FbLLD",
  "key13": "2J2KCuSY64PQezDbf59fznWiTkYYc6AhyEy58322o1Q7NiDMxdzRUmoA8zT15Az75Xoe1Q8TFykkRRyZZzKyQhix",
  "key14": "2TtHNnGsCAbNUiaMGyhDUjsTMbD53q6ySVBbB97t45Juv6PsjVKE4nTWs2uHZpkV1qsfopu3xanhEJNEmKhvqMCc",
  "key15": "3Bbnhu7jTgNVLQP5QxfkbanrNroXn2VvvMF7f6yZXVsh6Ry2k1oVftcu2jpBj8XZ8T4FGbsrxg8xFDNY9BkDof2J",
  "key16": "2ENHmvifjwQv9gY5swq7TDCm5VPCFVyKVQtjuDX6sVQcsdyPJVwDutFYaxDGkj74GdyGmsmptZDo799vbTWzK9pF",
  "key17": "5WaMbZd8Sj37qA12ThcXh9w7z1uF6JCWLNKP4kFQnG7ySdoXvGjxdCoRkyskKNKgsK1AAQBqmpENBeT6wxxgapU1",
  "key18": "2eENepXKVvPzeTKgjZx7Y9xYhsTGXnVVvAVAGYwsNHHR55HWXiXyieNBdn78JsGQocvjUcgoDkZYoaPWn8NqLELE",
  "key19": "4rkfxBB8rmy5y1yqPPWJUY2hgp57f1C3ExmcSPXJ7rT8kTLepBz3qJeDv7H45R4dwoM2nfLBqz6RYBuSE7y6U181",
  "key20": "4LHrxhpXL7Sq3c3f7R8KCpaX91KLKmYeAuuCHiU2b3sAWvaZPXELP1GyJJpxQ2tUzvFDDYDJ6t7ZGNi19CVx86KC",
  "key21": "25X1WK1JYVjjPjuK4mpVVTZ5wah15Cu6xj8qvJed9FSH6TvoMdAHNdFMUgtqfyWztH1NE5n95zdp8FxmZsAcPubX",
  "key22": "2StNzLUA86nGaYy6nHRf4eTSYzrudBKG1UsAkmPHvUNeeeJbmc3DRjsmSSYNTTcFsuNieNW6R1ueTovCu4ydfCyb",
  "key23": "3qCqT5vfBiUmw5vaBvWs1Beo46VsBYMuisqTWNGi4rthdiGcJYF2NbS7fNFEu33EXKwGw7vJumtwCzqYnBVvFjdy",
  "key24": "5rkuN6SqcWYDtoh1QpseZPsNzPAxYgL1FLfMs3JLDWuuXnNcZesapUXCFyus7LC77BQywDvfU5AHYLdZAT7rxGdc",
  "key25": "2sFacsJyRs65SDPtgTZUcgPzZ1KiLZZJQzwipgBwQpPUCoe4UXcHhgs5YMd13QdJGxBThRqXMdHsCWZjgjnxZiwo",
  "key26": "hc61EEXenWPJ5NhG1nusDWoBaANfDLm5F4xybnetj3tb5v2sHZTxJyRSFvdaJUXz8Z7PoMAfFGT968ifsESkUP8",
  "key27": "2UZCyJmGLQ86r45tnXm6FMSJRQizJyo6UAbYBixKu4EA6CPkvh66uQHWvytNXWM7Nk2opg1xfcAQLiiKVx4bi9eK",
  "key28": "3ieky5Kd7Jmci5RsJKCQUzS24vfhB5MtoMdB8ouKK5oiMre2fKTXct9W7Hd56dEyEYsTEerWKTx3JSn8mnzZwMGJ",
  "key29": "48omcbhtxv5Hd9PKxiW5xAFztKLzCJUzYC3je6RcHC6d3dYMMi7RCy4qfwJTCXiGkTuMGEySur1p53Mz3xF39MsX"
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
