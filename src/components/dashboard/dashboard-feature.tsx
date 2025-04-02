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
    "3GZSPoFMEmiHdePXfDVHKwnn2GBrT7jZz5obViBWDiv5MsTbnp9iWzRvT4AygBMav2i9MU2Vbx4oXcBtebygHBv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xVUMsezDYfo5FKHU68DvPAUP7cSGBnt7v13pw4Kp5SfMLiUUadvLa5xmGjizsSf1MD26kEXzvRy4Ucod3vwB2bf",
  "key1": "UKn5w9m1zezFJGCJPKB3ip9fRtywuVoATdFuS8F9q1fHmP9iVUZZzu9hdGGD5rwQzSFwaejNjcuWk63EqbFgAGa",
  "key2": "5JLNJ5Cj2L65ykbiSeT7mA1njxJawDjxRvCSN3QqTJTX8YiPeipM7NDGjzGfDmzvHUgu5ii7QZ1yRTo91jZ3de1f",
  "key3": "5oy83ovimT5PYN12kN6AyHMF1k3DBQHDqg7TLyYe9TxKmvCUuPxNBgkzfwnLqUoRq87N7TAEi3VzYFF9t1amEigv",
  "key4": "4RzruBUNoBuGL98JFMeEXMGJsu1wnJ4Adc65c11Gm5ctVtZ5us4GZj61jxiXfau76wj15BUsPoVwXuSCBfZjUyxG",
  "key5": "5uwBfrBVJojgoWwEZpFuBMVpyJYa68gCejrzRuEpCujakq18BB7Wb5VunGt3otMVFvpZFppqQbFe9PRqgDKobEYU",
  "key6": "3sDF4v3wmKqcBu5CpUUkpMHabBqeyZGWXcxNPE6mhyZPnSWbTzBLcJrATxM1TLV11jBKNR36z5iE4NqA1E3afNfK",
  "key7": "3V47P4jZ6xteU6pVk7T2Yq7jnG8MkB6j2WQFZR3E1XGk4TJFMqxBcykEnJVRT7a3jNEJCtD4JFvte8rQDqBwDRvb",
  "key8": "6QMSQiiAbrF5RzeaSTLkR7DPpM3VcHNuQ8qHqoDCf9RcZXU76Fpn4aKQp15g4uzJc6zjJWai77DDzJErRiS29Kj",
  "key9": "2fe1ZY35EbLDPUTR6eFuUFSttNxzTmh7cDKTLc3VZzLeDCUWopD6GkGfwsxhakEh9Grv3uZPA1qcYL7Jem27GWob",
  "key10": "3LS2gdird4nKxubQxUgZTRZJb4UmFfMUn8b6N3BfiFE9G1GmEcVvimHYRhhQT46cNaeu7pWqGwwXo5baaiHvKpv8",
  "key11": "2a37nNVdWFRsoA6UzpFPgqj4jfWXPmRWMuVvgDTDGdidzUKcJJLhNBUYk5t2i5nJraSfvVLSj86BMuon3fyHTBpf",
  "key12": "2RKwPnLyArUhDMYMqMsipdmHTopYj4PhDsuxnb49SxNUjahN2hxBt8AViSjBMXXSDx6qsZqhZt7dQJE29QT5NPL6",
  "key13": "qkG4cMTw1EFGQT3Kw1AURveTFaT29fFEhgMWFi9Kf5g7cpAnGbSqtfwMbnaDWMofKRL3SzZ6YaCE8TrCTq9FV7w",
  "key14": "4UXijEoQUBUhJeth2WaNcJHBKMhudZtxbsxaHz338XiBNSTxvsXwo3xVfEBCtF2wmdem2NnYdwcMKeDMSEDDjtMa",
  "key15": "3Bw45E6BDedQHUmzp4axk2fr74DmwB2R8WttTkJzWHpYNAfADWbToVXnEwALD4MGQWhMRQK81kXvE7Ufnh4hM12W",
  "key16": "4cQjxE8YRasvTn2XNU43KfUdmUoQ1DcQ9iQUw8LPgzqmCy7A4J5HtqxxiFBrB8BPfBeKP4W4dpGba1WK3vUHQotT",
  "key17": "5q8WS9HdteduJerQfqKhzLLk1AmCGRpjJBETNgXt8nxv8W7YBxN8KnyLpu7XSvs4k7LK7HSJuw6ejQTjM1HZPL75",
  "key18": "5tUhSCkXJr23x8FJfJST4B9t6Bg1B8JcQowovReY1PTX7de17bpbgVnHHyzb7wGbVEwxpJ8G5W9JtGWys27QYUzs",
  "key19": "5ZBrsysLJQe53GxXQrGaCfD1DRGiCHaDkArczbsyzjo4KhzaYEwwknTJHn2PcKMGZu1UrYAj1tPTEnPwnG1FKZGt",
  "key20": "3LdgjSPd3mJDGR4L9UJqsqb39JjWC8DpCNGCqBdCSR6LrhGePy6LNSXVZrmsdbEfZ5pmJWHZ1ce5gYXwcGzHstge",
  "key21": "2ZBJm5Wr6Ar1uTGZV7bvGTYCuQWM5MQuGNrMrLEdrY8MpRUMqfsLSUJ7uxWrQWr9daFuHVvuqxTCXyzrgYUQnwy9",
  "key22": "4Ucwkpxz7eRS3qYwzREVeVwYAqX41atdeiYBjdKTkPsGDKh97rggPC5nzfUYggDt7kbHqovxuwESrUb64eEjPg7a",
  "key23": "5va21rwyEALzvvqEREW3GDNQ4CLVA3QYDGKDxj3hc7DryeHDnPk6iWfvRg65zco4tHP4pLWYLwfH4t3cTBNK7Lje",
  "key24": "3FFbuAxgsHtw5RGM7p31XJDhXb73psq2uryQvzgMY7wZtXGmSK4bLHF9GbhHm5WPD45vx5zHYPguJA7nZscvmbbY",
  "key25": "5kchxB5atf8c7gzC8si8A7dBtF6cugRdBpD8CBK3usSqD4xAqvdnwxYL3Ysa2oTz35EGdFdcSbCNxh4Dk9LAZvyw",
  "key26": "57wz1yQAUjPXPrVL2kgNmRFcc4XrMrRKeqcXvYMdk7tTbYvZ2Cha4PKmijkGaYeUL7VmespWZPchDi3eTyBTho65",
  "key27": "VVQtw3Z4auHNV2j86fRQ33FkcM3RR4svDgpyVaNEzTHuED2Lvs8dd5jy25KUjtq2UvtAPihHxbequ2KShbjAPkv",
  "key28": "SxXZ3j4kourr1W3qx5cJSsS3yGUdRr1YHmMdNsx12dQNG5LcVDKHgAVGDBawhYdiWFXmgA1eCrYPC2a4EbjFysh",
  "key29": "3cAYfb6bZKdiepcvFpRSdmASXdKVrJTG1W7noQ62Skw376Xcn7eTJF34YXvYDxuTn79L87B2Q5MSzwAvnQVBGBtW",
  "key30": "TJNQYKXXx1SFd1bD7T6VEdMB1zp8hhLK8xk9mXpifzhfQbZVXhGkEpjYeDsJyAaUEVL84Jjg939PNZ9mCJZeZvb",
  "key31": "5qEuGnfWV1kt7cnh8WzKu29CrtdFNTPerMPVUrK3PCBWsAnGB3MhNgw2nFqhttq4XccyQ7AdXyWEouwAs6DByyXd",
  "key32": "3JtUqMPkiesiWZY8pUj2DPEJXA4gkT3W5ckxzUBTX25HZ5y38PBZZmQmUdR2WrpN7Bh3Na9eL5yaoFuLm1B5m9Xk",
  "key33": "8UJ9igayT8V6J2SiUFaRRacA9EbNusqi3Y51ocW6kz2dJxU4AmKE7cXZoKtDLmN5ugvn2EFZH5StyzhpVfvyHfx",
  "key34": "3pczXLihJnxE1MvYS9yaXb9wg5qZcXH2D9iTvoE8dH2bTFSXEW9PGw6uwJ1zQQ3ePypd35XBY4mnspAmxNygEgRw",
  "key35": "2fxnJH4NujYuQntac1BBu5nBeUTkdy7mewb9jYcBuzP43hsoxvjP8t1EUpenzQipL7atxumTocj2Wsz9X46ndZBQ",
  "key36": "465zRuzpxgRZJjt1NfKY5UGbvxZahZUK9SxBLLrwjaBNXv5zdcz5qCsQxVcferYQ44qcnYcwd7TLKbNurkRdUK5Y",
  "key37": "4fNE2CPMnwk1egUcmw9kns21JraMw3Bjwrts3zmU6Wqof2Km8vG8yFftFNCkADUqV3dNmyJnBG1as9bd8JjUiNZY",
  "key38": "4J1jMKvfM1Rm7YNvMVw3zBeBaVFnSEMjqNDwWnvVRKK1ojpZHEZpqiVkmb84vgcKfjXXFZ4JojZ1iensHFF2KfDR",
  "key39": "4mVPeEQrKsjjvcQD19WGwN7JLThw4j2M3sjJdFxzC9dLQ5po3Wxwvuqg6nJcwPKQEThvYSG5LsuXd6F4vWzEjMfo",
  "key40": "5KVAyEp9hYfeorJZ4ibCwjtFV1i8WMXnVyRzcr5C2tEhpU2nSj6i1ETeZkbBDjdsLn92cjpQCqwyuHCnEp5YWxb1"
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
