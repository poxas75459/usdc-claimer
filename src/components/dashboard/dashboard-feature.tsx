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
    "3yKVYW36G6L5qXtys7ApHBKj7L28xBcpSXD4PStnxbBGcQ3hR6m68rsoAqZgQ1GWP2Wx991WpWHxtPjjc9ES7cLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34NtycmB8ZNYezn5a1P71695khax9A1FeyC3SrUwCuRAL8Y42iEqfC7rxbMKQ5XYiwVt9UxuEHqUz4zA3tVe8rG9",
  "key1": "3Su8Zzoi4DENvrCfRMYTzUHhUGhvSsyrScr2yUSLRhJu5D17Mo5v35DMJHmpWyiREHrALvWLzoa74sPQyCsazBnP",
  "key2": "3n46jtS1fANqvnY5pfdAzzSWk5Sob3cvJAoALD1Y4TLTRXsAMmQPg3LAWXmRovXqsULFTNMSSDpRhjD3hbjj83SP",
  "key3": "2NAgXXCKhbrrf4otPcwAsCdam7Hq6PYP5TjebpqHwkVEMnoeTPDFjbNyZXMfvjfNGJ8thug7TTmKkZx4HzqSiKjR",
  "key4": "4uvg8DpAg5atK6ZiT2wVeVaGSwBheQ3ye7ePwttXxjRkDdboAooiaWhNENtaAiteLStaYKKcFTTgpdQnhrvdJ4TR",
  "key5": "zKfCXWTfxGZ15yCKMhLuYWWXpou3nY82k6ESBRexXQGcY1FYYm2m8BBG6JftsQTFAG3pB2y7X4g1qq9iSp6zKtj",
  "key6": "5apum95xAAPC2Pk5fc3iuTwnee4vCbyyhTTjRDfwgBMG3XtxuWnHtDjjbwuHxDKjcedM3no7QCvsU8nWgYx5WX4q",
  "key7": "4HdwYktV32Shw3TxnJmb7n7xiK6nyV5muF1vRXErusysnJ6BcmZ478F53dhKABRiaBYJgBb8YFcYV67fnr2oKSV6",
  "key8": "5JP3NyBQ56uHPBjXJDpMCz1xQrm5H71drYXZ2tFuzx8eBzZa8MPbYHgnSXKXL1snsAbm61TNSRoMm6hJGEHpYLMX",
  "key9": "qjsWbYfdB7zXExhRNbAfWUt8CLbvPrVN3mF9gC4eCSqtynxBse1QzSimuDqX23giMbHkRjLmozxu4sfhvHUQxyR",
  "key10": "5Uxt4zmRLJjvtUZZoNdEdxBetGSAbYpbGK5SPT6mBg5h6xyQWuBP3hRRom1xRU8KGzDmj26ickFieJsGmTisEQ1Z",
  "key11": "ku1MPhHxvRd2Prj1Dxd7AhqrR1mWJGHPnBREfCM35ddYLH65WJJ7qZgw2KMifVAxJkK3WN8hpXY9JBKUXv4xrYy",
  "key12": "5McJxbUbm8EnZxE7uBdRCz6FCQytF7G8SDNWjDnE5dsaH3EmbT9bxF9bCpA2Q6fqruwThqcCQUxwk3eUVCwERq46",
  "key13": "dmntTtvGC1wpXwtDYoW9JVCc4CRmuCvecyREeXMggbxcV4o27YPcj6QWfoKHaRph5pM2VcqaeMwnevPwGyMRuqL",
  "key14": "62o7HJzMQSci8g1MDqgrwztyf8DTki2Jby2VpbYrD7Xcrwkd1WQ8AoFAV7RBT5u6UWF2sCMe43rrzqegQV6wgpJN",
  "key15": "3NkqC2AEodc4voabA2HRjNjAiZLKLphwwuDgLNeVuDBp1KgYYRvyXrA33w1N5fXVTF9ZcUYNPcjwcPerRv78cPuP",
  "key16": "5cSWG52P8JmAcmgkNGkixziLsDLV7BjW3PmDvCYKiLRnzPYAQNVcj2BCjRPwJLuzyFD2ssTM4kXiZxvmGXHBKXCd",
  "key17": "2P5nidvRkq8zDh7hPdHNyyAtYVgfdm4Vtr4ibWagi9moVBX9o3pihjSMLnr8gmXXjaR5HQ9eTEU44ZtGdgsHjd7M",
  "key18": "36Kmb4caNRnTUwCzTisCHU5iCSmQ1iWxBGuMbW2MZv35wVUgmES9zrwCgSbokEqnQuzE4uXfcMFjWsmpNTxzvU1C",
  "key19": "tGeRXYtEHfTUsSgrw884Vu44GmGtHuou2NJhtqYiZ1FMxZxsChED9xcGWkWXAsp6MBB8a69yuF2z1P1RqoEfT1L",
  "key20": "4LD2HoVuwyV4cQ97CRptmDWxqJ7NhUYoXXkmtZwViV4dnuqCdrUG6qPtsDYE6wJ7MaAEPQoJDDqVQnkvMGDUwj44",
  "key21": "3vM4sxDzbfkeV6YSjE96awjJDwwizDUCRRff96JiFBT6kjETQVjzyqtnfEViB579RoiRh5HU9VRVgdHcwdyGn4mL",
  "key22": "5tLnuw5VT7ES7sRsrxmfPySFEXNVrqmeE5AJ4rCTPMHQewSPAJCh7tVwbYnJBzwpXysRXYCoYFv3UazbFmwvcQ1B",
  "key23": "3mSk8n28Zdqm9TdFXkeSjqDTdFq55Ysxh3UmyLoQfjfckwVaWDCownXsyBE3V5KTNbH5Wvzd6ajiyHPGUHqknFek",
  "key24": "zs36hkPDjjqkMccYYKUT5woqZQa3jE32wQaXc43CRR2hkuEYNHohYZ9zWKrhuW5tXatZPZ2PSDFAvZtYHxqdqrE"
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
