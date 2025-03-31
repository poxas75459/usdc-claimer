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
    "51yWnyHVSSupyRcGk5pQN2XZMquQTrDXqi7WRnnHbhzo2z3yh1G7VfeohfTBBFxikei1GNWJgLkhVkZKeTE3Sibb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ykw9vvvPcwAn4sSNJHLhC1qjZTWqNMckj3yu9p1RToh8ncHqPrSWJoR3oHXuUQqGVUG5iRKBvQjswMYMUHLBBkJ",
  "key1": "5T6uCHZ9xbpHVHTR5doszeKCH59dpW3za79Fn84YX2Sx2ssgPxjQnioNKsZWk2LamidDAvUQfqvw3iLfh7Cazwaw",
  "key2": "4sUptR2jBmPvKwfnACgQTqJPNeX6uC4edjPCtCUm1N65YfL8VgRo3EDtEq7bVi4HcTGLTCTJAuYwaYmemUUaNVib",
  "key3": "3PCmSpCWnkjeWHJX3V6W6eNR5TLWFZC4bf4s4A2F1FKjNv4sQ8QDHxkA6oKxAfEKaJk7X9z1DKrrh5PPYvDwBrXB",
  "key4": "5bCJM7FEtCsjxFgdTqibiZXZEfHSNB2ADJXGZKSLLJaYdai8tsbRwVKgvGuQmdNDMrzeswVau5TgyFmdbEmatwfe",
  "key5": "3CwcbTqVYbq6aMvAt3SKBP8JmQ3ovQRbng4BGP33d55wx7ovXoyW9PqwPCSimoc8nX8wLTWAkbUkW7bZFrUz3eWL",
  "key6": "wYeCM64EX9xcPjU7brXJDoSC8AiUaVBhdY2GfGMijEZYU1sMBwvSV4Ei4sUnaSqnRmffvUGWP6L86pUEtd9rDPN",
  "key7": "4jRDBkjJVE1QdC9LngDvNgV4FvQkGCYpsRG5rZwG2q2VndCAxEX6cLycDGUxwWP1aGtzPHC3b5ZMDy3yd3pdgEGy",
  "key8": "281DWKjJL1fvGNzmzhK18aupWfDoPKHtfjLw4KtsZcsaZkipM29vM7CPMB3oggCEnN4cie1EkpFjgigMwQBvMLFQ",
  "key9": "4y6Rd6j2tqudBLWLSwhjVQpf2kiw8mPu5NLuSND76VU69JYRKVKwJfGJ1gZC1vj75XFpgnnCPZUeUM5w1F7LmDkX",
  "key10": "CbR34xcTwwSidURamdqMMpcmR8RWEFN1E4PXBiE89zqvekRUx3mEj7tELNQgdmWVGrfuUSWagYiJjwCb9FPP8ij",
  "key11": "9XiuVX2oGqPDnzUcXD1opHRgv2NecKSof83DXGaMc2P3vphkbYc8bhJUSWT9iaoF67aScQcS97dwS626gN4FcHB",
  "key12": "2n41nUdNqgqcVkmNGX2KNe6ZhBuWVeejcBr8CUKKVZQC2pYxcWUioXekveTMexwjjdVc2wDTqsw2RHQABgBbaCjo",
  "key13": "4BY34w3hEGHEhtttKmQP9F28rj8forDpZkziamXYvScZwjYz3cczLo9KHqAR5k2XfnNpr1dJASbNhN9nqKeCV5fC",
  "key14": "3gugbGfwvxUFxEtGJ5Swc5Uz9vek18W8fEM1U43rwgDM4ZDVkdMDBxht8oi4zk2BEA37DzSUzWRj3j693YFha2Ad",
  "key15": "3hmdqLdK8fW5YxkQC4ZUKD2SpMaGwDWjhHqGKReH37knzPedRxsipoACdzJDsBkHCPYz9FQkf1GxbUDPXajanWf6",
  "key16": "43zTEaKw8haEj7PA5pCkqsz5FqTa7P4e5DRKDbzbwTbUwKXY5g9Up6ssT4ZXxj7hsQYe5cFbemkBRLH238MNUuLB",
  "key17": "rxJN4CPYC7D4NMKReL3S5ws3M6weD3EVTfEbw6hvMdmfkVeoSkaJ3zzRrAZnsz1gjWa5byqcWztVzHAX2YFHMzE",
  "key18": "4cX245GwuGmFXb8D1jJBpWVYCjzDeo5jFJHNaHK53d1M9n2a1YweKL2vGdp8vKcgtdEacQFvZqgcodRrBXouEyeh",
  "key19": "2yDAss1MM5YYbEjrHULLkumRicypudTRJfBz5gDjvSdCDeWAeAstZxtBXotB3oiNpXgTfz3CmWdJGbrqjtjd7a9W",
  "key20": "q4NtSuj9XUb9GqWsKkEEXv8oysH2zUuvXuf1477NhpHCFq6cHKYBrQywHfcBwaDCiviZpLFkVHr3XtPgbwvr1iX",
  "key21": "4yVL9YJz6wNNrNEzVpoMLg3BC5Qg5SgnU5pccq3jNnKLQZTbVsyEYi1qLNQAsGjodQZA8npd9LxCSmE8C5TEV5ou",
  "key22": "33emLerJueaMLffoe8vbgdtyChEDk5znobJUYsLbdMWNJ2KeWND7HQ5uH8FZfwQ7rMCqbgPpfYbv7ZAkuD1Lb8xP",
  "key23": "7si6V65suWEvGvonLgYXtUnNpdgAmf8d42W5vE5LdHbZf6mP8PrSrRHrhnf3gByqjfvD8BdrFD9vsjNokk47zxF",
  "key24": "4v7TyznJAmUor9akNpF6mgaNs48mYDKQwTjAgPTJMHheH99PWXoEEJpVdpxHebjK98BEn97gdBggVHPRFfq9Av6x",
  "key25": "3eXbthCSz3MqHKAQ6dV5HbnGjUGr5hwYCuWh3Zo5t64nbptL8FBT9vmmxENb44ASuNcXSRxcidhKhC5qJah6GSE9",
  "key26": "5y5XSjE43w8zd19VXfJJFs6ZupET1PU911ChtawGeAQeNVYM83aejVn44xPB5bDPit9c8dV3ybixndnF5dcqRLPd",
  "key27": "59zDt7Ns7XRhYgjxdBYVrBGia5YWQMpTjouE1Ldc3DqATrAN913uDbqamaog2y3iJ8SFNGjKJ6AkRwzodFXNYXrj",
  "key28": "2V2rhQt7XdJQANrPmUyuC7NrKUwgwUc8UgSmuBcFwmjPfzinqYW4aaLo2kNBfriob1GN66taPDkY35yVNkRe1zvw",
  "key29": "3i3gFsnKXMu29zbY4W2hwH2yTTKXD1gpdidoFwHb8kzNrpC5wzM9tKqx4Skj21D8GTstn36usoTWj7SNEXpDHXo9",
  "key30": "51oGW9ovDa1WqjFfdXUMUSE2jhZeHTt517P8zTgzskFZFQwu37QCP4NPp3QjMAhnBsNLmv9CHMi1TCEUsT5eDnGR",
  "key31": "389sp7FiQ2jmnse3ChraNrfY3TeqRLdRiSV7kApSTWPGpNWyNBatfNPZ4s7KcpXJbLFJb8dBMQhC7yuBjU6W2qY1",
  "key32": "4XMLd2b16y1pKS76BjDzQrFyeh5CxPLrgWigWthtSTn3LB151vC8c8VPndeTjpyqCnCRqGPquw2ySqNcCE36qyk9",
  "key33": "LSYDXQEzQ41M9YCdqXRTnytTU5e43P3jkNGbDCsgyTS6SHsMJ3cjfoLEreZCPaUDaAsoXQDuUkywfihpbk6tjwu",
  "key34": "3UygdeC3KhY1TozmL2yDxj4451xGQqpgykUcPitnbYrMsBoq7zpGe5ibP3tCGZiXSApBHKiwHSJ37ykTFYPcSfLJ",
  "key35": "3zKAZiJcrN9QQHTq3GW35b6fhUTwdTPZe4qgJ4YsRcWU1awEZnhW4W65qSwtmpxAMcotoU1zp3aJ32LjbcnCqyb8",
  "key36": "4dsY2ig52ujnoqux58dw7ozv7zjJHFJKn9WaJMAK7MmUR8DBHtbfy5cJLQPHfkNPaY9rqfmysJ5qbdaT9JNxKeoq",
  "key37": "3cSeGb4Prb71FE4kParosNr3ARZzD1WfTCntzw2b8Fh5hyzz9GfLXrRdeiJ8TyFH9Pn52xexXRgpFzzyva3XNEK",
  "key38": "2ZQpvCxVdg1Fmve7oF9Q2KDML3J1CB5LdqEEm8px4QtLDc8sndY77krGHohZnNMjF9qUYajYSpMUGmdMTDpyzv8a",
  "key39": "5Xp93mJ5ZFYWR5ZF9Wcfn7RaSDHDdfmgNoBQrQCdb5UJ2ZTQJr1hVztyedpZLbT1CzN9jNmsQdUEWyYuwbxgtKcQ",
  "key40": "5XmEMPzs4oRBo2Nxq11zJRpmxfN4394jF1TeZ6r3nndxShU9kQS2rwmPifUHfLu6rPStQGao5xNayddLGqxdPWoq",
  "key41": "5zPSQ2sPV6rjaXBdLMPhakx3BbnRnn7jpZ7p9P7UGo5hM4tn2riDcFBBiK2akU3rCL2rmLjsdeYi6PvmQK88KowF",
  "key42": "42AiDjvt3Atj1qvgM7Tf9J74sae2LhPwSVByvtpKjp7FYjwqAH2GRaUuyqDf68FqddTpsEFTWZ9SUkKWBBLy5tqK",
  "key43": "KwJ7bNjhmfEBRuTmCZePBM3xUWRpCeEHQWChnAWXXEos1YUGM4G2pyhQWAZnYZZ4ohzXUkH96ht4hLQTUcYJwiy",
  "key44": "zu2UjdHHdZFSu6Q6Gnu3u8EGZQyB5R9MofxKCo57eUBzoBjJviB2MWmk9396oN3xjL7CPFxz5o8Kdyp3oKAJ35S",
  "key45": "5bhHXKFbJsM2ehv95NydUyHSCvhLF1BoeBxDcpAAccZZNgvYoZQMYzz8nYvEFR7p9D8riJ5QWY3Ff243A2fT43jS",
  "key46": "33899LpD1WPwVaB8beoMhVE6BuZfj1o5TAsb568k1US7ZvC6paka7N7RiYvpmiVBMmSgr4yfXBAEt4fWN7oRk6MV",
  "key47": "628qaX2cGLNVvjSoGjNXmWeVjqGdrbbPKchBnNeFkMC7ZCGcvzVMFVD9tCPiiwd9VfkSU5AML7xdkBU676r3n9eq"
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
