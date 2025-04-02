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
    "4gzqge1R6vx2t1p5DgxeYCscxQXnUCnGgYQG4WbJYiRmwXeLUeejph7JX2fNN6xoajVMHp5VHVNduZfjXfSYctDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FtwgSvRBMxFhp8jPumAboiNxNryjkLRNtzatoQtKQ8fWvKmqhkst4QqiFbMF6DuYwEn5NPAkKnaHTRA2WodpLeb",
  "key1": "3Y2e8cZEc9Uu3N7N1BKoupZR4kXWfbqTD73beR765bB3UuG32yqekgqnRM3sFSyLbevRmvv2RR4HDWiPi2fAaNph",
  "key2": "2txczfdVjAht9Kq3uPwH6uQuhw2vfoxChGTJQARxpPgjtBGYKwbQnBRh6XPqqTYyyJBw4P633WVxtSy5WdR7bdxh",
  "key3": "3zZ339C9wwnsJ9oKUYij6AKhZ6b9L97Qr14t4FTxjwvFMMRQLQbaojMYc9NDFH9opCF6htjiK3wYVKcLhEmRpoo9",
  "key4": "8ztikV1yZAHmQrhnNe9PQRCyhQUGd8FGP3NkqjRKGCzfVrto4LmZsnqAZB9chrhJmthHjnFUpZzDYFvihsydWe1",
  "key5": "2XjUKyXBg6WGpmTjbFESBDH1RbXT4LBSKPAcFMBVbkcdEvsWZbTVfLxAzaM2TegL4X17u1rVFZxwEphQwijH4hQ5",
  "key6": "3gNZ47biLnPN8szoaMNHUyDp3C1YuvEdTcS22RJCjPRrtirCPRCgGriC6mX6SNduk1B2Yao11wW3hkFd6SZkCqxq",
  "key7": "39D8b3WYES37wRm5k5YFXgBfLAn1xcyCEQvYNAs5xeh3ETDoR3wHh9qftUMmsLw6BMfFtjLHANLg4BBuuscdM1F6",
  "key8": "4VLVw3KC4d5YZYwoDkYic6CAwjjqF4eSt7rJRFPxnTHKiK2D9o865eyrg9r28GytUzGBhJpKhp89zxeomb3hk8nv",
  "key9": "5GjDBaKKK6muWx2mYa5ftcnPzRhRLLoBJA26KxgRSJLyHuBcvfiGde3KhgqE1XKGnYBXmbsQECjMwaS2dzgGwVM3",
  "key10": "4wM54XTBTMEPMb6cpLjmfsr2spc8ACYGpR3nEUJGu15wqgdvuXBTJTGxRnSx65nzydELhttVnihFA5yWua2JV4Pr",
  "key11": "XHQog5jskswTb2Ex8QtuzSG7ozLbVPPt6Z2uTNEYzjByDLe2q6NFZuGmHhoWYwpfN24qVeLzQkyBg4svfEybR9D",
  "key12": "4NjkneYZUTx9ibuZ82ANwCeR5JsdhncXwWT1ZA1XjdL7dFLqY1PTUJ1rME5CNmfuaw2Cz2BZmUFzBq8KavE397dD",
  "key13": "5GSbZ8bBAEUytvU2CvnxxWasoys8QY9R13YQzofCvdy4JkQv1pM1CZAZ4br8GLPZaLx9wuRfeso732jXG1DHxDmp",
  "key14": "hVUUtH8JBaLrMfcFQ5sNv1vQFB4KstJVd9JbXUzgBbeKS7NnX71KrTk6mHL7bP4Ybd6FTU8gX5pJK9VT3eU8UHv",
  "key15": "4EP3WPFeqgcNpPo5J9uUxgL2ENkpBCpqWC4751GCL1tJgCcjFgCGwSk3PTodT1jPXCLWmr3WDDBDaipRdRfG9PsB",
  "key16": "4eBGX2zzaPT2U1YkywYKsE3kzsNZtRR8rMmjdeRAHpsHeWNxCZHFeFDLuxsrVCPJ2uavanKNUSRBHHSb1UoSihzN",
  "key17": "4CF5Xnbz6DxrqfFPVyXHTSQm6kKq62A8po9kt45s7un4xeeRBHwy8RWCLQMBbjxq1aMpkmDHERNRLtjDHHT9KwUW",
  "key18": "2fNSJLEy3BCXzBJr71ymryi6GPiSuzi9T1Lt8ZVoib3GRr32HyGGuDok9HJA3oCu9AoFHbaDfbLAT4iXXQh32xvY",
  "key19": "2Hfw1Rit8gzGYJDnyzP2EthyPpvDCemriBEBB2TsLjAv4hcqbRtY8Nd3Db8qBKafUfw2WpuWxWraDTD5EL3eKjzi",
  "key20": "28uEiuBQ2R6Qn2JEpN1AM57jKfVxiCEhRGgAE5HaYocsfWF5NcGQMJhnVYeyvkbKpjZ7RptwnurSaz28w1oSzTLD",
  "key21": "Zkmu2REY9GZASMSCi58dnGGYKGVYj9pjJahdc7UwsMHjQJqNJ1rXELc8pPcSeguV8uwF9eutoNjeLgWmLcWoPev",
  "key22": "4PeYyTznKNfFxVTgfBQ7EUT4GTozqGJVbq6JjhvrErZp2FTfgjrm9r9BW6v2tcg8rjRUMrTTTLEvN4RMGPPWHimH",
  "key23": "Ph7RB3hBYRXsDGB6qDKHPCCLgqqUwFudCqcgNfZZSPLz77dvKQS3SqHh78HBJLec868BKhpMs6ZkQo1aKGi29LU",
  "key24": "5xCq2twfMgNbZjEGwC7oMX573EGPX2N7Yvo2HGwuXL4s5BWSqN275kPD98mmkcDgQo5gpFTzo9s7rbfXjs9UvUrK",
  "key25": "2Tp87osv9JdmzTR9U2z5mMGzFZnHLLmvp56GCScb1ByV8TkESy6dwYRAzenr4n7GLHDJVsZFSFKCqzm5jYySEUhm",
  "key26": "2LHb1yThCDR4X5NSpYbtbcemGcJtKa5w5o56gLWTLUX6VuBLEbZ5GncySMyUdqYso8S7X8kHPriz8MfqwT7E7mEd",
  "key27": "3251DEriB31SZf4TAdaHbuMT297yAQwJi26yQd5uKANLtjqxWEcfVXBt7EAe3JctySfHs93ERyKw3pTdwDLW65mR",
  "key28": "3h99h6d71mdKfKL1KJKvDfdYG7ET91ZPXuJCyN24bPKCYJZY2eePeEYhskW25jQUURrmUY1ZEnydP5cm8mJtYZ12",
  "key29": "29UPEJttfmGC87iZWE334dHqhBiN8JgPvDLP3Ze3xEfkuKVo1iLgjCgznmkGTrW7XfVchGR6oswMdRpKZcgnpDGG",
  "key30": "wG6hpuyjKuYqnjU6pMpKzTAkDhABRC37ptXVwdZLtLF9GNdhB2fTNvYeQUKGpQm5jFdTX8GnXepxPcz4hxhY5AB",
  "key31": "1rZJ5jb1A2SAmS9bnEMAXjEtVP43QQzzn2aseTfAW2pGXcf5EaTC3phYrjWz5ctebPrsjQSpJAhBZG9SQ6jwVHJ"
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
