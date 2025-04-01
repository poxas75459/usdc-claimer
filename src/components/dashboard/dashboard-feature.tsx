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
    "2ECf9aAsL3LngxeasnZF1soe3V4Yc99acUtwdVYxpFXzYZikQktNUF93acscbvgWAfhQcjnxPqAnfKyHi1mrwQgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UvSh735mwBhAasHoscMguq4JaBUTuQPK93NaFYwKJS9xxmqnXZVQcWvWDfPdUACfTj1uNihXqnV7scGU9cMjZxY",
  "key1": "oM8TpePM6tnhRg6ka8MHQZ2khergDWBo7uEykoTyKV8LqRL3wveSmyC2wmqkKZHoBea3S8pZR9tLmNd5q99B8Mu",
  "key2": "3gwj9mWjXYsWhPgF4z1Kq59o49cyA1xo2CjFBbXfp9C3arrHurbhaj9fWz2E2RhyHCN8wvxEN7b7QgArnwtckHuR",
  "key3": "29tjz6oXoMCsqjyyjh56JM5JQCqeGg4z4fjixEYZPXxcYus6gG94DesBEmjm3FpapqdsEzhHzuabZN6gboVkX9zF",
  "key4": "6x9Cy82rSVnpNdfCa9xvSaAivZ2x4ozS94s38wJ345uDtfqHmnmnLLa1r8YqCFAae1JkReLf8QSyndLyu9N8Hid",
  "key5": "NCY5UFULhmCQb12qzJqWBH9MJoWtZurFMSrPK75ZCzc7aBUkx5jP5jVjBLpyXsu38XUAeRBk4Lv6UJVQCLCjedr",
  "key6": "3Dqxh8w3Uk89fYtDYUmy7gqoAnv7H2BJi63wQMoQaje3zTnfLnmdGKmdVwDkCCSUfJuDP2epbx13GF1D5MwL3p8g",
  "key7": "2ZSiEKyZF4JQDneR458veyHXsbELBhSnq7RVDrhapWBvqenVyywYFAcacs2GmLrUeMoYFM3FEraSnoCSKBxjGLo5",
  "key8": "5x1Grui1arq17f5o4Z8VNPwaCeGrxjcqy61x3bLwsMuY7iUwCebi9rmiTYLeubAV1wKR1QfJLcWwnRWiDP62fE8T",
  "key9": "3G5NWSj5xSmz7uihPLwkwvGjQYrwH3NMag2WmkcKtNogosVJCENf99iP7QSZeaqrYnBsPSeVFSKKqbjvcnwFZgKA",
  "key10": "2mtQ5eccqhCaacJ9aTtBTt1HzzNToQhLzAJKDqB1zFChjBxvuj2RbPrSfQJsg2x2UTmJbgkuQS7FFPb98nSquZUo",
  "key11": "3Hp1kdpFiC3yo4vZMzGmEBzmqyaav3pz4sg25kP6ZBjsmYtEUwbBFR7uo9KDyAzAtLhoGQtJhEaxpSghnZa6rk3g",
  "key12": "hKv4HBgaHNzYEhrY6Avtfey2Xc26nWSuUFQfjdtipDkZKSH8Bfk3GXi3m85CG4sStPURs5ayooU2t34uWVrcoKB",
  "key13": "4wycayRjLVJqzhM2J7qu7GikB2QQid3jrwfBgS27XaavpyYz9nHJGRbE7AChpaPRpMeSA3F9DvxTEG7X2CC1cHcd",
  "key14": "41adgULS5QVR1Y8aL7E4U7bFefga2S2xSW2mCTQ1iwqkofhetNwby32W3muUPCT9ax7fbt87nH2m9R2z7i4PvbrV",
  "key15": "3tfGQ6rDbJmdf9hrY4t4RZwTVHvS5YqCNXthmKN9doPKaRZPcLQQiJyqq6snuptGd4aEv3yeXAo1fgQj1QVWC5Ur",
  "key16": "2z4mvTeFLcAzX3XyAioGaELLEcUPz4yDc4CQXukidRXKMQTnegRBVLcCKXfZrsXm4AtvmYMbhzHQFamqeSQtkFLj",
  "key17": "64eSsmpc717FAqcPQhDvhtNf2daLg7Cpcxo6FPUiSzfCv36FMn2YTkMtHhWTDv6Skc5C2Hrzbknxj2zBf7PC5qL7",
  "key18": "gFsyDU76wadQ8Z2ip6QjGP2gYWaLuDqrEMGkihTdSVc4ZMNzQraCyGLVgGFQrtT6SLRttnWbNSGrLpwjeumkKLs",
  "key19": "5EQHoPebLYCQFtfdYFDSq3CP6GnSds516dzVX2mTCkdB3xZnCW5BKVqy6WHkYEA1M4fD6mDDX1jwYVfMVDuEBKSp",
  "key20": "4131XYoE2r6UXz8wfJpuzpY2aNYMgkj9eutUYqwpVC78q9QpQ9hQYusywWd9jjvaCxXwSoTzqqFcTQtQJEv1uxZ4",
  "key21": "3DRYrYFnRMJyPKwXhmkYvQqFevPeY2S97oEwAZxCUqZccVysuAm1WQK91Jn9r72VzXbLJJXL5Qmgd8hUkKvRtkzQ",
  "key22": "2b44yk27hJVTFpnDXm2PXvMsrCApiuv3DpsgV3w9wiPbtN4X2SMi2a3jgeCrhQBeeukzPHKWaT5VY82XyUx8zysb",
  "key23": "4X2xDXU2fK6LSyeeJLP8dL4nbhaVpnavukvLk4rYVRS3FDBTzZA3U9raG6SAyV73Dt6rWFtM5i1qtgggxp9fEhE8",
  "key24": "2iS7Q1uxfY8n6AQqaZc5YaTxWxLQACEpAhrSoisYqZhzLNYeBbZHzoSKvRDkVyRiBgDmSSTGo8EeM62hxkGoL7bP",
  "key25": "4rH6sCuRgiatgnrmdsbxcDvec3v4rbaMmdY2hNVyia3TPG5fAZ6tuTZ24bxu6LYA4L5Tw6xz1wMx5uD8ehJAsLjm",
  "key26": "3ti53DzVsHfcxMEUpzHan2jvdzr69M7FfJfrHqr6vFvNhxGxv5SHuphd51ctiYyGVcgkggE8ZCZm5pBS7DnZjjbT",
  "key27": "chbedJP6Z6zzPJVBQPwhyBj5Mj14EY8A2tjR1eWvZngPQkBiZsJYdHCAprHYMnVv4BHqLQiADFHhiDXvsRE4Mku",
  "key28": "2rPtSagwBqVAWSYitF6kbkjaqzW8bdGfkKtTZPJExLzMuDSGfNgQD4xvXEK1RgsyDh3Va4y3D4j5x4Z4iJYvjNQf",
  "key29": "4YBYUhVcDncVrp5XTFebMWJWon2FPGNF5XGjSHfN5eD7CDS4ccYpawJo2PVPbknvUUMigtF8uFQeBo3KCMMW4Aq2",
  "key30": "5UivjMSueY11coz58ipqRigGZERWUp2MTqpLHMzyqzxefu4jPmQZC2XsMoiwxi4FG6G45ebDoWZZ7qP11DrhtBCQ",
  "key31": "3p4E2EhqCAHc1LwVKyQ7i5GQru4WBkaCWzSQGoWb3LEavJRXGE2LaQo6j69qNunNnUUfwPvmvEBRhm91RWX1FGzG",
  "key32": "MLHuRHj4QXG3NJtLr2Ca1jmWpny4UPz7AdAKJZ7szPn64jNTZ7DJksf5vMyvkUnDh9rdz26XWdnRtwtWH8hWJuy",
  "key33": "5smD4Zo9vCzegFzGkXxT4m8CJkoxfU9jwTUsjpGA5phtqT3EydSYFoXFUHk8PA7ASyakf8g6RzGyCFsej7LEarKj",
  "key34": "4aZ57qBCKxED97oky3k1Q6RHCvqG69Zqo5D3TJyaqsctPmowXVzPfsfUFuVuoksu4jdecx4kmFJsqByHXB8Z5Jvo",
  "key35": "4wKbCZH4ouC5ntA23tvsvMjdPHHvw4gnsDiBtMQV7BQiQSiDoQhkXt513SFjmWhXHR8RV1sMDCtPPLcowfvqSW7q",
  "key36": "FeTEH9ZufLijJ9DrkeEGZRHzrXBpnk1kiYqBPvjMw8WxUTck4jQuonwiYpHgpjbmEVzNCuaERp14j51pGH2jqPi",
  "key37": "2tRNR8Kcy5YVmeC1GP4UaYgBFc5rH6uTSTUfaW6Di3jznK23R47Hxi1U3jLo7ZYzL2WbgU7bfY4hyFkJogwUDh1V",
  "key38": "2vxzJNoXgXo5ALzVHANEYjarLdGNGzFSTbVrAptoz4B7M3RpGLxfNMv7Y8xkBJSMjC8yekddscaur4YWHLPQaKYr",
  "key39": "2vykFsMBJrCF4TDDSpwNQRsKauyNcSfqT9on16K3FBW9VzFbNV46reHhbiAERK1EvbhYNrPFViHJQLCHcCsdWxuF",
  "key40": "PHVxJDVZbwiT1xWnM9B2ZmAGFtHMkD8xEBS4L3hkxmutnif7tRSig7hrth5dk2SU97HmJYTx2yWSrqdfLy46D2t",
  "key41": "25wZHqo6JkGaMotvNRQvuNmQ1UF77kKvJiNq4uRDPJi3egHr2gZU2NaeboC2Ut1GqUxmpp8m1t9jyBfByz6uf5sF",
  "key42": "5tvdky5zac1HFXQnLC6MzWyBmxRp3XHPJQhF92Bt7tWtGRs1iyhQ13MHyJhorqA6fapPxmMomrDsjnKBPk8RRJRn"
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
