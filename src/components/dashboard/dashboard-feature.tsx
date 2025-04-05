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
    "36jnSWaaMnDTVV7bmorxYpLMJDL3aotRcX825ke4ymYhLiJtAGUjkmeWSTEznZuzfi6tkE37PZCNodD7RVhfYWCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nKqrrjhy2orZFjG5Fd7p4rQQwgA3QHhGV1m3GDvZhRuLR3jqY5bktrwDjjGCtC5fx9ydVtjozXxKRMDB42QxSxq",
  "key1": "2YkQN8zQzGTRpf9v7mJdWn25GtY5J61Q7g2difmZQ2sR1svA9DEcdk234WYX1myq6eLSTy15mnRBSX7fmBd48x7y",
  "key2": "kiwz7WFbQbUSxmwCc952gTR6TQCfrHvJqUHMWiTTWZpQtNpZaZUfKUoRNPaRXwxeUjHDCQDXHmJTxPMojobCiz9",
  "key3": "46UVhtJCzgxBrUDGxBNTECS8epSd2Mm2rncEY7HwkFpPCRve2CF3Dk5pNoUht78euHS8eq6BxppTWPG8jyZJWVUE",
  "key4": "2pj9Be1WirXjS6bLDca8tK8UDzjgtCQMhuQnvgEocb9Q1d9X1Nj4gLBwcXNj2t47SMh6AWUGCnUWxFR3ZCjxW67n",
  "key5": "orFXUd8isbaJjpvt6mfnZMCQ2jSqzis6jCG2hucA2P7bdERmEmEZzbuDz5M9YpZGhrMsmRwnTKNoKbTwf9zbs54",
  "key6": "4wtHVcGZRbicmcAda8P4HfqvPHp8ZRPHTxQAFbFmrDL1GWEfAkoffZqZpXttyEsyrvvQJrePmyzikoum2V2yud2v",
  "key7": "5NifJAQCg5u8jx8HFo178LC2wT8yGRG5BVTuCQjcvrmfy3AMVZJoGhZDmUSuMvGrmAhow671qpMeE8vVbtT3FzRm",
  "key8": "3WNpcy5NrXq4FDBnpSScVrw1fwJ5WjXRnmyxLq1eJPVqhiE4QvvbHw7zUeanidXbtK4oJwp2UT1wPqfjF2fRSfvK",
  "key9": "4bqj485P9naNYMwGmHLfiaDBfYf9P44QbEayVrPfhtpWwTkwvLf7csFauvZ3xc9wUmt5idbwZovnzns51MPXxq9T",
  "key10": "4PVJniFHYx1tR11C8FjsQRk6R43Wj2XgJczSaigE32FYT4pXP8AvMEzuG6dXDTMo31dATyPeWSkwmHmzENvypioU",
  "key11": "XV8SqGoZhS7E75Mv6JLGTxKE7BLJq3MDe3z56pZL1CosohQ3jPhiuu9dnkMto7Q2RmMLVcVvoJ6bzbvB8jxVxmU",
  "key12": "4YZ6nhXzxSFv7iNnEXpyqagJgqpMLjAmRosdZSgzjG77iHvR4Pxqbat3SNAcmFKSiV8uLKkcEvMS6Pc6dvEPN2MT",
  "key13": "29yNidfnQZtZiaPeFXs2ptYYEyyRsBbBJDnkqunirb3RjT5uRWTMr25Zyda5eWJGPsNrzpf8QebKn7r98S6T5L4r",
  "key14": "uKM4hN8zYuNKxP8a24ofxdL2wfc5QxWdTQEinpnqcd67YQsYWbMgPS3EBZXfgNmDM3r4Pm9armoeaUKK7b9Hyp5",
  "key15": "23k4uy7jFBasshYtmWg4hH6g2jNkdQSmWost6LG1gzUsW1Ki2peHXASaiKW3TYHERpjWKCUeAz2XaS3GRrUGh9Dk",
  "key16": "Di4BvhLhHiHixQcNRTkAJ6he2k6EiG1MQoGJYiwhBeEFTzAG8F6Xh7ffZ4d1vuVDmztnZFtGiGY5fnrPU72JVvV",
  "key17": "13sbS2s8uK3G8pTYm4uregvFnqTBRWbHRbAwz8gUdPqt2vCM5Z4HSbQLoeKssPyeyXeiYxBYC1woficv1CLzvYE",
  "key18": "4i6SZqPT1xYtWWPqaXn1TijWLBnjT1YjPaS1Md4MV46Rjc1NHJTrP5pi7xgVT4GxdNiRoy9xukcvJkdrJAoG6rQK",
  "key19": "5yh88JwEpniRKgGKBxhoyR2ujirEvZPBce9t9C5b2ff4uGUzziLap7rvhKs1v1nmXZSPJfrSu7XsWXGPfic8xqt3",
  "key20": "38BsLT5jE3xB9RCuJadoRPahEZ3if9rQaWhRK7V6qzzM26H7bqbVY15daM4JbNpVamUEuTd3k5vBx7XCLBe4DD3t",
  "key21": "2tVAkYdA8LnLkPq8LZTzDfbHGR15hTQHZzcfS5w1QmfA41MJF4wnbSgSSuY2g35Ysoai2SpB1iNGNKZHYggrv7ne",
  "key22": "3c94PozztUrh5qtgC7oixMXoqAHRNSyVupycJSskwCEfTnHzoE3FDPy8KUHkxrqWfC3BUraUjYRdxW5m2N6mUF5",
  "key23": "3j7WP1sNW4sMhkVEjRFDvMif8xoCERWWsTf8K3vGcEGaLJQVJX7wvEqdUcMYAqsDops61H911cgiMn9z9SfJGzQA",
  "key24": "5roWvVM9wXHX9Gix79wHy5CdxEM95xV3jcWNsutLufMZNcsjM1JhtzWo599o5uNxRc8jvh3yGg2ufE2xPXqRxyph",
  "key25": "4cG5dN1Fc5A367vFzPRfZsYAWq3BVbXBV6VXcUFbL8pF9bhqaRprtpp6SexRBqNKxNdq3wkLCAPHbehsNiCXPpzZ",
  "key26": "37jmqwpjrwKZv6uhsr3VNevC4Qgsj4wrmx9m4JmHJXcv3YjTuSHrKU9LFqTQJnpohJu86CfXPLMVd6ybpew5BBbt",
  "key27": "242mnnqq4kkcRdphSfxZNDozYSirzS3HZQSaW23xLvT9FbcKX3jhpRpAe1T5YAtRW7EdDcJMf4xRmbCiTGUbfzFB",
  "key28": "3dqh6Zj46i5UKsDeAZwNHiVVC331CT6wn17QQCE9G6AYvePSXMXfbC2MoSDuuPpgZzkPiq9FG9Mzj8hxuZQG44c2",
  "key29": "3JfEPiFixDUt9nXr9NLtC7P5Ds7tkcP5fHUUihMuLBNLZZzKVxTYXiWyUTgMPsqsBPLxDgK2g48CWepm31QQuKZc",
  "key30": "dxzbHVFtiJwDLpyuKktN5aTj7Gitzwdr5YJ2qHTgJiYsRNkSiUH3Y4dnU5mki2QDPD9P9Lb6PXjMigNmyVjs3ww",
  "key31": "4swiXPq81QGcYJWd6vXbyrH1DuL8mUfKt4qYKMaudKQkWfM3rHkhHHXitJ4p9GXDiTeftE5aZHVxN1Ew8tQe23cM",
  "key32": "5tEC1P4Jk6YAiannrN8LTqVxcxb4h2zksAnBipKKzAApAzqB8G1vuWYdJyD7LixVThXhfiH2SJaEdq3gyt2SG5Hc",
  "key33": "9mRSo9cobkcVSnzzMJKKQP6jpZZf1BtjAsYDT8WnT8ZzUSqQNEWRDG9Uw29dpguoFNmYAN8VPqxxbWZch5zVNnJ",
  "key34": "2sTVDy3vjtuGCLmAG79fiHwyXxsuciCaVtqbo5efRMJbRSRuyy34d1mKhXpdHKr5M93iMzfUUxLAuP64WKtpcMbD",
  "key35": "4kgmPJevCT4HCBtWZyFEWL15MXXGXHWVGawMAwG33UVmHDFdaiGzWdhRgWq88VmKpk6K7Bmp6RusnsDCWxDJQqLb",
  "key36": "2SKUUXN7QxPG8rTFZyUrerwzMS9zM922J8wcqZ3FwqipjgVMuYt68G7aeuwZTkWJHdzUZuC7qDZ5kAoUNvsjGcew",
  "key37": "4v1492JsrdHBQMgaAH8n55Cv2CsL9GfRuBj43Hg7MTsi75HQV46DQ6suDM7FacgyscLWcNRDvb32z2iDVc227sni",
  "key38": "2FS9KMLwypr63N1FTG4QwVSWH1S5n5p9m98ebdeZZEYYhxvTnVVTbfEvgUpWYmZXq674V9hNPheWds8faBhitrWR",
  "key39": "5RDEpB1or4P8XhFMCxPjRhSwGuwj1btXjAuKP7y77N4KBs3dJaFvwnzRUTAo5nU5vDf2mQCDWm8SPid7owKimLti"
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
