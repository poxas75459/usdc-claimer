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
    "5CkE2guoV4FGxe2CiBzzNQtTCrF9AiT5JGdSGhQx9VYbuvqCZXYD9Z1FstQfzva6NAq45x1FadrWTR4HK91WrrMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oaJRvLQMsXC6H2UnGPASSt6SNZKdeLxgc1Vt7sWzsaY4b6yxMW9MkaqW5LwqNaGptgX8nGDwMksQSeAjJBNno3e",
  "key1": "467EU7tsKri4a6UM54HXwimgmBoLNodLWDcSvFrrHPKXBegtRpowybe6uFjGT4Ec3A53QgPaMxu76zmJjByEAL36",
  "key2": "JVmnnP3B2ThrPqRuexZJ8zzhJPyqJEeGRP4ivz3LKEG2cBRgyqr5L8SR67HZGioe8WxzgbEJLN867cvjELMsPGE",
  "key3": "2LEyPYgJMBg5oJz5EhiCtXHiUg5PY7dEYAWbsZQkorAwt6TdDmrQKo3o9QYJYQmCuAqHC9q3YWibmo225gzzuhzz",
  "key4": "5HovNeL65wt5pKgFyyxDba4NJXLjpbbE4xxyXnP7UhLyq1ocurkm7KTPtnVm3W2PJ12XPAGfDXpveyhFnQbjpWmX",
  "key5": "4cS7kYDt4rQCg5sSyTEEJ1WGsDaFfDLu2RyagKJohbhiAPJr3DTo31EoEUH825ar5efPWakVD85QJGQUkfbuNob1",
  "key6": "33emi8CokzgDxWwCKSQysGniJ71rfnKY5DcihQ3to4NeSkQtj63UZ3hQ5Ne6LE5ZDvpt1sueHXbdmwDoBhxzPDJJ",
  "key7": "5qSyh6jXJbifnqJ3F8c3MeAxyE6Wu7D6JPBKz93kACBTBGHEKqL1yCL9bd1K81keMf522KGEPcNwfJ4Z9bU8Gse6",
  "key8": "58H7KYwtQ1kvNGVeihoXMy1dRqsvn2CmMrTcNTHETsEgWzkhXKhVk4saJCQpZWDup1zug78FTpMjqPySFFmMGGeH",
  "key9": "3R5r51GnqQmT93VDgDhtxwWgZMFJb1HhHhRhPyZaBEQtCQffWp3TcwoXZ4F4DvofHt3ezGxCinLjSEXBHVSdUtCh",
  "key10": "3aQhtfEa4peznmARLjF4XeMFxV89jyTSXY7cisEDcLKCt1wt7eQGKvEzA6t5Y7XuzbY66YH9tcfFdmjJzzQQLn52",
  "key11": "3VUhY9Gz8LmUUexQNY91UgM7yFDh65WyKaiDjju4JuvhR9tLao6Xb4wdGB5CXUhBGC9aBYx2fJ8RgXYBP5Qbfm5L",
  "key12": "2qUHzwfBdFGR4syttdjgw2r8B18j51yRTkaZE6Xjdrn854v2gAEzF4t1uvaRMxBSq1Y6YVsfxgxF9gcafdgugGzK",
  "key13": "283S2KJ4Vs5ATfjfSFX4vwWdXNjwZHwUnEVzHSKhSjKFAUg9B3PLEAv4rh73kuW4XJNQKfd1XhJ7pXCdQQvtr5va",
  "key14": "5hjgPPm8KW1soKCV6ZXz9sWmDEeYK9hNvXhEfQwk9pTbA3n1kxV43hazyt3Xhk5hcDZwSQ7oqJh3f2pb23iHCvfe",
  "key15": "66SLsQHojMuovodo2MUn1bw5tfhfjNMqj7zm2uV6jXz8mEwHQJcYyvL978MR7ZoYVgHzSVyeeU5s5E7vkndnapu1",
  "key16": "3iaL5Xs3xC169CXkNTMx4roJ1v1j8K7R1LVzrMceBqGmtg4LgWtUTzSm6AgPSZu2RyRXpZvS9c77BrYgxo53N7Yv",
  "key17": "3kD8C4HVbv5DUXtHQWWqYBCEkrQkac5o8Gpuz9zuptVffSVTMXDkoJYeZmiMSpmdF1Rx6VKuAGQznRq88KWCdUCn",
  "key18": "2i4EopXjq7WdKMg9zNGZyfKc455bsZ8BEZxbuBMGBNYvBmRgh2av5uncU8tUQ3jW2vP2DJkcf9pnF8A3DqtSHJP8",
  "key19": "4oLDaoBxYSxiQEGMVqSJ8abFWQhfXdiGSBjnRc8TAmzYUrsRWjXdGaLJ9oLknnRrM1QThPETsmzvWLPwbovjeNHV",
  "key20": "3ahnBcVt6piuCCRbr7ftnM71bJgmfoRauvSbr6E79J1C6cMSeuNKnQJLtFyH8Y2oRKcrfurafWtZasNSsd78EoB7",
  "key21": "5UDY9J6kWw5r1u56HKyrvHdqeBZ3SQyp66uYo97s8S9WMmUiaJooQEcBEKx5ykAVu8Q6xhSQoCrT6qaKLYyqy4yv",
  "key22": "3yipy4mfFvSxtAM3eCCmBs9D53Es8TUSnL1XvFwyCTFMVscDzyEJy8Aov6hbYyLGRtfTqCjQYjnDRLA5n5a1yzbY",
  "key23": "2CDqAa6JR28KRPY6fZufbvao195AqoSUMr1eyBdaY8KztKtvkUbpjEvxiBfcNhwjB71fDw3L7kS74qg3qijZtMcN",
  "key24": "4ToSkkgvNX7XuDzYkQMkhesTEFqC5ivDHCzphaqcv6h64jRdZWiWS8vXsR5XpsxPPs4Yexi7WedriJmvKLM15JFn",
  "key25": "31gqV77wtSTSDrBHSryG4SgV5RaBwvSZycvP82PPPsovX6pACXFh1HsZDaLXp731DAxsze7XBX4aHinNRELMwETb",
  "key26": "5Hkf9TjFjgLXfoFKeVEiwpiNjh8UrspBqqPd2KG2BWT3YKzabyhReYkCX6n8Qk1Qm595JTRkaFNdHAXREZJMkLxx",
  "key27": "4cYArHuLBqiA3cPQAYrD6PGmKHHoudAdY2H6vmTxwVTcqzKQ3Ebnuz2GCu6EXnW9fawKae4LihJ3kFTUz8ZGS2zp",
  "key28": "A2GmhPZS4wVwsAjJ88FPTq8m4NiUh2WBS5cJn113xYqm6GYwGvM1qTA53mbBn8oHeB6XR2WLHUPyCRRXkCGVv67",
  "key29": "3FrkqHyXqQxBkkcKRkdWsy32GaUoQafsLUVN6kVguVU54tSxiFjYUj1CTvad61zVMCAe11cRd13DKRzddRc7JsB1",
  "key30": "437tcWnTcccpMrV1whRoTqacQ99zq5BnW6gGUYoMqHgmG8VJfZYYmNKVoetrBWG8t4FUapu8XNS1eTF4ymKQXnfo",
  "key31": "3JQ1MeHhmZMxzpT7HrgFSLquzRtA42ebmQNPQfd3snsVFbx3UKQWgj9r11GEBGMEv5mECFXcyUmu9hDSut19m9Ai",
  "key32": "4BNgHMz6wP3FYeoR3HKn3kVcNQxicpZ5kRBwdLjqAHA8csBMDEUWj9qrTzTYzshW7k7nt9L6HFHmUqQLGGrimCuY",
  "key33": "5HwRC7V2DuS8JFuZZDY4WexS28RuJBKc1suYgTDeWav4QrPY2fgAuZsMt6B1DchhsQ9f3RFbE1ZJFib4mJ2kbW9j",
  "key34": "4drVV3pZi8TqNr1N4X5BGcikKrppNngD8Tv6hmUEjkKQus5X12YumkkRAiky8aMAZFZZfVwUZ2LeRMVrhrDnEWLF",
  "key35": "3yn4kD4r315K8bfb8xGwGQbEf1qjSnv8XFEVyZJiD83NiwJmoN5VLquCgsysa3VgvXRpQUgBYTg5Mn9ZNJELhgHX",
  "key36": "LAJDLpqLYb98PXPkiY2EQDiHf36bwwsJ8uJGTCip6L15TRGAjPVm78a1gTMyA7FnRNsCwQzTyBkkqyG91ZtDroH",
  "key37": "y9VkUApJCPoxExEwcPMti7oAkboWTPH9cdBGkaxtxvh1389jMBBDSkNUkr35k8GgyPDwBgUni4kmpT6gDuburG1",
  "key38": "4mV1g15iMKsrme7uxBcn711At6JUGCurDzJ5t3hPvjogMid5aPoG2zeoQx2GSy9JJWKN5mkX9aqLoDaRiiRdGpkd",
  "key39": "uxQ6gMh3FuZ7bkuMjseDUBAf7BahyEruBSS8QpAA3pJ5HJYZ9Jh52c6szdKseA8t2ek5qAH3YavNrDJo1SF45st",
  "key40": "4mMyvca1tAFsBBnbtxLbCCCBts5wUE5THBC9oaqd6b4S83yoATqQfNyZUrdDvttD1EG7HhJHfNuxCqkQetFbPSdE",
  "key41": "pHQdzydvLnyjJPC9xHaRN3EmoWAxHcCPc2aTxbiYJ8Mk4ViQqRHCXmvGPkw2aYTgtekvccQVBiFpFU3yq3GigyX",
  "key42": "497NUPfxC4Y1F1XXUQkGL8Rag7md8Qd1hn8amanY9zEnkerT4YHZJrAQCugpxFQeKWyzRoNQvpKTbAkfoAnN5NK",
  "key43": "372iCwfgTHFwFxrkNLFeSiehZ73vmcF9Eg81qDhNHtreNdfq8sgfwkePL4Nrz4rJKJVRqPiWMSfB39GWG9zWs7FC",
  "key44": "2MRJq8S2CtWLwNfU9LjkWgGpoTCkAh8DWMwz9kgWiptZi6oKeSmYJcfGuzzawpQVyUZAL1H2LjmJfYztkKLoPPqj",
  "key45": "4e5RdPEMWtLaTtiKstYy9LJSYSE75KsgvWrcQ9CzBeJtR3Y3ctBigxNHfkVmZdabzi7QZWPykvw8UfVRVLMHDCDb"
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
