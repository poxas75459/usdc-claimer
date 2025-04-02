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
    "ZY4AgXor3Fy78vNhoY8qtaK2HAtfpA7p5N9J1WRci7kRDTx642C9Vw4TDeWUfNV7J8ZGWR3fZ2jtpeeNmjF63or"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FG5uEWfjEJnSS15mxHVJ5Gko6b6ygJjQLM6fvQKaXo6dN84TzC1WcQpkgSB5uXHDbBFqt6F4SJfhMdewJMbGcsd",
  "key1": "6A8Bu3aUXEMJtar59xgGiWLiZcFyQo2qbbZ3bsHuVYLEExyZQR1XFh9D8ubYoRh5dg1iAsHPpLvWBjmVDy5voSc",
  "key2": "3989HDuvqrdrSNoxfektkcHDPXaqcZYprCDwixtH9SvsvmiGjaCkZ1JeKPEE3hvnrdiPvGyY6f9u2H4MXUisT7uM",
  "key3": "4jyfxPzy4w8vY6Y9cww6RiuSvm7p2pu1DTnJCSkdEvjoHDDBk9Lhrdb6seTiRD1MbERFm18oE9fQ5E3vGHri6Y3K",
  "key4": "2gtp1NTgNz4QayyvoqaGnLBZSc56GhNoELEDY2LNnwmTQsTP7TGdFGFm5nrxBb4wFGR3hrpgVYCzvAmKhCf1U52g",
  "key5": "Quf4tpdxwoL8ZcoFqndR3fmy2GWymf98EmWnx2h1ZuUSNDemt98iYgKPS9Ea6gLkoAgWCbTovbt6wMM14CbxrGf",
  "key6": "1qTLL2FNeMsFDokLj5qrkpGsXkfoEQYo38YTVtE5zpnCR1VAFZh4SpVuNeRm2vBceA45tGnSk2dPhaRVrCHpUcf",
  "key7": "27USXYQUnH5X22RYxutqcEg8pV6phJvxw9AAdyKRfZ4uZNSY9uqc4we7bWxZks9KgXim7Wjq3Le3wpfXXtmrh2ts",
  "key8": "5XA84AuNC3z2BFFZAXMVxUvrU756iacgLRzEbYVCQSXACH21gbvMoHZefe6isqpKFnCkZGkzFxC7YXXE36d5htpv",
  "key9": "46U6KYX73wDtgfDK4P6GKc5XnPTUrgCh5yBBDpoB14mNELP87eATDg4qkJbptyQK1coAUoBkK2XfTWsyLtEr1s9L",
  "key10": "4cyWQVTxDDCDb8rhtaMBYYaZAujZZ1V4FHpadhuYUe1A7ZWgqtuX9zMGWMwNSxuq5x5sdoeL8Papin1oyV8CXu4f",
  "key11": "1kJpurVMNHrHF8154SxaimMAFZVtdWAJDuwMkfrgp4B5RHjas7oWpGhaRUbiaBcqahaKDDzCFFMWEeTmCSdrr43",
  "key12": "5b8K4KZy2ojFuZNYaLWqmJP5T7pF3pDRpXvRRdpJ8JoRuPF4TECLJSjtzB5aWjb3rTUSonZkVb26NNbBtuA8A89H",
  "key13": "5NCGGvEU2a4EDHzi1uQGpqnsH7WzGBMFBCjTV9yNJFvczHtrA6DCq6pQpBoBtVk1AWmvEVkMR9xP3GdYUe6fXuHc",
  "key14": "CfiPGuyYcs3jR6aSEhjqbw2fpSGYAzwvHxS9okcjGJ3ZAcwkHu7BhdfrmK6wyNCvaVgXMW117mZjb3sNRidNLgj",
  "key15": "2Z9Zi7sueuCrNg8N2mHi4Baka4hrCFZrQXyWCcprjo6mnuiSNiLd3DH1WyaYxxi6S5w4LevEgaETxHWcanpLUEbK",
  "key16": "JwANN87iBe9WjVzc22o7DW9QvzcTYRMmo5znkYjbWreCzCtUZoATDhN24tX6ntiVGp5kRFqWckXo26G3BpG5bVM",
  "key17": "5nDMF9trua7W1CEQ9T9RBeW7NA2wUhHyBFyFWgkWmn7U8F9k8ytD2FXwMpkMxQ4UfXfRnqZZCvAWzPYKGce3FVJB",
  "key18": "2RMbofM77jUboP6dpTaFsxZA4712s4cSYikLXF69PR5GRTHJLLtho6M1N45zpqaSbK8AsUvEs4ZxvW7a1JBDbtND",
  "key19": "2og2Ps3UZJjSc5emLGtmKHDPPb9JwHoiXTRa1BVpdNQMjYdNAQE3gSDuwEh2aju7zmrDp3jButVbHV2i43x84icm",
  "key20": "3raAWYnsjk7zNQUH1RAGDPBuNSFGkLLMJ2KkB1CZcCTrf9bN6Wnf9HTz49qAKj2hLgHYxcjDnEPv9fx6cSgjHG4P",
  "key21": "qyCfDdttTgan8jZqw6cAVbKfbi6nfihE2cCuh3CGTbZz7TfvdHcenZc7iR8SFA8YFNwfh5yLGSBY98zksynEsEk",
  "key22": "xR9ixg6jBb9S9Fi4gbF7QrMTutw9J4U848AuRT6gNV4y94ibz8Rax5J3b7QYvT6a7wgRDEe5Ky8TbNegNQsdk4e",
  "key23": "5v3GqN1AEHZxN5tPRzCPYCdNtnLhatmqcE2MexEyyedogeLRV7RvegfF2kjM66VpDjy3bFNjzSJoF3yEhLNX8mML",
  "key24": "5MPhrxqvttmriCLaDcSyKEj5h45wrDdHaa5ZU8fVmQh6m1LTvJfRMDRq8JNo5sx4ysxC3WTyaczQuCoYU5L11Kq2",
  "key25": "5HWq7TcoDH8TPJw6N1TjqsLSin4wYFjfMr8AixoqKhB5nhHjnGSGVyQUbEQGAMJi36fS3ZFPF9e7bRpKbnsJd9US",
  "key26": "3fZgk3Jm8Gqk7Dzf55tqs595gEACfbCvenWjidgPHgYusamNgps9ehHp887CJFQw5V95dqfpKfiFRw2V9PnRzbZp",
  "key27": "nbgawhEwbxRELtCrQYNfhjzXsrWfMyeMKw9jzumXzW46c4UL6wzDFsThUXrykNdMou4GdxjULzncGxV5sQjMVDk",
  "key28": "Rq5aDMvCYFxNoReF2nvYzF3aG6mQcPGNQXz87qn3g9gzniHXcc2VajJPLb2mytcXaYkp3wA5FBG1gwyezkMZgmM",
  "key29": "UAHuxJHZLXkocTZZaEvrHYdG4bK7sLh92RNaU5r3Q7fYLkkVbxvSX5mfsc3c19GhybvFfg7wwNhV9MyysKdUVmJ",
  "key30": "4o2u6F8UhJRGwd6fqpNGLTeCMmRsFZB6Ubm21v5iskQraLoUdooWCgCNuEmbVVxtU7UjBzUGymHr11fbXRNSPXZN",
  "key31": "2nfbNKpPMX4gGWZWqCYnRghYT47j75FoCCSNEQk2rK51Mfi1AtzveTARhZzqFGUNAfgsmruhXn4rG5R67tCiGPsF",
  "key32": "3ZcDQD24HYnaF8sezmYYkQ1Ag39TMay7xDXM66KycCooTD3FyedcFifHHTSdqYbFzctmuVV7LJzTxpyfteUYrbLa",
  "key33": "5wXNCbcs8dDeyaaPRW1Ck8TkQXPJ9AA5RxdAj8vPTCtyJfRMCwAsRupxwrFnJir3urGJfACxL6ipaA5ZSbU39JBg",
  "key34": "AYwU3byyruHo9n6Je89nCirUxLF4FeAmpUnQQMv7wLUhCNA7gfyrLbun1XAwizGrkLmoUEsqoTDotbr9dAde5Kq",
  "key35": "2pyQyEGyHYrB4ANUTQ5NLL8JDjxZcfynhWzaxHJvBxYP4mVnEMRmUc4NPzPjtPeh3pQRR9cDP9UMMkrsdxzdWnbB",
  "key36": "5wE6vAxnac92fa5CnqmFkyzu2ejBshiGwyoDoCnvCosxTU3XmaQc5n9ZG8rHRAgFRKVfevUhhwmfinmHeHjgVzEM",
  "key37": "4LAABGbLsxgxTHMstHzSyd51D4boQE7VQ8yZruifKW2jke6mfddCC6ncXqWNrt9juq5KXsX9zFoUxre68sSeWeMz",
  "key38": "2qZkc4iHtQ9AUpwrjhoX6gHBfYUht4BbCEi7hhBkMwnuyiEZr6v1b56zgFHNnjquWkc8WPgPDowy8wmHBtV8Q54P",
  "key39": "611QxA1TAZ6Vdy1WHKx2rkLvGgHY5GaUxrK8CBL8vuRCYV1RtowwwrcXPEgG4uLtJETYbwbgCw4DqKvXG3BW4Fhb",
  "key40": "5mVH4NU3hiNeUbefarJqp4ChhRRcgTqMuxusvVrxCoXkV8cfxyTNiNc4xPYiLTCFEqeJYRq5edXNuumSquVqmJoG",
  "key41": "LpWPVi7pRAJCw9GDLM9pV8csTatcWQY3Jv2qogy59wxdv4cevsHpDNc3781E6Z8U1PCqasNjaScYE2oGdLxMSy5",
  "key42": "WRVnBka74Knpd9HY5vTegjkBrYGSWnET9RKvJdgMNWMgRDRhzkxGDu4KgMk3HymRUQwTG2y9nViS7zDT24pTh77"
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
