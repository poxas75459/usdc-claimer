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
    "22Wn3GwZ1heNwaAMAex2jQSgriVQG3Q1uhWeiD6ztVZRJcaaGzWEjq8CSWNzoDZgqmRAAJRRtA8bVh4JHUgc7wyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3499hmfBjceXREhjU1QAoKzuEwmNbakYenUsJmue8MWJ5hDMsNuRCck3uR3i4RxqE3i86tmsHRBEu2XXZzxUD9Gv",
  "key1": "2HHXQoYRdtZXEiJA4HtVKxuJKkoUtL7o47nrbtdL1XyknyuKApBPKKRuaeer2eesf1YroWesG6rKsF29PFgFUHHv",
  "key2": "Amq6D1tbD14AX6fW7nKz3qVw9DkUw6jySUSxY39JRzNzgUGHyyTACQyQTtguqWG5LoHJ4sETf6kNz3fwTgMmYE6",
  "key3": "5FnqYtyfKhNsaVxmCk7GCYzeVLaGDigzNFQia18Wne2uRkkRVELYKeeNNvrZ8vRtbhkupcvi3NbfFpfgJC6tdKFU",
  "key4": "5JdrjRHC62P3jEGQgieALFbnARB8akBabhi6ZhkSx2ELpMDzbmYB4MwprDwsdUnVAFRp5XFVsT5GvfyEfrxxsufo",
  "key5": "5Jf4G6tzJ5UZBs4GnFC52xbnHx6Dos6U4sbD5KwFxWSpJhkuKTmTsXCKvWstYiWVikG3NLbaXxtLmTWA32TTBsML",
  "key6": "5eWWrSijdXC8gQgKfJFeDZd8VUrqm6AEZZpi3jW3VVsXNH4Kb61LbBoBLcnoPsQS7tjrsteCks851WqyYxY9CuKZ",
  "key7": "AzNWEARtVeQh2z69WQuuBVdEvnWndmLKjc7MvmznMegRZnh4Aiw9qppRun3z8vFw41AayuQ1cdPFKodokgXGDYg",
  "key8": "33bSajoiWmGc52Kz3hJXho93ExBkPC4a8rutKVPjM6tR2z2mVFv2ztfbLuqiJitGgxe4wAkrmiUxnGLS9DPBfoXU",
  "key9": "5PNeDyZDMEmpeWhjmEvvMneQ6tEk8fm4ckXe4jjApvjJ6sUwDtnBUKRDp4Q81WHY9AVg1XkhvYK7YNvdtEvmYQPX",
  "key10": "tbqhmm5vdKrgESnERZeGzp4WKa5qheNpPMCAQJgEjGePj3x7GeCMDiBGdXeqqgs2WmWeCZJMNn3ppcnTaSUSE5C",
  "key11": "3AdWjPwbZdXh2DYJpXut9VN3pV96FX2B8Qyx5JMpoNx2HrUb1KQSzUxbpwkEL9oaQXx6Y5t2sufBe6o5E8NyPwzp",
  "key12": "4CpXAzXbpmqfT795GEyUBvJMMd7HcpUrpECejdJmismYbgziRkbwet9EtZqQtYwQgNE8xbj9ShH65C5iusBZGwRB",
  "key13": "2asyMn4Tz7znqgqBzagWwsSsMjAi2DwgeR1CbqqTXDKXtsoU58AMsej6Yh6qDK9f4mm5NKuZcBTe55Yi2vTBd9f8",
  "key14": "W9wNpHgRpJZVkqdrgFLamNzA9zGWwaVUQssTsCR5ccnfXCgBV14ZmoyRHE8YBEDFyk8VewhtwcwedWhAYf881c8",
  "key15": "Npf8PKEYuYZB88WAq25b6wgnim2erc7h98aaNuiCNLxgJiEEcj1yCLnyE5SRcdM9v8b2MUjGxWLLXASJq6xzGnr",
  "key16": "4ZNBMiNEgUt5AtmgSAuMK29KboQPKLbE5DBxLNCTXNz7jcZchC7wZhJ38M8pz2V3FNPVEvjZGn822NwzVMRNbcVF",
  "key17": "541nj7LYyy4n9quguneAfdYfSfBwGjzJgryQr4GNCwLTMrMLJwhpw8KH1h5c9dMUNXsoethDC6hZ5E5fozVGh7mu",
  "key18": "2fdfwc4eTUER2Zvz1uo4LbCJQvRHAJbNBgtr4YtjqnGhUHSoZbFCPTgTJ2He7uNPveeFyKJd125aiz32EpuwcTwG",
  "key19": "519XfvcbMcKP9957GzbMfcmidTzuqQKkrdK7EovtJbAiJQfpeydjYrDpo7quNGFNp4NUAJudbpvyk9a6eLqUumH2",
  "key20": "5v7mg9ZSaiFpy5eoAhUosdJBxoUiyuDtNL3eVTYgoYtSddkh9FJzcNe5NyVgVqZnXGz6W7pCajFgKj1jSZ9jmU2z",
  "key21": "5Hpv3gmsmWRTYjekSvgDUhmDGJJEhPPn6uiPLN4ZFPMCLGLaB1DDvsPHfFMG7JpJYGepradxThmFo2wPD1fjogu2",
  "key22": "4KR8pm9KLD13vqXT6M6Npz4nCDy5E9WTPF5wUQReV3sYxubiM5sQvEhHJC4TeqK8UxjwNZTHPHF8TuQGNBYsMLxJ",
  "key23": "2A1VHFBC5suCzotiRResotadDpcb9iugKNaEkgvQ2PWumhCNabVQpMVdTFMpVewac4EDhmhTkr2YPpK2T1wfxLJK",
  "key24": "5cr99BP8RcNLZn6qfUUFce9C6PaRACw9UfMP2d1a9iSwu9Moxri5BEbucDEPG8GsKSTXSFFqArAcoinoibxKUvAu",
  "key25": "5xwLB8KmSx6DHSH4gNGio1XYxAqzkUMYozbVJqAFVVKtRqXXEh7fLEngUx5GaZhtR2nmboSvD18x6EHKHz1RUT7J",
  "key26": "65KBovfGWvNqA9tTYsAzRLnaQdaJkurCHHcyHRsRXF23xw6y8qFkr8FNGUVdh2AcqdaGkK5iVwHc6GoVxVLHV1Zw",
  "key27": "3dGQfWYcRNvH9ieAFemHe2ybfkKvpTNmGn6giqw12rwWwEY15rAQLmWVbgK2zeVokceHmVQyyyqDPQDCyHgBSxvQ",
  "key28": "5anD4Sum3RSB8K9mWZwj16crVVj9ygKaAET29SF6Cx5scM3r6kUS2wjmbefefmsUvvX3msbShsPKvQ6ZSFbQVu1n",
  "key29": "5hEfUWtvsBn2u8qebrAY9nKTZSfxPq9rEg2iMSYwd6LTgRyVuDqJaq9bBhmqEFQmsfSdjtkUwVp1XUeSBSGMWVhq",
  "key30": "4nZYQh7YAERFR97Cu9of1StDnRHiqdFEoeVXKGYSWutesyMVJjiTtdqtkDypJzgUTgmUSGLzgg7zgFtGhR8ZacpG",
  "key31": "2KShEEVeeqbbYaARxxktjnqhxS3RgXpLkPoUFEysYLqd1pcfMzswPHi4KBZvpVaZNnMhENpRf9CGYksH19cBn1Sv",
  "key32": "4aGe4342tzy9sKXrHLCUBz8Eo46VqqoNv5XANxCsMVyyPq4HqZVMrYdAtoJNCPce4PAEMRhuRdeNjwiEo4RX45k2",
  "key33": "5dsokx6C8rmA7cMqB3najn7DwMgKwEuv7vyoLEoD8CduxCWWdGPAw6qPc56dPaPVkh3omFcn6m2aFY5ZgpDU4DHE",
  "key34": "4UmAktLhT4x52xUESwenSKT4TQ7NaiUtZA842wgkjNj3shiN85nQqbQhPK8cVr93t2XenkCHrJuwE3KZTyi2VXrr",
  "key35": "4pur7ibsH7uhFZBtBS4szP1KXCQ4tKBGv6GAPF5VGuBSYLj3aZDmkTBDk9Gjc7Wy8gH18Hf2pDjbzibV7go45rxD",
  "key36": "523BjXz3QbaXhh8PWVtgZe658AUWCRhvyy3HGN7hECd9SmTcfgQcLiCyc8cKkSpiKFUF8HviuU7iCSa6WGen2fAL",
  "key37": "5txx212SCyXnWbQqBEg679d3NdXCjYjJHZ61uPX2tX9W5r1LXJULsCFW4GS3DFyedW3s712ENpR6gvcc8iDGgmMj",
  "key38": "46vUPJDiLeqaBu99q4mK6zgg1yxpc6xjTpzsGbfYCHUFBspyKrV4eYqpJd626GtpXpTDL1XVKeUM9udvqpzFjyjx",
  "key39": "fLeisHVF3FRqPbrmzEeioiiAScixztWdfHWshbCFadpk9nrbyG9eEy6fehAAq5iHttwGkv3drGMknfdDC1NsLHk",
  "key40": "4JK869Wh31yURGCorMiS1Eju7Gr3HZda7mnw9ZVDcbXtj1wf5SU58fqAqmfv8VBzSDgd6Jz2QfsXbUSEGFRMpear"
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
