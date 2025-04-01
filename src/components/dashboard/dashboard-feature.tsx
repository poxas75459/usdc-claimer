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
    "4H3LrHDhfsQXz9Z6YBKeRLzuQGoc9CvXJKHSB1J8LZ4ykVdvBezAJur6srCBoGJoqc9jeMkFFYJUogt7poXnNAL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M2TNv2VsTWwm1pbF2sBLrFUTKCDhNfabc946j1JRw5VqzYKSAYKTDSb6pwqNodEpAN1EhZLcyteeR4CSUNL7oBp",
  "key1": "3zBCGP1tTiv8bjF5DYyTuuzrGYUoE7PYXNohVrbGsVEpg7Qc46zEwNFW64UDg7JAznJPomEVn9n8HDXmuDqVzoUb",
  "key2": "5Lb4TBHdCCqscn4YpwHm59zqFdTCYDTR2ZeLDCZWsTpSsGGgxKrZXgawu5jEDJgxAypn4Qx8i2uYsqcUyz7qXUyV",
  "key3": "2xq8Gjv2bboBJmyx98UCZVqTZuyNFsid24i2mU6Cessfir8qN59EnQ1BgG2Qf6FQWYp7xkF5S53mAJzY4uHMAcP8",
  "key4": "f7Gq3B3PowePxZouo4GreWXHEjrZBf77zL2nTZHsKdDicdyFKyAyVyWj4DdPagpWorw24uTqan4ck6QS9ZLDW4v",
  "key5": "zWtNquT3EFpNrttAocPGoRiDNnmZmu5ZFDbMX1ccXayPHXrA9yYFmCdBLNwr1xLPsAgW4eJHH7hUsL9TprK7mVS",
  "key6": "4eo2zuutHvLg9KNRAogEXBH6Cpb3oYfW6xXrXzP3ZyEyEBvLtq1sHnM8hSHyyhJxYKCtxX71vQ1VguTZgzp9Bwb6",
  "key7": "232nb89QFHnBx77AWmcMcLwKRZqb9r3RfKuSPEHvdfcbqfbfHQfkbZQCVCVvLLuD5eJ1VyVME1PBTgYeTGphTGFC",
  "key8": "4W2NSsArUvsvUrpECvRR2EVi6S5BgKPqipY6t7UVmnABxbfkDaHM1UNut4gsmqdPg2UX4aS3L2YAqVko1TfitRy5",
  "key9": "4qV3576jxKTvorgAxKmPsW4NH9Lke1PbDGYxPXPeABvRyWEKE88jQb4HsveFYvKZUQJqdw5QvT7hAkZUw6d7ALSu",
  "key10": "2GJ9YtJQTGBPJHGUdqAJ9novDEi2ZQUHxMkprkfFPQWSeRxoppNVE8GCyZhPKMp3qYyHKzFrQw9dA8SJvLMecLfo",
  "key11": "2ZNrRC3CRrUKqp2VvGeZrFjMajfvGF9hwjBUbRnDcPsFab1UE2Aacfq45XZsaJyMx54bVsqzoW6bX7worxAVXdZP",
  "key12": "2i55EeUvR8Nom3LPg3KBTqap6KM9ohPQBF55w66HY3p1u5S7oWp6v38WaZ9FaoMX43Ye5dk53aTDoZwhwRGLa8Zv",
  "key13": "56sWv1wo3qQKWnMKh2sXP4NenMZ9P87HbqHuGXQk7tBNc4Cdi7QLRWqUv9idMPWYJ1sYBCeaGCkazdmoEV32cRc",
  "key14": "5UzTfjC6yy4FrtYnX2DVxaarKFfcHwTFyUiYXm9vVhMduQXYsgefdEAXm94vdbBmR4C3jFQ6pr5gqkPF8r1QuzVA",
  "key15": "E872YrQj39qtD7Wq49qs2MoE7zS3XssfeVPDQkzZKU8Xxa2JmZAhhSBHAaq4Bu4eWh9j4ZyorHpyyw6HicBwk3u",
  "key16": "53dMChrVK7mdhnm75bK2FjHEfiyJDy96Ujz2PuuerHCJKAjE4v3wARsT6NoveuiMYvbGzUwWnRXD6hzhduXhqK4",
  "key17": "ssTmjW6SZGooVJ7iDiaahp4WorNuBqScZJ6imi8f2PuXsnoQRMDMaLi3fzDaXMfWPCjZ21xFTqnQfbgZvwppqiE",
  "key18": "4jheJPJTCmaPQFJHsjxFZQJ4Va7JykoFpjUPgF7aGbpDEnRB2d4n9A2JEAmZ48124ANsAcPBFZU46TBxt9hwmd7G",
  "key19": "3xC2Q4VrB9raoaDwNfiW6e3tqD7Lq9XFSVzHy55PDT9iTeQMFHWfay5yVjFJ9f18dtUvQRuxeSGPEFa3AJGf4dcb",
  "key20": "Lrq6q9uU8bDTZzKctNn6yvWzAuvVMuLPyxgWkzbtZ7t8FvpY2Y15XNmpkd2cipD8qg6d19VfhKmmJ571XXUoo4P",
  "key21": "2jfjQC5ZqgyJ6gETb115i4TE8FVHmtdyd1sNYhfzFWpLyuk5BLUvYxURxqc4MhajjbcMqxW1mWzqqZN1QUVKTzNm",
  "key22": "5jyTAnRDWWPoQRPTuAREYaEdXkFJuSp7UDdMroYjnezRLPffMkmaaY6jWi2vZVuGL1Da6NgKe5ZJfZ4fh1qmrZGF",
  "key23": "5Lgoxt5K8dgcD9Cm73cBaM1XSTGReAc4fUdGwdCyX427faGANoLncAsZjtNq9kbkeLGGZFBTNbuskupdjAEtjs1t",
  "key24": "Cw1wKdnQBsKupArw5L4WJv2ZXfXUYkqqATq3kEN6H8Fzkcd9g4gfDFNnW3LBM9Kbxpv1sQ37NZ7sZaq6hHF1Ypq",
  "key25": "55JirYsm3mRdQkK9Xd4CmTG4bufobkpeuZn2SafY41fvm9TrgD4AJrAWCymDJbGqMqEcSjezpKWER14wULU6NAu4",
  "key26": "54pNrM5htsuNz2XXBarYveqCae7yVZ5M1wTKZigH3VzDJWo4TR6A1z6HZo5UYGuxDaycy7gSesrubLohehMy61df",
  "key27": "54e5Vxyu1y9ai6PS2RVfPMErc6QpQ6SRTYXyytYwEbqb8AST6ZZtUUvXc7aKXXfybbzuxVWAt7NFMWASSPeKN5ME",
  "key28": "XrwGtkjd6CKQ8mQM5fNcbZYdJEPFQeDLxNDSCht6hcZhPDDr5eYxJA5T5J4Dxaa8QbjdbBhcq56cZ4S93pqvZAv",
  "key29": "34gBtMVuMGncEgfu8oLwjg6yBocBAbYfnTzGLgQyZVz4njN8fbNDKQ1bEtjJvK6e59e4CzgPyhFMoGw5QRApr5tX",
  "key30": "CkHLYenTwRe513Hi2EdFdhyzxyZYv4YZsVhhR2d384y6wfTc44QFwKzLUHqf8ZYfjum1fmqwbVeiRkjhzo2P3Sr",
  "key31": "4Cy8GRYKL6jwtpgDcopSScDZbTUj7L9vdKmmTcENoYCqGpr6tuffNiMYatF7TSBrU95LvbgUhEwUms9esoBAAoiR",
  "key32": "4oUjte91uYTgWZJDakeqPkxw2H8phVzgPzh1dnNExcPqktTyfcDXt7B9hDkDpiojBxddiJvDBtkLFgNWzoNEEAtw"
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
