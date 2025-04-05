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
    "3a6FFRDZ89zrpbmjzHYANVRX93qHyZqPRPtM6PKYLVqfw8ZENQRsphYU4ueZRktzYqkeEUNM17n3n9L6TczkzMXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RHsJ9xYNdjBYdNu3sKE5mzhpVyLqyi1MkpBnQQrtD1wvFGvsXFiYpNcPrhhPfqgoVfTkpyyUkBQVU94gdgt2VM6",
  "key1": "5AThKXAUJtDfW5udPvBRarEL9Qo17kzsMrsaMaaVP8piBRPHYs6KE7je6rAHY2aZR2W3kEX9jVGENQF34y4A2eWD",
  "key2": "5WX3KcyTCtyLyNr44b9ENUW9AqEeNGjuoChDb4VJAdS6zV5VNsbAfRCvXGbwUBvViiQ49TxwDLc4VxQw5LLUk5Uq",
  "key3": "dGaEYPEehXhuxPbAUofxReewBSB3fLKbBNZFbmm5DR6eDrADL7umdbG6y1KUHBoXX4KxZBS4puo8tVFVZ8xEt3B",
  "key4": "4LrrbvFH4sUtytK21pJZjgabmbqn8p72uLKWkokd6Dqz8iSXRvqj7xy2BSvb9fhKSEVivkcPcuRgpdGt5LU5x3fy",
  "key5": "52fkN9W2g69RGRmWk4NNwe62gkeAHce9xdaw3BPor2Pr9zRV2RTopKDRKcab3jUemwrZctYmTJqjU5YUNmc6t5Ur",
  "key6": "5oC4YLK4Jkr8DNk7wUc3n2UeFeKz8jmSYZ6m457D3ctqbRVr27h63fsmtYXB4YyUviteYL352qqxNttFt9nezxPo",
  "key7": "2qwbJpvePe3gf4xbzu7yjEaykr9u1YrnjhprFhP65f1hYh7YJcniUfU7wMYAvBBn7mjXNcGZisp68Mk4o2ccajF",
  "key8": "5Y5cQMX33BLQtRZELEhAEjWSmBkVifv3Ku7rLy3SWLeTjLQHZNSTHk7pDRVRi7Da274fw2M416baPJJeSPL14hb",
  "key9": "Fo1qP4BUxdodd3vqkZgtWeWP1MUuLuiwYrNi4gdFWJd46q5yL5A39Rn1Vyp7pjYXuH128Z5thbHKNKJMwjjpL6x",
  "key10": "5VzDJDwnZGD1DS4cWbFzLjzBrccgSKSswpfzWNztwWM8svQFTotASysYT46cM64rVoBXgrkVnyBB6NB4rmFNoXRa",
  "key11": "3dZ467scTvHeSHJrd5RqU1QoUAQZ5DMn7XkDvWdFe5DaDnwXsgHAhRY6jPBaRbHJVPhSAGf6NNUiVNuXc6dpBAEH",
  "key12": "5ZDkeQwYjR3cdNvDqZR9hMnurnQLX7XfVaEwGj16BLKm12KXDyRG4MectGgw33bL1uLnhd3iurjXRk5jxeBQTrw6",
  "key13": "4d7M18ZuJYgTSjXgabTNF3zAHwyDwe8oZdsaHNzEzcLQF9BXXMzdrrHoMUQvKSwcZDkYAdAfn7U33bWuuoY8hRs5",
  "key14": "2MEJt33tAGPDi67tdhTJ1xDeETPxRzUPT3Bv5TxYYFBgXfSikUvd7ZRni56txrr3SqAm2xcyZSwhK6tMDdK4Vvyv",
  "key15": "4Cimf8bn6vrVvDuzsN5u6T26cd3QRZFmWAmR6xSm3h2yaTfpvSEoT9KD6sjt1Nq8o8bAZhcYgEuAe97LNiByb9BC",
  "key16": "3sbhdTQiGGbdNREyMaW9uQsVMMKmoxstFAYpTyNLChCmBKzzsrqen9SAKvmKiQ5m7PJBhZJncs5n7TgurfcYFPLB",
  "key17": "4JP8BX9TkNspCQ7cLzX2GksX3szQ2cgwke9qWwf9AJY83eBoKVfo7xT8CsVPYZXxNsG2DKV6XZqiLLtg4vJpa9W6",
  "key18": "TmzEukk21717QKkszWuw75zPenXfF2CHShwpkgaSu3Vg3n3jctSxghGCMtsofDwWYTvZZs3J4uDhuyzcgdjpSnc",
  "key19": "2P5XzAjxFqtd97ehk7M4o38cS132KYrpGn48A9k9UFh4yc4Y5iHc5XniJvAxau78RL68qfQuaFNQRCcZTPpsnXLp",
  "key20": "5UkXX5BZcJMcUjEBixDJA59dzT6i9qiErSR6Pd7amgrC7pDL9Gds4UJpamT9cphHvvYMbYRywkcLPUDYThS5tVJQ",
  "key21": "3uxPsByPD79s182wPhd8Jvy6iSQMJr5WcMh23Jw6PSnrygdGBFo5qNWBuWBXVGEVtDg3ZoDUxR2By9768akjU6TZ",
  "key22": "3aKZr51aa5gWPsB6yFjvSEGktyhed8cvWiFKYiiPfaC52Fi843V5kMGGip6J7bxfYCZkg7UKi4seDc977bafk8V2",
  "key23": "3auU1yDkTUai8ouyy9rE5TeVTxaKTwW6Few1QXgQXYUKqNzAyYwzsg4n7yPTp5cxK36oH2R6i8Fa9iM4rDB4sh86",
  "key24": "5pSN5XLfeJwq8YMTAjanhQRQVa1bHYgdNCNThZrdh9ZH5gd77EjeDy4C12HkCRDN2wmY25MUPg3ByGB5WEKtgAo4",
  "key25": "Mgya7bjzDSbujE1ddDSAKMb7fq8VKmdrmLFjnGV2vEzQb8mBghn5YDQPsn4167gzYsPoFSEEXNLkVDUQSdu7whD",
  "key26": "2APUeE1TDMzPAAy5bHcf9cDNLQRMAW9rLDC8AR13BiQ6mPPLR1YFGt9DySKhBwZKEhx8nPmW3ySsoVBU3eZHSnMR",
  "key27": "3aZ98XHRoR7qeTdLVfLYCkur8933B779pQA9oZxawQ1iQtLumDsmUY5sEuiPrc9JGnHGJCb7mvuTxJo1PZzT1cTb",
  "key28": "4sBEdQht4ijPw58XYQKFYgXcXdfBVqvj2txVZqHiQsRGU2J8YZ9C7ohZs5Ap9hraRYh9SSC5T749qejx1byvn85t",
  "key29": "2PFqWckUfYf8a6h4NTxn4pQq6wCTVhxpv4zJT7xbSyPRxJYzUv3m6owPozHnXbzUtuRC2bBKrqEcef2pyYnBSVez",
  "key30": "ncFHMb6vGwbzSTKNCC1ZrToezv1ZrcwffCfM3dZ7nU2YnrC66dUn95jsWrrzXvo9VXm4bY7sf87pQoKE38NA9ZE",
  "key31": "3ctvVJGRbCNMBi2fKdX2zwDtob8fCaoyGbFiTx4HBhr2kiwjAFzbZgJN2S3MbcHCr4W11JGs2CNaoXmxVxuEHADx",
  "key32": "416pprNryQ6x69juTPMZ2WGLA9cCc6X5kWYykX1E5K5e9D2tpMjn9ndEfG84ECsTLy5XTG5q9EPo6sSaSW1Y9SJy",
  "key33": "5ixashZZb9CuRQvDsqtirmZVispUaz1F7Kbnhcb55Tp72GGGXRxbkVSFS75YqCVjMErn19pyhx1zmemhQqwUuRHw",
  "key34": "sJD4gGi79Q8KE8HsaFP317tLgArfASn1TcM7afZBU8unfUwNMdsYZwji8AGLPU4pYK3fPnbWWW7sto8HyrhLLLt",
  "key35": "668xhDeNLrvu9MURvG47wnheXHofyJP37oxaFJgbvHHKQVkAzdQi81dbLM5T3zVJZunnPJBv2MHsxNZU8Uyvzx7n",
  "key36": "cN54XCYkULZvRfLFuuRbNXthg5MNeNkHxndnJYBg7gD6mEMUpiRVi9e9CUiuTeRnPq2at84n56xSjF269SmhhKt",
  "key37": "4Y8bxYJDiz8UbJhX5uE7B5Y263vPEMhwTj7B9tJ2kU1v7ersrkBXUDPUcDAvt88TVGd8rBPtumXTJcvH81WPaZKx"
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
