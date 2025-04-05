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
    "2wcoio5in2RmgxyJCGoMZXym4gauGbh2tUHyPVn9ggwshfco5rb7Kkp7sHGAZ9eFoXJKcrWAGiJWvpG3fNHmJ7vQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rgu4G95vyXq8TQKUj2Y9vuPV5stCWKvUs1HYTpGJ6v9euMz4Vc2SyBQjrNgREtD2qCs6sCdDDwTh5PeQPkKmB4o",
  "key1": "3xoeW1U2ABoozAxmoHg8nmMuMC49D9oF43wYd4woTjei45K3NY7W27HWymDQ6gHAw1HWJ2kFjeJRp5G6K23yYrnR",
  "key2": "33MJETqD8Zp6bzboyz91hFMaVzTqEn7wWxBkBVUjQhYfDLEywxtbN5hAm9rLxYLQUe2BbCYYBuQ9r3jjAKHBkgxu",
  "key3": "amUthFuT8S6deRp6H3V47Dzv4bsTu13VzBM51bCiekKaG7q6PGH6Uu1s8sv7oFxBC2NN4CS3xyijmXvpCnRm1Dy",
  "key4": "3Vz2zZAnHS1BENKAEDo39zp5qtgcoYp9e6jxNhGHqDDysApGwaMsFiWdFRBC64kok92KZw1LD1A4dzNDAF76QTde",
  "key5": "474nAxFeqk691bx4Qkr3oVBsBoodvsj4HyoR5jUBpdHm7CkEF6P5DmxwyaSF2iqBonM26UhngDQZuCcDnEoED2VQ",
  "key6": "5KhU2dJm3YreafLmd94wpJ5URtNz7s9jv8VmzE9XKFReRhuG2urw83F7hpyutgZoEh71b25VCZXufzjKVyWAaYgp",
  "key7": "2b3afD4uSjAF6tG8hHXJRhGX87yygcrLKSzVCvXwzHzoxCx8EiXigCdzfAETFUK6Nk944qUv7NU2chX3gex8dNmZ",
  "key8": "3y1hMvwqJao813p752dHL8spY54znxG11vT1dsmSaCtegiCTcH5w6wYFkNbSAQpahMwrGKBJCw5HTZXyGN1GqkSG",
  "key9": "31TRnEN5TNRZ1LZAMsCgnRet5M3Q1wi6sxCD3MKHpq6rr8rghNxvfZzBfKiwP57eudacggTXXR8AAQh5hDhM2nDd",
  "key10": "3VQ798bbADQaiZh6dcqkmArQrhrF34wB7omw4abKdGPsEJSfamjvTrfekuGg45Fb1mqgDKDLZcRrTFQvoKnrDL9F",
  "key11": "3vXXGtJaKqzmfxPqWBfGFKrijrHkZV2UV7d93fa4U3jPBUMofTr6e9kRxFHT9ipE4sR89UkAT9JFexBZ76xN2UjN",
  "key12": "4o8bRzHAGbh1wNiQc9TvmAn8RJSurQxY5aRuphfYDCBDSJMV2mKA39Vh1u18MkcM1MMi3S73ucyQfXbM87eRCJAg",
  "key13": "2PZGwZrRCgQJiJgNKYwr2v4ordwsoEfgQMCGcNX3ZmeFSSem35932bUQm2tKM5KvcKB8hwkNxEU8EkcLVaxSKR4",
  "key14": "2SjawHiCEagxf6YKnehFVEQbeZNX1WMiFL3oYk1xqrPoxmQQnX6ygHxbb1FtFpHcDDcHsQbmtXVmtay4ZBBs1Dt2",
  "key15": "271RxGMnakhC5DCw9EKCs9yqTR4etEN9ipfQJkobGcH59pnXWHG6hxtReTexu2Qh25KjQbNiGR6oDZozD7ijqR7F",
  "key16": "4ALscJMR7BtJurYKCMMV1PDzQ1JeUkcgGf7yEbRQe4QXyQbat8PN9veqmqoy8k28UVHKndPANbznM6hUYjUj4Wxm",
  "key17": "4jGb7o4USQeXcSf8tAVEA8zCTCcAQssa1BeSMNjJtMABHWuT7ysB6365Xpyee3VnQ2A8nvqtZxREK5CohuH6FHWX",
  "key18": "swJMtyqWoU3nBWrSm7HZ7S7mgrPPnV6GWQe7yTDWSeFer2SFcL6wyUcErocx8E8Gmih8qvjyi9A9he7LHTM5QZ1",
  "key19": "121K6BXbUmn4jcbUwTQQR6j7o92mG99bHQRWrimU21qoB7sXyRH8qtKCp7aGXmWnwRFa53XhEx3vuEPv31djUnEg",
  "key20": "3444p6AmwLft4wcGC3o1eHGQiHkmzicLHaGWw61KD35cUSFfULHXQgGsNTHJCztWPQZEgiBpsemspdMWtGBXjCAR",
  "key21": "et9yJLD8vMK5vTCUy9SrHuCio9ufe38zJX2SKmVtKvvKYepyBh9FErCL7nfJJ8EH4EFasZsT2tBNAgCQJkZyUm9",
  "key22": "2FaGNxhMv5GybsknSbh7vCRugVhCAu6veDrDbLy4TetQY55BrNSgvVAjQBXSqfMBuEGJAuZHzDpnQq9vSGkoPfFW",
  "key23": "41YUYJjj74isrrR9LFL8Wq8tso2NtY7dXGuuZiMk4Mcmurg3hXWKdmRkhvfDcqsQQ6ASgasGTr6QYkZk7DWj3exj",
  "key24": "3qh9BHNntKcVDmHzGcf4TPTY4y5SJRGc8iJXCQNbMtGgXbUQwwvezMBtZHjtkVQsbNAaAbNcjS3wb2unXL5NbhsV",
  "key25": "3vz8cb6o9vBtsu5dmwRWKNYvC823bfnSfXKuuRGufqXY5iz75FaAbCxqycp1CuWBuFcn53QRwWwjS8LaszUq6S2j",
  "key26": "2ZL8e9usDTSoZCyXMCVe5b5yBGf6rNbBM3vrdVBwPpxoFEi2B8ijKHYC4zTuqwf5Y3grsAbHHhsUwM32ptkmL22i",
  "key27": "4XjJ931ht64Xd4h5h5FzZJa86aPZ6292CgnfrWWgy25LsY9RCUHJeGrvFXUuM5uQfscvVpU8QEes75hkuZHbgU8K",
  "key28": "3wAvtEedThiNoWuwy1wuDDvU2xNKr6zweNdNrtKC1DpXqAvtD2H7Rs8wZUi2qzzu5huRnQ9Z5DvCdgGNGZv6Xnfr",
  "key29": "aEbgdzQAka67cNXKxyw4N3bxoCDauV1z7b1vk6ytXDbJhaQKB4SDHmaPNxBridnbXHvvNv9xBfweCdu9Gotg4he",
  "key30": "BXC1dHMxFvonUYCTrGJcH2mBGttu7mNkNWdWSXkj9bvrgbSMV6dmABxBQ3RW5tBmqymrvmJAvucU6LnZKeAFWRT",
  "key31": "4WKRaHPV1dFSUqqRVzeuqzxf5hFMVTsNdvY4eo7MYGZVYSXuTgYkK58ZyTWVfxpQBFAe6mL7EqtssayUy9fZhCz9",
  "key32": "3twkoNEsdqW761YMSTYiGHnjUH6JGPsdoK8WWks2dNVPiddHNFDfwtzvygheQehuyrqWjnW3oh3kd9NLG3xMHAio",
  "key33": "5KEDBbEb3JorKUjgnYTRfVwk17Q83wraSouPe9kri39ggJopvJVkbz59VJrFspy5YBZKKuDssve8MMRQHYB1gJdo"
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
