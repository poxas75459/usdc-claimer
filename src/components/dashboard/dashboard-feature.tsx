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
    "24QsUhMQf5ifGaT8CW5hJtY8J6Wu8vKSXLpAjvFMa57YyY7Gc7U94t66tnKTuM4DomUFwR7EdtUN4Eeo3j6iAcWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zc4ekpHrZ5zGAD1eDg5m2bZ7aixmagQKF7gHNWM4xX3ozGqDhjQJg5GQdjJa4grp6DbqJtEgZN8tuwPvYqK4yij",
  "key1": "4Pya7w4VtFJbKgTQCQGGBh237Me1nATq9nY3xbRrZ4EJEAbbNpZREDJ3jWTLYHQDAa2RuXEoLk1MMKYeDLq3XCVx",
  "key2": "2BpKhCiq4FXEirrsXQ64iFTmLx5YGQymgkPauieffcjL9gFwwcYzTPrGKHukc9Ny286NHgYS1yp24X6vgX9kEDxy",
  "key3": "3YDmephkZ2daMouCswthfwCWc5DckDzujvUt3Mtn5kBuZ9HfJtsgFdF3TDBCco9P2geNrMiREAeFfVeG8j4vz1nv",
  "key4": "rHGpmbfUsvdUPbxq2JngxYUv29wWW5R2mstZ4kExGQnBZw2indoVRVkQ6t5yMsvmk5CmoyfXj1WzSbFmRhXvZox",
  "key5": "5psq7yXbXjfPTFBN1SjVHBwhuufpmGzphXoCkCBy1QQWKCubTFfmb4eSx3ANXK6s3vEc7B3aAyLi8mRwTzYfJYK2",
  "key6": "3nEHCfNwKDD4ASDZMCfYu6hHAG1HsMugF1y2kJhKnpfjXCyKfb7CmPXkXZh3vdo9rKMHw5CX28hZfwweQ6yyFLpk",
  "key7": "49NYFs6n2gLk4DGjp9nWoPJNoUhk86bUDsdv9eNpVY4TFBYwRoRPx7PKMyH1ijySE16jTJXhDZT6Qj4Q6ANpfHFT",
  "key8": "5J3HMM9jQAuM1oXRVd3uuH1RE94yCh9ZdNmYxT7fCAzTi3X1H7ESNfbWLPxm4yvSZwcMF9Q4Myakp5LgJvVaYHzd",
  "key9": "3k2sAVjY3HMbDFShbeiScJwTNQ4DrC6QWXuye9aKkEjUe5p8EK9S3nYfCdPqRdvfXndsoAn4FfSQPdefb1LtbfE2",
  "key10": "69hrGSGtMLda6rxbwn4Pr5xtxdwYm3nWvXXpPM5ryAzHb5hCvsSMamEFLFdDXaDqWQxQyet23CwXVULoKG96zY6",
  "key11": "2WS5bvdZomD35Koa2jXYPSDjvatLecHAwQrbWCBpwX8Jq1fr7y4VfTRMoyaCULuqNLdn2mHVKN7CfvLS7JHNHvat",
  "key12": "5Hq6415A51VkYkRgV1iRKFLcokLsUytwUPGYgBMVGWDv1P93jwpDFn4suHmWr9hCD43bC4LzRKFmwugwCKPb6ooZ",
  "key13": "4kqTwy67DHJpdBavmTFXquXv5gY2amDvAHdTu3134q4RLETMXSKNHAp6AAwrLWY7obhDP3c5gqh5jJedNGmz33aU",
  "key14": "4q6FdJ1Jarr5TnJmHEHE53Q2x7xAbtVee3S3p9SYLboo4EqCipodrziFK7L4bczFn4M5gK2SYS9SvzxF7HKdmuUU",
  "key15": "2arozgcqD9y5hT6yGCtcsgrJiXd2DXQspHfaHqeFZBwnpcd58QtGdW44BYj6m5hg1wUxMpqUvjZCvdUj9WRH3Gwv",
  "key16": "3jCmhqtXgRWjRYRrxHa5me6oHPEUnec9niZ6RumCNdBoYnP19fVP6XvPJCT6H8HpM6trMzUD5H1BhSWgZdd9M1gC",
  "key17": "eSkXZjNhb93MLhaCTBYWGbfpZb5qTcTAvBDyJ5RtgNEyB46owHM4P4meuJzcTWMpjZevCk4NB3GzwtNeuBjRb2p",
  "key18": "5WQhCXz1NTQ5Lm2zUsZxbRM2My4cDSrqQjDvgiL9pwLFSYrqbN6oxPn2As7rP93j6YijVTuhAZP2ytpiuHBc5ncL",
  "key19": "QPUVUMHGDvURUTZVqQ1yFy1zTbp494z4ZrnGNeA4QeApAg9xnqRce99D2voDyNcmz3RDaUWNnYehA4YLQznCj8P",
  "key20": "3go1PBdtanQ62VcdL52wV7Vnz9x1XeBhhBGUkM62EDdWmH89M2rUPYNxyqgLQGYYtU1MxtYcNUPyC8CYZvdNQxx1",
  "key21": "3aXx2nDydVY5LVqJBCi9VZTN3MV4hGygwRFYBXU54xKdvTVo86tgFecv1efpfftsMxgNvqFUWRuUwixjbUyEXQqe",
  "key22": "4mbtSPpRShXScoW5EUuEmVWhCyGL2ooYJVqXdtCTg6ZY28iwACshhLcejNntfavtLtxGiYHzYbLLjqUkyr1u2s5C",
  "key23": "5eFQnCPdE2czehEaijBbVTeL7Er4fdQ77E3T3Mu1MzpXNyXVgtcP6qm6czrX7s4netcKfoAAbGuucqkpQeN5E2nT",
  "key24": "5qVZ3j6TLcmgxoycMeB8cmbB3VYW9SSwQsiBcqiNkRXVtZGrzRLFjYF8M8yL8ZQaYFoCfNZwzhUv7iZGgM3X2aS9",
  "key25": "5fUUw1SKJEWjtj6vDKsKpc3umz9MQy2evA3vJ32snojPrSPEX8SvzQzCJmDR1AcwtjoTWf1BCQ7eyeYd8dwag38t",
  "key26": "4WZbXvsqCgsR3qA55BEks6ouVsQe6esnwYZ9pozCF7ZKaQb1Jto8usbdEnUtrwetJyfaa7wAXtcQ1q1XpXqakDGL"
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
