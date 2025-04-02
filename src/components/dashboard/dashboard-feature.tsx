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
    "xLvAKFLxeeqyu51PTxsF7EFPvosxABejnx6UYznoNKmvhHE4BXYR1xJksNv3McJoFCvypnrvH3DUMhNNKGd6M8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oc4hU3G6Rex47bdACP72SKfneFoqTi2EX78FS1wAZxTj7JSQG2xNKRP6RaASwdqo2Dek9wci9sF7feBLcaocLnB",
  "key1": "3tQbTpLDZk7rjFL7DmJVQtgCRo2vCsUkPFTDAfQxPgWVXCKmJHwjFZqwynCNvuLjG5wnZbgJCNm2Z7YrHjEzdJWM",
  "key2": "2euFQbqg9GnxhaKEuN8veEk4MmrNAYfErrSE6jMptujb8ZwpRQt5WtRPeqXFPZxNQ36zYEYgcDmZx3jZ4oedXUkW",
  "key3": "23Pi2BCPpjDm4qUDzVFFr3tqjGKW4pD3k82EkFxne6MFXu4SM9fWFF9XRWqfPwJdC8nNUVJRS8WzdrVRDcyq3AG9",
  "key4": "3J35eWyr7NnCj5q7yn733u1v5x7kdTfQ3k6pyeLVmLWx4KwQGUkcQobXshduCRQcjWarfUb3eFXwLet6ExqFPtGQ",
  "key5": "3reZrL72BZGNZKZRNpEuVmmqFTBBpxjdk7HpNWh7cPhDo9ZEMLFvViPK92y9zWnwaGefdevqHTBvja4LD5tfVZAv",
  "key6": "26d1fkJpmjS5rYHmtozudqaVk6PZ6M8GwxEvPg3yD4SDtrqXQ8qrPfnxBehjsvqMjauSyNFEtGY3U4JnC5eqWJJQ",
  "key7": "2sXrYL1a6scEkrBNDJwNjFE9kU9YfZDwn1qWq5Z6QkbvQdmuzjuAZax4yrULrTosgQCXraZZmx7mcuHvRDXXRDGZ",
  "key8": "3DW9wXrHcvNSb7J8AAyWJgkBqbKc1rSkjuyUzAZMvNe1e4UoNvbGGVS1QLi6qhqwABvWk7b4vQqCfgHsNJjgVf3N",
  "key9": "qVJgNobmjiKSrxsF13MF9ZpPSmKzyKWbN3QRRgftffiso9YFzaixM54BMwmqme3iMvxsyXbRuFhDFGLAfkBJPFx",
  "key10": "35TVccroUfycfqoiPdv9Pv113L3F2dCD6rVGe9Nfxc3dMBnsUUTaBLgXrSBfThhX6JCqXSkjwgpV4EB58xF6S6Yo",
  "key11": "4acUxFM2Azavd5Gcm3YqmkFYYNkgaWfzXdpZAkoAD2KSN4FBC89FVhvpVvQ5JkomohEmfGCGdg6BJcLTyb56FCXG",
  "key12": "5URGk4wqLiJDJHuaWjPMbrw5w1RJ2YbvNLJQt5CC6fe26k3oe3JQyNUfPfG8HY2QoAkMf585nQXSLFqkgGbzeE1t",
  "key13": "2Ri73vihQDxnxGZ9v4sJgmxVMjkdUcYqWBVQHWrzvhXBpseixrdFdBUYXbW5nkBkckhwqcduULAayLTsBF76GjfF",
  "key14": "5C24BoupAUTwg995gvz8JkRP14yqReoFrAX2JGXFQZxXgZBybg63f3qgLZURSi8vK2JFXdkNfvSFrAtk89Cev8Eh",
  "key15": "3TVWZtfQxpwohXQFKmM6XACpuwrwgRuz4iorCk6kuXN9krdKFpvTUgCaeK3FKgfFujfgjbhnPaeU7C9hU3jtiumh",
  "key16": "DEucaa3n2Wbyqs3AfyFVH1XQJ3CBsuNMkxgimJNGecQsb1Ekdra6bi85EhY6dsYmzovrs85h3W4aCJZ9zH76jbP",
  "key17": "58pRsw1eyz4PcYzUAvCTZrkyVfXvuvTmjCfZ8fok28Br8rMzNcy85N5mWKgp6ozHiPmwNgARbV4QGoUYh7vyrwtp",
  "key18": "3PpdM8kB8Eq5QWGsUn9nFKQyDnzNYcVpm9HbGCZTA6cuRTjHELVEGLuQSJ12RK5VLHrqApbadf1ddnQTCfckZhxi",
  "key19": "2wdM2NJzT7fnuPzVDZais4CZgDRL5K88CgUeoEouodeQw4ubytgeZm4ZWurX6BWRoaPkvC46sysBCogazhPbNUDD",
  "key20": "4F5B5oqFGhbJYdUobSmg8SKtZs5JfubZjvze1fyanfjjgkvEhspN5tEvZvqPQFkTfANj6m3imHcRsKQYr3CijTCg",
  "key21": "2TojC1BBmgGyq5CaoVoFjpKzdL5ikg3FWucNvnjwp5g7vnUYJgxnFRQDZy5gq9cNi5FunvDtv71gGnUydhjo1Wqu",
  "key22": "4zbKQXZHhxaF6LWGVL21nCsm8FqUmyfRJ4SaTDPhuStnF5LHXJz1pxsvAUU7hjNFmTNxYAErmwt3eQXzDPfye4CQ",
  "key23": "vawJmiQ7fNmxKjYVAt66yVL34Zuj1EgmEzpR6fwm6VYfPzEHZjKj4uqb6Sruxq2rAau1U7QJ5ucJ9cSf4ufnTwU",
  "key24": "2c7Ui3do7JRNePaijvEarFtnQwRRc2wu1rLY8cFVFf6aBECm6Py7bifJiyNnmMYsv1CF8Ea47TDDALB6H11AevkK",
  "key25": "57KoZFyUQ5z4Kih3BRPt4Az7eDhxEFZuq8dV2cagU69R4vxth88ASo9czsLyn7iVCaPVmKvqSigzjEBTwknKdyxr",
  "key26": "2PStdfZiVN1wztGHSywrtzpqsSrX5oHPsoJBNCg1W91xsai9UfC3pVywawmKjDV8952a2ZWJEqod5C9v8Fv7kfa8",
  "key27": "3G2vEXmUnmvL2dETpedNd71WQoULRggqZMXbsRJb7NZEd3vg8dSzXDWQPSYLSGhXRDUiRWgGiV6bF44f8gBCYyuC"
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
