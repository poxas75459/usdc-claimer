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
    "44dy8i1Uq9bfxv8HWoSYLq63FshNToptqRNAq4apj996cwett5Lgu3mCSxBm52DeJa6BKwCqs4bRaTb7Xapk2Aax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yjJdTNJmh4RyLw9rXQGzoipABYS7i4SzuGq46wdHK5rdrDNqTTgWfEts8jxrTkUhXzB49o7jwuVAimSsPfjcdLg",
  "key1": "4eFVBu9P1MzArNi8ky53f9XEn2yzRB7ZHo3QF4vthWMATd7i2NWT1bvNLTKBnc6dxi33WXGJjmPt7hvFUe6U99ST",
  "key2": "5u9ru6zzJojknQtDdKNVirxVsg4rcZq5mrbzxK4v9VHjGSzaK6fzrTBgiqdWLuhVHDNGKYwaqkDdKspHzvYaeoJE",
  "key3": "2BzUEwbDbQ6127BGfXPkdJ9FXxpvn3WdxZCrgpbCbffswUumR4HcNoEiRAwZtEdvq5UhS8ot9yEtNVihJrioYyp8",
  "key4": "5A2r729dVVr4YSsiyM2rzGohzwpXWGWMWq6n42s7V2u2mwAApiiCZLfhrWN16yHASQgjrfLbhnucfXn7tCuzuo31",
  "key5": "2BAogu5Bgin9nCNwEBt1UV9grwrcnWFZaeUCXN8V4ziLgJ8mFW7q77EAaEbkHiBX46tXDEwkGJtxNzVkviGTvoxk",
  "key6": "3c9vV4Ko9WJ2X2F5FTziSG4ei3EZqjnyZ5uHYXwk17REaWa1uaxREU5giNtCQ7iMUsfbQEDG9YUuXR8fDcDVyvf1",
  "key7": "4pMvj9MYiZFEwVJzrTbgG3E2Ykiz6ZMpHqERfzXbsxTGBFWS98xfsq63KbkYACjEU7sbQ2E8f3co8K93NkKsz11w",
  "key8": "3dDa4MAPD3fR74JmvZdWkjBx38KzncoZ7ikvej2sqYRoh1sjtdbfD6rbbCYQ67Z6pD9ETZijZrRD5apxKdLwTehX",
  "key9": "2eLoT9vthdKAx3PucuRMcGA9rVa548UxNw3MTK3JE54w243ktaFCesyL8yYhErRzgoZLZpaM3kJ9rDabdtKh9NZF",
  "key10": "P7LqJsiNSvUmmHBnXXZgFUeGEwyoy37Mmw3FNnBTnEZVV1oNEdcYKNvDPErUHMtRC5qaVTyz9TXgaAUeVDghgoK",
  "key11": "22TaSeSxHcfm1RHGCkra3NZ9NyFzaJq4159BS6RyBcujGFEocVX3WmV5RYVfFqtLFGpacTHe6jwvbYU254mqC3T8",
  "key12": "2SX7UpCVs1uyFnVHkj3BoYzssc9LwdyjheTaMWBfU4tsDKa4V1rLbJ1bsaUpDEx4kSd8W99er3gN77qVdAdBLbi9",
  "key13": "4EGk6aGCVBrvSzar5Gtm1LRWUX2vtm2iu7wSvGXEyYtWSFFLRMUAMpPtd1SV1sZJeqYNTKXLho925FPf5gBD56oF",
  "key14": "31gNj1RGffNhbAcW7fvKb7WPQF8czEVCqnTu8ibsZqU1HDKeYY3NpheVeTAME57J7FhuQJ4Nk6iMQ9e2x85ebD9Z",
  "key15": "4xF7W2ZzsX3Y5w6vzM1wwy9hT32B5AEnx1iZ1v2ypZp1GumbdZWp4BbKvVZwhbCpoTVdF2QXoUDZKTgUi32RKHkS",
  "key16": "52hScEfn6hwoUMkQszt2uqbGGBR3Mgzt6omMDYF3RoZmhRtTCDmi7XALJM19f2c6SdRjWAyFNtHrKPKzB5GnQ9o5",
  "key17": "4rWapjYGa8MkBEhJ1whz7w3E4uG1EkWv8h5nm3MLinKmKAtSpHXEGKZFhhu7xqLJRePtLi5GWufxqHvjvp4FnSVU",
  "key18": "5wBE9C8MFQxzmWAffQKwKMXvAJQrWqH16moySB2kPNBffs9gpW82SmRyTyhxwtwW42zvuEY4VGJAmEGGMWzPTVpv",
  "key19": "2Nbjry4sH2WtntCeAp1n2XFifx2MXyTwSJophgCLfSgHLcYPfd5PDP5QB2wcSZLLQK6QtEv6RSn4G5Jq9nqTMq5R",
  "key20": "33oeZofJ7yAUDnfzrc5rtGiwJoibyBjvWX4q1s65ENeiJSXWnDXYbBAEfAnSfoPMcrXBHsbuMQGERdZe3JobpqMt",
  "key21": "3tRhKziQQh8SPVZmv5njmpatajuUBgN8mxAfZNTwFVnr9CFoxKe7kLry8QLgDe5FmuKNRoymKPrpLHMg5Yd3Rr3y",
  "key22": "HXPHKg5AxSkCHe19ogGXbMeeXJ56sgeTcuX1ZdXZZyaTyTjFdVc1BEB9kN34iWZoDSTkM4eznT9LBfDUz24Gt5k",
  "key23": "4Nu2RSzk33PYuZF4Sxi1ZjLQMNAjwMaUYUCZteQxVqqMjD8Tua9VNyo37LUqxAQRr61M3RtNWkhjAFY8d7rbCuGN",
  "key24": "4Bd9Pm4QLhW4bouJzdojGkviy11npb5JdkP3ihGxSN55Kg4p8VpjN2iSeoftPij9CZf5J35dojPLkN1kcXaA2QEY",
  "key25": "2ezhpKwpQZznRzPBuNVBfJvs38Lajfn5YJEF8S7oJ73uSmf9FmUAQW1k1MeMW62zDsV1ViycGFBVMeXJKzkv3po2",
  "key26": "61pwwfZH6ipFmeEQtknDGxnUvspk1bX7vumCWpLdFgnedPQjZTpNJh2QcgRxZEuk8Fe4zQaY51nYJuCJ1oqhGKzH",
  "key27": "54bbEPyT126C4NMoi8c5vwdLtAZwRKmHU4WzExdhtYZckn9rJXRcXZfiHhXrgDjcRn4GD7kXA6qsTDLiMTdsGvz3",
  "key28": "29kv6bmgeF1CmmwbwSywiZfMPWViihJReEdfL3iorBnyEedanQHEKci4JwLceeDWDesNAyyXM5RCHiZtZUFnB7cY",
  "key29": "FfwrxxQvUrvWHyHZEzLJJ2XA42Zc3M7iVthUfgWHW6bjJJvNz1MZwJDBb9rBNUcGLkY2FemaA2dJaupCy3rmXBy"
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
