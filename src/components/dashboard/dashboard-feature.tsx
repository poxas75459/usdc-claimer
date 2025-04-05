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
    "4jVGDTs6GPhSQ6xNcPEqbDYaD2zUscz66nWEB8dABtyjXrG7BxtQjeJ4zXEFX6AUpUEh885YzDjwDt8W82VuzqpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rnMN6gouPwN3cBvwGQxxqbW3jBsGd2PXSoDNiqVCTPfrvAnLGVc2Eu7Hf7ngG3t5tF8wYHj4TLi7U9EZvwWJPLv",
  "key1": "5Uug5mRG18biGk7GsWwUbK3BZydfpTPayY2Jbwnc8N66zWcQmrf32hhYL9oJp7DoPMuwuRsQsQpVmxiqDm4Mwkan",
  "key2": "65ja9PT3urPNQV9SEArMy1pZLdKfynrHeZS3fZ3rWfEdp5HZXmweagkcLwwfNHvA48na9MSNqAtZQjNYgR53oFjx",
  "key3": "oA1spDR3noL8DQ1sgsjcRcFD87QppCtcDLNKyUHNsUQhp5QSQWpr36DPvXiZv9Ltb4KQwi4VidyDCBb77yhQv7N",
  "key4": "5HaQhm4H5FsbqxNhg9tLSCjfHfrb2QKKGUw6vLz35azGLJRik3gbWdtxhFRrSbD4PSsnirEHoNj6hY1kafHu49ar",
  "key5": "4w6XFv5wYfvDt3T6pGeq47GtRnTFSUZnADZ1FHrRYr5Kv6kZdJkaG7rbVWmea9NtZZWtHZNcsNiashPStdaxJK4v",
  "key6": "4SEekHuQbQJ3fzFrtaScedriFEkpuWZ1EbBAG1hd5jBX1nDHYkSkngnTyAp2JoqLANuPZHz7EWBG9WfBKMJ8iDEa",
  "key7": "8tfxoUFgwyoxH6iurqBuiLXthwCrtQnq3d3hnFdC9o6nuQHQvsybQXkejfPVmVFaYKJJ7SFYo5TUtQDULfvFep4",
  "key8": "58Q5ZgkWVEG544rLLJS9WxQGKerZazc25GSCvmvewYMgvQ9JjxS3bH5kkiNXZfJTWTYmRfSY5TpBRJQdq2vwGfEo",
  "key9": "37p1k1J7Z1yFjgYm13qrjXN81yb1cUkrznAsTT16KH2gyvkR15iB22xDZEtaVB2dZFgu1ijEDEtXjvEJgZWwoThG",
  "key10": "2U75WBj7JEKRog2dD4CqQkC7Acv7YJ2NxthQhi7vGNPbim1B27vsZ4khmbwN3ouGnUgyCdtFtT6hAxZmRwvwL4T6",
  "key11": "5Zg6b4V1qY4DKCwe9av7FkqDhmKf35fzmiSJAeYiy24JWxbvxd6CuNdbNwA7MMDmiVC1c74j1jviDTrnuRAnBuGZ",
  "key12": "4bPbmywZa6q99X3BKUo2Ga3Uemy347eSUuTcKuL3DtBxY3cud6zEH1BanT6WXZv7is3ovZdPovuQarm4b8TaN5e4",
  "key13": "4N66ddSwSSuaE8yhfNLKyapNJHx3Wrz5QtdVKCFbAHdGR3oYrQPsM14hPAD6qncTmZApFNRcgJ1BDadJ99H9gMt8",
  "key14": "5WFzW6W8GHMf9tH9gHJwaW1AxGpdzNk9zBiEZRgHHznETSjPVpgpd6w2PKxYvmwYSvj2jP5qeJB6wvJj5z8uAhBU",
  "key15": "3rFzcmjzcJZ6P2q7opuGVPgmqBZ7tPrByXgHmx8RGQoouGMQuZ77zViMatSgkEZmqtcu3tNWNtAzBYxGWagkfeRv",
  "key16": "327TkpFZnRv2UaM1t9DTXzrQGRFiEQJeLpGZu7KTEg4eZn1Y9WcmzsHkPt9g2FTAABBsP1JKhUCaqLLAULkgcVV6",
  "key17": "2mr4HpRDVAq9rZ3M5igwxEyCYyP9LDDUmM4uxZpHPKT9gVy5XkeXbtzEuqdq5JjWFsAV9rpkejEowSLnCXV8VVW3",
  "key18": "51pExBhCuFgxvZ1XtZAj2Mxdx9SVoUN7zqP7nW8Erj55SSRzvvoAtCs68FRvXEKGLJFWCQt6KtU7v6zZbcVayo1d",
  "key19": "3dLGC61FHmAgzsuQYtTK88Xys33Jvp1HZ5kSJBU1PmsSTLKYwS1UaJCUuNdxqJikj9xU2BpvPD3upwcSBrvA7Er2",
  "key20": "36zZYzexGYxE9fcTMYLpAuVA2NEi2yVDzFE2k5RWUgWQetG89ikXhDJtCpWU7S64eetaHgSv44Bd9iDWCMyEtAtq",
  "key21": "44enJvQHizY98t1kB6Gc85E7ox1U2AbrckSaxVG1Et62zCkwcri7FHTQpgypDmcNdunoQdrd3KgdCrq1fdw5EpR2",
  "key22": "wBkzbYuHHetEhQRxdoaZNHdJzyzzYJg3eNxj2yXQfrocqKTtBpBR84Ja52mvAK3ybvFVGEV8oMewhs9f1URtQQi",
  "key23": "5uwe5C6vkifPNAtR5FCZMSr6Q253YahLTGqdpRTL1RLgtG9Za7Pyz8Gs1efkX54pCFkTXdX8WyFMLcLWhdiVSdaC",
  "key24": "4x9jLpSVuyzNf7mk7DH3JFDuaDgFodXZeKZMhDkUxBxfsQasuEYXoMfaXwr6Eg9sstBQQm9LHQ5uAhbAnxKjeRs9",
  "key25": "52D7xpxWT9SN3GjDEbFcTKCYkgUEF2QPwf5YCKv2fSv71E6Crb1MabNMrcEf4r633JYQMgJ4mGQ1DrLcZNMr2bT2",
  "key26": "2knMhwwNk3b55s99bUagVLF4VJFD8jZv5p2majxf9o8jPD8EVA8Ph24ZwxsWfr8BMpDrkgZKVUZ6uCVHZRwpS8ji",
  "key27": "3ZxXhfhDZMPhny5oSTLXf3nCiUETRgMJM6yBUEgnxekKFFsHYoCDxEfVEcidQUnQ2yzuHdZykG4qGydfs5XHbc5T",
  "key28": "Vzd2rN27LufpwxKA5EfhMFTMX2SXQF5M5mhbz5u1GZJT4beRH7UTBHkgwUmsWvpqX71Va2RF9agk1ZsBwWKqvHw",
  "key29": "3B1R3DEBA2XhmZAk7L4Xfs9asyJt8u4Ea4ra5Jy8974A8SbxSfPbbdZxrok53iLhfKdNPLoZMya4nvYj3NpVAUZg",
  "key30": "2QoUrQ9FxTzmx3L3HP3ypKFuZTjGFJPcdcMvwnTBWXjPaX56PK4mKDSPXMWSWCeVcKHGWNvQXBVyufAKnjGvFqCx",
  "key31": "5ixZCJs5QACqHB5BbXnpNpVrpBxLviQxfi7vQhJuDwPieAcRU4NoZJGCEwKBMTs9rPNxavbXj62ojTHGRxyEpZoW",
  "key32": "3bj24FYkvwDJrQn2KEgwi5NcQTCFBa6SCkMmJ4ZdS82TtY1jXZr6x1Hq8snmARCYvsNyevPnFXJeYbQsSjzeQtGC",
  "key33": "4zsGciy1wvtL7cnUahpvFm5hDyQsmfnVScwAfaX1NrNo2srdhN2xhPzFLpjBXxq6dP2gNG1cZP2jKN4KvzHpwwCY",
  "key34": "3NE2WTQrjnMTthhRgsMniZpaRrRovhP2hdvajfzuRzBmV4LqKBsYEYcxTX6R42Q2ydMmNYf5oKiigAc9JQZbit6E",
  "key35": "23KynFwJZFJZsLSN5BtsJsHmkroY2nDntPjTqVfV7XcNnL7Rodq8evkmrm7R4DKM8VKEF4hYkXSRHE5Lbieh7k1k",
  "key36": "5JK794ArujKUqBsVf5BB7NpBrgW6qpbXk4dEfU53CquV2S62w445VgQUBoVGwmgYyGS5Q7N3S3vuxyf4rxqyC8ZB",
  "key37": "35vZoeU9EZyCLL3HicGtfPH7RBG1omCXpANJaQu4UczdBTGm8T4cH9m3qJAAfdXpgXrJ5edYnLamncqPDphU7Vwv",
  "key38": "5FKUYSjvkjT8BPQpoZJCh22VbLFNG9WukvfG1jzdEzyXtbUGAm5xzknaAeSATJ1ggJbzqVc66jyJKWez753VW6fz",
  "key39": "4ZMG6uMskErnV9VQjpp6qZwij7UNxoCQiz3ryfJCtZ8Hbe1JZLuzU6VnEejGsDqVNq9TkXe9VuN8ANixWuDsYPTD",
  "key40": "3FTwM2umcYYhyfnnCVHd5pfjUt3grLRsUGh7QYeSB3a4hNbHkePeWWHdaHY11KiDMS22XJUwM6vcnT3cxPWnLDpv",
  "key41": "2xxojwUmCjLstxwziZiLFRDFRa8tfyoMekcszGJ38hGki9t7NdYGY9p2fhGkWgpC5Gq8x55aAgQ7qmuK2ubdxgYn",
  "key42": "5Zv1JUtNaT7Y5aiU3RTmKV57PtcM7BZ8gwWnTJbEjCNzgWhbkQpk8Pt38pF1HBXwnd5cQV9XVJgrwRJrwaGodtxN"
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
