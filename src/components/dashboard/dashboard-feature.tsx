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
    "2f8R2rWX7eDm5RtggTsEMTvL9o1qTteAi2qjowx5JKYBXyFixt6qWW8k1UgJdahu3mEMC6d7N2ivSTueb9QCptdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4epQ9dJQ2HFSAfprZkH8wd6FMRrFDzGJvsNpFxiomvYERqMgkfqpXd3o9iTFe5rEX13vsm8G2wZFtESNqJEbzcDr",
  "key1": "3w4F2v1QEBid4qWKNmHBxFPxv2cZKB3c8ihtvovkXyxQUPvfcc8sqssCfQY1ocKLoKKdz657fHK9xkvB2FbULFQT",
  "key2": "b53Uif5MD9CVJswr6LUfyJjj3Q3dB27quhiyhAo9g32Emkqnd8nCUWXv8V4iLq7DS2s7GT28WsPsZYCn7Sm8csn",
  "key3": "2HZ6vBGchsS5jMrRwctXWDMaeJFYh8HVAfGPyAUsXbk8w5jcadfzZdxNHqdtuRSJNLEcYuL4hgkgzg53RfJxLnba",
  "key4": "3eRMZSHX7gmXH67RCyWXKMtgQuuKQsPRJXUbVfqMWLwSXzwieabUHtt1VQkJPJfFYvnn9q1CJ1uKXqtRnepg26Uo",
  "key5": "49WdhpoAhgK4c9ccqNEc4XHKv7mTZn7sdYVtSGyu6rB5CL7cDTCPfRiRBUVqJRBWds7e5FXuhsKwhvfz6Bv66r3B",
  "key6": "2qX56m2uUQ8meYE3VwSGykCTg19KfHnsZcs8euS6Jwz6UmDAoCvvb5e6a4ntMxcU84WvzzNNiLJ7g9BSbaK7jprg",
  "key7": "57Ec2T2RTu5iJiKSqBZxvuDUBTWzAGi2edsHFvhUMdKNviiDncw83HPcBUTcBDpia2eEFfNJFTL3jah7csMobANP",
  "key8": "2n4QWxqxPXLH7kskFU1id4YUmmzb3Xdfi65Z3U1xy4CvkeWKqwCvJactSRpKT5WicrDyhd77N2TXQy2fRdX4jdfD",
  "key9": "3TY8RyEdmLTBiLUA3wrXziRBkG3K6axKEBMZmSBEnLtfoUuo7Sd11SYuYFxc41Ze2yqeVCzisJEjaVZ2VHSnV6tE",
  "key10": "m91YpC3D1iwvMUfmFSWXFERMuHtX5ChKzA9bm8pmhFCYZLRVFHrxFbDPCrRvpNy8J1Kz13PsmzjyUbiFiN3CwQA",
  "key11": "3WutDwKx58aLRTKMWev677onTiWzvAyE1xFGqnDqjBN5cNNx1F7c4XkCrSRWE9uc88mFXBoCJnXpSturzEMkfcou",
  "key12": "23ou8czuwBo6L3XyAyZ5aJdhZarU8fBHrv3UsG5uLTvRS1R3N4D116vS7bwZjQUAXzY8P9bSh5XTfUAjntv1cog9",
  "key13": "2FWy6KMDFqYdtRrAowvz87LtWE6Yfs7KDiFovYZQSbG7dJfizSLttg4kw8QGpWg38W9GaBmfKPcDga5PEHhDfMcV",
  "key14": "bxGJ57PFRKGs4RZYtFtRKGeLpcrm84vpXjAFgehcyR3fMFRtvVSTxrH7MsVWc9MMhaQQeaZxMuH92a2nqKmbqAE",
  "key15": "4RohHcANjDnnYSTW12GUgZJjkbexpdbSeM6mH8VX7xbXVeaniJy9NQAkXb8Jrw8MzM6jWnvQCQkPthVWgwW1yd3n",
  "key16": "5Z2MQKWG3QoTdQtnp3VA4MSy4RykjyMhSJUPNUmfWBxCFsSkJmfTEpnwKv9goGYXnLGZfSTa2BfXkiYFRHM6yLEg",
  "key17": "4srrqY4VPCNvx2VVGaoSjo7n1WnV7rRXjyPV82DBNrWhmFZACh6HRTVsFjpb47xuLjZuEaxARJ1YsCC61bTpQB6J",
  "key18": "5DmwGcQyJLrLVwCjLey2QTZG9B5C89F3x87dP7oxj9uoY5HCfcfrqLZPgzastVx91W55WfJaUd1My8FrTswF9cPU",
  "key19": "28dtM5LZyZLmfdnzMCPuTHAkwGWQEYehBPDv241F6MKV6iBHQcm47i6xNbtwzSXrQR85gKmabAesiiLrSLNu6dyK",
  "key20": "5KvMrEKPiwZgLrZgmNhcid3SmcS245TYd3qUBzh5QMRKkhB9Z6dezdwwL1GCf5hp6TUE3caG3kxLLCAajgEfmttt",
  "key21": "5miLuvYE72HocaTji2s1vKYHadjNqf5jpCebty9uDvPgPPxT6285KWHzgt8mJsTU47T8NKo749TZMv6BwpmvH2K1",
  "key22": "3QQUPm5qQcaeH92Ev28HZJvMgEWq5imJKeeH2K1X7XdqHGRDg7q79TBeiv83jYEUAzQV38D35neJh6hNuqSCyAvB",
  "key23": "3MDX48WU9kwjHsPenRQBcHyytzRePdnNz31oDXF91sEnnDCvXTzJ77YvcHrZQ5umzTavnsz51V43GM1vFBau8nci",
  "key24": "2pA6DRHg54PEwnxcz2M6Lje5H9zJWPKw369PpenErrwC3GVjdcYCdHCPgiXgcDTufzQ4zB7TWYgsQiwgtYrx2pgw",
  "key25": "22k6LeR4trHJL4htWShXRerQMwdh6DgSyNotEnVhoobt1MZSSqbRrxZTzgoNMfYfKJAbKGrthXHcWAdvV5m5unYx",
  "key26": "2j8xkmUf9LqBoqxQVd2FKF96e45yhnPJ4fb4hkMzHfU7HU2rL4RpmJLPutjtNFbsQdup89Q8bKVMbLQYhHLpWEfk",
  "key27": "XMeSoExPbZo8QUtRRq5DxCuGLR8L2gB78PfJ22xXrQxNhsBRftivYkpnDRmi24sv3DovJs74XcpKr9KxPtiq7HC",
  "key28": "3jABTkMqJ7FARPo7VL7MBpCjTFtSgfTxVEKvhmydj4rz8BM1BKFcci8Hjpqav7K23miqJDiUDbmEQ28WNsnZyyMY",
  "key29": "MCBDGETceU9ACGcjHaCYmBbTrySCxcxiJLXjMjbRXqoin8BcRmgey2JCiBLPN9dHf662KLNCw3tXMhDUkRbGdpJ",
  "key30": "3ZJY9sNqJ9Q2W869E4o31uXTwy3ZnM3d1Pwuy1r1QsNrsBENKMyPtErytvizdguiGtzP8WkvxbttdVVrQ5j95Lap",
  "key31": "UpLQm2NK9BeGsaE15YiPVLAngfWTdKH8ACRiCPLSy4FnWEqevkJGnbYaZFysoniL4Ukjk24HVaF4mtfJ1rjxuxu",
  "key32": "56uZLTem64ba15YgY5bV8DdrEoUKL9G32pwg3UN1wDZ2yGzE7XiTviKS89YYQYPRKs392GVNGmowy9W79ij7opwi",
  "key33": "2wdSbuggXX5HCyNzeFM77JybNSiXNc7vnnk5AmBNCCsqjELXpSM7BZJ1cZaL2hkx6XKh4Fkm52Aj6rdXnfLGtpRU",
  "key34": "2hPAq2cfocKDuThCgKQQB9Wq9HcTQWLbjJZ89q6PN63YXTfUX9UW54UEgUdW535692SuEthXHv7BrGhk5bTpRJ2L",
  "key35": "3WrUNUhn2ZbWznG8Sm6Z7pNT9mjEKiNgJfDf4iTXLMP3yjh4z8AZM7MNZfbtdQpJYzgUUvFQ8DBVzurBnmZE66Xb",
  "key36": "3ByCfXBYCkzsFhg35sktHcuJiNtFzz4CBSQsCQksbUqAB7LUXwRmPYSBP6xCQaZuBsYQzDFttoQFZAsgcEDEK5W9",
  "key37": "5U7bfuhNRdi2DFCexVnbRbqw5dUJbifECKihDNf4XNnN3HZvF95LMkCAecn3Za4fQGc7DpgZTSar8nWXQBwrW8Le",
  "key38": "2HXuxRNWXSfU5ZNWwTRKpXaLijxKYzRsPrQrwFHF7TY92WQqfv7JsdUZvgnMJdTzp9KgXWRZRY6FTwZFH8L29jwd",
  "key39": "5ujkRFwRkW5XRH2pCRvNmzugDH7ZtPRGksqfa6LfGMrEFAh3Ppdn7wgpiWkzAMZXrX7cwNEeqjqDVmEBNwTK5W36",
  "key40": "3oY6xWjdrf3zuwWAWfsU4iU9X8k6sJSztcFX6ioMKJzqREQuUDZVS8wuzWKghJvEspcohEWJLqDVah3Zm5UDdHye",
  "key41": "WcxiFwrvfi4wUstLY7zP3efCzhoV1u7STNxnKqGBej3DUzwMUAFmokG6MoKVxgK9AWH7B2qXe8mUs1xNaRy53rj",
  "key42": "3uCDgHzGxWseFaCcC9FzhzCrkZMFB2eedqu9ErY4RWMsvj5SKmB5BT3j9JJB5EaT9Th4R7h7BtiwHWztE9xQHiWZ"
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
