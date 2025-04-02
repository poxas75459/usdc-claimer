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
    "3jpMSZajFLbVDn8sT1gk2AF75z1LxQCnpMJw3j6heLZfoZnDxzwDqS54G2QnRni8JR2tQc279Pg6nFTqtNEAxzLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31mw4ixqV1rqiGK4wvNq9NnNeYMw2ZPoQCZZNNuJDe3XpbV9iGHasMVwDc6w4JCddJWDBmxLqjXQoSfHcNVNQXnh",
  "key1": "5ikQYZtHNMopBWg888P2LLmJ5wLXbKGJrqiY35D5RMxsQupY2PA7WTLHsVeMQCVdzm4XJstyBCs4qdHq1fWxH4KF",
  "key2": "4JQwW3bV8D3PmJjTMPkKSoj3HdNaN5Pp1dGgTdjEAeAgqWXvnQPkLRtMcwvgiBdYy2yaWHTq5Qs1whgjZbzAzNCP",
  "key3": "DbCLRjYa4aQJhgByAbzZvaXQELsBLc9Kkx9eAwMC9NCUqZRjeR5k7anYHqqWwpL21q4XUTYxgmQvQeP7715yhsA",
  "key4": "1EZPgh7omaSnTTvQY8wQvmfpoyQ4Yt3K4fwYSQSRWEXR54SCEePeSDnTyGAoih4AdasHwuXiYoihks2CgH7QihW",
  "key5": "65y3eZNqnjw8jZNt1Qzf37gKJ9RpUaCunsnXaGwUxMgVUyZgUfvxAPZGkyKi1UbytCHyGXzWC2RQFKc7vDRkrmuz",
  "key6": "iPhZcfWPE8C4FpctATvavhLiWCwiCbhAvjJBYPTUTc8xKtk7wLy67mKJp1JgyGGYqC4iwBSHFWceKMTCJfuaRZX",
  "key7": "o8aSnk7e4hZ39xCPuEfQtdTV2bNwvbFdUXMKYj8SebcKvQyFhVg3uLc7AGsB8EQdpdXVg1FMtPKSV6tFjfHe5WW",
  "key8": "jPM7xranpm3SV3DZoSD3f9tyBsvBTrz4KhKqv14jHzAjXa1YGaiZ55fBtkGYjqxwEyEcnKKxRp6otyixG6QcbXx",
  "key9": "3pBtK6oxd26fqtCpECY1SAXFDfW4o38e7iNX4JhQbCHWh18GfPpUHhtModZ4H8wewcq8dEiNtBRETVKLyNg5eJZ1",
  "key10": "3HGPjw6bXYu5fJNtf8ZCvubMRx6UwdTGgRS63b5YWNuJcT8FLz8MSDNjXkCsepke4pZNPCvtorWVVxsE2VccjHip",
  "key11": "5zG7bs57USXJbxnitV1ocJubh6DXawkoVUsqE3uUP4PHaSYAD2J9QKWiT5fgz3KFiyxrYQuk68DGrkCMEL7toJmD",
  "key12": "3roy75hEKdmGrgFtZ5ooExxvFvZA1ZNYeZ7eBFXhpVArvjWYWMUZ9M1rBTAFwAoYnYpEEekW73ekT8aBrG83eRDb",
  "key13": "4Tk7G7KPpSPeSxZGsihyimZLbKWPGNgyUnXAhkFoxrSpciFNXARFDtkiH2t8jBmnMKBPGV5ho2GTUsMcDfBEpgKU",
  "key14": "2qP3xxwSJ1wk6xmEqWNtypT2ajJEfHMdLTrbP4RiXTxamhZfWKLLNx5iZTXMPGyqpZiy3kwJ1iJGrFntBp75JJf",
  "key15": "5JBRcCTMZdQ56F2ht3CW3z3oGSLpofR9YQETprrVXfKPvYSGMDz1TqdcrEvddZTcX4X1hws4LKxCCF82uuxFM8n5",
  "key16": "49743HiriAgwzsep6m88zj1ReVNBntVvc89oo9YJfSEBWGVnWNBBCtLd6wWYZb9TzGJE2eWvhWquMwCPN4fiztz3",
  "key17": "2xDLsCf9cKTvF6swZpG65w872tfhLTx8xUwTho5vv1g92bPuvPXajGK8DPdPeEajQx1S4UC7qvvEuJYazonSpfxd",
  "key18": "4F9hFhh9bX4U2nUbWpGCao5rAVZcgLA3C6nUmUmQKysrz4HWdJuy7scfqWVPC3x52jk1i5BQbUEyMenhSQjmdNUi",
  "key19": "2kQwZJsqGvgfuivucPqYT571VhbDcLd6p7oPtW27i8ckAJLeWXPcLpDy1o8TF6ZRJFmERkTRRnqV5Ws2mzdNenJL",
  "key20": "2vqhg8VQrrVvLu75jXio1Zc9Khyr6TgbSCqzSRasF4sj5Gr6q6onHCDWBuyW4qa8pk3YbBAVFhvYhoC3bJTB1r1Q",
  "key21": "5xmUBuCgtGhtXAXrQRCd7JfVpt836sw2Ts42QZqJ4j5FiorsoVojCmdxPTuHiR2uArJHpAALX2KB9cqVDc8DfhkU",
  "key22": "3G54wLRgMqj3Xi6Ddq2mA1bSZpDbVKuAeyVwcWDeetVwXvbffWAFEmFoEtaBw7jwt5qJdLDdPL41HZhp54BxUUEz",
  "key23": "neVSsTtpu3d8xUjVa78QVcM8DJuqq7bYDMyM7ZzqSpsPggAUuGtrGgAgbfzR2J8dTtxhahieSoFPoH9ysogah11",
  "key24": "AKD182N4hr5Fef6miFKFzPPfrwSbghhVTcpJspjY9uEeoH2eWKXutjMbS9Ydr87sUBG5QuiZFLieGQWpsknBf8Z",
  "key25": "ZG6V7XePNGixf12uo2pThGpuMKHHi5bFGjedHhU6czwphzaGa47TQry2oDNPn8fX4crxfj3iqXuYrq2Fm8mZUuq",
  "key26": "2e5Vqk2YFj2fwM25GwBFtYziDFUtGhXSbz86oSgyX4mUBxYqdzzvgTBgDj2zXn1RJ76tmAPT1jgceXQBsCoVJje7",
  "key27": "4oeaimMXaQbftYookuhdknZxv7BZLZ5UtWuzumDuQmG1SzJ4gVUdDh2UDNR91zfmn25R6Kf8aG3d5vMpCP2e6RcN",
  "key28": "5Y91isEbwWQLy8vEfnYRXDX2fXwrKtFtJsGPD5Ddyd77PYyjt8bcy3qquBsND25tYR4V8ouVqRykPbtNGrTnfpG2",
  "key29": "8g91dE4rty94SxpJLzfD3gmTuhNczFohCLrGzv5voenEWiQMZ19f6xxQTmp7KWu7eypxTLgKM3YtAiyubjdzs5w",
  "key30": "5aYpkV3q8zFYsNakEBJ7hZLKGDiJgqmQGHBaTv3mpwch83RDjY2rQLQPFf3sgkBXjjTrLYNb3jsG7tuEQv7KZSms",
  "key31": "44mh42SSQ29mj7YDTnWP2GY1Jpr86tM2dDaKEjWZhTyZFE6QXrH9gdEAruZPXkoXJ8zBivPRzwxTJykwM8Nk19L5",
  "key32": "4CpyPzsf5TqhJzWi2HaJdbjpdDvDnN2KrwCJ5oyyV3TX2UmJUn8u82xupxrdsjzqmDVM6TYBH9Y3f6BEbPAPPxeu",
  "key33": "5rnPfVf4G8NXSNSVU2RddaGGWREpARVqf7LAa6hbZJ4W3YDAdmHDrQYRDFtvtG9xKwWrjbgXrPX5NWWfgLyQT3ob",
  "key34": "2jwFWbEnxMkt3BXAskHv6KK8qQchZQGskL8TqqzjQ6yn5wk7tNoc5JjHkwHZF4494L7dkSo2gkRJ2QMphkin3VdJ",
  "key35": "4tExQkAbwer5cD2Mx1Go2mazssytHfZtKNp4RJCXRZFyWycuK4Kf6dTMZ9kzSZJ8mSAJtwAGVj4wr5SstevNb48q",
  "key36": "tem4GqEa7Xw9rD69soCSmmN1GguHrQHPK1CSex2vXvEgcRudtFprzC2v6WJAoYdCEEgAiLwSo1bMnmMeG5bsGUo",
  "key37": "38VNGezZWcrUyLTzSBJLsBfavosV9BKYhuNMoHAsq77J3EivT9YekjSd3uVSgGosyPL5zYYqept6oUd9kUGZaxF",
  "key38": "mZjwEm1Uw6ftzJwkKTyB5sCfqgRLjASzXVgqiAZhnodQfAZBcmq872W9uK1T17S6phP5Gs7pBs4pox5DhnzyvgP",
  "key39": "34xfvLLD87JhPmvHXA2Xd1rUixQQfXmFtYjVuArzsz1medQsnwmYp5CvLWasxFqKZxD1tPLDmVwVVVRu8MGxG1Ti",
  "key40": "sz6RCxFNctxNnXz5swcRfdyu7WmCzuGS6trQJKCGFUvLckeGWSWoZjLrLDi9DvKbcMsJAZyf5EC3CzkBAwz4xjU",
  "key41": "4JNihUotyQCGo8ogHGn6vF6TXKTDcWRTQhbUy8XFrYv7USAqcVHp9yNYNjeodgEhGfzDpgggmVZpgGGsjKSZBMyT"
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
