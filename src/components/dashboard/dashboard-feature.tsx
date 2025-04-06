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
    "4xVb5QRrW2ZyKDe4XkZjv9ds58ggMZGah3RGpvw6fvwY5v32XWP1RDHLb4SSbFeBE1XPQDGGJNTcNZ2kcK5b7BYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nT2Nwz3AiRwf75hy2sCxHHH5jpaUPGRq52Ejt7RFoR4bbR6CnmVGAaaRYGjnGYPkPTGAYovC29Yf2FwQ3qcEJ8D",
  "key1": "2DntAe58VUd3dUmZa6zXDKvyKCNtMdHuJHZbHcwVskwSLsEWsUnPMFDjWUXfd98bkbGEvjEtk6xG24Jna5oW52DW",
  "key2": "52718JxeNwiCtD4iwdqzD32qKvdBXGn7H2QXRDfYCsTdPTygoTqFQEzWKd8VkSUQ2qtZNgtMWbuxWLeFLWuFVFU9",
  "key3": "5L7tAx8dXaTyRvAU8mtFMdzKjcUNBRvYowpzPEcDfxfMxzVmvoHeaHJ5sKefxeTpaEMZw6E2wQmjVkeCXaezRc1k",
  "key4": "jm67DDwR3rum7q29XkBmvKYgeX2UrM4s9hjnqM6YnYHaW79k6Atiy9uLZ9aHAKr7BA3LsKGxXxinNcwweRWZFES",
  "key5": "4ayieYY8MU82Q1Jf87yU8B2FBRoH2NLjjqeJtsHUHGeVrbhu4CTbYP65zTtd87cswXLXbiYCGkoJZV2pLtBfg8GG",
  "key6": "2vgsyqZqaSCNGkaQnjfLxBEyq37orXrAibHATUMN1A3ykttu71m6z26H1x9kjQMtCDToQcgp71Vz9RxEfUTqFwGz",
  "key7": "121kvtcaafLc3L2tQXVpPFNtgoS9ydQcmBzG6TPavN7ZEGSN97LUdWuWoCqiThjs4y12xFPoTjbMkJdXHKH1Qm7P",
  "key8": "2D4FCaatiBHtqB3jkkiWnYNnskGv6NzKBjqgUF23Gqzz9LxvsoJHYbwKUuiaRhzZ484ZWHxU6L3cheb5WvkpUY56",
  "key9": "5zTXLKiYwU8EzMd2depgdeSuqnV4NqKApDMhKqHdbvLgybwFwifZcSrQ5ghnNjcnU8q7HVDT8ZyNuUY2YBfm9b3S",
  "key10": "5GBzBWac17GHLET4DL1xhCeMkTdkoPLnixaNLpNBXoDEe8uaPBqfMfyb2rDenKsV4HtSA64bLuSG3B2XD5WJmiDW",
  "key11": "J29b2qqGbipjLWa2CV4HnooNJ5WyKqtHdGGnYipfdtdWVA6nT9vwHeP8tNoAtPhsTzde89gMec6eADSeeK77ibU",
  "key12": "3jjpr7SbwLM79seVnvbLZRP1MqwigkwJiQKVFagWQEKU3jg6NVF2vsRhJkg1ZTSK1PoWzgx73byPrPcVWe7MriUm",
  "key13": "ZQJABaZyvWCXHxgBQGVKYGbj7SWWNwFsNxXxJKpcfboSLwNqaFM9z1A1fRoU2mTQSjBFW7Zrcar4Fy9Ke4MVq2s",
  "key14": "4CpmqJ1iR2AGbWMbDJYtzBmuF2gtDGspPGXBDgdr6FQjepdASyvrFkYf3grqDLYzWxHjPAexYwjeRPCLYQDxVkgT",
  "key15": "3mxyySehsLGnWBK2rstjNBdk23fBpgnWZPEcDxg68Q19NYRjBLeyAbZ2oH9r99V3q12RjtXTEPsj1YMWnP5y5iN7",
  "key16": "4oNAa6kgLktRFnJSWY8pPtm9rBxxLqcfJrnv4Skh2cWftEjfw8XKqX95V2gooXL3Af4wu67eTPvGosAMCXNdhUWe",
  "key17": "3h5MZy4Xs7XWNp8PjhwUodzv9Qu5YfyzXZqU6uWcnCuXziG8Ban2JX5TkG3h7zBj4Vyy7fvEpmtu5ndUqNwFbRRT",
  "key18": "2a2tafzvAbC5FGmWRqcQfmwg7W3qte8sxXQvZaVj9WMQ71JkMMta9R4ayHn8YDaKstrRB2hMHN1rEbijSRu69YYD",
  "key19": "4Yh99Btf3fsdxeis2MYJZpcyhiy9pH9c2CEr5yKHemiXRRRRoQcyGARbYmXhj5xMVA8ztNTG1BxL8Wf44PRdsuuK",
  "key20": "2iEUYPhYzAMfBJsGNgHDib4F73MT82i3myBTpMmzNEoCGgRA8i8N8fqaZadNvA5L7qW2nGvxeroiwUKqiWPy1dWi",
  "key21": "2SxreZSwcCZ8BVTa3eB6127GjSubTZGSW1rVVu4PmJ1dcTHe7syjxvmwPFVPprhnq1f8P4HZEdyr4NC9YNG6h14W",
  "key22": "51zXsVqGkQqetq5pSfkictJ3Zxjg1EvzeTUGctDk8rFbvhNEbYdcNbq3PBSYRd4Ce5FirDAPJT2RPNhuDATJgkjA",
  "key23": "5p1YQdSMHWhhAj4jhVRzSxjo1YtL6pcds3kmLKxvK9LHBPN5fHTCDfny31E3voNfnv6Lx5W1N5ABnqvSnLArTYeg",
  "key24": "3HZE674BLr5KGzxG8Yz2E2ptXPbzqudX1ttWFNiVm5GH9q8qiiH3uUpm3EeRUHjzPWQcQjN9GkYPq8U73US9VaNo",
  "key25": "2XwjAZkSRJ5juXsD774fy5BZCLyDoDiNfuqJDikYoj8EaxiCNbw5obEnvfeBVTVg7rziyGuzQc9hrKV3onnZ4Gea",
  "key26": "2xhLVMjKffJvLbJ8LMKLzAqwb7nMs5WnsVu1JmbxDEBgb1J6ithaNZiCfqksfvSs3Mom4rLVyaHkDnecZh1XYTzK"
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
