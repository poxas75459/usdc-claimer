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
    "3dfpMuF8k6H5gbSgN9hoofdcHBuGPLeUZ1WraxUcXbHZaK7gnsz1LNZkjwojwPXrQghiwSwdNs1F2xWSbhvNcykk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "123dqC5PWdTt1FbopK2tr2Yfzt1QbMX8rUCZvW88QZSSVcCpn4VUDNAbE8LCNcBJyqTkzKiYHZ35CWyUqCfoAJwh",
  "key1": "4mv1bH4yQPq7p3vJwVQzwuWMjt3xn41mErRA4M78P3udLEtbcdpLpqA7dQpQXgCZcKkmcRzp8yAEHDFTKkBh3rNT",
  "key2": "xDPDeho7wBqqQw3VFc6oqAmc2qdWTMDNM5yMYbGB3GJ8zwpWBUNd1VjfeRrHNUQ2rphPX6xbhcQezfkWXtDbXxe",
  "key3": "2xiRmNJKbZe67MduHE4zk8rQMwPaoeyLiLYm4giQCuDx7pWQHakB8nTwzNbXw3GJDYC1Nbdrvn3KVGT4UkC2A5uc",
  "key4": "4vT6c3wBRMTi7xCyK8MWYjp2YJ1ydvFNzH1voSHvZioN4kodyC9h8cuArMck9U1MP8gtNfCkMjwcFF9qfqS6YmmG",
  "key5": "AyXncQzjTTevGWe6BGuxs6eErbohAHLbLres5MbHHFz5GHKt5amHPxR2ykjs4rChwcxBC4Zjjx9sxttwKy2imgZ",
  "key6": "5x94CJy26U63qV3pmiRLD8FtEiEvmyx4gxy8XV9vNpcj4VhXG46xbrAuU49oekEmHgDhoj6VVzVv59du7MB9DHUA",
  "key7": "5Nxdx69xhyrrA6qxY9dbjwkU7Ukqmdv64pFLztT8ZmFtjovUSker2kcTSVPaCeJcGQMi8yVW8zwVpJAPu998aPhC",
  "key8": "2fNbxjjZ3VDh9PLYp4LGvVoE3uHzhHAJFjoZ6NaKTkkaA4fvN6dcXTnwPLsphrftBSjyDxrQBRy2N9bxwAeAMdXc",
  "key9": "65R4jLPSjiTHh6nPujwfB5ontxinAt4eEPf1HoMvEFTvGAYQYDmge31W7veehH9L5Tfn7PqhW7wMfyfgvGi11HqK",
  "key10": "4T7DHnxQM4qBfufhjuFYahwETwFuSJ7u1BAdSWA3hbQQsk4iEekkDczXeECKSouZHFtyhgndAzuc1JBa5RfxF8kj",
  "key11": "5bnJei1kuA9cjATbHwaPNxmSp4RGpReWwJrqkkTGrjjACJkoFj64XZnkffcVbvFrhwUiw79Ee18byJHDcDozGdDt",
  "key12": "ghQHietBzXKvwsDTP3bJnfWxLeqsPm4NtDaaRGGn3p2nXBkv6dFXw5frmg5nqydexYeTgfqYFwL154qnjx2sc5D",
  "key13": "4dYjPKvEd6zEmcHSmtzDe6yAAgsKFxhXGKoanb5skKyZu41vgPk3Lv1taW14Ram1uwCNnuGb2nPRCUiZCSkZRhdC",
  "key14": "3KL5XiDCvmdehuazvcFMegskFY4JwRUZSZT3mPALaFzoRbK2Qi3zLMWqTqND1WnjQWC5CcyrJGP5S8A9sEJmRbmv",
  "key15": "5f3Rj6LJkctAeWpczzrMqfR1i4WtQ5k6ZFsB3iJgvUyFZKDXPdXDkbjXicPTjR4MT4hvq1jt49P6pW9KnA61vVN1",
  "key16": "3sVp62ZpuhncpSWN4cDjJPiPriQX7sBRbcryif9Twrw1cxSb7ezQY2nggaW5WZ7SsNB12MJ21fczEqmCHs37uSz",
  "key17": "48DZzqRyJuVk9fiP8wV2cA97Ehvyw3S27SaASNSyHQ5XqCaSSRtPnaQxENJE3HND7oVHSCDd2jdxwyLejNcuW6Ye",
  "key18": "5ui5HTb7yjDgG94N6Zgoc2SwM95HTvPDYRhbUvHGNZmJqYRgoYrzzNmeH86DqXEiaY2AhPZa3Wp4877sXirCE7wi",
  "key19": "EnP5ki3nEXXTr5eiQPxfsNkgun38zgETcG5VpySFxSwdFmTeshGMy3j9wbcvrmX537jrPwW5mj5wHTfFWD43xwR",
  "key20": "3thdMShAuFDJ8Ce5LzkYWouM8xuWH7qpr2m8fJLUGgBrSe1hoNDAFcLqsYUTphddPgmgU7aidJjAnJ3BYBZTroAW",
  "key21": "41x2hyLkXztZKCQagMLi5NeL8iJV5m26Y8ehEEJkrrm9J3VeCwWpqUKwRAnu8dhbthT1gtqkj9ojU15rftdqRCUc",
  "key22": "2h9MXuy44cV9SLbahy8FD5WSzS3se7fwnTqdx1afjSUjTj6U1zfKv1gqkkXcbG1mYA1Ak7D59GdF4xFtxUcnFJLK",
  "key23": "FThTJDGtgm14eLkYiwYWQLGTTdyPJHKR6Khw1irQhDbgUFgvbKfBPaJPzP2DLLAJDSaH4nJUQG7vbYUH6dMt4oD",
  "key24": "3knTW67t1QWuXucSh5E2ifb1wq2xq2GX1Kx8Ypy6Kxcaja3DPKCrQDWbNPngtBDEaUaMFZBSJFRK8KSZvisCig27",
  "key25": "5EozrEh3T8qQ8yjP6thBEAVpZZepo5UsyGGxFDnEdp1ngsH64MGM9yg3at2i1JVbAwujY7KjRjr1Q4kiCNBuhGEE",
  "key26": "5sbcgwxxvmrzLJcL1BkVYWRX5SebEbqAiQEsGFXp76rhD6r3rp37giEtk6FKv2EaD4Qo3Bmq86RGDPYn2pgbS7iS",
  "key27": "3ryiQwo12SUzKnVLvyae1o17VfQm6xon2yrVecU9c2Rgwm1EjVd18RDNCmtmb5a6oyoUAcAC5FWSE4Na7S1Dqiso",
  "key28": "RN7z3ng7NdCr3CZ81KET2ta9mF19oV3xreY28UvS8hiLjVxtNvwhmABcF4EawZs7xjVMvNAtikvSac1J998929X",
  "key29": "3bPE5pWj7kNFpqJpAjtCR6Ccrb2UK6PNhk7wPAmtD8aFNFg7P5mn2Sr56JkFsGyNhuJ91jzPq7C24P9iXS7jBrp1",
  "key30": "4sPCje5c2HD1W8xKgYnM4nCuFMz6siiSPqX8vGbcNXbxortYhbBwAGbpba5fFaqDbLSSu1yJfxFQMD1ANytiC7t4",
  "key31": "dfxYRfE3MzjcCFKktNaaRyALoQhsgdVtaiNyTULwYA2ntJVx8Haor8zfKuHEQXwCZthxiVZSHoiSyEp9soJcPwG",
  "key32": "3gbaHvW2u3qxvcK7F7xYXQBvH3mraTZzRAttXmah6NKa9MxCxW4J7qMJxxwwvcSHwfBrMMJa2QKWoRhAutNFhwdu",
  "key33": "5sdmUaaWvhQ8oPzLdsVxN4BaQeacw5qPQLT7iEYvjG6TY27qKGeo6QcxZfWp9NtoqHyCHBBgmTJaiBGAFqvi8ovm",
  "key34": "GZeDH3KDLw8qSXTaAsnQPEaHVQpSbr5STUimTmnYfaS1pdcQijPqgxqoBNKkW8s8yKKr9XUabPqNTJddCSsD1yj",
  "key35": "3gARwm7zxGxiRapJhsyxoDyxKGUZwJSsBJM2SxAxakNYpuwqTHTMmAekQET9dpC2U1YumRgktmqiuUWMc42uGZhf",
  "key36": "3zBrWrywv7zNVy3a4ffgo8xRCygqFwFT8x8nyPxRnKnwd2E9kFmHVQMGRx92aREqn97nviccXwjDusg8hYbiX5Ua",
  "key37": "5A26aKdeSnLbsCnGtQhEXoZPxTGC7yukWiceU1FA7w7xrXwmekQdVPpnF8F3HMrPCKLxDrnfLM6qEJNNK7bsgtaf",
  "key38": "6fNeEmnYGU2pmq83KedBsmoCci5SY1eCfqVJj8gw9jnWoUiahZdZPtFvzBfk9B5YU9QKNKvgq3CjhakeD9PmrzK",
  "key39": "3rxpg2GrE6fCBo2vqTSzAtc5u8y2XvsQXrtx3KMT4BsX9z2RrafwoE9cTc9gTbQko2y2m6sCwBQruSZjstSnVU1c",
  "key40": "LVfKR6u6Ax8UBJ6TLvAuKT2P74beBbHFpnYHmpzczX5ZAD286hDiEEMcw5qWzfBXcmXW9c1y6owpp4swvHswrP6",
  "key41": "ZnLbx9coQaQJ94fAnsHwcz7cDLjBYefo1CR8JKH8KgEbsYqyQDifSwwCwXpD9qRWFr5oSWRbuT6DfwUm2eSQ3j6",
  "key42": "2mQmBdMR8XjfJ4q8qw5qvDZcRbFzw85dfspvRvehijmq3Jn2jAZUyjYrpjXVg5Vw9VRNuP73QcVRN3oYH7vyKnmb",
  "key43": "4B8ZdXBpkgf3CsmNqZ94LcGZAtjYUtz1Q8kQ41pCqBZzawnshYD4xFSMBymeCzHEu5o2W1xk3CxnJf6GwdG3pb9U",
  "key44": "2Mvs48AVC19RVhhJ5CXo5ThPQV46LbDgqix8fAp1CZiJMY1FRCdvDMHkzQbLKfGvDM4wiJPZBKEraD6gzUvPz3mN",
  "key45": "2scf7CjVfnBw6xt2LMNhAyoiKrXpSoJtzMFkMCY6NWYXTXUes5MqMm96WpR8xVoLiidCs1WnQUcooPgGA8g7t6bj",
  "key46": "36PcjEs6XzbV9tT3yB5SeXLNYkwMZgbKXzTTqD8sYJte1Rdrp1rduJoXbE6TVLqNrXGbMFFuXzFxuxT4QVYQgC6h",
  "key47": "2PDaBEU9XRbxat6D3oNrHz8eXGhJetK3CgiqyGJnDTTwG72SsE9hqh7wFNDoMaTtaxf2Uh3U7uUgx9hq128bSafv"
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
