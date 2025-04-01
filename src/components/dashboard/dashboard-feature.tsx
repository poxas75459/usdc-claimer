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
    "2pLCZFwt4orivbtjVzCsQt7yAjuZ1QCMsfcUpEfCz52kMB9gRPHJDJiaVKSciKMpVWD66NmssKA1QJ5AZTYe5aJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D1nWcDxQiERTcNNVjGEt9FXP1Ddg6aRcxTHPujvQYT3dN7w9n5oATDNo2T6KtbqtWiG1w2sKpQ8di9CtsFg6ng6",
  "key1": "3dHKQGxdp4GnQQyVX6s8h89CzMNgRsTrd3PqgpruavCo5PFjmMWbUbibjjWbVy5neLZNsBFMj55LekXTi5aMjxeQ",
  "key2": "5wJ5NJKns5Nz633SRpjbHmngos1kNKbyjSWA9Jb8BiC4X5fmBc1zq4nRM7yn5LwVYb86DER66ywp7qdp9WZiDwPd",
  "key3": "5oc5J5foKg7ZjgKWecLifGxXbyTL9dLySaLEFgSEt8A8TmvRDAQVgv2F8ayhND4KZcnn4kqx8uMZcpC9aLcpYs5Q",
  "key4": "3zv6HKUm2YSrtMXnDWdqC5HYThqbsjXnMMrKXYcc7LoqZYQnEGUuxYBosiJyn31s4cmdXeNAG1BSu42tTH4oVju9",
  "key5": "2qbC8jRT3aiEshdQD2nrEDTraXhUDRywSZeDojouu2vqeFfRdittbzQCYqDQjU2qQVJtyvNQfqaB1TyA2TKaRWDY",
  "key6": "fzdGDsTRzAkiUdTC3TmpkVFKArCTKwTKwVrKvNm6coGeUhqTBxLwHXseAe6TdhsWpNAQc5nxdcgQgUn7Mjz5BSk",
  "key7": "4k1ptiShVPW1fPEWBYnUhvBDTbd4njCrhRNGJdHTiespJExdFNf5YmT2nCaEhPoBoXRb5H3Bwg7CWEL6YpBiQp1i",
  "key8": "3SymvGxpnGozmSaNdsi3WinbT4izcuCEVsG79Bq9ktEUW6quNnJsghkxKLscvq8WCocG8gXzD5kHUmuQ4GzTkVxM",
  "key9": "28FPjBDF9Qx9BURJ6cHdH7rTE2pGEuLAJn4AdN8oMj7EdG8ijmFaFN1mcVhFZ1AThSqJrKF6TBxmRmHHpEEn9VNN",
  "key10": "3JmBosgoLKjWarQ7v8aq67mAoBkbKenqGVqZc7rMyRkXK1dTwNbzfF5suQnmKmYf1ks2GXQtoXjri7ofiFD1qV5T",
  "key11": "2W6FCh5f3gpZmBxidERoLKhAsAE2bQA7fsaA6YKZT9wXvhWbq7bQz1oZ2XPoXCKfcjMjddimbD33ogxzwoMxR6Zv",
  "key12": "AycgBLZeGPfP5nPEAr6dg1EJEm1ehKdJZMRyPjn7csnHWYb2oR2R8AokF8fkZi86jbimnZjg4X923324pPca2nZ",
  "key13": "51rxyPyPb6rFjzrGx1rfYx11vwddHBGWn3C5r7a9itNrz3KYr4AhUXdLxLzukym4YvWPYs3oLBBc58tYsYJJVKFC",
  "key14": "3Fx2xavh4hGzzaih1aCWYG4EKdhzpqXmTzzKqfaFJV6bnZvqtZGXDZnyCsV8A1sremGWK2ZrE2A5ZNSrYyNEsqVm",
  "key15": "3o8NEThp4Uch3G4sX5QAL66hTE6LULnqSqSpCGZCGSfWcR5Ge6kcpVGR6JvZTQ2mQXB9CvkjYijYGKw1FwZ7yQy5",
  "key16": "5oPkkWjzFyrr2hy1hhxda5WgFzJ5tVSJE9e4T1d9jUB8JB3RVXGJc9g7zmPNJU6JexrrrYmabCShKZwXbfD4g7of",
  "key17": "4yyb3aDfqEq4F1t7srRCTveHeUsTXLuCR93ZfGxBntNPNWbc7y8VvAQfVF1LpbCmyHxnvosDGR4taMygB2yTUDwi",
  "key18": "2XZXGoA4RXLoU8bahPqYnUhFoqgHn9RL557U1FbK18P11kwmLbAS7wyHrL48NPdZhJqLS1F79PzWSJQ4UsPk1JCa",
  "key19": "2XVpmoSu4y33Fyn7CtHSekujueBo6u1Bv34r5tBxp9SusFrMrQqmhE4d9GqC7siQ4GjpQgdiWJdd3JvHGRDsEJG9",
  "key20": "2kyRxBUDAKFcRX9HfW9M8dn7194s7GSZayrYeeLMYABv3cTDgQ6vKPCZrrEats3xVBKtA22qHf4UPod16bEKWZmx",
  "key21": "2SJ7d657BcPPpi1UnJyDXTWMtLGumhNh3CwNEM7ttHNHNT6rGG3h4LHjCpSEb2ZMboFTwsYRBsQDYao9DzK4jBgZ",
  "key22": "2YCgvigWe6bGaMcZX7AoDhvftxbN1ayvb5kTNpzfgJx3UkDbUQsNREP9Nctj275dLuHPJ9ejcFv9RWLXx2XU5qeh",
  "key23": "4UTtZyJU8WdWLVSrfgB3VC9XqWAEuEvBaChCWmFWNthLUJDSvZDpa5jzoLdvWBiRWji6cAe3Befigo724ciMqz6L",
  "key24": "3E8xEmuMvBNGsvnWWarh6qtXUPCkn6VWjpSu4B4WQDjw5LpCKyCWDsyG1iDzQSzAKY8DYThnu6ohfBuneQyFM8ry",
  "key25": "2iJ7ppGPrS5Zd9hq2Fv1SPmDdZiqXsZxQh1bW4RAbj5YzLEiApyZXoJ6psfE233SkjUBgWhSWiE5Rx342CwcdDQ5",
  "key26": "mSDiv9yzmRqsyMJqSmgNc8ci86RwANUDaMFprgcW1HYsBYSxbRpc2xKT17WY2W64swVF7urSGPTz9g9eMbBctjY",
  "key27": "5qCrhxShXfp5dfkERNkzLKNPEda7p3U8LDPBAzvpEZ3kg9AZmsGdhdGKPDFnwnH7NeTB3H2EoWNeSAYdGQMsYiL8",
  "key28": "3VRmBfRsJrJhPEGJAC6wfcdgUFFpq9Uv6Y8LmLTY4JWs1cAkrsXtHtt1jhfN7dygXY6C2UW8Srp5r5m7eHbXxxxK",
  "key29": "5g7S3mXnhCyeS6rj5wBZjhRtjtjdSFz9hzQb7e4cQww2vPzockU87L4NcoukrhWL9fTFQCLZbhjyuD4HYLTpf4g7",
  "key30": "3Ces6b85jNnv7FvZQhbiGYPJHcC6ZuqyA9kyPsSKqBcDqMDTKxkFEJ9ZLCXaakmoiiheoe8FfLxHvAntYdvN63Fc",
  "key31": "4BQP4WxbUVxPUBPr7hPHXE2cK5jXbGUYzH2vDVgMgXvr1WVuV3MGdEbRQsNFxAjNqFXd57pYq3SXrtPSfqjjtMho"
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
