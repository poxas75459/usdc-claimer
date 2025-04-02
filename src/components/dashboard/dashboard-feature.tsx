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
    "5jHAmdj1zGWN3UQAVF1Wr4C7mtJNE52dDrTw9NXJGEN4vC1TXHQyCRvJZvKmB6WsiGEGMST6t3G7C6QVVfnTfDBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QA7JDvVqouyzdkrkuF7Pqc8q9ST2V2kg4uupbZt2L12LsmehKiB7nz1BYqsQuWJke47Y3pNGe8yPERKbGWfjmrj",
  "key1": "J42Vvm7tZLoAQe8y18yiPNbv2aQfZpeRnkV8d1sXz7RWeKNDXWTirV5PRHnBDbKnM7UQrXfZGiBdPW4fxBFU7z4",
  "key2": "33FvVuzk4m1t9BS1SjNKEqVFjwRss7yVPwhshYehorFTbseAY1y7QxZUCqEnn6sWfqFZXMTczar98Bx6s7aXhXKx",
  "key3": "3hmFmygMNARyk2EWCuzJiXCeQnUFaAyHapSiws3eBuNH5NnLLeEsJBrNm82arcHhcQiV3VtEjSDKDHXvp6k4ZEdH",
  "key4": "2eaQhgFgThkp4YoNwHzTDMDUi8YZ6pNCxVbWwP821dyqutVmfMcBDqkRDkeMYs7mQjrYSRtUFtGnbQWk95hugabP",
  "key5": "3kUR525BpZc7bXX1J54iztVhbnmqzsNmV9CQoEDGJgeNYL5hQ8NvUyu78aTGGczyS5WndAtM2YdWrb1Trs2ZBJGu",
  "key6": "5AYeYTtnCXd82YgdDy3q2newKBj4ERK1ZYaC4TXtSunX4VtPVVt33JxvxiYnM1h6ynJtcyyTAwKbtbmG117oVDes",
  "key7": "4xrdkZLCeakvNomDC2azFgLhLKud4jYKp7FSpnXxoRefzL8pGKFTZ411RBrgvHuGcRxFYuYY6zQDcpSrY8mYhLWQ",
  "key8": "5BnUPqjcf2JNorZZEuHr784tvRytpzDoeHbpaL1b7Lvqny6KWEVt2DrowYJfLEpCLweDySs8F8SavTviAHejNSZS",
  "key9": "5LzcmGkiCaVEWmYUMK72H1hMeQHTxuee4WXN4wU6gwF5yL2LFhKRyvppntetLSiTYVy8ZhoSCQjTHXxvhzi57vRn",
  "key10": "3BkgbZozMdFKTYQtCYM4oG4vF1pNufauzGCk9wDqKuYscKu8erbZURhsmc2eZFS28vP8iJ3wDPhuUTEFZrkttxE7",
  "key11": "5jtALQLwoQUHnNHvwGJk6TGP4qsPZjfU4ZCNAKjJm5KLsFTgeJ2w6hN4GfBqxDy5q1ZsKnWTyenyGraZpHsMqmkQ",
  "key12": "65dwj6j5kdBVhKfsF8shut8UsGYiaSc611kDxtLz6pb4WKsE9MKbxxjJwMKKgY8xUZbEmLLuuqk6mDB8QtjsPhQG",
  "key13": "4cWfUmXzivG9ANsv7oAMndDY7ML8p2Bs1ov15uUMHk6etbiFA7h4zGEQ2hUfFPBJd4gk2Ghf6JVjexprFQhLUXf2",
  "key14": "2ChWm5NW4CYPkCmVJ5Cr2K1h1AHr1fKa57DM8hqFCpQP4bJ7x1DUeaaYeyyEBb17dVWyi1ioiXyp97S6YwocK2ze",
  "key15": "gUJgmVEp2zfbWPYD8SRPVAaE96yMngRt3dbap81RGxvDkU3xqPoqTugDvCc5wcoxaXqyY5cMMtMeyT8Hhgi3MNY",
  "key16": "WqcubEbWp2GbWUKQqahX6XprzS3CiFzoQfYwjSeY5bCp2pBMANd67pbtAayTBRprEtR49hHgURw756Ttdfi1k7D",
  "key17": "5amWygDFaB9RCjEJLBA3wxqpSPmbJDixYFrMThSHJxqMR16VEnYAMASwFdNpuCifD2PxgQX69yesQM8Snat9y44u",
  "key18": "4fkAZb6B1aqFJnxsid3Jhgg6CN4ZPnEkutjbXtKTKoF7rGsg4Bt3NuZ56UL2GwxJuGj3esPr83DuBoXaAJBpVRrU",
  "key19": "zNkAbCkMTNCKHo3JYZXQPi2gE2pK8Fch4gxMPUA533n6jdjG5J1zrqXNkDUtJQg8FAJPe8bqbjiHKAHUDVzw5gD",
  "key20": "4Kv6g4msmJLLy3KPgpBn7ytQFJpzabXwq8Hm7ztNDN8Cd9e78vkUQR1d9WfYrAjLsCwmLAbN8Q4MAH1BXDh6vFwG",
  "key21": "3DYWKmSZhJi2p89B98hADDWqi6vEMTEHZmXSZbwuEJZWMDQ3FhXhZ3j2g6XRUAEMwZvRkuBcowtZWSaGT7kc35j1",
  "key22": "5wiqF3x3Tv4qbhFr6QtegaULn2YzpPM25JLwnoup92gzduyFRkwkQZRjx6r2w4APxrBcThq67maX2y6FoyDSqrwu",
  "key23": "2LpZRjysRWAp5AY9rSnT3hMTT8HHiKcG86ozfoZu5QMxxSCH1yPxCqS3diXUuUHfE7mBR3Szh5bYn9RfMVnzHqzU",
  "key24": "2Y7G6nUybx9aGqXJAUhqPV11H3pQsC2PBrW5jgKhBgRf8Epd8HSNTNFytKjnWgRYx6Yq2NLA9Hrn9yc5U9C2iVz6",
  "key25": "4c5sU3SV2v91NFW1KwCPNGy8Y6TCWWPvDZTxCHenZ1x8XJDG3gQbEj8xavry6KLNrNi17YwH5VraU4gsySuytkJP",
  "key26": "DoKGqvW67wpjwwh6JMVgjz7mcHNX5a8Tc2cxgREsmNTBeYP3mNj4cx9X7S7STcY49NRrXjQBvdQvjXiZLFX4vfE",
  "key27": "2NJCspUjmnGzo3pZXJvvMvJP9SWGiLgbZo6SoTPJzZxAY6QbTQHEkPSvvZpes5h2KsZMwNWMK5eJZs3sUkpKq5Ry",
  "key28": "23bGmcQGhjYx4z9KyhBjo368uGxkjskW8DJbwjBNyiCBCEoSbioSw656WkECgXfwwcEoRmMK2WfdGBaGNKbjXsYW",
  "key29": "237XnJRA2giJsvfnn5TMn2HaAJZaeKaB6zgXvWRuY4uTTTGiYPd2WyESHTU5NH8r8NgVv84PrCfg5k516PPj7uVS",
  "key30": "5BXMeBpeAsm6tEZnRgUp5aRji1uJtnZec1KeChSiRko5QQTWbs3x3RBoMNX9ECazc9bqJGBH9PwhhVEZgsAn67Dq",
  "key31": "34CEd4YZgsCVTWxEcR2PYzd47KajTjjbnzjAJ8wtcLJgjEZdYCyL41STLN8W1FhqSj8pQbMhRaF4jGoPGbC2dU6x",
  "key32": "5GX8r7SYgbSNc7L8CU3VT6pRipbpXxLtixWkoH5BwMSdMsZ3v7kh8RFtW4Vp4rGEibdp8ALzArv6WsqE16Sc5jUt",
  "key33": "5sq13XttmyXNh8YRb8kmCitGS5mF2tZ3muyr1dYZy71GjW7Q5w1BwbAb2cA7k2zwihMZi51QNf5LyKzu9WY19BAc",
  "key34": "4CTErKHwq5LLpdebPcTPDX9oNskrtRUdfc1i8p1wcrLGghTPUM18iUP8AAgy32nxWQSfAE1jXyyydCEgd2534kt6",
  "key35": "2k9fYwgtnwvcSdRcks3jVkzX6WdtibppeU277ShKBK2jfG4rXLE9D8dupdSLXmUZHhGW5394hiHRXAuyimh34owD",
  "key36": "4qbb1ZQTpxhiHmAwJg7yRtL8UbSmzV1tyhNL2Q1WvagaZNyZYtXKh9DnSYj25CxGNnE1ijUS1pif8RhbaH1tkNLi",
  "key37": "3yPmELRGqofB5KbWqrVBRVhc3kKTLPjhEtnQLQdFRW1kpwrzFwiTn3MtwQYsbsKJBFMZvjVpi9qs7Lrsxs4H81Pn",
  "key38": "55KgShD2jHmudLG7PjVBzVVEzZBGUNbqY7nZ53koVc3QcxWKrK92R9mdozf1WeuQGfPXDagMWFeK45xbDTfRVhag",
  "key39": "5Wmyfwe4XNKoQWvs955F7EfG87zyzeQ5Pc4an6X5iKLr7LSLgQmy4EsGd8mCXpS1ekVgtmoTxiXXnyUJiEwXesjb",
  "key40": "589GNTSLx7fxBPBp1fsEuYneWT2sZoRDtERLWPXyiwmdziw6HEbE5fnFr2PveCbRuKivE5uKYDTdfn5JQGCKvFqS",
  "key41": "5RHx8Ftm8o9H1ecwrjMBuAu122hsRG3aWdnB18gyvmXAgj62C7ogVhHHAp2fdVF2qKrJBXgadswDcV1T4mFv3qTq",
  "key42": "5QyRNVT4y4hDnRhpFF28z7dyHKk3rrLuDLH8XMri3AsRhMLHUvtCFMKLmsKLKY5N59XpetnY5GuMP5QazCbGcQXQ"
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
