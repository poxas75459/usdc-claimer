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
    "4Bb61VBKECCi4dPfzpVSNtVyGY9FoB5z8PF2UGsESgyM3DBaBvqn6NXhkV8taNQSu5mPFF2BWgTHXhgLJqme5rcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22QoRsUDATCPqPZRuh2SFSe9WRWkudeHcQbNuyCapZKW78DNhq4P1kjR6ZdHYoyF5wLrSXuYM7w6HqPE7j3GDKbG",
  "key1": "2HTVA3bFp7DP5g2QYdeh4awUBtkAJ98ycVoGGDzjDfPgYiAQUB22Am4egWT38bTzXRfnGTfxLgU39snL5MBF6caq",
  "key2": "3nF5UsuyrT7jA19oXpSMyksA1qqZp7NgqbAfWcD2jQbkQg1uTaGQWThf8QExfPiQY4k5Qn8rtUtpBqJSmYM5BXqp",
  "key3": "EuePAcJZv94m5pBqAXADDnEZmsyZ5MkJoX5Qsn2Emo5dHwHechniR3r1Gno6PFDutCUZM31w24UcMofbkv8tFYn",
  "key4": "4ZXfT9LWzLULfbNXUynxiZgnDwKtTpJu6XHHS5yn2iyCAsyQx1ETQFDsyx8kaD8nn8QM5NwWDDnxq2eQRSAFYMo1",
  "key5": "3LZJNrRAkpKZV3h6KiHeGKCYZ2cvAcpS2Dqq2G4ccV7VgkfoT3MNNG46HMEs3ix6boJcbhVzY4qn7FoNwKa5oupn",
  "key6": "4NgNScAtZByyyayrLUTprj281zs2mfv5cuPUuEvYXtdQ9Pdt2V9TdEZbk2WyosQ4K2Dqk6ycexXBnVnsTrhZ6sb6",
  "key7": "4y2426H67yEdpQx3XyydAm8ApEZC9SEp22zSfUCDDGi5zXp3EVSdxnZpxf5BieSZ3LmNP9W3TY1Mjn3c4MmygTj3",
  "key8": "2jjX8xYRpqZVpEsTUvYmtp8KjCGfctzNqk4efEi9BGsotRscvmyhzBUUvZB1EVEjJbPmfm6WY7hSzF9GaaHiaK4A",
  "key9": "3jvKpHSKqpqbpuYhfq9J1RWgBD47qAYZKF5NcY1Gf5Wvy1iPdzDBL8fgMVqoRvRRLtnN6a78GMrMa5boSrTZmCiP",
  "key10": "244JiVjMLiNZSQeWRJZKc7RPGNPxycZLYjWXfWzWGaqr3BMi84hBBC3S7EqKvfRx3gQKw8uDuWrixTQK48yLo7Ry",
  "key11": "48M8dG2GYYcTESiRFw3Mbe6q6JHyEsdCyRA4x68NMJ8r6gypYsnRRJBXZqxooyKnvg7A5KtjJPinVaSxhkkw98Q8",
  "key12": "25AKBvWyTXHezsSESBvPaHqeFS73WorPLhJSZUrK9wwR388WgTAtww8hvKgsZDRmPB6aim3ahcHEg1d3WBsCRAfo",
  "key13": "279gk3dND529ULxCWQNyMQCgaXuTLX3TEN5uQJL1qo383X9Snj32HfbSzx7hoxLz21q6jQuqxiH7Tetkq3LotTYf",
  "key14": "4dRBK3tPjQ4na5BrR4XMq9kFB79fHci8oCDjCge4L1XWPSvPUmXPbxSwS3G5WYcqBf6FgpZJnWa4tNPEZkzdkL42",
  "key15": "3t98VzkfuLRABxMH6hryfgBWGWS63NqPnGoMmAQi1gZa1Y4EGWqwxDMPZU3oVU7RPuyPoCEQc9qijGcunmLaVhp9",
  "key16": "2CXTNYejnXjgev3iLp3DMdLxon4bLu9CWhx2HBLNGkXKU4sztPTaF3sq5XYxN3dgWMrLogQZYCZUq1Ytqx9sny3Z",
  "key17": "4Lkt7EL2nGxunj1GHpbJsn3wx5u7GapW5okiKpxuaFpyVhhWXN2XJwKGuWR5vvfnoMJhUs1KztKmmZNzrBEkTDsd",
  "key18": "4BSPx9XxkqZQC8rtzXBEtxEqLxoF3MFmbyS6babfm6ax1HeKhsxy6rRzrwrGJQ6xnTuiJPujGSnzrjszRajcLGJE",
  "key19": "58dCb44ishmcc3CdDxQ6o8qeTqf1BBoqchCAQm3vrFPdgsHw6drUFN4duB115fdtojCpv6QR9xH1KvMtySD9iiLE",
  "key20": "5VEvPnB3VwpeMrMH2UJgNQNHq1nFnWBzFSFhWyh47nwbf9PdpEaMrpzyM7FDQTki8XwWAcXErKLn1HgyLWsK8CSn",
  "key21": "2WrQpmz2Nzq4v6WU9zQrfSwScVYJMg5pBuXbC8K8sgRgVJQs4E28gYQGfAaEcusi8BPnEDjvGjbjuFLN8cJMbZDQ",
  "key22": "41WTg6i66Z28HoxP6bcbsK64P9s3ME35FEhABf2dNeAfvhBUNLiYfBiQPbA7tVuaPqDnSgAE7hQTpanSTtTg9rtN",
  "key23": "2esFGWhx89MXyq5FE3iZVaZm35rLR6hjDxcaiWnBmYpV2QStT8MDB6fJM3L481PgjiTaEP1TtSjNKdgkKu8Wkt3f",
  "key24": "38TAPZBvNDvifhhTvUQhBiJAGnm8AbJFcNdAtex3ErrvjaPQUhNZoUNujZTLusp4cWgfKzRX6u9eQbqLcqHsy8mi",
  "key25": "5TdVSnskM8DHF9y8mLczu7jDkKtgypF4FZjrTGGSEXgn5VV8QqGSFmS2fmCY729xCLoRwwp3F2vGghMJcHzVPi3",
  "key26": "4tuXyxFRUw4LpRX214XY2oMfwqUiEtrPz5JLgMbwRDemFs9zPHUFkQ5wdd5ieTXc3qxnWspWb7mHmWaiVWSj5YJn",
  "key27": "2ZzCTDLyRngZMU3AuQwi4nNfrzZYYLznKiyWdpU9YQMajrbUBArxdGBaNs7MzF1Qyo3k1tE56TGXBc1Y3PBAQ4oq",
  "key28": "3iv5jhyhGPxgvAkBNhGerJNjmUJyn2yRCSYmGgjcjCR5KmkuksCZEYWCNQTdJFKPu4PR8dNwCYRZWW4RAwuAc7cR",
  "key29": "b9nGaf2nWeHdyvXQoXRk9X9zQx9AYHCYtJfPjwVex2ZG782cz4q5puavxcmcE2rFTRbiEw7Kgm9eJnhHcoMqU2L",
  "key30": "Y6RnVUJaP1j1disyVxuUzvGUUFvGCyzHtMz8bRndTNPugHY4KuN1g8XVWx3PAt6HKpQo8378Z7zF674JxxJVYCz",
  "key31": "422KUHAMDeJsdK1oqSX8ZsVGGNX9bJ8R1MyyJGavuR1moEhiqH3D1jkEjrp1HzhcNGA5ZSfiWYfGZ9fH3FdZ5FmX",
  "key32": "5HV3mRi7WJYCMeukavtKqjB5PJV5iwK2UpFJnotwdbeXdjL5AF58QkBMQAMEkgTDxW3LuEoVaSfub1W1sNTQCgoB",
  "key33": "2dnTBMZcpU94TNHb9pzeVDoGQNVVdhzxGZMQQgDeBqhiX2hUCE7iB6LKDmZ8nfMkTUV8seUmsJtwg6yozvrTCs3a"
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
