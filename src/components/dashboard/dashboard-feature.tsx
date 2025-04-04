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
    "5gdmBzYiYEhwd3YuGh4gM599GP7baavWXTbkc2JEeg2BBJexVxizf4LkVpzcKWgdv7nWqea57UAsouJARe9T9qFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ue89sde9NCuR1tnYUBnKMfQqPoU7ik42Wm8utxV3fNtNZPbM78B7Nhz2im2y68S4BCaHAKyLJ5FGMNdLqaq4Kx",
  "key1": "5GkJ4VvyXsHNbpRGDhDXkeTeaogpwiFE4hVPC3vxw5NLfHP3o7DcCeged5M1yeRXpJz1JVsFhiZB4iYzR3su2kLZ",
  "key2": "3RoSYCTzPFS6px4EKLkd6q8yLnacqh5G7SmmfskyEsjCoXmi7NCC3Y58jwGFXsciTsuevXUd3GWdEKy6KugvMpf8",
  "key3": "4k8ekUydBKN9AHrX2USHPbun6AFC6wBBfczBFkJMUS52qxKKYrvs62X5zVo8rWqFSHYaYSUr6GvB1wHjfnDvSvsL",
  "key4": "5YhkukgeY5gdSryfkieGwxCKd2GaoKFibTu68UbdihuWhExMRCE5itTpQKdh3tb6jxP9jHntgM9tHrBwpJW9mVpG",
  "key5": "2uL3tNMAHB9nKpPBsJDVK9nPoBMv4rCEoSj8EHLG1zFjS8UhH1TK9sCUd9B5SKHE9LKQqUTvMSF2vuzCnKZ2WYXF",
  "key6": "4xjwSYqxQEXedNpfFHuNiSjTkJiFMo4zU2MW59fTVEv7bKsmoZWrqhXvGzF4TeX87Ah35BzQHSZFABnRoBdH8SRh",
  "key7": "2Md7DdNBSjuTbRBv6XrRLErvSpwmK3EQTsukRX3zBcFN3WQEoddc6bva5THNjF7fRXAZBvHPKNFg6gpdG8NU2DFC",
  "key8": "u1KPPbNo9abB4azbxSoc7ff4vRqP35P42iJvN9HQQnxKAN1WDJCKDyJbQBKmFmTWqxCfmK6jNdSQocjbj2LD3so",
  "key9": "4eSSfesufThpbuGG51AmA3XeFDhBioQDB8ZMBRra5Vb7cvEVK4rAufFETjTTrq536c8EcM5mQiSG8hCNgmA5tdiG",
  "key10": "585xMMNAe29S1p5PkhYnVfP5YmcK5JGDytStoBRsy74icbhLtSCLWB8BfrbpBYkiGGuktDNbA6K1iDBpJDSsjsuc",
  "key11": "BzkNQMyiyYtpEbi62DTi4vjBBgZgCqQLqN7WHHkqqKU4x7M9vf3sbYa62wzHitEDEdK2SLkiJQgGc5nkexQN6VZ",
  "key12": "2e94yZWAngqPj3nUNML1zgYZdzJpBMsdEk4QviRxAZ9fSwTUkupkbwLcDec2bt6SUw9Xe18w3DGarNWXb5QjPTRA",
  "key13": "kuEZJZfQ5RB9ATRi7VAkbW2JYRtatbmmvVTtsSbkRzopNSGZrMA5XNLYhw2v9XVGfwbjF14RQzyQ92wEFFCJF2b",
  "key14": "2Aw3geA3z5jZjk6XRmA1nyev5KumCFHiGeXkxXDDu7iijo27RLenxMiRtc9v1ctZyqJ1bmxfn9smxr9EaUh7WkKD",
  "key15": "5ef7yWzhu3o3FQxewBeSTRjokCPF7zcvcnyyadvsw3F4TaEGk6pzwDz9PCuM7htLXkML1oMgnhrB1hWJxcebrnSp",
  "key16": "2qijQX3GUgqvdrMEdVNzj6E5XYgRnoaNrmmSPdMUQqBFTpkCZi3JEC2Afne8AAjo4hp3cvruUU5vS1NPMukC2tS3",
  "key17": "3F19su1oeERKRy7WopsiHBXToRY98Lh94Uoq2Peus5XbFpwsQz9aJZMuFW5rNShWiyqoZpfoBxKF7RbkzkVoFbuS",
  "key18": "4NAktb8oThqEWyCXbvXJeHojYPzieVPmnM2Jk7fSYG4YSXPFEgguSdQhp3NqvTsq85QLYkhhUjVrG3pXD6QEQYDC",
  "key19": "iwQhcBhJPVjU96oEtzamt4tbyRgf7H2CpbEfCmqp26aRjvcYVyMfdam6t5XAQygF9L36Vo3Vq5JLaZnx5Sf1oN1",
  "key20": "2XhtCkHRmEjHA1RJFH7nDsSdezqzNpWeKemTwNq72vLUUNqcb3Xa7p7Q12GM8iZDujYigZg81jnxvhpqGjzaQVxj",
  "key21": "3D1bVYYcroQGLvmRzJijhQEaebQjF4nCoj2Tq2uogUrYB4S8e6fuq8kNaFgm2yd2ZZmdcdta1QJb3UPSzqPc7Ga1",
  "key22": "4npJbptd1StpZ9FBmSuTWzrr836Eex4Yg5Fu5TZ7m9ftcSeeKxGm7BHzUwPiCfvJwdGYupXuZr3xzfduaQ4mGnws",
  "key23": "53EpwNdxhxwxDwSXmV4XZtesM1pPFQVJJx5mhqMYboQY7tw499XdMqDFdqjQkPMG9c4CQ3E8MZN7SDwXCrSLRwpL",
  "key24": "4ZCZhnWS4XJD3fFdavBb9xEM5epS1hVL1P6B5q42tBW6S14k1SHLLAUUBGS7iLcNUYSbvRKZ9ciSJ2KFfP7Nce4Q",
  "key25": "4sGSgL9zezozsrsSmQ5Hew4wCY5PLuVyNb9JE4etPjQXpy7h3gw8DdBcZgU5aiCF4ygzKwsQyhTr1dPbMayHjzoL",
  "key26": "5DsZPJBiLqNaxF4A6yFucrVKDC8qgkhZSoEBe6Zjwssxhok1Qd6ZfFFDk854aYZ8Chfft4RqaWyHxaGBeDMhLwU4",
  "key27": "2sQVp9fobfgjugdwjDsjtTBPDHyLJWCPkX8MXN9XVUqxmFBrv8CkPjfWgiGVS8vRL6rmHEqGwNRTEvi3VQQK5qhb",
  "key28": "2LYT2GJa5potMf7j8Gztrb62x1YV5Gq3ra5oT4Xcgj2NeNFuEiEA3n5BsfMtmfi4LyaJZ58kXXbudJxmdsnd9SkN",
  "key29": "5sjDbfrrj8czLCqZPeVZGNJz7u4BM2GcMGLTW5DXBDHQGP1g7ykHfg9K7H9mZavn9JVfN5LXzKUA43GQzGm3rQUJ",
  "key30": "qQAHSKGQR5TNRY2u2XzZBvWV2mdqPNNDmMk52maH6fVhpVnCbefkn9y2UuBYFAky9oGgd1XfM86ZHqETCjTCP91",
  "key31": "2ghBiqtUfexKtCctaigaoLfRwJyg1ETyH8Vso1byZjifZkx82i6nbLnDQ1kEFdnFKQznLu58WwPFXeenC1DM3Sy5",
  "key32": "2L9wYP9wSXRwm2c3Rq3UWSoP55J9wNHMJdXjeLK8T5gnCcS9Mu2rvnin24jq6PRRXuzGa6VvS6yEKv6umk92KaS5",
  "key33": "3nU3LqmE244JCKiq5KuidYu21mshSL7jAJzPPzuuDysRGiNfz5ZGTEpHBWv9UyqhCvNUBsE9DnvH86Bx7tj9jMKZ",
  "key34": "4ocgxCyeswsSfNNeXR5hykxp8LUPWqd7WCdy8VzDD7MbkDACwcASj2ia7L7qGZZL17rcXEmsSwjpwJumiz983hRG",
  "key35": "HxW3wnJSUtcD9naiwimPTzpUTBpzdZ1NW1rnJEEi3Y1kE1SRbKtfJpyyFCmbwi5dyM3qxAeTDHGpCEY2x8cX37K",
  "key36": "4JnRafx9NjC8HdQJdEseYjnnxtwtirPQA4nPET2hghBjZW5NqWa6YfmBWkx3JVMQKhyuJJB9Ucfqg7uwReHx2VMs",
  "key37": "5UkbsxExLMrWETme97UtbauZJGC4E6DqWXKPvUspjfxHJTMuLoifJ936UTLKtq9v6sDe9JLafqTYuwaJqFY1idZa",
  "key38": "5VHEoyfLbbhVmu9SZqxAjBF4iPRMSrLjnpRVvzTanEtubA4mCjxF63C7buJWQK1XkqmMW8reihPfRzry3Wq3cyUq",
  "key39": "27cbrpf8hdEF28QckbdnwcsnFM5nBqxvWrNZitn36PHUkPaBukHtRjSQWB7NmAcn2GBrqhEYyFftfpJkc7z7NK9K"
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
