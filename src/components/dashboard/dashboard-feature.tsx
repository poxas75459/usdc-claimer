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
    "4v9NVkdb6kbA77aPwViSfb1LyA9QVLq37MrBSNY3kdASUAEucq3F5Z5hFXj16Js6yTihudSUiSz9FQm78zUBe5zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lj2vPKJPNdJH9djWqNsqNTwYnpFm4SSoDahA2xytGFyCfUpCzaug4RDGwqj4TN91VLkL3uJVoQfJ2M8FpgqSQwi",
  "key1": "3VSSnidHwwfTBXHeEVXSw2huaYCYjFfNGP75AAaf18YSWYF4hyoxxmd97Rc3fLAApHTpmaB2MDEiZaPW8zmTXNVi",
  "key2": "5HbdvS47EagB8UsKtxTyZ2KRLnYpSkFrwh3nqnmxA6raHfbayifq5XR8MpjAN3GYjmQtNW8vywC8vxHswKtfGGCv",
  "key3": "SJ2Sm7nusjEyMx4mvy4dHf6mJENZjvKueEsZZETSMky7v5tQHJVnw7PBkq3F44CEqmtzZcedfd2VJKLCuTutbf4",
  "key4": "3uh7nzgdLPZPH3bdprjA9LN1zdpsWstjZ3Ja7KmTuWbFRRQW53KKs5yKQdPJ6Npi2AepvUzAWEu2tpHKYeSNuf42",
  "key5": "4TrZpLWtAKCjjLgtNeMuSHEmFrRXbF8uQ2BxsmJooPemw17czgBH3ZJoPEurWUMqKPFnPvwJpzFHULbXJ3YrPQJe",
  "key6": "3F3ucqhWiY4U6SydMPeJBoJvnfPiygCzc8pPxJbMN2VTd5EyaWWzG9ACH4Cm7wF6LJKg8DDZQwBynfQTXDrnER6F",
  "key7": "o2ZjQxi2m17Cbf9y7udsUVwaCqBQ8f1UfDrTtwENdVgLyGTCzDucEwfWot1VDxVkrjjjrq4UTaKe9SEyVrJXDuT",
  "key8": "55bVsevPXPXsLEC6gPfeQzEJbtDunvbA917u1EE6BHeDiWkA9XguUbkhkUZLxHH97sVNG4kQNWQQRdzaFDdQG7po",
  "key9": "4upgkw95EDRvh4W8egA67u7Eu1iXoKiQWyag9RAibsmvgxs5nCM191HaeXwsAT9JmEUL7FrXj4ML4aQUGFZ6td3P",
  "key10": "5KnJpDix5DznfQFyZbjdVWWN6GRynpK7YHjDZdKjrD8HjnDsHv3zJTnS2S4YsmYzXLpF7Ccua3ZqM4JJVJ4LEKvG",
  "key11": "s9dXsgDxCoyuu2iDk7nfekcWnKu62UEzfPf1CGh1dhRptT2yV9TKQ8wwgwQfpPM6g6GxqqLHyy1Y4oZ1fHuGSi4",
  "key12": "2J5byfJ9XYzcMheqhz9bfjijpvSccCky3ThdR2jidey7Gj1zKnWGJF1cGjvPewbLx79y6EQaq47iaap5PDZA1rTf",
  "key13": "3eD7LcdAozhW6JmmuXnLL52A6YmeV3qpShn4vSjFeF58rHhpFy7js5UC7D9ut2ijMtUXteGjHFMSUfrBeUvBEiuh",
  "key14": "65cjeQpwcW2HdRHMXokYn7cVjhNMnxuJKy6qyyMmrXN6Pq7QnhNhsSXofYDQ4QeoqdzLm4gEwAy2eCUgfyQgtg8p",
  "key15": "zXPfBAGHB5LQzbfXzG4x3LG6iCrmCLZREMeSQBJPt5dnnLAUWyJvKCho2ZpMkvKf13ZDEv8sLgXioX41VcjUJT9",
  "key16": "3S6uddFpNeoPNc72uWabUsZWLiDjpkHUavDJy7kfNUX73pzEnakPR2oWgYcSpnt8VhUu3wRZxZ6qwYWz5nC787Lg",
  "key17": "4pZ7Q3WSYe5GfmnStkGkbMnbjHM2KiwbdBEGN8bR2a9bgCreRfMtHGq6wuCdWnmTuaWwR1DaHtapr2PYzEc161P1",
  "key18": "4sRtfGRR31zUBCS2Vzehsow2Ud1pagGCfiBf6C9zHKnesR92qkt6VWCpDCEypFZYcd13fg1qx1f8YdPh4scLdSgh",
  "key19": "4nJttxuZMNLpTvTqQeyo4VD4DooXw1gGB1YimQT8KCPVDDaLgCrmtqofQCEGo55dG3hcEoqzyjbSYKdWb8LgyKPx",
  "key20": "21sqvFN1UXGMwusUdgr85QTUZuBc2AGkyRiFEqM6WdNewixj7R7C9DBxtLtA5oJmqFbwPUwXHfnz9Yb2iAjHEVTP",
  "key21": "56mBTTvQVcpce3AXKUdWrL9GxcofRdnJRkaF1n7qccgtJJE7ZzAosuofrhoVutDbCWfTbM43DSEuK9SQug9VCq7t",
  "key22": "34v9bhzJektNvCfKdHFLxvJPpRPxfWgZQJAXCiv9ng8hf32BHrSV46th98FdMX3gZnQz1oNNpq1SfjkFQCJAWiSF",
  "key23": "4P8S8929LoQomEdy6AZY5Kg4ZcCF3Ud9u4VkXPoLA5Bs7My5k1vDAhByjxsf37TDfPz6fEMT13SoePS2rjkGkMTR",
  "key24": "4NBh23LY6Ar2q4cPNjEDdsna9St1Fm8yvkPvUjyt1RyQF3E2PmmCLqrVRQExT1YsueH7kVu2Dtx4c1D97GyoA6w7",
  "key25": "3nJYbCsPuNHBkvW7fAmPDC9MxjmUdGeHacK7qovRWN3hwFppZizRo3FFterCpa9uYgycERTkYcx9a7cLgYy3y87X",
  "key26": "4DBxPTQJrJnqFSUh8ncjHV6UtfJ97UU7xKE5m7ji2z27YsMy5H7BMoDPAw87TXiW4bb5jWUjqa9dDsF3Jtv6ThRy",
  "key27": "4MqzdnFDXH6GZ4wijUQX8ETzKNBKUHWV9En4mvmcuj9aQYfSDkFeF6QCkgX1kxjEVV6vg6tBVe879UBtNpV32Buh",
  "key28": "2WKWBGwdu4EX66ugG3jT4zDhFfiNGwuvS9Z4cAoswAZ6wTmoVhyw2mqqs7Fe7YuPm4GBzfRgm195SMhyvYCU85xt",
  "key29": "36iHzRk2wHHFYPkspP7Cn1hvSWtoPvCX9D43mgaqXmwbY7uVLxFkpzCDXUk6C9RSeN2v1qry6N2rwBLUH9ytPoMr",
  "key30": "3FBHxYmXG67huZgsC49o3zRxcFj7UJ2Npc3DeqsUaPiDe62hNExoP1UMaJnhsFEKgos1sxuEWKYfFAX4q9F55FnB",
  "key31": "5dzEyenkYiniFFWNm8JzdQuKj8Hm3z6eYMwv2euHC1ApkGyyvwpcJcKgdSNw3vZ2LHwSnbwenyLw25sskPRfD1zD",
  "key32": "4HsrZVgJf79WXTLJTeqq1biGwAqY8YzwiwVhu5UaC7AVdhzZaE3se8UFhtvDdXZ37dckfW8wxY1os21w9pm5pCyv"
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
