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
    "4uKh6fbXYELAJwJTNgSQ5DSXHZ3nq9S18TcgxL4SNk4gjCYDCa1b6ZpmjFCQocN41MFLCtjaC8LaCZnC7UTHgbnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67M3ABjCxBhcuynBVvPLETi8hgqkz5EaGUnuiW6ybp7g8mCnDR93emYAWyn8GZcm3h3UaQtYH5aw15Rd1XT91AtC",
  "key1": "5hWajdXmsgupRJ6hTGMPF57tuXTbtSzuWj8FdhHZwAauvUKWBtM7G5bD7oeVjsB9NZDsaPx4UmWqHCU5Qds2GbyY",
  "key2": "3zK4RECZj8ipq7bHYkjc6QnTYoLKLmVxfZRbXQ7xmf1au1kXRfXjb2G6ZMuqBLBbEowLfReVHNFbV8yPySfFth3o",
  "key3": "5JBHKEP46xCYr2GCgEk9BD1mt1GQPgCqeSVr8WyroJPHW3GAjaefvbQ9qkuGpwr85vRmhaKntYYBXjF7LhcYvRSd",
  "key4": "5Yze1sCRqkU1jQcuA9z6QvFDQYTP9ShMH15Jwar9ykCRQTsgEAKo6zMxXp65FDsQwazxbgPHg3U3tj6Zfa8dChfR",
  "key5": "5J43CfGKgvCTKHMAP8hNWAfo2bASQ9w353btgVKcBZ8viAM2uerkBzLpCm3s9YpVDvrarxCY2HrbRBGDP5oR7KR2",
  "key6": "YnPLsyf3GyDrVYTMhcJEmTZsxaif4juMt3qMv8iH9yzvvEDNHCjo9CqoootvSGoYdJxYaWAXKQTDP6LadKE6g71",
  "key7": "AegFTbi1sXNzfFn1QK7tG5x1cYduktvEJLHJxdSadXDi5o9u4ku1eidaXTVkiFRjDpuofYoFrTLYjhAYzeTbU8V",
  "key8": "34N7fv2tLQxmWrz2eZTgg22YBGTAeR1N43bo8vRhPiLz3Tko9aTwQP4fMTumoX6tuVayzeGAbxhEgjW12LHQGHWU",
  "key9": "446jY7aveHYZukPNDL6XfZAcgfqX6kjqg34Z2af8Xf3EJptmQZEVzvFvvQyeJVM2Nz7GhxLhqh6bufMxhQQgeViL",
  "key10": "2EKwito1WUqHuFwa9oiB969jqTVq289GuviP4AsPdwcz1VZgiiiMWLurMj1iGKzJd9F5hFKXQKzGkyYV7dX88JLw",
  "key11": "3DDjbvCQRyxQKE7PVUrmYeTL4LznpEZYrFojryiGSMM3f9sCSWbjKCHKLnXT1Bf9h9PWMA5BUweY8X1gjyqHgJRS",
  "key12": "281uRjJVJKpLueEdQPGuBW9QaiDpLRS3WKijAKwuNVM8JfzzegG5vfD8toN4pEy8RJ4gQqJNPZWaFYsNHZ9ZpKtB",
  "key13": "418Ua7MjSE8hUEHPMoxZG2bL1cv6TMuXcQPe4PSEvkeLTUXeJc3jwL3Nzm1qgYwJwMdt4KkS9n5Z6GmgVCi3t8DC",
  "key14": "EhoU55tpd5htZscGGMhqeyjDhp85f1VGKHQKr2DGGtu4x4kbHhgUSf8QPcaN8ShixZy8ByhsB1rpSkNtGnE5MT1",
  "key15": "2m3P6CabuyPWkKmiZX5kUc7ZuopF8gKekJm1zdPSFPWZM4DNfMsuPjZbbHTGtYjNZ4RFAKNu8jN8iK93n9yPPpxi",
  "key16": "Z6K8HJ2ackMEzscpnAi27te5VJRcLsDmp1Eue53RPUr8RYyLas5psx3eqShYHGaocbVMchqWVURY5n9Tf2EPPeK",
  "key17": "2sdmWbr7EbRkMhFkbNBqRAwtcpM9LoHvFR3noSKKS6PQ32zQNfUPjNmRQWriU2Qy5tPTWg36cZ4kYitEgzZQVag1",
  "key18": "3iYL11R27Ui4FnTg5iLV43nj3uYRqvt2xhWhjHzxzbPun4DvPJceELyyiJaStM3aBhNnBr2FDQ16ydq4NsApXmG9",
  "key19": "Fpy1YQCkDL9yfq3vmynQFTJ5CtA851VPkKN8ZwRVAncKfQHvyJPG8GiteynY1MBV3cp2eSqaH72tVExPTS9NQn2",
  "key20": "288faEc98w5f6S2gn35kLHCDrp4AVbmL1WqXfG5gjL3mVGHpRBKndrkcCZmTPq1gBmtvJVLswcnXHDJofKpoWF2o",
  "key21": "YyCmd78gtZM3frWLHD2HsJr8wuotpoM4j3gc9myufbyJ2QpGY64kxWUyEDTwuoeMdePE1exsxmkCKVkYP2MJMZw",
  "key22": "hkfWL8xZJb8p2jbnsNxt9GVZFoK68NHTEvTVdDaEBVuaDoNppN7pPkpp7nJSEaj4sa3LyYKyANEdvnib5MEs9MC",
  "key23": "4qn5Wxbff3tNabKbM6ydzFgn9p9eDz94b2rBdt1FCHdgyAe4TBxUK7bY65buckknLxWwtya1ijku8NMydK2VmATG",
  "key24": "eN8VUykXaC4hGAyftwDBFoXaqHycLdyUwDkD5TTiBcP5eBPZRGab9sgiVmFppqxEMKEo2io5wUD2aLCp9c2LyfE",
  "key25": "21Ubm1bPEguhLUGccjukPSLkcCjTY3UBEQsCjNgwN7vJYbpoqa9C48hRgwUV5xgoVymGErDpU7KokHP3c6FUNc39",
  "key26": "4oW53kK52SXpBXqZ7UTAthDcn7kwptyo5TrkgDoMP6Pbv3WpTS4oQsHdXyEWK71Jpk9RimhsGJJdkjsTx2SyTU7H",
  "key27": "5SXKUD8EhpAtAfBN277GBv9ckzkudX3R1Z5y4t68Ne8JUH3Hokd4XFvSfCRdHxpt7VYVf8szorHz8nCXt5Zae6rS",
  "key28": "NURzfkeFB2f6BpaKMz1nXSnTLUpCxHsTcbsouuxfyP9CaKo1eskaCZHF34tLFda7MxX2s4wmjJNQyL2T7P28tSP",
  "key29": "oww92XS37hDFmway21PTNYgixSn2RMtXnTKZyvjzk9QspaMEtUo6yLuJnc8rkXPE6HxZbtyGK1DVCo7feVpm5Gs",
  "key30": "48cn69EG6bycxB8RGAmmHNXiqT53xYMpacGipfXeTzZopZZmkH9nY8qNgJsTUGygRMuAadnTpTqC6AjTjpqW4WQ",
  "key31": "enQjaAQsHeKaJs8BNxBtBLy19Fj4qDMGRRCZDxA4fkKAutovYZ4hx8Und7Zj1WjdCtuC2Q4SmPwgSa3WuJZ8ff8",
  "key32": "5mYcxwBZHzc13SdyNX4ss2676cxPGXAFD1bBcdDb3sG2RCKowyV1az4j843jXBPtuumK4R1fQmdGYYCVzvAxhS5h",
  "key33": "29Fi7UQQrd2r4p3dSaQxiwCQxzcdZ86YhLEttS9XvHmuVREpiKjAcbuKnYSWToEXJ46jAQaQbPNRCNabCNLaVPH8",
  "key34": "vHjKTf6at4ZyWR8Rfk4ugUZJ3MDgNNwM8khBKkLaPR4oUt4kGa6XayQouXrjJAWtt8kWUT5MYkPc4pA2r3QJZhB",
  "key35": "3hBUocKAHP7GQQZcd4g1E7yGENSBKtF4CVxSq1vTdqXSebvvQp32Ln3nPikpCjVLowH8Pe6cyknvALciCMC3etge",
  "key36": "3YJyV48zvC6jmso2JRm3zRzjPcha7nZ1RwNQnKJ9apG8hdnBMyy4Pryj77W6sy3QQ5jaJycS1QLMZCR4hhWPBGbe"
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
