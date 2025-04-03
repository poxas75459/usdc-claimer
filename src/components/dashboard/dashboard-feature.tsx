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
    "4nwq4Ct3pENmCmb7z9MLsYApi6Xc7ryVAm2xNpfgHMTReCgxZDJqNc4CJvkSqKGEeLuTogBMkjsxMZChBwjviEhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qj3M3gFBE5AQH5aeDjNHZMW6KY5i7HVBZF3vbx1PD5o4ED4Kd298sMJKM6ZYPUwu1yUvi1EF8UaHCQkCy5JyUR3",
  "key1": "5pgnXwuY7pPXiBBADAFqjo2u2CjwQiAyLF62X83825EPTesAWyZ73jB3Xc21ANcDAB59RjhMbykeQSpPLRTHTcnW",
  "key2": "5RJUJayM5fRVYzEFdCZ4e2oN78vgA4L4R3MFArcrG4CumkuGsJasiXRPQ2UEvPgZk3gqpG2kV1y7M9Frm1cDue4R",
  "key3": "2CeMbe7zbZ3vTQovLFApL7dKY8ACZbCBYEPKJmGfnwQ456kcGK2Qf3Mwjjn6Gc7umDjBGJjSE7C13BPowAP74j9t",
  "key4": "imaacVGwcXgV3NfwCAng64rv7tASzkWjwYMkUgYMrDjVpcNBJAZZ6sh1RE6w3RJXU9k2LVj8nQp49iEvWTzfjQf",
  "key5": "gKA8MFpjWhdurTtrXkFJsTu4uoVtLWQ6BCcZGA23TtcjbSYe1Ncu14kyJmYdTFX96fpUJG4KkfbSheP3yyUK5cn",
  "key6": "4dLev7KuEDFhU2LzDxMDEewUaqWpvy4yZsN9DDHomf1RcvSEcdSvGG6uB1c8JcWtwAu69AXnmbg3acixeRAQQPAb",
  "key7": "3bTrzYCMkuFi9qHtA5bFocM7Pha6XU1okXr8pTmvj3PwToGF8bctsHwtyR7JcrfmVbti85yLkh2cnKc7kS6njAg9",
  "key8": "3iJCkNrbFBgyC2yHSMaha5mc2AJADdTvVV5zCh92vMTBM28aE87rNEcTy1k3i8DNjvV2BRBjASn1gcuMCepkvWmN",
  "key9": "goE5bJXKeqr733SVK1WddU6v45zKw5PoBekskdC18djL8XM7a267FzoBXv5USj5qtGCuBjm1jcJNBPRuSbrKjm6",
  "key10": "5huGQkvT33LhianEFFdNc1NMkmPrb9fGYkHCWFb1sayc9b4AjBsjkWBJFsW5dFZL9KJvvvWJgWo4gUhYLWdXBkbz",
  "key11": "2DkLnSR81peY2Us8XKXon2T5QqMuC2L2NUXxEq8xFG99Vdji2iQZ3xoUuLppoHxHvJyFZTuQvMJ4ejKXMPctB5La",
  "key12": "2qWNRqmTtK6qraH2pZ17kdw7aW3HRJbpt4RhSTQVr4oErB6a7VNMuX4KafVGetWZFFdN81Vi8E9w9FqFynsMZ5kP",
  "key13": "3rfSnx6jtfm1YdDb1YUzhZSVtGFpuJJhDtoUftZwFkrDJr3bKDZvLrhV3FhM9kGxz9669xtrifZewJKujhLXgjqP",
  "key14": "3WniSbY4mBtpV4kpKdVVvqbB1pYmJo262FQhgSqdN8ZmC3zA8n6fSmr3hpUJ7z5FEVXcaooBso4nNoxUwsATN8XZ",
  "key15": "HRUuPGckVrxbrDk5sVMSdrW8ddNzNSyod76ks6MXae2mUwtsLy7RAUbWqCv5BWwXWtxm5tur2SjkwEBgvUDKS7k",
  "key16": "4Hz3HUwnCqFeya81paTrfGPgE2wfc3Bw31Udnzo9bpdhc7N9MEa827JUVKi5E1sSvbSa3FE5SrR2RTeBw9GwnsrN",
  "key17": "vKX3A9s9LznfFgV2irmV7gt2xbUVcR85rjcvZwLUsdWh5c4conVvek3wEFzAfNKxCZC8zcpXrXDA4ux5VKfNBxN",
  "key18": "3uDJbnxpwX8ntJZNm18xqeZLDg45YPgKNG7bYs3EUUd1QQnpEbWqj6abbSixiughoAKXoZke993p6hbmeyVyAsvH",
  "key19": "3YgikHdkZtgMghiMhd5bMxQpuDBmLhBFMfiTBDPEAanRmavU2N5mqCbNKdPHjCG46mR4xsJBVfaoNC6tFdFz3HdE",
  "key20": "2iLk5S6UE8ed75d7NSRSQojjCrHKg1CMcVRWH2jVVtTWHK9eaJy1cpPDW9VsZtUDPCfw3EhZFCFY4aTm2erBvhWK",
  "key21": "2m3hWdwnYdx5M2Sao1USX9Ax919xv3hBB4TPmKQrEeU1c8vjkcj5MWJ8LThvRCraPDZJSZuGp9uT1eKqndDBQyWd",
  "key22": "2wDhmJBgRDSQ81qeBE5fZR4ZJqdbgoQLoujZ2a6NwxuUMeyRu3kgo8TJqasFWJ7TreXZ2Dc4jiYk3dEWXaBWNh7P",
  "key23": "8jbJojNi2nPVPqipxX5Tf7tanfgtcSRTGr1GeXkDXUYEoiDp5GpLnjZw67dJE47DiMw7SEaVEwTPF5YwMbs4w4y",
  "key24": "4mx2sCcis3jSMGe8H8rs1oG43vnwwxj6fE8mGdF7CSzkLT5fDBPSFMjL11pgXcc8T1MWoAi2Cac9PskJ13d4GZjc"
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
