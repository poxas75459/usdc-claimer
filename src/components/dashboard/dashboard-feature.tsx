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
    "5QJFMMXUbrCF7Rx6RLntnFiuJHjgNhPs8WqrqKvSM6ibFzQCaXMeyYvSrvvrmP13iJjEykU16XXBRrXovr8n4RUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aeozdn4KdiTirmTtUcW3kri1vFk48dJxpVf9bM9k7hbL48nTZWjKuEMGrggoWuqjz4o1DD9qjw9xgmFTdgfkZ9V",
  "key1": "62kBTj4C5EsFq7FA42NyBWqnd1HYZ3Exj4QcKNqWUniLS9rC2H4ECtmcZcAEuEUPb5X2GjxxxdgMSC1vCqWxV6UX",
  "key2": "3bTgtv1M1XwxavZJ9sj2U6UxR3cNu2odfBsUtpw2ynTpcFRfSDvu35WxUukQBcbdbieNTANDv6WYtAaBiSMPnUnQ",
  "key3": "MVzi7ymu9eQ3XNS52Sua2fKA34Atj8ZfMqY3w3n2BnGzYQg1VCy4puGiDqEeJ1MYMwQWFYerwGxoPAojKfbt8T6",
  "key4": "3iad8n2fKrMDkcdBcXcfgY84AbzfKZEbxCxxcy16cEaK9jw7QFcrXejrfAP3mo6GZJcvREQED5mtTW3bNYSVh87v",
  "key5": "4gwm1xT67EucTu7FiXCN74DLsYsxPvagqSs53gdHfxWxoLHHjsDq3T1ge825BCKMP3ZCGVRbjYBEnoQDALpQWxFJ",
  "key6": "2NCFeCn61G2xToPJ1NdtZaVVrNpkTX5WEYJz5Ks61PcZJKmbFAiJYxfUSJ11feKrLWKxaYR9aQaD16eXW3H9iHJT",
  "key7": "3vSH2rvetTY6nPp4PuEi9YiLs2U9hGEtjeGZvvrqjLTxh1DM3KzyGPSJ5sPUQADPabFUWH9JjnhHe3U7XzbFSr1D",
  "key8": "28gHPEgpH9r4HuarGpwSuok1YctzaA1ZRCBL8rjNSYte5x1G1E5qCM69sHkHxdRgz7yippUY1QpvdDr1Y4FTry9K",
  "key9": "5wcprXkqvZUiqXYvtBNs65Gqjz3pQK43uFNd1KzbCusVabWLgma5bDJ9MshgWKXehjBSaPfQyBoHAKrj6drUf7KR",
  "key10": "4LDLu5xEzjUiJ9RHNruSv1hgg3fycqoBe7yVbiaUJ81tDenyKRWrGdjXpSgb5bRv7PvPVzi8HWNhUVu39B9ZBuXB",
  "key11": "5fMU1m9Rt9M5YfkWKCJ9R6X5rCfoJKtQYPKc7kHTy5zkB2fyxtcMSgW5FKMn9Z92qMpGNq3YQECx2mGoutMh2g68",
  "key12": "4sdUYqXfYVewAv1Er2PaYGKwQEY35bqDbtgu1NoMjMzk7RYnTLEzsyDXzshyqqDjA2yy3YAwvpEhQjs7bYuUAXss",
  "key13": "4WDhKVo4vovyNaDfUc3H5PY2t5eh229Yok1oHQZ5DRPgNT6ruMdVRrwMjrs3MKWtxFsTWHFc5V7ZZCi3efuj4Av4",
  "key14": "hkMMw9djjteYceXXAsrc1XCcEtyPwifjjsvUusRXDquUtbbiwVCUYnaRmcs3DLWEmk8iJyHeLHHZhNvu47Gk9fo",
  "key15": "458Cgrdv7DEt4A5HRNvc4Xp24sEZtEDFgF2vC6j3gNmmgu7wpZqiiyvhAWaUM3v37e1TYqinfK6V9CRnJ5fB4ovq",
  "key16": "EnHMFCDdMVaDnnXHk5yEcaYmdsioxSePrt9F7WMDbHXg9Ck4i3egcVcJqNeEVkeX1uN1gTVvtpJaMx2P33M15rd",
  "key17": "2TvLD3f8pgymWohVt8K1xmyKjXb5eyTHdMU2SQnUyMwqrdbmTkiosMFhBTtbnpXc4Rm1xAzWdRqQDGFawZynMBDf",
  "key18": "3Kf5GwM9oR5gjvU6wuVkTBgFkt2gPTipTHuNa9i1nv1Kze5k1bZ2oCFahqhmyAuDbBRthTKchh9mQ7D2Se4shrtD",
  "key19": "5Tt7f5vY3SbTGnV3r1BLULnfGBepy2tydGW6wV7No9TzeRUz6TmzZLvcq1zW6Y7yCNb6j1VE8UQjwvVdFuxYBCmM",
  "key20": "3YJkMqaaqkA87uquwo6mQf8hRphrPZa9B5BGCgJXgGYnZn4nH9h1i8sE3BLWYRuZUzraDAKyzJWRHT1N7jsGTDGx",
  "key21": "53b4p1v22iS39wKyKnkydpdM4bot4RBoVeNX9x4YanYCpF3i2XoQW7fUN7hHwpQamd7k8wkoJSqxJk8dooQWdAXv",
  "key22": "2jvmJhP6JP1fFm1V7P2uGQrnkR8iK2eeM3CePX7iZDyyTgqhpZJeZMpoWajWzyEoEKxG9VjgMB6SzgQTzUdqKVhT",
  "key23": "4y8VZgf4oqXQ1UtrSsiH4yvJ3bVpVo5o71hyi7G2gbHujmw96o95YHHA8xVk3C7MtQpq4vcczspM5d2xRn86Qfij",
  "key24": "3GuMPVRUAQdxjgjBTBCvxJy7pqGTRtSnSDcZJYPunzF6ZRJmHP2uKosmmHf78PKJkCSeT9WqJXd3YiRXLivdYVdA",
  "key25": "4dApAdc78zQtAprQbuhVApPL61vTG2pf3q3isqsuotTKcpa26TFSsZy2Zsk6wN9tNn1hm36FvjRxgVDBiDVAM5fj",
  "key26": "22gnnfTLHVuLuEpXYbRGwbjQZ8DNAFWXt5dLc2absKj7n49pjWMLZgSPr16WvDaSSVWBiTTFbc41EAENyaVsEoHz",
  "key27": "4u84VhP4Swtc4CzyEpH6dCKg3gARQVa4GMEBrJkXJbkQMDKB7aCB9gVqBFYiJV96PRAGCVBMAcxqFj692kZ5BXx5",
  "key28": "4ERBSH7Hm2qqqJSoR8SWF4azpds5edVG3934QqV3LYS2NSUSwLmko8AEVrsDMWrkc8U84jk1uPx1HyXNM92mRH7P",
  "key29": "2Dtg92zovjtbSLzYF8bp4QgghcJZAvBP2YBE3DYiFrFyDPm1MYFK1NrXN5kBQrjuQ2JPUCHqDHvZYsybDic5cE9x",
  "key30": "2nYkPotQP68SLeXydCs9nzCxtmWCCpxykzJ2ZT6Kkd2CbseuVVDfE9Z5gUy3kkMCDKPrpbiTwcLBUpGBLU3ExJ8s"
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
