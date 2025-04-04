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
    "4isFoKAe5Y7ayw3y9tn3QpQff6Swu9Zj7YiX8vZK5XxEmToiZ3YKX6QhZuVvyiJyH66n5nohTCsB1KrtWs64dWJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e72dCZUvHJxNmKMiobNz6DtBqWzvvLpsXqyFyNFWWZT6DhyZ9kppYEBzJZcNKRZxGnwpGBGPDGd7bDjZXtmP6WB",
  "key1": "bov9nvc4X6QipMm2S1QxqnhboiLz9hWoHbDRNSKd3otbpZ42tAWyfS9FqhKB5NCu1NM4Sq5A3aLmsoM9jdtg58s",
  "key2": "2ParpvWcJa2ixWDx8VNceQna7PZycrb5bLaxWm4x8advdBbYToB98pKVggTxokhDAqAt3gNaXdWJWfUjFomPyVA4",
  "key3": "EWku24YTg7g5p9gr7rp9Z6GT5p1iVWJVQZQj32JLBZEbvLuZb4yYymwv3L6u5drLajjkDyg64664erpKq9zQPS7",
  "key4": "2gfzErXRAhmn6gGqrWAsstmTPFet8jquQ4gmb747rQx5jsbGpXiYpZqeywJ6bpRMizmjjXDRiC8gLo8hpP7KkyX8",
  "key5": "3E9oGecr9QZNnAsdyAoBjj75c7HPVecKVs4a921rbLDkKhQjZFsKst4AdSQbBHDDwtdDRghXLDx1xpf2GkZK5qky",
  "key6": "3CACBwCWxk2cm43weeM4RahpnRzSBvWNJ7zEajv95oYbnckXzaxrvZ5tpe28JVxe5cFuvmeYuKLpP4MaaUCc2rbu",
  "key7": "Cvy9svFW46EbNtVZAo8tTx5GFXgYTMBzcMLXfWSFjm3yxXcvQBgf74BWe5Z9UPL7hfZC8D2Qqj65b7sGDEdP7Ec",
  "key8": "2Rt922sTDPRhDrmHJeRt1dnyETHM6Kkg7RdWQaJKRDj7S4pRZMYiKZv42Umwjn4pXmc8tfAfD5qxLyCGz2HwyPQ2",
  "key9": "4jF5WPHWAWGwJS8bsMGxKvYEcu5gMUu2xcHmd3xvgpChwyh5tSCV8YvjD9GBJjEeZCz3veQnoqcuKwBAvscjRquU",
  "key10": "2AMvwfQm7Z566gsgYyJ21GN1AT2nLYEanLkereqHWiSDdSYxZguTokBT7w6t3aSHQpAvcCDDQYPdyTynuGfnJHLU",
  "key11": "2zJssTG4aAMPJz5Aff31223h927VB8seYPRy7ZyE87wbqZqG6iXKiQQKNBke1X6EULs8ZXE81vjZTsRqERCRJ3HK",
  "key12": "sGhv5qhthtym1jKgBAPzrhjmjLZCDucgQnHvJa9LKjKcpkBHY5QbxFA1fQU5qH7HM1YPjzBenXuhZwKoUGWdgz6",
  "key13": "39tZX72XpCsedYRSgSrDH6czp19zgCUDLGRdwFNQDdJXRPrkPKSrJa6etxGrXA8QLiWxWcGPPA8mD2HjAxi6fMNs",
  "key14": "2E2w8cR1RVDb1xkbrNByjycz5sd14GNNhwqnBYaeHBdCqHJm97Ctv1ficRvUKLzA2TiH5UmsVhKdm5BByvWnGNos",
  "key15": "5uxJTNJ6FHstjnCbVkDJYXVdrp7X2oG3kHQTkPviNLSmJwcWseg5M2XyNMx9TnCFanQNbB8F4fZ91WnQAQiAAMX8",
  "key16": "4WNHD2kMhL3EzAU3iF99LFrPn2TGQ4feGQCTNbu5MeBBzfaWRsKWXc3pSB4WMNuEhSB6ikpZMgfW19TCXL1UDzmD",
  "key17": "2Bz19JhDa42ZCqCYWSBHr8s3izAdaPZhch1gpDVecPjUgXE2NdQZzUSi1p5Q1yy4McTUZ9ZuQTp2qLcQ2FkJ9Qyc",
  "key18": "5VPnNp2iWC2FgDGQP2vuM2vCrcTMRoH4xzXp2uJKfbGfCRErYtwKgMvL22NL7uoLEnYdrNWT6bidTvj2fwdYr93u",
  "key19": "4JjDQu7t3Q6EaCSwYYisvUHzDA252cJ36WtXPwLGFsvRQgFFEToGzevrTdCZVX3YNGjLM2sZeEThxVaRsanVQBK4",
  "key20": "DFkT3KCPmXbER79MuFsyZsjjGebJniDXCrNDMhnZFeaW2Ng1Pp92WmNPf85GQZnmS7xz9Mxhm9apekzuB2oXh12",
  "key21": "2QaCUs1jN4f4CEmbDKXGpGwfSCTy8ijUkZMJ1QtPqDi26KRSCvuu7QGUQdTGt2RxWbfbwjquDpNydR26NrbvYznp",
  "key22": "2er8wmorktyH9jKPW1cknzLRT7T1hVjQsu4HanwiM26x2MW13CiL7sL1ZzFsXtEBWYut2e9tETnEyjWgeshK3Rfn",
  "key23": "66j4CtfAbJmmTX9bUqVLk66tz8MQxFQuFYY8rcwhA3WFXr18VT9NKSN9Wvm1vvfruCSSuKkKppCpvwEKNjHaCa5r",
  "key24": "4hwfL2aUDqyGkniEprAZGuLWY5tLJeRuCoGQxFSwu1FPfXK54CJMcni9eYPFuQYwDvtZF64tSxcFbpWChMJ8HxX8",
  "key25": "2mNVvEvrSnixYgYmk8nee1Dce9T6G7PMR6zEyKSBaS1sZSiMSubzSJZMm92MGeXUKpLiBMEsfsyXQKvji6ejPj6w",
  "key26": "479SerPrBai1SAyUidMHBPrcxPDHYyUeeDhMKhVzjFRdpwbsJKBFWaX7t8tZ9CZvk1JNQtJbvSc5FuCShMfPoBoG",
  "key27": "3PFkG2P8vhe8opPgAPh88M25VVmNv9Dd3RRvquHjcJoWHGnhEx3oyjpsfFhZMjJjqjCp5KBVHmdBJG7mmaHKEUoA",
  "key28": "5r96ZLrUEbnBzwfFbQxGbYzvA6HXcXiotByNj7J3pY2iitDYKRBc9N6z6HeFmvX4RJNv2bjoJyh75r3zdbSwquFT",
  "key29": "3pTJidgwQLUuVBzCs6nFEA1XaVayURA7FFJMsMEkyoGC6LXxDhpp224PPaoFP5pbNfHD4Y8yqMk5tQ5ETd3xkHWW",
  "key30": "48XAJDonYfJVvM5jv4F14iR4fLrGAevzTKytLK7eEv8QT3RuSK6GSmuunQf2ZkddULgBr2JidHoMZyEhKkYmYZ1C",
  "key31": "3bSgVr3EDHAwiKWSNE89VKbLGxtRHoTurtqnFoa9Rpc6KHBAtXdfXXexLHxEaquED9urYoLhCuZJdPHhQKhFPHy7",
  "key32": "5Zu3xRqUaKbxTfuKn5e29BzmJUXfyhSq9Xtxsijspeb2eytJ3YNXxt3SNoCMciCSf4NW5AoTrE8veFs4DxGFXLsu",
  "key33": "5jBiXNXMpgy6sYTUfTAFc6vbByA5WNFyPcUFNkYQcd8tJJLbrDViH2yM8g8NrhqbEd7rp6pXQiaUTSfAeu5yy2ea",
  "key34": "VVwV7Luc56LhoTKkdjcDNuF633rG3XbxMz8XXivB4nRu3Y5mC9WcRoxGLuXne8Nw1YoqfLqhE4UhnjbAg8z4D13",
  "key35": "5geaHpNfeGAa8zEiCgUyL8uQeFCi6LNyAMwaJc5hrYbvhXF5ARGSXJ1oVyc5q7ewyGYZSxaZyqjWuRqpgAisBAmy",
  "key36": "53mMESucQ2s3JMSp1LyEpyDzxw2mDGM88ZP7GE9pNe4JEgGbpn6cLitPtabPX8NTcfivbx92a3TiwxmA1u6hdHQy",
  "key37": "3uCFCJTJsxYXDNS9GWco9xatA51kjDukVQk6APnbTrVRscDLZKRv7AwDaATisd1WMTvM5TUQ7xGfen1zqsjzWUGL",
  "key38": "djnuvw8McrqpwwjVnJyqS2n7MEAA6CxEQJL7DhfpbxQajk2zU8HAyaW5tvqTnTqn2em7AT6dHqEyHdHpXWav1C5",
  "key39": "58Tg1TAJwjwaQDyZYzL222PK2HcRH3wDmLWBivsW558WkdH6VLgvYYPsCoWjb7dLCiubdMQGTpa2nyY2juqL2aVd",
  "key40": "geyVo5d4D84FJQgrH65QwW39GJaD8X1QSJvH9QUox7JTtkcbc1ihRh9ePB7Ek8TsbS1omSzg4CoLyMnCZRgma9t",
  "key41": "5T4fiCFU6fypyRhHk6BsSS4WVrjtm5K5RW8kaZAdqs8kxmtHQAMcTdwjgGaWvGZQ3sRxoLbv15zFcmkkumEyfQTd",
  "key42": "3grWfqy95hwb52nUCUdamrK4oHXi9dUHT8KKmtgLYB47HNP5vnvSpG7ipfBSX6YHDsA8ypLNqzBPum2UaWwqF7kx"
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
