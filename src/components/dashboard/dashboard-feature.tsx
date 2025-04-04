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
    "2Gfb5oxNYCiLguCczfYhEbvjpQqEGsu3t8WmGeafbDBXz1FcKyccuryVXavfjoSCDubXd69HcEPzmM1wXqjmh3CG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5faSnBpvPSgEkMzxf1dZZrmL2TVqbERhmwtujYiaXEiF2o7fg44rY5qy2H4GFRgmUZqbWLTThmWjQLFGjuqgx11a",
  "key1": "3T28oTTgaurCzQ6qfCUXkLBBU72ckQYsfdqbyDHyvAkvTsArvQK3wSCce8QqPvHdMHAtrM8GzWQgnyF8qVHXuHMo",
  "key2": "2HqWjMJH6agYg2uYTHNwW6pzsDENczRumQxmeWD8sh8HPZRKEcFazY5NQ6Tr2XQyP6fv6A7j4QqjGXncoTvYf99A",
  "key3": "5bCKL9AefGmSLyVSyyt2yWYpHfpamEbNyGLh7XhX4CnGb1T3Cs2aVs9pa1FPzicw1CgPLKTmWisWq6gV5Tdr4fDu",
  "key4": "5tpYBLEEqJz7rGFh3gTZ5xqsLrTF4v1xh9uydFfVqNqvnwSQ5S1E3fysq9Qo3DoLzro34HVWjH7Zo1SiAc9MSfs9",
  "key5": "2JLnuJxp8EcXi92tuK8YSNAAerYatiAZpyMxtjFdzbWa7LaRCawGdtGAAb5fv17it8efj99GanGjAfFDhrCRpuJN",
  "key6": "AEk5tS4FwDC3ZMb7vc6VvZHkPVm7gQzpoZRxsyzVs1KxB4RaqYRuZfQ83z5mYLPp1dXatgr91QwRCjaH7nLqJjx",
  "key7": "4udDuxPK9RYZtGMBDaefTuvq1HFevR9ERzGnJ7mkreSxETdPXCLGyFitiF4z8E72TCGvcH2YstLxas9MbrhwqHjm",
  "key8": "5GBXRfrhWoCw7pAYg4yor1K173aThnHSJUBHPV3aRpHzfan6i3tX2FUotikEvpWj3FxwooA4ADTd2HYXypVBJYf1",
  "key9": "4DSDg26RzwVn8K82aNY7Kj868iPB81R8AgQ3qVnpx9Q9xKGDBC9tMhSQDntnDEmU8o6jqwDku5Bk3bZ3BRt4CwLk",
  "key10": "DUtAC3Zj8LRJViKERuS48c8xBhUNjxArC9AkXEQHGe4B8rYSbc6X77yFLfqVizqZtSx7XTrsmdhFgKKv2mSLwGG",
  "key11": "2TE98Zn2APSZpc9rZ6QXFBmNrc7EHkNpk4QmWgahQSkHqM5Dj3tcTGwWXALW9JFUxFdcb72Lfgye5CcgfCMXFecG",
  "key12": "WXpsEYNPTTFfXhsmRo5cWH9qnKGHFvvTPkYDhPcjoDfRZaojdtPPWmSWSrNrK86a6gVWhoG8iYzJPLH2W6mCRW4",
  "key13": "4L4HJB6mMNNYFvZrnKUgz7uNbLXWqomgneSfVgLEzzSwC5iwGDF7i1i4GFLUiumFZdGAhz2vkwteFnxJSiicNy5g",
  "key14": "eQURAm6H8MHTTkqcyMLdCoGQuv5T89B77Gnhy7w1ZmYDTqcw7ZMkBVP2JSnXXH8x4c7WgM5229hXArb1Lf5mtJJ",
  "key15": "WXQ1f2DszPf2CBzVuJLNQ99uh8DLebFqgwNnR7bv2NVbKAZyGufPoJd5CggqqZ4zCJuc82dCJMUrFGEEjZZRfaA",
  "key16": "2sy7BQoMpSS722JhnFKtqwGQ4thbeKoLkfPfry2yHuMLHJJsAiPjCJfmfnLy6Cap6yNfjFQkRmRDF5xBH1dWYuqq",
  "key17": "VDa7UDy6HDR1QpWNEUBMpoVPrTiNq62iaQupvckuwemhwLa7LtewqmtREwEXv4qNtCj2EsaFkradPYzcwU7qnS3",
  "key18": "2RZP1XWB2TotctpD9VnPS1KA7mMaZUZmidrXh7b76YiDT7gQJ8dEnFVn6DedxB2CimrzayPT21De84ch1a1Cn35J",
  "key19": "5G9fjZTFhg2dYwwaRb1VP4VmCqTgj34vJiVXcFJ2xgesh1Xhgxf7JuPwrREkAXa2TfMwm93QiMv3vKFoGwRUoRXJ",
  "key20": "gzyVxhpkdtMK993n3cuDGbRty1U2GUqmihJ3EiVNQczGroUnHcPSSc4CkwV3XHN3oDk3y2U7o1SHytcAzbX8NAz",
  "key21": "643iHbxrnpJutcoZKrkbc3YZzCWR9aF7cMsYqa41s9NCuKzHKVWPpUQSWGXsan7MnKw1w8JHSZXNPYNDTedPJUJX",
  "key22": "RzMaBAbMuJf5BegzitoENuLSEnE6s2NqpZnVumbJgAVSsa8m6gAa5Ugz5qqsTKBk8urh5Sfk2C1fhQ2DHsznYEY",
  "key23": "3RrYDPzR1xG419wrrR7YoGnrKcRC55ZE6x3ZPR3iHtVoBgeWqhiAtQ4w6CDa4cvxaqwukVcJZUB373ZWoGLNDxXV",
  "key24": "2uXTW8KoUXHPKQLX73MBZKt83kpmiMxcPWpzMdT6iYnVYkjBq6BvbzrooPLACkv1FZQfUhD3So31x8V6HDhGHJwD",
  "key25": "5g7UHk9aq4WrzUA4mpkjz8QbbG9b3AkxvbBUZKQVPtVfvJKquP3NNvbTdYLtGWncFBV31N2Mzsp7hG6PrdyF9Lhx",
  "key26": "5ofxmSEKoLXGvuwfRVaELi8NCqDyHAjoUCYhhPK7qds3p3szaNjn7Tp4itET3fX7WARVqh4uPV6JfJxPWdctrHRG",
  "key27": "5NRgAJMdULYJgEFUJzJCjqgZm9F6pBrJXi8Bq6LsNdayf6vPs3pgkJTVhUt3v7kXMskAAnoEmLmycUEsPkXGbnM8",
  "key28": "4aEhpXv2xH2NSdNrbhvP6Lg6YRxnZUXhBfPGyH9g6FitBtM4AXmKTrnARed6cjerLhnD61e6mSbHsAJvRSnog4KN",
  "key29": "2jAXFKWBRLiF9gR7kW2Kpudqi8QvTQapQG6ogpnVKwim3mExP24DYnpbJGK8trXkzCPijWRQSJYhPBKkpdj7qcus",
  "key30": "vMRToLx7m3WDhJfZvHbfc4DNJkVbFNLX66HVBG7RgwXcVnFkeGEvFnCoDY9dNBrMrewfUkuE4kUzf9ojrmGPVyg",
  "key31": "usE8XZMGzaeENAYFRnw7LQjorTQDLwb1N16TnL9GT7UdQkhpBhceg3ejVSWE9Q9rhGkC2T8D4wzx1DV8hUaUSJ9",
  "key32": "5T8FXAyZW5ujNhnjqnXiCfqGeptA1DxAbaji9ZZ46tvqaWDNAhKP3ta2wc8xGM56hh5dA5iqsVGkQctMMrzYjWHt",
  "key33": "5uD2f87PSZVzoFAPh8GD4HnSwMxMrg2GENKrxQeYFDtP8ESg81JdqQB7iEXt7udJxjngmyyvWCAkjF2XoStXxuBK",
  "key34": "4CGybyJZN6Achbt6epgHv3AnWpMcfN1xkEdJHVnMcB1WbUA3A2tAHQRgjWWDpgsmY9o97EZfym8Q6SVkN6JGEGPX",
  "key35": "5vEBaW9rHTsti4Jk66U5WFtaVzRJzUBLd66FHKq8auyH1GQFnSce53RQuRz8nWR3hjEjR9JtgA29CFEjRuiveyPf",
  "key36": "2zSAM9vCGrFL46tk1R53QWEnR9CG29bKDJrLVgszSi1o6egYVjuEEsS6dd5n6BTd6W35u36cuyqA8F81ZLwHZSb",
  "key37": "4zNyxd3hQqUPf1p85QMKk3HyEHNoMA6cPjRqpvk6gK4hzLzxr9SmbkoSUw3KCiX6S9HaZfPE6r8ynSt1dCv9gphr"
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
