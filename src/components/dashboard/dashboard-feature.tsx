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
    "LRimGaopgKSdb6rYBCWgzsCP3JevH348A3r52aapPxkeNcKLWJNAPYvT32ZiDoSm3S1WoptMvCMR6HvLB197Qk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Qd8RneUouQ123ftL1rdhKRmfrWJc1bzTigQmTABBL8SYXUuvULQyBEyUHZDskJGqgE5mWMzBuhafd4aUnmcs4o",
  "key1": "2NaL1aA9iKq98Nzm5qwj4zPr75dPgGiv47PoD3GBJcPb9az17ecj59xweoLx5BHcJsHg2TuPxF8EKB37RTapgdwM",
  "key2": "3yB9EebUnJXmruf8yyHpYrn7VDRRiuK8jcjhKbr3hejxCw88F9oEWa3921PAFLDX6PrpSGfLamVUt7bkv8jVZWxw",
  "key3": "3Gsi7kEPQWeaoEhUauKxJokyKpKAj7KUW3PkrFg7HY5Bi2igeHkHwSmhWPTftxDUE3UsWydAX2xnnFMzWzYzhUzN",
  "key4": "438HybYThDXqShK8YYhtUXRtKz5MYbebR5kWZ2AamaYzL6FPwExU5ZoR4bfCe96u6vP1QEXSYudh2gALQgo5rMyz",
  "key5": "4V3RbohkihkFpWBFsiQrto6YVqNK5exK2eMLqGp4c1QovoZ2EparGVS1ZN4ctWXHiiaU9hDmhRSFU9FZFNM4rkmo",
  "key6": "mtG1dov7uXLEqonJf35GWUptv1TfHsueKjmGqTw8k5ckXSnWvgvk5cK6UrHRZTduPEs3jS1F3WHzigHdKxCn1DR",
  "key7": "2DazvSv2Nckyu6pWoWzJrMhpZ6PFKNPh2QrmuSmWiX72mggei2cgbowQ3Y3ERccFWBoGZ45oSa3X4sbo2tWfw7Ai",
  "key8": "33FmvmnPzQFzrhe2UfNtUhswGJKWpFD2D5M91ScrNA97vyGromJX3GKvyHdsv3j4pZM3LVjffiuAzcbQqPMGVHDJ",
  "key9": "pri7XDTxmrCk7KhSp5WW6ygNGH1iyjYdn9TC1CnoyJAeb1ig2Qgwd5z7AyvahTHntQNSisMF3eRFNWWnVYMQbTJ",
  "key10": "4g8TTHTS94uZw1phH8EWyDkYsPqYEkkH57P24iY2WHtUou3e5mZD6BKJTLCvGvmYMm16oFV5rVEsV5Y6oTdi7FpG",
  "key11": "63ecrvpeVobRpUeq6i3tgsyi1JxNxAHY53ZpSzSwruWuSYoiBCiGw7PUecG68b9Z613PtPTJZEy4ayrQx8Ca4cch",
  "key12": "595bvSUqQD2M5zFrut3RfXyQmSYRoWvgtmfj2NnNn4Ntt5XGZFCZ2mWLSQDhy3CM4XPWapdEHkjsGSLcasACZYxX",
  "key13": "59kM944cGYiPSQKrbJNa5QY8BEGHZvfGKGKcHdQynEwjU29je583wwzm4RPQKK4dWFD2souSXg3gfcBa76r1ZRwG",
  "key14": "cJ26zEXQ7seLBJjGZ9q7UsCZs58gWEdwfTaUmXDbzjjLKW2oHmYz8SJPGn8S5ZawNE8UEWAuttRBJuFDqNSjFcb",
  "key15": "4166FhdpgfjUnRLMSipo3f9mb8DdR9LrC5sq4pZRVUS3iM3JwymmoFe5EKXSsMvn3CZHXip3PFWuYsZdKCYtTGHq",
  "key16": "5tteUawNRxxotWHV6FbRFjVnG5R8MNQpMK8auoCaADQ5VEpQysVbjv9cxqhoqaYAzBps7wH4nCMKNC8ETkdMcbAM",
  "key17": "4hxuHvCX8ndwj5oNPHy9BdrLR7SvJ1nWKEdKgi2bijPquMUU1vTC53gVkWaN29nhFjHdTCtshkfvnHt5w93L96Ff",
  "key18": "32n8ejYVQf2prWfryW4saNEaa57FTdS4ptZeKqewgMdg7e76Bk9UP4ENwyfMDYYNtwZbZ8VawufYF1aE9aqZaus2",
  "key19": "3Vc7j1dnpF83R1BSJWMkCWrYPheCoaXprUkM38gAiBH9go9bDBsTuzsAmgJ9amVgiKZM49SzVy5xV6BDRAACGGQY",
  "key20": "5wivVTS7R6wEYUS46ChPsd6L2EAreGEzckgSHCX9sKMp24SX2ZYN7jUmRs3QVEs6iFaFJQzDCzJEbnbN2qUSkdHv",
  "key21": "PpRsVy4KBtfjoT7cZbvn2pgkNjMKxwLZ1VueDHnjKeHcuQnVbtuRDkmeSkfcY8inmAHaaV6Q7saKVNnj1Y3riUT",
  "key22": "4F9rC4ZY7mNQyrAfuTkd7UjGPdDQ38HnbPfkGUJfDrTcsHbtYxiiBeuKdDBQNCt2Jc5u4SfPUKd39w6DoukGQDAq",
  "key23": "35XvU6FprYfD641fLkUqjKGVYhZ3JmZSznbcdcbuwXEPuHuUTwigkNb4kqR1UBDZoMgqiU9V4imrR8sCPLnHdoQu",
  "key24": "5ietm2kR2duhHEdUrZUSwPu7Z7dDjnCwMQ2ZXs43igdcJTPpvEEh89jGnhAWbzmMKGaujF4jnYacvCW1SyJW1gwt",
  "key25": "2dXHs4FtuPujbTXv9MXmRciwEzqtwNLraDdzsg27y9zkFoiohK55aE1bTaQTremKpyxbGTL3bWqa9bNWVNfzFZfu",
  "key26": "5VAByNKLRBjEYtssQ9Rh6GFQeFDiC7TTmM6Jc4pnsyN8BZMVe9XsHikSVL6UzTZxv6TojvXYbFHh6op7Vixa6tdT",
  "key27": "zaVmGyiXKdgu1X33qrA5BZSuDkkiSTkYhyZiqAXSp1zVsEYRSqXX6JVXsFTF3Ujh6saJWbtHbTujUtkejmTP9z4",
  "key28": "2UY2bet4W3jB3p49SWZVP7i1QNJqXH3HWdZ44NdZBuMdVRucNT2XtrVz9EAQD7MBpm7zTWH6eBx3duQMANTcrJ1k",
  "key29": "5X2gTWRRpKLzA5aYRZcKwMVmLC5F91tKZH2FFABiMe6fiuN7E9CHKtd4HG8ctAp473pjVM64Kb14SktpoxCTtx6u",
  "key30": "5fH1fpkVzS8Z453wxRRGfPXuBSSogjeVxbynxV5i7Wd5obohHxiaVEettthVxCzb3njtBSdr7eBw5FCzr695secW",
  "key31": "Asn6e1DuQL5QsnJuJXaePy8okbPi3DwxuFe1iWspSy9TtTShYmjvgTpsxJZCkwagREohRbbu7tn7MthjyRtPwzc",
  "key32": "48ZbgMMcTqcRcCGJsqnesFcdvcd8LdsBnMXgxrqczcT9YpBGjSC2igMyo1FpSLVsb4wKKWYpk1cpyHGE7bCz1xPm",
  "key33": "4ECqN3wfKYmfrgGs5qC7ak1ar5YimSp79ZY8uvdctVDdfeVPgxsz9AkbS2BrzU4HhwQh4UWLtghfLEyV5aFurX8T",
  "key34": "48igPrhULUbxHU7PxGoKTDBoXPq76qvwR2Yr3ZkneS71JqrUq7Bs39DwjbnufTNTttkJqTXChPgJYKL6SVmPNU3s",
  "key35": "w9dJ4KaHxhAEXBgazrcZT7finKRXez9UfXynBcr9sDFqqFbJXDj8ham93MaSh8TqK7sSpz7TJn6zGtbX4Yxf1HJ",
  "key36": "2ZdtzuoxJcrMRR6DjUDM6reTd5mNK4APdwTKydvdi5SCsSxkWVMKJjNTJ4RyKqciU51g76HCjtPLG47DFdZkHn2Y",
  "key37": "3MygERhC7MXsCrdoGg1sT62eyWhCkQF8aSfVwEsfwNRPdsjL1sMVRXdDJk9E3DC3S6ssqH9CNsXvf8Fc6X6BPYp2",
  "key38": "66NWqtAnJnyxTYBCpCx4dQrFSNGFQvmy4SQipoMAgL8vVs1YE5qeZWvmibkxasBt8yUStkBUevPHv6z5T69TKv6K",
  "key39": "5XPbR9KnPnWZEXWRQG24A4Pxm3U4vdhuPWAj7QrUDkrbe92Fqu8MXyeFVPGmCjwvLq5c49jbzUwXF5X9ALph79ZE",
  "key40": "55Aq7NhYG9PGXQ5zqmpwpBHd3VBM2BS2wnJLjVztKa5dRCfAjE7Yy5VEjzUfdT2DLabsNSKFvfWZMaWbXbNsy8NN",
  "key41": "5K8YCusLPrsSgCgEfFvpK6Hxrv8Ht9qTjDyAzgQQAeBrFFgCo7FZgZ84rG5SjfWSX1QzcHvhEpJZ3LLJUoyDkwvU",
  "key42": "2qXNEzuHbDgcENoX3F4UNXxJfipKL1vV6nDaP1ZUB7UMX7dxJNMYjZ9NX8MMvLWPSQk32F758QXyX2kMRyhXfGMo",
  "key43": "B477KZ24SkgCX3LEnyf1iKmdjbvBJcKRBoWXKKZ3wUP6sj7iSUo1RvSYVLtZbjpAMagMqmPcybwCmFTQ9hYvK6y",
  "key44": "3FXWpGn4YCJwjDtee43uw7ZWKWivYAtniXKPHLnW32Qwptp2xjRKua58rgTcGLa7UUnfwRMSu8urV4PCgDBZ1Ga1",
  "key45": "25PaCdEFLkDtm8cT8o4a9m47ibYWL8E5tL6uq5Nu2kqSHaR1fVrdEsMfjHpvByMNVCfRk8EzLEgCTgJJgDy3vaAX",
  "key46": "4kL6vLEEHEWLXZSXkSWXxhNFraBTkRgcbfqkkY9xAzKvznrFyqGxp9XkQpMWS2j7XYrdTsxKU4ibTJGWT9B9S5de"
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
