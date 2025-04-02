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
    "13oxjzQYtNCxonPf3L5CXhKsAbD4CGb8JJ815aTmshsdBC2XygyWPXxJu4hYTEEC9DRu6ixaxy64sLn9Uo8dir5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DvrDb9iXZuzQZKYGqy6dd6XQrN84H5kRj7qeaVGjY9R6Wt8nqKmEr5rbJokocTPeeoWGnghYBKWM8djXprjJCf3",
  "key1": "3MHniPF3a29JcaSsssiPCXoXdqizhGEKtDUnQo9yb36YE2T8DsQubUnvAYWwRgNXW4o51b1zwb5YxigJC2yLiadQ",
  "key2": "4JVKLGTQ5QHHEaMKunj5bKmo7bhze6rcLFHcKN1rmeBNJ5B1zcSsb46qyS3A2H8BrvsM8ojDVt6edEj55Sg2e34X",
  "key3": "3tptE6pQM6vtGbwsqn1oS3HfAGWxgj5gXn1uo56GHR9xcjngQgNhAXWN8jnx8LfdeDUHUWoW7M4Ft19UASt4H4nM",
  "key4": "2f6TfLJrnk18J35FQcDd8poopkLJ7beqBBrAaRsu9ybFHSN8oG66ZqXpR2VgyAuaZXxq4mHZd9ysPJn79uiqqH21",
  "key5": "6bwcxiXFX2HxHvgnzWTbVftuCbAGYs9F5ts6716ekfWemYjU4nSjAD5X5qu4dmXgRDka9Xf6TXKxRCJt17MQ3gU",
  "key6": "4yyVyvKA9fbm5knKus3ptcHGa5HkznRyNLnccrVUmMKpX7W3gnW48bfHGGtmch8XJEjsVtjcq6x2Jst6ibtaYrPy",
  "key7": "4P7PgA3GDNQK6W5WqAebYkKbshdsXWBGgtUSSpbiJCoWR5MRisMe8TMaJaMvkNfNNFMAjDtDWAFHrHoXe4BbAgLB",
  "key8": "BSdpXuQL7cdL9jZnyPy1kZRus5neir757tF4aseBqAJM96WscVGFcYxYqutVyNcVJG5T36jXWggcEzENzXMeF8X",
  "key9": "5t6BXxhHXS7dZ2HvBeC17v3hhux23tsDiPAAHNesDqCNad823PvwDD5oUNfr2ZDT83gsocFEmpbBx18qBhmmoddQ",
  "key10": "5hxjFRBzxGX6DSQaZ9QRS8BeevSYPjiiN6bExB566pw2mgtNnvtUeUgeSB3PxNJMrGm1RPGwrguYsXYCKQqQ4FaF",
  "key11": "2aYrBKQUdrvuKUqHxp82ckdCsNrnNEyh3qEFcoRW9xAzHkFnE3gkyrRhHHVn2GwWCGAPVmzcFy9zeDB7AoaVmMss",
  "key12": "5b5CQKvmRY25YoYoiqhUHKn4Bcna2LQBaMfrwk9A4wAqECage6839AT4eHqMNd31z1VK5a1x6Rimj89roq1PsSfm",
  "key13": "N8mYdJXeaAA7tz68hsP4iTDB3gmSewE3aDJC9kyNn1Y3xZLDAxqGGejwX7iV9PHi3xr2Ty3gTtk2CtqcEdtJgUT",
  "key14": "hiqH5hPDQsdVLW5NuF2aZp1A4f5Wu3tvhq7UR6AYhsskmo6KitsHN1xkV1T3kvV6ZuXeGp6goPy9byBbAJGMuJS",
  "key15": "3kPGBsQKiPa9dzFCa9zTBQUqUnkCjLRC9cj8Z4WatJTdAgxWBMq74VdcBqZCdeJroxF2rU7dgagQ1tvBDEbpci8m",
  "key16": "4VRqPtApJo56Q9JacRAsioUFvrdaWh962UeorwVU82W3og8RCd1J16jF9xdEuryyhLcUf77FdfQ3EGpf2LfH1ntw",
  "key17": "5T5sbQLb5oSMKUDr6z4pcitzXrfiThNsx9k5gFARAVRUHQRGPdRHf8yhzqRcqoYBavQqAtvsody5zuzWKnLs23jS",
  "key18": "3o2ciUSqkUgMfG4UPKTtgktG9BsLQJEznPQjDnRggKGbnBEjsk4TfS4RmTVUVYUPNNDvistL2MDewVUxnMgzmhQL",
  "key19": "4Bi5883xANhKH61WvYVmp1uuJZrxj3mokY93VCz3Ea4h8cX1srbeTW4cbFoihdmzuKJYvGXoCiirdLAcjiS6AeVu",
  "key20": "2afaMgPQSSMmdjcfoGBsz3qwHHiUPgH61oFkj54C4bkKALiKYHpzqj2yvfDkFtbbEYyJY5STUU9NzYocEyhVzkj",
  "key21": "2tLQYXvqsVdipC8Y8oF6pFpgg1XKpyT4dXe2yhn4iaxr44saU5W1LT3RDRXpMVnksBPYFWtF8sgEX2SjAtRactRS",
  "key22": "24dZuVkcCkH5gducpQeC8annzN4Ff7pq91KNNz62E1dPmvHofXphkSBh1BkmJNYY2CeLksJ2t62vj662JpaRbdz1",
  "key23": "4K4qKAV8poRjTAUjLS3ouNqnm5pBKPP5srbkaMZZzJdKDizwbdUhyzLzfHBjGDKVt5TooTKiWgF8XN9GtpMby5VY",
  "key24": "2R4mwNdwuqSM6FKj81LJoCmcaxd8q2dYMQrCdAQ4AikQNWJZ37AztcQcQ9m88H43TAmnmvPh8Ywc4NoaXx9mMEEd",
  "key25": "yKoNcLYgrKEZqkhC9upA9abrzkEdxWoJwPKsExRNR4AMbqF5qX2Qa9Vu5XrSbZFLDCkEeBGXa9LZh3Jw6H1NzED",
  "key26": "3CbV8xcGW3PGv8GWp9qEhMjn9ToqPTv11gmsgzo1h3QmkrDA5QTtGkeFBUxCHFBrRv7pFyNFr579u5uMVBY232gA",
  "key27": "5BcqVgE6fjmZYzGMBeP3dzsCGCusRYAMzDbhVfwTdnF8AR3k6XnP2v21KJ2s5mmkreZK1L1L8y8YdhPv1DzcKk17",
  "key28": "5e1j3ipEw3RnmELUKTx5jPKSh5g88JRkxXYR6o9vmY9RUGYmddhW2usPQPcUyr2qbEZvny9n7zpq2s9mwL2ujqWZ",
  "key29": "66Ha5KcnQMDTZtgGxkqBG9RMJJXkQFq7JegdAHsYhMe6z2aQDjDp4LTjJeUu2pxNNNLPGAJT1xUj2tw9wyFj9bSN",
  "key30": "4s1YjbQqj9Fb6i5QKERgMkq4ioranhMNGVygPsGPSM1yDAnmgHutjwpUkryYRaWHLh4AKkhtAzT5iRsfYQQ1MX6q",
  "key31": "2ehRNdXhsdRdxhNw5oikNE7yjxV6Hc5JRqiAaax9iBvbweGuT4B34fnJg3sH1RRAsWfJJinjamUk7o571NxpNp9r",
  "key32": "2VvEijofVGV7dVM6pv26qrDESwLibRJBGRrNUeAMFFRcsS5D94xzmhkUkqnhv7XmR5KMWL1gaPHAUsFta4aMM55B",
  "key33": "HQqU9GpRtsJK67tk9FLAaXM5ctfwSoLYqS5uk8wauzgeGKgM13FuwJKwftbfAMu6cWPmutPyaK9WbgXKPLRahzB",
  "key34": "2CKmDsSLktoGP9DKNWJyEfPNpe5gF8K3BJxu7Jmj49fWbAKtspL6qBuvAozJ8Bt6nWYWbgdpHP8FFA8FFmEzF9vh",
  "key35": "2mYvZH3KMEs1W1DcJse8gKbPdAeuBTVR2w7MSjfb6RtcQtA31ySB36XGfR83RMi7Lwys6SN1iYqNeTfhnZj6K2qr",
  "key36": "2LZm7bXT5eRCa6awigewVK45TnRTstkZnrDaBKA5w4vvNDYhxLVpJRKEn3epAWVYAFvP8qS1ruA6X6qTyG34Kr1K",
  "key37": "iENkDEor8LcsTb8vwAbeGqe5SeTqBeoso7KMogEAXJ8pAcQo89gKxYzTNmN83ikePeZjbV4UFGyCDyrsAVGQN5g",
  "key38": "3zoP3KPqKDbFJ3xQDn3qet2hqCc6sFmrSmhk9THqz5jVs7fvbFbaPzQNjnEYPM5dnn4GUBnQSEV8FJevWhjFAdB8",
  "key39": "2QX3q6sgt5YWCdPHoRHmVUkgQn8DgQi9tvWGZtCJz9AxRnyuMtFNM7A66qtvmu5Fh8vATdgAgDxqZeHi1J21CAGi",
  "key40": "3wXZDThiuQHEDch8sJgGNC3T7ivrgfNPvn4XEdusQBAgKAEyFDwRXHbDc3BaGs64FmcNneGhGgV3JZKiLxucj6J8",
  "key41": "3mXcDEFLRW4HHsAmrZUE9yeXZi9LncxMYWoUS3iLvCafQasoJ5BR4raASxHibqG8idARRjY9rAbz4DHiA4NBB8nr"
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
