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
    "XUSkQoqkXgzDPZu3c6wHwiZQg8aYx2J6KuDzPNkesypgJwVfuNF3nfzxnL4ZTaKdzMX9HZHRhS14YaFGGWXZpDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ScYSG1SJXtCZdmRkVTL33Lq6nQSgf4sHb26fgPsLojuCQzK5CQiKNr5uJTw9F7pNYumZGWmhzCMrHy1w8fU3Rb",
  "key1": "5wNzCDBwM7zECgSVUgAbmGvHr7JqNuix1wCFm2vxtKaSWBo3obZhpkgCYq1HsjFbpg4RfFgVWeL9YUuYN3GdLzXe",
  "key2": "pT6hYGEANoVC81eqJvSuvMexYMzV8CfsoEvKBVrPb41fUjrfVT3B1LKSQEbJWkcizmMHpn2j222xLtWAskq6NyD",
  "key3": "25sL3hB1yUbAu4gYgLrCkT7aXwwVSfD3YcBZuNtkHMQv1kh39npmaCwgDpsMakEAFC45kQngxetxsmKeTR6sdfP8",
  "key4": "5SmqnAANUkYP44Gh1piAH3pqutTyXbqcpppDf9bUcmRx2msTeRU8VhqotvV5f6ybMoUK2Y5by1YZFLBqeE5EcRrj",
  "key5": "3n32Gkg6n1BeztA9guwBU3Z4mjS9a3rJ3AZWBfYWLjgnMTNaACsySVHFR2G66mMnc2JLLTzVtHK2cL69QoTYRYSg",
  "key6": "nDcovxYH34jwDzEqK2m2S3smPMnw9DTgdAdkMBZK7FsUJk1hkckNxh4k8NTzJPdBBBRhf7sNHsUdUhAEF87bn5P",
  "key7": "3U6PjK8A9YpwziKxGDWUZai8A3KNCExCgPiGMQ3vUFGYPkPWd6sJrdP38UPZkdb4KK8R3Dz6exzNyrj19x2VtDvc",
  "key8": "2ZGvZvZ3W92jnukzkbxDvV89CgBScThiGZBMr8xwaVLF1MY3kJqFrwYMAf8pBEJw5ZpU3YQxG3q26LCPwh85HWcj",
  "key9": "58DgT4Aw92V8jPcHDGkMsSwUNzWH71sBXTtq4sW7vfm661NWVxhSADZmMxP1QtTQwQFPb2y4xrWTnxDUJaR2s59k",
  "key10": "4cuJMpyxbQmCaXJtncHUJX3MEipjSv8AJdVCdZmDejH23Ahk2wLRCjv4FpbZrqUgCXv34SS3JG7xKjXLEjL5owC2",
  "key11": "578ik7nY449AmNKHnw7PDwvfi34pyMh1HN1KGzMaBGcPTtpRkwkVqj2cMsEopnhPvVSD9rzxFgSvsLdPNuk8XgmS",
  "key12": "DRvpZfrgEB71BmrZrJQQii3mcM59cqMzgq5QsDdh6b5tkof75Fy1Bvu1PAtsV6xt2yUnhyy3qENxBM27FfiNrgP",
  "key13": "4TY5PzHTG9bjHNPc946Pu3sFvcVcQDzcGrZ3spYXyH3YdSLDjrAqNxWunqancvG4pTEKZZYpPPaWmw4MTaxJ5hJU",
  "key14": "3sxPh5f5D7aST4hnxRUV9FoQvhdNwU7Ha9vG3aag8shtM1Jre6QxiF6d9Vw4pQGU1eSsqntSyqLdeR9hJFANrQuU",
  "key15": "YQALSDjcKmckmDxr79VWZuN3h9avKG8uLLDh4jg5jHzKQeRYBj3ZD5UKmfrccnzCBtRpTT3YmFy5NUEQyYYceoB",
  "key16": "S6XJH7vLhfNtu5TAjno4akr3coiCJi2Tikex4CpmjybwagkFBv8TAqFPFZ5sSzmUCtuDgeAr62P6m8CTGTQNtsE",
  "key17": "2trfM26xY3AH9V1MTZ6GtR2Aw6qWcbeQq9EamimpwijZ6tBLxgFw3dikd2cNXZjKmZQPvmLjt6LB7gbWA1fNkS3b",
  "key18": "3tD5GvQT1YwxqRnKPJ9mkCuS6nUd1RYbJpfMMKb3oGtrqKZfvHvrBLjrKHVK2w8E1JEJ7NKAHmqoQDWBsg8k9aMQ",
  "key19": "5L5MYe5B4EY2GxdA8BB5FRqak5TAmbuXkfotoGc9iPvbEJm42RKmNzBjm1sRwxvrKtAB42hrSKcav1bJHcnBQsJk",
  "key20": "qBa3q5s2sFbH5mKsGE3ucnM8vi6g4KjmTFCyKR1gad31Er4otNtEJW7rBSDxciqcH3QK1ehceETDBBeBiaa5Uvq",
  "key21": "4bagzMKd8tH2ZffjmRtVRM5UtwWyc921HTuEtpi75eErY2UTM9uvyDMKqHFpo3aabyT5vA5Xn77FkRqsoF9nPj1S",
  "key22": "2x1B82LBQrLEqAH73EubHqyVMyQxMywxQTVAjMg2R9t9Hvcw45Fm1yLnL85iub2hocCmV4CqXWcE3wDEFr9rFVqd",
  "key23": "5cVYksM5fsiSgCaG9rGineF4cMp8sqHJW2HbPAKKvvMifLmCLwtC1AykP8RtyG8W2WrU9NcskVGouksoPPDb5pu3",
  "key24": "JXr78t2Xszf5q845VANBPsR2BXPR2qktAy9XAvP4a9te8kwUorA1rMHRg6ZDNtWeqxVvh5Woao6fZqKo5ugUDZo",
  "key25": "2cyMyjvAQvrkgnaYLT1wBBCfoxU54Mt3UVcpep4wcC3o1T3kwFVaWwuyLHVg2VRze5MJy8D83n14EhGV49VX8uQQ",
  "key26": "53Q3kHhjG2xyQ5TGt5L5FPGcStVWnWaRPA8VMuQ1o3zja2Tv8zbq36ZC8Qqy7jf3uwGTuuZDNgeo78cd6kKP8rs",
  "key27": "3rsWLcAxWSzw5krJdFfBLPeCRAYVqVGGbJnruuD88XcCrJPij93WdaJw47BrC6KzRZWmcdtqGUEhuu1gsz9F7u7i",
  "key28": "2NbpamgevtcJBwN3zC8jZiVW92up4Wvvmosj288H9Wxbbq2X4vnQ1wXk34YaHZA2kJQbtWPPG3qxxNKWKjiQfMwF",
  "key29": "4STu6zjwVCV4s38GDx6gj3bcuLJQzoPHBLcowrG24DYoXoAcu95mjUmTNfM4gXFwDVXuGQSGFoBrEaFn3ATtyKCN",
  "key30": "3FVh6SEa3UwfoiZ8uqm9SRaY1kA8Wy7Gy91QhpTQ1tj11feoUmzgHpKFDFP6kZBcBGVxMAGrP9fgwrddCXYXwbPD",
  "key31": "3ge4orHx7wbXwC6xhoEwxjdkWiq2wzGZW4Y3s3yvLRk53xbZTGTy8j5hSX7wtYx8n5ANT9Ang56gsnZXbk3konUT",
  "key32": "9oiUp3dRNe1cZxrK1zEE4VspKtLE2v12K4ghtZtqs9CNHzdHAFkEX1rh9kXLKKgQkkqcovcQkB9ax8kC3Tuo2LS",
  "key33": "2kxvDDFp8F2CtXNSzGEH9BSrMu59d7Tzo4ditJb1v6RWXkQWT1xCN5Mu1ZDBLVJmTsQx1fVakUctYtnzyotUFnUP",
  "key34": "Tf9jZcmVYpv1f4uG2Q75mKUwenR5iKx5vyKoXfDtjqXRjBDtHNHfTwGiL3qiQQSL3C8zPhWTFcREG4DYN9mUeSt",
  "key35": "3WYrgSL9mBQU9bpMw5ym4aDvL5eBFXMrgvMg8WcNBTx6KC5VGW3eFyt6LizjoAw3spTov8QYNLVkFwc5S1Euso5j",
  "key36": "3ttkLGMFFFk8BMBwiw249MJgshhfnFbzjCYcc3yfxHXrcoEJtkaDGadogWV8EkSJPK2g4C8hrnBDVpmpAxUmFtgD",
  "key37": "4ccmfXoo9hu28FKUyW6xtMpnTpHiXDr2WQo5PRdxZU49SbGzb3tHrXtZYuodjJiEiX6zo96VD2poNYedbYDAARd7",
  "key38": "2Bm651niDxSmTFuj9BegnbBs8NmKPCCZh9caTkXmPvTWteSe86512kNJ3WWxVgDKCjdUSHKxdpEQsmkgsaXSA8WH",
  "key39": "3wvm3KZJrWitoQuv5kR72tzmvAnyRYmDnMm1wAoVPkLWq4jWfQkPz3ChrjeMp5TM8eg5NJgDoQBMNRRfpVP1aX9R",
  "key40": "4eNwhVeKwjBtuJ7ASsN6ePKxZdt1oS1okeP3d3E7Wjpc5F21N5N2hyKJqtbMGhDxiSgC6CYyB9wQmkHNMe9rFDeQ",
  "key41": "3WKPpS1pKzRhN9eu3B5QcZjRz3w35SChEoTZjC46fKivCrRGNBLptwFBKqwgaRx75BhHk7UmNRWm4joFYwc8QXUH",
  "key42": "52kWxdECYCba7UksAB4nPucFaRgE673zUoXPBpEMZcaiinWn54SzpRvoTWUMmZf51gp4HTES6yptidXt6GsqrDLv",
  "key43": "3wPBJd9MgJuBF34FjNjopTS8MuXqxeWJ6fjMydYRHb6v29huE5e7ZuRRtbA1V5vP1f63SdVcvcZumYoBGpki4APM",
  "key44": "5z6LuSUw95AyiRtjqdDFngnpwLbEAK5HAUoLazL27wMsRNd5JpdCjLu8dcATB79Mn4YJCRUx3PjtqhoB7D6Eh5w2",
  "key45": "ekvsx6mf5jqPrQ87VAsGdvXHaa6yYj3CNb6vrukJDzBvds33QUmm3TPodgr1cPj5fYaiKZD3t2bjcpH6eb7mcMS",
  "key46": "2BwoAvajqfAewjKM5DwDWafJ972PsfmeVAHcPr65s8xRaGBJk5H2u8NLFYWsmzowpfiwzHJ1kW2tx5BLgqcrEgFh",
  "key47": "2Yz7vD1ofLKQUChcBrrrkRZjVcfLeZAfpMbTqKynwg5cH7kQqhmM4koKyfnmonm32SQZ6PuaMkBBm4QKvsySvf8W"
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
