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
    "2ujeUK429hgtu1AQ82ijo1VgkzKBcAcvFpDqZmSVWAKxAuP3npZyRentH8L5yFFh5A27faNUVdR3sJJrXvECU6Fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PpGMnGCUnKmMagkYEfX1EJpWEinLitZHv7yorfm6SWhpBxGrYyFBXkqCPzSGMLYrbyBUP2pnM3ayoQMCe3RNAhR",
  "key1": "4ZPrMZoSNj7LtwnLKYGfa3PcbAFvGhUugAsXef6BRixyDT6jqAgK3ZS35ncrKnGmkPcYBPLP129xksWRgNRifzX",
  "key2": "mAHbuX9PwPbFN5miNronuhfcEf3iEbU2eAiaXyE4awZ2ZKRAtEW5NrSJ7HEFVcAk2fJAk5ge4kJHQfSgNx2nMry",
  "key3": "56pxiAfnTEYGLT28y8hr84SoiFR9XDrgD4A9ZTKMSvVBPYPac49HK2cdB3nANHBudQcQ5ksDBsYwNRFQzExo6Cri",
  "key4": "4mx48hR2xDCnKLF1T4PX4ELEDS4ADHj2wPc7QVVaiENw6gUEWEQB25dJYSG8aqGgswifbBDFSXn26Jz2B5M3BNfi",
  "key5": "29CRZ4yirz3QPRFTUzUrnNedaQ6roFS728vDFnTU8RvfjEB4diGYJstANxa1KFZfqiVXc5RYmB2bk66tYMr8J1LR",
  "key6": "9e1qcNXF8kbQL7Tf3XYc2Z1X4VFjZcKVTHNgoCa6bjfdD3LE4wvbBr8K3FupXpRQXXKdujHwsoiUHCJkEsMgu9g",
  "key7": "3HPZDL28wHVXJGxmgkjXuGLXxxkJPaCyZAY7pQsGXES3FfcPaH3kYGyBxrBTkr4jabwRHWRG23jjtgx1wTzx4Hhf",
  "key8": "474hZhMjcpaBbUqVVr5SZ9jiNa6MQHcUhrpmFFhnjX39rQCxqRmtbEsG69wsaV2dCTHv5271esn69Gxx2mYNpZx",
  "key9": "3DtHvEUYRLivUtWUSSftaUxk8uan5DdYbxiqzBNeRRNRXSp68fGqwBVrW95pHgMR3aicD6v7nvuTscarMQjnooN",
  "key10": "5jM6ct6oio5qKaKQYqVDvm7krNQ6ZKihsRYXeLaGb54kf59N5Mym5GxaeEiqVtE8PYF1mtzxGqBE5hfwsy3hyYpr",
  "key11": "2jtPbNhwzYtuytMPhXCNqCW54XiAmSN2JbGBGBkwLRm1gebu2pi9pwiKekgLKuS3DchSYaNwQGKgYwsXaaBkYNPS",
  "key12": "5JBacsjiGq1jnWEFbN8hb6N4Zpo855tsUTkz8Qx2WM3JXNDyh4DjQ8NTMRLECsn7gKzkdnHGDBNyW8KwQkCyK6TK",
  "key13": "4hpwyFjKzmwePeHngSb1aEngKcsfVasmUh3jDobPMrgsZkt2vna4pnCRLCsN1yDDhaKru6SZH5ULh7jJ8wPVHzZD",
  "key14": "SBsEmG4VqVk8EyuJFCcmT9h5ozFNKB4tA6atmEhNp3d75U56aE6pzzaNTKendzbwciZjS19u3RKhri3bs7Ws12N",
  "key15": "v3LHR9DYH3mqQXLNDzR8tCBv4nQPQ6e6rEg4UngrEn6WpKqYC7Ph7RRwN6KBuxwy2TcBhHZ23BVwmSBGKgukHCZ",
  "key16": "5dDUW9S172gwKUS6G8RTKbnN4R3QeDPaToVRWyjqcdW52u5pTVo7wV8ovJwTFAmkqavrVoebxyanWzHFi1pWUxyE",
  "key17": "5Fzpdonbx26AbJY2gJp4PwUGKMRyBkwcmgH789dJQ3YYKgesqGd6pzHuYgBBTmMhTeUjMGzHsCAweiyXN5ErWGAY",
  "key18": "4Z9vdbrmubKq7dVGfN9tWPoQAR2zLo24VpuLZzY6mZtSAtxFdndejvJQCBSo3o1vh3Fa1Vts2X6AfpxMNsfEwp6Y",
  "key19": "5YmEA1yZKZANgCYESTLXN93RmgaFvCqj4X7XAErZxJeMLpy3AHW5EKGS2D6QA6UP6pkqXdpDE3XCgsW52jc5ViUu",
  "key20": "41bCVee9S7m96gi7jVkjRSKPzZW5d4D57sjuugyDrMZHXeibfx85pEQtiPJZtZCC652pN6MBpJu2vEfdKq9xricT",
  "key21": "27ZuLdfQEuxiXT1sHNNqrKVu6ugGfj3yUR2EEiKVcHyU4ueNCNS6F8uCWDfL42oPRkRCNWkVmaSLZ6ULr1L4JNYP",
  "key22": "BvUu3FCEuRM2Exqgj1bFx9FUc2Bg5rNSNuUsRZme3BHUjkS7cbuLpSUhZFrcZuGvEAcUTFn5XGh8e8Vyt9yqTUG",
  "key23": "46MiKdZqaWTzYE1hjLxS8AYYgU4cSsL2Bq3voW2NojxEtZ3qPjmKbGH1KoR7d5UPrZZBuqZHzE7TBG6Jqq9JHNyY",
  "key24": "3pvbtYKEZAAXMHSZjUMhGVK4ofXQ5HYERtwGCcboWSGn2jr4qjYffR2QWhT511Y4wJwfvKGnHFeKXdBqE35XVx96",
  "key25": "5156Agshau4MdaGQoWUiHLshVWb4rCKZ8W9huAK1diePGGndsCytJXczwpbhmZTkicG1c6CULX27rBfCyJ5iStpo",
  "key26": "3WsKDKq7aLtv7dPRU6h1S5pR2CDTLjgyWD3SVZQZhZa86yL6v7Z5AXK46fiAjTwgGeXCE7HTL18cDpYoi6FHhEJs",
  "key27": "r791nCn2f3zG23E78A9Qj8xYuzt62YffYAu3k2RQ9SUHxLWhF6LvYJysAP8JrUygTmxYWvX1pS9woDC98f8k8jA",
  "key28": "1cAwFoiURQgdn4B3JyfZ39yH5Nd7Frx9jYrBZBXNywFUbLtXqDjKQVEiEK5HxunvePkiFAuWFEnwKHhg8n8oBnK",
  "key29": "2qtm7UjDvxZgvafCbX4H1Uf8SaqkUsD78xfdj6tah6f3AgAivJBE8PZGvCxdMztCK6zLJbJXfDMg668HqdZK41s4",
  "key30": "3JKK8vdbR5oJsVzB6GjL48ZoejykyfaQTsPMPhd8cUQt7cePec84PZib21pQmP7vHYTucCMtb7dyf77T8JABvxkk",
  "key31": "2NEwxB9rEZCUyp8JPnvAAVTKYPpnSFepMSrMGD1UFHm7QZ2Wkoo1rQe7DNBMDfimpidU1QUassPGgm7GWezd2Jda",
  "key32": "3jmg5E29WPhmexDtfUq5L3jFFB1cbgV6fvna49itCND69DY8Wtet1o8hTgQRhLYYzaxe93SALg29eBHeTmKqrswt",
  "key33": "dse62D9KdzWDYfDF5NqTXc1uYFPq8tSfEYx92q2kNYx7n2mSEFwe2x6infK6xbuKuaKYH2pSqTgkbSsxkfhs6fd",
  "key34": "32BtQQfUibLHDKJmMXNTz5wbKnVp8iM6We6hYUVjzYbjrWHhiYHHb23BcNZ3tZg5tywScKZuqap2oRi9LtTsHXDK",
  "key35": "zgGBVPekL2G2qviTNUhcyZcQS8vn69RxebEJEeicasVsBD6sgfpz9CL3LJ6WqJDmYBCL7Ss7jwtCNSXbRDzpZj2",
  "key36": "3XPoHt1RE8bk9q12YLqAwQ6MtuyhQzz6pYAoYQ4Msgw5eVRFAqdRkLaG2DYDo5sSY2cEU4GeLBPKtzJSaCrkgDKD",
  "key37": "3Xx3j3zw2cFiR1vHYgxp4LcJHaL54cVoNH5XBXBQHJFPJVXpi4nXFjK1NDp8wcHLW342ciDs4hUGrXUmXMjbEF49",
  "key38": "3vrBATejuS8EyKCmbJrey8CCaVo68DMSuXZab8tv9yano5aEAo72QSzBScrkbHxVJW4MbCe2eRvfym26Hhq1PLCu"
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
