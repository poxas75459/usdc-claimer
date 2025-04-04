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
    "pDhxrgbRhq1EFkXekr9mLsYtqupVdEeet86kjA1ZdmupYhgxobg6vssd9dgMt9eBQtmNZbvpzNxwiWAEWJUQDw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XLnatZPjsSYwBXQ3pANqxAAz315fy5hNHwpbGqHMXG8WPTVsUZMB66FcAoN4fQe7jtKxs8dF3zZY4rBYFDyG1zW",
  "key1": "3mw6h3zVyDQ1yHYeNJCZjwKYCfH1tYWWCVZdexbBBKj4hmsQd5qYBJhhRtAUK58JAaycTvFa8nEQgBSUNENfGZbY",
  "key2": "2kgF6qQ7UCP7rVXb9wCN2Y9V61z9uUQi69FHaPsXKy2W3iPRdmXwYLa7hfDAXFTRjk7LfmWxVHvuKEybCpZnm84",
  "key3": "348w7PBUMQhLoNyCX5JjhquNc1z29cSZdYrJxYtKJarTgkRwWVAACKTHf7yrvLmRjQnhtgujjCJrQmfbVNwVuG4k",
  "key4": "3wUMm8Nwdh2pEqe1xxfDtmxwGrAQdQGP85LPZaaUj9EwNuSyd2j9ZEVJvK6nYDSBkP4aeTvM9wvbgrbuuwH6RSD5",
  "key5": "3f4fiDWaXQLn6wc5aYirDZbVbduRJfEwHYZUUCDJiJ5gPYgG75vPXWCCm76XPhEPMEnEdw6EyZHujYMqa3crEdq1",
  "key6": "3TbmzmDkQ57vtR7BmKKn1f2znG3Zf58FB7odBCodwKLRnbztxQhEB7UuTbhamM3wLYArAv5YEDPobQh4A6mKay7b",
  "key7": "TgMj66yb2wkuv5HLyuhV9s7AifS9mu29JRmjBeETG9kFjU4mbqPTRVVtB6QCPCPLvnX2GXajsqVxM7mQ6J25Qvx",
  "key8": "4m4oVssVvfKfGKGDUwVyuYHH8A7jGobTgZpXS2LEvcvV24KW5MJ1GUx9YXfZF3ELYt6nZwXyxbZbuCC1iArZ4s3B",
  "key9": "hP78N4ETjxmXDBA9U1yvvKdtitJzj74RoD1ucjfJyuFpcCaiSjC3X3UDGj37fxs2zdDPbnVJMz64wJ53R1b2zom",
  "key10": "2UGE18VbEaL8Ca6Xxfox7LeSkksGpcz2eZM2CrCEjXpgScRwQAHhtEY4LgA9qsobYE56wBYn2GjKN6ruuujVH93x",
  "key11": "2qMZQZwVdvXZzrudA5hkwYmKmWCZYkZyrCk1Y7SNqY2jy1DAEEktUucLZpGdWx26Ttapj6V1u43ai94Pu5Lpm858",
  "key12": "3Ys56QhBSqGppiJEWgtcDMvcQ1zEBhMMSpYJXmr3fWYPnHUwqDqWVk1NXouJUFLkskKqkUGf5CpHDZZv2Th5HXg7",
  "key13": "5a1Dkd1SvPDc5zR5FWpL8Qu38kQNXxnyFSt9xRJsmYM8Ti1H5ahhAYhx7rtYu1WP2sjJ4Jgj9iVe8QCaG7qVLycM",
  "key14": "42YmZEgfU7zUKm5GLP1EvuJJHaeBB93onWqegAfcpG8FtmAbkQby2jMqCyX38JLJ9A3XbWwo9rEVDUK9X3nPFoMS",
  "key15": "4NhJ9G2Z39FX6cpri6yAaCyeXQBAn3ufN9sTMyR22S7NETxmRoeh91M4StNEiCtzQoqWRvnNosYgVD6d2B6AoPxr",
  "key16": "2FRji6vbGGLF7iD9KrJ5zkMQozBdqAyARjf2JJf6uWEggxmVmLpeyPZhynkXhtarTYhwWbFXSoVHmRqHp2kvzyFx",
  "key17": "4SNqhknFLndhrsyinEcsoKjnBRp91S4MEvsxTdPohn3Rr1VxQFHGVKfUsD5f5RnGKD1Ya7cGzvw5YDKVo6PUXwPt",
  "key18": "4r9wucSAqaRg9A7gnqWqXd3gYxaFJshqhnpoich6Hpw9CdWFK3ZYdWvbTdWy1oKBLq8T5JDGHS27LVnivyqFLrVZ",
  "key19": "2A6gNjD1oDzRhJ1kyoerkdKDwLWgfK757sqvLzsciBy3ig23Lt7re3C5MptKdzxZfFZaF7SdxKTiu2VPNJquw8fb",
  "key20": "2zN9HVnMXtnZHeGpyUFjHCQX9EgLXpH1RSHeYVNyCtWZvx2TuqRSqMEteAcqPq26CTzD5uHNZEkduUdazVyTGWgd",
  "key21": "2mNULBpzeR98A9RZ7NKPGUAYspeGXQYWeBwhQt8vvfJPyaBZCEUbkRodCj4J3F7oDhQ2ysRx9PhjwDG3PaCWMFRW",
  "key22": "3CMoWkqdRB7CNxc2L2HSgwT3osMzX67Jxk751g91U2c1qnert5KdURvHxjrsU81joBSoC4vJ1yKfP8fqPoRQuNBx",
  "key23": "2QCqvB9y1CR7CimYuyRFS3SmjofM9FTr3EmFzA7HxxcUxcT8FtiGTm8deLUbF6B77gU8qMQiC1mQnuQZFksjaP9j",
  "key24": "36QqfknQtGaaaNCcxMzChnCLNBXf1z187tc1ZKAfC1Hr63mEGNJaUgPyqu7gfSkTB7A63RGTJ1YPgn6fLVofe4pH",
  "key25": "5bwYeaqUyELktZrVRv33Udh9Bkr1GMGw9357GaLN2aBRzPvNKBygQdE1kXmGDp3SAH5eHNe9aAeviYYPUGZuyUsf",
  "key26": "2ut6RXaJfNa1MW6qBNaCCXmEBBvmCPRqS1kLB5DYJhUDLy6VfD7LTaq3L1zrvqSedGUTewNa2tZqgTeie4p5xcnc",
  "key27": "579QGVPB9UiDAu8mTsjFZECM2k7JxQiN87brhcfxvQU4DKP7TQ8f5NrvGPxD4Rsz3h2rtzPh5xokZDY4K6VvZ85X"
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
