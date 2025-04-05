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
    "3qdge5KJbP3Wd29dYgwCm2bbEbkuJzaNX5VjnFZcQHVszCD2thjwKsyJbFvBa4sxqk24qH96ddESiFhxMXU8t9yB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36YzuU6UqX6FJJGn5iNcnrryJiEtDhqCHVzJVrkgbLP2R2ejzyCZPo7B69tyo2sUXsrGBvEZgzYS3m6Bp3sg4dQP",
  "key1": "3yJtwXrggXnVPhUWrJ1gaoJn9JEomRSZGQd6XMgj9YdAt3EiZJeU4PXfcR32VREd2bQ2E3NpQWSf1VLu2GApmd6t",
  "key2": "5nCStRkYwtSDbxHuc7bBFH7hAxXUPRCxe9RoEK1f7dmsSCJuCCwfQWkuSJy73Ng7KG4gGGvtkWZtTWjjKoaBkM3b",
  "key3": "4d8wqiTVLKsSyKnUeSnC3KNwQu4jmN3bU47HTbY9q8MkJxMsxo6kvJ7uPRADSPZVhe9KmqAGiuU3U7JZHirt7YPn",
  "key4": "pV6MZi3W9KKoiwrefLWPLJ1eXda3TysdsYTmpxfEVRgW6PwrEMk2tWeop9XkA1WyTZnHCWD1WHbUArQLhxHN2YP",
  "key5": "223i7wuJQnzeYCPzZ5BT2V8pjqPdyjPaJVygJMJD91egvV2XiMpJAuugg27Xf2xhMzQjVHY1xPHzFPpJouX9XApf",
  "key6": "rQNPJFp6raWLFmAKUvwVESzSRpXGRqixzYd8fBcBjG8TTakCHT8keiakdJgfhivysUASFTUy5eKVe1KMCsMfqB4",
  "key7": "5ezuCx2uXkSjMCRQMAMCy23iGuAqthsmML1Kzsn4Hx9AiUhjD2U2YuhWwdwsJ48KbCDRwioSkJaBvowyXPvkw9aM",
  "key8": "3vsbM5Msh3t8nd7wwvjVqw9JcSk4TH76MLx7eXkf7XYXWZcCBgsquwKMGN1dHBk4b3ZWwYXpLi9X7Tv2aYCiN2sD",
  "key9": "26arQfuAJFL5WrWRBkuFcZQyS4ajw1q7ZBhSiasgwUiBQeFT1ihchXWGsCD6F6SDQZizPV7PKB4Cw2T8BFy6udjo",
  "key10": "2yk1h7Bni8Q7ErRZNeojMpykN5oM2VcFyR8yY41nWXSzfCad2K2Ypt4xJyyoh96ukQdc7zaPyxxeBtY8gwLtM6aG",
  "key11": "5Au6vn9CTFFFeABefYUWjHd3uJmzdVuPbWTfaafLWMkYVVU37vAL2yD5bohUSTdF2qJsbCXdSPEKAQrUZuiFMZa7",
  "key12": "2W3LV3Fi6bqfkuLTcd7xhFZ6dBkCGUFeDceqndjg8bGgFheaC1kMdjdLJRr1sLbNKtWActiEZcHgi8m27prjVpvi",
  "key13": "4fQvwDh4qzsBb4SgWhvfkVbmnoGq1ckicpxjo2JxE8y8xJ5HzTVhKAZBEmPXeSfqqjWoSo6XqheF5Ee8sWw58Rg8",
  "key14": "2P699bR8WFUug2wx8s5Vo9SxJQKBAbMcDTYBxV7QhMTzyDv1i8zzBAUn13E5AjGmzGuNLYVSrMLTiuBxdRAYXBNd",
  "key15": "x8wUDbpomq8ehFCz38eQhaupVz3UPNnaZ9Txr2RrbENpK2x2gRk7hpFt9qcAnG4RCHEueQNeZdfwynwn9we5btR",
  "key16": "5PQNG2M1MR33FpJ6UvacrMz7iEzeyW7yQ4soDmCuXYhAGk55v3p1aV3iMNAddYfxuUZNTxNz1NiVCTmk8t1b3qWb",
  "key17": "2xZubcugWxaZsv9DpY1Q7VsAxkF5A6DD9qAX1EkDcW3QUgRn9LND1retthpJaFSH5UkTUQ4e3ZKpvHrRbEnRr3mB",
  "key18": "2vhtGkYVLscrk98S3fDfnztqt3J1GrBZ3obbmCCPobxTC4TsVQa1NLEnCPWCVaaBpKLFhWeKya73FVZWxWuB7kG8",
  "key19": "8YB3zxqr85QnmsprVDy9dmHj7Rp27hvEGfwki4dYh8NtJ4CRjq25sV8ym63yU8Qo3qdDEJmyaEc3Cj2uZcYDnGx",
  "key20": "52UfWG9XdeGqCe2TjrHrtJmD1cu42mDzijyXgkhowYERnmgGVBLpc6N7T85urbVWoCZNBBYsGs89YgUV1KcTkAET",
  "key21": "4dAf4Bv2w3BpxLLV2Xdcsk51A4y9SkdgBSG9WUReHhxLQLYg1tzrNtyt5e4vqRWSyfAzKoQ6vHcycX5Y8ak5NdWU",
  "key22": "ks1gQZDP1HEFmxmwfoLuzYoqjLEU1VVpxLVYwYTVKitQdoF3GSJuJXLJQm1Fa3ibYr2Wn1CU4Ar1XCbbBphHsFs",
  "key23": "2yquny6ZaQv7kiep82A6rqu4xpnveeXaDw8Ua1UBMrGVma6moiBTqpJCZGwU75MMizBKMpACC7xVDK4586FzArcz",
  "key24": "5WuFuyZWd1MGLtMtabyq6e28K2xL7VfNdhojT1ugmHEyf56NtwZWN9h681X5JXPnnoXpnWS3DzVj55eYVmb4Ffee",
  "key25": "bWpR19jzmDV4yMvNumritSvXYdzDyF1s6c3Vh3ahdgM5U3dmy9u1uTS6nHWfuNLvhbJE6FcnhG8TVP2VcnbaqQE",
  "key26": "598VixteRPeEWBGjhbjy8rs1KhTqm3hCmGc9dqhMBwymmvtMCuVYKTqMcEdbQxTnZH9r4wQudt5UhZLvtkJCUXuq",
  "key27": "5TT98QSgNbQQ9PPnhcgEqQNomWZcCPZnLLk4eEB9rs5dnFVym58kkzPgePqR3cmZmX8eVHEo4mgDGWNhe15ddMvQ",
  "key28": "2KrSvF1GR2VnDEi6xVbMZ4jrxGMBnAQ6F46WNGKBzYbGyfc7oTVetrs3UzfaQhNUpKifKaZxzrMntv928HyEnUUk",
  "key29": "3Nou7FpATawoR1m1BnY3u5RN9jHdAATTWE7SieAP1ofgaUxnHhe8XTkiu8RxZXbFy7em1TYN1ep1UizNr1rQYXtd",
  "key30": "4GpXVSD6U6veat1q8fqynhToiqcpqhPQJCWYx7RVkeK1Kv9M68biQtwA2g5ggGchpVGyRrkj1KcJ7hAzLkpwYbqM",
  "key31": "2pmvBUXjKugDQcnhvhvN7fqxqQ7gb31PXhTUqRoZXv5DGcatV1VYvCbBWmJzBceBgYvb9BxWTjztMW5BtbVtstwC",
  "key32": "53YThotv4SMdW7cAqruWdo5ETKjiVpY2tcaxFGWrEEPrpzW9PHfytiXUQgK9czHJRDQWKsFwgRR1HsjVDAE8dEXs",
  "key33": "5QCuiypY5iMq8KLLNEGhL3ruqB2fB9WoxF8aqrx4HT3ou82CTbW3yhnebF2zK9yJAuuDXdXdYRXPHGxuM6Hx8i2p",
  "key34": "63bjwLeXCcAxM5gUeLa6bvMdrmSvfpTiPNWbsiCYeHiff9oxGYbp47EgNQbJPR48Wyk4XhM7fFEwUve9PouJM5Ee",
  "key35": "5jx5KkYUu1mUw9CrSieDmEWJYNHR8499BLnNFBEvgJGGGhjoQ25Yqw818MYVrHpsBvaYeS9eKLUYRcUmnwy6C243",
  "key36": "21pQauKV4VHTK7roHHExmE2hzTwBRQoycsvbb14nhsBFfvBcYL75ygDBvZvuLAExBYmKmk6ykq8AmWgSLFNxW1Q2",
  "key37": "5k1G2mkavRbq7ss4Z7Gku4CTrFpV5iZnmkqJdvgQxZb43JRtrqj5TyrrVV4kkn55ydHuetipePAni97owmjgAvog",
  "key38": "3HaR3o8VGKFz5q8H3P9NKS2gUZVCox3PX17JjGmBqQw7ZyPLWTy5emSTzM1GCMWs2aARrVgTrWbGe5f3TQwtLAZi",
  "key39": "31zFsUYagvGdiWsH2j2GQXi2hbtY9kY9wiBHonKArPhR6aagY3haJZTkrBu6wRdXk5WHMwx1posfXreUiYCELZpk",
  "key40": "46fkKGjcz1kEWipJXgnAvakmXVaYo6jyX7aU2kCWiUrwsP2NptBWfFVgZgWK8WHP161SziVxterVGj87NoEF9m6v",
  "key41": "UEPynrVT6MU9dX1QrsBUngVhnXgSKHJGqQuYDrLn2KJUhKLrstRMQPte6TofkHAi2eZQEo6FeTdB51H29QYz8Aw",
  "key42": "46v8pG2VMnfC8PnqfYLRwrz8fRQveBpUPxqSxJk5mKDhfzhACT4GqhwoX2RoVu32TR4RyrDnVaQscj4DAqkec1U1",
  "key43": "5V6NUXyZaxyYpzoaZF79FaDHPUvAx5rTLSsij4Dbp8jiZpQyM7M8NCb4GbsiwnuUC5nyj4r85oqA7aZWJq72WJBi",
  "key44": "4AUUzgK1kAsHtkSaPgJLmEKVDUpwdtSbCUjAHJwTfb1mRBGhPN6CgLV2v99ueQnRcQFHHSW3zUFHumhuYcVdwJTz",
  "key45": "2MnupAYDDb67cwF91GzQNBB9nsmyo7uKfRdntksgtUGccvkjM4eD5kw9stmVdjJ6e2hWVbGLFsouwTk9nY3LHNJB"
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
