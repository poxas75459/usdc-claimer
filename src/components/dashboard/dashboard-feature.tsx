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
    "3GecJ3rvKD3vVHicLDuK6Zxesw8unVsyzCNHKnGbkTngubrPJHYmXsCFFcjMH66kPbsJvypm8A5b8JdQQ8ub8yKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57YhujbXoVj1uKtoeE9AU2BQTXDcpC6h9HtsEjtTwgEzLCjHZGTRZMowTk45H8KPBTFmtt9wqMP4VgGCehGHGWfz",
  "key1": "4TjH2196e95WF176BgVJfC1WfZx5eFFsoxqxBcsCyjmMAxtYkTM46i41VxZHGuBEiUdcJgnrn5MHdrdLP3FzT4Zk",
  "key2": "5bbDYMKPk3D5HjdDRkY1SN1ys9xgWnxbkdRQcdoNfWuJGjbxjZVkzWL6WvPr1L4vj5WifxoyVBWGUvheKaPfjupu",
  "key3": "2Uhmwuk1adG6CzZD2U6J7iYZbGv6tkKdmxb7hQK33eJm8fccmXdn2bzJco1FtzgYHfpdiaWWp9WzT45q6ZkMrYuR",
  "key4": "2qEWjkuJPpfv1bPSMDMGErRoR6Yt7NP2Tunq2euwKUpyc63FGv1n44AphWGxBLd3nzu4APRZhg3UZrnah1e6cHwC",
  "key5": "4J99CD1jzqmBUvQXwSaj9x8nC5XeExztapZfgMGbcuYwDquQNHNjgBuvYLoTE8Hq8mdCMMExEjgwus48qWgozkLy",
  "key6": "27iwM2Ct79UYxK8x6WtH9PuRTgDZV8wSXMqCe2Gyrx1CeFb4PzcLChxg3786cVK3yWnWRV3YwCg8BmTddSSm5G4p",
  "key7": "vToz3Mg8Ns9SdPV68PwvPRQsQijtKokMtZTowMH8KSmugLQmGgBXnHsNvfNBWucqbH94sahF2yhH74v9TmojV4b",
  "key8": "643GEVvfKb2jfM6ywqxznVrpzgPeSi3kGMwR1MnCCmFiyfF9Mxje3BJLyUGQHzigcr4sqAi63BKhtQWyEJCb6iP3",
  "key9": "32cuw83WKr2d3czWeWv5bRPvGMyQsPRPxtbybqsvKVdybutebThToSFTtsLMRoa1eckjMtGXfiKuNiPtyuomn62S",
  "key10": "5uhrVUwkwywErWKnov5c4jrL65pDLGu7QWuBHuZWWPcZ1GWwNAnLEqoJaTK379787pxgykrg7zR52ifnW5rmSj6L",
  "key11": "NktT3JM3Qo7iceGjZpadL4uL8Crjv1jQvN4o4hQxVaw631stCoWzR7SLWm85WjNUBqhHaXpjZWXJ8661HqLEZDE",
  "key12": "2FY2zDeBDohvt2Z15KkoaUhfCWNbTinwo5uGZDLERGSbZvprZji7HYA9biUNJooVbFQQS7oeFrVxf5XxdKtff6qq",
  "key13": "38McNVMkdnT7JwyqV74hXowXTTN6pq3Pk8pD65NiVPnp3WUf9rcBthvA5EPouuhRWB8dUosA43GwJ7EREkvbF8UL",
  "key14": "3579sx165ERNphMe2w2dbCTHZZCNYfQb1TWDtfLDJSQYcukVkXeYAbhEisNyHuvdAbjsAbjGAQNFMDJgm5fsJLiu",
  "key15": "32YYokRsf5MQLgg1rrunUoJM5FopBPv9Y3ASgJkmyig3qmHYNypfKLdK4qs281wEyycoRUux3ZSFXrwLDZfdGbFj",
  "key16": "394ftmBFJsgKay1UFGDT3wQW3bdUQgTDHbgCrLLiut8zXaTH7tmhRA5koKbo81foqTB7szzSpdw2yg9BFE7HZw4q",
  "key17": "3TwEFQJP8z91GbD747MYmoT32hqRRsNNp2qHRDoZTvp9b8rJfwnArt5LvdRTkULGVuRwA9rEbQmomrywbxxGuMQb",
  "key18": "4UYjABfn2ZBNafm6oDUhoFD5LXEKUueYVoaR3PZVn98QbyGvVUERpHmxirPj3Dxa69i7Bcg7VS6nXyB9XPxe628r",
  "key19": "3MvDSsRicsW48rdwLkFRM5dqX37dsSgmA2qgSqLzAuiNT7spBnRaTVUfiKyd1vGoRne88MxCYNiY8LbmqamSHDgW",
  "key20": "a2XwuANbbVFUWvjn6MbWY8KkuKYaK87P8CcLs2CiSJj1vr75pPggxrXAwb7NE6ozF3vFVyyGtTSUNicHym9o1Rz",
  "key21": "1ZhWVqUypA6mWJ7kv6MZabWZyZMhsBu2kbRgnHnjcqd4BtKBDF3cKeTbNfzMnwAxCPEm85QPFci2k3hnNpv5HNb",
  "key22": "3YeuY7cfd4mUP6gX6GazYh3Nn1wy1kL9tQLCb7QfQy19Mv9koMotqAzhpWb6LNrcp7JZthpag4wxoKAkmsRt21og",
  "key23": "2EExKtBSZqAtBhN9DuQSi16CE6RWnyuK43KLzqnfA6NvWRRAvR9CToNNy16Z11NWW7BFAPGSVGSSWB8of1TfQqF7",
  "key24": "5E4gcYxUydJwo7nJ9czptdUB8zr9Mr279hRq9F3TZEJLmuqKPCsEpR4czw1nGArD769h5VbnNZ53anWbSm1qfyhP",
  "key25": "3hXEvm88F9absMrfcRVKKPGBgt1WGZuawPS7QQ37K4GiwTvrr15J1mjFssiRgDJmFaXgXuDyQzVN7QNRQANzVvtU",
  "key26": "4yQxvjGPXbHQL6vcCHKmgZ1BdsRMXA4gugiLUvTC7U1X4eoavQaoaqivfdbw4STmBBPuXaouo6xARKdvXo1ccJRQ",
  "key27": "2M61tCMDVZZAFCPnm9PCtsS78GUyMCHmKNp6V41KBb26vm3CDodrcA3zGaQSFdgZ2cy6LdbVNhB61MVu9SFy3Szf",
  "key28": "3LbujYdZY4ZQj79tw8JAhaxTfv7KubKkE2fgGTLygqRNo7uyUUHawnRXpFEKZUnwRCXfHnLX81GYPpZ7P5CZabxR",
  "key29": "3czJJZoFMkamPujNQNYQMtuVtdTcE76FpggaEVz7eDUmiENJYzDAS8AV8NqHpU2Mzy8oH5xqPmSx4arj2LNMbxvX",
  "key30": "4bgceRNAraoMdR6i5YH92oZ4EL2HDwtp67VCenN2cJDeLkwCG1iAanR8b7n24zEx3FwMLMTMzNNt5zxL21c7Q9JS",
  "key31": "2Nqf2sWbnAiow7FY51ATUdGJb6ZvRoDCbAvW8buexZnwfrz2k1Dva8UFBQZqedmJF7P8p4oZF3yTAXdCYELA1Hb",
  "key32": "4kAwqYdSANNRDGLmchzJKU4rMAsm1bKqm8stPPLtRLRVCCRYeaUUuBcBXi94YCkvrkhP2LobiCWszgAXMxF8emZS",
  "key33": "2Hop2D43CCqhvwTfX8EcTL23e9Vfw7rSzk8oQiToWnT5F6NKBkdVBEyLfrGdEGuUJcatBxKRPnrWVtG6wJxGP4PU",
  "key34": "3yURoustHf9VjPtDZivuVA7KvYxvoGAjDPQEGVWSPLm4Kpnx5UFUJ67BwptkiRHJk6ww7tCP3BbnBZ5HQ8uGtMwN",
  "key35": "w1dtN21UPbxfcQNtRx1Teb9nSLRJbUKCdQ8fSkwEcJXRGqP7hFfm8Bb2hs1H8Qmnppz7j2YU8z2SxdnmEoxbwMH",
  "key36": "2qNfbCK4Z8HtvhvQooK3vxpKX1fTcXdkSzxtHrFxwCz2UQovGZscw7zZYtR9cnxFn7sw7zNibEzBhGF6u6ZR2u2T",
  "key37": "2JZuSHw7whhzTwR5tfzQjEXe8CupmjCxQGeE9bhzaYtrPn23iZXBhhZC6W5nXhg9HEMimQE2ySeybw7ENbtiyuQr",
  "key38": "oyDVLJPhmPa2w3FviFZFxw76iWKqrXRpBsS1E1XSHyubp6YiiVLcmwRbLMqjni9BMGBffVxhoymye6kjmSnkeVn",
  "key39": "2tv6DFUFU4USR89hLaXMuunqwdiSNCe6f6q6unE8hLpWjQprgLY4P6b2p1Frj1KM6gLERhHFhTdtyyd8926BqQqe",
  "key40": "3w7ECVzY6FTKbeXp5EeXRtKP6nJX9J4bzP8fiJcucaMx7ews8EnG7inhGUzAN4mNg1FTbg687DYyzG1KmA15JMbS",
  "key41": "6Hf9xf5p7kPoKUhn84rKPF77nLhBRjgoYVxnPDAFELB2inUL5Q7SwsvP2t19VYG1LSGjHuA9xcRWBytCPdjw74w"
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
