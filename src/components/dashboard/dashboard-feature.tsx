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
    "4gbkHTUrn4awAi5TbLBnkafQViS1mcWTBYDMxrSYY1bR97uGxLYnQUKvoaqUsuPJJn6nbHmscpxsfzSGH6HRt24X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bji1PYBW55eQUNnECAyiFwYgwcBxW3P4cvGWdns6dpqxV5hks69BUuNfhWhKiXUmbTKjZwevPvjtHdMF3QnKK6L",
  "key1": "2fiUTHeurou7c6GKba3bYn6jEuu7QQGkbQuYDddY6R1LN9KwmiGTsoSHryH6HaNFfEuW41bcqxHXp1qaDnPjurLF",
  "key2": "58SifxsDKRunapfZGBDcHMP7wXc7jMn6MYjfQEVLsJJxbwh6QBHsDJJi8vc7QFbtmkfuNib6J53ibmxe43Kf7ytt",
  "key3": "LpLWGFVyBXwKuEDrommXLa4ksVuRghMXJcgRoXsaCQLq35MmBFkvosuRqoQXMqiyrapKKC1cF3yrHRf6tSAHX7R",
  "key4": "3oEuNo8zbmcFbAXEdx7aDXEZ5ArkbfURWa6nnKKQHdzPxrEuzWYHYAW2rvCPBHge4BBdGhmq616YjtovsMyjeMSb",
  "key5": "5dBvcnMJyHeLLtMPC5XQQd1dXTQ9fjg5aULUMKXzkNHHV1jFrspp6BGWxuL4v2VFAT2zFdCoDmXP692VYgdDZyUx",
  "key6": "2J1HFjoEZdz5STBKtUoufVPoZjNwfckTXNUijQtZrRFMChnxiDpPou2xbNtgiqXnB9Pphxdk6Fahpa1syU4tmEmh",
  "key7": "SUHpR5j5483XXRXxz34712VuQs7AAVZdDxmmEL6Ns4ndJjMFSKoCSxg8scs3o82b8uEM4iGRYg1sfw6EYgPmSGV",
  "key8": "9UJw78csFc354VA4pibFKYYz64iiuscx96HsMHM4JcuKkt1FayveHmp51tcC936iRo8iTtbg1vDKBAAngfHYGfj",
  "key9": "5vuiNjLgjV3vzfEoYHG9Pd6Ky6PqnLS9GNryaLuWddtSV4XmS8rKP6htqYn7zfgfpFQN8NXMWJBZVt4hBDfG8mpi",
  "key10": "4iCm1L1HJrVrj63GBv12vFti8FMqAjbwJsgc5k9Xpw3bcYCC4QZzXarSGia7otBLiXYKhVQxaPHDxZeDJHjaRkri",
  "key11": "3mC3o8hXFCHgmov3sF7SmZwkFXdCAhvwfh7YGRNwUEkNPtL377S8x6FEPjhANqVj4xQnMwKzpc18dZbLx9Gn8Zd9",
  "key12": "4QqWUkKsekkc6RbWxcJakY664CxantmK7vWHpwnMRQt5RBL5NR4z5BQRtQTtLyzEK9vHKg6ywv2jPFsPMhiiY2Ad",
  "key13": "347WVmFspZGw3utxUH9N98ZH6634VX33QVDenTxFE9dqPnNDYpDpnCh95N6yYs58eCRtUNxaMLwDTGVy3jZus1Zc",
  "key14": "4wcGHjWSfBUL3ZiGoUEffvwtdBCNMmcDjpPW9duvom3qsp9siqfbARMYMd4gd3aZhC2Lm5JPEoR32PjnQEnjZVPC",
  "key15": "3Cac6HeyFvX3HPjajh9NXuTyxAYvfoV6wMwTDoX3ny9z3cmogKewghmeDWk67LhSKdzywcCMwTmcPmbkxnKa3hb",
  "key16": "3c4DsdsWhgMiaEqKmA9sSqkfS9e2AtqrTEfGHtxEHSCmmXmHkcg9i8PSVg3K9S1JAqFZUjVTSyhquWvCyvGLrbaK",
  "key17": "2iSf5KTiSqPSf25GQLjkgwerDTGGU4ZNtpL4qesySZtWgLMumXkMZrtBmCXwd183jwA4ZWo8GjkX8W5LnFR9SkjS",
  "key18": "5XJTHMBa3txqSmuw9C8B9h9ukSRpS8NMc3gDC16JoVYFUs4nDngJDgoRYJ9J7tzDTq7tW15fWdKz6ZQDVX7dUtFz",
  "key19": "4mq18kZpoqbt44w1MckQqTmsWwtMvAsJn2NaRWmZUoiVMBjqMCT7gHi67vC3SCajsBgTHboVBQEYZoaQHHyYtFSq",
  "key20": "hzaVrm56Yq8Kkpk88xzUavynqJm3ZvA93cap2pZvXwA8ZuxLiKWCfiDYgoqySGpSKeW5gy4tbSYGFmS2kbKdRv5",
  "key21": "226s5hjaC4JK1gdycVUsGuzif3gV9qWUxG3EzJ3eHu75krEaimxCD5cUWL5x3qV8TQCPqApNNoQE1v77CJMtzmmv",
  "key22": "XLhHLiRPdLEwa36py4chZNqLRxnp4PDgnfoS4zrKuUsPWJq86Q5acfjyN68FBPYa3EvKSVWHvVKiKFpiXtBiHVz",
  "key23": "4137nAYNLovKxC1TkShN8Recs41d1kTH1AqDx1iSEouJ8Gd6vh9EjAeLKSoyNvBGC4jLgjmGQNQgL9yxj9CG5fUH",
  "key24": "5pVA7gVrKE2YUzSpFN4oQ4G2YMbys5o39ZxKW57VhEGGadAa7iLgzjw2xVi84xsjxccsbFS8YSgaEVQtaHCiNFxT",
  "key25": "5NuweAkAgaPQs5xK1Zyvg7XYUcBW7FyNRPciYudcNjUUDhTCdUGwna2YL17LdDM5aVDxPjmBkjhSUheeYZT917Ku",
  "key26": "5Hhu92UowSWPyuJ94Z8qBbQDKjSyBrqXujvDpgc6xkwrJqXBtBJnmeUzYDtVuoc1LB2TtER23K5UZgJCZTsqt4Q1",
  "key27": "3jp4mzEDZGYbEgWiHgyeAeaQeJmV2wH8ZReNJY69vpg65mD3CdfP99hDiEkYzzqQCaqyMg3DxPtWfUra1PLu6xbr",
  "key28": "5B8RpQNWXiaq7Uu6GgYwbAyYmxJgBNQ1rUNottRJ135qWK9fGTeudzkjbPAGSJijKdNnJcBafF2EJZdYTkLXqdTH",
  "key29": "3QtVEpnFSV4d75qABaEBBwmYJnjKJdbX7rkTbi1NFv9F2YuN6JcvjPrRxVYoyNeQpuDLzMjgj4xoXT9pdWRFxa4w",
  "key30": "4d7fV4B5mHAe62uwEL8WdK3TiQqvhSWoxyJSpqyQGT3o3vx7VCmVSAaoL3XnvBqbjmLnZyeL6UWKPs3WKewNC9ta",
  "key31": "3KjipCqQHykvdEFJ6dtV9SnoyjUqiTcMjdBJoeVWXbqNWA4w4magFMNPRbyAues2kYZviQ8yMFkTUcfM1yVtSHi2",
  "key32": "2EaVdEt8EpeAvBXjFhUFazrTFyHk5S6SnLr73QTnU5xE4Qwjg77QUYNNaKwoeSujhtKP38X6ya5mfnWmzT8XmLFW",
  "key33": "2mEagLSRfQHMNSoHH4ApiJenGxmxZ4ZAFiySRd3s25TEb58aRpCAbKDEBVoeytv63RR7WCxsXQyjGnLZtFYQTakB",
  "key34": "CeRdhHYr9r5xhDJceL1UX4Mann98bm8fyaW4zyZArgG12m7LpipFh5921xAgwX99LFontSW9TGJR2JDt2x86M3h",
  "key35": "4je98zbT8sqVRgmTNbLNXnJQiZZqqAgSj6hqDuPtELz4mQHBM611pht8MfxJ17RVnYh9YhixhvH3JMNs1x1V85En",
  "key36": "5M4B1eQLJqbX5WXHbStfSYGL6XLvNAFJeULapjCTKnJnVVnaMpGoKCVzyzLf8nS5aG9oApfeb5BJyrQ48e6yZC4V",
  "key37": "4Cd7nLf7kry6P6iAfcqnkEb6vH5527JpagZMHoWmWevhEN5H2pTGTtxekjM9SYNFqTw6kKDoXqMnrEdNDCQ5n9jT"
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
