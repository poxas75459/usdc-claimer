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
    "4umYe773tgh99bogqEuinpK5orkizvjxdF163s4KhPQCTXL9gFaqtjs11qeCmQeZseya6NRGuAm6egPYjztLAZXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gBdDYX4tvUoe1hzd23rDt5zrRBYvD5WQSJhByMSbcj3myrtHa4PaLRtNPahqXBGG3S6QDcrpQtMHCRG6sy8arNa",
  "key1": "4zNGzsb5yEUiFR8uihzqBRhU7aygLr67XgWvVnDtPYmK2bqobJ5yKqJCgZgmwCzDZVQqHrgKo5zdrcSnexA9ejg7",
  "key2": "3CiCLJNMYsPMNP7KV2WLZ54ZodL99nuspLG1WTmbJwYEndFidRYNv73vSMUoL6VTshRVzJv9r3Y8uqnzzTuB1jFn",
  "key3": "4y6DppVdkWhcNe5Lg4LvGohRWNrLXak8ZYSq1wi3ZRHabz6b9LWDpdXzpwrcpqaiS1MSAFn44uATtQM1ab2Jyyyv",
  "key4": "3cTjHyjDK5V8DWp2uVYyjDGdG3KZWAoJLLSdtPZXsypDTd21Z43xAAKMv2HscBHBARTe8tz5wRfmWb4RfdyZFgF4",
  "key5": "5jbq4XWZ6ntmV74LYHNvapiJGF2upX1BWUwtvk5Nq3HXbG98D5uGJw7ZGPoAr7PJ2Y3diF4cFzxMEEHCGKEbzYKd",
  "key6": "2pxVAvZJmpkkBxGgTn6yqrUSVMcgRzxY8pH2PQfFEBceRvxpQxFRXGy3xzXyJpd5KHVwGiT2aALphKC7XiL1e6wj",
  "key7": "4Us61NHR3JkiDmFgScn923yA3mAjfSL4sQX8g6VnmYepCfRn1RWRn7YMJ157bnaygVRSrXJeVhQkoXyP1FPWx2Zy",
  "key8": "25DGDdJewXiCrjMUuoYY6sTuoW4USazsgKLFXNnF6pTFASPvgqYG5qKJsHMb67KhYoec3ddN1T6F7psE9HvKiY8Q",
  "key9": "3kYAp3EZGXMQymmz5Zo64GqnTaYQuwCC5CJ3aQaca3xqJRSBKRZ8oyqjHbfKMeMUwtzPXvt5r1shdKrPEP9B5M8i",
  "key10": "3BGD3DmSQAKaptgP9ZRdoPZZU4aorUckfiRDDT7PHf2iN9y6nn38zxRv526bjegTGAsYE3kRTJvmtoNVrBf4vmZ",
  "key11": "47b4RNnuWxoX65BxmgbqcRLR4ndCu4rQSrXNYSsk4kEC3mGFWeXaU3E6AjEfcr9KaqM1rNNYhU28aNL3dwmKpQ3t",
  "key12": "4PrAkNzoBxfrbeHAPcNW7i52x6qo39TXYMFSeE3wN4dtjLsWSnDRPyyPpz5Jy34vBkQsoeyHwrWYwkEZGeDtmB98",
  "key13": "78FAh2xJh7KKwbeB7QNFXG9ng3bPYyFqvkucJu4dsj2nT153HYQLsPUVPPRFdty257RfVKHKyYHEaEngtrgsrvh",
  "key14": "wdKQDvNHte9CW11Qbf8sW445qQdWUrXrztpTsdzqQXvq1m2heS1gaVwFHG4VwyGukSJ7FvSiNroKNxEcpjCRZus",
  "key15": "29Q6wKLpze3PUuRVFPA9Hw3sjQ5Xefk5SA63vAaxNWVAFkD2kVzXoXyyYiazbEJcJ9GTyt81yTDNjPiewRMHZwcM",
  "key16": "58UbqrjD8KqGFbeTYBf7eB7r3k4detJsQMhwvRvLqFo3D9SYiQMGxj5FbkkVw2iSykUNj3adC2jjtLAJLXFMnhc2",
  "key17": "3tDrvx5PrLw8BXsP6eNp2vthCMhTiexh2QisNMQZE1Xtf4D1xLC1uajiLvNzGU31mszaFgE9GMFtckg7gUiUosiJ",
  "key18": "39rHUYVYoGeGK69N7dAyaes7dmLitYgziPC5HGQLj4T38jnb4RAPBaKD1j8Ti6fFPXyx2Q55yEFUdaE3wod8Die4",
  "key19": "4WvojvexK8KfDCwbBffMtTRnWJ3EmyRn3JNhAA5bSTkvSBP8k7FkZFFnJF3y6SN5xBURKv9iynK4tSz6r9YJcf4g",
  "key20": "xDRpmtUJXkiT8WjRz5mN2gEAnPhyooydyNm8Qu3ikcEdvxv2bjzeoTWUDApKvdjM4noS2GL2SvHY8RmuN5YryHr",
  "key21": "G14D7wuDUgnzncSFRC1FfiRUDR4Yk63t834xBSEnbYDGQK6bZzzkFDS4Np4oisicgRFWXNsWwWA2iamNPCbdVtB",
  "key22": "2ibr1Z3MYVfiAhU54gogri9jpnMac4jRmzmS6DsnAxc4mPaaSHPEBHa2TrbBcjPFFEvwEToBT6cfpieZb93vnbWN",
  "key23": "3okEdkHtfsHU4KWRMpQscgrmAaosjm6vtxdG5JYsiQ9mqpfKQjsBZ8Qqeazz4qpTBN8UABPAp2NAoQt1uthtjveK",
  "key24": "3P8k5ga95FLmQ46LwUdNJvYPvUhr71FSoMJ2i8wDZ47jzAJETfzcV76Dvz4AAmgkLfYppwyujRxkZYtLtyk3Wz8k",
  "key25": "B5ci3z6ApEA34unibryPb2GbE7yJMHoiYomWx8JhDmBvD8gU3NwScLyXJipEFS8zpTLRA9nmhKSb3XDNhAg73iW",
  "key26": "xTPU6ndXLTvtzehPdxjmeypQfVZQ8Ug4jBjvjCKMq2oo1dLcrPUyF2ebQ17ghsXAe7oDkyPM21w16vTFDB6gABd",
  "key27": "S6WEaT3M7Hv85yKmvPYBfT4X1s15gKQQwfLn34AUuayk9wx4DucZwnEdQ5HeWiPyKagX2FTkjMLYS2WiPS9aeBq",
  "key28": "2bkFTLrX1PjtnFzAzBmvyB4fVLuGNVoh5ZeaoFPzK5JHYur8k34Lmh7MrZFBdbN7sQ1KmC8enr6n7PaTTdB15XMf",
  "key29": "4PPjQN7JdqPpXu7VRuezG3y1cYwPNG7Hjai47u8U9ttx7TuYwdowRMe8w4Au8f4RkCvbg5uzxv9XVUtU8Njbvt6c",
  "key30": "2vhWP9YYv4pAtAdKtuv6JaqfPwLZkZBTHUGnXBKxsh348uoQLHGYcx5dzQM6fqSsnHt1heD8p3oEqF2TutKjkkjh",
  "key31": "5eqdvAt8KEMxFmQcu4phcGyV78tvTAQUdaQkarQuXup694eNvhqykirxtjYgtHw4FWG2CqsdoReQyqTLAs6XYUsD",
  "key32": "aC6cLBPxgzCcJcZ2t9BaoHMqSxBATT4hcpJpkdHRhHC8H2iPUuKAy86vwBZuXxdQ1bm8izwxoGDtM4cXZ2kWexd",
  "key33": "2CQeVhaXMkzfTyhBq8D5XWsbnZXDcRoFrX9y3UAqBDCSBFpCSjdphifQcdYf4P21kwq8aezdBEXLQdkeQKfgFW3V",
  "key34": "yyDVmYeAuzEBpdAoZQi8SM4hSwrBgybnR94gK6rdNgYf9PPtDJCkU2p7vzJzsELhxpcHkXkvUEZS32pgKdtLEVy",
  "key35": "3XijR4Nq2TmPukE3E6guvx4PgSf8A25zwvFW4yXwsmYnDav1pqHJyVXwFH33EqYbG4eMQ7ba39XQbTrsAH23Ujtd",
  "key36": "22oT4RWbuGfWt1VEUeWWZ9sABcTWnpEYkjzgUoTMA2DvEcEfzwxNSzDC2QajR3d5ZJ36oiJbEMxmeyWY8BUe2uK7",
  "key37": "2WgkRA9Jzt19MX6FHN4CqTscyaoM9tBkTRNXS7LXdAbXdt33BKe4238U9FWSpT9c8yjXatwK5s8ebo5FJQeWWguJ",
  "key38": "2iKKpcc6yJYvNk6qtUSU9C9AxcJ6j2RTVCFedkdjzDmDzyqoXo7n89X1S1txRRv6g6QY1KaEkJDBUT5sMk9ufgBw",
  "key39": "5djgiuebkRVKwAK9BrCYPpij74A1QAxQWNJZ4cvC6RwgHXMSEmRoaEpwGYUt2Qe6BTTiAHUPf69VNRHkhGeEKt4U",
  "key40": "3zyNfeMh45WxNzna3EVRrcSxiHC4G4R7pETSh6hLjLBmHRuqgrmoaxHEH5xyxjq9n6b7biV8ysGjhqB1KnjcdPAF",
  "key41": "5yzeP4MH8GvaPd4JqZVpxPLb2u4uTUcskxFHSsdVmLohkRMuRvmMyHXAVAsNusw7vwemQtHDRpSnQThwspiUQDxt"
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
