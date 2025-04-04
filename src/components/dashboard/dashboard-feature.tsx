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
    "4S7uR66xmNhxkhCduoJ7sJkr1SHBxEanqLuKJ9FWxNHzr55u17LGDe7F3sBgnQ7WgW12yLjifeNjmH6sHvxxwEX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23EFsxSdV3mjvtwrzhsgcWu3ZEBuPH2qVRdkWxmHx1SK2CR36TMAqEobQQ1wbtgc3bzzKvcCJCMcePkgtzuU12hH",
  "key1": "2MPivZuBYo2d8uFciHgHcUSgoxihwQyXKPyacKEc3GZ4kAg2d34bGkqGzgfxJQN8ngk1VwazReVsQS2SD1MNTtTh",
  "key2": "5jC5HEorUC2UKQQqDMdrunwPDFnDKUaNJsobDUiGZ8pvZG2MvuUKR3nQHa1Nj3A9tWRD8hLsWAYfMzdSsRqXovYX",
  "key3": "4ULdMstJyXGnDbKhc7eRf1bFipkSMzKkd6DZFhhz7YcvZ5A65HSUFbwdCrhY5bT3ZTK6QS3TvcpC1EjX7whqM99d",
  "key4": "61qM4woTTkxziNVY8Kk1qtxHU5rkE2bivHX1GsiBkDc7A4c6BydX1eZHuqUDMQJgepWV6x5B3UP5hWWszQbZQ7ob",
  "key5": "2RZWwD9Mqhs1mXwTkxXUZ4MhxiPWaALDxbLuvkSbe5ZxnFhB83QwvJfK8cS6L22EPsfHwAn35q8uNs4yjmE7eQGm",
  "key6": "2QkU6s14bakhNSt3CmYd9gEQgAGLqY89m3jApAjJVMuAgWpiDeyNi6Vmtkn9ahoe4NLkf8b8pmRxcrKMfEvtpd31",
  "key7": "2NVbzeqJSEkaUEPkYA2GhQZgae8mAsqgN9oimtQZgsKcrrQvUYrBmgG2stYSaJKAyPCGSggV6qfdHZYh1m5qSogp",
  "key8": "x1qpxAHWivUWzDdQyAHunAEmAJThmuKydcpTA7wqm7gKnSZY3pKyZaHuAykWXcjTzF4hUr9aZMVjB2sxd2ij6Rz",
  "key9": "485xrNZaevA4iU8fDWBHRSvBUK1L16YGDKWcHPXYRsadUJQJeNPz5cZTHjKbTRuLL4MZBR76R3mRuLS4YtWFkC8y",
  "key10": "4WjPxYf6279xGiAhU17kAFUBdu8f2M1T8qpuPzMD8EPMrskUAjVTZ4QvHqBjHHSPNCczY8s9NuvuabvgnroDb5KN",
  "key11": "3GxcqgN1F5AjWSafLJzzJxE8u88SXy6c5muDKK6JsU8Z8oLdUPr2d9gWKC7Q5H4HDTahi48ttSoxoyHBajTkSo2n",
  "key12": "4HNv4eMwG7A3ajw6tpA6NesJjygXADx8HQuggt8VYca1ykknB8egv5hxJMqckunmgNexns57b9hbVTGB54z9JPqn",
  "key13": "2TqCxekGSJUiSzbphMDPsqAmqFNiMUQ4PYmo8ccZiCVee2mqYmREbU8cuFhWTNDtmFKPLhjdXQz1tdxumhFamF2W",
  "key14": "3GsicjY41yyatfc9M4BVgDBn2dENU9ex3VTe8YcvN4cnUKZ6fHzaD4vHQzDZBGeC11BxCFbTdWT6m9n1W5wQPQfN",
  "key15": "5wEhDuUvqFSP86htkLLH4fXphUBEuM48uZYWjdMrjGtW2SCmhHAGcmjdaMux5wj3iVPT9g9opZkeD64JT56t7VhF",
  "key16": "57fa6UZFfbhJRn6sP6rAmgWxP6oRZ6Z3bUPxAwMXvSr3y7LDuefPpSC8mVPtHRmT2ygqqasYdqyXELQjSj3MqSfS",
  "key17": "3o2ZuM3rVzPuc9Go3PJ83yw9x2jQUncF5hsPCqYRL1Tv5YR7mgrsW4thUmbEC9ADMxii1J8isXSB5mmh9YaGKhgx",
  "key18": "2oFXnoWnCxKEpgcSWQ71pUt6AFaR6vz7JZzbi5Rq6EJbA9NBjYTz3PKQFZJqWPcy634Fz8gb8pj5q58X7XUtYu49",
  "key19": "2HfaKmGUVZ1vH6AkxwUjfo68pp62GzvitkSp9vff2HKeftfozescnB8bzdR1Vsvv3uSmYSYKMA71qt1nfxeN1kaQ",
  "key20": "UHwNaHEACUU7LFiXwrzqFacZPNDBWdGRPEAW9c4w5JLuFyVjvoufZ6scXeJQvu3gg22h11iWf7w8BqimkCB4irq",
  "key21": "5hmQYKZM9epZgiKy8YNL84MJHzFhP51CvaUPizYR8Fa2gnQ2NWNfwyKmXYAGaNaQRbeYwSdNMYT2REc7MT74eGhY",
  "key22": "NBzhFs2UsbvwyS71wnNVBSoJFq1rgFam57FaJ363UFRs5PwsfSzPWajXq9Fd8N92nv8Lt8RGCmKF3sSzaKD2raL",
  "key23": "61d9pM5agkzci8a9X78KCwUSGphw74YFfbsSudXv4888KXidVLhCxXXDR3EELw6RuSm1LewywMKorjYEmqziFKLV",
  "key24": "5mquRBquxSPoGsqTZHGPuoQpzEyLvL22C8V7jUMVXUkfjz3yPNN8pr8ANDUWx2aJbyU7LgV8JL3WS4j9DtP2H8v8",
  "key25": "671PLZRhN15ArvZqBkviCHswpy1EC5fzca4suHzJSxp5Wo4QcAw9zjrBSVeCoLh5FgmumPZ1uuQK4nspDeKUgYMe",
  "key26": "2dBG43o1npD1xvgKaPiWGiNhw5jmNxybB8fdHdu2ScUPbYbzo8sFAMYV7CVBumGBJujGyHpm9iiget4jAavAYF7w",
  "key27": "2qeLXA8LVLr9j83afasLvdLaknEGcY52K4H9NticTHWc95p8vd3gg8sAtce9ChdshsoP8u18RtE9FsDKEFTheEx6",
  "key28": "5CUCrYryEEtdibQ2x85pEx9VifeYxBQN5x4YRU92Gtj5qoFr7B32rFx95umHa8gvLvd8xoP72daUQmrYXUmpPNvk"
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
