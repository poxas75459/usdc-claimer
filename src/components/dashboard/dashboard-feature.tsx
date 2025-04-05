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
    "51ybDnH8eTVhHKv2hehvJ6N5vwwamJkdvGZiXrtJqF5V1iYTjSKEsc3wiPBMVk91azGarzjAzMAYKXtrL2cCk6tJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qSj7Yscdh3wVsT5GmebkcxKECZzfGbr4jkqbgwaSxeAz289r7gvnu6Tz7PWzmMUuvsqc144gmTGVcjaMib1CbY8",
  "key1": "DSmiLp8zvRVmjyrVb35GJWV5a8KtGKVVybfaGeTgP3otXb76bfWchaBePqLa1y2adpyuuK7cxJae45gd2oHM9NJ",
  "key2": "pPmApHks7VpXgGGutX6g74pB3DX296GZL7ZTmsEVZJzawNV39CpqWCdBFQHmG7izruDXZdEXwEk2NQSFAmMifLC",
  "key3": "4HnWR2RwMpCvUeWwKk5hEPn1zQWoB7qVPGWaSMK5NQ4sCmDcYt76J4SaBtUg9vbRaPGeAikvfwCgGYGSKsTxf7Sq",
  "key4": "2Tzb8enUkxFQvkicoGdRbLXkjLW38N4GZhAdLgLhzKNjWhWFE5pGdanhZSyHjN2wxGXxwFj4oZpRoGmePosbwDTb",
  "key5": "5v3j4U4WJRP6b32mhBTaWmozhpqFWm9pB3654M39BmsqipV7iBo1U6dPyZ8expc7TzX6a9y69XxHJeMdfUZ4yPij",
  "key6": "4a4uxdSMzH3SUSibtuVjbF2c9oXZfD18qC2RnQopU4577BPDHfmzv9uxvQ4hc1ow8krpXkzuQBqi54TujWpZXgTT",
  "key7": "5tTNcrjSLK3mT7Tp4ADGBMB31mmtBAayeu1UVWbgi3LwqeVWzApGa5azurHA2WADfozuixzPKbS5rGgtTzFQ6T5c",
  "key8": "4i8jGzMGqqntdwa7BncGkjbe2eGe4PvBBYzRF35FDTKoGjWetYaEBaeEZQzrW7N589175itkbEmFHPJdKV4gmVoK",
  "key9": "dzkmD3YKCH23xFxPg5zSruAQ8RxyjWbz2Unp2NUH8PN1zq4rBRcmC7ehXHFUPmAYfRAtFiiVwKUN1ZeGJXd98aK",
  "key10": "5v1W2f3oREiWZSXuiaSYrgBDaE5FLbXkDsMtDFatzjURuMnqhT26vx46o7txPMVu3put7dmqJSwW8fVAZuE4a4xt",
  "key11": "3yenKNSQpRx6DQAemdZautn74qUtKtpCaKcNXuDX9sXc868kjoyQheh9bUF6JEtAFuXduTYVczb6WVYaEEeJv2qJ",
  "key12": "2ofSoCXtjCRynsWf4Le4UD7WiiRCcVaMfMXa1pCsxwAJF5ruRqus2wCJVbGbeCnxGur8p8BL4PAovEApCsPdvscD",
  "key13": "65db1YPCJbJeSKL9LcEoKL2zS1c2bB5BRnThH7kFMP7BdE7WVY6VbSVXGawa93jr2HRcSTnvGP1See6hdx96PR5u",
  "key14": "5ByXCTGkGMvFMjFbjvZnwGFHZy2UvkemzzXakZdi1Y6reVq31Ew4tUNdtnaSXtqUJvSDgSyK8aKed9S29mTj8PRZ",
  "key15": "2QiPeUWL2F8ZLoiDbUvAsZq7vyMwg7UdGCxbZScLWWPAnJCxCZtjikrmvV2mKpVvgjScLAeHi5uh5FLpaWpHFs1L",
  "key16": "4t7kKSbj2aCCopEaGpdmzknAf4kSSuzuzpNcorraXTAoYBiKfe9DS76roMf99XUnuYzWrrLSWSL3w7h1iiofS9r5",
  "key17": "3e2f4B9UxLUqY9ZGErUP3oDPNif73JW1K16iYcKM67NySXkv3dhNKdiHLEhpjqvmThvbX5fuRjV6U8xeoPh87jUP",
  "key18": "AVy2c9nrf5XN559Xvf1PwgGUC1bzLL5uXyuzKp9xSaRpfmgD7pCY6Xx8bdH9FpJf4nePuk7z5Di9KyKS1B7ZCTY",
  "key19": "3R4HMmYPasca8JMZnm9QicbtPtfL3Em1wXgduEus2jpNCVWBzr3ftp6xWgGdEgSDZu5ARE9fwTTf6vYfc2YeSciw",
  "key20": "3buHUz1Q1Q2jdUJDX2aZabBLFfHkFvzXMgBppi7jXvbGDHZYPUfyKgi3s9tgyeGaHh2U8gRLB3JHFUN293eub7pC",
  "key21": "3pqYPYfpgkw53P7bL8PMJy6fShU3PkPQNsJiUCvVAEL7e3VM3RB9AX1duqrh42ysCAZbb82gcUEkWu9CXyCeJ3kL",
  "key22": "4jBzyYABvwwqM9HF6Q8asgnLHvyihxLemnQR8FnPQcCLmuH7Ec3CEfVyW9HazmduS22XaDwTA1MJWQCVTrGjiS5G",
  "key23": "62i6TWAsjtRKnoCdJeFbMkNLGGEZr3ANuvh9Md3WhJdV3aviHsPFMHKA4ukMBPsNRQSQd84nmqMLSgCqEXUB19Pc",
  "key24": "maY6i3tyxwnwf8PQfedwxtMnvz3QLvRny9UQio1YDaDLcFyTMU77mao4KLv277eTwsGLBi878pJoc6hfKr71Zbo",
  "key25": "4hEdgKymYXNaiorYiqvWg3XMPhgVKukgvgbMx8rSecSWEf9yN7CDKoudEGYo5XxpSj8MrsdQj1eH4k2ooBAkxywL",
  "key26": "4A8oiAfwPoDh4CuyHARxTjXdcN9H8A2KLwXCF9kiZmvhj5RsDkXtt4GBEpa6jzaWRhufafG1NSCwnqe6ri926L3H",
  "key27": "49m1yMiDRn7jJGiHXf8kRk81TQ9q96xyVYfsnLtiZcGuH7t7KAh4LASF3mDjNEE4HztFcyA1BbYkRUZxPhDwKKd1",
  "key28": "2x5AB9oh36MJG4owqMYB3yjDbHtBuxeStRMgtBgU4XaorA1MEKTKQgnmyRdR7mWp5mQjAgFk1Hp2LdfyrGWpPihh",
  "key29": "2FvG6de6hxZaEWniUrwAWyjdtHxpev13fEr3xNr3SA7ykq6AZpBkDKGLU3KS6K7QRuN2Qkk9uSfZjbJkEzCPSqJ1",
  "key30": "5UNm5r4Z4dby9rebAyuYvso4umZocdTyFV9ntxT6DEaHFmWG2ZgVFFRAxngij37UZ9CGBtkFq5n5RzYFQZY2DFhH",
  "key31": "2V7WV2GqJbq3YGWiTZE9kuwM2wRN7s9dNPqXffgjifBSoFd2CQfm2hFCerXYqPBFAvZjgh3kB9DYHPcKv7r63NuC",
  "key32": "HVfAGEMrEZHnCBpikhioXXJbqiVNUWA7srL8BUcH1PsoH6NzwSAPcHXP1gofWD7z3PHHMUvE4cArhaEG9qyzYJg",
  "key33": "3RGpXQnhsVwc29LujEfYUd14bizkmTVYiahyNbGCiZfsgsRkCFSjUjA5Md5UcW6989Feek5V5roWSVnpPf44zKqR",
  "key34": "eTKPconCWw7NDzfRMHAmCfatzBM8j6jbhopxRMG3Qw7CgjWhM2TL22cjQJBb7ARyQtk3vm9u2DgnWPLgcMsbpYh",
  "key35": "4u818gVfWUpPyCFCpn99zYeqjThVyuxykon9sqTUFk2ufHEh7NKY6dHqmDkb1Sk4FZ27TbRi9RWhzEvURcnEXhMz",
  "key36": "2b8ccffXWZu6Z2NC7WgHPcy9SpGgqNURGCNuy5YxesKsbQDVgQw8Cw48KVJPZBguSZb3Dh7tzjiTRoyRkcqRndBc",
  "key37": "5KCbFGC77BL7KzsoZWeEt5fXpAKZ5ccmiPxYDUUGxd4bcucAngCWJnr1CJs8nocZY9zCPGythLLBKZq6CQGvt8Rw",
  "key38": "32joWepEU8dTptX3quugM9umHX84cezVdEXP3og9p9B3GFfVjrZGk25C19UTuCA7sNtRbaqXFKGwjshoVv6hGCBY"
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
