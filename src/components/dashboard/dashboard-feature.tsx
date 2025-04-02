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
    "4R8SgtHJUihgTpZioTENEf4HczyiUr2E8tSr11BPkR1x2u3VUfjskNM7vYWWMXTp3346PZ6Nux7aJkGJWFCdyy3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hSxr8hAJxCMDGF8W6cDY9YiTQqM4vQpT4WFK3EJQRKPiSg5BBxjYAqLwQcoz11NCeF8zxfhnUnofo8UhMAtGFBv",
  "key1": "3BxquHBHLGaXG7p4bzipttu9K51mR3f4aNvqUEvDYMgCXzYFtsMWtgKPVm6xRcLoa5jpKuVPFGWNficoK9QehDis",
  "key2": "rhdQqmfwNZBosVtFTr47kHrSqejPgon1tSt33kqEpQjoruwRMGGAD6xUNxmYK1jS8CYUXFNUU8n3ePAhqEdS1Hw",
  "key3": "5JAhrZebFeMWWGhqfwrv46H5Ek9BorHZ9o563aJ7Z1ipH38A138fMNXihxWr3WC3T2o6ConhGkUjb6nZeAk1nu1F",
  "key4": "4FmBJHocjKP4RKjMMyC9t87oB3vxcYjH6gNzXe7EZPRcugafY9sJ1MRWQcR2eRXnxMw287fdKp6rcpXK9ZZzciK6",
  "key5": "2BTpo6r53HHPeTTY1N59MBjnQcrqjDxw6UrhTbU47nhSd9jTZUHuQTFnFrFduezzPXVUZihHL3DD7cqLF3fTnbxN",
  "key6": "YSn3KBHecMYPdjot7qJnVKucaXeXw51nvCQ6cvdECGTXYSatD3DGamg5jTUapYfhmZbsuJwX3WSEM5CQXNHXg3v",
  "key7": "521v2rWg1uc69RZfB6K5DvpLcEpznapmVUDho7t7puQMsgCX8WkpraHrBmSRJ5aQjWafT9RFSxvmDGUvoCzGAFfq",
  "key8": "44EHPEABuRyzZRWFw3uN6xokxXUVDZNhcbekDftoS5KsUbv9QyzxWBAbSWzzmbGj728rULjohQgwN5Zvec2dKQ4n",
  "key9": "4fYJBxuSm6cy4oozhYAprXmkgb6FuPAXWz2oBUHTHyD6ok1ys3ndwobAegKJxgfZvVqgpmQ3cW8LXAMudm3V1TQx",
  "key10": "5ckvKG9D1iSB4KiLatgZP6ZoEzq5pHhfsYuTymhc9e1aULTytknarNyiuJiLffB6zBfZfxU82mxrQc3Yjw7GWS5k",
  "key11": "5rMzg2WLisk2fDrpBuiW1CDrfFGTXR6umsGAQcBXdBKhjoLfNAbrpeP3eiNWRk1SkJyYy4uE2csf9z9H5wAMbL8c",
  "key12": "MSkYwia1zEQKDbbQvtfzYBocNt5LBQszp2c1Hsdxcu5EN9r3atf6fLEcDJfRwo86AnvE7LV2UFBrhdZATGGwEoB",
  "key13": "2mHYzsYeVmTjtg7AYNJLxApPZMRYBagKC7n7yycP1WW7eMoWZxp8quBEssHhJJs6L9oUEUyVh9aAoCbCE3d2ffCa",
  "key14": "4LUJpUx4kVgaXQdgu71sV55BcY7mf3iG4oWb5QwGXLUGf3qjRHK2WVhBR2rtKGEY6h5SVYkXJie89au9kVBLVGV1",
  "key15": "3nnUf9uj6PKpx34gQA1EX8MSSPDv79ygMT8JwTy6d6sLLcEQCzGUGbwFTckvnBK1ri8iv3N4W9pKkhQKykWEy2Bu",
  "key16": "57pjurravdUFbBB6Nq3wvUeVVBnZ8rDzc5otgKPmJu9EyNfbMFojdvo3wB2krT3LVQvsBh222x6YRD3D7ALbWQ8j",
  "key17": "4HoKVpoRb983FHafcwx4fNdcvXrbQRAaK4KopmCepV9VUY2z28bdDNGJnHYCmLxLdHZsKXo6FhkRiyCRCPT3yhoa",
  "key18": "5Q8oWiUAph6CYJTFzJfYQwYE1XLRwb3DGTNNJ3ANeS2AJgtEhh9RVo9skAG99PPHgh3hBxWTY22XouttmFbg9Tgi",
  "key19": "4daJCJu9vUEMJFkWdZTTftNdET9ctq9QjxwgNpsWAPcTXsRdgd9aq8d9eJ9YYLsys5sLmm74RnM1eJkwqHJt2xiB",
  "key20": "5YiEBZjgCsULPzxwRDTB4B6oCuECt94hHbUy7958CXSkdQZi5QPgnmaVLVfqwaKugbCDmYfTu9tvgYuJ4rF14Sii",
  "key21": "RJHeNNXcSTy4c6pVgMrbYywoPmuYGTXGSZaanBV1uCdAd2QguqFZmX2mSzp1329Dni81NZy9ANPJMF7SxhQFhGQ",
  "key22": "65TXc68dqBNdZTvBfigpMPkzKf34McTRStZAFRDsnwpcMpdMmdKGjg4yo6jFgY6nQK8u6wwLpXhYbbVuQEqLmEWV",
  "key23": "5Te6n9RWYGeUs9z49BZZEYtRuhATsXpXPi3ZjXxv5eyrWbepiyUPcU6tXQF7F9J89jdc8d8f9P7PKWtRJhrRc8h3",
  "key24": "g7hZAbkZotYWWV3r8RSWg9VpqJ2eU97f9CVNWkbFbiU15vsiR2pxakasDq94q4zsmPAP18LYHrNrGd3mseagTTC",
  "key25": "3DbM8sJQF63jksn1qRDhJst2gDJxnqsRXzC9HdD2PZ1MGkWGFtXqmh5bR4tZjwRQxX67pZqT8j99wCVLvzggKqoK",
  "key26": "3irwjwHMRQfoHhjj4qvRh7CLkDNY3QSZhDsYrtztYsaMZoZBSy72K3VzL8UtEDCCGPEZzDtNyHdeeicRsFiVt87",
  "key27": "4Z2hmzJbicjPRteFVKtJdKdJ3qrRBpL417bWX4wbhyUxTcgGGsefXq4LW8vbdyopgkDa65bwTg383W8f2BWesryb",
  "key28": "5v7bNEkkpJcM4xDFnNDf5SsmcZMviX8MuVJtQTGUR2cKZVU7ghw695wN8LYkY5cex1wk8yXb454hXWdW1Sxp4dJn",
  "key29": "GUyukcgyjGcEhXkqo5H5PS9ijVy8wCYHf5KVemERDuBLu8V3M9yzc3Y8PXwemAAbBMdU6DMxkMdC2BdrLRc1PAo",
  "key30": "3e1kzVhQ4KVHfdbWCuTozKh7GJBUz4G3JaSFkodM2axqDyWoBDTgprWNA5Df2PmVtPmjjiPFYRPzuvYA4mvfa41u",
  "key31": "2NQenjdqSn1wsg8ByFNm5iQqUyFHg3wyAozzi3oappQgXBC1a9sWtrhMo6aHSxuAVdKYrqkjFo6evbVBzLrTpPyP",
  "key32": "24taj2VxZrWzsE5FQku9r4rL9sfvN8J26Ls3mkRpC3PjVuFf47q2NEJy9RAe7E6QrsWoGDS3stfaCWJzDQiKYRqn",
  "key33": "2vHnktM8EEHZgAQYjB2upmjBfBrrEp2MXfNDnwVjrtwY4gJspVCWnqzLXF82MRjr3bxuSYCgVBdZNYUMEAtAgSQh",
  "key34": "3kqwrLKTEnU3SQtkBSS7dUm4uodtfjot1neNpCtvQQ2JP6zh4QDejxZYKtYbP6Rp6Do9kkfZK7LVFvtoWVxJEb81",
  "key35": "2UY7o9yFVAzNbje4vKm8WxAVLgQ9MuDZDyoL4Ztcas7oTiUjCZXekvq5fjXyj4aGSQs95UBQv2QSLFJscQbGuWKP",
  "key36": "dbwTYcD2JzP5EqgcLkBPC8df9TfGnv8FAWZSx8yZWozrVziB5rRdoixjVYEftAxaGWmBCLTVLLHrFJsxBzZdbJE",
  "key37": "2x47a75GoX3czjjH2u7RFAoP5WVaGfaWnj3tWBREukjcYQnpp3kmNuVnLDhDpgqMD6BDktFHuEkSifk4Kjp1pDLJ",
  "key38": "57B1NSmojUYW6YqwPLEN7MwQqrfMwxeTZeYqN4LAMCCHJvL4UHrXdSZKaE5Ss5UUmMZVCb79Jpk4ac5vg4EFxKFD",
  "key39": "4bWY7PDipb5iSMyfSh83Y8zKTLZC4J31XoSpqQHCbQ2TMzUUwyFjsUCzC2tqvocCGgwEUqdPFmGQnfBqe4kzdQY5"
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
