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
    "2FsLhoxes5oDfmTKUK7voVvKFLrWQE1G9KrMi5gFsizHuQyU1XFp3RqA3cbvAUE6SvghxN7p5mdvf5ZK2b9iNXMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNbApf8UR6q99Grce6BuVPGbWPykBr4xY4K3TGDwW81X57sTi16oBLwQiTJD2PAGQ5uZeNMtrJQVA8ob18X8Pi3",
  "key1": "yFDP28F13CCDCtEcf71PC24biq7yZ4A2ysJav28Rtv9Hzuto6mMH3oeFg8MPigvY74hsnMxzW1D96dJx4QPcGhe",
  "key2": "4ge6hPK3sDNGBmzzf4SwqYKycathBUM1ZnPWmxrNiTPsMUbcFdaVqWBdQXs8rXdVx3xpfWw3MmUpqSVPc8B8VY4n",
  "key3": "prJaQPZUAYjbYr3k2GBm8LoeR9GAvPZZrkgeeFeX3ZVTu1mJd5udUWmNA6DDbKJieXMjqN75XbWcddnfJR35DwD",
  "key4": "2TKmX12hGmVH5isgJ3nV9JxnbdxeqUQiX9L3SvPMAk9AViYdxav3UKcn9ATkMSaGCE5jcV4TbbobXPA1XwggzGXt",
  "key5": "qki2h7mPaQnYZ4WJD7G3mfJhGvwZU7GUZJoqon5AcSwheHer3EMicfhs6rbo4QmChZLukY9eZPBeXpCdciqcFnB",
  "key6": "utLDQKhQDiCwkkbXHrujmexxoyYgmSwtU19GGuhW1aycprjuxhLg8ubCodwCi4dzXZzCcrXsMQT6Kv55X6KWAEG",
  "key7": "4wYd7n51zLW72VMnKzAGxehpgD1ivfQPy9qbNAZPFZEzxx9uKGECY7sAi8SwehfeH1PHzGQFHGp744noHorEQHB4",
  "key8": "2uAfceS3yVv4gwKspFsiDoeAMJmEcJzi3darx2KD5Z5iS5kWXXdR6huZ7FJSW6AaHLwNzgEfzjD8cBZG7QtYgxTy",
  "key9": "2pahPFCksHghcDinsvWrKQAbty1p9aeGsMwaAEpAcDL4xRdGYGRJyN4313duFvq9RCr4cs5CVSZepuWCHpTtNXW",
  "key10": "5rWPeAfFhHoNzHY5ZrQhTuMHuwShZS5n9SEVEVBYf1jcJtzt2Pytgd46wsZ4GPED3mwX49nanXURpeAuQrxemaP7",
  "key11": "3UkzmyDysst4YY9SkX7SHYubwfHKMx29s4VZfJVQbQRcPmEhmtJS3Tkuy97qpWUgR8oNfF7ZnB2J5aQvTk28wHoy",
  "key12": "3sKDBEnSe2whPvTt8isqQCCLLV8zKCcJRp7uwLndniW6MoGhSrZ6CrsRJR6UVtLTi1j39rz95PmkTZcP3FsTZV9J",
  "key13": "5P7fmfhc9gDNgrLLsUrsKXfFrsYKJ32utAVP2WYN8Bb2aUJS7xjUuGu1zc41Avuq9oEYT67Dv1ygmFDV7W1pbfin",
  "key14": "5TTnF4o9x7Jvx8CmDF2YB6qMyghAhxjk4Lwcc9RPNDW7TtiS3nq4idTQNV9nE3BnG5a5om2xATdky1cL5Lg3oMHw",
  "key15": "WM15Gh1MykKK2FG2Mkx9mw6NKyRW4EhXZGPt12JKd9jcV2D1EQTWjmLBgtK2zfGH2NVihnBqUhdfq3RMNbnQtKs",
  "key16": "5kSo24CTC8jdtQBkLNWAR3Hgv7vpomrRDdkP7VXjtRQs8S3yoDAQ4hdZLLPUJBRMBbHhDSmd2otx8r3Ju6jV5ToR",
  "key17": "3UbZ4kraJ7GRjmytQkJfSjXWWgWyQuuy252LiY6y1LJx2SNefmDfqZBm3HAZ4sR4uXdJg71jrRU4siBS2dRtpbsA",
  "key18": "Mu4qjmEZHpEqwXN2b2KNkCbfzBQWayeE2NmG9fsaxUrAC3cW1pMht1rzWTyqkHRDiCG1PpfzdhY3h1UsKjRV2Hv",
  "key19": "2ZaQnJw6YDGm5VYQttJvr8Fa8eMSH6emxxjwn7NsFRJBiPHs3wqmPhYHpMELxGBR8Dg6tWDk4bGfBpATq4Bk8sVQ",
  "key20": "674zap7xjxQxxv68ea3Q8JEFkCsTv8q94vSBDP217DfdFqpCZhyZeQhKHd8ehnFAiy6DfXDEewPhZSoWbTbZRLfg",
  "key21": "2pZDDC3z1br6aSLNZ4iGpvF4cewaNc8k1yR3MPVi6UkMphBvHeEnggrkt4uXkhCxmFQRwrP8o7WMqjxaTcuKwCHk",
  "key22": "5vEbYrnEz8GxsAYo6xr3BaHksJvd6Cj29VFvY13yaekAER1xVVfBSH8BYVuhuQz3Ruhh2isTPxzDjCWx8EUqTQdc",
  "key23": "4EMAC4e94aQDcdthPV9A4UpfVzUJSr3qkNWGKqCVX2fuNynNFVqQ6i6hJ5aUim7gtuE2Niq57kmcJdn8H5ZV3u6P",
  "key24": "LPvNdhvn7zDfia1Ua816va8QskmTo2x5XoTzcoLbETHLqqkCtuPejw81D634UDXikEwq9BbwnVMnGhiErRmms7E",
  "key25": "oVxU1wF5ixDZnbevoMDdB4KFQGp7woABU8CDAsgu96Ytqj57Zdgv7CJzqykXbDW2KmtTKeaWWZ2Peo93K5SSb4P",
  "key26": "3wFjfweFVQ4oD6Be6MhQWSiNGq1QPMnoDHV7fXNpJLgKY2vxQxUHQxEV8h8oSyhstmdP3W1rm2kApsXUFyYWMRf8",
  "key27": "8v5TcnJMZecixavTGhHrwrZ9rQtYnyao4676YTyLpAwAUAeZ5WtC7Qkgtsiv3yZnNEmYe3ZmUnM5L4n6jEDBFQ6",
  "key28": "5EGYNohmFfJSv9E6oEvDRsNwiJtgRx1fFua1hFgi2p9pWFohHHtbHnj6vUUTqSzXitQPoAFgaNgwzAVrLxmifQBP",
  "key29": "27F7n1dRwytkomSUE7U7VyBogohFA6qPPyqfxLDRCuF8DusAQk4wLEoZGEVBYr3t7tdtQFscRbxQG5kCVqkqBvBk",
  "key30": "3dEeGSF816zFHeSfYYFDmCnWfsAcoD8LApPLz2TmnnrtqfdgWE6VjeBhZBcjumT4ZDdQ83rWpUud7NoDaSNF5f26",
  "key31": "3cexz9kQZ2cXfQrPhJ1ZR9StyMCcqNMVQK4vt2Pxtet7yegVXuhCXYnQJGKseBrTgF9joWqdEnymERBx2JPhjdn4",
  "key32": "58npNR8QATAG6Qx4HPpnc7q9c7radMKyRhXgBD367SqKZ1QN6fy5pUPStCACD5jyawmoQH1wnigkr8jhfDSLAGHC",
  "key33": "ED35cEjzVjTjWa3mtxznpeo1Wg9cHH4RBwq2sjiABt1VzVGUyTqbMVLWxKCm9vbNasvgdLgKUKdhCZcdmsDJngi",
  "key34": "2UgWYFETpkpfXqtkMxrKeoGG1upfi8SeJSVcB19CCjt84ydWLXzNDkPqcssS9BXvFHzQce3deLdjhMGjiRGeLayF",
  "key35": "28aRvmTHSnxFar3i2qL3UuDW7eyXWFb9uJhwMsNe6MeyDuiSnb7RtoNZPEPWgocApvYziuQH82GY8p1kaaBXyfQm",
  "key36": "5zquTiuZqJA5GQ7R4btrQkrHHiDphVDtrcRsF6UHjf5WeKDhJCt33eHh2Eiz5EPGQ2RqrEoGnDQ7GwS86ygfHFKj",
  "key37": "2gimV3ZamED8ECXtMYXUorr9vNqkCaK6WbrqEfuJDupMfCagRcStMHp4Yx8yDp28j6WZajWYfBEDmUBtwcQ7MEhf",
  "key38": "3PE59QaVrFW9mQuymJm22T5U9qaeP9X1WbPdTVWYoTLX9esxQmgp9tBm3gafajU9hxgsjFta2Z9GKTt5cNgf17fi",
  "key39": "K2hhMTPrfJYTR53x4uy9a2NyxdBjF1aohrsYUmUxEuDox2t9cNY8hbQw7P7qpfRPghT8jcsHrTT3cmaBJBy6GgW",
  "key40": "34w7pSjEB32Mcqt73CfeE8FEHmiYSpnSxn3pAhUSXWATm8G1YYGdCU838f2Pbaedfu1SbvK2CzYRAvgiBZzyyTNZ",
  "key41": "2PxYY1z83ihMCBCMWaTsxmPkceLM57tRo6SWT7urgYFdUb3skSD7VxaYwGFx3pRbRimHXXJKW1SbtnsqVK2jze7J",
  "key42": "2QYL3nXz8XPDcPDUpVs7yg5zctRW9k9TaqtJ2dzmYvWcETbypuXRnkuhCLkuMJJAMbnHnErDWrt1oMMs8SARFxVn",
  "key43": "5imy6cBJJpCPTxXydXzksBDCgWCjh5xcjCAGFsUoSM3xRiMVfFcih5spVMkBtD25UFWgwSMiZatgga3K7L6wwW4m",
  "key44": "2bZXro7HvJfMdk4NnpVkAptZgjBT9vfUHy3TcNrC5D5UH1g3D3XX2VRTjogD7RnshSQy511wwZrRoVEKLc5rzzY8",
  "key45": "4kTiThBdoU1RR2hdhApLHhR9NygBTKc6GHKXw5wTSQxeazgcZur4pZnCQPxUz8xJEnt8Pdofx2Vb5y6yF572ujvd"
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
