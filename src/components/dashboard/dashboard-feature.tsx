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
    "4Jcu8tWxW6AUZt8NYq2DfQ138iJ8JCdELVxVNKCKCFW23jca2AkPDxVGYd6xV2UrAXt6J91RXDP89CpyxQZWZaVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dEYpnXisw13jAW6Z7DwoZ7E79vv6bAsbkStzYzR1rCZuDUnHcsDfqExePJS66Z21PPqszz8PkjmNK919qHWDtK2",
  "key1": "GeEjnCYmyMSpwcSCJ61zQYXSJJbjT993cYPbRQPMgSsMTgQsgaKGLfhHp6hu6ua2gLSRsA355PTsFKJh4UjMzEK",
  "key2": "2EvZDe8Fj3SVr7cBfY661byEvgGbhzaA5krutKmKuHfbmMY16yhvtnr1rtehQkBt9X3hPxo9LEa6fVv3q69FtZn",
  "key3": "3PvS21ycwSjcyDC9HHYf5hr4Bxu4A3X1Lvi1mEvp6viuAotYGXF7EwLvBYscc1P7i8jYpb8mHTaKYBsYF7qSna1H",
  "key4": "3x5UrqSovbRair5tAZTnEGaCjH5LuWgkDjp9cFKZXcBWbjEyjTngfksJPu55F6B15QkYszpQ7U7kZ6Akkskny6Tx",
  "key5": "PFAZ7bWiU2Vd4vyNZ6SZNQEPHR56wqmnArdrKL3LDwBXxxTZMY1LxScRDqqumtFE1J2NrLMCff9wVBnFhcjKu3z",
  "key6": "pTRhqMdrWqZe17No6QE8CAZqpT1HLVn8RzHtNvNVAGG32UZ8ujq1ZRCmEshKgJ75GFvtfRSJkhUWyiU5wkNvXoT",
  "key7": "42D7A9wYTK4tm5qU2bFiMVJQk97RdCw6VYQKPDqEwSfy422fKKB2Xi7xY4MQ5P7HA61dXm6vTs7NMab1aD19DXp1",
  "key8": "2AkKPcUN4SBJpYV7598c88LUn1qXVqd47xxdB9G463b685Rf9UP5TukFWK7rjJp7mLWETfUNcBE1LjGmnhJwJ7xE",
  "key9": "2FeryY6rXTHF1Ubtn3PicZVAtgaSHwZiFBbsfvL2eNF3BYeM8wDyynqGzLMAxtgrfV31zVBuvcmtzNeYnmvH4UEw",
  "key10": "25ikkPnZveo9AowGYsLqtqYQ5y7A9eL7RXN5rmopDr59xcdr3yPEAjVQ3BuJRwS4hcycCvvHfJDLR2DybVXit6p1",
  "key11": "4F3Rg6aDM6SDJ8NCFDG19NPAu96kQc82N7vTx7zf1U7XyuKxyqXx8uJ3EUXSAF1itqTxTgLAKFqUj2caBXFhJ1iE",
  "key12": "3E91zJGUkSKkDkiBU2zV4cmkiWhB8MrwNYKomDQ6MHnybt6pXeQsGdDgEMWcXXSRY6i5kxwHGobxpVLRmJ9HJcQ1",
  "key13": "259GRdfZ6QuwhCbEM9MJu62U3hzazavcunvrrHwLaJ87Atd7RwswZj5VSrWX5QZiqRLEd8XZzW5Kp9bc7mz5jEt8",
  "key14": "2SSYocMVcPqy9wKFjW4Mh4gLsPwADyQAmKzVpPkBwCxVFK9QWhKjEhbGsh8VUkKQZ25HkdqqY1ymenmy5FpGwdLQ",
  "key15": "g37aWMa7vRWAn25U1F5ygh3RJ9tqriS5uiw6kYoQFaFYcB8fDFKwyfTUbNjnPDxHMy2PzVg2USXPeJJ1buq1xTw",
  "key16": "5eCsVEzvieTBsyhu99XKK4B3BAvJDu6e6s7CTGswevtvx1yCu3bbNxWCsGXQ944QPid8Ey6pgQ35kxDJsfjUruuJ",
  "key17": "278x7X26tPiYy5GrDoDQcj4TUCmso8UcizPbnuHEUgRQ4Ph8DABn4cwWf81RDP42u2z1yKVjZaYkeRdtNvmsde7t",
  "key18": "2KgbVLKCJUAfFquD3TSxdmFvqrxbSPkfUiU2uef49qLKhdGG1h52ZxLjGcx1G8kAAjYgM34k5QGDgVs6ksKg8Fdq",
  "key19": "3JdTzzWaMg6MEg9ha24HaJFMDUpRw3vZiTwjUG1pw2L337hhwDuojkofThebRs7caxL76wvM4HDxD7c3u91LGmws",
  "key20": "3xpf9p6eB6X63YdakiKJKY6febAR15CdBBRBKSB7oE9nt6gF6G774a18GMhUqf1n1Z8KtzXJ59NyNtRdbDNUB3Tc",
  "key21": "4uoDnYj7oGcGhnpD9LPBLe3APSgNRi63Q7s9pVgDS6cVej5813Z12peMkzbw9EWrRUmmuySzKhcz5THjvDkabfSH",
  "key22": "2Pnf4Puv1APe9jZxRoYu1HSHm5aP4sWmTrF6EbSoK1gsym193mQQzk9cWGW1fbQkoZv6iV3BTwJQoDRDBMpNc3FV",
  "key23": "jdxkVUtoCtYiqGBYmyBvioRaeRraPj5Go3QwNfFKShQ31LEaAcMhwHV4mYefXu3TGhm4bd5UbYFfcMfWkLH2MzK",
  "key24": "2GDsVV5yT44rPNr4VLZxXLgjPeVpQgvv2hZgNaPv49FLnrWErN1dGfRndbDkugiYtTPNXcWk5kto2Pburbkj3WBm",
  "key25": "4fGQhzQe34Xrt3ATusPnPxdxfE1b34ezJW1KF3MCZ6TY7qW7HSxx7TnC1CER2ZPH4cEqeKjXp3HnHKeTjYPHqtAH",
  "key26": "rhbriuY7Bj8Bk4eJBwJ8AbMqksJLbMxpD3795VV4fAjJ4RwcoFe8nVfyZQWdBV9Jpsx96KsxvwbDKjXMQNtg9xZ",
  "key27": "4HQ7KfJheijvD8GGfyDcXtSofFBDjoNyFSVezfmoFXwXoTvwiYzPV7CKBwyFaNUMXoAxRPbSybqLTsBG7VzscKqa",
  "key28": "5uuasr7oC2hj9MVj5DbEjx6fRt87zqNjYk9M82PEKW9Rv6ZS4ZxSBWh89cVuaK62MBVX2W62dXG1AZob1iQC3SRV",
  "key29": "2EL64ZmWrLeKuPGpRMDniA1W2Hq9FRxi7L8isqiD2KFddLHEPDvo6sKuszaepgERryi39MdsEHFDqvoK6v6NVA6j",
  "key30": "MtRGsMniCsooPV97Soyccaw8morz4iuPfHceS5hxpKQrFC2x9QmGmGWhaUL3niQLcd25auYwySHqkBsbaQhuFWG",
  "key31": "2KB85sbEqUtXrNJSExeeVQp4Qt5Nt6KToXPW9dDbY9SjnsgqLfxqFYi4ZB8ngnHwyd5NFjnKmVxMMyCEgDRdpdUH",
  "key32": "2qZshSGMEJ7RSWavwWuEw63X8xUi9zqKrSMHYSJJsYfvRvroDxtPQ7RG9iU22vSvejE3DHbSx8bg9mUq2PWgUYB8",
  "key33": "5cy4yb7SUsb5o1roahfy1aHxSfkwja6pDfWveizCxbbKzd7jWMbW5TRH5qDcTAXdL71rWKCh1FojfchxKDa37nRQ",
  "key34": "5EkVjnMgdSkmNTADVoHgwZvrmB8QeeSgwNgttXaecKQaTojD3umsaeaCVPLHCxHgtMpLhR4hEnawzNTzSGwZxasc",
  "key35": "NVMSvYPdoPMWA43bPEU8TF339n1KCJhU6As5ybVshRBXsKNFwLiiic16vTScbycQFHhGhAvXKywBP4qhh7ckxZT",
  "key36": "3bADz28VC9suwRgRcbKDLTEHanqFuAzs3YUwMT8ci35jM6PQYuWUqVPfLpKUdM5g5TMxj8ecb9B6muLP3dbSKgtc",
  "key37": "5gxfixFYZYX3czRsVHeQ4HBPVzjMBXBctGXmzhT5RiVjFFBmF59xvCtxcyg4QLryCrf2A4Xsg2uKAvD9d9auuc2h"
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
