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
    "4sTHiESt1SG7A6jxBuwmUSZG2Fdo67a5XVBEY5MsvhaJQzQ8nv2J5FpzhER2jrmyyxn9wavikUWV2bx79JJd6HFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aZf1sRh9JbSBUW5YjF4MjPD5JQEym4avcWnrUJ5P4F63sfQjKCGqNFrnZB8kQvqwRSpCW1aPW1cKK7RYK5GrD9K",
  "key1": "56PoRqbo4HqNpMtzmj3AsHArXuBLRCFgHrsydA3sKTXseQfuRysVHYookf32XQVVRTnShqykXbEuDaXkShShihyC",
  "key2": "4By3V63VP9Z7qNXs4sUXsrRNGwA5E5UzDPVn81xM2yCDdEYdoSQ7TvZEoHYvveZsLGLL522nNYY2ZpCGn1BE94aX",
  "key3": "3bviNcqQDMfZ8oSUatM21P7JkWN9EsK2dpKE6Kk2VdX7LWVo2pNcXP3tRjDzu5jAWCqH9QZT1r4WeUpxkfG6HpJK",
  "key4": "435j1nYUV3cBuQomyHzu85o3J48H6e7TxhiLvrnUu1TPAqJbsuFt7aKSaoP3zKN8dFMwcsYfNdnKSPGUyojTvFYt",
  "key5": "2dGqcurDUwRcz4NmRwQKPZaEYtdWTWbwteYpvZvFPE7YDoh436TBhRWSvyuTHQ1TyUKbFn3P1gBYYw2rrGNtedZe",
  "key6": "3HbppT6WrnCjPdCkLhsmcXWQNK8wofLQFmGHhv3FJXrbtx3eZGjYL5h5d2omvYPjtUs5oNKKJZPXkhCrUFXJCx7G",
  "key7": "4zgNtxKU4JRm6YydL4Q2W4CkeFDVBgEBLzEAbYEiu5jEm93aMY5a2ayHLW67b9pggDtBpMMuFey3WvkShYvobjEU",
  "key8": "42BEtSSVqjBpsL9AHe3HCt7qRKSNXqmomMS5E12WngRVijgzBXTXXgzyYfb6zja51EQz52eWd5znUZ5dZJ3H5SjV",
  "key9": "mtKbhWijtK8cwmJQG1SsBE4V8vJSda2zRNuVCxvSUhvnJkTSrLEHoLE6A1GYNKj9sMigFro1p6gh8spWwo4MfxU",
  "key10": "366g2F7cKWWMmFWPZggyXdZPfzf6YG1TjLUMgouL6hz6zVWeUXHqgNREcdnWp226WhF4GfX1PHTvup5zUQLbFg8U",
  "key11": "24sne1KxHEiQ1NNNhzrb84EJB8EmBvCAW57etTRm22KKit4auvRH3yN85TgT1Tg74skXup2G6etbHAGt6oQgzzch",
  "key12": "38PTXsusD2CWxqY17v3R7xLL7pqh6pgouAvq9uczRFUmtTKdzh2F4ptkoJHY7ZNP5iFZvN72tu89t1yLk6L5s4HF",
  "key13": "3LYAci6yWGV545RpQRVLpvoidXivHBG2aVMyCvpsJ3d69eKqHng7SXwKq8iHvYV3L14AVG1xwofrvHPUCqGVSMyq",
  "key14": "3x8GzYgRAh98op4uRcpHyFd2Ak4ng5dqY7c2jNcykvw7rui7wz9Supz6vVYb1HmJt7HyhXGH14JQSAKHxu3WUn1q",
  "key15": "58tNzdfduK3dX5bYpD2M6H2MR9rstwDe6mUCzhcNFHr6EQQJw43Ah3k4C2bs7GxSd6bmfFSf93wupLYSVdBaPVdx",
  "key16": "t4pjzxtzceAHFFf3JAw15E1SDyofDtM1wezwu5Pbsy3185Y27smhp3HvG76WYBXeuRSUHvcBW3bnUCui4vcqFCr",
  "key17": "4ZDAto1buAgdpBxvjGUTaLS6D2UN3vvuK9nHXCpkzqdKYGG7ACGNTURAykwGPC1uYLaLTfH6GvGngqFNXMavof6Y",
  "key18": "2o8SWaF43REDzPukzcNha26wrxFJmDL7NqLwPMwGXiP12X6YXQQHGYdxYuhnaQ6WCwZYPKFiQMvLT3BfotENeHPe",
  "key19": "41Fv68ttfCA4oaNdmZs9wqLZy4h5bTXazaKe4Nij5qQyEvW8jcHDReSVVHDanJqng3aUBryNNMW25YH6bbHdRHLD",
  "key20": "5ms3aZNswFMSy231d4GVsrK9c1meTLsfEj79EK8XsqUyh15RKyCwPr7n4EME6i2xnNThJaE2rxese2WrNfYK8iRS",
  "key21": "413AtPHsJVvufALjXJNtcQvo2Zz1trspGfAKjrsZmY6gJ265kceAG4TqNZVyd7GMBKXMmBTYKtKUBtz28WKAzXNc",
  "key22": "3SQoT8vaQXkXRz8B37LxSW1yuU8Rcmw8katGaiz3detrXAQWXZcmqbJRu5PJZ5D9gfQ7mf3ec2TJGA5ZJLVqpexJ",
  "key23": "mQTsDxDfe1NtVtJrZMy47bzyyRuNRMezNtDfBpSSqRSkj8M2JXCZJ8tN1QfUTGd3Gb6waiYS1ZMjfrDiPouGbEE",
  "key24": "X3aaVqy5QkTWRuSNCK7r544YVBtFnj5Uvd4oZj7d1seXBaUV4z6kVHWtysPK6YpXnodq1C4YEasw7Zsp7gUZPUd",
  "key25": "4qwPkPuTUwQziU9dNawdtFdWzkjkonHUVbj1zEqyN6y4QbgPvj5sjhAW63rUZuSKQsvqoE2ivZxGqMAWU3ZRr34E",
  "key26": "62ESLztHJVvaqYtJtQudDJXMP46Pxdz1kXBx4NSRdfojxhXG9aJbgpeKE571Ti9TGUZCKyWj1aUq2SABdKCNXdWQ",
  "key27": "2DVAAVPDqytup8ocnrQN4yq9TyR3s7yTPvyt7XCUyuDui14Ji2RLumqJmpA7uFt1LLsRnAFSQHn5scAJSyMJ3gNC",
  "key28": "61CWR4ADtT61vS3hj61kTNXXVwq5n3q81GZypqDeWCT7EVahtL6Nfd7TWFH5LegZw9PVUwbiZMUFGXRfjbV3r1on",
  "key29": "64k7PwjoaZ7ybgEGdxq8uVVXtFsBoJg2iw5vPYKpzsoenHp1h3JGuq783EisfVG7gdnk4SF314bkfRF2wkvrRtUL",
  "key30": "2JSUbNCwSLER8zMN88t8R3C1aQmoBtb8mNX1ZJuq1cLTuNhC4P1eRFUZ96fUsvE8dQNX1MfW7fAxEpwytmyfmGx2",
  "key31": "AUGDcPBxSr1yyA53ZNsWKjcniPmveqy8e5UgMBBs87fMXgVXgdw9JNAmYMddPkyNhewJ3WifM1aY1zNMReaobze",
  "key32": "24q8piH1oaaAnZc1QfixyrkU99jqHiRZe2gSdMjccV8zEuZ22tXR4SUj54QutJkakQErgLu18CEUAMFxjd6KVZL7",
  "key33": "41kUmiuezic1gZVdNK8aTVV4TjFsAQtWVfJho2VChDdeoNMNr8ySCcUdpMGvgVGeoY6k9H2VBYPwrtndvn5FkDkD",
  "key34": "3RBPVL2tbzNaHZeMZBjhYJNZRwADxga7hunc9kgvtnHHQ1cq4wN6isMcUvSs1Vatc6b6W1ZJvc1VSc89j7Emmsbu",
  "key35": "63rFWAxYyfoC5KBuXWgQ8G23mU3g8G9wbAW8Z3TJ2jKBL3wiAEnCtKsgpGcPD37NbFByk4evoZQfHkRjQ7CV1sHm",
  "key36": "2vc74wVgDma4zHpGoBCAkZbJuSZRucH3PYTB4TpJi3NxcssUJbLmURhQBd2vkRTZ3MXKnn3f84CdxsGMHkcdX2WM",
  "key37": "ZPMb2fEnM3bTvmkvzNoL3iivn2naShpXSb3kuSPQUZTnad6qZbdtCFEM6NMHnMn7aNA8fvYt9552P1Ng8Pf8oUT",
  "key38": "4CdZJ1cXcKJzEyjfpLj9ngdBrpWE87TtjF8tYrmRAWfoUvCcU7vVRS5Arpx4PF4T88QC9qX3BLZNLSbXu75MsiWE",
  "key39": "3VefhzdoCRQniCo3dnc87hJymc4fj35uLgYSd3w3BqwCiwoguwNdsVzpBFdZmkQxGxrFrDXbgiyc48y2UFXaFDg6",
  "key40": "2kxeC8k1My3coy1RKzr79uxDpMYUyq949SB3UiPzNtQ1hXK6c4RAGgg7uM4wATcrWU7Gpw8GgfbU1gbqRekbRg8",
  "key41": "59CwguK41cm3MXJ1SEAtjvZdwDsPDcBd6oCwLP9cFrVb4qWwKFvpzBQaV5V6RVzZkfscMzPeGUAL9A266LBALcwH",
  "key42": "AbMBSRmjWq8pmeCc5XsppHChfcV4e2vxf5k1eQCGKUVVCiVCC62n6t5ZBRSQxECKt3NPWg5NMovScwdrpFW3EqS"
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
