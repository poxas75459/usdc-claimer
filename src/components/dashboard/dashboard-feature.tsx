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
    "3x6kMpJ1SfJrPZY5FQ7rTcnvP1yY9XPpBYvsGGf8d95NPQsjinxiYeDMfMpt7TrACPZfJraxj8Ghv78AjVhs5BSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pJhgRUUwjKipjGLuiRiN2MQTciNtz6e1jS7rPhWHuJ781CgqE6bCttoDv5we18Fsrd6LrAU1his3QpamJEWrCZq",
  "key1": "4W3Zt721whi6YMyVB6L6A1M1qGRo5cE4d2ZBnWAjQAZU7uEq7rrRou5SREzd8YpnVyi3bFu6GyTBHW4fCAj13ELD",
  "key2": "3gMgQdfrGihQ8WrjmRyoZsny3PFoSMT69tbUkfftrCvoSa4mtqe1xDBbWA8v4cSDWNVRLc3Zo1tAQ9prx72qoUao",
  "key3": "2FcqAMkF7bpbQrLzCqubQeYPFvzYRPBx4WtmaALmZPv9gg6PWy6E5n9dTMgxDbZtEHmUktQc5AomrWdpapgq9vCi",
  "key4": "uhq4xuFqpRF6ZeqPVRFSqpDf5oKvCDfgQP2UKNhm69FQwUsJ81KEopSSQ1BsGPw6ETvDUvZbfTPeWoxt1gnM9cr",
  "key5": "3AFtpKwPay5cyWnYQY2bP2Kg1FDogxvqWfmxRuhRRkJmQfvff6hjCijvw8KMd9Jp8ue3GKqzUaJpMTb7nkLs9WkY",
  "key6": "53C58sMJjq6qSWhpoRxcH3TYzTMqfNVYgp4XgnGqryBQwSRbGMavvriGijkY6vgD6SZVXH34WysxWDMJdCskYK1W",
  "key7": "A1kVCv3ZqhAdSmuoFgHxofGyg3tP9tC7rLswtx8qaucdA8vVvZQS3cfQwh3oSSGDWrr4JTtmMRRSk83vQfNBKJ9",
  "key8": "353SRTu9WUPHTAKeiLzouQCpXnfNpo9RJXHioa88ZE6YDiuEjQ7j1MJGV9UpwcW6Yt2TXXadNGTwDnmsvArVNhoG",
  "key9": "3U5niwcZwaJKiJX9pCLMg1GBziUrN46qnqDaznw9EdbJbt1H2UThdeAL9o1ru9j6FcRFjFk2niMpTgtrCXy73G9G",
  "key10": "5MsBkB56Nh9jVueYWNPviuRwSeuPs6t546gSkENmN9K3VJuzXc4QKVRgSN6VBHpZPsTuhnb4pmTaWPru4dzPAvEU",
  "key11": "23R6aFpc8SBBKCZg98JcQpfBYzhYx41gxFtwPwZ1gFAZGBfLYxMZaWyszRyTRj6sSMG87eCko9BAHvPso1wrwpNZ",
  "key12": "3khu4NcruYCS9k1GMkspqVmMgGhxXsLendTr7JKqVeaRfcgtx9CnmqTPVaMsMy3hiwaz9nbRj9HjupEu82h7U4pR",
  "key13": "5EjA1QYiuMAMSw4YpCWmfbd9WvzRiQmntthQMvfojWmoxZuPnikCrM35kQPnJBvAFop2B73Q6wUkfJjJ2aH5sSem",
  "key14": "4zKzfiX8g4dT2ciGRURrgAaKZKr37xpQoDQauCVpLGxqXbivxCkVZWjPawQhZwzTfBLqdBs17ew9NmFeoVg8Sug2",
  "key15": "sJUFNqAStQsNHrdbSionzwfo5VEQCc4fYyns2hYabGsQBaqmfUTZdQFGC6F6TJ25ZkyD2RhsxPEdBvmCYnXoVfd",
  "key16": "SzfAMDctFcHpzi9nHSa6GEUJ6e3Rhb6uhY5hnWW6dXV1KivgUcd1gzbBSmhL4PSemojVrF5qkc5u24ocCLVAGP2",
  "key17": "3CM4vPfaRUGMNfUaL59P3Z1wC8icZUZrKrrv1igWoCypSQ7mFMMsezCCmV8wQ4SSZVmcwVfJgg4RdxyYtuHx5e11",
  "key18": "2FMP3nihZsYkSkZn8XR4jUeWExFpLETn2f9RRkmFjBb2dHh4STAWV9SgrXcR736Zhq1n5wkvzTQJs4vkYWXsegct",
  "key19": "GtFDeBdrz7wdrYgeh4v63g7ZB3Y2JJW2RtXCqkFV6X3T3hrMYF5rfyRmg2z6TEGf3QULgqwLZrcVxe5QmsW1ohL",
  "key20": "2ohnqCfbeZpYZoTWiH28ZsCHwhdcz4JbsiuWHvLKdgboTyZ1zzSPC2k15GrGY5bX4tgbqWA2D2kPZd9iJ82YEu4c",
  "key21": "4mZDf6sxRg5mioGrTkXRKVRDNZrPd7ehXJwazCWwwxTMDhR98v2P1bWw7MMJ7kYPgLtAtFXRdruM7i5g1bQAa8Zd",
  "key22": "4bBtJSS26Phs6cALNXGagWFNdq7aLcVksbg76ZJ88XT3d8ZWSK6rs2rKZPf8eMcuNHKyAih5uwAuCADBPEvYE2Hu",
  "key23": "XfvJztQDiq3JQjxr4MKJsBQbmiU7JuGzSo9Bc5D5WSxwytN5diuGtR9dvP6BvnxRHXscji9iMYbdes8KuwCaGRb",
  "key24": "67oji5Jcsu6nzxmCCzeTstnxPXYUb8RbLnJyh4zzE5vKZMz5Hn6jPt8R5bH9AvwaypBtwv6SRjNP2D1fS6a1TwZN",
  "key25": "NEETSQ4Z1r9eA29D7GwG5rbM3n9xnQ9WfUTxQAiK8wuLcxvAdx9KKS2QyxDY4KoGYrF2cn3rucsqGVj6BAR1YWE",
  "key26": "5aTcwg4XZfjA1sRAaxhU8XTUuyGRgYvqkiLnqoJ4KPPYJf3zVXEKtHoYcEYVLjjR9Q8JMd9J5pg9uqifQUcQnAJ7",
  "key27": "5MNaPXwFUbeDkNgE4qDUS2EXfWE5uvmmwqmgpxRGeuEioCydx49Swxyh8ssKJwaWEHe92nmUjFgcsdTcqqXZGQ3K",
  "key28": "3umbjVm2MDwNuTJHiCC3sEqaAM6R41nJPpHkpFvLnb1Go3Heoq47D88WCJscSVf76AqXdK3X1ALKFj3TrLfGRdRd",
  "key29": "9W1wiZ7xpfo5jVCGToxoSR7wLHwFBPS1JP4JZfhUdU1Fsf8LZwWuN2YUH5WSXkxNJXCUG2W497fi9dfsWDbuWRQ",
  "key30": "CKnWNCfXEiLiYGL5CNtEZ3dsH2pCSmJsuHnE9CVZv2fRqtwPM1M3gGSj7sDf7to4LVK3KCgrQpRAaqN5EiKoqa7",
  "key31": "4ApRK2eoae34GijUCroEifXaBUKbGtjpweQWtM3vusZdPkBNUMJ7r7hYh1gutAQonRQww6BU5CnBAQboRk5nHFZH",
  "key32": "32BJEXZDF6J2pGwHjmULxEG2pnSqwh3jtsxvmW9mzRv1Gy5cHVeFFEEDuPA8Gmq5dCaku2ydJ7AhY8zgm62dpCDq",
  "key33": "28MCNYmJTAqnMRzummDikptv3ci2z9zqL7RF2ekQUG2EJQCaW3sWpLkLU1w9DcYjJnnC5srQPV2qpckgRBcmCKoc",
  "key34": "35U3wD4n2niU9XZzhH8kZTzie9UV33YqoXufdyXszoxfa8U3WaBN15BLjycoW1NzwqCBsDcPZgqNoQL3S1DPQN7V",
  "key35": "2UwK16XG9ZjnRkne2EevUuuipt2Tm9zV4wKmTVnGpEFuKY8aXKbvxWzsBgeoPicywiph4E23GW5FWFbvngGgirPr",
  "key36": "4MoZvnPop73222LiAbLkpDACkqfv87HGafxFqnUirX6Lx4zXPvdQM6eQsA5LSL5gX6kzxb62pXsxQmBT2yrESDdV",
  "key37": "55DD4LDzcnnw9y5KbV7igMM7uwGnoX9ZWFRw7ekwnivgeSyX2b7Zh78Yb6GjQoq6E1FFq4AmBgWeVbxcU4GVq5Gm",
  "key38": "5bPqiiUbzHGnVRs8225p8jZjuAW7WiyjUKtPW4caFU2V6K9zrdqdQ6WB8tj8vRkU4X7iGLYVgyHJmuWtoe3dZaod",
  "key39": "3QeWsQiEMPs9qGyejWwV9tz8JzDqG8ekHAaMA1iARc5roYF1LooLJ8g1VcPA9KZSjpVADKiSV3rqCZBDnhAGB5vR",
  "key40": "2p1gQ128DThtueJcGNJA5eQsQ4XdViNBPgzB8TuLTfDStu8QBvW48YEKn179BZkQeorXMN5zMN19Vx8hrDP4Sr16",
  "key41": "v1ChiVg5tYZxbfdnianAeUPZpLzJcPxPKWbDBuQzoM78AnuzNHtsgHfdEXiPsxjkHHS7qsFMri6EcafFAWkYUbH",
  "key42": "3bUUxp83ytUw5dBf2wcMgy6pd4bLzymkwQn24JxaMfuEdVPm2Gc4cmt2g6W4Kp9WwMn6tcoiwMmxA9AxauqZm9TG",
  "key43": "2VrmsCG4CsCuaA6R9iQfhutnFzZLEczyNhD7FsWmpf4vkVBUTz6P2fC7Kcmwy3PFFNRRBVRYPdi4hfidf8hQyB1S",
  "key44": "3XQXegfQcq3GrMhhmQ8EbbkNjdxZjcMLVuWEK3ntV4RBRg6ZGWMnB5VMipyygCNJ6DLG5u3BtmaEUGruu7xbzSaR",
  "key45": "3Dr19mNd4FjvQt2tKqV1BYiBU74Fo5YhN31iGJNJWnzW69teZwvhFJR8i6ptvJSRiyCZWpp7H6CmGDbzshtXnjMY",
  "key46": "3hmhAeKNgXF4GudsASDtUMX6ZFWuKXF8L4RmvEqhhzew5KdpYngeNZiLBCxEZQCgbkXfoygML2c84bMaGeZsUiiv",
  "key47": "2obnZzFE9zc36tCFRUAoiT5LTDn2HPvWg7kyQ5kiPzyp6noPDmbVb8ibYbSnLncSdGviZpySCkizekGE3nTVBzhK"
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
