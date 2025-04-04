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
    "YxKxUzwmnTKHxwaCwW6qRHkCnCSz26FpckFbmb2qUZUSFaYcTDfanYpgj6YerJJVkkgAUVHX8CAccpMUbWPdtnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SDTXQsttcxBvsEFPwoBFSHHf7qQZqcjUdFGk4bqX9s1qn1Rq1zSCRzyQDseCBWYX5oudpDLtBnPTDxpd4zWfDyi",
  "key1": "3XbGS4R48Y8bzeAQ5TLJHu1FMEG3Jwhy4994SuA84UZoLmshNoYCGkgcm792KQYezknAqeoVkJWPdgZexQYrXMJ8",
  "key2": "36h8r1PmTGsUZLS1fUBzTFbDGZ4RX8u6dv1uzgxByb5e5uB3oEjYvNifp3G3Qkm556iPGGwfnBk4mcyezX8sJXo5",
  "key3": "3DNiYNtAtNo6MU6w5TZLrdkrFw55gmbo16we66hkneYqWPidQaAEMLPBjxtFC4TzEKtCzWenDERsuGxKte6cVhp6",
  "key4": "stCPJ7kMLjxy2dZ8wybycTn6domkjEVVyFqMYgrSh1msE6V3RRwvcHkLJi2mPwcvYK3ueERtRgoqGZQuDaRLGmc",
  "key5": "4VF8nFpeXUCemQSZRyoVSHJi6BALG5b2yFTPinbghzU6KcbHJxGWQ11SmbdxMjbX9X7uBQReg4zmKd7eRng5izH1",
  "key6": "Jj1Ebw47rQTZLD8VssDftwqTcz9U5R1qULAkUKPG4E5SMBujJLUbifv8oBGwT2EdC97hYzzd3EELooTUDyTdkBs",
  "key7": "V1Vr7GHu5E7DcJiWzmpZKEYeugmo8Yym5Ut6APgamyEFHoR1eec4EiH4JJNr4hiyp28tfVrA475yY3Dhk4e3c5k",
  "key8": "4RE8mGv5DbJijJ9VdFYjncaC7KmL42U9DvJ9W2LXjqD71jvwMvp73gxJibjXwYgyuRzLwJWFPGUjnG3w7F8Qy6cs",
  "key9": "4CYVf8R9MkyWJdTjwBGRV8FRYWcPiodUEbJQgePAnGzKRJWatiPq94FLiaWocNKHePJBgiF7Fij85N3cTMZ4BRid",
  "key10": "2ec6YLj2vqhFLndD7HzrnLj3m4FEMBjFrcrRgCtPH6ePP1nHED6rqN2ezXqGJiMa8PzpDDnt98gAYvXNmaLFrosG",
  "key11": "nRwkQmX82Fs2rDGZ3jj2bofdDLARMVcdNToFPkdhyhrDC99HtMYyUVUNRPWnFgNoxJ3PChyKhHoJJgK1JzstvTm",
  "key12": "4vaW1dhPTRuHkQ1728jEaLtszDsxpnhUmgTKeQMaE8JyovmzGxtMpmJgKSY4cnYMEWMfxJwaBeJoq4oYByC6BpGr",
  "key13": "oCC5xYwsCBKPNG8U2MPZUbg1ZGJUykWqg9uQAd6GQPkTYR8TwYKoAxGx78cy4CMjpjkrkJD84WoCvC1AU4zpUsz",
  "key14": "4wNQ57xQRfDDUTgQ9VhxQV7Y5oSZdZ3VaPyyAaLQPZM4QSFVf4d4TsVGvuSXSvECFruh8WRkGsCcheggj6NAGhQk",
  "key15": "5yMfQwgGHJx2UmT4nqUHFbU11wuTQfVfHXx9UiZnTMPvUeHMCXqY4zepCU3Dw2fJCCWUeFtVFKEcPLmNdZmkZ3CM",
  "key16": "61c7TMjqaXC2ZAj9N7RPJ9AKy9MKn34SKHqQqqUjbuGvkTe2QCT9iD6MAqENcEkW6jjeDepN2AsyPsUjiv4qVBRz",
  "key17": "3gJB1HdGP9BBj97VA53irmjpxTDcoqnnaoycJqPCsNZbsuTKTdLXMnmyRWousrauCtRqqAowuvQkBo5QypERTvxL",
  "key18": "2mrxQyreNpaNmw7EmFK4LuoPggB9Avkzq1n3bFbyJjkao6NSeYszF9k712cV4ezaL2Q5H93SXhsyUzkhneD486Sz",
  "key19": "2QdT1X6RAKpyJwvyoucMpiyJ88S7ybcJxUF9uoDw1YisJXMgxjVotsvFypNr4yehvUEeqQi5x5LFd8hsZ7CrPfh2",
  "key20": "TXZoEMf2m6dfNAvDWjjBg5RKdb5syCXNw6kubme3WAxJedUtQZUrgVMQyZhg4fgFY7oewno6m1KWre44jqGyv5y",
  "key21": "7c3Uvhq3kkciCsPuERwQRZzfGA7nRrwFc5B5HbqQasoQhcTiP5YGXPgRPr5pWBUfQegBNy3Hns3FkQXoQkk7M5n",
  "key22": "5KHbp2SXeVoBkPzEJjSPhK2YpR1ZswbWgNTje4PTVeAD6oUvY6bpNaRnkV16A5MxBkbAcicsRH8RrCnSH3F7FDz1",
  "key23": "3vZbEg87PAaBgrbHTec8i1f4XQZ4qnMCSZQkeLWyJb1aFN33ZssbPNB53sP9W8AxWGddcuMYftq8ncUvjVnNWcqD",
  "key24": "3jygWo8tLEBeFEjyX221L1RbwBpzxF4ngzVBbj7r212b8NEa2JvmjgKxDNAAC7Wh5jYYXtSo7bgkrGj7DtmnYXxi",
  "key25": "5sot23hsQgxfUcmZaDpFnm3sLbNDFJNkHTqh2PC2jF2tD685euxcJoNb6z6YqFd5QbqbNPyEmZdgbppbYV3fMFV6",
  "key26": "5EgmJ7NmMvvuuvJCiCcTdW2qzUnTrLQ8re2x1tvp7zoRospDTugC1dDA51HZNegC9KuAEYjDomrTyUz8qEALTXdo",
  "key27": "3DUDTQmBrXFSdQ5U5H4pr4YXG3Mr1Ge8y78h9QhzxWKSPrbbs5BrTunitXnYqjBZyELrfNXwpEw7yh2M1GkCcegJ",
  "key28": "eoZxx8eedqF81AaPtNLk9afxWwDzXQkbFWUer7KjZMyKsr4oLKHR3w9DmqdccfDQZ1Hbqxus7PVwLwxfDUS9rns",
  "key29": "3M5Vh6GHvv4rPTauufHxC41SWNjye1xgdVvXg9JRW33ahF9VsBbL2SAQQnFj74eUtDzsyGkXgJZn82G5bFgXdWeS",
  "key30": "M7yApE1VtoBYmxpNnNTe1ECv6KawnoULvTbAve1TUG91mFj23CKsCkSwvvQG8fXYC9yq8ZrWXLvb5bunWqSd8gu",
  "key31": "2o3EWzCEKLRSYHCDSV9a9CQdiTuBVZmWxYnQziVVewtmBGfrTGTFfLymjKBePhtTdiABM6RjDV9Q5aFZZSFuVqmv",
  "key32": "5J672dM3rbJuobHCf13XhAimgWN5WKeZGMG3RdCUFVwEQKBhoAtmRkX8tWNBnHPhwX4DnwzvsdPiZTNw1iNRKyaP",
  "key33": "3GLPEwbxiMfKTe49Efk1ULYXVgRktuuB1jVBPqPFeG7gmcYPFQwnDHaQVobFe6ffEsJMd8nGuThZHhfRE9xfRWw2",
  "key34": "5NaRkeNopb7hzL1hx1R8LaeEoZkvEtUQg1L7NRrPYB3JcaYBC6bo4V3ZWurTAU3ATHAauphHW6CvbJ6g9ijEyAmE",
  "key35": "2wRWRjrEQz9YyUWQfusyzTkTCCJfwRZut1MZhntNCMtQY7waFc9LsgvmR5gkBF1YHbBoRPJMtdLqFVgnhBQFrdym",
  "key36": "PU8n7QXGBQt2taKAphWRPNx9oZvvFfwhRdt3BKPY4NokAWeTqEvUq9MByqssFT26NmXQ5dw3wLtTaAmg384vM92",
  "key37": "65CGCJUzmxE7Lrq3pK1PYrKXocvJqs9XQDKx7W7Mk43L9awdWpMH7zkYXkCr23gdjbA6iGVSV1JYE8nd9vwTR29A",
  "key38": "K5rqhSxKRRercDKqoSfCcWJUoVWpBMZAxtYNuM6TLRtGZXDdpVq4pAuwQhshUeufECQuHAY1xMALSuxDX1jpXtx",
  "key39": "3N4EmJvp2trf6Poi9Rf1J8XhbNtEbKKyxqk61AUymu6sFvJY3VNEs4UqgdUmYzB1EH3U7JEkh3Vg6FteV9fY5GSs",
  "key40": "49a9jLN914b71vuXtdSbUGXrJWG5AJpHMcSP9M8vUo1obTV2Q38FrEEDE4aVhq1yffSdeW7Xt3fi8Mv1RaBTmCof"
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
