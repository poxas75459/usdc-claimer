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
    "4NwFRTY1PNU5pWvvCnXfjJRbqU6EoidjKoaGN453nP2HWWSPCGQPqPXEtWHhoqgsQDvLPDBR7n7bGKRf8bJJceHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52GewpVZVovcJFiGTAKDujFQtMihvj27yzbr62H459HZf4pRFD22PDtm6rSMXJ3f1VAwAz6zDJteUkNQpPkqKMgL",
  "key1": "4UYb1uzekmWfJcJFL8r385TUKbgiG33qjpFJGayaupwm83w8v56euSJ7HRbitSYoY1fxg9gupDRJpmrziE5a5ddp",
  "key2": "dxVXSaaA1VKRwoUeceQCxkxJkYkFELR3WhBfiQXw4esKvXtJtzGnn2WyA6bqdqqP9xPTNkfz9Ej1peZ6nU1cwVQ",
  "key3": "3ax2zKNUmZ61DW5XTHUcgnncZpv1wZUWrfFhZhQ1nY1QKPagsDZhS4LjfMxczwuMbdAZnGjSyerfwdEzUSgJA7v9",
  "key4": "5wnhSwLJ3KvrGEUZry3z3J178UZY3KstzFaThJUrhF9QZV8E1ZNDKwsW9g9dhL8dV6cqV2vvNsnanTB3MSWA3Fs1",
  "key5": "351WKRPn3xACJ4o6iqHE5rviMZTyjg4bZAtRDhJijyf6572DTiY9PiStjtptFBYV5hmnHt4vp3dEk29HvB8uNmNe",
  "key6": "5Y4rB4JEnMeSCeQYtMvW6jLA7Su1jF8PEDC5GegF5PvcYSjopUfr5vc8jxZwbApQRwGcwRjVYFjf4NimnEAsnXLq",
  "key7": "4Y63Qhu51dFnpSjksmWbr24YjNWfkgN5C2vAuEQWuXHu1srBMrCFbvDQ72QC3p77sq7zqqtSmxcs7bwX6q5k65zE",
  "key8": "4wiKNvkKh2EWrAnnHUsMRKYNF1QMEFVHPNbgQzChcKjG1bbGTz2FmKhnCRM8u3DBz2NMfiJZjnVUh8b1pBqcfV4M",
  "key9": "2R9VgxpkXTjhUMcLoatgknMbkMbiLuW4CEtKChKLhtC1yHCXuJnG4psNtakk28wp9KCJ2R5x2y8WzgdtZZVnw1Md",
  "key10": "2F6c1jres8BLb8Tr7He2u6YAoshN7dqo4yCvZYgw7GFBwmw1f69axSyeDU6BPtK5Sg3uzqdcfnMdw3mfusFwJBWE",
  "key11": "kHWNiWbMzUnyFJho4sMte53GBWBj3Jfj1HMgrSU56bJnD5fTp6idNDha7CbzDnqPoiaVJKRv3T7ots1pPuEBbEn",
  "key12": "2w5rquJ61inDjymYfHRS6R9pU8Av6dSaBGsJFRujwCkv3vCeHjkX1Ryg4DbD2cb3hPYg5zveCEgRDrCJQ54SVfQL",
  "key13": "5DoPEHYBjKpCRvvovTmS4Z6jgVb92a3EVKYkCxNpiby33aGbBcRCVnvgi9TkkGNjmGuRVj6i2hfry1h45G321rjL",
  "key14": "2i4KTNvYno6WNvc1JoXxAesyMGzLwPARiUymXQTvsAvj6YbQR218n5T5RFUZjRztUawtiVjQnecshNYCNxyyZCvZ",
  "key15": "2Finbq5f1Nry5bw5kkER2YooNRogeheUsUowat8uVC6QBT1qtyj8J1B5PyUCQWkvGHpA96MA4Z5Y3W85xuzazNaL",
  "key16": "bm3Pw53Jm6o3gpRMxJFr4yQcu3eUveFSvEprF3muaeKLZWnLDtxLUGUbKep48f6KicPn1pJC3UkX15xQx79iFDo",
  "key17": "5EGnR3GiKuLLrnjEWXDc4bDsRUMKdXz2rqWPtosGTbDo98baab8kMfHzQMkLpmkrLKDtTMPxEb72g7PU8T58LgEZ",
  "key18": "x57qWyb1cnx7N3fYbtRfHZfseNPo48mjW3vAYd9PHN8VsxHy7U9FdoT8P8pQBq1fudMCS54vYzbe1PPwasq3bu7",
  "key19": "5RPF7dceevtQfrwrfaePkvkxDGDwVfJ7Bv16g8SFPQhVABfBrdKN8JsVR4hGNxvqg9NKeFGrvZ3r2UZLEqi5jyxW",
  "key20": "Mgz6iWtA9pgGbBC8ST4shQDdDLsRp3hJcWAc9VxcuArvJcvFnnxiSRr5ohjgaQTLFNRXei1nRJU8WrRnaLf1bss",
  "key21": "nQ67jxF81oBqGXBRua2aTNH6qhtroDeLhWzhoVgusUfq26VRzEzWKio1cmYx5qzeT1e3XyAqUoZeaxu3UnrEzvq",
  "key22": "25uuxcio67bFT5YdkszWTbYEM2kbfT4xCjAqv9RMPTZMmi6iBrxBSDyzbypGhR88hs75vjPQGYuvNu5wNpNsbuJH",
  "key23": "4zuDv7kToYs8Kfse2xFs6R5ZXHRi54HgBr1JZhsjE3gKWxqhNHaQapxamij94yWWTDZDJi9D9thVv7MxbS6M5WxQ",
  "key24": "2wccrfKZJ1wfMbhizJE1Pf78AMp7NnRZY1JakLb8vwC49j3GM3pCgdQvbGE2F8tqmxMRz7czBjAgLyARJU3dgAB9",
  "key25": "2vk7vUr7kNY4xwtjy38uNJuHfVw8wDBgA5oqhqM3Ev996ooNWhj1tfK4SYbwX7xmHe3qyL1AAan7xbynVxXfqmqo",
  "key26": "2Bp9qLHcSDDiTLX32K7Zoztq2orb3VH8UMTKrx32NUJfdDvKPUzkr7jKJMcGwA5sY9PvTrHEJ5WejL1Spsw9qa5o",
  "key27": "4ut2GeaYe8PXZ484DJqV3V9RbLrh6uCxrUAi1bHhPc5Wvrf7UzN1qBmMUVyHQ7NCw1swtEkKDfQFCD4nz6tLQ8zP",
  "key28": "2aJ26EQHr2YnbJu82DXTMAyUB5aZDcLdDtTzdeQGqxPdqEWgrJijnLD44yiFzQDDZWZVKnaVrVNESCyV3FdTJzDF",
  "key29": "4hGpq7VQom1Nsd6XxcRsPVFKPo4kspTDyEqZywgh9NMwy9pesZAw1FB5AJ61aBnGyXWPf7WBLEWmeGVq9xr3sZSV",
  "key30": "qNqa7223aiUowJczzXyYgdv37z4jxN17a2xZp1Nq6wDe52zY4SmvD3F1rZfYnQqJicuC6ncF7FNA2tsNhEGhR9e",
  "key31": "4dmSf8eTV9TrC2GSxdsibZJX41cG6MQ6xJ7jBfgUNQXLA2x2fSgdMax8wsyht2VNLS2TRpQ1XfgvX4SYUYbYUSk4",
  "key32": "4cMLXvqTjnmjQrhgfYTBvhqHSbSAWKPnQov33Mn1hq63wmRQZmXueY89goirSnEmH9VJcH7FeB4v1mAfd6AFWJ16",
  "key33": "5XZowgZ16QsLFur9RpaXTvJZWtroiW31bKc6QwaL9JfJmSVeNx8CoemZXEdRjpfDP6bSRYiTRrmPuBaKMV68rtex"
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
