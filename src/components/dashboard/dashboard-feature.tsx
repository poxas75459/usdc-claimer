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
    "2Hmuxw1km11xn42TWTQxc2s3wqLnxcMkiaJ1WgsepaTqshFaZ1r56WCtaufvR4Ura3ge2UTMKSfmXvvDqvGsPS1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uXgFcKbENqY8d9hUh6TdeLEH5kwi9eirCb9aNYBHFGpEBtzc4uAQCB3C5PCz5whC9oWWqqgrfL9Gxy1Beq8GgFH",
  "key1": "5izPeQXRVZUrKXbqk5dUuKC17u8toHmGSwayxU7dEjNzpErJjptRannntacYFEsyzTKh7u3MZKhbjatVxYNtJCrD",
  "key2": "3qPDkNnGQU74znSCPsYFd6ooBeGzbRCqZPZrkvFXGG6ejQZLjmSdQnAniPfjmrVvdmBPkKPXfxNJ8E1jWPhAkCi9",
  "key3": "34hZXJEbjM7af2SqNa5m92PctUpZ3UXULYnyyf8xYKNZpPTRKdivFJASM3Q4eQ3L1gTA1R19MtV3WMoHDh6MficK",
  "key4": "2CjB31hLR66FTThCmMPs4bVDnrJNeiqJEPkPebDYbED9pRJvvyxBoGB7cVs9hfcEBrHnJuEGoSdJwo9nzwABRc9T",
  "key5": "65y3PYg6ypQPb9MfyxBYA2sdeKE2RaeMbYZjUBo9G1YB7u4jLVnkjppy9bX9edsJEZzwwLMcybKkXMcP6detox6T",
  "key6": "5ttZXpzx5dS1WT8ZNvYVmx5RJ7NQEhLqLcA56UZRSpXQQqqd4T5sCh2ddbyTtEwEU4WTDvrvmtat9gL5fKS2idUd",
  "key7": "4GsHQ2No5qip9RMumFA1VTzRwcY2xxdq8hiEJxYseh3kZGvYCMN5wgoGKdfX2KC5XQznxRoBnUPvq4MnFH2qA2Ea",
  "key8": "53nmJaaPPK1jrXgtAwMUSonSufCJcAve7E19ZDa3ZtHGfwEr8AJ4VtrdVyBjNpT5urLnKBWgniuFJaxuRqQ8HzQ9",
  "key9": "VhCkCvmxw9gGNY29jtfc353FE8TAmUQpDLgpMwFD7dRnVUQxKqNaA4skbiB7Vyvrg9TThxSEYn1PnDTGX7BdnnJ",
  "key10": "3aeAxBDu5h1axdavjceXzJW85xtgXMCLH7zxHD2dpiAwt94WVS4pDjngNk9bvYQdFcLqfTvgBzGpxbb2hytN7iMA",
  "key11": "57eoKNRyV3owypFFxRx9DZyMtTwjekQFuc2WU2ceXsGHrH62L9jszujdfqvaWC9V9RopNycjgDZ3h2JwbHV1Hzvv",
  "key12": "5NaN5UWYjCAkBXobN349ntoPnm8tPwFwrrJ4XHLZQEvE2eibWzcsfRMjjR7FNuYSeVac9PMKH5KSSb4DosGaJwFq",
  "key13": "2YPAUyaetV3kgfKaFbgwPCsMoCRufsGeFdPz7H2yTsVPden1FzRs4drFeqdTpnrkeoVsy2pY4wk4Sonesj7Jntx5",
  "key14": "5np61oh3UYU9YTXZEAyNVCpyr7vUHPJcZZMHfbpYpUUcdcGuoeLJroKNmofkdc9gvownSoLc7g3SfhN3HUEhefHt",
  "key15": "3YDqqCB3QWPb8fLZNNCckA4vcbUA3ue78BKHVWo5paHzfCtWymBYMjKDJ54hkpew1PM8tCJqAq1w8u9L915kt2DE",
  "key16": "2ZTxYbLJpdPG2HK5PsZTBriceSXfB4iraEKLjF2CkVmb3rKRPw5xwy4HkWDR7QEMDMk7Ag9XJsQicPKq4zwGZ8bM",
  "key17": "3hjVaHGJDn1XcBAN63M67j4H6vqFuPmyZHVorfqX2wKHz8VqqSk4Gn9v3ujjT358rXUzVKrePtXTCR1TQDEn3z1y",
  "key18": "5CMHXJkZEsFgncguWjnZsj1x892Rth1cbM7nNAmbD3BuHuA4uuPyJz4C5uSm2jNUXhVHudWVCaUsQ6SWiFCVYNtt",
  "key19": "5AC1YSf3pdaQhUBvM3cfy4eZSeN3kM693sMV3AQfhDnEdSf3fxcRFDqkpz3zR3P88psvx2e1pKCuzrtbjyiTKcpS",
  "key20": "4tk4echa6RwKGm6JFxWNwngx9JrTm4HsSrgeKd1SdnFUyjJDkviNoiyWaWyycaXEx2u8iG9K6BrUTvwXzdBtQXWG",
  "key21": "34mL52iWf2VCwCpa7nv7fFa4xaGPFeeRY5PXuNQrVStAoXypdLBYge26LTJ4FVLhJggMXCHx5DDLPp7xviqqGuq5",
  "key22": "5APzCFvjQo4p9nfVZTDoc35fhGHdnNephR7Jdn4KUYMrg8DYH6Egh641bSPuk4ALgdnWG8ZTYdrW7AUY5AdVNaBm",
  "key23": "5p476JqDYBJMcpYExgwBiVD5rSmCbkHVvPdbXUw8rXrntPh2K24asWGnnkKXCAtddJm2Aa6ebvwZdqCYKX479JPC",
  "key24": "5J22UwzFpdCMQh4qmLdgTkGDSaL7DjX3gX6PTk5zqNvqJNerNUU5WkLb74GuVVNkHewY7iZ3uifJ186ixu7Qe66X",
  "key25": "wC5DTYgXrZNMeTPt9seSc3RArFeMNWuc6ahvMwQQB6CYxqapfF8yZ8GegQCd5d1VgNUP8TvcGpYWr4KVMt12Nkm",
  "key26": "57CpqRRxqqBarf74YWcVjBWfZwr5qdU1qF43VV7vtUGRdb9WtowCdb7YddDrD9tsZeCpmPSXoGS5EQ7grqCoVGBF",
  "key27": "47ffyr93atknNUmoNMiHCL3o5sV7AvpnuMTPebdW9mQzQLiksLtCJzwbpPTZTrow1Kd7KgL86GovNujwzjFGyMx6",
  "key28": "oFMhAcnrWrqRDwR85VsTnCUPEYtyF5c9rQaQBJKWVoeTCE4jQYx36e2YxttM1VCiYbvbsp2oob7WbrwuXQ53qjv"
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
