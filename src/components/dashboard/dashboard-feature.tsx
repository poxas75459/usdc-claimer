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
    "4Fe4JzWWyXA1PALjsXAJUwSHemieh6TJidYSYyPVgPUN7WDL2rBF8BNK45eCvo8ukd4UGc6iMpZz4ZEZ1J3M4Bmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKyPzknqzPa4JDvPsxQVoY2d9fJ26S5uyt1PAsgtNt8gjPEe6EjjQaKQ7qst9v82ExcYt5QGvFNTXxdbatGjhoH",
  "key1": "2FYNrApHfPAWCyKx6U7tyqJeoAsWLGRtArJpZ4XszozFaZn4r2qK5xAo1R8gbxRE2X4yy4H765WY54du2nD9NX6e",
  "key2": "26XW5LfUfmiQ4KrgpdvFWRxCpvnn4t7hCxkSeMei9TjAFbsihbHNqYqUiXANaNBvTCst3yQqjZ45WSuTGthd35Jy",
  "key3": "5a61DJjdBuuxVKTh5LoB2XcwYFjcLHmCxbqpdjmKoCgGRArmi4RsKUvVHnxxZPB5dBDjbULHh2gc1TRLjAu6yfP7",
  "key4": "3gB2uy72inRRKPPvwzum3svi3ypFVC5EyrnASHaATkq9Ni5jToC5QA3DSHrjLNgm5KkmB7guncUssqiW7yeVtPED",
  "key5": "Nh8SWdg5R7KocXUn91fN83ij9jtnaU1Wa4LUz6Hs25Ej9Vw9JTTCgrv4M9G9v6ruX6NTKDUTXda8Z1nH3BfjyU4",
  "key6": "Te5RuuNHGhiyFZQuC692xLMTXpgKM5bpFLe6YEz2pycPLPCiVEqkLJhP7vp7xzYQsCz6GgYtaVcDsexinnAQjCn",
  "key7": "2eWt8p87L18vqxyMmKVTqkKoS1k2VxHCFuabnwp983LUA5apTSseKP3o5kbSbn7GpCtxZWqyauXVoVFn5T2yiau7",
  "key8": "67BnJiqosbhsJ5P9GiVB7ob9L2hVEkvKq79yfxCmayNPpKCRTha9bm38YqMKbAXVcp2eUfVezrezTjsaatzrC6Rc",
  "key9": "5PPJ89vF2yqgadiVpNm25bcha8XzYdv5KKqH7bNXKwChJYks1g3WnAEQUv6Aiw7pJPc76MtnghvGVUVcN6FQ2rTu",
  "key10": "2koEA24FPP8zmeAxnN1ZBxLQwpxEFgQa9jw7NbR4s1mKkiDUZEqnMRBhJMtAxt8AogNFrpBwJ41peAHY89ewv87n",
  "key11": "5AYUtAqGseLNwMKyaVF8pCUyWcaor8CzPn4HbhzLLuxoGwGhS1HHriHTmYZVUS3SQMsjnpaCdPbaBYZs4AUgvFq4",
  "key12": "3Dxy129TkW1b45ZVjmXPShZEQpoA55Ynj2PCkqmcECA2gAL7BdBMfBde88UgwLtdp6WHPENq9sPCP2R77Uhqdrpj",
  "key13": "5vQycRnS6CBXy1VJmY2CbRyUmTrifUST9kyibuGse831magsp9LyG14VneTuZnntDmHzNKzNcjwPHF52FyrKthpx",
  "key14": "7WTBYwBEk34sWWZd3DTGweuRiQo3YQavt75x68Qf6y4xPb1yeaDJbLkcP2hCvhpCuDFcJKPvXq4sTsFkmsaogmP",
  "key15": "3mjHXEV9P9ANprJ48GFhstG3KkpAJPrdzMfdzYfxNihzZ2ApKEWnXSCr8zAWk2FBQ5nSTUeL9fzytGJHGMtJimGy",
  "key16": "DjQxMfn4YMTnTMPfwc7C2emFoLN4hoL3bGLEnpQ4RTWxFZqycSa1pXgFAEdHBdNcU3KZaK6RajMXMzDMbukqs5R",
  "key17": "3Rj75ud6EBnzm4FP19RrvbBAHpT7wWw7npAupwcwYu78Y14LvtfyZqHWggwaGnHFp7nEPT6y6PZjvUUZ7eSZQWFN",
  "key18": "2BXGeCEgBNGSE1ZfNZHAqWxgg81stgLhByrGXtQdB3nLnx85d1Vgf7fjJpxFhB3BWWrN4jkyhCbRog74mcXzBMh5",
  "key19": "kKF3FKQe1WTSveYQEHt8YGtzAPrbrYn6LNtLz1ZyeBN3VBVKcBYtiRmo1tyD46CaVkqxaKAz9UpgZD4QgJjzTRW",
  "key20": "5J669EJTx8TTAn92c5fGKu1Eohg77aWJqfJrdtfDkwHFR4SJfEWLUkSSJf7wRYvEvyNVcxF83cyXdZbet5v3n3DN",
  "key21": "vC1ahud8SK4L7GqV7Ah1s5Jhgw1pkpZPpZGquNzhmdWPaSAB7LFMvibXQT2RwTZaNA5VZwkQYVmQsp7LCikYMth",
  "key22": "44EocNhHfZjLmbG2UFKPDMZzwDyeVDg1SfGTdZGsZBy4K6GZszMK4bDbTyswCiA5jXmcpB1BC3oDnmGhpyPwaNW9",
  "key23": "44njQ4J1iFF9teqUcmhSZUuFuPGNKQXAJpwe4BZjdCvidd65a1ttr6FDav1vyxC3RNnfBBqZZuqEzKZqntotbjcd",
  "key24": "5sFGBDFGb7fcoMQ7SVwpBckHnSvgi8m8WggGqtuM7v6MPCZ3x4KPUocHWvNfsyboJhTPiqLmXtirZaaqsrVjg795",
  "key25": "2ZVtkY4kdB9fZKF5axYFWru1vL8LCyLMeq6Nj5uPNjGbGALRDW44LU6LMpECAVLXdzC8kdE5xMFgzE722TPnxUq4",
  "key26": "3dyRD6wmV9G2Vkjfs9u5vk8VNYM7RPh4f5kp9ZH7E1fS73CmUJvyv9qJsQee8eiUKwJ9K1SqURLyPLh4MFUXFLyy",
  "key27": "3fiYPwztLhZzTqvvGi7qPJe6egdwHf45bCthMQMThk7ZyNwfsQsqJ7WJsEcMrKipjk4sdAG6Ki2BjSGv8LsRtuB1",
  "key28": "2ie459aNmnFTSGDnQMZqjKkXp2zuitE7wxqYupWp7RfyLcRvSauffRXv5CnPcob4V1pt58Dtv4pNEuFG8yyTePpa",
  "key29": "4KEc1ou6phg1owCETT2s6CnnDkHGP8SFmvgM1wsoRwmx9F9SCWhuUWk6FaHxpCTmaydf3ewt4noUTCMboXVdfC1q",
  "key30": "25NwQbaToAJftqNeiiiF9iu5XSRMXAFC3KepGHsnBKkziCom6j6P9Uz7QgcWJNMK22Ye95JE91AavH2YaqM4u2Lz",
  "key31": "2RM6o2qnadLoN6pQxkTkC5UXHe9aQGEqTpvMQHWptYABhi8fsnFocriAUrvXQkm5mbdLC7L5wiJFAL7BvpSH7QoT",
  "key32": "SQjpK84mWX9rfs6gHvZY7z3DL8mES1D36WomXnyGb3nYRrLxU2BsghcF8jEjY1msgG5vQ4RNY9AALjnztD2vBoG",
  "key33": "3rjWAzUCbd2FRXHafpE7dMipTLJMF3EqhsModnuvY7tHnkfwz64XQy9kfbJaRkoTiro65jmmcvBtYQp2N8hS8TcY",
  "key34": "2YUqrXXRoW5g9xXxCkLX3A7XyRNuJNMBMi49PxSkES9XRbjwPXWJUL1YFtNiEYxPjNUYtuwUE7zAvhb26QCDhpdr",
  "key35": "4RkpKT4nhQeNWVDuDgscHHNLPFC3aPFP1vC1pLTU7okG5wkv7DWmBA9YaXUQ7zsX5k9NGNZjegK27jfJE79uFQut",
  "key36": "4QyKW5AKT5v7CA9ZV4CxfVWLwCkCWYKaPbXEUxVJBnwMG89L4oEW5c5dgjz8EJXKyw1Xcqg5DLnndh7Ern7AAq5R",
  "key37": "5ymLbmAEEZNVxaN789F6Pfn9vNJ16Krt1xFHcHhHj9nLEeygmupcbXypVCHb1qG73HTFCEE9tz1zspqsMoXe2cSm"
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
