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
    "2b6qgabu3YihbogDHAptrEfprE1CmQZHWTLZDpPvX2GHtaVsc2vnryG5HNwUVDsrS3376zRCvHyRJsk8LC2Em7eD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "125WqXb1WJt7vZ6i4VXnZzMKQAUygbrDUoBUwGcBH5SMYwpdE1WHiUSaHQtPyXVScCD1F1sYRupov5FDKpTrsE8x",
  "key1": "2yyijrucnfJmwAX8FHyy4t8z79XK7vaSoY7Rn88bEfU8ks5UAy15F9cX9YynGDVqngLw23ekq352u1aTHGQHU9w3",
  "key2": "4CyrGgjTC9iPye39sndvE2yB32Xiqyug5ygQyMbYmYeZdYtyzZ6B552B3WERazYvBXREk7Ty1inBQ6SysJg5b45m",
  "key3": "2zqr1sfKd51Bfjesi32WhuNuzgszS425n2fk25MfN1p83XdNWX7vVLG86h1vn3kdJQvmi219VaDkYEHnidppLg8b",
  "key4": "586uACT73gdHEUZS1EVUV4yy4fFcgbZfEinS2h9RAHXUqS4EXXqP3aZPCz6mvzK5WB4ARVUiN9xvhBDFPKm9H7ze",
  "key5": "UUqZ4SzAnapwXxHZhBR2xNwF8RTB3Ftyxi7ybZixG4fmTgKkXAo7ovMZgRaYWDCjhfLaY75pmdbdMvkTeQFiSjh",
  "key6": "2EsEVCPTtupbw4AsTFp5wRFhvUvyDGP4D87QgE8jGbAcK7Wg2sjKyX76LhkNvCrpwW2P3ZDkY6vrT7df4nqeoh58",
  "key7": "AS5T5VWw3rChvAo5nX7xtXtDFELaXBiqkrNV2dZQrrufjvEamazKVghgmnVY1UUMVE32xJWEMVUopuCgEjuVh6s",
  "key8": "4N8SLzxvBLMVRpDQaC8mNCyEGjvgeMKwYYNGcBtbxMVtZjXbgjgSmaUsRFARurCXBaidCFTGk2aQTnTaGKYqTo3u",
  "key9": "51Dy4ZqwEvWU6xTAdun2WLJwBQiXQyF6jdDDFA9cwWyiMh54eDpwd34zh15BSQqr14kHevkmH9VAb34UTUhQtaAT",
  "key10": "32J91PPebgZ327JQDvbrfmmwLEU8JMbzF2pnotYC1KHqviY7yH7mb3CNo2BX3rhffRfi7MFvTwDcPytMCFKdyA1C",
  "key11": "3ZA9AhGygeUPA2JTKG8FFfNH9nsWWw3SGm4Mv5mnH1wwpZK2H6BcjwoUqbyXArd2tfAR3cwBoXMaFTjdWC4ZXS3i",
  "key12": "2q25DQNtYfownawKigSbu5WPxkeAbZWDmWi6Knb9S6THqGKas8LZKoi72JHFK1dYEMc8FVYZ9bMcZr9A2LkVERdc",
  "key13": "3RgXGATxMQpooDbfR5micua7cBPb1xiQpqh25kVcWCacsSjS9S3D7DsWGq6Ba8YUNxfGBWDi2UriRk5mX9LAf53r",
  "key14": "56Kjm5rRfWzWUz28DKaNMMEwnp8qcx6PcBQjUdyrsWT84dPsiGtGXB35btsbWQm8k62TkmsZv9GoR1pzFU87RH3u",
  "key15": "vk1AnaptBwV19siadt4ku8gFcJJQP3j34yg4b3fuNkLDRNx6fRQQzXg5uSEs9WU1FKA88ep6aYjY9H3HhKUAf7W",
  "key16": "2bFXwnJmrsKeHXgAGmupae9hWPEDXTvdLJr4vD58FVRLpjeo5yh4kp7j9NNwVMuTCS1RyQDZcoXVxF4d71GWsRnG",
  "key17": "4YKuxKMkTqaeqLHcQiuezEZ4KhELCPkKY95ZA5hHi5TyjpT6HbFMzPT4YPFPbzAY5QiuGK4siCHPsZnMfruh7i2x",
  "key18": "5vWrN3uznm1gRo2Zec6YfU6XT49SHpGPVsP7WoBcomhef6NJi8kADFksXe5Q9zAoHwqBrBqzzWe6WpvhjdUdvt3s",
  "key19": "37sapSzn8g2YKY5c47KUF4tC3sgKpB7btV8ZKWNCtaFo8DYkfrHgDjz7MwJYZSwVfeZWKBjgX2zwphvufPDYgns1",
  "key20": "2bsa5Z8sLCFPc71fLLTxpSCktqjaXnj4dEL9d3C7fmiqcMBBe986Vg1x3cMaL1zxrqGhdM7SE414ULHfFZTWzYW6",
  "key21": "4Np4m7DDuBbyF41pXwg6eHsMysWzew3wX9xpte4kVw82Xx9ha8DgM6pbQ7yfzZ2c5dKhYGgzYwa6qtT6JRzHbjTo",
  "key22": "rJfwrJrZMqvGmnYXXvgLfj5NcRVsfh5emvRf8K8B6oYmjWhFxQVLhAvdas11C7SZYxZ52c3NpomwhsyyzZ86mZb",
  "key23": "5MLfe5HY5ZQ3fQKqi1LYrw9oy53BmvuCrk397ojRjUB4zhnj3xQkdcERDrwSXYCSQgeq8fPSSZcLwLsfwccBH4iB",
  "key24": "5R7WFbJZpmYNGXMBJKj9LSabn1KumbFLrWRyJ5WTARkVFFeyrUtpDgeZ7zGm2cPNYScnYbQDg9EEZzkNJuvdPYuN",
  "key25": "4SmjjR6iE9tMxMsqvY8CDnSeF249BB5cCn7L2zLUqZkSm38pq2pzjdt1XB4Kwieom6sDgN4BnfnkLGAAZ83pGe6N",
  "key26": "5w5zfD7gquq5Q1f8hopNzULcyrRTi1Uw9s2PLpfxTx3Tgqi6Hiq4fhbGpMGbTeMsmYdSYct1btRxrSAJiAmCeLCq",
  "key27": "iiqnZVqvhuvFUzrYsfNuYSpic5h1LEWLHu5Ci66DemYD4rRzzchV81DbC4SfnZDbJTfrkeAiosLJ9eFCetiEmAJ",
  "key28": "C6vNQbv9uY8kLtwW79PfogGxGsJ7uxDTaJJBjDJZ6Qe7YWoRbmRDJGJs4Uf1r3X49fPwAC9C78mfAzgTyYtpU1S",
  "key29": "44u5rdnrJxHbHR2F63THZ5Mk8MvMKjSpfWozk25JjDc5WZZN1m1aB2HgRRegnUBmR9HEauGtA4rxxgg1bKJWZMSH",
  "key30": "LafUZyJ1FKVwFqeLH5iwr3dssicTs6CicTgNni2dWxv5T8bK2KRjKedcWar1qepGm7kXvGdXNCVtKypquccw8FJ",
  "key31": "5UsvJwV2FBx6kxbc5jnibz2kiKVZb5naK3wdi8HJ7W2xAvemHNzsiwECJGjtMPrMA7cCS6wbWseD4jSrqa31uy8m",
  "key32": "LmWcT2GozaePhXDLZ5ZCpuKbAZXRsBX7DWrBkHPKTT1sHcp2Lgvgxpp2kHQW2xyAjYii23Stsr8EipstfstBWu2",
  "key33": "ZAVc797PaK1TkMpTEiidKA8vhuy77b225tmWu6uo4itvCiwjJJ4CDgh144f2jpi1oQefobom2i5r8LLAaGJA4JC",
  "key34": "2RU8Sme6oCQ8uavPraGFeLbCFL7i8MQgyVtsQSU8NtcPDBLpqhwUeoMvzkYYsqzzHdDjiYkdnRQQSxpHyTyTcXXD",
  "key35": "5fBdYKHE4dbmUZc6M2qPFgGuDxgGT4AcPjhBd5kmQCSc6W9iT1WMPttu1yQkCSuiPUCFYQK3kP6kwG1p6TCNnbAk",
  "key36": "5NR6ojvPKsNMdtCoooffKDMrSKKYPTUvioWinP7GskYeiczdCw4f5Yx4Fb4VSceAhPowmMLimxfELMCW1kmq4nCm",
  "key37": "4hvcSBACwTpaPpnrdDhodXaN9j83pzcADbQr4hpgCjwkms5EqkqiNu6Uu2k8xF1B6wEEGHZdwkeH76QwqTodQg8d",
  "key38": "5xCjEmQoYN96frKvJdXE2819UdTJPBG7vGN5A4vMYX7Uh4NBuFjeLaWfV3j8yX4cNyAR231vpkJ2EqJUVtdELHXM",
  "key39": "YfPjLxn1e9X6tM1pCsUfuC5fYLxFWggGMNqwwV32oLP32M988Mq6DT7fa2b8TNvWeK8igd4GxBYP1su1bKXHrCu"
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
