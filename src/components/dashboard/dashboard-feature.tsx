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
    "4Rsbc44Gc6z4fuyz3GU7BCZKGSJ1PKeeo66TASno6X4uH2XFHdevvLrZ2waaXFmd4VN4AW3YMx7nhwr3dkHbbRmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NrBamh9D1SvFCo5q9n3a4f94C8ifmeUUVG2N1qCuXkXMjx6n3kF7uiqPCPbwSdKsp1ephCYQxoEVVRSP2ckUojS",
  "key1": "w5mxswXEVjJ4vvqhdnyqXa2KLG7VMC42AuAzefsxSW8jRVRWQ43Ra4PXHHPrWnsebcDFfP3iZ1EAjpYne9p2N5h",
  "key2": "2aRhNnJRXzv6MvWHD861DAPNz68Pup6jU4rxnnQU3SWxKyGKDCmurQDuaXeFJYc68u7pBJmCBDcDhfJjo97jfj6f",
  "key3": "4nnYJZnf6sVsdm4QLPreZj1t9MWPd1HJWU8FvxCYwQ6fPT8Sb1a6yo89S9zzJpUqrjT5BL8Yj1UgUm9CMgnfk94F",
  "key4": "5hisi5SQutCi5me6ETzr1NmUeNhvYPtxtrPD3guY7wpLbLcyZJAW2Nnj18gQxyaYsAzXyEq46uapBjb7gFmgnxWe",
  "key5": "4i6Cvc1pWQc8DUdZqixhgToCei1x7UrpJGdZ1gSBcD8WBbT1tyHtcGkxVPyeMJeVyAiDwQmesAXr3f4CxfrScYrL",
  "key6": "5sgL65iguEZMVN1DQWUAEZa4qbZpBYPmoxZWkGzVU8mR5Uw1keHsadiny39wu82hRFxRRBzLGQUfXANA9EoyHM3h",
  "key7": "32yjHy1aX2HHnCBHDbQF3jzoaF19Ba3riUrKshgRPRQJgZnAppLfyJtEVKx1EocoyUL5epEMvEpV3ioNBvisv127",
  "key8": "2CgijWR4BiRx4f1Cnpp4pTWpfdKz8pwKGgL3AqPD14nVLYSv1RkdbvwYdftMc9ims8GALy2wJZZYsV7m7rTd8r3n",
  "key9": "4NvgBWZ5CaJNMcyBG1CNPxewhKqTMDEqBC9c9UyL9fr4jYKr15nA6Xoo3QFXmRY32vkt1Kr9nYLUheTsV5JiQDXg",
  "key10": "61CibfZyDBWCMCz4WHdEJ91nCzg4JuGTeWju3QKAj4eXEFaHVzG3Dk4XNjsMgR6LhAh56yoxfYxeo929ZxfAeXar",
  "key11": "PCGbaJJ5WKnKgzNqcS2gxbTpgyKxNauqcGqYcziKPnqv1gfb8Lun4weipUq8YshoHPiWYaVa2nq8qwhzT2eKvmm",
  "key12": "4uNyPA3TELN4Wfu9eAvsY48N1kr4zcfaa5Zmp2cjfzdGY4C4xkiTX61FYcP2iNu594vn6Mb1ujYxEAqhtNm6RaMZ",
  "key13": "2ypXKWfdiRk9FFmmweBebe1BuMScXG39zLQ6aHk5qDXD2Zs3irTYEs2Z4ASCtasu1Teo2xcXMeai8SJKFxWTjsGQ",
  "key14": "42yfqdpRB2bbk2UGeC6w4zTFhkz3FqKYW6y7HWvRycqSoLnUMvXRuyegFr9aecXZM56KEP9N2QDgoXihawU3EUZr",
  "key15": "51KAZLhu44P2sWjdwdtsqBhgGcChZT1iHPi6n2w8Tqx2A7Rrbuk8cz9fTN9jR9PYJ9DySY82DtqG9wBP4p5QuNkE",
  "key16": "aUtVzASvHvcZUmteBtdv8FWnzVczz8WoCNMF6JGWGTJnMQbkjmqazbM6CgXHAkuwM6YSJjtQ195arTApR1acyXW",
  "key17": "2cmJLujgKEnmHtBB86JPyouF4QGLmWWutE11LF3cFE8Ce4TotAd9QVSPYrA7RKp9bM6T5AvKCSB463bcegZdBhhp",
  "key18": "efiEs4Fj3zajCh92PbmXNn4gkrFTc12mqf6M5z2f9Va6tozU4jiRt4gzvHbtrsTYWVwwMbwvdUSY45uD9uHcstc",
  "key19": "3QV6LG4qPZVyKKmqCySajufGcKbdVmgNYPohjfTjChpz4JsXknrP1CViLavQgHxvtzpj4opK1D8zUJax11TVPoLi",
  "key20": "46YtHDN1WnHev3H9mtEZDBxTAsSaSx4gGhg8MAbGfDzycXtGr3gCpYSd6fUb1MYKeWtdUqZRwpNuwwmNQ35rnEXb",
  "key21": "PYFhHUbGkBQXbFGhLj47AEfXuDAXMEHTgUd2S2Ti9mvP7KL7chD3jAvi9mpZ4jULHh4b1sVDAfZK7y2hxQLU35Q",
  "key22": "5LsbZyrdgYUEVzoiXTa7Ne5uAvmjmsDB6uMj6inPmmjEeKMfUVqTAdDdFtSMxGaUJemkczyLAMJNKtqEPscw93eU",
  "key23": "YGAqFH3UtyAjtsM6bQ4xhVfeQCdqpJuPaURKx8nUYDhw2FBoxqx7jGP7zE9LS93uesVEDbTDk7Km9uMNVGzvTHd",
  "key24": "3iyXCVmy5nU5xyKe4oMtvdVsoe7ejYoKP2PnFsrw56DzGx4Cmkd5dJ8ebRzHfJX3bttofuurQEcSn83sZ6PFq8p2",
  "key25": "4UvmBC15jbhiRiTRueTR19BSaMUod8fwKDf6z2qbDMAoGF4c8cPc2YZxJQkNHqD5cLFmqXVdrrrSR5rBUMc2x9BK",
  "key26": "33Pcxua7hGHMBbhG3P6yv1LL9VCucuJXmgWmdWF2Ere26ve1LegAr9FdJwRbToVnKDUetU1RhtALHzAwn7Z9EN9h",
  "key27": "2nZ6u7eZz4N2FMhhRK48XTbT37bcp3aVUJM8u9945vPKdRzzVXGXQAw3d2cegoxj6uriLsCwJKz9rnZ4kGJJ2jiu",
  "key28": "4DwT5ym2RpzLfuXtmJpt9CaaGn1iUFhjCWR9VdrcCD7DbKtEPGoUsTUTRkrtAwDitSHFSEi7rPTZLaQ7n4YXWBE8",
  "key29": "3vnh7HJmMWZ4Uc3xTRYbvii1bNbukfkTqYGg5d91Qci2CV9HB9APJQcN1Sz5SXkVC9yunzgPY5RQrrdpnW8P2VY9",
  "key30": "3qNRebi1uYQsvRK6s96Qk7bUEzMGmW8hh59yLJjbFRU6hfn542wAozeP7u7ktADYBEfkVAsNkGuLn9VKK2SkNJ5P",
  "key31": "3HeNr5Uahge1pBeoHhbAyVFfjv8zyCZ8Z53vr6sCdcahnETVxfDUw5DPW2Xq8NHkHYzKDNpXJKc25rcfNNcJqxsR",
  "key32": "3UaAfxCCvYoY2bFnxKJAhRCLVUv7dYGjSMHsEmcnTAypPPdDiWrVMsPpSc4qMGhyTDJzNXUp1qZpUnGNkKLjbkch",
  "key33": "64ojuR34LvKDbL62HoqLDGumuvwHs3M89PWbo891vugktkF8UduzpJ1EtiHWjgR7B7azeSoKet35jrtwCFY1qWzw"
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
