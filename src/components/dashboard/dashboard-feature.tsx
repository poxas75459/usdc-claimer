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
    "VozLiDXawD3JwY4kqe1MkLdjVCCicEc7i2DPJLVEDYaRCQfNY4uiF3ZGt1tEAc6NjUuaqPJPKtpHDVjNHsEpBe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kXQzZM5MTfqdzBC3xKhtFw8jGGxiZmKFhiJsYBTemvEwbvWU6bqj9ekpqokn7iq5XPTxmVEpzuXxmdtkPDCgdfQ",
  "key1": "6i5km6VLyEneDY2eXQP2qVmhQzwvp9zbPWkubSZQhfTE9rMdGDzf83RKywuRyKeMzcZKvfgXAaPV4amor5Nezkk",
  "key2": "PGR7HgorkfiHEUQkQ6nMnkPwgNR6psmNNu38BgMzRdfgV539JQeinQrBjGNZAz4iuLjZVv44Rwfb6N9cAeDdPRz",
  "key3": "634sZa9f8Ub4n9WtBKJiXb5GLZMo6Syv3iaEdWP5NtkupkQei6BNH6t4e9Eih7r5xr6HdP9pDCh2hvSY524HA4fM",
  "key4": "4GRwrHDbd9HPajC5Bw1S3ppgi532UnC1FGh7rQYeiXstmewXyi5YgCQWBLKrb8xkU1JWXHqTH6iCZkiF1QVnANsy",
  "key5": "3nCFdhQKdwPzysEgqACRdGfaYBBSuGDYijT25iSPanrwz8RHixSQ9K6cNehp3gedtZUZ8Qt24rP6RvB5Qi8qNXiR",
  "key6": "DtirDAsPEPfWDGu1ovAXqfsBG4NAEcMZDWmuW2fQpFCRuh5AAgsJLCVVVQg96wsvVm9XEvGUTnYuJJNAjwyL3AF",
  "key7": "5EbgNCAzLHBq4dGa17Fufa2RPQ9BdTEA4p7jChhyBgRvXNd7cN71D98FMbAmNb2UYYGRyM22FV4XnxnfVHoCZWET",
  "key8": "U9MErQ48FSz9KcFYP6xNhf6NXePSta5bfWMXH68se3BVcPGfRWTdtSY55Er7fGDFoqyqt4Ee6dWQzCwyoUePAXe",
  "key9": "Wo6X12oqbssz17AQHqELC9GG1FYJsxTbs2MxnjudVRYXdoe9pYcQvHcTjM6SiggVYar1U13sa2rTcRhFUFu9Xxk",
  "key10": "4J6nKT3kC6GnXZ8VwKyzamM3oKLMtVDRShQjeeM3YUnNXVQ5BwxbFGhu9ro1M3y4VY7uQwVtbB3C6R17XQL4osfh",
  "key11": "5kq9MMAMFiiLVZBorH7nNMNXNgNbXuCf4q4sECiGtxXYqdQn3GcQqBQwXWSWjLHC8undCouFe53cjKVLfqndqbao",
  "key12": "28qxgCsGdXSzE1NyFivhVpFg3ZXwfimisH6r5K25MsPjwxJaNz9wau1UmfRPDpMpUH8Gff8GE6wdQzahBkz1iSXv",
  "key13": "2jdaD7B2FMJzUQv371dWY2S4BSezAcuEpw3QEBPdUNKS88Xep3AL6HeV1R8o5JWqoycsmMjy5ukA1ZT1N1NuyKBT",
  "key14": "5sy6ZGRdGhB27hMheixD6TfpLTpLh7VcRhrhUcT33G6dUpCMoD7Mfbn3juwPb2NTkZvtJ2FHVjSd8KxVGkxSJ616",
  "key15": "ngjy1wP5FLgqzY2tvbsxdp1UvedP2FGNtxtEdz7UzXv2waSKhbuxFFvEmUbg2ec7aUgwxmww1hoFv65BFcoWzS2",
  "key16": "M82rboYFXU5Ra5Sv9KAktNQhn7p2MbigeVww1jdUwNfJfd68NSfnCXC4sHUkNxoRfGyBaCimGJHmyaouZbDG1qk",
  "key17": "5zY87jxqnqaBcW3GYUjoPgSFZPdRBhCjgik12Y4jcF544tSnbDGhxxWfWKUjZ8WpsbrdmtCAEFUKNXjRB5QEcrxH",
  "key18": "5DsNrx4tK6kvyrmABmuF7gQt4GC2A4PRA6Hgd1dG98AtYgzWZcKfCojGztzVQmvg1H3LAH7rdzciPQixpA7oCxBH",
  "key19": "24LV4KQx2f6goaLwoK9a7GqrDfaT9igysSWinnXm3Kmbpk6zdRs6zhEfPy32hCiY8fUFhPVvUj2eu6PkTxmuLf2h",
  "key20": "2PLp7hR9ivoQc4Ki8eth6H5keca51PKMEy4cvcSRiXcdTKpXsTmFLnZPeB7oL6XemKDqWCHnAAN4z9J6kCBCgdpY",
  "key21": "3UVcATLtyp5bwpmmiFCRUyFZkQw3xZjFFGmkHdJpCaRVQkwzMSX8spifPnk4vP7RpxBqbAMca2t84wmfyU37KAhD",
  "key22": "5M8C5BoyNTUgv8qfb7s5EKXsu99XLh52AnEeUGZPBhVjH6JU6h2GV4DTi8wNeiaBY8ttsvG4K7im7NGRffiXVBUk",
  "key23": "4idEsiEVWhdtVuT25LhkfqcnXYb993FLSB5zBSu2vrbGubqUy8XH34t2WA1BEkq5EWeYgFsrJvVvXTwxeditTwfY",
  "key24": "41qXmwAVwFEQUWoYW54SzeHUdbTM44ro6tBmMy4gTkqMPHC6Xmgc7EPjR6jg2PwMudicguFmuHKeqoZHLXtnQSU9",
  "key25": "DtWtQFyC1m2BjgTeceWwcoKmmuNUdSmnuC7CvsfasRyCnaqn5uw5NAbU78FUZVZESHFqU8VVm9RZgU5kqAciQCJ",
  "key26": "66s2uQwyTBdKPaETqdTonsfWxr3tCr865R6LArrqCvkiBMYd1qDxFKV65p59ZxxqCBAxGktKNV1NwSQhazzwjQCj",
  "key27": "3UMMWZgcsRScpontHSyhGuTD7vZrTMpYy2NMTZ5766LchDdQcaBMHhwTwDkzr34Kj6gijmHGKJz47Zqnf3zC4oH5",
  "key28": "4akNZKgXotXuzx8arCKzbicEHcoUCUhUb1BwSqxqRBeNjyc7ziCaLwV2qkmtsB2Q8ZaN6pk61ZoeP9xH2Jh1Fw9e",
  "key29": "xe5tZCRm8Q2GXDWmEF72ADgsL22YjzCvStaeuu42zvPFV9sbH5WLddVc4f2HuUYcR5MV3bUm2k71y1cHwpEog8v",
  "key30": "4dqvGZ8SiYsdeiY7kUApa2AigEudGpzDaJHtkCUk6zTNNtUXnqY73JGJuBsTGcUAqUKCmB2m1gB61NyxMkU9wDCh",
  "key31": "ZWktsNg1e9uM1xLyA79MkHgHdLSQAY5rYfCmRVJfNSAKYiX7pHomLs39VnEgLvfS5q82moErBtqDoGG4sPyoF6S",
  "key32": "5sbJWbeazG5edUKA8e4hku2yDyFov726xpFxG95aByLY5j2boDx4QhXGCKRz6QVLovqKTkBPhiziqaJK22vEUdmM",
  "key33": "4aW3QfJGJY4bhfGpS77rLeMPith1sU4gfmV7bGibVFvCqLvcwYseWEkwGQrVE96Rc7fxyLJYinNP2Fgg2kUjQjU6",
  "key34": "3eH1GiQSrnFgLPws5vdhm39DXQZQd1qHrCYwyMFksDr6hvfvuHKbrPeBqFdFw3ozDHaKmiW5pqLNGdDhY6wMMKN2",
  "key35": "2XohrjcGkqENFRQvtt5ufSjAJ8dgdSvG1mBTxS7E32v5RzworeGRDFdrenfdifgwfmep41JzYhUcWdja4iGC5yhW",
  "key36": "5eJR1rWcfhDJd9WRrNbyHCd9zuAUkx5jixC6h4gLDDgbfj8FgyGQRRvJaUt2pRNWLhbGS5MbEsuKb6p4jAoVw2kR",
  "key37": "3dqhLPSS3DWnyBiWz1pkMcKJqx3pyhp2LZZbV3B2LCA9QZ5B3yCcjaqeWYUvMzmMDrzt67ZLe3PTLHmt8yVEoiQn",
  "key38": "2xzYxg15gep4qJD7jgCCiMAKaM2YzMXWbvz4pNGeYxvmvZmmD81QEyD6o3KEaH9YgL4dNcSZBRY37jZTEkTEg1dv",
  "key39": "58ioN7kfyM1UQjKJgLtWzMcEeLYopfVEkJAYJUZMaPHntRfCbb8Nruh62kvsmFoxMXdWerYJ6bg2gx6m7K9na5he",
  "key40": "4ex1n4M6y69cwKrtixJthL8BDgQzDk2SYbiS1cnHZw9zUuu2MP2mgYmz9wHXr1YYTCsp4GaH1YwUE4YVb7ysd2dF",
  "key41": "455reQ2Gjp85WGWUYBYLijRn3wwRaZaTCDThF9wJsodac2swRQREr7hihR1Nd3VgYZFsnoLQ1ubQ8NC2UoSKP8G4",
  "key42": "2SkQomXCJuruozkxsbHHkTtGV9aa8gScLa5DZh66HuxbQwtrKvVQ9DFZPR6M8AmgmgVuYWWWHBFT1PqrTGqV5M8E",
  "key43": "4MLBLXLk7AHqJRXStcW3EGnfyRAP78jdRgUodVNkCdc6PygVHzh8wLBExo3qU9cL1sdSu692Y3nLfqqzqyWD6Jyg",
  "key44": "qNEWWpvL8CbyzMGfPwvVjDaBMGFfBLn8GVDoJN867bx78B1UwFtRQdaqrQ9QnnWVv348aw5wmZ551fKBiJyLSMD",
  "key45": "BnZA7CaQPLSee5Y7g1SUQVaMcEzbj9VPvazRiwJULDZsR2pd7Wf7cUJ9zTaSqjRz71VY8khYq1f9dwDMQtyGSst",
  "key46": "5CQYEaWbknEGgMQU8mBsLynYW8gaVcuUVAVazYTc8REpBAZdfCTFKmJboAjMCNsmkMTgpuNdwE2Ve26gLEn2UDsz",
  "key47": "5GAyQ1NnAngucKbdJc7kTorrbdVPXWqyEz3RH9ohkrNdbiqatGecRB4gJok7JEeVH86fXgtR2MXYajUfZbJTZHTC",
  "key48": "4GWp5uL2ET4wbeGxccsAFEEqcMW9PaXEoAEqEW9Xev8H1T2JufMMAY4rimnhAhC9ppdgDP9W63xjPKJL3EzX5KcE"
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
