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
    "Xy5CyecTnDk6XRHL957QCxjmrtx5HSH4s51HjJdK6DD2ViP31HcpDcHAhDBExppfhNcfKrRjHA6w2VnPR195Xaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T9PSATWqKzorv7BAgijFsq8uzySBxFjcYMKLMXoT9Fyhh8XjKJTF7X6kDpnhkbNLwx8BDSLXXp4QnE7eeWs8YRZ",
  "key1": "RyNNN4jn7PEbkkfunaHSXD1DbVdWtEBzsFoTdtZAKPFetkdt1LHsYAzyDZnkKufVDVHeGegMcCuYtQoazESyFDm",
  "key2": "42uXtCTHs85MfkwDTZNWgdJCPk1fSwxb8sHmr6kARuHKxd5d41YpBJsCz7hsYt31hJ7mV89i7irHrjwS7i8Bdk9Z",
  "key3": "597EdNzvLXyk4hurKNDvwP6ttcEYek8WAmViREe8WTvRuFMym5dTBxwiom4U5YiuN8i6jFDwp1zw69Ai69AqMbWq",
  "key4": "2jDjAqppYCd985dNi2zKXtzRp4xuKDec2spN5kcbSeGLk5sg2oNLBdpqgvF6Ye5Zg8pNE2syPgCHyCSzgEbAnuGx",
  "key5": "2u8fmpfwrTTfZsLfskm7c5iRBYwuGTGfuKKuaZ3Hn3VodmU4i9cwAHaEMohdVhWqN3ZRRhwVW22KUtbV2Vs3bXUE",
  "key6": "5kLp49w6gCFBnGaL9uqobrWC81ah1WLogbVzc8Shb5EW85qCeyT3Jswd2Qbp2RbP88JJ45DG4wCZJDY3FMZJ3XiC",
  "key7": "XFJVT8ZtaX6k7Xez9bm7GZZ57LpEsvKKuEMnAZHmZfYArJNBYs35Y4cfuqdwCKjR962SpoAWXhiGqPWFFfeDXbb",
  "key8": "3njqw2BeJvjLLHLNSJQLWAmkY2Pb2UMWPfmGWQPCoxsvDhvYhDd1u3mzgmHc2NyqKMkCj1dqsTZ1Mg6mNjozHorB",
  "key9": "3PcAGUHiEHyWUH8GDzJBrTYkvxoZPjcdFymxYdHHuuh8zC71XgmqYTg8JgBCa5sqxmkq2nGD3eRDkFoGdmNqUMhh",
  "key10": "4icKfFHCmZS8GhvYEuVBJ89zcdifo2cLWQAifa5dymtoTQbeCogQ6DkhsynFjRz8cmsLJfTaF4Fxczk9LVu4ypjn",
  "key11": "5pdN4ruaMzNdhJqRoquekkAuWKsRv912tGyqndDwZNjKbSWj8oPaUNeuBDQjenFXVuVgxLSYimowtxVk8fC2u9An",
  "key12": "24WocE3VBN5YuESLnhhrbRrHRDGXyH2ztYR6NJFXoAQTf92GgdyBGJpVtuzEQfLmem3aSGdyAsYMzK76pxBitNJu",
  "key13": "3PgVMT22zHskdC9W9fguEoNsB1xFhnCfk8v67n8B9jRc5EdEchzWyadiAyMSZJVG9fPC9XQXo8kuCgKqPFETG1aq",
  "key14": "4jYFP1ismVxzHSKqeCrsAXmZhT7n8MRov1mHygVwrrbhAyYZCNX6EfA2zB184gVZad9vDq6wGHARvaRBPNU1sRjV",
  "key15": "3sYxdhsXuWzfkW3DxdymF7UnUupzVmvithiNkB9YP3ZhQ6YCHZ74G4RD8BigdaeT4eBdAAGy53hWNxsk9Y86UH6T",
  "key16": "45pmjaEzk4tLKA8UwrSSTxrAkyPP2R1PckRyDrNrJDJuoDy6KZjcBJqz4Asrkru7VFGmzsEcLw6B5xQGRzjwovZy",
  "key17": "4FBA6QS4spZKhLFJxxfnxJgJw273KKWA2CX4RMbLwtGC2JaE4g6TcqJynSHyu79NL5jFjAPsSMG3hUnmRFRoaQyL",
  "key18": "RAccrEYLvEHx72y5dZRGnkJzwaSvkJrBhSgzR6PTWQqmRpvGejgrkQGcx6RVyiuqQPLyjNvw3D6V369jWH4X6UP",
  "key19": "PMLGWkcQo4b4GqgshjcZnXZTcbDD3zWKhFdfdzEKx4VHsHan9bGEtGQc6HrKNDbDBD5MwArfzTUDQ5DfF5QuVHf",
  "key20": "5EFupi736jPkTyHJ9uxrjSQLiMAodGSHtihq2xf8dGYDKrtsLh7UxSx89a4WXMr4vxmp6jV3M2wH1LXyoaCuvRh8",
  "key21": "4gBJ2HVMveH36WNjwCH7WJhBeQwZPrhLJge45QNNZyceRRRuDbbbNsRvbMnqbYq34amqAxXBPyYKjRyst6QTrn8n",
  "key22": "3Hf7MWeoia4u9zzf2QqYG3219dMzd362SwYaDTzjeYfrgZH8NC69eWUUErk9SBCvgvv7jFgjJW1RxieAugN5hLj6",
  "key23": "RVJuicPxEt2PAAZ423Ay8QvziCLeY8BAgVqSuX2ypqtDHsdzUUtkDPKZjYXDeWCrnZhr7XSxBmnypT5MaVqpJA1",
  "key24": "2DEcULa4u9NoRDcdbMd5SCVSykv76h9Hpc5SKE1iFGAoiKajo5Ej2HSZzTmur9dpMW2S8YFwo2iPGJsN2cL1GXAC",
  "key25": "56553WKPaibf7sDTmuit5mDEeuCAsmRTAhRcq2Qhs2w3mQe3q2ZDyCJfBtssQ33U7QPgaKzfBrGnB2QPrkRWyHZf",
  "key26": "41jNXeAwNsVteda9b9ULYV7dK4H6VxZeYr8TKnhgZaWXWDzrrPWQazJmsGJjmwF22b1EEXb8LGKGnUs1GvyLn9oD",
  "key27": "3caCpKBHb7t7eqeVHbN25dZXT4wUtQenbJ3GqXFqFtemgCXqvDHg1zW8tcu896Nf9u7uFFwCyAWt9CuYdUSj3DMb",
  "key28": "2DshpWjiuv2uXYosyEVRCzi7fGfvgZtJXiWen5FqtnbMtqjm67qbZ7XpaquMhGcRYNqq2nsLgvd3zu56EKyRs4oo",
  "key29": "3Fxxyc6nPQqaNF7v1qTzAVw77Uyt1VgzSXvjmt1ngEcTGKqEGG2XH7js4WCmXw4V9QV9otmX3sM2UyzvULULwCj1",
  "key30": "4BSpnLT56B6x6HZdi8qfP637pJz53ypUjL2jxHwbeDv6djKC8ViRaXSNzZjUrHi2nvYkRXjA3Bp4NeGwi9vLEPSG",
  "key31": "2vriaune7seHnfZxRfTpLUEKaM8KK5XiGow5u7J7XqKGVjxK1FvW69CPU3hjcrCqtZqKMJa9LrwHiTgZ9hBmjARx",
  "key32": "5WsXDSHYWsGJDGYtimLMncSquku498XxWp4qKiygm6AzA6f6qmNQr1MdrPGrLo5TpdcuTBBhE7q7A8DbqXPFPYzf",
  "key33": "32dKgj9ggA6FFAx8rGaANs8m4Miu1cHNTMLeuuPNQZcqmDby9iKra9X9eujL8PMKceDw7ns5o7q4QiHmfN3jim9p",
  "key34": "6mWwyFSYs1sDNdD7ympkQdTCsWKdtmYAwmhZFjEpZ2G9hyS21ztGyFmPnXgPWELqLkusRU5tiMmVtXMPGH4Qtqm",
  "key35": "2yroPBL7FTX5vbnnfnbZFWAtEGJSnJGdruuP3HGto8ES4fWnxh8GhG3PLJ4ytjXfGaxQPqi4kc8vGQd5esdGrq5u",
  "key36": "3HJxeeNqUvPLRbktE2PiD32J4zC17KDBeFfTci2ecBao95X3SkP7awktdU7dFzzbLP1gLyF4sxXsD2SJLb9etPw",
  "key37": "4hb5YBpJeqWoSnrXW1fvtkFWDVjygrY33x16Acv1iUnEhRaeSk5hArotMhe211yfvw7st1ezxPzSwuQ6jUCs6JQH",
  "key38": "4eYST1BB3PhCFq35d863EV5UsuxDDBe1g3ftzVAVUC5YXmiDX1uzTZ9Tr8QHd3qAuHtws21LeBYmfSdAWkRJmZTB",
  "key39": "3JGqfuniwdbRqj2eRspBgp6fdqrwSWUPyZajUfzNf1ssdX2e4wwqBxQoyGhTWBNtvmHKshYX2ZLAW1B3uqu3ftmV"
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
