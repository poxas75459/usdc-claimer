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
    "4DC6VkkAFzhDd68Qi7Ug8zZButbtJZk3ez9LqkRTp4rw5kXDiuSdZ5pBUsqZTvFRrZVqXM8SEHaiGhbNbSkEWNvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QB3p1ajitgMiQ3fwB5R7HoD3FsP4k3JTPZ3BoaC3ye6LNECWaBUW1L55tU4gfaRdDodyRimzjVcaLS7a5YLRCbw",
  "key1": "36r7G7pYGaG2bfZXxqUr3H8L4Jh2Le3vr1iQKu2dLAkRAgNxxZwnaHr9Fb68HdgeUXRVn5dLKAtnBVpchFGkVVSs",
  "key2": "DaLwMciqQEKVRUYH1Q1oukFv11ScyFxK43DdTEmZcpz2nHZqkPpaQw3MAADY8Jcg3SvTRwceHMHCGYyayeXv3SX",
  "key3": "32u4fczH9oymPdAPFQGLGAPPBKQHkk3iWHUcALVkCTh9B6oT8kzXrpdCFGA8eF4TK2J62tt5eoNS52ezTmNSacnq",
  "key4": "2nGAejUrmhhr1HRG3ra3QM7n4PExJder67ebGD3TvV6x9hE6fHx9ASCEHER6qFP6GrMgaEp3Ms77fJz869LhEShx",
  "key5": "3kecTC7c25kjpZbbtntaTnPVxAJwTLibPdWQxmUF5qT7fZb9kiGrvqJVd3Nxq8WNW4GktuQh4KjBD19UsrHioRaa",
  "key6": "2tu4V51qtKvAV6fDRaLPPuWrYhh9vA7s1V7b4v4c4NVUg1mzrNmYnUdd2FrH57LvySfHfdRrNiyLC8c1feq2ZxiN",
  "key7": "4N8Yt7TjwUb4cxSHSbSMnNdvDy2tVXTQ3KwRWB6zND8wH6Z1zKkZAYZDxVqPvfUEfLDwR9p2fgAaRGfkPiMXREfZ",
  "key8": "2jWwLBCNNbeW9N7TimW7mTsphyw2cS28pYvpGuh9EGpjLawko8ERnv2i21jauDjGaDviu9w7qx8gWBVKYrn1bquw",
  "key9": "4J6PavXkQ9wmAMrtoTrwDF3qtJZRJFFwnBvUdtmxjJwLweaRnJ9y1xTEyu25ner5ofeUsZHy4qZd9oVpvromffM1",
  "key10": "HHef1LC5Bp6HiThSraWkYgteBbsh1A7qd4m7PUsi9nmyS9jWK89NJXZokXZQdkn14G1nqa9LcagU7ZVd2sSUmTv",
  "key11": "2tEk55rUyTkV869rF9TcBkmiLo83DCqN97mVrGJesRMzDseQEmc3raP8Wmv7rHe1bFq9sj7d9P4TbsjsEAbk1FRH",
  "key12": "51Q7GDSgpi9vsHqC2m8U22xDLzQGoXnopWz5q3N7LsNpbWu6zbj8RouA4K1pQ9FmYrSDDUP7mQD1jQGgGHW8K2KP",
  "key13": "3PrkBm1xiXngLGcKn28MeLfLaM9zuKJ3W6gvVvPLspsMrp31dAaNKKKyBhad7W82nxp3tU6iPrvKagKu1Ls7uAHc",
  "key14": "2z9WGjXFHYrv5x27ZJbWFsM4KEJfP6uBniJHVrmnfUBscH3866EQpYc8Q9jerP3y7nP3bockkF4j4LN1kSgU9t3i",
  "key15": "39cbumbV7Y5YjPw35uWnrNpVntMYFCHpxW9ce2M8uLSvvgU3GA319WBnnKMnz6y24ea1Wx6h2jMfhK8QVzUrtrjK",
  "key16": "66sP7QjHwUXEw9keTQbA88mYEFRRdJSJ7SynEUi23dDmyo2SQY1qXpw2UuZg3KQVTbCZ7GWpt8gT83KWeEza7aWp",
  "key17": "5jgxbg63ksU3Zo1KHXDWo2xjtwtcYx3ueqRbDVAVr5nNrLeScNqYCqL5MhBTyds7ExhggABdn3gYcqDSNa4CFmhA",
  "key18": "2w4RDVNmm2h6uGzcoaSvPGDHx4GwEuNyrodBJ1sLx7g8gSajihkSHosXSpJTN41585U7DTEoDKeuZi66iU4Uf32i",
  "key19": "4iebV2wAxTWTEoXBk4gLJszmmeCUaXv3a7pPMuvHtvjCHhZBAvNv4e4u7TvVgkg6s9UMSinTq488ZySM5cZxV1D5",
  "key20": "52gncf8HQqfgmaZDJ6DM2H9sc8a8iuaeLDx3CGooa7BwQBdEpqPcZVnqdeVbnmAQ7dZ9NAHcuFQvduS7Rkfbpem3",
  "key21": "3KK6v1tJb27qr9DqA6k5dFDfpqVNxbw73LA2f63G6dHjJFRcuse4enaLyAoYWfAwUBPyViHq5Ufkchgjz7A5Tbo8",
  "key22": "3jBT1sUWnfTTEfRCaEQsDbCbMGL8x4jCGC2bvsSV9CHyAeDb1mFVqcpagCaCMCKy7J4ykYNKMDDmvPdkUJDsz1EN",
  "key23": "5CHmDp3V8c4SSmWMySoh65EzhEKw7zyVN2hEFyk2dQsxDmFGvBRQbWqWDAS6ju2LW296ZQjeEbtbJQLdZKqby7km",
  "key24": "5JiAnrg3dBKfkubU3TszNFg561PFo8VpDcdsabZGk948ix8tXUxc26QLw6qHg67EQYp1HngCPxrQ6Dahudz9EJAu",
  "key25": "4LF9wf77yEDQdSfv52c73qAWpZ79PHDDH4GDjy6BhmyLN6Sh4GoxYcChNVBWTHEoi4EUdMj7Uo5jNG561NxSDCbU",
  "key26": "8hA2qAhHLKPNZ5bxNgtiqeCVrqbvmT4MoYyQFjCsPyMdS6mkFA5ZwBiWjdbknoNcXbyhB8BcHxjzqki8Ttd3rvg",
  "key27": "3ngctUnUZbdmTdLFUspLiMqHrvm4nK8gCsEhBZjGxeT9HTCDzqAUS6K1nzRLmytJ7z6192a126deWe5WrH3w8mFn",
  "key28": "unMvzRFSdeiHGLbrGiW6wfnQJhPu2zyBq1cik146AuBSnY7kHrn4LguA8cHndcjLGFxzNq6UnD8ecjhGygBAaB5",
  "key29": "5GPxMQefi6FGe4K6muqAyjUCdhFYRYq8Pw4DYAwujshyFy2RikyXrorM3EeQtjYrW98NEXiCVDJATcwuAEX88e9g",
  "key30": "3ot5A145ShGr39NbSuPTSzNWmmQcXoGyKJHM1BeD3JDU63TajQPZXFpV13WrYxYmsyGbLRSSb4tvwTaBmTNBBavQ",
  "key31": "5J15q698Fc9kpFEv12Qa3E2Ld5Q3EUjyeBnYsj5uuxsjTqCK2v7ERMFxEvxTabBS7DF4iQAGLqaMrNhqzCHEn9iv",
  "key32": "5Y5MRZpdAs2WKEDKHNytH17wwHucTbMJxY7HCh6MjttMT6nevB5zuWPRx8EG2o3mkJhbWbkMkq6mpar8Fa3X675K",
  "key33": "5JRvpXDGLUfmdG2tUoQciTUWCqh46o4eHfRwTYcqN6yV5sdAKZ2VqwJRUR6j6qmTp9gYHM7WpmRxobr7pLV8UHBN",
  "key34": "Qc9EPJ6C8bNXU7MEc1mQdubW81yQzCUmtvDeKKn4493PftUbnCa4x7EUTwqNaDLhMG8ZuF25aerBz84BXGifSWt",
  "key35": "26sk7BJnfvwQ8CYPsYv1CS6q5bWi5YxSNRmCMgQjCTs3RMoxEvsfGUJ13XpnktBhbrriELUXSs3E7HTfa9pw5J6s"
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
