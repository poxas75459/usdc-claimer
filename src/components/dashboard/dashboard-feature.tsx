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
    "5dGoj9NdTjM7sU3xBXDkdQMdx6KA6uQuypNGHHQrv8Wncx75y7BoNgqHkkRopFAKE82QQEjjmeoR2WE6XRXqURme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cJYHzHAkm7NMxeyhaCXx8yZ4pc97roDrxzoiMnUY17grVm7eYnFvcL7fQaaaTjtJRL6z1LG7QCwEMhfqRrUfk37",
  "key1": "47jyzjDwcpxoBT9LmQsePvBmRwuWJoFRnBhMUTCDK7cwPqF8SwfzQvD2LpGCvHvP5DFhzxgxQmRVDjBJHvVkTKHL",
  "key2": "ai2FwV2YyUzd6PPUzbXpEAbmSfS4BBhJ4QpaRjXMnEGiGN81twNZ56LSbDgdDLGibZypa9qW9QFiPSxMU9gczLT",
  "key3": "4mM4AqEfDMHXBg6PiJWtJrF7v9gyoFD3f7GybWbcorLRcoo1jmS7vLGkqzq3rv9f4ht6H9rMWQE3yQvjshd95eLQ",
  "key4": "kTDaTB4jWDffeEKmFjX2V4cZMLHbFn9LVdEPM6T5epzuLiCmet97weCWbTKNwGbsukP6XUkihbabKEpW2YtapgN",
  "key5": "2Ncuznrj6PBiyLUKqcdHoqzSfr5B8DdTEi2CGAbqmjNoAKxajhzPoaUbo4wjYXHb3H69XurBTbphW7u6kfHMA1n8",
  "key6": "2zddtmYjUjxuhvF5e1BHm7CvEVsd4CgayzaaMz7YLqSHZV2xrmV5DyTm1ApJHb7LqMpjaeYmWx1V2YhujsuWfGE9",
  "key7": "4GH9DZuix4qV1jfMwJkhHmtuJyACeFRmPyybeZryob2xDyHTuqNFU7JJTiAHk8SW2KVpixZpEzMBfnc9rFRekFBP",
  "key8": "3zX9mCC5CMHKF5sTX4FGN5ExFnMLQByHH7U4zrRvUJfkwY4ye9FNKdZ9eQ5BrA8YhvADEHKTbBat72BVPaXLEjW5",
  "key9": "3ZTHiK6hHeK624GUH9CWN92Wq7gtFbU7ghciUH4pPuvQ6E25DZqQ5HxPua89XGyBnwBNvvLocSSFweB9X37v6YPa",
  "key10": "2rNQsYyAUPb8CHPKZ65Qh5fWz6ofiNVQ5XzYCvGygfTXDyhj2si3bER9VWS3FzxbsK8uCMFg99MB9RPip34itfh",
  "key11": "KSMLUPeZxfNyAFapZnMwXvjT5fj5msSX1KWZke16VUk5wwj87tCH5oMrjFVEswsLAyZFpWfDurFr6RxCNhbB2ZB",
  "key12": "4fVh5fqWjRz73zTbHNiANs61zHsjspUYbDz85oXJWwHjoEqVTkzy5HfMxEeouJ9dwzpMN9HJERUb9mfTNm7dxvgh",
  "key13": "25GNJha16NtZzhk3pCRDTtjcPvQPQn1eNtvvJoSjBdSraasuA7DFHHZi32djs2CyxEnGEDtudUMdN53bVApceG5c",
  "key14": "3yVwL1mVKG1FH9Tx6xWDLDkwG3MRm3C3AgKhPjbxnwQb4UrW7RBFExt4Agedqkg5DQRTwtHXRdBEW1K9PnzbTnfk",
  "key15": "3YtNEfJBKi9yH4ie3ZyRGfzngG8TpXH1dfKk6KmEfvaQ6Vqcj8Rn76uKBaXmNF6dFzoSYu3aJFPvDurDYV86NtnR",
  "key16": "5C5f4LE2WMcRA7ZfrxWkYpsSJAk4pMAqrkakv9tqw8X2inhb8YcvB72K5smDU81Eq2pUkm4MWxEeLvwmzx1HRddF",
  "key17": "5XbGWyQab8e7CePVzt1DaU5tvEvq8MTkznp6u2S2P7ReCMpvKgE5xEEzLWTj1kPLBaV7AutodQJBoJkzesnqLz2M",
  "key18": "5DBpfSTfX9EsCtGZhpqohHh7mZ1pp2srqBHc4kx6QM8YfygeGmBkD1UKxZqJMPhshWtLqixuYCmJi8qxhyRZdcL1",
  "key19": "4c7TGzwhVNm9bDEnTVXVu2akCNAx6UvuJRBJwSKbEba7tBhtKCLBkQq9tsKqXcELAuJo32edLXBgJhzTJxEYjSRu",
  "key20": "3FLZa1rwdc3n1ZuQSs1rjXbihHEEADVvp3TiRwXDo3zRrSbV7apuijF7ZwACRAaebK84qryMRFPZdwfg4HyXJPWR",
  "key21": "33x5H9Ds8SQaPj2MtMth56E23pzkLamxHCiT3DgVNeRUYC9rfdbSRgf9WB3YasBNFGZFU3nXFU3iHcodPJmXNguh",
  "key22": "2Ggcg5SLBfrsep6mvcQsVpuU5DAVx228ripvARFcwPq9FCQvsKMnrckVoQRYCNbfkhjxopbwdXikB1eA6QMrmZqD",
  "key23": "JnQbitVP2z5fMuVzQS9rSV9dEC8PMCDHiYEfvpjyboSPfnksUhr8hcfdVyjWYRwQXRjTKD6zzgkd4ZYbBsGQxf7",
  "key24": "42XqzJWNPzNMeyUJnKf9vV92tCvPNarEBf7Zpf33v9fdydwmZPi37scZneYaM1eHjRt6rocqZam7toMyAj878DFP",
  "key25": "gVuKkeNkuJCuthn5depeR93RpT5AuiGMt8EpF6BP2M9fYLAJfoHDooLJf6SocZY5gvJpUMi8xEfKLmbmhwnYJsX",
  "key26": "5KUHUFrUbU9LzZ7yvXidDp1GvbbeMRXxyEW8tEVo5SmhPDWCXCmnDb11wuQuUFakQxfDCGHJ682ykXTUu6ZvMurs",
  "key27": "4FNYowgADtm9kPsb54WBUmFdXraUe8hF3znMd5PdTGbM6PpjnSf7WJ6ZjAf5CUyayFatS1h6Uf71kLqAvyYt2dg3",
  "key28": "32yv39N4gYsD7WPfopezuvvhc6HbAHJ5D9Mcyp7kR1YtB9jR88yZdvL1Kqtija7Pw2hL8wZZM1Qm1cDt3nQKkYPx",
  "key29": "3i6BkfNCtvVTJQo2Rjz4uswMzt9jKvUPzPRsBMCfzgF8xbVwu399oqTbqoJfKGkQ74zQq7KfGyKybN1u8mBYDEjn",
  "key30": "9iSDuJ2irhcxiah61qqk3SHouv17xnE7Aw2Znmie8M4dmk8Zud6VWRQBgLrVLEg6RsGbgKMR2MK3pnxDfkCzofY",
  "key31": "2SKKfujQnUB2oYAtBg4Kd9frmFS1644nEVUvmpmUcRsAUD1vUNmz6htGU5DvPBihPVtwrs7waVV3TbSUWf9ccrep",
  "key32": "2nRaue4rQabjp467ufT4uVQC6u4eqj76Fmm1DJhvPqfNV6VUpuVbCgPvgbPqu5hHN7EwT9zcCbgETUDS5Rj9WejQ"
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
