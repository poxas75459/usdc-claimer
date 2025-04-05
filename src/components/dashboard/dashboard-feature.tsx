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
    "FiAi2AkqBkbo7MFpRwH8SsrvYDyuBXwZNigqqydkCmk1PKTJcSkLNNc2h4XYhEAF9k8yhC9FLmvMq8dqD86qe7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VPj7HoEZAb3XGfL5YbXGNJra9Cufx9KXETXBCUpJUWSVSsgRRpjaysJuQnE4YkxHCMDqwEnwMgpUCT8fFuMtW2o",
  "key1": "4utWYK9tyQyJYha87u6nL1aGh9QBVv5DjdbHELccJ7t37YPEq9767Tufrfvz2CGeaQJb1KKMUzqdZQCZaZyVsPmG",
  "key2": "2WxnQED27fKNZgny4WbHfhpV2wLFE1CWUd8VcdUnxYFoF3teVhQao7dsMXMGpoLdF191A4TMdEX6vrnvroATTZyU",
  "key3": "QLgNfDdQ5Be6YTjSYWN5p4wLQt7fjALsRkWT9qv7mSGRArjRpuGgBDgYjmzAPM3uG7boGYjF5psYwf2MxBv9UJ8",
  "key4": "zaUJ1ZrRQYeChW3rW4M8MmN37BM9cPC2mctQofcpRHnCgp1Cy2ednceEpLuTDCHPYAk6nsmxnMBUmmUnUQ22X95",
  "key5": "44nSRRB1XxYBT4F1SmayQTjn45VyKSBcsR4CGuMsGmEVjZaH35ZNRVQCpg1SYZuEGxxPevQVnYTFQKH7LbawcuGh",
  "key6": "5i59Mbib4sWpNKBuhmBChsTLfLJMuqTsv9TU2pYRsmpF1vvH8BWPSmJN2EiQC2HHaAyJinjSikuUcij1jD8qTTnx",
  "key7": "218KJ5WtsMWDv3mDUgzYsLcXw4bV7LQnuqYxdMcuBgH5dybEXAXjaqzrJtbmeoQgHkjmXjhCwrjEwxYswKbs6SAe",
  "key8": "3mcky3BjjQUNLETWShUzwth75xtuKMZ2jgajbxutCa9vNNsUgw7aZAzgFukq87TavYK6RwictfYzkL7vfa49rA15",
  "key9": "4TavuwizfYhK5Yn4xCqxq4TGXnaNtuHwiSkEHmkZcGi8BnzA5GqAPK7pMpkWm1brWHy9dmNMLSYqVSbLQfUwyes1",
  "key10": "PMiCQ2n84TUKjpHBgnzEYE7CjPFkQ5hvMSYp45BHqEpVDXnwKUnGJJedcunpPLawksqFLZq4boMpknWgqbbm8bv",
  "key11": "3jgj4RuA6UBNBiTVxbXAzfUFDT5vsMyUmCQdMU3Pq1S4mBVVGHFtQ6yZiQkSuEbjtVkCjwiWxNnEQpD2Rs6XyRH4",
  "key12": "4jKYFdADy5Xw3q9VqNRTCC6pHFeDUu3EWTw9BiMgYLhANYbDzwn5hi1Njuu857ctLEYrnU3GDzUrn9xpkAM7DjFo",
  "key13": "3b3v9p3efbZS3UPUn5zD5Dn3trbjow6bkoprRDw4kMEVPgcUoahB4kyTznKzBkU9no4CNXyufLCcEyD4jvHGGerh",
  "key14": "ZGmrFX6mdYY5XdqhqRqjmpcK6BMzm4ES6tmv4ug14rcGm1vdn9LAXMezRq8EjWLuaqdfmf48wGyvUpiM9HcPcj1",
  "key15": "2f6o6udKor74Neuyi4LnxUKMHkYV6h6jFoZg9RKni47XApox77PdYCuyS2MQND1moi6MvgLeNcPQpy81B4XtePnU",
  "key16": "5zKXRRRdck5v4H9HZRdt2MY3NyxvxnMAj1F46XnYCumTLuoLK4FeamFnLL5kWz4HPdCEQ13h8E4TgV6KE5vqRhTx",
  "key17": "3TyjeXBZNfoNotT6LAmxEbxAXjkLdfyU6krG779g1XkPYfxVxjcVP2nmNdTuW6ckcZfzNPUCAE1xGrU7yhMFRMh",
  "key18": "3HTjhDY4biXsPcd95zhMKQEi3EcM5xJPGGc8f1r9MjbddmjYQ1FkQ1uLJC8TaKSkdC5eonDRvMKXCG6nUtidjjXo",
  "key19": "53E5KnAUnZM6vdggRzpgkVsCe43UPd7CW125u3RWbKkHMAYz1CyHTUwEw8kN22g6hZqShWEoGujF3Rcs8m2HZ1zj",
  "key20": "5YnRGLdGmagAhpKgTGQQq1x9ocT1SWLhkU2v4kncHT8GrA8cZSkxzm8qaMGaaCKQoFC2PBfGBsNqnVfyt3UbRR5W",
  "key21": "P28bzRmiuz3g4T4JouHHpJNK3toUaYb1171Bxvs7ziPkNAVya7HFMXtPpp9UwrotH7QTWYUtuzvMD9Hh5m6RL7f",
  "key22": "37pjZBxQwEm8gm2HHHgTQ3FrWQqN9ef74vP6VPX32u23m2Fn8ysBu81cr7h9kC667Mc2JoZYFB2YTRwNSbvKqkE5",
  "key23": "3TEHt47n6B1yFJP6Q6dx5G1SPh7PDT4fGmxDNyD2VP69sAageTtUD22uABkno2CgPWuBamrVukrgMVtxGheB7pcg",
  "key24": "2DYs3ZzpVp2kySHKUBDWhFh9Hrc4bqEMhKJKdAA4Jqb4BV8jUAqgqkyRvKAik9smc8aHv7vwNaooXn33ECuebsym",
  "key25": "4rBb7kGNHmkeiJSw7TR999PbCJgQR9UVxWC41zJxuFtySjgxVqhxQtS72Cqg2kyA3ZF1guFWWcp9D4WuTh2F1SWr",
  "key26": "kNKJkVbffZMbKgUMupSW6fS87G7bEvPwWiZHXSBxgW8pSAcKAt33d5tBoTThVwJmNHE5cpH66d3nm46NiG3DhDw",
  "key27": "45zxpCP1D1C2zF9GWjrir7qp1KmzdFSxi75rj1qY93doQLRnie6uJQs9E3YJ4r77tdqM5aGju2cSFZbaDK2hM3Ld",
  "key28": "2R8XSdoLpN15JKB5HAFuBnF4A7WePrTWKDGJfhuA5LGQnUuLDohSo6xBWoXt98oECfcGYrTgqfpf1g3UbCw5HMaW",
  "key29": "4tgYeVLQcJbLmSfTyunXwwEfSrhpuGmfumuSNp6HPrYBFeWWSVewNcgzEZxcC4dCgfocKM5sfWn52rjY6G9t5mDG",
  "key30": "4AXoz4nf7zBFguPZhZqV9QPb9g4ho56c8d7gmekuhbgxk7PnRd1XPppEf1cJWKgSvkvYpTXsSKJJmABo95fkvVg",
  "key31": "4ug5DA36x5XPtUn1HHNXcynTeeDhUVjHRoX5HP793iTngm8WPt7r1pyNfeAz3wdGnNCjb33uzimawdXuqV7tvy63",
  "key32": "tTntUmua6EmN1bF4R8Pw74RGXQn82LqyFBN1RSjn6rHDPizqw4o5RcziJhcwhAg4FHYhSrquNEpkRcRsYDzD2Ud",
  "key33": "4Wq8FV2vvhoMBnUw1ZxvmK5sNak1o5R3vChDVougxM1SmhGndMHsJY66QQJC4fWdhUgfanbVduvjvsRYmVL1DfoF",
  "key34": "NXi8wYCipSUV7QhcSCtikqramsVPKUcYd9fg2uu7QTBTeED1wWLPfue4LLvA2KiEZ4EP4iaoC13heVBPbd7jMJX",
  "key35": "4s5KWfv44RFbFVs5PPXbY5dz9yf4KDuKvAzatHNkaUnaY2jyxoBgwo8DKydS1Wvr3tKerdAi2V2sHo99W6XMfNgy",
  "key36": "2FiXodZUsD7tsjqtK2TZFNdNy82qjUXVJ4EP8pXYnrzpeSeqd7wmg8rQsaHoeLzgGQ4NChM2UR4U4QfBnkFRpoCR",
  "key37": "5x9mt2aQ9YmBtLRhkXGTjonQ9QKeSZmBXm1Fsmn7FSrN7MDxXnsghu2hcpcEUopEkNr1wUd5A5aLVTAbUMRzdnDj",
  "key38": "5k3YLGnfpz9a6dsJTty3NWAWQVM9eiaWetvs26qVNwVM7xzaY9nBR5uuCB67Hn2AKUYYCSTzLTuTU3Dc4XFnU15e",
  "key39": "2LF2LCqSRJaB4rtcCMfyFVcnLaKgXqndQsEHGSsZFLc1M8KEzLzLbi5nFd57uMDRF7TgRRV52zUNvLspvbRoJC7W",
  "key40": "2DJJYTguJEHV7jiqXwxxobAg8kFg85MqPXW1G3SCqDDtwmVSaTZDNLvyXDhcjkDqSjtwXb1pLuGTZMxaddc5ik7J",
  "key41": "3y5zopXy1ydtT677vMmaUCFTLtzyWnpW3ypULWEGSdKGuUTZ4us7XX62y7JUQomG4BeA76UdwHCssoLmeJoY5Bd5",
  "key42": "1RRLE1tZUqxczLYor4CV3nC1hZqu5eG5DmhNgRa414TLntvmYzRacyBGNcJf9b8R1R24rFvnGW18iVBe5kVdLbG",
  "key43": "4DVCcNaC72qyqJy22t2qW6NCeiLkg6nru892wkBudfjccDoyXrVMcxbGktugQ5keUCMeCdSEUqP1Z4fcDvytuq6L",
  "key44": "47Ucvh8kWCUWaLNXZXyVwiTme9Gqa4xSiYVw4aNcXiXaCi3yPeQjDWFtX2qdM6BKpoGDZtEg5kS6uguszDUuCCGR"
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
