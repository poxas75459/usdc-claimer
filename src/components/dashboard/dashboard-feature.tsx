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
    "54LA4EUWLmjwgFdkt88pSFCgbHRAnujXGJKa4GkUrtAXsqn1aefAaUWWwLH4n4LfyP9q6CSRc393hPz4YmrjiQvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Qk7x4y99DFc8JX6ozzXZJirHoNM4GhavJJ7PKNU9pGx9VyM4Tw7sxJ6UWJAYdqBgo3sNzzRVD6p5hw4WdcktUZ",
  "key1": "RcLQDDD75QRsC2jmBgCHpQu27PdYSyAXeUaKLjCpTzC4EtfEa15SVeY3qMPv5spstNsvKDgHDuSeMyCkXypz3ka",
  "key2": "5nJA3vzqxepZzz6xgPvVWToLgwhczKWaU1u99EKe43fJMyJmrXUtj5BUTHoBonYM1WpKYDgw91Q8wdM9pmvpSrvS",
  "key3": "5C3D7iDyzY5b46Jj6niiNw3mZqyAU8KgTXpWz1cfz6Rbk7DcQUwgrGHBPkWknHaWPo25HQFvwUDuS22q2X4QZeLN",
  "key4": "5FYVcfCCLnDMWosyfLBh7UA2kkN3KdeM1XK4ZZkHTNJdBbHovj4mCmZcHd78pcQ4ME2LCCwoyWoGfVPSvL9FyjUv",
  "key5": "4LJnRzYNcGBqmJTgUJQAgYeTtQQudFPRoVr1q4X9aiBh6RdvjRX3cVFj5L1a6rL3FwxrL7Smrqjs3TzEtkYnawi2",
  "key6": "hjrwZvyVUfpMJc6fy4V9ShTppt9WBxvjZsk9XbZfY7PBkUp4M4SyR4GaUkgHrfNqUnkGap9HYQX8a8XU3Tag1aB",
  "key7": "1bhpPCcvyqhkfs5zXGdh1fbWLeN82UG23rApaEjYmuXLmgc2QSiBS4AeovQHhyKzVzDuBxXLvHb45ZLgmWLLybz",
  "key8": "4Wq5pG2wG1MppW9aTUpFgiYhZfe2uKDTjjfj4YZKEzL3agTvZ6CBmfYZ4Nb6fYBYMvUq2nMYLgFFtBfAQbvYfBBg",
  "key9": "2o81Z6dBYN4i7HA3FS754dRFmUWVL2YFBWe6pvvcirVKESJXmx1uuk4xaP4PVqny7kfZyo9cdwHv61SvsBh3zhQt",
  "key10": "5FHpWhWaDZtTiGGiHVeS5FcjjuEGKXKhj859oFd48u3WsevRJbaoLPcrAYCNYrvxAkRzqYrLXvjdqihTPQ9xjaGS",
  "key11": "3FvYVcdWnnvqPVYnTTG64zBcApMM91bCYV94YGE8myMe126LYgBDaRQHFYyWzBBGPUTw11PR3FFEGZg4gEyLHCeb",
  "key12": "uhpaoc6HHuNLyTx1zzcL5ciiomVudRCo8fRGe7ZnozxJQCo538oegGdQyMfq797udsyS95L9Z1Cu45wfr1PA4w2",
  "key13": "Cn6HFKyWxV4tRVkwB6gJQtfb7a4nxAfq8dnt6gwzheXPjY6SNEccHUxvRBix6vvSwao2hRSRdW36PSz4Jomy8qK",
  "key14": "3oQF3mGpvx9xcLZhSQEVUBSemJaUZeKmZv4isd5L8zuTA1JJY2bb9hcYepLpCc75ak3JteFVFbu5XEFHgJxDkKEp",
  "key15": "3ukiHYgYzrkYyjGjxfMrwL8hPRL7atAamoMDZZ7R6dXRe4XnSKMWo6YbESoiuvynu8SmMGBci2ZKKTbpPm6tAF1F",
  "key16": "2Pfc5ao3bizqn1oZHpgRkGqqzQ7G3fiN8aFmmgkHSd5wDMjF2pETAb2zyLHr5XwAtfvSML7hqN9JxgqZbNfjn7DN",
  "key17": "24KisEpSA1YwmoTgSRYfvjf8nGRbNPJ2QCJvhpuGUUecsQTccgRuPACxau6Um7evSXWFwCVK11xEUXGQYf8Z3Vqm",
  "key18": "62va4ao6Y8gpZuREzKR8QgGMYuXGfMK8bBUeTmM1nGktCELKmTbXG9VNWKoW1seC4x3JCcurX3qpre4WD1Ct2U31",
  "key19": "3xNiu9tDsEMPcWEUG8RSrTE1qxoppxNBze6ARxdMqNANENnfsvM7YXJBvbBrKyXkPyNANtzK4dmSbW81bbE3jbvu",
  "key20": "2JYR3DhiJJe1Q4exbYr8YuTWqkfaYMC2EpWQsvBJiVzsNo1xL1Eh7xHnPUrRHohjcaxvm7LvsoiEmHhU7tU8xiQW",
  "key21": "63qmrjbZQysWZpDt3Rk6WnYXc4D1ZyNToQbsYWengAXuc86nhUBjBVv1bXJwiC9PA4vAJKPrwUmx24ksbxFao6fV",
  "key22": "4857jGNZv5q7T56eKiuPL6FKTSxx1rHBAoR8oqygJh9T1SMwZQZGbBFHb6sRVv5Vg6jFnakK3fwXmfcgwqQer4zN",
  "key23": "GaAbMnz3UJEzRPZy77sVRJ3P78aaY2Z4qLFpJXf1kjj58xc4SLs8ajREspPc62YkN1UUKk68Nqh4J4MQBKAgQCe",
  "key24": "2MSG9BCNLb3faBHyWeZMPbgpi4kp17DoTp9gD3yVJ6feqXfGjwiwQdbP8AwHBfekfN8U1Us9SgiwtfAermGQQzPF",
  "key25": "oTfrWGky68LCB3D8dBu97ua8c1CLwEiHQLJKfGh5gY4LHMYibjPPJS1qSrbyp1ZtLwRdLzC2CwPRRQoJp7c9Dpv",
  "key26": "2L4oYMnsBB7dFy791197R7qNBDfqoAQAgoJFKpvoM5zsxUDVpbntFWR7XjxNtrU7Foe17skA5bA2SwWNNyu9CBU1",
  "key27": "4u5P7B8gb4keArZgrczVzYckXYAWuHFCcZPtkMzaVwaPGfSeoxYVudSs1nohqgQ6qFyMSmqMo24K5k4nswLnycK9",
  "key28": "4xaJczECFPgtMujxRCGrGEW3qBARxsGPzJvT7SsH3NLTWeJ9DbhChCdEoH3Fz6GUaxWZrtyvh14ywP5gdBofAmGH",
  "key29": "2KUYviZKVr8Fn2wHL9z53JyiDDwu6Xs4JZWr9KG2j5Qi4GMJP66gA5ojeA9c5tsRQMPb5FjMP2yZiyabDSupKtEv",
  "key30": "5StKkSWA5Gzy6HK4VXVbTyYS8j9TBuiZMgLFRUZ4unZzJ8KdSVsZ7BRF2W45wECDhQ53Y6H7Fo4iQhaa956hoLZr",
  "key31": "4afjpB6TVRi4Z8fEx3fwPUUoLPgGjNT4nabAHWQJ8Py6eQqvz1ykksW3jummyk4bqVuzFuBmAdkUfEtxXUQipf4j",
  "key32": "4jjXKyzZsBm1UiqBAXHLiRHGHxeLJ8MVmbnYrzTby9R65s9KGGoak3tTm6RyUBPWi9ocCNnfuMj5vbcSPdeeYkzg",
  "key33": "5DW9W3gSTLPhKoPfp49C7gnGwRqbG5K2QiHzBqDAfjo9XkeaSHWqADZ2r3PUwWrxQ8s37TCsLVqbVriS5HGYFD1T",
  "key34": "5Lq5ruVbkKi3rhDnt9fYznQrLFDXtZCAS8ETAtfBUHx6iaCVJR7sahbfkgg6CvWv6FC2TJFu9wDdLyqT5WmkKSTm",
  "key35": "neBwP2TjkXzQgBmgn8DmCjHDPJBJdbGdX9n5Gw9826hzs9gLiCzUTSBsuocR7exqYJTF7BUidkNKendDQ1fmsEV",
  "key36": "VhNW8au7Bbv5UeZuCphiHQqUTqWTkBzR8umbF74gDQR3EZhUpWb74mj4NuqgzfSZU5sChVzGU2wcscL6o9J49LH",
  "key37": "RPTNMSgCet2Ve3KkKPf4DnZ3CiEmcQjLs3DYK7r6PBhnwJvEJtdvDJBu2B3UHrKaKcqLgmrZaxnXh4HjtF7UjZ8",
  "key38": "SfHLqgTkTLoSQcVpeG6b24E2kkbiH6ea9sBbtToqFh6Xsa51qW2Xent43gp7xwkt7vaCG12txJP3jNTN9iUcUss",
  "key39": "n5DenTX8bv42cH9aUtMxLX61Lq6rU9L4g8idDGvFynPrBCLfFzfnMo57UABu5Zv5nkQs7PyRDWmDXwVgkDdVERV",
  "key40": "2mAgzpWm9FsDhybxVea57jcWYdPwwvqgT5rin7ytBK42TGq5yMUL3GzJxDiUyiiiC64GiYCPHmxizoqJsT8z5gjT",
  "key41": "5aTxF32tETsbp5zJZPhpokdHwVvsn6jEhXeGns1MK4MNsnuoZbfPyXiCPBucJdnE4drUyzqQRYQh9bTCkStQq6rZ",
  "key42": "3PbqVZgjWcpKebnxy1RTyq3Ac6z2z2bBuSdHb4ivQQrmiibWmSbLHC7zXJ8FG43ocX27G7fC9zZwKqbWupaLzBPX",
  "key43": "SuVS1kRerQLZQRhXEP3fnz7DHfkmWpUSgpk2wKyqG4aeYcyM6SoffXSygZM62GooBS8KHd5isVBqacH9DHPPDHR",
  "key44": "2oCgW7eWRasf9iwczXoN3Nk9H1YW5nGN1Pi3iUKczjwV9tuc2ebCoK6kLf3s3GikizqfRK4VKRrxiNrtuDZZCcLW",
  "key45": "HtHpJCPiWnEv6FFJ5kV9YDtWdSKz5sFspCGgAS7bTkPrpNU11Lj4mqby3ozQ99EfgekG9xPes7E1LSB2gDMoUmU",
  "key46": "4UCRhtZC7ekw8AQjLDbkqphw5UhyqtPSiZczxLFXNzU53zXpap6MArKoPksBwHKMtGujJofiSFiajuu872pVvtc6",
  "key47": "67UiFGJE4gYQqS87BTLvyG3rPnbCKJQe3taaHoHYHvqY7R7YsGhWJ8eM5Uw6WngjMUJJC9a3YWPbmczCGp5bhfw"
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
