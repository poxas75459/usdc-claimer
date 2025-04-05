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
    "2RkPfYKz5sDh3WasverJZsb2P3q7NFvkhbHzVnJMQ7HRiWq78fKdugSBKCZEcmCvGPchf7CArjBtmcyWn6d7VzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qv57QtkSg7Q4Q3nUFGbv45dJgKhzSBFcUz7notj1yQYcccKwxEgsR5Pw3t8mYYRNUecQcJzS9N8EHsqHzY48y7P",
  "key1": "jBho5cbSXywzFdPXraBFBKaLMj1Nss1ijreNchJUET23XqprZ8ENE9FEwABSvBrbRmCynuEsydswWyhhHrvejNg",
  "key2": "3CZ6drdpzGfago3onF5gM9Gcp5DB9kAHKYhHKhav4NTKQ9W352tKn1WfgAqiQYotahp7eaE4tcwXeqJX2c1Y78nR",
  "key3": "UCz9nZouRWtDfeUALzGnEFS1r7Q3QnTLbGgHzBoryAGr6k3dQ13jKevuUuwdJKbU2ugZTVXdeWAhUnJmUtZ3c71",
  "key4": "ra7hwNifgeDXtFerNKWcZvGMVNJMyHJDXb5Md7fAwzqNn5YKvZLxiBz7UfRFxQ57bCJwJQ6ASGXt4EQzEHo1HLY",
  "key5": "2oHx3x1QdGSxC53K8fkmAPGaSahjQe5rbJViU5qbPxeLBYchjySKfaX6GzALjz555XpMU9rpsoXi4k3zhXdJfpUv",
  "key6": "5q4dyhxF6SAunygLEkK8K8P5he3exP75zogpxvPP9xjnoEnz1wT4jvCcVE4gPAhkfG4obydMFp88Rf9sxSnBmRzv",
  "key7": "2qJAzbRhKKhqDbF6UhSiYfZjc7HQA9KwpqdtFEUFDVgZu2FZsarMaU5keQGmne1z15tsNPSmSJRXnG5bQ7H2CKaM",
  "key8": "3NibB3jgydvLqtNuSDYmXGF1grWUw4N5a7xrGkxPK3LyE4EkNAN3XGra566WmjWUreo7e431G4JNfZhh3rPUSMaH",
  "key9": "49wUaaDaifGGFodsJY2fYZH36FQZYykcMpAzP2AJtdGu54vTzBjNPRYgFMctQsK9vKH4Nrm1afupvrWTMwez1bYC",
  "key10": "5SR9ZDqJaPAYs8kF2DRWxufwEq7yRHdjZ96YZJa93vMgY2dxjioqbtHa5LfipzcngrWUV8awF5vGM89MspJkQ95b",
  "key11": "3XAhPtJjtEUpLgyUfYLXh8XuMHZ8wXQFif4AchfiAz6STy8zJDZfANr2yyniaBy5QdQekzsdinxVMuQjWvaJy2aj",
  "key12": "3bnBWnfG3Ek1zKw9d5PgTvSErGQZda6wYUi3AyQXFSPdsM8DyAZ4PWYX6HdRuC1xGjmWxyQhGdUfB8qHwjPPEvFr",
  "key13": "9iaUBeVfevTo6tcSEcPo631FqtzUGBxk89LyvnbgSSFA8UFokUYQzeGJVrUuJK447R9NKz7LKckJsWJ9Gn8ehjR",
  "key14": "dpTLY5HrRuBAYsvfeQnCyc8LKXLDVCodXq7DVhdk6VXVkanyFAJuod82qSAjbVU7NSf3QeoVaxieAxRasi66UsX",
  "key15": "AQLem5TTiaMUVKbPcnQndA3tdujiqmsN3zutVgz1eFNgrGoyLHzMCRMNeUoxs3AqB6UBsgRZ9Z7mozQkPpc82FT",
  "key16": "5po4Q8Es1we8yfj3ftDU3cReVSSFHmLdAZnC5Rh5QqS7d1gB8JjKCZAkc4tktLGzA2N7hLHa78ykCCJJJxonE1BE",
  "key17": "5z1RpPwrM19gxRH7uuLmdyGao1e8mZFTKugr7b4WfQ19y34f3rdQuZWuf7u6zR37iA3sGoK9zUpnRWWFemGSHPaj",
  "key18": "5ciys1xUsCqLaZQb3KiC8Rqp8j4wEXuu4qFfzgdPfFd8d4BusEZGCTUXrJJjtKu5Mc9gbSBH5Pw4sUhN9t3LSVKo",
  "key19": "27mbUxacjLY24bGacPbj2UpSFt9TyqeFWnwTZZL6eKQiTPRh7SC4NnhPhD2BvTaS6vsnjjiBZwqcVkLaqY3EfvJh",
  "key20": "4xKrNP65GUvrHS2s4Joos9AXM9pb39GTE6AQNNQFv7eqXLiRtVYYVqxnAVGmJFQX6csTSFykx5uFbnJUqA6kApZr",
  "key21": "4eNYXmF85KPMQpv62Y5bYw7umAWrcH4BSbjEmP4F8Sa4BgMXLg9BFFjyNuhQat3cYX5F1nafJFo85JzgwjB35CCY",
  "key22": "1pzeCkzn4roHwAA5W7YEa6XLGH5YhrM8XZWvHkAjRCV2w57LRLdu5NU3C4kYfz849o81j8HiL2acT2vwW5qDDmH",
  "key23": "LmiQM6qzo1pDwZdaTxz4iXLYtXqZbwi6TCu68U4Z2Fnhx2Q951m33YUGUtZyyWapaXiaejwBtRVjCzaZYAunnkn",
  "key24": "5Lg5HQ2WjJjzNYXKbhKnbHNj1F2SPBTggTKfBb8W1xcRVYQcpWXewUqTf1wtAg7RvmSAnFG5vxvmzTVE8Zbvj1DK",
  "key25": "4LWc1aXxUXKsjuAZfNEi5L9scmb4YKzkRTLGUUNsV8A3w5DiaXGZSYBPJLtFRNuFyUaihavLBhmYa4CmU5XwnSiz",
  "key26": "4Xkfebvez2giTwHGAoxJk6SyxMM4uMc4WrsDVdbtpi2y7SXtqDfiK9ZqPmmS3fGx18jDcXd4Skjme4BFHsfk9vEH",
  "key27": "UDi57sDizzvyNbTLpQQrj6o8L1ajLFNVxJJ45zBpJZXGrcgFZ8GhTWfqv1Usmg8MzhRTjSz8KBBDcQTf9cqjdjT",
  "key28": "2WA2o6XJeXJUNuRWmLbLpJ8kxKo8xMpUvokwuHwMweciAEks4JooSFRd2aAjDTAPPqDfbxppSD1YNoTnJfZAsn5F",
  "key29": "32ekNB2gudFBooevsyzTrDZS7XPQeJRC5h4f2WKBq95RFTnn6nadvdcxEzfvVzNW83QdzSAeRgzpBMGyYUWtaCrn",
  "key30": "4rm7WWJ1KF4Pauuf5KLD3G5vWw3XdewtQQRFHRjsGBPkfu4ytGfxNNzpiXDcwptHYo5A29YWPxnvSzNxc1uyP2my",
  "key31": "21VtQZEjZzSjQkFaz2HhmXtV7zd3ABcBQ4834pwUL9avFzE6BPWbxfNTzvjxWUdbbFbcbsokJbaVnEmEE2FgmwPA",
  "key32": "UUWSbQ42FGmgtNqNNNfETh4ExfPvhzjkGepFFf8D3zsNZkFEWB7UV5AcPMnUSgDAtaSfoVDoYo5qJB84VVN4f82",
  "key33": "37vFdvtXHVFhYMBLcXR1wvNvSENRHaDpMxSZs16a1SyaUZ15yNAivjY9BFsRwXpLuGeUMuHGhCcHrsGqzyeMkY7D",
  "key34": "5Co8QPMjMZ3fXUbzBRUqhffgujBi673T2so2UB5hUcj54fcciBfb9wBZTA4UsnGu5pRd57yYDCYvj8vzp3KoJSo2"
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
