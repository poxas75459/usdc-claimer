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
    "3KMWpQsRYXoGMQiSr3s6afpP1t7CBaneS1Z9D9ZFF1uFKi4QAcxXm7JyQcGijN9HD1f6UotZAFGSyidtj7388Cos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZrZFqUkJxmrsYzfy2enCGRvMYPxXHj57bSnHaJ1ru9xZF9zSKGAje1ev6jeckpjCUWtxQiqhb1wq2TE3VytTrU",
  "key1": "3qeUcfTt4MvJKBkihkFxWkRv2hRSPpRX5aH1PqohiafEyWHAC4g6m3GzL1JuQ4LuAaNuLRXExqUn39KFtwsYjSXD",
  "key2": "3TxQpo3ayQH45zLNiAnYPVwfcfJV1YqUa7jtaCmRWByNF9QpsBrJ7yPd8HJgymm6AMxdgStqk4QQ8F7Cuetdx1Yu",
  "key3": "2AK3FTuZZXaZ8pTbwdkChkJh6VHvRUZ6xsYZXWomFis4wPcw1wT69qfdwmTKfGACL8Snk36m6VwfjP4G1Hg4qRHa",
  "key4": "2yNJQtgdjuiMAymme4yaKv76r8DpXLpHoRv6fvSB6Ss5YwXs5yQZ7qTuSGHU5xaAzHf5gzYmuE6Z6GPBknXVmfPA",
  "key5": "2So6xDhYrKvr9w2FdxwyaP4oDMpBDQRKgfDNKpbERMKMAh7v1ZcVv7pRHGCoqsf5JRA2UPpbxTjX3ez38XzfvaUH",
  "key6": "2iMKhFoMgaBCDdbb5jKh9UFVRVAQrDq8GLMjuZNZuVHRqZ5Na2J6nr192mhXF1utjDKcPJDMrSc8LAyhsSVwhw7B",
  "key7": "SE4rFuAPpR1eN3j6a99riPVwzLDHnqwgZiFbEa1wQADQ6fM81Wi3yU9e3cGKxFLiS7gorSacH6PKdyQF6P2ddVk",
  "key8": "4H4UEGjRBP3Yv6n2nFthambNtLHgoLsMhueyYuzVukZUnp2ecc8sSjQQz3nPyH8TiabwQX5eKE5hrUDh5xJhb6c8",
  "key9": "2DbLxBeQnPSohKwmJ1dceszuJCtmwWRWJzB3pF5RP7FirzDKuGThVmGh1c9YkxjVLexj9hewpbm2ncDePb3pT2i4",
  "key10": "5oVdsz1nh1WWYGZu4nMA4AxbXgDzuC3fdARMtzVnsrhttYuRc8WGfi3GTKSGykaRhXkV1GDWKCcpm84awTBodX9Q",
  "key11": "2HX9B8cWCKiJdra2xSKG3gEM77EjnVwHJLznjc36FVwcpyC1c7MDbivFi1WQ9JEYzpQ6coLe7m6FEmzfZVpEHckn",
  "key12": "3azcjiaSERWVgarZPdZhZCE8W4jsDEbDCX62mPJZtcmHMEg12XMtvCBj5VvxhfUdPFvDAHCKSG2FihxnofmSdSSZ",
  "key13": "rqq7Y36ijePx1VznQXVeV9XRHh46ASEXQP5cjoWT463L3y5L7yZGa8VAH9nqBHmbSKcQLyqaTEL6MSFp8stnCzc",
  "key14": "4nGbtcDG62mR34wQkhjkYUU1bpqUgUg9koGSu345bCyTdeJLp8mi6HvzzLsn4jht7dVTiDxFztkzxSjrTg2RjgpF",
  "key15": "2LHgcLxVPbo2dRR7VFC5ER9GsjHMRbHzUorcGXzsSwG1euUShSMrsHgNrMzGbMyB7CXTv1TMhCEzNWZ84Cih8yNi",
  "key16": "2v3EB4t88y2nV8hKb41ZxeiN7vSnWeVvmdNTBTrxH2EX5WysTXPW1RSGgZwb1F5oW6QZvMa4JuAmRCX6iVbwnPoe",
  "key17": "5LYRAB9ACfnroBU2TtZteUDk9JMdT3mvcKaaY2JJ9K78WHRtYmesXU3GEAMbjuXC8bnMDrZycg5xR52f4ZA7Yugj",
  "key18": "gHz1FpeQj5xgfZsseq3ePwDPWmhsmMUxSFeamhbCzeAm1VCkqW3r7QrvJx3bdFnn6cxE4wsTp7Yw1MWE74UuoYX",
  "key19": "a67ySQzBoryMqbokTuccMG2dysn9SLa43eUz7XvWamW8koWBsv7m3E3Y7SCYH3hqVfi37BdxFSbbmoWNF19NX9k",
  "key20": "66sVSVbrN2Faaxp8uyXtGxqzjPD63QsYaTLyHMoRoroRrY2FKLgkLTTqzRMniuCKyGpkYSfomUJMQBWiXXnC3eRQ",
  "key21": "37vDCWSzuk3RLXp7Si7rajGaZwjxgKDG97pzzi43mdnzuhc2ufFbrbjG22GKWD7CdFHfNxFCiiJGBNKdGgTmcj5a",
  "key22": "2n4gFrJWwK3czgQwxzYaMZt8owPhgKyFNdqfeABiA5MHeBZGMXkBTFcyGjQY6ud2NJKPLzahm4vCGNqeJXMd5CTY",
  "key23": "5MhxLHycGdTRURZNZ3CvUBwAz8RDKcvaeaZ27kbQumwmgEFcDdidoFupxLHGAe4ho6TBhe5WudCbp4nKJVyYGSnh",
  "key24": "4f2uzfrBs6gVsJt6sZcGPriL8THoL1ZCeL6vvBFrpB9NYgVHytGasCtJGiLhGZSCqSkBPDSkU4pvzThfavvDi5CV",
  "key25": "2WSATNtFxxxQYWf1hXXcsEf7CYCB4c5QePCVzL6auSETSqo4FRmRTUo5SJjTwMuZ66n3DmDR3wG4rJiDjyvdzyuJ",
  "key26": "4aX8N6yHWXk2m2DAk8A8XWWDUmW4mRZPLQGieKeNH8fZpFYBbCapyBfAwsqoY4mHnm6wERx88V2xPhyMu3U11LN7",
  "key27": "42cyTbBTfMrQhiDDveqxPN2vqmsBGmLQVaZEJQqNA19h4uD2rXxfkYu1D4qa3Sc4Z5mbw9fyXDM58xpv57nUCRPL",
  "key28": "5URcKcQQ9kE1iv3KegELjBqBNeepEoZB6dKjDh43uBbPmEBpkaAppF9Z8BeHPvuTqMGPPHHqZvem7bv7Tj3uKiyt",
  "key29": "tE2QqrtxsGcCFvwQjpUVu6z463mRExWjQfXXxFSm4EfnQpVaEvnQhoVXLJX1H6WnDc3Afdjm9aMY6CVLE7Nso1p",
  "key30": "2xwf6Ajm1s1MnBXGgqBYV8WxN18GGYGn6gHmwwrPPKS64MLBTWE8h12sQna3zGin9tetyga8AEPwKco2Ycup6rU2",
  "key31": "3BcqPTeAeFNLf8eu3APEa3ADHLGRVb6BRrfcQ9ggDyA2fcfLTyHkCVXz4EVakgpo9PvQ3ZtwCBZMQPPhcdxH1ojA",
  "key32": "5GT91ba4ftHc1zBqKRFm1z6Wh3fCdhy7DzbeYpKpBGTJJJ6RaVTRVWxz8kAFSVbydCMCa4286ZG9Ssf3uWdst5o7",
  "key33": "5doSDfjLMyBuNacYrTgkwzzAoJDH7N33E9KufB1WsLkCirMbLYKuNjyb6mVBM4ibhBbsqAYzbxDvrdoXXMEvUViW",
  "key34": "5L8McMZj114bDeTP9tDAs9SjzQJC4AW7dwCh2DDfz9irdmvNCSP9jp8oAiCGha8RkHirY4jWG1DQP3nxPjgVqJLX",
  "key35": "sh3xYQbutJSSrxapX5VgSJ52QK8gKit2rgSLif9LX6yiHZXeooTE9N6suCWHeuuVXcBrWyJGuAYfu12yviicDZG"
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
