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
    "31UtzGngT6dfMCe8B9WiLLLHG5EmzJKDyEb78Gy6CLwG9AawBECr7dHG3E2pBYfZsgC3b5zDy2bLPDrKx4W5ekhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p7t1TvLHpaBMUzVQkEzEcxcaZLpf9wvSQtaxDokXYy7gsa4Ha9esLzkStnSQab2tPE9phfLEztbWdV2h6KPeSvf",
  "key1": "39ngEyCCsnQYB8Qf7BH6FM5kFcrQtGAZ59BSKxcWSnxBezwP1U1z6nacq5Z1tpnoba7M9cAHqGXuiBGRtWDghZBT",
  "key2": "zXdFX7UgXcgjbEyJDaogpAGjA5P2SueYUqjfkRyXc72KoazZba4c23ZPe17XdYDRGE7esmArjfaXzaVLtPSF1SE",
  "key3": "3jFcxmFJF4Z6h3xWwh1W5h7Nz64mv8BXk3T4YVpNMPMFwYG16uUTXeH7a728Fb2NzJxXrMpxmoYKPd1tiDuaewMV",
  "key4": "PpHCWqgSgUuAbZVm1bm9J8nUN7Ux61ngtuCc3QvSEEVU2gjrNToLLZJ4YrfeFsUN8YSEttSbbbTHg4VhtPDzaVv",
  "key5": "36xRxL3L29GG3v8mM7mSmpiCGTT3Aizwrz3Qm5umd7CFvgR5hozN2vc2Xrj92S8mcDkt9NSRpWcXDvmdwDtyw9aD",
  "key6": "LBkMfTZtFYNB45DiSPEKLYoDNqA6S923z4ha9iSfWS8LL5y1oVPdK3t8zW59qZZptQazYeAsNZ1ejHiqvjKquJx",
  "key7": "wWVfURpN644yfnKX8k1BvYnXNUzKGgHkc16TFm6momU5sc7woZmQKsKiVHffBoqo7BmiwNR6DwmWWsGkpsuyxja",
  "key8": "2tPrfZ1svjvhH5i6ZTxpjZfDGymLUysEbg8W15Zy5yDuFLan6joy2Hghh8KXPU2NDUzp9dAU1mPwk7UCciiQx48B",
  "key9": "5vfKfABq3WvbEgUKtbwjNwGpbzSe9HkvSr9GctE7bLyot4KhWzEHdqrWguHaEqY6FaqYsBd5ZRZWkkjWGCDRpRef",
  "key10": "4aiCUzsRUQyzqVK1FAhDRXkh4xU4eDgUDXpNAnzddxhNyYx2AaRfqMH4zPmwiPDugdVbkXiTnBsSfkwkPULT9mFr",
  "key11": "5wqwiirrD3JNyjDtekWXb6WbZyS9e2p7dc3fvpNfmkhm3b4DjV7ydUBewhCJtKRTEiBRRTMRZ6PairKpKCbyqAuc",
  "key12": "5u1N9rEwcw4zKc4e7JtNXkf47pQRWpSa7dKAqYTcDXfQuRS8grCgCACzinD4z732QK78FgRHDkcBXD2Ddwmo8M9b",
  "key13": "PCmnPGZJLH3do14yFysGWxHKDNrdEo7QVVVg2FRg5vCieNRLWQ8dyvzRVRkzsFUCpFvMXfckbkCwvFjSxHyoWKy",
  "key14": "4BrRv35YjGvDDMtFBV3sq2jkS5Zw4ejFSghshP9S4swzrv1P3MF6USxo6rDaGcKFUWQswdzceasfzN6dzVa6r6t9",
  "key15": "5GheXcLdv4oCB92tANhCuUbp35EnSNT958J8Wm6hS9bbVQZvqDKU7T1GRLP8Q9Vn2z7L6yq5qsFrMxdtvze1ysJV",
  "key16": "21xTtvdrBq4kLrPmrWcseBPtTU1DsshsMXy65ewrHNCSfNqamRQRdao6zVR75z43fPmZJyP3rpia4ZDKNL9T81DG",
  "key17": "5f4TshthgW8U9J3hHVMAYnJBUmeUfJB5WcJ7KELqBGvuFnJQPRP7zuN8mNQNAw4Dsn5vW8xUgUUk8z1a9XPTtrz8",
  "key18": "2RmBGqmPb6176uvmCUThArZgRfeiftz4kVdaQ4JpDcHbS9pcYR1NiLNuWrkJH5SNrmBSEd3rbMvaNAx8LHkFczi3",
  "key19": "47bB4ved7qqr9MsGjMgbwoAY1C3iwTbbsyK9gpArKiQxoXxndmaane5tsY3y1tmgD8ubjdnUbsuwDyfb13b5zJxK",
  "key20": "4qNEZCPuBgbRS56yi4Mq8e9vYhZ9DGAJQVXBt7B1ou6rvP4Ls3wEvDTEPBBDedyVugwp8t3Jp7hsh3M11T2jz8hB",
  "key21": "3v8BF6eN5kLRrtxEBgEtsAsD9jv7CwFMsXLdUuJV5Cnk8eSmLXVtVwPEvqMwv7nZNQGjECFVGERxSyAJCN21bSWU",
  "key22": "2XWsSmbxySBVqgnyVLLThb9i5tYQC3xR7mNjExFgUgonJ7ygDTMxkVuZVmz8e1e7MwEeScW2BzmQ3HfJZf3xGFDP",
  "key23": "46C9vqEsqBfCKpH378L84ehURZsNEtjdGCTfKeT8UXpHZQeFf5FTkUvqB5fFxDW124T9P7UYspVj72zC8amKYAAo",
  "key24": "5PrU89tQPDRQoWSU6Zu9e3WHNH76pPaTxFLpB9mRR18qQvTFMiMYEsTRVWR1s6GhJ8FdZnf38gjEQL4n3kdLSuvs",
  "key25": "26izCvvM51Vfr87KDJDW5EdFqWRHFedAVz8wgmiLTcvQ31trpVvtiW4oEGWP6B11mdGncZWFwLyS5rLXXNU2o2FP",
  "key26": "33xxGtxwCtoZv28hxzJZX2CxDrVPtFK1igDXCzVHtdvkvmxDS63K5Js3cicPzk6Y8sX4acUtuZhcDL9JBdjbuwWf",
  "key27": "4AERkLrfmjQTCxEiVDMBiZPkqA4pD577ZQwjW9pyNCCqkywX8VJvrrw3j4eSbXLMJckJJj8zF7fwRTTEiPXjwuTN",
  "key28": "5qcfuEEt6jAdiHk2CoMWZsGjyh9YdgQRj4Ja4ocdxVQy3W9XnAJswGhorGJxwnxrBeD7XYVYJjpQ1XcmRA8oS16F"
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
