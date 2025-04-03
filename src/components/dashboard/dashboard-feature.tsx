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
    "22pXs6RapeM5hPoPzNFQLKbe8pu6gfsTgpJ4bCsfsLPFgv26tqryEHzHahDFXzQYstNyV4PtCM72SN3JWQLXwdvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XGwSRYdMnwzKZxQdGTqqybUWr4etp94G1se4Uv6KojCJTxu1xtPsDSEQ8VsJ9SW44G1Gi3oY33qgjr3WksekRMd",
  "key1": "3QUBsTXg41RzdzSEyqg8dumCHzvF7zJFEu3vg64bm6iUzirztAHWQU4zzU7zd1vrqggJ8f6QNLAMXjQJ7Qc9sDtN",
  "key2": "549XiLxJzMxhMzRJ1gFCTdMo8RCaHnpKJxuNnEVRfVcqAZrqFaxB9mjvqx7foM6RcHdKaUUYD2WP611j9aKwT9jG",
  "key3": "xexaYu1kxzDT7qTGaFv6HyoKQwBZ6zDb2YRqbXkYN4QpWzyZ6ENWSAfCgadYrKswDre77V4HWqzEdF6hwT1tHby",
  "key4": "JkkEXvmTgh89h6UBP4EpL1juCSEAb92fqYQGg8NiCYykLDy1EKUbrcMEVKSRQTM3dvd71fxRPtCXyno4gfWUQAS",
  "key5": "3hSGZM1DaTQM6MPGrbcjSw34VCaX922wR3qoPqhPEaxE7FfknQzSMMPWxh6XtNiVCGoKZzmWePLEvLe9EU82qoqo",
  "key6": "5YaqXX8o2x5m6tCxpC4o8gTGe9C8hebRdHwSxAvZGrPqX6W9M59PEWjkhzMu8bxTLRrn2Ji6Pef5VsMLWABj42tE",
  "key7": "2kMfdZqmVnrfTSG2YKDvQSCQE6z8YPoymPXu972S54p4c7z2si6R3ERJR2zQiXvnmBeaYh9gjFVFPmoAZSQ6QEyP",
  "key8": "2WiY6XxTLdDjzi1GT4nk9bp3BS7S1S6vq71dQKFoWpBgbTcFdpMhfozepXutwPJLp5tiiaAR8qmHDo3agQrtcnhy",
  "key9": "3FYSa6Tg7jnk5WRKsBYdXF8461aL7DBAXxP2JTcefmrSyBReNGYvvLxSxxBd9tSpYWAwoJNUxbxe7vWLR2pbzVWf",
  "key10": "4XzSYCV51Z1esbWPw2NxkDaTNkx8HeyYGM6cYaCrtLVpJWHuraLjyMiEJDeW7zTjM3NguM74YSGHoX1MDzdMDUMi",
  "key11": "26aapq6cFadBaUvG2MFUSgW8m3oyG6W6wtjEPpHn97yXjFMvzaexzUyVeY4gYFqZQxRZvqbk4oSjhqV6T2ELfmLg",
  "key12": "43xEHL7KXWgyxHR1L2ZtZi4ChCkc1t2Kves9Rk2SpSLbfarY2EanhLraA9QeferZQcXLxNeEC7itsttsdhSvfAXj",
  "key13": "3jxPwoXqPF45M9fmp5ANDFhuBiEnYUQ7DHzZMv87RvNbpEh9vHQ9hpbi5MHqJbrA4MWsyTH6TwJUJmU7EBL5T5po",
  "key14": "3prN7qZ8WVeepeNMDauWgbGthMsa3LsuHE7Mz9Ra4Wmff6AHZRVijZqaRVbepg8tLcd6YpHrg4thGLLHMszJdYnM",
  "key15": "32yP2vUTkhK9ufDbmYBwcaccY6Z26v21fafCaxvdBqEMmGGJoQNPZT6xMbf7vfA9ySkr4apfRp9763Qt3vtcs71T",
  "key16": "5vVCLFyuNUUYuaTe26fdhGzrcUdjq5Bzo9zHXX5yhMf9aQEWCDHon2UcukJA9qVN4k4Z3ZTgcnnBKEgnTjtNxYTy",
  "key17": "3Up4uhxDa81ZNY2aFhQRVeVpW4iuapP8k6L5tU88gSZkzzhkZZS3cUJYA2q1wSNXR3GGtZTNmEt7pLuoQEYj7iFy",
  "key18": "56gMmMSGcAf7hhbMPqbKi4GUFuL4xkzAkmmmAQFS1wvChd9zcctjpEFLFcVxtKPbLXsYrgKxxer2wZtLhPnFxtck",
  "key19": "46DRpAeQJxTjYPSSscikcEwfefzpW1xrR18brKRxrQEjC8p2zboF5STu8k2xdBrcTUKeCLseEj9QgLo8kzeE27Li",
  "key20": "4EjjC7iKMM6bL67djxhd7eLQnS8TW6ySFzP2gvwQCtByRJRNSgjN1J3fZvaYfKoZ8AJoMEoS5JaqJpNegdaMraq",
  "key21": "216h4EaJJ8aDVhoU8zcrpYotDdBCfjHjkiNbWnahwyFw429vBLAY7mNZxAaMDV6C4phvoi2cMkuLjCG1iva2KAKi",
  "key22": "YxVBNpv5mJMNVREKQafDZPBwX9EaDSGX4NK4Qs2NU5gdiYskEc8RvJFm5o2SRy7pm6fqqC5WoR3sQBzW3Wv6ueC",
  "key23": "57dbZ9hWNyErUvi3d6vTghTPb3EZrAskcwe7mvjazjhCmXhtMAYFAKXqwiGMVuYvW3MCyPcYdpgv6vB6k4jsFG3m",
  "key24": "4P7CaKhQCPR8e6af7n4MBdeAaJyCEwsVgwpq2FEijJcatCtcc7R6fwTD5atmZ3VYDrmGgMSvaPE7MEFz6QXMawfc",
  "key25": "YgH11A7dmfqpc5u3At15cSpzJxSHnhNBReVdgyuETsmQhgibCLyVk88HKN4iN3gg2E9n8jgZTmaRMkcSedvqwWv",
  "key26": "25gvNHsaEskiKeDvjyajXQKLygiAACYbDtnwKzdGFyYYkQmq1xTQD9Xpx4ifqZBFHdTdxk3cJapYm9znYtTEWAne",
  "key27": "2is8yhYfbsSNbu8bpm81V6Zh1r5TpxfJ1KFV6qiw6F79FiKNd13Vb2kVAQaxzF9v65qK2o8PtJUfqfoUHNtykGoy",
  "key28": "4RG6MhoRFq8fZ8WnMKutEQHzdtKYFtw42b2ws6pxCvNNBiCiFJa8xLcf9yAfUcqCMNmuyDd8MnbMnuHEfpiSpxnC",
  "key29": "4zr6Q8BiSFKJbznQbmEWZJ4PABnKXgWhszXT2aU3mvhzMsKJB4WpSvU4Ggdc7xiZL9ScmxiL4fbVqs3or81bNPRH",
  "key30": "b8URZCzpyFcRpibFaiuQwGzzxPwPNw83rCLGxVFPZdNFC9krwUFSXPaSXyidCQPCcWo7UGcyjsL2uqEzdVND7v2",
  "key31": "4uSJ7dRX6qCnAtFsdgu93yN12gdPpiRq5V1oJhrJdFz2iUx213CMUeb8nj85a4QdrzT3HaZXsok1sTKiEL4oK4XZ",
  "key32": "63Skb8QUnfDk72XAPksv2YoJGfhaeEN5TysjE7utWwacovq4qH3KrC8AzuBkq6LrACB2VnQvyMGYcWqUBZ1hzVBD"
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
