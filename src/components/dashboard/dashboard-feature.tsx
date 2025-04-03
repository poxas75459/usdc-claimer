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
    "3ZRL75S6Nd1UJpobhhdsJb3PhTXWxrzNdVkFAJgUX1Qn2t3yxCXkiAfSehpzriR5RvDFLBVVtyjuHsR98pDM8ktv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618qywG1j3aPAMY6bfwTnZqhTaQJU9Z72ArR2poS9FdNTP1kwtxBuLyQtQSJVpMHAMnhonSAVpsT6LcyPSVz4cX9",
  "key1": "2CWYLY9oBy4dkcmKUpf6DYqTZznzX3VcTjLNGtoKyJY6giva5WDdzqvVW6JBeGJYVw2aAH6XxrENEDNRZCMkhPfv",
  "key2": "4P8uijJah3NTePAKsJZ1MPvMiszDQ96jLLPtkoGA8Z5iWomqmJ1PE6pDS8e8aL2V2FieZRPfJU597zZUb8yR5Fo6",
  "key3": "3YcWP4U3jtgGVeYChwwLPwxtvdNFPeMTgPmvBKDJmCV1a9RtWusbymXQdbq1JczGELujTWWrFX3QWECm3ftYgbqf",
  "key4": "tGjbbdE59LRXrPxbs9Q8PEGp4TqPhUrSLxTszoNTDUPvKRJ8YZiqbtCJDX7NajqLo6JeY1GQobzqXMq2ZvuPdm7",
  "key5": "45bmKoXyqmxymFBTPKkF6aDeF74Wpp2J9LS6NjBBMyerxnKiN7RnvRuH3XYDYLAiAKmfLkVS2qLxVs7Kb8kRwRCC",
  "key6": "2JKyMqxRiTThb4NyjWoELAN4Hfw669GMxkogXFSQmxBgW4urLRgkQNLzbHWGJt9yV4xdvXw2NsnvEatBBTjs84tm",
  "key7": "2oQxoha4AovoREhJYRWmPNbQPwWcDsRcvW2Hc7VRp2zacEW1tNrWZRCDGVHMXWTbQe5q9DeYwqYuLzuZ3PLu5pM9",
  "key8": "5CYgxvdyegMSnpKfVCsfWhGMVW8mMGJKDurxz3uPCAc6krkh4A5WHyzZcYonG2EvoyoUfzKPnurLuD26RMC7Yx9u",
  "key9": "5TvB49frc5RtCGivdGvm3it53f7e3wEjHSVwWgVvuPg1G2bRtUW6UF44YG1KSgo6FbS4mK8Z1N1rk27jKPMPpD4x",
  "key10": "2Vr91YHzT9YZ4U32aURupyBPxK9HN7zAuHsDZjEErAu9KQ3YxBKTfbQu4BkqC7gMsUk727JE4BqHnLczoyVuU9gR",
  "key11": "2wc68E8x4ZmyH7j8wZSd3DZ6GZFJ2LGrT2dwee9xmSgC1oyKMRVe4HRMnuh2gGJvGvMmc4wwBpweUF3BiWMf8Fp7",
  "key12": "26QZVXAFD7bsZTzt9f8z6U4FaiWqch4F5qTzkhgm17whKB5j7phWHhQU3di6Tv1a95nBZEwwRxJpdMBVCZM9wqtk",
  "key13": "4vnSfrhZTHw6MdPtKn4HF4RwAc5gKFy8H9Z1RfdG5gd4SMiMDcnTd828oVW5oQmKiXWrWcMW3uVT4HaxkDFJDfwV",
  "key14": "3dbnMuFSf931QiTukiNWyzTYggPxHV9s5tjTMnXHdUzJHd5gn1AtwaffGnW1PiWuiCmRkdFw6Mh6PD5RXJC9dMmt",
  "key15": "26rSdtdUxg9ca1LpeR5nACnDKJ458WPKGvKhveSWXSYavfCg4D15BcHByJaoGgjeJx3rPTq6wXFWYxacpAtuKXge",
  "key16": "3gB78qtkMtFUcCQympmpcTWcST2WsVQBhyttEKetYABqiN4jMDVGSecwK9AYZ8sVdYPyfpt53rek32QK2juKp7Xq",
  "key17": "2kNcELxwxrRubbQGJYNxyVUDDcAZT1ipMT3xbkCkYML6ptFozPLJRaR1GyhzVFBnCmzYPtRRsD7oKN1HUu5MUp2b",
  "key18": "5RkT3gH7YykVumNbcRn8qPNPmWupnqJS5JfrzrmE2xLFJ4TbD8bVwQTYpvD3s9mLQYw4uedfWSDrxufuNsCaBCCm",
  "key19": "63Td67ArW2PQ4VYb57oze7odsLb1DK5DnhFRwiq1aU3n78vq5d8NF8hhzuT1iSP1xoziGL7SGsv4DUwzdnZK9z1k",
  "key20": "34cRh1X6qj4WGtCAFaggnXieWTim4v1yYWvtMHm8afihxi5Bnk1q5S5AZPxPvXbWkMQgeoHbafNatFPgCBk8GBcU",
  "key21": "AHQyM4V2FR6zjC7WpKBcUnBbsc5fTSdYa6uH2cBq1Uvw8uoBAGqmkgdhoMakp4dKqQ4h7u76TiWtjeWcgcsbQsi",
  "key22": "3KNqBkpxkQkFzsfRukQ5s5VNWHBEnmHvmLXmZ1VSHANCDxff65yB9qnzNbgKR5jo9Xirp39x882v5hak3K5a2CYk",
  "key23": "3AJZGdTTuyZfN2bNn6HePvp1nUUAuj6HE4BthbG3QKrNevAhzzF5JMPKK4emCkvAB5RdmAphW3tNaz2hUHdJyR6u",
  "key24": "Y1dQP9mh2JH1C9rAtZcgnqW5hNj2LAQqNdCKW9YHsPrfU5vSKXLwWPeLecSMMTwesM99eBDAKf6eo41LD57WwdH",
  "key25": "Km2mykLoernikPfAt3iCvVFLZSuZ7L5Hse189Tb6eJ4CRVsvmdbvs8PFuNUuHqXzEsbTxbrqjrtHnHyihELU683",
  "key26": "xUyL8W2PhEFseMFeFyCjE2xCsqh1xQUsjhdEEgAEzZdjwWFLSrMZyVjoMF85cUWPFcgDRdYu85JsfmLwWKxxkTF",
  "key27": "47NDdr6i6TLG9227tC1GDU6NP3maMtDqVaWgDfeyQYy3jYmtU1cYL2278h4mRJXmdaZBwC3aKXZFoU95bqVSsLC9",
  "key28": "2fyfzMcCBkj8n5HykGFCBdgpXfX9GWoxksCtSkBy32AXeduhXMxPX9TRkgyZJzYetgMqrZGCv72uSu1BVsamBpsL",
  "key29": "2CJKnLZVSJXs8u32Npyg3prAcPA3L87xFYFMbtirytbJY8WtjR4YBFgWq2xMfpnW9mcQSLwhvr18Sh42yrxmW22N",
  "key30": "3vHPfquQtYL9BpDPqH5XCfMSM28A8qFdFvLMevYjPmXvbgPpsHc7nqFyah4HzuPQsXy8aRsbh9wLAboQuRPD4Z3z",
  "key31": "5rb9Njgg3ZdNxsorbgqQmZdBDLNGKp4g5HC6rXsguQ5khEkz4gYhFe272EPh4f5jTwumK2gE6wYQtQ27YzfXryqm",
  "key32": "2XhJYhHAXQTrxEU6WbBnxd1QdWaYBYBNFzvbNE57VKEZnCB7dR3BH4RR7kCkaUt8bAevuggqbWU9ALgrC5J1qgmg",
  "key33": "5kshoeooxZk6bU8uxUFUKUZEfXoSZLjeXEQbN6YsT83Zuat7K6GaEj19n4h5bAbeUA2XaP7KszTEX7DhyZiwokzZ",
  "key34": "5aUkcFstrm9gGCE4wfmnfmjNSQPrAdpnS7QHBLeGJtVNgHgE8FHEKDBHS4X6Ma5e5AASuhRr5VT8mRWyNPZRp5t7",
  "key35": "5Vi4YiePPX5jVNgWjhSRj8yhStZtU5KMNxWHpLTHbNhKk5Bteqn955YUTcGdaam3yguEYSSjY1MbdfciBeybNSQ8",
  "key36": "5AL3BMHeot8YYnD7WiPu7wHumEmFzADKeX37LEbm1ERFoAtb7vgWyCTHizprEXv5iow1LdmdaCQ8UGqX7sSM97Hw",
  "key37": "2U4CvTNTGh8sDZ6CS4fpeJqFVo3fEXodJBDmysgJzb1W9VvSEunsaJU7x1ADkPFLDcySTG3j4ws5TAueYfdnuWJ",
  "key38": "5ScNGjPHtax7b8b39NvtFZXSHWbt4vNSUW5L5DCH1QtpUuTh84hTTjxC59qVTjVNF26oL5qTJmg4eiMMj1m9Dzqs",
  "key39": "rG4Tg6XeyCAZWBYSuCK6bd8KqCYduaAdw1gpndzoKHmRjNuKw13E7pGNA9hyfrQDJ8o4995inJFs4QWkCWUch4u",
  "key40": "gBS5k2S3uDSxH2oV8szwkC8dSKhUSjFJMHGqF1DTh4KRE8c5a68ZCTNziZvhbNnZvKHDozTPgETXm8W57jvqFJR",
  "key41": "4wXNtxCgGbdxXkm2qZogDdp7z77WmcsvkMgQSEudhGWEkMRnzMYujYSpUpM4x3uiDosUjeKnxsB4btP9ML1XBnXz",
  "key42": "3s2roLVYUPbGUBp5x4HGaf5NmGS2oyK2Q7ijPMBEvd8irasryyBtbcjtnNJXoXpAMVkMHvN5VKxy5BKuLsT2nq2m",
  "key43": "gxFfA652NKJXRyp2CwUXku6aZhyfVqEY2QPaf8rjXjju5mqPfxFuZA5rYNvjJRt6em8gC6mE3DgbQX1wVFCjA9P",
  "key44": "61CRymwNYwgHtWe9TJeYjEfEYK9HL35tnDUZXe5gGurg9cbgYwEK94derPcEBQjBSKCz2MAVjRuhhTya6ZfGSnzK",
  "key45": "3VTgUvTkbobs68GnJ8SeDTAneeVZQ3N3vPbdYR13f5TeA46sch93WY2PLY7wcfWAZACM8UXfHLn8SWTzyaDgTQRg",
  "key46": "245LK97aqC2fq78ecnFAyfzTVHACJnv8qNXtPrQhS2HfJrjxy6P96ywyXyRXnxdM4imVvH8qxzVEbEMcrQ1ZK8B1",
  "key47": "2Gvp8GD6CYmWrK9LZ64aYDe245tZR1UtiDLBW6gghhAzfAyD5ojvrxh3g9khXCAn1PmnncW2jTZd9QTpbSFLuJ7u"
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
