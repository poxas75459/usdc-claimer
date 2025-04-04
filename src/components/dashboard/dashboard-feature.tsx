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
    "RHfm1C7nZGfPyMvsZGKqZ3BM17FgswptrUj7XSt6kPbbkANU4xxgNhpUsUL6EweVzMG7M941RWKN4XduvFzz5rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cz3HDBCY7FaX2eRKGi1yXaJHLwcuKwazPfGM5yRujXX1Qq9fJExKK3TfbuJTxGTZSnR9UKBqjnVAjufcfMcM6BQ",
  "key1": "3Lb3y6XSCFcTHnRWfPfvMk6s8pZhhRcKXjZENxfiHqzHdCxpcLHQ3YKtquecfV9z9Lt7TnV4c68NCwcAvtzZGv3G",
  "key2": "5Xd4eJKUjzfPF2aJfp6dseKFwUh4HaWiQbGDUiqWYtj96kQCiMptaTwmhquKVAGSh9HxFtajdL9TKT34d4BkQrxs",
  "key3": "5q44dJSHsgk4Fu5gfcLW6Xsv5gUrVcXYPWDi8q6hD6LYjy3C19gxcqcZdjnQmLNW3gcppq5wpJhfxcyyGtuqE4GM",
  "key4": "6dcqUM17odWXkJfNWnW3trTmesE4Qw3MT7UXKn1pR3PuySJcxuWqWST3XZ3cqzwDeeyovquRnMFiegAda1RT73u",
  "key5": "22enFLpsHUKkqPD9bjQ9BY6LfPpo8ucMmQ8bRA61LhQo4r95DCa1jy211TJL9gggeaRz4EEKHJmjshhsFouBmZF2",
  "key6": "446JLWTAkx7xJktLNQYWo8Zdd8tt4nTjSdUEpDW4s7GxGvpHrXU3By3MmNaBPz94ekuZtnTHQkyRq8HaNztsJTYH",
  "key7": "2vqEvYUpDjiqVQ47C777EYJDXf7EbFSA23LkbJokKRCfNif7VbFRWbRnmfnsMBeQNyGup5fVvVW5469NdFchBd7K",
  "key8": "2bBFnKjtB5o4gwndqfHVrk7PT8GtZdkP5Wnz8AvMkk6zv3rrzBzbFMy9gJtZ5gwXdZa3TL66JYKnTQ8upT3Rf76t",
  "key9": "4MPJioine7UHKvXYJA8Zf28gywq14Qt9ybBXDbwsW9829ajBEKLzSTLrmfLEGPrUFJP3KQFNyViNGGoacvc5TxnP",
  "key10": "4VrExse8L7vvgfTEqgfEazGzaabmCFLDfxd8PMZoVmPXRiQ89ZfMK97wgpWAYhyrzHvJdjzLmK5Dp36qRkk1tVwG",
  "key11": "3htAB8nNrCRRmHbsyCBGKdaZ7enrgWBDhtnnmnPoPsEySajNMehHuQkQBJRgTp5eUL1gErHRcxyZP1KvahckmGgt",
  "key12": "2TxzYXkUz6bzk12YJdusCayBtsbnjMFaEzCEqUoJcdC2k5FGTkNEcgDamehPpvpByJuiGKPHbitJFKUNVCGQKSVA",
  "key13": "3vLUKZgZK7ruoFi9WuEz8SjXou2k3douucE7up5siedoAymdLmmJBkK5ouBiwEZnpZLCkQ3yPoRSKvWcnjaQELso",
  "key14": "29YzDXDyquUrnZUe7TD97EPcsMVf43zbP14mJBUnaLuPYLZPKdd9a5cdnXPuYZ29H2efVpqywLX7jihmnhGM6YnN",
  "key15": "2prZFCAQb6UNpCMZUjY1TGqoDtohZVCDVQGQkLsqqYgk7qALh7yr31AGmwfsYeF71Q8aVnbeFWgbHj355xZPjTCy",
  "key16": "3SPpNSiLaGjsV6L5G8zvad4UUGEPDgCf3bkL1xf9WPDN1rizn3qN9Tn2sLKP9gvUcygg9UYrhwgNK38q7UScRV46",
  "key17": "3oEw6FopKruJsNmsx2Ez7BtPeM3U9v9uJroV2JvQnVRnhJftGTEJTVuQ236wgBivbUXP3CsvBvPuFbNWXf7aUXKh",
  "key18": "4uEj9jW6SBFA5qAsq8ZeBftJHb1HKmfC23L7PU6qHaBXZjrWZBmPonFR8BUwMBSJYsd5VobnzU181iskS1fPSJrX",
  "key19": "2WkAEcmA3kAqjJ2ghcfkHApkaR2EvXYuUNDYjavhkcLiWKiCwBz3xvxH62cRwhKbAXJPJzQUuLyNTqU9xG12qbaU",
  "key20": "4nFYDyb4ZovpqLEbLzbPoUo4PNbpnSjyPKFdjGaiKoCa5AAfdHUCTX675G3UsrrNCERdD8GiCVjR8YTjPijd66fU",
  "key21": "EVbTXTVbA7kJqhv9ZTFHicppkmTAv2Q4DXir9rVkN6FL2V2iujbMeTxXtJwdKh6Pi46wThdRkpJssvHQPHydd2w",
  "key22": "4RF4UUXtLsa8TptnnAAptVkW1cLeeqVx76aLMqXoURhmP1E7SDuCF5j8iPzQeS3QnE8EatEeW1yFC4SDCipygWkF",
  "key23": "3AA7m18Zfm99DKgzUjXBhwMxur7Wi7MY3MxXx5mvjUhVn6epqKNcxD5ys5qcuFQns9HS9RG4dgbiENJd4UrjNs9s",
  "key24": "5sU5KBZGZTff9yUBwPS2bbxpeUrvQA18cFDn5V7Q9gvG4U8rrAeFVmDboWqxAVsg5RyBDyKLY7g4Db28aKjj5g1H",
  "key25": "6MKMgUHD6pWpeaHGzQG3qgLMwCXh3PSc5mzJq83UXLEsD4sc76BmjLXBmSC29fN2dNyHFT4woFJ3fDjbGSV9Bgd",
  "key26": "21RPV4MM4umQ19dZuCSoUmiu3KiRiAgU1jc4fBfHQ22ttDBh4YD5oEPDgENucg7Bgno89YuXPgUbnAkmaqpEhgjj",
  "key27": "33QGgWWjzTNuWVQjyGxYAnKH8Nk2s8MUoBokKs7P4hkJGSRgY2PYKfh6sRpcAxHJ9sjhiCD6RHwdCqCXhMdGQB9R",
  "key28": "KHaxQi12G5TyHDaMFt5zYcw5Zq38TFJwF9Jm9Tt1b8EHpmDq1gWq92bSR18D6cYDxMCUTwrwHoQDzDhA6i4NzCX",
  "key29": "41MbyUkDNypFcdPp3yySerR3kYfPW5uFqqUa2AVCRmevJNcK8bcjGZ2WzM4AdWZjwF1Mj3Yq1kX6jc3yx2RJKZRZ",
  "key30": "59XwgBF1pz12hjjz956NwRu889ShdERvyZQc8yMLYbTcjeko6xmZpSRabtNphg5HPqQ8kQcmrXDzsNA1QBA5FvMT",
  "key31": "3Rs7HvoT8uwJj7qYjNQHccdwA5fzJSLKe93W3bvEbsJdmvLwo81qsr6Ve2FWQ81ts6ozFpv1VbufsMkG7Z3mxqKQ",
  "key32": "4y1ZCKhgNUAc3G1hqrbtBU6rRo5GkfvbNAWNnBMYKWU9M9BMp8nEGJYCAd9YoK7CcmzaHnH9nQbDNafAGaVwD2t3",
  "key33": "3yAk6KpD2pfjCjfu1C7QwP2dc3tUSLxY6XcWwkxmiFXVLXT4YDF9AxbuCdr35Pna2drVfimqoFTBkQp1sXTw3uyN",
  "key34": "3aPkaRWbRakiPUnisnqPMtbXqcg7aHcdebqXj8xfqbUJvB7ndXN4auq9PxbX94KxuGPMJwNXBrXy1jrw3Uua8VhJ"
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
