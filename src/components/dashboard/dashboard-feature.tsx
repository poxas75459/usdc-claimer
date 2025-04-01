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
    "5Vs4o3ujLm9USP72F9uCs6SWMhf5KbCEj2GVt9hL8R78MdQnhysGwaE7EHxb8TEtkh7kezpgxMAKKFQvHy1XtcMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1p7p8KJCuv8wicJaRopgpTv4uf84xQB2EY9buFr581cLaoDfq16Mk3kpD76Tjue1L9Q57gdc8RLLwpnLshYEpc",
  "key1": "2kCi2Vc1h5eW1SnKDCxNKK7YPUq54J7PiMfyEMJ3qQkmR1JcJGjosvjLLFP9Kibh34c4kC34QaxBpCU8Z7AUgbnv",
  "key2": "4B5ym9qcFarCXMxZJf5KNwBL7PCiQFe2oCCwqnPtEdUGrxPicuRwHGo4zu4SC4kXt8tuVUTfabbeRmf3MqtuLEtQ",
  "key3": "5g4YBPMms3v8uSp5567AXsKCAxQ1d3JeS6muYChZDJUdtAPX2hg75Tjv9qc1XdidRQoYtxyAdbUREUWvPmxy1eut",
  "key4": "3t2DHWZex2w1TJ9tPpXZmsr5hnLpujCZqAD6NVWEmBK6EWpPquwkZCBbNEtR1gmFeoqcL6qa9C6KcQKHjDrcJVwq",
  "key5": "4jMcqfM6YxjFNCzoCDAgPaw8x2fN2wEhY5tiNRBhpYxbaPhAVkFaUveUJd47k2dRUBkCKwDWkBnhLUFUMXBSM3yW",
  "key6": "2fsqtGiA21K4Ag49M66g1riqmJc9ZXzshnoQWLXH3ThpWXYTJsLF59j19LhwoVzZdBdFc4tLdW48UFf3ThvnsEon",
  "key7": "2P3CRvXShhCj1UMeA1zuGwXMioe533YMHmLzk7UAphYsyTKtcm5Sw14fWdoaZ1K8xdUXjgxBTLa8Xw6UN5rFwpj4",
  "key8": "51YUz52dzx6KtT8sNTqPH8DSpt6RNLCwykjyYyoiJpHHZizMmbJ2qaCFDP4WieFyegZr8iUePoFuxUu1XoFaFZJE",
  "key9": "2DYbkomoyhFzjuGeLArCpPnYSt4RYtp9KEvuyMs4crcN4sHgqzmujUeyzoEXGrfyFZs6QbWYWqBdZLh6F6Eq5UVd",
  "key10": "58AyyTq9dwoU6eStZBJi9RRHnteFfs2q9wgAo6VQCbUhyTvQ4CxHEVw2Kd7RWCdr5fAJYhNwBouV8R9atzfG62KX",
  "key11": "62Rp4WcJJ7bU1k6KSRtcwLGt1ZPfig5tMKfo1fvGcP2TnU6R4xdmJVNBrYfBFdoFBQURuc1d8xZnu9kdLSP8g5nM",
  "key12": "55i8JqLe43byfnU4u1xfrCyD29HqSp87JbRSnSzG2PyoQQrmTJT4Eg2tXayiSaakojKkesa4jbZbvZxZnvc4N9oN",
  "key13": "4FkptFfrwDKvNitWbeXUsYQLP5Ef8mcTvykDs8RXrgSVaoXcehtV21NCH39VzGfiRa3csuHSXKTGCtToP9afCEzL",
  "key14": "Vpy2GmdnsMStAKsTYdN9hRByEb19ciLy7P1be2w5ZbdG3bu4ajyywbWDSCGmtVnSHr8YqdFMRYPyYQbAitavaH8",
  "key15": "SdZJ9Xtv8GBJpRcHF2jdpQrRBiBdSY2Jt45cHs52GXFftzE96mUKibcBbz7wrtAwsSVQVGbDN6EWtnCPzEzV3TA",
  "key16": "4F1XooAR3KWCWqEvPWWe5HvtYyKCSz3WGG9DJBQt5Px9bpKbii1R6hduziYRcmUYTgUQJqnAsyyU7UZXk2F5NZM1",
  "key17": "58ANjhjsFm126DYzKaKRwW7gLMuvcBzMJx9KJwqS2QXtb39fmnXSgsjwgT3GQzdZHMyrVKS9Gv8MgFTYXZoEhsgZ",
  "key18": "CUkreakFHuREA9zdzWR2EVtn5m2kBw8W9N5QPBKe4eATicxAL52AhEYDMPCEPjqh9YzEDyQDhLn8aH9YD6ofyPL",
  "key19": "2Gr1HL1V38R2qnT8ZkDNLJ6FzzQFhV5rcCeyLfbDTw8R7rreFqZ6sujRh6A9pAc4ekkptWB4eG7dRnqtjwU5Jwhq",
  "key20": "2WxdBkztioS3niSJvTVLJKqnWSA2vbZpGqMpBRcQ3KmRJts9LccbTetUQLnv1URh5cewaBDi69pMUKKsCxQkoRZi",
  "key21": "3MR2TvfsCxgEZnaQPS14iVkfa7Z41ywgMzoSnxgV88uW2d1QkN79WZmMzRxgm89eZoAgLJmvPv14wMk9aLL8exWt",
  "key22": "5S5t24V64CzEzhEPqYjst4wRJ8Q3ejXZ6UVUzGC6R4HRk3LQ3mgbuZ3WDMJvZtzhmYn6RPpJhPzUtnRkAP28n2BX",
  "key23": "2FpPh4LUb1wF9nFG52tJc4BwjqYV49X3e4cxWf3sz3Csg7ZbYUir7qpYDXhu884BYqggvC3N2rCnxTZUPcPv73Wc",
  "key24": "Rx6VMbcNqe8gSCMwswC95evuyYiQs7ZMwcpaDhEwnsYSdPzGq6Lesrt1dm4yKtD27dAJ2ybRTWtwEm5pydcbJ57",
  "key25": "4extTKydRD6GyzDKfQXrmJNnXP2H2QfPtuTvuaEqUgKRFWpzGDMUKTqcrwS7v7G1GwttkpB45mYW3jaLBCTZ3hFS",
  "key26": "61qtf9MfNsscCjuoTMyqDQJp2CtfP9fNa9ATtVptnpSAdKnYx1mNUpD77tevu6UawRr6x5dhKZ2a7DPtEwKCazgw",
  "key27": "2yjJbT3jh75PfDgixZ3CKDNCbJT1MpQBwj1qv9i2y4twL48vsJy1Yd6sNkrybFkmrvLcr1y9Md7yCvCk9HqRvNsH",
  "key28": "2SZhmDLkqRSofDziLCRocSW6vp9Y2LBfYbpmesyo33WSi4JPZeXtnsn3XJQLHDTtJxkkdg67FLRpfnxFyHTQse8E",
  "key29": "4bNocHeqk4VsBYobFrWdntqAZ4H9BdLi6iFTegokFaTZiY3AAaLYAvU11CMTjghPpeGP8AUsL4AsmXz8AXr8TQR6",
  "key30": "2gpWiSv8ZXur5kFc3xTo6DvhooGB9U6U8c4fSwttJssyZBhc4JtTSTt9KuGZuQo6Ng1dFpQuKK79q3CqXfre42A6",
  "key31": "2FhnCG56ftwP9wEufG4BhNG2QqwKB4BFaMNycis1CNMmjFU6SVGrRasS5An4rzyJd2RX6he8JCRgyN1f9HiS5dtn",
  "key32": "TXuEikVKfiTAmHdpF4ktkw5cXjAwU5EXkpBr2XUHWrmNgQFaVxx8r4zjeCcCkMKjLpn4HZKUoVginstFhpXqTaj",
  "key33": "2PfdgBGZggRZ2ozSAxTDEk9JTbD3W7TBP9XGRuR4iLJCQqjuixLWp4i88feSkt7u1e7Ge3kD1swh2yWJu9nz9aTY",
  "key34": "TstcwszencG6RNybtTbqNksKWrPegSvjBG9TztcAmMihJsVBYGgaqgNo6Tdc7ooiSsDromMFZFtXazaFF5qZYdP",
  "key35": "6aJGorBWUEu6yxhaJEXzhDPonBgXTc4hv1WC88oe6uim93MwVjXyWAjbgciqRhB2zgEBJ9ygjmS51JyYJFWfgUu",
  "key36": "iSra74oituCVHmi7gPVxoVdQf9BqcNXbq7HK7i8yJuJjovjeDa4qg21c1nRKcmk2iCKYwP2trAQXM4kxfpPiZVB",
  "key37": "2L4HiEdp446khQxDDVGxXoY4zL8JZzxcZ9F7dVCFiHjWq4nbmqUYZkEAeqtMF66Nhw4H3s6TyaeZotsRpHpkmuYD",
  "key38": "3HUJhzEerZvLD3f4fgbLp6ZhwiTQM4cv7r7vAKfsgBjCQww4c8fDVw12LwDft5eDixhYXjMK698J43K562D3pq44",
  "key39": "4qPS3G4xyKjpHKGPV6AK8v3aAGeoPdfRjdVLX9RCKfMoUgDgvbjHnmZv6PkfnzQsd3n4guFUN12y8ettnQaHSEFx",
  "key40": "5Tb8yjPTtC5zsop67ANXjPZu2TfDjd8URHk5rYVDhZFuNNgVS64Uq4AsYDbmF6bXcAYhmQqZRq1FoQzfQeDs3X1K",
  "key41": "4bmQsSt9UrTWoEdoSBMHiTpagmoQCpGFw7WxbTRVhGoK1LqW8TGpvDmXesGFncjk7khectaVMTsc6vE85kHdi3jf",
  "key42": "2fTF9ydZFLyrLP6fkjSTLzRYPyppmrUJh5hnBs3ZFLUD7RYmsguAJa5A7XQVbqvmAXZyi1tErBpsd2VwSafXpmZV",
  "key43": "4M5pBh2jb2mSgEeHqmzxo5HyT9Swkdj4MzszUKABqoJJBXwdL9KzzuXEd2hFePsp12Ks6xK6Ja6ADRX78MWuJbpw",
  "key44": "4Eq2J35uXQHX2JKu29Uvaw7LtMVhY8ReKKxS5L7wnjUuYb9b5gd7Mk2nt9gtec5CBfVCdzVzvAnDLce4ZS8K75uk",
  "key45": "NH4HRXrE24jRvvmsqFR51YvMfxYrmqMcddeEwgMe1TqMA6DiRPE8pYabn3z5T7JNm5MD8TPxvvPBkXgdqyCG6RC",
  "key46": "2xbuFKxigKgmVCDVDyvcrfUQAG1Nn1gYogt2YkLas9bbMU6a7Ac2wFLdBZCisUhe2Wumt6arxPUXxGVqTbMLrqpp"
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
