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
    "5Hnib9xL99WpumULowBXAhyFMtmvnYxzqVB6Q5YiL5qUTvXxxJhYbpiXeAeFmur617Kzeh7EqK2NXCsA1ZDUwWqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XEUhigmR48hC7MRSt6DNMiQWdgjUKUAuyCwxkYBCCB5b5wrgRizfTdJ1UFxTCmdrgU2bAjhvfe5Dw3U3UJvePyD",
  "key1": "34e365JMh9ZXGZ4xk7C2j4suXoepZVPXjEufK1j1gyEdoxy84zxbMxwghNgDG3vaCbabHvTwVsGHKNxeVdpCFoqM",
  "key2": "UuRmiBB9ywCaGZFnFuqFxXLPnQLidxzLyE7FmWag7PMRr8WQdTCR5Km3P13jMK4pjD1sHVtj54kA7HQWyP9Ea4m",
  "key3": "5fX1gW9F8MS9Tuus1JXbeJ3rSGbmVMe7hArFfaNytsEhemtvThsc9oAzLLWKFiRLBCZHWvUwi4A13mstDg6CqWjn",
  "key4": "3LjtvxmxvpkUWLWZ8WXa87cvePg2fCopFXzk5gDzRkMwbTJrMzk3Ksjn282a4gZ4bgVhWyMV4eGtYcjQvbJCRyx1",
  "key5": "25PPdZJucE6fqgUFV7Nb436rAyJQedRHkYHpExytinjdoCTBhx3y8pyZFQwxWSdnt12sCqXCRJzinGXjSbTKaNho",
  "key6": "3cf6MpQq5sSq7mLyup9hgS4dLjujHiVZQM8JRBbCzR5e3FjLePsgzyjRXKuSWF7Air2pnPpyQ7rRs3zD81VVqjh5",
  "key7": "m4fNtUcnWhzzUCWWV3NcPyAjcpLnCKuNByXFR4uEwXE7hdZy76624eBHV67H16PJAgcRJ8VY7k1rBaKt7v2K4SK",
  "key8": "2q1rsM6LXxMjZqQFXt9wY9D7Wvh9kB97vpdqhPnyW9MYfv5K9wGyG8vnAaZpdFikEPGApf7W15Gzbu3TJ8gHprfm",
  "key9": "GQxzFneTxWVotxtTAVMLcGdJSiG3pWtPRfw37K5WJwYE3NNKdXURTGBjVnPMbQPxhY1yaecZ7hFX9y1ovaCxT2n",
  "key10": "61HNzvsXPNJ2Wfr5GaHWSzpheY3dizPgnDaVeqb1E1zsDogMLSALCmH9AKprpQUz5dxPSsJexXBNiHiKvUpGi4W6",
  "key11": "5oLEEitCTrraQhCJuPqjxtxXJs6XwEHr7vvSxVV6rD5J2DjhHXmCs5XSJzmPG6szHJtKjbAA5pSVgC5A6AYS8QoF",
  "key12": "58GHjo6QkrQPEqUxbAZgYTAY6QsLrxjoXzChjMTDikBUCTqG5wfvRcYzUp2D8ZZWKdPdRPdpTQPWhFtsziPK7dHB",
  "key13": "5wHXfh8iKgpxGvTmKjPL9k6NkNeCUZAg9DdZo4YkckG8QwbRjZe1Bjkj7wZvimzMLqMBm6kRCJRwR6Xu9yPnnVyQ",
  "key14": "2pqB9fvbeRZUx3H6Fz7uhALngdnm1qYz3TYUy8JWnfyGEmAX756ebpFJiP8XjppyNSuiuWjoBswif55zeE95R3Ua",
  "key15": "4jW4sDK5oMMFMCgvx3HGEQYNU2VSriEiiFHKBrKNKmjKHS1z5qjX1Q2fSe6zEqvZgLhAZas7B3gSmwbjNULihHZy",
  "key16": "4PaoNaXgwzqt4UyqpwzEiDpQxYEvyzKsfTJQuqN1Foq4eW2eW1H8vPFPFzV4GdTiQJRu5FU4PermE271gy3UKFy5",
  "key17": "2tKnsXNxvtm1Pf3WMeY6KEeyizsDqxpSSjVu5Zo541XaEuZGMAXYczLRh6Km15SpjRRbCfPJscKA3bWaGcnREAjv",
  "key18": "3zQHogk3mhYHVWxh1M7ueTogFCG8azpsj5vLgVGRF1pti4utDZceRPn8gohxx4Y7H5J1JZckknYRU5dwmAamLmpa",
  "key19": "b9YUYiw7XBHft5uTnYcSYCat9ooAENmbR4XfvGg4ebaBbsSjctXK4QDY8GbramjY5NWs6qAF2BTMpjej3ZE9HiB",
  "key20": "5kdVYv3A9W823NTdpqtXxiWuFJFvDtzhDAYSpjpWVQ9CVbErcjKhgCcpUNY2m4XmJUon4RPrGyY8iS9LLk5K2W5Y",
  "key21": "2k4AuQVBhGJLmpJh9AFCTLUFXZU7j1traN62CremqmJLbmS3CdzgzAKv17VKGjBACtYgHxPakq4xuBgR8Wo2d7eD",
  "key22": "3fUvdfFpRW85PSfiP3T3NACMQWmgxVXGEKbcM6uMeKZX5h2nhYKJmox7nkJv1yxYGuyJEy9Fj1BPFN3AEbb4xStR",
  "key23": "5mD7Nqbc9H12rajYCBq7g9snidJb34UZp1mv6q5Qa9Sm4TbG1whufdYTdBV6WnZyWdWEpBVB4kmZsEV5uSzFSRWW",
  "key24": "Hu5TJ5ZKuA78U7pmr85jbM8RE85L5QpiMEVer2kCDstP98sSgEVfRbPM4eSAd5a7sSYn3mS2QDVnkedFXkNsgT2"
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
