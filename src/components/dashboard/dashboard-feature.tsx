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
    "4LrmjJTFzqpQvfCfRNZwvx4Mw1xrk5RDGyzFkhTUeRMBnto3nSi1AGuycAu6PV2UbyGdqzBpg5NgX1FpFsMSoD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ws92rT1ubRV3MTwF3AwwaaMhAXG3nc1U6GrMqEtgYrXS88rWvy4xtUy83Q7FWSUERUNdSUVJ9fEsqfXMY4gFqQx",
  "key1": "2RPEQHHp9rdh4J9wx6EVAZAz4oXFiAjTSpX7ktZPJfkXbKVVb1Abjd5XgvnMoBtr2YVuFuhffkCzVwBorynS7nRN",
  "key2": "3UMnqNroxUgeGPBhNijJSj9zxtHCzvFCcVmKFBSrqtUCFMw1mGuZSDS6zRZg5rAXJABv2Vg3q9kfwQXGZNsYDq5G",
  "key3": "3rZKudPQoqdGjDC1Qthy1EN6XmePjgnMpXQ4XCJEjLb9Cz9rdwbY6dDU3XQC4NYYD1k75hFHDTYXmggraqnC5HgL",
  "key4": "4qCvqzeNJ8kz4reW4t6g5J3Sufrc1dyB69JTHK6FonvZa3vwdyqExvvtWoEjwMguFX2SmnTgGZ34n2eH1PECNaY3",
  "key5": "AQXDSjpPMxUv8P7Gm4E8wbLTLmKYegTf7S8Lt2XCTRmkdaoyB6YddxXquxAw41ev46z3tijdowNR4bEqVJ6kZy8",
  "key6": "61w6g9Mvvzm9r7gdMRFKbc7nrPmUq7smj63rPvruwdvUAibRoSUxYnV7tu1iawkLfbnnFdpmJhw62HoXTcoGg1mE",
  "key7": "2srrYDpfNJY3DGavURJCYRUEMLpnhvnJBX8hBkMpUnEsf8mkddvSDDF61e3sWboof6KJYeeScnqgjSw84iYA35YU",
  "key8": "3bDHVFsnoqjce33PtkdJ5cgn6fpUxdSkp8yJYMAfPExnbUv3QGpRJNa5vgwVsJSHc8iSTSurr5TeE36F3VqfXcpX",
  "key9": "67w8HGrYKwr6U7qLHgMHzmX3ehuw7jjKCyq4B5aKGNBnrd8tzHpA1Vtm85aGy6YVWkcfTfpmStRY3aUaTYy1tXP",
  "key10": "G4BeSsfoDAzcWiBdzZScogh5MMLoP95fsXoGuSuvCYvJ4EmugbDn2NZWtn26UysrPiitKibnhSNXrrFVXcTfqBe",
  "key11": "4qAB1vt411i83vPJeCYnNvdAYwrSKqv9Aaw7oBN7Ska4XwQ7EAMVAeMBtpzsmkj25HQq4qxFAw2ugDuq4tdvtq9M",
  "key12": "3RAji3F86uoBVE7QVvyWDpXJuUeNff6m8djincUALt66gvREVeAWoJLQdfUcETaos1c1T5E5mcZp3bdF1py1ZAHh",
  "key13": "5ptcNedC1yyBWeGggvdp7hrH6w7hjCVnynkkpg9RA69Fnq94zng5XuuML1QY92pnEbuRtd7MiCMnQ7ybUDLrkpRF",
  "key14": "3zchroTk8X7GrE1AZNGCMPrucooSs8SiAJzToumL4SfV4dww6WCeoeDL6e4HAPYRfGZHgsSDyL6n6LDpMz5Xgf8x",
  "key15": "2FgBHpVbDUMn6GWscDpgiw9JRPgYWZ28BVxBYV7FedGrj3An5x7j8xrFcKmL4wA4bkWM4qYbGbi7WWAgTXQ2hQc3",
  "key16": "5aWKVa5J4MyXdY8osUYvucCcipZuasZFM16crt9ZfBZ5PkWsDtWbJqruem1LV7k5UinsZqNnF6ynBKJYH8coDTgi",
  "key17": "3w3TuTaWfNdyH3rZ5Qzd4g17yFPAjsR4H7M87a1cJNJsEoKn6iCP5GQVxTYwbzGE88XhAS3N7aj5oTHrqnQLCTr5",
  "key18": "FEy3VrEknHYrAUTdmgmD1aPhbd3NxiFsXJrf7NwNCNdbL4iwr6dE5Y9yagetMoWnbgEmav3wwjFfizPAzjFASnb",
  "key19": "31LX5EHtYYqrpmSrQMhoUv3RyMQCm76sDimHicEvyNQqE5UGStPpcNqD8tqnsRHcx8ZsHrWjQNDdhiCrm4aUfdAb",
  "key20": "3phEFet7cZSUtETGC2iunmVHRtHuHJLV5ZE1iysWFanMdMmsdcszrnaYq9om6LyLEPdKudULpMAAQucYiQF3bAvq",
  "key21": "4pLZBFMg6KPeuNvFQbk6NPAw7shuXUCx1jyuZzxM3uTRJj1gxVVUTWqoXwxkP7cCMxvWyKseovWr1ky3pS8JhNp8",
  "key22": "2hNZNVLPz3gWUYspcqj2q1nHLXjpQ8gsS4jSMMLYP6qVpa36FoEUuuDQgk5vNHao3Gb95trw9wCzfZVQZkQTWfM2",
  "key23": "34t5S7T8KrssvixjnGJn3NzkxUC98Q5rQvxVZDeeiBemuYUydnzh8zi5wbeZeA4ss7toGnYgVost4nxDxZcXbEDn",
  "key24": "3AMWUR4ngMLj7UXbBgLV5u1X4VzR7wKkGoEsBu7t8zAzYjASn6Hx7LSM5kPgQ28P4L5VD8jvQQ8zwkfBaQv39tLh",
  "key25": "4sFvgD9uTcjCG6qqMPVUiYASRi5deA9G5LvdDKzRHxcieYogMW1gHNx1UkWnohV24ZVNByqQ2R6RLbNsesaYe581",
  "key26": "95PYrjH5yxDXc4WCdQeQoDmDfZAMU18S3gvqAGnUZD499irQQfJb8bThEo7BgC8yMcpHPtJ5kG7TmWJBoGozeKr",
  "key27": "3ZtZNYe2JvScssKypk75eeUhpYCEanLzHHDNUvg95HXQdrKVfyym3E7RZtcnWF3Ledcm4iWYCqwsRwKfZU1VV8Q4",
  "key28": "331ANFDKx3uz6SPG2GoZLPiRTYvPpMi3Px58LHFXj2eP9m4CThNEfqFwoWRZeaiDvQVJkoYidqUKmZBNKozose7i",
  "key29": "A86SgpQioNkSCXKhbBPonUFk4jH1tUAqwLNzAAj1EpaeaKcs1X2rGu7ByWPcJjqkxu1i3Fsd93S5HBk3QtDa7zu",
  "key30": "5SWEKCnZFSgFhS5iqg7tZ4sBJvWz9Bz51R2A1RwCpahH7xHpkcHnVFmPMGSXwrWqVixfcDZZDmNE4NEHhqvwxg1F",
  "key31": "dPxvpnAhrYMf94xVFFhGWiPyV55rMW6n6MJbtWVErWnQKKYgkdCdDqaNeJiXxWyPJNBLX4dV69wPK3vpG8vimw7",
  "key32": "3YiEQdQXwKQaJjk5Jott18nrUsXbGJNq7zQghZDsxSKmb2cfTsAwuDjzSr8hoqNzvtdZE1RHCcMUncfF79aQZ6gi",
  "key33": "sVoF3UrzhXLyTfNCqoLavxGYFL729ERaUkQLcLr7JyUJ4FqAwj8HvAYtbvVBE4GWFVBbLkbzDQutaoj3qUSne54",
  "key34": "38ufLkW8N4qmYY5nkp3VXaUDk14yeiGBH1FCnNoBbqAHruiZvUUdidjPdKMCYbcoeGNKTea55Ss5KntNwKJex863",
  "key35": "3wgn6gSFdma4h3dpz5JCZpNzp7Kx3Ak21cVTbEaYmuJJWQtZUCw3jGAZsVLKcitGSD8gHVKSHSeCFLhAKBvJS3RS",
  "key36": "3d4xtkEzg8UDGxdktkDyJwRP9jLnk5EyAaVZ8p5Ng5zsvZdXzjEHy3xHN7mUUzfSfb8kka3cJcBuqvKjYam8PHc3",
  "key37": "2WTCqMYkgNUNGMAuYyHV4noz72LnNXzVGT8aSZGSsSuD3gTnD8DRBz28dWxKUqSu73vqCdCdBQUo2QEPAc9SuVPy"
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
