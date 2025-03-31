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
    "2Z7UZLnTqSjYCcmkoiw63FSBQG8H78y1JpsjyyusoboR8MdKPjz4GMpZrJr97sV2kB96h4c88T9bwiAciJd3Ljk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABPakWexfFxhkeybn997YvZYdbqMMXyoy1fmE6PkXQAzZyEXwkZpaxxxyDVwXycqog6aBqMq4L9DtLi13JGakBX",
  "key1": "3Qd9ZDxhVd27Wdsri4PRVERuc88S7jtij4MD1ikj3hTCRy8VXx1txvwzW9wSWgqFXJUJrcpF9xSYE75RogsU95Jn",
  "key2": "3QBaQjQMhXDjafRcZpaSSkdkfQH6EW6Xa2AxwRzDfXJu1SFoD24CHsCQvv2KpqQxiCwg8893EbstvD65qM6hQSKU",
  "key3": "4dkSK9sQiMuPaurQkAbKuNQKkr7jtv8mXGi8cnRJ3itTqj6smBHkw9HyMwHAfrTpGoBhToT8NNp9LH7uq551bZvs",
  "key4": "5ajxxR8PpD2gMSwBw5H2rsjxCeTakmUpiE6KbjEDeDY51w7evcLpx7XojFGSjYCx3gBbivYakhkrmkz9KEUikt5B",
  "key5": "4aYH2UBTSuU5M8invsshkXALa8JH4T6k47i7PDvJ9TtfPkyzfXpjKJhCpwJtQE83xTbnudY2jJRVG6sqAhMEDTrC",
  "key6": "4nVAquBFvpD74XPp5D9kvHMvKKNC5LfHrZsqEycWbby33qhmMgUbu1qFm8RqCNoWELE72VrdtyJNn9ypQAps4xUu",
  "key7": "2zKnKDHhNb1PaUWKyDNxKgbsn3jWmavHa9Egm38QTkFobYHwwXY9c2rfYyywGAXGakrahtZ9EMMYkYxLkunSsvea",
  "key8": "42m9VEDFUJFAmJZ2gdG7AES5xH8Z4VA67KLbeRuGR6gJ4UJJhdekQUPXhg9PuFeV1Qh3vnR6sMKQGENgpA9RyPpg",
  "key9": "25mo2mtg9qDScCU3VPRwg8UUb12FASUUqYLyWgZms6gfGBu59Ey2KdckEj3Z1qTa64vbgw8Yq6rdUq2qcCou5DZB",
  "key10": "39rpPoZ94Cfz1m8GUwNnTFGpeSUjLW4jxb5GPEXXJ9bN7SAMSQsecP1trj3oHmVGQVdV8D2tFg9GwM4hyBaaF9fY",
  "key11": "5G8yiFhQpbgwvENhbbpAENoJDiH5eqfdD5K6RhuANo74wHHjeVHXwt8CSHYEURLuTdHzYipNDHsaaQAxSQpNrZNz",
  "key12": "4LXA4ZXTj55GGaANoVooK1iJDGzmdDCdEVNX4eaqNQpcMJhiJMAh94xVjF9CniLhygLtkNKp2LrMC8FdH69jC9aR",
  "key13": "4XpX6XJ3FQ7eNiQLe3en6A94CiKYqSAN6ZMccSEwYAZRqSKCQwkQaUpoXafbU3R9THdm8jJiXVsrafyvxn3kpF7n",
  "key14": "4nK6PrQPQhC8SaDNiGwLGc5B4aB4UicMbomGxjDRjt1uieGFHm8fXEVLjDmUcRSETQ2xD7gXJnU2pW9u7eLgWpn9",
  "key15": "dufHkU6GDmUZjFaGX2e188tz6b4JrofaGdPxyX9W6xNL8YZa2rhB8xqhWa21XUKZ6LGxcVK6evyiK2MN6bsBPc8",
  "key16": "61bVANrNF2UwzeBXtbpoW4RB74wpBHMNk628bn7Ayi3PpMFDc2w1STfPk8bUM1zZPP6cNnMvtBvNFREq2zgrFqxR",
  "key17": "477gKTKGRzJ7NFkjGzWx1F1MfHwJS9PJoZd2Hj1ZvZSsuKzPD25HvCeqxjARRVUPkxNbihmkFTgoAJq3fv1CKtMK",
  "key18": "33HJgtRsjUUEt3oFFxeri5Wy5vt7eNzgFBSpZpGdg9cfcW9NYXYTjkztNTGtZaWCKTJZNi5unQAqiusjzxQhNeDd",
  "key19": "y91AJ6SMynM5eadTqrkoZ9dhryprxtzSXq8NRzwfAgvd98uKyJpFJwsRwmQzS2Ceaufk5CpRn7n8NKCGuWSUTCZ",
  "key20": "gkpbHkmeoYxQLxfaBohk4qkP9gCyH8zDJ4EGo6XsCztnNH5fykGiuuRo3TefkZQDBCxaCSxSdnpvvJZDWbzKBb1",
  "key21": "2GLRDx4LNDKP9cavjfWXtNk7eXxcEWVK235bmFgcAwo6EraEcLDBcvee7bvSbzvvCxNzsTsS1S4gxVv4mmeLdxny",
  "key22": "45RcnhugSTSs1C7vKjefjVLbxBList8gyFZb4cag9Afjt4aADrMYmeDtvjhiMckkWfPcRrWDGBTWFRzPYwWco1bE",
  "key23": "3LMZy8sqLbXT6uqcpcmzZktXMjaKTz99sdaECgLZ5Sz1B7F84ykgnQrGq2ePy6hQHSvDp9z2apW8cysR4uHEqbkR",
  "key24": "3QxrncF18EdwtTMvgQF2tiPfNWaSNDpXT1Yw3PUUBUn5NKYjXkX6xsDFxEiQc65AUfgU4TA58mjeZ94XqSY1ENne",
  "key25": "4bJ4CRJg7S84umTMzvgYDhuLgHasoF531suAus3PDMfn5ySEM2cMpdiGKmoEvctGZCjSnDMJB4d5bvdf3xLdxo7Y",
  "key26": "5JGvZdXn6pQxwAA2T8fYyGnny76o1MG2Ur7ac6V3ikN8mRir2BchzEcuKxvewsTdB5dkFNukWs58VzLDS2mkmNuK",
  "key27": "3xwBfanzhT4so4K7VK25uw6nqVVBdyFjkcpZTp8Co7Jb3NAU6X2oaShdcocYRZZ2DfHL41RTCZdr9N3g5jwCuvQZ",
  "key28": "4Gmcp1aUfjgmCZt1CRiYtVXaCp7d1chvgYQnS5vtwq6u4QazMpkjPz5AMi3gH5hLycQNu4BaMiZ1m3yovqoM5sig",
  "key29": "39NhCuXtXMA3dSrmBAsFqMwEWe6TUyTKH5GXMx6NUpbCF6aWzd9BTdRTKuor3hVE5oxnbqcGBVuYXfQyjcX3eFR6",
  "key30": "2Xmqu4zTXGqwFYdJfX21fx8biYxPEQ9aw94HB9pYucy8oxERqcyjP8HGe8kvKrsTK4T4CUHYqxeZaRMUTz9WNBTL",
  "key31": "4C9VTWKaHkPb9sg6VKvGMd2hf4WdW4NdGaH5N7DSMwFTUacXtUqgAJUqoFAieHgub6RCFfjHS7oTKkni5DUjQxVR",
  "key32": "h7SXZLQ47eFLwZXhvs3BNJcnviasrvfAnvzJher7xoNsetmcTXPKnPqyXG7nyciyUnscU9f7481qmtyNGS8dGi6",
  "key33": "5MXik292UGj3M4wDza6kTKydZT2zTCRxffGYVVFspDscB1jHyw8kDqgcDparjghopDQz6M3CDHf9YEzgC6av1M17",
  "key34": "YJAwknBqs4pBP66hemxfrjog64ugn9erRndAxnN5TuBwxHJFY4PVenihCBfr115nma7pwT7u1JHMXoRQGdHBHxe",
  "key35": "ZuN42QxhCJ9iV9nqCr1CTSf55hMpiWQhGmhaXXSFwVaVYY7MFu9SVfyRNFXRJp5iZo4L5rJbNqEMUQWpTmCw7uY",
  "key36": "341DgBCVRA7J9L1vp2yCRDLtSUMmKh15nBPaZBF6F6p2K52KSTXsCRYqGoADERitPVEYqTjqjFVmgsLVVX13L3HH",
  "key37": "2zKjDd4q99We8m9X1Pp7LFUfEfbG6MKaWcv2heaR1ULi1DMQRNQbCien1ue7JiHGmxeBVvL9BHWTLw3jx34oRA7s",
  "key38": "4MztLismw6zJk97bFTxHchs3DjiXzUtUBqyEvTV2S2RTCSwmzNJKCozCryCjUAZJMtbYqB486J9giYLaCBtE39Co",
  "key39": "3jxQLLfAejTbamNFHcTMC8hpHpbFCdJQvdEhh6FkbtA45DW4442Fyw4MKk5AauQ1Eudi2bZ47asXhf12aWuaqAUZ",
  "key40": "61iEuxJ4wW8ZWdM2sijfw8ByqCg569veDhH239taLHxHzk2gKwi7nqD3gV1qzHWya4fUPRPGQCaotS8TedjTHzPa",
  "key41": "4LDoxLKGCYuSeCjL2CCgiVkbmgL8y2Ks88ztWh6519f4sKhU6L4zu328K8HjnPymk35Yjd25bNdfi7CnFUy6FUMw",
  "key42": "4Qz5rwXuPHqncgUoRA9XMmnXvacJAfHxQB488pgFX7126AFes9ksCgQ3K6TNHUGxCV76UKm25pLX9yZwtHdFm6Qu",
  "key43": "4SPieBEuiFgR2nUracjB1HMiGFKUCLmm7D7MiW29SQHzMd9EHGCPZ4QHgLQSS7TBaAiwqLkvVGJjx9fYxZUGN9Jp",
  "key44": "5q7Jex1L4cpeFiUrfqwDVgRV5RpxRZydpecanSrdBDrGsBoFxtKk1gU4Kvgdz1oi5YzfkfLTs2cY6cRwhKXPFpfV",
  "key45": "4EhPd7yU1tycmjYwbtLNx7Kh1spPV3GsGbHgpdC6i36KQ81vfFSSJdB9d7Lc3mbYFpurhwgWqcUC2KTp9GfCbhAm",
  "key46": "4KW6FwA219a9uc4u2bX8xb9yM54LJj14BDLKANUpme4w8k7EfHMWmyiGDeU2jSaez7qSsDeVEi9iLzDrLVUskQox",
  "key47": "3Jd2DEhb3Y4aEtnuDRegnZfuwy4F8hnMmTMuyhxvYgbdHVqjmHr9g9S6vyn3daAa8ciGmysTDNPFC382KUxRYVn7",
  "key48": "5JwU7PhrnRV8JBkn8p2oUuTg16NdKVeaq9rP7PJfAbPt3G72FEFg78Teano3D2qtNubBQZoCAw2s4tnv54UpAHKY"
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
