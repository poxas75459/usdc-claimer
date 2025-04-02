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
    "pXD3ifNYoixyj1Y1romYD2dMCVcARPp3Z3FG8CuB3PavjmXGN5PsjYCXA5PsGyuKU6cPLnaoCrCwXhiZxFQG9dq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yvqxvf6x9GAzkTN28KHn5XrMC6W7iLXgwNVPdW5iGnLRVNCHeK5Q7vX1Ly23mtVZudvWoYELq8S9YjVsPyt3FcK",
  "key1": "5mnEkChZqGjT6b1ygwQX9YFVxjf6DU3DVDYqU7HGJi54CXZgMegZzPtpHjK8bpdYRQKm1WxZK8VWrLUpCxaqGDYQ",
  "key2": "Ax5fAm9Kica9SXBe6Xpva79VttVmjRMYnVMfjrgkFd5RZxcQQVxn33cxb9LzvicvaVs3zprKeU9K44CYZojPKtw",
  "key3": "4v8o4QniVLyjKHV7V3HgfaF8wKcNrXNGMA5HcAkvaVaAcDXEYSwkn734gDeyHysWucvYmWaTjBMpD2jDzNaBXoUq",
  "key4": "2xD1Y9324Bk2cBMFJgpvHobZ7r9pLdLPXtEyP6JYg2uFVErq8h8hj9xcgnrducdUD7UaQKGL7EjGHX2YL5aVcxDm",
  "key5": "3PWgg2c3EnUwesBd8rjT9gGSNcGLtYN1HMGBXav159wSfkJavuRSzR53aVD9rvRM6XA2f9ge2VLKQvQrWS1Rb5j1",
  "key6": "5XNBYzyjXvPhWj5CtR9dFvjrVN3pp1r1MpHMrWCpKJ1vTkApAfDbPChGsr6fw98kgGRUPwL472XwgrHRQ96LvjxC",
  "key7": "23oZLGFtoonWdqnuyrczqTPc7fuYRpgeFSNmr3j8Tek7Rms1edn9HJoYq9seDaYy7vBirybXr8HPdkd1V6MEUBsu",
  "key8": "2FPsRyRqoPjF7VmE7nnQmKzZwfLiVX6udWEtzzj5q4NRZ1Lstp2jJr4r2Ld5mfkYq5yakA9DDkNiKoXDfHumFNEA",
  "key9": "2cHUti966B9VwzeXVc5cic2VRNcFuRjKCb6JqdwYskLwtbBeL3jb9QLRyF1WEbv3YbTX9MMxk9uZKd4C3vUXnGLz",
  "key10": "32AC4LzohxKh79TzET6KZakFWoUUXS9NJdBGW92qivHheczvg1DiDYSwy7V8911SbsCpq5Ngju6NLT4zNgUeAbSp",
  "key11": "5yCXvRxCq4uZTPy3g9akHCtPxVMyiRf1RFuaTHARsyXofE5Forr8vyVWnp66dpq8U98jC7CUstBtGEz6eahvdoN9",
  "key12": "61rE4o99rY3W4wtrdfH9fxuUS3JwaTH4LwquLMKTeKMwgPrMXgxi7ziPMd7ZsHKNFibm7dvXubk9rk6Q6at3ZCDz",
  "key13": "61j3gQ7T5oaKRcVPfjXoxiS9NmwJWrMTq5FYmxdYEd6HLPExWWNd4PjPsboq7RWhomfpLfGLvjxRNdG9F1E6WXag",
  "key14": "3KWhXcAbDLowmYusCy42xtUsoEm3jBVQtRd8CKq92DQSj2vbnKH743rEgY21UtCDyZMEgffsQF99gUiK9Hrv4TDi",
  "key15": "4axsjz2u76uxt9BhrTnXiTXdgnq7V2EX6QapLxAFKdQN97g74QupTRC2NQzz3W46kFMM1vPonkKjzMbeAoz3k3Zh",
  "key16": "gbVyJ5FX7qC5vU6c7iuUiBPSwGewGt8VV2trRygXkpekim2qPmMVqhYrrDbCEBET7jw6Dq6tM4KsYUrNkULoqE3",
  "key17": "3AfiXzrpb2w74y12K43j7eZ9ZrMtprn8KnbKt8Xhteh37ccVT1NZWBT61jUTVHNJaa52TbLHeCV2SzQDKNV6HHu8",
  "key18": "2wxZA9NC3GREu3wYYmWVXaHhiGMVFeK1E68vCWJmchPn77Zsm6LJbTukqPsnrKqpLPkCX9cf8fWptM1H5ev36evc",
  "key19": "4XzGu9vRGf2SQFrufxVR2N24cD15ibQJMuq36KqDkvf5dTQv39vZri3sEVGRn8M4zvRpu4nUz5JKmEy2LCR1k3s4",
  "key20": "4KTWUhonH6H7UhrdDSuJD1W9r56N31qvCX4U6u4rxV2PLepNGAPfvncxXgph4vkqqLbRB35tgzMTZ2khf1r51nZx",
  "key21": "4MiTr25mW7pdazXNc8ivuy13tMaMhUwPFY5Hb36hUMy76JzpH5K1nC5DMqgnZ5nRnkMh7DSMmufGeamnHKtCobTi",
  "key22": "2zSiKs4DJbEF59PhzAyqgQ3Sp8pjvAyHEp3SkLRQC4XTXywgz8vWs32x7VLSXJPb6SyMfaJPYaJUFkXLNsKD5yAQ",
  "key23": "2QpnJUizadWb8tVcp2QKEBbSo8x3EK8c8pDWyhDDfgivE69LGRbaRLf1mwJWgVkQ4dNsMPY8gRfxtgBK7M4Hhihj",
  "key24": "5W4L7sos4CkJ1z14UUQFmJP1EZpdsrXQfAnEriijH9FKTQnZpN66km3rqK261B4C7sPa8Qd1jbTUL3JXbFjJhcZ5",
  "key25": "3XPzDh1kwzAGsVtZr68kChGNYgoyiFAUWxa8S6KHCEgq4HvBNWvNzBtaWHJ1rgPYWt99FFKEpCix6ofKmFuM8App",
  "key26": "4Uhv8BsHctZQgk23VMUwtg3knqgCBRgoQSChDSt4KYVQQsMRP4AF2TDPx1trxnXsf52yvFgMRbbE8dSWLb1iG1vp",
  "key27": "3BJ324Li2h62vdSqfWSBzJKNeM48LEjvZoXuPXQynjF25adQehuNDonr8EDqXaouRhy7tAAuCnrPAotugtPQjNe6",
  "key28": "2sgfQfNftpF1wg2E1VTwF4zUTnaCpraYSgwBoiWRqRc1FmftNeEathrZhDezQNsQ5ygEJnnZb5oCp11bX1uwd9nN",
  "key29": "5DUB4epZvS6uYGNWtHcsvSRjASfAw5XBc5vfZApnGRVJqAFjHrz4DWD4hgz13zexCUfYfidqEhhTvzf5Nh7tAeiT",
  "key30": "4PAbtJTmBMedNYe2uunxACRNhKNtJBq4LPjdEeb2LYP4zyVnfoT8qLzQ89L6TN3JexPLCfQYLStuJAzj7eAoz6Lk"
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
