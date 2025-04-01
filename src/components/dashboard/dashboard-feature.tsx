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
    "2yUKB1QAk5hDs2pHuLPCdQDFtMHn8FSasuBm5Q2mfA5PYSf2nHnG8u1XiCxFZxRf3kwsSu7LSPAeLWxuuYS4JBVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21sDDktMtcjwDd1dFqNaey7a7ts4GzQUMZTNP2XiocbC4cnoVmSAtNsKPhWubnev4XUXLhUvyQzfVBL8sGiT7seG",
  "key1": "3iYkbAD16BBXQNSq8ZprL52oHerhFHDN8iJ5ZsDT3cj4pus766C46c2Mop8uU4ZkL2XYfqtHmm7btYtA28mcosnX",
  "key2": "9Zfq1TXF8tuNVajP4i5F3Sjohaykt6VM5fqSfDA9b9mmoppxf7PYztqjnFCdTUonqX4hWumabJB2bfHGkw754r6",
  "key3": "4SmVFC3CHG1v8UC7dTRJQ6evuiv9x6revyp5hJca8hzrfoAt2XaPP23X4rXKxJbznbmrBqgF6y9nvkiEWjPro8iZ",
  "key4": "4btCm4Vk2XHquyMkTa1daE1SemXoAGMgBF3Cuih1TQYCPe8UMB4ExobnzhaZprxvbHJUSPhY5sTsVQ3bRfJCM5FN",
  "key5": "3PXgP9yzZrFqMVejpGgubPMo64dd5FqZee1hd2T2ZihnVuYFyhML9whqL4qYd14nYdw22Mdy5tw7yKHf8r2VSYJc",
  "key6": "3F881CDyxjL8R4NBFeGjUYUy8gDZjRuch4i2itM1MKZtrxgahKNmxq9EyT2t5JZ3GxX9qxkGDgeFamMMpDqYWrmR",
  "key7": "2Xq7wRCUQy6M2qCJToM1RXqLJdtgKoVNkVF3Fe3H9nVxGBnoPr4uQb9RyMNfLMcf2fbcovMsv9CirFmhsVma8y5D",
  "key8": "61oZ2hCygX7ykSh3FfvSfWVjsjXG7NSMNAfURbfEe2dSmQxr43Fc48hZbXwLV8AekApZ5ZVkEgs6mBbckwAEtCgG",
  "key9": "L9MrtGfkRMEAcC2C4s7sWFYeLALFTmcsEhPMcTsWoKyoA99K8wFTHfnZ6Sjv7qaWKjY6zdf32usP9vrE22B5Vha",
  "key10": "2iKmybmB56RoE15VgqgBJjoYtUvE654WBg5H8QTNVvaodS69ED19trh8QwT3JNHqcxoEyuRf81AhWMDUfDa6LfwX",
  "key11": "2wrLvDTKmaTQ2XFVhyA1JPzCMVtZ9wj62FaZRR7hEqZWxb6n78y9EA75bgapbaJfEREzpnEQTNZF7KHRA8oogMUW",
  "key12": "4DU8HprqqKMpp6pzryEDmb19XHus93TUYACU9nY37WGcNESLDXQ1tE6W1gykZC2YqwNEvF63ZrBougEsE9xPro1K",
  "key13": "4B4gHK9r8CsnNWWABVzBVfkhEtxQGXgo2EB9hzpFtZopuxR3yArHpfBjnviWMsAaZ7stjUzEvh5HspgP3S38P2qB",
  "key14": "3FwAuNrNfaaGz2iwuuFVQhNcCxK2MpDH6WJsWf7B1gAPpkzU7R4kBPhxgwYTBw8CNHf43336KzWRahsjQvsDkhqf",
  "key15": "4jhBzu86MWodUdqKm9WmUEg2UJRLwdSwkRTpAaXXJXEDtkcyy3oQeTRJigrzNTV4QefKViiDgqTfEt2UCK9eH4Jz",
  "key16": "52WkAYB344rkNxMKpyXPwFB6WBUjHZiEd5uEqWkscmdaEv4iZSSWU3Yvsw49H6UVa3KHyHNcwPnj4W8DJS88MvfU",
  "key17": "4Ai2pt9cThg7Tjcr8zsi3Q85FPRvCiwVPqpUzTjY9ivDcrErQSA5NFqxRNVszCkJPsPtwCNFU1fwJnZQqnFQe9Se",
  "key18": "tCQ6XQvg692kBqfZKSm66yPjJQvC4PZhn5jVqKWK8rADJUjG5XCPfZWFGxZVQXj7JfHEi91etFvJqfoB17rueGH",
  "key19": "4yEFgTPcdyFmdbDaTfkT2KWeviLiedto9gi6qdUuHKz5u7STKQ65NXVcEoie2ykkgWW5KSx9kXWRab5B8eUBAvaP",
  "key20": "2bZ2imcchQ8NMwjPPA9TGhhsaERRtJLwbzw6xoyE1va5TDYUuXKAxwGd1cUuys7bi3qups1gbGy6c1zQfReUD4ge",
  "key21": "2BnJnEKZRqQYJ9RRFZfguXb2rbUD6Dne1pfiBxduGKMTvzFn1PxgAkjJRTRiNMhWWNtL6mv7sMy4AkpDzwqqMcaL",
  "key22": "3V4QHo5EwLwtMeYDq15GDUvZxTBj6tPCyYvjtK1YaVfR3N7avFNBfJ6Xw6C534dQ9MBqX4811M7EtTNci8tecFRv",
  "key23": "6unZEzRto4woMMSxYnMow9ux6VryAhAm2g2i3G9DG1WMptSurWGGKwv8GUrZNFKEx5f2kjS2BVC3B61mR3hJqPP",
  "key24": "4qVkgdbVfK6d7cMP6F9Hg92B6HTsNeJvPMJomN37iUFSLtLw1Vk9rx7bHV7psxdGGHxbDdxMQUzUmv8jYYLXYMKj",
  "key25": "4KUjvSPoQdNHHgKg9u51KZPe7ATaR31rSFtUeK1CobBgX3SGUnEmvgV8sycvsR8QKUWYv35BQPHgwxR5PEDyvYTV"
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
