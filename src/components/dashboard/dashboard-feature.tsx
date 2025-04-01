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
    "3UkyD7S3MNuapP79QmWNtA7zFjKsVhGCwLc2Yeafuq8r2JKFXVDQSyFGtvz1REXCSpvLNTvpDyAEarRHwjo55DKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "221UUUVEycFHMW8p6NnSLNjov4iqfkP2VcFgGMkyDZf8uUctaR4pEkf6kpScfRqG9mjK77mFF3Woc3EDb7LYnEyQ",
  "key1": "4gpN748SBFQhPFShJuiC3X8ZPnY7M3DfFGxauLLGHPzzU4wGV1WA4q687jnd9LoBaxeeNAbQGayV6tQLMP6NLs1U",
  "key2": "43NeXiLxDBg2cGLHvtCk6aB4gi8P8a5xSmRUzSuLjsvXL2hGVrJAe2BtptpNqiWg5eWvj9EdQyX81FHPvvUEjuT5",
  "key3": "2AtHixChpcaeUXVMog2g7fojcGcXQLKAUsaR4GPLJ54xeB8WtRaMd3hp9bbivhfVq1df8Nf7BqnkRJm1vUWdHjSP",
  "key4": "4TZfUzwJeA3adpidQ5EQwNh1QnaCDM9xcAKaeQwgVsFYGxpXz8QNuYoQLegTNAzrUTaUd1hQjTKR9A174TKuTHP8",
  "key5": "X92eV3h7a9LK9u3ENdM95cQDn9g3AE4sHSszAexSVfPi8nsHWgDuGAhJqikvDDDPiKaLJppgHudfjNWw6F2Gq2z",
  "key6": "53zPnPPBY5UAht1n9pf5Y2kQQ9vCAn6YndRx3C8NjmYQiChwdB77Eabn9uvS2wMgxYyPkviUL7ktFrnfFqPUrGNT",
  "key7": "2qA9x1KvviQ4wsJANJhe5ir318q2na7BzHkQXS1ozP8SL2k3CQEuajQGT1QguvJ1r46DNmfGS3C8vNSbG7Kpw8or",
  "key8": "33i9gRyd7yn3HK3DqYr3XxyMjfXmLfosoaeNpAKPtLJo7Jr2cgW3dEeQBpYSjVti6dUg3T3ELvqWU1sedK16TeG8",
  "key9": "c2tSiYBJJ2fvQLkS8c2Ga4Ub7wjFPKWAD2UYPoZaY7Q2hjpz9JrR8g2UQmQ3GPePQHZpfPhACHLSSX18g5Zc6Zp",
  "key10": "xT2gSqijQyK8npkLsj5mvvLcrEW2Cya436NpCme6CWrXCfXppoeH9cvVXBH9hDQQuMjTE25vZc6xy84FMTRsaf9",
  "key11": "mVhDCHRuw6AHjskcXBV2jgXNN4qy4mTR7ih65NZMniaVjxVPAQAT9aoWRXGgx42Ne6WEmnS8sHdTWHDYX9gi2PC",
  "key12": "3m23KoVEQdytx5fcpJdHxwsdwdKffgzN9Utr1A5adCLNpqbuaiVMjbSmD1hzDhEJSsM5mQPQ2ARGkt2NADzJsTrh",
  "key13": "4HxucZbW3Jkcrnqe23jpanvv758jXKVsVEHdGxDSESj162APVcnJG2mVMEqAReRVAC855fgMAETdXnr4DcQaPg5j",
  "key14": "ywsP8SDnptcwmNWpsvScQAr2rdyDRiFVEbLiDnyZ1WPtQmgXZFjT3Gf3Y78gGu6Npby4QemjqeNcvJMdkP4gjTm",
  "key15": "2enDWpvwgq2EfskHybFv6hwicnF3vLUKWM5MCTijuXj8pHH1NjXUk4Jhm9qiZQeE22fQiiY56cyAGKgkAkjUXxXQ",
  "key16": "4CHkSPrEsfbfBVYWBPqJZLaVo5sHbKG3KGjrXMWqFs8fUeVXucLdrf6kThtYzdpNeitZs11rdEEngiSzhVJ2zkas",
  "key17": "fsfSXpU8qoPXo8TxRZtBmCdgWWBi25THhYfY3gp34L37W9VJACHfoKiocP7CpmzAkfPJU9EGzUeEbd8KGFeMhgy",
  "key18": "4PPjQ1SGpa2oGfAsQXQ6gi2aAR9T812EY9et9XAWEMqMPUEWg5wUBGLoKK2U7UmCkDXimafyiJrX3SGJoqDnRudj",
  "key19": "3MhFA7qvZo9fEwubrZhJBfLXsTghqgzqFBatp7ejDcoPJ1nYsrmR4NwKyxq1H6rJ3dR2nBPsVqNMQrtojow5QTgr",
  "key20": "4jtXjQWgFrFLtDrKisKDNLFyw2pYrnm7pHNpzXLGw7SSR6UnWrDqJWz9bsKup33cwxeVycv9CN6Nwrtjb83K8Fw1",
  "key21": "3r3oFHQGA4CP2RXRiDqjnqFQjA643fGzNw6HRN55JtpWGXh37iru1tu7mroyf9eqrFUFWTv1UTpyEjNuQGZvmDFN",
  "key22": "4aw8CEJKFnNcVncppMqtAw2weHPTx36Pz78r2sr2r72Epskfkd1VaygDqcFZj2jKfnzci63j6zPeQDvbGjuYxvaX",
  "key23": "2GQiQwiHYH8uLJ4pRCmn7MYZkaojSbe51EyhAK25939R7PXZTPukMXkU9hw5GGipyFHBuJidai167WZyctStx1ZM",
  "key24": "4paZGSNLw9HUrGBFMpTaLiiqeMSdNM7sJsA6DrugLdjjZsaKDJC9wiX1DgofUu5yh6hiSB87pzCtX4gJsQxbhy5Z",
  "key25": "3mKcNaCSQRrM55xTQsTJMnoTXTfMQCnfVvN15kxjAujhizAmECr1aZTiagWrTZThF9tLh6LaGg7MrnqmduCFAQxF",
  "key26": "3CG6wGeYZUWEcEqub5YjcZBDBZEAXzVtoefb9jhiZ68FavHDFtTNiHWdKYhmyPet2TwfaQ8wJBs91xvDVHhsid28",
  "key27": "5hacmnWwY5HJPvtyR1ptqN8eMckGj3X5caKKo8QApCArr8H3bPmX353iqFymYzs6dqHNi2xAupFrhMNWcGsA6bQU",
  "key28": "57i51i4yWF4KfeEgHToKEDTVtoPS9sDxm8tfSRUWrNcR3RTgDbf7Kudpi7fjj7WuqhHu62C3J31VnqZzxBh5uVxc",
  "key29": "47WuST29kiHFbUV616yEq8GCV5pg3vi3mNJDU1VDRS8PGgM7f3Ew4E2V7Zu7YdB2uszWE8s3DHmUhuKr83g6TwPC",
  "key30": "6x2LYptmXHhXLnXx6YU3ioEndLtt4qa3vNBBFkN7UNmCgaBrDrzUERms52inYc96TzhwE6NLkY3ky4fNQsmu3Cm",
  "key31": "24xcgQ46SuRMB5M2xJk51qCeZagteQ3P27aBRfWB2b54QQyoWbWK5D3j858EyybkAS4RgNfXDFMFm7T6AvBdV42p",
  "key32": "4b4ombqWBrWQJjTQ3wSoB61mHMVqCGfyMHWgaSk1QpXsupoKDZTgpqkLzJRe7CzS97wAYaHWCw4ow4MR3ajgE89e",
  "key33": "4Geku4orgZx5du2cDJKFHQQ7cgDYP8z7FiPEvy4PSi83uDR1ndvvSMBp5GoUxLkt9BfR5Wg4oFGkeebeKE8iZ9sv",
  "key34": "2WUzzMKSE1RcZ8YBRng3QhQpMs3ioEeY55NoGVkrvHfa9j9LGGrsvxaFtzrSs4tbhWTzYUkS1rAFJeqPpDoAqgSs",
  "key35": "5Rw4JBMj8YJFdc2mBGLPAL5YLg4QkFU95P1nHVuyXaMwVV7ZBuoZu4eXxsJsZaiFFmsXX4mLV1tiucQTpdf9677W",
  "key36": "22fCB4tL7mto7RVYHLe5t983fpTiBBEuNJCXonMHb5rP2ZWTwHyfrCpAwnPfRMfM4kQURUMECJKymG3j8bF3BWR4"
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
