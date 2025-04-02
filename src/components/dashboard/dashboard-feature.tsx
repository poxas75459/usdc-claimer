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
    "2JMwMzk5k4fw5J3QhM5aSCv6zU12ypSYpoQKmce1hDjkxCe3a9HhZtxmoEkC4RpYhzJP2VVDTUHSfuMccqfqbqwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kwRtw3fCXWhybTeJC7NF9seqWHVqFjYdLrE628HBQtfk52Th8fPeqWmkiQ3VFFdD6kWn8b1RREGZAFtSw8eKLax",
  "key1": "4HrionqUaFij8uD6LUkgeeLzLcPN4VZt4fPC1FpdVKskwgqZE1kqxrSggU2fpZU6vvzeUXVf2BVRhCenih5wJka3",
  "key2": "4NwsYcHUHXiUZxq7WcGpsZgHd8ahbwfM88ruphAKVEVSV73zmVAUqgJwi2PL1AHJS7HVhatp1iKxpRWbUjfFCMmX",
  "key3": "3Kdc1w5TGwxxi6N2KwcFGKjkHNER7XyizDecyjLTMQdCyRpzPgbRqb3ijTS9TZPvheFAQRHPDgXBKYp7GZFKv6KY",
  "key4": "3QSSjGa9RzdDCub6JPyC1Yw4jpQg5xS9voJaRdw82K9CtFWkwXnUFrPfybP3Xqg3GjsubEP8XpYWCjn2Wa28J7nf",
  "key5": "RiMZBu5fZzERdWZvQ1suDTSJJw9MMxWsq7suNE2QWhWdt6BXX19GsyuorHjMiReFYqvNNi9JvWQvagFvjscv14K",
  "key6": "3tncrsizA991XeegSBBcLMAPFWoQ6F3tmCbKCn5YX6F6ucapWmbCR27EwNXYFqUmhK7w26vQ26oTb36RF8AwxHQD",
  "key7": "5VFebJ3q9xnZk4kUDjr7rrzWPVPrRzJWigSYbL2Vj3TuPPviXcdJKquzAeRzuqYSFHY4VzXDeYGhbvWbBif776nU",
  "key8": "4w5cc8iqtqBk9fcGENGeP8RnDB7Lh7joAXZP1hoWDQTrJgVR4EoDmy4UghS4Sf5GheEQZ4Fq68CEEpKJPC9yUBf",
  "key9": "4exxrX6VjLUMPjpL8sjdpHugndyVoSDbrJUTNVMQ15o6ggGrbZ4F5EHPFQGFJdcRioyt9nsXupjtCzFmqAid4xVW",
  "key10": "5uVHWsiCF7dSR73qjrQZASzyqnt5FdDhk7mVEzmGzRJP89nHtSNVQxG6X6NpeKnTfjbAihiw7zTJjbqvNn8Vmo6c",
  "key11": "4yr9nHVk1dJ8AtGgbmVUDuB1unVBx3JEvMNG5gPJgp29NQdfMGYwEgsoAQrizQHxM5e4dj6KLUoiYG7gfVcQ7s4e",
  "key12": "3oxZC1yCp6R2Bpbc4Ru9eKwTWcVNUXWmZbCHPAGuesdQvw24RrWpJmCaC8rgpU11kwaNyqbYE3cK1MqiY5dfNcUX",
  "key13": "2yRTYqE2kFh9TYjnpLMy6Y9u4Z2e7WrtyzKFLjeKQpKxcVZYSVEN5V7JgZhrtT3io2TMJmiPNKMZ4zL4okB6yTBe",
  "key14": "3d14QFEbSf9uQ3CCRRDT9QJ57rsJyDqwTdPGZtxq7Evx4r1qX3qq6K7adWs6wCZPA9VDp92wL2GDSDgqhKCHwZ6Z",
  "key15": "2qEWVj8FroJDBjeXEj1kwA2Vs5naha4Tmxsq13hFY7vRnp8rgcov3ML4SY4bRyqHMSwp43M5E3SnLSts62ers9FH",
  "key16": "wuNdt8SKTGxupZXRNm9fBzeZ7DtMUUPRZexF8wD3uJ1AaQ5X2qAw9aNvSMbBE17SfGvpbtKqqwxnGGYJ1omnoFR",
  "key17": "9NezQB7tHPEcTdPCiy71KijuSe4d4zzvPiL4eeBt7AnDtL5jH2CiwCpJLUrVWx4p9wM9sXDEuXGwiGdUaRZTrem",
  "key18": "2XQU1jPdUWcXjY9MUMuW4vw15QszB8toEDCzfGzLRmpPGEQN3e19zm3R5dS5oG6sTgYN5uuqF4PJj9XvsBuxNghE",
  "key19": "2UKAt5fkuu8MMfgicxAXFV9FNzdDiX6JCMMi2ieEKfL1hyJjUi3DtHVnfUxpA7vWK7UGYeq7LB1gZ9UcTfmR9HCE",
  "key20": "2BkDYUfSMr3BSr6uJkDyLgWE6aNn5kqcDrHLZ8vuXY3RshVtbMaeVQiPyV1gRznzutcRNbegXPGEW1NUeCzUquB1",
  "key21": "FHBYs5vkZu61BJY1vudamA1ru6epHbB21NMGFsJRB2JJ43ugZdvy2hSN3v9J6XmpFdFf1uLusQ4LmdCGV6RbSJ1",
  "key22": "4PUzJKMUJM1N3fAX9hDmhjiQ4uKLjXEUxUvbYYt247yE8kw9bg1N36nQgLU2SL4euGftQnt6WsszM8MuimvAH4gQ",
  "key23": "5NNMLJtRoyZMzjoEA8VwfSByFepdh7Xk7stdnTDHj4h44rPuk8aZMxXPkJn2uUsizfFSPEKFRzTW1GXkrETtUuEp",
  "key24": "4aGg7jBUbSiCkdLfPHS9DNZYSvkWMuHm4pSze2V8DYEDKkapYHDi8xkpDVTazi16ssBUaytUiobZMVPCwgCL9BNd",
  "key25": "2ZsyeLUaUHQgTYCuUWDzPfaQSbPXvCAxjoNaLvpoVAKpC3FwXWNCQVVwakyPdonyrE8TtcsJnpd9BXoAWsfXPrZt",
  "key26": "5wyTrFWMvwQZ6QtJBAZ2n1D6GmMBL7A5zzEz3tUx5cqZhaSNbeMzWv9aYkCZy4iozUZvxQkh91nfS9h3uQVX7ULo",
  "key27": "459mHSfXRTdKHyZcAsuWq5VnRWvdsLJkNibP1yJ2HFJSg6coLd81wdnUqHRNSQx2kBrcVjkmR4WVoZxFT1bXoiS4",
  "key28": "p9YhKw1gDhEZWVGGY1WeFT8ZJqM5unj1aYemBwCYYwg5NvCTzpxUi5XcU4Fn84GniQxKsis4EDVktsMwGpf4Vq8",
  "key29": "3E5E72W4fYbHLy5fRvqxhJpGrHZMve4ZHCoqYNCXAwwTMRYvMgiKFVfF1AwT6rnd3BG73nihKuq6tZjnptwfvSgV",
  "key30": "65BJ9AqgcoyEKixcL3ABqVs7gqbb3vwNDQGe9TimJ5yTuwMiLzszTXywzpMW5V7s32nJAWWX5ag2ZU9ZQ8RqaBPb",
  "key31": "2ja4HcozaLZ58DoWCZ8nNMFHpB5tKzFMNyZFkyjEjnGEbTABpDkGbmWajhuVPUuBZ6yCHgVKAnr3cKu587US5UBZ"
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
