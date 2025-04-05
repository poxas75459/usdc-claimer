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
    "2c3vzfd7DSJmr6nhEDnXALPKCz7YtxkQDy4tLqMbR6qukr6JHq2psDsKuu4mMdk4r4EMJktVkBDuHscuBdpmfLJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hfEdf4ipv4Wqu3P4WiczU961AJ2EA6iQxXq217jSDyNFj52qe2VXG3yxi2cZ3FBjpuCDxHWfhkSmu5PEmzgsMcG",
  "key1": "5tnHiV7ZiukuXc54ymj4fM7zS3B5keNcD7kQFWyAHoJENUypq3mhm2numnLxGWoJNJPZSCS6FX3pJNzgPMVsKACJ",
  "key2": "4QMyjpRKb6jCUAzEEnJK2n36vEgd8so1zLctmpoN9UMgc8CPwvjs1EzaQfqUiS6AKUtdFQC8Z5dS2VrTxEPH4ZoE",
  "key3": "2DJTSAM4mN8BWn93Dw7tFwKuGAyBZSdL8HD1K5jguGMQaKiQhkqhwnz7GAqXpBD9tBxf2RtpxZ4hrSxD7XL7oazh",
  "key4": "4XTX6UYr8vpRtF3TVfaojMKpMg1LetyMtvJaj12sSJ78u3z9YyY1DzmV49NyfUSA7wbdC91JEzek38QNhxmJ45o7",
  "key5": "bQMzQrxu4VNAowCPKH3t8FgJcHhmhuL2oGKPBivYwFUEvNChBCvEd5PyNn7AeA34qpNfLVqu3pBRtmfWmwChwPY",
  "key6": "62BQncDfd5WiuTui6RFX11rhYLpTTHU7gnTX2sunNdcvcA36S8g79qQyQm7DMoWHi6eyb4z5r4RzNTNWYHqyJUaN",
  "key7": "5XaeNhJUM63Nybk1jiaq7drf4NDXUQd8F2KEW5XbVhWMotXkm1PeksCYEFGaFg8UHTZFeXdQoCTu99oyS6Pk1CnR",
  "key8": "2ERbbmPr6j55XJ7bD8brPbXtoUo4rcAswTfGGw7jse5i6LeZvjdaQkAhRTmT68riNWPJePpD4NfriiRBTLKJac5y",
  "key9": "2zE1Uq4q2MKzhroqEd2bn3jWxp8LgiGjPaWGnA6iFjfTYrnNMiWMxYmoS4F7LDTjtChVch2oih2h1kdZvanaCr94",
  "key10": "TfktrxHrcVg3iYvseLWFW4HCQtQvFWznj9N6vMoxy4bMsggo7kBURUMP5egCs7J4w89RuAup2EfisMieB5XNAvE",
  "key11": "2NdPixMqZ19XPAVi6pjw95jTZXfKKp81s9borD2HVLwcdUs2CHfUz8KYULWHBvXPaBUW6XtvqFTd98wPnY9FJTt5",
  "key12": "2psT1sPCp9DoZLXzB9GqWdCfpqhMkMR4QaTzwiimBnw4wCYESmjmMTt8kn9MMhY6MLWT4bSaMfYLtBz9qNhv1RVu",
  "key13": "2pqqwFDicNpcXqb5KqBhUWS6HThFnKzT8EZETPyK3uU7G4oUZgBZ3cSoXBFXWvugcMARdZ6MN18uYGVdB8LATpBg",
  "key14": "qk6WjBC1F4Gebvn2dKKnMM19vZ3ABGhikiAqCXAa8eS1UUkgjH4r9wjt6MAX3sQskn3NbUdgCcfajGTKbpJkMXH",
  "key15": "3t8qAMK6bFHzEkCVCJCfNMoDd91zkwD9Ud6vHfNfyFNfWqxEojKuCWSkaS5b2xL5oqSKatYENRXxfioDQe5DJUg2",
  "key16": "4yqjmY53mVZcLiGSQMDKq9Xdo8R4giruSetoEMMHXPKx88enCxYorNgbRLPasNByEmMD2eLLmAMFW2sPFXtVpA4C",
  "key17": "2RB6aznJWjwg6Ljt2Tc6c8gs4LqC51he7G1PttsUxRpbvFBnE2Us9u4Ywzs6hza8HfGVDkyVTBnESGQggDG6gasX",
  "key18": "2EEB73Xpv4Tj21teE8BYinXDkVFjgFoUrQfm5oX348QS9KrawGsawzCLCEdqZQEPZYJdSfpUjupGkADTvRxBWdmo",
  "key19": "2vzymg3mTZaJQ9PEUyUmPp8k282bMuY7w8srRKeegCyqXFJido3UePnCFzEgkTYMjYpnwMEdtn4fdPSN5nkLvJGA",
  "key20": "2zYqWbk33M4QHtfuDmy5W8RHQuwmUzvnKLRPsPbYTEH2TNPeDfCxhM9jJAeMMAniobxZrxX7U1VxP8iWS8ZT89hU",
  "key21": "5DPrP1Z2JHwwCEGksMdBoo5wWfYqhcATDc2XvAGtcuVCnCqv9vpPuimVSZbEyurRtzEC7ohXDnzvLwfsgDUkqaLW",
  "key22": "3PcCSiqNC7SrPYND1Pfs4ARnVkLchpmxpARGH5Xu8DpS7ZPCUvZVdRZ4Qhd7M9VdEWK8dSt8fPWWBvG7d513jaEK",
  "key23": "3KnW7SywX1zxhciG2NWqHr352grkJ549yXsnQkdK2c1H8kY5d6jmrJBVwWvt6pHRPMTUHSEbFHXGVKMp7nRqXe6y",
  "key24": "2GUAwGsigSM7vDd4ABzkU58vziWZEEvwCD4i4jNEVHboDAbzBK39NaBxsBYiDdAP6nrVcxH2VrCMmosQgy1Mi7jh",
  "key25": "2MBZTqgxVuhcRjn8Ko4hxpUYGceH9BzQFnuFvh2Gincdn4dBNa2eVLfVMN4ysof9PiWBfaNhmqGP3y4PLrm9ia6w",
  "key26": "3Q4AMoaBnVPu4vfaeRV7Z4gs9MySCMLCUAEJ3u1sVseaWFVFV6Xv3zAXbr39S3e3FQvM3SnfRpo1aQrZdeNp5wL8",
  "key27": "526CopoaTQ3nPtKfAAEZA7QNQJkdcLtW73n1PEZuaAJwQTMV3uvAH2zhtEXwDiE4nyauhkg1ox4xRMt9ccyN2RNP",
  "key28": "LFRUBgKQinBtK9xM55TfV4WhhaZNgiaS7px2Lg97pYPtGXe4SWKMf29jqFyBLaDr4b1qywdQ26qp9LQg1BM7nQY",
  "key29": "2swzsVEWPRHaoei5KWaFF43TWf12XLttnec4mbSw69g8k2SvDmMmwWiZpZ9SV5BJG4Z1VLmBtH8TpsM56vzuhFWh",
  "key30": "35WUDVrv3zVYFr5RcroKoCFnwy9ShpLiN3FWwAYcQgvKQCSFGU4A9AkFiAqmKAq6hLLTVA3d5H8ixPPsr9xVmZFo",
  "key31": "3rA24kXGzf4LXwBGZ19auq6VaYv3S15XBrwwVvV7sVCe4KqCyTZ5SJ1TWGNMxspKUhw69xq4cCCX8iP5AfuU2fDh",
  "key32": "3RATAgP3W1rBmTtsUvuna2o7TZcsNuFYz4TgL9F4Mav65kYmuwDUmN5e3bAFViwyKDmeehjJedBditsYR87qN9n1",
  "key33": "2ax3FSfLhwN4N4hAtdnBMnpYBdzVELS6Uejxwt5n8R6f9sCLPVKgt1bsu3d7sGuLekAtRKUFiRHsrYWzyWqvuE9X",
  "key34": "5Crk8DN8r3JsDn91fqbRvGWZ15ECbG6tLrd6ZWEcDJah2pDxZ5r3iUNs9atcHadRSqzjWJ6LUgZycYsakHn7bkiX"
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
