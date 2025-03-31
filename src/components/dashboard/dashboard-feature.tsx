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
    "5i36Yv89Juo258Xymid9UqNBvrF1jdtup6NdJuzRqrRfUWpZcoky5PtjpMnVB3KWx4n2NLEimxiMu4DBxXGetpmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vTPgxV41oTqNuDZkv6AaALk2JWB2auRxwWqXLJxDLT4ZhdRoGBUGhJDjfspJpdHsfX7nJqQdyaWvxL8TmCwEuT8",
  "key1": "3en5bwKas96M2zSS4i59UyacGD8na1PA4bMARAMae9epEKiGEWazDKE8BEWKCjfAmytEKrn4H51m7ezwzZZCqXGo",
  "key2": "3swoR3NVym76BAxL4hz4pYPtjQt16cF8YeXLGE18Yj4ESwGnTKcvtzBaHXCrGJMej4XiCbMTbNbVwAMAbVz8BoKH",
  "key3": "qNSedX3SeC8LVjsybUDBpGbmSAQFJKYjCvFn9mLF6mdy2r6Qkw6JWJNeBxDRs8UvD8hjZLm8qtWXvezmaTJLBdG",
  "key4": "2Fc3oybCi5twMuYwSFdmib9Yi4STNBiyfwnkRZXBD6WD99L8iTMGRoy7eggeZfLubiBYhDqebgyJbY5jzwaPc3ma",
  "key5": "5bW4jz5MzoEazhoafdcBBfXvWEEMUACqSsLRR8xNcz9BqZ7Ah9SUgbVLKMvwqWYx858rQNyoA982KqvoXpKpwJNT",
  "key6": "5TNm7qepFrj9ZBAZB4ipQGmZAajQppoz4g1n6qWGvsZKKtegx2frxieAG5qnqpLPJbMqpJCFWrtzaz79Yy5tJVs6",
  "key7": "5Ruti6Z3jp8T3ZD8BBneU48wBFazNkZSS16qRm8R5heZ2gms42DJ6s5EkjQsTus2pC8bM8QXhvbtCTkKYPWRwqJd",
  "key8": "3S7AUxF5fs27f1Z4VsRuFHNbV6rVeQ9Z7C9GoUJXG4CxNWQUdNEZRfk9gynVhR4R5HXpVkQEoZTZA53pCy37zDq8",
  "key9": "5AgSkSM6RsiBXdq9EgxaEpxL6n3xzGp4WmMAgeMVVhJZeJxSSG7wPBs5BbxgziMWjmasPAuGxZiBqytGMTpmeCfR",
  "key10": "3bJucamNioYCWjTJ5wFFT6xypzkSdDuSvAiCJkaonMnhipaBKkKjMEnnJNqaRG8D8c4E3aQS9j5EcmN5xw6cfpYY",
  "key11": "112qktWkFzeYvyQopLUuNztNQv8EQbK9cyzpjjVxfobLAfQfupFKDj1Bzvn4crPktENGKU4CazW4UBWawixZUcz",
  "key12": "Xa1eNqPgvyQWo9KPW9KrdRGxJhCJcKGpvLxuqDQ9tgg5DnBLS19e8CLrE78MyGbuWhGNiLaMdPvBA8L8sF76zSv",
  "key13": "2xj8L1uUphv1n5akafdkiuDkfSda6rtQWhgAN5jxRZvoCTPJGYKvPaKkJH6sRs2kT7j2c2nRCSer3ruyqrCVtGy",
  "key14": "2Z1z16gZwjJg6SGkspN5dd16DJnHHmcYgb2cDatzETPyAuHUyPb5wCLgy5m1HkTrvqGDZup8JgJ66z3hgLcESZeY",
  "key15": "2HYQRyenbtnDgvTcxPdC3E4kJZ6uBxJjb7GASGCDkcP1axonBU1uGVMnsKubkFfhDekqYnLKLg8UwHbkKWm5Ekfj",
  "key16": "3nJM8JJP28aevCrRioHw2vRCCpDC2dmEM8dD66fyL2zKMmAYhpeNUiRQDtFuVfr3Sf1XZeVvUEUyGbNnErtr473k",
  "key17": "5xQaiECwf7cvpG5PYPVqGrxzzkbdQQkgmZJM5Ei6t7JSfvA1LrBGwaB876vBRJYvAcyVzQsKLoeKFnJsa19FKzCt",
  "key18": "3a6f7dQgnLgxwBBvoed5Qnp6ocvJtRPS9vrB9uuFRNcrtVpAEwPzPcufgcwoze1dGfMRAGozpGTyrDLoRaBbph8L",
  "key19": "2uExAfgQYzmoE7xYHsLpb4HnkRis551ESAdgoQoFuQ8VKrChrtG8YDK2ZVEvKDGiiSKLSsCtoQpSiZx3ybsfyMM8",
  "key20": "VDojpAN5JUUSK39qJkoXZhZBdjFPWbp4J4UqwdPe38W3wiji73cEdeVFNb2i2ANicwcLJv3asL1PRdiN2iQYBor",
  "key21": "vYKJE3ginmKjJdqCCVex5jTkEEDEchG29eecfZ1cWTBcnNg1FEnLx9GPTBQPdHDjMJzxrpRPVHd2fCxheuwhxEH",
  "key22": "32eFLRsgrFFAS1GkbX5813D96QEq1EEHrFtyXC6My7BoMkujdizQzGMR2BjCL5t6P1i6aTm9jE8SqUfpcGw3buoF",
  "key23": "uQDdmG2MV5C8qN2UJKJtKiCpP8i9XjMr1urMbXteP6sUbQCgJWW1hPYMuVzu89LgT9acvbzrtXvWrGvRRohE8bE",
  "key24": "2JLnS11Gc58S1D88Zb7KBNPU6Jo46CmC44QZt7sMDTq4h38hCCn6idjpaepDkUNgFpB4Mewa9Lsj4bi8r3F35dyi",
  "key25": "2LyFR4A3o4Be5AbqwY4RuX9cgmkRTRm4HhGobj38qcUEaDysK5wvCgXAtbQQ4svjo8Mn4XSAcfub97jthikmhcBX",
  "key26": "2xDz74kXuFFZrnjgcKTy6srRXNonxwkqb7P9kyivZ3dC9pH1mBfPJc78CpHi3KDcgAWohLUBFLBAWUbNJGevg73F",
  "key27": "2AVMyNmaeYKachEqvVPsxqGNme3UUT3xErnHzErMGm8GVf2m9ekZP7LwYckpCH9k2K3gAb2Yrodkrd5W1pQdtdvN",
  "key28": "4u3BffBo8DF1KT1DDYmL83YquQGgJVb99BQJmYPmztQc12ogDWvCKstYxCcL9m1Xb6AdhFQcF2c9mxSczrf7MKwL",
  "key29": "ALSbF9rWN6MN1pJWpp1rK9P4PdKbTZ8LU6M29S3QTs3bNrp6x2QEwTS123STR2q9gHC118pBDxsZXvRZufVKQtf",
  "key30": "2FCY41sznFHFhzJnCEEU9G7XhnR1LBjn5VYLhVYXRaP5L3Nz5zLWFmCCjds7Ev6zwg7KgquaJp32FiVSBJVitpoQ",
  "key31": "5ZjKk4UMy9V38vZF5kk3217nUvPU1t9BchaofRHtuaNxthtvTkzatsRrST97btf7rWe5DMPjhfXUwA6ohySh7YDS"
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
