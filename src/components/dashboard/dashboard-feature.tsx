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
    "38KaB4BZxvnwtDEPVe6gN34qNB2h8eMtWfGCcEKvUoP2uiPPHABuwDAbTKaECvmxYyTEUQn7pDWh1oz4RAX4e6Dw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yJgGdLsScGTs6Av696zwxDCiyTapQ5mZsXW3fTpajEcMThhLfdJ66yTXCBifV4Qnh3Z9Yx94wo6UfDy7KK1kTTZ",
  "key1": "3EwtVow9xvZqoY1MR2S4T2VbM8Q8VcmBEYTaFFJoe267jYRNgEpzthdQ6VmW6QC1VNLBQEivUKLeXgti2ugo4wNc",
  "key2": "3QpKV33sP3W2uTMy2bsZa8DG6fL5vbMaWr7yNXY3LSogjeM8oeJg4vFSQ6KcnrbSzqz1nZstnZsSQEwt6qPYfhxE",
  "key3": "4G4zFn65DW6Y6BA9TLKn8BnmJ1QXz6D7t32B3gki3rFZpd2qg5bSMV1TSSnAnAW2psHMrUcDJ4ressPFgknYz55X",
  "key4": "33XbE7uEqEU5Jw9Jc78kVSyspitGjyw2212Kbmmg6VWYHBUEGnw6h1TCxiDBm5UrUj84HpuyG6kAGdUDUSapuDms",
  "key5": "2VqAmhUJDwnw4vNZF7NuBkdtpxLHTxLTnv72fRQaYyopWChBBmHPiUtvxdYSpU4TEZZHg89YE4yPikKScnsqnmgC",
  "key6": "4DxWY8Socai7hM5xf3PkqKonUHfEyu3GZwsberWuhrEu1iwcaKMow4aVcX2c5inVg32zwtLsK9nCThCA2aUbyHL8",
  "key7": "VNJs8jp1ywG4g4AN2D12QaF3AUqHqkcoZuCWAyQjvr5ztwAuJqmtQBpPRMKL49uVfkXuJaWxYK9SWYb2b2mcDgG",
  "key8": "23YztdpCg6cs2PRmY9yJdUxMi2TkMqJ178CMb96YoWUPKcWNVdQVmjh3kZdLfRkvxDCYGiKk6iKZwQggGXSkMLiN",
  "key9": "5JFA6HCz5UNkBNtd774xDcsFZS3BhsQuau5zKyTbKoHnZE1m6yDuQDTJdoxstQ4AnCHQ3n5ntHtPKhC4pfJnmnbZ",
  "key10": "3ZSu3CBcKtowwd4NYsSqqZqeSniPrAausGCbve4xRRCx9NEZAPFoB8cZ1MLD2jPvxnfjS5ZMnXzZXzS4H5gnUvTC",
  "key11": "364v3fcvNBMerZQGKxyPC4Pe3wJvRNktF5qMvsDg9ko1WdF74u5DkpWu2SkXu5wtgS6SfJGUaJAGpFrz488mTxam",
  "key12": "3HTMmF9Peuw3UgriUi6V22Pr58kqCJPaYNo4JoGhBjsDRLNNyNqNQXjvQgbTrkPukrbmiJKzYTdn9Xzt2tcrNpi9",
  "key13": "3ddHeESLzX75dHLdLfiHWQMupggUf4Hooe5BDCr2FXdioPfJDbnGmWgGBdkLm9nB5ds5w2kNSikmZC3Bz4GPGCdq",
  "key14": "26XjcZ2NduUdoiG8mSGAWjjJnGRhsJbnjReU29CP46LAsMGivpJWhGEzfGsMAcKVydMShBYXt76KgXtK1veDRgUW",
  "key15": "4qcBmHmcNxqLtjF468KYzukx4Q4iJdYMRCk4AcAUy5Cq8JPShkfTsNapr6JkqFAkZyEX8r9eezYtfwNA9Q3fnU7E",
  "key16": "2NpXShCBMNWyFFBMHb93crUjLia3aDV74NVHvf7qfP8JkdDyfQjrCbhvBF3knxr8FqmLfe67LS4FFqe1fRqpMioF",
  "key17": "hJFawjMaNaz1fDaErzHqVCzHAoyE9wF2Hcdb5G441qAV3NRRtR7HGHSwRc5Xp4BX15M4j2BtRXSZq9wcGekqVaC",
  "key18": "2VJEzES3k8DgU49EJxKHqBnuf8SrPohWi3oFUaNHKNjfhCb3ymd67CDruaQ9FfYWPN6LpADR7ZQMMugiP4azkkxJ",
  "key19": "3hPguYf9wM9S7qCnGVWHHAKaSQKd5gnghs63YNMACDR3euURTYByxpXPGjTmJ1GB2pGUiVX5EWMLT1jJhkuqJ6Mp",
  "key20": "2usQzitmi8HYp1R3EZtU9Hyqcgwd9YkGv1JUsWd4HE9WinzE5JTU7YSCTrQcM6KQbmJjE9A3DEtnLSnKmFtquf6k",
  "key21": "3pnygkLe6fYNgEJaqtC9pEUFfbjec4yGA7XiZEa1AthLZqVKuN4HaqMAhep2W8nAYH3JdT3vEvvwpJAL1i4xVXAJ",
  "key22": "2XLfnqJBagKbPFCPSS1X8iQRp9sH5txMAkXbzfhfEio8uTqz1ucqiDMqWCjNgMwkY1aGfTZs4LPsd16aUyqXgABE",
  "key23": "2t9Psz74YkjJRjxF1d2hfmYWXjtk93WBtNYPyXWhxbiS8PEd9kVwcHM2Q4C2nkjhjy98fnF4XAaDZHmUDTt9HhnK",
  "key24": "4pNj3EtqwCPhFyQbVDaaSnPn36TCaUamaiKkz2TCcdYLh3eBTFL51R1gAsjGrjtNtAhmnjif6iQKmorHtMmzjTkP",
  "key25": "57YDXzKjqFj2yxScNMMwvAXccdP7aWYR4zF5eZKu1hkGxk5EDHWXyJ9ZznrgyxsjhTWGvxWMWAfZzi8CHkMvDadj",
  "key26": "5TbZ1henJaST7WRPU8sqMJGTjBJZH41SxSGSGpU3kRFdxo78KgWzffXdGVuf9M9eYcr1mzJEMTgnFNQ5EXjGpa84",
  "key27": "kXQ2tfrvmjK751Zha1GAp3BnNvc96bMewtHCjDN7HYoCaD4bXsBDxcRUS5ntS2sGDQVwH1DKE8piY1Wr6qvSWUZ",
  "key28": "4AkKEabrKGuJvZPH25Mq4ZEQDbE5djMtUGiKhwRoPLPYyF9zfYkHqBZyevKkEWCBEmgXq57zWRo98CdXn49iNVzp",
  "key29": "5bEXd6D5u75PxxL2ToqV3f146ErFcTKq2K9GEmcJbtK5noYapQ9PwPGBmKRJvgpGB7kfbNCWeoAELTMWBmpUJCes",
  "key30": "4EvqkLU5JnCeFswpqdwx2BxMR3oFzR5zWFy5Zm6J5CkbEcvmSGAVfA9Yywf45W9syXzbcUzbzGv53QkcWMSJ1X4T",
  "key31": "5vgpxJCAVXvXTVFAuc15mNeBHgfKgnToEAF2ifWpjKPE79uVEnmcQMfHEvAkPMfDr4XAf3GSBiy46zU5BK7J7Ert",
  "key32": "5AR8imoT1B8meaUNVhFG6Dtsimw1QPciHegaYcehuATYkyzp6C8dkzo53FAPr85Qcwyvt9f7c9trgkt91TQtRwqy",
  "key33": "9D2uZ3KyDdd6qbuyERYeX826cYd2aqBjam1xc24Qu4XWF5uGsFpwf9gXASiZKArDoLtrQTJ234a3gDa3Jd3T6if",
  "key34": "51wVLUUAe9wZqYAYNFy52z3JsiyUTpvvNyQujBRxap8tMjFjQmcB7pmEbsX9sTaPy2j6Ywv3jghppBDxFsw3meeD",
  "key35": "4bT7PZxL1hGnGTUiTx1E1zLHM5rtVXPRoysT1JM7wV7GDzftPrPK7eVan3koAJ6uND459aSDnmfuQ5YMBGKo4Hvh",
  "key36": "33pZPP1c1CB5VCMK7rCixYf2cCxD7NMrTNj6FbYCf5Vk6F7APGFhqqMJ5XfcUWJ1Z3cBPzTKYeyPvcsLorEViMte",
  "key37": "5C1iGe41d1wvdgz69wTxqrjumdqZ9Wqs4pUNj9pYcU9i72BVq66uGCBJk1zeemVRRNaQGCtZdsVr2AVtBu9VEvdk",
  "key38": "5Fy6za9aECh9UAsEgzSCaHpQothxGsMYsqkuQHS5Lnpj7M8b9wayV4T1W4zBcr3TBE8CVEVsFiX8WtVFvF7P2x14",
  "key39": "659DRe8zgsVDh428eL8ZVx9sYbPM8TqJwC8o6rY1qssvzfPypzbxbUonjjWZGUP1zG36zbmmjEmE1PpcYQw5Gne8",
  "key40": "32i6b143nxuvZt6MEvsWwW5xiSaHFJfiZ2Y2XjWAMCxtSrJATSvHa5vj41Li4GZ56cY9xVk2x3kjXbwxVGcxkcLk",
  "key41": "3Md5FBARuj22h6yFXqW893gikXwzvzGgJWV1gS2qVYYpMGx8eMKaQ1fPUsGK51v5enkas7dDp722ZjqXbJqpqAaY",
  "key42": "5DG3Lv1e99HvfmGtr1hJTVFZTwKhh5SBjpW34titrRkV3V5SoWKNXwS9MBzgfa38jckpReQ5fjReU8d6g6vTmFeV",
  "key43": "4KRbx76isGD9fzhu1fK4ZtxBPMhDPT29Z1FdanNMVARk9mtZT2Frb6DjhzfDK8cCYpq97qmKLNTsz9QTQyZ2WCX2",
  "key44": "3SwAjXT8djNQUpVdNBtrptyrqL1TmCX9x9Nws4m2RP5gHrTwGWrv3qokpFc1pw8nySAmfgtYdmYRKJC5sJrUWUjM",
  "key45": "5vWgvPLKfsDCe9HcWiQsgaZadUYRnLN1XVsisaAbTxd88EwugVc72bKzjqrZprhzq1ACFNkCKuJ85r7mcjgyEeVX",
  "key46": "apSM9UcGb8mtKRJS3BVrmVwvAavUt8bwWP3kCJ9Cgb9auqxd7W1Ftp9qha23ntGGNULscUP3o52LVJRD3P55WYT",
  "key47": "4jXyRZ4ZweneM3qynArnmk7WiHVJhB8GVNA35zSqtth8GovgLCcg2ko8T8qhchxYLbCjqoo7Himdxu98DNm9mQ4q",
  "key48": "4PHUg5HGNW7cXpgMSE3BfqyAHDe6Dg1D3D2EryGvH38Aj7biXa1GAF3oda7g4PpRgpEBQcmKT6MW1Jr9HRRRoXh9",
  "key49": "3xZVwKy8ryo7kxrCkGk6XGMBjbpb6TKjNfe3zqpt6tXGQFFj2zE2TNUxjoXiJcmotzqFa8VABS7uu9XsiMqDEqth"
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
