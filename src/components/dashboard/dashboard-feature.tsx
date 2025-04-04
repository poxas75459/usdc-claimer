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
    "3i7f5Ydu3d8A5BNHaVondp2Kp4ibnehbeyS3BPWfL4PB7ZXuspB5EWkJdrreTMYJJk6GnKwZggfKQDgJqkof4LyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DK3xuWa9th8c8oRN78Yusb31vhXWvMZdt7W4muHPCQk7AtKZdvMergeuDjQwtYNH1Tm52Jk2m5hFTNqnbjH7ysz",
  "key1": "5yAMuftB7npQC7vx89csmSH3f3sw3vgTkZbeqjztPFLpJc9ZKN5nGXy47pwB2CBniKAXEV7aMyrDFBM9DxE8q6RC",
  "key2": "61v97E1D4Q1Q2dVD8UrwEfqRsTHJ7pkX4fU8YN2rmwmTgCQqnKuPohHi3fAMXLzYecL29sUP2U2u2yWVBHFdrkKy",
  "key3": "35tPAKuPenpESqtRKkLoTuQD1VfN3K9Y7wGFZ5aso9mL1mfamM6CaN7c7SeVafgQJX83ZCL99JDvutmv4kgg4kWo",
  "key4": "2jd8qJjNEnYAx3yR8GwzYrt13DBLSEsxkKYSHepRkfRCy7YLjPqmk1PdnQr8px17pSowdhd7Gy9yK1dfF4tWWu57",
  "key5": "2N3Kbm621HnCjYcgrnvbh7yAQT3V5n8NuepGQysyGChXp3mmij4MyN2BfXERBtkP2EfiXBU5x9uc9XQnqXLvZh4V",
  "key6": "DsM5syMiniwm9dpgpnquTCeo7kdK1P7bENJwjkr2MxAQTJwNX1h6wXc3bANzkmtMcXm9cqN6xVvfeYhowZxWyFq",
  "key7": "2ZDiUVbT2dwy92RAYTD1o5nAVvTgdp4npPzhzc6b3ABv4YMd3PVxZRtveXUjqAJbPKwajnEbdnbWGNfjfiht2hVe",
  "key8": "2Hbe7F37JbEAzJcfUq55ZR2iKCbqmU2trAuoGcfCVBDA2c7PiShu8RqZxkGRRG6iA9njbaTniohhfQuHH3L14Dm3",
  "key9": "5XyTwRVz2BWm2bp6dd5aE7ze68PJMSnhE4qZb2NxsGn2BmioKFn3eF2oEpXErzHRN5yzcDjWBvgayvnJZYrRgWP5",
  "key10": "67Z8AwfHcoReG5RtF3igX1Wna4b8qVhXeH8dKcqAQ4FsCYriHfmjFgiHZADEhwrEd2vZ1y5deb9QtopTeis7b4Cc",
  "key11": "mpPsYavxQWBWxha6iaaVpM8Z8SwKUUq9Q17Y86ztDnADVSqY3XbQQwLkdwQDC5CUcZfn1pEg6Sfo6oq6fRhcP38",
  "key12": "2hAwrBTKUmT882pYtR5Nzb8xRfKCFCAa1G2tdc18c5oqANCpSPJwc36iW5e8w2jgA5saCiBTfTTp4xpdTwHWAxgc",
  "key13": "4LRAg76eUanDWQUoPC1saA4iySV76zPGqELhnMpWaZewK27CdcyWPPggAmiMbpYuvseVWswbsZLydKWExRTaZKxi",
  "key14": "2LhMkDA7ZqqW8oVZTgq8F6wiTdS76TVsj6KRcSDFpV1MvKHAYoBHQAVpz8owug9FUR61a63rN8Gm8B7A3kdMY4oD",
  "key15": "3NpDZQkXFj4Cg6T9XEV95ntTsd9aaedcuuKXxMdUpzzoa1jUVex9J4DFtRaoUhve2bP7jidNogo2iyz1RUsXzpRv",
  "key16": "3cW5tuq4KupgDZ91bJj6VLj5ArBzWvQsR6g5onq9BKpCuRHSgjfmMvDnnZZcepwDwkyvmcEAkFkPkPgrc7PbK8p5",
  "key17": "9kR1dtQb3s5m6qULjGxfmMAyPi32zCvU2gN6wgAhufP1Fqgk1mnoTwLUoQoystQea6GL4gRAZrgkpetvqLC8oTR",
  "key18": "4bfLSTHa4j5apDmFTwksnZq3NsghMBLGqZ2gjRch6mEGA1jHXcnyhDrwYAxsfmCdobRpfTJtw1p7hPn9bUR9fA64",
  "key19": "5SH49XtMtZu4LNqTL76ZM7a3xN5dGhGuLiTvZczgKZwbosjiWLQ4tV16LEgVL5ytmz3bRAMrdtTxpXxKYSsKm7CE",
  "key20": "1ckcVzN4YLtWsg1PgULnCWNG5ZTwmbgow9x12Y4Xkq8wF1JanrdVPnLp3Qj5epipyNxJeaCrvJR4jPHj92SXTbQ",
  "key21": "65HFfBYLsLjtFL2aZgGXiDWEZ1xi2ortYdEZdfTVtsFGd4AYpCgFoVhfmyqoYuLm6nqjS6TXPvnbbTdXW1Muf4iG",
  "key22": "47NoJ9kZaeuHsxyL2qDHW1qaUMPVAmjFdbbYNLg7L22xKFghdbgmJP7Vx1L67qmUjgkqtiTCHCFc7eGPPwvM9pbE",
  "key23": "39HBqr357Q6Q6G5pAeUrZad8GPVkgVAL3Gbm8RY9RtAgP6i9XpvuBCuDzsuvpHt7Gw77mQHhxCyqLmDuu473aTpy",
  "key24": "2G3wVTvE23NJoZzW7U4CTXVT4GXHtbXyuk3cYbZi6nzP9Y8xXiXaoBzcMcAgKbY3oG5DMvB6vuvuQoPVvXB8f9aX",
  "key25": "5NQw6JFTaWNhtiRnjVzBasiJZHbpL6LPzfvkWxK7hustzL75dscCwFp3sKEACeue97miZqVhsnoLTw9Yu1Juzj4T",
  "key26": "43vRbL3Sq3AotY4ejN7ocg5bBxhticfU85WqW5QmDTxVzkvf3pQaXqjhohKujaA69afncLozLdtwZHxMNwk5ker8",
  "key27": "sWkAfEXEGm1NZLqdaxXtZnZyvGhm6pe6Vi6vZpAvzEWgJTV7PUWhcATFBfxRaUZW3tNZDXUA54JS6Zhq9uqpijv",
  "key28": "1KEcfgjas6M5uSY2yUpNPYzgNXRQdaiRpt5ZJUYEyWGyhMqSv5WEfBEi9GxA2ZxEqqwCDfxhAkBAdS3Kdd8AetY",
  "key29": "55F3Y3zum2F8EZfHnKFC5dNjPEPKBrY2f3Ak6YGz3WRHp7KkAs7pjwjGsgvz2AS9XNz8DYeqMi8jU9qifCY3bc4F",
  "key30": "3DoPFEf8q7WdLnPEzmVnkMzsf42kmZZD3XCqvz5ncFgR2A3itwysdyvpXF9nitAhknWLHrdYGpYy9gHRc7cgrgkM",
  "key31": "5zBgBNPsc1B5rRecq68sTXrUjJohFmrakwz6SyLkLtHcLt8CT7mFNKttb9NsPc5NULYTPCipBTEkUAScgyztoVox",
  "key32": "4GuV28TpwY7SQZFNhnnjywNVxtrMSr6V6SHr1C96WhmBMrP38qrPZvxsSnZP6aFRmxVgDnp1yh1Lfhpjb21gBHjH",
  "key33": "4yW8qE8UUoVJqsdZTj412DZrzZgsXXcxLjgpQNqkZrQyf5VaPcrgRYgWZLoU8kxxoaMPdt3JxxEikj8DR3XRwWrP",
  "key34": "35VeXWDLJgs44cKfKsK4idK4pYsx2DahxQppA5eqXFnXLBVDBv5RvnSzmgSWFsQTkr6FLVNU9MtXkokjeQXsceu4",
  "key35": "5vMFYPBQQcuipUu8BiqDF4v7CjZ5PVLy8uF1X87fx4JF2zqk4E2EmfD9418WtwQRd3EGxjKd5j8134FEDAVExc4c",
  "key36": "GcWWthHGkHncivnYV3BYABfA2CYBoao8chNFXHxDH6X4tBn7GviziGVHiGdGNhh6YdDnWVcWd91ZChsmnx4QyRk",
  "key37": "3MQgePrdRdfyBjWviG1ukkWCScrB3M7JEMwUzMMSg1sCH1CZQqLxS8yCs3LJtQXALEsN7GjeyPCMGaQdXmN6L8y8",
  "key38": "5FhUhsTy4hkniACUcKp1D8VDUvzefDFSPdVMZzLTjLEnUdz1GBScddbu7JMj3nDniJokypp9UnFpL1FkeMd21qna",
  "key39": "2egfjkFU6QKZnrNArLF1rLVnVqvvV7A2tQUgPWB7mSxUEVqhm3wSHEPff2bVdVpXULhHNwJrX7eh8GWQqfYfHmXP",
  "key40": "49WgojuALfay86g59s5WsYprxdn6xaVPDiyY6gp2bVnY2uiTqCN76bHJe4FrUw1jshZuxbRQKweSsUuVnLJDp6Rj",
  "key41": "3eRPpFJ1KfsD58TbGK3CHFotnbodjQ1YC4Ktv657kBCxPGBbhHiZz1QUTzmwFSXLV1xXLAseiBn84uit4YHiiynH",
  "key42": "4oeXgf4sdiucxw97XKgGpZNtwMSqL8DEqso8BvcAVpd4iLWN9nBeianjDvg5wYWMdR5RTi2tVHnXjN7n5WL96jvS",
  "key43": "2m969kiLTcc5WJXVSFpHsAoP8SuREG9VZdFAYuPUKzvkkCgHbTb4ujaVxrS6ozKhoTxhfrt9aUjxJ8k45Maoa3xB"
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
