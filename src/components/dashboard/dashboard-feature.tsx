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
    "HxzM6tDcfu7kFc7R5MJBk1U8Q9umEgQ4894JFmRxafb5Ptu3uCRJhrtx5cwxqxF6SBqDKrUD8VnervNJRK8iXPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHRN5mPz89BDAjqnqepX15bFznFkHpzPNGrd2pGWywEQ5dMtrD4f6CU1xaC8uo6zjurxGEvZ9WrzNBqfCfWRxvj",
  "key1": "qYxkznZ3YK5XeP8zpZpRc7uJwodwe1HfHbGftThKfkvq7K4nCcSyVGgF96wQnTDDTuegttKH8pkuF45ddQ8Dqwz",
  "key2": "5nAtyfke565iuGnSm9rNyPGDBSeSf6EQbBfLJ1MFr5sXbyBiKW4BG6uFPwCE34yNBGbr8F56uMHe3UvSq1BC3oqJ",
  "key3": "4z5FUfeiNT23nUM1XM2g1f2taAdiefTsQxafyPYHJk92k3dcY6L1DwDVTiQhSKzz66oHC8NNg2EgYensz1uqX94i",
  "key4": "2o27vxDSY1jRdnoQuHWGcS9ygM5GbWUFJdERe2ek27hwXz1nTkxfPejc9S5kn3mBATXYRgrtABDK6CnvHAMPdQ4a",
  "key5": "4fYAhAiu2ZdHdnBeKw4B2dZEA1pDGcxucNm8QZfAmU6JrvxdagM7NgB61DNuSvYKVx5f2jegJzex6U3bmJVeQvxB",
  "key6": "3dLmrjjBmTzfTxHcXztHckv7SoSmMQzN6iEcw3qxnBBGtrZ6d4MryJ4aGMgatxCpVS1YqRV4sdPrv94HEqKuFuYk",
  "key7": "35Tr9KaFyLFq8Cpvz3jq6bWoLWL34gkmQm3nVFaiUuYQda2PfccyVtwtzgkBub8ZrbRjsvMBawx12KWsmvqueaSj",
  "key8": "4FewJxC5ejyrKyR3qbKGRu5tn4uzM6gCw3LSHYMdWkP6pB6poETuUnbHbqbv4CUJBRAjKSg43wBUwDusHpncwaAW",
  "key9": "cLGcjD7JutbXyCDWKbPkfF25g5DbCNro8FpvbCTpLopYQ3cWSkK6sBAVSdeXw7Lx19mgkVPRP45AiQUNWX44gVU",
  "key10": "5E2g7pKaSXQzuSZVmrd3kQs1WEceE2DTYCrE1wjyCXWCFKfvhnP3Qg4ntc4VkjP89s2d44zXgnDCpuraPPzW5eK2",
  "key11": "2uX84DCohV1H6KSerd3KGmMaxc98V1vViMKqECUPQApqLyYUP6E1dKzYw4yqNAr9zcNbtqB5H4B8iKNTf9f4wwuX",
  "key12": "4fpW9bcpVLr33smughrq6XrF5KkJpViGPWvW81AukoRHMjxGx93WamKG9Aj1NpXMRcZigXnaty94kk15PgxMjsMi",
  "key13": "5HkhXgimYjb7URUQQTPUgJ8FjJfDsaAJWR1S42eJcgMVkHnKws1xhrZqUtVMJHgmdkK3QvqgK4GWTDmUdK3QXtn2",
  "key14": "3iAKvguKSRXB63EJ7CsizMmATXENWE6VMLrxnSoxQztPdLfNovzo11Reee2CHeBModmq64rbFPSny3HVgtkGwLv4",
  "key15": "4oVZCqc6KyuP6fXgBrWCn76uQt2VRdhu5jTV4qWw1kr4evjtQ9MBFzY4gocfHDACt2NWmUV6T8UxTM5aVnMRhDok",
  "key16": "57v6deZTFm3CYnQH6ycGPA4KWynNsKnfhPS4QFmR7fcXJTSATETDGnLZvaqB8HhL7WuWQxs3LJ2sBn1f5wgdqNr1",
  "key17": "3JjWKdksc4R5YUmPs9AQBGkbRyL8aiE5rs2QD5nG6DMfsUbYDoCVfteBHqDyJ23qB74ZMBbNa6thE8j78SGQd5PQ",
  "key18": "5hbeGoaH3i8AUfS2Ce6m7pDRAt4BFLeh9E7BQpYkPkbwnbMHyymozuLjfDuDsGbMojMXPieA2AN8FQiRGmhseQXZ",
  "key19": "5oN59cpuS88NmSwjEEds7SYA4w99uNTvfEDUrtTsLqPm4u7MFYaMiWfnKqsae3YnPqYUAkyy3wKmCKV9C9FzyyQD",
  "key20": "5NHaDfbM5mSptEZaxv1hUVKsqJVquA3Se4JEfhNEzXEMWb5uh3PW9kSeZjJ7nE6vEXLL1z9eoakSX3oMAbcC6TV7",
  "key21": "4xcRUvhDD7VUtfjTmiN5PWN8A2xw7QRA3qVLJ6qELg3UScnAFid3dGu58J2QFaSH7xwpc7AFu1G7LPjJhDysvzPo",
  "key22": "rk8tSaXNv8s1qcZ8SfV6mB2uAoVxkStLkyCbjMeSjDvFmFPioJnaRq2zk4RM72RcnVVvtm4ix4hajtE9R6vVAhM",
  "key23": "3aeT87XdSyhmwZfWvjMB6nNGHojTiNDR4BGLUmt1NHdenEapg8RdZAkVJYZdtBPFeaV53jRkMMZY9RqDuz9Dsdgf",
  "key24": "4HW7AgjWi7Sknpxhe266QdJHYwnceC2Y71mvxrUVnZVRCdmkyqrLggYb7ZHkxWTWbcXxdXHwkJyekGH9FDsi8pq7",
  "key25": "3YThK54d838rsAstuKakB1RnwRTYL4HcFwznsCNLYUp5G6K36hU64ai4RGnkPzFFT9BR8iTwoaZ5XWY6EJUyoZDC",
  "key26": "21gfHcQjpbBM93xpy6XiTqageQyfaH6cxBYj8cPZdFdefSGGWyAJiW3r6WwaqzLgGrUe3K7TBuqmgaUsCnm9e2ux",
  "key27": "3x2S13pctdQERkJ6zsvkRssDddq6m8Cwrn4ZivcCwAzk1JZDUSnCkyykymh84ic4ZnmWJJJPvx1bxmd28uK2DU5r",
  "key28": "4nWaQ3jhbG4E9vdLuRz4p9v4NCR39hL6TEC2Rzp7z7h1tND1GCcnUWHTMV3FqmioHrkmmyS77c3ArYi6gGBp1XVY",
  "key29": "cB7MKwSmaWpNVmdG2UeUnzpHtq2waKhLxX5gsTPm2byCovAxFiZE76CxQ4GiCPSdZ6ribJMueq7zSzKLzBWH2dF"
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
