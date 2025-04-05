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
    "4abyABXvmF79xLerPmibuZzEih739ANvcBXPhc1EVPUUdu5QsgcZ2UqB6Ue9eW8WJkBiVSgDHwV2kTheQsdhkjSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f8BDvLwgwbv8B8iAy7Kbxzg5M8pVXgSC75FjsCGuAgV4RZT3o6iJXQyAk5tjd3CYsQSNUYYWPigbjNQSU9sQVZf",
  "key1": "4NK3WEpBCjCDLMP3RDFjNEm9VWtmSqe8gd3rGfjX1GsxkrtWr7qc9MeLbZBqYe4qTGw4vUp8R95QBJG8gwB3Hbin",
  "key2": "k477xiMzmLkkkPtduwfkyHAVarD4BsMHGxbivpwXu54BkkiPBBm7Tr2YAvAPhwvHc8mkWWLksZdbWX2NeQFBVSQ",
  "key3": "3y7PQExEBAHsNJCwSZG44sBpDTNFYjX5tMt3chcevqJKf12CzyZHjx1mudXAJYp9Rk2jYSQr22iQit6L1S9LFEnu",
  "key4": "5jUd4fAPV9MnTSTUYRZqcJrzDgGHyygm4PEd7dLW3349WoyCwGBcKwvtiPeMiRBZgxw8H32Xi3MDnzpovbDkLi7h",
  "key5": "2Rkxj4m7o9SsSrhFi9pYkbo9N8gmCngkWdFG2hGZKD8uS7Rh5BNNtE7u6sVpHukK7LEKjPFYrbNSuDd4GW9myj1x",
  "key6": "3thb5XQwqPUQUMnrR1Kjx4i5Nvgj5osxF8rVQ5ZSZoMt7DPdetAJ9CFoNfResdRmLZtJQaEWLbPeuWQce3K2xgq5",
  "key7": "2e2nADk6pgnwo178q8voSXvd6B3D5Q9CxjGc2hqUK5QHot6RsuZjYhXw1LVSuAvr6JcRFbe41pusXNPJYjJmX5WJ",
  "key8": "41nnZfpgbTifstmQRLEJwwhjpdCUcLGmTbrX4RycogGTX6H3tBuFouJn9mmbfSwivwqoPoYfVXqDAVQeGXSeyUz1",
  "key9": "5pR5R2P3Pe4ih3Y4iEX5tToM6dswx1eL11XinQ41J4ak6PEEgXhJKWgaRTK5Gwr1YfgAR4GtbzFgodnNTSvrhT8B",
  "key10": "2imavVA9CLtLp4TGj9ydnRxh6uWNd2kTooY18T6rbTe1ZD6uDPafidCpyt2hpEsj1bEQSd436JtTAh1vYyUzQpsR",
  "key11": "3ygcojAw2zT5s74SFCakKp7vrc52WF5NSWmLuaBQvuaRrmUxpKcVhJwWwHQK3D6XV6ForTp3SGg6rBKZ64ZTx499",
  "key12": "4MD44pPYde1GUBZ1aCMfTa89RgnhWhYQdrTe7yFXx5uCuQWzteaiz7erS3cwYcwJwPGFbEwpZ43Gu5TKjnax2jxK",
  "key13": "4kNZvHFsGtMZZfJacuJKVvo164nsD5cHx8rJ9jJjwc4Sw47LAPRJ7cPTM6aEdrrHcwrLikbVyaVZxroCcspvFj8x",
  "key14": "5bm9TBbpp5GjMD3jjiMfR23oGatzk221oB254cxEkEZTrmL5Ga2LDcT73RV6zhymX53z9hhxdhcTfPRkwxseMqjk",
  "key15": "3apLxBfQ6wKUoQdEe2tbSxxax8T5o3j8n9ZiKADVV2qDsTJzpcqXFSsLFAvZzf7bFWuPdo4oaSj4uvbriQaZR2Ci",
  "key16": "58dMzpJWRJubacrR5dwFbKbXB2k9jdHJWimW8FZbaN3euhgvJZ8eoKxPpbvqJXxmx7ZHRB9VJzmD2eaH9L5WK7a7",
  "key17": "4ECdqHsnLTbpxjJyEXLqmpYEjExRC9LFWLuxaqckjBpZ62ugG3DG4kBZD4A7qirLFaJGwFZhAnM92ZBqFtAKCfm",
  "key18": "4CpeMHCJLVxNBURduUhY75pbMhsyGgLAeXg6g4VR32p1fqFYF7oA3ihGeHWzbJ5yJpoZZiX4qHgHXukiyMgfgHDw",
  "key19": "2Mv3cfRM2PbshQJ6ZRcuU63JLNWXFJNSUbY5zjrQwqDe34x4T3HVrvwzrr6SwrnNe6otb8YkdA2vzUhQ9MryUUjo",
  "key20": "2oZ7WEUwsNT2yjfFeT2YpQELBeDzuktCK7RafTpVjykVCiuvNua1QnHyTABUUyxypa943QtVUyi7nq1wFpYMGzm4",
  "key21": "24geJ9P3e4yYaPouPfjynDLyesqu6cefP7P6pzEy1qVy8C1kNw6RRWfadE8Chktrn3K8hPSMcQocBjPw23Yimmca",
  "key22": "5Lo2JQZcPbdsBx6s4Ew2zchrP2NK4B3sCsUEt5EsKEX6bHUS8CpFGLT6DPo6yiLCpwK91ZNzGC1ZhmX3spCggRby",
  "key23": "4qgr96dTmgsxZR218dKSaJTuiLXPntbFEMyJTx1XR834MKJyiXmc4UTaia2s4sNd6enAjHhiF6jPPYPifRo7nWN8",
  "key24": "3QgzoaZjyoJiiWJ2SNS6DF9X8Ja9wfNqkry3AGci47sbKjc6tMER425hDpiwEfuz1wV9n1x7pokPab5atm1juJsV",
  "key25": "5crEBkyfumMkSh186LrSQtyhJ1CSwVZZdeURz3veodD2UDUj2vtmyMpmJ5iJ84oUtoi6KofhbZSQARGrXgagNesR",
  "key26": "3hmqJDYLJx7T6eoBmF1WdWtGa3JBpnb9VqtjusYKpHBWxbsAjsgBN2myW5Fvot1n8a9GEZNBx18uJLAAUd2EfkAT"
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
