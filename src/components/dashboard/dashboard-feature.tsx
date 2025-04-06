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
    "4XmfpZbaK9Gwxbrvba1eERvRWjcDUAd7aDuFmGt224nG9MjoLnHPpWw7bpFmKGg6RDUGzELh1f7XheNjg8DWruEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jajmYHEiwcHJGXiAXhqFfvQvYNPvyupVdxFYx21soyEKDLbKm9R79vUTPn73KtTnrLvWXWBK8VwYsS29Vov1RFs",
  "key1": "5Ht4rURLdaymnYtnAQGe7wNSzpGbT8GNteYadrKCiWAENJ9zAp3vq4RiA3J1CXK9DNdcJNcfhbexbjJT179DqbRN",
  "key2": "5SWmnUXERfhnJ1Z1xywowhxXD6p4M4RC7nTNsxDPR7YacawNA4qhJty26sB2mQhFNiDSDHSWhMJvbFYnSP2kx5Ld",
  "key3": "2YBtS13ZbMcoLfv4GUNTLhj8Jp7FSE1UwH1JL77ueA9YVSR9DchJWbGWcaGh6bToEFti6M4bCxwCyVtx19FBkVdb",
  "key4": "2FG3zjWXMi1Vc9TqWkZ1spBB8m23mtsnLjufRgJGp6V4BsPsqqMqFUQzH8RDpsD9dD3CX1EdFxGJMz8gJ1npX5rc",
  "key5": "2sorwpVJX8j5TBwwTo9L5VmTNAgrr2GPYxHH5ZosaJ58JVY5Q9cfe81Hw8Jf3ehMNw61BhxLSXPxq1YGb7LMhNh5",
  "key6": "SF5NepfyD2amNKsnpe8qsT2kBoyPYjsnu3mvsR4KD4RVtpi3s7pFMP4r6kERxTqV1Tnhs8WaMPzjxen1KqTVoTz",
  "key7": "4BfbUKFBPXJYbFToK1QdtLjpSZ7LLsL9uMthSrauFRUgXFWhTr5JQs6P3aoc2azHcidaXixb2BePzTPMvmvMRDxy",
  "key8": "m5p4P3gTgVKVD1NbPtQqRr6ATRZGZM1yR8pRQVoaHH6nKEeF229MrNRNxBqZe9hxATmLvNgz3g82dcUU4wLPRnt",
  "key9": "M56L6CXSwT2owCsCx29xcyTgcnKnuNk7ywBdZazs9nW9sB2PZKGn1dtR75cYLpwgQDMNnFqt1U6HHZFqwc7sdvN",
  "key10": "5r3AiF19QZpFqPf6ngmHxMkYT5Yings6B6bbwajFC758Mdd3wWZHX7BGXZvDyAvxC84Jjy2MAjrfaU8QhagrGdwE",
  "key11": "5yFc14zKcCTkVoDCsAu5BSAA64gj7Nqeo7GzggNm2rHdtmFZzCuW2zybzi4E1HHTUL9bi8EHxn2Hu4VMa57K7uRZ",
  "key12": "33mfdwpQ9NtGKtyuwhwCebUbGWu4nNrurvyPiTk59iCRcusKtk9PFuSyYdCR2hQzBdf5JSbaHEQGFkrW1SuKnhe9",
  "key13": "5RZsYaY3uYBp4DaWEgPqBnPeKEXnh1nxfb4RVeYNUrorbz8EBZhrpnjRyc3wtguxPQ9nU9AQVJYrg3uzJY9kr7vw",
  "key14": "54KEnGsJduRxsWtTQgTffDnmSbaCuevuVZ5q3x8gHwnpheZ3nwqNB4zhFx1sZdPYBU6WVLYmEWE1KsEhnRrxqNP1",
  "key15": "4ZNCevnffgUePkAjghpwtiUFKb4c6Yokc3BafRQUZJcZ1XhG7KxLvb88TkfFgzCDfxzchrEfsHSYdHbWkhu6F12b",
  "key16": "4onTTAmkQ4cVEZqVhoS6igv2zdtFPUrE3LLgRczSenXnXxn9RTgVXNB38YdHVjP8S9pb5KLS6UrxngUgiSxRNdzx",
  "key17": "5qfoHyESVWMk63Su3Ex3NJZrE5Znbyuq54Rb9SedfxZBSgKMGum7wyv4Amf1sajNNWAueS1NzZR9CANgDntRgi2K",
  "key18": "4CkMGRa7LUpAaBiJm5aoYmHNDV4KW8emWy5Y9QvqJeJQE5Sb2A4jyjSFYFHU88uDFqzzfpsCFNeJk8VUAMxsJmA3",
  "key19": "NpfSA51GdxwRhjk5H6sKs9vFEQGr8WNMpfh9KZ2Q7emSxMeNpXPdaEuttNHA7erGDnpXhaXWEX3c8dBfJDSjT3K",
  "key20": "2W2mRBNdobtg61qdyP6A5sfZGuMizDwmtKBaPibykgkZRQRDsnTXbFEV3MDt8xj6Nzqtav6YFGvv8PLH63Ri8CKh",
  "key21": "33FLUEJwVXx4bx8k62WVcjtgKuzscMtnLrzLv5c87FiSmv5Qa32w3rFy5863PAbgCYG7DxrhkSGr1B1br7gpMXHW",
  "key22": "4vPrnmhqiNq2f7CVFfKQwwtkdPvVaYvd6owza9votZTXLcRGm7oH7FpTwtg1pmSjWAY7Nu99Co4wmBsoDXTVpD2c",
  "key23": "5UdDYYcqLnUyP2RTfJ1TpRgfTb29q2gEbAUQmmWCewsyb8FD5QXfMab2ziXjofAQPKNNK6iPk1igAaNksUBtS6wj",
  "key24": "3Z3NKxZRRAZexJSFssNs9mUbz5HUy8efmgb8WLdfgvAPbb5nfyNCxNanxd7YEAZoMY3wqbuYgaVGEY1FiKuCaoa2",
  "key25": "2NMzYRszys9xi6MJ5hbPUH3tM1v6Wq4sonvxgWnf5CaphBesGVc81fjZG9vcr9NkBwydphHdLpd2r2Ac5FdpXzaa",
  "key26": "2Ppwq9tdjHeKRi1nki8W1f3RW3A59ovBEFWoMUVoNiPFxWJfpRj2FaciH3sDTSfZNzzcgoAKtuCs5phqiKQkpVQ7",
  "key27": "3p42ysVmLS142MVZyrbrNxz1RPxmZNNzrqD1jMZjmyqNj8BW3NczR5PAqRYsP7uiv4XyLdFENDu7iJsxP2zWWj67",
  "key28": "2CoQ8t7F7uH7zQrxiRcK7ayCMgFDwB3i3aWbtcC5Bn3hzJ5E9MhxCovMCjZgrViWeiHZjpzZJppZ9oNudNsmQfxy",
  "key29": "a5Gi2FnjZcdNU1ATnTF1UwkWDcEhPRyLWt4QUgyAeaNxN4WGqDMVZC8B3JabhhZXZXV4vbj9K2uZUbZruTEWErD",
  "key30": "2YzNqC9Qeyn3Vh8Kku7RQmqkSc8FbFWPA8G2nHGCMSVqE4nmcPWQmEY4sRHpuNffrD3jEy8PFoFKs6J8Jg3X7N36",
  "key31": "2cKYspH1cB16dSpw66hN86qe62WLaYsuAjZdaxBjf9XWb3nVTTAQ5sfvTFK4WYWjMACzs7UPR9BSLXY8bBeCw8B",
  "key32": "2nopM4Mgmsa5J7gBx6VUnh6nRQPCpkb8GvMp4gxi9uutRvsucwJm7kXEE3tv8RLC2SVtieVtyw69XeqkJ3ydyVgm",
  "key33": "wwgzqTmJveba7x1uMRYca8gZiGqeZdwygAgUYEK48PLeFhGDqUkg8cEWDeeYKHjmnsTVgDjNp7HQmZY8DUdG9Ko",
  "key34": "2cXzg3JXtFeawuSFTLYp98a73o8xzA2UV1uSc7ZfY4EBNZqAuNWsg4FpZppvEd7hx1xFYavS1VkbSkNuZd5APNHc",
  "key35": "2XdnLPvxBDg4EHWiecFnfSsQ5iy1B5hhUR2RuKfKL1gdXJaSnzbi3N9aEkLrBxpqDiLxeVXfTNyAh6oCAhoDu3TJ"
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
