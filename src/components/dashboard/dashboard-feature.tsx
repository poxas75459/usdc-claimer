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
    "3ExprQf22QbNeQq6fzDmGRLuSJeWLKoEHajzut6giPbz24kLug4YPkzeaRyytPBRuN5AW9VsaEGgaSuDsr8AqJXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cnZpkFWrzuuSe5Jenh2VHCnN4ny6Fg2fZKQGMTrRgXYrui7adNztzRDp1GMZeex1UTFEpss31xtwoURr3t72MmR",
  "key1": "3bEQZhhKe37LmtUfbR86scYB5H64ePXv1sGckv4Zt3NjrnpbGtTzH5SQgLXUfGVmKqVYnt4pRAAekhsULCtfkobq",
  "key2": "Adrtp8w4fquhbnkU6XuzMWBfoWTnWdHjs2VGf7ZPhRSWetUix7HF3r4Dd7sPiHuw9E6Jeb1JBPvWDgewWXC2dw9",
  "key3": "67aBNe2kW9BrBDWLL5ZhQz768tx6CLT4LbeuAqtYjiB77xtjmgTeTM66WbEUjTbJjdW4Zir8FugkC5b1X3vvJkZz",
  "key4": "286hb6YC17zbmWsPi6YrNkG7h46Sv7hRtE5Bc2MAYecJ1byr8uGr324ZWiWy4by3HLgYTAhjiVqu9GAKE2JWxLGG",
  "key5": "32wHqX8cAg9L9Fj5W8uN2vvTBHGiPHKiydcWBukMm4rjBN7DftupQ1Nb57EKLq53f8qY3LEf1bR5QjK5TH93Vyxu",
  "key6": "56FKDpTcPHTaoG6VPKvGXctU315SewKAt7nHJcM8TYKsiF3MC8Gz9jAHd1rmENxF8Y99T2kR7L1UsbW9Ky6etCdL",
  "key7": "2ge7QL3rBcTASympLBb98SFA25CVv82mnbPX2eVUb7nW3dosUL5grveaBfWsvP3EcQcecWvv4z3WN9NQhW5CVKqZ",
  "key8": "3ucCRuKVvkXN5abaE1Y2F6vezUfWwuY74kjgZnnCyZQv1D5hPx9YebsFpWAoDnNzz1vSRAsM8z7FdqSfKtQargdy",
  "key9": "2XhDus3u76qdN2cBKjswvPmcZaeTjEUSo5fqXe71aL5hhjuh3q9kiaXUvBn5rGtXd86mE6uFsq8kohwWzNNBqmPu",
  "key10": "CrmfbTZ5UXpaaCqwdmKAc9Syb2F2E985bgFHrmF5nVmm1eMBkpN51yFPV9hV3p4CvvXE6UjhUxCuhnb16dGKUGy",
  "key11": "3KvPfVehACctsd6s95D11bskPEiEfCFqqpPqmAZZ8PuER2NSLxj5S6kVtbYz4387LcEf3N9BbEVZdLtdeW7qQDBb",
  "key12": "sVKtu2cvV5ZCvziToqEye4q6gAU4aQ3fpm5Ksng99EhcqPt2cm1WCEDHnyec9kCcSFs64K8kq2rsAbTRi7fyfjM",
  "key13": "2q5YoMYrippF4rrPxBWR96np4kuZZnHDCAL63eU1izHuxeaknRWTQTpmUWF4whBiW5kKmKw2RaX1P6n1CYAonzhw",
  "key14": "y6dtjcgVU8kHm5p9Uh6bNcTskgyd4rodD9wCA7nMYwYh1ZFa1XWNSgowbDwoAX15xv6ZkXmyZ6UDT8XtKdq3pDw",
  "key15": "bjvhkdcW3fSkoPQ8x71PUCffd7aWhhLMHd7wH958rmiisJf4dSX3EibURLstCGzmN8wUTHu6Nf7phZgjvFtLeSc",
  "key16": "4xwS7HAWBurNdvkc45kaBN8J6Rh1BZAYMxiBXUizpdjygnWR9A6dekBSx4f9MjXSvmJBgq26vjgraXGR2ZqA1Ya",
  "key17": "2UixrQhQmDFpeKs4xLCgbR2kevMWEaiLZAppYaijJCnWDr5xq6Nho4b8CgKtYWbWap9aUDaY9JdEdTuunUpM7DgY",
  "key18": "5TaJo67NxKA8jwS4DYKHoSi211sV1QHDvytdbtBbhAfZHJCnJNV9h1Et16gHF9stkVg1kxatzBRVxh2kDkSaXx3z",
  "key19": "3iPn1sBEWKHwazWRauSgY69Dfo2tpQpiX8B2EVnYXemB3QrEH2Xyp93SLPj5juRw1fsvxxBAPyHjkbmVvHCqH3rV",
  "key20": "ucqNhiKMwQeCJpAkn8EBpya6EXWYtEMRRW6YcHuU71AETSPoqTzHuzonzJkrDgTea57RsMVSrvZjndjhshBdcyp",
  "key21": "N69n4ULNM41C1Hv4rsfLFnngYE2ZFN7gBKo35VR9XL1NDMP2i9MvJ7Td9ugjDQu3ioTbQHz81uXs9m5hY6VkfK5",
  "key22": "2Gmka9VE9U9dqEbtsJqtJwcE9BrQit84gSRNqvPE5aZbhKkzoT51xu3rEsZr5kHGoD2FzUezpX2oRy8mFAB65PEF",
  "key23": "4VuSihiMnmz7po2FpUwtNm7Lh1tY6nzhA3UAUtRVRUqQpL5PMZ7vum7obKbK1kZuJ1FpruoruFvviffsesPZkiFg",
  "key24": "5ggN5EvSbBAnB7FgAN7ta1oRJHpELSkQBNrxntXQumAkNZuocdStBK83zBP8JUSKCy77yhXrLbKetXfFigrGyD2u",
  "key25": "3hVYkeJv6d7Zb4uQSkD3AMaoLjk2qS4WJ3CD95vHEYaR1kFzP6ybbGpQSMunTgXEAddjAbCBxvq72vK1fRXWdhLX",
  "key26": "TtfDusLJbKGAtYU9QnfzNEjkvPytNYnRHSvbuph4uTUJUtjXNswXCr1pviThJgMJAxoSQ7t8tfU9yKjAWtteUKf",
  "key27": "2jVA2FEH5v1SimAnEenQb6MEYUX5f5QjX7uWEHZKoBtHYHn93LDNDRLYYVi5KaxASJ5SYjWubDSsh3bKxxygfQgp",
  "key28": "2CvsvdL3xpavfvRwubEJFzKQLCw1hkvTedGFfMbP1xBiQsbBcfocktcgSNZ8Uqx8XWQ5VC28BuyVvCWVUHKYwFSu",
  "key29": "wpL1BfoFU6sV3MwUcRRWF8rNumahYhPwDhe5BhfR53BefugvFrZim9rCa2kjn2T5Mqo6yfe5MsWkbPC7b2TbBnn"
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
