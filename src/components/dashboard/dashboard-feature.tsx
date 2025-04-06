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
    "4Byy8BBd5nEe3SMMXvqHe5eZDfxDfiShXaAdhxemiN54rDLT1o3VgXjkrXFCYuFSQ5vfdcXTpB5q4eNsFLhvFCzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3srDRmKFNfiMEUaDgzpQMPdmC3udmcxZYbHREAsM48J1Xhk6Kz4vSaPtWPT7TufE92bAM5TQ7f8kRnvEr3d3z4FQ",
  "key1": "28UfzGxtZ9fBdoUREjKMXiwGEFzfv4vCPsa2B4N4hNFMPF9Czkp3i36XMDi6329Y5mr9fiE3EpcfkjYCjkGKJt1t",
  "key2": "4Mdtd9F7EVW1TwLz8iNDRBbw4cDU3GhCSWTYu3Es3WXMNkCPMttxTC7iauFNWHbYZphhnqVR7yqiJE2Q3FJhk8YJ",
  "key3": "4jviRPcyPnekcGYudCgFVmh5VrnnTcvWvWQWwPweVXDPKoBUw4xATfn1ZKRDCpni2Y645ePX68eHVkBUCfADygHs",
  "key4": "3PeExEmx1cjqCAA7UZv8ZKUiPgnvJrvucjuYQSvCm6mZ5dXUG2C51Bxr5rR7HK1gaYXfFrLw2vyYRiwkp3GfKf5B",
  "key5": "2LgNtb7KUPCURQ6xy9aKxVzedxtkzU9eFh8SZPqJhZFtvSvDcy89D439i4BBZa37DXgFp7XpddMi9WTKvtT4mWbH",
  "key6": "5wqsgnJFruHqToXB5difAHT7YSyDBDpDYq9Uc8KY5Xwy2NbsfqtEtAgukN4VLWYNZpNgc3fVCXCXtUU9a1epJaQr",
  "key7": "5epP3wx8PEhJkHHL1BdEpkYrxjMv6mmxJggr71qCSfF9dgH56bAeLJhDMiUQKCZPbyH4oFsnB17f1LMSBM1ozL3D",
  "key8": "2gztFBpBXjCu5fkHnQUxFkZR8pKcJNWs71GCZJvPm9QiAMSKzoSJHEuJHmvANMqzqPxfeEZaR3ZxvedYWkgNeZUS",
  "key9": "3uY2KG2ghDuQM8DUmfVArofFoghYNVJGYqRVyfUYAXBqrW2kvj3MS61dnJ74Xyj56CsbT5uZedgzBVbSMPAuu7tH",
  "key10": "2YdqDRZUVeWq3E4fWfoST4KoDwbZeHPLTvuL9GTnMUThnLMpDb9gJvmqZaVRnkNs4aaf9Z3AUDsnnchR1V2rKf9j",
  "key11": "4684mV1JtkzKtG1SrrnHyV3p3ffMT4BHJ31JTKPHfYsU4mNbBoNuLzCd3Aruc724GiwBkW5uttnY9jPk7e9Qnjb9",
  "key12": "4bFW1f8R3qMvBUSDK9k8D28M15TW1fZUPamgowk3ShGhiWEre3gwuw2V9RwagFdRfCqcS6mFhz8jZKv59DCN2Vxk",
  "key13": "SNptyyuFcjJ5rK6SkFrsgSuZeMSmeFM2SrGWQdhrx4Vcg6ryhCRhUkfgdGkgWWeQhQjUH43fBvYfBHvJJYts3pv",
  "key14": "5yjBkGXfxSsk9LVpPHSXDDxSTJ2JmgEfjZdZSRTJUV9mKrxE6dCsEJFA9p3YZHFUSM9w8GehuE9JAvwfg8pLSZ3A",
  "key15": "LXWgbmu5kbkXGwDAXuA9n5N6MsrK1mxDEJnqNw3M4DSYtPMt8qvjQEqGTCeT6cQmymCpKUUVZQuvJA4x1EgahJx",
  "key16": "2khQDY8psJwSU7YaxT5vKEAK7MT9wfcbTVbGfBWz6Rt2Ffk7j5JqpR515FsVM2FjpWcTp1ZSCJqvRji3mZZpaQjX",
  "key17": "5w3yDLoNrCSC1HBt2c4ER6vH8AYwAuTLVnsj39qEwT9ki9w8pELKtpdTkd8L3mWGeHPKiW67Q68uZRcuqfV2kg4k",
  "key18": "32DiJRgi2qRLzaNrb5jLoieREERJJ9yWsRZsBqs4fge6xX9eaqcr73ZtZoXhJvPEoxUoZoa3BXb1sjLkp67gCegX",
  "key19": "3ZcFtuq2TFn73zS327hivGo2YY4Kq4QgWgFSEZU214DTV5sBFsk35CjpYuunxvSwWoPYHXekCUGSwvRKD5cEuX49",
  "key20": "3WDem2rnFF9stQyrL5EopKcBA7YV6YfbLYsEaFWU69LicqdCnmok5SVuJ15739gXeumo1Veir5p44hpsLaKxZxJB",
  "key21": "jCuRUnL1vdarzErypztdiG3R7KwJNBXBr3xVy4uFLmsrBz3LaJA4Grsrcd2paiPB2pr4wEzau7KQ5aha6TpUdYw",
  "key22": "26fAQADJadM5xLvcV476dUtxrkxBsfaXCRV89czQ3ErdjFcm8dBDughmzFpWUtf9XHsAT8FoVUzmPNJpo6Hr1VG2",
  "key23": "xnAiWY3tYLzuJePGvDawLvte4M1vtWxdjJM7f9pipEEBCf5WemQ7mAskMCdB37F5GLhWwUHPh3N2a6S7vFVyTwV",
  "key24": "48n5vVkzxTNgz6ZMPxg8oHJBket3QGAnUgU3kUmJUbmwzQ2raJFigdzkqzsm3v2qRg75TpWahs6X6kaxN8oNTkXV",
  "key25": "abpevqqrFaKMsbLcN4dfEn3CevQfVTpeGwuQQQ9LXC7Q49mWVBtunGFtJ8eyQwdGJeQKN15u151p2XqGHAMJGZz",
  "key26": "3Tc93ws7F5XhyuXXdueeHQA5qv2jqn8VmQMdQJz5gCwJBqdVscF5WmNpRbh23TPusxrUQoRpiuekQQeNuXrVpKrE",
  "key27": "4osHrJwrSYfYe8s6nMBWMZdcB3o633MjJMKjuMZ5SmyNEMLDvW1yae8sH4iMeNn4gM26bjuN4CCygBqHBjrZ4NR5",
  "key28": "33C5oHtWNfoBePEJXGAFJN69KimFK9R6sLdUj35FijGXUXq642ydpuwZ5xQiBna64LFXjV5bCgCpb7FJo6BtaD8B",
  "key29": "5JaacRUK6XWS5hddRHYgL93wze3krBJtpBFHZMjsRx6omeXsvC7grsUjy1WQ7jztC3enafw3zp4B4wsvzFGEmLb5",
  "key30": "2TSRUGtxrKGBUMqtG8JZTGdLN2Dfdpxbe9CSv2gjNmDi26jF6FxEeh9T7jkuXHbdkRnnvDiDhqBghK4K7sFaRw4o",
  "key31": "3MQ3NVyQHMxpPoVPTQbYGPpe8GV7AWwjEeLNPHqmV7PmVDZJdWq5CWbqwUXyJ4mvTtQj7GK3tc4oypia4kWVRErt",
  "key32": "4EY7hGwu7iihQpKSFeRbnnjDeESGFMLHyFuLoQngedNmo3nVKmJh189hrBiqmVrRfeVSHjYBR8ChioqKjqPgPu6J",
  "key33": "ytE1Uuaej7FMajKh3JbF4C8MRnDtfW7eHkyFjP4GLPYkGZ4m3n6Q4hVLtikWuhrNJ8yt7tyzY9s4fMgA9qBJ82P",
  "key34": "LjUPUdmFxNCJbo3qnx81mkA8LLM6L6KDSaSiGiq742pCMZ1KmjiqiZwcKXy9tSZeySxdTmpH1nHGRh6A2ZtzKDQ",
  "key35": "5oGjvKf4p1vcuS3thDLcLEBXyHVm7EztTz2q48FwQTuXUh7tWZVV8T6GuGCtZmhpSZcTRAicpV8caeQ3NKpJ2Pt4",
  "key36": "56PXBk3XPTWrCJfTewjmvzZdyHTCwfXpZQHxh96dcFkwzRjWUFzj3eNvF5ZC8CfA9kchEtfKSSRxRFoEpizMmQev",
  "key37": "5cCTGJ9dkG1NHvXmsjAXfMi1cZBhpWZqtBQhfZ9N6iwT7MwXdeEdSMCcaQfe8Ak4MuMcDZxjjEjKfhjX1waLEYo8",
  "key38": "3Lf4BSju3upRLLbdsVSRYmRGqmjQSaY92CfdFctZ8bwQ25oGRJbjbPT2fpNZVz5LERjD7Mu294e9aK8HWiyJyXcr",
  "key39": "3fSfwyGgEyPy42wu5PZqvcxVrgo2ZQo8yKxX9Wt2oxwPaGDWPbEhdR33Yu6zxSu9x26ztytgAufsJej1XoYLFWWM",
  "key40": "4LMp4NeoMHyrYj3kEdb2otZm29cfJneep8sT7dTR8U2GBWAypAbjBfnVeDhBiABYRjUSkAAhVdNYFKSecYqQi4ZY",
  "key41": "3XsoHYwrjyg51oReRwbBCfpoyhxdGBUSUCCgu9NBKifj8LJvqkQmkaAci61F7E7ksMQDqL21bxFPUqzGDQyknJZt"
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
