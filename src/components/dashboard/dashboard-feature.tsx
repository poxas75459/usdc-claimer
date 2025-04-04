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
    "reV1KwWGZLjLxrStuUkpXjuxFnw9TYFYvK3av9BrMPfZWL7NKLL277PTyyQtiLZHbB3Fg7cg7YaMATK1N14LoP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ap1S8WzLbfQBhpqmdVQx9f47A7quq4vXs8o7qzUE6dKBZp8ZfiojJjVsaVXjcUFvHE2SWwqg6FfJhRyxrNNLLeP",
  "key1": "4BFvEifhb4nLjYW1Jy3rKRQbG1a7pXBirAWAxUMS1oQ8up974A3zQhwqVkV6qXLrMro6Mvv66qKB3S9H6QLUnDx4",
  "key2": "5wBjmx6C4TnFJTPn8jPCktxGNy9YgFbjfuey2t9QibKC9RjsXPCuypU3NEqhjLqkawww2K1tXeym3z2EBQPvF81R",
  "key3": "5orBSMah5i6EqkWXXnhiNdEbqUhnW6aCe3cBBGVoWyRy4fSvCY76ofN7eSFxt9sh6XmXfQsig193yQGCFgtEdjCq",
  "key4": "5L2Bu5R5UHJSaopeUGAkq56fXGdTvQCFmgaAdEWuXsi42wXyV9Mf6zPCfK2iTiEgWJRtJddjpSxBULEjduUcH4HA",
  "key5": "5CJwhcFmd5qJAPCUxqPsU1GqHRNK1WqAqKKwFBRJiXVhemrfApEJ1vmXGv8VP9MG6GU1KF7Sqz93C5aAQqJtpGa9",
  "key6": "5q34eTqDuarKefKCRaaDhV7hGRACkqz7HfRWqUdrdpy3XAQ4yGzrGQ9KsrNLfz8H48e3PfbswJuGeDvwwkDTPaxB",
  "key7": "rysfvjGjrfhoDnUtTAaBsNtMHFYQJX3qRAaytCNYVjz3oSgDAudRaqUYVGaycbnrN5d49nYGDEE1kKs7jxACVRh",
  "key8": "42HvShDC17JMRSKcW6CZt1Fg3QuBGstfCRR2yytccfaMsTLPLN9CNQamYc8vBC6gm5D39qUTgTpvAm6jbbKWN8v5",
  "key9": "3gNTCeWaQ93wKnG7AMBRJNedExgsHXZTTvxG5Z43t6q2H6BxxoJmmq35zvtGAaYwzSNV7Q8wNDYXAsVGtvQimiXC",
  "key10": "6zt18wP6h1PUHDuDUqBu7iv8A7mXDdnijhK77SNEg4cZ8VYqEJMZiPSByFCeLQJufdD8ptzUX8fVEShduiyx5PJ",
  "key11": "3KLNnNzv4DffRqJf2JRnMNYxB4W2icK1u6TYoEPP7A8Wr2cHdR5TNFHLtN63MnisfYf4QrP3q41yT5foWhBfG932",
  "key12": "5Bv8Vf9oUUKXS8wDzos5Epbe8pGY1YTRCvCD7daxe47VeGejRreB2PJACwJM3bomvQ54tWGSCit7THsRKuE657Gq",
  "key13": "29nhCSbLBtf2aBDcMcuBYGDa7LJssEW81gw33uyRtx1xHQCqHw9ojntriMAJ4yjhBbcJWcnNYR96rg2qxYBepEEF",
  "key14": "3GxPGNA1iz4NdjaKRZowEuUGreKsp4CsHULd2dmYXw8vcqLq72dJaKeZnh8YHUZgWAE1ZDyZHtJAq7hPaH4su6TN",
  "key15": "5ZmqBKws2n4Aqg4DpDFFDTqtghT43Zg5x4XfX1niMGBocyiTRTYHKYiTiQqjcHyqF4dzkNEkMb8AMToui31wLWKm",
  "key16": "4eBZXgRca8diU72ibLkEMctMzAC7yKpTWbsGPDK8KGn39iei53KdUS1xdiwFPKBfHih2WmdEJBcDyAZUWraDQ83m",
  "key17": "C7KiRSYisNe8ybb8GQxKWJMi1fSXnr3pj2JzRGaXPALH2xpXHusf25VEaEnYfuJCd3T91GqKWXYVQnRm5dGKH1i",
  "key18": "4QMmMfWTAw5dqj9AXm4Ew79bJtjtF6iPATxggwLknxqE2TBG5WYxyV3BiRqrC5CNPzCxB8dbYyJdZN36dUC8VKnf",
  "key19": "2pmk5EKReRh5Xf2RoGhLihTaKrHZpjS56bXfKnpyyBBYb8NRSqRvoz8qhnZ3fnVn5NAW76rL2Qqf4APWhVpGsc9T",
  "key20": "2yFVBU4W2R3EkZBGpmkn345L2mDYihYqNuWoparqg6cQXsVzyvXwQCv4giPbNk4Dm9ua2KWh2SARzmBbHkxQBp62",
  "key21": "4Vfg4qV6vANEudCyHU2mQpP23DpQFnNNmCCXbZ1vvGLZc8DZ5jsuZKz3SUBVS5BcmC15GJULGkPUWABwK9ZSYpWW",
  "key22": "5TzW9sMup61fj9AEYbZ49LxpB9PL1Bm2x6cGXTfRBATfQ5QUsZPradY1S2S68p4Hv3TgcjQDiUBrpjWwnrwGg7yB",
  "key23": "7zVEbMcAwSaMpUuyH3ouw4e4184ky1mwFtT18UnNvJgfgJDMfK8vGDsjjXubAuG2geZaHNStJdiKmFQ1U68fMph",
  "key24": "4j8UD7YEjsHQ5YKJeTmtGceYsDjJY1sYS5m56QkEi849jchXSwQrWe4C3JE2ywQTULZP95UUae3yNnHYz65dkSYX",
  "key25": "3yhHnsSaGSzWtsvAHNA1xLgMquB3CUXhRmk1JGvr7rEq5buERHWNQkwmY6ZgbaTNi6wmCeNJgjozFNzZYTMzhBad",
  "key26": "WRRBYaecBzkUXsyAmRPM24VSKWcbh1SQjVmgnanGRvN9g9Qg4kCsmT4vs9mBhTCZ6ZedHbTjHaW4xiCxMM3DSQR",
  "key27": "61B4ABXyV9f8GLfjgAq5fTALVEV5isoPQgVNKYoQt2SZYBE7K1NprmuVYCgeBg8or6KxPBFhKskjPQ2i3sFRHHVQ",
  "key28": "4mu3VmYeBcxanSx6JwB6xjdrdWCRzUQvM369B29Qvz9ydbeCpJiUbjasJvDGyrY6qVibkg4zqaM3VNAo9KpZ8u74",
  "key29": "5N1pbaaKKUPiYfLrBHjJD8N46V8i6ueuctkT8PVtfPWxsqszgaaCAP4TwyHA6nQn71kxuS4uFLCJhYG1CiNXrVR3",
  "key30": "4cDBxbbxD1bEyqKxuYDBDSBdt1wwXJ4SwR3BQYL6LNoUbmWhkR1hRCWpopCfudrwcvDeM2d3HofPK9ojEHQ9smdG",
  "key31": "23Yd7pXRBWrLPcipBZKVcpCuHg7eyaxroZ5w9i9hbe57wZtzthndrmFnwpGhPRRW2P8MWSfDzSSXzwBnjsT2XZVw",
  "key32": "5DA7Bihprb3DNw93qspb1CmgoyCXYrVQYbGGJghU4Xu6DbEQAUFdZLPtPnnsFRTDZiwAJfACnJ2awdSMFCuTpEQq",
  "key33": "WQuYNuMD9S8mYyXfvL5jrqCrQdh7KtppCMuDePnraY4Cx1f2R29iHEAPyyxNmWcU4UxRC77Yv845LNuEcBqthg9",
  "key34": "2ZbiWxFPrJEVHhdiFRUWq8Kio7PwvNaQrihrJWvU1GNArRku42KxmYpGY2NedrZCRMaiGGdbEieNqKMdB7Jd1knw",
  "key35": "iFe6wmN1W3RrZEBH3C6sVn28ov81pz7gXpS1R2t48sQ3XuVK7zk5x1CZoLMaqCpjAjJHudEXH7TrWianHed6Big",
  "key36": "3HjmnPXf7j9dSLzqK2R1D1bRm5hBokLjv4mcnJyxKXHq63UJ36dcZBAzGqQkWxkE8NHDGmDmEm7iBtvHABeicok2",
  "key37": "cDYpZniUg7quE4u9wgZpM5RJtJmv285b1pRa3z1Lqq4SHRUzmPQqp2CAG8biAesQANRx4Jt9Rn6TEW1B7zdHbgv",
  "key38": "5H2RGTGp6XjD5bSL5pwB38b75Rrfvi3FGrRPhR9ypvYeNBCqghBv5v8GsdAuFpXjM634A6LqzKiYKdLwLPSNJfsA",
  "key39": "37kLhzwor4C5UtdUbcwCRXedid1iyQqafQPj8ezUGSUVxkFoNizyrbgfi53LTUWquz8RgDYkvm7XiJBvnzkuAQJ",
  "key40": "G4J2opGFnPsdmwwufJEQ6Fg58BkJrojiVKQRJZwdM87oPXEDvUPr5wnut6kE4Hauwwut2gF6cQZZDqtFPJpZxwL",
  "key41": "5CToSGQ75XFXYHSnT5BiUBjfVdkjgidHr5UQFDQDxo7p9bW2FzyA1zjssFduJwtdQb3QHB5nDN4r4mwwpLxRHCEx",
  "key42": "4xbRFWUdCfWxgnSKPrtQt5coc4wvbLpr9B6tUucd1WNbabqVtn8ykGvd96SAw3mG3RQ4VUkVaaktug113vzH8Ury",
  "key43": "5nM6F19ogStPiYJZPKWnfZdbAdLEYcFwr3fArrx5EDCQnQNSeargjiCqu5X4akkm9kPpfUof2S8HYGEBeWfD88K9",
  "key44": "3C2xeGpFoTorwSTwCrjKRVzE8YCVaf4jYccm2iZt9CQfBW8FVGyMD4XmPRnw3qEaeLg14C4G4uotdhonnTRApVGg"
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
