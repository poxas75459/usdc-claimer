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
    "38iCq7KA6SXwCohaRMcrNgDPAutvA1R8xMHZ2QVQ1sJ4V6AEaaRX5HshdT6KF6RZMUYvXMssz89oryrgQ49GhQZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cb2R8gWN7WFn26zXrJLv6Fvu3iQ7C92mjpwhx4pwHSGfGnqVqRCpenLMYtyYRjcLukk7ysDVxM3sVVUTzE48yHQ",
  "key1": "5bX1iE5oDHUXR3h7gGHcgfZUNFrG9a6n6TAWGHb3vx8bTWhsjMQUuwrH7s7yxPZGGMnLVTe6EgCyxXwmgLEauhxC",
  "key2": "4son9UyAvwj9tkZBaVCWvCWj6RMxNprYetC7g5FeMTYHYUtgMRYrKAR48brb8F13rucnhrt7JpAqpnwKjz4YSiLw",
  "key3": "4ayKCzi63vnvog5hRrKibmste4mHsKrSsPiT1Dio7q5ZmDc9Nbb6r3iPD4v7hN6ctXACUv18XQLVnVSnww9a1s8h",
  "key4": "5XKZYAkHCSrLwh9nW6qQq4GDztyLqidPoHYpBtJeCWv9cAagdz3cjDWk6VCSNMtUruRtS6ijUEMqixZd848hNLDG",
  "key5": "3n4R2NGu2FwyYG45aA4Xq5cmA83Cbt3yaLi6xvSRByFN5rAD8w5r6Hwvi62JXGTMFkjKQKvWknefT4kAoSk7aFdN",
  "key6": "46fpnmhR7PVVT5p7fzvZm56fG3E7kTifAbaBPZs6jSFmqYJqvupj3zTVVYQhTCAkdmPjBJqHT6SutW3DXfjAQ8EC",
  "key7": "5PjT9KDBqdaQec8dZ2aJanxCpSYuTbZjL8oJWcNKbVjNLKAnrgHcM2fhkJL4rbV48BPKYXW2feVFq4Y4rtdGB7qC",
  "key8": "2yjr5UqoYUJW9MNEroxuc9dkyPaUa7EZRgf4mSUYTJKgGz9MQMFMg9M87qLVFYAWBWndPA32rbCNXxGUe6QCpgyw",
  "key9": "4EQpXJLpZd9xLaGy3M58W6dXPQBhBpA64n2HQgqcfhrV9RoymHh6qnaikaHKShScJ3oZFoXpRepcSJpDRW3zmAEg",
  "key10": "gNDurcxWzWEYPVjduxDzJ1ekuu7BJhayDdeJyCtwHepQoUZTbz2N3oE2Lrm5SWigtRjytX5Urq47iEkeQTJLoUS",
  "key11": "owoTCDxEhVeCBXuqZXiqNqx9AEE2LhtsMVfGBJCHddq2uFh9SDoDfYJHq4ViP6kdRzkCKkoUghmc5QxYwH99PgW",
  "key12": "3MdxXAf8xNovY2JUWa8MrGYXSskHBNjQaUZ6FMuTqEGdNeBsKAbGqX784Q25EkZ58VpoKyLV2vq8HnJawoZncv4G",
  "key13": "5p9RCD3v9MMpDPwwM8xQah5tVNrQoX3sBx3G1Uy3XSdNyQmdgcmzwqFc4rqZ6t9z1t8yyow1gAvcfqkDdDEBLyAd",
  "key14": "3aY5dEpqUgzpHDg7VrQrx3gi5niMbuR8hvh8hKw8UCe9ajLNRbZXsJFThtr87MTFofaByLVx5VLhqnDCmwcqcZPi",
  "key15": "5JSDUK9w2eBF3NXPA9g4DNcp9geNhKq8ZjY9sHN7uC7JyB73xBBf3UqkySapeJYrZVVZDt7z3gYDaYQevEE8ZYZT",
  "key16": "5ifT9hPsnwuix5qYayVQAgLp2GUBCSmugRpRLQWKsRQrRjPPPBLHjLmqdUQ17H9aqCh12Qiz2jengvoq48WoP1xg",
  "key17": "55gX6L3DUHnuUpFHagv7QAnhzp5RpL4Bxi6Fhs7GMVj4uzsZxQectcdagbAvwhEfwAYMQSkCqUGMP3q5XophBNYg",
  "key18": "24TBUKHoueBKdSJHuwc52HvtoHzXTexUQuQNbxpabhT333g1vTSvuGpv5pZFEivvCGq37xLXcsoskhFb7Q6xPUDD",
  "key19": "2iGmvn7NEmvzQAjHEq7TAExdBdLYkxqyxaRMU2ugtcm6wsnWcDNMMFrSvLDp5HnAV6sbwvS4inqKg4PhpMHVQgvm",
  "key20": "2fuaNmqG4KYXhPFYxSiasTxyJxk8ZRCsNJkQwGjn4Bcg62sZYdybXabYiepaPWXotpNHwwdwesN9ZPC89LcSRxCU",
  "key21": "4icVBoTxBcgnfHC6aJVh8fUrZkCWydwF5DtKKW9Y1AGmvTsa9yUELkjs7zW81nyWCQcQXAX942asdaiJGHv54HCL",
  "key22": "3LLhMs5kbCfFguwvUfYMwd5r2uZhjKcAGE8T4dgecz78t2QJsahytJYagSrfKGZCeLhEc9CxaAmYmBBvcuBwooev",
  "key23": "3EkxR1SLaQ9ckND5yRiauQzGUggLV3avwswP5xC7orJTttU7Kys6BUrLdSEACXKUBzuVMWjXXUVXyNVFZFuuXwM8",
  "key24": "21ayFPkpUoy7x2T8A7HjaPRB2hSz8WfewThSQg39rPe5eLZ7i23zk34yRaz2ksyUwsrw1tsJekw3CnMgqWFgyykK",
  "key25": "595fpNCUC3ExurKinW6X7hRZfe661RN2z6VYks9NYWxaYtEDsC2ZARFoUYue6wvSWCEBZ4Vtxf2bUcYibpFdj1d",
  "key26": "4KsivxiVX7usurTmBWvruomA46SBRNi2SHU1X3nCYPet1AhEG3epZo9ggsMGcXpbFYFzRY2JkDCfD2xRWwWEJbXy",
  "key27": "go2DW43Sx8SFdcHpcJ8aGBPj36AUD33GTaNoqEWQPksFsYJJGVyBRyvtNxw15epDDmaE3VB7ZcWDXrMrnS9rdJH",
  "key28": "HEggeXy3Hqj2ZxnJiqDeDUPYMBsXXZxp3mQ7sK45qK9zCugNfS8ux437XwMEZvbnRMxFmwCJajonJHCMjdazJ88",
  "key29": "5ePtKvfPAyf7yJQGnQdwvqFsLJf7ZeiAwDe9wrgSEedPprCX22WS2N2CzzADW2P3EmJykTBjFWDwqcvJpmUvdFFY",
  "key30": "3zw7SbhtjZhwJGqSLvJDtdk5VhCEZZwACDp9VvSDU8mudY1y8xD2fAzTAZTMGgi3Rorh5xsHbfwCVwXvPJXyMPPY",
  "key31": "2gK8KUCsQDQzWkZEvxoFn7m8iuBxQFgNVfzVEVzawkXZzMEr9NvjHsihZN9kaKW6sJmgBxuLAJiMMPKN2QSjcUFT",
  "key32": "t5rDMvYbHcBFadKBtvwZvMyyPefiNhM2MgquLQxaCmwJ1BuTGE5NiteKmxPFQSk6bBWLJ9hcuYxtE2izDzCMg9b",
  "key33": "3Sq7fQLccceDmANuBszrnTuei66CCpCo4edE9S4x9ef56ByFhcRP1sHsU3hd8FewKnPopw3ZKAhFh3ydSVzmJcYS",
  "key34": "553Gupxj6N5pbjvaREzgKfUoB8kxBpRLsgdJgxuMKbQMp4wCQzFxgmf1nLMnKBbt5PDbARteKoi3oyFTVwptwHVg",
  "key35": "4h4ZHm6kABJvYz5buaNvUWqoakgXEGgDYvrDgHQaJhbcM7kcVq7Lw1uoPxif4K7CRSADo1gEacKU5wk89AEZnvnU",
  "key36": "2dufjXNPUYvKMUbRN7rcTquZR1vvzghHVcBpPHtAxJZLJXKG5VnuQYVyt112MB4RvaZjV4LZdBfyig7ama8sRrfE",
  "key37": "5opvVir9npRGohMrjNyjX2xyFPknf7AiQWJEmtfsSJoqMw9S6Rd2carqapV9yTq6fkArhC51QeAnjqjHD4B5fiA4",
  "key38": "2T9QryR6xha2sL6ecF2e6DNUL3RZAPY71L83vDzqbAtiuQtS97kgcPaWaVVX1t4hf3fZuKrmijU8F9u8dHCAemQT",
  "key39": "5B3M62dZkfaHP1SafY2yTDHicjSrzRzFtm9H7gPMH8HGbhgSxZFD6yvmGkwvam1rwbijEi78iaybZbzEbf2ckukZ",
  "key40": "vN9p1dMAS7dzn2uW9dZ6aqzeUGBmGYc2FgkpPvZ7FT5JYNcEgt4wyd3MChFP4dfGrDbEN7UoZhdfq1uRbXtQNL2",
  "key41": "6V6ks1PXKBs4obz8EoBUgRJvWsJ4uQgjYro5R68ukKiTqFVoF5XPzmqDfJbKYHoTftteMXhaA9855FQvbz8eQTd",
  "key42": "5DZ3QgyGJKEds7YLarE42k4ufvwUTntHdGGzAnyD5Jh9PiF8bq4fWp4sUj14MNb8kfCgN8XznkqknJbdAmfdEUHU",
  "key43": "4Dfwr15qf3hNzzkFVRSrNXvc3X8HnLScZ1kZK9Ugc2A5MvieLtLx4hMyNggy5xsYma2vFEbAKhiRxCVQp8bJMNf9",
  "key44": "4M43icnaZhyzvZ69pKEqjBr9As9Xenjc5fjUCLfQiaXLnTwXWUB9FJjn6TQaAhAp2NYjErjdAdhguTczxev9CoyD",
  "key45": "5kJ31jTXNTvSBvW7ubusRF3D8a83GksVr7JuSfQSoZ2oj53SVaBm43osBXC9EbtgPjZKqisLKt3QekwdFV2fGhWT",
  "key46": "5bpTdKt7rqSvgPyiiayhWx3Kxpe4ACCwxJ3h3DuiaxpmKS4VpJHc6wGFKFxBbExEXncm9KakdTkuEPStukQqAdna",
  "key47": "3Her92Jtqp6KbpyMcZeb8qGWPi7zMkP8VcvqjmFiPKMgwoNuDJhX9oyQwXAsWfZT7Aq51sNeNXpmVUWuZyNtmoy",
  "key48": "5a4FqaxQCzd7hyrhC9TYtDUPeebheoo5cJs9YgUyvWozt9DR83uFawfP7MhGJzqVJoU1KMzweLF26Mf81SpTyDak"
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
