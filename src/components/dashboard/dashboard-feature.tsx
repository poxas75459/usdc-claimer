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
    "5xdEPzjW787uT4RWsbbHz1zpensoNdSHPBhd2kGLgEgHQU1tgdGzJ6NfVaUSiyuknqfyCWhUAL599UB7PwNapqLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xAsm2UBiXNyuz3LhaGc32xn7w487gvDondEP56fmo32Qr4PsuRTZ1d15s4XHnk73t1NArXjBb3XTtcwV85CR3Fj",
  "key1": "2fnXUfQptpcSE8d99mGGG6hfZDnGnapxSrttcvct6q582LZ8XyLsgCeCaaj9VmrWTKTVgr3epMxUjvLDvRpCALcw",
  "key2": "2BN3HeKVkWnspSbVJodS11yURxFUmCHdRxT4SgDnZvUbpsny6MUSYtGWEFi7ZKJnyL8xKdSbG8kciFDKhthKNgqT",
  "key3": "41NaToaz3rWpQyzveyWhZGKfgJWmeagUk4YhdA2i8TGoqAxguWHijkBTUUCwmNFmdsq8C6SCPeS67XKpL8t8wBQT",
  "key4": "4NR18kT9nciT3GXvttJAN3YpC7hqnEDt3AmaYd2oyo8NKd7u3nBt4ByGEwg7SEq3ySFL2sjw7AAPhgDDQ3Lx6qMR",
  "key5": "2SNg51s9qfXgN3rT6qHPs4exAfN7stuwjUt3yAWhFNoThMrCrFoWVmRSKU5zWhvvjA6eRbQgoPQHswz71EExKp8q",
  "key6": "47yy66SpcCVT4hpxcpGs6hCuWSdkYCwQT3fSQLRXeRRMc92s3VHyv3DthaSsr8XD6S3xHXKYtFYeZ1gEGUTUgvs5",
  "key7": "5SBnJzksAUtYRPRo1N2ihbALSvwWEGLCedbV4NuH4iQBjJwRAn9XcvW267ozuChLpUc7ebx13qjrgp6UEyzDNpHh",
  "key8": "3ZPaEAhq7rBg7tP1JgYpJTqXxgh6YsLgcd4XnA4CrCGvvZbGN5Pu6xmriVbVQsHhJLcHfWfamgWFg5tDAvf8ws6y",
  "key9": "2aFpyhfY6ovvqXNTJN72khsaDRHYpuKvi4uJ8bDJnMHYkXikTha3rQmiyJyD3ZbHqueT3bdDdsGRokse3tgzpfip",
  "key10": "5z3i4SE2GTUoCrZeHhUzV17mhUTZKdbSfHdxw4BAxC8XbLbkcC58y114M3QgueH4vkDLvzyfYuxjiDLbxevCb12p",
  "key11": "4ZKSccSr22AoTjYTC7T2aHap3UzmPiYbkKR9xEmVhrBn1UHSF3gLWt479SUfCi5RqmqKNsXBfWBuqvJTRQz3Xczd",
  "key12": "4neLYhDE1SYHyRg8szx1BiP4b6hrF97f5BpYdcFSjGeXfvF3KwPr1otk2fB2xvSNSbKzGSvzpdDgqoe5hP8EhrU6",
  "key13": "5woVk7RJAsFHXXZL1sk9VQiQ7jcCE5T3Em5c3LQUF3VbFRBTvL8Xe9u9sHkspnQTdAc5U6xKLn2HiET1UD1gfpmW",
  "key14": "2bmmdCTbfZcL2TFy13UgmA77A6uGVSsRJV9Z4kESAsVurZYhKs36tKSWVn9b5cEUqvuSQhWBKnLL2mA9riDy2oH",
  "key15": "65LY4ygj96K9my7GWQQXJYLUHakUApLXSa5eav8kNAm5oEa5Jgrk5NGc59dWcohj73MQPXFoWV4ztsK9VFSyJb4d",
  "key16": "2B4Vi39C53bNJ5bidsuKLFsRiY5nV4jgeBfGnDHjtUVMELEN6r53ArD6KAtNvuV7UHE4pZhwVZQKWuew1uovtxx7",
  "key17": "4Akn3sWmP6ckK8r4FwKkpPeSVpgqJ1e4RNKAZnU7hGfsvo82VsuroWTLd5cmSdZXwuAZHqBRHhYnzuKaPEaB7HN",
  "key18": "42ddf9tpGH9YMA9gftmMPbRrDCW1zjbsLmPrVR3iVWyK9zNw69dTqKp9xVbeG41MwsG8XiviCkXQdfbUBvcxQV9J",
  "key19": "5qHLnrqgzFiiqxj7BSg6A51XnXCwmwokrWcVAX6y4zGPHSdP1AxA5LXN8VfhJmSSbEG7kVgB9QMxE91Ai8jgkRKx",
  "key20": "59A3JoXYBidEyN79VvY6kyaDF7muHBkTYvuc79v9CRxgdv7iXMrMDarVDwfuAKm1hX4JNjESEbcVE347YMLKkHuu",
  "key21": "3PER1nTqFqSVCUrEaSo2PYyoTkVdK5xk1DphhW8LKkg16cgjzGT2fM5QEPUyL12ZH2t1HBFVEuD7un6W4XZtkKQ4",
  "key22": "2UHpdRqrhKpuxD4e1EdNpfLVaitrMzMZC1QDRG6TtQ81A53Mx1Vrzu57EGyeiDRY5YSnYEDSQt953dBmeBkXhT3H",
  "key23": "v4irJFyx6s4myywyDnGg52Vg1APtVzJVnWNPEwJP9ZwcvjXNnSHk7ZWAGhKvpuNNPbbj6PMrB5tCNAt3ja3i8ib",
  "key24": "5Rr3Hm67aaTcTQ7mTJ4pUQkJ8uNPbpXz67PR9cxEXdWoXm8dzDnr4yRNjeRJAL3ViLHCHhp8TZ6KiZUrByUDH6FG",
  "key25": "2m1ntSL8pcSm2oq9nWGTA4yoSmbLa4gUAG1bDXuvhptqfz8JeXuaQC45495TyMZoZAzGsmnK28h8LVv2uqDK8wBV",
  "key26": "4xxsvbFjA61eabcCrnqPTME88cMTBqgFkzFcF2hmE4HdBfx7sgLLA3Jcd7LhE1CYmGDoZvnS7JbidK433EhuqydZ",
  "key27": "qDkKsRFTuiTCRF2TaeWvPhGWyrncDqMHhV9uuo48akRuV3f6k81izQtJZiQz7cqkLLUb1ZQ5YjAqrJDMLe1JosS",
  "key28": "2MQgW2XqNwL7uyQ6coF94cRrkSxJKXKgZj4gHnyhPPJbY3WZ9WaT9Jns8JqbzGEYdu6U5S65hXCKE8fbh9FLmWWg",
  "key29": "5nWZFJvUwrJF6xZqTiWMQkDGewnrCbQZMSP46DtJYjkyKT5SQaZbuX4WhMLdvZBW7oA7M3XXXYLP9RYSZe2aRvXL"
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
