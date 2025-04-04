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
    "5eRbKJwxHL73L2FWeHVX3pc4U7ST1jVa5LbixUPQbEkEekaXsdSyBriHpj12BbFm6S4uH8GTjRKmXQpHxFjNRxmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JSpKhr7t5uzmpQq1LkiPhZSVJaf1Vr8hnpQuKwYxjrCbjhNTaegmVdiwxNx92PTzQ8TpPnbwZLWrPyUKT7nxdiS",
  "key1": "3pb5Ff3ULZhc7MPjRwemNLkeDtuxcazw4LAGFEBhxtjxqpezwGcbgHUW23Sk49cUvEVZxSRMm9RGxtQiXkBTtJ6S",
  "key2": "2VmfqNqPCLz7naTQNYkgLxDYXfKgHJ8RxCZ5H4ZZbnU7qbkzzRTWWUuEYDTp16q7fWuwmy9AKkqx1zQ7VWrB1ReE",
  "key3": "SEoDdHKNJEqyB1VNLiSuJmKTmZUCj9y4GmGZh7PNeqxoiv2JSeL36vu2eXHEtHN6mPbRAXvszArAu3voSWgcEfX",
  "key4": "2rzcJEfaLLSkZvnvyZUcr3gDV9WtRLeB1vwyt4XeRZENPmWG7D3hNAKJFKXSvasuQkPTbdg2YtVkHxQzEQqj7Jwz",
  "key5": "2sHJjngFmCVu4cEiNj2vcFh8M5N27eJPcujbGwjNf7JQ4Lj4tVACnYrjZQ9iwaPkDQFcApHtjVY12hxdufGvTNfj",
  "key6": "2cJ3rDKbBaLE8BX2yGpsMXg9mYAxhnFA5V14K9FQ5szXQpBxXQQvRxiwq5J33G87zJ9YKw7oVFfDBJA1diwuygXJ",
  "key7": "2XEnAaQAtpHVQYg1HaPotPKjyoXsY8Nxc3TSbaRMDPk691FSXpZJw9DFnE1ZnXNWUfjEa9yjQxxWVhLbacj1C1nu",
  "key8": "42UX8Rs3buVWZETpd4dhMj23v6tj3UidGKh4QQ5NEXnKp1UXa6pemaepHe4uyNhB35xrw7jp7vd2fK7vsehUCb2c",
  "key9": "4zvefEf6EhgGGbpF7zbg8khj8vAropKzkjAFedFA35WXsVuBehehXxUgWVS6qTXZSn8EUe8gnR4PR4VMMJA3RX1g",
  "key10": "37s9FCwgdp3FtD61eia9xPkv4eGaxZMVRm2Cdo5Ab7qBCRLYGjCV7EJ4yWffNnyCPa8csqZ4e2pswv4DtCsX8wzN",
  "key11": "5PNA199JMk81jK3SbYDLpBYRpEH7h1BRPSyRgdcSy93tdFpszePd6AAgDyJ5gn7GjZrZapdVFiyxA4NcMGxZk4LW",
  "key12": "5f58eXfHwdLnDVGZFWcdpVRMZWWHoNrfSjUkA6T26wTpbvdzeqf2zCkL8zPYzLVWbVpmtezEfuHJbrDzQQgAZKkZ",
  "key13": "23TLUPB7ykwRMcfEhr36czXAWFYMFkVCuR3bF4536scM14ToXTECX6SKVv78yo3XDdi7GPdbvkd3PriVrtFVm3tN",
  "key14": "4PE5YZM14CvkWn7caRcrSQ3rtgvRgMN29gm5bj2Ciue2vGYy96gC2gMJ2e55giBkfftZtjnQoQGmXdgEuQHECvyo",
  "key15": "33f6RkseaBXqgutvgE8eoQ6rAsabFAXSrTQgS2CRYcBVUAHRkGd1tfHW5syF72HQFR8TGDAU4FDUYATQSB7sXFmN",
  "key16": "5aL4y2T71RpHGPdNAfDvHyaUVUF1sy835HSrhscFidLWPmJ8ZDuZJbJA5EkMoHvPCitfJEpYZv4TiQmfJ8RNMVt4",
  "key17": "Xr4cFTRriLUvmWqALEL3tH4phjLNB1gcU3xJLhWGef7nUjBMGpx4MaLfRPvdmP3tToAeKXafiZjRhea5kdQB9js",
  "key18": "3Vs7JxdyJEZnSgm175PU2kSdjPqRcCnwLjVBp2V1qZ2hBLGNdvpxhgiWXc7dQuSZKuLmehaPrUwRvyQnU5UNTrbM",
  "key19": "362rvdCehNgLijUhfH32PBrQyapNUSjZGZGdHdqjFsjJh55e43ciKaKW3KyJ23CgMms2sctuP3f4ZeXPHAMjpzEs",
  "key20": "2qR8pkEhd89L6uoH8BfxVys7tru64ncEpgKP5qrfF9mgxrZQFcYTUcmcfAXHDsaqk6QNaZdx1NHEuYDDwRNcChwf",
  "key21": "45XzCVjbTSijJ1bP1RJPYp94siXhqBV57GNhrPGqMivt9XNfQSwHcBYeM9j7FbkDVPdMzHYArMEZV7Xac8eduXTT",
  "key22": "4NYGpBLAwb9RUkKXt1kYwyUpni9UerdbGyJNQKxqVPJL1SjuqgJMXERuCZsy4ckRdyr9fk2NdNJBju7DBsHnb2Xc",
  "key23": "B3fPm6Xq1mkzY8id3DVqybxZ4oNwxf3k21WHh8yzq4gUWrRisitMHkdhevGeCqubE1aPDfr25hMUyLiqtYjEgD8",
  "key24": "UEN4h4E8GnuhFVZ8eJbdi5LdkHNNnDXsZEEVbgKDM6z9s9dBPh92v8zef7xeeU34MUHPgVrqXng64CUMTYqD1fW",
  "key25": "5hJqcKm9D75TKpwWeDtJxN3wM9ZcwmFhTpYfcyfZt2X8G7u3xqxuAJZd2jzCHACpNJuZW6qUivvFSH4w2Rmamvo5",
  "key26": "x9AcBG2W1TSYwWGvWFhsTBPmRqy6fAE6kRUzgxk6A2Y45oUaYTbtrqmR6LrCc3uYcGFTywVpmm6BL7XsTJUnFaN",
  "key27": "2arGHoHQwLBdr4qU4Q6G3JKHsFD9nmn6grHzZrckHKjw4pDGUkgG88ij5e6cvShKUMgEEyeh5B2xht1QGpkFE2gB",
  "key28": "3BRPy4jBAE1ZgLaPDLwuqdpqpQvgyrp86uSexc6ZZX1HCNk18QpcRF3CN1WzajEJh9qEBoAxGjBbU8PJsi8NaVYi",
  "key29": "5KScSTkZfP6LZhRRM6RdGdBKdxeL2arZLtXdCcKrJ7neLHWkyM1gyMwBZFpbPNavxgsatzEAYwKLMn4V5kwFMZPC"
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
