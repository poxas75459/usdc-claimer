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
    "3fhNMKAZRvyqNpam88XkHBFi1E1YvCS9esDZjdpwQgAPZPLeYfw5xXh46eLDxBaN5yiDQPtZJje9VAfxFc9pKp4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3subrWEywLHtgTihqFqbvBRxWtRq9Jd7W4wSQ3Ge1M4AYEuikF9mwAarDEpKf2xjgqkRwEzQuczCW1iduch5vbm7",
  "key1": "2V34qUU1ZWNCgCs98dXGZ6fxChY15sAoDh3FNoFgz3eVb2Zjio7kUqxCX8EjBWko7b2DYjPQSuCLkJ8TN4nqT6LU",
  "key2": "Rto7CbubTe4ysssJx4advQhjBTr2wvCDojxxgupuaDJ9VodYadBgmphZeyZ2kg3yj5v94hMLcauQreeHWDiJjbn",
  "key3": "ggu99zG3pXZnxiKCKRQgWiEDC9g1F15WqMMjqaGKUUahZKHECq6svjWGZBEwWSj5nJkp5impiCcncEVs2G6vZo4",
  "key4": "3Yx2tXiHzzqiTBAUzKNQaK8thwN37BKg4kUdjZAxooUWLo4pQmUQSjnWN2FmBHSBm8wxvzjVj6Lc4cP17k6V2ghe",
  "key5": "5RqqEtvVNbHVQm7H2REqh9meUZQnrbCJ9QVQ6yTanKKPwx6NNribpxU6kUJHNTnMYHUmEYGok43JAKGRKSqGfvuM",
  "key6": "SFTz7HjsZYT4knB8LCHTa4zpuGzpp9gn6e4QMLQuTHZQgfJqUswKdKLf85t15MxoDsLwamsUDmU6sysNEr2xEMr",
  "key7": "4px5FuxjwadjfHab196RVY86wg22D4ZZoPE1ykYmf3zW9J1MY6GVfojEmsgVVjt1vbewNVaXZpymNgQJVKD1JfaV",
  "key8": "3vtTVJNeqKD6P3vVm4nL7jzgiBSgkVUjNfaFMiFmGcEB4qfQyg8b7aNovmzvxiab83YZKwkuTzUtJ353iiUD3KE1",
  "key9": "4eWhojWase36MvgiUAuqgXx6WWiB6sFDwGDsnmh6CaQY7u9CCPzZ2dmsNJnneZocFybuCyPCwojMwCPTq7G3kjLa",
  "key10": "2EUkTV3nqudJEwhPjRXWg9z3UFPqaEeAL8nUub6FmzdpTXsRUaDaeNhWCswcZuksPKC4SzDsyspyy3qxCuVb49up",
  "key11": "2YLgYrnt6ZHHvUKvydXovWTKKvdBGU8688uouX9tVV1PhQcSa3LuzrSs9BvNJLZcEdLoqEpZxzxhafUxC3Hcc5xD",
  "key12": "auZtkzYwwZXpxVTXMGKtwJMBobpXNnv868FuKroDjhEVsgj2GZEBhY1jwreQD78K6Fq8XB4esmhmSdcu3ZFkd3M",
  "key13": "5tZnNbgfdyWzD3Mk851ykTyS18duZJTn2oaTbY9VTumMGiKoQSZ7JkaqT1gXQJ4BDomgSGkmpAw3xKyRLEbrdmH5",
  "key14": "rVpW4fgEq2FDzwqkQMzAAZMtUBdaqm84y83akYhHLchQkgnh6MQ1jy28Re4ETXA5V1qq1Ho1qttssE17tC4W9jc",
  "key15": "26aRDAAsDdDxeeBvVGxkTwvdR73ncPJLH7yhCvfKhkWxgW9A9vryKmg4XyQEdFacEuE4nKnFDNM9WJhqjAGnnStY",
  "key16": "oap5rMTYY9QzXEEgV6aJ45F7Vhb8h2jAkivRTVxZa5L9yiYPdMyskponDKkFneXXz5UutRW9MSLttj6ERRLBJTT",
  "key17": "VFtfMwuwfa2jiqgZM41BzRbxMQt2CCFuAamZYefjoPTAhPR6soMPt3eRqVSZpM6sCwWr76a1Y9b1GqZdG7v3omy",
  "key18": "3HqAKLeKcjfiPzdonB8VbCgfh2to6Vb8kaGEvJeqho6qvE7opNJ7uyMLGgSQrBPUi2wV6dV2MC8HZ2wgvsqb23Rv",
  "key19": "5iPwcMhYV3J5wVSTP8GRLGG6oBbQrGRbXJ2smTLPeQMZHKeTGMsAixnFFzLhFnGxX5TVppCiczaPzNaPrVgptgUM",
  "key20": "2TagarnTNs45LxMhr748tdbaURoGsbDvUyp5ZA5u18EEVuwTSBWJ7GPc1J2jKeD1nx13Qj1JzNpKDGFH95MnD26P",
  "key21": "4JACFiikig5s3gT6bBsogzuybVv48M8uk3LZRN48UPpbm4d4KiXbPqaTNg2vPpZNBvuase3hD5A3f992fQLLKUVz",
  "key22": "RLjgKRVHwo9K1H1iMHTjnZqZhhnJw2zBRbJcCynQAsQYr2oxa8uojhVxPUoH6avKorVQtprGab1rMUAkrxzKt21",
  "key23": "2Rj5hXKNgTkGKvqLSqkM89wC7mx6yjuC8ApGukM3ijXGQmLnPyM4oz8XtGrDHqaF5s1B1KNTNXo5oFM3rpoHUy4D",
  "key24": "45tce9UG1DBejPbZy2Pe6V4nyCgMdiPnfVBCwCXKdzXvYLzQoxGTSMfSoMD7Aa9qnrRX4VXfrL6oQkCz4jrCN2mQ",
  "key25": "3dR8gBeThzmpob5mGP8ckpmAdi7DHzSuLvfNovGADCZ62bm6aKnYukcCGSP64sbNUb7QXZndNgFpcFYRNXYoBwXH",
  "key26": "5LSTW211pNzbbD1iN9cTnhwmAgWMdHPMvDX5qvAkwfpXWExR6RGjtEqYoAqpU28vDhVYnVtxyg4CWY6fXmSom3tn",
  "key27": "3UavFeKKAkwFxhA57stfAvTtXqCL4jcfKJ8fnMbBq53T4ANp2PnfpggJ6BwcuTf55b4ae7ndiBtQ8C3Gj8fSHk2C",
  "key28": "2FNZ4pKKPUJER3weXvfL1DVSnrDfPywfG3ZRL4QYR5YE8kGQvapzwxanGQEZUQgn3G3Q6tuTRGJyGHgcG8SCgxsj"
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
