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
    "2BPAdxpaoBKkCSj4mNDW8oZWXkmMP6U23QyMtkFzi9rnK7x1DjcdvEU9Wt7UwLHkKv7TitwT6SB8sein2yPAvZNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cCE8LYkXijm8uT4oZY9Wk1MRYkuKygtVK9hVFpyvptqoy1dCUgGLsAoLSVRyS88d4P6LbDLG4t3vGBCWP5RKkie",
  "key1": "3tqeqtuYieYio3mV7kT96Xzv7JiQpTebDeEzBNYSvjXqvep4nebGiYjqGQyRBJUvCamBSYaYpQij3yUfG5dXffe4",
  "key2": "5GpgPU6efnjN1J7oNLM747VpCWS1Df7NW5LnbNzrLosyVvrcyoR1Tre58K1mopodz3wzhRRNa8Zh4q3tzcxZ3kTH",
  "key3": "4KG3pNwZkUsewoxmVftano1oks9258SyxfQBJiZXVm12CiEPofQjmu8cNMTJ64g7vGSZVZJpXNkhwdtmnPDJ1Bdv",
  "key4": "5hGoT6rhvHTkyTMzEZogzPS8CvitVdUQCcuwWcDm7PXXV6pJbt8SGnT8R3Yjko8fDrSDfwQXofpWj4HvvKViRRfj",
  "key5": "3Xj5AprhRqFf7dfFhi56x3aTQnwrKq9W5jzte9dG2jSauMMUQjWVocYAyQDDZsAcs4on7DpSjCgyPVZnJdEV7ZS7",
  "key6": "3m9LqdNQQ6kFeM6YSkG1FWPva9byu9caPDLQaWbnKGmBkXkxsNFQToaXyAmPHFjHKsfuwDvNZkqX4q3Pu1saUeb7",
  "key7": "A3pHYA2EWDMiqS9ZWzVCMxyZEcFsUAQuRBRAqm8tTqeHyjtW2k1W1MzeihfjJrCngnzKYW22msUDuxbNwdV6jbP",
  "key8": "3Xyx9XEDvkxnYFimUrg6b7sJR8fsD3HrVgcJ9Kbjo4J51f6ciA6bHgyKyoe6qFLb1g1Xb7Wn3Ucd3MAEKX1A2sD4",
  "key9": "3FEtGdG2FtA76Gc1zUT7tcQy4XRyrghH5BeFp2y4DhTaLJUSJnk3W1ccep3zUFYtcKun3k6mkuupj8FtmcPz3RKP",
  "key10": "4JqhcuC2yTUGCjSrjbyAnLALwpw99pZLZrGxa4AYtG86YwrtKKuT9FLzxaw7gioRQBUtCE6i3fxQS3r6W2eyWi5b",
  "key11": "4d6Mi6HGCZKaakqiy8qYLxT6KM5potbXNwgHXUBva3J246dhWsfoPFMqA6tMHCka5WWZkHomUMHfg3Ub8dCmGkUV",
  "key12": "4S1Yp9WA4k456aMtjgDbqjUv9zxaswhh2oJ5vqGSzCtTwaReYMmpUs3BGkoeRQEgwjQywkPDbggcheodYMv8S61q",
  "key13": "o1yHFhGqbRuLuYEUKJNGTYwTGLFdt5BSCTnE1HDX2VY7yd69FSsYaVeXtBUEM1moT1KcjDgmsdrpygxkGV5Rsmk",
  "key14": "4KcgMjRFNDSLTbWH2qguTDjAZquJ3gBXAj2afoEiESxdnnSTuyZCCcayU1tq3JooW1n6MQj56X8Ew3pViHtWMGH6",
  "key15": "3vZWjxiYVYF1HWN5hrqrrEd1gcCx99BUUpz7novrZGWQW5NKsaLWHyUTE53RR3FXoWiGdbqbQkB4dzSJ6U1PyJC6",
  "key16": "5tsL6bHAwppqbS9feuhZMMJexMjRcYfixZkj3gZgzfWG9Eq8j61aZtD1P1mT8h3akZZ6J2XFo3zYPf5vGsj2SFrG",
  "key17": "UvyFfJZ3QkqGAe935TNgZ7kpbgZK7h7gpVDc71wgYPZKxXicSQPQ8Dp91wkbco7AYSxWxBDGCPEAVtxMb7P5zcT",
  "key18": "4qfPCNRpWEeJBxLXWjMghv3YjY58szFWXWsJyrErNJD1vk9Ez39vE6aPpVw8FK44YrV4CKpmd8A3giqaxK5oZtKw",
  "key19": "3Ha6N1Qa4fYRjqmpXYvxcpYsArWsFVTTPNhzJR4BzD6TZuCVaRmgxT1wbBDYJeeLSzEBe9D39q67ghWzf2RBRyGp",
  "key20": "4jwviSn1swRGuUD1MtS8X2zPnSUvUq9EdWdoHRRfZdcycJZhgcu9VSPcWZqn36BwXqTNuBu7qqFr4jc38txjuJxT",
  "key21": "3jN51RXwBNvyzmDP7t1hnevik938JUjpN48qJ4VcafFcbQATPChitFEVV5Z9znK8dJvX45aiiDvdivvwjhKMbRnD",
  "key22": "TJYv78XVHetDCVZHvkePRtUqek2TcVTLuktoRqFqpq4FbTpLCdkzy82QToPWUCAM8Ygz4HGaecoUPGJ9FWioRxs",
  "key23": "uQDJ1CSZooA8zWmLNkptdWLuv2LbADR8cg3LSCFc43Wcbo9VqHYwnCuonVQwrC278dC1aaebJywo4D4oG2Ny4Bs",
  "key24": "3mMyaW5FX2N34P9do2DBopc6yGGR1PLJcpJPtczu81E2B98QdKVvy5BxWBQBTWqoNNSKP23xaTBn2CKHvL43wscb",
  "key25": "5eKepv9mm1XpEXfebAvxdrgRWehHk4VFYDzbeA2ekYQutkZMSxkqeeDyBnvRCp4jkeVa4CPgDCezGcv9u5EoeEpW",
  "key26": "47J27LXTeFL1A2vCXFUFwMq7YNQK2nrUbP5Mn3qLFtanp1BsE87mHVE4xS1to7gAEr3CNrnLs4jQoW3dQh9fCHuo",
  "key27": "5Lmb75CXprdtGX5VAHQycUVURKuEcahD8gdy9DMr7xdxmwSr7mf6ACXTvYW3Xg8499LF3FDu1NpbftLceqUxMGJn",
  "key28": "5gLHDZsCVwk49wN3YdjePynBFCmesjSxrcuKnP3FM676jxpVUbg5MGPjS3odAa4KrMHmQ6VLfkEtLX73TH2jBjfW",
  "key29": "2EiBczQdT2uFuKbS7n4X3osqpoJ91naWXTzpigJn9CZ9Ma5kWWPv8BqKMfu8nTnHAc1HE8AHUneaCLCgR6AsR87B",
  "key30": "ckiqh3XfJ4wCs2RUYEhf5ASo7X37DeVeDahJzAuZ4hiyYjm3KGQnHoJYbXEYqcWsB4wQHRnVggWtJSQcaYtxyEU",
  "key31": "38DC9qHYddg9yv45daebqQZ3x3WPW8E4TCpnGkrfovk5vVxfUnT8FrQcfHkLt8Ur75pcMGxGs78moRAv3T71in3f",
  "key32": "3Di3SLASYqdQRGvoyVCwB9VhiDBLuJNRjY6kkXYGwrZWqxt8eUYsSPoisjdDd7Ym9pee5sU3C9HaK2Ba3wVb1o39",
  "key33": "nq2hcWjiSEyitCwpwaLxXj2J7MWUm6ZprFgxjRynxEzVPk6dMFupwZ15MNhvs65obD88ctc9mkyn88YJhcg6Jfp",
  "key34": "pikyDXA8NLDSvkUhenHcaFP28zLjsLMozY3dVVaXvrKnPQLyee9uKazwyA2TzPDKwWiWi9onmUUXHhwjaPzXjEh",
  "key35": "oxcpVCwXdMJfstCEnzunhxv5nkn439Z81iJAmpCtavm6GzyDicAMh5AdKYukP6EVWbSMZfFM33vCUZBkQxLDh2J",
  "key36": "2qAu3qap1s8CmXZYG5QGmoo42cbZngjoTYysGANK3twS6czXfo2F1h2c5nWTemz5n9Zi27far4DVUz7PfoVmrV8y",
  "key37": "4My9W36jiKodjNLrEHiBJ78R8pm2uHZjikZ49wn6dcRNi4ae4VAvm4YuG3krWro7QuWmHiwEUvYm6dX92a1ZgbTr",
  "key38": "3iRySJn1VpwNbGAJKusgZhgJVvzdV7sefbbLBz9eeczHZijew6c6XEXmF34vR7wy1Hr83KC7FKWE5M78v7SvUh1P",
  "key39": "3WhpN7Ee7APtp1WkrqbRNHd5A4koCtWLBcvfDjejQbJPSjXHFYHyxxAngKG1mrz7yVwmnFnJRCW4TgAfgtNkSVc9",
  "key40": "sv9TvkE86HE3UUqB8EhipPpTr5zb6HvGQdTxQYUiamsw9TjWrDhuB7tf2d6yJ5edKLp7V4wctrZ14G8yWXNAVry",
  "key41": "5ALs4Piz8iNRNJKnwbPHwDVTeHjDVEHpnSJ1X4HTwHzN6c22hraVWwdxs3YEmNbuiZXR6TJcu1VqVYAwGT27wEot"
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
