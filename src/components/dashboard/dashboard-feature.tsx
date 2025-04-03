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
    "4JVrceuk12ujAFY2AfcqbbbQFtqjEz1A3YsURhspcGd7NoAqPxaARWNzmR1m3DJGez7WcikKze4Jf2gygkroPuft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zrKi597mV6Accysvgd5ZhzfWLxWmTRCNVwrYQCsg5c1NhVzJR9ZGS99ASNfnEskpraXjfgX2AoaZyh5HggyYNu2",
  "key1": "3JYnyQarMybWnt7EgLeCcQKyU1rzJJe6rYJQ4dcZKphB1JLqUkcbeFqqCDTkmMEAyDRoviPJbF24V3GbwsbEeukS",
  "key2": "4LUL1tihePwhPpj6HL7jrCWonWcp8wPzLoGYxZZm6Hv9jaMhCnhPwMre5w5jtLbnrVho4QfpcgCnKs4UeGgrqeHd",
  "key3": "sQ9Fnm2TrBSCaxFL9fzcJbVe3pYytDiSWhQwNJtQ5HS6tn9Xwoyx9EsrxaiPSY9YhTAaa6F3iqL35M9HyhqiV3W",
  "key4": "2x9wdiXDTuFsVcPpAr6AEzEJUYWDD2NtDYN3XPW3irwAsESEUuUasr3Ut92wFV5wg82obeZLZyhEbL8UxrjnQGUd",
  "key5": "4bHYE9GbHJsKFikxcJtjRUKEcPFK5EQFwbPrK8dwXQRtcxUfQW3xiB18nuy4Wmkm7uFLfgfAe8eNXUFT65toVGBN",
  "key6": "5nkWhSFd8Yu2FLRn2en9SjZVEVxug1poQ8gTwY1DwLhhr1y5kewYH8dWWsUKQUdX2GS1D8EccCeRH5uvxSEspNPV",
  "key7": "2dh1qjzX26mEEFw7yoQh4c8cHYbnHrVgVMGUMHamkTcnshagFDTHwUi5grugqTiKFnhhPNSA6kpuugXFHL3XetAh",
  "key8": "56aEj4BRDZxFf9S1T3pYHZr3WCZtbnDswavwnnRQab45P3oASphZi2Xh8YwestcNh7XtDJVh2nibc99bvnyW9U8v",
  "key9": "5ZYEe8LBBR1SM5zg1GCtTfKxsGNYm8J4oHrodoRDZXsYtGkWtwyCrQgJhvqQs5DBGQqVBhgLoV5L2eHYRZjxT7FZ",
  "key10": "3BB8zMZB91QR1rCQwFd6my2se4PmJjHAQXoVGU7q4itKRSjFqrxusQeaeKt5rBXD74JkWEwoiAG7VRcCvjkD1dpw",
  "key11": "59dYECaxSGtfEjWkuGeuqhH1qzqWWB1rou6u9wz87p46pTQNhAUqVPnNPvcEy9cudfJ7wp1EzCufVSS5FgvR47ad",
  "key12": "5z4pErrN9pg9YzvjZ9E2Tso2fR3PwmRQ3VrH1nmWGZxWU36DjntCRic6Fy9YfkzLRutbejpdYfnD8unAa8DirZRu",
  "key13": "5jwA6FEQhr6vXnhbii7x9s8pdsCqKY2bDXvYuZ64WDbWaAhqKeLRAaE2VLqBryAJiqUpk13QQ4dMvgDUzh2WC28j",
  "key14": "TNwViZFsvrqbBSC4QeNCKC1CZxeC5qfyxhKVpmmLWXAKxoRJmYKTxoPSYX4PHRVKz8ptysk8X46Nj9SDE1BaxC4",
  "key15": "2DwjcMWnzgY3ZmDubGeQAVWDS3DWDVKRB6VmkUX526NcjDJME7xPTXJJBE9GWDnDQcnLCSZF682kaghCwPgDKfYf",
  "key16": "4yB295yRMxkzh8Sjv4BL24CM63LbNHspNw6Lax9n89SKBWzhehT7dsqVLaHYpUSXnD9AzgrEgp1wQM47eZ6aNfuB",
  "key17": "3yqwH7yo9aFz4QKYuMtuPf49d7Bq5QK4KEfgBGiSNHcMcLcH3i6jWYxAKLTTC87HGw3ou4vJSsnjMYkSfEsb5ycA",
  "key18": "3mNqCWnsKcQKiYFcSycjWnXVwjeTgcWpQufLuecAJvqRDRpRY8PxtGQhFgtxF2pP1fGpHGahzegkvdMJGh7V7ZPP",
  "key19": "55XtLqVimPGjY7r1yhuNKGgA5AHVnzc5UfM3VuSEWiynaA976pbwxd49QoZDfKhtm4iGDx2neQeKaPKnyRbiKuvo",
  "key20": "4fhGf2cbscQDSgPvzH8Wi1Ed2RzZNGc1Nq1d4Pxi3LRSVh8xFtvfTBbt5MyMJBZUj5nnGhVtvHk8QAZfCwzLjxby",
  "key21": "4WNoKkVm8fNqzbUMiu6EWSRbJG7VqJFcrYtSJTjBN3VYA3HwWWZyNaC8nTof3AdVS3QykcH4WsH5B9ysYLVEffA9",
  "key22": "3md65cLReew6aVh9LAeZpAR93axarLDzcAQzbu6hjc4jwiHnw6s2o1y3zVm8HruwsK6nhexbYbheCaP3o4BDZxza",
  "key23": "265brzETG1KGWX6Uhnjd6fVfaHyMcMJLAFLonKtS6bfSaJDTSrVnqqg4xVi79PRfu7TsWvYPosEDG96HtbLHN6gn",
  "key24": "9ZKeRDnk448ZcEcHHhoTREiRgEVXrByhqBz36fxNvvnRZhi4Viuc4QG1KZbMUM5h8AyUJThRQbZCtNGdHUfepv2",
  "key25": "2t6weXGx697UKCTyPXFdmTMWrFRY2imKLoyNCT6QyGKZDnzG8atE3sLEs7PS7zV2cA95dwNfpYfYW7FDFp5RXi38",
  "key26": "5SerAU9bo5MQcfgxA6j5J2ruApZxw9oq16U6hfvegmnGxadPz2y6R6qRk72i9ohNpeKZYYvRTNUYWdDS8iqgTGKH",
  "key27": "4cjF2tRYQrcs7ryWE5nGLdrHZ2gUP7wmsq1tXmUzVfewBWnRVgba7Bk5jgfu5xaDjMmtH6McpQUEg4LwLJPKJYqb",
  "key28": "2pnKkkKpPeYUirfTu1y8ddouwRq7TYD3rxVNhntsZYZv3dT5UiMHtngi6EubE82PQPC8nQSS8AgcZU5WVYh87aPK",
  "key29": "k5fQTdiyQP21rftQaHcuKpbaNPMGdZyUU4muew6CdbgprjccwfR4ohw43zjaDFDCu9m6NqTi7BDXzwnyBmdigvJ",
  "key30": "4weDSVPAdR4NL3m1uTSjoZczesEQzP4V5A4i2SVJe3xKcQNx17r2t3wvd5MiTRdox5rwdp9YJgMWpmT1Pfxi5HT3",
  "key31": "3LNn2YZ463B2wxdm2AATVfE4AArXnGu4ienVPDn5cJQJFdDDtoBXbpXMqRg8WQBzbyJ9Pf8bxSU6y93bnTy4NijT",
  "key32": "31iWr6Rqwn27YJPSsQiEWYYMTHz4Fa8JLgW1Fm58qBrTKgn84tTVetsyeZM4ZAwjhaTcMicQXbERasBTomJM3hxM",
  "key33": "4xVhfdnc58LmoTVpk7Japhc9pqyrchgrASXyRyh4e5jMgLk3mc9vEUQ6yV7cb7NV6QEE4sk32emrZh9V2VeyScg4",
  "key34": "5CLbaYvaev5i6g7F1FKkVA6fMuKfsPDr1ehJwZutmXAGHEdcsUe5HbmuynBxAufu9xkUgozMtZceVxehukFURASZ"
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
