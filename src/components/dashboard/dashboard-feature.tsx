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
    "3762jpgtHVLcqYkq3ERtEDdTYSe9Kktmv5sBUjb6q3ibvcsGABF6ekjCL4F5C1Ri6QgXQYW8Qj8n1JWDfEqDtG2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64GnoEAC1cHK3miNsxPh9bEKtmSHtpfQeiZFDg7Chhdq3251bN2RRN9zrA8Gw8TxtsRCmAbyZUMuNywyf2yZvsgH",
  "key1": "Z5rCtDorwWCPTuSB2gWrfCxKr9tdRpYdCKUCJDxUtuR5khytCYwKVMHQ1WM1CvrvccToFiMLneMjxKWB9qamCjd",
  "key2": "2YFqpoEQFhUpPYVdHdibeLxkyAgzwGyQK3SJFDe1Q1iwTSAJwhVzj46XVNzqDgq9JfgHvhZFva85KdqJZbmHnMUr",
  "key3": "5HdYcd6EikvwK1L4zk8jEV7A8mfMsZjMTcMT8AdHje2k3umRYPA3pJ68PTSN4wRiGcnvYpXCL74v6cGxUuKFN4YE",
  "key4": "3X1yUaYKZNj8xw4JSYM1dvhnJiB9mUCa7sAtZAFypRVR9aDFTekajaRWgooj9wdq73HPvjETDUrEGc5SeZRM7Gat",
  "key5": "4RGXBkeZus8nVFmrVLmZKji9bMmJd7Wg37wburfn3wKKVFK7gj1RzqtbfboxaoKgR4NWxfzpWpujbQNtw8q2xPLL",
  "key6": "3Y1rSZQNaaMHxiuD7QBLk7g5uJA9wxhFm5LNEGEzXjz2wyqyYBwjdomPmAQbLcRtGMLiqtidYKyEhazcQUqjQ6My",
  "key7": "2oePyCVRrgq1o2hxDyZMnGvfJ9RLQjEbr2wsRqZGTetkpnzfNEirrDt8eTHiAcT75hLfNeXJWk2dMET7XyJ7q2jC",
  "key8": "67GN89PPNjVbLgZabrUoQLrgx23Tu3BAW9PugUqPe9JP1ZegmCSYTmWvG1hFHBjvaRhumpuE6mJMyjMHkh1PW3jx",
  "key9": "dzuiameJV3XRTqo1HhUbrayeMpzSNgwbXDxrsPsPof8c5wPWNGUsseeEPcPpE2ScV7yF7uL1KMeB7i6Xt2LckcM",
  "key10": "JTueMSNAbvrMZQxunkCuZ113xtBTqWLSoJxCcJ3QT3gq6N9Ciy41QNqaSNq8UkiUMJRdHKLGXCnW1KxVrF8ZyHk",
  "key11": "2Lz8jMRYL3okH3Rk3YrhBHbYBu9KwK9NphyXbh2qL8pNaiMt6WpVAeuX53VgaRhtiBKEM6p6QXnVaqiM7imp4XJ9",
  "key12": "4UnZrs326TDD4MeBmRS2xAWrZvMVdprQDTYNkXsWb67kg8BGNwJ3Bf43x5sh3qehuiceUytdPjdJ2BvgLGqTNXTz",
  "key13": "3SjqgzndWB7khy4Ew3iSsEiafmXV7zHB3Yuxk77ZgzSVDKttpkbsJzdFS11MvbCHUYD5ieoYyWtHJTeymn83gcZz",
  "key14": "45HqUpzupWnNc2jVgNVBVd7g1nyBumYAduw6FZwDbHU7NVojbz4zFLoYAtcGPXu9eQH72bENWszK1Zk2ryD7NfCs",
  "key15": "4DncH29mXFFk4Q4uDhd4tDFL8ZjMRik5iYatcvhZFinx2CDcKsUbo4Mt735pu7XaxENdNTgu9vD6AE4BhCtWxJ9v",
  "key16": "Yg2femzXcCM3H1KmAz9y2vgrz7ZEQPa1H4b39nsRumBq8HYL43WQAGuESViMR39kKwpACgppC1fgxeo58Dxw9hq",
  "key17": "25gzWodFghA8Nfk2jZwENq51xCyMiZ9nGe1Y9LDAPsfC7SnVh9JoG9TTJD8sSRncPdT9J8xghHbbFFchdNjhYPkb",
  "key18": "1ZSZMhyHzBpZ9SaGubvv1uYNWrjwYHtod4roxMK66h9CdSRPcuD7XB4ipMYC2vp9ydZqkVAg2xh4GHkhZss55J1",
  "key19": "oDFSPP7syzfFfv2Ah3HJkBRisJKNYPAyrDqEdNM9DBoiuTu94Y4FpH1GADW8zFWzLMZ7ZyaGf7L1LAG11kf7JRq",
  "key20": "3xYdhCW3WGX7nREC8mVSn3eELGb8F2F6CnqMNcBwxm2j8TLyvNF1KqE3jnrjPXLdhgXWVE6wxWw8So9Nrygb6x73",
  "key21": "3bfr7aV2tadyZymjkdbmckDr62YVqKjuGn6TCHN3h9m4TtTwHZd2rqTqadVFWEVyGSkvhhHMdB9EQbUFPAaP25KJ",
  "key22": "nBwDKLaJLdEZFGttMmemYvKiMvopi881GTbYwK6Xdzm7ngzksykmpKQpnpn1NTmuFx5BjBa75Px3UdhU2CnDQbD",
  "key23": "5YJ3aDXvpe4WYWq23FafmDoZrv4Z9EGx1TMLikF3jHdqmk2pFNCpMLfvbdkhS9F2w5LKkRy5WnQdfMK63WYEbzzj",
  "key24": "2vrgRyfR3Gxw6348h9mZHsQ6zJ7FY7siNQk8NgaSNjqZg5NVL62qMDJKSZNiscRrn5ZpL4dmZbxwVJF7Eg6ZkCAB",
  "key25": "5bQfqhxiz2e89WbqAdU5MC8mLkCBg2LFTKg16BYU2U3cE6ayMjK3xwfnaCsGjpbu5BbUfTj9radYte428nirFggJ",
  "key26": "23pH35m8amoSevRSBPEoJ2QDG7iBKXoHSWaZZr8pcTKdtwXvxvPfmS7WTFffWTAakVts8Jk3d7SRhPjBPJQUPWBQ",
  "key27": "Mjmk6jBJQmH1JnjHjhudS9mTgPXcWBKyPYafYq8tZWupnTAL6BNdS3XLJehJ4c5EJMiowrNXAaXWZrggRMzSgtZ",
  "key28": "5YUsJzJkmzQGuaf3gEGN6WnsFUzGphv6aZJTTPg8dEP8J7MTE517YSBbChHyeQ3Jzo3SjzfQyTebeuUD72sagYx4",
  "key29": "3rGtXJokCx1x8y7aX4HCCnA5AgPRhpQb9CU5fpSYpRfnJUBuNdMGg5MBu4faCzPa1G2Y51xJGj8Lj5iT8XkczTmE",
  "key30": "VgdRPDrozShtR4WxSCzmpS5VLXbCPWPUfqk9dVQ4e5YiiWBVmeYv4UNnRqf1CqXCVCkBYs5osasWayNjyYffdmu",
  "key31": "3iY8mbEdqLWh5t4rK2Pzy8EmSw9Fj3V8FvBPh2KbRXad4CpwATvTp3LrJ88Fy42WiCFktLY7c6f4ZdU3yxbsjVPg",
  "key32": "4YHjzWFqsRmRXqGp3PLT2GnVHKCJGzTu86b4F7VEnCjWA2rc13k6nii5D56qHQpKiVJGH3BuYnHXA4M4tdFJDaXL",
  "key33": "5ux9oPVPASEzrw21oLJLeREqhxtEyJRuDwi8YMXdkaqJSHQCa2FW8TiKM7r9Qq6WiaWyNjXNLwdXtxkLmNAcqvN3"
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
