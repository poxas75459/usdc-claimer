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
    "46d8T1whSAqnmv2KnUa4Ei6a2UbZjmDdddW1tgrAbKZ9bMGHprB3cxaA2Z1SbtQ8RKU77aF5X4Lj3tZESku2XSii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7oMY741i86hZuzrL8eZavRi3BPaF6hX8xSTnuFAY2bePEK7Gw7wd8rjxsqUVZqyMWs2YC5JK9GYCwgg6fWAkn7Z",
  "key1": "5D776d8UAe6QFaoNSFpbmgFowN19Legig3cfdW7HTfjRZXkhbMoUQJ2db7Eaqbc4raGjredk69No9FexXpp85VAh",
  "key2": "34h6uktHW42H1gLZhoN8snm7KTFyRR9joa93vNGwWVcARoYSJzchAQwHab9kusek6WVp8aYmXbHKnAY4YjE6ebcR",
  "key3": "1j3aRDNNbUJYV17rVSETcJrDbMBatK451u5LEqpFdkr93HGmYdeViNEFejN8Aet5WasVd3UqrbmD2gguYd91d4V",
  "key4": "4EtrGT92pamdqtM1hjbxNiAEx6H3ALSzKUfzz5g1CvihveGh8YF6YgMmThneiYRNeqLcKoZ8MqZjKqQvpXsS7eQt",
  "key5": "4zUVZ3SvjVqhA9m1iLXKHbgPs7QigJQUEVX9B6HtU6cAcdxgoUJwz3FREG47mb2cV2c7vgnxgdRKu5c1pz3DqoTM",
  "key6": "55CshihBPYjC594oGfVsEsqr4KFnNjYT1wbJ4oBPRQgQyhCdyw9gy4LLNp7Jw41wtE822D9ogRdmc32J5D27iwZR",
  "key7": "64yDqxHxgsnvzTsXbNtFJMMSWxBSjAmf4cmxStwvZN9NAhtZ2Tx4JRgSTnxFhnPUUJUKb42N4hyKQRW9fp5mnt9D",
  "key8": "2aBARYY3uwyj5A3HF1PjVxtjT3qcL9WvGeuXBWoVzLGDbahFE3Raatg2Av9tY2EdNE6GfvTspfpECCCHYEindvpj",
  "key9": "4Ar7685poekQd5C2g9PAsVxBCScMGkLWjvueKDePaQ2uNB2D87guso6yiuqqH7Jd49YhryWyMooaQkgHYr7bQbKF",
  "key10": "2Vej7E1oF3bfoeUhu9He87W9rNi2cFer7W4cKNTRwaFwMiogJGa2CuiSQrXgvAkN7wonx6WufBLre6xNr1pynHY",
  "key11": "FhPP8csnV2hJ33iY8c8QHqrT5XKBFgFU87J2t1vPQrJXqkMQv7Wgh99RpLE89EunuBYf7MvfNeGAN73f1BAZGp4",
  "key12": "y88urystjdH1jny8ZHNGDNgBsKH6nYRsmamGvsbPZHC2dAyV2rkJtnPvsWSvu3hiEjvyeC7cP1t72KbiigqowFD",
  "key13": "2DzhtQEUxQXs1kccp7YCd4DSy16vSjNtZ3AnrfrucEhBota98JiitxmfyjUbbrM497XrFjotHr2zMaNCW1nLViG3",
  "key14": "5922XMrikjhtRaBvqoP8CozBxZRrJLBn26mHrzJNakqLJQ3AAu1eWohkyJfeZDPNtr3X8qvBTcpXepAouAYkUpuW",
  "key15": "4hnEu1ZNWiTXAZy6cWMR1gKGeX7fq52z5EjFyFLJYRw4Ju7Xmqxbcec9pfdjSjJzTPKgCp9irBtm3tkkg3vAXyyF",
  "key16": "3zYhV9tBnRi6weqevDXgdvCBqjNBrk3Wa8RBQy1ny1xYWvy4UuVg31c6axXj7845k2Uf5dE1y9FD9Z51ybDigYMP",
  "key17": "eo19vtYxxJ4efhe8tr1wdxGWSepEWPYpRzUTMV4BuCW9k4kjAVcnpVvj6cEHqkSNaLFS2DxZF9YVVL6yk4FSzCw",
  "key18": "3jgDSfZ4bhq83z6immsCJoxvNX4AQ4r6qB2sXGkwD9cB6XrSpX7uSbc8xsTRdst5Gc7vRUsnFuvBWqtB8CDRAU3p",
  "key19": "2bmp5qGD8aisnzAFcJazokWEARyoXZ6QnWXQyEjb1FSy1QLSAWxAhZHVw7cVtd314EX1m5F4UtisxvqDw3YqyLU6",
  "key20": "45qgquAwsJVD6nznSMMx7nqbh58h9JzkyxiXesF67ox4cSb9vgpQL81BTn8Qi7s8W6dyZzzAAQbbZxPBVZcFaWF8",
  "key21": "AAf87XvdWPFgEAqNY7xVAZGHj4fLsdBfoWFTkhB1ZQk3TBVHSd3mcJPnAmnxomLLpUv4PQ9dXuJYQbiQmciRsFV",
  "key22": "3ixNqbSSdg9wLGKtAg92cy5ZB9zopUq17DTwtusiWVw5NVeACy9PuHZdKWyWxUxdYmBJccjVRgN1c7x62oMBzgtZ",
  "key23": "641SbBVry7QH7zstminRum3v8XMj6f7SqsKcmDUidNbx1jsmyNaUQgTtFdbXLkCiZtCn72Au616pDieFkcRksFWa",
  "key24": "5PofWQEbBo6EG1qoS72v4q86kA9TFbLDBBWLixs7AfBBrFabpFCQLSzi8XngunpWjsABfv3ahVKBB1qMUu5jw8Tf"
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
