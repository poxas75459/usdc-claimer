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
    "g96Fpjo43biobDLtwDTRTCXnuwtxHLP6pFVrawXT8gPhdDJBzMJsoQJnniSrSv8KtHZWQu39v8PVZbZMHTizbSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kUuRxKa659edki8NCepCvgHi8DLFHdrCu8FqyFaByVjHqbVuChEa76JbeYTxQ6AtgkWzXibnAgxSKXHMq6xd4CP",
  "key1": "5WxwBciu6dmFeg83oBQgcrPPwRGB7EAAYGmJEaW4She1y4PArDsYDhtckwaZCi8xVcDJwhuTm4NAHcBZZT3ApR5d",
  "key2": "49RAixUxEvXRZhyGARopJXjPmXucxPUn3aBLVDSrsRN9zpeDiGK1cpnS6aJ2Ni66UbFQK76tMpMUGcdVFNiYCRQX",
  "key3": "3bMX5hgnmNDewb4Azeavrm733JDfugHYsroMznDwkG8zU9d4pQWpEuiiqxxvDLSyE73mrD8HFqtZ3NMAQcyYxCeP",
  "key4": "3D2WXTeqYisrBj2QJNiFpJP6j2BRdFpVpnnHDwRhDDHEiBkiUtz31a7E4zvkn47KFxZZSsL9aYSUXmvZRm14HZ2w",
  "key5": "4k7sjfw7QUyPB3vqN8RBbU57obxTTgfn9E58mC2nb497F7e4DVg6bX9uphzpDgvZXmtv1AwnLHsNxSRMFUAJGEKa",
  "key6": "McNBQuQdVmtLALwVxa14w4VWL3tWvNasXTkupjjBDPjxgKn3jyGUko6DnApY1ESSkUsaXfGh2bQMhPb5eRRudKo",
  "key7": "2E3sEWFcZo6BZUtK7YmETyuJnf4bWNgfHcjhACqvT4gbCaCrPmtmchACktQJHdCUZZqeHzHPoFsunKL5PuVhZYUL",
  "key8": "dHz6XGVvgNDezjvir1PfesQuy7n3JGjx9yxyiE7xUujafTD37TC5PbHzy4LT9LLsbGQKvN6dhfv4VV7Q4TBWksq",
  "key9": "3XETJMMqqun34tH5aH5P6Pg8mU1zUjaQvHTfSnDLLbtC8ezi8Uc5fcRozmUawEmxHvEQ1BHt8xz1GPRz2FREL3wr",
  "key10": "4ftcxUWz7r4oxSjAogjmDVRXjvgPXz62fxNoSq514E6LxzBxWEdXHqUbtmKDGK3jppVYC7Un48KMDtZBoQB3yJaV",
  "key11": "45d5P7mSqDYfXbpayNLTzkkMJhJfst5bnxaEJwj2A1qRUDyWw4xULEVGfNwiAGb5YGC4AqJuT3LWwPNZwyBbCw4x",
  "key12": "5UgdR4qgZUqiMzer1DDiBHacnbNtUADakAa42ryvbcavkZLpur78c3rdJKU7gSaNYJw9Nt8mJUpEGJXUeDVfBy1t",
  "key13": "5W6QPLc5LUs7EeTdAGCpSmwpgZHsTUn5oWbXzcHerpdv1MjD2PAUPg8Ahre3GkhWyMqTDE3U5WXGMfuSWN3LM8xt",
  "key14": "5hTMvK9zNfuPh9sTT5Wx3qSXT26bdBETDA9kU3tBgmaDUU9gjnxJdUfkzzS9urwdYqHEKLS5U3VotfUbSKjhTCC2",
  "key15": "47NEQhtQc99k6M9WmWj5y9yJoZHPmHf2eQDeNeJ6e2BPrKW2WzG8tv14SS94U8usZcaBiq8JsKQo8eQ5fhjPPngh",
  "key16": "3BhbG8Whaar33cgQKaDLiCZuAXtpfQNYDAzYKVcYTienSFo6Wxx4CtsBFaAFiUUPBtccnkdiKY9dUaZcGJxmnG2n",
  "key17": "5dGcUvvPewNtxspxvAKuEMy2ZLKJLMpvFJqrLgL6B3ZZwHqv9aBBzero3M3upxmwgjVjHdY4hMCiziBiGVQ9sCuj",
  "key18": "6E63coY8VtMvGRSMryt7teXtHJAHnnhypn6bkKJK6EzyyHUXcG5KkzJ6NjRqLcsd9xsExeBTmG3xAdjSTMNHwXs",
  "key19": "4FFQPtwcmeqMXqLXMRHPjhfKoB4rJWLvMsZKewbyDpfTLX7hRJUxT27644H18sW32mcSnLQFeVPZfq7WW3f5Xa3X",
  "key20": "3G1Lu8M7aZEsx4mxo9H2sxdXg5oVJXQCQF2hvuc4vf34as5CTfHKWd12BhzYZmRJ9ccbfbMDCPozNZP6kVHCH2zF",
  "key21": "2CbQGpt1diwzLCGXQDfgNXEeCABequa3rvR2XHfng3nr2YF2erFiTUYJ96mB38z4dJLmir7LkZSsdmTLBkgGv3PY",
  "key22": "2BJDAtNZSWytH99c2vPJ38q7h7sPdLB1bQo4VY919r4LAqxCqqJdmTmbXcbTEzYrzCkrfMqXnAfaq5tp5KH2g2bt",
  "key23": "4Ei4tVtrRs8mcXVDoCbGkkaUo7PY2BfHxhKg6o5gim2tbBwXvTUZXkbaKZV4yrbyXuE1MAXGHxcdmumWryAa9LLe",
  "key24": "53G5CbNGGTBkuWKw8Yk8PqTDV7Pj9Uz9WhifP9hRrPFZNi9vfy6HxYt9mxMK39tqKqQEbiLcW3MHDN9Pf4VJ4jFf",
  "key25": "3TT2yiEztqcRACryk2grs9o76PuK9eX55fLm4zyqS9DUh73zmoyrSAMmKMo9cnLpeF4csNcwqLZLk5ArpcqFcXuu",
  "key26": "hUDumsizEEwzsRxDLfR58xqqFkPkUeKuQWW6W45KjiwmorGUubfbNqWGKhdHxSeYTgCoVvMMZQwPe2LE2GZuCSg",
  "key27": "4qy4UXAxE2CjjHxcvt7tdDzraXtuX3kzVfNxp6ewWVZz13o4FDjEspagzN7UDndUhX33brPrDLKr5Ax3U8HRgztg",
  "key28": "4wWqBYeNKvugbaKep2xGAuSxtvPFqBD9BQkGdpYggvLwcWJgiyjwr8vN1PMTtvN36WcawDthPuDcEpcJXzffYJNd",
  "key29": "3PzPp85vvaY1qi5kbw26gAcyBPm8YwuUREVxG3gKMutT8QwfmTNnmCDaKSfMSHiJmgu8DRA1a7PHvRLHiNzJGWBh",
  "key30": "rLL56QQUAw9QcVecr2r9mSHsJkvTjh8LC37bBbEaZi8dBoTVGRs9iKEBWNyZbLHjSTkjBoiU7ceyK7xLxQYp26J",
  "key31": "c8XRAhJf698SEKTuAya4QspgHGWbJJr7o1KpGag4erEzrTRhB1CByfb7t2QDVBXdcTgc5sg7GT2PmzHu63QvzPJ",
  "key32": "41pXehXubhpgLRmqznheCjgZPGHCB22pzWuPySxwVbvTB7MnmzR9voXRc2CTytdNs2s6d85m1scSmnPN3FHDrqgQ",
  "key33": "vDfbK9NcQayfumBcjwAqsYFBLYJEY9KVQ6f4oVTa9ZeLH2BYcLmBPXSEGNPTAjsbD7yMxpqZdRMrFiKQhY7dzSf",
  "key34": "4yYt8DnuMEEjip4SvXLHYQvaZm7Zv4CQdMsRQti2PL9T347BV9y9skrJjwtFjPs9V8Uzdxg1Hacj5Vw7Z38PoxkQ",
  "key35": "3n47sMLr1KPjzVLiaMbbxspbwByd3c4F8nBrCcL7dPCGBppMkiodzvVGHjTBUS6xmmwDD31cmHLaRNxwC3BtUb8E",
  "key36": "2VDyfHDLdbnui1BSTahn2vyMZBi2SiFEyzAxMoJLVt8Sopy8ZtyFpy8VCt316mei3Hn3BeWqjZuoKTrPXmi2SkY3",
  "key37": "3j85PjTwJh4HtoirnAzKECmbVKrJPazUA5NKS7XzFuqePwrtHRjohawSHyQoGrrbAMQfWdVWz95BuHe4ZCircwPM",
  "key38": "5AYakuWZcicuNJWeDBek2QykpBUTena1wfAXGGKntFaqRWKc11mps2kDAkyWLmjgTidS6WMcGExWQZuP66cPUTJ"
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
