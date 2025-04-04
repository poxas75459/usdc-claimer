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
    "3G7rFpwjYhTLMStfr5dR2iFZWfYt1N3irjEb6PeMs3x37rpivbuJCRvKUGFm2jdMPCBWAGddPezS8R1pu2neuVVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33pfLS6aKKW4umm22ZnAkeCJyvWbz7dLE2Q5chQK3NnJpiq8sjnTpEg1WVfgHPrB8w2da93bKt7ZdCNZD6TBNgza",
  "key1": "2ySzcipJFM7nDKVWzBDkQSfmzBP4FD8v6aGoHaPe5n4ya5jtvhBydQrSsn2CZWewNnGcKPcLzcJ5KuftKFAyo2gL",
  "key2": "43BzRWTKjKRMwXXKti8YTMdmGUXfy8zpkMmw6ByNm2hXQo8KuosW7pUQVNjosHSTeKSmEJa4Sek5kbkJYfuEdLay",
  "key3": "eVe8eye3E35Yva8mdaMTiX6mCrJfdcr1W176ioiKXFXfohXVX6oXF3Q1sFvE14xdyvEHgTETKF1BzUBmYGU1Khw",
  "key4": "hAKCr45xu1kvdwpE8SNspb13Y12kkUyzgoSVdAWSE3vpmpCjyGnNWtWt3nZbtWxG2bdU1mPtcaBuYZ4PW3tCLPM",
  "key5": "bxvTG3s4TgQWQrhpUhPjD4HVngbEKXbgjLYtTixMPqQuw5siadKXZnNuChGvb71Ze6Lqgr4mJcsuQTMQbWxU1qD",
  "key6": "2xARcNo92BzKqLqZNLQhmjugr9NHoQMXx4UXN96Xk6wmtgiYN6TKZpmP3CKDBWgaMXm5acpedW1KrHRCHc8vNfo3",
  "key7": "4WUjpScykE5vByV664dziVXasM9URHp6QaprnK5M7yobFdTnSMf29uKtoHzjeGJN8AG8guUg8z6ipCkyLGFHcihQ",
  "key8": "3kzx718VXR3251qDcxq86XqobGWiZJXbr8YQMmokvLdtQdS9Ssq7tZizYhpMNVk4HjtSMzrAgCYSYvXEuvQKxbQn",
  "key9": "HBHNBxxDFqygdTPQ8DGXtgtsYPaR3sT74XvPfRWu5kuqZnJ5HgyzbLCbjNEdePV8kCMaNKSEpu9HopBQ1RFkdWM",
  "key10": "4UWaVBgwLUDuy7bKtJVpB2LyucSs9sSw8eGGsHpsyaXRGWX8uFjVWjTqAuCgruDzoTEGNWeejvC8BEQzSeCM5yn4",
  "key11": "3vxcYMB78PwcAbmHvdMi9ZNYgxD8sMuDemmS2AV78oUmhcKwYLn9XyZPVuGEbjEN2pF3CsWTmhXuXKDfsQHABD6t",
  "key12": "25VEPE24GKk1R2Cicz6MuSmMkdhC6wGBCfrQcL3V84gPuUxSTKLGU28hTNqZduY1wvw6ANiAaybe8PP8MEBbbeSc",
  "key13": "5hYo9Gta3QJanqoAVZqRJwY6VrK79ozDJjM1Ctv5HoFiqiBfkeWDMuM6WhHh3xZMm1Lzvx14JehESPeNMMHUh85N",
  "key14": "5esykKrCdFhd8DmkU1gFc46zMjGeRe6QPCqmhFWywb4Un6xdrGkyYmzrNU69owaTKBB5sTWVXNm6G5g89zzQQ9Fu",
  "key15": "2tk4DcYcb39FQaGYjCTtPR3mxKhYGgrB5Bv7mwqFjprcKYY9CS39Hj4nNsSuTKBybXdXLPdSmGLFt4F4TaY2sGdD",
  "key16": "5eepEt6XGiacejPvVtE6hYovijyRR6TgffXRwt2uWTefinbcMTMkY1JFRbd7N3GGhKC6HGttnkJKutrJ5Asc4VnZ",
  "key17": "61M7wvje929DVeioqG653YKoVpaXFSHCdt4dCchgLszCx6ZFP7V9QrQNjnGP21aNhJKeVe5S5sfoqJiyQb2dnjDc",
  "key18": "2moSowD7wdMdapN4nWq2wtn5J1VPrFTDQaEQ3UBeq8DARwgSDHt8CtzgL1nnqiuqrye7zs6YhWxdmPmC81omqbsF",
  "key19": "6DWqJQVGV8PF2xdCzyasJze8RJoqTAof5A7VZF9kKsVLCk1zXEf6G4CGCr6G5wSySvqdpsFd8knApQSyoXe5PSk",
  "key20": "oMT9tqRQQGXCCsLZF1y8Dbbv3VksfjgsiS6iUXFaayEJapneKtgGFEJJQD6HVbPbn7WxAHKjw1gpEdJGcGSYvwV",
  "key21": "42vqhRtmWBkWzo48FZfzowjj8CQ4u1hUaLe3iXB6VB1ZfRvcJesWNfRzFKqVv6AfJ1JshnpydCoGopbTsrwqjQpq",
  "key22": "Y91uLMQB271HhntJyyNVorwjFpZ9GtbpqTbtoHH8rvMF33RmqqvW8tKYD4aFCrvgM1V1TbNM1KGyuGsifrGg97Y",
  "key23": "4eHdnWtvUtKjgYDxP7sXUpG5nByPh1jLcYcEyzf5PMZK3GAy6WFfWpymK2xdsHXUxx47ZdjpGa3nMaMoNkmotNSH",
  "key24": "4iE4TWCpKAS34skU5RmoSQskFxY9kdicAFELwbW8GpDoPiddxudKEHNCfwjP6rzi1YhfejZpRJx3zen8NMKm6z9o",
  "key25": "2yyetzDU6PofLWN17LpqrDgLnPFZmdhGaLtV78J3Jpw7bGQX72HTNPaZBZKBTj1Y2hoFKXjrCXfwZchhH73MLceY",
  "key26": "DbMtWAyV3xNx4i86CQT7XtFYth6ST7Dzj6nhPH4nBEehxtgVr5VrHF6ztAKsNV6TwrMZnfGRvvproVH1DdnKiJ8",
  "key27": "5Lh86ErYsuh5g3XWwkg5aVrMtqczmjdNTPofWupQhTB79fv4QxaHAzmk1w9m82sxPWmTTYNmJnrN6wY4eFyu5nFD",
  "key28": "4JUKc6Q95UZn4cjp1Ud4nSd1DsnPoxA5grkadRfSPUyVy7KaL66jy5cxgsUdKXtuEtn4qwvGkC9AhJdsNhRiZ2C9",
  "key29": "3hj8jnmwUdZd42aUgJj5K5MRdhBND3Sk6fjnUeXY6xyMHcTgNuwKFd9JvvEsjdUcyMWkxpfkfSJkdvbBXma45Lk5",
  "key30": "g35p7u4ngTESiVbpSR2YMbK5t2ywoGjrPJcm7eeyEMHwwnhqeK5dsVEHvCcVT1uBydyN1xTcrcxNYjkAzVVD1cn",
  "key31": "2svG1SxKUn2Wjdk5F2EYghFuF91yjetphccjp4CpwmJeXWfDczQ4tMvWzJhQJJk9p1xZJwDmxAh73VwLCvHWdoTQ",
  "key32": "44u1LeuZMt52ig16PNNLAxgUmnb2L4Guisu4JZUByNxdjdhxZoXFLVC1btf53oyrvqxEGRuPhuVJJbfRE5BjSNVx",
  "key33": "3Ri8LaTKtRDpBV7RdahU86u35zgg9aVBKcUWDcp7sUYrob9aviDe2tJ2P81eioDBxR66ri7vuB9f36ZkpqdqM1dP",
  "key34": "4tykCBM86v5gzfio3KSkJscNkzjCFjHaeh8kpVtMHb2Axxa6wZogVMtBsFjpwyreSQJcKWxTiMpQwrvyvP8kqQjL",
  "key35": "2fmSonKjDXTvEkqc46pAncPiUhhhn7QK3uY9CpzCs5AY4Dg8ngDQQz79pG7kj5rftgHQP3DrNpmbvR7uyaeVdfpY",
  "key36": "5YmNXxLhHj2PyUidfVLPNUw49iWSMFTsYbaPQzTJ2Y6J1YbRoVbaXyrAtyDz8Zu53GDWbkWzXrCtgRdDLUSdFc1M",
  "key37": "3HS453TaZnz7zaeg6K4wAP9sdhxLBM5dAuaZgaWkgEpjMyMncGP3JkzFEUtFba5gXhxGT1mppw7WsG8Cwq1E2hAx"
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
