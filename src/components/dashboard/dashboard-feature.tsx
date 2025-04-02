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
    "51SBwUDEWuvaVZxNzNYN94GytCDV46NEUcg5TR9fvsp4Bb8yYz2YjnA3haBSbdZorctgeRJnmfDttDcNZhirbnYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qY3ofA62hMzMFH2rsJm3m16F8b2N28D4YH9JzE62M8KYASfheU97RwjgXHNnskC51pF8WjcZh1JA3xm7V5W9sjd",
  "key1": "4ipTz3n8ULpu9hkNZ86TK287c3uXUdweSFdCtzPZHNjBqUijsVjBRJZ6fdkdsnoaeaPC9r2Aufep65frBxTgnhWX",
  "key2": "tV7AXFvfvKEtXgBc6qzwM7zR9wJeg2agGj3GFG461rLjyBEUtsKJQtkCu9Yt5Bg9dMVg3Vksr9yY7guarUc5Mzf",
  "key3": "2AqFKKbDiHAV4AdygR8JESwxMX4die5AuXfi2KE212xoScRJct8iRVcvTESjsPY5Yr8bhByinW7jFsdM4g9LRCK6",
  "key4": "3bbqEaE64QiXTbqcrqpR21o8bspZA9UQeaNQrUPBTpECdLBQSmC6S9NC39u9ecVYrf6yegB1C9X7RiVsMZAZ99Qe",
  "key5": "59iYXbViBy9Y99wtaJmFzTyVqsifVTXhB5GCZTJdCT2XNSzDiNJa3SHbAVDh9qTmQ22ToeVcJX8uCnMRGCivwtxP",
  "key6": "ZneDjomVqvChGkxUSf4jd2dasWPorqGEMmJh4Uk8idSVsLav1ZTgwNNFbSr39GZcX4j2hPPxn5jVefgpJhqytbQ",
  "key7": "4hptgQ96wuZBshwk9dQNTYX59XKVBGgqrELC2MCDJSF4ReT96od7uRVKZzYvD1DJT4cZtqYfmcZVepUp8VAsHreZ",
  "key8": "4d4z8eyQwUo9pMqw5ZhzEJV497DRwz52RdCeKFcQwq4xug9DCyzEg6a1ReTZit2YLkpDs8WUUsjKaJsQm2Rbq92X",
  "key9": "3USCzT6RdZeGw2vyLHg6Vd4ZxvMS9AJdtt8cXWiXWHLK81p57RUEeDGRQWV3SdCGB1sYuurqk1XdHzs5XQNKzuVg",
  "key10": "5bQg1SQtLTHpRZomkzz8vc9xFiZ72iX7h6FgHS6zL2u9aU5MTGPQQdtLVsRAHbyUqtrLNgirLvBipMWgJst3gAs5",
  "key11": "D1txqUJc6mgiM1Uvz11hpzbJLnNnKZsxPspbpxP5v5JRssu5BW3Wtq5swnZWj9kTnYKsTWw9icUU7hY4XxSiTNb",
  "key12": "4m7o1LD2WyCyCgbpK1wizTfAEPCTJTEQAHnWFZnz86eDgmpetarSANtqFYxnCaTFGDpP4VDP2D1FsKAxkS4BR8Rk",
  "key13": "XXDM3dQVJdgKzrxs2WFuAm4fPn12boTC8FE9j6fWdgeQppRfRaxAyryA41kY9D21hRTwauH3iT3LekjSozCHmr8",
  "key14": "2Bd2rzR26hn6fyhUYKbHMNzDrZsxMk4jPnh3aZBYppZ16Xe8QgiVdqtmTF7mKCQUgNKLyBMjbPXXARkz6ebyZM11",
  "key15": "5kvWqMQmjTVgrqhAD8xGMUD68MCSa3bVjqcum4MZ36d4jBHaz3mtHqxD9Sjwxcsq942q4b5WuRfKwjsouPzVnc43",
  "key16": "4B4fszVLU5uKbmg15BdTFnk7gNuYLBrrLdxGyUdYpisrMhGHqzhhsxcsLf31USjdHzVRE4d9X6Eh8dhZs7GUh8Hr",
  "key17": "5pKbSWfVgRxixCPo5WjYQhAXCcDGaFbX6SB2bjNDbiN2iGBcu8hERMD3NJeGVcGHTtXmASEWScHF8mWwcrLicSS7",
  "key18": "26kz4u37zC2UKuYVQdL8NQLMciyn3LaWTdJdRjJjTJmDCtmuzESJeyGcoCMH4N9Xr6KB1txkQMiuMBWH8bS2WaCN",
  "key19": "3FaQgeQaLzBcwDwQNfPnQRj2dP3529owTWD3MBayFirUrxNeZx638jKNv5MqZAoXRdZEvyNxxx7VLG7N2SApHBgs",
  "key20": "hAXPRe2SuU13im4zpLKVJPYSUX3duKe8i4ktGTcKYFZRbwt6T5kppRdyGkRbEv2oTPH9hLZDgFLyWiPRpcbBwRD",
  "key21": "52M2wT841N4vEVV1p7uTLk7U264DBAZGtSGFE3ibFtzLr2YyajwqXV2fz8eXmJRebku3bx5ZMF8y85m7QgSqbmwg",
  "key22": "567jwWan4Z5vnPMUgJpRn65TcJb9WPySXAc7MtWeZKS5gGStfoX9tNt7A77e9ZSGMiDZMqTZXejboPRgFvwgmEnb",
  "key23": "5UKm81UYN8fiy3aaRWoY276q9aHq6HwhRpR7Y12phni1P4VMsRtCfD8ektaUyNFnECxgvwLqBKDMEaRmGchk1Q5m",
  "key24": "8eqBNovwqNZUZubHgJJdhbQtaF6pdCz8GTwJ3Qfarj3vWBjHVEEekUCJGRdroELaGBBUfRU5qxirCkM1X7GRaYF",
  "key25": "4qzXV4e2djynbRiGYZjZiZL2TCS6WipB1bRNZUk6nHSNgsLfZFR2QLkrwauoh1tmgqpqjmuehPdV2fTFx9q5j9co",
  "key26": "3Jk65t3SboZDZnxvuQsZ4Rujfv18u7Q3HHJ8V926e3eEgsZ6whCvccg4cZSyizUqWxs4DrDTsj3cqU3nRR3hiFpG",
  "key27": "fmmEg1nohsf9stv6SLRscGzFxz5kgDTjrUVVKqz7E4TNAVEn78sbQtHdqJGhkesvnWf2mxeCXfCUvraG98XHnp5",
  "key28": "3VrAuCJP74jdKvLA9tuStm19BKsdPcZtXSACKcS9VKkvvK7D5i8X1SYaTR7B3kgVUbzYbnavzsXTnrv7VYm3kCT7",
  "key29": "2P5pnmReHA5UQVsQ3ALHbR4y9V6DJMxWzFN8W9gT5jeFVeq9PuV4ASK1ak2a7RfsebjcXkTTJmiNFSWkCLVnsZT4",
  "key30": "3fiTFtkEVqsgQpa1san5jNkgeY6REG5swao6SY1JHhqVUd9hrAxPYCbZJfNNZ9BRfXuEVM6qJR2nnhb6caop1kQE"
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
