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
    "4fYqjo9wCCqqQ4yRBFN7TyfucdcaQLtej3Y7mbywUL9HzHQ11wHNdg5RNxt7PtSepUywh378RdWs4XZcDz9wJYeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "371wY73i3JXivCB1gFy3ZEZquw4UvTLeVrpHwyTbPDQ2Ch2KwTXVSc2BeNkG5gP2WtZRgeARvCTygyxcTePjWXUE",
  "key1": "gj9WNCH9ioU5dEPoHKVV5TJJqhDYi5TKauX1Mnrz1dXpVn3LzukGUu7Y9xtUHVe34oPQGppWGo7UvmegTwNNUUe",
  "key2": "543ireCbVnjQGB3Po27QLuhJwmL47V9WcgN3KKQWjRDxctFP3P2C9BQ72KYxoKyJm7JPKiULyPrBbxJX5d9KFXjy",
  "key3": "2PGYNyADFXSv44wPNVKqqyWsvRWYhf36ms8v9FoLvESg2fUzuKYnY89DTzQSEiuBBxeP35FwJXz9LPKhae7NSQBg",
  "key4": "4tdPAZMjNwgCM6usfvuZFUesyyG8cbZ1gG86aL1WeUMFBdmwTNtmcRDEXNCyk3HNjQCqm8ZLwuPBbyS9aU3BuqsS",
  "key5": "5T2iNXnyGpV1jNUmAMj1vappyDdyiCYwBrMv3jeXKM2gf99HRWTqomnfnmjn8YRdUaZsyTwgGAp4KFUY9pFwh8rC",
  "key6": "WJkCgSurQf47mdd6SrsW14c1W2rHT9irA2PJKcH9Xnj6XYtqTwJYqG7CStBQGbiX5wnUEj68HTZke5cQn8GnSay",
  "key7": "3ktgRhTgFM9yuAbSsV9ty2gbgRknoeZzoaAbMWpQ3fk63bqfD7jcEbJsMek62jLqGx5XkCQFW16HyJbK4qnooacj",
  "key8": "2T2XWHKPd9bj2U1qZ7ZokBPUk4ZbSYf1AfPkFYSpJ2VAt1fH6bGc6QWXRWmqTjyHcACBs43RsDwbTxkSnAyEbnLn",
  "key9": "26Xzp7y37Sx564Vj62YGKvE7rJEb2onr2E6B8b4R2B56EDM8mQ59sriNQAw3jMFbB3ZRghUQZxrhxRVZ3MAJhHCd",
  "key10": "2gwswpm4Rf7RUpLTRBxqajRtZbbqZBdikG1zrsNTKvQ6Sur74oEuUTcfkVRRVvVrxZoejx48mkBdhqHM6ofj3RDE",
  "key11": "2QMSFCEj1iBFPt7X3QyMaUSzh5C7yDbJdnM8Gi7m5DJQRwxKkVnywYrQoQv1Jr8KduBsJpsE9YJTJfL7EgbeHuie",
  "key12": "2emz5eJrXanU8NPUnPQ9dn2KeVmoCCaBji2mcPh4CQfGKnBSoDCsfF7AvwZeeuAMZwj9XptLXcd8KRkai6i6VFZf",
  "key13": "3aLP5WYVLmfw9Wsm9ZYWFMVcCEixE7F7whcB5fNBT1z8hrz6dv1f2FN2si5Qf32P2F74u6Eg7YhQyAuq2gKT3TCQ",
  "key14": "5v3t4NXspskTJZh2dTAWvmis9gQtqtcUzRPQhArcd3RckqLj734V2dgvocXuAdqkGKBKdezeM6KBDQCYVrjftGBS",
  "key15": "YoTC1oJy6nwNxN4u4fNQgieEUkd8EwLFJgqoHA4SAQBivzRAejTfYGUtLeiR4ubA1nvyjLcQjAg1SA1hiDsb9a7",
  "key16": "5xickCsj43KYrTwVVvcV2yM9nmDE9HKnJ2bURbkY1geunJ3uapv9oVt4gJyKeMCUBLBCUCQRmtFn6h4JR4dFwy6M",
  "key17": "PhfsA3c9M9gv4hQregJZ3PwwEFxQcifd6D4Lu9gyuowPJdjXQcfxDgjXvemSRvwnQLVWGqanEjwhRrVVrSyJd9e",
  "key18": "4fNSMJdvkJMBKQDqKkdCkx6Yj8kdJ4hpuXezTpgsQi1KyN3Um6efG23UkDSBaAWSXhFmeNUW8JrAVFQsN1U4gCiG",
  "key19": "2hUXJb2QzR9NV9ZWfY2YQfJnJgkXY6aymrhhxZFFGgfv3vMEkNRYjzJUdGyeC1hSMhQCGGHhSrbWmPoZ1vxeKLAy",
  "key20": "34cwgYuvysxvBULDPws1mduz1ZJFaAi6fTmatvA64NJLWnwg2UpcU2UPeMN9Pobn1uXezeLcBmr4CuBdn2m2YqzF",
  "key21": "6XCfe3MhGQfxGxe6dZ3E4UnN9hKVyhXgtaVyp8FNzGgHCBhm7FnQ1X8SCyXp5KSVutmhyXfgjHCy5n8Q6tZuC8S",
  "key22": "3UAuVySXjAuEjeMnm9po7VRuxw2o7DzArSaN6Z8WLPZZDsaYJfb5AHjgsv1PJNtmaLCvurVYqLriSDcSw8E3ZMZ4",
  "key23": "3225X4Sn52JpFz7Vfuc779yryhM31BAiv9QLJTJeLxwkAVMnV9sMLmPoiuAvNEch5amCWSmwifDaFgHPmudFNViu",
  "key24": "28QYJvyDHEdYmi62H9jzbKvsn1YGwdgyPreYz1jgUr4ngb5TDFpZGxSQLu4HyGtGVGc4prtQ1FDLYfCU8JRtTjKR",
  "key25": "4EH5ugk7KTd1fq2kWqBv4HZevhwmvQKjogy51hqeC9VWnDQV6HzHXLpcQ9NKVS1m6JybLVjgomYrsggNYSpoPPCr",
  "key26": "Uua6tVQxNwXiCjit7xcE2Gj7LcmcDHbVCbtaSdj4njR9sQbPeoeJq4k5mqEKbL7mL5eWzEhi8D5TRvREKjyqbH7",
  "key27": "YK13oE7YQmQbJJH39hSXG3Sqj9dk3ggYQAz9DaQrPWrSzcqGvTzoXz9EQsVnJj4Rgj5K64ivswn9zPYkDS8vHvz",
  "key28": "HHXHS4XmcoukM21qRqJ3CEbmqqXYVQhmLNHmsqTh7ixyet3fFCTNi1gsSrRCYSc2n1CsKwMchNSynToXXWYhFky",
  "key29": "4oXz5CZaB2B72yXfkRH7uFPcMJV8tnXsfK9fzK7948nqPqmGN3bs8RdDx6oDataxDie6fJdsMkBJQg7G5v5VbH5F",
  "key30": "46ryQ4hzFE3V8CnV7qLdJRKrF1aKrSzT2qXZVcMfwmqTVfdTDaQ6WzGZtWfDshJZ8myZ92urB93nDJBSqxsNWw2i",
  "key31": "4eyutFdKk4xWXJ7ht6mRd3eczoGcUkVSMwAc6QXvn9HZLeiBq2fG98Qd1FY5bkkTcRsPu2CSmKN4i3tzGGNSEhx6",
  "key32": "4zSQQbesnUFTbEASXXfornS5fHRt4TLGdTPdtEXB7hm8UBcuygYfAxFiSuVgtQy2R3RMAjd1HfeKyiba3DuLHST4",
  "key33": "378eaPcSTuXePMaYSf9HGpbRoASH7sTZshVVtvUAP9uedNWv8Krf14EV9MVua42bjgh5LNRraUQ1LGAthpTjoT59",
  "key34": "3NzRJpXADRfiZVrhJGKjHioL3K5CiWRquBftiaP2vStbzxWMaDn17bGWJugdiQaAnQJqijV1Trf35FN39ciJt3EJ",
  "key35": "5NG42kibxWQBBFiWJ5M8ssQMPkhKKMVYZjnuWnu5WK2nVke1mbhq7UA7uUJtTFapSCXTMsSG7s3rdkwuUVXZeq9a",
  "key36": "kVKi9j2yKMi3F6zgX1HeFPGsKqEsgbvo5wwqQMbL7H5qD61bknUsHR3sT9LVEw9yRGWqvruGsPrMjDsb8CLLcZ8",
  "key37": "2a63WzC9zRxnZM9jz6WfyxTJ6ypZ93Luva5yJcuF4zNis9PVzJrbexVhG3tWp7HGVvg4BGj76eV8T1iqbswr5uyL",
  "key38": "3D95dgqihzWtUBQKTyfBvjJwDnsiULcNSUBKWhXFdLWqXietoFVrT13hosJvdwBm9Wwm2t5UBLu6KWwPoTJZzuGT"
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
