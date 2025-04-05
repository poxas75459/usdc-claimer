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
    "Agm6QKKfK1Y89jWtc9ma6GnSs3xbwb43WKFFbA1nbRgFM8PfaVYcyrMPuf2fiqbH64rfomVKtdnCVdjegDNJoJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vefsW5BSUmS66kjqrziadF5pVqjddQeK1vg7UcaYnJ2fCnm3rAeYTPUZ6ehjgFAejGbmDxqJKSLj4QUUZ9u6i99",
  "key1": "5V6f5jKVMRoLAxAKK9MeCjwQiCLTYxF6XctQ5RCfYhAmTBa35gc5gf9nZ4zSfnvJH3rqr5uVW2Xd7aq7pC4WTp2J",
  "key2": "Xjnmfw2pc7LLAXfhWwW4TMdBTEgn6w9fbCix39sPfsGd2YfJtdAeuZXXgfEt2ScxK9noEgBTdBBdn5971b2JeQV",
  "key3": "2tgm2EKSPeXHegcwX6SjWFd5nTRNsCtaqiBSRF3Jm89nx9FAS3E3VyaqccPGAz3yULCLSiY9TcNaccwP3JXG6hNn",
  "key4": "2RZ8QgaDc9UZmCbjqUVuvddCpkuLzZMinzRkjbeoYB7jBLMX4KsLwFPxQs22beQvdTsmnxJV3cP7DUZbd5PwmVd5",
  "key5": "b31oQ6LhCRK4857iBbisRsovKWyNizCoBHrm3hKbCwW7k33ZGTXk55do1xdBJAi1P6tDv6b4f3UJhXmJEbjfF6S",
  "key6": "24XKqfacR7YqgXBXaNPZbR2RDAcKZTDkkGbHPXF1yaz3JQknxwSPeWmQ4Y4SaxmnrmEgayrFvuYBrYcSwAFWCKvU",
  "key7": "525unbZHVR36LKFJ5iChUnbDzLDNZiwN4gvmUd6LNGCMvFNdfyGXHQmzUvxEChBsRbyK2kbeRi1eTdR9eMfNJKpj",
  "key8": "4UuqRyoWjxdGFoBaVaTPuFcY4Yo3PE5cJi8AdCyFqMSZfcBSVZ9jSZv5Um4vs9bUEjHxMLNd6n1L2XP9JPfFwfZD",
  "key9": "2kzZtJgi1jkmjrvkVX8bMhZ4Mkgmp2zvvfKX8fm48aTxx1ybprhRkF89zsp4nMqTP8y5Ey6YRwXG3mApaaQyCkkZ",
  "key10": "3LrhpydH3BEwbxPdtgo4kSwjVakLctUHhCAvDCsNmz5W59D47kEq1U7Rt6F4Xr3LaVk94FzTYDDyncZ2h3GMegh",
  "key11": "62RcxYJpCUVfCmpFuR3yeB27LtXCBEL3BSGWV8DRK527ZvdCM3yLtMBJn5gbnENJMfUFMzkgcpHDvAgEnfunTfat",
  "key12": "34L7ZGUy1cAN28rbfFVEfdLV9ZCP6Y4i5MTuWuniCS5NbvmFnPtPBCwes82TZaj6Ei8Ur3evSXRasU9iRMcgimZY",
  "key13": "7mRN1bJj4H8BeE7DZL2YsbiMq7prhoS2C7ryxSamgjfZMuMguHCdw1SCHkRpGjGwUFnYvwNrUnwPeQGP9AZjLGr",
  "key14": "4kketbs7ADrTxxuQH7hbJ2v6h6dHeJA9Roo2BdAbLc3mSVto2iYGPPNQQWrUdjrq2ng9XyNpsVymULwGJU9ST1HR",
  "key15": "4j9XLHGM2LgtDfU4kPrCDbRukDNtFFbrF9aGCRPDVmsg7JHobzmvYBbWgf2DUWk9PTcKjkgsd9TaczXBBJikdRwD",
  "key16": "3Y8QLKMvSceBook3TVDq4TcKg2BzTjm8zeDn61ZC4eyMHTUbzMYbYQrLFYtRSP2BZa91bdBrnWu7sgQ3GHTRptQN",
  "key17": "sXwpYioWUjVi9q7i2pahFvoVXKPtreAdA1wWMKsaSAUXdCKkxPGXmG59XSZJWNTBknSmeMagShhepe9bTvBUVzH",
  "key18": "uzMbJiLs7tvz7XccdFt6c7K4e5VppBBGp13cGBfxMSWpVqSZkYm2iARaX5awxfFxx1mxmpCDdmMUMm3wLe6NZv1",
  "key19": "zVgK7hkfhVFrNfpVAWphYrMFaTSF7vdGtJbdaDp1g3hsVgdWHwDVxXzqmmD6otyJkdZPiqgB5jLdydqYT15MziK",
  "key20": "4ZtgTpLVFK4LY92vUa23F7H2LFid44NMZ6n7bY1zrDccT98zun8VVwgnQLVYWQPfEinLMPKbQJMSq72G1ER5h7Ui",
  "key21": "uQyTnGa8KeVbTkaEZuSqNKXrxnnSaZmEEMn69qt7yYCNJTCBNF8meC9ZoMVeSYd85eJRk1LMsw1N5f7nJaQyJju",
  "key22": "Lf8R4wSwma6yBkxrDQuphnM28orF6KSRu7DeeaWZNWCuoYKhfvQzoBeTJtSrxmE8cxKwbEC8vkHAyU2ZEeuEaKB",
  "key23": "2nxHwYJtb2w5vMVjVgrSXaaSoyL4XCP45JfXTgBeyaJ7B45nFycUk8t4mLFuFxcynvfYyQ3eytUr8sVhPKGZkRbx",
  "key24": "GmW58qEf7pBfVippw238RtmyAVJfBoedfdCzsfo4DEtDYhj5Dkvu9RuHZfxGWWjSuRpsXQW61WRASajVnooA9mL",
  "key25": "57z7z1twsjH8g2uaZ2zJmukAKZuTMfcj5HxZYNtKN4QCVXpNX1Uo1tcQk4asCqmCEFBqdND61F5xGRi14qqMauLm",
  "key26": "3ZHXBfKn5RHAiucRVLSgQcWXHh2Ur65EVnT36Bb5EXq9h8r8o8aKRYfTtTrxnJm29yB45WcQyzcKSm7JVPkHt1W3",
  "key27": "KXc2B3zdzYDNwArurU7UDMixVxhqVPM1BK8ea1Xx23JpTTMTn8mvuZP3CqGNLN7cFnWanVFzzFphksGRES464SZ",
  "key28": "37JR7WAQ4H8sSTrGCmJr6tEfGE7brBDVt4K9qY1MKi2BWN6CEpKPFs4YJc5wgoLx4nUG4YTCkDXAx5pfNKxSegJJ",
  "key29": "tfWJugoVpb8QkWqBBiXMTDcEisdrfmikmCXMpBDq1x2Zsnz4MeqWpJ2xWitM3cfvkz9edXYRkRxDy8bJS87gDKL",
  "key30": "4Tww2P2VmSfRsAPJ3jJLU33du8JTTLE65D16cDPXDpjtzEaTFrTCsaibUC9894vD6cFe9k1BahwaXueAP68JT8S5",
  "key31": "5Vn7AwKt6Vp1kmHhGsdiYmSnbaJE9zHFFmBA1c9KfpQioJvRnTXFYT9xhWAAqvJ5Y7dEsGWXfsnMhacokc7kXcJi",
  "key32": "4QehkpS3QjqGSmKmn6HgyLpZbnXpXyzTQWFNmW1Sx21UDKSnDPLUz3ULGzAgdUrBwNFBPzJgyhNLU9N9kCPnbMEM",
  "key33": "5tfurTP8YjZPkH37Hmrkv3Kss7nu6sKzBQK2LE3XjswuXCH15ecAQxEPAx7AVtLN5nPdiRDsCFk4znDCR4nb4bF9",
  "key34": "duFU6JYJFXq8QySfh8QrtWvafDYLpUBWA9wBz2brj4BaQJzMcQ5CTwb2uDt9kirNEfXHA3azF672GE6zw9QVofe",
  "key35": "4b5SrBoBk8nA1MQJHxxuNoW9DaaPEbm6XYYTTfsqW7mGVVL8JVAWnzQMK7KZcoKB6dmCSRpBRii44aDwuAPgdyHg",
  "key36": "5Q6hKeNg4pYRE5Kjk5ojTdZUdrfyLJnudbvaSWUCPAJ6ePibLiBZGJm28rmYUKdCSuohfaULpEAPuy9fXnc3QcAe",
  "key37": "2fhAY2vZMkf8uXpsskVGsfbeSg5V2LWGUweoP6GHHxRdn3AcpmNvwbgi5CejgUDuwRq4RNhwVUocN3G8L21QP5wy",
  "key38": "2kh8XsmwbPXy9Mc1GZikibmtnn5WNQaeKgqvyLXYLsiAYhtVHQUBCE6V5yxhhbNck8Zo8m6fMU8zVXQPXvHbqYHQ",
  "key39": "3fPTmKLmxGRQAA4pgxkKMxjveQD4DTHfTogco57U1kXcGy16p84T3TajRHMkDtwUaZ4okJC8UpfWusVrMqjrMRFf",
  "key40": "4s8F55LobzqDfu8XKk3qpcerFf3WzVKA2xW5xGX5ZhTacijDoprh6wLhmXHD1Sr8JRx3czS8MZUwMh5W1ykPBayH",
  "key41": "67XHMPRGQs18CUfV4DHSwXfbohGPaPvQypPtsxC5hYUKjrPzgaY7Lv4SWfWx6FTdmcwreQSs1QXvVv85GpyqKLxn",
  "key42": "3SNzSjhwJFWMVWdXD36ez4PUDY1gGbzyuur3pL8t43Lz3Ticv4vyuTnRLjuPxmxypoimDBk7gPFcj3yR7krTr8Zv",
  "key43": "66JZyAoCYeijNvcSFfhRupKSDzHk4j5CtPndMWCdLnyNs3bSKuznqXGJLGJ1zw38GCTDFkh2doQ2equq9KTUsDT6"
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
