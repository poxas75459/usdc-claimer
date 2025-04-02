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
    "3ySUGwrhP6w9ashk7iThgY2459WEEmTAjwQBxTF5ArJjHRVMBuCEtyWZTyPNUKCN9u4MqyBRSnn4cvEGhwJagv3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bBFdvUhBGiEULg7kHgmAPUhafAChoGNFeB9E8DQSnD46dnKBq5VK2mhsnUqkmGy6S24bQXuPfRxHqWBKLSqXaRa",
  "key1": "3MsqZee4Eccfd4rAAn5jJKc6bG59cadud6h3zSrYfKYAkDFRgR544NSQQKE3eE1hFgb4YFRockbsQKGzXtV5HYtq",
  "key2": "5jZ9eQSiJZMsXGiBLYJuU2fkPEVVwawDBbDGLFk4aqWo9NYFLiPmE3qsdKzcZpEg6ZxwT8n7hH75CdnZqAdUDRnF",
  "key3": "4EZTQ3KWvNEwYkPV5R2NtN7PrNQ95hA9uTykxjRqDyUwCf58XXiBk3priCuEUmSzfrUnHy3rudGFJumUAAVf1g5R",
  "key4": "5HuTSYnwmNE2inqWamYjCAgthEp44j2P177i7S8Hx9PkPJDmPwVyruLqkaLevQnqfugBDfETFwX1ScmhSEXJksRk",
  "key5": "4JNxi215YfJh6DZwZTmFyq3eERKWBmnWCYLokxref26WMYsdmZdLPydQ7aRUvGEjnaKKrNzpqrz8Twxf1MPgD6HY",
  "key6": "uUstjid1WqADPgtRMCNLoXwSg5GAGopwZ6BXJuJ8dtkKPUQBd2hiZaiv5EV1G5mS3Km7hTvtN6ePCdHvv7oren3",
  "key7": "3UmSYrDYdii3x8kbid8CcTV1tzSRpVkcL2ZFpnqUgrBGDySEuvhW1kLBjLUP4x5ztVqfzjTjoyRzdjxUATqbBqvB",
  "key8": "3Hpb1kit8KUjcQxC9pKzES3sauxwY7CCnHHzB8e9JyoLVhwzbHdtQSNYkETYtFYWKfskGhncqsDPH63QiZ5V58Ds",
  "key9": "2H1MTZwMvy1sXJd3Yi4Qx1axKYkKUS7zfXDVcN2WVNe1FPY4jyfQNyavcJezqr8wGTsmwXTTkSeewAHnJFyd5A7V",
  "key10": "mgoEGwUnCy8mfomVRYGPsi73Gdnmjcur69gSQN9V4z4ygwUuXjxapgMZjj9noUAf77xY8xY2srmu6EnWB2w1bKS",
  "key11": "1VnVyGYgz8KKPjbAiLWD7UPRBFPtzW8NUafzrsQBEUN7Nfuoeg69CUsz9AXr8Qv51UV1zAj1nDJu9rZEoTfgS8G",
  "key12": "4MSdftMPVMyeocihvZK9nRDNAz8Q1mc8kkGtVmEdkdSQC1195bbwKkSVXgMniiJ5rzFWJRiYBYRVodSRzdk6tRg7",
  "key13": "4c7wA5fgWkfVKuR7Ap52JLCK2YHPoJkiXcQ4xwzfdQKhUB5yNvSGqECoZ1841HfbRe1NkZwR83xSRSLSw6VEfgCp",
  "key14": "Z6DWKWBYHhb5VgY19h1GaEDRXzmbV26A9eYWZr53Dy3zEAQyP1484hogQSKSW6wPhdGHukHv7UgEWebgh1cgEsg",
  "key15": "2QxmKYT3LD6XxCcPeur58etZn3t7M4BNZ6toPcTYj6ZFhxWC6aXHxQXUNqEkYAfaXeNPdXfCyE2kGbSJkU4cNUgs",
  "key16": "5j9Qws4EokiVTPD4atsMf41RchbmDsd3R9H14yahbeXyATJNqo4o4CtszV14j2RHw5kEpAfTrbstNZspktudwBbN",
  "key17": "3Zct1H8FMsxhAcrXeRhEUJTL1xKEcUzGFXjvfVkeLEJWbAYnHmKG2MKZbdZ4B98X7KU6PAaw9UTQcdxgD3uuk6dd",
  "key18": "2o8xcBDGiQFvki6DibxmEZ1ADFbG45mXLJJQ5vjvJPRxaLsYD7LdSqC5eHKCNBvscqAt7niVJ4Rb8VTarqL8HmM6",
  "key19": "3XDhpLRbQjXQASsYRCApSjEZzXG459wgDmLaw3dopjEChN9aiMxCSVFEaMbMceMkJVe8JmsgzSDy9c4Ae1S1tEV",
  "key20": "24Krp4nM8BRWkBG3PoLFiP1zcfaPa5onx7TvFs6Khqv2y9maW2ubCfmn1x6evBfuhS4WFiCYqWakqzQTwuJMiiz1",
  "key21": "2TFuGmNd7X5QoXYhfzbwhz6nVgq2ntaNLRCPjn14iNV3Bxv1JxDxeeevyPuTRMURvRyqy3WB3AKkdFoiWoJH3FQK",
  "key22": "4w5oS3PhRw4NFZitUBCA2RMPuiAXi4FqN3C6phzjP5XoqGzvP3PCxL1DYeFeAd2cLnneAV8fZxD5GPVwM7U1C3cY",
  "key23": "4fPmSqb7BiVh8igZuz7qLJpjZDEyQa9bbEQb4q37a8yF7Th9CPM93siVAatQf61Xhsn95uRAheQtmSfhFj5CxSR4",
  "key24": "2QjbYtUddsQ1EocuEJ5Lm1RWaAbnJcV1jTmA3cuWkwBBLr7tm8e6ogQabSWsHVQZuykQbPkD9C7c4WbakqnZfvqJ",
  "key25": "3T1sXMv9ZdWt1aB1AGBFPGhJQzdiF1FXHLKihxWKrJm6mjTJL5qUx5VZQLDe43EVynMPeo1mYXS13K51zac4bgfY",
  "key26": "5mhb8mMdX4YgPbVfiRmRCsd7G1rZpkGzE1v8a66mNDwtCcdoDtBmJwCn8EuSa9Vm4WT95AdAGmJfDcKFNtckzDZL",
  "key27": "22P14seWBegtM11AySumajjFrQBrpV5KartziLEyyjRSVWs39nUPiNHfdZsuCthfx52khtv1AszzDT1T1F2hiUJm",
  "key28": "eoXoHTdr9Pu3NKhbdJY6DpchGCaW4ZdD9NSx81ihDjMxULsjKLbtawM6kTzB7FFXeYKaunUv3jdHsP3mU5yw7re",
  "key29": "2tmPoVD34MJNCCiNi6RRGjubmqM7c47Uy8vmGbEoEr29RSnPpJbmz27PtFoGF4enjciyRkuTgpKiHtJTf7AP687U",
  "key30": "2ZNHX9tp1mFdZZ1CJhgsZtCyFeGTU5RjAMfuWzvJhSj4kUKgepCeqYnpQu1eYpPtBdpfdDQifzjJqvUYf4nHugWC",
  "key31": "XHBhoVvrcxe6w4kM2DRHnBXbdxFmdP8HxSoDBJcNAtPHfJCLxGeWLbYa4d4dzZYcdzTjNeYUDEcrqTGpQSswvHq",
  "key32": "4fs9M3YAm7bHw6xyEm76w9MAq3jod3od8XhNLA8Ay3ZLjoH2Wj9EaJtStJJn4UmRtaYL7y1oxaiy74DirVdzmw8r",
  "key33": "32U9MMnwaZGZxkELTFYkSbF9PEjwZuuxfZJpjgP7ac2CjsyBBJhHm59bhZQ8br8da5zB63ewZEbqSVEmKvJvByAb",
  "key34": "3AXYvJ4RQ4YCLyvor9BRPwuuDRPniTMK626eGetiJ5UimjmeFwn9QRRoybL1NFgfqdReSCxYDDmkRPMcFt1jWiqd",
  "key35": "XWMtNafngNDSmZRsxSBtwS1hkNYLceLUDmWTuXcb41MNnya7Mikmg3hF2N61H4daU2YwZSn8SQCCrtVHz25Uwxp",
  "key36": "4npx5hju7owQQptkD7925YVfuKW84HFVNSxnNA1GF96f4yCqxjTnUKQiN9JgsNE8pajpM7EmDoPwXMpLhGjGTTSE",
  "key37": "4V3TX2fNNEMx6ZFZML5T7V1oe2pY3kDHtET898JxMdiB8Q6bP7SPTdutP5wd1NsepENsvw1o5WF7LYizahFPhQZW",
  "key38": "3WSJ44Fp7MRuMvDDGUVYe47JTUkbkBwK4eDPiG3p8VvJft6MdMz2VKNCXXtpxCKHxfhDa4z93HCnBqAfddECwt7j"
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
