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
    "5Dv43CngbTRJ3Th61kRFkhhEHJm3P5viMzNynEywMMR8wY79G4bZELCVEiEe2AWjLrYLpkpdP7xu9tgEGvBFnE92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51BVvrjDWj9tWUFcFhCeM1xn7ZnFE5CAidpFHpZj4hK1CErd4Mw1PKKo1rLYXnMwWbVuX1UGD4CkT7F17aaFt2xK",
  "key1": "4t26SXvviKLnbscY9yc6b2CYWbjKwLBVCsUTYwfg4M2qrwVZMwK1syd8EFVATFSsDR3XHPM7Ju9yjReSUsKemYTc",
  "key2": "5gNJ2q57sAeBUy5SgHnYuPcGTirmfpbUy5S96A38zQkDD2712pZaB51nXKnavZGDqYopiKBUXBpzYseJNDKwD2d7",
  "key3": "3q4FHMriRWs2Q1vMXf9Adij9hjA6bqNHZFrVWs3ukCbvrATbwMM3YoKBMG25vds81Gk6M3gU6W5aFkJDHCNAZiEx",
  "key4": "4raP4aWWmjFTriwKqZfzz1SRCRWvSLRVR2R3iy5kRNRQJ5JPNXT9ugv2tDpzHgZ62fux1adBoukWTwUCErRXF5qk",
  "key5": "4XzNY6KAUEx8DFx5y9xXdSoS9rigdRMp99dzGd5HkWoQJucCT9sBz1wCBNKtdrHuBNQ5CUuHrJMfdaBMkJRkJ56J",
  "key6": "4fHbDdLwqKAQHDM9aomg4XU1vQ4UzybDF3PGQmHdQ9cehJ9udpssPgREqcMFaw3h3gwkMq3HFvbUF5LYqdPxrDkF",
  "key7": "4fkbMaBe8CXeQyVBQYfSa52LxvFw8mvPt85eMQsWo35RfFUMEmhDvy41TJVVb12Y8iwufZrZedSMHTwmJmzaN6vv",
  "key8": "66yR9hBDeuuph1D3D4KRgddy9Kb8PYwTyCagSbeew54hzKmpZhzj7K3xrmxZFYvaMapcmnEHjygy7QxqM4jdse8i",
  "key9": "5DR8Sgi2o4hrZWcfso7Prgf1FSTBeHPpBuc25NgwbZ3GCLwdDRe8trTERDrDffk92t7ShWKRL3osBAJJtVWMW291",
  "key10": "5aWiB3xWXmKHVPQB2tAKbwGP7c6Hwvjdzp7eJ47xqJsdPMrC8koMVxu6PwUC47c3AKSJpiHxFaRnGJBYovqrtbsc",
  "key11": "5rj4jPNfosUqK5newcSAbuG7bpXwKSeXrmmZFFTneaikcqebdPq2w27EXSuqFqGsUcGrBRm5XNfojUyceMjMr74s",
  "key12": "3r3EpWFHcsEdYXn58hXaUK7fdGKrrnWKUQyvxLLNSxPGAhc7DSbr9ZjRE4SJFKjL1UyP9wBQgAe6NdXf2kD2trWS",
  "key13": "5qUr6C8mY5EDHBM1Wj735xhTSA6nBKS8546eP43zSW2By3L2jtNtv1ZK16Qp97dUKsb6PnRez7R3HCW7a1wwNC29",
  "key14": "37fP6Kzb62aYbwtj4uF3eGe5A5LJgqTVYHbB5VEawt19ZG2hxAQdtWaVZwrUR18m3ztTAfmZ1eqiF1t3pgy5k9sQ",
  "key15": "5MED6dymG8fu4iBzrKNUEosub9dEvHunRKKjTAHfETkzChoWX5Yy2f6CcGjXQASiXneMN8b78KbwHMW85boF1itr",
  "key16": "4Xxmt6KPYY2JC6d3pK8JfGuca6j1qdhC7qEbzwB74Cc4Dxjx4ASXizBA7NDLgPrmXdFBdTm7ipFxQbqbbL6WbnVA",
  "key17": "Ft5GFdZFoQpPY7vGubKM8nbvh7jG7bF1gy6HNxoUXMApi5UAAMT4i8YSUZ2zA3LiZCpLFRGfryxQWVba1HFr41J",
  "key18": "27sQukA1kfcaSNnkkM8pVth3Wkpe4L3Wz6oPWmo7qin9trHUpmeeGvuhZPS318CDABDeEKziKD4AMzCoFCBYSDgM",
  "key19": "4EVprcjdGyvLYaPwzpMyUi4jdYaLBy7WYWy2CXxjUmaYUyn59xc1CxEZuS3eGtoaXb1HySZDQXw2WspJMwaVWRRG",
  "key20": "3ScNTshSNS3CywQxfR7yV6F7BR2bszv47JFK2W3pPV7eiM1eLHQui1j8tz4QgVUQtex98zyRvPXePdsiPqD5VNCa",
  "key21": "67pS51MjyhpNx7uhKsffh3dPC6QtSCKGtfnL1Jh997PRfZfhcMePq6rRGoUUWFnm42ZKZPVQtGZDpWM7Bqp42xPz",
  "key22": "2iJYQCc6Ju4djN8ugK9ZMFyv7f9AHdosGXJbfV8m2FQMmziGH8rrttTAHCraJSFo8tuw3qRM5hy3zFdcD4U7qENY",
  "key23": "k3wcKWhxWWhxA9kWPBDP7ktgx3GwSLCAcspirMfRrvHJEcMrdCRXMPpEJn53dmD84xwT555WdWw68EEmfo74RCV",
  "key24": "PwvbNjn8EYDmBr7cMEQ9JfABdZdvFo6WbVn2hMcANKoy1bG5X1y9muuaQdMUoVaeLzms5CxMFrwptNpQ8vK94Av",
  "key25": "pacynaePfMQXmW59TaDesrMrwu5FEExv6NSxAUrN6gYqTMDSneswkL1sLN3WTR3Umj8YrZEcXpNs3vdHGNUM1Dm",
  "key26": "4uWUqMuwbKCdTDfSz5c6TBzdgSAWpUDxyFHRrbBurLQEezUcu7tHoHbjMXk21aL9iRUGCeoWF4GbJRXArVqCznkT",
  "key27": "3gue3q54ejzRSgmfKVaDQx9ruRUjDJAwUQdYgqkaADkrjPizQ25XtMEZb7kpoYQ1reFk2t9ezPJDPt4AC4qnr1tp",
  "key28": "2sSQFrJXuE4WA3uqpAR9ZNWjEHXcdqb5rHYTmCHhy4J622DjvehPuZhJeXaJ3gMMEuWRafEAXbyM6KzxXGBZCSq9",
  "key29": "2yTERhmmispuyQveYVrQ8ZyFxzVVZ5G9qJCSmi6uKH2irqhMmf3ae1yCykn1AsyCkyXwGtiZFWAwytvceTjsLbXt",
  "key30": "3sdyAHHT19pkyLA2AiN5PtJTcKrgudgz8SY9ysiHgZNBp7S4eLdec7bLQBheVPJpxwAvMQLMbSTfVT9ujEDtTmdA",
  "key31": "4it6JcdTFJRb17s6MX3py1FKDVyTJ4yFaRxYHub2JeLHf6chczbXZzDCb9o54ZChXJyq1K5HsutnveG4Hb25M2rt",
  "key32": "5LWP75TBw1SNGuoGJasjdAbkPVFgKQtgig9NLvD7E3QnphCwm7BkFtHxqtEXsb4886kJ9FtCSrzLTw6TwRt7YmAX",
  "key33": "4PG9uvf8r4hT8TodACQkE8nSDkPSJ1eg117M3s8PaoYv1GfVegt4UL6UjzyRaZowQbFPfh9S9jSLrTX7spY9uJEK",
  "key34": "4W321e7dDwtjBCEVFzNMAQb9YHPgLCFVz9X3B8eqQM9KuyJBkHGKrCdS1g8FM2rPfqLFGq8pUp48FGfdq7fmM63m",
  "key35": "2HxqfSMivyiGmvR4C2QbsDUT5DwxUN6bZMr1hgdGnFRqtdwaWQ4YQbohA64PtbhMujkFctNJ1fjWmf8zvgk4pyiF",
  "key36": "3H393F16xDp72W8nS33uknC5ayZSmsXtjuxc32gjyDcj8JoZUpmiuG8ZmRNecWbmpmrhHb5HuD1pusVmeT6zyPZH"
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
