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
    "4Y4ZM4zndaKr9giNdfZL2GHJiSkZGac8NnRn1fJNDNHRBXQoXYxruEuYq1FqnaeqeJFS3ykwYn89cddFk9HAd5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SWAcXkEEfZ9ZErGuMya3yNfUPonH3jRQK2YzTJtAFJDnKBSuUXCWtXVckPbteEwmamMepnwSyk2fPt78S2vuHoX",
  "key1": "4VYkswje43oa2DoNZyZFF3QKkBq7QNGrekPYc7gpogh3xKbEjHcb2vMPGAj9RRAUM2PuNxVfS4QpmzB4hxfzMoSX",
  "key2": "5jQjfy1baqXaefc6JNghtuLMBm8umzA8FLbkB9PoxyvuayTz9nMzmRdY9qNDhxdNVCYLaggPzbUTSoztVHm51U4K",
  "key3": "2gnbYeDCTdRssxY55A5owT65y8YZu5jxKJoPkEtNrazkqTBV72ghzgMJr3evxYHDXbeFkw27jFUmmhK24TsEap4G",
  "key4": "acVTrR26r33ify9no2YbpjFeWsDBrdQ6t8adjvNaRpNq5arFTJvrdPsT6y4iwDvBYPZnmuQAvnjtUHnEU7NJuiz",
  "key5": "2383v5ViLbHfdFFWmAjoNv32k4JppDHmyhvnR39wHd2cqnFaYYpDUiPJcLfBdW8goZaMvoxgMmEaZ6WkSU2qCznh",
  "key6": "5yHhkgP5wXpYcajSP2QUDPuSSBxJboBuhUX7XaR5FivkpyRjaX4a3Wf9E9Dt8YEHwLpmL8HG7KGLAPRed3DNkv8g",
  "key7": "3fDPwdQs5xPFYP8vQ42dc4jjMrnSuJ8TBEgaAW7bAhKfMkmWAZw6R9hUzZemmexwD1KxHjsmTTwGeikHgynkzGRP",
  "key8": "5sUkbPKrrngzJxaV2CcSbosx8zPKtBLqVRELdHbRYkfoCHiWHTdpHAiqm9QgkWzh147zKuyV8Sc8RcM3DHDDpHJm",
  "key9": "5hP3CZwoT6TcJg6fC1ZmmvgYmqJg8uECgY4n17GkmFztqXqZPfvpKw7ohG2gYAqWzYyHvNj1JQFJu7nGYZZPYiy6",
  "key10": "5xCbzPfiSPJJ4TAeTrWYoxNwF9Ex9TZyQ4KnNPsKTAuetdFfdLyc65EMnqX5DwbNF4sakb6sC89KBCGFE3vWQdm",
  "key11": "6xsVbzinLzUFv2qegk6B7vaTEstSWepX2p2hyT32u27QdqMveQcuh2sM2JRaWrVNXHnffGWBe8TA7H4k7WE47sc",
  "key12": "4Cr52kGZwLunu6xmSRDa3fHjhKBHwkLJke4Vb96yFfbdmcwoehiPSHu6iMEZSHn96yeFFtxgrLtayncbNuoyLhWt",
  "key13": "23FUcm1VgfRp7g8xcsBDNUpZfd51Med1aFV4EhqXqQBtxzuESnoe1VdV69wCj1TYiKzoYYVweTyv1uJ6dds263b4",
  "key14": "2w5CMXDKE99MMwGo28vtHxfPQBwKB4VQkCr5UDWPFfh6c9NWamAJvXGAX2kdKzgV7dLNSpHX5X2PvPTDik9pN9DQ",
  "key15": "4YUper5FE18YEBmDFtJG9Qn9EfMYWftE6cUU2dXFLLW8Mtu4vN437Z8Ptv2KNtN5KtmD8bJmYA8wEWfdWnQvniRt",
  "key16": "2GPLKoZqMtQT7jeVParJpKffUis97qx3JdmzMmjNeiXF9zEoeCpzKdyaLwcfHWDkfX82kaJmDwd7ywh1GwExsZSd",
  "key17": "67jvuXeWqk36e5CZQ72rhgqQJX5jR3iFFkgsWcaxhB1BP2v5tBBa7A2o9YVaDbf6eLKFAgy1aU1WCWaC3ykQYTfo",
  "key18": "5FGqZdjWXbCuywUyknHUTEcwV22UgT2oQMY4BaCgoD4EPP6jqff2PZHiCbkuQCaUjPeCDzVAtBBz6hdYWxxjXBZh",
  "key19": "ug9tETmvL35Wn1wu9wEkbQT8n5Xtm4j7hZds3gBaRqz748yGvqvE1DV9aZhFFzxXBywXKFRHoj7195EEbo9dQbG",
  "key20": "3MetZ8HTry3TRtmoin86jJPzdvUjxJ7H1y7Cv6QsMz77ALXZhoiCHX4LiV4BChEr4jbHNRBp3v5DgWouwyPrbnW2",
  "key21": "9qzRNR6YhmAE4kfdQZ6tCpsUmH5x5ktq7NUefGRK1CvAhbtMu4obA2wzn8r57Q1MSVN2fCsCfvUL8EyeZFLRJeK",
  "key22": "2HcmSyk88iV7hZoGx9TKELfsNBX7D5fYkEuhH7JYVchBmjaXmgekUDk1Y3tC3AgprMT2YHk2Q9F43qxB88ncffC3",
  "key23": "3UYibdet4W7QJ2ZYoxDMCmzXhLRxfyq5UN31uzm4U9mE33Q1bxyzGSMJJ6MyjcRmREcgXafmNH7ffY1bnFcKpxeT",
  "key24": "28bQ1gv5k2FSiKXrSsymPqXaJ1JcaSKJbAuqGaDrHnc23DPTTFXXWTjPGuje873DUR6Zzd1aWF9dKjULZtdXbCpE",
  "key25": "43PCycrErdD7rgf4fEQLoAfajMvH9uD8N2TLzbtLhcEgt1SKFbj23UQWXWGpVs4FakeEr9xbsDBDgyYorKTHuPXF",
  "key26": "i6JnTZ6buJ6T9qZxqr191KY28NqrR2Kr9oCRFL9qHXD6EN7iAkfdNZTg3UErTchBK39KLUCykhmVTk6AVvL3PQM",
  "key27": "6mx2q9YgM2zpFRfywvFNPw2JmP2N5DWd112C2iGyQcNw4Jii9YUsoG8kmbSEyQs7tsu5sgCf7XEZYPY4TWRPBE1",
  "key28": "4SVYFMdkuPjGRFZztmbQTXNnX57L2nDWxYPXJZEWD52ZUCS9A96M387seAifFGBWa9Js8LPsQ3297VgQeb2CAqJB",
  "key29": "JZPGaSbn5Z225zndyYVBJDV5miJaSMkfEeMa3CExu9ZzeYKrpef26ZM7etiKbxPEEaFKgLnrsSJhDdHX5U8dyWd",
  "key30": "5dBFjAX95Jaae3qjXHjb2mh9X69NWL5d2XqoY3NXDCnxsFCHGcreCPkLUdv2x3rmbytWTCAwoJvFLeeTxkgzk8ja",
  "key31": "j2Fs717duNVggJe8AEGrtj8KJHns1Nant5JpYXQxXPKwEamxNo9jV96TgHg2Frq4ibkNan9yk4DZK8FLY7jS7Ei",
  "key32": "mxeZWXXcodn4aBWpBztpSq1cX2aUe3dDM98EFY6bgVf9jQJgBV93itohjUXPo71vczZ8BQE7FWUX9YSAbbvYpjv",
  "key33": "frPkEL8tktpX9CRRpTk2urCFwQkmUsjw3n4xetiMq3Yd2mmsiyU112bzybyngrWtG8ELTkMF3pTjWZv2kZM7iDx",
  "key34": "p9jRXdneCNS6dHBfYBxq2UkCpu5Y3e3LkbB2XLFnUWFC4en7BpaBEsraSp7zeUeaynGtms376xgqHkQHRZtW1PS",
  "key35": "2rgEaM1oy62xZvxxurvTTNkSivFaixNXfWuG3yga83zVgSPDvJT35sDg1qokpzEher2ncwAk4UvQdw3TR3Wqm54X",
  "key36": "3msC1UBQnfz4avGRrpwksYt2bhKaVRE8Bb1t3sjRbc8CHCdrZtknNXMpbTUW7mCY725BgLe8svUd1bNgagD8FbUk",
  "key37": "2dbEhJ1wkhR9EtcpotVipUPtzPqgfg6hXPEerBmuTP4jBvKx6gRvVRXCBngtT8VsmxQJghbKGCcubqQH3m2NYLQA",
  "key38": "3dauvtQRMfGuJWmAKfjhaod88EQdNbcE7TyuLjXd5wDPL2iwHFTzogHdwR3uGCne4L2XFaSDLdHz2LYYFZ54FMQw",
  "key39": "4tbhAacRBvKpB5FhvsZB3ouSwv8rdE3KnF48pYmUVQi3Sjk4UBWff1XaAfKTzGoeK1xY5pp7xCmAN12UzdsFhgit",
  "key40": "5GVSvi3mEX423HJHpF1aacVF1KrjyagDMwq5qwgyHW2FYut3zLuXjEn9MtfvuwYMu2n64U4ceG5KCq9xrUgySq8p",
  "key41": "qEjDAsYGVKXsejmqZV4Do2CU7Wtagr82CLEgjgVcYe2bS8QFD1oqWj4DBcmfSWTDCmp54zW3Xf5TRmicdcYE3iA",
  "key42": "3wDWYZB7AoEUuRET23Hgb13apJTCBvjhHRSncMSme4Rp8Vo2uAJagBvqgK2g1aWPoKUGK9mwGp1uesF9CoUqXa7z",
  "key43": "7jMdNm5L8JMkPzPUq3uBwQVJx4EkMA1QwnRbNfpNvmGyi9j32CcTB5iFjVuX3GW1LM3md5H3iUo5CBYdgAKpysX",
  "key44": "345rZoZMMaMd48rgHsJiyRTdyB7pC52LP58Nqp5kdDo3Ksnazcioiiw1wfNxmK4rjs8sRFY3YEUi7ZEgofs7FvaR",
  "key45": "3N3aiJTMgrHcQA6XaeEQcX6yaWNLFVzxxg65oisRqjwyLgDfP2reBo4Txogr8JCrWoq5Pf77CUKMgep5DxCXQKHp",
  "key46": "5gw11m9ZLbWdt1iAv6uk1wk9wraX74oJx6BT4A4K9v3iV8zz8sN5Eco7MzHgZGKdtUq329CW1Qmc1HfAV7haq4CV",
  "key47": "5uwJrGM9FtzNFpKeQaKLcyJztuUN1zCj6nWShKMnXiMGhAjXwa43haP8KUsFWnJMb2bfoo9JqRRvucyrDK3b26XC"
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
