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
    "57zx3xnQdZGsmif5MV5hGySjumZL1TcvZ3DcxscmgysB3ppTVf232CLQCNoyYeCvhwiM6QmiGuhPQYH5o2HieYBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xgBabUvjNa489NRUpFtZxBhC9Q6WUvKJAJ1L2HWuUNo282qbssuFRPhn2XSAtKtWXpkBKmAUL5hhirERtZRjBJH",
  "key1": "4BSWba6icsXYn6RmL4m8Jc87L4CofdjNqQVPbZ6fwJbnqMGBQdm6CXtPJWM47D8CNqhwy3EYeasQMFboaEzFukYo",
  "key2": "2JBMsMunTuH65KAxTe6Xc2FPAwa7yBjts3XLnXkYgApSXLoyYbZgUozbmSaU2TdpQ7oAcaWLtD6GwRBX1WKLjS3t",
  "key3": "3mdFSRNCfk5wAEG6nZctA6GtTx3Y2oE58bKZC6UXFfjyVCxokneXeHVySVVFP6RwfG4ueBqcXAbPWXw84jcc5i5b",
  "key4": "4Ea77gQCZKQWkEBBYwFevxoMAXjR9pbC2MB4B1LStYDwPRxBbBUR7mH1BDgsYXNLG68zCebrraE4ZuZ5egtrdnxX",
  "key5": "3oVpEMfGdNi3V6iJf2Ft9pPGXLh7v9mjU3PL677ytnyEFZE3CCyVqic95cZAjmEK14ra6TbCVoAHSVu3Nb9tDNqQ",
  "key6": "AazoJwEAGPgWQ4pSQ3PPdvvvwYqfqrkw7w2eZXjibsy9DvnC5aeuzv4Nf4LmTjn32TQFknBciTNudd4ecKwV83b",
  "key7": "475jgQA8LwnmkaRKSJBgwvc5ukRLY94mC39mKF5z3PkVV1TwHvEzBhi48QVHRJfXvcDTEq3zoh7mRnvtSEzyveNh",
  "key8": "34pdyoW36UiL1AnPBQCBY9CR1m4q81T2LxDa3SAzaJmbEFKXWjrQuwJAoiNfi4eaxqx9zxbaYTWHLPSQqAS2MSxv",
  "key9": "o2wFa4DbaijD82K2vbA941ywaFii9bbW5uSi2m1MDZJhBABU3ey6GkvJwmqjiM59CNNzt7vtYjp5RYcCPMusqVy",
  "key10": "2Hdg3V1EQzvwvprcLe791LrPk76m6pBPG55ZcWTK7UUgshNvESsrBFeBeVtfWN6Pw6HY5FiyXhaaqzVEWt7eivJz",
  "key11": "4VwVWmeHBqLW8D1GLat8GFfAbn7PkeGxdbsi4K2NXVNALkL6ffavW6zYxogMY6kJbmj31vkHa2Ueh3zHBRR3qFeL",
  "key12": "3LrZJDsVouePs6Enye3p7gnqWTrNgQtXVYkYwAxNifAJiu1oSFRPHn6258yPNm5pfL9YbyhNiMEhvv6EjFPUciEa",
  "key13": "P5PbKfWtbcntU5X6mCo3JQP7QppEyVE4E2SLaWsNwNWQHv9fb7mNTWFT52jGmrcpw6FvvmxZjmxuwg225P2NsRv",
  "key14": "4EgN7g4CyaAAXwrrwQ3VBF8Dv16SfMHsMk8eugKkx7dFc8SHf4otiRYrhwAkAbh2ebXoRct3V4paJYFkwu5dHhCn",
  "key15": "4q17RcwSucYYb3qpxwcAmbFV2r9Qdw51C8eZTPnQMX6A3KwFRKDMp9qc27WfZ32qkQrYtiy3D51QC5fczszn3rqZ",
  "key16": "55KCy6EuZNdrgBrHJXSoqjVWdHYg7xKcLwHGFoaT3NU19LW41qqvpipSXqkWYgW8SvbhctxhEEKZ3dPkcgpQfXq3",
  "key17": "gWSScG2rY2hoAZziY9knANxMgWQDNjrq5iWF2fTS1dWR4wiJBZLfWyxD2bTNhr3wvjoEqcwcjFvsP7GZZynmgYY",
  "key18": "KnXVz9KqvcxRi9VXwoBeMN5NAPuk2rbwxrfVaJDgxosRJKT9rahFfWFNLrfWUBdaPngyemRfDtUviQySiDzNMgA",
  "key19": "5dA3PMrLjR6y8oVthHMWDSCqejsLpq33Tue7EUCMhWZKkoUAkkFSZSF5d2sqQ8BVs6KKXzmrXYKXh18DoY8DYKj8",
  "key20": "28ggQ6LmbzWSiLPGCrtzGNkLzLmuQvVGvRBZn7HskVPBZ2UVq1nQNQJmP583zNh8ZjuygcHSkGPdYjEijhweNmqQ",
  "key21": "5CP8t1qtqbBauvzMpp5CsKm3arjoWA2w4ojBA3QFZfZ6GYJGJsMaqNS4V6xe8qyfnvVhFDALfHLhm298mom1uNYi",
  "key22": "EDkfSA9N8QKbHnQHSFazg5WkwmYPvU3HB9uJ45mvGA2aAGbDEK2UBEwHyMSkxo732btnCkZQSTb47oj1e58dpkB",
  "key23": "V9Wsd3zjYTWbTcHwDBw7h3K1BF89PaiEFQCanY6XPWzqtAWGSoJBagzyaf71ixMUkRM8FPNPsMDbmiN2fSVaGMB",
  "key24": "3hiAHmttZ6dVexu2He8YSdM1du7su5kKihUjHHQiAQ9Uhp2SYbSnougp5VZzREsuU8eBS6tZ2T4gr8vTJrh1f4qj",
  "key25": "5n3EwhTyEwve2wfPxK2JtVVPJFhYtmY3XMzG18ronh5cbcZERfrDLsCh1BAQc3g25KdExGgEVGo8bAA9BLUUeD4a",
  "key26": "Ge29xJXaSoHVWtGZSCN5tgUAL92ZV9GDQznBeXAxJnQ813CNv6jkpaS8ZX2Lf9Z6qHYJbc8WynGWrF9UCG1yzwH",
  "key27": "397a8FYek8PXjYMnga7ZTS4MzVCX2hfFpZLoXAHbA2Cch4Xg9Dw3h4VEhBUJjgxcYk6EGC4FQEvqkMLpHhWb5q9L",
  "key28": "54Ht1x2vNNvchcBtMxdYvxFXjpriDgQa5h2fBjxzYEfsWRCySUdz5FWrnpLSDWWLWq3ZxdMKcfKjMV1T7taDVzr3",
  "key29": "42Mj5DtgsBFf17CLCeZBu5wuFGjxyz4FnbUekWTvdpGt1Z7GrDiBuxu7vn3Xmj5cnzy38GHdYkaDzf8qnbYDbLrj",
  "key30": "4YnCcW7H5eDQCgrriwVs8kr2qe1igAtjGkP7t7iMtDYReU2eqCdNWu2A8XhLhDH9qJTsHAQEk6tnLxppDDcR8vns",
  "key31": "5XikhqNKX8EaHUtm5XxdWmzkHxFeq8LizMQemy2CastbCYeNaDaw8N8a1ApgFu4p53K6DqJazPLSai6cqFfpYges",
  "key32": "YLYtVXbZqEMtEghYQhFKTorCHJBw4BEwwQkvrTwHEdzmUxK9xJJZHdYwNVcNqMY9uQDRFsoAJYjAjbh5F9sgPmM",
  "key33": "3zpwfmzAWK2JPvrnUKqGnQWDNQghu6L2kUocTAkSN9DbLPsTwx8oU7FDBXgVU9dV95izsGVG4rGe3UDepymUt6R1",
  "key34": "Fy2KEhrVkGyymCRdwYpMZmE592urQA7Wn8S7dZXiDQMkhoK51TALXpdyyKpsduBXAfyyswtPnDt4zTUg2A2bkuJ",
  "key35": "RNU5MUQcoEGu1wma2J6tBWCqBgAK7odvgJioruefEAFLzz6F5PvWyzGiDRUCwpxakv7aw6sdXo8fQjiup8t8fX8",
  "key36": "5rs7BstZP9wtfpCcY7BCBqBwbErqpd8e24TPHndirvYuScBWkUYPba1PSDGqSZ2CGoHk5VraHrjxMwZWva3s8J1A",
  "key37": "5pTiy2aWaTn7kwAaQqvoV6g3uSNvB5djbzRtgS56iazTPiExPnqnPAvspdw5K89BgLNXg35e45g3D8rm1JnckCKp",
  "key38": "2m3RvAFr2VCm5prKF9XZ76WenterapkJNRF5AoJa8Gv6Rqi4Jouhq3ZG1UXpufgipwmPKKyeiFQek5EnXsspnXLN",
  "key39": "4xJUYanpNAQVJPsSAca4kitt2QcXhVJdfwQc8u86bgud6gWsB2eVnpXVwRVyJoAfuA8E1HD9SkFTT5DcBtNSGQ9a",
  "key40": "5HY4a8iTAyhjuwXgX2vkJPf6Ny6mxpBK8X39rR6UM6WPmAXvQbHFE3kKpzg144g81T46fxKVoRhK6bR6ifK7Rmvz",
  "key41": "5yCRZMmKWRmeawivMbgApA9AVffqZHYGLzuEJ9c3x37BLj5upRhEMajNgSPvMSBFsVZfW3MkqLEdwsDxpkzCRjcK",
  "key42": "2rAR8ewoEPnyy55zF5SUnHfD35dVBJqAtHFDRZereT8Y2RE6fzHpRa1RN4QoyjSdfbJWHNz7bN49xcdJjEe7FgjY",
  "key43": "p7i3RurFhiFBuFQQEfdyHt8paRgvziccXhzc6WMYdcWzhYAZz4bWyC4AYoh9muJnmkKebAdi92wuZPf1NHaMfdt",
  "key44": "2YDiUKiMtZYcyzNSuDXpZM3ENVWrNeB7FFcsrQm7Mc4StvwNrgL2EGkh7wHr8ekoH6qGcH4g7XKo3YUoJHZgFcLi",
  "key45": "26hceCGaw58xtDcyjzPRdt1zVsKE1ra2k8JDBjoe7nSQJJXiqtN4Cz2pejefmrQSQAEWsWGmLJsDKdwVGRjAyu5J",
  "key46": "2fjswT5Q8bk2DanRkzsekQNvzoNBNCGrtPwsyP2CY5gZCbeK9QhjNh7hU8GZuLqyHxJmTk2aVFHj5RGLquMWDZeH",
  "key47": "4awWmCxyrc1KK2TEYScA1yzTt4j9F5BSyV69C8Hff5tbRXdtczRP16iAJq3B5Mm7UY9dsPt194iTDp5MdK918eM1"
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
