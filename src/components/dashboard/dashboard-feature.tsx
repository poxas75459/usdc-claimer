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
    "GdfFpc8cAiUqXo6hFdAQfo7iUdLxdQqT7KJYsDdRF8vqZcqaj1osLXCXfJTXy5mhdAKcaDBUox8L6SCH25hYUbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQKGPVNtnYBg2g6SJtpo7m3McirZ1FjPsFrHQUwU3HYeAjAAsbQNZzh5SyPGftukoT8WXyJCAL4UwvoBv5KLAH9",
  "key1": "NsgzC7LuraMjPihp3oBcxbq8b81NC67j5cv2N4LmYjrK3bhajpn1cJVRiNoAxnCVVAcgwCtRzfgxYp6vShF96jg",
  "key2": "52RJQABYfzi3KDwZXwtRhU3zH6hL8SAaxwsQy9r4csouJurmWGDweMTeSAK64kAUefkR9SLKcMvNpaJyVczFvqq3",
  "key3": "4tECFp4CRMbSMQwf4apcF1VVenFasA84kneq2ofs3kEtVHmLDRGijzN2nTwd85T9juhNeJujhRQqwMsQHY4FtbpH",
  "key4": "xz2wvTLShe3iyPtnQ9epZsu2ykzfd1E39D215YCAoT3WtWHxBGUXBCzAeT7HK2HBwy3sh9bwyk8XwV4EwHy6imy",
  "key5": "5tCpygYhgnuQYK3uQzY8iJTaX3SGnTXzNKCF63SNanLVLX9y4kYF9Tpa1PDf5fG6Z8eBLH7rzjtppd6jh85LkfsF",
  "key6": "5J1XPiZSrYB2Kd1RtVWcVzbLKAC7Tfs5CpJ3xBBYdUxEFFFrPfimbiDHXjc5q7rVyZQqafMT9XpENHPWpak51ukQ",
  "key7": "66nwuzUKdgb7CwhSptr9JTW3qmZWBnjn7zjCvg8tcs5Dehm8xQTBSrswYg6pXMvbwNMAxRvQCZmwM9bUhsbo2J9f",
  "key8": "5zF3gjGtaf6EEkNVKLtbcJ73bJMiRvGELHAKfSfstaN3gSPw1LyrURss3VPbFFgaUqc7qEMk3Y53JiRdw3eursEW",
  "key9": "3EyavXvv4GxWVeLpGTBwYeaV99n7e2DDX6pj2jpN6igrDfUAmTTFPzLpGqVjVMBG6Zhai2ouspN7i4BZVyumk7UQ",
  "key10": "5aBEXbdHkqhyJMKFS1VN5H8SoSM7Lye2JTiB5YyhiCgosc72FvXSUw5Tst1cy65ciYWCQsKEsPcYSgqSGuRpiPFY",
  "key11": "2kdL2YAL3VeQaaXCRn8uLVccRGZkf2vYo1djmPUtyNReLykB9U3EHz4wWx6tr96bMkQ3fvSpCQiPMQgRXxceZxW8",
  "key12": "3uYKokPrcRsQmu1ABdfQ6RDzYKUgbrZtFHKkJ4wRgKYjUk7GetaCSiqPRjjtufAGEpe55rm1H2pBUEhXpdZHxkHp",
  "key13": "325SeE32nqj3m43A1KZNiZ6vepu9oziHq3cHqz8u68JDtLFttgY48N1fNbWRZ9UNpth4CENfsnxsmmDQntoJ4DjP",
  "key14": "5mkmVKEM8LNhpD6gRKjgDXdmbLtMJCSGvYo6298cRU7FXYsUizz4BGoVbschZgYeZu9W6QsgQRjknhKByoyLLAEA",
  "key15": "2Yc2pKyCdnF2bWBoaKrei2nTNpkQXtzDbVVnpKxTc2oaE28XoujuBnYymHmrQGon81Dkh1riJTbD7CZQPES89ZHF",
  "key16": "4dKDqvGVrCrLBJUgnQT6s7o7Jb9n5fUsMCVc2hyw68KHyVxUoJADN9YB4kaDvxSXWpeuagNiM8b8oLbPh119BkkD",
  "key17": "2W6MibrWEvLPYqy854YSq8rVQrz2uxQTrJibygScDYP4n7xfRTwGwrcW1512RnJrdpSyHNWLWZ6sVVbcTGxeJTnr",
  "key18": "4u5oxGjbV2oYKK4NAdo37BgsKtt7xUcyVCRm9eGugZr9G3aDANCHmoQn1JX3ue8zaT5eov2VBSVRLegW7oD13hcB",
  "key19": "1svZ7jQNfSrmJeCGhTdG95rCYeUtFEKL2ix9fzNRd4ZPo1QSCZnPdaqxQ2VqMLPb5Ppdsg3sjZvr8qroxBkKigF",
  "key20": "3XStx16uKvB59ZH2qDZBmPpCmQx2f28JJhcUpwS8awTwZRxqHGc9W7cz8epodV9iknp44S3P5gqM9yZJ7WGpF1x4",
  "key21": "32MEH8tJ7rrRXpsd96tiaFvmCjSSSdBSQbkXqra4v3Y7MXiYfuHQsA95dWTBJDdKx2vmB2ubd8okXKU1WSdsJ2oD",
  "key22": "jKJHysPXp4PRCAHpDftwsinRQZXkCAV8Q1jFGCFbajtzJFiV8NXUeUopLn6phmWa4d9QyNM9aZxSk8VqfppqpGC",
  "key23": "2ApCcYyabt7kQdKU5dAYQhQx2YfAUsweCd3cRVkXy1DNHoChjJRHybLWeWMmPZEc5n3zHx4aM268wVJLLiBmFLy1",
  "key24": "64RamXKNK8WEa8SFnndqQZU6uu1avrLHwS4A5L2JfkSNEfSaEMMANgi38V2K72nQeMj6Pjc9Xq2pUHvSxS9WxM1u",
  "key25": "3B4h8mRGWAtpemYcL9W9VhNeCDtU1bt5tB1qdmVaBsZzsYPUm84mGkvGymAc7Rc32tvVysTx5bBJ9zuJJ14rwaYh",
  "key26": "3o7MwriuhJDB9JTtv9DUKeN4ntsL13pCAHd5AUWbKVnyaamAEtdy86TcvocCBCb4FxiQEp6TWzGMSwmqjgJJ5BBo",
  "key27": "3MX6MeKJ5rJLxqY49Vo99ZR2YQsE9wYqyz2S2EKvf3J2WzsAW7EbKWVio14kfuHBPHazHa4YiL55u4GsoBfnmore",
  "key28": "5oVFCiZbvv6VongxpEmpWje2HzGGUg1qDodWQ8664WCJVtc7dCiR64Ln79ir1AStCjd1B43uwHvb7XEyxezmWDmy",
  "key29": "q79NPzMX3DjFHj4Gv4CL9zkxjsRnoLWQZtzjaV21g1H8snJXnmhDni6ueYoUdLK6duayk2zfCGqoWmUJPvj5CHT",
  "key30": "31CnXXFJrQDH8ckKZF7NhYjp7htcGFVPxmakg8Xg2g9V9fkNL9aMrhGKXacZE4FzL7VhQKB1YNwteyHPgsbi8iQm",
  "key31": "5Ja73r142PWNZ2x34sFrPKpAaXyJEe37h9f7o2vHuvBWxLZPytHPCrepuFaTpi7EVWprMqarjNg8NVrh6YsRiMw3",
  "key32": "22qvmnejT7nFKgeAH1Usi4KdMxJvB9MGD3ZgAm3tZoK1ajebBPQ2hr2Ewa6RVkasmnXFC3tEGJtcUbWEP57TD4X6",
  "key33": "4mNFFDUX5q5bwGNbEceGxc1UxLTL9W2sAZj6zhEN514YJ2TK8hwXnn44FYyJM9z7U8ngfFMazubQREe4VjG91iqo",
  "key34": "49Sh3Z12HmiACbrrny4uMzFAEerjYqNNRum8mw67k61RW9uE2FAczRmMz9fZaYtBXA7knHpR92EMx5jq8H1Avrpw",
  "key35": "4cCuoCbe2oD7ipSoCGp2Goy2nmiH7WxhiZKRW7AM7a6ad9zpYGc1twed5rMMU9Vsx9QEjbV4tBcdwchyu8cf1rtZ",
  "key36": "3uACiTchVAaSiedkXphNWLiuq4RWdvPfHtBB91V7STHWcUPYi1L2zQjSfivvNs6Cr5AprD3jw1En1UPV11gd2NRv",
  "key37": "62h9YtXVuEkBTe9KEmv1KRpM4NXVcdHLrjB9oX6Hp58zPHTH932fA1SNBwQEN3t3NqdRSwbNqVKHa7q9b4NBmaFk",
  "key38": "4yFtBNVbLoTviuhK3Au5Q7NVmA6znaKbHBgZExxzYNNKbEAoj3oswgc5vUigPcZ7vHkwkcHQ4HEL2aEjYyQaY48c",
  "key39": "4k5eHSiydZM2HkRSb7VSTNZ2pKqqPE9kKBK4n8CBZmUouNbbsLXV8XFzsgeY1GehspKZVPyp6Ezv5FPK1JPnegDR",
  "key40": "4215mzfAEK6nLtsTPFAtK2QS8sAE4J1DgYeKmtsttrCJYrRvnuWY9E6r5Qo49eY822Qege2qxFhTBa2Uxa6fYVrb",
  "key41": "63yyezGxkyDWkcM32EJbYJX1AaqxwQVHkgH8AW24vZ6mMxtB85QW7PgroBLk9jse61CDPEpPBvz62mqE2s4VTrr7",
  "key42": "4sG7FirdJT2NR1Lair1t5ks2W6SEWkHRMgwYMr9RAXFNhwKe1sEmuTSQ2RsJ7UdjoFnSCteUDRb2RKt6Nmxk837h",
  "key43": "64L1yEk4EHWsCQhFgSBqddFeoYAxsmpWQZsTWzZQmprBrYqAv9pLmpRvt8m73Jm1T3dFisodz2Bj8Tm2VGYDJv9n"
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
