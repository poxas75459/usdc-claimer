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
    "4D2BnwDVqEFSgxFZumt1VJUZUVto5GrPmTfJc5aqDbC5ydhJFgRXoFoHXNsUdZYHhUPjaG4VMsdHpsZcTGvTzXMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jX5PutuKRzrQQd4wHcSmDN5DjY3GccNctkU1aybxcGi47YKahbynaucCDNf5pAUJWp3uEnEpHhErRA7oaKsdtJD",
  "key1": "25k5BTRzcCP8ETWqTGYz57CP49cUgWT82mQDtaLrgtKy9ALEPxauGwA4ik5PTom3GbKux4CP4xJgVHfanwn2DtrJ",
  "key2": "4JTHk8pppqowUXyBsE8nMewkde9uP3uHvgduxHvE6eFQbGHRjtsjCzhpSx3tfRhBdr7ne8TWQ5ZzTLxPE8EcdG65",
  "key3": "4q5PT6LE2ZFHMTo3NFxkzu3f2aDfvoWxGZ8MNkdwbeCzEWEBgDXurRVBzUk8zwVNSjEJ7iQyxfQUmFf9TJWJbW8f",
  "key4": "3TfjaQi1JLfTA8L5Ta84z6NHhVoX4dEeaD4hjL7YPf5cNubDjYSyvpxTgFwMhiKb2cLKQgQ1YUYtnvmKNtg6ncnq",
  "key5": "23Gm9D5vLXBuRdywGNo45HVysQXpk11GbZFPESwDKK1Vr5Ficbht1jdAu6z7QsTj6RwhTfxjCjXk77W5zDfm3zWP",
  "key6": "3aomDnYbYUFZCZcaDqx3GBdDmsNJhVAiCFfZ2zjc8seFiz8gd6fZDHNBtEMnPNSHzaCnghnhbksqaH4TruSMn4BQ",
  "key7": "2RRmkBLzSaDR6Q4TM7tJMdnnBgTYdB5vSxraB9uGZBijPMkw4ABBHt5ut1ytdSurdGQDStAJ3AvxGPPAnTixGNgF",
  "key8": "qsncwL8wSEm5KaKAHjCi9iWFrs7NQTdi7RFePphmGwK3SkhiRdGvUgWoPLMGKZHDJbSHa5u8Z4k52yTnJH6pPri",
  "key9": "4xMuttJMwHAy4UQgPKz6Hd7hnkndC5haCPbd3ZBSoetbzzpfrZrJpjjpnUgxoPKZ4gJe9DDKrXEzvKeBBaVtWVrw",
  "key10": "CSm9d4wjKuGfafNqL9mzGvNX5ZzV5iBJNByGG2vP1Q9VtQuKsVuKEviwKTGVg9G3DKDLkXPV1jj6FZ4NerFLtUv",
  "key11": "35MBvGhngqTPP7CV288M72Xm2XxUHjtctq6FUdd71apD1rRfceDv6S2K3sXE4PWvrwEHkSLr2jj3M57hdgVGaD4z",
  "key12": "3K2WiPSTFuZ62enFTEUbqSqvcWdZmPGRTrtB3VE5jpem1Dsm5iHVT3c1s3tCwH6LCossyBRC5BnCBQQm23mPD1KX",
  "key13": "2mRSPrtPfyGSxkffCzMGKAtpLBhMmVkNWHR7qwTtggLYbPuZibWgGeFoh6n5Zhj2mN87ue1oiuvuAZYWWG1yFAjs",
  "key14": "jcuTunWd5PxnUuLCqBtaGZCsiefJjQxYHyxLTzbn2hACCxKunoozetnSxU6ffv2FYzzuTYeGcG2PxJT999FtgX7",
  "key15": "2y1HdfegUwtgLjuiJWGFfCfzatitaLGiBEXQyg3TDBSdFHi3Nty8jiHnw4JSZ28fynwUCy3MViYYfcaCXsjN4dxf",
  "key16": "5UFVDJRiRMhQdg9em3CWZGZLTMLgTixffkyT8oCMBGRyf2QHsKQfR18maAapayrWE2wLHZqJPST4KotscAdHrNEZ",
  "key17": "28s7wXBQ7SarAjxoWPTJw9HdHqZSuAZyYQAsAMzYD1bLE7uA6nJy6CYztTA46jkuoPhcC8d6VQgPaoTN4bLwcq7B",
  "key18": "41N5RQqpfJsXNBYrbzDFsi6HTa5suBL1LzvqKEB5EH1j2iFENgBDELe8wSjfKfojdbuBTTSXdkjHt2izQE9KT9Nj",
  "key19": "3nPfA69iMgiL5do3tqUTiPdjRYns3p5t9TT8TyjzLZPpxqgSWFfN5y49txd7TkhD87DU8ht15zig15J7NHDaX3Yq",
  "key20": "5nrjkZhivqHaT649QMCzYbUTXUrwo8nqK54Sv2PDfhhFpoYkNoUM5r8rQAWdpUo9yDtZWhA5nKoxzv8zw52cf6Rk",
  "key21": "444QgdyxVjtvjZNmuT75Ud6fi4Z8Dyskfcuh1dExKD4NrQT4QLjsb1N86DmGLcvKut72Wu7M688QJmcRpmmLGXUu",
  "key22": "3nzUGZPJfUrzsxPpiSGNSXEuj7TU3GQVyd2hkYmaDHG4iP7rVCF6qdvhpXNdvvjdPod2k9xy6Yie8fF7HT8QggCG",
  "key23": "2tbCV72mWdz29DM76AMssVmpTJCVbgtyLL9RLEx1huuffWR9RNVUJdJGGZK5MritJFB1PzmSt2sdjNkKGXiS8vbm",
  "key24": "4eYwHqCGQDoK9Z6H6chY9eG2dYNrycfr97GDe3FF3S47bneozqcVdZjpaAHLGQGC5g2grwTr7vbuXfBjGskWzEg3",
  "key25": "32HywLqcSTA9EDhb3VUqiG8RjQRRCWzLtg4vosNMZEkUgkDjJG4xvXqeRgqtmf39jMmrudaMuZsfZefJfNpMmW6E",
  "key26": "3v8zeKxjXSVGDw2VwWsGNFkGaAUJXCSu2ZSGu2R6zA6zE6N3DHoN6Te32kDc3bHnrfhyWrij6T52UqQfH9AmXTjQ",
  "key27": "4PpjU2Ymonbqr7wGumczs5432BYjf8fiiTdJ2GjCC4dJwiMSKy8gh19P7fp4wVcky31abURWZwQcfuPcbxjCWcPW",
  "key28": "2dkuNRwvDRMZAaZm9s64jjf2RWiNiidG2bFuY4LsWTCXtPAFqUhRK4jPzPtWAae15VEdmFwnA5pgaZ55BPBXYdse",
  "key29": "3ap53hJPqjVbUsYLVDc8dX5KsV7gvCCTwqqRSCtoBnmmTRUAQYauEwm1i8QYHp8ByBFU34kH3ngDBjNsGSxBFb8P",
  "key30": "5rg13755HPeLbBPmcd7tLLBQLiW6uuCuUuJQYaZDUM1DJvjCFzaR2jkngVg7uLhqSJEFS8JJirau8QEposvQcCQg"
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
