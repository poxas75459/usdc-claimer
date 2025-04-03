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
    "49yXBpE9LVrL6EkgzpiQDjXYEtrQZabT1qB717zLr8DQHb45PodiUkenvreYvDcL1GQEc7CLXD49JWDYC15UVbis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dHvihc55HLeAgm8nNMdPRvrdQFNGc56XNB6A5Er4scj1D59VrWgJww3cYVPaDP4JaVEW1toFUbkTcZu2AGWNYbz",
  "key1": "3fLHRbKnCeVWQnz4jgES4EEVn74dJuXLSnzAF7KssXMHP2XggHx9fK6yh7oMzDh57GF1F8RApgiuUTQXcjTBk1cF",
  "key2": "63wvSfjZzPUPSxLiWs93sAs65dN1cekCgNvWQeELZsKnjeMb55FmfEKgW6pUKfi6X2QzdRrLDDuQBp1jZUmTx3uK",
  "key3": "5Rw1EvA4VDzJyBkp8hCzm9g4HQKk2c3JC22Yi9pPk4U21WVpZ5P953cHk2isKHfVDhht4dd2qLLFH1qKswqypv75",
  "key4": "5ozNUYnAoZaTP33fGvU9Jm7GZUBv5C3TB8cJc2tchnReSXp8j3mxaqecW3wXkKffXGXjBTqPnbihQGk26SXd2rUK",
  "key5": "4NSqhmpWgmBkTB3wMinbqwRBQyaV6UzZxwVRftRbGLx3Qvr2y4GDybW8moCzhva83qdfD4tjbGY659ofmpj7zWHR",
  "key6": "2wQwU8EjdVaLn2v8XpHJu8NXbDTZa25dWfAuHh9dESAWBLL8uKr1gmsGFtV7cwmr5EwdxadDj8xrLBSHPGpRsCRc",
  "key7": "3iPV8JwwRAHzawYxdwpkrXVTqSMjdAGduUjc1KDs4BVZ5pGQSDvjPgRK2rwPnqdVKMc9XxDpLaSUkV5jcJU5p3cz",
  "key8": "215M7BH7BMWiTV9CJPKDgqkggxps2u7Lzuayvx8GDQGiRvRuv6tZ8P6Wr352SKwWpR6kT5j3VQtuW68Us3xSfv9b",
  "key9": "4WAMRh6Rc25pmKpiFSwRrKSaaym4PbUTBsJFtaVhcgLxmquMRknwA5hkjbmLf6PPSR271h9FoQGqsQjPtnfUsCEZ",
  "key10": "5KKPjuHCaUG1p67pxgzTjSYpooTPJV14hPvdbEhnJqCrXsYCYpRNeHE9vZaM5L9PnmvAGuGNcgNLo3fM7XaaFgUt",
  "key11": "3UU9LJipWMX7TjsmHyYA1adczG8ugxkQ4p4FJ43MmzyvJKDqpmyNXVgpGqBpovEniM27dzP43GHXf2vRbXvk1nQn",
  "key12": "3JLrmBFBg8vUSCMKiXQxtyy5qYEmECEWc1KYp3SKd1JuNRW98MeyiScwY1xQnPivUiHeHoJUedFNuxssivT8vnVu",
  "key13": "4yTvSDVVnqRqF3QssrDkwde6xivzbstHscgvYDUj88FKuQpNaiy56CsF8mViVhQHeBsg7kF3AJbLGkt7YArJeLvu",
  "key14": "5sCZwMa8zX1k7bEULhTzp4hgHKj6H7QWivCwpf7kMf8mL8yDcE4wcYZx15QKdAAi1jYFiDCBgKUMP56FRncWSsoQ",
  "key15": "23C8ggsKvoYiHxWdL6PhNNRQ7mzzXbZL984ExN6ZEEFoVhjiogb4AaBv5UCchh7pBwWkJJmjUnsqNcQfHVeJuQVd",
  "key16": "2v9bLghhR9C55ZgzZaVTRMij2mbdutEtJp78qniiCzR46bgMtqkLM7FS5QaKeuYcCNeoJYRNzS8T9xZSCfqGm8nD",
  "key17": "5w94VZhCjSP1W5k24ANcBsGAwaaoHtaH2qMWjqGsAoBY4SofQF6kca47FcjonzcaGTtDieE1uByFi1vod9LGvQsN",
  "key18": "5ysiVrtC1G2BhBduQQXNixoGoDsqBmRJ6GpjSAu7BsDtGNGLMs3b1iYudTQbUTmuZtqFMLFR6xv8jKMACEPJ7Wyr",
  "key19": "5w4FxGUGtawJgnpQNDraXAgNtsLortuZJRZdW5yQUKatCkZcBnGgiFmsTxiZprTBjFpuaqk4gHewzodRwHFz6FF",
  "key20": "3vJCwdbuDQfkABMhUBpeHppys27pUBVFiEwfA1mKQ7rGcs6RRfdLqFXEpMiKqNPkhB3hAHsY9LotnH1n4A5QVDh3",
  "key21": "4MLQjY37MxBakr9U8YzPxPTpjB3CZPw4do5yUwdboDgQbFqXHmDKw6MBRLHreuce7qst9nUf5PprMMQnLUdMDBj7",
  "key22": "2KRYeA2uHewFTwsuiZJPUaeLCJt524unqbLyc6wAdSo41qj1PCdGZHqBcwPNPy9xYpvaHAcskxZSUAnnBRGtePst",
  "key23": "FXDa5weRqwLRSayrvunXxVKSDhp1cbuFHBjs1CwjRNEFkxKLFxY9VzYrjUzHYpoTimVAwgw7a6kqtg4a4A4EHaG",
  "key24": "5gHmp3N19XYBua27y25oTwwTtgxqKGevZKZVyprbUuZNJ7zDHBiPZ5vedvjkYuGzYVyaPuxJuYxLwJdudHHjpyDh",
  "key25": "5N9CtCa79txwT87PqwDLvacJrbbCNPWHQkWcwKSB27iDjAapDbfTgpcWipF4txsVbuXUL1MUgDu8FjzAKPLwu9Zt",
  "key26": "4T8JtirbYeEz22NSqSWTbESu9PPRa3HuTo7F9igqBXTH9gRNo1otNHzeuHo4rex5tnKAJPrq1vCfyrPLoWuXJa7R",
  "key27": "26nUBhdFNW9nNvDphe5CbwCZAsqLB2xnH9hnzQjh8Y6i7ZXZ7dJWfWk4MxhqdwZEJi7a9ZZyZqtub1xeZYJxFxY2",
  "key28": "3pharp9fnTh5CC1t9ZFoZY4L42hDyabqFDVhUYpAFzFepDrWKLcr5nwDtyT47L2QmtciZrkDeuw5kMEajcaQTr7n",
  "key29": "2h6nGXa1EBQUqsFVzqrwfGeuRauEkPi6ZoKpup3ZAZWZAP1niaRjuAnCufRPgcDEoSa4ZkxggvXfigzTLsUpjX8z"
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
