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
    "5tYDErxhsD46KvD96v7Ng7WzgeMUkA8CqD6pRfpt5RBQ1kE4FKYQ5fkL6FHusC58u6Qh272YPTPxfxfTjojquwMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66NibFLmFSjwHum2orMLzkVA68KXbKSM4QnUscUbmUK2hrz4PEGNL5uXPTTjFPNTiZisrUQocSPfHgSXVuyach92",
  "key1": "3wq4UkpLHX2Av9BBGnFCGfyrVfyQTwB8gE9BCXhSpHwGgM4aMSjmPwCSWawehG84Aap25138sTSKzXHPymDLQS12",
  "key2": "MJGgrt2co7FTGrsUf6iFnMcCEYZYKG6hCKK3YWVfD4H9QzEaCL2tDLybdw9NnVqBjwpedjyLMZtBsUrHud6jmwd",
  "key3": "4ZsEWw3Lj372DCwzwzna7oJVMPKBwnCyNC5JvrQ9ceXEGWDdB9VRPuoirZ7HWZGkp9swV3ifpNkQeDsKFMHSv3tV",
  "key4": "2Mri4jL3aghyPjNevUD1yEHFgKDCYmZ5mWCE7NsZGBqMLUmJ8M5aQf2RyWVQCa5maE7wa1Gd1ZhipdBGV2skD1Sw",
  "key5": "4nCBPL7AwiHpHcWYvu2b6o6XoL9Z9uxemvt8kRtKHfWYizo9e9T6ZTMB1YdsPR8uN1hkTqHd6hkkvc1X3hDdLZRb",
  "key6": "4SLxrAs9s7S5Zn2EJSK11FUuPC9sg2yoYyAKN8LcRuRXNsYWLvqgP5AaSAGtckmkbVsebfMuy4NrBdACw9zQDmMo",
  "key7": "2vk61KsjXht54FNJHyzSg5dWbfyemt3LjKPFhdUtmxp89ZHMpxJgSF3BGmaWsNMQ6xbYwwtYAXR6XgSsaLxbKhBi",
  "key8": "4cdBUX1AMkjtMTndxnxpjVdweZfhLPWGmwP3QK9tGCtMqzUogB533kGWRFT7yoD2UqAgqaqjFRhiR7wAEKUq3a9i",
  "key9": "FTfoq6LhJheuJNA1dYbXB34gXb3HP2HJbx8DmPeHCmqvwLCvY6pTXJQU1MmdEYFhAwYiNigqkd38bXjnAEgNdhz",
  "key10": "2DRh5hQ8vMhvk2xfAXqYgSzuFSXdgsa488vaneuswVeT1S97pGHVRsG39kc6cQPzriBgfbQErQ1XbjbGxi46Aed5",
  "key11": "55fLnHmAErFcFVcQ6bbs5AQpbTVFddiYZQmPMvfdzMjWKNKcVZVuZuNo9oT3xQhsvgSbx1nNAtFWiYwxa6Yq5mSF",
  "key12": "2bXdzzJC3E2dS9iNZu2EC4mEGxJVidng1HGrTyXE5q113XZDrr7eWmMZn6RmVsJAdTT6uNerb5FX9wAqyhb6S8CD",
  "key13": "54f6oBr3RzdRfzuJMybu4PQFQ8JwsCqQ8jk2bmJTo2fddP61joZDG4yR3dxT2mdE6TEZ992MYY2wptAfpsytA3vG",
  "key14": "5stME2eYv8X5pw8vEEJdobjzv4V7vViAzhewt3Jm45RLAjJSHCfNSRs1kc7wBAPHQS7nnjEhYc7gQB5eAi36Ut7k",
  "key15": "4L4Hs1wXe9NreYWpP5oZ8BGu8Ni1V7bSbeH7usDWN9dozZuwQWY4kQSLoTjZdBCSwos5spP3yi3m9FR8WWkGtBHi",
  "key16": "5DLrV9oAvXSCyDN9BNG58E31iXbT12zSPcb73TYhppwNzpUinA8nfhyQjYqThtKyyub1HTeSroUz4ZwkFa4SkfYM",
  "key17": "31UukKLXbnpNY3gNdZLD9GmVGEh8a11FXDcVWN8LhNnf3ChuByugbAPbveiN3FBvFpXyriAghA6Ej6D9yq7KgByL",
  "key18": "21gPGCmnG1nPdzZ3WuT1uvxWw7EaK1xSyXZYMpTfehmCH4R9Wx2RkQ7mUaou6g14TvS3RuxtRvVAKe1ZXxujy7e5",
  "key19": "2atjz9GSJrP56iW6QNkru7CNpyxVCUWCt9hYfw1BVw23dydmsm5xUVKSnPpmBuKS6CndFxQhUknbksnaHrdmHLF9",
  "key20": "33tBv33KDePCyYp6wqMiQJDdRJZb1RQibnnBdzn9UAQ6wyMCqLEdE5464dXRkM1rmvmMVrSbjrEzd1w599mjaeV2",
  "key21": "3FZdRXH9B92VcDW1iWH8HPnihCX1g7fG1mZ9W9eZ3Bf975by2dVdEpAtsk4XqjxFYwAPrTV5h9eF2nc9Lb7b2YKX",
  "key22": "4pBANPW4WxYYQFuRjU5rtQ77MacKsaFFgoqPzvmrMpKJeModiWV7aaGaLAupAZVd8xeQP7wfK2MR5erEatF2Zsep",
  "key23": "5gqBRPbBu9ADpWR68irn5y1G4EQkWKfgN1NiUsunLTMyjnKdQtLnpD9UMRWhtzn3wW6ephWTVC4qKi8TQotVQhtD",
  "key24": "dAoZfz5H1ErrVdJWnLP6jBDTN2qwqkhMVnnX7VzS17yRvaVaK4nzoURfv51CHYhWvgp7d2L581KQYEHejkyR1yX"
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
