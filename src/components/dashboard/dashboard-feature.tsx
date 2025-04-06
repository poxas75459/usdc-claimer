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
    "2KhSnKhot2DYbZSn3iuATF5ay7rPBzBRgiwAZbxdmk6L7AQH3iky57U6iHs1fvp1vMYEan36V5qTWyXGt5xdzi5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H2dgDsx9T2GyVsUrDfDnfQqyupUuRQW9xXcEpTXFDCCHz4iQ2hNtqoLEZuFyRrpKZXuvj99KYWcrKmcvgEaQcN8",
  "key1": "2kTvso37irQLZsT9VoSjp6JnANvSbATFcphvrYnkgggD7H4EjcxR9PK3si1YjBHAeEdB6yrDtRCy4Ryb39kXxKE4",
  "key2": "4qdNZd8g1p145153Urr9Ntj65JNPnnEhrwY5tS4zAh7qUehhPiZCvB7gtLEgDxhYajPzauAACZZ2arLgujmazLv9",
  "key3": "wxMc5G2D1vBCjhx4aAFGb9Lkm1PNHMpnCxggyuDpfhFa31Dogw5HjBXYdvCVs3gMiw6auSpH3db8krDfcj1QQRX",
  "key4": "2bGYywLUjakdf3aQ81PdjxWAHebYiwPF133Qqff5nRAA22ArBYS5poq8B7dpgbYApPn4eXs9gizkLmuXQh5vpdo6",
  "key5": "4HnLxQE6ruqMQvNeuLqvjvLPTsiXCgLyWF5Uz1eLM8vJDxuGfri1Rgy8SuEY6KKeoEsfXRFpC58GwJ8Cnh5Bj7xn",
  "key6": "52nvETbn5f5naa2qAMfSwiPfbN8DAjQFbBfTbGS2W9bZ2AS7i4BSa5RzeNTgY1rvnMWLpCeTt8RtwBg7TMQ8oEwG",
  "key7": "3saE7Y7zh2RfFYaXpiY8HofaNVC1PW67s2K6VqZjQayt2sHVWmp64EbrSBfYnPvWQrEwDiwqqNttuveK4EHsZE36",
  "key8": "3Do1TUG1tVho9p3YNxKZdfJQnzsFFZcNWSwyi9YVJKTCET3PvSqp3RLriwY2PWx5WwkeiwtwS4ZYHEVYpFdhaYgx",
  "key9": "5MsoVn15EjH4CTZq8WKjDcFsP7pJAtoLPKVM5SQ1ycDG6EcsXimvtsPmPQpd3o6LCHSfFuv5ctTstcSQKNDfCJzp",
  "key10": "4VHvqoJJrVsyNzo9q4iPuWPm7LYqTvcNF4KUYzapwMx7kjWjvLGhmHeQMf22crQyeGabGYN7SYmwedy5qUnTzq98",
  "key11": "3U9k1xTEHJovryW7iubaf953hnSGSmDN8pK8nBV5bQGuqAX6h3qXtZ1z8ktR3u5PrEdmybZNNmnCBPGspszR2VRa",
  "key12": "3xhSKcQhnQPBbfjob86BMaPsLf8rNuVBo7VLArMn7AAP7X1mYxR5YAV9rzmK5gL9ca6FmJ1ycEmJTVXi8pDsNDB7",
  "key13": "5eNv3yxmZmHoYzdSPZy8gMcFnwzSUt487MEXmXzwVSSPwmya47t27ijtJ2qaU7fjSczXvddgrLCDNTcas7FVN9Qf",
  "key14": "2QuTNRYsgQVdmdEbq8obwETNe58omyv1smC4Myg1xQvuixud17twKeYjnk3vKLXqpMxibJMYJfG3xfLdxfV6NGTG",
  "key15": "5AT74CBBq8REcw55GusXv5EYrjgAMov2cpgWSjLSVJinHs5zPzFBSNvxDbCDU7m6VsEUGjtLPdhPRUZCRcTmkYSu",
  "key16": "4aWBCpU3zQfZSv8KnCgcihiz6N8CnpS9durESJoRX1Hf6ZyYadvvmmUmy3t7deqtenjevzrn1mhrNgStvLqFTH2h",
  "key17": "3dxyUk73GSsHEMXNnV8q38XJoarzWAZjaGcTFsm78TCyNjiJrM5khcCmK7dLcnM6PAq8EeY29pPtE3yP5idpt8DJ",
  "key18": "aWzCkG1n8rYUhaZiYSpApbkKQJnEc43rKqEPTrEvswNLZa1oXD3vkvkrrz3v8A8ojQHmKULR9xn8RNLELPVeQCH",
  "key19": "TSrKSg4XjoshwJyQ4fw6vnLLtsKgCfRWgtKj7nQDNURZouUC2vkZxwXxFWKLGwtRp3x8TUvEmPd6cZsXBnVqEhM",
  "key20": "scPm9NjCHnnrVJwcQ2nNKjoyPRAQHZzs7SGPUNz81MbdsN3TCCtPYusZpM3VSn2xzjsj2E7txh8hTXnoL4rsAgo",
  "key21": "4W2Suf9UnagKpF3jxuSdBWKXG1nWU3ioF9KvCbXiV2LxqRoC88jVZegbTLV4AKuBJK5uENDHcamUt3Kqwym89RhG",
  "key22": "4Q9e8UFwpkDVUhK7NpdpsWnUMTwUX9csv6LVP2TeKUYaXkLbh5qPXriznWeNwcG4LyoBsVAqVC8FZUZsggc97xro",
  "key23": "5ZMWWvwHrudoVXzfXk2Te1Dg61HNJJJcvEvDkBVArx6UjAfDbW4yKD9QsqwJ1GHDEr1hoHoPtLk9trjVBzVziow4",
  "key24": "mVMC11Fyh4Gt8x5x4CkwBmRASV8XN9Ee79F1KavdTGCiEzqtVRASCkkU6qLKWLbwiqrTcxAhxpDi9x1vJwfcEki",
  "key25": "3hgAPunpZADsY26PBtYYfg86LkJ8fgy93AJGSH2k1zwXrVpw8ncL29UZGNFDMk5Pew9nDN8Zijd8j7vSwSNhwQNx",
  "key26": "2n8GmvaS2urGzimE2SVBtDwF6dpZTCzmTrv1P9rNF75MJnD6nngHmWKkESsqisTFhU6pSZ4RYC9QPgKdGbyH9zry",
  "key27": "2kp7pa5CHJTyfgmyS4quHFh5gmuRsth6Fd4ouB7Fa6JWXZQfbWG9U3TTCfYKyaJb77FP3y1KA6F88VM6EePjtzPo",
  "key28": "5SHHBgKuZGvWtY2ZqKVRnzd7prcP9MUxoAUvfzQvrPevLzhqXFzGGhk8XQDCeRFg4xfq2vhQbBBsXsKfha8RmsYU",
  "key29": "2fkdcC9a2XcUaqHgjUKEu3gQYhfMvPvPAu3h8U2jRonY3TwPBWhpWDUnWdQnGtcARfc9aAtzfonPYmjTuDFTbLXu",
  "key30": "5j6zutdpobNcEgJYsr1bsPWmNCcjX1pVRV6njSgmYUDz1ui1UTZbynYFhCAg6XBVBDkwxiJuqMXRiHMMLWXG1q13",
  "key31": "5KXKewz5uHJgRdSfVJWZhms7ZrsVSJi1ZjPJ4DChA49XL6KjPkjoPTyWbE7fx356S7MUoHuuwpxSWYv4PAvSUqgW",
  "key32": "5B8V62hMrNsqbKqGxvGm2zRea2Qdp54vHodUmGZQ9sp1M4jhpPsxpWfUbig2TfFwPEMa3kgQkrSF2kokx757ZLeA",
  "key33": "4ahQ74Qs4bJ7wVPNZjXM6fTrpknuK8GD7jMrkRo1XyhAAnfnNzLsE3C4YzrbYwLb5qiXrXboTEdXSqbGApz9gps7",
  "key34": "3Egc7ciwoM4hsEGs9xXxP97mD8Jy5oVC5GBV2tEEbk7DSkHvhSzEaauApiFUyv5dhNVxjDmsDZQ5MkS9rve3rwVd",
  "key35": "2sPrZeqZKczkYkKeNLM5L9A4hHTye7kjGb2A43PrQMKzMHaoXCTxLABjQn39vWRjsXtXKPbsTmT3f2dFvsAwY12M",
  "key36": "BMDPSAWdPfFQPrDBQwnAcooeXvoYgQXFbut69xcPe7qBaxmDqwieD557jbxmmx1XjmUxybaevvEP6M1EgNX73qt"
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
