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
    "fQTnfJrPCN8CiKZ17R1SEMDKwhHvb2nBG9r9Kc4QJ64wHAssH8ZSFDhZYh9mkivKyQwEf1nbDJFkD5wKP12Vxee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hY3KbKxXfzMeCEekVip9SBdJ9ptZHFtoac8tDT2mFEYnoqmJQz3CAhiXgUGHrvz3SSVDd8fJPmzXfuAigdaKLWa",
  "key1": "55mTbuLGv1gA6DVwiYMEjmUfHgZn3nHWFC6iEj6oET8yxUwBbqXAjLBMPKqHoRh58ttFziyweccpixSL3VrnCq9y",
  "key2": "2hsTNho1B8ZraL71pKQWxyteBJwn3aGLSgwH2LyVvuhfLdHjHmGyFp8vz8D4gqs9m38f3T2sQUohHYFihCo1PBYh",
  "key3": "3YZAJjkQK83xAGxYkdrkSBxhZeZekAzU7Ems5eiZ8Xmj6FHkPBuDDQv9gTnibf8v3sjwcWW7ybx6adSo6cPmUpYK",
  "key4": "4eSAT1MB2pRtumWYPebdrNxZMfwTh6PBZaFck7xRvYAj9mAz9yxLLm47vZdf34qkodwVoHVoXsqBUosS6NFXaYQk",
  "key5": "od5cotZ7V3ArZgdfZpyt7DPAKz3B6ay8epvDY7kAJRZRtUss1hpzcFSuGDKaH8XXgnH797fGGbLBuebZCJC89bG",
  "key6": "3GmTNB5nT3bcU5K2rLepELnWQGFntbUzSTtYV6gQ6aZtAhP9ex8tCDrrbHpTA3yTmkcABNpLDKJg6iH5C2tJVNuC",
  "key7": "3QbyRb4NRY7wWoNZ12XvQJ36U4Afjy5fqaqEkFPBymAVVpcHk94B7bpKbWxay2QBXiMirZhhpHg7bYzpuawq9qVk",
  "key8": "4ZNjxSrqq8TZu3v9SbKgk6MaUfKEdx4ogNsTjzawL3VjnbfJgMe1XPnkKc9QRh3z4ybxT9E7jJsW3kxMEf4ooNE1",
  "key9": "3TvLkTR1ny1p58iwqn1gvtFwrL2gL2vki3fdECWJE2J5YnEbnu5LC7sv4nLnEhczjVaTFRCyLW1jr5JVc5eLPmyk",
  "key10": "3B1intG2Usa1yCDfZQ2EsQ4gE18fV2DCBEKhr8JPAey3M1WFkdvJQTanRaYu4kjyuqVkmwCmCenv2WTNNpZFGa3h",
  "key11": "2Ubs8f5DGPPpyMMTtULUNFjvThHQGXyyd3VmDkGAb3HbGf5X7sNYMSVgt8pnnhVAgj1JT676QvnWNfHDYxkJTkUD",
  "key12": "32zExQsnnCHvEqH9auApWdhYyJYfprV4NpnkDERwqEeGQXyNoZVEWX3Lni4nwzRKh1RWGQeypdmruD2B7MpdkGhW",
  "key13": "3M13NyFjnJRmgSXKhnr52Qx28gFYgbMbrqhM3eckrotY8R1o1yTWSq2qCbjw3MqoRwdTuD98RtQtJ7xKo4X8Mq7U",
  "key14": "3nvy3xSWbxj3ud3y61yaMEXP6qFjoHMMHNiLHdTTJ72J1TrzMaRDzJf55rtLHYVHRHHdw6uVW8aZ3NEMuw2ceJpe",
  "key15": "61mZbaRAsm1mJ4PadADX5WdTyeTqgzT5K4DoHNcWf7gde46c7gRSfEGtokT6EePUo2miTKdQfQ4Z53qwq2dEaDMp",
  "key16": "3nfx5NKhX5F2Y4YWRzigXbptWcsUm6gzy152FgduYx9ZwrdwKmJyb3JV7JndNHJgD9Tr2hNFKHBqWyQf9Kb3YNzC",
  "key17": "TBimW1jwnu4yLuqhLqka4a23ZWo3EBpvS3jdpwnDixeE7PLr74Qc9Cr5nGwwCvXo1roQoBPaYiCAj2Dj3uwHB6d",
  "key18": "3zUisdVKRFzo1CHKaYN1s5rBwAct6hvhcM457X3uGgimqKP2cuaAynTHvaYoSJ7ohUF7LBtEPWePgBRuUaWwJYfi",
  "key19": "j1Jg372aJfwUHcBV6HZ9vmY6yWDbdiGz1oQ1hsKEhsKjYjKTjr6os6jX7BWSFQ6w7f82k3t3yvT35WTGkJoWuDu",
  "key20": "3i3ZyRmGpDvddetFo6FaXq8SmsvCgDuMMZrEinfYn2FZ9KHUVFUA9kvjFi71QZwun9kUhfKZB4Re4HqLdM4XAnTN",
  "key21": "2dygiprLPC8yXksnZ3oMS9xhogmEcFft72nSRoseqTBZ2364xGmPkyjSRkkRjRrxKCoBUhUKVUPoFxmGNdCtXmLh",
  "key22": "4WKgDWNbW1djWDd4EfphVZDAbx9skuvhQrVL4epmuHMPGcEuLRKRzserFJEiAVkhPih96mZRbU2EkQSWXK4wdc8L",
  "key23": "3zJvtrvxxpEW5TqbMsALRTnpZ8CZtohkEraYhDkaS2LeZxyBaRhwkvEB58SexKdnBr3Vr2Pfho4fvUoE3yzufWpb",
  "key24": "299Yyrw46FSYESxEJ76gNqv3BSZoGfY27gwmg7ahuaZiJ7GsbbkTXSrGdquURcMcuDC5jt8mCzwKEXFAnWukoAPS",
  "key25": "3hVRfCoMfZdnVpxZxGQxXBGbm41HHjtaHqoxe8D71Zs6326ywKVawGfZ4g39mJLYpuirfM2uc1EULXZZu2VvNMhG",
  "key26": "5cWiMuqSVxu58uFWAPom6MQsMWDZraZn1Xq55NbkCYM16RMFAfWsE1jnonnCjeBS1ygMxFYqSBQc85X1pZts2hhA",
  "key27": "3dPbLTwdNn8nDfqCNqHbDjuzuH32ZSLgf7obWe4jUATv6L9yVXvDuNaig3PVjrERzVvUCrJoof7YzwK3HsSpZNyA",
  "key28": "4wM6supAEMVWoaxhpoyR3XcMu1ZxtjPm8B93syvBiZH3eMhSSG5yxDPm6od7x7k4gDRjJqxkKjjrbTQb6fz7uC6J",
  "key29": "3Fo69pqDp3aBjWMKW7ejUZDTE4Fe3UMgv9jSfJKj4zPqhJEwYNRQcCKDtrzWfP2o8QY6zChAvLTJAS22E25zvBqG"
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
