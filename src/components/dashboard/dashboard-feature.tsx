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
    "4UQSKtmzeADnqJdERPwup9Vw5FsEaqFbAmNziB9EbUUHHqfpnajGqMjeQ9pZnCwHmm8a7omkhjRALwGCpjijFoAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66u2WK7o7hUcsdfTXr8e23yJ6Wf4yZ1y4AN7zQCrzjkd1jkmNeY7Tp6GxAWg7Bwj2CsLJJUVmL5fMaArBynrXyHZ",
  "key1": "3kvKQ9JMHjBQfhivkZfbUrbroDwYdcZNsf35gb33B88FhqYyTH7LzFARg1TP81MaaPmt9t3TsRtSXVTQ1Vy1ez4h",
  "key2": "tMt4kMKAndXSTNyJJX1nC8814FBjhkdU2yf7ZESW6qUdy5oAyJ6LpNqWdkjYc23DcpVn3kKXkg1DrMoEPAL3w5v",
  "key3": "241Z3uDseZWK61ooz34cLUfTjiDK18CtMRS8sg3d611y1tAkLvuC9qn4cAmNK6YvRTGpKs3WPnKjpdnrq5PHRZNt",
  "key4": "5EzmAobtmbKYdWU8bLLEB1p9nmSz4z3tLQSyWNh2wgAkocfzAv4UY2Z7wMYqWfRACbmVKUBd42Ks43ZJrWSNHK79",
  "key5": "3fJvtSf4gFksVPstfYdQmdsfJR32FWVbNJtW9fsH8qmbaR42TREaYiMZde1kMck5MF4AXNkvomfoPAKewcR6B9D4",
  "key6": "2qeT7JL3tBAtyJazgryqG2DvaTo49ysZwiR47ieji57FLAPRfrjrR85hzUeDhGL4iJDQydA9xhrJbrDySwRWFXn6",
  "key7": "27ETjTEmHQu8WdAKf9TEgYLAppE7vr3JpXKm4C3kCFx65rVFzeho9T31C3n8dZwuB3fkq2ie7XriRouMi2YZsUr1",
  "key8": "4iRCpXxeGrca3Pkzg54U3sREu9qJ66FThFKU6WWo8bYG7z6fraNLQDFQUza3q8DfczEEm4Wtw6pv6X933tGKxFdZ",
  "key9": "oduj4qRMGkfk6RBF1GG6DtxTQkQWoQ7aVE5PymsCa1VonSVEds5Scr1GrZE83PYfNv3fGBmBFRNXz1spYAd7bMd",
  "key10": "3Rtc655JBzoP719dSDWkVWxCgJnF7sEtFELgHTEG2VvvxdvbpXntFYz84V5qg2Vi114e5StBH4DvbKTgQ65XxBvN",
  "key11": "2HnH78E9qsPW42pRpdX7t4ABRSPSnS65dLa1qFd2tRjXJ7x78AWrVdP4tfm3HHraDcPkQmVZwDuZF4d1qzJqGnQQ",
  "key12": "3AdDHWHBq4zwKEc7Wo11j4tyjXGEcow3MUq6qA6V9amGpim3wmeGbZ8GLEsdX4jcXM4hzLbg3QBg6qe4cQADtgeY",
  "key13": "5XaucRUeND91tzKgxMPwm2hE5HnYif1vR6ouvrw25V8mtxprDfYqK3XiKHW7Y2sdQAmwJc1hzRsscQwN6JRgERKP",
  "key14": "2uJjj3cQyb9nyuMz4STW7Mb3ojJKQ1CMtSX3nybyTeGfLBPzNQdYTaBWPn6JXiV14Wup77pBESf9nBF4XZwS543W",
  "key15": "4qNAMGmYoyGutkWqVzRFeCgjWKzzJtWVpWfwV5bivd69Rnurf2dsMqgrnWhf2dyDaVJ5kmGXbEkrN5Wi4sma9u1F",
  "key16": "hCGndoQpjrt2euZBXLjZenfWw3FbuN2XUTi7dVAx3255TeK5hdGfHNWEXwe9Hc593fEHHcBf7xg4gnZ56QVaVJy",
  "key17": "5uasUFCgvBqbj8YoqWTxmi5uTRAFzu4MSKosDLFhjx3QUD1byVxS3TgAK6KnPKSYhd8GfY8SxNHWM1yeubg119zc",
  "key18": "NmrA5md1HnkYc6WFX4WSnZHPnqCC5Sc2Upf4FCeaVX5Dg5hNY1uRfcasearAu8tKFNNN3eDERPp9xTWdxuZunkm",
  "key19": "RTC4DKU8Dny6UxpNjxUBNphsL8yQWAj2mepMTWx6vkZLNWkbqz1rDKKbFY8aWwRirYXVQ4AH6KgK57nxWMETBcp",
  "key20": "28kKgFxFqrxZUBGkaHw3RBajNVTqnruFsu4svwBtZCevJGUgJ35zYs3VCW51gbRrno4x8vsZrfeacc9KyNT3PMxv",
  "key21": "2Y5xo3i9qw2BG8VYRubfp4QNb7YExaBB18HkTzE7gYZxKWEKXPkskpLW3ST3e1mNmTxqbTjDj6aq9zQY6QGpyMWo",
  "key22": "dj6BvzFRgeBQBUc18GbA4kpDYxExEaMMurTjVpzGKsMcCUf5EZxNagLRn5ojc6NouomEobSzYW6pVuq34qhhTEa",
  "key23": "3vQZtr87s2jXc56iaoxeZWPfEtKWi1271gPhWMXEAP5fyFg8fAwgHz7t2T6mxpqqfFfmUwbPE4nHs8oCsustNUzB",
  "key24": "5kN7tWmcnw7pp6f1fuvzYP6EUtf5gumXGHYxri5G2HEroQaHNFfU4E9tr3oU2J4AxTB6EC7jAM87TKeYDtaaf9Tv",
  "key25": "5Zk8vccwssZUF4T6AfdPwpPFy7FUF4782DKY7qsAgMJfxdSfm6tZFQuhhYipHnJZPv37McJWVUHz7sZvN4kiZv71",
  "key26": "5eDp7hWDJq4vXFHyma4V9QJQrHzGhtcyWPVFzkkWjvCiwsiDavzuSpAZ3rSVKgUbQehjnBhyyivGf7MurjPcmMFJ",
  "key27": "3je7ayiRiuqDuHjGyXyEkozK2VH3Z5aC75vDCnUq26uEC1aApEWqpJKadLVW8L8fM2oDBpmaGoGRD1T5WksebnLD",
  "key28": "4nEGNuqzJ338TJm8HVW221p1wTwMddfHf9dehshTyX2QNTDK6q3mC9x7FpGwgDaUjjL4R9Na8fkpHid2MJpXhVQy",
  "key29": "4XPWQJoaLs2apghJV5DcjipcAehmLrsW8MNftm9g3fxn2Z4bdeqAGMEmXhrPsmVsh4MmcqSerbGMuDPukc8VYCrj",
  "key30": "2aTXaFvmxpW1MxAbgpXfqaAc3dwL6r3BRwTuRgqhXLEybv7rRg8a2SHhgvmDJMy47ZWPCBEG6cV2xZCVZ83FAcpz",
  "key31": "zaM548K1zGZ758eaCsRjZb87QHyLNH1UrerHgr2vCZBDH9BMHg4UDPpXwjCdevpAVx4a7C76D5UfpuVPE8B1ikx",
  "key32": "3WRUkJUb8hXXj9R2WkPD84kkJxUDXGhM7bCT3pRpDRBBRmKbRTFU85CFiBchYbQQqcjGpKwRBWkra2fAnhfYy2zi",
  "key33": "2vhNBzd7nvTML1X3Y5SaeiBtSFN885nmn6wtw628spy42vDKPVL1vFaEhHtfWkcoUgxfvP5i6YWcXVoEFS1TcS1J",
  "key34": "426qdiF6Tr3Lony1f9jyKpT8EZiHtEYyVdPcDy1G5wh6FouaXHohZ7wC8S1StscCK6HH6ErhUPxff1umKxHwxdcX",
  "key35": "BxZB951sQ2pgjwjB4wdZw6EhAZSkMiLsfS2et9emqKfp9ExB1wXtgkguh7HK988jGk4Y42hGaNVvAXzHywmXWYa",
  "key36": "5dk99WXoY5v2MZtkfrcbVuxyZY7de972bc7SKE8BuS2GUwzXvaeLUaRXHS5mG5j2RKRYCZ8SfPgYSBsBEHsUGr3d",
  "key37": "5z2Ka6jC5SWDDnpsKwRe9XtzoWUurm6u6gh6NF51U5AKFHQeppgoBYz1Po6JVfggdhR3TKUwybc3UYAwsPHoDuUm",
  "key38": "Go4ytWinCqvnasccCu2mKTNJAfLMcrHuJP6Nt3Lu95bzAr19DPv3K7YDRJ7Ey9faD7V8niyKX3NBrGBsLYwy5bY",
  "key39": "vyGPXjJQNLPGH9ztM9TMjHwNcTt3YcGVWojrPUg4CGsARpLRTWm35HqqTVpLcU571p3xjdUrFYKp4RVf5B3GPX4",
  "key40": "5qevDkPT2my4bNNtw9e6pUeJowUAYPtA3d3iiQtKBbjyYxWbSKY4gFyaiexWKxUkeRotmYE2EbxXUCQ8Yk8ZYMg3",
  "key41": "GwvB6nGkk1G4GY5YYAx7gwAnp8QxmzRUE3PyNEFghBad15J1Z9CwfcfpPTT2ah254KW3CMUpn3ty7wujXhUh7AH",
  "key42": "4bKk2KNmrwCNcN2NzpegS8CWqNJ6ZZm7u2M3Cx9fB4xXp1xt2qmZ8jyscBvd82DxFJHJk6zgxqVKr8vaZ5bMNSw2",
  "key43": "5cGKanykU5pYVEJpbdvmvn9YpKAgjXiBMmPp632a4R12bE2aFPshaghuySkRUz7QrzMo2YFqYfdVWLn4DpPdHZAA",
  "key44": "3yDN7QpC9ZWDPCLDUdjHm5Vtnp5FbQYop5KoCN1uYwbgkx64zq4tHrgWT93Pgf1yshCDMZpYaUZYJL6PcJtzGWDy",
  "key45": "sBd6mjKYsUoiaqrdJtn3y8BTTQFHRYFnMAhJX88VGak5k6GSg5Pbm6tQruDyMBHj3KCxWCKD26frzDA2KvTcP7G"
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
