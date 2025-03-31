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
    "SVBSifExuAqt2Kf1HLTAZwoHUnLWDBzW1kzJpzFG4GL3AtmNmYMR8tqGAzyVKMCQF8okGX3FWAW4sJP2gGbyBkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wMgUHjWBMUHJ1FWAoWhYDye2cJ2tKnTKocLvEtxLsx5t3zJo669ACzvNqPN4Ae99RNr7jUr5KdR4iVYF3dmmXyd",
  "key1": "2DC54VrsY3A7nDeQAA82eP84ZYsYmXJ2eMxjX6SpaW3RAhS5TshBF6yLQcqabNd5NQpSEGJ2Ey79sYFCFiA41Nib",
  "key2": "4Rh3cTm7FFQrDHJ8r6joXUqCQdibyigVRDdNubiygjtXRKPcApX19henxANbxfkw2VjrZw52cH2WYVHohNWpVAEs",
  "key3": "2MsvmjoUYQppSPDoJwgcjHe4J3pdXWtAt8tntwSCkVEQSbifjQ6vJLRHEkBEovhSyrg3rePGFmPfb8xCKSp2ZDLe",
  "key4": "3hqXnMTRBNbmHJtxTQU2nwfpGasFTWFb2RYACDLbEoSNobPPQpWXkdGWa7cPvCZMrQLdys62dMNbv8ny4cgu4L41",
  "key5": "4fNQT2jZHut9F5C4sGSBTyTqUattWfVzbzrwRruTtf1z4vJrTpjP81iVsv7XZ1cSmCBEui14pdjHhZYA6orPHUBp",
  "key6": "2WKgryziRk3NW2upJETCaedbQ4ZJyyYiZuSGJ9Y6iNBtiY9W4i4CswuyXsqP5J9y3Z3bNbEpSop17oW2Zsjg2iqe",
  "key7": "GYTmzJd3wiah1qzSetanuGuxdxuznShX2jAuqSRVG26xLaRqmzBEjuikNaRZ1pZeGDQphK4B5dAGdD4z3oqg5NK",
  "key8": "3ZaYzeC599cqobJi79wugaKoQTeLWnzzSJBMGzsfBqgLyXa48hWYDMzvQBRh11fYvNTHZg9bvVhvb58uJZpFRvVy",
  "key9": "4nhbasjh8efhWwVRfH7rdQ4XCDRyNMNPz8fACFrb36bzk8wUa6ikv3hXGXHqQ29WXBoHgBxbd3Tx5RRjjWJxGiBM",
  "key10": "K9Mm6YnghYyAXQSJoXwVLZiSnACqarMkUy5QUz52he2LYeb2EQdqZnUFT35GgZGYspo3bwVhq2UR4mV11RN8CNe",
  "key11": "65mJZqjTpK91QfVh3pui5VfzeqGFRHFVvwZKYCXxxHd337knDytnuJ2hgzrAyq4n44XubQ5YB9xRx4Bi571jjy2z",
  "key12": "5ZVthgdqiakCoWfHxi8YeCdAXRswWXk6q9CN7G9g93toi1yUNkjKbrs5qee1NxT3eY7RQQLRvWCcBYJUuZyq2HDC",
  "key13": "QZsKJgcPJYQTHVP8ERUaMvWTZ8jBCn4DWcieyStxVnULbq5YVm6kBpjZM6HMUZrspSMP4MjKrTCN4UnFpHDnjV7",
  "key14": "4pKat5hm9xGRMoDK6ZFkco8uTWhYHwSMghMtUj5tCKiKTWD3ZyzhE5V4tijRkRiQshiJLQAUtT2BGJMKPscGXGQX",
  "key15": "4WAGPp7vFkNYJHEgCQPDc2FXR5Ct1eh8Pqbosn8vhXRhAA5EVgDJB3QUTCopP8GR6DctV4Yqm8Nw3yoaG25K127A",
  "key16": "wmNmzGrjZ8EmRJitnNLrpF3y7mHzQpBiVt6E2tjAp3Z54bUpkkmFKVjx5USJaYeR5whxZRkfied8aYyPTjboAaG",
  "key17": "2tuJxpvSV1gvyywGo3gkYq1DuDC3xVQpTwBXMZKk5DUXjy5dpZnp1Gtps6yxs4rZpGkCsTMBiqfyjrF6ka6N2BTg",
  "key18": "3omH2tGnvTmY9WxWDZ6fiRVMBwRZnbXVzAie6zqHDHqb6mTkj2qdPru4z2sJ2AvTpV1shvN2FVCkGN882Qf8QXwG",
  "key19": "5F4KZZQWXY34EMfPZ1JHDAkqbyiD74MvV7WhgquLvfEwczsjuhzQdWozT4SaD1m7imq45DsWDgyN6Nk2vtTj1BcK",
  "key20": "2qrBf3jrCnAZUtK4xnuJux7hf1u5FmWDdP2s7t4Y7iWz9azDaKt7HD86LhKsSnPeisN11YhQLxMgEzNwkThTBisR",
  "key21": "3KmmDfPhva4dC9rvBpayAUEdExg3fQpQ37gqWLYwYfaWudXfzCKeL1LmgXTgB5MZetZ44VRoULaEvxoRvayVgkFQ",
  "key22": "5V7Dpgy4L7MqgaJ8c5k61vX4JBg3KmpxSjkmpft9DYKNr6Ts9NKS3cSPtMfruttUvjaHk2d1jAcKm518KVDy4ZJD",
  "key23": "2yes6mZYx1KB1GPno1knfUDBWMDofZmYU8NC1KjMHqpF57Z5xQ8b1L1QG5vuo3BPvQP3H9KYDeF4i5bhi5Ys2cMQ",
  "key24": "UTTomFq9FHGxMA4VN9RebREq9bAjXTqyqqmLy5Uwx8pQHRcyhW5oNuB1nwwCjLH65NrFKUS35nnUuWZr484Nb8P",
  "key25": "4bLfm37aiXpQGSsrXjY7Gzkx8TwNVkngT7Essz9ApXQwUrUtuKcprXZ32df41sJ8SVVXguZrTJmjxznfcRACZv2B",
  "key26": "2eTLPGEwHf8tLpSk6xHTobsHPS6YG6fxHJxNkbgsnux2oS118gxQ2j3Gans8tASnxwobxU287PecZWQu7k1PtMrN",
  "key27": "5DfYVjqUDmHLJvRgucmbWiMnbfhToqXevnSjaE2UDX4AFdCoVyT7AYfdLCxJ6mQNM5yn58RZNMj7ozoKXigxd9f6",
  "key28": "4ybsCZENc7BcEA27sUB9d346HYCQu5SrHFdNbwN6qn26KT8KEsqxpdQkuGa5S2jES6q2TCZ8UPH6LZFrMMHFP5nz",
  "key29": "4GRbwnzMPq3kp6mkeLF36MYJ8a1pxm48qjn6S5XvADCjYYSrytyAa9vAn5LJ9vd6syCj2fmKUpn4oBsZsdtDxTKs",
  "key30": "xS2PxZvyGZijTfVB17NC51UUvkGg4kpUNDAKidpRm6bkrWppN5qquk69UrsCMcRixHzfGNkXqdF1N6bhU4cbMvX",
  "key31": "3HwaXdqXVJK87n2Sc563drHBWizh1JAFdxtMeqpBnxUhcWetQ4WmEQRsYB7FxoS4SznPhJfgTp3JRSa9AZRGse8s",
  "key32": "2MDRyGd45tKFgS18DWUpKEcRQvszN5u2UN9K3cF8iL2mX7r68VyLcLeKyD6RJkECxLxRSc8paHhVrxkFPf2rVb5S",
  "key33": "7waGRJmw1UkF187MdRVdUJ8CPokQM5WWD1wztPpqikYtyZDLE71FAHcQxMmdeDpFDFKxPWRUMfXTKMjgas2qnXi",
  "key34": "3vZcDf96jJRL54fDXAPop3FDqixkR7mA6ygppUhuphDs8U421FUtyY1GwU7Bze3RFff7YisC4CDz45ad92Bn1HMM",
  "key35": "5yi9zZCga5odCWHrbLPm1MWQftHRVYG9VCYihC1UDMdQ8w3uyeHzHYFJJo6wuM7emqJKPpKzFQo4FMAbnwSFd7Bm",
  "key36": "5F5ZQRSQQRLcDp5wtrTQybNS96JMd7i3d5rrX3kTnjY9Pdx9qmTrJjX1ZEDF18xhTv2Qs5TQVDeCd9LaDiJokDQN",
  "key37": "34QUD779UmnvC2sXS46UtuojzxjQap2NE4mna8279xBM75ej3DgUk51tunw2uTxQnss6Q7ZHP9XZWxKpWSHDsqRi",
  "key38": "42hCefXgx7bRotX1zD4Eh4aW6iWw91yiGNiFCqkZWjr9cS918hfYBA5NyP7M5vDGzdFAAY2C3A5VP5mAec6pRgm3",
  "key39": "4rEzeEMYQpCHgVTmbApw2GU3J5YQxuGcGETFXXhGS4FbnTtP6P8tNkH7MGB6HWc4jgPLz5Uue8vKtEDdssW4nye1",
  "key40": "4WeGdWoD7C2cm3QnAFB7MMMKwh44boaNguRv6ZzxsXNTa6H8jcUXvWRDMfXafzX9ZATuY5XGRMs4u5vpBJKyMCqh"
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
