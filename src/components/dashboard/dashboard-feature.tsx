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
    "55ckU59dmNx678MThZ1gsfyJbypgyQB6TnPdtuNL8e6rMb3VbBf6xLetFEoeRyHnKy126i9kea8ZtFh1pkm5BYeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVtmmxxmUAQ9pkLuJHXhziDPNiL1QtL2U2ev4DKh1WeAq424ib9mUAkzKyVyRUhPU8HE82pMhagHMMR9Aq6vAwj",
  "key1": "2YEpAHnfYuHic7Pt5ZnhGnKsnmCd7Y9eBCPgCtXBYgToaj4uL8s2fFk4whGjnreoj7FKQkbQdNLZNqVYdMUr3mRy",
  "key2": "awLQX5e6416FvZRUgqaafeypxUPfQxANuHoK6Mqdvf2Hve7LP9wHhwLV6ED7JGyxqP6QNFNNL2cpsM7wT5GDujS",
  "key3": "khepzPLHzbFB3PuufmZ2PzaWnQKoj8gSMmZqyFsyfRtAmzrwzde1pG2DWm5ucppv6ERJcjZLPDWQCHjbu6LETW2",
  "key4": "4861HLobxmaM45Pib4oMZoHxqvKRA2Na3VJdeE5KiVUyABmJDWgmKp3jcw9BUBQpd7UH9TaQQpGsoE3SxWx8214m",
  "key5": "4xTbL3ukguW2pGJQnTEyfjfB8YdGChqMFXFUCHg4FnQZkrtaBrpcBkNo52m6fvZ2GwPUANmT9DytpjEHFeCzBFEf",
  "key6": "67pxxNa1MnjppaAEmfK4Nn2SzK3PDGARjLFoUkCBvHSfH9S3t6ksqGzgH6QnyS1AMzyZUMRsk5fn7eExKKXRFwmW",
  "key7": "3Rr1gBRJvrCe9RQEmNxLragHZYr8VhgYuExz9wCDHXpp1wAQtBautqY2gFvKyFG5fzV9dLmsTbJGigcya848ct8e",
  "key8": "5gjfHijdVT4bY77YGmH6ZMy5jv64ziZskys1jTGup6cN79adfNqjA8SLERJoGqBSMjZay934rQ5PELd6tjgMQSnZ",
  "key9": "3kdpWRKPrAiWkSj8QV1XQuagKFeuG9a5nFfQNZeaSKaoQCV4wYf1rhm79WP2p5svksTjZYmkVKKRhGb24BsgLXPt",
  "key10": "hi6NnLLE4YN1UGTy3BwSnZqNiVBk8Etqq4FG4Mgw8jAk1Puumv5rvap9QLMjq84cGQ3eNz85vsg3pCBaJET4TWq",
  "key11": "71Lz6rv6M1nLfQT6ybU3tiJSGJ9wTKtXEHXUP21YppatPcHdfdpA6DcCHfwJHHcbjTdLuauQknQzDN7CaD1QU6G",
  "key12": "3L6Ahv54ocuLoHdoqoKUiG7KkNSrwEe3cka2vFVAsqNhnKFH99JMa3bKxQdXKo9PAwdR87Ffc4SKWCvC6ci8er9i",
  "key13": "36J714iJoPPwFUGPh84YPpECKDJfLHuXAccs7WU8adwhUzByZiVofhbPcAvMgmoSCs8nbzniXKoAkaVJgJo46osu",
  "key14": "3EkUfJRss64vtPdr6JFtP3FFdwfU1WvHcWUud1vtNwrxprjNpUG7BD5qUYe6s2ARpsf8ufK8m8d9qt1dLdgHwfrU",
  "key15": "4FJy4xGvUB36xDtQnaShxNjAJx9moh6MP35jTU8yQQ34rYmw35paW7EXQGgsehDxrZn54Qc85cTFbzTMyakJ8qKA",
  "key16": "4xHrGW2k7emrMLsviiGTgMJ7iVq64WMLjhpeb2AZvrEpNMQ3JqCukUdRdUV6Hx19vKXbaNGcexdp1fokEgpaGRkA",
  "key17": "4tXMKHq7xkYaBtzhwpzxTmC8uXUcvBs5ASX3GrnM4gQ3dTRedPWf6eomWW33wPwnYGMKAgJVmkFnpcso4mqpnKz9",
  "key18": "2s8dEfWD79CB1dM1JdGw9Xrfnp2RoD5C3Qc4wV8fm24JytdfMwNYn8xidhoXPFn3Exqgn1RYxptNXP76Xtbmwzme",
  "key19": "ZzfHsyNk91zZbG66mo4eV6vtTfLRXzN4pXhV9BctmjBntm23LXaqQWehsb6Y2ZuiyaWUBfHYuvSjydzVbeygwEr",
  "key20": "24PxRRQLzaZ3ydQ1PiDPMGteqZmBse9VsaZN2TRCTD1MKyLc9oowMDfeno7g4Yek4SHHZvexouwNhwGLRUoQiqeS",
  "key21": "ivjWpYP4iN9GgFwpFKsdioUdFQzNZCiKsPLfNU63ET2pKk1KmoL45Xzt1mC8Bosny9fbny4F8f89zexZdNnGihr",
  "key22": "5FqW1GEx3xYo8bqqYq5WhM1vhrwyvuRAM1rjvTyi7P7q2hVPZmMJnvRBftmgb2NX8M2qtLvfVRKyQVRerUBqAi5a",
  "key23": "3qRwfnSjJgjnMoeoWfsZBLwUkca3hbAER9U1iXXLsQ6KUdduEGwRxfDX4PrsacvoAoiE6Aw3JQ9RVxtxWFNWKArc",
  "key24": "8fiHSn5mKgHz3b6TP4ky5qQSZe6VBGkAa8Z7VRv9cKhwz6s468RozUKV2t3wFigGSn3uY8u7e6iN6fTJxR6rKsj",
  "key25": "UgKbH2JDHry53TCSEej5r59Yva8d1TiWYyoGUfEWXHko1FJ26FVSLPNGCb5PwsuJgcvTPZm43mJny4STujfxWEK",
  "key26": "5iyxfFStw6B5RaQgvjR5pEyttaTZ2btYha9WgN5wGHBaas9CSKocV3QhHwnSEgBSeMf7cnhzqcvnEiZykdZXeXuo",
  "key27": "2ApbJnQ1Jbx9sZP41kUFRzDBmdRLwMurt8ed3j2XuCqkRmijwZQWS55W2yjDoU47zRrXJGwaRS3NJGYkYkUB6odA",
  "key28": "443KoPYaU3BD5zm76KtvKXYJbkcxha9DUKRmesd5QqJtVMpntzTU9GHaHHuPzoApbrXa3JBhaHUCfywtrVRXpmHF",
  "key29": "24YZijVcsWfyPFsyDFLwGzCMiw92WqoCESr9h8Nj1P82LXJYvkMUnbzeXmaF71n5pyXBafziUV6FMeKp1kE4g4HY",
  "key30": "3uL4ND7n9ofxXR6XN4py5CJi9nWKFMf4v32RdF9uMg8ZKcoTMzZrok9V449kyxniFjFWzN8spCDrnpVSpc4PgVUN",
  "key31": "4TjQjiXsuEPhz4XKxgEQaxjX4tzWFEfRHSFw36AL514ivEmeFQNvdMiwm3sGny8E1zGJn89QBYfUXef3mYLusf6U",
  "key32": "29RsrHNVmCYP4piKxKFgDuvDkU9XnNA2FiRw8gLt57XN9a3NrR6XBPc9PoWCz442MpbBNfn6U9cqyZEuHcu1aLd9",
  "key33": "4LEzeLDiTy9wtLvazGSg7JX54i18Pgg3Ew1bdUGRTkX3XMzBxtehXKznkkyxqQkr7GxtsyntZi73qGhHD9snpJpa",
  "key34": "42RndicEnfcEktfg2hwEjwNVRyoiwEsd7KjHivcpuNzxmRCTP4LbaKNK4HCCyYsucdvJTEk58yUj2XK6pKtKXnpx",
  "key35": "3szryXveMEZC9WyAQFgo9FnuJEFp654XaboJhh1cfGbd1Rdq2EJSL1UZtJFfNYM9Qa1t2J2P3EmsRqavWuPJeFiT",
  "key36": "3149pyKkWoGRUxBCVi5d8i2DyYJysF25uVQauhPGX1DuXZJKPpusCCDr8mMA4hpBNXTR3bxNvkiMxxkWCY3rG74E",
  "key37": "4gYfG1tkTBoC2zJMVCj7tJTX4s6jWzEZj6c1c9UfC8JEn6TPHcuEhQLN1wCmvPbBs8KCTmz83xPZJvzg9KwTfGbw",
  "key38": "4vLrq94XXKoW1tcNiDv7rJWZnHB7YAeiV7fqerrHVVpMtadgWj9FaJBDpckTfTdAhANKV74zHV4tf8bJ5TgqTZbs",
  "key39": "618dF53MtbCzWoCJ5nsTRZnvHi2ahkoRHWgKTKGZKiTd9XeSVvkt3Jc5WBaiX3rWMwXLgKrqfdTybQLq9V9dBLtK",
  "key40": "5zRDcRDHLXaSuXauA4XAVD1hjApyoi1yMezzCCv93CNPgkgFDrggfHkEHTm7tY3t3cpGb79ed8qE5NncgBLogi11",
  "key41": "4i4uUZ1apaQ2PtEuva6Wnp9522p2hDc4Jvn2qjD5LXTUEnUQ9LBVLzA1v1MjGjbDgFn9NyKknTHc5gYiHoPzJFkr",
  "key42": "BGxDdawtYaNuJv72hRkg5iwKLfAdWRgnrxYQ185Cf6ZLZMB1U42D59RjnEKiCdiyhGExPv5VLPw4W2HytLUXocd",
  "key43": "5fiYM4uNCgXhpJ4h63J3nPGJmhkT2x97iyr6fi4Pi5tUhCDCd9MFMUoUG5ooCCLmKKYqXuSmx5fUAyMHeknHbDhH",
  "key44": "5jtsDgCW8pFTod78HYLQ73YeERLPN1h6tQVQG9usyagQXCxscDat8m3thKLakstJiVL2HgK5enUtaMkZqq2bVp7o",
  "key45": "3Z5eQRTCgw3wPkfDwgKsnbXBmJPbTa6ipHEpgjsTUnrsHk5mQuBuSetDxDbVzoCKw4XdQ5b7JqwkmXML9zVhTBgi",
  "key46": "2jMeRnMXUyKLXLjoCoNHsbWrjH4G7N4YWLrPbX3uej4Zrf65CcjGaSVZ8DxLKJJ2wQgkgE3V8phjQA2xM1Z9p7tC"
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
