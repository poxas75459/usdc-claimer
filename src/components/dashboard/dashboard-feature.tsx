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
    "3V4PSwbChdNEQ4eztghhJe97E1An2Tns2FhAmrKPRsrDG9kKqqvKQxjYF8krVpdeQTUgnjTfCuWqcppz6Ue8P2Gw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EevNnpknAkrQhYp22LKA5QNMgE27EjYUwH6qtmK4HYwPy6JzheaLsfFD5d7yVtU9AEWy28SQ1NyrkkHbwTA4Si7",
  "key1": "4DXeZr5CakFWSEp5ATFrDpWi5Kxon1m64cAYhATxi9go7SBwerS8g2PeVYj9PfdpPuAfw5XbVSD3PoinzS8rcyVS",
  "key2": "4yDtymVMDXFdPa4GFzrWb67oaBcs4QYXAonndkm7u7SsM9m4etBA2rHmrGqKXsEv5FJAPUsAMH8stjbkDKbHzQDP",
  "key3": "5MDFFNfQcZNJ2QWQinfWXadbSGsBKRhXbZvRVPhMS5L6uBCz6PPn3ngVbTnBecZPBkbNPaN3Giex4BkymGWdg63F",
  "key4": "5htCg4JAmKFxGr2v6d9t7tnDtZuTZnMNu7kQjTK9uqyCjnH4KgcoNLE7YxCW1oXP5GvXxpREzcBoJ4TdcNzRb944",
  "key5": "3czC4ZzHfu1ReRhZpxtNdXK9Khdjuhktktmu5Npexx7bqJ9b1AKtbEV9KKBGUxEsKiUpTYj44saDH91HGJq7aVTs",
  "key6": "4D7GkrSx77nVUhmio6QZPqkPrz7mtpwpjZoiBGTYPnqx5oYkdfMLHD285JaMQUfEepz5g23zQjtQ2f9tqdR5VNLo",
  "key7": "nkEjpNf3d2wcBUZXggrCAiag5inycmQ4f1XK63TiGkud99UuEEng9VkTcfxFnhH1YsfDexvUKHS3rek1SdbQx8f",
  "key8": "2dZU4bXiaMqqRT5zbMWRLhkoDoNVjieRXLbhRFZcvJgBnzET8rVGwS6dvFT47Sf3Aamh4dAvwAVvB6NbAmVYfScB",
  "key9": "2bZ6WMDX22H2ADvoXjrb4TWami2FgnZb7JBbedzkamGbNXkhPLfR7gcXfftyvpi6iE6Ep43mw6dirWNjotniUYsh",
  "key10": "3SFkRxZyaoBjsLKXPL5a9kH6vfmTYbhDUxGcpDBF6VpHNgKUYTr6MrrJ9p5LTTbuNSD32gv8FDt93BpfcfAK4nFi",
  "key11": "31W8Rk5Xo752jZww7JyoWRK8gecyBbDwpr5w8e1FiF9s8AUK9CXT2rS4psQzZroZL8geSwLF1tdv7y6Wreuf6NNH",
  "key12": "3kt6F4R2xKjqAzWrLqn9Kd44VPX5RfG7G2ZF31XsBdoeovVX4VNmACVsdGL8gKUfqQXwgPzQDnoeTBfAbadqZVzF",
  "key13": "5dtJS1GvQsT9tigcGhUgWDax9p3p63jumCa6gJdgcsiNmngnC93GYrq2TdXRCfmRoSR3HW3RgUJrfnLscrMmogsm",
  "key14": "8EF8NCD4Q7YS4NN3w3oX4gdE7oErkUhBiGLfdSFYoMT2NiuZLEZ9WdbEfyBxz7FfqhdBbMwApb8VGWSNXdPMuLs",
  "key15": "ddAZMnbfPHHyZa8j7J2qdLZKSxcntGBTn6JN8qz44ns4Jbrh3VFdPwj84iVxcjXaQtBQ8LA65UdZxpJzBZP1uHV",
  "key16": "3oMdZQjVQ7M2JUoLiW1zAnWJ6eVJUpUd5bxAdHgihscTdozSw5rMKYMjpjfZH1VvtipFs8ZTkJcSrfqnf5EMAvWh",
  "key17": "3JjyTDoC768Nbo1MnLdrePHmXctntXEhgiEftxJyHEeCEerNWNjQ4W3GtCtuPnEqfeyH3qDH9HT4QxDbjWxzwqcM",
  "key18": "4s3FQkTiTjgvic2KSB1sFvuRjh9dRRNjD1FDguLJKoncvaiUbCJHyy2PLdw7tWmm3RsWiBeuYr6yV2X2Qk4nSZ2M",
  "key19": "4GoLxnSeG5Cv1X45eAUNC4cnikSjNpfhy26ZLH5s5Vq1cYvZhKFAGmHnuDMpMpDzPK6WRBEaBvfwcwD2GjMJjFv8",
  "key20": "vmZ4FxjwDj9bVMuSBLRuP6pDQaMhQaTZcEUrLurFDm84j8t2sMV8pdV7ADtKxCXvDj5nAife1uQzrCePCvego5m",
  "key21": "3hbTLsTydStAProsscDyUSBfZf1gT7ooxbqJNK75YwfgFr2DceB3JdxhuqZDDWbpTfEZJLikrQbuPsjtrUxNvdx6",
  "key22": "5fLevgzhPKGCsnFpdB6vngA9JcF5QEvpTggUR9mP5cVYwfsCeV2EpY3eexGAGSQYsrabkNgDg51bHDi3SEhoUtFe",
  "key23": "2VViquBWRSZWhQ1QR1mUhDcBuZR6DYpjbppM7FbUipFgqwREHdJKit46An7JXj1Tb2ASU7py1mKyNSkxqrKXqHxo",
  "key24": "5jDKT93Zoc4ZgxfPU6rRH5mtLDxNjnF4cQbik7QJFBpnkmqoT933Gzo1CXV7Ao24hWVLNUpvMiWDnBVS8Br78D1P",
  "key25": "XJtMDYrYwDxNJ7q7wNFwZWP46MroBxt1YtgUXZBQXg5eN1TNC2T8rHxE8ex6Z2bDLCeksWecXG9hfnPA6WmFioC",
  "key26": "29iLz6uQqpQ2nmbyHYG2cEjo3bzjKkTDta8qvCp9JtJmAzGj1nR6XMa78fmfEkFCEx584Cbx8MwkcjT7Tn2obXQj",
  "key27": "4a9kd6FbxNHWTA4rbSQdZzpxfB9gz6THAZ7LjTWVQzf26t9vRepMv2qVqjdDoNwJXKZwbgNYaf36wp6UZS9ALHGC",
  "key28": "uexih5NeAyMLidgUbnG2yiPUJ3mPUyDbahfdUNPpMJK4fscmRHyZJdmqPEipYtQhGRvB7cSNv5wFQz2EVRotVno",
  "key29": "4AMSaorfFKM4nGtQGEgY2GiAE2rSNBkZwzxhYPgLde4KfdfXsnFQxJsRj8zM46P2uAhezmeGV2jCRgDjv2KPCToQ",
  "key30": "5F9Lyd4yLifZkUxS274rngDbfEZuQdDgnfm3u7JqaZP8ewZVtva2hw7mMNrbnKR8FSVJXtiXNPRz5S3HdMFTjSXm",
  "key31": "QTAThK6e1rEf2vtngX5yMWeadfeLBuBmugcTSDYhWrcyfYw7FZ1f2TQCBubuDVKr3h7Yf15aeDQcL1dY8mFUZun",
  "key32": "2WGVSpaUNqAyGvrb71kBnEoyqEBK7Ar7ueT9eb39PbQaepnek2iEgcqRqSVtjzVYPbsUhhoQqx1Vr3V2ggYqav55",
  "key33": "3zCmiY7S8XJkFgQ3ZF1GNunMdwRQpQRzdRiaDkEs9nYXoEkyqMWPs8bUnX1fQDsKvFTTsRvF5Zoy72hKAUKQSxWC",
  "key34": "21MYDqHkq14siMHyu5Rj7kWMcbCBL1ruSzJUtZLa3RJFTv59fpSUjKRCYu5rb4M9bZDrvEE2GUBxa2mZFKy82Wh7",
  "key35": "2QvjaMAge7VRgLN2N5ejRgR8DX5me6daYD6pWLjEPHZMwWEnnbpCHMTRuch3BmfmPjBXcdZGAjrvaDUYjaXZJu7x"
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
