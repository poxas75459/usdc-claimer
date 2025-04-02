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
    "DesN3HPqQ7FMkH17cTrNAkwpNigGce2GZMQ1rixMuiAULnWrxJcuziJCcGxwNDxXGmu4GXw8jf6U1jrv3E5mVZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gxUi5ky57FKoAQrpz1TYKs2JvJkvx5f5VtvxvPs7NcpXw4McVWSnQWeThuvFb4Lq1PYwxWDyGNvz2JtNjpdMS83",
  "key1": "2r7WcF23AcCEHa46Mp6ib8xFCEP6zTej4WnGBrbQniw9dMHDJ1v595qDCAmS1CXof7Ww99eidSJi3gZ8BUrNVBGT",
  "key2": "5QQDbMoUHkhruNJrvS65LjZU74sGhuHSbmm4L4xWMD8GmJs2swLBd5d51PPG2cM84Qsc2kxXPWskD3akqfnPdpkR",
  "key3": "5ZpubAWLa4hJKhKhXr3tZwzZ8HUK1SAK2ANrf5VRS97fpJLDSPBvYphHdhTTpdDj3n54bgKywJ2mJZAdFcopH5AV",
  "key4": "3ujFcAHsQ8pDBV8X1QD3aDJkrumnwHpgwx3b7mXo7voWscTXD4Cquq9HtEjWjJUxBK9vMeaVdg6N934awKsjvSpM",
  "key5": "JNjn9U2NxYaReMqgJgBd6hNDUgD2M9qQwVDGfMWXKvzHemejgcfcozUsmyAt64CKQknSyRtyKqyc7uyyLupCT23",
  "key6": "5GDWRXtLTDNLzAePNqMFk3sHVT7uMrvndjmJiuuJU4MDohagep7tsxx8eih7ExN74J7kkFX6yYwyyAYHksDKWHB9",
  "key7": "5wxW3Mn1jGdcfRKpej2Qx2gPk5yv7Xy948pjHbfMEA6kytj1gnQaVbg1J2t1u1yhtBQfQpXSRgzYrP2GAc3kNEKr",
  "key8": "rfKoR3tVy827ebtSB4p4p1TsPr9DpL2eV7ZTPUAsbLsBLgFTYEFBpJGJ5dPsrAGjzWq8EeWw61LKngyFHukvTiA",
  "key9": "5wsNzj3BKAQF7WBXn6ccJ64TG5LpDbpKzhrstiy9ryABnoCjeaxP6WRye2hoMtGkAezsgM1LidmHvKtcWSxSvbg4",
  "key10": "4WXyZkvTppk52hSbbTLFCF1haTLDdyV9d1JCyAMmNY1igSFwuiz5LWT9fwBGUH25bjGmfqytJcuBjKackgUmvLe",
  "key11": "4spDLA1EheHur9WDikbM6hAdbBgUAwHHFxyqR49LEn9m3HLuKUrKC2pNLWEykMQMCVRTL8ss3daRuqpdqxKWWcdP",
  "key12": "3CUU66GiLhCjMByrdZfFcZUYRfewFNPyqbR8LMwzDzXYZ1MjtdLWhwQPjDFsg4dpE5Mnn9Kpk3tDPtPBUfdLbK87",
  "key13": "5y4LUQsJsNoSPz5Vn7Gr626vySd1F4e56No5X83huuyWZWYach8ciKe8BpPsszZo4DYGRUzwyJ2ypgLzTwG5CZ8u",
  "key14": "2kLeZjJMaw9aHcx8XXUWvW6KHaxKXeF52XXj7JdHyeZEEqBiVVeVrnXCDZA3CqnqCfr2fh1NcAfoUA4VsDemozCm",
  "key15": "5MfaEUTKy5n65HWAriSYoj4RcfQEaovYsiDcgAJ2A6D2aBjwPrF59MaLw2UKVAaFJZj8UroZ9juyuUPK3CZcMcvG",
  "key16": "v8uENcSHVzYuvbtwDEDMZKQCpVYFod5skufa2zk4TuZtZkKocmRKNoiQSMdQvgf3nGNuYobYKvEUecXx6ibViE3",
  "key17": "5Szhf6oVkAMz1zAvhrHqsZ8kvFRUXFsiZSxhHyBaRNBvLBA9mbwTLxVMqDfCzbueS9TjcR5XWD8E5Yd3bxRduWuW",
  "key18": "66vuUSSwdYnz7tdYL4zkhUwUGXQ7d7iomNqTipD55RwizF9SxB4WesEzTRdBXsuqowMofUf31q47E9B7mHRhqxiy",
  "key19": "3oU5nnhkRVzVZ4Xhngd1xHtzyv7dZBrAJfR4aMRBqHKx78kAiF6Y9aCqCkx6tv6zp4yN8uDAAW3Cu89zRoaQRH7A",
  "key20": "Jw9pGtFXSwy78E589fsCMktNTbVjGKWCpW4GUAinEexLLE9CkNFSWFwdbx3LAzvcTFnW5Ai61h1128oYLgqcCfZ",
  "key21": "t5kcmhWtzXTgLG1aBLBYtUbjDu8BxXuu6ycE3VFBfNjcihgzgAa5SWsX3GibPSes4F5q8d8sztQT7xX5fGHeGEm",
  "key22": "55NNxrpfNrxPehNGnXqCuFsTheE4j9r12qEkhV1i13Uw9YQhA3NqsYAXaWBXjZemn9MmtDHXFabAT32LHWuceUrn",
  "key23": "2DJf8E2LrXWxbNek5o3M53XQ5bEf8kywyb5rsPivgotFshViozYaeH2AbmG4P9eMVztGpnU9MLg4SXKd15atenbV",
  "key24": "5mGTPqCuFPshokh6nXYhNe71ZSK4skUZkS6Z6PtBT6frr9QdKCxoSdk2qg476h4QUWQeRQeuS9R55CPXKi5ikVUK",
  "key25": "4LnjL7cEwmGaYKoge6CPHjjQHjn1KNATkM1RnhUKpJSB6Q2WtFMNmHrSGcbMbkqr5DZQuBHFkRPq13GfAbMy4mKe",
  "key26": "5n5M8YbFch6uHer34x1dskq8R1vtrW4byzWqwCA51d5gSYi7YKwmppatjGBgEpMrFa8XgWERmdWp2QKCcjo54ndZ",
  "key27": "64Yx7wR1Fv71GXmmCxGy283iLhHnVGxT3P5CkdWLR4GYKvyrwtPPKDJ5c8BpebhyX6S4trP2pUv5mU2dDsNLuTSE",
  "key28": "38cwhAEg8Ng4ymV1bKThWaAgYcoW8A9cFG3Tmqz6B87Rh7jsyxFvRNPFXL5MLZM4GyxMZUfAjEpzsmk26oja1SeW",
  "key29": "4UeSev8zjJeamkgP9P641QFM4H7WBubZpJh74QdZZXtX13hDgopUgxoyL15HVTB7216rFB3DvFt8GNb5vuXKGij7",
  "key30": "5uW1KwmUaoGYuR1NDsBXWz4zJCtoqR2heC8b563TDTzrBKsjsXfMqktBjyS5iA9fdDrE6Q8saVzsMB1LmUHXZsGC",
  "key31": "FtqwbTYpzK5yEcaBRMqpFj31pD9Lfu9suKdoTTg19bbC8i76ZzmG4hwPsCNTcAhZMY9TARMFSSCcGdNfJSTvxJd",
  "key32": "5qjUMvg1LuMW7E8tc3pFNebQhQtg79VkTg6PCogrQwWYm5tLF7K87nwwQZsc5hGG58qXwHXEvetPukodPmUpfeaX",
  "key33": "5jp1uTfuqtqr2jJfna1Z1WUnd8g3LhkPCW1wKN9fVgfq2GeQUhZxmJcyJkDMpW7H7Yw9w9h9CCUoWMdZdCCoPdHZ",
  "key34": "5n76CYABdRThHfNqepmh7T54MPMyHmRNGBqUk3a36afnXsAuLqwNzHdsbj6pkvWui8sPJbqRTneF139tzhAVgzf6",
  "key35": "4s1vcaQXSCeYUL6kytiYm5co5s8ZXpaF6SRxW8miWYTfp9E8HnAXtLooyyxbuu2nP7CpsdSGymEnGMEizXAGRZkE",
  "key36": "22b77DqnsCoHKuTvCcBXM2uEWvsa8coRG5Lu8xj4xCAZUCsBxQeqzo95ZrhsQobcNNWBUo5JCAxf8hf3nPWH2HzB",
  "key37": "2hoVZhVBJjHdNPqvsqhmhw2k58bTnNgNLvYTH1WPKnCWntdNKBivYGxNCAkxH8Vt3RpcFyBeYQV4CqATcr4iWo2p",
  "key38": "4sE1tigzGLn1UqkcNqE7hmukdtz95JRRaqeojVMujcJp8TxJECwsrwRT6vuaX9aPMxvuE4A87WVSYFn5Udq7vG24",
  "key39": "5BMg36gBTcihAkxbPVTPeHGPgxszR1oCFXRRx8pk8pg2K9LiYMXjhL5QBEBBpPnPKPMAFA65mZqxqCgMSCdTvrTv",
  "key40": "37Y6F1aQv8ZycDcvh6V9AB9Le1gnpFvdSAty3kSVaa8h8yt5QcAw4rRGhYu8fF6ojviyqqsZcYzwDwSX1JiNyYu5",
  "key41": "2GJbp2Pairt4YEeoetTgw8cgrEKku7ZMPgF7gDArcSX3VUVzZpW6N5HQJmLtenycFv2mTA24wCSHsYCdc5MPrNs9",
  "key42": "5WfYCjsMVduo6zgyhaYLeQAJj7oMo2TDbAGg8v18LNLHLUX9X6AG9rXXzENbH4NHzRivzmdzoFmEuXQEVPDqA7BT",
  "key43": "3z8q2cJ6rfgUUL5SuvA7ui3bPR8KfTfzf31R2yptgCSu5ZsBQDWMmzYGE7C2f6PktvWUNtBaBFBeqs6ioDQ456Pi",
  "key44": "2hWC7C8nnxr7LzqVy9KomSzjm2Dc1tMXpPXPLt2JaDfMD8MFQzhDrzTVuT1aTc91rZVTdhy98NAivE2WWUEnjdP7"
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
