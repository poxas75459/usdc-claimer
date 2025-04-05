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
    "5NYXVY2CCk7eU2Vmn8JkzGzkXT1usXDxY1K71kUCX49EkXL1ZXbx3FkkiCgJmQEQMb14hT2xSG4GgJgTJ89612S9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QB6BEGsBFCr9kjRo7B4N5udFkwNQFGDkwgg6JiHkFBV8Ushe9tV9J1Y5HKKmHaXVEEy6txqR6jZGitSaerHCZLT",
  "key1": "3shjza5y61MyWpHKsH2SaYceEUnLC6xe99snmYW5poAh59ZuhGhuHNqN5GyGrvZLws2XNdjDJFzcgorEodAX6at4",
  "key2": "4wBgpVqQP1jQi9MtVCGe3Bu5yynCnT5CSYj5qN7G89jhBgVcPyyK7cjSD8hQkGdNdWTooT6kdFvJ4MwvxG3ofUHV",
  "key3": "MNf7rwEoFFL3gRGJuGn9zoPsjetqV8bSwcUnPEuvjjG6hLdckUBrjFCafn1EQjkcMsP4qiB7CZVp2xmmHah6bdt",
  "key4": "4qayrN19xHv87QnN4pN5A6vsY9AHP1PkdtZnXBZfshGbXBqDTjDJxJQdMwzaV1gWHYvPsqQG7d9v8KnvJJa3FvM7",
  "key5": "YgtkmFH7W9Jjz4omofYH5bvVgxMdw8Qx1BckNzPc5bzympmHbWnZR2fG15k9Jr98idTQwEo1QfXZF4RKvFGJLg1",
  "key6": "4Fx7GHuy8dhztAnhRs9sRLfH1FK4rZpY2UqpKrytRnRHuW2fKqanojMyie9HVw9g4yuQNd17KPDTsSSz1XFUSAJk",
  "key7": "2TVqs62EobbG8cG9dvWZ9jvxZN8KKtouqqXh5grhC2D88zttCi3GgqLfA5YN1mjYdmpKqrUiWc1iTtP7q1oXPA5U",
  "key8": "TkejMrEDc9kMVyd8LkM9Ru8zM3md5xSvgy93VJ6znjP6gsDyrdb552vQqjKMvSWLcUVhBWNW9CjD6rWyVVYWfpS",
  "key9": "5AN3R6H1dFv9E2pKZ6omjcCSLPMJiSNJeVv2jrwTxG5GA9oNfcmCddTdSBethEdJPmEKBg5F3WUjvVd6SmCvMG2X",
  "key10": "4XK9pWUQtqAkjTYZU4ZH8Q9EhkxnQ2ooK2anVqAfeYUiry4C5sLNNsFxjipakpcSxZVkDjToXSbyqn8MGYapRtyY",
  "key11": "5aPu7W1DXovpXqChGergRRUU9oDQR2ZewFXhzaLa1XALb6GSxbgigcmBjDersdFZY71GwMxvsDoLgAVKVQytgpu5",
  "key12": "bcCJAgzoA3VtwRHjd6vwrU2stCaFE2jhXBgAt13QSA5Yg3xiy9hyqyJfpMhMoctiqoY26dCPjB95QYXiRUMPWvD",
  "key13": "2Xau5R72v9GCmyuJ7iPH5x5xGLmHXJbN5odbufnecfrVZcc8jzyitGTwXGevYupHQNWCU9PfzqSsQprFu4TLPVCH",
  "key14": "5NeCGxNeGQfZph8u8Yux4M9acJXheDpKjchCmd79wCXKAzbkmhuKg9jeSPFMgc24p6cGHVyxEg1PFCdSJDgKkG7f",
  "key15": "4aa2egkSqAxukQPN2qXFAR6S9UhkRGbStGxSiwMvokoASr6fTTYn9EcvmgwibjcTWji1HXzorV7jAJ4wcgKCw5FA",
  "key16": "46zDF8Vj1Gct58f9gzsU1jZF1UNvZDaNLfnxcxB6V3ULjZamqf74QHDMiayYvzqhBLJGiirBq7BNd4NgBDVzGL9V",
  "key17": "3WTejwJDSLegTmvyy7thDKHR9QaGayrTnUCBAT38KWfKRDC3inawRfvqWUoShHQ5n42RuBTd8J7BpydvuWvDwPUD",
  "key18": "2AV5dbqMgDouUjHgczxp49FSMATV9QGFa2jaf7Jcrtah8B2XxK9dvnnfiNw5a6hH1PaddPjoG2bsJRpoM91DowB7",
  "key19": "qCDFDhLigKs4DmB2dnihq9n6Qr1Gs6M5iRKayjWZf3GNpKC93egh5tt9yXuXMDKU6X1DcKGVHA34tnfcydwnrrN",
  "key20": "5e7oNqpno6yuk2FeWV3c4KPap9GeMDh2CcK8VpJqZ6ZkEeuFuLgxmgwk28e94imGEUaVihoGL7HuEbhocwD18vuQ",
  "key21": "4Mm9B4pPnfzsKYquFqgMo9Be7y8Rzfi79amGHGcpkYAPkTRmQzfpZmmnnL96S8Tvnnhaxuc5sy5DgY9S3DLWSBzv",
  "key22": "4EcfhcU8zYwTvSqezkM69EnpzEFBFsfPXYsMytttVmpGWhmBTsWkpn5sJonZnZnSPCwEwuadqhqLYvnD6icvNyHG",
  "key23": "66JcTQnkzK4Sn5QicQ2ubpQfonHwJ4Jz2QTZjJjGVXgy41WJcge2dhgTn33N8DwGTqiXUYgGiPcbKMj5zchCCuUj",
  "key24": "4ATeus4uXu5NjVdnpW1trRM2hswF1QhUn7djqZiJcdn1EGWGE8F5NBcJ4PvnMKTD32Sw3JkFd5v1gehVH1oCRsuC",
  "key25": "3QzDtSQKCgUiR1RQwFMv9soeUXXS4nnfuS5nNGccXjk2SF5ACiSDoVwoNEgLo66VQZY6Vp3xQiXFHw5UQz4pioZN",
  "key26": "96dEY5n5gEXxBHtS2dY1umcJsofCBRP65Y9rEYAteb2nBE1wHBwYVwuvYZ49JdtBRqpnAsBjSRMX4ngnH6hdHDo",
  "key27": "4AMsFRiFzEj4tndJ8eHtN7QAUunwkhQdhQ4FA5DheEiJ4tS6EZxjw9uUKZh8vxiAJEhQTttG5CrEkD6s1EiCop8t",
  "key28": "2rqTKWshLkdkCD2Q6VH5PdScuwwu3qvUanc1QsNhwyVzpFFwD9PNU79toojNknf2n3vr9uAHUEYZZAVSBHAt6GF6",
  "key29": "5dkuQ7f7m59J1PnLMWirBe17WHaxS6cNBK6BmijPBwtKm9covQkS1jRMnfoQb6GUh9nEAz3y8CKogdYBm7sQkZxH",
  "key30": "Y1crJwSgT925bygxkwyja2Jv7uCLswztSuaW1deNDPk4h9UpWYoYqrFbmPCf5Sh7cGC4i87f93Q4hboTSMB83gD",
  "key31": "4n6ZDBgvEsY6Wdsm2oGV6fodJnunuBPhZeKbfgsjWfxmJfzJR2Efir8vtK2vEoJiBTrCr5rsGZmyk93ufmv7kkU3",
  "key32": "2T7CqDuxuAaxtm9yhQSuK3gXFfgzwTjZZ4uh25BsZJCCWFnTcC7GzL2kos1Jmmod2fxYuWymBpfRQQMuTKNXoqNA",
  "key33": "BpdK9b5Ln94tZm5dbvuZ6SnpNj2rBQFeGDd4UpEpkmA9tB8eZoS96AGkhhL9oTraYh1aBui9uNtyNbwXD3veLBM",
  "key34": "39kUad4EoDTmEPhL81y1eGPftwumwkAXSpi2bWQD7rVXeyvXBwozJ3gbPZaCLE8SWZiB6Q7TQFdun4KuAfLCTLb",
  "key35": "5Y3wVJ9f95mXJp9XNjnG78eQrHDaVwjJLVySifJmEKguC5jUPr1DKiTEYDFueYagZ4cEFDaUNmh73hn2xzuedZYT",
  "key36": "5oPEzR78FHpxTwFDq9XJCpguc6oyibCaNvX82qGzNVKkLDRVPNKQg76wdctiJVwcG4bmqZFY5bnr1PNQaE64ERNv"
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
