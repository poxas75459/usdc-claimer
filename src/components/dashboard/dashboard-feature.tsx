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
    "65dxScDBzHpqjvMHseJf1uoNfBmgTGn77CC8UjFswB53w7896V6uUJy5BiMYYLtDGkDiztBmddAPaitvHjVPcreN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xydx3QHksktDP5TTYqKUhDsu6YW7hGKSsukDTeRV6sG61m647xhC7WYk8Sy9oB5D28iKYu1s5eMxGPqXKX7wnRr",
  "key1": "5s9p1cxPYWZ3QniDAa3NpBcz55GYGeANSYmM9BhdZKqmdQfnxm1u6yEDpLgaF739twRcmnooExt8iD3TjeQWcwEu",
  "key2": "4msESx8eJPQuqyvSmrXZMqdzXyPBfvknWEbGXbSSeFs3bZW3LsaonuCDgaphCLmBRcNVMRteoCD62PuduUbMaYCN",
  "key3": "Ktu8a3qhe8CX2vs66fk7asg5dG8WUY1xsbsJS2MLTDfPwoVxNBDeepdjUEYhAGQtY5KqtEWVxvuLqTmTgtBLf58",
  "key4": "1MNywhetNFrv1Xdj6ixi3JYwckkn49qAXjSZanunVD68tFGMudv4AytFddexUs1BSazBZwEkEt3UfsYMjr5MjUo",
  "key5": "2TzjAssxqDDmyQrTSPN2XQFDnksbpBnNNs45NJ167aKWYjcf7rgjGRpmPeDztsAHVHWZuSKNfgJ9xYJ7yGdn6wLR",
  "key6": "rfyHr3EcvtV8ZPuASA7WanMcQ5zJ6NGwTuem3suuFcvoXqFUA7fJ1f5aGPcvyJGAnksyaNzgL6rGFMz32sZeW6S",
  "key7": "4nuGwi3awH3131Pa6Psjyn1ZHxLL5uuuj8quy9A5LGswL2HG73JrdyJ2PgMMyegPxbWeksvgEwXvHbCHm32vvVLY",
  "key8": "4MNN1MzKfZdgdfU3jvrzGYWDeaZyxWdxGGusHkS9YH432vmoirjJQSmPzMoKNqxcvhKu8e4ANHZdfCH4RAEEVQ64",
  "key9": "4F6gr19vGKQKKKDudQcBR4Civg7dKQNjfcGCdtVModtcrS4YGaWcUGJwr2q4j8vazmBZrdnq8qtCrmBDzvS8sQU",
  "key10": "3dsvATQy5CWVGmAvCrUdiNr7eCdJJGRzNkWSAWU2ZB5eobmaAAY2PqMz5VToocyqkGm3A9uedVqJoeKiNvsaLotB",
  "key11": "2FaGzn2wvSUiPWo1Zht8egJj1X9VKwUgagFjvSoq6rEtoEzuqiXPCHhHFEfUSnrR7tmeSpijX3PJGzpVdZbkWWH8",
  "key12": "32uehdnsLyn3mjto9Bs3P7vqSh7Nh54WnDaDXgYkLRP9pcBrhqWzEWZMqWPAN2EkG3nYXFsCN4AYixdaHCtoSre4",
  "key13": "4F3UUtDFU5SmcxU8MNrfUmdrNHomvEfqk16ZXm8diXt3NBFyaRX3jNdwgyF2NGdHQxJhQKAfvjp1Vo83wUoyXqoo",
  "key14": "JSWDbLoY4fuhYsux6FjD5Z8P9g7bRauTYTqMiJr2vSp6uZQX4bRBW8MfTN4tZvyhzEeZvNUMKAdBzscRGHjGGhv",
  "key15": "4qnp36LnuapyieinE3YEkF47avCFFp1a33mgBVzKDD5pB5tFBAnn6yow9a5KxM6Y4dPqHc2poyKDGTgr7akCvfvh",
  "key16": "uS4zeBV8GuvTk4m6PF1C3N1LgJ1G4SdhJzv54MEE9FEMF4GogU8ga6Uhdp4Ffhgzd5AfUtzQ65g3GqxZ9a6GA1K",
  "key17": "1XYnYtpry1VVaT9mNFr54e8EehL82ZxUbpUp1X8pGkJR8XvrRsazq54JfS6Bhsy51dVLrMRmqmjhBVgJ9MJzfT1",
  "key18": "38sG67ct7LCCQcvNRxu9WxwKnTrCFF992U6N6rEj5vdAzXvK2dPyyma421iy5RUvvJXqcMeW2d6oufMSkPx2SMV3",
  "key19": "64fEDRVXq5ZnT9pDryio743gfGHtdzdRk2WwrYg4A71kmY34jcKGvv6QY8sPM4mzPExMgEG2H6iuvH2dEeZTPC6N",
  "key20": "5XJHwoXHcAvuwFqFKED6TbW1rMvoKGFPQiwWgYL1i7Q1n6Rv9FCR9PqcpDQc7tDLmM32Tzgufn4Cjxr48HENjw9p",
  "key21": "47CYkDUviKLiGq825s1Gsqiysf2bKsxFh7nEBWMCm2wY2RhP94g335vya1i5oxB7iKWBCoko1CivFQwj1AYCAD1A",
  "key22": "5739a9uSvfDfhQFpPd5C6RmYmcdfALrEKQGQzRCh3Gwn5wtR6HopbzTQ18BBPmSZ6BkFXEVyvPNcXrnRjBTgGRoq",
  "key23": "MrpwsY4FEghkFexfHbiH5kyViXdYQyrjLWXFwpdu7vhxJUkNEVYDk4fdNcxKZWV7wC5b2DrfYusnt1oWJsf5Dbe",
  "key24": "3zKfzWbwnTzGB8JRLyFk2v2J6djiLa3cMpxcXdrpL1FWzwtWVH5PBGiJaAcLtjQuw9yDCiLCXQJi2bvixJCh1wNe",
  "key25": "3QnDbeuHZWPoxdBXhwpgJ7NVSUc7nMqbAhnJmw6nCGqkGbE3oXXFXpTq8e8H8DT7KCJocj7bFQjkmquT3VrS1qwU",
  "key26": "5zC9aTdMa4xvypSgqtjjb4vKFAf8ivCehG2cAWptLwboG7UHgah7Lsm8h6uUUHVWScComn1rMPJkNcEdkdKDZAuL",
  "key27": "HkKNkDAfEfdDKa1uuhCcXqj87uKkht4hgHhWaYNTrREAu58FXjDhe5TbFvhHCHDw6s78SbmLc9rppbq4yViksg8",
  "key28": "2Qw26de1AspknmThRkmnGM6hch1JVAPvW7UX5TrJsbG97tQEZpr83uKrrr9BQvpNWwk93RvSMAK46H7mYVLDHQnf",
  "key29": "GmiRR1KdttiY49R4S17f9hcEb4u6BA6SGGPAeGCb3uMYwHF78iqbSJmUELYgZ8Gv91ySAJGGGX2RQ5kwE1cSDBW",
  "key30": "2Br96CRh4aSoUqCJvcpGZPkYtTLgcAg88dsbrbQWiSrFgBehsNh4QbEu99P4Hp9ZVkFNS4sFNgakT43u6AHwX8zd",
  "key31": "5aBJ6fMTU5uEBJpGQEoPgp9GnsV64Z5ynYDyXL3LzDaPkNL2UBiV1VrxLKdKHJseQ4J5oLQeAsPNE8w7sem2tQLB",
  "key32": "1K27KNuejW73vLkh4JEmchGHgjBHRd9BHsj4kViTkxazKrtUGZBFM5Mx3hudTxtNRr6vbiRtC34EQBWCGPjYH4H",
  "key33": "brJvXcGe4E9BLHSBf1hnFvJjLoHL3TVAYPNTjHUTfduntB58hmKEK2cSzKrvf1AHKSwZBL4tw47ZD8i797Mjn2d",
  "key34": "3vb9y2Z4kRpK9mAYztue9ZzjDbaFf43TT2KdbUZNVVhfNGCfLr6PA6BLyJeSzLXxJDF18uNNNjcjBKPifcqXoeZN",
  "key35": "34SoFzas8Q1DakyPyGasivJdm6VHCxCJx3qSsWm99LnereYEK58xCxKhSHDT4Mwy7L7RsHxGmSAUi4mQ3AJq5789",
  "key36": "35UqDoWnbTzm9LUxDbTsNYy1dWWLSgnQyhTCb5mmYufUWBwVtBkPoSA4veTLfjwdVqzX4DhANwGVFuggnXusJAB3",
  "key37": "hqxbiryAGRwpikJCkUkd85H1gBLzCMLBS78pvRhSZRH5m8GkgPX5YJnq3HwRuLKzaKNnwyD3zp91cdJU8P557aq",
  "key38": "58L37Y1GT3JArwKnoT5BdkVEY98zGKoM5Lebw1vdrF22YkaqKDFciZDHAbwz1QgGyfQCGW2qxu73c44bpfVqN3bH",
  "key39": "2AS8QiP5rgUVXz466r5RWgi9fsenabqSdJ1vXZWvGDZWKh9wHFPMUpjd99YcGLDBXgs9GojZJ3vrJxM5wq5y3jgX",
  "key40": "5QP2WQtyimTSzbECATTLsvtqjhJEsrphBxNxYJy987S1NN8pKN4bRCY1S37QiW8cVj7vRPbUQwVqe8Rd8VLJ2v1L",
  "key41": "5ZzcyN3xuqqFVpoor8xxfwe8WeEmf7vZeGQhYn4gvD2kS5MR8rDXiDWPY4UwWT8eYWpRdmgngQiLgBQbGKiEwyCR",
  "key42": "4mAAeqVjKz59GzQbkLMrjpLnXbFoFUgpsWEYnHTmH2yNJJ5EW82Gz8L2rUWkz5vCgX2rQwuAdsRGMLzgHZKkA2Ro",
  "key43": "5h8Q6hXQ1c2gge4BCzPqEX4PLXe7a1d515odwpBxqtbMrQzLoamqDDYbC3VcLy7kWYpyL7ge6hnc3NxuFsxyRhvU",
  "key44": "3DiDVX47HjynGWTsfZnyFqmFbvd9iVhj8QSREoFvb8Ldp1huy46qSZcy5NbEKdnfwjevwJNUKjBaCibTgoFuuLiY"
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
