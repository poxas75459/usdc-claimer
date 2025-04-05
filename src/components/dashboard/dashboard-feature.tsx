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
    "268DHGouS4MpXYALWVKGaQivGJSywW92BF3eXadMuWVJ2bvMsouuSCPFCCiWbJhNqM3fgEDBHDcXDF93SxYpWvBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VCzKRyTEKKwfE3edFCg8AQn1QdGSdU5ZuAxyqy9aWeKGaggs4sQqEXNuGLtoJSh6hu5ywkie6qEPV8VS1h7p3Nn",
  "key1": "4fxAvGa9w6pXPXau5pFsJZt4Z7Xuer4h44drwwyF9GJyetpCR8hm1TX9xqHPQD86sWHqs6vrU4BSrfurFZXyMB8N",
  "key2": "5vtzRJrZ6oMbqHA1h9X8ByhhVXQ5TucepioX1gwWSezYg7WBKF81nKwfsHsnWRRbguQQBfiyg6HA4y7WSDnFQAF1",
  "key3": "PtD9g8BKm38XDfRc5mxV2snFPmmf8zGQ7ezwbCBMuuy28V1qYmbg5DEMinTqjukPQZn1wFVBtX11hx14iwMWZPE",
  "key4": "32otznuByAZbco4ygNu1Etuj2jnz87gXPfbBZXQvwnx3JBkmDzN9L2zRUKJaD8rQTo3kHmL67hZ6h31A2WGuvnm1",
  "key5": "oK5qmPweUS6bkj56Gx8Q97ikoz1ZmmZ6ekjocSNmhmrHhXAXrYdbZVh79CVxWgQAT35sVKoJV4ad1noUkNnvj1j",
  "key6": "2PQ4JkPrT9LBuhojUM4SuXqrFsLJb6m9FPQKcJLfL74z1phDYc1eJ1A1jAkCWsrMXdy462ho9xsd2EWAVPEdrdsm",
  "key7": "5EaPxu2rUUJZf3vLPVGa3KZRnHZXZJHzGjgoCE5LN5koThZGUspp8fxVB1Qwnc49vRS3CSyPZ1iYbnU6nVfacaoZ",
  "key8": "4e1FbP1xyQzSFDTav6FP4Wp9RRWTahrDAudUKkw9t7tViFru9ssNihpY9ctckPFNAct5s5zoUtfGfMxFRzf7L7Ko",
  "key9": "66Ve6RRTHBQn767hRxn2EL5NDrfBtdGVmCHTA16cA5GPVV3PraTpZAJJCTkE9NSBNVQrT9ZzaKHCaNTBEeDyqEi2",
  "key10": "3itLiXMA1SYW5PXzfxSTkfk9VLHCVyagzDMuRe7NZyv1PJfYfBQhJNA9nUYGVFXDyzQVTyYEf6uH5hXczq5TU3DJ",
  "key11": "3XHuDB1KHvbXrEkV25uTQ4Z6g5cs9yJXF4H4kb8yymfyMK5tCBUuZwEgDmpZDnuGsnorWz8fWxfy64bBzoRFZzh9",
  "key12": "2qukTvR7dAWYTMBLF3NkasjjrpdVdfFNrBJNPn1oprHp7eptZWDeeY2qCwSGQsKEJmENdiU2wE2DUfjQdECBrLBF",
  "key13": "3oxLDEosjFAWcSEnJgZkhEaU1zuqjmzN4ozn5K6zKs9dP4djP8ae3m8c8VFbEiLEmknULuXMhXmDV8AQK7wQ16JG",
  "key14": "p5KrJEcTxChtabJ5wr6jJdcPgrYwxxTk6Ckh3FGjdRnrLKM3uMe7rgzsErfKLRqNMfJARWF3dqj7nWhCQ6R7uTE",
  "key15": "26jhUaB42bFkWBNXKCxYTFEJmWfXphMGPhAxy7ibxC7WSkkACA5xEHrFnkc9xEzvEeNyMcAhgrJodLrBrm89Q5dH",
  "key16": "2gtqKAzFgxR5Z9T7CQoLuR1wPBt2P3bw4CGCTnKRv7NnBpuyAnNXEMLuKpg8f7XhggppmziBJ8gkGU4mSkNcRi18",
  "key17": "53pxmNWZ2yCPvtPfoNoJru5vmDL5H66RtZVsD5psZkxT6X7ASNmn5TLMmHvmgX7BQGnWV35WmZthXQgqnSni26WW",
  "key18": "2CJeXfvVRhKTakjyhtp6FBAsX48eZDXTd96Ns1Tms5gi1VCNHkY6Qk44ghUwkzRA67gAc38pVSDcJLUZ2pT5jPK5",
  "key19": "2o7Z6hKZwhNF3WV77frwzHfWukWt3XCMorXohNF56cEK2q4yze7kLPEV2gMfWBfFptkmacLGThnouPo6oWnbxPKJ",
  "key20": "3Xw8MTC82trQgaG13vcqzKCsGsYuM86qbxhmjEZthHzj9b5KoUd6qtgmwyx4EtPV2r27WMdam51Wr1MLMWDv5Yfs",
  "key21": "4xGCjjSRjfPRWEFqgrMyTdv8gQRXFDm6c4D1RaWf4c1P1gYAsLQ2aBjmoDhcastt9xjkzZ8Qs3JnYXodybWY6Wm3",
  "key22": "3ujuY4EjWnfTi1uyRD7h9ers5ohwTATCyRttZwdwcikZSvRDdXhgtmgEW32sHAMnfkWkgoj7h24GVVB8GUXMWvh7",
  "key23": "iD3tEfZAWCt7Xe6vsFsf4wCCFpMPmoRAg23gsP8vvZf8kRCerx7GJsMX5xSnjoy5hYdHyUqAnZ25Vcj3Y3egrdt",
  "key24": "48mE17i8XCbr1ifhiYsUY58GUeVGgdCAYRHVv9myK6e4DrRxsyKgd9vUw9g6tykHPvy2zNXGNoUkjYQrPZWgSEX4",
  "key25": "BpPfPG9jyLuVczBNHc6yUGQoAksLsn56PrDp2xS5AsQgaUYuY5aHssomHc4V6kSXbwXavUNH6uRgpAQFP24WbKB",
  "key26": "4su3rFXBuqzyL2M6w2Wy8Jv4y94QHBRb6Ppx6PXAfF97zjbyuKyvCfpFgUvmhA2ns7ZH8yqfNmwAiQoqsxXXpz4b",
  "key27": "Kn6CB1yHuW4CTrmYaJPoLW4gsv6qB2id63RccE4m8LYy9BPsHJAiU11F7KmMYWEL2deaEwwk3TiZYWrPizJ5DBA",
  "key28": "5myWhnus1TF5WoNpdUp1twBMn2SrRWKs6jczZuDbdHPxCNNFCkAfoKHNN4RnX4VnbeupSFL5Dta1AhAWm7v6UPaS",
  "key29": "5f6jbhymiprKuypZY585XqjeezrYjueCjjDF8XGSrxMcBL4tMQqoRsm1tjjK9sQfkZXK16t9HjQV5GcKJAFPRxnG",
  "key30": "4zEGCzbntZC5WbefmxUfEfBr4VdrixZrPVAbEYqw3RkfFKCje39sF7q9sAysBYyqZL8ReBUgjqzmxtT4atvDCWeL",
  "key31": "CjPcQnEZ4Q2YwFbeCEfdNw4ZcAv7BcG7phyoR7HtiKzUFpmgJZchTFATXft4AbicR8PNVbxbGFRB8KeDZvoaeyy",
  "key32": "4SLbGN3MfsqjKX4KedrgzerPDHyS8J7v6HN2AVMjsVHJNGgHkA84pwoRknuTTwAddnJyuV5eDnaM5hkBGPQ2qz5F"
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
