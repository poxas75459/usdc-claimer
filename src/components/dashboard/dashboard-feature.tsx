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
    "57TXT376gf6aEerCiaoaCijqUoHtc6UHNkFQXsSGAb158g7s1vc1BvrMcEpxqvz6c9LujkaRUTSvaHU8NdnKVdfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8JC9KSYx8gnRPw6H6gUC9b1RgjoJNavEuFBMmtj5FwBfNLSKZp7RywpuiKWb2pk47oQZydTaprToeuv8rLP236t",
  "key1": "2UJLjBVhptCQ432BqdDvXaZVods22KjmXozvzV8epqmuXdAL2rWGUCuMaRjEg5aAG57pNCkJ3Npi7ViHNwNUGVx3",
  "key2": "2WtFnn4iYKUjncunRR46LcQtFezjp59dLK3PDcBjobzpTEXV7redx6ybX8o5YLH1QqQjkko2o3rYKrXguZVSpxEq",
  "key3": "eoehavKymWmZPaz5o7v7Jt7znNPfeyJ3RQFY71G9mvp7xMc7MLwK2wKukYQmPda7TgUm29XKwreJzJjk7bRDKe5",
  "key4": "37oaxhVJTTBer5hCKsgpRN6ktnVDaA933e1nLLrhE9nhPTw5cNUFxT2e4wMffcoDLnafjonwLFFaUwYZJtQRrfo3",
  "key5": "24eG8QDQaDEeTXmHA59pzYqc4ns5xCygwKZpHS5xbNhJ4t6a8Uz3eqkHw82wL7eo6BvQD6269rAKyeUUzEA86sCq",
  "key6": "2sVCuRcthXqVzncwTicXF7LWG9q39ZacCCEGSGmf3pqAw2vUYUfkUyPuwrkq3RfaWkdisEMwGGdJGvquRRJP9AYD",
  "key7": "4T8HvtuG6g7kLqWBEwdno3XKtvinNkpoc4EshJZ3xdZnSdNP3fGE9cQFN89MYDxoyzwwv9tFBNKh1rHCmmpLhLJj",
  "key8": "53uSCzkVUFU43FsTr6fFbXoV9nTSNnaLbDn3RVZCnfrPB1u7d6o4n4rFxdLyx4t7L6AZAX8jDvCxRgUZ5sHni8bb",
  "key9": "3xT3ujGoiXPZXjgbdKhV2mRW2BFinXW5MG8pDjTRXT5xoebkroKbvDRXpuZxUvGwGNtKynUc9M5qAvYFhyxUivaN",
  "key10": "EFTGYruSq7r1azMoENRE3fJiXcaBRuCT9c99HP2HBA5GtETUXD2xfAkoPEyseBwVE6o91nsR2oqCNj3UVq4Mp5G",
  "key11": "4LHZUFPZxFW2MBgjXomMgAUVkQnhNdDvVUzx7EvnkdMYrCnnY8owncJyQAonJbJXpiW4HwiMQ47xeTyuYsiNr1Ly",
  "key12": "zCmDcSbuQeB224ZoaBw2caupqoD2GxrXKtt6Vre9YH8tHoQpqLSCNJjPCnp8zmZNWLoHtEJumEZaX1sHQjdnYGJ",
  "key13": "3oPtFWmuVZkj9mHtT5Yb4vtb4LnuQ2FToAAvmN8m2xrYArfX5exDF7bvpFHy2iC9LVgmxbgcDDXDrwMfmvCXYFT6",
  "key14": "36VK76E1Yds4Ki5qvUjqMjW3aMVp7mjmSRWmbd22CaAhZzjxVN19S56YpT8aSaWQrYvgLPVA979zJyB4mup8m1Cw",
  "key15": "5xCpzGJzzY5s6J2YRo2MpL1ERNUWoEndu5mCgonFbCsrAPXqv2JKWEEKrxXVcXTBY5c37DiPdFaQN9MmAa9oaJNa",
  "key16": "4q1b3tBCEvXbp5HL6JwZREUmx2EhXFZT4Y1K7AEX1XQDpMKEASurNYsbrhhwTCMR8PCEMwjBg8JHLPnH1bNVzh2u",
  "key17": "4GPtVHBgDdaJ868PckdztGaXLFU3jtTA16h5kxdNiHx8x4EninP8jbtoSpuQEFGhAjAhCQWnX8gYrcMZRLQrp4jR",
  "key18": "2N5v7XUXTXCZv3ha2qAXNkgjEkJJM3NXqvRKFJByhUQ5GUS4cXRU2NUksZnpEiMJyP48Su21sBxdquz3pc9rHfij",
  "key19": "jc24BNDSn1z46R61z3wkpav9J6UN4ZvxQ7KoNYtbdyF2X3txmBiH9Axm636JhGG2BvhRXGn488MpLkMW9ApYdJc",
  "key20": "493Y56eeCVyeA6jvJAKnYTm1SHmsab9qKhTy4Lc6NiYMR82yHgaM1LqNHV1KfnhH8FCwtqTzRW7vgLGN4wNna7uz",
  "key21": "4g8vkzYSRmcDjnwUBR6AKrVnTGryCDDwWWqKkG2wYGNYNRyp7nttRQAhgmPx4jFxspetbNwPVg1kbUU9uFJioSFZ",
  "key22": "5FZVy31GisQbaXmFm5Mg1b3MRHnnSiehqctEz51vySQvL2ECc2vGhSc6HA2KTjKif1evf3aQjfzLuBHCddk4u1jv",
  "key23": "qC1Z9kdDprdKYGMW1NhTeSHAYy6TWQJtokMAqn9swGASsLZe56MM5PJgTRqUdJ82ahh76GvLZjPWSLxQHtwVr5b",
  "key24": "z9Vw8GyQTeSznaiMEFskJGi8kebn9nH33k6wfyqAztHM5QNx9NXBX5peesNvvx32VMp4TABrkkAmqL3hdNYqDCw",
  "key25": "bUo4gWVeh4dhMr1afaRmZYkMcPFZBp5Gg6882qBtx2R1bmE5yK429UimS7H5x8xnoyhQH2MRt6x9FYYoBV5yd33",
  "key26": "2JxqJ3EqwHKTNwuAkVx4GCWob6MqkZkoLiCNjzEkFxXdfF5ZKWmBuzQMwmMovaQ82nWwHtUMtQdEPVBWS36anhuy",
  "key27": "4ZgT6nj2ZppEjLcKiycGwraVeUBVdindSiGAPT4nQhdirXMLx49PLGNi2tumQpNBoYL7zYpqCm4TwMmrxrheE3Yu",
  "key28": "3zo1WPKCBVHbFNeonNf1S8GXdTF2N2L9qJ41unWbpNTMaT6osHzgVuP6jmZnTQgCstCMcAnA1PwLwvzNx8u7ZzfD",
  "key29": "yrhjm6He1QtCFjerEVg8EhBsVg15U5D3oHsjt6npbecfALJMk6z1M8TGTR6txCMBy3zBA5DSApePzmo1y1bNpLA",
  "key30": "46VoTkbpPrKfbojmj2Frqn6pme3uPrsWaoNfpH46UMe7f7c5N6ghbnPjoRFLELatxgk8JP9v2TS6TE9nVMHMmkmR",
  "key31": "57jkgVkUENGoyQRPXoxzQgn8rS29ykoiLXKh35piU5JWiuWV4m6wbVinJcweannsegnKsJUUPZcCRHrGCWVH9Arz",
  "key32": "3xt7cCXQ1U79MrifMZRDwcTfu3YVazv2oyCfve9MpRaYtLbkdPQzoZQXbsMPfPJhySzD1XtLtHFc34S1M2jQBdqs",
  "key33": "5puf9T71CbCYoxq6f8XTesvjxdZjy3mSazNWixfUtChkFsN1iXqF3VizasUVmAGkWCT41PZYctTbnNs572Hg6J3p",
  "key34": "2wAv63D7Gkbm53M5YKEcQ8kEZU4AmeooakoKr4TVZ16jgpyTX9pSQ2muQ6q94VUs66FqqYHAVJgmNfhVVRiak191",
  "key35": "3mFZeYjsnB68Pbug1NFRMFsPtiWLYQ5xBTq2U4fYReJNkNumDFevXCgbJKAyjhNvCJZBqnRvvHEeV9wxyQe4FR45",
  "key36": "4RDSZcbG1VcYCJySKhfw6pq7njwvNjnLVhpeGmmMudU18KnQ7CzR27MgQi5EsJj3SaMEo3GJwBMNFGtN7nBtdgRC",
  "key37": "QNGguViK9AQ48UTHdfHCg3wgdHF8x84TQuSWTNkeYgWSh5c6UqQSv4cz3M5gpt71DnMm2VEruJgQZTsJJ1MUww7",
  "key38": "q6EoX3WqL2kNMbtBzvAk9hv2tJJ9ucaQ8aJMiVAJkhmd365wxDtXyXENvZLohCcxaXB2Qa4fvrRwqNaerUXbjZ7",
  "key39": "44TzCN7EA5yrKbTZvH4gMKxyyKGirHJ25vvhMKyK58sfmwS27xwcJ8Yf38oRhSaoedzMUt1hH5qLHA29i7NDGKvt",
  "key40": "36aoYmVqoYmZeMPGQDeNbjqkzzhdigf8gZf6eArTTZ4Fz99jsfg6kndEhXHWuDumUZuksdjUX8ThmWznHAjmrja4"
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
