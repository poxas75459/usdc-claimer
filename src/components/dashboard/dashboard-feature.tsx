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
    "5GTsALzBRJGCqf6hYyg8zrYvX4AdD4QK3kF7JirN3LpEbhNMYLXohi8KxYtxRVCnNSCcH7ybLPXYPNYrhqUr1pYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h6zKPr9yiz1KSzEvcdDDGPpA2n3DHi4bPNNXFiCpUmiVAi8HnYUn4ZRa3MWU5nXePNJ9o5QHmWa93bgF4hmijzf",
  "key1": "5h4fXmH6n85wzUxuThiYVnjNkdGbUTGz8cAcLoizEtPAWENitFKPc3sC6j2Px7YxBUMt8nw2vcMXFXTAVoi6Ywsd",
  "key2": "5YQoPGXp6g83qUyp8M4E1kHPSqrzhq9RWrYX6XrAbpQbntJ6JoGy2paJcAFQFBHKaADA6NLC81NTejBCsKE3WPkh",
  "key3": "5AQt2WR85kVftzuBVD1XXRR2gL5vMFys9sSkVXLbKq6omdKC6jywKWQJ44E4aXz7tcVhv4bkmSesBN4wvgkKncNr",
  "key4": "hMgw8ocpzGy5PaR4XLNtNkLUSTjMYsgh6sjmyekyBJxjXuuo5nBiPskksDrWyumysUH55GBTDDFihZxxU4gULi7",
  "key5": "aY11KbUTo63yRDWfn9BDuUerJL7GFD3qTg2yf2tEyV3E1ugg8Nhui8Cc2UPARj8zRpxM88WrRHue4S2LVFgAAaH",
  "key6": "2cWUUZx8r4jLtGtArHUTiwjVF2nPp3vQ4SFYriGZu1ecjML6Mq6qyshh1zoJSqJk4vqkougetMLvcwS8MYm8vYWs",
  "key7": "3Pbr5LPG1ANBHubaCd5GYVGc1PCQ7ULHmkg49fsdSS5LCuQzmSYgqqjNkC1j6r6AsRs7i9fQTXtHStxnuffwrE2Q",
  "key8": "2rBnGLtdzqjFTFqqAdys7YQPEtc6tG4LSTzALxKMu1BHyiWqQ7TdYz61aQY6XoRfDnYRHDAf9ZvhzraXtk5igtdu",
  "key9": "4KWgcR3zsxZd471gLfi7GoACGaK9snCb747sYSoka68CxRzCPxWyeeCRz4WPFeqbJBNokp15JqbuWa6dA8U4jL4q",
  "key10": "5W5cWtFZVteXiMUWF6vScCuLKCWFPbdthbsyk5ivTNGUGTMzPeFgNup79JskdnMUAfph2nPuebGQ2ApLFkCU3jUw",
  "key11": "mm4QErnD4K5qVPrqqaywvi8cCmsh9eDntie5iUmRJJhvz4EVzx5hNwmGw2YesDQX9jiPtqeCxVXgEZGDBG28vSX",
  "key12": "g6VfPVWdRsRYYzsceZtBezQSu8c86DPE5xrGQfzszZSmyg5xRdu9JwtRZSuG7T7sVnFg9yZ2ZEBoU5HVy48kAU7",
  "key13": "2nXM661uaWxzfXyKPdFaDu7MUJQnMkfVBeoVFbKBfimg231pyLjxNhQjkRJPbRWYa3G18X81eqXzEm5JHXStkaRm",
  "key14": "3VWNAY4p9DDkYjyZk7Wj3uWsxGqC13fdPtMWcqAB42eSL1z5yRa1qeQjH9nZU4e1bJAg9uDRZveqxqQrwZff3pmv",
  "key15": "31c9rpZZka1Ep3AWJ2bgt6Ckz9XnMQtaL1kVyV4cfqr7sSjXCfb71gmjMjm57pEBjWEKgStiuAQ4pkYnwwsjfCte",
  "key16": "3PgQbuVHmQNa2HpF2dhsD9YyXb8VoFbQ6GxY7pzdfDVVCu5g2xFcZCM5jpFM4Q1DNfbrV1D7nfuvQzpZn93dZEqD",
  "key17": "eRWkv9SLEBvMTX83SbCJssKNPtMff3XmzeKhKVdCBJmRZDufTXWi28B3nySS6jTrykPZgAoGikYKTa3AR98LzCb",
  "key18": "5nRfmcY4gXQ75qjWbuGA4K6UTXZCNybNufAiLbKVoYy7TL4Nuu9UsgTmpt9sJ7MwCHbKng8RQ36Q8JjjGQXYXoTR",
  "key19": "5uoWQnzUUSueXEpHmMiSmsEQigHa6DYPoaRqU9pKTLtpVn7qmBxscHhP84GTyjESLngk9uyVYoDXPibXoW65Krc4",
  "key20": "43YuBXkUMPf1qiV7cZEuq1MCVcGwdWFzKm4sj14wFm2kq5jzUut1BBEiEsTuZC1GSNcdvPBsZSCaUumsbEKqjPK9",
  "key21": "s6P1oJzSFvciqJrCa2eZwWkZRtMo9YkMaXGyT4hX7kr8X38HjQpf84mBCEthFrY18QoAdPKHh5LafXhSKJ294wy",
  "key22": "5EY8v529DgwgDVctp9XipxSDpw25Fime5SV5ZE2FeLEqZrKPfy7bqfdm2o1HnqyCfgjEnUbFpic8VzMBGKM2pz1q",
  "key23": "2Z7cjWpr13E2fKrisbCdmYfXArGn3xUkoF1psURm8uBr3wLPPJrKCvk7pdqhiQfvbVkwjEYJP4vLnccKPnSTnhBg",
  "key24": "XMUutGPeJs9PwqxEB6gMwbkpijgweVHzFaXwV6TEW6hcLUnhcWHspfqqq3C5hQehRxtJEF7hmmsDoF5s1tvSNCB",
  "key25": "3bXVjLxVxmpzz1KxKCRn3x6J9xnTrPBzCJYusb4fLLaMzezLyqCjyeH8pJsPbjskQeBiiYLiWHWK6B4pKFHK4wqL",
  "key26": "z97EWnYnPPdYFoSFCQCKxyQyTbhu1b4Cd7s1egdHkAgGEfD6jdk1Q6sUrJUrTQFQvLN856ZrNVFyuD8rx2qWpnJ",
  "key27": "3kKHdyEvNTpKEoMzdBmj2ToR698boBdMbL3Vo9hifNLfd5iow5Ad8yn7oHxqrw9rdxnicSboirJyjCnKRvoZ2ZE5"
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
