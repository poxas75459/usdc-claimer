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
    "4biBTVd8vGKnSNxDuKo5hpTiuTov1KjMKUXNuh3Vc42csMAicQP7cubsuC1nki1x4uSEd2nkeK97hd5aGwb2hqyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rf178jh3LahKGbSSuv8UpKNnMK7BqqcMtUZ7w61brF3jCBr71xcWhwrPajCtsjJKPYkNmazKBSBbBYmr8xDp9ww",
  "key1": "24H8LaPkCv9oRFaRyJ1aPfczqEn1di13QPPQkwfpGCn6wNB8HKEt6Acd22Edhg6kqDL4zYo6E5g9tqxYVBoNMtxQ",
  "key2": "5FcGsXDBFSNRg4cPLDshMmcBLsnHwCyzzWGygPjCWpnFGyRbqSHUVThRzLtTbKuNgxKTxTEJcM8c9B7M8cJhEpDw",
  "key3": "2DNmiUexYUA7SpJVUMqoGVKXHxKe73iuZQL9h6xicang3vvcUAq1KoE1u6PAuJtbbXei8VEpom8KzbFimzrtEhi9",
  "key4": "qpGPyMvkrKFZNWgk94tH6rXaBoYCWBxSeHGAKV1QqjsqKSEJuXNZkK6q4nYsgDmq5Z8fS5awJEUfC8ZjEDKhR1w",
  "key5": "4XDw7CMri97jtKazhUrurTy31VtF28mkmKBDJQgWJYH6kh3ASpQWcTxCfYjFrkJAi3oL69EZNwZKUv7bRA3SbkAu",
  "key6": "5JKQgpF4nL3kubL6LYYDkJWXPEFVPN1866R4v4QCPJTmTbjDznAh5jcs8otyrhjad9kNFEWcxijScVmfpZyRCFbH",
  "key7": "3shq2Fa7s8hwzH34dDJJay91g7Axn1eP7dVVMRBS1Y4qg3TmVqqb25ThfpzoYQjorEVee3jvsESrqn1838r3X1kD",
  "key8": "5PnGDpnAsuNtHPDto7mxT67cBEUDKrx3CQ5uZj1ogfk6a3QKgaJJyKQzmXNJDM3QiAfK6MoURd6qd7ikj3JYtgCc",
  "key9": "3gmR7i39LKpxMH9nmzuk3jQatrXJWE4rdgbywZMZ91yyQHQg2J5Sy7x5GWS1XkQMMRxPGzRd6XhU6UhtHvHaW4Ja",
  "key10": "4zFvNkuQMSjnAXb5Wz2motNpSz5BvbUqzEqi1CKpSJNsEGh2Xo3WtCsBQjvf6RvgFBwzGVehHdPxsBgA88s5Kzz1",
  "key11": "5qXWxVdHBX2YNqJiVELcMsfSPuAYh8mxMyF6NscR6vAnW2yiCxzxtev7dNyhUV9ViwXGHTYVe5D6xDRYg1ZLjtud",
  "key12": "4NmMUCCiL1iRQRhvRogjyTC3kWbz2KRcvSLXvbSA1Rcj2M2cFrsWXVpLumF9aw6qGrc8ARrK3wHasjPJZ7D2xxSJ",
  "key13": "64qpYPKimFMViS5Smz42j9aT4BxfgxmkcLiuYekBe3vD4X28pQQdnS4fLw2kKiYqtATEMEStZRQWgfyiLuBooHEo",
  "key14": "3Q6MTSdVZW9AZCkWqCgwcq6ESRY7x2N5fvngRJSKWuPvo9cbXkRaZoPVGLrnYqYDjyqvDiuWMCi82iRgFtPiWxX3",
  "key15": "2Qa7EJeFyzPGGtrsDc8eU3LrdRKjNjqZWqa4gHs9f8U1jgLc1jVEwofnTMZVCy1SneM2oWBurKZekFuaWLtFmCBn",
  "key16": "4zZwiCiG5ojxERUkziRhgcjWuoHqRtqDPEqxj3uoE4z9pnXCSSwz4SanLjYAiGne3VJMT8ZUe4tuwTSWG4sm6Eku",
  "key17": "iWfHCvYZc8MrFxeNcBJ8Md1VfKqJLFid2CSzDm8DaKhc1yjHS4MFdUwzHqdf765zYQhREMb2eaaV64s6PFJf5Ts",
  "key18": "5MDYZxnYTDaR5zsAyqCYyfo3qivzKaMioLZyvZ4gVrzAeTfAkMhyZdA1VyhqaZBsYEHodwH1GXmSR11Q7TyDgqM1",
  "key19": "4NzMXBL9JxkdxzsvjBfeoBEvTpiZbJwypmfDcHvVGzQwWesjbvc4imQAWQmwiN11Ff4cuu6C8XQ8Zm7ZfNu2uPKR",
  "key20": "gPzfBdKAXTrwzpMTZPgGZy2UrKrfszWfb4YXkKsCZV8JCf1xogSm8aFU825d2evEdj7JPmEx5ooVQGKLxKGbCRM",
  "key21": "2EgsqzQtX1swvzBbUtPURumLcp2LdhS9j9B4o6LCzt19TkV7PwCqYXTiDhE8mvzgLWGQXW1yJQpH7iz2LgWq5K6X",
  "key22": "3Nyza1veGYNTUaNqRTTyJcftfw85u11nTukXh9JtusfAbtvkZAd4NFNnZMEB8jRuUiAda9JMi5rJkKqNVJtJeGbw",
  "key23": "5Co3NdCZgf8VdS9azxehnxrhRxRpDJoi1XH3e4BJgfDWCnGm7yYSnFMJyhDdz5847pwcDmJywvKeX5XptBzZpre9",
  "key24": "25rHRTQUA6uWCGK486CpBamPV52rtSMEU8MjnKMsjKBTHQEiWN4dCKwdQPJWNXMZbc4A9AoZqi2EgtMTinAHGsxr"
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
