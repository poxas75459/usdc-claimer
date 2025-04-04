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
    "3326Ck3GnasWWvBLpHJkzcE8qDiYVeabyZHJ52Xsafii2mJdaeBotaHuWW8aTc3PctRv3kGj2En9AuQSQRfgPREt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sAV4zakcQFzdVdjM2NmM9Wv5eXhP78qFc157Xnb7iqhQHTvBojzzgwBJphSFLUWH5kzwi6LmQvsUbJFUZs2TjJp",
  "key1": "3WB7KCeuDHhJjHupJEYXachr7s3U9y5B6DjmgsHFuPEpNHtrbgLWi2TyMSKEZXhHmKopwhS1iQsyjJXU3pruqvPj",
  "key2": "34VQizXqjkfP4sD1eaNWUTovZ5QSF87r3DnzAxR5Z1mfp7dVm1acHm9qfNvXZ4MDfyWG9dH3ke4uzn5baHMcisG4",
  "key3": "3XQfdCkZMa1ErUnwkNvjgXQA5ZMvF9j2JRqnGFDr4mSKrn83p5kQ3Vyj45apmVaw8tWMiY3c6KZchRLb2n1oT9Mp",
  "key4": "Bqj1UBANpzVyZZcbjQWbhDd5GZgXAbJbqPysHKii76tryVGcVAfjQ18QAhVyV2ZAJv1fc1YkE9KYnTPwJKXygUN",
  "key5": "3k1oTyFaTWho8LVAcuxspBmTgezvq53MxkbmfJX1Yc1wDaoRbuQEvajpPyPtST1EjFFE4uD76TEe89KV6zVYFmB9",
  "key6": "4BcPik6GUWsgi3MyGWimrLRcdZ8rQfRXaRvMM4BMB7qLtrjzsbBZscNDv5wccpHK4RqUaSSGFaSL5CRWKogBsBT",
  "key7": "4KmWH19KV4edN9nAER43U7vrtfRHXzvNDBjbHuTgfEmrkeUuegPbFf9R5tsfKeWh3e6VR5wpUD8Kdnc3XUrtR4FW",
  "key8": "4z6TmDd4Hj2wqHox44sifYWshw7M8XCji4pNctoYSnu47nKfeFUFkUf4TE8DoaPVvAoPCDYZ3eVRzkMky52jL3P3",
  "key9": "43AejdJdXBGnUdHgdPGmQgnFCeasyZeWwHFaCdJh4GDoQ8JmENvm4Ue8ALY9f2HsgvTmfWS8MyoDRZMRmoXZyDDQ",
  "key10": "4roBiyB9WvWuGyUq4HLB1MPNGHoGCMMND6deEd5RLoz6AAgjrNYG7RNwuCK9iJPgVTqMuKBsb5ct4PTFKAciPJ1X",
  "key11": "rgLs9rXp1m7cD3DNrhjnjGZedTR8t3aM5edHkRoTgJSmuWna5WcckPWgQQhTdonwDaAnkRRFtDq33x1EEhheaUv",
  "key12": "44nDJQ3vaKD7zSTXKDawffevG6cVGShSz4C2SrNgfYfwp7d8X1i9nujkc4RgafaSUe5dXfDdCW4xvKMfqV8duPAx",
  "key13": "35cprSTWPafuWSYT8ZjoF5pcvGvGEC1dej7qV8pMmG9eikjaKcRxxwQFR3HGW2H9VZ5zcekWtcM3uZ1vRCsZPB8Y",
  "key14": "2FrCZbnybfeTBhcC37U9hGcYfhVk2SB8BrdsYU5En4wqippDXojD4Sf79saunoi9doN7jRcNW6pDDMxiDMVbPnSE",
  "key15": "2znC5Fq8gTFPHmFMpyMa3Diqo5HafKiHDYyqFL9xE98hGvxRAjoJBdNY28AWUvx1zBWZRstg94rbadi7bTXA3cEY",
  "key16": "2QVCc2QNj6wy9aoJkWR6bVfxxAgaagunR4mw4JzV2A5KpegSH4VQp23cc8Aj72G3iKd2cwg9p2E79fZv6jgEnXCH",
  "key17": "HiB7ssV9oLgcX6G8tzvKQYcrv6a16UUGywF6bhCrwCSbA9HkLwKa5qFesn3uUDJA6Uvyb5hySXZzmAoSocVzdcm",
  "key18": "sGPj2DX4VagUQwpYM8KAtJUKK9R3K9zgEKykUuz3BVmMZ9eqcuKdgiTMyT1NBxE1pvz74MHC5yeGCMrpi4ebpFz",
  "key19": "QwS12oE8sPtXs5Ni1XCbKSkKrwKiYYUVZf8Z7c21Y8xPQsB6SznbBnj2zfLnhFULK9THrqkfSa8Qu1kXLRVmM5u",
  "key20": "5A2g4buPbeHLqsCQqy5KFKrHuaSMf8EsVneFsAkzzuJJv1kLGku1o5TxTmjmRpCeG4csthUW6UdwmvQaJG4chxTo",
  "key21": "5dmeF7ma5WEVFX7tTahrntar52QRge6g6They1tqqxDoFRUAqQSLsGK686iM5UcSFu9hqU7wAEeQDrJhbS7LhJWF",
  "key22": "5qhs1Vq3YMcSW4ea5o5PCpiHB2j8XCiZ8Mrvq9ix4DLjfknCWtsbpWyGEVdF3ioXn2owyCvALoTs7ERRAdbrWrHE",
  "key23": "4odGFRR9phtGYBEAyUwKM1SzHNnTVzEviUPP4NZt7km1BSEbFc9RNHynWMEpDfux3f3VnwCmm6ELcdvfVf5SCBgt",
  "key24": "V6EpP8UPonNcu7Sf4vRRdETeU8eHRdA9vb3kX4eVvDXvU4sPNKU5vrBkRx4kCwVvFicrgcGmzez9LsCdGoNU3bp",
  "key25": "2e1AoheKvTpYPYVRk6eQSLwVcsoeACSgunSwezmkJRC8iFMZEosPHCUY5YzE5HXtpbfcpNYvfdRcEPawdGa8Vt8a",
  "key26": "HTywdgYThYquLPqJc6KRK5wU5pBnybXxeWxvfcBJv3uGca1pqMfMobGBTiW7RP5R9v3Z9uXv2fDhFfPGDNQJcn7",
  "key27": "pxtyUsqVTXL8xgXstfEZ2vrEvutmwGHnqMbJf2VMCqC19cT4rwkmUwF6ztUG9oMTssJUBhaSUaHoCcwgMJ526rf",
  "key28": "QWoCdpRjY4tXF9b5Ni946ETK4L9ps5YbVrxbojEJyxNfUi433RzT9L9WkQqcktFFjWd91NQLg66nxPhmwuavLMH",
  "key29": "368pi3qndgbFUJNi9iRLMcCoHfEUC5SRvqYgH427dJsC9vSGKZKyHTb9T9367hrK81qzHgyP9a8b5XUJFKMgU2fc",
  "key30": "Rsjk7pxPS6tos9AAfTPm8p4wJf3ACJ8J9r1893rUCqxvNFjvbdjZNXDUnnxHF9ZCeDtAfjnZVhDGvXro82SsLAe",
  "key31": "fR2qHTxYFBCRaPPFcD7WM1qsZ2e8QGFSKeNYF7KHx2R37xWtpE6996bzupiv6tyci5fjhCT4WVfkVEn863yWn54",
  "key32": "5fy6gsWjkdKTjLVkJUyCvpArnpQEEYS1E5xxCBaWFn28tV5rDgzR5mp7C1LAacQCH6MFks1Dg7opg2RpbTBbrWtg",
  "key33": "2bSGKCix2d4CXMcEnhuH6YJGA8LRg4vEvFjDGEka7cqHRG34pJ9TmCokvyUTKpjLvQbrhz89gbGLj9uFFE5qvmGX",
  "key34": "3LgxpXJo8jVMjqwnehKSv1UHPf6WdrQTJW8gKhbhXmSqbzKGCSaPhoDaTjr2peayQJZBES1q5zqb33dpBwzXCTiM",
  "key35": "2ChfBNk81UvTX6y6dNjDV4zHR5FWCd4MZmFo9aWoBAJkPH3iQHg4aLLa1ojWX5VJ4Q7AGcuw6iXwNdWF2Bs9yY8h",
  "key36": "4BkH3wfcSLKKx1XdRuixxErbasyg1Leq1zjkNjSeD2tSQT9m3af5xnCPXYoBk6eShFibkRZD2FLuTVTYQbFnNbMF",
  "key37": "3Hawr8AhVJUBYp6PuhykFdxFwtgJY6u8cT3CAavTWfaiKCX4jKSt9wd6xSLyCp2vo6MkMx1Z7sjXdrHopXmXWabj",
  "key38": "5cyxAoV36jvqfiYktAQW79obZgbKKkMhTM1cmNF8aCJr4YRfTz1U4tCqVbJANtV3FnrEzc2Gq19XFZENib2ixzH6",
  "key39": "34sCw2H5f2wkcMjk1GfzM2FqmPJuuyEnRsRFkCZXb5X5T6eQ7sdVY794cMwgpZkcKzjTre91x6UJrXU5Jd5ahvGX",
  "key40": "c1g223DXfVfmYL6q7X7EwNEpLrsaJRS7YKsFMWsyWEZFZQeZTtG5NJC1GKCAuhewxLfZHth2ML6qXEY1UjkqBpu",
  "key41": "rSygUfdz6YzZq6vMZVWx4ASiTq9wmgCWta1S4CfMPpZjLKwAFCWqegW2UU57YvC6pqzeMtRymhtribLjkPqHbNd",
  "key42": "5aCmp8twQxfXRdRqaMTifqUzRJ2eqQHGCKpzgnHbZZJfLUPxB39gVTS1qaDXziQ8xNDgXeLjd2sEjFRqwLNvxGn4",
  "key43": "3uzDMEXtVh5ZYNwrge6qkpps9GrH8LepyQB3abT3pwZtumkzrSZSMo54qGyK4oF1qP8JrxHkWPTjZbrDbNcWRi23",
  "key44": "4ZuvFzhVtAUgadhY5R4Q2Th2qM8r493zq2diL2xhhKYMTMoaYeuU1rPLVNNgQSSLcxBRSzroehFXPaHZygsyNuGY",
  "key45": "3VbWox9F8VATPQbHuD7k9886xERN42JUuXH1FNwCDfXvhRn5B21nhicawo3ZGFgJwtyj6eeXqqJT38KWEdMDDW1J",
  "key46": "2sZpoyf2FP1UAWQngLcW5wr1FLCWfQbfkMibfmzpaTu4nLtMZykxFahBVvB64VLvrWmP8qB2HP8MoqcNz4Wj31cK",
  "key47": "2PguZXSNWawvjvm4Z4cCMXxg3zYdrXttxyChrmtau9Rjf4xz6nMWFdNb146d4fG4WZKYHNRQPNznTXq3UnBRtuTp"
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
