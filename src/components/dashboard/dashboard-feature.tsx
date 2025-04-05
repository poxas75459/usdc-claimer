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
    "rPN44PuK7yQhUK1s8xPkkqrJEWZAobCjSTFk4CbRFJRWrY6dVGsgDiiqQewaV3GaMPBDNJcTKpdgUmL8c24qZgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DKsAbETpjWSRTfTjM3xM2VQ1Wek6vQphWQn5nTzdKv2r8pJwtGrQsZv9sMYp6gHXn7HrRwWywpAmcV9rmELRAUj",
  "key1": "46SRgFdvZNywuPAu5T7yMX6BQmh8HMFq7TszK4nwJe93aGVLAZ3FBu3hf2cem6MeFU69fxgvjSzYMVex4CWf7VMz",
  "key2": "64eqzXbcvpGVM8Tstxf5f9T41NwCsmpkqs4VHELhykuiUSTW4H55z4cQqsq8bd7xbKXdK7q7NVtMsS3v7xuNMpkL",
  "key3": "5sYyqBeacGBaWAvqkSs1a5qJ7VgX4hnUaTrABDHJL1wEHW7yBydfFYU6r2DyE2zcJnwiBcSfT59u2BVbE6Q79ywz",
  "key4": "xWK6EZnuTq13j2NdKfc9Ms7eZeHUmk6DoQB2GKTrJpxhq7ceKs5iQmUXRNDKgYENm3cECiYhmnktPD2oYUpgaXs",
  "key5": "4EeBmKahEbaZ7et1jV9AcsJNojeWFYH6dySDFpZLuM4uXGZhmhat18pJVJ5dgxcs74TQCMFE3jiAMN2g5fD5oGpi",
  "key6": "4ThxbETidCa31Yo15XWNxPKVFS3qmgMszx6FU1WjGacF3h4eXcxJ5Jxe3i72gKSAW8SHUz5r7q4A7cxWw7G6nXbS",
  "key7": "5QiDrk2eSEse2fc3YKDYbNegLPZXHMgo2VYqBxGAaBWJPmLqyFNZZmRbhetvyMCmVPLSV35rLk2dBxXgGoyK452T",
  "key8": "3TPHnpwag5HUTq5pnkLWmMw8zBU2Ju8b27ae8qVr4bknMC1of3hCY7kfybJ7GwPxrQneaurc3wZDSkrFhm5ep9Li",
  "key9": "2624GJYe1UpuXcq1cFc9kKJTG54qo9eJak6iCMoeyYCP6f7A6A29cAxWMv7FL8PuV4xhxqNJn5mhkdtKigCDJGVC",
  "key10": "KHLrq1EqVc4EFrMxscchrRazr3XycauNhWTV3toQbRMdWtc7g2kdTZgUoEienbpUpgVadwGR2tQ7xudSXDCHYea",
  "key11": "1ubDTPcYH7UDJxMCgncYcHpveexGpeyxFKG6ogNJXnPW7xfiaJmsP7GGc3omnmi8zT16HbrU3ndJLtwKnPsigcZ",
  "key12": "wWyfVav3UqJTGoQhMWEUfZhe5FbP5oyHuLM84dkJbDKyQ4qoYT2PQpbgGoSD2uAMXzKgFFwNqSuzoFhNdQjpr4w",
  "key13": "pfTR9sM6FRWcbDpPY9WjSEL72BAevLXCzXRXW1YCbkaGeHAeTfWCjsmX4fRPPKVS646QMSE9GM3ATCrBaLc14PD",
  "key14": "4whrZBBCAry4VP2tahXJLpo6t3q9LoPBjprcpjJ48QWouUYdaSn4htR71R7hn1iCSsFzZQjGyT51KSeMJ1N1Lq2N",
  "key15": "2UscggGar8pMXCk3mYhtXd3NwFdgtpvY9PPBM6zUAd4L26ni83i568cKdMDtE6b4UjvqgfbmqZeWRX6j2VGQc7D2",
  "key16": "3griEE4iw5ZUX6ZV7YQA9fjP6hyBMAVUCtCV5Rdyzat7EYFn7oBqwUkdd1CoC7MdY9wubMYMn5FNxVMgDmP5253E",
  "key17": "5TzTh1u7kKnsHNej5LxfX1AE8sMwkGjRs1QAAgRjPtJrfbeWjs6W8EnY49coVzzMkEbXUQjBZWruryoFaZAKUzWB",
  "key18": "4mimAi35qLDPc71XFZzxSdSnc1MAGojG1c2bXnAHMqdwNcCybKGYnAq4RFJMcPY62387dze7KZh3kHAZT1c8Zhiv",
  "key19": "3hCNJNr1dEV8Z4SXaRRR8h4RQK53fJvB3s3dWHT4C1BfTN7KsxSGGzySR9RyVU314NN6TCMEa1B9kVHEC4a2oeRF",
  "key20": "32Pww9wKw6wGH6QJPyAyQnCoAzoQ5aSQ6vu6Vxjpu885ACdAZXP8VuRtvCLfYF2PNgTTT2F169uDmQDMiWMzWqKK",
  "key21": "2HKWdH2bfg8GYFcEbC2cidEGnrZZhNqDznxCWBzdBoTnFQHZyAt6cj8UZPSP4g2igGY1gB29Ts86a5dmw1mgVij1",
  "key22": "182SZb3LvCsFTTb8tLnR6A7dBQQvK3eX4vGcFLcAzTgTwULxmiUqoLjvSTnAkaHzCai9pZejdpkt8pfCQJeWb5n",
  "key23": "r5fG8bnbrz1fHoMPfaxgwM1YddHJSJioBAPkVHc77mhH75pvaJTR7v4zsZm1xx5JphKJbroBMKpiSMjyLTNdxRH",
  "key24": "ySe3diLyA2QhWR2GWCjXCkWeKShctNM6bz3t1CJRfae5FgoVMAWU8vGvxq9VVRmSio1yeVBhJTjPbATbYVKHFRX",
  "key25": "CCN7rqQ2LQEDQf2WLV1bqZ77ivgeNqt2qrHzgXdAZvg7r9DEEMdd2xFpv358DMSjDePzgx6Y2wCn1hJa7vudeYz",
  "key26": "572UKhz7KLpAVxZFR9N1JyaoUy1yPGty1JVy5KLSEFrKUSkYQ1XpQTunhj4ewrEDm334eumvovvigYARfPN5T7A4"
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
