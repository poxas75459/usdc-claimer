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
    "3xBqRPTdaEQhRRfe2wZFAo9pn3oNPAbd5sSXmRisjoTfUHyJJp1WSN8631SS2ps6DkNxZLsPHRxW9FqXTpSrdK5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DrGp97uiQ8RXrUTBJ7zcYNtDskRAMCVvZcqjWYpjmGiBD9hLVrhCJkRjJtPeLb5152Ry8ratDtisRVFptVJC9ih",
  "key1": "L7mbsZxgyd3UeRJVRBXDHiz8M3NwLX68ABdfEkMfPTvj4uyHz2Rmb1RHtaYyHnu1Cwux6UxFfDJJTjihSJs8U5u",
  "key2": "5mXYKKHAmf5pT9HvJA2FvpXTHMM1JZuKNnVXY1DypsP4kJz8toqLHmhj1mfBAdZ9A6yMsrYcSWRVLNihPSDuUeKc",
  "key3": "2dxhi7oSgXjCyChrhunVM3vUADUvJSX8JQvcyMF2k45WF5qyp6G1JcKm3F5CxWC9KqfHzKXH1HGLqJQTnZpgUjXs",
  "key4": "3bMpkH9DgpMGDkm2oBNMdvSEk4BHvSQV9mh5LcX5n4czhBs5r6XxXSoh58adPeVUbGjszcQdXcMtr5zi4DeubTSx",
  "key5": "48X85MQRx5E56ABv8HaetdEbbLL2FRZro3TE4EZf6uKoin6H3WG6id6PYnQ3A1owCDj9kq5fV3eK2XWdP9T3RzLN",
  "key6": "4y5EyRVjK4cc4nykqfeeGWEDatDE19ekZ3sK2jwrxuYo69jBQzfqtFnn3K9yUhn7B7WiNU6BzPr1SwZHsusFyim",
  "key7": "5aYqRdqniQpJAdZ58rnL4gACSi4PJDZFugwWhr3uq9E4baew8Zyq5jT1koPqsZwN22Pu7dMyHD9rehHiVLFwSwXu",
  "key8": "3PhhU61Bip1QXfSd3bMWWswMoxsHRwztKpyfHTwvi6RLhJYUNNy2vJeXPeA72XziuUjrUHaZJfy6VJcvQWuzTJS9",
  "key9": "4SrCfNwParuvsu2jqWFvXXwDeCBCHXaug1N6TpNcssF2ZmYxj8YCnYDhdY3VjNA71pbY8UxXaPNt4RhKuWtsTGGA",
  "key10": "4HMhykXQ7fY3nuJ1o2ZLbkD5SVhNrj9NWMU6DWskBQB1zqFFr8tjD8Nqupj4aLU8MbUAD3hX6dkHP6TrSJ8V1oZ5",
  "key11": "3bWnmJmpJ6eCruZyP5d6sjNPSBvT9kP8Jc33Q2gh4vzb1twokW64ZpS8QMCoqxD8VyEtmxVtcrXQF8hxmaeaqBgm",
  "key12": "3bm1571evhM7UPQGLQ6GAa5A9UrNZmWma9ncqSMprZukUfv3MrwRt879rsZwgs5PjxWRRN4FCgmDXhsVRT192JLN",
  "key13": "4sQ3QQNcRdUjL9vVRrrcQuBy6S6KH1TpjRnaiZpyATpPxVR1gXccGRb9zZLup2nSDLUeQM9zdEUS7sA27FJd2SFG",
  "key14": "3JMonfXSZs8ZcFNDxhzH7Knwsvs81cJZMD8M4rSW1TQkNhH7U31FHeDUbYdk79NxyDVW2VJitpb3kpyPMeL6YAhd",
  "key15": "5X5bcNLDHo7ZK6bbispDY63k43K39xnSszpnJCWh3ysLovtKMLvqFTx9E8foEUSoeR3gKaUv6ZZij7axomNeieZC",
  "key16": "2Q4RhpJ8TcufQobdV3xPRi6jfbK4tzF46zniBN3GyhrZta59vGN9hMY3oxSAUYKgBKHh6negWZgmrTBKycPk2XFS",
  "key17": "VLCKDxbkGdM9fywubfqKMCazqEVzQjxyygKc9icwBDHFwyncpsJt3y5eusu77fWqom6sRVSPA3YTMiDcoZCW9cg",
  "key18": "46xusvQKy4YzcuxURDphQfJexc9mcLgc78QdSo5NRv1rMCNuUTKtDEVBFg1Ur3cA2zMk3m3jf6RMpksytDAtVfNa",
  "key19": "bDKwtsPB73B2BVFcCGm4BuYZdv3JaezqrQrFccUAGha5c5jcgpL7tVQHBbKGFryAYrc3Pp2DnR64SebPTtSoAGX",
  "key20": "2y3h4AWB4HXdhg3mXjYMUNmeKaGhvpJa4zqWFz7aSPqdZ8o2TPWMFrGRrwWb6ZCKm73zoDAYL6X8m9HU8mzpWq5P",
  "key21": "4uz3acHJBPcZoLQuvLUhBTCZ2X4gJYvtkQA8cvN8VjjRuP99zCqBhkp4V76FC2HAHfBS6KzqAXWyrtF3JwLG7R9S",
  "key22": "2U6uUeyYJUfhgE2YPqA8rydTw62L6MAaawzbAeG2CSZaV3KiFCeeynevT2gC9cfwdVQG7zsACcrQWeVmuc8N5ctq",
  "key23": "2RF7qPhFqdvwSW1TtyaHBvU5d6rn8jTtK4jFn5hkZNdFX1oPUvTFatShexRYM5e7nkbCLVFjWasVQFo8W6E3x3FX",
  "key24": "5Dfcj2fj7hh989Um98ddBKuvtARt3y95P5x65LMBNvxa9yzDA29imnV9odC6ebBm5eAaYuTFRq3GN1rVQLSwHyKk",
  "key25": "9A2HchpjM5j1bhwksLQtNCTFkCCurkLZ7NxYsTgaHx2dmn1itVZxL3U4jT3vvBeZMMwbjGHQ66RA1HYVNFeKGhF"
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
