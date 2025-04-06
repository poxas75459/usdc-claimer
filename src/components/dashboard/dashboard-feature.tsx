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
    "5jpQ7HtZriahAeURDLfP1JQX3BzTzUyUQrqVLiU5gxcRZXFyWr3GDyiFcR83kHCxCCWK2Y2pc46XQLyyXY8szMnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z1aQ8oud3FSEbSo4rsDBWWVmnP1LvLpt9xgswqxja1W1joPFrAzyAJgze4PEjaGXhohzwsoSze8TYcUJTK1QykM",
  "key1": "btC94ZxsvZqUS4pd7258NT6VAvqVGySsLpndoFCNwMJJevsnj1r8FRiQMu4scrqY3fGm6otf43Pwgddwitwy29N",
  "key2": "5YES7bbEAzy75aRNmwdtwTTTHwvXc3mx2AeCC6guWVCeypaJtCKEMePi6pHEGXTPcL2K5DNLSDimXAPrxnjfYH1u",
  "key3": "4fTXMND8LXXvFZxPF5aGBy6EJUsSkv2KzeWCkX7dEi2bAEveHBGXVegU9vHVq15apu1qSxHSkXamW3iy55Z1pKTx",
  "key4": "5DSZXwi8fhZaRQghzgvXZLxHX6KFnvb2iywGCWuGKBat4rytJzYodpmuCaqWhfEFnaHKXNBc3fKhQvJapSwWnc7Y",
  "key5": "2fU8BprdGdqUhJVtv6Mqm1yjoava5DyDE37sdv6LP7zLGExU5YP3qLtKxGvm4NZGZpU1VZUVZaiurtPko55rtxfD",
  "key6": "4SpsK42RufpGDauKgtcg6WeUo1DpqydDBgfkraSvTJTJjx1asFnmhsSFHXxYeWfMpT8fDiVhVwkerpZ6Fkf8qevT",
  "key7": "2AbRg6hYMx9GyjekNjT38H5zhArrssyCDS1FAoFVXwXJCQAvAeLZDziyPuvtJuSaBuESX25vgxC1tzLT1PPsN5F2",
  "key8": "5cbuJtEyxzwyjHVaQSpJiVxY8L5PjSUpGaQG31Q41pd47uvxMJFXVqHTEv5G6PAvg2mhgFuYYJrPM3BDEH9Uw3y8",
  "key9": "25L4wRZfYPsfrfocyUa7Sgi9bLBGNkEHG9Y9B3vv33Cg3jzfZYBkkgrdtAM1FPcgT8eHr3y5Tg3F8HCXkqLz5QMQ",
  "key10": "3BrpSHKutoPPwsZuSadAZpqcwf8rHH43oizdmUD7nxQCsPquoMEs6Tbfri7kxMoiY78dDyrYTRPWLTHJvQox2PVZ",
  "key11": "oyjnFcbsGT127LjbRoS8Cjazn2Hngs9HbHhSBq1NqXKNmVds2nEfJneTvkcUD5oJZ4mKBQYU1qGMsEXPc9Srq7M",
  "key12": "3zjziVUgWdDnhiqY9m8axRF7Jo6ejS96hGApiCj5584gTTbyy6aZXTzApd7ppzL4VtVSi9M3vPCpjP5cQYEVaCnJ",
  "key13": "3oT2SChH4Ld9kX3MPepKrH4WMjykvidq5adMeNReHCQ4nEsJXWqMW3Tjkq81NKcNrAqK9h1XeCYQ5AQiAakfnM2v",
  "key14": "PvjziH4ggmYc1ypPq5kHHh7byHCmNAL1hJRW4p3gxF2jwLYnH14KQSYEL79Q7DBv9uNzZFKeDS8gpxNqYxdULYx",
  "key15": "2WWvGgp13hD1boKwqMxacnhdwdZLNTVLPXrSE4UuU7u8QA7Nn4nyEHjB3oCWeC8ji1BL7Zr4fqKm1CmQYJ5hzKNW",
  "key16": "snbW1jQuRkaTWCNCmCCNRhR3sfhVJhPsRr4BMpaSZntcKZRojLcncNtHQ9EJbP3raweKPfeH15vm5Yohp39BoaS",
  "key17": "2xCnzurkYdwZJsHQeoAUriL6FEr5XW1YfouHeMnNQM5MDJEjQeccaETm4C2vMnNDTeRezQkGrghBkzdem6BSQFHQ",
  "key18": "2MTca4hyravX4gNFUcZMR3PhP8dcNAJPFMQh6tP4DKoi1LEaF3ebJCvbvh14vDQVqFWSVb4bGbGs6e6ouZi5Vzbv",
  "key19": "2y4Fa1CVeuD7h1HaMr6Lu2bMWYTRrwgtWk7mLoVJWHeGEFRVN4bBTYEeQiYtxEYSZrFA9PGut9fLaHKryf1QmFG9",
  "key20": "2uSa1Go5S28ci9KktqSjq27Z4X2wzqv7csC63QyYemUrZyGDrgMZ2hWDf8CyM6wtswSbCfEbMTyjUim8Nq4mr5KK",
  "key21": "53NSBbYCfwBU6tmjHGn7CUHRkuffwr7RDdyQWTdEtLPZSiZQBvQgdNAuNn3XY5ZL4brPy3kKtCGyrPQ3REExJ6ta",
  "key22": "5pxTwRnWkdnsydPToaCzTxsyEbGAW7NRsUQmGmaRSMck9KMS7TRKAnpBYHKb6YNw6eig2VQWjU3H1ao8tqNBUb6",
  "key23": "3LsMUAL7h8FcqJBHbcr2m7XZyDGwjhDAQbtqxUWQPrHajKzEyGXWuVbZGnHtJzhwYBquXaQHy4rgg16KPzYTaewF",
  "key24": "27N6Uy7AeciU7FYYqQbAt1sEGgKV2j35QepkFtxKtHh1e17pKuBFdstyUsduiAK2baMPWRnWJmdJYm5o8LGL3bnp",
  "key25": "2VrHPdxiQD5RTRCHRHmcH3CKEQYfy7mu5YCaanPNk2WTSVdMCb3A1kiAWoaFWD3WTshBuFvvDyLPhmUzgp2aoaXn"
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
