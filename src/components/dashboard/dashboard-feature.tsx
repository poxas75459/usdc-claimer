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
    "5PZGgsdmen76GdNA7AAyMLLiHKoMvXs6Hx3kHKeYjMBstKRARNr1NfuiPjTFwcLRny8aqWWPS2qNxq4TKT2sNQYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aC5sUgGZjPDzjRsvhq7wNV7Jtv2RL9Ut5MzCAFNsfKJgD3Y5L5PMz1gZ8iyGmCDWD5faBHFSNuUbjR9MBYyXKGH",
  "key1": "2PXmiQQwKk5fcCrM8jjhopgBteaZ7eBdr2L3U6UQ2F9yiNUThkdhmoup9TypV4Cg7nt5yaZrFTAZowWVkw8h2jc4",
  "key2": "2UmW8M47A3xjQEgFBKrs5L5qNc5UFUiZg5d9McGnWHto83ULcaU74wEuZxnXjNqZFbCnyGmb6epWEP4sySjdg18F",
  "key3": "4CTEXLwQZpZA8ezuGYvTA6M49k5GThHd5PKDcDvvy91fhPhxWsgR7EuqspPosvEPBMxZgx9WMFb9kcLZZTRf3Jjr",
  "key4": "3Asg9v4jEJxvbhgLB5qMDyjTcBSYuNEAqikUVnVXpAa9nw4nRtxhooCcGbEpaHDjtpH8wbvHviBCTzyBTSEszYXs",
  "key5": "5mBRTCp5xECZU8jFj6anGKJ9ME8SAUYeAd5MCWuP6RQ2BxvJx2ko6bbmvf82fFp84KTBVhSt7Vk7ESeEHi7tGEvU",
  "key6": "3BDpu89oTkibHhiMA9gspb2JUfDJPZD2EgvWzuRYkMB5fsArZRirRyS7fos7AWoa3dbtzk84AvGBofS6uQLWigwg",
  "key7": "V7oaXEDun7ffz7sS5UMKnRo9oserGt4jS6FcqvNmFzn1wxXw6aRziMobP2fcR1WJ4cTBv3cbUEeUpDboinhVrKy",
  "key8": "e6xX3HsxUyBDW1p5AN9JafQxsHz3NT1wo49EKCED56hFQYQne4ThQe3TGevARdDxchhuLJg5U9SB85rdzYRWC1Q",
  "key9": "4gthpwUjLFfnMWcahjn8vuZJRLDM3uAbJqFdXq2emgvcPwDESHaiTfvk2VZAs3wPfZb4z8V5aDKWs4drwKZmPpPV",
  "key10": "4zM8h2gtc8uVsfidYGnFeNeWcSpvyrpcbL7L7HWmsabR3o7WXBGCSzzvpEimm6Myp3MaVsGuQA44x2fZir19Qa1B",
  "key11": "4LCyHHk8L4qtVaGkREBuJQD8LxSA5igF4MQDgms9gsTrimu2jRhTjTQ179oTmwJ2F7j49YC65S5NHPQXTxMd4jLp",
  "key12": "5tdyAC7yFLoRmMt6XDu9J5Byako7k858B5tmagy4NS7XUiUkryyMDhh256FvaqGiAQknyXGrBZ2J7RTa9a73UkkP",
  "key13": "QXVP6X1NZgkzNC2xHLPZmUoF8kRS4pFrkuJpe4YVtUKnrXT3sBrfJ4CUs9hGCbQLqrotsw7GuALDcXxH9A2YSAL",
  "key14": "2cfQztpMWiEBFvTPYyMZvPF2JWGr5xNorVEs3n8hVCpBg6MR9Sduv596aFv3BvrGWCut8UZmU6FVaBmA3y6dw9PE",
  "key15": "2YrJJxRLSJ9YAwqmeTpzDD2VFizYHBmio9xsQtEbVAiRodvxeGYBwn546qRCesioCr1oxNdDeMEvQY4sLqLQtqZi",
  "key16": "24KLM2kvgRWheTwir6pUjtpxbL3f1ij1piqUoordqtwbNDAzPbG89gxPoUKaLk9Bn3Bv57DegHMnP5XwqnPNRXSC",
  "key17": "2uHaub2w3nfs1ffMeQMv1PBzuE5thimUgA3xjrWb5N9kxqT1h9qa33i149ktkBnPeCW3fS6iHAsFh2UiFbjh8cTv",
  "key18": "3oBRCvM1cV2XnRF8RzwYaMTpoXs5VcsK1uR3yAXiX5J9ZXQ7A9ohWwjyWZevi3TWVBfVzjtXPUUDj5titGUhhctQ",
  "key19": "2gTvuzrCTpMBtXNUZrj7cZXvrTuxitp1BXDkekpTciEmRK4t93pwKqaWfWaijKPhhQRmfMbjUy9W2GiotPMYTjk",
  "key20": "59mSYw88kya5CpFNXriwtfbdUikSP4hqPW3gzoAdB8nXn4grJZH8WTwBQRGdNv1KcqZbSL2QRjXRrM3NhrgMjc3z",
  "key21": "2mW2gnnWcGktSiWXoYYesAEYBki9Vp3GqpFKaCXE11FggedG1KM3e2hbjqKpUcLhf1qw4yaS7Yeaxj9odCPrVANP",
  "key22": "2KQbJpyzoUfTdhrpXtMdYJqF6dAhtLoRapnYKDzhJHGEUSzuVVj7fBUKHaCr8cniUiLc2w3ioCUba23DBV8wMfkV",
  "key23": "62qgE9aLk1hngfGGLvPvT371FZKALfhxAZBGTbkFXLuVd2UY8sRmTQbNeiaXXnn8bsNKKne1epe1QEunNh7HFd4w",
  "key24": "cpnE8JHYn7kNc66wmUdyUZyJbQa7GdkxbUhzVBeyQ4EdgNaHDyqD9DYNn9j5t39HehDDme2gKFniXrayqQBoEUp",
  "key25": "SbBCqKko7TWC3Zh8Zm58AnPEwcnR5gfpwowL9KG3AMfTkH8oMy9WAV4E7zrDZ1UEwEs5LG6uRucM443M6WaQuz9",
  "key26": "67gV5VVtkxyMEgSYYExZriDWdsgyP4fsV1YiyJC1pDXojDPa4jnB4aB3GfKnWaUwwDfzKPyLJrnaCAb8FHcnhYkM",
  "key27": "5Fmj7hxefgjiVMUNbU6HEu1DEfriqvH4rG7Bq47UB3yH99Zpn4zKskCN1aKzy9KFmHMLnFVaYys3QWd5AKZ2U66u",
  "key28": "2qicFRU9FjLroEVa25DHKS7DZF3v4kUU6ujYUTomcfB9ma9rZW8rygvto6EES9tbd9EjG4PFw3wWBkTNjzFj3wf4",
  "key29": "5DBkY3RCDbTsSHpa6gTeKxBxwUmCrDXpHQSJEpioTzpyzhKjbB5NjBXUwTQJ71BYFqznq3YBMHCVhQVtH8mJa1r5",
  "key30": "5wGkLvay3BShpKjapJTGLoYC2Vy5Dwyc6KZ21UKkAL1sNwkFf39B6enstuRJAp7B84aGYBbzRB6K5s68KXcrwvi6",
  "key31": "4imXFVXoPdiUouEMALEtiyrqfo33WdSV1kYULqpAbt44vTx2b7irpoTq5ZEAeypUu1ZvovQzXbsjgAz1E92tUyrf",
  "key32": "5tFYT1d16z3vrrKEuM69jqPRTKVN4XK8evSRdpBgidTd68h7bzcH2ZfWqYZzaMxegaZxX8fkSBVqEozk9eCUjFBN"
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
