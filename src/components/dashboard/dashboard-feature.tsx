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
    "262yb6RRgYEFaSh8UWXc6aZUFyd3GqwSJPFqUtbugD6hsXC46rSJg9E9CzWt2u7kp3gLNh7XAphYaLGWajdvwLyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WYvHzKK2sz87em3Kw17PTu7bGbDT13hCM6w5CQnzxVV1s9cyKTsrfjUPdqfvUW3j7rmhsboVRGQaWo9LoroF3Dp",
  "key1": "SZDkNtDg5npNkDv5TLtn5JbDtgWLPJVQZV6kyqY9qA2B7JfPxUwRyswUAPZ1grkNGWmtvjoT8HR43bpVdNBLAJQ",
  "key2": "3Supy7eXDmn8seWYBD9NAcwnb9SgBWiDadjbdVCKYap9jBocqtkr6nkbrRdFBZHLF3jeZzhuYgoGw2Qp6bEG8J81",
  "key3": "abD1Gb5FSMgfXe9P1H8rJgSpg1aKbiiZYmV8mtcRsGAR63UG9ersSF2tQCKQ5SDvthaYdt6NX76L4834qJLwkyR",
  "key4": "5gZ9H1wWXwYMYoQQFcR43Qy9mATjxoJCRH8GLotNckP5Dx9Ci2YBXD3HMaMerfc9K8KbzxeN9wcWpduVZE6VKR3y",
  "key5": "5JBRaTH2Fs8saDSFTezx29F8qF1FLxwgYBEESUDGPguoxBYAbHhSAxEr6jFcMfqiU9X2SZBLaaC9UVFe25MRhzmq",
  "key6": "5qQ7U1hFCYahCMABhGjr3ZQshwe5EQp6axKGKxPsKoSPbYEqDe9YXLhp9V8NLrVxrjsnprRhNFDKqYuHXj3DvxGT",
  "key7": "4tAmsapTZM9RotDbxyJuGjQnhb2ZZazUr3gMLCia5YPPqDW5fFRbDWDAgM2HoqggWzWe3iHKfzX4Pgbb1ptUM4hF",
  "key8": "3wekYcUpBmPtw1dsYpwEKK8MJSwed6FUeHGbr665CxP3gWzg3BX4pxkWQ8iuKaPuUaZJNZPF5yT4HthMqT5VCwhp",
  "key9": "3UBQkTs82MJyrGXrwT8URdqwW9j9W6Wr7oE9Z2Hjj9rnqkXi8s5vCYkMMLZwTUBfqviTrsXBPYCYYFNo41aaY2eA",
  "key10": "2qz6qLFjTLn1UNFk7mLKX6e4dyzwNP9S1HCLWhFtcz1pT8skwwTnpA5m7bYiuoetJhMsBXVfq1dJnVUbDG2rePiW",
  "key11": "4zgo6ahfFiTJVbh249cJBpeHSpFU4VUq2H1HvRQUA1MLbCH3e1PTqwcktQVCbU9Ti6otQ3GmJBamBxAG1AneMwH2",
  "key12": "5Vv3KhdEzVEaAwUjBNVMCM9dDLctjZGc9wYFwLVYcH4F5bJWRaMjoVxHBBa5vzvBQFFTUXUxFNKuihJFbS5CGUZW",
  "key13": "2XAN74YWAnmKxECbvJ8tFNDGew3DmLCmqbTWUygb6LY14fbHcK9MEVoDz1zjKWwWAXdj5TdTmT1KbR77Q8UtGRn3",
  "key14": "6pbNJcnfmQteV8oithkcuxePz2dUrJSwbriUVsdn6pPeBQoZWbDT6uhcwNte4UsTPL7NWY3wy8z2YSubYwoqnp6",
  "key15": "Yj5SJmQueP3r2xG7Dm9zXkx2ea6vmM4EYJab3fQA46S6HaGGgvmwcK11wmLWpHn5bpFL8cUHRXUZFtD3tTdGSxd",
  "key16": "2PdVAJGpp8FjiL93k14eDwbmq2rX83UNY52jNXkijc8ESQLJnwZ1HRTxJ1sQRpGyHAfgXmX5sJnnr6Gdgiuk5DZy",
  "key17": "2LF8M42S4FDhZDRhkMwuRSHpYby23LYTttfvcDS2PPYWhNfcxQeR8iyjtQf9AP3zx5cywduH7Nh8euHyzjirNWE8",
  "key18": "4yWTQAkSVT799zrheXZrTG4fi8ixeu3augziFSHNfLXVWATp6BZDw5NHzpxXp8GuCtKPppNzHF8RTwb9Cqah2XFr",
  "key19": "4WTP1Vth5HatTRVCbWRLySrYrGcTRoRcGnZRqphwHPj2varXfvMZghamisQbDCnmtJQfxefXSygSALZ85VQuQkg5",
  "key20": "2BQ1SjkQPvMYVEcm8epKidZFojCjoqEEynhnwffvPYgraQugWNYSCumcEH4DgU2MyqRcn6ZGA7mcC3XWXQgkFAyG",
  "key21": "5ZbeKQZsoVGiPomPYMvWZZ7FsfscLWASsfTGidHPCmA24WN54N1z1BbzHAGXTJkkJMAAf9sDiNgZx1xexCm5HRRw",
  "key22": "3RpbX1nkVfrJK3orUnCL8omb3RqyNejuiXm5RsBGYaJ2wYEB3jz7xBwaKwWyVm8eXjb3aktPtUqV2h4UH1eePsBN",
  "key23": "3FzBp2Bokspsw3jXfZjYSGzYBqS84fC7PNXgyhXgTsez1N3kDxtdG5DbQNgXxQMsC9g6UG37X4cqyMayieqkwC5n",
  "key24": "5mL4pEMuqXY2RUYywKkhUudF82Don84M8STSSuT4BPQg1CttBDQvpJYH4KiyaQr1Vr8LNGGpCbt1aESbH1p5JRmj",
  "key25": "5LAxJuMftgqM4TdWDy3R1CPvF9kXUMU3WrpKTX2DHxEi95zBQ7KmEFukwfCyhW7f15Qx9nMFeUqd9dyWHCapwvQB",
  "key26": "YBP7J3wmFJpuea558NatLGUtqE3Sk14mgFLJoqXAvfdf7xibqNztzWfgFRT3cQvdDRCq7D3geP3vWDH9DBB71LN",
  "key27": "5dQp6ctJ7GUvG55PrqVyZPrcLxvymQ4sVPSxHAZobm7rcUr5GtZB36DixMuBrGs7BLCfZdDndxhwTHSBZACbKBo8",
  "key28": "3s53PGqJz9NRtDvyVxF2ofoYJiu4LTZw6oQRZJXrhsHqMBJxusSWuodkydfBrpD6MFup2s18xV5N2kidp4nm7GT8",
  "key29": "2WDKZmqBim3uyez2kTatbyPYNwQ1oNNqyXbLvtejCJPFCiPPKkfiB6RTSgP5eNL1H4SyMzQtXVjBnejzaphqEfQC",
  "key30": "5mdjfSAgnoKd2i1J3wGfqasizCmTsCctKvt4VwgX5mbFGcK8BamhRPNbQRjv99fA6AoN5ncgSrwn3sWRmwuV9qti",
  "key31": "2QTrrKsHUnrCVKUv7gbbTxNUCeKqACsWUjK6x2H8a1n8ghJSFwnjbrMcTtAyo5k3VoRWj27aWvbunEL2i1eNHYF",
  "key32": "5xQGiLXikQbV54xQnui9YGFL1UMxomnPwTmx69jnuvDQJHz57KBvCY1hqZyuafky7DqpYKS9WBd2nJRDsu3B8FJw",
  "key33": "u9DRsQi3p46UECj5CTK4hpc8sNB9VbjPuJSEJiujDyQ3tRDhEYFY1TvmPDDWqs9xSFRLehBEsTLaMNBSJYc56RZ",
  "key34": "5Fcr5dBFdJW8NZfh8UbUZzWtY5qwQEuxjBke8hGEZsjGr5CvAiFssNSe75Nr4yVZcmf9p4d6BkuAvJ1MR9ToNkVu",
  "key35": "2WQgQ3yBpMPNuQU7ALv1aNq7Dsrq8aHd78kvHcBadVvF4a8tyjRMdR64tTwFSTDz2HzyqeQzFbatwH2jqB94cdAf",
  "key36": "31y2JQzU1wUgJiJwxn4kfofnY2frpP6aBcNHB668V6mjyDm2wp3itmw86FH9Q3PGRMx4x1aM3vVFxu4EGVTodE5M",
  "key37": "2HsgtBexu77cfZ8yc9qduy4UthXkuVUd3mM5nSnLJPVEyc8YHomBNjuug91rWjxy4Pbne3a7xHSS3c2wyFTz3PXp",
  "key38": "ohwKUappXaXXeHsMNb1KpqWqNzB8WnY4s61HpLVJ71aku3ZnoGMBJHuF9sSMo1D1XHXueSen3aB1Pw6mHL9mmzm",
  "key39": "2z1VDrvBs5DXff8kcNJBqAruFFitHvvY3JRJ5SEiJMnSUBTbWXekKPzwEu6YzsyLyMM7jq7KHF1onnt4KRFFxJU5",
  "key40": "RkSxkGVPrxpAz4oQXQbwUoukdFRwA9rkYzrwCgKfv1Z22yc84gQAxvGwUuWsyjiZLPcyWBWxEwpeaYE6Gaa1ekS",
  "key41": "4X383qBwuRPDxdbHoKbLg3dUcKSrf4rhcgJhC9PjgufY1eUkGVqPPt5cScpywWaULwrkZhtukMLDN54vH2f6Txdc",
  "key42": "2Gc246oApkUj5E3kVjpTont8w116KBXR4Y3RijCmuBHwWav6Qrjut3Vn7j7YjU36VHXStDmYwzbkpGVRHCbubBMY",
  "key43": "YXD3hgxspRmhHRLbGF7MuY6DCxzPPjhZwDvYGesJ5hZaRwD2VDxTRWdnJGmyR7yvNwHG2RNz9NMdZjxmLemQ6hn",
  "key44": "24mh518wpy24JYLp9wuhniVFCXCjQCxVd9JnGU5geWgDTFo5nykWhtsWrYgLuVMouDimiMKhfUdfJ6vAYpi39KfG",
  "key45": "3kR3q4T9JYKTRdjukVjMMATjKhxgm3GEhi4g12gbdz6yyuieNFw1Mt4i4tSeTiUZie1jJ7uLvYNjkvyGhmH6e41F",
  "key46": "2VoVmQ4BiZNwWYoPXxmAt8RXNLPAomYjN9CLofnVPTas4s4F5AL5BdSAdsM52XNeNfujwcRh3xFW3i3Nr3LKUMT7",
  "key47": "2cBLLroneGwxYRfMZtFBpZYeCeLqGr7w3AFZt67zK4TCGZLBfiVxiyAGPcZi7PSY2nYXraTcjFUtAdvc7uqw16WF",
  "key48": "5yPVEGJRc3MPZPS4i6k5kPsRnqNiBuUqPXR1mmCWumYuH8EHdutGMY57m2jVvBtuUBWyQ4ygVXuyBZJexzUY1b3F"
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
