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
    "64JdfsJA5hYkjtX4u8CzNrotrEhK2KSQnKBERDVnbhMJkZT7piYmGttDyQPcC1qCzsgfDwnUWZMxjrtk3NTy2mwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yR6EDT2JMUJyk41xYp9Qaa54tUsUNjh4gqkMGvYz3GkvJxz4hJ3gp1nKe91FTfv2iKk5hLBUrqoVNjrrDke3jEu",
  "key1": "ssghDtf4NEpuLonpc5FchEeEBzZdvu6zmoYdSn5sAKYLDLcGh5FLGEH618TjGBnUtL2wbLTTiQQyrn86Q6gdZR4",
  "key2": "5B49ssR5F7enBrjZhtk1KhaY8u1Bmtcj2pMyWDFiMT339pnWD4ujjxaT2HQSnSpYHdNpvWKJFFPUKAiBivGNoRpf",
  "key3": "3ADEqV15Ta1suoLhv8atFix7KEabNpD9TW5GzHXNN4RsUV3rnhDZYZ7uAHn7ShfRWiZ9gjpEwjYXWHnbMrGpXHbQ",
  "key4": "32nZiyT2yLnyDqNLpPX6MKdQp7KLvwdkZ2kHH7Ewyb2LmHrYXG3LE9zaJie1kfUrmTJawQaj9a7zG4yZZxebH4p4",
  "key5": "UzPfqUdzSknP5v21u5Na9mckLqPt36ih114uNVBpwJ9sHccbY8d1WwVTycez4QVbxxGF9sRocmnnmXPhg1CqmLy",
  "key6": "29FbbtKxu4xFX3DDrKwruByg2QvjwkiTt7aPLRN9yHep4uo9qVU1SZ4G8nePEbMD7AGJWv9p1x66jTFVmSbz59Zn",
  "key7": "4B7NZbzaWuhJcYmxDAjDMds4ncrGsc1BeKC3TEvdot8cF7zYHaa5WX7UQ833mwBM91EErgzizBNKLGPuFWbrwk8R",
  "key8": "2svMvqHE6T5SNXnSBTgcR2NhtVDQky6cXMMktiy7afdFqaBVRtyABa1zTbP4YgFB9jkrATNAhrZ9JbCd8RtbgxEf",
  "key9": "esQoxoGLrF5A6qQSgvdscyWTs9WmVHYxCCBuhY4rXXa6iYfCM93fRzHmQugQmGvxqUVKDRTFrBLzYoAxAV4GH2H",
  "key10": "353HGWWQnBfdHFhT4jHgkkR1x7QShQDMFUaYVuvXF7FiM8yamXqUjhubmuwCdQ8Ccnran3n39U5EmEMuEk5En5WJ",
  "key11": "4fZTDLzxrNPi1NbMXMQdFKwmpTSEKqBjPXTLAkuTeURaa7sndubcf2pZ1Gigo2XqFsbJJJ1W9kYUysLUnN9JQhG6",
  "key12": "3cbHouRp2jnBcu5AuEbmyoUyoTneMjUJQikXrMzm9acX43ru9Ekkg18qkm75muFryotfnAhYS1EPhCVfVt2gMy4u",
  "key13": "2xeXQLTLoTPBwXKLBAz5yGgCJzHmSeqDs5k8CKbC7bkRHv9TpEndEFfsDEEv9yvkKYFhfw4RcApWfr8uEZtwbjZR",
  "key14": "nmZ9YiLmVDe6cShG7hoJYmVrF4EPoJqFVExgTcwFZKMEozcQspSAHXVnL4m6obLQM8cVDauxUz5kkiDfx5geFTa",
  "key15": "knMduA7VnG8htcyEwP3j5wEqA2vHint5UXrHL3LpZermnjXwYsNS9fFfcKSa586iC7QXvrBLhYXrXVVET6YK8xC",
  "key16": "2i7hMqQ3JviVfQuNfHQvnZ9yMH83c1nMPV1LS568suhyimZHHveibzFD5eHget6ZDQbtrifY1F3JA4k8YcaYBfB2",
  "key17": "3gSVCoqDvxeRBoFGbmXhKuvy9CBNEgyR1JaU7MNYTBvAo3hr2zzcadL7u6ygiP9zQCmJmKAmuAFr9JBmoAc9H2wk",
  "key18": "58r68T6hYS8npvyqiC8K86ZbtVZz2MxPbcbWVNA9k2U3f6hSBo5hcv45a6igLkAAE5iy7ofhVWhrHVMPaZqbPbMj",
  "key19": "36i1d6Emr1RWz2iBwW2pFuNxzoWj4GVQ9mWWwisrPQoaEvPk7Nj4hy5LphPmLSEHrrFzXcdn7krRGXjxbUghrtxu",
  "key20": "5ijZk6PNpFRDaQV53jx6rniNNVGsyjEX6zumYBLxnh3NNPiACMjgwWREyUaD2p5maxXMsRujdkJgTeLvq3hi4ExB",
  "key21": "2C8tuQMs8iBRNr28c4XAwNAzHMmt64pC7JafeDjxVU5KBrhGE3kUEfPVC6crxDXiMSdYjuV1rzSL9G4AtdeRMiHX",
  "key22": "AMHMJ9QSpgHme2bWDvimtoJgERuqDpjXWYqhRxLwmHUAsxqhC4v7SK5iqDJJ2AungFrgtvZwbVaE9QmdRvaSwBX",
  "key23": "3utrd98i1Trxf2bBpFgKd4WdUt5uDkcCn6Xt5TRH8J1a3BuFrkrxMGFSyBA5joET2eUVyrSb1TKkdZoC8u3HZQzh",
  "key24": "2Ej8amK13gt7ytKwH5r3N2HHX6XBBAeUCJopMc8DjmwpmP95JivDxeB8KybFp8dz1YiMckvDZgsN7aDVNiqTShDC",
  "key25": "4kkms2M3LmQJqXfkADauTocKoHdPA7tDeKfjf61ksjC4XD378sPo7uLKBdQFzXJK4NkG215mazeGRHp272vLkbmh",
  "key26": "jXkVafpKC1EgJSUCg4SETpaJwev7PP2khFnzdXdsBLGyWC1tArYP1vNZEhbC6jYdnUaxQd8w9U6hL9QXsMJG2cN",
  "key27": "4oPpYqAUX5g1eKzEyQ5ALzLj7QALemPG36swpGgra8wLDWgwtJQoGL9E2QcWGsnEFmNrNCAB41KqWz3ZTFeefJs4",
  "key28": "UX9eYskq18QkwJzaPowcpxh4C1ed4hsNBrrqvvX2wbVpxEweKh8mp2QEdoEAvbjDRkXBWX74F8f8pFNLJ3QbTCL",
  "key29": "3Qy57YsEVq9Rmmw45WcCaRjhHGHiE2CczkK5utgm2m1kiZccGcnVCTgy4xZfDXLwTKbiF35nWUuAnUx8UMuiixMA",
  "key30": "4ouhbQW1k6Ugxo1xwJB76vCUsu6T6RHEJd4eyuhjFeaRNpqiawr9N1BQHdgHfYozn8yE6DgDEwJpXexrnwNJQAfz",
  "key31": "2u1Wz6EqW2hy4qUXb6GuBiDp4LXe8ign69kUd1vLerxYfSny3LxnQ8zvpeY9aUv9yPSErzd2EdpkPnV168abibhM",
  "key32": "4JKtEA9JGSprFnWcEjW999boy5s2eUzLCn3KKEKe5JATq3Wt2ZnTNsPePs6aTGVYcCq14oQc8DUndrjJs3N54Mmv",
  "key33": "5bfLXULgK3Yf5XiEVAQCvgxjCfbDLr9BSt45rVMJozvK7sEKri9uL7wrJaxPBYheb8TWcnu9GLXN5c48patG3n53",
  "key34": "63KvuBYSprnaxUuS1eQG6cnFJF7ZDbJJcGXNsD38KuHbdBRbk7X98hrmkk46ATUTP8suPKGCVofb8iwAkwJ7ckJX",
  "key35": "uatUN81PLEiuUXhHFHVbARqQbqWaXX1q9ptmzLJUMtrMxta8oCiWyu3vbFapm6RQJMWeD2sPbRFuZaSSr9t9bnk",
  "key36": "2Kak2GNdB14NezELwcVjTdnx3pdjbt4H6tXg74Fc927V1rKCAypcAD4mS2ctsnQsMyTQuB7bnnHxT9wXJY4AmAq4",
  "key37": "58hGvTApv9TXcNJQLeg1f8JQgkKsNGG1BqYhJEsuP7Fx2AKrday4cXUWyJW2VJABfJxBjDbNjFS2TygxESueMrie",
  "key38": "28WzhKwezkfkHs7E5XkuQCxmyEPjuvqMJ2aruPsmgszrqbeYeLGraRFgEd4n4sWx1sEDuVinbGm9jLpPWXHT8y17",
  "key39": "4VM3SiWSx73Gx4bsQWnNQrkznVh1FETiMHsTq4YupAdchoJUEvTe4dSt516mNxgFW6Bg4f17o5JBsPoeaNW313BR",
  "key40": "3Qc3xbfzZEMqRUJW9BZPJ1BvFATHXQ1y9nuVEhzA2z5PwqmGx2rxi4hga8yVAjkuCjXcpbGcmAHPektpqGR5U2cb",
  "key41": "38PxmJzMktXWsL2iu7LHG861D8YiYJvp44LLpULr38kXp5ythjmPBTQtomUoDYbdccKmG5mqR4p2TbAB28xjof4Q",
  "key42": "4JkDucs2w7Mg3Pr51eQZQKMM8zYykgcVqJUxaAcxQQNbtnNPtzZbTzRZu5XJq9afUuXcf9QHkU2L11z7wwbAWM38",
  "key43": "h4F12AqYZMaW6KZnJshopCAFJ1mqzrRsK3oM1n9boPuDSKpqvr4QLQi2nzucXC5wLvwSgN3Tp5r5XyW3vnrW2Qh",
  "key44": "ENWvQgNJDhGYjhCqr8F3ZhCW21GwfEkHGfJwrS92Nty8PspCutqCQnaQqpLMLw7smvEUyM8nnVMG2oi3izZgyaD"
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
