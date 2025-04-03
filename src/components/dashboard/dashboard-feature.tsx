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
    "5VKVrfZpr6cY5qskUmbt7MZdJUtVZGxNvreMyJTWavrqEMrSxpfLT1da52F9fnpqZ2NxP5xYa72qGc8MDVD6NnCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3svag5aSMqdoiLV869YuoQ6XQktHXExyrdHoe1ff8ZxBt9xTjLs6J22qmjUjBB1p6MRnUGmZsyZGhyL7j4nXBASX",
  "key1": "5hwL42GZ8S4xeRVoHVJG4Nhz6p2CKeTSpRkH1tST9ApCtyfXPBnjEh6sCuzF8mtgfsoE4kMAFeiV6g5ea7rFRaEp",
  "key2": "26ATZGVYhCm5dsSciXUgAP7LKnwFvahU7bvUZwpcQGNRN1sADqwYD5xUp1zjJQuRguvrBQ8ovCHkBE75LEtJJC73",
  "key3": "3NHwJf21C5m9kfeHHJCTKzD2H9mFXkJT7KbN1Up9Dw6aAhS3h29H8vjBvHm1awYYbMJAb9Jfne4vJdDtiZMKSEGx",
  "key4": "3jwM4HZjrRzzwGeu1RScrbicXpE6ELEW4kdkFuv6ik9QuP8w3U4jMsd3s44MnCthdsQAs5s8ggrZEAqu79Wgzs7R",
  "key5": "3EDSJY2Vpp2VgjDcV3bUP6K44VnSaiiqhPkH6LxSqL86qSTGL834Z2oMuKivUNLQexbGujW5WVgdgStDPVueErLt",
  "key6": "4NoucB76vS4aSxbXGL1H5ZQ66w9LFSHi4fqDqMrYwcTFJxRkTSfwkUdnDD9VvHwUSaWQvvXbwA2pDWPCzm2PwRgU",
  "key7": "35HjvRig2j6k6UbdDDGTWCcmrqHyUB1RUBVTwxjkcsTSF8PYBUjrbKweMBBquW4LLmeUWGv6rMWoidMcp3cXX6t4",
  "key8": "442goZqrgJF27zCcbHzD5wrGbqzgVN5gYmewNuLfYKJhe9n3rLaCdP16uq36bFef5DpvmhweQbX6pArjb6e3e8Jp",
  "key9": "5yqKXG9GTis7MTQbtvYDJwFUKwNYKTWxohMoE915cjZ8tBKYTGk7ZgobrUNrjeimv8rSY2HrzKgyng4hjeCe8NC1",
  "key10": "5xaLJE6vG6Zqy5rrcLvBXZT4cNYg2p3ZXFLnDffqBUdjgXfjEnSHvRxCwihcAEg29WNmHK3LbeEQGP5CNBrvim64",
  "key11": "3LA8EFBBLQ7tW7YVkAS2867S8itmvznQYvZq4rAhEonRZBhmiVCD2hcRVTrSoxv1NkqMf8dhCDWoWrgwh5C3oVB1",
  "key12": "2DtRbEHfRHjE8g9tzgKrgpYtLfD6SBH6xTVAU1BDLArjDQXpQamcu8VqNDwQdDodMcHtsFCYB2p24hBqYyuJWjtz",
  "key13": "3NuQNbNcWKmWpuLmE15JgfBAEmbSHXivC3uuZFWLRza1Lssu2nTHGrmJKpGWN54qQsBhKa4fD28sYsAjLi2EN4MZ",
  "key14": "SWDebnigGZS3LRzFUi983obK45NZwHph3WCjnQpKZEkBVheGdiAM8GaiHBd1BBbX8cy3JVHfCzxrJvqSxq9XnL4",
  "key15": "3MSHUcfVHsdSd79aVxiHqzVjsqPtJBdPwhnkHbv6pFa2RayXj4aN8hKe4ucMerHjWiwoH7rxXhzDnxtGTaY199LK",
  "key16": "2g52e816La4yGAy4nYF6hAjXVtYZv7Yy6xcUaN2e9tYAmJnUU6WXjh1yBBd6U4rpg6x1pJNmAMo2xb78XsX2xNfx",
  "key17": "eXydV2M6YbbDiBeSKtn5u3Lm3UeBYshoQsaB6warmZYf8nn543SRBy84aER6tHiX7DPVDdDirzxzJXnv2CdZKpt",
  "key18": "iCh43Z4AKwKft1U8rkdsJYPMPNAzXiPueLK1B8knZmnY4gAYsNBYAUUetsdFgKwP4ZjCxqEmC24A1D8ka8TpxdL",
  "key19": "4stFYKnxxtHmCZu9CdVgEtVp1NFUX83TMVQzMMtyGDf8S3SSRVb21FTQmBxmL48GJTF3c2VpqCwcnmFfqkrRXeAn",
  "key20": "micCWbNXDbCYMKW3bdARRGmyBJxN4xMSLLdkoBpajfetRd6kqJWsAnV8o8TQ7Eo938uVwzjiQeEgYPaXqvaYuSp",
  "key21": "5f6rJ6nZ49cyyKAh9ynLsQgaJ2TtftGVdbuZbTB21cc84GeRJdetSUVkue3GoHzFPdtqJKngWLsq77zJMDDUhTLk",
  "key22": "2xcA2bXMUby3Fcf2XZjSmPgn6YNjPGNXwZe2v4Qv71Qxwiv8UT7hmRC7inCcHbPnqb4X2areMafqzFiU8vzoQXFZ",
  "key23": "ADpkNyCGdQbisQ5zyj8XWBQU46t2tL9gNUzD5h7XnBa5Z198HbztRBdyXVpGyfdRnksoc2FCeeS5aZmkdhkLjfM",
  "key24": "3x65thqaZ834FXaQbkDzkrnobcteQpwFnn8hr8U8k9cU9zNyBVs12RvZXEaJxWYAVc3pZUhyWX8yeE2BMSg4iJHW",
  "key25": "2KYKS5sYSeFybUtBtRe3tTTKjzjqwsyDnTtLNt7Ae5jUz84C2nMrgnFpuekjMwEXVYyAZageFrMfxiUiXNTruwGP",
  "key26": "2EUqdpWRHD9AHgDktqXaXTmSNrJLJLHWRLSp9eTe8gFrZojam4HFHhyQH71VytZT5jRiLcjAjoTgcSM1Ki7mWYwf",
  "key27": "5hNracHrTKRFNkk1BkdChFyu6cg1pqrgJ2UWkuucysSE1i7fAkh6wFQhHb3afdGH2YfyXZri2ZKaZnRSgT6n7aoE",
  "key28": "4fYr3gNpdKLQK3YgmS2AWHGiUmwY8hiUsRDNqvjnhjvw32mt5cCa1DbYxkek7KSo4nrsSjsUPn3B44Y1ZUSiNH8U",
  "key29": "4SMsfB3CC6uA31yQTr3Mt4BtxhyyMGHExido65JJJ5PmsZGvs9nP7Wzz53kVBs9gqkiVjj8VryCXW2WSPoiJYs6n",
  "key30": "2U6WjYevsM4hit5ku3HrKTCWahjQAQ1yEX63NRwX3C5o9ViDUX7sbGVUcqYmfdLauKciUJnxmipv8xSFgon1vdFL",
  "key31": "4HdeJssVyA3RW7NehSK4PyELtdU7uxTmgkrXRHr5gT1stSUgYXeJTyRrKpjWEwsCRN18ssHNjrt1SwKah7P2BYDo",
  "key32": "2AZRbHri29JqBzVa2f9Rew1PaNameVVSQnCD6oaNCV9XiXqApeyWJeCJSUNE9Y348TbQguoP5fBjoE7wS4kuhZgr",
  "key33": "3YDgjhEVhVokn8AVtuCbXoufR68aUVrNWXJaL8i9GsaSNU9GuSu4uJ5zF4sj3Lzc4mWLL3oiQdwzQ827nB3bGMGm",
  "key34": "38E5dCZhNee4eCL4f2ke614DREicAqJD21sutukciBvMAyLZGs6WR1AoWmhUjvnMhXvUxiYpKy1kerxR4ZVyY5y",
  "key35": "66g8RxNeAXUBDSGQGhY2JJjW8MD6YuRLMc9d2drVpZsHs8mdE6NTuxXdPo8kUVDBqHiwX4WLFGB5jiY7tjapRpQ9",
  "key36": "4QEu8AEQF57CkQe4JtCPHDVDXMKSK48479HFhVquQdjAW5WGMvTuUh9YdAhNDTxGB116BHx1Jf5e93QXUshyZeab",
  "key37": "mb31j7io9irg4DVEzPMFfTci1rc7vgGXB5uCD2HqJfVJLT5w6ce6afvNihZrES7TsiT1yumt2kcZFJGK2iSLgMJ",
  "key38": "2AUssWh4vwPDj6jaefjEYNPNG5uMJkv1dGQv52bFTccyGDNFHuoK8DiyaWVKLEQ1X8Ji9JRZcDdubyPDpNKdAwoj",
  "key39": "2wMBndChVwd3bXwmmfctttjiZdXp1gsYX3ZQcoFeFo6SNc1dtDsPRyShx3H1JQ2XKxZzVauSNCTnQXrsfKrnssLf",
  "key40": "5AM1NDxmGozyo7XK1pH8HzCUyrS7VFoRma3Y2tGG5Wa6SAya4VAEzXxmSoV8HZb4niD8zBGsNB3vdPKycgjrjgid",
  "key41": "3DjR7wgfnMubsTrY6ykivcnCuMVCvEkChMYVfZUuu63rK9DLr3zSjcyztyFhU2YwNs7WwtSYwdyJFQnitCiTzQYd",
  "key42": "2BMN5NZPXu5D7r8svfW9DPDD2h6awBUUyrVG2CUf7FHkE3oiDtwPSTR3UFw2oyaERxfHwDm2rCtDPvsRn7mvGW4D",
  "key43": "3hT7AyDAcuUqfopbYkzq5xdnR36XL6FMJWPGc1R6KiWJwwNCtxeQLqK71zCuut6tPfbjoumxeCBuonPsiN4FVmSz",
  "key44": "5uf8xREFQpanRmnLJdbMDL89LbFThfheCkxCDtVHzdPHGST5TN48wpbBED57GCAwUiDzeBBpFtNTM5P2SEZFi9Ea",
  "key45": "4RkU6ncFWJoGEqHxwxBKJLuTrvi5nGziQCVseaK7BVDQpt6axUoFt1ptpMUBzi4HZJUeXavrs4rmB6QjRYXiArru",
  "key46": "WBXhKMwsWCshkwUznttvDVQn7r9HJebCV38vxQU5N3q4KBKrVyTSAEfxqSpPSQ4jYGBxj2kEnGfMcRYzm4XBZ9d",
  "key47": "koUxZ2joaenjB9vY4suQXYYGJLFrX8Le8q88Qh3y9F3zDmizn1BVzVjJnMg35CmAdrDQRFso7WTuQwxqtLvqMUK",
  "key48": "uqXSt81UkYsu4WWBoCFgH8QEv6Y3SBwmxbdRqGL6ktHN2eSMmYnoSS4wnZ5x8LR3R7DWMsqbfAhUMx2p9NaRJHt"
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
