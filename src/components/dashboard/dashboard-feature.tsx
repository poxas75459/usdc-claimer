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
    "2wHvBTn2qo5ReGRyK4eRpFT8kckdewCeWaexPkaZbzWPeHFHNJJUpzcismsjLYeZgwdyGUb5rK8SJP5v9tQ72qSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qXpQ2YFcV3qYuV9csEjwkVd86B3hRqaAkVRxjBu5gSESCTnrC9knXxoBRfoUZZYfqnK3LnPf1Gku9cfzwRKkKH",
  "key1": "5NRKDnZJgdGtviUwHCxjnqJeJj9yTwsUdBbnvQ1fmeFufRZDL9wovevax7S7QMQkWKW9s5eatsYBKQM7LWNNkhb2",
  "key2": "4xBdnQmJasQ7yPaLg8amSd1cypc6kTNPuBDtNrCXf6M2L3sD9VzFH4UHNsQdnPmn6NTr1U9Lh1v9Wyk8nTG1MpUG",
  "key3": "3e31szNxncAvCUjpjwhJAf1k5GMHLTivt3bNKaMmrncFwh26ti3nvUdZuuV6nGLozUrpav6W1ubPCG37L2CAC7i4",
  "key4": "4oQwitMMmWyEW2UUAphg9UeQzQsFBVNDjx9XECnBSB44ceNhnUP2hSGdXHRE1bM6ppLHnoTXQaUrj6Zk3En8359Z",
  "key5": "fdRm5asaT1R3nXPxFpAxZEdBkF4CpWAMomHXgSiZvuxR2ahwDa2KAmDHaYREVfrKKkh7pYySRPS2r4zsGnqjxRw",
  "key6": "4bJF1gA3cKUEpTS6WXEq9iKhFrSytTLb3FRUorq6ZE6kJf5zvffv8QcqMzpXZR8m1htTy2qsPRw1ZgmCggjZyMxA",
  "key7": "3WKSCkgVTcwquXuhWwWKrtSr7dTDZBe4ebwrHxkq9qqY5A9Jj3d5LUJQ5QuBYDfJg3zLd3N3Fb6nhwwqxXXHpDPY",
  "key8": "5Mv6sXhfJEsRjjxJCpnydqfif8WS2srK3rSdmzLuGit5TnD1kyXWWDTfrU1UEdBJ5jg8o2nDyF3ssaLU8RZjyVaD",
  "key9": "41gDDr4jgPburZwkJ9dAShr2qqnNjGCzEroHgUfuxTnad7DYr8BY3oJECwBftMgk3VjFMomqKzGqhWp1pwMvvodB",
  "key10": "4ZzpKyRTCja3ziRSoJhGPXeiY7cpocT9HDvRoKAamnaofxLUhMsCs3DvxHHdJrykF7hzM1Mr8T373h1JwniwhzVM",
  "key11": "3BgJSsdKEyAEkgrjvsKjpsqyUaPSLbu59d4yc9L7S7fEJHPUBWN9NHkBdjypivqHen92xskQQvnio7Mt2T8C78MP",
  "key12": "45NAcLyJmtoabVyYDbi5baHJKjN2HTtAhTk4dDTBnyncRqJsZCbSBpdR1g2rRPJ8sM4eofQ83xSZcDui82BRWkD2",
  "key13": "HnjZJ8PsQgfYk496ntgdb6i8kuAShZk5WCVn1tb3km8L5Thy3HWsRFarLXdhjkjvYERotJkuzLvWAkte4d3TRvE",
  "key14": "64zu6F9uaDA2HU1FmMyjkt2SxjrErqoJwP3NhTs7BQQZreZR7XowNWvgE82oGrVbdyWzzjf5Aw2UD6ZQmJKVtVVv",
  "key15": "5PgRG8sTo4b2mhdSM1tbwi1EQNk6Qa6fShtM4R3juCbfBoEqwpZqSeW5tPBbEcwkPB4Hk7cxA3BT8v3zaENbYkmS",
  "key16": "4GYXn6BjiTuKb4hD2ZHBis3esgGfMiK2Vwat9mLrdbrBpckdZfeKTfDq969svQShP8idz2YR4JianHBZkPR4f19n",
  "key17": "4U1sKj2rpqMb3EaEvRGGyT9y8mtdPPiEn8phSWgV2sN1HYHm22WJ1iJrcohE34mvw8iEXRY7x9C8Mdd5BXDVfxGs",
  "key18": "5Arpj7fris8R72pA5WgnVExLkFTU2nzhWP4pN6P7FJ4HfqPApeQrt7ri8SvEA6v7bB3p4WkWLZXar8adAW1gmvxu",
  "key19": "3CkW11yYW2edQPszi5MediPF6yTxcAcWVAyBtyZYWyHyNip8Ptkw9RbsWJPvLcF55qiXG8uGfmoimnR4WUmPsiLh",
  "key20": "3Gc7iKvUieX8FqCY3uPpQZjMig7JKD5i8SiXiFSHsDmikoSee7ZGrgj19r1Y88nvBneaPVXbKLiS7aM53SU19Pb3",
  "key21": "3gyJizqpmoTEoNQyNzwEacRfjj6FSD5D7zoV7xQpo44GhjsEC2d3PZ8c2WDmXjoEQuBmp65jBySWNnVoGUWXkPvK",
  "key22": "61c5mgz4rzGn2JYvCfeUSLcdc7Z9qEiFcuDwQbAxN21CN9iJpR8Zi8FvAHWJ6xiXX5JU7m6ZsoqcLxzv1D64Gjdb",
  "key23": "6zXKKrDyBQ92qVbb7AT6mxWF5c3sBNvAgYkZNu3NpNuNJe3ieAJKY1FSPfaHC4u2WyAw9EkZsDRYnrVGnRYmKKZ",
  "key24": "3yaLfnavkrDUK2MmAfEmCnAA7wrQyTnxjwvJ7jRkRPa8VAAaLgf7z5dtkQaeocTbmsNXjc5QKLZNXoLH4787jj4v",
  "key25": "33M3ma4yFoUqAKdYSQR6K9J9jzymraaJCuKjBqrj5WCjPzUTxTFUXLxCPiodSxWsL7thxpPRRc5EAVsYnpdw36dA",
  "key26": "34nUXaM2yEk1NwaMp4wq5JCgqDconUs7UG6UeURArjZd8wMLF9GSFoi2sYzYnyagz5xZDaUneu6oFn13dvJre1Mi",
  "key27": "4NSkFpWKzhqUH7jbrEZ9YuFhGGD6FdAf1sV7CtC1zc9hBRpkxaJcLWcJHeA2Zas9fJBSHty6gNUzebK9NpoRjDMv",
  "key28": "4XWFjwHNyb5eiHmtjkFNn1yUfsU4uZPr5CsFum8SnsMbQYuaNwXZutXXrbH4T2UyMTqkcxmgtjidZsEzUf4zT2G5",
  "key29": "4TNwsK86gvpM82ZQ3u2HTTYpdydNDm55kSx81UgcS94aNCE3ostgFfuXjg3M8nvTKuZQiryBKffm31Xm7oBKiBt2",
  "key30": "4pRkWMcTjbNsvVGX8ZSxG1x13pxLj5rs2nb5noop1W3fCCr4V3bDWtknLtuAneTg7d2oKV5rV5kZ7xsMGwJmVwTS",
  "key31": "pQfDicyDBWydHad1SWYMB97t8pVZjdyfP2kcmaz8WzBDkEX1MgwgYZVXHs8v4MD5YXqCoxpuDW1TfoMigKNDq15",
  "key32": "4MdnAEDWU9hG3XdhGry3J7pz75vswyFRPBCQNoKswasWEVbyhBqeJXFqBs7JLivRs1eZ59MKCJBCL2b4euSmcqZg",
  "key33": "42vhPCHGNtadoKjxoBcsz62frQgSS6kptLu9ZfcqKB3bjozgAYdCrMbhUeSn93GstJ3Tdn5qLgpCnb6DdRRD4B1Y",
  "key34": "KtCadwk2Qp8Lqun7a5JMKmh5BjBjq4zt5coJEKb2XPUDGLD21oDqUXfSJtf1egzp3mE4SpbWfwPPaouuYWHtWmU",
  "key35": "3ENHFYfJjexhujvhHiRmNHY1Rh6hqgu2H6EZqbz28i1jdvUuMNuNjJszU6ViveZ26hQ2JTLiT7JEfackQ424X8Da",
  "key36": "5ECDX4nkvrhiNGCpVVXJMF5Q4UYvaX8HNpPaueST35eNdth7vzKGzU9h6mFyfiS2FyqPz4bBN5HVpp8vfCBw5Vnb",
  "key37": "4upUBdu5rvUqvh1KsFFY2dxUbZUCAs1pqF3za1c9B9YtB2HRt7bMrCHpbXFpKk7nrZbFgXT1XW3jjkttckrSzG5Z",
  "key38": "4ZCpPDC8wacPdd4ET13gwuAh32PSdG349DWG61Au6cBuoRi4BSt3q83nvokaFEX7H2jhgF1LuSFPiSg69X5rvbYN",
  "key39": "QD3VUJrvUGsCxJJStSjDnaVsrecDSt7EqVs5fUaQQwKZ8CMKgh5Z5JDscY9zirNXfobqZYAQLLLJ7Mi1M9ibNqS",
  "key40": "6iCW1Wxhv4t8fSuPSFBs7XMLdeEoQeyqNb9PURwUvVuZ1eknPg4PVNCRyVG8KKX1ptZg4ava5oSJ9mBNfBw8xht"
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
