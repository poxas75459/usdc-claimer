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
    "NkN65Y5svepnLhibhzP6Gz3gpuFUi8jDYkq8dzAK9WTgo3sRBjFofaJrGGtVfGMDDc6ZzodLCyZ6TgWz9JEtvgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zL6CHVVto1c4WFnaQfbQuPqLpnpbApkgZkc6R5KPwxu3gcR2ckrb27b9XpbJZpsRy7xhgzj8y3GqUHEBZakgXF5",
  "key1": "YaNVMwKAuKW1xMDvNXWNWaGDUzJsiHyBihShgC3aoGZcKcYrF2GJ9FAuGxnibFMYFXgNWScCXjQFCNiGKzyTTUg",
  "key2": "4JHVYsCFXKSuStTE1AQjVoo48VLWLgPy7fHpXrKgzYsQcQxExdtohdUANq29USSqhXE9oKxtb4FfXqANsr4HY3mm",
  "key3": "4MPm4DQxLWXyspcrDWnzTHz7NoQv9nXVF11pgUJ7xQBzPjtVvPJkdhGn5VJvpuN3j2WfZuMgZwJJSse9YYd5pU5Z",
  "key4": "4i88hHhcxEQ9XHTCTxrqojsAVTskaPEZ8Jd7o5rQxY1ySGCkkFrU6Ean1rp9fF2kyDH9jBiKFQzCB1YXCJmbYNP",
  "key5": "4yYSUWuftcgcvTroeCcxSJVRHEfS8h9G7Hacg4KEEFDybzUZJ2EJDLMmrszaCgt6g7Z77aqHLRVRgFY7QSvRVEbR",
  "key6": "3vLVEWSY6H3mtkMhFJY6jDMj4RxxCK8JGdZeKgKfSkvBmLzbxirfDpFeUYUKhWmfowBxKPvKsV8MPfGNymtPugJF",
  "key7": "3vUDsdcGDcQAwrPvJU8En64znnaUHRDrUm42eMjJgxv212HsT6cjmQDVDUZwqc7VRRLcwnoa4x18VCirZNed7Epm",
  "key8": "4ZQip5W74CEqzqj3Zzu7L51WMeiwzXoDmsJbrsE4fPVo2JCMuPkMGoSMiEkYF8qTFshECSuP5oMi4KMMTjoFiYfx",
  "key9": "2HcN6wUCybx1XjmPno1RqvWmtZUgedABFRAZnFfPawFwLwhaifb9fQkjbPv5FuXxwhDYfoQdgbXqQHbdPSM9ZB5W",
  "key10": "5HV9aQHJ4Yh2FP6UgrRJq8qB41dTP18kkXJEVtatJDtp45MhnLJpxJA9hA6NwVTGiHnX1oYCZNcDsmPaKzKjXDwk",
  "key11": "2ZkuWtDwVsPS8kqx6pyaSm8uEjWr6VjkgQVn9wYftphTcTY9p6xviQsxAKyX2KqXqVxfqRtg8hTMRfqC57i7RWCp",
  "key12": "4adJmyK2DYR4KCy4ncgVTs8pCUhV47whGAWgWBGPru1nFRPBvh1ZY3yD5bH2hHuq3PV8q2KorFPK7MyNsF9BK8VS",
  "key13": "WtGNPY8DXdNBUFKnYwfMpegZ6s5BUQPwRafJsYbt9YTDEVc2UjS4dooVX4FhLo87JxPw536mYqRXvEyVFNAoBfx",
  "key14": "4dSSvcv4tqqLhi31dZE9uLEtvVXLbYShU1fzwNP51L8jrPnMMuoBCdrSWHfwpwYNpN6B8xNKFmFtQn6vRD1QdxC1",
  "key15": "3Gx42EGW7hAFRyv2kCAsCjV33Sh4vkKnoH4zFkrVCkX3LuY9Lb7bjrZaJY7q3AaPyUHuJKJTz1ZzbrEGpKwoEeEF",
  "key16": "LwGCzUtyQ9Z14XAPwZ1sfSDnXYd52nVe53gjviQ9wRdKTnZMSBGcHknGSAMsaVTu5j2e1W1cDu3HfeVhgsTnpeC",
  "key17": "391k4GTxognKnLm18TG4UrZghj2UmhkajEzbcMU19ZsA5GPWPajNJKXkRsCzGHEnAsBjwQMa6qCCrWUcUJKHSY1Q",
  "key18": "4kZDDHjifSDWD4dDuWaTEVvijvJnCuh37XZrrdqRqiu9WfkAsgg2VCwviBX2XhYiiZJtBbfnVWZ5WdK8sk59LnwZ",
  "key19": "ehvxvri6SPTmGsFXAHjZYgoaAAC9SYMjNkR36EtsBwzwthK82B2ATbeaTTpZhC2kAYiDo3b7haYYBdeByLQWSxk",
  "key20": "5WhArx8ZevhVF5eSB3LSkYgrQ7XadJsLcpXJbanvUwoVcRHkpJDCnKNhFLXKqdtFyNjZFRuuGsKYypXBAepY2P8c",
  "key21": "9LKALddjdf28oZ1FNT9ZrPgVUK9mwa4cmHv9mRbHwbDt87AwmePANjTHXmZiSoVwucBkgYMxeZ5pGrj1en6MNfz",
  "key22": "3QnPaQPrA5v1ASK3ax64ajybPjreNrBAz9TCD3ZAMsGk8jgrySHMseohSQJQjxiCV4rtFWfuVCCPgcHcAQP8vgDC",
  "key23": "4asPcSMLtr29PFeE2VJM6FWteA94sNqbPvwLW4jdAiE9PqT58QbsUQrfRzYdMiriVEK9ywPXD23okJdfVfiu24qF",
  "key24": "RraM5WoJLAC1q1org5dEoGr2Se5Y8nmatWPUjXVD2phWaWgF6NgNpDmpZK54xhYrXvHWjztVuQybD4UEuitdzmC",
  "key25": "2mp6atNtGwHbxiqQw6id8K53z8yzm8rp2vu4jnhF1NyZTjMaVCfkyhFK43zAaWShGQBb27cM3tZfXcaaxJN1wSw1",
  "key26": "nRSM1VQFRwu9U14mEN6g45zh7NzfbHeyEr1JmYZ3v44pJxiw516mezK3gtjVucjkS5V2RgAkoPsXy7cA9xsKiUs",
  "key27": "4J77qrBCYSNgtEEwU98wE545jf3YgJysu8H9NfVtqKhZgonLACgFiFkDssb6tX9F3euf3d1NBPsXcGuZNYTKruGH",
  "key28": "4UehreLQ5Mz8qRX1R47ZZdRNLZTQVUqxw2pThSDd1PYfoQkajnQxCwRBbTDa2jV7SQ1cLY8ySzFKzaGscvjGmwKE",
  "key29": "3fyeQpa3gg2AZbrSX8PJcfNvXn1UtqRUric5j569Nd9sQrw4nujAuJWmqgUuVbqg5JANF1giw1fxdh732Zy2XoX1",
  "key30": "365Ro5GE9wZLCJJsnUmU2fkMu6LBV7qckEZsaiKwYNuTd88M5PZVjsXHCTXK7MUsBb5XsoPUv6Cuzgts2fVM2reu",
  "key31": "tHCeLfA8XzEr1Sm5D1ia87ebie1goZzFMqpbd7ftpA66DM64Axgjx6YsRYs43D6Di4HxUiPHXifXWu8QP6uoAUB",
  "key32": "5J9ZV7vRtoTMs9kZqXYGe6w5ke7Jv8ZtagWC7sTxrA8KdnrRmi3geQe6z9ZTHyLPUzJp1tjiQaysTtymJ9tab3ry",
  "key33": "3XhPqBVvg4YWrEeFkxRCPKL3VUqP27opmVmr4E4mGdh6VJ3LB8Qnf1rDjUye9NpQ6kbCDqv6fT8YRgi7RNW39A3S",
  "key34": "5vkQesyqqMsnzkDvZujXVpvEhqzqEuzPEjATquXhHeNmZ8kN8YxquPCB1dq37TeDein8wwFnTqobtZ2aMQR8kA6s",
  "key35": "6Rhc5aCec1pbiEtiVWje9ubULNAB1N9dZHh64Q4NmZzyW2qgAJiYufmGe8qCJ1ppKfX7YTtj3Kj6pLgub6eaJqt",
  "key36": "5jqgpNPwSmZUByT7Z5ASotkSdJrP6xhWDBTeVq8YoUmwcT1X9aFB69SNwV3CbpeubSHuXazDJhD2836Dq9b6J7C2",
  "key37": "4NReNv6f2eqdDq2shkj8E7eW9RvWctagaaSwFLaPfZYVixRX9aqTEiFdAG87izX4eb2dg4p5k69tdwq7VZNvaW3h",
  "key38": "5VWVqVnNUCLns3qrvVn1Dar3rMxNtwC9Hz2rjn7tTAXwXByzUDk2S4vsH6ib7iKSQehb3ZX8CM62wEFUsNQmGF6q",
  "key39": "2dbNS8LzZLpvYJqy5PXsocgXvXtG5fGeSESbgkwKQ8wi2CcpnnfvdvqQf9q5D3YS1y2ZxdVHB8CGdvRnnQSAKwxR",
  "key40": "28Ys8k3BPzg7cBY2yq1C9kX5tjDJRaAJF81C1sY7teGWhuqFFgyZaD5ecqdgjTEG8S2e95howuboPaHVy5fJvoUt",
  "key41": "5A3fvNzBdmnvLkaJC91XNuoNYU31RiCYR8LqwxQ1Q4SsxsgycJFFed2dejxdEEoNUn673YYyj8bY1j1wPcyzL216",
  "key42": "3dWcfFfBjdegrZ3xiF5BVNcbyjTgpPHjhpMA1XXvEb2wHfbVSwq1xnTAqB3wwttCQVfrDrV4cVrJ3PWaktDE27uB"
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
