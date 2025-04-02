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
    "3gkJF2ZtdJaidf86jAsp1uod1fMpPLeF2b4Kq1wA2sPAUPmLmmHsFfmEjVdZVa6aXbxhsn45hMYyz4orHAkE8yJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dh1qjA2d7anFnPJdTpnT7PQcrLsayHewcbUkFxndbP53yWEZr8dMbX8vAUqZtdevYG7JoRhSGD3GoHJ2Cjc1oxf",
  "key1": "ddB8TF126bZHLQvHyhrZtq7bZNhiUajrjKsKzpPnkeRrSUsrBBGeHL3bppCyEb8WkT1SBd6W7Xw5b6TV1o5C1vs",
  "key2": "2Uu88DWLikemLYxLDFM5HkSbe1iDqQ3Gt3ft49xHtfvGVv3wZQ4qqo5fUFA3GdWytJXAoPehMCVUbKND7aiAeT9t",
  "key3": "5c5DzeJGvDCiXpi9AaGkBpBNnegEE7CufwbdpjMFFPVuwARC8hp54VWGjmwu5mHNuwKSCPF2XXpXY5f9bqKEKpnv",
  "key4": "GB5UXyP2Kdi1angjR7K8YBmjUxpDhZydpALMw3CWk49VkedrFJpnqtUDauwS93ibK4Hg8PvqbzKYWifchsGhzZt",
  "key5": "5vSRej9ESCtesZnbqkFztAuTd6SfpaFGefTSRpd4eziHtFDKeN5Fcr4K6Q9GKqBfF2F4PKB5CCWow9jGmm9owzAn",
  "key6": "5UyMoSMM9kNpA7RyVb5pc52CDVfkGhLFYCA6w8NQkWvbgASEDGXoaUYvCF5Pfpn6xQYcQUZiyV224fZ5kSBCpsVh",
  "key7": "64yr5EGntHzSQqNdBKDvjzP9cekcyvgSXDyVJ18T2SM7mD2GRJS4G4Zsorp8fUEEMQdqXBifYaFQhFWfEERKFPMi",
  "key8": "wjB7DJsnaaVx5R6E74U4oCkwNPqj1MLxuaZuVHSjBiMfVmcmoA8Sq49UwYn9U3QRfqcJNP5HyP7fNjYyETdEXRY",
  "key9": "ZQS4ZGTzLD2mJamQB9PTVyqBbn2bfw3WJZDFQbP49ekxQzfY7CHbzAS99ZZ5saqiUDJTWQJkCcJxtTa4uBXceWd",
  "key10": "1ZeXP7B9nBtAqimJhLU1RiSfitaeDFyQEDTQQshTmoJyASCvjH3Lj9CxF9WHNzGVfioNsCW9g2PJcNNGk88FB2G",
  "key11": "2ykauXbPqXHv4QMK4LUGFrGErSARCEzojDzkmd5fjHUBRBYAwdb6y617RJzER74vALnB4qGhhK4VpkTbyTaSoqVX",
  "key12": "2X7biZ5YJ1TboHF48yhskegqcN58gf9M6SPZtGKUgtfctefE3UtHcoK4TK1ZCodiYi9iR9gbz8awnRQi5k5JVVgc",
  "key13": "42PBcDL4We7crCRgHNuttx4DuuBMDdSzs5ovG4Wjem9SiNtcu6fmYNDcz42VPBPxGjvWym6LRXXxicvbQ9XXJQZy",
  "key14": "qtGMSQZ8fv92MXwNm5qsF1dimtVZEoYaEAhEez4yHqAHLqAdcvNH5ojtMEAhRbUpJ9DdQWC7vpZvbE8iq97cj7Z",
  "key15": "57xMwffFNcufsTsUig6bbbQm5t7Xb39Tybh8NXTJxL5RCaPfdPQStYD7GCxeLNYLWoCkB6ERsd7bZXraYyDXNDGb",
  "key16": "2nsThxU4nQ61byVEZfuBbTrbGitsAeM8hT8KshSWVj6uC6qjDhkXtrkDNFZ73WBtujLGch6bL1PLXzWN4Tb4aEB1",
  "key17": "3aJXqh1gSAUA8e8f1wXDgqALs3jvhW6ZHDD6ZhbokStYZDyNyp4vAT9TZaAM3YWBA1rP9RmMmDnS9gjsPSf8r7yL",
  "key18": "1Uikwq5z6yNhsQtXfdKKXL6Dsfbumatyu1r3ZCmfoQag72F5tU6HJtTKi3SH8QzwprF9pRr4cXJqE5bi5N9L5dU",
  "key19": "bFd7sw2CcnG8XGgCnkGJdTkYy9rf1efuUzBTHqyPaRa8uwTLRtgL9ddwkqMyb37Ppn4d53gRczkzjVwtgbPMpTT",
  "key20": "eRTG9YzJZo4B4sqHhfBXHukuT5VrGvkyqVgw6NrEMZNmbafkApDvZhcZZgVvw1vPb7ScjUbhrXTvW4oE932ePdX",
  "key21": "5nVyBW547Zj62PxXGZiCEBd2avMKgs3yUnFspxYfE8J5ietJYojinqiN1AyzV3tLHMQVwWXfkLymNb5UWBMS6tih",
  "key22": "5rJimENRkrhVfGQFczCvnFc4jmWK2ZpzUVLHwd1oMSmSCcanx3dLaudVcxRy6hvYjbGbSMurwh2MxPXUn4der5cP",
  "key23": "5oNtSFsoii2hoEFrx4sRBAqvLupUiQ1kM1EVt7nT6xShqRUmADqkWzAqqK5xVSytkdJCe55VLBwQjm1fy4XdRanw",
  "key24": "DdMcNZXjYhVb2mykuiHQ5BFXAK5WmhWQzTSyqoAViSqKwvkumZNnQUAa9nmVQiC73RUbxGjCSSz8iJG8UxSP4SH",
  "key25": "32DZqgqMKXX93soKjP7MY7pgUZYMeXz4WRiTzeckvtCxUkdanLtbCCjrEKeWsQmHJLtWT3F6zMaJBBrAXnyWkYxY",
  "key26": "53ctGpgsecosWVWgWngXpokvaqtLjTgpU25pjgyoGeHThpBYBzKuwkRg68gHbeBzrqf9j2cp5wgSCpPjKr8kyPBK",
  "key27": "38ghzscrQbVkWEDY4n3tkwhHi9h4v6ikqQ2wY2PuJeYN6CmEq31DESx2KqBeRJ2v8pbMgSwyk3aAhTC3Ro9adRyJ",
  "key28": "5DEGx3tQzbYotwCcMA2888FHqRqEBnm8b5gdcNJemigYTxMExFrtQ88VFBPhFCSYHnQyFCQ4SpDMrfdm1jbsmCRk",
  "key29": "c6cWkw2MBx2fj8ZcnEk2BXE4toNkEHkiyUBE6wZdG53zxL9rwv8PjdVQC1szmxhfUW4DbpZkuf6R7o3mG6v9zdK",
  "key30": "gMpcRddikdAXY7cxn77yQeRFTE769fpPn4h4gMDK8PGesg1J7QJfmffBnebZt4z8WqiLkdJHKVjoZmHi4FjRDXQ",
  "key31": "3x9Ju78WMNXK8idjzHTzbg4sm8s4vE6dp7qXpBvR3JNLR2cagBN6ojfrTScSATypjFwpqLvpMShojQ7jdQJnw5Xn",
  "key32": "3R56YRWjCwfG5oMzA89fxHz4cTjTFzG9CqQT93XXUyGQxVHLsutxxqpR1rknysdKZUToqcUAuSwAKFzKtQ5LsYbg",
  "key33": "CjoznytLDyzPhuChTcZ2a9kFbiSfAQZo3coM1waT86gux5DCDCyA7UJL2M1gokwGXHZCbmTFn9WxqntJ7oc5H56",
  "key34": "oMwirMWwJcGofGMEbdLRzQwX1JapPvHRMKK2ReB9Lax8Bc2sMJkwmfpmtj7jtFbcB1PQWRFRU73kgFG9S2Ug83B",
  "key35": "2nmTQhBvPhGqzYDYnKdmVrwNrtDDzUbh4qqmFJLt6CQwzks2mZzTCKi27YfzJM1Mh8xqj9mUjKsHC49X7eZRT37e",
  "key36": "2othxQamVEwpznfN4exsUHbMjCywDVtMKve7nwYNRZvZzUoG4kqpe5LfVXHTtoDWLJ7svjU2G9YXxHEDm2QCW9wt",
  "key37": "5ZKApM6jjwDBbqT4Tf2sGs9H1d4Co9QcyuH7e5V8tnoBRoF2NgomoqTmibA3NSCDpegmvLJt7xHJ95GyDzMDZmMN",
  "key38": "58r8ZvmaaScx2pEsPSvBgMcSs2X6gevDitRjVufZhN2GAsRmyJbQgGcxmvUBVZbgE5ZmmEsFuHHE6j8AvCqan5ep"
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
