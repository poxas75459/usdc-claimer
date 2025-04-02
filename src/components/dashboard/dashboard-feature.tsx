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
    "5XM4scbR2G4MBsYrBVgVr2ojjr7x5QxqyDUBCaMUd5sWp2J8fk9nXY2HkR7yB5YrdyJQKP8Bjqw7Gz4aWqEvHgMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a3NVir8Abh2ts3eyampCNt7sSe2JspqAYizUhzvDPzrsyWvz18hD9nhUiagtdCTWsckVcjA5yRKaAEQ4MweieVs",
  "key1": "5i1JkgK34DbyaGUoAK78QwZEkRPCsUdjpYKZ3BbgkroozhMa6MMQkcX8v9d1R1jZdgLWRFMG4VvTAmp8CnVdCXtu",
  "key2": "2MgMYaAWSuprX7WVdoLF4mPttiifbo4ZYteJ6mNEKK5hqL6cCgKtrtSN9Q9qMnCzuYd1SxiLvTJzENEzkwaaUKFS",
  "key3": "2wKcH7Qb98Y71Y3hRmsdZNDx8rj4HMqT1zEmVwBxR6R3bUoQt6bfGUANs4UrFJ7EkPYo9PtvakX8Mrkfu5JXezK1",
  "key4": "UzmcZhnPK8efx7pSDcUzssUFcpiXezSY1uRzTLqWRxGneq7BGBAJKTpAvNTfcSt9a9n3TiDC84DLLj6sjqQZ6BV",
  "key5": "4uH1WVM5tBgYuub6q1h6azyia6YWF2WkCpUiQmLyEtr28HWVtqq7hD8H64eEkYExHXWN9NzD4Jrx9Lwi1LzePwxn",
  "key6": "4KsW2DsmaoHU8w2Jyci9gvcaCBW8CkLy5Gj7SpRA8ohnFNce7fXiySRxRb4BzLyYCNNPcUZTVzALUQ8E9x5vrT5w",
  "key7": "5Hs2or8hzwtvaRYqLbyrABURmg6jgAkZsemPjx9KfNYhTaK1mj8h9eqvFBLnx95j3rEPJGAsETbBQpuoGWqGv3us",
  "key8": "45MF5Qu4TE1hEsvKpTYtMt8ibDjNqimdzU78yN7LeSwqEZRuSCuw1Yh24UzNZUk3kmY21xWBPquUe4vwgd5XCuvi",
  "key9": "2AwKJpXHFH3KybszRrJTV7wQtQWyo4Q7434UdrgvyQQAuNR9rHfbhJYzahGGJaytcvZwDArr4QV5iWNz3YjcGLFg",
  "key10": "4GDHxLoQN4ftPBGLEu4md8wZbG4hZZyijb6YbqVahfBFuDZSAYubWJw8NNtpHgAjmp9uttPA5AVNi5wc7YjhAaYJ",
  "key11": "soTy1kxyhK29VmMX9YW5hnvUD1uYAjFWrvQgabLJEjTWpkefW27ycEPEwcD4DjXkxh73pemR61vj2iPkJkVeNFd",
  "key12": "3uq6ZbmhK2yXUMW85Ld4JCxd5Yw67rcrCJ8QgFB1KXPnjJmzMQuY5gJAC3u49jeHrZ4ffQ5io1SXDpPgeL2khBgc",
  "key13": "zEU23oSTF8Ubw3zvejWCDkuNCTVLiPB33aTf3xABnKq9Ze8r9Sf8Ad46spyC9AkaevDeTCbdvV2huHUYomZyoyJ",
  "key14": "3SbvgwYveUQtnNfKeoamcE7m38Wsc9soNvKdSfHpTfgud4Ddaf4gx5iGoEEDgwRc1dfkW28WyPL6YxApzRfTT8KN",
  "key15": "3nKEhQbvGzQA2rbzcK8BrN1Lq3qYTysft1ct4RnPGMTucgbyhcCV3J14xWBzsN5m6DoxdCebpy8xakQeTZj5cCZ5",
  "key16": "4a8m2Z9mb39LU75mmRZdHCtx5wXLtyvWvTGrn37qXbo6x2ctgDRP1aXWk6a2cjYwbxfjNKiRYTChsocsTkVufkp8",
  "key17": "u1L2Lctd6cBNFtgEemxbSXLkXaZxdjSJQzJyiv9zZNsacYTt7Xn7VPhynnakSdFoWVu5zG7F95mHfefN8G2yUWu",
  "key18": "5FoCjuD76Y4PhxMc7Bdh9CpiG4szrmV28pp9YNr7C4cJwtSxyzCeC7pKQaMJHbReTGQtKvdchaxx2JYViuCEjr7",
  "key19": "61kuygHikxBsoy1MrG4hjrAFTwf7pkvo56mCWr2y4R1ry6oykQuY9vmf9GYEzJeUiECkgWBrxqqSVXRzq7moJNVC",
  "key20": "3fwpyDyAEUxEsfTY8wYkBuKDg36DataY1VcCQnDrvvawtMeCLXvC8eA5vAyHPGpavfXoFeLpPiyuYxkvpzCgYcJV",
  "key21": "49QeQKYw8pXKhzqAtLUEXz8um6hncEVcMxAbs4YdmbYwPsre26iPPDxeLRdda88APYHojFVtuDSrcPa1ufBirLFw",
  "key22": "2dZz5ZMVobNjMqQ4HLwr1PJ8hqvKo2EwgmpidcdT1MdwL5uTUkrfbT77TiLtU2VvbPwkiPqQcSDpzjBLPT9x9jV3",
  "key23": "5e47m35AaKW1b1fozRGr53QELqi98FTRE7cASxpXHJkeGmYRPnX9zhCvx9USig7hQ5c4Dc8rKNQxqueCpDgeNdb",
  "key24": "2JuKTmM51kEkLm7hJPPgBkvyRb7iV4WzX45zCcY2VzxYmkAKUoPK9tJ41PSEs1gUfDxe2tKhjF8JcCQ6Me42n9WN",
  "key25": "2P3d3sYiaxDYdLWq4SFuGGfZRq3GowXjgMYgwhDve7TiS39pQLa6NVPkwmFWLmSwMp3adueZm1utugznQiizCvMp",
  "key26": "4w2mXqpxj3sCFcBdGsA4uPrA69Vo9AknM7qVEMBmgqtfbS2mVzK1Dq7UmU33TmmwQDwYTxN4Yrq7rwCCyMYCUSaA",
  "key27": "5LkPRY2bvsgfWXwrVLiG8XduQYRrDVDjG4f5AfsPGYcN8L2SkaonydyNXjAkqvzs9LuSunzTvJySxXWJJRxYaLCV",
  "key28": "BKWz94H6a7TtqpCHnG3ntYdDcXoe3gY2xUinGKvBhA9UvGjjpmCCoLFds4FWXUqRjx7UafQwHWw1Jde9FTe5L9Y",
  "key29": "3ssp6JHWme96JC2jnxGhLSUFS3CCg1pmPwmzJ3E7QJwZf47EwyfHeFrPcWor4NqwgmU1YMZ5v7ip4KC6ebSZMa9p",
  "key30": "294tgJ6CLse9JJu3mhxGRGKjUDTUModkLxhGfEZNzsw9JDzCe6fh1CYusG76Ut54pUf6PFoVqAC6eastaSWq7wRY",
  "key31": "5aByHnFmxLfrPMSGufnFsJBqRCbb9gRXA97fFPM7ucVq762defSBJ7kynkgtc2MFLJdLg5tfY7nFQry7ccSnKdYH",
  "key32": "2jeUqszLkpMB5Time46TzXa9UsXvR25rfma55nAEL3HN3ja8NvNtVDv6tkiE5s8vNhXHhffsXDkAE34LnHn9xeff",
  "key33": "33GhWN9yBDBNAhwsWp4QGnWa4vhKQq9hGJZT3AJtDa5DTWQpGGCTPcEDqJ9VgzNpSZJygcSps8ZzuLXGeaTARe21",
  "key34": "2nEXj5fiqojghRRPdtXgxZuQSwDvoxt8Y99SK98vPWie9nhwXEPrQe2SV5giwNvBfG1BAFVErAbsWdPg9k8765M3",
  "key35": "4Atnf28cvWiZXDmgPMmExLjzsGxpDYiefSHiC222udNVDgkS8bjcNuUE3FajM1jkstAmEn8JAUZg9E9ry4Tz4tYv",
  "key36": "2rMnAqeo4vAQMVdPVAXSA8QFt4nMbpvdLnGSRHWthZEG9DgUxUnKj4ZtUeGeZ6GsF8qsTPHqfDgKf4vKJBCFBYJN",
  "key37": "3pZ5nsCkLz52UrD4igczS8GPshRbyURTNcR2eGtCk6tVETk2TNzdaRUxmATz5HnbCBCoReDBzdN3frL4TyWYUie",
  "key38": "2b5vyiuGGfEwCJ8sLZ1wfjGvEeT7EVnEt3q2GEoHefQBMULbm4tmud6FeaigtC6LxyUuMgguFpvHEH9NHE217sRN",
  "key39": "cSqPAa53WNxi5BUZjXtz4pdniqqwmfomiGc7KYeSPcVJBq49xWAhVUvqt7Bm3BkhuJb3MmLdx2U5x4HPNN7Lt2a",
  "key40": "5vYeN7eUMDvd4EZMDkyuYhejv1K8B44m34tH6ChBfxw3seNcUeaY4HCmD57QQ4mr4mdxUaC7hXdZeLt1xJjCWJ5K",
  "key41": "2iroa7s5EKxpXzxTBAY12MCrutZp7svvAozbDbZ3h7AhpM19tFqfUoChwDQLE5dcK3fU7goQ6UMc6AUwBXM4yWJD",
  "key42": "3YVq1bixjdBKz1ezRN4ZNsH6JqXidEBpU66EfCZ7VLn8pppq273rbNsaRJ4wgYkuqLXCLLdiwxkH7APgAZfTUw9G",
  "key43": "3iU27xuvQk1NWS7h9dwHcy5Xyw1HWjDaC7r1vhnRvCh78TCMHgQNwUiBo2moLZVmddDSpTcyXRX6YcSnp9B9XDDP",
  "key44": "2uAhfpyCRxCigNMbaVmbFyxsMDkGRwZQm7bJr8XnGwJPiZ9cQiTxJpK7zkK6TUZwLEg3FVKDJFZeX9DdL1E6UYbJ",
  "key45": "Lizy1uFkVPBJ5koB6tasyNNMoTSbP1eEqR4orPDwfpD65hFEw4X5TegCjBGAfFv4hVijRACqCCENyAsFPtWb4uX",
  "key46": "41YQRT6cRN5EHAJfrUDHdP2yUHFEDNQgE4RHbM9u3KrjedGiLspMms37gzxvenJ1PTjodfDE9JPBwB9wpLC6oHNX"
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
