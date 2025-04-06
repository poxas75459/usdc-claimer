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
    "3LUELFNq91hvcLQzVwjock6x8yRnyBt1X89QLSryVHPPVRaj7aWP9vGK3Zd5zzWTrJo79xxKA9iePXwzBHD5QfZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gRMUmqYhoKSKBD9fHvJssWLJMWWnWpNWz7StrSa5N3C4ML9mH93Pu1nUbpnidP1DbgwXYwUU7J8sto7uGZ3NQZd",
  "key1": "32ezEBNsiBzJArqVz9zpr2i8qHPdjSMrjgcvFL4peXognXErqwqqFfsHmPV6MyJuC2ZGbPPa1aVwFFdynR5rvTiG",
  "key2": "4MYbjopZeVey3CoshZS7P2ougYwRFWWQC29J6ED936rTd6x2WjcW97BLQ1E9ophAh5EPvu2RfuAPQZLc59Q7kkAE",
  "key3": "4bX5ZrAArwDNUsFrryz18PURwcdNyTdJSnqXZYhShV2Menj7HKJV4YRPcLRNgC9zipPxixUUzXwY5NaUyGwfg2Ev",
  "key4": "2jJTCS5RweyeuyNvBZz3kaJBzcYTCx3ygEZknCkFEiZaF1C5GnccoaYPd6UAYiTxaGbioK6L9FAaXGQNPsu7D56U",
  "key5": "26u32jFjQeompTwiQ7S9W8CzJbFeB4NZfdmPtBNQywPK4KJYEFiPDznxqgiQih8ywJJm5VDq7sUd5k2JBZf4Ljr3",
  "key6": "4qpMSMV82AY8pnwcjiePchncYptBs1AF7263PmFYABBGnkiu4cBXfiCkdAcbyrJLacfMRN1gjYR8JkSrRTBue34d",
  "key7": "2Q4PmTULDbyfZ92Hr5y1EenbEJomkvbjHNqh7an4PhmnvY8wejAqKdAiR7zQRha3QxADzSSneakfpY7FD2HWmnMX",
  "key8": "417BLD8oKo8VsDtyrsa2SW7Qn4H5UutCkkDVy4Ain5vfzoCQo3MLG79tsDE4uiMPhWdiDfqtaom3jFk1yZpY7w9V",
  "key9": "5dFRrutMdV954hHdwuyJrNWg5suoJjRE18vcpUVgBKxdNHaRKd21tyzbzZfg9eVtWNGNfU7RqkGMxVM684hc9rqu",
  "key10": "CzJFmSuhFYeWtxauxcQ4zkFDWE8B1WXJiffMytwJJ2nSo8TMMQDey6pPLCDFV7GUFc54CLBEuesPvi7Jav8JjQv",
  "key11": "3twXerVpAtMWwjr4Sb8vUHiYiLuQ8ET4x26tEGbpv8FepZfyo3adtLMhrNVdYgZHw6r36GrWwnyVk2XAXEcKdhim",
  "key12": "4pd51PWdBq7C6UVqL6gh9kzFXq23pxBCP8ovy6ws83eVobw4uuCaoZs5BmvGVBekXz4pgEPmD3uKtGiuDRdXLzLX",
  "key13": "3dKzNsveo3QqUBnK7QPjH6FoZytS8zYZBMMnYKBMS6qhxNm1yMAwVhKGNVi3omA9NZWwJrGtJAHAuRQLyx5gGaan",
  "key14": "3ViBXS6r3Vqr2Zn636E8VZcDWYQHVp538ikYKozwsaUXe76rpvSLrd4XNEgm5NF94LkzkSY4oCNDSBZ4jb2mNU6B",
  "key15": "2BGByPcDtafsGx11yGbN17f8crkeX8Cus86K56dHqyxm75B9TA5PVXcE1atHUmzPUKMX9sZnVmx2dGz8aEKnppGj",
  "key16": "5Yecg7Eo4s8RVGxW22VXBovtQL5Tooe22kW8BNjdWSfyp3akMHzy9vpeVnqwqtsBk72VP1i3o1cb1xC3Q2r5YvNP",
  "key17": "2m5k5ZeFX4Y983vUdQQQCbPJ9LAAwNoyDdw3HHihHkCom2uGqGaaNefAiU4iWm1HMMgb5WSphteepfMFMcqZy545",
  "key18": "5bi2cHMycdM7S8CPCSSZTcHntWoCZ5ov6ouB2jWn5FPg8E2rC3gomUSjGNezMQhXYecyYJg6W634SYh99gCePgbW",
  "key19": "52JywfX8jVqiBEVBUU9vdy6UAGvdu7wmDPzihz7hnZbGykpR4GEk4ARx38jSBW7mKUenMYS8N4bem5KCm2tZ1Fn7",
  "key20": "65J4DS4j4mgAAY2mrQBMwvC33LdwrNyhFCEkke62FexsiDs6HcApPd3wKHi1bBLppqKuBNrqgArkKL1bKUpAytaF",
  "key21": "2aJyatX4dVHcrbQLRFi8TYXmyR9URsu4qSfZB4fDAxJZEDdj1evkFkrSFJGUNJoHKiVyBY81Ehe37SzoEs39Pqam",
  "key22": "3iZx4HAfFqvYuS61KGffpikbsJWhLZE8QTjfE2cyWNzZLDXeuRwoqpxXWN457vPHzgJf77rYusTR6LZWzoTVDq1i",
  "key23": "2p4vXJLGA1vs8Jq84XNk4HFWQiCTsM4TuLsKKU29xPhmz4qBZUUGM9i7UWBmKEcrSmi8igo6nuN885wcQ1DVwEsJ",
  "key24": "NnPDQ78amm4uoqSzCVkrZGmih88gLmCHvL1hnBY7FdNmZacb1qdTn3Gx3T1RvvM3eqK6sctrBDsJ144Ag1GetVA",
  "key25": "5i31nFxorC66Ywp7s4u9BUx5YzYHVw66FNW1FxCXv61FjT3yd3cCo8qkuomAXg8KNpZYda9AJHpGh1R3rCCcELEr",
  "key26": "ZopsvWuXUyB4NzgKGJEaeJ746ERoWWhWqnP7J6qYsgsTpX4vdhWdTmPqp4tJF6ZnzY3SAS6LNk9GnkG7x9R142V",
  "key27": "6apzRc6CzU7rPtwxV9X42U3pDiWA7h44D61oHsXRH7ibRWuzZdogxVPiPahS1jvdHez8meeUqBwUy4LD8V6BxWz",
  "key28": "xdpLvvaaxKPvYHxP51yuYmNZSJ5hy9xAQKFSfNmZvJsH2ajoKNBmUXAnxWtKoGDMgTymkn4NhBKkyAvptXh7Qua",
  "key29": "eBo8dPEkRWCJGp9ByzWsfcVw7e3T1Fm58GaCt2dix5VJPTVoYJW2AyiguHfXvFQxtH2yzqH3rZFXSBqfM1RGigW",
  "key30": "5X75UEyobKtwDPRsLjKwypcNDdjtYvwTxRLe7opU7WL3Tza59jXrhNfUGkhrPtonC1fTzqSsRRQaVQMmT56enqPq",
  "key31": "y16CK5CTEtM5DgnTAxVM8EEXki4vwX5ty3vHHashgn2ycWanv42FbPxgY2J6y5rDwGV6BJnzHd6Z8t4pDzefUgZ",
  "key32": "4xDdQghkSu6VE9Yfcvre8csDAFSUfC7QLR9LeP2ceCZLtkj2jCk6dwecS6sRf4Nbx6AcQSDcmFSF974uGRXodXZT",
  "key33": "656wVvbmTbaRZiRbwT4CbMtwYnBekUkd8CjsgQbahL9gEKFCjHmPjncS2mPnFMxAu8pwrvMAjCYEZCtKeDzTgbDr",
  "key34": "4WAXnzf494JAzgNBWSEciViwvti6NgPXA87hzXAu6Fh6udbCwBRtJcqcNb6XR2LiNQD24oSaDdm1FaxHttMPzmmG",
  "key35": "43Cv4H24k8g7nLFZMEmAxGGijqAsepB1mD4AbdQq6Lk2RtivuAKfBVB31htYMsYsk23X8CrpnfreGdeHWAJ6E2BN",
  "key36": "5UMPJqSUMR9xf61qfzzb3cetAyXbeEP9FKB55VLbxxFuGEWmANMAC4YCPS5bBFmWYY3ficRaGGUa9ZfHLJ3ESipa",
  "key37": "3PnQkC1qcjF61UcuG7pqAZRyJMvfX7Rre4d4CWVQ3ULLyMCLUoVcsKvZ2MdUavBywJPdX3k6MdHTfS1uG2bkUZpc",
  "key38": "5MVdJnjcVz2Nmg9pDahkiFfe1e6SQYgnmFPsD8XGGLqCwx6et1cNSA634FQ7FRfb9KoCBq2tVQqRLeJgSLAUXJkW",
  "key39": "2njmHuHTvwUMPTcF6GDrCgL8R1Kb7rRWr9W9bmgGkosSy5NCNDKJGBQhyBvnr6B8WqT1AKsLVVE4hzs44BBEVt1b",
  "key40": "F8GxFWzKuY2k2Ru24npC6uvZN6ci43korwGF2ZM8AygGhqdp8X31yF28JkpeqN6qHwijpHuGXhdBepaSLizgRBQ"
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
