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
    "5fP6QQtiTNWFApXeLDk8WGZ5K4fSVdBPWcUd3djk8YLKLEC3KHhkKtjq4Kk7AhBVDMTL8kMhyf2QTYgyxSAGKxym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gRMQvR4CkK4RkYvEf3XUu7W8hiyiSdQV8g2tHgAijgXqQWbKNJaUC6rWeVkD3AgnGbyF7rqCKMqvPnyCZoBDXYB",
  "key1": "v6xL2kgMypLpyRDsTKh3qavURKaXGXgHNUDdggXo8LDe1F1Ae5vj76s3u2kgo53aja9GgKS3dEBwNxoPcCe6RAy",
  "key2": "3Xo6SrmdpMeGP4CSdf8dJtgz7RzKBW2uSu4BGKS43wZPhe2F6YmSicB6L52QR3KHPQHEgidCC7esxphch79ArucH",
  "key3": "3t44fqgu2YWoG4TpzRvATdqG3LLS7F4xw7nLXKyZyZzSMuuN5Lq5sqXaHJRVqYaJwv8cde2u67vjArk9Xnu1JxTs",
  "key4": "XrbF7GCcNboFkT2PnkqkDhsqtgYjrjRoBtkGmeg8wiyaJRYJHoo5v4gap1CxNUi49MAbVjXoMBG8qZFgs8eFAMx",
  "key5": "4oAx7YN1SRXj962s2mzQ8mv6MVVvFNnQjFXpDVyxysfoHbrpevy6wm6uGbwz3Ymsr1VFaS3mui9e6wETdkiQvrvb",
  "key6": "39rfzxu8QMHpizGgAAWeczvdEtZ3Hb2jY5K8sAAvjpetYgbpJyqd1PRRoqcV6bcPJWfL2uPr5nv9GNEpudmT3B3c",
  "key7": "4VDKgrEUPcSaYwYMB8PgHKpeesxM9v5ooNSGu99YFen6ucXUEc6ouiuyk2dVfThEJpiQvX1YnS1SeUPBBg9RkjNm",
  "key8": "2ujGu7vjkeDzoaaCorLVYLBzvSBkRXhKVeWHw7SG8xEpyPyYtCSs1vHpsD6RazahJgJhwbq3sLELUAWwvC6uGkXh",
  "key9": "5JKweCPNrgz3sMWb22DqNdtQHFER8hxa3virhnqxKuRxSmkkAp8Q6BkiCaNyLkxGXGP2JwavLx12LRY9SvLpoxcd",
  "key10": "5wDi5ADVgiEhR97gQBkcmtKTgaFMByhgV3sWAkfm7XzCswc4PjADGAQQSF7ZJfnX3eiTvKbFpNZfmzxHTN8HWgPV",
  "key11": "fNi8MM8NTGxKAcvGYsYaBQJPq33SvTmkxtnfHVH4org2ZbZv6MXEFihCBDyQPtA5btFp6c325LGmabKDmHkT3a5",
  "key12": "4cpVi68LZrdjhoRr8fRAkt1gRnAcjeq21stCycZFqtQATTbdSxu2ckV14bexc2ptHFAzZJt76kXrxKNGFTBQN7Pp",
  "key13": "SL4b3FFFhHL4A9BS2yq98FEhKy8PKgATiMdQnggHbunRmAgsez4G6kUaVCPR35BD1H44iBdH6A6gVfUnSEctQZp",
  "key14": "CuTckSkxje8jvgczLXKDJ6NL5ugseD4GpS3pThN3osdYPJnHAUMM78BnmZ3CMrzDc53FtDavARvHTPy6q5Aavtx",
  "key15": "3kAbxVx2w3aRoeskiGVUHcXiqHAe5quzoBxrtcA3sfU1pMki2pkTK29z7xv3S51TZWweaMgSdJ5yudagQHX4FY9H",
  "key16": "2rbcVKsJYSmw9tWB9UKD8D9ytmUDk5QJWPMi5SE2y9jvJsq7oztcY3FHVs4kepAeWwFWUQBKSZJ71wUTQ1XpXM3W",
  "key17": "4qSxjDSaPv6i8WJRi6ao9piAhdZY19YY4sKPUQz9eBPPyFhq5PQY7VgnbYS68sts7T3t8rTmNB472BzSNFykqKaF",
  "key18": "2ANmRzB5tBA9Ex2gN6h9erWEzUMGatxvKydSw6p4WJBB8oCcrm3Ay2Ep9hp58NdCuqtwQ95XjqPFVmSeArViXBxF",
  "key19": "3WGRjHvZeiatywA71jxbgitoKD9v6AaLTcJ23ziWv3KuQK7Li7jqLrt7ajZia8oC3VJd6svR1pryYYXwtXu98w3e",
  "key20": "2vaeHPK3nwz2uD57umDGDf6L5df2pKEyE9shApbwV4u9Jaq7fVCGK9vMLkgX9xSUVEazbBrnef24HF3HEWv666jD",
  "key21": "4A9MGJEP4WTUxgQvp45e7QjtSsba4KDZy7uD3Yyxp3wQCr9tjcXZJCnYyCbrg3raKjuZnMpzbyJEsLbdM25MGLGF",
  "key22": "5vEHhd9GVq9vzqS3TyVaBSsTrCfX5FtjKaoJdtiDjxGJqEEzBiauSLtpNaBygBVpcAY7zNb1Fbf57tbyEAZpksdy",
  "key23": "4uZPD2sGFaRnH56no6CKvdAgCBq8RSXLbGH2m1xihn6MZiPLTUBSy9KepBEkhLWU4Ap3eNGm5JabBEDMTPj3A6d2",
  "key24": "595YPgutnZoQxAXNnygeWNnom5XQr1CjJZ4iUrzSXPtUDM1VaKZ1JM3LW3D7pXx1FTux2hrRs33HE9pGSq7uoDrs",
  "key25": "4knr4GJktSTg4aiga2PFMTdRf5WjTWrfLJ6CMNWBv5SF95jrZNhEJkYFuGLH2dgiHYX2rvs4gutvUHjEx1ApP3wk",
  "key26": "QWi4cpxbAkt4B9mVvYjx9UCiU7hKFYPLsyyyi6qR2NrPDv9PPbDgy3jko7XCjpo5dqSHA8njDv7Knxk3tLa26gR",
  "key27": "5gi2RdwU5DSPyHGRF1EM8hobP5TJ4pwwzWWNcbEZYJrF6dgmBUesZRi9T4kSp2cDNNQ7uEzoB9iNtVpW8WtNdvFa",
  "key28": "5Z6rA9CskgQ2jeFPBEjkNNXxvUW1JgPcxEsUbBUHAuDenR431myhzcE6VMjSMaXMJzgCPT96bzPZmaaLV9nvdi9v",
  "key29": "4DXBjrc1CLc6Ce4xz9XwwZYUDLjn6Zwb2658X51TwpxtsGiJen9MnaoFAPsCQgdpYUgZDHMR1XnaLR7UfAZqHPSm",
  "key30": "5daZuXtSSYR21M5ewvZtNhHZby8ycfKWqqS6XdYo6y8E5ko8mtuniJPfASXhSX9aX9oWZVuYHxQjDgyjb1jmRVA5",
  "key31": "4QLy8xPrdiRHeX75XmBgeKGL4SvigNh51jLLsyHX2m9nWK7CctvLTmgUYDkDhxDoNHUzvEcZsCMzbaW1z9g2aF5t",
  "key32": "4ujyYWpNPy8WEGDseyvQZPMsV4Wt2k1kQcRaGBad5WT2BfiRxMmcqJkj3QdFUCK7F6C9aR2Svgdpk4FKM8cExqNP",
  "key33": "4V23PUk9jQEAZpL88yxaSXKBtVo48YHbXiv9KSjtGwFZuXSGvwRT5bKUswtRtbqputgSbfzmopED3c9seewU4PqA",
  "key34": "5sPBgRcyyFizccx8BX1zDYqQJpd9RiHKovkJqJLwS3gQWBk6X9KDNGXsH9ZdN8o3vRxBjyxYnHkTQ3hcZ3sva9Yy",
  "key35": "4Tu8STf6jVjQcW2iuLFScwZ26N6gQ6jyhQhdMU3GahtGTkPhCviF1sMgFZnqDzv6Apce8aSsm6fq2fanuYWoaMWL",
  "key36": "2jLg3WakSGaoyD1TkMjTC4YBcdLyz3DcmNXS7jTWuai41YF9JcsNbXo1hCTz5J6fR3R3vUbkpMGCawzC5zNzg6Pg",
  "key37": "3zLZ98cWraxei8g4xJxvpu683CDafFp2foqqjyri6GKoMb7SWJ9AykWKct7NxL39DdFHuHe8iHz35kkg5iqRuhqd"
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
