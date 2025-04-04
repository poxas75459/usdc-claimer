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
    "5MgrKwniStqUEwtYw5XCt4dbHfZdQX9tfqY4nRhZsj1ao2YbbFethFQg1SLXvGrYUQQJ35UvA2QVYT5SoTGJsLu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tWPmH16saiQ5RJJpSpAUHuukADxYBx6uCjGgcfRyySPyXKQezyP7DsuzPtfo4zra9tbFZTuGW7bTievPCawMXno",
  "key1": "42uPk5Wiw6x99qAH8Wrpc4UfVDZqG2jtXLm8UtHNLm6cwfwJs5N8t6pznqHV5cgEFi7Uq5fpJHCeiHcdmAsSQ5ca",
  "key2": "WWsXijm7tbjPUYsSwmuFe1Rj25x2XyKrWJVsyJKXUFADYQgUqk5JWAgPAvWNJQ5WiNiqySHXWdg9eBnDH726EQD",
  "key3": "3svEfWHWwEFcUG4WQQMmgCKhHPv6VDzMKeVUjrMZo577Us88cJJqTw7wf9F3NBPrtKXsPWQ9Mb4LLr68JB3rbXwo",
  "key4": "rRSKRoD9iJMA4n68i2EBzc8THaWGCwjVfkJuc78nPMWY4i8NSgmpgySq8UvvZJaSSjh6fR5L9eWkV1EEn5dGFG9",
  "key5": "463fEKbJWamppRCkdZstydQoiEFugjBi4ap8R57a2r3AbFDPjiDLFwEDGGV3RU4xmMJtjuNVj1PksyzFEYg9zMgL",
  "key6": "2QtmgcnpcMLGKmYwQBNbZEyUE2kz5kPqadfcbNFcS4cSDDUUrrKPaHrhuNSL7GNK8UaPkSkSuRZuddSqvUCEzw5k",
  "key7": "4FbuzHoTvjdMtivMfavTh63UhNNoSEKA4o3QCR76RtNNHbtKUzFheGi3QCY9YyBxHaiZW7Xr9L5tkqVVDtcwhSm9",
  "key8": "T1GJEQqdz4Z1Pb7RMrftPRvSCYW4t3LSPkTH6Lr5vcekCpZQ21z95rhecXSWxfodpxoz2t4HRVxaJh1qxmVu6VE",
  "key9": "5JQwXE9osVVweUX1pKrPfnJMpdomzSyG2emB1Z1jwBksKiJoZJvCdjR23JxnG5PskcUc9J47NGBvnrvaTxdYh4P9",
  "key10": "jXknz8HsJCEKJzMe9bZTLW3Mb3QospeL9s4mpdkbJ5sDjZKNcAeDQCZx9LPYUZ27CeaXEu5DJnVmLBrVQtLGFJD",
  "key11": "2DyPsA3u8VPRJtiG6vxjv38rvqZJGe7KBKTpU41A1XFeD9W29Nizbif7YUSrrvBKUMsDYHsohhLd4GKrWQnGunyL",
  "key12": "2txvruWfC8d2hYih74PEhsb1e3jXMVEo9oB1z12426My3XkJv9yKxVm7vWiYTQiHpu57ZKnZCr9Q3UeRqDLBwpGG",
  "key13": "4hCGoq2CQKRAeL3gTgju91YS5X7vRraRYQygchbh8QGBexxwpFWG4fZPjZw1UrCWADTeQdzxpUhDNWsULk9dgVbJ",
  "key14": "2YXmgD3ziRNefcxWfTESwNN5yxzcV3XvkiyhScKnBweJb427SZexP1uSM3KFngKwhRsgRznNocp6pVbpKB2P8ws",
  "key15": "63XdN51AsUmb1U6VfE28eNBRx6bYXaD2dc37hhqApaThKR5tkQFJQ1wc92gvXmBFWAaRo8kJWaaVaQogRSmKNbdd",
  "key16": "4wPbADsH49A711pdThmcRQucy2Q91fKvFiqgKKeMEUPAKnqQprtdMyz6Q57YDphLRFztzsc8SjncDp3NgpjHcJsC",
  "key17": "idt8kQNvnEYWLHNPFND85paxSoKg4q8WGuavA8g3thWtU6VStYSYGubkavGQHUZNuu2buLbSRcQghTf1dZZFxaC",
  "key18": "5Tt4HNRJukryGwqB47cvoQDHFJMzRFLPFVskXuDpfRfp7GBQGe2z6foQeymrPejixhMHThnrE86Q5GFmDVxvqC1U",
  "key19": "2NHELxJsJwAEa42HdeHhVCpFvwe2TLAa961Q3qBF1PmnHpNPm82A8au9NWzbxoXu9psWoVxeCpvzNWjGknu5XWPa",
  "key20": "2Jc7jwfhgo2t3VvxsJfEnfBmpnzMBmVWMPdmu3i11AbT1HnRPuLHZ3nyaBMvhon6sGzdfnsQCLxRDPYL1KHy8F4t",
  "key21": "g2ssTo5PxTnj3fayjqDQxsCYq9fc4HyHFScTrXMTVGZ5SrogDqSEqwuRYNJr8q2U3Fr9KEPAzsMwxaA31saAV5V",
  "key22": "PsaUFVvAtGubsMNCjYq7cTXiP6aBcpTFHRzH7QjZPsV3gNrVeex6C1BAwGmS8zwVzv8GZLB87ReFVQTK9UBCsDV",
  "key23": "4iTVvfwp2ujkTq9ZEzYSwU6XLCwHpifjJdcwEth95ngk5dACEwh6B72wJ1JZZHRMxytEfxb42g63u1TFpy7MJ2si",
  "key24": "HTeyVefdLWxYmkZAK7XqZ4suGmothqdbkdfVFsp14x1hubvvB1qauNErVSppiSmauTNPfdpauKR8Jst6u7Z9LTz",
  "key25": "4f1AiePoCoa4oHZr3wsY1rxitaMtDTmf4cTqCeGBYaxmkFMZCVP5PX8a9nHoDMXpTc2hybzZ2rnwG1jdxkR81nm2",
  "key26": "2CwjFNyZPTpNJ5WLzyRh6zdw2D11zu9faXH4m2kUK15TbReoqYPSdwUhdsXMZ13SaJfCEayfXnmBjhcRmdSH7L9p",
  "key27": "4aMHehufa5Ud3VSrfMQZNJmtUhgFjwz8DNPKFoGgq1nEhYqkEHZeJPmGQvmmHsdw1GwytULrnzD6RHZd9j7vvGEu",
  "key28": "4m4SVoSPnawCDKBMzQW79SqmrCUf4KzgD1tEaPLifNuzoBHnxp1KWVykfqUHsYHWmGTQcDNsohPUJTsLt2zDj71R",
  "key29": "3nmXMrdVvv7XbMrLyhFkcdZtpKBEHEJedFRtkZ8EAqdrXNUvWegCKMnY3pqrSDNeUxs3LVs9ngM5Q9NwNk7AB9bi",
  "key30": "45NyXKpj4s2bsZDXVz6AYjc1enq2dkJuhstkbT5D8m1rCn9Mo9XKNPL3G6s13GMFj79QzM8tdBs3MFijkmoFHxYu",
  "key31": "4h7BDRU7XtpwnuGwrSoB1FzxGhDBcPf7wba1JJDyEiEoJptKkk6YsDJ8Mnn8YRDqYHijfumDek6R2B8Msy7TeUu6",
  "key32": "2KJXmForKv7X6y8HWF716VYzr4jWDQmV8YUL6WHcX6MNeipAiAy5TXEwF85bJRQHxwQD9CzVFJu9XxhuM9oig7AR",
  "key33": "4xNrbDADmXyMkyiJfGD4qB7h96ngqa5MZ1UVyFWdYBkfXBbdt4qhcU9cYacErGaWnGnUph3E1BPiKYYEQ2hzH21h",
  "key34": "2rX1iG7mgMdAc12oYSvwA8NpbC9czjtgXR56gjqLm9fT6eHBMe9qaaFci1gb66XHXjGfAXJWkx73M3QV9B7sL1Ue",
  "key35": "4yrWr35QGGjrA4H7ehBUCSiMzRAMRGJku3co2wkb8skXS6hwpAYspzuF1Z7UPm9Y8suZ59N3CY75toHCztAT9vL1",
  "key36": "5BQp2LDX2b37AwVMBnSKofHJb6acZLwyCCjgapvbfmep5wadpGa1HsbPycisZfFWz4oiXoWA27ZTEXc6nPjKssgE",
  "key37": "368EPkWaScVfCBFV5KCUF8QW1H6yJwf3fyNuH1QJB6hnmGjxCbmmnByGb335H4cfJ1NnVYGJwnhHG2KhDR4Xmkpy",
  "key38": "3Bp1n1KYwDXg7ionidt38NHrdjTqxKDfpstWmkVzsarRNQzdj2WCHCy5R8Vk1vepQA8pbfYvmVyxW9vuGnthzuZ1",
  "key39": "2hwiF1yWpkitnAy1LcsGvErcbGp8XyZFWUxoTMm4o22fzPuvCwcS3K5aWaqLHsm4mHEb2mAJfWkYXSbvcJfDy8rf",
  "key40": "3CYXncugctwqAkwPojqL6WAm2dkTqNMuRwHyxXBZRRqVNKDD6mjnvVHebCjxnuQBteSRAEAt77GDTmiAPdcapbSK",
  "key41": "5aPeiUxAmsUpRtV5kykkxRMLXg7zqL8Vb3pfaZ88x6e2mu23F1qskjtokpBVthPBBQrhLHNfLEe7g2EW9BjhZyvo",
  "key42": "4T5cpvXPBCL2iu4duPotvGB24TcrWAQZnJa9Z42BkLTMTaJkBrVfJDN8FHZL91Zm3tDZZdWH41eyqifNC8ZSpweX",
  "key43": "4MR9bkEpvrE1whrzxtkiFjR7U4SSZ33AdYRoSEcXTSjH3zekHskqqkeRx4uBXVLAZ4ZYhv1rLFTXUGjucbR1tojg",
  "key44": "4dLtwFoVyWqMmuDLAE4ncYsD8YbfhPoLdukoB8dfy5t8rgwxte2RLyrjqf4XTav4Mdgs2Yyuhxyvqniuku6Zzc6P",
  "key45": "rJefeLVQk9Fds94pPhcoJMyquotUm6RhBk3rhhG5iB5v5KCGWJruPo1ydpZ78tZxoGi8i7xeZ45V9W2SXNvywYc",
  "key46": "2axHrNAy6fKXwRKPLUjoYHHrwzb9oHr5pq7hhf41cYxjTQ63hm1nioFRjowCDidMhCcZ9MGWFqiA1nB3fidtdZ9Y",
  "key47": "juscerTLgPgj5RSoHkCngGT5eWu4RrWGzdG2ZSAroxaw8LddCZ7MVi21Hms8mnVn777ox4ybexVo1ooDdUQyjzg",
  "key48": "3mwT24tmquo3FoYuJCn9Gneecu53MzPjNVEAzMmJFyuqRAWjf3xdC6XP24AMRKig6XmtYwgckjcF9yr2QA69jiKB"
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
