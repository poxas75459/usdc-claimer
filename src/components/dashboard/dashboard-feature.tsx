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
    "4VeoVwf2ZDbpj7SZqU6ByAHm1vyTYMdmVMjDuTCb8adtZeaJdwpoQmdw3ek6tGi2XzBVbjdVNahY66tN7B8qVZUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b4eQJ79YqWTJMF39uo7MqC3PzgEBDFzt6UPJoF9kpG1JHVu9myQzL37o8S4Ugffso5UjdWkAmwPXns2S9JbbyYp",
  "key1": "2JZnuTx5kUKUopbrmVqp7RauHfaCZv4wpY3H86LqXDfW89L6D1z2q88ydQ917WMtpD6F3DFTJB3XuqVfuQpyHVdd",
  "key2": "5rA5U8Pw3owueBTTvcLpcgNYaNc5Thog6ZDK3XrdBAqvusXp3Skkn1Pfjx4LNR9bPKEGVffRpGY2wFErZYanS3pf",
  "key3": "4yrZymoHqV6gwfAyjFdMu1doLfGUPcC3rdfTbdyZJe5AYR2oRDEyyb2n85Jb9tRJY5vwxJErCweTSh6AzzaSLNwy",
  "key4": "3zbMcukFzYqTHX4VuxEJRBko1pbXLRegcVUyScqhnJNGqUakcHLoWoLkkheNrQXP9Wutf2VQ3EePgm9t3xmKrou1",
  "key5": "3gM2QfmqbYXQGF5HFV7n2nqyoAFbB6WiqrDqgNnP7S4kQf2pXuUqU9TU73ssgwTGnPvw5gR1CyKMAZEaJtJ5Aemy",
  "key6": "5MfuLBCujibNaGPnS2jhX53tBnhdYRr7QRmeCXvJqAwesxynZBatHxhqQZQTH9dE2dUm9F919JvsPDcKxY9fgykL",
  "key7": "vGJUFsayNvusSxynw7UE3KMgEKGDacuAfsMB1uQGaesvasGYL16MaK9sHCZpG5UfPDqbzS35YRRkx3RCKuVoMHB",
  "key8": "48oxcJ86bo1wmSoGCZAPSTX2qTSvgSkVLn9yZE6Y21wzkYxFMXJRocamnR9HeRBgoiQZz4QdRuFb2v2GqEWj9kSd",
  "key9": "5FhxkCMWFyFifu3WJ32CS8YWqYMFQvEYr9Ve7PtZgUucJJWgaRTc5sLb8GMfgwj7MY8u7jB6UWgjHsoyejVmJrDs",
  "key10": "Lb9pBUXwdN8JQQsiFh16MLGC9AW48yVEeZz73cuDoeVkqjnR4karEWsiu5qHNthKo2x4v6HaswnTuFt6fksq6sQ",
  "key11": "5rvXWkeP2cnPDkmhbAB2fzxq2E8LSgDeQBahR2XDEo4hvN6zgCyXNQsuMCdSvZBiu4wKmWRWZCEn4FeLxEjZkNCX",
  "key12": "2AeJwkzhHEERzTmJsZ1GyY1umP1WYMSXk643Zxoa5Pv7iGqTeQAna3yVm5Ac6nbWu9wz1n9uEcgPgCEyMtdAqSoh",
  "key13": "cYSENrwi9yXZs8oK1BTvW6ANbp1bNrZ7o78SxPUrW6z6xgqznKfGJ2vuPZ9STZZRsopkA28Cp8fWdVVwkkURpnZ",
  "key14": "33432cx2fuawQPLNDr9XjMCGemDd5jx5afcDe2Hztk4igg8jQe4UJtmHMqnHm5NsKC8AeycNdGtBHr8ZCsVM5Ua1",
  "key15": "7C5CqcXnVX1AG3CkE3uZKYLA8RbbWHt88ca9xMBgEGQgJJUGFJuhMm5vxp4f5cBb1rvRvU29ZrKeduQ9yFkHcXN",
  "key16": "5PJsaRAaEMEHEEMG4N6rReGAvvjG3jmGoD8FSippLN5Lbpe5o4vjoT2kTNudFh2Zxaj6VTack3ZgeXt4HbM1vNYA",
  "key17": "61ZKpkL5mmtudQGy3LDnLrWcjyYSBPiPwAfuyAk7gdwZALcKYxJ1tPARkvM7HDfc3Kki4xfYEeBrzdGMrdRw6H75",
  "key18": "4ibk91Sr7VyHj2roBAYzj3RYuYNQZ9Tynbwwa9nKWV6NKNUWAScV6Ccjb7PrXNPaCYFLHxhZsdkdG4X3zvBHt1Qa",
  "key19": "3LnU3UfrX2ytxkxqDh5fus5tFbS464NRJqU9T3SL7EaEyB3rFrtRApvQz9rzFQ9AWTo8ng7jHvH8c5w7aUraSdQv",
  "key20": "3U5E2NYo8c1wHCJS5CH3QtXAGgbSTJJzCvgNnhu4FyD5AmE6atYjpVdy3TQGZuvdqsVAgnn5RjWgy7hKVtenR74f",
  "key21": "5Gm2YWCxKWkXFSCpAwPsCVjvErBai6KvPNShtXqsJWqtwj9G6GXbJAS32dQ7qEEn3YMPiCHPj9KVYeDAJP3r2DWR",
  "key22": "2D58vM8U4Z2BsfCCuzwsPjfo3m8xp3dAh8CozLqFSgdqhSdpJVZsRMiEaGRaKnfEjZZbn7rCQFpCNRxBb9ai1o9Y",
  "key23": "UEegc5MNAbePsAzQ6eR1giBRoDk8dDmvKUSp2MdTTXsUTjbqw35NW53GJdCPnf13xMVaecopncRx3CPPYbwyCtk",
  "key24": "eu2vb6TwwFbSutCLf8giHpg9Zkfi1uhnhM9mX3g1jmVTNNLyLQnKiG3uvmyaS7abdsHB5BGkqw28pYg4sYyXQtv",
  "key25": "5rwubnt7qtCNziozKd7EzYAEHrGxo1Wi5ZuKse6wxxravXfWmhge219EDRU4Zymhv7hPK1cePiughfWG2kHZeFEz",
  "key26": "1RnuQcMWdVdpX6s9Y2fjdVMU1F2o3rMqjfikgga4AySYP2SMXaYYvxxhKSLeHPdQmn3wjsKho5rMsyNx7GX5dQw",
  "key27": "668wEqeJKpMt1XRstPQwjpRpU9yh24BZg6wbhBp7U64tgGR5iW9TtQtxxxv96ACsddhMh92PhEP243GLzayQK3Gu",
  "key28": "2yFfdaRaxhpNKFUpghUNMpXLA55V1bJaq9ukFbQf6V7XiKyctkQHDFYVDatQ6wHDjy7BSEPL4AKs1uxZ5RkqejHd",
  "key29": "4JVXXykkM82RCKnrkBpbF8RihbzYG9ZRfdQMQBPuQAtR3v9aD47FGfWfhN4AQSMVvMPvJpnyKdkkR3j5h1wcQ9RN",
  "key30": "39184oPFoFJAMyih5jRZ1VUvUaUHbor5Ygkq4KqyfpQTouNjPLVEdgG96RwUBNqtXBX8gQsWo2WhANBi61wFXD3Z",
  "key31": "c69xd6XMRqmcHxCbm6AjFoTBAc4BHhcfw8CXvyC1sCmb8MKWkjFGB2ZquBqFutgnwu4UbYXsm1bcCCj4owjvqyj",
  "key32": "5HR7bqbXsD2QxzMZ4VwYyNRwnzeF11iGYfBfmGZJaMjYmLgfvBEGQARNrZTqsDBc8D4UkhTPek12WyJxpKHcz6Bq",
  "key33": "4k5C3TphZqmXWLpyZSnoRYqhMEJBLV38D34J3t6monAAJV9nXH8vyvTjJFBHvB2iukdcArNLDGCC1TQToKDYpxNB",
  "key34": "5uCrD5D2wZi5fTm5kon8GvVtnUyR5c2JDjcgE8uR6xKMWLjYQdzsn2ENcmThhrwB419ayAweFqZxAfp3HSMbWXTE"
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
