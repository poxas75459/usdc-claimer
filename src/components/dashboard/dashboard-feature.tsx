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
    "2odAFCharF37ZTKgis2spxpeBMnb71gnCxpAPWFAsjNN1faQcoyLSKEDuUFFFdag1nQdsyvp1mJrwFbJxyRK5G2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MYepBNKuqxKkq4m2GZgntKZgSAPrtuaTaZ11x67BcT5Cy37qeHzR6DCpa9oigkM5zfcSwd9d1HmBheTZCQbWBpo",
  "key1": "2geDPkY6T8NT8zNmHZw1Bnzzu9LTLF9QLbaY1K2ZnyGgMPw64k7181VZh2docaF4pUnRcN64GdLDvcstnFmmcAJB",
  "key2": "4fqnu5RLT9jBNJvnjqaDVgs6pjbi5RoXuXEDb9VvgL24AHKWvqKfSXMJw27sBkDGqtECBS3Hw5cX4JYBzTdzWSVv",
  "key3": "3bM9AEXMsLjGz496WTi4x5kN3CxBU5mihVzuf2eKuAzQYmxDqpNWWPgTXWURGPDFXnfaHhcxpRdAbAAgh5bh8fhy",
  "key4": "2kNtdtc6uXYHAYmcLN2ACgw8hApb7cRC3uEgjR4haHvZdvyMBTuK7skycvRZ1tZ7hy7CUn1yjucd5mZ9rnG1cdMt",
  "key5": "3MjpjgMYvBPR7VJgVqkYrfCPSTMctgonWGcTHdxTTwj4dDrVs8USbnhAW7Dm4yspnxVXLKfxbdqwaXZp7oAuyEpH",
  "key6": "2W4nSLsAtz46MGmfj2tfC5PwcyRrkZkNNrw18qd9NDpVp5e2ojcZBKSSNqmb5k6DfJ15SNCMoFitHDKgkSS9Xcjf",
  "key7": "4dQ1MSRTi1Wfenk5eMjPQw9deu4uKTDFia7ibzvmA9BVNJtR5YFNbcT3DNxRYjQUQgtc2iC3rbEGkAikNJFAs8X5",
  "key8": "27FRtPm9Tk9rwzJsEnUwi5ECgcq6jscGvt1GwoyhdrsUB1hVwgCmpzxqv4ndhSsvJC5doXbR3ufVJK9QwhTv1PVS",
  "key9": "4rTnLkTeGjYSzf8ZscFcQLatNwoF4gc81CzVtS6LaHKqozWZoDJm94TRxu2SMmMTpDxsRzxugw7AffACg937ijDo",
  "key10": "4kJoD3iU528eewMMFUatgoRMbUPJxEKfrRXJk35YjJaxw1wAEa1kkM2avyJvzCCnmWcqHLxQfWeST9MhgBxJ1ByW",
  "key11": "2RCpu5fEViierxgjA8Vgqk8wZAPTjgg4H6WLYaShVoHUEXQA3dNDpJ92ppu3AxLF8UwpmFUoMZo9zTv1NcHqyJuJ",
  "key12": "4QVj9MHTmZwQuHcB9ZzNEvQhTLZYDL5XTgoQo2k4zqhynzYiG4544pVmuPwtHygrDhX7iKvAcRTzyDhgstTZwMmG",
  "key13": "5SgufU5Qu238y5ZFZK8WMpyBWWGaEkKp6K37GQViJTRVBwQa5eRDVB3fWZeV9N3fU5hm4Zjfb9aupNFGyFTbQofX",
  "key14": "5LZXjwxKANYZRKBX77vUQkDUQbW3ThefuoA4ZPpRgVHh2xpBJQCChHUdcHtVftRJRuVcdK4igYG2JBdV69VFVWNX",
  "key15": "5uhfVrPYuNpG4wFpTzs2uiMKjLRcFYTwHRFavmjUbEPhBSVLJFHeSYGknV6N84YqzDLwdrhzyo7S6ATbeh4B2itS",
  "key16": "UQ7cMSMdU9f6qC419hmfCqcnejJJ8y1EwchE8V3UrEnbnXFqBHSZkWpS9daJjbhGLV8VGVKHkBP9M6Z3aVzsWyu",
  "key17": "4AV9K8bcFk4jaUiusupC5KFKz8JSaRKHCbyhLZhGZBRpnJCf6pdJBsr3Jndm6aSBbfAEEqAwJgLovXwEgPmWj7sX",
  "key18": "3ZwMS799wBdye1bmRRmDB2CiXL4tUS7AmXXWH9my5WcWneF1RrF5ceQkNx1VrMiuKGwn1mCRnF11AaWYQyfpG2wG",
  "key19": "2EjJdC2wTtgAtgNUcmqjpS11HF6srGFZ14v5R39tAwqkEkvxCz1Dpq6mGrCjSiNGh1jiU5pMu5TxkEyvSSbCkDY6",
  "key20": "5b2KikaFADqTRNMsN2U6GqtzBgCbyDygRkTwYHJ8GfoaPwC14xUNEbcMozAJeGLYL2nZqdXGD9dFPgX46YjQDHGv",
  "key21": "58xoD8rcc1nJ1EbUZpXCGebDB7ttAzkook9GX3WHXeXPTEnpYTtYZZTdt4ytKk3NpqnQm7cukANB8dKZ7yTcyCLu",
  "key22": "3NjeRJjXvGhGoiJHAdNaZ5eAQKdHVQeZmPoQvEoTVvBiD2e3DzemzG4w4TW9HZLtViSw1fxsNyhg8jMbiueebH2N",
  "key23": "3u81GYCLf4fJt3cb1BtfmMzW9kLQ2ThUrTryiVc4XpD7qTSNwmuMkqjeDJdUzTsGgJxGDeRcjRA5DQdgpyF7fxPH",
  "key24": "oL7bfziHKLQgqxxthxCr4N69hN6cpwtfVXsV1CTosaAt6Hvh1oFfmxwuU3DEUkCyTK44dCLHbuvhbp3oxx4XiDn",
  "key25": "XcEQ4crNwbTj8DUT3pWK9nfyKLo6N45QUv4uSu38X2jjc99zoq5XGpMXBq8LeBtLTa1yDThfcdK4sjmvgGe3mpJ",
  "key26": "3xMvD3wLdAuxHug2BFmnX9Jp5wqd2NWVD6GtA8kPisKYUhxxLTEkynTzVczdhqA9XUp8f2XwufBo7w3gwkmeD8NS",
  "key27": "4HTumdz2mk18mr72FCKZ1i7Vfn6ZtSsgznLPTzDrkpgbaKaF6U6cs4bKBQnU2ruzRGY8gT8jWeieo43tsZWWAKeX",
  "key28": "4S2qMKBPucYsPK6sEkwc5i2UF5HnMwoRo42YqPpq2BgUFuhrfEEdJb6BN7i3b5GcbDErKQX6nu5sRrMsTyNHRh6d",
  "key29": "3u8JLXS6XiUou3w4m6FxS8jMN19NxHgzpZL4mbNKK8XTtaiMiwa7jwZbendtTWQxzgzZvrvJmQC2yG8tZVSMmkSR",
  "key30": "5fgkwSx6WcCBem7VVPv82LoEiDNRLNSQ6ja8j3LWdNir4mxgeSdm1Xh2P1WFjM7EwB8NYkvZhibyAm9rRM8WaCR8",
  "key31": "4VACkjY7VGWbA1d6rZJiM6k3T1VrXJPgfLfV3xRShccBLEm9kttdLCB2NahT5wxfkkYJbyatxucWZkNZCccRo7Vc",
  "key32": "5HnE5xoQTEQWn21JDRjYNpjka7qAMwQMMaoPBXskNtRWi8ZkExfUsJ1raSVHjT5QAkQYYZTL4iVHEQmpAiSX8bHh",
  "key33": "5EXpCV4VHsiyrtZbeSCAuJVkh6rz7zwwYA28mR16E6W6t6AbEiXzT2zzMvqFEAk5Tey7KYiMYKTkHpnTpaErvBFF",
  "key34": "5LBkei4bBx6dpusstdnt8ZTsqQjDtGPrXcHd7ss8CYYpyNmjZMrocui1J5VfYF4MHq2CABqbyYjuCUMQWfrmcrRE"
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
