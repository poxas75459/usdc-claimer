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
    "2mTPmb2gsEdKB6BhgmFFyX5kebj3Hhf7bukaQSxFxrFwfAHcGFn8FuNiDfK9bcTVutrroKxvcaK6RfG8uXFi9QYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJpyJ1fWhBcCvJJzrq2d31sKZ4SX56KHUppKUHLxvLZdT1o7WY5JBKmwHFXyXbWD1BEt1Q1puVE2mNfmMicaRpU",
  "key1": "3mgfiB3LPideyTd3F9z3vPXQVcST5e83QYCpHDBZvb5ff3UUUWPX25SaMXTtCeiDJqMSZMVEFxp2MHP7v2dDrqZz",
  "key2": "4ipxo7K9kYALE18QxxrYNEq32nFXyZw1RfMVDErB4L5fiH9hfis1PF2zGjJPszKjus5h9GajoD6umQU44UqXbJKe",
  "key3": "4njdBKwViHESd4RmrTYx1a6U6bmWKj4q4oWb5rD3r4NRXoEJB5eEeBaRvP3qyMTiuK4iwpVSzf5emhMT2GAoH2fm",
  "key4": "31raMFM8aBTe22ZZEYicfv5MPo6r4gc6EtTniqLxgCXapy5y6UWsqmRgPADVUj7kJTxw7npyeapn6vuziQb6Be6m",
  "key5": "3N8yV6MhDtZXtH1j1MwkGzQ2wEQ4g2EPzikkD81taMgbGuYUioSW9dbNAez2iB82PAkpMT7piZnCYhQxW77EMprY",
  "key6": "5y3PqFkXPkBiUBXHvWSxfuZvyssWCexcJQHDJHY14ekJQSzSMfMmPPHyQfEnH7cLsZU5dk6FQmNNQ8bkCLwKG6d8",
  "key7": "T5mwFuD6ttxm1GUT4JNTtpvNYTKnaYnCPruRyEJasYxLqRRkFjEBcRX13VgK7QkuNPFBqGEuaJDdcVXDMEo1ufd",
  "key8": "4EWUiNu7sMQsTNgn6K3u95Bu68kZkK5SiFgMUNNR1BFogxAAjqpMum2VqWsjZYrNwzB56yw44CUjvYDAqXryK5gn",
  "key9": "5Atp2fG3GWaXkwWQcuEyrce86Jf6SsGbz3YfWXz49WhSfX7dgg5hi8kFAVMkm3iez1PUK8VoTEjm9Pxeu6HAAHnk",
  "key10": "2Kza8SJJ9uKgkDyL3CHL2bmQbYQ7y8AxM815ZjktvL2CbSfWMayFycEnvUhQLwMw7ZiHaU7juFtyCxAzeGrELHoH",
  "key11": "54VpG4tw72gTNJAuofHL6sEUqxAMbSakRtCFt3mDRYvdroRqqVY172oMNmPejrYn8PH3WUrY7P6i6fwfWZcrvcEU",
  "key12": "4Bd7w3XwUdp8YugeRiRky2DXW8eKXnGqj23nSD1NF8HLejgHuLAgDHdTUKn9Hv9t8sUYBuAMtATiW9WhVU5d997m",
  "key13": "2b2Qk7TTf2fhFHFiEAKctTjPEEuuzYvdQC6k52Y2P5xSrRjirdm8imeSCsn7HwEJC2Jmxjpuv5cFjiRYyF49jv1e",
  "key14": "3BnhsHQTTqwxSnd5H9ddne449yqiPUXFGdkUnJxnvzwkNAYCPLbYHVY3dqpY4ddBnjMfkAp1rgjjr6PpNu3EPGbg",
  "key15": "3oeRJN6YBHcPH4y4dwPD8nuwfpmEDVa4FBXsT8xmpVnpm6NieewhZXzctUAt5UCpCyNBcznPJ2YMrc6cdrZ5sDvM",
  "key16": "2GRwkYargJednnvGv4JhK4DwbU9ks5Qe27UrtktHgX1GmxzqiQQFjFqgQbLg3P3Kqt7N1XPzugZyrF1RWNZiGDSz",
  "key17": "4Gr1nkTc1ZQg61GGpYCPRLJMXtQ9thSiUYbVfWspEz2S3ZMc2AtWjoGszXRAk3UwhH2RPBpWy1EGUFs18KDMyn6V",
  "key18": "4t22zJFYxCb1PbAnnfJhUSE6xxwu1kDzgrMVwerfdCdAW8vqnPgBPmQBFuwFRYMMGaXgL1uxuNzuLAYPSLmND54K",
  "key19": "5oEKYepma25aoJvsuQMTabVFW9GigjFY1GBB1jTttrBuxpCCAwKEUReAYyDcwn6EFCtcNshDFgURtBXb6KseH7Hq",
  "key20": "3HUjTEZTyVHkKVvfUf1T4XhC7LMTRQGTxTVyxHkNDLVo6A76QN53G9Y2iBUuss8ze6EzXTUYeyJjfcX4CQ2jxezY",
  "key21": "39cBNvr13ZUmMu8EJyEjNkpiUMDJpmoew1tymZVFfEXSdUWxqrwc5vAqjDpXBPXZZfHFfybZerU6HLJTgJJuz8HB",
  "key22": "5jG4zmdDQzKSKHVwiqHhhnWVQpwiaF18mzGdFJHDojBufSchEXmFQ9mEAEhUPYkc39p5vDcLqzxCc7AekxKjBFzU",
  "key23": "53jny92VhJcoTHUeyTSHxr5v7UyyuTsp9tPArcfm6E5tCDSwX2AfwExTiKFs3CNqFqNmHxzPcq2Fsizir8xcY5he",
  "key24": "5iXcPYzQ8KJY6dSD2qWLc8xRAjos3SjTxCfaGvqEbr3iEsCrStWJiM8s4utZUyXr4MCcUKZvfQc36LYuQX6yjHuY",
  "key25": "2HpnVPsih4CYEd5HEMrk5kj2Et1SnVbDBD5NGZS9N981a5NHV6KRqNMEGiWTJ4iJDfQZqKP1YpXsj7FDT95kE8zV",
  "key26": "2Ja3CaZX754XqGsSG7bWCHniDPFktKge3iAT4txoyDQVDysB7TqpxtBsbW5frJmq5BcYtcNwAnCDjbjGjgZJwofW",
  "key27": "2sKNBWo2UBLvGxpTaMqGKkZP6XPoBY9jKB59ogf38PhMEBMyGXMyZxG4tdt8Py7vUyCuwMUq8MZd99aLs4xGKPaD",
  "key28": "5iSZNzUdrffcujM1gDfVNta53M2hrxp8N5WQu2YipNb6k7zDZGVrehtepjTHtZmU2D5gRYrFkzms4GPaNqu5U3Rz",
  "key29": "ouwr7euAtkyZ3rvPTQZMZ35dJ8Yr3hkMNFSQxbqzFWzZXUrAjb3ZrjpRv5sfoP4eQs7iq52Q7p4DjBGvxMkmbJV",
  "key30": "3G4K2HHb5UcHhDxawDVY6UV9FaHnTtHVkSBYxEad8kz2xFqrVySCkK46cfuxY4e2fFEkdJtGq5RY2iMZnFXMVm1Z",
  "key31": "49cZewXJCTaVKxn2zbCWx7NrLm37Ts1GGXPDrqPVAaeEHMZiHjX3gQ7HK2XFY3o6YUUL1PAKXcTcPEvw5pxVJ5iE",
  "key32": "4xm4mb4qGhV3VQSBh85fihxwJKMpfBsRRgZ3S7JkHXoa8bvs2w9XkV8vqvGNthrE9BTQTN5xrP8VaNRoTKyvFew8",
  "key33": "4atBw1Yfqzf7CxzLjYsGzd5HEdGVfQU2eqfUyzXoi4gvK68iNwvrPkKkKK3z4ySB1rVx5U2NVK6fPTGCNax3Gjja",
  "key34": "5RPgqfcV3szwDcVEaeNqiKrqi2zeDek8YWj88BxX9uqpEnmy4DUZU56v7vqXaENQ57LMZcEbuYBCvZT56DixsSiC",
  "key35": "2soopVSf1Vs7JLo2MdzXwuqDSvQYWFFsYq8jvK2XoeV7jUahkmuwaTfZh466ABZXWrfJDcHENY7G9dY7RRXmjKjY",
  "key36": "616NTy8Dc2ZFA2FY6KRXXCEnkwGesDp5k68n5aeR1jhQieWfAd1nPUbiBFnZriqkCzZPN1zu5qwFtfXVSXFHgAhi",
  "key37": "KgFQuboQ1dRWmV4NbZp4gWYUw8NmhxHKA5dPfeA6uTLcq3MeCFz6LSKXTTpvCwLqDsYJAh4TcJjHCambUBshUF3",
  "key38": "5rajoabNz9yBHxe7qe6HCqt1PPD59vsrtEGCST552n8rsZ3TKdDrW2RPk9ptd897hkmb2hCCzkGYbn53RmywnVD5",
  "key39": "55hwe8dbwJqVXUM1jDMCQQWrCEXpzc69Ad2fRD4NyURDXNSNURzWxiQyDQipJvZdM9ptfh7Rwm9TA6KGJCdMjAgV",
  "key40": "4atM4PhnYi6R8AhD56ndiMvCVEryDfrYLZqZtX1WZcHNQkTC1E7Xdb5viswmxAWfYTa5KrM13x7JnEHfMzFBeMLi"
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
