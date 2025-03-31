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
    "2jJPmFF4MhoJ8D7ScqscXa3yQbawnW3Jm4fW2o6pGKJ4vyeqS9Rv8wGzZ3vcB5yerGaJPaQmhBp97sFNTAFTfDBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cgw6hCnHh8TjRaTRf3gv2uGpAP9wC1Nyv7eSQCvKNuo2rBm2zQSEUPDMPfFUTNFqQWFoiau99MsSYu9ijQDAquK",
  "key1": "fVyyjKXnKNX7zZ77fZpWKg65bL5MaZMMnbZR2yRYgdHwJdndGVnQQovScRS9w4cebv8ec4ootDGk3wAwrrGW18A",
  "key2": "1ekYGYVbzkvpBe7NoGpDQ9rLtZccL18ieT667fR5dmfQpEUyphuQFMCW27GGgB1Dw8zfS5p1DhU1b7n6Ugh35Vm",
  "key3": "CUzSozR9gUqpGkTEmwYSEeDUkoNEfny1yDmS4mypUvbAGtShpVRhUttNmj47Wda5ByeVjLGqY4RP2ocfRFMbM8A",
  "key4": "362Gjn8bkofSng6jbuKDpGPNxMyCSsPKKMNrXvZT91v15r7fhvpdLTckrUyQwNYdx2hRS6ozSATCsQbPYvoswrSn",
  "key5": "3zTXgWdvNAg62QJt433NRDkMR479sXBbRpTmUy7L1hq66F8h7DqDfMdeSpjmcw4YgbcNCBKRNYpBsYnVReiQq95A",
  "key6": "2DrcbaNBbxoC2dHiHgtZNMFsxcTU6W2x3DU3Ak1FRNHfCyWxbKdsGoRKFHJsJKcYvgD2MjUGVA3ixJSQdquwkz7h",
  "key7": "2w46xaZtEUXCi5UJNJgiiuvLnJbPtQz2hJrqnneCNMBJdxsxdMz62cieSFriYj475wi3wajLD8ehcQThUXwNKaqr",
  "key8": "2QZ6JB7uVDQBiR2yofFEqa9rG2wGFMCutNZDugXCS2CoEBBRhtqofGZ8LPNaK2hxrnSedcMw2PyZhdALRTAxSgzo",
  "key9": "8m9xDbGKfJpQyuneygM6pNtjTZfu8zspsa9L1wFPYyZyD64hgCNAUadSGyABJUKWahWvonZmhToU51nhk4pHBah",
  "key10": "FGwnxKATz5nhhS6zjZE75EZgWMhKW2GrFcwC6xaptJzpeqwK5o6GsvANnxMu6xfT4FUoEPNmovmcmBMb5dh6KTf",
  "key11": "2dpZ6pyCoZJSDAuuoawgLq2RH43qVGjDnqhWk1jbLmFHwBQmtyLmziYvTReAGDixGgf47ws1BrocaXq2b67gfvJq",
  "key12": "6M4cLjAnEwZsRJXnR4g9swA3NvhMMpiydj2et1Pu8C4et5CrCmSsVGBfjnv9ssbE8RUVGu8bXhVX4sok9fMnUej",
  "key13": "34uFgpHtGjTsprKvzjRxEmt5BLv1avaEJjsSUnQpvRqPxgoKry99RXQ1sqPFgK3ENjwPTKQRHTsH39bMGNFWnuB2",
  "key14": "3uVpcwkLGix9LhTZuH19wPzJ9U9BxCJwJ8QCVZNGvBquQxHAfShotsjEUcZtUsPmpngRE2wWXbzYVD2JmeuoKJNC",
  "key15": "61x6wLvC9ib2FuAni4PEbUWTuX55kVpfaMB8GtrfP2vwWL13b7zgJyC6RxPF3BVcCxSdAXHiDxGUmSMDGnJ2uW5E",
  "key16": "5GPQmhPWrtRfUXYLmnjk7XHjgaZ2TKfYppfSAkWLJQEYRwdhzrWDVQGYZhph8uf1hwNnh8vZ9wX481qQisVu4w7o",
  "key17": "sfSc5gpoSwe18gZSR1d4ehJNLetxZCLUfoWfvp4pc7naXV1r9exJ8wcwr6j3qPGhVnJCF2cgyQgoN3TP6nbzdNe",
  "key18": "4Brz4iU535USSXpo2pi5xvUWzN6LvPjm9cAApY4ATcNiimnj6wLbw6iFboQ34jrMrvRXeizL6kdjgHHs5jGxVLG1",
  "key19": "25QWkRJUH6pvVVLJkk3MwEF4auqMbbgBNCTmu2zTDiwNwtc7qG7YQSHJYwXsA3giVZSrxw8zAj75fuAnx9MN9BVd",
  "key20": "5oGsJqReMhiuE63xTtPqyyFr347j9PGFFjYpSmsCGgM4nj1iAw33TAviQ2pSWgH37kJD5uiqVUarnFKbe3tWdkrh",
  "key21": "5CmdHPvRBNAahW6gUyi8A6SCprzWYtwbYrhnscjLnnzawvgcUt3u2sCD9sbdRCygcUzJ13tx46DBZwPynWcEzQf3",
  "key22": "LyS9fgDrvswZ5k549AcCNKttgzaVCmTQgmhjWyi1jxwXGJ7r42VrB5wWghisL67nd56S1HhGKEYQNh4C8nv6Xz6",
  "key23": "3rcRbwnmEN5ZmXC1FFbo3N3LfWyUiK7YNck6C1cD6eLQuoRtPoLhsQpEojkp1N8Yk1tSN67StPwb8graCWfDRLJF",
  "key24": "Wx7uGmqj9YPzcHGqkffzrWPaGnVy1cZwkyPpP3RsU7e8ttG2wP3JDu6rjK6pRc8KEtR2q1fBBH85Jh5Z7WesXae",
  "key25": "MTh9F6u3xQ9PnHg9MWAMzux1vxrswPY5z3po1u1WFsjbzo1QV3xoctS7tm7EgJy6r6jJMkLAtsbEzap1Fe3oEEt"
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
