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
    "3JChb4LXZmC7xfZ4TceK14NkCFw5hCUDJXE6soLhPp1fqrwSEa7Vm2PovpKi4UcL5ebRAdwPbLCWQBuLTJa67YVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ldq54PSNJQBAcpGFH1xvtXyYpmaZsFmcrUDHJcVpjZCT3BRtBZ3euC7LZWebeZmLbM2GtSJ52u5PME8JT5soWng",
  "key1": "h6uLEmVicVbPV9WjoC33SXPiNgwL8XWp9eT6vcV1zgCDdNKgNbmoSZpTAf2SCchhdrJxcZp9mCfPMVA37ux5mCt",
  "key2": "2Y2oLxJdK4aA8VxzrwB5dBDB7nDY1xFHfu1bti1ytXd1FFeBgQ5oD5JFnbR5VqVcWduXakd4sZekPPJeXTCX4AdJ",
  "key3": "3sNRrCDWmpvvXjvsnS7s4ToLwkRYgG4CS1nczsqyUNhN611PFjir3Cw6QBAVN2iy42KUZRMSN6N3Tuszt783cNHb",
  "key4": "5am1xSGtswF26egdm5UazNoWQz63oz5wL6cE16vcmRctS4LDY1g44ft9jki6imhTQf1VpkQe6u7dHkMvgTfrK4Sy",
  "key5": "55AR8pjf4BFeL9LpnvPxLPriZhfRPoopvLwWLQUwAfQK1Cuu5pkCtyLJrnAp8sFL31wxoxKix6BW1rjUqRnKKiCm",
  "key6": "uPTEu8F2ULhFqi9YtDzmrj2E7gxu5CRrzFqq2WxW6n2BVRbQSMhyknnqrHDN3Nrc6kRw6TrEzaR3PC3qThiykZJ",
  "key7": "3LfmtEr7t6Qs7xNznFaVYrGyqZnyWfxKr7YFEUXPWikJmTtofwHGpVAZcoNDi54A3p76dAeE7rQaQFfyeEyNJDFv",
  "key8": "45qiboeQPv3syyvoaRR5RBbFL8MGUUTz8CH8WeaiaB7NtMLA5wwWsKj87Az91mMC9zJt2uyxmPDT7FDE6FadQ6pR",
  "key9": "3Hu7TN522ge3T8syMnJM4xww3o9bKA7XtMs7WsAA83h2iwnXFuZBaaxiXPgNGVhd9aHTLeoLgQvCy8VKHgzVYdgR",
  "key10": "2ovvU592c2dgLE472wius1A4cMu9vAc78Bvd1hweX8fX8UnT4wKooj6furiJN1Y5S7znSxpBG4G1BXAMBvXLn9Vf",
  "key11": "5X8jdxQLWkFH6bxW7YQqidKGYJEZmsw6qnrVdQr7zszrRXeBNZiFNnFwG8zSAUqSMQLxSJSz2j8KyykgDgPK9Zzi",
  "key12": "4aQW1er9pguJho2Ea6TrWSdMVqxLUhjDTYgYjeUwU67wRsKwzSybNUvsYe1FWbUESgcJaKAfbqYpP1AiCohU3JZv",
  "key13": "5ziJkGy7bhYMZm6wrCQJ1iEKK17ffBnEJT836FEydGHw43Ktv3UHgZ5Z6Q3iEAFEHT6nLFXjKT7Q14vwV1MbXLog",
  "key14": "5Drd85EnMvXzhPdbnvFcG14p7wR9wkGUmpaferuJ8zvPT93Ve1MTUXLZ9jkJLufrPZLsoDtHzoAhQppAiz6kGAxW",
  "key15": "28SZ2LEjvgo8keGzRVhrGTwgTfaNuZm19FaNCBSdcgzjzEPUSnbePnXZz9Zu6iPjun7ZsTdQ1LiniwM468FtBHSG",
  "key16": "318gfivLmL3rSsfgT3EEcPxC9qAsN4WW7zq7io8xEC8KH3ShiPpWdTgBLMwhRUxWToPMCqR4Kx8tTL6ZH68jys6d",
  "key17": "2Lpe3i9eVT5dJWypBhiDNZcP77atKDbrhEo66PBfGwJuMgBurvCihVGbLvXK43pcTkmiFN8SHQBpJZ7edyK6GFf",
  "key18": "2s2FzHeHpE8gdzCGsFeoZaKbtBRoFLZh8gTGSKwZXZCFpGw4PSSSbHdu8kq7qfKtX7fBiut2mfX7ifcbPofQ1pts",
  "key19": "uoPQb5F9sSiCaURUv57BJsjg6oMnQS1JNZ8WxJxWgvL596bz6dWy734qpzADyvvjsgQEwEzdB5FGkm2fEwZjTcf",
  "key20": "4kHrC1WXPZrYCfjn9dLeX1Ek3NvSgBz7381gcDLoHtDewmJWo3YWtsve7MyGCz4vbr7zWs6j9aoWgnCPRPD4cfjC",
  "key21": "39fqRzSk73gUQ5xZWS4ktBmWwb8Z4gTDwoAAcqXa5rLbANymPL2SDKzBhXyf5qLnRNGgM9sn83nNHM5JfScAFjci",
  "key22": "xdG7kXxvPL74ESxYfk9YRbqPUqDacJUd8wGA3dD6MZcXPd8XHg3jUiUCZAUsAB6VNyCaUfSpFqsjh8JJUNEGREi",
  "key23": "5G9fpaY7DWwxVAMLDtCYT62EgBYxjPvWFnio2TYc6V9iadgihAKwLXUaQVsF2SSGaCMQVQyqvdSKhEzxX5i9UJX",
  "key24": "21tT9ZYfuXvcj1p1rbU2vpVGhYBBeyPifFgMUYTqd4h9qvK85c84KVuzYmpkPJ5hKUm5vJMPAkBGFFiMx6LACpza",
  "key25": "3jFi16RF8cRNtUC4bhR3qSJRsk7jWsKNqMb15AFYggr4UYrrBg3QqTTwqMQ6y99KbQEDE1X6dhBJ8prwDiTvCYX8",
  "key26": "2kPhP4g6kftXT2TXWjKBZwFdQy4jDfy4J8S7BEDicWhpmmYybgfnwVcwcXGmgPiSkDD3CpyXX1iufvC77Ja2zGax"
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
