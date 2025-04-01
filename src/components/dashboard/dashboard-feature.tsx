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
    "5nuf7aCGdu8Vd2z8PJrBWhxgynDd4w5WiA4xdmUrkwnKCiEzHriV8tKTbqZ6S7vd95stkuPvL7KDCg3F9excHYRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCPQEjobqeR1kv82BwQtCS9d3fdvXmA8S1Mv8tJpGyiJV9Cdr4MG2mGDRNR1dBEpiruLpRbWyMQL6sYLShrSgZ7",
  "key1": "2xvs5wqc9Ggn1AUF2Aush994s9yagieWyFXnXbkVXZCZHQoQgMM5Eqbh8LxMRzjDNcYpTmEmToLbG4kAe5A4S8vo",
  "key2": "343NJYXV2hcjsuJ835uKoLwML7V5dPAUvPuqXkjGUzrQinkEJbvoChRb1Dc3xZS5HhQzeFCcmRAxB1n3RwMtVZPv",
  "key3": "5pWKjm7eKy2MPZWN2hHY2TutiXyUqgxt1xjJVQDGhCw7Rq2zACmSsL16mQ95FaQ5bJaf9JqjmbdeRGSKLX4YLuy4",
  "key4": "3jahaFzPvmp3VBRWUuD8EUHHdkpnps2wkC1SAv5GxMPH7wjmteeHCoem4q9JY2xW5T6iarvGg7x7S7UZwuKyJ2mu",
  "key5": "UVNEQzj5iXNMQMEMoNSgBWh4z6iGCB4o293CY22XkmbcjmQjvfgfMSzuxhtSKifbUfzqs9baethzrF5i8odDB2u",
  "key6": "6SBLFx1RgtDeCVF9NsVwhYvbNvJ2uAXoayRSu2bPzUThZQew7VQB4dvvFRBQaza5naVfuAefiZgHuaUxLHWJ4kr",
  "key7": "MGrx171HdYQSYgQGvVdaAmWtC6bsDrWX58dqKuKPc81g8HAnNimxxrBwmVZPU27EgKY8Mw3bfF7WzbB5gwNeD9T",
  "key8": "25H2LRYmWYDFE7ixN4GuqxqtLZqbFsZULWsk18hUQw58DFvAa7RGwXqs5RpQNnGJoYbkD8K6vaxKaB3U5cRjCjyk",
  "key9": "3bbwphw2JYAFGEuetrGShwbTHCiVh48ZcxSekUzaD3i8WgWBj5XQMKpb9YskEQCnSgVkMg39mzYYa96vfG5eJwnD",
  "key10": "mdnnqSAoDG5G9VTeXBdwgoNvCBVGdoH1fioAUkHTPMgqT3daR2eHx7WkLE8V8nsRm6iDt6HHcWhE8JYsr8QN4hs",
  "key11": "4vHY1HCxMHjE15AP1oNnUC1c8gYiFJsAxA2tGMjsrjTtiLKC6FpH2CswTSQqUpJtGAT1a4sv8TjUToA1fytFY5zD",
  "key12": "2VBetaVFQPAUDU4ja897EvEvYTKJXu83toPxRhnCfCAiGL52ZP5gAi4F8WAPGf4pjPrhmNkhq8mHMLGSavurGsFr",
  "key13": "yKcpVtKL3ReyrnzuhQkLhUgd5Dpp96PNN6DVYy3jkedLhKU1yESNKuh7FETLurceL8Fm8ew4j5eDwmgckn3tTrd",
  "key14": "2dKAA1WcfnWwn5xtCp3xyUdNwTgMTE2Ho7Xj8nDjsk5RYdxk4hr4qi8atX9hnteVgSeJnuJLyD4g5AkjdBic63kw",
  "key15": "66ng8yb8tFnqYyR5xuVe5b9ufXnuojoPYAoZiAF4GCmHDGQQwKyEtsqo1Eam2ggBoPUcNdR2vi9kc8aUy8J11Gwu",
  "key16": "4gXFLcXpLbSZA5fCwvTAKgDpW3xyRMBdVkjiCpRYU7u43DUa9UNg69QMLaHAiXG3TMFPaqHNpMM2zFLDeqnr7hkh",
  "key17": "2hXrvMvtZA92MBcs9KWCcvTzUYE5pavQLCyYGqkjDENVZ6cCR8SBgiRu2VSLv25vMspM3iPZJefYCy3zr6ykkq1S",
  "key18": "39HPP9GvqTrbkgLosDCxjkbpd7mHjGqZbBABGppsErGsjEhwFu8aXxgrGiEWXC1HXP1UWad4XZXu6yxkq5j9Zf6R",
  "key19": "3hTKVhHTUS3GRJqLoAZYbPGSTNLPmRQMP2aPHQb7tfs2Dm9pAYoB899W8bnr7bVxvZu6a2m7AS4LmJPN3pt7T6Zi",
  "key20": "24mrrF28QmTq89jauSdQVxo5RgwHjEVkHZJ3g1avrayZQCWkz8pJXAPcyqj7QCLKbcFZw9YywDF8TDvrzfBDYACY",
  "key21": "GU1j4ir4FVghwhoWh9pqSTBZmzgDA9ipQWeXdKNTt7Q9kcPdYFaXyZWPNk7UZspDvsRrEYV7jUVYdgNwpn9GEeB",
  "key22": "GbmQMxZhuc2gDTzpHpMV8RDm6zJBZsqD2PStR82JhpHZQk1KtohvwcPCTSKEWKzEiydzMC5t94deNj5uyT1L7e5",
  "key23": "2Q7kdpeKLgz73SEC75SGyGvfGqrZYb4sCuuXxkVvmLpXJmqBEB9dFiLjP91i44tuYj8w3eczbVgvT9PLgctAksw9",
  "key24": "5LP7DgGb9kpyvB7P4yB49sEPiGTi8fJv75Q3DQeHKfJ6wPgpEA3Tv19QhjLGfMSnbq3CZTtCNv5H26oC9cFgCtHS",
  "key25": "2BrYHegq61wCghfxTuTJJaoa5AXgGwEnaubo4mRu2fEHiUMvZL52VyZeAna6i6BnpEzBozAJtwJvpkkFygacV3tD",
  "key26": "311AYEczFn5igfrQ92bTdEY5eKXWKypDcQsTC8jm7tZLFFudKHzaHJcm2VJfnzfxmPXNG85rQ4wvjUhH9Xxm9vE1",
  "key27": "5gg3JnfjtbhkQ3JifJQeDoHRvYCTtZpvqT5kAHah8fv4VqvZfEBtfQ4kGkxvDLyaoYXz3aVLnm3bGrFJPk6CvfAJ",
  "key28": "47e8ZLqrXLZsSw7eSS7NQJBtWSUKdSGquzdg3wTbwSf1e18ioNXUGuKVZnnwzcaUDGTGBYBNae3Rom33ZrdKs1ij",
  "key29": "5uLkg3HK3SNMFDDvgV5Ed3qWCgHp1j3PksQHCjbmM8224ZiGYXL4a2hivU2JhFch4XKTonXqJLmqdszapTVU6TkJ",
  "key30": "3bv4k7ubhUTHykMvZiXhawwcSTTaAfUqKVgXtxHQDhksmcsn3w9JVer56ZbVGDWJEQ7sG4aBiDZdn4af8fjCfhP8",
  "key31": "23BYGZC1JFnr6JiBr5gTBUgbo6HNYqSkTRXpLWpbSKkvo7nZ7amNgVyrqa2hzxuo7vwgSf7qHDhK1Ribk9m26CXE",
  "key32": "36zrKYTXj9ywvZHYmKhPBV9h7P7CBtfmbfhYvWxcSXNftWp2VM4SZfp2QgmhUMpcKAKZVogv6dhB5QuAhCLJiGUb",
  "key33": "5AQoogG18gwQfNVgjUtFsPuQ9QmP1UoBsbZWiJZvMHMxx51cJ15TLF5XsMPTBx1NJzLhUK2WDo6DKcP6w4umEEuN",
  "key34": "MmT68DYxoGGDky2Hny5TAUK3JTRBmZrzD5qwGQqmambU1Q6TpwxPmhyiJKiyv5fY12C8CwJSw2DhCMMqAXU6vu4",
  "key35": "3o9x7HLYLHW3VrasHwAMERJv8JRvzrSTA8EXEjWxBmSFofepeMzBdNDaq2mU3robjh9WxcrarJvViiCDsrbnhv5h"
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
