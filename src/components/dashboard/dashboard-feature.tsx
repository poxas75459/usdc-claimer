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
    "49sqqFQxPvR7yQg4vxK8zzdB7PP5eCERMcBvZStXAPxfmPorgNAsf9wT4dBk72frrDCBDUESnTUb8Rta9TaXWC7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EcccmMpEDX8Gy6VQsrLioyCVUr4KjxbodZivmT2bf1PepPqSByTKnfX9caKr6GSyeUnnUUbigRKqA1gc5xvBd8x",
  "key1": "FhDG6BjR7Q1Af7rSLFunjRjPWLmmUHFRABsKSiKdDcfekoc7HoCFG3hq2muowBo4DL7kJy9135PTPUo13L32tNq",
  "key2": "4qjmGjHq92MJ7bXD44x72AXawz5qn1RrAEZ6Zypf6a1jFFsHrGC1PbRj7JLDMa2DayigKeJYHAX9NsCjmVWVGYEY",
  "key3": "4ck1eLg6u2bzbX1LonVCUwEiMoDdbCM16Lvj7EABV3uLi7DyQsa4B69shbV2ueVwNNzNrTaGMB2midJMqnJLpqH2",
  "key4": "NZbHjidtHJm8FGjNTrW1AxdViueZRRbCdTDa8Zqb988BgZeanULJmpt978s1cfXGtS8pPSwScLz6GGa18AkF4bb",
  "key5": "5yLDPzUeGcvHKFvCdBw74go4rw3BVcvxZEWLatcSadRaVpY6Mfu1LJaZ9D71epxGK69xXy83veocynxA69HyfMFd",
  "key6": "3evGwpz8btuuC342RjyCJLUtCR3EPConYpS2mtbKzpM6vfurgsPv6LB1frKanNwGZEi81hjTv4Q2TRPyiWLJwFhH",
  "key7": "2ZdWawYNYAk5f5gdGnC94H4JmofK4MENvAQbMSsbkJriBhoc6MsaFH8P8B37VSraqbC8qSvtZePo2M2WkkiBpwkA",
  "key8": "65KqVcmwr8XuuipyDYSbAbnpsVG9FQ5Q5FzKffMuCqCS2tCaCZqwScFWZpXHCmwceyK1AD7TfUH6bw2wauh8PDun",
  "key9": "4DNw3cvY7gvHmPYviWsXePL9cygBhQj4UjYNAQ7qxHXqgCYz3ybGK9yszxE88sVyuprw3c5jrRt17EkDtVrcdmEu",
  "key10": "3GWYqrgW5wUPyxh1RtxjDBRwZyToKKb1Yi4x1uUNvkRVu5kponUrUs5bkrLTBBzX85KP3uGbpMXsrEZLV32VygRa",
  "key11": "3dfbDT29g3ex7umX3TLu6Py7EAvpcAQyvpT4jYejPY3kJ8pvKAwPy3QXpidKwJ6G5NDc7TuAV9eCVxq3zgkW33DJ",
  "key12": "2oXbN768wgu2u4vN47bcX27SkizWce3hK8rXaEvT6nSWB4sdBRxDUcQBd7h3iZoyhJPvkCTV2N2ZxUTgjK9BYyGw",
  "key13": "5yyHQTNaUm5RRzntkUTa52ubWaV3z2opH2Ti5ibXq78eAG9bUTN6gZu8T18RBfKRKyTmQaPijPJ3oRnx2rtHmiKf",
  "key14": "5TPKaWFTk27187TBohxGuNLrFtD23qXqfU6JsVBuzmREki4DazQAyHYX39rLEVpM9ovAyAV9nUu2tPmxQ8PHiED1",
  "key15": "5AsmTEuGXHi6arpPL9MRXvcjVYTGmbue5SkFZm2i6P6JfT8YGE9BwvJGLCxnfv3sRUtoYuwa7Antu1ErcRcjnzM1",
  "key16": "39oMnrNaqA3WDbGwpEtJXgt7w7jvjrtKRziYFVnkcQEu8qKgmynN5tREHbWhbKPqh6VjVvPrTLxY4oqvcqFtJAcR",
  "key17": "2LsFrCtLn6xhvU6yyHdc9cpcTBdAiiQzv1EHSjG7bTScHohUPiVM6ShqbSGDuRJZpPaQfHjajkyirDgNwHSS2cNF",
  "key18": "4t8PS2WTNRBfvvxGuAdEo7VCZzHuu2hHz8gmMJDPSQLJY7a4Xvoteirb91GqxVrjrzdevkeUcyEfNngXzEPzV9wS",
  "key19": "oCFEUNNKRScRQo3ezCDR8cS1CuyQyGa5V11DWJ2brAAngmd16z4svYmhaF5qK94ME4i1hNNXe9P3GUVQ9crzJAa",
  "key20": "4aJWF2kFepvSEuLvQS5b1bNDY1iJo9XbAhxxVLGuTTDK35BdB8yu3GC3Fa1FUCZkB6oCjMgqYDpMqCy4nnTJwuZE",
  "key21": "4mrbrkaUZC1g6E2jefoThtBgbaVprxX8caX6m348D6VhmSYp86s3UDXCL4PJiAX2eS1Pn2bQmWfDBbEXXZnhf7ur",
  "key22": "4C12mkMhY9nbexrZ6AGnZWKWdBfChMh4i2pbKhY1duq9kDr81cpW7J4jzycsZKyQRFkDLVdybjy5XUCzHzPrdfmY",
  "key23": "eDdYqFTFPHE2WW1gceL7jrvjh6eZ2hkMdjQZd3g9ea98XJ2w7B2toyFU19YYvQvUGTkXJgFo2S7skE8Q7zB377h",
  "key24": "5G213qbtn5n4NfrqiuxgAFWQsoQeB8KypUdSEpyQLbhM18dGjycigfvzL8S5dxSeQDPLVVXzx1LHbrMvW45ya1Nu",
  "key25": "3htJM2kqbTyciFu58pM7tNVKzxFAbCi4kQsMJ8VKutvq81rBSWQHHEsvUjh65eb9nLzb598HfmfhFmqmPZ2Ee8f",
  "key26": "4kpKJ4uo1So4btKZzfzpRUrPBd848i73r1PDzj5stsCvcJWiYxAeq3NNuunn7VCiE9W6F3vCGpxMZ9qJ4pqj1YmB",
  "key27": "4E4sbHcguYwruG74eR7RJEpMtYDyHcVRfyC2oCyNbpeZKo8chnKJpx7kthGUAkyRCrLqEfTW3gscD5mT2LscDCjr",
  "key28": "258Pk9mECRSfr6UNg3BBQs6vcmR4bJ7m5GFXmHdovMjZ4vWdfeZwyRBHVsRGYPLLFexWJ68UqsMcXxKPY568eQvh",
  "key29": "w3roE744oYfawHD3M2kK3HVNoygAjM6iEWBMXQR2ZrXNeKuGnBhKFSjbMyQjKZR7FrjP8PkJFJpim3bNFBiQiVm",
  "key30": "4FmHxjbcMXc7jmC8szdxwaCxhdghTdoHWHPu1ttVdw71QqmFe4AdDcEbDLb2KpWEEEiRwhWZZaY8pzCvwRh9BSjA",
  "key31": "5a5Ya2TaBuqPpj7cXp284rANeQGFyE1BDLbe5WcJbNuH8JTXXDhSV59a6noqYzHE78pU251g7Z7NMP2JuLtv4ctG",
  "key32": "5LfLMXuD2V4VMhkwkNngLrvTBtLUctr83ySn1gmCWT6hwF7ybgV1ZYLZ2dRy5HoyDSjWQx1A1WADtZubxmYjj7Ph",
  "key33": "3RgxxZT6Jubdi78VSUrgwSN1TLzaAZxdh5rWBEkA6pjsLxeryePhKq2bZ5kSp39C6KnYCpz7sAnndx24BkW71Ber",
  "key34": "W6B7x5xNJy7sdQwgVb2MZndy3RcFunw84PxjPFgsAGmGwHMyaUFXyx1G5WeTPNwf3B4opWJQkLDAobLbeE5HTfX",
  "key35": "43iUGXaYzQjdDzQ5CQN1D6QuNYAR83Ej4EeMh6mvP541WfgYKoLoSkAWJji5SMYJu9xxMUiCCSRZiP8w9z2ZSFEU",
  "key36": "3QhH6PnYrA2prAL1weonAWUohfPTNMaazPXUUTdDd9iWjmHgo24dxsEqiXzyY67k54VeZ2byHFet3fqD7HBcMBmz",
  "key37": "5BPRiNoPtHJ32zFcNwpmQaRfYpzJ9YdXe7n4XcSRpxZtWXcmVLyjn5jtPCYYnCJ7uBnV8q9ZV74r2Zhs7o86uM3M",
  "key38": "2bWLVTEvtA2dxPzRf6nnzznUPnc3sbGvnJSDeHtKezgZzDYQaFFd1Lr8qmREuB9B6TrqmFHJQCzNkLo5yw6hZtnW"
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
