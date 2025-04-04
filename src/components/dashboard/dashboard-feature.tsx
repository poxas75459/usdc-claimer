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
    "2uTcz1wPAjStoXQxEBB92quWU3RCG4C7s7DjwgiVWVktX6sYUXQFbrnj2dQ4TZW2HwiYrjGExJpVqZKdrtMXxPUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jz1nZBWrzGC7JreQG2VyVqY98K2fHfyUCj5DBi4wzwgY4zi6goZmnZ1CoW5ARDrew1jXeZsoAtyti5GyHxEgzDU",
  "key1": "tavJ2i5S3BLXsQPxbxzbbcPrTb6sDJmazF43ZyYVDMfNjHXyZkw6H2oBGfUcdFHbkT4LfR1H8kMQUDsBH834TKg",
  "key2": "4QbqXoLPZh6YChBDzYqVM8w2h3QxbP62RGTrfTPZzi5tjK1nZWQirT2Kd3jLqvUTv1SHaK4BivVHgxQxTStYoaaq",
  "key3": "2Z555Vp4R1ped6v8yPWt6DgfmdRbU7Fp2tUijsDwzxkNRiUyZsNQt5CFHEtBkFHFSLNTGYG7TJrmtgy8GpAMSGdb",
  "key4": "4q3TqNYQFzhPTtGmaX4J9x6kbvqXzZqBCQneWRWwrWqeM5hEkShV4gpGj5HpbKL98rMTkfqZrY3sUMXUvWauYd67",
  "key5": "2jyarCpzVnKBp3JiGuoP7p6G1ao9H9D9fZ6sCkR3QhuY98PXea15gQq8RKcLGA6uadwZJnrvWxHqdyo5YhZpm4Ad",
  "key6": "4EZgggehGtDUVwYocU3EA4M5AXyH4bqhnq7AD9NahHHaE4vPur5LEz3qwBvCbgAw9Y2zzFsAYUXBPj5SzmtMdr4z",
  "key7": "pP37QbhXC8jXBWEdgTsr6zx7xAGw2TuAQTgKfk7xxZzU3YhoF2qGrZZvbmCQnMh5Vf3QDhasPoPMBLiU5XM9d2r",
  "key8": "5voZnP62Z9gaDPCNrLqQa7vY4rVZFGp3ERaYb3c237c6z4hKgetzjrhE7ncXr9XT5DjFcfdjPUXigG6k47wjAL6J",
  "key9": "5FR6WJ4EZJkUDroeAZbDnSJdr9CyAQmiggcH2QuKLFZ3EkaG5NCaw8PuAANDqL3eznygRMdg8mowjsxiyfy2owTX",
  "key10": "67UaMXpKDG2utRFBdivdMw1rTEWm7GZogVVLoxbsxWjnFXzGZ4WY4jcYUSTHLUH53FCGtwtg46waXHDzwYcZ6Bt5",
  "key11": "CMvYnyt3ruS8AAGZFp5b8EdkwrWwgBdLbzsxbLQVszRxQVX7KAcNLaRCorSedkFtmH7mZtXcw8sdUwuYuPZyZxy",
  "key12": "5YGc33uUqk24hEuaZkV4fwGjNFJ9vr5iBhce4RDZxjdygvapdkxBtXqKRWu12oXN4K3ecFCakv6jqroiuD6nmi8s",
  "key13": "3Up6BgDHM43qFKbyrmTAicPwcysPZJQ25dJmRQnBYpLmVeLq52LYiKsQPVNKZoyUtViMR71yf7Y32r3Depy5hiBu",
  "key14": "3C4ZCAQ7RkG1GZ1YoaDVt5hWSLuc9xw4XCNkFDrG4tRLtyykiKXMrv9ZLX1ATdhtuuuQTG9dAiVVZsL5wvPRFcuZ",
  "key15": "2bsnzqgFDee2w8vb9B8gwG4PrhGnonrubNPXcxFoWam2EyQ7iiGnCcpcZo8KryRyxtaYNBtoS8F6KHDjTki3qKUr",
  "key16": "Uwb35czHBANJjTEckJ3ZacqB17zY8xPHgeFSFDVeNi1uRVgb9SuZKn5pjjaWhBWsRhFPBvmRz5pbvorSBuFGv9t",
  "key17": "5ynztWqRRGyjrjYVnbYt98FztZUkTFM5mi4HsvhohNvNQq1WVfeXfmqTV1wcHb7ofrDbW8n7hzxYB5kCTz4L8yTN",
  "key18": "2UEZbstmqH1TAbxTXRM6DUQW9yFdXiAJknvHaWM59xWq9vNaobMnypWoWAaKa9ps5fNvaS5m4t1KEDwGPi6d2Gj3",
  "key19": "46fRfFsw5EbZYsvvWTZFJPBwdnSnBkvie3pJ8rQArScBm5tvjrGk449PsrXL515JquBQeSzCr58TyjRufyguXavG",
  "key20": "2CTD8baw6nuDkejwsab6PCDvHusKgQU7QN7Br22q5J5doyLUwXW8EzadzsTVbzVB5uZ6c91xuUTfJG3xPT4gN16r",
  "key21": "2Bm1yoGpda58ZBpfELqK5mS3NJo3Q6WgqLHgLaL1cswwGgkaj9yfA3Ke5CvE5FmF3u74zZtBX64nbfKBREvMawS8",
  "key22": "5xQpbWLhP9sUqimd1kxyses3hULAJrYdJCjoxJAYYARSCJy7SuaCWqBMSg1SYD69Bdfc8LtDtvS4UzLKxsVEHkDM",
  "key23": "2oGU8vxuHtqpSAwtDxnBooD25Y4VVce8QGXwaruu4HhdsShVChe8obhocbDeibkWqKacStLXpth5hkjMUnzUXDTj",
  "key24": "BGKdkPXGZ98mA2PaRR5ftb5qjXTF1Ee7SMJrmi9GhDAq9pGPbjkgPQuuQeLpeTnaB5HUKyy4mPCuQE3UHwb7H7k",
  "key25": "2RmZ3vNT9CPtoNQhyFogztHoLfPWyFRqPEsP5KcjsgnJadaSmAjT8NMmDx9rfs44e4i6nVTpW9sHk6ack6tBrQh7",
  "key26": "3Paj6Cc9Naz3u13b66qqtv3JD2YHGVTPRoD7okYxzmKXFNgBy5g2xo1opNGRH7sqHtgbeUrM1woDbCRA6qEU44i3"
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
