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
    "61HTtoq6JXJUor8WFfgW2hu4EcGviUaMDJmTXMDp8Zmo9WtqUb4ZWQvKxQQD9UgNucN95cv6HuCUmuTk9fw4SRgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nDdC5LZKHqWrMgRxkBA8x9nRhXGyHmBKrveyCHc4nnU6RguWYKBm6UjXYQ4RNgnsWmFPUFsURWGvZUZitXsnecf",
  "key1": "4d2YVyojXCJg7RvCgigccA3qwjSjJa5DTTmScpvUgPDEpUUPH7A2QduD6FmrWXstmc7LzPBpjfzbmW5yYkFoJWXb",
  "key2": "5L57tyWPvFjtC1Bx4xAcQecuWsqRcaFER27uAdtTbYXra77fPwMCJyTC7sZSdPD4FKut2Rho1tWa8VT9iLkK9syf",
  "key3": "BdsgcysozmqEDHesBacgvJSmdyMBtgYzCqtzPqALwfoURj5YY4RCXbkpygCaGk9MmA5Einr6hd1vYDaGTyeRoJR",
  "key4": "2uZ9y55mtSb867p2Pyrg62aQfGAw4mvz9byXfd3yeYPuztXeEGF1rBkedFUkSXp9KGv1hQzAjdo6BmBbfSXbAbPq",
  "key5": "5h7Y3f3DY4LdwMnsxmXxV1YphSnUbrFXRnRUcdgBgZS3bB8pQHDHbQdbXueBFhrCwRMp9Fa9tG35uDHyXanLJK5e",
  "key6": "51UMRqUE1HmkGfuaNKW3Qv4YkGhmrm1gwwqTm8FgNFEqaEirG6Q2Gm7SuLNLJU7xq5zNPNHbH5jzxNgUNKN8HVXM",
  "key7": "HQBMDNduRCqZFvcZYqiEQewu8MLEfS5QD4e66BS2FC7dMjD3Z3QH2QjopwuHTVdWKVCCJN6nsAPb6xKVSS6uZpW",
  "key8": "4Ui3reHNqMsWTVwCpenJggmuHP2zgdwDbUnXCHBgq43Qsz9Tykau9XnAaKXpCVP8ErZTzQHjdvWXPPh3wPWW6tSB",
  "key9": "5iE2W8n412xzmZga5jN4Hv5GXyB4a7UAUAd6mT8aWfsYYMNARCJbrmDn5zS1giEXmdxjaXtdJCWb1tzyTVWvtgQG",
  "key10": "35zeJwLDCKhQcBfeEJQUvrZwAPg7PJK95C4MurBL8YdtchGoKhvBgL2jTXWDb61fhq8n8m4QjabVJTYiwqZcpaEu",
  "key11": "muXHP42oD2vwnjR1ysgqvJT2JtAca3qnjdaLBUCwre5t6LRQcM6UwZvm1uJHm2xr6gKYG57DxwvrfBoJWppibGj",
  "key12": "4mHtGSXRNdq1DZ2W6mJrsJmLCHS94Gcn9WBvgb2jsegfBj3A2MV4rXHPCGtfgf4DQSffu3cqn1cJ7ghabqzbHxYT",
  "key13": "55TUeJioPAufa3kVjwbooRbBiwsJy4tKUxZsxkfFmDLLmszoLTk5MaLjoEgSHYKUVmeC43ZgcJP7nDXFJB6k9a9Z",
  "key14": "32GkKjtrEL7pzxEzkB4sqJnY4cWS55mTc75P4RguDMtn8L1avwzM1ufBpCozVLYusK8Gn17v4ikWmcXv4r2EVxzv",
  "key15": "317MmAheqsiNnv61Kfym4eGF6Ed621a9eE5e7ntEbG7yPzUvNcgViPPDLNsmaTCHEvTDFhu6B7NtoT3CYNyf9A3c",
  "key16": "5bDv79SrTjQtA2UkMKUTRH5xQAesjcUYdpPDC1ZYWgvhEwpDuN5CD2AY6Dz13PqPJWST3XJ7gCsAN3oZuW4GjZeU",
  "key17": "4Nun5WULtFsfrDLC4HeETgAADwCVM5ywjXgmFGXhuJah9is1ygF31peuNWSh5UoFxR9p6UsHvbY1CoHAW6Yryu1o",
  "key18": "egzLwS2siTR7koH1RBMBfQDTxfy9Es9UwnfmxEyPYEiUhbhz2R1z9kz24X3grbaDAfYctMeUgz7M8VQVg2QaqS2",
  "key19": "5JkTsagYmJwfM4vUSBtcZQyBCvvGvWGhPgaFgjGe78QkrtVc9kuH2Jp5L2BckFGmxZC9oBViiEGVbTi2NwdEK5m6",
  "key20": "48FQcKxq9P41DMKqTfugArkg5oY6HHLFHxxhBkeFiPFumFcUBGBrEqyvxiMHJdH4V46c8W7xBXTBT6i88u511PYR",
  "key21": "3fjeNtpePdXbLRu5bQT2fBJfGh8EwGPpZCgDhkk9A3yi3hjrRN4ue4tascuPzarjQB7MLj4ZuPBQDy2D5YKdWddg",
  "key22": "3QthVvH4qWHoHTwH1SSxSXsykTMHy9wkfC3gqfi7mdxsqynTdAn9Br6FLsJpe9bKW9gZSKbWXPf2eA2X7JZ2kA3d",
  "key23": "2cbLEZSLYpe5Hi77DcciEDgBUvv5v7p5Jx1Xy7PB5QxVBUVJkFfUDnMRd6t9Ln3hD3gtWZMYAudR7h71mXAfNWBJ",
  "key24": "rmU8wz7bGoFBtMzUrCAJryEWHPU4hG3z31wELU8fQnmdxxrnfwcvaBNv1G8CBPyLCMXehA4of4As2QzB4e5NYzC",
  "key25": "H9fL112cNT47Nmqod9J1daG1oeCRTeRrhN4uPsZtwqPBA12okYpfU1g4dAUm8FrhYhgD6WJk1BSDZEkkDVpGA21",
  "key26": "2mGDuyaYE9DjWAVHZPymkWLJp38AUouGt2gJbAwyBdcDKKSPJNyfVobQNfWFxsDfaU76WMfym3A68edWSXY145St",
  "key27": "4Fckd8VZGTFKsXxdqECwzbtmy66JGwuvc8wkg73WYAU7P4g7N2uXX27UEArq36SuoWeMew7KhNouE8bxxEyt9QVd",
  "key28": "mjVtyMGGaLTCnoa8eQSnqiWEm8CWNVBVgxXFh8WcAJBwcxDmPdbXLa4EUaeqaxkmzR6jG2Ei8mix6XDhD4FzQBb",
  "key29": "KfP23W1KGVkUgVaLGpJLBNmJgFzAmDVbRKhEz3TyG3Zdx4kqaBQJuUtdLQhMYwYVE89EjVEJaq75EtemiTcQsfE",
  "key30": "62Rf31RtJpwrbPr1R2e62wseCg3a7jFcFUeiuUskooitqXzwHMLAMxBB6jXnLVDQXjcatr55KFvbk4yNPLHMJv7i",
  "key31": "2qAXVDZDTUvf6s2tYyvVj5Mdfxb7jeE7nyyxr9SgLyAFXN922HsVkYGRd8GbQxkZXhynFS5r1f2NsFcj9YDSPc8X",
  "key32": "3jk1HtbAsTiiUFg6xF7icCVBQokTE1ThPkGyk3WoyZNng3wVJoH27ApJUz7FGpU4NbZ8eYAGaQrSk317ZUCmKFg"
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
