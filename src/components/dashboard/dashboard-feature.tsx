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
    "54Hw1ae5Pw9aehKSPqYjx7myhZPHgYjGC6k5XJeZs8fyVsAVNiGPABFGNQ3DzyvNdiqVffuAuuzH1hoguAVR4tqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TPUPF5f2u7vBZjBSz8z1hePUTbYvYogbajQFLnPCTztjmV29HrgmcKGMmx9JTaVT4HwSFnACVqGvpxEC6u2yZjb",
  "key1": "21QH3A3PvX9dBo9xrvAShPib8VJ7pCRnofeyhMzTZwxntLtnjJT3nDi5JS68wHVW7mnhcH1zN2oXG9Wr41259MUo",
  "key2": "TfQX5ZtWjN7FBTzJEZ95Swz1sC2Lv39FzwppnBFNVMANMYE9HCh83wEuQMMCcvGaw1fCUm1R6jwZEDQa6Frksnt",
  "key3": "4Xb4BgfnXLcPkBbcJeo2mttSP1mVY4JcfcgBE3LoxqxKa9z9sLhdwt6meCdKBRqEdRKx7pNBrjoT7FDQBbMnJPnq",
  "key4": "5c2kXxex22BYivYL7fHuWDY6EPc8AFZWVVCHbzjXMRjBYXebzdRHxFUvDqwVGn7UjSwifKd8EjAyW15QSts4Dx8P",
  "key5": "qYhr6auF9ZxkXJVozXMnktLNdVSP9JxgLAA1YKfC247UCjhacpnJeovTcXt2rkNGUP49EShpc7toKb8ahagdcyp",
  "key6": "4Jdt6CHFDh21dpEwDP4hFd22dKFExrswRniqbfRgX6JXhyQgRcaeJoZBPA61bJeEE1YECNEvFntxhavaFdQeyUi9",
  "key7": "2WBQKo9Ym9t2aEQUndGCm2iqLcQsRqH5VzLJypkCcvVHnNG5phrVUHYmUvyk94HwySCzrNjhbArCstEhss1QCNBG",
  "key8": "4GaHjgNXEXYDtTSmr34QX4PDBowacWXwRf4Rxhi32cikvFVfX4UQQhCt4MqrY7JGsG9zpwAk5hvG9LyqaBJFgZUF",
  "key9": "5shLgE4v9w33XmkBtrvcGLy2tHaGjoLGputvbV8paJkye3h1xW6nMhkHAQh3nrBYGv8Ay3TmLuToPdpYLp3bk9Nj",
  "key10": "54TtccxxYmp6bQqmjPqgMM11KK9tuKSZjcR9Jzucv5kWzU1mfmtUBSDrvQptLYzUCSqRsN9zg3ZdgVZG5C429tQE",
  "key11": "2UpqAdPBDfNUEhWPMszV4ZZCpghdunouVKrbRHWTJfSNUJ2cFHWvzgqjbh1cYWQgsZo1JPokX49A7mzr978hNnd5",
  "key12": "2EWgyuaMbqc6FMEjvc5ie2L2pXs8Hv7sdJdH34TR4R4ti7tSrwDzDZo7cFmejRWPJVcSC8DYfxH2TshmEmXsNad7",
  "key13": "3YhyUt4MXTVF3L7BKZMzhDeDQwbXoS1n99KyBXbb3V6F2WJLXp1U6LbQB4nappQWZH6Lm2PankjQATaJFVMYP13d",
  "key14": "roxNVfo1ZjgcmBzQtfdoSbWjeG1S3QwNjLRkfGz3NkVAXMjmpXmYTcSm6cS27aEob59hJeZLoDwRoiQ93s9ftU9",
  "key15": "5JP7JWVgB2xUsKVPUyhizcLBsqiQZF3MucSAVxFC4WXRsqLdFiPbSe8GQhry3rw8SL2a71yqd8pb9ay8gPrnHnuu",
  "key16": "6fk6Lfo6rd8AqFjyWshNcrxJNbUcdxbancP1WkR3mL2k1bMgZetsVDZyUW6km521XrfQsSpj8Bqca7UQ7XZqHmG",
  "key17": "4CLMwZ1aQWpEkwwhkkzZySCTbfKSCaDxfqEUmAxtF6m11ucPf7hs4g4tfV39MNBNNLsxgxQv2sELwqYT7CWpb7kU",
  "key18": "3PsxcXgeWDneAZan9N7x7zqZb88kv7X2W2Y4QsYiCb9QmBKA9sBYuLapQLdDiHf3GXvm8MB3VPFGDMRH5mCu1Hia",
  "key19": "4DXRiHXnUpFxvmmZkabq5Sk2CKeJVANJTrRrptbeMNnnZm9zo9ZGRqa14P7yLz7h2NjXcC5a69d3ksqMp4W8E6E8",
  "key20": "uEmhxJLLfxnsMUWu5ukM3Jq7BpP1rbTyroBym8aKKGLdQe3aTej3aQKueps3wazbhzckbbeHnyX64H5qxFn6WcT",
  "key21": "2YgfcEgUi32rKvnF5bmvqXL2PrxGGJzsDLV1WTeViwEdHXf4Dvt6htndWWpGoedGPiwn7D496EicFkhtM3kxKHCg",
  "key22": "5UJnsJaPgVXHkJR6bfQBjzGfwMnV6TFuPnN1zptjwEFmRcwvtjTqvfMJsyi3WjVaUfoNr8YUP6cptXB9bpVyyVwG",
  "key23": "5hpAz5hsECK7ucbcx2NwqditrjdaqqJSwSRdhz3Aqu2NpjaecLeGrxxMLwF2zpRYXGnqwBrxJwp3SUa2nGhsxxTv",
  "key24": "5m5UiEwg1akdtnqy8YeaXebdcHy4drLPWVifRafjxPw95b3gmYEGEQ6WLiRwWXyqbFqM3hXFmqoUx5RksEbTdwZx",
  "key25": "3LC2bp3b8RcVKABMBE6PcD15GSoc6SVZT6BvJxVff4gMYqas3CDxgWaH2e4jpNf6gTrbNZsdarGDBB1Tg6iRtYdq",
  "key26": "2DkiprpkQXyVUB8WiWapvms2xpNrnMVDUNRD6wvvFKMNqRaAEt3fLvSN8FSjGcErvLSXAZ7y4ELHMFom2eYfciGi",
  "key27": "5YxqDAxSYjPNSYy4GvhahHk3FkpZhEfHYY5eF8yASyVPXcFntp5tvRGkvCtHdSE1Tat1a6bmZNUEWxEa3QHN4Hmo",
  "key28": "28Lw91E3wHssT4kHtSKyE2N3kthfUKTTM9Lq5Gu6Qu421DzTNxmmFiP5BHGNsMLrD5yJLZC5cWuFWE945Tb6f1jU",
  "key29": "47tm3HNkhLoSHwVid6g23UvDi2w5txQN5VoW9V15cpXmtx46Nm8byGmZpYKjTAeosDdTwFd5Pi22iVpjA4rR67kE",
  "key30": "6ALByjTFXwh6V91sSCKM9aoJGHmb464XnbnR3gAEdukA8Zjh6dsRruLZQNVFtzk5ifRdqvaPWQUYRU1Kes37CRW",
  "key31": "3Dh6dZ68b6CJae3vnYFXuud89aeMvjUXMhADnVkkX7hRq4Aaw8KjjRnzLACpWLVMwPbpDGKTC6H6Bm7mt4gd7gys",
  "key32": "xy31dbKvFaMFhW7FJQqNMx3fkZfzREJddHRqV8LhDn7Kj1jvwKBnqJrtFdxutbZFPb8XXnGUJ3boMTCMwpFdRY6",
  "key33": "3TY6epQvXW3iEFQ9m6JJjx8LpM7FaaFNoHPwiNhgXeSGst7HnsrWYpWzc5PrB2w689ee9moVCVf8HVQGNBLLfX7",
  "key34": "5AfqbzacEPsmded5rUNRSNaf2ZiEEvxD4LmTQ3po9ZbR31ZoStVDnkW1YNssk1iGBAHmfiifrKETTeudb5fp4c3w",
  "key35": "27PS7uTrVu9A1SPxHJVWSUKPHq55GvHLb6bdhLCavMVhhfCnRj4gj9nQ2Yfcz3cNztrqQ6NNEGLDJWJfs6SzZ356",
  "key36": "arp6VB1daxnCjTackdioHQ6k5LGsZSp9wkWMwKPgAsxJwyR5MmUezVHgvTogVGFKLzuXwoFan3irDgrmw1gQaQu",
  "key37": "3G8FzJPVLbTsxh8Lsio6gzHkDLty3XPVLD4JgTtteyyAumzxwRqrPd3a1C8kYGxYTN3BQLMdF4JNYYYWUPbuwkuX",
  "key38": "3twLb7AEL2k42NAaKJtA3mzAuxyScWqdfjeU3qu8fTqL2Jpv1tyiEnwmPE9Vze79sazVcpP7nFbnvv2M5qhzTjy8",
  "key39": "5czJHNEe3YkduweSuHcedcHUurX9Jpe8hFJLR7tc6pNwX8Lcfn8YohAojakm4xfxdWBD4ZnxKA92D7CHDrg8MSQq",
  "key40": "4QUkDHLf4CBrJCGGkBnCa6gcufMQBByk59KREbn1i3XJCGe7Ryn1Js6mCUcvB9zhgCiSg5oZx3ubTBRTQtNUjLBv",
  "key41": "7Q1KEnNvseQeESzx3X8taskCFuKf5MXqzTGLj9eW5Cd5Kz6Pr882iP8EY2qit8DVug5xBfqx8oTS6bVWG9ehFKb",
  "key42": "WDwhkgnjtJxVjRYPmkRj8cSRYWxRZGkDZyj41s7fUxoBwmrd1CeJZoktE2qxXZJMmTvofJLHt3vnmjj8Z8UMdUo",
  "key43": "3ixe6fePWEv1oX6ic37vpDJYRFJRmX4NsrnEYyTAT7ntTYM2Py63za1ohwobGvti3GRGY9Z8YFEkDCixzFbyu3zC",
  "key44": "4yzVzLp6YzrweS6n3ohdbrXysgiXmZXuVShVXjZnXMYiDCziAgXurqZmM7Z5tywGDbvtsbE41q77yRAYWysLLWAi",
  "key45": "2upcbNmg1t4mWXdsQprUMvUErBHXmJ1U6oksmj1fyknd7zPxXpbU18WGRgcAYAwrHFu6WRhVttF7nbFJuVee82V8",
  "key46": "4S5Mszfhfew8irsiDqMF1hWKjStURY5SNEcjoiuZPbS8tqo5ZVM4SdRx2UU25w1somoj3c1cjczqkvU2PVvGASqF",
  "key47": "C1ct9T294Tr3weuBNAL7DsWpCGeNv83vFgZFBvdnczR3GWqpzG4J5LaxcFCXR8Va16NyoeHJcf8Bue8KZa9qPBy",
  "key48": "26oJRZe2rpXs6gW392sRc9m7ggzW2HXNDA5LRJtnPyRVcjiWPaFZE3PjykqxfyDk85rhLytpgrXMMrCA3LtuQXUP",
  "key49": "t2U2poMreDoLppKn8HhqtHvZYWAWqL69nSyyJof9G8CtsrLnwJyoVPiFVAWVqgtDoMkn3MqyEHzz5qFNginkSVV"
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
