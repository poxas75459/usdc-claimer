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
    "67etRQYoREQeAQJA2ixTfV3dHRfa8Rv75J5mgtzEegptTzquciiQerojgM1pK2xmcG8eUyN1vt6VWb8fGTQxPjZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34andj76sqS8LQ82GXdfMFHSJHwZn1Cwxj4sEhLFqTtE3WVafBoz9B17chcTnMHWZ6yaQogKTM5bPdQSTGggDEZr",
  "key1": "5cCzNdzymwFee3v266XRZomn1LBRkxE6ZCFeueXWJVwofHpojgC69yVSNNgoqjuq9JgQ4XqXMBQPLXESyFZbvsWu",
  "key2": "65QFfpiFdxwEWChHxXaAW8mfsHyBW36LcprAvqiVJnafRWu7NnG4BNpgERdDXJK5GEKtMt8BtqtpmkpTCq8HPSnP",
  "key3": "wppmrwjfEsbcNfKJJGj5ZAZbimshrQngades8Za35h5pkstKgD2gnbuUkzLD7g8o91janvXby62J4X9VLnRv4pd",
  "key4": "59PEpeLK6vtP2uCb3jPUhFYS5axwWaSdhCua2qTGfz1rVq9yhQFuNBKdgXCaeSs4Rybg6tzSS1faZ7ZGghn8ZQ5s",
  "key5": "2ZaYYwJoQ9XiQDzjkzkiiJEmvN9or2DTcgUs5i1YLE9z6YNMf3YoWyrgu3cEhqHYYF9XQpj8cqXYoEbpVKdEcYeh",
  "key6": "3fKAu2vQyWQNHdRA5YScMZb5uRrG5jdbUsmomjFL1MSm3XdDEtYgEBbaHUVNx6mVATLqhgrRTaY63MQzyH6ywxQH",
  "key7": "4wBPYU6wPiAmZe5iUxhu15RPAfm7LVmepVvcDhVZPqnFsCbeaWrkCmjSYiiS7tNjTRS45g3F6v3EFsRNfVgfFZNc",
  "key8": "3RxRzrT5BQc8nYWZQRcWemRr7JFa8r3Css19jttkfPepfiSRABcPt72t92dcVfJaySh6Wh4JLnQKjV52T3TXHZ8x",
  "key9": "2XawKncM1kC2GzRWDUGLsL2gNAF3SehxdVhp5kMRHY3Fxiy9BzWGbvEo64my3yMSwY8jAdG5DXxBBZXj99Uc8cyB",
  "key10": "652AoVJj4NvqobBsrhDaAd5q5EVGfH5cT2gxeNKYoy54eZTsrAExvVfL3PVPe7GmSj1736xiRb2GjeJ51spNjxuL",
  "key11": "1LT6YXVqztoMDdVXnfJo6QrfRTSJrXBFb48DZaGSCBARU53fDusitd8LAMhXX2EmGjrQzMEhMqqAsi6NxornPMg",
  "key12": "3Xt4f8Boykd9NpWySuXMPPYQ1oVu2kT5CGag3rJ3R79J3fuuscX8zur64Bb84yG44cVqid16HTwofP3CafwN25vn",
  "key13": "619gtxFAcfaQES41cZK3nLmomX2ucEw3u49GXk6zC4f3kkYQs69y9WPPpgFX6x9GZoEfSHUYHoqNd8QiMaGjYtkw",
  "key14": "5jRJknKREJG4ZbyEynccnE7iie23CiSGAsdk61NQMwU93PianbMHRCRPuSBhyFcL6NQG3o3KxHjg3ryQ179fSaXu",
  "key15": "66stN8NsCP1nksGZVa5pTh2YddWXMiybXXgDwr9SKZtLb1Baok4tQF6c7m6pJgHcbLowMgRZCyyYhVgfXKHLJviY",
  "key16": "2g9eb5JQoB9PWA3tbb251xWyq13YCj6LxFBeDzJ4EEdZZk8YoQCKtFhNrGHDpRBrfQk8oGaT873L575yQDd7wz9C",
  "key17": "2fx2xpHwYi5PsyCXEJZarwrWAjZ2uR97TzR2bs2qDT6E2e7m65PEmvSVJUgyk3ETjgB1ZD641ahC5YmmbxroUKoS",
  "key18": "4aNY2tyf9nLtX4vmHbQvYRMzgkzgimZWwMiBPhQPzvRFrfiyuAP7hppBCmhGMyUBE65Gt6nWY5zdJ4EK7HxAywk9",
  "key19": "5RXM1ZCGJbBhwMssXqnGeG35p2sumwbrQ914jywRpvAWpVN9VHthZpTj7ER8ihQde73FmJjfvWhzEeHhDEcmVUSh",
  "key20": "2UJw4BN5w2tUnBRFoBnk3UBZRpPZUdE9ZSRyXtJXWPc1nvzKp1ZDXbC43F8fGGonZyQPgJGLc3yzVMGWyC18hs3d",
  "key21": "65JaXqYffCR863F5CYSZuYfjZxutZPspZNMDWq55Q5ehLBTHTj5ATY34CnwdPx5UqJsuWd3E812xFsEzTFG1pc3D",
  "key22": "4nkpKW8jVL2wmqwmbAh88eMDZcNUKhoFeFsYfqGSncfSAkXXNDNJxMYxKM1gEnDkgR5RC1h6StgXMW7BTeSb1GSW",
  "key23": "5PwaJHNfPmHwNziVDbGfoU2sVBTV9qRi2gKshR6f8yiiS8eYEEp61HNngpN81bdDCKZYtWSUfdLFk3Jk3MQN92Cb",
  "key24": "5SqijJKAkL9X2VYXVKXWRJq6Kmqg8DGjGRxY5x2UUPy8PUPijwRBb8GLa7AndfeDtbaotjeKrENEL5Rc3LAyj8t9",
  "key25": "5SfJSwCre7pRUnwpWWDTJxGw7dXLwgGcmDZ9tUveUjPtznM2HxvDHTtx3jtDKheZc66WEcrdxa2MVTVfBr56GBSo",
  "key26": "3RAaP2YvoGmvZLdEzACY2Ws5g5r4bJZLyX72QhinRumr93wyUzN3M4N4PUiF952Q7cqgWNJgghCZ5BupdNUhy8H4",
  "key27": "4eSFRo2c5dw7crtAGTYxFY2W4pY56qyLHp9ucoA4CCWQgeZsTaaxaT7Te5deKCq18CcjkrpykwwbY3ofhnb8yQAm",
  "key28": "2KQR2NAid62D8mwMG8waAZhxDsFMRopqs6gFDUGNxamXJC5YU11Jk6V3KD9mWNED5MsZrt4yAo8oudqPjKEmqr3Y",
  "key29": "EPrUQ4nE4ZszwtKd9qyhLZP6Ztvm3Qvz87ZxjBN73SXUUwAyDsqxQSHNZR46L4rsJkxSfX5GTkR1tyGabyURHEj",
  "key30": "CgEvY7S8JXpv7WgRCMBLU5ZRvoDsv4N4EhoUcJhYYP4e3Gah5UVHifYGw2rYixPF5fXxhxMSc74dS9fVcKDPFga",
  "key31": "uhWRf3REKXSq7Avvov7ihopyZc3hX3hh5kgHqYeBQCmy75kxctBiaFJ6DseEHkHSdHLywfV8wjkbAWKBifEceyQ",
  "key32": "62BL9WLiyC5sMj7WRAfNSaaBjsVzvbGS652SfZNBjsTYZHunR8t7px5XUfd8Hoxa9wEHv1tmyLJAVRt5DBNVAgzH"
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
