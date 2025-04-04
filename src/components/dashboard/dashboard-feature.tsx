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
    "24q9esBRoQFwTGYbJLoZdqdGmePoYJcNQZvQqN1PhetPMcsA94eTtEyH1EmzCpqvyXzaBmzAfe4G9u9Zmtgj6GFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wVDkdDVYnXsfvstaopeq6aFunV6mjGGYcvZ6QEd6N6VW38qynGZ6xAWrHK4A2upa6pA6cCkqtgFC7j51NdhZRkt",
  "key1": "jL7P9fk4SVzYUbh69XrhxYQ5HLwv21UtQU35LkReJqprpiqdiCN6HTEGGDMZLR6Yj46CmKs3DBL2iVfzy6Q6mMz",
  "key2": "3qTXEqEhN3ucmruXtBAhoaJKdH1FTpGRt726ndkYVGDcxpLHt6i4gek7UTPqYKQZTSqD3W2AtzHpD2p48RSwAS2v",
  "key3": "3oAEFEQ3j7xpyx62CTpEFQBikEAUJ1YZcTG9ozztJPS8AXFBHcTdg9SGiVzCb2v5gULqifR24u8Fkn3n4Vexi1w4",
  "key4": "fS2jK5eBNVBn3XHkhGXomYU1fiSdPj5DPn8aUAW9GDA1dnvECPh2tRf5K41L138uzFzNR5X3CL9XsFHxQjhmNqK",
  "key5": "3uaBhTvEYM1jUsc2cXsvfBntj1CtT6gSsPEikNqeSqeGXFpJsofag3h8oV8Uc3hDrLHs3e2iUo1vCTzjQvGFVJV4",
  "key6": "3mLGTnrnqkndpzy7gxPdfTxda8entLPDWcowPjMUsHHZNdTsgf58WdHpvP9dgReJFCfuVox1FphfLQEhBoP5ZdEY",
  "key7": "4WSEHEYVRtK7hwhPDfmZZaxWhYHGcLQXjrxzYto4uWWb6JPxsSNreGXJXoY8fPMzBhyJJ7X1mezMyH66nyP1VE8o",
  "key8": "2U18N6u21EF56oh9u8rdNJiJUPkxmME3kw7B7gDBvEkQvgBrbnhBvHtbeHU2K2mNAur31m3Z2WPejpunSMZGJwX2",
  "key9": "Yck9Q248MbKDxkrkD45sVE8wD2mS5Rn8754SCr774Ep8HyXxub1huK8K5TFAeAeAyhMcnEssEaogiFQ3brhQUQR",
  "key10": "5xQStXFC355ASQjVbbnu5YKzCeKa9VSDqrPycYT7yxSrSdj84mN1SNmua6cPfPQENxE59voMk2SLVk2EtAx3wSq9",
  "key11": "3AF9Q6UdmJAFhAUAsGsTgkrpoB58ndBQBpu9Bzr2M3GGB59d7xjJ4hUL8uxa7ZKFJ1BGkfKKLKoqhmbEQwoBTzp5",
  "key12": "hAUbW7T79GYi7XRDhMXonNecJWhz9VJckvAGv3hWZfsuXzGCdsM8aJ3L1EUC7tiPi51EwvweGWyeKVrYCwRdJuw",
  "key13": "5DJasDrTDzCv2jxyqx1RRxzYmvbpWeGPNvpXxEv2XQjUjDABb9CkHdAmmKomVHUXs2drE1F4AjANoej4WXv9Zxwm",
  "key14": "4pPQaBjUtwA9MWbgaLMfnGVTZAPZJvkVUaHkpmWbbZiz98k5mb9bQWjmmi9dQn4YnrY9Z4k6ej4crj86ohbNhGuz",
  "key15": "4ByfZhbhnwTmARGKCS7ULiovop5cuq7y9YJ1SKb7dkNeyvGKcBHZD2gDPgTQezDV8ETN6LUg7bu94maoubysQPLJ",
  "key16": "3JbWLhRJBz7qPV2unHkiWGjcZApgEwzCkaf36x568Ma5qFzKBaisjm2QU5shAZMEML2R4EppUDb4oZr1dyHya9sY",
  "key17": "4sjZEipzx4R2tSbjMo3L9pEaEJu5MsLAwSmfw9BsdLZ4YJePFgrJVz8xn7UxcWK5PVrFQGgdhVfayPjduqaCwb3x",
  "key18": "4im9CZUM9ipyVc26Cr6ExcCd31bcVauiNexgLJmjU1hKBvCcYhUsVLjKXhc61ek581LJmN7SzEYz8i5NFogBcbtb",
  "key19": "5MT2ra779UbLio9wdeVg1Xo3AbsVEFhdV18MrdpzD5FS2q7SA6vxRet2szmaJ17SeJFpERpD3WTWKgUaXoajm6EF",
  "key20": "3TrDCrickeGKN8b9NKjPMaeEJADpnnzThbby9TSQPA3rZY8FeQPtGWZH2sY1813XzrSpKDDTmH2cA2Ve1WXMH8Fi",
  "key21": "4NE1fT6Je2S6ourWun7zvpTPkvvnwREPnLxg8c7c15Kw298TGAeeGUDTR8yqCKiZPckEbJxQkJAEzcc3z8GjPDGi",
  "key22": "7RD3tXvsttVQs5ZNZ1ooqey6amkgFk7BNV7tXXnx1cj5eCK661qMyANtVcqHwT7bVFmXs9pcBSGuXUnQMXpyEb3",
  "key23": "3bfnP1cTThqGzQxJAXWUyH9mMiX2Wdvcmh8vK2W1CJQMh54QjSrbLQDaHDzQS7peYGB3Zv9dQEcgfCypAUNG2bNY",
  "key24": "3s49UQoLdysPsEF1q88NCvv8DKSd394rL57UaMNsZuXT8F1WSZMkzDVFqcAit4P89NYEvLosLKgjn86JBXAtmP8V",
  "key25": "4eTWrvA2kmMNovqUgdPkhRSDYpGDJQueWf6AuftZtPRqFbZ6dPtDErBGrbQWr3E1Zt3fn6QEx3pnwogh813GVTnu",
  "key26": "323QxSLnrC7Hn3xnHXVM8cgZzCsc95EM4EAofWTz5YSScUhJBXYM8wokJbEqudNHxd7oqpnsFWRdwCgowYUiFip9",
  "key27": "4LrTWfp1C8AUxAJ1UMwBarmcnj9a8YFaa2GBEW7YhWPLJC6v7ocg6Aky3f5s962v34st5dKutmcS2HhsFcyFmTGR",
  "key28": "4XMyiPUKhAT9VLgJ1Aw7CMNHSoKUcKhBdJZQYc1Tr7G4u1fTTEVjnMkBrXVjLGXThCPtxuQjCZbApfqRbtJX9y9u",
  "key29": "4n1Xx44Ahp6JuyvQTTUbYAEs4TJ7TkaQJ3ZPfKyRzaennsU4jsAddV46KkfwGLH11Yt388vUJDtAxpQmTUdgb8ae",
  "key30": "3cxdnZFsiYHogg9Sobi9ypZp3ReLYWiXpkNi3jwyMgcZtm7ey52576B4gwQssU38fyHPghuffLYCcWC72o2PwAAw",
  "key31": "625Tb3mfZKbDg6supY3L2knDpKZx2We4opHgkTrpu4bC4BmUu3yQtfuXLhh7ryARPsKSZkixAjhXBHJ2WjT7NTSx",
  "key32": "ku66RKryjQLEzfpd5ovrxopKjJom7P6emXRdCUkLGDUzuepKjVj2AZ1Wo5KqagnZYTgAkoTpmLq4b32qubH8p8T",
  "key33": "5UZ9Nfph7DjodkLLYTMuo2WzkvojgzCsUrZde8rZ6BUzNWovULZMiB4nUsVahC84Q567Wq6T7a7X3RoChRJU2TTh",
  "key34": "35S49ay2vuRdn3xB6yVxMFGc1Aoz5PjPmpt9qWoowSF62PhKh14VCmazyozM3FV2mhNQNAKeujGb3p2Had5hFh6M",
  "key35": "3wFPu5ZVcMxg6nMkNAVCLN2LmZG8vwPSXspL7utbasYrbRHL72feEMqJzDJVw9UjvmYx1NwW9T9sG3KHdTz8oEpm"
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
