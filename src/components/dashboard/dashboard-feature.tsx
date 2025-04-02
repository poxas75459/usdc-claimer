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
    "KrPM9XE3UxxCPRFD9mWngCUhxWvbfU2LAmF2S94ogdp1pNc84emd1DwEPVqm9y5EcjuRRivMomWHyGyFGKVqTAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VWuuxLntDr3rLYT86DuFx9vzF8DdZjBRnZmyxi2SVfjF3Yf95pbXTVDC8bdSqFKu3rqVNSRFWyCo5nnwGGuTwfA",
  "key1": "2Qt5DerfBSr92PwTJTzc1vuPB4NrSxF5eNHY47MJWAxt1vSYrKtg4fT5shvZDyDKUqpteMcUPVXSqbJ9kUDkoW1W",
  "key2": "5A73DWKojkxHxbhLfZ2k3dE2rjdCnhbfgeTMhutPJm4HgzM1iZccH53e7AgMZdMaymrCBdhaZMuHUQprrzzEds3S",
  "key3": "4pWUuTYepV1TBRmF8rMrgLPeNfoyVQ5x8NKxo8gjrFhGiwYw8DbsExL2neeRyP42ZkiNi7yxA4zNhJwtUTJTRyJg",
  "key4": "3DVryjDVJHaTygN8g3SccmBrioP3QQB8bTu6WsUbmzXdQPy2zPD8HHJ2o98sjfbavT61QXHvCHMmnbVd7sHKNoWk",
  "key5": "58H9NLQxiCC5biy3s414feto48vVbPd5btu1T6CqmyH9uPzUNEADL1hvyWuShPLvYYzygvKNC5kXtWFjRaAtVGDA",
  "key6": "25a8U7VLRQnuDfPXJKwQGdr4ht8BhgtvuYHB4D4zbZyBBwMFGfegd2g2KAMLPMDG9ApXBTdcdUYj5NXkSwE6BNoH",
  "key7": "4X3wz1RdceZ6nzuYfYFsLfhrTcxJq9hh1ciaM3ET2RgAwyk73twk5RTUPtHeCHW9eZfXPMMeBtGgqCzqZNdEWEqH",
  "key8": "2NmdZ5F7ct87X9gfbzAwRrgpYBUfrmAEkuVNicSWrELeerio6LMyT2cYewthLWqDp9TcyAd9saqQxuTCh5mPQGYX",
  "key9": "4TSXuSZASuNJBp68KqJWSEjhjg9ZZuAVpVwJcsEBGfPkdjjZpdkbWxw3RFLxLi2jdhHGorBffzSyyZjYFopqFvXx",
  "key10": "2tBKATm4ebsCBuB85NNCQbc4CSjLswyqEVHF7FkCKPPxjxh2GEV4N8RX2kJWQBWmqaTefBEAgsxgK3CRRHEtiwea",
  "key11": "L8ATNCKanSF7Sws3NZ1ujd5fDvZ74jyD7J1gzmCNjbAMrPo1sVo5AKjbU9pKVVxiFGi4dF1QCfvmqL2me1PAaVA",
  "key12": "2CBu5bpmbqiu6ATVWgDLNfPr5sJbGefHR1hztJQRC6B8ERjxUmaPe67eDp2J9xs5MTevtx79yREmHvaogHyy6ABw",
  "key13": "351P5pab7gnhTG7bMpopnb5FakqHqvLrikk1b1QWf4wATryKPqXkGCn3H2KyJFoCrvbNXonk2owFSTtuvyKTxBd2",
  "key14": "kXewR8r8xMuEXbkCeg5A6KTFVpuGUYjt6YHYxeAe7hzDjqoDfBDJZ8dNPZwD5i4doh8G9ibjbaAjrwjo7SzRPLJ",
  "key15": "3yVivVrVV5fhtMon8AGMzusqJLANEgGWFj7bsvMboMaoxNZsVGSMQjd9m7pPLLwaNoGBbjMVUPHTBn5psfUKkNR3",
  "key16": "2u5hn2DCixD21LnfE83gPWNLcuF1KdQ8JaN3QBLVwySJfkSrDm9P35ihrfVEeTtWEQzQH94ZzbVDjxK76ExxNbTP",
  "key17": "4Z6jADG9zgbjwrhtgDYDtxUAWhZt2fzbpL6xXuZd71y78gPXG87xFq35EkrSBZdAzpFR6TwAxMAZUYjPz5gKF1AE",
  "key18": "kvF8LJRJMqktCKcey2nnhp1g3tv4eeotTLeK9JnaNmtqNqtmgcdLjzuq2UNZ9nVJttCN69uPk6s37GWyzGn1DXc",
  "key19": "2tiDWFPaQJGaqMPF2TLohZ7txMPH7U9pZBQBGConpRwfhqZwDvrKk5XBndVCFtH54FUbR3FhdhsbFSHwyiqi9Qwx",
  "key20": "4uQu2JWN3B2HV7fFS7TLWTFkYSkKQdne2h7RzTuW8mfqoN78BJUHhFdWNqWMkxM6WcTPK2Hw9KNp7uxNGkk4W4qk",
  "key21": "4huBeqTtSBtdHPUQpEfcGAdDhLBLZGCkySvELDmqBoeD3C3F7p4oD2msPUqF3hCUpq2vHNLbZaHejP9pAFTf3g6B",
  "key22": "52BdfecMvRYkdDnVU4GESccjMF3fwoYSrBffH7HDcq2v5SS4q5Q2dU6ndcw6x1W3oWMKhC13jBDXeYpDm9k5oB3e",
  "key23": "51kzMqyNK7RusNP9dzHTvsEqohrthQdbZ74CBFcYK3pTERf1cisz3L8Nqb81eGUWJQqcdPtARp3oq1pn9HUt3Yp2",
  "key24": "3n1WeuPEnW3aaFnagCJUGZFpHiRbHpF9vDQ2SnYjf3GtHP2URR8oeJhJgg8LhuYcMoe7ijkNEQhwhaooqboofu3N",
  "key25": "3JYP3xsum2mft3ZdUacseo217jS3oFE7LbQqdcVkxMPgqwyeVyAp1rXL6HUeLwJHT3iKMyKDvX7WfuCQZtiCCmgB",
  "key26": "3jHuNq6HTU9sZLJ12n2eFcLUV7Gc24jgebBcxo5LAD7sbLvhGyBiw9bXP8HWC6v1x4qqfcdCkoz4aJLuHE2ozFRg",
  "key27": "2UCtJ1Se5B2mpAdA6HRuLKWyQX1daEEdGEe3ZBAsMCU9t1R6mL4yR3HbNntZZoEZi82naPnGCKQPVLtnKPHXkgPh",
  "key28": "MGCCDizpKi4bVQUEiXjYs6zajYMf5DfmGoMWw4L1eKvvgxdrDfuPYxgLoE1q2DRMmgZ2tNAPG2HSm3gJqZugr5Q",
  "key29": "32h16w9dEU2q1bRhNScYHDw1AQTTuujxNEvfwxGnuRWqXKQ7sw4Uka8Bshj4vpL9LSty2QWWsd6kpKFz8NzKHxzT",
  "key30": "4X6cA2A4UMuWnagYibeyEmxM9s1cw5ZPHM5RZttZrz3My1WsAmuXrjUSHEmm49kWZeM24No22Jm3ByRfe6WSQA4N",
  "key31": "3UShFQpyNuefMGqibKEraSrm81dZhs37RrG826rxBkL7sBm7cSUkEfYujEXD26HrgkbMn6iEt1negi1Tw2yAkFzX",
  "key32": "3LR9aS7p9JFfXNRq658gxVtd91NG2n2vVViyrxmFfoQ72gmRUS8ueXwnU5deG5AzXhf4M3ffkn9KNP3SRbmVbLDv",
  "key33": "36FaYb1Ub1ztSU7Zc574K8AuW2X5KgXGxM4XRY2wzaHs4tNQZpAadzLeTdahaS7nKXEVUQncjM6as2nFptjndhU5",
  "key34": "4XdJfUS1aJS7hNJdCu6w8pySgn5f9Y6vicpxVynEjyaaMnaKoZH2LoNHiJRLrt5gaQqueuWo389ij5ZWMCm2Ks3c",
  "key35": "3awHzdKpWCQSecTcQVXr9cevMXLELivHUmkbqxktJjorHBUazwQMBXkcEoaqDLwaAcfN8RLFbbQBy3idAbvC4P98",
  "key36": "4EiJweKibFAE3wNuYraBkyqMjvuj7QgZfFWj6mGPgdfT2626jJannq6Rr9iXqjacnEr2QW4sjmZa1FdkhZVWCV6p",
  "key37": "5XTFvtPn4bSQhhJqNRsSBG8cRnxmQMCVQHhpD9B6x1xKSbaq7bugKvCAxC3tTpbY6L25JUAqinH7AtGF9cs2xfyE"
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
