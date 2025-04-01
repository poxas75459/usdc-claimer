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
    "3na5hPf9nGL2vCVdxZmakm2CKK7pJexq9JKVwupvFiPu48B6ZeiHTAqFDyXwf89bPoUdMAnNVBe4XWS1FA1LQBTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "379dBfkd8JbZKVzFQW9PadCXwsq1VpxskqX7tUU5n6fNnsfEsDVFVtis3uS5dP4LyZpg5aDk1YDn3mWaQ1VcqZtu",
  "key1": "AMxy7PkcxCSbgA67uaQ2akYzXcnRYRKGotbBLyioomqfQjfZ5xpDzRCF3452DnJj29bPVpxzp92v6bxcmEPfSMW",
  "key2": "3cguK1PCBEuEhpcG5df5oGtBvRTeCPTyB9dfvozHJVwU5UXTuqpNHYMmCMW5YExemmh6vHTywrqcQXMZHjqY4HxV",
  "key3": "3DSZpjtqFh7b4a8G4zuvtjnU8p65Mb9y3eSYd7mt8go8qyPJpVGqdSxTkbfPrFh4Y7MbjeSDzxYAPDNwhvPqCFRa",
  "key4": "24SYyAxCatmbSVZJ9sKPbTRPd9vRqgMQ1jQ5ftUVQY77LnjfzUphM9SJuFeNtZ4M8dLaFtBKSPNdp5QP2vbWWqoX",
  "key5": "61AonxYiNhZZKAQNiWUdNr5o2QRevRbubCGLQ2wXG8Rn1WZPdVV6QLgvDt2idb8BmQn8CdWUTfKjtUyZ1vWNvAiZ",
  "key6": "2PSTPR3voPD5zd8dUadb7v8Rr7KvQt8FWzf8YYeV2nksY5QzWScRrA6jMrk4qsaEXFZrMRUQDg5fG8ggWXXGAhT7",
  "key7": "4k4nAyENFeBvVGKshfs7vemgcwffpktmf9xKJUNzE7Fa6k58NrZu87XwGLc9owraTscnhqsHtSUfgcuEdzpQdcFb",
  "key8": "5Ep9vFMaSmbhp9S84Yo3v4JDQtn9xL9DBWkngeZG2W1GaAKZNPswDwk2EA2mKwxg1sSGnTdnoGCAhfXJMj5esrE2",
  "key9": "2ChwS9WjpQJw5JyaBUR6woJKbLsSP9K7dF4211Z36m9CG5zpHD8u58S3bu9QUsv9XVtr9GueyBAVyTkPig8fFoQa",
  "key10": "2CfVajTa8cjGoHQ55QMMnC5wSZ1DHexKud32AvBDtmek7YtWJNqxQvhsKMDavtZFMFBhSQFa8Km394qGFEk9jobN",
  "key11": "53h414JZzroyENxGmVurCcLfQYcE2HSWiwfYszV1o2PD9oZdMMzuRQnsNPEenpjg4gExMkSDJf5TDh9UATh791Xi",
  "key12": "2KsDFF6sGsActKFKAn4yDwbNymF1KoxGYraADgkzgn3am5TuFfJDXhu4ss7WMar8a6hpsA3QLZFgVu3vDAc1UqeK",
  "key13": "31vcQxwjo7CePqU1uw3phHKBEhPR5knSXnoSpnFSZ9h5Gy41TppaKiv5G1dRxd7U4hkvnMHpGy98fjKcq89HMdZX",
  "key14": "5vmTmwho2PVgGhMDwNieXc3KcLC8QL7G9Bh9s2dbCrkG6FbGbHwk75J9AAGSVnZsH1KubSJ8EgcNucT9zEo3qtBS",
  "key15": "5CSQoNMo5f3Tz8U5wSwNSCjfrVzAyRZqSedtCwsr9x87zULdudJtc7RBmWXmbLBHUeVgnFvBZ4wMhBDnmD2sRTM5",
  "key16": "4SJpftF4dBt8pXi8tQhstBayxx1F9hVUomwf13fmtbuRtgmyteguFgWedUphMCVVk1XQCgdZEwqqL1wAdftf97vv",
  "key17": "4qF5Yp8t2dqCNDcVrKorZaYRJFyty5eJSM72vf8hBLsXrwtPTwFUk5txie6QdgZxddHNQRLYg1tvdYdA7xNhixy1",
  "key18": "nZjA2yuZLTaCXPPCRyCBsSyHAXZodWC8hYmu1A7GcyhXsLSY7fagmqH3JaghVJAHLRC9rjNWAZuMAGMvU7mKaKb",
  "key19": "5zFCCeRwuubSMbbJGcUaPpYjK5s4VNyxPmGpcFR3F7kKQssbLDz37DFSBLiJ2P9bDXTRQTpYUUEB5YWxfBCWv4U7",
  "key20": "3tmySyXZHMaG7KRw4FF2aHfS2uPFyh8eUBHEPkmCi5GYf432wbDx6P75wfJJ2nBrrPceJKNHJ815o3wpH7mDqBmA",
  "key21": "5EewxQYJscGeuiHs9ZmYSEvLvfbDLdZjQUTmnJiKjq7pKoEtu3F78WU6rnBfoCDUcw1MVjyCNSVYNyTsnMhS9YuT",
  "key22": "4wrDejryDqNN7kBc7XLjyw37VBn4acCfDFKfsH8xjwVZ2Nh8sxNy37XDKwvZBuwSbHJ9dTLVHkPAsM8tmP61KQM3",
  "key23": "667HYce55eu1r5xFGVhy8Z8u2GbZ89t1RczWj32o8B3e76xhNktUcdd8ynJYGqsqVikY11f4q8aY4b6aRVmXdSk1",
  "key24": "R3nzWQL2NUHyUoc5s3qM5tNiBPVSiz5NsKZrqriTG67oYyHL4SYRzoJT9YLnFMZP35Mpy3E4ksr217E5ezNZ6VH",
  "key25": "vty8BgLvDVr9HTCwhcUfdZrc7wtZTbx1mwmong5zMhjVL9jCSXyRCB1uryTzME4KPzqSWnJzDMmxqhgxFe6ABCS",
  "key26": "768V9bYihzAurC98q3L5afpA5nMSjJxKLRNZPsoLzuQVX15J9DWR8wqfBz6XZKepWMgJoiB2JqjQovHYRkp9VuL",
  "key27": "66bG8uoptwmmzRdPw7Ced1LvyXo961Fq2F5rZkacjaJNSp9bz5vwYwMfciXDFHwYm9MrnGKb3c9zmYT7oDuDRUud",
  "key28": "3QQFTHWQAxNLi2YUPEgJ3uFuBSLbijstsbVsWzAJeg2BF7HZ6Hqgzej46y5vV85Er82ZkhT1w628ro2VsHr8cFXL",
  "key29": "RoW6dDC6JXYj3xG8eyJDM4fPRYVkWwrCrdYX2KMH8dWg6DXnCYS2jr2spSB6KRPMQLKG1KMKDu6RaSmhyc4jtPm",
  "key30": "Mh9twzfoEpjQacB86kxrngCt1xFhx3zxjoUYapTwDVpMsMFVpbwhL5mpmvmRp614Sbz47jXKk5ptTM9ZSiv85SE"
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
