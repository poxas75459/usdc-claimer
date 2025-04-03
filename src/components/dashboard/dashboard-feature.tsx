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
    "35wZQhc3FwSb1oZXnCzWihYykDYmwVaATjHFSuj9NRHVy6B2mhrvrBFcbyLaThrZmkiSnbuxhN1Nxvusf2KMS6XK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "639qw3Z9MSdEqEkw9kw6t4MczAt6HCZ6QdxhKpqHPwMVeU3LDxiRnGDneF4i9hUw6SPAHtR9gvnwT5xTNfUaFsjw",
  "key1": "CWtkfPAiccWSirSbkqnDEkjzbTGMQ49csnwgXKbzVdfiPboGwe1ou4GeHa7uq87Sq1ykERdaGBRXKpqgR1AmsPn",
  "key2": "5dU4T5QoQXdRizzG7tpesjhwkR3riBRDJQDWNtU6zgf3hYiidfo13FmuGANtULj958DFBFZcFhcX5nrRsmvEeEb2",
  "key3": "35syyhWNm12JXeiC9ZFQCZMhQEdUKGXHKUhJs6jKf6P8FbDATVNqKGVWvAmyvsz1TFe9QkYPfRjonz5ZWYjezpmM",
  "key4": "4iirSAU6zPwu1opehmhrTzvscUf8SXUosL7H39TpicFPApLN8vyjY7kNtDbAcdfdDENMbFuuBAHqBgiRR8sH9fVP",
  "key5": "2Wt5knUeCvm7xQWh5TqAb6Lv5pG77Mpi5fa7y3bv4AVAeqd8tMYpLrQjrpmXHoUK14YbotVnKw4UkgotjzLwjbNN",
  "key6": "4rjokpcLJ8p34X7YsSC6W9CMfk9yYzwz8fAGt6KyT552hS9ggVZkF9L1cgdKjwCDRdjBa9LyEA2BD6pcWzoMZxgz",
  "key7": "2Q5KZTim3iqK7VSVcreaKmQEHVKczZiihJVUXELWBFadGkrFMxws63CufBLhYhasPod1Vk8QGHD27QLqDG5vHjho",
  "key8": "BbheWnd7wsqUceJMRQCKiaH2suMEMrTyRTZGU5vNgRMCzAbaVTgvF6ztJNNGQea94a7NUR3WPozpeyK4SCBS9aM",
  "key9": "fidMiprhCnNhCP9HUYPXbydAC814diqvuFeHKL3x54guah6t4N3oAuJ4yDWVH5zgXvd5bzvHQAVkDQx3b1CTx2u",
  "key10": "3ZcRR5m3LpzH84db2DwAormQ7xrNNpe24okBUXbvmeVwxsRBs6eoNjShfmiroTWVHnzeFt1BQ6Tr43ohxWHiEAAM",
  "key11": "31ytgNGER4aeAjTXdE3uUxx6m8cgCaS3niMNSJ1i8KP4mc65ni873DwYNZgLtuQnLYRRyrYowSwwGfnkTfDakyve",
  "key12": "5EHJtkc3ChKQktDtuwWC3A1iMvdxM7EZiqs1B8xDmKHSkGRkDYPQp1DoGkFuoERkXsJvFp67TH13DvTJw31VD8hy",
  "key13": "3VJ5Z2hLjRQZEWxoFJFpnXGY6CRMuLBnSLkM2sXpFEeMnz2wyfBQNRWFiMvSWjVZDdURtyCV9NDvaBCaQWeUr9yS",
  "key14": "9px5L5MWjemNg1LsXkWwSWFycUtqqMA9yi2GEQWH6mLxeaqsPsm383U8wrbXCQBq3HmfDAYTznfUZ1dhB6mpBd7",
  "key15": "6W3PoGoWrsYet4SKxxBKcgxBCAqik4bYcqPETbqRtroXGNR3yhMr9xrQBkbHVY2235ecm1XTsoxhJNRXCjCq9EM",
  "key16": "5ramt2rb8q7rBDd9YVuiMCoSnymUAydgHPdwcNevTo9GXHFzUJNtjGvEtNBtDoWRGuE1eqn9wfZXne7sMyAeHEER",
  "key17": "5BiveUk3296tzVTiF3tRBSSdYojwjvrzb1FjTyEKPwayhEMU6aMZdLbyvpy9fxUPF1UUXkF1izoYAYgrU2wBSxvb",
  "key18": "2ntYYc1pKjbqVW3XMPD3kCoR95A8fCeQcZ3X9xywpS2UvFbXxMDSagVZdgWHaDc9JNDSY2KmD2puLSUwUSUx8WQ8",
  "key19": "3WEV79YczKSE5aNqTPVdrk1fbnycEHTND8ab9tbm9nZDJ1nPceUinKJMY7cy9ivXKjpXf6KvyJHrxYe1ENANoQZp",
  "key20": "3f6yMFgnzJbKET8FuLbNgKk9YCE3NNtjPVd86otcyeWcQqyYBaNVFqzL3VzUUUfitzm16ggVhi8PULNA1VqwV2Y7",
  "key21": "5NLDCVMtW3W4oMvz1Z1mW9qRwdtpcgLqrRmyAEV3qQUs4EvRUKGbu35etTL3ktTxWgcBYeUCuRKH6wJTzep6wu5V",
  "key22": "5v5rXvUZMwrhVMMaLp5JL6LALe7GUVFBGqLkd1tMtQjVqHhnh4MPKGzLUjTmkKkr9BFJBZcuqsoEF97e1DyNHJDD",
  "key23": "dcL9cCxjcdoy4TuGMr8F8jZjXG49i5xm22354sBmDWS1RtndbbrM8mpbCwm3y3oHKAZZMz3S42RicKedwF3Fz2t",
  "key24": "mjjcW1tASnTaMDh16gKteeza2RNiMRVuERvXVSBKLUPEFFGagFA15cXkjffmYeZVunHou8PmEPPMeZBV9RnDjef",
  "key25": "5n63Yg4mS8uQterG5TEW3PKrXkaLCKRf4cUH1Jheq5F6BL12d6cABZoksVeLyiL96jLy6z3cUgwwrmKNaVR8dSbG",
  "key26": "3sT8Z8P1tmx774Pn2Qn4XJnKGN1XaGomz4DKtbF1gCcYh5TR6FhPLRgu5SoYtKTWXRtE82T3knj1Hk8hXG2qf1yN",
  "key27": "41LkoCn8S26ooLHM1gBkcUUNqWD7BqbS5BwAp8NDf7kx4aqHssJMXEnuiBFPofu6qzaJfZaR38WNLZfdjqN2PZ6z",
  "key28": "4KpnB5upRZZX11Y4hnuzv1p9mXyd2tyzEb3izVfURnMiARggcebyAANnVhdFgkkfjtnoc7YvUQpMw2LawkRjfMuB",
  "key29": "66DfYih43x97MHX1WhqtwPMTPmMKHRJ3jsTgUTSHC5bkCdBa1zMdX6HvQhXKLk4iHwKbBP8NU4NEcJ98WJJjoEat",
  "key30": "3eWb3KnULvKnBMWVRvmYhg9fzpSSD3LJk5cepDCMBqH35uXcpU52AoDkapfLwaCMXuSi84iXX3kngaZZzK9yaCyv",
  "key31": "4XQchLPKB1JEHDcxQPqcmyGkrN5CnjFzWv3hUXAMSePBGmmT6pPT9Q8G9EusRWS1jRfsFpE8kTQsNAj7d6JGM7tc",
  "key32": "2MTTJsGQn3CdJ3yE5p4YNPKorAiE2F92ehhF7ip7bC6WhmvDJaHNoWzKemrJCxW7CEzMarTj9GKt7nKn6HFWBJez",
  "key33": "2xLMCHgNkGXw3x58Y9UqDCf13Fex8gWjXs5GGVdhfT7E1zw9dM9yVTqnn7aXtYGPDaQAhNKRb8537XEuejQnDDp6",
  "key34": "2BLAcQgdhna9ReyHs1h1W94PTGH9FaBnJKim5BZJ1wSLHvvBWGoCUtfYHwNQFCi2Dyv8evR1Qb7ys8pMUZ4ybpKr"
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
