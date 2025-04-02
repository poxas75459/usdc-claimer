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
    "38VMbXYUuPkKMtN2pjhMuUhyfijjetbuSciAeYJmKYNNi1vSHex5zV4ZLbAvDaKPzZJsF1wQTk7yEysjebRf1JDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hsYG6QTWMNVZSfQSYijYBpgnrKTMwuDqLA7PNRdP6C5H8A2fqMt8gv28YNRWWoFrThB4gSN4zZoDdtSVeZGwQLf",
  "key1": "3BgtD5SsLRnMyyxUhZyST5nXwhf9F6yXB9UkL8sUhqYNgGKnHmAmTapakABPDhZJkbC2vT8asLFpE5RQE2Rg9jc3",
  "key2": "5eMSRL4hnrtEyNTzBUnK71NHWkK2hXWenS9wgovP9jZ838p3omoy17AnBUjtxBstYfF6ciHxHQu9BCMgWNs7zpmx",
  "key3": "26dRGx5fKKR1LpwScN7SEnxGFxxrxzC7Y5AqLJBnPJcABEKbcLBChdu5bUpV1EyNvcKrQJKttCqHEvUAYKpgpLNS",
  "key4": "45gqmmFBej5NCB2Znc4BVV9KCqoqZw71Uy7gXdM9PQUCrzNKMMwQigysd8PdSFCPdfCgjfUirSxdbmnDzem8jDwj",
  "key5": "2sF1uSH8DKa6XvPk4iKsZQ5EQnpBvz6urDfCYLboSFUgsTV1ZDAYSGCkBEwpF1zk1JkrcBhQXFGqbFfjcrr2uN2K",
  "key6": "2TEeg3dFs2FsQkkpQgrZDhgLPHFLW4nZJMRucvJ58N1DkfDAED2qYqLTnXwMyzvpb14pzPLfZEEjc3M4hxXDTv9W",
  "key7": "64a6e5V5nKsHon5fQWBKqYrFtfcXqHycNhmt9RXGvjqYQBrEeN24qq45eS5Zt8tSjnxj9pXsCxEPnFsHVybkY2Eg",
  "key8": "4DiRGe47M58Fx9cTcta5KAGvhFbV7X1EnQ59uZhX1jmCDQazs4MNnFp6HX1dbchkdBV4n3iS5kubx2xCVBvL9UrD",
  "key9": "3XBhV23pLwGiANmaXZg6mZ6HQja6uitAHzo4Eyd6sYtFCNyqtWTVEZNVn1AV6KApqQv4JeSAASjXtSXkyogd9XY5",
  "key10": "5JhQ4D5fYavGuy5gG6pj24PZSSvmGTpb64PVkydbs65pQadA2e8ekQbF5wzhGaMbGJjD2BtmNjuJb9fKkGPS4CqW",
  "key11": "3Cd8LvYpmj7X1WEUmaqZ5Dt7kn8zooVZKJ4CZnS3p7NGb3fLDoxUKK7RhtuvYC97vJHc3nZdUshsWJiF7QHF4fF7",
  "key12": "49ZovHp4LKUuc1WWfn1Zpfm1dDrXmPZ5MN32XaxqooJ8bospBkMJAo9txZCKF7DfafJTojNUDJcv4wcHdDSfwNLW",
  "key13": "235BLbd4uyRtNCuPAgXcGT9JArFfyxQTQGYVMSFvoctaRoqFJcB4QscLLk8TwQ2JxDv1vuUY7QqdWw4PHjQuB4XF",
  "key14": "27vYA2t3sn2JBLyK7sRgXspi5iwTVoQynngc3SYyRB4GScaTZX1PqQdurj8nvCmdLHrphTcMrBxaDUsJ9VGwEg82",
  "key15": "5N2c8moFBu5CJ3kXyTCPj3djkEFrgUsqbh7ua9NAgedi3gBNUU2Na3Xb66YDUZNiALHcQBPWHWXsokK1po7z1F21",
  "key16": "sPYibXVxSCFF8spXT9Ed1BmZNdWHJ7jW4gzttZXAokL4vkYiDXnSKTsJEiDcV5cb6RihKuVTBk4aLErpaSQpw5R",
  "key17": "i6NvuNehu7pU2Bg2cQYkHFVcMs2Yu7m4ys4hztNpJvaHFR8mrGzH9GsSnbaZQ7bU11FaAHAp3rB4VwXZQKZY3h9",
  "key18": "54qyunJcpdeYNV1fUJrtURVAzMKX3zkV7LNJQUbANwBJBaVK7ivgYh6y5rTVFKqrYJzXWEHa4SZ3TunJcJnWErL",
  "key19": "knvzjB2DJC8yeJxQDtZN6YQjLMWwf8C4N6cjWiD9uS8M9uuJJsy4Y9Eai375H3iSW6nS8uSsztAFCsBEvjSzKWX",
  "key20": "4w84CXTG1cbYTqrA9iGZNaxmjfcLCzWmpktosmZfz9KweG9mkNKzQAYxT12hShMfWz4YEZ5EVdATs7Vk7LiAJB5v",
  "key21": "22NepbFUZ61mTtRdQJPgyDhrLHXeSN8UuLrmwJP1GHKWRadZViTHzQ4eYknu4wjdMcMYxkzwpb2WDn1ZDvNFLuvk",
  "key22": "5DLJeXov9TGxG6cusdEXvaWznijrqqrSM6MZrjpeVc37jRXqE7qrRMgYTMM1wxWYsgzjJXS7rckCWbZhh5STnZcf",
  "key23": "4iaSLcHcXvR3ZXetG8EbKyFidMRRi8ZdsQefKcd7XbqHT7gDLNpv5884SQFnjVtZhvZEDNwdNkYbTHw2yTR9nFDS",
  "key24": "2GPEGBj34jNxoAcmUCLMpJNiYgWoeehufaqdXm3ZcMF8DdF17bizDEoz9gkuRJHLwHNEsWKZ72neqTPiLmo2YFFE",
  "key25": "fJv2zfCBWpP52s5YhA7cNAwbgQxCfCLFhjUqe3RWBB6T62t4J9Wi7CSCaRywALKodk8LNcjsDyzXfUs4Sc3Kzyq",
  "key26": "3vr3ohydyCV5EFUz3QSaCxqih49AboMZmhzLEmMwff4gkto3E1y2tKdy6PZSQcxFRPPbG35yg6i2UYq3d2zzUaRU",
  "key27": "3GLN8uYjrQbywH3iBtj7p4JozMKMjGX2toH1NKHW7NfCVhLp66X9er1nN9yyDE4ZuBsPQ2QcJefkyKBP85ZqUcdM",
  "key28": "3xKLDDSiwq6LmihNuDZWrnP9ucxripj6T5ZaTNJZ2PwD1yXv49HVvnfisBnvL2mBuQ22uKJhYHQbfbu6WmtwZPo9",
  "key29": "2XrPBWHZPGa1UaF7c5U4PpjPmjdN4KwrdT9m1w8mDkBvgFV9EtxikjrWSkq69jsBg3NEyqM7waPVDzqbBxYpCFGa",
  "key30": "4G62VBTbmnC6pKstm1HdB8WfuoXqoyRk1iKL72gpkFuc8XHa4LBnF7ChnM1HANhRZMGL49Bkb8WWKC7ByZg3vsFV",
  "key31": "27zEuMrtHYyRBtmUwRtDYSx4Dq1TSW8mNzheWbhbyoUM3Q44iC8TwejkiovRq4Lt42nhpjFER1dL4wz1HhYSm9WU",
  "key32": "3GHLxvnhxw72QeULiuLsFTLtRj35ytd8FwLtPM982CnGgzKDQDpB16CCHdbfG7Wp3GUB29dUVESTzRpxeuzRaZgi",
  "key33": "5bSP3WaqwK7BbzAbYsLKYvpCyK7Cj6oCEHDTpPeXkewWtz4b2vjrriaeeiP99p3Dmy2WpP24fHJ8fmhrnDQEwBX6",
  "key34": "5fyQLH4ogiyoE3yyPboTCxGC5dRs8CFGhaTLQKBhh43zWoHboroXmN71hR89mUCqdarpV59KUcCCXHpMxvynbKmM",
  "key35": "4NBTUdkpi8zeC7Pw5v2Wmf2hEezyB73Vv1vKBbyd9Y8ZvWaXq4XPPi4HzXbLJVYgAXUo21r2JLpyANupeeXBqZL7",
  "key36": "Te6NUzDqfdH27NG95anpy3tjwWqMqKYuWCmh48CmAfnw9YfaNf1KvEBtLDB7ibf8cSyKshCaQ49rkizjrf5ndfJ",
  "key37": "4RuRKBzhhhRf8ZufNGzKqwKtaqJwnwnxeJk1jUMJau9UR4wSFrnChwHotzTtY3wHoihj6qaYycjU3rjin5rfieef",
  "key38": "4fkSFaspMzx56Rmc6gBYkkTais6zymhDCJBeh61QtW7vpQBt64U1HZEYyCnBp5gvg1CmkrGuEDaocxUCZFQyw2Xn",
  "key39": "HTcPeoE4dN5crvVx5CVw62PuY3zoaStSagAaEFvNCCEoDAAYQWjWGKyPtJVF3dgP6vF6cEJa7dVCnpTYEEjaLaz",
  "key40": "4P4HkAr4cmX8vrJfhyZLyn3Uwhh6xUoFo4EvW936dVHpU3n5yUHfvUfDeNREWA3rCym8hoUDmSKAfWYc9HDvArJi",
  "key41": "2JsRhPFqBiC8eLK6oLqeoeeG6BNLSUFvdTSby9bhNcumsFfdc9bkxmHcaKq7h6v4w4Boy4cxBrieW9rLSvLfznh4",
  "key42": "4gyMrpVQcCEBuA2SarMHgmdwuh9W5yGTy5EF8zZEDM19HDUq8miiKvUjvEH96aetHHMzPaYasWi8eGLjyfHiNRZ5",
  "key43": "4B1bYp56XhNKGETDYsi9mvn8WjYTxAGUKrjkWW4ELouCv1Myp25LfuW6RytoJYAzPzzpydGFNAFvX1PKpmW5YHBy",
  "key44": "4WMjSxbMdZkJ1rFfZoPPZtKhqTpubBSrXr4H3W9CfFpoDirJXj6suj3gXUEb8DGXksMzq7HsoEtBZtach3biFarS",
  "key45": "59PdRjhfpie3FRbr1My87WUyNJREvJjBwTv7dBbPZaNEvTJF5c1mzrGJTSdnjUChTLV1ZdXqmYJNDU1MTyEpLobr",
  "key46": "4LQ43uqYZnDifm2T75aNjgEzroe6SUSz6HKQCmWwmmPo9NA8ykRhGje1Vg8iyx7uVKnF1WrNtscZ9j2WTi2sXmvu",
  "key47": "5UAS4PVuyceEhwTa6skbjp1VKT9idaMsaPCpUYZbFznSy462j9g7bU9LjWasfxUqFicwMSZc7YXCFUgnJXXDM3nk"
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
