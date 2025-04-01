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
    "4fWxFyFfMahPbqcoR5oYPPBUUAJjbZLeJTnSbvcdDoXXo8bHiyAVBev2hfa5vJGdqCf7nUgdmRRoNHaYZEr1qz9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7xj7S67fikKTukGtxqhbxf4Z8fBL3P4cCyGpBPpSJGvpmgC2djG8cBKfefWjUwvYFgPa1Buzh59C8WjvCciHpgW",
  "key1": "Tik1LxUiKENydbqwsqXZTeSntwC3gciPDL9KPAXeHPWXK6shrJguyubtZWN5Qdvoa5adkPqVSHymmT24iHfUeop",
  "key2": "4tVf4TfmF4Ncm3fA4GG9Ry3iw5wjKUfCTbytZHfE197sS3edhbFnS1egR3aG1JhmihiwLu9Lr4HmvYdx45A8tXR7",
  "key3": "4xK1biT1gXMbk66UEFBVxC8udWGT4hXnfB4GvbEF4UDRJhDvE158oxhWT58VWpg9AVdEZA6CirCNK4GMJiUSKFRy",
  "key4": "2w1pCoJTVEczDx1D95h4UGG5PJDvev41HKPaDwGFMxeXxbLYb7LYW3Kkknv5czwpbWNzodsFUez78YygeGXeW7hS",
  "key5": "5Ti7rjSNXju21CgZDC82iPnrPa9XJLum7vcqf51iERm3uc8bHQ9zrCY2npAVwgXErkSTM65g2bdvcHTXqgcH3TKL",
  "key6": "5BT9gNQ59tzgyFXuawzt8gxdXDYUCh7174R3aPBMQurcBh25VnsjqECQoUtCBgGewoVFpb81Nq9Ag7GVdZGoFd1b",
  "key7": "5cFuyEQwfm4As1ix58McoUptxhQ7EFdmr7Vm9Lo37a3zeZsMrCxJ27kdxtNRCH75uknwVYsVq8swPXcPoh7qavoZ",
  "key8": "3BKe58CPpDkekBLn8NLzEvwXssiFH1DXSAmqoz4vNQW7eXt7fUag3ERGEVtiL3EJr9dscdaU2CfLqcmXLRrsQ8G",
  "key9": "2fk7wjoiZb4ykU8XbMNtMGcgNZggA98fGsJFuYfocQR2srNNToqUMGsuMUKJbkN8rX4hnGaxoTj9GpuGvQcuma9n",
  "key10": "75phg5vQAEJtTdRNTz19XwARpAhjf391WwqtEwyNJC1ySusoUDNvExdrbcHLJxzRg8BX5uex1Cr5cFDtFhfJHQz",
  "key11": "4tbq3S344aJ7zfo1LaitD4nQbxfJjYjCw9LaY8BcYY4L3DH56aJ2V3cAqao6rWjVAuJC3JEcpWTGGoWaMJtxTypu",
  "key12": "4GY2CCP3jxo5UcwsJQdUkePnB6X8XH959Vi7iyGLWFjyeAokH4cY8o7BxF4qNftXgq8ncPPoFDavVVc2bdXNYgQw",
  "key13": "FMbxE3UxPJneZNCQAwigmmGxZBga953K5J7NyqAhvqNFydR1dzaQb21oZnT5NBujC6uQV62eLf3GLwkkxiwQjTd",
  "key14": "ykreY3GfYFiN4QW9Wd3Sji9312H17XJGZFPDvT6NGYdv5sqe4qjersuBXR9Zp57aEmhntLQ2XjYwyxbzdcpKFAC",
  "key15": "2vkkez2VkRmeEMvWTayGU8HBMQJ5YVnybKJNbuqccfer5vWgLwhp2by5kVwPg11LpvSVLQkJac1EGF7pPvNj7afB",
  "key16": "2Li8gMpNn9ooDbhtGh3XCQdWCT2oobA79Q1gc5FZU5iLQaEMc8J3iVC93Fqgc9S1xzMQ5yqLLm8E5W6xwP9kc92x",
  "key17": "56Yu1HFZUEmyck3agtiZiMsCVU2yGmwmN3pSNtbviekmnbMeYTxmvXTcLEfEzBZW71CWTePW9mLNQKuXTgcD9VW7",
  "key18": "4j4bYv6oc5VqNdX4KU8QGsTvF5GsdwUEE9eBjNP3LHcK59bUwnFUGqKnxpCXQWdDx7yvbgoXonpKakWyd2ou8b2s",
  "key19": "39wdEuD5iabpNwpKcPGKycBTn4kZpP7Qy7GSM6tR8oBc2zMgqgnUpieHi4v3E2CtkUhEcsf9jR31dfLaNJq2Es9T",
  "key20": "2igBhYEBS2LziHyyXXKiPXNrstkzsXTgBDMAL1o5sVHx67hQNeJZxyFakqSnBfUPjHCZrjwZ7niHFMyiZYUBZ9hv",
  "key21": "4aUorrLZvUWzTSUu4xmdnYiHXk3wkUJKhoqZ9Cdvbq5EqXYUAhFZ26dgxP7Lh2SxV2xJNgYsQ4ceyKrCaYmE7VuB",
  "key22": "5hik5xVFgt1fGHxUk1jjsuyrryMgxD6HgrFd42bKs5JauNgxyLTA4NbVb5zP6eEWHVtQ3RPZ6Z9d3hzqnWeedYiY",
  "key23": "5AjR8Badxy9TqnNvZQAMHqMagjBypvx1Th87GmAr5e1UUvwf8N9aGysoGVc79CBUvtqyns8Gi9K6oMCHRgZ4BYE",
  "key24": "37qGSnr2otd2yEsAXjKyAoeG55GZqJuaDtdVDzC5QEnkRgAvxAx1LJSrRiptsYQza8dQcu4WnSEwyfqxPbraXZdX",
  "key25": "2MMR5Mk7csWsfPV1jSS1VznH7cupUMZc7FVT27UJyMqTBZL3Z8eFSwsUAHgN2zHVkpxgsYVorYFncFzUAKc962zz",
  "key26": "DVJFj6cbo4dk4MzSXteykpS92cTHbemURYQgoc9fU4VTqTifK95wP1Q3SqzLRW1DYCutsknsEhhTaw4g5HacTDQ",
  "key27": "5AecfYuaxkvEWpzyKvaaPoHoazMV89i5fRzrZ59KJvqSAB4UuruPqLWKrgqKf5nrSvfYHXxasUDpPuijtZFMguau",
  "key28": "35LeatXYAfLUhoJV8V74zFpUCyKroKyW9E725jh4DCvbRgoVZ5aXbwXm6pLoWDn4nSwRW96mFF5n7W8k6NYSSFLv",
  "key29": "zyx4iywaQRV7bWXe3tBpbbtBLpxks5pazkLKqmtnWCbFfNbRcWx6BRnuA2uAnUFa8eSSDQvMEnshxR7HBVNhfmt",
  "key30": "2DtnBL6S8PGRnRURRnqbsT6iZr8Lm7VknoHmeVy7JKKZM3ykM5yPMshkNJuxPP9YNjx3ePAg2wLaHgGb3SsXg2Be",
  "key31": "24v5nfZoBgg4U1DKBtey7t3fF9E12vC2mfxykJypq1cLj2Afrpd69vs2SBSN9Gtm8kJJ8qwV8vxATCD5MW6YCusQ",
  "key32": "4TPngDYYPjee6oQ5Q3Ydmw4ZLjoHP73hatpSgWDd3fQ6ejNRm6FghdU7zGSxHgAJHSR6vxKJc29XLf4SakLZrPPu"
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
