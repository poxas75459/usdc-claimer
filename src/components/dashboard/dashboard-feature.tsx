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
    "3UoFbqSiNCxo6ac2D7msSjTEEm37BwDNdVBHwLwBHZ6TQ356GLGfTav7Hv5sD1p3yZocwb9DJzaufnV7pqkV8UtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4dVrnoJtaaNjAgS2wSGMUAJhDUNrVVQ3KwFL8LRvbqkRFKjHSDfmRXo1q8zDn6zaeFnibqeR3ZrUtWC5tbW6cY",
  "key1": "49p1FMcQjo9eNDHxNsbAdmPKzorXCEvT1VgjhtzVp6zhGE9pAEfcgjBt2gitwVBzg7VkZUVFhi7MZYW9JpTY6HKp",
  "key2": "4ttTyG4Fkx3joB4wMgkV7yKE7GhUH22t2b1GFdJVs3dapGZ5rx95nkA3va6wkUzZbF4CcPfwYpTjwWduuj2bRdM1",
  "key3": "4b6rrq9wpevHjKMETHmD7TWuKYzu2LDNgM3hBtEUWycWnFPQjkM2db2Ui9Abdb9NthivdH7HuWRaumwXZXEnGc2S",
  "key4": "MwnYZR2e4nuN9fQceyKe53zB5msyuh85cwasCAmYM1VpZq9ypDCmgnw6uDszPNpYQT76jk5efgTqMkzaBwdcNp8",
  "key5": "5pynjn2DWFCvSRfwznyaQY73bEaNvJN6TvzzUNj6Sayo1tDvaQ6gCqLSuLNtXXHity1s2PNmpDDjx93tZGRZZetz",
  "key6": "2hNPH5JG479swVCdRKRzXqMj7mwauZsfvrivYe2yiyFqkfnQRGuQ6YrGPnDZYawSSAxLHUmee9VcyLYerizoBFQJ",
  "key7": "63Sqg5PF1o1ZY2et3z5xTHPkjQXqAdYTKVBj5t22j3LGgQtyi7oT9s2wxJoyLt1qxqjNE3nABX3BcZ7pNpz65eYR",
  "key8": "3W6pBEooz1ZZsU8xiUZTyiedBuMBfzfTCLBKZwASPqFcxRMksZ519qzM7jV4Kpt97k2PtkZR9sgMyRkgGwkZc36V",
  "key9": "4bhx9yBKfAYJySHAeh8YMMYqhqCdkkqFmnuRXJqG8QUjjmNZz8aFrTH9jLoKLEauFxcmihksrDavYxBB5RirG32W",
  "key10": "2bk5M2xZy4L34t92v3aVWfXVm5JsRVfW1VqHcQWvi9Qd7sHRVYqEuQa6SupeGQWZ1v8K7dDHJYDJkpshqveq2BTJ",
  "key11": "tQBg4Z68SJdQbktDXxRhEU4WSbC6hec2ufSmVqmKTdh4ghJm1VuByRgdnUf7qhgzXXUmRiRhEkjbLt3QkLi5kKY",
  "key12": "D7TVq7ov1Ys1M7UELpGZUsKoninEX68gZn192n27tvjbeFrBpmEWqXMuo6huBcdzkJt7GSpEXNBKCKzrYk8DFyB",
  "key13": "qsaQgLiX9PgcM6BZo8BThoBaf3Jzsd6nUiGx6p2SeZY8NWhujk5PHkqLZJYMmWvHJkUze6NZWrgTm5rw3FdLtk6",
  "key14": "5nypRs83nZZRBtxh7a5vjL9oKXjTUbjL3FzzXpeXnXaSsqJnc3vTwzB4RquTaqVXUj7znUbaDz1NmAsNdSN6wLCo",
  "key15": "ky32SJZBuySzc22eY2nxU2vTwr97FJz7EF3hie2F4QF376uG2SAjScUnzxgxGRkqrMTqm7NgbRnUtoEzZRVVErA",
  "key16": "47Uqn8bETdmsqwzaQenFYgkvq7Zj7fLvttZbjdmeJVoFohyX1a2SER7QfMUzgjTr3PEVoywiCJGt69aeqWNnxNiT",
  "key17": "4mqZ8HDgptN925gqeS2uy2DYfaGYvhkAAnoSGKkAPiM9banbEYWHJE3zovSuJixg2TgoyduvTagJhZC1RsKe7ydk",
  "key18": "359NLrq2vQokVEjQT1ochFYt2WCFCx152TnxFq7dYmnoEaqhcF7nv3RAj3xMzpaN6xUT2hzcnK68Q17f2H3unSom",
  "key19": "S9HyZ3rh5NFAUZ5xbLfCS2wyNZRr1zuzSF2hd4mVK3zc8QBz8uCPqKP9zKqtyxyBCwd55E7rHiouc616FPZzVEU",
  "key20": "3hGHF4er1FWz7BKHd7KeeoXviATVtruvifEu4WvQMpG5GjZWGr7LTdgj5yKM7dqsLHnAuBtYMaaq6QtE6gesN37X",
  "key21": "5k134DEcJiW6xX5a7zHDeQTSibW8HbZ5cLAqpVVnXhaQcXptQ1LbhzBnyG9THJMhMT5DoNBuVcbvbwfvrxEGKQzi",
  "key22": "ePVPc9iUE6hXmdzQjBzYrRPgeLur7nUvgyrvzup6Up21fo2nqEgoM6mLkA2zX2P3JPbmiAENyFfSkG4mz586fEz",
  "key23": "3CP6wnAi1FP4c2xELFBV68TMkenuAAVkCwZbsmwM2TancUMhdLyWrSaqBqoWPL4qxx2ZfoQE7v7EPDZnMXVF6xgs",
  "key24": "4a6dpnAnNaKJFarPT19juK9cqpdZ1HeuK3be24VTyhw97evkk91JCXs7vRtoTqyXR3hD8tgX8GwzNUuZ7TypkXQy",
  "key25": "5zzctDkX8ppnyYHsmFZLkkE9TZrJ5wfeY5U2UjttiAWeVcfjH2AP7EcYrP2ubaMsTVHua7483ESpBwq2WNGhK2fj",
  "key26": "3f35wzDZN7aqZ4w8V1ASJoANeGYjm2sHNkeHwEZ7iph8bbtGP19hR69LMPwC4ybkPz6VL52uSZWrBXzcu9gjkpVB",
  "key27": "LoA2tdZtLz3Nss9S5KRmBDEEu7MjHgKC2k7fjnJggRJVAXjapvhYFmgjdQLWSjNKLrSLJCe3v6ArZ7Hg2KifraE",
  "key28": "5S5v4S1vjGJX5qpfPcaHcNVG29mtTyxy7hygqZ6js88DdWx2sg1YA1MfRMPFdAaMeqWPSxYCRZTwGUSDNtXhVZMh",
  "key29": "4WyHZ3jXQk2ezkZPVtorJxCiXoX8RZsQPbaLoovyGdx9hNpZCkszRNhLtH1nf2B7zefFjRg8VafYrdWwHUeKqBSW"
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
