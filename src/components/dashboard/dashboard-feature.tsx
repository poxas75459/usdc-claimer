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
    "4nd8ynm3wPytBLGQ4njU1ogbamLWr2vsFusvbN6ipsCSe77hfiVDhJu7MfAHJtaoAuBoptwcXLtwbivvAf2DJaa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ZXanvKzR5AKYtTnaqp5Ky7Ea5n2sCs5V4bK9FPKWXeqHnMNUAX5BEXKhJ7MN3qjvfWtwpcJsWehZSXBZVyBmvu",
  "key1": "27XWDGKT6TtpAJxsBZxu2m9cmNCpxxnz1gHeddQhL2gLG4j4DhSLvuVKWg31Cs338PwS7EMCF6JfS7zHFHdVTHkT",
  "key2": "5rm2wFBi1XJ1UWzWKqFKWiku85Vc5umNLM5AfV8rHxVAFeATVhSbfCD9t2ydZVyPzxnY2WQBWAWvScfRAxh9Xtdc",
  "key3": "58nqtYrY1oxEgSnkM5w8bwXBb5Rgr2Dm7Cn69UiChz8SAKF5u77D5PgJbUiorNeTmK4bXEc9EhiZxikQ6ZWGJxn1",
  "key4": "3iqPxfUnB5jkxCAELwm3VgKZJaiFrxB163sBF85BnxaBaULzzA9uw3L4MwuwGxthiMxNcHUS6u25t6wdWmAANf4C",
  "key5": "4vaan8zUHp8G6N63hPTCNWTJmotmUcWsG5nBA3KjVJaZ7UtvDPdv2catmB8gToJoEbUkSiHfv3nRER8JtiM4SabQ",
  "key6": "61XaqRDjs1g5gPW9mchdYS9c3VvhPfBVGhAawS39jmLzh4pMRk59Jk6MQFzyMjKWv4X7B5imRty4Kd8f5sxWRgWn",
  "key7": "51N24Wni6kWChV7b1Fnt9yRtpNcPGaddnEg9ybvyu9NZP7UE5yZXKvpWgz9U8rLQkJxWjc6f49cLb3umCqjWqKdj",
  "key8": "5JcECjusjQQRNgTVbyjS3djpuJStHoDE8ST8DJuifNyaM2Ye5AKTJLwsYyeAEocRPDGeJFDZRzSFZjD1xgShkygQ",
  "key9": "5w3KzfCN2YVLHpCg3bJgh8hPKP8M8MJ9tM9UFAzCJdf3NdPJzk2U7zLJLdmCjU7mDu3MG69f4G4byKimHwEkSuHS",
  "key10": "3gGPymVxa47eHu6nzcthfP67nFMchSTpCUrDQmJ2bn369dVttUybibCKU7s7df1LCAkVgWpA66TyTv5W2LzF84mK",
  "key11": "2XGMwUcDAbRXL7Sn3iF7uQCfPie9maW47VP65YCnqTr9REwKYPCT3cohPLqNX5yR4WYso3qyrwt3WTrHLraC2xY4",
  "key12": "1Gg78H8tnodNF81ThVd5pY3H7xhjVuzsz9R6uY7B2tS6fZGQmDTr53cuq86TJ9dVDYWiZRcdSUvTAruzQVa1zoK",
  "key13": "3sehMJT64UCefkVqddDwUjMA3MFYxtBNgPdPtTTLqLfF3hi6PxbWC2RcvLELGiHz9cmCay9ED2rQtYogMTz8Ez8y",
  "key14": "2uUnMUHneKLXzTjQERUt8nZAS1qHb41hnFLeYHYVbZQ5TYWdWMr39k2g8ZvgNVKpVQFNt26MUYXkhqEXTeS78o93",
  "key15": "gZTUcvKL7dXkLZLBWwCcgz1gAeXyrYopsnqd5cJJnkK7yyESxLnssprxcPRZUpndGpczDuVVva9yeJFkyvkHyRR",
  "key16": "qmAR9ezWX4MY3RNmbGRh4BZB6ELNvfq1C2waE6fmaykN5iED9AGaBNjGNEGAR8Wutk6j7oaM2QFThuK1wqKYdQd",
  "key17": "485czsf669ipPkce9Da5SdLnrLbVfoMdKfm4it2U3mUZRMCFBS2CDtEwr6gup3QDcvT3kChUTVwirjK9w54M98gE",
  "key18": "28H3ZmpqCL8PcGnV7UTribhJyYgzRJFMdrbZ472FBLCfGX8MVmJs5qbiAByrAfBpFCmHWoGtSGz33xqK8P9ocU7b",
  "key19": "3hmEsruRGu54RaY8dVbXoRV1DJPfpwoEEu512Hctnpy14tFzGfnVvicbXHeAbnVghtrY3h3vPviPaaQzdMDZoarV",
  "key20": "3WJqorHevsBJ6nTDEXbwwHoQq2FSpZsryfcAan6HHwpRW5GkiLmfG6K9epUnfJvUCoCGDio57kfDZoFXLaRTeH4g",
  "key21": "5DUBSiwkvTYLUtPQJUCpLdnsdMsf18t5fNmVFrncEtYyyr41HNZksZrVDvMcehQZAdCtE7CT9qVs6KgLcVvJDz8E",
  "key22": "63U6TKubXsH97UbD9CqfJo6M9bA6SSBKFhBXh7AvBQm3oTGoy1udA8ysft7iV8oLL8w9z1N9zwT4nFKiVmVBfX92",
  "key23": "5WxsA4YpmmA6RMpBRSKEJL7VvcCyNNwZPPTTF81sFTwkVM6RgqSXecsZKpw3HXNZWAHRDhnySGqdgyg9tEGjaoT",
  "key24": "Jj9U7YAwfM93zBvq7RyeZH8oJWiDHLbqU1xCyc2hAoQqVFEPafzCJmS54EgN4Y7U8xVZLostCbMC9uoucGAvu5v",
  "key25": "5yZLV5Uir4dCcwSJe2buYa9o3Z3wU7G8o6TDheZYtcg6Xg2Czv8CnS3rnyxcHQGB5QKMbwnW3p9gSZQUntbBBhoh",
  "key26": "5Lzm2Z1i5Tv4yZuwwU8ndgnW75sJUCJyLUikWwVhBjcbf8YZygzPc5xp7KrPERdkfYhvvnDuJ93jbxgvyP1Zobd8",
  "key27": "5aM8NWJPg5sNcTy6GvDgxeUVrSvf3gJFxYYfHCB8iw5yVcxxPoo14cn7LuG6qchZ9NiWwWwqfRm4VosK8c7aaPbo",
  "key28": "5YgZDs6MBH432p2XTPkdU3NU71og9qzDAicBBdKTH7aUqE6MyyaSyRC8DBa2iYCmAduHk2NyFT1vZwAjU8t3gkAw",
  "key29": "5hijDPc69t3LFLJUuq3rFxPuWYLPHKdJXUXM5agfCJc43mML4sckUERcufYr9tqZN6Vpr8e8a9Ge6HJZJAoQckSz",
  "key30": "3KXGbAJCcLQKjRf6uGwDEvNfpPQwG1GoSHesNwHq6AT6KbNPvx3fb5k8omFkkuL6zqQWzBPQagHewKaDJiCXRE6",
  "key31": "pawrEdZo7du1G9Gs1qtBtGjnm59j9WzXzQnwg3DaR5P25norxqAXEKH6mow41dWkrecnq8ddQQC7Qphc95YjtqL",
  "key32": "5sGxwELgsmVyn7kU9xW8uFNaCvHeJWug1cqTMqiubH4XZPAhvGrZDWYjjXMrpnJiZ6m4gMSJbfcsxHCJfvoQFtt",
  "key33": "5WihZpeDH978TFCLwP4hU9MYKt3aqSMXQ3g7tBmDcog3H5F64soXyiEq5DZsixfsRhodh2sYUae8W7vL8ATP1vSV",
  "key34": "2HEvQRCUTf9axVfrexsPDW3feboLbgnQtGG8Ldv9oDRc5PFEV6e89cUuHxbUmnYyYp5KNVTa5RTafeZ4oAGdjAap",
  "key35": "2L8pmpJBf9iaeXwxQ282p9apjEDVuZhKorSYX4dzRKnDh5QxefX4R3rfFXtUv4v16s2SP5UHYiLHjGAQR3BFpYaL",
  "key36": "5SByURuRW2seabHrEUmb9kBAFHLnLtxU7NjoxhtHsg3ByzAThiwQxPs7VReW7s5VZiuRDqBahNoH3sT33zo85peg",
  "key37": "4ZJJGD3yydoRFtrzZC9HaEozHVWevr6tHoQip41oNQqYVmTf7UM1YWfBQfTfQjDPZaDouVpFgstUuB2skqtAcMCr",
  "key38": "281vCzk9JkiixAvdajFxZvnV5aBTMMLkUfGKYtPmEkGyuPXYfCN6YUXe6zxk425wLrEXTS1dvqESR3hSrr3ApBuL",
  "key39": "49h4HVcDayqrP2Hb7FsKHXd9421sEmKTqzBFfzZdDCCW43mvYQLLpEvZzrrP3QdPwBAjcc42MEmf3sDYWmGZX25P",
  "key40": "5YS35s2nHxF4bgJEUfW4vQRjQkU798AVCf26fXcJ6gG4B679X6PSgTyiiEwx4vpwVwJdiFwjXVagM1E73wFUZmvm",
  "key41": "3yoWxZkqvAEMQ4uYbBBKoxHzvX15bXv1WnMDpX3Qf2ukYnw8vRnwfCYhCUSRrBFgVs5decBVbizDHw8aUzZPqnzW",
  "key42": "3BvSSdGCm8EJmBSZnhQLXhUrVTETeU3ts9Pe4KXPQF9uaTh9X2wqmXhBGyMbx3wFJ1gr8PEZta7geHDDmuu6oxoN",
  "key43": "3PCFDmL9w54qKxLvtvpP9PbiMzud7aMMJneL4EeGEwgVrMwnJiyiYQD2fV8cXfCtXduc68oxtpRN2JYecb5hT1r6"
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
