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
    "2oNGhcpDhKbTSNRFVCQaSnmkN76P6ESAiQqVnVGJ1NHPd6nQrXsDq9v95qK69EbosqSW4R4LYLdNzDykmpkTeKPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ePgTGseo8MRQFMj7Nu2gk67n8gvXoAc5ND6S7kwYDTLjPyg7SRaxWNu8Bzb2bT1Q23xZm4fFNRCQULGEjD8e6zJ",
  "key1": "3MhWDcmJu9o39EkeNgvADY4D8KPosJfwWE8agavvaWmkUBoAfxuWxKpTLLCYNNHfJv4i8PX2Sq5vESgbu13ENds6",
  "key2": "2841MtXTztsKh9ae9tefF8XgNzk7m6EPXQHjuak63E2g2sURvD7YXMD2sGRyjX4SnjsdkAhBrrBnJqmTEyH6TJsz",
  "key3": "4GJ78ahTKhM4jPErdDTpTMw9yzSpEoReGpMrP4eJyfFnZuPsmbNSUn21fqfWLn4xSqNfVK6HrfU6Dyix3TV3PEFi",
  "key4": "2tFFnv6ARZKZEccPsEa9ztKyPk3bwSiSVjtpQi82XTLqrmL6gjux2qtdSfTwhKjuTS6Egr1Sn9nzAuW4fLBB3BuA",
  "key5": "wi45CBBY46CQVhRn88SW2cH5fe3tUBjkVQS2wwvoDA81uSa1J7u1ztNNr5VaUkCzmHqG27bGqCh3DZLGwSSNoW6",
  "key6": "2cES872emMthYkroFnGsnUPQFnDc5j1G5rZ6AhrF9jnEvjPGjEKNtbFnMtRdJhLBE78G5afeQ7YjkZijLQJRpGQ9",
  "key7": "44v6y2tDSsndwtSvYaV5b84UXT55JDM8rN22MSjJ81PLhtvcVUreKzACjXAKhG3vRdWBV7pKv6b1oCcRUUDaxf3q",
  "key8": "4DwVeGjXyMY9Jju6tD3ZVsDGk5p98HJgKSrgTer3eH4YeQC6FuP2YpYusU3rfq5GJU1J7Z3x7zMfkAWfuNEaQHrH",
  "key9": "63Ud1WZdxkfZXE8goHqpbzwuqJXBSzz8UmCrJPEurSN5ASPnJD4AAZ6TKhKr3kvoJzfrPRBYVcf4KpCmCCNzAbma",
  "key10": "2ZGWUixPtCC4VJtEzsw81MbHpPVHWvuJwFPrvo4PgmWPHmY9yYcazMaKxQXEmpHDQwTQ9METED2AmnKBwM5ojjVp",
  "key11": "DQL72h9CG1FZmCqjBLHNwugf4B3woYispFd7Z6sHNhw2EHfRZgd5WougBuoKkar4zExy5PZdC77mKGEw71Pfc29",
  "key12": "56Lnf2KgBjAdCE5autCnAb7MBvwLzMpx5A2k5KDPp9b61zg3Jhxn8ckJVEF9zgJkpiYwiK37PYT13gJHAs2Kq4gS",
  "key13": "4782wtzte7VJU4tP2Lfq1KZ9nnUnJL2hT62QZAXPmmBVCMsfoh3zVVFj7GWKyJ2DYASVEa61PhZ84MPde2PnuhjJ",
  "key14": "415a45u69Et7ccYy1Uq6Bumg5ym5EH7v8zxkUuSPmmRaqi14omyXxpWhJYkHMYA64U3JTU2VDgpFvQHN3SRF5aDT",
  "key15": "3TLrXyjF5taEFdUgcxyKGhQ4cYx1yg6DqfUDaZhHFr2EXghXEX4hpqb4myKiYJVuGo5qsykgydHEViipE12caQCw",
  "key16": "4NQ4Q8J7SLvo1LZPPNbBxzoRbd449k3oUQqhh2evsU3CUo9bi7uZ9qTEudAAFSFKQJmnp2wRDa35U1Z3g9KKVo3i",
  "key17": "38V4FaGPN6jey9qfi5UuEu6J9SXj2WpVwvG326jdmQF3Sg7LECLx2zBG9bccNZgw25sxHUNxc8dvYnrberoNDaoN",
  "key18": "4r41FvTc4tLY7MNjimDaTHJEvYymVHFyzZWwMpwnsTV4JAC6DEpC2XgyYks8g6BgeqGc2KFD6HiJb2KcRtauCC77",
  "key19": "4bVZVwhbk9UxbfjsB31LbJJePHsjPiw3tYcCq7qD7mh6ZqUs8GwsvifD3BxJ3icPExihcjsDkVaj6YdoU8FVtvBT",
  "key20": "3A8dNzgTNWo2jTWAVic4FFQPr6h1A7MTwGZTQPXfy2YQb4pZTAiStEKKn5fXoBFDUzvmCF4adX92MUDBvPxFb5vG",
  "key21": "pHGdJkHvT4M3qfBBJrmoWRnM6H1dhX9AoyWbjny7zvnA23g4RQhJizDRTqbm8gu6rdNGfUkKNmReeViwd6e8vuc",
  "key22": "4kejR3oQjCeSyJH8KkQyPZqL8CkX3yx5zx82bze7jSADYpT4vGbjXsENAMwecQx8CLM7w4jyNwEbAjzr3Z1LXQDZ",
  "key23": "4ZTaS6uWGzQFxnE2RmoHaPkP9g72JMZA5PcbbNfaGvzUjHw2cNNDPWSMY68mesXN3rgzLbXrhenbNfrcTXW94Dy3",
  "key24": "ZGVpNow7BiHiuWw3gcKBmR5yGvEkdCuyyDoJMHbfXgmmVD53bEspHW5vKdEQxJYWiSyoiyLoYSnqwYQjM3RrrSk",
  "key25": "5G1UacmtEetwak37monu5EEkLU6Tn4WYnLeeVMSYd5WFJokBuQLY9J2zBcYqo9sbXzeBqAxXuozLSQy5VbH1CVCs",
  "key26": "6752j7mAStMyiw4TH1aqTwHYxw4sF1cKBS3se6s4wejeqo7DFqM4zXiaM99yZBQDqVfhadLy6D75dpAEV91EgpbP",
  "key27": "ArU8FpHV4UXFwr92FNmRNuHo2Y1tJt7WG7oANCLp1GZnfYSNDrsEnW3so78niMw7zaZfEytiA2HdV5h9NUw5Pbr",
  "key28": "5h2AcWMF3CZwuLe7JEBMMCpH5sBHr44rJzZz4Uji2W96DkWxbW6fW12QcS5ocZbnufFp5PSBQ431ZjXEhuBc3jkJ",
  "key29": "43UArXNXCW6VkvxAJKpLoBzpxAzGc5SCxmJpEurwVWHumUJtiomyL8uQ1RBhkRkDpjYSXofuMQTV6pZkVyHgBKY2",
  "key30": "WoByzwnKknoRxP2b8ZHPdg2sxsEfhp1XGnXKYG4Ezd6eLhgvt6Z6BjZj2jptH1FqCKb2fMHWvV26UheiifFvwkV",
  "key31": "3VJSANVEnNs6wtSkXVAYpbM8o2f72odyaFBV2TdpzZuwg3azpPioWtiYJrHyYEwQeH1yf1eCV5wD5YrPHUKaVJFV",
  "key32": "dpf3X5jndmSckAnnKqrSEUW5EzZAUGyhT6k3fhSr9xLiUy4YZRoGd6rXYqNG9WyZY5iYs7DEVm2UU36BHM8Xrqg",
  "key33": "2dXaH7JVCt35Ueb2yUrPy2xDWzVr6NL7QvZJ4qUMBgJtgPYZyeQ9VYZJxrtTGRLFTGYDxS8wdqTfhez1V713YRsF",
  "key34": "EdwfiXfNSAtoKR6qb9qA7xQbYEyq9XauoGd1Gym7X8Z1h32HLeLc44AkTC6gDHvUi56CVMxhBGGUEFSKLRaYKiw",
  "key35": "5vrct2Bax2RsyBGuBZZxBGRXYoexxfSt4r5p3uBPUchVDYDYH3QskzpZpnDUJwTwSMZxD9vuheLcH9tG2Hyb9ypg",
  "key36": "eyD6qHb1xqxe31p2MAyswpQmsvUDttVRFnsmZqfPHQ57oJNHKv1TDNgSohnqWkjXeqkSQJZEpWXZrxo7VNyh21e",
  "key37": "2J2vZ27SYJXybXPQ9CtkfhsuYnjVjochHwaFsG2HL1bob8NJRCqFedzZptUFxHBGS5joew1znZQt9XNdNCMNxhzK",
  "key38": "4dtzmjQKmYPpzWcfZeGjYgAXcHRhpZxTFnZKNuLkt11FqX6ovDqVZcdnAdEcNNmnLTSKTG5Q8NM6z7Hd7yCWhbwa",
  "key39": "4CqYtzVFPhGJNuz8FXYocnTuxfn4daL3SesbdF245Q9bZwEHd7bqPeD5dKZqS7h39pGRKtR2rJFerRMiugBSnMVo",
  "key40": "5b4RXLWeypY4rPMuRBaJKa7FBJHqHFZXXcYNdRaSRwsWnEbYwE6MQbxmx2AZtFM5ZaPQcBv2EAQ1PpQq5TuxJrZ",
  "key41": "42tCiFFB5wJGyJbxrzrjcTv7hVAU5wX2vW6fLktHUQM83SHiaqXPpCEMPmGPU6keFg18EpLSqgsAu36YLnxv3o7r",
  "key42": "2kCccfgbpjxwuMVW2PALxbFYLUKQobsmofugFFqSfshzfWJbgfQ3FBuSdMTDdisDVMT3rLr5hc371zspUfdPubMV",
  "key43": "2ewirRDBpbn8x1ppiet1KvNDjhKcyArLtNSNDBUkTKThydSHNF1rLREA1GZyMgXzL2mjAcud1fX3eK1UNh6R1fHD",
  "key44": "2qTTNp37pudSaCL3wZFzX6DTnbdJiy8kckEBXNkDEsQyag6cgSczrH75RMzecxZC1pEredvPSWwe5xnowKeDEisE",
  "key45": "2fkcxwXDUAsaDhM1rUcCoXpRjy5JBHUnbkKUF5LkD7ds4sxmm5tdrVMSgkavnv7qdi1HiTEGQWJvQWQbuHTVCCpd",
  "key46": "5fQQRvYaZjkpfS5GGEdDdBKUQwFBRvpPRu7HLezHBtt4KTCbTc61hRnkXgZ9Rp4wQDCogWQEvRhfcfMEaGXGt797"
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
