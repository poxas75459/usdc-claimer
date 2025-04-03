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
    "5bLsy32BCkuhRqnAiAbHpUfRoARPJwvRthbuWTyH7WApUakiWiZhbky9s7fughk72dfom53Y9ihjRRNkoQLpKrrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbVgjyUNf6Y2fgQW4Zz5z6exLrwUWAX3m98wcNjvQyNRQxWWVcsESTzC2jP3RAnY7GTtnoyKNCG9j7Sre8eTWbD",
  "key1": "4jQ78xJh5ej7xcNqgZqp8rPiBrGfat5TyW2WutQbnhaN8dYGDgoGSoMCoPh2HqknvfmhnLRoUBpPAAcMGkZd8FhH",
  "key2": "5DY1bNXdCopb9bZaZwSu19UzJ6MnmdZepHmgZAaNxqq8Qrt4Nvs6oQg3XSNhh2DAW7tXrzVBgGJjLddAMy118mXy",
  "key3": "3cKtP6nQjttYiGhHwsWHD2KwY2E3miNxyw69848ApgRdJReVMSny1bc5Cv1o96xzJJKkHAmaxQVtXTyGjfJzP3YM",
  "key4": "5LLX8QEp2he4GMyxKc2G8WUcLsG3yzpDWuu7PV7WGUwqjwFJ3hrx3sxfAQ1R5UgnGcebmpP9r3D7tQfENwktaChZ",
  "key5": "4ZdZkeJjaveHf79uz1JAmoybUJRDCSoaqUac4cFZjPtMDsAGpFQB9vJuZbJApTMks2FvcA32ado9giHXaXY84pbM",
  "key6": "9VtCxYWHuwvLvKCr1FAK6jLR7UAszEqjsvqm8RGbFYFBpAgkL4PvEWxDrjvKDoL6aYowLecHmkvJqB4JFc4dDpS",
  "key7": "4KQehqfc3fR5cc89m1NMSoynYnekwERGsynNE3sfXcCCdhxwW4E1wN5Y6U68684aVyJuMqY3sJ656nGCKZSMUgG4",
  "key8": "3nVeAs3UVL3b9NvPoB6i2YEmpAC3DS2Jeh8tni2njgff4wsb3H7safaNLEoBzb8t3GYPCw5EyDjtpkSEFyr2UXwC",
  "key9": "3ctQKb28YQ8bQcP9NTNrtZdyb2Eg95JEHvE2UveYXBX4tHJTZjYRMoCVG8huCeu9Mp2jboymX8Mk8hHCeLVtxe7H",
  "key10": "5f1yi9pnU686hHP57W63QFJtYqQChGpUkAXJWSJKBz7hMD5J11rdBbvT2VDLVB9ZRmvLRCS1uSMqRLJQiDGR4tP9",
  "key11": "HFKoxAz4a4GEP8hontDf1vbPRxBaHDPShZ5iEX3RhhTgZLCuNm1cvFeBir5fvKvCG1ZPR2ueGo8Hi14rjxWPxou",
  "key12": "318YNi3bb9pSnqp9rdTBwfmKcV7vpZJ5eR5RLcvK2bt558jAaYvhzTsUuGcuyiA5B7gm6sNosuChJhpmPWHiZUn2",
  "key13": "hYYHKVFAXbEWRG9s34ZtG5LTA8dxin2T9Ns6GQbB1oGVshrcffqNJ3KtVHZ7fxv7GtvtrACcRNFkmJEXvi6fY3a",
  "key14": "k8BpxiABDvm5usvgLuJ4fYC5ApyMLgVmEt9D3N9qeTFpX7rdyzxHEmtexoErSUMutr1Fd51YHzCNufK73tXYNPc",
  "key15": "5sfqgX5ACbe8TQqs6NyQ4bHJqnv5aAUaB6uXjvfTE8TzAh7X71RRcCV6EzcxuXX72x7E1dFh7Bbe6vygarpGiV43",
  "key16": "24JVMggTKbzTaKirrjSWy1w3w7xEgqJw7G8db3y6cvHwM3kYyfuax9PeQzH9N6sTiJirKChRSexR4mRrEZNVrdnK",
  "key17": "5aBPBgfuDovofjLrJJ4F9AKgjhYdYxGAcGgpHBBGtU9dnFMe6CKLhQqbSndCmFf9qhuwr23Lv8TGSNKm5LQgf6rt",
  "key18": "4bxx2ZVN6eJBycNkYVb9nupbiJ6pcvXSkPCjSEnjy2sN5tBm5Je2TW6JvRnMnMbFeegjUXmjRCEZU1Geyb9uRBBS",
  "key19": "3RFzDwGsej7f8NixdovW6uEeuLQWVGBeyq2ZvFnKvwDtZ62NU8eyhe2hXdG6p2D3AQ8Du664xkAH3FHqNvWMmguc",
  "key20": "29nB9QeiZxX5rfQwWEuFuE3c6pBeQf8hxaU1mEtUjSJPfmCxmo769qamiu3d59vtjpYCEn9vR58gSmsFxxwpBtLa",
  "key21": "4rwgqH9oRnym4cp1UYCwna2LqxoWxj2VDDxxXdPf37MXdygP9BZEpsLSMK9KmB2BRL3udsoe4a1S7QozRzn8hgJd",
  "key22": "3CJ6y58ETmKP6YgWdGdPcmhxstFpSFQzVL5Qvy8CThLT5B1bfe8VUj8M9kWMLtJki9bD93nSbc6dvsQMGDviiK5q",
  "key23": "5kMT3GUBjSCTLGC5Tzp9VQCAzFF46JCY3dpzwfcaCMTpjsPLY7m7xR4jPPP6B2YqqRnDK2Vh7EjmDw5EkJ2yZXH5",
  "key24": "4KhGMSXgBiSX6sR7FMsJ4qVWUTaK4yJFEK99Gekz86juS9tgtdJmcg9Eqd5iQx48o5xtfo9bdPqhomHPVUyZUxPp",
  "key25": "4iCcteHKm3HPBRCfErPBfWnS8gPnuherM4SrjRFySWcBAwB21BkLcrhjeGiaqHZHrodRxCpaErLuBkjopX5wtFFi",
  "key26": "2vrWAXrbhprbZR1ECXHs5RT9ZjFjMtKo9NmtHxov2bEJasySSc7gwMVfjEX8kzrRoh7wyzn7EhBNMUYTXJPJTqTF",
  "key27": "rGfEHcQXTTNTDitigpbj6KFLgwPTgz7TLVwUAyTRxyxkzoYMnZLTGYvwaJdHGxiBY7oUCvQtry4tSvPf1NFNK1C",
  "key28": "5jJ9JQ9ytygxH2gmt4w1ztDwd1TofUUUhb7GFKA6EXTCKsxpg1bHS8aJgrKBcX9uJuttpMEXC4yUJoMKyTB1MKBr",
  "key29": "2ukTtMhanBCPebJZ2kwEpTefrvzjMZ5x1AG7bKzLCXEbUEvS64NdZ4bZ4tUHaCigrvBVq4GHBnoU5Th8iVEoPL6m",
  "key30": "2quWfDXGGEXK2veiyAJ6EUWtqSgHjyTc88SV3k7GMZk7aTMjcqw2kqmzs5vBTKQDfHgNBuW1esGaQyp43JigaKzk"
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
