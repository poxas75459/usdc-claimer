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
    "4R86jCpUvrEPv32NDdoJWEFpLctUuGiPMMBQNL4EzsbVne2oJ6q5Xd8pEN1oQ8ATawKdmUQ8BsJsuCWj3rXxLZcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J71KvM8zPuEnrB6xjC8GgknBWSoNn2bYFZa3W2VNix4bRYptMsTNUhHF7JM53yqJwTuLrhnVJJx136Pfx4akJmq",
  "key1": "4bqNXSaCT7X4ncE1KMmad3vLUL1ACGfG2y1dd26aHbrvHpuwrXudKdfwRthQYCxQqcFKMGH3bKHHozjPYqY8U7Vj",
  "key2": "2TvwemcJUs1gwU2jfxdSQu7gAR9SnqXqNVj5wginQxnsqPsPZni2BE1tfdEeYBNQyNgMenM5x25EH476Xbpx1Cxo",
  "key3": "p66aAHtGb7Dcezg5KAN8Ki3oUHTTQddUXJkWGpDXRxgqiAgrtTWGsiDGpYTy6ShtNs5hcQshpND5TDzNSrZhfEx",
  "key4": "67Tw17ShB1u7EGRwCvD3pichgoBtafv8UiccpBFgXpT32CTkLaWE3qE4oaYxSmNtsvN2U4bkh5XWtawHudjoCoH3",
  "key5": "3zPRkttdwuCA4ohsCwN3mQahEBSxBwNKgczxtaaFzN7DebwXRiyCK84RCgfhscWvT7SzWwGYnHjrxL2a6zPXjmUi",
  "key6": "2TdgNyr6GbFDsa2bQee8ArbRXfCNybdo1xnawCimEKesku3o6TKwdcen6i7M3AED57mfuGB9CPiNWegE9YvN3YB8",
  "key7": "22UDN7RGS8QwPudhhXyVeZwah3LkWWyejumCcNWoQnAZ6sFHG4kzYyqCrDBGNqSWb39HD43rPsD1PRMXNez8g7t5",
  "key8": "4ovcCkbwJMzgd7KVD3p1WndiLdwuUQKTPwotQh4ovxd7PrQ8yiQZN61YhBcuw7sY34mRaSsTLCzeFawwXcasomoF",
  "key9": "2HNHfNs7T9i8dvg2JpueQc3erWuYzfrJrXbHBexN4qe7PTGiNXjeENuzokvEUWUrRRy43dXHZJLWvovyM3GjpW2x",
  "key10": "3BB37PK1WD3t9RzgNW7J2Rx6BbFz43yQeyE3EMY6i7RCTJBJzeK626QZjwEDUVg5CZuPsRcULH7tx4hDY4PwQHUT",
  "key11": "26sPAL4Lr1FuDyLtp2Q3XF8fHPotJ3oZBezovgXVpAoBKBRhaACkz43xrgKd2s1AHYGLbjMbL7cCxTebKVikFSVd",
  "key12": "2csGK7F6aTYq2fjYjQDp45i58y4ti3qeycR5Vm67NHqKjkMonJL8xBCncLxgfd4NpKHVR7fB4kdYyDXZ1aQ5XiK9",
  "key13": "4D6paXPzDrCc4xhspUuF2C1BXbcmJNjBq2MBJ2hVFrgL4kWFRDKELWwh8J72i7hkA7yM4uD5X1uj3ufJFWkKPwAp",
  "key14": "5uTRS5sTbJBY1jRj9cNHbv9fYMbyfnEAUpuV4456jnaAwgXpMSmSMYpxRUCHswLyJUNZYDNrMZrWh2kpG87SY1eZ",
  "key15": "3DtEwBP7LzjKDZSGx2gCCdGYJWG6W3fCmWPcJZpdESvQJhy6H7BNM8WRVNSU3e9s1sgNwoNyxcW6UegyxXkqDemY",
  "key16": "3Tq5nAGuPrWk7DqZ9Vq2NpUnPXNZrtzhhrQY5RrVLfBwLTVm6KbfS8L1m4tTgLycumficUvU3C4rw5GjPtGLP71n",
  "key17": "63UDKK4gpPoXsPHVskVu4SPm5rrAMSdzJ4Bwc4uBhAXKmvbutsGSUk4UZPwFERVwbnoZ1hXA1J8eK8q1QpNfbz4d",
  "key18": "FZcjXiGarjfir3hxjFgpH6cKjwzxUoRGBtjXrvLkWonhrEzVNgTygF6udfv8D4pLLA4s9CWWRn4X23QbJqeH13j",
  "key19": "2RqyZHUCyKzR3u4qNgvawq4f9y3XCdD6Ka4Zo7q8zSfQ1EuTHe39GknWXgA2uPYYVcWsgnSJxQP5i4qrPsAanLiV",
  "key20": "3S8WUKL4CcCCJNKRAnhSBXYCaz6LSApK7o3K75qefXXwLMZEAYeAyft2cgyayrqWFyvRp6mx8TjqHegfN2KGAq3N",
  "key21": "3uVLMd9pLxU8FaUcPweKXNBLGPyFvPxmiaoTq65CZCqcZ5hm1QUWRbamzQmAvTXrUk2nhWnQqKPJs9GJZsX6JjA5",
  "key22": "61RScER4xqpi7hmErer5XcGJcXGxaiESZaJrzQigfifdXXBpMFgwF85ejuLaGriUdi3zpR95izjTFfCZWwiUoxRk",
  "key23": "5YNaeUdXxsfUagNLMbq6xgTsVJinD57W5MNp77fFDuSmjGyNKHUoX5FAFDUGfDajsgpkYj6BSbQ31KUZhkJAWmAy",
  "key24": "3xpBKpt43mnt4GZgVJPeKs3Y2GNZeHTyGcSKqa2SyjmkMTk29VAF9o1tZaFLvkF2v9nCN7VthTWMFf9FGCpNMgrf",
  "key25": "sDdLoWjVdr1EGLGPJxZxSK78Tz1fuAJLPL1rBbruF1BykjBgmiEdrmc3BUc5Hsds4zyT9sUBveaB2DbKGrQAPMa",
  "key26": "2tR7PXSGHB5JSCYcaszxABx6yg8RLUStqPgo8ndUCQpQS4gWgS3A59dz2NVQbWixFQht177vNTPLPBKuSTNvuAxo",
  "key27": "FF2rk79rsvphAZBPxbr2zLXnsqntuCikLH1YaD6bbDLwXCpXuJ9zk1Z5SggBuyA4yYEVzkvboXHj93PeAxVH1W1",
  "key28": "1V11HXVJLQyS9DLhxELoSeYn9veoq3jALcPsNqyWFBxudstFCd1Fc58s9ne9BCy2po2hjkhzSpDJb67XfWTC4mV",
  "key29": "4RasYP987TYZFo5yU353vH4x2Hai7yjJPN5Cp6a2nBpjAwUyu3XtDMvhs6V8LPVRM4FiHrjKKumHJc9Q7xgc4FnD",
  "key30": "uhma8ZZs1pgyePDwYX43pujDUMGa6tdhLtYMnPWrWpiqACAgLEwTrMnArAQfcTh5mHXer2GFBW33FD6594QGSJz",
  "key31": "RAUh3FiPSL5HvSgk1jUEuCnh9ssKdppZAkPvDYHoybWzgynxJhzcnqdphZ4L6UVRHnVYdCRNkNCBLKwEnbWThjD",
  "key32": "2xnxmdv1nb3Jxf33iytNBdaHTzhvVbDFBH95UqJV6VmXrLP8ZP8wd4VKG3J2GGHWDTdqGeAfGx3WGHoJgdrL7Zrm"
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
