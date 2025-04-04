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
    "u8sfTeEe4DfxXjRnj7LrWpd81xJBG1ZWzdAhD8F9bsz4vzyz3yyovWjSUTv7Ca1TZCJTrYoXFFMcuhV2tz5ZbgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGDcmEjFsqapi1fJE7PKiP9TScfEqEAtoCx9gmj8RmuRXK6n7Cf5TnctgNh7paxtUPhoJNnwixBmmudRhpi5GfR",
  "key1": "5KuSjQeoQPkXopJvdRZApXxUQ6SsD96dqX8uRyno4fbnsvCFPD38ZouGHvEFZ4LixULwjbEPDPhvG4H2uRZ3wf4R",
  "key2": "3KcRx3B2PMTKEqcNPgX8o4qL6KRBEMzqqnMe24noEK3CxMh4iTa6mQQSsRGkFMY2Fi16vZG7193BACxX2yemAWsT",
  "key3": "3QpjbT4xZb2UKQWZoiauVJpkvjcmuX6jpEpL8Gi7St5UtLy6x99JGwTQgyTkNnVgN1Dm1qpjehRHrDwxgLkWydy3",
  "key4": "2yH7UTEPbM6NU2BDrUtBNmUy8jR5bCAiDtLTahQneT7Qj2tXLAQtu95zxubYm2nGu4pQbjfdPGVM44cE46BVDs3W",
  "key5": "31T3LyBq1STjxbX3rhVWVNyCFwa4XWPSU3QBXZ12biS71WdwTvktq1wAxWfo3j55uoobSeb7M2n8dYsajuqE1yHk",
  "key6": "3w9QxYkG4hGMNqbj7fzVq3gtTCwNkNCMZ4Fcs8MARAp1PRN5h6gDbmKbUAnzjGg4R9aP3DVkDa9scLnVhdNXrUnF",
  "key7": "51Jpt3KMgwVCgS6bfUMnapZSNLtp1CK38Z4BkvPtMiTMVHYjKYBgvr5W6RT9rNejSvzv2k2bKz7qCQpFShg7qnQv",
  "key8": "35aextQJRUuchSvVrgYXRDwHzyKPhtAhMzTArPPNdnmz1W8afoyFLus3Lq8BkeCtQPiFiX9umQxzjqwQcqpLLUzX",
  "key9": "4u31bonNAsvpHoKeS2brzrpvifgEDPiGqYNdnNGaoFJ6mTv8NNPW5UpjMajVTRR649rNqj7VAMM4FDBYsgSNKf9c",
  "key10": "4BUJQw88Mdk3argjfE6At3C1cg45KXfYhHv9KjgcSHwag4bPBkeki5YrrXFXF8Ph44AABzPzcPDsqBMT2FkBeCSz",
  "key11": "3kXgEJrTKKom5TC5sJuLGswBB9rLoZGLXQfxTzav17PTVTPQsfQ5YANFjDNxZQ1WxPMK9dh83YjLnfJVVNonDVnx",
  "key12": "21GRJdHohucJC3C8oXJKQD8xeow1t5WJtHHPAwjZ1HKQ31GYCxhik7Akv432tH3KKkyvCbqkBLicKogDtNnMzofL",
  "key13": "3nLbBTdQBFB95uuJdXRctjL6FqrR2xn9pWx4wvHHmei1U8VtKhZ9RbRLAs5xHMKKhGwhH3qyByJr2LHdJGuBoWtR",
  "key14": "3bmyH7T5qSgzZqhMsaToK8vQweAVjaeJ6H1WoJfst2UoFBQ3HJ8otbxxBGkEVWWAGrRmBv4EW2qoVAmuiy3NMxmB",
  "key15": "2hLfpmbfsFxpDHvak1B8bBzkCwSGoSFkUdFnRZ41dozMmmSVUUUM2JGSk4aVDPp5qTccGvD73NkW8xipZpXEqqoe",
  "key16": "3sJ83njhrePGbZUYij35SpAqUzAYK2T45hQxZxgSKAPHVzdrVjPpMqMRJucZJrP4iM7FhZ4CactN5LcHXe8TkgVY",
  "key17": "64U3arEZX4AZ8nYAVc8bbQd4eGsAzoRcW4WaA3F888ZQ5ixL3Harj7781hofXJLKwQ63KNoU9TspBbEAqeKazTFm",
  "key18": "49nSJwFyEmkLZ9A4Aedc671Tn7reu3kJt6oKSkvTFTaSFnMfXQYEeoKWdZhZ9aJFmDFpxa8QE9FowMdSujWymy3U",
  "key19": "4sXPiLEqHqfEhZ2LLA8zDGVMMwD2JD2j2UXHwTbsQGzBPsa7dUCEutVxEMffU5WoK5UKz7KUrx1iNn9AWcHM3mQv",
  "key20": "2Rac6ccmB1EkGRFeLf6x3CWmmiECh9rHUPYxPzGJLQxeG1SLQkjtcNsKhcmDUGMQG72t17YLJebL5wc9kuW8n5bZ",
  "key21": "2KadVJ1QNGUMHtUNBh1Cu1VemN3TKkssRf5T9zjztc6quhkeVNXq9ixVpB5awzhstRTsGm6Af3eYQG4Z7XD5aF2V",
  "key22": "4eHfemdqTZZKwZsxSa7iFJVBySPiyoQANT76XntqucUpfdJWST5dRQniM7RmEo8T37zjDsTjV2eWnMmYXwjaJuEA",
  "key23": "4uruWD6HHSVSk3wLLxgDxzAmkv6dmxVACCkTodBMCMEjEYCb71dGCLhFACBaQHTbhXHwdDNQX7WhCDiTu8QrnBpd",
  "key24": "5seH5M7dygL5ecWoKJtqnmzmg7DtyewkAVShcqeTMcR61L9aFrZMtfvxq2ENdBVE6dMw2MrgudY55J7SkMoCuAgr",
  "key25": "3WAMvcHDatqXUdRRXgTnWVtkM6bb1FUD4hfKHTbkj99r5s7MCqPHKm5sPWo8g2zqqtx89GEFLK7UoQusEQnt7CzK",
  "key26": "4eoNUXLTFFzrEU11Q6TRwGYENqhQ2FBcGWLecbDL1Pm6fzaNuxUr9P1B2bY6bK432BCGrsjfTa5QBt66w9V3W5az",
  "key27": "5qLhw1Q255yj2N1rgwN4yKiQR3sLe3CRjZBtpQRjbk1ZmoZFr47LSYQntpYkqnY2ioa5JBxavUDDNEYnkibbC6yk",
  "key28": "236nQSoHPkUcx7AW1RrPT369emVGVuQk3tvscaMa6Z5F63ong9gUs9oYXAZKS5fq7FrMLDsddQgEeDfCdTP18Rsz",
  "key29": "4vgmYAMD9xP5pGNuA73SfJ2z2NUvq4WMjFWJQUEnyu9qeC34QLQbeyb9jn17fYv52pj5nCDcLMeQ3ber11RWgFPP",
  "key30": "4UVRQPJwpwPPyboxyP3zrrJ4P22RkDLVHd8AK5f8YPUNzkfjQkNBa93zzHuAQiCih4DdnTArNR1CgqYSiBEBcSeU",
  "key31": "3uucbGi9HLHmHmbNqbB8NNkaXtwi9YibEdeuG9vKmaqqWtdQnvtCdvYdDsXsCEAHH5CVXEnExaqTotDzHtHgW5q",
  "key32": "3Gt3LYZ28DWGX7La48enqi5N7VwBuiNcQsYvZ6bvJDHSKYksFgQcL5hopnbMnurYdhhTdGTbPps45uHwSqARuVDA",
  "key33": "3uZrQwbsyjCRsWYRShUXosy1ComEc2y94pFkS5niNAAMqYLHgpxf2wFykS1zbFKWAPEYsiYTqVMxzpUqWrq5BBZg",
  "key34": "5oY2pXysU7PHJWBv1tstvTPjmeBwMogggHPzU14f62z3muyk1VWC8cxm1zzDsuwEaNAvmj6KyDSKydGW4mXtLrzD",
  "key35": "2z7SiRa6rHJ3SYa3gLjxgqUW3QAdrehyS7VuPtQhFW5tuQMjuKDFv6F2m7jEkX9J2DHvwcLaCZqUMVVFurGxwisC",
  "key36": "34kT3fDBzZzRjGAYa5sx1vrHjWzEN17BFj9rE85jXGU8RQ9vEod6uDL3SFBsEfWsjjF3mbAzfvTqWL2RMJAbR9k3",
  "key37": "3dsdd6yinA3Xu9gCpCvbnQDPatG63p9mHpR1FvmY3gaGwrYn4hQUs1b8oaHJq462WtmxEL4p5Q94E2ZtTLTjbpC",
  "key38": "61AC4HduKGfwfQV5xYGbHfZdb2b4BnaJAzgKbqvNPSPmQbT2rq4uUcrwdo2mfTqVtBqgzaqur61txSJGrjH5Gnvi",
  "key39": "5ArHPi4o2ZcokXwrDL5LeNkYvh1cbkFzZ38LJ2Qf6H7opzbMGJUcw4xthcWjquza8AUsC6vATAkHTZh3z8HDQL5X",
  "key40": "2GhRc3XLUJGFqxADE4f96DUQSBbPPidq6KSeBJFMBg6qMTCuYadYGJmDxRYRzxdd3GCT1iDdhg6V8NxjK7PrNmNv",
  "key41": "3Xc7ov2og4kNRty8XFJ1teFJS5RfkDbXRM6nNdYrhJXxk2gUKDZPPjuAAwQNWDvHTt1ZfXiUFsTYWdbdoudtKBEb",
  "key42": "5K7qkDUCyn1khqm5T793ZW7m9upwFPDB2AwXe2Z8WEG3nnT94Wu4e7WLVUaz3VKS5CBbamxb4Z6baQGVST2MsFCa",
  "key43": "wfS51knd2rUgZwYaoevS2ancVkKx3BhWdg7W6HSc8QDy3CmZ2xm4PR23LLCCDHc4zdkf9rpDwwvayyRvr1WUTq8",
  "key44": "y8srHC59Wno9DZtFXZwxJyWcEMYiVG8rjxteJawRfLg7NmNiRCJEJ4GC5NU1uVAkwLEzhg7TWevbv5Z69A3hRVX",
  "key45": "3q3DAuGvmySECR1hCvXkeMYST9YS88aCY1n89yhjjSfzQapijXBNNNpx7RedaM5z14F3a7i4nXNS1crrSyU7JJpD",
  "key46": "2y6BJc1X95LRBgmRCzMkLc83SWL47ihBYzQ9kGGAPLg9Tnoj7TznmZPwcAKHPqCUF8faR3ETnkQwTt9o41W7R1ji",
  "key47": "M9jHc4vCrNwRjxw7JKB3QmGVQAksN5Wu8PtVzySFUcA1SD4pSEFgS1yfcmPG48Hofix8gmUwxAta7TCE1kWo8Vw"
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
