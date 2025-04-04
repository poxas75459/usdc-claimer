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
    "5gQLHWM2oC3F2LRA4rVDQDwx4vgGGBo63B7BDAmuhUJ2AYmPu1sGpmzNALf7wWAJkVoaVaWkcoioeiFeJYNCjQiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36bSthKbkyFbGxjbVq77WRWyokYQgZpYeg3HeuNvm3JK2eFwVSp54QPQzwYd4gjLYuVfkWAPRhZAnphsMtppqNxL",
  "key1": "3qfsq8qovbCy9nfU2ps7NoofWCSwdr9Fb5oEK2G6qeC25Qq2f8QsUDs2UQLSuRxkpf3r6sDa9nGmbwwBe8tRBkSd",
  "key2": "623KrYsURREP1bKcFpW744R1zvdkQUoMLvjFCdVvLGv3rqowwbShpiSJtPUbaTWQMnk6NojbCamHy1QnpDVqDgcU",
  "key3": "Ju8Cf21Jcw2vsAwceC3SsPoPwaDPtMGdiTm6Wx6Y26w574B4LJJmDRWkQVdQAN6woLfgCRuDoM9Qsarr6YCWHCD",
  "key4": "452p9b5zXJsrggiKs3r6UhZSXV8weVE5WhRXPGxqGSiCP14hG2fTx2zRpjKVG5sk3hbJFEvVhbxGaRWbP8bSdqD",
  "key5": "4JjJhSj4iJWALfHy1gREkAtaf7k9rv8CndHk8W2BKUQtKQSfvinDMkwufqRuh15cWEuieP6DPVbVZe1vbECQuehU",
  "key6": "2NmEzvCVNrm2ybSf4dzhfvNwFRD8TVJ7DJy7VXKbRKo1ZHTnLY1HY2C1DWpY1AR2ezogYTFNhbRzEdY4LEmVKZQ7",
  "key7": "24UkSMkCqUjGgJTAqWcVwQGiZoWsdfEtNYb46dnkFmy4AnM6ACXwgHdvKjAfafKhqNUofy77NQ3fe1H5YctD3sZj",
  "key8": "2sCAdLYqytbByPL2oSu2an5Cb7qBPcAFPPZHpAAWEBgSaQosqtYwmix4PPch1C5ZwornXWwNxrWfzdNkozo34kZK",
  "key9": "FQCTE5DrNaWcMykveet4yB8dDCL8BAj1YmkVQSiLYw952QGfzfGWDqJWsJYqprWktAEuoBVhGbyY4yHbAf3NZzP",
  "key10": "5LsjBNiW35PpXKt6rsfM6wHrLL8rgTHUCsAHCM1bAmTguVendui599hfrp7Cknbuyfn756nWR4mNUFRQNutmgeiV",
  "key11": "5wi1qyRDtxtG1npXv8E9tzvUoknfaCxR6zbh5imLRc3ahYp8dwBvEqmbuqwLCHuXvJ2MQfUYZ4mJC2J9QhUSQvD3",
  "key12": "BSRxMzREezKGx5rUH8kLzrMVzeon3DgYoAcDYX4mspkgJHboqSks43vddN32tUc8viYWZZHq2KYMTFwYMCR6Swz",
  "key13": "4SCPkoSGThxRaDKoNYRisVU3Sanx2hocKnHToCLnXxQe9iHCDiC5RALnXCQqkDosNGEHtqahEDFH4TZhyDRAvxD9",
  "key14": "584RNvp7FsecunCwQzHT399Kk5k3RYWCZJbnAg3oV1BhY4VbkqWrCwFwe8953esGuE97BVg7a7KyM1trXUCRWRQg",
  "key15": "5CyYxrvK9wxgvwdcor5jAqSCfGponpK7iTbudsj6mHYiRHsHoKU3VimxQyDeFfb5qautVf8Df64EUDtrMrXZFHF2",
  "key16": "5AFKnUoayAM5gw4EMWfG2LgFxpV9JbLfVNsALpYs8wukP5R5YS3mh6JwJUG4gbWj8ozYgZbEX3DMCbUTiiK93Dii",
  "key17": "2d3zfgF5HmudfgrTPvyzSLNotonWjJpcHaVgAece3FQsE31UHfkmn8c6QgPUqJjyvmPV5gsYyX9BLgXkyZTA7U2A",
  "key18": "2us6htE2Kr6dBShGenBPQ28M3XWSjcnF9sQ8iuoUJj7YVM7pKqHWYwUYbK5HQ6irjn241GnT7cq6jrkUdYycweoK",
  "key19": "5BmBgrt4GyVrhSunng3NeTvfaN72wnaPQUroF7uRb8RfBFVxCL3sdcmA5rGmkrpevNUCV6MPd79QqsNiVDMmGbSw",
  "key20": "4xAGM6esPPNUp9CWg9CQ6qTReCD18d2VgcSnpjFxYaQZR6Qp4UPv9bWQn4YWBAidXra3nj2umUm5sfybS54HDrgd",
  "key21": "5Dvwux6tyEBy8BDKf7hNKnQKXQXLv9DD7pzrDEuFogQbhpzK7WeSrkzLppuoQSsdNp252aNRsYm1JUtYV4pfVjv5",
  "key22": "61HUEwZwqSsGVyKqy8cwzudmBaWbZxPxvsSMUPGSS5GYaYSitfXK44mLvUBXP3BykSRRMgyrE8PHrGwD7BFiWxhr",
  "key23": "24onHCweqgKvnZDYqzcBiWfwzf5sYEQ4qeuPENmdvZdC69uLEzvQjFfoEj1dEDEo8ChndksBve9C3XFazHkhM768",
  "key24": "3CP6t2RF35Dvsv6MdMDzz6eDPfda2hJ8iMnFji46cLGVB7tnhccUXHqfn17MzGxSp7GYfpQPPnUgj9MLjV85SQzB",
  "key25": "3v7qwnp3sWaEAFFC8usjL8ojXAMNxb2vc9HTjfv23D5ToWCAxsP4VVqPcKQDoXjxbzvcRmqM3CuiSDfhshRnzG7X",
  "key26": "4Ws98Kiz1A1cEVkAxabMS4cjsEhzh3Prx5QM31HcaVxzXwoHT8SQ5Unyu6Cv1tdzVqdo9yqy1uSGjXzNEJsWs2Xt",
  "key27": "3aUKJq84a3pn9qajTfgoK5zMuFVbRwVjgU393meDNCnFHYrEzduoiXSDvzmnxsAfuNwZ2ZaAhdYJDEPsUA8oGSsc",
  "key28": "4zyo1sNwYhFyND5yV4wC8tMASAvrYGoLarnYDsA7AuQ6FbRJkiC7jyvXeQMk3u978moxjiwRk8HcqfiP6u1HhKD8",
  "key29": "3NFpD4daRiHuM1Ljm1JLuda9fk6piojuhNQ6EShk13CFQHsCWdj25F9hZeK2gfUyAjMxMn6FWVp7jZCVvHkg7fUp",
  "key30": "3ennhRXevZ4Cjeu4MkE3VR5wr7KsEWz22g1SQMEBJi1WevhaBSjTbtkDpRKQ7wAcLEppHJeBhvKqNKzD37sjbZxE"
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
