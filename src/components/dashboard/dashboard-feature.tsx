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
    "fZ99dsCFyBMGAUsrNgtEUGKgx4c1YrKySHXqbGyHEd7GcebuFhXqpfwbJPB59XJngwXShZoHaHo9Lofm64JUkR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YeDjtqDXvP6NaSQGaJPZUo3huBWVMEncyLen6CKgsE1BVCjykbZeLmj6XuNcVhj1AvCaL8nrmGYxfToFPGD9Qe2",
  "key1": "3mNxV71H4xfv5zSwqBmc9igGjVCHvZ17cYQdycjKAfb1W7vohb6EhUAKfvvzNY7ftuMoYu2edjSxfvKwuSKybdqb",
  "key2": "ZiyUYX68c9oENwaB4TqUfjnWXnhaSmBc9cGdZvBEz626QpWsBbrhHBbjadwK9VNfpx6GVK31APj3hEDs1JX8p43",
  "key3": "4BbuK5hU8G4oBgrhbawn6k4Cee9jt5gBh6tDVUkdZS7FXaJWNxEKdm4P1QdJuz4HrAERY484GoygqHfZgeVVUpu",
  "key4": "2QLhMimvi6P4HvXhbMKw4zBKSVh1a6cVzJpPFjqqiEA2DLcXymSPzLEzgyAozmKwYH1isNep7kbSN3CesMHJfvjJ",
  "key5": "3zndoPGjSJ4dVKLaRzJnGu4oPu7KuGNrJiqMJ6jA5Wuq82tq6vNYpLHFnJ4ajCxARRMEDQmCoDL8iBEfNJM33Uow",
  "key6": "GwnDyKJW3kfRF7ouQNPoebgAsaq45UusbQXP6EaJGoQ7WWxQ6dgeTcszZj7DPc2AwHXJjxwvX66dKM64yKHStMg",
  "key7": "488iYnyXzSURVJ9thypJSn9NozJxi9cJDXYqoZjwGkNUKCuRgpxYuq54E8DW3o5j1s6Bw76W5wjHbjeA8HiEoub6",
  "key8": "2LhLVRM6v3vy6J4iwzRRSE2iZs1pYxEPyKdFQvrYLF6cGAeERx33r9P8xUVUAXQuqhWVsJgZFgV1QT7i1rrKC1NT",
  "key9": "4E4De8NyvehAqVjpbybUUgb3f6doQgiDzcgtq1tbEkt1yuQoBRQRBwtgLnSGLTEkVWby9EgvVLM8TG5YTgxWnH7a",
  "key10": "5tjBzmZY3ePDrmYj6kS5FHokDSZ3p5eJsGqRkq2Hftq4UDbTCgsYrsXAJVjHcXFKLdZ9DoWdKhmvpEbrXz61PzV2",
  "key11": "5JT7UemUWns4VXRQxqhz2t3w7UghkhUt7GoRTrgGzKWhQq9cCjnLfqjTednNxpCbGaLnLzPj6FRt4oshcXi3pyDD",
  "key12": "t9isv8H8aHkqfNdd1KdNWteHZ5p9zeB6VWWTytgjoVKa1o8M2uvqzDqrom7KQHpcuuUXvZo5NPPC3rBvcTjV9UD",
  "key13": "32LZW7kMx7K9699Ho3sJ9DtVQPG7udeXqj2VYNzgm9sh7a59S2kU8PJXd1ZDkwgK2TeXHCdbiYWtYYUCuMo83S6i",
  "key14": "3QFA6nKQ7siiff3Aw2iz6mjbHPcakJbBQ2Dt4S17RvyR1oetGcNGXREZXzLkzoros9ckgVZKpKXkKhQ3pJLuLrNS",
  "key15": "4X3zZk3HC6zQw5QZugzFLbRRbjnB1cwSf3yhyy7pRf9tW5sEubzVETum7FXxxGwiVYXPuYkTfEy6Rc1F9kw8JD4S",
  "key16": "2uoodRKNwV6i5BzEm6zXSVaXZsWkm8UXPLgyF4h3L6XvrkWPcXywrB3e4dCLPjsenCTmtE6a33YgW12TxVU9j7gj",
  "key17": "YjvL6ztmxy5KQYLwT1s4DyxEo93YZhTJtbcHsYfh1Tj61B3Y6JeUWmP4WjGWJEiyuJW9SaYdv69EuGemtL4qRtj",
  "key18": "cRWTMVyMrkswAkmpXnNoWRjricXWCcQioa8peYujLdQXqV3RNEneoaeF2axvbGL5K8g98MxoMRwZyM8D819ccK6",
  "key19": "5ZN2AGzGa1D69ddAeUvtf6cWvgU1JkNjhY1rqtQutTiE8F1eJDNyueMEtSrQSaDn1z83wRYD2qZssNzwzvUKJFdj",
  "key20": "413ZZUBMmqx78U3HkXDZUS7syQfXBJgGFi6k2g7vMkS3oS6Xdr2uUmb4tFm5A1x7tP644gFkVJ9jprozSZ4MgWGP",
  "key21": "4LdEBF7H25ckDQWiUuGpgE3bWRPbNnyCYT5tTUL4LyziXpemyrv1re2aaWVqD3XqTbMsifehuKUgfm8vw7zY5RNC",
  "key22": "3ywxMvRs4C7LtEfLBYYEpefj8icBfV43EpnKKt7UVZhuY871ppM7BLf7YdLSqvCfxXhxWeaMZrKQGEU9CHzcS1WL",
  "key23": "2xRcDZJLW6sFXiWKf9DtNiQ1uBWXsjo9XZfH6tbEwKFN8W98t1CzjFvTXD8tvJpMFt7UcWZ1VZCcXSan8PcGn1ap",
  "key24": "27VKbRCDzQxBp3fiAB84m1KUY61KhStPiweu7aUoUKRodoAW4xAWT9WD3jFTREnFjEKWiN2gdMFGvCnvJqrr1mXk",
  "key25": "4svLxfac6RuUJi2zutmW3cJWw421QbrERnCc7D31DB123BNRMFb5zpyM953YpXLyzfm3htKpvqeCcJDx7WWuW4JE",
  "key26": "3NQbq3NevuVoTyNZZmYW4MnvxdRqcFsE6NQnkMi375fvdizv9aBHPQowuVzqbNYYmxZB7WiYcViJVv9JLf3sCg3R",
  "key27": "5nuteyZLDxHf9MAcpv74yiX1u7ppK41LGw4ixjK1ndkGZBxcYyRtheXQADBVHfaLtsE9Qbyzx77zRthkhbk1oZek",
  "key28": "4vjuof5FmrjxSkZosCtqU9hfYHCXXCH4v4U6jinWxtBSoZqGavijUb7DwfTtgccHUdaL74LuyLFZ5ucHtMn9cw1Z",
  "key29": "4SwXK888gYkq4WXhFJfJQLPrgKgmek4BDzn24jZK5MFnX2acKT66dby9aHuVnP6w7nfoc3djuuRcVv2rDMw3zJbo",
  "key30": "Zx5KUkTrwL717hbreqbGzZY9TRq4ySHAi4Ptxwqsn1HHZwphDoLxiiobNunDc6QPxZBKYXGPJG7EjMckSvuDZ5F",
  "key31": "S9V7wd4yeJkgxTahRwHtoChqC3ViUcZ2F8T8v1DAD48K8PHLFV6Ay7L9Pk9KM121vX4X1creuQE7aS72iFnCqDy",
  "key32": "2SUxLiDtd42PzpmfQ6RKSytajUXeEGaPoTwSuS1nAmEQN86FE1fEHiwkZeHjgPCSDPghVrv1TPefHCcgXnRYN75z",
  "key33": "5rS3FdoMyg9XqFbLHfD1c9hHCMCJBjmwUmbWGMbmxtAuh5FbqpZedhZ2oC6DjvKcAXLNpSr8yrSCjUBA15F93Lrj",
  "key34": "2Cm7VpQyEYg9nT8pD8kQz3atcmspvPnJLCW6S1JrFfD1AZxCpSkj3us5pSRtbuJWYEXbPaBcsWV8fsWVw7KAEvMj",
  "key35": "4Tx7BYNSTdNBbcKRjTFRrowB5c4AJGqtazxw8U5ZzMHo9iKewfvy1RmiKVGtDMtJ51FtziRGNyw9pkjEQe7xt5s8",
  "key36": "4WDs2fCLMKrMLcMcgnq6UwLbfNwjUfp5b5Rvyqwm3YUzicpEyXFnV8KySkAyZY2QE6XPvYk6mPG8yzsrUh92yfLn",
  "key37": "AEWhnJVwUmukjCwoH72a3hidVmoS9vApdx8BwamB4v348idyuGp6gS358ZcWsnhcxHcetk6Ku4yYbBhSxscSc5c",
  "key38": "AVuDwC2MHsciXJ6UEBzDqMZ22Wh2pi4DWHXFGKoeEfVDQon8kBvST7Q9dWEyLFZihetKbu4oyYukagJ7y9t5ake",
  "key39": "2K6s7RqZw1mGPVJJpteFqWvE7vgqXinWrAuC7ta6xFFKZuXebYmLqnzTS7U8csberQGGoLPM7ubSDzd4vdFPJRkB",
  "key40": "2gvs7S94PfoUEC1zD5ZaHCcmkefXqyjpVLm9LzZc8Gwz6MzE5ZXd1nHNeawSQM7ScT6ryKbVRSNkhTmvhiFThPEj",
  "key41": "3BatEJS1cWrVb4XzyubS2RSP6zG2VDH5BktnMwtfHVwAsR9t62EwX6DAaB1dYCVPwkk8Fc3ZNPhhWNgJHMyUScyj",
  "key42": "G86FbS1FBgQDxJuYn5hLdqeKcaistr9EBgNDrYUay3Nc2UEnzKcVjYWFN31iiu66gWzL6hfU9r8z7ZwsKsCCdGN",
  "key43": "4iL7Af7mBJ9CRCkVyNoaocBTM9mBVMtFUqVYVNh66WYMVZbv914zoBbuj5yeq6dNBZ2WmP7LBdbDDLw55SRR2oZS"
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
