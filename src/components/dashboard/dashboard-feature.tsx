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
    "KshVK9Ji3RCaPPGBRgNKN97NxMmqHuqJVDgJ3DqGrc6oCHj26BnuTgZihjjhtge2rYXXzHFaUrXRjoXcm44g1xQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ph2JssSo5XBvtrujHxNvLdVjZ5E8mXsBaEnqePvGZbZ39TJXvKBE7oeMmCPHMXustmW6yanUJgdavCreUwx8iJH",
  "key1": "2oDaN9rsGngekRXhCrxYHuPEmjmR8fjMsyEvCLUS6PPhBgJEuceuYbQZFyr4V2K685ticxBPwpqXEDdeUzE6wnm3",
  "key2": "3Sw6sSd9tv62ju2m6yzC38zvaAY92Bi6kU76KZYBqoCcENeXdWoZDWUcsBYnE4YNtYHRnZa9Pn9BAdAyRZWjjoZx",
  "key3": "2gsia7iy1iBAkedp6dQY9Rt1yx65agpBmnyHbwZWnUcYpFdr1Bmkk114Bw4WqPsafScqiccCHJQpLTMT6y9Kj52B",
  "key4": "2FtPNFimdUF9MSVbV1SMKq156Sj3gXQKaP9cGfwkFzanpt36tfosfghrQBhgRxNXcRnm6ddWP5hDZZnNFUpa6Dd5",
  "key5": "3SJDDdba7SE14JhwSvXGJR9iFLmYDFB23NfSwD3P7cj4fBWvcHmH8SwMzeupBecqmsDtuGWDGM5UDceqY8LRiTev",
  "key6": "rgh1ougNNzD713c1gKE97igUwEwsmfdeoiFXcvPMkgBVQPrRE3r2JPS2buM256rkwPMy39xoFBYAwUUpVFgi9no",
  "key7": "4GRF8Dr23oGgP6r2JnMB3etNLounwFFR65ZhpSVozd7z8zaaj7Q9Suj77TTRhBELVZtpSJZ1dkaFe9f5g7dwB1pS",
  "key8": "4pB9qjgp68krAwpWtieagtkgzeftDJCyRQzHS9qGitoEcyzoP9QNXEJi7d5kEArtiuyQWPna8CTEozRuoPcMVZYX",
  "key9": "37e8X7zC665rfuuSM4BtHpk62DfB1hBrfWDXpCQoCUr9CZy8GEBJAP11qLuXuvCprgVBKjVWKJftv5FSvbE1xN7h",
  "key10": "4YmTqBXoGbzcRWCEmXb9hSJvXcC26GPRgNPh1PJLkGzQrffpwhko41E2MhnLvReawbxa4PodZX2kYMEvQw7SaCNY",
  "key11": "3EZP4QdD5ohGKwsLdS3ckasueF6x7rmopXdjXop38gRmj5hV1NxGVeRLqB4HVfYz2oMvevYusi3EHDM7HApZ5m1k",
  "key12": "xjX6dz5zRJhMJk43xwWrZVzE9hfWKeHcxQL9EpptkN4Cdu3bUoi26gTdZKy8XUP4quXtpDrbvLspM6TNowXXN7F",
  "key13": "2qzcfRX3AQbCvfzeQFdGorGaEbwJLWBJBVwiuqQazF3Z9T7wpXPoH8KQAVCeZhtiEiwkYXAwzQCZ51PVjaX57NzK",
  "key14": "KELf7S7tqgFWqB7nzDRWK71RHZfL9tvFpU4Z8hWNrLpSkFweSHne1fqME2YUPnoBV9ugbvYJjH1mcUpSm2xmWyL",
  "key15": "3xR1X3o1FUdorh3qRrtjwTmmnysfjLSVbMQffydAEJD11TfXPEXP4uhtCvUMiDzhRsaTHipA11CEs7gxghF5uY1a",
  "key16": "5DJFB2YH1dyS3yaRBr3hGfQ6XKNdsDbBbvAtAgsXJb7BzgcCUusDmJbE9CoxR2Ws9R54bGR7v6YgsmxahNWWPyXA",
  "key17": "yoYNPKP28AjRFnWgpDDHCbHpEECWrGmWo7UvWEpFb3uYz5jvuTgq4UTgFUpSfjNqMYsHBc5HxjdVDnWtGvry2CW",
  "key18": "5R4HZ9RdJuKWuAcNjBF9DS59jCZFG1zY1NN948VWAGj2SKc1dnzKZ6CAsQ4kwQptSBvooaBZZkLRXkusn5TYzehw",
  "key19": "63rQtdWremo1oic2wbVdU9XJdBf8XwowbGmPcmyJY344hySvqU93BGEeYQdnungQiCYZvHpsLvhKCpjv8UVpK2qv",
  "key20": "2M4rKRd2iCEH1wNjZdvnzrDCdVvRaRK3nTVSSpechMuLUf5UjH6ZmshPqVCk9uMCDm1sUg6LFvVhNvV3f5YgfG1D",
  "key21": "6Li9wF2mmmEAYzUq21tHkPbWPrE89sRzGhsTVC1oJ6VSo9YhA8hsnPZpPkWMJeDQpQWcF9jYGsxdECegytdgQFa",
  "key22": "d4LAcNFshLTfzWVEt93khJg8jyEWLMvVAP4YGYqyM3i78yF8h1dQUpxeYZ6U6vdTnTpnYD22Hy8AWSnNd1z6xqx",
  "key23": "2cwZbQPhQDed4RPNZSJKUXeJbEssYWivb2ofdHXiAp3ZvaUU2wyHziabYiASaA1D5a261ovAWHKNJUdKYLXSVUgX",
  "key24": "2zCYgrAe3qBtvJKkydNxaxxznhZzA6uacj4CBmyQsDBskJsW2BB6MgHD6XQdDmCjuToG6wEdvEUJx9suxZZJ7qTi",
  "key25": "25KxPYz2wPKXt4mQeA7CihVVC7o3vWc8mYm8vNBXQjDmxeEgmNgX4hM1JynE8eHwNDfxcgrnd3jBBBkQ2KatxEHj"
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
