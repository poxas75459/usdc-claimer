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
    "5sVkSN551Qrsbiudzt7WK6bgktbVFZF1SEVPNe5ybv73LFZQTDV8Wszm8cAp5QkuWpMvinL2aQLDdWTBPAPZeeAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FxBR5ns16nAXzqXk8GJTvxjhn9bjDzkCui9rbso3kHr8Ak465SRhAuDoC6Mz3kHK5JczDKShTPTRVVDFHaQ8tYQ",
  "key1": "2BWbQm6uWmfLFuFEbGVLPRA7kE8sR9MTstTbNcPvRRUbf59WwY6LgADDxD2vvmSjyLx2ZqR1scuMyr11r9w5Metm",
  "key2": "5PWo5KJRGmDMVwxUgZaDAg3DNrqMiGRthAktA5LfTVG9qUaWoARwCpCMPMrFpKZpaLq18xmiWBRdvyFtVbXSme4B",
  "key3": "4NDTJTUabmwHbd63oN8aLg4KNp58VLjj1q7162MHPfLP8KY2raCr4QqeSrmZq4GVKQjyTrk3gZvtHk9VaQZQvsLt",
  "key4": "KqcQ4EK93NMozT1h1PxqdmYTQm33s3Xmjz5A9j3z2qFZUnKtkkemBuVPKsUvwfMmVppBZEnEFJAshQH5PTqykZc",
  "key5": "587Qw7yyfzKnDWB9odVuXbDEXHSfSCQsGTWctzeU94zAtQZBHUiwf7Uas4LvqYgLPsrTWCYRNcdJviWELfmMVtKV",
  "key6": "E9TNJxtkBbQN7FprT1P2QBCN7iiAogz2NL9Pt5yKhacU3DpBfBJxX93mvBNVLzWf8fJ33FM7pjpx8VSyigsCfAy",
  "key7": "3ic6q7vZWNXnNmwdx1yDi9a7zD3wLwynd1yRjtFDThURbrRpht8ip1A1rfPc96mtPfLZGgsHWRwJLevGrQqx4dF3",
  "key8": "2TR4M6nTd9vA7NEaAy4GS2n2PSJtJp6WninZBbNpa1tSrWShZrr7CNe7P6JAPuiF94sFTFhCccvRwNjN1ayUiDdk",
  "key9": "5JL9y6u6mFfAuTWVug5umL4U6RRg4A4qGoG4GBeqUYXrwUWZ3EUYY9vqvEfX5PftcFbcHf3C26AAmhitWJ4f281H",
  "key10": "5wevRcUyuYdJ7i6zNxe1xePy5VtDYtp99RXYAAJbN2fHR9NZ6uB8urDEeBnj9fhiKcHAxnAM3ZMruP8DhwkXE4Dq",
  "key11": "eRx7NEjozENUNVzJ4iMTrgtXkt4UCCBfWb65qJ7fSTFooVi8aCQ1cjHHWgPzqiAz2pgJDhSw8TsxAT563fKWpP9",
  "key12": "WyZVwnGcSet9zz7ETEP7PMLgunfMCkRG96cAEFyVAVY3Ea5AVHzBvsfEwRR7YQG74BXK8BYV3kDkGnHZzXaDXYJ",
  "key13": "3WVksphcK4BBMVwK77CufmXvrsbd9JztPR8W8UrGUrF3f2xpyqB3mEic4GhXnRtwXn1ysSuDqJAJhgbVU32jE9Gq",
  "key14": "5pNu5FGsWoHmvGBKo8bVZqbUsqoGCFJWBSdiagnbSLVF5dnqLQJwFye15EQButgexCtC3mJQ7DvQGc7PBDL9LdcY",
  "key15": "4PUfM1yj49M5baDeXG2SujX1grqM5m98JTST9cTxMeZLJEDwJZU1RvkwxWhNNpdv58Snu1fDTpAU4s3pFdnWAdiA",
  "key16": "44m4e1NuJLQQ9Tyh2U2GYYtyRhV9uuTVpC3YPwQNUc9fGioRaEBFiJ3CqsNi31qyrBQZkrYgZVr4PTw1fvkDD7Us",
  "key17": "45XbPusWDCnZqECn7U4odhwRoNfVuu3mYxkwKERayMWnbG2FH9aSREn9K5aTwU4J53JkxWSB58H5W3FtVkSFxyq",
  "key18": "5zSdHfaTYnnLMywvxKDWESERCwn51Wn8twDUAKzDXukWjXGvX8B28KcEfGHE7m5rwUHHDeo5Vpu2T9J7hTDw4QQ7",
  "key19": "3eFivsE4xko1okgqiQg62YQqbtgK44PSQdYhyTtkFNFhiHfu8EgVStUfJsDeVkkTXEqwzag1vjxEjxNGAw9SQ2jZ",
  "key20": "2tF1xenySNwpsgbL2L4NHR2stnjJEgKy7gApv1yuZaWz9LT2s1ofFhkymPYyfGR3zzNh7kNd9QZzonjes3o1Q6E9",
  "key21": "qPUf1hzZofZuzSKugS3XnJgGtgWebHK8kywDbkMMRZ84aAjb9pBFPZFh8c7n7MvVnMysMGYn3HDJPRuFHdBPVdU",
  "key22": "58z5dHMhzDcfnuvX6E8aizE7iyW2yj6Zb7kARrSQYRFXo99jDn2oigAvmAUhQr1QuGEVdvjkq7iH2sfekXUX7kAM",
  "key23": "2xLFp7GAmB3Rh7goQi61MFurparUwoP1McQWe7Z5qdkyZVnk7ZWf8bzYAsrk1uuAhxCjACfrQoZxLepjKs25rYwz",
  "key24": "4BHSBLddyye71i9zkVaftF1f4Htw4oJL5TLM5ZqfQiUjWbCRgiRo7H3vJctgZ5ketBE49rE6MY2kw3pps1C4EfW",
  "key25": "51L29BAKAH2YrKGhCoJ3LNbn4bbETZNVBRnBN3kxKPMC8j8bkBD6cvdsU1CZKpxgRZSDLtkZrhsKDjuYGpJnrZex",
  "key26": "F9viYUWxEUd4bqXVwEpsBgQRdSiYAkhKv2Lj4D28fhbcaM3TA6ffgagwkwVRLRH39eq7Cp2geykPV62D5iwr5wH",
  "key27": "3qWGGqm8RsoUBc7MmumWJ8Crjs3wa7krXkuKU3nmUkg6fLngSjiFcZiLf2PJLGhjhupcYsBcpoHyVrkyWhDofQhk",
  "key28": "46vnEXwwQ7xhYsuLb8W3M89kQoiS8u9zTRwvowRLg6v2PaaNbqeBAj7JJZ42Ff8LKzq1hLj8RDQx8F3C9cUrAs52",
  "key29": "2cZTQRmnmycyc1WaQENrm98fc95ph4jn3PaA8GFff3pa1GJDfXsHSsJc1pmTHgco9E4sMg89m5TfxWhKdY6rfZPJ",
  "key30": "32pYM3276WFVk5Tt2asw89LFYZjS6ZHdkpTMemGgczrj8B6P93jN8b62XZ4BoTnJ3MqdTcaaZCqVHQivoq3Y8njE",
  "key31": "ZWXKC7aGkPssVyo5BWuWXXcsCSb9T8aV5mW9maRkEUkMtePAGpnDepcoauDeAkxYm3FWFACUU12nZ5tDw8bEy6b",
  "key32": "2V2dbuZdAG1ikkQAgdGQrBcSYD5Xz8VwYmZzFDxtLZ2QM6CtRsQ5tRKEbPQp1kF7PrwzuzvdLhq1JnwaCDuJ19SW",
  "key33": "bS7xM7kQ6gRvdpfRku4ds9NwTfDaVKy4rbaoq7o2CKBpZFZ8RkrWjWZvUdR8EBmjzxwVoszgGCc3wsA4CyccyMA",
  "key34": "4QhciJpoFRzL6ERfpKGpC3NPrchMnFaagjaVMhamBc1q2Szu4qa1zCDYZWub1d96CWX9iVrJjzQGXGBnmTzx6Q9d",
  "key35": "5XSTRJCEpekhZhhTUj5Dvy57S9Q5LTPq82nT5jqHEKYJ6Rsq4jvkz19kaMpQQ3rHy4QV73Tk5Skwt6GRJFvVhXkR",
  "key36": "qTLLUvjH4Sqo9paFBJRfS2eXB71jo49s1fWJH3XKpBJeMchdk9GKp4qcz3oxUKfWRhn7hcErdCTir3B1DfuzV4u",
  "key37": "4s2aAJwoDacJzP8gMvoU2i8UEZYp6Lyx6ajzEe7AtpE8zJrA93qnXq4t5USfxo7Gis8TL7A2f1R4xxQz6MARt3q2",
  "key38": "3wRUEfdZKppv7ZHs9najPGxVxG9N71GVUcUzj1GhUSkxgekjEAawyr3vTQEpZ1S2HcwqgnpqbbQ5R53f9g363jSC"
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
