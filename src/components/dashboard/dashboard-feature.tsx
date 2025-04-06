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
    "tB3VFh2ZfQGx19wrD5T8DZyJvaPAz5KtaisqVmfQgxwDY1t6hAMeoKzbk81PLb1JKVEf2RmTuq1Ux18f43ydN2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BeGZpXTAyAWYjJgCSPwZCCja6eMer9epJNJH9XhTvb6AaN1gA3N3qeE3HgWx8LWp8F5sphi43HE3hcJKd3joHkv",
  "key1": "3KqWyUUVA3ygrsfGQtdMvGaUf2DKYqTn4mSYLZb11eQLgKiZuKA1tLpEnpfL131RzFTSLhKBbxzdzNGPzHMgTyvb",
  "key2": "61WwMEJXq3Zunc67mH7kiHHLmDx3oE4NvdTcg2C75wVhLXdnTs8uyA599786spQqcW4Xausw3tUYcLxVhT7NdVoc",
  "key3": "guFr8nsMSdrbBYtLajhxvYc1J18yJBjX1nUr2SdZNKMur4VhN5Gq8Wyx6RbsVe9jxxm4We1EBW3CDwq56yZ7aY7",
  "key4": "gterv34zxQ3D9CYZH2w49AyDDokFAYbSJTFkJEdYFMmAgf2DKeaETkRJVYPfk9TUKp2BJfb1T8eK8gb49tLW8hM",
  "key5": "2rpL6vHJwPYeugUaVbCXzFJrb8RroCppGnwp5A8A92GCzdwztJU6VWGmqbrrJRVE6CpU4qkf2mExpj88JTtnm3k5",
  "key6": "2Ux7Mz2yKVgZv9gyKawLumdPsf8117GyDETPJ9X1SiMR4T7h9eWHRaFgRvUFQVoDnRGpErVDEMfRotib3RPmcSfk",
  "key7": "26mQj7RL8hxPJFUUnpvtTjYtheaEYCX6aiMemN5SXK45Y3gYXZfLkT1Ehj1NDdr4fr6jtHiA72ZBHtiDUsAhVjYN",
  "key8": "3BQGoVVVmsCWjMaw17iwCCST1dKNvwxNLfTTQw4sy2Xmfr7qTS6SoHHvQNuFMn8kBXXASYQsSagDPLNEXAizC83r",
  "key9": "3Djg477yYoZse6rjbJGvjwZbLzFEMdnYyL98FVyRaiBNWDQwUcioEfkWE9g6z2tkfHdeC2JCRzX8q1abz8kSEt6o",
  "key10": "5xtTshg5h9eLFSAD57me1i3yA85sUxW4zgNCiKfKu1k48rc9orocjTpJmvfo2HLprNFQsdh9M6xaaa4EvrL34f5R",
  "key11": "59PUL7hcFomnv8PuAJMSmTQeZNK5kyrNNAa81HgCdXXnygNYrm5EhaDaYUDWrgoALq21G2cx2nQrq3AzvS83Ux9u",
  "key12": "5i8weoNsPZ71C28wknoAVnzQeP8FsCsJ98TqCBGzMjUr5h42F7sbd7ADdEpGLNGmbXrK3rhzJ8wYVJaYfFgAY5LZ",
  "key13": "55XZPi8yLHo1XcMMkU9Uj2MVKx4ytrW9L74H42rBHp6EpTvai2v6wLzy6P3KWQS3i22r833CPs7NwCEDUieFwhY7",
  "key14": "4eh3HxTTdAXPE1KMSZzk7er98ufuJYrnDja3znswbhjJdhrK9HuDTAqtXiTSt5rdzPQXVUVEEke4G49TfFLDfNqb",
  "key15": "ZjL68rH83a6faVQqfQXwGwArQYeaUon2Z3xp3DEhiCRa1y6aroXprykcMJ2yR4D2Dcj3tUBnvAAP7gVLP9QSiSZ",
  "key16": "2GodY8r5qecpLpsS4wc9yme7cvaraPzRd42eoQzCcxiv79rbMTNughfPgHvhTXwCxYhw21U5mV3bqQG72k1YM1QT",
  "key17": "2KY8BwHdsfxoZfpd8X5Q1ZjhcFeT7k5VYJ2PdKPi3VtUQA9juUEEtjZya4q7SorWC3tiBiLt9ioMeTsbg5y8G8AH",
  "key18": "436VMkNWGbvWbrrNosN8XoyQ2iQ2rCdY6sQWnWJyFp4Btg5AUZabYPV8RyysUD1A3TNcE3ExTMQJYz9Zfuz6nscj",
  "key19": "37U2vBbgJnfG5x83SMJ44cScwYJJk2gKpsfQiWxeyJokKnjtwNGEVRLBJbijUDA8xTTpPdhEWXNh97L1LYrSosDQ",
  "key20": "39KXHPcnBbSWLmmE9e9m1eFa6s47FjjdwYdaQrAEKPJRArLRausKKcszJqDrXK2bWPGDVJEM3QRpcnnrkTpH1tmk",
  "key21": "4Bv9LYQrML8vRvh22GYVN3tKWrj7cUmWLbEyhaN11qBw1kaBNAnxsSyaf4wyHmigYRaUAcWL9SvoCQyNYWfco6wY",
  "key22": "5ZJ5jnGviUgvB1oxw3FARLSZ9uUKHhVEdQ9ZSdMT3hLfRuMBn6kPWvDhVSGzDqzXTTz1gqgNEGZvX1tZMVwA3ovt",
  "key23": "2MbZuMeY52nbnN8L34N5QcNwsP7wiS4Y1jde6HTtWHurUHFwJqpdqxgbwK72UqNmcohKdnTfDN7Ns6wKYUxo8SRj",
  "key24": "3Yo8hWq2DPVho8RyCriGEgbSmUMrb6fjyiAPEQbvJ53n59wBFh9qRXScbp8vEGV7wrff21mCJ7kRqrHtJ77hyEKN",
  "key25": "d2DDydvsNwzDFodmgGi8tfPSK3ho8ztKZNZgtwKwXgh7mgiNF26UoWt9EcJqd2c24YRHsAewf8ka9TE2RsxFaZX",
  "key26": "4JnkLX9NsxKWtB9wbbmkQUGnDJgWv3DdUm4AtPCo9S6DbDE9GxpkiR3KtVFNy6U53g83zva5x5JFuL71e4SShcwd",
  "key27": "4xCiDZAKSQgeKQFb6ffGieTzv6uBvFjQc5CF3v6RX9rr3CNdnsGRZAdAaaHxhH2XoS4fFBw4fR8eR8hKtKykqTvi",
  "key28": "4emfw6VF26LsAbw9JfN9ftJB33Xokv9PMbndqqKToWiBku1mrtaXXoFSWMpdvwmWiKBbMCg6FJ6vpGg7wtL5Ryv2",
  "key29": "2k3Tkw7n6pVLoX7jbsWdJK5ySFaCZC1sFvx4xbdLwRpbGTzZx4yanGcRTjFjXXxwgkn3DzJHLaK7ksf151Lu9G2y",
  "key30": "61xwWLuYgffakAMtczY3xinJV1m2SCrGcEc6qX4EaHoHqR27HpNBF6Da981q1vAmTdcr82BZnaXNYSwiEQQRk9B3",
  "key31": "2ZYXwv4orME3R779CbkoKH7qZMnzygpwqvphkttqh5VV6XQm3wcLtDW6qb47ew9dAbNKz7q8fsDvL7aRHfR1iCUi",
  "key32": "4KYpCy4HBTfzv3a54SFtg57YUkDhRUfDBHdBoUJXPJ8xMcXVdVpQ6fReNXi6iZUyoBsXvn9gV9bpeg5tfq85Hmmn",
  "key33": "5rmEeZgKjJBrvsNfYSXLNhTkgje1fDNR7HcwKno56LhFuU8HXJmCZEnjZQS3C4nk6d3yF94d6p2GsdPaH1nqmYB7",
  "key34": "ramk9BfUb1RC3DdQ4vDjUdvUHUVgbtVK2BXxA3P6xJcdWfyFexyz7u5bTkP5yDefmCWRMAs6MuRnRQPnhJJM2P8",
  "key35": "3EWnat6Px6XjCcNzKVmi6QZuKvthjNiE9PuoDpaxizU3xgWie84LQnwLLArz1CcvTEEAusfEwcm8obn8N9CGNwU5",
  "key36": "2TMjhVwYJT6Dku9EnW2uPKRNgkRofx2ee7zKQXYBcXrFjaaZNXpMjNsdP5Dwd3VUmftYTm1wmpsUjU7fL5F6gsy9",
  "key37": "3kxMhjT5Wd7tzKg7qaQimParrLy4g9RV1qDxDA6oMa5bHKKvDz4W4yWGxuJUqiApQdZi77bhBT1CNXTARTJWAukC",
  "key38": "2P4HLUvtvxpBGQKFEDPXyWJmuLhNYGYjWuNEkVsLT2JPSmxuZRocpyDqBLy9zV9EtKAwbF1KcvhTJYipjEHA727g",
  "key39": "SsGbV8KoJS5h2ZVyRWJCe8AGxQTSxW9Dr4tKh8ir5mp7r1KRxnoD5GXzDSaoprdkbufbhzhHUULQfsEAnLDs4wJ",
  "key40": "5w3besiFYm9odeueztjKJtVj4FTpXZbaejtkLnaZZLjVMQDSWZAX2An8pdq411LyvgVM9q5bmPhKgu1HCfi3W8SK",
  "key41": "292KxQxNsfJyaXn9RdqcFYq8zxJBPwvqn4qFGvCKhfbCBZTuzJYZmwbbh69FqnNLDCcUjYuXzh5T3AXyQhmWuR4r"
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
