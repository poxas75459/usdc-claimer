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
    "52qWWbrC7vKW9bSdLx748Dm2NiPbb3qFZzXqg7Ro668t6EkFY5NTwgzmLnKiyUwRCMd2C1uf8sUXLYeaaW5vgLJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39PnSSwekrTNQjQMexezHxrTPYvoAxy5ATPqPyvuXdRUd84TKMBaR5UUEGnjYkh7XmA566FbN89UsSKTvJWNqozv",
  "key1": "56zaBXVD2umHGSAbM25znQ5STrKWThrPDShr2D9rw9d5Tw268sqWmVyYiJ2S8gBPgKWG466RT7qZCzvU2nv81x1S",
  "key2": "g9nG6Yj19YVAHHPrdsZtUmCnVbDniNhxWP366t8NX6rmKgExhX1hTp28ALLEWBe5LHpbg3ZGGC948yTZ2M46zRK",
  "key3": "3ZBsyRuFnLatBc1BCQoJuu1Ha9TuHAcmrE7GHSf4v27ASTXL5yDRuNmU9zr4mccNa6YvJme2yNbKPEYdentxcTzb",
  "key4": "2y3va8C1XGcZANTxacp1TbSP67ogYtkaR4Yp8BPF1LkBSzA8XWSdGUeEqRhmotQCyir3hsN44tRDyXB6BqKLKZXb",
  "key5": "5ds8gQjhbSEU9Fa2Kz1E3PV4nMBVF2qfvu13k3WvYK4oj1XNAZCj4Tf8CYekgF2SuNTtDr4mXXtKxS2E7TNmgjdU",
  "key6": "4qFNNUVZe9AfAGq95MapkgMP9uxEZNU7pSUYnKbhDLsUdksdX2A9LnX4p3ZuJ4oi1qy6GuE6KHGQETvGovp5UjuF",
  "key7": "2uaWESP8jABAykXjBofTUVGZdDYBRqBkqfMgLUMNTboCnusVrv9FzNnr5ZYsE5u4AVuTUH6iDUBZ9QpXEzCe7DCQ",
  "key8": "3vFXgPtRxxw7DTVzdkCAfTGNYmPjGfawjPQQPqdNHLTUe3zymqb93h8M7J5kLNAyHsCLC75T8RE42aSvnhqLab2M",
  "key9": "cU42VRUEhz8miNB2wiigpLXm6CP9XMYDeJVtGE16PVC8t1KJFs2ByHS2KmjZoSA5WwS9BhE2UebsNxbdLhePRTo",
  "key10": "2ynxMBTZThw2DbN3zAzdb1kkJ8La3SZPdjAnhSeBBKefCbbhXP5ndbhyJSmniXwB7EgMaDBJCNLwdBU5zUgUm3vQ",
  "key11": "34FKQMBkT3sMi3pFpQoDRoVbxtG7hFiXK4JubpWiwkyHUs37spLFVNr2UqSYFoA2gToMRq4bsi3uMuLboJzrvQg1",
  "key12": "4bytP28BzwKifrEJveoqt9cThUzWVrdq3QiFRAZGQXPQCRn4RNDwwjc3em3Q7rZWfS5ALFSEe2dVEEUN6H9iiXv4",
  "key13": "4zio4fvxGeSr9anDThWBLZf7WY9r2Dv154HU7hpm4HuJ2HierfmhqFxS2PSBBr5akyb9krWSuXEj9Yoi7FxtfhQY",
  "key14": "fC3H2XLd5dSh1e9GYyASiLSCWqYme6TyQPhGA3gaErhvydKJegpHHz8Wc7JYtA1ipvMTW8Dvt7iF3wPkqCiyCAy",
  "key15": "4DyXF1rymySpHAWUgWd1rerQkXbxcUMwjdVkxec5TZqREQh1ui9VEBJzDQ8EQR9tfcZuuKL6Vs5URpxrYRkdzocL",
  "key16": "9XXg5zhzfRH6jL3BbtPKNdnViYT5gsrXYMhoTna8VkQ3FwuiJ3wknKnWmUkNG8FSJMXj2etWrWJaZwrKSCcpopr",
  "key17": "55UzMf99LxU9dipMte5jSZSukkCWq2XotzkEjWgZo25ieUVGhNd9QdxEs9YoWAiLr8HguKYi8ynN4nvATFmpPAo9",
  "key18": "2t2f5BDntfCAADyDAcMtcqweHs7Hv5raqkVFeLosMN8hmG87Si3KXEJMqoHSfHuqrwJ4X691GFfKT3p1b1Et3vbH",
  "key19": "3vLDccyAaKicDLev2dKsBUMogWnWEFxVEqJaRF1DzxdVNNbPnmvm1451QcUEhKyHdRwzmJ8cThGEgFwrifg4QQhP",
  "key20": "5Rb6KD57c7kTAMpVKfVxGMCcoexABum76Hiw4twqAj2ig7ZRAZ1NKoaNVqanQ5X9KcXbWqtsBRkrprGwodoBJDvb",
  "key21": "4Mhn8pbMJjGRk86MWASynEMJMzpg5JZ382q2TPtLAmJ2SNw4uNVYAnBb58N28JUbjRXvXRFkPJ2oYPMq6785b4rp",
  "key22": "3UFoMZy3eUWKZzFq3USb5h9yRx4c14jQu3ZC2y4L6u9EKBEdvJBTBXbX2ZbpqFBmrrKCQMTniyvnJvf4dz1kdcX2",
  "key23": "5CcgbcNcUKrFSe4DRM4SM2TDZZoxpgi4EANXhEGJs6eW92ctyypVZkZmZY8RomogwaRjx5hYKxME6xaZYCPwXpXS",
  "key24": "4r7tN8KeB5ig8CfnoM4jW5oDFvYBNmnnYn9nGcRekbURU8xih5ppA7zBUhLFTKFdgvHjUbYzrjo2McvRqko85Z9n",
  "key25": "YPMA6eN5KohhpppnYpgUHUyiNMedJJD66zucVcjeJCqKcfC4QY4yS23SznbhUkAK6uBi5dXqg6KJ4d57Pcf9TUP",
  "key26": "2WfveE5pRJPRJtJ1JHT1E2WWVyzKQyHEE1biET5q9K3hnEE1C8WzSaBz2TB4en1uSe1np7K3Yzruz7G5dEo8rVfy"
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
