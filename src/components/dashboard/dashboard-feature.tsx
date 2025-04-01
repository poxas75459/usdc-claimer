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
    "5LsKTdpBsGZ5LdaTV8XfUT4iKESC6wvwDG5X8mjcmiVREM87L2LGAQEbP3HNWKW7AFCP6Ga7bktwdgQ4fqB4q8kU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oHrEpczBfGcDUKSK3KXsVRANG9WsNp56BxQe3q1ru2j9o8McBYipP23ypgqtrjYu2prmqdZkoEwd31bguK5spDk",
  "key1": "2SSjfhcaEF6B8LHetWtZvPK4Pb5QurVV3xH2CRHrcTzqWMgFkenZhAbEsZ3XnxYGX1A3NJAv3spPHHHJXckFUndF",
  "key2": "49szQsbtKJeFXBTDurh7VYDd36BetRDuTMmfgmAsih7UfKjy8Gtw12U6ZnNBtTRYSV17yTdfeL5gFRRjudPupLAT",
  "key3": "3iFHARVoyUjyBYvfZUoigyLmL2zYVtSe1NLn72tHzBFZLidDh8ib86PUHxRCAGHkToYT3Fp5A22efYLkK5bo7uM9",
  "key4": "4dELKuavRcxZAWHdqgMYHC2Yu4KaFb1FxqegcEUb9FFk8gcSHkYEZdU6KXn84zuDW7wCVDAX8MuTj5FqFPSuSqGy",
  "key5": "591U9cMQ7pYjAXtuXY62bTNiFTjFYhgLieDVfXWT9EUb3Cb1HKzQAZKfpZpiicJhXEeyCVAb6WqAJdH9igBxaxBo",
  "key6": "4fyC3SYGXH2vo1pcTNA1hoPPKtkAnZFnFi8dpXfzZiiFWeAKzyr5TLkZPMk5wBJD5zRi8EazPddR1RoLojpQmaXH",
  "key7": "zr3iW5baimtArLUghUs2ucyudabhcvTXuVajzPJ2a3p1SfKh1gggLtRnBWuaVGBcVJbVc6vTAKT3CfnTDnS2Pby",
  "key8": "4ZKdHJg7Q4gHFfzzzrfvPD6DqwRuhxyMGVPZ6wt3Q21fh4iHQKgw1kNJEFjnnXMJn3vpJKUeKzvVn9QtHD31iLf3",
  "key9": "fiDKAemTgczyGKXm12y2mxdwNwksSfVWxJJhJMemi8XewtGJsLYKZEdtQxh77jvw3HLHxKNumff2448rNK98h6q",
  "key10": "3Wf3EJCoWUmYqzvxG5EeGjFU7RSXw5CqDoqPZ9XVPsMS7LfJT4E8ekwMwtL1ZyFijeLmyydb6wxgvDS8jUMafJqH",
  "key11": "4zd3CV26z8oAXgrzDAKoFuD87i5okbHWVrbx2pY6ZU9C11fRVy9eKZVJdpsAYmNxKCGZawQvSQaTpCJ6ZpsBqjEc",
  "key12": "3eExWkpRDD3r4gUsHgtD6Hud3DzNMedPgFaUwEs8cP64F4LQCQbbZFAo7bxznMGUpy1Dyi7H7Lf4vYeTGbXW3aac",
  "key13": "r8DriuunLtsEJfyyvLBPQmGx13hgTcuGLhvZm4MkLkn4KfPDj84i5yFZKEK1xmPcipyMuHUVi9v3PCpaVVV9ehy",
  "key14": "4ZFj4gvmuVUyCbLUhZjuxRcqGKoVvdM7UgM73zrwtVAsxJmT2G1oW2pePbUzzyt8n5iSKZ9TJU5nFfFuxfKo2nap",
  "key15": "21Ln5tSsyThMAJrwS6t7K7XjMYEsQrkpztpCZU4x7dQF1WZdi53cYwNEvTyMn8G4DsADyghmjRj3VmMxHFjDgwNo",
  "key16": "G7nnbHtb7J1SeQwJVfNdRrbCUKAqkiwapo7ksMpXQWthaBuPyTwShNCNyS8jQWzrczGyZciTxKFLDxHL95ciGA1",
  "key17": "5GM1CPgCr2imUmonqe6DjqRrfduNVyTHPMfmyyDSBZEPeJm5v8zJxe8YCwKAzPonMYHYgUoL9fuf4rWpqQkQ5AQ3",
  "key18": "4Yf3vwGKBRiLQZwiW7Cv2PaNSnBWXizNfkiHEzECj2NAifdDmhrRYNxPtTnVrB3aSAYb3VKxec2Mdgqv14KqzXqm",
  "key19": "nhDhXArv5cyykH9RQN7dA1EKdxqAL46mtZqxZPxCf5y8p1FjHCbhbQ5PYrkcFuAKTShcBy4hs4kGr8dCdi4duua",
  "key20": "5Mte9t59Jc6hZpJVvHvot3x3s8C41TMkKjaQ8t2kra79Snk8UPyePKki8oYidbX9CokptGpqbK83rcCgi1pdqmua",
  "key21": "5L5ZNyxN1mJTNdXLpUyFacoXwwnq4LkMJ5Qm3qvBzFaJYe8mpq9VzR8LxU8kBRNWwB6DbpSJUmX1gE89QejEoBCV",
  "key22": "e7W91tsAv1GPn4s6ZBcpqBbgJYJuPD7Y6gvEf44Aj6qEXTa4GXEeUmshKEziTJpybBAFNonhkwCJ6LLVBtriuug",
  "key23": "4UGFQ259mvkRiQCkMeLqMHqkitVZuotCCVVntYSgGzj49QzJ5DfYo5xnNM9p4KRTdXU5Stp3TXCgrgVKifwTEWra",
  "key24": "4p2nc77VqivcU1iB9A7jVeaLso4FSAnYJ7eaFEkZRV3o7oBnKwMeA1M6Ke1oMvwUFAGHf3CyEt4MyuZxV4z4Vnxv",
  "key25": "2iMPi1HoUxJWGadaLRdLqXy5A4MYAx9W6qoVVMpzcoU41rMjW6HjTTj2tojxWf4Eiqp6hPkbQEpnmMHLiWQbv4Nj",
  "key26": "2Jy271Vy4j1xKCi7KoYsjWFg2TVxvGXSKSehhR8nui88xgjK7eSky8mNJ5GobnRZgjU6uvZ7oiowvc8Y4Cfj8bKe",
  "key27": "VS69x99wmwmJ2eQrzYQAqtZ3cX5G1Fksr7Y353zabdMAUxtpEqgGGtMwHNLj3srjrKt9gETwHrjM4zZ8CheZPsE",
  "key28": "J35X68jB7toMd7r16hpHDTLHYbPoT37HhjD6gMTFVPn4sXUrSntL9XfbCt3wm2bK3JHxY9Ctig184Heg2tqnBA8"
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
