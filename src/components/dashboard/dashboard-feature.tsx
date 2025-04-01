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
    "4Fx7s3cGzg5X5ZB9J4ERkBKu37V5r4arkrtrVzmLFqVNPqxEyEES4F4wHroc2bEF5iM8czennmCkHWvMzmoobnEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EKhsVoADAQpJfQstzrCsnKqsCxEG5MAVbiuGJ2VDBiFZ1C7JREd6KWEZm5NC8yucxHqacBCtvaNaGtkca5bzoaC",
  "key1": "4gQ9nSpc5YnJqu1Epnr7rVoQycgh1qH43bnstoGUC2yKwF4Z5xvXzSXggADn4VboD5dPcbxwWfq6EfJ19V5sja2C",
  "key2": "5gu9AZvSUXe6suevFcCjhetHNwfMeDyZ3jRf6igTj9qffLXkQ6BGQFfrqC47ZyLhhNp31u4aetgLEe5cT5xeDUpe",
  "key3": "5h4mw5PjHx56R4ZNFQUfWUXGRVUMtnACakQLatGmP7XajR7ADeKrvTG7yLdYUvRBbdxCLWZnvCxMTiDz2pMsyU7c",
  "key4": "2rTet4dcM6x293birQdhHR3K662XB8bkpb1tDWH1Azf9NrUNjfp1JAHea9hxyo4AYUvJJn3btRau4Z5v5zuDTKEo",
  "key5": "249FzLEkEMVA4pmXTLqTDYR81s15gyPCd9xWh9XjZs7eT8xoAAMGJf7yzRFc1FdAZ5L1uaEtoCfUxGT7hcZte3uQ",
  "key6": "3BNY5BdujDRvcCMzEhitQzmbcDN7ewtSRz8q2RAUyfPLitLcgmfC1aMczaZzX1gRZNjcZqti5uyuL95J2tyScVs2",
  "key7": "2tTvrdYnLcN1vHpm4NuDpcLU1TRUG7HxhLqkFs9YcYAaU8HtJk9Fy32NxR6LmovVdgdg6aptkMpmK7cW1r8FqeA7",
  "key8": "3TjvYthzin8oZJd5zEoScHmaaBq3nZPJAcXec1GZSzJhH2yDznr7FxT7pDi2b15NUE59mcyHpuiYpJdfUj4pcA2y",
  "key9": "645zbwCn4sRQ2tF11h8FGvrN8ZHNRhwkiq2rrzNDZ14QxCeCteDp6DhrE1AXk6F9skQYmBQASeKs7pLEW5hh1fSJ",
  "key10": "2dxYWvd1mp1qu9tx2MAZ1vbvua7YKmakF7uBNjqNAmn4L82kASJtEfGfEHnCtBexxWFy3HwFjVyxjYsjFsDrhwnm",
  "key11": "3qegQ7QU8TustBE1P6sw1vHmFxPdW4jMTa5qtEfb8DZpqjhvkqH1gwNV6Jr58EJLDAzKmnC2K2F6krrycvraNTgH",
  "key12": "3dMR429mBunna9AY6P2VYWh2kmmE3n7PbW792vAyg8qEJxHRHrFf3N5FEB6PFdKfTsfrtFPBuyYvEiPhabXNKfxZ",
  "key13": "3emF3po29XPJSBHnuSeYMtHFviEqLMdDRWyY4HXsAnAh6HAtWCVXR1fWCv4cQWuLQPeAZBtu9jEyZdBdVzhPGJ25",
  "key14": "4W7XnrdSiZam9SZ6bNpf7PQKWZupXi5yUUjkbRhYuzb5SHVUbb9cnMKPxZEL9zZgS6H8XPXsCzqDiPNuWgkC5pyw",
  "key15": "62w6R7pCBUmze34xSVcaSMxJDuNL3YtroQQ5VG7vMHQYxpSh6Ja1iUMWiFFq3QGzP2tJAx3HQFQDiP35pYsTfKkE",
  "key16": "5WLbYPVnLAUkf1jHtK3j55L2kJBUSfxkrvViR8LEMSuLCYMNXjgYVgeFs51VbKVaab2vSunBLHXtWEj8M22PaRTT",
  "key17": "TjV2fcC9erUaHuFzdcyFZH3C7fpVHTmf5UFG4o8XZANcTs5WJ5hsvS2Y7WB4nxs1WD1wQ4K3A9JwjiJSD6WCby4",
  "key18": "2HcLfe4s7ktmauDr4aYCBWKvC9nJbLK7JmBdzbxCPpsQua4usy2EiKXTTjB3aztmZ2nRdrbMuPBYMoxdWzP5j9Mq",
  "key19": "4quBaxk9PLLf4gVCWrS4nQb9hTr56JKeTCvfGL2Q5mr4jCBAXXT4TbEwwyuQyALs8vTtcnToh2WQndUGp1qy8WnT",
  "key20": "SbZsqevRuKqinSGEFTJggCN1m9KJSncXa4qzrFMTnDScXi3vihfZSTJr4YmW9xxqyz2DdzKNdA1A8k1KxccmQ5Y",
  "key21": "YCqwhBdVPtfUxPzjSfWyWFvJrki9bBDLW584fhLiGDSs5g4bcJoP3ew9AoRH4TMKV2euTUUaYppwfLsugY9d1ra",
  "key22": "gVN9aCZjRY3ov7Fbxi23QdGNE6Mv5SSaZCaFJcuRQVGWnHz1fQA8a8bHmYtJPVBdT4jxRzVnpxpftYNVX8TnJEQ",
  "key23": "2M7EGJWGNy74dDqY7zRZATiMHKoJu1KJu59Lf2WFJ7xY5wrApoMfD2xS3NdQFgqvQq3Lc9vyQe3nh8avL2e89NJQ",
  "key24": "2FjDaoeJDSLt857eELvdkxAEXgbjNg3PhUR51vV2HWSf5SeByQ4kpZuvMBQCUmp8SSKJmrqrUZLBd7DDMjPCSpcj",
  "key25": "2Fa2NDqbxzUcDtJd5d96zNo3ZeLheRdjH8o2Ex7BCfFfpyQaV7rYAQGcdEsgn5EpbRnnWdG9M76Tm1VwYtNya76X",
  "key26": "Dkua6FAYRYcMTWWSzuLg9bKft7QigpJjLpNUTonP4V4e5HSPwXZPXXgKdU8xwP6yvGUepZ9V1CvvSP3qYQPdEX4",
  "key27": "364dkzVZqappdnnmPgwL7HVXocVsqTacGQbvMQnqSEURNeq7FSdeFWcRcF4f3trQeL7f89vc77JqPXQ8LPECTgAM",
  "key28": "3uBB4xmHz53xDRhzoHgVmZ4oCxx997WYZPrTJ5FPKFTvd37eqgbe3aTLveqb2TPiZGVc4KrsT3NPii1Msm1bEQDH",
  "key29": "4DU8rNBsMEESqFm5J4PGFZEfvd6f1p8QfHxAi5me9v5s9Q3fFWxRQ99Znru4826p5CxiCp7bZFxnc1PQaVLtTVs8",
  "key30": "54Tzac9xvVqeruJk9U36MjPRbv9zvrtMzGkjc6xBAoZ3Ap5hRijdYJAEZcdSUGRPHDRG4PJstDrbmJ7YSKxidd3q",
  "key31": "3t6e8qStJDKwXhLrDCyCHc9Yf38rpQLZnADMJRW3RYL82kTMJXrdNfm34uEE4tupXYmHoS6L3T5ePSmxLtkPBWh1",
  "key32": "5QhVmTcGDH4ZXb8iMR1LV4iQTmrpmeUcF6JDfkhmzgnuqnhdUXynjmbKk1R9Y8Qd1WqF9fsQRA2Fc3aphnFoqa8T",
  "key33": "2MEnkuwLW4A2u7P9Q51RsratNjLw9oHLhTezvhJeCtKVgS6Wth7EjFgvjNmwb1AmHSq4wrfNdLH12ESDGsqDKcUu",
  "key34": "4GbLFMTttP7Ltwt6Xo6iC1toqPuQDxiKa9yVkQJ3pLkeDedwiFMwFzaanmY7ZhEPuuJMgcfsUWPEtxe4CDL56GrN",
  "key35": "2dzBMKuhTCrEGLqtYfyeoiqzBXvXdRn59m7BNHvBnjav4DpRyXWYcTFxzr8gjCztDmBpjDG56LMLZSu3gGfUDtEV",
  "key36": "dvRFb6ZntDXeRyrN8J7Bx1dbSyoGEzb4NLPdEgKVkk8bL61zUx1gHgbPwX89TBTUJqe6wWmXdaX4jwYepjEMXpn",
  "key37": "Hs5QMEj5XHNRVLjyY7v8h218936bQAKB1G3UqbLDaVasPYHDfo2Cb324czR4D36fXJ31VX6oy3NqQSMcse3HXJF",
  "key38": "3i1NcRz2gsBLTqTANfw5B7th3VE9KdN23wAw43sK3bVjoxkC7pkm6LQNMp8XcmfGsMpgEjNcxRZRUUtyGGXV1S9r",
  "key39": "4xJvLqVqhSCeT7E24az2fW8BhT3HmUDdYZWyEcLD4FsL1JKvddmrAdfrNm7fpo1PfehFghTLf2nL5iT55Pn9BkJR",
  "key40": "4nmSQBm1MQtK9ipYQT433WCgHTQkQ56oKLxYVeN4vdRZmWdPh33hJ5BjRUTyXRHXa5RNeGetGReuaAXhuoa1k7mo",
  "key41": "38d4upKPFxWahkkAhTuXABfjj4BqskdmGXmmUvkP8RnSDB6mi646eqj9e5sDfVUcTtMikj3ELWq45HYZgnPpFswW"
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
