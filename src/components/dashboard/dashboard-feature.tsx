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
    "2iVkwywjgRD76WxqwWFAGSKhpkzQF8QZy5hWLdZnyk5Uh4HeRciRQbkB245B5VdoWzoH9mcC6TwUNijsp5yfP2Wb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CS9nKWqii1TxHG4ye5SzghPbpDy3NTWDkErr1Fqsf4GNPJE33RfooTPrT94NRYuVBneQaLWryoNAN9QZ4CgqwAv",
  "key1": "4JjkDkSZ1hH9aYFeaTbnHsRpTuB5nYfBtvv99GKTFWqiZwMsS7aEePm1VMd1GT2khvmUbvDACDjbZBDujrQHWZxA",
  "key2": "2ZmbvsCXL98x4aHzAGjSTW3PiKVwUiL5jJ7owvC12nfStcF6qEn2CA2CApZ8Kzdhf6TEdwDHQ11sktpv5GdBf9et",
  "key3": "54gRHJeQnJUTuzwQmsNwtrn4r8dEoSZP2Dfm5TzF48Qr4bg7fAidpW7pkJgpy1NuZMqVTkM3p87UQ4GfWSqGME7B",
  "key4": "3XcTJR7WtY61BR1U29CchJRZUQ5jbkZfQbdy3RuSSXzHm6ZpFvkkFswxBi8n2kXjMXqvttaYdXc8XQRhBxZuj8zb",
  "key5": "4NPXWESz61Er2qMjsq87AdrHh5qJsmT3Vn6fYJusHysqRUtSNrSpDpM456Yj29iG1CPbCmXrgm7GEQKmW1sdDQa6",
  "key6": "5u1LRaVvviGtyCvLjZcJ2demFAZmeRyyfivXrtMTVqYoLWNRaE46yMuU1Yr3Rc9NzU1zbqyZvCJ6n4qWJmEq9sT4",
  "key7": "2eEFZhRqaMUgPS6A61oS73N6jne4EAs5PsnTM2KyPK5wgkd2JVw6nqxbxT43sWv7WjGXHP1fDRPUjRuBECSTYt7Z",
  "key8": "5yG9BzNkZdZHCpAzqPa28WaFF2unEGr21WQK8e4N47qsKj48qxSWknkzC5RYHdxELZnnTfxUSoGhivEfyp4DnAyd",
  "key9": "3UFh53AaKWcZHJ1qqj4hrZGCHRF9v7oYt1mrxg1JMqgXvPEQB1F83y5QDHzd93jd6VscLbDEA4y5goUWvDE8R8qw",
  "key10": "2f3bDVHbMFFy6vQexnYJweK9o9CyL2zWtPXN3ayTbPeXoDNsnUYGuYxxGkmApk7p3noZvfzzatB3G3XzGUAdzfQn",
  "key11": "3Jdtnkwp6nTRU1sGWhNfZ3ZEjGnJ6SNLVCou9rzm5zKzddXFuQzxJe9LBbSRrX3LyGsfSEzS134KU5Qyve5dFYa1",
  "key12": "247g8pEYD3vxNU4dceZwGocptzqUpsN3gh8TEvQiDLS1asnCbMewyZpLJbN4FvijduwRVKh8wsDYwTTPtbCyKBV6",
  "key13": "2rGoJb29sMeUua4WC8FZUFZyNKE17aPVkYD28xtm7hqrXtX1AF8XEUt5s3ZAReptborz1nFjxkvMbXMjmoFW8Ysr",
  "key14": "j6iyNF88ott9yNjM5YiyKCTtThyarabYtLXdF1SXkr5AWEbbyUdrURbKnFevo4CzfarvrcpnF4ZxMivMNQ5R26R",
  "key15": "4hnnJaHjbK2Zx21aDVAWPsSyDYhESKMqZ6aZ3H1AQYEy5Y2GMTu2NjvF4L9Bszdxa67oBwVjMFPc8LR7tzBDXcxW",
  "key16": "4YSYJyKyBYoNpQPAQ6d6AuhmiHXEwQMZM55h8R9t6AXDH6RpdWdPengrCrhtV5zyj2QsBuxZsVjJ64ixQxaEJ2j4",
  "key17": "5FskZTVHkQYcTe8GqD8qihPVNbw6EVCmDb2NDTpViKcKtDkLEZao2LJ8dgkJmWrz7FqH2ENutVgsG5wv4x5eYXCJ",
  "key18": "3LetVmwosidnEXR5gBC97vkjFACK8Mv44rFGn3NXQtmybzYJ6VFvvLKLBc9G5r2VMTcn6LXmc5cnmP9wiDkpa8zG",
  "key19": "mDTL3LnRGraUZYNRL4tvaYqo5Z9d712V3CjqhZawyxadKF2EGhEJG9Yu66PArYSVVyQqReHqVj273aUDAwGBZ31",
  "key20": "4CveVrZUUGjJCsE5mh891DCuh62xtdAC2iN9ApyhXYbYPSbbETbKBPqSNJ5mierihkRyGvV67SZDaBnf5q8Sdw1D",
  "key21": "5BE9gimwLhDenyCwKtHS5ZEoMJ9MvFGZ6eX7CsvZxiKS9gSmQv7h86MXexGoDZiwa2vzHLSWVfGrDaJxPg8yeJ3g",
  "key22": "4Am2RU68zbpRwsTx8A3Y7Vdi5LvExn1AiLVJ1aJ7ATGJUcxTsdv7G1Yan6Yb8YdF3RSmqf4PhmKLk9B6P5rs58mo",
  "key23": "3vtVFFyt2A7Pr1VutecTkHQjpPFmaSQpyaS7DVfyLjpgZbywcZaAhra94g5r7FCu11EF9GhgKf7Ats4DdTYSF5y",
  "key24": "3sgnrMDJ311Vb6svEXhVyxQyvk1LT5PhNfTJB2fYVUceWzpx9EhSYKJ2HLs9CQS3c3sqSkGvPMJnQswdgFdNJtaS",
  "key25": "4E6KTVnNaWnDMqnugFWoDNyojBQzHWEP5R2eifaDDCeNeaMoWkRmSfWx8kuLUmUkSSgTx67cMXof7xdkSR6xfj2N",
  "key26": "4HYu5JRMa1kWkatMhJGDsmUXvJcZGa8aPwrp5pcdbAegTBkLuFgm2arVMgWmBmKHxttdGYgNRrBe6uykUBk5p4ey",
  "key27": "1Zp5ZgnufsQqoWY1k74uAEqdy7nUWuHEEAf6zZW62Af3kjUisTFNW4uNmwbDiYipyQpw7MRi2hLjL2CqE6kzmSW",
  "key28": "29Hch9c7AfLbztEMBwPTbE4jRjXFEopMuxQVWVVEVnQjFUJxQd1Ruur5KgFEVSmetYranKgAEaWzuJmSjqZLx3ak",
  "key29": "2au9mTxH56dejqAYD89bDYcGEA9rsFmX7bsm6DiQsvN8RqTDXVtiijFiUrc6hW9Mhed9DtvNqA69wqiE63FWvdjV",
  "key30": "X71naELopP4reATVoVh59h1z14WBKE2zuYg9Nir2XrbwL5D5TjmxSrY7JtX86NoL724tMVGT9hzKJkZKFPzS8WP"
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
