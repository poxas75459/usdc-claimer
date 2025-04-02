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
    "3pwZn2BdRXm4otGcWXpbJ88Xn7su9XWmbLMdsLytPEw9HFEDoFJrqPdS6krTWTZatCo7sXFf9UBViriGEgzk4ccH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63EVAaHJx2HRHoSAnCZmHfH47GoCUXQ3LpkWV7z8rZhwPynK8ygyfEuBDrsFCSMSN83SRTob9AWU7rb3vT6sbjH5",
  "key1": "2WyNSGrnpopYA1EAFAZEdTLBSGA9EDHw31xkGVZV1YbcybiP6fvhNs2uFsWRBqPTjLjzxdSuNK1tiYcdqdGwh4tN",
  "key2": "3WcbKjGgnmYxvU47vz7nD9YfaZxCc2M8wiEisDMoNbvGpMvyeWgfFGBoEcR9UdJtRUYBogTW4Jwwx3nCXwxHrRR2",
  "key3": "4C5CsotNTweJF6ZoXgDeHjLMiJHVhcjUcq1LibypDwDcfyjP3Er5pvTqDwnr54e7AXVjbjQN6r4h7psWkiGH9Cin",
  "key4": "5NKoukiMpGykHjzYmHaFeY7XHeLpjoU7ZgXnC3Wcr3zySQd38WgdrZ6pEragux4qYvhbAV2kmpnAwMbEZnAugSEo",
  "key5": "3FuLnsDwGHTYjqVCXAckfRAyXX5Mdc81s8FUHzCJbUhhBbSMoNKWGxefMvEH598sAFG3XWhCLURTsxXm6hpJdL6j",
  "key6": "2pqT6uZPdLGk7nFo8UmHCoR64i3JFem1BDavwD8x8AoLJkr74QqdWQnrcEj1Z6AhzVSXP82FwXLiod8u6HWmYoEu",
  "key7": "48p22vmJf6iSUY3ZX1gkYgNBrsaDXTag2TDreGgn4wP4t4ohtmkyJ91fsX2MKymnr6LDD8WwP5TcitVRxuCKnbhK",
  "key8": "4NgiHn9yuhTitmBaMKhBZ3x8uHvFeUFt7mGRBze1oHfeF2ua1BdeBgkzFBDfHZTtMfD26zRPeQyPnD5zyRRt4oTm",
  "key9": "5QGqmhqPyTiqyPBjQKQFMLoGJhH6f7BYSuX4UzifZ21GqZbLPhFsswRrUJ9NR8u85DySFC8yWcAHrVx96hPP1JVr",
  "key10": "vVk1ATE93REJFn4djyQGT1PP5ksWVcTykbX7KC4LDJR44QWTiKEGJDCwdu795bEv6cF5wXou3qBkzAFEqyuiTev",
  "key11": "2pjKWrdZ59TQRS9aCrgQdEKFVLKm77eJphS5ucDtMYtiGJ3YK6CxPH18DKfG8YWkd1RCWgbhhNJZG7whZXiHK3j4",
  "key12": "eM2Gow5GySzB2DR6vn26DnkYpy7khgb8gxHsFnybsDia7kcoFQ46xYmtjHVuDUkHzdwYwGzrTddEqFBwSkJoFtC",
  "key13": "3Mo3ajaUTcv8JZZc2rYdPh1M1f27ipScm3biSK9u89S6925QUyvgK9JpoN8TP9cuttMDaziQVsczfeoqrKrNFM4Q",
  "key14": "2tLtMoHcnwvtxMU3HzVNZ2sv2rTZ38BCdQj7YS9qs4ZtyEDsTFakv6xronTW1ibvMoBwRWr47fwLFzB9cRqQbCdL",
  "key15": "5oJKkoBq4CVzTjohuDTLABRnGHnUggK8dhemzFW34esjUr5nveB14WSQw4PuYE7xDaHdjLzBZBpP7J3Ggawwm6MK",
  "key16": "4dguQeGA5TMQdXWvCtJRp55DSJxSckUmUtCq7yhoXNufg8TzVHENzcRz42S2AuqVRPV1uCLThRvCAKx7vVpaLfUg",
  "key17": "aMfJ6saiYdEPkKhD9NrH6Bdxp2yvChUXdVhxdfDKH7chD9UhsGjEHmht899xYpmqcPo2Aj2fZD9WJoC1QXhVKw3",
  "key18": "5q54eh8wJs4s4fCq2eR85rGQEf9BZHLHRPywpxsgCTzBNrt4hv6pTtmEh9pNJEJ7BQJRPEnZZYxruEQpbJw2saMs",
  "key19": "3QpSaYie9aBXKUadHLZRaUKL2CeDpKW2Tn4Wv97bFHEqW63DpifVCCrd51qDGCmzEf4uXCCvXKb6KsRyc9t2DboG",
  "key20": "2iMSNTdGSoik69V1rm2LZRoznAz1X8xxeSJAVzdvaZFX4s5sHkEJbZnSnMWbVrRRjwxckTwjHUvYppf3kCDbnAip",
  "key21": "2E7E9pgEApWkvHYPLWLh9mkS1RUQb7ERJwL8Mw7gKKNgUFrG3HDMvh7gY41GhUggdwxaA1MJMo8gHUHgNREdyCD1",
  "key22": "dTaixVrMTMA4CPaN1FWXxcSToefArcL3W5fUofgdvMFE46f73d4oW5fkqM3ocvGKzwKnyu9nifctfBQAy46B6yy",
  "key23": "XgKRQpCBfWEZ2zjfd7ZuSW1PQeCu3oFCuzLA5jJmLSumAHsVGDwJMgboSVU7Rpa1tPhdK1hQLW6bhRZUttuKRDx",
  "key24": "4XwtM29zk5JN9T7HvW2Ytdm9664A58TbJMysH7fTvyMmLE7XYt84zvE7W6b4U1EBhNwr9N6abV98ML3iVdaaaWdQ",
  "key25": "2FHaLJEP2KnSGRkEr14UrB54BBoHSq9y9phR4kfM1kGV3F1Rbz14NrXWCXPXACFAaCTbFPheUZ3oxHLSxzeQ8W9A",
  "key26": "2fQLnykRfMaHcLinoG6qbvBb8LwVLTxvprj2HiM24hkAX6C1pcktg2vEHDbdSFuvdyponpcTVEWDhSSN6F678FVo",
  "key27": "4iCnWF2oHCK3ExKdjMGZBTa2VcPkJKrGs2Y8DNqaTFSQbHM3UPQbnFMBBuMTEtxwYShasKh5kcF32ADsArgSYSpi",
  "key28": "ncrUoKk7cE9qjGT7ZAFCJaVsTyiVZa8CGnRiqJ5GMjXQ35eAg1pXR6RFAG8xjFRevZZfP35rPeQrYS7hsJNUVCi",
  "key29": "4Yxswvwyj29zsm6uECbyE3ZCnnrGQXM6J397ybEvx79rgZUE15rLACc5Rma85jivgWBDxQEzuXun1sTXW9MP4aLs",
  "key30": "51pwjViZ2uoA1gfjpjWqmuCa937imquWAgCWXQhTRWnVdX1Zq4eyJdWfT6FMTWuZer7DxUGqPfcZezpXcT3Dw1rF",
  "key31": "dyFMYaECtjwbRE5mq8YgoaXy16mkY7yP6RiUpFWsKTsR1e1E7N7VXcCKRsvmxRfbgLpzLVMjKucKU8c2ya25yRV",
  "key32": "9cT7DbuELT3SNnyarHygUZWPmNdd2CrdLBxBBeKqsnYuNn7JtZN2Dphc1v9qTQ8sqLb1mEaCGE1a9jZSsYzQHDg",
  "key33": "3UM63UAfL7ofYb7osZMESSpXHsQo1EeFWz5isRUQ41yRtixpcUDVHobkKT6fVUD6McENg631EciSYkccGL8uPUYP",
  "key34": "4vYJ4zKjopFSYh3dQAwShGiQXYRxAidRQxkNA6zjntyk1RpgAGGzqXnxE28JHNMLUxYoeDSNPvNxnDQKz7aRX2YU",
  "key35": "WqsLet6dVFW4D28UbuUt9Qmtp1GFAHTL2fDbGyVEcZRsKLrX1bYLZVmjGBTC4sWyNLqrbCFB2DRakkGqMfDYqR7",
  "key36": "ka1eJ8mWVR8HSxUmUZskQdLpqgBckLwcYEqMwHJ4i4rRRFU1khmD5xBxrs3oWXraAShZ6GmozSuUbeKDKxp9zAP",
  "key37": "2FSrZuwBGRHRdtYSB8Vp8YHyDdzjeeVncDSV1DDdbERhsNpuGFHfxa5j2tdXt3GykHzPa1hLuEtqgNPpftuwFBhM",
  "key38": "5y4W1kC1fu8a3D2fNtd2FpyUHTj8MKUgcQNkpszZ5H7VedVwCAnjSNJcjWfhuH33RV1b2NjqDUnfm3RkpgabfiUQ",
  "key39": "3pQFf2kjZgDyE85LyLDXsZswS9vyGSnbJ2TA8KrwzRJVkfU8JbQZ6ogChyLL8stNTofKhHy3wphjNC4zahTzDDwD",
  "key40": "3YbHdP8zZhjA172vHq9VUSzcHFDiVJRQYq9v9HKtW82wUpoouAdwbf8CD57EPT8X4XFPzxHBieCJMoj9f3vjZbRr",
  "key41": "N9yZU2KMPLAV4Gx7VNPFhxfk2ZahRP6r1Mx3RatWWPuNDcxN5aGojGd9KVbEWyWp7tSV4NmunHLJbKken4fzj2D",
  "key42": "5jzPnQsTy8BLZzkAVS2XPX4NjAnbffhBvWzmoveH615kwQb7AYByMGaT579XS7odoeiWmwntVr4CapGautJy6452",
  "key43": "JQRmQDMJzXWqNXbJXHYtvnHoehi5C7L1VhuSZErFSWLju1ByoopgfaRTBmkHF684NnKKKh8EY6UwnQD7NZ82y4E",
  "key44": "4ZPGfXyaSiZZy2b7jj6VNeMBbLSE2XxpgNTZgn49dDQUpVB47x7Q88agcUPtR1HrKsqu8b3prj7quKCRBUcANBua",
  "key45": "41wyHDHYbCgLCDmGgcGsdBctmjHYzs7WhXX5wtTCgBfJWuPeNcQbACJKwANXKrfjgN8beQ96qzQSfxpDh5AXFwUU",
  "key46": "59eJcsdDHGkebSbCS3itEzZtwTpgU85Fe3PosyZNHrEtUDMdFZ5xpnX3qnd2m5tFfhkJqrx8tyUfciA5uwkGvFdS",
  "key47": "5FXefenDNKMqYrtH3mMMeLD2pg2TkBpdjtKWqcYeb8wRuaRso5wSdkbHAgmYrW2r8M3d1B9zAgiMQtsK45W49TyL",
  "key48": "GmnDMBgmHzvcmfqy4o4CzZ7fq1n5rRuxJEApoQVw14pBy5aXAsuPsLpKvMfwQVMPwLKsRtJ4LegsGuepKM5dV3k",
  "key49": "4A3xqanrudwvfRm7PYF8iWzN64ntBGJrWWMqBkHdvMtnk8KAst1uqPqNqLCzGmNKbCKqp5JcQwPdxWr5BaT6CorC"
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
