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
    "5m6tSDULfCs2yqVtH9J8ec3EKeX2js6nXMpnXUc7RaZujHcHonHv82z1o5rg1suzdiXZcxNUQuu4JymCdcA9ag8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42xpAEuebzcxRw4qcgnTTvSz4kYiTaDEe8jkKJkJuTn2qhGCdyHThXnUe2wnwwUr1GsoBYHRQpafKgma9PkB6aNn",
  "key1": "fKL4cVvF8nHZirph8Y2wKb1ghQystGVb7b81QDmEshvi4umBCGny1e5FX6gEGpdeuyaRvybFS2gTpUP4NRFufEn",
  "key2": "3Kz3K5VRC7xjQwKQgLASHkDdE37iqeG3MKhrWt85NhUWZX5cHs49that7SRE5AqyhjpC1ycH46UKMjZiTuW6sT5o",
  "key3": "2MmFs3eSPFczqeuKNQXCQwP2YzZBRodixiYWRgD4HqNmfLyrJDHt2cNDF2mvtYuu6bEbxKi4ZtZrqtYwxLB78W3f",
  "key4": "5JRwi42SnPh5JdKguXfULiRMHAk5eMucTYEAb8EkudkdR9PXckGSyQbaZSmSV97aNQihyyRfnaL1oWdQJhMKEWaK",
  "key5": "39XjyyYWX7siS9LcZqeqVBMWUhh1avq9cEW7nf5Xw4Bzk2SB1NrazDpUzLYmHgni9ki71bpDdXpihkNwXyevLQUv",
  "key6": "3kfoAQaaQMxRAisfhr9U1oiHH2Mn7rhWJdP9ro5XkdqoH66XD4KbDLmjLj1iYzS7TK9nsEZMrDeMGxMW7ECBxP9K",
  "key7": "3Es1Bms9Hys1DEuLRpYDC8SXHQmMJv9aanBzhMUL5gfmfmDQFVQaEQwsT9GH4PpA2KR28gHUJcrLx6Ef9xg9n9rd",
  "key8": "4HE1wt49YvUKJX8Q5FT32RFhEq9iQoP1pggj7tPbiXS1QFRYk1azUvjGqXJNawPz3AKXoRsUhHMH7w2RV5ZviPvU",
  "key9": "3MLqkTN7PaQibGv9PrHcP5jdZpTEB7VhL9AYbZ2pHPo9MkN31simdDbu2GY49m22vmaZnH4DmX1AbWwHfPUDvw9Y",
  "key10": "YukUesMPPbhB22tFhTGERHDgyK3NNERXuoSLaTT9ogpCwsomoNYvWLThTYwE7Ybsn9mDmTmJqW3AowcqH8zhHUo",
  "key11": "4aFPbFTKiPj4szbdeRNjbXzxLCtChetpDWP6a18mTkNDzrpVrC9UD5M48NDEfHL8NzTbupysMnrCfRNDiKPpGk6",
  "key12": "7sWMvYqjp5ma3K93EM28tiUEYzKdaFSrPM2nZchTvVA3ZGMoTeFSvcEiTMXguLeXDqymvcQnRoZGx2xRqFf1wfz",
  "key13": "5ydZ3wDJt5AkSL2VxtFnv8jBZbrysjjA4LYcQHqCAfSYNrB7KYPSxQY5EDmKi5u3HAjCZD3foDAVCGPZr6iTwgkJ",
  "key14": "4782Bok5quzLzgEKD3F3ogTWhXiMJZjAm5kXEjLMDiH4Tjptt2RsQkH7W8zwiZjvSHL8AghpV6zQfxJAhqcuUoMN",
  "key15": "57USQuMAKiEvpMaxVTpfxrySKFYtrLkEjV1KWEYCmdNzSemWQ8Cs4A4oK2qFVUKBKfacuNSTVZjJeUtD5xSE9ZN",
  "key16": "33kXf44x8oXrWwphTGt4wqRM9LE9p9QRArM4nruTLPqfgVjvzELovwTRTpWj8EGjnZp8z52Cvke4xNDN9MbGbb6K",
  "key17": "3qMeFmTQ23UH4zoydmmEGHoHtuTUFHYG5THoZSUSQV4tPP6DHRed1oTcjPMLvqacb33RTcGXeRnfW8eWuGUfjeuv",
  "key18": "4BQdKng4AkAxVEPyJ5FDT8h5hqeYA3PsobCnACqp11QdxQaE8j5keufkehnFKqHYGWZ1aUVLrVFS3U375DCKcdj",
  "key19": "5HRCFrDRkZAqMqjSZ51wN1eCUMMxEReJ5SwSV1JGRPcYjjBtaucUjhWwDdP6rifJkgzBsVRBNoDSMLpGwUG3QChp",
  "key20": "61HDTEPGvapHrtgFeTuLtbtjvzVHtrjdL6rnFpg2XXnto6mFM1HE51E1WTH8TPv6Qx4yYygudqNEofnSrJZcvjuW",
  "key21": "BfUdYUj1qG77DcuDrwqKSY4vyJfcznZKjnrkjqP8gvjUPkepyHaBvvk6sakPvAsC2PP3LYPcuX1n4upKTxqJaVC",
  "key22": "5RdMBnEkxV9jyqhTzHUPBfdemvQhdBu2jmmLbLJWqxrDFDL9hiwLr6ACrvWMPNNsSYBpac8WkNCac1ibn4J4fDfR",
  "key23": "LQWBgFqPZrc4TUmcmTwTCHcVSHqetvGE7WUqEZpzJBEz93QiayrZAtppvLyy7YzVUpzVgGffhJc39PpTaQdkCTz",
  "key24": "2CYM5swTGaVGFZCMwe5hrULAMXoCckWiQH4mdPfAaDJaP6kQwm16mRgNj3YWNWoupzbwpaJGZdmP7MxowLVVTahN",
  "key25": "4Bv1Bg4Ggbu8bbn247Kixh6MjQyX7qEB6hZx7uu57EroEPTTHdthmKqaz3svivr5AV9ecjRgpmfQZdmDWbKZVfaP",
  "key26": "4vLuNERkVkrGQd6g9JLhP4Lj4mwrpVKtVs9meB2Kt4oM9jSztjQSvMH5hYAGd3PsDtJkiTeXxuWJ8TEUBJZn6Wnm",
  "key27": "3Zt8nhPuvNNvdW8LqeSJVRuGHLVgWaVWQ8bD1EHSr7kZq3hd7FsUYF5bBBwGotKX1HiEpp6F28iAmYKqwM5EuXGL",
  "key28": "2uvgaiqYgjGXbLqeFEhy5jbtRnGCCKjZTup6ZCpzWio4q6beVgkp7a815BZsd6q6ZJ4nz9s57crHvu3ieFZXZrDK",
  "key29": "54pX326tT3RoY8ezEY3NVwBAujdFcN4ESrKwWJVpcdrK7L7BujnwWWBb5R3n1LNdCYjwii1rLdE2hTfUMQedm5kk",
  "key30": "2inXLwQCyTV3AQ5eynFdko9GRc1zzbYKzTARzmJXgwpj5Ln4gXhvpzTgGgNsf95NjgqGyyJcxnuza4B3L94RVzFo",
  "key31": "5wVHVfnBTGpCf5cuNcF3PoATBh7JWsneyP5jqVXkFaHQUYEzzTdDoedUQxvWWN8vpeCQovmJ842XCj2QP13xbL8c",
  "key32": "37G3G1Rrxk8P4oAKFkDsUBFviUWAC7TuwF4debv19N8MtcXEkzmLRN94WZWSYXUXtPfeCkiHjiye3N54XjjCjukm",
  "key33": "4qo9TJxWHrGY3SFkE5STDCWS1CAi5Mtq2uJrfSNw2v48UZAgKnKS3Q5rBxUCULmse6e1kV6PKVRRSBPXLD4dbat4",
  "key34": "ebJTgXtjEkPiizPAZc7Azgn8nsd9RbCvCehMxjTTTxkFy3MpSyxANsZJatpoqhDXg4dgrqCfw1YGUgNbLRsVzCY"
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
