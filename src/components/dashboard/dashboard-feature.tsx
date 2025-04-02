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
    "346EUwfmc6feHggqs9gLw2HnDqdgw5ozq1TghmrtqMtsXpiE34rAKWJRY7zJtdLP2cBJfK3nkKkjFHCis1AQrtKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wkhj4o4wHwrRcAHu5vWa3P7qMAuc8kHeygnbe4Fgwij94QQayWUSLTP9fnMenxdqgDSFEvq9wuUrnJHoeT4axEr",
  "key1": "24ts52KCzJuUCybxwYF3yG9mzzVzEDboePj9AzjP7FoH4HY5WPGgygtYVq7Qi4RukP3XqT3mAEyt4DVtDCAoJwPX",
  "key2": "3P8UrFjmfQj9xULVwaaDPCinEhPuVqDNu8FDr6ZKeBBmTz6iR1Jg5JNmkonerMsnoy555ew3AxKymPUJdtzk6WRU",
  "key3": "4xW32SoRWpKgRPEDtZmfkzxsNZccyKenULzEPt1mUNEkn6H63SYP3d7A7eCfENp2bREZav3aXKEWvGURM6AbMkxJ",
  "key4": "27QX8ty7nYQb7sY95hxqQNdfzWqDZqp1GBjPKdeEvCYkByttMS1RwcXfABR1fXGuSs1rgViRMqfUHkpLcnyqMxM8",
  "key5": "63HNBUxYNQEWctVMAJRsuMsnL7ht3SRWLLsW9QQS6baj3LD5brJ9GErq6iMrqQEYxdZ7fmbDWQH5yr63UDVpKeZu",
  "key6": "3GHmR1X5GRQnfRuNhofpkLb4at7oJcrreMpCSVjgBmytTA1jMQ6Hvrx3BwoHSarfQ6YfAbekY1CNqosrM6uLfKV7",
  "key7": "3NYfsEj5us6dvMBBrW4rBgsBsUprvzayw4dazCwbMB47PXWwv8iZWALK8vvZNdUYwrTZyAPtvexYXEzw9m9akCkm",
  "key8": "2Y4zQHJMz8dajBo5bBiCPbnqN57tUYmHPaUYXG341d86kJjWqiHYajeNN3Pv3qEziMhaf2b9SvFGeBE7rmLALC1o",
  "key9": "2TDyKEzTmJxsXqGVyXUXTnQrzcJMjj44y7wsYvdGxiyonP5h1qYTHGVYQCPPJiQKLedmYizDjWY8Htcf4cpeeua2",
  "key10": "2BMzvLg2yJobiJ5vQGWPf5mfcCoKCyaQJEuJJJXv5hacaGgUJkWAAJjp3BLEE79UMTQr3pEsT7JpvvQVvFCDN5dA",
  "key11": "5aomZJstGNPuPkeyws2J4HRzCx53DHw5Cy7qagTdNUcXGHBCVgw7kfK6HNkS2vz51scdwn9wg3DJ11PmZgojpnYF",
  "key12": "5WeTQTgmCeXbRJ2DvRidJarrqrWPgYVnaddqXjJhBUcHZTEkYZPWTjEtKtpSWxo8avAbQ8gCNxdq8GDNArZveNBt",
  "key13": "43ZtXsyXT8YtbXfpguGD8VFJzEfkxJbx8b3ac5UYkcMsfRkGenVdhfkMELbWhv2wqezE3xMYrtiRFfJj5oPQVsSL",
  "key14": "2W9k76v79PjGMKgNPFzgaxu2Wfn4nfga9RvDdN1qwspzY6rbBKK5d7GC8i67KFBTbMVYhbfRvcETXTCW4khXEy5E",
  "key15": "2jZqoosbyQD9VDzrnt6PVeMPXbHTR2ZJc9z1RndagAjyttBcVjWbWacgL7NPdaibXgageyk2idmwcFQmX7YQvPot",
  "key16": "5emTbZUoUhZR2gXP2GXxsyh8TDsffFqdH142EGSN3ogmUQbc2HsDcM9XZ14dpgdqb5ge3x86JaUHTyaFTWDYbrm4",
  "key17": "5UXwyfqj15imcrQsgQLDo5X4HHTAvrpwaLcFi4RVVsnSnF7SPkEQiTKjWjtV4PJKXKhDK1TVVyaNjhj3FrxZp5gS",
  "key18": "2JnebpSNzkkQFKLByqBk7vVjnH2Nu4SLQ7dgHS94KGKSyEx5wJxyqfERkAmudVvu6oDGdTwHjrMCmTBm6H7dPRU1",
  "key19": "4oqGPhGq6HpgHvJc2zWd2UHB4eMxcz4CWbhZvn4JNYksV4JkfCzraTGUT2SaNnJvtbrBYypRGYH3wwcp559WF2oD",
  "key20": "58c7fQASmj6ZPHV5JaK8x2jundQ4xcGum2dWnPY3t5Uog3UKgy3MMUGM2E3fpjLpDAEPxrCYrmQzVjyeVd95zgvE",
  "key21": "5GviMjZsSxndRcKPhdbyDavxYDXSpdkdNo5gZS7giGvJEG11Uwx2AJe2fDKSw1St27GPxcoN1HKMCH5gAXvLgH7Z",
  "key22": "3CS367dpvrth6aoQFUXjMt8GdbpwvSDNoAKxL9hfJg6DJj6zpG2HtSunZ5cE8HnYCbwbTrRFNFr6ho7V8FcmDh64",
  "key23": "2M8iRmB1YgvHXPuP4K8N2hEqj95mraGbZvahfxmeUHcuGXuCRsMG2in7cZ7ADezsY8KMa197kEQw2VyAsdz3g3Km",
  "key24": "3gBo6P286yd8Bgd8ehGiyyF2ZtwZEAiECurBAbShBvKEM3JBb3BvPSJ7XvJcNN4rBvjFCE42uAiwhDAcYgm4qguS",
  "key25": "37G3aw74685AdCeUrCH5jVbJ3azHpCjX1BBgn2i2JZpSb7azazytiYzecADiZgiFe1GjDjRNJyYcUS99zVdLokJ1",
  "key26": "3KbQVK3runwBNm6vh2HQRy2RFLzjQLTzuGC4j5cbHRZukKGcPfJJK689sQfCSxfMahNKm7FsyNWBZn9qSXhjugXW",
  "key27": "2xxQJrqNEtnmAVxX4h7uWmBBFrXFvoDU1DyuSaGJuArTA3NuK4c8k6oyVqvJNUPmvVEmF7epiicvrkvzRBQb52k8",
  "key28": "5wfWwHFPn6Z5DKbNriVgTux854bLingFNvVbSHCNvCDDQrxruMp59CV6kJ3MxFdAYNzfsmLydofdGKPd4ukSUjzk",
  "key29": "2eqyJsyXBpRsH6x4nxWXoL7Nf3kBKW9cPSD6YHwvc5Rz8y4n35MZfdugqCSrjkFqYjP22ayowtW3pA1BdxWnEpaX",
  "key30": "2HgLxjiVe7z66Ddc1E9JbMr9bfjS1eVq4N6s44hqkHTkEx6uEr9cxWjK46Gxdc2bFWEU6fr5qfZtt96dJFkUHZCn",
  "key31": "5UWHWm9Y9LwpEevrHD8UexYTKWPAV1k5k7YLuqMCYnQRVY8X8P8KPRrrPGDzNeH3t3tVKEyGzp2vCZ6QBPo32nQN",
  "key32": "2MfhuCfstyvFBgvV8R9KHeBaMr8dAK77d5g7dSmo4H6UaWkB59V6nE6qNQVoWFHsCBnzKYnUqxbrET7ohuoAgSNe",
  "key33": "PX8W7LvJdr6eHuACWVe5SspsgoLPrcXCWAZp5amhCLpmN5mFTVkxwcXMaE4oox6yePaQRcw7QDbrvt7dfnHkYdf",
  "key34": "5bwsLWDCV8VZSGN2evqao6PdjXCwer3kLT34BYyneqDTuk3BBbNvrKvrvYH32zYoqQN12BsdAbfB977jS2iRAKnV",
  "key35": "2cVYkyPPs9NG6PtxP9C5sXXakrbtFguQxQBRZEvJjssam9Kh4x3HsWYgNcM4h8Lb5NzfiRrdYWXFuVtwFHmiHPYd",
  "key36": "4Aiud3uT2ENRpj2akTTkHvzNKD9RnHsz1NUVChsJgATWqJbXSKrDcKoRcQMsAbH7VuwyQHBc97NQwq6uKXJoPB5C",
  "key37": "2J4h2xS42S34n5rdJ3ghJuW4kcM3xU4966bCmH1q9gvfZh2spKGQfnnAih3RhZcCnNfgSnkjtJt2aZ9jpUemvHWr"
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
