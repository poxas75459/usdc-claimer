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
    "3h1ZFxWPWwyheRP2hHxrxsoBrP53esBWzckTZdx2n3RzchwXWpCMRobgvk9cn7UAXN1qm8WxC7zAkUvEp3m8Ksiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ptkSQVzugstmamPV4ThDWgNiXL18QSx5pSJy4CFe8Pd56punk12MQfUHLzEo4765XgXPk3gaBJXT1bosan6orRv",
  "key1": "4tf42gZMVjzkeJB4sFMbZemdXVLzMQ2xRCGpokZ4DsQWKswRpwU8pp4wgXwPL2jBNG5Wviz2UDrQ5pJsy4q4huXv",
  "key2": "3j3RUcaWHLRGzXhTMChuvdxxfJUtEHDjU9WHSDL23TRz9rMFyqgfcGMSrdNMds5mjgeodj899f2qpdZJguCXXkuy",
  "key3": "2XMaYExovJxQXc5iBoRPi2CoZMhozZNiLs8mab6YGAsWTzWetggCmNsZsPDoejZpvoUEF3UBfwX9JxbaVzwzK9x7",
  "key4": "4rMD8N8Covq9mTDUduUs3yUE3HmSnXq9R4qHYoCDFqLQHmoF8sSXrMaxRdzZBHgrjbPa76tz7tVtHcpjCVE9gFDy",
  "key5": "2Qb9RHpQLDvadM46SomHZ1zo9yXqEES9h47dirDcd7D5dg396KCVh4oUrUez9P4zs4ZhQfgLMhkVapcbZWcSBeNi",
  "key6": "28x1w7vWzWAmVaqnGJsabNNAwwzyHjc88sb4KGoXe3S45ENha8siktWPr5ct6bp6vkYXygagGnDPjdxyoYGyE68E",
  "key7": "z3mPo7MSdF1939HwsKq62QmTHXuSXjcJ4DFkSZgDx2dopopHnfXSHrdAHZiVHNiYbm5zaoBvyG1y718bgW7Sm6n",
  "key8": "iZfPFECZQhomx1mhKmwVkvRv9bUpMNktmeppFNVWFCGRGyveH8swdDUmHriS7tg69F4djSivjWPDLsvH6Vup1X4",
  "key9": "3wN17D5kTSULi1n2ewDfNe3GGXqJppSFr9Eo8d3oPaXZQE47VNUgM7rVDvDzxCwaDbvBKUvnRSFUHAsfBTzoAQ3P",
  "key10": "cVQMuWHVSjfBVjUji6Bj5SxK11CpdZxxLnp2szcfzwNmxGrhY4s1bdG24FyqkiauoEfhfdNXtD1zaoaTKbPnrLw",
  "key11": "3jmzu5ygDqwqfDxFhc8LhLiUAjizDHBDv33xxz7uA1cqvMtHH5iSpD711TTj8LKkdxGqgnzxXsG9NbGScWCxXQqo",
  "key12": "WczYKmozzCfCZ93KizQiLVTFLXdowwQKV6vNQVaS3BrC6BWQkBoH6kXT92TKRpuDEid9tqFJjPdqQMyAzKCL58t",
  "key13": "5X8wDGYHv9Ty6TERaeEUjfHsUzGB5K5gcqeZrxvRic6Pb7Fe8hkfyLV37bKqj58KEDrbNrEMSQuwKi8qZbxRRrj9",
  "key14": "2f92fYoqqyPPyrrwdqpDXUUAxCZbSwy6P2dMxHHHhkDZ95fAN94N7MrJnYbXZy2NSyT1ytA1Kkxqr11wYMmaTKSx",
  "key15": "3Vy2U249wfgDiUUoFREAEPyipofnci4SDQWvzpNZ7ZGPCdUQJtg8sm2dSWR1tCdA3NAyQ7PEVaURRkFheLEY91N5",
  "key16": "4vPDRfJG51tXsQhsVvSwunsHhQUW4MYm56PJv612X5fc8nGiszZezUT1zEZexFoWViZmPwFAeMuHe3upaQPVBb87",
  "key17": "5bgtA3PLyYd6SeJ73dbgS4HpgwXX9Au8p3adVuPHy7DAFPDd5QxXJySaCMeF8JcyMBEhPBRh7652Wsjyy37kABN5",
  "key18": "53sYw5KzNGNkfmvVCxMHqWcDtkDRvu4jCnVDWjgcsSkEmcbYxMEhpe2hZrBXchJ2QkW49NhMFFxAm7SsGD18571j",
  "key19": "4hFRLrXpammUj8Fq6q7ws9UfhuxeHhuGscu5Xr4dDFevpLyifCGMG2ZNb34LMfGuYo2WREFSfVYBdPKVQKWKbGwG",
  "key20": "575yA38BTQyuCmugxLMgqVungEdULqDEb9KcXE5njqohqBADaFtCw1Y67V9W4E2fqkRvpH61mYgBb8ehmXnXmc81",
  "key21": "ff6hUjUMYk1MUdSjtBLP9R1duHmRqeRhAGnc1wcF4FCCYMt9mpSSDESUZ6WP4M2wxVwyZm9xDk65pACcnrMQVUY",
  "key22": "2BcJeXEmgzxMQzP871He4a7KthYijCPfxAjzYUwVZEJrkqwB9nyS6JcvrSw8yBVU8PQFj3kwdfKjYybUZjxsH4Zy",
  "key23": "42SitADggKZfVLkNayD2WsnZjEkL79q4n6hGKQyGMJNRfZ4B8fsLVD4bjJSiqUfk9UHcResLqeBvAygjNZ2gZDFb",
  "key24": "5xDG6Q1LJT9HvxbGPgYYrUDodrfu7sdo8MtXjZV1CoFP7ZQMz1233u3anH2KyFt6RpqoPDSspznjwioVL4kSZ7DT",
  "key25": "eZaC4fnfGz3absqzn14FbS9bVbdkhexsYFXh9KmMHmUh2UuRgGGGxCSWHQMpqF3ezt51LTZ3gLCq7Gzdhko4vKw",
  "key26": "YhppJwndoWUfxZ6ZXxmEwohHKfzsAthZXE2eNDx34JrU8skK4NY3HWN65cyYBRm5Uakg6hA34C2VGrYjQ2gosEs",
  "key27": "4W7Xd17Pz8NGaKaJ1BXtqTiZmT5Jq7t2UazHxWKCwRu7ANPjFg1zKcpFiqwexg5kyKFvayYYUpk9mDE94B71vwsJ",
  "key28": "5nMQ4swbzNExqoayNTa1qvJ9AgQbZiw9CcXkWZ9jR25FQ4tMyKPvnWwEigNScvLcLxRJXpDJojpeCc7dmGV9LjMo",
  "key29": "hvZUPuvhCYrK5yqKAV2QemhiapHCakfCa9DRHuebU8h9VxEkztqWncxtQ3Xk9qYKiSGMKse1HJptTdarJAQvJhH",
  "key30": "4Lb3TrYJcJhJXddjaZNJoYA4UzxoUABsoDC4xrnp56kDULHZrR6ayYK7FdEYKE4JMbjJiuSNLXxZrjKsh1YuLpFD",
  "key31": "4UVQbirUKDyuRyGGx4SVPNojS4xnVUz83EizP8VnagMvNfR93YimuY2qmGicYmJaDNTZMqSYkdWwf9PHjz22Czvm",
  "key32": "NkKGvK6r4ER6iN44hxPLsSz37a8csXgh93TXhVPV9EDByjUaqmcEFGR6xpvdB5vxsPerZo5WM5S1Yq9N9WPH9uk",
  "key33": "2CYHBEChv4UByZkBefk4gTTLCBxTyjfpLXLXYoSC7DyPuTckG1FFvSgb65zBRuS2mAczbxF28ThaPu4NEd9ESaxf",
  "key34": "4ZyY74A1tmZ8a4V7Tumf1F3j7KiXQxEiu9YmXFGfzJUmwTGEveB9rKsdAnnf8UwuVkoPAyEunusWqLei6HMvdBKs",
  "key35": "bdWMJxH6X4MvUC1QB4LHSRrtQdK3fHTwHAAoSrsCGFA8K2nTrhoSHApkkUvFxUXKT8eXtRsJGQen17ytGLtGzQm",
  "key36": "22BTJhkGdCccphdai9G6m1BvZgRCFVaWwbRT5gYw4VCiqZiYVfL63JN5v2BDwNwiQNo4qWikLV6SCjDho7H3AaVe",
  "key37": "2eeSgqdWjwZgK4rUQ68xDQCuQsRBZz9tiqfgopvquB2k9FSD69kf7ASRUUkGeASV57wMCbZbAku9DijQdSYvQdGi",
  "key38": "5Ubn7NgtGrvKyu1CZS5RRCoAX2ggqrtzhqWTGCsToe2xmgmxsDupagkcskSEJwNicLAuF6ndD9mHGqsDdFnFUxfr"
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
