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
    "58ACh1NULy9qG6AePrD78R8GYBKRqTYrXDNa2mq3boPg9HT9u4EZyrK3ywgixTEWNyP3SCAddTgA8AGNauuoKjqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LfYkj7JhJQe87qwUYMnKmp2sMh1KWwod8pGEPUvetWxVadKMBxZdqLtYJakJBKD4E7KZ3zJ9vcDRPvXR7yPC1zx",
  "key1": "3qFsY2jKPsESgtem7nAKY2KSjweYxaCdJmVk5QuZ5TwpxckaaJaiGyHGVfm4nyi2PurhpP7BgG8LLJFcSfNsj1q1",
  "key2": "URQyzivH6azK9K9dzkXuRY7BpJZ6ymTxJAgBadmwe93zajm9HqK8NAKTxb5dofJms72fX6VNShaKmVSFQsjXCKu",
  "key3": "3XYrWqTbJAB6SZ5gM1Tr99QzWiQmgoGB5iuAhE8efUwmaL7PRFWe62a4qks5aMXUuZSm52wDNZWKR7FH1f1MLYN2",
  "key4": "2BGVE7TqDgE5zsV2HkxdNDFEPntCmaEKYWCx8ZPtZ2FW8sJkVQE6eFGvvNHhiBUmbek1d14P7FpVLUbShRmccyuj",
  "key5": "CvZnh7s6ekNujtRL3eWUiYqkXQ6aU8Mtfjboasw9BQRGRUZy6CpnSLQ2U6HLMXsxM8LdaX9PpCWDNsCjsEAKUds",
  "key6": "QVZ71UpGTSRXaSZ1EBj7KqkKy5RxW3rHeFiNLVp943cwfDs3bAeKajdmuTMvMtawMoeetXaZj8tuQ8jJkYMkMZk",
  "key7": "vmL19jGTdhTrf83jNMiT2odZPKJecfSHTFBxhs6oEi4xmv9EhXYF4ArfumcJHoQWWzZgoCFp2gRKd1HuRNvFgKG",
  "key8": "4jCoiWAEusZT6JEF89aMyz5vkMHrnEZv57YMt2m7cdmHxRMjbXoNCcoXHY8ZQfqtYLCu3W9W4oBn5NuJsDTNa88B",
  "key9": "45qggkN8NTGP2ak4hH2Vbwi5QRKL16nte89T41VG9EyN5Bdzx8tN7912mZNcwZZxPTdYWaSyYzkHzyzsjzNz1sbc",
  "key10": "3K352MDHtP9gmJPDST1GEc78cMpNLJRrNqvqDJMxESEZ6t6P9PxLLGEZytKgMqf3YqrLvih16kx4PCpB6DESQ8dd",
  "key11": "53PxF3AbazAHsdAT5ppMZXX1xfqqowCSGGMciD6so8GUHRVdRXaaTtmEY1sX7Bw31FwEb5bk6ecaeRd18hSTkMmS",
  "key12": "3Er34puDNfBihnC4tfnp4jHswdu227nQvWhf6V4zZ9AojXTJNuUZR2c5LHD89TWKhC36FHuhyZTodsimuRKCrSvL",
  "key13": "3WUNevyHQw3vmpP1EpaLwzXc1PWjybCq2cLqcXRN3i3g75YTidHtdGrWrh3sK5sm8zPYGTeTJYfxZ5oPNmgassSM",
  "key14": "5jxvW1B9R2fkyx1ERgbvNfvJQwViXUsQ4J1a6E2Luc2SQ9Q7YAEYvzpNvRE1EGsR9MM1Patj5RtXS97RYf2eTtvg",
  "key15": "PCnkjECACB3JPPLFvMV8d9YqQN925wedHDKGPPVwUVR8fyjQDiSswHRsLqkBvg8PSVU5EfjvQx68fWr1C2ikCQo",
  "key16": "4uzUGXiwM1pVBjd5bjTsFYL8p5iRMeR6Ji4eokv1bFpxFGTV2KNLTi6ry42HxHTS7NX8NXCVccyXmmtSPEPaEkJw",
  "key17": "5UCNXUWW4AFM8ytGRN4Gpvbh9wDZavgZY4GdTRMtT3eJEFs9HgxT2MXMpXnz8iK7c4wjUZySHRFiPGFjh3mkkdRA",
  "key18": "3HMvvtyLE6TfcYUTKKAn3a4E9n5XnNxMr2rKbByj3gLLAPfsjkkYzZCvhZEVzaNs2pytfCh9h24hbeWL6otaWyRR",
  "key19": "2cG2cdiPUnuUZoLALh3Be4xVhuGkXEjKeU2E7JtJLw5hF1NF9UxX9MsChh1VJSAUAHYY61BhtVXnxkZBb1pemwrm",
  "key20": "3qnJTfe7soryk81cfFKQW3wEJYbpJDnibvaGxsTKXnGce7BCUgmGqwAmSafwskb4Tk4v1Cz2jN72WmtkvKCPwooH",
  "key21": "4mXJ6x689bJ6z27CsiyR5gZmWPnWT5yxmRt7suj1mHbs74fTbvRuNRYApChAvBf9iDQ1o8HeKzw2eJKtLcjZvXTg",
  "key22": "3DB9SMUk6oXzaMtcn1wFapKhRWyrHaicDiGDBSyoqWhVcWs9ZPz6Nuq6f4gLZhmyVGKoSigytHR2G6hWQYLHZdyE",
  "key23": "5bWKDeMtp1Vr7jQJzu8dFGJJMjrsxjoFdogNarknnaYnHhfvJeRucAcSsMgxvLMvPcB8tnqoakoTLZmM93VhiA1w",
  "key24": "2YjrKJrpdFa5S22v2cy9AwWfCqofssJQM3ypoaFPZjnKYJKPpEoYz7SyqT3zHZyNQpEioiJuVsgjCLua2n8nzVb5",
  "key25": "3PUaUqHCio3X6g1FEVgEQFWHdq2Ry8bibzMVWLxkzBaYtPtMfft3gp5U6nnFHNqrT5cPMtscHqTB4JKC1Vinm3P1",
  "key26": "2vTbFJAirZRUTnWys4oLCX8GJGtssKhtMzEXsUxz4SHVnX7ifuqnG78B2TUfguN9Kze92ZkbcYjuH4irzqKYtzoU",
  "key27": "UxYYBviKostL4Sxkx4EUCZ5UuV17CwFpR2cnXVZfd5fi3u7xGsjm869np8SshaP17ztd4YJVFnTDZrPmeNaKixR"
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
