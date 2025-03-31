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
    "4T6Uq8pSAEd4nCL2gfhkhbqD1Tbg5nj5enePSNcgUWfU35p3G74TYgmQtxK9LZF8fuG7XRWZaxXSS2dRsuTFpAPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BLRgaXsbvCBYkgziXEME6ZeV9UFRTFVSVkJAGB6rbzCPf2N9V8KKjznBiAoDkd8YFf9JRHsngbSoPcX87C1vSrD",
  "key1": "3Fk6HjjEZNHD16xNsUK74h2eJQPABkFAFNHBsPZTPyN592zpM9AiEvPurZubeca2o8Z1GY3zdKAzBnATb6DQSN3U",
  "key2": "5xeh7UUoFZsBrHGJ3vN61tz5MGhUwZGLz2FiebhQjmSxZhicWgxZLE9hK6etHPJDeS7PqfPtRaBXgWjegvFDdAMr",
  "key3": "5TWzA3RY3wvGwZWPivEKCthvezvq82swNkYpUSRiEv5bFf9Xri7ZxiisaT5J8Hm1QWWcXfAKfgRV31qqPfxhHiBG",
  "key4": "3W3QkEZZEfnYSJGpkcrMNYFWuTsjrYX2m7xP7abosQdG28WqYq9294Kqf1rndPY6njdpnmw1MRgH9qcBWK18kpVd",
  "key5": "FUzWLfwf7EKZQuYb6XTBXYJFmAtZoz8RyDmKCRNB7aMXjXspxfuuWgJEswxgjsj2G9Um7iGvrUsQDFepnPckM3E",
  "key6": "3ZKF9whjUackwwMu2AzcnkgtVAN2hP3gUcxDVMMVTM8Rjdnj6igaN1oCVzMP7oJ4FoTdK2zSpyKgPSHJoY7JW6ME",
  "key7": "5vWrihAxxMaiG56EQZiqszfZ2QSKxWWk1vvq9f1iFaUX4HyM6n9ZiVirpcVyM3ubZkvtzCiHbZ34HfZURxLf36Gq",
  "key8": "58nF1QmKzRp4YXXnccRHe75SeyFmkn56DzmcupjUfhdhNuEu7UiQVVrNWPFDsftiQHRRMTh5ouVcKuoqSSGrogky",
  "key9": "5dtRgnqsbC2J8evZAQSiSc4NJ3RJwugWTjJyXuQADEkMuSj4Mq3xUJJzQgkLoa4jC6arA1DaPiL53jte9M8DgFrf",
  "key10": "54FCbGiLyx2eBbRqbfVbCTg6AzEvijGWSf3o6XogvGCb27uomATsDwBY56VYYgdQVTfm69hsAtqqH42RjsYwoV9b",
  "key11": "61KAS1sGtirPNHfWuHJvYoyvp76ZD2PGYrhpmNVVVi3dAuZh6DNUV7z3YzTECBxWH6v5sGxG1mZdvTpxNnvqoGQm",
  "key12": "VeHcBzqoLm9qYwsgJzQThACAH1ebNk1t9GLZQuuZAg3WJTKPUGwveMeXNjanLkAiZosRSgkNBp7hw71riD894hu",
  "key13": "5k9jaSMovFzn9EeGXU7CdrAdsTt9sLa47gX3NJxVYHJgLDg5PHdTvgr5JoshmLQqVjkZ1qPGkrTYVYML9gAH8JwG",
  "key14": "51QMgYn8T7GWjRbmRAzh58Q13WKJBWhgjpWNkKLm8rMg6uA6wd6vQ8zCEudWHgqVAXVsrGTysH4XNB2Y7QYRLR9Z",
  "key15": "4PRSJYmAHNGYqA4rUKbnfvvzJfiKBrz5cZrREH99wYcoKKd8i3P1iC3fTroPEhbLnE2CLXNiroW5WZN4Xd69osTj",
  "key16": "3exsoXGrRLPaRFHXTPrTMRhww2fCoJJ2wrzBnnvAKWBHiA6pEAZry7MrUZQYwPCdxZByLtabXM2Bur4yRECRuFD2",
  "key17": "4BsATR3k3otu2622NSff1Gq5tVhYXegWM4ZCZKFgq1kZQRu6SpKPTmMEKpZciNWSnL34ZBfigps8hWB4Dj1zNigc",
  "key18": "3SjJMNMSFvPmg7Xpp1NbwYxXGtPgs5TunSeKsBpjZnCPtCpUymy7nrcCkVWz3c5PD9qQfctRpVGLH2zXnvokfybT",
  "key19": "3HXGbp61YJedKL9jUgmP6xTnUZ1paWro1Bg7ZrFuxYWUi8dDwxDiVCsRU7aVhHYJJGDEcRDmLtpWQDJeBee2H2eG",
  "key20": "5v5z8nN5VbMNweMkpUo8TvVGytTQ5w9xY392ykYUHbEUmt9xrow7gdTNPi3KQ63k5apFFobz59tteNBpwPvbsatM",
  "key21": "3TkyyhosupD7og7uHmBw4dTB5FGCdZ9bMdkohkyVSx7xVF5eHJtUKKguGZu88mmJ8BKZBTAyY8mo2LDWBVGSoSaQ",
  "key22": "3wXKHt3REapF6dZ7yh1CUs3aqALnNMxQJC19bJou3ZmLEGmYX82XUkqAa9iYJ8Y8ePJxRE6r6stCDnPiSwmnXdjy",
  "key23": "2ZUpmLUn6G1aKNCx2so2jmcNjvr2iRJ9Yk2bKF7xxDcvWg7WVKkHafiBWX5LyothDudMgvRyLD8Abq8UqXRS6XyH",
  "key24": "o9paipnoozr28NtM2iiJrvyohfRU2rFp7KZBZr13oGkWySJYSKSCbjKLyGe3rSV8ydYTCgaAu2C2sxktRivSX2U",
  "key25": "4S8dvfk1FLcpSU4QjRnyBmiJJD7PykGxCjpcSikyrugc8tgjbtxHtLJMJBJ5skTdB9K82Z1PP5jcxjzD67h4pLF2",
  "key26": "5F9BZkh6dj5aT6ADBCeB7tH4oBMLfxpveihXH91kWK6w35KyMHCuzGejvBDBMFVUuKY5qC3TruFY63JmaAkqPAwX",
  "key27": "3AxiwmLf6ytMJ65T1qK5Yvvqt5B3xrhbiTEjQZBQiQxwF3i6yYUaBPuu8bpT9ZyjqpfgEV7vtCoUjy467esu9RYJ",
  "key28": "3uhz7LJZpwBute1DsTTkBvXSrGFguXLNZ3ZtouzWGdLoQ22Rdet3PYvHhJ1jDjpQrvQv13SSR531ofYmu9DZMXUi",
  "key29": "5tWM6k2eCHYRenfaeT4HCKo5m9tWrWLy5oyjUfFkumdsix5URGPx4UnfGV8EESNVPHy8TnXRMus7Z7FofRdTxxDd",
  "key30": "29j81sypX6gk87GC2cTyG8ZJRf1AqgN6PqpTyyee9YWG2jFszsWx8bei14W6f7Gspd2fRQfFGfKkSWtGwGE9AMfy",
  "key31": "36kbdVoMF1AnSk3AEsMdpYoxYz94Gd7Cz2VmfoQ49Y8GdDjnax2WjkFQjGeFJo7Pq1sZrBkSnDLZ6Xs8U3ETQkMH",
  "key32": "gThq27hx3THJAhTMuy4feWSmCbEN2frixqCpv3oTtyBBudSP83YUKz3iK133UkN7S2dQv5RxBX4R6hM131ZKCuK",
  "key33": "2Wg7Zcsz7ePpNsogjPuX4HMaejaTqrZJ1WHNgYXNz3L1Zv17ii59RDanxE64QE636XfajCJG6QTiWYaCRRqmWMHs",
  "key34": "3oodQM6conUnVgU5BaGSaqTGKHqHTTrgU3eddxAJ5gkMzhtvhPC3kmhA22SHzyg9y6oVqyKjdvduWtQq542m2PJF",
  "key35": "3UspdFrc5JwMnTsdGG85MnMk5n2Xscotjtcrcm173PZWRs4m1VNFjkQVu92rXEiUtzC2u1ZwNC62LdyxpKySeHVF",
  "key36": "62YdgYfqR6SgCcqqBJXsdaZkeCPJARYkrHSp9TVsBHqRtT5NoKXnaBBGvUhgNpiKdaoGMoaGV1KvWQG2bE3nr2AY",
  "key37": "62gU5kxLphu1fJebMv9FG34RNm9s3JYuFRaFWrrRZM6NAZs91dgt38tnwwaLwJZr4MeaF43cs1xUYgoH75LDXaAn",
  "key38": "5UdXrtfy3pYdHvbaNJ1AYkQt4bY9aRpbtbSffw1T3jdKSh553AuiFxYrjW46fXHJvtgkMjSaLscmED8UHNdSNiMc",
  "key39": "4PnhfPhFG8jCRG3CWxKrAqCEmRJfuXAarEw46sgatfbsEu2TUv1KBiuRuuvTfKHp1PV6s2EVKntLXBP2oqVE7mRY",
  "key40": "tkAT2kJU3sbPmDxRMHQRTVHr9dNqnp8xngyppdEmY5Nzh8Nk8ssDLqtK6reA3d3YHZ7BMLRXeg8NpkMpmHAY4c8",
  "key41": "4dx57ehLZsRggpABYuJ8pSodStCXPT9HzxxgPkmyWm79zhmnPbaYLjGU2XAq4zXwQGFE3zbAVzUtDTDgUXccFZiX",
  "key42": "4tTNaTADGq1tn1YD4GdP1bn3qDj4A1TdWZwcoQzUzffuHauqSJCqJnrPdTatrt1mNH31u6PEygggMQGrYBuRKZ8M",
  "key43": "3ctuYad7kBEA6RjyrQwbUtPGh4Nvr5SEReavXfAzQNJ3shxuGxXbfTjWAJsP3qwVuksAvbKyXjTsQaxqpMKhhnjD",
  "key44": "5gWaFiXadYijD9cf3EfXsGHZMJNJZDTAdDTnNqoBwhu3LdSmkq4q1CLXTJ7JbfAZmhKatEgbxpeCS4wYZDuQYC15",
  "key45": "Fzp33rqV7oTQfDaWFbv3KgXAZphe5mXncLXzxCS2ajYC538Kyd6ajzxZB4g4ta6tKHjYGF2XLvBtjjPDD9ETwtQ",
  "key46": "3eXMXtCrmYQEsY5SwSLJoJcaEczzgWHQC9fGcJmh1D3cFEM4ibNeJSNckG2Q8YXbzybMp2HxRkgPXW6vSjrQgkWj",
  "key47": "wVd7dKbtgyfPv8zzuo8s9JgC4o56g4KTDPoRMtwgDndgzUXAdkVQf8bSUr7135PpFYWyy4s9Pvywx6Fh92EGokz",
  "key48": "atdN75D9Sj9DMjJekCwqHu2EEVNViZ1eE5ZNdLDVsrS9CzAonLmhudW1bd9tYjtFjtjwC5yDDnN7ZjY2oZ6fpoE"
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
