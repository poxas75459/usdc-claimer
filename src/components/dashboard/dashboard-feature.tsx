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
    "NWrAPnFAgaoeg4hnDszGkcMySZ7LzbDYuRLr4P1CZxiiLYmMAceTW5PYKa1A7tQs2y18dBh3zpzHNZxbRbban3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tB25bzJeU21mX9iT3cT3uaxhC1vhevL5DLj9dWw7G9taBjF8JBv72nonjSez8UNiZy22Cff5wDFPz2NQ71xfPE2",
  "key1": "4UYQuFc8zFcU4G2WAfczfjEXQCN6h4k2d6wXbugjxDEbsF2vh3eUQ47A9gNoen1SUkYtedSpoaNfKTNKSD6LaYKw",
  "key2": "2bbsUUYfxMSzTcUwpL6Tvk7dvAUKsYsPfD4iBJPc8aUNhy3mmGkKTVBD4wswjUzBT9x876wgjDf5xEQ1KWnae62x",
  "key3": "t7ckSMiAB9py9u4wLgiWsYXxC2xNRGbCUqLDBg8fVFi7L1JhHp4b4zZeekDr2Wem7xNzsp4KWNSfCR9BXBK7cpr",
  "key4": "uryxqPjp9mh3SNGHsM89dSGifxGKe9owNcqWzy9977aFWogML6Dvo1ckq9jmwiQwNQG3Ca8L2q8sSiHiGWZTQoD",
  "key5": "5vFC3GVydk6pkb8VGSjFNg4RK9C5AEJXTzzNVW5dV8juivoWirNuJFT4XjTMoLLMVxnYnbft1FxNgZWHQDxSryx9",
  "key6": "5EAhgUwpHbRHcXkkPY4PRUdP891EHRV57pCV3cr6PV3nJRW5V6rdS3NM8hy1zuRw2tsJjpaFQYG5cyeVm9iG9hPc",
  "key7": "61qAkkSNjTuDQwu5fd5NXrsN8J8mAMxmqmHwWjQ34XE5Xp97ZLrGzktCvaSzaHgdHLtFCUtmHmJgR9LefihJhctH",
  "key8": "3NZEAg2kuw9W318QUPsg3yWi2vmCTQNSvCwjSUh3s7nJe1Ue91a9dVDMMPeWSfde1jPEZkSHdWbUE2kbMdynBawE",
  "key9": "35F198SGQBvVT4taHMfR8xCC6ySBuxiZ287zns4NhocaNGuU53Fw3cU5FVbxyXhnH2q9UbSeQrKwMs8b82R3YhyH",
  "key10": "5hhc4E4eUm3gqhJkLpfycpTHN4gYzru9KAsxX41RG7WpBkPf2XCcUrgLtaiAG6uwphUE66YrEzGh2iEhuzQhHpcM",
  "key11": "pJrS9Xe1naLLoyzE7Kn2p4uyDDSTjiqkVoLMiiXLGrFhu426rTftyKUCTESQHLMeEFAvquEoQRk4BaqeHvxthsa",
  "key12": "2uQbgodzXV3BveBjEKqLN5FkrsTU8w81WfXibA5tATxn8CgGAaXUBFb1JGJ7DRg4WMTB8pKhW4zGBruqsekW3QLM",
  "key13": "2AvzrhokjLAEhsjydLi1HRfuweCdSGcJh6adWdfH8pZ1BC3hFGYyHMuQYjtKEVMCUhpyZJJP2JQxcz47y5cuzDp6",
  "key14": "4ZJnGoSNNoL3FSQBFfssRdRZ7aWHvbNxRDgHMSL4tqptQVrsyu5Pc1hiKP81SyifLyNi4NZCzLvXBQmEo6iJjZTy",
  "key15": "435KrnKnoqRygYcT55i8i46nyC9sSn2ykNQBZAa6kS1STGB41e3H9R6GKhPs1pegEDWAv3tZM3VMztbRthiuft3U",
  "key16": "1YJdVn5c4WnMitch9WbzGvH619jVFkDhadhhSCGkFVWvjmrqNScehq8orn2Xp4D5emJxM6T9DMVmyUC2V1GQY8u",
  "key17": "4CkQRm2kYxdxHoJ9URpj7e5zqu36jCiP7A94SeWKL7zKPZBJznttwHdV7gNSzk7AGFxShS5q111jbprEHossTZZQ",
  "key18": "295oi6NBavCdoYhPwSR8pE3FMmPiWFe33Nzb8B1cnrC9TPL4BXEw8K2meoYhrufCMAWYstpjanfPnMfTXeR7212d",
  "key19": "5MJfLs8p93C1YgF2zU78WPUjXUuaqPcTRyten8mEg7TB65BapGx4CvUW9drW4oWJYArQeKTRoogeFMM2g49tRxcy",
  "key20": "2suZvwAxk5nHeBsLHpQw5tb3r3yzQoJXbTHA9D2ZNbHmLUXpMUU532ducvJNN3WAAwgKKmsh2Sd8hs8itVW6mT2Z",
  "key21": "3o5xgzH8ZBx9NKYww6TNyqewGg4cuZvcTFK916b6sZQkfd6GuJ9cYiepMUPpNbLXs79L2n8zy9ucSZezQ9rK4PJK",
  "key22": "4aQjuZWwW59sR9qshXDeQSQfrCYHXsbdTmjzKf33fJt9WMJFVH7DfCG1LbgLENDYyAk9kWFtQtTPgmNQe5QRFyWr",
  "key23": "2i19tnmTqrmPKPVbicVFRfJJGEEX5K4x9SWbEf1xCMxBSPk51zJTwpNtZUTrKrQHGsQ9aA7Qwmx4Pu2tGZNoTMP1",
  "key24": "2YoWcho2EJ7JviksA3aiXF6JdJVCe1Coq6B3i9MyTbbTyPWrHqyN9ipVBb5NstuavT6LamBKG9DHZiTCyuufnkF",
  "key25": "5NwdunwowsKQQwtyTnHg4ovn7QgeHwHatxMpEJ4h3qQGRrjZoDrGPBmrmLBS6mFcr9vX3Z9mEXvJmXCmrGz6W3Hj",
  "key26": "345Ua9QiqaRnELiTwitBpXtKt3dEkdNtjJy2vHPqZh5qwhaKLk8BNaqaupZmD9hVy7MNHnx69Rw5hKnxCZwoSize",
  "key27": "3xQMTr3BCswUJjjHAeZCG8r6FSef1sVC62Ri4437xzJz1imUM5VXiBcFZGQLoH86G82NUnhqcUszusX4TP56fEbt",
  "key28": "4hyEBRFhNZekfvsiwHbFKyACTrHZifAzdoNGXLKmq679Yv3ra4ePmMJGzCU5Pz95ChmjmzTmT9tgfthQc7ENeyMq",
  "key29": "AcnJY2Fnrmee2XnT1opCVTPyNVFen1Pd5Qr6fGFyxVTCfk8HV1JpdFqUM7toHBJpRCwgBkmST4cHYkLV8hgMvMp",
  "key30": "d1wvKWZDjyUeFbRYk4TadJC4gP1Fa2KWJYQb2qC4qLYLfziZwGV1WxUC1EDsHnGRyAcVTZuyvxpy79etqmLA1eJ",
  "key31": "3TinkySoFZP4N5U986cVrTR57arWC9hs8qTf7d2TiYsRj2DuquyunEMMcMumsL9h5Qk14QwxyvkdA92kLuH7qqjG",
  "key32": "EDHwovyG6tiYBVN3seeGCJbagf9gXUzo2yk2KV8JH7J5ojkWnLHh5iW98UK7GgH1hgEKDh6rv1N9eNFMa7eKBjo",
  "key33": "5jRaXctijYMSDuDicYhkuvXcstW1DZ6a1WqXjp6b5Ea4kDLxsDsqKrEKRnqKwwhbt1TWjGNBNFifpKYJNGYu8vNn",
  "key34": "3Xjn2EJgWV5ep4wLxjpPEAAqG7zbV9YRijzkGxDuU5PeH9NLc4SZ8T5FdXoFGdxJxrXt2oS5fyn6KR5eKNcwXdFb",
  "key35": "3MeYUBSetk1SKbB8UYEuGpdVemoLrAivo1a57NCKkW1bRfkme79nSPFhdxMmfKjyxiiLhTaZeCjQgfer7aChRAja",
  "key36": "4DqpdkacE8i7xRAqdtu9naqKDUV7tBGJwSeVx2yqCi2eoTBjEtraVgSwK4kdssAbKsCKygUjA5tWK6NbXCZhs1R1",
  "key37": "4uewReHUDacH7czjhWAPTWEhE5khxRmtKXLbQoH4pfz6yDQQybNXWRtGrWae72KPY9gfTBXrighp4bBD3mxnoZmq",
  "key38": "2RJ95CSJVaBd9E2BL6pem3hasceXPNTxuw5HvTLzzTkjzG1izhtnKi2x7y1YMkV8NCD8TSqs4wbge2FQbp57cJ27",
  "key39": "2zzM577E41J2QmGCFFC2rrkDtwGeayabav9xQ3hqvHFHPzBphdoQ8B7dL6WDETsjJRTa6PWzPHSXPf5ENJFNk4nN",
  "key40": "jAhFGwu683p2cMhpvzaEVZyVqh39vTY6jQKRV6Lpvjp39s1djA3H7u9uAQy4Dxx7tWRPkE9F8MftBvqVHx231oU",
  "key41": "5rzLtR5kQuRUNvJnDYsjpPYzgBUe8rqDTwdm7rTy4ZJg37F2BAynhbhAPAbwUj8MFzzEMGkeGtkUHzjU4yY3uRSj",
  "key42": "3yfytpn2RUN8saMuJgWe7x2wySXxriHmP2XBYZMSfES2kzEbDuTuz3fmoMDYciQ6m7WbnDTP7SowFY6aGjvVPmrv",
  "key43": "2kViqdtXNyTBAPBbimMoQbLrGkQ3FeXRbNAjSM2rJvPZKQaB2cJ8pnDW2xAwev6khopUE15R45sdQhKjCpbPb9KN",
  "key44": "5MQNS66EiQQYrKs4kJoz4mACV2rMoVGC7mEoZQgt5rsPXXqxPRnQWb9mg8RE6mW7Df9nANAG4ArFAZuDUkTadWfE",
  "key45": "2R9RhUoNujFwRM5FMgBbgXvBZFh6HEsFdHGb71rBhGsNfmcJi7nWEuhdYZEEQSn5RcSrCVBvZyQrXa31XSDeAoqg",
  "key46": "5E8JBUTwJa6KaRoTFrcGKXJMXkY7kzmbHUNevSjh8eF8xM7ru4zHecB7xQJbiTRo8WsYAWfdDrepPYLLZVBzY3CY",
  "key47": "5jcekZUgG1P71kpotwutZ43YuNqm7WJrp87rn2kGVANzScaf6rczvpQkkJQnCbXo45L5gh4BeBjgHvCbLrrDLeRc",
  "key48": "wseXnE9mSBRcVTnB86nXZuRRYu6L5fV8MUCFwrPnJVSPJRy85CbSyu7aEWABWTTnXsWUMp5J9d33nHGPVrRvb6V"
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
