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
    "4kSKocyT8Cm5fFwmxDHxfcbu3CkUDMT6qrRnQR3cypryBpYqFnc5L2wp1j4JwoYhjNWcw36voCr5YSExWfbFYJv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ye55J35AM5h6y6mjHSv1dPbw8pR4gViJeXSQEmJ2Snra1DxRuNnXH4i9aZAW1wvLd55WfwAPq3jvRtLNKz9hohg",
  "key1": "4chG6SD4emyw5588Vi6ZZmsFqDzU7cxswBvKkFJnc7ZSm9UE5RAWV6E3pAVyjWkqy9tqvkqJ9U4Rq86X1pxiffdS",
  "key2": "5cfnJLnzSkEMuuHGqca2XEUmJ16FCFEfdQi6PSvAzLPSG6sjHD6Frj7yKDmsbP2afN33qxvE5G7A35MsYTY5nxBg",
  "key3": "4h6GLqAAmzcDfC9EJBVuT1dSsPpBBd9ymLvPaqxgYTyLfmyEbs4zMEKSSBLw3s9uT54dKh2e57EDWMuFodRHuYp4",
  "key4": "3aRB8kFDnz2tPLNnpGFYafb5Zp2ew3WXHbPQNNcb3y99JTZGaeKMmpGuRk5pMU9HJhMCe9gobmtMVk82kaSnwmTD",
  "key5": "5d6ijPwJTyfYP18B8VsSA8GSgEZTZ6Ymwh3VHvYj4sUA15WBcBVrac7zCDCjjfUpre95EjYSAJPieWEzkrUb5TNo",
  "key6": "o5BrN7byZmsqDYGDjkjdiHDyfpqmyyx7h2xke5XEzYWWpAcDaGpSTfRkLNKqWuR81SfxVWb1YeJvzyBfRg5y7uv",
  "key7": "2XjKXAYC741XPyt8Xwn3EGFUkgUXmSt6oMYLXhUPcNruh8QKeNy1AsFVY7woHxQN92j2YsjyGqLoJug6SHhZE9sp",
  "key8": "4KzWTNA7TMWdZKq6bQkq3M6XcDkx2cSuPhD2i4d5WMvhvmShDy3WweQbAEJzvmgbgcGQxwsgTACyxJpJkwTTknvD",
  "key9": "2d2Z3VPQM2NUzq8dnvsHCFDeEvLJnxfQY6nXVgb4GpaDmJpwbpcwExTSGdK3qRMPTdCUvpoKceVsrFX76VsYiHjK",
  "key10": "d2tbdBMz9wv7NWb39WpUbFj66Q7iXo9phQx7zBMbBnpPM3mnwVQd7NGFqskC11gvtGLWrfDJP6TqokA5KZwHwnQ",
  "key11": "S11NMNKMiBdZ2JgUkNxARQ8PnhBFH1BjqKPh5f8cGVjVuDSXqgNt5WmVFbi2A4vsecDNnyQedEZ2CpL35PZpFCy",
  "key12": "4mqddLho71b9KPSWf1qFwwNEQK8RL3tTk5fZTVDy7Ve1NTqDovM2fJoeDzqsGTiYPCLPfvvgKzAXsu9KUc4EaBBN",
  "key13": "FFwQMpkcSps9xgHzbsce9Fiw3ZNnP48Fb2QqXoDoR1nhoZrBbgT4CCSTUb4nnMB1EcXn9sm1CTVPz2D77ngguMA",
  "key14": "4wZmxX1pVcD87LU7Z3jsdsnBRB2UtHb8VdpS2yP658B98zsWHivTXvQtRehQyGCUNvxtQbMjNGVeQYQcmHa2RFi7",
  "key15": "4mgjxaWJsDU5efBs6YnoD7gfEKE7i9UKjS9d6Vc1ZBxpm9hwd2zr6oD7kmurjyZXcAyJ4ATmk8Lnh27Z445YBez6",
  "key16": "54Q9WCgEnrNq4z3rpqkFkTYbDkhPd71cxciQgUyfCJzBpXETLCcq3Z8xvVdvoWCePbm14gmVPHDUMuRWuY6ZHLgs",
  "key17": "aoWLsmHGQnJT6GuJS4ihSjuifAdqmsdzc86ZTRHfpkbSAfS76QuXrJrzETLFUif95poUK7xwa5xBdzRptuXLzWh",
  "key18": "3hMTZRpr399W9wxykBx8eARf3HpJf5XQW8fDBvgfuCpVKQwH151kxQHfCBADLj4pLMNxQXvLh6zqCDAJBbNX695r",
  "key19": "5vAJNWQQhK9PV2AYLg4rN6Q13uFvDT8cvoJySMq9v7ncDuQrEmULN5Mj7KrqMTZX1UMNxbTGXHHD6UgsB4tf8CTY",
  "key20": "31ECi1Lq8A7qgvfTEho1akHREPF2pmJvU8vSUbrT5chJG2yuzWTPPSc88AUzGjwYKFjEkXuU82y3rMYzbce8vmSK",
  "key21": "3SefZMgNUQqvd3D95G3zSRTJwcgviKziGS6v7Bgj9EgRWt72yGC78gHdBohPyAqo269T5dex7btm4E4hdQfWfmps",
  "key22": "5viojuL5RJ2JmxBV7ZYLAouf5PPA9zhbjQPgwxqnpLAFt73AE1GsdaYnit6LMTF8ZvNXCZjKaoniTjueUwEjkof2",
  "key23": "3qWQwnTbGvPuJjdGFYnEyRAakQ6ipyu2ugYcDYx7q3iUho6hCSFJroz1FaAxwVFGLFsi489V1FvRrgW3Kbtyi7uc",
  "key24": "2FmRnYFUN8QaL3Bn5UkiAn1Vd1NiXm2ZsVnpr8774QiyJhX1rj2KtHbX8YYnm6JStxF5uobQph2o4rW9VipASjiJ",
  "key25": "3b512fsyaKPNBJxcjKmz7Sy1A23UhjvskXXoDDhb3hQvzcDtuXTeQNQGSeFtr48Z4s5k5TvnG5uhDgxruJRVM19E",
  "key26": "55uQPsfEXM3PoGifwTL4zudMdi2bbvkhmLuSoaij7vxG2ZGdYzbMr62egkpGuUwfDAHgi5Jvt54yMG36xFDYUJx5",
  "key27": "nYASqRSJYkCv5oVkatcSmU6nDGH697MtHGQkoEjvy3oe9cVk8ywG4TbsT4SPKa4E1ML9xJEqxVuuiJo8FVW7Xyo",
  "key28": "5zhqdAkauLhPNzM3gcz8wx1SoK3qdrraraF2R5wQwEPfULoFD99zujzm4gwnoucfkezicrc5fEqar92N2UAoxKWv",
  "key29": "5LrmNkBLtvPrAPzhixFL9pagodfGnamxgGaGiBQDHkCrpTqMrP3v33N7p9eWnYt2jCXGkp6iZQMV5XvSwHZD6H5y",
  "key30": "3Ao6Dt7Gn4H4F9XVQT8QXF2yriAjur2iAaubsS11K3WpLdG9hbys5pjSvViLdovWY4GjypRj179tEbT6hFyrwaZK",
  "key31": "2u5JmS4KGyvaQkTw7EQc1uWRUCqUXYetPE8ycW5Wu4dUaZ67fD3EAHzrz4xXCyG5XHugy98sxUsbVBNsVhtTddSW",
  "key32": "3XxZWzNTZKVGSipyjQD8RMVKmeZ3nCXv4rs8NJcJxCrwdvASC4aMtmV9XeCSoYQLok2m621cKQroh5bqEiVWc5yj",
  "key33": "4q3fU3euP441SdduHjd4ygzaGqB3vfaVhVNpJmXWaTqUZx9GSE9YB15Lyqetzpg4BfprMP2EtGv461aGZC5X4wFW",
  "key34": "jokSyNBv4X19ADCeUpv7d9vebru73XsbbysXukMhxvnPdgNTb3UbvDDNAugEomqBDSLPiY2BB7EujAf5ohkRzB6"
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
