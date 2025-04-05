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
    "5AhQN2oapWZHSuB1SK73uYwTsvThs8zS4cSpp2747E8mExnmUWLjMPqP3EqaX4B8ywett8ytn7w6JhB278xzLoPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25BBFppNKKwvQcNe1P6n1dL3seRXoRPR9Wkm5KAoSt12SNgw29vzZYtyugDoikTk4Lc3NcizbsNoKa5wESjcxHap",
  "key1": "3eLBBLJJuFpyahn774KFYTWYxe75MYKYGWCuxWcwZy1dDyqyXUddryZbsUvtKpyUhfpPmwJ8WptJP2MSbNKHcpnR",
  "key2": "67TGoF3gAM8otWDUD8SZKSxsyMJuuF7kZ9ZpfDrQrKqTLJey79VqrXP5B8GWBvHQacHyoAhHD2g4Myk4bXehh7Zh",
  "key3": "43rwaG8XgCsFQ12Muh33BpGV28n7kjabc5X4vRJyrrqqagiVdT6ufU9ApfbB8vhxzeXinF8Ftfs3dcoTfoJqRCZN",
  "key4": "3pQesu8gxf6QehKyMcNSbJnD3kxhSauvRLp5M4pf6FCyKMLgcDoD6Hp8hNv64EEjBUJTihkguoUAiyYKNtjhwYkZ",
  "key5": "4hUD4naLczB1vFTfq94h3zubyrHmrR8yT7Gr2UJ52vdfi82A8ha7SPJBNrZkBSjiAfLBRfS7knHhuCWPvEdDfJ4X",
  "key6": "JP4LbwKrd1M5gzf9a38fLxYXNmpZibuHd85DGB6QchbuAofrka3VPAWHijLycPM1CJeZC8KuRWoqyNpHVH1Fm7G",
  "key7": "3Sf4oBNHwsWsc3B8kTimYGkzi7DWFmpNtEF7F6DmGhxX819cWBcynHdtu5JXFdPGULHnDc4vb5QSUnjus546zx7P",
  "key8": "5MuZNTyLsCEEh2WbG23Wyd55ERCayR5mAcTFrwTkzwLkx6apCVncb53rCCH3d2amKwj2mbdpgwfZ2hcmsJeZxJqm",
  "key9": "4oLT8sVz9F2SmMyKBS9ujT3R1uBk5AUTaZwpcvbEUM4NHGZsgNty87ztDjVEMPytHKuefSojXnfH3wyaiLBpPYNE",
  "key10": "3E7RjZhW7eAvfi1FMGVW9zcXswXWm9ZpLigmidSmbv1q6mzZtzTNpiNzRPsvcc4Ko9SpzwzSQxpvwsdo2DPpHENn",
  "key11": "5Xq1AcTcUh42pFcFL8tgpSeMa3dsvAV9VrmjunHtQg8kyp7n3hfSSVNwTfk8mt6pJXirA6uibGguW1skAErgYc18",
  "key12": "WoAERrgPmyn4SWxggzVQyNXzrqNUPcLRo9GHxFQaPuPoVaijJA7ntqnc1GexrnK5JE5c7U7miqHpBLtidDZvXBu",
  "key13": "Z5AhBHBm9t72nUiMgRLqZirivx2tBNCckkdcWuw5HtHT4YCvG39ZW3HbFU5PLhhezeyNYpQnyZwgQv5J5KwetL7",
  "key14": "2zXWgwxnJgTGt9sh1nQGJ67AJGznob18PjqdhjPy1uStuY68LhzbKgXveQzpX2Xhf71jF9K6E1o96L2BgT4LAPit",
  "key15": "izpXHmtnLcuGNabD37tbN6DAbD7MZAdRV8bC2BkeXsm89kcpaTcoBmCncQreBeBf1HNak9hn4GKwsQVACVfkKu7",
  "key16": "4iuiJoAwiATjr73b8P1qTY4p61DKfDXSb62ngDXQQcgGskRpZ91M3VmW9bihgtCN1qcYrNwYrinfRKFy3MES723w",
  "key17": "5FBAwEz4Bosp9V4rMJNzBQAG77eUY4MUbGQHn7PksSzRizZZ65r9daqBkphg4JiLeBrhU1rJ22qMdXkXonGoAUyM",
  "key18": "4PPrk6hwhijdwSb8SyZgcR8R15WAMe4A7jb8ae4ndjLzZyo3tpLfVEQ5XUosNGE31Km5k9mzdfREeQR34yGDwLKT",
  "key19": "2ZoJtS56z5csrsQN2bHXu7o6xyLeL1oaeRMSdQUSvXpSdGy2mezS6XPdAYGMmKURaX5vC9VYyGaNxmarjqjJgBAn",
  "key20": "2nYWZyUcnsmgNGLxpZHFQrhRZoUhxzpFyAq6XkZHU5kE2GEv1ACfE4UGMABxbKBXecdyG9qpBfYDgGHRUyRfrcWb",
  "key21": "468zXQrkjZSG9dFV1EKx9XP91uwEPD2nHZTASva9wfhXUNBYqUuGRKay71Y8uScppq7bimUFjm8MEc5JwprV3PUp",
  "key22": "59HKiHTjhDASzrZvKRwrSiFAUpbxnENieDZYGkxRq4qk5LMYTXGZMCduVChxwwA1LtnaScYQgQeR3naWvpMe1kLa",
  "key23": "3cMCkmfeVjR7SvQG9qTFQAo3o47aN13AjRszGq952qdpyuLy4SeL3KbuZMmdEDJwATnDDrCqsbK8hZ1LKN4sQdBS",
  "key24": "3xMr2fb3KzykS3WJruzEU8RiJecy4wQXnD9MeBy4LLcGjzQq2Gy5ViEYmX9oMnLX3vKC9G8fb4JiyfACKJQpVeJp"
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
