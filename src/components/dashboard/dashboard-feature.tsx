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
    "51ZGkXQtvJb2AumcvevxFBSgZyQsNy3aWFEJSukWcxjgbU61HYEMLqr779iUbQRZZdrXcfNxsqzHiZCyvr5Ssf8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EYLEzMrjN8GrNPCQ3zYz1FjergFKHhansYoLGcqKsmLj86X8KkLiHZbeeurUCXF9k2mP5a9pyxwKt6L8YBzH1nq",
  "key1": "k75NjsZ2gzskt2VUbGGuBczybXM1sTDX9aUFg6BaVF3W374Kzv7aRvPB6JkaNqJQRyQeBVh4VxUqRFxWZKq9Fi8",
  "key2": "3WT6kR82DPw6hFLfLZ5ffq7t5KckqRvDEMEHSsWsMhvZbgRqdUb4uEgFpLEBrgoSq87sftZKcoRGKqnW7bZkRsVK",
  "key3": "3ZEAAwW4uB5LG6xLWJZX1rijL8r21F1iaTN2UCgS5qyzFERMXyyNkfcsNhCUv56DHshW69S7Jhqq1Yw9efsvfPs3",
  "key4": "2m6VfNb5Ci5KUfkr3z41ZC9wAZbPMb2rKPCAeYvptMEyjNbp9JMaz6LTgUtFfLWxshbUumYXT5mTnMBtrbo9mSq3",
  "key5": "KfMvLdQN1sbyFNFCP3TtfRSNh8Bd46uuESdZso9xemddhY6RNpAWm2xM6z8D8qb4PqBDwP4jNMSZkeDAQMaAD1n",
  "key6": "49jA7d1q42vrJhjHe26nkuf7WYtSzTrtor3oRvDYuEthg32duzZcpnAggxLHCJoaFYJ6hvMg2J5ouN7F2Vjip8je",
  "key7": "124vi4ffiVRdXUbzbKa8RmiW2Wb9BUEfLeAfJcYWVTD5vew5nKMDLpedX3VapXikjgWhvVyPQCfQ1gkLMyX5X7r1",
  "key8": "5pmkpfNZiJDo2RAAQQa2gNVsCCz5znT3bpJQJHVnFTd7hjNPTNNYxKXLm6mazfGaGJTtdcr2meVTQTpdboHS2eZ6",
  "key9": "53KGuWVA9JApT4fBAUq4h4PCQ1FZuwpuqGwCAvEPfxwydHscztdXproSeuURy1MyuX1raiajxC65cGyBPZhqpUZ4",
  "key10": "GB7HRej1GUBGRZSDNkDD2crGFAj2aMjzE5eKtarcDiKAW8C8kMNBwjvbNxa7gJJpbjHo559Ak2TCvnvmTwG9qYv",
  "key11": "4REc2c4A7MtDb4pMkB99hWKeP28zZkqnYE7Q5xNHQpv2VNF1hixwYtpCFLyiyrAruXTKobF75PDbi83ZefccgnN7",
  "key12": "4noux6QPSaRjLzYwRg96NzhhXWy5ZhnbEkSs6G8Vjvke5E6APwcrxjvDbt93AhL4X9nASnZwPNmLS3VmHZTcwV94",
  "key13": "3zRQk6LQ9ag9gjwgAR4fraCHmLD6rTCg8DcP1NYBrYJECSZpXJrrxwVtXTaPaLXUQ41vyUH8WyX3w8YpR4z9JW1D",
  "key14": "5odvuiQRuUm8dQaeKP1F7dU8yE7petiLNxwHKKo7gmwxDbATfVwZVwbv41bVwYNEv8ETCGcfrwHQH6zuwaU856VF",
  "key15": "3pLpoFFieuxy8oSMA5f675hp9iqCmSqFoErs67uBqRjd5c7W2R9zXvfqJWbDcqHMFd4KZvs9XzzQXyVF7TKH3Rpi",
  "key16": "4VzxaxuL7MmkDEFnoBm9BtFdP68FrE6A2zreTybQd6NUoV3iJom1x9AL6EaN5Ez7ibnY52HX2KSsQJsH5mLRCnRF",
  "key17": "pdkHK4ric9LqRqNUDKaevUudjNvhfViVbgR1AtT4RP86UTBhgShtpsNwd1RrdSaqVFndEN4Qj1PhYSEPxKJ7YsM",
  "key18": "reV3h4jmaADjjgY7i8dMGiMxKnAtxSgj2HFk5NdJJCaTJBSCYb4Q6ZehNzha8KdztMAY33jeUEkXFDp6s3d5YMs",
  "key19": "5ayPG28kx84BgtRHuSPQss6UVdq9apYMe4rnqKgQzXp7qAREcoThkFYgTByErVNEvUUB4HTpgkgd5kXWRD2BzNgm",
  "key20": "4gqXHmK46hTcmTUZoBWLsjLaNZfDaifRSj4LiHYvZhd9Csyp96q6s86qmQrQxFF6y8tfSYRGzLcdSik96WYKATgx",
  "key21": "37gVJEhay5VCK5qMsSdQPm5PNjkPssi3csNJfLQhJw2wz5xAvrB3NzpaHksHz2XtuG8Xtu3LHyeh8gwJKxmwDETs",
  "key22": "544oMLUfhTdkQLFAwHP6CtnVy4zsLaEPSG7GoV7irtDZgPQcxDdMN33osEZaNThSdy5rDDLqS1vrX86JpCoFGLej",
  "key23": "2ExyWT9tWvmep4USDzTEJuEjWEqMyEq1KKkqmsmeMsmqCmc9x2CyRpduG54Nt1tgiuMMuFwjV4482Y328BJoeqRZ",
  "key24": "4zY6QLK355a4HgJ2hA1Hn6kVM1CC7Rm6yRuoYSn3mDqofYiHoGAXgcyJ4pDDLFLUkY7waTzsp61GgwFh8vHGXxXi",
  "key25": "5B5qgHsCwotfqocvNJZrndBfAGKHgeTXqhyxYvyKAwxywm9ePqDA3FnVf1uQzWk7n19FQvycPDRxhAHbzAequZhD",
  "key26": "5ubh3B386ietisqdqEv6fGVDtJsKhK1iQ54a3RivVetioGEQMgtuxuGYJYVBzFoSd69t9sYvuk4npDG6fHD3HSXP",
  "key27": "Qk8XZ617pJgU7varMo2ZXzwaqtCXuU4ZM8iB7jnSZxWAMMyhmNSHkWXV8jZRxN9N7YvYFBiwNRokucSV5fFHxkH",
  "key28": "31jdZTjGNP29hB76zowT2zZN9FZ1gHnvbBJDNkZnCkrV3SFss1WK1WtNADFzUwBwuNUECJmyyr5S2rpcDPakNs45",
  "key29": "3GUGZmQDQELpWQA6TpdxncBDf2gnoknGkR4rDSKJQtTgEyShTLvHDdw3CAi32KxWxSpo9DUHTBRrZfJGeWCB8FBR",
  "key30": "57QXrvkZhNnxNsREExqVm1WXtyqqkU98ZnBoRydyfZRHDfnRxePinTTMej5NLLiR9CtsGaieoEPXHUDKEKs5wwfR",
  "key31": "2hYBE1HimABHCo47mFY2ZHR2qaZjcifyue1XSUUnupZTKtnykZAdv9k1eJMBmu3o5akegmP5MNuNcrSGBq41zcGd",
  "key32": "4L56fivNJ5YKii6g3CtzMRs1KwegZpNbyqWnMREvK2gf262K252AavkqyjgfXDJQBzPE794YNor4o7aT9YdCV4Cr",
  "key33": "57KRem8KuHc7AAwRY1G3ECVBTjXiu79UruGsqAHUhc6aHEiiRJjUs5jcZQWpeCXkrybCV3H3ZBFnThFugiUQyfGM",
  "key34": "2F5enypNG4rnFq8jjfg2R4sXfLpyM6nXBxNzUERqya9VWhYrRrLWEfr9xe4XkxSagrzLYvjudGr55Tho5ok9pmwp",
  "key35": "2ybmW4NDzRFWJ94jGUUxm9aWQX37FvGt5mWTANYaX1mQtBoesm5Ccq9waht8qoT8hTeVjaRCBAQpHeoFMNMpKr6g",
  "key36": "3EjRiTB3PiHuTeS23j3s5SXJziMou6kCtdXF54QwaBrpW43ofhnermoQHaJwPrawDZgVs5bN2DqkoF4zo93FqUeW",
  "key37": "4YpYWJkkXftxnXJXFEvrqMAwJxBsvHG8RS47fYUkqtJ1u1WUH4QVTbYMKm9kmBimurj8Bj98FQwfCETvjTouPpzs",
  "key38": "5zD1XafwYewG9178NZakBhPABBbBWh6ue7qFJc6Pu8ak7t3PSpejPQqYfDVwca8WBmF2rZ399AwQbs5kxzV5UVuG",
  "key39": "2k6ST4HuhkHHdWQu1xRywMG1uxhJXzZ73vXBsurbbxupGzUTJooy9sWg6WSYQcr1SHUENhuNdGQW3f9AktM4hBVY",
  "key40": "3CEJF3M1RSDwQy3nynPg99DmM7k7eUFAFRvM9BzacFhTx5j5BeZmCDaXkH8ttZmVEnrZuezBh6ehgaRqtaNm7C52",
  "key41": "5r6f2VzypcJ1p5RzBW2qrgivQeMDTQiDwNDA6gVgogJLZEZ52X5KMVkqhCdsesaBFHuQpxJUVjznYYFnwmSvtG4G",
  "key42": "42cFwkgYtDWFz9z6wMPBNizRWHaGcwi5SgX4Wi3YJLSxhTiS62kKYEikpK8ZZmAJwHECRaYWaBwcfrpKfHWUU6mN"
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
