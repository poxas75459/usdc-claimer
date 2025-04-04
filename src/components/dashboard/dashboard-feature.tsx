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
    "2C9awP9TzdM7CCks49mMfLjZqRpuBBm8U6uaZMZd37yAw3MpERjWUtmEQPXpK2epTbBQ5r5vt2wahwrJ1HfLdweR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "acVMgzTUUitL6KHoNewtRofdJArVGfZttDnmKfv1M4664udyHTNFjNHrL7SfzTofAz1KQHAtfKG4Xnf25SPu8Pf",
  "key1": "2LgZUQNJhRwA6at8DL8e83nzC4rNpZhqwL7p9iJaeVozBs3crf5Q6mYXP6i2HTbbCHJdMGZhPb1G9jkLZ2PdNLmR",
  "key2": "5BwrDsJNa8gx4qtAnEps1bimiAdpFcEeLUr211K96RPqF8tAqHteUEYkm6Pd9N8BwHeNBi1nLpVFkf6SAWLu8pFt",
  "key3": "TCr9hJH75k2Z33wLNmxd468UsDHFDjuyJZWyBpFpxKrc193F34Rr4Qbm5D3kLNkEwdhJiodu2TN3mUkSiMVQJUN",
  "key4": "665BuxX5cba5psDjnYDKBGZABp1qA1TCqtQininQ7S6MoM7dBJXXpv6gaevbG6K4K9jmZoky9HgCFeoCQseEf92k",
  "key5": "2pPS5wkvWCyHuGFqgnAPcpNEgvXPQtZPTV8DKxT1Aor3DkaAqndLXdyYTnsoDhbFLkU6dkSq1SNaRxbJvsjMdWSj",
  "key6": "4Va7Q8UydwzzqwEENnNWG7iznecSJgWcvCKFuV3ZES2uCNxbNpBjTZkuER7ykahaCN2nyWzMn12TfrQjgRq1FUs",
  "key7": "4Sa7BuRCndG989KeQRAaEM4FEJv2JzuFov4iKZrw9EoL1WJF69gkgYmZXzcMYBtxoqr2JjobeEWc5Ruz8qzhhkaG",
  "key8": "34qRF9dJbHTk8adWKSdt4n52UeD76X9wutu3KfWzfdgQA1K67swuCm2zyepQS8dTbnr6yjM2aiX73JH949aFxWZC",
  "key9": "cXp7mVCCuCVFTmuNSSHRpBksYjmsaXzrneJoSqvV1BZ9wGkpXN5MUcMLvdnwnpaJP5S62ZMGQUALuyF8BQjf268",
  "key10": "g8ZnhakrbW7p2PLgWbKnPJfCXb3EK1hfeo5yg4LdsqNnpxtxtPD2xe9zkGMHvhhQruUMxXUZj5RxQzYhYPUnvZv",
  "key11": "32qwLDyrdYrc1qceVXij65CbQKaWL9yfs3r2f1JQdFmgJRU6kjJozxk5jApazVmwTiE8W788SK5N2ESnj7EJWAER",
  "key12": "5tp1bok51tfb1UdiGWcMS29P31562fBBYN17gqyuQYRNnvCKWz3zgDL4wU52FTzMxhckQ9FqTkXcxBYP5BhrjYfv",
  "key13": "46H5wxcovWFCVmbzJ7uo9JAwN7QSFPS92irhtG6yXbqzbzYZpDYVAyY49sTmdAFSGwvbPgvSsj9G9xzJs1yW4QAb",
  "key14": "5BjSJLiPSVP6j7DUxrQch4dTehrCRW4rLtk8fiDi8uQ6E1zFbk8jBkvxP7KLWGExsBw88xEjC8HyeUP9AcvdRF9u",
  "key15": "5k841rihBRrAD82UohoHmeNmYbkuffkzqqyHp3T5M3PiX2jyxvnXum3gYzRDvkVpggu6U1iRFWeL2snp11MdHrGL",
  "key16": "2WDcgnVq3ULpEheUE8DBYMRMoMEuaAbbSAt9WttVbKDKS3NPLzFbBV68idaNHVxLDyzZanvxTxytmgS41eBFSned",
  "key17": "5MQ85x7mup6HcWkSKWp779Rkrb2nmprUP1DkreoyfQ8bQSjdub8HxPw3R3qoYSrtgFBnJrHFo6PnHZoLmPcAzEtS",
  "key18": "2dUiZXkxvHUhJ3dFMK8CXrjCtZRLeobFXoJVSeiPdH6mtjA1ofzHjY5d4S6J9LkhetosfnLyphbTaMFoHPzjv2ki",
  "key19": "2Pp7YUePefsuu9y3czoMDzN2B8YzPEqHSiciFjB97QoHGA7NQr15NxmvArQy7dofB6m3Stu7oJauZE7FQgcSqPhZ",
  "key20": "396UGr6eYnKU2HEHXQ9DYx717GxptUnvqT4rznDgRCeLNLZ8AdhLZn9NzdHWkwLSnxb9V7aTfEqvx2KJxqFYqEh6",
  "key21": "3nzUwCZsASkTSxHfndkfD9UazhAbVin9DL44RGyQvoFooGrX57wrRrjereoK1NCDXnmmjAQiYbqtGKsfE5e9vvir",
  "key22": "6ywkqcd6w8c44hGgypmrm9hmqM3hR7noiWfd1MuoR4dgfmpSmE84H9aRR8tPbTRGTdkR92agkuaiU3bXf9ezrrC",
  "key23": "4nphLjfJvJNFy7WbfhANDWeEGFqpRASYBYybeJru3MhuuVgtPAqDLserNk2fPETvFADPhie2jpaLEfYgdiUcaMCG",
  "key24": "2rxcW2oAuCu1s17dKR352drp4pLFE4VJqJXMbcaL5MQAMRzg1t9vNYTUw8L1JHxtvG5M3NVp6HRPPvYwPdCfMTgg",
  "key25": "4NxfT8gzuANV9pADQ94wjydFo159mW9xp9p5nGeYLAoiWiN1dUHpQnqjgmMpPmZEcb6RmFWLJn4G33Mno6Z7hRAJ",
  "key26": "3JmWBNADzj1zWC4aTbybWHKqgAQyj32uumHiRztBNCBy3W9U9V74gCb7gd4VfFjDpU71GEbNC5NQDi9KiPXftaAk",
  "key27": "3NtFjT5TwUhpNFQ9AruZ5dYXMrg9auiyWozyDXYPsBbVL29fqZQ9yxssHq2FgfcHvTYdfi397Pj6361SmjPQ65WP",
  "key28": "4cwuNaDMxSWRTJAYTfEgtAsUm2YJn3c897FaNA3NaPkfznqg6jNDof2J9Ts2QwhQZ53bVBmhNVNnBbJbpikGZeoi",
  "key29": "65qByUn77WpKkvqgNt4NcfL18k6Y3b8xwL6n3LnQJFkwcKB8RfXUEPWNGwFFK6RyiJDL2CD7m1abXXimY5LeGvL5",
  "key30": "5Ko8kgZ2xY645KWVJLRVLUGHkUnCsJVYsJZnf4GoFuDNKmnwhH1dtrJX8x2bAAmDtHWf18ABiwDrazxcGg46mJsp",
  "key31": "5G9tWV4SKJZ1R8YJ5oNHKTCLnVdmSNsSTACtBptyUDQs8kjyavt3MCFRq2oMY68NNKK4ig1vPzAntizZPhXGAc6g",
  "key32": "27nuue4DykivnURGGhmR9fH3LmocmcztyETjEphDfiWHWPqxKgr3TAqh39UvYfynYFcWJutwmJoBPAzUkoG4VPk4",
  "key33": "2wZ4a2bWYhX38NSuFB2RrKSUEBejCicgPpVLzhABRmBqz6BetTxDdWsw4GVXUbiCELVUAzEnZpN5dqhESJiV43r3",
  "key34": "4UdJ48dXUf31kTQWz9x8jESTUGNKec2wTGQYH8DRqFjFhcQn4GJDd4mEeubGpqfHf1oyr59DKenMQZbjySLKykmk",
  "key35": "4Me5Ffi1jtxueaKPVg2fcF2mdfaUQCu5438hqMjKtkBVijhxW4iiS4xXymZz6pw9YRk4FpTuuNyCkydmfhJ7KGEo",
  "key36": "3xmgRnVCcd6MYi9kRpXTTP5MV92F7yg2TmwoNZeKGujUqUvEm1NKKaL4Sg7eZ4JQEkuS49a4ndR7uitBp6BQU4Ls",
  "key37": "2cfBSXrA2DPBkD8JYkymhPE6tJSeKQdq7wDTuofumD8G3LP2BU8Bu4ijHeRA6QtXYAmRMxMy3nigvXjsV7Q4AK4j",
  "key38": "S6G6Lyk3UvpEDEEnQB1AGUvsm6eri9sZoaDT2UY3v2gCQt8x9TX2farzE7Wj6ZNYHt4vZ8VUxPV3bQ5HtnuhReT",
  "key39": "3NcC4SBHRWCMGagX97UnET2QJF1vFpwmdBidD8Btf8Bz8QuQCQXVid2wzESFsYfp2ftHpnSWWoVziNVEn1GtoX9x",
  "key40": "2QDunJjgo6cbQqNiTF361gz9emPZM5x1EmvW4WYBM1czmYYr52zXnoGa6ZGzTGV6omBFGLh6JxvaLvGCpEgrvcAT",
  "key41": "4PC8bH4yejkBgVJ6mAVwZYsE96L4kkX7mGVK9G5ELtx1v3HJsHrAo7huHjgpxpuz5tEE3SVmDkZPe6VBb89NP18V",
  "key42": "4UztMcwVwVETQHuGQsEnwCXXZD9sTDjsA6iT5jU1EYD3BQFaeuvQxhHUcbgKerREVHxWbK6ay72h1EM6w2avgCGX",
  "key43": "5v6W1AYZ9mtAXTCURLsipA9eu9Pp5bpZEmf2g5LVCCtFvQky5Q1T1BDgpFH3CBcf6SgNJ9EjkbRimpgNviw4riQ8",
  "key44": "4o8ocpWdE1fwGS4NEAtmz8Dw8pSnccHRkm9172JrwmksFnMFjuFsY9tuyjH8NkjnT93nEeLuSVU7wmgCSbQUJApv"
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
