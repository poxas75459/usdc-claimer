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
    "669iAbUqUKbt761Qy2GKMvYtmBRoYZf7BxGgFrTcdwqMnUEKiUoZSUmPsnrhpny7k9WtTrSqiMGqHrShBRM4tJ5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37fmPfXELrEzGqWQfy18zfJvxDKqKvwEGWCspYpaiGvaqkFRYKYR2XAZW4XQJyjHjeVrwgDzqLHtK5v6kkqhx4TK",
  "key1": "1F1Ln1jni3Yy9ioToXeLqPpXQa425soMhbEHJPp8YtYHRG7znu2gU5wnLcihQ1zjktkDXKkcuCyF2akP8dv7e4q",
  "key2": "43twDysDVW6cRy7J5rvdccmjZabTkMLBmFbowpuNX1f2MC6n88jhGhKBfyoZtFzgr5pjbqfkEKoNqafKieNn4E6D",
  "key3": "2jecZJtnU2AfYVPmgALAVaWmztu8XmzP26tXXxEYKYPGjmMbzpaJgcEKSLmvQ2KJcLQqideWVc89fdM7pvZCEc2D",
  "key4": "DE5hx6fQegBwXHjAi4zwwNnfsbboMJCuWHQ4gTHvtnu7TRq1Lx8GeH73GLJM6RPjtrrdujJ4HtwQGmG5AhJRKbz",
  "key5": "37UV3P4HTZ7UmAFz6r1ELou3twhiJS54KceoFQW7uGmHSDiKG5rSfJQERKh4W2FfEJhRJyrxbpiHgPrg7hLNv9d7",
  "key6": "3ijrQNdHLfFpfphe6u2MBFSq8sxSWXEgmp2892hbnobPCi1j27guXAZ38eR5pinFYVbwASfH7UMHBubvaf16TxjJ",
  "key7": "3REez93Qv3SiYLmjD5FomdUQ1fmmog6obxgSnoQqkXR2NiYMeR8aPKTfDz9Vd4ga9p1XNKYRQi5QWtsq5wWnz2GD",
  "key8": "3bnVw35LuxGa7GqFbL8xmM86dFWat5J5RGsec8VfAdbujp6RTti3rCVFvYZgRZB3Tcaovx5ZYirQdYPfjqKW9tgw",
  "key9": "2NqLq5iL1GtE8VEV3EU69P9yVjP5ycSVPmxHzYcPALMJt2QJZJno6Tf3gAa1CTQ6jz4pEWUgJdRmmQCdN6wozgeQ",
  "key10": "4jHQQEpqHqcG6Qdc8Ryg4NDLPf4jJMnQKjwL2wjtJzUQ3ufmDQAw4jgCQs5DSRSCmQDF8titMfeSvjFPrTzZGcjW",
  "key11": "zRCRX5i7CnjNkys8CiGgVYUasHhEi8auF2bLZf7JFEtrtG5Gz244BerW14nweJh2u5yDFN5j3V45KrKZbYQRQRM",
  "key12": "42SoGpSCyuW7CBCzbFpPRMockMjzmkpcSKzMYpKhcPt3zhnjzXuwzNDMHqeTE8DMJaLBbGvSJYD25Xp6hZmuaDuN",
  "key13": "584eb6SyB4T6HmqontqY9ge7dRTsdDGobGymzZ6RgTdHhQ9sZFXZuaooJps8U4rrGwgHsvztA6tBB5LuEesfoKdL",
  "key14": "5fhZ6g6iPUNdRLV5afLzbb3KdHHPLHopZpVrsLH7mXsbPneHt8AwFjKqUtMX21muZFRLPXuurNzZgNL1XnMWvBWx",
  "key15": "3gJuEYTkZAmxT1EBjwtgYrdiLa3jnshTTSZFjm6WdCovLJnZ3AUXQTAk4HWzs6jCP5aGMw18JsjKxEATEV5xzcEX",
  "key16": "4qqtWHSBzzeBam5r426EmWCU6skgB8EDSZi98vUm5uGqorYnXtLWgdQzRr3tNiUPgUL3cDzc7Dz6v1C5BVQD6rEa",
  "key17": "JgDLeMpMpqjojCQ5qDg61bvGPwdnNMUxzxjM8TdwhmSsyLx9eVdo3sBxrkeC1bezd3C32hcFc6uKaRdzqbDyBhf",
  "key18": "P7YW39BNoj6GdyZ6gMmvkJ3P2uVp7EA5z66YVSQk7rqQY61hbBNd6HEhWDDMnzjEfLHnp3LLc9gtXaD95PAYSPH",
  "key19": "DHpAJNLLtHheLzZvHfJXawWJHG3Y8cA9pQTxnCaAA8AjNdBDtSuDw6cZyM3d7FcwQ662PKkAHMhD7wFqeAxBtWS",
  "key20": "9Ha3Ri11AkWjB1pVHQ2iVhAgUVFKMF6DKq4oNQUVpmaGGw7QVcTTGkJZf1YPtvhkxSYXKQ1CwP5sTom3QJzaNBm",
  "key21": "4DVHkNACPptXEschrv6d4zqXFLPJnyNHQ7yUwHU9dUeiNgzQ3LorZenWeCePgebnze6yADD2DDEkkWB1hpGwPgoJ",
  "key22": "5TygtUABEhaBZS9o7PKnvky27Dzp7fRYzRZFjUEUomDnYu3y4tWbrDJh7hQo2n7RHWtMD32reaZHxGo2dQeKpHEZ",
  "key23": "5mopRLdR5MGgBfHWrczmsgxrjeYZmWzcjXbnNz6EA28qTvjAWNujVsbyaJAzwF9vSik1Hag6fMfZCev9zLP9VGfZ",
  "key24": "4w1FNuzSWoZ7zuLeQMQTr1WgoJdEu8N891fbJrJEL9Dk9KTA5xvktV2g1HosPhyVwz9ZeH9oQfasks2vUq23kxCP",
  "key25": "2dUDumcMtoqnYgjSjyCXspQeixocHD35MM7Dd5yLdgB9odKYToT2ZQYiwsqCtp5GCPMgsWGtinjFqdxV3MyrEktk",
  "key26": "5KjgJRwoAQmeWuSkxpRkyNqHvUo6ziBWVhX5FBYa4fkAbgG4S865Jn85gyQAdUcuY6JdcDLCkDZEwX4nkUR1wsYb",
  "key27": "25QmdpSjt9fNJ2FD2yw78EHXsbgMUJyW9vXqSFkL7j9yDtuexvQBeFk3FGbS4tMct6xKWBPVVwMHTuEhNbHJqxE7",
  "key28": "62sD1ahBwY8UEP7JakeEMm4NK573wNJHssT6QqnpL465C9mg5TcavhfsvzpdvKurukeQGpAuKgKTqMFKgw9pBWHq",
  "key29": "Ad8EwSoZVzYZhQ2CN9hK1oeRTTBwArM9adGkere4Df7rnbU5xGZA7bc4Vw7ouFb1otUwtF7H1fvmoyx6htP6upP",
  "key30": "2hWrFaptnGjhC2svntbrsYLibBXdoyZ6Jq5odHXxc2EBuTP5X9CWtcg5tzCStkfVuptnbEyTU9CjpL7ktq6hPWBB",
  "key31": "3Hv4zegcjdJBoaLrLJFAHR3Z1Pbrc7RyoYSLVg6BdHsDvAdaCtiJ3CPM3YGqtkTqmXJT9cTgUDFtCkrRU98ze5bG",
  "key32": "txU9phoLDwKvmhAYV3MQXrWoBJtDQL9BURdGkfxeELFMfU7LdWDyGy9Ew8ZDeh1sVa4mR3c5miogQnQH4RGpsDi",
  "key33": "5axwCMuPB2G7knZ1CJ5eETjYqVuABTV6GQRTU1WpUDSkCKbmJjJZ85hteVinmpvoGVAGVeaqk514Y16ehTeBUWZL",
  "key34": "3rhhjQcF9QGtM9wCQNosr7jF3YeHtA2T92k2zBph6Uc8CRfbhqKFwi3ohdCaWmKbZY8UpeqKZuu1xhH58MrbJguV",
  "key35": "5C6143sVS5LMsmXLwudKEAJ94q2TV6DsjkLbTVWYfdSojLd8Rny84otGGSjB78yj9VEn6sY53GXXuGRXrwdb429S",
  "key36": "46MeTBky1gFzGdRyzdkNjUEBtKcwtnFzWp1JYTXRQPsMbdw5JbmFokzrzzcgLygYMMrPcMYbpPcsaHYXTTxPnhWh",
  "key37": "VaMcdnDgX4NfNSA5TG3c7mRL5Q7Gqm25wgHHPnVMhKKgfQgeDgDd2XVyWpraCPjkEzTYp3AmzR6fH7kL5ki6cj9",
  "key38": "2RPYsgNicGPKXLtTRRPToYjCosxptJhaUmWoWhH6jH6wUU3tXxAQom1D4Zr72wLtnMwjBNFgWHW674JPrmMo9voG",
  "key39": "1GFmccyZSShtdsE3aGS5ZTBbUpZ5SE9ovc8FqzAtCT8es2kaW36KQLSMW2mcx3cUVf4cMX1996aD8XoHkncKcwS",
  "key40": "2UameQDCoDrSKhF8TT1SVgz8LknVvMUa7St6pHL8TdW1VPa1YtKbYjhVytZw67Xcyz5CJoRsG4PyF74ddmXHjpm"
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
