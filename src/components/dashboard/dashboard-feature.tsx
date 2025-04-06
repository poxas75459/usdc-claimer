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
    "5Eqd8YdziCvYj84hHnxBkurEa3GsRpCgGdJZeodZ39NW6uVJuAKaMMURMMMgriWmhW8Fosmh6RwG4qSHCXKquB5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ScYb3M8wy6TrHxbLR9gTU6DHzwL7kUvayojassad2enxZcmXtYYkaSwSVxxMeduAGHskG5SK9PWkEVXTuH2k2q7",
  "key1": "2Y3xRYwRhWsvBLX4Bw3bPryBFUDm9m9NKzpQn6bcegT14EVXPDcqrqamZNt4ZFVYRBfV3FDRbPoNyQrUzMEX7nX6",
  "key2": "4sjgUtU6dMp9URsdDbsgcGsnrPJ6EWFPoDabhY9ctnHpBxwGe1MBNM5KLRmdsmuDCi8K3qFCaKWCs6g22VTs5DZj",
  "key3": "2AaRb7ecoK7eHy1eTtPogys4E1Son1Gizzb7mJvkKpYUDZEfFM2Tu5q7LDGDs92NvhMFeCKJDx2EaeZUiXySP52B",
  "key4": "4aUuZD16pUU9PADYbmMDQ8UCxoR4t2Dut6J1pwh3nhSoWmw7A782pJT7Jouc9ikpUe26HLn9AQsCneHuoA73ANV6",
  "key5": "4MNZDRh1p1ykBVMzvUU6e6cCe5M54ZrLoJW2YWj5Lo6m5THgPjMogfUqx2ssbD93F6QrEJEYhfiQupbQ7jtYCDry",
  "key6": "42uLiDrrdt5y3tJGT44U8Wa1EK1wk4HScTUfvX8LGAVVhA2eYDmmo8inkZLFboQ4DJUnv6M8mNnJXwTXdBAquNjb",
  "key7": "2qCstUL7jKVbaokzujyuCp3QnUGuS6uJPRnQk9PSadRyYXWrL1usbkoCGmLDa2HpJPxkbfRMcCNMYFb2gzWTdmVH",
  "key8": "4BcbxADYsiMZuPBBWZrMpmBjYrUZNVasx5aLzbUQJCpTSyK4eaY1DK5xkdQVbMN5katXK4dCbSzBGvZuvQtrD7rE",
  "key9": "45z1d1kipTCjpH3RDjM6VsC4zfEUjk2DevSdxaG7iG5CPcwgr8dBSno6Z6JGSvnz4PEPTktcbGxQeboSYG9CPLr5",
  "key10": "5FsSYPW2PwTaWvgvbGuyA63quLCoqEYxvrPanqYXGbZQE5FxatfcVVirPmQs8juGQd9MR6zjpBZo3gfdbLsXxdyE",
  "key11": "3DKUnz82XTje3usZ4eHiiPDheSqada1hNLkgBZxUhVdNYVXBTKLamFTQSghBJkQjJYxD6JDXxuR5667pegQPwVt9",
  "key12": "4qjQ5VFUdWV3kuEQnogQByzHRifqz57pm3VoMu9sKCfEenAnPxiXXUUKSaTA6T2HdyJcXA7bnoAeYTX3izAd3L53",
  "key13": "5UP3guWmkm6VUF2pSr5ep1skrHx1GpNir1ehB7azjR7vw1QDPEi6LMVuMrdsxHf5PKx8UQ8AwdpA1AG34DDGDVD8",
  "key14": "2Xz7Q4JrxLbNyAc35Qmx6ZHpF79NCjnXSg6tKRkiS3bsgihre68mmRp5wuv2bHEi7TzQrLtWof21cLAsnBVXAG5S",
  "key15": "64XRERm8bw5ZQaAsR9GuBomV2NUYeW1Dgho1UB4oSHd1SXRJ32Khmhp35gCryTM3mS6pZNW9zRYHRVzNZR6UGoD7",
  "key16": "m2mC92wUzGk8gNr4aqNjeuoc1n8wWWhikbF9Nf9pxUTeCzeAd7S73WP3JTiNnmxQyW3PDZK8ZxzRBMJtxQVPu84",
  "key17": "3xZeEEfnSeU7PTj4onqqDr5Ym4An6Dwz7KbSyqEeezCHYp8QvQYYERnAmJEb6hHDeFUD5iNso8hEpDu7diLfA1gD",
  "key18": "5vsjv2QFC6xFKVCuoPdDP4y3bbZz2SBqbgzG1KtQC6HzWvi4ve4qLKYm9ALefF4VypB9zvV2g6EBnHwo8igBQ14c",
  "key19": "3nTtF9iBdJSmT5iUWtjWrRm7xcXw7YbE5zCdHqgUE4o1KgLxHQCrJBAv146qUtaK3ZNCkgjWWseLx8sY2hR9X4ra",
  "key20": "Kkxd5pLDLctDmJsWrAQkkGR3uJMTz2JexJ7QA7S3Qj3YkiorpjxHQYvSD7xpz6WbtqXRke1hEp9usMTmWySnQ1G",
  "key21": "5dSafjujLUjEtrLqnPfcjaQGhbMoUxmS8tq4wS2DfnKenGVcu1xSqc7eAQU178PEH6Ah3zZqd9qGUFwG68qpAXX6",
  "key22": "jLay4hxEqxY4vEZQm3S7TToNuxswGxvpicW5uwEbTy6RQLJrmM2wk4Z1erVZQceL7ELgZsV63BFXPxE1CeTNCbE",
  "key23": "5p64pLss81kAdCVigLnJw74CkhfYCjsLzsfqysa2p7mpqLxN9BmbDJfh5uUTjZESyqA6xDoHENtP77vzneKjqHZy",
  "key24": "4B22yZG2S712RNSwE6ZvA5X4g7N9i63aD8jEMygRn8hCVG3YndfSwqZ1cPcrZz361ouTPxkcwuuADFo5y5LWnP2V",
  "key25": "2tLWEWfVf3AUbkNcQ4h9sBdPXPmJ3NoLd8HKnaXympKNyWLt6MHRzG9pxWrzHapvCWCkWyxrDXF1ga34UW8tjnjc",
  "key26": "3zhCyYGvYwd4YHbVYUEmLY5CX2h6ZWUPNSJm5WGKWsRUfRu72PYshvpVgSwfqpYhsMBi5KxgHVrjrPr8nREkLBUZ",
  "key27": "2EjHfFNUfUKMy4KoSFdXDfjX1j8Fhyhx2HBQH5JchpZNRR1KfZuCmhj1UVnq2v7hVCgvyR2bMwSCmpjtnRUo3Gec",
  "key28": "4Xn5bhnjhavi5TS3fU5nxQxBPayrDZo7igS84Cb4ZhPmFnPsAb7Zyuj921t1zNn7hkYbkc8PYk1dNYtGD3n2gxL5",
  "key29": "so56BQdsk8hqHzXL92SSJcbMmQRjYtJhmQeT915oyL3kSPnTGwMooefwLaXxuoQj1BK8pBn9J5eBPLtaEnDDTRy",
  "key30": "2iNwph3XzgZCMni3diX9B3y5m3u1wgL6qSSdfKafqxWFdhPLSs8T6wH1WafZUwUZsuDH4o15PVbbdXSRw2Gs5wJB",
  "key31": "5vJNd4xxkpW7WEReqgDnzm4FiXS8xGw9yKaSRwWsAbiZKaE6UaELutWiNutBKYBp9K4s9BtaDwujpGdtjPRWzvrz",
  "key32": "SRys79ZfrgBi375oEb7Pd7giJ3gCKaFV9Fnt4uHHAY9aRLiTzj79dvMscxedpHXFokHYF17uVPQKUrkyV6k7aDS",
  "key33": "5Z136DUYibrCDLbjAAKz8HcvFn9UjjcXd29T9szDrXMT56DnViE352ZT6UbhyBax5zmDpY4jtB3wG67qhysQ33Sd",
  "key34": "3EXqtmHYc7cLgrop6xuKc6vacDvPrhDVmUb42wfj38o5cQu4SrbBbC4Y2KSFZrdwzwrehvaVbbHPA66xCgcLTEhP",
  "key35": "3tTFAJjL8aN4FcnGcKaVb7DcmayVjUGaEdAC3NpQjTk6zDYCYPcASEsmX9BRDRV3iBx1aqvRNPKGHLj6qakaHKoH",
  "key36": "4MWE5gGUqz6cRxiFYk5hXLsoX9BsbsECDzA8PWYMRCy3V8bxrKXZeUJ8fvsnGn98KyPWQCYc4DSbzk84jXgg45nw",
  "key37": "41NArBb8kEdBMguAFQh6ncAQAKcsoZh2hKBEAbqQfu8ZfuaHdiM7BY42k7i5LeYvC2rcJgdEz7oQNzQiFavCfC6F",
  "key38": "4fiwqAb4KL46Z8Kdby7yxGoT7h9iQGzQcSbBgG1mgGPFeHJjQGgpwGzdB4DaPvDP2cmcSQ9JfRmm45MSc1q1sMXN",
  "key39": "4bPN1ApJdHf2hyZo2mdnozYwAv1fkHCY369PHbWF4LQGjzfEez7rD72jGUJc7jREWSCdnhNb5oezsW9FvkgMDuyH",
  "key40": "mYiDpWVEVvF8eg2TzpHs2Vu89e3r7mH9v9m5QNPm59eMw5qU4As6iRep7hxbUMdJKfvd5uhyw7BojduWHWHHgaA",
  "key41": "246BhN7Rj9tV7QsfA6QU6h5keYVFiJ2fsbwGBK4K2xoik75MryyZ39DHQD5H7TNjsateyL5wa4D6xrAyLMYWfb7V",
  "key42": "5HwspYzEQKjpJBNHAi5X8umkPSJXr1iQZ4CLbwKegsMGFKXntAtGGpdVvPPH2haksthzDj8TU3QCyxXNvLj78CgG",
  "key43": "J1noaYuNznibiTNze14hc7ZaoGJKLSR2gwmjpaX4ZtPq5ydxepwJoYQYS8psA6vSNfehDci1npGANKAFbGgNQS1",
  "key44": "3xfJguJVMAnTLpzUrAakmc7EGspcTxPnw5GNGUMRbtgk49hQ35JkBTcNFrRUURV47ZRab2gGS1nsftCH3vjJUCF",
  "key45": "B5DKiyeFCAzgaR8mQiEFHQtgGN3p9VPQrxa59T6j1axFyQU3mFx3wTM3qjL2i5P2AaCFWY7RsRr2k5D6NPR7yWR",
  "key46": "65PzCQyQ3CJdYHsdYifUoj9pKCkKEHxzPNsRdzyrdhgxEg9tMMpNT49w1ug9wgZbCrBqgb9zCdhLwUyXXFkQibms",
  "key47": "4my2amqSegGmB7W19Ymiy3x7iSvrT1Y5dC2XAam7xSnWNMNB3p5Hfjqap4PgcZYr6x3kb1de9DczNHK6s9bHbUgS"
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
