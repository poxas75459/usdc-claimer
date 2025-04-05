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
    "573BiFfELKTmbFYk6MrEEuU5VNeJ5szbX8scoNMvdQBnz66jGf8ocGi9zi2NxETfRoNUm7FPK8Et3rRFxbXozJfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EJH5KGcKwbh1X7fEBuW8bocshhyszmsf5ZQsBLeXaaevtdoL8ZhNTEKK93ay8xPJwQbiNsAVAymsmB6Do2EVcBt",
  "key1": "2KJkSeiCjm8PwShTYQoy1YCmdjDBjDgETYYVpsQKTBE2V6A1pkpfy9XkedntArLBrR2iYUzRexr5X5HQMKtFcxH8",
  "key2": "2wa8S5CS3qo4aRijD85mcnRRzZHewfb4PWWJWF7sGJQeBMEfCBUyzN2e6dt8XwKoofjuFTN3zXDo2kVnZmPvGDyq",
  "key3": "3s7xomzYdBbR8SMS5ANuxuTfeqmGx6UKKJW3hxEhMuHgE55gmnmR1TRW3vQJ13HK2n4W5Qh1Zqc9QokqCcYiPxTm",
  "key4": "4aReT74tcfJfdHe5AGdFCBY1cSKZSxXceH6kAd48vDMzhXbp4GayvxUopX9Dht7npB8somBvXPNNtWeCe2hhyZPp",
  "key5": "228YV3uwcKcpehwPxQxcCG37qu8TAijPorL7hVV1pNNhRXYSbAhfvwA7Sh1k59PUhDycDMmxpzrxLrG3x4na8rvN",
  "key6": "4Jh8XopYiWZpj7gCMt9taSL6PPwrixmoc34fWShfwredxTCCcDTGZBoTGd8qGdz2eYzzYim2wEA5P7BVgkP4kS8C",
  "key7": "2qGDAhxGC9rHSomaFNWNKXfqm8EDkhtmUiXTdSmyo1uRne6CTmgS6RNa6g6tCUnAKzGoLw9Z8uXR6NV31rEBb7Zh",
  "key8": "4uu2eGW5ktsAaD8Dd9wsktJe1Renmy2gNrLzURZgHBfju2ESqVbmXFum55t2USnsu5aymoMVdzVTjJsA6WWfZEoq",
  "key9": "5MVW2vjHev7CVb1MPFGdE41gEHryWWoMKN1Y44WrjsqasivxVNQoKXKcTHWHxpQwGUFWrY1h2bU4HikD98FiHYCn",
  "key10": "4sUvSyD5utoVAFQrMTsoHQU2xfg5zRENzo4VHWkYzK2bMtPUoWfkN3S45feiy9W7tfv6je12ZHjv2nFb17if8V7R",
  "key11": "46ECfoRKFNVZ7hTB95zuSqETknmpBdg24nYoufbC5cyjjMd24cDuVD6PKtwGyV5AxxzmWDMwJbyKMDKEfw8HKXx",
  "key12": "8pfCXNqoWQHXHWjfJpqGb18FWbJ16DanrqW44F9kQuGNrzgnCmuEZovBseLMHC3AwtYBuTX3gTZMpdYzja3SNKX",
  "key13": "5a1u1Vt4z3uiLucevMUbPDQhXSFGByu4WwDdRvqAQ5vkhQRdnMnJ6bdmgtG8PvaPbzvDVqjy78H61prywQtLvnYs",
  "key14": "2DtZWoEFqa3QnxdSAbpTwem2UDwXjx8LqKnPD6GXmocn3JQcbNgNkTkMaPycLYktPVeCPkDNU3gSymb4My3GdE7f",
  "key15": "dNc1nBkBwG4JXaBScXZWdCudVpKEKLBFr1Uq6Dn1JQs7J8xhXABTnvY9EJkV5ACLJhHVrduSi6VcFqoDd1XLokC",
  "key16": "CdsNNhSZLFvt23Az2Ljjm8LXh5nCvNQJwK1FXiTPh7wTsEgcRD7gkTC5DxQqsirjVrc94Di6Y82KY2ze4vjwewJ",
  "key17": "58vWqZaATSVFMwP4a3tmBKoXy94pm4We4cAiPjoVwBPmnwMuvBWdyw39GaGcW7jg12Juts5FyFQS118kjxecZF7",
  "key18": "jaZPB3dXwLWx75jqQo7N4j2WiUPuVK2Y1JSQRUAQ3AkgqWks1gPnx9EWyh3ozc4c9p9siNRev6uPAfCLzcieKXr",
  "key19": "c1woxFeyBtyqmEtnxAmvZadhJnEy48H1LQ4LXtxkCH3BM1LYNAKPERJkcthaacZRKHGYBfTBWRrawu7T5dqkPNA",
  "key20": "4kdmVPnXzc2goP3u5Rq4Brk1pyN6LuMAPc78ErJfUnqCoUCFw3A3xW3Qt4aAeaif8R1nPjiydBnDVzTpazBpKaHm",
  "key21": "3FwEfxc3CueH1d45aQsVBnKnRJd1QpFBVfw8bSHqD668EQ1BsQmruqxyAJ8W13ZBGFu7q2tViAYhGxTkNAVBsPo9",
  "key22": "5Kf1uhuBDjbrw86LiQLqJZhtgyWBvJJrHxaTB4pBxXcmes11kjRshZAzEK24QyRwnThaBBpEpoTijjLf6kj5qXFL",
  "key23": "5zV3hRuho8y3TzHucvFYn7yf8qtxcqZGXPTsVJRucj8LG4xESjq7ieqCmAVtjuF6UAD32nh1gTqD1BjXDHKYgngi",
  "key24": "3emKahEDvnwc1yj8PreCJ3mC5B8SmDGXrH7LuztJKYw46auGL5ehRoPCsuLhRLqSfxkEApkNqeLBqXg8DFX84PwU",
  "key25": "4rBDjj4nvbHL5oMqKwTYcQ2RFDpaNxo7AmXkU7EKp3k5uaUG7UDoCAQyyS25xmZJvuKjXwqK8ZUJj7CozrzmFzgD",
  "key26": "46vYhSZ3Q5hNoE6P5yidARDDyjQPJy8rLopbRBQXKq51pipqspHzDo972HBHg79iYP2uMstSj7fxzsnZ9nfGV2N9",
  "key27": "32pqPSjkFMiJofbbSb34bKp4XWugF7n6LF8BDbrWxxsDZNBAG5kywHu3G4WNPAn5cVyRwQLitYSD6dindEyf14FM",
  "key28": "vk5ohzfruNHo1QWJPxYibv46qchNRSPhDfBV3WcQFLwrxxSKzPAEdtA4LA4MFuPZMfqdfPUhSk1sEJRcpSE82PT",
  "key29": "2zcXUkBNXq84gDLRQwWgoXmmt3uBJ1R8Vu2aqyv7RoYfnubqPFiVU8nBTa4JNVXZzgqsXFzjpwiNjcCwTBeLUm5",
  "key30": "2QFGmpGXKYtD4J3fCqHbUh47N7N6sEa5hMHHMeDY3Q3eA3yC8RtwmQL9GHv9YFWRg2kyDb8GRxSmiDVgVDnsUMq1"
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
