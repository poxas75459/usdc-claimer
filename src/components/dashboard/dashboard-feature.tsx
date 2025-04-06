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
    "2ofX95AUNNn4WZnSg36UmsEivxKj2Z4r3YECBT4FfkZPRKsMhVbfJxA4U7tP3LZ6ZMbnpBwjQY9q6BZnuwEzGezb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ELeekVgGBmcY8nV8uE8URp6PrbFCote1rzNyWrtu3wJx9ep7XyZ3GAVqrhgm1kEHZHBMLE4qpw3KuAftrVzgmzn",
  "key1": "49BdUHufo9U1L3fBxDhvkprWLSa6JzSCziQmmukamitEkS5vH8w7xQ421S9aXnHUkzQXSgvxrnx8F2MdB7QuEaXY",
  "key2": "5JkKtqCkdZB7jGJGWPr8VLmw3etDFSWR5K67yEMxAAEEiJJPmnAFDrNErnp7i3i5gEfWi37bhfKWQ24xSmxoan5c",
  "key3": "2CWqjY2UvFnFY7Y3BEXnhmtwrheoMNPidLgxRwsby8pDw54RG2Yrzj9grkk8BHcHRoS4JsSv9xYeLT9NQ51UmHZt",
  "key4": "4ZTMYVFv8NaXksQonmywxQuZU7DXXNbP3SxpHJhUaa55ASoUaX49JhAXq2p36kNSVnm1JBsQBLAARR4Bz1aRF1Jc",
  "key5": "5TXQ211fmGdkRN6QJxZRj4Y4tn7mBUNpWgCJ9A28t9HJBYzqnMNP1tNpgNB9sG8zWaq38sHjD6e6C3Fuukthu64d",
  "key6": "2Ctq39qGGk2toWAtC1bR6rxYQuAgjXWQaEEb31BHfHpWyYcPWiy7aA4RWLFwwC84yQ7kJThQMqogGZUHyCBPd6Mv",
  "key7": "3f8DoQS8ZYKV1xG6SzfG1smNaWhKjThdgXLyHHLHvB1TtXhqjVkAdpsgT8T2KLR1319t1CddyLYK1zcM8uJopsYz",
  "key8": "36LefgKy3BGS2ZfFW9jHvEvpDePo8ygzyHpkTdiH9EKpG8C3QptDtSRmYMRYMQXbohuW7Jsj72JyV2Yn3offjAdt",
  "key9": "47cABXBC2SGdLG1xikDJdzufbksUCCSmjYgEGG7Zka7LuRZU6empCTXCj3KiXpLipGK6S3jrfDJ1k5XeZP5Baiz2",
  "key10": "2w9WpBqtFBpZ6uUYVd38KBUf9VemcH24Jm3xHL5Lf3GADSGeNDMEv4DdR94FxKe6ZMnGaToSCuNoKvKgVv27oSbQ",
  "key11": "5WHPny2L734sSavAU8jGn6c1WERogdbi5YB9xpYHbZ4pT4dXMqZnXrXBp3K1dFMpwLBmkw1CAWjMmmGe8nLDFgyh",
  "key12": "Q6Sixxn4iDJicQsvbrikBYsAC82HMTapq2qthGeunErGipC5BbEDmpzxX14CW26W8YdaBSbwsvH4KYtRLjv1ikX",
  "key13": "2JUf8XnSDzJcWzqRZc9f9iyPqckRyALZCsohjMGQt3B4FdTb4tNUgXbpdkUQdUV3PvUzkk5c333mXZ8CVdYhcGCb",
  "key14": "4M9zjjNwP4LthTsBDvtNspNhKMvrBG16QjYX85VQNJzTLuApkjowt99dBUwygwEfE1YYTQMBmC7arSboiqaVBLeo",
  "key15": "3ZUpW8v2WsjHXS2aax2oRv9hQ9DzTjZdbAD6tSVUGtvfim8BtcXjV1HV55c5ANcaAsCDTe8rgWozo1QJbrwNXsMw",
  "key16": "5r8tg5V9LFjn4w1FrdDXMUR8Y1XLDtLpdi7WQs5MWJv1MW6F4tKC9DxpLhd7iEThzxKuxiRGkwhd6RtRgfKptBnu",
  "key17": "6QU8sNC5Ftx7bht7grpggmN3bADHs7SoWGRcTavvqmfUGJZjhGE3pA3VfyTd9P82g8cnvzVKsAHvzLef7mViB4Y",
  "key18": "4Yss6Uf4Ted37ZyHiayJSXr4hcVZGixosYddUyMhRXmMCZeuy9wZJ5R1eBJqqhLvNjMPBrLjgPQ6EkuvEbzwjpKy",
  "key19": "N4fRFFgsZ5J77Jveua3Kb1S5fSvKgYEKg8TK9TsmkxwfoDdqxzZGEoXdCR11aTntt9pf4cTdL5cTjvd8fE1snzr",
  "key20": "uWPzxi2Pm222EuePW3VxBbFG216abYyCkrwmQbTruFgeg6PjsEMB6pVa29uBuCPD4yjeVDoKrKt6Jw6WyHw8vuw",
  "key21": "4oHnEH6qB9dBNbfYaG9nKStzkcaZg2ySbKgyLWdwy62kSs1NEMahm3RCmKZofQmsHRkpRMrmWUBh78LomiFcyr6r",
  "key22": "5iPcMc9QhtJDQKTFU8Vz9quBV7mayZ2JQ3ZUBv7QD7jKNAYYSWYPHbg5VZtiLpuYZMvpqokL9kVTAF4Uz6UNCR7t",
  "key23": "238qCDwD74UTepiJmxARznNmd8LJqUgsQyoMq8iYmFwMHqr7BibVR8T3jRnuNBcvAfkXRpwEfGgkRAoBVRRk7A4J",
  "key24": "2Hvbk6defuKJWZtKFiZq5TWCotVMiZ9VN5JJodLWPee4jeB4xT5fw5nj8rTZ6dQHmtX2y7ycXzJeLq3C3wD9cJuX",
  "key25": "4sBKZX4pVaQ8TDnxq7QGV2pwXekFBfXDWbUG8J46wLJv2SJLbdTyFBzsZVAywBbodHhfxhKSNiXB7rDGWLkps2yB",
  "key26": "24KdStxo9BSjKgd5mkTP1rDnaxfPgAmg4eQjaus1HNBT7DyjjnXHGjwhsTRKrwEwW4m7GEiF2Qj9EHHjcE69ZzSS",
  "key27": "4virdHYrEb8Xy3r7Mhd7htiShwqGDN2hR8HdNh5zAAxELK3JX8sg74e4qcLTtpzzuffr1cUjoJzs7kw5qwnw6Rs8",
  "key28": "3KPbPA8KSyJRNwck4ungB7ph8vEW9fJLw9k8XWSD4zz6KmtKbmjdEzRTHj5MVnAxjviWfaExjaoMDNqMEvxVMHcp",
  "key29": "63o6UMMRrYpUSTFgKmeXLYY1dSZrFo915dyqQuimFZr6v2yYKDeGtVQZiew9V54jh8YG4kpWNVK1qFeUMTFwLx5W",
  "key30": "Q7aqseywYtivN3VAvHcipwqj61zRsDGQgr5j8bd2RMKTiQ3gge3UfmZLwB135gZJaARstAXDum3VV1ygx7STNox",
  "key31": "2Jx1nHHANaVhPpVn2e7B55fvB2Adpn8SJCW8fdzM2eUX7HfZS2XQQN1aXK3wLFBT8kxcZvRhRQwxQU883hcD6PPx",
  "key32": "4nsdoU5FciieBDkv8sRP4WQzyE6bpYZ44TuPfHGSpoSbHA6UVBZ83Dro6zr12qAKSh6x9vsQ8tcPUxkcaYevzuC1",
  "key33": "3b1M5t97Kkag12Ns7jhqpY1dh6by5HhVBxhLUtM61NmV6xZjC4jsZjC4VXaxnkgJdfYijSeZPRRu5e3znT66BWmB",
  "key34": "3yE5g5PLnhkBKH1vkFVEERctqKufN5fSpGuqEbF24QDRDqiL82bLebBBhUtEf6oMZCBVB4eq2cDi3aUhrfKZ2ofh",
  "key35": "47VZyVT99e7LT8hWhyNAXrjpsLnyHEQEi6tSTd8xFCDzUsDfMRSefynbNPHWg9NXXnu1eo4vYb9kfrbc6LV4cijv",
  "key36": "Rm6KL5YrDD129iBFwqz7GbJJDhEKdmfbRaEbUzdb4uWVhohgNR7ZyYwsQNGq8f3TVktuBekYFCeCQ6T1hbcvYUa",
  "key37": "59eA7qkcJaNJx7BW7QcgqxDE99Bt1WVcdBxkWnXws2jbi1hRR2mTfNWxYVKPowWkcbs39QVeeXMH7QeheNUFCP5z"
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
