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
    "2Ta7wM7tgeamKaBD2yRFuovTxczmSXo6RDyU2r4XYepBcw9qwqD2cHqsMJd6JBwecU9zQ1pVT4aJcmHP8Rt74qsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NLLUe4vnkgj5griV2VtfBGg9JKVShi7DVTR8Djz8d8sb36ZEuB12iSTXuDJmgcnctNFBr8rCNWEVg989sXGBWu2",
  "key1": "2kjZo7HVZELubWxqQmnwhoENxGKhJMF1H9eBS2zPmystcdEebYpoQrVscmVQw63ajKbp8tt2ycDxabeyKHJV4DcT",
  "key2": "3tjeNujMcQ8RAwbYcdkFZXBaxbJmTA6p8K6A9NYynd8vX7uce7C7gmVhoLSwAx99FpsuhyKf6XwncXQmvyTMgL2G",
  "key3": "61wNkfvpnFkYeS6p3FeHK342BuH4bo6Hy6Hy9vcKK2XbvACno69fbrUo7HX4HJXYtWN9g1xVGBvFuu9cnfNfxrLg",
  "key4": "5pdh94v8LkixBkZcpsYLLd1S1vCXbDB6AvjZkN3UGYg4LtwedRdVVZT8X6W6ATt62h76tJfzNhuPVdkPtpZRTC91",
  "key5": "2JPQFjAcTuhCwMmHEsdqgNYJLRkqJgTVVWwKyYSct6pLDPCr5NnhMqfzbLfM6mQR2Ma1qfqJPRZ15oseKcbQabrQ",
  "key6": "2HXCKFofkFqPpwTPkuBWpm3koiTNvLELxATE6AFvGwGtn8mDyfBSfP9tB2a1G3zKE7Ynk9a43gPNRskpmZ7qVJE9",
  "key7": "rnCTTvrZhuaCJyANcpS4YhwrnB87faCCGimiKej4QDSykY7Ho13oVzf9gB5xgHoR2etaq3NX6a5hZRrykHaiuQd",
  "key8": "5YDFTcKv2c4uxHzTQdu5Tiv7H2mSqbdWxNeLF6cpSEPLnzki4VNwrtYZgbvLMbumYKUYqysqnDHzY5cfTaf27SqG",
  "key9": "agUU3iN4FTtip12oLGeWbpKc48KYG6GHS8YFbxXyCpuSsAJXKs9kqFyeFfMetdv4biQWFH2rr3wmdt2RGJVK1sY",
  "key10": "4BTdzTcs61CaQNBHuAQs7FcUdgAktnghFYtfGVYzgwzKNJZ7wKdMBXWxUcT69HVuTU4AHUS8R13n6svqMKBii3nV",
  "key11": "3qxGCqu5g2Tf6R653VfxqYkdi4xpp8JYKExXQpV1fm1YAsxzr3yT4YzhfqSiGV8Hp1gZEynMsPW7JXZjG1uCGkME",
  "key12": "39zSudCT1cNu7jnXwY13EAX45HcGWwoWNJKdgL6qadmz2iMaZEKi2rKjrCe7Fida36JkMmrYUnWNBTSCzsvvycFq",
  "key13": "3y3g1SoXksd7C1uD7ghakRaUyQp2yy2Q7yZHPdZz6BwtKjT9CsapBpUVRPDsDpzosbz3RFrpH5Egao2CPkpJ71S4",
  "key14": "5Nis7hnXF3uA5isTc9BEvibprPqyAX6VENuHpghMPb99xFqQBBa1vuKss74rzhapVyZnp6BqYm6sdUeTYMBZg9xG",
  "key15": "23bvNCZLAnM2qpvT8qhxEfdMe6T2W8WsEhK6vwTEcZb8nnFfeGsYT7Ra2b1xJvcJoMkSgSXoW3Qtfu7cvbBpzrGK",
  "key16": "4mtoPmZaEBQFtaq6prQ8YgbjSat9M59TVnGLkLy6u74JengjTUVWb8gjdYLrYqmXwehccA8caZeTeFtPFtZrrpjT",
  "key17": "2g1NYdFPQqH261GjwjLhbDuoj1py1em7wwnokeYa6mDN6AB7NBZsy4dTWGzTBvYzkaKvtKA4RjYn9ciVWJPvrra",
  "key18": "4D4vSFa3GkvPGyrhPC8ddySqwtK5QwBSBxu9xP8SThjEBg21fF4fV6wGTzpTTZAcyLVjQW6qnrEad66JGDrX4A4b",
  "key19": "rrF7ajy1RsAZftiEdQWXHL4iHaBDSGg4jwcj6VDXyjcVNQ71kLYJiVZ8yCqXGwqVxmwhiEWTEsxGDVaaiLYed6q",
  "key20": "3r1bw1oWQSVgFssukffWPmQUaamXDw8bEHag6MWbue1wmzq5eE763kqpnuiZ8h1bmMZDzXrKh8qmQSEDWVHrwzH",
  "key21": "4qx4MhPWBMVjc6aiDQbRvgYN7sUieFpB6YDKMz5tYsZzw2czM67t4EGYscTR5vwcRXpCpgL1mChKBEUqowGSKkgM",
  "key22": "26b7qnY2PwinuWLPkc55tTsAnjkrJ3Azs8Vydw7xEU5maE9JapWCTQTnh6Q51CRPzybbaijAodAfCCqNqcJZNUPP",
  "key23": "4yP3WUM3NCPqSVzUdg46qixAEmQywHCU1mjifLLALJCXR7At6PHjh9Cs1K13pKyrCb2xxM5nhiFsLs3MckygSywk",
  "key24": "57rmiAEayqdzCEwEdv3k5heuGdJC8eissBYDBDUDw3cN4c6Gr4voUTJK8nQRsFtYg39DXp8hTQFosj76bzSNT4VA",
  "key25": "1pXUWCjuwcYSET2u5GUAw4TQ7g3FoRZJFoho9AyCKp8rApMrf3FgX3JsWzi4MY5qDQXF7DofTNKy3Cra6QeXwzm",
  "key26": "2zSGSivTYCGCWV3xEbiMmFbo2XXM8fimFpA8bZDNXMzWpaDVVZKRvq5j4gi4ekoArA8yvcLjr4cWUT2dvvPtEuMM",
  "key27": "2nVJZKAQNEcjHDMYMdPDaP3KimWcfood2jsDUoNax9iX4FaE6DYVDLkuDgNTJM7MV1ocBdVTM1U43bAkrNBH2Zj3",
  "key28": "YJ28749PycpZRBTXvzBFyvQK1VMdemHQThuVTF6dsFXwj9NEATD4S36w1G1pBpjLcsvpc24tbMhqAvjoXEx5w6z",
  "key29": "REsy4Pw6dcNyM3Dg3CfkAFbyJfzoooHWUwJLwB5THgC9XMjR9cCcCPq3nKRT36dVmhyViQLTqp7dhjpcvnHRPYh",
  "key30": "oJKRxwhrwkGQsP4Z5vHQMjUdaMVriVce3vKDAB8ASnj688DdkBrY6EayEucwNJX5fTYmEoBGjZPPN33BfHMUPdX",
  "key31": "4ToGdT7AAchemsf7JFGmvGmrkBUkNp4hvYEBe1LPG2sGLugCGxFiiundNxEPa4hRgb3yNRJcAjVRBJZir4YUbSDM",
  "key32": "36dWUTZ75Cc4darDaDfLEDHT54v7nTM7z5CeYko2fDC2SQB6YCFJ1YSYPYQbR75SkpMGMuaB5bFGwvEeYBGPxuHF",
  "key33": "5uorey4VuGY9XB6Jogox4W6ZdXv12Ze2vGuvFCu6ycjxPuvDGJwUhqEcuGAcGwQtJNDGDnLJ9df8UBuAUh7eiZQm",
  "key34": "2iSLWys3UrQdd2ddro2djEu1gAxh9VJsyJUL1mEkxLkZDw1AfDQKQ2UiAWwePHdXvfKGAdfgVHAcWXxzfYg7d48k",
  "key35": "4wDkHBMrQ91tdhie9aCZgRLjgm2QigQnDYBH3LV3neKs7j8WYBvBg62qc1jjLzi1qddj35sFL9xnPLsiTPi2RyLS",
  "key36": "5YHL4ABzMmCQC8RwaiJGeom4x1s5szd2k3nGcG4ZhZ1QSquusN6z4kVrui4vVx9QKoTMM8g7m3THyxzLJygNm7iV",
  "key37": "3pi6hU5Azm96GE6jHDEXpQBvhqWbr7RQKCATiu8L588WrxvGbbcpdQUFbQiK3w7uMAcHm8c99FzE849nM7radr83",
  "key38": "2Lp5UpMqVdmtksMYbYPNTmRCqwaUaS6SCEY6qn4Nqku9TaS8LvwcwE2xkEqEj5dKeCh6AkoZHe645SSHsafJK8fE",
  "key39": "37CCTvhDrupQPbhwTL5e6wFSz4g8ALDNydyyDNv3HcQhKLU7gebbQRzyvbY2JiunAAuqr2UKFyokXZiHnSqgHZYg",
  "key40": "5EJbSwQPs3qMgurb3usDrRepohFQsWhhV4hkqnMbJCpUYsmNneJFYwTJYjtjPAwQJjE2vsy7kW8gQWwFhxioehZz",
  "key41": "xHVdkD6aLgcScEBuAK313afFwF7ecyMjUwydbudPKaUUgWWJvucrFJqZB6KzMzAKfxnFR8TaJazK3omWjXd6stG",
  "key42": "4k5ZaGr7rGWR2ukBWMQ4ZnrM8XzkYQXBwsfTjQVQAa8NnSrByk3N7kugBcCizMrPWbK6NAMnMnYUNpxMSQgqe3qK"
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
