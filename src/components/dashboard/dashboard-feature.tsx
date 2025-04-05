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
    "Fh8Xdeg2YA8tJiBsZjcN829pBYQgiRLyRTEfhvRFYHGbVbfnCCfZqx55cooAP3BKXWLJyTVN2ew8FKvWL8BT8wL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hjUASNfbJSgFMKYYZqr69yyZPFSwLWutwoauLwj3z5iUVMe6GxUTYmE6R2kejk6UJV5zhhFT8vrSwvZXeaSPnqD",
  "key1": "JK4TWj5mZXMfLKU3rxdGjTgFyNACDMZccJRSLLp84joL3C1uMAxhuZcpLJHXz3sMYaTuQKSnb7FGFPjPsQQYJwJ",
  "key2": "2WY4XDh7EYCy4Cm7k2MEsUc86c3ZkxN8J6zqyhvMparx9UrAPpbT8UtvrhMtrQJDKN7bpBGcxPAQMdL7SLke9nwH",
  "key3": "5pE7r8ifAoW2y49FPVDqNovDRuGUnWhDBN2USoJ7JZKb6y1uruGxeW8JNtfkG8D6bhPgrEXmXQY5KTmLnNoXgKwF",
  "key4": "2113Sfe4dC6vvWW2breSFRa95nQ8DBxXFVgJgFszjN7Qm2wu58v4CghP3JPEedGoRXH9qRp4w4desHzvpA1qECxz",
  "key5": "5BNoWm2fXnFjVMye8GYFsZYC6EUgVhnL5aGBom1BhFMm6vvrd3aaWT6U7hjtu6Ubwur8RCoX6vtGYwYLJ8kedSj1",
  "key6": "2WF5AxukejTffhjQvKR9zXL8PzFUbffUj546sxFtyCUthmApwPk3vSN8Cc7VK9oGEwyJYNBKCQdLZgqGx1aiy3Qt",
  "key7": "5AFZUq3PMizDkkM8WHDVsVAJ9fCrNpfx8ZzDDFkJtvnmCvwAxfPb9ALpofXX45AAKnb5pwyW1hskDqA1RV7jaMmV",
  "key8": "4rYd4vJRdSWNhazKXiqGivFL8z4G9dCo8QPukkripQhgdY7Xo93czNBJK84zoojSgE8mRP4ERqpV8wnYh1ioTnai",
  "key9": "arxaDTSehMP7FFnpbS7ZzXq497m5J9KYSpt9Xh7svDC2M9tmFdTrQ2Z4rRRVfMuLBDV4vEpn9iiB1JRR8nJ4q4J",
  "key10": "3oLwRFYJS6jK7rNw2pFki7oCZWuud2JgNAxAJyK6xWNXiXME5ijec7Sy4GhTN2of17QuWbrwcvc37c3SfNNkgXJe",
  "key11": "3u86A9GwDSrj9VR5WgpeP8GfFicbzwvXNwCYb1UHSHsbNmz224qHYGvs7T11b6V35MUqbFSvnh2LEiDHvkhrBgve",
  "key12": "48HCTxqA9tPXfj4WmbJx5gZsH4fSRtRxqhLMgGDWRhfrNVoBrJQtMoE4RzB1uTuiHcmWgpnZb4wwHkvtQJbSrA11",
  "key13": "2wn2piNUU1dV1WifjGxXFAsgVWNSrCUKH6K2DcUneVJMc3TtBmxwuvvT8SZ82qbfCxQvs9qyts3LPh9mkpzcyDV9",
  "key14": "29unovG7idCxeLKAdmpKTAcNgTS5ZTJGeutviW17VUcS8YRxHsSqZXaaBuVcAPp2MWKGAWUx52AABrjV9ZHYLwbt",
  "key15": "64DYJvasvfyGKRibKRjx3pwuxJPNb1apFN2Usy95eRUjRAtQGTwQPedBKfwrdXtADwpxVxV3vxQgwMZ1xhujdshf",
  "key16": "3LASfdVHPTqsmHnoYhJktiyct2SghSMED4i3uFFuoZsR6tNYEr4wCWMkcvL7VzyUd3tWN2zRkH9Cg8xRQGstu3Vb",
  "key17": "62ksSqjVVwQTJoz6dqwbqvmAZTM3W5Vc3EyF8qQG1hVwbSZwptkJcwm3nkk8gLbCr9aZxtTVTZcEaxfVrQJ7CLNK",
  "key18": "5m8hKEoyL3tgZewKGZvvTviyKyFBT78qMgQzUJq3ZCdZ7x49uWZ9DxXiQ3WhnVzppEow22g8fwYt7y6YMTqzv7Z",
  "key19": "2krXu7k8NhzVwfxXJDtZDR3iY1pdh4qHdjxrXc6g9MfuXG79WdeKv8QHvndvR3djebZo33R58vLHKitF8JzJeACE",
  "key20": "4N9pB7D4ncBFdhvrRhrJ135GyyyV3diaj4nQ6rbtXxwPTUiqDz1vr4ZUtVCbt6GRTjbbdRgkyFRCeH1xGdc6JdYa",
  "key21": "4Ugwc2EiaYu6NiH3rkwdBKepdRfP5Z956srDngzteL8UVGEgXWdNQ2eiXjAjAC8RmALDpb5tfSFBSm7AB864HVJL",
  "key22": "3F2YzMTizDEe4zbVeGpvzJdLkEMRmuDfnPGUg5XLf8YbfFNdWRfknUnULppLwee3YtcTEDyo82vG7mH164gEq73d",
  "key23": "BP4ddjWoxen44aXvfGnmnUWZKirNP285inh8ieuBGKshN6XRPdxTw2a1uezj435pA8WHT6jxsVga8UtAHvqiUpr",
  "key24": "5DfKKZsG1y4BWnQ3TGndX8rPgq8dHCyD4LTJH2dV2so5pLfpP426tbSA3qR7CRa5oGW1gzcWUHUcu2HWoMG9ee9w",
  "key25": "2uTFK4db635HanavNcHZvjwiUnJez1LL25U81htp6zjynJ56F5jRpkgknEKi6dADFkUJLnsNAGka86bc251c8XF2",
  "key26": "UwZvmWWE7p5pyW4r4o4hfJPCeRpSwR9PxUjFBDH8GEsVQX25eFQQBkXQrXFSphSG7RkWhH29c3QtxE5iAhhq1TZ",
  "key27": "aRNEfBHhLnsveMKeXUDk4WLQ9EsSzi3PgHNLyrArncfQtq4MBmh9WZ3tT6XT3STi3GDJNs8q4YAYQYQcS4QdsdZ",
  "key28": "5N3ina7aZ5tfVAo8QR19oNUVE4z6tAxFfk3fhRTf1CMkFcU92egHACsbe4Z3CzpPS2KumBoK1NfGXSPMMF7NxnD9",
  "key29": "5jB3DUhtS1gkmBj9aDieLw7ac3K5FpMCDEjhB2Gs73RnKPdNiDeh6BEoaHwcPEdZx19pmEXjMmXu3LG6o7vKegSE",
  "key30": "5YXjc4iW6ysqH65vZV41Tqrf3hYsXkTLntWJEQqXUvDRf8HeNtmMqzMDpoWBF1dpm7bhhwMHi2W87FB7LgnSgdL4",
  "key31": "5qJytdCyb7KpsVCzn4UCiYYLQ2jmyDLuHPs3L6N1Su6rwZ3gLJvYawe9DyNPASzm3GrP9VyGUF7PTZDAhDH4WLwF",
  "key32": "4cA6XeoxMdKCp99Q4yEcw1NWrTzot8HdxwJotWT8zZZSF9cWbGnXgPpuRhieAQ27VUc3tuuwEvU19P5XG3cGo8eB",
  "key33": "FfdBUyGmUYahybt3PgYnoFTaRtENGVRNq7FW8b1sDTSCyxakPTRxeXxfvcwtq9sxrc7zUX98VcfeYtgNgy5cM8v",
  "key34": "RWdkUZbWSydZY4RYD2xWwD5ChzwxxfRLysefNc4hssmm18BB6FtwK3E47Ab3MjJWFzCizmfMKCrupi4xAPp1LwT",
  "key35": "2i7S1j8zMR7WC6Ynie9AdmduDMxtnRKzk2y48tPDjhXKR13dzbk84MPYMsKneTQHKCBgCFG4TMACJ6iddLTgNwwn",
  "key36": "5Da2e5Ti3bfioPyyLmx1XzKKZ8NWhpfRdqfM44FBQshaD77SNjmf1VGF6DxKJUWjUXHBzWFxrkp8wXwRqYGuuxCX",
  "key37": "4Se7zcMXWGHALJHgWQZw13yFQQwb5Tu4GGKhqGLhrAyMi7wjSeMicT5ttU84QCoxbFvEuHF6tg4KjfdQijHSWxLh",
  "key38": "whop14mnq8vwK8Gnv3GvnTw3pahXaTAqUyi8XYdB5n4f5rEK614RnDomdXJjNJt6JmqF8bst9rhdMiA3Ds6TDR6",
  "key39": "4ZnTVtUHDggQk8ForT5gZJYApDo1QJubfPJSje8dVtVMhtDqXtu3kTNChsFN8927x3XH4BKD33LKXGKeVhvFLujd",
  "key40": "fNR2NX2SZeZraa84wq3MEvodXXxYpnmAKDjM4bYsqAT9BPDgmS7KKLLYbEWhKCyG122A1XQKyaX6VPLmG9aLWiz",
  "key41": "4sdBXVaS1KTF2B6aeHkVB7c3web2QBMMJ74FucgQ8KnDaxWcF4naxjpCKGbZC5XSCP6z3GeZrPXmBXvSbcim3piK",
  "key42": "5zK3hEuwiU2tjTcjV7rKWDzinTAz2F7bwJ5TJiYvTrZ5ziYDFnaqHUr9BLjM9koHh8p7ZqnUTf7QUq6DZbL8QCBR",
  "key43": "3izzDUEvjS1aLwUGAEuRUbRL2mTgzA2Muxd7duSeLvCq8hLiEVbRBVYRFXrRNTAqeE6JmZ1oWqHsrTkRQ6k6E9wZ",
  "key44": "5TD2HoMghKfzEbmwYyneQYSrfAhkHYSeBz5dwP96Noc1Yfjtz4JLLirbm9Dc8v9yKRrnLLA8wYD9HwgYLKinwqes"
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
