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
    "wJXCSdQK7tpVWGm9ZALA6UyJiCgPDiHyi3f8NgmLC11XGhMNnRiCG1Q167jT7UqYtKPYTgAcoNEF4NEiP4EuPmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M7BBkzi6LwnWz4HBwBuu7MgM2SQncAR6jTF1GjAScuahRD6qFGPjoMMMAtXUVTH8SUeZpm26xDGaMfdyzpNL9Fk",
  "key1": "5WW36WHqMFWPgXg5HSvVFFNUc721uvX2cVxs79wz75vu8sw2YX4ZKQbrQ7hqupktnJCLffbj62WzRcqy53vhhpi7",
  "key2": "JYApxooLKf4rbRWkurB62YHbQ9sjQ1tScxJhbty82WMPs1RxziXEUpkudq2kDYXhKuFq2AuzhL3q6MMJdTYgQL8",
  "key3": "2AZs7EffdKnBgfNRwVkVfNMZR1tP9JPfoErHrQZ9BHsBWboidhTSefXixoVuzYjuHwbWKYHuc4GvtZsG7sTJrWN6",
  "key4": "3BcReGfGtNfHQULEATE8t2J5HPkJZAiuUzWccjVU9oUAAPytNu3hf7TqWZisdbW4TT1NZmRJuDb2ezfamDQYF9kp",
  "key5": "3iQH68CWWADnNuRzY11BLtLQaEDX4z8Fi3ui9jXJ7oSYiRtHT7b8Zv5RobrjTaTi8aeVASL5q4u1qpznFe3JZspq",
  "key6": "3YhS4EBEvAouR7GDPw3znLX5rzFnJ7eJFEsmAXcj6zNzuCCC4AkAv4Tn1HoC9ufnq5jUwifpUz21CVon4dzouA2X",
  "key7": "2RxHm5ef7x5r2yhsQApJcoEjrv3ezf8YQwucr85rKGsoKR8wqrLwc78SAxjdr16ZAPrN8z4codRTKhVR9deFig4",
  "key8": "ZNWktyQ5axqsRLMKmdKZ6WAB2ZN6sF138JW7DM4tVKmUHZ9ke2z4tAw3roaG7MLm5zVNp8h6s7BLX7ZqqHgr9A8",
  "key9": "CT6ivXEpdMkHP5hSTsDrAv6AwsYtToSBqSQUvQK35NvVZNQcN3e2SqSrsQZ6TsnhAm2kNYJmHofHtBYkx5JDfQS",
  "key10": "62X7WRQu1kuUci51jAJvKAfryMLFo5RiZVWc68Z98cpQkFFW6KHDPXnkrAnvw81qsoEHz8PVW7r6UkJB8BCY7AZY",
  "key11": "3HCCtmD7fBuuE7b9rJJhUYWnwTZ8qdVANwtxZKj13bE5b6jc4cm7SuPECfxj6XATZhXhEn9v4V7KXddcvKmSBjx2",
  "key12": "v5NHXRfxVbPM1zkxBiBguAxHKH2HvuB3qutXtv6Sir98wS4VmPhYQc2LkSzLnbFkWeYy7Nrurma9uwWje9ctddc",
  "key13": "4Eo6oxJt1ZvPAKKe7bK1592EQMBTyxyxDhn7njyatRBjWFVi2LTnjLZDDf7XiF3ZSwAznmSdJ266NgjdPcXryYhd",
  "key14": "2asYe67jQUEMJxMRFvpbg6PaRDCRhRTkfHYF7twhVUsQ9pp5mnZAHYrXirFkb4cExxx5NnnnHFCW9gNTcEww1Bmm",
  "key15": "2sGRcfxVk1W1HXvbpkJuPFx7khd5RPsw2G7pfPgdmH3nYpaPfvHQGBCRQyWkiMT9SSK7tXGfv1wgcBZCG5zRrBTj",
  "key16": "2HMPD7zpwj6wBjpujXyZ5LVHg2FxSTdfg9L3PQ27MAcQ4LFB18o51Wk4fgTnT5auFQ8JdpMFYy5c3JnwoyNzw3uq",
  "key17": "WNadkr3yqqYHo9AvRHAPVENiQ2NamZtbbJWphLqidFJoqLYLiy4fSYKFfuvvEKWeUhtNRYehFRbKvsAGNsAPhRQ",
  "key18": "3QDXzP9Da1ni69usXJD1QysQZXW6Xx2K7cThWPDo3bAMmmsoXReHrvDrzT2QncfsQfD8Strr3Ko6V3zJrdHskWJQ",
  "key19": "38ZvjHworSZx8Vahp2gPV8WdkdCZDXyrgupskHM32H4bHJpVJbZKT9ZiKrJbgGKkL9T5JFpM7VBrPrhoFbBnLifP",
  "key20": "3QGxhrXdZMkzoxfjau2G33xEV5CEq2R4wV3WSWSZtEMGpNMbhg1oVbcJ2XhFYQQArW8pt6SJjBoJE7DqM95WtJDe",
  "key21": "45iBzynq7o7vP7MEeEvAdE2PwbrD3myNkSP1TabZDUWJ1zUQen16X3DexrU9d5FGFb49WPUhbe31KLEGbZ7SsbrH",
  "key22": "3bZXXNhULtmyZLYtWyTpf7AGWtbEvZGeBh1umLaQNYHEPR272aEVvRU5zDmhJgZthbPvhmq22FwVJRu1giz7Z8yZ",
  "key23": "BB2HMV6roqhaEgTnjXCogSVLwNMrgTudn1pyWzNsJSgjy16EtYHmN24vi8JaLbwqJWkneZmhKvYvnxAXE22moaP",
  "key24": "49UTvyUw8mZt9me94mvFUiCZd9qPFeZt1cbYZsgcVSheJRcevBi8c5r9SCRk9Vn1TQErhSXvh3mjPZjgwgk6EcpG",
  "key25": "3KxApKaqL1Ca7szXzgHB8zbnCZReyBohUbcUAWCtPuAGETG3zGiizWntMq27dpmdaz3TtdJJ4vKhSEpEHuCvZdkp",
  "key26": "K2c9c6bzoYUo38kbB3KXQbnySwj5Ry6c1pCtKf21vKBbseczXEo36MQmiGbSnBT7RxpeGjGDPUG74485bNmLcRC",
  "key27": "ueb7FyVJVikGfGVLZ4G8FFRkeNJ8LfeUwQrAygzTkDwnFUR5JKbqYcwhiZTCj86nqTLPBF6YVTskjZiD8cPe3Pi",
  "key28": "665PXz7M58n6VtwKeCMqwfkn1L4WF8cXDwj7awwsbY2qRtMuYiX7R3piX4DVEA7y8pUAJ1u4pHb1KKUivgneX5mw",
  "key29": "57FRKLMgY3HKjkBbPpy8rct7yQ7Ab5RApYW3KGFuvHg7wp2PuaFDH9xVdrqNvZJ33HYggSQUVTtAJcmPkgVRY12n",
  "key30": "5v7c2VoYkBzoMCxaFg5MzveKoXqNbFnH6KPbAHHK6uPkmGwRijhMWHx3gDA3xgUo6ZTCaSh6i2h82f1exoUYRrBp",
  "key31": "3Qk7WeQrHLHsJpDfpYKbvr4Stze53gnQH7ojKoFX99jHeLKAHjtnYjvPEgADqAWMMaJzhqhZ1Z56Du4xmLQqNUmD",
  "key32": "BxhVq5GBVPXrwSAWejq9DFe55fBRisxZqs8WPwAqWfEAadbn8mxAFv74ezZrkxDu36VcaV212cHAqdDnUtoUbAd",
  "key33": "66Lruo5g6yk4asY9XvT8MsBfjsYhwGZoaEHNwLomGDZGtwyuGCjNxJL6Z9MinLjuVxUABxexM6KXGhjBSFffkK4N",
  "key34": "5sVcysqmskZdoShi3fM56XZuyX6jNepQMAFSyiaeiF1pjYzFaG2BM5XnduVq7ny9Y5vUV1BeYa9tDHGkkNyNxmkw",
  "key35": "4KjSMMhWVQCnxBxX2U5fvtYk7pm5c2odVuKZDxM7GivgF8uLKUh6873tpYhmfRbxaaCRCyQavC9wwHLvHC9EEUd",
  "key36": "2K9Ui17fvo7BS4BF45LgsX3HpALr4Qj51jAsWaBqFgj2MehBfNpqk6oMs8vYRxJrcTtVDXNxTQo3Lg6r2xpaDY4m",
  "key37": "4BFP2REqLqSuJZ9bnmDraPCsq2VNTMyhvvo2cEYerfrSoWcN5grZrmUKkBAnaw6QNPc4SSXr3xWQ6m9Bfw5RY1yS",
  "key38": "3jMWY8QMMcJ7UVVwpwW6eB3y6shXx2aVyUNjdawbsGUdRU8chaw2R2cYgTpKbyfwbUSUgeG5YqWgvkVeS8c66yaD",
  "key39": "5wZYQMpMEYqqLggFCYttA8874n5Zw1GCdWkyJF1BfLub2Z1ZZyTdvgVNrzyQjugXyopVmS5ifNkYK11fCmTFNc2d",
  "key40": "2LnsoFDrJHKscZejAAGDsZMsEL9cgjmqvhXZPmmivFhB3R4wUgTb1D81mj1mpJYXirdV2epGTCZS1YLPQ3LYhetu",
  "key41": "5vy5MveCC3hPPmPrgKMLTP7LfX8YTGZQYmGey55ngg91LVdb5jVigP8tQFf2ZUYrg4RLNTio89K47RkdagaCHXkj",
  "key42": "2sDKxF7Fmq5h6xFQDvQU7kxVGL28UtCw82utwBReNg9e6Ns746y9FUnkZy69g33s3knHY5wV3NsaH2FiKhuWmnNq",
  "key43": "RUJbJ5vKbEzy9prEQsv1KBg6NkywLPL4U5rMrg1JJ6CWPJgeJDKViYNtaJVqyhEpxppTvTQxSQ5LtWGfGkB2Rro",
  "key44": "2EWZVpzsEzh2LzeWszTnv9GJKjJCmt7KiGE1LfttNBT6BTn8jsMCPZGuBpADApHymZvay8vL7iYCkwkwKqM4iHR5",
  "key45": "4xpRpZFXr96XZgX2q48NBGu4AascwqBWZzt3sKpUeruMVeRRS7cy4Xj3m9T2PpsdUFZKHj45zKJepVxdRFbePw7n",
  "key46": "2zfah3xAkyFZ4vhaSKQ69xKPQAxjq5wZQw7HMVwiwu16tvMFJswRMSa43hqcoWkCftQKFqJjVgeP2AzQ9vGmFHct",
  "key47": "5ectF6dx56pd3BtufKyPHjmnfvY8g4v7Q6a58CWbAMnS3pwA2Ze3TxGxq4djYBeDhjMCQVqtHVrCPvdB9dJGjSKA"
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
