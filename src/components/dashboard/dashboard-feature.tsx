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
    "3GgQv3ztPd56rtBHTmhHUgTVG6XbtuaeDomugBoLQswibF7RQo41L11yBvR4Ngcs1dD6AZdHTcgnmt2PM4KynVx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38aeHEysWAFHq3bGjEjLKfU98beX2RJGLM2g7XrtQXY8Xw7WeBVQ6JK5y3sV52P5kreZZFPRnqv8m7fxWRWncCrL",
  "key1": "4K4WnotYbUdL1b9LwMTKtcwLwsM2pqvMEp7s3gbjgdF9G6tmzcbRU1Z6MmDf9xqgGTeTPjTZHQ8wiVHThJL86kKA",
  "key2": "4XHCyFvfSaBF4R3QwTGSdf6YYVQh98qkVdMyXC7VqUnYw3cZAbfzf1kagMhP6p5a6NSQCdX54tGEAj5mjqAH6G4f",
  "key3": "4QjpoJ8VogL8Ep68L7FGddAY4mRsMmjH3eMhzmikyDsxBmoZHjvZek6a2humbes2CzJfwGuNu9VRa28iaWhaAaKs",
  "key4": "2rMYMN4R8kbCHT9SsiuSgNMaes5c1DWx4iiofUDejnCj5B7SoZ1XMNvAZTQnVdHuiJde4MzpbvBmBnF2g4UMrX6v",
  "key5": "3VQhPbJvrgR2enP34EMPz5wbqyeXQDC8mo5HW9eipM5jsecgqA7UuFH8orqJyPzYMDz8rCN6amzuyrwvqZzV9dBy",
  "key6": "5t4eGiBUEv8qd4QRKDGx2DLSWfcc2VPoqBCi6fzyK14eNFntoKp4k5DA356HhH2Appo7aGGmcVHMsP9nQxeCZF5S",
  "key7": "5HGL6UCj7Rw8iQHnChtRoEpWKrXTAeLpFBs6AELfeAabZifQpP2kVwAgaGB4X8JYjX2vFDiMdH5VEEJWWRfS9zqs",
  "key8": "2LmQP8oSt8wgswp9SSqbhxWZeAne2ozjBfVCeqLQoTLz6oJMqW5GDJreFGFLWfjLsczE9KsB55UhBQrub1LErEtc",
  "key9": "35qUu53VqZK7dmHVbgoyJ566GwoLzbmWThJsGp6WvZTLEnb38HWjZMFZX6Qbw4sF8oMnBq9zgCHUut2FvieQ3Ztb",
  "key10": "38BGv3TVNLgkVVnsXSB2YZQkCNUKF8Xx98rUCaekcsFagBck7qPowJBWV1CURxUiMnpww7qmBDyRSSo661XHqAmS",
  "key11": "2ZL9AoRFzBSnZga1U9UQ33wxFrWvykz4M3QK5kFdCv3JGz8jbs9ketT6LZrj6mE1mNyhjLk91apocpHs6ndvFdEr",
  "key12": "4UwuApadq6VcuBSDSwahfGG2rEjEcvLAE47q4gy8BapXBpduSSWAoYDnEW6dA1qG38QeAzkTNAs2Giwr7QCtMg8z",
  "key13": "2z1iPk3VHARvD7suRm9Hoh71bE3MPeZDeHssgbLbEpqwbQhwk8Zs9t1YYfBaGQeJdtLXMnpwKEbtyJnGXFnntN2",
  "key14": "2gJQeGmcXixsEJ8Z7cZisqV1oWKyRL2GLFieJpWEWJ97UjYL8ZJ3A38qrh3QpvgZyvaZGm6j4rxWit3bQU6U6gHa",
  "key15": "53NRthkSxwyNSBfheduic2wtJxYFbvfCexJeQC3JqoYtyGPWtVB7RvyDN6TkkK6e2s522iL6rtXpA2sRUULEFecy",
  "key16": "4KYBsREmT4XeTdLCmwAke1JQnfd9ZfY8J34hDUfo5xzzFm5Ez3Ux5EinXyAvmxoDufpAyhY6hxj4bHr89vEd71E6",
  "key17": "3udHiWUoX5AfSSp9vFrAEfKueopf9NiVhCBaTFc8brvGqoF1MtAENVngnyR9kwDLRb9RnB72RP2SuMbLy3Wy9WjX",
  "key18": "2jpzjZTvMZYFQRrmr7RDEjiZPnbkAxQH6Xpsp3AhBStAk1JhFjqwkgb1QRc6wQ6Z7zvTeaYmtEwXTQTHTSsizGV4",
  "key19": "577ZmxGedt8VUFTcfFtfC7cK4N7RWQjLK1NA5oYzYjsA48mC3rohkVmZeSqAeonjJyU92949s3N7JeioxcJgta6v",
  "key20": "34zoAvedk6oUg6aw6sC9DSKpk3gsSdcYjWmqk6GukC1jFupMtHUCxBXGEnhwqLYvan8XZibECS71F6d722MSJ4Rp",
  "key21": "3nFJfG64tg86jhtx3h2EXBfd3gYvgYAKVbZ4spZmurZsSCDcp7q3wTLDpYKp9ecjMsqB5yM6TPr8nJowGahGcZFo",
  "key22": "4DF2F8Vwq3nfuzV8uBGmB7uo8eXSBdeSxdhMC4JByv2KfgmKgAHSciYaX7q6TbRGX3QxUzSUXj4EaBHSYrNzDxpj",
  "key23": "56pbrojgi4EVDDiVHaBiyrTp8paTnid9US5QtSSPFBScwWVA3ZNvgy1mZKwTveM6dYoU7hV5moTLVK6rLxsremYf",
  "key24": "LBY9DvkFUZe15T6y9CZBb1kMz4p2T5wM3L5ganD1Gu4ch1bvXqrr4zdL3JmpU9GKXt1DENr5PKJdAHxjYoYeHy1",
  "key25": "5X7zW5LoyViixVRt7JydYZo7vpnPKZRRUCjuu6oWRwU5MpSVNWpxmdNo4CPHdddQ9iHsz5Uh9NbABWru4yz78tG3",
  "key26": "4BjS3sD64E4AiXrMBiyJmmmKeeKxRbHA17AfhceYrZQshe1BNih7BY5B3yKqfnL2FySfcpBfKW9VSnXM9NmnXny9",
  "key27": "4EBYLCrRh6X96hC4TAwoH2EmKwJc4npZT2DEgZkSUVW6M8DXB2hGnqBR6AeiC8FNkydKtm4SxMbP2NBUkDSRJZau",
  "key28": "iyQrJPoJLvufXj2aFZuZKPe6rFfA3JBuLsJx8QSVUUcbYgnHhqxUiWDPQAHBJisnkeV51Qj23uUNWPdZ8vLaALN",
  "key29": "4Za3AH1qLkCtnN2mrHmPv86xE3FJ87qdpZ21842K464vrCcgjKymtGRRnq1MdcCT91k7oY7avRJx3xvPbYynFS57",
  "key30": "5BPzbq7WvGcwAeRpHtb4FVJBYB8e8jzTNHpgy5vzmiY8DvAiYMU4MFzFApHANnS23hKWMiATtKE5u1rezYsf2BHy",
  "key31": "534vehbWBp1uWBvoSAxdDFut4sMhAeL3LB78E2qymHB57DtnxvENzVsQb8vvuQHPRqdpqG8qRLbP9cq9DKvLKtr7",
  "key32": "4yD1Liu6keoD2VA4Ja4Medm4rYvAgqabGLf5XQj8U6XVQ9mKoJJu8e5zJGzjrdHPiTuiWP42UHjHDCZZXiwSpx3q",
  "key33": "6fj18ntU55eiy6yEtJyW1shuVLrnXDZy64sKyCMRZ8guyje7VEjKjvkoyf6ibFMvQ4bGe1YDysxMiTQFEVh1uwn",
  "key34": "2SR5nT5wXP8K1TneTpMDXtANFNxos1iaMoJ31TddeYnC9RmLK9UUZZePA2z1MvfVbSNxoxQtBPnhfzyid3svNFfF",
  "key35": "49uHxffcXsD6ShNf5h4vRtTTGYdnRGeg5zNRavwyfVDFBjxymVA11UcWQ94dRcZkNikEKqZCghzop3Tuy9MgwmbN",
  "key36": "39dci3m9zt5pNWCw2PxLws9z6WM8KvDkh8sPknqQ8BahSUQyiSxC21p1SUHNW7qgvjA4YcHEr17iHuBFT2TXGCYZ",
  "key37": "64HyZhf2DxA8oDZSG5Vqenc5PuRUUwkR5TURZvtbE52p5BknxjYcWc3DgP31giVttbk71CU1dJMwsBmZjUmv85P9"
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
