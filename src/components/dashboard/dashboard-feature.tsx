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
    "2pFqWv4tUaYcGYS8TEgapVMKJypjtEzfXUdb3ZcYV1cychnWyEtpxr7chiNxgSqRYAess3w2wEx1EZiq87qYasWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkCdzm3Jhgqep46Liq5ZfJvH2q1mvzos72gF4qm6SimVNVJfmX5FGC6yachJmcksggqRG3Vq1GLZG9M387xFsbu",
  "key1": "3SuJ2ZHunaygPaEnSpmHqfDDBditTvU8WmTjZjFTCC4W4zP3j45CMz4SbZ8guHaxPz4biZyD5h72FcE4AJ2qcumZ",
  "key2": "4sr9rizgLnJVVfJyZa2seD16P2HLi8eFgViNEDQspfp5pvfMv8xCi7zAfC99y3dRMDUimCXErC7B44JSCeUvANdu",
  "key3": "2K7KSshqQd43HWHvFHVrahYRKubztsFpyFJijnY935gtcmaeoBSPGqP3krCvsYAdXee47ERPYyvEmtpwavLFdgkd",
  "key4": "64u3yPRV8oF1Ya5CsDfe6tPGzx4ZmHJhtdnoRB8JhE1KnLygZjmBcx3bMLDJuswgnK9gLDebrYx8xp1F57H5siJQ",
  "key5": "5ycDmj5p3R4gxbJBYamH4sFDEajht6JfJcr4iezGKWkN7WwDER2i2G4YBjmNPqjBpkXvt3yWvKnrG7k7XUCHthMc",
  "key6": "3DG5ZQAktzM1a72vp3uTveYvBLoLrJbuSLafMjYY87avwbjLo7Y3TMSzM6qvzNi8UEn8PNWmoD4iktKRKC5xzt1V",
  "key7": "4tRMFLp225a2pGeTV8XDhxeztAkyhHXAPM4LXYhm59cV4YUyjtQDALCUqoDKUp8kTsBHRDbSWmAuokPCqELBoiK1",
  "key8": "2KBikSTppXqKXB421cGEoDQqYSDUQG8ULkGkUseRf5Yz5ynoEBsijDHmKiPHojN58xFE9bwX27QtkKjL2vkpF6k8",
  "key9": "2KbSKEiuZj6EBUWjdHWezN8g6UrF3B6oVavSCpwLCySnVHLj7swpR1Umz2w2DjmsAbDXpfLgWCs3a32eQZWCeurb",
  "key10": "5c6fYwpLwLbnAJvdaa6JnCe9h3bJEtEoqAaGqJVWidnShkPHE4jcN7cyt8gFRURHSGYcuyyRJ5ZeVMNZCHRikfvG",
  "key11": "4WhtZH12ctbMBGtBtWhEaJzU9fTa4f94PK4815z5w16atLRKES3XLHjuamUUGCWnRJtf6BvpKK4VW97kGTos4PK",
  "key12": "4XwhCiyUwHFd6DD5FDh8qQvz5kyDwrAiUcydiPLWkair8K4XvG3JhNypvJBwFsZKZrYjDBW6ssoFi3K7TQyTXC2E",
  "key13": "2q7wLoz8Xzs5jT66DWAZ3MpFZHFHM8zLPdE4Jf4CbihFDXAnbaTbNQQHvPDxjSjeK8SKZgGFPdPQK8CjUwxuuPrD",
  "key14": "52Cqv271gWoK3AdLTNC22roH42jeXTfXC7DgqTed7VazzsuEH4RjdU6HB7YshTbWcCvioQvmrWcvus4jh3dAzCvR",
  "key15": "2sTGntAXCR4bVM8KUeqTTCraUggEJpg48dsgyS68MsGbR9peFy1kYESCYbRB1dbTQfR9tzSRSpoNJsNJhPCNvoKG",
  "key16": "3SzvyYpPhu9sJ2YuX4S66w46YRE5TVXb518P7TUkFG7UAjqqyyPYpuMmb6Eq82eotZW6JJkUYkUQu4j8nuwYqV9q",
  "key17": "5sXYiCADtbCLCfcfTdZqK1w8STZTdjRxrZ82ZSH2vUnHhkUEp4D1Th7yESK6d7hMTUrFgjo4TwjkpcF919NXtdQ1",
  "key18": "5YDBbKRznXpcaXzBp7uJASDdgPViFB5yzEo8ABbs5wHqe95GdskKpq8wxXKB2aYTFhstywF9XLsRjGFvKXcgcNHr",
  "key19": "4ZrsHhyLVTHkKBtvjbLxnKzBrHJjzGLX4JHiy3ZPqV5nQuEAxPdgMj4gb32eSPrxuxAbMcFgz4sZLZeuKSM6M3Ne",
  "key20": "2eXEjVEnfbaq2G8nQ8fcc9dgA6yZP9e3PLxXTU4tfKM7hhxkY3jnPQ5pL5HHjDwyRBV3zAXjdd3Md4UF2ykKkwP2",
  "key21": "2xpa59WCsXbDmvD9Cxg4VpkGY85TALheWyqSaXpw4pG3urqcdMuufTM7LhE266terwPHPXnq8MBkXLh3sWgXnPqJ",
  "key22": "4UUqJW4jnkaDMFyj2VHsYFAPB7yY7JyAJ6xown2VzD2iKoK3kuqsW8RCvG6F244b2Btg3m32mHNhmteEa45DS7Ak",
  "key23": "BqGgwGK3X8xDSaZPruq7FPWziUGirxxWokCFWYeg39o3dG3ksumyxJX2a3LqLdpQdtqF2frTqMBYaJ2w3GHnu2w",
  "key24": "3XJFfo3UyXYDJZUGrvmJuGjnxNxHVYJKiXiARreaxRYJ3TgBt61j22swWFcKy2LDu1sLnAEMZeJHqhUMzPdSYxeb",
  "key25": "4SmtE3Xb1wyJrHeamwjSLubXARFRcpPRSrXKvWZUvow99sXNHupvtfU8JfchJRMLfnAA4Du6xD6PRJsNx6gLyo4N",
  "key26": "5eUTkqqhf9YEQKo8TzJuZnrnP5uBPgydbhkJZ4H5mkyjQnyG7jzuwXLe1Ui1FQnTndPirAAhELfbcewxe4do5cz6",
  "key27": "2dtBjdonxi9GUdBHiYC7muvKqHnAVjppDZnnnKv2vS3eXVdP7DsKR2gadYtixKEEyJgqiTXRPy6BKVV3zbzdTi2n",
  "key28": "4e3Ldw7hoNZxSKBpKtLopVBPScjXveXHCwNnV7dRzhQR5c8oParbnQp3a5HPW7FasWgffhAGFj82QT8RBAT78qG7",
  "key29": "4fcS3nbhPGJBy4ZoHBjYWchixWjrxFru2f3eZryV9721cTwkfLVvAUq9cY6F5mLpVz6AvHDXDVF2fLvGDRZkKaJV",
  "key30": "5r9ve4YeWpzXq6TnajEYtppiqAPgsepMow7pi37uqXmx7yAEYGXEui3CNmw7BYNLeP3QZr3YS81pCy7VfWvLKBku",
  "key31": "PYS4R4dEUA1ykZdBjPAjAz5G4YZ3YaohM7aCnvL2h2CNNAR7sJymdb81iyCR4jbzNopkpZ5ZDbxNBMHUpBYE78z",
  "key32": "5ZtEDSW4xp9A6RPUi3awxdB3yuaMyZnwjqyzA3x1ratbUP8VWkBNBBkuk3ScmPps7HuB3raA4sJPDGvx4QwF3q5M",
  "key33": "41wEJUMLGS7iGZfnuRp8oxh9qm3q5df9VhYiKPJDkv7vbkkGyTLAGgZDDtZL8dewGXrRxB1rxu21uzKt8VYPgB8P",
  "key34": "5RefeaFYCAQXYt6QLzH31HF2YqPaTvu58hpu8j3VPNbKEnFiMQYGgYxeirLdmPhVUwnEmK2ANEdoRvqrWPWS47Jv",
  "key35": "44rDVjAMfVtR4BbGMxPf336pBTB2UhtgWKznmUhHirragfjeQQ3e2sgC8BEk3PcoNwAg4c7oLFMYtQav4WbX2p54"
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
