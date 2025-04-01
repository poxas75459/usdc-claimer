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
    "5bmz22nRk9NDGbqbEdDsyHJwzVtuJRnvagRRcEjYo9Mr5FT3uobLnSigWnPj36SdyKyLVeTn9Q8xejLw4jA9KuoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bbzTpWMDjM45VNSqFoJtE4ZXmDZrn1FVVFieDWBws1RRKrdv4eSFmwKpoXtBubnaWnCjHjCcSdMgaup2UQ1vX3X",
  "key1": "5PGceknSTjDKpe9P4YeaX9xnezNB4Jd8TxCpqaPAtMBa6iQhVSAMUkDTrSCFHhvxJPKE4aVWHXkFoMQoU6iSe5Y8",
  "key2": "2wccY7Avm2tNpRKrFoP816wWaswnCdif9RABbi4WXHdVqti97ejw6bAR273WtkzUnL7vwD1DiFP9zXfGYWUAjYkm",
  "key3": "2p6RZ7stwVBNLykHbW1i4dRvuYS2N43TwuWXZ6vMD6CZXV3g7mnGA2mABxrt2kXtuyCAgQiU6WoB7AFhGAg2mXnm",
  "key4": "4fhn1YfwJaG5LhKTw3ipMN38X1ogZYipLuNjRkUS8e7tXFjWM1vuyrbibxicVpdF3StbD3X3aFe4BVsdqMMQXfki",
  "key5": "5RV6NWS4ewBzjXDdnTFo3Xk5Hvo1b7TiRPzKe3myQfpGtZBKZ98kTdXfBXgR9QRNS7VFCJeu26JRM82fjjS48Vc6",
  "key6": "2RomFKnC27YdgKG2vcw1HJhrMndxNsLbDcBaWFyJ4B8kxZcPsFpqdRY2VoyAPSSjq97ugNX2yFmuzfS2Qy8jRVBm",
  "key7": "43h179wRtEqa35CwuzcqzcWnCNbHjCntv2SvXTXdUrj7heKNkcoFqZ4EMWyqKProwoLodinv4wuZWniuUsQDGNft",
  "key8": "WGa6ho5JvbJvnGA7AzGgsxSDHvPYRg8ryaaombcZFETxuigE4dxxnuMQ1vQEvam458pZNLuB7RLb2t5ErdKEyGn",
  "key9": "3F9kEYm5mDqAa2tiiq4PvxCw8PFDoNEGLB2cV3m5JCMGMRMsEeYcAHy71P4tUtPT52DqBgzqxBykiiEJ2Qx5VX4D",
  "key10": "5xFbJzyd6iJyEj9YWh1KgTkM3i3JcPGxDtX6XGMSLySXyTSwpw7R9AZgNe5yC6j4Yzv5eRCy2gMFdP32BEuMCiCu",
  "key11": "fay6XqLEsAjAZj6MDyHiERixRDceeKknyTiYuzdx6oUfPJS1Uxz7XEfprFr1imBYtdWAPGn2YNGEubDdfwBAbGj",
  "key12": "2mhLnYxK2LYb44UxAZv2A9PT2GpFvmtJtNtoGzPHYKqxS4SumzUPRFs8rxNMVE5eBvDDQP6i1y7LdbnFiZps8rF4",
  "key13": "3kWKhQEgkshMP5DZgtcc6tCrCcFQJaAKzz9FvAA1bCBgcQKzWnSRaDjHqHJcbNJogVBUzvQrsxXo8oGJ7Gkb1g8T",
  "key14": "2p7jhViHFtvGoiMgRLkvpXVuGA6NAhHJNozbTFBNWeSkD1XZv6oug8m5eQuz11egxBUyuHhzz6HgWUCe9KRR7RXt",
  "key15": "2nKLpkTZvhWs5aLV4ifS2n4La1k6VrG1Y747LKxPHuvbjSwJ8SoFnpdxxaJnvUwrwBzc4SY2tuf6qFWLkousiCgB",
  "key16": "5UVwUNwqkJ5gdesJYhExUMn1Qs7gRedLojZMD6XD78dExVNVYkbGxyo39RShXD6QCiH3ove4MXtPnLcH2gbxxxA6",
  "key17": "4GaHEQyfE21kfwBZpS8uLrQDj6gSCYQhBg74jnCyMzenqVo3s6jBDXj21b5Es5USnF1TETbAVJABVYXkUdJVmEia",
  "key18": "4xBAK4wqp1w4g56wMFnRUoiQXzmsN3nzvfkhgcJSF81WgHLcbEfntJAuggiwgd1BhP8gDDsScsPth4sYtv2nqYFn",
  "key19": "639GZQBSYVL3wPseB1hABt2jd9VTfX1JUNcNU6Sgq33Q4fGZn9m3oTQMkrJYUHoCQWhBQS2TgSeNYFYdyuKUPnfo",
  "key20": "5xokTDSMhMZUqUWr9s8Eu4wYgic3r2UCBTskRCF5ndiwGNMuuXpq4EY1KgzgESvGPUN84cnXS31cuTmxdjcHVkew",
  "key21": "t9CQRGGt1pa2baxgk3bMeV1gdrBQfvzHqBADYWFPvNdv25vWyEqBnrdKSWG8AtiFX5gDPZzLeA7TDyFvAtKompb",
  "key22": "4R8FeBdgrrAahgva8LQMqepMYX4rbBETXEKSc9XXLmT9Bg6vyPTq7rcxsbWrpTjtp45LbaSTow5Hh5DNcGoKdunh",
  "key23": "5JKBzHNH6uy5gXixFVPXVXHCFaT4NtZ287NHBJ9rChBFzixWUJK9sPQyMuYGFkYGXypMWnQthZYqN3ayYT2LX7KJ",
  "key24": "257J2ZC7h4q9XVyZNCrX1g1Kyj4KcC45r3WF4QGkjdox8Tkdo5cuiRoqLSFedv3FWypprGT2AzAMLDNmgN7enWgj",
  "key25": "2HHkXnLF8Ey9C6a3ZP1E3dgHH56c2wMQuyZgRMFzZ9Q5zsiwPrCfJN8Mhk1svGtUACH38Rm4mKuanLkxFGuVoU6p"
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
