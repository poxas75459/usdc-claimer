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
    "4sADsZpTpMTwDFiKdaFyncibfTPBjuEkUMVmpkBRmyE6zXM4wv4mZ7y7x1CfqBfHopgMz8ddMnkWnDC6QYYUJ75G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fa2qLhAYCRr786HvbnGj6fUPvsob8XkfA6MLjAE9i4vJSDFooCZE1N2FKEfej3dEmFeFCdaV5TEn4ZcCVjUCq9C",
  "key1": "4TuVhnXt2Q8A4JxZEr2C5oyWZomtceMt29wKRkyAATnNueABLmPxSZofTq4voGKDVs2gQTrrWeCMLeZTGHqu8E7V",
  "key2": "5NrZW1MPq1asQxmTNaP5WG7UuxuGqRy2PTCLEAkPbub4dTBjn71E1B5Z1ZsL4juUttfVWcQDL9Eu4bY5UbeDJM4J",
  "key3": "4feRGbU4dRCCqXve21GcvtVuYTTcwbKymJjGiugPoAm56RxAMne6L6rmRKqZFTJV4tMRG42A69b9T4FESGhr8Mpg",
  "key4": "5ceyZPjsHtMA1kFkNg6X8oUkMKwGTvHq4NeABEzbqQXCmfk9JjXhFpZAv3onFMcxXHFSHVxBhoncRhe9jzUA8cCZ",
  "key5": "5XYhKsxaavMmFvJJaLLUczyGavkqPwoWSgyXZUZhG5iL5c5ekAgMPzbdQHwyH5mtw2UNmyp6LJQxFTXJc9vKZ6iN",
  "key6": "65LGB6PWJAo7DxCbv3vM8Ux6GDwe4du6vALgUX2DXaqRvmD23WZVexT8o5oJD6ePWcjX5WdpCZDUYRzGF3PNNUFq",
  "key7": "567Vuxj6aqUZWkWjLLSjAoPaQAYEaMWvni19h5vkinWEwHer8m3bLNmc5aKLwcA1aDrTecKrN3GSGybFPLsVLJ8q",
  "key8": "25zz2WGJYcSTUQEcwE19agrqAkicsk7qhnY7Pe7YZaYf47xDQGcZrzim7hXM7jUj1LctqB5fP2nE7FQqiAeKszGm",
  "key9": "4i34WDx4JpHZ9HY2AswYBGvAZjEHa3zVJtjnhiXQzQ8vNfycGGD4Y6osfQ31o4Xfvqe3b3V72MToWqsxMnjeXCms",
  "key10": "7AjEM7VDcYmSzpcMQav2DeAgffFNnxUTCxggjf5w9CrqVZVYxm58guzuRk6LUiZSAJRHDuD9XBm1nLUxrTGbwmW",
  "key11": "mckqJs1ktMbSWnbF74vkdn7ojbUWQ9VRyK2bPSzSCQmG92USMGTdWcmffzYJN79DKxehxjGs8dDesJhHS9BsLS7",
  "key12": "ZEnpfRaKkvU2eJMSSBTTcjC25GmKn4dhSu8R41Hr5TdrUcUUL1rCCc8nGWyuU4huHjbJqD9qAMenWJEBE2ucVEc",
  "key13": "2dnj5E7KnzM64eHVQrnszhRgtGzhhVou8iectjyGeRG1ubWNM2eiYhT9w9T6VWZ1vZxM56Y2jVXY4dAy4UqA2gZd",
  "key14": "78bxdcsYbf2Euy1nQKsWWhGber1FZNsz9fH5VAvpQC7Z3pZAiBdoUMHvQkSNv9R2WsSGGVfiY3PwtRPPuT7ZUb9",
  "key15": "2w75ynCoGdnkDNtEMM4REAzFkjqLyNqXTmtn1p1tYc4kLu7L76zPm234YvuDUiftJHi5HwwBCP9WFnmDq2our4Sf",
  "key16": "33vB1pBXULW7jVPgXD15yKfemXK9cAP6gZBnzbWvqRwbWHADn51hwRLsEbkhQQGZtc7rN7ouSGDAaTocaJhWqWT2",
  "key17": "ztbkB2KpEgAaZmqFBkjWH4gs8j2y8Y4CfNLkorb6iyiwq2zrjvfjnTodMj9Hw1bVSEhhN5aTiXfd9WZqaf9qLuS",
  "key18": "5PC3FfNm2tunomvtYXjbwn79yEs19wbCoRQ6cvdTgaqp76BMFvjbHu47b4vjWCZw2Htedo9gVMema3iP5SURcYqS",
  "key19": "2ZrxCkvEi2vHq3XK7W64fLgzGJtjhURGavskjXw4yStVFjy4NHkJsVGAQQQ7guRaZYFLej4Hd82uKUkFSH6CmBsW",
  "key20": "39JjmJ5y1e3vHohEVthwKSGHqTvZb9rcmXbovLCD2SNCXzQUkxpHYxJZ7kjpY6mKSmgAcURqZYfhSch8dYLX7JoP",
  "key21": "9Z1WbTLZjxeNkG5TYemFjvWiSmkh4WuxV4WGgaELYuKt1cJrg1GfC7DtWtiRTm3HcZJTW7nPienWYDJ5mC7q5ib",
  "key22": "3YosaBgkuSezhkmBXQfduqcgPgwMKA7Gu2Ms75GEkB4GgHRGSFth1Lghm4zuE4QBtAGMMq5aSWqWt8JNP7XRiyAR",
  "key23": "GQScauh2GysZt8mqdtBxpxTiCAHzseF8PwnVuBeUuwWsUwXNXsBE5D3DCSopRZM7hPffm5tHBteNt33oLszXahR",
  "key24": "39bU9rrWpAFDrsjN4DDMC2EfZ6i4Gwznj9QxyVK7zTDvtLENbE3FT5c9ijQVinEYR9bNbPibPN5wojx3gmsW8peR",
  "key25": "Yi4uj6sWp12fCifG2vWABrExUqnp2KLG3cUdnwYRu7kW4vXaGTtGWjGCFpkyfs4yaansC9hYDBXbJBy22CB2dzP",
  "key26": "y6ycpGwAv66joQLXHXjW4pqUQ5z6pFfvHYdRQBP5t7TQSr2W4QC1wG41xWDTb8nmouQJQNnJ9PgpF5PBkcgS8zA",
  "key27": "KNgmjAag9oEy2ZdzPW8GNScCJK5Xhfi9ztHxgMBNXchU1ng2c7hGwUToVBc74H45rvv39zBWw8BcNiRXUqAwSTN",
  "key28": "2WCApULyBwvrgTgB6sGF2umAvvuQuuU15ogukizrUJZyTk4gNtXuvstkV1bsEpLNLaVyo6By16Cx1CMAWbr4s5Bm",
  "key29": "3gLVqzq58DYMrH67GzSNGFrZLWbJSvbmGcA81A6E74PioQ4FuiU3hz4qvMeBSE267Fu51e2Tyy8YkQoWru9Eu5y3",
  "key30": "sbjvMYMZo1Sq5ifFKDrH5UeSN1rjn6XMTp2TR3bmSDBkPwaergLupJB3n4PkHosPYuzbr4sxJUNtDGi873c9y8S",
  "key31": "5fJLLJYN94y33P8JX8UgP3uhHzSPGjbwgbxKZ7ZpRFEAzWjaAWmeFVTLoZdSPeqawNgx9hEQZhpWkJP1nyCremms",
  "key32": "2BKngoYvPcVguc9H7HMFsMyXGdW2do8mw7oSvLGUKjk2BVkqyLSkWeTTgfxX79ZTRezhpUEadKLrsMDEohj97o49",
  "key33": "NMbAQ9CRJGXyZVFRxcGfTxSvKmi6cNGMAsFPGWCayH7h3epvPCi29EVSJNTAgvg879rkkJaKE3xtyXrUrbRmXmC",
  "key34": "5GeF4LfeWpbpn5bQA3PEsXCgWftonjRzj2Gkoy5Z1vNLgKnCpq4KP2qqRiMA8QpuyJmF7giVdx2FGnYpocMDfyWw",
  "key35": "33nFt94vdNu54E8HFQqcbHzXqp57bXisemARZCc3892KPofEok5EjWJK2oTkr3D8JvDVTXLqkzvr2m6aMeLbStQn"
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
