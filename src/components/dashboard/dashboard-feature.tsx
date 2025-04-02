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
    "5RC5XNhpnFRsCgLrjPp8uKqhG7DAQMkieCEx8y82P2URtxX6wYVHZRn6tky7uRrqQuk8rtXpWjouTueeLrZBigdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5srKGeamFuiaqybpiRYAhdkwpapBZNr12qQECt4YQFtpYqQHK1rQbPuJnBq2BRehnH47paKijLm1yvfWAL2KC4vi",
  "key1": "5UEDQCEeVyeUjyKjDTcvzgCu3fvshrPpJ8ux3UUDxrobMxYrD3a1XXoi6GutZTfQ3dUxCzdzAPMUo2TeKAfc3GGZ",
  "key2": "5nSeCmc4q7541Mn2G4N6DAeiopkhqC7YSeWpv47MEiYYuMKr2bR4xcHLYgKho4Q6ytCk2pQzVg4W4FyMokzj8sUt",
  "key3": "2D9yoMDgrJX3umasyKmEeQKsC3zQNeNpReyj1NgPzHUpAdKniLVTC9HMWuLzmmE5bZoFF7hoxMimXWkE9eLLC3Dn",
  "key4": "5Avt4s7WTjyn1mKTnGSzyzqpymL5LR31uP5tF9RG24JZaa8o4qXe6yBcZpyUZeAoe7k4HKrkwgG5PHPrLjcUvRtV",
  "key5": "2bYc9fkRBMX6svZ3yGaKHgLANdvGVvkFpwbptrcbc8VZNqzQyBFBN3RLi3tpcMQfbe4JrgPh1oRh9yiB8SuwZJWH",
  "key6": "64Sa4SWA3pvm9qFsBpitdmuBfNWqBCbRkFk28WisprXPow2BdUVHgVWxFyNghT6CZNeCCFPU8P9TCK4jziYPKPWW",
  "key7": "5WiVoRVnJUyLfi9mUTynNKHwdhX29YJBy7ei862Vvkmx8RNj3ayyhGFyN5XV9XQ4y2ww8wWGUoqqcPpt8ULes82D",
  "key8": "37KzpqqhYN5MH7o6FZgRRfQAkVWDgan3eRaAzh2HSFraP6sFqVaq72n5uJ1RroPzCQNhK6Rwa2wkHWjmz2HHGQzr",
  "key9": "56goW5VxY5wA7cb1jtASdYmg3pUonKWCCcGgyoMzRCryQoMyoCgo4AXNURb5TsjdRY15GEstJshYa4zejpoGGfp4",
  "key10": "3P9nYEUte7BHux4QSRfRwazsUsaj5owRQuX7Y81GNXYhLmQ37EnjaxE1Szw7gxwem83ZCuttZ2eAqgu1AL4Gdaax",
  "key11": "4QPa6VYn13nTmJNejfUbokA2dzsy1A9EeszTXNS8Ae6y5ookkfXHvXSqVfz8nAjQmorLXGnWF2bHP49bcL4Q4erG",
  "key12": "5rbAgrCzXw9u35eXkDMLyixah7W9kW2pmr5FzFyCdJX2nVDWvecaxqC4FD4N497b46vZW8taUhYjP1xt5EpfPK9U",
  "key13": "2oPYuv3tssGGfX76qW2LJzw2DVpbaVT8DEK7bAmdwdZ9mKJobCCbderT8FTcWXiFG71qXSUkPGw2Dm73jqgvuPjc",
  "key14": "yfB8j62EtudNvaHCVKYmNBn3AvwTpBU1ChJkfRGq5zQ6uVTqjzUntpnSYXUZnK3M7iNMokLh9jSLEUWQ6wJKzbr",
  "key15": "4Hafbq8semHhJLhzduAAYHfWCaLWasg5YEueMeCrDEMLvPbtik5Mjh7yTXySzbNh5ihWAFT7TLXdkucEEFSKoQqo",
  "key16": "56spKXVgTAvrZkmcWbMRm7HLeXsDuCrUv6DCZWbFq5957Vcf4pqdJtut3Aukvuha86M9xT5PqKvJDCSWZUh2Jwsn",
  "key17": "2BYWNSNjUSorttVk3oCN4jTbU1UoscFGJjrnLiarxGS4jfduzsYweoLg7bWFUZnAZ2RqSwXtp6wCkCqw4TnRyNHa",
  "key18": "4ofytBJVVWCvP4xok4EaRwChGRaR4gpT7b9wnTF32CtnZtYmkTU3SpR5GpwX71NBbKyEHoZZQCFr78tH86bgp3jH",
  "key19": "m2dkGfohgL6AouFyYkeAMgyz6hEWUnxBk3SEBT48r9vdH2kySDSeU7E7JJNQKB6bQLDgMHWLVK5BrCWgQJemHq5",
  "key20": "qxsATZCX9DAifzYbSuuyErdUVVW8T1EswJHc3MDb79p5iDxwtYA7LJdf3FDkCeFBw3AnwMj9miZew6Xbx9HwceX",
  "key21": "3hbByiKEnUnpqvB2WuUUpXgr73KmXb3xiz9sUYtVp2eBJ8pKZZHwmEZpTWFdgquhbxDfPAQSFAqK6ir7k4NAbneF",
  "key22": "45ixYpR3kwNprKkvT6djTwXEu4yXJvmKxB8gYUZbTjq3waAiNQPukU5NpzFrXrTRqYLtoCmYuPHGmnqUQpr1oA5x",
  "key23": "2vPNtqECSuWFw2fuT85AWDZD6pC6KVuzkvqxKDeM55LC7goDM3KPWQPz3serABe9UR53wNr7aRMPwJ7RARykDKXo",
  "key24": "3V5Kw7uN8Dbb9FfYLZeCud9dVcrjUtPy6P7hZPXwYxUJr42MtMJmUua7cUWhhTqdoyQ9v2XMpLugvfrNBtB6y1r7",
  "key25": "2UBA6425JqUdTDC18zGAoWXzfP6kpSNcfSsbdfUUsoVti5wPMBVSJ8agdpkwqvjwqveGMrMnz78JEkYTzjWho4ot",
  "key26": "3zXff6ZtWhkWMExXqNLg6shVfL5wkV6dwHQCnu1aNuqQAA8EabujfzWuRqsoWv97hyBTTUpLFCrNc9dqvwxvp1Xy",
  "key27": "264JReuPYt4Hz5DFeu4iiCWERQdZaHXrbvpxEasBRd2qQ7ZUqSvGFhogUh1dtrv4dAsGFSehL7EXs9YbqXzEwDbr",
  "key28": "NmXdr7Ef3fpJTaEBnuJT6ba14y3nZeqkhuMFymynKXhE5dMzS5AFEyjMhC7Qc7ncDSPeGqW28TJxGpxxzrWVf43",
  "key29": "74P6DCCAyvUUVfYa5mZa8MzGKeyAvdvDxgnZoQRTyUyTrbsiouaSRwcBnN26EfH92tAV4GtmqZiiZdoGzpeZkuZ",
  "key30": "wBtbJofqHjrZR1EMnSdD2tfkKdJzsDaqULeGmhUeaLXKQ2zSeB5PbsweCu6iGP3PpAGFbwFTPjW28Fx4WKcVtFu",
  "key31": "59LHYb76sUSQpuV3WuaA3ACscjK68rFCcnrnSXygxEhVHPhXsaV2biKocS7M8JbvQRy9xaW7Ux84oYJdbJToEHS9",
  "key32": "5QQGZS5RbnYcCiBcR7fxEWMgFNKvGQ1kXTiSYEUYkDmAX99BPEzG4LxncFvYyhhtmXigmKqQqh6bPiprZL1tRhzC",
  "key33": "2JtazjC3pMwuTc7SRtyxyAMtyNWfjJkSkeyfBbX1zTgHbuUr8jaBQNfjWmZoeLht5P3u5ZKWgfjivSquEjrAjdr3",
  "key34": "fqFaLP9nSjzvi6CdK1vU3Bj8kE1zB4V7xa2RLrPsR5tt7f2VtZCvgjtJaivZ6fDerMnzCvhxbmR4G9wqs2rVtet",
  "key35": "4Ara2rnACEVZJAEZAdgnrNvKojtyLRgomkYMBeqARTbQ57dRzygY8qX6XtKFPjQdXjBXiWVX1HGbM9UfU25w2VLs",
  "key36": "4eEoeUAZo8R3GJW4CuMLm2sHpgyfpD7CxK7NuNzpbUfsgnoNuxCVbmfiyuKR5pz7diQaxWLQKqjMGwc4Toa6g2En",
  "key37": "3LD21QvMB1XFrJ566cDWZob3vvsofe2RTVxKQAUt1ahmtcFfXCrwEuYXGsVq9b16VE5iWZ51iEm1gwPTgipPdfcG",
  "key38": "4NuiHjwMREfCE6uRWxza8nLtymt5rzTpYLEwttgL3sCU9hztUunZcwiKtUjS2sTouRyfrVnuagVnFDQSYha92ogx"
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
