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
    "2bcbN3PT1YTAmU9gy6YwEZ6Vj6XjbcjD1kUgqFV3CSEBUZ2JiHd5BbJXMfsH7NSc2FU1cBxhUmz2wrhA24agdkru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CuDhwSJCzz2EfwYik9XwvQWdybiHRScYrStGcWn9nRWTHJr768Ekqbf7zSWCZrCmPRbNRW8KQRS4KXudMGXFVyq",
  "key1": "9qQk2xsvY1Ueks5y5s22cU4hwmzssMPXapDAwdqArWLuZzvEHnoNttmSPzhir982kkvVsnknQw8b122neMhnbBw",
  "key2": "2EcKcTHZWAdM1GggZA7PfHiR6aBtFszbuwa17W8sWafQm1TyWua7fxc9Gf4C7jiaFEvgGkqUFudvnmEaCeypSr13",
  "key3": "qcdfagfidCzMMzVLHUv1veQFkPPyYwZiJQBDTdJGVnNkF8t7SyPy2BcZ2zvSREGY4eNUPrQUQy6n7vMDWEUoaA1",
  "key4": "4qrPbqS9CmdnpVDs1HnC8PUaz2CAt2EA5LiELMcyg3jeBpVTMChxwrYKXrnrfUkSmLcUDRP7H9kb3ETk9iLfWhij",
  "key5": "3W97tyrsNTb636CiicggXGm4VMEgrtfqnNJyMqVytf5sbsnJMnMVbgVWRAQQdGzV94mUbiq2QSRRpNohZL6o4YyR",
  "key6": "2GF7wNAvG2kAXYWVc2aXuQ6swDMMY5y9cfbZeDao8nQimdLDxX9G2bjwrkq6CdcXRMguQtHtEceej7sWFpMVFhfn",
  "key7": "2aTusxxRrzvZxCUXAfoQN9xQ3XsmNQA64xpDvMHc8FbLYXvfaKtnLPnVcjNNRy4gTeAptNNeWLJgDyVagQgpN6KK",
  "key8": "5mWqU8pHVF7RNyWSAib27NU4gb2KvHRRECRwa6DVvWC7Pjm9TZoq2bJNxcJ8sncg3uNLo6DoV2VMkS3Tb3czKsGJ",
  "key9": "4fnrozsB9CQaBK2vjqMyzXwFwVjoD9yPqS43XenpUGjjPq1FXmENEzX8LkDLkXPb571RxbPJLWpnELP5cxUXWkTU",
  "key10": "5EBH9RjBBGHk4EyMiqWzb1Rimm148Scgwwrr8ZTM7P1eAj1wXMixbB17NB3mQhY4awGJAnf57PWKacQdBLAsED1c",
  "key11": "4Kx59Usafe5CZwmtZbNWash61CPv1apGQLGVsur24E5iGWUL9rjcYw77Nc7VPugx91n3ND3p7UJUac1AJzqs9pNa",
  "key12": "5d8511YxAyXRtnhptrir5UT3ZvdXLYoyWmZUnkYskuFBJc9jpcmEm52NVPAAgcue9uZ229NdEJFPWXHSy2c81Y3S",
  "key13": "315fB93ZWJRcKfF4xpnRgj53gGQfzwinRFX4a7TF2syMsZXpqdQYGyCM5fmGkPa6sXR3epMqHk1eLpCKrmLqkAd5",
  "key14": "3RPn8ZfJnFH8op2YcmKKLey9qZPHP4tPqg1eA75R7L6WdVm3H8PKTb2eiKBQwE8QJUEBMpNrpw1KQ2K4CyjsZqR4",
  "key15": "5XkmbRHCZH4Ufx9AqMpYAXoyhvsznrP1C5w32xTGQoBdDy3eCiR3SsFQukouErhVC25HYdKQY5aqHyKL2z1nLJuk",
  "key16": "3oMbCMw6u7nBSrpNuN8wqEf7ZuzMVriSTSEL1DNjDNuyx3tJrbbpUcTYCae4ZGiKEuYrv1C5d3bE9jMve7gYytYb",
  "key17": "AoGbe5wf7StnsGHBvjQraZ2amVoYTtjqieWg2VxKoqpHd7wubVY2cTmYsskL9qv5ib4YgaVV3sQthFU7mF7kUo6",
  "key18": "2twW9kQ88kAK9EWV79Wn9PsEsxc6jiv9LC9CToB4HexErvbN7G2cUzbXrQAfJeYLmnDsgxPxtMo3NJBLes7vfXL1",
  "key19": "551wKnUQ4Prrt4GeQZN4VXvhpoGYYD71m1rnhYzqq6SoLhCuXJd2Fjpcd6mUv26LpXXrASYqKLbhRBEj6hH32xEU",
  "key20": "2rHiG5bg2gLSX93v4wo5LEtGXtHJsQWgfLRPVaZYQLZRCG8jj6CMXZ4nVaJSDvcVjqLhh8ywQFS7LuPYZSAQ6JCs",
  "key21": "4caSQjudKHYj1on3DatwnrHVkdtqP2dRBdy4PjrMmV9PE4fAzytXwTcfhoSrAacZnSmGomqBhFyszxfGv71hfogg",
  "key22": "5k6N7mRKdsvUDAvFw97YtpkTL46xFztmiRTAquQjFSXGahsC2sxYk9gERAo1wMfuwBj9zh4rfWJjnG5Ee7SWcfcQ",
  "key23": "5VSvczBAoovTpVhLAJNdjMUcCjHLQZ7dEe1XpBSK3D1JeK1E81nxiVNp9HhP1MZfqR9gkgv13Rzj7r9TZFNxq26U",
  "key24": "5yhT7ehK21S2trCYHfsr9akakAh18q9sxT2wydhNtvsoQhMR8m9NbwCKeBZUKdptRRRDBqv5YGM5WWS8EBZFSLHj",
  "key25": "2FZydxsZPYqjZbWvVJ9bWoGbMHVupjL3P3LeNnNyngHuaJm48rQR9jb79uSJ6vZk4hQsfq1MLU7Siiyhc3AcwCB2"
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
