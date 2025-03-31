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
    "3FTqAZPopckHwFWhjaxBSpruCM6wz2CG37uGEKGZ3t8KuKwzCPxQhH5eAX4LknB6u2adBu9pKrNZuwKhZ1NXLdiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrQzMx5s6oNiMhjtC8iK7RzmKSfPAGr1vAfJyR1nPEcQVVaxz1QgpqXxbR8hgyh1xqdRk9PTyzDT3BGk1zMgWaD",
  "key1": "3ho8NN8gu2Sgqzaq2CVq1b1UbWfP5CbaiFAtGVqQ3wJ7AjH8W418FhHcX8YQTqZTQwzm2DGwGjM1nvoMbgpdWSCC",
  "key2": "5eMQXpk8n7nU1qKrvAgvb1D5XkeRdmedV9oEc9Mr9htYCN3coNGmp2fUZYcjfQNC5vF3cNKrVNn8DkkSNqYuWb5w",
  "key3": "2ffqcPd5B16G2r2N1RbUq9ezWUWG9U4sSPoxb5YwhjeyCCU2DscZSC8txUXFSNkXQF6zUt4SbNRi7czv3i1VtzkY",
  "key4": "5ZH1sd8uqTn5PfHXr6RZobvBEvhdpLhtNdRMHVY1QuJdmeCoTSUQRLz2iEdRjP5fDiTcHkfQ83CPshSGZ912W3pt",
  "key5": "5KhVcRtULiRrVGjx4ELWeygHrttAqDpnCXVDGqi34Vejn5w1VAXUNWQkSrzFHzxFqm6rP6WfJDAg2BfHHQK33tzX",
  "key6": "2nCuc65J6tggN2Hy7zScAeggiAkCgYPAjiVqgJRT3kSzRnu34zUQk7ZRqAm9en8XMvyNgmcn351tZ3cpkZDpAq2f",
  "key7": "36QLwz9BUbirKaRk35Aom3xM85d6Q7czWoy7Qsyek5LYXQ7hcV84vjDheLwZEg5B7BEbSi723NWsMeu1ftpEcvp2",
  "key8": "53DxDaPxBNMzrwtKzVXtR4hSuyaKYS4voCCYNYZukwmogMfCHLWXbhTicmgTPyzcLvi32J5wHGG7tKfe9v19t8wq",
  "key9": "5QktXGNXxZmGHnHSNUkqq5woXwdyHC9CkVMPgXi91DLTVTiLrRs2Hk8zEzVV92pTSe3mXJsUWuhkCmzMyYRxoqeR",
  "key10": "674zUuVXSLM16P6aoY45pwhDFb9ZwU6gZcjpFvzs1HdjwaNuj4iQ1G5HbH1YbbXaktroPwv5stjMkWneYxg9H5NT",
  "key11": "bL5kKHDMr3DeHL9nmXhbgXPbduHTA9uGwF1fqgogTN3cQywHfYBAwo4TgPJttjZp8ESMVr4JZrfteaVccPz5q2k",
  "key12": "67ZEMe6Hro5aBNgMJciyw83MKLy5w9znnt8ZqJYNHPYqzRbADm9KZ5qwEeRFiBY5EUJZfyXWMPFewyojmWoVMFGa",
  "key13": "5S7VfDdCBk6PM3uCgRCQaynURShrnzECad4XzmXa2LvcdxZf7fr9p1bFFo4ciGLWeYaBqbmd6WmGL1DMwEnvUbMz",
  "key14": "59S8sRguK2MKrCDuZcbobsB2vapjssgwurgjQJnJH7ymkKvPZgk8dwwjLzxPjt9mDGfT3e3zBTybCKvhX3CGbWNM",
  "key15": "FsDiYuN3vq2gMcdgadsWAycUs5r1acst9ytGaHu2uq1K7VES2vqePrMWqbEfRd1RHE6f8TiCPGRA6G8u5KsAigk",
  "key16": "5a9ac6SLaTPErsG8qi4YuWQjRp5V88bFTmzT5zQ1x4L9piBQGYFkajvX6FfrtXmRLEKxwSeBt69Z8tqDq1Wxi9NV",
  "key17": "4v7SoaX3jMwPsQr2pvQiMJv9ymzWwfc2E8Q1KPe4Sq3RbVJRUPV3BMG4rANVrzL7VJ7YJjRJbRrqqM5E7aZiLPgq",
  "key18": "wZTKxP8Dg6wvAYxsKGZPEbTorrVezTtzBXqZXzU1oWKmj69Lt9aVm4i9m8E4pHsGJ4Rh9etWdQ7M1ye5yVf8XC5",
  "key19": "5U5kNLjxtaN9cAdKYxdycVVxcU69uyaw8XMkph6bHFwEv9kHPzGjdWBvUWbcCFMTduiBXtn1WYiJtRLbuSGNHNAa",
  "key20": "4FpUo7xgSNqSxtiCk6C6sUBXofEcmMNnSjEsNzkQnXMWJTD24pnWrdhMGxk4xna4V843uVAQxtsh4DARgvcQxCcU",
  "key21": "2dr1s3bNjZ4caNzJDtfDnD1RGmPb3bjUHjU2tZB7DW5FGQGarmhQa8w9CoqPimxfDSNTmcbLjxoP7GWaPwLa3zvU",
  "key22": "3wnXeP8GhR9ZtnG9Vxcbhg9U1kc9v8AV3v1TX17qfoPHoTc3tAurMWfXmH2XEP79YrGqVLJBGtXRQqLN67LPonRr",
  "key23": "44JFWKitfHx7XKJGFFVd5Cx8sC7hDoWnE9TgTsJsr9VHSpKZJPLsdELH5ondCQ4kHwHwA4KkPFmep2kqU7BaYjQY",
  "key24": "5j8hDvnqWaaXkRRcD1sRw1N2t9Kvs3jCEx5ECr32TfKfkkvbyVvGCALuQ49bj9kEZCGWFxJR24Ews6am41MDEZWe",
  "key25": "5GFAWkwhh7AwmjQSfeSex2YB5Bm9E5Ch7fGS5eqY5ouEZRzi69rh43S9bqt4k3QYcYjkpgAsz3sZrcDupYC4iN8L",
  "key26": "2Etvf3VSBAZ7YLimwM6o8T3xPM6meGaGdcJSPaiKBAPmEjiaUDrFnA1Z3VLvrgMSodnoLyqXgab7hf4qVr3WpCeC",
  "key27": "3Zi9soE1zaBGBiSQyieSXhPhnfVQgwGDLosTL8mQTCHyWHeMUPXmEe4jpzf62KbdP2QLKu5PV7dFtn2X4uMyEFjS",
  "key28": "w5pakjUu9wJnSXxiu1UAMWPYs33bC7W1YjdtnoPoUxxTnS3qxAC3ooPtBfWDWorGa82E1m8TbM5GsEU8NfeKKh7",
  "key29": "YJP73XK6tKVrHZR4KsZxv3i4hVuXY4M3DoxQjFEbd7WLbJTqynMJwXYy7aHAyj8vmCUZSRRFNBnaT7oGH9XxBGB",
  "key30": "3C4gK1g9dogaLgCcCNxpYAGhsS3TzzfZ1dMmNo15CxhmHQsh4KqNKigDtibu6hs3utroj6S4DP9ZkQHfFvCAhyda",
  "key31": "5EmX3yUZ78bBhmgfKUwHNX7yCzPbBd8DS3fkeLLusrFCz3EuDxaAacCuy7rbY1uWAYEZFXPY4vxmeew1jsxkDvfA",
  "key32": "5cZC5yy61ziee8qUDk6x9rPgwM4SBeY5XEkoZuamBD2AGtWMUWnt3G3jBbmZkovj8fYcLoh2J6pQkgpa6Q6Zd6ip",
  "key33": "2CWMQYXTjkpwdhyzmJD6j8ahzNG68mfpzgHaD1M1AUwNusFamY5Sk2JCEYCLz1ejxVSRZPUvF8zMNpb3hN7fZtQJ",
  "key34": "2F7MqrBZAsHwAhQkxM4J3uF7QJs3D5QowqHtbTnTXa6564GqMEx28N5irWKAuZEe5MvkJsVkhKAtCu4Pdg4VGghq",
  "key35": "3rapfKxyjfU37GFxt9LvQ4DAaDu8jxGPQKv9eU7tJZVdbeq1W9sETWBJUB6rr8ykRVRWyMinm6MaPyq5kGUQ5qap",
  "key36": "2B6cYdAsfdoRPuQVsbRcpJ7LyqcsDNuV4wwQZxrkZcQZi9zGmw1YSbrtwcv5PFT7eaFX9SkFGNP32TqgFPMjLafi",
  "key37": "4aFFjH5yg9K15NqEnr5RNicxXPZ2ymBQ5zFzGczRwvGVExqoYg5tYUtmW78dC3Lvz6mnzp9VxsS8BpHgMvf24WgY",
  "key38": "HgqbZQRwnqj2ywXX6f6rqi4jz8TDTGfQvtdpFPqQxK9yWDy9Hp5t1zBPTxTueuB2u8i1Bj574wCGje7S3jLosYz",
  "key39": "54iTsLxnRuDxQjDkqjMdX3WkU4XZmdxS8eVDFa3MpiwfAkjZYharq9nywjHHuD4KR2DW5pjXgax2h9zAncZmh9eP",
  "key40": "4upuLbrPaiJLHafJYDDwEAaT1ZCxvX1Uc7x4dyqi2rDctRBXPjF3zZmd3xWeEKwm1ETp2CMSN3rvMXJ72ke35dui",
  "key41": "FuZo6ivmLeUExU7CuALhmP1KUjoniARL9pQMYvgDwcGUroDF3ZCyCU6LAvNHbyGg4wrAcWaAL7cWXnJ3snZUpzf",
  "key42": "2PW4NfYR3TrCkuMFKBH8g8pf3WBAZygbXzXuwYYFPJBrjkJEYFbRpM7LHypPSxr7By7e3HBmF6aAR6SYnc4yxkps"
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
