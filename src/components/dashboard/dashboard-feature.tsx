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
    "2C64qJTLgUdquufUVzSyoYNRAy6hRvYGV2c8ZQ7VViN8tVtQ54nVS7jSqZ8Js837VPjz4HDoyY898qn1X3kfGu8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZhcmAQSJKxiXPoS3jfAwr9rA4PAvvLkXiw9WZUF5F6frb1HsrmqhTUaBFe3nGQp3YBLEti7SaxrvCZo6psQTq4",
  "key1": "2VjmgDtMCynjmxyXCb7xKEEKQHiWjRyFAkBE98a3EophAKiKKHd6ESCeYR3cNLvGWiJYyayooz5YHwY337KQg5SH",
  "key2": "646xvkwsWL5DGEjk7uzvvoTcHd3kQSEKm25455AR3dNJp9H5ccahoaEpPxnZqx2ZkPMULjM8GfHZyTdhWgrXgR47",
  "key3": "PaKezxPpcjJbvPQZEY7LeVfJ2JTQPxGdrSyxRknK3EpYvjCi8CF31tqizFQ7SNsvzdLMe1hsdW8P4xTCqbTXXzq",
  "key4": "4c5JgnpUuzPKtzB2sAqZxCkh9kC7M5oat4Gmf1BVVEi8nUJFWLRS1kGQjyS3fWNeBmyYh2Ly8CGMoPcaN24xvtej",
  "key5": "4RW44FoAMhKKhqJumu4YyNhoMtKTwTxU6rEE2snzRG2SnbgRV4JMHRWEbfQ7YRkgyx3DtDTWZzLoaGnVaPQEVGz2",
  "key6": "pr3PGnveRxvKeE7gjrdHrFGoqnpB61pQMBVso5CZLvjjXR6V6EN8wKYBFxxqi1y3CxwY3HQWy5eT2m3mc91Kg7n",
  "key7": "BakQ69jsgb9mozdP48yLYSSY1E86eRctZTEjt7ci6udk94MaBqTEEsoetLpwPG26h4VW4XxBooGTnphukthQQZb",
  "key8": "5T6fLL3HefwWDuaxEnhw6a1Yqq8HXLcfnTMtGX3tmGwtFwfDMBiscLmdVwPZXRLCDsApCbDqckR2cQYVZshiEcLV",
  "key9": "3cSMkU2ef5qxRVTQgdbaq6fArNukSNRU9cDhKwrUJDCScGnVRERXbqV91dEmzfeXFwCFzUoCUZcfyDBFxueUkp1q",
  "key10": "4ToChgRhYdWREu1ZEtJkjbi4Y5pp6sLQ6vGaCU3SgNXAoDS8hBXG8j9NPuRZFE2gHSk8gUnCVXscbMBtMY1huds6",
  "key11": "3pcsTFL5QcXdQq3qDnTQz9T3k3SxJbWgR9UQgw1Q57UTL369HoK27kYN6oUCS62b6ikNjjn29Xj4rmRtS591oHTq",
  "key12": "2MFFKGkq4S3eF6JWuEP1bM24fuoou7G1Jy2mAUsmDmo9ZW2uLuxatTLs7PfbeHLmjHXJMrLqaJdnropa4JFcCvrn",
  "key13": "3FVrJ9447xq3fHqiFSE22S7Z3zTFRiDqy1EXYW5nwVQSoBrsT41SS69ztw87HHY3k7Vkcenuknxv1B2HEifd8HVw",
  "key14": "2ja4dBtjwkSWdPuj9J4mJ1LFM2JkAVknMoHLSJJizeBotkvvp15XXc7AA5sroTH316RGTfBCqsQxoEQ4nogXsVRG",
  "key15": "223PWXhfPtn1DsscYzsmTyYoMQkUyoQqhHcJxKQXPjnXpzgo4wqvsjh7m5vesULnyKZ6ELy3vH61eR9jXEy4grn9",
  "key16": "548QEVqqtYi4xdDJFjXRio7pzt3jaLrJSSGFp85RS9B7ZpxMhWEobsMqUauVrnzEtggvKC1ZiVje5GNHapQiirYz",
  "key17": "32jW5tuijeoMoYvabvyxTH2t89Yx7uGKcneqz9bkuG1yAZBNk5eaLmyntNDmcBtkKXvCNBnYRBLQjBZqwCrzgXBx",
  "key18": "g9cHp9K8sD5eJzMRH8ebvH1y7DY34DpxgYoi2CAghqQ73bqGLbnspCde9Dvr1r2aoyKbFvuE5hmxUJ75kqZiaDD",
  "key19": "E6JGgyNvVuFcZX8JzseADKbxKBeGR6V4jGpHZkgf2AwnoV9PeyJvLmjvmsK9JSUcFyjktU5aWLWBCowFJkTZ7Lt",
  "key20": "MqVBWn48hxSX9HyAxPPk4FvVkXMn38ZE7gJJCCxRjD13jDRBGYQcjmdi7h3Wny9EBhnft4f99LJd8fVWTuEEDGX",
  "key21": "5yaHtpXEjLvSaBJsPVpiJBegzdtKwtcPM2NKEXmYJdhzUzY9LaMM8VY5S1mqW2p1NhjVcNWsEXKRSw6tQuERJxv1",
  "key22": "2X3nzZjS6iz8R7YH5Z75E77JLqGhg6iUJwE55H6AFyFhF8GX5rS5DTcZL2zFAz1MiuwsTCVbGRey6TEwMzfhfvt2",
  "key23": "4DYYYjNtnt2GWKFQTfX7juheRtdMLc7fDKYiZtobnJZqxmQ3NYhPxdhSLo172qsT3z5AeKy39xWZcfpJr7yztLc2",
  "key24": "VEZmMAVyKzSBJcutiS9Bu1XBz9w76o4r85v3dtLkyLBGuYZZLVjBCnKWcDh6iFYYKQbqNGsiPUosoJWLDA87Npb",
  "key25": "3CcVwxYVBXQYzh5NGEL9FsEvtvmfufZ2mWmwCSwjoCFq79VHpV4qnhqPBkfGfTvkfNfSTYfCVQ5RDXg568UceqHt",
  "key26": "4zSaN3erjoB3UGhCPJfGo6DBCv5Eq7bWqgWuPZBHztT2QKRHTQGc48LmS7NHB5JnvpCvSfbe9U3ZULCS569H6i2G",
  "key27": "4xdB1fMGDK1CfabvFsXW6DhWiD4vKvWX4oJLgTJ2KUVFCZrXu23MPDTMUdDTHrS1ZjJRVYLo9PowcEzAvqogeXZ4",
  "key28": "3AkSny92qEUENY266ZjD7ZAVNrVW7U6EksHZM34GQNy3FrTPaWkznTt5RQtpx1yXvA77m2NvCtEaM2mDUw1c3mVW",
  "key29": "Mw9GKeW1zkoSSA1URnLRAy7iX7HptYRj9zKbjHUkwYurLVzhgq8VSPC8Y3eVHgpkAk43BwnkXDjiZBY96Zqzk4X",
  "key30": "zonQdBiLP6kTKfJy4RMiFzTmheZkzAhgXLquDLHjB57iqHdAjx3TdNWxjsrAwLB9tk3ykfCLYAUZPNg1dL9SymK"
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
