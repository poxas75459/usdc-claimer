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
    "VUKhPNrmCRqpX1HFSZ3u4mkxuMm8p5CbxRbCk5CkkNPhgQtrDLUXT6XHH7kc5wWCGkDNuvof36urQ7T44WnRHJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9j8jgqXkDJT6sQRfoJLHqTS6xQ8NcqkHjNUvCMZfxkRYx5FhRBRS8MQWoAtpwV683ZfwYocj1TZjgq66rrYsig",
  "key1": "2S5V54ToYZWmtQdneYr1s3RySUmKZjxd3iQRdQK2aHYuG6xRRxy3zQHxAVk8bndNu9mMKFtmaoWc9kagSTSKqKdx",
  "key2": "5aF7Tu4zE8y8wiqH78aS7ZvBcTkkUtgYFrkoZktbwMrhfKhobdcbQF4EhxUKTj4yBByXJQRxnZjsrnsEu3ksoPus",
  "key3": "4AyBrv1ypYjBqwv5ai1KF3HmSWXKNRHe5WbUBWV3HHoHq8SeKUhubZcaLGGdAXUJQpv1DcjNiaRX6MwA3rJnkmQi",
  "key4": "56wQ5NGnrZaBsvefNw5vJnXtjVXjWbzrY39ZpRAM2Zn7Pvh571JgB5cDfiQmd2ui4iNXZmqLuYMjbXiC6MvW7pH7",
  "key5": "3CkR8ufx5ZdWDx9xTKt8rq4ZYtJTqEDVgMro2RK8gFYuXS3XtwQ7aDjT2Q2aHEvoELRZpwZxccM9ussKS1DYQPaT",
  "key6": "fRxF6TfzL3kbjnpSuBfYymBLeXc89E5tecLjPKButhQPjjNCSjcXSBECXJJX4LwL7gqCr4YtbYBj8mnzeMaZyP9",
  "key7": "2WHbH7toyXM4Fn2gW9uNcXz2UCmETM8Fnqp3v8BCxKAfgGigt3FwXbKJsXYRCt4ap9RF41SssaWK17G2kc2jbdfm",
  "key8": "4d5Ed2jzpAa1DGSuEVPiTigQUXhBFVZf5ndYLt92i5VJEg2fbtRjmuwAg9dx2f8mBhBNhxrS7oPNLbQuit5nJEh3",
  "key9": "3dHDz1UCgfvWD7eiHtz4SYHQYrPxwLgDLF8ZGN8fE7UeQ3Qbi8559PLkgbSQ8oU4uh5MYLCQ9Nwhir1oxVH4T4PX",
  "key10": "5tyfd4hzrEimesACyiS6RRvdrkMpxyJJZXdDpqE4AUpi48cQmicGx1mzzdePkfYbA9xHDdbKcgZ87w25TWjALXA8",
  "key11": "MW2GHYpNFeJZMdgRFn1W7XfnaQKp46Ceuq3hL49CjVfJHQiDBYznxp8yWzh8zx7vBCJ1VtJKP6y6JAimSsDcz7k",
  "key12": "5V5evUgFMjPfYanrMVP9Gd6D7DRB5dn3uwD16Tp5eXqFunA2iXHPBZnU9JmfMNUdHrtYN8e9pBegpxyMJXTooWYm",
  "key13": "56qYjecdqVZix4LFPZDa56JcPZPXeoLbWUnZXsVUqYYTeGzRABTiTahDThe5RWg3h4mxYLxAd8sQQLMskCKyPHMB",
  "key14": "5rSpQUSxbCASgdofLVPVPpAnLfsapbVxdspZKQ8nLwKs6jMndJFqyxfasptDM32arq6hJUqD6oMN6EJSrHfjvbm7",
  "key15": "4WQMZLv36Mspm94q8SxQpF7LcHCCGL4aRjb1awvKs8Utjh3hGNT8whZUMb7tgHJpcaD1QAn38yWnUqb9JCcX4VKD",
  "key16": "4o1DRj8ZzYLBgQZuSEdn8LYhFUcvtJCyUutrU7y5Sk5HyCvVcmA5TnD7Rg8tsZ1yXo3HV5FViCfvUs9RS6KhrRKt",
  "key17": "3QtubhoSPnVyYg8onyksS98spL5evDRmprmN9ffSeFK9BxESroxmoiz1Cer3gsgkeHgbeVcaVEmjYD7jG1ciePfg",
  "key18": "4FD3iyigTPS8wiHWSTQWRnHV4uF9xCGFeoCLn3AAPfPkXa5Whmx3F3X5jbnjti281HRWXbKcf7baiUFPLGFeKWvs",
  "key19": "QtTzbk7Eph33ogyRDTbmNtZ3QTivkHU6HqRCjpWNtHgdHHa5BpikEBZEKGJcXnN2H1jv4PMZvTrNVn8nUaFUrMr",
  "key20": "4fPEXMxdxQoTaGuGsyp6wrDMxetZmPwZRuCmmSy6aZk5H4aWLpMJbp966yCZMRcJfXtKw3QQjqaSsTJT5HdYxE2G",
  "key21": "2nEnMhN6vZeKwWrxMFUmuSE1jH9sivWYDSNtKivzWw9iFxJJeQ75CybTGtYd7d61X1f9EMCfmZxxGY6dA3k2Zp2X",
  "key22": "dB2JHYuaFuJ1UNcrh1uVSCwj4i2ixgo6WmZx6HUef1RuQAPQXHXeMDCG4cgipM4MDptgrB5dN54yP2disARgDKs",
  "key23": "2ry3iHUbcVwYPafixagEkWPhRLcLLqzuHLEhzj6Xoh6kYgvarenyEJc4jbrf6R8t472WerayaoEWG3e5rWmf3ABy",
  "key24": "3gPKcY5KUQG2Tzppa5tisjsHTiMDddyKA58jwPSrgTvv4BVVq6T29e17t69Avwtf1D8YFPXkWxTF26bZyyZYxASY",
  "key25": "2ayGUVrEcvXjVEkHiuunNuXAt5T3CmXhmk3i8Ct9o6i8p7N9f8X446HGjwX7LtFQcpzE4kNziiKDaZyLA839SYk8",
  "key26": "4JBsfjkDt9Dk2RDcQMv9vyZsBxVgAR7VMyz46iG3ivNb3nhVk7sfvMK37musbx8ZtDb3t7LGYc4FXHnrs6rUNwLR",
  "key27": "3HaUEJSdgqbrbdmqgE9o4yrH1a38i2ZjtpLwAqLvsUeFFTLPUWkpq15WrPWGV6eRExZKGZt7w2eBnfb92wGep41i",
  "key28": "3vWH8XKf7YdzxCsLLwhuSwAyFfGi4ffgjgbL2aCDzuS1K6ULALeipnNiywqYaYWvjigokSRUFoCkAd6VqxBWXSo9",
  "key29": "e5njDyRRjhQaV5J7x9PLKsf1DePex1ngMcXPt3ussGXYyDPKKgUhAyo1Gmxqfu6tgLhDZoQA5DKvSPkffQFUazh",
  "key30": "5oQx2CVKnFAKtQbKePMou91DuWiHdLQbCGAnp1dG5K2KZFg7E35LKqdgyzTth9iRpgQe1cndXgCtpoPZ976SA5YY",
  "key31": "67UacCWakVMEW6wLwCbcffgQdzpKFk3Vjw4ydDBnEDAYKUSFrafCQh7GyAA4UDKZwsERD7Mr4SicPgVo4aA8BwEP",
  "key32": "4sNE5DLLAQHoMZEUbJGa3bfX9BpZAAzP6KHAd2FXQGowdYDRcToKRzzku143AzAPbZA4oM1ewaPYVyeNU3N4f7UT",
  "key33": "3LHAJCPsFF5Meo3MTzos9nEmpTrnT6MC9F2WarnYDs3A6dLX6HGiDZYk6JNioMBsAP5g5cu8qxZuDkFkK3rgFQGE",
  "key34": "4G8yoBrTvCmMedYYFPRVygErSpSunRQHbEy3BQEWhgX4cCtuRHPetQSUULJrKT2i8tJ65zj7vWRTCVdkNCTz2Zce",
  "key35": "2P5HzZroYYqzX8iW3rsoDgyMXSBpQndzpzHPw33kc7Mv97wspHFP8nQS3PfYXJtY8yYeLacafXMdNZey9uug3BeT",
  "key36": "462fU2vCWrGExPyg8KoPKoReEGjfDCL7KFh3TqW4t183nxZeMScoMaZ81zCuSk45ih4aDtUDV6WMfd67K8tQyEXc",
  "key37": "24QhfUAcG94B1xraT7oMmm7HDDnq8yZp8Js2avytXRbNK2UVcrtQ2924XdDRfdthTeDoAiCBgomyZKXyL326EzWu",
  "key38": "37kTPeyo6MGNrhk2Ky9ikmWnjMcchqz73w6RJ66ttds9PCc55CGCjhb3s62tb27bzkBoi2Uh7NWVpSTXCPisFAUH",
  "key39": "4jNuk7D3rB1kCxDteGmWUBWxGSqGmBDTJVXzxNUbg987eH1A6ffkttQ5i5Ktb4Qzdy5bAtUF6qLqwjTgavMqiztS",
  "key40": "xDKBNLZSDFhPdWEjc7JpGipa42Ewc6C3WR9SMKWAeCTVb3ua3WCnhmsGRb28vQx7mGaMULay2fELVJaG8qZGjtf",
  "key41": "4Uz9zt9AvUdfHFCz9SzVFYJHXfaHbc5YvESwsr5kAre5UBnXZxFCooSCXXVK8JFVAnHCfUjSTj7koNDieDXybdf6",
  "key42": "3Z49xpuLD61mQD6JhS3SDkisqLtc3by5GzZ3qVDAqM7VNapVBxr2vBPzgodts1jpcnZXScEDTt1ZpUo9H8agDowS",
  "key43": "3ZcmjPuVnh1zaGfuxcvpHq7sQ6gnU5qGEck2Eq8NrhWpeRDoqeXVWJryYMA5zDVuiogKhAU1UwkPu2tmD1UfS7in",
  "key44": "5CMHfmjqyi1RHBfrLRHMhgRdCMxpdgWMTNWcx7jjex95Gt7RNdtAs1kiSrJzpgh3mB4vkwmrxUDtt6nT8Kwh9Q1L",
  "key45": "2PZpjdRRK2zQW1xi5jzdSpX5Zvr74aLyZYaeMiwCqiLLCvY4T9yRFTi5qBHM28xq31nPpr5wfHfzbXkgyxkW6TG3",
  "key46": "3ksMmjH7wMimtAparYEZRVNH1h3CqYt8zZ969JLFATnqNfkr1cJXip76Lfif6wEPkFCf7DqFffAmq1LAZLzJTMzM"
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
