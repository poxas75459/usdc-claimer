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
    "3dncbdMyR3Swp1g8Q6eMWkhoStuGELx4u6BDNTFJvNo7rPGFE4BTQwBj4DyXsaSgrB9Egs2MQsR2RN16DXpvV21r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WskwxAo9jXxgyEyydQRJf5XEMC7doTAv7vMv7CtixNCs19HQGrVS1zqz1ZpyRxicymWi2aXFSNDa8M8DhYHkgUu",
  "key1": "43FJkUzBaEhfLXKJbRzrpiPLbBQaYr5pfJEbdZoTgERCT9jgxpHwnNUQ3vda51399k5mKH4A8Xfii6si9Ku3Czru",
  "key2": "49DoXsHSuT1cdcEaz9w14SmHqWZRUaS867QpUYengDvBQNnrkD3C9UjtvsZ8QYtkmMbEjgvVWjCR2qNsSPZtHJoM",
  "key3": "5FX6xPZF1nGLNC8d44d2EdDCoTofkkUhAPnpmV3CZmRmvkX7qaxo4fLQbxaQpHvs2412sjQtQSb1pYwda1ctn2Do",
  "key4": "2GYREpgZGtWnkrQ9GqAsVKKZkcqPCF23kidr9J7QpzanvTWXTUWdWtZAk7FbqP9MKr5WSevw1Aed9FQzamaUGXAn",
  "key5": "5QrTRioR8YkY5JgR3NeKbdJofUV23WasD6kKVY81NnmuGSzJuy6FsEEWgRVFkcFoRNp52YintnnrVLKXXY2HdrqU",
  "key6": "53fEVGdmiWoSGqQ4a8gqiDx1HJsFXp2ZZet4B7uLYxwfpyGB2MpSASMg1i2RMtt9sbdHQfwTmsBxiaAmcVAMokZS",
  "key7": "44aVPG5hu3x4pr7XSGTxZxcVxq86ZZXo2XQiU59rSmsEWB2ZhPBbVGHg87ptNv3qdxT7dp1qB9gpDJA7U7HPaiGa",
  "key8": "2YEEnQsXMDWCdYUTsmrbuBFJYV59oocJuD4pRYBgTbotBzcrk4dhRUhBuz7dzs3u1RZZcoqFXaeyUEtgzF7N93BE",
  "key9": "5ikRhFXCQgFJ9sMw9KRyg1Xx2sTijEp1gChfbrmRfM9fBwbWfsAuAhNAsJwM5ezhZ6NNxtyyVHZjcpQqShpj1FFS",
  "key10": "eGJ7xh3rQkAAdAVbGFwtzBMVLQRnvDM4V3FmcM3ZYo7f4y1YhpVbfo4cdV5Q1dYk2rLWJ7QxUAJgekdME8N5ygb",
  "key11": "UHKTMzZ456zuL59Tk9CrvbQ2SH2pvf59HqwQFJDP1UXrDDjb7LanpanEPFpi6R69ZTp97MUJfuZEZGEwetqLf7r",
  "key12": "2P1hVgKx3r3Jwcvu8ZskLBRJLbmMZBGksp3cNpenVvL6Ey9xB6KH8K5vZHXPpURGCLz7kBSxVKvEmq5CzRwGhn4N",
  "key13": "4jiDWwPyLB2jEVqBouVAbjYqf3Smb54dvnDfutastp9bNyHJdkQNe72BcPecWumxB4FMHJNW5NKwczNuwbpphtjp",
  "key14": "xQ7547aWib3SxjqkkCPdzxnGCGxRWdj82ZWHyy2X32NcwwuNbjShmJ4c15PLxvRJNqgZZVu5meSEg7ByCSWZGnY",
  "key15": "2g6UQxo2ug7knn5eqDNZnL7DN68ti3mxc5TtqvmRSMuN2PPNZyXPcmDbZg9Q4j93JZi9PyxZRnHTH4xx4nWuEZ22",
  "key16": "2FDeT42cNtQ6jgmTTnVSXs89HwFHMHL4BRCS97TfFUTThq3nSYWZYW4jND5xz9FTcdSfNALyaPxsvC2Gk5SSNvLh",
  "key17": "gPbvSyAx26ZQTWtjk9poB8XVgBgt8YHDPpfYEz9m2gbRvgC1aNH9wdffDE7fQdnCUFjNnbGxFFtDo8oMBoMRWkv",
  "key18": "4DTEq6ftNc8SAt87gzAUg2kFKG68VSxMGxDEsLoo6dD88d7t3gKpa5yExgMw2n7vYnnZvcSgPQPQ7JikqFhtSeNV",
  "key19": "4GuSrvj2D8gUppXRuMUzoc7VC7G2PenK3s6B2uShAcug2kpdPFyM6ewsLHdPb2bRHaFDdPzqgHAvjgtujvnCrMMX",
  "key20": "dfxGSKgrSb7Ur9J9axM6nEsr2zgMS8NxxZHUea1maXb8GLCo2ZmaWZpzqVDAGABytgQNDxpHbRVZ2YWkBxWDfx7",
  "key21": "2hrTYzimSKRf9VwwkmsAAddnXfuauT91oF2DCcHjbfEE8zqfMvTwC4xXsLpQVzezQDf8JGq2PNLVURnkA8sCxoX",
  "key22": "3jm6SLrnx3xLsiVdXT5Xkv4m1cqPVjhFvk42Wn856QcLmfiJKngvT5CKXGtfcFV3DDtLZmnTqodN5KDzmqPnauMX",
  "key23": "5r6cpXCYgcD2kLRgmRDdVPNh7fwvcqWoV9cwbePGNQ35z6T93jh3hx7NWztbfVK8eZhR5L3q8mx7ffAiY2AwuAnu",
  "key24": "5hVfpBHdbEde1qMtgSV7Qmi1r3TqzXyZUWV9vQpkWNuuUpGMeG8EbkiTxWeFG5859kw49NY5Tj3fKuHYhgASmoCq",
  "key25": "42MebLNcFYxnr56Fto2gpCoohM4ckZyBzUT8QaNc6YvuqeDNbSvXuXSNWFhMU5RKbWZGmWFX3McswkA2JZGh5jgY",
  "key26": "4aBAh6FcbDdn3CYrwKwKKKDyEPe5JVtWGzhnJAsWt2z5VsXXRUTUGUS7nLWiBVptbCw3ZijE2hQQgaX8XxQDXAUf",
  "key27": "qSPCr8Q4kqd7J5XdCwuWn3GZZDTaKemDK3dMD7iyJgocS178F8NR5BuvhBXwRQToQKAvtYXgZdSifcvTLiLBDXM",
  "key28": "4X73foHnTtgfboNKDzKpECYGYV5gkGtUUzGC8u5qhzbDBAr8WQgeresxiyGF2gfAt8H7SnNdrTnFVoqyQ842uw84",
  "key29": "3QPPg1kyViRfpsMvaQX3zFJeFCqWZqCJJKJA3ccCdCn6kKaMCnZ2fHXH1tuY6P54pL321XUcck2Mc5XFVz2Hjckd",
  "key30": "3ncxxfnTFnYTjDgkSB4QoMfPxEnpbZ99iHSt6dbz2WeboJjRiZuE4unBKJLzDW1a2HFd7t4WR2XkYcfCWDmsRNVh",
  "key31": "4ssZK4Ssi2GiNKuBELsNTydvHDjytDayBcuYokEco1N3i3hAR5dohxRt7Xcf9Tnz5yk6aA54d3V2wMVaqekm2uGs",
  "key32": "2LP3qyhe5g2zpkcGeN9TYvqKZ1zvXrjZViCNNQX2BeFy593kvAr1RSbuvjo2afwszqiR5TwXRnUJF5s2Ybr44aCg",
  "key33": "4WY4Fk8pxHXuAg7g8nsPug4acBUmfB1JBMr2p871gwHXpb3xF4Bto3L7LWxUhUAt1EAX6mVrSNrPAnGFDZyZHNeM",
  "key34": "GXYpvirm8Y5LBR4ebHdiENV8RypWWRJ6NB1iPS6FkqHkxNrFJt7pFYXVE5b7ZQqBEjh2q7uGcz3t8RUyZ9Bq2y2",
  "key35": "5iVHphxqW2HrDWZJ8XPnbcevEQscutXqUsSM9vD98rPKVJpVhw7aLg5sdKb8fZbYE4KTPcLL8y1ED81LWKhvkQtn"
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
