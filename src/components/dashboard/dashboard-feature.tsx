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
    "2YNRcFXZFqgW4jhtRhqTASkPk8Zi9rmwtcgAABxqpg8EK9qdf7iXpGVgL5FTCQeVqpbijtD5ejJMAEXXi25MHufc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3SNkzBFAJsbn45nrojDmeTyMxrRPZqevHnKUoYQ8o6cANURy6c5edUntvXUBTk4zSYdH2uLrxV6paLvcxHXtqC",
  "key1": "2kLoFARdpFSuooRTXPVXVzF3rJ1eUAeDRnF654HTpFRg7DHbERR7HDCZpyTYvu5X2CcfAQ88k2b8kbjZfVKaDCU5",
  "key2": "2xu4aFjBBUJRH3fVfW3dXKUYrAkdkDCfAUvmiwtKNW44AXfrSzaM9efeHk6orN7ZKbbohZ3pWDWzrwVGktXhtm32",
  "key3": "3kPSP7uHtSfXLGz7x1gy1i7mrDh5LWfox6aaoTn8wKMdfSuDFEFfr1LX1XncaVwUXawqzANMmLp32sPNW87ZHmM9",
  "key4": "4xn1ARPrrKypc7JbR9Sx2E4Z88yg2ztqnezQAng79D7cw4hwgb1V7mGJQ3y6UgjTxHhG5kokYXfE9YabxwPTut5t",
  "key5": "2v6bo2mWBfZHQeuQECd6FNoy8FjHriyEVJCV7iVsT15GnpHZ6v7UBdBLpvxM5MEjkXX1UK9JnfzXZa9GVBgpom8",
  "key6": "5kuhJDWJZVvPHUEK25TPN38mfHjejDW7nRLyiMAE4Fj93H2qP1KQYtXudQSpdV3FfBtZSwnicVkxYrx7opXgjfQL",
  "key7": "rkUqWPSWvPTnTs8vABM3EGSnKkSe8AaM32KugZRvsW82a6GjA3BRTFrijGLiWbDJmXYbiukqfMbr5Y8coqDrHSG",
  "key8": "33Ak9k8hDvtLmR6yV4JLbxGbaXytzjdsi4uxqDqukWWd5ZKzuQ56kfV8xB5eCmEmQB4pGBAZ3cnPrx97wHCE47B8",
  "key9": "DhTv8T8YHfT1pshKA2fUjzENUFM6DEnbZQacqZVjRYeFZBxGkaPGMu84EgpmLFZS3m454H58Ap2A4vBV31ydHZb",
  "key10": "5vtpqLxnMfvjCzfEypZ12AqYjnRdFfaqZPNe2REJHR51GAGSwHXyLLduhCQg5EEi8sB6v21tmH7HmhbFAhg1ibxA",
  "key11": "Q4xP7qcYSfbMAyW2opYk5kWkXXzxZMCygtRQYcSjo9e3xsJHrsGSAHK9qUqTbpVujmo1pgm6yhgvBTHkTrCFD5W",
  "key12": "ciPKVAGjA284nhUQXimPHCnnb1q3G53W23BCf6anngV8WEfV5r4fBg6P3HwBZLwhkn9GLt7FzUqazX2k3awkrW3",
  "key13": "3xYTCUjrZNa3z59TcLN53ghWx1N29LM7wsHBa9K4Z1tkMdFbRzvmrujGomwxTYpYzeVCPGM3F9TmCBh8W8akNPhP",
  "key14": "56hcBpVWH31EWpfMQRbrZKTqLmzvZTFGs5eLf5jG6neyQ3o4t2NW64UswSSAVN435H1ZUoNkwtZZ54F4bVcyQGrv",
  "key15": "6158quWXMiXMeY2Pbqp5cV2pDKjU2pKPPFW3dttGW6bhJbBU4jnC7HefEYgvwtg9q9bYqqvZ9EkbYHk3ib69zK98",
  "key16": "3d7bUTX6zeZHLubACv4wbR5EnP7mh88fy7Xc8YKSkJWPAeLt9LcKZfYkKaDi9Cq9PnqL3KY6i34nHJay7Gga2rwt",
  "key17": "4y7WDQLfkaQHh5UUrLMdi7sGNS5hZjf6i3XThUkLCjVyQ2qFAixEMq1X8m6SfBP1i5iW4fCNuhkXRYWuRBtMWYyj",
  "key18": "5TGZNykoz6Y1jncPYdLoNvSKKSGrnLBJcqCHo3DsVJjc3RfLfGX4w1JdyxYRptH9VqyoULmWobR6jUzMBvy38RRk",
  "key19": "21Hs6R1B44sqZvErQs4rzZbFTBZGx5UJ4J9uzYe8qeqJqbnqH73WBxTspbdoMVjty54aLkYRXKQ5rmbD1FtcQdYh",
  "key20": "46ShEiK6rqjYLXwXRMkphsqMQVPLT7M2CWTxKbDysg2VD3XFvxn58kddXCegq2hDWsKrtbRaeRapEjyaQ95Tje6N",
  "key21": "3XWXCN2wJUam5ZtWsh74UA6zaQj2rwRXmvna3VRByj4LBJB7Ksy4Zooojy69WdLTikJYJ8AuCg2jGG9ieKdLCNp",
  "key22": "2znPskkDr1UFZKsD7bCPsLnNWxyaPNRWkhWz481Smn7qD6hs8YfhjfYj8o2ZTiDuJEQSKuLfrhgkmSDHP3hz2pGZ",
  "key23": "NUbVSb9kS3w78qMkwRBHrjNbSoa1J7CVS43nZBtV3oTYUJAWLk96EiUtLFP5cfwD7Ls4CYkJWSejMkXg4hQjc54",
  "key24": "4omhKVkhmkmtJM7mtPHU93sFa9xDG1aSrDhotfrmUKmFJ4XM6kG9wRCBrz7peUmcz1oTg7Au3hA7dQR3D2bEP8Gb",
  "key25": "2YQEZLhbJxqWD4oao9GnCen6kevMZwRBpKQxuVchmuSNmUHzbJAxxKqJZYne5PVt2qKRyPD6a5cHtZ8iBZ7XPcuX",
  "key26": "2nkUD7ATg5nRJrY8M9Dsmi2LV1CwrxdLxzQwLLXWZ3gMV9fVbkLLxsSL6rEufQmGdBWzjXH81wQChUmjpQ3oKPjp",
  "key27": "2RwRpZGFYicDkeG2L6MacnxqFxjywwUU36JfYtMr55vqjxKJtC9B9EiPPBvJLyCcuijZvntYM6jMhEuX7Lh5GEEY",
  "key28": "5aBhmV4pGoWouMXsgpcNetevCsBxzhTWTq2dVYkRRmTgUp4Dh83sJurBBVP8DrTFTFiipTvJcERdFC9AyV1Qj9Qz",
  "key29": "J6nhDuzwoYUfL2JYN8xMEr5v775QT3J5HV4MdS2sHi6jSS2TpLfdXpu1fN4cCJSSJUmnx4fMorEbXNxRLtjxi1o",
  "key30": "5hs6qstRm2LJKCPpfTygnM9XzfZ3zHLCHv94H3fgRVvzWJ9ofDx7WRK5P8qoxnFeNQ6XZtvc8bojJJbjr1BxFhdT",
  "key31": "4JqKy4eaUKyci52TYwcWhD7jJWnYQik129tcLPXcE8zc95EjtfdPp5TDBXW5W5aGXskYqDoVwa2WTTwnFBn2ywFN",
  "key32": "27h2iETX3LkoTJqMwKSErdH4CzrdhxVR1a1pkoLYCrpi1NKACe7Z6vKAAy8w5j8W6R2moPYg5yYBQp23u8Zzdf9u",
  "key33": "63BkpNgsw8ZAxrn8cY64tw6i3Esp9nXm5XoicsCwbSLBumsCfa8KQpBWuZgzdWDz8SUkhfLXQgmJfma8Hq4M5iMM",
  "key34": "TgmsPyrPKe9wdZj7jCR1fonpubfD7o7mKyz53xwsBGFgF5Nr8wKpH6vSDEDWEApvEdRR5YKgYYvetMaXDBxX6TM",
  "key35": "41XKyV9Ay7MYNcyQ4VWzGTNRBGUkWZ9ykNXTDZPwkxZ2q7joSvdttfY66wkmwmfSVHuUfwCJenPUnKKpft4Ne4Sr",
  "key36": "3oYozDNF7JsrwRzu8Zdsv2LBxfX5uiAprMH2zL4WVvqeUNhV1PnNNA93k232JCRVXquxouNwrZ5dzr55f7vSLjbH",
  "key37": "43SWRBg8NWxC1uAnX8DU7VN7jtZk7eR1CCUsSdURPoYtj1dyZpBjTokqn4tRBkG4Pke8V8ZozFKFaJdukb9r8bEJ",
  "key38": "3Xq4d7nqfkjTLqmQQ2UtRH1tNEZVzhbc57gCddHEgJSUAUxKtJAzko4FAjrQd7wEQCwnUvwQijt9wnaCTopzDgpr",
  "key39": "5ow36rq6HvoQvZkrx45et2ATfNJKDMeZf1cXndyMoartKS9tfEKja7kTB2oGmxUgWeMbo9EHnCQE81qsAXPYq255",
  "key40": "3ReX9TvqSBtRJFmrCAt6QMF6oxJ7Y3UAhMwkuGnouwSeYGpZ1ykZ81cfZdLh7P9QhbXr6eK9CG7FY74BfEFHHihP",
  "key41": "2h3thLmr53v2hw2AgEUYHrA4Pxsx9L1fRHZLKTkWtH2HfPKqH45XKd4PBBFdApFSvPaj5pZwpGcrnCk24B6uDqKb"
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
