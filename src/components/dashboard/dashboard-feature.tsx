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
    "5ATaDXLpSKDxr5xR2MeF2Bt9CP9oyZjEr5q7J9QRFURVwhBFQoz8HnY11VsqttYwE6QtYaycMcVQUNcFQKZpuZUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E8w4haX92M8NgbX2rxZDRLNzxWX61FANv8nBN3qeaMZcVHSsmVbrUYAxbnrP4MbkyAxeKZXKU8WBmYWtLnvcDi3",
  "key1": "CoMboUYkXiw9FBsiEqC4Vnkd8TdhfitQyJFVhs3dJh5bfJqDrrF6dnjYv17iXW8qpqNao81Wz7avk8a2GCHT5uj",
  "key2": "3TWFbyNAcs14ZKTE3TPeC5qcxMqcg2Rg7AQRYcTzAgsNHVjjoBC6y7aershtuFM8xF96JF4k3AMG4ZCD54bWb79e",
  "key3": "7FgmycYiQMhMSqmxw1J3uin3qvEdJpqwdAr5DwucYTgx4WQ1bXaMEcHoMtcvXLeHTWoGbmKiFN8dcmH4xH5mcEw",
  "key4": "4Hpkz5b1jFcvVHWi9L35ywhcSrh3jx3DyosLu3GEuDtMyYd27vunYtXnaz8SZbAxJ6XbVjUn9eT3LfXPNSwVnT4w",
  "key5": "2BUhcqHWne77rJmFfYGEXTYg6m4pV8p43iQpE8tKS1wcoxKH7E3LkqtXq86CLDVdUCANwrgy6pth56sDPnYpDwYs",
  "key6": "64AYrY8hoLq4uKoibxhN3nTeoPYGDC5nRL7GrjR7xiWSK1ay8Q8KQmZXKxDwouLY5uG9SJXjP6wBuk9esgz9au2V",
  "key7": "3saJGYkgd3S4i87Uqa2FSXWhwaPBRbMqbVX1oLWdjhEEsn1J9acFNLGeCAVJC8Y6cpHyVTVpHtVMx3m7ky8i54NS",
  "key8": "4gDc2pjSrhTUqFJeHjEiapPH5mqazsoZUumna3uwk1AqSPNDR97T7qdx6dpchpfqML22Vnd8jXE8p9xqESXBdxX1",
  "key9": "37rGBgJeUndG6KJZza8CwhftBwJsws1LDCsEjwuiAZVZN3Xiv37gsi8Ej7CDtFS7LqpCqhS438sVKWHti4B4Peah",
  "key10": "3CXmcD9NVSoPQQFhJ3e93YRL7qThgRikkmmh4NCDFJkiE6SNq9c4XTCHPxSZRqbPV2cfFky8RZYNHH4tEqNHqC7M",
  "key11": "dJJ66iYxKwLrcF9jUhYWHBtYuRWCazRitWzA1b53cc3GJc8mDVwns8yjEXZrgMoRUdU2KtVqYLQm2BgJNesSR3B",
  "key12": "3NTpds5KBXBsieHDDzVay1yeK5KocGTbiQCsrqmT4nAbPJEmkqqywCVRSfJ9bTXH4gUZ5koU2QgrxkP3qSBAB8Gc",
  "key13": "2rRkrgepZ6J4JVkKWBBiug6mVHhqVmh3spwrfVhjp2pUVmeYNLCv4UmDTCKh8prwaEQnMjUb12sB9oLkWuodP86P",
  "key14": "Kp3tRemXy7Hmwm7Hn91qeHDjvrzeQqqeMSBno1CZnVbpdbcD8vYLodj881428XdrQuWJrCavBRKYfXJJ9mbds7n",
  "key15": "27dM9HTHzt1UFBMwzseqjbUJQ1PseDqVnPq11Pao5Hs6z5yd5mXUmZrPQR5p5XCsPCU9jtvbabv4MhKJrKq7j6S6",
  "key16": "ePkXRjamvMUgW9yZYGPYCg6qiPeJQ27eqmsfZQQqd3WGmhcUGT3cVp4Axr9fhYJJQfmW7EFoVCJfGvUL38UiexJ",
  "key17": "4tqC34QmwE6ZzpVCjxm9WJYpVQJk72GdpgTku5FnKot5hg138GL8d5TRhcK1WaK6ACDmbcbwsgYkpmwemBHsseNU",
  "key18": "5iTmV4RQch7gchhENETXeaFkZjnXrHVNL3G8PjBJKZ6XBpvuezfp7wqrMSKirFa3h3CMwsqCQQZM8B2LC7VBQMQe",
  "key19": "eABZCaGWjL91V2vBBNEtMb7HQhDZZ75gJu2tQ9DNgxbKrHYRuz3fF5gPfANwBJgdVCtGvM51BvLtrAASbEWCaTk",
  "key20": "hH9sUGT3Z1BSfbtRjineQ2PGnLvLxKu7GJShUpuNSAmaaWnMULHwksBUJL1nAA1dKDx5A1rCQb4aiSuff7qMa15",
  "key21": "aPsD1tiCJBimhsdBD3Uu5J9icrUWsAB3j9ScvJBLcmxYHsac7DL11GesXKrh5WQd1u5vtfHVStmu5GLntkBVzCZ",
  "key22": "5T9hsMZ2kAJneJw5LjHnuNmBi36iA8v9ZN48gWQaFGRVxgByLDJWFDMKhKLBvDMQAHfgsXdGvGSZMeHg8UnKrq2Z",
  "key23": "431udpsTz9RYefrAYqxiYDe7gXpB1FRVkoqZUvvfTTCvaGJZyAe4avxv4YsnWm9ZRG5621MxBzcUh31GZipqNo7x",
  "key24": "rgUc8rCVp2BFx3XMQzdcJntgWzkmNQRcBzioDzQR8qw6ufuWJSreMWbhEfC8k98cgdc5QTCFdRhd2YZwgS9MU7h",
  "key25": "5r5h7d3GDBquRh1p6k2fUPzComEJ12jLReefNjVSBhXMJuDTTCNbpractG25a4kqr8zSbGKsARRCtfe9zYMKgh5u",
  "key26": "2QhgDtvkrjZFgS1LPAX7iVzZNAsyWNXKjsqSYyBzTzdiEz46ApKJdukcjXcvYXsvv55Pmv8A9wif1LTQmWvPrrrg",
  "key27": "5thbVpxnCKhnexURyJ4UF7cdJy4uoJT4ec1NgaTfeRMHj7aiUPwKLneBrnxyVh8usaMwhhSUaPodCi86qhvrtsxq",
  "key28": "2VJnkspiyK8wWCszPmqxSYRzSjsV8CvjfVWLdtrBhozFjxpEegLGw96ksohs1wcP4r1Aqd5GmNjV1tsd39egzBFD",
  "key29": "3ZnnJtTykSdjPEiYaFHWuHv6VZdFrRSiztdmvF7BC6EAxGx8H7iL7y7SkpAGoQNUaMmiURpz7zs69GRPkfHM8fiq",
  "key30": "32VHLijBUbhuwM66PSgxBJA2CNz47RsHHQs8dSM5w4fNiy5eAK9qPF8ixdSFAfq2fnjmho7npPZ7ds7Cb4K4Lgzu",
  "key31": "xeUaAAcF4ZCnhJevHJEfYHLrcyfneLKghJ5nFGYthCwTgRrHCQEx3sEQc5zjkNw2YfvuE32Hax1AjGEcQ7iB4i9",
  "key32": "5bDMnnEroZ7qJqg2K8LMXcaHzDNrXfPW6HgPMu4VYWHx9rUnYGjjbnjz6rSVvzQi51iitPHx3bqkMa9SbXa6PFGw",
  "key33": "3pNoEYdpWKNyfYi7oXyfx1DewJsawBchfHGcg71WArbCfAdEEoTv7sVvKfwDun7Vz4JVQoqdVyj7k5ZjAya3iRWr",
  "key34": "5zyDnYX7KdU5QycYnjAKDe7DsttGZSWtEHcVfrL1Ei4YLhnuYKrG5gE6Nx6vMizv7KK8FfmrswhucEEqRZYxH2gZ",
  "key35": "365xM87kveiCL4R1Ve3qNAAWrApRq5fKJTu62UhRm8jugVGBWDGEd8etkDELXQVN5QHnQcvqMRWxqRtk39FKn6sD",
  "key36": "jNgKmRtxzbJv2WWEVJDuCze3TQd79eEyiFqufKAAuwo37zGnCctDzHxHbbpCV8Q4SQcxPBSFsruE1nidcVmGUJj"
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
