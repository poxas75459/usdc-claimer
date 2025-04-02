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
    "5byed8iLkrxhiqk7c5WShLW8jbKkDHXpSiwNkUcJXHmpWN32C4eWtFKpqSPGqWb1dUyguvmyhFjVTS4MGvw1JPdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54tovJACmEMB8hYLsjLUkiaYGq25KAwStxQ8RHTyx7k3NFHJjCs4Pcez8jav4u1xFQX4N5UUHX6DoZPuYpJVs768",
  "key1": "2AEBCMHDeyMacwWLnjwzSugLx7UrRcHrsDNgNf4Sf3EnAoVTc1eodV8RMGTFVXnNXudQv1GJ11qzByGsv1NsVunq",
  "key2": "5qBDZyHshLz46gr5itGeD4XzVYJvnJYD2mMemVmxU9UQSye3bWGvzHgWDKdu8Mvz7uf3mr6hRaiStBG5wPxGJtPB",
  "key3": "2JUf5TzuWXM3g3jhB3XtGnnv4rKP8fZPa9SNCaWXy3M3K4zQioSodnjiL5Kg1b24qfkrEczV3qc4J1e61uArwpdq",
  "key4": "2bYDjqkqBjost33G9KM31JhxeiUGENatn77yV264BhFueb9ompCKcNtagZv3yBYi6BebhmyMHFmc8X3E6qGJfyKF",
  "key5": "67K3VrsmLDrX1Xcr2HX3U7qw46TqLEbg9yYi6JQMEFQ5THjxy2KX3aNRpvBpqux1LmkuPo8Q3nsVUZZP4iray66r",
  "key6": "3mPHvJVD3Dg8KvB6xFYpW6whsp8H2jsVaCSuGXjTmxq7xA4p4LSiLQD2tFQW1vtPjZGNgp54WxstxywLbd1C7aZL",
  "key7": "3NWxMtyb9W8QfmvFwoftb37DYqhtdMwsMhCNgiBaDPX4rSJBrftBsQoC4UKfmaXnioZSMKmDq3EHXXtdjYfkdTFg",
  "key8": "2pZz5TXt6ABZrJBdfqrPQ9NnPTwwr9gvCiDgr5FSzoQmpTVA3dsWxjoqT9PpLJa9zDrPNXE4BoChczk2wEfgEYRG",
  "key9": "H8i5k7p5hzgCEgPSJBLs7iA7wjosEh9ccXb4SErQWkwgENC3iGAN92JaKjEzqnahRFmjmYLSpsZes3DSrNX13Fy",
  "key10": "FubvDb6xfbtovaYqnhkKaoCWZzkmFSQbsbi8NwyXY4a9587XKCaJNc23FQDLwPtNH5USv2NszUXCDWH9tgfjC9o",
  "key11": "Mesp7ZxYBGv3rANnjDayvsrS9eSMHeTdeNp57fULF7GfgGSiRzbj3C75VenDasrjqQZBzZVY4mgDUsKy4TwYWmA",
  "key12": "2EeodAxZXhwUqoMEWjaksncX1mkBn2YNtcVTisQa6PgjgseNhhz8jqNDVfbXNXUJPfjCpJwmBLFsUW387Grhw5ry",
  "key13": "57ckY9VhRR5D3uYDWcXcX4Dxsa2s88LeeKuToh75Zt99KLkq4JdVCUC2yEXvtpqdjHJn1JWVWCaZFhxf3bvoK7gv",
  "key14": "NUGwqMt4yLzfV7KiqvWXGVzGeuDmc8d7D99D4maTrbkQPKa1tLn1BT6KfLduYh3ALdAFDF2gdrpvAttfdgiCkAP",
  "key15": "3nQUByfRLYmMR62FXag5vaTwgY1KG3e3t6Q2qtRWRdgM8sTAwA5YJZV9txy5ZHoMkLhX9j39nYtceLNrxBtK72kZ",
  "key16": "4QPh6qfCu74h5eNA9H9Gzz8zu1otdybK2pVgKF7gBmCsejanoTi2F8v7bPqgJ5bCq2GKWsqJhPj3gJoZfFeJBsCZ",
  "key17": "33QuDhSxP77y6PPRn3D2bAndwDHr7rAX2UsobaWsn5to96K9ta7z4h6eFLXTfMKCegTPn16vxoRzetLfngZxmafZ",
  "key18": "3PPJF2hwv3XzKKaJXRJ1gP71X85q78aoEHVK6HDgXzLDDeg31txzxaSGGy3yt7iBAzE5NKRuQwRqpkv9jSszeHd7",
  "key19": "3r3JY6ZnnKcYPQYTiggxs8ntKMDiTuuMjWtnvsm5Z3FaEFVHMxekZdcDZMsWC6U4d8Px4MS14aTGfAzFL2QbNF8t",
  "key20": "37eu2VV2iLFgwSMHWSwRVMU8HfjN31rFCvWSNBXmdkgVyEV6kYRqJZFtucrgZWLjRWdSVB3tR1up2qiGL5hcfVUe",
  "key21": "4fNT3AEkCmXjTH8EGGkJHNw5S9zc4v2r7waoWPyADKA71BRy5s7xw7GEMqvWhy42YfHqiUJETYFK8bhRKdgbqiTd",
  "key22": "wrLpvwHCZ6FGxiPwybiv3WRNuxfs2Bid1B4iF6ddmKuHw11e2HXhp7JUq45jxd2MBeBDMuXUV3hYkzwo4QJGYDf",
  "key23": "5DGRGstvcrroor2CWSDnbVQLEMiGrkimoyj5FRaBRu134UXQ7iT4qHtdER7bbtzhfUpHxdDywiYFiTR83QQhr1KZ",
  "key24": "36akSjzRsncERXNSJxUmDga5LuKvCfrq2Ahsgnz7EhPW4rfpXEqKdwMpy1Vn9Sn9FTrVVPKgeScBpMB33iSwHj2g",
  "key25": "3s2S4KHpoxASHWP4iei2i9YyrhPr1WVcSrFptZbPDxoP4Ahs99G6cFYRxnPXkfRa3zDcR1AwredNNWLZy7mSp3Mn",
  "key26": "5rM1vJuaEqiseX6xyAVhwe4yqnbb9Uo6wsiXcbZEXDTFGVPT3CkmDLVVssghv3onH1L4oKbS4NmrGcGXQzpE8ezZ",
  "key27": "49KqTwP19T1jztTCoLoCCbJvavcCVniaWTBECYm976rDvmf6msW5Cif8W1MjYm9Ex4NtgSf8PVaquLu89ZjYzFT8"
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
