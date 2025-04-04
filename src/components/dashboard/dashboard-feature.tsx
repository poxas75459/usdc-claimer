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
    "JnqRpKQSmXf4i15hSczJvy9dVc38LW4sPLzGikH2Eb8eACFxGD7oNwSMALdzDpn7ZK5WZg5xpJUf8AoyRqRbNqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SvfcYgmWpbGaamnK5fHj6nftAXqf2rVMmLdM5uT5aDayNCsfnfqMx1gvC2apB9yQ8J1tot18DE7u1NdNcP2nHSo",
  "key1": "5cT7crBUFTe6CrSW6RAj6vFi4wH1q5x2hpkBiFUc8SHJtduAmujp66zRNuuLEzzpcxa2xDiVReHtZGncRniTWWwq",
  "key2": "5Kv6pjPpQ3JmhE6tfjsbtHe2wvcUYNC1fHbqQpFbksfxGysPY72AEFtdjmBjVjj9bhvXBBmkEeLDEvr7aE6N862h",
  "key3": "2aZ4MV7Ai6H4MxCDayfQkgiYekTUfCaFLV42t34WzT39QUYWy5ikVAc3s1Njp74q2CkL1ZHnMekKYk7iusL16mE1",
  "key4": "5H9QLECrqHUi13UXr35Ny3Tb1Lwp7V8cAnhnRGuK41YxWGpYwEVdM1dgSeNqJXM4VUDAdz6Q3EjnjJ7bFgHUyhQs",
  "key5": "268XgiRZbsM82DfPzASEcCJH7a5222ypE3PPoCBpAWgd7AQcbGGugPTe9Wyp4VRVaYt9ivbmaCtM3NWbRAkCquKA",
  "key6": "65JDoGcU4kGZ9jffNRpzuy3Yon2kXEAgLs8WxZe31SWeKgApiECEUSiGbn9R2nvP6RKxeSw8yqfgAVargCQbS8TR",
  "key7": "3y3zEemzgacXt3jHkPmKhniSBgGDnMQVxAGZKkxgFyboxokTCL5F9yFVGA4hhQTALsRjWp7QkAXXa8TR4hpwN6Em",
  "key8": "5xafpjvvUQnKmhJjdM9FK9t1DRZuLgqpoiPo4LjyjZvAaC1FmLHVdXBJcpRRJAEUdbAaBvyddhFGBTZXBN9UjSig",
  "key9": "3G8BMYkdmqVZ2qysKVhjSq9T7sUqTenzy7LUR4fEH6Jfcm7i3qQtyB5d7837yNgbsioxW5Qos9pqkb8DnXC1BtiH",
  "key10": "5BGYxxci7ypN1i1pExB8LpoudWkTkfJoqEcdy3pNWV4C4tMH4pVZnPsD2v7rWrGDU8VUMzH9kjDT2tK62xoE9LW7",
  "key11": "2nhs3zWZMNmdxsvFm5wtF2H2rStUWWjRXHXRqwkviK3AjAKJKMZQZq4PJBhasz4iyDRUPD2k5KxM5PoQimkisG2E",
  "key12": "4i595s2HRFmPXscSkJH4xyeXrYfiLCcMqYRfko3vvUqvQ1nvoiyG29f7gE7mgPpUwqXFAHYk2R78b6yW5S9bagze",
  "key13": "3RNkX3seuW52BvYeqPFpYWsKxgjGiK7xsf4EzefjcYe6rutw8RV695dkdfVHoNjKHtriABsn7bzxzix9GhiXN2MU",
  "key14": "4zMpQDfR5Yq5R9gLu7913J6E385KoU82cP3C8qzeNtqF9nXKm6p2dphNun1BMuD83AD7ShGYGCG6jWRUcadhUi75",
  "key15": "MSeKjrR3fysM8qmNYZvepRv8htmzQPDbSrteAADePgajWdgndTKnigMSLHoQpCyvLJpXEScB5SwsTwBxWwgbnST",
  "key16": "3vmz2SLvVPAgRE6HkGtn7NwFcZ7tTJxJNa4bZ5Grtw5Nys4d36ge6g85aF1RVM3ZMZZsv1sR9EKKzrdMFbe1EVKJ",
  "key17": "2JAE12gbDP16fSE4kseGmCHfKF5JBMMPW729JJNWsmedQqzho3yeo54e3D4RCgEB1ib2RfixXKCFCt52jJnK7nPg",
  "key18": "3xwPPmbBGZmG6g1uMXpm9WXNP694fV7sGaw7nujys8sdcTX1SRypU8vVyEYMiuJFYnSwbFZ6drtrej58gXhJV6sY",
  "key19": "2ku4xKo6AdM5VFQ3zdH8U89kMJfz5eLziEfwaF3eEtnsB1tZy2DgJDYWFe3mxBVc3Qr1W8SDqNTEL4WDQF1SD1Vh",
  "key20": "2JBTexDUmKAcivt1BbgByyeEbsNtZzZXtdnCqXhYRz4QqSma1gJrLLCR5FYDUeyN1p8dd8rFSzQd73ygZ27w1rLS",
  "key21": "2Vd6z8ymwFxFVwiW4YuPCovAzk9deZu3AQtjmxzm6oshGd3uPAYCgnxn8Yi1P5aKtLGqqnDij5edZthNvoyyZuPc",
  "key22": "5r4mWU5g2gAtUTUVaa764HxYzfen4ySWofUHEeP1FdR38BJJD91MxPRoamCR5rTzxNchs8jk7RRc32RDddPcUEH3",
  "key23": "22hsz8m148aCazy7kUuUSh2yLDsJ3eDMZr5PobQX9WP1jyjFQb1ezaX2UWYfZFEmkMmRKjyTjPgxYW1RXzqSANfC",
  "key24": "2Wko8Z9Xvcr311X2rXhn4XCjPHsx1qqL5TWJNcTZrQPQLXmrfNh33eCbkxzttQ8zRzQMpchcxT94mnaVMJwmZbbe",
  "key25": "RHoEPRyd8htDAKqjY8ZUzUdJiaxcrbrsawY7iLSEq8reuERK4ojA3EGeR3RacXeUyTyKBXwFayMs9twrNUpUf3L",
  "key26": "4EyrUrwAuCH76H9vAeFxgQygansyAtKyeFGrfXmCf5JHcUJMbqvGP6yqxgLShfpZMPcJHz2kogVxvFBCWLA71czR",
  "key27": "AK7N4qZNRrzL15c59WXR4wNiYmJakLLeawMaamubvQExMoXR6tqEgwCSEoeMJeuupp24ZHv2prEgCgtJF8ShaKY",
  "key28": "5eVP2oUz1RgQtYcrpCVCjWHsbEFtJzgGc5vMjz7gE9VxbhUzyUSqy913cu86LtpG8JU9vvAGzwH6NLQKckT3XLJi",
  "key29": "5myFpBadZSe89J5n6dcvmDq7LJSDeJ2xXjj5qRFnuJ9R2MHUPSbwfGiq8F1QoRBMjziHCMnRcq7fYaiYkPTqdb7u",
  "key30": "hrokaPWLU8aGKtGWLEC1yLDT3zWKZX4kqPCo7B4X73vzSfSCPR91jxncUJLXC6D3c2wisVkgzq61zWgR8eeBMWG",
  "key31": "DbPe9psBPMRmWp7PWdoQMwL5yRFFdpRmsALrR11qkbc2ne7hAfb9YMMAj9D3dJB7LPTmej8aJuLX5fwkw25quuF",
  "key32": "5w2sSm2gX3UzpLg1EYBAJT6uFkqajuxMKEVLGvcJFJhpotxW3wbz4P9KXyQaExncKfm1qJ1K3ucVyfb8Pnw7HnQL",
  "key33": "2aV1iud7rbZiyuWndongdUeSJp852KCiC5R9scDempBiV45vgSGD7mNLca689aUvrNTMp9ypqgrsz8JoA9Mk2RAk",
  "key34": "B932x66rnBGkJLzEtD4XTyP7etZuTQtNE4f7Qmo4k54wuDybzrw2hia3CtEHG3mzZHbaiE8dvBuFNjc7PC8xjYP",
  "key35": "5wqJcKjLm5Qg15TkyS8qWKs3mxyzjjwbooL5UYwDaT7yQqciu5UecWQrLMmB3WF7LbHjZfRhfw65MqaTX6GAc9Pf",
  "key36": "64p3MQVHuEJXPYZcLZ34dhgsn4t2fLY6w8TtUwXDY4PEHM8aguAChHX8MHKPLD2uGbQPJy1khdaPXJmwV5nPUsDF",
  "key37": "5YHJujqT4v1rUFwfn7ezUxKRGZJnYxWeRhdYC7tqxEZKht1gdSGrPv94jAWXPsX8g2sQJ7T8Ef3em1hWdRa6V3BK",
  "key38": "3sZCYd2C99sMSBBSrWr58QEE3RoZCG8Wv9fGDgS6frT4pEdHjeDFrPcQCKXRv2yDF9JYfTjkC3baw8AifQaCk4xA"
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
