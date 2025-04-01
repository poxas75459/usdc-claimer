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
    "5fATZ4dutNfDpjDWWGNmQUKnf4jCgW1kj91coUGmKqaVD9rBdjq32NjX1xmNHHeduDNZKEzPFUBfZ43yU9BZ5yJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56NgbroEwPssikwN1obQ5pNSC6kQGCBo5iMeUFELZ3qBEUET7RmkFV12n61PGji9tn9bzzzyWH5qkRjnksie4Q4e",
  "key1": "4K9RZUs5KBkuneJucfwYZPnGvG6MURBUoknii7tGxPaQSSqijadxGQDAFFDgxA1iDQV6dmvAgvLCaGaYGbxB8joe",
  "key2": "5NjtaH7sAkpLhnuC7Y9dqx4EfjdWfCpnRexw1TPx4wDnv117nhvTfLjeeVa2q6kC9idxsXaPaTrufSjHtQquNmQw",
  "key3": "koLQkhQFFZdWZtHpnrSD3cmnJTHSZyosJZ5YuNkQ6WmApWp8nDREJiodEfRC2uhebMySHfypNhSEJr8V7Z88Ety",
  "key4": "2JFu7JXqoPB8MqKnPxQooV4zZPcuvx8sqwA7ojx75vgNgPRcMEmSWRMioJbueCWZ7VZDB6qzfoSFJZz33jbz3Pym",
  "key5": "3f3NhwguCCKncTwxwJEUmiwWxoCNM1VQhrkTR2Kr2qmbH6vyYL9nPwAhxLXCkM1Y13MuovKTYHoFbaUXE9pmSq8n",
  "key6": "3Y2kXYZjPrNQwS418EqYLwoxVMJHgvkrZDQMNj9gtdvG5igs2e6Gm33Q9r9gcKWEXaBSpQsRZuMinpiXPzbwfx6M",
  "key7": "2H54NTpDHTcjkcTyLD1ewUDk8Jdw7YwQ5LSvCx6GSLKkTXtd7NyBFnErxvpxA9YT2Tcdc2epk2bJSSLPDYxBpoBd",
  "key8": "3pNRa3ofUGpBWjr8Ks7tixiLVqYSpxbgatwEH2y6DfZ5dvEnFrZK3FLgxdBEumTAExRsizVN6nJLZoZJ8oMt1hgb",
  "key9": "5CiNBF8afgPt2fma2ERLPDzdJoji5ytTpEn1XazwuiYxQnJN6amoYLbVYxkNgFV4yjooK5qkT78v8WCmRAaQdCvh",
  "key10": "v1Q7wejK993KY2aRX6HwiNiD97dUXTBAFGoTTJpumiNajpbFJgGtnRZKReyjZrPgqdNAFDx9fgkorpsUnsMPc2Q",
  "key11": "4bXAe858Prfu1KEtdHfd9dmG75khRfrGoHLTx2pCMR6GUpaVE6JraSzJk7iqE3Ugi8mVa4U4a4S27WJwbYT6CuaR",
  "key12": "4gZHBEX3Nggp3Nt9FPD4kPfVpSedVCuSpbWAgGNJLPdeP6QGS5LnJ4dSQ17x5AtsJ5A4LTnWg4ZjBph3k6jRrYsw",
  "key13": "rMPRz36baquR8vWFVCKpBPwJyS5w8mVs8SoGW7kRtUf2d3cSbfwxbNCH8Cp1x3TZhucf48MfGo1tS1SAEQFe6yb",
  "key14": "4XG7i54QFwGCg6MKWsde2199A7gMVtmmFP1BVKmWhMipBbC8BjHAwdpX4ehDPpEFc18aJxpUVG7ewoSMa4xrsSx6",
  "key15": "vSxCbrA9SvjSBSSgyh33KVDry4CBoSkQB2RBQ7EjTe2zULwTjXawy5UFQ4E8X3ohdZabvNNRqGpVuHueGYiMTW8",
  "key16": "2wue3293DQSUvK9Dib67T6wcKWB7XS4QY7516gVuV94JR8Q6b6xbVV8Frj1N17D7pJyQniExNLXQpEDQXmc9wEB1",
  "key17": "2DJg5rUbmdd6bpnm2P9HV9yrM8mjRPRoXWGRwauek9XdnA69rYGM6iRcSXLR3FAf72sRvbJhgps9QLFtSVxSeiY3",
  "key18": "4utsJ7rNVBAxCj15AbCBz6hWS7Kz81SeobR4kikMPXCtx3NxWAERveCgHKmLpYE4PtLygVduwkc5Bq7CizzGjXKH",
  "key19": "4jNCaffMz4QDqpGZ3yoNKRSfiHqySAvKQ292cYy6AbRKcHHEcd918rtJRG245sTJWuZ3godnscVM3mH5VuX8ZCaE",
  "key20": "497DbnRDrQPx4Ce36P1T6TVFS81eCYCMFUYUY6SKwpx8geSk2fXQrawFAfoK9NRSsY1fr245PRSLgzywgWvoRjzc",
  "key21": "2a3Amr2pQsya3QMaT2opmofX7h1mFCqGfyVMExjjRZ9CVEtYBCmvmsB9sAQU5LQQvqPG6dyRHr1znzxQc79nmMjZ",
  "key22": "2v6Mkr5ZV8AJEMRzJZQkrj2MhPDU4B67SGVPKPXdPGHzEmoQ4wsmWRxWGfSszPCXGR6cJMskzCsBiDwJJZTURKHa",
  "key23": "64ffBM3mzTw6RZLhbvrEWxj6ZYPeiydNn6xpE831Szeacpeie6xW8PHGLwKB6UmEbS1sfoor1kb3kSJh1Y5otTbv",
  "key24": "5U6Px1BNyXgMn8CEsqmERmrxLBSLMegFYWT8vvdQvozcJKGpaGLR5vTPybAKeoFKuRu75g34B5nirPmuA1ipffsr",
  "key25": "3gcHui8cjseLC7rFece8R4XZd3GNy3SwbTpkmGt1DpyADcmdPynqVKMoes1ZnKiPb7cJxXRyZLSdo1LJKadF8FQP",
  "key26": "55K9afHKhsBhcZ6pVgdGNVWcamjzY7MUsGm1JanuTitpSzY5958Z2ajXy5z5vwF4NqrGFbHrALputxXuENoQKYS4",
  "key27": "4TrGZXFZ7ftiBsrdRMb9fPZj7aXn1umGcniSnGU5F5kfXXAufshjtyRS4PgpPsTLsnK8tQYkWvwVrPstpMAG1VVz",
  "key28": "33xas6XmP5t2b4dBcfs7LpDaCivGjN9TmXLtEYz6VuQN7MD88kzr2o21CrAG5WK3PTrrmm7HbS6J3BBMQ3xWuyVa",
  "key29": "4K7Z5hsNyKCDHXgnZiDk6MmDFeWWZsxVigyCd4keWbBFRMn5J5yQfYC7w28xv2C8rjgo4AiYV3a9ZcugTHDMo1p6",
  "key30": "2wDCmFrN5ZXPTnTn1gNbxSyRVULQb1SkGGVULjK5bpNiLsWUpvZPg7SUEoxdfrFUX2Y5MQSYPjDW629DyoxosKSV",
  "key31": "2hXPsx6whXJaD2K9JuCcGut8xgpKwN43CgzTuCv68qvxsULzmNPRduqeXp5TgtsYGH4ovhRt7EfujLvLWXtPcQh",
  "key32": "aXGmjASjUFMP9dBhKcmrqyNiSD7WoQfkVNh5BfUUfLdrfSZP6yp8sJ6heUXTLEKzAeJRNBAkuvsXUccARYsqNky",
  "key33": "2CE2HRASxrYAeJXCacijcZQjHm68KAQgQoqyxgu3j3dRamtXvAtZGyomK21wn1r1rxU2r79r9TXfG62rztkQhmhZ",
  "key34": "4yi8bFRQpiow2nFaBxTLTgbMF9ZgyLbpk5E2tuXS2YDzBu1AqG4EUKcD95yBbSP2EpNQUu9Qis7RsSPFDdU7kqZH",
  "key35": "5JLs9FdpPz7rvuqraWM8mTPUaiThpnexdLyfRaX4mPpKbuTqsLEmgseAKLxu4KHvb7XEcpRLcsSZZpDe9f2Rf5Fw"
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
