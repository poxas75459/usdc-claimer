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
    "ow5eSmoUib62uMWFMW6uT3ZbwYwWtEE4hkBc7Zr7u1Pb9XVK9NBhAtGc7ayoNEn866po8XiEFbhyuj82s4uRA6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PWTL6PHzeSLbKgssn1XuiyCc4557PXSdMW87FkQcy4Hjagb6CPRbNh74XNeg3MohzDxizBewtnkM2kN5iMXK3N",
  "key1": "4PoNESbf9sd2Z1NcXCPxpvNLbwG5ms6nxWuUAk2r1cgR5nD794X9DP2My9sTvqwkpeuRxxZf9viBi51Bz5yvFHxq",
  "key2": "miYiFwYAJb2vk93VA2g5gDQZmYBNZQ7ecHrJ94npPwoZaRF2amMSZKtKLMN4hDt3ri1Mron8C2VHA3V3dyLpiN5",
  "key3": "4zzZN3Cvoy2wjRmh7ZdTSr5Nf7fxXbXTi3TmfJVbVqztEJkwp1Sa8UHHGTBKGSeRnxPJcr4F6vij5R16ehb4mjcC",
  "key4": "4hjejgzo9knWcAxMin9F6sU9wYfXFib34gLRigQWJ7KJhCd27qzRJJQ3xpKR4XBid6ZiCtawJAgfAzZxyy3rz69Z",
  "key5": "5RJoA1nqmNwvxxdKuaNYcciFbMZsQi7ikP58wVKjKvhbQhjx45WTcVV7aochLPYGhoEJZ48SXVmpxmFViNnzgR6D",
  "key6": "4ChUdSA9KJWVgZrHSyxs6boNVfD3jjoCjx9yozLiiPnEVQRoHpjF2hnJGzqmmdD4JsBKzY5jtPV3osGvCo6A962n",
  "key7": "cWG39KFU9k8ZcYCcCVWCdm5v67e9YJvPpz5bk5W6SoDHwq2PqU7EJncZDqLmwzqcEEhnWEs73H2gC7rH9Fr8ppu",
  "key8": "37ZAwSTVySXKNmqNcaJjhaAjTx62SN6WLWounAHn5FZ5ThhpK4WasbKb1yJ1aqac892AbX6it9hqFgkwWdJGpns5",
  "key9": "4KBYvVeucPS33z6uyHmQt58qvL338AvhWdQESqHm5shyCR6z7TZCA7AaJmRsQ8aUmPpRxoveNV7JeSuEqFipPhHG",
  "key10": "awSfpMUxtyHExhcQbbmwid9aZNNcYanUVKr65QFPwzRyJFjpvTfRAwvXtpXdKwQVASFTSJKpDTo8nTQCpJHAX6q",
  "key11": "ofgbq88HdxnuxZGNcBrihY9dbpjZSxWAb4w5wdXBDXsz9ubomfxyCLyZRXZACxc1uv2titsWiBn9jKvgpKPDAce",
  "key12": "31NA3ktUrsjYbssC6a15qhzABUZo6iCkQtB1p7YN8VHmi3xkAnhjLqpE2VzoQsLYpzM1zCBWc3Yo2grFs74JNFAg",
  "key13": "5gwtXbPo7Lveaiyn7E36JsxmfXadrbrDxCVpWNUgKpoCXGotsFtVdkL8utURNhCjrqMgSvaqTBwaLgdrJEH7x1Jm",
  "key14": "5Ne3LtRjnR3cxjYvv2bCiPFJ81Jspfqti17UgG6qf2XWpVjybzAeTpnECd5tzTMhC8oRmruh4tZ1rn8rJe7jZHkc",
  "key15": "2v6HN16k4aGAYT4jp93mZdRQN3jvkw9pBQptks2KhzBGidAeURXfkKoMENxhRAWkSym9CQhn4yV3HaeBgZMxhNtL",
  "key16": "4F8onsuZBGsD3bm4arSP1J9iXcZx5qoGZ4Ux3RoPJy3LWrzWnnWZnet2Dv8EFwrMELgeafp3ikPL11DhYjXiqhdd",
  "key17": "LAUf6muykyR3WeHuBADZdcyWY18682a8mkkeAij8jiTahN871TmJMphbQueMMsEMeen8wXqsFMmCD6WGf9M1Uo6",
  "key18": "43uMwZ3ZiDVufiL4i15LrLhyPPAp5Vn9pry6EkXvN2Duef3DQB3zeQsSnDHdUZuWYtGD8XSivudzHkMGmH4UTAC7",
  "key19": "5UnLrbVTHEbK7cxjGN11S3QLUsw2FEErBjVjGJdmhZVm4P4pdhWkGHyWkYX8gEkpDzSU3kGoeQLXGzw7tWijos8L",
  "key20": "3bCWtCo425YpuYf8Lj5htzEPHnDMbq1QBS1h3LUpDZLmKZnFNXV23jv3PH3aMTATpSvNauNBNPvPhJLsv4DJjkUY",
  "key21": "2ewnde5v33KkkUbm4kTGsABU2VuhCQbifb6gUh5H8JtGzXAkEDuty4X8ztb6vtwY6DcmSgkuz7W1vmZvs72MrEpQ",
  "key22": "4HXkVDf8WAMKkauhKH3FQs9XCkE2AFsAC5XC1xPxVHHdw8TWn5W2xXJBSFBU3VJ6EgDJP6VVkziazyWYqhpYGqtJ",
  "key23": "8ErDZtBK4hiepDFyEKgUCdzp11s6pVdm3MygSxywnCuQHMwtDUb2cGJujzFb98ux2rwFqLQLafkaV8fmqprk7GS",
  "key24": "4mYWEq1xtCUgDScCHS62iqT1PRUXmppBZvnbpYipMHA8KrDfEuJMPdLoqfuQoprz4abwZyHqhb5ojfeXqE3yiCQJ",
  "key25": "K4uwxsi822AwidsSgHYG5kyWtKnzWo1K2Ftj61xErUKJ9ZgX7pvmpqtL3pfhydFfPuiHFUAmMhXe569ZwnckTQG",
  "key26": "3ph13Fjn5mb7vfuHanHawcRYPqH75sBYwBgFpyYM83r5LUa19bsbeYGQC8gmMTg4pYRBvEvqdpJCcq6cUentC85h",
  "key27": "29SME9pjB6hKVfHxLgnc4UWHQVD3fSTQd8PMmGYaprs7wjp4XvyvTS6r4uskjWy9HnbohQGAeBzANcGjH4UR43R7",
  "key28": "4NVynsLdmDd2fbAMqoHHhnYF7taVJikwEYnA5pBkoWJATLYiLnSBRy87dGQp5Y39BwxVqQDdtTU2enGxorNuyzue",
  "key29": "4Hi6wVviRCdaFngnk9zBYJL4wmjgxnN8v1L1fRwN2wHah9gXHtFRp9PWNhTuums3H4LHVKyQ9is6MAGNc3RZJt4A",
  "key30": "3nKFLeVLjAuyu5BT8m4gNDEE9yvXLnZsm3z54ms6avEvnhG6jnrXzmtrNv2mesvX5ZcdpncByxhWRFQUU8r4L1Tg",
  "key31": "4qE8XQaPqUvqLoXihfUGuJBkXAoJgSP658sbrpThoNT61LcTG87HZf6M7n3qvqFiZPeL4kDKiMkk5uxgT7Gqpd3T",
  "key32": "2JZjAWsBZ35prKK2x2UqwrFZrLyMhdaRmrzaCMzyhNLaunXF8YgCLcwRJKqhyz2s5QzwKpf6hepS8mE7bByZiXJT",
  "key33": "4P8vMEi7Zksb36jQd1HKCDbYspgb2B4uV8nGLSiEN77w9FYMcpNmiCCCPzTKtHKdzMWMaTxVBYHNabPFgcJyxPnb",
  "key34": "4LbCQCUyexp7VJinn7qsrzPLpUpLvaDbDVgn685hG3v4vHiQhsNrRGD1C3H2QatztJLX6RwCDWs6jX6M9mYbCeXK",
  "key35": "5AnhjM9YyKPJPQoWZW38QvoDm7urP1Vk7eNiWgWiS3YRKKfofuY1okXb4QJmkFTkVXs8fttfSjbrKLBh9cT9jSpF",
  "key36": "2VRvU19WC7fgYv3TMy925PVTYvqzDKzogQTR4k8ynZtqgHv7QD77pEmVzDeLeBphyZZoSpabxu51xGByBRK5trC1",
  "key37": "2oC8tymMwynpgDs7FY5NM4cYfVZKVDZhi5XqTPkdAEhGXAJREmK4t1kXityTYCtrBGouSfLRkpXdXp72Mu5XbKJx",
  "key38": "4U4owjcZBAtsdxTULzYtQJRPs5Q8RunbAdJd9JZ3qVxDfE7rkVcSKPtdYiNPhjYxJCbcXUVYkiDUZxky1EthwSa",
  "key39": "4voBDQFfqkVYwjBkLov7XaoQFDCUTqKRa9cvHAL3xyKKRrmgFJCfPAXz7mqaP8ayGQZnr3xf1EwUi5Dy9hxhZQxC",
  "key40": "4G1nmwby5rXwYTuceGkphwpBBWFr7VwczHmfjnoRzBBorFPhyHMLEdTiTdBqDpKjV5KhWvDx6pw76mJtVPXMAF3A",
  "key41": "4juY1J3wQ7oPeqk9RqxP7FUZ3KEu1zFJtwAXX2QdErQyAQAx6T3httyg9v3WrYCZKviQqP2kePGUHjga9KaFEKp9",
  "key42": "5Lvfif3wBwX627CUrZ6QKNcgLGGSbqBtZxHdAhh17JkKhdmPjnLWCHPr2PkuJv31vUhQQCqZoLNGaaxHDd5itPwk",
  "key43": "3LpVtuH9xTZV8kSaLXrc6QnnkrJ72Le8Pz19s6cis43dLkG4FHuAhfS8ygKx6iU6N4BZWdCaEJ78h9tGNJSmbVvY",
  "key44": "2BwUpfTFguz68U1Kz3E8YH1sBhZsx1DU8Y7uVf3KbTVTDnXd93XiHnBFHGhdRBCdHx6ivYz3Z2B6qFRNFk2nTBPz",
  "key45": "3aB2hTgVkKNTkcxATxSbrqduq6wKnTFc2xbYoWVg1yc8bmvmSmRQzy3P4q4fKTDDBsLur8L4GL6hzAUB9fgtCZdU"
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
