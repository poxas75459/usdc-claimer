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
    "38HZu7dZCMk4k7GPc1BSZp8PQCPX3f2aScZHKCGyuH22vRrYYT9DvM1ugD5BHNT2i79YhgQzTykeAc51WjqfhuC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ELXBq5M62dD5dzfztHqDmCf9wcVZ6UFUqJnEKcfFd4QodA9iwiEAAWTbsrezXZMDCnsmk23PtoqFJpM3ogzrZx4",
  "key1": "hHv3nFcEqejNnL66iJwCUVsmXcHuusnHvNx3Jyg9vxPV58tXWNv1sKymtL4Td8xjYDS6NF7dGCTamaGBremMCS8",
  "key2": "4ZW746e2RzWVyyZhqMHi528k5bh2zGt4ccaCfJUVuGZSw3r1dRqGEnBJqPjGFhgNobmRbLkwDrqPznhMcHAZEd11",
  "key3": "2QBgoat1AayUZebTE2koNv7nSuVku2kruFmhnurSqhghyYg4uUVpERn31QThyhjDB4QyQvfP8j1fsaP2aaVG7hga",
  "key4": "2Qcts18BQQnYcebjJPgkTPS1Pce1WW2wtpxKudVDWCtBCH1SZ5htYg4ZJaXw3enGfZPyuVAcPBdTtb5vW3zx6KfN",
  "key5": "2UoQf8yy5Rm7H7jDRpmgVn5MF3nrd2SrhN5WLQPpY9RHpZxfKXhg3VgRQrW4UpiiFPbDzXqXsh56sHhvftxzANFj",
  "key6": "5Xe9f51i6FMmvYStwmE7itQVVT6K84hfA56HdjbodSkW9taaa5nEV4yURbugDd2bmZtZAsZSHuwt8JTzUt1PrDJR",
  "key7": "3EKDn536Hn8MrqYWmzSibsPYVMjKFzTzYWAfhsdGhTe3ujSacyDzyttxsCduvuaSki7VfXNRJrjC45rWYNzW6EL5",
  "key8": "4MttqvVKpwbhmAZoUSMgu5axe1i2FpHLu47J7cVyiNAK6QQrEhj5vvyisushfsctaYzUbMeGv81UvpLMQjweHQBu",
  "key9": "3GpJ7TMePVqRyqxBdZADg2Et1iuSdmrzhfBiw29ezXVLuQJnDhvjz1Y61nv7JJTeZafbbymqezG3hN2EqnTvvAvB",
  "key10": "5x4kJMkjwzRL9FvXQDLJNZ7SSeVPu2FirxTmtiVGqQeB8kNKpDBAtpLxAKsKe7bSP3PNHj9PDhh36Caw6ZSy3jbu",
  "key11": "5KVzMB9W3gmgW5nJv9DqQbqcUC4qQd15n3WS5RwjkCRRahCtp5PYsW24Lz4Kw2SbYRZ7LWpbcF5j5jfqwDhBdZeS",
  "key12": "2neUG2QzLTb7x9wnfcDv2YBibWFhcjdqbGmfS6zWfRrVqPtVouPVuGUMAF3YiZ5LdmobLZ1L8t7ob67Akgjk8Tmw",
  "key13": "472rG1VfxxD2vDixZMaBfHcYcDXpXDnPru5wX8ir1yoGA7wcPanaBkchwUk8qrsrHLYwmhEtHPt71dXd7WbS3W5J",
  "key14": "3dmZGG4ECwhUtSwZ5GXaPTuG87kB9nQR7iHbJJWVT7Dmr4GtdRFi8T1y56aRad4pfHbH26Q4F5atDtnTB6nvyDL3",
  "key15": "5Z1cuETNZoinQTETENsWTKHgaLGJbUHHKCVzSmbX2HNim8yZE7XHWffLzcD34JYYa775edrs5NA6bVbB6tV2WKd1",
  "key16": "cn6MF4kvpsuyGyRzAFpgJUrWYuxmJps5YAGrXnK5LHTMEwqAjgtqSJzW8naCdbuBuNeKpmxTGcZhd2kwqk7AF99",
  "key17": "DunpiRJTGY9gcHLY8pmXkc1sKij3cBsx3sFNZF7EiVSuDtxXHL1C9X6GKd1FbS3UCgRYjZ9md9n5JTJTAFtqXcS",
  "key18": "5JGpHQwziiasMhHh4o2S9thtrvkeecMXWrSCiewk2dQPVf1EKrtvBbUYdWt2JzeDx4xjv6MZxkGkinwnAjjnEnAk",
  "key19": "67Y7Dkkm823CnAgKeNpSjHCuQtY8QSzWScjth8broBPFwUWfkdKjf8Bx9WZqfHyjz8Dth93SxVXSj887CjG47KQ",
  "key20": "toxXEEfsmqRzrf7uTae3SU4agLjXqRJMoLC8mRYE5mt2T542A2gHAr7ZeMgfShwAK1jLsdeA7f3oNZDtg8bW11n",
  "key21": "3hA7ZHLj4tAn1GFjT7HXjoLNV3ap5MZQKb69ZeCoYQob3QvzDBz6CYyE3dGafAMMjhVu1nwx7EAxzwEsvXY1zK7o",
  "key22": "5qv42ZSH94jS5Dqj4y1gvafYSEAmVrUcpJ6YDLp5EzvijvEUKhvCNisExAMai6pNQ6tbHuovUe2aADxWjKemedEU",
  "key23": "3eN1bVAW6ciCApMjbGUWmMojTxaZjpvVqytmiwnLNfDekb8SF1b5p1KibD8eBPeDWf4PTDJyf24Aod3rxSa9Bgu",
  "key24": "5xgvns4E8QWZRm9ax95ecHJB6DjiCL7qGfzSm6iA51WH439mwuUg9zs5wdEUo9eWFMiZ1sPxGjtmHN7BtDm5gdwm",
  "key25": "2nH2EbTL1tskTtqFhwxDeTF4VViBeDdbxvazhGb43yApfmYkQ6i1pKB9gpDZnMdP8pJ9DkCZz4eX7Sv9CegSYujF",
  "key26": "yQZujXWw9BTmbrR6HwLzMLn2stcQtuYKhv7uvEZsoHxEkzSZVfLRF1869QiRo9R37aQ5fvwWieYtfEerhmtdBq7",
  "key27": "UxyM8mKSocibSWZYP9RYTXxZpEeJZme9PXgp1AaMtn4Q6Q6NLgJC79pVbGHYMDF5U55bUrDyu3B3fDdguBVyws8",
  "key28": "5TfWhEFRq9HRXuGqPD5iAD8QXWrmRjpxsRvQr9z6z519xC4KTbnQYaHL9TYp4L9ahKHrLmVspiieT1s81CyFeJoA",
  "key29": "JKUyckhqP5wvKyqKNRwipKSC52e2P9aMQxF78AVXkiXD6cXPuNdtjJBEJNqSogmxFoNkbsAxFJhTEMzcrp15h9d",
  "key30": "dLB7qF9oR5yYbYi8CnkkAi986kXgmbwFdx34uukcacRWd8TDjEbmog1wDrVLfKzwBSCumAQFteJ5FihFsFVMRjR",
  "key31": "5koXNE75RFTNAHFVJ3URew8UaJq7RzybJxWZMSrX8HQv8Nkm6DBVMccGq1G3yPPKEK9bkdVetVS6LcdRXdQEtFJb",
  "key32": "5Xa8Ps5fbzFjnByTXRbEKhF5xhF31JrPVv8hE4UTo5oZNT8HCx7774yFBGudyHrTm7zyFTXt43SKeKbw3y8bg8pb",
  "key33": "3zrtbFKSftq6UAS56LSC5cs9QnpBUP4XUu9Sr4w8YHAerL9PeC2Sr3miDo1v1mS4uwnmsRNv8zYUguGZRnMTVUQb",
  "key34": "4VR6gpPbDRkxqux8E4PUUafnt7wowrx46uf9UFr1gtefvMjkxvVjKFm4QBNy4nFAsgCfaxU5XetPuQUzR12YzNmC",
  "key35": "3KZGoFfBBaLHgvX3Fp357UTKoMzZhzraWDZE4hApZLBqGs65gUy6tdJLq1JU6Jwmvyhhvy38ndrKvx4okdN4KYEx",
  "key36": "5w8dx7xZVA4LRGkuqFoAVe8UHN3ZwhRShVTp16qvjD3mcgjtBrrCch9jdxXiatHoRgo8SLKHiHg56annt1PsXXUA",
  "key37": "5c8z8immYQ4GHg1VxmfrZNF18WUteega8FXSZLF3Ggp9Rb5L5GThUL8v17admsto4PSvRWEjVoAM5mP9r92MqnF5",
  "key38": "5w3BSjZ7BpGNFeDME7YjMwuheaFbHS3mcgVVveJ2sWzFG4TaeNa51BJPdpv2ERTUWujRp88Z3X7LZbnY4pqFvYpy",
  "key39": "463UtrKCeV2nkFkXRR5eJDsoKJ32tx6serstKuQuXWGJG8xjj5V4ToZ9dYvxC79TsY3dgq9NxcV3ySdq287Ju9SD",
  "key40": "mtagv2gbmgpcZvPXcamgmGWvKs9cyu6zm8FKWyCUiVuhukDMyan5k6Fuje9QFepFwnFksgWAAHBtDeVpQjEWGGC",
  "key41": "i3RmTiaHFH3BH5gZbFkwcA3asz2zEWsKjCQ7yvXi5Mt6uZ1v8cfL1b3BpxUL5eDFYVHjvmEY8mN1Te3aXzJ7qP2",
  "key42": "2voLFFWbVMh1Q3cyuZnxg8gk5ic8rXB3R4s9mPjpStvqyLv2otzepVuktx81L1m41L6JMphPtVCvrAKgo9LQwrxq",
  "key43": "4dUN8w19TyVooRjpt3tucno7u5W8QtTofNcC1dBT2XtAVdcAjBUANEJZtZrAMmXVQQD3iA61cFqknSaQrWRBAF4r",
  "key44": "wiyNeKmnMKiCNZVkqsziKpTRMqQGbXSTJrJime95DKjChEzLRHLw8E6mADtRkxktDh9VPXS3Vi6t6XFw8DtVrWP"
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
