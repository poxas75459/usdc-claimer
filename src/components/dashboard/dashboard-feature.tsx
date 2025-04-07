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
    "4PRC7KwUAxR8HhEMHTJFrYPxHJi6G8XtCpp4zHvubZw7ouD5CUuF7tsGyeqn1x5KAAh6yUi8ZoLkqUj8x8sSRW5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7wX1rxNLueb3yHNJbnxbhWSHdJvRE7Pzktbdric23zN6sbPFcsiMudFe16zzDXDWzEzPpXkgfY4BDaCskWrn9Qi",
  "key1": "vJQ99DKBcC92ffqhwHRXmGaEkopQ9EtRf9Qcqb9ZJuvFoAskVJTrrG3QkLqDZQUYTufknP2oEdLfwNgTMXPVFHK",
  "key2": "LxfbBL4Es5urfmPEUJxYde1ePLF1AzNbcmeRPyTU2GmPuDr4evU7VhK98RZ6m22FNPJbqVAZyaYeJutSAG6wciE",
  "key3": "5bGjWLp1o73QPvdGi9S5prrsJaXG21SLWgti6C2ycbre1Rtpc5D88MZGbJsLv18fQjAftN8NqJrVRxKPYNWqLSPo",
  "key4": "NyFmnSvJ3VSAQKDmUQEZaydYytKaChaQE8fh4EXPaPYzC4LVmVfAAWtStrJuA7cxMSN857GDUc538MyPi5JMyfX",
  "key5": "3WbiDn8WmCwj4FgMxHDpt52Apj4EuxLY9Ce18cQUmCZTAn7FMXev9TpYTArn8HoaY1GxJqnPUUUo43LseVer9vRA",
  "key6": "3h9W8QMd2bZQXBhe8azEi1W5ikPtjqpc9xBLXfU6N2stXMhqWrWubhATxXecNh4idES5TKuAPV8B85bfXdsG2yjE",
  "key7": "3vR6FtpUftYZSWNW6FrjdRRQLtFapjy469BhTj8SaJzpY57vVNhVX4XukYzXCixSYc6H7q4bjQhnZrAyS7TwdDhE",
  "key8": "5HaLfjX4D6eb6BzECS3vF46i9KQDiwVy4gSkoFDUDvEu1zkYWMpWtNucBVUm2uA2z5zLmuAF5afseKhpfwp2B2hf",
  "key9": "32DCz7GB5288LtbpzG41ArvSURriiHfVgcRaBfsQNWYxPXfgH7utiHbX5GrLNj1UaxUjrhKjuuSyPdaWVjofhPNR",
  "key10": "2kUh26bfnUmKVYaXLB9u7zoNo3kRcKHJi5Gjxf5uoispRax3czouyzK5pcgXF2pH9QqBm6eDEkpDfuqxLrXEb3bL",
  "key11": "2f9KkUHeNg3Dnb2xNB9z4KHov9UXGMnUSv1TEQcP8weAQF193i16hu7ni59QUtuhT2Yc2qWT6mc95dzkoYQ3pgRv",
  "key12": "3oGvXXvK3Utk8kRT4hnQG57cHw19W6mdLmrpYwYtnqqjxQq9UoPXrUpqniTAQA5SQtfMzJ82r7eYTLp2pUgVfB9B",
  "key13": "4JcbHDCnMtiG91GbUmRydBJGWobGAn4aZP8Dyv77CGxwZ3qe6uWHsdCPhpwuu6en2kkN9bWQ8d5TZToi2Z5hAU8h",
  "key14": "2ZL1wNnsmERbhAaBUyLdH6htmqVaGR2wVXa47P5HXkXo3eLh8iU7KuuVKrRDx9cCoQYKJGvcDgi25evGAkE4HS4T",
  "key15": "5J46FKzxgh5MG5y9vYELRWX9UMZJC9zamr4uPP1bMbYmint64icSKYmb2GLhGQkAZLsaHEJLZiWkNWCv9S6JXoze",
  "key16": "3ukBK86kVbjHKUq9neai1e6d1EfrCmETTuMGAKfeFJDNiAKnUoZCDZZdGwAAB6tuJBkV163kLyqVGGDhY1LSkd3Q",
  "key17": "5UyVTWgzg89PVkSGD46yVg2H3GEhUvodDLhHogbPvKGfJVCXu8gvuMFsSjnGxMw8Q9nfs2yzhXCmp8ibz5xzxtQw",
  "key18": "3oJHLKtNP8Fv4QojHAa8mAbMMAEWX1MBDRfyq1krDGxWxcQDQTGKr7qX7MTa7rcnSSBstM2dGKxn7L1TctwdfKRQ",
  "key19": "QKSyBsza8Y4pYN5VZZEYtPqC2ML3iSghFt2wDatEs2TBDR111dinyAuhxRpwwqYostjc5cSv7Jkpw3779kLpWeX",
  "key20": "YodJgBKxhM9FVrngyhsrgZLiGNjjGbPFGMbMqpo33CS2L4TDP6SDc8MwS6XCwtGnh7QyKeGCMmRDC9WGbc8VEk6",
  "key21": "ML367f8d9qLv3PeggVkL2BoNUKpJ61hJC8D9AiCsNcpaechy8DFA4iihCagx8iKxzkA1QptWGHWD3wDH9HeGuev",
  "key22": "5PEVUMrb7r4DN1SQqJ2D2y5x6gsvVSqB3pSMsgiA4mebUp2hh5tyzDJRnbRogLvmmAiQHFX1oaVwK7epYHZ49S78",
  "key23": "5WGf39sLA2RekYpuZvjtBt2JEzeZZqUfS2ycMBstYxuCnMuUzRaEWA7DvDkUV7hUFkowdcjmKB1SZzM2epevPpxB",
  "key24": "rhuAzNj73V59kPgiRWwzQFZkY2hDnwsKbihDLSnHbJiYbcj8aDUxwkskz4LZhbDexWZEFGdawYMwzMkHVYbiiJm",
  "key25": "5M1BS7M8LcemyUraBgK8NJAVDqCX6mccf6PJJi3z31rUMEkC4aegCeogkiqPT5o3Kt11D4aeirXpVvVmybAiWveC",
  "key26": "3MB9k9od5Z16n5tZUeBs7R6bKMKDiWXfq1bcTR4Ppr3n4HBJFA38F5qACLaCkNgEwCjKmdaZqqWXrGhoK9dXyLRk",
  "key27": "5AWrKhSZXTyL9jsjxBbNkiLanQ7eyoVqf2SfYCGir9mpXpSp1HURanhCHcwpwKAWyew2rce8pJjwE1TeXQcAqm7Q",
  "key28": "2vVpKJP1vx9DJ3BhsDnyXzpjZZzr37LNy5uZBYnki9K54bcMPkmd1rn1wBMjgbQpQaREx64BLFckPTtTDTQCFx7J",
  "key29": "YByRjASr33HhWm2GkPGHsZ4MUYpoNJeqhiYS6cR83RZZJs3LBwBqQSEoodn2cNsTFhLUNAG5vmzRwgHesjSkXdY",
  "key30": "5ZWKdRccFWgi2qWx1HtwgLSVEHVAUhA18SDV8YsKGs5SeKn5dZ7dYYwgZpxx89JEZ1xbb1vnvD1vGXW7EceYMNQy",
  "key31": "2NAEZKuHKNoMiwhXwpQKap7CSwRkK7GDR2tamWrs3kcwVQz61jjgKXTSbs876uVomRXDHB9RijWWKj9aA5Nbfh4P",
  "key32": "2wrGR2o3mECxFGHwQ7wdUg4G847mjUAaQPA6wU9KMoYJSyxopt98Qt9H6ZSqJNufFiqvJ8g4Qnnvc4Vr11orfATZ",
  "key33": "gKEnENHnfgcdjakoBgkEaxmihV8jB8W7rbUNzUXZXj3BpQfEcSHRtDFks1Jqnkk9VgZw9FzJtuzXKrzFjNiXjjQ",
  "key34": "aeKZFRbdybyW7ukyq4uHzhx2JjwiAM8oP2WZiLESca8fQNixVyWxpBNsaVQtXdyo3ddXejpW38tApZ5nTxCWYmn",
  "key35": "5TTip54hp9zZzmFw18kWzsUQRiWMoXZA1Upw5FMEP3UXemvTBCRKxd3yXLzNdZRyiHorwGcxtW3r4oroQ4mfiGGQ",
  "key36": "DAviHUHfLsMUxboYo8qPXtopzk4rj6rs3QPDYZSQHEb2GPg2HiVfudNrNU9QEfo1m3BVMyztC4roCG9WurVxuex",
  "key37": "2Yt7U64ceA7rEVRa4Ywssab6zSVxRW4JYvwP9oVDiFN7KLkZRKufettpTctFJDWdFtRHSeBcx3GCAKsFR2XZsvh2",
  "key38": "49WiaHTCpA4UkaSXoY5Cf1o4boXeF2KVSBMG8HTNMxX9QiTApygWYciAcYq8Aur1rGB6TUrX1Lazprr5ozM2jUUq",
  "key39": "4o9y4uMd6qL4mcV9gy5hSZKDET9SPZJnDEM1rsAqwd2mYmijA51sfUVJas2q63Qnv5k4tXHY5q4y48TADyF7ti8X",
  "key40": "vGg9q7UNiJpPm5skj3zYBqji3fRuCLpESjFzsawpyf313ZU4L9a3JSqBM7C9UWEo1FFjZCfTFuh7cdRwJ7eDuMb",
  "key41": "2opWa5vMGj6LUtn8QAJKHUmw7uag3QPWQYZe1wmeJe3HNbPq1boHWRgirvcytYWt67E1v6N37zZttQ8ZmjkAbyww",
  "key42": "5vbSe2UMWNwoFWUSrP21k73dyUGL5ncgTvNdun5YKGcrQcNsLDMbeHBep8Y1fsoXVvbJAm4pTu83zW5t8FhBUd64",
  "key43": "3XpoTb1UVoAqxwihbFdSRtLyaj1oTZUyBbMdeXyfgLCzAhWefhzXwkavFQ9CxSpbXUGezpR7upJdRevL7T4zbo86"
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
