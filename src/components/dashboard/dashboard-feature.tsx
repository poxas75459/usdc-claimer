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
    "2yqoFaZo3FAWn1wpLAXdSPV1i9ooTaK6qJqYT85B65DAAcNkh2UvMFEJjweSjvrB4ThajMmriPjxSR7uE52Bf1Sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rUqbuu9abV14jR9K1LgerdmD9tqWSEkY1XyRRFtQLnuGid6H1Sim6BXDMUnPsDReoeLdmvqdq6tZe6Ur6qXYdKg",
  "key1": "3vFiSUhYPc385TTgnDriN4LWXUWzYSR5n4sQyCi1ykJkJ5XVY2pocoNeZLJiJF2szRN49YUaBaoEfhSMzFSNNhBW",
  "key2": "5k6Kj7drgvry6V43AKgWYDBwuAoC22stXjdMBnfDWXd3tbrwZY9yV1LkBL3DeB6KFLrt9j8YWi6uYSmwk4afsntT",
  "key3": "5qiuNLhVaHkwESGsSGgry7xGuYZ3xq4viWQdkTe12jkd6V8YK7efVCTHMxmmgobWAvtwqMqLgv6ggpEYdQU8rPtd",
  "key4": "3h5QyQcxgtWpisBFNHTYj9qPit6A8ZjgPo3ZX2Y132BNbFu4Z2FwtA1hCpZwfK6gxsPVSnnw16bLDR4Nn5qTJVWG",
  "key5": "34WBSeHUhF7691kmi1ywkJrVw5hUxd7FMjZrgULQ3LzuNZwZy4HuZanNFRmBfUN48gUEkjnSA4mTKjVqPqMGzxHG",
  "key6": "55E9S8wZG3LuWKFrznkQRaYja8GSMzZQQasGXf8XMYaLT6vQvwfrizpt5Hrtpx2Nvsx5NNrNvm1XRo9qQZThKa2N",
  "key7": "2fFSYAKWQCvjpxf2kc2FUUVJJqisX7776Qdw27tXs8HMfxPGXL3oWPMKpDpcrGNrdVhUXWm76kMCJpAkBGakB32z",
  "key8": "4TuTokixZXTevSnceyt7RJGNybqH5VBkNNdHYcirfu2CsoTksPD9NuUsDae4w5V1YF3hi3GJFScPqLM5oH4SrqzQ",
  "key9": "5d6XY2GK5kP3CQw75k5Wi975hvKJUs6SL7YsHnnW2ohx55iJQWb6vByZKoYFKat5w8rXeJSpX1AvrrL7GfMjothE",
  "key10": "35Nw9qJygUEonVbLvaXf7ntMFN2YyYQH2W32ES8oTcDcUVVkt7ZYyW772bC3k2t2ep76SprsGTbx9Q1L8QPFXTnM",
  "key11": "FHWtNSppwdTgmmnTwxqKQNwVJZ6S8CEHPcwx5wigFXGxqNXGbfexzV2iiPHsmzKe79SHbFgsVeMcrSCNUMa6N23",
  "key12": "421qmeoFxiPim3JNJDuwVTMzfdiKfsGEmYR84KTsvSaHC7QiBq6VdQJ56ggsYRap9ANgpWi3giJeaCN8sykefBRv",
  "key13": "W5MYkf3DY11nhyeDRXztbYFN4yr3NuiTd9tLWKiAfsaKY4QGM6PNoNTjxqpY3gzatxLyK2FF8fjPHA8qQexZqYF",
  "key14": "5gduxU6QsBkAcg1JshH4UMV7bkfokhVPffbVKq155WcbwzMKLpy4dWjWuszXJ6sNCA1aX8hhsAkJ8BfUZXgwE71W",
  "key15": "yJn2JdvDjb3kHgKDyQi8nVvgXfKS82JKmAojdDASnY6f4Azrys1RiT9yTUxy1GsjnWATMGhhg2rXPgoQkVLjZBR",
  "key16": "NDDQe8wDhrYrDmey6gi9uzeeoWapeXuhRwsxh4wjMiwrc3BdJYbx3RmcMmRg18wJECkmZCmTjY4FptTXsukLzkt",
  "key17": "5ZXZrXomBNQspBDCCCP1C8yhhXK3PaWNpcNNGHjNzVGEvQU6G8osmmZV785Xm21f36pfTwo5Qwikse6Za1TLiJoc",
  "key18": "456cdCVDWw2GyJATs52XQ58i77EYHTk2mJ4moXWNht2cNfw31hNnBaoEABV4x4iMtGnhRSJhpFTnHVLFDuPC8hX1",
  "key19": "CGwqtU4LQe1qLVJXFYoLxbUqtLq1mSQfWnhKW1kzexaACAPBH1Z58YEkDPbJKmBBTPeggnzathrPkGBzZC84gW2",
  "key20": "xbARzZjV7hRMQdsU1xDH5nqXnjKa932e2hGaEhQpEVJKMggS6wMRP4xY54UCS4zJEChkmhfzJTXn9vJBwW9Yijs",
  "key21": "4TjhXmdjvkNWa8hX5gKrNx298GKnGi1oqTc496hdS88nvQ9cT7gqTikrRbEv8p5jXHQ9uuXeB3Yh4c3QLXcissxr",
  "key22": "4FhWnnnUKETx5maX1xHkNvgXQ2ELmhhbzkPFch3zoJRXEoC1gn9AGfM7xyYaAPcnSjNPMC2P5fCdyJhEA1dDnwPw",
  "key23": "5v9pCDxyxTLBXS9sMGY8GwKndBKYGJjKYGSJhD3Faa95HYCspByLEk9y4YGmHW8u1qK1mRCfcv8Vv99bQvW1d3cu",
  "key24": "62aPPMHuz8fKBvctmgLYrEvgfoSEBB1HewxEWcm1Tc8qFi4aZ7rmDNQfLHhFe83BdgGBZY3tog6ukEXM6i7ZKkLT",
  "key25": "2ZDuvfPC4kZ8iNhzqDD7YxE8gJd7FKKjP4BMGR2QADcdv1Mbh8nKi2PJJpZxqAgSs6ovfgTu1nAnavSRhK2Si7QF",
  "key26": "5NmkuAnpuabBR9ryryjMhgT1nYtckaZ6fQZ9gfhEAyntMyv1hkF9t7hN7bdheD2smZuN9krkLWWTBxUcE8ArJfw3",
  "key27": "2mcsfEV4EdbqTgDWZd4tZzgrPv9QtqAam5Pe4z8vdmG8au7WM2gqUxkS87Q2KcW4v3tYMBeffNNkwghwWFx9hZ1F",
  "key28": "ro6VjPQieug5gZTrLBkxhnfqDtxkdTK3c3HV84gyBoHNcZmNkcENqxSJswwKZfhjQf4r9VgCrAYcNEcKvLDWWcp",
  "key29": "3af4zeeknBCb8Jk1Z2gz5hzJVLyvAPd1MGYY91uGQjgd4H8NpLsVnBSGK7rBjKBekNG8rTEDVjf7QX6Q8QMF6FM2",
  "key30": "3pPwenBXx7psGGbcC9F7KoNMHEtHPRD8G8SmLKxvV6nRnoLjpwpTovFuwLF1RHgeq5rAKHHKHfSkDLyw46cxtmkj",
  "key31": "5y246iXtMJZ22rXSCwy2MjqkjXNbmessSwLNJvLQDDc7z43pYSUtMXKHc6Cez5W7Cb622npQEmk5Z5wNaPzPEFwh",
  "key32": "4P63xYuUjnuycxd265oc2dwCoCzesC36N3gJVXsGvk9RgTjXKerRKquddghvS3HAWnuoawCoSSEpHYp34sjmvLVB",
  "key33": "4gh7Y25Ghj4XXEYQpp81tMf6UNb2xGs3DNbGaNQtxbfFzug3sXGiLNoxYARMNuVMaBDovLzKhDwwJeYNgEVXoQKa",
  "key34": "3VGqoiBtocQxa7qEruU34F2Zvc1ANjzDM1VhrHZSoeeiwZpN73PijcxBHZE7GPeDBr4pvHw6wZKQ3bEH45umC7DT",
  "key35": "3HEJnCSNiEAraGWYWjbuQGt31fSYxo5iZAGeJcNutXuVtNKzrS44W8ap3twJbKgVZD87ZU2y8tk1bjGUA51k9jz9",
  "key36": "4iYMPMSW6qm4mdQqBe1djK4JyjaGcD8RTGCX7exYLbc7ki225iVFNXTDQEgWiyHopAMARRHnDZi42PXoMxBorvhF",
  "key37": "5eHhfNUpQRoHtQYQsayd8dcwbJAeFRm2mXPA1Xsz42gvA8SkStCFQFTktmsA3oo6L61mFtDN8Bncwp3TfXhjXK9A",
  "key38": "4Zbm6V4Js3FYVL26YsX5YaJPJcGFMzTQb7KxXPKjsZZSW5T9ECHWs3P8XStT1TKfz7udxDKd9NKqrcrswyuwu8Mu",
  "key39": "5uAbW4DmyJCC99KnuzUjehj8a93CU6YQAfkfbBSdMjjsmtigANuqrvBrNdi3rao7EZUyyqBrqfaBHrnc2yHoeson"
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
