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
    "5sccd2dNXBNRqzPD7fWdi2sUX3BfU8sKSRbu26CkfeLxvCx97eiGbLxB2xNWBMQVKDSnzfStrPSaGtgci6c41pmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XERLSxqxi9jKns72qz1rBzrfFDd4REPsnu6KLcfCoLEQ9vRMtStgffUENoQ9GQhQ2p22TZARP5ZJaj7j1h5DXGo",
  "key1": "2igDN3JNRZEhAfijbe3Eej9FtReLRyDMrgm7E6LjG9twQ3wJJiJP4p3VThcLWxyctGP6g7XAhJhLGeFNdXYXWjQQ",
  "key2": "5v8BWJVAwu2KKtKahYBC3zFTc7twrszaBjyozCubGEmeGp9KRi6DkrA7EVNunTh4KKMTAcMEcdKgCS1vTBnunCsP",
  "key3": "3AJSMrRcThMqTRG22x74ZLEgW84bESaygb1vdJQt9zynH5uG8EaW1qqdN9JqaF5MUzJhyNe2XCk76as8ngUFmUaw",
  "key4": "5QQ38pfY6niSaiPRGwqwUAEbDUKt3eyim3gghbZ6RoJKKr1zuviHZT1b5i3oM36G16s1dhSXaA3fy458YwA7FNUa",
  "key5": "2z88BDQ5KAefUuPuDqK9xEk9C1cr2epFTJ5urHJTaUwkdC65iotS9aPnU73dMEqTqcBDetFpuWcqkgFuWFtUP822",
  "key6": "32Qs4TfQmiKEdBqpfNByo7deqy7nPcPyEiTzfjqQ4JtuXRxM3xfZ3XdbkJa4tk93MpKNsL9nkVJQ4xqHuJTY7NWF",
  "key7": "5qotW45BMeDj4GBHizgPGLyjAAN4Q1VCLHKeqiXXQxBKo7WLWjvhxy8rBRTZgs8qiEwpKsqP5NDtWTsq4BmFjuUU",
  "key8": "2WSVywtUqvbPoD4kHD6J2qpyUGKR95KCpYGjFkbZC4Pgz642bJ6iQHoNoEbWNo5tm1FJG55QM37ZjZJzNA5PZ7yB",
  "key9": "5Qb4dNXJZgWp6M1uji51rnXtVU2svK3tAfpbUcjBrqwZ2WsNDTF9YwQNjtdzbSooBUurei2bG62BopYJaQ9FGRu1",
  "key10": "2ADU2UhyhbLsoWx5AkRYcvYNfHUVBU8fAuTP3kEfXeDDtjvL5NHd1ncPxtobFdkVNxeKhsQ6ponhomz6p9WXQMf5",
  "key11": "2cAcXaKRcgJ8dvQinTUDA5XxEpeaFA1wsFSWj21gxSVzJDnPGr7ddh6YiPGDtYJtnQ99bQufqiWmFf9hSb2hf5DG",
  "key12": "24yLy9HnW6sEmdwNCrMjq2ojmJStjWNhqcUU1fJF15cVbm9qzFvbStMavBFya6dEevJPnaE1rMFsT28b9NXWfcTk",
  "key13": "3rYAXzB22sXmnFki8qFPbZTdQ3dDL6tHgzyLL6oKiKd43eDZTogaMv2yPNPJX7dGSzz6FYr5hEna18kMuZL5YcSw",
  "key14": "3fqFRWKy7MfoogxvhgLAHeETJrS5PJuUhHHdL8TB9DDe2QMqqrLe9YJK3UqhVdK7q4Rc3rm1rmxr8Cxo1Jrx3B6T",
  "key15": "Aa3iVDa5LaAJH2fc113xt4bfGAubzrepGTruRcLQrG8JWLnv4pWzFBFGwKwZQW9o2LyJbRd537ELThByqjUrqXC",
  "key16": "5WhE4a6gLFQgu97jf21a1DwTruf2YYD8zwBeCxii6qLvLMatfZnmZjXyhurKfrW4cuAG3GbNMpmdvf3EYpMWspJJ",
  "key17": "4DKUV53p4AYfjefr5hz2sRUR2zDnws8Zuy4cJdmBVcQJBHLyJP5E5dkh3ZtD9SV31h61tVYevisVHDocwnbSJoUT",
  "key18": "5CH1UTjNrV4Dq9YC6E7bDmtWAsavvWZZPPrWFpHQD9jJYL4LzFy9pwnobUWcDYKK3LSsyjHunQybwiYfqqhjFoF7",
  "key19": "4jpAKa4XMoukipUDx359HsW5kAsUTwG3bd2NFttG93QuvAGaDk3gh8xxiLuM3MrtYxigmxM7ZCVAp7A8jDDyfqde",
  "key20": "juwEGyDd2aiVpDHPUHmkLWv1RWpv2p9AsW7BaAP1wwtjt1SEcHW7gRCee1ZjfvByq8rtGrKCpLYZ4nAfuqvFAw3",
  "key21": "m59LpBeUPvLCYToJxaePy3Kn3PLJcw7m52fFTxmkJu6AhQS5TtiGYrhbBoW5c1LnCmdc4GYVSx6MmKbaBzxJK4X",
  "key22": "5y5mkaPAgbzscddDV86jaRs784KCCUxHzWEm9x28ceuP6mSK8piGVimBw3d8mcvdSjLAJkSdVMX9fLSnJpiX58Ds",
  "key23": "C6oE3B31NsiL1xcTMGHUF8uCjZMwWuqZUzfEqKHMwSgCDYCagUjRhqkQ769bDmjzGXE2zUoQx3QMDttpkBJCyz8",
  "key24": "3okrgCiL9dh871AdwP4ZJEA57PSxp3c5w9qvDpkLWGvTq9kLcvzLMTtaCaMR2EsrmRznui4smP2fpBYUFUVawdAL",
  "key25": "21BgxcePTy6cmHvz7MN241dg846T98FpFTGBCjobsA3ASP2wuxxS2He66qGPVBFPBEhVKRrKPGdS1K5P1zizTa8R",
  "key26": "8BxWuiUwNEHTZ58yWMDQLy1WDcRHYNZqKzfUW4iEZnn1z1zTTeMQbQ3N7dWn4kRZS11gGCTJ6Lxui87jo9w5yPf",
  "key27": "3hzZtdM7M9TwK9GC1FUSet6onBrwJJwkUreyRxut3P5dHXdzC6BNUE8VBxWBgRRJaKmUAcA3wvtRM6bVYZi2pR5F",
  "key28": "4VC9RYagQDKpceJCFETGbSQHGK22z8iDumXDgKk8XMRQ4RzzGXPBcxyL7DK5igF4jw8KqHHnLocHcGuZnqiT1oKd",
  "key29": "oqe5syiKfgMHkQdxd7siJscwCXcTbSSewUPt1HpZjvLvqR5coTExDJr3RCP9L2Dpg34ZL1hG3oGNeaN9FuZyp2c",
  "key30": "5ckWvMDyPGYtHXUpgRDtPkqDgJ1AYsHTyvGPLuxBjUg3to1YjGyv6T9b5DzxXsg27hQcPXyDz8PJkLfAohXk6dEr",
  "key31": "5WyxDJTsLFfTDDPp6WgXVUUUeqVazXtgYsrGbS6qmboGPgcGq6uADmtjRPhhZEbVP7QetNFe6Y1rEETNvuRhC4yQ",
  "key32": "53vPTiRrqo1YzvgWxi8dGMK4gBJV4v2G7d9bjbG4tv982NoAFNjobkksM1cEqHwSs5QkzqAY5Khck9TUiBc2WFdN",
  "key33": "5uhduen5aegXyji6c5z2XamnPQzHPA57n6hzec3ZLFEqdw3KF9uCgpAaKb3XrxPPoe5eRKYfHzc4EoEUYxftgX52",
  "key34": "Xj5Ka2w4ewPfUU9fFC7MHY9NncfKmsvJwJ4K9si12LdjWaBJD3J9Hj4CRWcgBNU1PnJgwjRm7n8eNeM4KiadRXd",
  "key35": "3QGz2yeX4ZegHw3dXiVgwSVJ55HazsBmbctUJFZHtPFGB9HtM8PwBe9Bf2qH861StTDKJhj62ToSYUxeEQacJeBc",
  "key36": "5cZosHaa1CGi5z1nDjMAxQTvzL4ttkyLhAFe8CRryinmsKQNNqtRQcMuG6uejsADQxdGXFMx4gJHcVCSXrvxpjb2",
  "key37": "27dmjGZw3md6kYqUX3w1miTR1NUKosTypp7P88Dkx446YEThVSz3bMuPSpT21pgYdwhgMEq3x8fgUBUHwBDrKeNk",
  "key38": "44ZFo89wMCmU4kZuqDmcvxFZof5MUKL87AdSdksDrhxFvMjj14ZkE13tQTopodneTadcMsPLxcmyK5FA9P8z26AY",
  "key39": "5FciDToTZjAbSuzXDNVZWZBfkrw5KW6cVStdqqnSXhhGFvxN2NAuWd96oSGtB2cRSXeHyGBve4R9vdiGHsT1HBZG",
  "key40": "3kC8togyxN5PSo4GhV2Q9GPbFJHMGbQDv6CW8kprppsCqCKeuZy63v9Wj2Md2kpoEjMDDCs1cKjpPDGscmBA5Y7Q"
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
