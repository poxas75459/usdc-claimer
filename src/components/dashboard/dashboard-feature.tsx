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
    "5vM4w68H3UMBFvCohN6pdCkVmVxPFNSg65Q15eQzb1Z3xfrhZpH8UHx7FpkNJTF1WWxxtCT7CvcDWfm2x51yp6i5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i9K3eeEy72XVQnNa7Me52EovaGwRybYPvJ2PiKk4EYVYyrFdYwmucKY8fQvdfVZnUeuvzLDfCxz7zdj1Xvkgjhc",
  "key1": "2GMAGmvJ8SgXTr5NwHq9qvHc6cKgrguYfxKzJxavpN2zptevTZoiE9VazZx83gLVksdYakY7grAzpGQnwqJg4QEh",
  "key2": "7RcBXRJ52gQBpj4eMdeGTgQPjXYGo84tCkGi51hbwvjkQ5vbwRsASQjEBB7Ya7bmibpWJyG2izX9PxifUfMYKjx",
  "key3": "5cY3eXXWzW4ib6LRiUjYKnnnZoPdDZ4NhcCMynawShr9uZpzuQnCoPDKC3nXezetbEEfX6cDg2aFBiPGb4usHBUT",
  "key4": "2p9KWVqHAuaQR7wA4dkD5Xs1tPQaUfGiFx93pSgs2DkLcd9rnaTwG6yLEsyxiKbTmSbh6G7E1G1tpmtAJzXujiHk",
  "key5": "q9heZibXazKTH13p8gwkWRfgqtLbZJXzAXPLFxeLT7rqzATxpDL4bn1TUuvh3bpDsichZvGxUuXPMCsFvtZUYba",
  "key6": "4Ac66XGNVViL3rqLTfJhvS2fJEQkA31JCqBXaRUde5Xhwn2mR5QBZ2EFVXbvfhQ58PE6VFvbDhLwnykLMZqC9rzr",
  "key7": "5prBGobXzHhxjVXKcwQzNzfGhWaLMSfej7oEsjtADbkUZtjWeTyse8eSYQARhfbTBegSNiLRSpcM24pu4drZGjLy",
  "key8": "35jjB4XsvQ4zaq3kjzCacu8yiHd8fzgtkp3wdrykATNVWPhuXxGLhGyP9PMJ6u3qnpfkdMErESexcb867hXQM9ML",
  "key9": "57snLgPz4S62X8fQCGomg3U2VsFJqfUfDrnAXNwNRVzDFfNrxdw1ZLdgfi5sdF9RmboHdMCtSDL4qm2rqShztxUC",
  "key10": "EtRGYnPjbzad9eXbD4b62nrjoNM1Scqb1kCpu5vUZSz3RqzJho2yG7eeQJXWhz2ANs2MQT9ZnupRCnFrPRn6Amb",
  "key11": "2bfDMbZW4C4sDT6FyAVf2gzXR6rqyTxHveWf9bXLKbfHSST5uQQ7u9FzMYBFez2Mjz88mPvrDg2Wy6bnLaasSB6e",
  "key12": "5bLRgY7wjYDUZuSUxoLETf9YfUw17nc7PjKqQkasfSfkaRn6fu9YGhxPuPPXEdL2ruUiCz3nSX634yM2ABUTVXVP",
  "key13": "2eSES2sB7YxU7SZX1ji6U6QSTsoj3hnThVjXC79L4GHqnu1FKrGuX7mxv88jRojqLEKau2jr7mA3owybEQiViqNC",
  "key14": "4e61oSFGf3LkA3rRSFSgLeGArUk39uggmZHzGAc8QQr4VAeQivwC7Rq3Lf9VyRMXzm4V9S8CSdfUCacsTpXkTKVm",
  "key15": "2qWBvdw35mto8mFifqSg9x17NbgRpWFji3Nj3h8ypqyUeuSHSFWZPcSUudGtZD9xwP5NvY7E6UZtH93Sk1ZAjYKd",
  "key16": "uVbM1bKn7Krpt9WL4ehFaJK1AxPMN2a6ayoQsQz7VkdyBHx1Xn613rkKfcfu9f9436AZkiSuqna64AeaoypP8Hh",
  "key17": "5DDzYMZNyHTB6R2F3nRFjZEKsWEoL6X3AdRiFrMyfjJAnUmBdvFYjhx5qpab7wi1MgbPYmuy1wFNVT4hWNunAzNG",
  "key18": "45AEUZA6ZGLutfbpKvsmGeaw2UaAsjkzAQBKQSZpgXCswcqs5ff4CvydF78xbeaPyAGKhc5datCBrTf4UZU1pDpR",
  "key19": "2vzcr1zfmDivQijYWWpqHht2FWtbL1J8y9NCVBFdgjsUScxhxQe3BGBfTrNTW6jA3gWGKmnKLtLCF6fmxMiAhYrX",
  "key20": "49exeshJALQSdeeAJQasGTQTSzEzYdoYJefQANQALTYH5j2SfbHGadPauUmaAE5NPsiHLnU3ywwpTyEf39WdjvWB",
  "key21": "4VNn2QRPxfxWGdLEK2rTqFGCtixBL9H4Den1U42o7FETFu4mVEDVegKCdiFjJgmGAugoUEScGE3JnwNseteswzDd",
  "key22": "2DcEGGuhaKkPZdPCf6xsrUjX52DPoNM92U3H2sreBUQY64JfBFjqNT6YeEJTCwe5tThA2RFPFejpKTgRr5NRk1N3",
  "key23": "4aMcUMtfNWeuNS7HbqZTkBHmm1U9qcPue4o3aZH7XKBfcTgmhUnJYx13388WTy79w2TT3Py51kwsSsKBph41mAjH",
  "key24": "5ZqFGwoLX4Lyox5EcaPyiqjXo6Kx9RMiHWwGxYTpcRPvSL85m1K7EmtHB1upypJwxuG9LvNRQauEyguRLe7WMcM9",
  "key25": "5dr2JgZdbxpfP3aWsVb16XyBURdUrWdFgXnCAxGNbfTbd6AtSQSRTvefE6Z61Lme8woCF3N5ngEVSgb5R1MxY82k",
  "key26": "2oHDhjEmK9PjWazZorZU6weGL2i8Sm7qh6WjRV1GfjA8YtceEks1uTeue2n1iuodEDqKf5Q5pRGjwBbmWZAm9r44",
  "key27": "2J2JdCuxkaRWo5kJ7UujFZnRdjXtaXFY24YWmrdNsnTEDsjE9F4aR7jqcKwGThBL94NRTHqnXJoSC2JsBRKKymHg",
  "key28": "Sn3KdRhqAZHoSr57AjCu2D6kgSKU9ALpNvbjHPgEfkmoWTSiNVVzw8Z6uVKoHJZwQkDs5ZCnXrDDd2YjyqSHxnP",
  "key29": "5qURq3PTFVrkkTuPpHdnWKNjz85JGq41abnnsvvk43wZ8A6WGMhyj6DtMyM8wqc12d8Bnh1njjE5TmKfkmg6NiEY",
  "key30": "2HEQJgHY6FFA789Tcd5PZtLTM16xsXHb7YpKJJcsNAjeqsXSc4ntjRSrm377fQbTE5WncNmxcxM3ZhNJyB9gWiDZ",
  "key31": "2yiKSTFyZrVUyv4xZDy5T8mtLyp9rAWsKgiRSwR3pcU1DhnvaZpMPjZAg4cV5WpkGCkSwCAh2FPV2JBhYj3h7qyB",
  "key32": "2xRTaDmfGEb73oUivqQnW6HiHeQT8jqWcEi1imiruwzsm6xsqWntgkEemjcNeWRBE683CN76W3XN6Lz9EUhE4dAE",
  "key33": "2jXwBvtmxbKUqiByZdUMw5cT3dDh1kQ1ezMrAoCdfhHGad3vNPKFKDXydopSfNLyW52bJGCruvifyHPLu5cs3uPn",
  "key34": "4Cx3K3QxDoCjYU29fY6GKWkuSSBgDamhZZgzMPEjtB3vKZoi33ZzyARjACf2TZwJCbeA5218SpvBUpzLyqTSEQVG",
  "key35": "5wwpsZ7cTrHHwsTS2NpbNfiWdXE9YWmn9SoxnsPriU19R79UifiUy2KMKmVLCg8Y3bueWQq3y2yCgzo9vCeNuBk7",
  "key36": "2SURnqEZyc1K5hsT4YP96cy3s8SjUboTy6evzvtoA7F874N4x3kBjhpnzd74fa1S2jopZhTv1RfY6Hnn2q4ttMWt",
  "key37": "29bNK44nchFcfsYjeQVZzbk3wcdpAbeWCkTpdCczkpQtixRYAsbeLFM8Bpbvd6sSYcm5fHxJEtow7ahk2HzmYpuD",
  "key38": "2ir8cbfedF2V1YpPixJeECY8gogE2xadUtFJECQcZFiVxXqvboifyT2BSPLxE5BPZjBrh2wJYYLFzjHjP1qWD8Yx",
  "key39": "493wPCiceq9DwCWScBSwjyxfjtGFi6RV92yHEzgiXvBLw5NoA9KCteMQy9F31v5K7QqR5av5hcV9ummeceCh6ha8",
  "key40": "ek318P4Rd9ntbjjc9rfWGGTmD8TvMYEcx7eZ7VPPEp5pbrXkwsq9ZGHoAbSUwkN8Yu9GdpLt2SwdSfSgFpMyKz8",
  "key41": "2gk87UGJPhRVdbR1BnF62YdpgvTqjLGQvb5Hnqodyn8D6GaSvNaQg8ymhehGwVdp7L5CBkrYbMoWmmhQpr5MQkD8",
  "key42": "3E9miSqnrg9dtBi7WqvVMaDxxHMLp5U2ALJvUYVSL6p1bcWRD4QnQKaCRwVaKNAHWVxVbLrkk4Nw9Jt77MV4ETGt",
  "key43": "5jMELaN4YVvKtFusLx4vYuAkk4Y6q3zUErc1a9shZoZqapC4n4J21qma9phik7kUYhRaE2PquoyjJhCfV6zY3Jrr",
  "key44": "352mmqWNHg1wtH7CPPteCLJWWBFQpJmTHaPeHnh7EjkyXJXX9xnGn6sU8SrbZ8NxrbiWdDQNo9HzXmu7ACissnmC",
  "key45": "3bbT2b3u7qt2AHrFsnaDWWuwQLH4hF6Cm1gQco3cNRGh3kpnqSuJbrq1E965nqenEzjzGNA8Pna8rWnystjxnyzq",
  "key46": "3jrJHi7Cir6LVASYTq4GT4XmvNqSY9QJKMXC79vY2mp2rRB9Ziw6osb6Ae8AzGXGix3mohzHSVPSEinXGoNmLj1Z",
  "key47": "4Apqd3V4AHDtteqE5sYnpS2VxHuQdbG9CVVmhQmF7o6vvP9mD4jo6rHVnFrwyJse82C2S6H9v9G526BoSXksGq7M",
  "key48": "2tqLoJ69fi4qw3LZFj9EyuhbVBU3Y522bNpLS1UwkksJSkUX5J89x9z5RsNkP8NGYjc316oSUFvXAZqHDW68CEGB",
  "key49": "5jMwxny1yXgeRd7erZdXYeWbFs8xgLBoy9fuFKBAKJtiDzQBZrWhLtMZ8ExjJdfQ1Exps6RyX65e7HZUr56R5z9T"
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
