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
    "4D2YR9oyUyELf2hHmd59Zpf4Yz18fVpxJk1wMxTnSjWBHxX8cPgNspqFS4wjuirZSEfNrzj3UMJHzafgYqxVRX1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pjkWwTCB5qt11XhHx9EKk8dGFCYX6aTQgKEUsGa4s3QeoroYzCix9W4fFvH3ytobMQ2R6bqt91boUQRR3z35BTq",
  "key1": "4iCiwbEPydwzph41u7y6u3n8XzmbWHWY3WD1xqcHPYHyKLvYNmAvvD2G2N4rMZ7UTgo9UCqEc2imL4nz4jC9o1e9",
  "key2": "5kckWy6wTN1v9L8NTpYngG8pMPAxr1cDdiaFoLRd2481daLfqBLwZc2VeFrCr2ir8kHm3GvsKL5VDJnp7dkFGyU9",
  "key3": "66J8XmKiHt1o5oRGWtS1nVpM9QDgvSgbYTdPVFCW3VrC8E5C62EgMxLhFhgFLvjxLC8Qh8dJ4U79BXovmK13DLAM",
  "key4": "3i3KehDj8UhkpiLnJsa2NtWKK6xkXguxPACZCoDLsp6KGiT2ExD53pinLsuzKZpe2LmsGkpRQBWQdaGGw44jGHtD",
  "key5": "5VDeoH8ugAvNoPb9V5raZLqrGxmqpetcPrAq2mFLZQ8ecBLsCch58ARbVA9Ki4HatBWkpp48i7mCwthcSBj32v5Z",
  "key6": "2cRx9zavwjh2gt6RANoABQ1sb31v8YXyvfG9rBY1aGkG5LENqSzmdqVE82SNWbeUFRFAo2cYzDNeSSJGmUkVwa26",
  "key7": "3u25TchT5gript3MaaqcTQjx9qef1YjthHMUtK7EKCHtRPXYHSJNHKTPPw1YjXsJooAs44CT5upHaLjdqJi4it19",
  "key8": "5YbWy14jtiCzbn4sTkwAB6UrVqBNvq9Ksfu96SfnxwrgXaVbuv7bTZKQCQM6wfjhTNcY8wjpmAeMQV345HWNrzaL",
  "key9": "5YDUasaGJfHLehRfBVu5TFU85H9yCxmwwjzrijBB8oQMx7rixxXXJHKWrjQ1KBEsoeE8DhWQAqnB7LLf2dxk9xBS",
  "key10": "21ttsUhFnnjawTBE6dfEaoNPB2rJq41EbJMz58X5TU6v1uvgFXcVHhPPkGzvjcjjb5NfAZXmmvDZazy8fnktxyhc",
  "key11": "yfvnN7xa7Tdh1FPT2kbWyjHpQgp5mJt8Ea1RYbxDZntNwEB4i8Yk3822ChGcNHBCpVpkqqjYDgyeUm7WTxM5WFR",
  "key12": "4p6H8hUUjgoRVdLbbSJF1bvHGS6ZRRnfrQ1LfqN9YQGshW7mJKazHGTwHoXhXSXKnuGVAfchZ9VXAZDho7BJHfXf",
  "key13": "5SSwdrAoaTB5M9PjEjCj9HntdLNpXXKctdd9foWY6ekvnmc29dZqadwDpQgP5MS8Gx81pFG9TTP6q53Vf1wb8nXC",
  "key14": "4H9vEFdkbFLiYr6JbhcmQCUvQhVwx3RHHeVmakxespWMfLtf5yAFnR6YYTdaazTjYsY5KpPagw2B6ZbnsSACjhdR",
  "key15": "3jrr7rvFHi4pDcJVfbgXBsevUBtwhS1ax9aNKTeX1LUWzvjGASZ2nzgjRKZeweXWdmxAy1gffio4gAPVAL636EPX",
  "key16": "jshx8qzUmFYSkTD4fCpr8rVaBs9vKdxRLzRhyqZmaPpk7iTKt9knFZvxkuzaRmwe7rJDwiTaADtkDJxXBxBF2LS",
  "key17": "3twFG697C3DRn4tF7cxkbuN2L96kKAVN8EDnxmHBPHPsQDTMb4aXUor2ZcVn7VFDFhn4TZq3biPVdyiA52Fx165y",
  "key18": "2MkDJe9cmRif4DujWhW2DDbUm5vwPYDeCeeBEdnkvAAyzqGsaYFVi9bJSV6GEXvuQwP3Nc4Q8TFDxuau81R9P189",
  "key19": "3HSjE7A9cudgqHsvRnJSTwRgmucpjYSsqVasqHfmDHVjX8yY8fTzDgDurdwABu82xY5c9iJkSbv5PfZpTsNGGvs2",
  "key20": "5ANgWxiMtBZxVBjkEVp17FsatVxXXETCXHz1CtbAwShYDgAHuutzKuPu6oncjgUqH31UJt9QUTFCCKpeYNRiWF8H",
  "key21": "2uWe1VCiEgVMTvnZYthbNEuxdR3eA4nFbttsmUFU7GAMPmX7tZ9pD99ozGGtM62YotAfVEW2VUpGQTK6uNBniaWt",
  "key22": "3jimoz5ZMytg7dfr6F94g5aFTjqC2iUY17o9NUjbKePXBPu5gD4zzz7Z81ViLLoX6VuoD23nfpRgkdYmPDVQxAR1",
  "key23": "42bjC2ykocYkeoUFCsoHFs2Lfxz9nVdMbU5fSEEXwqJoSuMCBMLoA6WQU3r8aTiinf15JhyL1uqa98HrFLcy8EvZ",
  "key24": "4z7DEcvjm5Hxa5NxTuoKdhWwdT4fC8Rt5XJZ1ovHz9zrRnDxex24S68LcGwJmGrAtgkrHubv8kTaUCCBuuuRCGZS",
  "key25": "63ke8JcgrMzJyaLhJ9bwvKfRtj2USLGDxeGjte4ZEgjdXySQpYLBFJXkH6VJqVg7Mfz4Mm9yujBDGJAQHszvf95R",
  "key26": "66PYnUPn4tUq5SjXvTwUzzzMLMhP2esVvT5ErF1GT7bSYChbjZ7itnCoHNv2N8tzNpfcLDHKQx9qR9WYyWMyQPkc",
  "key27": "3yawB3Lco3ZaNn4KNdcTu4YLV3bmfjwbY4HKgjej5gSNaXFWNymQxfgRzLN2pghLXqBHdYe9FhCAj4u6jcThpg8N",
  "key28": "5SsCKYC2BY2zrAGHEgCqgX4DUmzEgSfs9kyjYXywGfbMg6VT5qqVQVnB6rMqTSHoAN6cJrn5Ke9UkwZXGDFcud9k",
  "key29": "5sQSqAVBfm7wQjyJkaWWU6DT15ucb7CLhZvihWWgTEXiHdAufSHC8B6JgyyTk8sWJDvtiM87havH7poWTxtUEYt4",
  "key30": "43LTwe1bNrJGzCYnvh6di7A7M5M6bWyFgMENfu7ZCiUwRR4LDv9JZYbBzbgVevB3ZdsCyqWJAcH1Tk7oQaFdeJ1z",
  "key31": "CnYmLgJKNb9vegRFEMUtEbcrkqVQPyw7gS14pKbxeGi7kixuRPDem92TEVRpnQbqR2ixpxtPKGP4o8ShHZvus2i",
  "key32": "2zUNPAEx5ed94gv57cm2JyTVaDTuTDaFraPs7NA6BSrZeD84AH8WhPQUTmU7q7iJyGhuESWTboyn6LM3Qat7sqpw",
  "key33": "2E7CcUgo1Nh2DPuLmH8qiJcq4qZPV8w7DBCpwPp3b3a1NK8nmrRryCGH7AY2rEcbnEKXz856wGEqenQGB4Da696E",
  "key34": "3u9NAVQTnSvsDUNYakvkePFiYAPVjhQqcHWhmEYGmpjrvGkGaLqvDCbXrVmEgCEwpsAZRhdcSYiHdC4sCA1NqK3R",
  "key35": "4UXzHB83hDMc9KXBUaLYMiH7XstXCZGp2vzNksfEf5Qa1GYGgA5fsjUbcjx51RQ6E8R2HJtykd6yvj4Sa569em5R",
  "key36": "6im9igAWKEiHf2kPPZFKYrUFCohDgfW3izT8mQUGAvy9K5VUdtDQi4ykXvPBMGu5EqSXyKyCukVa5kupp5pa8a1",
  "key37": "2cZFYZS6QdkjG6b6zfM1zJGeaBpXFSWTQ9LGK8U6DkGdb9UrLETDuMFfC54NuJLTGFDAReSSRmhTbz3eKmyQvACg",
  "key38": "uyq4rVj6b7G2mCmQrz7oDW7y7EowHi2bLk4rcnhVJdnKeYmPzvwxu9qvhCgn9TsRhoK7opX7YSxWvRs9s26WdwD",
  "key39": "5akocv2ou1h4J55wmVKAhPiuJjuYQX4amsGXLesDpobkLiEEGq3VkBvgnaJdQtphfAH19WPcVWhPpdNmDA3kZZkf",
  "key40": "cmsy6pMTJ2joLScaXKJKCnKeDRBqP9D2XXvfMoi94Fxh38jdvrXkozHGJezcdHuwjdE1EoiJhpcdBHYcXomonUv",
  "key41": "4RJP4aQKdQCu7AwvFT1Y8iWeh37mQBuj26KrmzyAHHCTHQyjfgP1iXcrmRhJot44FuSoYVdTiwgzJRoh8BWaL7jg",
  "key42": "4GfD2yUPUW9r4kdMca2QocM8dF9hkNV3Q2nPTLzie4Jb8ySC5wayTfcc1P59MdJrTCFZVir2pr6t7FNZckgNKnq8",
  "key43": "8VF9oAvXUz66TVpddtUCGQiKRgz4bUwqg7ghRreb3XT8UMei9ApXnwjmsWapTvbMwNrpLAhTeEoJM9W8M6qvzzm",
  "key44": "5kCEV4qtpW8X6fNToDKmVUZvmLo614yY1VSHfsRGNH8igMJYQnHozSMk2MXAmkYNvSxtm2diTJ4bW6NNzY7CcnTW"
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
