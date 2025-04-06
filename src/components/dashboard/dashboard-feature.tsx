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
    "foWaZSV8XsVmqLEjz7zjEzhzjCtCKRMnnnQYGPypSUVvLAxDPnMvkSMLyYZtyseTXJf3Bsxd8beFXoUGduFvRjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kdFMyjzML9GSikMTyhzL5Ajk1VUR9imNRoA6D1Pb9j2nd5JNAcqVXW7JbNdcsT9W6gMsr99HSwDqBdeE2UFqmRx",
  "key1": "4aNdSeiNHQKKnYTA4etSTGi5yD8PUvNiHz8itipjiVdbdZhkcwkRuyKMyspCMM1ahzLyqqDq26tUFYFcMPGfa9go",
  "key2": "5jJPGUCR3nocuDSu66E2htXL4npbpLPp6xdoQvS9Q77dZybCsNULZ8cRZ5fKQaYaVbFizVxEUXq6AFPqjPNocskY",
  "key3": "4tWLVzYXCfoK8zufKyPEgyDycXzcL5iZ7uXN5DT3XugbuDS3bMiHSPzjVF2rvF5Ywm94XPFt4wxGEXgVpPD7fBEu",
  "key4": "5Y946JEb8nwtLWErr9EBebjJYqYVPii1iF65TWRT6rKaApRkcvDjSwPRzMmP5ekzaXREQzVNYhgYbbLEAFtuPUWp",
  "key5": "2gL33VVb5RrvyKc2uUc5V5BgMM4uf3AScruD4AikzwK68FwjHjHTA35FoVrWGR3fxa9oMpNaEhRpxyZGzhMV4H6B",
  "key6": "5m5yykM6nH2uTNiQJFMq1VhsD7SpyHKZbykUJv8yeF2L5QZKqd6PjjQFG6suKb44cT42FvyBv9gorjWS11xbGftA",
  "key7": "2VtrqYBasGfy87radbBqB4UVEftYZ7XYCpEoYrUSYKkKksZFJ5FQ3KmhhkZAoS8EXDQU4N95cXsqUYFEeS4MRTb9",
  "key8": "5tKzbkAHziNatdtcfwU2zj5DvqbKj7BPeqKxt12FBh4jhkbuKn6VjG43i3ybmrc1MxVNyZemayosdefB8tgXqJLo",
  "key9": "3ZPMrS26Wid6NxEn3UoaNC8Znst48hQXDJuYs6ZDM3M1VpdYH1VtFe4ys1Z6tKYWRbBtHDBNnjatqKFYdizKnz4c",
  "key10": "4CVwaHgHMDF42N5HKJGQtThWmneHNA2D4mW2jKhQ8vJEdqQpvxgcLdwPzQp8nttpbMKyXNRDLwsb5Gxx6YmUH7VU",
  "key11": "1r6obQHsVRvoyoqAULoiH4BA5TtYWQ9DkqduTxhsjtj6iiWwjttpfwjvwYA4eiJ2uh213MCFe96VJXXi8WjLmYn",
  "key12": "PKVKoHR7str3x6bpuyzQgFTPBQmDnXX9UYGGeBmdEWWRtAXG23C53BZHsjQ8zAzbWNAy5AFKULrEhgHniUkLTV8",
  "key13": "3KBFw5zqdyqq8iC7qxuiNhjJZFr5PBkGdKQtQaEkooZ1CMzsMg19r7gWJ1wojFzFw6CRY4bXU5vdDLdpqF4f9ymk",
  "key14": "5ypM188mEo1mKB54maopsQVDmqqEhjpBdGxZALwnM1XPvk8XmkELRRHRdpxv6h5Cs6xtFRNXKEXtfa3CK3hop61V",
  "key15": "62Nh4QZu6FdVsB9HYVWxMW7enQZhWadG6CzZVrBtqmGcwL5yho6bvKNi4E2p781zznCEpxaBLR2pK6SZMFefLb2a",
  "key16": "4U8BX4RagX13KdAcbSRpJ6FHqf4QvmnGiuvQ9rhUU7PZnNgTUsHmaoUWXdzFpm7bnTcg8FykxrEjD8Qc4EJ4ohus",
  "key17": "NM5qZy2koeGPtR7SzERsNtxpRTNAJhXLoRUN45ixzFUvpSFBh7tWuqiQbfLZYbGSUyayACwrRm77c8ugM6xbimW",
  "key18": "4bWuoKnKCPW44xX8RNaC2Z1sn6RGJ7gJUU7m5PzNKKqHWYgH11nWmBWAEkAA7dkfMejGNtjtTrKaXmj5bCR2Y7He",
  "key19": "4STNYsw3DWVwRnTkAE3baZ2gYLj1rzCkwsQbpK63NfaTXupAjZSGh6bwSh16munFK2VckXLf7mvXmW69U6USvVhd",
  "key20": "q7r2edbN16iq71k1dk88pt67KHBK4G5JLpo9467sQEM31GrcY2oXBrW1CKwHiprhXykmeSthhfWu4U3T5UJuihj",
  "key21": "2xLFBUy3a5JhGEAiWQvZGwcRRvhiLqBmkbPe9xmKXbi8Qe2QAXt3UNYAB3oDjEwQsZ7ot1XPVhShhcisMCKv71aL",
  "key22": "5KPWoucZ1aUBtXq7xFjUZhhpEkRtWYFBa852fitjLJgQHeAJGWjKqHrgAZrjnGmq55T2DSRSciGhwT76Hz2Ko9pQ",
  "key23": "4yPYDiMCC74vGU1R4cnrEwspuoK68G19zq7BVy59JQcCqJf5s7E6tSzPawnyLxvnC7qaVjK1axLTiraWR8ax9nhF",
  "key24": "mftLgLKjkAPww8CPcpvfarNUqNYhhM8r77UiWGBgxTekPdrAiK11zB5MNnTvSkpM2GPHHRXphNn7FQhDXXE1Fh9",
  "key25": "5HePSzJDyZbQM4bYdhJ1wVDm77wfeyRhZ9Co7ujFmY4WgQP2jdEmeF3fjgzhTkrPomPhD3SaXStStoTd1RKQjXf4"
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
