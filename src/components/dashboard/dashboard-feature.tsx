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
    "2ajDM2C7gjddFYo1K7BKsbvCsLBSoZBqjwXbo6vANWumshp9swFtwLEoyshS61fUhrYx8oU3XWbcxMmxKHVXAjmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56mwY5JXgN69LGfv8g4fDs7cHhyV9CzxcVrTDUyPNWH7Bu6fFFt5aXFrJguw46gXdR2E8KzBaE7t4M66XEfHi7gX",
  "key1": "2ENh6VcubaFEUiS8GA3ZshzJhSqydJ7M5NJUnq2GVMbMystKZXemCNeZwjNTyRJ3LddTpWQaShm7QzQuDB8pqgQd",
  "key2": "4RonEuwWSHZDeuL9nFvTuWF8Etd3k3MbBV17Znc8mxrUtvak8vDBDjH4iToXaQ8vaMYMbK5xQnwQUKqQ9Dqa9EZM",
  "key3": "1aQqdkpkKAXNUEjV5JksMvCTyLEgdyLoytK4mwAn7oayo7MaFXttTGBXw4rJjYPFfhn41nSUoizcYcHb7WR65mH",
  "key4": "RjkpAB2VgfvSPjsgKLqhFeezBtzPftCVvic5Xq2omxS31ox9KJHKnVxRUW9Txwe8isRK6AJEUYn7k6WUTm5uaZV",
  "key5": "4883hT1K24oTCpYqu8hrN4zyFAaLMhn1sY98chP6zSfHedtai5KC2CVtSZTuQLTBPDKiRT9cbkjhzaHZF3VtzimD",
  "key6": "4r1mRyDL1Xu7PqABCL3HKrf2oqhpNL625uoEtJhqbnGQZnXEH8qaASZSPv4FUYLaNSvpEUb8TCBaJ7wSPZmjmag1",
  "key7": "2pcsm3eKKnsvN7LtaZAAf6GzmVGRccmaW3wFhMMtsnryujxuxi3MoE2uuAkKyVR27P4BXdVrPMM3KR5ChA4XMTK5",
  "key8": "2CRcWfhgeqRnrK7f4WF9jFLTDJBDc3eVsMc2ofULVvHVigiXCZngG3Nrj4Tq3DRhoHsyK9eR1wrNeC1rHXf6zEz7",
  "key9": "78TodU69vVzLYCam4QpVfDAdYg45YpRmDRVEYJ4uVP5bBibyznG28rsxwtWDqJdBgze2RNRzCPLzdYETWCybeJW",
  "key10": "2pirN6irrT6nKVwozrxiQTrUQxco6mBTbLNkLcdgS9JkZ7p5zvJZqZC54t2xQTcAiHhQ5SdG1NM7K9Yu2eVmq2V7",
  "key11": "UzfZg66psDxUSLiWsEfZFx1SXECAkxTgc7TLXXWZdBKaodKsoLr6CrYTHM8e5zDAWUoxVWtPgSbmZ9Y6yuULkWf",
  "key12": "5Pkp9mmYB5vfEBdrNXge8xAbvC9HesHea6EJux95YkksWNwpygTJnesnSt6hmWA3miohQfdgAhafK7gXvEGiVPkg",
  "key13": "46gBCnGSV3d4pRCLBKhm4ceWZUVbvRd1HfUjBe5fGAXyEtnxPGZrtZjFbzgJu7S8CdEJjz8niEbSkuAhUJfAzFZE",
  "key14": "3WK5gpQX9QvbaNk9CwquZCe1mcwyPXWuGkJrKnMHs69mxzut4EaruovyuDtMfr71JZqb1YFa2PdmYNPHgw8E2Ch7",
  "key15": "SmPSR2U6E4VjBXpuHukK3zdMrjgfiuWFbPaCVyUDfVqfuLBBgzGFchPpwJcc2xRMFZKzbYgSKwLaySM7dH3fwza",
  "key16": "3eD7Km2AVbJptcpCN7WJMdAV3J9Bxa35reuenZeG5XeC1pV42H8wRxBnGe2Wynfp7yvw8vssoSd5XUvZMENwZmoD",
  "key17": "3WMsp3EYyUjARwsvJrxquGDHu3N1swauEbn8dzSy51FZVfeCvfo8zLHNcJgt22pKoM8cBvus3RxLupGdFAeeBbqp",
  "key18": "37v4rz3xAAHea7fok7WcHWcmLo16KtBXrWgbXhimysUoUuxJ3tNdZ4aHozYjugee4hqxWxaRWZnBkEruVziEkyqT",
  "key19": "9tn7pHpJ7XFg3vjCfZ3L3ACG9VwaTT4EwWAwcQHXKVrwYYcjyAUYHCsqbHnwYzgGKy7f7KjavgGeVneAevJ9ybR",
  "key20": "3ix8KD9yCR15dvTdu6D7zqdw12Fcvunn1QAv3KcKG7Sa69E9wUAztvNGt72PpGhfYoPTTJb1NeFARN2jrZnu49zw",
  "key21": "4po3KCa4vMhCm4xqSKpWFXqVmytEa3DDuX4qGoSxSjixFkLT5NFgx8D4PfgK6CcBf2As41mF5cWG3fAS1VdoHHyw",
  "key22": "3V3kZv6wsBNw3TX3NzS9nd5Qz5aYLcyzPHsiCKCLFDfBPWoj6e4SHrcpiQdDtxNieXZCTJRydr6GLszmbLs39MY1",
  "key23": "2uZRLQpLah9z6k2m6eAsgKXNyYWVDC8Kt81UpBE6ETKgpaMhTQw21gCxdo56pqAMJxjbT3rR54LQ1ZyavtPuv3L3",
  "key24": "3QEaAmbqQCQMCWaNUeHjAMrDAsqHh9mZKiydDJ9iLTb18VBeyYC8PfrAEybBJUuaa8yEA1GqqapduicCCAzERpEu",
  "key25": "5rJYUMfoNePnHfJxdTbYj8VLzTp2gbTWbWt97V7FbcVCM9rXcEFLfcsvCWsAaBYUr1VsXi7UHthZguq3Yi9JZR4v",
  "key26": "itvTBv1rT8EguyxGSxFqpDiVg1WEhAJYNGkix5ocgDuP7Gz2h6CEYPXgJPps8DPEUSMzStDyXqH4pAEdYPhPBaT",
  "key27": "5Ud24UbarYD3KiEyLEkYJDneXSWw55G3LcimaeZz1oTCc19e6gX3SwrZXsb5Bf2j28Qp18fxAWjHHcWyeQWjmyi1",
  "key28": "3Fhhi92qVRcEodcCmo3zLbV8NTBvbrWCP7DeQPjKuNiMUy2pwUqgaB8pmNB72jzd2fMcJsyudQj3NB55ML6Z79Hf",
  "key29": "doTyhdpyQSxfg2q9yRx67kK28RdJTTv3zjCP3uFhPsSkn2oSTTNWipyv6fMs6GSBRe2L9fTEYAmJG46ESUcNVx4",
  "key30": "5A8sFjKCjCnErUNFVaB6jjB6fUxNDyg8YeYBdZrPbDtNGD2eANLpiqwEDNtmbjj5YcmfngDjaTaJmPCDuC5a5mYv",
  "key31": "5JptPwkD5gNPvjRtFUYRbqPDKdofmuAHMPmQ8DLHUFCd8G7YbzSVPwUQbpVKXCNkeU11EeMbqoim6vGWzPEQxc9F",
  "key32": "hGNXY8zQLPUaDS6R2aoTHjXw5PAcRPyRKy2wBofeoFawr7BexVwxvNa59YoY9akSm9E7QWi2pj997VGSgzZeaC3",
  "key33": "5EtCpb5En7e1brZtEzrX3LZc2d7DCUQ5R8MnzHVFX88ZQu4HkhXvLJ6SmASHSvWVgU8UqeiPYj5zznceEmpimLdN",
  "key34": "49D71ubNM5Ugj3VD1uLVqecQr7dqFgesejsJwekwZERfvbtT5B9vnXmbnAPkURHFSuNFKfCkyMhyYtQs7kMqMVdk",
  "key35": "4ZHX4WV3QRzTHUwt544NPY7UwpxTmWSwi8CdNg7tgbCBHa5ox44yfSvAffyJ8hBRWmZz3MrkD67pknLJcuTMMv5i",
  "key36": "2ZJ7cBv3MLrxQ1QfZpABgoedw4mhrS2waNJq5EmXVfLKCPLRAFLPLnnpJA4ctiDAwFhbhUDFyupe5nWevYc263Tu",
  "key37": "5A3ssDnEAZKUokWLvzej4zxCfXvCsCmXQDE4EUYAAcXAJHgNqykFDADZHgzpcT4AGmEr1X5kzx1La9P8gotDi2d7",
  "key38": "2P8QM7iLuoFZaBa2dBtTfPLUgkFeJ2zcj4Hvd1dwYDYHRfF3NSG5N2awDUyMxephhWhL57m1zX55o4Cam9fQDQDs",
  "key39": "3Z3Ymm7AK7jtU6zbFL5Kap8CHKdNHerkcZNLe6DaL4NNmY7ezxMW2Qhu79sbGa915xwMDLbyjeH6d5dhsRhc4Ee8",
  "key40": "4zSfG7hYsUCcb1NeLoxRGuJ1nxw4495GLjn7D7ykcHVUzdCnAwxYPVfhqcd9oV3QHWDEKGfSAQafupmnXsDttgEJ",
  "key41": "3swi9FAUN6woRqt3yWrb6HZ5EKFoX4R9W1Mqp7CXssZXojXdXJyvyUR7sBZeWB1t6bE5c9FmS78kmamZoV5vanFo",
  "key42": "4iD7uAFEeu4RmzfuFM1rVYUN8tAfS74PPwDSHbW4JkFmS6QKoYgicF6VvgrbXThjrwGqhtDRe17BoKExGHoGhkYU",
  "key43": "48QeGodSBoDRNpkwSeieRQ9iu2YFfZq31rvWXjapkpcUE6iYLsGxhiMtxwxQ13zWu97kqqGJXeikxfE44carw1s4",
  "key44": "5RZuEWoYcT6txiGy1v2izejV7qnNiinwP3kzSbEF7E7DXQRYqwjzKS7FJ22YeSQ8uJi2cDte3PEbYw9rQQKB8vBm"
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
