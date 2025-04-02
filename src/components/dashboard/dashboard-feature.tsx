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
    "4rVv3RmjL82uh4FhSAajQ66odT5RAYcFUGxa4P1NUuLboqN311KYt3P6QoVTYP6RGYyef1HbydtHCwL8kJPCstjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "647qn9nmNKWgdsUUZrfNgQCKXAaGjLHLJ6KPQiN2iH5kH18yg5Gexk84sgEJZRDymJTTYHEFsejh5UsFbXFTK5Dw",
  "key1": "3J3wUtfjdzSSXrPoGbU9t9CPNAqPPdtWxFg4dcxJF3HGnaTx3BZGWNvMioGhgLsidevgyxZkQn4Cn2nLD5zbFtF6",
  "key2": "M2wybK4vfB5Qg2x5QNfKwEq68n2bBq5TtJf2VniZniSarSNu231bUbHXM8F79UXVjBVbdfUtX8D9Tu3HpqrnYoR",
  "key3": "rj7wPuKdF8ikfLGiCQuPhgFxxNFspG1nDEV4qMeXj5sPZ8bC2E3hQB9LBB2KVywmMRyjMbRLQRX5ASihABrxM65",
  "key4": "3R4WiGumwTdWnw8X1EfqT27zVwygwqR62DYTj3nk2GW2dXUivz1RDMdpV44kNMYhwnXGWmZUBhTt6WM4F5hGsdGV",
  "key5": "2XEbpYy9EpXvCPgdSGscTrRYvW9WzJrCFncoNB5MMB46ND1MfgG8DpfQd5sW8yYLbgA4EKN2dxBAM58b2BZVTuz1",
  "key6": "4VqxJb5m1kswaq44sKkTU3LG7unwXzzTwXPkGegYAJV84rtt8vNfh74Es9FtWciryRbUCKs7GpiSbBeeVJNEUWdL",
  "key7": "5m3sRL79iBiudSBiWE2tsTxfDUssDUc9dy3cwiK7ixzgNWp4u6QsMk57eUKB6pgLQ8fdc5cDZb5Ee6Wvb9xVnSQc",
  "key8": "oR7RBecmF9iru63a27t72CfX4UdS94qFHBTjbDVFZcN2XQVtj8XFdstSoKsEEA6DnvkzJb4da3ZPjozWNqj77Fz",
  "key9": "i72BZ669egFr4Dj8WS8ekjSZNK8FA6RDYSPsMmq6ZMQjDL1MPgnprNx7jyUFZ4zkeoTQSa7AAqCgzNsLf3C2S7C",
  "key10": "5aHKzY37NACQrdM25vw7BvEHgd7poHq7GphFJcsyWbLkenfkvvHf1Rs1P1d7KdT82H3HhjQxujRnKad7MuaH3wVG",
  "key11": "4kaedn8sAo27pSuUaLnTTpJfQYiYAEm1pp9bQuigbPFWWfQqTzX8YPiQiweqriih8CM32tvuRqpzMf52D7X2jFMN",
  "key12": "31AbPSdHFTuro2WznbTcxEgbAKpNJ5dCDYk7rs9ipBPgxWcSx93KiRGDGrWhMtub4p4rr3ny17SAEbyYZNwzCfiT",
  "key13": "2Revcdm3KfMWw7MXiTiyMTX1QEVrMPBu6c67DCVATpdKFJjYua2NNLEfzpfyBUCQ6ufSMjErCZzj1Xo5hfWMkBiG",
  "key14": "41nHGWNXVNu1JoBVikqtxthVUVefbPPi5Qk4sB6ZajKuuv1mwkDoqZp5mJHm6phrPH69nuR7kzvNAjHfoT1PvMdx",
  "key15": "A9HeVUcc7c1Cs2PP6xgWm9B714nbic7MdvGFyrgcJSgGxhroYd33UPWxjahvm9Jv1LT2nfqHmNicooEF7ceq588",
  "key16": "2SKHXRxSYy211khDgum7siDujMMRwF59ZEkSQ32vZGMTehd7g6aiJpuG4ytu3aXL3seLpVc235w8xejJtAATywmm",
  "key17": "SjShQApH7UA4eU79FQXseUJQNt1G6dxT9JFFnznbu1ZuocY42uoAcLbhD7EnW92U6dLkRS4yhjBDHpqpq9VKZVa",
  "key18": "3BqsdDNfnt2z6nFHefhiSFSFQb7jpU9kJdMcCfb3ZfsK68KZy3Lanzbf5WbDBvzseEb83x5T5Nmevtnobphhe9xA",
  "key19": "YpsjJF94QfouamiapR1ij1zP3c3kNXyhABrfniRrxNx4DrY8FPowF9xUsA419ZzKHvcZesmdmMfuSuFE7cyiuAe",
  "key20": "24ZndmDLp8EGPsgsaTRZCNpcYQdKiHRHiiknKauxDJLu8qQT4Su1yccic97pSeFNAm1CmoQno6FkH95sWxZBTmHa",
  "key21": "3MYPTLegNBzA2aRe9Dc4Gsj2nkXNuRajfoB8iU5c8S9JNshD3tErrGb1KPYuSRNzR35MUQmGvRu8N8UaQJaaLCif",
  "key22": "4Z8vx2oGnuRnunB3pVZTG4EvkhfNdi84NhF6afXtsvPa31XYEu7bDwrLSKiETwTpAsKdZYoUy6NUN6HF694B2yi",
  "key23": "56Ydfy8nAj4oGRs4VLCgrfA4SrknLWHXpae9Q6T1C16dXo1JRG38bcw56d2jcsaLcTPUrS4f1zneJyMqSWGGw5Yu",
  "key24": "46BM31h3hNZFpDAtbkG78M6yLyCN7ox5LMZceCCMXpPdubhJsf7qFJAohzffuuW67Q9BLvETNUvVMZkQoHcuUgpt",
  "key25": "4qReK3f2F7nWNPmZ5YhE6YWHc4kT86397C3W8XT4EoyMzbwhe1oEsSbEh64ie5myPB2o5uQzu86XpEVUigGiz21o",
  "key26": "2H44KsjXEWK9AhoyQG6sN6SSCdTroM2mMGEXHVdKr1WUZUMjiYMERAMw1RUqvQw9TqsKqXXHHeKzTvhGCCVAAJbP",
  "key27": "5AmzkWN2PoX6Aw68vzUCdvAMeAxEvzTft67nDQcA7bwxhSAXjc4d4XzyVDUnbEqFrn8JauuiKqQsuRjPbDssiEn9",
  "key28": "8LakQQ79CcFZH7cJ47JBZnFBMnuUujzUqNed1wEWSxwGDAHWt9xagan17VysFox8Z8X2STEkgwRPCy81ZYPkzqd",
  "key29": "sGoTLpMHwWomqRAvuuj36RZrisZt5cpB33ijRzN9Asg8kJEi6jHqK3aNTMByZcvnGDNjbHmLwjsDUR3pG7dpY5n",
  "key30": "3aAyTnQK62TCpQmHDz7mibyMnvKpS6AvfE6Qp4NfcckMPRx42riNd4H29qtmnYWhRRmGxiz76nNrU2oLM1DHc7kR",
  "key31": "3MAHLEgoyNdvaDN55r2foEqqiZBZoc8bYvT3F5qwmqqhYnJG9ATQ4Pq34j4DEppHB3SKVStH6Cb6mZkNDDTTSu5P",
  "key32": "5hDHkbTdK8GHg2XUWAhi3SnWFzeUZRkgQPXnHdAUMNMuSCFJYp7VmbdfBMXBe2TzBU3M1wo3Tgp93y9r6oh2489H"
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
