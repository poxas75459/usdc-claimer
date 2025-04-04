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
    "5vGwMvJfkpyxtK4Kcf6ZVjbZDDd89WgwG2LnJP3rFkqGTPoJLgdwYK3wdtamKHjcSB1QQYpSuYWqBiWy958sN3Ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpeLaszBqKJ1ETLnXTRVmjqTVmPkyVtDFNx3XMYdA3JfgEbMVpqsbD2vv4ZbcbKLmnYHYLv945zHCubyzZdncrv",
  "key1": "2o2MyRnkPcza2ieFkK2ZF7iCkCCdxMEtDcaVefnccTCCh7DqByki1FS9cUgHBaSkUeGfog63bUahd7Fs6NrEX6nQ",
  "key2": "7utPdivPMr9oW3gopuzXG2t34cYEWfSf7K2nsQjrNaoriJEBbPBYXbcXCxWX41vRsGmQzLRx7JHvDfr1tHQwGu2",
  "key3": "5d5Brt3uT7pJMnpJczy8sAGvKUAEWYbcTSDNiMqgQ2peHPs8CWQn6jmSTCGUAkpzNh6hVoHx94BMAHyLWKvAA2uU",
  "key4": "4UkrvirVRzwU9M36SBzUUz2Kv54JjqQLCtdvQBLjgovDGSoi2EzABcUQgMBip5PdVpb5LmCAi7gy2E6ocKpgZH4M",
  "key5": "8YWwNewW1qLFUSG23whrDU3y25aqTirLL18xLEnC59nZG9AneCrhsgMWxXSSgLL2ft7CHotwAR9joqCz5Yxa9KC",
  "key6": "4tAj893ftuHWEJtBKT8X6spepf6GUXUHvJs4SyPY47Jx6xPhZNMMJiCeJKCJubHRYBEPb5PBTvySCtuE9k8Jfg8S",
  "key7": "3mtKzGxqzyaojWDA78EVDUqvEjSQqMbPdQ87gsx6XE9xPt6wpfvZKk374ikASRm5r17EzLm4htEezXVMw2RDwmvm",
  "key8": "3jXhVqNN4qyevDAmQycuMkzjnnWDN7MAZopVxsh2AyvZpPBBbDU2TSSeLd4b9ENUMpgPFUA168Dn6j4QKZaouqYS",
  "key9": "4CWmisVjGGquMQCPPfHL9GeJaJJPaUQJrp4eZimWrpYSCssB4x6dTEQshKgvE2kMm8CE5ebHKP8UxmYXcUJXHbfv",
  "key10": "Td8CdHDGGeZzQt4dx9GcqqS3KWJAxFexMRuu968YpXqWKdWcwed2CukYb2Rsk1SgRoy776w2Manv8GJpyE1gLz2",
  "key11": "3Ew9ifj7WcMzEwQ7Ua9C9qXrGyWHu8nePViwMKMyWfBDa8Kh4bPdXoMbdmMANfdDxuVwSPht9Y7sVPJnn1sEGR3G",
  "key12": "63RL7AbyUkN9dEduLVYj1Es467XWLtN1D3ik5ugns6aVC691yCWCV4vGTrawXLEMLL68k99Yuio1i53QufFgPwqV",
  "key13": "39BR9R6STaQrmmazZ6di4QWnYwQnPNTNjqCJDMUjFtxkLnuHLfphE5tL2VRmPn1eZs994h5A36WVzueWHWaFGQBj",
  "key14": "sxa5KNKMzVw6i8AKR1U9WumAhSXCQJujVArBfz9BbmcLUPDrbmTjvS3RTQsLnEa2TQ3ry1Q1VUVJeSdKgtEKHMr",
  "key15": "snXYaHe96ihUNYyhZXgowUQ6UZdTm9jsE6FbNzuBrx47r5wsSFmtTtxiffAJdbapypifRS2vWLuZRDaUuGaRgaE",
  "key16": "3VrCWmhNjoMccwGSjGmcncWvUCH2LoN3tPnwCQEUDBbL57riUAEGnbrwi2FX9Sh2W9wJ4g1qrqxgDyKJ577JHwAL",
  "key17": "4pmu86tczCrDuPXaJv8imyxbi8bpoP675jsjXCpocbEfn63mumDftWdRqcHaREU8bBsD4T1ogf4oF8ddcd9cSJrR",
  "key18": "5TYyuSELSDSXYo4hWxS1B5B3Z6DXMCeFEhFHFhrWjVn4gY9nLWAQ1B5QqDxMuenrv4zZHzH2DvzeZ7zEZr1yXzVw",
  "key19": "5SxVUaPDkyMBXk4LHFwDoQvLJ25J2dTWQNWiDtC5QtYvvf6nXBrfJZASe3UyiDKaDifZvTyzkyFQnzw7P3jroao2",
  "key20": "GG2f2CC6wgZVrpz9mMUo5PukZNWbJLephD85uikhsw1MJFThQMLUPyanKNhAipbkikM5YcxkrSia2C6NsQUSxdn",
  "key21": "4iVkh3Hw8wvSfXGTCiaWH4tmtr3Zrixme2PAsRDW1SnKWQ1yKjHTfeHJE931eUxsANFV2GWyPTivyAoHo5mzNmEY",
  "key22": "29RaBUi6RCetY1wcsSDnT1ZYGkcgGAtAGtKWdFMvuJUPqJGc65Bp5HuWw3RcMPWTvMMRmQCZnAmhR24YW4jAvzW4",
  "key23": "AsVnmUZJVdvMY8My4ESPgqmRdY1a7gvAiEqpktCtW9NuHZKKLLE28pXx8H2ixkeWJKDp5v25XSRNbDUUDpnkRyn",
  "key24": "5bRcsex3yoPA87FmyyQisfiWkQbaNjWrt5eGkmUMXrBwWhzTvi2ievM3MtesNhcn1RkZ2gmVrHAsbZ6xKEagyufn",
  "key25": "wZb9bTD8mPEkjudZe1eLkDAKnKmXYBxyuBacKsNpDMzzpGcKKGSDrQaVzsTpZop4KuNQu2bANDxhqLMGwbZGLwG"
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
