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
    "61FmHDBFPQLxK2Mi8oAwQQ9pyvdj3PD7NwYiQW7LiJSK4ngdjeRTfRS9FPvBxJKP1zvM8Wvx8GuBvWVHhmb1Yd5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qgvXNbDUCrFgShiRCmGQCuuvZktEnRsd3XYgQonrmBnPk66nfZzLzNBFs2yzGqcKvFGW3i1mCmUswK5pGs8VLxT",
  "key1": "5uJkM1Z1jZ63p1JdGDEMzRtDsSdJRgjiHYMrAqMCE3pRNtNogTd4kx7j5crmfQFfiZ5MbPRr7bXq9ZxpC1FT1Swp",
  "key2": "2BvHd9SnM2SSeuT9Y3oRrYAe2FnLQNp6fDeWYd1n98e7NcmcAK8QCeZt2LAwhDhtf5gurMTWqg2599GQKVjX49Py",
  "key3": "3ch6pkpRNXs6EopSUGpY8iAUwVQ86LzjgyPnLT1bQbzg2VV1JH97yGuHGmMeRp6HqV8FzzSArJUfuNB2K52GfK91",
  "key4": "35yz5QoeGQu6X3kF2ZX8TFQ1oRzMFYtsmduM1GC8S7saSBurhnE322o6JhMkWpux1jTdB672sNwpzZoWiNKHobBj",
  "key5": "24CATGuuaLfMFFHhyPWJgRCYUyY4TXiRWDQFuKzet2TF23c4MKKzN3eqMrz8YqzFoCo9veJVFp2NvvA7fTTxbbM3",
  "key6": "sijcyXWjH7T4GKQLerBx45bt9XUmg1QoYFBTdj9dbCNAmG4ko1n3bVgEMhETrxpySDc9dcFyFkrZF2EhS58RkMd",
  "key7": "4DgK8EjeRhn1LDjvJ1zhJXhrf8PPG1Rm69HGdvJKn1Q5GErwMY5uZGsA2VQKUK5SAoX4Ga8esxHUK6YV8MrPpkgB",
  "key8": "4rwqqmrvDQ3KtmmRLLBUNCVAS9kRQ8hjukUo3kbh7Y34ZrYbVY4ChCRWh3MLqSnRSZisgL3H1hH1VQ3R7hECGY78",
  "key9": "3qqC95idvK7t3FnTcmSsjDRXcByHYHC9npPmNGxosU5zDvVvBdGGN8kLWDCcBg8jvcBGEdueqfNXpBjpX6nFZLUt",
  "key10": "2Bo8nje4dCm9MuFkcVSNd1nEXAw36fbuoijUZv4FXquapTmvpwjvf62RFzG5k4QkXHzv5fPKg4mbkuAvPHYvY2xi",
  "key11": "2L6sAuq4sD8hkbZb63eRCMeAf9qQCwdfp7uJsdCZ8QVwhGmaevT9o263XvwPEL5ZeJBrnz3VTRMfxhsNiuTgEAJR",
  "key12": "2pubvNENUjUEoj9iWzjzyZVwDSeatRsWWxvmEJi2NtYPWK5wM6fCZHtmUJifK7zNfHzPrZNFeDH9Qu4PEN6HWFne",
  "key13": "3vcBURHLPaciRZZJhzra4L8nNuNcgrT5C55dAyiGz8Myxsq7iAmnaEPMskbNCyjtkzb1Sb2asUBNFwnKj7RYuaiH",
  "key14": "46TRDYzbA8FdXAERcnB24xdXQ1qq3ioX5dkBbMMhYJQqo4LJvPSrd2896piCcFf7gDrYUY1BK8V9cmG5VXVyvC5x",
  "key15": "xxcZvPgva2PUa6CXy3oe7hG11yvWfm8FWa5MvGAGS3pcdMAPmCyB2NK7KsfMYy7FnNwdqgnKrSEFHdKqAq1m1Uq",
  "key16": "5q5UQAQCtiuCuvVsD776ZEmUtgwcougDic9ohoNx5zJpD1ndtwE9Uh5AHCw9FCTszaNjwY18iC8PKbtLM7J89PPA",
  "key17": "5tovn1B1m63yjcppz24QYidDFnzCQLjRturtDLPN2pEbyrBPPQ1DnxxGYfv8CfCDexJ3oG5cj2VEAAosZdwKvSAr",
  "key18": "4P8fM66AFSFK74u9e4pkciUyLV7QULu7VpNm7ESCEgysjyxnCv2qEYSSVnoiDmqM8nziYNoaR21VMTvraCkhV78r",
  "key19": "1MT8SwGYvkgsSMeqxDWi2mWrVZg3TQZcWUfrKaKBofV54sT5Ne9oWmoj875y2GAn6KXq97AX9tDjXD2tqhaAQp1",
  "key20": "4SYSkmjNWr9iygqNgNN89e2z8FzkfHVqKmAuBZUdbYvFNTtYGYXYgmLF4APRKYvJvj9N7es4kAphmuQ2Jw5WbE8Y",
  "key21": "4Dyj6VUmuYij8NzCHxcARXxX4gATtu37zx5xULUErS68VGqArSQ8hhbFbgU5nn6aFt7bZyV6yi1kbpHY6WEo4Pjw",
  "key22": "4hJbXp7kWWYc5x7KgYSMhfadTD4ADRmZxva6cpt8FPvcid9iUob5UgzVS9cM1v5DTig25XL37VcYHt7mKMPNVS8T",
  "key23": "5vebTP96QGwXj18178RFxp6ywwMisFTw3FE4sVhm89m93hNBwqvSTxfHwnuppZj2R64H4gEKqChpemjXsXwTDX7h",
  "key24": "4TmGYrBcJFKxrpUSJM8jrSJkHTgZxGAdSKQusGnQdXvWuGueeaR4UQoyKT4YXUQScftyC8jXiWQR98bgrdkNES9H",
  "key25": "3tkt181CMyPeTczSB7FikES1jQJ2tJKNhJymGoea1UHX1acKY9niBt85nLGViVsswUCGVo5T8DqNmEaKKrqUeWRr",
  "key26": "4TZPs584nDTNMFZCd7QgS3AKB2nTaXDzq1K1eoAA9XeFVywWEYfW3QiVpXKeKnpeBUXTh8dg7nqtUuyHuosskxEV",
  "key27": "2bP5kWTAMh7qh4HratTRnQJPE8ZNBXsdq7KvfUb38qvokMELPd58hDJ7m5ygKYb7xhwozNmzSghSZ8g6Jp31yte",
  "key28": "61rwtjkRuuLeG83xUkqtPEePBGcYWW8kmY1T418K67nhnzMzbYPdKBa3EQnAX6mK98LHXm51ZxtSYS7cpMG1Z9va",
  "key29": "eByK2EXdFNXG9mRiKhNPds6PNDm4ztASX8Ft89ToLfEsch9JD8r5yoNn4bGN1kX3vNYRu4sVSp6VqJoMwmr2oKc",
  "key30": "2EVECLfa96nmfGsyVAd2r84s3AoJMogNPGzFWT91c5JF8yCcAMNKrqQgeWoqnBa7kZn9m8GzzkF8ByggNJTNf6na",
  "key31": "5xX7u6vhv7YLXByNZseJcGHdQA3amFFLmPg7rpKxsrtZLFRXCyWNGgLgxCDQWRpHBeQ2nnVCss7maQWgf6QsbT84",
  "key32": "5YUP7sSwCxy17mLRRUjxuq9LbouU3kLadY4XBiuupwjfa7kuT2x6hPdH9mdp33zmf1YUTtqJmz4zDCAeCbeR3nH9",
  "key33": "3MyvVWHDPP1vqpA36nmekF9YrcfxfsZZ9XZp3mEUtGYUtXhX1yRPzgBdPeWdQywa7VPKAjWbSv6YGwgdUMShft12",
  "key34": "2HQtKK697gwNE4tKCSxdimDQyxWdR4LdCHB8BBnrvj44H51veg1iGXL1KX7dzymciHr3NtAwjeQsmVBavuJh22hq",
  "key35": "5xJd9XnD9iGNFCqszRNpCt3Nv773QtKMz4iNsf5XHHPpZhYhGMBrbCTcLjVVeGbnuqR2XZrm6odmogCCznREoLJq",
  "key36": "28WTRVFaxkwsXLVRzL3x37nXu6SqQDmKWDn7DmhoWah1JtB88dkMVVCfKZJrhaWbTdMb8mC3kuTh4ZdrPgBBipvH",
  "key37": "3ba56V1LZuBNyE4UmDKP6QPm4iRgfPub6KsdgMiHpy1KBUBcpcSuGeeLW947D5g59eHoxW5KNFKyWJMmT2dDub6d",
  "key38": "o9Z4gMnhCwGcX9Hq9bP6zpTJCo4edy2aCJ58ZYi2TJMk6GUjx5Xn6aM3og5fa9yNismrGBaoTn5yVVegxvEB7jt"
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
