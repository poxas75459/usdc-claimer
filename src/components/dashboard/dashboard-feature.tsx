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
    "29gd9GZZjtxcyvsCW35aJkLgBj8JW7wwj1R5noXPgJpEVL1RQZNnStsygmwkorbY4XaXJ5jDTU6mNMcud4ht7nzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tCQznnFsiyQRmGwa5Uhh1HNoikxTk5tSHMGGcuUYVcSNotfd8B17yrfmo6ETbhQKqKk1ETVtFMizk7vKEbX44jr",
  "key1": "56nDv5fGXKVsRPGRAssosUTS8Hh7xGzJ9hjyQgBsBokwa1sX9Pa28VqAfcvuaG63Ai268cF9TirSUJ5p6aayd1du",
  "key2": "29Q6N9bSQxZX88sHJuEAqvfF8W8KNmnESyW9tkJcDCrXKwRdrFeqaXig5Ynen4duXVu1Fd6jxF5Wv7qmZTPFC7tP",
  "key3": "2KhuZjp6NhC4GXxxEzXMvQYtfQZW88rUjch5rwZzYtNBmjpEnJu5rsFprWbY8zfj6eXJc7BsZXQfpvVPaffb69vu",
  "key4": "czHdLwazarCZC7hWp2M4vQMj4AgaFKd71pAGizGabzz4jcPMorxcQZ3X7tnHF4arrLJ3FAAvvsneS9hypedPszQ",
  "key5": "sXvoDSU8rmVa3TdXziGHiyjqLYoz4HzejzpkZ6QZ9zonxJuBNWRBj2tJrz2qCMFGSB3VUBsxngazetbt273ypAv",
  "key6": "4ESUCkK8xRJvfQnsV1VPy9c8Lvr3cc38gijAcbqoz753i9hBSscekLoqKuz3fcquPCUcQhg8B7wsskFZwb4pRoKX",
  "key7": "4v747VWZxNLwS7Kh6DBAXzejCX1wdf5Nh4bBWzpmqVd1DQfbwGD4Ltg2HCKa1RtpgrMdHQNiAAF1YrQWCyhnAu7F",
  "key8": "VYjxkxc7p3nPnUutHCZjRiBYFyDDBzyAisPidfhrVhhJBz3gpHtcB2pD4mRsYMaEjiyyUoFB8trxbaw8To5zvo2",
  "key9": "5bVrKrWh45bDYBTEkehjLWnMMgQdHfFvXmNx7dDb5bzHhsHiUAPmKVJCdC7rBm2RaMfqBgrRpM5avZ6QWdSh18Gj",
  "key10": "QKyRfk11dAFoXax3mBVjXN4FKh8okzGPGFLGNQVGjVxxNrgirbPh2TWPn2t4vgXwaaLxyqa8GruNHMvcgYqmHhf",
  "key11": "5oBU2z272RPx6isGviYhF11cVRrdsHTouXKk5aveGcS8d89gRas1LWFxewMVAQgNT7MEteuNakmGppjraVnbt8Yn",
  "key12": "5rKL8uRyNjFBmZWjCB3YXyj2YTuwPaviC8Enne981sWC98Xa6g8NYgBgVRVWKigvvVpa9ajGTU1NpW2FgAeJKvzk",
  "key13": "4Fb7ss68VDsjqmPJfYpo87ASszUDVJBkDTbeZE2pbJ372QpgEmD9nrtKPVn3E6E2kZvLTf26nTNUcErBcugEn3ix",
  "key14": "8GajQmEs74ficU3pq66jheBExT7MB7qf5sWjVveunvhbHsohURx3kWJjuaEh38MJYYhiGyrwX8b6ak5PcoEVgxm",
  "key15": "62y3dVfsKjhCFwWSDMLiDuhWqdSCk8ZQCRZvv8Ukdy1idAno1anDLwNas8f88MSWBb4D1AXfFgfQgAhLnPatni3t",
  "key16": "2iv75udPa2NiPBLaMGh2qTJt59gqCyzyA4uCiwsVQkjY9hcyu7rxrMxCAuLKUAaBgS6jXwtTzz4M6Ui39sGGmYsQ",
  "key17": "5F4eZ3KWh8F5J7Cynrzh3qczDPKqtAqva432nGTSFygK81jYw3VTgmjyH4VRJvp1WF1Rb39BA9AB6vBTGYNCmCSQ",
  "key18": "63KfMvTrJXBBWJBsXDKjNnK7KRyheJA5fARb9AMo5cZS2ZNph6jH91x8a6B4AGX8iBaeCUMsYUDVR8bu7xtVdsPa",
  "key19": "39XTK6zQm8u3YwKB8v4gDJUVahi62P3HdABv96sR2McyjA4s2ZTAw2LiHeGAKun23LhZ25oXGTfgurax2iVKDjpW",
  "key20": "4Cz9RV9WdCag1oCtp6Z4Ws1WcQZnei4dAA5re1R8UJCz2iseC8SU5nwpJbC7Wc9Jo2g2D9ZVV96ikKYVMVXKCs4t",
  "key21": "4zaF3SergFJ9TDBxKUyre8M7Sgnj2nTGce3JFnbAjDoZYpU18ezH655WM7rVDUgYdxd4Xm1DiehVHn7ECqPnP2VX",
  "key22": "3432ZXVXrj3bKbJ2qssjoYVDBQSgEdyxqHmsQaC4GHLzSZFKagVpFP8EKG47YLz5N2akxWVw4xuW4biPZrdeSD8q",
  "key23": "2hiJvav4qvqYiejte3ngzoku9KfvBrBEWk8WdqeUeyGytg1JgS2hS4FoDNfba2xepxprco5qEu17H9Q77hx6PutE",
  "key24": "53ka3JuTqmRfy54eYsXYpqJrXroBKjwky6TXvkKjmsg5stp5gmdDZ2RCaYCgULhmEhUNBLrRnJSBqCL62mETQYUh",
  "key25": "5HLUW8YqJVjfsTTuuycA8futkx2HTReTwikY3gCzEbrTTbZYUrqGYFiMoPnsxNZ58ESChjN9hLhGGmuig7Jx1HfR",
  "key26": "42p2MGYkF96JoBm4JWcpMFJzr6HFwSUZYXNm5xrxAWVXCXBmzxfJRUX4ZiXWAfRZweDxKTJosp2Nf9ZQ1qiS3ckR",
  "key27": "xCnoZXQzcnSdz7Adu8saaC6CVtnvhgeqkwXvvBVtzPJLqViD2qerWhkSgLYHTMiiECKf4Fk7Gjes4fs5SuhHwUS",
  "key28": "4ey18ucZdNATJ6CQcduvjVaAh74PqAYkrQWujLocHVJ3TSY6FnWe1XrEom16eKKWdy5cQexFnkr4JaKZ9n9EmTSX",
  "key29": "4wPcZSzfN4gSbVfu7py64o2Tko3qn8AWMd9mgrQ7nRnPJSKfSAiG8fWGu2d2YGK3Hvmx4c145cwGb7CFh1Gugb1D",
  "key30": "5KVcR34iFmCiRStaSYMofFyuquiX3rCjc97d7CFGguX6kdu24dAP3vCg3aiL6StUC9A9N7z6ceRrcjsYu93N5EWS",
  "key31": "2ySiWXbteFvU3qkT38PzVVx8cJ6zmJM2MTLEH1nzAHpR2eKiKXDP5vy3jdwm6JAmdoTbJrw6wi7AFreGtvVNneDN",
  "key32": "hoYaBrmPbH59K1GpkA6ZgpMG4RhxvGL7V4yrYqAggJ59YcEL4hwVHo23wrbZeBmvdKTrAwpDwdbvEkW46Murzao",
  "key33": "bMJUxx7fsCiMU98XG7m2jKj5VSdNxk9898duZNXa44cRvombCiFnsq8bG9k1eYhLjDcZjG83Wk2gcNhEZx8Hmq9",
  "key34": "5CUJscqJvwW6TrcxRGB9S8i9344MNjtXbJoHbuXP1Stkz1amctsbCrXNqVh5T9XWVbUi6YBDhqfdroN8jzegZozA",
  "key35": "44VZiC7zSpmXXThQhq4HhXNzBkNuwNGtCvb7Qzhucd5YB636p4krDwwrxvGL9rW7qZXhpK9xTgeHor2FwJUmP7RB",
  "key36": "9VKrMkTgAm6gSPHY2rWpLNo83GxTm5Xj4YdmbfPkUpVESPPy48265Fo258cEDfCr8TT4jE2cmmVTiBqqS7iFzxD",
  "key37": "3HRo2mGQiQAYWhN9rSxDcqWo6raCpMzCFQknV1ZjL57Xsq7S6DvJfyUAWysCNSRQdMY7P8t8PMHFvW1RRKX9AVPq",
  "key38": "4w9xUtfCgU142QBXFsPyoRihHbvwzRJFWS5Rqhji82dJHubaWwwYVFbyLUtC5oBBpi5fjaSjPwAnBXCrbxYxoQV1",
  "key39": "528LBc2bVqqrNhBxKaS88AUH7YEZaitPdSierLpvRif8nkrfDKRaT5BDdUVGDSiEBPmyvDqSp4jTA7bHkpUnAn65",
  "key40": "5uHiaoHWBgFvGn2eY8DKZe8a8yxkL9LTFA99RJtbpc5ro3Guyg6ye7tBuLdLfXp85jPNSuUTL8XL6C8pETQpC2q2",
  "key41": "5uvAoRAbmBNY9yGqA17V8Sy8a8B8BSZK4UAswKFhJNGC8rQedDZ396vjy2jsqnvXRMeJoS4bFL3C875A8vuB692a",
  "key42": "e7DxWtJH9NbqQNdWKya5TD8cMscH8hqY3HbYYGw54XkTHzJsH2Q6F6MMLNXbPrYS98Wcwo1aPLR9xc87BSVGYBp",
  "key43": "3V1Gc9xiYX4s9Nai889oGLbya8ocnS7j4AV3BJhQU8oybS8b64XzCPSpVpejEHWXUGYwZKvxCmeMvhSFU6HVGbuv",
  "key44": "4Ldjgdr12cPLgYtvgBkHyhKFaUbSE2kFpGfXNAiHpyRgBuQZUoPxfvc2AynmDrfpcHUhoNpus2YVAx6XCD6Bqsw6",
  "key45": "5yEREsXGDdrWH768u5Cfg1agxcj4PLB8b1pas5ap4E5hZALaysWv52RkDUKkM2VvYN3zqcYqLAy5JEXWLs6LgszY",
  "key46": "3xFzqhjUmnHmm2G9ziJQokuN2ANz4cr3T94UnuUwNTfBDwaxFnbcfkTDVDATactabqw7mXmpmVnhsa6XGEN1nV8x",
  "key47": "4QqvqVFyFqJLsvr6E4WZgSJYRzUeE51Fc3WHg5NUvMwYAKQD8yQizzgNzEXSDGDdyD3zLQ51Hu13jkQu9ik36ci4"
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
