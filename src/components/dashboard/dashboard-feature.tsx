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
    "pEeoj1jmEs6Y3fGz8Vd9B8QpVPrHu8fFHeq8tJrnyVLpmBVEhKXtFdzzhnHtcpqMBsdEhzsUEkjhTQyFepYtpoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pvYeavLmXEQF8SpsiaVmwkuECYSozLF17B6YM14JamRtF52TXADoS8TMWgTK8dPYXybQjaSAjCrhVRp6BkE2ji4",
  "key1": "4yetXeKWr1X32TLRBHRvqUmozMpJrW2RKUEmnewsUfmv7AYLfbDEGX7f5Va5gzri9N55dHYGUGie62RCkMMLBKua",
  "key2": "212eVqvuxcHMNkn7Ssr816RDvkrab2r7seXiKyoZjDXVsCE4SThVnTWXy7ZKhjK9y8cX2h6enCw5xUQLwkz7aSuL",
  "key3": "4QnLTc2P48drm1KL2aw5nXqQcSQePYeFVgbgh1NUpG2t38i5qDrrfG8SBgyF2Ms26EXGyiuSE2fSTVcseBVXTAfj",
  "key4": "wNFUN6KNUj8stxUST47Y5jNbZHHUsXwBnNqwgyRkZ6GjMd86hndFKYvM2UeL138P2pbDKpxwwwWRJFVe4YpyNvm",
  "key5": "4A2rNCdZ5EuLdKHJngfV7ELcNKyp1P1Ud3MkBhrwjTfGRWMrC1EfWPR97tGBLqQiFMJbppsqyCaomveSe1xBFa9P",
  "key6": "59Z5Jwk9UDt5WFL9hxeUSjuLgCi36P1PRpQd3RpUqvqkChkiKLDucB6sVvr5hFqf2rrojokzcharTUDTkdrMEYh6",
  "key7": "4puz7XYFwYdQpQLibenhu9go4kT1eW8zBFacVPD3HdXtjb1Vw29JbBJ8kwAZmJbcJimFmACNKEmh8XtMdkfaiFmT",
  "key8": "3NYuUMAQrQze4xwGvzfN1Hn1a9iMEPPQ7v95wpKFqn8eueGZu8s9sP4nLJCUVPhDJbLfSrfXgPwGEw1x7Y6gCzDY",
  "key9": "4iEf2V7fyBVQ4cx3YKcwtQj5ekLWRyejs7B1tUJnMhNjuSjeaYYViSu7okyVzxeqtvAnNPxAmMA4qaCT5Rqcs7WJ",
  "key10": "5JBeDRApsRZhRDtZPXH8k4ubgs1ysBGEXHqdno8wKWkstvNwSVyxMRyWR7ns5Pg4Qzpqwfd4d99nSCnLRA1QnTvb",
  "key11": "2GYDwVcMK8Z3hpPncmeuXdCW7p5yADYLaZ6fCUepr9s7LSndtkTMbkJSJ8eTPSxLRkudwuXp86xUe2rdezVgwuxP",
  "key12": "4BUUvnrAE3avnSwZmpWThyF5T8PPsFzhqnh1YGSfi7WcLZ7iXvZyBTYDc6viWXfH5BV2qA6SAoWS8ZmQRDSLsePe",
  "key13": "3cNrfDFuqmRfqQcvdqErp46ayDLZbJb1t6vjvYzvQyDuJcSPUMkKHaBbkzGd9kQM1dL9sdHHzDjrRyikF5xTGoo8",
  "key14": "4tAoFHzbJjA1fabcqcpAUdSWcd6gLgkeRnxe4y1J3EtupryRVBsU2QRmmZusiWkYwgtMzefCn3od5uJR57DFTetw",
  "key15": "xr94pTins6C41tRC8VfBYoxRyunVfpAtmkHMVw68HGzodFCmEasG2nrQixtCkrbHSdadGCU8jjTZLty8jXTYCPv",
  "key16": "54snPpTARNuQb9Lfwc7KikrnHGMuvCa7yAVZPsbA68X6qT3xHEJxn7M6UMytbCDWN9MPQ727zJfWhbqBTUuK7VXr",
  "key17": "53yVTBLHqQJrFmWbkfxS12pdVGa1GXgEV1QWmkDkjw13ABC7iYkVanh78g7pB81vCtNQWxtEUizCQa6RxnkG16j6",
  "key18": "4yKfGZ8en4rH4BVdyZogJB8aSxs6jArS6pw55baRNzb7RYRPKhHK8GUqrfuGDJpXyHr357KcAGYBi8m5qoQDh5Vp",
  "key19": "3zKvcCfLUMNm45hEfi3xi4zhWhyUfGtzHAWpHaeBPRRqJ4bkJMYS5HGbAWaRLGde4ZYiETv4ec9t5LqjbY7FQNS8",
  "key20": "YtW4Wy8Wyz9ssLfjVGhUiP3h7r9SbcTMfK8GE6YhqFUbtTHg5jqxuufVMUgGgD8btnYukoyzaBLofapsjNXBd4F",
  "key21": "25VARPy1ehJLWbZRyafGRssNFFy6H6xhovFRGWsFgBWANvMnZ1ka5cP3xr1sJrKbEqXYtK8d8Ecqh96LNfKBc7z8",
  "key22": "56AKp6P6REWXoURxzbKjfMjCbGDPdvWVLXwzs8P3c8MYupkjqmv3VnN6owxSdVAmpf8RD8F5BkeQNdMAiko3NQ39",
  "key23": "5Z4CchQeDPetshPFX1DodhFALCD1UipgvuvLKiEDmHceNhKbKyQbgPstBAjJgsC8vkKs4SsiypXvL4cbtieTpoCq",
  "key24": "7DRYoZzWkqkFydc1PMurdpa4Ev4nprbnaRZpLJ9Fi8wMxW9xwS8M2gpeSBZtA87Fb5KSg7qmUaH6kZyS2rnBoM7",
  "key25": "577Eoa9vmRKpMgzdCBqdryCbDS8EZvs4SfizcuSbZEc2dEjDNoW9VM3oCzmiEA6FmuAos2c93Hs3XG9tYEnkZouu",
  "key26": "4NaWnqh47uc5XD5dcBhJAzP869fCViJ9W1ehGvnn4N81repHyAYNcsXuxnoo4fjg4qe2MCDB4yPRiy3UqKzoDRBZ",
  "key27": "4muP7VuhywaB7C5arXb3ChMcoMrAhNn8WbAZ8bfvEnZkN3Z1kXWfeHcGWs4131gc1nCdgJX3X4EeePN75cgTXYjt",
  "key28": "5k1W4j6PF5DxTs6wRvM9xcH3hGtJp7u5g3HppW1w2cuMBg2TXUeW9zyPr9VubpjRx6zXPCoH5tkVEgWfwuCQwNwj",
  "key29": "57ASdFZJpU8VbB6PHMscMJWKuWB4Xg56cSQyhSxETV7BhSTyiPURjV7eSucCdnTwiqfeQA5eVvmKerhZCo9MwvsM",
  "key30": "4u1GXq4Xq8CFnoZKQt5wDiZ9fngUEjhtj9NWSwEVNhxFSAhfXyATF4fmPiibDriALsPGoMkJEsJf8X9DpDJwsLPw",
  "key31": "2YwdUqzinpz26qL6VMEs16GhuxZSR59vvgsKBp8t74Ae2Q4Cu5FvEVVSSMs1TD8XUZGG9yZQpMUgeYwcCaNYnveV",
  "key32": "21RWP2Qs32LESJjqf8yJSLA1T4ped3BjooARctqbdAYQ4D3Z2nZwPor7yiaNh6kopZBciVVseAWf8MDMg6LtmyEC",
  "key33": "26ZUb9WqjiCoSqqF9DQiYK655e42iMKx8qKozczGs4XoaNVrCBes5Lg4tRRKHStKSinhetRM8Tt7bnq2ct13Vx2e",
  "key34": "3qZzpaCNVygJPYwJ6zb8oe7obLbxTiA5fFnrPNYYpw2FxcN14E4U17RJzCW555HqNNYRkZfESV4neyjg6Y6G9vTC",
  "key35": "YxTmH1LASD4fn5htqY2KJ6znNgX6jAPBz2P3zyTcUKG3jdGLgXyiHpdALDb3w8krvmEKdgf5VFU7xKKyyU1ZdqZ",
  "key36": "zeK1bx1Ui5Uwrw972Ggpi4WYpJcjwMjqq52MZEPaF4ksBN2c19wXz2Du6Se3W6C22uj976DH9PMang7aLLBJ3ZS",
  "key37": "4wbjnJrCGBiRnsZW9iKhzseDRy9suL3cnE87rEQdFQAL2qQYGssMBKhARVndSBsnRWXdvdRLfFJCqqkW3MmxyWR7",
  "key38": "4kApqeZW8ZeMirwoXfxmB6wUfhn9tUKN1kcguMTCpXUwV7cdUGpEbx7nBL5zQq5WuVXWt6dsD6Yeg3b9ByMHDp7n",
  "key39": "4HVyAmdJMnkwhTqCmpJwC3pZGYKRvLBQNQkQkqGMngg6NbTwF3YXveqLqzqNqiSTCSUiNBXrTfZRLcceA7xd31Ra",
  "key40": "YjfYGbR3wMRrTGfVQ5npH5QAmuYLZo94J2eYK42AH5LTq787w7S94He993YMX3oTamSvKY1qu3AuX4YJosj91Q3",
  "key41": "2MqS4ZPwgDToiTCcuENHdT1neZ5tmyp6pdQNTR2zAJKEUyjSJmgkaQdAgCZpbyDjAEbPVU1noZgsV9DSBHzE321c"
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
