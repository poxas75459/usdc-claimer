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
    "J5e4Z5XZD3TzeuEjXcTG8AuQweDz9e7EzvD8QfS2s9QaNsaHUDoahbFEyJVsSV7cVAcG3ir3jsmRfkfrMPwbyTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iDskH16emcvJBhvZqeNAMkYcGmNPdMCPsQx9aAdjcJtKvxW2TvQyYCfFCByNpmWtccZtQaU9ExggLY3EHQnAGsg",
  "key1": "55Nf47qocSG91ppQrC8qnCKFDoKYkt7sYyjTnmsfygcohRSiqNQpP4umDqWTG8vmF97g1mjsASPD2shrWr4FprZ1",
  "key2": "2u3TS4XLvQranvP7AhYmACDGLiGWNbeFkpYtyMx63fXBc4Ydw1mYC8PBJ1R9uKSUeVRSc1EDkxPF9vccJJ61MDCC",
  "key3": "416thp3c5yQP1GEiRfhB3FWZwwoMmEwkkCbrwUcpNhsXTBRwAomzu6CqukcFPjxAak2RDKogW5gqQN54eUknRKAH",
  "key4": "4vkzgXxfPLyt2daQWm3mmQMh1a81Z8cR1qNKPqpgz4eAeRQHnWdX7XBnrPv8bWW7SjiQYWVQQkGZQQamMcEDftk3",
  "key5": "4Ua2P4fMVjok7qxR1oYQroRVMx9hzQJwitNFc7EzYh4Bvo4yHzXXEaQA53Jpe7t9QvSoR4VU4uP2QoKRC4v9DeXX",
  "key6": "44tK5HWkEZJTzVsWuLqLsY5L1kWWPzaZt2Th5vevsaJY8ddES1nRbBQQdfGBkkMJ8oZgvpMnq5RjrcJskLC3JJbB",
  "key7": "3QVDR63nDjbLQ3tRDdDR1CNGUQuyNMoYPbyfQnzv3SoXL4aUhXuhi2tME2KX9zzkG9mG69YV6SjoKy93UCVycud",
  "key8": "2hL61YiqbJ5XHDQxazkvut2G3j67rq4F62414JCqj6qpDnMBeNZtawZERNPTfTRy3NfyJnoBLVnfD4fg15JsDTMX",
  "key9": "5qwF1srN2i4jewKMGUL53WrvbBzSLqQiYnr35ZSmSxE3UtVgj71sKPB657uhfJwktLikdQjbpDVnEWsgZ1sbZfvg",
  "key10": "3B9zhhmPPBfNJZRMzoMyTjVNBZJfcr3DbMqYVZ6sjfsAaEnBMwPjyTPrzTxBjuh3zSCqTb25BqMnxRzVrtvXPaYN",
  "key11": "4mr3tqYZ28uMy6khA2D3Tg4vP8vxuTxJs7jWXdfCwsP1VondGCVufdjQ2k4boP7Nt2wgL3yHULwkhE59q71rDG7E",
  "key12": "R5Yy3dAWyBBTcqXxfxWuGFHhRkuajJrHLiF9LH2NCfuWkeDgGDKuZBYoZp5uU2bn7SpM2XLEdMKWPP9tr1Hpnqo",
  "key13": "4NzDW51Fc1cxtdb2ws5QmWYNUHsAvppLTaHvhho15hZXihatuiqxJ4KcRBBeTTTsLmZYM3g4TyrCAxJChYRpKaDM",
  "key14": "2amXCZihndLpFURZpXWahmDxKfkvrVJLg6H52AAhKqaSynGDoro4CD3GvN2j4sGgaUV3w9i549YPizJrUZHgtkXo",
  "key15": "2CwEMBiST9qNKspmZe2XT1hFxej4ym7TsSnTm4svVnViMTUk4k6DfE8RBpWx7dAnrd3BZxet8b5pdMEfGcFZVK4v",
  "key16": "2GwseoGzq29zT8zT1zUh4ZEJgu8c3LWPmgkXSCkxCz45jkSr7tFpHBbSkA3Qn6b8cA6gL5csa9Hvz7wyhrT3ss5H",
  "key17": "2MxsoTu7UoSgJYyBXFYvL8tk7Djb3hydFkSvEaKgLB41aiyrrUXEbUhBRECp3DQeYBpaTYFHsmqWt4XCRvAuJzdB",
  "key18": "5nNHSzRmQRuZkiLfeR4m6zBLHTaYHC5uxfd9dJQ92h7LuDQQHd4nVaKq3gBDotTqramkaPHLu9UzEgdw5J3PNGaA",
  "key19": "2wTfRyckqUXzq3DcVXYn3JbZ7gpTNMMA27AvckngoABBhBDgUrfreVAiJWn9fqhVBXNCXNcvayXBxKSB8LY4urBT",
  "key20": "3qf5YKDhiTMhnnRuhx7bUY9Qfd4bdjF9M5wy7o69z2UEAEJ27WP3grBxiLk6ntahZFTAu1p6U2EHUHuM8PxRAvdC",
  "key21": "2fraWLaUGMsKEtcKLfvEWzGhqXHLTDE7KDwYcnHt9FkFF7ypG6ZiajKuBT3vMe9aykyCHL2nyAwLNiKp4YvC7ZvX",
  "key22": "5Z6Fmj79tyGenYpEvNvmEF6LUMthhK29i9wHbNyhhwDgPhuKKCVhBmWat4MDhyuhnyxKsJu4PDvgmeVRmWspCNey",
  "key23": "3FAhFLLQmRjmvF9TFU54PjyHJiCmBAwvgnE3eMU6HfsQnLawyzx6uPx2FXEYnCRk6bZgAZDpudj3EQmKjNXFf6Rv",
  "key24": "5dH4bwcbpP21315oC698xDbxUY37zM4jPnTLejY29RBdqoj2TvmE57te3k7kXnNWZpeKwGSJ5JiPwURwkXy2JFQG",
  "key25": "4CbNvmTN7hGtW3ka6gQWucpZiLYKFWAYkk7eNXKvQbCZTLGiMcNdBQfzokF9EadaPvBgg1EBnJQxL11rqfwxvaFG",
  "key26": "3V1XBF1JYWEWsXRd9RwDaWKiuBgN6q7kUq8BDhGSa2Bk42sjKfAT8hMCWNTBvUbtvgUPvHWntLPtrZCkw5rJPEnf",
  "key27": "5BgXoxCH7TMFTVVqdD8jQEg69zqnL5w9mMrMhkR4B9aanr8JF7dsUyKpssQ6kFpaWNQe5n366ZJbViivdUu7w6iG",
  "key28": "4MTFubt5iiwXK17BB5PztxZ54a3kRyQaDhVBvQiiKv6xH57sGuxyZu6tnUzjxCm9YmhVPCpKGx8iLZGrPvLG8SZ9",
  "key29": "5TeNzkejbWQEqyiryq2F5v3keUdieFcyku7TGtmwLQhV9xhKZGWCNtZDWJNFCzwVtkaecCsXRywYQAXq4YoA4pqJ",
  "key30": "2jHi4YZndaTyBanM2u8832BnnXU5nmpY854izJgDnkbbDdWTMbW1QsyUoxtUgcygPLgqkk2CZNvLnstf1UafkeC2",
  "key31": "4Kz2XxM6Xq32h1wcAsWxuA5x29jR1Pb5UcXdTN97nq2JbwpAKncYv2nq9rZE67DwS3Vv4sHwj5FrZyt5WcVSTXa4",
  "key32": "4srBFvGGqLwm3VvsFCWwTu4Yvddae8oDhp2B5BMx7AC9CLWaCTt23ySeNrfBGBZAwdXuxSCVnRwhjkF8PtvQTCQo",
  "key33": "5HMixp33hdokco1CZ84wp1YVpQcvxD5TatuqCfeebA8FgDUjBWjzpxTRJSJ8hktc8oxu5nU6HZSj43gCT6mdwthv",
  "key34": "25Y4oVwWJU6q8PpkMNKoYNChMnNF7GY87s8stmCAFPcdtWs6iEMbnegFfafSKw43iXb7aMeHAd2Nz9Y9VPHsz8VG",
  "key35": "5Cm9CwCPHMimE1HtWJmV3jV4CTG9GVWzMjrSdRw7CsYKH4AtHJQtQiHzAQ8cHe3WJNiNs2wTvNVagG2eMHeEHvwg",
  "key36": "2KmxrvJK6kmi7EwzyZivJfH5c79ozhd8oMcrUYTS19FDYRzPCM7t6XDWSWBgHGHSvGj5hC7difE3KEmScQZDAfWu",
  "key37": "3gqEPPTxR9enEpUHPXrACuzRgd9EZdhA4v2FSA8LS8gBL8H43aWDVyyP1q75XkPQqiy5fsXvCgirW6N5cP86tcta",
  "key38": "5meYz9obZ5hwSFDdvjYahYEnWGutaEYFN4E3eUXvNQtrgjFxKhDwhsdAH1qzj6gvksVqMRpyxzXJnYEik3TzUHQz",
  "key39": "5Mkx73Q6SLPkifoH8Da7Au9fGD3jZUGKw7eUwMpf65najRymN5VxQRCqq6fnWrk7uyXadubjBST9mcc4X6fropEA",
  "key40": "4VGRVDETWWaXBbitWTSST2yQG6NAaS41yDaggbfdeHtgn8pT9XnZHa281oxcx61NXWjxKFTrurwHQcTktwLTAg8r",
  "key41": "27wPLPdcUjUEwBmYzTUhZkwMh7U7QFBAEqHGG73oVSBayonW8fPLEpEdYZYQQHf6k44Lc1QVmeCQbeXuxjioPLTK",
  "key42": "oXvAG9rwu5whhmGXEPn7qjyb5CKuFTJdbBHwmHj39tGZBorM5qXJTeJ6a9ctaiHwnJbNWBWWCHk82QeyXNdch1X"
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
