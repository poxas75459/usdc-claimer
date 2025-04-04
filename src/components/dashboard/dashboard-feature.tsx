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
    "4CsFQAy26GAbZsMsHoVP9uNvVjWK7Pf5kUadqVDN5BaNg4AExbvpu1puCap5ADUjxbTHpv9TGRLhTt7UMEk9UfuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFJL16PGUAcCnaA5jV2mNU7xJWkXSBcLXFMEsCrzxraL3cDMZk7GUNuxKy5fX6Yoj5a4Mguf5apnfEdcj5B9HUR",
  "key1": "43TdhGuJ6Q5Z1VGjZRTqEvqWYnifA8cboyq7iyc7zELNh9k6PiAFfjmoNAqSmKP7EviK4mXdqkMS9oGwWgr59Win",
  "key2": "4Vtx16SoN1Ff7W6GrMDHGphMV9MxQtHnyLqhPdNSXYpwwRVoUHb9HcS41SuAA87fdRK72gUi6RxGTykKpdnxNoJq",
  "key3": "5hvWyRonL7BuFzPqYkWcUEKoT9Adp4cXhD6otNxTwEx78fsEv1PqfvvD6RdxjHkjLJ1fjeh2YGkBQJUzwpgHwz4y",
  "key4": "2Lj8aWk3D4r7x8n97qC9YoNF7r4xvjSesCQSEqWacQazDabS2RzLTff9BLwn9HkL5deiFZPcKhVyW6yhy8KDonWr",
  "key5": "2hhFGdumNfeus2z1bksoNEW7awaGefjP2wUAVnBiRwnWPkuKSpAeSvvdfXw23HrsHfyfB2hhFqK5yAy3yj94nzBe",
  "key6": "4697VCfPhVYJz1kAVCn9bf1RmLnwiptVMn9gckSXtPHXuSAdGUeiUiV2sdNiGNm1aNiJo7c7fK6xY16a1YxCTzKe",
  "key7": "3XtVCgBinABn8q6BB6vMxFkpJ6R12EsbsEzvtQnxrGauTUK25HmDVweMPmoZzQZjaripTHgVizNHKkYETzYqv9qC",
  "key8": "wK7bsxgRUX9tBzRwSUyN38QHmVMiVh5MA4wALqhtQHbLovQvRJCxTtU54wby2WX5vQRUR1553xkD17yv4EHrrZK",
  "key9": "5pJAvMeaP2cWZbpqChj961ghfd4t7kHrxCBjXvAZQjgfY2yW4sup7nigJgR3Wpm8tDnrjAxb8rXGZ4zzkDdNexom",
  "key10": "3KLSdpih61redi45JBECGGwTsc75XKgBzShcyzuLfqQvNEBU6zRzBczfoWPkDrYdbD4hvBXX7yEnTft33Ryjq1Gv",
  "key11": "4UEvyXpNrDeStEKEAKTBiQYTVP147FtH4uYBVjiAtaJqheRkjBh9WzVw2iunxGngt4r8Ca5ryXBoJSiJXAwmxnVQ",
  "key12": "3ekJ87V4PFYBj1YPrT7PGkyLgbUoMPi8sfJbRPeX2Sc9qTe8rqGPGhrL6mW4JCFYxdZg4KFT3TwKAJpuxQJpDYds",
  "key13": "3G3FecjDaXUPgdhghrbToGjNk5tNrN8KY5DZoyGf83fNVjszAd38iGsWTkfibXNVCk6JLXu3hYMToTDjkJeoSGXC",
  "key14": "31taaYCJ1Vq5wJWoayLjUcCjqn2BTu7F6XNKtAbR4sLYZ7Q3xAbV2hFMrf6a9gDrHtTvAfu4m5CBkboHYkoUFSv4",
  "key15": "oSDLPtu7NCC4auVk4fWejPEYVy73yrdWPwLn1oR7auSXqZ2MiRTkGs2UuYXdAxDPhCyqs9QdPiqGbVSx7XvkZFd",
  "key16": "cFdEaAc8qXTC7gc2k6M1gqjWBsCG8DBcB4bWWweiKcNNziYA5bJouc6a9BmekU4oETnardnF8YosXBuWETHsAYq",
  "key17": "58pi6f57L12xptqHmTUVMM3T4uEZ7MKZi1uVdBfMuvZk3AsaU5gv2CgmQaZdAxRNLG2eP4oqbfWxYcmtqMqi9F2J",
  "key18": "4iZKs2wXECf1QvYYcLytmnwm18YwgrZsVMqVcruxvpkRfCW3z97nXtNyzYEkj28B3gGA3ijYASkxUvWP5jMHJu4Z",
  "key19": "3SoCyser2JMX5LQq9TT2h7ZLTi4H7KRjGykafvg3G927ZFLhuDXUe6CT6ZT2o8vdytK5HmPLBLDRtskDXNw2orC4",
  "key20": "24jcZYF39MKku9z3wHhs5gfDR7u4rx4cx9oKPs5C7JhjQYfZhVMVpgjRwapjMn5EYHwseFnxPgi9vG2GtBhRVMHf",
  "key21": "3BEXP4NM12ZzR6kDTa56CkwFMyjPrxpofXX3rBvydE7ohiBYiZSGj4TQtj3WbKYfmbDhADn7iBvqDf6HKw8sHqFN",
  "key22": "53GGkwTmeRefPoWvC1hGYgRfmXaCMab8NMJaMyRoD97n3NjZtCbsJKibGSqdVqfTpb5FpYkLh2jF5KDwMdmkV7UU",
  "key23": "3Pf7WxK3VCkg4tKPUc2B7j5e6gaqnLTyvp8JyiHFJyi2hadaHkumbSvVQ2GpVW4Qtjfw4JXEdGCqXMe99iE8KTWP",
  "key24": "2N3sh8FQJxMvMTsfChQkrzyjLS8hTQhRDD8bJ6gkgxsrm27wRUsdg6xZWWaCukKnP4PvPzeF2ECULCR4efSXCTnN",
  "key25": "M6iy1x7br3fU4o1wYYiRh862RVqS1GCTj3Tc3JnUpTA3gxrDx16FkTW4E3GzzW43hkrn5SEkUdVeiFey9naMsYB",
  "key26": "MggGDEyXaCteqAzuwiprjr86v8tLaL6sG3canA1nNYK51ZWrxZAjgWtVd49JWbARCDoksJ6q8qGfo2P1rM1anUY",
  "key27": "2ASffZ51PCKd9baATbNpgAfZM6ZZs8DEb9aWeNXjEnsivnhKQMK3xRByCRXeQ1cxkYYPBzjrErDUNfEhK8At4PXP",
  "key28": "2gCVXLmPszpbLHTBSuoBiCb9YNd56FALHKYeq1ziM8pDA82aqR5dB1et5VVS4oVXiyt7Yoqg45NDsBb6AafNpBck",
  "key29": "57hnq7Ev4pzUeJ2EUTDP5NT8ouQa1CKF6FVNkPj5pEmM47t5uTZT6UyMnBUMwWVoQBfnoqe1Ph2DHH9Nmf1hkafC",
  "key30": "gCVS9jLyAUEcXurH4MRZzjSMTDNV2geCay5nzrhso99aaQ5qLuZai9DR7ULzT3kgaHf7fxJVySe7x7NpR7jpViK",
  "key31": "3sBaE64XURTq1Jdkn6aRHPJaWqHHWRq9AVb6zuhgUj2abVS6AG3iF6Wmbx2d9U9z1mRAkH4oPXW2ZdnXCYUosemq",
  "key32": "3KndP9AByFbMXpD3tN4hBin6to9qrgotB8uxacwFAnuJ3t4WV5ji2AspKzxXutYBCdk1qx4dbtEFad7x3MKEGbo4",
  "key33": "4nMVHULQzcSLWTC1vMafi1Fv1ACN7B1TKPVSPQPfxhcg8wxXHrgeW827GFURaqLCwK5W4TVdA5LBixR8YNb55QZY",
  "key34": "p135YeqMrEgk38Njwp2qWXVr3PyvNpkJK3e53En2GDgChGDZcbkY8FtiapFDQLG8iX9prGfY1S6vN21j75HSHNH",
  "key35": "QeUri219NK1FFAQ1BGWkHscqHTXvaqY1sQrRErdyDuUFzv6ujdJ19E1We7u3JxF7popQ5hvucn6mdAekP7wPgdg",
  "key36": "w17LeRF6oKVPZNft7io6iXBrduxsiEJ2dD43WJ2Y25Gvdve1AcL9FKsYk6KzMw7UjtdkAs5Ag8NHwPfEtNgosBq",
  "key37": "54h8apYqPYzC1FqqkBgGdcPXYigeTCroRpNN6WX9snQTqBDoCKhzfmptkMnaq2gNTvDrxEXPFDJDa1TtoLPNurRW",
  "key38": "36kXKTxoNNHa3wFJdPdw42vFqmwkzaq3BzFWw6zHTDxPPsqcrpUWMq3wnhLBB2XqJWUra2v4WWL6mKrdwxkNWYZE",
  "key39": "62BK9q3WG1px5QCHEgBRZEPab3brrhMEe5dmuYfeybuZW6tBRR6Y4JaAqbLDzj2tCEEQk9rRzS3iSnEBPzXVR9D",
  "key40": "32L3PbrEFa3padTvmFLfT1zgw8oZf6VMkCwAzpcN3qDJBdtB9cRQPVFTBG88m72BJW4WUf64Gx2Dv9j3b2h4a8qt",
  "key41": "25nHDeCg15XLQg8vGFkCY9poyqtGHQ8RajKZPayrVh3zL4PYrgsy6eNWvZM8GJFJ3okb7Ki4PhP23zmgwWia4Ps9",
  "key42": "2wK9BBVdp1DQPKRaSmoZSML9yuF2YekdaZDed5oxnaEKsKe8zjo2f5WMdE6v3UJCP2fAmWygR2E4Xd4frjnEw8ZG"
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
