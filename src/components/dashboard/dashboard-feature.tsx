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
    "3SnMtYQtV5pTou22heRbZ2kTPj9UpdyuYQzPBfsenUoWRtWRYg6Y8Eht2BehZFjF5o63u7U6mVSuznEVsAsxHGyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMrPjd3pjdBXTnYDaohCSeqL6RVkCnkcEP8YK84BKbB9jLvvDgw4yNKzk9NTLFQGzr5DhraTr9T9Tc7PLumW8Gv",
  "key1": "62BCjPZthUojjueqkzGNd2mWaz1nHNmgBE3SqSGin2ncarkN7YySW4jJw9TM5wqUAEdhwqx8DxXARVQxp7PvALBx",
  "key2": "4iZNKqEXyV1HKZzE6cW2i8hKhvWY17FnzwM7wGFMFDUss9iEAcN1xFj6QSazWrbuFkeD4vA4EKuSU4KjYXBDE1GC",
  "key3": "2JQLSAHAyW8dUBptju1ZcD3FgdTEyS6jK4ABZo4RRvCqngRatzzkyNJgSUQwmUxFj4RCwY7VWgvCyE14dYzqW68b",
  "key4": "48V77sgCMrXRbRHDM4EkJvadC8cKDvdgZ3znZ8SJ7kNg2pUPhufzHXcGX16fGhQ8taNcWLqb83A3PWR4PCafH3K",
  "key5": "3W1RsaUwgQUZngZnPHSSFP1WPXzMHcfVG4rUShqRFEKytZYNqjr5Yx2BMrkrLBHhmGqXqk79Y45xRn483x5Qi61W",
  "key6": "5TW9vKzU5grd5wjkB1DDaajQ9BuhqhfhGiisiasV2LaxvSagvP8htzyCcRo1jwZcAkzNDnPPjALdfCKgqAMLsME4",
  "key7": "g2pMZvcugVK5SVunLAjAkidXRBXnMe8sUQ4WoKKvuonoXrnwGWgZo9NeS9guuwkHQYy3jfnhwRGUG4AJZiM8Jdc",
  "key8": "6xhqSr17qt3WSwaN4gmdqXf6wSnGXQKijBQUFMZxgZZCrsGatn2Q6EDbmvo4qixkDoARwjbDsfDxfzguTJ5fbEA",
  "key9": "43dBbtAnXvuv3EqumDpyMUg64ruYZPMckvRE79FoBUPakp1jXCj9C8kuCPEXkfYreTwfSVNDtGM1NceJW5rtUtXv",
  "key10": "5DAvsB4YFhVrrz3TwZz7bUzFnRKmMcmkVWPZU7WyCkEzJw1WgNoTBpcy2pVTfM1yVZwUUDvRxt5duGrqhVBAM4C9",
  "key11": "4qPmQ7QU6jUXdWN1RjRXkF8s3jKNkoY5Z3Bh7X82bbhSEG5QhRhoMRj7Bd8qwNgdLSJxxT9oWpqjo9veAcGroAt3",
  "key12": "356RDzcwUyFDQ5KpU3BjFEpQSN8SnkLWcFHpxU1PwPdbafZQd2p5dnyfiByU8BJGSf9XegbWgB9rLoDFMg9RKY21",
  "key13": "3DoKXaTG3d9Duy29YhQvCPhvaR9xcVVNrm6VBdvmiVFoStqq33UdLmw12pkZRzhKE9dVbVgavGgh8PSeM4D7o2gj",
  "key14": "5fzm4v9ysA7UfUQzYmGCruphtj5zZLwAo96Sk4iz2zxYgCaFTVdfAsMxvs67gby585yS6jrPNa1qei1W4nxL9B38",
  "key15": "UDMGDihQp91Km4oDzk1cqzbkopiec888G314VY2A5FF9TzMWgHuu9MeFPzZtjVs8rqsdCwUQ6Ws1QfDRGCFbyyF",
  "key16": "LDeVyTvfDHCFvAuVwAs9ApgciHyPNm9EPxyCzZcRU4tRxWfExkj5eq6gCtPCfey8DmC9cHLZgBgGFCdCNHv1AGa",
  "key17": "3PHNih4h74jAXm3d45uB3BSXBvAmJEBeVu1nivAShrXxyFFSuZbRQxAwbjXsgbG54HzJrz47yvdzbZc9o3KkUbZg",
  "key18": "58NJez5yq8iUummCMHUsnByzuAcPWtRP4Y7PfnRANmxmcdnufLrBKcuzYPjpn9LAA1pqNT6UqPhGFDN2hbbvLBWZ",
  "key19": "hozLWjDkncmPqiUutTTMzeQfhxu8AHLvm3Pep8deDtAnMcNxoQWi1zkKfDy9Exp2SmGXFuey3C42HxiEm2mFbh1",
  "key20": "2xu9oe1QFPvWZj4uqZXF1fjhpkf1Wn9GnrVFuTP4U1mAR3BoCH6Wz9hKKDWacWEWCoVSBD3G2KcCwPLseHqT4SUH",
  "key21": "2ogCWAebhr49oPyN3V5sfRiM3Edj5tByXuPMBqQDz8Ef2DcDYzR4SJp6BUgrYWeCsACorRv8UKc4cVM2hvdJax6G",
  "key22": "3WwiBvtWVsRwXiS5NeLeyg4eZK6JECNGY5TDKiAVhPLJdcdduQ132KKSHB1c4os6D1aRbknRGMTaPZWLQRLneJKZ",
  "key23": "5XBZWH2ZBCq8mf6NPX5RNKkxojWick59TuJtc6t2j82wHV3g5Hn2xbCc5MxgkLjybypUFJc4WAFL5vP16mvuw53x",
  "key24": "373m3dFB6jDdNGXL3FuiGTZkpd8JimeuAgKnJC4KmyPQJdTVq2iup592YYUjhXGPfkN3tS56i3uFYUT26ee8c4cx",
  "key25": "Z18DDkXUJTApfFq5b8CkAvxCbRSrRZigzki2ubKSuH7FufwFhBkAWg8aEBQbj5xt5boyHjunU4x92yD8JuMvEHm",
  "key26": "2SZmUuDgtvPpHr6Ef2rJDM49fLAixvhGDiUd1NNhnC6S8ABY83NkZbCctoQpJ4W5EyTREJwin6otfqo9dDJpiZKT",
  "key27": "4tmWPH45s4kur8V2bG6xoNpgyScQAvD3nUdPJXPAXGZXRGoMrtavPxMkiF1K4sradHt6h49ZSXVPdhhgHgbaYczk"
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
