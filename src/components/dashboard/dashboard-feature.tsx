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
    "5CVt9694Fk1jYZbuWAUKVYfYXMyaxzjWsX3DoT72p5ygYx2wSD47MEA7QE7N2cC8zZqsfgj1jxLErYEsgKcXDXJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aADVX7Gti5PkS2WMrpawMAXcvcmBTRUmrWSDYVt2TitBZEyNd8ZQxTWh2cybX1QVo6zyHKiRE2fgfEfzvC5heHi",
  "key1": "2rTN9kDXXpLZEVji2vSgZKnEDWq9vWUCW4KWwxNwaa6Y23q7jKPF6MwVpwkdj5cghc8KjkQ1GbS7tvyeJPRdAusn",
  "key2": "3pBtWCR5npVMP8PJ2m5DJN6pURFNcwNuXYsXwdseYhQzcaTXaHNgjuKE2Je9FHthLWdgcr25fRaSb8G4D1VnsqPz",
  "key3": "4KG9Q3jMVjGCdJsV5Z7TToK1nXJpxrMZcogYEBxM1cSEjCvJoYjeQmA7xyK3sdakBioQ1aECAqjTH7Gs1GbxqjqA",
  "key4": "3BwTv687343jtRhBqiVS7hL1efBrSD2NXRJ6FwUnsiyDK8CuCiEU49EpEsgzsEcJgUCcTDemx4UgCvyes7JBL2vz",
  "key5": "24kt97K5opi87Fp5Cn7tv2S9skVqXyLFX5pRBmbK26yoxN15orayTfhp8SVvqo61NcCVfrcXwd33JSX4GdZJWQLG",
  "key6": "5BkmrCDXE2qpSauVWpiXff8BYn5H8SwBTeTrAhfqzigdT4TTG86enjXdtkfnQzoNNdNkXcUDS26BGjecRXWqJmsM",
  "key7": "3V3QaUKJenk1UjJ2Y7YnfTXDjqxLroAtt18sfJP5aZJrA2v69zydoH6JtjgrpMWRYVMEHDp9fwrD8JX71VozYim3",
  "key8": "6Nznxxpinnyyf28TkGY3kaT5eZ5wafZGjDBHxdUPmsHDqqZdxwpWFUMyLwjCSjS7iB3R2WMYdSNN4PBo2wRPvzV",
  "key9": "2FC2ig64pq6LsW1Cs1yYhCEZuYk9B5g4U7YGYVx6VHpLvxZ5ePnzQKqLX4S7kMKir544vtUinJHTrhHMdx5Sbrqu",
  "key10": "5DTXsMULGBcXFgiZpeernn56a8HLqYGuyo9BKVa83pXPJU5pJ1mtL1na4s6AvEgz6mb2hYrsFio9mrsvUKBkwcbK",
  "key11": "4MxXLhuzedGs2k7fjidmxYbR5Cz8gTRZ4iMtaiBHWekT3dHJsU5XyhMfJJ1jeSxTqm7JGgeX2FEpV7jtn3vHWDCY",
  "key12": "3gWTXGuj68jm8u84Vd44To1dQ4xVoWedoYnEGc757MKhTPUB7pVedu6Txkmh75Z9mLh6sJUTFWpC78XV5hrffsn9",
  "key13": "28eWCxgCWtih4eguvzSn3S76z6LZwzUwxLf6EVSJKjUFU9oRXgcrro8ZDcof8yEdSjE1S95EuurwEmRH1ZB8ExDF",
  "key14": "5TjXJwzyzgwWg6tswCTCsYrg5q3iENMhoxC2F7ofpcgWuBwNAnoR6w1jSkmSDHuBxgqzUTsypmbyWZYjLbXVrhLB",
  "key15": "hizvR7Y3qMKfjbucmCqzgKWjNpFEKoX7AtJzekr7ngTP1E3QGdqnBiLxWH5b12a5bvtQQg2i7VKAos1JpazG62L",
  "key16": "42hcqwjUuPXzphWehcLDBA7VrPFfm8vrjssBPof64FhWLVDw6PLF4W3xbzYqe8sZPB6exriJtRo4wDLDMcBUBfgX",
  "key17": "4HQjmXx3SrCBdhov41nSwDSiKm71WoTU5SfB1MoR34bPPonDePYpZFdpMHYKKkNYW3DXXES9WBcYbigmPoTDiNma",
  "key18": "VWa42FYR9R8om71sJjJc6uL9EP1mAhnVwi6kHbDreAG8RLQcZmrqjwHzbaPkSxaK8FNnmFDx9P6wTGes4bK4sRv",
  "key19": "Cs3a1KLMBjdn9k2tZWVMJAiBiwbLzfM8FcDUryPcHDwjLDPy6pom9KvGsfbmAx8x62rtwrjYNx4dohBhSR4vuWq",
  "key20": "3W3EJydMmT2HekSFgFe7hYmCJ7ck7kkzQAc5sHLXu11KJZ2wm5quecwdheSuXZUqQNGonryM124mArDAzhRH5o5a",
  "key21": "44qwkx3uRheLbG1haH6fP5ZJFDv1JNhfxfPeU9M4B7ZCVJkW48pSrPvuLDv7CZc9JjjUh4q9D7JP5PQghGQvv2vs",
  "key22": "2GV3GbxJhVJgBhawrf6AHFKgWH4UbpNfF5tpbHwK8sRg67ZMC4PyT4httnmNShasteygVtGkGBTnup8xQ4aSNgdd",
  "key23": "4MNNCgjEa9Ymuj182P4NaWX2RvhHi948AwZQRGFUQhmsbzMe4GUs1saosA6RqEwJDX84M5mfdW4qDuZiSiuTfjZX",
  "key24": "2qTTnHUdhePfMWcirBvLLGjTuhBjamabMi2MPUgERtcVRPD45RDobnVh82mRadTSUBGsMhiwyxFXwYKD85exGScU",
  "key25": "65r8PPXLE1Nj9jsZKvPFPQRHfzdn6cG9vxu8MPxFYPLaAGUZEdWTh3tsSGme8oSuBTNGcUt2bGgJiT2SFFuvgdoM",
  "key26": "pbbbNqwqnB24T76QQbZgPRaq4mU38m5DFAoWRm7mzax9oYHtCv1kCm4mv7WMxddXJr4hpg646ZnHXbv1VCYkPYL",
  "key27": "p8ymq3i7C3pQ7HwQ7XeCDqht8j3EUjtGogFfSNMLuqcBT2PQn9fQtFZrxDgQDCw3AMP8vqXAHi9pX1bjNHjNzMU",
  "key28": "2Ssg512VZSQhgXk9VE2HcBaWVSGKACk8PxrxNp1MxFtg83JqhDJH95a87miDeiTFZSZ9nFvhdu815APrd69Gbfkj",
  "key29": "36dvN9a4ZxmSAtd4bxskMn9yvcJMfZxtti1zx4Yh4Z9RCvPQkQdpEhN7iwYHpVCCNeAwLzrG5mmw1J3c983JjAtg",
  "key30": "3ftbEiYnUNbXnGL1vQX4EfWufbUZBRtxAeSNzS5zhoejyMoAW1nhJHSn12yDgtz9NBuKFn2YBAgWz3d59i48GTpx",
  "key31": "2SzW7U1mRPSm8Lv2j7q2H6Zuppqb9sZpuA4uGmYr6ttUJK6VEZcBTcTXae4LJMFaM16QvJc2SiPV58tonTG4Qisv",
  "key32": "CMzSpjq6d8boeiCqHJC2HoHC1utX9Qj6UMebySknWdAmaCCJtj5g3vv3eGP4nmyfTWeMLgVfqEm9fGtfkJux1x3",
  "key33": "3ai9TMV86zB3g1uvYNCcEKX5FYBtTi9zsrzBTCm2R9bqMri2rhhd5U9NHUqinxzsDcn7GLN6ntPMqK3MKjXVxJJL",
  "key34": "2CDR2m2JkqoPQUanrkJVSXPs5z1S5w1NT7xen2Fas32GLjG8JZvSnfGNyXcz1eioT4S2hmcdpnGwJVJJrnphZDP7",
  "key35": "2ZSfMfKWUAZmRXX5XdaMjJBsbbVuUsm3yxdTYaoYX4CptZXjch9dCQyd1LN2itd3f9auiNQRht961tu8Xowcayr6",
  "key36": "vx4ZJ7Lsabk2kcJDJGWNRNYsa88o63Hgpihiw2MtmfwLGv4uTCPe3ShiqjbyRkFEihzeknVVnegzWH4eVv6gvc3",
  "key37": "SYuVFzWkXcuebhPioZkMggLM8FB3Qa6Dmq4KFLbKQj96PHTeTXYWmbnhAqTK2ejvFC3Fyu8Ssw2Sb6rfPJhPgku",
  "key38": "4DYi8pRsZDXkH7BpRrmTTejCHNRGfQVuQzjWbZAtddmgiNu4bLK7F8iThzgdP5YxBc5eK11tEBqC4NT316LN79fC",
  "key39": "mH1uFXVEHc14UsC7ZKexcB4P3XWZ4eN39DdBJQDiLkxLVvkDr31F7BzZbX9H7vrDXVp6XNvaoAUMN1ctzwfaTMj",
  "key40": "2yb9x96JqrGRA9yR9vGzaPAKutYNVQBkEmrKghhfAm5m5oyEPm6DC2nMoYcyqSBfCogRYPSNxa1QG9YNErx6ea56",
  "key41": "63tKBm5JyDUvHyJjaMfF15tMpKhmNMbQybHibcC5h8HX2N3PUEUvEX77rmyFxgptLEZhxFz9VPfsWgRJ3wXNH8gj",
  "key42": "zFsGShadeMHuSzznDpqZWwFSFn2uSASstjprcuzgKgNj8SBQ2wCtyqUBEosicX36X3RiVrrZGceAQTugxUezeCt",
  "key43": "5dFUtdRp9kv6MY7YmWzzfokucX5URGQHcW6moUYftUifAThxL8JtgXzav8jY7PUM832583vKbZxtrPE6HbESRDUg",
  "key44": "jmGQzcKaEnYXPqH9YYopqGAdEjJSXbT682vXepy4qjHYyQDm6rCJmuJThq7JmQVdMDxBez4UmYM6nF19VUnEMhr",
  "key45": "3CagcDpWq5he4odYrLgV2UQQHWxg3JX3Jfe26pjfEVrcG7Ff3GEqTQ4dFpxDwQ88y4u2oJTGdyTdNiNp51UQJBdZ",
  "key46": "4ofS2SMzc7aJD1NF5xu6SGBPpp7Rfqeg4KtB3jd8NZm7c5zrZukyY1ma2gPPQV8KQ6MayeN3NvH2zuZsub6BQBio",
  "key47": "569Ceyt5Q4ofgvBcKkWa8hea5isjYfXbMPaovvw23iDPjbW7mAZsjRRSZBhdx8MTjmkGSdp2EtKnRe7AkuKFj7xk",
  "key48": "4Wm5PqbdeGBNWa3DfiFG9m4R88FFPKQkthjLmFZnezNMBG2HQUvYFYy5g4s8no63epxKu9cZzuDhL5bMeMUEgaDK"
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
