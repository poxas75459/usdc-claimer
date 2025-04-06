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
    "42uVwF7GMnVpztPsvQxRYtEDPZwLmXDbh1THEz5zQGQUsKajpAC2tXSZ7ANwH2VuDmP4Gzgoh33YdEDQdqkz8zTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JxfSzW7WJ87Z25Wg4FwNr9s3x7awggWqNCeFkf7BevXBByJhjfmy43i1XMLX4kg8NYh5i3XucwM956ZrDYZWJXP",
  "key1": "2ddXnWMSqWNPQdB8z86fKAKYMdsShfBWhKQQVHKvoS15GJ2uiie7dEwZuP2iNzC3LXTesWMgfXAfwBdLPGHXUMVC",
  "key2": "4xhgJHRF6xZ2vMgXFkR88W9grv6wajb3E3S2qwiB58vmaX7jxTT4sDGFdz9cxd9kTxy351yVQJYJxpNpoGCvyX4Z",
  "key3": "7ApYbZZJkGD2NXPFz45QTfJYjj8g6HdCGWXVijjXS4UzDQ4tToHMX5UuoTnAu3nE4RTTtnYA6HxTxn3Q3FQn59o",
  "key4": "4vWKJRZfZ4qggE1ynFrbhu6zpLaHm1ugujykBeDDZcz8NUeNKktqcJN56zs7ChfZvtXAkWw7sHGVXLziXCbt8ZcZ",
  "key5": "4fsALKNquMk8Q9Xay5jgtHUEyvH8nvX91B7SC7rpxnLjfnemNVnNdpxk3JRpahv3Fh1FvFU5eVZ1BTccb682B9Ch",
  "key6": "jWbDBZuztCREus3tu4Py8B3vPDsqhKZYJwdyTy2zGAE8qpGF5kQ6U4S9QnSCue9DEPTrZmUtSn9a8ykwWQUHC79",
  "key7": "mwwRWEqtoU6oqUAmjy8R6Kmwgou4nKMBwyw7xLtXfov65Ln1WkZQWuacGJn4sWeMERv9zWwsDXaaV4hoDywz2yA",
  "key8": "5dPyUiPpHpUtgFsWoDVjo3ctiWuPnDynqB6qZnKjDgDwnTbGvkWwtb6UYAn2hUNYXPR9zM3fvTnAN68AvuCQxp31",
  "key9": "42nqBe5AFWWFXVqYRT7EELtZ5mVufd6Fey2J4znN9kJjpKEjZXUFj99GRWpptZcfhHFxPAoCJSuGiWUdE6sUMXeT",
  "key10": "4Y9mYcDgS3GJHDCPVy3LZqLTbjZBuaskuddWsL4CzWjTmyfKepfnGjX2REKT99R5kRGmRhqYj9kydsJmwov16fVb",
  "key11": "3MFNyTyuTbXPJeR8tEvmtg4i3PzPZqsCzomHKiNyVQUzvH9FdDK3HPQL1vzN8kLPcMVAnhPWsfKTqWGFRmd2YfUv",
  "key12": "4jhW7oefpEg2xWuP43BoRG5b12XDtGznALBkWkJkwJS6QhxECVTGMoVB9q8dEjnxyxzCyivAtSgM2t8MR7CADmxA",
  "key13": "3SE88ERU4ET9iDA8Yk5LPjmrnuBAhKmpwveMNycBYP6zEBzu8ZHwJ9ouAXEHhXSGhwmvTHmYmL16SzCFroRksYKy",
  "key14": "4AEsHRbvxfGvnwFpU6eXR1veukhRjDvSy5JFSYmir3UtxGuJ84wXPCx335nBrCesr78zKJqNcvVNnuQZuuyCNrhk",
  "key15": "125Hk5zc5eQNUnJgjcumaor6t1tkBVTa4G9vM1B9mPf4dRRuWSivYsbrALNX7iYUtQRHfLzK1aZoVQPWGKwKCViC",
  "key16": "4QuhteNLqFcBT5Hm6yP7WvwkPz5x7buDXr8mUH7wB4QtKtro788PQr7UxbKn27U4TPWEaTkAreWw5EgATGtfuPnd",
  "key17": "5D3aS4xFsP2Y8VkU9ZYiHMrzKcz3a4fBnM4oA17Xp9rj5Ykfz1wVnb2bxyCVwJUjQbyZGfPca2eFgZY3pzQyr65A",
  "key18": "iQQHoYZCBHQJj7XBNFbrTJNMwJjmoKsUQRLYV1wbg9sLzfx5zuSEhBrPT4qXdx1CWBUT5XpVsKpSXYXT7yQha4H",
  "key19": "gciPSN2sh4vojgmoYK36GrVdQGxujJZr8tgbJ1CwsrTXPAARqyAeVFT9yAF3vauAJToHpeYoZasAzTDc8qY3DZp",
  "key20": "vLCbpuaF9kQ8t9U1pGgqqDYdk5c7NTYWEBAgHsTSX2PSmF5tqsJ9HAe6K9gGNuQ2cPLHRVq8zhiuGH9UrEMng2V",
  "key21": "cbAePb4TZyjMPLPQGm7r1bwrnNXP2E17W3QG8VrTWBxRmczoVWjTKRXpJ7oAjpzNAqDRTBBengbPDs4Da9nENeR",
  "key22": "5uqEhQsNSnuu1eYbwzuZTtKrtWg1zncPXVRsaWAhiyUbk89dosXHsbvgsHi2pPSE1ARPf65oXGikyq39z9pKhzhu",
  "key23": "2H7vppK3uG249DVTx53T9296MJteAMrAd3TQBDcnEoqu17MEMvpN95HjeKuHoUEVQNQmBKr2f2NQ2AeGY1pFWxWv",
  "key24": "4wbExvGFBLKANRDxgeKkDQ5BP89FanUisuA2mqtHo8Puwh3DTLp82TtZJ9mPM674GY8kcaMgDrbh61f5XRjozryo",
  "key25": "2D9jxxTfkmSrzoSRhQh76s39FZX6115jSCrZ4dTssQBFNK5ct8igRseWbe85n7b65mAgjGGLwYeDVCvtq8rjokmm",
  "key26": "4BajCumoYoMscGLBonkeBhPkuJ9xdySpyAmc9a9HbBZu4bBdeg4R8oauyMVEG8fey6qiyGRErPbCCKLNXhFyA3VC",
  "key27": "31q6HcbL144fiaYkzMKMUvwjpSXVvvcKhpGhtF7D6NcTPqNS884MFMwgCMm3uAcCTodfarutiTwyvbGZJCczSyWJ",
  "key28": "5p1JWcmTQPV1YPCSHtWqttV83z3T1EuibVMuLzL88EhHP1HhsvpwFEHpTQUayzXsh3vYw96ajifJUMLfUG33YQEU",
  "key29": "2W3UoBCJ8tgPFa5as5jkbyC5KFY2ZaZuDN1HdvhJQMK5Yw66xgav12rpaDGmhBu5V9pr1YhGW9AV7PdRmFEar8k7",
  "key30": "4oVJL7J9my6yHJHW2gPLauGqQT4RH9Ao9cjCqjzdmPDo1vQSm8fahLjehzTV9DBXoXX94Vida53j7kH53s36yayY",
  "key31": "5gGoyQmiZcHBUeMnr24Kgtd85MTAGjFBbZSGo7FtdH1RXH9MZ7GTQTMxBsKtuQYfFPLL2VcHzEMFdCWpD4LYfJxn",
  "key32": "ui7auVU3B1ii8SbZDaR4HVqffLqM8oZcRd9kB9ntXT5iKdhyuzb9C3oVCvgiCPzZ8AzDLFGwFfq3N4rfw3M5WFB",
  "key33": "4KTcaFKPfkmK9FowL2cNfdjpp9DCCa4NGCD7kZgH6MvuNPMVesXa8fafCCkSxKJee3ejAcaJqNvxr3aZBz9gT7Ds",
  "key34": "5JACBdr6KvEwr84r5aNrUxapMqGAb8LtzQEahtGWpM3vPzhq8aDX6wTfrJxJKJomSQyDwsrSxcGjwLc73b7ZJYXD",
  "key35": "62wuRa1grYpCFvfTzS2971n6V4pPLfkbR7PyTHr4cYVKZG6FJ11R54WGXGkSbRy3LAPR8cLK6LwPeEfvauymjTRm",
  "key36": "5thQAhcisoKY1CPNkrEBs7ZWPuURoyqytnj7Zwo6koX7PeHSFAe8bGaLYSzWiQkkbrSAkbbNaQNERrz36JsM8SZz"
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
