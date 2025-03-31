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
    "3optfDTF84rGAY2tFTy5a3ooHz7fcgYV369VLuAPcygbANJ9V7kXZD4V3QFZHb2aYmVusQFSamRCMsBtVR2FeJMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yypaE6ydEkN8GKhoEcpTwBEWPobpg5WwsdqAnTEYqgum4anF1uNWeTwyDrHMQ42V2JJeUJqLhk3XmBNW6diymAG",
  "key1": "4Cobf5GCuJjJX97yebsawvPod72kdQai5eVWzoxzSBvAeNarfa2NhT4SbZJcAD6ZpD77HpWKymdz6JxvdyejtnRW",
  "key2": "53BS8ihvhYnUqfh9W4aDUVB8Vp4g3fRfg56ZU8XiMZ3xYkJXNt38XqJ5mwYTsPSayvCiZwyYGxZFLZodh6TxWTjy",
  "key3": "45V5cPFVZ8RHtyBkz3P9XdMuswXekoHccbA8eZc7NfJTSd5kcPrjh1HEXN915CGPLhrv5tfyXg4xpvG1Vb8p8XjP",
  "key4": "3E6qWh19dx7FGaMwgsqktXWfSRBct9SSCfTQACu6acZmxaa1fHDL7RRfxCbxGbAZnJij2k2c3voBHRhQ5HiqRCWB",
  "key5": "5S552Sr5fnjtKo7vMwp6DYaPmFi1HEvuB9gHxzUW5FoKPxBxSYbzdWs6SvmT8wh4JhVahjyhMk8z6VPNwQq5xnBC",
  "key6": "qvQwTK6x1QhhKs4V2jE9PQdTAH7kJN68WRNrDj7WgUfu1DeduD9WhrHje8zUXixf1evb7HhaFoz2Pp6wHucb6K4",
  "key7": "2xv3eZK4fJEHt166X5eAHjVP734hEzhgYw8Zj23y636VAqEoUtH5kRUh4tbnmHRNTojNnbXeZA6VifXftiLFreDv",
  "key8": "4jm6duWi9BYHPVh3LH233BoA3QkMeKyfxAnTZ91vQMeohJtmD1RAUJa6mR2gFar82gcwZ9VQ5KMVUBnB1opfZNbA",
  "key9": "61vz93LqzFXSYefLNwjaYm9gKzpbHVbxwBj47BixUE618jSkWXMbmaAYAsFvSYZHwDaEGPM76ENL71nteitmFwSW",
  "key10": "5HxT91DS6BB1isiGZNz5KeR4UnufSkQs3XER24Tqj9L4bAGLEJ3z9UXYT5fC9W4m7MZXCbvnkdqd7R1uZWhEUC5W",
  "key11": "47jggk85vU2a5n5xiEWEDSBM9zhwYWTdssLcXQD9vD76zVDUoCnap5sQxKEMExbMtj13nMDEMPBUh2TN2YfG5uWw",
  "key12": "3oNJ66xjLhvbeCLPoS2itCbx31y1BtpozWxzXdjuNDzDZG5uBNyaHQz8Mxjd2C24iStND3npWVNnX3gjwuX1yngu",
  "key13": "2Vmv7a5fuPmaVSH6utYNDEuWkhWHR5HavJB3vhDDaTBo1b1iGHCbQuU4PMR2kkLCuJspUAYWwGrRijUG4z6aNvSC",
  "key14": "4Mob6wPhGS8tEJBURp6CUovG5eBXuieF6P5FU3CjsHEmAFXhuLXw2DtJBzYoKsGuxyvB2DkQekm3xDduXDmmWaVD",
  "key15": "LUMKcBAuBgPhaNF9dmN2XDGcyYgjoo1WAYXMo6U6EEdu3n3S1r5DyV63vkZeMUxbNda9LunA4B9mdpfntvZH5pW",
  "key16": "fpkHQnJuvHumf8xXAZTCHZyWnQ6s4MmMoco8RZuo3EVnokkb4XTxdmTvkm3JbCs24z5KY8gRXK3PTdpUhviNVCE",
  "key17": "5cQdCVnUmpi9CmRjcju4QQKQnNKKMbxzkYox3K1ggiDemrZp6izVJzwhkoaTMncRttfQycUbBvt5AmNKjfsRdy6Z",
  "key18": "5S3s1m74Gkq4tXqpmFuP9zZ6SM3DQrwmH6W12zwVG5HzMpFpgy9ksQ2PiFzjmohvFKrxAMYxsJio4PNmhaHXvTzx",
  "key19": "33cFbU7F539Hevq3koEY2CBj1Va46oFXXhefFkUYyprT2GtC8bzbNcRKTfs7sWzFwup6B8PqYhfJ3GYJhXLRbJU8",
  "key20": "5FHwG19nJ4xvFEGX5MHF6yEz8pgZj5eXZyb1V8Fph8ZXRCEoUFA14aMs3DqC7S6UwqSW2LZxkfHVW6BTgcGHxn29",
  "key21": "4jj7ij5yabEpv5W3gqt2XMiAjxmuBGV985XfZgAUvxaR66ugsaYHYeafSz4cShu9b1Dqva7wFiX3kixwr2cjdbmM",
  "key22": "4TyzmXQ6fGEjCNKLAyNsAYo9KNy4A6aW4iu77nfnmqr6NaNwAVfTuWT1rZKQQUgcQ6Dtui95PaVxGCYoBc5E6fXb",
  "key23": "3uJBH8gavDWs9g9GXUusMADJTyQK5DzoEYhWzNk1vcxjaCJH6KdrkYqYtHrJeqx7AnAbQXNaTLwkwMzNrhPfdJAk",
  "key24": "3NFVRYm63eKGrnKM83aKxPmQ8SRyyDssMrpTzxnfUX4iU8MtFjF46CQ2zeH7HtZyVLxsMtuBTZPHf9UzmysqsFgM",
  "key25": "64L5GssDWmuXWYw577MqsJfA3a3q5dLGh2fFpHZReMkLtrmMB6FH9JRCHMo8gDDoher9q2b4Ww4pBJzgZzCGieBm",
  "key26": "5KKs3ZzAJyCSqYTKi8nSDfeY18DBzAkKNwUw8tqBnGb3A3eCxCKXGbcz9e9LniLty77TXed4ztNSvvhjE2UqVay2"
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
