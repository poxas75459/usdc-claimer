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
    "5Qbt6wGEKHSECUJGarbF5g4B9BHRVJFh4cKYQ9rDex8Uhu2aSmUq3tjxhzCGeQ3iATE9VKd5WmUyhgu7acDAVQwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RweDpsqZRExBycsjBT7L4qhn2VhB5zyK4Z2GfTafWb5uNswt26EoWRwYhtNHf4jpnS3cGe21A3ZzNhKrTJzcr9j",
  "key1": "3gRX4KjN769Pzg2GXGiXbCpRDtdUao5HbwbRUprRNTB35VV3SUn3MnLZ4Zxo58hJp8svWaN66qtae3PqhKRJceJr",
  "key2": "3L9eJ5avYKTiPEAcHNKtymgZD1em7UuDXVgXYf7qtokyZPfYss6gSBEt2UtLaMsT1ShdHPrNtVJWRJzLaxb5T8zD",
  "key3": "2z1UPAvAqixsh7wKJ9uCUGTci3pC7zx8YD1hoKGj8iciUfdNpeevTPbEMX6WAhNu8XsdhpLN7pknQ3DEVp4u4py4",
  "key4": "3SZMPaqX4RPhTnyZmfFPwZpu1mWrq4S2tWWu19DxGSsh3fPX49m9cMXtCUGzRZJcZgBLevxaDyFQBPmqKSkB1H16",
  "key5": "HfNiPenYfMW6i48cb4YNovGn2K4WLAzjjBUVkMpNdv5U5R69CGhmYDJPrmaRpiDSMPsb5HBz7hfwGdNBJXN4MRD",
  "key6": "yjpmFhCzbuvbVe1sgFj5dNExZ6tyQCHwUd6oxP9bMpMCxbmczLQkonrFgu6zgrfW9csm9ZCjR2WKvELTMUqzU9X",
  "key7": "RBXsANyqSnn54qtGmpraEY3HwWaUysvi2aTJeSAuPvNNJ7FnhqkSkTvYjyYvzm9uyQYVBvgiqGzhy8BMUmNz8SP",
  "key8": "2Zvij6BaoyWnHP7wfRHk3eGbadbeXNzbjtFayUr3o5CjezfWQ14uCTaBwFaT5ofR86FGYkHXyLU9MrKpbqHZmsXQ",
  "key9": "65SPMnzcqwmgeBSSZRXdnHF3S95MSuAWSN1gH2HamuX6B5cnHsCn1cLspnL2xKg8Zw1iw5m2hwcBRz1mic5decoU",
  "key10": "2nBGGecB5ayVyq7rT1wkA6GiXZgeTwx7kAVXzg7VmsW8PGeRv7hGyEp4XMqDg8A3ESUwnQbNzzxtULXxyLjXU86S",
  "key11": "3zCpaDgads9dDtryLLkqreNyWh9aNv1PNHk2z1YALFwZx5tDgYhifN9Y3FQaqTYnDUUKEpaDhfMPdSXFrjUwCk6X",
  "key12": "52s9xM5SRrCZTn98Ui7NHKvW8LbVy4wrRV669GBtFjhbLCEbVWrSpGfZimc7CUn6adfqzx8c9CmGDftUfgCzEXLM",
  "key13": "47MjJzPk8ptfTGGeMoZVz1t3P1VzZXNZuhp4grXGAhE2uq2WmVTtyQ731XiGmdu9b4VQbtX4NF4yrHonq6TnfsUj",
  "key14": "5mXEvQSY87ZcHhbYzdPfFnA7QXee6D3PfDQYGP94NZah9BLDe2n2mB3YruVtYJ8joYUsAr5yPbgttpZZWrzVvQwe",
  "key15": "2NGZ7QGFZfiSn2DhYNzNpLPG5izZTcoAbWymY71AxWJiBNjLwQnFyG2954RkZn7PNWVfpMvPfS8fhfy3K9Mqbot1",
  "key16": "2Nix67NCns1Cr9h2FNjryb5zjbmDW6wJvAZNqPm4Ri7fy8tdSFmT9tznBPrBEBKqmGTa2URCSzBhNyrFKw81uDet",
  "key17": "37T8v667s9aDuyJX3svYhUsG9DFTjvdT266fCBc4QwLmSzZFAznS6hHHsBQXcGLaTJS9mXQJyS7SxMm3DPVkAZTo",
  "key18": "2ypE4xfXkuP2AqLStAHwgM82YTeFGMx9h3d6yWeTMjDxZRfQvMJW2tmKWSZTqRzz4KgVLqk22drHsYQYLSuB2C3",
  "key19": "5WTxNptDWxcNi8dMfiM47qf9WnP6XFmoKShV5Mx8SUhFDDkowDHsnVfVRE6mNove1Xjwnp6izapJjrjUDeE1xgyv",
  "key20": "4eLttrEdVJdHQTxyK4psMG1bP7JY7NckC4gezxeVbuqqWo1c9b7eiFc9NsbTxKEZEHpBk5TC26PGhwxmfP4LgFQJ",
  "key21": "2mAjt1ZjeRdNvTp998pdF625Xy2ehSU2Y3eBaJwF5qcyd161X32XCRexZB5s8CjENM6Le78zBtqF5tdgsyXRnBRK",
  "key22": "39GZhq2q7NVCWv2ou3vHu1HXjCykgW87LSJaaayJ4MqZrjzhMinXL3fePLEc1xjoPCouQp2K8y53xbBW4FKnaY7N",
  "key23": "4a7B8A4UN5JhBEU7PaxwGXJPCkxhGkaZzQ6UycAQLSGTCxvHJvwJDzVFmFNzgjTtagtyvwzmYgD9eXothx2xnNkv",
  "key24": "5e3NaY7MfZ3YLT6qFzPQM4WUMAKCmVRyeD4868EPgBkjMoULSK1gmwcRLHB8FejWP4JMViThXJadZfVkyauDftfD",
  "key25": "4H3fbbVgoTzfmXrczCc6NPHs6tKWQbzU5d34Sz75ScfJF6o57HkU3YVtEyLsX7DY29Nwa3NvYQCfRNaW8fg3t2GG",
  "key26": "5rxm2xPpKMSumigFgF1fGtsbavoasWWMaepDMhxtdyLjJhCGgtr6cqcPycqPaGrFDNZxXDsT2ec6ZV5pzJDbPUgD",
  "key27": "5DFUELVQfWtt3LA37jhvc9rmi3N9TnMRw8y4GzcHCmow2LD6xAQvDa8zatyo2iJqBJMv5EdjzgDgYEp6YeCWMvcC",
  "key28": "5AikTyeTjVbZPDbHApQmL7Jp4pysU3Y9Ah1Tuqzc3QSA1M89hF98yHrFLuC8a7owCeqsXptWDkaiC7S7WsGUdHQp",
  "key29": "3tfcNyYh9rE4M67Ya1mxPXjdiXUt8WfudKDKZGVgGz6c3AkzDv1ePKemYy3xRHnh7CVjMHmFdibJgyVajS1P13Vb",
  "key30": "5PqJcPskcvhpdheCgFszzJ4VJkpNeuFXH9euxNZUZYEwBZQ6FCpfAgZGjqBrrUZc26WsMxBfNXiE2uHVye3enevv",
  "key31": "4ua6R37nNxyNbbpGo22Fhkeu3uV8EzL196oZZVCRyr3LWxqZmMN6qv7WSmJ7aFJsit6wK3cH2qsSQ35u2Cyhedtg",
  "key32": "aKzzJdCM5tGBwKUuymZhM4acf3CG6cCxBZBBxPU7WUoVVDL45Nfv2LgFAtQFe2QamotSdXSXrRERm8AgtsJNGGy",
  "key33": "qzCY8qPMip3eqjSDiMfuyyDyYbsfsP4J6od2Y5TQfc5LQxhAeGztgdzPTjGQUMLxPGALJPndzuarBtvS9dPgSF9",
  "key34": "5KQAdFhvT9qj5PwHhgK8e2WTGLTLgFz9s2x18HAWL5KAoyBwusHvwWLHF78SKHHBnVZv392T7QeRKiRifC3HC4SY",
  "key35": "2pDmD5ThWdQHMWNaEsFoXpSn7HnCmNVB4oLkYyPKJyEeNG9BHLk35m97hCvV1F8ZKhACwYtqnHoJKXGJjWxN8ReE",
  "key36": "2ANjeSwP4chBtWNdq5fV2d36NA9HGJYiCY6YroGTmo6sEGexKDo6tRRBwD925TyiB1frTHAqVJbPTzbPnKadfgwx",
  "key37": "33gkynn822DgBDpoPffYEtWjrVcKTz5mJLUJX79ZPwHkB2zMmVNo7EqiwVHePWLZJsTPWpoRVPkiVc4vXptTMoJs",
  "key38": "3BsB6f5gTAGZWJtbSgJD17nbhd7JNRwg2dL8HFKa2m7rYnaNe7zRiUfqLjFbVYRbq3uayEzEfWewZczbRfxiwBjy",
  "key39": "4vt5E6ajHGYK4aymH2PKzY7LWrikdHKvJG5RPceyKXeSrgupJpFz6sFutuqMpzyE2m6oEBz9UABgTotVfjtwLo4T",
  "key40": "26ubTVgn2YeFFYPN57emrENgfFfeoN95WEqHBCNnJUkAMnS6YQMSc6auyUj6U7qoykEZHUej1YabjrEXwW6KKXwZ",
  "key41": "33BppgcczbXb69a9VpcbzzthFBz4RSuLNYtdVzg2NNbqpzbZQibioP6CbbsH3gggWfe5sEtAmbCqZRkrSpkDtwPA",
  "key42": "4CVpQDbSAqp5W4wsRC27bLfUUNMBeYYZA4snmESEexUa1prH5Jba3Ep3sSv5v8janufBg2BAXhgFMRgEj43Jt3i",
  "key43": "678MqDAeEwAFHv1ZiNoyBhS25PA2Cj2osvj2wmfgQu71fTmjVkZRaLLB2ZN99YWRssqiU6VXZqmUZ4TgC2GfPXEs",
  "key44": "48M79NLdYP4bq4LAV6Kv19yMdV5VCHFUpBJ6NBKezqSjg29pSWq8Y4XXmd58AhuvDdWLqCJDBrXMDvoDRmGhp75F"
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
