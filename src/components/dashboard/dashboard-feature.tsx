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
    "4kdRdSufDHGReifKdSVdgPuy2j2Apr5cHv2GSqF7qi9QocjyFHE8bhhvnVrF1SkBwW7NWp5PZdHn2bsxG4Gxsrzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kJj4MBZSHifP5yuBUnbfvJwvyJq813zzFnAS5R19H9X84BUzZxwcHq6rU5qyDEH9uZJvckj8L8TxLNfZqZxw6nQ",
  "key1": "42rnU7xSy3GxaeBqfXt68JynXjaZwyPw5KLZWgBF6M8YJLYUkQcb3TGcx8SGrWTB7awzSzLZiN9BLpoGLSN9vCGk",
  "key2": "MR4vDyKuxFkkqVUXTdMJEda6SvwHdx9UaS1GeK3uzxRaQSLawhMSTUqYBgLKkrzqMHdQQ3rWKk7uFLrTVSnTVsW",
  "key3": "2VQboFouRxyNW8MwSAhECkdgNR7RUscnWNWTUxCPSTduZckbqA5shF2rX841iUWqvP2eY2Nv8mYtcoRH928PMJK3",
  "key4": "2pNpUP4UiGQ9y1VPzgfwu6TaPgYnYntE3pKgz5xhNuYm6iwQQ11CMVZrVCwrBTrS6P4BjuUDasA5b8ktFAVXwVCf",
  "key5": "cg9aTHg9rXG7MR7fp2JLFRJ7Jvw8kWPdoVrg2hGwAX4oDy1LSCvodppJEAdbvXdnzkSU239yYuD34XMqV4SToGQ",
  "key6": "4Vua7SB3XupyXT32oKhichbkuJbPVUN15vCjedK8mGYBHRFaUth2GAXVh26DYBtA9ajCA5qoAS6phn1ixg2LFC4S",
  "key7": "3VzECGtoHFCQnr5o62wgLbysuhXBfPVevLaBfDsxPCEEo3BMsWxt7xjstCU2TgXM7ezyyt2NK9xsKavaK1fkuSBh",
  "key8": "1M4Z9eP39g9NqAQ5JpbtfKsByApHNRxqGjderrP6qWBNbRCELpLoxMkv5QgRdTHqe5g6EzKxSkL9jMeZnwz67AN",
  "key9": "4Au2YuiKnngZg3WdGi6H4CZjUMkPFrCMEJronyfxrGNXuFQ2S54TESy5abmwE6QDHTLiKhFxyRyrSmxfYCMDBSM",
  "key10": "3aJ1XCE6GeDrnKCiHjyAwBKH2djCYPsAnW42ebtza8acFxEvhk3mmKP7EVbb6mKACHiKPrgNMLCCZs2cbtJ66Lk1",
  "key11": "4Vty8wzVn9vXeGTM1tfEuNcW5UZui8Mr8BsfxXGrmRFMnr59FL3dyHGfLCPzqqLJRiaqQ57qvE4w2LLd97NHD4PN",
  "key12": "3bUWXuRDnrJKMFG5Z4WUomUczNC1QhJmZAz4fjF5nkTxKFjEGvbkQzjk5GsndtB2L1f8tT44PeAESzsVdP12Jykj",
  "key13": "3MnjKiVQqzfzyAUGjTzPruJo4zmm3dwAAd6M7A88rK3pm1zbAY1CX71AjRd6dfGngYQ7AnqhtRF7enUfrhPrBirJ",
  "key14": "6xRigAC1xCGf11bbBMukndZn1PwLswsY973YVMm1qsXCRuJycTdKcBqBzg5iAtjcBBMgN1dutR9zGzVRJAjvnhc",
  "key15": "3SEr92g6fB9EAMbq5pERevitZ8dYsjd1WNnfZGze6eMHDmrPeE3XSBXGu4uvZaaQXR3R8hTrK65Don6bM1FcBVdg",
  "key16": "5dKzosegLpRPzYEjS9x3ZXe5SP7ppjNY9izEK88zfPxhNFFhHeF9h6YpoQKhE2mF6dR5d66A7fKVybu5SfMGCzQY",
  "key17": "4aisLMp8UjLVcDv4zsMjyMgWVfBdMQVZ6dqtsTedRnoTEK2owzvkhxM74pbAdnfjpSPuDZYop64NfFsLpGRe3kMC",
  "key18": "VEZdXSDCB5z8j38pZedNFdLGdjvoKTR4GJsQKnSAqPQ8TXgkb5NGv9kUWiiaangoo1pscEv7kyG2RWaDAeVE28J",
  "key19": "3yPA3U992vjh2HAJkz7v7fewxtF8XzHcdyborzrzUyRyFQuNc7TknoF8AVvkWPbD9e4eCZBjvvGUM7DoVwT6afva",
  "key20": "5RKfVF7bqFd8e44xmZkVtoc3NPNYLFLtdcHVSSyYai7vqLX2ecWMTFYBZqxjTGyF3Wkitt5F97RL8wQby7Q1Ykrc",
  "key21": "23fvpGjkurZ2VCxkJeBMgswDj3UVsDDT5vaF748hHmd5wifisgD2FGyELw9KnuoNdhgUhyHJUiXh3VH4t2XRo4yr",
  "key22": "4SjTZKKwqvgNc4Cb93ovtKw2UmDJLVnkxcpDaZ1PfgcSGhEevdbpbLDUcw5BoKFsTwVrhUvzBTNnWjVmUSXZ1F1R",
  "key23": "B7UNzbKFmKkqugku96iHmEKw7AQ7TEfHD3ToT5RWeJGfvWvn13HkWmioATt1q1cyPGCvJbgNHnFETB71M9UkdvP",
  "key24": "5NAHfzX4QLQHEWTqPH39WjJ7kw224rDRXDLC87yAQMG1D9GBgwsgtVSMC7YF3brKgvHHAMhxyDRRsfJydZ32zYe4",
  "key25": "56S4eiZhCSUVubTqUh1mGwfG3VqqW6eiAKhGKgcegJnExhcCFsC6YYUDkPGbcCXjNxk7oDdDFHBchJucdbXBWSGu",
  "key26": "5Qv21BygAqidmPZpQqJCkCC3WBkqPaRtTXmPPtARPfH56h6b4zaAYMhehaXnrwPVDRHuAVXtdrjihdEz1xFVS9LM",
  "key27": "4Th3wz41D9zSaDAxrMUjpccDMxbM8JEUnfUHQBipRY3PFzD4nSrKdrGeNWTDAdwySHGF1xVKMG5Rz8HwgJYcWDne",
  "key28": "R5k4fjYcvTbXdLoTRhiuyEU8NyRUBDhFjx8q9XmHzuQeEghH8M8Mc9oFQKp13qDuqhM9DwZvuKG7CDm1qTUrffu",
  "key29": "4BXPWNQrKLtLB73ifQfS4bVS3NEpt9LAGtTu5Jj9mmMitTE1K4DHnJQSQTLUf2AS23cJGUdXPEtS5Gnjey9Mm4QR",
  "key30": "2K9cJM43gPYRNX86JyYCiWX8NaZMz5r6NmCm8r1N38kd28sqM2zH3TX7W73ToW16CCytXVrQJvbbmfuUks2Mn5jC",
  "key31": "GqDVhKkLKh3WygAE6DC1SWLw64o4WsV3ThAEL7iuT8jrYZiWs4YNUejj6ztQn7ZYs2ZP5FhtuWiSewmAULqj9QW",
  "key32": "gC9g6rscp8rgZMKLbiSCyfrZ1s9FMxnidT8yWuFzoiZBZbgfxKQQys2qeWDzHvpeFMCYHBq9Ahq9DL7QWtBMp7L",
  "key33": "4yKGXkHhGteLkSVrqKBoHzicWvJoVfDd4XquM9Qn7RFNXRtABGbjybxFAPf3nQ7daTp52hCt4q38TAh7U2muPB6h",
  "key34": "53RY8GrDp1YXLpJuZv8TBGokoVM8XFKmVpKdwydUf7u4qgsrCU4xBUUko4DvGUq3iHT9jZp713Bi3KZgW2kWEiGo",
  "key35": "3MBZbZJ8mGc89joVspo2rDE1ELQMC5ANmGD6GAHrP56mt4dbb6r9gDHyzVdbhqrb1iRirGv8yKj72aJ4pNDYbPnA",
  "key36": "4cmMPFtf8zdht2Ws8xGpvmJuTuspnnTK9YiGcT7XeUr57oSKqTouDpvmQChMBDYtSQW5iwFKaxgp2wkmv7uMHs6X",
  "key37": "29C4HL6c7dDJjR4xrBcNAiiHkZM1bedka7DfEMzxBBCZNqczUCZr8jaSU9v68pMDevtJsij6ZaWHssyW6CHzZwqa"
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
