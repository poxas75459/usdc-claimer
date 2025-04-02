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
    "q5BW8AH6tzLhGegf2WJq2DCjPWgzy63gGaYBHruP9vy6PZPth7H8fYtZU1MUccVwW3BfU63Lzxqj6kJJEGDdDGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PFXvb35SgCmyvEmwXvFsB2YCdUKDNaMRT8PsqLT1sVEMdbFctYL1MguJC7hRJDA27dehxVJwFZy5hLwSbBkoqGv",
  "key1": "3z7sLUqw76n1UC4icLnDmRGk5epzMa7QASmkT3Uo2qDBeLxUd5tkuu6RrHetCEUvvJMdsyWDcao2xxK2zFjfgERs",
  "key2": "5kKu5dPfUanqvtBZseMw5mxpku4eDKcGo6N1MuxtR8c7FBHkmx5TosKFP5wwpZBbzYv6C1wLQo7nd9bRxbFRipvt",
  "key3": "3sCcAcdmsASugYSPUi2towh2vLvRzoUpEjC1UTvT3tStTjTCwcpUEu6n6Dxje4tsZb9dCGx9sYMp6C7yHLYoPy1g",
  "key4": "3DECRU3Uzs1mwh2HZduF8yxZ6ox18JGSGjW56h2pqFQRA9EYLhmFHNCQ9Lgsamq9B3ZkN4bZ6jgBFGou6Kf6tRPx",
  "key5": "CqQacYedBD8xDew1WU14hgHqtxSSAAvtQCYw7CSTfzpwM6oYF6x2E9diRVgkbcHbyfNWhjSBuhkfAU49mZqEMGM",
  "key6": "9KG5AkS41h7ejRDtCWtywygPDJk5cK9cqFvYTAxBSdXuB8ahRbjx4tfXsxAtnj5jm2brmt3tFDc8PauP3rFN3vN",
  "key7": "zwaSL532h3eDjrFDRgTHaxFY4po4mPcgw3YsLn5WMqDPfcVG7c6r9abzVfSfDMBzodu2VTUEogaxLa3y5X3E5GK",
  "key8": "5pueJetFH8UzxZDtrHSGPLje3r85ubKjeQKUxV7cQb7wpgJRYAojevNRr82jBrFuGu9vRWYsFNBtok12LLC64rwW",
  "key9": "5C9jrJy29JThpss8Gh4Bfq1qGXcxXs5smwzDeAktzcgM9KYhLoHnKa5iKUJ59JoMPNf2JBZxsMhiuS1x2cHG7zu",
  "key10": "4m6mta1Yd5KeGaN23bFLymLpCoysLQoEpFtap6eQabjY9JmyTpgkcapvmFP1U7jQHa6LKZF2mohwMWr68FANsnQV",
  "key11": "67RB6UEpdKwV59KaLY8MXa9kx2t2ubuGzLFwdW1cEpy2pUXZb2hifLHstHdn5bYK4sxrUgwFk3piqenP3DKf9Vgt",
  "key12": "3M18uam2nEwwEpQHs2PJ3kG4Zjgz5ZYWXFSgMyexupdfumfgsATAdVgXdeYbgAgEKgHMZM8FtpYbHzkBDHg6hkrZ",
  "key13": "3MZUzdy7p6EuDwrxR4WPbv5C33yTz9Q2cvT4KTkmv297XEEWMbuWfuSDstpHAceFsorof5g98d6YAfHo9wCDczGH",
  "key14": "5afAoJ1XH1PwLDimbv6uCDma8bQgrBorZ49q4qCmbKcHEnChtwKy8N9aeocC45MB3p7zJuVKtJfR4anZkovmXCMY",
  "key15": "64hvtQSiGAwU9MgS2UmeZoRQ9CYVuRjbZAVsqGAtyYiSFM7vbFqVPFW1SLhaNMdbmYo4rKLtL9Mb8GgxTyXwcaT1",
  "key16": "57NJT693tdLRSndzVvMbghgNjFup3EDTzFaVxFdAUj5ampsTy4XK6H4tL47RNNWG58xeWFcnnWgo75Y2eXrjDH1Q",
  "key17": "keyPxpDqeahnJZqdPiSxYDoFRxnkVsCHFgmq2wPbeD3ZXU7DgnhB1z3L4p1WUe1S3HVZBDjyQ5ojs6iVvcYifmq",
  "key18": "45ThAdrE8CY9QE6coGBJzrQo6rLrmUaqibgTcFP3Kz8DymHPGtcQT9rbgpAiHDSo27kcpscPFiGGhU3kmvsWsmSQ",
  "key19": "64QwTFwQm8tWgZ8mLxxJbPCufczpecn5NANC8mC4FJM5MgQgBKzYkY5MhDL6MxYct1EKtMkz5rSAQu9sn7v8qons",
  "key20": "396RZgpuyA3Jw2is9vshfMuuhUTSHTcpHXwYKs5rZdEAatKw8vFJhw9FhxWbDPhtKyUutKtQ1KsgSw4TqAEjNZ6u",
  "key21": "5GUr8LZABWxMF1qB7AnprU6qYPHYpHhxyDtKnBFhzjLzSQaDj4S1JuPPBVfs5er1yRKFE2NzMjouYsP6u9qwENDM",
  "key22": "4mBkAAKsEGAYr5r2ytxLtGWF5qa6Ai9uRXjzfMXEQSkq2umuAs3W219Ahvcd67F5B3gSDxW8RP7o49gy3hRm4QR4",
  "key23": "52UirEhrWZLrd2dhMUPhp4dpCWyUvMbaYf67Lmfj92Tf25qjQ6V2HWkbX2HUJSPENfqRAr3NRmAwVxdmRg6KugRL",
  "key24": "kNcN9A4zBcZFa5aV5r3xy38f2SugnyjWVLgVNkedxsR88WS6ZhYMFHuAPh1MK2P1SEruGenNJUt8GpcZLgoBDi9",
  "key25": "3jwKZKUqbRCD9AFXZYxJ1bDs7o8jsUB4xe8mfzwiszu8oBMRASUdY3REnLREsh3AbGhLW1LgTf2EDiobJFsH3RzK",
  "key26": "NR9gKN8YaDooPv2ZxQwbNrsrcHHitc5Kuod1DXtWbPwvCn3bUQVC5TwayYo6m1pgF6TA71kaRj3osogqg4fLF4h",
  "key27": "4dU6AxQcTJPo9kfEHadbzW8sfrEkVtdnYJmJvnf4vcMdRBTBAathx48HdMrxuPbpJ6x8g2Vsd8hbb6pZFHWaqkmd",
  "key28": "VtUhy9Q31tZcg2nmzVWDuTdLDhwn1B3godfXMag3aMqpahqS8sCTh2ofMntKkJZpzpH68QR5N9C9CLp2w6mJzJz",
  "key29": "3j4nBPxJh9gLPewZLtpf9RXbVMsdrADcdEgyxhdAZ8fsSDQdaGH6UCWgXu47gStgFJLTiotMUocGgZ2y4weFQFG3",
  "key30": "28sbUW6ohN3U48LjtHqSvZk3v9Z5hCK6tfrh1HqmcdNCXAatSpJUyVY2e3bnQyaFygcKMdDBdLJttEop7kcPCe5k",
  "key31": "5E4TzXajKJxHHaSHTKnL85yzgjkdLBidL36c4kWeJA3Pu5tUF7EWYFDZ8eEJhpBokKSMWTEncVHMMdm2EJxpVtMV",
  "key32": "3W5vnrU1YafmAv8szNouGeApdMLgvx865BowAMCzXcPqpiq7R5KW5Qk3KSRLeujkBj3RW2eLXLqrVCzuJjxVLULo",
  "key33": "3DVduM8j5Lu2CHtvrcj8fPLN397XRVBPD5QNVXQAvTQFLqfh2mLy419XXtW7oZa8FaC6vjRsTgcoUFCFCzPdaggi",
  "key34": "CLu9FCwp2ocJAZDyZn64gQZ9g3v4iCyJJKzghQVzXogcF6w2hppb8U2qWixpKGqbN8EJq8LjpAB6EgvuF4wKpv3",
  "key35": "2nkkqBt8jLhPEqVTTDc96Cr8EeggWfmCyMxnpT5kiLK2QtvL4zM4ywZ9oePyeLBizpECVAKDuD1mFezZV8Ft5Fae",
  "key36": "4zDtuZZB2xy43NZtV4nTEiHgRCxKFePVGkEJC4MBE6h2hkt8hF3Lgkhfgxzpo457ARoDNuncSvZv7m9r4cfzrPPP",
  "key37": "36QNwbTkg5y3NxfzgRADwDENhW3WqgkEtTmw6VzsRrPuXKH3DR8wt9p7xm2sTMPbLeHBNWLChUAmosn2eam1aMvP"
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
