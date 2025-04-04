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
    "2bQu8U7sZNmxuHBTyCDyiDrzHK8xnRdctf5mbA4rjvSWkvoj9yM3QjoyoGR8aCcLTHGUN84GxDPJrKrG8SajXxya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q2UFrfhTKTK8Y4JNEym5Wu1WBwyGfQMKvEB8KY1gXSFRBD4Z44ked6eQqhp24vT9f1ERYhpjg1KSKp2GgQKXUwA",
  "key1": "3MLZkpKsCR8cH6LkgkVeUg5ZiDm188aFsymRzY1fw76RiP2NDbqyEYxLFcPDLCXyzXamKzaPMVRYFsbzUnpiUSaJ",
  "key2": "3HxomS14zBBfHx9meZhaHebFDFWawuk3FRCRZb5oXzJZ3dbHfHGpfc1ajiXEVka7VvZMTBU77F3KPNsqooPY1trE",
  "key3": "2r9wWcZP6R8MCQxgkSh4j2rz8sszyCtbWAKGXJ76A2e4FDr5tzBSb1HCeoWhM9pFvmmts878ARHwTP9KayUqhdR4",
  "key4": "3d7gCcgrzbwE3ZL6ASNPEtK69219hDgW3U6sngurk7gb2TerpCyiZhNjc8yu5kZdfmdZthMZDJuBD7y3jHrG7zTG",
  "key5": "29sdTNkeK1RF5J4udvFCwXvZTxeTCsX9RcQ5XFzKZxtkY2cu4CmqxL89t65JnJLukecnqXhwJHK4ejvforCTbkNP",
  "key6": "2Dgahe2FiCG8skb2ZBKdLFNR3JsAMHRJkzSHQdy2zHbpHfxwDbW954j6ghpEBtJxy4fmCv1E4DzHmH7p7CXsWsbC",
  "key7": "3YAtQdVnao7agExbcz1nqaAZ9uW1FM3iaRgymQeCh6CJb9n9qgLZDggBjCzKRtJNTzkj39TVSEknqweYyPhzWWjJ",
  "key8": "3wgYxnQpY5JeZUG9pUyXmWqt2zMtZAGwmDMYuMHSWLAnzJ9PLkPVNqZMKkakxFphA8qTLDWtV42kiaVVYVKkbqZ7",
  "key9": "4NMKxshFhRE6AC3V1aoStrCsvfFs5bx57542q76e7TpNB9SgCDMP1ggCZv9Hz2wgrY3qWd8Y8KrUn6VJxj8zbGRr",
  "key10": "5Gn7nAQ7QvAaJsz24f2ChDRSne1RH7Fi4nzyMxaCVC9d35pE1Az5mAPWwx5zLnDSSUnFPGgaAXT1H8Jg7whyCjAw",
  "key11": "2yRyhs2g9E6DKD8DAZNdHV1KmK4Qy7sfJwFR4yJtEAzYqjHyJgsMGSx9XcELRP1PPERipzakqwCYQxRkq2PJQe1U",
  "key12": "4ES4DPTZ6ojaygtQAvmRHp2A8Qmot6zcSWYcFmBrWf96hWJUqmLB3VLC6Gs179QZ41V7dsnapbQavjS7x8VdMaYQ",
  "key13": "rSuiFkmrwAaiKkrnNwtKuLSKNLGPQDtYmdqcigStf93F1TfrtprpNHFar2G8RSuyQkKt2YszzXALCjZYD88PJXw",
  "key14": "5x1jFW81GN5zHj64TdjHvfn3o6F42N9RCLrKo8omLiTGPBrhzp3gjDf7d1VbnLPmBkY5SpVJkCodXv3eh2vk6Ni3",
  "key15": "FLxBrYmPas3mwVMDZu8vPZ91pBC9YvopV6c1YNs8NF4EQfFxnPbroEea6LABd1Yc6zkFH5RFdP282HnbFkPLuCa",
  "key16": "5AfXFr2d2EUHD1q5p1sgrTJt9T3Dyjj7c79VsdVS6QCvGpiTf3FuAUzh6a4UEA9okZmcXYZ5HvraE1w9AEAtASoU",
  "key17": "4osEH25ryLW88C5JtaowpnJ14Mivi5ZSqC3jD2fGTeEeV1VFCqw3rAMTiXJobEEMqVPrbX9quHeAhUZTN5Km7NMi",
  "key18": "5qs4zri7n9tiyohAGYEB3uLpHvpU4sShgmP2qinmtSpiAbZJ7rQSjf9p2xJSj2H8Z6ZK6RCKG2W22Es9UP5Q8RQu",
  "key19": "2b6JLpT4NuiizmmMV2KdA8wLdufwQyTtCTDGd7GsXh97nxnUfWv58PX9x6FXkM9eca44mtSUZHojGZK4sEX15tJh",
  "key20": "29ZLmVXW38N7Zh4mPLvdeijS1iWgG6ttfM9NUnG1zJvmo8nsfBysqvorGRe8u8Np74d1SQ67SNrgMw21DL4L2EFx",
  "key21": "4FMz9sDAtmbpRFeeScXL9rgSCiRsCjYFmG9eugsyWAXgkDjbHnQism74TQrycfs5URw7UWtVHS3i7fgH472GRnk1",
  "key22": "4Ziomha9xfhnvYpy5zcgZPBbW78DoUrkqSPUEzpFR2pDpaL41ZGgUSG14vYFQM3JGsyMuhzT2xsGHXtizRLLuiji",
  "key23": "55VsUPnudJZUqfA89ksf9Bngbmam1q9VpEGKitTYxzhreDARiU7AptEumkUkYKZnFVEL3vUtRhhezMgmkMrSKtwj",
  "key24": "2B7DCJxFRbventpWhbCKEr1cyYD5EUkXaciqZfXbrvbGaUBEZx81tpFeDwi9UxeCeG5BZnUg1RHXdj18Mnfhxqkt",
  "key25": "4c6k4RoH5nPYHPGE5V94H1vKjmd5VUocB5o6RvPtovmNpm5nNS9qrjZJp5KvyAESrayRYtdghEhWXmiPypZdSegG",
  "key26": "5znbXVGMco7A2db9Pq9Wsujck2VxrCTAa3uoaPBwFW7nKQ2yFWwNLMVC6J592sM7fVViBmHqovAxUzRdZv5M58rP",
  "key27": "4qchcvMfs3rwcXBDKw2gkK8vrm6pczpdqAttsajFa5QZV1ahUS65PVRrPCAvcLvVrzstKGQW41YLUCJkALkpHdV6",
  "key28": "4ZL6fh4AdZanPFnvhHmktCzgdR8KHSwhrvn3pCnYR77JPfLFvvtCDudmF4yokwNJgYUnCGZpZHzT7CT9bsr9BYms",
  "key29": "3f2YTBcNLqBTNk51FW8bSTBWS4xFvsZEcCzSfEUFsmfw4m67o2cnbZVWBMXqJy6yPYaveU33XZLcptqNtyavHsE",
  "key30": "tbUGVM4VPSyCaDMiU6B44MnWgHUJzFCYqSUkozkaQujnydJtKSnnhPSMBkP7NEinWKYEcRK7ms6Nu1V5hDnCtRu",
  "key31": "2z36q9ZQP1jYXzvZ6TAnVWg3h2cSxLKtsCXx3zRyPQ3hxdANiQ8AFfRAYDjipywZzNA7awHRSdT66vkM6rcgk55b",
  "key32": "47ez6qietT49NQkrMqWEn3r41zDWYGZytHPHyPcc5nfD8CVTN1xJzbxG6hYJ3TWsTZq6ZbpjoacGMxSxCFMwXqQr",
  "key33": "4JA2DY1wChScyjJPeibZXBv15vBJJ7UZ1HKA5mgCU9w71AcdrCHG8ct5vTqdfsVVR2qsx785vX76KCGJa8abGusC",
  "key34": "3hscYHvurdZb6Q8D5iSxeyvRJWTjYotFEqPcnGYRJGLYiXBtCV3m1gKMonzw121V1ErAqL63JHvNaQBYcNvrRQ3z",
  "key35": "DeZoTX6sLQNrVMffpQuNNiv8vG3BSiTVBDtmb9M3yToiaJMkyk9V8TTxpbmtCkQ2Krcymm3pgsppBtonJH6M9bz"
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
