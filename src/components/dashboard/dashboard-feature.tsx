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
    "2f8Zc8ovEvPPe3rKMw2jcdiyprmTpRPToV1KTfrPc3kRQ9rbXitf5LppCVcahu5QBKRCTyEL4PDQBmEn7HNDYnRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zo5zgqxebDrUtG3F2LXvP2jREDAiTWbBLaiEubhzek2HXEwMFULoGzDETMYf3h4qaCmuKEbwAmtMA6K72Yjk825",
  "key1": "3EmW6G5hUHVHKWSBZCmRBbAZKdwgrBpBRQqMfj2kHbfhchWTZo3h96Vq6cvL72zUWBrRDNMkkkdjk9VheRsrgEYP",
  "key2": "5DZuBmYDZpXQ86u3jVtCb26ZLE1X6uzyb3fqgMAFyzGfpm1mUAz5vGaS9t2qcmzKnmazjcaAz8uQuK3cM3dwsmrS",
  "key3": "2wRyxBEChzfr36D8KeGhTJGHWcDrXNF26w5uxNuDKznZBtpLcVqq5BrubBMCjZjJ91x82KeBvNdbPHFpxN6tY7aW",
  "key4": "4xj6C3ok2YGcALNaw1zrxrR2vZbycpfZQxKXH1LK1e5rU9QyMcEtJGeGNZpVuYmifPfTdMUjkyFFhzV3fN78QXo1",
  "key5": "2hkWCse56UWLi9k1cwKswhpzMxkzuj2fac4tfCYJk7Yeq9CphFu1cTbx2eSi1o9UpWj39oasiMoop8y5GRpsScgU",
  "key6": "3apcCerKew7MpWV2cUoRBYyjvgvnDe4fivmovvrrsMGNgjHyL2PwXTb5asAN4nfTyGduenxWa6sTmHijwUrPuVhi",
  "key7": "5asbffsEGMTEsXBNbTzEtHmoJsv6M76NtbCCYuYXhkynK5TENxnbLWqtF5WJrY38kv2mbeaojP4jou6b9H1boJzh",
  "key8": "5mzbw2UY1CK2HJuypLXmtvFhxCVngV9r6TWeNaHgY3cJvcdTC66j8gjGpem2SVgybiwMNitDQ9qshg9T7sLDMgut",
  "key9": "3EUCKWT7sbFzoh7Xeozr7kK3qWEESVHSHJZrN4xZetc9dq5VcWzTurcZUBmRVxoGLh172nfDJAcepznPhM2uCnKq",
  "key10": "4fVvg8Td9f7NoTwtdC2GbbVDvYhF9UpSHCUW7GkqYXP6aWBbRfkV4de886ZzVmWFocTwTXsA42KdWWgTNRgzzqCV",
  "key11": "5fAA7JNgw5Km8oat6uPRJqSoJ25gq2uB8VojMYNUi1rHzX3We8aVZxrmf9VGCpXMkjyRCJUSmftND1GxGoP9BQbp",
  "key12": "JzDyw32YgQapkrq9UoLjBWNWDNZoPeYw6r9kE9zrouvp1x3i3qtKN4kwm1H55d6QJk8SEjE4HJj4BEz9UrrBjug",
  "key13": "2zEtoAyQrUVbJqnWy1dLH3ujd2AWdmxbmhgeES8apvo1EeZumrhjZkaNs1YfgoCg5t9eGYyq4iRbPaMEL7w2jEZb",
  "key14": "5kSiduyA9onw4t5UWF1t9mczU4i5o5FxsCqnpsnbtTdE86wmBatAnXzFjMNnWcrGE1YYWmMaqd7VXbwxpFNBTfxs",
  "key15": "4v19y8MJ8LWnuCNTEEnGWcMVZRtbSL4TkkVvrQUMRxoNEVi1Vra6p5eG8fc6chBfwzbSgw92t7yY9RkZF26a4kwu",
  "key16": "2MV4avkdfnXmDVKg53sweyQpXYU9AgQfRrYCkDm57rPPdayQeebdUja8gr3UkMQxFhAvRFDJmNeVKrXtguNtoTEb",
  "key17": "5TA9ssuk3oReykGjMDS9SVvS9hgNUfYhq16itBE6sLwzAUfNzduE3jZG5mvxE3WsW6VRiKrjSHskPpyhwsFxa4eT",
  "key18": "3nC6TFyzBLgUUNLoe9PcLi9eTceWc9C2EVRWbFPCdY5cwnKQ9LPN4qL4eF6i3SiWo2iYaewTfL3HXtD7XAacC8HU",
  "key19": "2Nn4oZq9nbXoVKTUnPETVC7KVUdbi3NcKyvtR6QgQTQVYGhfbKEAvAYvLHcYArBdmZv3qYyNZJcXivJHN6wGtLEH",
  "key20": "4p6UMSji8JE5EcsqwsJEva9TTkriVnT9yPAo826u9oNEWjYKqLf1j3F4T4DoikNaRQxm1pj1jjhCepPNfBZmiEHE",
  "key21": "3MUEfLk4d37fT6XdnwJSPJsjbVEGgtNqy5WTq6XATJ3qu8zfUVUj3GzgUbjSMEEdk6NSzb8hLiD1uRt8b8ekLQvq",
  "key22": "5zahrpJodRRfwxTCBqoJMmty5LPMsLBtz9mJ8MuFk8ZCQf3rxgDg8SoCMaBVygHso8HFvjjnREFkmrPhYoU3ecmq",
  "key23": "5nYChQGJfHZMVd6aHVbt3scGQFdJWUHK2a4XYxru6z5D4uTTntGys9JTUJfxkEjUPBsoCA8cAe6WoVNSgJWuc8AR",
  "key24": "B8mSirVpDcLbD2qt7NeXjP22Fv9RdS8kMqhXgMEw9LdAz9vaw3daBVzPFcda9swXnNpAfoFHYsB33rEfQe3rTJi",
  "key25": "2y31JmcqcJMivE2KXsz3o2A9f5o1wiwfC4XLDM2MKyNRY2xBzZWE9MqYVnQqDjwu4eCMM5h35CcRFJ7Nf3eH2XRq",
  "key26": "eHo8rrj8HoUb9tTB3e3GW3jzZa7g1Acq2RCf8ccJyKsRT3XbeFNQo2nJmZSvggiazrqgZ8r1aG3JUncpGGNAU1C",
  "key27": "2bGFYxDETkTGgb4jmQWGhGtCYC9qcSbd4wDNajvvQKKZQXWKrrfYfbxSpfu6aknaGKyD26z2Tgi4ZqzjbHdu9Sjg",
  "key28": "r2AMGNWcRQNBVSvErGquBoF6LLVjn9WFQNsk4WxyAs2oZ9Kxdsf77avntXT5H3wRQuVLuKRuDUEjygcXXz2XzDG",
  "key29": "5NDyH8dcSugA6zhXtL4X4ecibmWMEUojxyLNdbnaoKzy2obsYeNiE5rZ5Cuv1SNEpfGkMa4yS4i51GVwxSaQT4Hv",
  "key30": "5LaeKEme2WExmDEnjknesxJevP51KDaXxVAvFby92LH6NZ7XkGHHAFLYSUTuF7iV2DFTcX4krzp1gRQkyBaXFz7r",
  "key31": "62h8MLjmEDBrxfrXRpKMJx8MR3fMvzsyttWKZidoxEcxEzpaRfZqcCB3AqQswjwDxh6a8LxeP3zUuC95ieMUNVyv",
  "key32": "4Y1RQVWrr6Wa8LPp2qBjtCWQWTjEyg3CNmUyQ2xLPgUHyqMKSXPZ9vv4nvnHny5R9sR8L2H3WzaEsrKsPxXYNQPr",
  "key33": "3yq95nhpipSbupGFXBHpF7FZQqLnu8FFpeATer727FwyC6aiqv3dkFM3MZi9Jyrrbk8cvrCrNhJMjJDVEKWkQNqu",
  "key34": "5z7ckvk1b97LpoYvLB8fiDosoVuNWbC7GMqEeEGFNQp28cw3EbJdnrH3VoA7UsE6drgGcvGAiLYJh9LPkJ9RUPV5",
  "key35": "5cUMJRDwBJZDDLB9L1XXRgun6Wn1JRU9Ugw7hnZnSBFNmsAPDzWNPqN5aQghjemn78yfde25GtDeyve6x6qKAox9",
  "key36": "4mjSc9DeJZCxH3BU4fj6BWYVrL4gR1FsKUHnLYo5Qc1E7ukXBFH6cn1XL9aM3WJBbpDE77Yctf5PqF4Y4gUMhzYS",
  "key37": "3hkyj63kPC2rP4DNoEBLH7WnJR4rDCFSEzg1Utm8qnMjWiW2nrE7gnLLDKhcxQK9739Vp57NcJGQgH7hg6zDE49c",
  "key38": "62SNNbQ4MT9BHxVHDSXADgoDxfWP72DqUZQDuJXhzd9TcmpdZ17HwYzuvCC6tw9hbRnkjtgAgRwx8Cv4fQpgwi7A",
  "key39": "5r9ENKq3CDRBgxCYjdMX2Xo1EYHjb5wXhPbh3G81EzPfaoUkcBFz4WoLd9afn4tGT3je2LNHfSTWGg19eecqGaxe",
  "key40": "2vppep4wquMhX4qiXuDuohtiRZm3eLWVLHCN7jKCf3JMjAFULC72kejuCaqL7sBjPyYYCCJzBKzFQdnNU59cq2SA",
  "key41": "4DRSYqhmCXjF7aLxUjxqpAm24zAghm2XskWb8jZgHn4ra2ZmBFmRitFJkDsXaa9Tv5LZDBUqLSpLqA2fdY7w58eL",
  "key42": "YLnWdyLeCu1rcHf35NCqDURJMA2K3XtuJd387ujupvrVRBkU9pUkCtHCZLD16C67JhrLtJ19kPxkeEa1Z3Qb4U1",
  "key43": "55JxcSrmh8CGnpPdijyhMiQB3wV6zwRA29td66TAZy2EDwoyLuQ3jmb1dKzSL6oWBUTT5qvnEHzvt2XvcusYS3YB",
  "key44": "4nGiAhiPN99fe9jBCKZFUv9i9qBdzyeuhoyWkNCGShKFsgogchr4Nc38cqSrXfu3cm8PQcoRsBV5Y9KReXVesqMd"
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
