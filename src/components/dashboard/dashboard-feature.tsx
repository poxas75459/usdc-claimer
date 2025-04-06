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
    "2o9nnoRBrfuDUMyJcYjRHvJsd2SbWKeYxhAAYkwLvZyiYMAb65cJWqyrHMd9bvXHuj5X8NymxZfCKFgvfbybkWiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dMkRcvaG4x5CJWzF4XSULfyxtHnQxiqgUQ8HDKo3xncGek7G5NKLpFZru5SaNsEyMHf35NyBxrCVLpcVVv1GXKU",
  "key1": "2M6FSi24fEC315nJhN7qqsE1PVRPCn2Msh6vxe19guGbSL813k4BDzhpV2ndDHvvvDd6sAbyYRKPzEy5HBHPuCrw",
  "key2": "23JZeuCP7LcCa6jDrau8nwYtVfYycfq8TRcgqnB3TsLdey86TpXAWWyv2gdggvmqpQok3N9w5TJuB8KXgs48XJD1",
  "key3": "zD9CnkcVngDRXFECbo84dLu7ow7rRFEAF9vb9xmxXkZG4XGWNK4mekFk1LeaiiQqLme49kPTfVmBPqgTeNF1KKW",
  "key4": "2eU9BBuR5vJgY6JQf8c6m5FHNyAU4Nu54hExB38rku4goqjxEstg2hNnw8Kc1N8RSjF3ciCuGvJyptc5tGmH99cg",
  "key5": "2NgPX9BE9s9qVvkFWNxk9cpTjyLVFMTL4t9aNvg6abDVavu4WhXT5K7CgRDHg3m5Q9HxbAcEsBwZk2Csm2zMAxTk",
  "key6": "3YbV5zyzwTEfrPDxWhVnmPjv14VD2QJuuGrA1kVCv76XmECf9Lc1z2qoDcnikQGkLdrwKHoENNn8QP3E6RgFYJYk",
  "key7": "5ZEjYDSSwxXS7znkmK3UtSdpqQnH3qajb86A5zaP83ackkL4R1LSweWdA2tTEk8o58YTY92iFBKke77X2EMyuZSe",
  "key8": "25crP8FM9UBseFXcjzPRHvybnFF36QGiHf1cVLKhB14zH77jMecmrr2dvN5tPJkKaSVBiHBkADDY6PmEjqRGvpfC",
  "key9": "5zeJBz1yerpLAxYs5YHkcQQh9wA7xVoBRdJxoHkw5u3GmqkLJpkiPuL636U4VuA7kREjcQ2cTxxXCfepc97sFw2t",
  "key10": "67D5J8SgrPiFdSQGoutek1as9dUoFQjauGpbsLkeBHvQjB8V7WfYoKWumt6ymYZPB4ScCMG7zWA5KNKKTXwTMzeY",
  "key11": "3WPKneWwMVgY6iDUL74nRVCsNVMhNG1bHukp8LPE2RA1VYDHh96J1RjxPWzhDzbGkNhnA3ZCSEzDXeFS3GTcFgHj",
  "key12": "2q5ZS2Bq5Hd6k1RB7MdZmpEN5zyWWS8TeF9T2J7nVf8upGbz1WiwvJkfvRpGhRbQKBPPNQYUmVvrdsakNc3FZamE",
  "key13": "8vNhfFy4m7RMUvqP4ZDRresEHiiU4Bj5275EaqJ5aXrGjT8qvKErZz98npKmvPjzZDQKJxSRyv6m4zMgW5UsQU4",
  "key14": "4GyVV7DHXE9Bgwc7d49FEXDnLciihPWZqiUupHEYU1gkAjt6MNMMy64VLQTPYN1i1zRHGgYLqK7dRSKUEj1vKATC",
  "key15": "2YE5Jv65wHqwrCD1mcwF51KeDwQMyHmfrEpFtTT46XjCLWiMgrgnwzZgP6zD9sK9L4LsnTszDrnWMxuh2hMQQ5mc",
  "key16": "2z94opgfiQ69wFJx9WuNXAvK1NA2xCKHCYKsYkgJTL4oZvpQfeT5zKpDAR5aqAdEAk1qdQTWDKKMCEzxdzL75tST",
  "key17": "4SgZfE1Tb5H89tsc5vpZwZ98jguq2pAk5X3iqBEk6dxskM2NsxN6wYtaCAqA7Uj98L1ttwxB2tj6r6M4f8Hc1ahY",
  "key18": "4eqCJKC8nENhtFr9g2sdmcZU4CSzXghJ5vs8v7gqTiAyiqWyB73djmTz6CGkqkHyF1ZXCJ4LAzjiYtkP4fADdGSj",
  "key19": "4GQWWYNNS8AU3S8AKoJ4TBgCVMZM7GfVab57W7e9dn8qf8LnDtuJHdD4FmfdbttQNfKRGPMkDhs2drHZdEy6equD",
  "key20": "24DnCyHNJ4G7xB3vWTVbP4bjTHne5gGBGN6tLUq6QsTgofSYHHWJkWABnYMiTPocbnHP38Gt2qXqYxxTmYwCdx1N",
  "key21": "38srUCtg37TrpK4GuxzX9fHAqQMG8acvMeDTHxrDx4n441uyn1gtmRGFBd11jSqvHLSoMPd82onXKhSR2edHHYUp",
  "key22": "4B9mBF43gu4ccY6jSP2TVBZkkLhT3QbJKyW6hZuBqsM4YgJpQwWgDNMk5ZCSPHW366GVXByPgsYZwL2V5zjCnG35",
  "key23": "43ZD2yZDsVVx7nuQb3j9UvTTJTUL93o6x4Rnrmf43VMMX9HuzfDZkFATNYvwd57LQQ78zGZp7wsAZyVF8d8u5uic",
  "key24": "4TWdvc28NvyyM94YzZQB2RcuHhm8H8o9pVUQ5Tgf5KJHUdLX9C3EdLcGD98PtRFNRtNcN4rd7NYPsXjRyih4s4XH",
  "key25": "4ysH14DvJXTa7ic6VCn9cmhAkzkpNCBkrm4Cae3LUo59XsHSEbY7Nrma1E4WitJimYATkNZsK5gDjtupCAXefo2F",
  "key26": "F1TwqZaec2YfxW6PTrHvKmhDLj84iyoxDkhfR4v7819q78XSaFqUrHdrda9mdx3ModRSUsEfZsVxiHE27hVF39i",
  "key27": "tcMnxP127jdWjRpG7vRPS2z3wDjiVLBkHz7XEHTD9ZVCBzbUez6kbR8p8XdkNhv5wz4b8tiqaTa2gUPyVFbYtuV",
  "key28": "f53Bs4ZUn5b6QW9ADwUMPCx9NL4zNL57oo7kdJJ6EjQQy5w65rung4vz8vnLXZGpFtPwUxoT9MN2eUzkMyNtdES",
  "key29": "5HZNA4EPkMRuKt5zDVvaEgumJh86GXcmkUsSNQMnYxu4XHPbGAPozxicJHiZcapx2wGRcoEvg5s3VKzRAXsv4yCd",
  "key30": "4QtdxzGwYUJhfRfKqQuz6ASFZyYE5VZbGcWYX4BC9EUsAwjwrQMa8SLd17nHSwj61gZceEzdYNU8MJvdWATa7iFq",
  "key31": "rR88uXrX6EVkY4izgAQeuVtwe7EPtbQkDvnXFNtfmPJm85F1M61ZPRbEqoUNKUfAhrRtQAGjNdK4VNLcmJpUZvr",
  "key32": "39MHJPL9TN7QYASBxoxvheZkxxZpnrz37iMsw9YZuKZZ2HMeM2NTPoDbWB4yUuzsM9n9vxRo2E3uMrhGXPPHNqdX",
  "key33": "3JakPyexauhkCARCTVz8L96CsB9XxNxX3pK8HDzdmkCa6b7YrAT4L7iR8H9ZPHP5NZo8nV9EwSSFWwj9o6BtE5fZ",
  "key34": "5dALvxLJrHDbzKs1H1NNiCJz87GpfzK45j8wGghmrmNvxZhrb3A1d8SdF6hjh81ps6sr3m3K255hBtJj4gAPf1Co",
  "key35": "3qk9oLnHmY1r8PpdmkmpTP7aze6R38VfwKMt5DvipWTjvy5EJXqtZg41KMmdUuHLqTDtCoAgtkWnfreiHaFVJHDy",
  "key36": "5Q9HXZ7gMR7PMiNYkTh84Hcz4kAfCHLEtJwTXWYFG62Fy4SMp29LJA4BVcEXkwornWc45RbNthwpwhDKFR6RZH7M",
  "key37": "2R3sCNwy6JaZgUfBtkZKzoYcuUHmPTX7JrHjv7kLH4xavsSCoLEmtR5xsUxHsKaFpaZtYiKrpZuFKaadK7ZSvw1y",
  "key38": "uKvnWdEqmnuCiiAdUcT4Pqd8cLaStFh8GkvjfUK3a3NpkvEYR1JZ6d4tc7tgPLdgUBBGeDCR7WzJ39Jtmg4p8Ch",
  "key39": "1cpwyRBwVBgyMagk1Bv9NRamhrWm67YRaz1WpmVgKbqaodLndPSVSaiQoX6ERRAW2xcThvTmkC6KehDX2Pr2rgJ",
  "key40": "jTmzfGaxYBgWZzPowLBGT7zctuzCagoimpj7a4pTAeUR4K9sy8e9AKUCwL6GWVkZZp2PJLhJo1aUAneeeCMxj1s"
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
