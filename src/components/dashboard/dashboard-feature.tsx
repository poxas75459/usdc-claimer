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
    "3LURE3H3B3wAKABdVmKnzLNp1jN1DQAthREtavMBJaJXHW3hBzuf6jnU3w2wnL3wQ2DpizdhY7MXCX5rwz65fgfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RATPZRLJ3fr2f3YrZR9dP8x677EgaVEbjDwM5e2j2gJBQYjFVb9xuDSUcnyjUtdSRkHeq8BwRUWRcjUVeB2ifke",
  "key1": "3ghQiubqyt1zyt8RyPxpmdN8kXiTfrzKGsdogXjYzxoiFsisKXwS93ECDWZxirtP4ec3XwuwenAu7h5XYB6ieoag",
  "key2": "7hfvTPCCgMz1kMMqhZ7drqReGgvqtM5MRKiUYj6JenXc93py1U3csV5rRvwRmB6SydgNytFbnjxz2mVmQ6cvFfD",
  "key3": "2tsVsJQteyrWCbrL5HXq8sxtZQp454X4EWwKAQXiyM9jGZeHiUNmbwcmYoE1QnB3wTvbYZNoZthG21Ybgs7Me3wj",
  "key4": "5gnMWyQ1kJdR1SCWnrwWNBBEEcdYr9VgSxjYJjDmV1vyBLUwnaV8wsJiXztBFXYiVfxZ4VPgcuBpyjyPX7Gx3AZr",
  "key5": "5LggmzPePqLJUr322xkTL1eQR95RFSTygke7YGAHyVdxdgpXN4yCbo4qkaCXGP1WHXa9BG5mkty17veMKg9RRtch",
  "key6": "2aVH5ynrDGFnyPfwzj8fXnsSQcmp4Wc1Rjp2sMEkREo7FW688kVrCkKB4uLRyHPu2UAbhEojnCMmCEHyt12wRpk4",
  "key7": "3e34YifQDC7DJRzX9adqGQ9viPoKoVrsuhAqET7281bpsbH7f13YtTgNSbr4z9osRet7UZB7mRTkUrbmgQtfM646",
  "key8": "4hEQffzATkGGsaDmUftKBbJ4BmCP4QBBRM4LuN5FSmUtrTzAFw8LKwyrkHNYrswBZhAGcghYPQKt9X8TeF9Q7mEo",
  "key9": "4Fg8CHrMH1Q9J4qtKcu8MMq6AMjXF3LvksfaHQFr5aVYjdGffYSQd1nGTQDxgN5WfmMzwRT37Zw6NX235q6WnKh",
  "key10": "3X8DRWkTRfRhgyYYM81ZZZiGCk264YnWMd65gCE73URE8F8Caegp2XNS651rNe3DWo3vF71tAsoTiyGvVKS7YvxT",
  "key11": "3Krt6YCVfTU6apFoq1KZWzmyDrRWxsGm6VBcHfDsiq9qczXmDRj59qsDJmSnMfXPbKyh2HcUq11CmmJcEGbceWym",
  "key12": "4RLS6PmTEMLNdPrsGc3AxXQtSaty5Zo7ARsAAgErDsgDVLCweD1jUqBgP3GmDUYrQYEhY2Qojem4gog9HMFUZi3h",
  "key13": "5NJLrFPCSFmUnJc6AENVZLPXMg8pChWUTq5TsMc85xBdeafitgkozGDCtNk7VUr1kuQp6yzuGHznHFQeyKAzdXA4",
  "key14": "3daGmmBYMKi1aZdVThFNHYVX8kqb6Uu2qGXSzu1vcWmV9jNBMVWKoemTMmMB9frmD8PUbVQzgrRu2cr9uDCUUkkb",
  "key15": "8qay1ZXnFCDD8FqQ3JQqFRkTPACxym6Cskh5bK6L6rSRhfjbNq75GeFFQXsQbv5wx9yeGDQ3kf1copLcMyoVRs4",
  "key16": "3g7HNTJS97YHPzZXc2hyN256zYcaiW4wvLrfr6bai4XWx2gGhbGuqdGvv2yV2dAiMkx4wCBHcrJ2N58z7udZnFXj",
  "key17": "3agZKxSCzvMSx4gb3eSwDKsr3oKY2M88erYfa2Y41VREj1pzekJz5bE3jyiQbsoWjruVQCop4mAGQhRsi3qMeZW3",
  "key18": "61sZZtMDvJLSSx8h5Aq1HQqEwfpXetrZagAUH7nj6Ws7aoc4E6GFQLbzSkZ45RByxhvEGgJabE8fsGYfyiVXSBrf",
  "key19": "3o2N8Fc9xFuG3dV8vfWomV1NnrKqvuqEGRxbGkr5nzvS9Qh9WTwukSEKMNUj8zrXoxR4ysdBAuo6FaV7uXcxfhjF",
  "key20": "4bpdVoQBq7Wd6UK3guYMHTEAX3NVMJWN79tQKTd5swJCYdCrmHjAKx2g6qmUKaDwkfBty7HmVBrprx2kzyKBxnSS",
  "key21": "5rkY6QWJvbxui49njfncpe6VoBVENAftKViA3SZ8ZbGWpZ73KSdPw8gLLqeUA19yD5ev4GXo3KuoQX2ox8JscW9W",
  "key22": "3YFHxJKZUYTkHASwMWJQQrNKJbBemPBkCEgvqSrjRAsNjrFS38eNMBdqiwqnX5DwJ5jK3UfDbdagAhwenSafRDgj",
  "key23": "5txyLhKJA61u4ym8fab6cap16m47buzN3DiqNTYwUJ4Ua4j6YYrShVc2twXyhpxho9s7HEaAGgvaTMwdeSz4ZCSq",
  "key24": "5WDsPmFJS1gw2ntVLoeGtykawxMZqbScT74q5KLv4XNauuUcHERfsDFv4nDDkXV8YUYH6AXSMiW9gV2akygFoCLV",
  "key25": "2CG8YfPvfSuFiE9XASyfq4KiyyhdRVCnPUQLMbNk7reZ1Fx5sZbyrjTSPCVPyHvhiWn3BK2QTHuKPsUgAg2iukWU",
  "key26": "2ex2D1eaYWPR9PYazE6aHj4f9JbWqrTyEkbqtjWPr3nHXxwYyH9SfcAt1MKzx3NQTTWj54m2obbKPTvbcZYSCAcR",
  "key27": "fM42pkQya1fGkctfJEWQVgy8dPyqPNfiFYPxnifmN9xDBmYkVxki7LnVUEownjD1wfJDceMgjp1KwNBrtYS6awu",
  "key28": "4orJ2nH8ZJKsEr6ccPdaKCy2erVbNN55Y8KqKXNbg4qFmqPrTLcXVEheRdCHcyCpK7xnTH9ihBtegKLWayKgP2Ma",
  "key29": "db4jNTEeSKtDXZ3brtX8JzFPj43iKhYs8pmUQejQXK5h21vqwYabf4RZKLV84aL6FT7KJaCm2KwJAPxRELrPRsV",
  "key30": "3M7vvYsHb7Tgj1QW5yhCYh4r9vH4aXaTPkkP4QPNBbK6M1GMwfWwZsSte4CHSymnwprwDWph2dKC5KePQMrrw6Cc",
  "key31": "2w3mtgqPd9s85ZHZ7tXMLSdcJcNdjoZmDewS7cGP8AVUEJ2dBtgiMbNNYgDL1EtJw2bj6f96SBCEjGearEbd7jSJ",
  "key32": "3Q12C1pDjuShzjeitFyAcBi9dKw7A67wt5R4nrZciNB8WWoj7NpruMmFTVZuh9knJPuRta6RBRhezDcjq283Cj6Y",
  "key33": "5g8s2Bsi8dnLzbyLNrbm22Qepmog4i4SnmX7CTYaL4uU2kqqjt6aCwgR55U4y2Xv2CBtNsCiMRD9NkZgSJbnWQqh",
  "key34": "3pu7bGdT5dDAggX6bjDhr67mRNvHH2PSULZ6AFhdgxW3zk6t3o3Bmc5uaAW1WD96LUbPGospC8cbVAaA3d5nhNW1",
  "key35": "55crDJpbGu6UsnCR2aiBePC8LxWYmpdwcXxScTXXAWoGnPGh5KBKcamWdXwZCaZ4wVEU9oqGNLyzkSQPnYjYcYVC",
  "key36": "FEEoPCU8nYLkd77MFoGVUvvcgz7mAvHfiDNrksAi6WvWNT45fAfDhcSovYBtDBPEpe8yEuaBjHMrgKid22wzuia"
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
