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
    "4i4ekvWfrPQdSeDNEEknrcKekAXZayf3GTKRfUmNYLpaYZdKXdhCYhBXuHbeahosqyTYoZwXMucXGMUgpza5tjft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rHwAb3pDkypDqKNXudXuJyme42MxHZJYqE7cGi7s5hMF5RyWdugzDLTpatUwT8TXkEtdat99axiWvpi2tAC9zsC",
  "key1": "5Teu5pgqu8oggcG41noTBTzWdPvj6EXs6d4dqRwSaFdtVdUf8ksFRD1Qu3izKFVER6YN9VHPfTDi71akYG2ukmFY",
  "key2": "3YARdgMTAmeDLkARkbEn1bRBiC9dNRPHS5XZ1vnvkgJ9NNr9JhYFU3vQAeQQ6Wt43W2zrsVJLCQ9jpuAgC7yDpkt",
  "key3": "2hZ5JjuUjA3CVeA1TRWU8bm43ptNJ4bimQphmTyD8F64g7uLnqdhBjvbyM6sZW7Qk2bnCECM5S2gihFTVWhc4vhd",
  "key4": "55ffXU6WJhPDoqM9w3uj7jNvVfdXK9ftFSPB9DKTLPnLx359VgzH6m3pprfEisfsLx9mGQ8F93NwV85KoXo2azMt",
  "key5": "58pmqJXKBusWGw41zoWkXi2pqqbvByADWVzqKkKFdnuEraZYF6sh2u5YTCkz5xjWJZMzD8vFMTJKeXRDcknsLgfo",
  "key6": "5LgZy7trh11Y9NxfZB34S912sexbipDLS8CEdAVyh6gcTeTuuG96EQwDAUWFyRcoC957uB9nBuFkyywmCAwUmyp4",
  "key7": "3uqwm87ofUmykvJeCyS9j3juFy8yNYxURweWvMWkmta9DR1Me5528bGtCzCpSALPjr6BZfxA9dvsZYgefMdM9G28",
  "key8": "5aAQpm6WEpLtGvRtC8iFff3o3ZKzuJH39XSQyvkYxr9vpdRVTtkhR6S8fVeDKcCJBDKN3dbvCBpbNuqDPEJuoC9A",
  "key9": "sGwPqHVbxda3hXuqStJxn21qQFyoFdz1trVMm7Dw3QAxLH563cW2YScLfmVxd648fhoazCePFYh6rTjNaHgtjRz",
  "key10": "3nfA7sXd4UzVG4LjexRkbBD7E3aFDzoJaHdU7LR6RSnHw8WMs6p4sFbnPsWz5vPC83mhy7nJwgxSH4zZ16LE7RGH",
  "key11": "2UfwNppQu1FM62oD6BR8dTGAAYWy1diouMfgW9JeFXziDqy7rCM3YehWW5KU4vC7PVwrX2mtUjiH8zWCVnNYnJJD",
  "key12": "4GWuJkre7WeaCPa2BPf9Wc9yumpwWuJ1tJAWN2eZhdCPggt7CRpkLnU83i5vNNFZJbr6B5cAQk8dhqff73u1wucK",
  "key13": "2U6Awt81M5Fazcd1oEtTq27RbiVgHPsiXzwBd9Dv8WWUnUxMEZPparu92yNZ5XJMrfYh9fXDG9K6J6qSvaGB5Kmf",
  "key14": "5mGNrQhT3i1MyPsXpPjSui3VgzdBVKszFRBSukmSnwUVGtAX1YAcnCbSmpFDuPfgjbYu86ufbLGWxRuJ2xBPqZzi",
  "key15": "2E9PPavZEsybLdRjnVrp1SvpZXco3SdxvptLzZFQy4XBWehdiTc1SeuuAe6b9xmxqcDk35hgzC5hijwMDxNRJJhK",
  "key16": "5C23SeSrjWLz58njDQ8tFonpEE9y6Yssxhz72om25ixGKB6bUm38ywyhStAiUTc3mhJkThjy6BnFY1JHgEhVS2H7",
  "key17": "4JioGrxm5xLpwjTG5akTcuw1hVCmXUrFEhCrCWnpqV6jJjr24KRBmphdXQHhkp2AkfRPaSrTKBVgMkUfP3nzqrQP",
  "key18": "qvVWub26bedNyWZW7ajmJAsEaRv7WZDCuMxev124DzT8HRXxud7F3LDewFbKa2iT8d7VizbhmNz8v17S1y9646o",
  "key19": "2QJGV9dEu7K5wLjDR3KesZgw6eLubmMkMn8wWHTJXh2LgrCR4Q92yDtysH7e34JkS6koxdGTWHkt2AniGr8jxdVJ",
  "key20": "4bq9A3H4JaXviWhfnhxZsCLsr6f7pErmfwiZqk7ZgDJm4NufQKjSfZbgKF1A2AVN7cDWHTKd2LMa5KrSVS4JkJKe",
  "key21": "2fHZqwvkyArWBJvjruwXcEoHCF4NsZMoHgC2rrxNBat3y6M9QmxcSmjiJupnpEKnDcFEs8cMtATf7UJwgSorj5c8",
  "key22": "3xNi63kPrXUvkQoPNKcTyiZhe3Nd1Vmaf7MnuLoVcZvuRVQEtrdMYygr5quYPrgZ3J2vXZLrK5oFzpxX1rry39dT",
  "key23": "3ZWYgzxja48LgSypM1jj7ca876m7yGiTagvxDL9EmwRTBZJRqP9pCoAMzkAGEusG5XWgUsXfiEuB7rqM5F1SySP",
  "key24": "2xQr8LE2uPQy95YU24CSvY6mYhsiAcixtbTEwkPJqDBc4stDgduTdsF9GWUu7B3TMbVz4gZNzRBmEBKcw76WnDHk",
  "key25": "xKwhTMWrwDku41YsrDCrLmVjdThbpqwkL55HPX57jnq3EKn2g3fpf5emGWwnFo48QEhMGejoZPawsio5rUWks3x",
  "key26": "ocdoQdZUVonr6AZWDHihppiwhxyWo8wwM98evEKe1yU28nhXhVmvPeamzhsbUuLgbDMUuQ1D6eWdxS47faTtgtJ",
  "key27": "5MrEMzYn6pHz5Yi4qWb7X8REX3oGv98UjZtQnJNtwzKBK8Az4xiro4E6NWfZXU43jQT6Jrtm79VWekv6X5WGw5FE",
  "key28": "2Q1mKS9kTdAtxgmi7sAQqpNYNTftyHgTezFH5v2VCu6pAp3KdMeWo692A4tKFsMhR9FXwtnDnebdc6MBitKNo6vA"
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
