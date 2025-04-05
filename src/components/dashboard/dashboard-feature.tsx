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
    "3GfSZhqN6Yr9n2m9KLtRUY5xXXZagCosKUdS16mpBGQpL3CuBYadvGFEQVuWEP2jQzuioWTStZvov11AueYjM3oC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a2xUJE6ZW8FWxhbqtPqYqrUyyWRpoxn7PVmXJPE8jXszqJEZ2Go1w7qwdYqJqk3gwZWHJwAj2qd5PKB5Zg75FWx",
  "key1": "bF6AiX6WqGeou9tzreqc5qqnG7a89PbVGdN3urBaj98zJw3ogTymnSA6EzTyXLcJzYnRh2juPgCUFpqst475YVN",
  "key2": "4kxZ5SLjyoUVWsLBS3T3BRxJZs9w2CfeVMsZRNbbbQP341zdxcLcxrNB4CZWN8r4anhqQDPYDngEptHZUG6a84xC",
  "key3": "4tTY7wV2SExqgquJKkBuDLfWAP2Lm3aSGKuCCPf6FHmUuDxFkBy65GT5PtUjKpgtiEv29iGQpaXzYjosNMHAbKfN",
  "key4": "YneckStWvj5oHjyyDpRWsRCMXmwUmKeV1nrxVcKsTBmPtzQWoCXX5gsjZvW6hXkUmDu8YvQuohpDfwP5xytHa5R",
  "key5": "2HABp4Ro1YvguBzEwd5PjwtCh2hMih611EYWxgjkwL2iUvHXUWnCnp95qcEWoH2xRq4dbCm8uYdHu4NG9JEbyJFm",
  "key6": "5PnnbCWXRSMvGyAc4ZQUmVp87e72qaqDDQVjuQpZ826xoS9WYoQa4bDPfBHf1M9AXHXKjMWC4MZquusgddn9Z2VD",
  "key7": "qU6NZqdAjJtexSfrCJkvdkLTb8f8bAvCWh8qiKm19hxPAYsmubqg46EQnbPRGYWqZuFmLx4QTiZ7pqpC87E2hTJ",
  "key8": "hs3v34WtNsTRuTmZdCdNVxpKa6xorpeGnRijRBbN8snTLAaH7GavyVxGKhShP1TMRN7mrdR3Z2gYVaZ8Ej6S3Cf",
  "key9": "4DGMQ8bEwA7rPLnDxeFt8m2bwRNwzYwsqoF6j2Dc8kse1q7VCdafCq552Qk6fSSmw7R9nin5dtsVBuedGy9BdpvX",
  "key10": "65SjCJLbNUtuMBLLkXXWaKcAJUUBq6oCAsAm2ZRodPCPuwtf7okVYQV6rM2JQmSANAitqSVpjarzNjkHaDc71e8p",
  "key11": "5eaRD2o5MB9e39QHeXB9bYSQfKPTWgaJPdKhShrtv9zu3MLCwE9evZyvTHD5UFBDcNzNZH1DzDwa4wR3D1B5KQrQ",
  "key12": "4VqWn4pvo8CgiVdxpYEM3krzzpqef4zanKoJdjD8XXJRWVEqrXWHh9HEzAnqms8KP25zFaDFLfcc4h1YJWhZX49u",
  "key13": "54ZQGzi619byAw1MC7wjk7pnwGd8pGNBnK9GQgiiaTJ9NXMtJxnArUC41vd6aMJX1DPnrpSH6wT6GihAfrMhQWYp",
  "key14": "36ReNN65yvrzcmLwuN1bM3Sg3f9qaFZyabR6yj11sRf8ZzGffbwUVev6QnDKrswveLWSNYcH2YpPYW3nwyQfByRp",
  "key15": "63NcgZCYztFSsQW2UzTxonFF1yyHmB8Yb5oNvLSWQTbFmxKxxRZgMVBU7cYZDw8PnsQjFWkXt68ochjbQhKEJyHM",
  "key16": "Aafs4fEydCwZcbFAuQwpDr3etuAMGfqzTq3oJQuLeqM7vGG1epkuWevZfYyhSxsrzWBpaJeGJEiHRaNHwjuqy4B",
  "key17": "4ZuGKbaUVwcNexmcaiKuhHnvoT7s28UwkFJKKsZqCPVmkMKukahzuPrvQJFNYnbSyRUHjpshzmA2HbzsswEcNRk6",
  "key18": "3qYqyaD1y6KkxGF24WNBmqXw4YXmvzrid7kPygQYtd7p49BNPQ1NFpa7gdjhsQKPE5vY7u1ucMXCUNT7z3hg1YS4",
  "key19": "5h7VEYFc8k6kLtgW3vpcvZQDQbthA9tUoWpXbB3QDDwaQ7r9LwFKbV5GFPP2TwRcwYopsaoDDurry4U2efb2fm6s",
  "key20": "3yC8jRgWULUdGgmgEAtDQExSKqtHVKC5MLch2bfyisRVp5CiMsqgCedenNzdaZvRPT8ZqvdtzW2r9R4shti9ttPz",
  "key21": "5XmbPpUsetdSvsUej1Cjj8jVTD8eiweSqopBqF32kCwwcsWfvDXttqaHSdDmDGdn84FYBnogccjVknsExkfdcEAa",
  "key22": "3e41XfxVAkwxeYrwKe6TM4UyHAgJ4FYUSHpT2nvH8Krs9XuUrFHEQeUqDbYXmDps9soiMHRL5agwWJ3SiCJTchft",
  "key23": "2sKwVu1PBXPKmhPyFf68GeXgEB8MEvmHinrbyLW9WjnTXBfqAXMiaq8jYHk21D8CACkKMNABJAoasgxKpaL2nnbz",
  "key24": "xKGS5CKtEgZQzER22Gph5Rvkks2HJpucnnCTnReWJW5Rdcpjny2wVnXtHLzEcK6RPqkMjsjRwhtPB2C5L7dFbbg",
  "key25": "5SDe5jNczeKx29GMnuK8AhxCFUMWzVcU9egppdbkSt7q4uBqaRNF3kQJUaeLM8FGX7NutYL8j36J4q5ZCJap3S56",
  "key26": "izTnX4A4m9DcVxXJVuUXBi8NPMLvKBoec7teKWPKvF3dMTEQKDFqqkbagRGxHzHxW7PLKhRfUf8PKKLqTVwaQNb",
  "key27": "5Xctb95st4K35VDyah9ddxYwy5dqYk3re9qe1ZRMkMJMTqASN6cKWKLiXvLDd7aATsaCMdBJvfLHiFA5PZL6BXyU",
  "key28": "3uz29Uaq9RE6cRLZdmxFP8dxn6gYXB9cSRqby2r6XrmHPdWJXrALy3hrF5hSGkPYg2GvqyXgwKb4GjR5judeenxN",
  "key29": "3jCKyyncJctGxSf8j2wLzBsZKEGLqFRQoZTrMERjZxzSe7AsHwJstNRynk68QUJYYS2ieGPMbrEZ2Ci6k7hamZQY",
  "key30": "3Pkmcovh5WGnR5eRdyppxwTW2Trz1GBzGFA2jwhLKGq8nPxsNcZCttXtVXqmAjK4mxM2MsP8Kc99vwdvrq9xm4AN",
  "key31": "3TgfqiuPQb7agGUmaKbMuK3yL952HeTDhFWH8Dd3tY7Gf1m3Yz5wPMuYwnYsLFtKKd3uesx9EmLMUeFQn98mUHeM",
  "key32": "3oGPjN8UhcCegE1Ef2qUHYd6krsrbiFqkmq6G4GfhNgNuGbnrT3bTDcMQt3VrxSMEQThjPfDEV9MgdXtphzYm8xv",
  "key33": "36xNByug16FETNuX3STczBE7WkcmhMWFtkYar7L2p1kqvQcMZ6TMvgprnWt4DwWMzrG2Ha3eMbpkVszKe3iHJQb1",
  "key34": "4q27RksBMxJ197EYkKxQd4GBSUf2e2m4pUA2NM8fXqSwFJypC42Ydpgm9jeka5YnNA9bJngDo8fvhh6xCRRk562S",
  "key35": "2Wngt2mfyffiJETJr2FQaXMbqaZGCx6DuGhywfraKg3Jjq13vAGPjRUMvYrRw5PZcPEHUMkGJR4Y8b9aCrhbz9mx",
  "key36": "2NHe91dwPvHniki3caQHajQzQqd1sDJSBpTvFQJut14afZsVa1PUbU9vzjkv6gtEQcKQqtN5bX4GxBqZxY5ALYFz",
  "key37": "256LV1EFFcwVB3FJ1nZnb9nq6RvHbZKeraqAZ5bS24YRF3fXyd2LTPEdeKaA7bY7xYpeCA92hH6paw5o58ZCwuwP",
  "key38": "4QmAYnrwWBbFguuro4dvf6fVZ6xVkrx2x8oYuQtBHBpkBKtpmV3yvnrEHGsDcTxsoCZGHwH3uWPzmHW1RR4vcciG",
  "key39": "z8SPCnvcwe4jgucMegh6F4mYzzx2wY6bnpLG8rejni7YkDpoMJVneockP76zqhAJFijJBuLETtXH9SN9gKqMH99",
  "key40": "6Vwtagaut1wP2BCZSWUD8vUuFkztbsmvtPx2D8TaYSmJNbb8UEQ9V9FKckru6W2VdHn8X3AFMzoRuXnCyywBFqi",
  "key41": "3bnBJHhUy1sD74CLrSMsxQh3Coov5QYinNV1HTZ5zLpWcxMBoNBAhcFRsqcEyD6hsFLwY6riTvJwdymx3oRxwvJ4"
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
