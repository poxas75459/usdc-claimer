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
    "5ju4sNQwhfrQWuwGcqTKVQSZkrgD9spq1ZQoJaE5MdgSY3ScLC7X1cF3PSiDYhXSEFdwzyMhVn6X6S5X1dAN2wFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bx9KipMam1VQ7tbvMtc1ARCFhDERe13zPaf5wWiV5gHV2ZDk5GxEiFk9qfJK3KoSLNpK56AmNUpdAvbtEMKuL9Q",
  "key1": "Grojop7MAm2j5UC5YNQFfzogiNhetUbrkR31HVChVc3PGGfTZtSeSsDtaioFgsW8EfzwqfJsKLqLftexPHZwyN4",
  "key2": "5QKUJn6GX5oes8vfYRQu8rVxp1MZKNfwsti52fRse4Fw3bXTqvNzYvck54pvGFWwkxtNdSczdy3zZRf9u3sAXCsu",
  "key3": "2MEWjQevNzJNJpwvt5kNQ5tXZpb1FXvfvNiUnymnvyh8mZsrtsUM9jvpqVobyCBZZe6yoAXfPiGbKGywS5RztesU",
  "key4": "57DSniqbQPMnUA7tBf88vatYQjMrj1YSQeEEVvHwLMXTZHxhd6aSzNR9g3x87ZtdLwfCc4Xhdexug8Fzuxs5WHLC",
  "key5": "4SXVmcAdxvb1VxL7hWf6qYRzQfo4kYU3hkAqgjSUCcMjz6iyxtL6upECgjcTa6TXNhJS5VPAsCLmJQ8c1WBT2S8p",
  "key6": "2PLcznqFMB1MMf3qCgouJjieWgdC9JXGuEwd11b6vv3M5MabJibdE3LRavMzzNki81icze4dN4CmrEDP4wVTDRed",
  "key7": "aj8tZj4y145RBwKc6DRnqc94VTxQpUKP6f1oscGhtB9vLRBZyTZyJ4uWQUyWik7We9hiLq7CbDt4FrqZs4A5Bar",
  "key8": "26GSHWzpp1V9pnyrq49qyxoAAu44PbyGs1j611mpaNi84e9UEUUMRTdWackaTVcnUfAeXwyQ9TBV35Jy26Ydozt5",
  "key9": "2dcVspQNLhkyP8Q7RaUhsfN5sf2MGUwVhdcBEmeTrKAeZwWAXJzojHckPGrwaAAEQFp6npPMxPKpPPUEJeXnicr7",
  "key10": "3BoDySf98Zna9KQhKnJ9sDUmxn5kBhGTqASQcXTd6buV3eCHNGaB5CjPeF8ueHjDyfN5GoPosWDu8aK7yxrKyqVv",
  "key11": "5XdoHNX5CUeYmnQFn1rJrDHKWTfJLn6cJAVDmP7vvJTa5ymhHCCGuoV8XVKkSALj28CGSC9SkXoU8so1uwm4idrj",
  "key12": "5dg3SzdHJASipjsFhxfugNyywWeSsRuisRBCszn5rwXHbJ5gkr7F5ScKPixsmHaUcmvkWXVTfUSTsro2Fb1sgoqA",
  "key13": "5t7JhNhSaHZNtCRGJY9Aiz9gcWYuq3wy8e7zJVJiyMAUSy46uvxdPZ25G66if4zX63q9Y9agpwvQESzPo7Cmk7Mq",
  "key14": "4Dukb5C8x9EtAcPoX119iweVHurkFCuSdJLVLBwfodA6T6xEqU8bnciSWWLou5ec97b6uZAiEu3V6qSyQkUb3EbX",
  "key15": "2XTEYuwkz2nCoHAmjB4khrZbLtFUrdqcfJWwFwuY4wa9TWWffioVHqWYX8sL1XVLKVTQCoA73Apr8ChH7qur1FJL",
  "key16": "5qru1WxAyU5G31ZWdAwpjRSsg15a2eHZdhnrMJDhY4yozGnTFK2BFGHZLzx7eueRZAAR8KcxnqfLtLiUdWmuhTRx",
  "key17": "4rx43FZ8A5vY1PGsVQkMvMMVEzTmYucJjvzjwYXBAUyVJAhdHrCuJCh7Sbnm3C4uRGUtCXvSuK6Az1fNSbp38VNc",
  "key18": "5YTrbfyCrHkszkktk5MSW2mZD6KC1ecYbXkAZPvmVbsTgs52brZduJq43TuKNuXpLrkbKG6YT7n7eRFy6tMkWMst",
  "key19": "27cAWCUtfUePyy1sSpS5fHCyC4d6myXTb7R2ZCg5WvTa8b7TguRWvhrhAfcTVw6D6WwgVNCZG9iV1GmDrv1tr2uw",
  "key20": "43cgqjKen1MTfBQvaUCFySn2iotUtjhcvpy3D3Hmhcu7TcAYENXtTqXXjoCouN8Z4pbDB29a4wa9k86Qrs3tbdAH",
  "key21": "e6NYTrMDiJoD3bcJZqSS2HSyetWWmNuP6pr8d3PAEdxozd85nJmKJf2ej6b2RaqjfCJoSqtzWXpMFZ5jgHc47bR",
  "key22": "5p9DWQKwq7cw9jLNnK8hWJnhk8ji6CynTZHhQxy2XAwarBfgbeY67ZuESLJhLRhCtPKsEzihBN8P6NtgxB5oY5wG",
  "key23": "55BWF8WxiU8bQ6Xk9kr9oJZMNsrwKVJzV5tchGRHQQL76B6dB19rFcSuthYuPkZETfVE2ZhK1czFRUTXHqjmgaii",
  "key24": "2RQD3HPZfHhdyD68CDkXivik8Cag2SZ4QnMQPv7r39y53Gcqu5jrLghwzvrDfZmrxPUUJUCdrVwkCKAqyNzuJM17",
  "key25": "1q3P5ReSF2wWgeN7KmGhDwuYHEBfMyZCsfbchKWDe4PA5yBtZ2LdsJvCnptpZkZk7jHWw5EfCmEqZ34wYSLXLu4",
  "key26": "3DcXNCuSA4t5pnYJRi2hA4Vohf6LVBvSbzEfaFfWjjsSR75uecnYu5a1NacRTWw7L2JWze8rdc17Z65grXjTwcSo",
  "key27": "ZnQhpTcXBBRZa8ZZD3aWsfJ6ecdTMW1yY1fmMkY5tPUqDfkNcygRiqjhFL83WyvNmoojWq4U7iJbt1etn2wnseY",
  "key28": "4LaHfsSHudVgNdcwW5XivbzPpvtv4Ns5AnZiMyG2pXKvXjvWJZGqWdsiGiwZTaqbNaXy9D6LGDLwjG5MHHdFW4cK",
  "key29": "5LedpmF5xRWCp92MqrqycjFoRfpAJRV6hMVKfobAqBoWdhyXirB5g1Wad5vqYGekAUAJbPQ42Nu2v6idANnhy7Ly",
  "key30": "5SFQtC6FBs4aPHyTMYURWvREWdfiWw4Z5mDqHBC495LsoePJA5hhvB8dSpy9DCpGkgURfDaQ9bUBYWstgXopGaG7",
  "key31": "3AcM7XV2NKgGYFtEx7ND7trMeEbEuuAFt61pmc4Hfmuqi5bRjfDZ8FmVGgNWBvExWsvDWGEwWbWuk4QKhAq8bq8V",
  "key32": "3VZugdDMTZ9BL8HDRnj85Can8LxpLGdYoyddCbfY2SkYh9zgScKreYt7pkjmk6Ydg6zYJf4zBHAjouyHM8V1C5rH",
  "key33": "4H85AoTcvjZkYbNb2PLak9WTV3tte2dHVGfg2ftdrSSsdPvKGkKQa4XN3vv3jmWrkDrJvzibK22wpahzZ5THfpbq",
  "key34": "4JAJb7xF8PLUVvJmLdxQsjHWxYQ8sC7uAMpLT7xmjNNELynKLqw63ZLbx6tfgK8uFTh6FB8md43j7xMiaB7pcJhW",
  "key35": "4uyG9bBmEmtUXwvQm2ji5wEqFry8VYpYzRYQc4Bi71wbUhz9xHqnGcE5YNF8tcQz7NLgpRDPbxNNXhUcCZnfyWug",
  "key36": "AiXnTC23ELoxfbz1a6a2Tw5a3yedLnBeskuCf6JQjoaZAs5z4n4w2DQZozrd1tKXpASFakordNdjJx8WUgEyVgY",
  "key37": "5RYmv4HQiMCnM774JgEZwt3rmfBZxz4swrNrwXanuAgehiNAYFk4tvkekSoXqticyb6B2CHygSJ4286wT2tyRJZj",
  "key38": "4dahEkjXZpL4BqJGpTmrNDjBrzdy57xr1RkHvrwW9J9h9uF975mQRprsXURb5EXv7eHZxAzPHKm94H2wTKUaVaP7",
  "key39": "53a4EKGMwNpNfK8tSp1F7AwWmVX1EgEsno3ZDi25Z1PbELCnZ9s2AiEaFvhQQq4oaxcsvcqVS68P1HJMf2FcPYNH",
  "key40": "3hRKPc2UQRhjWNY6s4W6Pz9DtkiCeXx4FT7CCmcpfCYq1GXuC6QdZp9qzhxeWUaShZjmHT6Qu5x6dTFK7fH4yXq",
  "key41": "4MKENCNMWsdBHzPRnhcF2XFTRM7X9NLd8TMs7g6HkhA9RWLpV4jTDhmCc8jceyCBrZvA6zCbV9CykDtWraAMRYsm",
  "key42": "4oy2TqypdD5PG6wXBnx6Z7qbqK4eiatdgopyvPqsMznxygSHW2aFPdjRxG8yorfJ4sHXVmzZR6f19PE1nBEVeoB7",
  "key43": "4Bfw5LtRqNNVebsqcCVzXg4AdvK8vUMFGHS1TLyt6fVNQuMwVdj3bvA8T6rZbUNSpsEmNkkiodyE9wMVVDszDLkr",
  "key44": "2x72NHyAdH4XwDHh8WmU6Nd67KunNGgFUXQSHbtEdw3kEc3iHXs7cCNygn8pMjLz5YzHkHAdXCUuR8GMpxQeQG9f",
  "key45": "2TSXqyxKyzimKyjJHVgzfyTZazHSfnJzVRDxB9rw52AuMoLBgfPwRgu7G4syw8TGNnjmfzs4z144DYJsfPDiWN4s",
  "key46": "QuS1Fe1SFaicNz2FxMgWaLXm6spmrD4DEfr8VpK6Gu8UxePUEBzcfmkm2zamC2yViXMofCQzbz9iponjy7P3uZq",
  "key47": "27e3E4PR9J9D6rLMRKZNKK7DgXinD16ZRJEg2gZAKk88wRLUXuFmyexUhWKCVCiZSgzRNnDSidfsmFmqh9P2WHwy",
  "key48": "48NqaiMYcrzZyJwq6mYAL3yskzv5nLN4T4DZcrgELxQAcMk7aMcVbJDEde4f33VDJoerueqmkPWoiRbn3hkxfFpK"
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
