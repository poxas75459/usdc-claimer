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
    "4oFrAsoXyYScnYLrBYRCrkiWm96wAiGkpM26dUPvLtrGrcTdNk8fpGyVfQHCFMcGwvZ2Wcy4BYL1amVZHg2x4trZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321QaYg3N8G9JFasJBwPWTEF6GHsL5weXfMq5oYeg52NA3AGj8LrFrjR78CDaWk5uBnzjQS5uMTmbzojFAieVn3J",
  "key1": "5qyMxKYfHpFycv1BMe8JLW55ZieDBFLMZUFKVRyeLMPqfTtcjF3NABig4ng18RCwS5ZJABhJGubDBT3WqMmSHarz",
  "key2": "2wLEk9grc7Rv7dLo64zd7hZYHit5RtGi15Ex7HdPAYCkcqEsmsMhwax1wW3fmTxHxGyRCaacCTMajNA8eHsG42pq",
  "key3": "4ppHmGGRbGj5Ng3TnDJvUZF1iAY6Zvqkpzzc7pL571bHXkr6y4ncXvhTnGMmhh9p1b22qjNASuU5gKz2gh4sB8Kj",
  "key4": "4y5EhqbAyFUi4vshzDBkyDSy4ToQFivZkcgaxpeWsjUV4jC2d48QKHrHFAi9RU9Xvr5uPqW6rrggHGiXgchVyTb2",
  "key5": "4aqx2zSkTvgNchLWJA4ZxNzce7UcJKHQ1vavdjQkuiJmS8AJtsW7h7qKsKzZCtjM2kC7mQHHpRCFuj6TSbxXf2Te",
  "key6": "4yCvL1aC1MYJSMqoVYoiANtPdeGFCq31kvL2FxuLAfvC2qRaaKpjVkoxhL2n2s7bgHmK39oH5Q9FJ1LDXK5idigG",
  "key7": "5bZdMm18BQDE3cywzUh9czhbWLV2f2itvEzB4Q5Wrq9yEv3hGQbAdD2QxzzuN62WXW6bTQqc69WrvMuLVrTUkexK",
  "key8": "42NxQpbKKiDn7nGCAd1hwMqBq3NCsEturDuVri9AJGf2o9KXf2xRccrewyV3x89Vu5TPdh8owERb6L1fUWXKraun",
  "key9": "2GwhGAW9temiFsaJM48AgDWhGVpuRh3kpPTEgMFDzNWpw2gtFh236rnTYTS9jw4weLhLogPpzUQydYCxoX5YzzLz",
  "key10": "4yV4gxjCsUZ2yQMykmxLSciX787KULECRYCkto33WDnaQPXZb6Nr4rqxt5mZgkpQWSfVSMwr2Pyezbwe5gR3q3oo",
  "key11": "5caHEESb9wyxi5Vbw5EzVZ8yhZUXUjgAr32VNxAKsxZMdWbHGjHbvX7KGWZYkNvHK5hCuDbprgirf3BEXgMURc5T",
  "key12": "2VWM4G8mrTpsjm1UTdGodYVSUiqzuRDsesu6tGenrF4jNeApZffHMDt3wRhhMkQaoFnJ9x4J5YdAfUA5L2HyyFNS",
  "key13": "5FYnMg4gZLR95P9mkLp6ggYVFvau1EpX9QP1XoTGTt2aCxLn6btqQ7QEiDd1AWiWt4gyPhKgDEzMecPs3NS4mB6",
  "key14": "2wQVXPYx72qGhrZpUuc1mQ3CFbTeBffmHaGhYRVrVVrcxW28iRYeWcBgzwnjyZczQN7tDRnmmz14eHY7QETcEYGT",
  "key15": "4Vbkn8JJcw1YoNZNEf3oZF26rAPAomXg2vPGjkHQ54j7paVEMw9BYcHueGU2vzSPKHBxR3b6AyWiqXDnYV48uuqp",
  "key16": "2sx1Xf2LWzWwSF7dGDjwAhWJmd83SHZtfWfBvyNMvYFik372F5ZgNTie9QgUpbJkSQCkLqGQCTL4ExH1LwrrbFgN",
  "key17": "rpVcEgvYEMRTNbvyQozs5BGhqrR7jZ2dDSjCw2kPBqug9GLNLSxqxxt3moGR5aFMaYpR2pnXHUqznHFSP4PZHQC",
  "key18": "21f9RVZd4jzmUdA8RTRSCJThq3PgU7m7uyWuhimCt7BrhgoG23mDcnfyEWJWWjHVQxq1wxWoNaiPsNN7zxYMxXSx",
  "key19": "5ML773PFb4QDJXXew7kaKpEBFaz19JLBeCEu85Spwtc8MkzhFjii3Hs9RmBDvWokoczS9kvKY8LCkBTwBizwWbNw",
  "key20": "gmhAWbhKTheqZZ8VcKnhEhJ2KaCeg4VTkh3riRYXaf5VoUnjXikdwx7kLtPjyRCRAfjoqHbajrm48YyYfrALYqv",
  "key21": "4Nb7JqVZyK5HvACRD5dtQpWdAmSub1n3hQDEsxCziAfbDjLvs4qKRSQPbftM1Ba6XFwNb4Vj4LYhFPbWfTZg7gs4",
  "key22": "3oJ7ZLVcgzimbx3Aj19tzMvnqqwGQewJ5WpbAYg2AFPhmLPZquRq1RZBE2wpK6CMk2gBQgPvNjXzM9YqWZahZXHu",
  "key23": "4XgLa8VuVgxoKsmiXo4geX3TiKYkGgJXnUDfNSpNFkL6vp6uQvgGVWfoVctqss1HvoutZtAbJUtSavttkybrNwbx",
  "key24": "2aLG7wrXUoFTUGaGHgs6wP1aKi4MUTKaQn1W1AZ7FjpWP8e2z29coyeiu3bRonRog4U19psFHazuN39YHAMnNcME",
  "key25": "Gyd8kbXyssfZbBnweBF5iV7XSNuYFNX6haq3B6oeXeuiy2cdQ624WKPA6YnZDN6jaFubU9bZdUAQLcCfE9rxSeg",
  "key26": "4VRYogV4DMyg9HerURRPysnZ6uJRahW3tX7841RfdZU31NYLQNoGq56f5ZGJzomcL56LDkZeEyMYygC5m88HMrkJ",
  "key27": "3caG7u9MaB2HMmUKWDBTyz3E4qj85urwF72jxUZ6GgbnZy2U4abBUxNvez66oD2GNbGRxgQps3DZcbgVXQsYokAh",
  "key28": "53ge18KK2qheW44vzKXQ5kvmyenV1vz8jZ7VT25iPWTSFy42LYpmTzzphR2gu8YN77q6NiA3A4hfgSKxKJevreRL",
  "key29": "5UHbNbrN17ZaeUpP8XCiJQDJvkxfAosZGrZmQB9GYQorWjJjA5T7wTcf8RnCdWhdzY22zvdvytVLe9Gm5CpNx839",
  "key30": "4KEJ6B2KC8VosUVp1Nz6eYbvXYKokSJ5VQaU5rBwHkYah5aksPrjFEFivpsVshAVGoTDXtUC4FEcPCJXXXENwdLf",
  "key31": "3iss8Xx1PHphWyLaV5c2aQKHQPjQR7GRw8XVRxu9Dcv85KTkXE4n8YbtChbbFc4kj5vsE87phstmTVm3MJrss8rv",
  "key32": "377tjAzD2EKXMa6VBfJBBv3xJQTSfU5z2Ypj7GHmx4izY89Y57E6oTZqE8HtVAhCDfinyisLcQd3QVc53zcXK4Uf",
  "key33": "4uJ5nAMSNsLobc7RfQjoGeUT8xQH8bvo2PYWW1AzGYNt91Z7W1t14yqnjvbEJiXYW29MVGkjpufeCYr7oRq3oETC",
  "key34": "3DEBYpT5MwKUd4Jd4SKG2HE1rfoWUnonSws3m6PaQ24z5rAYUWhgLyDZSozCmoMxXQ1iuVrw82NsW36i8As6KUYv",
  "key35": "22gAUeWzvXt3KPqWUbneCMxEeHUXXJWLCiPFqcd3WafPsVUmpTu1TUdqQVi8dYi8maJc72We7o8qiVk97NXv868m"
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
