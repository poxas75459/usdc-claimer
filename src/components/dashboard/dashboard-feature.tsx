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
    "3VhEsJACwVJhBGWm3W93oPZJ2ua2LWMz52a6a8AJrLUALcELSGzcrQ5GefZhAWr8aJNTSUfdmcCxW3XuXnKJtWvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GzrUsXLQUa1CPnWae8CZh19Jk9ngaLXZp67ntMubNtgnKeJ3Bs7ybzjuLMPb78He5VTFp1LhXt79DnPnw6fyUx5",
  "key1": "5QfRRGHh4gCNh6giz4G3t6cMEUctDcg4opDQcpQ53H92A3bebzjomLRqa9ttn4zA8nzLbjW6iETxUgfmaV3wH5Xg",
  "key2": "4FEhvjkpPcNutBv5DSDRTLojEhLFBL7i3NfdqJuuUvrF3c4xbWTZo2p23VFZhETkqDpS4pNzFe3nofvjRZeZpMuR",
  "key3": "3qGvygLmDkqRzJwLTHosDTjdqUadUxiKcGq8WKZUbxEuCS9U68gfw7cg4ZAH3paDa1V7oNjcu5sLgkUJuExc6KTX",
  "key4": "3pa3vzhiYvwKVxqaMPzoSefdR2LGTARC8n6KaE4xFp7JxUYTszDF47Jz4zvCZCb63kAmH6HZbyqEH8CDaHoWx2EQ",
  "key5": "3oUZoqpkjHji9XVfKHGEjcTCAs43QGTrampUXapHUzkcyxB26UADJkvDcKJJJdTJK7qiruraSqr34DR6U9RshGpV",
  "key6": "3H6cfJaSMSMhcVKd6SKSymtvDbYTd1A8cGmvZJ5pTWRKeUFDmxxkvEJbVBjER3kV2CC8wpxRDJCBD9DhKKwXAEbB",
  "key7": "5ndPGjgpMzzF4hr9HbL2kMu9JfemhKjdHzT57iGhBCwzQkMcAM7kaLWvohvAJwaXei2AhFJMt4eLDUe7LbDdzyzf",
  "key8": "yikWVEhH1nFLtzyjYwqiGd91PYqh9vUxm4PvMCdXjtCSYccdJukGqnDy6ELjBdJe9odyNRkjAapq7K3BhtQPQHi",
  "key9": "38h1fEykSxHfzGFerkH1F87uMXvQmrFMxk39BbzJy3uPUTRbGshBKFJeF9L6aWdKK5gbg1QDjeSvwJahxZ44i5Uy",
  "key10": "3yFgbWD9GVgsFKEBFD55uhC1RzKHkwMVQfeNyM5rU2YDa3KWuMSRqH1TxjFX8jKfuz4r6YatZwDHjvojwSq6Pjqu",
  "key11": "S9tXqLcV8vCz97hBGjLAfUwDyNn91M95qkQgK4kFytXkhhSKYQjUcF3zAxTud8i7Hdhy6AP5DLpFwQTHuF5X35V",
  "key12": "44uPVpA28Q6HLyisfR16L3jqU82Z7gLFEfUMPovSnW9uMKBn8dPaHBs96YFGKJXnGMWjeR9nuFrrAAx8V6d6ZDgC",
  "key13": "3cTjxyzY7yGQb6kZcGHomRH23JSrNSD8xYxEQ4UiehcLob4M6j7fbtV7vxzz6fUpoGKwC9nJx4tDYJPsPYsWZaxm",
  "key14": "FSg3wFtEzwPNA2BeuwNXLwG9ixxbxc3hve2AM27iCsWCbuw54eqQyAwkXHAdFzPesXE1hzdtCTHZUXCYLaDHrEo",
  "key15": "5GT6s84ZvFcEZZJQD1ZR9giMGzteuoDYzNV2aJpRPABzSQZTuJPzF1LVyBkSMWfYzdL11yNuHx29ZuYMstfS68k6",
  "key16": "3zFnF8o5S2ynRsuEkF3AwAmMhVzejM591N1CrHDY316tbobhXXXpkkDFzmDXs9vwjXjpb9JsDxvPp6nF92si84HV",
  "key17": "56c9jcG9NV7r2JQyhDkLLd2b3W42nVTAxLpydsurx8DTYU9DLRujQEt7bpUrcedmVUbMsFJ78E6Bte7PV3uX8DV6",
  "key18": "5kW69PjEhshUkDNyXLBzGjDdPnvLiMdx76FZkco9ZZapFFGj5VQvU7yJgRZJY9yjpeKEyeKMLqJLCVgMKmNmPqq9",
  "key19": "2WE8mT5fmKZ9V9CU3pfdCQm3FXYMuc5Vis7rNBwYsz3TuuysWg7J52pfCtMApZHTPKQTgx7Vyd5CWbEJ1KotrpXM",
  "key20": "2KUuF6T39DJddMwNYs5NtRhVLG9GNWeoUaAmTr2vSdCa16TfZgztf8TBf5eLd5ACAobvR1VvNgfUcRnDtq9oZyCW",
  "key21": "35XzE7auQkCM2cQ3pSeRqqpVc7djZ4eutV8HrKXL4rrVqGEf5DN15DGWb3WyVkcBDv4LddXTHEXxMJQs7H1tbXYh",
  "key22": "44NFjndxsg2yV4nx1K6hmTBxzNu3sw7mLHypVod4pr8Dz1sBkf4dj8HwLsDYr4EnxE8jABcCKU1WoSdUq6SpgoZi",
  "key23": "22uKsuR6Pye6PZtsDsLneo56JKGvS3XCafacbCrxeb1T92hSaA86b43BPy7A37tsBTpSmouH34qvtDeKhuNV1QU8",
  "key24": "5sqssQAtz4rYD1uuG3skEG72NGkJ5VgfrxMCtd8uNzNRk2JiSN8ut8eKXTYxk5jax5aUs3P28jDNojRfJsnjWoZF",
  "key25": "44oM9evL46MSP1FKWX7rNtT6RswBZVQc9tRdwMmyhcG8n5t6XGAmQJaSsShkgwMYGrX9xLduqLQ8DYZ2FFatMcie",
  "key26": "2qbG7CFbmUsugvnMg4wErKmoPHQkobGwCt5NFnFgsPkRHrohVVD6aLWvQ8y9QJnqKCDdiujEGLM5mYaVuKxaEoNk",
  "key27": "3uuwhcPj4wwvWdVCsRpME2dSfCgXcy7sM4n47VHvCXqvc2jN7smeYZ4rnfTpXWziTM6Be6TBFJVbFthoatPyscgo",
  "key28": "5fCvaufK4uK5GBkreNb1A7JiKyroENpDxVisaTqxPzTRdcYn1cEZyQGWiEagsnRFgtdY7WDiUVKCfuGLP6kf9pDh",
  "key29": "3WfUN92nenSxQyHfnFQtgbZMoTvryeBNmCbsXj48wybW6aXZWQxq2BDkDVUCnPPLzn1FChrD3hZoc3ixdTCryiwc",
  "key30": "3LHvLW9mnQCQg2CmbY3rAc8TYN8PA6ToBc7EmiK5jPF5MiCPEy7ZmovSHqArCSrFQEnGjTKxG3iKfRRcBcXJs5Xd",
  "key31": "qLF9yfi3TseU7UMPbgKweNYisxTy7zA87WXG6ffvrf4HocZvdgcyuk6eo5g6mhPJvHSRCRC6BkbjQWkEvZsgnnf",
  "key32": "26PXU29bsSKvCHgESwUPJUBdeKSqeCgkRPPCokK7DTFjAm5bFthdpB61k7DBndtsAdpQSRPaSLLv9uvYGBica4HV",
  "key33": "MP6pTVMoLPBZCbDPHin5gqgBxTatY4FpSwTvsQiFx4rA69dQeTCpfbgNWVky6GJuBRERZo5GpAUFpJY9so2WiH9",
  "key34": "4Ukfa8XiF2narfhCck7A6CpyUjqZZekJhMZmu5722sRgW7r8VK92P8yV4m8ATDWowyoq1E63DhTTwwphWcp6g1bE",
  "key35": "2kApFkQK61acLrdJS7QNCSnUgjNboMKu8CQZm6fGCkj7AgAeSJnmPayasmdMS7HM6uRYVm86eUi4T5pXi2Qo9Udu",
  "key36": "5RNAUcTEaJp6vPQzp7S4iqqZ1fgSeem8e4YRUERhcLygvx9hFFVqTn7AKKutq3qb5xmyq6RP8cqLYqVrCACWHEip",
  "key37": "3u5ajL6yTQSoiv8r1gdgLrgK1S4G7JkKX28zDvH8UxritQXHA2eCTibi2if41qBcy2hXcKrw24eHH613KNR2Jtaz",
  "key38": "5U61B4o685vg3htzWrjYf13Yt9iRWHyiHynKtHwHi6WnYqwCSZ1yorRVbLxbi8WrDspvaMpiWbdEzstCuBpB6K7Z",
  "key39": "35MZntrkSQxsbh654529hNzBgPfTBbt1GzWzMJwSwHUJ8Xquht9am1mqKcdAkgduVAaVeiv37dXCbL829ZP6LJ95",
  "key40": "2Sc6V9Y859s3otiKQhc6fB7C284gevmaTYu6GcfG2b2esLX1UMXHSZtPVZc3UY5KCAD1DZQgvfe2BhHL1xHgehgs",
  "key41": "5tFHr4Dm49H462cRWd7TCoceHpPaPE21V6DkRQcUdqPzr3oq6G4a5CWJaozoTpNxXE2kCfVJDJgUnP6eKZT2xTtT",
  "key42": "4qgEVXpBJ2UgNgBhWPQYyEmy6bKz12r7vzpe3VR4A7YCT93U54E3EABMcQcR9gHvPxGPkTnjj1NjqTAakyvnyg5w",
  "key43": "3bLrRioU3TkPFBSirQjF2hHc4EEMwZ2d6uYcBjWKL9sCCdw9vWnt8mRHVTosBKDLg9kG1bdoWZPEr4fJBG7TRszq"
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
