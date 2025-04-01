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
    "35TrNNSDVabBGR64p3rejC48C6ZyDmqSt4NCuLYrbAWC9y8H2mrVBjVdRAnncZSWHYS2EdFstkEEjx6PPTysxZQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5VhTSFEANTkw926vjZJ8YPuXBqUY7fHe8y3ij8w8yZjaSTYqDofp4SyjvLpv7QyEzeiobKAmKAEYK8kkfiPuam",
  "key1": "2rgoUPdqfA8KBePcdWYaF8Y9moV8i19XasHFjGMbtAvJWTHiU6d9d8ibarQt7EKKj19oFkk1CXNLw5H1DGfNZim7",
  "key2": "66SjbfgAvaCxT4eDXKPnwxhZR8TKCkJYrBxgLwpEQYq91xqDbuE41i68AZhyQUTkDDvqE9HPHx3NfAxYgHxNs3Wc",
  "key3": "2WUWpdfP4BdML5Nkg5M7f6Gsm5xPsddjfuBydQifxYhMnUq369qp4KxnX1ctrdF2osT23jXxb8VMT7jHJ89X8w3W",
  "key4": "Jq4PpQadkmgij9f1oGZBx6BTvHqfMpM1oztgJgXqKMJhJQMvG4qAwBtQnLXiiv3UnkLF67zQRfZMuiqfWi8BmBa",
  "key5": "4AzBEGKDP3aj1d17aXomdsZE421aWNQXGbPRnJPvXNiuS4VwpnZ3zc9AE47qZ1a8AjyhfxEgYFX2t2xE3bnsxYKz",
  "key6": "2MF8xmtTbZVrMmqjvRRsQxN1PGNwW7fKHpiF27qbYBGg8Wa9ZYeCaZV6yVJ5h7zHuvDHvm8kqDcFv9M7YW9oLoja",
  "key7": "4j8pPKd3gUyWd43B9snvwc22bzKUDvHNWCN8PHW6zchYukhCTLstu5ACqXxZt5fHaJWBGX74P8YFCEyqKYXFJv2J",
  "key8": "4RWG24NjDz6sPnCRVj4Xyk2XKigjkukPCk1GxoW7QLydyrTXTWLdHEiHYX4njhm1W9X7Ti4dxDH6c6w8abzkbkYZ",
  "key9": "2z2JopYPGnvCLQUvrwuj6TqDegmrVPDHEuXKJ7T3yNmh5gj2zudvYyAwZju3fUoxEG32fpRvLAsnbjYQaKuKbZdK",
  "key10": "5YLbSoJGYyJg6di52GDfLEmt6XLiqb8yHKxgY4zyxFPxHznAfs6WLGKyvcb5WcAEXfxc1My8MDZ1vajavHqu1J6e",
  "key11": "61K9om1D8bcdxah9f9utw3L2UQ1Hj397ktxAR939eHmf3WENyXoYSN7nvGuxhvBuwJxVrvgDS8XdNVC7HFt9d4Ms",
  "key12": "3tnsuL7KmyJ6cnC5kte8HQewL5W8miZyN5tEH1aiMSYgZsUq42dw1NT2LwuC7p9vKrt9yai2NdPuv5PKfNfdiFpa",
  "key13": "2JsySqtVk9uWDs9Pi6P844jG3iS7ie6ncp7ebE9D8o3yk9th8WgSv5izexZJzFu2odsK2ihTsMiEnASntbC9GZzX",
  "key14": "66XJveCpk3J4VRMNfLxt2Lygf3wxsbZn7xtEyHifKk1NX5gfUXa1nNpqU97X5gdHF9HhWt7b2odddqz1xwGwkRWJ",
  "key15": "GQP6iAJACYtXdhxNKYuJjFLUfZEy4gZaJ438px1Qm5PLJLofQTEBz25jwCxd8x5Fq6k2MShrjNx6YWGD2usjicv",
  "key16": "5Ng5sXdNGGRja4hLqF42t266C8GH8sMxf81HB6nyZMwrixJ2kh77tpEJrARRr7xk4svtaz2sLs1RjDWwoyPHqbsP",
  "key17": "2YMuarxCRQtuMrmbuVn6fMciYiWPqESsZhmWGTs5Va7MyvxKDuG6iob7nv5boU13x63bag8z6LyK8gBKLYsqa418",
  "key18": "2wA6Qm7AhNJLAPggT6kmFYVTffUKdQcsAxiDJBzbUBz8ErmrWLVPVBNBB9U4LNsaHB5gndzGEqbHJHh4H2nHwN42",
  "key19": "4NR5JuEw1qc4b7hyhBPafs7PDzRZUNPVCPj5N2utneiXubg5vLaSPejbDpsMpEUAZpACGs7dAGRyFT4m2bxdpuzR",
  "key20": "9iVf1M4fPagrUhix4PMCb4zTrKgXf8QbnqxeJ65TUAG1HnuU3Az4zDUi3YHQUbgztEwgMhXVVUE8AZ2TTsr7zsH",
  "key21": "24anzcJJYGxKFRpqaz5Cbn3oYia3j31R4VHRNxh9eyf1nbhau5CDoZBha2NuCac4ciSAPJ2EZyjDKtGvwt2a6ZnY",
  "key22": "59PxtRtqGtEK1sYsqMpW5yA1pcQ5k4sre5Su5zvxzppGZDkDq4nqBDHytdgdb1LBfX4ph66nVg6ZJmLwv9PMaeYh",
  "key23": "jt6MiSfUHZLww4yBtmePfgT1WQiyvEMAZTAc14XYmqcDyEkR5U8jmtT6UAWYbUSUzcY5vcVkKP1ieNULMBZgcNq",
  "key24": "f2tDkcmpjq4TbKjo5PeE6jctun7KgFGBrUYCpWe4q691Bk5UoUV3yumTiMbDqpEx7A6Bkme1HkcjNW8C4PEPCpf",
  "key25": "49fewjo1MFa6Qok6GJmsGipDUQF3JPRSHj8LdGPjSyW9mUYdto9ZVNCqqwMDR73wUkxQN7HtBARXCgfm3sH4hBh7",
  "key26": "4Lus9v7HB2b9Xgkz6BFfvt6iiku87nrJK3BRPSrRxzNNA3ESvBVnMCahFsSQcdgcf86egcVx1ujLQiXdbbHRnSPQ",
  "key27": "4HHAGxfb8wZRnfE8BNq8hUwTRYuqv57rrZhsQXka5swXi4ttJdjxzbj5EgccWkp71ys7YS2Mj6dquxJishoWCk54",
  "key28": "5St1FNYZ7MHrM7zLWaSXURpwb8Ucp7f4JVAgrxQdjD6PP2tV4Xk2BchdBgDJX5b4SYvntCuCTHoXeDKbhszZAJFy",
  "key29": "5EowR6D5opLxLAPESNVkBbD8DezebWXKTHoxgTxCUbs9A9j6YDcb1cvjsp9sKyYxcjjUeEkd445wTrSXiXhcgw2a",
  "key30": "2UyYwCafLr6rkPXBPYSE9DiuH8tFKzwqzCnLjm4jaMwnpLWvrySujp99m72WpQ3kBJ7DjvbvSfApzvpDEGqYphQ2",
  "key31": "4RuuFCEd5yeQLxq2pbvEb44k3qRbSLxAVWmwUu3GvHhsVGSP42WhjQvGdmXe8JXDAsmEnE5tmvPp4Jg9NmWW4AZc",
  "key32": "3NC6DJhVHVoYRtN5imBiVvwDH7YUatwHYjhcxQGEuhxv7Jio64TmLkpMVC8ytbEmqMK2mn6DxmGm6uKF6dgDyHnw",
  "key33": "5y7dvz2bjU3U6gAn71eEwTf4yBNLjCubKFQpPy891TdvEQKdiiivckJ35vzrWYgJfhmmTPtoCCmsHmQyFBgAZsor",
  "key34": "5JcN7BxQoQvd9UnTQ1o1x9zZFmQx7ghK73h52NviPoH4DFGGX6eCiAVXGQGsPry9XbxK2pgWnWJogqRaNKXQHnK9",
  "key35": "3mkuEeBhHiUHXdaT7Jb2MbuPp3J52dnkcasafAmJfRA5qW7XjCEQc8W6sxqSaBCc3EmXADxcjKdUKCLYBARwhpeL"
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
