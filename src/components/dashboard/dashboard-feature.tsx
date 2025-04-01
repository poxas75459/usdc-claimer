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
    "zYLCLTHGpAshtnL9C9c4HHPDpxodCwGtE42w3imVXzyYygKEsSDKMrUHgNUhXRhypKMjZhEmYoFSYdoAWoYqYAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NFpRfyBsrU3h5oWUDhWY3uLzkPkQJyzbUKub53MA3MxPJ8A6LYREmKvAj3EWZkon914RHugv9bG5Kg6W8Y9VZE7",
  "key1": "3bhMynfZX99ecAGruSG5pnXUMtVRb3XkTmuBRnbEpdXTkHHQngSikJ6EBuQ9crVQW6ui3LTAEqha3MY7zKNVjvNE",
  "key2": "58hPizJ2sGMVqZ4vDToKviNk8m8dTXJYV1WvrNo1srPZLPKR6oognSfDBuaQiNygihgVnfj12ogB5RPUUS2NLQv2",
  "key3": "2E6EQjX19dhc4SRzeBghDN6kDhskDRRY95t9SmLQJuRSUcrF1wbEtex6k8EnACg5wDdeLCvwFfoYV3wXFya8TsLu",
  "key4": "4Ja8s7iYDFCRSJyvn2tzkCB7m57YGyFKQdwcYA1kZHWXBW8H2bPBwgJfJbAeDjPKQky3ZnHhrFuDSTyeEJRnX3ei",
  "key5": "X8ZWRbn2YG38TxjFMbg2FW3JhjueGMB3ATMV5RD7rqqLWzyYoEGfRMDJmUXmiMKdowvEx88YHMybR59X4ToiZfN",
  "key6": "4pafsfqxabjvqv9AeAZ4XHvFicSksPMmoSduHxwDL199gPPaqesLcwUqZHBVK8JJB83dffNhC5KotWjD5pGLLvD4",
  "key7": "vEg9SbRxk1JAd9WpWns1bN7d8QXw4yWMEUQToU4PbRvas9DkjzfMfk8r1iHXKgiaBmPD3a47JamiKLqBJxTRVNb",
  "key8": "593djfYu6f3PBEGXBneA5u5R6K3NkeYj567RpLVrMEyp9q19Mmy6e5i9qddChpooG4YVYuM4YHSZQ9XyNYxywV3X",
  "key9": "24fp9XZQyuMCopTac2aCa7TkKzFEev5RgY7GZwD1d2sC89V4148WyqSFVWxk2gvijFvP8Ud8CXNN72F3fkWXixTc",
  "key10": "67Ri9wBV6jJq2gB9PwYFFkLpkZHEDEUzoMAxt7XASppd9cDceAS4d9AVxN1okwh4pdMRYHuNYy69PGdDrqEfpBF3",
  "key11": "5asQz7399xd5DrCK8MSndqBzVz9vSeLLmUZAw2fkjJy3RynrKj1ypZ8rJwKRgz6G8478swNQvP7ibPqLCbZLPzgp",
  "key12": "H1aPFh9irdkqrP1KrhM8fUfrKANcy7JE5ioGaAeoDaPWBJmh6L5zApcXD9bAQ6keEG7Wp5xNRjgQVaQKW1uEe2Y",
  "key13": "6suYEmd8aJWS2asp8bSEvqbtsbGoTrGdpADQRstbLdxM786shQ8Kgzz9wBBPPYGNDbteUV3oFxKbeifGUwbkucu",
  "key14": "56fDnBPLEnjQW4zpxAb1gdRHeJswQQ3EUMdULn8KdMHoEroBhLCvjFKiS2GFUsAAMk8Ct8c174V7pXpr8iADgQJD",
  "key15": "2BQZKDLBUFkPQVLmtsYiza1wUucTPa7ArZUgU8zR9JZHXPi7q1MwKBfSFy1WB8qrhcKXfGQvQ63Ws5dSmx31wSuR",
  "key16": "yf2BJ33kkEYsQFb8oJCUQN5mKsKaA2ckCFv4THUG8eKr1Xm3NoXdKKHMKBYVyLvPyGxeNSGLCGnkng7dc5r1eA4",
  "key17": "67riJnnyDpcxKqT5E2FNv1EdiZDpWL1tD2Z5zqQzzEwjj7ZnzdT3rnGvrmus64X8Mi1LwbYVsTqqgbw5FxHrf6vb",
  "key18": "42uB6Ayy7kbckA9TuwTD4A1XFZ33NCDAjSuZfzptbswKY5d5cdmWWpvAkzLLXxkbDB8aRAH7HT1Qx1C5jC1iKJSt",
  "key19": "5wCRtdQpKScj3PHpyLZ1ZswYMQS2hUw2YanwwFf8UZnd9L5kfTHujGxuaRDcC4X6nSjYxsWVfab4uxwLh9PYq8AP",
  "key20": "5HatmTnUcRorHhpbtmN22QspzH4SkFyuVNFDNpXBZYTXJzn8uKdH554XaLwz27jys4dAC262miySXyXUaEp9MqsB",
  "key21": "56spJsdwTG7MbLkyf54KfDjZvjgMWxzCmR1niYkpGD7ze5XbePcqzuPTtTZGqq6tAf6swnKe7ip224tNEx1svQxA",
  "key22": "4oPa19YcGX5G3u6KXgRLm1EV6b4Sn1zChQyTizJAuBwheC6F4kLPbGXiTycziUbVwwuaaeApWNR1CHP64jsuKoGR",
  "key23": "3rWMNQdW5dKvGCjLAz3P6cnn9pUbfCUV8BTB5BgTm2RD3LPsq997DdnJAkVc5S6j53UAq78b6Qaui5P9h7L1g1Vy",
  "key24": "GmtobbbAEajKbJwZxAeZ3w14GqzUjv2m27X3hKKkBmYbVrdPaQiU8xUQT63wAJb6g9dMq1RAxJw8podMMAJRrsT",
  "key25": "5DsCkctooyMV68zh2baqS4aLnCXKmMNgLqrFxZUrc3X7XHq9uqczgjSpA6Vz23tqdcb41RB6YpEN7yEhVPuf6pWe",
  "key26": "5db14nr8rHNxNjpKfAGxTHPKdphUFwwUEzVKYESZLCTbVut81MmpWLSg6aBb3wEVYUvp2iwmZ9PnQqSgAF4NVymv",
  "key27": "3kvYp5iwcY36ZqzkzvufnVoZWvSf2kuKTpb4nGpctQtB1CJyhUyAZvGNsSVPFaJJ2Uyb9jaSydFdxrwhUxr1bTrQ",
  "key28": "3YpyK8DU832pDQGbsuCJGf8mGWcL4PkMRn5BTDeqfVzqw8HJrbcGwrxTmwEArvnXSHAZH1nq74V9569qsxhGAkzf",
  "key29": "5CpfF5DD2cHveNrqzT3jfaAgUfKgStep8pM9QeXQ4nMkMC11xmhyiZTgd9xkoAVQ3nqjxm73SMM6aN3UJ81qMCqT",
  "key30": "f6V8d153LtmEkCVL6Zj5dcYXzW8hA9VEhbwpGeG6yUY9sdHiSfip8SGZLZS8icLT8iwjpf6QM9RBUJqYwLaUB8p",
  "key31": "8g1PrXDKqK58fXa5eDXFQ5BzpJhg6JMgkog5mDfRChuURwkd5MLb79ZVARPigtEuWeuMER3paNurh8HJyXDBuqn",
  "key32": "2utergKCiBuTiu1TYBWp2a25sx1n6ZtBD1j7fgGS4H3MndwXGgtdHwU3w2BnDgCnxudGiwHZoMk6PSw5sCSAV4Vd",
  "key33": "3aLQAa43cX9xPbVNVXUNcB2pq8FCuAe8MFp6stnqvReZMH4iC2Q4Hqrn7oWoEvduLSTwJBgQRWDwcZ2eFgedPcCG",
  "key34": "5wi4bxLmJ7xV85T5TVVebkxS3pCRFCVe4zMgn2rdEj55c7GqnBTskvS9a3v8yHpwx682kBwLJfAVCx2PbdTJkrxJ",
  "key35": "45gt3Fm2eqG88x9RSRTGjfN1uG7BimnDnCxgv4i3jGakRmFYi8yo4bXfarKjuW3RjM23p5WWV9yF11MFZd7LYziT",
  "key36": "5m1ninWikxCAGmMjg6sAPpA9yZvoEqvQ8AqRGSMLPEAS58T5EYbd27ZYUtgA3FS6iTDh9i23vUEivTYC3oabmjUM",
  "key37": "3J6eqPoqsawFEN9uemJmP1bTZUB1KWD5HZVkyxzmPYmHDPSGmuhXKB9zqu6Zfn5Tmbj4BAuwiddNqGFpkiJqS1oF",
  "key38": "3gNS64ETffYEMR7xPd3uYjaULoDER3SgVTPCB56MQZYM4PCsgFzna3TdTH56ZTxAisxPxX6fne5rAEhww6YFwjDN",
  "key39": "59rbURi921MWCN2U4MhS36zhdWypEvQL5tmPxFCsSj96mVTeB7ymLVMWMde1NFt6KYsJAxpt2U6pBWZ2sKuG2r4x",
  "key40": "2jUujcUjPBnLRwfME3RQTDhoKWGSQTf9pmMgTqcR8QSL4RNdgHdcvr6x5wPQTepCQkTJX6iYXSps2Ru8ehxDxqMW",
  "key41": "TnFaGaShgBFRZHovFqATYdLTqGZYKtsrNS7U9VUmyW8bi54Mo3Rgr2GKEJaMj2vwZH2q7SAUmdUkzF8fK7886Ag"
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
