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
    "3eHiBL6nx83KdkYyKGiWvUzhaEKLxjw3WAzTxTqwmpbnAioMXGVvMp9sFrWTJDvBnp2U1bVv8rrNcccdGTdmWawC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E5GmKw9zujCaRPKoozzpZr7F6wQVT1iFm2jN8x8RcpTmdwytWiK2LVBn8Zxqm7ABrJhCfiQRX82e4BByEm92TEB",
  "key1": "56Co5vkCEwLYkGy6AXpLdD5viKxesyNa44kHTYy1nFsfDX2bjDYKQM5JFddk7n1y3DM2v5jFEUMeCj6W3ochR1Aj",
  "key2": "46gBNFmicpCari89HYMB47qpbthQ9aWxyeBcP2taP7QT1KXQ5mf3MjCPC6VJHGzSLmQ9wFW4q36g4iyHRc4o12LW",
  "key3": "3NyJmvonquefKfTyx7piJCiePKpNbNRRPx9PjRXw4unv6ausN3jDEAZfssd2sHXNbs4LD5zQmRvxhnsrHJtf4QRR",
  "key4": "323eFPQmDftxsgrywH1sdBMGAbXAhyWJyYBMjaVwcwLrmQinqY22GVfZ2Nh13eCmKLw2xwNZquspFRDnhFnU384o",
  "key5": "27nrmF9DmenWvCC2rU9QuwKLnAr39PfYnknyVcEnhXcoQFHcj9bJAtXVxEaYXoVuGDqGv3eUdBaWJZt9zqNZjN9B",
  "key6": "2pvDbjRtjRQGggiiURQLpbjgh2NDBkjFYkkZ4bqdsZvdmt8eefZrHbGUcH7fmnjCCGoD5b2RUgFtPgpJraqhthXU",
  "key7": "46FXAT73MwXNpdLaihFEHnLu6Gca9k9RAHmzDU2RqcKV2Re2n6ZqsD1ugg9Lb2PcG5PMXBFQ498Qc8wvZDiG3aa5",
  "key8": "5T5m9AdeiwM2ATn2ZQQd9csCw5JJZ7D3f7kyLuV2Fsd19jNnohCP1KW6MePDry1rqsXBVaAFKyJM2Ge5UUHM2VaM",
  "key9": "3GqD1TfKWS9mmGihxQNtoiQHVY3Bveq3qeR68KCkJnVigUnj6ZVp1cAc5Ga6m8YoVNxYyvA3CMuvvC7mmsRoiUY8",
  "key10": "4qEJeDHWLQczh2Vizj2cnM5Dy9FcwA6Hyvi2oiQk1uUmgjwAckwb6nDh6hdNz3ZPo5ogpQ2FrURKpCBKLNtRDZeh",
  "key11": "3E6GAQ3mLMcLyCz6J7gtvVxFfQHyUyAx4doXLHZfoJ44xStqGdE7HYoZCxtKLYpCmtMW9PPCjPtvtuW1d8rRPon3",
  "key12": "5b18WtwZ7HgeShBoT7x5rCB7wz43PLNMEbDpgmtG9mrwRtp7KZ6P8uNUU1KE3ANEqUp55cmuUaqeqwkLq3bZXNQR",
  "key13": "3dx3RT9Dh6N3fQuc3W8toT6RnNFvHyj9CWvT9oPu9HxDcetiS4GNQu12GRKv7HsVbtvYgtdW7S68cwhYbuMUvuoZ",
  "key14": "Z9bDEBct9GhR3ZMF2gbSDUsuxbrwH5BEKiBYraqwxjfMa5gqBWzqLoWS5fLHJYBBSRjqeBEsC6jjSwE3SxCUJVf",
  "key15": "MsnpmS4nGaXjo4ErqoP7VBVgK2xp9SNfz8m8t84KfkC2BsTjge48Yp2EV9vjzDdg88f57mCXVEo57YUoN4fg4ad",
  "key16": "5zMzjwiH8m4AtDDr426QRpok4ppmXVjNTkQrBhXymCtxquBNkNq7UZmNHQYnxkkgXexXWb8Tr5zwVsteP2waZS5h",
  "key17": "Yg9ucvF8je3jmbPzP2zBCoauats5n4hd198s2U8vNMKof9zfXrwmXuYopDBLJZuFAyRvTEg2GvFkotANSZwyH7e",
  "key18": "3DvXHpfNCxCJ6rRMR1aH2gaN5Cycc9TLYvVnJp86yc1YBoQtGbAvbimVfEpBaQhxgYiQxAhrSsCxt2cNTu4hp38S",
  "key19": "34saKfWLWR7ssV7umRbJ19Kz9QWg9JSbc8QwgBnxfXPDsP33aYBwo7dLqLuwekKooP3MbzYraGaRRfVrfdBqdz4t",
  "key20": "3jFnHoqPYqMTVyXdLnPTu1jzBkfomL8fsiqPgNAQ6otxkXpMHBNZXSyMvoSpjmZqQmhEqf96gBqz49QZUfyqTFyd",
  "key21": "3z1mqXV2KihrGNe64R8chSxF9qJ3nHsdVFR3P7VgTFPSvwBQEm1kcNgC2UL3hByVJsY6TRZHdc6jLRvGsCLbzB2m",
  "key22": "2bZ4vRRx8YTsER45wdzsRv5ui3uykqzkxqXL1UdH49WRJfqQ4P3uSYUinKdq8Z5WfiwDScRUTNqCB5ohjLAAfGbY",
  "key23": "32NpVJmsYuwj8Z63XVS2kwShaVLLxcXyvmYLm53DZrtf9dUCkN9BDvNFYXL98c6gahv1KwprN5UapC1tFQSn7oc3",
  "key24": "5cEk1ZMRJXWVKx43X4TnCkcJWbu6qXqCjxFv7KTvmnhi6L535paP8qDFT28YiVBGyLamEf45vycPkWAHecZZMe4L",
  "key25": "5wAC9bL8eu8b2q2Mcbiv63e8aDEpK1fkqDE5BXHjqMGM1M1ji3oYS2tVTQ6koByrnsJukaUnK7QUeqyyuHA7G1wr",
  "key26": "1MsSLpTqm42Y8aTzakRcswiJ3EyDtN1y172fgdPWymbPSarUJoF2m7ySPpHckpuZZoJQtph97iKpWYo9hf7wBLi",
  "key27": "kbVak9CbMeiSVoD41YDSuZWtWuMUWsKPAJfHxuGun7QhXKwg7fHgMEJVkXqwhveVNkJKdxNpe4f96BeV3HvTxPV",
  "key28": "5TogCh9owTD7QCZdWVa46BWPfvHpFkTwBnA9v5EoutF6VkqfYzhiocNonkGKHbCGpACkSsXXuaGTiTqcT4tHx17K",
  "key29": "31yA5hqr9L2Arkbit2MJL4zWGutyRk1vmoUqTnNofhGPguY7NeWJJ8dTqdtD1QC9reYLjjkHaUUUgLPvWUPJibuG",
  "key30": "38PE9a6cQC9kyuYsWowpdKRBKEEPH2u95UR1YZrxMWxVkxC5BaHocWwQAxitKwpZYY2vjTKhKKUQiigM83gwFcjQ",
  "key31": "5S5qoGms9mhc6k3eymKBgPLyHpme7FDt8xoKQM87yCh8oGeWVMorYLte1ZZ7pVFWWmnMU8NgPdvdtGQut4REekT7",
  "key32": "4fshDikQDFpoTmm5aXhhhvEK6HhoG7ccAUEo8YKMKktt44fGYwc8M3jYToEkHewNWaAwv9DwCAFGegL9KCaoyJxa",
  "key33": "67QwEZLSg13rGHLKg7EMWUPPA4iA4zqp5D5T63f22fuoQP5CNVEZPGNqoCV5uSwLXpuBHvfHWtphni4LQaUWWZZP",
  "key34": "3tWYSagUpvbpeyrrj1zsFHoSGHjJGghiJJTeSs88ttDqexMnPVq8o8RTe5dpeYPST772g9yQZyqcq9orRw3L1cn6",
  "key35": "5Nz9ukJJoHR5WCtN9bxSRV1QFakYEKLcvAtQMEbcYNonUvpuEtNHYum2TBxVLdbDBpDcx9Q8D3YteskdVuzv7fK6",
  "key36": "3K3gyrunVBsE4ZKRZ3aDMpsGB29FdUthRc7oZ8VvyY6WznULjF686mhkDMTJCoTTm1rWz4oHEG5pGBFrDTjxMw3y",
  "key37": "5e7TugsohiU4mDGNi7FWLFWkUh4ZAm22RpeGdZh72jBzT7y4nnGhTHaVHmLsKxc7VwWEcoNiTXq2M7ZtRm3Y1aBw",
  "key38": "3eV7JhPB3PrNFB5S55bFF2QyThZkDW6PSxPDe6V6agjsgMBQL6FpGmQRwpZDrN1pusDyvBh6McsMXiuR5v3bNqew",
  "key39": "2xhEFzfa8EbyTbJpksAPJqGySDsbxigoi7ntMVi8hPJVfY12G73gfD8g6deLMJWY7mRLrq2tw1aXw9jv5i7o1EiT",
  "key40": "5K2EQgfNA1ZGnwrPrKNzv1GP8t95mcWW4LuJEKXZ8wvi1EhCMF63aBx51CsB22FNHQ2qUpt7u3srdvKsYB5YLES5",
  "key41": "4ypLxFoWpYQ4djYAi2wSYae7WDiQG1zs5ddJpWjwNqmVJaYjyh5g9z7AzFm8UkJszpgADTBzPLSUV57ckotU1ELA",
  "key42": "tLwZ29k4q9b4RcgpsYXe5ZuuWqAYd9ZPBVcbGnx141V2TSdWQcMgLD8e7VbtoNw1wJAV7tjHjRPoYzTkxeJhKd9",
  "key43": "Svw3SXYi77iXffAVn3SGnUjosvR5jVDnMaDkRDrqqBLAxSVeqfWAZydNBbogMo9RAZyWGVJmLuzjLAyFkVgoEHZ"
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
