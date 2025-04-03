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
    "3rze494hk6tJiVJMhibP7sHQNVFW3y5btYe6Bk6R1rQtUPGP5K4CPZ67TioAeD4PqSEfo8kC9VdkwCePx6oipKnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFzit8gocdjDiWqp3HkfdWqbhxAf2X7VjWBStZtCGyd5jeAfmhn3kHq9qWKAWp66EJsnpfACHd19F8FsHnsKx52",
  "key1": "3LtWSVzdiWuq97tLbzLuZdC6yoGHQejr8oBXs6iEUkmqaLoLXFofCUHZ4rsGrB8b7U3FGFcmaQfanEmEKb2sFh3L",
  "key2": "2Jdj7ohvEqG3Gvs9hRMSbmLwRyYXi2WwuuUGc7CJRW81QaTLiaugjCHe95wPLTMvsG5e2JCxSDozCvgcm1KdMcgP",
  "key3": "4zQNtpg9FmAaeoGBvG5MiyQRGE827w4rVm83AWFpqpqgHV7PEF1uzPzgcj1QU5q3AXCG89KND8aApgePJqQ3Fy3B",
  "key4": "5JeGdcfKBLkYu8eFruwQ2SxbTwUCTiHrGaxbPcmhNsDYe9XUAN5cBBcTZDAhkhi4Tijz3hZfNPY2ekXrt6J9KuK3",
  "key5": "2PfBmXt4dDemJFTwcxVZ6PQ59ZipcyExsUifGSNppg2nefSCJ6vviLKtfTmJeqFFwZaFW56AhcinHL1KieEFQBCD",
  "key6": "4ThagQ2DY2wgkoS4aNGxtxGbdVCUDXsEwZVHaQGW6yDyovCPJUH2hmAMkvBC47TRkD3MQYziLNtmukEKTTbWkeXe",
  "key7": "GUJaoUdkU76JVJZzz5si5WDNwDdReRzJuCy5uJEoukVHj8Y1eXXR5EgoQTNuXGhWCdstAMHdvcjzrmQMEefmToN",
  "key8": "UBmJvcrVF43tysrJs7RFBqgV25JBK4Liq43qYWsUHGq54k7ki4b8u2obKPoGnD5h4o3bEVP4fpFxH9amycPY7JQ",
  "key9": "3jQCrpu7drjTbBijKNmyU82ouJsKqx2fRChj9oJ3noLzsUUJm6ZrgrTQrKWAvNo488KtvVgbFoG3TBFszos3Xqdm",
  "key10": "57xsV7P8tAgkmQ9BPLGqwYfRGZBfT4n78zdnAa6i5iKkbdSScPmKjJqTAF2eXcgLbN94SDYmcS6iCQzecmsAZdta",
  "key11": "2teTbXzHcVkUpuNNAnpEVhXFJJPT1Xk4NTBvDdy5s1z2LDk9uMUa82QrJgge6YGjwCZHjpf6NBhjGFwaFEvPFzmr",
  "key12": "5EDjx72j4jYEwUv8ucJkAn91wGLRyEWeQtzYvgaLmcYYLjeWE4CKSNLgwtt2ZXL8KXVvBKcNtvHYmiJASvdVVzhr",
  "key13": "f2di23pwy6WidGgTbD3yWh8bJdVXPuAXGnJm6j8AQwGQCXDNGbF4byP3mLuSKx3Mo9kPQUNTx2Sn4mYWPqW8z2j",
  "key14": "4Wbj9oEpCKAFjbNWWkykXEsNeuNWUTbUVXFefFj6VAHvnjHCjCTH5Knpna3yD67dcBsxnSCaEdqq7QUvTQRA9KFr",
  "key15": "4kxhRGfAN4WCaCwPRrcXvgetZpeAXMTagsuQ6LR5b7zXWwJxweBCvS44TRaJMkrxtjBJtunzYn6NgoJ8vgtHLLtf",
  "key16": "3YsyBSihb3Fh3qBjT8xFreboJ6xtgpHmCZVYoJ6t3AJR9WVXzHjHjSbabGArFHiufFMeV4tZy6sfattVLfBpmMPn",
  "key17": "5nft3kbRmTpvUmcPGRAsNEih2JEV8tmGAQviL9WFM19ZTuceawQHfknJUAMkZJ51KjQ1mVqcciQ4NN6e4qTp33kV",
  "key18": "2HWzRyfxGomaYHzgFHFJxcbAgECDjSfWFRpCPqyC6GpcJ2MxiJK5VmtkXUjB2cbcvAiCW3Q5hbXvotVmGGWAT6Ph",
  "key19": "436qgsT58rFvCwrh2VR1FkP7VzD4A1WxWnybjRnCkGZSgSoDyXTmYiwb1uxYG4GT8vUD7NytmdapbVefgTU1ahdh",
  "key20": "5njiJu62ZhopLSDYyeJQsPW8fV173LxuhRmHCT1nMye9m7XFofj4y5fhhZh4cnzDgiqjMtYUzFnkx3PDZC5QCrEX",
  "key21": "4VHVB1x7sxzBnZaqZazqjbuLsoZzundHmxS8f1DHHCDsZAGp2zaRosM1MxFK7r8S8sAqHYEgYg7C2XPJKQJ2xmFo",
  "key22": "2pV2zXD9qYJJaKeoLCkywMqXUXxFDoaPzTk7spLNZdxL3GDAeehRjwZrukU8AYkLAmCxEVZFLXPGDKw5T3uRc75G",
  "key23": "8E5Xthzt7DothURiWzqdtZyGCawLwT8YTgNRjUgXQDcNeAnJBnH5k99B6giSY1SkepJcASHweeKDDfDwdBh5VZH",
  "key24": "7JXLoitpN78B9z2BoS3CRSKLT7MJPjefR3LZ65cZqDrriLmyQUT3Hk1dJeycRTRGTVzkJBGnyCWEsL63Emzddgf",
  "key25": "2y3BWneTofcYFpnJaHMwwVVzSYooniQuxKxYfwwSgvQzHJLLXdWAREKJfDSFWYJkSSn5tU9Zkfm4uzEc2fjXfWNM",
  "key26": "hqjrbatb5TUKxNBdp7nid9FbV2tVonc18EAxubiDDZReSnhYjQdoW4pi1xG25JKYmtG8psWdLhx6JaGpQqGyBoc",
  "key27": "2r9JK8tpjhyHcN6esvNQyUF8EcRPnFcSYgHnbmEsNHadzhyRybafDXLRmsu7KgCZqedskybjcRBQRd3eNUyH2zQj",
  "key28": "2smE3DujsWbtxB18zB67LPBzpzwSYN8xuSePJN6mYnCZDKyp24Yb7bwckdGikHHmR1i7TkX3XHEiCo9RdrAt8pr8",
  "key29": "263YYULpc5FV3eCjnBjv492UM3EoVrGqQBJW8p1bhsbjz813vgptN7EHg7yRyVX3SG37Qhj4H28Mpv4DgZFSgZFi",
  "key30": "3Zah8XCpu1Z9S73t4q237TWGGadKvJHozESBsf65vwJbQfK3o3E3JRr3tP2vYpS7GB5nWG22rox61skrBcs9zzZC",
  "key31": "2XmECz5op3VnB7jnrCibexLhoJYAC1L7F9wHKJ1HDqQAi3cCWJYCVo6ZpyzawtxGC6fwTSqrEyWCzdFbMPKnZBgG",
  "key32": "2TsL5dFKG3e8wHGbr42QrXouVNaqiCC86hQsjr8HZFK56ZZH4jpwkMgEaEVpp9x5Uxetkzsn6wxteDrnXhZGcpGM",
  "key33": "2Kp8tSGNjRKzDHDPgHdqMEyepcaUCXTc5BvxbnT8wUQCfnV5Xecut7zjmxfbdtGNcZvz2cue2AyZBYi2jzeqyjc2",
  "key34": "4t3M7VrWc26W4EYF8Q5fKesE5x95kYKCVLC2G7pHiqm6TtHBkn6MgrVbX9dS6A6x9Lrf2n8fhKssaY46ooR5h1bz"
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
