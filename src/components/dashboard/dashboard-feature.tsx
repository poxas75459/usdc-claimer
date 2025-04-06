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
    "27EBfmpoByknnGUnWRqN1G9GUa5qrwidy5Q1SNk7xDRdGuRePxxSVu8J4hXM3FQJF2GmCB2HPWQLDfdT9WdsCBtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cbpY52LDjnqzKkm2kPVJqtRvLisiWqYw84hubHJwNJ4twBdJcvqNQ2DdCZWoeUbXBRYvuxJFj2BVRN6hZS9w9cV",
  "key1": "3wLi7nErsTdXX5BhCW695fgCXvw6o2TGy6ihkxuCzrJkxwyFNYqVhip5zMLweUTseV5S9JPqBeH7cUPYeQygiuhr",
  "key2": "3BuxyvQ19DBDQNeHiLVvz8aSMZa8YyY2RjsufQWJYNqrpL7rML7mXuNQigEk397j1PbEsvVJcoM1TySgNxFiQD62",
  "key3": "2GKJEVyX5riJAdr2gg7CZVsWRW2uUKkJX4g4323aPBpzsH1SQvHzEuaQ841dvsLya8S8yKDWSeQKUvKy3aakcLyS",
  "key4": "5x8JcdjEdCLsFzX782ZsB7MqygM67Bxpc5YQLE38k7UchpWwujFnCAM3aSqXdse399zxhhrZ4wbvqFTNEtKFtLjr",
  "key5": "2sxfSt9bH24aFrDJGxUcW2Byydwi3ZnAt27wsLjScPyVddzxhroJ9VMx2SoGdfmSE2w73JDRiG8RY7Mm2Vjv8XHK",
  "key6": "2PpsdNZMPyW7FTv6cxiKhbG5A6SzVhPB9L7xKTYpYoa3yJtPrMhFvKJSpaS5KWun15BCVeYYX9AnV3nwbbJMWnyx",
  "key7": "4UZWXjspLTVBkq1cEe1Vukbtcg43gpHU9UQBwdmwAuNAknLf29UeQXqQFzoSFFUg4F3D1sAqNEikdFgakQtTRX2E",
  "key8": "bDK6nZZatfBQBM53nhBoiSVt4YB9UqTZ8ybXFhzGD7ehN6P16DZkgcKPWr3dD1FThRUXG5rKb4fNVstddwtFWNr",
  "key9": "TjPLPjv2nqquJA2RqNHbc99JtQ8sj3jjRcarAZ82PiB6vyfCtFFawxqgCK94GQt3E79HdZhEvRQk35jvxD4GCpG",
  "key10": "vL93QRDNeHPKWKW4wadUyqCTCw6JqmTLGoJCNuDbF2wZyWZxKADM3F1pbJXKAei5aGneJ3cZfF4RSdwYEkFJjmr",
  "key11": "RiJqr11LMBfomPCd2diHwwCiv2A5tzEzxSNTgVgrJSsotGAFVPgCqKfj4jVqRJRGQezyandKZMMNQ7yJNHvUdm2",
  "key12": "2sfCnjcm6CfcgcMdYkixMNXxEQfF4yu9UPfZELmoY2RGW4gFTq6448NHgvvWZkPwFAC9F85uxqZVTzYdF8wBQzds",
  "key13": "3XoyMJzXqGrzgBiKLrz5vZykBM4Gq491CmxY1uUmaAaDe2WXwHxC2QKGLB9gV4HDv3ys5Ae8vTvBxejDxH9qe9jy",
  "key14": "25ykxQnpJbvpxQKfRkUVxh99MDrT8D59Kit1rGwofRqefgCYS6SE7tdrc3BRNZv6oLe5hAmnNvJp5G5HMCHcKcZT",
  "key15": "5tTu5HtKFYFopLU6LcQ4F1WbZwj85LRis4SxwoS2TYNV1NXyvQ5yv9qWUqwAg3g8WJfaytbiyEdqxAeioc3Y1jDX",
  "key16": "4DBvkAJJJwhPNx4AjfY8MxneUFwsfJrWQsbqkiDid6WoH2GpKDbciETJXufxMEuVVpcdcaW1TGMgYCeojbQPfXTz",
  "key17": "5iUXSCAjzcqpW88D1eyD8KfSm6f9egsSmLuSH5aWQkhbSzXBJGgJLCvzKnEyipiiXkRgXtXELN1HtiBKWR1R7FaQ",
  "key18": "5yjTPxTeTPdqKrNRdSB4qnWz9MLteC9uUiTHzfXKAG1KhBfmHN3KeH2XSqeVrzh3nK8LDsLtEeYKAsSFdrwvQ7rN",
  "key19": "5JDcda13Bxbt8XnMznJFRFKoVmQW7bSMhEtgzheEn7fCxkRzpQRdLikD8c4DqWYLoAHeP84Xwxvu5cyz17bjhCec",
  "key20": "3HbxTtPFUTWapkLt5v9DZG3V86ZdgHDNuBTcQq422ZpCAfW4gY9LQxTcQng14V7Rbhwce1Ubu4tGcLrhhwo5N5uc",
  "key21": "VBKvnZ4TH3Q3sSuiFJPvqpo5gsyhiWvMmQuaXZ6KbHMCUZQ2bbs7EfiVnhSTFxfH6DEDgzmPt9WdJi212WdgdKr",
  "key22": "3Yxrc9HwVE6WLQKuTB9iEN4dLwdumxbQiJNaSBYYtbWkCFTUV293wZZF65pvttKPysbXiLKPcmFVvazhkrxFQygn",
  "key23": "5WbkW8KwmsXqx3AEJ41vmKchcCsJ9gPwuWfymLx6JQ1Y54DWaxduivQ5nLd7gQjQ4YJkDwhPENg9wT9LgR5bHh8V",
  "key24": "5Yz45M1TfUYZAbGNUg514RMENcbGz2AkJsAjdmEK3yU1ZQnR32vZwK7ng8Dsz64hhvJfotda6wusZjabm2aePgE8",
  "key25": "342mzUnW925zzdc6T8RtjKDwWzHXARgMzcf4XMZ15rH2xBFVkFnVfmQn5jV9n2pmACTZqN9gS1st4cYBRHVvQgtE",
  "key26": "36FJqWe9tY8VftHVDnrgriMHdcFCKv5gwcBiHZa1vxUQzSdFY6WKS3HHBxq1EQexSMuktVTRgD6jZwpj55abBT9Y",
  "key27": "4b9UpHGMT1DNSsdP9VyHtREUh97isGZqmFfymBkr8mfh79jhLKgk4V3eUVSZrceLadP3UbBn2xQLk1LFo4beNQ3F",
  "key28": "3pufXnNVPUAmF8n9wqrFkCKWj1yYkzVm6Ld1mHmr7MVNRajdXAuFKnZox2dVo8RymqcE3dH43mQ7DNZDuxCX3qJW",
  "key29": "5UbsBgyko6xQ2LEcQD97Vr31unvRvkH9TiKSNS7RcwqvtSW2diZT6u9RRVHrtAU9xGrvPn4VGXdizzLP9Wjyx2g6",
  "key30": "5MJx8Z3B1rWYUFUnbWNcCuToZWzWzL3cJX953LqDUJCykGCKTkch6L1Qhhj7GL4b9dzD3nCZsLDNFnXYX5zW4Umk",
  "key31": "3MS8D7MXxogZuYTgePUqXWrTQ6JMEhTdi3QZpVQ2zv21sUGcY3KPvzuUNzvAtMbQjxv6STszLhiK5DHAA81TH9tp",
  "key32": "39cSzroYq7B8pDLsy6aYo641fd4Jumfm67Qveobu5XHAF16TStR1sPAX3og4Gc6VPMpfzwYxwHxJyqQ162FiU3BH",
  "key33": "3VPm3km8DUHHopCyAKGuaN35TACufJFnKLWd6eWB1SjQaqjGMQ8QKWGXUF6TWCVAbGjMZ2JHTJmUBGCdgYKxXjAZ",
  "key34": "3wiKCDEdbd2LCung3UyhxS1tVyhwct4KyfZrojCBmbziEjj9Qp7ReqjDJzSVHT77EbMBBxwaqB2XqQ6z3e7gsZAj",
  "key35": "2bGPWxJpu33d1xRBtc1vxzRCZnA9ZMjTeuBgfKiZEDMWSYJZZv6gpuwG6vtHoa65fgHRimGpG4Ect51BcU5qmmUG",
  "key36": "2ePVYv5xWUfQpn7Cr8DDv3meXD44GHFaKx3EKdSUBRLLZGD7aBNuxWaVizNU42Dq7tnLDz7sw98nr9kyQndE7oAx",
  "key37": "47JVKDVrcumcUennLCtvtDuqm64BjNBmEPRHJm4jhfv2mkgacB6R3p2G58BpvHb8C261jWYD1zfFL1dVuGgQXqwq",
  "key38": "2fEVxJ3X2ymPKrxkx2sUt5Mkwkbfcw2c6vQxGooxrFEBYnLnCS9G9BUHMPiHxoq1J6p4EDauCctoARNbqQR1kJ9q",
  "key39": "2nNLj8bBpcCcYxECdRW4se2ZDH1nVpFUhHeQmRntPXkRSx2eSFUTUnpecodHoruFHmZkEXW2vRCQraxqqsgUGKnt",
  "key40": "5arAGK3jMMbHJZqnvkh8ZacAzMrHsy9ZuX5VamLGGgu1nTpvqwpPrVaDBPGJiANTuVME2VXqbXdAzUoeJNViVHns"
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
