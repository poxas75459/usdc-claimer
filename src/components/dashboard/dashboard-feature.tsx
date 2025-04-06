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
    "3YCq2XySgP5hSyXyHafbY6S8JKyWNnJkqtY3f77Yh5uRThtgnE8PusDDLd36cnkodKA2kqF2LVoUkZmWjjwDJ9Yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FbrXX1Y9F3qrWssabTfxTqfUmVZohRHVaWUpP7ZixVspuJQk9bBYjjC5GdodeqQrR2J3v1xSLeJdvFvL5zDz9VE",
  "key1": "4SnkgLMPGFxkykuxLtjJNHJ7NvgWAn2dHs33WzsHGvcxBZsfXeExwRNMh4CpinN8hmexu17hZkUvPZkhGTs9godr",
  "key2": "iXFS6rVut9E77bEWmHWHu5TvLnPWgBJwdf9Jgif3oT3pQ8UAUaezsthffVDnHu5h8yPA6k52m9uFLn9XqkwgtUZ",
  "key3": "jip2wpZXH84hgkeY9Ak9fneEAkcftMDBD5pjLSj4GTTZmu5ewMpWeCNHF83M4iZTJ6FaN74qyViwzVYmfxd7fec",
  "key4": "xPnZYYGJzht4V3MKDR23BEcMwQfpgb8XneweApZ2JfAC5QcvHw5u7WVKZatZxgVjaYHLCwMX1ciFvrKHyyZftuj",
  "key5": "3D6yxaGB9tS67e8Ek2fZdT8DXUrDy6aavJmf8bnhdfZNUZwkozqex9qM6sGehMAzvh1CSsBASyJpwphim8pBh3uC",
  "key6": "2wF9A1f3mRvr7CzQm8DRdZBXczX181D8V4hzs4PrKuaMtTuNBp9PChVkEdb7Nec147QSkYGG4MHuUtDJecQJrpVs",
  "key7": "4M9mSE5qYBmKwz2DVKeGkeVdaNftbHFDB5DJ1Kr7XKeg53VA4YwuuiEMGhiBXdXcKJgKJoqJrpwxYuhQtVseHZn8",
  "key8": "2PofaNhe51nMstd4e8YL2GfHRpbg1eXYDArqnKNKcjF59s59RFAV7RGsMgkZt8Rx5uxzS3RJmDY6QuTRjoSY78Aa",
  "key9": "5gQUTEzRvnNQYVpHUzF9Bro5j43T2xpMKM8y16FtC7UhnaSfCpmvNeHsEyFyWGXHc5JmJhRv7rxfFngcB8k2BE8t",
  "key10": "4JNehfWFS141yeepEdik3dWHyqvR8heaA5BzYDZkffXKLs9HwnS4kp3P3QkTc4C4XqcktZpnvvzkNNAL3sdf5H8U",
  "key11": "36RRYtQ9976fQWqmK86cFSEFixPYia57Dk12KKA5q7cWKLwWgJnUGE4eYuEE8x3JvLiVbGJGVMkubuKp8SU6XPVS",
  "key12": "3deFzcKkdLeD3bhNoYapXcMt6rTGFMKpEaT6g2bCqgLhbuxyLN5513e7w2einf8Rob7epMRBgRWKxt3RFQPzvQWU",
  "key13": "NZvb8VPPeeCQpoxhcSpSeEaLFFdcsF8Sz2KLeRsP8vwqnD4sLiCoaTTJeZwVGLSneGNj2MrCnvPBUSiRrHGyiUF",
  "key14": "5Ad8in5hr5eoPT7U826A29nSSyennmXuecWK9w4khTjo78AmMYmnKr8B5fB4rra3aoGES8peVHG2ZZt8WNNetuV9",
  "key15": "3AMtntFFCf6oawezrrf5WttF4BRvU1nuBpAe71KJ3uZDTvs6u5RRPyuWbgzPqXFAaDh5yKLzLJCHP3xvWebR34nU",
  "key16": "5WrrmqisYvL45kMph9H7dd7p5xjT4DMbJLUke3z25Spwxif7cVajcehH6XFvbvWXJ8fJ37cWKCi1mWLiXNoNtFTN",
  "key17": "m9ZBPfE3cBc5CLxs56eEj6wUWicyNGCYQ4TKDXjLCaPyyzEZg6soDqXPrTFuwzkJxpXQehQuGGKwAdy1RMUW2Xy",
  "key18": "o2EgjmCVJLXUdyqko9W5rVPLtGwb7g6EcuChPJha6coWZCBBxNYbU8ZghfnqEHZHcykGXw3aYCqnpGBpsTxdkQL",
  "key19": "3RJeTSG8WgdxWFs3GXLZbwHQC4W7hFjw616tCeo82T4Jm6oZp6ZZu6jvt11EBKPhVLPohYYiw5bguxJnVJdhLuRR",
  "key20": "4X8KNv1ytYjpKqgHMVKRTFq1NCv8xUiseGmLsuBcnCVid1MVQXyYZCiCL8Sfpxe2nDCv7to7cF74SJKvyvDFK5qS",
  "key21": "3myGsdEWLDR9LQ5ofjtf6nSjgLiGjCxhmncVgzm7dCsAmpL81DwSccezM7voksUuvuPkVpN42isWaPZ6rb3NyVUZ",
  "key22": "2NedQENkyNjhUaeo3MfcEKQMx68N2Q8P91cTCUKEQ5FZUqiBqZj4fFqhm3wejqyn7hxhiDESnUbGRYRk5T83MjoE",
  "key23": "2ipKcqXTNo97KKUDP6gKwPHaMoPg5fgtWstUtEkW11bcEaSjbSe6xU4NVX2nWjA1g2Xpf9H6iP2KpCiGbytCXA6Y",
  "key24": "24AYCheUvdAE75xXWCSmLJWfBXDzyR4Qvej2BeAzh17oLYAmWfdiRWVzaaqBP86bQfTsuCNbF8jGorRN2GYx38Wf",
  "key25": "4HStpYQxUnb5d2Y4cfKEpukR9RHG8haFSBuZ9j64hJJH2TaNafrPpnQpKxMKngRGkkS2AfYk6x3TgH5zJbAtJ2ZH",
  "key26": "55S9SWsPj9MHmkncksrR6tGXVC6HEGvhpQqUUMMp2D5jGHmaYDRCJxwmPo77NU2RhXvWWqNS37GWQEGU35f6Tzmn",
  "key27": "5iobtMse6wRbD3gFpUdQgiBHD2NjhBT1jkBEEPdQb34hxfrQWyc2YVtXMboz24Vuy1JvaGNXSwYVivMc2jKct7De"
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
