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
    "5iuVaUYsHVBNoiZxdVRZEckTJ2Hi8kfmEDv2phLWnmNzvE5gFXNpanr5R7BnbMa1WweGcuauqf78tynfzzDKCygF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kUHvynp7kMaMTqRrs2DxHeYiMqd8iuZHyg4D2jMRGmgJuhqagF9iLZumCV558RVx8pk6Lw2mo99NSTBzTW7hF7F",
  "key1": "3DUz7iBs9Jwz43kU6VVzDcFqNhhhkrYYmkexWdA6kaRCtsmYXwzQB9eRFkCtCRRCmBkFL9XqLMqH2H1xw3GBG7JN",
  "key2": "3uWibt3XNbd9wnzXvExt3h5tXfsF4dm9eXEJCGAghEKQ6ME9fZatfAGY55JvLBrZTynTR8T26D1kaWi7ZtnrgZ31",
  "key3": "4Rad1o6hzKcNPe6YNgMTf741VLziDHWrRuQfmT7yasEEgpCMHrJCUFgc6e5sZJnWDMfCnYMFeEW2naDVCYZNDWfN",
  "key4": "3TXi3N8ch4g9vVpTDzrVsdxdAA55XkRkz6evE533qxyTJywHktwAAUqLt4foKwTwWoVFAxN7uaYrC6HZb4dJ9tim",
  "key5": "2Ywnk3Gi6WfDyA27ZdDJU7ZZAv8Ya29MdeD9CUTZ7EwRwo2FDSCNvXDey94Gsrdx8aSBYNzoVwdhf6VucVJMdkSE",
  "key6": "23Z7z7Pd282F9Vb9WAAcdiCHAraKDfGF379UuMsm3mBPs5v5NTG8XJAvRc4kwUxbLur7gUMaUnu9CP14tEqhTZjK",
  "key7": "3AY5JbcqQ8uS1ZYFDtENrSryhv3s9yEpKKqeQXjEkPrivWjWStDZoLenaVKkfJChXNeRfZKWxkCgUBPfHaTgBdhc",
  "key8": "C4L12dVjN9dS5pDPH7dwZAjea9TGLmkH3EXdU9kuWnxzBkud48qLvppEXKu9RrY124uiM65k9MUuPkjWeuxwniy",
  "key9": "BUGsQ7oA5QXPName28Tmwu5H3nKHW1b4PizhyZX9Kd8n9jBq9QVYs2fq3X3NKbAikTpg3YzgyHBjqvRmQLaTmCD",
  "key10": "EXuWX9fB8PDy9QmJFfHK6TE6QfhT8gH98roc2dFAv7HPTaqwxarfNnMYdmX5oqYWPsoC123GmCNz1MQMZJuV2Rj",
  "key11": "2NLGgziTtaeqX4cEtL2FtLrJ8q8obcHipGvdqydcGJGM7CoGny5WAX3kZgWSXDrjsVjZL2DXVyXyXSkotjkJzYAS",
  "key12": "5hdKEKgeGgbg7n9CWNueLAu9Af9Y1i3qNQ8JbAg55bR87UHqKAVfssTSqH6sP4ykcvjMrQ6AzW8M3eNgYSdHkEKj",
  "key13": "2W9ZLqNSwBQJaR7NiwTsuzBfXyqcsLUH54Z5jRnsmUFjgdxTDd4GFTrXrcJ5yWH8DKy6Cyuj4S4YANqatUdVRA6",
  "key14": "3eWqvyUDqhi5yhsAAtH4bycQk7KD4tj4BTFt3P4cawq9gkjfdiQju5jkB8v4dTU4oicXk71ZrjgYoxy7MYAGp4xB",
  "key15": "36fNxfwWSbdHoCoa5BDLqRLxFbfgHjqr6sudSHZaz88ZDoY3RVqMVukeNXX4NCjb5VhjXNtCRMSJQoVDZSZRryxT",
  "key16": "5XqVVuAe5QLXjpSy1GaNtPwZxU3jxVRAebiohrUAHndnDa6tN7dRRTmGzY1e2zCXBB5Ff9pjB5CeDHguMsCJ4VXE",
  "key17": "5mFRFokPgrNtnkqeep9UCz3AUpgF4eAAf42dD8soQoLfN5dTSRNeJtbq9J3rhoNjEY5W2WfP7gaSGx1cm3iAGDsF",
  "key18": "2PNSXwXt3TxkaAAmarpbXDFZPYjLvnzd3cooTY4uufra5AJ9JUcpgYVvspZgruek9nCFbztGkBvE5LWMzd93jAhz",
  "key19": "5RSxgZNM8bKU67TLMiY1UFsJtfWxxHUwSyYMEon9fqrkYtweRyBbyPyFxpTeZMthcabQ4rLcQ67KnNNjdbjR9AxB",
  "key20": "3j8a4DQ9XofBjsDXDizWHCqcnj5KmdTzsRmxnN9uBuEBEyjirDPgKNnEQPNCejrUBpfK5znPnS7MG9oJEfAkc9qC",
  "key21": "pdzyCECFXfPQtNRjbaEaL2QwqVEQ4zuZjUBNokydvNKz3Z99XLaPDEzvdDxQ6xPLQacSzgZSrvbu2batLTy7Q4X",
  "key22": "361idd2vnwudNWeX87DekmrmFnd9pXiuwV2ZT3CXHcD18h1fGrwHkt6vAhx2wsmqYPQYfsWYQ5o6G8UBUWyLTywv",
  "key23": "63pAjTbFUyi9CaSixFp8V7ioJQ9arYjG23RzNsYu8y4RtJv1ZimxmXZiDeQbZqhFen2fQ2HDEjiBeK1J4ANw2Shy",
  "key24": "43NuArPtApCa8v2CxiBCTK4paMZDMcitnsf8ANZgUAJfnZgzhVq5BRLSRR5rMQqnjF7FDtVevBcnw8R3cqGWu3jM",
  "key25": "5skktT5rSSVi4VEHMqFxE8zYopXBRhoBN9Qqv6Yo9z7pfUjSZAC8sibGBeYw1mNn5gbiVVc5Q2KtXt7u8nWj3ny3",
  "key26": "4Tqh15gXygnUq9HdCysCMkspZkF6bRRBw1d36qh2cRTDFnJisgHWu9JHzoE4GTxrC6TSM33UEGcpkWygEUViTNy1",
  "key27": "3ZL7Nz5dfLSXQPuM2fUjQZfF7oCu372NQzeiWqg7wZ9cZrkuCnAsh5vUK7UF9GUAfmWF116BgECJ7KmnxdvJqBBK",
  "key28": "5eVvzUQ8C8smXajmUinH187HCtiyns2C2vHCYHroyu7JdjV9wMcwjCHp4VRmPrT3GBoXr1JHTbCCajWymJ4hge7t",
  "key29": "vBVSLK1qnazCkVc7ZGSfVakie9tB77MJDA9wBDqkcx4zw1LxEWZ1cFKmdaQWi76u6tY2YB4TxHwH3deFg4NwHLB"
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
