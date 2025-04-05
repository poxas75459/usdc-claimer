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
    "5rY6U2x8j7ZHuwbTMoLvZU1v15YsCuJFyT4oPZyP9RVz8eAV9Ue95sFG2mGesXmVyAhCUFFaj1k1i1drVb8fVdvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBZkf6m3XR1coJuKQQKNemVvMtyc67zC72n2H4EY15KCWjXjafGQTKn2xJ9UpKXw54jBvnb2DPsJGFVQVeReJdr",
  "key1": "Goid64qzQ6vrjFdNMLBnLC43Y7oj7CwH3nvZaPPHwFCaJ4jBE1KgucguwWFTtBkGQgoDXmaXEdKQs3HQCecDYuF",
  "key2": "2PN9A4bstdRsQGxwNiNZzPMNUF8tfdMFqRwdxaFuLKaQMRmd9cKWcFkqxqdaasjYvZBbzUAE12ca49cAmY3uSBHf",
  "key3": "3JadiyyPGJbEDkUM5hYyv5EweyKdtEb3xTBE27W2HRMMZzqRCizx1aC5g1yLnxUywHstwcor1cgJTHryGUDFKkev",
  "key4": "3SCp9QTmG15NeNR3LA9cDtDz2xiWcooQyRkVPZWxnbcWzaHSxJbcmU2L14q21UUmvekPDsmJq94uAdAvVSEX6EuL",
  "key5": "4aYhkYbVfedc6KUeR2Fqy1eKsbX6ks9fWrLEdRDbFZywcpqLyUUc8YWBmSXPptiidsSjV4Pfsjet4pUxi8jqXdTD",
  "key6": "2NJ2uuSvi1GLuVJP7jTZh7n3XsCG9Y6JQVkbTnMjS5FFumsBDHVZen7DZPeDF3V5hY3aojQyyDjqjFdZiAEAoStk",
  "key7": "62MCdzg4H8ipnapg3PABwDVG9CdXUWu45DmRAuxVN8w9wduvaVj5SgH4EjBLt46NPPX7rvPNryU7njdwgLhWyh6e",
  "key8": "JWAsTKDCeAJYweTQXjxjmxPodc9p6m2SAJicD7Uc5hfiazKpj4CncVcFxcvWo5WpMvATJ2fYQ1oPQsMpmF4suZU",
  "key9": "3kggnRiazysXAqPfedTuhvMBR7Dfppkqekz8Y9NFcZnbS2cM1pojdVXSyLfzAxeTwegx3hbKuFLrg2aQTDE7ixEx",
  "key10": "afrJ5BkT4kQCD4QGy4CS6HS5gi628HDLAZAHWcqJz3ZXy8dgZmrNd963HkYKSQMgo7x9jNqLkUJR8i3RB7H2MYX",
  "key11": "2LFJCDmhDrDZqkWxqa4TTgppG1mNwwQs2kom5EHhsP7izF7K3pwWeoBRntWDAmP2sGVfWTFi6FzFJrDTNsxzs6qU",
  "key12": "4AxA3dBRsLMtq3ByrxAbPihdTFJxjB2J3frgZmd579kZKDL92nYwCcjjrtfc1DgMwApShcx8KW3Xe3SSCW1gYNKZ",
  "key13": "52zaC2FMWsuSEYXdd7FxfMcUYT54bNsi8qndPeT3ZnygBe4eCmKBmyA4uj9NBRT8m2jAKwdN4JAPUi7ZATVRqF12",
  "key14": "2N2jgC4eQeqBqVyhMaZWZCy5JMpQMMoJtX1ZFACMvDSjxqdGsHciLtMyU2Ez6nSL2xNKXCMvv5yTLChN7sgcBu72",
  "key15": "3DmFM2giZpMNxQttcwbGNrHMBWrFhsvzXL2R9s3tmQxpr2yBpxZar6AVzK5t6Vq1q8qePkgUGBg3Abn5rtX9aarM",
  "key16": "49DPsj7McHgYqi2tE9Yhu5NeN2JvWanHK1M7s8ij68U7astfm26exTmJ4jL2RhJBdFqxgMn7H88xDxkRzuNGUsuD",
  "key17": "27RzYMbnvuPP6mYtntuL68TJP7ixfq5ehuhEUkMxs3oGB5sLfvPwj4ZjhJAadMRoHtKPf9gNFPLbWiZ7mNyyUsQL",
  "key18": "xuVhBLsHoGECHgkoEUDqXUWBDcxrrLqeYTsbfKTWUkHFQVehHYFM1GyZPtajsBqTma6mVMyeWu7rfPYE8h66dVr",
  "key19": "DMsq6CtHTRGhrq8wcbYQwSdiXL6uujB493TdGGfWdiEJr5VMzqJh9Ek8a68kEvDC46hb2EXoV51QFnptACaaqz4",
  "key20": "3gvWRp6guW9iD8BCrJKKAg82UB4os9EYrRqtGJ5DAJ8LDgaV3TY5XEGtTLscp1C1ZBmrBJDDzxmq3Qzt2xTq7Vr9",
  "key21": "4D9zsgckUjWLjXunTYcCApk4XJ89FaPWtpmXeU8d6P8Tcki6YZuxTFQASdCStbPpDAWYJbxTxhcDaAsfMPvoA4SJ",
  "key22": "iex9TrcgBBUbGTU7yE6FYFRzsRPWffSx64wsjcSYZ7oQsM8bHRJMUJt1g5F9VvHc8FtnfGAAgC9oghguG6jFLcU",
  "key23": "49RL3Bn9yNitaDTYo6b8AbApDi7f1ornYFbsxt2ZtCPvbMWDDiQkKmeHY9MQfemBPrDLNutoXisfUGWkJnAz8ARp",
  "key24": "3TsYfvQDEA6vyYWmpsorHK4F8Mir4xNsxJ8oGWonqjqE2cbjJydLDVtRKCSYPHxunyG6u1637hMKHSPQyHJBUq12",
  "key25": "5QAuQQsePDuReQxk44LD5oKu3ZwC7RAcdPFLJ7NamYDtn2YSDKP1zZkJMx2N7apyVuzzcRYcspNzE69uxcXg2Cn3",
  "key26": "32xsidfxmm3Wi9rVFDauNAg9xarjurYeznt8qfukG2pvzpsVMNXzM5S1CHiqxAqvf4QtaK7muUeUtuGhNi7QQKqz",
  "key27": "baoaypfbjZA1gMrQEsoPbnQCyrDMwwMz1T4gqSYh691K8HMEUXpgH5EdnxLnKK115F4XiXGUqD71uByCrtUFudP",
  "key28": "5eBFHRToLm2RHAwAcg67n51aYhmwqqnJNEo5ahstV9HUnEJ7GMzi9Bn8p9DLEPS3rmEkZMXRqSXchoC8mCsaEM4g",
  "key29": "37xWfur7gTVuvrMQ1Pq5kHPpTSmjrQZpfnprB9gCLM1pQQjL28Lq49xXCdYyPAx7QKiEsnG3rujqVaU8tte8UFSs",
  "key30": "4W6GQofMgkRrxweK3aobMmMrwvwskxmD8DQj4FG3GckbrP4aMuxEtRktjx2o1vganB217vVeuN8zVTJ5WiDg8Pxg",
  "key31": "49Emrp5nsL6pwVJbRn7pQiXrwTPVXCCJf5kyhwV2jXchr5AQGwq5DeJEee4CqcTy4mQxMnTZTnHEGyKAbEoicvXM"
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
