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
    "dM2ktdNurLiJED7dkzjfhszzguTRcNFquczufKfiEyFsyoLW2Y1qVDeDsxf88opMSeK9s58NC81aK5xUTj1Gf4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jbohe1oNtsHMxB5Lx3pTTikfjuRYT6J1LoqVb2yQAHztswXtUUEruhrAM3xgHgw3FgoKnBz3FdYw1hAk1U9m7SC",
  "key1": "LshAtNRjiqJRJ4Z3txgqADRQ3hh5hkEo5LW2jBD9BFPz2Lx4mGds9cYYXdVL6yxKbdYR8ooQqqUfhwSbdAPyqt1",
  "key2": "4pUy9pVX2y8qpdtKg2jEKHGe66UruRJGzNafrqLFowHQckqPTzrF3k9aVSZRLfayBfVKr3hfGbp82FuyYTawEYme",
  "key3": "4Qcsyg6YvgVF4Bwv8hGZK5pSEY3b3CAw4ehQSKW3ZNx8sKpP8Ezs8FoK7cBiL6pDLSMyCZtHRm8NAKsuA3LA79GR",
  "key4": "3MiaYyYje8C9tij5ftcyStG6Tubvwvo2JtfCTQ2zdUvLi85NKrTgVbtUjfKe9TbktbXj4S1CUu7XMzM1gwVEfaHT",
  "key5": "5bGftiCoebgLgEnwR8XVdWwm4rzNqLjmKm27AATg1QyC2nRhd5Z4zpFCgpW3hzEGUoLSgcNg6Ci6eD7o5Z7Hspw6",
  "key6": "3ipj4B4A8j4zdKuZ6LGTV3wS6teh92xChTKrVAFsGw8zYpse9boiP4SHrBATmJnLDjdBMYDddvjdxCW9yre4gZC8",
  "key7": "jw4ZihBMpzdXLuRKf9biu3c6YuiVb3HakVKqNvwJwCZxzdrdz3HNvLnQCdrG6iCTmPLzMevS9qytrEZcef4znXU",
  "key8": "483qQuFmcZkP9Q8qP6kCMGbyBdwvF1EWSiZTzBz9GHhZGxeroDWL6fiEhbQmVLKvndmk81RSos1BmDCNnumKRh6c",
  "key9": "2csaLucK5ouKyLrzcb7ygWyELvSSykTCfNS9XCaXti1vMgiPqLABr5nU3DdCkRGWJjmXoqeU92d6buvgSKwEKiiT",
  "key10": "5bWERwEtBBao4j57YnXTbUDXgvtRu2vkmuCgWudT6qPhpqu2wXqvv5jyxiTn8zVUUu7hKut8ujVD1pfdw5tMaVPV",
  "key11": "344G9TbjKLTgmiN5xrUCqEvCog3YTZVxMDQbvzgnndBkpebaDuyUBr7HhLz2GuEpFndiHQsUgiUvNRBb4AdCDq9S",
  "key12": "4xeJVR4wrwkn1pAQtrSLXk8z2Vw93XAAZUzYEqNdvwh3GqrP4EpzMqA6Hrpcdt3p9gdZcsZfcVr52TDESmwwXTgk",
  "key13": "44oh7V9rRmyNJguVs8ZrnVt3pq9YiuR7B9tPr9wQRE8Nr35dYnwSMTmMEg8EjiThC45fhqPEx6VNpnCQCPFw36eB",
  "key14": "4WcTmhcvcd71aUJuhRi8EVa7P94Ak3Rt4aguVm4m64WTLx54viBeJm81JA1qEvxMA26eifTrM9Zw8ZLjnh1UYdik",
  "key15": "27wyndociQfHescDPVqvVAWSqqy8t52ysHcYHvC62CUnctc3oe1hQ2wx4GaBvrbkWmA1zB5He52KjATyuWwp6Ft8",
  "key16": "3zbrXvSKy1MXicxvokKyQYjzxtGdahxdNkPRW3isJHcfhuk2sEY8NFWZjurX1x7CJ7GNqEgB82Q5ns6AGYZRD8er",
  "key17": "58NDPtM4pBwEGnLPrtw7pwzLnMpbtXURGFL3pMtt6zP85Abch6s11sfEqT8XH6jTLrp4QngT5qrT1VDtVho8exej",
  "key18": "7ybua4uTRjHYesuTadmTbLtjTQVRiPRE3DDbCntnq5UcwXvrcUuQ7wgKMskYAMKv7vTD5KXiQM1TivbabJA9YoM",
  "key19": "4gJ3TGfWNN5TTW5mkJAdkSzcxW5BR75eb4MD9ZRk1bFinyaQhgVbSM5VRCAqtY568PXXtCyCbE3gQWaTZPjWwqjj",
  "key20": "4RFgNK1nn7yB4sEGBBaqDBx5Mxv4w9bCnRLPam5C1AzthgKSap2MTiNNx8uZd8wHMtXeDPsyyPVJdXvPL4dpzKnR",
  "key21": "2TYbGAjQQUBsHt3WizFDy76YD1gUMvPwxDZZkbVxWeT66HSGT1BdcMLkE3pJ1nLysRUe7RKA42Q3N5oEMMThYt4q",
  "key22": "4hUUEStJEsHFLSZYD38CQjRN9LoxEcLgWArPL3drdfEL5xkf1yA7afn3ZhettDUARpVSNg8NWC2WnKgR1ANpHdG4",
  "key23": "451QyAPg4QiCBpESx9vmysiaHje5WeMwND2be23wB1dWFkMSiKYFWXEkTAmXu78sr86w6gp2dK3gVYf9y35Njcug",
  "key24": "5f2p6QgLJ1xTSmq97ZH8ARG4472RXfrhkamFCS7mprAFkuT4cDz3n7QeBN4QdFB7CppakSD7ZrwadSpD1ftNFZRs",
  "key25": "2Dfjo1FfP5kv3eBLz4xNKxDtqTVbcv4xpUG14cRBDxe1qHXiRvX2Ba5qNrRy9EVALMhM9oPYEHi7mqT5FSAKHPG1",
  "key26": "3Tf2EWhHkzPMzvuHrrH2KNovpq6Fm62LWaswmuFCPez3bP3BpnUCjN5CJ7Rdmf7f41DFTkuaKNThbsX5jMpJ4bjX",
  "key27": "5x5bohWckqH96HKatpov7enjr675NVsaGyuXV8VTKk2fgfut9RAGqC7Zod6JHjsHvLYd7AuWkJAREyrgRLeEDWku",
  "key28": "3deoD74bXwR8wL4BckFb81gHd9uhfniapSFJkCSLa4kcAv6Ca7TcppKVjCe18GPZa2kGdGNQUqVGf7mnGkApnRer",
  "key29": "3ycNSzhgcjv3UCvtX2PTdGb92WxkWELCvv5i22mEf4oBchuAKde5pc7mH6tB68fzuTqfEoAeKhzQc8gscarzGj8v",
  "key30": "tFTSqK6gj8jrP2oBtxttN8wcsLpMxehFkrCJ2344zAzVATuGyDok8itxcAYLDNgdB4nQeiGJZNGq33XZNJZJdRo",
  "key31": "4FAsq8UjVMbFd7v6Y3LNQQs6rfmeCZrexEGG6akfaKPhefD2YiZDkznbEUiep19q3J7o2WFGZ6WYd5orJV5cARsS",
  "key32": "4ENaZNS2BQzZrD4pQR65bUC5Ywdgv332JEAWvooGrv8zZCYD5Uf61Y8CRZKFLNAXUnRodiWCnPLm64Qq28XNMk4x",
  "key33": "m83ok1eh6wkDd3nDFtXhL1GFAMpUdySmHxqEDAghUjzHnVqorpPzGYuj2dRZc31Wd5drs1GFRcbSzJypokKDfPj",
  "key34": "3GuiM4vpZfHBAUhTjSy8Nx5LxFQQG5LvRiN2KAxZW5U5vraK95yvFnCnejTU9epXbrJmx45938xr9KuoeJS5KfBp"
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
