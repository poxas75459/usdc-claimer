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
    "4FTnkaC9ent5aGdyYrBq4Vm8veZhU1ZrvxB4tcuvgbaw1jg6qnRDpuv9BmvNXjfAhMZh5ZjNsDcwnbfXzbwQnjCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ETEbfjAamGK4nZZT2UDFoztjCF4DnubibZT6dLy9xHHKBnq2qLow17vsaEn7Bahc9dBjR4V7tunHc4P87ZRqpAE",
  "key1": "ukVXoE1FYKfsMkNRx3NRjbiFZ8ggYQoDiS7RW69GiYLtiES41Fo6Xz4aNNsz3BBdS3bfkveCeDQZq3LgGqj5u6z",
  "key2": "2ifBAxR3rnuZE8BqRvJhs6N1dBfGJtsg8i7DtLaoDifhk3SNvU32jfYGnjQtsRVBUzLDcK9AR4g78NqQqp5oRMuT",
  "key3": "2vJBruFmAxrb5SckXq9deANDxMWWVQpYd6B4kAYYhNsmMdB42TGRFhugrQcquRXdTKG1kpjmSx6KaEZeWmLCzPm8",
  "key4": "gwvQcJc9FRY5hWygpyT5wPURzjkva9NdTokGSLaQrvemoY3eJNHU5EMsP7ZRe2QDaTt6gGKNpG5NMqRjD9MknkJ",
  "key5": "VQFpCDTtjCeKVHEfQ4ajGADBCHwgFsXWQSUwoKazqQYSWD9nURZR52wLMd42EiEA2JWHSvjBUixJQuVdTW4V68o",
  "key6": "5ENcTefnrHe9iXzeTPf1Di9ccc1K6TaxFWheCi6t8JkvwYjgg7DeWU1Lg6T8oXfJjeBq4w3pbm7FVqz27V4swepV",
  "key7": "3BF1vBsfmvHiuBCE8JsNSovzuVzZ5zucu2SeJsh4wwr5M5C4qDrSPLtBkbqyfBa3GcMurkiJXF315qVDcVQ95tFU",
  "key8": "15swtPhFP889CAS3GNDtDSFdi5JFWF35qwLPUMeJnk2JGgLLcPLkZSZRkVtReydXe3uNaN7dNPgmhXgxwsqZbPz",
  "key9": "bPcTupj2Nto3tie9kkJ9RLPD9Ef4dGrzGc21JXBqRnbQ5zYPcWfDSaRFLY7N22PsYd5u7m1ZtcB9MU1dq9to5oq",
  "key10": "4X2gQcD6bSxBuVfsy6uFR3FDXB44YR1RoBuv2xkSqCdGDihze39AoAvCpXYySJq9NHVN1K1pHXqkpDPTDMSE3BkF",
  "key11": "5E1AKN1EPwXiPmuVHhGC2SqwTYU6ggXn34gZvxNmdjijcwqiKFPyqxNmE9Mbsk1ihvdNTvanf5dkukhMdQ4SPLEh",
  "key12": "5Nj3LoejML6QMVNgyKUAcU9ceL1eDScnbab3Pe7gyUiZ29vMDM4iHnfPQQPkXNiNCCcYrEifyGWm4QL9WAw4ZLte",
  "key13": "5m8hFttacqaNUQH3LTtKdXFEchJCZE79AsPDXqbCSDwsvqN6qEw5d9rqoCKL4XapSGZf8os1bqn4sYN1tJJvep88",
  "key14": "5MSiuikzkGQAcZSuJLPxi3GyenYYgFBFZWBFgjguqGaqidTvfzcbGvsdF5gTyZsCNAkgNkzHNLN9mkx4c4Hje78M",
  "key15": "5TaMYBWGy7UXpvsSMTNMX5XPX5P4SCHZaQL3qVTUusvjFecGjfUxzUxiqGbC44w45b231Jdg3uRNahJrXFq55H89",
  "key16": "2zM3aNwG3TxUKz8PeshvGVjycY6MNsK8b9acEvoHsT2B6Ta7gkYyFSdYRUU4Gfrp87KYiKHjLM35wkzVGXE9C1pD",
  "key17": "3X57SYPqkXdZE8k1ggT2kuLRvytZXXptAFkezGLonrSWUeBb45FbnBGYUVPqEsZo35kscAaC8RrydXZ3JzC3RqhL",
  "key18": "3x1CXvLwY3mraKD5kkot1exL5TjTEw8kb3G6bSXJems7eLGCtr8f6vp8eS9gqpTMTPrqU3oSSrwExgM8sPAzgzGC",
  "key19": "36xRXzCK17yeiRLjfbfnDXxvV2sECi2tJMM2gEzTYm7SuNpisuSkRdfgxjXyzo8kLfudCb1NN6m5yGcYUqV9tLDE",
  "key20": "45jyQyRCSJJYhhQ8eV8MLsKpRsEvMyhsjd7tCupKADfv1rCdisygi58u81oiJV8GMuFAk7rNL4E3W138fDerrCCL",
  "key21": "3tzYYTBPjgXoCvKhqkQyfoAzD5EWcHLF92mEKenfpgvXnZtbnswPV3Qnw8HFkB1SyLW3vVzvc72EStvS2rmbWqL4",
  "key22": "4QEbZtS7aYerMftoX3yDgFVSKJhX37cPz1zJs1D8pHzL8qe5GzAS87QKXqyJqtktdqm8eHG2czyz5xUcuUTFf6LV",
  "key23": "42dSkosKgazVjnnJCcVvdDnJwpn2bAs6avFHAuMsq3eM5W6ciXFK4L1m6GmTKeg4whVL5Pn3Y3ELM7sfMmHSLdDs",
  "key24": "44THgGRdSxdCyx5mFt89YG7Mvx73rnF8riCnTE6JStr28HyXiE3PnkK3MyB7nRp5PBPndfiZmzHyzXqzAjnoSEd1",
  "key25": "3r7KGPwmdAkTPcmyDQYAE1ghimHXpMoajAsDg9t2ofFcfMq2dDqirqTWZP4pc8YfUd6ibUxg2SDqa4kGVqkBMmFx",
  "key26": "2cWxsXNV5wuNuaFeLf34vnBYWKd2ugH75dRPH32pv1KQKPTAgncqZZbmqAc9oJgDfSRztH3Kn6oaYNRjBDyYQJZH",
  "key27": "2YMnCN8yZEkhgD2mVPoPdahLZAL4LUgV9uVwyuB2JFAZKWhRTzZGgWfXdZRbaqyMdDD6WY8QtTn8WfJyG5oRvD9T",
  "key28": "EXmQfdV45yBqm2xWntmHLyDuWPgfrmMrdLpbCXsWrtEK7B42M38hqe2DCz9BdfSt6ChtqYxWw3kqdziyJYUNK7J",
  "key29": "u6d2iwR2T5gKGXD6jEbkzK3XLWSRGj15epEW2aq5vr5orbNG7cJXg9o6m1mu8C2ETkgxzzAsxSLQNu2d6drZ8QQ",
  "key30": "5qt95GgPq41xFZJmhhZKbcMfeE1pb3JBNUfh5XJ1Ty3Zdh1bs6Jeo4me4fLovZmdVGWxrDDzxcKkpJW661iQMEFs"
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
