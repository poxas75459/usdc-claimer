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
    "5g8A621mDAonJoMfn13uhqNH5EQTfwURUcrq1WimFtSRRY7tMxShyjnkp2EKEGTjYidrHxTHZGqKXA1EeFsLGQ5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q7RUWzQBV6RwrPSU22wBydP6eNZYyNMCJHk7aA68mnGp2T3hRNRxkVY9EvDYSWEyh45gM9WyHJRCmhFKRhZMbh7",
  "key1": "8iMVa1W822hD4iB42wvjscr9Jnh7Ev6GJMmS1ZK2NhiuazwRMvzXH9dyRabBkQ4ypm7TBJJ79jQ5BfUJo799AkR",
  "key2": "Jwh8P7C2HrsCPtyRKatjFfZJHTVGYGnMix1PKUju7UPKgV4GqNduwnHj9eMR8hdw9MGt98NCcw8nmFkUqWAGZLv",
  "key3": "4XWoWMJp7ngHAVXHm5njBmSfXdhKhFRK5RKexSPGHKWWGaa2vvdpwgLs6H9yAYw5KVRrFpWtdWTZ4rWbAHXZLBFx",
  "key4": "3NnxqbrDhHjzhT7qzd8HYiTGFtNBj9Q9RcqCpuSzQ6jUXiJpESmS1ew3qKb6nwnmUz5UtgHMVHeAQuJZqrte6feu",
  "key5": "HxwdUJKetjUHNzppWYdc8syayCDKeL5NNa1fvCqTreSeMWYZ1ZDGvFH9G81ihzv89Z8YtLytuu1QUm9oVojVs9e",
  "key6": "4wmQyr7bWR3UidHzUcgj12PiUvDdqWC9oH3dyhBdFmd2t8xebDwo4r9MXHHWHcoqNpf7u9a4gAEE6k43TgL7E1gf",
  "key7": "5U187peDNDefGtRAv4qg9CmxL2RUCa96DXaqbC8aMerDLyJ3RTaojXfxYktossixyExbQFmQBs3MVVJhR7rqY2vQ",
  "key8": "67ZvzfZAR1j2BW4qucQFCFnKBqBDj4xycKxoFdwZxexoqqg5TF3CdPJGwMVW1iy9RGowZwHVfTJa1osrETqsEwSp",
  "key9": "5o8kN16mshDuyDLRKw7y2DkxtJmN9YennSuemUGkw6qnodm5yTBHZsu5UmZKZQFWtTJbcC8Rg2PvdcUVv7Zqi3es",
  "key10": "3i1i9XWsJ9nggXaXzqFSzLtLV4fH5oh7CAtqaWtcZYdx3vnh3PssuuGoUhk8JhyGH7qcTKjeGPcc6FKvbArzEvsF",
  "key11": "385ZUrCvkyNGgRiZ5QSWNyidc2WXB1FpVTcNJAzQjjQbBbLkdUeFa9arcyfKgbWmhmhK5fBd87aGd5HuspksQF4y",
  "key12": "26rv4GqSgiR6VuDcP1qLXREoGrLMGxkJLx8Ys8QGt6emq5HrDbWYvExoLv1fZnWs3FEiaQ49kZBhL3NZNm8QgUfu",
  "key13": "4xmpEohdRTDZC7aohjoUBXeAU4CbScDWmBnkXLN3mkUawo5gRH1eGhzrS3t65K55xpQsnLR2wATwA1Eg2voijNPs",
  "key14": "2fsuowZgkB1y4HWGsUABrbYEz7PtFMg9aF4Q4xLPozHZ7VqmRfQnhYgx1etT6Q4h5FMEQJsxB9QpSVmc9yZfnPA8",
  "key15": "qioU55ttxyyzGA1KZkrLPMk2RxkqkBTjakRFH89wZqu4Bi8BVQaW9WfyXGZpYjARND8cMUjJ6kh6myPafidj9dM",
  "key16": "5F9A3KJ4KDEK2wA3x9cdZ5XzWwBP2tb87SbpWrQjCqv16covZ2py4yXSHabNXwb944VFcv6LSnAzREfvx58TikQ",
  "key17": "2yfKMKtbKXxfNNLh5RUpNoXXnQWdzvjLNhj6kK3V9S45L4VbH1G4NLTR8WEWD3Pe5o1ZoQqs879ShgzvFWaEi9UD",
  "key18": "5TuxobTTuU7rEoJzY9Tt4mn9rHPLCU2kmjofrTns9y2dJsPnRXUGpaNFkc7FPGQzCffeCNjD2f2RwZTJpXUZ8ABq",
  "key19": "nm864y5EgXLoPYnsyCBotqypVYTSoiri4f8Td6PuNcwy5DUwPGcjkDEG6WwQmhGoLQYxJ3VJSk5URCgeEv7fCaU",
  "key20": "2uHa4uaok8PNLquVB2vzJ8uiRdJh9HknPKgzdxzjLQFC76EmBMCtoaN4R3hyCjBfHM1w3QizVae4nyyv6QYPjm7o",
  "key21": "5xQ63q52eU3DzBCJ1bhqdmmr2bEhjJJr8BGGpt5D6dQjLdFErd9X1Scn8oYGNMG8YsEmCYs65qnULQ1FqsoVJwLx",
  "key22": "58pqfK68joxzp3X7rTU2dLNxFmsbHbLG853vj1kTatTX3WhgauxV6NR2eCAzTXi4LqSWpm1W6DbYD7r2LPhSFRst",
  "key23": "5wUS81m4hnX9z28RDgc1UT57d2kG5F8t6zC7gws4ACMcKMajgiWVG7xUJGcVpZnQWYKsZwcDLi4M7KPaUHTpLK32",
  "key24": "25EdHNrumxkVCNXzNuTVieeDBQxt9gQvzSrENfwiWJuZpKRc8yAZ7GM7MeQuSzDhoLrDh7srfLDF4JaJhZ6vnfiZ",
  "key25": "4qNKdo5B4JEv6Gjf2HDLbru4Y4argZGNCBpMvxGiE3MoHuwcch2b5hTkzdFqEa1AuNN4NzvTL83T6N5Afo5CraCB",
  "key26": "aJ5QvqKueakEUyT71yepfQMnpz4qmGbuLUBANf6ocDVjPnLD9FgTReqXf1Mh718ArrsXpaQBgdzKudYCMuX2KA7",
  "key27": "2EQKaAGwGQ4SxYS94keKjfkcupGCd2Y76wtQaP1pm11Ancn21KWF9hEy7HzZVNaswr975EnhjzNDknmP3pZnrcsY",
  "key28": "53R7UAHGy8QRaC8WR39tSc8MoHE9PSoJADNA5YEvyY98e7ht7PR4bVN31WM7Rvtn8ESukZ2igiwn59QbaqQARkmM",
  "key29": "3A4auJui6tro413JWXtp9HCQvaiRRkLjKDZkNeArMVaaL4eFvqywjnAQVckzhGYomKYWwhsxzNSbKKZogjixJFf1",
  "key30": "xEbkMUEYup4gRu8RD1br3KYLuUnVAs6NoYwqrrxqDnEAnKeWRScvcU81zcbtrb8BsPKDybaq7rk3LVDmtc9vvK3",
  "key31": "3RMam1K67nuRWo9wJ4RggERRTPYPLXHGdVATtgrTJFXBsQGWAWNHYwkJa2PLrQ8StQSkWgveMy1KXcGHx4i9LYyY",
  "key32": "3vvdHZJRYVWvytp4ZFYTMKfxDeQvFjLfEqdmbBZNzXdKBJuiVHWm1e5xLuYdKZpKJFR74PPamXjvGutLepoUghUZ",
  "key33": "5fWBK66jY4tkjkx7yPMb66D3Zf2yM9Z3ij13M9co1Z2GKLZgQ6vYX2SGJ1gisnY1wUwbgxuhpuPDAGRFXcgnBtgv",
  "key34": "NNVFugPEo2aKMokNTGBKexDEAoqv9R3eQ6uFLiBXvPirqfQdonJgpozNyGknDPd7NHrTaE4tUdCuaBZERZxznvb",
  "key35": "5y5oYgDfNRc194nXssqHVhveF6G6AJ3nQEiuWPKpPRaap8XCfgnvVEEXHQEa9zNxSMTH3mutxddqeN6GP7AthAJz",
  "key36": "3KwNq6kHcJnNFuYXxcspErt6hPe8ZKXdJtyHEmcWymuzk422D82pMZy9bt3TnPT7RfAyXRhVDRKeTHWWYFSoNHPn",
  "key37": "26ZX8taVKGfnZaAcp9xRQejgmFt5qYCaexirjiMdBHi7BmBvMB6yboDvbw2NFpLfKjEjMDtYsNvWiX859VVxKD6h",
  "key38": "3BTuDSEMnjE2aaPG5qAMrkdSC7s4y4N9mJ3UgpgZ6Q4KrA1hcDTZJ683wcKSqk39oJ4cSDx28Z2qWkhZ6v8Vr6qF",
  "key39": "4tLHcAPPFGcvKLR5d5tEp8rHRWBn9JJ4vaT3NxrhTe5gFXvoH15MdmsHV4D2JfHRan2KDca4D7sjKumcjariEtxe",
  "key40": "G6ZfcJCK6KhQf7AcEFnQ2fxaX1UFwaQ6wZ7UbGv75VNm7XZj4wRQbc8EnQvHdGartu2BYabHreMJP9kohdJUenL",
  "key41": "4KGHahQnGoM5c5ALKFERoeWFDtS3EeHc1aG7KnGToF12aLkpEuJ93ftbj4gMUvSSoLxCXbqQZsfK78Pr4d1LwGqZ",
  "key42": "3vLeKxns85ZoH7VsjgpqqeMLuC2FXU8tGwBYKQbdVVX2kG7XTD8c5CLSAtWDswZTP1XJi5wiiSDoHwuehSVh79G1",
  "key43": "3mNYFuJ7yk2APUgjpppTHKDWPocfZSQxWYvm9kqgQAA54PnKsQTB8o7xTxizcs6H3sjSe5Vz2dqKbV7yXmiBS9Yc"
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
