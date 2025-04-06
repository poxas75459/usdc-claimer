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
    "rmrFK8LtBs13zeU4oWPuDopuUa1TihND676SN1eCafLXY6g35T8duWRP18L9hhc9gRX9bLzUJRfNfEpPSqWtkQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5peiNf29PdYR6bLyQsWKAaxrYitPxLhLLhfYXVYF3M1TktUhqzTFP3JUfGrn5HCQg7E7UGXmUdLKhyW22mrJGqYB",
  "key1": "vRAcv4WVcDhtoxKZP6FcmisWzBaz21YEtNKy1LNMdwzjHE5G11t9Gudt5nVuVJdUPiE43BpB1B1jXE5QnxBK8XT",
  "key2": "4ZT1wLs6skMzhTFMzS8jHZypffRHu3nXZrVbabNaDG9jC8ySihKAachPrX5rf8fj8n5qWMYMdJpFh3ZZahGZazS9",
  "key3": "xD6RTVKjS2hm2qGyhJ8FrT5g3SFdAtfKonYn8sr5xKTonSiYzrZThKuHM78nejvmjQxuHGDvCHexEtvGgkjEvf1",
  "key4": "3KeNna9vdK9dpQmPPEZwB5d6y5dVxAfRysnfzMBhgBPgyTf4rgK1a5cqz5CTcyCpdELjmKTikme6NwLBXK9rtj8L",
  "key5": "3N7rY7X2TFNNtVgiCwYpy1nNeUZy5kqcVg1iL4v6mNDajq3yDLXDuhRfq5NDgWP8fPt1CemaoME7qkMQz5TxcLXn",
  "key6": "3yxHts7DFCHCamhNc3aqP4QzwWDWtdBdTno8kkhzEDuCESxVR2jxmUFV9dTT3AtGfwK9puyA7ggivNGsBKAK5GjB",
  "key7": "57CfLA2DHfKuFfyqNbe6TZWwyv22Sprhp79w1FVB386w1AMXeLDhrCCjSRvoaP554P9iztho58zBsG5nZAb2U9Go",
  "key8": "5v714CT4Nbb4mDpSNxPSGCLLMFizES3CdjRoaBiajvbFSKwvx1t3Jfx6G3mKBoCtY8NhTgemGTh4kFCHzuy2JH7p",
  "key9": "RDpkAvMZmfzwqQEaL3SSHMQGwy3aS4T4KJfS14c5dAttq79RhvC8a4fsm3vnDX7vvzRk6ogfFVnTZgNfa5ZcxtT",
  "key10": "4MiAcX1FCg5kwMfT6Z9VJ78i4jZeGXmrmm2XZpTiMBVyzt4c7pMNtrVK4peaUbyGbriBkFBA7n6Wp3dxcwZY6QJP",
  "key11": "4biJLKghqNao5HMhYWaQceufy53yDKG8n27ECm9bziABPqcS9aGsHrmXawpUUEdRsZidWmyGi9im4NnbFSQA4Q1t",
  "key12": "2VhfUx3NkFNzHgHchwBHrYZdx384S8e3UtrrWesVSteFKNqnPQjUDyJvMcBPnLQKrq3U72E3fS9ZoFwiZKCBCPpL",
  "key13": "5cDmcHmc4R1tXsSR3weTNDqq7XDPr3eeVMwjyKirGU1xXiWBxKBagWFg6fxKLg9fuNXcZanJ5gt1veamVU7evFLQ",
  "key14": "2JFiXpzhGCbdsb7LMG7pMi1yeRFGnmEqGoBxR6vWDe994nTjdS9y6t7XRzQDLgwWGvizbN9hsgcxmSWFE4reueU2",
  "key15": "49ch52XqhKswJ9ESjGsUnGoHNrR47anpD2Hw84efvsHASgBfMmzSUsdPcDpAbjZN5NtTpdsQ6NvJAGeYaWt2XRFa",
  "key16": "5rAJYJFCQDRVhRpxhdc6eUPbyx9GXaiArFxnHQzGWas6XUQTX9YPwniSEB6JXJJcNhTcTo5qNUTCisqYFSJ5RCn1",
  "key17": "2tSq8wRYNbxrLeQKvQx6TbZ99fAxWQUTfRnHkiwZ6bjys4Ah8Chfz7dzpwB1XfZaiguEvJbZnp9qRk7iVxnpQbDS",
  "key18": "4Azk4KWnH2npAbND1LmVeKQHG5RKnvQEXWZqXWRsz9fKTR8jroLYV72FfVVajHuKAuBwGTtoZWq7yXFt1UwRBgre",
  "key19": "5b4NKwsLUq9nECR8RGtMJbzvdZHx8H4sbxmTHwuBLn5Mru9XgxWyUw2cn4hKDf6fF7swcyLxngMqw82J9XzauyxF",
  "key20": "5ab5UgLAqPL9bANE45yjY8gVo4UtnjgZGJDBe1u3f8ajhkJ75oikjMYmyJvYnmVy1hXuJB2ZTQVeRQDDXhRZpPHF",
  "key21": "3KqwjxJ5nJZKD46FjewdEJrwqqGSE1QvkHNGnMCN6Y1GL3DGWpCH2HhshksDQ8o8DSJVKQTbYm7TnVDsHwwZThop",
  "key22": "5KvuJTwnKKr6M4oZuMBRGtdfnMXbyaSkewUWJz28Fx2j71JeACSFpnJu3KTvVwqdn2cCYjivQ6xYwLViDW3WLjhA",
  "key23": "2wWRZfSFnS3Nv3Wx3UWxYWBGr9kYM4FnNDCTpKU6eLZLtumRnWFydzbDWi9nnKNzkoumo6Av88TkwcqnsHEBFHKc",
  "key24": "wxrLCLe5rNux3bDRZwosq8MywTMJGajyxeVKz7aaY6GwFnkG1iNF82UZwZnMao1GTpEMeaqcD7cxdWipuZtAoHE",
  "key25": "44qeJEpPCqc3PucLckkuRArmTcJdv4ziUbKRzk4VHUa9pNk7fCGe41Kk9Lr2dj4QGM3EuZ3uFxKbKYyFzUGMn2Tm",
  "key26": "2iDZ6x4YMS6Tt2mZsQkfYcmJa2ysR9QAQZXsxc6fkHR5kvvsZXyFRSM3imdFnc9xafX8BkAe34kckyaujKTALEgb",
  "key27": "voCmjQsmUTdjqMJtqVL4VVMoU8inVbfpKFVSP3zWE4R9qvwVp2Zu3T18bK5PYxsmW32UxJch3sBiYjpPqRhSp42",
  "key28": "5LEkECtvfKHAG3qYvKBk7GPw95Ex3SKYyZ5TNee5U5pATd7Mx7EePhBhVmqHaXMZuHYcVcUEGfWMRV3QxcMVUGht",
  "key29": "3ookJkCaV1Kseha1A1nGxrTwa6KkmGeTxB21gKEarFayPEBwPuU8xgPdJ65wffQoCPPQsEGdPZshhMKJCuMXJPR4",
  "key30": "2qpa8i3tFbhnsK9qX8s5ES7bvBHmYV8jT3DWm7KnUYU2M46Vhp5outHe3tweSemV3iVyg6FheCrp1sFKz1Bwj1Dm",
  "key31": "m6fBmo4yfEc3Zd5oSGrH7rbEPh2GegGjg5Vo7zcyJFdKNWcj4WWnjZVbs6JLpXriLMJfd19vjymmFA2TjNVLpKY",
  "key32": "2Jmihf7dx3fqDmqgtRPZYyVZQf33Lv5Uv3wgPMQZoEvW4cLCQQPgPWutKXqDwME2ZLbLVnmQSKWopeP8fjEVHAEx",
  "key33": "4iH53eNr11JH4EFD5RkrM8tsdfKTso3AMn89Po8MhKGkDF961Mgg3stSC5ori1mSvg5Rgcvgsk9oyczW4zW9XTfx",
  "key34": "3EgUCWR4JECTmwjDz92PDA8qpsp3egAt7ePvxh4CSGTwQHx4XMh1v5oFT856TupifkSbyPxfNrst2YG1NvAos4wx",
  "key35": "KrycUSJUbWRRpv7gZ2xcW4MSXMxeWyQHFAMLYJtcJaa1BzPQ3kVNbwcfyZNgCEBbocAXDRmpauTMcpf5E8ecyoc",
  "key36": "4Z1cjS9raUwaKkSXxKfyypqFmGujWZdDuF42UC22V7fFFfNBdYU2XccSeuDULGhVGTMgW3HDRPpezHWLevULpeGd"
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
