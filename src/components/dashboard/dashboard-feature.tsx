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
    "4iKytQQWkRNprHP9k3hfHukgFhoZZMJnxx8j1hUEkqbppYxMwsGXtwVfzSZpkqfzusDB2yahpqSmk4ZLbWzQ1K5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rzh6t1AVWfXY1AosA6bVXEwBPtLfyabzSm8VA5FbzhnE3b97BviXLMNDQW2epv7YU27bkHZmhyHsCgvfJSPumPF",
  "key1": "2qjp8aQhwdSBvqgLmWFo6zLEd1NuCaMq1Qr4iuCSqPHBscZMMo7NYcYmHd73YcthJgDeFF6jGUvhDYxPxL5hUnVi",
  "key2": "5H5jJUyqNgzc7VCVPWicWsjv6C7qksfGdpq3aDkojC6K3XZ3dPp34nyBfvopydYvrNuw9mUaxe77QY7Huomtn78t",
  "key3": "5y7nvVdJjJScDfezeSzfUZtgXH4Uj9bBDwCqqMpgYBX3xKZpAnYq71gFMitxnPZCQnuVFyzhUmqWZsWaohxDfSQx",
  "key4": "Q3kmLDMaffEEEEBEiWn5aX59ofgCkDoM8Jntucnk9ox2T3VRyeyHF3ddL1Gv6HXVVr1YyhZEJaWKHXa4iKukVBB",
  "key5": "5R5Vai6fRs2grpxTXdT1WRpxvRsZGYEMYG4DLcqBRjF4Lfy9nPkKiJ2F2QJE6PGQUWsTrJ3SWfzGjxLaWWtTAVZR",
  "key6": "2aHKhskUbMuQJRoMm4bqScf8tS46KzQgwRXo82DsF52ePjrmRME5PTMPF7S9GeCRaiQERrCcuJDMZRVufQRrM45t",
  "key7": "2H8ysb56J2o8dsGsYurRwYyP4KB1vupKvzSMcPwqWAiNZqcByCyotWosJngFrZCzPcq86KtBsFcfSJJG3HwAr4oC",
  "key8": "3zbjdkfKqaxWaRFW8SazCEjDTLSwcedTewjhZggFyrXLSguC855n5gqorVW8Qa2jFa2uaoNS3V9xNyVb3dAoAFKK",
  "key9": "44Dwxawf4TExgsc6gzKUDft31DegioN7Ux21qENr8bG8HDgNZLLTA15BKWiTRBrYebgJNbReu3DMAVbobYuifY5j",
  "key10": "2QMeFR5rviXXXKPpp8AXs7AjtKqAMbiUL1ZWYU4nUK93abzpddrjW9ZyRAPuRQ5h6bpNKKm73XmToojTxFJD7jnR",
  "key11": "4eFp4hu9LfYCSaAmacWNZEVLsQKgqK4eBbSomDhQmozjtsVKz467ohMhzhUAznM4q2NR39qJKszK8V2CYUUCJ41q",
  "key12": "2muqRzJfLfzNE49PEqWmgRsMzaL8Hpd6NKRv3kP852qze3Q7zZJ1rd1nb5e4bcTiXP4uVrg64RLj4MGN21LReFxS",
  "key13": "2dGeX7YXDGMSa3A9beNxRFhfsFZWkr6MTEiMMybnjXhr3FQAnZnTweeoWL6tdQyAuiLRCTDBRw6CM4Mc5QwQpKKC",
  "key14": "3AxCSYKc7fvtN6dPew8RaViEAnmzZDCU9uTKmnABkxBy2qqPQeM8GD4CugfMyydxqwmMKXmoCwZaLAtoJ3XbPeQA",
  "key15": "3LTtifkGPjN87pTVbLPeU2m6xJxXnLWtYWNQma7SAnU8qnmqCZ72cg2yusehrsQjEGrQh6NX3tQXW1ALtJfFB5H2",
  "key16": "3w8YX2c3uT8J1Cofjc9HjMGVkpA9DL9HQ5fJ6F1QwmBJTkgZHG2oP86oKmJDS8rr8xJppgQzh43wxN1Lj4ZQ3DMf",
  "key17": "4XXnqTFFDBWcZhv5HNvi9az9sPHS7CPr5ghPc2RnjWaT8vnZCcrsKnUKrNtjBan98XYoXSmTEg4weHhXMhuHJMyt",
  "key18": "22Dswx4kZKcF8KmeMAntdYapZpbLFzoK41Kqj2uxg6NBhU1PEErpgmRj5T8AaDdApcWQoxSZxQUXiJfq4cWQbRSE",
  "key19": "nd25zoispLawD9pRr6sqqsBWUP9vCC8DvGXdS2XUNuEaGEt7LnApdTVdN4UHJ8uAhHoSX9vJ2DmZB9Hg8ZTEoNv",
  "key20": "5rZhF2btePsYTmVy9xwsGkJAghWWAD1ARVeg5V2s49VzoWxksvFaLrXJxho9JEzFQy95tS376wj1KTEw8Aku2Usd",
  "key21": "4YJHEVjwcWpUV9k6E442KGzpPX5FwtAsibRDY4eZuB5FzH48935q5WzHLg13CYhNjNWGHp7M2oZzm4oMCWxyHBiQ",
  "key22": "5FybmYVuDuD7hkwuJpDSGh9KCapmzvdf3rXWupBamUBggYxUKiQNUtwRthNrDsPH5Tg1wDHwZjaPUpctppH6fWB6",
  "key23": "5HyRBtZ5XxGKa5EpDjFXWudTstCHHtPmTjWL2RzNMdc33hs5CEVfc6PT1aQXBM8ub8QssNrBhi4urNbw1rtJv2ht",
  "key24": "3ZdR3STjRyfc29raHmbDfqkGkJyepRijE1H4xbfQo9cHZGiSgiCGbLUiZb1BNn57nQJciEvfwpbYSVwDGp1ayLPL",
  "key25": "oLVVZZRsJM48NYDh7SKvgpFA3SY52G5jdQiEKSMQKNG7Do2RGqarW7gPKuFcNpfwvHEi6qFy4jKKJoYdSdqnsBG",
  "key26": "2wktNwbqV8m5FBLFV2jChr3UdaATeyjogR4iz9ZJp3CCAscALCjmEMkJgjCbr5vAYx6rxNwCp1SGxYb46Vti5Utc",
  "key27": "JqeJZcq8yoUHz6wmHtf3rhSgtjtFD7Aw9abr3AxrxNNDUjcMGMQAtYPeGrVx9xf2mxsB2HwXpXJQXFWrE13SxVu",
  "key28": "5X9gKFCchEkd15LxMWLpe7hsRdD36VdbBECGsM83NxT8ePzNGZyjWhG4kigzrBjRjEw17UL8bbaVk6Vp2ExM9AWB",
  "key29": "4pwgB4vdhCmqfy3QLzw8d4Pg1sP7QmKbPkcjG9V9ajk3ThVJb8RKvD5jazK4mE2tyzTRRVYtfSYsLfBjMj7Uyz3y",
  "key30": "55Vh4ToErsj9nRJoXyCS9GfnMWvDEqhvsdKHHSco1k1a6bBx5Ph9wpgz1HegQLfFtyBzxpNWqDZbXZDbToPCv5f5",
  "key31": "3MeYXeAJhsZyMGWpLdGj91oVNxicjjBh3sZrzrKxj4Z4guwz3JFpwQb9PLsUbxwKduCvPvcprgbZgvvM7hy8CQdC",
  "key32": "3ad23PpBmUHVrYMKdP2JJ78adjBuZMqk2HDWcSzVhM8YgbG5vTZpuv8s6JfmFUV7J2H1cK166PJPE51C3P28meiZ",
  "key33": "4cKPQqFx7vCkTVgRNfDQWHCd4fH9mrbs9PBQG7KsktSUNC2nGGRjfacG9467MuScUUrK6FFoH8fpzUvvWiubFLVe",
  "key34": "4t4VQtoiKBTyMmruftrNLmx2Ldgm385cbytkUaWUCacRVpLNutnCDcdXK7Yc3MQESfLB5pkdCPoTeUaY2AQ5bXUn",
  "key35": "69gSfov7DX88SreW4viEiNdawocGjMDkKLYXL6SSWjaSLxpg7GAQWYEy8cs9gYvw37AYoDhf8wB9FUn3ydTEVUP",
  "key36": "5e6cb9YqbXtrUuWE2VnnhWLeuRKntCjcbP9cWNR2AxmHEBiD93afDnCQA7cHryRTQoDvwUspj2CeDDuVbe4SmB9N",
  "key37": "5AdXGMdbkdri2vkSAAgV81XbKU17DmXczDy8cBncC3YuPPfkAQRco4Lg9ti9dHCRn5c5kyxumfMguoN7yQRfdGqS",
  "key38": "5YtynuUt1mPVtHP1ZEUgNGzQTXV9cTYmv3cpCzzGvv7JtR1Wrae6ubWx9beKT6q36EXHze6jvcL91WhBUwPVMsUy",
  "key39": "3ghfBQaKr3bgm6y98bmidqdLnwVU7U69AkLiyLfPFfzPLzTN8UfgFDBEPCXzTTbvD7h1jKnsYsk7X96zdvDgiya9",
  "key40": "5vjf19RAwPtvvvh2MtQgzWcAe7miVm5YQrRx2fTgEykJ1GZbwRsDZKjfLQezpoXHbpvyxxeAUoxG8dRjzdRSM7Hs",
  "key41": "3CXuHhUU2pP1sL4dNewvpbMKBkJ4bMnTjb2uunC5HvDpJi2JLEaLyBuwC3NkrghprY4iGYGvrV9g4RXhNxUYt8iY",
  "key42": "5ocDpa6DDadDk1nmdmNwYMahiCgBT8dcfEsavoPtGzuYDFUpGxtaJZBBpQCExZgASdNp3fHqWw1LpraL3P1rqAiw",
  "key43": "4ohg5pQ2QSNyHv37WMGueeh9URTNZFyqePPPt6beUtD9pxceAA7wh2owbkT2P6aNwQWuULLcswLMRBjrVfXER9V7"
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
