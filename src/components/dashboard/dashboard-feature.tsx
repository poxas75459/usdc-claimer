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
    "5feDGAAxM13u8Pvf8nYbvASDoE5ncsnryzMQxNPhCyBVVkswAwzKMA1tSs5Qt7Z6X2ceNN7c7t2bXFDBVtFZ4Csb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U5wPHEN1h89Q4oxwwvvNzG7opoJiFGtWtTfsMuHWMpF9kUBxWPUkJfVC7aR7Q9rJ9iE3DGkHVJp7FHTsc9o6PKn",
  "key1": "SgqD4Xfjnq9TANPBrfQZPah6jt9oKB6M49g6nUoPbCADxPMk6GT6YXdijX88TpXyNWrioSR3J3coF8fSH4H5PcY",
  "key2": "5S4ymDwJHXuTybjd2f6vJht1fdJEEPy1Mwgqk3DWA1Sfe2q1cuE3xc58qkhgrCD7bDfXPwsr2GssKibWZ2A7t8Ac",
  "key3": "2AsB83KNBRapYBmcGCx3x3aSCERv2eVeuThpkyrcbRTyYa5SQjxH1D3gAGsZ5Efmu6Nuq1dHTcSM7X6MYSicouzk",
  "key4": "5RAeegrM31Skz76ahRgvZSLyncLkAi9PPAtVnkx1ywSd2nNZCWdjmMzb8z8N8ANudXmQ9wgj689miLptNVVRUhsj",
  "key5": "2n6i2g2AX1wRG6YEPvBH2ztdWNXQSsGwvnNU4LkGQMZqK32b6WTGHJPnRYQPPmrX3nZ8zHjecayryEQtajAb9hxb",
  "key6": "5sVCTDKQabmC6xPw7rcqWyGbPWFH7fQJwLvk5CKCu8jVRQpJrdvRnQnrH3w68qGxN1ZUUoDvCiZARofQC8zgh5Fp",
  "key7": "2RrivcrBhvWGEWGoPoXSGp7Pk4uQxGCm4FCfUB1mt7T9eXo4DHkXMPA8bSaZt3TaVMnkBikgnkifByBq4SQYBSUX",
  "key8": "4AeSSZ43L4Kv5e3bE67B7FJ9dMU9jcF3XCBjtYZEao3CSEvvkYtJQsC72828RfwcntLoQEMPTNS9Zcjn2hkivprf",
  "key9": "2A3gP83xBNywZHx1ZD26KTrpZ5DEQvPGfpaD94sFgDJgs94uK3odddejbBaBpqazbdXG6KNEcJxzgaNTFC2KaK4P",
  "key10": "5kR896TET35cKv2sejNCrnV8XhVmnFXG8DQi1TMDo1BQ57gRmcTb1RX1UbcNqDBkAKP6nD6pWJHvtUEnRYBJHs9P",
  "key11": "3n5Wej2BJ9KU24EoY7tZo327B59Ph57WwJNzCNjgL7UMu4eSNZ8QQ3cjdFUtKHZsuFm21S7sWEkmBKkoT2JmiDHB",
  "key12": "3EtMggyUaXC9hpFoP58PzvT3aBy9u882ECgiyCnCAAystx8GYdisANJpmQGokRTb9A2RtqBoTp2rNbPHZudrzMHF",
  "key13": "59Bp9tRqhMEhLDpBbExKjdk4t5RfCvcJbyGGPTtL7gxh5v8ZHEY8WnCojfwEGEKKy2Ej1svNNRusuqyQSmNJE62f",
  "key14": "319yMqds8KC6PaeU2Lqffbak661BkhfQf971y29iWn68MMqJryvwFYGcj8725iMS5RtFoijHFPBNvpssL8rQtMv3",
  "key15": "9LYFSxnnbia2AhRQKg7kmFyVTuhkd1wRJnTUprgb5NLGWg1UzBFp5aQ9HkqygNVFU6khgxVW6Ns6pAZarBmsYN5",
  "key16": "49NrhoAXDhtTaQt4UCqQAr2gVq3MqFwMWwa3k79HhVLykPGiSR7Sk117D17tM4p5hva2coyrmecaCH53VY3gsbZN",
  "key17": "gSsvp9YuonmSPnxPe789RAwUMBoJNYA8Har9XKzAD3FUnZCLcmYbv4x21or5ZsjJygWjqbCvb9MRaf7jBpFiTZd",
  "key18": "3V57L6JkHowsskck4XTybMdj8tQexUwnfTjPfpRH4QKitp8fSfnruhqt2CCPZx355sbUTHv4D4qnsjLgipMv7it7",
  "key19": "3CRVcLphQzGsSDcwdjeqqNSmia8nFigPimUhwNXANiakG54UJdYSS2MRM51r2ffzPpAWVEq1m5wdfieWvw89cxnt",
  "key20": "FFMLMqgwRYS366SYL7bgMvBzE5upeLg1VYpwpxjjV8MDWj4yWnpKzKdeuzxnA72mp1FoKb5EiFuXpj5DoK4iby6",
  "key21": "3orUZhKkUvovexKur8xek2mgse56u8ZdG9D5s8ALzU24hhnaPoxmdCZY7eCZVBc3DFviEQN43zsczY5puVTrRoBM",
  "key22": "gYUKZtKTJApV5kVLTPYShwRqYKP6AN364dhScBdZYKP7vrvHEeHHH39G6ALnXenndxaT326JegP1tWyKRattToo",
  "key23": "4u1t1PZ6S6fwKAMmPCS4dR8Fq34Gyn3hE2Rfs7o5khgQGxjhNtiiBjVchBsjpbv652hjpvaKpUHPqoQqK9Reefuz",
  "key24": "5UM2629sHgHUEwMVD1Cr6NApvhe83kkoTncyEVG5knm9xXzHZsX5LDW55LuKhDbA9ZvC2zav15P7MmJ6Hs1odWZG",
  "key25": "4AfWDEuWEJb5TxzmC4etzp4euijzE8pGcNHjqEGF5ZJjW7VGN8XtBxyRqq2ndCRwFM3jAyBbLEjQQUzG12xfY5az",
  "key26": "urfc5RUCzPtH4MjRyDGNJa6M819XaySEsXnFXPGWjakDNRJKLUXoQmYmG2Yd3CAYckurhs2DwomSAW7gEZwYzEg",
  "key27": "5GZXjQRP1dpuA92vru2L2py6yGBg4m3moHahL4jUoH3tEJtedmMtXvj7hPQWhSq5iy5x3y2xeqRYbgZtqGuSrhax",
  "key28": "3trvw17pS6tVbPxi26v9Gk4xYNorMacv9hi2Shcr7RczFCheV4yTjzqvvmFxcLZsR9UCJsbdkyf4o6rNW6MDTZD2",
  "key29": "2b7jceE2KJGx3jj21LsuiWjSsFqs3zP7GhTbNm7WAGZKiQGzh6tWK23ZK4pcxTypaCJnjimGYWjuqMEKbfMqJSGn"
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
