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
    "43jrfpi7Je1gPUWt7JXFeLjbjgGzfUHPtL6dGudLaRbPqjtoGYMemtdhoQwuLgCtXjdpg6SgzkqkcQue6Z66BCyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GCWyRQnGjte14rZBaj2ywrpzRAC3nk72vbovr9zDRDa8KhG2sTy9BwxVWcDQ8rkNdcBDbuWiJtmF3uYH18Zdq2d",
  "key1": "255GFr7BgKVsirMA2gCMthGEAo7QNztw7YD7ufSYZnJeg1r9Vip6Fz86VVMqaxE4AuDWzPYSbSSskQJqEsLTYoED",
  "key2": "QoFfWsScM86VUbvRSaiFUSoSBi97Rcc7d8uFqRcTvmCEkvbTgMZhQ2Zzn4wBi6jRf1KmnGdFKgPSe4GNRDjserw",
  "key3": "3umRQ7HWV5aBVQN5gM1TTiPSqUVZWEWWbC7GCiWsxXF7mWmZKT6DP2KV5NMMui8bUNxjB5uHpdBT6y5uPfZWp6FN",
  "key4": "xdJVUq3Y5CN293nBamefPDXf8FZHqoPYe8Mx7eAzsZJ1ksgizLFhLiWM5orV4YgLnUgUJSk3hWgJVJ5uyHRi2Va",
  "key5": "5EvjWwYkpUPgKDGUWMFfa2zxwewVaPSgfgEhYNuPijd434Ucarb22XZs8uTr5txkRukriMMoT48q9JSvf7qmcXUa",
  "key6": "5MjjibpUtt2GvzUEKgpwj4t8iERtUMBFduSSMdGuVRcZe6MMjssCAhiiNCLHYkCP5bwMxgkNF2nse1nY5ZQQ8ifN",
  "key7": "2fKVNCrEefzSF9HKDhbBkTD8pSS3V75sJiRYgg4CXrj8eryQfC68vUbzU5EtGot11YEjHQbuyf3ewkiDiuyyoBzH",
  "key8": "2mNxYdQPGQne78dyLbkJJ3wHk6gCsNPXgxXtkGp2NUhcRRPXzQyke2vGnVYZ888SXranVXR5DoQm1K9NG9m9rJeE",
  "key9": "34Cks7i8VjdsWic2xxBdwbSsSp4AqEqHt38HzgqbW9m9zm5QfNawYAqUG29mgeZfsM5RXCLZp7ddFCkYaiKKfoEX",
  "key10": "5do67HMP9jqnj4XmNBsaErUGsLYHAgU6F4MokwgrT4NSW2P5fUG19cvD3jqhFGE5PJ6U6oSeUkm3T7DGM23aoJ9z",
  "key11": "33Ug2FjzGSvZHeZFVKePuLzg8FYHD7GZ8111PgErvQDUCNUMYMPFkjUkKFFXnpQP6TLZJfQoerH8zZTcfHEy91wC",
  "key12": "m2eH1E4D356Y3JQuoGxJcFFdXx7dwrw2FanaWrVFb4eYBXdzoTcUjvSjrqChWPq2RDakFzhc2h3TZA7TqXwdEFn",
  "key13": "oMFEWncBSsKnRbPDKXzo9Nzb7rMV9vG5dV94rwDx9PjPfRZet54Sc5S5k29yuEaVoVKikTf5gMHiAmVvTruqVNz",
  "key14": "4gCBHtZvZcKGXenBB7vurn9AeJKT7asi8ctX93GUpber8RGZY8Px7X7oW3E9udMd6sF6yM9WeXLevjQ6RhwBZSSF",
  "key15": "3TL1DDvxmJCNdLYQbwP5PLcrGDaf9f7n1pxGeRoW7pZkGafKPmNGf917Wd9bffuCpfMHUPfDWL8ACaktoQtSjNPG",
  "key16": "5NGyskkRHAT1d46XGizx9oaSz9Fvj6axXeipmsJiN1m76c4u3y7KhszCDBmfEA4FFyNS6ZSCXwH7RCb1XxNAPyvm",
  "key17": "3mzocSwRGPtoqTaGdgUtDuhaAKc82qXunKSVjcZrTAbccLzmCiiTmtkEBUh6H3C1DcXDpym5amSrzyfFsmUAeWzs",
  "key18": "4aATkaAoncG6VCsKNv58GXxfvKEidaeGGLckr4EAJjN9BY1JSPWVeHw28gLVi6oMWAq7dUDVGJweeaToyuukSrzN",
  "key19": "216ehqoZPy7iym6RikbJKP2kFbERWbbxmgq4mZ1WaxGZ9wP6ow1goJVSs8SoTjK2xY6yPasyBaHDRzBxqNyohJ56",
  "key20": "65meevsN6HbDgHBHeGK51fBDfCueWD2FKVy3EzfGeFtPEH99yEi434aprY2dSnbrhnpXTVmzsrfztrNc5FiSCvjh",
  "key21": "5tvyVVMq5UEjpBUVTCTrMtzuLxhPPUrMQHfZeCiZmbHHC1RNsseUWF7jyS4ra6bwdF8LGqnHhmGHkxQPAaaFsk7G",
  "key22": "4aQLPMKhetVqYqX4usbzk81k37jAcZ3axKQ1hoAnR2zYJZbBiGNShtyuxALYT4pMXjGURzuSN6RgDjZy8zNC3iqK",
  "key23": "3WDNHhtjyGkBvRiKwbMdJWQaErhna2YQ5qpQN8TVnKDEaiWMJdaQrH3Q9gcsDSncHqEwwQ6wBsjJBWBX5xFL8EcE",
  "key24": "5XHo6ZkcpyktmzipWQ3V479WaqrzjxoD7Lo5UQURXD3nQcmCcGL4UTRrwAJnsXdARZvFQYogCv1ZiiAVKV1SK46K",
  "key25": "5zrdSADuFGA31iaBwNx7SFj6gxspAogBXeQoZUB5tDyCwJq93qEfYhTgws5wWnWLgnQWjzPuXtNZfjaKJBgAnuRE",
  "key26": "2dC6GChqGWYexTf2293WYyyZK3nQ3y6WfA28nWZUTvsCseUQgQJXHKVMU1zCBKuLF2i4jHHTFKFfHNhmHTMt3p8",
  "key27": "o8wMEueKeWLLsNbLS8U7ZwjjCyTmBRfSWzeZYJXcQ9uYyGx5fmEWAchMfjJG61taAbmfFc1gnMz7X26sy1myGpo",
  "key28": "5vaWBjDwPE1WspuQGw2KqozygByCB9Ep4djzCabYEMoctR1G7DBWNKVv2TamdnMQ1HFE1FfRMG396z8g6UYnZdkN",
  "key29": "5HwazoqPE11G2sEfaVSUiei5TxRmBhv8dvgHC6HMJmyiUrpc45GrKnrHKz3GArURkvDjGuV3KH5mdvMLQvqWnNt1",
  "key30": "arpVmdEjLd7WpgzvHxbtv9gAs6zo1NPnUhaQDfcCHAeQr7YKwqoyoTTk99z8YMspKu8BCMQ4JtcireodF4rRQyw",
  "key31": "4nqvJHAk7tC4uHWJUWNJxuTbviq44USwVBpha2BXFJm5FFJK5NiCiBd129ADMwcRmj6DREECUeS78dPiq4QbqAvD",
  "key32": "3Zzua4MDEA6tvtmSRGbs1q93fwbCVciGNQ33H4eao9HpiyeknGRRnj734kwqEGAAYkR2GPw88tVc7HDo1SkX3jLw",
  "key33": "4oLM5EbbDx8GoQ7j9w1wDnaZ2o47Mq8o21Syi9WdJNaaG6XtB1byBqZwpohtbDuh37kQYUtyCk9VrY5jhXZGdped",
  "key34": "61H8bCNf7mFGspowrtLaBS7nf2guoGP3ka83aCcg7PwjknMQN5Fix5EEbSPGPez2YYyHPqojgWNeXwX4Y9XAPa3f",
  "key35": "3ccdJD9M97eHQGuuh4i1DRsKHc4RRkZ3jZw6sKxTg6Ef4zQ4mBLa5zHvmSUHU9BxnNcmqoQ5okdswx2Vrh7LgLpf",
  "key36": "4tQpfd2E2mzPJqo5KvEz3TcMbW1CqhZFiQEYtQqiVKHK1ZENLNvB35KxdBQsMzkhqN4bj2cKTxVqtFLGCifZUczn",
  "key37": "3apm3vkCsjkw4JDHqH3Jx1ucKkJJw81LtuuAkcHNLSsk9Vqrpgg1GpfxGzLPvu1qLd1d2hWTe5RV4QWYGSkkcsK4",
  "key38": "2LPtRQ5rfUS1yjRJCdyNaWNZ7Nze95cVCBDLbRdmPwWY7kAGo8jcURR4rfr9duUigG54hUeuJRZhmCkgBNibG7G",
  "key39": "sW8PxzbsGVzCyr4QBDWMuzpqjSAb7L6CV8Fz9bywP8rmJUeuruhsJM3bxVAveZRwexZraaAR6CjGNu1V6NLZCK4",
  "key40": "3oAmt6AGk4GESb2s4KBTzpVd4APj6QymQDpHtxHNCRrpftpv3tDDJngAySuu4n2BbnADe1H17WgjmNSuyS1qfnF2",
  "key41": "3rNfRPy9sBrHEA1hE8dpbuqjxddvZdhz3jBxKUWbeq8hkZirSXJGdD3Vbvzi2mBnZXasUDcnJbysmoEWcVHc7tdh"
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
