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
    "4agWc2jaXdUcxVmHSTR4eywdM8DYJsqRwGzAfcQucnDTrkpf8bBNhCs9kQRrcfVVcUm1jUofeu6AyeKZ8Xs2v6pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N5f6LvEwLz6iEKdFSrpHwrtNEWStr8BNEprXHgz8ixWJfJuZGUevS5wtQuMaX2ggqdgsJAVeMJgucNtDZPVbCdf",
  "key1": "3N6bxgvsdPrThMcnNrXXbw8VGLPHZuPgCTgz9DeXkyvmsZYQcy6sr6RXHzUfcbopBkhr2SeNbJ3D55MZBbjAZqpg",
  "key2": "3huQtdqvUJEkxxz8qz4HagMfvgTk7sWzAwCSW9VHzLdTthGkPiLk9thnnLTBcJNnDtTBLMofNkr3VYCa2rKQGWTE",
  "key3": "49JhWvdSvfHRwjU8BDi4FhPrdut6NjDvt1RigJ7ixvtYwCAN9RoUwL6q9rnECqFjfzzPBtBZ84ug4iSXrRFETbJT",
  "key4": "TXk84jKZ4Ek5V47VUZRFRM1UdcC8rd5HtEAnHkdDQurUjsszAWcsFGg115EBsymzUKW2bVvm1YCqgRWV1GLEJ93",
  "key5": "3orAjVx3q7d6pg23nypmXf7gSDV9iif6cc3LmhGSNj7h8XFpYYikJrFssZBWJ1VhLGAF6BdNxLsv1jzTszJznfwd",
  "key6": "5X7tjr9cDgRbea2nxiwfx89AKWjSFnwBXAdxoPoiDvBdyeBAzVj4EujcnKpkF9M1n7pnR3yxZoYknR8ESEKqx16C",
  "key7": "2UNfGJbHfanNCLZMTsKV8XTiTVf92BhYi2J2vgXqNMRMjCTMj77sJyMPJvPD4UWe58TEb8cQJBuWKi7FQ9Hvji9M",
  "key8": "635WdGiEZ3rT8iyrxNcefMmSkjexUCgv86Awqk5361HE2WLMrbauEZaKAfkkXGqNmzXw2HEeACpqd6189cQwm2oV",
  "key9": "FqMeXEgYc6paMwAkPbHJ7z5skAnvu3VeX7vMMMD7czodGwzgggco7RgcbkMsdbuoRKW1ksuFdTQwsEkxX7t3Sbk",
  "key10": "4cXhC8ZwVKEx2gTAiMX4tTKeq4oPY4NxbknSKMTehQe2kGzGhnnV5QEH4CeavYtNhSVUnsyoHfBEFEnLNzEnSZ3J",
  "key11": "safNDmH9KNA9z4RTfcRaU4ChfvSRgH4qPqEEMGR5dTGw49pWBwNVQ2GmaCPDm1VhimsR5gNzEyt2HVBah51eCzo",
  "key12": "5qXMmFwdfjwi6NXdtHJc536oVMNUcoJEDKvn3XB1yS6Zb76v1iwu8xbC7Dhn5ygcqtPVrpry6jgPPgBrXCFLkAF6",
  "key13": "4bsyNpHBbabsWRLQ4UgjhN39SGRUWwHCQ2BNVmDa5gcJ7Zh8gaNXcou1ReGkbv9so7y4PhkbNSjZiWSwngpjcfj7",
  "key14": "4KKgZdvKY4FyEvDM8B54Mjeh1MkxcuRnDZLjDHqdP2Ts5qy1QWgRwZoM9yNNydUP52znKjoTykfhZMkzZVZmVCSV",
  "key15": "5mTnDzuaS5WziAoRK1RhvnTiWQ9KUuEjrQY1ZW4ooVbhu8hqA3KvhrNKQ8HW8Ah4pPzhL92N5SPKyCRNqp5c2dva",
  "key16": "5gUo4BJhN1YfiAekkJahzC4oxghvntE6fHzY6jPyzpMJdKnSZRvL1c5yL47m41bvidUn9aVaDRvZjJJNWjcTdczP",
  "key17": "4gUBmhvepTavUDkooaJfiGuzDVDKXsnZENsNrvrMgmKPxgGa6EFcUQJYmrTjmZBS322ME5FJKQ3KYGm1SYrcPRab",
  "key18": "3mgJxMezT13kPYtrZCYoY6p383r7LKWqu6NNYcxCZeku2iEM8dNN4x34abp2KDCdQrgkqT7PqhJ3JX6Z8iab7rk6",
  "key19": "3c5WRbk3b4cezwM3QG7pGxWSY5R7eLfdj3metDCqBaECzt9fbKSjYsbQtS8hpjcjg2hqHL86akffb9GU1zv1ELDb",
  "key20": "5GZ4dRXjthetPcyMiNrJKBcnbXKgfYW3bLEroFfwYHFzJr4Rc68T2m7iq1aa6cJHwEuxw3MAt6S9vputp6J7f8mW",
  "key21": "3eaCnj72r8p47URKZkYPapht5SMVgnPRCtc12QUqYpBKiTeB7F8bhCjwZsiVCZAgkWL22XKD2UAtqQ4vCkLaH1xV",
  "key22": "JGPe6mjNwm7pDXSW177Hbxyyty1D4TqtMmRrt8wvU5xB4Wv1ate3i4uTLvnkVyDfb8R2Jsz7oqhtWwVqfF6UBhk",
  "key23": "4y2r4pR9eWKbGpQbsBDTAjbf3UGsYP5mbA1FHYcZMug69iGFFfu6Wp8agVWyRnouvyR3Sg9NbYdRUE2oECWSr8MC",
  "key24": "5mKyKf9yBvpvGq8uukHviJh922FAn8tXV2TtxGbFmYdAH3pZ3kEBJEwz5QECi7RBqG3ETSdKee8sDbU4MoAAzgMG",
  "key25": "z149pCawjiVYAsy4JnrhQ62riTDGEajfedeG88JXHgSzyph1ALVTijUDt2G3K66FC8hGofaLvN6sfPFh9WWDiBq",
  "key26": "4MDLqbPUTpxnhqYAQb4w2FZDEouvsibenTZX5Qi9z2pKwB7tfSXvKrR89JgPzqxBMReAXAP2gk82eKto4v3Y3ok6",
  "key27": "pog9Y86jtcRYjj7XfSbpQfx3xUMDS3BFtF55pQfv55f27sJLgcqi4WnDEXM55RuLLJWyH8RAmyzWmb98572wvWq",
  "key28": "Ps1i1oHAQMuUNW4ZdiEKVJdxuGAuHfWEWy7D82QRHgDJ79Ydfup1ZucQpjQVM819GC85CcRqWEjvDEL6nsvopbv",
  "key29": "3riyAJMpC6V62PPTzgKzq9Bm72KwjQNZyg1RNa5tqGD6TGpfgbYtv99yyMhAmHUigpEqNsFntGfKbqLLsrrSqqY3",
  "key30": "5cEsmkPWpxFy4STG4njmdNwCYjde1uWmxLbT9EicwA9G6PogtxQBQegjPbdT18WhejPbyAdC3D8bFaepXbDqaZjy",
  "key31": "gEh4F3c1QqnBJ6kCk6TdZP19xShDxn9AznaCuLT8Wd4Lo4QPoSyx5B9HVkXBgczdmf855MYxF6g1SS7oJp5EgLv",
  "key32": "5n3PxUeRzkhKGpmNfF7zi6nA5e5C3JCq31CWtUPYe9n3hCkBUzhcbvbEJsWBciyVh3uiZiUDv9SXoLjvvyHv1SfD",
  "key33": "2knDdBtAsNy6TvAg4XFRv2bApYYx7e7syw9rmqEsSDeuNZXPdmgPkFGxh3wDrrETTP5zA2sBCsFKNuAt6RdbAfmT",
  "key34": "277B8n9hYGkWLfZwRUM9LsWA8y9iBsQJXmMMsHKpkdwHRgDqQB7e4qrgcTZB9ozTwGWtyUN4k1sWYJoa9BTThd4z",
  "key35": "4XD1swDq6WdxKfeP36sFg2hn9nCSLPTUX32EJtSt1Zbj8Tvi6iF3C15DtmKzihdELkx5WZm6HLcdvdamA8vFeAyp",
  "key36": "ujBkAoZDusZhMTMz8U4qKWGv8RmdHkEaUDL2SZXjdk46HhTyWGB381jNfyEK6JqB5c7CAXbRUx35p2YR8Pt2cHE",
  "key37": "2oviDjqr6PTfDVDgmpHLg9iSjRvpfvUgTtkaH6geiKkZKts5hivuAnNhFCGcbaP7ALyJpiAbrNA6tut4E2paiek1",
  "key38": "41TWmzrRXvq2d9sFRNtBuRC3XWjafu6VViacJ7bkNfiLfczzcTpD12PuR6DB57PvLP2S9Ps5SjbQiWayMi2oiJSW"
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
