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
    "5wkGUjqBfQGKac8MGkYcX9pQFhVo2sWATdDLNCbNbNYNK17in8P61K9tFAMEWmq8wDb2KKGDBV5p72vVizfZ2RLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5btpQJdp3WwtjG9MgkHf5TKeqryhgLPkuiHXXCAtT9h1DUdDb7CsVZHMSDTG3CgVxYiXhx41Yaf4rKzSDgYJkwD7",
  "key1": "2mEWsN87fTByZRdSn8Hwsb3A15uXDPr4QK6pvyvKEdecWHpJqDVCnhpfPRppxWhUMrewVKo8LWGUV8BEN5rmaC2D",
  "key2": "522sTtCLh7BKK5M7Rms8MeVhN36qNegCRY7SFshrYySKV3ePx4pxGvsYp8q4Do6Tj3zgJMu3VKzb2uD9ZZdkQfHj",
  "key3": "4z3Jfbk5ef1cQZpQfApWy2UsSXzcFj8XvaioniFDPFSD35JTDz7sSgeVMiGY8v7mBPophAeYnKAjzDrGy6TzPoEr",
  "key4": "4JSqmD9sTtZU1abkLvdmbtVzjd9cKxVMrTp78Rv1G3mDoYvJiQxXhXJoVNAFNHqMp8W5n3b7ih5Tyaop2ws8RLUz",
  "key5": "2cLDq1saACzZ9N8yUTPZEGAqff8BGNQzBdTpaveagmuWChsDzoewd4sS5KUzbUmkwZc9HZzdYvPji18nUPBDsmkK",
  "key6": "384jDonwWWWkDS1nMrd14M6oaYq4EfuLVv42kDQr1GDd2CYw3zed5Q1w3FT4T9maC6QudSjg1UdZeo7KRvPHfr3U",
  "key7": "286PCcvHorQRpCeXMbFQFDnSCHF9eHvHWzSY4Q3oeyRyByPqgesiZvGRsE97UMBSwUN37pVNdLTcvDDoJ5nCegUQ",
  "key8": "2xZkugCZNMX2qWLDe74XEySysGz619idf5CnC41v6RqN38trpnWZXNv6tqq6S6zhW8Q87U8E6ieERPR4FLrefHGy",
  "key9": "4Jhi7ufhcJMgVngF7PMNp2AxPhaBBxMJTzYs1TG4oXsjZjxSoAr5FHbR8f6mdWg24N2vptEvCDdxgXvzBPceQM3",
  "key10": "2Z1ok4GZbERMJE493TwfyvybXH635VdhDcZVjnaM3viupXMcohVoQVbq1JEUP4ibL89QHUW5KjXqdGXWrnD6QhcN",
  "key11": "226h1532LSf5TaABD23mfGJRhjsNJeJbtmH372xSeJKxWKnfNrem2YDTeaKF1qxarnxVFBaZV5aN4rEnPVpiByRp",
  "key12": "346PAa4kzpDooiYCiAXmNTXvbnnu8sFN1iJRv3EwTQodqQ926LnUdDdaAnVtxGVwqXpDKJCTB5eiv2b1jG8CXzCd",
  "key13": "5pHUivq9uc1pqoo2XvK9mJ5qGSm8JzaAZqFt9Y7EW7gZK4Wm1poV7thamtAWfJshsnLDJesDFpTJpRYj2AXQnU4D",
  "key14": "62xcaeexGf3m2trxuHrwTLb4JGnRRhz1C4V61xPNKt6cZXYfb3XxuEGaDUfssCVW7XnLH6VDMD941A5Bwcpjd2za",
  "key15": "2mKFuuFf57caVRmGEroXsbUiGBBe6jzjueD9ppp7ypWzSB2z4PPK6YUtigieUVTFB9uyRrT2WcUj5y4eN127MJxn",
  "key16": "4n1xEkTTKrRRY3tVicGZk6nfnX5hdMmUjHp5DcWE14AwSJt3JtC7ayWbgKNPtAGXYRPWGCBWeZ5iphWKEdWMyzFs",
  "key17": "Chs8AUsYf1btRZiUi6FbEMPCDSQE8GC9ZTNsJBpmpYtm6mANdDmpwfX2ms11DB2C6KiVEmcJ5JnzcCzokxrpjEN",
  "key18": "2PmPVgKiLtgXa8A8XxdNJhSzw3R72haX5Wdnz5tzxyjhCVVcgfczoMXJrC64eAiscS7np1ALRtjqNn1egZWSnMet",
  "key19": "AqjyxM7AkBU2zg9SfxpLRKqmfcM3UKJC1SASDZwTasaSwqX69XdwzLnh5fLrY5SLXB2XiA4VYxMq8QHdcbtahEE",
  "key20": "5r41QkWAgv1xsyHyQkdbbvZcMGBJb9HXAe1YMRjcKerBvFgCK5NGsC7oCG19MdjTJjotf4hk7CVSojVsnCQGxJjr",
  "key21": "2EzBLi4bfu45ieoSC772GDjcDcu6SLPCd7qKzhYR1rtQKyRD7fSrAstWSz97AS8w2ciZDDLhzjAm2G6oWowY85TW",
  "key22": "4UjH4i887vEBtw1A2uFCuLDycWw4Fvc5bFtMuSrdoVdEcsDkHafcXWUyt6BEeWA63UGNQjk24XRpstnTsfRJAf2X",
  "key23": "fLWHVVkAupd7xVvRCMTf1reYVVLBvi8m6zJyj7hhPHJWZ1LZf7x1Y9UxeWXGUe9sPsQbWHVhSNQGyAjv1SmeEc5",
  "key24": "2jEVDasYm4hM7oQ4iak2FZwV3B94AQSVjPC6FusjXsYvxjVRTviouxKeMYMqBfUPgNz5BvaJFvVH2hvmxRURYbzu",
  "key25": "MS5axTasJWGaf3PCw9HahGGMSgrSqZDWT2sR8YkU54oEHYuaVv6zXsewvj4HLP3NBXFw9upfLomR2275tuuchye",
  "key26": "47rceBTyStmdEXVMCo5u6ne27FBoErrfDAKruVhjQGZjoiURs654dKVGn21V49Ky7XDoXXR4AK39AYSGVnTWd7Xd",
  "key27": "3EJDeGuQhNLVWiaqyxsJNux9Rc1T67HTaYjGHbpiiERydQ3Ed4UkwsRvxoMPdMZcV9AF2RQ3cyXHmxDK9BoxFcuQ",
  "key28": "3yZoYix4o7vA4fCBP48gmmnGdGeuvX2WgXgnKYCSNRGQmjBWvP66kwMKci1Uxsi24dstSDHpiS6A54xG5Fsr85g1",
  "key29": "3tCiCqw7Fm98iBJLzPoj1yArkAiU5oihfAsq317Mu9EZ8r3RXw6NEap6hqhsjUEPv9daqb8ZFmSjV5u6Lb1dttJ7",
  "key30": "66kvJ3Z9MYmjxCZ6L2ynbQjfRo5LoAeuZMM8PvkB8ru6BV4mVrbhzjABCZsqocozprMJfszBXtspUQ2FjnaoLUSs",
  "key31": "3SmDhheWig4snVi8tAB5G6yN4PK3u73JZ5hULUuikTvok6eW1tJ2ukamyTRERKaLW35tuGQ1iAzDKcT9TGgZd5RB",
  "key32": "3ntXZ3kYJUtEE2LmEsinKdS9e396DwTKJHKngPMj14cz6sKC3nrZqvcd8G8uVK8cLvkMC33vXp1YiYg6Z6MvGSSH",
  "key33": "2urT4W7nsWah4J2Ki2mw676YHhHH4VkgfXi9cnfEYgbJms39Mx3Df5whnwK26DW2UnSfvYGWVMzrddWUFahwT4Aj",
  "key34": "XdC4mNQBm7PAwkmoWEqra3dBvnDzRqWoREzaj1VHEmSVheUqjGnmDpxM82PsCWE8ZCgNZpCJMJbbSpkBq39VVRx",
  "key35": "3TfopBj8BTC4vFiNjUQ7V4DAyTUYqusy9kt7Fq3z8va746HaDpcDHXS8kVm64JJNVfFbrP282ZhWcEFT4t5WVtVQ",
  "key36": "peh9eiYgXwBimHve3dC5XN2siDheQXzFapYoGHDbtCEJehCHXVgvhPsjzJErV6HNBgLPFSsGteACdWZ4ECui2dF",
  "key37": "3UQFeZ9b6mFURuZm1gEqQ7jxTknS6uYNMmM7wHrMw43qtBub2P6KyyzfU1Ry8KbGCjh6cHNn8tprG2bDoK87mmxj",
  "key38": "3u3L3m9YH4bQBjDU8TeWKzRDXrfWYQ77euoNTYLKerG3soiG1yn7snDajJi5AJzUVy3W3sRNJLM5LEt87dXPSbwY",
  "key39": "4gwNTB3LdxQWsEZMv3sy4u8SKJiPtk9dN8WcCwFxzbFdhyjYAtuww4rFb9ZjTPi7oJozf3JT6R1Lm2V5MoNAhvcv",
  "key40": "5ub7PR4EP65xxLPaxJX7t2icAEqd2K3TYPw1cw58A3WQ1yf4E9Tgs4m3ziVZjJap6jaxsea7xKAvHBnUeebqMDH8",
  "key41": "5j6JUSQoyLLxq8LUM26g3Y3B495k4afTvt93cApz7uuotaMKrH8fUzFZ1XEk36D7jQMpTRkjK2Zc7CruxupyhfTi",
  "key42": "5qjdSFbDhXe6ZiWKHbW3ckRDoBbZBAoPhhwPXK2MLjYWfkjPVD7Q5g5Dbc1fN1wAmADynJDHtLa8oX8qchoeoUBJ",
  "key43": "3qQ8wvdDcyQEnVZpEqjsxf4R7DMc7jPtCREwt4ezPPFSq5u6v1hvxdnrLXJNS1tX8okJHRhNLrhAqco5hsLLmgsD",
  "key44": "46FYMark6aeD7DbWY7heC9RAsGpCC7CM16SZQkK38fcctzmYYagYCR1JBcUfUqQnzTMJErZHiwnptqpaaM7zTidb",
  "key45": "2pWTZ2vk84MDxeFy3GWJ8dky1BAcNCKEEyrXtKorDLSV1UUmLhABieEHWzR8UwiMwomvM9gu1FhB8S1kEwx1WYJc",
  "key46": "3VepMkvfk1Uo89BqcTcxtKZD4N5mpckqQz8hWGUZUYp8ko6rMrqDBAMk5ujTNCjeYqyiM4x8in1bgHyaUWjWXk9k"
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
