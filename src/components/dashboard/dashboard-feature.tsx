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
    "4BugwHQnEAgx2cahwAcxwXVv9QZbYoUod6oeQQ2fPtgVJ4ogbngKzYAf4U6uLWC21KVbtd87bW114NMF9FgzjV6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fbYLEU3wwi5fh1cSR9vDg5qPcxcNu3o2HtG836owWLbrGrrRe6nfCpuuFnPXzwctELjywQz7iTUGKKNEvB5Nuko",
  "key1": "5A3dfD5HpJr4D74yyaBosHuyS2XR5hxTsGRRi63M57srRUyTk2gE6C35hfnBKpcHXCTZmoCS8Z516Toik8c6ysey",
  "key2": "6qQ3J52ntM3VDjU33yq6hpWtcEuaCJPCuX8FYvZrhtSFwVaMEULFGPyucb85EdhTfF3KyQ5yUQ1J2bUSgs7xj5P",
  "key3": "2ZdtcEyC1z8g9ZTXfuTAe9vnbzFGS9rMRZNZ5sFDCK92LmxQfEtRQxgz3poZD5iqDyheTSav8G1VGRSkBZKaKjjS",
  "key4": "2MWtpCqbEjjYVkuUKim3fs4SDyr6mwUWT9d6ZpF5kVZD83mAhep3EDf4KnPadJQ6TdnoazusEm6SToy2gqrzUVHR",
  "key5": "2VJZxnUW1g9P2yLb7NT32VG8KUKCXFqUbpr8MT5p6rqtxEMbpQ5CqHLWcuUZP8aTKYs89owDU7sHMG1iDVaeXqry",
  "key6": "XJGfJ7eTkQhPJcvCt7kA9tEBsG7KjSX6X137yj7mDzxeUYkfwyQfvdD5tRH28ddjRu1DERs9tVrUn7rkJWSPkoc",
  "key7": "5gk3uhrwNTTCRZ2xP9ikm79N61h59KXqmGTbn1WgJV3a1SKq8wbGRhsAX3MNu4MXkvvgbFezAyPQk6KgNwBMfUVX",
  "key8": "3WrewWMN2j43AynM8nWZ5YX1hK3ormYEXKsXZmCyQavSYAePdPSf4UUmzfpyFjFnr8YNga1d9UmtmCEk4wDGeNi9",
  "key9": "56CCWqTqgTtHYZGKBn5eNawpTMmLoVKiv2s4QqBTc5hA2EuqoLsxJvbKxJMMeSon8QANtqGPDwE5Kd4yar6AfSZc",
  "key10": "5pecMJvvCRMuPmhbMS4YhNVnfkkaMTPFA91bsUEfY39e9d6FeVxyPbo5U5Sy7PPzTgm1RLzk3et7Y3BfiXXp6Bi4",
  "key11": "3sYoucSWkshxmojVi9tgKWjH92ASrS8YKd23W1oLxbbEQSAXAnEiR3osztfBxeLKVYLo1FLccJgcqRruus1gDXdB",
  "key12": "3XgF1GAeQ2nDz8R1PP24tHPykpgLVRd2kBRU3DFVKTZ8SXvDsvdK7TcXtRL6FaUbGAhJ3o2MtL9AupEnP71wCEUE",
  "key13": "3omdkcui828vFj9af1JEoGBUXks2v1RGqfLdpBb74mxSSrrybHMXtSUxGESyZqC5j3R2tHzhK39fzB5U8X9GB15K",
  "key14": "24opGEwNYe1kvHuvYRMmQFpPVhs1rDqkR8MufLUkevRooWoQq7gwdibg88f1A9mLqedKApgV68GCXSpopmhoFiSh",
  "key15": "53DYMSL8x4Hq1g14uq1EzcXB1nVBgKD7DzGyGbwh3TCg9v1BbUHh7gfuWU67FcHat24MsGjeB7WvXHZkwX3BCJhf",
  "key16": "2ZX3nRXGNhKtV4sQU56FGTL3ggvPFJdxesvrLRXT3wrD4RdoRYSwpwRjPFJSeCMxTRSzVyuz858qpkpefi5PY2uL",
  "key17": "3U9gqLTm33zaXEuVUp3w8CuEgKLmgJV22mmZp3QtGbPWAs9KCB2mo17RLfmTM7J694dzajec2XjkZzPoL3w6yr8j",
  "key18": "oYpuVE2qyqxDbYkyJCcPQKTLiAXAs16SEC3V7FqL97Zt58ycESMPhuHX2k57CkdXzx1vsx9HaSQczXdtrQ9Zw7b",
  "key19": "2fPAAM6qQD7Kg1dM44SKDfvFuRrk9ptaJ6HYPVrfjJAL3fRmMJMFV45iYEMJeQwXdrNeZvvH4dw12wH8Bn76gwdP",
  "key20": "2szwg5j4HUwK8skt1hNP7Eg95mDWs7S9zLuxbcvnSYmWYgpZAM68GwDYYTLo7vRM5bJ4pjsAZe1shFTpDscnsxuW",
  "key21": "3Kmxm68qKf2xrt2tywqc3xoYG97RPXi325FK6t8r9TNAmAeB1LZWJQ2LtXBSWEYYnyh6NhuEQTaPhHjkfPueLpDK",
  "key22": "5bWDW87Pn2hSF2cRRwxdyFNSkj4sqXcfxa8pdhPgmhHTTpFCeVcw9SMpopxotD7T5xxzkAeLnxwdRPHnQ1uLFtGG",
  "key23": "UDxQJwy9bjD1YDMBvDktm74HQrgZEZsdmPHayur87sVrVYknC8SbACqJQF64cFVXV8euqaCGp7bwwT3eLhXLVV7",
  "key24": "5QXktJW18xbi9J5fD76v1aHyFVVo3NjGQX4f94s4wH59RMSmFiyPXBmzPTN5SEYyYG6GTWvXDY765ghPuoY7qy2P",
  "key25": "4Aehzb1HeyJ3YVvhksAEpPJ3zEhg7Y5GwqQzLGnzeGTL66RJ1woggmA7UaPoY3QXNCtSLGuAxquXYUxm4uDrx5vC",
  "key26": "2Pgxx6VYqc84v9uNghNQypGNMUxdo1x6Avbt5EJk83HgEeoUccBbKrfYpwv5TsJcZ7Sj26ayxDZfJPMGgtB7AUoT",
  "key27": "5ii21DevzaMwygz4tKg1yKnbgCthFFzSA7vs8vZBGQmqnTbApG7rwnUQatqpmkjxLJxhvohP2Vi4jvsa8B6orGhf",
  "key28": "5FkY9TA7hr83bvUVw96GGkKkL9TxvseYHPCjs46G6e6Yt56rQYUYHZBqZk2cMiJJqnbBjivBvKtigaicG1cQPCHq",
  "key29": "2ReTS7xMaY7DN2cvBbPCcB1gdQzSScFPjCNuaKy6LsubtUPBPjhTmgX2dCAnJMpnhd3278zusEB6GdgK8yBLintS",
  "key30": "3ymvW5692315VGTzuuLShYzMWezs8arjESS7oUcaUJuJ6u2RsryWiNf4z5BVACpqDtBKbKbEHiH566hk2qiMzy7h",
  "key31": "5977jycNAmQbJQoTSmq23ZPtig44kG1y6Y5xBrAzZ55DRciSu37KxZxPNxZAWqH7EbL5fChaYoh9FCKCuWAwVeaK"
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
