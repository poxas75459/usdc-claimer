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
    "4gr6bRdUxtLsAx1RqQQhWdFND5QpZ49H8JR3BwANUHm2ya7CQuBYiyzXccZpLkkUJyUjZu8Gyj5NVor8TbBmh1DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FAGMfXc7KSMu2hqW8zGvWBvoKkq6u8NMiSNjToQJvofD1JScLAPAfCVHQiS552FxFZ6WjFkt3zYXQ3k3ToMb77c",
  "key1": "5L4dgMRC7uPuqd6eu8dA2HNofLVsjPnJA77CAzeRueqnoSyFzsVqtk3RD8jxfNj17BoWy3xGAso8RuATFKU9Xpp2",
  "key2": "5bmaQh2kRAorv7gNzLMmVdRwcfU3xBm5DfUdjrywheRW6GcCQrdVQtmWsGSn9yKtDfVU8Dj4EU7a96r9vLYjCp6",
  "key3": "3RxsQkLUQGfVapZerYBheWbULjRt6Bnvyei92nSmGcbeDNLMhbxGvY3K1HN5DswMToRXgFNN5zwiRagCtLQWSFPC",
  "key4": "5q7jf4KTP5QhLRHQPrtWBTMhwkBzBQA4w19bzjXDaujVbZEDQdKtFBJvtWMdywRaWg9EebzTqCtxHYoeQhzKBLaz",
  "key5": "3ickfBGAHUkqMxCnqKi2c6vDbki6jA3zxU29Qj3rNP7d3sX3V5VV5LqH7JvV2ZWq5C2W79wrvSW8LrXWzyHwHwx",
  "key6": "4xs4ao9djTBZGGKu3c6SvYoUAZSmem4bkfUEnDCfoFo4cyxHw61cyS2cpSwVLiZtRMs6QEYN1r3SHwzEnTNbGhLA",
  "key7": "3TnYJeDu6cYhr3xVq91MenxfMGywYhZgKod1gmuVbut3Ayh5SbgbtftqgZeBgS7DAfaGspD9t1D8fXbkVezqKY2f",
  "key8": "29pkoRxuxqACGrp33GYfCbc3r5sCUVutM1ZYqEMD6Pg4JC7teEsgNwhRvnUwYkbVVhdJfzv4HprL4rJLJozE2wFF",
  "key9": "4R22fBRxQpzEt3bxG547Aem44m1Ab5xNCVjCPPC1s5LWovWpp7mPkCNDA9wcLTVDAVYfuUoyCG8hWGUvxJzyLgb5",
  "key10": "5BBQbC2rY9EM6nnxQCPa18kxXqFWMuEnuLhAcMUYgoTn8RLwkX1XcraamGif2GzxpFcFgGu8NLdYGMMMvkE5xdDM",
  "key11": "ytWh63M8X4QKDWRD6vdmz6sLR76BPKbQzinE4vJczgT25eCYgPpBBLcxKERzuUJqWThDT5emB2aWj6Bj9Lf7RDN",
  "key12": "49QpRNhGwc5YhZHyMVWXx9J1a3rS8PirPf1Uwb9zJHg6crmrAKPHTWL9Yy9uZ9LnebvkxosabSh9M5TLJPgGnviS",
  "key13": "YzgPfkNcwgSnMkJh8qvzmvMPU9LovFVLHH7K9gbAdPGxgRy1ozmgN8c1e6FMbsSeiqUFSYbW7Rb1RN9jnCnBwkd",
  "key14": "2ivcNddnhWejUXbkMMtvcgQtkAeuBDou83FgNr8UJgrFnHz7si5jSYaSYughqZooCQNzSAKfJ9XM9pxk9Xn9vHNq",
  "key15": "3okgqrLSrKBzABzrQZWNvZ6qAWxzyPDus6x4EPH6tY5qWuYzMaZR7X9hjzZoAnn6Kc8TAXHjpQk3dnhr14LKXy5x",
  "key16": "3SVZF8PX9g4azSdr3PnxAwoVnEwhpS1Pnq72hcaQks91vr6ZdMMeBmAZyspfrAudxJePEv8bxyVMfzzkQzyQq7Ng",
  "key17": "5yCvXCiXpqDpcKXVKKZs2gyhsqTEYdqwyDUquQENP5Cxkg44ZkGLapwg4xWJFfW5xe9dK69FHhUy5KbZThZKQtJK",
  "key18": "aSt5WaSs4nB3MnQ4LspwV9uKkVzWm6tHUHDnaSZiPrMuExU3Yk7jP9oDRuwmWT54uJgReveiMBgnzKXnvc3cnUM",
  "key19": "4ZG9kbXQu8yH8T941mmAm4QxpZ8rbSVzYZNBkPSZjqZLkvXzRHhQzZdtcvpzWxQGFHu8W5rated7QTqXu88oY3sM",
  "key20": "3zz1FpnLAutGYLLTcXCio4m6voYQo43ozC1adv7qf9tCfVAN6YpcKyjcnfrYRaXhgNnpRdvrXZVjTT7m6SD95pvQ",
  "key21": "3uoYa3aXFJmbfu7r4A5kzSgoCbvHzWmYJcUfvX1EsB2zVEM3MuUNdF3k13DETPG1qrrfEZbSoxTGbuVTZCj9FSTr",
  "key22": "MY6iTjH88caWHuGb4SodWtu9zzXaZkrjyo4sjCa8RuXmtVWW98nsPWjvGzE2YZ2zW8ayvZw4CmtJDkc2p7xAiSj",
  "key23": "2RnMTgHMPvKNswgodHjgTVUQenkczSKF3tNfaF8CBUaCVktGzhAPuVVyLYhhQXGUbuvLoSst1fxRukvRVvJYeTtC",
  "key24": "4VHwai6oGbwv3xdqv8twkPDWyiAKCJsNjaoGRzTAVtxxwRwGUnXASaKGmVTD1hNPAHTz7qYzEDeR9L3TLhizwPF7",
  "key25": "4HuhrL7L2iF9ovi2XjSdhfiL39YDBr97vW1UommUpjZYj84V3KiCzkdJ8pR2mKSntw1RKzeG9ToHD611Fj9AbC4g",
  "key26": "2xgAtzP1Q5pauVsQ48pRakodQffy9jxe6woh2t2LHEjtPguQw1ttBxJqj3KNPv3HF9RNTua9MrobB449zyC3neaX",
  "key27": "4fbaRQqtnaUWijkfYie64jCNwtaN5LmxUhqP8t9YsGVPDiNq9kaBFDnuRBb6PppgLqemGL5gE5YYPvqvaA9SAq17",
  "key28": "4ALsh9ekGixX2wmKd1Rref4r592JtNa247AjQrT8RDabMXhU6n1jwDcnoGgFJUyByym9NqeRR8yjYgTKqfctyYDr",
  "key29": "esZ3CYb1uQGGMmayKC5zbuTEbwm3ieBRG42Gyz8zoWdqbQ8KXuSUn7jR5ZahjL38D4B8NCninruzQEfLus4JwZg",
  "key30": "2cyaoGxKrrvi56nPnmBmkzZXHUgZohCAdvwEy6gMGEMv2W29D1mg5UDxDgHXpoBfMB7zNWLNocccn2foSEgJM9BX",
  "key31": "4KHMVvsBm9cDbpBqN3Jp1TAV2irqakuXce7VcVaS7CFA8cXJZZdKXNmM3G3FaeSjS4t9LpRHe5rWjp3GHzd1Xm93",
  "key32": "44oET6cET9SaT6HnnMELjoJkoUjkdMukBDzuVg6wF2cckRzwBxxYiebhVJQBT5ar5oUaHaW3H4dw2APM6fzkLiaJ",
  "key33": "5a38TtEx7ut1cBs9hbjudbMGXu4ZcMSQ8dAz32ZmnBopVth2417jsVixqqHQ1RwXCAQmFJG72SgRwNu4sY7CUTJB",
  "key34": "5otdiCMXFipTyFdH2cibybWDetzwgyBeGvwWDrd3XzbbjBaHw3yyupGaPKCrZMHkcqbijftLDrBd7J3YdPhQo2oV",
  "key35": "4AoSSQX91Y7nxt9JXJDAoQRdLnniYy68vUyB1HKVX6GAAKViyFzYdmnmX84yFm1psETjfno5fChv3TxkBiph6e4s",
  "key36": "4d5MF3eKHEbsPMrjZKrmCsawQ5pw445j4Q24zgfCsW9FcuLjQ2ERXZ9VoMHbPWWAyk4WaAtvXSd7DFfAdR3cSziT",
  "key37": "3B7heVAKmnxon7WQvPPeZhhR8A82wrjFFrdyFn44VNeKsAt8dpGmnHP5dyN5PfXSU7Fi921iwxtjBMGXvRjsNydE",
  "key38": "2rpdRBwdsAC8PFD3MHxQUjs8chYv5F4hCBx5g5hShD1yEp8LVXDvSn5htnC5dYiRqUV3f2TNGr1ywT7tXyNePEwA",
  "key39": "5wan81JMZWxUQo7Pa8w4bRWdahUQDgH9kfhx9arTLwHw79s3JazKFcck5fEBbjhLwirQ4LFgzZ16PueeE5zQtbuL",
  "key40": "3YHQfme5N16VMhKAsyay7xsmrk1hxDbBrXZQad76QzraitcJxVhvV1DSQjTX6L92UtccuA4LGiWFtZAFVykwFUSg",
  "key41": "5Waov8f5qVFHAcFuC6oz8BuH3VsHJ9zXDCVZ2Bxr4U4abRUeBK1yom4vqygihUjueyoYFRUDWDr9fKrnipcEcu7G",
  "key42": "2i3wfCTWf8ko7ZPGqyipM4Drmsw5FfrHmmi7bXw1vQp2gsiTmdgb4yzPQqGpTuWP17jG2wZyAnWD3fj4UANBm3Tm",
  "key43": "sBybaSL9jstVZ8wY6PqohnyjxhJ44BPVfrWnkTcnxM3Wg83AjyLmBuPFY83YVHBhfUXqyNuSxV4ngminRwLAPF5",
  "key44": "2SvTnrNJLQbsUc5A4m44yBwfjTttZkWRXVRDWDYz4m5NL6DVfbZwG62wjQM6NnLGdDpbzyQYsRu627X6VaWAgNnk",
  "key45": "4R87crSZVUycp4sqiUDuPgadXkLtsiVubFnxrdkshANe8qBheYfqKYyr9kkFBtT18Kt7nRSNWpHjUC4FFYSjf2GB",
  "key46": "3DhPVJXkbRbnUuqtRZZVpCWGLbChNHrqnPoiDxoHdfUtJbZK1khdt4QVquma3TbAU1ZSZvEK516tjxiR4ZcMb7CB",
  "key47": "2QfhnwMbeQoVRMWmMPyxpx3mNCuER9A87QDDFVAPf1fHKzEVWqJgWz4RMqW5pz4SaKDwnmt6LCq4rRftDciXXSTq",
  "key48": "2wVeDBNNsc7VWJHCCzh3UhY8TuD7VcDbR7Dpeo822HqaqtzPfYA1e7dWsYT92EHqUs5cVCkPqZ3kBqgqogvNNPju"
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
