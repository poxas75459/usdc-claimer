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
    "2dgQ4KCJqK1TYP3qFYjgCgQnjq9UkSzCjqJgXDX9jQEFpSCLsxzj77aDBbUnWY2rVzU6vxXGXwpY6JeHc6R6CHTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sb9w8rdB4B4XnY34x5LrEg5bbYvX7Vni8ogpubCrEnKUcwe1QoCjT8NqAbVVGbEsjhgkVummQYXUY8g79Rn8C26",
  "key1": "3AEhaVL3pXXzxmWMKfA9o2pA5jHvRtAuZCfUa3ESmbZVDPRpKwwYq9WyhTqAtThhFwfjANMZN4rrgVSMeX71qV3J",
  "key2": "5p4wFLFiuhpJaq1ojc24m1gTSj33cw37LtS2XT1LzcQaKJ9NdodsrzAXPHL1GzW8dL2VLfaESo3XdSbKWLM2yKWg",
  "key3": "7AuDa78BBHQGNEY7ewL4FJQLNaVuHgwsqiM2pTLbPTht8UDtuVHrPoHJdFLn8CYN8KzsEbaBcJ5r3wXZohYmo6m",
  "key4": "3bDmshAhPyeFxvAscDqGazdjDcq6UZgDQ3ZTDRFTeQB5Yt1qoaLyhdzWP7DDaQrGZQqTYnG8x4eB6C54H6gHYpCx",
  "key5": "5YauiC5dqinsZ3YWiHvRFr4vAAi3TVEfh9V7XZyTMKsZcJ3GgdahbLdo9dS9ZGe74mX2r87TfrssjMmvii8F4xZ5",
  "key6": "37xk6L8VSDHgNKgTuLdu84dV5Ec95NVGqj55pRejcLLYatjKQCtLuwPJiBZneGpF3r4sZaP63ZJdZHZRh8JGEqR2",
  "key7": "2X7JaCJXwqKpSMzvTvf2uBS5xayjPB3kaG3CtCuqZWe7XjDkhny93bsNZaATCcYsK4bjHA5StQRNmgb42GjGVNYw",
  "key8": "4mJ5Tqf8VmoYvWqdkVJmp1yg6qRTrayf1DxEiVSSjbLp5m5hVE7uFviMxn9NwvNhD2wKk7F612B99n21qW9eGahM",
  "key9": "4yvkWuAVWguth9uMUj9NYaVwgCxnqJhMHwatWW9sd4vkh7heNMYqu1HBd3pNjf5FfyPkFf1Whem6MJnMiGDYw8sZ",
  "key10": "62kCj6rGya7ydYvwM6DyxJrJeykWmWDkFwbxu94vTDX7EGxRRqfeoXnpFe87amongwDUDZy9Kn9hTBGgjcGsUy15",
  "key11": "MR9Y2tLnifD8J32qgfo5Y4omtmXa8nLZNYG9BzcLvvwGCUxs18BmLoVuXDGybyNAc9mH5fS4xNT32En5Yo2qmjq",
  "key12": "4wrURtqXcX8eCx7CrmQWhASDasnzkJnXGZL8Av8FCs5weWa1hnnDFSXh8gP59KpZcadJHXHhKXJo2XtYdgrssYiU",
  "key13": "2yBj5BGACSFw4coWwA9ji92hDtZ8C1GKpH9DkpW7U7yhGLSRxYXtbSW7ckZ8WDV3FWR9hUJ8KQcJcyuwo4GPhCGD",
  "key14": "2SevYMN2oZKfiULRGMRy1Dz2maDD8QkNvS7JV5vgLKp2yZJdwQ1ELbD2u1zCcooTr1PkN6Fnu89C5uikyuCcA76A",
  "key15": "3UbaqwNy1jieooUNWZKgENjk1BpgqyiHH15qYJgLY7EqYWTXkwzaD6yWzKJUzQ5DwY9zybyGBJQ5s3qfTqRbLhqr",
  "key16": "4KqxnjYFwizwwc56G8FaFskxW3FrAqfFbcHwfb9ktznvvCruSybcz98T8ME3UPKVqKK1mVKDFHNQUaP3W61UWoUH",
  "key17": "NSWEM4Qs1i6PT9rbzpk4VncarSbSW8bCHqfaiwWJPFDgxQuBZ7fTnRbZqvW5PBmPBrowLkDgRP3JXSzNiFN75c1",
  "key18": "5fwR9AM2UsAGsXnJeG86mMuiyPpqbnx3hc43C3vrvcJjrUY2RhpcM71tPt5VX2R89mvi4aBdPYG6b5rGQAitv21d",
  "key19": "3AjegcW6whG3x8yFQrKEYUdMn3gcyKLCAnHtXhZFHr4WM9NB5JiCfVNkZJHKeCbWtqJ7HJxLZCvsGtpsFn1AXCez",
  "key20": "3RHtRzhzdw6avrYBVbNjwh5ZmMVsNDqEKs7BeefTAKASuGpMcH8YRf4KBVpdBK85Vx8NinULSnYUdPQQHBWXB47f",
  "key21": "2hWJr621TUWRC5wKQZkFeFFLmUAkMowKoPbg44L6w7haTGWPK4xKzUKtzLa1wx6p9GqJyMTG5uQmXSGN3DbWTTS5",
  "key22": "2tduWKScDwUEgXjSje7DAipy6FbBDptuqyphhJ9UAbNeppf8eTUzYkAAVWEHD6hRXVf5Gd7cFRVsKU99TdzZQ3yF",
  "key23": "5ysziK7b2bZXQFqSNK1mqjKJsuQCHd5sSnQnmLhPV4UfLQKP7Y7CZ6D9t2d13FcLSnMekhNmnp718hC6fh8vV2hD",
  "key24": "fc1NGeemB1VjvmvAjAtE3yUzWKYwwNrY6hdronwDgBvy5sYz3j697ixFJ1BhL1Mxs6LcjhWo4ZVe147qK8tg3E3",
  "key25": "2QNFEsnBFct2Ck4LWdkGP5eZXsY4Yp6Dfso4q4GgQ7LGimj4YQdtYmoTQ38ZYMTYArZcfxu6WTaM5fqgGaLmgEHd",
  "key26": "2zP8nvm1jf7efn9xB3C75zB112RTUVXNW1pT8S5ZvB4uCw6XX1wZtae2hxTdgCmsdqiRmLTuLCVmdzUjmPxJ5Vgn",
  "key27": "b6SYFnJWEa1HA8kf5D1EiLzGQuHpiASaw3edfGqyG7F43vxKA6AHFiY88mXgKNt7xKiSuipjbXGpyrarBMJpjT8",
  "key28": "7SS61SfSJKoT9NCLVzXPsPoqfzoCfpfmmNiv9FzbivrBYic9theBaso5vhWaj98vLZEeReaCSwcbFsMbbmJtrnt",
  "key29": "4aEYhUv5A5zNcMGRDbhNimbHJEUaV91tB7ZcXpupDgx6mPCLnbwmWUFGZcxj1usMidUtZ2QwKTa3SedC9Fgw6Un8",
  "key30": "2UzhVyZ7GJVRrPtv8EEXXeVY97QsPpmbjFaz2d8TS7fbSEracysNbQjXezxPrNXLt36k36BtCJcjr2comaPT5m8B",
  "key31": "4A261m9Jp23Bx3cSsM1tXcmY7Ff7CoUrueCKkRSMYdLrZEgXYKJd3QhkUGvixTpUNMTy1m576H1Uvv4vjvL2LVn6",
  "key32": "Ja5zGbhFdjG4pguZXWnHYxcdWbyZNg1LYMXPFvWruhtZFmT31vfE1RsDc2xEz5z588inSe2EmS1s2fGxePg2k5w",
  "key33": "3yyrTGiYkdbqDrgvYchChVXZLiFzYMzxApHbQiDrz8T1TyV6D19TAgBvSLnMXTpoyZGf1YMKxEoyGoKmhJ1w7cav",
  "key34": "h3UJzMkDVge4GkQdWrjRMYQZvthyWmLx5pF1CK2hgTZLFXfyvguhbA8g2FsXtUY12A9GwLyZD3xiNFApsF1zquE",
  "key35": "35d8C1xi6TzdnWjhWfmTnQcMGnEW452E9toRVSRMsXPKwh33Vt1YGXwhnkb8oUvjdotGBTAN66vXENwYWgbJpzii",
  "key36": "4vdxsAw8PNoXg2dRbgbbZrugFuDtJKoV2CuCbPracqqw8DTGmCnCThA913AopADD56waGBHu19pMh4Dafc8xZAAS",
  "key37": "2hv1NtcM65MxBqXxyTWVbB7Wg3c4PkwHVthsXYmTzgkQGP8hzVbYfXrhgu4ZP16vUCSKhS41NkTyj49CBcGXA1ja",
  "key38": "2s4R1fmdBAyUDnjemxpULuPoEEk2PL826AQ4ZgMPuB7MBTSizeB3Sa36th5Gmg7rra9153BWKSN5dkAYCTAiRQi9",
  "key39": "3tm2QEs9W3XZa8Pk3dEW6ie8NLxryvLjzKqv88MoJfvLFapa5UEvoXZZKiYLyT3tNtQxtTkBWHCHKVHF7xF9KHjR"
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
