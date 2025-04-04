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
    "4aXgRvfk2cgP5zfPQtV3UboWbjkwKfaij3Eun8MpG6bPqAx4LB7AcV2hQuXn4oK75jfsjwkVNPgfUY8CHtBsYCgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQPUmLPF9apThAykkye7euB3GvuyLu1tfxzuYsFbjbtn8Yqfmf3AKme2pCp6wish4rtP7p6BHWYbezCwxBcaKhp",
  "key1": "2njdgkM9fKfcNNjyqdfTJJK2V4j1FEXYEVS4uW39djyuxac1SK79BZEz7PeKDrR7fMrR5pkv2g575G3KsXS9KnAe",
  "key2": "4ps89UkMPTRiWnBE74jvCUFAWEZE419xLu3xtAyCw3XXDMkjZ4jNK3o4mvpiekaeyLLDo8DRQPk4isbRtBbZiNVD",
  "key3": "2PgX4j5Gt3bLeCbZo4dNDbj1qfUnkFriEHdmEF2ERUpMDx9ZqGb8MoWgQerPviwiEVBJj6FU5Up3ejha3g7ZsU3x",
  "key4": "5FFwJkxTUkmqBK2DJ6HjXoaJRxAwVvPZMqvEWcHupQDo7BTHaW6Paq7WQcPWcVvzxrJsNpCahNUC5MtUs8Kj1XPD",
  "key5": "45HGErLCwwJQT76Z9vb6cFovzdre5DP7PixxwZPqW1XSGNkcFhQqPXeWc64P5XhqUyPAHiwhkVi3BXpCeEVmVvhe",
  "key6": "giyi1Z26W76JrDPfGPYmsjnh5GRChVAfsKJTSYwnDZR975eBaPrvGsDjEyZw4CcSjzvTs2NZVksVSispMJWC1sT",
  "key7": "2MWY6u9kSHXBPfDyiKQQwsWqBvVLqjHMjGa2vmHyJNeeRQ7T3MNCARV146MizzqQweDjgFSPurMFgZGZrF5BznBB",
  "key8": "4JYWRXy1Yqz2eC1WA25XMstKYwEM2SqZS8TNmUZC2hW9AYkNj6QMAhAEKqV4iabdD4YPL9w3WEbLarhXNvYMtgdz",
  "key9": "21J4d3LiLpMfbfHjVNTrESTYmTqS9SupSGht6QmgYzKZuEVuTNRetAiyFmj1GmhAd5GDsoDQpbAYUFB2ozWY3wBw",
  "key10": "2SzSdd2Bt2X8NQiaqgcxNyy7EutQT4UoTyKrWvzToPXaaioctJFG9kxrHpVKJueFFFxXcprt6eY2bWQGncCRJz9R",
  "key11": "vJ3BC9dqbQRG9qrcE48WT8FCiJJQXCBenDyHYxPJ39xLNnAJ1Fp8MmmRmiycS9kHdMNwpPoxvCmLD5uS2fqxnmF",
  "key12": "5XGG5NqSkAjfjaNuBTTnfnF9UfPYA8sHBn9tgUfTrEH3E2XtssTWVchYGXzeb4LzzJbvaSRefFzosXygH1AUvKR6",
  "key13": "KBPucWpWsURcfrgq33X1iGqrTE3nBFG6vrewTGnQe3pkMQFpuZXhjyKmEFvDiz4sNF9uS4n3vBiPHkkvR3YDFcd",
  "key14": "Dr5y48BnBGQ5ici8sbMu7Md69SnVKiQunucf8Mqk9Cu95z9LNRDJ3wnepPScSztTSvNHSU2CkQXwVHFveQysgTT",
  "key15": "47RvP9kmz9R2LQMZnrZ8vC8gBFAGg49ZqALT9xjfVnSZHifJetSSpAnu5xzCz2nXAWkTyhb6vDkR3WX5AnstNB3m",
  "key16": "3tyC3tucMCXu2Sn8u8mfhHBZmEvk1zg7Ep2aaGj4JReh1t7gh3bJikZg3UXVrxGFmzY44J19NT2jLSqouJUPyxKr",
  "key17": "359qntYKRdxZBkPM7bx3H9Ji7DsCT8veUD37P4S69a6TjqkCTtBcgP2DYc6heyBPXkGyNNxAAqREKR1oYvDuSnSt",
  "key18": "3BvJJUr9buCb5wC9CY4SfoV987UmoH3VRLb4m1fUHVKpgmbydt2erxnntNENXP86utmqKAbYH7qrK138aEsY55Cz",
  "key19": "5cYErSLav5aLgxBWbWTfLAkDAtw6JeyVLVS4Vtvp5uDr2urj5hHGUiXzvReYrAcGbW4acK6xUxbTQM6qsHgY2q4Q",
  "key20": "4WsKLHA1Vwt8Y1vBoKygzHTAv64Zs2SvB3zpcHn3kJLe6JVaK5ZGhQct4tpELrWQLLArkZhFTR5F61BjdugVqDE4",
  "key21": "28bxVaudiHEDWocF15XdqsHm9VGAnJT4o4d7MErrqwG6V1avGeiQSBkFvktrDdzghdBzGaiPpSXbjMaY6yMihTbs",
  "key22": "2kTw3bYdfCtHjMBKTf4Bn3MvH5UUxGLExjGeYGjX3h3RoRH48tLUnD48uZAokFQHMKX2nLvg257GKXqyeTan5ydk",
  "key23": "2Mhwh9fbrJ8xSg9oEGxLqqpSbF8d1JFZoC7QxQEcZ3a9iyiTgKNnbK6RBrfjtGV8LimzgMEaXAHxRwbaAFn4zdXy",
  "key24": "5Dsmch6LJV3LnxfUsJYGBZz2sz5bjJ2DmYAF5zEHWWzydMsmW2TPpX9RRRXu1aBtiyFXaeLNB8Xvy7WBa6m3rAH5",
  "key25": "etBnXKBqpT6BHaADKpGFVMrLwGJ2yD8UEZ5WzHMAkCimFPWDW3aYCkEYdKWT2aNW7qmNADZUL8wSbzKqGf81pyz",
  "key26": "4wFvHDSPye4PJGfd98Lw6RwVW7tthNTvwbfXjPugdfECP7cT6m29KBdFg8TP1XYrbuE39BKBbjUPJysvtW2hYcng",
  "key27": "5XD1oQUMUrgWLLdZh1tEM5mPvsUxFAVmfxgnx4oNN5XCJbsRBNLroUGLhAGkEZgYiH4yYVYchN6Ea7iYQ6ty8Bii",
  "key28": "3LdB1bi8E6PNxyAd848cmcVPyBKBTUFHX1Hj3GLupY3bL3S6mUPurCMNYCoR9utfNBHDbciF6AeCXFAMJF6MMia3",
  "key29": "4HbSnUPchRSgJmGPuJhGapzWJFqXC6AWdhNbjMDkZPP8g8LAfSvtitXz76THJxW42tmPSZSboUZxbD1dfKQc7e8H",
  "key30": "4gKDgxPxeyuTjAbKXVavizFZMb246YCQRukGc5fAVTbVKXeTkmaLe3DYqmFxPYeD5S2LyMdeFYbmKa3Pm1QAw44E",
  "key31": "4RsWgJgFsQuokLtAcAGyTP6cgdcMWhBjx6BvJxkutcPrTEGkoH8TtCTPUtvaGRPYhhFKQAVS6GD2snZgjMraivxX",
  "key32": "53ykNQZwfrfUESuKzjWk6qQDLuCTEb8fmXjN8X37LwtKq7po3zmEokDxDwbvyUPWHpr9dDApzNHxjuMobNhjzdVc",
  "key33": "3T15nhG9ozQNhp6FiJKrLGSLkArnwP8QK9fDqy3D3VFhyCS9x31fDkX2tc3czphEJRi3im2XJULv7bTSH56PbJ2s",
  "key34": "2c4nnPt7uKGG9yt4jddXCTYUpbKWSPW9mGV8fgF8Bkqe77UrmeXvp2LZuQ3wtKSkbVhwcvJcQH6jFupeZ49Lyk9n",
  "key35": "5rHf5KgALsT8cGQqxj65ivPw3EX7qqwyUSPa26N2gDuLjdknVCtuHAzQtp4DLmvh9xbVDXwYRGq4Dw1Pugf88HPT",
  "key36": "3JMoaooHWdZGwpXYom2HvbCwnSYRNBHSc2TGArnUETNYXskd2j1An6C1syQynu2WtJxAMDSzNJ9CbNfMR14fFmYS",
  "key37": "5e3cF8GfgKHvgfuwsHhQunsmtteF834JBEkRYTiep8ratMsBRfbwDJa3YqWnEPW8uDRZ6EtA3NTQLuvWYBWozEtJ",
  "key38": "2UHMzQzFcJu3CaDogCAuwdWSjcNCYe8t4yReqPNRdk1vyWi5XMkzKxPfYkEDzdwPdXBwwKTJiUwWnjMrh1LEqdR6"
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
