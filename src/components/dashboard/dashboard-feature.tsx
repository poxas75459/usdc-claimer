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
    "3LdSaBDsXNK6FuP6uK9JjnEFwJ97A74KfPRSEkoKkzr45NRjCbjHDL9CYLYameBKuszTU56Tgb8TM32G8bsvQxpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RLDVSogkiGeGHUJmKjm4N5UdyQRCykzCsvaxG49coet7RGqkNzqR41yK3dv5beXT7ozqGPzb6sNgcCjWz68cYdb",
  "key1": "36zYr67qPrhm4GnZvRemoSHz6oRnp7Z9SWnYfJB8YpdXU69z1PGaYrZTY155yEQih8NgGTUJtTVcuakpvXacsVLp",
  "key2": "oR45PawGB78opGeMBCLiWYrg72CmjWvFTM1RJMBr4sPfxjDDDnp83Qg4sTKmK2eW36ojC38dPML495SnxEHHSrA",
  "key3": "2FN5ddvZkU5jvaP6HzMg1MssmgXkSwD37o9n1xuCcHqVoETZdfDbPngPnnRS4KxAfuHb1NStBZ6ZMhLHKLGkNamf",
  "key4": "3nsPuG843Rqpw47aAxmMCwrGHbrLzasSGjF6UaHyEDti5D2XKL3AXWic2Vu3aavDA3LeB9N9oZb64GudtXg2d44M",
  "key5": "8n6AuszSChaKRw7XsvRhbMhpAZpXEUyojQLvBnXY9JQMSRBoaXZF42pk4xbWdwkPf16poDD943Umr1PDhUMbzxy",
  "key6": "4zyuE1YKZsU4679tNw8wGaDeJKiDC7bx39Lh5B3EbsfhH8Ngq4uVAb6bZ7qiDJPstQwqASusZYr3fWqkKfghEwZC",
  "key7": "5H525nZWLi9vWXw1q2ZitCRDBx9oLRLJ8rYNCi1Q6bhQHgyAHoQQrKiwoQ77iTRD2vzHhG3gTo1G73AXpxgtrePX",
  "key8": "3S5QexQHvJWMPRUHtiDEKSbxaE5bYbss7DmM9LBv9yGnTFxfhpw1MjR9rPFXQXTTsAmEzMzEc8yQgSmziRRtS8kN",
  "key9": "4DLLSdnKxrzynuiTfGewQ3VagdYgKVPbaT3zQjLmsEtkJAoM7wd8ksWkCshoUNedG8J1fetN9WRomh9kQjE7EcD1",
  "key10": "2zacnxrxHzGxc9mSdswa6MTeCoXjfg4UdzTFuTqqBz6vMdj2TZEjBLwV2RYNJb7yiu5HacWuT3dgwtQvuUGnCNk6",
  "key11": "5BsK1H4svW5kTwjHRnzF758JGe6YyDgWQRrc66VP5ADrFWADatEnS8BNQpsgwNvs6nesjrBuNmuHfsyeziWf67p6",
  "key12": "63kZkeWKV4fVdvyjokYwZd744wccsLcbu83Sh9At7umtRsi4LZ78nLusGFbTYMrgdrgshekTZgW5NGLoRTn8xNYZ",
  "key13": "bWnoCmBjV9Leiv9S433CWdyDmd6gceFtkX8ZK3Dav19L7rqAT2Bay7u6PhjUuKCeMvjjCXUPvsCqHWZ8sQhjaqv",
  "key14": "4BD35Z3q8an3UzfKq6Zrcxj3JXVKbrVXwepovsHWnCvz28tfs8btkoySHg1A2FJAYPDaj68jYC1JfnHzRtXNkd9s",
  "key15": "5pZCbCnFVqci8xmJkG9mtJPESfptLZnbe89wPdsHV3EU8DrUzVgZXfsxWCpzTvR7ND6PWD4e2rjjnqktq4bFYJqs",
  "key16": "54G8SZkV5eZtS7fXvoerkgy1be8NMHmzMFJTYr3Fi3MCsg2kHRNmjUL4SHM8YmvFVWBgWehK6QjGPNNdg6TiXWVS",
  "key17": "HM7Luke7JEv45XWVRgfYNLf58J5FL5yfM4L1MBe3fr57XoR9FHwnQdWA5wgVgaixS9dChLfHAjm78m2KuVrBfck",
  "key18": "2tC9Z5C77iUSm8Lg8ApYx4Cqqhptzixq3fTFuC5iyQwdq7m7uYXG9w5zVcXBUzXC3YZHs8BQQiU6YzgTYhXHcJcE",
  "key19": "YUEyTa9v9nbneeXhsbxenqXAeRx7wwEfsrKG3geXd4p5JGk9W1Q9sD5SnWZ18ndanqBaXbPTeJKzs2jce4r3AyR",
  "key20": "2pY8N3jD51Bci5CfAzt6E5SZe26MeQFLLrSPGJK8KZUCHMt6SJWqTPWHv1ocSNv34Z7WCzF2BWTWNbLxmmcP129V",
  "key21": "RwozARkVhTrfCnuK4z3NReRJSRahDatmisuRdNrscPk8HdjJ9PEFv9vUrze5MWRBqhrWAe2xPP5MFoGnhkzgnRU",
  "key22": "4SNyUrh6aZfNY3NaFxYfwoZXvBG3pTutsBSmL6gM1WGa2B8T7dEXDHq3PCYQPNScRtavjkZpp2NuZUmz3HULWQvX",
  "key23": "2kBdREP7gNrioVakpZWJkYy1iFC4MBLVUvT9A5dCYHB8hxKVykukamjzL3seNtHobT95hnHKnnKYhe1SUTnJpHFs",
  "key24": "XLR9KNwtRMSgnoweA3qJv6XVahp4GacZeS8ZZVz3TaraypiryDZPqXLXDZ7J1rCyv8uBxLtcvSLJKofhSH6f3rd",
  "key25": "Qd8eTQfRPENNviBQHUAunEfULdms9jLDYSwp4RMfYGPGgg8Zx4My3JQeSCHaj3xAeqvodmA8rBR2gZ8pcdpC5Dk",
  "key26": "33Mjk7CYmDFc8kRzptnXEG8FHaVrEhMnNV5UgnQPRx8JJYsNnJDzZCNigDs5m5B2KNeVBGKpuP1cy9fCVfP8zf43",
  "key27": "5QbvN6CbKmoJwSpGBdREJr5AJE7a1p3GFfhsA57U957PhM3YrYCX6r16gyXwgj3cs6KxpM4fnFmn3WPCyV83d223",
  "key28": "23RkLrvNbtRpUX6317zi8Dcw6Lwkaex7dYF2DAbTtB8yv2e9Z3RzHasUS2Yk9he4UC8yaGEhwk3B3GbNbcXoyLfD",
  "key29": "431tT92saNDJjHg5rPtzfBRnNWTeADvL4oH5kZB2GUP1jpEDH5cPErREUoMKo5JL3Fymcf4cwGpEycsi5orKUcTT",
  "key30": "3YL4WgPDF1kkNsp5QzY7Db7D29bNY3U8vMVyJxoKfnt98LcDiv5tJX5cThQZQiN7EkLubw3iCWWf4QFt4pPk8hg5",
  "key31": "4tn2R2X8XnCahLEyCU67YVo3oQk6MNdULudWi6CG69D7SF7aNx6FZURPbBTrCyumdfwc9iYrtfitvemhnSGertnu",
  "key32": "XEBhdLP8BVLeGcEwyY4SaquF258HWWoZCAoCqf2HD2vKnoARDoDK1i41iVMr3G8QzfzCeLSDhDgSgooXmTSires",
  "key33": "5fbiFP9P1H4fdugLK3aSmCoRSi5jjUqYfL5zgzHJyNeYPCytEoptqMjVCxXw2KdmievpfiaH4kiaHwHzUkAThdPn",
  "key34": "33tdAZXteGN1QDti2zJdNF1Wp5yiyctpM74NF7DuUkvzBX1wAmNv6Z7W61RVVqJ9VW9kLPhc6MVdoS53vggAhuLk",
  "key35": "4wnjEgefDXyKZQzAgYpXhgWkrfrQCu2gnQWpfLqd4mnb4Xr3bjC9Nb4fsQdA5EwXFExqjEWv2NCJ7bHSZ4Ab5Ton",
  "key36": "3QScdV72eMr7a4B2p4d4u8MrHz4JxR5k2NLm4JVKSTWaWFtbSHASSdKRcm2FCJ5LghBcQsWXmyCcRJmS9XzqrDSj",
  "key37": "3JN1mRBLZYJKDqjh47CjuQ15pJBy9GzRGLVD6W6KZS9kUdB1MX6bpmyQKhcVYgd32zgwUDfTtHxWDtZxCPBPva6D"
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
