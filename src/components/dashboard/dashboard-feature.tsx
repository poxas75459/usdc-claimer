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
    "4u1uwjpSKuoJyib44MfBXk1zp2MqWFRCZaMAkFJhNDMB8qneJvyCicd97rXSdHjUxTCDfjFd3u36oTBz3vMUFub3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DxqPrU3q9rtKXDjaZadazpEpaQES8k1Tzof8ShHJDq6Yykaub9tG2umzVzoonh753caV7dcMmyTJ88TKEcBmrJj",
  "key1": "QrZV6UkqY26nrDKx93XBpxmJJ6DC8FucdJFo7ztaRMv37iXSVDi1dTNyeqxXSxEfGH9ov27n8GHvPzaVYtpGHcK",
  "key2": "5ioKXgy3xEEJ3f2tJBaHswKpN8MigRtRXTbaN5FVGg1wwyYQF5TkrAthgb3oCWvJzDQnA1pE63pR9tPENkasMp1M",
  "key3": "49BUmHykqNzzcwtLvp5EKB76ArPqkw5wHHD2gts2r5qxGE7LZdX8aTKvuchjyd5ipmDGb4k1VT5My3ZWmAwhDYo",
  "key4": "3LxXfJnHRDYZUcgZKCHvA966ZmKsGdPrbucMnSSoc74fjxSUiv4PyzWhyWtCLL4UVJBE4mDhpoTVm8hSq1eBhfe4",
  "key5": "2rQjhawTNKT6zoRXKyWWBreiaEGoFmZ2iVSPWps1N6o9UEfkGRKaQyw3KoLqzEXqVAptdmEWuC7VYK2kCcEaoNv6",
  "key6": "4zFoFyMR1gM2whwjKBc3vrVnfP8W4DTnqZojtCVMF9WZJM4tzghefSgL8GDFesBCUgLpKgtgznu8Lim1XPLGswzf",
  "key7": "5BUcZUkKHBQqoDdUCH9CG4dC56AoYBqR4zwYCn5tvmEjg82LbSuMbRfePCLwu7gwhNyRw1XgQsCVfUn7J4CgeS65",
  "key8": "5tJH8c4nZ4UXgjAYkytkqxZuPuSrCj5N5xGyCwMzWHapx15G7QdSvgq6RZgzfFJpQz4X7xrjkCmrdqwqAp9K786",
  "key9": "2yPEjK42x2tgC7MZgnNaNSfNwoo4rdLNZAQacojzne4wBYi9WS3zDAS2S9Tti1rv63sHSFesaVe7kGm93FsVXK9P",
  "key10": "5NYodPWgJSuw1PoVoqz4DsTPjUQmytymL8ajNPoTHJsksjvtgJDkngZf17R3vXSgu7NrpTKhoXxy3YTPBfXgQthv",
  "key11": "33oN6YSu5nsZsWVXCE6KCU3wfY1eZ6eUnekBGdzmQHj5SFszNAUor7aNLiwd7We7zP7n5Q25sSfHD8f8diy8HDJZ",
  "key12": "2LNhKZv29k4xedYeRYMWUjivZWe5NgTL1zJTQoRAzw22QLLEkePEVUnanyjmXR5YyyMcgmtaWZmoLys7Whyos5mx",
  "key13": "3sJSo8rcibeQaxXT252EtjcXfwox1vS25mM7AKtd83zK7GNAzLYcKFs6Xfp6MmWNfo3W8CdWCvuhYLH41FyPRDcU",
  "key14": "25zXibJ2sYoiaNfm5PWEWiCoynAHtWVz7kTUPvsCVVG7WTU4TC2jLVRXmAKL93isZABX7f4J3v2vUf2Hw3KNCMwq",
  "key15": "424kmTq28TTghewJhUdEoPVSrXH4FAx3MRdQABEJsEeQUsiGraJzBvMF4Z1ba6frGJDNKs8JdQEsV7fKNU8qwkd",
  "key16": "3yRWooG7p7gXh2VY9XgtAZjcuitFq5sPgwWY8PbAVK1vjANBGQFXUVmQAH5h4M7ZUYqKmayABuiHwt6brhschdZe",
  "key17": "2gePXD5dWs3hWAgQQ7F34NXfHPZaetSm2vTkcSyzcG83WZdrF137tHZJAKQsTWFUd7qseoVhb6ayLJYdtG8cEAde",
  "key18": "4uZqmwWnzhjBHQRbNEWnPAnjzaLvtgjySFTDpggN7X2ELRY7DdeTzUZiVjKQykRVXpfpLhur83VmSMKjVLei51VD",
  "key19": "rhkbshioBTzT5CCMgPyiUdhC1mw1bEJc3dqLWxXY4WRwVCGoep1qprMkiqisP42decMKzDZbgQCV3ptLvtCZEYf",
  "key20": "33wXocgZ7wHC3j7Vj8DaNztj2cbot8qir6zuR6bgGNdNG4CsT8LnJBfJcWDFXGQxTcpS4qpozDmQgwj52XaQLKnX",
  "key21": "A5vBW8syap83ciifGBcUFmifwjqam5zkFhhBhdUev2wxbGUuP3xwGgfjL4QhvF7gxKCpKmbHx7KC68tTMSwfeg9",
  "key22": "KDVF8B3sJvogsyQixEyU3w4UA5fC8ecgeZs5P4fWmozdN1GnAQj6jkCpTAPWr2f4v6kBFHshNSNdUkBcvSwaBPv",
  "key23": "66WsixM6HVfmZGkGqJug28e3cVwJFz6imPmgj94Zh4dSWDxDJsccFpy6W8QomyqDANpVyZsCdZLQiMYTMyxgKUbE",
  "key24": "4kNjunpCZapQqu29irMuqzpgfpF8JKuiWgoVw1f1RF73njxQMTT9VizqFz8FSUiz4aohLByG61eqV5tLRcghqexq",
  "key25": "2A6hw3pWAK49RbPDVdHD8YxW76YGV7BFzJSaftcBRuNmmtgodMsrNhett1gjmjGm5MVbDYw7Zp9wTBZbtGPPt1Sp",
  "key26": "3hgLWGKFVUCxGUsUkFWQ6tiy91gx86BEZ9ToYZruauU7PAqHRjqdVqjESapZQDBw6oZGkhynuU3RxLR3Wyu7VSLG",
  "key27": "2RD8ez59dkRMFwye4BCPPFePGmFyzKhoJqDzdkxka9ZjdvTJCbo9WQzXqUjcJ2wuhRSt5V1TmGcuVmvpW2Q5CC8v",
  "key28": "4qXRG39vREZvHWGnsKotHCypZcYNydJEeyiRdG3DWyu9KX7wed9TkvwY7zAo4Kk7P7Aw8ouUdoXSwtovpritSiyY",
  "key29": "2AZKm4kGUaHxtGcQSqn23et3pKv2nWAsmV7hyu4p1r2vh9ZQjjGyZss7p56Mz3EmvQz8rx5zV7JM3gXJ6A6Mf1xv",
  "key30": "xzGwPWgsPkvjwfHXJ3rUXCEVt2HqbNx4DtoLueyNtx6G2zoe3PYB8f7LjUUQFLrJQw4r6VFsZqGNrEurwxctMx9",
  "key31": "3PePLmPCUbhYobSTtATMEBkJ2RfJkHfp8sZrgEecRTC9UVePaWyspH7h9T61rpdAUwr37L6vgvHmntZhuj8b56Cj",
  "key32": "59MQ5enNcAQdA5s17mc3c47pwi5nEJXryjSNhpyyUV2Q7tPLyLJLHxrDtsZNavkZyib3jcrXmgZLanjNRqMWejRX",
  "key33": "4Y3ihwRmHBbKpciWZQHDScswmuGfeZgHA3k9VpSoVGDsrYodWL8kHFYSyGbCH81gpfXaZveAHgZYyJ24RU4DHSGq",
  "key34": "59higg8mG4yaJMGXHrfKyjPmJBdCckLCGgP2KP5pZAzmvUmai79ZN4dXUbvkdeUznNu4Bh3iKCo7Dumo2jf7shxw",
  "key35": "wZi98RoSoNzYC2JoHoKTATVGRjoZxqooi11tkE5PwCyjRkFsv1XKiRNiWY1fASnNxah4fzva1f9QoyDbnpAwi81",
  "key36": "5YtzJyp7bh9sCfmt8JF1CPGfbvBxRgKCywCLtq4coYRH7ZDnyF4uaESW5xwgw7gdWxW4LvonmoyDC8bRVCRMwxmJ",
  "key37": "5wau318j7id8gBnKcbH8s5kAHVraTEc1BzMPXDxPmMAM3B93xpRwT27QQgiXZ3G63a9s7gJjztutnqxBiEt6uN8W",
  "key38": "QiGJiVtBRQ47RPVQDwzPNRuxQFmdBXHTGTPhussZKdSfe1E7pVkt2VNzP6Cz1ENKV5zRyCGnnm4e5WMvEbFJB1o",
  "key39": "4DgxGTqnC4sU3HpoEip6Ei6UPThQBfuLGTobhrpo25wiKJMxWfj9kPCHTydghskhdQJ6C3ozf7DtDGhzuzKcbRLZ",
  "key40": "fVLjFgdcA9XAGLdhX8M6Wr1vVV7LMKzqLJjrX41F343YAHh3DNcZZH1dywCcLx1ScmnDyWgF7pouDQ5vZKeCP81",
  "key41": "2wMtFE9v4fTq4rCsrwnZRMoPTKH57bSNk2sDr8cYGHzzaTPZnKKEyjeU3PmqG4Uk2PSXiDFdu8VXSryzAwgBArHD",
  "key42": "K1CWDZTf8mrDtfF2HEAvncL6UWKqFyVqA6Ce6HLGb42SRSwWr49gh3iLfobCtWGvVsmMrkZpzJGTZBSfEoPkBmj",
  "key43": "4t9xSpQGxuWRareecx6QpJQLRtXiB8yh56wmjYhrqpWR6LMGALU2hM2pgXH1V8kKRXCPcyk7S4CfweFkryEvSEF1"
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
