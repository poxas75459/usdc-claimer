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
    "49eXGvPGr3bzN3GTyZBXTXsmREbZoWo7HwrLJz62XnfkEpDRtbKBgro4EwJEBCz3rjNAKec9XZ4XCrcirW5NubBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oXhHQWKcpajoGJAPmitpLyyd83HWYuvCPYi7vhXqERzHXYpXFV9yMXV3DZ48cffaNWkmSXkFx6hyupuemY8fhrQ",
  "key1": "5gD5c2Q289Lvi3LXftgSQzNMSQPanBoL8M17EWYMH7JcMtFsLYs5o6PPSTKPgUUiMf5uquEuQaLCbe9FM7dTrDPL",
  "key2": "42R6M1gm3QTyhsJirQHVRtbS8GmBDp7x1rvyJ6rB7u8Gqx9o3j2C6nkFi1Luye39gJNuNUqpKmxv8c3DDpPw4U3m",
  "key3": "4r24rUfLi4g2kys9JLvJjNBx964bHwZWpRYb6zAmQvaQUf1jfCHLBWF78gDrQFS3FwPruRfe2JY1WjqSQGsGBu6f",
  "key4": "bbwXeBj2EfaguSX3BErLX7gJsdchEs8BzgWDnFG8HE2PoTkL4LUEYJyR7TtcLjoAtq2TRfrFAG1CM9YdxarMLoZ",
  "key5": "3ikNQGA6VaYRcATD9JXaB4dRzFrnvUMVXYkrohF8h8tmwGyHCWHm6JU8tJ5M6DTL3pvQiVQVzPDLKv8AcLDqvB1F",
  "key6": "2AkJXD3N56ziAYK3mzZ3hZ11bNqJWmxmnb2HsfhUdJ3fgtmWDFEq4XV4ZvCjyJDU2yBeE1bV6RVftfvqddbRYB27",
  "key7": "3XAZT5wknkCt7DHUTMMoVgBhacJ57DvYSeDZEwYJGEopBwRL6tnUtGcDHRwk4rmtiHxMaNFkgBrzjn7pGvN6DiiB",
  "key8": "4fDNd8F2uF9mEHFMncvaTMVPNr98HiCeW2Rdub2Jv4tcw5KgcNGfVAA4bMHsVk8rZ3F5vGu1EMWehcaGAS9HkH9w",
  "key9": "3ZV1MJCMVGykoZ6YN98E5r1rkKqw4QehJTjvAu7CLJndPLoJYZKHa442ZxCQfYmmRaZT2Vev2EKtFrSGwDLtY6ks",
  "key10": "5B4hfHDMdMWmpbHUVFsR9CgDv4VDD4uyCyWVWMJQjzHSyw1ZQwmhLnExM6ry1yQKPUR2jBPFZaQnyxzA5H4zLKNi",
  "key11": "54URCPqbn4aL6HBzsU4ojX8mpwy4V9WTBsG1JbafUUJnQznoGX3zv7V6DDZ4sjRtcB2hd27ZWYG4qcMg6Dyn2a2G",
  "key12": "592eabtfBWUujjtaLFTxA85g9crjDUmik9YyNBiwBM8s9h5xxibXWz22P32VkB1yzeoh3Jdjwb87ymi3dTw2mpqp",
  "key13": "4HRBFYFEfYsDSu6rrkixMMgSpTUshX9QxjQ2ezkVqSw5vBdQ6Tey6m44hWmNQ8nYhDBUmu1NeCCiUojLKsAifD1g",
  "key14": "3SN234MssAxouisjEom2ePkZYxPqQA6kneqMcwfuAxrsxdin83Erf9h8hWLh7KEGdjZSCsBBX4bmbZ3Gv23SZ2YE",
  "key15": "2fzd7ZvzMYpUPntXrGfeJuwLzNNKAVse6Xg1Csbu1GrPuRDUHVaxwHiqUJfSej7GEpzWJxGzryxh315qCT3fTAop",
  "key16": "4zoFDNsMS5JVzRu2dHwb3ksL9nrKfvspzHBVhWB9Z17U5TF7oNqW5g63inie3YYCpXZDF2MC8VLQ5AEUjPvxXDgL",
  "key17": "3qSktcA19GGAkJ4pn9zKncJeB95ZgQyQH1meuSifqhmd5k5d5q3mAuThtZvYRj2eKCZC2PKHLjEDzfdC3dnKoaro",
  "key18": "GAFeHZyMzkGwNceyEbKr1PTAXmKkLWCvCiHj3ibBzFvbuKNCc4X2KF5tPhEybpQBag4aq3NJ2K2rwC4g5YVovQJ",
  "key19": "53HdPGnrQt2RmBkB2pdyFAVCt1mHad29TN6bheTPfvWL6Cs5RnQpudjQs5i4kf12UEw7vWgyUjraUofPxk2ro9Ha",
  "key20": "5tCjk2TaPz7Su7Fm6mdrgCP84EK6FAQDmSjQPQXvfDFcY13VAKtCnpGdtE1cRGwjZNBJo31AP86QgmS1BwSe2UYj",
  "key21": "51eXbZJL35cdun4rGYSPAwUXpfZ7WzjCqxuzfF3jCMhXJ3vfhYy2pGDDzPdytAAKqpbfSh2UQRsLmTwt2Ck6xDhc",
  "key22": "64qrqpG7htjYZg6iUAeb2HucziEQVf32vDhJv2L8SL2pTPSvLRmxDF2c94MVeVWrazmb6tuo6YpdJCnkteCTVgo5",
  "key23": "2WrdX1jieVmrFW9ujKLaP6uPMTXTNUfPXxf7R4Jy1fmN6B1KB1Av6jqxFhYaGrQzFt6FF3bjvurKCU4URnrmGiek",
  "key24": "5rtJNZrohT9hR9d6wqJciKVzhsEfccEStwLUU5aHPijYfUN57b9MEnxGHwGuBbdUB73aD1joA9xEL8etrXuTiE26",
  "key25": "S21ToiguXgXcGtPrx87Tzsmc6nRFu5FsGf4WRLQzdUq92Ncis2zt12Dvce1JcSH8Rc7uZbjbBgLj8zXY4MB8ywb",
  "key26": "4EDmyKESUnAQrBatqsdbedX3JRhf4EjQoo2Qi8o6rqjzzmeHYZ4QpbHdZWmuKmQWyKjbmj9GRmWKqpepp2H2Tqit",
  "key27": "3gC6TGK44QLAyHRGT2fVuJd2Pv6T9XcfnN4gQBHvX8BDaWHxYL5WJogyd6L9PG9zHgEFmKyiAZ4Z6g23QAEJWT9w",
  "key28": "FxwEBBHYZXHhySvheP9dSLDwF6VwBG8ymsNtA4azUswZC9UEuBzWCKzFcGoJCaHR2vS69MbHJCJqieNtRi7CLUc",
  "key29": "1PnQwrZXeTiJCZcnZvnjMgHfjincsXnvM8ELmCjeiSn5Seh6wkL2JKJr387tVruDCM8Zx5ZHVu87Gu53wKF1zbX",
  "key30": "52EJEK3twnb6zMEPMxdkmbEy5aa73HrvhZTVTGA7fQGuf4GmjjPwpu9y4XmzFWhCwmuHXXDbnAM1Af7FgQKFKFd5",
  "key31": "yDHsgL2e86pnM5KTGa7LmfiAcXAmbbAWAJhoDAdW1WY2KBRQNcFxJaiWMJwaYdngq3b3nBxBvzbtFcAqS6NFGx8",
  "key32": "3boiL8gSe5EeFSwoXcbbpeNQSQYCeSVDvdEWAwors1Nuuu8b5eH47Zu2VBt1YYSs4NupYpGgZrWxwekwtMy5bvcT",
  "key33": "2Z1sMcazruFhRF7Lcdgq4uv2eTze7o9Gu4fTEgNzv6Ynr1HUHuGLFUXhdTPPeTKgH9DwXCqEdotoRyiFBbmPk7pv",
  "key34": "5HKQMDqZMqvSwHkDQzqTw7t79XSJ4Vpua5SC1wA1bJJWWKw8ncuZvg9Q9tyX5uHGZ5zGqxgUETZcF8mf4sxyxG4s",
  "key35": "s3yzaFMP99tWHiFsLQprTEWLZaJF99xVRnoQF4hts2B6MAQK618pnqpFR61JjnTyratPozAf9jZrKD89RgrQPF6",
  "key36": "2DdxQ2uCBYxdo6Pp2ERcKJGNAQ8smVc34dAo2nR7WiNWfWuM9TdC5khYUpg1piVn3kdS7swuMhpKg1varYors28k",
  "key37": "QDNp49aYzAMDBXQjemaZGLySAuruiD6oDhfkGCbmqoaXv95tcB6DqgE6BSu2zjh4Eq6y2mpZgL2MMxYmxCuayXD",
  "key38": "3KnNubWUpSg73KFPGNBRpzYN7BqBzkptJRLbtZKEhJACUBBuAtW9wzAxGBp17qtPqsKZrJhED3Mfn2XJj5hCp2nr",
  "key39": "32o9z5GKAx2KbPbji8cwzjrQB9ES3fy8jixLrYYCgHenrrHT8mqRv6hAiZWjMxd7DRAwnDkFX7qgV9GC5r7xmvT1",
  "key40": "4v7oy3WBbwsqJrgJTBZgdt6efP1yVDnyFY46oz6mqmQPERU85pbjgsrsmA2A9ht1MSAN3tMZFjrWWorxa1EcjXra"
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
