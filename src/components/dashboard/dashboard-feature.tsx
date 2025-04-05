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
    "225xqiweGCCcicWFzjYiwSdbYfcF7sx6Gb9F2FtDrcYDcyac9JwvPpbJTBinWwgkdbRtSZoggz7Pnf7pjHM9WPze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PkRVAyTrGqjPkAY1BFmMZtDsxLP5zBgnwef3ZfEyhgwYG3ZXVoz8y3ToH3c6u9KJvPZFrfchDD61mSgXGchAuKx",
  "key1": "GxwDVezZraybwHqt1W88mCTZaJZEHiE5TfWdtQK3ryJa1zpMnF77uLzghRJ2X5z3oGL7c9xg1cYj7zeqEHr4pcU",
  "key2": "4pWZ47XqjNdTQdXm6cUxbWV5N8FMvSfk5fKmj9Xn2T95ytA5b7axxrhCK1X6ATMmr5Jr6ZA58CBWxfncEv3ahRag",
  "key3": "4FWEPhayyRAzL8LPTPRVPhATPfPPoLutVVjcx6vqAX8WJZDP9MqPaCCRmAdqprav53QS66kZw7FxNv1X2QgQRjCa",
  "key4": "2RRuDBnVimGWaaMXmABA5CtYt29ZZHbxC2wkkNF1PgEqWb5v3BDaYbBWArXDjHWJce3BgcXfz5YEjocppQWFaY9j",
  "key5": "2jX8CoaxQJmFQr4pi3s2xFrGvT2kN178HU67gdJjPBeopW5GBQbYGRa8mv6gX1yUBLi3Ze2e3br8TBkWzhjqgcHp",
  "key6": "3S2p2xMVC3E3wYnTEV6ju4adeJDCoyrAHy4xosHuWHZNbQc5Xo1WgjusMGCEjZdZSkK9izfDyj1kAeEbiCqLvdPF",
  "key7": "hwse9MTYDCBvqwcShzx9LKGquS8dJFyXe5KYNAWr1morTbvs574mJBDGoYi488SNaFDc8mRawriAN11fLZcMx2a",
  "key8": "2z43EQa6qRtEgUKa789LGrpXP8zKDDmQKMsmHrBaGQGwdkbcG7SUzgDtzoiSYoY71mWyP8zxYQca3PLCW6n3rmYn",
  "key9": "5kDsNR39kXbY3D7yanb6dDLgvZyvNbn5mr7fJNjaV5amQjpaz7A22ZNGHzmyCtSNUDjAf6nqmQsh3cJa14FyJfSc",
  "key10": "xUc6u4SnkJ9g6Mi7ixTEc7NuWaBzAst2vEimu6Xww9KteHzGR6iye5PtjhXzqRqzLF4hTECkKcM4D5xRb7VeizL",
  "key11": "wV4cjAVQEndUwe5N2JsjUdgbL71KTeUtVEB7LhqQUs3Z7gxGPNp5WSdCy4q5qwoJPL4XoAo8GXoC9FzLnhNQobQ",
  "key12": "6bDoMuXi6BXZCiWdtXDkGy6znUUW4ttpGraBAzDnGYBehsGH4DVejaYnBpnNHJ5B3vUinjrtDFCSzJDnkhabovr",
  "key13": "41P8mafNgsddrAibHBuQKFV8kEJHqwn1SV6joxbuBEvqyNMy6vRdRSfsqgWwveiJZGHeYZyzg8LxTctzQL9C7Bdc",
  "key14": "z5C5h7zGC9uhw8M9YqSNtjCnejaniaP6cPpNMb6JfXFngrDBH4FBQMS4tsQM1Bwa5hGCQBpFnB5d4dGMwPUJoWi",
  "key15": "HXXTUimq8as4MDoXEhaX1J2Mj7BmjkCdXHEjGPrCTd5g8px4PmVx1vow97tiDdesc326ZaAdamxnfjcD3ePAk1z",
  "key16": "4MVs7EGVF5Dba3xSBKf1B9A6e2aiTUPEeZqrxpbdbMiG8SFTiK64Jhzsvyct1y29rEkbE9PG9j9kUaG5DvxniSxe",
  "key17": "2fzDXEAUWu47siK7GQxK3paNL2TrZtdKeKAE4ejTzQx9CriG7wp3pHcZCymSj7ULKLBkNBny1z3N99JFXuYqHCjM",
  "key18": "4hNRVqtUZqbSy2gbs5ZcoAQ3ZxgMztAkdL8m1mhFdmycXihzkgS5cPooat4cfan3mqgCKumifTZ57T67xJ3LDWc9",
  "key19": "WwajXy6tVrKy6rm96UktEzJZLmruAiWnKN1Wv1L3LDNsmdHWfsJB4yjh3iKfJvktFt2bDTnMhY1gmawQvVaaMqH",
  "key20": "4ezx8hxs4Prj6XMFSHokYZ7Ac95h4sLUCZPENjBQPsuzVcSSKoBoQ1yL3sKZ4HsJBXKd9GHmchiUKqLxF4prsxZM",
  "key21": "bsjUeRiVu5jmpMvnS85zFW9Gj5KqEFee6gaqZ9KZ8mvATErdCSzPtNPF363Z69jKLfsF1vt9ndGgMnZJhARg3au",
  "key22": "22RjHBH5pXUBxB39KZpXXornFt8AEiPPEmq8sv47Qc7p247SGWVRHKnMZRkk4VZrikHvgmrWBP7bRAFRA2Ze3q3P",
  "key23": "33V4LRAqJ954TBDrGNf4Aih7TwiRDEQ4tKEioN4rkC1irc5UqtZ1sqRWnrrfTHChWDcLSjFqAYai5oaaBXVeRCBZ",
  "key24": "3oAa8zvWHVtsPj6S1wAFAdKQnyx16g2ZcXZGPYs218MCXGCP4nz8a2z1wZEZNrzb9DPUgFQs4uqEfEse25DW33Am",
  "key25": "2qLiPKrbct3GpKZSTnLQ1rpHsWnocgANa76icFkgtX7Rr52pZTYp9qZ6h1YMqxHH56Piqyj7179mzGoJQQXP7k1j"
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
