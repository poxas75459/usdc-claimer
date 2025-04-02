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
    "U7HcaJjNLD5nnXDc1RNJeFU9MxBDqp7RJMfxbrwGoKbsB44oFFwzCtQVK8426gWKXCvC6kZGKHE2Yp5xUniPdcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k32RyNRvAmYGGHfp3qjmasTZ4w7H98pLq6J3pQodKdcJcKR8GVN3LF7XrfEVBNprJLA7PS5TQffyFQaYFCoZMpB",
  "key1": "4ZozkXSzG9B9UBiGoyhGNeZmpfeTHhirHpyxrpnJDqGV5gjfGTd7bKiZ5xzhBz9p3qeM3APoNnZ2HvcD5vmsQ6gC",
  "key2": "2haUmcbTZo87ZPVwxMCu4ecnYpBcGMJ5fu4jrbnxD1tQXJmBwHxeykejFZgur1Xi52D7W4NtRPUhXPfQpuuPeRKf",
  "key3": "5pBsb7sndg9jCpF5GR2ytVhCwFjYQsmveGafozRx8R24CQpUzAX8VCtarzSGJdmr8q3BmgpFCdvoep7Cg2HdyGdR",
  "key4": "5sa9aRhjeR4guPKBYkFmQnodK8o5mGPHEU2S8Qqd3YFMaQMq8aW7Z2Hzyvr2ASnCiGm7E6YV1ZERNprH4YS3so81",
  "key5": "4XS7D1JSnS9ez1hyxdxwPdzaFo1QheizDevBdsP5SdMLBtGGDRyrcVaCAjSCSStobC79VmhkjMxHs5aLXpGiEB3f",
  "key6": "3FyQMvYS7xUxT67xxu6sABkR4wQUew6ywBUhpp3n58Mn6kL1TmjSMn8Q4QtPw7kBr517rUqLCX6kL9j47Da4grio",
  "key7": "jrr3DVyjoGroQzGWyaitpQSyUHr9MS2dQeK1FoaHAmMTrG9XREjGUgMrLZQafPm4rKhCmLA3nAvycYaQTehtP5n",
  "key8": "5fqGCjujNZiMZN7ABfTSkQ6zxbathRqBXz8ob2McLXK24Wgb6FGY67M2oped9aDWQfnaQwFLvxHoDF3bppYDPvYc",
  "key9": "N6hrkQNtaYqsGt3xeZgpjHbzNkmnywuUYrmGKaQFSUMnPnqq2eFfbfjzQBSmAmQ1YcMkhDPNi9eF7C55N84BK6j",
  "key10": "5wACfW6bQDS3Jox84YQJwzLipzfgsEAdysA8r16Dan9a1bYb5rBQZjmBJE84SY9zLtdQNPCjDYNVZrW3ZxoPbAuJ",
  "key11": "Bv9q6TZQskcgKhWnUh7czraYEhZRjWT8yZN6H2w8GSWwG8Xmef7kULfujPyRKzkkbZ7xdN2VuV6Gx3neGeUKGuU",
  "key12": "4LfZkZf3sUjymNnwHDJGFY91AUkMFhF6XtHDr6g8oM7zgAy5qHPnMAaRshoZ39VraphQSbiMWZMzNW4GVYp3asic",
  "key13": "3p6E4Map3i7LSuQj7CbMj3xcGzt89nsRNNniUBuCsTqqQnxu99D2yQSEh2BoHcAkFgEgsA6XLJUbrSJt8tkZxMAR",
  "key14": "4hDUU5ZaocK8yH8iZDdhFYUYh75H9fMgdnDmo6Ksac62R8DLhHupv7rLCYKpTpJHgXp5xzwmstMNiLRX12V3EUMv",
  "key15": "2vuot997ZKKEXstRhakWY2P8tjKRQjgUKgSgMWgkTToQnvnKE8kvrHmZYQiVw1xmuFSXLtYGaTiTxhQU1JQ86P2s",
  "key16": "k4GLyvShB5KNokB3fxYZnyZmeLd1gYg1XDawgjh6RaJeFFSrLNBXrBxu8vEvUuHAQVfdxb9QaNPiPk8v5pxrZDj",
  "key17": "35gMXxSmVroB3jxhiXmzQbxTAhJ1vFSKNNWSCHVs7yhjtELPcmMGkXbaG2CnZ7yitz9HvzoQSPC5QVW3EaTWpRLu",
  "key18": "BKn3ZMhQSAoUFvZvYQnFzkwftBAHWuxXPXz67JXBNyNmFTb52GR9TKVZtk9SR7VzWTuw8trNSiihqvaCq63dszT",
  "key19": "3LWYeXZ1nvyaPrwmNxyqaiMnXXZd1XMPsxBsBc3eKg84tQ12buASEqdWr7TcoJvzQ9zN7aqqZ61i7qE4RTdo4vwW",
  "key20": "4b9AnfPCncqUKBi4nTDrTyiHwRibR8kNyBzVYNFzuMnjqgeCk5TEP6CuqcicDzcwRZ2s6B46yjTuatabcosF8BWK",
  "key21": "4YhYpAZJvAMAtNe4F2PySzWofPb6KvPP9T9FPnQLkg587i7HGWCU9LTFLvv89hyH5ST3TMS5RRU6AheG9YtHJQ3p",
  "key22": "5GvCgLALJGfa5XKQub2Ngnkq5sZNrXQFdv7tDCigB4k5G3DVFosnarJwVhEkCuxnh2b9w2xHgR9MNLhuLD7AkVVg",
  "key23": "4JmAFSG7eW2m2wUUxK1XK6er5R6XsbtfgD98Bt8CYcu9UUHrP5ggkFVXX1QFvzSYqxqsKacH9g5ka4enJjW8zXxw",
  "key24": "4uhVs58y6s7sUqZnE8kRxyCPH1TVEhC1hmq6EoC3b47GY1SBLr1H2nzev5C1zQWsD7avaxkoBV2NRnzGM2pY1aqD",
  "key25": "46bC41AhLRABCNwKzdpMKNDzBy79rdk6hVgxxBzJTWz59Pj2QzpMJSWHBG93Sks6L9wJk4idYpuUNtmk1Y2iScmN",
  "key26": "42ENSVfLASkhee9bCk3U6mH8LYykACUsuoXL9fjoGkpcH65hLR39nWKgy6HzG9LsX94uPCskNCdDvKq3LYTnZUB9",
  "key27": "5qAzKGKYms8Wj2TfnpragxNZsHNpQ6ToZ6AaCqsdp1hWqyUtnx4vDM3vkh2VypHegTVVfPnQ82v4tZ3syji8BfnD",
  "key28": "3izFtiQ3oxAWxm9iLC52XSSC1t77Q7ANyt34PmDqRAcrbfpfhSZLXk1FcXdokKRECoHXUxWVxvSkG9CFtoTvsAZD",
  "key29": "YcEKSfaAPxdJT8MnBtDK1qssaBf9JveDE1mnXFeWEGVDrRWCWDS2Z97tbSjBUgWsTgshCLXi6E3z7ZQYTZ8Jbpe",
  "key30": "5zA3TvxyMLRXjsUYttktYLFYNVinBRsbxw9nrz3kAgTDr3wNpNxyyYJwfGHKd3zRyS1PQesqgdtH6kkBs5VRn3b8",
  "key31": "2XnRaAbkY6ySBFYKzvDfnpcj8YibSM2YEZzDMVuANkyumLs1bd9bEPFKrXZEotMY9fn5DVfuZaacj7dp8XwSuFCH",
  "key32": "AJz3YEb99t3r1f4SsEKuBGbpGyhACJWDUJhvzC3HWtGhYCgm1M8nksJLHGjV4iRPAPEck6fkKNs8f3Qc4G9F81m",
  "key33": "3wiKK8o58hk8wqyEJogp5xPAiCqwKX1jouW1VgxfmBbuiY89cvubyDcCe1chw9JsFFLbNxNHVRMbUzhTDY1aGYnx",
  "key34": "5fQchDmujA66tx8hgz1vuWotE21FBtCG1KJvhnNX7WdPGiyBh8hxyAfCWixjAXKxZMjLxzDHxStj5QozSWHzMXf9",
  "key35": "puaN6jgVa26Y1URDQJQPCknnCkDTKmPjAbfx6PwJ4dz4ucYXPbFHys9owQkvTcBJLE8XSvikwkJVikP5JxYL4XL",
  "key36": "4oH3toDLQM8osPstE9ic4G6Sp7oPzUmpp6k3aUgz6MU2pt7ZXzGZixWXPq9CW7hdKygt4yZyLVCPgyFa1qCTB2rv",
  "key37": "4ojCCaDGhU5a3KSR3xGDnDkzZBPeFSwXQoEG4PQfc8bKaABuWfGwdcoVyesnUDLro4eLVEBTdENgpKafvGp227sg",
  "key38": "2uwHW5zp3UimEjzJ3Yd2RWDgzsNRhFPk7qrh1n5EWzkBrjmMn1uVqzWeH9ChjQwuSypvCr8wFgw8UCHCs9QjNPXH",
  "key39": "29tezHN5oqBiLGo8WhF98ZGkJWGjo6Vj4e3A4YveaXadjQaPkvcTQw8GMneD8SvaPTwJfmRKGkCBTCQC5VoerYfs",
  "key40": "5J5Kckpc8K89VkqssJ4M5aHpS6pbQwVpktGyX9t12qsdMKKGrXp6kLMk4devrqTQVbN31qVMXXhXysAAcoVNbKXm",
  "key41": "3Qn9RLQqzqrFK97AgD3oFyZq6j9MgSh7DAgek3trmF5hmART4DerUVy2dSuYz3sRw958KMUNPZ5vqcrvykVfK4oY",
  "key42": "4BC3SfeVKnTQ7ZGH3VTZNDxh9VQHv2KZ4nY9otR7vp2JqkwQun3gpJsK9m4UqkDsAuYRBvSuJH1c7wJtLQPXvYWe",
  "key43": "gVoCbBdmzHM8nnkwGL1DRiQ5An6Sa9697upMpJogP5s7dzuadhfKRnkbCRaP7qf5jbT7cEXDy72JEdAzY6iecXX",
  "key44": "4JXVbGETvmjFaFKvZ3QcecT3GUEoHAEtvJiKA285JyoDW1vNw3Ve5rh4RLxDDqovrv7bvbEmL5vFb81S9UDyNDie",
  "key45": "4H25QTQQNtCMPpzeoz21QuNh1HxRBVcxAoUwhh78X6aTEYwJTqhBqExai9pHo2M4o1MLRXWwhBmr1FSRP9wmPbVZ",
  "key46": "4HNihEGHK4BMJbAmbi7oXJ6KpCspjzTQXBJQi8uF7hLRKi3LButgPUsZB3EJxyGKFcwpSNjstWsAF1EiecK6W31S",
  "key47": "2Q9DX9MsohXiUuZEJKbfiFKUpZEP4o3wL6ZSh2M1Mu9wuuTQQiVJbB6wjP4EEESUPDpsSap1LF1FUZvJEbzScTCo"
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
