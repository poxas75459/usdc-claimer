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
    "667kMHiyzYEBpwysHz3y5j2wdwn1mSY7p4F6ZjsAC6KmJWoCUkze78c1dj2HdBwUNubc6htcBmkLVcjtFbChLyjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dnJWHEP2mh5mgh3j31avBryi8ir3muRbrCbCSCzcVKmoi2cDwUKuuasT1xeKo6DgcNJatQH5Qfpb6qsahKStHNn",
  "key1": "kRm7BUtUpjGq9bR1VV2AF6NDeF6Nj9snWQXQb7VHpAC7HrnaEnzAbWdzDtjEQebnyVT7y92EZJa7grhJVqCQg6J",
  "key2": "PHow6NgCBiWNTtw3Cy8SLY2okDD12Ld6Y7UKfZxk9G4yfJoJJtycJqJ6efF7sD1wgzhK1zehgKGjeZ1wu2SHeXy",
  "key3": "31ixLNaXTw1QhgBtAYXxkw6zXRq1SmThk6xr6cKee8Xt6RrijNVDWVtdS7ezxokb6Z8hDL9g7UHqhnuFqqozdBsq",
  "key4": "23X13SuSkMZRiSgjtGHwTomrFEcNAhYVssQmrjbMejSNUPRToQiLuhVCwBHzFJoTKrDpWR8d6Fw22Fh2Br2M8eoD",
  "key5": "4mm27cWF4YEeKJMmQtShDWDQUusUX47PK6DNbL3puDGjnUBabaPLzneYENH5Nptkrueemsas8sVJZ8aEBnY527NY",
  "key6": "4PEZMnQda1nsAvEXV77rqct3WFSbRY6imtoUJ2yr2fmMLGBJ4bK3zutnEPL5BxsZ45ecN7NMHmCNrR2oLqWQVnG1",
  "key7": "2y1hShuApKzJDRLkF85AkeFBai36xkeECvnrYmZ9MyNN2x1d7XuDbeTjhwoMpHzSJsr6APC9uivWhG4PGBfyhqVF",
  "key8": "3oqzUXw6u5E3B1PwnyvVZn5KMjdfs1YStiZjNZKUMdVaKvv5Xkb6Nahqr9cS37y5zWyqTBhqER2VPg7wP4fzvMb6",
  "key9": "Rnm6oT8QXfQVMTKLHQuyYaaEaSzWQTCQkqfYi5TECbhcHoude3JQHnHSQwW2N39BtNxkfhAU5yKBaLcvWXV5fmn",
  "key10": "5rrzznBLiHBYz7VBSAQCKGjAS4yazbGcyPgVRMFdR7o6eiL3jXxbfwUP2pYFR2cxXjXYYqnitLA61mVpCsUnucZY",
  "key11": "2ysQyAFCw2Q2WfjdTQuWaXnujhJTdWxd3yih72XMZDQQhx16dtnvfRWsQjWYD6qnTJZznhdFt6dehoSoTLPQiUSw",
  "key12": "qusLDSa57PCBvqNgFYFKustJGMgyUt9Ah67mgBR2sLtFArz2SeUbaknU4pEJcMotHtQeFovn91hyCnAQzG1mcqN",
  "key13": "se8uyx9z1reLxLGZvgfCuUg18eefzztcNjG2jXMYaBVenVGLYQqSBBdXyfjbG8Kwid9npGLFkygqCMejqoNKsCp",
  "key14": "3nBrB6Pj7hqaYr11vR3VHB42Af4PVEbFCqhdmW1Zk7rUbGeLEVXzmKY1NwoRDppCgcDfLE4afikBQcgL6R2eKJVU",
  "key15": "66YZkgWHgxE7zzDstKdxzDSN18LcEj1THuA4jP48ptSrn9RYGq72x3jiMtLoX8nBg4YDzBLyo8YGqbf6BMkSc117",
  "key16": "2drVQpTiyzxv9687XEBET97C4erk3rFkZKfJ7a4K3TAep2QRe7bX2Cpkk3PMQa9A5bUGfTUXa1zeUp2Sm4mTyDMm",
  "key17": "4PKo5zth34FcFoJDUwcyu46dYqwdbbA5zdFRm18FrNmSUCjViYzYX92ZYfuPDRSqyxCLkNB3uWsPBiWWnMTPH44D",
  "key18": "PtftAUmHurFFhNw96yvyDMSeXbkqLZecAhBQ8yvHY2aLNbCZYHzBK5y6DQqpUKs9CDze2qfAXbHshrR3BTgZx3H",
  "key19": "33nQa5X2QJMRR1DgozFRHxnFdWjJBuGeokjaW7mTHPWPBKfcn4s3Nk9DAoMf47W9ZHhnoQGEAmM7sVXYhvSjJgse",
  "key20": "2rQnDsbktoFoRbEeiWvsEJ6BbbXrC6w2Ct8djjJBLyBvMfc14syCm9gpP7KEHkUzwe5iKNkSfU9AaXQUdFgBEACf",
  "key21": "4UZJcXdFPhnzcFkNaMLKd9yUm4kXjPspcpt5ENZHvhvvS33MdQHoWTmzFSXifitBE5iiNbQ7DXLutVAHetZpwaBw",
  "key22": "3ApGmRo8996oeNKVuuGx3pg2kbs8Jh37ubGra29rr5y23CUukcgceQSy27pxLekXMXahWYfmGYmNXiUgazMCKC6M",
  "key23": "2gB29EyZq5LnEXsEurb9ydQfP3TVULt8qS9gnVKXPou24EKbXkHGaUhfWjbVaRCye6zYmALbhsrE56to4zWaMwVX",
  "key24": "waNNBb2cByTj6vfLPxqYK9RPprcDHTXBYhhCjmsHJUwyyz3DrJiYHfdqfbiprqj7Wf7HDYEaxjKPWnWVre7JtwB",
  "key25": "4mM2PgTDKAeQRy3wN3dB4r5TQQeaUJrXuwnHaENTRtky1vYv8AnMER6uZUzKg8M8NviZHeHFSy2rUDhzry5Nrhxz",
  "key26": "38TmeUvMATNiiPB7Dg4GwpYqp27dGFJg5Lsn2bedJbbQYBPSTTeo2JnB3PVypMUgb642yr7occndXR1Wg2HJJHLz",
  "key27": "51TFFWtqGdmdFdtPb1t9EFHvugSuKRWcE1qTr8qVqjMvnqyK8rmAzDPCYLb3yTj61k7VgGsYDx9nbLEnobaEBe7h",
  "key28": "4zuwY65q3Z7RDFJrSkEK8763CdhkvhqFxYgpZsyykYL4drctcq72AtvXkAUKUdUF3aNzsQmXcqEtdT18bBdzkrFq",
  "key29": "2Mgz2yQcjSkoyRh7KGUrdnjhA9fZjVAPSfcprnmgUs3WX1QaHAU1gbmZu8ddhAqZKLQ9Z4kEw7MHpYTpsMEp48Aq",
  "key30": "3VVcfJ3CQLxWFATHmmXxBkCxLVakxuZQWopMw96icGgS8hh8mzwmHnhwqH4UfpePiHpvzXMzBRPJFDxS1R2oaXLo",
  "key31": "5KbLfoxzeruzKbFKtwWTeM1tXisScTPmPmDcR8ngyj9bVeuHQa2dgUkhPC6jsPRSqLVWFioJU9V9sfsKGRLqS2Z4",
  "key32": "4cnhGCRgzp1N7EfWmmWua51WXEeTpXHy1B18uDrB83t5W6c6DhaV8mysUk4FrivcogsZXMCyJPivuzQTUPnkxnyJ",
  "key33": "3NF5KJsAfmR2rLCRsmjYoeiFQK4U2SUgBX2A464jboeJREwZuDZFf4diUEd57nBuBj6JAS4zC2Gfri2JQpZs7nps",
  "key34": "5LE3mpNLki5cXHqfXKdF7jvT9WpruC5AA7D3CL6LTxpYVVxmkwVVuZXS91g7Yzzadz5Wi6yoeMoP9DPGxLBGvdvn"
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
