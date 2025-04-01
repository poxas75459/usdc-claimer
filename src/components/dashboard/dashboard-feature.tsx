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
    "3kGynyctFdHSAos92h6gsQfuVmzoT9e6KUK2bSwNnEweHDdRxStg1se5Go7bpC1w4csgeGPeH9EU1YoPvpVhFvwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jhqEA9HWxrGuaKP2WofJoUZan6UDETTL4z5saVPHgb1FE18bzFEd5bh2pV5eV92PF1hrHADgv9U1EPoXUdnvbLi",
  "key1": "4hxGqibDdjS1nFut9er6jjYLadqZXR93BJUxNgbqG4RpzzQBmCVPfytttJKLLirSzfGCyaBSRDXih9gfdXGjnNfE",
  "key2": "4zKBw2DK6Fj17v4D3GhzWYUkyTNZkmceyxjCC4a8CrEFeHhWwghAXZeyQ4EN1vk2oFCa5FzKMVxo9pqaGMWThzzc",
  "key3": "3VUjgZ61YnTu65vw1uDEmSo5GZvxoSgkzoLkbNkoJo2sSbT3MQppqFWCk1UGptXsBzAcuZ2ppTbX4ZsHmFYJZzhW",
  "key4": "2vuKfKYbRybr1e2techLAqCpmkMys2rLNgguoBy1pb9uo7gQWzGCQiu1dyjbKUbWbLMEyPf2uYwVSncEMyVn17J",
  "key5": "QTBLKyoQLsvd4b3tk8PFHJyekVXJoJt8inicXM2PF4vH8kRqC5JMirgVkygxRxbnz3RgbD58e3h3jYNSAayAfR1",
  "key6": "47enfqibxNMdTDQxBu215DxgRyrPmahqWyN5fsCetstRu9wdCcLiZosUqrdiqdyXKKbSHNx6ANTgRnMSwZR3kSGZ",
  "key7": "369pc4281qDGB9xrNBZx8HXXbWJsnwWJYijos3n22Z7hHCEyMJMrxsyE7dsmovVgeQR3jYdF3E4QqADPicGP8rvK",
  "key8": "4f5AuxiTZmvsfVsVG6zNoTGKuZrk2YmK7PgfXKBGPcw1cix9BYkkqWySgNvFsTLkxEkN1XdstGJ4eYMmJEhCLkY6",
  "key9": "uSveHvVbKbduoMyx7NX6KFAaDJM6jTGChv6NLdW15XHniE2y2tw4RW8yiDi6wboYWcREXbxoSb2ahLSappFvmfk",
  "key10": "AYZCiU4ju3pq6kiMPGWN57T62P63SR56CU6og5xPNPg7tYmL7kao9iHkpouJ8QKuYqVyVnP9zo3tYrZb68FaRmA",
  "key11": "4DrwRHkMSVcdYdboQ6PWbyKGB2azSGJt4qvu28yKuWPdXPAohcxNXZrHdFugQP4Hi35ySkwxAqBsRL8izBggsm8f",
  "key12": "VAaS3Z72mKPNABZhxzTkmJX8PdgP9j3nJcNyXLeJCw3UiYxYNHdhnko9K6wqtyFJTv38puWb5GdtVQ8c1Dcs7t1",
  "key13": "2SiKu7oL8T2T6Hia4u89dCBRrfhVHBSFM9UUEeNU98z9pupbkKf62QZxmP5L6H3m73gvh5Cphh1DxDpwtiHdHmcN",
  "key14": "5K416inmJk5vauVVj4fCC6KcA9wMSqL3obuY8cTQ8mRSFS7MkF17RwppfqxCGFzLwA8nP9ezhrkrEQr92MMRJu8x",
  "key15": "5wL5bceTTNesgMhGsKY1sjEWSVu9HGgHA9wPFCkdHN1vvVmdo9ruYz57eU9co8aQmoaVUtYmTzqueULTPbsAjWG6",
  "key16": "4ZchVAyWqyzoPKJt6ZJ2jTVxTSuxCanqNXqSevR9gHYtAUuS3iX5fpd19zGrkYULVyNWvUgeFp3AEMTVm3Qn5meU",
  "key17": "7eXJ1vHpC1KtnqeoUjeK6hiNKSwrGS5y5LpGAvNx6uSVFyTmkDfAab8RyEYZPh3v74VudcsXbdPxjdxaBaoNUNR",
  "key18": "51oEvfNJVpQjbCSUVQFqGxdkvZ7suEjEhE332JHwL2poSbLtLH9AJGGjrDd53caX9esQWAQ3oH8zZEWyzHAJ4ELa",
  "key19": "5rNZ7wfXj2fRpYyNr8ngbKcHmPyvkm1M3ARcaVgKSzyBbGdDc7EPKdmkavvCsmWQvhwo6cgETq8p2KrthmQkeWbX",
  "key20": "kT34MrRkqu4kwR93n6U5x7BFrjfu1txpCtmeDtLAnRe8WYZ14syKgK92ZBpbZttq4UdYgGg4iBnAYr1PnscXZx6",
  "key21": "3X1F6eey7jAfwA3aynS3nuzhWUEJEThpvNWEKjwnQwDbQyCDKKe3bYAjotwazL7jS6Gxn7XEodj4Z7vEg6NZ9nKh",
  "key22": "4jMU4uqtAGj2a43aGN4sC6nUm3kQ6QUVBPQiPWvmLM1yTsG4wcEbRQjVVCLp66tMv5642avcnzTnKPC5vCQjRteW",
  "key23": "UcnLLYgmo78FH1UND9uRDf7y2aXeF3qY2hNbVjSXawnu4RL1CMctzTYynEQwEgGcw4zCqxCfNHnofMSjqZtw5Qp",
  "key24": "54JZeP9x8Z3nj3o88ZtdCuAvufnvzoJAkY41QMCFhToYDoGcbcDvCa33KxT4zFt8KwoNvSkCk5y8GGgHEu4vTXyN",
  "key25": "4XGE6wVEJWtTTKXLwzAKDFiqJqHoJVDC3WWwrRtZZHrzVRmrQGbtHuXp9Yoi4N5Awn59SyJrA8h4td3xyGNp6qua",
  "key26": "2xGEgEDQR5vwF6g93FvizRfgkUJjVRhgGEUGuHjMPD1M5m3skCYUiUMicyFKrFCvQD9Ys31v97pC5biPgUE6nhs1",
  "key27": "2fPxZGzycGkvQrGhYivLVgrCH8dZuyCH6vdA46pBZcwnanQFcz6NHS7PYKDVy77TFfEtzNkTLRyj1cfdhCT9rMTE",
  "key28": "4cAoaPsxaT9xxvQVFN2XGjzDrcct55LrCAFWeYCnaYz5QXVK5ReFhfUvcWjSQCVmxT7m3zGUvdPLrnt1sbUyNMn5",
  "key29": "2dxsB1rB3neA7tsFNCNjHDLdyEYwZi75gkr4mMRduzhrhQs1SBrTn8KsuSr5nvu5MVLSyiFDUC78UCage79DCLTh",
  "key30": "5wASuoQHAZcGRFv67ZNe4mrmYoxK7MXXZyJTQD9Tru8TVeNyFYu7mU8fkPzi5siTX5wdvi4gtnbHGx1DcTKSQKq1",
  "key31": "4MQGePKHapjBwcGTTHB2ZDAsNs52jjqBEf39xy86fJaT4XTRd1NxaqwQ3BgLwDuTGGGsmkS4EZvcLZo7voQW2b4F",
  "key32": "XYfgi3z2oXrS896ABhbeUSFiEEtgDeY3vGQeyvHLxMjakt9szY6r2QXEGMNGTqTGqGYSM4C8ohR8iSVAw6aE2bE",
  "key33": "3b3TvWRiGaA64aYstde3KgpoeZh9dNq4g3X429AUo8QKCkMECAHszxSW1FEJGEFr4nVSSu2MnGG1MyuZqUMheu7d",
  "key34": "5nRFuLhZ3x36QEDuQH6VGJYpRYU7sFnEfe8uBUG8q6n1s7SkFUcPqdpLZqaadiSqvn1QSeW9HKwm3bf41fGq6rPr",
  "key35": "iwxkxJSrWHpLfDjctpkLfGMenyPnXtwMVVTMzsscSmS9QnsDb9zDM8nAiSfHrTv4oj5xU1zweGq3PzeKJQaFP6r",
  "key36": "4bHtdWrtM3S9ciYp9bveYdYWZdVJxZqCtPAtvmpLfbjcDQbtdNirkjye7zTeKfTHnRgSZSwQgTaUVwnxvCKvVJ9t",
  "key37": "4zEXMUjGMTKMbkA5D7hM9PMGYaPKCKATf6LYRDzB5ZniBSeTQhwswWTSkE5CMAgFMoKbtxTiVNriahikFBMEgn4m",
  "key38": "3QN1fvbmLGhbYiG8t4oFAoXQjGwDDPwqH8k5kH8WDMAtJGvxisjw9VR4S4MDSsp6M3YA4XF3Sg4vvgNQR9JKZTmq",
  "key39": "4qYjfLWganxTMwSFJn4mk8CzEqCTAj5cWEWzREtA9M9b7o63vACUsmsvWusc6HqfRYABfLTej9DD4E2KPnybFBDo",
  "key40": "4un9Mu6kCHcym959DiN6rYBsjj8CmNioQdyev2wTr8yEfzFX45EGVWviHicuURxHSVUQBWSrSsfJERfFqpiGshdW",
  "key41": "3iLaW7TLJx64qJtnHQJu2JbGfwF6DTVxmzRR6BQhzNambtXM2anoNxacoNcCEUXXqfZLZpmBe4aoD3qDWsuorjWT"
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
