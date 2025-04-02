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
    "4ngfVyCp5ncqh2QcWRWMk6jQHCMUQ4HedspMgrg2fVCLfJcLEyV4ysudUqVt6LZvaau3AvP4KnWLgPRL6kPA3v3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66YmKPA73Wfkmu8KvACZZkYF43ndMLaFjeJBLQBxXwP5dcre8z9mZ5Fi1EQC1ASgxe2RRu1UgvTkYbHy2VMLSiSN",
  "key1": "4Z6WxHVxmfyRghwovUMKgm6jC6wPDMkVeEej4oPqLizM4aePBrokdpHyPWioNzy1RA85sRijsiY1V3GAQthu99mx",
  "key2": "sTpsdEKD8CHNDwDdUvxC1tTh6pCDKhdDi2j7f3LtKk6z8DAiubUnTYecqQVBDFf61ccxj2rgaMoSQkrcdxB1ZRk",
  "key3": "2EcZC2gkpzSzP5mLuYGP1LNtFANEqu4Bcn4G2wQQcwf6QfkUZNDQLfs4tfw8ccCidwcY7U6ZpEjMUeBK7L9GRokm",
  "key4": "tsLCbnVVaTFupC9YgzrhS6ThY86fA3ecjgVhDhBE5B6WRT7bc4GAj89FxbARUSf9TLZnvzH56Wm4CVJ8BXJd6DM",
  "key5": "2WLbJUrGfCB13H15GxtcCWhAtACWxR9VGGnvAnGj22h55bWm9yg1brGXYeKXmX1r2a1KXHAJhPpXuuDQTJ2UY1vv",
  "key6": "3P6YP2BFC9Hqki62PQ7oxM6vW9BcTh841p9of65jUzZwrM3T3nQXqPN5k5BHqG2R9E9SUKCbHRkSKyKBsSe4ap5x",
  "key7": "uSa36JUXFZVD6E8RxMfxaya5o8RBpAfKHNm8CLio82PTh1X2kh4H6vvskGRvDZ8GX3R3hmyhPNcEThVMYma16EV",
  "key8": "rpzfYhxfDHHPSsxHLXvW2KhPxbZEfUbuovEZLbRWwAg2CCuZjCULhVj451dSzEQgdaqdzLzbEJFu9UGs1Pa5jZT",
  "key9": "sLRGfFAw2ebyQWXz2ohAcUYgtmSADEDE2fKNFpQq6bSAb2Cxz7V4qEK7BqoDkHExePyEmPExL5rPSxE3R7NZANG",
  "key10": "5yQQbQu5qqcEnJksZEp65EEAoDKpngji1MbMSVerHNUqsFKpdqYmdTLTTJH2wdKV8R9uZ3QRDEwUQzwyntMdunve",
  "key11": "46o2vLE9awr6UZhgFBbBrMCyEGkFsQPmtNXofG5m4dbp9GboTJEWjGZm2AFR4BGqRztqUzz3JJQVw35wYfC4m6rH",
  "key12": "4ganhJ6mQriLmq3pCKxTq2c7o1X6QKA8E4B5yrV8U7JBc8KWM7qF6puSWR6ejRKCMrTtGd1EcVoiNaf3ec6RzRyN",
  "key13": "DfGvXJ91UV9JAzkbhsmQgKqmEDzKKRWWwWCphiW8iYUnsxeRmrcdSEiwaJwuV9tXctKk7Vak8PAACT2Thn9A3mf",
  "key14": "3aSnKBvmty9QoKBnwR3VWb8HgNgyKrPZ79RJFbQKthM4XjnWAYNAsJ3jcFh5TY3wQ9u3FE9NxCqNLMsXSeYeUfwt",
  "key15": "4WCJ3Un5rT9MwXrhckjAFmR1P43oAM1G1ZcjkE61ScUhb3bNcgQVLS9H1GWb1c3EQ2VnNMEjjazhJv51TEcN5fNj",
  "key16": "5b69mTdwHTtFtUiPPTwaW9NxMrVxDr6neAviFhh6oimNz7S5Tw89se6ysZeQ7vE8ZpfygnA48y1mrxoo6soEhaCU",
  "key17": "4NjFq2geo2v9CiUGabckrUrpnhbbNxRnUhkJW9H9DBMCvrPesRKikU4pPN8RjBcwKHh9uDFsjosNpAjqJphyJYtJ",
  "key18": "Lqb5aszGBYzsubbhGL5B7LTrAZwMYxaBLJ1hRfvzWC6vPDNyksVsLEBGCiQH2F7yFiHL3Sxmkx1vUTEqQ9jc9oT",
  "key19": "45fUhemFYwd6ALR1Na9EMavvFeUD6VcotVDn2kfJmBXaDfyVNLmcR2nGYKmXAepvEtjBrgjhXjYhMNQ8B1m4qWmR",
  "key20": "3Tt4j41YunpyXdfY6sNWMDXs4mmN3jwCe4NUTd48afpj8xZ6FqUEhkNaT8t6j3AwP2HWwx8PHwWpYXtRR7WjxPWp",
  "key21": "4VM8SMZJywF99wSC5fh2U5avrU9xnsFE5AUAb7vUi4uPMAveoXk5u41JtPGedPDKkJqmq5cjFqanS857FqGZq64q",
  "key22": "2b719dkzUB2AxuwLWrkpgXHfnQwrC9ip8563ExghJcRPTioUbtze4sKXwmQhGCjR9FbQAm341D4zVGQ6ZHYv3trn",
  "key23": "51ovZyaoB2dD5LYgKM1u324DhVmdDa5k7EYiCTipUmunAeo6PpzDRVV2DhSDofU7SRonvpS2M8LreTupz3c274JE",
  "key24": "3QeNLY4L3inUoi18K5cWwCA6MXU5zMQkr2JUPkxA1XQMy2jxZhxrWPJA8syDNT7M9dmvDSXRkv6MCbLRRsG5L65D",
  "key25": "q9Kd6nHrug3QaMo3jAFfZvKbEn2wMkZPAj5NtQ2SHugsqKhSNUfopbWdZUkF3zLTnRWY5goFCKdbZ3MBpRGYu3t",
  "key26": "5jdVWtshqRGb7r4wdddfj9JWxTeXoTrrXGUB7qMJ2bYFTXLnxeGyJ6w3zaMrzLgNDeHsViRpPi7EkKrisWukKB4M",
  "key27": "xNPTLevGX6PtXjYsYgVrm6ocQgHDCBXRyqwx9eMaeHu1L7vy3i6KCxqVotceyvJD14sxESL7TDVM8ySkr4kyERS",
  "key28": "37ngKdwEQRppNPjQn3Z2cwP1ZJaXA5bFpyok2a4dDLk8x9Es2xp3bQ2HtCAQYYix1Cbp2Q8Q4V4nTDriHzbStGqP",
  "key29": "3PcMu5j9RtaKg5LsSbLERYCpUCvd1RJrsnBRjwZ2G4Dm2HiJFGW2YBvKpcKFstaUEwPgWUkeHbHY8SvQnru4cPSj",
  "key30": "4w7cGS1o5EAUMc6JkTNRBzaqz16fdXZoEGxLJWPgrDvrkZawZiCA7CUasi89dQKyvHkSTuLmRMe4CDb4FREGrt4b",
  "key31": "49yMF8y65eZzKCW9zbAeEq8VUskGsGNmgVsodKNB1fQFzV2NYsUKeia4ugbyYk5jrcTe7gu3vb1rpu7Zkm4z2tYj",
  "key32": "3masgDB6kF2Vr8ZSiBBL4fbf5C4q4BEDGfLS8J2SCVbbpA6rsxEUdh7Fb2F6SQPrtweuLfLAAXrcYQBnHpbD6Fh7",
  "key33": "3hmuKDWoZHuSoknTZhN43Aio8Qrd5MWLZC2v7v1Rhsd2EW4h5up6PR6f4QdkYTZAewLxhEjqXDz3mMBLCP7teWmp",
  "key34": "BMRAgQPjhNr6Tk8ZV5kA6qCurKg96jrmtstAv8etG3XFPuHkrr4XRLxiwdXmLdocumuBa5EgEj9vrjnoYocXUMe",
  "key35": "2XfB5k91vJFeY6qwPysBjmJEJTZ9e6f4qtGyTFv5XXCth9yPWzeFr9aBTtCEQ78Kke3znugUbt2MeYQtH7FVgeic",
  "key36": "2yR2SSsuSn3K4oLZhJ1bjDmevbE7jPoMBh8sms5ngU7QXCVVRAShn2xrnoW42xupB9RpK5sbK53h1DhMNZcDwBU8",
  "key37": "5EuG7E5V4XX2x94JQHQ9LBtEWKqYbn1c98bRc2es1nmLoiDD2ErBeVxHMookUz2Mnsww1oN3bFXoTgHxpuqReeXr",
  "key38": "47XUo9durtmiahDR7zvmC5pNETtAAJUCr8jfi3mk1mbui54CpHAdtXocGJUcWDPWQLKfCQcmzHJrCAEcL5y3bYqM",
  "key39": "VRWV7HUP5NtGPCbmDMNHHLoHJfyoWGbdc8CmQkupSmj5wrxBGhfUAAqS6faRccmeBesAB6s4UyuPzwFwzv3wWbY",
  "key40": "6d8veAHvX2hWdQywWCkvDZ42aVJRhPSm4YTybcWoCo42WcEzbNx2xcYBaV6UE3zKAoXV75jA1nF8x3rHyjm95ts",
  "key41": "2jzhfVzHC9isDqR8Pa1mrT1NVQS8PzQpjkJk7fLwZM96knaoopGYDkebXPW7kb7RPv1Mzxy2pwyG1GmaS3PW5rBk",
  "key42": "3huPPY2GfgFnTqfGXUKwq5Ztso4w4k72ojq2NFdGnsUN4stxaeEBHPEMpUHYjtqPUuBvrTsaR85msQZpxJ7BNxd7",
  "key43": "3dHLxDXkYo1VbQuzEJBd5CuXNLwW8kPHjzMEJVHQvWSUYY3D9qMRgSE29cEn8y1wda1VDyTBoSJpPPtVdpXNhiS4"
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
