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
    "3koB6CGs1NNid5d9mT8Mo5xXUgdZCHhDM2fK5EwHjKLsqcv1YvY2X9PfqPRzeM77ixaYHvNnqQMFKAoCD9iXgRXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pi6iUZHDrSHpNmtmyomeDQkYEVRHWv4ctpe9MjDWC34yre2qJnSvmfGxKPKqnXgR3d382BBfbZtwa3QqsXB5jjo",
  "key1": "4sRjTJUQswb6wa3XyqPtURwacFef2cTCaWpNL85Unz3Y2jQQiqWv9eFudcjTsKDYJGtXNZpckMT25vq739ndadaU",
  "key2": "2YiK9CYgd4kAH2Dkr4RLstXCuCftnHbCjwpiTnRGVhMKjyPoH2nVSp7suqp5FgU2EhNwCa7qccX6AKCueiaZ8S5b",
  "key3": "3krQEUExdUM48Qp2GhyTaMG3cKvuwBQ9TopV45oY1TCUY2oegrAuJuiRRbVbwTz3eW6YMxLJMUSf49o27dzpD6rk",
  "key4": "3zzef8umB9fkPYvWgQt4J4ZYSfGfrz4cSGryBWczFG2XtpgCoeMFfyxcakYDCVzHz6RTUrJcDmAKmokyZWWZ9x1g",
  "key5": "24Hp2tRcSsqcGX1Py2wggBax7q3pcKBCrbYuegrj8bnux6qj8cAZpM4Zx4pMNft2oFngstrbDvTywBHX7PztWwBu",
  "key6": "26mZmEPdM8hHgjow8kQ2K1Jxrur5rULxDfBAWmfdFHZZbqsQhRbVcdRsuRQKSzSBWZFMMYYRfTRxnSha6ErDzmPB",
  "key7": "2kb5mSrRbdqrZwvP9dQ2ZaybWEGhMPrkQdMFuC5qq34oCkFCPRYSEJGszEJJKT1m7R36GJAnrmduiQHtXF1ShzaF",
  "key8": "2TuFxUbFp4VEcSTEJ5upmUL7LwkCJ723v6ms59C1xDuAoofFKrNJB2cknJw6NTnmnxac2wAD6HMC3PB1PnEodp5u",
  "key9": "46rRBodReXHMKt7gzdDE638HybC41ix96WJTrXeqvGcXQTCewLdQvBsjiMiw7AhpHKEHfasNFEcn5LV5bUf3r8pm",
  "key10": "3qXXTA47BttLNLCkzNiKBePCCexyeAWYGmfCJpmaHdE6rFWVCGvPgLjAHsbf49t26Skh2E2FNxpXtvo56GtwbYm1",
  "key11": "5zn3rAWFRU7h13o6YproqL9osPVAv7GnCXhVe4srwEmS3vj4a4eHFiGGwdkEPiQrhSwQWTqy7h3gnFX7auKvCXgj",
  "key12": "3yU4yqsJKBxqGA17AziA8okLbdvYtzYrJD29m3SSfS4QSTfqisbgTmdMdYNeoTznES1Mz71xLsLFYFzBJWfcmjAu",
  "key13": "4SH8JH5YidyUCb7gmy2A2osFo34TCYKn343MH7pcihEciEuWRWnqs18hHxnWDoorzddB1gJ8rpyck8WYcha3B66y",
  "key14": "23123paL42eWVv8zGp1qUVpSNSfpfp5tzV33aa5wL6anrnu5mQ5rAJvXKhLzFByxhH6t3f4r1U8reApPg4Nntoxt",
  "key15": "2MwiN5kC5nJAFoDNDrP385DFzg2Q5EDPfMvcCukvDoqoGEVYPphHS9aDEDBTaDwPg1CFyarp35WJMLs4R16XNXbG",
  "key16": "5aooVQCcLCTStFYFBpefLWRWBBofDFDapzqQgSLiTQwTjhUA6wgHd8W6p8P1UtRwXfyqUvjSzZS19CxB9SLmRsnU",
  "key17": "5BTvdnk2p9PJ9HAsC8gBYaDaNZUqk1TGyTJ3na2Q44x3KUJ1PPCCi3ikqAn14J2EtwvZqYshMbZxaTQAketDjiGc",
  "key18": "5z2NavJXxdp2c67eGy86oi1jcADFYyC2diBCQqYEvkQv7WzVybNxrR5HA7AMVxikAm8kh2vaM4gJQ5ZC2AaWRb4t",
  "key19": "4ZC8AiLzaxwhJgFuqJHkBihv4GZQ8UvYvjAC1YuH8uuh3vusZxMEMQLYAmZMSmbkemsC3wvYS6X6RwNjBQMfExqj",
  "key20": "5V9duuRk5aZk2cvmFQ8oHaeVj45xrRgRaxySb3L3YDCAN2obEqGkSFGUbE3EfwfnxTRebKeEX1j7AvyWvUtNjT37",
  "key21": "4uarQLVoCNCKAW8LPnd3Aau2fYZigY2b5jrpX5n5ceXHYetZbVzNPd3zGDA5KiDhNfzupkwfcoRzMgyzR9oZknBF",
  "key22": "2WbJCvKnnWYDt3Xaoc46RwkrQ17pDqq5uQCLB52GNwcSAeZeFsgRumgyXxpPWDj9i8jqVPaQ6fdYYkFQ2Brb1pVz",
  "key23": "4Y4NuL3cZeibszkZ9NaFSTeEp6ceJVX7FadJStJm254UxTUE9AW3UbLVq4yC42VwnhnusZsavanrmoo3aGsEtCtC",
  "key24": "56jNkpACRefi6XuZkDLhiLSToQxEfder9e5ktJwrQRC3z7MCZH2vYU9sKi6eDxM6K9PPphSw6QEsS8pVfofNiyYe",
  "key25": "3CTjijkH7d5DbYa6eRmTjjnYjKQj3Ato128SsWhZZFLDXRV1T4rsF8pbPf9FwYExQ7CD9GjYyeYbWQv4Joj8rLkG",
  "key26": "4o5eSL7jgMY7fFNfz26hv8ezNhSEToQCyEtvrfKQ3wFZZCFQDZb7Cga7kCwqzM388iFnJTFXEnw1gzWpxW8gAgFH",
  "key27": "4wjBWPYJMzgm61x5dgUCMWXihdP1DuB1faCSSc5RHNcpWe825NszHxAz37WyMZrhCZoJMt4PCJdWHSheTgkqq8ct",
  "key28": "3oCpZLjvDZNmPYwDmzwGDUUEK46LDWMdtRVrSGp6NiPX5yDXBvxakkmckQXKMr5yajMSQSBPGvKmXFa3qTe5HibA",
  "key29": "2HHr8p3rQNqffPEouXSBFemGhtabyfpFzSaUjCHizSLsan8euhNDFgtPRxvBBAF2RJos1ygQKo9AH2ubJqrswZxL",
  "key30": "2npgTj88YKPjncPGNPsE33i8AGE7CTJnamXRFDwXT1L6RKttu2MCmUBmhgFQ9wsMruJQtKRFCBsB6vrpJGPgQ2iU",
  "key31": "4PJ3RX87MzWDXF1wGKR1a1rm5xwjDQRqBbE4cJuEtoFZkjASZc7nFgCvw32N7wpYmJP1bzRguVsVRJ6p3VEG6rgX",
  "key32": "ARUoxCch2TyT3uCiAvxHerHiMJCr9oFCxFo8JVDzvRU9dYWLp1sTmgwgKc4fmtyFv1dAM1RSMjC1PP43sq8ybAc",
  "key33": "5G28ujAFaDBi7MzY5271dAkD7t81EXHxiasnf3ybhpaFHHJh1qsm6ucNLyRYjXmz3P6mf7AAb1JwEzvDgh6gPNYK",
  "key34": "35sk1PjRQJED5HFqpBrwuEHsJk8dnaWn7ofbrGkkZdjPohqXKp5vboGBDoFSZFWhSxRYHu5RrRR6QV4mx1Dnr8Mw",
  "key35": "aHjVbUjRGcnBR9ncHrEKxajSPZxu3JyccHWxsjAoFNX1t8p9KTkBFyqerJMvD1DRa3wr7iNANKZxXRqWbqyKaxA",
  "key36": "5H6hD1ht92yBrMv3ppo24F6sT5JdS4dqhTEpGQ6iyFvERjf1NKQSEZDpAdexz6SGgurqPNkuiELr4A1jDUnNaRRr",
  "key37": "2HSbuRiMiqHPDD81gQpF8yfMnLoGa31GXgfEeV8YsdudNwmycx2pNQdpJ2CVarquo8cV21AdqcNQ6CbhdRaorLZD"
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
