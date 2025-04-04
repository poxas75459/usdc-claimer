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
    "4wACztq7S1ZVym7Jd22hBLjzQ3DLBUMLQDmgJpW3hwnWztaXy7d3SPGWyfB5MvKr4GndjoGcQBBjm3ZfeiRLg91b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KPBv7zoaHX5tnEEh1UbbMuLCDqVkZNbxrZAEBwBRiLxJsWWMzzwmq5XX7zsdZ3YwRBcNBsCroR8zf13SDuXrDyo",
  "key1": "3Qn9TYXpY5idWZPBaJfuNZqdYv9Wo8GZFxTUkvLcNCEpLZggf26NHPzgtE3eao1Y6CMjX8BSXEDeoKft8pXkqrmi",
  "key2": "51pJ4gW4HAzYpdiWRNfRc7oGazZ5PFyKewbNN9bXecDd6HczKzEWgYFvcjkm3XuZdKriGVUXpR3pXNWKAKKNqUu4",
  "key3": "DC2iQNo4MyBbVCSYZS22WvhkgHBTZDivkG4MQmzCuV3vPFSSnvw7qmevHsbjzgQz8ret5HfdGcEzrxCNYGWvCXo",
  "key4": "4MNZDsTbyyHdeZeBoDRPpqQ6HSMtwaWu1HrHLHKasfbZ3J4Kx7R3pqKZEExdC6Eesi7ekp69L5FiNEWVNwgF3Hv8",
  "key5": "4o2AbeXd4J6g7cUSqjNwKHfK2AYXYrkERC9XCtDy4L8JfAKroccxoixVcD3MeJzBmTRz8bmWcz7TeYMKt9v8k34X",
  "key6": "5BFDRMGBmenefqkfbhXX4nCkCvovMWZjXWnuzKXz8rXBm7Junk1F9USvp8Ny4MTnBE6mghid45iDq386UsDr6R97",
  "key7": "21WTcyf85XHnqNsXqCfAURkAtCuVB58g8LEpXPYJn2GBsgxvnVLoAePNfUMcaZs95vvftsBz1HLGxQ3nQT5SrMc3",
  "key8": "4XZ3fuaXkUGcMLU8ZGWtaZdVyDCdgFDmKEHQeCSDmHVeYk95Sz6Wk6DUXPQvYgMxNeALgWLqRVZeA1pi2eZn1Su6",
  "key9": "5D6aFXqBqxK3EMdBAnQzueU3VKGvZ93H4WqBvDCKjVUZdKNRQzJofGZTruTcm4bPRMCCWTagyf1ikmwm5WKwba2C",
  "key10": "4RrwvedjHQxZZ8suPEydX4EsJxujVBKwuzK9AiMkUT1Dx9KKuNte91Wt3H2EbKGxGxoLpnCG9nJKUJs9vsNG4UoD",
  "key11": "3c2MHHEGZNJgsq4kh92EjDBrk42MB2kt1a6HyrFQkT69tRefHRH8hbhrD2yA1pHzU75woXDz2n5kHU1DbY8Hm4NB",
  "key12": "bVBH94S1xs17JpZ39xChBDdbY3gzs42HFiNVhR8ikSQthbN7zWtFFA3BiagLCZ1mQUPayUocDsiqs2k3oEeMkSM",
  "key13": "5fifFHuoRLAGkEgQyS2axuapQcQeEkZGew7Vyw6gdvQmBT3GeVbysgct1Q98xh5KXEwznxaz8oaremXWf3Vp1A98",
  "key14": "4ZbESetnZdk1EjzD6XZ4JwePEchgYgWJj4kvY21v4MZYUCcXFcmVPfzbNdchXsJUXCzzCbgqG6s3H8bPXBgL7VNZ",
  "key15": "3uQKzCAVSW4owfDeoiTTMePnDZcGov73Pn4TGjrSBwLURjGz5egJ3yJkSR6pNrQZiKEoLH613Et6Gzc5aZ7YpnRX",
  "key16": "59oWuoFip8fqQAZsG7hFEtcCYwYdoAbXgQcNjfYADzgcN3xe6YT79FVY4aseYVrDxpDkgaXeKfgJFGbc37ncU6RV",
  "key17": "5DQowexdtrpVrqxXkSZaskLGJAyJMvEtpdZesfzsfhfK7RATtGrNHwKvwSF5i53mnfhsQibdUinKzHYXvSivaeWE",
  "key18": "2yc7KQjBM7XFww3EBj8VtHdWphh5CxWVBAubCDUvo6E6ogghN56jpJdYFGCvQfrgxeYCJ1s7QyMdcmezrxzM5A1S",
  "key19": "bzQpNf1mRuXF6YofzmDgoU6SkcGXJtQ88z5txsBPzUcTGgD5mFg4XUHjpqwSvmH8qZ4MLwZtz6xTTQx3nKpdXN6",
  "key20": "5p9jMkzGPaWx7M78XmuxMDS7qj7kyQPSudwXuR199VNNAhcv6Hgo9F5KqMjD3guAL5xN2wvzN9NS5imXKcU3LtL2",
  "key21": "5tFXkVexVn8RMc7rBQ1t1M2pjsWNbnv8jN7Zm3buz1qQYKaWtKyyRWomDKbofyUw1jGNg7WX9EkhcPxxfEbyyKvq",
  "key22": "54JidxtTvDqrWCy62wMWFX1Z8i9BsxXtdW6Rd6sVCqFwVDSeyu6xGYSejA3FZjRGQSrcoqVgxhZJiFYjZZPfjJif",
  "key23": "37VVkYdZqA6s7T7LMtAqAiW7kMRTYLHmsVZTATKgDPsQKBPWpg3uuJRzGNVSsd4KFX4PxnCzKEX3yyWQPhJKFxow",
  "key24": "5zppWeXnh2VFy4z9wVQ3UBGdrHQBXoCRUPDMEm13dRpcL12YPaQCzLXsgWzoE77WRCdfiRT2Dk8soG4FZ1JKYjQ8",
  "key25": "4HHLyYtN1B9xbkUKdpwL4mbvUecqiwPGeq27S4cUaRzcjDcqFyPFqhRThdzmpD7y13fkw9sepDE1Tr7CT5bFBEir",
  "key26": "Sw3TxqcSowAYCiAR1axjjqjhwxTqZHXmidUUMTGkrLG5rsr4D8kyDeTqmP4Q5emdtrXhD99Nrf26ogeF7jvQuPc",
  "key27": "5zWdmNJBR9HThwuTRdHc4CRhb7BuFy1WzgZtmDRFQR8GYRg7DAWsC7zLdQ2srLAuv7SjDX3SeTvXJcjg4GGmiA5X",
  "key28": "4NAKj1135JTiW6yXLks3bUWH7N8jFkmUSFdAybq37boSDCDkFhgj7qrFnYNvGJQJEmkYvzP94WCsXoYrUgyijLQG",
  "key29": "3Pk648nSmwjfKaMFiCnYm2P69Wn9wSMCn8qkfp6nDv7JJZgodQakZTzbJNys8xZwkpF7DK4yKn2Zj53dWLioSfpi",
  "key30": "2Jt1He99Dw9k7EXnCEd2SVj4PbDAwn9355z44xDoQpR3pWxYiCmDeNaQSjCQKn7ZTLDUrftmwXhBQwG3386nXGxU",
  "key31": "21dLxDpCdEGURwuprB2TWyH2XVo8gd3DUnx3sb5Kfw5mBQcDwn6LkeVM7DV7yDSqMkSjY82jymQ4wKQL8RnetFuV",
  "key32": "2Haf59sjZAAsyejHVCEZ1fseJo9gAd1vZ5ekAfmbkaJSWGCLXg5ovTkqgyok4RmzjtbMi6oRQYEUcjJUU56vUGiN",
  "key33": "3GgCMiynem8obzcejHxpKGzXhV8S1sSmH3yAvsXCFM2EhwoeJQC7s95mH3rctnyhPJfLfexgqHvgQEPUFMYsALbR",
  "key34": "5XtGkeYR8n2yFz57iE8tX1isiEv642MUFGPQVfCYUVeNQB69DeoapeapApTAahbxt753tTASJ5u67AuVBj15Hxog",
  "key35": "3JqUTBuuJis3oQTzwdCHL2E7ZiLa7AG2ZzXyx3ituuFXErnpRz3xbeZZmtvK5GqsaGv6NZNEVBcTmkZnjCBQuHHA"
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
