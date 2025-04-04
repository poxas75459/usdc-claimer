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
    "3xKT9xtqNmCA6YFcwpv5yLjut4izfqjzKPmYE7KfBDs6qA9rNUxhH11ZBaWAxUiXSa2Gm5aa6cGJLNfcnAEkVAbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9NqQjveBNEpQq2GmvkBMniotH9vTQQaXUHx9Ht8maCoazqbPzqBic1QgxR1cxnUcFTLW7535N9Y1SGbH56vFYx",
  "key1": "262WL1SHQnGLtmydieum6xDuzjPVXEwDHTDqQ2i6hfJJaUuxRi7qjpi9fwGwXtPhynivoW61Ht2UcE8eGJN63FGN",
  "key2": "2dTj6UwzAKNTWoAZradFmyvXG1HGrtX3wHQNeQVcCHZunS6hvwVTCLn7fxWnmN6wgCP9MHwUQcYf1bJiaq74AEir",
  "key3": "5Y4jxuDN5udo8RVTbwRWkj9Qp5xfHLMZZVibBgS4hJZCmhabTf553sxphG8RSeCoG4qH1S5xioTfGFuwb2P4o1jw",
  "key4": "3VGHQKLv91WogZjZFGkhNiKJYFJEzBhJhnrT3EMkRzJYr5WagqisB8NMmhd9UUhJNrEi1cPHaQDESDFKRvVGZzCv",
  "key5": "4AjeRXmYb81HEdXAW4dBZgNPS2iFQiHG575b8aGVjxKwDgYdByFKVz8aFGJCx2c3s8qrqnLCsnbU8eAgQDEncYQP",
  "key6": "WQPHKAuHGJbeAdLogtfcLGLC4Lmjws2ePW8entJX9H2BUBcW9kcwfePaR79rKQm86UjFexviQYgdhVGpRMxVXqp",
  "key7": "3zTisb6VPy2uLNeEKPug6YJwRypvw7eYMFjT6Sh87ZaaJ3fF1zYZJ7rN2r7sKnUrbWrVPuSFFRDEoHdwVoyf5Qvt",
  "key8": "52DEJ9WsKgkhMRLQK717NcSe2bkec6ThtUycicWKAut18zyLmnBMJKbi1GRrgNHwM4g1m89bhiFahTF7EwCkkF9r",
  "key9": "26myvZHaP7XBoXQhFfdkc9Do4S5LGdfENj1qjt89CLpBctgGNav5HXucYG98fJ1yHrC1SQmaqia2a3gBqo24sN6o",
  "key10": "3uGruFV2ASJWwZxEvgvijHdXAWUM4THp24shidtR3JDCBthSu6E5CBSyjfGN46SHYhULSsJxqd4aujudcypJApg9",
  "key11": "2mkUAwb8qoqzxJrW6dtQE3WVkycUUrfDw9t5qkwXaYrsb8bk4sV8QG5ezcAPk4s9qNgKSSk76TJK9pZzMGdr97d2",
  "key12": "3ZXGF2YYHF3trVDksBwj2sF3iHAbr3qFGjs8bxvhyDbLDRh5EsmK97XjrEC3n9wartxUDrAND5ibHWbmf5ELiwvm",
  "key13": "3xc6yFui6ja8UR46BS21aLJHjQ1AAhCswwU9Jyhk7ZHEmrYo5FGbrTyKDmAnzAwXzYK8qpS5M8gg35nuhAPaTAds",
  "key14": "3nQNNpYv4NyhQixXyJKYZ3JJx9t6guxQK8wJNUhMvyNZ8brSSCdKjHKBBNVAjNwh4BVi9Jtj6cj2PxZ1yhx3TmL8",
  "key15": "3GM6NzhmpREWGf7XZBsGZVv3px9ajLfJTYo2yNDkrfXnvfJ19my76zFNnBUbyGnp85EMCPofr3V2syatjjJtjjQG",
  "key16": "2cAUqQ2jD2bnE5bpxX7a4B9qWN54KjPgv7sK69jAgzTqkU2wsHu43NxgQvQaqJkFL9q3uNwWDXfarr9UsPm783Ta",
  "key17": "HUmgDaDGAPL1veT5usnAgDsvUnBnG968ALY21npNKUwKLi6ktqw3exMfrAVQBnfePH6LutZ6gN5xeDggV9jkSn5",
  "key18": "63Ke8Mcng4aKAknRnxfdc3jSh3bQScc6GbpB8k1wVK9wpixY5kvGnPya1ya7WWtpqagbKoyHMpK3pSLTzuwGiYr6",
  "key19": "3hjFMpAuuMz6DSsEEu1PVHL11SnYV5md8zzgbf97RBPgPVEdEMRmaYnHEUtqQLXgJqQJtnuBFBdkhiCHypXuhXwQ",
  "key20": "26JtHrMRMmF3evJ9TZgAxmHm2MM6TfCQ1QaMWXoeVN2UNXkC113wWHaJjafuZgcsb8XmkrLCpnVsyL8YxNDe311L",
  "key21": "3dWNpdkWXYBoCZVUDJAcvbw5D4B4GLsS9HmcGnsycTQwYkbzqJ5sFv5BRqxqbHFAsWGb7CHseZzDakJ7K6mBeSwS",
  "key22": "Mneq3G2VeLTsYbZrriPXdo45qrBdX4f76FGHbfzVSanLepFfkg9V8mgDtSiNvFzeVeRGhsQoPXUxxikHKLuZHzo",
  "key23": "4bv8ARSemr4zoyGCTai5WYNrTLcc5BVRKW9jACcEy4QYNpkNCuEStQApjBPdb4xEYB8eG85UonRahZKQMCodfZdf",
  "key24": "29W5ogs4L1fgsPZhdTBvCcMihKmdK4n59P49hdi418t8BA2NpjK3jUwSNZjYkYR9YSWgi9UvSnhYKM7sM5MfKUd2",
  "key25": "xT6LSfKTAY2BJu1rPBcpDhkBP57SbbNrVPnUoLDpa9fuuFLP8KBvCeW5HKgcFXRZYQrbKSGHJYUHkSf2fydVWGN",
  "key26": "3gq6Pjofn8CRusvXakSTH6erqSzTVgTvQF7X2vUzmTG5q2JaqTP5fiF9fyGz9CUgZrpA1q6xCGYJ4SD8nP292eZE",
  "key27": "TqSMDKm77Xx5kSSGnGtwxvqKv7Z621CSrsavMdGE6i7VrKTayaoZhsNhUPPRRJDSvqL8XGTDwDekvnYTRZKaJjb",
  "key28": "BejYi8BQonW7AL6Tn5efCecibbmKH9mRo7cq7VvugLQnwtmvZBTB1hFcJnASC4opqV3bZhDRhxHr4ii9awzz3Ax",
  "key29": "2YpsjCuXE97kUHukLdcx2phzY36G2Y2VYusPq5BMY66wdPj9NiJnm6wm7RtR9aBP1pWVU7X2PrGtaHfPejoXLsPf"
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
