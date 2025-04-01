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
    "4WNyH74P1yVLhif5SWvrddGQMGR7G9fgbsbUCTrhyWRrHzZ8QGwAYE3pqdrBEYg1rL9Lu4DwY3tEzE28gZYBFpqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cnBPxyLMEM3cg3mJ311chAgKyvtXpc9spM8LRJ79M1eDafjSNENcSkyofAHFxhNcR2ThsXRtB4xWXAe8weWAGef",
  "key1": "TureoizozHFUtQcWZ5VWFBQZKZ7YGNhepYonbP1NpVydH7jS7xM3Y6wnwGsPfEwmTuVSmuYGSiwvpiTENUPFa8g",
  "key2": "4q9Z6CyKA2Yc4GNwDKNF1mcUeFY76ke5YEY3hAwVU7voaFFt4T58b2iNfEvSdLbnSBmd931SYPqvwZuLU6q6mLU4",
  "key3": "2Ap7aQtKZo8T4mUPB3tzqVM4b3GuoczUQJAnWjZkzssLBhRZoThizAzpDatycTNYdoJoF1iYB1fW86yBvnQxNX87",
  "key4": "4mhyGENAeaJvbgY4yvhVksPpxQmytqirkZiDHHEwh5gxY7GHQYG3nH3xXjcPUpPZsw4fCt66b2aygs4mJTSXcz2Q",
  "key5": "V9rBx89TdBzqcbBqo3am6hMb9kdtEsq7YN3PwXC9jVxT3fNWTXLhgwn2GrAsZFN5ZhpzHkEJeqvUzjpspahHtCH",
  "key6": "3PDe1HDbq9nhBAW8UeF1zKTHhFJsC65TwUwiijKbRiSjtQ8E1nWku2AvZToEwUwWxc9p21HnAoDvSMSqnRdpPypx",
  "key7": "sZ4NPAf2iE2HAR6bcV6KceJ5tohZsLrQLkXgwv5RvzyELF9kpFegKQHYTvE2e3cknPGJKFa9M7fAsmeDHTPCM6R",
  "key8": "4YVRUVBHRfEVLumabSDAqTaZcMUnn1K6aLAyqjZacg16X7ErjuCR9ccyaKCDMqLe9hNFUgFhWx1YbKt8QeNCW4K9",
  "key9": "v7tXs2rAoZsox4btDXHcz8nZkuonaeG4apwdvweSvfpjej1ESwYkEfzqiSW6XfJTwFiPZKb8A8zE74CC2Z3pMo1",
  "key10": "37kZry4YxzPWrsf8nuyGibra6ipraCy1Gb7tC61VExd4ZVkpcww98VxXH61tvMPqPaSC7oFTQwgLHPc8fEFcf8xC",
  "key11": "46UGci7eVDy5UCHjHMSoyoQjoj1q3G4FeVzqQZpTxZz8ynTaEekspZtcC3ZoHznZtbs2dRiQbx8AWM759C61RKQQ",
  "key12": "5Qpa3YpruQ5ZKwa1DTAtRr4fcywtq642ba8vhx5wgUb7hwAuAswgEqkX9ZaaEoRgFSmjmxw8XvCiupbA55FZgshP",
  "key13": "3amuYznQYknuHf9VJcJM27Tojfv8stBPpnyT3yxCpqxJrtrMFD9xyB3rubYctRAHKba8GkUKa6K5PeFy8zYCKyxv",
  "key14": "4xoj2x5ZGKXZPDtQVGsLSdwYc4qty89XUv3DZU7geTgaJiNrcYCsuhiDsVeJUSGzkkL7CwyZkWvGKdKBfEtFfCV8",
  "key15": "5wTCLd2jag3EsG1zLxTwStMZt4HYdrgANsnaDmTVpwQuKAvdFQ8QNov3nr8228bbaGhf7HpsG5LXmJsMNLtb2MZm",
  "key16": "2jkdcvuiSw6moMCkT5KgEZ9BPQTrkxGfzARpBNVc8J2kJWgsCn3vudRBn8g38b998UWZUmLJRuEttruJiuVDhdfB",
  "key17": "4bRdNrDLuvYgSm6CXVPgX4L1iy8FBoqFASXR6imsHMHCk43LXsjveZT8H1kZRfUwbwqubYQFeduFkcrSayN8MLgz",
  "key18": "NHHT2m9F192hewN45VppFHyqnNaXKo8Akwy9JFgWqfzzA7bUEQTk1JE923i39dijmFEQnVyEpbrxFk89Yr4EovV",
  "key19": "RB8S2KBVFgixhdVJDdTUBjAGGSvQVoFqWtaafcEZsv8HYV2nJHr6mykJxcNMBJLw6HRNHRmoG4mivZ6PNLhZM1W",
  "key20": "2srDMvAoS7ZWKihgXBCkffZfqEdPzgkHuKgiiof8RtmcyzDZmc2DLRVPmR1B7peovFY7DDzARhp14SJeEZozTMrT",
  "key21": "3K2HW77x1wRe14Pq3SwzweXZQAJk4e2jWzLcQuiV7HXE76CLq2FbueN3pMU2tkjwWMWRsGNnpZ62qNdUbNJNiVnp",
  "key22": "3UYMAqJY5TCNhsjFsdLMX9SvnXB9J4ewr6YfrWUS9qceE8bXG27STmFRq5TrNNmsVfxbfEsdxmzTUdQthWa9TD2Z",
  "key23": "2V4Mqhy2fs53nMaKxch9oea8HYdu9xXbK1y5fN1ZGWboVXXtU2EAjyym56Jfse9AR7Xurin4SNNodMTMzwBvSvKf",
  "key24": "57iJoDZRkn724Yyz3hocH3eV6irf7JwgW8NKciMUKPDZhVtHXKpDYaqvNwJiNN3AdgNn2SEm82AtAoZsg19isXwD",
  "key25": "2rfVgA8aHT9opwPoL6GRJDpMm1rQfDHcK1hqEtGANHEgvPFJjdqAfU5XzKxY6kegPHaCiZYZ7efdTFxHpWhpi47j",
  "key26": "5zckqLUoHnJusmQiCdWwsAbiHtvZRYmpLrBNAHY7yuLqSrBm3kdyYi3T6v4meb2NjLui7Kk559umYmQJKVpXZak6",
  "key27": "3pHCc88Gx6WfkiXV5z72ZBtdHBwCoBQceL2sdert4Ewzb7wYXtNPaeMpxDn9tZ7tE1QnCfAS16i1vQHH5N5LkZb6",
  "key28": "579TKgBAUh8BzR8PRodiX4KdFybAF4PvFZf6MXdtj5CMraCnMvGg3ovhZnZnffnV7uPsxrr1NWAk4EXEfvxL8XF1",
  "key29": "4HMHmAFFPAKaAV1WAXpxrQ5njkUWGTMbeHXQdZ3BeS87G8DCb11Cbha12aViHm8xtU2v2occu5SRXWQHrRavX2pv",
  "key30": "3ZMys8uknurJFUoGWdNvoBzskZRFk4cZLMVTL4tx9VQdjtvJNtrkXrCxapNyLqVqegvUHVSoF7KXhbVoKjnSJhLD",
  "key31": "x2MhENGrm159UeUx5qsgtYBFB5wEErrnRaHM9n5ZfyjRLY1Bn3nJo45YeyjG8VRt7wXg8KF4uV3wtoimfG14itd",
  "key32": "frfjQXKrE1sCczd959KMUpPEsztWJ9rYhZQ9gVE9SPKU4E51yGSVTAxyxFebCSakvne1AEiFMSK2ucChVmXBpjE"
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
