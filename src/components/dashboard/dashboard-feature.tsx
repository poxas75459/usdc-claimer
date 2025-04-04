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
    "HzdqgrHnMv5HQEzPN5gojKmQmvtscW7BQmGirneNmJ4aU6WS4n9v3Uvvy8PrvQZDgPJGfAMSWjTxhsf22RvaiN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gGEXy3xTEvHsKxcmeok9RxExArC3rbjU12HceBqhyMuvD48piG2bQBUWWfk9MVf5udYaXhxLP4UcgDzSoxDTtEs",
  "key1": "4Jm3a5cZZeqsqJGCkH95ComaKU3ja5qTXKTke6UyUqDaDjjxDY3oifDqyhd7XEshkZP2qTidFzQCMUpfk8h7NspM",
  "key2": "vYqA8kga5NbNrRQ7H9R3WB5Z13nRZzQcRWFkUrnJgSNqn3RzkJoiGdEPTUURKuHD6rzSVUWLaZUWm2rujPceBx1",
  "key3": "5wdKjNmY19HPtthCz1rpd99rTQdwR8RKTyG29H4TETQusMhqxxhpF8QkmcAkUicjhZsHQL2ozjD4b7kRpTvN1X5J",
  "key4": "XEzACdXzhw8wkDUQ3LrXCQ7zNVX3fqgVHzX3CSSr7BTa1N3MMxREigH9b1yvQ7U2V7ZPcLbf6t3wEHsnvt2hZD7",
  "key5": "2YCzk6uhrRtFa1rxFvXWGz8Z7KmiuazJQTWQPLzAztysa7aUxfey94VvP7GBADTew9ZSg5ZvzJQSXKLn8Kp7T2Pv",
  "key6": "2auFpaAczuKo5i4CqDeH7bmf27k1aoBF3mTxVSqrFc1iKMZaGBvASjBsj2s7pnwu3gNwJPYCHk7d1W6Y4GB5Yotf",
  "key7": "2Qm3khC1cLeHuYBx6bSt4MUd5NnmC83PmoVfCEdc5ADdh42ZdtrFBfyEA5f1EaCoTtNoaJv7eef7TELFWyFYgXDA",
  "key8": "44sBaGQxcFqNAxqra6nfcTFaDuhB2NedfcL2f2jc3nuy2n7zLPeEnA35LeLJUdEr8pAiVqncWuWmXzMB5UQknkdH",
  "key9": "Qqt7M1b7Ah5BL3gp99fQQZVKMJnC3ZiATrmgsL4rYzWtWtqYJSM4HnG7Bc2fxjfYMtH7EJ5Az3kjtQ8kt1XKeor",
  "key10": "XuPRbnyiBsaPreDxWnXhTAnG1F76g74e8LwNcDbAw25qWt15hQxM9FLUqXiVUZLxLhMfNHejZYhvKiE9Fh8ghrj",
  "key11": "zDBM7cW9YQxP8ks6CzvBhzJXHCLsywh8PzSbkC1u8jjX9esBAUZtJfrqfAp2qz7TExtMCHed6MTd78TUWVtWPJM",
  "key12": "2Ag9RjneJSMjiJH58apKjgT8xYcwuY2t9S9ccKdwMhHoMX1fkXMDaJqTm8nqx681kQkz8VNxvwJfp5ukt6cLmWTc",
  "key13": "2ZbzLKumqGGb8uHzweeAr8wgyZLDZaNyuFJCMjDepWceDJ3bga8TMDBS53MSvtPLXW1MeKCs34EHxmeb29Vo3dKM",
  "key14": "3NqFy21pTSSoBYo8xEgNQcazHS1zqtecR96eLqaqJYcn3nsJWBmGgBb5kaVGjipymU8uBJizUTv6c35Wiriga6KK",
  "key15": "4sCxFkaYE1PZrPShzH8YDqGg6XUg7j3VA8X7CrHsMLhe9y4H8wdBs4SRJzdFgYxw1TRQKoaFM4A48CHLCgB48Agh",
  "key16": "5sn5LVW4JgtFsMo6kwZk21tCYk2zYRv1aV22FF2ZUXC5iJuLXVM94m6qLSdNd1XR5xcbkQ5ipbPk7CS6TXTvqiH5",
  "key17": "sKYxHc1HGgR4AVqdxDwKcdXVPBxQE5D53QGkbHCLLWnry1tTdb64jUsBiJYBkXimgt3dcCkUWtaXH67gQjFR8Qa",
  "key18": "5ArQn16fo99QB1qB9kGm2uexi3WubJnJdeCwPXmtBRGufZww2h7XVxMCRRe1uYfXtHWQyYoKJrwrFspJPMetpy3p",
  "key19": "3dJM48NXuzG44moktGcKix7sA8jH9SBvwWhYi93jgUrgAnwkYiXeXzJbnYLKb6YQT24Hy5y7HcVG1h5NUPwDTD7g",
  "key20": "5ZzMh4mwgGxSsHxTC4AhpGJfnjND7HX9DFRXAATLzHgnMP7Q188JFEjvKueWywBxHhBVmz9fNRUnCxn2ZTJVfjPV",
  "key21": "3jMc3k1TJrNGwiQSSo6jsZcHBtzU2RJ66unUmEJt3LWTtTuuRjzAwapG6YLuHiVTmaRDmeExir1o84jUKkBhqLKU",
  "key22": "3EKD4mcqv23aRL8P3cBjwYHSNDh317H93YYFMpye82QVDXW24mkAmxMpG6AWr8MvCjmTb94WP5RZFTCGaJuqPSGR",
  "key23": "2omjm8R2EecgBvq1CmJ1DfxMSrNAWitJdDLJpLkYps2QPRrFkSQov24kkv7urdHpyRgxj7VTxhsWQJH1W71Wxk39",
  "key24": "2gWXeuYsvgnDtejkxMDkVFmjJWVZ1Dqw52Dx3xEHpgV1kg1Bs8RasrcEhg9ikBjAUbhUKZCGBTQBa4ttHYNHmpwb",
  "key25": "3o1c1nLtrix2nYECNNj7QL9axjo6rPXTUwipWM3iJTUYh24foPs3ppUoa6eqKnsYkHK2njvi7LM6pdwMWfwCKK9c",
  "key26": "21dU4JySa6hGPmhkJTLu5e5x6BKrWVFF6E5kWwiZwQvsSTJpAYxmVGNvxj1r4JxsqymN5WF9TzKZTDvSxiocW6pV",
  "key27": "2Xi2p74bfhbiAbiGWjEckSjNwqWxBnTUKEJgWfvJkbyTrdkoBDJqJnDEqc5serdBux6vwVkYQZRcNyV8L6XNzTNm",
  "key28": "4pXYAkASbsC3oWkFVZ3QtRdqqWdsyjx6zhsbNbCrvP9n5f1mGXUwNqnaDRz818yuxrmrhqBJMERCxNMQ1HwfjpcF",
  "key29": "5gVF4Lf1CoJcGztPsMAz3fZmjN5rw3syMzux3yggSCos9fsaADKgnGpKfYe2gTEb5GTsQxvY9xuLa6AfFaqK57GD",
  "key30": "44HgcLyYXv5essvfSuQ3Xwz2vg9XsaV9ysbh7pRVLFBzyD45VazzSArZ9ALAfEXEXGfmY7E5N2VrHBQeftVmoUnL",
  "key31": "4MNVJ7pgr16jUrkPhrRwPZWJCLSE33AgdEkz8TJmemfz7QWCmUqNhmrptMoosLFapdH2wGDGwegtye3s18J5nDwB",
  "key32": "5DNgU56VV5LJLrwUikTbT9wmqGP6oiYMNK96VdANXUrpDHj9Qwtn5AVVB24eMsbM83kiEkRCJupKuDNwjMxabzx2",
  "key33": "5UmDCLSJL6krGR3ZW8WvanWmT9wSL2pZTw12veyxgtsiDki28VRtfZ33is8T2yZEoyBbBmxxAmS6icmkxyo5rbru",
  "key34": "3HgJt4HhC5zSCsjky1TzLGXBpohbo6bCQVfxboRFRTTR8gr2hXKD5LRGJDZJiajMiVjTK17RnSif91trpPk1JpnU",
  "key35": "2eektVXuX8ZK3zXwvZbXBvYuAadtVuFvTfNoK8rtgTsLcVdCQRb2ekfCMUr9WpCJPxW32CmmGfU895gic8wMmKgm",
  "key36": "5V4HJfd1FAHwsVC3fsiP23ZufoiVD6r8gsn6W1417HLsnuH57F1kcBhS1XDB47sKTgVzmmDabL14qHXGNZgTkkym",
  "key37": "5koG3PpLu6A2JF4MkhKs6ZLd9hhnxiziqH9KufLfRamLrcvfpyEDS2GtNgmeDxBBrNVD4bUtmsqg5TGChKjfEXuN",
  "key38": "ovmNHq7wKardXTESb2BvDKdSCBTbsA1nBHTDM5ZHJ3wd5dC4j3frUhoBvAGZDX6eSRmtZGEdnGpztEUqBjnPUEi",
  "key39": "4hnhLCV4mqQs1WJS895yQaw7gMC97fo7AXAPYr8tRopvHkeRGTUVaTxSidYbgjCYAvh5cyLd6njMECxiBsPodeLd",
  "key40": "4c9ZoTMAXxVKFsimtiRVHih2Q7hLm75F8P8BwuwWR6vmXGXinQMYQfoGVCSbnfGMs43XtABs1RCeRtGkAeMw4DfS"
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
