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
    "2PxbZ4k9A3xoNAmhyTQ6fjezSYs2KQV56M6CYrc6PhKR53V6qmGVPN6rit1ZU3coS9yALCsiBwjetWR1t8H15Vaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aXMeEZ4fwgF3M1BjdEr9WMpQ2wDzXxhPZyNcFiUBq5FSFraq3DSqFZYP26bequBnsN5HR7VWzYmPxNpNZQEnaAY",
  "key1": "dggiXPcwSNsNPgKxhsA9bVp7Ef7pWwwqaYMVpSqtjYteUtjSTARUied1GjVZZZ1r7yeESNyBAXH12kd4Tva3w4H",
  "key2": "3MM4xvDpzZFvrgpRWRSBBdzK5qEeDEQz4rMxQ1KZz4cdvgiDTriaxvvSpp7h7ns9WULAtMRWRruV41Jpm3Wc8Xno",
  "key3": "4y4WMPyLSJsiopNr5cZ2cx8NX7ZFFjcasz2RnLBpUiTGRsAhFybgCAg1DpCUVCx6QUD8wP5eT7tyK7AYgrsZsxFv",
  "key4": "24GodTwxg1tPkww9PPMDkoGe4KC84RY74pTBLmZT5UQrpcVFLCmUFf5tpJuj6ymtBA15TppNEQDD58Sqa5K6LcMe",
  "key5": "3FkHRFTcLBXf1Apqmn41zgAhppjWExsdrGePihhSUoDiY6B3EL8iQE4XrN6eoSQniJNNnygYtuYPSsaE8a5Q3imB",
  "key6": "4ecJPaPh4bbUVzu4vqU8bnhrLu3b3dhXTAR4oouiB7W6SkNVxf8DxJJPacWSS1RjYWkh4nsBpSHsxgkuPFoGN44o",
  "key7": "3Wpk2xA8EsK2wUfGCF6aKS9AhV7G4SgQ3XRu5y34aRkeDe24BZZXWCsVvWFtcYKV1m2ioUUjaxbT5k3nobPFU9qY",
  "key8": "LedWisdhpHwS1iTw6dqGX1G3drc4QDz2Jfnsx8TnvvqMNUtCuDHGENZ8RENx6jVQqNixstf6GvnTxXuBqgDMxsM",
  "key9": "4goEtcS8wmURgUUKvSEvmCsRYPtxjpBcpbZtS3KZ8Ny5gMLrsqctfZHQrYsNzvopHU28SfsMSTXPhpHxBJ4gf1Yz",
  "key10": "3mYAzYEai3QNge6AqBY4zwaf4XbYAnSNvhaRhYLQ3nMjSG9HbHJnd1UP7cPRgf4wQ8xN4T4PchTQRMbaGABorL12",
  "key11": "38KPVnoKiMf8uvxoK5oU7b5dbnCNVid4FgaE2dmratfWjxuqdeNWv69AqSZpKcDVzU45NdApGZ5czzaHx7UP36b1",
  "key12": "2DAR2RzrBpRJLpZwGMYh9yh66DT3RqCjJdimwERiri9wpmgEdJUkKkHTDLSbwt6Y5nZP3Eew8q2rqvniapwaHhVt",
  "key13": "KSwFWVCFGLZ587u1weFogRdFUDwa69k8bhMVhN5ATiUdVurZeRi46Wssmg2s1NwfHP6s9EmB1W1Qk4wdvdZWJMT",
  "key14": "5wQFFQ5tnsUz68aLEup2SiLWvGAufBbvFiagNq8PHnLrN7ePLUv6yo7xWWz39FwrNTA6aJoPZPNncBYCWuyhHYBd",
  "key15": "Xf43V81xNuqEgYbb2odcjX28DxaaLVk6wLsmkMX1yrDdswETLjFkcZDFsBJWJcFb6fwjk9ncpypr2nshPsiPN5A",
  "key16": "3NBPVBAczyYsaAM8RPwPyUPBqZtCHN6UbAW1RLhP88eghuTacdGDztHebGy5gp5DLPPQD6waVzjMsr19mikiAaxx",
  "key17": "42Q9X1AU7fS5v1V8dsmXqsGrBQWBxMXT388FgyspusuGm185wCVJftDGXZn3cFU5YMYFzaYHyL7GpN33aZwZcC2f",
  "key18": "3JVaZvAeB3ZWw25BkiLMPYsgHwd7fHPXZG9zYXpd7cHDX3va6wEMqjWn7rUwTadTqvr3826yAWwzJCf1PoGRfB4J",
  "key19": "5w88pPrVF6eDBWYvQzvSgf35QpGQZ1bMDop7mvfRjjUbgBBuQBBoyVyVWtCyUFGdWkmnKHTPSwGbtc89U7AeUHwF",
  "key20": "5E4EWXPpCahx1mL9ytDRM6Kqp1dPPwMDz5zABtefrYAmr37SUkbFWNgzoAzvekZLk21C9YDLM64UHHGjAviR8sV1",
  "key21": "2iwXytMAhgi9hBxCJwvJRu5WEgfjoNydPMz58qKqLJbJtQQZHcKWkChm2ZsooBb3xwfp1qCuepXohN9ekmgZshhD",
  "key22": "3ye8zhPZVANwzSLqjq2KAzaZn4BRsY5BemNQw9HfXbKTPZqEriEUAsUd1ropEiqafnC6R14Euua27nZFRa4sfyyL",
  "key23": "2xAi4Ae8NfnrjfG9eNJZH544obvREUpQ4YjJT8rfwRdhEZokM1FAy396TQzmGjUP2wxSc1Puv9y1amwohox8Dzvz",
  "key24": "2hNZNTbUzrFZjGGC5jKFjsonYBnSFUtQwmsno5qRhMR4xpmpK8LkMFFxz18wWEyg9EsXSMWXCdBmJCWhKi9rEXB1",
  "key25": "671MVJsUcbAR4EDrjhJvzGXhmfUY5t3nFzeXqQTFJ8xwvBc8dS17frzb4FUwfb7HwztEE8GMwCRaskoSzay8Narr",
  "key26": "4bn6Xr5E2t2rNp69GjBR7VBBqwJUHwePTY3JkjagJpUrdzF37Y6QXD5efGdt24GHG2WPmfDybuYp9hhgzBEsenJH",
  "key27": "4XzSJxrgNh47SPBQJV9o519dH9gscVeqLW2gcKYrDTGnqsDNkeJ3KvGXL7na6JDjX2ytQpDyGFgGRxdSdpgZEeJ9",
  "key28": "5mDbLucHcEf6wnyiaJvzymt3YnRvxq9dWo1npvETyKMt6hugJZiQ9CEKU36X7WhxXAuZAo7vBhxQZ7irTfeKNECx",
  "key29": "5wNKUF9nHLXYtmyXkQPFtmsKreozL8cSvbES6zkChoLVDtd7TkbbXhRiLrqcTuudyXt13h8Vbr8XWGfNyGoMSYdr",
  "key30": "66Xp4J2FWummVG7vm4Da5P3zfcgFG8BEdu4uF1QzpRUSqN6bRUuyG6LfYqJ6rNTurHRwjPqPEcBcPUAu5usLMV2D",
  "key31": "4UyMbczMNm9WY9Wxz7dySRpnUju19k6Ung745NJBBa1nMuPbhMdMEB2rZAcRDi5dWzTmknkAwhGRpjKMMNwQb1Py",
  "key32": "5LAQHy6d53GjuwFyNpHtRuL1k1dbaAynw67hzgLk3o3Nen92oYAbTXhp2Bm8AAx8Phioazn2EMZzoqRpWbD7NGo2",
  "key33": "2t3VSdpjvibV4dbXBEUdXy1dtKfox9qnTEW68Hza2banc4iB8r9XBNJoVqeFbGCiELCQ98NTrx6rKS6Q3qM9B7Nb",
  "key34": "5t8LPc1e6DeW9RoZcFFmETG1qKHeZQ3LTZXh9ss2r1un1GGTkmTUZszCgvMWDfauMkC7TttG1vEiVAc5vCGuQrD1",
  "key35": "61ejVfWpdfXvxGiEmuHnxHAd7QFfwdprYXwxwN2CtKm3fW3ggJH2p1dP9i4WzUpuyEQk5Vsfi5DJ7e6joQTmnXfP",
  "key36": "6MxgyCSzdUGVQ37gje2k3HmNGDhVXMUFbYc58rh2f8NpF9huSsyC1c86pJZAhKSwFcrAMDHiKzaZ2wWdRYDa5ZP",
  "key37": "2ZAvojfp1RHv2RkUzutrE8XiKuNX3rjjimqHBw6sjp916xvG2k2kPwSJjXeqy7EN9BseL9FHTYoKjgfe1ZNSeMve",
  "key38": "3zh9rVYp167Pxnd5NzLyRx8KctgUbkDhhKTRFygykbs48v8Je3rN2MVMppbqBG1zocgUii7hrptmHtxWAeZh9GyD",
  "key39": "2nkFjw5cWE6JAQn63oYpTkzLjCQW8gGPNiJaE2nRbE24psAiTrwjRbYNUV57E55K6W6iHvgLf7z9XHx7y8Uy4ZJi",
  "key40": "5uMkCGLmw95vBkKJg7k3PJ1WTgTfKXjMBqSt9UnhUoSrCyhPQAcndVAnccwGwHBM5sYnxqbXvMBKencfEn7o4xD3",
  "key41": "2RjPnoLcVtJ29FCxo7wCp4z3ackuUbnzbVedpDShnwN3dK6jZqEPhT4nmofgaPx3LNEvXMxZ2F3sAQHm97iaBQ4M",
  "key42": "5mDY4pWNVtQT87dCwQU2UqYccYL1Nk4BsarQnZyCgeoutSjoRkLeonNadKHPDUFfRUeGAKw1w8v4dJ43stZZhmSH",
  "key43": "5xcUBRHsMUcvXfZVCQPJPeaHmtw97RrW1nURd3hwDBkNniZM6PdN2xYm9wMCRCeSvmcuRzXDHWLTqq2rVQKqStzz"
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
