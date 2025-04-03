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
    "eDeAXtExonLK9CGfLnNtTq9fJH7VmikNCgct1zhJbpeEUXGeHUugaTz1ew48EgBj4HcYpZAjczjv9VkhGvQuok3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23XdHF6TkBUsLTERiTEMWU9zg648DB32wKBHXrtEYL8PNgYjHQ1nBg1FQTLGHVTKLfkSrLAQxt1YQhtp1XGLVm9C",
  "key1": "5SKkKhEyjbQNH8jU1PryBe3F7cXmQcxjkUTgqNDXfLeg3YhQ8uoxCSipEScYR4sYUjYGJBpoQGXXk8bK3qocxqxg",
  "key2": "1Q71tX62Rd6rs9YNensNB6AgTEVe5nY6Avd9Ec8Aoaf1ehbEKQduKkHhCSJVP2XJgUhJqLex6rqz1VrpK3mSwMJ",
  "key3": "5gNnpaLCX2u9M6VJkgj2TP3byBkAyBd7huR4n15tj7WwtCAJxFudEcv5b6yQAqp1MwLh8g6dFcj3sW4dWAWC5wWa",
  "key4": "4pxsBE95Buy2zJLkC2RKGwtY1yPtx8j1qUyR6Ap7TS6CeUZyUApZrtAfTUBcywFDtoVYFRMFWtxAeKYjuuhpu7oH",
  "key5": "3Jo3boj52uJfvDhvak4xHLp8c1r7xgvaZ7bzeSR5AeiqSrSF612aff1rkTLQBJRiNaiGHxfqUqBBi1zddmVd7sZ4",
  "key6": "JdPnNC9dixhSfJVWD6z4QS1LF5kPVt9yFVodeeqAETXZg1rga5v7chtoqWUxLDdU9K5TFNwyJZNYHYwxRHMueMz",
  "key7": "3pN2wmxrYYRMjYv2uBas94hBgMBHVUpLq1538K6in12BSWNdgmqkhARGoFF5zJihTbM2iGo4v6gWRnJc8LdkbGxo",
  "key8": "65txzhdFKuFEjYPy7rVSRvgkbqdAkqDAGY8mSCCeZbPpBbL8UfDMMHgUkPDpcuxgN6SMMWukGDSc9FgaEo1XjP9S",
  "key9": "2UEnuvZu7sxsXgXrHD9p7MBbiHWxMmSQBkXKUK9AoKx2wzDVB5enhhmCvPiT6N47qNDLHnESn2j5pgwfdKBUPbB7",
  "key10": "45oaNH517qTy2SxCtVkvtoXPdijcRLY3PjSGijaDpYDg7xGzkBV3WYQZGeRMtsLmEmq4S8d23MPF3KpQbYDeKasa",
  "key11": "2KEXSxvQFa2VKhhh64hEoJSpUyc4JSpmDPK7mwYMvXyUDmR5W7m27aZZLVEFNVUbVSJXQ2wZ4QPbCQuEkj7gJJQR",
  "key12": "P9YDeJt5v9eMNMvu8FkawmyTAH78k757FADtz8XiJRxYUrNMAjEf2yPZzv4BmbmVnJa4d7ts4vj5cSStY2DHhps",
  "key13": "264gGHazwBGaWiX5VtjpV5yoXjW1kZaoSiFMQfaxV6WzfisorhftfxQ6P1dibxQxSFRRzGVC8ks8DKrEmSnDkSeK",
  "key14": "24rUfWWyUdhUkWpuZ8h6YknJXAvzkAm5LuTfkW8uyNQ4doxjFGL7vMgBfXDyjhArzyQzR4F7DPVYtvMrgJ9dGSHk",
  "key15": "3L6jPdNUKhubnevjMALggTnctNbn6qncCJfCBQaFL84CwmPniSPc1Fp53ja26tEMbT5NZUmKamBqH38ddtwsnyVm",
  "key16": "48R8DFkeieirdn4UdqNQunqiGQmKyKSwsmAHKFW6oWK14a5P6K3hLFupSe3e8Q3xaRL5GukR3mAKazsPANQVQBo9",
  "key17": "3z2xQDf5BZJ4Wi5uCd4heNGoEcxJR7UwGp5bHRxcj4VoDb8pDLRfBxqmNNdnJ22WMSvH8UwjRZrsW27MydigVjGP",
  "key18": "3dkEUZpBN5MwsmTjSa9kBsPuxYsZpRrVUH6pcGkas2vz1k7XcZozALHNrLRYR7KKLN4Zasr32PvwfRDLJi8BX6ar",
  "key19": "5fvkZPd1EYhYtkNjJYAa1cbguZQZjLxJGU4Xw9tyaFNzKJZ73a1VgrZtmCdoyk8CS6NmP5wsVgiCahjQDeifJ1eU",
  "key20": "2pttqG4WM6zm2MMuzQyNw5quuxE59JvyNToN8tZkaFE19HsgwXQ4CtJ1u54dAz1599TC4fXTEzhe1KnCqPmwSMqr",
  "key21": "33oEXx8o2F5Aafr7uHY7wLyF9j2yaZqfTvw5BSz3kfirnugMrpDUHHWHb8CM5VkRpR5PoENRuPo6msR3rtC1JTqc",
  "key22": "2qSPoNjP8DXzG8iv8hTz9t7S4MaaqKGaQovKhttSi32MBwqYZyfr2XNzeYRysiuDty3RYzVgquLMZqCZNKf7j5Tx",
  "key23": "2pEux7pVVEnVbAyopWfyrFzfapjk1PYJStPA5S174gyTZJgXfdeoTAusQTrMa2KwzGFw88yVtprsJLZkR7qcozXA",
  "key24": "3oJu4DKWVAzWks2KLaAw9794939AHgpErQM6sHgZQ3xFYnhMFaD4eTrX34Q85gfm6nWG73sfTvRLZDVLTyPZmPQM",
  "key25": "xQHYcFm1DhNoifwwtZBDiFHC2NUEJbCdXKhNAmM5JLY6Zkq4GAS8S9ZtYVDRBtnDAis3AJYBZFVRNgC66tVJAzM",
  "key26": "NsLSjs3VgiZ84DnKoJ9oXyJALgB8XGhn2RatLc5EBXeo3924NdSGKgGL7rB4pJfuq4Mi4bNcoEPQD2xXRy3iRNm",
  "key27": "4nRE2mC4B9ELFznCH7r1rHHaEQkyeAU7ThVdxi8HJEo7xRUexP5b3kgSWmH5C8HgxcckbLoskb9VDZVDDFhBUr3e",
  "key28": "64twmJHEXzRLdF5FVB1XKFay7GBtQSnP3zbMDZKPYRjZEJiLpKk7JnLB87R8KxKCjfsASDn2vuMNgJhVGx9m2Btq",
  "key29": "5csXaiC21LCAsTb35Wgs8NuHSV5tUBEok68mCM9R2NqEvZAfbQjB1aZ4K1etAjsrD32zsSvZ82Ga2v1dFCsmwRRy",
  "key30": "3CGNr3FVK8MRfbtUXXHrD1u3YgQ5c6ftYFqJQkqUruz9dLivbG3pBH7dhwLMnArwFnHNrmo7H7wwsZvuTH8WjDdc",
  "key31": "mWmhM7CxxGcK1ruDi2e939Gt5fCUjigPRzmBDyciKcTGtFHcEmJL35dXq9i9W6wzD76egvN8EmpgDMkTvrBCoSL",
  "key32": "4wTSxaM1Up68AfP7UQ6Y5dLr69iXAL5nhUMs77QFxCXTCbY4J2yHEwvHVZ5VhaNdLoXfQhQdnPbx1nLwyAoV715d",
  "key33": "3Ky4AseQiWRjm2ggVXicPGNYPqQBVce7VgzkXtqn552exCJUC7kRdHQVwZN9gaCXEqZzRvBNSEaUnVBkPf3BsLgh",
  "key34": "4MPxVdek5opwdESFf8ZvmytyGbWZHw1jP3KTMqWZ7zxmSH34LtSoMDXZAhRrQZaNk6gyg8juBwng5LLNMsuUubUG",
  "key35": "3qRiNqZtNJkMTEGfQAVwPgxFjrbBbRqpW9BjsFcRTRNHqMZ2GMDAz9DhaqVLBHbarpjuptxKSLWMbx4WPEmZLmCd",
  "key36": "2oPL5oK1fuTKWvoQQw2q7B7zmMy6aACdVYgyPFitLsxjXieM5mCdBJXhhjXSCnnYaW54R6ZqqnWvbGQktqaM88H1",
  "key37": "2mXXJ9rcinCVgY5cJSpZ6wfg2G7uHtTPuHfXPQXKLYTvsk8akqZEBsMzjvMqx3ughExZGAZwc6nNHehQuW6fFJic",
  "key38": "3JrfjECFLzsGhFdoeTWgs3v1ZGifH3CLVGZc4vRR6DGzFHLGvx9BrFj4sEEND4MWQNgZZwm9JM4eYFVACZZMb6td"
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
