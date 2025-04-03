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
    "5X7CUQpf1kr7x86LwmGtNdsM4s5uqB37FdMiSXsnZX2yy5o8THdxAZJpVGGDDezEu3eNi6YNUky9FBheL686wqSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KafLSGVkssWuqGAWTDA8C3Z5KVkxPaemb82cgNKhZP9KRZMPvaaAvC3cpxinbtytaY1pPLMRRcrNadFqL7XSu1t",
  "key1": "5gnwJnYpryjTgUNZedCK5JRVWfDXKebXL9Z2NhDkTyGDFsqcz8FT1a98YnsZL9fZ9Vjnwn5SUwn3ETHimdRzdsze",
  "key2": "4mZaiLKpGg8dF4xbdBSgBGTYMYU4n9CXim3wCtKrgv8fa7FnEdohMp9HCZrgCAj29JV7PRZE1VZad45fBKrDHDWZ",
  "key3": "4GFAaKnZSH8S3HjohTL3K6xyM2TvJNmp4ZvVDWC6uDVJQKvqeUEfxovX8B6nRBHLuz2PEaoC6k55SKLRLFZsyawX",
  "key4": "YXoZZaLVdVmezMka7q2dUTdabYBkjHH28Srr9UiLMBn5RaUqwC454BdixdgEXw3yDPHvm8Jkh8gyvKn9qpmMRQy",
  "key5": "3m59o7w15VApxeVSwspMynKnZAs5phPR85xDFkpgFNPXHYELoFjUmF7sMR9kghgykmXibcvNr9h231NHQh8QajzP",
  "key6": "4As9R2StUNgtd1acvBcYDXz2Lr2t9oRxDZij3KiP2JkQBN32zDYVYxP7B8eA8HQjSjnHa44ZrU19mhzVKKk551Sq",
  "key7": "oYtur6qwThgW3xMvaSWQBv5BuvgAvFdnqAAK1M312dGErhe9onmVXdoMxSaJj4QSMbMvshqtL3fEB3q3sBXEj7L",
  "key8": "62G1vsbuRmSoKbVyCCDBMua9F67aCWsvyGrigbNZ82p7RMv7kRGtr3srC8e9GMorft3TizGahsoVUeBoD7C4fuAD",
  "key9": "5RHwLC4aaoSVmEaZJ8R9gaQr4aSazDSb85rqhcsawD9pxUPLcUvHAHH8ggq7SVjznCwgskrrKZ9gxqzGFqaSTNsk",
  "key10": "TiZcWSfYtgpxCdxyWQ7sypiFkEt9A2vboJtdmrN32yoe6kiNQU3bpdPocUpWN3yoixwaGGKryRUBYzdXEEGXFci",
  "key11": "54iugGJ6ZqKn5sQsC2Y9sXR3DhGpNtBgwZSN4SZdhNugACHZYPgAEmXHcZLfvq6JtNnc4XpY7EdbMprBDgTxyzDS",
  "key12": "2yQsAQ1BwrbwXQztzu5topes7LbaMbzFdBpgQUQzG15CVYN8g8i3V7z2UK7jmcY7Kwj3rcQtw6cK1NtLJFyxQDFX",
  "key13": "4TJX7bcm9uTxDqQSTBBemDBhEhoNVG751QoJDiZMofANpSLuFmoFAAspigFRWaw5qbbb7FPgeJxEBVUCDL116Y4y",
  "key14": "2gYqD9GrBMTJGydCVanLy5us3MKu9AoFNMfMXmZvfGwz9GV7BkE65mgSRgjKJhJzZN7yuuhHACd5hHznbPaeWU35",
  "key15": "26q8fxRx8BMpyX8AiJ4xCK7xuLAQQbgzEW8M3YvPXFpaaBf2PKhdfjhbvbiJYEfDXLKuDtxB7eFtx8RVMoLCEnN4",
  "key16": "5nYCNtrUZ762Agage6JQx17HP3umkjvX5XvfB3jcsrLDiw3vLcr7yrdUNheRT44ygA234vqy7kUyL2k5JSpNHeXJ",
  "key17": "2kYyQD1MzQq7vmxG51yGTTnuVhfNnbSTP1xHVtAu5SmVGECLx2eh4Mie4cBJQknbLYp2BDKzvadm4AyvSvwX24Xb",
  "key18": "4wi1JQxpcQktXPLzVBQgE1RtEXerF1cW6mkU11jT4E76VNyEV6bfCeRAzpAVL1PgY8FFDFYfVBruvokb9zZQwB5D",
  "key19": "4j8NyDAya6FXpVxkAoMiYTT2dUN3k1xrexpNHPKn9jz43R7WxtfGqhSdb2LKDuy96wmEQw3FFumR3jNGkCUx8SaR",
  "key20": "iXU3hhzVTgHNEBF5fEmXZHkzUEWMoWyHJXWG2ZeQ5nnKJSkC2QfimP85d5yqbqQVSB8N4dgtAMne764mLGwwxFR",
  "key21": "4dL5VBDYvx1MeauUhbGwy9PKE7dQMT3jDC3KAbJ2qvDxgiZfcSpvWdNNyc7Xy3UFSgn4WyUELXibJrbciNMpgmep",
  "key22": "4HikMQ6mRtAq4MABY82gbvDTQkQq54oiVT8DiLzHJSttnTx2WaDsp4rk8PCg8AgSgzhfkkiQTxZamq61gQZZAxM7",
  "key23": "2gprxgUhWLPwRUyenv6dj8FRJnaJk7Gte2paBPb3KgCdKj7y9g61Lt6bd76JhJng5BZJbHMRGcMZKpciDig4Mff6",
  "key24": "5vuTjTvpkRfxxzAe4E7iSBQgYzicHUQkLMQNV5gLdhXkQmm8EPHTfaUCtjE1pZ8u3FbMCA5f4Lm6sV9Hv85pqu7g",
  "key25": "Pgf8WxHNDjZ2shMegVmZRLfuXRyDzRaCtcfPMCQFg5oQ3hkjxaum9VdE7CPDpaMzfdc9KzPJUVzrFyyvBzK4JWA",
  "key26": "349iFdwhiMovy37g3eqGk2VaUPpQofWguXvaQiFtwscYQygmNDZ4FaZq2ryTeQSH14h12ae4BQV8tQa6FqzhoXKR",
  "key27": "54zapy41djREzNKHF2CJ1ZqNYYUomFnm4z6emLEs59DkfEbUgxk6Y3uPGNqjeDpvZhnuKpJwPPFhyJtsLj8Z5vzz",
  "key28": "4wnv1hemkBiW7Np4RCCmRbSHRaW9zWyEeQiwuZrRxt7B97F4ALhvx2YAep3RohwTWwhTVG1SMGvorjhZUyuTuwDs",
  "key29": "3qH3mBQVi9R8sCjArUrRH2gpwYGZuY1xzVW5z6jWAcHDsRTiFyc9ssHRV4XKzoNcmdMAUxhmZU1kxnreZcL3sawq",
  "key30": "64dxj6Kno5ME8kjsFj8FRgcr17mYQJcF1iaca2gRzZJwF4aN7nGrTzMK4h5z1KsesXZ1EsqdJaagkJHRJ3ZiYwLh",
  "key31": "s6zud8C7MQnutSs4ZGydcqJuAVVjURXE1y1g6iEWgnHcFAixhCKJfEne3FAaX79VN9mVxc1bri5zfaTBLfr1aMp",
  "key32": "679ZHhVHDWEzK3SXdg8oTYETjyv6f1XQqeHJPpk7N1T3g4QKUKEdWnmeDq1Xaid5XF6wvh8SnpYUG8D6jL6W2VSY",
  "key33": "TVyhWUSjbSNbTTxMwLoE5626ZD1dWGM5Jr1rTQTpeQ9ipyGDtXrQST6E9bES5LAV1ums4GtbR74YdEfJyNQc5Zm",
  "key34": "5AHdUyYVLhakY92Lmf695Ztg7SF2RwRpqkSQn8qcw8hznqo4kbP9tZmHLnYgX2rJYXSmj6yjSX58WXiTS5yNhuTx",
  "key35": "py42jBZp1QxdAoj7uNEcc6DKFCNJNwZF7MH3VLjacUe6xQhnakXeqiRCJMrQwcFEkz9B1kme3F1fJuVX2SrtghZ",
  "key36": "3FWHnpJbqGLcjt2MbkviLHYy7zKrNgdrBJiBFv2kD4xmwjkZxFHNCUyT6DjQuUEVqhiSiGn5VAgvBo6aXp5wBFQy",
  "key37": "3FXxEnNTFcE2xGSK3E3mVKg8tKZmSTVsY3WUJrqxSrU5eEijfEbz84YRN5ZAw4DQwSQxC2YfKkQndUeVQBdrxzAZ",
  "key38": "63JQdYxgdGKdRdA37LFtAvPVNTCJZ3GQ8e3LXrgv1AY8LaXmHDUQe3dtiKyGxmy7tEGjghBUqrdjY3uko16Zu6Sv",
  "key39": "57jYhbGpW8gD9RspgMY7kSPNh444xWaErEzgcPAvEYPnRt9JzxWNV9BvJWv1rmjExJgCMMyPZQurFe1rRueKryeN",
  "key40": "5o2Erg1bnB4zqiWoRCAA1m8EymuXpKyMZAdEvbJLtuXpqxN1nnmVWjLY5K2U7po8a3pQFcjjwDRLjqHV5v3tFxhr"
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
