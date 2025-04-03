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
    "3YpvVuDApphV2djgToCru8N5N7mUotYpZ8wQkWdncFXQrXx7S4MgzxVBGpPL8B73MbjRUPpu74DfFgSqMHpsfHXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HshYsZ2URHa9yaNhe3eaR22jE2CQMtSBKqyMqurHN4v66w2FrmC5UoFctEChyFUgxDCK5FCD89hvTQYPQh8HHAT",
  "key1": "LHm3XnuDwiCqfV5MmNscUz6bHZbEerJdpxH4WSf7CePQnrvdPsXi4W8jNS78mPesBeJurD71RNyWDL5AUtxMYpb",
  "key2": "28wAbZGREQNM98XWLzVSpU1MuQ4GSe1xXqUR5ZwZ2wTtSjKcWM6Da928w8HqWa2bTi6dzhqyhbFnbEQeexcRtCTe",
  "key3": "3qwapD2FkovH5fs1JWkA6FZjFYZcMahvnJRy1BysNXtzvuvouiJxEPoFgX5ijaN3fDk1Abbh77mN4C7UENcLLek9",
  "key4": "46tm1ATay9nC8i3mucCv7hB8ihSEZdpUYT9NWKW7ufAZFeoszvWunPJbJjvw27TTHbF55WA4onRC7jGJoVbujXyk",
  "key5": "4MqLWtaaSo7Wi3FYmU3T66ZHVEXUg2fQ9aA4ePJzDvGKBDbGQX4zDhxtsZqbzLFaVzxPnN3iRYRHTdDNYtTXRWuA",
  "key6": "2nBKkNLk5MjyBKEqXcQdz4FhQvrFSLTpjWjCKcgo2sDpMfn9mzP32NkSTN8epTmmoMXQoM1DnE6TyeLTvchFyAeM",
  "key7": "2rsdZygfMp84UhmAoWmwQZzy7WC8WDV8b2mRpDvoSqQ1mUX7SEXDGB1bRbvUdnJgsxBb7yykLWrMYfxLQAM74nHt",
  "key8": "4P9gXjZ72EBCZgPxnLVwsrgg6Px2PiKDyncXVMXPG6AbTWoaCmUcpK1b3wFiTX2xpbGnPMRkZvfutb8LmtNLNFKE",
  "key9": "5PWvCCHjX1zdfGaMpS7NXHiBehdCgvBS7myaDsyAXnKF6VfQAfha7QuuPaxLAg2oSa838DXtizDLhVNo8PXWGkBm",
  "key10": "t2hnMyqu8V9G3NNkrxy8g4Gy4FrCPZZ9Fn5DSAvEnQydG9ut5FDHyvSbcwc2GXs76EAMYs4KRE4W4shVV5X64X4",
  "key11": "u7QUgbajfFpAKwmdhRdf8tcyk3zcTKN5AvtvaF9mVfGqFVWyGcipaiux47sLcG2zomE8LAQ8Z9jw9ET5jP1iAhP",
  "key12": "PhYFzbXio1YJaUTdYdQJ9xtRBdRVSxJT5F5zgbBC7uY8gL648d62hSL7LxoTgo5ZnRpAXky6NFksKoWK8JFMV1T",
  "key13": "2nfssC679JFp4oNbhNpgkqwMU62SK5juTRgtobnxRRMzfGPXs13YU9JT1pKYjRq4csjzRXHvymL44ENkfw4ycv2Y",
  "key14": "5uBfzZmFxaxD1T7fN6V6ubfyk6ifNmvLhMgPxnizWtC67FixHkpk5wLHWMyLxMi9Tc8cMB1fvQLFEeLxEzCgPHdU",
  "key15": "22FKgH4dU3UzbYdTeUoKvWmQeakeVFhSUTam1CBccuZ4HZfmD7zZp41AAQjsvDbm5L266JvXnqoavUZidN3Ej7cb",
  "key16": "64yahmpGHjpCcDsEYDtNq2dFJmXSbLbsCrbs53MQjSXLUuXDJE5LNUpfC28o9at2yjEDjv27DQxyJ1cy3KAVR1TC",
  "key17": "1nxxxBzsQZnehqg7mbF7vJ1vrZi85mqWMzgwzTiPqD63NNYC93Zm6cSBnm1JMvvBGrGcGoixLC992gJtkB5BWgZ",
  "key18": "6XjQ4AA2wUoXpP7oZY771wyBfBtHf9aHn6iu4E4MPC6H98pnVAHXuCArAfTmFiiFjayvakVds2QBT6CZwTHq9B5",
  "key19": "5uLp9gZLKFh2Sb3ynJpCVjkqoSKwp1vvkvRYYNAociN8MmHbaNZALo5isx4jk2eLhwCHKEmYj5fWQQ8myKh97DJt",
  "key20": "3PVZWU7hEztjs5WftJ4CxKJTnJtVXywZxTRTF32AR1xmfjbmk2tp8Coymwg448wEUZwTMNdWADDQ6vtLNGbCwTGh",
  "key21": "547scyhJxbk63qG1vaopVccUd7YQEiki3GcrV5t8jQXu1AtN64dyQiizLUVnTGRUGgYMSfx937G8kosN5eMi5Cvu",
  "key22": "2ZSgxioHUBK3J6iu3GnybCFUjGcC6wKrkn31zpFGjcdVYjYRfocmMqMJWaTuojN9wbfTTdJKCAM1JQxhmKw9bT3p",
  "key23": "4DZt9PMwJd5WrGQMttqfdyGVtg8hENS9BTAqQgczaSbUShwTwoVDwPJcGacSPGUWUqBaBRRP5W6FubaFSJGR5d38",
  "key24": "4NDnjtH8dyWVCoqZ3ztycWNfLVCiw4cLZymqwrVvG283JLztCPNag9VzHgdfyLmDnQttmMM3KH2rNxbhx4GiwE1M",
  "key25": "3g12NkhQzcakkfDHU3jknxkwnS2p26t3XbBSGpDVT6wq5P3n1KHiU95YeVG2PMZmwV5Dx19HB7XFeSEGGoQpiarU",
  "key26": "5xJhGscPQiHAdVahCh8qrtq2h5KQ8k27BAFuApD8pb8ZmJdZ3jJhCW36zh5qQfVwxfjEE1jMcepXG7mC9gAHei6f",
  "key27": "3F4Xakc718dWqWWHHYHYs23rVFCMo5iKJoiPNdUQBMCu1GhjXpPB5Z3gzvYtdG4txQwVYPeyp3fipsGn1TmwG38D",
  "key28": "5kNBn55a84F3FCn3GAZgHmH6rVsXzhV98hr4iFg1EL27AMm1Qh9V48kFhksngFq5tmMJE3QWsaTrKtaNHucDz2rE"
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
