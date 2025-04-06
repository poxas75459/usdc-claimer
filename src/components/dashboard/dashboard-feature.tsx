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
    "Y1bseqCxnjNZYeuS3pAkbqHwH2yvRWeTuMH9ZYYgjgNWGGnhiEhR6JjfPTpCYktra8n2ftmJQ4LCpoArYxKdoqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yaegYaXUgXU6AWVDt6wEiXsn9cLNsyg8xPy8KWPxb98ptEqedY6WLa5fpFZEhNQei9KEKHujyVmMSEN9UuRb9eJ",
  "key1": "64CNiTxVRqc3UDeaTiHgojBRAL9j42qLpBDqbwKRtqTdb5dn3Q4Bq8TjRenUTcEpEyh6vuhZXHCwMH79ovPtxkoH",
  "key2": "2tEhzZHXrv66tHLcrjWKmRai6dh7ag3ajAmnaNsZt9adxxwe9qCbiAapLsLgGwYbEVDWBVX95ttXuLNLZVTSRGgW",
  "key3": "4AEVednZ1yu7pLDgsqfwvZCrQWaCAwSUmEKdi1HZ91zX3zYb6o8ZPzKmftgMej6GxEyxdgFNMa1RAUKSRBKVdESQ",
  "key4": "5HDyyHST72NFrJQNgNzUkrXgopEoWcwCtAaCaPkQ62q2EJPCYA9CRdm117CfgHLGxAmfYSLbb6nW9uHeEursLKmW",
  "key5": "QnVwYWZsF6YEhNGuiBFo9MzBKDhAFrzgX8Ymw17Y9e1YHDccVQtC8b2rKzbU3QR7Mvo8H75WSP8tTjaTejPwnuZ",
  "key6": "59Mhdnm7g4vhLbbdtThG1t6NMdvTZd5tpj2FY1mnnC4EH3xZJ2mNBEdDXXXQrehYaRw9i2t5jb43nCtkCAqxLPQr",
  "key7": "5uAexKHkLk94yxdLbPSG4cJnZ4gpb12tWecZt7wKZ5xpw5J4Psq4Aza4fnbjQFHtkp6Eh3PSLjXyEnSDyq3tZ493",
  "key8": "5Rv5Thoh4YfgUk8Q7Wz8JVNV5YiQjuvnMmdp3v28bReJdsCGpx3fwSSvSSJgKGqbA39y1eb3MZvd188VydrkyrKV",
  "key9": "33fWqtwRh3yKy68UCm23pGoW98EUt5dvMqhYhwXVhmPcwPoqsp3BAfWnG4oWsoJA66tKnuavSW4m9q4PCHXt3SV",
  "key10": "2DCEZhFCacyowGBv5mM9xRse36fjjK3vB3tUFh45qbK25RQmnTvRqYNHPpcZxN9CCcH5SKXUQAHyYeUUP2xrkQP1",
  "key11": "qvDoqG8sneicK1jLPb8UfDXTY5fUepP6tEtbzNrbMwCkfExdqdbcQEyaACogGJCKvFcV7z7Fe49e5fWcEZLhM42",
  "key12": "4hiSEVPtU95NP7dKNzWfdv5VZhK2A8QJVL1ziMKy3NFE7u7QhkeeVxMSPQpK7EShJXYpj6AoAkcqhRj3TpA7NXeT",
  "key13": "5vUMcmpMV1XKztwVEAvtbyiejxtM8Q5zpB2d6VPFKbywqQqbQtoWy3eZu9SfAtuNqgFUxyAaKN96g7N36XiGmZf5",
  "key14": "5CuJaqZDoHvzixz9EezRJY1fzbGnN7gy6WM5E6orAp6c4LU8xZKadkCjr87GmjZBSEvB42s2LPwFebBn3MxrTAsQ",
  "key15": "3R2713kgoVtdEdr3sZrN4FCy2hsxKPEMFMqJMHbj7MUyEQDHDy8Q6FLNER65Yhqx4V56VqC2sSBVGdVKT7cNAwJa",
  "key16": "3KuvXcLiz9Nq7B3zh3xsVJYWCW3nidLLDv7x6EbkjwZQDC6ysBKwihyDrt7suLopykAsTFjYVsfi2hHsAadqmsUA",
  "key17": "647S4oyu3to5vGV7PUFpFLYyzWnt8TqN144Mt3anbbuGuu7AdnNMzecAzmPXyw7VFvHAhpoFSyvnsPUxNYokx433",
  "key18": "4mbxM4QrCFx33ZxxeKDFrHjooeCSpZ5LtcZb5wnWjE1RHS1oTXjnSsbEtwKLfdWSbLAByc9bGnaTj9bCyfAkVGma",
  "key19": "5gxEAunkETSmEzA8EgB5z3UXt27nbZsnfKToTPfRSk2joEnniqFymRahSAFssi5MJqzv2FndJvGBJLbWj8GuGxt1",
  "key20": "DTWygEiBRnPASyELNWVeyCAE3UGpMuE9M2CTcwr2RZBd4qaumCKSgjr2viTe3d4JmXHqTGU7y9Jj4t3Vb1E22VA",
  "key21": "3SMRukjyqSnQfao6Y1aXJD1tD7tP6SeKp3BNWfSmhcmV6F3oKrVWpY2Jz7LWo9ER5Msv15g2xLTgxVKVKRCtzWAu",
  "key22": "2D516Ns6JtR1kmh6D4sAJiKAvE91T1sff1K2z8dm7QWcRnnuwTwu8uuid31zVVmK9TMZZHQpncu7NyaHoDypVWMP",
  "key23": "5QsgEToGmr7ucAdBxyu3g6BqsdEUskR3rMpiYyKgZ3ypZh75ULFg3FX2nJNG49Xdd5gcG7y6rPtX3RcERjwadtDH",
  "key24": "4V9Qn7C94PJQSSndJhxLV7Uq23yK2F9swbiFFWQQrEr5bxG435pHq3U4zUcYVtSyaJdwxXRLgjZ5tPBt7T6PYXJj",
  "key25": "46SqBBcAhb3nnYZrgoojvMAacFLSRo86Dk9TGenTvMHo5R5BARxieD8pj88SPbddVfKEMc4DDrLRuUsuReionJNG",
  "key26": "4gaTVNjZRf82oba5Gd6HKMCyNKgQb2K88bJMBcfvrxSXf69YHdrLrkhNd7STDqFSn6paZafw9AYGz1bjbwRpAHAh",
  "key27": "4521FzLCefQ4V9vztFEj1P1vqQKDRK3asA8E2CwM3MDhngbS1PCoRuZWfDkS7ogCXQK3Zp2Wd28CFCzJX8qat69z",
  "key28": "4MheraCuDRSxHMeJDz3d1G7AyzKier2Tf6iFxrfSektzXdobd99RudNgBLf8iNHJ5dYwcEWU6sAUxU36BD38mpfs",
  "key29": "457B8he5r7N3Cipe4VtXngwuaKgRqJ3ouGoN7zcnEgMWsGEZkgbWdVGS2y7MxGqbJLEY2qUsv3924o7yHwjWC6xo",
  "key30": "35HRFqNDjFMCfV1cmhn6jN1RZ7ADaJN3nPbSrW8T74Hn7UCVn5mbtdWnn2w8dcpL1jy1s1roNDdMsNUxhLh5ZCQB",
  "key31": "5RuTzA3fbBopaAxFT5pNqGy5Y1fuoKHEn2tSNSfhqK9kpbGWeVyTuCEwE9ibzPp5sRvbRb5eX8L4vpti38y6Qk8d",
  "key32": "5LH77nutjpQi3nJEhQVX4FUia1ivytkWNDQ637K4XfVgcvDs8vuH1JycoDuQqfZYwzHKh7jTZHcDHECz4gykQKsx"
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
